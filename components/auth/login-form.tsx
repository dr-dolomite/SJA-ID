"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { signinSchema, type SigninFormData } from "@/lib/validations/auth";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Partial<SigninFormData>>({});
  const [generalError, setGeneralError] = useState("");
  const [redirectMessage, setRedirectMessage] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const message = searchParams.get("message");
    if (message) {
      setRedirectMessage(decodeURIComponent(message));
    }
  }, [searchParams]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrors({});
    setGeneralError("");

    const formData = new FormData(event.currentTarget);
    const data = {
      employeeId: formData.get("employeeId") as string,
      password: formData.get("password") as string,
    };

    // Validate form data
    try {
      const validatedData = signinSchema.parse(data);

      // Attempt to sign in
      const result = await signIn("credentials", {
        employeeId: validatedData.employeeId,
        password: validatedData.password,
        redirect: false,
      });
      if (result?.error) {
        setGeneralError("Invalid employee ID or password");
      } else if (result?.ok) {
        // Redirect to callback URL if present, otherwise dashboard
        const callbackUrl = searchParams.get("callbackUrl");
        router.push(
          callbackUrl ? decodeURIComponent(callbackUrl) : "/dashboard"
        );
      }
    } catch (error: any) {
      if (error.errors) {
        const fieldErrors: Partial<SigninFormData> = {};
        error.errors.forEach((err: any) => {
          if (err.path) {
            fieldErrors[err.path[0] as keyof SigninFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }

    setIsLoading(false);
  };
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 md:grid-cols-2">
          <form className="p-6 md:p-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {" "}
              <div className="flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold">Welcome back Guardian!</h1>
                <p className="text-balance text-muted-foreground">
                  Login to SJA Card Record System
                </p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="employeeId">Employee ID</Label>
                <Input
                  id="employeeId"
                  name="employeeId"
                  type="text"
                  placeholder="403950-0000"
                  required
                  disabled={isLoading}
                />
                {errors.employeeId && (
                  <p className="text-sm text-red-600">{errors.employeeId}</p>
                )}
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/auth/reset-password"
                    className="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={togglePasswordVisibility}
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
                {redirectMessage && (
                  <div className="text-sm text-yellow-600">
                    {redirectMessage}
                  </div>
                )}

                {errors.password && (
                  <p className="text-sm text-red-600">{errors.password}</p>
                )}
              </div>
              {generalError && (
                <p className="text-sm text-red-600">{generalError}</p>
              )}
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </div>
          </form>{" "}
          <div className="relative hidden bg-muted md:block">
            <Image
              src="/front-school.png"
              alt="SJA School Front View"
              fill
              className="object-cover rounded-tl-md rounded-bl-md"
              priority
            />
          </div>
        </CardContent>
      </Card>{" "}
      <div className="text-balance text-center text-xs text-muted-foreground">
        By clicking continue, you agree to our{" "}
        <Link href="/legal/terms" className="underline hover:text-primary">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link href="/legal/privacy" className="underline hover:text-primary">
          Privacy Policy
        </Link>
        .
      </div>
    </div>
  );
}
