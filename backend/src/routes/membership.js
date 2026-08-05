import { supabase } from '../supabase.js';
import { createUniqueMemberID } from '../utils/idGenerator.js';
import { sendMemberIDEmail } from '../utils/mailer.js';

// Valid colleges and their programs for validation
const ACADEMIC_DATA = {
  'College of Information Technology': [
    'Bachelors of Science in Information Technology',
  ],
  'College of Teachers Education': [
    'Bachelors of Science in Elementary Education',
    'Bachelors of Science in Secondary Education - Major in Math',
    'Bachelors of Science in Secondary Education - Major in English',
  ],
  'College of Hotel and Tourism Management': [
    'Bachelors of Science in Hotel Management',
    'Bachelors of Science in Tourism Management',
  ],
};

const VALID_YEAR_LEVELS = ['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year', 'Alumni'];

export default async function membershipRoutes(fastify, options) {
  // JSON Schema for request validation
  const membershipPostSchema = {
    body: {
      type: 'object',
      required: ['firstName', 'lastName', 'email', 'studentId', 'birthdate', 'college', 'program', 'yearLevel'],
      properties: {
        firstName: { type: 'string', minLength: 1 },
        lastName: { type: 'string', minLength: 1 },
        middleName: { type: 'string' },
        nickname: { type: 'string' },
        email: { type: 'string', pattern: '^\\S+@\\S+\\.\\S+$' }, // Simple email regex
        studentId: { type: 'string', minLength: 3 },
        birthdate: { type: 'string', pattern: '^\\d{4}-\\d{2}-\\d{2}$' }, // YYYY-MM-DD
        college: { type: 'string' },
        program: { type: 'string' },
        yearLevel: { type: 'string' },
        facebook: { type: 'string' },
        linkedin: { type: 'string' },
        github: { type: 'string' },
        department: { type: 'string' },
      },
    },
  };

  // POST: Apply for membership
  fastify.post('/memberships', { schema: membershipPostSchema }, async (request, reply) => {
    const {
      firstName,
      lastName,
      middleName,
      nickname,
      email,
      studentId,
      birthdate,
      college,
      program,
      yearLevel,
      facebook,
      linkedin,
      github,
      department,
    } = request.body;

    // 1. Extra Business Logic Validation
    // Validate college
    if (!ACADEMIC_DATA[college]) {
      return reply.status(400).send({
        error: 'Bad Request',
        message: `Invalid college. Choose from: ${Object.keys(ACADEMIC_DATA).join(', ')}`,
      });
    }

    // Validate program exists in selected college
    if (!ACADEMIC_DATA[college].includes(program)) {
      return reply.status(400).send({
        error: 'Bad Request',
        message: `Invalid program for ${college}. Choose from: ${ACADEMIC_DATA[college].join(', ')}`,
      });
    }

    // Validate year level
    if (!VALID_YEAR_LEVELS.includes(yearLevel)) {
      return reply.status(400).send({
        error: 'Bad Request',
        message: `Invalid year level. Choose from: ${VALID_YEAR_LEVELS.join(', ')}`,
      });
    }

    // Generate immutable 8-character Member ID
    let memberId;
    try {
      memberId = await createUniqueMemberID(supabase);
    } catch (idErr) {
      fastify.log.error(idErr, 'Member ID generation failed');
      return reply.status(500).send({
        error: 'Internal Server Error',
        message: 'Failed to generate Member ID. Please try again later.',
      });
    }

    // Map frontend request body fields to PostgreSQL/Supabase database columns (snake_case)
    const membershipData = {
      member_id: memberId,
      first_name: firstName,
      last_name: lastName,
      middle_name: middleName || null,
      nickname: nickname || null,
      email: email.toLowerCase().trim(),
      student_id: studentId.trim(),
      birthdate,
      college,
      program,
      year_level: yearLevel,
      facebook: facebook || null,
      linkedin: linkedin || null,
      github: github || null,
      department: department || null,
      role: 'Member',
      is_active: true,
    };

    try {
      const formattedEmail = email.toLowerCase().trim();
      const formattedStudentId = studentId.trim();

      // 1. Check for duplicates in Supabase
      const { data: existingMembers, error: checkError } = await supabase
        .from('memberships')
        .select('email, student_id')
        .or(`email.eq.${formattedEmail},student_id.eq.${formattedStudentId}`);

      if (checkError) {
        throw checkError;
      }

      if (existingMembers && existingMembers.length > 0) {
        const hasDuplicateEmail = existingMembers.some(
          (m) => m.email.toLowerCase() === formattedEmail
        );
        const hasDuplicateStudentId = existingMembers.some(
          (m) => m.student_id.trim() === formattedStudentId
        );

        if (hasDuplicateEmail && hasDuplicateStudentId) {
          return reply.status(409).send({
            error: 'Conflict',
            message: 'Both Email and Student ID are already registered.',
          });
        } else if (hasDuplicateEmail) {
          return reply.status(409).send({
            error: 'Conflict',
            message: 'Email address is already registered.',
          });
        } else if (hasDuplicateStudentId) {
          return reply.status(409).send({
            error: 'Conflict',
            message: 'Student ID is already registered.',
          });
        }
      }

      // 2. Insert into Supabase 'memberships' table
      const { data, error } = await supabase
        .from('memberships')
        .insert([membershipData])
        .select();

      if (error) {
        // Fallback constraint handler
        if (error.code === '23505') {
          return reply.status(409).send({
            error: 'Conflict',
            message: 'Email or Student ID is already registered.',
          });
        }
        throw error;
      }

      return reply.status(201).send({
        success: true,
        message: 'Membership application submitted successfully!',
        member_id: data[0].member_id,
        data: data[0],
      });
    } catch (err) {
      fastify.log.error(err, 'Supabase insertion failed');
      return reply.status(500).send({
        error: 'Internal Server Error',
        message: err.message || 'Failed to process membership application. Please try again later.',
      });
    }
  });

  // GET: Fetch all membership applications (Useful for local testing and admin/officer dashboard)
  fastify.get('/memberships', async (request, reply) => {
    try {
      const { data, error } = await supabase
        .from('memberships')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      return {
        success: true,
        count: data.length,
        data,
      };
    } catch (err) {
      fastify.log.error(err, 'Supabase fetch failed');
      return reply.status(500).send({
        error: 'Internal Server Error',
        message: err.message || 'Failed to fetch membership applications.',
      });
    }
  });

  // POST: Find Member ID — sends recovery email if the email is registered
  const findIdSchema = {
    body: {
      type: 'object',
      required: ['email'],
      properties: {
        email: { type: 'string', pattern: '^\\S+@\\S+\\.\\S+$' },
      },
    },
  };

  fastify.post('/memberships/find-id', { schema: findIdSchema }, async (request, reply) => {
    const email = request.body.email.toLowerCase().trim();

    try {
      const { data: member, error } = await supabase
        .from('memberships')
        .select('member_id, first_name')
        .eq('email', email)
        .maybeSingle();

      if (error) throw error;

      // If member exists, trigger the email asynchronously (non-blocking)
      if (member) {
        sendMemberIDEmail(
          { to: email, firstName: member.first_name, memberId: member.member_id },
          fastify.log
        ).catch((err) => fastify.log.error(err, 'Async email send failed'));
      }

      // Always return the exact same generic response to prevent email enumeration
      return reply.code(200).send({
        success: true,
        message: 'If the email matches an active account, your Member ID has been sent to your inbox.',
      });
    } catch (err) {
      fastify.log.error(err, 'ID finder lookup failed');
      return reply.code(500).send({
        error: 'Internal Server Error',
        message: 'Internal processing error.',
      });
    }
  });
}
