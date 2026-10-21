import type { Metadata } from "next";
import { Hero } from "@/components/ds/hero";
import { TextLink } from "@/components/ds/text-link";
import { Section } from "@/components/ds/section";

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "It may have moved when we rebuilt the site, or the link has a typo.",
};

export default function NotFound() {
  return (
    <>
      <Hero
        title="That page [[isn't]] here."
        lead="It may have moved when we rebuilt the site, or the link has a typo."
        actions={
          <>
            <TextLink href="/">Home →</TextLink>
            <TextLink href="/services/discovery-sprint">
              Discovery Sprint →
            </TextLink>
            <TextLink href="/projects">Projects →</TextLink>
            <TextLink href="/contact">Contact →</TextLink>
          </>
        }
      />
      <Section>
        <p className="body-s dl-muted">
          {"If a link on our own site sent you here, tell us at "}
          <TextLink href="mailto:adil@deedslab.co">adil@deedslab.co</TextLink>
          {" and we'll fix it."}
        </p>
      </Section>
    </>
  );
}
