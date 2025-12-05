import type { EmailTransport } from "../../common/email-transport.js";

export class MockEmailTransport implements EmailTransport {
  sentEmails: Parameters<EmailTransport['sendEmail']>[0][] = [];
  shouldFail = false;

  async sendEmail(config: any) {
    if (this.shouldFail) throw new Error("Email failed");
    this.sentEmails.push(config);
  }
}
