import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { Hero } from "@/components/ds/hero";
import { LEGAL_LAST_UPDATED } from "@/content/legal";
import { Section } from "@/components/ds/section";
import { TextLink } from "@/components/ds/text-link";

export const metadata = pageMetadata({
  title: "Cookie policy",
  description:
    "What cookies the Deeds Lab website uses, why, and how to change your choice.",
  path: "/cookies",
});

const COOKIE_TERMS = [
  [
    "What cookies are",
    "small files a website stores in your browser. Some are needed for the site to work; others remember choices or measure use.",
  ],
  [
    "What this site uses",
    "no advertising or tracking cookies. Visit statistics are anonymous and use no cookies. The one thing we store is your answer to the cookie banner, kept in your browser's local storage so we don't ask again.",
  ],
  [
    "Third parties",
    "our booking calendar is Calendly. If you open it and you've accepted all, Calendly may set its own cookies, governed by its policy. If you chose essential only, we don't load anything that sets them.",
  ],
  [
    "Your choice",
    "the banner appears on your first visit. You can change your answer any time with Cookie settings in the footer, or clear this site's data in your browser.",
  ],
  [
    "Changes",
    "if we add a tool that sets cookies, we update this page and ask again before it runs.",
  ],
  ["Questions", "adil@deedslab.co."],
];

const COOKIE_TABLE = [
  [
    "dl-cookie-consent",
    "Remembers your banner choice",
    "Essential (local storage)",
    "Until you clear it",
  ],
  [
    "Calendly cookies",
    "Run the booking calendar",
    "Third party, only if you accept all",
    "Set by Calendly",
  ],
];

export default function CookiesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([{ name: "Cookie policy", path: "/cookies" }])}
      />
      <Hero
        title="Cookie [[policy]]"
        lead={`Last updated: ${LEGAL_LAST_UPDATED}`}
      />
      <Section>
        <div className="dl-prose">
          {COOKIE_TERMS.map(([e, t]) => (
            <div key={e}>
              <h2 className="h4">{e}</h2>
              <p className="body">{t}</p>
            </div>
          ))}
          <div>
            <h2 className="h4">The list</h2>
            <div className="dl-compare">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Purpose</th>
                    <th>Type</th>
                    <th>Lifetime</th>
                  </tr>
                </thead>
                <tbody>
                  {COOKIE_TABLE.map((e) => (
                    <tr key={e[0]}>
                      {e.map((e, t) => {
                        if (t === 0) {
                          return (
                            <th
                              key={t}
                              scope="row"
                              className="dl-compare__rowhead"
                            >
                              {e}
                            </th>
                          );
                        }
                        return <td key={t}>{e}</td>;
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="body">
            <TextLink href="/privacy">Privacy policy</TextLink>
          </p>
        </div>
      </Section>
    </>
  );
}
