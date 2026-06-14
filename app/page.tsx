import Image from "next/image";

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Single Profiles",
    description:
      "Complete, structured profiles for every single — background, hashkafa, preferences, requirements, references, and photos in one place.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Smart Matching",
    description:
      "Quickly find compatible candidates for any single. Filter by hashkafa, age, location, background, and more with powerful search tools.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Match Tracking",
    description:
      "Follow every shidduch from first suggestion through dates, engagement, and chuppah. Never lose track of where things stand.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: "Notes & Reminders",
    description:
      "Keep detailed notes on every single, match, and conversation. Set follow-up reminders so nothing falls through the cracks.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Team Collaboration",
    description:
      "Multiple shadchanim, coaches, and admins work together in one shared system with clear role-based access controls.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Progress Dashboard",
    description:
      "A real-time overview of all active shidduchim — see who needs attention, what's moving forward, and celebrate every success.",
  },
];

const mockScreens = [
  {
    title: "Singles Dashboard",
    desc: "All your singles at a glance — searchable, filterable, organized",
    gradient: "from-[#1E3A5F] to-[#2D5382]",
    rows: [
      { initials: "RL", name: "Ruchie L.", tag: "Active" },
      { initials: "SG", name: "Sima G.", tag: "In Shidduch" },
      { initials: "DK", name: "Devorah K.", tag: "Active" },
      { initials: "CW", name: "Chani W.", tag: "New" },
    ],
  },
  {
    title: "Match Tracker",
    desc: "Every suggestion tracked from first intro to chuppah",
    gradient: "from-[#C9923F] to-[#A8731E]",
    rows: [
      { initials: "S1", name: "Suggested", tag: "2 couples" },
      { initials: "S2", name: "Info Shared", tag: "5 couples" },
      { initials: "S3", name: "Dates Set", tag: "3 couples" },
      { initials: "S4", name: "Ongoing", tag: "1 couple" },
    ],
  },
  {
    title: "Notes & Follow-Up",
    desc: "Detailed notes and reminders for every single and match",
    gradient: "from-[#2D7A6B] to-[#1E5A4E]",
    rows: [
      { initials: "⏰", name: "Follow up with Sima", tag: "Today" },
      { initials: "📝", name: "Update profile — Ruchie", tag: "Tmrw" },
      { initials: "✅", name: "Confirmed next date", tag: "Done" },
      { initials: "📞", name: "Call reference — Devorah", tag: "This wk" },
    ],
  },
];

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFAF6]">

      {/* ── HEADER ── */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#" className="flex items-center gap-3">
              <Image
                src="/lachuppah-logo.png"
                alt="LaChuppah"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
              <span className="text-xl font-bold text-[#1E3A5F]">LaChuppah</span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-stone-600 hover:text-[#1E3A5F] text-sm font-medium transition-colors">Features</a>
              <a href="#about" className="text-stone-600 hover:text-[#1E3A5F] text-sm font-medium transition-colors">About</a>
              <a href="#download" className="text-stone-600 hover:text-[#1E3A5F] text-sm font-medium transition-colors">Download</a>
              <a href="#contact" className="text-stone-600 hover:text-[#1E3A5F] text-sm font-medium transition-colors">Contact</a>
            </nav>
            <a
              href="#download"
              className="bg-[#1E3A5F] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#162D4A] transition-colors"
            >
              Download App
            </a>
          </div>
        </div>
      </header>

      {/* ── HERO — flowers.jpg background ── */}
      <section className="relative text-white overflow-hidden">
        {/* Background photo: chuppah arch with flowers — overlay lightened so image shows */}
        <div className="absolute inset-0">
          <Image
            src="/images/flowers.jpg"
            alt=""
            fill
            className="object-cover object-[35%_center]"
            priority
            sizes="100vw"
          />
          {/* Lighter overlay: warm dark bottom, clear top — flowers clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A5F]/55 via-[#1E3A5F]/60 to-[#162D4A]/75" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-40 text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 rounded-full px-4 py-1.5 text-sm font-medium text-[#F0C87A] mb-8">
            <span>✨</span>
            <span>Purpose-built for the frum shidduch world</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6 drop-shadow-lg">
            Bringing Order to the{" "}
            <span className="text-[#C9923F]">Sacred Work</span>
            <br />of Shidduchim
          </h1>
          <p className="text-lg sm:text-xl text-blue-50 max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow">
            LaChuppah helps shadchanim, coaches, and shidduch organizations
            manage singles, track matches, and guide couples from first
            suggestion all the way to the chuppah.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download"
              className="inline-flex items-center justify-center gap-2 bg-[#C9923F] hover:bg-[#B8812E] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Download Free
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center bg-white/15 hover:bg-white/25 border border-white/40 text-white font-semibold px-8 py-4 rounded-full transition-colors"
            >
              See Features
            </a>
          </div>
        </div>

        {/* Wave transition to cream background */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block">
            <path d="M0 60L1440 60L1440 0C1200 50 900 60 720 40C540 20 240 0 0 40L0 60Z" fill="#FDFAF6" />
          </svg>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="bg-[#FDFAF6] pt-4 pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* gap-px + bg-stone-100 creates clean 1px dividers in any grid layout */}
          <div className="rounded-2xl shadow-sm border border-stone-100 overflow-hidden bg-stone-100">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-px">
              {[
                { value: "500+", label: "Active Shadchanim" },
                { value: "10,000+", label: "Singles Managed" },
                { value: "1,200+", label: "Matches Made" },
                { value: "Free", label: "To Get Started" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center py-7 px-4 text-center bg-white"
                >
                  <span className="text-2xl font-bold text-[#1E3A5F]">{stat.value}</span>
                  <span className="text-sm text-stone-500 mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="bg-[#FDFAF6] py-12 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-5xl mb-6">💍</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-6 leading-tight">
            Shidduchim is a sacred responsibility.
            <br />
            <span className="text-[#C9923F]">Managing it shouldn&apos;t be chaotic.</span>
          </h2>
          <p className="text-lg text-stone-600 leading-relaxed mb-14 max-w-2xl mx-auto">
            Between spreadsheets, WhatsApp threads, handwritten notes, and
            countless follow-ups — even the most dedicated shadchan can lose
            track. Promising matches fall through the cracks. Important details
            get buried. LaChuppah changes that.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                emoji: "📋",
                title: "Scattered Information",
                desc: "Singles' details spread across spreadsheets, notes, texts, and memory",
              },
              {
                emoji: "⏰",
                title: "Missed Follow-Ups",
                desc: "Critical check-ins get lost in the daily rush of messages and obligations",
              },
              {
                emoji: "🔍",
                title: "No Clear Overview",
                desc: "Hard to see at a glance who needs attention and what's progressing",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 text-left"
              >
                <div className="text-3xl mb-3">{item.emoji}</div>
                <h3 className="font-semibold text-stone-800 mb-2 text-base">{item.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── KEYBOARD DIVIDER — atmospheric strip before Features ── */}
      {/*
        keyboard.jpg is a dark MIDI instrument with colored LED bokeh lights.
        At this height with an 87% overlay, only the ambient colored lights
        bleed through — creating a premium, subtle textured band.
      */}
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
            LaChuppah brings every detail into harmony — so nothing gets lost and nothing is missed
          </p>
        </div>
      </div>

      {/* ── FEATURES ── */}
      <section id="features" className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-[#C9923F] uppercase tracking-widest mb-3">
              Everything You Need
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-4">
              Built for Shidduch Professionals
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              LaChuppah gives shadchanim, coaches, and admins the tools to work
              efficiently and guide more singles to the chuppah.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group bg-[#FDFAF6] rounded-2xl p-7 border border-stone-100 hover:border-[#1E3A5F]/20 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-[#1E3A5F]/10 text-[#1E3A5F] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1E3A5F] group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-stone-900 mb-2">{feature.title}</h3>
                <p className="text-stone-600 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RING SECTION — "Every match is a mitzvah" ── */}
      {/*
        ring.jpg: two gold wedding bands on delicate fabric with dried flowers.
        Represents the goal — commitment, the chuppah, the ultimate purpose.
      */}
      <section className="relative overflow-hidden py-24 lg:py-36">
        <div className="absolute inset-0">
          <Image
            src="/images/ring.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Layered overlay: dark left for text, lighter right to let rings glow through */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 via-[#1E3A5F]/80 to-[#1E3A5F]/65" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold text-[#C9923F] uppercase tracking-widest mb-4">
              The Goal
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Every suggestion is a step toward the chuppah
            </h2>
            <p className="text-lg text-blue-100 leading-relaxed mb-10">
              LaChuppah keeps every shidduch moving forward — from the first name
              on a card to the day they stand together under the chuppah. Nothing
              gets lost. No one is forgotten.
            </p>
            <div className="flex flex-wrap gap-x-10 gap-y-5 mb-10">
              {[
                { value: "1,200+", label: "Shidduchim Made" },
                { value: "98%", label: "Shadchan Satisfaction" },
                { value: "0", label: "Matches Lost" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl sm:text-3xl font-bold text-[#C9923F]">{s.value}</div>
                  <div className="text-sm text-blue-200 mt-1 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
            <a
              href="#download"
              className="inline-flex items-center gap-2 bg-[#C9923F] hover:bg-[#B8812E] text-white font-semibold px-7 py-3.5 rounded-full transition-colors shadow-lg"
            >
              Get Started Free
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ── SCREENSHOTS ── */}
      <section className="bg-[#FDFAF6] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-[#C9923F] uppercase tracking-widest mb-3">
              See It In Action
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-4">
              A Beautiful, Intuitive Interface
            </h2>
            <p className="text-lg text-stone-600 max-w-2xl mx-auto">
              Designed to feel natural and efficient, so you can focus on the
              work — not the software.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockScreens.map((screen) => (
              <div
                key={screen.title}
                className="rounded-3xl overflow-hidden shadow-lg border border-stone-200 bg-white flex flex-col"
              >
                <div className={`bg-gradient-to-r ${screen.gradient} px-5 py-4 text-white`}>
                  <div className="flex items-center gap-1.5 mb-3 opacity-40">
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white" />
                    <div className="flex-1 bg-white/40 rounded-full h-4 ml-1" />
                  </div>
                  <div className="text-xs opacity-70 mb-0.5">LaChuppah</div>
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
      {/*
        table.jpg: beautifully set wedding reception table with flowers and glasses.
        Evokes the celebration and care behind every shidduch.
      */}
      <section id="about" className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Photo panel */}
            <div className="order-2 lg:order-1">
              <div className="relative h-80 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/table.jpg"
                  alt="An elegantly set wedding celebration table"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Subtle warm vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/30 via-transparent to-transparent" />
              </div>
            </div>

            {/* Text panel */}
            <div className="order-1 lg:order-2">
              <div className="text-sm font-semibold text-[#C9923F] uppercase tracking-widest mb-3">
                About LaChuppah
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#1E3A5F] mb-6 leading-tight">
                Built by people who understand the weight of this work
              </h2>
              <p className="text-stone-600 leading-relaxed mb-5">
                LaChuppah was built with deep respect for the shidduch process
                and the people who dedicate themselves to it. We understand the
                care, the sensitivity, and the extraordinary effort that goes
                into every suggestion — and how much rests on each introduction.
              </p>
              <p className="text-stone-600 leading-relaxed mb-8">
                Our goal is simple: give shadchanim and shidduch professionals
                the best possible tools so they can do more of what matters most
                — making shidduchim.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Designed for shadchanim",
                  "Privacy & security first",
                  "Multi-user collaboration",
                  "Mobile & tablet ready",
                  "Hebrew & English support",
                  "Ongoing updates & support",
                ].map((item) => (
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

      {/* ── KOTEL STRIP — "Built with Purpose" ── */}
      {/*
        kotel.jpg: people davening at the Western Wall.
        Used with a very heavy navy overlay so only the warm stone texture
        bleeds through. Anchors the app in Jewish identity and meaning.
      */}
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
            Whoever helps even one Jewish soul find their match — is as if they sustained an entire world.
          </p>
        </div>
      </div>

      {/* ── DOWNLOAD — balloons.jpg celebration background ── */}
      {/*
        balloons.jpg: colorful balloons rising into a bright blue sky.
        Represents joy, celebration, and the l'chaim moment.
        A navy gradient overlay keeps the section readable and on-brand.
      */}
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
            Available Now
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Celebrate Every L&apos;Chaim
          </h2>
          <p className="text-lg text-blue-100 mb-12 max-w-lg mx-auto leading-relaxed">
            Download LaChuppah free and start managing shidduchim the way they
            deserve to be managed. Available on iPhone and Android.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center gap-4 bg-white/15 hover:bg-white/25 border border-white/30 text-white px-7 py-4 rounded-2xl transition-colors shadow-md backdrop-blur-sm"
            >
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.06.04c-1.02.63-1.7 1.67-1.69 2.92.01 1.47.88 2.75 2.11 3.28zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-blue-200">Download on the</div>
                <div className="text-lg font-semibold leading-tight">App Store</div>
              </div>
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-4 bg-white/15 hover:bg-white/25 border border-white/30 text-white px-7 py-4 rounded-2xl transition-colors shadow-md backdrop-blur-sm"
            >
              <svg className="w-8 h-8 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199a1 1 0 01.002 1.732L15.394 12l2.302-2.302 2.302-2.302a.996.996 0 01-.302 2.112zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.634z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-blue-200">Get it on</div>
                <div className="text-lg font-semibold leading-tight">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ── WHATSAPP CTA — wine.jpg as dark elegant background ── */}
      {/*
        wine.jpg: rose wine poured into a crystal glass against a dark background.
        Very dark base image — the emerald overlay tints it while the warm amber
        glow of the glass subtly shows through, creating a rich, refined feel.
      */}
      <section id="contact" className="relative overflow-hidden py-20 lg:py-28 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/wine.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Emerald overlay — maintains WhatsApp brand color while wine adds depth */}
          <div className="absolute inset-0 bg-[#054D44]/82" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-white/15 border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <WhatsAppIcon className="w-9 h-9" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Questions? We&apos;re Here to Help
          </h2>
          <p className="text-lg text-emerald-100 mb-10 max-w-lg mx-auto leading-relaxed">
            Reach out to us directly on WhatsApp. Whether you have a question,
            need onboarding help, or just want to learn more — we&apos;d love
            to hear from you.
          </p>
          <a
            href="https://wa.me/15551234567"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#054D44] font-bold px-10 py-4 rounded-full hover:bg-emerald-50 transition-colors shadow-xl text-lg"
          >
            <WhatsAppIcon className="w-6 h-6" />
            Chat on WhatsApp
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
                alt="LaChuppah"
                width={36}
                height={36}
                className="object-contain opacity-90"
              />
              <span className="text-xl font-bold">LaChuppah</span>
            </a>
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-blue-200">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#download" className="hover:text-white transition-colors">Download</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>
            <a
              href="https://wa.me/15551234567"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp Support
            </a>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-300">
            <p>© 2026 LaChuppah. All rights reserved.</p>
            <p className="text-xs text-blue-400">Helping shadchanim guide singles to the chuppah</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
