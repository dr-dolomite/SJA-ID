import { auth } from "@/auth";
import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/auth/login" });
          }}
        >
          <Button type="submit" variant="outline">
            Sign Out
          </Button>
        </form>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Welcome Back!</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p><strong>Name:</strong> {session.user.name}</p>
              <p><strong>Employee ID:</strong> {session.user.employeeId}</p>
              <p><strong>Role:</strong> {session.user.role}</p>
            </div>
          </CardContent>
        </Card>        {session.user.role === "ADMIN" && (
          <Card>
            <CardHeader>
              <CardTitle>Admin Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>As an admin, you can:</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Create new user accounts</li>
                  <li>Manage user roles</li>
                  <li>View system logs</li>
                </ul>
                <div className="pt-2">
                  <Button asChild className="w-full" variant="outline">
                    <Link href="/auth/signup">Create New User</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Button className="w-full" variant="outline">
                View Students
              </Button>
              <Button className="w-full" variant="outline">
                Manage Grades
              </Button>
              <Button className="w-full" variant="outline">
                Reports
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}