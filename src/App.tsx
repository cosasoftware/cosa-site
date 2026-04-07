import React from "react";

function useHashRoute() {
  const getRoute = () => {
    const hash = window.location.hash || "#/";
    return hash.replace(/^#/, "");
  };

  const [route, setRoute] = React.useState(getRoute());

  React.useEffect(() => {
    const onChange = () => {
      setRoute(getRoute());
    };

    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [route]);

  return route;
}
/** Emergence — high-conviction variant */
export default function App() {
  const route = useHashRoute();

  if (route === "/creative") {
    return <CreativeDevelopmentPage />;
  }

  return (
    <main className="min-h-screen bg-white text-neutral-950 selection:bg-neutral-950 selection:text-white">
      <Header />
      <Intro />
      <Banner />
      <CoreClaim />
      <BriefingLeadIn />
      <BriefingCard />
      <EnterpriseCard />
      <CreativeCard />
      <ProjectionBridge />
      <Screens />
      <Footer />
    </main>
  );
}
function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
<div className="mx-auto flex max-w-6xl items-center justify-between px-2 py-2">
  <div className="flex items-center gap-2">
    <img src="/logo/cosa-mark-black.png" alt="Cosa" className="h-8 w-8 opacity-70" />
    <div className="text-xl leading-none font-bold tracking-tight text-neutral-600">
      Cosa Software
    </div>
  </div>
</div>      <div className="h-px bg-neutral-200" />
    </header>
  );
}

function Intro() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-0 pt-10 text-center md:pt-14">
      <h1 className="text-6xl md:text-8xl font-semibold tracking-tight">
        Emergence
      </h1>

<p className="mt-2 text-xl md:text-2xl text-neutral-700">
  AI-Driven Codeless Applications
</p>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-neutral-600 md:text-lg">
        Not built. Not deployed. Systems emerge and evolve in real time.
      </p>
    </section>
  );
}

function Banner() {
  return (
    <section className="mt-8 w-full">
      <div className="flex w-full items-center justify-center bg-white">
        <img
          src="/art/01.png"
          alt="Emergence interface preview"
          className="w-full max-h-[560px] object-contain"
        />
      </div>
    </section>
  );
}

function CoreClaim() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-12 pt-8 text-center md:pb-16">
      <div className="mx-auto max-w-4xl">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
  Build cycles collapse to minutes.
</h2>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-1">
  Deployment is continuous.
</h2>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mt-1">
  Changes take effect immediately.
</h2>
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-neutral-700 md:text-2xl">
          Powerful workflows — generated, governed, and evolved in real time.
        </p>
       <p className="text-lg leading-relaxed text-neutral-700 md:text-2xl">
          AI-Driven Across the Stack.
        </p>

        <p className="mt-4 text-sm font-medium uppercase tracking-[0.18em] text-neutral-500 md:text-xs">
          Every state is live. Every change is immediate.
        </p>
      </div>
    </section>
  );
}
function BriefingLeadIn() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-10 pb-1 text-center">
      <p
        className="mx-auto max-w-3xl text-[clamp(22px,2.6vw,32px)] leading-relaxed text-neutral-700"
        style={{
          fontFamily: "Georgia, serif",
          fontStyle: "italic",
          letterSpacing: "-0.01em",
        }}
      >
        Built on fields and projections — not features.
        <br />
        A different class of software.
      </p>
    </section>
  );
}function BriefingCard() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-4 md:py-8">
      <a
        href="/executive-briefing.html"
        className="relative block overflow-hidden rounded-[18px] bg-[#141311] no-underline transition-opacity duration-200 hover:opacity-95"
      >
 <div className="absolute left-5 top-6 bottom-6 w-[6px] rounded-full bg-[#78AAFF]" />
       <div className="grid items-center gap-4 pl-14 pr-6 py-8 md:grid-cols-[1fr_auto] md:pl-16 md:pr-10 md:py-10">          <div>
            <div className="mb-5 text-[10px] font-normal uppercase tracking-[0.22em] text-white/35 md:text-[11px]">
              Cosa Software · Strategic Overview
            </div>

            <h2
              className="mb-5 text-[clamp(32px,4vw,58px)] font-normal leading-[1.02] tracking-[-0.03em] text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Executive Briefing
            </h2>

            <p
              className="mb-7 max-w-[620px] text-[clamp(18px,1.9vw,25px)] font-normal italic leading-[1.5] text-white/60"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Software is no longer constructed. It is induced.
            </p>

            <div className="text-sm tracking-[0.02em] text-white/45">
              Architecture · Runtime generation · Governed evolution · The moat
            </div>
          </div>

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 text-[22px] text-white md:h-16 md:w-16">
            →
          </div>
        </div>
      </a>
    </section>
  );
}

