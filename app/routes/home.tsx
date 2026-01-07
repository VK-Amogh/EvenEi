import {
  Scale,
  DollarSign,
  BatteryLow,
  TrendingDown,
  Wrench,
  Brain,
  Feather,
  Zap,
  Wallet,
  RefreshCw,
  Glasses,
  Cpu,
  Radio,
  Smartphone,
  User,
  Link2,
  RotateCcw,
  Bot,
  Search,
  Lock,
  HardDrive,
  Settings,
  BarChart3,
  Camera,
  BookOpen,
  ClipboardList,
  Lightbulb,
  FlaskConical,
  CheckCircle2,
  Shield,
  Eye,
  Layers,
  Sparkles,
  CircuitBoard,
  Target,
  MousePointer,
  ChevronDown
} from 'lucide-react';
import { FaultyTerminal } from '~/components/faulty-terminal/faulty-terminal';
import { BlurText } from '~/components/blur-text/blur-text';
import { ScrollVelocity } from '~/components/scroll-velocity/scroll-velocity';
import styles from './home.module.css';

export function meta() {
  return [
    { title: "SpecEI - AI-Powered Smart Glasses Project" },
    { name: "description", content: "SpecEI is a research and engineering project exploring how intelligent software and thoughtful system design can make smart glasses lightweight, practical, and accessible." },
  ];
}

