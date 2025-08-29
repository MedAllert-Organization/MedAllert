type EmailPayload = {
  to: string;
  subject: string;
  body: string;
};

export interface EmailTransport {
  sendEmail(config: EmailPayload): Promise<void>;
}

class DevelopmentEmailTransport implements EmailTransport {
  async sendEmail({ to, subject, body }: EmailPayload): Promise<void> {
    console.log(`
Development Email Transport:
=========================
To: ${to}
Subject: ${subject}
Body: ${body}`);
  }
}

export const defaultEmailTransport = new DevelopmentEmailTransport();
