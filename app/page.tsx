"use client";
import "./globals.css";

const projects = [
  {
    number: "01",
    title: "Sports Club Web-Based Management System",
    category: "Academic Project",
    description:
      "A web-based management system developed as a BS final year academic project.",
    link: "https://sportsclub-six.vercel.app/",
  },
  {
    number: "02",
    title: "Make Up Studio By Ijaz",
    category: "Web Project",
    description:
      "A complete beauty and makeup studio website created as a practical web project.",
    link: "https://makeup-studio-by-ijaz.vercel.app/",
  },
  {
    number: "03",
    title: "D Gentleman & Co",
    category: "Web Project",
    description:
      "A modern business website designed and developed as part of my web projects.",
    link: "https://gentleman-and-co.vercel.app/",
  },
  {
    number: "04",
    title: "Interactive Wedding Invitation",
    category: "Creative Web Project",
    description:
      "An interactive digital wedding invitation designed with a refined visual experience.",
    link: "https://weddinginvitesbyaz.vercel.app/",
  },
 
];

const skills = [
  "Website Design and Development",
"Basic Graphic Design Skills",
  "Microsoft Word and Excel",
  "Microsoft PowerPoint",
  "Basic computer operations",
  "Data entry and document preparation",
  "Email management",
  "Calm under pressure",
  "Problem-solving skills",
  "Leadership abilities",
  "Strategic planning expertise",

];

const education = [
  {
    year: "2024 — 2026",
    degree: "MPhil / MS Computer Science",
    institute: "University of Agriculture, Faisalabad",
  },
  {
    year: "2018 — 2022",
    degree: "BS Information Technology",
    institute: "Government College Women University of Faisalabad",
  },
  {
    year: "2016 — 2018",
    degree: "Intermediate (ICS)",
    institute: "Tips College of Commerce for Girls, Faisalabad",
  },
  {
    year: "2014 — 2016",
    degree: "Matric Sciences",
    institute:
      "Govt. Comprehensive Girls Higher Secondary School, Faisalabad",
  },
];

const languages = ["English", "Urdu", "Punjabi"];

const hobbies = [
  "Photography",
  "Traveling",
  "Listening to Music",
  "Cooking",
];

