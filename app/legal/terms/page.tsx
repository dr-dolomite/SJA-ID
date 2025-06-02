import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-muted/50 p-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-6">
          <Link href="/auth/login">
            <Button variant="outline">← Back to Login</Button>
          </Link>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">
              Terms of Service
            </CardTitle>
            <p className="text-center text-muted-foreground">
              SJA Card Record System - Last updated: June 2025
            </p>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                1. Acceptance of Terms
              </h2>
              <p className="mb-4">
                By accessing and using the SJA Card Record System ("the
                System"), you agree to be bound by these Terms of Service and
                all applicable laws and regulations. If you do not agree with
                any of these terms, you are prohibited from using the System.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                2. System Purpose and Scope
              </h2>
              <p className="mb-4">
                The SJA Card Record System is designed exclusively for
                authorized school personnel to manage student records, grades,
                and academic information for St. Joseph's Academy of Malinao,
                Inc. The System serves educational administration purposes only.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                3. User Accounts and Access
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Access is restricted to authorized school employees with valid
                  Employee IDs
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of
                  your login credentials
                </li>
                <li>
                  You must not share your account with others or allow
                  unauthorized access
                </li>
                <li>
                  You must immediately report any suspected unauthorized use of
                  your account
                </li>
                <li>
                  The school reserves the right to suspend or terminate accounts
                  at any time
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                4. Authorized Use
              </h2>
              <p className="mb-2">You may only use the System for:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Viewing student records within your authorized access level
                </li>
                <li>
                  Entering and updating grades for subjects you are assigned to
                  teach
                </li>
                <li>Performing administrative tasks related to your role</li>
                <li>Generating reports as required for educational purposes</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                5. Prohibited Activities
              </h2>
              <p className="mb-2">You must not:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access student information outside your authorized role</li>
                <li>
                  Share, distribute, or disclose student data to unauthorized
                  parties
                </li>
                <li>
                  Modify grades or records you are not authorized to change
                </li>
                <li>
                  Use the System for personal, commercial, or non-educational
                  purposes
                </li>
                <li>
                  Attempt to circumvent security measures or access controls
                </li>
                <li>
                  Upload malicious software or attempt to damage the System
                </li>
                <li>
                  Use automated tools to extract or scrape data from the System
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                6. Data Protection and Privacy
              </h2>
              <p className="mb-4">
                All student information is protected under applicable privacy
                laws and school policies. You agree to handle all data in
                accordance with the Family Educational Rights and Privacy Act
                (FERPA) and other relevant regulations. Unauthorized disclosure
                of student information may result in legal action.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                7. System Availability
              </h2>
              <p className="mb-4">
                While we strive to maintain system availability, the school does
                not guarantee uninterrupted access. Scheduled maintenance,
                updates, or technical issues may temporarily affect system
                availability.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                8. User Responsibilities
              </h2>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Ensure accuracy when entering or updating student information
                </li>
                <li>
                  Follow all school policies regarding record-keeping and
                  grading
                </li>
                <li>Log out properly when finished using the System</li>
                <li>
                  Report technical issues or suspected security breaches
                  immediately
                </li>
                <li>Keep your contact information up to date</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                9. Intellectual Property
              </h2>
              <p className="mb-4">
                The System, including its design, features, and content, is the
                property of St. Joseph's Academy of Malinao, Inc. You may not
                copy, modify, distribute, or create derivative works based on
                the System.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                10. Disciplinary Actions
              </h2>
              <p className="mb-4">
                Violation of these terms may result in disciplinary action,
                including but not limited to account suspension, termination of
                access, and formal disciplinary procedures as outlined in school
                policies.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                11. Changes to Terms
              </h2>
              <p className="mb-4">
                St. Joseph's Academy of Malinao, Inc. reserves the right to
                modify these Terms of Service at any time. Continued use of the
                System after changes are posted constitutes acceptance of the
                new terms.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                12. Contact Information
              </h2>
              <p className="mb-4">
                For questions about these Terms of Service, please contact the
                IT Administration or Principal's Office at St. Joseph's Academy
                of Malinao, Inc.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                13. Governing Law
              </h2>
              <p className="mb-4">
                These Terms of Service are governed by the laws of the
                Philippines and the educational regulations applicable to
                private schools.
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
