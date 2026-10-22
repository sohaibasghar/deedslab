import Image from "next/image";

export type Project = {
  name: string;
  /** Short name for the screenshot link's label. */
  shortName: string;
  href: string;
  image: { src: string; width: number; height: number };
  category: string;
  year?: string;
  summary: string;
  stack: string[];
  /** The client's result, in their numbers. Shown only when set. */
  result?: string;
  /** A client quote. Shown only when set. */
  testimonial?: { quote: string; name: string; role: string };
};

const row = { display: "flex", flexWrap: "wrap", gap: "8px" } as const;

/** In-page anchor for a project's card, e.g. `project-linus-analytics`. */
export const projectAnchor = (project: Project) =>
  `project-${project.shortName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

/** A shipped client project: screenshot, discipline, year, summary and stack. */
export function ProjectCard({ project }: { project: Project }) {
  const external = { target: "_blank", rel: "noopener noreferrer" };
  return (
    <article
      id={projectAnchor(project)}
      className="dl-card"
      style={{ display: "flex", flexDirection: "column", gap: "14px" }}
    >
      <a
        href={project.href}
        {...external}
        aria-label={`Open ${project.shortName} in a new tab`}
        className="dl-shot"
      >
        <Image
          src={project.image.src}
          width={project.image.width}
          height={project.image.height}
          alt={`${project.name} screenshot`}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "8 / 3",
            objectFit: "cover",
            objectPosition: "top",
            display: "block",
          }}
        />
      </a>
      <div style={row}>
        <span className="dl-tag dl-tag--accent caption">
          {project.category}
        </span>
        {project.year ? (
          <span className="dl-tag dl-tag--outline caption">{project.year}</span>
        ) : null}
      </div>
      <h3 className="h5">
        <a
          href={project.href}
          {...external}
          style={{ color: "inherit", textDecoration: "none" }}
        >
          {project.name}
        </a>
      </h3>
      <p className="body-s dl-muted" style={{ flex: 1 }}>
        {project.summary}
      </p>
      {project.result || project.testimonial ? (
        <figure className="dl-result">
          {project.result ? <p className="h6">{project.result}</p> : null}
          {project.testimonial ? (
            <>
              <blockquote className="body-s">
                “{project.testimonial.quote}”
              </blockquote>
              <figcaption className="caption dl-muted">
                {project.testimonial.name}, {project.testimonial.role}
              </figcaption>
            </>
          ) : null}
        </figure>
      ) : null}
      <div style={row}>
        {project.stack.map((tech) => (
          <span key={tech} className="dl-tag dl-tag--outline caption">
            {tech}
          </span>
        ))}
      </div>
      <a
        href={project.href}
        {...external}
        className="dl-link body-s"
        style={{ alignSelf: "flex-start" }}
      >
        Visit site ↗
      </a>
    </article>
  );
}
