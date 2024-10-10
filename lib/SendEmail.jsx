"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function SendEmail(e) {
  try {
    await resend.emails.send({
      from: "dupscaled@resend.dev",
      to: `${process.env.RESEND_EMAIL}`,
      subject: "Testuju jestli to funguje",
      html: `
          <h1>${e.get("name")}</h1>
          <h2>${e.get("email")}</h2>
          <p>${e.get("message")}</p>
      `,
    });
  } catch (e) {
    console.log(e);
  }

  return true;
}
