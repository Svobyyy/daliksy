"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function SendEmail(e) {
  console.log("test");

  await resend.emails.send({
    from: "dupscaled@resend.dev",
    to: "fugiasrecord@gmail.com",
    subject: "Testuju jestli to funguje",
    html: (`
        <h1>${e.get("name")}</h1>
        <h2>${e.get("email")}</h2>
        <p>${e.get("message")}</p>
    `)
  });

  return true;
}
