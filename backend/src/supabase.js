import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load env variables
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey || supabaseUrl.includes('your-project-id') || supabaseKey.includes('your-supabase')) {
  console.warn('⚠️ WARNING: Supabase credentials are not configured or are using placeholders in backend/.env. Please update them to connect to your database.');
}

export const supabase = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseKey || 'placeholder-key');
