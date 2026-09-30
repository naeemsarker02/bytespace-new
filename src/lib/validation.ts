import type { AuthField } from "@/data/auth";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Returns an error message, or "" when the value is fine.
export function validateField(field: AuthField, rawValue: string): string {
  const value = rawValue.trim();
  if (!value) return `${field.label} is required`;
  if (field.type === "email" && !emailPattern.test(value)) return "Enter a valid email address";
  if (field.minLength && value.length < field.minLength) {
    return `${field.label} must be at least ${field.minLength} characters`;
  }
  return "";
}

// Returns { fieldName: message } for every invalid field (empty object = valid).
export function validateFields(fields: AuthField[], values: Record<string, string>): Record<string, string> {
  const errors: Record<string, string> = {};
  for (const field of fields) {
    const message = validateField(field, values[field.name] ?? "");
    if (message) errors[field.name] = message;
  }
  return errors;
}
