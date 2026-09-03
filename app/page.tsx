import {
  ArrowDownRight, ArrowUpRight, BookOpen, BriefcaseBusiness, Check, Cloud,
  Code2, Database, Download, ExternalLink, GitBranch, GraduationCap, Layers3,
  Mail, MapPin, Sparkles, Terminal,
} from "lucide-react";
import Image from "next/image";

const skills = [
  { title: "Programming", icon: Code2, items: ["C", "Java & OOP", "Python basics"], tone: "blue" },
  { title: "Web", icon: Layers3, items: ["HTML", "CSS", "Responsive UI"], tone: "violet" },
  { title: "Data", icon: Database, items: ["SQL", "MySQL", "Supabase"], tone: "cyan" },
  { title: "Tools & deployment", icon: Terminal, items: ["Git & GitHub", "Linux basics", "Render", "Socket.IO"], tone: "indigo" },
];

const certificates = [
  { type: "Industrial training", title: "AWS Masters & Intro to AWS Data Engineering", issuer: "Ingenious-TechWorld · Silicon University", date: "May–June 2026", href: "/certificates/aws-training.pdf", number: "01" },
  { type: "Competition", title: "CodeVerse · NIRMAN 5.0", issuer: "Silicon Innovation & Promotion Cell", date: "November 2025", href: "/certificates/codeverse.pdf", number: "02" },
  { type: "Competition", title: "Reverse Engineering · RISE 2026", issuer: "Silicon Achievers’ Club", date: "April 2026", href: "/certificates/reverse-engineering.pdf", number: "03" },
];

