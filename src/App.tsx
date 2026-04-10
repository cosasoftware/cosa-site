import React from "react";

function useHashRoute() {
  const getRoute = React.useCallback(() => {
    const hash = window.location.hash || "#/";
    return hash.replace(/^#/, "");
  }, []);

  const [route, setRoute] = React.useState(getRoute);
  const routeRef = React.useRef(getRoute());
  const positionsRef = React.useRef<Record<string, number>>({});
  const hasMountedRef = React.useRef(false);

  React.useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const saveCurrentScroll = () => {
      positionsRef.current[routeRef.current] = window.scrollY;
    };

    const onHashChange = () => {
      saveCurrentScroll();

      const nextRoute = getRoute();
      routeRef.current = nextRoute;
      setRoute(nextRoute);

      requestAnimationFrame(() => {
        const y = positionsRef.current[nextRoute] ?? 0;
        window.scrollTo(0, y);
      });
    };

    const onScroll = () => {
      positionsRef.current[routeRef.current] = window.scrollY;
    };

    window.addEventListener("hashchange", onHashChange);
    window.addEventListener("scroll", onScroll, { passive: true });

    hasMountedRef.current = true;

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      window.removeEventListener("scroll", onScroll);
    };
  }, [getRoute]);

  return route;
}/** Emergence — high-conviction variant */
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
      <VideoFeature />
      <CoreClaim />
      <SystemStatement />
      <DomainCards />
      <ProjectionBridge />
      <Screens />
      <EpiSignatureLight />
      <Footer />
    </main>
  );
}
function Header() {
  return (

<header className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
  <div className="flex h-12 w-full items-center justify-between px-2">
    <div className="flex items-center gap-2">
      <img src="/logo/cosa-mark-black.png" alt="Cosa" className="h-9 w-9 opacity-70" />
      <div className="text-xl leading-none font-bold tracking-tight text-neutral-600">
        Cosa Software
      </div>

    </div>
  </div>

  <div className="h-px bg-neutral-200" />
</header>

 );
}


function Intro() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-0 pt-10 text-center md:pt-14">
      <h1 className="text-6xl md:text-8xl font-semibold tracking-[-0.06em] text-neutral-950">
        Emergence
      </h1>

      <div className="mt-3">
        <p className="text-[1.6rem] md:text-[2.5rem] font-medium italic tracking-[-0.03em] text-neutral-700">
          Evolutionary Process Intelligence
        </p>

        <p className="mt-2 text-[0.85rem] md:text-[1.1rem] font-semibold uppercase tracking-[0.18em] text-neutral-500">
          AI-Driven Codeless Applications
        </p>
      </div>

      <div className="mt-10 px-6 sm:mt-12 md:mt-14">
        <div className="mx-auto max-w-6xl">
          <div className="w-full max-w-[1040px] border-t-4 border-blue-500/80 pt-4 lg:border-l-[4px] lg:border-t-0 lg:pl-8 lg:pt-0">
            <p className="text-left text-[1.55rem] leading-[1.18] tracking-[-0.045em] text-neutral-800 sm:text-[2rem] sm:leading-[1.16] md:text-[2.35rem] md:leading-[1.14] lg:text-[3rem] lg:leading-[1.1] xl:text-[3.55rem]">
              Emergence is a process improvement platform that enables creative teams to
              continuously improve their workflows in real time.
            </p>

            <p className="italic mt-5 text-left text-[1rem] leading-[1.32] tracking-[-0.03em] text-neutral-700 sm:text-[1.35rem] sm:leading-[1.3] md:mt-6 md:text-[1.7rem] md:leading-[1.24] lg:text-[1.95rem] xl:text-[2.15rem]">
              Not by building and deploying — but by continuously optimizing and
              evolving existing process flow as work happens.
            </p>
          </div>
        </div>
      </div>
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


