import { useEffect, useRef } from "react";
import type { Route } from "./+types/models";
import styles from "./models.module.css";
import {
  Mic,
  Eye,
  Brain,
  FileText,
  Search,
  CheckCircle2,
  Target,
  Shield,
  ChevronRight,
  Lightbulb,
  FileCheck,
  Sparkles,
} from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Models - Specular" },
    {
      name: "description",
      content:
        "Specular coordinates the best models for specific tasks. Each model has a clear role ensuring accuracy, explainability, and reliability.",
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
      `.${styles.scrollReveal}, .${styles.rotateIn}, .${styles.slideFromBottom}, .${styles.expandIn}`
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Models() {
  const containerRef = useScrollReveal();

  return (
    <main className={styles.main} ref={containerRef}>
      {/* HERO - ORBITAL SYSTEM */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.concentricCircles}>
            <div className={styles.circle}>
              <span className={styles.orbitDot}></span>
            </div>
            <div className={styles.circle}>
              <span className={styles.orbitDot}></span>
            </div>
            <div className={styles.circle}>
              <span className={styles.orbitDot}></span>
            </div>
            <div className={styles.circle}></div>
            <span className={styles.neuralLine}></span>
            <span className={styles.neuralLine}></span>
            <span className={styles.neuralLine}></span>
          </div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Sparkles size={14} />
            <span>AI Intelligence</span>
          </div>
          <h1 className={styles.heroTitle}>
            <span className={styles.highlight}>Models</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Specular does not rely on a single model. It coordinates the best models for specific tasks. Each model has
            a clear role.
          </p>
        </div>
      </section>

      {/* MODEL CATEGORIES */}
      <section className={`${styles.section} ${styles.modelCategoriesSection}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.scrollReveal}`}>
            <span className={styles.sectionTag}>Specialization</span>
            <h2 className={styles.sectionTitle}>
              Purpose-Built <span className={styles.highlight}>Models</span>
            </h2>
            <p className={styles.sectionDescription}>
              Each model is selected for what it does best. No single model tries to do everything.
            </p>
          </div>

          <div className={styles.hexGrid}>
            {[
              {
                icon: Mic,
                title: "Speech & Audio",
                text: "Transcription and time-aligned text for searchable memory.",
              },
              {
                icon: Eye,
                title: "Vision & Image",
                text: "Object, scene, and concept recognition for visual search.",
              },
              {
                icon: Brain,
                title: "Reasoning",
                text: "Question answering grounded in verified, stored data.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${styles.hexCard} ${styles.rotateIn}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className={styles.hexIcon}>
                  <item.icon size={36} strokeWidth={1.5} />
                </div>
                <h3 className={styles.hexTitle}>{item.title}</h3>
                <p className={styles.hexText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SPEECH & AUDIO */}
      <section className={`${styles.section} ${styles.audioSection}`}>
        <div className={styles.waveBackground}></div>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.scrollReveal}`}>
            <span className={styles.sectionTag}>Audio Processing</span>
            <h2 className={styles.sectionTitle}>
              Speech & <span className={styles.highlight}>Audio</span> Understanding
            </h2>
          </div>

          <div className={styles.audioGrid}>
            {[
              {
                icon: Mic,
                title: "Transcription",
                text: "Converts spoken words into accurate, time-stamped text.",
              },
              {
                icon: FileText,
                title: "Time-Aligned",
                text: "Every word linked to its moment in time for precise navigation.",
              },
              {
                icon: Search,
                title: "Searchable",
                text: "Audio becomes queryable content, not just files.",
              },
              {
                icon: Target,
                title: "Structured",
                text: "Raw audio transformed into organized information.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${styles.audioCard} ${styles.slideFromBottom}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.audioIcon}>
                  <item.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className={styles.audioTitle}>{item.title}</h3>
                <p className={styles.audioText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & IMAGE */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.scrollReveal}`}>
            <span className={styles.sectionTag}>Visual Processing</span>
            <h2 className={styles.sectionTitle}>
              Vision & <span className={styles.highlight}>Image</span> Understanding
            </h2>
          </div>

          <div className={styles.visionGrid}>
            {[
              {
                icon: Eye,
                title: "Object Recognition",
                text: "Identifies objects, people, and items within captured visual content with high precision.",
              },
              {
                icon: Lightbulb,
                title: "Scene Understanding",
                text: "Comprehends context and setting.",
              },
              {
                icon: Search,
                title: "Concept Recognition",
                text: "Extracts abstract concepts and themes.",
              },
              {
                icon: Target,
                title: "Semantic Search",
                text: "Find by description, not filename.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${styles.visionCard} ${styles.expandIn}`}
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <div className={styles.visionIcon}>
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className={styles.visionTitle}>{item.title}</h3>
                <p className={styles.visionText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEES */}
      <section className={`${styles.section} ${styles.guaranteesSection}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.scrollReveal}`}>
            <span className={styles.sectionTag}>Guarantees</span>
            <h2 className={styles.sectionTitle}>
              This Separation <span className={styles.highlight}>Ensures</span>
            </h2>
          </div>

          <div className={styles.guaranteesTrack}>
            {[
              {
                icon: CheckCircle2,
                title: "Accuracy",
                text: "Each model optimized for its specific task, delivering superior results.",
              },
              {
                icon: FileCheck,
                title: "Explainability",
                text: "Answers traced back to source data, showing where information came from.",
              },
              {
                icon: Shield,
                title: "Reliability",
                text: "No hallucinations. No invented facts. Only verifiable responses.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${styles.guaranteeCard} ${styles.scrollReveal}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className={styles.guaranteeIcon}>
                  <item.icon size={40} strokeWidth={1.5} />
                </div>
                <h3 className={styles.guaranteeTitle}>{item.title}</h3>
                <p className={styles.guaranteeText}>{item.text}</p>
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
            Models support the system.
            <br />
            They <span className={styles.highlight}>do not define it</span>.
          </h2>
          <p className={styles.closingText}>
            Specular coordinates intelligence — it doesn't depend on any single model.
          </p>
          <a href="/technology" className={styles.primaryButton}>
            <span>Explore Technology</span>
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
