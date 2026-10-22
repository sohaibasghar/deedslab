import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { faqJsonLd } from "@/lib/structured-data";
import { Hero } from "@/components/ds/hero";
import { Section } from "@/components/ds/section";
import { Intro } from "@/components/ds/intro";
import { Faq } from "@/components/ds/faq";
import { ClosingCta } from "@/components/sections/closing-cta";
import { HashDetails } from "@/components/site/hash-details";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Straight answers. If yours isn't here, bring it to a 20-minute call.",
  path: "/faq",
});

const FAQ_GROUPS = [
  {
    title: "The basics",
    items: [
      {
        q: "What does Deeds Lab do?",
        a: "We turn a written idea into a scoped specification, a clickable prototype and an investor deck in 2–3 weeks, then build the product if you want us to. We work with founders who don't have a technical team.",
      },
      {
        q: "What's the difference between a prototype and an MVP?",
        a: "A prototype shows the product; an MVP is the product. Our prototypes are clickable designs you can test and pitch with in 2–3 weeks. An MVP is working software real users sign up to, and it takes 10–16 weeks.",
      },
      {
        q: "Should I use an AI app builder like Lovable or Bolt instead?",
        a: "Sometimes, yes: for testing an idea before you spend real money, they're excellent. Before real users, payments or private data arrive, have an engineer check what's underneath. The Compare page sets out the options.",
      },
      {
        q: "How quickly can you start?",
        a: "Usually within 1–2 weeks of the first call. You'll get a start date on the call.",
      },
    ],
  },
  {
    title: "Payment",
    items: [
      {
        q: "Why won't you quote from a written brief?",
        a: "Because a brief leaves out the decisions that shape the work. A short conversation finds them, then we agree the scope and an estimate in writing before work starts.",
      },
      {
        q: "Do you take equity instead of cash?",
        a: "No. You pay in cash, the product is yours outright, and our advice isn't tied to your cap table.",
      },
    ],
  },
  {
    title: "Ownership and risk",
    items: [
      {
        q: "Who owns the code?",
        a: "You do, from day one. The code lives in a repository under your company's account, the designs and the specification are yours, and the contract assigns all the intellectual property to you.",
      },
      {
        q: "Can you guarantee the prototype will help me raise?",
        a: "No, and nobody honest can. A prototype makes the idea concrete and shows you can execute, but investors back founders and markets first. It gets you the second meeting.",
      },
      {
        q: "What if the build takes longer than planned?",
        a: "We agree the scope and an estimate in writing before work starts, and we tell you early if anything changes it. If you add to the scope, we agree the addition in writing before we do it.",
      },
      {
        q: "What if I want to stop partway through a build?",
        a: "You can. Everything built so far is already in your repository. Once it has been paid for, it is yours.",
      },
    ],
  },
  {
    title: "Working with us",
    items: [
      {
        q: "When can we talk?",
        a: "Calls run between 9:00 and 17:00 UK time, and a short written update lands before your working day starts.",
      },
      {
        q: "How will we keep in touch?",
        a: "A weekly call with the people doing the work, a short written update every week, and one shared channel for questions in between.",
      },
    ],
  },
  {
    title: "After the sprint",
    items: [
      {
        q: "What if I don't want the build?",
        a: "You keep the specification, the prototype and the deck, and you owe nothing more. They work with any team.",
      },
      {
        q: "Can I take the specification to another developer?",
        a: "Yes. It's yours, and it's written so any competent team can quote from it.",
      },
      {
        q: "Do you support the product after launch?",
        a: "Yes. We fix anything we built that breaks in the first 30 days, at no cost. After that you choose a monthly arrangement for improvements, or a handover to your own team.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{ name: "FAQ", path: "/faq" }])} />
      <JsonLd data={faqJsonLd(FAQ_GROUPS.flatMap((group) => group.items))} />
      <Hero
        title="[[Questions]] founders ask."
        lead="Straight answers. If yours isn't here, bring it to a 20-minute call."
      />
      {FAQ_GROUPS.map((group, i) => (
        <Section key={group.title} tone={i % 2 === 0 ? "sunken" : "default"}>
          <div className="dl-split dl-split--reverse">
            <Intro title={group.title} />
            <Faq items={group.items} anchors />
          </div>
        </Section>
      ))}
      <ClosingCta />
      <HashDetails />
    </>
  );
}
