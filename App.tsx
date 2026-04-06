import React from "react";

/**
 * Cosa Software — Emergence
 * Rebuilt for Web Summit application launch.
 * Fonts loaded via index.html <link> tag:
 *   Playfair Display (400, 400i, 700) + DM Sans (300, 400, 500) + DM Mono (300, 400)
 *   https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=DM+Mono:wght@300;400&display=swap
 */

export default function App() {
  return (
    <main style={{ minHeight: "100vh", background: "#ffffff", color: "#1a1917", fontFamily: "'DM Sans', sans-serif", fontWeight: 300 }}>
      <Header />
      <Hero />
      <Manifesto />
      <AIAmplification />
      <PullQuote quote="The schema is not a configuration file. It is a living constitution — and process intelligence is what it governs." />
      <FeatureCards />
      <PullQuote quote="No hype. Just slope." small />
      <CTA />
      <Footer />
    </main>
  );
}

/* ─────────────────────────────────────────
   HEADER
───────────────────────────────────────── */
function Header() {
  return (
    <header style={{
      position: "sticky", top: 0, zIndex: 50,
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(12px)",
      WebkitBackdropFilter: "blur(12px)",
      borderBottom: "1px solid #e8e5e0"
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/logo/cosa-mark.svg" alt="Cosa" style={{ height: 22, width: 22 }} />
          <span style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 500, fontSize: 15, letterSpacing: "-0.01em" }}>Emergence</span>
        </div>
        <nav style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href="#platform" style={navLink}>Platform</a>
          <a href="/executive-briefing.html" style={navLink}>Executive Brief</a>
          <a href="#contact" style={{ ...navLink, background: "#1a1917", color: "#fff", padding: "8px 20px", borderRadius: 100, fontWeight: 500 }}>Get in touch</a>
        </nav>
      </div>
    </header>
  );
}

const navLink: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 14,
  fontWeight: 400,
  color: "#6b6760",
  textDecoration: "none",
  letterSpacing: "0.01em",
  transition: "color 0.2s",
};

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */
function Hero() {
  return (
    <section style={{ background: "#ffffff", paddingTop: 72, paddingBottom: 0, textAlign: "center" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "0 40px 0" }}>
        <div style={eyebrow}>Cosa Software · Seattle, WA · 2025</div>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(52px, 8vw, 96px)",
          fontWeight: 400,
          lineHeight: 0.95,
          letterSpacing: "-0.025em",
          color: "#1a1917",
          margin: "20px 0 28px"
        }}>
          Emergence
        </h1>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "clamp(17px, 2vw, 22px)",
          fontWeight: 300,
          color: "#6b6760",
          lineHeight: 1.6,
          maxWidth: 560,
          margin: "0 auto 16px"
        }}>
          A process intelligence platform that generates domain-specific applications from pure JSON.
        </p>
        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(15px, 1.6vw, 19px)",
          color: "#9e9b96",
          marginBottom: 56
        }}>
          Any domain. One engine. No framework.
        </p>
      </div>

      {/* MBP Screenshot */}
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
        <img
          src="/art/01.png"
          alt="Emergence platform — multi-role enterprise dashboard"
          style={{ width: "100%", display: "block", objectFit: "contain" }}
        />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   MANIFESTO
