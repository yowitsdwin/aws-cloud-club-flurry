import { supabase } from '../supabase.js';

export default async function attendanceRoutes(fastify, options) {
  // Protect all endpoints in this module with officer verification
  fastify.addHook('preHandler', fastify.verifyOfficer);

  // JSON Schema for attendance scan payload
  const attendanceScanSchema = {
    body: {
      type: 'object',
      required: ['target_member_id', 'event_id'],
      properties: {
        target_member_id: { type: 'string', minLength: 8, maxLength: 8 },
        event_id: { type: 'integer' },
      },
    },
  };

  // POST: Record member attendance for an event (QR scan or manual entry)
  fastify.post(
    '/attendance/scan',
    { schema: attendanceScanSchema },
    async (request, reply) => {
      const officerId = request.user.member_id;
      const { target_member_id, event_id } = request.body;

      try {
        const { data: targetMember } = await supabase
          .from('memberships')
          .select('is_active')
          .eq('member_id', target_member_id)
          .maybeSingle();

        if (!targetMember) {
          return reply.code(404).send({
            error: 'Invalid Pass',
            message: 'No registered member matches this identifier.',
          });
        }

        if (!targetMember.is_active) {
          return reply.code(400).send({
            error: 'Suspended Pass',
            message: 'This member card is flagged inactive.',
          });
        }

        const { error } = await supabase
          .from('event_attendance')
          .insert([
            {
              event_id,
              member_id: target_member_id,
              scanned_by: officerId,
            },
          ]);

        if (error) {
          if (error.code === '23505') {
            return reply.code(409).send({
              error: 'Already Checked-In',
              message:
                'This member has already been recorded for this event.',
            });
          }

          if (error.code === '23503') {
            return reply.code(404).send({
              error: 'Not Found',
              message:
                'Referenced event or officer identity does not exist.',
            });
          }

          throw error;
        }

        return reply.code(200).send({
          success: true,
          message: 'Attendance recorded accurately.',
        });
      } catch (err) {
        fastify.log.error(err);

        return reply.code(500).send({
          error: 'Database record processing failures occurred.',
        });
      }
    }
  );

  // JSON Schema for event creation payload
  const eventCreateSchema = {
    body: {
      type: 'object',
      required: ['title', 'eventDate'],
      properties: {
        title: { type: 'string', minLength: 1 },
        description: { type: 'string' },
        eventDate: { type: 'string' }, // ISO 8601 timestamp
      },
    },
  };

  // POST: Create an event
  fastify.post(
    '/events',
    { schema: eventCreateSchema },
    async (request, reply) => {
      const { title, description, eventDate } = request.body;

      try {
        const { data, error } = await supabase
          .from('events')
          .insert([
            {
              title,
              description: description || null,
              event_date: eventDate,
            },
          ])
          .select()
          .single();

        if (error) throw error;

        return reply.code(201).send({ success: true, data });
      } catch (err) {
        fastify.log.error(err);
        return reply.code(500).send({ error: 'Failed to create event.' });
      }
    }
  );

  // GET: List all events
  fastify.get('/events', async (request, reply) => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('event_date', { ascending: false });

      if (error) throw error;

      return { success: true, count: data.length, data };
    } catch (err) {
      fastify.log.error(err);
      return reply.code(500).send({ error: 'Failed to fetch events.' });
    }
  });
}
