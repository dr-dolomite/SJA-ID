import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
              Privacy Policy
            </CardTitle>
            <p className="text-center text-muted-foreground">
              SJA Card Record System - Last updated: June 2025
            </p>
          </CardHeader>
          <CardContent className="prose prose-gray max-w-none">
            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                1. Introduction
              </h2>
              <p className="mb-4">
                St. Joseph's Academy of Malinao, Inc. ("we," "our," or "the
                school") is committed to protecting the privacy and
                confidentiality of personal information stored in the SJA Card
                Record System. This Privacy Policy explains how we collect, use,
                protect, and handle personal information in compliance with
                applicable privacy laws, including the Family Educational Rights
                and Privacy Act (FERPA) and Republic Act 10173 (Data Privacy Act
                of 2012).
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                2. Information We Collect
              </h2>

              <h3 className="text-lg font-medium mb-2">Student Information:</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Personal identifiers (Student ID, LRN, full name, date of
                  birth)
                </li>
                <li>Contact information (address, phone numbers)</li>
                <li>Guardian/parent information and contact details</li>
                <li>
                  Academic information (grades, enrollment status, year level,
                  section, academic track)
                </li>
                <li>Attendance and disciplinary records</li>
                <li>Academic performance and assessment data</li>
              </ul>

              <h3 className="text-lg font-medium mb-2">
                Employee Information:
              </h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Employee ID and authentication credentials</li>
                <li>Name and role within the school</li>
                <li>System access logs and activity records</li>
                <li>IP addresses and session information</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                3. How We Use Information
              </h2>
              <p className="mb-2">
                We use the collected information for legitimate educational
                purposes only:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Managing student enrollment and academic records</li>
                <li>Recording and tracking academic performance and grades</li>
                <li>Generating report cards and academic transcripts</li>
                <li>
                  Facilitating communication between teachers, administrators,
                  and parents
                </li>
                <li>
                  Ensuring compliance with educational regulations and
                  requirements
                </li>
                <li>
                  Maintaining system security and preventing unauthorized access
                </li>
                <li>
                  Generating statistical reports for educational planning
                  (anonymized data only)
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                4. Access and Disclosure
              </h2>

              <h3 className="text-lg font-medium mb-2">Authorized Access:</h3>
              <p className="mb-2">
                Access to student information is strictly limited to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Teachers:</strong> Can view and update grades for
                  subjects they teach
                </li>
                <li>
                  <strong>Registrar:</strong> Can access student records for
                  enrollment and transcript purposes
                </li>
                <li>
                  <strong>Principal:</strong> Has access to all student records
                  including grades
                </li>
                <li>
                  <strong>School Administrators:</strong> Can access student
                  records except grade modifications
                </li>
                <li>
                  <strong>IT Administrators:</strong> System maintenance access
                  only, with audit trails
                </li>
              </ul>

              <h3 className="text-lg font-medium mb-2">Information Sharing:</h3>
              <p className="mb-4">
                We do not sell, rent, or share student information with third
                parties except as required by law or with explicit consent.
                Information may be shared with:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Government agencies as required by educational regulations
                </li>
                <li>
                  Other educational institutions for legitimate transfer
                  purposes (with consent)
                </li>
                <li>
                  Parents/guardians regarding their child's academic progress
                </li>
                <li>Law enforcement agencies when legally required</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                5. Data Security
              </h2>
              <p className="mb-2">
                We implement comprehensive security measures to protect personal
                information:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Encrypted data transmission and storage</li>
                <li>Role-based access controls and user authentication</li>
                <li>Regular security audits and monitoring</li>
                <li>Secure password requirements and account management</li>
                <li>Activity logging and audit trails</li>
                <li>Regular security updates and patches</li>
                <li>Backup and disaster recovery procedures</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                6. Data Retention
              </h2>
              <p className="mb-4">
                Student records are retained according to school policies and
                legal requirements:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  Academic records: Permanently retained for transcript purposes
                </li>
                <li>
                  Grade records: Retained for the duration of the student's
                  enrollment plus 7 years
                </li>
                <li>
                  Disciplinary records: Retained for 5 years after graduation or
                  transfer
                </li>
                <li>
                  System logs: Retained for 2 years for security and audit
                  purposes
                </li>
                <li>
                  Inactive user accounts: Disabled after 1 year of inactivity
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                7. Rights of Students and Parents
              </h2>
              <p className="mb-2">
                Under FERPA and applicable laws, students and parents have the
                right to:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access and review student educational records</li>
                <li>
                  Request corrections to inaccurate or misleading information
                </li>
                <li>
                  File complaints regarding alleged violations of privacy rights
                </li>
                <li>
                  Consent to disclosure of personally identifiable information
                  (except as permitted by law)
                </li>
                <li>
                  Receive notification of data breaches affecting their
                  information
                </li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                8. Employee Responsibilities
              </h2>
              <p className="mb-2">All employees with system access must:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Protect the confidentiality of student information</li>
                <li>
                  Access only information necessary for their job functions
                </li>
                <li>
                  Report suspected privacy violations or security breaches
                </li>
                <li>Complete required privacy and security training</li>
                <li>Use strong passwords and secure authentication methods</li>
                <li>Log out of the system when not in use</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                9. Data Breach Response
              </h2>
              <p className="mb-4">In the event of a data breach, we will:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Immediately assess and contain the breach</li>
                <li>Investigate the scope and cause of the incident</li>
                <li>
                  Notify affected individuals within 72 hours when feasible
                </li>
                <li>Report to relevant authorities as required by law</li>
                <li>
                  Implement additional security measures to prevent future
                  breaches
                </li>
                <li>Provide support and resources to affected individuals</li>
              </ul>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                10. Third-Party Services
              </h2>
              <p className="mb-4">
                Our system may integrate with third-party educational services.
                We ensure that any third-party providers comply with applicable
                privacy laws and maintain appropriate security standards. We do
                not share personal information with third parties without proper
                agreements and safeguards in place.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                11. Updates to This Policy
              </h2>
              <p className="mb-4">
                We may update this Privacy Policy periodically to reflect
                changes in our practices or applicable laws. Significant changes
                will be communicated to users through the system or other
                appropriate means. Continued use of the system after changes are
                posted constitutes acceptance of the updated policy.
              </p>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                12. Contact Information
              </h2>
              <p className="mb-4">
                For questions about this Privacy Policy, to request access to
                records, or to report privacy concerns, please contact:
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <p>
                  <strong>St. Joseph's Academy of Malinao, Inc.</strong>
                </p>
                <p>IT Administrator / Principal's Office</p>
                {/* <p>Email: privacy@sja.edu.ph</p>
                <p>Phone: [School Contact Number]</p> */}
                <p>Sto. Rosario St., Poblacion, Malinao, Aklan</p>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-xl font-semibold mb-3 text-primary">
                13. Compliance
              </h2>
              <p className="mb-4">
                This Privacy Policy is designed to comply with:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Family Educational Rights and Privacy Act (FERPA) - USA</li>
                <li>
                  Republic Act 10173 (Data Privacy Act of 2012) - Philippines
                </li>
                <li>Department of Education regulations and guidelines</li>
                <li>
                  International best practices for educational data protection
                </li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
