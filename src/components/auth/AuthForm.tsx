"use client";

import Image from "next/image";
import { useState } from "react";
import type { FormEvent } from "react";
import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";
import { assets } from "@/data/assets";
import { authContent, socialProviders } from "@/data/auth";
import type { AuthMode } from "@/data/auth";
import { validateFields } from "@/lib/validation";

// Client Component: it keeps the typed values and the validation errors in state.
// There is no backend in this assessment, so a valid form only shows a confirmation message.
export default function AuthForm({ mode }: { mode: AuthMode }) {
  const content = authContent[mode];
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateFields(content.fields, values);
    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  }

  return (
    <div className="flex flex-col">
      <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-8">
        {content.fields.map((field) => (
          <TextField
            key={field.name}
            id={`${mode}-${field.name}`}
            name={field.name}
            label={field.label}
            type={field.type}
            placeholder={field.placeholder}
            autoComplete={field.autoComplete}
            value={values[field.name] ?? ""}
            error={errors[field.name]}
            onChange={(value) => setValues((current) => ({ ...current, [field.name]: value }))}
          />
        ))}
        <div className="flex justify-end">
          <Button type="submit">{content.submitLabel}</Button>
        </div>
        {submitted && (
          <p role="status" className="text-sm leading-[1.6] text-persian-800">
            Looks good! This is a front-end demo, so no account is created.
          </p>
        )}
      </form>

      {content.showSocial && (
        <>
          <div className="mt-16 flex items-center gap-4 text-lg leading-[1.6] text-shuttle-500">
            <span className="h-px flex-1 bg-shuttle-300" />
            or
            <span className="h-px flex-1 bg-shuttle-300" />
          </div>
          <div className="mt-8 flex justify-center gap-4">
            {socialProviders.map((provider) => (
              <button
                key={provider.id}
                type="button"
                aria-label={provider.label}
                className="flex size-[72px] items-center justify-center rounded-float border border-shuttle-200 bg-white transition-colors hover:bg-shuttle-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-persian-800"
              >
                <Image src={assets.icons[provider.id]} alt="" width={40} height={40} />
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