───────────────────────────────────────── */
function Manifesto() {
  return (
    <section id="platform" style={{ background: "#f9f8f6", borderTop: "1px solid #e8e5e0", borderBottom: "1px solid #e8e5e0", padding: "96px 40px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={eyebrow}>What is Emergence?</div>
        <h2 style={sectionHead}>
          Most platforms are built for a domain.<br />
          <span style={{ fontStyle: "italic", color: "#6b6760" }}>Emergence is built for process itself.</span>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px 64px", marginTop: 48 }}>
          <p style={bodyText}>
            At its core, Emergence is a C++ physics engine that reads a JSON schema and generates a fully functional, governed, collaborative application — in any domain, for any industry. There is no domain-specific code. There is no framework to configure. There is no six-month buildout.
          </p>
          <p style={bodyText}>
            The schema defines everything: data models, process flows, stage gates, approval hierarchies, governance rules — all the way down to the property level. Subject matter experts tune their workflows live in production, without touching a line of JSON. Teams continuously adapt the way organisms adapt to their environment.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 1, background: "#e8e5e0", marginTop: 56, border: "1px solid #e8e5e0" }}>
          {[
            { value: "Any", label: "Industry or domain\none engine" },
            { value: "0", label: "Domain-specific code\nrequired" },
            { value: "Live", label: "Schema evolution\nin production" },
          ].map(s => (
            <div key={s.value} style={{ background: "#f9f8f6", padding: "36px 32px" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 400, color: "#1a1917", lineHeight: 1, marginBottom: 10 }}>{s.value}</div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "#9e9b96", whiteSpace: "pre-line" as const, lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   AI AMPLIFICATION
───────────────────────────────────────── */
function AIAmplification() {
  const points = [
    {
      roman: "I",
      title: "Schema Generation",
      body: "Any major AI model can generate new Emergence schemas as if the format were a published industry standard. A new workflow for any domain can be drafted, loaded, validated, and refined in near real-time — collapsing what used to be a six-to-twelve month, $200,000 enterprise implementation into days of iteration. The AI generates. The engine runs. The experts tune.",
      proof: "Days, not months.",
    },
    {
      roman: "II",
      title: "Frontend View Generation",
      body: "Every view in the Emergence frontend toolbox is AI-generated — and the Viewstream Firewall means any view can be replaced at any time without touching the backend. A production-quality code diff view rivaling GitHub's was built in two days. A gallery view competitive with Adobe Lightroom took three. The frontend scales horizontally, indefinitely, with zero technical liability accumulation.",
      proof: "No framework debt. Ever.",
    },
    {
      roman: "III",
      title: "In-Workflow Asset Generation",
      body: "Tickets in Emergence are governed asset buckets. With generative AI integrated directly into the stack, those tickets become living storyboards — images, video, structured narrative, and documents generated, revised, and approved inside the process flow itself, subject to the same governance and stage gates as every other asset in the system.",
      proof: "AI inside the governance, not outside it.",
    },
  ];

  return (
    <section style={{ background: "#ffffff", padding: "96px 40px", borderBottom: "1px solid #e8e5e0" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={eyebrow}>AI as Architecture</div>
        <h2 style={sectionHead}>
          AI isn't a feature here.<br />
          <span style={{ fontStyle: "italic", color: "#6b6760" }}>It's a structural force multiplier.</span>
        </h2>
        <p style={{ ...bodyText, maxWidth: 600, marginTop: 20, marginBottom: 56 }}>
          Most platforms bolt AI onto an existing architecture. Emergence was built around three dimensions where AI operates as a native amplifier — at the schema layer, the view layer, and inside the governed workflow itself.
        </p>

        <div style={{ display: "flex", flexDirection: "column" as const, border: "1px solid #e8e5e0" }}>
          {points.map((p, i) => (
            <div key={p.roman} style={{
              display: "grid",
              gridTemplateColumns: "64px 1fr auto",
              gap: 32,
              padding: "40px 40px",
              borderBottom: i < points.length - 1 ? "1px solid #e8e5e0" : "none",
              alignItems: "start",
              background: i % 2 === 0 ? "#ffffff" : "#faf9f7"
            }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 28,
                fontStyle: "italic",
                color: "#c8c4bc",
                paddingTop: 2
              }}>{p.roman}</div>
              <div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#1a1917", marginBottom: 12 }}>{p.title}</div>
                <p style={{ ...bodyText, margin: 0, fontSize: 15 }}>{p.body}</p>
              </div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: 13,
                color: "#9e9b96",
                whiteSpace: "nowrap" as const,
                paddingTop: 2,
                minWidth: 160,
                textAlign: "right" as const
              }}>{p.proof}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PULL QUOTE
───────────────────────────────────────── */
function PullQuote({ quote, small = false }: { quote: string; small?: boolean }) {
  return (
    <section style={{ background: "#1a1917", padding: small ? "56px 40px" : "80px 40px" }}>
      <div style={{ maxWidth: 760, margin: "0 auto", textAlign: "center" }}>
        <p style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontStyle: "italic",
          fontSize: small ? "clamp(20px, 2.5vw, 28px)" : "clamp(22px, 3vw, 38px)",
          fontWeight: 400,
          color: "#ffffff",
          lineHeight: 1.45,
          letterSpacing: "-0.01em",
          margin: 0
        }}>
          "{quote}"
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FEATURE CARDS
───────────────────────────────────────── */
function FeatureCards() {
  return (
    <section style={{ background: "#f9f8f6", padding: "96px 40px", borderTop: "1px solid #e8e5e0", borderBottom: "1px solid #e8e5e0" }}>
      <div style={{ maxWidth: 1060, margin: "0 auto" }}>
        <div style={eyebrow}>Go deeper</div>
        <h2 style={{ ...sectionHead, marginBottom: 48 }}>Read the brief. See the platform.</h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {/* Executive Briefing Card */}
          <a href="/executive-briefing.html" style={{ textDecoration: "none", display: "block" }}>
            <div style={featureCard("#1a1917")}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.4)", marginBottom: 20 }}>Strategic Overview</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(26px, 3vw, 40px)",
                  fontWeight: 400,
                  color: "#ffffff",
                  lineHeight: 1.15,
                  letterSpacing: "-0.015em",
                  marginBottom: 20
                }}>
                  Executive<br />Briefing
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.6)", lineHeight: 1.65, margin: 0 }}>
                  Platform architecture, AI integration, the Gene Vault, the moat, and governed agents — the complete picture for partners and investors.
                </p>
              </div>
              <div style={{ marginTop: 40, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: 15,
                  color: "rgba(255,255,255,0.35)",
                  lineHeight: 1.5
                }}>
                  "Domain-specific applications<br />are not developed — they emerge."
                </div>
                <div style={cardArrow("#ffffff")}>→</div>
              </div>
            </div>
          </a>

          {/* Screenshot Gallery Card */}
          <a href="#gallery" style={{ textDecoration: "none", display: "block" }}>
            <div style={featureCard("#f2f0ec", true)}>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#9e9b96", marginBottom: 20 }}>The Visual Layer</div>
                <h3 style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(26px, 3vw, 40px)",
                  fontWeight: 400,
                  color: "#1a1917",
                  lineHeight: 1.15,
                  letterSpacing: "-0.015em",
                  marginBottom: 20
                }}>
                  Platform<br />Gallery
                </h3>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 15, fontWeight: 300, color: "#6b6760", lineHeight: 1.65, margin: 0 }}>
                  AI-generated HTML5 views. No framework. No technical debt. A growing armada of production-quality screens built and owned by no library.
                </p>
              </div>
              <div style={{ marginTop: 40, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{
                  fontFamily: "'Playfair Display', serif",
                  fontStyle: "italic",
                  fontSize: 15,
                  color: "#c8c4bc",
                  lineHeight: 1.5
                }}>
                  "A gallery view competitive with<br />Adobe Lightroom. Built in three days."
                </div>
                <div style={cardArrow("#1a1917")}>→</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

function featureCard(bg: string, light = false): React.CSSProperties {
  return {
    background: bg,
    border: light ? "1px solid #dedad4" : "none",
    borderRadius: 4,
    padding: "48px 44px",
    display: "flex",
    flexDirection: "column",
    minHeight: 420,
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "pointer",
  };
}

function cardArrow(color: string): React.CSSProperties {
  return {
    width: 44,
    height: 44,
    borderRadius: "50%",
    border: `1px solid ${color === "#ffffff" ? "rgba(255,255,255,0.2)" : "#dedad4"}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: color,
    fontSize: 18,
    flexShrink: 0,
    marginLeft: 16,
  };
}

/* ─────────────────────────────────────────
   CTA
───────────────────────────────────────── */
function CTA() {
  return (
    <section id="contact" style={{ background: "#ffffff", padding: "80px 40px" }}>
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        <div style={{
          border: "1px solid #e8e5e0",
          borderRadius: 4,
          padding: "56px 64px",
          textAlign: "center"
        }}>
          <div style={eyebrow}>Let's talk</div>
          <h3 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(26px, 3vw, 40px)",
            fontWeight: 400,
            letterSpacing: "-0.015em",
            color: "#1a1917",
            margin: "16px 0 20px"
          }}>See it in your domain.</h3>
          <p style={{ ...bodyText, maxWidth: 500, margin: "0 auto 40px", color: "#6b6760" }}>
            Bring your process. We'll map it to one flow and hand you a demo you can reopen in a year — prompts, parameters, seeds, provenance, and full history.
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
            <a href="mailto:hello@cosa-software.com" style={{
              background: "#1a1917",
              color: "#ffffff",
              borderRadius: 100,
              padding: "12px 28px",
              fontSize: 14,
              fontWeight: 500,
              fontFamily: "'DM Sans', sans-serif",
              textDecoration: "none",
              letterSpacing: "0.01em"
            }}>Request a private demo</a>
            <a href="/executive-briefing.html" style={{
              border: "1px solid #e8e5e0",
              color: "#1a1917",
              borderRadius: 100,
              padding: "12px 28px",
              fontSize: 14,
              fontWeight: 400,
              fontFamily: "'DM Sans', sans-serif",
              textDecoration: "none",
              letterSpacing: "0.01em"
            }}>Read the brief</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   FOOTER
───────────────────────────────────────── */
function Footer() {
  return (
    <footer style={{ background: "#ffffff", borderTop: "1px solid #e8e5e0", padding: "32px 40px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/logo/cosa-mark.svg" alt="Cosa" style={{ height: 18, width: 18, opacity: 0.5 }} />
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#9e9b96", letterSpacing: "0.08em" }}>© 2025 Cosa Software</span>
        </div>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "#9e9b96", letterSpacing: "0.08em" }}>Seattle, WA · Confidential</span>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────
   SHARED STYLES
───────────────────────────────────────── */
const eyebrow: React.CSSProperties = {
  fontFamily: "'DM Mono', monospace",
  fontSize: 10,
  fontWeight: 400,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#9e9b96",
  marginBottom: 16,
};

const sectionHead: React.CSSProperties = {
  fontFamily: "'Playfair Display', Georgia, serif",
  fontSize: "clamp(28px, 3.5vw, 48px)",
  fontWeight: 400,
  lineHeight: 1.15,
  letterSpacing: "-0.02em",
  color: "#1a1917",
  margin: 0,
};

const bodyText: React.CSSProperties = {
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 16,
  fontWeight: 300,
  lineHeight: 1.75,
  color: "#1a1917",
  margin: 0,
};
