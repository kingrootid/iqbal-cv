"use client";

import { useEffect, useState } from "react";
import {
  education,
  experience,
  profile,
  skills,
  softSkills,
  type Language,
} from "@/data/resume";

type IconName = "arrow" | "download" | "github" | "mail" | "copy" | "check" | "menu" | "close" | "arrow-down" | "pin" | "external" | "spark";

function Icon({ name, size = 18, className = "" }: { name: IconName; size?: number; className?: string }) {
  const icon = {
    arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
    download: <><path d="M12 3v12m0 0 5-5m-5 5-5-5M4 17v3h16v-3" /></>,
    github: <><path d="M9 19c-4 1.5-4-2.5-6-3m12 6v-3.87a3.38 3.38 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 4.77 5.07 5.07 0 0 0 18.91 1S17.73.65 15 2.48a13.38 13.38 0 0 0-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 0 0 4 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.38 3.38 0 0 0 8 18.13V22" /></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6" /></>,
    copy: <><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></>,
    check: <><path d="m5 12 4 4L19 6" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    close: <><path d="M5 5 19 19M19 5 5 19" /></>,
    "arrow-down": <><path d="M12 3v18m-7-7 7 7 7-7" /></>,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5" /></>,
    external: <><path d="M14 4h6v6M10 14 20 4M20 14v6H4V4h6" /></>,
    spark: <><path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2ZM19 18l.6 1.4L21 20l-1.4.6L19 22l-.6-1.4L17 20l1.4-.6L19 18Z" /></>,
  }[name];
  return <svg aria-hidden="true" className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{icon}</svg>;
}

type SkillCategory = keyof typeof skills;
type SkillFilter = SkillCategory | "all";

