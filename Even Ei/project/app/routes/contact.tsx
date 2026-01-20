import type { Route } from "./+types/contact";
import { Link } from "react-router";
import {
  Mail,
  Users,
  Code2,
  Handshake,
  Building2,
  GraduationCap,
  MessageSquare,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import PixelBlast from "~/components/pixel-blast/pixel-blast";
import { Footer } from "~/components/footer/footer";
import { AnimatedSection, AnimatedGroup } from "~/components/animated-section/animated-section";
import styles from "./contact.module.css";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Contact - EvenEi" },
    {
      name: "description",
      content:
        "We welcome conversations with researchers, developers, partners, investors, and institutions interested in Everyday Intelligence.",
    },
  ];
}

const audiences = [
  { icon: <GraduationCap />, text: "Researchers" },
  { icon: <Code2 />, text: "Developers" },
  { icon: <Handshake />, text: "Partners" },
  { icon: <Building2 />, text: "Investors" },
  { icon: <Users />, text: "Institutions" },
];

const contactMethods = [
  {
    icon: <Mail />,
    title: "General Inquiries",
    text: "For general questions about EvenEi, our work, or potential collaboration opportunities.",
  },
  {
    icon: <Handshake />,
    title: "Partnerships",
    text: "Interested in partnering with us? We're open to meaningful collaborations that align with our mission.",
  },
  {
    icon: <MessageSquare />,
    title: "Press & Media",
    text: "For press inquiries, interviews, or media-related questions about EvenEi and our technology.",
  },
];

export default function Contact() {
  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <PixelBlast
            color="#4a4a4a"
            pixelSize={3}
            patternScale={2}
            patternDensity={1}
            enableRipples={true}
            rippleSpeed={0.3}
            rippleThickness={0.1}
            rippleIntensityScale={1}
            edgeFade={0.5}
            speed={0.5}
          />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <AnimatedSection animation="slide-down" delay={0}>
              <div className={styles.breadcrumb}>
                <Link to="/" className={styles.breadcrumbHome}>Home</Link>
                <ChevronRight className={styles.breadcrumbSeparator} size={14} />
                <span className={styles.breadcrumbCurrent}>Contact</span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="elastic" delay={100}>
              <h1 className={styles.heroTitle}>
                Get In <span className={styles.heroTitleAccent}>Touch</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="slide-up" delay={200}>
              <p className={styles.heroDescription}>
                We welcome conversations with researchers, developers, partners, investors, and institutions
                interested in Everyday Intelligence.
              </p>
            </AnimatedSection>
          </div>

          <div className={styles.heroRight}>
            <AnimatedGroup animation="glide" baseDelay={300} staggerDelay={80}>
              {audiences.map((audience) => (
                <div key={audience.text} className={styles.audienceCard}>
                  <div className={styles.audienceIcon}>{audience.icon}</div>
                  <span className={styles.audienceText}>{audience.text}</span>
                </div>
              ))}
            </AnimatedGroup>
          </div>
        </div>
      </section>

      {/* Methods Section */}
      <section className={styles.methodsSection}>
        <div className={styles.methodsContent}>
          <div className={styles.methodsHeader}>
            <AnimatedSection animation="slide-down" delay={0}>
              <span className={styles.sectionLabelDark}>
                <span className={styles.labelDotDark} />
                How to Reach Us
              </span>
            </AnimatedSection>
            <AnimatedSection animation="slide-up" delay={100}>
              <h2 className={styles.sectionTitleDark}>
                Contact <span className={styles.titleAccent}>Methods</span>
              </h2>
            </AnimatedSection>
          </div>

          <AnimatedGroup animation="flip" baseDelay={200} staggerDelay={150} className={styles.methodsGrid}>
            {contactMethods.map((method) => (
              <div key={method.title} className={styles.methodCard}>
                <div className={styles.methodIcon}>{method.icon}</div>
                <h3 className={styles.methodTitle}>{method.title}</h3>
                <p className={styles.methodText}>{method.text}</p>
              </div>
            ))}
          </AnimatedGroup>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophySection}>
        <div className={styles.philosophyContent}>
          <AnimatedSection animation="zoom" delay={0}>
            <h2 className={styles.philosophyQuote}>
              EvenEi values <span className={styles.philosophyAccent}>meaningful conversations</span> over cold outreach.
            </h2>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={200}>
            <p className={styles.philosophySubtext}>
              If you are interested in Everyday Intelligence, intelligent systems, or collaboration, reach out to us.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <AnimatedSection animation="slide-up" delay={0}>
            <h2 className={styles.ctaTitle}>Ready to explore Everyday Intelligence?</h2>
          </AnimatedSection>
          <AnimatedSection animation="slide-up" delay={100}>
            <p className={styles.ctaText}>Return to our homepage to learn more about our mission and work.</p>
          </AnimatedSection>
          <AnimatedSection animation="wave" delay={200}>
            <Link to="/" className={styles.ctaButton}>
              <span>Back to Home</span>
              <ArrowRight className={styles.ctaIcon} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
}
