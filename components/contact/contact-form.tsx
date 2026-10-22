"use client";

import { useActionState, useState, type FormEvent } from "react";
import { sendEnquiry } from "@/app/contact/actions";
import { Button } from "@/components/ds/button";
import { Field, SelectField } from "@/components/ds/field";
import { TextLink } from "@/components/ds/text-link";
import {
  readEnquiry,
  validateEnquiry,
  type EnquiryErrors,
  type EnquiryState,
} from "@/lib/enquiry";
import { SITE } from "@/lib/site";

const INITIAL: EnquiryState = { status: "idle" };

/**
 * The "Prefer to write?" form. Fields are checked in the browser first, then the
 * enquiry is emailed to the studio from the server. If sending fails, the form
 * keeps what was typed and says how else to get in touch.
 */
export function ContactForm() {
  const [state, formAction, pending] = useActionState(sendEnquiry, INITIAL);
  const [clientErrors, setClientErrors] = useState<EnquiryErrors>({});

  // Stop an incomplete form before it reaches the server.
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    const errors = validateEnquiry(
      readEnquiry(new FormData(event.currentTarget)),
    );
    setClientErrors(errors);
    if (Object.keys(errors).length) event.preventDefault();
  };

  if (state.status === "sent") {
    return (
      <p className="body-l" role="status">
        Thanks, {state.firstName}. We&apos;ll reply within one working day, from{" "}
        {SITE.email}. If a call is easier, pick a time above.
      </p>
    );
  }

  const errors =
    state.status === "invalid"
      ? { ...state.errors, ...clientErrors }
      : clientErrors;
  // After the server answers, React resets the form; refill it with what was sent.
  const values =
    state.status === "invalid" || state.status === "failed"
      ? state.values
      : undefined;
  const formKey = values ? JSON.stringify(values) : "empty";

  return (
    <form
      key={formKey}
      className="dl-stack"
      noValidate
      action={formAction}
      onSubmit={onSubmit}
    >
      {/* Left empty by people; bots fill it in. Hidden from view and from screen readers. */}
      <div aria-hidden="true" className="dl-sr">
        <label htmlFor="f-website">Website</label>
        <input
          id="f-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <Field
        label="Name"
        name="name"
        required
        error={errors.name}
        autoComplete="name"
        defaultValue={values?.name}
      />
      <Field
        label="Email"
        name="email"
        type="email"
        required
        hint={`We'll reply from ${SITE.email}.`}
        error={errors.email}
        autoComplete="email"
        defaultValue={values?.email}
      />
      <Field
        label="Company or project"
        name="company"
        defaultValue={values?.company}
      />
      <Field
        label="What are you building?"
        name="project"
        required
        multiline
        hint="A few sentences is plenty. Links welcome."
        error={errors.project}
        defaultValue={values?.project}
      />
      <SelectField
        label="Where are you with it?"
        name="stage"
        required
        defaultValue={values?.stage}
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
        defaultValue={values?.source}
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
        {state.status === "failed" ? (
          <p className="body-s dl-field__error" role="alert">
            We couldn&apos;t send your message just now. Please try again, or
            email{" "}
            <TextLink href={`mailto:${SITE.email}`}>{SITE.email}</TextLink>.
          </p>
        ) : null}
        <div>
          <Button type="submit" loading={pending}>
            Submit
          </Button>
        </div>
        <p className="caption dl-muted">
          We reply within one working day. We use what you send only to reply
          and to scope your project.{" "}
          <TextLink href="/privacy">Privacy policy</TextLink>.
        </p>
      </div>
    </form>
  );
}