const labels = {
  en: {
    home: "Home", about: "About", experience: "Experience", expertise: "Expertise", education: "Education", contact: "Contact",
    heroIntro: "HELLO, I'M", heroSubtitle: "Software Engineer & Fullstack Developer",
    heroText: "Building thoughtful digital products — from intuitive interfaces to APIs and microservices that keep things running.",
    seeWork: "Explore my work", resume: "Download CV", heroAside: "FULLSTACK ENGINEERING · TEAM LEADERSHIP",
    statsExperience: "Years of experience", statsRoles: "Professional roles", statsCompanies: "Companies",
    scroll: "SCROLL TO EXPLORE", aboutIndex: "01 / ABOUT ME", aboutTitle: "A builder at heart.\nAn engineer by craft.",
    aboutPara1: "I'm Iqbal, a Software Engineer with over five years of experience creating, enhancing, and maintaining software across different industries.",
    aboutPara2: "My journey spans product development, banking regulatory systems, API and microservice operations, and leading small engineering teams. I value practical solutions, clear collaboration, and software people can rely on.",
    aboutCallout: "WHAT I BRING TO THE TABLE", aboutHighlights: ["Fullstack product development", "API & microservices", "Technical leadership"],
    workIndex: "02 / EXPERIENCE", workTitle: "The journey so far.", workSubtitle: "A timeline of the teams, products, and systems I've worked on.",
    current: "CURRENT", placement: "PLACEMENT AT", skillsIndex: "03 / TECH STACK", skillsTitle: "Tools of the trade.",
    skillsSubtitle: "Technologies listed in my CV, organized by area of work — not a proficiency ranking.",
    all: "All skills", frontend: "Frontend", backend: "Backend", apiData: "API & Data", platform: "Platform & Tools",
    eduIndex: "04 / EDUCATION", eduTitle: "Always learning.", eduDescription: "A foundation in telecommunications, extended through real-world software engineering experience.",
    degree: "DEGREE", institution: "INSTITUTION", gpa: "GPA", strengthLabel: "BEYOND THE CODE", softTitle: "People & process",
    contactIndex: "05 / LET'S CONNECT", contactTitle1: "Have something", contactTitle2: "in mind?", contactSubtitle: "I'd love to hear about interesting engineering problems, collaborations, or opportunities.",
    email: "Send an email", copy: "Copy email", copied: "Copied!", copyError: "Copy unavailable — use the email link", github: "Find me on GitHub", footer: "Built with Next.js & attention to detail.",
    availability: "SOFTWARE ENGINEERING PORTFOLIO", graphicTitle: "Engineering across the stack", graphicCaption: "FRONTEND / BACKEND / MICROSERVICES",
    graphBadge: "CURRENT FOCUS", graphFocus: "Banking applications & analytics", skip: "Skip to content",
  },
  id: {
    home: "Beranda", about: "Tentang", experience: "Pengalaman", expertise: "Keahlian", education: "Pendidikan", contact: "Kontak",
    heroIntro: "HALO, SAYA", heroSubtitle: "Software Engineer & Fullstack Developer",
    heroText: "Membangun produk digital yang tepat guna — mulai dari antarmuka intuitif hingga API dan microservices yang andal.",
    seeWork: "Lihat pengalaman", resume: "Unduh CV", heroAside: "FULLSTACK ENGINEERING · KEPEMIMPINAN TIM",
    statsExperience: "Tahun pengalaman", statsRoles: "Riwayat posisi", statsCompanies: "Perusahaan",
    scroll: "GULIR UNTUK MELIHAT", aboutIndex: "01 / TENTANG SAYA", aboutTitle: "Suka membangun.\nTerus berkembang.",
    aboutPara1: "Saya Iqbal, Software Engineer dengan pengalaman lebih dari lima tahun mengembangkan, meningkatkan, dan memelihara perangkat lunak di berbagai industri.",
    aboutPara2: "Perjalanan karier saya mencakup pengembangan produk, sistem pelaporan regulator perbankan, operasional API dan microservices, hingga memimpin tim engineering kecil. Saya mengutamakan solusi praktis, kolaborasi, dan sistem yang dapat diandalkan.",
    aboutCallout: "YANG SAYA KERJAKAN", aboutHighlights: ["Pengembangan produk fullstack", "API & microservices", "Kepemimpinan teknis"],
    workIndex: "02 / PENGALAMAN", workTitle: "Perjalanan karier.", workSubtitle: "Tim, produk, dan sistem yang pernah saya tangani.",
    current: "SAAT INI", placement: "PENEMPATAN DI", skillsIndex: "03 / TEKNOLOGI", skillsTitle: "Tech stack saya.",
    skillsSubtitle: "Teknologi yang tercantum di CV, dikelompokkan berdasarkan bidang — bukan peringkat penguasaan.",
    all: "Semua", frontend: "Frontend", backend: "Backend", apiData: "API & Data", platform: "Platform & Tools",
    eduIndex: "04 / PENDIDIKAN", eduTitle: "Terus belajar.", eduDescription: "Berawal dari bidang telekomunikasi, lalu berkembang melalui pengalaman langsung di software engineering.",
    degree: "PROGRAM STUDI", institution: "INSTITUSI", gpa: "IPK", strengthLabel: "DI LUAR KODE", softTitle: "Tim & proses",
    contactIndex: "05 / MARI TERHUBUNG", contactTitle1: "Punya ide", contactTitle2: "menarik?", contactSubtitle: "Saya terbuka untuk berdiskusi tentang tantangan engineering, kolaborasi, dan peluang profesional.",
    email: "Kirim email", copy: "Salin email", copied: "Tersalin!", copyError: "Tidak bisa menyalin — gunakan tautan email", github: "Lihat GitHub", footer: "Dibangun dengan Next.js dan perhatian pada detail.",
    availability: "PORTFOLIO SOFTWARE ENGINEER", graphicTitle: "Engineering di berbagai layer", graphicCaption: "FRONTEND / BACKEND / MICROSERVICES",
    graphBadge: "FOKUS SAAT INI", graphFocus: "Aplikasi perbankan & analitik", skip: "Lewati ke konten",
  },
};

const skillOrder: SkillCategory[] = ["frontend", "backend", "apiData", "platform"];

