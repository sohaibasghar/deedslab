import type { Fact } from "@/components/ds/facts";

export const ABOUT_PAGE = {
  title: "The [[people]] building your product.",
  lead: "Deeds Lab is a product studio for founders without a technical team. Adil scopes and designs; Sohaib Asghar leads the engineering. Both are on your calls, and nobody stands between you and the work.",
  teamTitle: "The [[two people]] you'll talk to.",
  location: {
    title: "Why a small senior [[team]].",
    paragraphs: [
      "Because the people are good, and a senior team without London overheads means your money goes into the product rather than an office.",
      '"Outsourcing" usually means layers: an account manager, a project manager, and a team you never meet. Here it means none of them. You talk to the people designing and building your product, at hours that suit you.',
    ],
    facts: [
      { label: "Estimates", value: "Agreed in writing before work starts" },
      { label: "Ownership", value: "IP assigned to you in the contract" },
      { label: "Calls", value: "9:00–17:00 UK time" },
    ] satisfies Fact[],
  },
  name: {
    title: 'Why "[[Deeds Lab]]".',
    paragraphs: [
      "Deeds are things done, not things promised: work you can click, not a description of it. Lab is what this business is: a place where things get built and tested.",
      "The mark is two D's facing each other with a gap left open between them. That gap is the space between an idea and a working product, and closing it is the job.",
    ],
  },
  principles: {
    title: "Three things we [[hold]] to.",
    items: [
      {
        title: "Say the inconvenient thing first.",
        body: "Where we are, what a prototype won't do, and when we're the wrong choice.",
      },
      {
        title: "Point at things that exist.",
        body: "A prototype you can click beats any description of what we can do.",
      },
      {
        title: "Start small.",
        body: "Nobody should commit to a full build with a team they've never worked with. That's why the sprint exists.",
      },
    ],
  },
};
