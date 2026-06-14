"use client";

import { useState } from "react";
import Image from "next/image";

type Lang = "en" | "he";

/* ─────────────────────────────────────────────
   ALL CONTENT — English + Hebrew
───────────────────────────────────────────── */
const content = {
  en: {
    nav: {
      tagline: "Dignified shidduchim for serious singles",
      howItWorks: "How It Works",
      features: "Features",
      about: "About",
      faq: "FAQ",
      createProfile: "Create Profile",
    },
    hero: {
      badge: "A dignified, private platform for Torah-observant singles",
      headlineLine1: "Shidduchim the Way They",
      headlineLine2: "Were Meant to Be",
      subheading:
        "LaChupah is a private, community-based shidduch (matchmaking) platform for Torah-observant singles and their families. Every profile is personally reviewed, every introduction requires full mutual consent, and you choose whether to connect directly or through a shadchan — your privacy protected either way.",
      cta1: "Create Your Profile",
      cta2: "See How It Works",
      ctaArrow: "→",
    },
    trust: [
      { value: "Human-Reviewed", label: "Every Profile" },
      { value: "Mutual Consent", label: "Required for All Contact" },
      { value: "Shadchan Option", label: "Built In, Not Bolted On" },
      { value: "Free", label: "To Join and Browse" },
    ],
    howItWorks: {
      sectionLabel: "The Process",
      headline: "Simple, Private, and Community-Driven",
      subheading:
        "From first profile to confirmed introduction — every step is designed around your dignity and privacy.",
      steps: [
        {
          step: "01",
          title: "Build Your Profile",
          desc: "You — or a parent or guardian on your behalf — create a detailed shidduch profile that reflects who you are: your background, family, hashkafah (outlook and values), and what you're looking for. The profile is thorough, because a meaningful shidduch deserves more than a few lines.",
        },
        {
          step: "02",
          title: "Personal Review and Approval",
          desc: "Before your profile goes live, it is personally reviewed by the LaChupah team. We check for sincerity, completeness, and suitability for our community. This is not an automated filter — it is a human being reading your submission and ensuring that everyone on LaChupah belongs there.",
        },
        {
          step: "03",
          title: "Browse and Express Interest",
          desc: "Once approved, you can browse live profiles and express interest in those that seem like a good fit. When you find someone you'd like to learn more about, you choose how to proceed — directly, or through a shadchan.",
        },
        {
          step: "04",
          title: "Connect on Your Terms",
          desc: "If you choose direct contact, both parties must independently accept before either side sees the other's contact details. If you prefer shadchan-facilitated contact, a registered LaChupah shadchan manages the entire introduction — reaching out to both parties, guiding the process, and keeping your details private throughout.",
        },
      ],
    },
    divider: "Every introduction made with care. Every profile reviewed with purpose.",
    features: {
      sectionLabel: "Why LaChupah",
      headline: "Built Around Jewish Values",
      subheading:
        "Every feature on LaChupah exists for a reason — to make the shidduch process more dignified, more private, and more in keeping with how our community does things.",
      items: [
        {
          title: "Privacy and Mutual Consent",
          description:
            "Your contact information is never visible on your profile and is never shared without your explicit agreement. Direct contact only becomes possible after both parties have independently accepted — mutual consent is not a setting you configure, it is built into how the platform works.",
        },
        {
          title: "Shadchan-Facilitated Introductions",
          description:
            "For families who prefer all contact to go through a shadchan (matchmaker), LaChupah offers exactly that — not as an add-on, but as a core feature. A registered LaChupah shadchan manages the introduction, contacts both parties, and ensures your details are never revealed to the other side.",
        },
        {
          title: "Parent and Guardian Management",
          description:
            "Parents and guardians can create and manage profiles on behalf of their sons or daughters. Because in many communities, shidduchim are a family endeavour from the very beginning — and our platform is built to reflect that reality with respect and care.",
        },
        {
          title: "Every Profile, Human-Reviewed",
          description:
            "Every profile submitted to LaChupah is personally reviewed by our team before it is published. We verify that each submission is genuine, complete, and appropriate for our community. There are no bots, no fake accounts — only real, sincere people.",
        },
        {
          title: "Live Dating Status",
          description:
            "Every profile displays a current dating status — actively looking, currently dating, engaged, or married. This keeps the platform accurate and respectful of everyone's time, and ensures that when you reach out, the person is genuinely available.",
        },
        {
          title: "For All Observant Communities",
          description:
            "LaChupah serves the full range of Torah-observant communities — Yeshivish, Chareidi, Chabad, Dati Leumi, Chardal, Modern Orthodox, and others. We are one community with many beautiful expressions, and all are at home here.",
        },
      ],
    },
    ring: {
      sectionLabel: "Our Commitment",
      headline: "Serious shidduchim, done with dignity",
      body: "LaChupah is not a dating app. It is a platform built for people who take the shidduch process seriously — and for families who want to be involved every step of the way. No shortcuts. No compromises on tznius (modesty). No contact without consent. Just a thoughtful, private, community-supported path to the chuppah.",
      cta: "Create Your Profile",
      ctaArrow: "→",
    },
    screenshots: {
      sectionLabel: "A Closer Look",
      headline: "Clear, Private, and Easy to Use",
      subheading:
        "Designed to feel straightforward and respectful — so you can focus on finding the right shidduch, not on figuring out the software.",
      appLabel: "LaChupah",
    },
    mockScreens: [
      {
        title: "Browse Profiles",
        desc: "Search and filter approved profiles by background, community, and hashkafah",
        gradient: "from-[#1E3A5F] to-[#2D5382]",
        rows: [
          { initials: "RL", name: "Ruchie L.", tag: "Looking" },
          { initials: "SG", name: "Sima G.", tag: "Looking" },
          { initials: "DK", name: "Devorah K.", tag: "Looking" },
          { initials: "CW", name: "Chani W.", tag: "New" },
        ],
      },
      {
        title: "Express Interest",
        desc: "Choose direct contact or shadchan-facilitated — contact only shared with mutual consent",
        gradient: "from-[#C9923F] to-[#A8731E]",
        rows: [
          { initials: "→", name: "Direct Contact", tag: "Mutual only" },
          { initials: "S", name: "Via Shadchan", tag: "Private" },
          { initials: "✓", name: "Both Accepted", tag: "Connected" },
          { initials: "🔒", name: "Details Shared", tag: "Secure" },
        ],
      },
      {
        title: "Track Progress",
        desc: "Stay updated on every introduction — from first interest to confirmed shidduch",
        gradient: "from-[#2D7A6B] to-[#1E5A4E]",
        rows: [
          { initials: "1", name: "Profile Approved", tag: "Done" },
          { initials: "2", name: "Interest Sent", tag: "Pending" },
          { initials: "3", name: "Both Accepted", tag: "Active" },
          { initials: "4", name: "Shidduch Made", tag: "Mazel Tov" },
        ],
      },
    ],
    about: {
      sectionLabel: "About LaChupah",
      headline: "A Platform Built by the Community",
      body1:
        "LaChupah was born from a simple but deeply felt need. The shidduch process is one of the most meaningful endeavours in Jewish life — and yet the tools available to support it often felt out of step with the values of the people using them. We are members of the community ourselves, and we built the platform we wished existed.",
      body2:
        "At the heart of everything we do is tznius (modesty). Contact details are never displayed on a profile. No introduction is ever made without the full, voluntary consent of both parties. And for families who want all contact to go through a shadchan — that option is not a workaround. It is a core feature, built in from the beginning.",
      body3:
        "We believe sincerity matters more than volume. That is why every profile is personally reviewed before it goes live. We are not trying to be the biggest platform — we are trying to be the most trustworthy one. A place where serious people can find each other with dignity and support.",
      imageAlt: "An elegantly set wedding celebration table",
      checklist: [
        "Built by the community",
        "Privacy by design",
        "Shadchan route built in",
        "Mobile & tablet ready",
        "Parent-managed profiles",
        "Free to join and browse",
      ],
    },
    kotel: {
      explanation:
        "Whoever helps even one Jewish soul find their match — is as if they sustained an entire world.",
    },
    faq: {
      sectionLabel: "Common Questions",
      headline: "Frequently Asked Questions",
      subheading:
        "Have a question not answered here? Reach out to us on WhatsApp — we're happy to help.",
      items: [
        {
          q: "Is my contact information safe?",
          a: "Yes. Your phone number, email, and any other personal contact details are never displayed on your profile and are never shared without your explicit consent. If you choose direct contact, your information is only revealed after both parties have independently accepted. If you choose the shadchan route, your details are never shared with the other party at all — the shadchan handles all communication on your behalf.",
        },
        {
          q: "What is the difference between direct contact and contact via a shadchan?",
          a: "With direct contact, both parties independently review each other's profile and decide whether to accept. Only once both have accepted does either person receive the other's contact details. With shadchan-facilitated contact, a registered LaChupah shadchan manages the entire introduction — reaching out to both parties, guiding the process, and marking the match as confirmed once both agree to proceed. In this case, neither party's contact details are ever shared with the other.",
        },
        {
          q: "Can my parent or guardian manage my profile on my behalf?",
          a: "Yes, absolutely. Parent- and guardian-managed profiles are fully supported on LaChupah. A parent or guardian can create, update, and manage a profile on behalf of their son or daughter. This is a common and respected approach in many communities, and our platform is designed to accommodate it naturally.",
        },
        {
          q: "How long does profile approval take?",
          a: "We aim to review and approve profiles within one to three business days. Every submission is personally reviewed by a member of our team. If your profile requires any additional information or adjustments, we will be in touch directly.",
        },
        {
          q: "Is LaChupah only for one type of community?",
          a: "Not at all. LaChupah serves the full range of Torah-observant communities — Yeshivish, Chareidi, Chabad, Dati Leumi, Chardal, Modern Orthodox, and others. Each profile includes the individual's background and hashkafah (religious worldview), so users can find compatibility in a way that is meaningful to them.",
        },
        {
          q: "Is it free to use?",
          a: "Yes. Creating a profile and browsing on LaChupah is free. We are committed to keeping the platform accessible to the community it serves. We may introduce optional features in the future, but the core platform will remain free.",
        },
      ],
    },
    download: {
      sectionLabel: "Available Now",
      headline: "Download LaChupah Today",
      subheading:
        "Free to join and browse. Available on iPhone and Android. Create your profile and take the first step — with dignity, with privacy, and with community.",
      appStore: { above: "Download on the", title: "App Store" },
      googlePlay: { above: "Get it on", title: "Google Play" },
    },
    whatsapp: {
      headline: "We're Here to Help",
      subheading:
        "Have a question about the platform, need help with your profile, or want to learn more before getting started? Reach out to us directly on WhatsApp — we'd love to hear from you.",
      cta: "Chat on WhatsApp",
    },
    footer: {
      navLinks: [
        { label: "How It Works", href: "#how-it-works" },
        { label: "About", href: "#about" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact Us", href: "#contact" },
      ],
      whatsapp: "WhatsApp Support",
      copyright: "© 2026 LaChupah. All rights reserved.",
      legal:
        "LaChupah is a community platform and is not a licensed matchmaking agency. All introductions are made voluntarily between consenting parties.",
    },
  },

  he: {
    nav: {
      tagline: "שידוכים בדרך הנכונה לרווקים רציניים",
      howItWorks: "איך זה עובד",
      features: "יתרונות",
      about: "אודות",
      faq: "שאלות נפוצות",
      createProfile: "צור פרופיל",
    },
    hero: {
      badge: "פלטפורמה פרטית ומכובדת לרווקים שומרי תורה",
      headlineLine1: "שידוכים כפי שהם",
      headlineLine2: "צריכים להיות",
      subheading:
        "לחופה היא פלטפורמת שידוכים קהילתית ופרטית לרווקים שומרי תורה ומשפחותיהם. כל פרופיל נבדק אישית, כל היכרות מחייבת הסכמה הדדית מלאה, ואתם בוחרים אם להתחבר ישירות או דרך שדכן — הפרטיות שלכם מוגנת בכל מקרה.",
      cta1: "צרו את הפרופיל שלכם",
      cta2: "ראו איך זה עובד",
      ctaArrow: "←",
    },
    trust: [
      { value: "נבדק אנושית", label: "כל פרופיל" },
      { value: "הסכמה הדדית", label: "נדרשת לכל קשר" },
      { value: "אפשרות שדכן", label: "מובנית מהיסוד" },
      { value: "חינם", label: "להצטרפות וגלישה" },
    ],
    howItWorks: {
      sectionLabel: "התהליך",
      headline: "פשוט, פרטי ומונחה קהילה",
      subheading:
        "מהפרופיל הראשון ועד ההיכרות המאושרת — כל שלב בנוי סביב הכבוד והפרטיות שלכם.",
      steps: [
        {
          step: "א",
          title: "בנו את הפרופיל שלכם",
          desc: "אתם — או הורה או אפוטרופוס בשמכם — יוצרים פרופיל שידוכים מפורט המשקף מי אתם: הרקע שלכם, המשפחה, השקפת העולם, ומה אתם מחפשים. הפרופיל יסודי, כי שידוך משמעותי ראוי ליותר מכמה שורות.",
        },
        {
          step: "ב",
          title: "סקירה ואישור אישי",
          desc: "לפני שהפרופיל שלכם מתפרסם, הוא נסקר אישית על ידי צוות לחופה. אנחנו בודקים כנות, שלמות ומתאימות לקהילה שלנו. זה לא מסנן אוטומטי — זה אדם אמיתי שקורא את הפרופיל שלכם ומוודא שכולם בלחופה שייכים לכאן.",
        },
        {
          step: "ג",
          title: "עיינו בפרופילים והביעו עניין",
          desc: "לאחר האישור, תוכלו לעיין בפרופילים מאושרים ולהביע עניין בכאלה שנראים מתאימים. כשמוצאים מישהו שתרצו ללמוד עליו יותר, בוחרים כיצד להמשיך — ישירות, או דרך שדכן.",
        },
        {
          step: "ד",
          title: "התחברו בדרככם",
          desc: "אם בחרתם בקשר ישיר, על שני הצדדים לאשר באופן עצמאי לפני שמישהו מהם רואה את פרטי הקשר של השני. אם אתם מעדיפים קשר דרך שדכן, שדכן רשום של לחופה ינהל את כל ההיכרות — יפנה לשני הצדדים, ינחה את התהליך ויוודא שפרטיכם פרטיים לאורך כל הדרך.",
        },
      ],
    },
    divider: "כל היכרות נעשית בקפידה. כל פרופיל נסקר במטרה.",
    features: {
      sectionLabel: "למה לחופה",
      headline: "בנוי סביב ערכים יהודיים",
      subheading:
        "כל תכונה בלחופה קיימת מסיבה — כדי להפוך את תהליך השידוכים למכובד יותר, פרטי יותר, ומתאים יותר לדרך שהקהילה שלנו פועלת.",
      items: [
        {
          title: "פרטיות והסכמה הדדית",
          description:
            "פרטי הקשר שלכם לא מוצגים בפרופיל ולא משותפים ללא הסכמתכם המפורשת. קשר ישיר אפשרי רק לאחר שני הצדדים אישרו באופן עצמאי — הסכמה הדדית אינה הגדרה שמגדירים, היא מובנית בצורת עבודת הפלטפורמה.",
        },
        {
          title: "היכרויות דרך שדכן",
          description:
            "למשפחות המעדיפות שכל הקשר יעבור דרך שדכן, לחופה מציעה בדיוק זאת — לא כתוספת, אלא כתכונה מרכזית. שדכן רשום של לחופה מנהל את ההיכרות, פונה לשני הצדדים ומוודא שפרטיכם לא יגיעו לצד השני.",
        },
        {
          title: "ניהול על ידי הורים ואפוטרופוסים",
          description:
            "הורים ואפוטרופוסים יכולים ליצור ולנהל פרופילים בשם בניהם ובנותיהם. משום שבקהילות רבות, שידוכים הם עניין משפחתי מהרגע הראשון — והפלטפורמה שלנו בנויה לשקף מציאות זו בכבוד ובהבנה.",
        },
        {
          title: "כל פרופיל נבדק אנושית",
          description:
            "כל פרופיל המוגש ללחופה נסקר אישית על ידי הצוות שלנו לפני פרסומו. אנחנו מוודאים שכל פנייה אמיתית, שלמה ומתאימה לקהילתנו. אין בוטים, אין פרופילים מזויפים — רק אנשים אמיתיים וכנים.",
        },
        {
          title: "סטטוס שידוכים עדכני",
          description:
            "כל פרופיל מציג סטטוס שידוכים נוכחי — מחפש באופן פעיל, בתהליך שידוכים, מאורס/ת, או נשוי/נשואה. זה שומר על הפלטפורמה מדויקת ומכבדת את זמנם של כולם, ומוודא שכשפונים — האדם פנוי באמת.",
        },
        {
          title: "לכל הקהילות התורניות",
          description:
            'לחופה משרתת את כל מגוון הקהילות שומרות התורה — חרדים, ליטאים, חב"ד, דתי לאומי, חרדל, מודרן אורתודוקס ועוד. אנחנו קהילה אחת עם ביטויים רבים ויפים, וכולם מוזמנים לכאן.',
        },
      ],
    },
    ring: {
      sectionLabel: "המחויבות שלנו",
      headline: "שידוכים רציניים, בכבוד ובצניעות",
      body: "לחופה אינה אפליקציית היכרויות. היא פלטפורמה שנבנתה עבור אנשים הלוקחים את תהליך השידוכים ברצינות — ועבור משפחות שרוצות להיות מעורבות בכל שלב. ללא קיצורי דרך. ללא פשרות על הצניעות. ללא קשר ללא הסכמה. רק מסלול מחושב, פרטי ונתמך קהילה לחופה.",
      cta: "צרו את הפרופיל שלכם",
      ctaArrow: "←",
    },
    screenshots: {
      sectionLabel: "מבט מקרוב",
      headline: "ברור, פרטי וקל לשימוש",
      subheading:
        "מתוכנן להרגיש פשוט ומכובד — כדי שתוכלו להתמקד במציאת השידוך הנכון, ולא בהבנת התוכנה.",
      appLabel: "לחופה",
    },
    mockScreens: [
      {
        title: "עיון בפרופילים",
        desc: "חיפוש וסינון פרופילים מאושרים לפי רקע, קהילה והשקפת עולם",
        gradient: "from-[#1E3A5F] to-[#2D5382]",
        rows: [
          { initials: "RL", name: "רוחי ל.", tag: "מחפשת" },
          { initials: "SG", name: "שימי ג.", tag: "מחפשת" },
          { initials: "DK", name: "דבורה כ.", tag: "מחפשת" },
          { initials: "CW", name: "חני ו.", tag: "חדש" },
        ],
      },
      {
        title: "הביעו עניין",
        desc: "בחרו קשר ישיר או דרך שדכן — פרטים משותפים רק בהסכמה הדדית",
        gradient: "from-[#C9923F] to-[#A8731E]",
        rows: [
          { initials: "←", name: "קשר ישיר", tag: "הדדי בלבד" },
          { initials: "ש", name: "דרך שדכן", tag: "פרטי" },
          { initials: "✓", name: "שניהם אישרו", tag: "מחוברים" },
          { initials: "🔒", name: "פרטים הועברו", tag: "מאובטח" },
        ],
      },
      {
        title: "מעקב התקדמות",
        desc: "עקבו אחרי כל היכרות — מעניין ראשוני ועד שידוך מאושר",
        gradient: "from-[#2D7A6B] to-[#1E5A4E]",
        rows: [
          { initials: "א", name: "פרופיל אושר", tag: "הושלם" },
          { initials: "ב", name: "עניין הוצהר", tag: "ממתין" },
          { initials: "ג", name: "שניהם אישרו", tag: "פעיל" },
          { initials: "ד", name: "שידוך נעשה", tag: "מזל טוב" },
        ],
      },
    ],
    about: {
      sectionLabel: "אודות לחופה",
      headline: "פלטפורמה שנבנתה על ידי הקהילה",
      body1:
        "לחופה נולדה מצורך פשוט אך עמוק. תהליך השידוכים הוא אחד ממסעות החיים המשמעותיים ביותר בחיים היהודיים — ובכל זאת, הכלים הזמינים לתמיכה בו לא תמיד תאמו את הערכים של האנשים שהשתמשו בהם. אנחנו חברי קהילה בעצמנו, ובנינו את הפלטפורמה שרצינו שתהיה קיימת.",
      body2:
        "בלב כל מה שאנחנו עושים עומדת הצניעות. פרטי קשר אינם מוצגים בפרופיל. שום היכרות לא נעשית ללא הסכמה מלאה ומרצון של שני הצדדים. ועבור משפחות שרוצות שכל הקשר יעבור דרך שדכן — זו לא עקיפת מערכת. זו תכונה מרכזית, מובנית מהיסוד.",
      body3:
        "אנחנו מאמינים שכנות חשובה יותר מכמות. לכן כל פרופיל נסקר אישית לפני פרסומו. אנחנו לא שואפים להיות הפלטפורמה הגדולה ביותר — אלא המהימנה ביותר. מקום שבו אנשים רציניים יכולים למצוא זה את זה בכבוד ובתמיכה.",
      imageAlt: "שולחן חתונה ערוך בצורה אלגנטית",
      checklist: [
        "נבנה על ידי הקהילה",
        "פרטיות מהיסוד",
        "אפשרות שדכן מובנית",
        "מותאם לנייד וטאבלט",
        "פרופילים מנוהלים על ידי הורים",
        "חינם להצטרפות וגלישה",
      ],
    },
    kotel: {
      explanation:
        "כל מי שזוכה לסייע לנשמה יהודית אחת למצוא את זיווגה — כאילו קיים עולם מלא.",
    },
    faq: {
      sectionLabel: "שאלות נפוצות",
      headline: "שאלות נפוצות",
      subheading: "יש לכם שאלה שלא נענתה כאן? פנו אלינו בוואטסאפ — נשמח לעזור.",
      items: [
        {
          q: "האם פרטי הקשר שלי בטוחים?",
          a: 'כן. מספר הטלפון, הדוא"ל וכל פרטי קשר אחרים שלכם לא מוצגים בפרופיל ולא משותפים ללא הסכמתכם המפורשת. אם בחרתם בקשר ישיר, הפרטים שלכם יוצגו רק לאחר שני הצדדים אישרו באופן עצמאי. אם בחרתם בדרך השדכן — פרטיכם לא משותפים עם הצד השני כלל, והשדכן מנהל את כל התקשורת בשמכם.',
        },
        {
          q: "מה ההבדל בין קשר ישיר לקשר דרך שדכן?",
          a: "בקשר ישיר, שני הצדדים בוחנים באופן עצמאי את הפרופיל של השני ומחליטים אם לאשר. רק לאחר שניהם אישרו, כל אחד מקבל את פרטי הקשר של השני. בקשר דרך שדכן, שדכן רשום של לחופה מנהל את כל ההיכרות — פונה לשני הצדדים, מנחה את התהליך, ומאשר את ההתאמה ברגע ששניהם מסכימים להמשיך. במקרה זה, פרטי הקשר של אף אחד מהצדדים אינם משותפים עם השני.",
        },
        {
          q: "האם הורה או אפוטרופוס יכולים לנהל את הפרופיל שלי?",
          a: "כן, בהחלט. פרופילים מנוהלים על ידי הורים ואפוטרופוסים נתמכים במלואם בלחופה. הורה או אפוטרופוס יכולים ליצור, לעדכן ולנהל פרופיל בשם בנם או בתם. זוהי גישה נפוצה ומכובדת בקהילות רבות, והפלטפורמה שלנו מתוכננת להכיל אותה באופן טבעי.",
        },
        {
          q: "כמה זמן לוקח אישור הפרופיל?",
          a: "אנחנו שואפים לסקור ולאשר פרופילים בתוך יום עד שלושה ימי עסקים. כל פנייה נסקרת אישית על ידי חבר בצוות שלנו. אם הפרופיל שלכם דורש מידע נוסף או התאמות, נפנה אליכם ישירות.",
        },
        {
          q: "האם לחופה מיועדת לסוג קהילה מסוים?",
          a: 'כלל לא. לחופה משרתת את כל מגוון הקהילות שומרות התורה — חרדים, ליטאים, חב"ד, דתי לאומי, חרדל, מודרן אורתודוקס ועוד. כל פרופיל כולל את הרקע והשקפת עולמו של הפרט, כך שמשתמשים יכולים למצוא התאמה באופן משמעותי עבורם.',
        },
        {
          q: "האם זה חינם?",
          a: "כן. יצירת פרופיל וגלישה בלחופה הם חינם. אנחנו מחויבים לשמור על הפלטפורמה נגישה לקהילה שהיא משרתת. ייתכן שנציג תכונות אופציונאליות בעתיד, אך הפלטפורמה הבסיסית תישאר חינמית.",
        },
      ],
    },
    download: {
      sectionLabel: "זמין עכשיו",
      headline: "הורידו את לחופה היום",
      subheading:
        "חינם להצטרפות וגלישה. זמין ל-iPhone ואנדרואיד. צרו את הפרופיל שלכם וצאו לדרך — בכבוד, בפרטיות ועם קהילה.",
      appStore: { above: "הורידו ב", title: "App Store" },
      googlePlay: { above: "הורידו ב", title: "Google Play" },
    },
    whatsapp: {
      headline: "אנחנו כאן לעזור",
      subheading:
        "יש לכם שאלה על הפלטפורמה, צריכים עזרה עם הפרופיל, או רוצים ללמוד עוד לפני שמתחילים? פנו אלינו ישירות בוואטסאפ — נשמח לשמוע מכם.",
      cta: "שלחו הודעה בוואטסאפ",
    },
    footer: {
      navLinks: [
        { label: "איך זה עובד", href: "#how-it-works" },
        { label: "אודות", href: "#about" },
        { label: "שאלות נפוצות", href: "#faq" },
        { label: "צרו קשר", href: "#contact" },
      ],
      whatsapp: "תמיכה בוואטסאפ",
      copyright: "© 2026 לחופה. כל הזכויות שמורות.",
      legal:
        "לחופה היא פלטפורמה קהילתית ואינה סוכנות שידוכים מורשית. כל ההיכרויות נעשות מרצון בין צדדים מסכימים.",
    },
  },
} as const;

/* ─────────────────────────────────────────────
   FEATURE ICONS (language-agnostic SVGs)
───────────────────────────────────────────── */
const featureIcons = [
  <svg key="privacy" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>,
  <svg key="shadchan" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
  </svg>,
  <svg key="parents" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>,
  <svg key="review" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="status" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
  </svg>,
  <svg key="community" className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>,
];

/* ─────────────────────────────────────────────
   WHATSAPP ICON
───────────────────────────────────────────── */
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];
  const isHe = lang === "he";

  return (
    <div className="min-h-screen bg-[#FDFAF6]" dir={isHe ? "rtl" : "ltr"} lang={isHe ? "he" : "en"}>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/lachuppah-logo.png"
                alt="LaChupah"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
              <div>
                <div className="text-xl font-bold text-[#1E3A5F] leading-tight">LaChupah</div>
                <div className="hidden sm:block text-xs text-stone-400 leading-tight">{t.nav.tagline}</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#how-it-works" className="text-stone-600 hover:text-[#1E3A5F] text-sm font-medium transition-colors">{t.nav.howItWorks}</a>
              <a href="#features" className="text-stone-600 hover:text-[#1E3A5F] text-sm font-medium transition-colors">{t.nav.features}</a>
              <a href="#about" className="text-stone-600 hover:text-[#1E3A5F] text-sm font-medium transition-colors">{t.nav.about}</a>
              <a href="#faq" className="text-stone-600 hover:text-[#1E3A5F] text-sm font-medium transition-colors">{t.nav.faq}</a>
            </nav>

            <div className="flex items-center gap-3">
              {/* Language toggle */}
              <button
                onClick={() => setLang(l => l === "en" ? "he" : "en")}
                className="flex items-center gap-1 rounded-full border border-stone-200 px-3 py-1.5 text-sm hover:border-[#1E3A5F] transition-colors select-none"
                aria-label="Toggle language"
              >
                <span className={lang === "en" ? "font-semibold text-[#1E3A5F]" : "text-stone-400"}>EN</span>
                <span className="text-stone-300 text-xs mx-0.5">|</span>
                <span className={lang === "he" ? "font-semibold text-[#1E3A5F]" : "text-stone-400"}>עב</span>
              </button>

              <a
                href="#download"
                className="bg-[#1E3A5F] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#162D4A] transition-colors"
              >
                {t.nav.createProfile}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO — flowers.jpg background ── */}
      <section className="relative text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/flowers.jpg"
            alt=""
            fill
            className="object-cover object-[35%_center]"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A5F]/55 via-[#1E3A5F]/60 to-[#162D4A]/75" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-40 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-sm font-medium text-[#F0C87A] mb-8">
            <span>✦</span>
            <span>{t.hero.badge}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 drop-shadow-lg">
            {t.hero.headlineLine1}{" "}
            <span className="text-[#C9923F]">{t.hero.headlineLine2}</span>
          </h1>
          <p className="text-lg sm:text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow">
            {t.hero.subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 bg-[#C9923F] hover:bg-[#B8812E] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              {t.hero.cta1}
              <span>{t.hero.ctaArrow}</span>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center bg-white/15 hover:bg-white/25 border border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              {t.hero.cta2}
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 60L1440 60L1440 0C1200 50 900 60 720 40C540 20 240 0 0 40L0 60Z" fill="#FDFAF6" />
          </svg>
        </div>
      </section>

      {/* ── TRUST SIGNALS ── */}
      <section className="bg-[#FDFAF6] pt-4 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl shadow-sm border border-stone-100 overflow-hidden bg-stone-100">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px">
              {t.trust.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center py-7 px-4 text-center bg-white">
                  <span className="text-base sm:text-lg font-bold text-[#1E3A5F]">{stat.value}</span>
                  <span className="text-xs sm:text-sm text-stone-500 mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="bg-[#FDFAF6] py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold text-[#C9923F] uppercase tracking-widest mb-3">
              {t.howItWorks.sectionLabel}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-4">
              {t.howItWorks.headline}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t.howItWorks.subheading}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {t.howItWorks.steps.map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-7 border border-stone-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl font-bold text-[#C9923F]/20 mb-3 leading-none">{item.step}</div>
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEYBOARD DIVIDER ── */}
      <div className="relative h-28 sm:h-32 overflow-hidden">
        <Image
          src="/images/keyboard.jpg"
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0A1628]/87" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <p className="text-base sm:text-lg font-medium text-blue-100 tracking-wide text-center max-w-2xl">
            {t.divider}
          </p>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section id="features" className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-[#C9923F] uppercase tracking-widest mb-3">
              {t.features.sectionLabel}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-4">
              {t.features.headline}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t.features.subheading}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.features.items.map((feature, i) => (
              <div
                key={i}
                className="group bg-[#FDFAF6] rounded-2xl p-7 border border-stone-100 hover:border-[#1E3A5F]/20 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-[#1E3A5F]/10 text-[#1E3A5F] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1E3A5F] group-hover:text-white transition-colors">
                  {featureIcons[i]}
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RING SECTION — values statement ── */}
      <section className="relative overflow-hidden py-24 lg:py-36">
        <div className="absolute inset-0">
          <Image
            src="/images/ring.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className={`absolute inset-0 ${isHe ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-[#1E3A5F]/95 via-[#1E3A5F]/80 to-[#1E3A5F]/65`} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-[#C9923F] uppercase tracking-widest mb-4">
              {t.ring.sectionLabel}
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              {t.ring.headline}
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-8">
              {t.ring.body}
            </p>
            <a
              href="#download"
              className="inline-flex items-center gap-2 bg-[#C9923F] hover:bg-[#B8812E] text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-lg"
            >
              {t.ring.cta}
              <span>{t.ring.ctaArrow}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── SCREENSHOTS ── */}
      <section className="bg-[#FDFAF6] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-[#C9923F] uppercase tracking-widest mb-3">
              {t.screenshots.sectionLabel}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-4">
              {t.screenshots.headline}
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              {t.screenshots.subheading}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.mockScreens.map((screen, si) => (
              <div
                key={si}
                className="rounded-3xl overflow-hidden shadow-lg border border-stone-200 bg-white flex flex-col"
              >
                <div className={`bg-gradient-to-r ${screen.gradient} px-5 py-4 text-white`}>
                  <div className="flex items-center gap-1.5 mb-3 opacity-40">
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    <div className="flex-1 bg-white/40 rounded-full h-4 ml-1" />
                  </div>
                  <div className="text-xs opacity-70 mb-0.5">{t.screenshots.appLabel}</div>
                  <div className="font-semibold text-base">{screen.title}</div>
                </div>
                <div className="p-4 space-y-2 flex-1">
                  {screen.rows.map((row, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-2.5 rounded-xl bg-stone-50 border border-stone-100"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#1E3A5F]/10 text-[#1E3A5F] text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {row.initials}
                      </div>
                      <span className="text-sm text-stone-700 font-medium flex-1">{row.name}</span>
                      <span className="text-xs text-stone-400 font-medium">{row.tag}</span>
                    </div>
                  ))}
                </div>
                <div className="px-5 pb-5 pt-2">
                  <p className="text-xs text-stone-400 leading-relaxed">{screen.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT — table.jpg as elegant side image ── */}
      <section id="about" className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative h-80 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/table.jpg"
                  alt={t.about.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/30 via-transparent to-transparent" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="text-sm font-semibold text-[#C9923F] uppercase tracking-widest mb-3">
                {t.about.sectionLabel}
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-6 leading-tight">
                {t.about.headline}
              </h2>
              <p className="text-stone-600 leading-relaxed mb-5">{t.about.body1}</p>
              <p className="text-stone-600 leading-relaxed mb-5">{t.about.body2}</p>
              <p className="text-stone-600 leading-relaxed mb-8">{t.about.body3}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.about.checklist.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-stone-700">
                    <div className="w-5 h-5 rounded-full bg-[#1E3A5F] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── KOTEL STRIP ── */}
      <div className="relative overflow-hidden py-14 sm:py-16">
        <div className="absolute inset-0">
          <Image
            src="/images/kotel.jpg"
            alt=""
            fill
            className="object-cover object-[center_25%]"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#1E3A5F]/88" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <p className="text-base sm:text-xl font-semibold text-[#F0C87A] mb-3 leading-relaxed" dir="rtl">
            כָּל הַמְקַיֵּם נֶפֶשׁ אַחַת מִיִּשְׂרָאֵל — מַעֲלֶה עָלָיו הַכָּתוּב כְּאִלּוּ קִיֵּם עוֹלָם מָלֵא
          </p>
          <p className="text-xs sm:text-sm text-blue-200 max-w-lg mx-auto leading-relaxed mt-2">
            {t.kotel.explanation}
          </p>
        </div>
      </div>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-[#FDFAF6] py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="text-sm font-semibold text-[#C9923F] uppercase tracking-widest mb-3">
              {t.faq.sectionLabel}
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-4">
              {t.faq.headline}
            </h2>
            <p className="text-lg text-stone-600">{t.faq.subheading}</p>
          </div>
          <div className="space-y-4">
            {t.faq.items.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 sm:p-7 border border-stone-100 shadow-sm">
                <h3 className="font-semibold text-[#1E3A5F] mb-3 text-base">{faq.q}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD — balloons.jpg ── */}
      <section id="download" className="relative overflow-hidden py-24 lg:py-32">
        <div className="absolute inset-0">
          <Image
            src="/images/balloons.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A5F]/80 via-[#1E3A5F]/75 to-[#162D4A]/85" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="text-sm font-semibold text-[#F0C87A] uppercase tracking-widest mb-3">
            {t.download.sectionLabel}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.download.headline}</h2>
          <p className="text-lg text-blue-100 mb-12 max-w-lg mx-auto leading-relaxed">
            {t.download.subheading}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-4 bg-white/15 hover:bg-white/25 border border-white/30 text-white px-7 py-4 rounded-2xl transition-colors shadow-md backdrop-blur-sm"
            >
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.06.04c-1.02.63-1.7 1.67-1.69 2.92.01 1.47.88 2.75 2.11 3.28zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className={isHe ? "text-right" : "text-left"}>
                <div className="text-xs text-blue-200">{t.download.appStore.above}</div>
                <div className="text-lg font-semibold leading-tight">{t.download.appStore.title}</div>
              </div>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=com.lachupa.lachupah"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white/15 hover:bg-white/25 border border-white/30 text-white px-7 py-4 rounded-2xl transition-colors shadow-md backdrop-blur-sm"
            >
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199a1 1 0 01.002 1.732L15.394 12l2.302-2.302 2.302-2.302a.996.996 0 01-.302 2.112zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.634z" />
              </svg>
              <div className={isHe ? "text-right" : "text-left"}>
                <div className="text-xs text-blue-200">{t.download.googlePlay.above}</div>
                <div className="text-lg font-semibold leading-tight">{t.download.googlePlay.title}</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── WHATSAPP CTA — wine.jpg ── */}
      <section id="contact" className="relative overflow-hidden py-20 lg:py-28 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/wine.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#054D44]/82" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/15 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <WhatsAppIcon className="w-9 h-9" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{t.whatsapp.headline}</h2>
          <p className="text-lg text-emerald-100 mb-10 max-w-lg mx-auto leading-relaxed">
            {t.whatsapp.subheading}
          </p>
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#054D44] font-bold px-10 py-4 rounded-full hover:bg-emerald-50 transition-colors shadow-xl text-lg"
          >
            <WhatsAppIcon className="w-6 h-6" />
            {t.whatsapp.cta}
          </a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1E3A5F] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 pb-8 border-b border-white/10">
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/lachuppah-logo.png"
                alt="LaChupah"
                width={36}
                height={36}
                className="object-contain opacity-90"
              />
              <span className="text-xl font-bold">LaChupah</span>
            </a>
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
              {t.footer.navLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-white transition-colors">
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              {t.footer.whatsapp}
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-300">
            <p>{t.footer.copyright}</p>
            <p className="text-xs text-blue-400 text-center md:text-end max-w-md">
              {t.footer.legal}
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