function VideoFeature() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-6 pt-10 md:pb-8 md:pt-14">
      <a
        href="https://youtu.be/DfzSTY00rdY"
        target="_blank"
        rel="noreferrer"
        className="group block overflow-hidden rounded-[24px] border border-neutral-200 bg-white transition hover:border-neutral-300"
      >
        <div className="grid items-stretch md:grid-cols-[1.35fr_0.9fr]">
          <div className="relative overflow-hidden bg-neutral-950">
            <img
              src="https://i.ytimg.com/vi/DfzSTY00rdY/maxresdefault.jpg"
              alt="Emergence product demo video thumbnail"
              className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/92 text-2xl text-neutral-950 shadow-lg transition duration-300 group-hover:scale-105">
                ▶
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center border-t border-neutral-200 p-6 md:border-l md:border-t-0 md:p-10">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500 md:text-xs">
              Product Video
            </div>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
              See Emergence in motion.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-neutral-700 md:text-lg">
             Continuous workflows, real-time evolution, and immediate organizational impact. Across any industry, as well any process with any level of complexity.
            </p>

            <div className="mt-6 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.16em] text-neutral-600">
              Watch on YouTube
              <span aria-hidden="true" className="text-base transition group-hover:translate-x-0.5">→</span>
            </div>
          </div>
        </div>
      </a>
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
          Powerful process-driven workflows — generated, governed, and evolved in real time.
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

function SystemStatement() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-2 pb-16 text-center">
      <div className="mx-auto max-w-3xl">
        <p className="text-xl md:text-2xl text-neutral-700 leading-relaxed tracking-tight">
 Emergence is more than an application platform — it is a team-based governed system, delivered through the browser, where productivity applications continuously run, evolve, and scale.
         </p>
      </div>
    </section>
  );
}

function DomainCards() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-6">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {/* Executive */}
        <div className="md:col-span-2 xl:col-span-1">
          <BriefingCard />
        </div>

        {/* Enterprise */}
        <EnterpriseCard />

        {/* Creative */}
        <CreativeCard />

      </div>
    </section>
  );
}

/* ---------------- CARDS ---------------- */

function BaseCard({
  title,
  subtitle,
  footer,
  href,
  eyebrow,
}: any) {
  return (
    <a
      href={href}
      className="relative block h-full overflow-hidden rounded-[18px] bg-[#141311] text-white transition hover:opacity-95"
    >
      <div className="absolute left-5 top-6 bottom-6 w-[6px] rounded-full bg-[#78AAFF]" />

      <div className="relative flex h-full flex-col pl-14 pr-6 py-6 md:pl-16 md:pr-10 md:py-7">
        <div>
          <div className="mb-4 text-[11px] uppercase tracking-[0.22em] text-white/35">
            {eyebrow}
          </div>

          <h2
            className="mb-4 text-[clamp(30px,4vw,56px)] leading-tight"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {title}
          </h2>

          <p
            className="mb-6 text-[clamp(18px,1.8vw,24px)] italic text-white/60"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {subtitle}
          </p>
        </div>

        <div className="mt-auto text-sm text-white/45">
          {footer}
        </div>

        <div className="absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20">
          →
        </div>
      </div>
    </a>
  );
}

function BriefingCard() {
  return (
    <BaseCard
      href="/executive-briefing.html"
      eyebrow="Cosa Software · Strategic Overview"
      title="Executive Briefing"
      subtitle="Software is no longer constructed. It is induced."
      footer="Architecture · Runtime generation · Governed evolution · The moat"
    />
  );
}

function EnterpriseCard() {
  return (
    <BaseCard
      href="/enterprise.html"
      eyebrow="Cosa Software · Enterprise Systems"
      title="Enterprise Systems"
      subtitle="Hardware, software, integration, and decades of support — governed in one continuous system."
      footer="Development · Integration · Validation · Support"
    />
  );
}

