import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { Hero } from "@/components/ds/hero";
import { Figure } from "@/components/ds/figure";
import { Section } from "@/components/ds/section";
import { Intro } from "@/components/ds/intro";
import { CompareTable } from "@/components/ds/compare-table";
import { Cta } from "@/components/ds/cta";
import { CALENDLY_URL } from "@/components/site/nav";

export const metadata = pageMetadata({
  title: "Compare your options",
  description:
    "Without a technical team, there are seven ways to get a first product made. Each one is the right choice for someone. Here's when, including when it isn't us.",
  path: "/compare",
});

export default function ComparePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Compare", path: "/compare" }])}
      />
      <Hero
        title="Studio, freelancer, agency or [[AI app builder]]?"
        lead="Without a technical team, there are seven ways to get a first product made. Each one is the right choice for someone. Here's when, including when it isn't us."
        aside={<Figure name="fork" />}
      />
      <Section tone="sunken">
        <div className="dl-stack dl-stack--lg">
          <Intro title="The [[short]] version." />
          <CompareTable
            caption="Deeds Lab compared with a freelancer, a pitch deck agency and an AI app builder"
            columns={[
              "Deeds Lab",
              "Freelancer",
              "Pitch deck agency",
              "AI app builder",
            ]}
            rows={[
              {
                label: "What you get",
                values: [
                  "Specification, clickable prototype and investor deck, then the product",
                  "Usually design or code, rarely both",
                  "A deck, sometimes with mock screens",
                  "A working first draft you assemble yourself",
                ],
              },
              {
                label: "Something investors can click",
                values: [
                  "In 2–3 weeks",
                  "Depends on the person",
                  "No",
                  "In days, if you can steer it",
                ],
              },
              {
                label: "Who scopes the product",
                values: ["We do, with you", "Usually you", "You", "You"],
              },
              {
                label: "Ready for real users and payments",
                values: [
                  "Yes, after the build",
                  "Depends on the person",
                  "No",
                  "Once an engineer has checked it",
                ],
              },
              {
                label: "Best when",
                values: [
                  "You need to raise or launch and have no technical team",
                  "You can scope and manage the work yourself",
                  "The product exists and needs its story told",
                  "You want to test an idea before spending real money",
                ],
              },
            ]}
          />
        </div>
      </Section>
      <Section>
        <div className="dl-stack dl-stack--lg">
          <Intro title="When each one is the [[right choice]]." />
          <div className="dl-cols-2">
            <div className="dl-stack dl-stack--sm">
              <h3 className="h5">A freelancer</h3>
              <p className="body dl-muted">
                Right when you can write the specification, judge the work and
                manage the person. A freelancer is usually cheaper than a
                studio. The risk is that scoping, design and every decision land
                on you, and if the freelancer leaves halfway, the knowledge
                leaves too.
              </p>
            </div>
            <div className="dl-stack dl-stack--sm">
              <h3 className="h5">A UK development agency</h3>
              <p className="body dl-muted">
                Right when you need a large team, or people in the room in
                London. You'll pay London rates, and for the layers that come
                with them: account managers, project managers, offices.
              </p>
            </div>
            <div className="dl-stack dl-stack--sm">
              <h3 className="h5">A pitch deck agency</h3>
              <p className="body dl-muted">
                Right when the product already exists and the story is what's
                missing. It won't give investors anything to click, and it won't
                help you build what the deck promises.
              </p>
            </div>
            <div className="dl-stack dl-stack--sm">
              <h3 className="h5">An AI app builder (Lovable, Bolt, Replit)</h3>
              <p className="body dl-muted">
                Right for testing an idea before you spend real money: you can
                have something working in days, for the price of a subscription.
                Before real users, payments or private data arrive, get an
                engineer to check it. The usual problems are data any visitor
                can read, keys left where the browser can see them, and code
                nobody can safely change.
              </p>
            </div>
            <div className="dl-stack dl-stack--sm">
              <h3 className="h5">A fractional CTO</h3>
              <p className="body dl-muted">
                A fractional CTO is a senior technical leader you hire for a few
                days a month to make technical decisions, hire engineers and
                manage suppliers. Right when you have engineers, or are about to
                hire them, and need someone senior to lead them. With no
                engineers yet, a fractional CTO usually ends up hiring a studio
                or freelancers anyway, so you pay for the leader and the team.
              </p>
            </div>
            <div className="dl-stack dl-stack--sm">
              <h3 className="h5">
                A founding engineer or technical co-founder
              </h3>
              <p className="body dl-muted">
                Right when the product is the company and you can offer equity
                or a senior salary for years. It's the best long-term answer,
                and the right person takes months to find. Many founders build a
                first version with a studio while they look; ours is written to
                be handed over.
              </p>
            </div>
            <article className="dl-card">
              <h3 className="h5">A product studio like us</h3>
              <p className="body dl-muted">
                Right when you need something real to show investors or users
                soon, have no technical team, and want one team to scope, design
                and build. Wrong when you only need a quick prototype, or have
                engineers already.
              </p>
            </article>
          </div>
        </div>
      </Section>
      <Cta
        title="Still [[not sure]]?"
        body="Book a call and tell us where you are. We'll say which of these fits, even when it isn't us."
        cta={{
          label: "Book a 20-minute call",
          href: CALENDLY_URL,
        }}
      />
    </>
  );
}
