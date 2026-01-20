import { useEffect, useRef } from "react";
import type { Route } from "./+types/privacy";
import styles from "./privacy.module.css";
import {
  Shield,
  User,
  Lock,
  Key,
  CheckCircle2,
  Database,
  FileSearch,
  AlertTriangle,
  ChevronRight,
  UserCheck,
  EyeOff,
  ShieldCheck,
  FileCheck,
} from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy - Specular" },
    {
      name: "description",
      content:
        "Privacy is not an afterthought in Specular. It is a design requirement. Built around user control and transparency.",
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
      `.${styles.scrollReveal}, .${styles.lockIn}, .${styles.slideFromSide}, .${styles.vaultOpen}`
    );
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Privacy() {
  const containerRef = useScrollReveal();

  return (
    <main className={styles.main} ref={containerRef}>
      {/* HERO - SHIELD CENTERED */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.securityGrid}></div>
          <span className={styles.securityLine}></span>
          <span className={styles.securityLine}></span>
          <span className={styles.securityLine}></span>
        </div>

        <div className={styles.shieldContainer}>
          <div className={styles.shieldRing}></div>
          <div className={styles.shieldRing}></div>
          <div className={styles.shieldRing}></div>
          <div className={styles.shieldOuter}>
            <div className={styles.shieldInner}>
              <Shield size={52} strokeWidth={1.5} />
            </div>
          </div>
        </div>

        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <Lock size={14} />
            <span>Trust & Security</span>
          </div>
          <h1 className={styles.heroTitle}>
            <span className={styles.highlight}>Privacy</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Privacy is not an afterthought in Specular. It is a design requirement. Built around user control and
            transparency.
          </p>
        </div>
      </section>

      {/* PRIVACY PRINCIPLES */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.scrollReveal}`}>
            <span className={styles.sectionTag}>Foundation</span>
            <h2 className={styles.sectionTitle}>
              Privacy <span className={styles.highlight}>Principles</span>
            </h2>
            <p className={styles.sectionDescription}>
              Every aspect of Specular is designed with privacy as a core constraint.
            </p>
          </div>

          <div className={styles.principlesGrid}>
            {[
              {
                icon: User,
                title: "Data Belongs to User",
                text: "Your data is yours. Full stop. No hidden ownership clauses.",
              },
              {
                icon: EyeOff,
                title: "No Hidden Recording",
                text: "Recording is always explicit. No silent capture or background collection.",
              },
              {
                icon: CheckCircle2,
                title: "Explicit Permissions",
                text: "Every access requires clear consent. No presumed permissions.",
              },
              {
                icon: Key,
                title: "Controlled Access",
                text: "You decide who sees what. Granular controls over your data.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${styles.principleCard} ${styles.lockIn}`}
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <div className={styles.principleIcon}>
                  <item.icon size={30} strokeWidth={1.5} />
                </div>
                <h3 className={styles.principleTitle}>{item.title}</h3>
                <p className={styles.principleText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY PROTECTIONS */}
      <section className={`${styles.section} ${styles.protectionsSection}`}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.scrollReveal}`}>
            <span className={styles.sectionTag}>Safeguards</span>
            <h2 className={styles.sectionTitle}>
              Key <span className={styles.highlight}>Protections</span>
            </h2>
            <p className={styles.sectionDescription}>
              Technical and architectural safeguards that protect your privacy at every level.
            </p>
          </div>

          <div className={styles.protectionsGrid}>
            {[
              {
                icon: Lock,
                title: "Secure Storage",
                text: "Raw media is encrypted and stored securely, protected from unauthorized access.",
              },
              {
                icon: Database,
                title: "Processed Data Intelligence",
                text: "AI operates on processed data, not raw personal content, minimizing exposure.",
              },
              {
                icon: Shield,
                title: "No Unrestricted Access",
                text: "Even internal systems have limited access. No all-seeing administrative eyes.",
              },
              {
                icon: FileSearch,
                title: "Traceable Answers",
                text: "Every system answer can be traced back to real data. No black-box responses.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${styles.protectionCard} ${styles.slideFromSide}`}
                style={{ transitionDelay: `${index * 0.12}s` }}
              >
                <div className={styles.protectionIcon}>
                  <item.icon size={26} strokeWidth={1.5} />
                </div>
                <div className={styles.protectionContent}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE AVOID */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.scrollReveal}`}>
            <span className={styles.sectionTag}>Commitments</span>
            <h2 className={styles.sectionTitle}>
              What Specular <span className={styles.highlight}>Avoids</span>
            </h2>
          </div>

          <div className={styles.avoidsGrid}>
            {[
              {
                icon: AlertTriangle,
                title: "Black-Box Intelligence",
                text: "No mysterious AI decisions. Every output is explainable.",
              },
              {
                icon: FileCheck,
                title: "Unverifiable Answers",
                text: "No responses that cannot be backed by actual data.",
              },
              {
                icon: EyeOff,
                title: "Silent Data Misuse",
                text: "No hidden monetization or undisclosed sharing.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${styles.avoidCard} ${styles.vaultOpen}`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className={styles.avoidIcon}>
                  <item.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className={styles.avoidTitle}>{item.title}</h3>
                <p className={styles.avoidText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST FOUNDATION */}
      <section className={`${styles.section} ${styles.trustSection}`}>
        <div className={styles.trustGlow}></div>
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.scrollReveal}`}>
            <span className={styles.sectionTag}>Why It Matters</span>
            <h2 className={styles.sectionTitle}>
              Trust Is <span className={styles.highlight}>Fundamental</span>
            </h2>
          </div>

          <div className={styles.trustContent}>
            <div className={styles.trustGrid}>
              {[
                {
                  icon: ShieldCheck,
                  title: "Requires Trust",
                  text: "For technology to be part of daily life, users must trust it completely.",
                },
                {
                  icon: UserCheck,
                  title: "Enables Adoption",
                  text: "Privacy-first design removes barriers to adoption and long-term use.",
                },
                {
                  icon: Shield,
                  title: "No Place Without It",
                  text: "Without trust, intelligence has no place in daily life. Period.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`${styles.trustCard} ${styles.scrollReveal}`}
                  style={{ transitionDelay: `${index * 0.15}s` }}
                >
                  <div className={styles.trustIcon}>
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.trustTitle}>{item.title}</h3>
                  <p className={styles.trustText}>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className={styles.closing}>
        <div className={styles.closingGlow}></div>
        <div className={`${styles.closingContent} ${styles.scrollReveal}`}>
          <h2 className={styles.closingTitle}>
            Trust is fundamental to
            <br />
            <span className={styles.highlight}>Everyday Intelligence</span>.
          </h2>
          <p className={styles.closingText}>Without trust, intelligence has no place in daily life.</p>
          <a href="/" className={styles.primaryButton}>
            <span>Back to Home</span>
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
