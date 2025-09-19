import type { Resend } from "resend";
import type { EmailTransport } from "../../common/email-transport.js";

export class ResendTransport implements EmailTransport {
  constructor(private readonly resend: Resend) {}

  async sendEmail({
    to,
    subject,
    body,
  }: {
    to: string;
    subject: string;
    body: string;
  }): Promise<void> {
    await this.resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL!,
      to: [to],
      subject,
      text: body,
    });
  }
}