function EnterpriseCard() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-3 md:py-6">
      <a
        href="/enterprise.html"
        className="relative block overflow-hidden rounded-[18px] bg-[#141311] no-underline transition-all duration-300 hover:opacity-95 hover:-translate-y-[2px]"
      >
<div className="absolute left-5 top-6 bottom-6 w-[6px] rounded-full bg-[#78AAFF]" />
        <div className="grid items-center gap-4 pl-14 pr-6 py-8 md:grid-cols-[1fr_auto] md:pl-16 md:pr-10 md:py-10">          <div>
            <div className="mb-4 text-[10px] uppercase tracking-[0.22em] text-white/35">
              Cosa Software · Enterprise Systems
            </div>

            <h2
              className="mb-4 text-[clamp(30px,4vw,56px)] leading-[1.02] tracking-[-0.03em] text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Enterprise Systems
            </h2>

            <p
              className="mb-6 max-w-[620px] text-[clamp(18px,1.9vw,24px)] italic leading-[1.5] text-white/60"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Hardware, software, integration, and decades of support — governed in one continuous system.
            </p>

            <div className="text-sm tracking-[0.02em] text-white/45">
              Development · Integration · Validation · Support
            </div>
          </div>

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 text-[22px] text-white md:h-16 md:w-16">
            →
          </div>
        </div>
      </a>
    </section>
  );
}

function CreativeCard() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-4 md:py-8">
      <a
        href="/#/creative"
        className="relative block overflow-hidden rounded-[18px] bg-[#141311] no-underline transition-opacity duration-200 hover:opacity-95"
      >
<div className="absolute left-5 top-6 bottom-6 w-[6px] rounded-full bg-[#78AAFF]" />
        <div className="grid items-center gap-4 pl-14 pr-6 py-8 md:grid-cols-[1fr_auto] md:pl-16 md:pr-10 md:py-10">          <div>
            <div className="mb-5 text-[10px] font-normal uppercase tracking-[0.22em] text-white/35 md:text-[11px]">
              Cosa Software · Creative Development
            </div>

            <h2
              className="mb-5 text-[clamp(32px,4vw,58px)] font-normal leading-[1.02] tracking-[-0.03em] text-white"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Creative Development
            </h2>

            <p
              className="mb-7 max-w-[620px] text-[clamp(18px,1.9vw,25px)] font-normal italic leading-[1.5] text-white/60"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Story, scene, wardrobe, and character development — inside of governed process flow.
            </p>

            <div className="text-sm tracking-[0.02em] text-white/45">
              Storyboards · Casting · Scene development · Production flow
            </div>
          </div>

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/20 text-[22px] text-white md:h-16 md:w-16">
            →
          </div>
        </div>
      </a>
    </section>
  );
}

