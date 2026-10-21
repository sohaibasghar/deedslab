import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/ds/hero";
import { TextLink } from "@/components/ds/text-link";

export const metadata = pageMetadata({
  title: "Page removed",
  description: "It isn't coming back. Here's what we're working on now.",
  path: "/removed",
  noIndex: true,
});

export default function RemovedPage() {
  return (
    <>
      <Hero
        title="This page has been [[removed]]."
        lead="It isn't coming back. Here's what we're working on now."
        actions={
          <>
            <TextLink href="/projects">Projects →</TextLink>
            <TextLink href="/">Home →</TextLink>
          </>
        }
      />
    </>
  );
}
