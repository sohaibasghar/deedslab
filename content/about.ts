import type { Fact } from "@/components/ds/facts";

export const ABOUT_PAGE = {
  title: "The [[people]] building your product, in Lahore.",
  lead: "Deeds Lab is a product studio in Lahore, Pakistan, for founders without a technical team. Adil scopes and designs; Sohaib Asghar leads the engineering. Both are on your calls, and nobody stands between you and the work.",
  teamTitle: "The [[two people]] you'll talk to.",
  lahore: {
    title: "Why a studio in [[Lahore]].",
    paragraphs: [
      "Because the people are good and the economics are honest. Senior designers and engineers in Lahore cost a fraction of their London equivalents, so a senior team costs about 40% of a London agency, and your money goes into the product rather than an office.",
      '"Offshore" usually means layers: an account manager, a project manager, and a team you never meet. Here it means none of them. You talk to the people designing and building your product, in English, at hours that suit you.',
    ],
    facts: [
      { label: "Prices", value: "In pounds, fixed before we start" },
      { label: "Ownership", value: "IP assigned to you in the contract" },
      { label: "Calls", value: "9:00–17:00 UK time" },
      { label: "Time difference", value: "+4 hours in summer, +5 in winter" },
    ] satisfies Fact[],
  },
  name: {
    title: 'Why "[[Deeds Lab]]".',
    paragraphs: [
      "Deeds is inherited: the family, the track record, the reason we're not starting from nothing. Lab is what this business is: a place where things get built and tested.",
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
