import Image from "next/image";
import Link from "next/link";

const legalLinks = [
  { label: "Terms of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Safety & Community Rules", href: "/safety" },
];

interface Props {
  badge: string;
  title: string;
  children: React.ReactNode;
}

export function Section({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-start gap-3 mb-3">
        <span className="text-[#C9923F] font-bold text-sm mt-0.5 flex-shrink-0 w-5">{num}.</span>
        <h2 className="text-lg font-bold text-[#1E3A5F] leading-snug">{title}</h2>
      </div>
      <div className="ml-8 text-stone-600 leading-relaxed text-base space-y-3">
        {children}
      </div>
    </div>
  );
}

export default function LegalLayout({ badge, title, children }: Props) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#FDFAF6" }}>

      {/* Header */}
      <header className="bg-[#1E3A5F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/lachuppah-logo.png"
              alt="LaChuppah"
              width={32}
              height={32}
              className="object-contain opacity-90"
            />
            <span className="text-xl font-bold text-white">LaChuppah</span>
          </Link>
          <Link
            href="/"
            className="text-sm text-blue-300 hover:text-white transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Page title */}
      <div className="bg-[#1E3A5F] pt-10 pb-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-[#C9923F] uppercase tracking-widest mb-3">
            {badge}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            {title}
          </h1>
        </div>
      </div>

      {/* Wave */}
      <div className="bg-[#1E3A5F] -mb-1">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full block"
        >
          <path
            d="M0 48L1440 48L1440 0C1200 38 900 48 720 32C540 16 240 0 0 32L0 48Z"
            fill="#FDFAF6"
          />
        </svg>
      </div>

      {/* Content */}
      <main className="flex-1 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1E3A5F] text-white py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-6 pb-6 border-b border-white/10">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/lachuppah-logo.png"
                alt="LaChuppah"
                width={32}
                height={32}
                className="object-contain opacity-90"
              />
              <span className="text-xl font-bold">LaChuppah</span>
            </Link>
            <nav className="flex flex-wrap justify-center gap-6 text-sm text-blue-300">
              {legalLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="hover:text-white transition-colors"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-blue-400">
            <p>© 2026 LaChuppah. All rights reserved.</p>
            <p className="text-xs text-blue-500 text-center md:text-end max-w-md">
              LaChuppah is a community platform and is not a licensed matchmaking agency.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}
