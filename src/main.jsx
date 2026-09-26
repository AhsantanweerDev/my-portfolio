import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const navItems = [
  ['About', 'about'], ['Projects', 'projects'], ['Research', 'research'],
  ['Skills', 'skills'], ['Journey', 'journey'], ['Contact', 'contact'],
];

function Mark({ small = false }) {
  return <a className={`brand${small ? ' brand-small' : ''}`} href="#home" aria-label="Ahsan Tanweer, back to top"><span className="brand-mark">A</span><span>Ahsan Tanweer</span></a>;
}

function Header({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('home');
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActive(entry.target.id); }), { rootMargin: '-35% 0px -55% 0px' });
    document.querySelectorAll('main section[id]').forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return <header className="site-header"><div className="nav-shell"><Mark />
    <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span/><span/></button>
    <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
      {navItems.map(([label, id]) => <a key={id} className={active === id ? 'nav-active' : ''} aria-current={active === id ? 'location' : undefined} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
      <div className="nav-actions"><button className="theme-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title="Toggle color theme">{theme === 'dark' ? '☼' : '◐'}</button><a className="nav-resume" href="#resume" onClick={closeMenu}>Resume <span>↗</span></a></div>
    </nav>
  </div></header>;
}

function SectionHeading({ eyebrow, title, note }) {
  return <div className="section-heading reveal"><p className="eyebrow"><span className="eyebrow-mark" />{eyebrow}</p><h2>{title}</h2>{note && <p className="section-note">{note}</p>}</div>;
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'));
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('theme', theme); }, [theme]);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }), { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return <><a className="skip-link" href="#main">Skip to content</a><Header theme={theme} setTheme={setTheme} />
    <main id="main">
      <section className="hero section-wrap" id="home"><div className="hero-copy">
        <p className="eyebrow reveal"><span className="eyebrow-mark" />AI / SOFTWARE DEVELOPER <span className="availability"><i /> OPEN TO OPPORTUNITIES</span></p>
        <h1 className="reveal">Intelligence,<br/><span>made useful.</span></h1>
        <p className="hero-intro reveal">I’m Ahsan Tanweer. I build intelligent applications where AI, data, and modern software engineering meet.</p>
        <div className="hero-actions reveal"><a className="button button-primary" href="#projects">View projects <span>↘</span></a><a className="text-link" href="#research">Explore research <span>↘</span></a><a className="text-link" href="#contact">Contact me <span>↗</span></a></div>
        <a className="hero-resume-link reveal" href="/resume.html" target="_blank" rel="noreferrer">View / print resume <span>↗</span></a>
        <div className="hero-meta reveal"><span>BASED IN INDIA</span><span>AI · DATA · SOFTWARE</span></div>
      </div><div className="hero-art reveal"><figure className="hero-photo-frame"><img src="/images/ahsan-portrait.jpg" alt="Ahsan Tanweer standing outdoors in a white shirt" width="1200" height="1600" fetchPriority="high" decoding="async"/><figcaption><span>AH / 01</span><span>AI &amp; SOFTWARE</span></figcaption></figure></div>
      <a className="scroll-cue" href="#about"><span className="scroll-line"/>SCROLL TO EXPLORE</a></section>

      <section className="intro-band section-wrap reveal" id="about"><div className="band-label">01 / A SHORT INTRODUCTION</div><div><h2>I turn curious questions into useful software.</h2><p>I’m an MCA student at Integral University, currently building my foundations across AI/ML and full-stack development. I’m interested in the path from data and language to thoughtful, usable products.</p><div className="about-facts"><div><span>WHO I AM</span><p>Emerging AI and software developer</p></div><div><span>WHAT I BUILD</span><p>Experiments, web apps, and applied AI</p></div><div><span>WHAT’S NEXT</span><p>Deeper engineering, deployment, and research</p></div></div></div></section>

      <section className="photo-gallery-section section-wrap" aria-labelledby="photo-gallery-title"><div className="gallery-heading reveal"><p className="eyebrow"><span className="eyebrow-mark"/>A FEW FRAMES</p><h2 id="photo-gallery-title">A little more of me.</h2><p>Snapshots from outside the code.</p></div><div className="photo-grid">{[
        ['photo-01-selfie.jpg','Close-up portrait in a dark shirt','01'],
        ['photo-02-framed.jpg','Portrait in a white shirt with a circular graphic frame','02'],
        ['photo-03-white-shirt.jpg','Portrait in a white shirt near blue windows','03'],
        ['photo-04-dark-look.jpg','Standing in a dark outfit on illuminated steps','04'],
        ['photo-05-cap-portrait.jpg','Side portrait wearing glasses and a cap','05'],
        ['photo-06-full-length.jpg','Full-length portrait in a white outfit outdoors','06'],
        ['photo-07-night-street.jpg','Nighttime portrait on a city street','07'],
        ['photo-08-cafe.jpg','Portrait in a dark shirt outside a cafe','08'],
        ['photo-09-night-portrait.jpg','Nighttime portrait in a dark jacket','09'],
      ].map(([src,alt,index])=><figure className={`photo-card photo-card-${index}`} key={src}><img src={`/images/${src}`} alt={alt} loading="lazy" decoding="async"/><figcaption>{index} <span>AH / PORTRAIT</span></figcaption></figure>)}</div></section>

      <section className="statement section-wrap reveal"><p className="eyebrow"><span className="eyebrow-mark"/>A PRINCIPLE I BUILD BY</p><h2>Software should turn <em>intelligence</em> into something people can use.</h2><span className="statement-index">AT—01</span></section>

      <section className="projects section-wrap" id="projects"><SectionHeading eyebrow="02 / SELECTED WORK" title="Projects with a point of view." note="A mix of applied research and products in progress. Status is part of the story." />
        <article className="featured-project reveal"><div className="project-visual research-visual"><div className="visual-top"><span>RESEARCH SYSTEM / 01</span><span>CONCEPTUAL PIPELINE</span></div><div className="pipeline"><div className="pipe-node"><span>01</span><b>Resume</b><small>unstructured text</small></div><i>→</i><div className="pipe-node"><span>02</span><b>Normalize</b><small>preprocessing</small></div><i>→</i><div className="pipe-node"><span>03</span><b>Represent</b><small>features & meaning</small></div><i>→</i><div className="pipe-node pipe-node-accent"><span>04</span><b>Compare</b><small>similarity methods</small></div><i>→</i><div className="pipe-node"><span>05</span><b>Skill gap</b><small>overlap analysis</small></div></div><div className="visual-foot"><span>KEYWORDS</span><span>TF–IDF</span><span>TRANSFORMERS</span><span>HYBRID</span></div></div>
          <div className="featured-content"><div className="project-kicker"><span>FEATURED RESEARCH</span><span>01</span></div><h3>AI-Based Job Matching &amp; Skill Gap Analysis</h3><p className="project-lede">Can semantic understanding make career matching more useful than keyword overlap alone?</p><div className="project-detail-grid"><div><span>PROBLEM</span><p>Resumes and occupational requirements describe skills differently, making simple keyword matching limited.</p></div><div><span>APPROACH</span><p>Compare Keyword/Jaccard, TF-IDF cosine similarity, Sentence Transformer similarity, and a hybrid method.</p></div><div><span>FOCUS</span><p>Resume-to-occupation matching, skill overlap, and identifying potential skill gaps.</p></div><div><span>STATUS</span><p><b className="status-tag">Research project</b> Results and evaluation data were not available in the inspected workspace.</p></div></div><div className="project-links"><span className="text-muted">Research document / not provided</span><span className="text-muted">Repository / not provided</span></div></div>
        </article>
        <div className="project-pair">
          <article className="project-card reveal"><div className="card-index">02 <span>PRODUCT / IN PROGRESS</span></div><div className="mini-dashboard" aria-hidden="true"><div className="dash-sidebar"><b>AT</b><i/><i/><i/></div><div className="dash-main"><span>CAREER OVERVIEW</span><div className="dash-chart"><i/><i/><i/><i/><i/><i/><i/></div><div className="dash-lines"><i/><i/><i/></div></div></div><h3>AI Career Intelligence Platform</h3><p>A product concept in development exploring how resume analysis, career matching, and skill-gap insights might work together.</p><div className="card-status"><span className="status-dot"/>Currently building <span className="status-sep">·</span> Functionality in progress</div><div className="card-footer"><span>AI · CAREER INTELLIGENCE · WEB</span><span>02</span></div></article>
          <article className="project-card reveal"><div className="card-index">03 <span>FULL-STACK / PROJECT</span></div><div className="bazar-visual" aria-hidden="true"><span className="bazar-orbit orbit-a"/><span className="bazar-orbit orbit-b"/><span className="bazar-word">A<span>—</span>B</span><span className="bazar-caption">AHSAN-E-BAZAR</span></div><h3>AHSAN-E-BAZAR</h3><p>A full-stack commerce project. Implementation details and verified feature list were not present in the inspected workspace.</p><div className="card-status"><span className="status-dot status-muted"/>Project details to be added <span className="status-sep">·</span> No demo linked</div><div className="card-footer"><span>COMMERCE · PROJECT</span><span>03</span></div></article>
        </div>
      </section>

      <section className="research section-wrap" id="research"><SectionHeading eyebrow="03 / RESEARCH & APPLIED AI" title="A research question, made concrete." note="Exploring ways to compare people’s skills with the language of work."/><div className="research-layout reveal"><div className="research-question"><span className="small-label">RESEARCH QUESTION</span><h3>How can we match a resume to an occupation when the same skill can be described in different words?</h3><p>The project investigates semantic similarity and skill overlap as complementary signals for career matching.</p><div className="research-status"><span className="status-dot"/>Research project <span>·</span> Evaluation figures not supplied</div></div><div className="method-list"><span className="small-label">METHODS UNDER INVESTIGATION</span>{[['01','Keyword / Jaccard','Surface-level skill overlap'],['02','TF–IDF cosine similarity','Weighted term representation'],['03','Sentence Transformers','Semantic sentence representation'],['04','Hybrid approach','Combining complementary signals']].map(([n,t,d])=><div className="method-row" key={n}><span>{n}</span><div><b>{t}</b><small>{d}</small></div><span className="method-arrow">↗</span></div>)}<p className="research-footnote">Dataset, measured results, and limitations were not available in the project files. No performance claims are presented.</p></div><div className="research-next"><div><span className="small-label">DATASET &amp; EVALUATION</span><p>Dataset, evaluation setup, and measured results were not provided.</p></div><div><span className="small-label">CURRENT LIMITATION</span><p>Without those materials, performance and comparative findings cannot be reported yet.</p></div><div><span className="small-label">NEXT STEPS / PLANNED</span><p>Document the dataset, evaluate each method consistently, then report verified matching and skill-gap results.</p></div></div></div></section>

      <section className="skills section-wrap" id="skills"><SectionHeading eyebrow="04 / TOOLKIT" title="A toolkit in active development." note="Grouped by the role each technology plays. Proficiency grows through building."/><div className="skills-grid reveal">{[
        ['PROGRAMMING',['Python','JavaScript','HTML','CSS'],'CURRENTLY USING'],['AI / MACHINE LEARNING',['Machine Learning','NLP','Pandas','NumPy','Scikit-learn','Sentence Transformers'],'LEARNING'],['BACKEND & DATA',['FastAPI','REST APIs','PostgreSQL'],'LEARNING'],['FRONTEND',['React','JavaScript','HTML','CSS'],'LEARNING'],['TOOLS',['Git','GitHub','VS Code'],'CURRENTLY USING'],['EXPLORING',['Model evaluation','Semantic search','Cloud deployment'],'EXPLORING']
      ].map(([title,tags,state])=><div className="skill-group" key={title}><div className="skill-head"><span>{title}</span><small>{state}</small></div><div className="skill-tags">{tags.map(tag=><span key={tag}>{tag}</span>)}</div></div>)}</div></section>

      <section className="journey section-wrap" id="journey"><SectionHeading eyebrow="05 / ENGINEERING ROADMAP" title="From foundations to intelligent systems." note="A direction for learning, building, and exploring—updated as the work grows."/><div className="roadmap reveal">{[
        ['01','FOUNDATION','Python · Git · Programming','Building'],['02','APPLICATION','FastAPI · REST APIs · PostgreSQL · React','Learning'],['03','INTELLIGENCE','Machine Learning · NLP · AI Systems','Learning'],['04','NEXT','Cloud · Deployment · Advanced AI · System Design','Exploring']
      ].map(([n,title,items,state],i)=><div className="roadmap-step" key={n}><div className="roadmap-top"><span>{n}</span><span className="roadmap-state">{state}</span></div><div className="roadmap-line"><i style={{'--step':i}}/></div><h3>{title}</h3><p>{items}</p></div>)}</div><div className="education reveal"><div><span className="small-label">EDUCATION</span><h3>Master of Computer Applications</h3><p>Integral University <span>·</span> 3rd Semester</p></div><span className="education-mark">MCA</span></div></section>

      <section className="resume section-wrap" id="resume"><div className="resume-inner reveal"><div><p className="eyebrow"><span className="eyebrow-mark"/>RESUME</p><h2>A clear picture<br/><span>of what I’m building.</span></h2><p>View the resume online or use your browser’s Print option to save a PDF copy.</p><a className="button button-primary resume-cta" href="/resume.html">View / print resume <span>↗</span></a></div><a className="resume-preview" href="/resume.html" aria-label="Open Ahsan Tanweer's resume"><span className="resume-preview-top">AT <i>RESUME / 2026</i></span><b>Ahsan<br/>Tanweer</b><small>AI / SOFTWARE DEVELOPER</small><span className="resume-preview-bottom">VIEW DOCUMENT ↗</span></a></div></section>

      <section className="contact section-wrap" id="contact"><div className="contact-top reveal"><p className="eyebrow"><span className="eyebrow-mark"/>06 / CONTACT</p><h2>Let’s build<br/>something <em>useful.</em></h2><p className="contact-intro">Have a thoughtful project, research question, or opportunity in mind? I’d be glad to hear about it.</p></div><div className="contact-bottom reveal"><div className="contact-links"><span className="small-label">FIND ME</span><a className="contact-item" href="mailto:tanweerahsan0007@gmail.com"><span>EMAIL</span><b>tanweerahsan0007@gmail.com ↗</b></a><a className="contact-item" href="https://github.com/ahsantanweerdev" target="_blank" rel="noreferrer"><span>GITHUB</span><b>github.com/ahsantanweerdev ↗</b></a></div><div className="contact-form-wrap"><span className="small-label">SEND A NOTE</span><form onSubmit={(event)=>event.preventDefault()}><label>Name<input type="text" name="name" placeholder="Your name" disabled /></label><label>Email<input type="email" name="email" placeholder="you@example.com" disabled /></label><label>Message<textarea name="message" rows="3" placeholder="What would you like to discuss?" disabled /></label><button type="button" className="button button-disabled" disabled>Form unavailable <span>↗</span></button><p className="form-note">Email service integration — TODO</p></form></div></div></section>
    </main><footer className="site-footer section-wrap"><Mark small/><a className="footer-role footer-link" href="https://github.com/ahsantanweerdev" target="_blank" rel="noreferrer">GITHUB ↗</a><a className="copyright footer-link" href="mailto:tanweerahsan0007@gmail.com">EMAIL ↗</a><a href="#home" className="back-top">BACK TO TOP ↑</a></footer></>;
}

createRoot(document.getElementById('root')).render(<App />);
