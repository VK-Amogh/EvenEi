import { useEffect, useRef } from "react";
import type { Route } from "./+types/architecture";
import styles from "./architecture.module.css";
import {
  Glasses,
  Smartphone,
  Cloud,
  Server,
  Battery,
  Zap,
  RefreshCcw,
  ArrowRight,
} from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Architecture - Specular" },
    {
      name: "description",
      content:
        "Specular's software-first, system-level architecture. Intelligence distributed across the system, not confined to the device.",
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
      `.${styles.scrollReveal}, .${styles.slideUp}, .${styles.scaleIn}, .${styles.flipIn}`
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Architecture() {
  const containerRef = useScrollReveal();

  return (
    <main className={styles.main} ref={containerRef}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.gridPattern}></div>
          <div className={styles.flowLines}>
            <div className={styles.flowLine}></div>
            <div className={styles.flowLine}></div>
            <div className={styles.flowLine}></div>
            <span className={styles.floatingNode}></span>
            <span className={styles.floatingNode}></span>
            <span className={styles.floatingNode}></span>
          </div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Server size={14} />
            <span>System Design</span>
          </div>
          <h1 className={styles.heroTitle}>
            <span className={styles.highlight}>Architecture</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Specular is built on a software-first, system-level architecture. Instead of placing intelligence entirely
            inside the glasses, Specular distributes intelligence across the system.
          </p>

          <div className={styles.systemDiagram}>
            <div className={styles.diagramNode}>
              <div className={styles.diagramIcon}>
                <Glasses size={26} strokeWidth={1.5} />
              </div>
              <span className={styles.diagramLabel}>Glasses</span>
            </div>
            <div className={styles.diagramConnector}></div>
            <div className={styles.diagramNode}>
              <div className={styles.diagramIcon}>
                <Smartphone size={26} strokeWidth={1.5} />
              </div>
              <span className={styles.diagramLabel}>Phone</span>
            </div>
            <div className={styles.diagramConnector}></div>
            <div className={styles.diagramNode}>
              <div className={styles.diagramIcon}>
                <Cloud size={26} strokeWidth={1.5} />
              </div>
              <span className={styles.diagramLabel}>Cloud</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE PRINCIPLES */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.scrollReveal}`}>
            <span className={styles.sectionTag}>Core Philosophy</span>
            <h2 className={styles.sectionTitle}>
              Architectural <span className={styles.highlight}>Principles</span>
            </h2>
            <p className={styles.sectionDescription}>
              Five key principles guide our system design, ensuring efficiency and scalability.
            </p>
          </div>

          <div className={styles.principlesTimeline}>
            {[
              {
                icon: Glasses,
                title: "Lightweight Sensing Hardware",
                text: "Hardware optimized for wearability, not computation. Cameras, microphones, and minimal processing.",
              },
              {
                icon: Server,
                title: "Server-Centric Intelligence",
                text: "Heavy AI workloads handled by servers where power is abundant and upgrades are seamless.",
              },
              {
                icon: Cloud,
                title: "Software-Driven Understanding",
                text: "Intelligence processes and structures data, making context searchable and usable.",
              },
              {
                icon: RefreshCcw,
                title: "Context Stored & Indexed",
                text: "Everything captured is organized, indexed, and retrievable when you need it.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${styles.principleItem} ${styles.slideUp}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className={styles.principleHeader}>
                  <div className={styles.principleIcon}>
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.principleTitle}>{item.title}</h3>
                </div>
                <p className={styles.principleText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className={`${styles.section} ${styles.benefitsSection}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.scrollReveal}`}>
            <span className={styles.sectionTag}>Advantages</span>
            <h2 className={styles.sectionTitle}>
              This Architecture <span className={styles.highlight}>Reduces</span>
            </h2>
          </div>

          <div className={styles.benefitsGrid}>
            {[
              {
                icon: Battery,
                title: "Power Consumption",
                text: "Without power-hungry processors, glasses can run all day on a small battery.",
              },
              {
                icon: Zap,
                title: "Heat Generation",
                text: "No compute means no heat on your face — comfortable for extended wear.",
              },
              {
                icon: Glasses,
                title: "Hardware Complexity",
                text: "Fewer components mean lighter glasses that look like normal eyewear.",
              },
              {
                icon: RefreshCcw,
                title: "Obsolescence Risk",
                text: "New capabilities arrive through software updates, not hardware replacement.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${styles.benefitCard} ${styles.scaleIn}`}
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <div className={styles.benefitIcon}>
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <div className={styles.benefitContent}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE TIERS */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.scrollReveal}`}>
            <span className={styles.sectionTag}>System Layers</span>
            <h2 className={styles.sectionTitle}>
              The <span className={styles.highlight}>Three Tiers</span>
            </h2>
          </div>

          <div className={styles.tiersStack}>
            {[
              {
                icon: Glasses,
                title: "Sensing Layer",
                text: "Cameras, microphones, and sensors capture the world. Minimal processing, maximum comfort.",
                number: "01",
              },
              {
                icon: Smartphone,
                title: "Coordination Layer",
                text: "Smartphone handles connectivity, local storage, and bridges sensing to intelligence.",
                number: "02",
              },
              {
                icon: Server,
                title: "Intelligence Layer",
                text: "Cloud servers run AI workloads, process data, and deliver insights back to the user.",
                number: "03",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${styles.tierCard} ${styles.flipIn}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className={styles.tierIcon}>
                  <item.icon size={40} strokeWidth={1.5} />
                </div>
                <div className={styles.tierContent}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span className={styles.tierNumber}>{item.number}</span>
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
            Specular is designed as a system,
            <br />
            <span className={styles.highlight}>not a gadget</span>.
          </h2>
          <p className={styles.closingText}>
            As AI improves, Specular improves — without replacing hardware.
          </p>
          <a href="/models" className={styles.primaryButton}>
            <span>Explore Our Models</span>
            <ArrowRight size={18} />
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
