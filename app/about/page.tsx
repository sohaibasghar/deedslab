import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { Facts } from "@/components/ds/facts";
import { Figure } from "@/components/ds/figure";
import { Hero } from "@/components/ds/hero";
import { Intro } from "@/components/ds/intro";
import { Person } from "@/components/ds/person";
import { Section } from "@/components/ds/section";
import { ClosingCta } from "@/components/sections/closing-cta";
import { SocialLinks } from "@/components/site/social-links";
import { SOCIAL_LINKS } from "@/content/social";
import { ABOUT_PAGE } from "@/content/about";
import { COMPANY } from "@/content/company";
import { TEAM } from "@/content/team";

export const metadata = pageMetadata({
  title: "About",
  description: ABOUT_PAGE.lead,
  path: "/about",
});

export default function AboutPage() {
  const { lahore, name, principles } = ABOUT_PAGE;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "About", path: "/about" }])} />
      <Hero
        title={ABOUT_PAGE.title}
        lead={ABOUT_PAGE.lead}
        aside={<Figure name="exploded" />}
      />
      <Section>
        <div className="dl-stack dl-stack--lg">
          <Intro title={ABOUT_PAGE.teamTitle} />
          <div className="dl-cols-2">
            {TEAM.map((member) => (
              <Person
                key={member.name}
                photo={member.photo}
                name={member.name}
                role={member.role}
                bio={member.bio}
                linkedin={member.linkedin}
              />
            ))}
          </div>
        </div>
      </Section>
      <Section tone="sunken">
        <div className="dl-stack dl-stack--lg">
          <div className="dl-split dl-split--center">
            <div className="dl-stack dl-stack--lg">
              <Intro title={lahore.title} />
              <div className="dl-stack dl-measure">
                {lahore.paragraphs.map((text) => (
                  <p key={text} className="body-l">
                    {text}
                  </p>
                ))}
              </div>
            </div>
            <Figure name="zones" />
          </div>
          <Facts className="dl-facts--grid" items={lahore.facts} />
        </div>
      </Section>
      <Section tone="ink">
        <div className="dl-split dl-split--flip dl-split--center">
          <div className="dl-stack dl-stack--lg">
            <Intro title={name.title} />
            <div className="dl-stack dl-measure">
              {name.paragraphs.map((text) => (
                <p key={text} className="body-l">
                  {text}
                </p>
              ))}
            </div>
          </div>
          <Figure name="overlap" />
        </div>
      </Section>
      <Section>
        <div className="dl-stack dl-stack--lg">
          <Intro title={principles.title} />
          <div className="dl-cols-3">
            {principles.items.map((item) => (
              <article key={item.title} className="dl-card">
                <h3 className="h5">{item.title}</h3>
                <p className="body dl-muted">{item.body}</p>
              </article>
            ))}
          </div>
          <p className="body-s dl-muted">
            {COMPANY.aboutLine}
            {SOCIAL_LINKS.length ? " · " : null}
            <SocialLinks links={SOCIAL_LINKS} />
          </p>
        </div>
      </Section>
      <ClosingCta />
    </>
  );
}
