import { PasswordResetForm } from "@/components/auth/password-reset-form";

export default function ResetPasswordPage() {
  return (
    <div className="container relative h-screen flex-col items-center justify-center grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900" />
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: "url('/front-school.png')"
          }}
        />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <img src="/sja-logo.png" alt="SJA Logo" className="h-8 w-8 mr-2" />
          SJA Card Record System
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              "Secure password reset to ensure your account remains protected while giving you access when you need it."
            </p>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <PasswordResetForm />
        </div>
      </div>
    </div>
  );
}