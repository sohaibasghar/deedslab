import type { Project } from "@/components/sections/project-card";
import type { SuccessStory } from "@/components/sections/success-story";

const WIDE = { width: 960, height: 360 };

export const PROJECTS: Project[] = [
  {
    name: "Sikila® – Personalized Sickle Cell Companion App",
    shortName: "Sikila",
    href: "https://www.sikila.com/",
    image: { src: "/images/project-sikila.jpg", ...WIDE },
    category: "Frontend",
    year: "2026",
    summary:
      "Sikila® is an AI-driven health support app that helps people with sickle cell track symptoms, stay on top of medication and hydration, and connect with community support.",
    stack: ["Flutter", "NestJS", "TypeORM"],
  },
  {
    name: "GrantX – AI-Powered Grant Discovery Platform",
    shortName: "GrantX",
    href: "https://grantx.app/",
    image: { src: "/images/project-grantx.jpg", ...WIDE },
    category: "Frontend",
    year: "2025",
    summary:
      "GrantX helps researchers discover and secure funding, using AI to match them against one of the largest funder databases in seconds, not weeks.",
    stack: ["Next.js", "Supabase", "Prisma"],
  },
  {
    name: "Echodrop (Mavric)",
    shortName: "Echodrop",
    href: "https://echodrop.cb-dev.link/login",
    image: { src: "/images/project-echodrop.jpg", ...WIDE },
    category: "Frontend",
    year: "2024",
    summary:
      "A platform dedicated to promoting talented artists by showcasing their music to new audiences.",
    stack: ["Next.js", "NestJS", "Postgres"],
  },
  {
    name: "Linus Analytics (Mavric)",
    shortName: "Linus Analytics",
    href: "https://www.linusanalytics.com/",
    image: { src: "/images/project-linus-analytics.jpg", ...WIDE },
    category: "Backend",
    year: "2023",
    summary:
      "A multi-tenant, cloud-based system for metal scrap collection that integrates IoT weighing with manufacturing analytics.",
    stack: ["Next.js", "Node.js", "Postgres"],
  },
  {
    name: "Sparehub",
    shortName: "Sparehub",
    href: "https://www.sparehub.com/",
    image: { src: "/images/project-sparehub.jpg", width: 720, height: 270 },
    category: "Frontend",
    year: "2023",
    summary:
      "An online marketplace for automobile spare parts, with dedicated experiences for stores, sellers and admins.",
    stack: ["Next.js", "NestJS", "Postgres"],
  },
  {
    name: "Welfie",
    shortName: "Welfie",
    href: "https://www.welfie.health/",
    image: { src: "/images/project-welfie.jpg", ...WIDE },
    category: "Frontend",
    summary:
      "Health platform for online doctor sessions and COVID-19 test and vaccine status management.",
    stack: ["React", "Material UI", "Postgres"],
  },
];

export const PROJECTS_PAGE = {
  title: "Our [[clients]].",
  lead: "Founders and teams came to us with an idea, a deadline or a product that had to scale. These are the products they launched with us, from AI health apps to IoT analytics.",
  body: "Every client starts somewhere different: an idea in a document, a deck with a deadline, or a product that has outgrown its first version. We work as part of your team, tell you plainly what it will take, and show you working software every week. You talk to the people building it, not an account manager. When we hand over, the code, the designs and the know-how are yours.",
  story: {
    tag: "Client story",
    outcome: "Funded on a prototype.",
    client: "A UK construction technology company",
    summary:
      "The founder came to us with his platform written down and nothing to show investors. He raised funding on what we made, then commissioned the full build.",
    timeline: [
      { when: "Week 0", what: "A written idea, no technical team" },
      {
        when: "Weeks 1–3",
        what: "Specification, clickable prototype and investor deck",
      },
      { when: "Then", what: "Funding raised on the prototype" },
      { when: "After", what: "Full web application, built by us" },
    ],
    link: {
      label: "Read the case study →",
      href: "/work/construction-platform",
    },
  } satisfies SuccessStory,
  featuredTitle: "Featured [[projects]].",
  /** What the work below has in common. */
  themes: {
    title: "What the work has [[in common]].",
    lead: "Different sectors, the same hard parts. These are the problems we've solved more than once.",
    items: [
      {
        title: "AI where it earns its place",
        body: "Sikila tracks symptoms, medication and hydration; GrantX matches researchers against one of the largest funder databases in seconds. AI does a job the user can see, not a demo.",
      },
      {
        title: "Platforms with many sides",
        body: "Sparehub serves stores, sellers and admins from one product. Linus Analytics runs many tenants on one cloud system. Roles, permissions and data kept apart are built in from the start.",
      },
      {
        title: "Data that has to be right",
        body: "Health records in Welfie and Sikila, live IoT weights in Linus Analytics. When the numbers matter, we design the data model before the screens.",
      },
    ],
  },
};