export default function Home() {
  return (
    <main className="portfolio-page">

      {/* ================= NAVBAR ================= */}
<header className="navbar">

  <a href="#home" className="logo">
    AQSA ZAFAR
  </a>

  {/* Desktop Navigation */}
  <nav className="desktop-nav">
    <a href="#home">HOME</a>
    <a href="#about">ABOUT</a>
    <a href="#education">EDUCATION</a>
    <a href="#skills">SKILLS</a>
    <a href="#projects">PROJECTS</a>
    <a href="#research">RESEARCH</a>
    <a href="#seminars">SEMINARS</a>
    <a href="#contact">CONTACT</a>
  </nav>

  {/* Desktop CV */}
  <a
    href="/Aqsa_Zafar_CV_Final.pdf"
    className="nav-cv"
    target="_blank"
    rel="noreferrer"
  >
    DOWNLOAD CV <span>↓</span>
  </a>

  {/* Mobile Menu */}
  <details className="mobile-menu">

    <summary aria-label="Open navigation menu">
      <span></span>
      <span></span>
      <span></span>
    </summary>

    <div className="mobile-menu-panel">

      <a
        href="#home"
        onClick={(e) => {
          e.currentTarget.closest("details")?.removeAttribute("open");
        }}
      >
        HOME
      </a>

      <a
        href="#about"
        onClick={(e) => {
          e.currentTarget.closest("details")?.removeAttribute("open");
        }}
      >
        ABOUT
      </a>

      <a
        href="#education"
        onClick={(e) => {
          e.currentTarget.closest("details")?.removeAttribute("open");
        }}
      >
        EDUCATION
      </a>

      <a
        href="#skills"
        onClick={(e) => {
          e.currentTarget.closest("details")?.removeAttribute("open");
        }}
      >
        SKILLS
      </a>

      <a
        href="#projects"
        onClick={(e) => {
          e.currentTarget.closest("details")?.removeAttribute("open");
        }}
      >
        PROJECTS
      </a>

      <a
        href="#research"
        onClick={(e) => {
          e.currentTarget.closest("details")?.removeAttribute("open");
        }}
      >
        RESEARCH
      </a>

      <a
        href="#seminars"
        onClick={(e) => {
          e.currentTarget.closest("details")?.removeAttribute("open");
        }}
      >
        SEMINARS
      </a>

      <a
        href="#contact"
        onClick={(e) => {
          e.currentTarget.closest("details")?.removeAttribute("open");
        }}
      >
        CONTACT
      </a>

      <a
        href="/Aqsa_Zafar_CV_Final.pdf"
        target="_blank"
        rel="noreferrer"
        className="mobile-cv"
        onClick={(e) => {
          e.currentTarget.closest("details")?.removeAttribute("open");
        }}
      >
        DOWNLOAD CV ↓
      </a>

    </div>
  </details>

</header>
      {/* ================= HERO / HOME ================= */}
      <section className="hero section" id="home">

        <div className="hero-content">

          <p className="eyebrow">
            HELLO, I'M
          </p>

          <h1 className="hero-name">
            Aqsa Zafar
          </h1>

          <p className="hero-degree">
            MPhil / MS Computer Science
          </p>

          <p className="hero-role">
            Fresh Graduate
            <span>•</span>
            Computer Science
            <span>•</span>
            Problem Solver
          </p>

          <p className="hero-text">
            A motivated and responsible individual with good communication
            and organizational skills. Passionate about learning new concepts,
            solving problems and applying academic knowledge in a professional
            environment.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              VIEW MY WORK
              <span>→</span>
            </a>

            <a
              href="/Aqsa_Zafar_CV_Final.pdf"
              className="secondary-btn"
              target="_blank"
              rel="noreferrer"
            >
              DOWNLOAD CV
              <span>↓</span>
            </a>

          </div>

          <div className="social-links">

            <a
              href="https://www.instagram.com/designs_by_az/"
              target="_blank"
              rel="noreferrer"
            >
              INSTAGRAM
            </a>

            <a href="mailto:aqsazafar051@gmail.com">
              EMAIL
            </a>

            <a
              href="https://wa.me/923076125498"
              target="_blank"
              rel="noreferrer"
            >
              WHATSAPP
            </a>

          </div>

        </div>


        {/* HOME DECORATIVE ART */}
        <div className="hero-art">

          <div className="arch">
            <div className="arch-glow"></div>
          </div>

          <div className="flower flower-one">✦</div>

          <div className="flower flower-two">✦</div>

          <div className="flower flower-three">✦</div>

          <div className="design-circle">
            <span>ACADEMIC</span>
            <span>•</span>
            <span>CREATIVE</span>
            <span>•</span>
            <span>TECHNOLOGY</span>
          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}
      <section className="stats-section">

        <div className="stat">
          <div className="stat-icon">◇</div>
          <div>
            <strong>MPhil / MS</strong>
            <small>Computer Science</small>
          </div>
        </div>

        <div className="stat">
          <div className="stat-icon">◎</div>
          <div>
            <strong>BS</strong>
            <small>Information Technology</small>
          </div>
        </div>

        <div className="stat">
          <div className="stat-icon">05</div>
          <div>
            <strong>Projects</strong>
            <small>Academic & Web Work</small>
          </div>
        </div>

        <div className="stat">
          <div className="stat-icon">01</div>
          <div>
            <strong>Research</strong>
            <small>MPhil / MS Thesis</small>
          </div>
        </div>

      </section>


      {/* ================= ABOUT ================= */}
      <section className="about-grid section" id="about">

        <div className="about-text">

          <p className="section-label">
            ABOUT ME
          </p>

          <h2>
            A motivated mind
            <br />
            ready to <i>grow.</i>
          </h2>

          <p>
            I am a fresh MPhil / MS Computer Science graduate with a background
            in Information Technology. I enjoy learning new concepts,
            developing my knowledge and solving problems through practical
            work.
          </p>

          <p>
            My academic journey has helped me develop strong organizational,
            problem-solving and communication abilities while working on
            academic and practical projects.
          </p>

          <a href="#education" className="text-btn">
            Explore My Journey →
          </a>

        </div>


        <div className="about-highlight">

          <p className="quote-mark">“</p>

          <h3>Learning.</h3>

          <p>
            Continuously learning, improving my skills and looking for
            opportunities where I can apply my knowledge in a professional
            environment.
          </p>

          <div className="mini-line"></div>

          <h3>Building.</h3>

          <p>
            Turning academic knowledge and ideas into useful practical work.
          </p>

          <div className="mini-line"></div>

          <h3>Growing.</h3>

          <p>
            Ready to learn new skills and gain meaningful professional
            experience.
          </p>

        </div>

      </section>


      {/* ================= EDUCATION ================= */}
      <section className="education-section section" id="education">

        <div className="section-heading">

          <div>
            <p className="section-label">
              EDUCATION
            </p>

            <h2>
              My academic journey
            </h2>
          </div>

          <span className="heading-number">
            01
          </span>

        </div>


        <div className="education-timeline">

          {education.map((item, index) => (

            <div className="education-item" key={index}>

              <div className="timeline-dot"></div>

              <p className="education-year">
                {item.year}
              </p>

              <h3>
                {item.degree}
              </h3>

              <p>
                {item.institute}
              </p>

            </div>

          ))}

        </div>

      </section>


      {/* ================= SKILLS ================= */}
      <section className="skills-section section" id="skills">

        <div className="section-heading">

          <div>

            <p className="section-label">
              SKILLS
            </p>

            <h2>
              What I bring with me
            </h2>

          </div>

        </div>


        <div className="skills-layout">

          <div className="skills-intro">

            <p>
              My skills are built around organization, communication, computer
              operations, problem solving and the ability to work calmly and
              effectively under pressure.
            </p>

          </div>


          <div className="skills-list">

            {skills.map((skill, index) => (

              <div className="skill-item" key={index}>

                <span>✦</span>

                {skill}

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* ================= PROJECTS ================= */}
      <section className="projects-section section" id="projects">

        <div className="section-heading projects-heading">

          <div>

            <p className="section-label">
              SELECTED WORK
            </p>

            <h2>
              Projects & creations
            </h2>

          </div>

          <span className="heading-note">
            Click any project to visit
          </span>

        </div>


        <div className="project-grid">

          {projects.map((project) => (

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="project-card"
              key={project.number}
            >

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-visual">

                <div className="project-glow"></div>

                <span>
                  AZ
                </span>

              </div>

              <p className="project-category">
                {project.category}
              </p>

              <h3>
                {project.title}
              </h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-link">
                Visit Project
                <span>↗</span>
              </div>

            </a>

          ))}

        </div>

      </section>


      {/* ================= RESEARCH ================= */}
      <section className="research-section section" id="research">

        <div className="research-content">

          <div>

            <p className="section-label">
              RESEARCH / THESIS
            </p>

            <h2>
              Detection of fruit type and Size Estimation Using Deep Learning
            </h2>

            <p>
              MPhil / MS Computer Science research thesis focused on fruit
              detection and size estimation using deep learning.
            </p>

            <div className="research-tags">

              <span>Deep Learning</span>
              <span>Computer Vision</span>
              <span>Research</span>

            </div>

            <a
              href="https://colab.research.google.com/drive/1RAIWUTvafWx2MCsLOjBYhOAAqNdrhyG6"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              Open Research Notebook ↗
            </a>

          </div>


          <div className="research-mark">

            <span>
              MS
            </span>

            <small>
              RESEARCH
            </small>

          </div>

        </div>

      </section>


      {/* ================= SEMINARS ================= */}
      <section className="seminars-section section" id="seminars">

        <div className="section-heading">

          <div>

            <p className="section-label">
              SEMINARS & WORKSHOP
            </p>

            <h2>
              Learning beyond the classroom
            </h2>

          </div>

        </div>


        <div className="seminar-grid">

          <div className="seminar-card">

            <span className="seminar-icon">
              ◇
            </span>

            <p className="seminar-type">
              SEMINAR
            </p>

            <h3>
              “How Computer Like Human”
            </h3>

            <p>
              Attended Seminar in University of Agricultural Faisalabad,
              Punjab Pakistan on “How Computer Like Human”.
            </p>

          </div>


          <div className="seminar-card">

            <span className="seminar-icon">
              ◇
            </span>

            <p className="seminar-type">
              WORKSHOP
            </p>

            <h3>
              “Networking”
            </h3>

            <p>
              Attended Workshop in Government University of Agricultural
              Faisalabad, Punjab Pakistan on “Networking”.
            </p>

          </div>

        </div>

      </section>


      {/* ================= LANGUAGES + HOBBIES ================= */}
      <section className="extra-section section">

        <div className="extra-card">

          <p className="section-label">
            LANGUAGES
          </p>

          <div className="pill-list">

            {languages.map((language) => (
              <span key={language}>
                {language}
              </span>
            ))}

          </div>

        </div>


       

      </section>


      {/* ================= CONTACT ================= */}
      <section className="contact-section section" id="contact">

        <div className="contact-intro">

          <p className="section-label">
            LET&apos;S CONNECT
          </p>

          <h2>
            Let&apos;s talk about
            <br />
            <i>opportunities.</i>
          </h2>

          <p>
            I am currently looking for opportunities to learn, grow and
            contribute in a professional environment.
          </p>

        </div>


        <div className="contact-links">

          <a
            href="mailto:aqsazafar051@gmail.com"
            className="contact-card"
          >

            <span className="contact-icon">
              ✉
            </span>

            <div>
              <small>EMAIL</small>
              <strong>
                aqsazafar051@gmail.com
              </strong>
            </div>

            <span>↗</span>

          </a>


          <a
            href="tel:+923076125498"
            className="contact-card"
          >

            <span className="contact-icon">
              ⌕
            </span>

            <div>
              <small>PHONE</small>
              <strong>
                0307-6125498
              </strong>
            </div>

            <span>↗</span>

          </a>


          <a
            href="https://wa.me/923076125498"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >

            <span className="contact-icon">
              ◉
            </span>

            <div>
              <small>WHATSAPP</small>
              <strong>
                Chat with me
              </strong>
            </div>

            <span>↗</span>

          </a>


          <a
            href="https://www.instagram.com/designs_by_az/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >

            <span className="contact-icon">
              ◎
            </span>

            <div>
              <small>INSTAGRAM</small>
              <strong>
                @designs_by_az
              </strong>
            </div>

            <span>↗</span>

          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer>

        <div className="footer-logo">
          AZ
        </div>

        <p>
          © 2026 Aqsa Zafar. All Rights Reserved.
        </p>

        <a href="#home">
          Back to top ↑
        </a>

      </footer>

    </main>
  );
}