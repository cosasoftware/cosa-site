import React from "react";

export default function CreativeDevelopmentEditorial() {
  return (
    <main className="bg-[#f5f3ee] text-neutral-950 selection:bg-neutral-950 selection:text-white">
      <Intro />
      <EditorialBody />
      <SystemSection />
      <ClosingQuote />
      <GalleryLink />
    </main>
  );
}

function Intro() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24 md:pb-14">
      <div className="max-w-4xl">
        <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-500 md:text-xs">
          Creative Development
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
          Story, scene, wardrobe, and character development inside a governed creative process.
        </h1>

        <p
          className="mt-6 max-w-3xl text-xl leading-relaxed text-neutral-700 md:text-2xl"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Consider a technical director overseeing a complex production — writers,
          concept artists, animators, directors, and casting teams distributed
          across locations.
        </p>
      </div>
    </section>
  );
}

function EditorialBody() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-24">
      <div className="grid gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
        <div>
          <p className="text-lg leading-8 text-neutral-800">
            Storyboards evolve in real time. Scenes, wardrobe, and character
            development move through governed approval stages. With generative AI
            integrated into the Emergence stack, every ticket in that pipeline
            becomes a living storyboard.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-800">
            Images and video are generated and revised directly inside the process.
            The technical director reviews and approves from anywhere — including
            from an iPad on set.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4">
            <img
              src="/creative/character-3.jpg"
              alt="Character portrait"
              className="rounded-[18px] object-cover shadow-sm"
            />
            <img
              src="/creative/character-4.jpg"
              alt="Wardrobe portrait"
              className="rounded-[18px] object-cover shadow-sm translate-y-8"
            />
          </div>
        </div>

        <div className="space-y-6">
          <img
            src="/creative/cast-pair.jpg"
            alt="Cast pair"
            className="w-full rounded-[22px] object-cover shadow-sm"
          />

          <p
            className="px-2 text-2xl leading-[1.3] text-neutral-700"
            style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
          >
            Every ticket becomes a living storyboard.
          </p>
        </div>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
        <div className="space-y-6">
          <img
            src="/creative/dragon-close.jpg"
            alt="Creature closeup"
            className="w-full rounded-[22px] object-cover shadow-sm"
          />
          <img
            src="/creative/character-5.jpg"
            alt="Character development"
            className="w-[78%] rounded-[18px] object-cover shadow-sm ml-auto"
          />
        </div>

        <div>
          <p className="text-lg leading-8 text-neutral-800">
            The same engine that governs pharmacy prescriptions drives commercial
            and film production workflows. The domain changes. The system does not.
          </p>

          <p className="mt-6 text-lg leading-8 text-neutral-800">
            This allows character casting, wardrobe exploration, scene progression,
            and visual development to unfold inside one continuous, governed process
            instead of across disconnected tools and ad hoc review loops.
          </p>

          <div className="mt-10">
            <img
              src="/creative/dragon-scene.jpg"
              alt="Dragon cinematic scene"
              className="w-full rounded-[22px] object-cover shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function SystemSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
      <div className="border-t border-neutral-300 pt-10">
        <p className="text-[10px] uppercase tracking-[0.22em] text-neutral-500 md:text-xs">
          StoryTeller
        </p>

        <div className="mt-4 grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
              World, character, and scene development governed in one system.
            </h2>

            <p className="mt-5 text-lg leading-8 text-neutral-800">
              Structure, approvals, storyboards, references, and production flow
              live together. The creative process becomes visible, governable, and
              collaborative in real time.
            </p>
          </div>

          <img
            src="/creative/storyteller-ui.jpg"
            alt="StoryTeller interface"
            className="w-full rounded-[22px] border border-neutral-300 object-cover shadow-sm"
          />
        </div>
      </div>
    </section>
  );
}

function ClosingQuote() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 text-center md:pb-24">
      <p
        className="mx-auto max-w-3xl text-[clamp(28px,3.8vw,48px)] leading-[1.2] text-neutral-800"
        style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
      >
        Built on fields and projections — not features.
        <br />
        A different class of software.
      </p>
    </section>
  );
}

function GalleryLink() {
  return (
    <section className="px-6 pb-20 text-center md:pb-24">
      <a
        href="/gallery"
        className="inline-flex items-center gap-3 rounded-full border border-neutral-300 px-6 py-3 text-sm font-medium text-neutral-800 transition hover:bg-neutral-100"
      >
        View Full Gallery
        <span aria-hidden="true">→</span>
      </a>
    </section>
  );
}