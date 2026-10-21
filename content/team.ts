export type TeamMember = {
  name: string;
  role: string;
  photo: string;
  /** One line, for the home page. */
  summary: string;
  /** The longer bio on the About page. */
  bio: string;
  /** Full LinkedIn profile URL; shown on the About page when set. */
  linkedin?: string;
};

export const ADIL: TeamMember = {
  name: "Adil",
  role: "CEO & Founder",
  photo: "/images/adil.jpg",
  linkedin: "",
  summary: "Scopes every project and runs the sprint. On every client call.",
  bio: "Scopes every project, designs the product and runs the sprint. Adil moved from IT into design in 2019, and has been designing brands and products for founders since.",
};

export const SOHAIB: TeamMember = {
  name: "Sohaib Asghar",
  role: "CTO & Co-Founder",
  photo: "/images/sohaib-asghar.jpg",
  linkedin: "",
  summary: "Leads infrastructure, system design and AI-driven development.",
  bio: "As CTO, Sohaib builds products that scale, leading the infrastructure and system design behind every build. 7+ years of engineering, now driving AI-driven development from first prototype to production.",
};

export const TEAM = [ADIL, SOHAIB];
