import type { Metadata } from "next";
import LegalLayout, { Section } from "../_components/LegalLayout";

export const metadata: Metadata = {
  title: "Safety & Community Rules — LaChuppah",
  description: "LaChuppah Safety & Community Rules. How to use LaChuppah safely and respectfully.",
};

export default function SafetyPage() {
  return (
    <LegalLayout badge="Community" title="Safety & Community Rules">

      <div className="text-stone-600 leading-relaxed text-base space-y-4 mb-12">
        <p>
          LaChuppah is built to support respectful, thoughtful, and privacy-conscious Jewish dating
          and matchmaking. These Safety & Community Rules help keep the platform safe, appropriate,
          and trustworthy.
        </p>
        <p>By using LaChuppah, you agree to follow these rules.</p>
      </div>

      <div className="space-y-10">

        <Section num="1" title="Be Honest">
          <p>
            Profiles must be truthful and accurate. Do not create fake profiles, impersonate another
            person, hide important information in a misleading way, or submit details that you know
            are false.
          </p>
          <p>If your circumstances change, please update your profile where relevant.</p>
        </Section>

        <Section num="2" title="Be Respectful">
          <p>
            Treat every person with dignity. LaChuppah is for respectful introductions, not
            pressure, harassment, arguments, or inappropriate behavior.
          </p>
          <p>Do not:</p>
          <ul className="list-disc list-outside ml-5 space-y-1.5">
            <li>Harass, insult, threaten, or pressure another user</li>
            <li>Send unwanted or inappropriate messages</li>
            <li>Shame, mock, or embarrass another user</li>
            <li>Share private information about someone else</li>
            <li>Use offensive, explicit, or disrespectful language</li>
            <li>Continue contacting someone who has made it clear they are not interested</li>
          </ul>
        </Section>

        <Section num="3" title="Protect Privacy">
          <p>
            Do not share another user's profile, photos, contact details, personal information, or
            private messages without permission.
          </p>
          <p>
            Users should also be careful about what they share. Keep personal and family information
            private until you are comfortable and have done appropriate checking.
          </p>
        </Section>

        <Section num="4" title="Check References and Do Due Diligence">
          <p>
            LaChuppah may review profiles, but we do not verify every detail and we do not provide
            background checks.
          </p>
          <p>
            Before moving forward with a match, users are encouraged to check references, speak to
            trusted people, and involve parents, Rabbanim, matchmakers, shadchanim, or other
            appropriate guidance where relevant.
          </p>
        </Section>

        <Section num="5" title="Meet Safely">
          <p>If you decide to meet someone, use good judgement:</p>
          <ul className="list-disc list-outside ml-5 space-y-1.5">
            <li>Meet in an appropriate public or known setting</li>
            <li>Tell a trusted person where you are going</li>
            <li>Arrange your own transport where possible</li>
            <li>Do not ignore uncomfortable behavior</li>
            <li>End the meeting if you feel unsafe or pressured</li>
          </ul>
        </Section>

        <Section num="6" title="No Scams or Financial Requests">
          <p>
            LaChuppah must not be used for scams, fundraising, money requests, business offers,
            investments, or financial manipulation.
          </p>
          <p>
            Be cautious if anyone asks for money, gifts, bank details, personal documents, or
            unusual favors.
          </p>
        </Section>

        <Section num="7" title="No Inappropriate Content">
          <p>
            Users may not upload, send, or request inappropriate, explicit, offensive, violent,
            hateful, or immodest content.
          </p>
          <p>
            LaChuppah is intended to remain a modest, respectful, and community-friendly platform.
          </p>
        </Section>

        <Section num="8" title="Parents, Representatives, and Matchmakers">
          <p>
            Parents, representatives, matchmakers, and shadchanim using LaChuppah must act honestly
            and respectfully. They must have appropriate permission to create or manage a profile on
            someone else's behalf.
          </p>
          <p>
            They must not pressure, misrepresent, or misuse another person's information.
          </p>
        </Section>

        <Section num="9" title="Reporting Concerns">
          <p>
            If you see concerning behavior, false information, harassment, inappropriate content,
            privacy misuse, or anything that feels unsafe, please report it.
          </p>
          <p>
            You can contact:{" "}
            <a
              href="mailto:support@lachuppah.app"
              className="text-[#C9923F] hover:underline"
            >
              support@lachuppah.app
            </a>
          </p>
          <p>
            Include as much detail as possible so the LaChuppah team can review the concern.
          </p>
        </Section>

        <Section num="10" title="Blocking and Removal">
          <p>
            LaChuppah may provide tools to block or report users inside the app. LaChuppah also
            reserves the right to remove content, suspend accounts, or ban users if we believe
            there is misuse, dishonesty, safety risk, or violation of these rules.
          </p>
        </Section>

        <Section num="11" title="Our Goal">
          <p>
            The goal of LaChuppah is to create a better, more respectful way for Jewish singles,
            families, and matchmakers to connect.
          </p>
          <p>
            A strong community depends on honesty, privacy, care, and good judgement from everyone
            using the platform.
          </p>
        </Section>

      </div>

      <p className="mt-14 text-sm text-stone-400">Last updated: June 2026</p>

    </LegalLayout>
  );
}
