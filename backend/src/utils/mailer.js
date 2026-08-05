import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;
const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

let resend = null;
if (resendApiKey) {
  resend = new Resend(resendApiKey);
}

/**
 * Sends a Member ID recovery email via Resend.
 * Falls back to console logging when RESEND_API_KEY is not configured.
 *
 * @param {{ to: string, firstName: string, memberId: string }} params
 * @param {import('fastify').FastifyBaseLogger} logger - Fastify logger instance
 */
export async function sendMemberIDEmail({ to, firstName, memberId }, logger) {
  const subject = 'Your AWS Student Builder Group – Flurry Member ID';
  const htmlBody = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 520px; margin: 0 auto; padding: 32px; background: #f0f9ff; border-radius: 16px;">
      <h2 style="color: #1a4fa8; margin-bottom: 8px;">☁️ AWS Student Builder Group – Flurry</h2>
      <p style="color: #334155; font-size: 15px; line-height: 1.6;">
        Hi <strong>${firstName}</strong>,
      </p>
      <p style="color: #334155; font-size: 15px; line-height: 1.6;">
        You requested your Member ID. Here it is:
      </p>
      <div style="background: linear-gradient(135deg, #1a4fa8, #2577d4); color: white; padding: 20px 24px; border-radius: 12px; text-align: center; margin: 24px 0;">
        <span style="font-size: 13px; text-transform: uppercase; letter-spacing: 2px; opacity: 0.85;">Your Member ID</span>
        <div style="font-size: 32px; font-weight: 800; letter-spacing: 4px; margin-top: 8px; font-family: 'Courier New', monospace;">${memberId}</div>
      </div>
      <p style="color: #64748b; font-size: 13px; line-height: 1.5;">
        Keep this ID safe — you'll need it for event check-ins and verification. If you did not request this, you can safely ignore this email.
      </p>
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />
      <p style="color: #94a3b8; font-size: 11px; text-align: center;">
        AWS Student Builder Group – Flurry Chapter
      </p>
    </div>
  `;

  // Mock mode — no API key configured
  if (!resend) {
    logger.info(
      { to, firstName, memberId },
      '[MOCK MAILER] Would have sent Member ID recovery email'
    );
    return;
  }

  // Production mode — send via Resend
  const { error } = await resend.emails.send({
    from: fromEmail,
    to,
    subject,
    html: htmlBody,
  });

  if (error) {
    logger.error({ error, to }, 'Resend email delivery failed');
  } else {
    logger.info({ to }, 'Member ID recovery email sent successfully');
  }
}