export default function Portfolio() {
  const [lang, setLang] = useState<Language>("en");
  const [filter, setFilter] = useState<SkillFilter>("all");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [copyFailed, setCopyFailed] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const t = labels[lang];

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    let ticking = false;
    const updateProgress = () => {
      const maximum = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(maximum > 0 ? Math.min(100, (window.scrollY / maximum) * 100) : 0);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };
    updateProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
      const nodes = document.querySelectorAll(".reveal");
      const observer = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }
      }, { rootMargin: "0px 0px -32px 0px", threshold: 0.08 });
      nodes.forEach(node => observer.observe(node));
      document.body.classList.add("can-reveal");
      return () => {
        observer.disconnect();
        document.body.classList.remove("can-reveal");
      };
    }
  }, []);

  const navLinks = [
    { id: "about", text: t.about },
    { id: "experience", text: t.experience },
    { id: "skills", text: t.expertise },
    { id: "education", text: t.education },
  ];

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setCopyFailed(false);
      window.setTimeout(() => setCopied(false), 2300);
    } catch {
      setCopied(false);
      setCopyFailed(true);
      window.setTimeout(() => setCopyFailed(false), 2900);
    }
  }

  return (
    <>
      <a href="#main" className="skip-link">{t.skip}</a>
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} aria-hidden="true" />
      <div className="ambient-bg" aria-hidden="true" />

      <header className="site-header">
        <div className="header-inner container">
          <a href="#home" className="brand" aria-label={`${profile.name} — ${t.home}`} onClick={() => setMobileOpen(false)}>
            <span className="brand-icon">i<span className="brand-dot">.</span></span>
            <span className="brand-name">iqbal<span className="muted">/dev</span></span>
          </a>
          <nav className={`desktop-nav ${mobileOpen ? "mobile-open" : ""}`} aria-label="Main navigation">
            {navLinks.map(link => <a key={link.id} href={`#${link.id}`} onClick={() => setMobileOpen(false)}>{link.text}</a>)}
            <a href="#contact" className="mobile-contact" onClick={() => setMobileOpen(false)}>{t.contact} <Icon name="arrow" size={16} /></a>
          </nav>
          <div className="header-actions">
            <div className="language-control" role="group" aria-label="Website language">
              <button className={lang === "en" ? "selected" : ""} onClick={() => setLang("en")} aria-pressed={lang === "en"}>EN</button>
              <span aria-hidden="true">/</span>
              <button className={lang === "id" ? "selected" : ""} onClick={() => setLang("id")} aria-pressed={lang === "id"}>ID</button>
            </div>
            <a href="#contact" className="header-contact">{t.contact} <Icon name="arrow" size={15} /></a>
            <button className="menu-toggle" aria-expanded={mobileOpen} aria-label={mobileOpen ? "Close menu" : "Open menu"} onClick={() => setMobileOpen(v => !v)}>
              <Icon name={mobileOpen ? "close" : "menu"} size={23} />
            </button>
          </div>
        </div>
      </header>

      <main id="main">
        <section id="home" className="hero section-shell container">
          <div className="hero-content">
            <div className="eyebrow hero-eyebrow"><span className="signal-dot" />{t.heroIntro}</div>
            <h1 className="hero-title">Moch Iqbal<br/><span className="hero-last">Ar Rasyid<span className="accent">.</span></span></h1>
            <div className="hero-rule" />
            <p className="hero-role"><span className="role-slash">//</span> {t.heroSubtitle}</p>
            <p className="hero-description">{t.heroText}</p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#experience">{t.seeWork}<Icon name="arrow" size={18}/></a>
              <a className="btn btn-outline" href={profile.resumeUrl} download="Moch-Iqbal-Ar-Rasyid-CV.pdf">{t.resume}<Icon name="download" size={18}/></a>
            </div>
            <div className="hero-bottom-note"><span className="small-cross">✳</span> {t.heroAside}</div>
          </div>
          <div className="hero-visual" aria-label={t.graphicTitle} role="img">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
            <span className="orbit-node orbit-node-a"/><span className="orbit-node orbit-node-b"/><span className="orbit-node orbit-node-c"/>
            <div className="visual-corner tl"/><div className="visual-corner tr"/><div className="visual-corner bl"/><div className="visual-corner br"/>
            <div className="visual-watermark">IQ<span>.</span></div>
            <div className="terminal-card">
              <div className="terminal-bar"><div className="terminal-dots"><i/><i/><i/></div><span>profile.ts</span><span className="terminal-badge">● active</span></div>
              <div className="terminal-code">
                <div><span className="terminal-purple">const</span> <span className="terminal-cream">engineer</span> <span className="terminal-muted">=</span> <span className="terminal-muted">&#123;</span></div>
                <div className="indent"><span className="terminal-sky">name</span><span className="terminal-muted">:</span> <span className="terminal-lime">&quot;Iqbal&quot;</span><span className="terminal-muted">,</span></div>
                <div className="indent"><span className="terminal-sky">focus</span><span className="terminal-muted">:</span> <span className="terminal-muted">[</span></div>
                <div className="indent2"><span className="terminal-lime">&quot;Frontend&quot;</span><span className="terminal-muted">,</span></div>
                <div className="indent2"><span className="terminal-lime">&quot;Backend&quot;</span><span className="terminal-muted">,</span></div>
                <div className="indent2"><span className="terminal-lime">&quot;Microservices&quot;</span></div>
                <div className="indent"><span className="terminal-muted">],</span></div>
                <div className="indent"><span className="terminal-sky">experience</span><span className="terminal-muted">:</span> <span className="terminal-lime">&quot;5+ years&quot;</span></div>
                <div><span className="terminal-muted">&#125;;</span><span className="terminal-cursor" /></div>
              </div>
            </div>
            <div className="floating-label floating-top"><span className="floating-icon">↗</span> {t.graphicTitle}</div>
            <div className="floating-label floating-bottom"><span className="tiny-pulse"/><div><small>{t.graphBadge}</small><strong>{t.graphFocus}</strong></div></div>
            <div className="visual-bottom-code">&lt;build /&gt; <span>2026</span></div>
          </div>
          <a href="#about" className="scroll-cue">{t.scroll}<span className="scroll-line"/><Icon name="arrow-down" size={16}/></a>
        </section>

        <div className="stats-border"><div className="container stats-grid">
          <div className="stat"><span className="stat-number">{profile.experienceYears}</span><span className="stat-label">{t.statsExperience}</span></div>
          <div className="stat"><span className="stat-number">0{experience.length}</span><span className="stat-label">{t.statsRoles}</span></div>
          <div className="stat"><span className="stat-number">0{profile.companyCount}</span><span className="stat-label">{t.statsCompanies}</span></div>
          <div className="stats-mark" aria-hidden="true">&lt; / &gt;</div>
        </div></div>

        <section id="about" className="section-pad container about-section">
          <div className="section-label reveal"><span className="label-asterisk">✳</span> {t.aboutIndex}</div>
          <div className="about-grid">
            <div className="reveal"><h2 className="section-title about-title">{t.aboutTitle.split("\n").map((line, i) => <span key={line} className={i === 1 ? "heading-secondary" : ""}>{line}{i === 0 && <br/>}</span>)}</h2></div>
            <div className="about-copy reveal">
              <p className="lead-copy">{t.aboutPara1}</p>
              <p>{t.aboutPara2}</p>
              <div className="about-specialties"><div className="mini-eyebrow">{t.aboutCallout}</div>
                {t.aboutHighlights.map((item, i) => <div className="specialty-row" key={item}><span>0{i + 1}</span><strong>{item}</strong><Icon name="arrow" size={17}/></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="section-pad experience-section">
          <div className="container">
            <div className="section-intro reveal"><div><div className="section-label"><span className="label-asterisk">✳</span> {t.workIndex}</div><h2 className="section-title">{t.workTitle}</h2></div><p>{t.workSubtitle}</p></div>
            <div className="work-list">
              {experience.map((job, i) => (
                <article className="work-item reveal" key={job.id}>
                  <div className="work-index"><span>{String(i+1).padStart(2,"0")}</span><span className="work-period">{job.period}</span></div>
                  <div className="work-dot-area"><span className={`work-dot ${i === 0 ? "active" : ""}`} /></div>
                  <div className="work-body">
                    <div className="work-heading"><div><div className="work-company">{job.company}</div><h3>{job.role}</h3></div>{i === 0 && <span className="current-badge"><span className="mini-dot"/>{t.current}</span>}</div>
                    <div className="work-meta"><span>{job.duration[lang]}</span><span className="meta-separator"/><span className="work-location"><Icon name="pin" size={14}/>{job.location}</span></div>
                    {job.placement && <div className="placement-line">{t.placement} <strong>{job.placement}</strong></div>}
                    <ul className="work-detail-list">{job.details[lang].map(point => <li key={point}>{point}</li>)}</ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section-pad container skill-section">
          <div className="section-intro reveal"><div><div className="section-label"><span className="label-asterisk">✳</span> {t.skillsIndex}</div><h2 className="section-title">{t.skillsTitle}</h2></div><p>{t.skillsSubtitle}</p></div>
          <div className="filter-tabs reveal" role="group" aria-label="Filter skills">
            {(["all", ...skillOrder] as SkillFilter[]).map(item => <button key={item} onClick={() => setFilter(item)} className={filter === item ? "active" : ""} aria-pressed={filter === item}>{t[item]}<span>{item === "all" ? Object.values(skills).flat().length : skills[item].length}</span></button>)}
          </div>
          <div className="skill-groups" aria-live="polite">
            {skillOrder.filter(group => filter === "all" || filter === group).map(group => (
              <div className="skill-group" key={group}>
                <div className="skill-group-title"><span>0{skillOrder.indexOf(group) + 1}</span><h3>{t[group]}</h3></div>
                <div className="skill-pills">{skills[group].map((skill, index) => <span className="skill-pill" key={skill} style={{ animationDelay: `${index * 25}ms` }}>{skill}<span className="skill-pill-mark" aria-hidden="true">↗</span></span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="section-pad education-section">
          <div className="container education-grid">
            <div className="reveal"><div className="section-label"><span className="label-asterisk">✳</span> {t.eduIndex}</div><h2 className="section-title">{t.eduTitle}</h2><p className="edu-intro">{t.eduDescription}</p></div>
            <div className="edu-stack reveal">
              <div className="education-card"><div className="education-top"><div className="education-insignia">PN<span>M</span></div><span>{education.years}</span></div><span className="mini-eyebrow">{t.institution}</span><h3>{education.institution}</h3><div className="education-bottom"><div><span className="mini-eyebrow">{t.degree}</span><p>{education.program[lang]}</p></div><div><span className="mini-eyebrow">{t.gpa}</span><p>{education.gpa}</p></div></div></div>
              <div className="people-card"><span className="mini-eyebrow">{t.strengthLabel}</span><h3>{t.softTitle}</h3><div className="people-tags">{softSkills[lang].map(s => <span key={s}><Icon name="check" size={15}/>{s}</span>)}</div></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-inner reveal"><div className="section-label"><span className="label-asterisk">✳</span> {t.contactIndex}</div>
            <div className="contact-title"><span>{t.contactTitle1}</span><span className="outlined-title">{t.contactTitle2}<span className="accent">↗</span></span></div>
            <p className="contact-desc">{t.contactSubtitle}</p>
            <div className="contact-actions"><a className="btn btn-primary" href={`mailto:${profile.email}`}><Icon name="mail" size={19}/>{t.email}<Icon name="arrow" size={18}/></a><button className="btn btn-outline" onClick={copyEmail} aria-live="polite"><Icon name={copied ? "check" : "copy"} size={18}/>{copied ? t.copied : t.copy}</button></div>
            {copyFailed && <p className="copy-error" role="status">{t.copyError}</p>}
            <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<Icon name="arrow" size={20}/></a>
          </div>
        </section>
      </main>
      <footer className="site-footer"><div className="container footer-inner"><a href="#home" className="footer-logo">iqbal<span>.</span>dev</a><p>© {new Date().getFullYear()} {profile.name}. {t.footer}</p><a href={profile.github} target="_blank" rel="noopener noreferrer" className="footer-github"><Icon name="github" size={18}/>{t.github}<Icon name="external" size={14}/></a></div></footer>
    </>
  );
}
