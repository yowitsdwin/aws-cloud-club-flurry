import { randomInt } from 'crypto';

/**
 * Banned substrings that should never appear in a Member ID.
 * Expand this list as needed.
 */
const BANNED_WORDS = [
  'badd',
  'wrd1',
  'wrd2',
  'scam',
  'spam',
  'hack',
  'sh1t',
  'fcku',
];

/**
 * Generates an 8-character lowercase alphanumeric string.
 * Uses crypto.randomInt for perfectly uniform distribution (no modulo bias).
 */
export function generateRandomID() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < 8; i++) {
    result += chars[randomInt(0, chars.length)];
  }

  return result;
}

/**
 * Returns true if the candidate ID does not contain any banned substrings.
 */
export function isClean(id) {
  return !BANNED_WORDS.some((word) => id.includes(word));
}

/**
 * Generates a unique, clean 8-character Member ID.
 * Checks the database for collisions before returning.
 *
 * @param {import('@supabase/supabase-js').SupabaseClient} supabaseClient
 * @returns {Promise<string>} A unique member ID
 */
export async function createUniqueMemberID(supabaseClient) {
  let attempts = 0;
  const MAX_ATTEMPTS = 10;

  while (attempts < MAX_ATTEMPTS) {
    attempts++;

    const candidateId = generateRandomID();

    if (!isClean(candidateId)) continue;

    const { data } = await supabaseClient
      .from('memberships')
      .select('member_id')
      .eq('member_id', candidateId)
      .maybeSingle();

    if (!data) {
      return candidateId;
    }
  }

  throw new Error(
    'ID generation exceeded maximum threshold limits. Check database constraints.'
  );
}
