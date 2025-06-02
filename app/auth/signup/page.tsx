import { auth } from "@/auth";
import { SignupForm } from "@/components/auth/signup-form";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function SignupPage() {
  const session = await auth();

  // For now, make it publicly accessible if no users exist
  // Later, restrict to admins only
  if (session && session.user.role !== "ADMIN") {
    redirect("/dashboard");
  }

  return (
    <div className="container mx-auto p-6 max-w-md">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Create User Account</h1>
        {session && (
          <Link href="/dashboard">
            <Button variant="outline">Back to Dashboard</Button>
          </Link>
        )}
      </div>
      
      <SignupForm />
      
      {!session && (
        <div className="mt-6 text-center">
          <Link href="/auth/login" className="text-sm underline hover:text-primary">
            Already have an account? Sign in
          </Link>
        </div>
      )}
    </div>
  );
}
