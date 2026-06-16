"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

type Lang = "en" | "he";

/* ─────────────────────────────────────────────
   ALL CONTENT — English + Hebrew
───────────────────────────────────────────── */
const content = {
  en: {
    nav: {
      tagline: "Modern Jewish dating, built with care",
      howItWorks: "How It Works",
      features: "Features",
      about: "About",
      faq: "FAQ",
      createProfile: "Create Profile",
      admin: "Admin Login",
    },
    hero: {
      badge: "Private, reviewed, and built for Jewish singles",
      headlineLine1: "Frum dating app,",
      headlineLine2: "done right.",
      subheading:
        "LaChuppah helps singles, parents, and matchmakers connect in a respectful, private, and thoughtful way — with reviewed profiles and contact only when both sides agree.",
      cta1: "Create Your Profile",
      cta2: "How It Works",
      ctaArrow: "→",
    },
    trust: [
      { value: "Reviewed Profiles", label: "Every one, personally approved" },
      { value: "Private by Design", label: "No details shared without consent" },
      { value: "Mutual Consent", label: "Required before any contact" },
    ],
    community: {
      sectionLabel: "Our Community",
      headline: "For Every Jewish Community",
      subheading: "One platform, across the full spectrum of Jewish life.",
      photos: [
        { src: "/images/kallah.png", label: "Singles & Families", tag: "All Communities" },
        { src: "/images/charedi.png", label: "Chareidi", tag: "Traditional" },
        { src: "/images/leumi.png", label: "Dati Leumi", tag: "Religious Zionist" },
        { src: "/images/chabad.png", label: "Chabad", tag: "Lubavitch" },
      ],
    },
    howItWorks: {
      sectionLabel: "The Process",
      headline: "Simple, Private, and Thoughtful",
      subheading: "From first profile to confirmed introduction — every step built around care and privacy.",
      steps: [
        {
          step: "01",
          title: "Build Your Profile",
          desc: "You — or a parent on your behalf — create a detailed profile: background, family, values, and what you are looking for.",
        },
        {
          step: "02",
          title: "Personal Review",
          desc: "Before going live, a member of our team personally reviews every profile for sincerity, completeness, and suitability.",
        },
        {
          step: "03",
          title: "Browse & Express Interest",
          desc: "Browse approved profiles and express interest. Choose whether to connect directly or through a matchmaker.",
        },
        {
          step: "04",
          title: "Connect on Your Terms",
          desc: "Direct contact only becomes possible once both parties have independently accepted. A matchmaker can manage the introduction instead — your privacy is protected either way.",
        },
      ],
    },
    divider: "Every introduction made with care. Every profile reviewed with purpose.",
    features: {
      sectionLabel: "Why LaChuppah",
      headline: "Built for Thoughtful Jewish Dating",
      subheading: "Every feature exists for a reason — to make the process more private, more respectful, and more meaningful.",
      items: [
        {
          title: "Privacy & Mutual Consent",
          description: "Your contact details are never visible on your profile and are never shared without your explicit agreement. Mutual consent is not a setting — it is built into how the platform works.",
        },
        {
          title: "Matchmaker-Facilitated Introductions",
          description: "For families who prefer all contact to go through a matchmaker or shadchan, LaChuppah offers exactly that — not as an add-on, but as a core feature.",
        },
        {
          title: "Parent & Guardian Management",
          description: "Finding the right match is a family journey. Parents and guardians can create and manage profiles on behalf of their sons or daughters — the platform is built to support that naturally.",
        },
        {
          title: "Every Profile, Human-Reviewed",
          description: "Every profile is personally reviewed by our team before it goes live. No bots, no fake accounts — only real, sincere people.",
        },
        {
          title: "Live Dating Status",
          description: "Every profile shows a current status — actively looking, currently dating, or engaged. You always know where things stand.",
        },
        {
          title: "For Every Jewish Community",
          description: "Modern Orthodox, Dati Leumi, Chareidi, Chabad, traditional, and across the full spectrum of Jewish practice — LaChuppah is built for everyone.",
        },
      ],
    },
    ring: {
      sectionLabel: "Our Commitment",
      headline: "Not a dating app. A marriage platform.",
      body: "LaChuppah is built for people who are looking for something real — and for families who want to be part of the journey. Every step is thoughtful. Every introduction requires consent from both sides. No shortcuts, no pressure.",
      cta: "Create Your Profile",
      ctaArrow: "→",
    },
    about: {
      sectionLabel: "About LaChuppah",
      headline: "Our Story",
      body1:
        "LaChuppah was built out of a deeply felt need. Finding the right match is one of the most meaningful journeys in Jewish life — and yet the tools available so often felt out of step with the values of the people using them. We built what we wished already existed.",
      body2:
        "Contact details are never displayed on a profile. No introduction is made without the full, voluntary consent of both parties. For families who want all contact to go through a matchmaker or shadchan, that is a core feature — built in from the very beginning, not added on.",
      body3:
        "We believe sincerity matters more than volume. Every profile is personally reviewed. We are not trying to be the biggest platform — we are trying to be the most trustworthy one.",
      imageAlt: "An elegantly set celebration table",
      checklist: [
        "Founded by the community",
        "Privacy by design",
        "Matchmaker route built in",
        "Mobile & tablet ready",
        "Parent-managed profiles",
        "Available worldwide",
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
        "Have a question not answered here? Use the contact form below — we are happy to help.",
      items: [
        {
          q: "Is my contact information safe?",
          a: "Yes. Your phone number, email, and any other personal contact details are never displayed on your profile and are never shared without your explicit consent. If you choose direct contact, your information is only revealed after both parties have independently accepted. If you choose the matchmaker route, your details are never shared with the other party at all — the matchmaker handles all communication on your behalf.",
        },
        {
          q: "What is the difference between direct contact and contact via a matchmaker?",
          a: "With direct contact, both parties independently review each other's profile and decide whether to accept. Only once both have accepted does either person receive the other's contact details. With matchmaker-facilitated contact, a registered LaChuppah matchmaker manages the entire introduction — reaching out to both parties, guiding the process, and confirming the match once both agree to proceed. In this case, neither party's contact details are ever shared with the other.",
        },
        {
          q: "Can my parent or guardian manage my profile on my behalf?",
          a: "Yes, absolutely. Parent- and guardian-managed profiles are fully supported on LaChuppah. A parent or guardian can create, update, and manage a profile on behalf of their son or daughter. This is a common and respected approach in many communities, and our platform is designed to accommodate it naturally.",
        },
        {
          q: "How long does profile approval take?",
          a: "We aim to review and approve profiles within one to three business days. Every submission is personally reviewed by a member of our team. If your profile requires any additional information or adjustments, we will be in touch directly.",
        },
        {
          q: "Is LaChuppah only for one type of community?",
          a: "Not at all. LaChuppah serves the full spectrum of Jewish communities — Modern Orthodox, Dati Leumi, Chareidi, Chabad, traditional, and more. Each profile includes background and values, so you can find compatibility that is meaningful to you.",
        },
      ],
    },
    download: {
      sectionLabel: "Download the App",
      headline: "Get LaChuppah on Every Device",
      subheading:
        "Create your profile, browse introductions, manage everything — from your phone or your browser. Available on iPhone and Android.",
      appStore: { above: "Launching Soon on the", title: "App Store" },
      googlePlay: { above: "Launching Soon on", title: "Google Play" },
      webNote: "Prefer to use a browser?",
      webCta: "Open the web app →",
    },
    contactForm: {
      sectionLabel: "Get in Touch",
      headline: "Contact Us",
      subheading:
        "Have a question or need help? Fill in the form and we will get back to you.",
      fields: {
        firstName: { label: "First Name", placeholder: "e.g. Reuven" },
        lastName: { label: "Last Name", placeholder: "e.g. Cohen" },
        email: { label: "Email Address", placeholder: "you@example.com" },
        phone: { label: "Phone Number (optional)", placeholder: "+1 212 555 0123" },
        subject: {
          label: "Subject",
          placeholder: "Select a topic",
          options: ["General Question", "Profile Help", "Technical Issue", "Matchmaker Inquiry", "Other"],
        },
        message: { label: "Message", placeholder: "How can we help you?" },
      },
      submit: "Send Message",
      sending: "Sending…",
      success: "Thank you — we will be in touch soon.",
      error: "Something went wrong. Please try again or email us at support@lachuppah.app.",
    },
    footer: {
      navLinks: [
        { label: "How It Works", href: "#how-it-works" },
        { label: "About", href: "#about" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact Us", href: "#contact" },
      ],
      copyright: "© 2026 LaChuppah. All rights reserved.",
      legal:
        "LaChuppah is a community platform and is not a licensed matchmaking agency. All introductions are made voluntarily between consenting parties.",
    },
  },

  he: {
    nav: {
      tagline: "היכרויות יהודיות מודרניות, בפרטיות ובכבוד",
      howItWorks: "איך זה עובד",
      features: "יתרונות",
      about: "אודות",
      faq: "שאלות נפוצות",
      createProfile: "צור פרופיל",
      admin: "כניסת מנהל",
    },
    hero: {
      badge: "פרטית, מאושרת, ומכובדת",
      headlineLine1: "היכרויות יהודיות,",
      headlineLine2: "כמו שצריך.",
      subheading:
        "לחופה מסייעת לרווקים, להורים ולשדכנים להתחבר בדרך מכובדת, פרטית ומחושבת — עם פרופילים נבדקים וקשר רק כשמסכימים שני הצדדים.",
      cta1: "צרו את הפרופיל שלכם",
      cta2: "איך זה עובד",
      ctaArrow: "←",
    },
    trust: [
      { value: "פרופילים נבדקים", label: "כל אחד, אישית" },
      { value: "פרטיות מהיסוד", label: "ללא שיתוף פרטים ללא הסכמה" },
      { value: "הסכמה הדדית", label: "נדרשת לפני כל קשר" },
    ],
    community: {
      sectionLabel: "הקהילה שלנו",
      headline: "לכל הקהילות היהודיות",
      subheading: "פלטפורמה אחת, לכל מגוון החיים היהודיים.",
      photos: [
        { src: "/images/kallah.png", label: "רווקים ומשפחות", tag: "כל הקהילות" },
        { src: "/images/charedi.png", label: "חרדי", tag: "מסורתי" },
        { src: "/images/leumi.png", label: "דתי לאומי", tag: "ציוני דתי" },
        { src: "/images/chabad.png", label: 'חב"ד', tag: "לובאוויטש" },
      ],
    },
    howItWorks: {
      sectionLabel: "התהליך",
      headline: "פשוט, פרטי ומחושב",
      subheading: "מהפרופיל הראשון ועד ההיכרות המאושרת — כל שלב בנוי סביב הזהירות והפרטיות שלכם.",
      steps: [
        {
          step: "א",
          title: "בנו את הפרופיל שלכם",
          desc: "אתם — או הורה בשמכם — יוצרים פרופיל מפורט: רקע, משפחה, ערכים, ומה אתם מחפשים.",
        },
        {
          step: "ב",
          title: "סקירה אישית",
          desc: "לפני פרסום, חבר בצוות שלנו סוקר כל פרופיל אישית לבדיקת כנות, שלמות ומתאימות.",
        },
        {
          step: "ג",
          title: "עיינו והביעו עניין",
          desc: "עיינו בפרופילים מאושרים והביעו עניין. בחרו אם להתקשר ישירות או דרך שדכן.",
        },
        {
          step: "ד",
          title: "התחברו בדרככם",
          desc: "קשר ישיר אפשרי רק לאחר שני הצדדים אישרו באופן עצמאי. שדכן יכול לנהל את ההיכרות במקומכם — פרטיותכם מוגנת בכל מקרה.",
        },
      ],
    },
    divider: "כל היכרות נעשית בקפידה. כל פרופיל נסקר במטרה.",
    features: {
      sectionLabel: "למה לחופה",
      headline: "בנוי להיכרויות יהודיות מחושבות",
      subheading: "כל תכונה קיימת כדי להפוך את התהליך לפרטי יותר, מכובד יותר ומשמעותי יותר.",
      items: [
        {
          title: "פרטיות והסכמה הדדית",
          description: "פרטי הקשר שלכם לא מוצגים ולא משותפים ללא הסכמתכם. הסכמה הדדית אינה הגדרה — היא מובנית בצורת עבודת הפלטפורמה.",
        },
        {
          title: "היכרויות דרך שדכן",
          description: "למשפחות המעדיפות שכל הקשר יעבור דרך שדכן, לחופה מציעה זאת כתכונה מרכזית — לא כתוספת.",
        },
        {
          title: "ניהול על ידי הורים",
          description: "מציאת הזיווג הנכון היא מסע משפחתי. הורים ואפוטרופוסים יכולים לנהל פרופילים בשם בניהם ובנותיהם — הפלטפורמה בנויה לתמוך בכך באופן טבעי.",
        },
        {
          title: "כל פרופיל נבדק אנושית",
          description: "כל פרופיל נסקר אישית לפני פרסומו. אין בוטים, אין פרופילים מזויפים — רק אנשים אמיתיים וכנים.",
        },
        {
          title: "סטטוס היכרויות עדכני",
          description: "כל פרופיל מציג סטטוס נוכחי — מחפש/ת, בהיכרות, או מאורס/ת. תמיד תדעו איפה הדברים עומדים.",
        },
        {
          title: "לכל הקהילות היהודיות",
          description: 'מודרן אורתודוקס, דתי לאומי, חרדי, חב"ד, מסורתי ועוד — לחופה בנויה לכולם.',
        },
      ],
    },
    ring: {
      sectionLabel: "המחויבות שלנו",
      headline: "לא אפליקציית היכרויות. פלטפורמת שידוכים.",
      body: "לחופה בנויה לאנשים שמחפשים משהו אמיתי — ולמשפחות שרוצות להיות חלק מהדרך. כל שלב מחושב. כל היכרות מחייבת הסכמת שני הצדדים. ללא קיצורי דרך, ללא לחץ.",
      cta: "צרו את הפרופיל שלכם",
      ctaArrow: "←",
    },
    about: {
      sectionLabel: "אודות לחופה",
      headline: "הסיפור שלנו",
      body1:
        "לחופה נבנתה מתוך צורך אמיתי ועמוק. מציאת הזיווג הנכון היא אחד ממסעות החיים המשמעותיים ביותר — ובכל זאת, הכלים הזמינים לא תמיד תאמו את ערכי האנשים שהשתמשו בהם. בנינו את מה שרצינו שיהיה קיים.",
      body2:
        "פרטי קשר אינם מוצגים בפרופיל. שום היכרות אינה נעשית ללא הסכמה מלאה ומרצון של שני הצדדים. למשפחות שרוצות שכל הקשר יעבור דרך שדכן, זו תכונה מרכזית — מובנית מהיסוד, לא תוספת.",
      body3:
        "אנחנו מאמינים שכנות חשובה יותר מכמות. כל פרופיל נסקר אישית. אנחנו לא שואפים להיות הפלטפורמה הגדולה ביותר — אלא המהימנה ביותר.",
      imageAlt: "שולחן אירוע ערוך בצורה אלגנטית",
      checklist: [
        "נוסדה על ידי הקהילה",
        "פרטיות מהיסוד",
        "אפשרות שדכן מובנית",
        "מותאם לנייד וטאבלט",
        "פרופילים מנוהלים על ידי הורים",
        "זמין בכל העולם",
      ],
    },
    kotel: {
      explanation: "כל מי שזוכה לסייע לנשמה יהודית אחת למצוא את זיווגה — כאילו קיים עולם מלא.",
    },
    faq: {
      sectionLabel: "שאלות נפוצות",
      headline: "שאלות נפוצות",
      subheading: "יש לכם שאלה שלא נענתה כאן? השתמשו בטופס יצירת הקשר למטה — נשמח לעזור.",
      items: [
        {
          q: "האם פרטי הקשר שלי בטוחים?",
          a: 'כן. מספר הטלפון, הדוא"ל וכל פרטי קשר אחרים שלכם לא מוצגים בפרופיל ולא משותפים ללא הסכמתכם המפורשת. אם בחרתם בקשר ישיר, הפרטים שלכם יוצגו רק לאחר שני הצדדים אישרו באופן עצמאי. אם בחרתם בדרך השדכן — פרטיכם לא משותפים עם הצד השני כלל, והשדכן מנהל את כל התקשורת בשמכם.',
        },
        {
          q: "מה ההבדל בין קשר ישיר לקשר דרך שדכן?",
          a: "בקשר ישיר, שני הצדדים בוחנים באופן עצמאי את הפרופיל של השני ומחליטים אם לאשר. רק לאחר שניהם אישרו, כל אחד מקבל את פרטי הקשר של השני. בקשר דרך שדכן, שדכן רשום של לחופה מנהל את כל ההיכרות — פונה לשני הצדדים, מנחה את התהליך, ומאשר את ההתאמה ברגע ששניהם מסכימים להמשיך.",
        },
        {
          q: "האם הורה או אפוטרופוס יכולים לנהל את הפרופיל שלי?",
          a: "כן, בהחלט. פרופילים מנוהלים על ידי הורים ואפוטרופוסים נתמכים במלואם בלחופה. הורה או אפוטרופוס יכולים ליצור, לעדכן ולנהל פרופיל בשם בנם או בתם.",
        },
        {
          q: "כמה זמן לוקח אישור הפרופיל?",
          a: "אנחנו שואפים לסקור ולאשר פרופילים בתוך יום עד שלושה ימי עסקים. כל פנייה נסקרת אישית על ידי חבר בצוות שלנו.",
        },
        {
          q: "האם לחופה מיועדת לסוג קהילה מסוים?",
          a: 'כלל לא. לחופה משרתת את כל מגוון הקהילות היהודיות — מודרן אורתודוקס, דתי לאומי, חרדי, חב"ד, מסורתי ועוד. כל פרופיל כולל רקע וערכים, כך שניתן למצוא התאמה שמשמעותית עבורכם.',
        },
      ],
    },
    download: {
      sectionLabel: "הורידו את האפליקציה",
      headline: "לחופה בכל מכשיר",
      subheading:
        "צרו פרופיל, עיינו בהיכרויות, נהלו הכל — מהטלפון או מהדפדפן. זמין ל-iPhone ואנדרואיד.",
      appStore: { above: "בקרוב —", title: "App Store" },
      googlePlay: { above: "בקרוב —", title: "Google Play" },
      webNote: "מעדיפים להשתמש בדפדפן?",
      webCta: "פתחו את גרסת האתר ←",
    },
    contactForm: {
      sectionLabel: "צרו קשר",
      headline: "צרו קשר",
      subheading: "יש לכם שאלה או צריכים עזרה? מלאו את הטופס ונחזור אליכם בהקדם.",
      fields: {
        firstName: { label: "שם פרטי", placeholder: "לדוגמה: ראובן" },
        lastName: { label: "שם משפחה", placeholder: "לדוגמה: כהן" },
        email: { label: 'כתובת דוא"ל', placeholder: "you@example.com" },
        phone: { label: "מספר טלפון (אופציונלי)", placeholder: "+972 50 123 4567" },
        subject: {
          label: "נושא",
          placeholder: "בחרו נושא",
          options: ["שאלה כללית", "עזרה עם פרופיל", "תקלה טכנית", "פנייה של שדכן", "אחר"],
        },
        message: { label: "הודעה", placeholder: "במה נוכל לעזור?" },
      },
      submit: "שלחו הודעה",
      sending: "שולח…",
      success: "תודה — נחזור אליכם בהקדם.",
      error: "משהו השתבש. נסו שוב או שלחו מייל ל-support@lachuppah.app.",
    },
    footer: {
      navLinks: [
        { label: "איך זה עובד", href: "#how-it-works" },
        { label: "אודות", href: "#about" },
        { label: "שאלות נפוצות", href: "#faq" },
        { label: "צרו קשר", href: "#contact" },
      ],
      copyright: "© 2026 לחופה. כל הזכויות שמורות.",
      legal: "לחופה היא פלטפורמה קהילתית ואינה סוכנות שידוכים מורשית. כל ההיכרויות נעשות מרצון בין צדדים מסכימים.",
    },
  },
} as const;

/* ─────────────────────────────────────────────
   FEATURE ICONS (language-agnostic SVGs)
───────────────────────────────────────────── */
const featureIcons = [
  <svg key="privacy" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>,
  <svg key="shadchan" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>,
  <svg key="parents" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>,
  <svg key="review" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="status" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>,
  <svg key="community" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>,
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */

const inputCls =
  "w-full border border-stone-200 rounded-2xl px-4 py-3 text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#1E3A5F]/20 focus:border-[#1E3A5F] transition-colors bg-white";
const labelCls = "block text-sm font-medium text-stone-600 mb-1.5";

export default function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = content[lang];
  const isHe = lang === "he";

  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("fade-visible"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-fade]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        console.error("[LaChuppah contact form error]", body);
        throw new Error();
      }
      setFormStatus("success");
      setForm({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-[#FDFAF6]" dir={isHe ? "rtl" : "ltr"} lang={isHe ? "he" : "en"}>

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-3">
              <Image src="/lachuppah-logo.png" alt="LaChuppah" width={36} height={36} className="object-contain" priority />
              <div>
                <div className="text-xl font-bold text-[#1E3A5F] leading-tight">LaChuppah</div>
                <div className="hidden sm:block text-xs text-stone-400 leading-tight">{t.nav.tagline}</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              <a href="#how-it-works" className="text-stone-500 hover:text-[#1E3A5F] text-sm font-medium transition-colors">{t.nav.howItWorks}</a>
              <a href="#features" className="text-stone-500 hover:text-[#1E3A5F] text-sm font-medium transition-colors">{t.nav.features}</a>
              <a href="#about" className="text-stone-500 hover:text-[#1E3A5F] text-sm font-medium transition-colors">{t.nav.about}</a>
              <a href="#faq" className="text-stone-500 hover:text-[#1E3A5F] text-sm font-medium transition-colors">{t.nav.faq}</a>
            </nav>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setLang(l => l === "en" ? "he" : "en")}
                className="flex items-center gap-1 rounded-full border border-stone-200 px-3 py-1.5 text-sm hover:border-[#1E3A5F] transition-colors select-none"
                aria-label="Toggle language"
              >
                <span className={lang === "en" ? "font-semibold text-[#1E3A5F]" : "text-stone-400"}>EN</span>
                <span className="text-stone-300 text-xs mx-0.5">|</span>
                <span className={lang === "he" ? "font-semibold text-[#1E3A5F]" : "text-stone-400"}>עב</span>
              </button>
              <a href="#download" className="bg-[#C9923F] hover:bg-[#B8812E] text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-colors shadow-sm">
                {t.nav.createProfile}
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="bg-[#1E3A5F] text-white overflow-hidden">

        {/* Desktop: 3-column — leumi | text | chabad+charedi */}
        <div className="hidden lg:grid min-h-[92vh] grid-cols-[1.2fr_1fr_1.2fr]">

          {/* Left — leumi (landscape, up to 20% side crop to allow taller display) */}
          <div className={`relative flex items-center justify-center bg-[#0C1E33] overflow-hidden ${isHe ? "order-3" : "order-1"}`}>
            <div className="absolute top-10 left-8 w-56 h-56 rounded-full border border-[#C9923F]/10 pointer-events-none" />
            <div className="absolute bottom-10 right-6 w-36 h-36 rounded-full border border-[#C9923F]/8 pointer-events-none" />
            <div style={{ transform: 'rotate(-5deg)' }}>
              <div className="bg-white p-[7px] shadow-[0_32px_72px_rgba(0,0,0,0.7)]">
                {/* 430×403: display width 717px, crops 143px per side = 20% */}
                <div className="relative overflow-hidden" style={{ width: '430px', height: '403px' }}>
                  <Image
                    src="/images/leumi.png"
                    alt=""
                    fill
                    className="object-cover object-center"
                    sizes="700px"
                    quality={90}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Center — text */}
          <div className="order-2 flex flex-col justify-center px-8 xl:px-10 py-16">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-sm font-medium text-[#F0C87A] mb-8 self-start">
              <span>✦</span>
              <span>{t.hero.badge}</span>
            </div>
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-[1.08] tracking-tight mb-6">
              {t.hero.headlineLine1}{" "}
              <span className="text-[#C9923F]">{t.hero.headlineLine2}</span>
            </h1>
            <p className="text-base xl:text-lg text-blue-200 leading-relaxed mb-10">
              {t.hero.subheading}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#download"
                className="inline-flex items-center justify-center gap-2 bg-[#C9923F] hover:bg-[#B8812E] text-white font-semibold px-7 py-4 rounded-full text-sm transition-all shadow-lg hover:-translate-y-0.5"
              >
                {t.hero.cta1}
                <span>{t.hero.ctaArrow}</span>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-7 py-4 rounded-full text-sm transition-all"
              >
                {t.hero.cta2}
              </a>
            </div>
            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col gap-2.5">
              {t.trust.map((stat) => (
                <div key={stat.label} className="flex items-center gap-2.5 text-sm">
                  <span className="text-[#C9923F] text-base leading-none">✦</span>
                  <span className="font-semibold text-white">{stat.value}</span>
                  <span className="text-white/30">—</span>
                  <span className="text-blue-200">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — chabad (landscape) + charedi (portrait), stacked */}
          <div className={`relative flex flex-col items-center justify-center gap-4 bg-[#0C1E33] overflow-hidden px-2 py-2 ${isHe ? "order-1" : "order-3"}`}>
            <div className="absolute top-8 right-8 w-48 h-48 rounded-full border border-[#C9923F]/10 pointer-events-none" />
            <div className="absolute bottom-8 left-6 w-32 h-32 rounded-full border border-[#C9923F]/8 pointer-events-none" />

            {/* chabad — landscape 4:3 (1448×1086), natural ratio */}
            <div style={{ transform: 'rotate(4deg)' }}>
              <div className="bg-white p-[7px] shadow-[0_28px_64px_rgba(0,0,0,0.65)]">
                <Image
                  src="/images/chabad.png"
                  alt=""
                  width={1448}
                  height={1086}
                  style={{ width: '430px', height: 'auto', display: 'block' }}
                  sizes="860px"
                  quality={90}
                  priority
                />
              </div>
            </div>

            {/* charedi — portrait (1122×1402), natural ratio */}
            <div style={{ transform: 'rotate(-3deg)' }}>
              <div className="bg-white p-[7px] shadow-[0_28px_64px_rgba(0,0,0,0.6)]">
                <Image
                  src="/images/charedi.png"
                  alt=""
                  width={1122}
                  height={1402}
                  style={{ width: '370px', height: 'auto', display: 'block' }}
                  sizes="740px"
                  quality={90}
                />
              </div>
            </div>
          </div>

        </div>

        {/* Mobile: text then photos */}
        <div className="lg:hidden">
          <div className="flex flex-col justify-center px-6 py-16">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-sm font-medium text-[#F0C87A] mb-6 self-start">
              <span>✦</span>
              <span>{t.hero.badge}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-[1.08] tracking-tight mb-5">
              {t.hero.headlineLine1}{" "}
              <span className="text-[#C9923F]">{t.hero.headlineLine2}</span>
            </h1>
            <p className="text-base text-blue-200 leading-relaxed mb-8">{t.hero.subheading}</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="#download" className="inline-flex items-center justify-center gap-2 bg-[#C9923F] hover:bg-[#B8812E] text-white font-semibold px-7 py-4 rounded-full text-sm transition-all shadow-lg">
                {t.hero.cta1}<span>{t.hero.ctaArrow}</span>
              </a>
              <a href="#how-it-works" className="inline-flex items-center justify-center bg-white/10 border border-white/25 text-white font-semibold px-7 py-4 rounded-full text-sm transition-all">
                {t.hero.cta2}
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 px-4 pb-8">
            {["/images/leumi.png", "/images/chabad.png", "/images/charedi.png"].map((src, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl" style={{ height: '260px' }}>
                <Image src={src} alt="" fill className="object-cover object-center" sizes="100vw" quality={90} />
              </div>
            ))}
          </div>
        </div>

        {/* Wave transition to cream */}
        <div className="relative -mb-1">
          <svg viewBox="0 0 1440 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 64L1440 64L1440 0C1200 52 900 64 720 44C540 24 240 0 0 44L0 64Z" fill="#FDFAF6" />
          </svg>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" className="bg-white py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-fade>
            <p className="text-sm font-semibold text-[#C9923F] uppercase tracking-widest mb-3">{t.howItWorks.sectionLabel}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-4">{t.howItWorks.headline}</h2>
            <p className="text-lg text-stone-500 max-w-xl mx-auto">{t.howItWorks.subheading}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {t.howItWorks.steps.map((item, i) => (
              <div key={item.step} data-fade data-delay={String(i + 1)} className="bg-[#1E3A5F] rounded-3xl p-8 hover:bg-[#162D4A] transition-all">
                <div className="text-5xl font-black text-[#C9923F]/40 mb-4 leading-none">{item.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-blue-200 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIVIDER STRIP ── */}
      <div className="relative h-24 sm:h-28 overflow-hidden">
        <Image src="/images/ring.jpg" alt="" fill className="object-cover object-center" sizes="100vw" />
        <div className="absolute inset-0 bg-[#1E3A5F]/88" />
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <p className="text-base sm:text-lg font-medium text-blue-100 tracking-wide text-center max-w-2xl italic">
            {t.divider}
          </p>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section id="features" className="bg-[#FDFAF6] py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-fade>
            <p className="text-sm font-semibold text-[#C9923F] uppercase tracking-widest mb-3">{t.features.sectionLabel}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-4">{t.features.headline}</h2>
            <p className="text-lg text-stone-500 max-w-xl mx-auto">{t.features.subheading}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {t.features.items.map((feature, i) => (
              <div key={i} data-fade data-delay={String((i % 3) + 1)} className="group bg-white rounded-3xl p-7 border border-stone-100 hover:border-[#1E3A5F]/15 hover:shadow-lg transition-all">
                <div className="w-11 h-11 bg-[#1E3A5F]/8 text-[#1E3A5F] rounded-2xl flex items-center justify-center mb-5 group-hover:bg-[#1E3A5F] group-hover:text-white transition-colors">
                  {featureIcons[i]}
                </div>
                <h3 className="text-base font-bold text-stone-900 mb-2">{feature.title}</h3>
                <p className="text-stone-500 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RING / VALUES STATEMENT ── */}
      <section className="relative overflow-hidden py-28 lg:py-40">
        <div className="absolute inset-0">
          <Image src="/images/flowers.jpg" alt="" fill className="object-cover object-center" sizes="100vw" />
          <div className={`absolute inset-0 ${isHe ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-[#1E3A5F]/97 via-[#1E3A5F]/85 to-[#1E3A5F]/60`} />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl" data-fade>
            <p className="text-sm font-semibold text-[#C9923F] uppercase tracking-widest mb-4">{t.ring.sectionLabel}</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{t.ring.headline}</h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-10">{t.ring.body}</p>
            <a href="#download" className="inline-flex items-center gap-2 bg-[#C9923F] hover:bg-[#B8812E] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-xl hover:-translate-y-0.5">
              {t.ring.cta}
              <span>{t.ring.ctaArrow}</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

            {/* Kallah — portrait, full column height */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[2/3] lg:aspect-auto order-2 lg:order-1" data-fade>
              <Image
                src="/images/kallah.png"
                alt=""
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/20 to-transparent" />
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center order-1 lg:order-2" data-fade data-delay="2">
              <p className="text-sm font-semibold text-[#C9923F] uppercase tracking-widest mb-3">{t.about.sectionLabel}</p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-6 leading-tight">{t.about.headline}</h2>
              <p className="text-stone-600 leading-relaxed mb-5 text-base">{t.about.body1}</p>
              <p className="text-stone-600 leading-relaxed mb-8 text-base">{t.about.body2}</p>
              <div className="grid grid-cols-2 gap-3">
                {t.about.checklist.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-stone-700">
                    <div className="w-5 h-5 rounded-full bg-[#C9923F]/15 text-[#C9923F] flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <div className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0">
          <Image src="/images/kotel.jpg" alt="" fill className="object-cover object-[center_25%]" sizes="100vw" />
          <div className="absolute inset-0 bg-[#1E3A5F]/88" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white" data-fade>
          <p className="text-lg sm:text-2xl font-semibold text-[#F0C87A] mb-3 leading-relaxed" dir="rtl">
            כָּל הַמְקַיֵּם נֶפֶשׁ אַחַת מִיִּשְׂרָאֵל — מַעֲלֶה עָלָיו הַכָּתוּב כְּאִלּוּ קִיֵּם עוֹלָם מָלֵא
          </p>
          <p className="text-sm text-blue-200 max-w-lg mx-auto leading-relaxed mt-3">
            {t.kotel.explanation}
          </p>
        </div>
      </div>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-[#FDFAF6] py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14" data-fade>
            <p className="text-sm font-semibold text-[#C9923F] uppercase tracking-widest mb-3">{t.faq.sectionLabel}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-4">{t.faq.headline}</h2>
            <p className="text-lg text-stone-500">{t.faq.subheading}</p>
          </div>
          <div className="space-y-4">
            {t.faq.items.map((faq, i) => (
              <div key={i} data-fade data-delay={String((i % 3) + 1)} className="bg-white rounded-3xl p-7 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-[#1E3A5F] mb-3 text-base">{faq.q}</h3>
                <p className="text-stone-500 leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOWNLOAD ── */}
      <section id="download" className="relative overflow-hidden py-28 lg:py-36">
        <div className="absolute inset-0">
          <Image src="/images/balloons.jpg" alt="" fill className="object-cover object-center" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A5F]/85 via-[#1E3A5F]/80 to-[#162D4A]/90" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white" data-fade>
          <p className="text-sm font-semibold text-[#F0C87A] uppercase tracking-widest mb-3">{t.download.sectionLabel}</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">{t.download.headline}</h2>
          <p className="text-lg text-blue-100 mb-12 max-w-lg mx-auto leading-relaxed">{t.download.subheading}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://apps.apple.com/app/id6762863228"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-4 bg-white/12 hover:bg-white/22 border border-white/25 text-white px-7 py-4 rounded-2xl transition-all shadow-lg backdrop-blur-sm hover:-translate-y-0.5"
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
              className="inline-flex items-center gap-4 bg-white/12 hover:bg-white/22 border border-white/25 text-white px-7 py-4 rounded-2xl transition-all shadow-lg backdrop-blur-sm hover:-translate-y-0.5"
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

          <div className="mt-10 pt-6 border-t border-white/12 text-center">
            <p className="text-blue-300 text-sm mb-2">{t.download.webNote}</p>
            <a href="https://app.lachuppah.app" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white text-sm underline underline-offset-4 transition-colors">
              {t.download.webCta}
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ── */}
      <section id="contact" className="bg-white py-20 lg:py-28">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12" data-fade>
            <p className="text-sm font-semibold text-[#C9923F] uppercase tracking-widest mb-3">{t.contactForm.sectionLabel}</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-4">{t.contactForm.headline}</h2>
            <p className="text-lg text-stone-500">{t.contactForm.subheading}</p>
          </div>

          <div className="bg-[#FDFAF6] rounded-3xl border border-stone-100 shadow-sm p-8 sm:p-10" data-fade data-delay="1">
            {formStatus === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-[#1E3A5F]">{t.contactForm.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>{t.contactForm.fields.firstName.label}</label>
                    <input type="text" required className={inputCls} placeholder={t.contactForm.fields.firstName.placeholder} value={form.firstName} onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} />
                  </div>
                  <div>
                    <label className={labelCls}>{t.contactForm.fields.lastName.label}</label>
                    <input type="text" required className={inputCls} placeholder={t.contactForm.fields.lastName.placeholder} value={form.lastName} onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))} />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>{t.contactForm.fields.email.label}</label>
                    <input type="email" required className={inputCls} placeholder={t.contactForm.fields.email.placeholder} value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                  </div>
                  <div>
                    <label className={labelCls}>{t.contactForm.fields.phone.label}</label>
                    <input type="tel" className={inputCls} placeholder={t.contactForm.fields.phone.placeholder} value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                  </div>
                </div>
                <div>
                  <label className={labelCls}>{t.contactForm.fields.subject.label}</label>
                  <select className={inputCls} value={form.subject} onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}>
                    <option value="">{t.contactForm.fields.subject.placeholder}</option>
                    {t.contactForm.fields.subject.options.map(o => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>{t.contactForm.fields.message.label}</label>
                  <textarea required rows={5} className={inputCls} placeholder={t.contactForm.fields.message.placeholder} value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                </div>
                {formStatus === "error" && (
                  <p className="text-sm text-red-600 bg-red-50 border border-red-100 rounded-2xl px-4 py-3">
                    {t.contactForm.error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full bg-[#1E3A5F] hover:bg-[#162D4A] disabled:opacity-60 text-white font-semibold py-4 rounded-full transition-colors text-base shadow-sm"
                >
                  {formStatus === "sending" ? t.contactForm.sending : t.contactForm.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#1E3A5F] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8 pb-8 border-b border-white/10">
            <a href="#" className="flex items-center gap-3">
              <Image src="/lachuppah-logo.png" alt="LaChuppah" width={36} height={36} className="object-contain opacity-90" />
              <span className="text-xl font-bold">LaChuppah</span>
            </a>
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-blue-300">
              {t.footer.navLinks.map((link) => (
                <a key={link.href} href={link.href} className="hover:text-white transition-colors">{link.label}</a>
              ))}
            </nav>
          </div>
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mb-6 text-sm text-blue-300">
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
            <span className="text-blue-600 select-none">|</span>
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-blue-600 select-none">|</span>
            <Link href="/safety" className="hover:text-white transition-colors">Safety & Community Rules</Link>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-400">
            <p>{t.footer.copyright}</p>
            <p className="text-xs text-blue-500 text-center md:text-end max-w-md">{t.footer.legal}</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
