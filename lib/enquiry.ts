/** The contact form's fields and rules, shared by the browser and the server. */

export type EnquiryValues = {
  name: string;
  email: string;
  company: string;
  project: string;
  stage: string;
  source: string;
};

export type EnquiryErrors = Partial<
  Record<"name" | "email" | "project", string>
>;

export type EnquiryState =
  | { status: "idle" }
  | { status: "sent"; firstName: string }
  | { status: "invalid"; errors: EnquiryErrors; values: EnquiryValues }
  | { status: "failed"; values: EnquiryValues };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Generous caps that stop abuse without cutting off a real enquiry.
const MAX = {
  name: 120,
  email: 254,
  company: 160,
  project: 5000,
  stage: 80,
  source: 120,
};

export function readEnquiry(form: FormData): EnquiryValues {
  const get = (key: keyof EnquiryValues) =>
    String(form.get(key) ?? "")
      .trim()
      .slice(0, MAX[key]);
  return {
    name: get("name"),
    email: get("email"),
    company: get("company"),
    project: get("project"),
    stage: get("stage"),
    source: get("source"),
  };
}

export function validateEnquiry(values: EnquiryValues): EnquiryErrors {
  const errors: EnquiryErrors = {};
  if (!values.name) errors.name = "Tell us what to call you.";
  if (!EMAIL.test(values.email))
    errors.email = "Enter an email we can reply to, like name@company.com.";
  if (!values.project) errors.project = "A sentence or two is enough.";
  return errors;
}

export const firstName = (name: string) => name.split(/\s+/)[0];
