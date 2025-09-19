import { Resend } from "resend";

const { RESEND_API_KEY, RESEND_FROM_EMAIL } = process.env;

const hasEmailDeliveyConfig = RESEND_API_KEY && RESEND_FROM_EMAIL;

export function makeResend() {
  if (!hasEmailDeliveyConfig)
    throw new Error("Failed to load resend configuration");
  return new Resend(process.env.RESEND_API_KEY);
}