export default function Home() {
  return (
    <main>
      <header className="nav-shell">
        <a className="brand" href="#top" aria-label="Devkishan home"><span className="brand-mark">DK</span><span>Devkishan</span></a>
        <nav aria-label="Primary navigation"><a href="#about">About</a><a href="#work">Work</a><a href="#skills">Skills</a><a href="#journey">Journey</a></nav>
        <a className="nav-cta" href="mailto:kishan394069@gmail.com">Let’s connect <ArrowUpRight size={16} /></a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
        <div className="hero-copy">
          <div className="eyebrow reveal-one"><span className="status-dot" /> Available for learning opportunities</div>
          <h1 className="reveal-two">I build thoughtful web experiences and learn what powers them.</h1>
          <p className="hero-intro reveal-three">I’m <strong>Devkishan Kumar Singh</strong>, a Computer Science Engineering student exploring web development, backend systems and databases—one practical project at a time.</p>
          <div className="hero-actions reveal-four">
            <a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={18} /></a>
            <a className="button button-resume" href="/resume/Devkishan_Kumar_Singh_Resume.pdf" download><Download size={18} /> Download résumé</a>
            <a className="button button-secondary" href="https://github.com/Devkishan-kumar-singh" target="_blank" rel="noreferrer"><GitBranch size={18} /> GitHub profile</a>
          </div>
          <div className="hero-meta reveal-four"><span><MapPin size={16} /> Bhubaneswar, Odisha</span><span><GraduationCap size={16} /> B.Tech CSE · 2025–2029</span></div>
        </div>
        <div className="portrait-wrap reveal-three">
          <div className="portrait-card glass-card">
            <div className="portrait-label"><span>Currently learning</span><strong>Java · Backend · Databases</strong></div>
            <Image src="/assets/devkishan-profile.jpeg" alt="Devkishan Kumar Singh" width={1311} height={1548} priority />
            <div className="portrait-footer"><span className="mini-badge"><Sparkles size={14} /> Curious by design</span><span>02 / 04</span></div>
          </div>
        </div>
      </section>

      <section className="metrics section-shell" aria-label="Key highlights">
        <div><strong>9.60</strong><span>Current CGPA</span></div><div><strong>2</strong><span>Semesters completed</span></div><div><strong>1</strong><span>Production project</span></div><div><strong>2029</strong><span>Expected graduation</span></div>
      </section>

      <section className="about section-shell section-pad" id="about">
        <div className="section-kicker">01 · About</div>
        <div className="about-grid">
          <h2>Learning deeply.<br />Building deliberately.</h2>
          <div className="about-copy">
            <p className="lead">I’m a B.Tech student who enjoys turning new concepts into working, useful software.</p>
            <p>My foundation began with C and core programming, and I’m now growing through Java, object-oriented programming, SQL, backend development and deployment. Building Synapse introduced me to authentication, databases, real-time communication and taking a product from local development to a live domain.</p>
            <p>I value steady improvement, clear problem-solving and honest hands-on learning. I’m looking for opportunities where I can contribute, learn from experienced teams and keep strengthening my engineering fundamentals.</p>
          </div>
        </div>
      </section>

      <section className="project-section section-pad" id="work"><div className="section-shell">
        <div className="section-head"><div><div className="section-kicker light">02 · Featured work</div><h2>Synapse</h2></div><span className="project-year">2026</span></div>
        <div className="project-overview">
          <p className="project-lead">A collaborative workspace for teams to build, version, test and discuss production prompts.</p>
          <div className="project-links"><a href="https://synapse.devkishan.site" target="_blank" rel="noreferrer">Live product <ArrowUpRight size={17} /></a><a href="https://github.com/Devkishan-kumar-singh/Synapse" target="_blank" rel="noreferrer">Source code <GitBranch size={17} /></a></div>
        </div>
        <div className="project-stage">
          <div className="project-shot shot-main"><Image src="/assets/synapse-versioning.png" alt="Synapse prompt versioning interface" width={1919} height={837} /><span>Branching & version history</span></div>
          <div className="project-shot shot-float"><Image src="/assets/synapse-chat.png" alt="Synapse real-time team chat interface" width={1904} height={898} /><span>Real-time team chat</span></div>
        </div>
        <div className="project-bottom">
          <div className="contribution glass-dark"><p className="mini-title">My contribution</p><ul>
            <li><Check size={16} /> Configured authentication, database and role-based access</li><li><Check size={16} /> Implemented prompt branches, history and rollback</li><li><Check size={16} /> Added real-time team chat with Socket.IO</li><li><Check size={16} /> Integrated Gemini and Groq for A/B prompt testing</li><li><Check size={16} /> Deployed on Render and connected a custom domain</li>
          </ul></div>
          <div className="ab-card"><Image src="/assets/synapse-ab-test.png" alt="Synapse Gemini and Groq A/B testing results" width={1549} height={660} /><div><span>A/B testing arena</span><p>Compare prompt versions across AI providers and accept the stronger result.</p></div></div>
        </div>
        <div className="tech-row" aria-label="Synapse technologies">{["HTML & CSS", "JavaScript", "Node.js", "Express", "Supabase", "Socket.IO", "Gemini", "Groq", "Render"].map((tech) => <span key={tech}>{tech}</span>)}</div>
      </div></section>

      <section className="skills-section section-shell section-pad" id="skills">
        <div className="section-head dark-text"><div><div className="section-kicker">03 · Toolkit</div><h2>What I work with</h2></div><p>Strong foundations, growing through practice.</p></div>
        <div className="skills-grid">{skills.map(({ title, icon: Icon, items, tone }) => <article className={`skill-card skill-${tone}`} key={title}><div className="skill-icon"><Icon size={22} /></div><h3>{title}</h3><div className="skill-list">{items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
        <div className="learning-strip"><span><BookOpen size={19} /> In progress</span><p>Deepening Java, backend development and database design.</p></div>
      </section>

      <section className="journey section-pad" id="journey"><div className="section-shell">
        <div className="section-head dark-text"><div><div className="section-kicker">04 · Journey</div><h2>Education & experience</h2></div></div>
        <div className="journey-grid">
          <article className="education-card glass-card"><div className="card-icon"><GraduationCap size={23} /></div><p className="mini-title">Education</p><h3>B.Tech in Computer Science & Engineering</h3><p>Silicon University · Bhubaneswar, Odisha</p><div className="date-row"><span>2025</span><i /><span>2029</span></div><div className="grade-grid"><div><strong>9.60</strong><span>Current CGPA</span></div><div><strong>9.70</strong><span>Semester 1</span></div><div><strong>9.50</strong><span>Semester 2</span></div></div><div className="school-results"><span>Class X <strong>87.80%</strong></span><span>Class XII <strong>81%</strong></span></div></article>
          <article className="training-card"><div className="card-icon blue"><Cloud size={23} /></div><p className="mini-title">Industrial training</p><h3>AWS Masters & Intro to AWS Data Engineering</h3><p className="training-org">Ingenious-TechWorld · May–June 2026</p><p>Learned AWS fundamentals, cloud infrastructure concepts and basic data engineering workflows. Completed a practical website-hosting and database project as part of the programme.</p><a href="/certificates/aws-training.pdf" target="_blank">View credential <ExternalLink size={15} /></a></article>
        </div>
      </div></section>

      <section className="credentials section-shell section-pad">
        <div className="section-head dark-text"><div><div className="section-kicker">05 · Credentials</div><h2>Learning beyond class</h2></div></div>
        <div className="certificate-list">{certificates.map((certificate) => <a href={certificate.href} target="_blank" key={certificate.title}><span className="certificate-number">{certificate.number}</span><span className="certificate-copy"><small>{certificate.type}</small><strong>{certificate.title}</strong><span>{certificate.issuer}</span></span><span className="certificate-date">{certificate.date}</span><span className="certificate-arrow"><ArrowUpRight size={20} /></span></a>)}</div>
      </section>

      <section className="contact section-shell"><div className="contact-card">
        <div className="contact-orb"><BriefcaseBusiness size={24} /></div><p className="section-kicker light">06 · Contact</p><h2>Let’s learn and<br />build something useful.</h2><p>I’m open to internships, collaborative projects and opportunities that challenge me to become a better developer.</p>
        <a className="button button-light" href="mailto:kishan394069@gmail.com"><Mail size={18} /> kishan394069@gmail.com</a>
        <a className="button button-outline-light" href="/resume/Devkishan_Kumar_Singh_Resume.pdf" download><Download size={18} /> Download résumé</a>
        <div className="social-row"><a href="https://github.com/Devkishan-kumar-singh" target="_blank" rel="noreferrer"><GitBranch size={18} /> GitHub</a><a href="https://www.linkedin.com/in/devkishan-kumar-singh-a30303429/" target="_blank" rel="noreferrer"><BriefcaseBusiness size={18} /> LinkedIn</a><a href="https://leetcode.com/u/Devkishan_kumar_singh/" target="_blank" rel="noreferrer"><Code2 size={18} /> LeetCode</a></div>
      </div></section>

      <footer className="section-shell"><a className="brand" href="#top"><span className="brand-mark">DK</span></a><p>Designed around curiosity, built with care.</p><span>© 2026 Devkishan Kumar Singh</span></footer>
    </main>
  );
}