function ProjectionBridge() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-6 pt-10 text-center md:pb-8 md:pt-14">
      <p className="text-3xl font-semibold tracking-tight md:text-5xl">
        One system.
      </p>
      <p className="mt-1 text-3xl font-semibold tracking-tight md:text-5xl">
        Infinite domains.
      </p>

      <span className="italic">Same engine. Different projections.</span>
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

  const [lb, setLb] = React.useState<{ key: string; index: number } | null>(
    null
  );

  React.useEffect(() => {
    fetch("/shots/manifest.json", { cache: "no-store" })
      .then((r) => r.json())
      .then(setData)
      .catch((e) => {
        console.error("Failed to load gallery manifest", e);
        setData({ order: [], titles: {}, images: {} });
      });
  }, []);

  if (!data) {
    return (
      <section
        id="screens"
        className="mx-auto max-w-6xl px-6 pb-6 pt-2 text-center"
      >
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          The domain changes.
        </h2>
        <h2 className="mt-1 text-3xl font-semibold tracking-tight md:text-5xl">
          The system does not.
        </h2>
        <p className="mt-4 text-neutral-600">Only the data schema evolves.</p>
        <p className="mt-10 text-sm text-neutral-500">Loading…</p>
      </section>
    );
  }

  const keys = data.order.filter((k) => (data.images[k]?.length ?? 0) > 0);
  const titleFor = (k: string) =>
    data.titles[k] ??
    k.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <section id="screens" className="mx-auto max-w-6xl px-6 pb-6 pt-2">
      <div className="text-center">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          The domain changes.
        </h2>
        <h2 className="mt-1 text-3xl font-semibold tracking-tight md:text-5xl">
          The system does not.
        </h2>
        <p className="mt-4 text-base text-neutral-600 md:text-lg">
          <span className="italic">Only the data schema evolves.</span>
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {keys.map((k) => {
          const imgs = data.images[k];
          const preview = `/shots/${imgs[0]}`;

          return (
            <figure
              key={k}
              className="overflow-hidden rounded-2xl border border-neutral-300 bg-white"
            >
              <button
                onClick={() => setLb({ key: k, index: 0 })}
                className="block w-full focus:outline-none focus:ring-2 focus:ring-neutral-300"
                aria-label={`Open ${titleFor(k)} gallery`}
              >
                <img
                  src={preview}
                  alt={titleFor(k)}
                  className="block h-48 w-full object-cover"
                />
              </button>

              <figcaption className="border-t border-neutral-300 bg-white px-3 py-3 text-center text-sm text-neutral-700 md:text-base">
                {titleFor(k)}
              </figcaption>
            </figure>
          );
        })}
      </div>

      {lb && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setLb(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/shots/${data.images[lb.key][lb.index]}`}
              alt={`${titleFor(lb.key)} ${lb.index + 1}`}
              className="h-[70vh] w-full bg-white object-contain"
            />

            <button
              onClick={() => setLb(null)}
              className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-sm font-medium shadow hover:bg-white"
            >
              Close
            </button>

            <button
              onClick={() =>
                setLb(
                  (s) =>
                    s && {
                      key: s.key,
                      index:
                        (s.index - 1 + data.images[s.key].length) %
                        data.images[s.key].length,
                    }
                )
              }
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-sm font-medium shadow hover:bg-white"
            >
              ←
            </button>

            <button
              onClick={() =>
                setLb(
                  (s) =>
                    s && {
                      key: s.key,
                      index: (s.index + 1) % data.images[s.key].length,
                    }
                )
              }
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/90 px-3 py-1 text-sm font-medium shadow hover:bg-white"
            >
              →
            </button>

            <div className="absolute bottom-0 left-0 right-0 bg-white/95 py-2 text-center text-xs text-neutral-600">
              {titleFor(lb.key)} · {lb.index + 1} /{" "}
              {data.images[lb.key].length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function CTA() {
  return (
    <section id="demo" className="mx-auto my-10 max-w-6xl px-6 md:my-14">
      <div className="rounded-3xl border border-neutral-300 bg-white px-8 py-10 text-center md:px-10 md:py-10">
        <h3 className="text-2xl font-semibold tracking-tight md:text-4xl">
          See it in your domain.
        </h3>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-600 md:text-base">
          Bring your process. We’ll map it to one flow and hand you a working
          demonstration of schema-driven execution you can inspect, reopen, and
          evolve.
        </p>

        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="mailto:hello@yourdomain.com"
            className="rounded-full bg-neutral-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-neutral-800"
          >
            Request a private demo
          </a>

          <a
            href="/executive-briefing.html"
            className="rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-50"
          >
            Read the briefing
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 pb-14 pt-2 text-xs text-neutral-500">
      <div className="mb-6 h-px bg-neutral-200" />
      <div className="flex flex-col gap-3 sm:flex-row sm.items-center sm:justify-between">
        <span>Copyright © 2026 Cosa Software. All rights reserved.</span>
        <span>Continuous system evolution</span>
      </div>
    </footer>
  );
}

function CreativeDevelopmentPage() {
  return (
    <main className="bg-neutral-950 text-white selection:bg-white selection:text-black">
      <CreativeHeader />
      <HeroCreature />
      <CharacterCollage />
      <QuoteBreak>
        Every ticket becomes a living storyboard.
      </QuoteBreak>
      <WardrobeCastingGrid />
      <SystemProof />
      <NarrativeBlock />
      <RealityBridge />
      <CinematicClose />
      <GalleryLink />
    </main>
  );
}

function CreativeHeader() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950/85 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
<div className="mx-auto flex max-w-6xl items-center justify-between px-2 py-2">
        <a href="/#/" className="flex items-center gap-3 no-underline">
          <img src="/logo/cosa-mark-white.png" alt="Cosa" className="h-10 w-10" />
          <div className="font-medium tracking-tight text-white">Cosa Software</div>
        </a>

       </div>

      <div className="h-px bg-white/10" />
    </header>
  );
}

function FadeInSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`animate-[fadeIn_900ms_ease-out] ${className}`}
      style={{ animationFillMode: "both" }}
    >
      {children}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

function HoverImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`group overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.03]"
      />
    </div>
  );
}

