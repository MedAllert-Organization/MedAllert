type EmailPayload = {
  to: string;
  subject: string;
  body: string;
};

export interface EmailTransport {
  sendEmail(config: EmailPayload): Promise<void>;
}

export class DevelopmentEmailTransport implements EmailTransport {
  async sendEmail({ to, subject, body }: EmailPayload): Promise<void> {
    console.log(`
Development Email Transport:
=========================
To: ${to}
Subject: ${subject}
Body: ${body}
=========================`);
  }
}
