"use server";

import { createHash } from "node:crypto";
import { Resend } from "resend";
import {
  firstName,
  readEnquiry,
  validateEnquiry,
  type EnquiryState,
  type EnquiryValues,
} from "@/lib/enquiry";
import { SITE } from "@/lib/site";

const escapeHtml = (text: string) =>
  text.replace(
    /[&<>"']/g,
    (ch) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        ch
      ]!,
  );

function emailBodies(values: EnquiryValues) {
  const rows: [string, string][] = [
    ["Name", values.name],
    ["Email", values.email],
    ["Company or project", values.company || "Not given"],
    ["Where they are with it", values.stage || "Not given"],
    ["How they heard about us", values.source || "Not given"],
  ];
  const text = [
    ...rows.map(([label, value]) => `${label}: ${value}`),
    "",
    "What they're building:",
    values.project,
  ].join("\n");
  const html = `<table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">${rows
    .map(
      ([label, value]) =>
        `<tr><td style="color:#5f6468">${label}</td><td>${escapeHtml(value)}</td></tr>`,
    )
    .join(
      "",
    )}</table><p style="font-family:sans-serif;font-size:14px;color:#5f6468">What they're building:</p><p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${escapeHtml(values.project)}</p>`;
  return { text, html };
}

/**
 * Emails a contact-form enquiry to the studio inbox, with Reply-To set to the
 * sender so a reply goes straight back to them. Fields are checked again here,
 * since the browser's checks can be bypassed.
 */
export async function sendEnquiry(
  _previous: EnquiryState,
  form: FormData,
): Promise<EnquiryState> {
  // A field people never see; bots fill it in. Pretend it worked and send nothing.
  if (String(form.get("website") ?? "").trim())
    return { status: "sent", firstName: "there" };

  const values = readEnquiry(form);
  const errors = validateEnquiry(values);
  if (Object.keys(errors).length) return { status: "invalid", errors, values };

  const apiKey = process.env.RESEND_API_KEY;
  const domain = process.env.RESEND_EMAIL_DOMAIN;
  if (!apiKey || !domain) {
    console.error(
      "Contact form: RESEND_API_KEY or RESEND_EMAIL_DOMAIN is not set.",
    );
    return { status: "failed", values };
  }

  const { text, html } = emailBodies(values);
  const subject = `New enquiry: ${values.name}${values.company ? ` (${values.company})` : ""}`;
  // The same enquiry submitted twice within 24 hours is only sent once.
  const fingerprint = createHash("sha256")
    .update(`${values.email}\n${values.project}`)
    .digest("hex")
    .slice(0, 32);

  const { error } = await new Resend(apiKey).emails.send(
    {
      from: `${SITE.name} website <website@${domain}>`,
      to: [SITE.email],
      replyTo: values.email,
      subject,
      text,
      html,
    },
    { idempotencyKey: `contact-enquiry/${fingerprint}` },
  );
  if (error) {
    console.error(
      "Contact form: Resend rejected the email.",
      error.name,
      error.message,
    );
    return { status: "failed", values };
  }
  return { status: "sent", firstName: firstName(values.name) };
}
