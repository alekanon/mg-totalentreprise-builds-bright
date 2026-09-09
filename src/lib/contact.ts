import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Navn er påkrævet").max(200),
  company: z.string().trim().max(200).optional(),
  email: z.string().trim().email("Ugyldig email").max(200),
  phone: z.string().trim().max(50).optional(),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, "Besked er påkrævet").max(5000),
});

export type ContactInput = z.infer<typeof contactSchema>;

// TODO: once the domain is verified in Resend, send from an @mgtotalentreprise.dk
// address instead of the shared onboarding@resend.dev sender.
const FROM_ADDRESS = "MG Totalentreprise website <onboarding@resend.dev>";

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.CONTACT_EMAIL_TO;

    if (!apiKey || !to) {
      throw new Error(
        "Kontaktformularen er ikke konfigureret endnu (mangler RESEND_API_KEY / CONTACT_EMAIL_TO).",
      );
    }

    const lines = [
      `Navn: ${data.name}`,
      data.company ? `Virksomhed: ${data.company}` : null,
      `Email: ${data.email}`,
      data.phone ? `Telefon: ${data.phone}` : null,
      "",
      data.message,
    ].filter((line): line is string => line !== null);

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_ADDRESS,
        to: [to],
        reply_to: data.email,
        subject: `Ny henvendelse fra hjemmesiden${data.subject ? `: ${data.subject}` : ""}`,
        text: lines.join("\n"),
      }),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => "");
      throw new Error(`Resend error (${res.status}): ${body}`);
    }

    return { ok: true as const };
  });
