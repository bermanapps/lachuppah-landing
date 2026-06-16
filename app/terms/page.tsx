import type { Metadata } from "next";
import LegalLayout, { Section } from "../_components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms of Use — LaChuppah",
  description: "LaChuppah Terms of Use. Rules and responsibilities for using the LaChuppah platform.",
};

export default function TermsPage() {
  return (
    <LegalLayout badge="Legal" title="Terms of Use">

      <div className="text-stone-600 leading-relaxed text-base space-y-4 mb-12">
        <p>Welcome to LaChuppah.</p>
        <p>
          These Terms of Use explain the basic rules for using LaChuppah. By accessing or using
          LaChuppah, you agree to use the platform respectfully, honestly, and only for its intended
          purpose of helping Jewish singles, families, and matchmakers connect in a thoughtful and
          appropriate way.
        </p>
      </div>

      <div className="space-y-10">

        <Section num="1" title="Purpose of LaChuppah">
          <p>
            LaChuppah is a platform designed to help facilitate respectful dating and introductions
            for marriage-minded Jewish singles. The app may be used by singles themselves, by parents
            or representatives acting on their behalf, and by matchmakers or shadchanim.
          </p>
          <p>
            LaChuppah is not a casual dating app, a social network, a background-checking service,
            or a guarantee of any match, meeting, relationship, engagement, or marriage.
          </p>
        </Section>

        <Section num="2" title="Eligibility">
          <p>
            You may only use LaChuppah if you are legally allowed to do so and are using the platform
            for its intended purpose. Users must provide accurate information and must not create fake,
            misleading, or impersonated profiles.
          </p>
          <p>
            LaChuppah may refuse, suspend, or remove accounts at its discretion, especially where
            there is concern about misuse, dishonesty, safety, inappropriate behavior, or violation
            of these Terms.
          </p>
        </Section>

        <Section num="3" title="Profile Information">
          <p>
            Profiles are created from information provided by users, parents, representatives, or
            matchmakers. While LaChuppah may review profiles before they appear in the app, LaChuppah
            does not independently verify every detail submitted.
          </p>
          <p>
            LaChuppah does not guarantee the accuracy, completeness, reliability, religious background,
            personal status, family details, health information, references, or any other information
            included in a profile.
          </p>
          <p>
            Users are responsible for the information they submit and must keep it honest, respectful,
            and up to date.
          </p>
        </Section>

        <Section num="4" title="User Responsibility">
          <p>
            You are responsible for your own decisions, conversations, meetings, and interactions.
            Before pursuing any match, users are encouraged to make appropriate enquiries, check
            references, and consult with parents, Rabbanim, matchmakers, shadchanim, or trusted
            people where relevant.
          </p>
          <p>
            LaChuppah does not make decisions for users and does not replace personal judgement,
            family guidance, professional advice, or community-based due diligence.
          </p>
        </Section>

        <Section num="5" title="No Background Checks or Guarantees">
          <p>
            LaChuppah does not provide background checks, identity verification, professional advice,
            investigation services, or guarantees about any user's character, intentions, suitability,
            personal circumstances, or future conduct.
          </p>
          <p>
            Any introduction, conversation, meeting, or relationship that develops through LaChuppah
            is the responsibility of the users involved.
          </p>
        </Section>

        <Section num="6" title="User Conduct">
          <p>Users must use LaChuppah respectfully and honestly.</p>
          <p>You may not:</p>
          <ul className="list-disc list-outside ml-5 space-y-1.5">
            <li>Create fake or misleading profiles</li>
            <li>Impersonate another person</li>
            <li>Submit false or harmful information</li>
            <li>Harass, pressure, threaten, or abuse another user</li>
            <li>Send inappropriate, offensive, or unwanted content</li>
            <li>Use the app for scams, money requests, commercial misuse, or manipulation</li>
            <li>Share another user's private information without permission</li>
            <li>Attempt to bypass safety, privacy, or moderation systems</li>
            <li>Use LaChuppah for any unlawful or harmful purpose</li>
          </ul>
        </Section>

        <Section num="7" title="Contact and Privacy">
          <p>
            Contact details should only be shared in a way that follows the app's rules and privacy
            settings. LaChuppah is built around respectful communication and mutual consent. Users
            must not pressure others for private contact details or share someone else's contact
            information without permission.
          </p>
        </Section>

        <Section num="8" title="Account Removal and Moderation">
          <p>
            LaChuppah reserves the right to review, edit, hide, suspend, or remove profiles,
            messages, content, or accounts where we believe there may be a violation of these Terms,
            safety concerns, inappropriate behavior, misuse of the platform, or risk to other users.
          </p>
          <p>We may take action based on user reports, internal review, or our own discretion.</p>
        </Section>

        <Section num="9" title="Limitation of Responsibility">
          <p>
            To the fullest extent permitted by law, LaChuppah, its owners, developers, team members,
            operators, and affiliates are not responsible for user-submitted information, user
            behavior, personal decisions, conversations, meetings, relationships, financial loss,
            emotional distress, harm, or damages resulting from use of the app or from interactions
            between users.
          </p>
          <p>
            LaChuppah provides a platform for introductions. Users remain responsible for their own
            decisions and due diligence.
          </p>
        </Section>

        <Section num="10" title="Changes to These Terms">
          <p>
            LaChuppah may update these Terms from time to time. If we make significant changes, we
            may notify users through the app or website. Continued use of LaChuppah after changes
            means you accept the updated Terms.
          </p>
        </Section>

        <Section num="11" title="Contact">
          <p>
            If you have questions about these Terms, or if you need to report a concern, please
            contact:{" "}
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
