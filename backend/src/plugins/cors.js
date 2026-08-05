import fp from 'fastify-plugin';
import cors from '@fastify/cors';

/**
 * Fastify CORS plugin configuration
 */
async function corsPlugin(fastify, opts) {
  fastify.register(cors, {
    // Allow local development ports and standard production hosts
    origin: (origin, cb) => {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) {
        cb(null, true);
        return;
      }
      
      const hostname = new URL(origin).hostname;
      if (
        hostname === 'localhost' ||
        hostname === '127.0.0.1' ||
        /\.local$/.test(hostname) // Allow local network devices (e.g. laptop-name.local)
      ) {
        cb(null, true);
        return;
      }
      
      // Add production domains here if needed in the future
      cb(null, true);
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });
}

export default fp(corsPlugin);