function HeroCreature() {
  return (
    <FadeInSection>
      <section className="relative">
        <img
          src="/creative/dragon-close.jpg"
          alt="Creature character development"
          className="h-[88vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/70" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 md:px-10 md:pb-14">
          <div className="mx-auto max-w-6xl">
            <p className="text-[18px] text-2xl uppercase tracking-[0.24em] text-white/55 text-7xl ">
              Creative Development
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
           Story, scene, wardrobe, and character development — inside of governed process flow.
                </h1>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

function CharacterCollage() {
  return (
    <FadeInSection className="px-3 pt-3 md:px-4 md:pt-4">
      <section className="grid gap-3 md:grid-cols-[1.25fr_0.95fr]">
        <HoverImage
          src="/creative/cast-pair.jpg"
          alt="Casting and character pair"
          className="min-h-[420px] rounded-[20px] bg-neutral-900 md:min-h-[760px]"
        />

        <div className="grid gap-3">
          <HoverImage
            src="/creative/character-1.jpg"
            alt="Character portrait"
            className="min-h-[280px] rounded-[20px] bg-neutral-900 md:min-h-[373px]"
          />
          <HoverImage
            src="/creative/character-2.jpg"
            alt="Character portrait"
            className="min-h-[280px] rounded-[20px] bg-neutral-900 md:min-h-[373px]"
          />
        </div>
      </section>
    </FadeInSection>
  );
}

function QuoteBreak({ children }: { children: React.ReactNode }) {
  return (
    <FadeInSection className="px-6 py-20 text-center md:px-10 md:py-28">
      <section className="mx-auto max-w-4xl">
        <p
          className="text-[clamp(28px,4vw,48px)] leading-[1.18] text-white/85"
          style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
        >
          {children}
        </p>
      </section>
    </FadeInSection>
  );
}

function WardrobeCastingGrid() {
  return (
    <FadeInSection className="px-3 pb-3 md:px-4 md:pb-4">
      <section className="grid gap-3 md:grid-cols-3">
        <HoverImage
          src="/creative/character-3.jpg"
          alt="Wardrobe and character portrait"
          className="min-h-[420px] rounded-[20px] bg-neutral-900"
        />
        <HoverImage
          src="/creative/character-4.jpg"
          alt="Wardrobe and character portrait"
          className="min-h-[420px] rounded-[20px] bg-neutral-900"
        />
        <HoverImage
          src="/creative/character-5.jpg"
          alt="Casting and wardrobe reference"
          className="min-h-[420px] rounded-[20px] bg-neutral-900"
        />
      </section>
    </FadeInSection>
  );
}

function SystemProof() {
  return (
    <FadeInSection className="px-6 py-20 md:px-10 md:py-28">
      <section className="mx-auto max-w-7xl">
        <div className="mb-6 text-center">
          <p className="text-[22px] !text-[22px]  uppercase tracking-[0.24em] text-white/45 md:text-xs">
            StoryTeller
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            World, character, and scene development governed in one system.
          </h2>
        </div>

        <div className="overflow-hidden">
          <img
            src="/creative/storyteller-ui.jpg"
            alt="StoryTeller interface"
            className="w-full object-cover"
          />
        </div>
        <div className="overflow-hidden">
          <img
            src="/creative/storyteller-ui2.jpg"
            alt="StoryTeller interface"
            className="w-full object-cover"
          />
        </div>
     </section>
    </FadeInSection>
  );
}

function NarrativeBlock() {
  return (
    <FadeInSection className="px-6 py-8 md:px-10 md:py-12">
      <section className="mx-auto text-center">
        <p className="text-lg leading-relaxed text-white/70 md:text-xl">
          Consider a technical director overseeing a complex production —
          writers, concept artists, animators, directors, and casting teams
          distributed across locations. Storyboards evolve in real time. Scenes,
          wardrobe, and character development move through governed approval
          stages.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl">
          With generative AI integrated into the Emergence stack, every ticket
          in that pipeline becomes a living storyboard. Images and video are
          generated and revised directly inside the process. The technical
          director reviews and approves from anywhere — including from an iPad
          on set.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl">
          The same engine that governs pharmacy prescriptions drives commercial
          and film production workflows.
        </p>

        <p className="mt-8 text-xl font-medium tracking-tight text-white md:text-2xl">
          The domain changes. The system does not.
        </p>
      </section>
    </FadeInSection>
  );
}

function RealityBridge() {
  return (
    <FadeInSection className="px-3 py-3 md:px-4 md:py-4">
      <section className="grid gap-3 md:grid-cols-[1.05fr_0.95fr]">
        <HoverImage
          src="/creative/operator.jpg"
          alt="Operator at workstation"
          className="min-h-[320px] rounded-[20px] bg-neutral-900 md:min-h-[520px]"
        />
        <HoverImage
          src="/creative/set.jpg"
          alt="Production realism"
          className="min-h-[320px] rounded-[20px] bg-neutral-900 md:min-h-[520px]"
        />
      </section>
    </FadeInSection>
  );
}

function CinematicClose() {
  return (
    <FadeInSection className="px-3 pt-3 md:px-4 md:pt-4">
      <section className="relative overflow-hidden rounded-[24px]">
        <img
          src="/creative/dragon-scene.jpg"
          alt="Dragon cinematic scene"
          className="h-[82vh] w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
        <div className="absolute bottom-0 left-0 right-0 px-6 pb-10 md:px-10 md:pb-14">
          <div className="mx-auto max-w-6xl">
            <p
              className="max-w-2xl text-2xl leading-[1.2] text-white/90 md:text-4xl"
              style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
            >
              Built on fields and projections — not features.
              <br />
              A different class of software.
            </p>
          </div>
        </div>
      </section>
    </FadeInSection>
  );
}

function GalleryLink() {
  return (
    <FadeInSection className="px-6 py-20 text-center md:px-10 md:py-24">
      <section>
        <a
          href="/gallery"
          className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 py-3 text-sm font-medium tracking-wide text-white/75 transition hover:border-white/30 hover:bg-white/5 hover:text-white"
        >
          View Full Gallery
          <span aria-hidden="true">→</span>
        </a>
      </section>
    </FadeInSection>
  );
}