function CreativeCard() {
  return (
    <BaseCard
      href="/#/creative"
      eyebrow="Cosa Software · Creative Development"
      title="Creative Development"
      subtitle="World Building - story, scene, and character development — built for creative teams."
      footer="Storyboards · Casting · Scene development · Production flow"
    />
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
        <p className="mt-4 text-base text-neutral-600 md:text-lg">
          <span className="italic">Turn Real Work Into Continuous Evolution. <br/>Improve how work gets done across every team, every workflow, and every system in real time.</span>
        </p>
    </section>
  );
}

/* ----------------------- Screens with Galleries + Lightbox ----------------------- */

function Screens() {
    return (
      <section id="screens" className="mx-auto max-w-6xl px-6 pb-6 pt-2 text-center py-23">
        <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
          The domain changes.
        </h2>
        <h2 className="mt-1 text-3xl font-semibold tracking-tight md:text-5xl">
          The system does not.
        </h2>
        <p className="mt-4 text-neutral-600">End-to-end process evolution.</p>
      </section>
    );
}


function EpiSignatureLight() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 md:py-12">
      <div className="border-y border-neutral-200 py-6 md:py-7">
        <div className="grid grid-cols-[10px_1fr] gap-5 md:grid-cols-[12px_1fr] md:gap-6">
          <div className="flex justify-center">
            <div className="w-[5px] rounded-full bg-[#78AAFF] shadow-[0_0_10px_rgba(120,170,255,0.28)]" />
          </div>

          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500 md:text-xs">
              Evolutionary Process Intelligence
            </div>

            <p className="mt-3 text-[1rem] leading-relaxed text-neutral-700 md:text-[1.08rem]">
              <span className="font-semibold text-neutral-900">EPI</span> is software that
              continuously evolves workflows in real time. <br/>No scripting. No rebuilds. No redeployment. <br/>Changes and improvements are made by the people who acutally use it every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full px-6 pb-6 pt-2 text-xs text-neutral-500">
      <div className="mx-auto max-w-6xl flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span>Copyright © 2026 Cosa Software. All rights reserved.</span>
        <span>Continuous system evolution</span>
      </div>
    </footer>
  );
}function CreativeDevelopmentPage() {
  return (
    <main className="bg-neutral-950 text-white selection:bg-white selection:text-black">
      <CreativeHeader />
      <HeroCreature />
      <CharacterCollage />
      <QuoteBreak>
        Every ticket becomes a living storyboard.
      </QuoteBreak>
      <WardrobeCastingGrid />
    <NarrativeBlock />
      <RealityBridge />
       <SystemProof />
      <CinematicClose />
      <EpiSignatureDark />
      <Footer2 />
    </main>
  );
}

function CreativeHeader() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950/85 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/70">
      <div className="flex h-12 w-full items-center justify-between px-4">
        
        <div className="flex items-center gap-2">
          <img src="/logo/cosa-mark-white.png" alt="Cosa" className="h-9 w-9" />
          <div className="text-xl leading-none font-bold tracking-tight text-white">
            Cosa Software
          </div>
        </div>

        <a
          href="/creative/CosaDemo.mp4"
          className="text-sm text-white/70 hover:text-white"
        >
          Watch Demo
        </a>

      </div>
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
           World Building - story, scene, and character development — built for creative teams, inside governed process flow.
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
    <FadeInSection className="px-6 py-21 md:px-10 md:py-14">
      <section className="mx-auto max-w-6xl">
        <div className="grid grid-cols-[14px_minmax(0,1100px)] items-center gap-6 md:grid-cols-[16px_minmax(0,980px)] md:gap-8">
          <div className="flex justify-center">
            <div className="h-[140px] w-[5px] rounded-full bg-[#78AAFF]" />
          </div>

          <div>
            <p
              className="max-w-[980px] text-[clamp(34px,5vw,76px)] leading-[1.06] text-white/90"
              style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
            >
              {children}
            </p>
          </div>
        </div>
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

