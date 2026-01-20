import { useEffect, useRef } from "react";
import type { Route } from "./+types/technology";
import styles from "./technology.module.css";
import {
  Server,
  Smartphone,
  Zap,
  Database,
  Search,
  ChevronRight,
  Shield,
  Settings,
  Layers,
  Clock,
  Activity,
  Image,
  Mic,
  Video,
  ArrowRight,
} from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Technology - Specular" },
    {
      name: "description",
      content: "Specular is built using modern, production-grade technologies chosen for stability and scalability.",
    },
  ];
}

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = ref.current?.querySelectorAll(
      `.${styles.scrollReveal}, .${styles.typeIn}, .${styles.glitchIn}, .${styles.fadeScale}`
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Technology() {
  const containerRef = useScrollReveal();

  return (
    <main className={styles.main} ref={containerRef}>
      {/* HERO - TERMINAL STYLE */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.codeLines}>
            {`// specular.config.ts
import { defineConfig } from 'specular';

export default defineConfig({
  architecture: 'distributed',
  processing: 'server-side',
  client: 'thin',
  pipelines: 'async',
  storage: 'structured',
  scaling: 'horizontal',
  reliability: 'production-grade'
});

// Initialize system
const system = await Specular.init();
await system.start();

// specular.config.ts
import { defineConfig } from 'specular';

export default defineConfig({
  architecture: 'distributed',
  processing: 'server-side',
  client: 'thin',
  pipelines: 'async',
  storage: 'structured',
  scaling: 'horizontal',
  reliability: 'production-grade'
});`}
          </div>
          <span className={styles.matrixColumn}></span>
          <span className={styles.matrixColumn}></span>
          <span className={styles.matrixColumn}></span>
          <span className={styles.matrixColumn}></span>
          <span className={styles.matrixColumn}></span>
          <span className={styles.matrixColumn}></span>
          <div className={styles.scanLine}></div>
        </div>

        <div className={styles.terminalWindow}>
          <div className={styles.terminalHeader}>
            <div className={styles.terminalDots}>
              <span className={styles.terminalDot}></span>
              <span className={styles.terminalDot}></span>
              <span className={styles.terminalDot}></span>
            </div>
            <span className={styles.terminalTitle}>specular — technology</span>
          </div>
          <div className={styles.terminalBody}>
            <div className={styles.terminalPrompt}>
              <span>$</span>
              <span>specular --describe</span>
            </div>
            <h1 className={styles.heroTitle}>
              <span className={styles.highlight}>Technology</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Built using modern, production-grade technologies chosen for stability and scalability. Engineered to work
              continuously, quietly, and correctly.
              <span className={styles.terminalCursor}></span>
            </p>
          </div>
        </div>
      </section>

      {/* KEY PRINCIPLES */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.scrollReveal}`}>
            <span className={styles.sectionTag}>Foundation</span>
            <h2 className={styles.sectionTitle}>
              Key Technology <span className={styles.highlight}>Principles</span>
            </h2>
            <p className={styles.sectionDescription}>
              Every technology choice prioritizes real-world deployment over demos.
            </p>
          </div>

          <div className={styles.principlesGrid}>
            {[
              {
                icon: Server,
                title: "Server-Side Intelligence",
                text: "Heavy compute runs where power is abundant, keeping devices light.",
                file: "server.ts",
              },
              {
                icon: Smartphone,
                title: "Thin Client Devices",
                text: "Devices focus on sensing and display, not processing.",
                file: "client.ts",
              },
              {
                icon: Zap,
                title: "Event-Driven Processing",
                text: "System responds to events in real-time, not on fixed schedules.",
                file: "events.ts",
              },
              {
                icon: Clock,
                title: "Asynchronous Pipelines",
                text: "Analysis happens in parallel, maximizing throughput.",
                file: "pipeline.ts",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${styles.principleCard} ${styles.typeIn}`}
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <div className={styles.principleHeader}>
                  <div className={styles.principleIcon}>
                    <item.icon size={20} strokeWidth={1.5} />
                  </div>
                  <span className={styles.principleFileName}>{item.file}</span>
                </div>
                <div className={styles.principleBody}>
                  <h3 className={styles.principleTitle}>{item.title}</h3>
                  <p className={styles.principleText}>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DATA HANDLING */}
      <section className={`${styles.section} ${styles.dataSection}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.scrollReveal}`}>
            <span className={styles.sectionTag}>Data Processing</span>
            <h2 className={styles.sectionTitle}>
              Handling <span className={styles.highlight}>Rich Media</span>
            </h2>
            <p className={styles.sectionDescription}>
              Designed to handle audio, image, and video data with automatic indexing.
            </p>
          </div>

          <div className={styles.pipelineContainer}>
            {[
              {
                icon: Mic,
                title: "Audio Data",
                text: "Transcription, speaker identification, and time-aligned indexing.",
              },
              {
                icon: Image,
                title: "Image Data",
                text: "Object recognition, scene understanding, and semantic tagging.",
              },
              {
                icon: Video,
                title: "Video Data",
                text: "Frame extraction, temporal indexing, and content summarization.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${styles.pipelineItem} ${styles.glitchIn}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className={styles.pipelineIcon}>
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <div className={styles.pipelineContent}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <ArrowRight className={styles.pipelineArrow} size={24} strokeWidth={1.5} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM CAPABILITIES */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.scrollReveal}`}>
            <span className={styles.sectionTag}>Capabilities</span>
            <h2 className={styles.sectionTitle}>
              System <span className={styles.highlight}>Design Goals</span>
            </h2>
          </div>

          <div className={styles.capabilitiesGrid}>
            {[
              {
                icon: Database,
                title: "Structured Storage",
                text: "Information organized with purpose.",
              },
              {
                icon: Search,
                title: "Fast Retrieval",
                text: "Find what you need in seconds.",
              },
              {
                icon: Layers,
                title: "Auto Indexing",
                text: "Content tagged without manual effort.",
              },
              {
                icon: Activity,
                title: "Scalable",
                text: "Architecture grows with usage.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${styles.capabilityCard} ${styles.fadeScale}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.capabilityIcon}>
                  <item.icon size={24} strokeWidth={1.5} />
                </div>
                <h3 className={styles.capabilityTitle}>{item.title}</h3>
                <p className={styles.capabilityText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY PRIORITIES */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.scrollReveal}`}>
            <span className={styles.sectionTag}>Priorities</span>
            <h2 className={styles.sectionTitle}>
              Technology <span className={styles.highlight}>Philosophy</span>
            </h2>
          </div>

          <div className={styles.prioritiesTable}>
            {[
              {
                choose: { icon: Shield, title: "Reliability", desc: "Proven production tech" },
                over: { title: "Novelty", desc: "Bleeding-edge experiments" },
              },
              {
                choose: { icon: Settings, title: "Maintainability", desc: "Code teams can extend" },
                over: { title: "Complexity", desc: "Clever abstractions" },
              },
              {
                choose: { icon: Activity, title: "Deployment", desc: "Real-world use cases" },
                over: { title: "Demos", desc: "Impressive presentations" },
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${styles.priorityRow} ${styles.scrollReveal}`}
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <div className={styles.priorityCell}>
                  <div className={styles.priorityIcon}>
                    <item.choose.icon size={22} strokeWidth={1.5} />
                  </div>
                  <div className={styles.priorityContent}>
                    <h4>{item.choose.title}</h4>
                    <p>{item.choose.desc}</p>
                  </div>
                </div>
                <div className={styles.priorityCell}>
                  <div className={styles.priorityContent}>
                    <h4 style={{ opacity: 0.4 }}>{item.over.title}</h4>
                    <p>{item.over.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className={styles.closing}>
        <div className={styles.closingGlow}></div>
        <div className={`${styles.closingContent} ${styles.scrollReveal}`}>
          <h2 className={styles.closingTitle}>
            Engineered to work
            <br />
            <span className={styles.highlight}>continuously, quietly, and correctly</span>.
          </h2>
          <p className={styles.closingText}>
            Technology that disappears into the background — so intelligence can come forward.
          </p>
          <a href="/privacy" className={styles.primaryButton}>
            <span>Learn About Privacy</span>
            <ChevronRight size={18} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <span className={styles.footerLogo}></span>
            <span>Specular by EvenEi</span>
          </div>
          <nav className={styles.footerNav}>
            <a href="/problem" className={styles.footerLink}>
              Problem
            </a>
            <a href="/architecture" className={styles.footerLink}>
              Architecture
            </a>
            <a href="/models" className={styles.footerLink}>
              Models
            </a>
            <a href="/technology" className={styles.footerLink}>
              Technology
            </a>
            <a href="/privacy" className={styles.footerLink}>
              Privacy
            </a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
