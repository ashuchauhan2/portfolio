import { ArrowLeft, ArrowUpRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProjectDiagram from "@/components/ProjectDiagram";
import { selectedWork } from "@/data/portfolio";

export function generateStaticParams() {
  return selectedWork.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = selectedWork.find((item) => item.slug === slug);
  return project
    ? { title: project.title, description: project.summary }
    : { title: "Project not found" };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = selectedWork.find((item) => item.slug === slug);
  if (!project) notFound();
  const next =
    selectedWork[(selectedWork.indexOf(project) + 1) % selectedWork.length];
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="case-study page-width">
        <Link className="text-link back-link" href="/#work">
          <ArrowLeft size={16} />
          Back to selected work
        </Link>
        <div className="case-heading">
          <p className="eyebrow">PROJECT NOTES / {project.category}</p>
          <h1>{project.title}</h1>
          <p className="case-summary">{project.summary}</p>
          <div className="case-meta">
            <ul className="technology-list" aria-label="Project technologies">
              {project.technologies.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <span className="project-status">{project.status}</span>
          </div>
        </div>
        <div className={`case-visual project-visual-${slug}`}>
          <ProjectDiagram kind={slug} />
        </div>
        <div className="case-body">
          <section>
            <p className="eyebrow">01 / THE PROBLEM</p>
            <h2>Start with the constraint.</h2>
            <p>{project.problem}</p>
          </section>
          <section>
            <p className="eyebrow">02 / MY CONTRIBUTION</p>
            <h2>What I worked on.</h2>
            <p>{project.contribution}</p>
            <div className="case-decisions">
              {project.decisions.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <p className="eyebrow">03 / THE RESULT</p>
            <h2>What came out of it.</h2>
            <p>{project.outcome}</p>
            <p className="case-takeaway">{project.takeaway}</p>
            <div className="case-actions">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  className="button button-primary"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                  <ArrowUpRight size={16} />
                </a>
              ))}
            </div>
          </section>
        </div>
        <div className="next-project">
          <div>
            <span className="eyebrow">NEXT PROJECT</span>
            <Link href={`/work/${next.slug}`}>
              {next.title}
              <ArrowRight size={24} />
            </Link>
          </div>
          <Link className="text-link" href="/#work">
            All selected work <ArrowUpRight size={16} />
          </Link>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
