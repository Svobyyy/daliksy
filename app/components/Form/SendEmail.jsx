"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function SendEmail(e) {

    console.log("test")

  await resend.emails.send({
    from: "dupscaled@resend.dev",
    to: "fugiasrecord@gmail.com",
    subject: "Testuju jestli to funguje",
    html: `${e.get("name")}, ${e.get("email")}, ${e.get("message")}`,
  });

  return true;
}
