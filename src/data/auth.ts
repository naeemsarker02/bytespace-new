// Copy and fields for the Sign In and Sign Up pages, so both pages share one component.

export type AuthMode = "login" | "register";

export interface AuthField {
  name: string;
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
  autoComplete: string;
  minLength?: number;
}

export interface AuthContent {
  eyebrow: string;
  heading: string;
  fields: AuthField[];
  submitLabel: string;
  showSocial: boolean;
  alt: { text: string; linkLabel: string; href: string };
  side: { title: string; text: string };
}

const email: AuthField = {
  name: "email",
  label: "Email",
  type: "email",
  placeholder: "designer@example.com",
  autoComplete: "email",
};

const password: AuthField = {
  name: "password",
  label: "Password",
  type: "password",
  placeholder: "********",
  autoComplete: "current-password",
  minLength: 8,
};

export const authContent: Record<AuthMode, AuthContent> = {
  login: {
    eyebrow: "Sign In",
    heading: "Welcome Back",
    fields: [email, password],
    submitLabel: "Sign In",
    showSocial: true,
    alt: { text: "New user?", linkLabel: "Create an account", href: "/register" },
    side: {
      title: "Sign in with ease",
      text: "Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.",
    },
  },
  register: {
    eyebrow: "Create an Account",
    heading: "Welcome to ByteSpace",
    fields: [
      { name: "fullName", label: "Full Name", type: "text", placeholder: "Jamie Davis", autoComplete: "name", minLength: 2 },
      email,
      { ...password, autoComplete: "new-password" },
    ],
    submitLabel: "Continue",
    showSocial: false,
    alt: { text: "Already have an account?", linkLabel: "Login", href: "/login" },
    side: {
      title: "Sign up and come in",
      text: "The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost",
    },
  },
};

export const socialProviders = [
  { id: "facebook", label: "Continue with Facebook" },
  { id: "google", label: "Continue with Google" },
] as const;
