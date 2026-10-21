import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { Button } from "@/components/ds/button";
import { Hero } from "@/components/ds/hero";
import { Intro } from "@/components/ds/intro";
import { Section } from "@/components/ds/section";
import { ClosingCta } from "@/components/sections/closing-cta";
import { ProjectCard } from "@/components/sections/project-card";
import { SuccessStoryCard } from "@/components/sections/success-story";
import { BOOK_CALL } from "@/components/site/nav";
import { PROJECTS, PROJECTS_PAGE } from "@/content/projects";

export const metadata = pageMetadata({
  title: "Projects",
  description: PROJECTS_PAGE.lead,
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Projects", path: "/projects" }])}
      />
      <Hero
        title={PROJECTS_PAGE.title}
        lead={PROJECTS_PAGE.lead}
        body={PROJECTS_PAGE.body}
        actions={
          <>
            <Button href="#featured" size="lg">
              See the projects
            </Button>
            <Button href={BOOK_CALL.href} variant="secondary" size="lg">
              {BOOK_CALL.label}
            </Button>
          </>
        }
        aside={<SuccessStoryCard story={PROJECTS_PAGE.story} />}
      />
      <Section id="featured" tone="sunken">
        <div className="dl-stack dl-stack--lg">
          <Intro title={PROJECTS_PAGE.featuredTitle} />
          <div className="dl-cols-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.href} project={project} />
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <div className="dl-stack dl-stack--lg">
          <Intro
            title={PROJECTS_PAGE.themes.title}
            lead={PROJECTS_PAGE.themes.lead}
          />
          <div className="dl-cols-3">
            {PROJECTS_PAGE.themes.items.map((theme) => (
              <article key={theme.title} className="dl-card">
                <h3 className="h5">{theme.title}</h3>
                <p className="body dl-muted">{theme.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
      <ClosingCta />
    </>
  );
}
