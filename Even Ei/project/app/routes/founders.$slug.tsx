
import type { Route } from "./+types/founders.$slug";
import { Link } from "react-router";
import classNames from "classnames";
import {
    Github,
    Linkedin,
    Twitter,
    ChevronRight,
    ArrowRight,
} from "lucide-react";
import PixelBlast from "~/components/pixel-blast/pixel-blast";
import { Footer } from "~/components/footer/footer";
import { AnimatedSection } from "~/components/animated-section/animated-section";
import styles from "./founders-details.module.css";

const foundersData: Record<string, {
    name: string;
    role: string;
    bio: string;
    longBio: string[];
    image: string;
    social: { twitter: string; linkedin: string; github: string };
    vision: string;
}> = {
    "amogh-v-k": {
        name: "Amogh V K",
        role: "Founder",
        bio: "Engineer and system thinker focused on building intelligent systems that combine hardware, software, and AI with real-world usability and ethical design.",
        longBio: [
            "Amogh V K is a multidisciplinary engineer with a deep focus on the intersection of hardware, software, and artificial intelligence. His work is driven by the belief that true intelligence in systems comes from their ability to integrate seamlessly into human life, rather than demanding attention.",
            "With a background in building complex systems, Amogh leads the architectural vision at EvenEi. He is responsible for the core technological frameworks that power Everyday Intelligence, ensuring that every layer—from data processing to user interaction—adheres to strict principles of privacy and efficiency.",
            "His philosophy centers on 'invisible impact'—creating tools that are powerful enough to transform workflows but subtle enough to remain unnoticed until needed."
        ],
        image: "/founders/amogh.jpeg",
        social: { twitter: "#", linkedin: "#", github: "#" },
        vision: "Intelligence should be infrastructure—reliable, ever-present, and completely transparent."
    },
    "lassya-m-kotian": {
        name: "Lassya M Kotian",
        role: "Co-Founder",
        bio: "Software engineering student with strengths in Java, Python, and UI/UX design, focused on building clean and intuitive user experiences.",
        longBio: [
            "Lassya M Kotian brings a unique blend of technical prowess and design sensibility to EvenEi. As a software engineering student with expertise in Java and Python, she understands the code that drives applications. However, her true passion lies in how humans experience that code.",
            "She champions the user in every technical decision, ensuring that EvenEi's systems are not just functional but intuitive and delightful to use. Her focus on UI/UX design is instrumental in translating complex AI capabilities into simple, approachable interfaces.",
            "Lassya believes that the future of technology belongs to systems that can bridge the gap between powerful algorithms and human intent with grace and clarity."
        ],
        image: "/founders/lassya.jpeg",
        social: { twitter: "#", linkedin: "#", github: "#" },
        vision: "Great technology feels like magic because it anticipates your needs before you even articulate them."
    }
};

export function meta({ params }: Route.MetaArgs) {
    const founder = foundersData[params.slug as string];
    return [
        { title: founder ? `${founder.name} - EvenEi Founder` : "Founder Not Found - EvenEi" },
        {
            name: "description",
            content: founder ? founder.bio : "Founder profile page.",
        },
    ];
}

export async function loader({ params }: Route.LoaderArgs) {
    const founder = foundersData[params.slug];
    if (!founder) {
        throw new Response("Not Found", { status: 404 });
    }
    return { founder };
}

export default function FounderDetails({ loaderData }: Route.ComponentProps) {
    const { founder } = loaderData;

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
                    <AnimatedSection animation="slide-down" delay={0}>
                        <div className={styles.breadcrumb}>
                            <Link to="/" className={styles.breadcrumbHome}>Home</Link>
                            <ChevronRight className={styles.breadcrumbSeparator} size={14} />
                            <Link to="/founders" className={styles.breadcrumbHome}>Founders</Link>
                            <ChevronRight className={styles.breadcrumbSeparator} size={14} />
                            <span className={styles.breadcrumbCurrent}>{founder.name}</span>
                        </div>
                    </AnimatedSection>

                    <div className={styles.profileHeader}>
                        <AnimatedSection animation="slide-right" delay={100} className={styles.imageSection}>
                            <div className={styles.imageWrapper}>
                                <img
                                    src={founder.image}
                                    alt={founder.name}
                                    className={classNames(
                                        styles.profileImage,
                                        founder.name === "Amogh V K" && styles.profileImageAmogh,
                                        founder.name === "Lassya M Kotian" && styles.profileImageLassya
                                    )}
                                />
                            </div>
                        </AnimatedSection>

                        <div className={styles.profileInfo}>
                            <AnimatedSection animation="slide-left" delay={200}>
                                <h1 className={styles.profileName}>{founder.name}</h1>
                                <p className={styles.profileRole}>{founder.role}</p>
                            </AnimatedSection>

                            <AnimatedSection animation="slide-up" delay={300}>
                                <div className={styles.socialLinks}>
                                    <a href={founder.social.twitter} className={styles.socialLink} aria-label="Twitter">
                                        <Twitter />
                                    </a>
                                    <a href={founder.social.linkedin} className={styles.socialLink} aria-label="LinkedIn">
                                        <Linkedin />
                                    </a>
                                    <a href={founder.social.github} className={styles.socialLink} aria-label="GitHub">
                                        <Github />
                                    </a>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bio Section */}
            <section className={styles.bioSection}>
                <div className={styles.bioContent}>
                    <div className={styles.bioText}>
                        <AnimatedSection animation="slide-up" delay={400}>
                            <h2 className={styles.sectionTitle}>Biography</h2>
                        </AnimatedSection>
                        {founder.longBio.map((paragraph, index) => (
                            <AnimatedSection key={index} animation="slide-up" delay={500 + (index * 100)}>
                                <p className={styles.bioParagraph}>{paragraph}</p>
                            </AnimatedSection>
                        ))}
                    </div>

                    <div className={styles.visionBox}>
                        <AnimatedSection animation="zoom" delay={600}>
                            <h3 className={styles.visionTitle}>Personal Vision</h3>
                            <p className={styles.visionQuote}>"{founder.vision}"</p>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
