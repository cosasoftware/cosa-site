import React from "react";

export default function CreativeDevelopment() {
  return (
    <main className="bg-neutral-950 text-white selection:bg-white selection:text-black">
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
            <p className="text-[10px] uppercase tracking-[0.24em] text-white/55 md:text-xs">
              Creative Development
            </p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
              Story, scene, wardrobe, and character development — generated and
              evolved inside the process.
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
          <p className="text-[10px] uppercase tracking-[0.24em] text-white/45 md:text-xs">
            StoryTeller
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            World, character, and scene development governed in one system.
          </h2>
        </div>

        <div className="overflow-hidden rounded-[24px] border border-white/10 bg-black/30 shadow-2xl">
          <img
            src="/creative/storyteller-ui.jpg"
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
      <section className="mx-auto max-w-4xl text-center">
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