function NarrativeBlock() {
  return (
<FadeInSection className="py-8 md:py-10">
  <section className="mx-auto max-w-3xl relative pl-8 md:pl-10">

    {/* Blue line */}
    <div className="absolute left-0 top-1 bottom-2 w-[5px] rounded-full bg-[#78AAFF] shadow-[0_0_10px_rgba(120,170,255,0.4)]" />

    {/* Title */}
    <div className="mb-6">
      <div className="text-white text-xl md:text-2xl font-semibold tracking-tight">
        Inside a Live Workflow
      </div>
    </div>

    <p className="text-lg leading-relaxed text-white/70 md:text-xl">
      Consider a technical director overseeing a complex production — writers,
      concept artists, animators, and directors distributed across locations.
      Storyboards evolve in real time and worlds emerge. Stories, scenes, and characters move through governed approval stages.
    </p>

    <p className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl">
      With generative AI integrated into the Emergence stack, every ticket in
      that pipeline becomes a living storyboard. Images and video can be
      generated and revised using prompts, directly inside the process flow. The
      technical director reviews and approves from anywhere — across every stage
      of production — even from an iPad.
    </p>

    <p className="mt-6 text-lg leading-relaxed text-white/70 md:text-xl">
      The same engine that governs commercial property management applications
      drives film and commercial production workflows without modification,
      enabling a level of coordinated collaboration typically reserved for
      enterprise-scale systems.
    </p>

    <p
      className="mt-10 text-xl tracking-tight text-white md:text-2xl"
      style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
    >
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
              className="max-w-2xl text-2xl leading-[1.2] text-white/70 md:text-4xl"
              style={{ fontFamily: "Georgia, serif"}}
            >
              AI and Evolutionary Data-Driven software built on latent fields, projections, and lenses — not features.
              <br />
              <br />
            </p>
             <p
              className="max-w-2xl text-2xl leading-[1.2] text-white md:text-4xl"
              style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
            >
               A different class of software.
            </p>
         </div>
        </div>
      </section>
    </FadeInSection>
  );
}

function SystemProof() {
  return (
    <FadeInSection className="px-6 pt-8 pb-16 md:px-10 md:pt-10 md:pb-18">
      <section className="mx-auto max-w-7xl">

      
<div className="mx-auto mb-9 max-w-6xl">
  <div className="grid grid-cols-[18px_1fr] items-start gap-6 md:gap-8">
    <div className="flex justify-center pt-2">
      <div className="w-[6px] h-[190px] rounded-full bg-[#78AAFF]" />
    </div>

    <div>
      <div className="mb-4 text-xs uppercase tracking-[0.24em] text-white/40 md:text-[11px]">
        StoryTeller
      </div>

      <h2 className="text-3xl font-semibold leading-[1.02] tracking-tight md:text-6xl">
        World, character, and scene development governed in one system.
      </h2>

      <div className="mt-4 text-xs uppercase tracking-[0.2em] text-white/35 md:text-[11px]">
        Governed Process &amp; Storyboard Flow — Unified
      </div>
    </div>
  </div>
</div>

        <div className="mb-9 overflow-hidden">
 
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

function EpiSignatureDark() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8 md:py-10">
      <div className="border-y border-white/10 py-6 md:py-7">
        <div className="grid grid-cols-[10px_1fr] gap-5 md:grid-cols-[12px_1fr] md:gap-6">
          <div className="flex justify-center">
            <div className="w-[5px] rounded-full bg-[#78AAFF] shadow-[0_0_10px_rgba(120,170,255,0.35)]" />
          </div>

          <div className="max-w-3xl">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/35 md:text-xs">
              Evolutionary Process Intelligence
            </div>

            <p className="mt-3 text-[1rem] leading-relaxed text-white/65 md:text-[1.08rem]">
              <span className="font-semibold text-white">EPI</span> is software that
              continuously evolves workflows in real time. <br/>No scripting. No rebuilds. No redeployment. <br/>Changes and improvements are made by the people who acutally use it every day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer2() {
  return (
    <footer className="w-full bg-neutral-950 px-6 pb-14 pt-2 text-xs text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <span>Copyright © 2026 Cosa Software. All rights reserved.</span>
        <span>Continuous system evolution</span>
      </div>
    </footer>
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