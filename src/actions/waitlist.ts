"use server";
import { sendEmail } from "@/lib/resend";
import { WaitlistEmail } from "@/components/emails/waitlist";
import { render } from "@react-email/render";

// Simple in-memory store for development
// In production, this should be replaced with a proper database
const waitlistEmails = new Set<string>();

// Simple rate limiting in memory
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 3;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const existing = rateLimitStore.get(ip);

  if (!existing || now > existing.resetTime) {
    // Reset or create new entry
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (existing.count >= RATE_LIMIT_MAX) {
    return false;
  }

  existing.count++;
  return true;
}

export async function addToWaitlist(email: string, ip: string) {
  if (!email) throw new Error("email is required");

  const isAllowed = checkRateLimit(ip);
  if (!isAllowed) throw new Error("Too many requests, please try again later.");

  const isNewEmail = !waitlistEmails.has(email);
  waitlistEmails.add(email);

  return { success: true, isNewEmail };
}

export async function getWaitlistCount() {
  return waitlistEmails.size;
}

export async function sendJoiningEmail(email: string) {
  const emailHtml = await render(WaitlistEmail({ email }));

  await sendEmail({
    from: process.env.RESEND_FROM!,
    to: [email],
    subject: "You are on the waitlist! 🎉",
    html: emailHtml,
  });
}
