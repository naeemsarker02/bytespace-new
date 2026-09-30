import { cn } from "@/lib/cn";

interface TextFieldProps {
  id: string;
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  autoComplete: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}

// Labelled text input used by the auth forms.
export default function TextField({ id, name, label, type, placeholder, autoComplete, value, error, onChange }: TextFieldProps) {
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-base leading-[1.6] text-shuttle-950">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        value={value}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        onChange={(event) => onChange(event.target.value)}
        className={cn(
          "h-[52px] w-full rounded-float border bg-white px-6 text-lg leading-[1.6] text-shuttle-950 placeholder:text-shuttle-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-persian-800",
          error ? "border-red-600" : "border-shuttle-200",
        )}
      />
      {error && (
        <p id={errorId} className="text-sm leading-[1.4] text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
