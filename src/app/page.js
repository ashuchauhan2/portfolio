import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import SystemDiagram from "@/components/SystemDiagram";
import ProjectDiagram from "@/components/ProjectDiagram";
import {
  profile,
  selectedWork,
  experience,
  focusAreas,
} from "@/data/portfolio";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <section className="hero page-width" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" /> SOFTWARE DEVELOPER · ONTARIO,
              CANADA
            </div>
            <h1 id="hero-title">
              Building software.
              <br />
              Thinking in <span>systems.</span>
            </h1>
            <p className="hero-description">
              I’m Ashu Chauhan. I turn practical problems into useful software,
              and I’m taking that foundation toward autonomous systems,
              robotics, and applied AI.
            </p>
            <a className="hero-education" href="#direction">
              <span className="education-symbol" aria-hidden="true">
                GT
              </span>
              <div className="education-copy">
                <div className="education-title">
                  <strong>Georgia Tech</strong>
                  <span className="education-status">Incoming</span>
                </div>
                <span className="education-degree">M.S. Computer Science</span>
                <span className="education-context">
                  OMSCS · Planned robotics specialization
                </span>
              </div>
              <ArrowUpRight
                className="education-arrow"
                size={18}
                aria-hidden="true"
              />
            </a>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <ArrowDown size={16} />
              </a>
              <a
                className="text-link"
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View resume <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <SystemDiagram />
          <div className="hero-bottom">
            <span>Practical experience. A deliberate next direction.</span>
            <a href="#work">
              SCROLL TO EXPLORE <ArrowDown size={13} />
            </a>
          </div>
        </section>

        <section
          id="work"
          className="work-section section-border"
          aria-labelledby="work-title"
        >
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow section-index">01 / SELECTED WORK</p>
                <h2 id="work-title">
                  Useful software.
                  <br />
                  Real constraints.
                </h2>
              </div>
              <p>
                A few projects that show how I approach a problem, work through
                the details, and get something into people’s hands.
              </p>
            </div>
            <div className="project-list">
              {selectedWork.map((project, index) => (
                <article className="project" key={project.slug}>
                  <div className="project-copy">
                    <div className="project-meta">
                      <span className="mono">0{index + 1}</span>
                      <span>{project.category}</span>
                      <span className="project-status">{project.status}</span>
                    </div>
                    <h3>
                      <Link href={`/work/${project.slug}`}>
                        {project.title}
                      </Link>
                    </h3>
                    <p>{project.summary}</p>
                    <ul
                      className="technology-list"
                      aria-label={`${project.title} technologies`}
                    >
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                    <Link
                      className="text-link project-link"
                      href={`/work/${project.slug}`}
                    >
                      Read the project <ArrowUpRight size={16} />
                    </Link>
                  </div>
                  <Link
                    className={`project-visual project-visual-${project.slug}`}
                    href={`/work/${project.slug}`}
                    aria-label={`Read about ${project.title}`}
                  >
                    <ProjectDiagram kind={project.slug} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="background"
          className="background-section page-width"
          aria-labelledby="background-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow section-index">02 / BACKGROUND</p>
              <h2 id="background-title">A practical foundation.</h2>
            </div>
          </div>
          <div className="background-grid">
            <div className="background-copy">
              <p className="body-lead">
                I like understanding the whole problem: the people using a
                system, the rules behind it, and what needs to happen when
                something goes wrong.
              </p>
              <p>
                My experience spans application development, day-to-day
                technical troubleshooting, and enterprise IT support. I bring
                curiosity, ownership, and a willingness to work through the less
                obvious parts of a problem.
              </p>
              <div className="toolkit">
                <p className="eyebrow">TOOLS I’VE WORKED WITH</p>
                <p>
                  Python · Java · TypeScript · Swift · SQL
                  <br />
                  React / Next.js · PostgreSQL · Git · Linux
                </p>
              </div>
              <a
                className="text-link"
                href="/resume.pdf"
                download="Ashu_Chauhan_Resume.pdf"
              >
                Full experience in my resume <Download size={15} />
              </a>
            </div>
            <div className="experience-list">
              <p className="eyebrow">RELEVANT EXPERIENCE</p>
              {experience.map((item) => (
                <article className="experience-item" key={item.company}>
                  <div className="experience-title">
                    <h3>{item.company}</h3>
                    <span className="mono">{item.dates}</span>
                  </div>
                  <p className="experience-role">{item.role}</p>
                  <p>{item.summary}</p>
                </article>
              ))}
              <article className="experience-item education-item">
                <div className="experience-title">
                  <h3>Brock University</h3>
                  <span className="mono">2025</span>
                </div>
                <p className="experience-role">B.Sc. Computer Science</p>
                <p>
                  A foundation in algorithms, software engineering, artificial
                  intelligence, and natural language processing.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          id="direction"
          className="direction-section section-border"
          aria-labelledby="direction-title"
        >
          <div className="page-width">
            <div className="section-heading">
              <div>
                <p className="eyebrow section-index">03 / THE NEXT CHAPTER</p>
                <h2 id="direction-title">
                  From useful software
                  <br />
                  to intelligent systems.
                </h2>
              </div>
              <p>
                I’m building on my software foundation with a long-term focus on
                systems that can perceive, reason, and act in the real world.
              </p>
            </div>
            <div className="direction-grid">
              <div className="study-card">
                <div className="study-card-top">
                  <span className="mono">GEORGIA INSTITUTE OF TECHNOLOGY</span>
                  <span className="study-status">
                    <span className="status-dot" /> Incoming
                  </span>
                </div>
                <h3>M.S. Computer Science</h3>
                <p>Online Master of Science in Computer Science</p>
                <div className="study-track">
                  <span className="eyebrow">PLANNED SPECIALIZATION</span>
                  <strong>
                    Computational Perception
                    <br />
                    and Robotics
                  </strong>
                </div>
                <a
                  className="text-link"
                  href="https://omscs.gatech.edu/specialization-computational-perception-and-robotics"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About the specialization <ArrowUpRight size={15} />
                </a>
              </div>
              <div className="focus-list">
                <p className="eyebrow">AREAS I WANT TO EXPLORE</p>
                {focusAreas.map((area, i) => (
                  <div className="focus-item" key={area.title}>
                    <span className="mono">0{i + 1}</span>
                    <div>
                      <h3>{area.title}</h3>
                      <p>{area.description}</p>
                    </div>
                  </div>
                ))}
                <p className="direction-note">
                  Future projects will document the architecture, tradeoffs, and
                  evaluation behind the work.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="contact-section page-width"
          aria-labelledby="contact-title"
        >
          <div>
            <p className="eyebrow section-index">04 / GET IN TOUCH</p>
            <h2 id="contact-title">Have a problem worth solving?</h2>
            <p>
              I’m interested in software opportunities and conversations about
              AI, robotics, and autonomous systems.
            </p>
          </div>
          <div className="contact-links">
            <a
              className="button button-primary"
              href={`mailto:${profile.email}`}
            >
              Let’s talk <ArrowRight size={17} />
            </a>
            <a className="email-link" href={`mailto:${profile.email}`}>
              <Mail size={14} />
              {profile.email}
            </a>
            <div className="social-links">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
                GitHub <ArrowUpRight size={13} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
                LinkedIn <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
