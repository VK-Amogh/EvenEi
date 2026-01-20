import { useEffect, useRef } from "react";
import type { Route } from "./+types/problem";
import styles from "./problem.module.css";
import {
  Brain,
  Eye,
  Clock,
  HelpCircle,
  FileText,
  Image,
  Video,
  Layers,
  ChevronRight,
  Puzzle,
  Cpu,
  AlertTriangle,
  MapPin,
} from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Problem - Specular" },
    {
      name: "description",
      content:
        "Modern life generates more information than the human brain is designed to retain. Specular exists to solve this problem at the system level.",
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
      `.${styles.scrollReveal}, .${styles.slideFromLeft}, .${styles.slideFromRight}, .${styles.popIn}`
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Problem() {
  const containerRef = useScrollReveal();

  return (
    <main className={styles.main} ref={containerRef}>
      {/* HERO - CINEMATIC SPLIT */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <span className={styles.heroTag}>The Challenge</span>
          <h1 className={styles.heroTitle}>
            The <span className={styles.highlight}>Problem</span>
          </h1>
          <p className={styles.heroDescription}>
            Modern life generates more information than the human brain is designed to retain. This is not a memory
            problem. It is a system problem.
          </p>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroVisual}>
            <div className={styles.pulseRing}></div>
            <div className={styles.pulseRing}></div>
            <div className={styles.pulseRing}></div>
            <span className={styles.particle}></span>
            <span className={styles.particle}></span>
            <span className={styles.particle}></span>
            <span className={styles.particle}></span>
            <div className={styles.brainIcon}>
              <Brain size={52} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT PEOPLE FORGET */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.scrollReveal}`}>
            <span className={styles.sectionTag}>The Reality</span>
            <h2 className={styles.sectionTitle}>
              What People <span className={styles.highlight}>Forget</span>
            </h2>
            <p className={styles.sectionDescription}>
              Every day, valuable information slips through the cracks of human memory.
            </p>
          </div>

          <div className={styles.forgetGrid}>
            {[
              {
                icon: Eye,
                title: "What They Saw",
                text: "Visual information captured in moments fades quickly without a system to retain it.",
              },
              {
                icon: MapPin,
                title: "Where They Saw It",
                text: "Location and context of experiences become blurred over time.",
              },
              {
                icon: Clock,
                title: "When It Mattered",
                text: "Temporal relationships between events become impossible to reconstruct.",
              },
              {
                icon: HelpCircle,
                title: "Why It Was Important",
                text: "The significance of information is lost when separated from its original context.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${styles.forgetCard} ${styles.scrollReveal}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={styles.forgetNumber}>{String(index + 1).padStart(2, "0")}</div>
                <div className={styles.forgetIcon}>
                  <item.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className={styles.forgetTitle}>{item.title}</h3>
                <p className={styles.forgetText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRAGMENTED TOOLS */}
      <section className={`${styles.section} ${styles.fragmentedSection}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.scrollReveal}`}>
            <span className={styles.sectionTag}>Current State</span>
            <h2 className={styles.sectionTitle}>
              Today's Tools Are <span className={styles.highlight}>Fragmented</span>
            </h2>
            <p className={styles.sectionDescription}>
              Existing solutions address pieces of the problem, but none solve it at the system level.
            </p>
          </div>

          <div className={styles.stackedCards}>
            {[
              {
                icon: FileText,
                title: "Notes Are Manual",
                text: "Requires active effort to capture, breaking the flow of natural interaction.",
              },
              {
                icon: Image,
                title: "Photos Are Unstructured",
                text: "Images pile up without context, making retrieval nearly impossible.",
              },
              {
                icon: Video,
                title: "Videos Are Hard to Search",
                text: "Rich content locked in formats that resist indexing and discovery.",
              },
              {
                icon: Layers,
                title: "Context Is Lost Over Time",
                text: "The connections between information fragments disappear without systematic preservation.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${styles.stackedCard} ${styles.slideFromLeft}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className={styles.stackedIcon}>
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <div className={styles.stackedContent}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY EXISTING SOLUTIONS FAIL */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.scrollReveal}`}>
            <span className={styles.sectionTag}>Failed Approaches</span>
            <h2 className={styles.sectionTitle}>
              Why Smart Glasses <span className={styles.highlight}>Fail</span>
            </h2>
            <p className={styles.sectionDescription}>
              Smart glasses and AI tools focus on features instead of fundamentals.
            </p>
          </div>

          <div className={styles.bentoGrid}>
            {[
              {
                icon: Puzzle,
                title: "Features Over Fundamentals",
                text: "Adding capabilities without addressing the core architecture leads to fragmented experiences.",
              },
              {
                icon: Cpu,
                title: "Hardware-First Thinking",
                text: "Focusing on device specs rather than system design creates expensive, limited products.",
              },
              {
                icon: AlertTriangle,
                title: "Missing the Real Problem",
                text: "The real problem is not lack of intelligence. It is lack of context, structure, and continuity.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${styles.bentoCard} ${styles.popIn}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className={styles.bentoIcon}>
                  <item.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className={styles.bentoTitle}>{item.title}</h3>
                <p className={styles.bentoText}>{item.text}</p>
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
            Specular exists to solve this problem
            <br />
            at the <span className={styles.highlight}>system level</span>.
          </h2>
          <p className={styles.closingText}>
            Not more features. Not more hardware. Context, structure, and continuity.
          </p>
          <a href="/architecture" className={styles.primaryButton}>
            <span>See Our Architecture</span>
            <ChevronRight size={18} />
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={styles.container}>
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
        </div>
      </footer>
    </main>
  );
}
