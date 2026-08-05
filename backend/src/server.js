import Fastify from 'fastify';
import fastifyCookie from '@fastify/cookie';
import fastifyJwt from '@fastify/jwt';
import dotenv from 'dotenv';
import corsPlugin from './plugins/cors.js';
import membershipRoutes from './routes/membership.js';
import authRoutes from './routes/auth.js';
import attendanceRoutes from './routes/attendance.js';

// Load environment variables
dotenv.config();

const fastify = Fastify({
  logger: {
    transport: {
      target: 'pino-pretty',
      options: {
        translateTime: 'HH:MM:ss Z',
        ignore: 'pid,hostname',
      },
    },
  },
});

// Register Plugins
await fastify.register(corsPlugin);

// Register Cookie support
await fastify.register(fastifyCookie, {
  secret: process.env.COOKIE_SECRET || 'flurry-cookie-secret-key-32chars-min-needed',
});

// Register JWT support with cookie integration
await fastify.register(fastifyJwt, {
  secret: process.env.JWT_SECRET || 'flurry-jwt-secret-key',
  cookie: {
    cookieName: 'session_token',
    signed: false,
  },
});

// Authentication middleware decorator — used by officer-only routes
fastify.decorate('verifyOfficer', async (request, reply) => {
  try {
    await request.jwtVerify();

    if (request.user.role !== 'Officer' && request.user.role !== 'Lead') {
      return reply.code(403).send({
        error: 'Forbidden',
        message: 'Insufficient Privileges: Access denied.',
      });
    }
  } catch (err) {
    return reply.code(401).send({
      error: 'Unauthorized',
      message: 'Invalid or expired session token.',
    });
  }
});

// Register Routes with prefix /api
await fastify.register(membershipRoutes, { prefix: '/api' });
await fastify.register(authRoutes, { prefix: '/api' });
await fastify.register(attendanceRoutes, { prefix: '/api' });

// Health check endpoint
fastify.get('/health', async (request, reply) => {
  return { status: 'OK', timestamp: new Date().toISOString() };
});

const start = async () => {
  const port = process.env.PORT || 3000;
  const host = process.env.HOST || '0.0.0.0';

  try {
    await fastify.listen({ port: Number(port), host });
    fastify.log.info(`Server running at http://${host === '0.0.0.0' ? 'localhost' : host}:${port}`);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
