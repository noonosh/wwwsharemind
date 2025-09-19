import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Sharemind",
  description: "Sharemind — an app that tells you what's happening around.",
  openGraph: {
    title: "Privacy Policy - Sharemind",
    description: "Sharemind — an app that tells you what's happening around.",
    type: "website",
    url: "https://sharemind.app/privacy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy - Sharemind",
    description: "Sharemind — an app that tells you what's happening around.",
  },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <div className="mx-auto max-w-4xl px-4 py-24 sm:py-32">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <div className="prose prose-lg max-w-none dark:prose-invert">
            <div className="space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At Sharemind, we are committed to protecting your privacy and
                  ensuring transparency about how we handle your data. This
                  Privacy Policy explains our practices regarding the
                  collection, use, and protection of your information when you
                  use our app and visit our website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">
                  Information We Collect
                </h2>
                <div className="space-y-3">
                  <h3 className="text-xl font-medium">Website Analytics</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    When you visit our website, we may collect basic analytics
                    data including your IP address, browser type, operating
                    system, and pages visited. This helps us understand how our
                    website is used and improve our services.
                  </p>

                  <h3 className="text-xl font-medium">Waitlist Information</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    If you join our waitlist, we collect your email address to
                    notify you about updates and app releases. This information
                    is stored securely and used solely for communication
                    purposes.
                  </p>

                  <h3 className="text-xl font-medium">App Usage</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Sharemind is designed with privacy in mind. We do not track
                    your activity history, collect personal data beyond what is
                    necessary to operate the service, or monitor your online
                    activities. Your data remains on your device unless you
                    explicitly share it.
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">
                  How We Use Your Information
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Improve our website and user experience</li>
                  <li>Communicate with waitlist subscribers about updates</li>
                  <li>Analyze website performance and usage patterns</li>
                  <li>Ensure the security and integrity of our services</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">
                  Data Sharing and Disclosure
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your consent, except in
                  the following circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>When required by law or legal process</li>
                  <li>To protect our rights, property, or safety</li>
                  <li>
                    With trusted service providers who assist in operating our
                    website (under strict confidentiality agreements)
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your
                  personal information against unauthorized access, alteration,
                  disclosure, or destruction. However, no internet transmission
                  is completely secure, and we cannot guarantee absolute
                  security.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information</li>
                  <li>Unsubscribe from our communications at any time</li>
                  <li>Object to the processing of your personal information</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website may use cookies and similar technologies to
                  enhance your experience. These are small files stored on your
                  device that help us remember your preferences and analyze
                  website traffic. You can control cookie settings through your
                  browser.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Third-Party Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website and app may contain links to third-party services
                  or websites. We are not responsible for the privacy practices
                  of these external sites. We encourage you to review their
                  privacy policies before providing any personal information.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our services are not intended for children under 13 years of
                  age. We do not knowingly collect personal information from
                  children under 13. If we become aware that we have collected
                  such information, we will take steps to delete it promptly.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">
                  Changes to This Policy
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or legal requirements. We will notify
                  you of any material changes by posting the updated policy on
                  our website with a new effective date.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold">Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy or our
                  privacy practices, please contact us at:
                </p>
                <div className="bg-muted/50 border rounded-lg p-4 space-y-2">
                  <p className="text-muted-foreground">
                    <strong>Email:</strong> privacy@sharemind.app
                  </p>
                  <p className="text-muted-foreground">
                    <strong>Subject:</strong> Privacy Policy Inquiry
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
