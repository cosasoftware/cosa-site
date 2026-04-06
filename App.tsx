import React from "react";

/** Emergence — Cosa Software */
export default function App() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-neutral-900 selection:text-white">
      <Header />
      <Intro />
      <Banner />
      <BelowBanner />
      <BriefingCard />
      <Screens />
      <CTA />
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo/cosa-mark.svg" alt="Cosa" className="h-6 w-6" />
          <div className="font-medium tracking-tight">Emergence</div>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-600">
          <a href="#screens" className="hover:text-neutral-900">Platform</a>
          <a href="/executive-briefing.html" className="hover:text-neutral-900">Executive Brief</a>
          <a href="#demo" className="hover:text-neutral-900">Get in touch</a>
        </nav>
      </div>
      <div className="h-px bg-neutral-200" />
    </header>
  );
}

function Intro() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-[25px] pb-0 text-center">
      <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">Emergence</h1>
      <p className="mt-2 text-xl md:text-2xl text-neutral-700">Process Intelligence Platform</p>
    </section>
  );
}

function Banner() {
  return (
    <section className="mt-[18px] w-full">
      <div className="w-full bg-white flex items-center justify-center">
        <img src="/art/01.png" alt="Emergence platform — multi-role enterprise dashboard" className="w-full max-h-[520px] object-contain" />
      </div>
    </section>
  );
}

function BelowBanner() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-[18px] pb-10 text-center">
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Any domain.</h2>
      <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-1">One engine.</h2>
      <p className="mt-3 text-lg text-neutral-700">
        Domain-specific applications are not developed — they emerge from pure JSON schemas.
      </p>
    </section>
  );
}

function BriefingCard() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10">
      <a href="/executive-briefing.html" style={{ textDecoration: "none", display: "block" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: "40px",
            background: "#1a1917",
            borderRadius: "4px",
            padding: "52px 60px",
            cursor: "pointer",
            transition: "opacity 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.93")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
        >
          <div>
            <div style={{
              fontFamily: "monospace",
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "0.18em",
              textTransform: "uppercase" as const,
              color: "rgba(255,255,255,0.35)",
              marginBottom: "18px",
            }}>
              Cosa Software · Strategic Overview
            </div>
            <h2 style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 400,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              margin: "0 0 20px",
            }}>
              Executive Briefing
            </h2>
            <p style={{
              fontFamily: "Georgia, serif",
              fontStyle: "italic",
              fontSize: "clamp(16px, 1.8vw, 22px)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.55,
              margin: "0 0 32px",
              maxWidth: "560px",
            }}>
              "Domain-specific applications are not developed —
              they emerge from pure JSON schemas."
            </p>
            <div style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "0.02em",
            }}>
              Platform architecture · AI integration · The moat · Governed agents
            </div>
          </div>
          <div style={{
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#ffffff",
            fontSize: "22px",
            flexShrink: 0,
          }}>
            →
          </div>
        </div>
      </a>
    </section>
  );
}

/* ----------------------- Screens with Galleries + Lightbox ----------------------- */

function Screens() {
  const [data, setData] = React.useState<{
    order: string[];
    titles: Record<string, string>;
    images: Record<string, string[]>;
  } | null>(null);

  const [lb, setLb] = React.useState<{ key: string; index: number } | null>(null);

  React.useEffect(() => {
    fetch("/shots/manifest.json", { cache: "no-store" })
      .then(r => r.json())
      .then(setData)
      .catch(e => {
        console.error("Failed to load gallery manifest", e);
        setData({ order: [], titles: {}, images: {} });
      });
  }, []);

  if (!data) {
    return (
      <section id="screens" className="mx-auto max-w-6xl px-6 pt-0 pb-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Screens that sell themselves.</h2>
        <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">Across teams, across companies, across the world</p>
        <p className="mt-10 text-sm text-neutral-500">Loading…</p>
      </section>
    );
  }

  const keys = data.order.filter(k => (data.images[k]?.length ?? 0) > 0);
  const titleFor = (k: string) =>
    data.titles[k] ?? k.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase());

  return (
    <section id="screens" className="mx-auto max-w-6xl px-6 pt-0 pb-4">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Screens that sell themselves.</h2>
        <p className="mt-3 text-neutral-600 max-w-2xl mx-auto">Across teams, across companies, across the world</p>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {keys.map(k => {
          const imgs = data.images[k];
          const preview = `/shots/${imgs[0]}`;
          return (
            <figure key={k} className="overflow-hidden rounded-2xl border border-neutral-300 bg-white">
              <button
                onClick={() => setLb({ key: k, index: 0 })}
                className="block w-full focus:outline-none focus:ring-2 focus:ring-neutral-300"
                aria-label={`Open ${titleFor(k)} gallery`}
              >
                <img src={preview} alt={titleFor(k)} className="block w-full h-48 object-cover" />
              </button>
              <figcaption className="border-t border-neutral-300 bg-white px-3 py-2 text-sm md:text-base text-center text-neutral-700">
                {titleFor(k)}
              </figcaption>
            </figure>
          );
        })}
      </div>

      {lb && (
        <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setLb(null)}>
          <div className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img
              src={`/shots/${data.images[lb.key][lb.index]}`}
              alt={`${titleFor(lb.key)} ${lb.index + 1}`}
              className="w-full h-[70vh] object-contain bg-white"
            />
            <button onClick={() => setLb(null)} className="absolute top-3 right-3 rounded-full bg-white/90 px-3 py-1 text-sm font-medium shadow hover:bg-white">Close</button>
            <button
              onClick={() => setLb(s => s && { key: s.key, index: (s.index - 1 + data.images[s.key].length) % data.images[s.key].length })}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-sm font-medium shadow hover:bg-white"
            >←</button>
            <button
              onClick={() => setLb(s => s && { key: s.key, index: (s.index + 1) % data.images[s.key].length })}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-sm font-medium shadow hover:bg-white"
            >→</button>
            <div className="absolute bottom-0 left-0 right-0 bg-white/95 text-center text-xs text-neutral-600 py-2">
              {titleFor(lb.key)} · {lb.index + 1} / {data.images[lb.key].length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

/* ---------------------------------- CTA ---------------------------------- */

function CTA() {
  return (
    <section id="demo" className="mx-auto max-w-6xl px-6 my-[20px]">
      <div className="rounded-3xl border border-neutral-300 bg-white pt-[21px] pb-[21px] px-[42px] md:pt-[29px] md:pb-[29px] md:px-[58px] text-center">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">See it in your domain.</h3>
        <p className="mt-3 text-neutral-600 max-w-xl mx-auto text-sm">
          Bring your process. We'll map it to one flow and hand you a demo you can reopen in a year — prompts, params, seeds, provenance, and full history.
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <a href="mailto:hello@cosa-software.com" className="rounded-full bg-neutral-900 text-white px-6 py-3 text-sm font-semibold hover:bg-neutral-700">Request a private demo</a>
          <a href="/executive-briefing.html" className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 hover:bg-neutral-50">Read the brief</a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-14 text-xs text-neutral-500">
      <div className="h-px bg-neutral-200 mb-6" />
      <div className="flex items-center justify-between">
        <span>© 2025 Cosa Software. All rights reserved.</span>
        <span>Seattle, WA</span>
      </div>
    </footer>
  );
}