export default function Home() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.page}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <img
          src="/logo_final_direct.png"
          alt="SpecEI"
          className={styles.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        />
        <ul className={styles.navLinks}>
          <li><a href="#problem" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('problem'); }}>Problem</a></li>
          <li><a href="#architecture" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('architecture'); }}>Architecture</a></li>
          <li><a href="#models" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('models'); }}>Models</a></li>
          <li><a href="#technology" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('technology'); }}>Technology</a></li>
          <li><a href="#privacy" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('privacy'); }}>Privacy</a></li>
          <li><a href="#funding" className={styles.navLink} onClick={(e) => { e.preventDefault(); scrollToSection('funding'); }}>Support</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <div className={styles.heroBackgroundEffect}>
            <FaultyTerminal
              tint="#00ffb3"
              scale={1}
              gridMul={[2, 1]}
              digitSize={1.5}
              timeScale={0.3}
              scanlineIntensity={0.3}
              glitchAmount={1}
              flickerAmount={1}
              curvature={0.15}
              mouseReact={true}
              mouseStrength={0.25}
              pageLoadAnimation={true}
              brightness={0.8}
            />
          </div>
          <div className={styles.heroOverlay} />
        </div>

        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            <div className={styles.projectLabel}>PROJECT:</div>
            <div className={styles.specularLabel}>SPECULAR</div>
          </h1>
          <div className={styles.byContainer}>
            <span className={styles.byText}>by</span>
            <img src="/logo_final_direct.png" alt="EvenEi" className={styles.heroLogo} />
          </div>
        </div>

        <div className={styles.scrollIndicator}>
          <span className={styles.scrollText}>Scroll to explore</span>
          <ChevronDown size={20} className={styles.scrollIcon} />
        </div>
      </section>

      {/* Scroll Velocity Marquee */}
      <div className={styles.marqueeSection}>
        <ScrollVelocity
          texts={['SPECEI', 'INTELLIGENT VISION', 'SOFTWARE FIRST', 'ACCESSIBLE DESIGN']}
          velocity={80}
          className={styles.marqueeText}
        />
      </div>

      {/* Problem Section */}
      <section id="problem" className={`${styles.section} ${styles.problemSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>The Problem</span>
            <h2 className={styles.sectionTitle}>Why Current Smart Glasses Fail</h2>
            <p className={styles.sectionDesc}>
              Most smart glasses today face the same fundamental issues. As a result, they remain niche, costly, and impractical for everyday use. SpecEI exists to challenge this approach.
            </p>
          </div>
          <div className={styles.problemGrid}>
            <div className={styles.problemCard}>
              <Scale size={28} className={styles.problemIcon} />
              <p className={styles.problemText}>They are bulky and uncomfortable for extended wear</p>
            </div>
            <div className={styles.problemCard}>
              <DollarSign size={28} className={styles.problemIcon} />
              <p className={styles.problemText}>They rely on expensive specialized hardware</p>
            </div>
            <div className={styles.problemCard}>
              <BatteryLow size={28} className={styles.problemIcon} />
              <p className={styles.problemText}>They suffer from poor battery life and heat issues</p>
            </div>
            <div className={styles.problemCard}>
              <TrendingDown size={28} className={styles.problemIcon} />
              <p className={styles.problemText}>They become obsolete quickly after purchase</p>
            </div>
            <div className={styles.problemCard}>
              <Wrench size={28} className={styles.problemIcon} />
              <p className={styles.problemText}>They are difficult to improve after launch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Idea Section */}
      <section className={`${styles.section} ${styles.coreIdeaSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>The Core Idea</span>
            <h2 className={styles.sectionTitle}>Software-First Intelligence</h2>
            <p className={styles.sectionDesc}>
              SpecEI is based on one core principle: Do not make hardware smarter than it needs to be. Make the system smarter instead.
            </p>
          </div>
          <div className={styles.coreIdeaContent}>
            <div className={styles.coreIdeaVisual}>
              <div className={styles.coreIdeaCircle}>
                <Brain size={72} className={styles.coreIdeaIcon} />
              </div>
            </div>
            <div>
              <div className={styles.coreIdeaPrinciples}>
                <div className={styles.corePrinciple}>
                  <p className={styles.corePrincipleText}>
                    SpecEI distributes intelligence across lightweight glasses hardware, efficient embedded firmware, a powerful companion mobile application, and AI-driven software intelligence.
                  </p>
                </div>
              </div>
              <div className={styles.coreFeatures}>
                <div className={styles.coreFeature}>
                  <Feather size={18} className={styles.coreFeatureIcon} />
                  <span className={styles.coreFeatureText}>Lightweight Design</span>
                </div>
                <div className={styles.coreFeature}>
                  <Zap size={18} className={styles.coreFeatureIcon} />
                  <span className={styles.coreFeatureText}>Energy Efficient</span>
                </div>
                <div className={styles.coreFeature}>
                  <Wallet size={18} className={styles.coreFeatureIcon} />
                  <span className={styles.coreFeatureText}>Affordable</span>
                </div>
                <div className={styles.coreFeature}>
                  <RefreshCw size={18} className={styles.coreFeatureIcon} />
                  <span className={styles.coreFeatureText}>Upgradeable</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Section */}
      <section id="architecture" className={`${styles.section} ${styles.architectureSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>System Architecture</span>
            <h2 className={styles.sectionTitle}>Intelligence Flow</h2>
            <p className={styles.sectionDesc}>
              This architecture keeps the glasses simple while enabling advanced intelligence. Each component serves a specific purpose in the system.
            </p>
          </div>
          <div className={styles.flowchartContainer}>
            <div className={styles.flowchartGrid}>
              <div className={styles.flowNode}>
                <Glasses size={32} className={styles.flowNodeIcon} />
                <span className={styles.flowNodeTitle}>Glasses Hardware</span>
                <span className={styles.flowNodeDesc}>Captures visual and audio data</span>
              </div>
              <div className={styles.flowArrow}><ChevronDown size={22} style={{ transform: 'rotate(-90deg)' }} /></div>
              <div className={styles.flowNode}>
                <Cpu size={32} className={styles.flowNodeIcon} />
                <span className={styles.flowNodeTitle}>Embedded Firmware</span>
                <span className={styles.flowNodeDesc}>Buffering, power management</span>
              </div>
              <div className={styles.flowArrow}><ChevronDown size={22} style={{ transform: 'rotate(-90deg)' }} /></div>
              <div className={styles.flowNode}>
                <Radio size={32} className={styles.flowNodeIcon} />
                <span className={styles.flowNodeTitle}>Wireless Comm</span>
                <span className={styles.flowNodeDesc}>Securely transmits data</span>
              </div>
              <div className={styles.flowArrow}><ChevronDown size={22} style={{ transform: 'rotate(-90deg)' }} /></div>
              <div className={styles.flowNode}>
                <Smartphone size={32} className={styles.flowNodeIcon} />
                <span className={styles.flowNodeTitle}>Companion App</span>
                <span className={styles.flowNodeDesc}>AI processing, storage</span>
              </div>
              <div className={styles.flowArrow}><ChevronDown size={22} style={{ transform: 'rotate(-90deg)' }} /></div>
              <div className={styles.flowNode}>
                <Brain size={32} className={styles.flowNodeIcon} />
                <span className={styles.flowNodeTitle}>AI Intelligence</span>
                <span className={styles.flowNodeDesc}>Insights, memory recall</span>
              </div>
              <div className={styles.flowArrow}><ChevronDown size={22} style={{ transform: 'rotate(-90deg)' }} /></div>
              <div className={styles.flowNode}>
                <User size={32} className={styles.flowNodeIcon} />
                <span className={styles.flowNodeTitle}>User Interaction</span>
                <span className={styles.flowNodeDesc}>Audio or app response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className={`${styles.section} ${styles.modelsSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Products</span>
            <h2 className={styles.sectionTitle}>SpecEI Models</h2>
            <p className={styles.sectionDesc}>
              SpecEI is designed as a modular project with three configurations, each optimized for different use cases and experimentation levels.
            </p>
          </div>
          <div className={styles.modelsGrid}>
            <div className={styles.modelCard}>
              <span className={styles.modelBadge}>Essential</span>
              <h3 className={styles.modelName}>SpecEI Basic</h3>
              <p className={styles.modelTagline}>A minimal and lightweight configuration focused on core experimentation.</p>
              <span className={styles.modelPrice}>Est. USD $120 - $150</span>
              <ul className={styles.modelFeatures}>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Camera and microphone</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>No integrated speakers</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>External audio support</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Lowest power consumption</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Maximum comfort</span>
                </li>
              </ul>
            </div>
            <div className={styles.modelCard}>
              <span className={styles.modelBadge}>Balanced</span>
              <h3 className={styles.modelName}>SpecEI Pro</h3>
              <p className={styles.modelTagline}>A balanced configuration designed for everyday usability.</p>
              <span className={styles.modelPrice}>Est. USD $180 - $220</span>
              <ul className={styles.modelFeatures}>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Improved camera</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Integrated directional speakers</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Dual microphones</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Better interaction and feedback</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Still lightweight and wearable</span>
                </li>
              </ul>
            </div>
            <div className={styles.modelCard}>
              <span className={styles.modelBadge}>Advanced</span>
              <h3 className={styles.modelName}>SpecEI Max</h3>
              <p className={styles.modelTagline}>An advanced configuration designed for deeper experimentation.</p>
              <span className={styles.modelPrice}>Est. USD $250 - $300</span>
              <ul className={styles.modelFeatures}>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>High quality camera</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Advanced sensor suite</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Integrated spatial audio</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>More onboard storage</span>
                </li>
                <li className={styles.modelFeature}>
                  <CheckCircle2 size={16} className={styles.featureIcon} />
                  <span className={styles.featureText}>Enhanced interaction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className={`${styles.section} ${styles.techSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Technology</span>
            <h2 className={styles.sectionTitle}>Software and AI Intelligence</h2>
            <p className={styles.sectionDesc}>
              The intelligence of SpecEI lives primarily in software. Processing is split intelligently: on-device logic for efficiency, mobile-based AI for depth.
            </p>
          </div>
          <div className={styles.techContent}>
            <div className={styles.techVisual}>
              <div className={styles.techDiagram}>
                <div className={`${styles.techNode} ${styles.techNode1}`}>Visual<br />Understanding</div>
                <div className={`${styles.techNode} ${styles.techNode2}`}>Context<br />Recognition</div>
                <div className={`${styles.techNode} ${styles.techNode3}`}>Memory<br />Indexing</div>
                <div className={`${styles.techNode} ${styles.techNode4}`}>Intelligent<br />Filtering</div>
                <div className={`${styles.techNode} ${styles.techNode5}`}>On-Device<br />Logic</div>
                <div className={`${styles.techNode} ${styles.techNode6}`}>Mobile<br />AI</div>
                <div className={`${styles.techNode} ${styles.techNodeCenter}`}>SpecEI<br />Core</div>
              </div>
            </div>
            <div className={styles.techFeatures}>
              <div className={styles.techFeature}>
                <h4 className={styles.techFeatureTitle}>Visual Understanding</h4>
                <p className={styles.techFeatureDesc}>
                  AI-powered image processing for real-time scene understanding, object recognition, and contextual awareness.
                </p>
              </div>
              <div className={styles.techFeature}>
                <h4 className={styles.techFeatureTitle}>Context Recognition</h4>
                <p className={styles.techFeatureDesc}>
                  Intelligent context awareness that adapts to your environment, activities, and preferences automatically.
                </p>
              </div>
              <div className={styles.techFeature}>
                <h4 className={styles.techFeatureTitle}>Memory Indexing</h4>
                <p className={styles.techFeatureDesc}>
                  Searchable visual memory that organizes and retrieves moments intelligently when you need them.
                </p>
              </div>
              <div className={styles.techFeature}>
                <h4 className={styles.techFeatureTitle}>Continuous Improvement</h4>
                <p className={styles.techFeatureDesc}>
                  Software-driven architecture allows continuous improvement without changing hardware.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Companion App Section */}
      <section className={`${styles.section} ${styles.appSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Mobile App</span>
            <h2 className={styles.sectionTitle}>Companion Mobile Application</h2>
            <p className={styles.sectionDesc}>
              The mobile app is the control and intelligence hub of SpecEI. The glasses sense. The app understands. The system responds.
            </p>
          </div>
          <div className={styles.appGrid}>
            <div className={styles.appCard}>
              <Link2 size={32} className={styles.appIcon} />
              <h4 className={styles.appTitle}>Pairing</h4>
              <p className={styles.appDesc}>Device pairing and management</p>
            </div>
            <div className={styles.appCard}>
              <RotateCcw size={32} className={styles.appIcon} />
              <h4 className={styles.appTitle}>Sync</h4>
              <p className={styles.appDesc}>Voice and video synchronization</p>
            </div>
            <div className={styles.appCard}>
              <Bot size={32} className={styles.appIcon} />
              <h4 className={styles.appTitle}>AI Assistant</h4>
              <p className={styles.appDesc}>Natural language interaction</p>
            </div>
            <div className={styles.appCard}>
              <Search size={32} className={styles.appIcon} />
              <h4 className={styles.appTitle}>Search</h4>
              <p className={styles.appDesc}>Searchable memory and context recall</p>
            </div>
            <div className={styles.appCard}>
              <Lock size={32} className={styles.appIcon} />
              <h4 className={styles.appTitle}>Privacy</h4>
              <p className={styles.appDesc}>Privacy and data controls</p>
            </div>
            <div className={styles.appCard}>
              <HardDrive size={32} className={styles.appIcon} />
              <h4 className={styles.appTitle}>Storage</h4>
              <p className={styles.appDesc}>Secure data management</p>
            </div>
            <div className={styles.appCard}>
              <Settings size={32} className={styles.appIcon} />
              <h4 className={styles.appTitle}>Settings</h4>
              <p className={styles.appDesc}>Unified control center</p>
            </div>
            <div className={styles.appCard}>
              <BarChart3 size={32} className={styles.appIcon} />
              <h4 className={styles.appTitle}>Analytics</h4>
              <p className={styles.appDesc}>Usage insights and stats</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className={`${styles.section} ${styles.useCasesSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Applications</span>
            <h2 className={styles.sectionTitle}>Realistic Use Cases</h2>
            <p className={styles.sectionDesc}>
              SpecEI is designed for realistic scenarios. It avoids exaggerated claims and focuses on achievable intelligence.
            </p>
          </div>
          <div className={styles.useCasesGrid}>
            <div className={styles.useCase}>
              <Camera size={36} className={styles.useCaseIcon} />
              <h4 className={styles.useCaseTitle}>Hands-Free Capture</h4>
              <p className={styles.useCaseDesc}>
                Capture information without interrupting your activities. Perfect for documentation and memory.
              </p>
            </div>
            <div className={styles.useCase}>
              <Brain size={36} className={styles.useCaseIcon} />
              <h4 className={styles.useCaseTitle}>Contextual Recall</h4>
              <p className={styles.useCaseDesc}>
                Intelligent memory retrieval based on context, time, and relevance.
              </p>
            </div>
            <div className={styles.useCase}>
              <BookOpen size={36} className={styles.useCaseIcon} />
              <h4 className={styles.useCaseTitle}>Learning</h4>
              <p className={styles.useCaseDesc}>
                Interactive learning experiences with real-time explanations and visual recognition.
              </p>
            </div>
            <div className={styles.useCase}>
              <ClipboardList size={36} className={styles.useCaseIcon} />
              <h4 className={styles.useCaseTitle}>Documentation</h4>
              <p className={styles.useCaseDesc}>
                Professional-grade capture for field work, inspections, and technical documentation.
              </p>
            </div>
            <div className={styles.useCase}>
              <Lightbulb size={36} className={styles.useCaseIcon} />
              <h4 className={styles.useCaseTitle}>Daily Assistance</h4>
              <p className={styles.useCaseDesc}>
                Everyday help with reminders, information, and contextual awareness.
              </p>
            </div>
            <div className={styles.useCase}>
              <FlaskConical size={36} className={styles.useCaseIcon} />
              <h4 className={styles.useCaseTitle}>Experimentation</h4>
              <p className={styles.useCaseDesc}>
                AI and system experimentation for developers and researchers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section id="privacy" className={`${styles.section} ${styles.privacySection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Trust</span>
            <h2 className={styles.sectionTitle}>Privacy and Ethics</h2>
            <p className={styles.sectionDesc}>
              Privacy is treated as an engineering requirement. SpecEI is designed to respect user trust by default.
            </p>
          </div>
          <div className={styles.privacyContent}>
            <div className={styles.privacyPoints}>
              <div className={styles.privacyPoint}>
                <Lock size={28} className={styles.privacyIcon} />
                <div className={styles.privacyText}>
                  <h4 className={styles.privacyTitle}>User-Controlled Data Flow</h4>
                  <p className={styles.privacyDesc}>Complete control over what data is collected, stored, and shared.</p>
                </div>
              </div>
              <div className={styles.privacyPoint}>
                <CheckCircle2 size={28} className={styles.privacyIcon} />
                <div className={styles.privacyText}>
                  <h4 className={styles.privacyTitle}>Explicit Permissions</h4>
                  <p className={styles.privacyDesc}>Every action requires clear user consent. No hidden data collection.</p>
                </div>
              </div>
              <div className={styles.privacyPoint}>
                <Smartphone size={28} className={styles.privacyIcon} />
                <div className={styles.privacyText}>
                  <h4 className={styles.privacyTitle}>Local Processing</h4>
                  <p className={styles.privacyDesc}>Sensitive data processed on-device whenever possible.</p>
                </div>
              </div>
              <div className={styles.privacyPoint}>
                <Eye size={28} className={styles.privacyIcon} />
                <div className={styles.privacyText}>
                  <h4 className={styles.privacyTitle}>Transparent Behavior</h4>
                  <p className={styles.privacyDesc}>Clear indicators of what the system is doing at all times.</p>
                </div>
              </div>
            </div>
            <div className={styles.privacyVisual}>
              <div className={styles.shieldContainer}>
                <div className={styles.shield}>
                  <Shield size={72} className={styles.shieldIcon} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className={`${styles.section} ${styles.comparisonSection}`}>
        <div className={styles.sectionInner}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Advantage</span>
            <h2 className={styles.sectionTitle}>Why SpecEI Is Different</h2>
            <p className={styles.sectionDesc}>
              Most existing smart glasses use a hardware-heavy intelligence model. SpecEI takes a fundamentally different approach.
            </p>
          </div>
          <div className={styles.comparisonGrid}>
            <div className={styles.comparisonCard}>
              <h4 className={styles.comparisonTitle}>Architecture Difference</h4>
              <div className={styles.comparisonPoints}>
                <div className={styles.comparisonPoint}>
                  <Layers size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Software-first intelligence model</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <Wallet size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Lower hardware cost</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <Feather size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Lighter frames</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <Zap size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Better energy efficiency</span>
                </div>
              </div>
            </div>
            <div className={styles.comparisonCard}>
              <h4 className={styles.comparisonTitle}>Intelligence and Upgradability</h4>
              <div className={styles.comparisonPoints}>
                <div className={styles.comparisonPoint}>
                  <Sparkles size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Improves over time through AI updates</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <CircuitBoard size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Software optimization</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <RefreshCw size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>System refinement</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <Target size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Hardware remains stable while intelligence evolves</span>
                </div>
              </div>
            </div>
            <div className={styles.comparisonCard}>
              <h4 className={styles.comparisonTitle}>Cost and Accessibility</h4>
              <div className={styles.comparisonPoints}>
                <div className={styles.comparisonPoint}>
                  <DollarSign size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Reduce hardware cost</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <Brain size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Shift value to software</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <FlaskConical size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Enable affordable experimentation</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <MousePointer size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Lower entry barriers</span>
                </div>
              </div>
            </div>
            <div className={styles.comparisonCard}>
              <h4 className={styles.comparisonTitle}>Hardware Philosophy</h4>
              <div className={styles.comparisonPoints}>
                <div className={styles.comparisonPoint}>
                  <Feather size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Lightweight frame design</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <Zap size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Low heat generation</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <BatteryLow size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Battery efficiency priority</span>
                </div>
                <div className={styles.comparisonPoint}>
                  <Glasses size={16} className={styles.comparisonPointIcon} />
                  <span className={styles.comparisonPointText}>Long-term wearability</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Section */}
      <section id="funding" className={`${styles.section} ${styles.fundingSection}`}>
        <div className={styles.fundingContent}>
          <span className={styles.sectionTag}>Support</span>
          <h2 className={styles.fundingTitle}>
            Why SpecEI
            <span className={styles.fundingTitleAccent}>Deserves Funding</span>
          </h2>
          <p className={styles.fundingDesc}>
            SpecEI is currently a research and development project. What makes it valuable is not polish - it is architecture, direction, and system thinking. SpecEI represents a scalable and ethical direction for intelligent wearables.
          </p>
          <div className={styles.fundingPoints}>
            <div className={styles.fundingPoint}>
              <CircuitBoard size={18} className={styles.fundingPointIcon} />
              <span className={styles.fundingPointText}>Refine hardware prototypes</span>
            </div>
            <div className={styles.fundingPoint}>
              <Zap size={18} className={styles.fundingPointIcon} />
              <span className={styles.fundingPointText}>Optimize power and thermals</span>
            </div>
            <div className={styles.fundingPoint}>
              <Brain size={18} className={styles.fundingPointIcon} />
              <span className={styles.fundingPointText}>Advance AI efficiency</span>
            </div>
            <div className={styles.fundingPoint}>
              <Smartphone size={18} className={styles.fundingPointIcon} />
              <span className={styles.fundingPointText}>Improve mobile intelligence platform</span>
            </div>
            <div className={styles.fundingPoint}>
              <Target size={18} className={styles.fundingPointIcon} />
              <span className={styles.fundingPointText}>Conduct real-world testing</span>
            </div>
            <div className={styles.fundingPoint}>
              <Layers size={18} className={styles.fundingPointIcon} />
              <span className={styles.fundingPointText}>Scale production capabilities</span>
            </div>
          </div>
          <div className={styles.fundingButtons}>
            <button className={styles.btnPrimary}>Support the Project</button>
            <button className={styles.btnSecondary}>Learn More</button>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className={`${styles.section} ${styles.closingSection}`}>
        <div className={styles.closingContent}>
          <span className={styles.sectionTag}>Vision</span>
          <h2 className={styles.sectionTitle}>A Step Toward Wearables That Actually Work</h2>
          <p className={styles.sectionDesc} style={{ margin: '0 auto' }}>
            SpecEI is not just about smart glasses. It is about better system design, smarter intelligence distribution, practical AI deployment, and responsible engineering.
          </p>
          <div className={styles.closingPrinciples}>
            <span className={styles.closingPrinciple}>Better System Design</span>
            <span className={styles.closingPrinciple}>Smarter Intelligence Distribution</span>
            <span className={styles.closingPrinciple}>Practical AI Deployment</span>
            <span className={styles.closingPrinciple}>Responsible Engineering</span>
          </div>
          <div className={styles.closingButtons}>
            <button className={styles.btnPrimary}>Explore the Architecture</button>
            <button className={styles.btnSecondary}>Understand the System</button>
            <button className={styles.btnSecondary}>Support the Project</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <img src="/logo_final_direct.png" alt="SpecEI" className={styles.footerLogoImage} />
            <span className={styles.footerTagline}>Intelligent Vision, Made Accessible</span>
          </div>
          <div className={styles.footerLinks}>
            <a href="#problem" className={styles.footerLink}>Problem</a>
            <a href="#architecture" className={styles.footerLink}>Architecture</a>
            <a href="#models" className={styles.footerLink}>Models</a>
            <a href="#technology" className={styles.footerLink}>Technology</a>
            <a href="#privacy" className={styles.footerLink}>Privacy</a>
          </div>
          <span className={styles.footerCopyright}>2025 SpecEI Project. All rights reserved.</span>
        </div>
      </footer>
    </div>
  );
}
