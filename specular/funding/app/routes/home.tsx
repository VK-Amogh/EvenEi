import { useEffect, useRef } from "react";
import type { Route } from "./+types/home";
import styles from "./home.module.css";
import classNames from "classnames";
import {
  Cpu,
  DollarSign,
  Battery,
  RefreshCcw,
  Glasses,
  Zap,
  CircuitBoard,
  Package,
  Cog,
  Users,
  Heart,
  Shield,
  Building2,
  Search,
  Factory,
  GraduationCap,
  CheckCircle2,
  Target,
  Lightbulb,
  Lock,
  ArrowDown,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Globe,
  Network,
  Server,
  Rocket,
} from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Specular - Intelligent Wearables Architecture" },
    {
      name: "description",
      content:
        "Building the foundation for practical smart glasses. A system-level architectural approach to intelligent wearables.",
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
      `.${styles.scrollReveal}, .${styles.slideLeft}, .${styles.slideRight}, .${styles.popIn}, .${styles.flipIn}, .${styles.zoomRotate}`
    );

    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Home() {
  const containerRef = useScrollReveal();

  return (
    <main className={styles.main} ref={containerRef}>
      {/* 1. HERO SECTION */}
      <section className={classNames(styles.section, styles.hero)}>
        <div className={styles.heroBackground}>
          <div className={styles.gridLines}></div>
          <div className={styles.glowOrb}></div>
          <div className={styles.glowOrbSecondary}></div>
          <div className={styles.glowOrbTertiary}></div>
          <div className={styles.floatingParticles}>
            <span className={styles.particle}></span>
            <span className={styles.particle}></span>
            <span className={styles.particle}></span>
            <span className={styles.particle}></span>
            <span className={styles.particle}></span>
            <span className={styles.particle}></span>
            <span className={styles.particle}></span>
            <span className={styles.particle}></span>
          </div>
          <div className={styles.orbitRing}></div>
          <div className={styles.orbitRingInner}></div>
          <div className={styles.scanLine}></div>
        </div>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <Rocket size={16} />
              <span>Next-Gen Wearable Technology</span>
            </div>
            <h1 className={styles.heroTitle}>Specular</h1>
            <h2 className={styles.heroSubtitle}>
              Building the Foundation for <span className={styles.highlight}>Practical Smart Glasses</span>
            </h2>
            <p className={styles.heroDescription}>
              Specular is an intelligent wearables project focused on solving the real problems that have held smart
              glasses back — cost, usability, power efficiency, and system design.
            </p>
            <div className={styles.heroCta}>
              <a href="#problem" className={styles.primaryButton}>
                <span>Discover Why</span>
                <ArrowDown size={18} />
              </a>
              <a href="#investment" className={styles.secondaryButton}>
                <span>Investment</span>
                <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.scrollIndicator}>
          <span></span>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section id="problem" className={styles.section}>
        <div className={styles.container}>
          <div className={classNames(styles.sectionHeader, styles.scrollReveal)}>
            <span className={styles.sectionTag}>The Challenge</span>
            <h2 className={styles.sectionTitle}>
              The <span className={styles.highlight}>Problem</span> With Today&apos;s{" "}
              <span className={styles.highlight}>Smart Glasses</span>
            </h2>
            <p className={styles.sectionDescription}>
              Most smart glasses fail because they are built with a hardware-first mindset. These are architectural
              failures, not feature gaps.
            </p>
          </div>

          <div className={styles.problemGrid}>
            {[
              {
                icon: Cpu,
                title: "Excessive On-Device Processing",
                text: "Trying to cram smartphone-level compute into a face-worn device leads to bulk, heat, and discomfort.",
              },
              {
                icon: DollarSign,
                title: "Prohibitive Cost",
                text: "Complex manufacturing and high-end silicon make devices inaccessible to the mass market.",
              },
              {
                icon: Battery,
                title: "Poor Power Efficiency",
                text: "Current architectures struggle to deliver meaningful battery life without adding heavy batteries.",
              },
              {
                icon: RefreshCcw,
                title: "Limited Upgradeability",
                text: "Hardware-locked features mean devices become obsolete quickly, frustrating users and investors alike.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={classNames(
                  styles.problemCard,
                  styles.motionTrail,
                  styles.flipIn,
                  styles[`staggerDelay${index + 1}`]
                )}
              >
                <div className={styles.cardGlow}></div>
                <div className={styles.cardIcon}>
                  <item.icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.text}</p>
                <div className={styles.cardNumber}>{String(index + 1).padStart(2, "0")}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE INSIGHT */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={classNames(styles.sectionHeader, styles.scrollReveal)}>
            <span className={styles.sectionTag}>Our Approach</span>
            <h2 className={styles.sectionTitle}>
              A Different <span className={styles.highlight}>Architectural Approach</span>
            </h2>
            <p className={styles.sectionDescription}>
              Specular is built on a <span className={styles.highlight}>software-first, system-level architecture</span>
              . We don&apos;t just shrink hardware — we rethink where the intelligence lives.
            </p>
          </div>

          <div className={styles.insightGrid}>
            {[
              {
                icon: Glasses,
                title: "Minimal Sensing Hardware",
                text: "Hardware optimized purely for wearability and sensing, not compute.",
              },
              {
                icon: Network,
                title: "Distributed Intelligence",
                text: "Intelligence distributed across the entire system, not confined to the device.",
              },
              {
                icon: Server,
                title: "Server-Side AI",
                text: "Heavy AI workloads handled by software and servers where power is abundant.",
              },
              {
                icon: Zap,
                title: "Software Upgrades",
                text: "Capabilities improve through software updates, not hardware replacement.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={classNames(
                  styles.insightCard,
                  styles.motionTrail,
                  styles.popIn,
                  styles[`staggerDelay${index + 1}`]
                )}
              >
                <div className={styles.insightIconWrapper}>
                  <div className={styles.insightIconBg}></div>
                  <div className={styles.insightIcon}>
                    <item.icon size={32} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className={styles.insightTitle}>{item.title}</h3>
                <p className={styles.insightText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COST ADVANTAGE */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={classNames(styles.sectionHeader, styles.scrollReveal)}>
            <span className={styles.sectionTag}>Cost Advantage</span>
            <h2 className={styles.sectionTitle}>
              Why Specular Costs <span className={styles.highlight}>3–5×</span> Less
            </h2>
          </div>

          <div className={classNames(styles.costHero, styles.zoomRotate)}>
            <div className={styles.costStatContainer}>
              <div className={styles.costStatGlow}></div>
              <div className={styles.costStat}>
                <span className={styles.costNumber}>3–5</span>
                <span className={styles.costMultiplier}>×</span>
              </div>
              <div className={styles.costLabel}>Lower Cost</div>
            </div>
            <p className={styles.costSubtext}>This cost advantage is structural, not temporary.</p>
          </div>

          <div className={styles.costGrid}>
            {[
              {
                icon: CircuitBoard,
                title: "Removed Architectural Waste",
                text: "By offloading compute, we eliminate expensive, heat-generating embedded chips.",
              },
              {
                icon: Package,
                title: "Lower BOM Cost",
                text: "Simpler components mean a significantly reduced Bill of Materials.",
              },
              {
                icon: Cog,
                title: "Scalable Assembly",
                text: "Reduced complexity allows for easier manufacturing and rapid scaling.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={classNames(
                  styles.costCard,
                  styles.motionTrail,
                  styles.slideLeft,
                  styles[`staggerDelay${index + 1}`]
                )}
              >
                <div className={styles.costCardIcon}>
                  <item.icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className={styles.costCardTitle}>{item.title}</h3>
                <p className={styles.costCardText}>{item.text}</p>
                <div className={styles.costCardLine}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. USE CASES */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={classNames(styles.sectionHeader, styles.scrollReveal)}>
            <span className={styles.sectionTag}>Applications</span>
            <h2 className={styles.sectionTitle}>
              Where Specular Fits in the <span className={styles.highlight}>Real World</span>
            </h2>
          </div>
          <div className={styles.useCaseGrid}>
            {[
              {
                icon: Users,
                title: "Everyday Use",
                items: ["Hands-free context capture", "Memory recall assistant", "Learning and documentation"],
              },
              {
                icon: Heart,
                title: "Healthcare",
                items: ["Hands-free clinical documentation", "Training and education", "Workflow efficiency"],
              },
              {
                icon: Shield,
                title: "Defence & Security",
                items: ["Situational awareness", "Training review", "Controlled intelligence capture"],
              },
              {
                icon: Building2,
                title: "Enterprises & MNCs",
                items: ["Field operations", "Knowledge retention", "Training and audits"],
              },
              {
                icon: Search,
                title: "Investigation",
                items: ["Time-stamped evidence", "Searchable visual records", "Accountability"],
              },
              {
                icon: Factory,
                title: "Manufacturing",
                items: ["Process monitoring", "Quality control", "Safety training"],
              },
              {
                icon: GraduationCap,
                title: "Research & Education",
                items: ["AI and vision research", "System experimentation", "Academic deployment"],
              },
            ].map((item, index) => (
              <div
                key={index}
                className={classNames(
                  styles.useCaseCard,
                  styles.motionTrail,
                  index % 2 === 0 ? styles.slideRight : styles.slideLeft,
                  styles[`staggerDelay${(index % 4) + 1}`]
                )}
              >
                <div className={styles.useCaseHeader}>
                  <div className={styles.useCaseIcon}>
                    <item.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className={styles.useCaseTitle}>{item.title}</h3>
                </div>
                <ul className={styles.useCaseList}>
                  {item.items.map((listItem, i) => (
                    <li key={i}>{listItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY NOW */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={classNames(styles.sectionHeader, styles.scrollReveal)}>
            <span className={styles.sectionTag}>Timing</span>
            <h2 className={styles.sectionTitle}>
              <span className={styles.highlight}>Why Now</span>
            </h2>
            <p className={styles.sectionDescription}>
              Specular has moved beyond theory. We have a defined architecture, validated feasibility, and a clear path
              to production.
            </p>
          </div>

          <div className={styles.whyNowGrid}>
            <div className={classNames(styles.whyNowColumn, styles.slideLeft)}>
              <div className={styles.whyNowColumnHeader}>
                <Globe size={22} strokeWidth={1.5} />
                <h3>The Foundation</h3>
              </div>
              <ul className={styles.whyNowList}>
                {[
                  "Defined architecture validated through research",
                  "Technical feasibility confirmed",
                  "Clear differentiation from market failures",
                  "Scalable system foundation in place",
                ].map((text, index) => (
                  <li key={index} className={styles.whyNowItem}>
                    <div className={styles.whyNowItemIcon}>
                      <CheckCircle2 size={20} strokeWidth={1.5} />
                    </div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={classNames(styles.whyNowColumn, styles.slideRight)}>
              <div className={styles.whyNowColumnHeader}>
                <Target size={22} strokeWidth={1.5} />
                <h3>Funding Enables</h3>
              </div>
              <ul className={styles.whyNowList}>
                {[
                  "Refine hardware prototypes",
                  "Improve AI efficiency",
                  "Build production-ready systems",
                  "Run real-world pilots",
                  "Harden privacy and security",
                ].map((text, index) => (
                  <li key={index} className={styles.whyNowItem}>
                    <div className={styles.whyNowItemIcon}>
                      <Target size={20} strokeWidth={1.5} />
                    </div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INVESTOR TAKEAWAY */}
      <section id="investment" className={styles.section}>
        <div className={styles.container}>
          <div className={classNames(styles.sectionHeader, styles.scrollReveal)}>
            <span className={styles.sectionTag}>Investment</span>
            <h2 className={styles.sectionTitle}>
              What <span className={styles.highlight}>Funding Specular</span> Enables
            </h2>
            <p className={styles.sectionDescription}>
              This is not a short-term gadget play. It is a long-term platform foundation.
            </p>
          </div>

          <div className={styles.takeawayGrid}>
            {[
              { icon: Lightbulb, title: "Smarter System Design" },
              { icon: TrendingUp, title: "Affordable Intelligent Wearables" },
              { icon: Lock, title: "Privacy-First Intelligence" },
              { icon: Sparkles, title: "Long-Term Platform Potential" },
            ].map((item, index) => (
              <div
                key={index}
                className={classNames(
                  styles.takeawayCard,
                  styles.motionTrail,
                  styles.popIn,
                  styles[`staggerDelay${index + 1}`]
                )}
              >
                <div className={styles.takeawayIconWrapper}>
                  <div className={styles.takeawayIconGlow}></div>
                  <div className={styles.takeawayIcon}>
                    <item.icon size={36} strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className={styles.takeawayTitle}>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CLOSING */}
      <section className={classNames(styles.section, styles.closing)}>
        <div className={styles.closingBackground}>
          <div className={styles.closingGlow}></div>
          <div className={styles.closingParticles}>
            <span className={styles.closingParticle}></span>
            <span className={styles.closingParticle}></span>
            <span className={styles.closingParticle}></span>
            <span className={styles.closingParticle}></span>
          </div>
        </div>
        <div className={styles.container}>
          <h2 className={classNames(styles.closingTitle, styles.scrollReveal)}>
            Specular is not about adding more hardware.
            <br />
            It is about{" "}
            <span className={classNames(styles.closingHighlight, styles.highlight)}>building smarter systems</span>.
          </h2>
          <p className={classNames(styles.closingText, styles.scrollReveal, styles.staggerDelay1)}>
            <span className={styles.highlight}>Funding</span> Specular means enabling the next practical step in{" "}
            <span className={styles.highlight}>Smart Glasses</span>.
          </p>
          <div className={classNames(styles.scrollReveal, styles.staggerDelay2)}>
            <button className={styles.primaryButton}>
              <span>Support the Project</span>
              <ChevronRight size={18} />
            </button>
          </div>
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
