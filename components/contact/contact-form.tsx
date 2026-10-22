"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ds/button";
import { Field, SelectField } from "@/components/ds/field";
import { TextLink } from "@/components/ds/text-link";

type Errors = Partial<Record<"name" | "email" | "project", string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(form: FormData) {
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const project = String(form.get("project") ?? "").trim();
  const errors: Errors = {};
  if (!name) errors.name = "Tell us what to call you.";
  if (!EMAIL.test(email))
    errors.email = "Enter an email we can reply to, like name@company.com.";
  if (!project) errors.project = "A sentence or two is enough.";
  return { name, errors };
}

/**
 * The "Prefer to write?" form. Like the original site it validates in the browser
 * and confirms on screen; nothing is sent anywhere yet.
 */
export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sentBy, setSentBy] = useState<string | null>(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, errors } = validate(new FormData(event.currentTarget));
    setErrors(errors);
    if (Object.keys(errors).length === 0) setSentBy(name.split(/\s+/)[0]);
  };

  if (sentBy) {
    return (
      <p className="body-l">
        Thanks, {sentBy}. Adil will reply within one working day, from
        contact@deedslab.co. If a call is easier, pick a time above.
      </p>
    );
  }

  return (
    <form className="dl-stack" noValidate onSubmit={onSubmit}>
      <Field
        label="Name"
        name="name"
        required
        error={errors.name}
        autoComplete="name"
      />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        hint="We'll reply from contact@deedslab.co."
        error={errors.email}
        autoComplete="email"
      />
      <Field label="Company or project" name="company" />
      <Field
        label="What are you building?"
        name="project"
        required
        multiline
        hint="A few sentences is plenty. Links welcome."
        error={errors.project}
      />
      <SelectField
        label="Where are you with it?"
        name="stage"
        required
        options={[
          "Just an idea",
          "Written down",
          "Designs or a prototype",
          "Built something that needs work",
          "Already raised",
        ]}
      />
      <SelectField
        label="How did you hear about us?"
        name="source"
        options={[
          "Google or Bing",
          "ChatGPT, Claude, Perplexity or another AI assistant",
          "LinkedIn",
          "Someone recommended you",
          "Clutch or another directory",
          "Something else",
        ]}
      />
      <div className="dl-stack dl-stack--sm">
        <div>
          <Button type="submit" size="lg">
            Send to Adil
          </Button>
        </div>
        <p className="caption dl-muted">
          Adil replies within one working day. We use what you send only to
          reply and to scope your project.{" "}
          <TextLink href="/privacy">Privacy policy</TextLink>.
        </p>
      </div>
    </form>
  );
}
