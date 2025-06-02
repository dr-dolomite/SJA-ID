"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { 
  passwordResetRequestSchema, 
  passwordResetConfirmSchema,
  type PasswordResetRequestData,
  type PasswordResetConfirmData 
} from "@/lib/validations/auth";

export function PasswordResetForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [step, setStep] = useState<"request" | "confirm">("request");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [generalError, setGeneralError] = useState("");
  const [resetToken, setResetToken] = useState("");
  const [userInfo, setUserInfo] = useState<{ name: string; employeeId: string } | null>(null);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  const handleRequestReset = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrors({});
    setGeneralError("");

    const formData = new FormData(event.currentTarget);
    const data = {
      employeeId: formData.get("employeeId") as string,
    };

    try {
      const validatedData = passwordResetRequestSchema.parse(data);
      
      const response = await fetch("/api/auth/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });

      const result = await response.json();

      if (!response.ok) {
        setGeneralError(result.error || "Failed to send reset request");
      } else {
        setResetToken(result.token);
        setUserInfo({ name: result.name, employeeId: result.employeeId });
        setStep("confirm");
      }
    } catch (error: any) {
      if (error.errors) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err: any) => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }

    setIsLoading(false);
  };

  const handleConfirmReset = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setErrors({});
    setGeneralError("");

    const formData = new FormData(event.currentTarget);
    const data = {
      token: resetToken,
      newPassword: formData.get("newPassword") as string,
      confirmPassword: formData.get("confirmPassword") as string,
    };

    try {
      const validatedData = passwordResetConfirmSchema.parse(data);
      
      const response = await fetch("/api/auth/reset-password", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });

      const result = await response.json();

      if (!response.ok) {
        setGeneralError(result.error || "Failed to reset password");
      } else {
        // Success - redirect to login
        window.location.href = "/auth/login?message=Password reset successfully";
      }
    } catch (error: any) {
      if (error.errors) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err: any) => {
          if (err.path) {
            fieldErrors[err.path[0]] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    }

    setIsLoading(false);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-center">
            {step === "request" ? "Reset Password" : "Set New Password"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {step === "request" ? (
            <form onSubmit={handleRequestReset} className="space-y-4">
              <div className="text-center text-sm text-muted-foreground mb-4">
                Enter your Employee ID to receive a password reset token
              </div>
              
              {generalError && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                  {generalError}
                </div>
              )}
              
              <div className="space-y-2">
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
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Reset Request"}
              </Button>
              
              <div className="text-center">
                <Link href="/auth/login" className="text-sm underline hover:text-primary">
                  Back to Login
                </Link>
              </div>
            </form>
          ) : (
            <form onSubmit={handleConfirmReset} className="space-y-4">
              <div className="text-center text-sm text-muted-foreground mb-4">
                Reset token generated for: <strong>{userInfo?.name}</strong><br/>
                Employee ID: <strong>{userInfo?.employeeId}</strong>
              </div>
              
              <div className="p-3 text-sm bg-yellow-50 border border-yellow-200 rounded-md">
                <strong>Reset Token:</strong> {resetToken}<br/>
                <small className="text-yellow-700">
                  In production, this would be sent via email
                </small>
              </div>
              
              {generalError && (
                <div className="p-3 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                  {generalError}
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="newPassword">New Password</Label>
                <div className="relative">
                  <Input
                    id="newPassword"
                    name="newPassword"
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
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
                {errors.newPassword && (
                  <p className="text-sm text-red-600">{errors.newPassword}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    disabled={isLoading}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
                {errors.confirmPassword && (
                  <p className="text-sm text-red-600">{errors.confirmPassword}</p>
                )}
              </div>
              
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Resetting..." : "Reset Password"}
              </Button>
              
              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setStep("request")}
                  className="text-sm underline hover:text-primary"
                >
                  Back to Request
                </button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}