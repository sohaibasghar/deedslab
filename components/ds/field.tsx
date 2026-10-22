import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

type FieldProps = {
  label: ReactNode;
  name: string;
  id?: string;
  type?: string;
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  disabled?: boolean;
  multiline?: boolean;
  rows?: number;
  placeholder?: string;
  defaultValue?: string;
  autoComplete?: string;
  className?: string;
};

function describedBy(...ids: Array<string | undefined>) {
  return ids.filter(Boolean).join(" ") || undefined;
}

function FieldLabel({
  htmlFor,
  required,
  children,
}: {
  htmlFor: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="label dl-field__label">
      {children}
      {required ? null : (
        <span className="dl-field__optional"> (optional)</span>
      )}
    </label>
  );
}

export function Field({
  label,
  name,
  id,
  type = "text",
  hint,
  error,
  required,
  disabled,
  multiline,
  rows = 5,
  placeholder,
  defaultValue,
  autoComplete,
  className,
}: FieldProps) {
  const fieldId = id || `f-${name}`;
  const hintId = hint ? `${fieldId}-hint` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;
  const control = {
    id: fieldId,
    name,
    required,
    disabled,
    placeholder,
    defaultValue,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy(hintId, errorId),
    className: "body dl-field__control",
  };
  return (
    <div
      className={cx(
        "dl-field",
        !!error && "is-error",
        disabled && "is-disabled",
        className,
      )}
    >
      <FieldLabel htmlFor={fieldId} required={required}>
        {label}
      </FieldLabel>
      {hint ? (
        <p id={hintId} className="caption dl-field__hint">
          {hint}
        </p>
      ) : null}
      {multiline ? (
        <textarea rows={rows} {...control} />
      ) : (
        <input type={type} autoComplete={autoComplete} {...control} />
      )}
      {error ? (
        <p id={errorId} className="caption dl-field__error">
          {error}
        </p>
      ) : null}
    </div>
  );
}

type SelectFieldProps = {
  label: ReactNode;
  name: string;
  id?: string;
  options: string[];
  hint?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
};

export function SelectField({
  label,
  name,
  id,
  options,
  hint,
  error,
  required,
  placeholder = "Choose one",
  defaultValue = "",
  className,
}: SelectFieldProps) {
  const fieldId = id || `f-${name}`;
  const hintId = hint ? `${fieldId}-hint` : undefined;
  const errorId = error ? `${fieldId}-error` : undefined;
  return (
    <div className={cx("dl-field", !!error && "is-error", className)}>
      <FieldLabel htmlFor={fieldId} required={required}>
        {label}
      </FieldLabel>
      {hint ? (
        <p id={hintId} className="caption dl-field__hint">
          {hint}
        </p>
      ) : null}
      <select
        id={fieldId}
        name={name}
        required={required}
        defaultValue={defaultValue}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(hintId, errorId)}
        className="body dl-field__control dl-field__select"
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error ? (
        <p id={errorId} className="caption dl-field__error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
