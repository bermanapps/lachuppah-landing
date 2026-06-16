import type { Metadata } from "next";
import LegalLayout, { Section } from "../_components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy — LaChuppah",
  description: "LaChuppah Privacy Policy. How we collect, use, and protect your information.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout badge="Legal" title="Privacy Policy">

      <div className="text-stone-600 leading-relaxed text-base space-y-4 mb-12">
        <p>LaChuppah respects your privacy. This Privacy Policy explains what information we may collect, how we use it, and how users can contact us about their data.</p>
        <p>By using LaChuppah, you agree to this Privacy Policy.</p>
      </div>

      <div className="space-y-10">

        <Section num="1" title="Information We Collect">
          <p>
            LaChuppah may collect information that you provide when creating or managing a profile,
            using the app, contacting support, or interacting with other users.
          </p>
          <p>This may include:</p>
          <ul className="list-disc list-outside ml-5 space-y-1.5">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number, where required</li>
            <li>Age or date of birth</li>
            <li>Gender</li>
            <li>Location or general area</li>
            <li>Profile photos</li>
            <li>Family or background information</li>
            <li>Dating preferences</li>
            <li>Religious, community, or lifestyle information that you choose to provide</li>
            <li>Education, work, or personal background</li>
            <li>References or contact details, if provided</li>
            <li>Information submitted by parents, representatives, matchmakers, or shadchanim</li>
            <li>Reports, support messages, or safety concerns sent to us</li>
            <li>App usage information, such as login activity, profile activity, device information, and technical logs</li>
          </ul>
          <p>
            Some information may be personal or sensitive. Please only provide information that is
            appropriate and necessary for the purpose of using LaChuppah.
          </p>
        </Section>

        <Section num="2" title="How We Use Information">
          <p>We may use information to:</p>
          <ul className="list-disc list-outside ml-5 space-y-1.5">
            <li>Create and display user profiles</li>
            <li>Help users, parents, and matchmakers find appropriate potential matches</li>
            <li>Review profiles before they appear in the app</li>
            <li>Provide privacy and consent-based contact features</li>
            <li>Operate, maintain, and improve the app</li>
            <li>Respond to support requests</li>
            <li>Review reports and safety concerns</li>
            <li>Prevent abuse, scams, fake profiles, or misuse</li>
            <li>Comply with legal, safety, or platform requirements</li>
            <li>Communicate important updates about the service</li>
          </ul>
        </Section>

        <Section num="3" title="Profile Visibility">
          <p>
            Profile information may be visible to other approved users of LaChuppah, depending on
            the app's settings and matching features.
          </p>
          <p>
            LaChuppah is designed to protect privacy, but users should understand that information
            they submit to a dating or matchmaking platform may be seen by others inside the app.
            Do not submit information that you do not want other relevant users to see.
          </p>
        </Section>

        <Section num="4" title="Contact Details">
          <p>
            LaChuppah aims to protect private contact details and encourage respectful,
            consent-based communication. Contact details should not be shared or used outside the
            app in a way that violates another person's privacy or the app's rules.
          </p>
        </Section>

        <Section num="5" title="Sharing Information">
          <p>LaChuppah does not sell user personal information.</p>
          <p>
            We may share information only where needed to operate the service, such as with:
          </p>
          <ul className="list-disc list-outside ml-5 space-y-1.5">
            <li>Technology providers that help host, store, secure, or maintain the app</li>
            <li>Support or moderation team members who need access to handle reports or user issues</li>
            <li>Legal or safety authorities if required by law or necessary to protect users</li>
            <li>
              Other users, where the information is part of a profile or feature intended to be
              visible inside the app
            </li>
          </ul>
        </Section>

        <Section num="6" title="Data Storage and Security">
          <p>
            We take reasonable steps to protect user information and keep it secure. However, no
            online system can be guaranteed to be completely secure. Users should be careful about
            what they submit and should report any privacy or safety concerns immediately.
          </p>
        </Section>

        <Section num="7" title="Data Retention">
          <p>
            We keep user information for as long as needed to provide the service, manage accounts,
            handle safety issues, comply with legal obligations, resolve disputes, and improve
            the app.
          </p>
          <p>
            If a user asks for their account or profile to be deleted, we will review and process
            the request, unless we need to keep certain information for legal, safety,
            fraud-prevention, or record-keeping reasons.
          </p>
        </Section>

        <Section num="8" title="Account Deletion and Data Requests">
          <p>
            Users may request account deletion or ask privacy-related questions by contacting:{" "}
            <a
              href="mailto:support@lachuppah.app"
              className="text-[#C9923F] hover:underline"
            >
              support@lachuppah.app
            </a>
          </p>
          <p>
            Please include enough information for us to identify the relevant account or profile.
          </p>
        </Section>

        <Section num="9" title="Children and Minors">
          <p>
            LaChuppah is intended for adults seeking appropriate introductions for marriage. It is
            not intended for children or underage users. Users must not create profiles for minors
            or use the app in a way that violates applicable law.
          </p>
        </Section>

        <Section num="10" title="Third-Party Services">
          <p>
            LaChuppah may use third-party services for hosting, authentication, analytics, storage,
            email, notifications, payments, or technical support. These services may process data
            as needed to help operate the app.
          </p>
        </Section>

        <Section num="11" title="Updates to This Privacy Policy">
          <p>
            We may update this Privacy Policy from time to time. If we make significant changes,
            we may notify users through the app or website. Continued use of LaChuppah after
            changes means you accept the updated Privacy Policy.
          </p>
        </Section>

        <Section num="12" title="Contact">
          <p>
            For privacy questions, data requests, or concerns, please contact:{" "}
            <a
              href="mailto:support@lachuppah.app"
              className="text-[#C9923F] hover:underline"
            >
              support@lachuppah.app
            </a>
          </p>
        </Section>

      </div>

      <p className="mt-14 text-sm text-stone-400">Last updated: June 2026</p>

    </LegalLayout>
  );
}
