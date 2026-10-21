import type { CompareRow } from "@/components/ds/compare-table";
import type { LinkAction } from "@/components/ds/offer";
import { BOOK_CALL } from "@/components/site/nav";

export type Service = {
  /** In-page anchor on the Services page. */
  id: string;
  name: string;
  /** Where the card's button goes: the service's own page, or a call. */
  cta: LinkAction;
  tag?: string;
  summary: string;
  price?: string;
  duration: string;
  durationLabel?: string;
  includes: string[];
  note?: string;
};

export const DISCOVERY_SPRINT: Service = {
  id: "discovery-sprint",
  name: "Discovery Sprint",
  cta: { label: "Read more", href: "/services/discovery-sprint" },
  tag: "Start here",
  summary: "Your idea, turned into something concrete",
  price: "£4,000–£8,000",
  duration: "2–3 weeks",
  includes: [
    "A scoped specification any engineering team can build from",
    "A clickable prototype investors and users can try",
    "An investor deck built around the product",
    "A build estimate based on real scoping",
  ],
  note: "You own all of it. Half the fee comes off a build started within 90 days.",
};

export const MVP_DEVELOPMENT: Service = {
  id: "mvp-development",
  name: "MVP Development",
  cta: { label: "Read more", href: "/services/mvp-development" },
  summary: "The working product, designed, built and deployed",
  price: "From £25,000",
  duration: "10–16 weeks",
  includes: [
    "Design, frontend, backend, integrations and admin",
    "Milestone payments and weekly working builds",
    "Code in your own repository from day one",
    "Full IP assignment in the contract",
  ],
};

export const RESOURCE_AUGMENTATION: Service = {
  id: "resource-augmentation",
  name: "Resource Augmentation",
  cta: BOOK_CALL,
  summary: "Our engineers and designers, working inside your team",
  durationLabel: "Billing",
  duration: "Hourly or monthly",
  includes: [
    "Senior engineers and designers who join your standups, tools and repository",
    "Hourly for a burst of work, monthly for a dedicated person",
    "Start with one person and add more as you need them",
    "AI-driven development practices come with every engineer",
  ],
  note: "Rates depend on the role and seniority. You'll get them on the call.",
};

/** Not on the Services grid; it has its own page and is described there. */
export const AI_PROTOTYPE_AUDIT: Service = {
  id: "ai-prototype-to-product",
  name: "AI Prototype to Product",
  cta: { label: "Read more", href: "/services/ai-prototype-to-product" },
  summary: "An engineer's review and hardening of an app built with AI tools",
  duration: "Depends on the app",
  includes: [],
};

export const SERVICES = [
  DISCOVERY_SPRINT,
  MVP_DEVELOPMENT,
  RESOURCE_AUGMENTATION,
];

export const SERVICES_PAGE = {
  title: "[[Three ways]] to work with us.",
  lead: "Every engagement is AI-first. Most founders start with a Discovery Sprint: 2–3 weeks for a specification, a clickable prototype and an investor deck. Have a specification you trust? We quote the build straight from it. Have a team? We add engineers and designers to it by the hour or the month.",
  chooser: {
    title: "Which one do you [[need]]?",
    body: "Not sure which? That's what the 20-minute call is for.",
    caption: "Which offer you need",
    column: "Start with",
    rows: [
      {
        label: "You have an idea and nothing to show yet",
        values: ["Discovery Sprint"],
      },
      {
        label: "You need investors to see something real",
        values: ["Discovery Sprint"],
      },
      {
        label:
          "You've raised, and you have a specification and designs you trust",
        values: ["MVP Development"],
      },
      {
        label: "You've raised, but the idea still lives in documents",
        values: [
          "Discovery Sprint, then the build. Half the sprint fee comes off it.",
        ],
      },
      {
        label: "You have a team and need more hands on it",
        values: ["Resource Augmentation"],
      },
    ] satisfies CompareRow[],
  },
};
