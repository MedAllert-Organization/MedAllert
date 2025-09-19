import { t } from "try";
import { DevelopmentEmailTransport } from "../../common/email-transport.js";
import { makeResend } from "../resend/resend-client.js";
import { ResendTransport } from "../resend/resend-transport.js";

const devEmailTransport = new DevelopmentEmailTransport();

const [_ok, _error, resend] = t(makeResend);

if (!resend) {
  console.warn(
    "⚠️ Failed to load email delivery configuration (Resend). Using development configuration ⚠️",
  );
}

const resendEmailTransport = new ResendTransport(resend!);

export const defaultEmailTransport = resend
  ? resendEmailTransport
  : devEmailTransport;
