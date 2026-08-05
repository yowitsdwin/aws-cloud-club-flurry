import { OAuth2Client } from 'google-auth-library';
import { supabase } from '../supabase.js';

export default async function authRoutes(fastify, options) {
  const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

  // POST: Google Sign-In for Officers/Leads
  fastify.post('/auth/google-login', async (request, reply) => {
    const { idToken } = request.body;

    if (!idToken) {
      return reply.code(400).send({
        error: 'Bad Request',
        message: 'Missing idToken in request body.',
      });
    }

    try {
      const ticket = await client.verifyIdToken({
        idToken,
        audience: process.env.GOOGLE_CLIENT_ID,
      });

      const payload = ticket.getPayload();
      const googleEmail = payload.email;

      const { data: member } = await supabase
        .from('memberships')
        .select('member_id, role, first_name, is_active')
        .eq('email', googleEmail)
        .maybeSingle();

      if (!member) {
        return reply.code(403).send({
          error: 'Unauthorized Identity',
          message: 'This email is not registered in the system.',
        });
      }

      if (!member.is_active) {
        return reply.code(403).send({
          error: 'Deactivated Identity',
          message: 'Your system privileges have been suspended.',
        });
      }

      if (member.role !== 'Officer' && member.role !== 'Lead') {
        return reply.code(403).send({
          error: 'Insufficient Privileges',
          message:
            'Access denied. Regular members do not possess backend portal access.',
        });
      }

      const sessionToken = fastify.jwt.sign(
        {
          member_id: member.member_id,
          role: member.role,
        },
        {
          expiresIn: '8h',
        }
      );

      return reply
        .code(200)
        .setCookie('session_token', sessionToken, {
          path: '/',
          secure: process.env.NODE_ENV === 'production',
          httpOnly: true,
          sameSite: 'strict',
        })
        .send({
          success: true,
          user: {
            name: member.first_name,
            role: member.role,
            member_id: member.member_id,
          },
        });
    } catch (err) {
      fastify.log.error(err);

      return reply.code(401).send({
        error: 'Authentication Failed',
        message: 'Invalid token identity payload.',
      });
    }
  });

  // POST: Clear session cookie
  fastify.post('/auth/logout', async (request, reply) => {
    return reply
      .code(200)
      .clearCookie('session_token', { path: '/' })
      .send({ success: true, message: 'Logged out successfully.' });
  });
}
