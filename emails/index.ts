import { ReactElement, JSXElementConstructor } from "react";
import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async ({
  email,
  subject,
  react,
  marketing,
  test,
}: {
  email: string | string[];
  subject: string;
  react:
    | ReactElement<any, string | JSXElementConstructor<any>>
    | null
    | undefined;
  marketing?: boolean;
  test?: boolean;
}) => {
  return resend.emails.send({
    from: marketing
      ? "Steven from Dub <steven@ship.dub.sh>"
      : "Dub <system@dub.sh>",
    to: test ? "delivered@resend.dev" : email,
    subject,
    react,
  });
};
