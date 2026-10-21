import { SITE } from "@/lib/site";

/**
 * Company details used by the legal pages. Replace the bracketed values before
 * launch; they appear wherever the policies name the company.
 */
export const COMPANY = {
  tradingName: SITE.name,
  registeredName: "[Registered company name]",
  companyNumber: "[Company number]",
  registeredAddress: "[Registered address]",
  city: "Lahore, Pakistan",
  email: SITE.email,
  governingLaw: "[England and Wales]",
};

/** The one-line company footnote on the About and Contact pages. */
export const companyDetails = () =>
  [
    COMPANY.registeredName,
    `Company no. ${COMPANY.companyNumber}`,
    COMPANY.registeredAddress,
    COMPANY.email,
  ].join(" · ");

export const LEGAL_LAST_UPDATED = "22 October 2026";

export type LegalSection = {
  id: string;
  heading: string;
  paragraphs?: string[];
  list?: string[];
  /** Text after the list. */
  after?: string[];
};

export type LegalDocument = {
  title: string;
  summary: string;
  sections: LegalSection[];
};

const companyLine = `${COMPANY.tradingName} is the trading name of ${COMPANY.registeredName}, company number ${COMPANY.companyNumber}, registered at ${COMPANY.registeredAddress}.`;

export const PRIVACY_POLICY: LegalDocument = {
  title: "Privacy policy",
  summary:
    "What we collect when you visit the site, contact us or work with us, why we collect it, who else handles it, how long we keep it and what you can ask us to do with it.",
  sections: [
    {
      id: "who-we-are",
      heading: "Who we are",
      paragraphs: [
        companyLine,
        `We decide how your personal data is used, which makes us its controller under UK and EU data protection law. Questions about this policy go to ${COMPANY.email}.`,
      ],
    },
    {
      id: "what-we-collect",
      heading: "What we collect",
      list: [
        "What you send us: your name, email address, company, what you tell us about your project, and anything you attach or link to.",
        "Booking details: the time you choose and the details you give when you book a call through Calendly.",
        "Our conversations: emails, call notes and messages exchanged while we discuss or deliver work.",
        "Client records: contact details for the people we work with, contracts, invoices and payment records.",
        "Technical data: the basic information any web server receives, such as IP address, browser type and the pages requested, kept in short-lived logs to keep the site secure.",
        "Your cookie choice, stored in your own browser's local storage.",
      ],
      after: [
        "We don't ask for sensitive personal data, such as health, religion or political views. Please don't send it to us unless your project needs it, and if it does, we'll agree how to handle it in writing first.",
      ],
    },
    {
      id: "why-we-use-it",
      heading: "Why we use it, and on what basis",
      list: [
        "To reply to your enquiry and run the 20-minute call: our legitimate interest in answering people who contact us.",
        "To scope, price and deliver work you've asked for: to take steps before a contract and then to perform it.",
        "To invoice, keep accounts and meet tax and legal duties: legal obligation.",
        "To keep the site secure and working: our legitimate interest in running a safe website.",
        "To set optional cookies, such as Calendly's: your consent, which you can withdraw at any time.",
      ],
      after: [
        "We don't sell your data, use it for advertising, or add you to a mailing list without asking.",
      ],
    },
    {
      id: "who-else-handles-it",
      heading: "Who else handles it",
      paragraphs: [
        "We use a small number of service providers who process data on our behalf and only on our instructions:",
      ],
      list: [
        "Calendly, for booking calls.",
        "Our email and document providers, for correspondence and project files.",
        "Our website hosting provider, which serves the site and keeps its logs.",
        "The tools we use to deliver your project, such as code hosting and project management, as agreed with you.",
        "Our accountants and professional advisers, where needed.",
      ],
      after: [
        "We may also share data if the law requires it, or to protect our rights in a dispute.",
      ],
    },
    {
      id: "international-transfers",
      heading: "Where your data is handled",
      paragraphs: [
        "Our team works in Lahore, Pakistan, so your enquiry and project information are read and worked on there. Some of our service providers are based in the United States or elsewhere outside the UK.",
        "When data leaves the UK or the EU, we use recognised safeguards, such as the UK International Data Transfer Agreement or the EU Standard Contractual Clauses, or rely on the receiving country having adequate protection.",
      ],
    },
    {
      id: "how-long-we-keep-it",
      heading: "How long we keep it",
      list: [
        "Enquiries that don't become projects: 12 months after our last contact.",
        "Client records, contracts and invoices: 6 years after the project ends, for tax and legal purposes.",
        "Server logs: up to 30 days, unless needed to investigate a security problem.",
        "Your cookie choice: until you clear it from your browser.",
      ],
    },
    {
      id: "security",
      heading: "How we protect it",
      paragraphs: [
        "Access is limited to the people who need it, accounts are protected with strong passwords and two-factor authentication, and data travels over encrypted connections. No system is perfectly secure, but if something goes wrong that affects you, we'll tell you and the regulator as the law requires.",
      ],
    },
    {
      id: "your-rights",
      heading: "Your rights",
      paragraphs: ["You can ask us to:"],
      list: [
        "Give you a copy of the personal data we hold about you.",
        "Correct anything that's wrong or incomplete.",
        "Delete your data, where we don't need to keep it.",
        "Limit how we use it, or object to a use based on our legitimate interests.",
        "Send your data to you or another organisation in a portable format.",
        "Withdraw consent you've given, such as for optional cookies.",
      ],
      after: [
        `Email ${COMPANY.email} and we'll reply within one month. It's free unless a request is clearly unfounded or excessive.`,
        "If you're unhappy with how we've handled your data, you can complain to the Information Commissioner's Office (ico.org.uk), or to the data protection authority where you live. We'd appreciate the chance to put it right first.",
      ],
    },
    {
      id: "cookies",
      heading: "Cookies",
      paragraphs: [
        "The site sets no advertising or tracking cookies. It remembers your cookie-banner answer in your browser's local storage, and the booking calendar sets Calendly's own cookies only if you accept all. Our fonts are served from our own site, so loading a page doesn't contact Google. The cookie policy has the full list.",
      ],
    },
    {
      id: "children",
      heading: "Children",
      paragraphs: [
        "Our services are for businesses and the adults who run them. We don't knowingly collect data from anyone under 16.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to this policy",
      paragraphs: [
        "If we change how we use personal data, we'll update this page and the date at the top. If a change matters to people we already hold data about, we'll tell them directly.",
      ],
    },
  ],
};

export const TERMS: LegalDocument = {
  title: "Terms and conditions",
  summary:
    "The terms for using this website and booking a call with us, and the principles our project agreements are built on.",
  sections: [
    {
      id: "about-these-terms",
      heading: "About these terms",
      paragraphs: [
        companyLine,
        "These terms apply when you use deedslab.co or contact us through it. By using the site, you accept them. If you don't, please don't use the site.",
        "Paid work is governed by a written proposal and a signed agreement. Where that agreement and these terms differ, the agreement wins.",
      ],
    },
    {
      id: "using-the-site",
      heading: "Using the site",
      paragraphs: [
        "You may browse, read and share links to the site. You agree not to:",
      ],
      list: [
        "Use it for anything unlawful, fraudulent or harmful.",
        "Try to break into, overload or disrupt the site or the systems behind it.",
        "Copy large parts of it, or scrape it automatically, for use elsewhere.",
        "Send us anything that contains malware, or that you don't have the right to share.",
      ],
      after: [
        "We may change, suspend or withdraw any part of the site at any time.",
      ],
    },
    {
      id: "information-on-the-site",
      heading: "Information on the site",
      paragraphs: [
        "What's on the site is general information about how we work. It isn't legal, financial, investment or technical advice for your situation, and you shouldn't rely on it as such.",
        "Timelines, prices and examples on the site are indicative. They become commitments only when they're confirmed in a written proposal. Case studies describe what happened for those clients; your results will depend on your product, your market and you.",
      ],
    },
    {
      id: "calls-and-enquiries",
      heading: "Calls and enquiries",
      paragraphs: [
        "The 20-minute call is free and creates no obligation on either side. We'll tell you honestly whether we can help. We may decline any project, and we don't need to give a reason.",
        "Anything you tell us about your idea before an agreement is signed, we treat as confidential and use only to talk to you about the work. If you need a non-disclosure agreement before you share details, ask and we'll sign a reasonable one.",
      ],
    },
    {
      id: "working-with-us",
      heading: "Working with us",
      paragraphs: [
        "Every engagement starts with a written proposal that sets out the scope, price, timeline and payment terms, and is confirmed in a signed agreement. Our agreements are built on these principles:",
      ],
      list: [
        "Fixed prices for the Discovery Sprint and for MVP milestones, agreed before work starts. Changes in scope are priced and agreed in writing before we do them.",
        "MVP builds are paid by milestone, and you see a working build every week.",
        "Resource augmentation is billed hourly or monthly at the rates in your agreement, for the people and time agreed.",
        "Half the Discovery Sprint fee comes off an MVP build started within 90 days of the sprint ending.",
        "The code lives in a repository under your account from day one. All intellectual property in the work we create for you is assigned to you, as set out in the agreement, once the related invoices are paid.",
        "We fix defects in work we built that appear in the first 30 days after launch, at no cost. Support after that is agreed separately.",
        "Either side can end an engagement on the notice in the agreement. You pay for work done up to that point, and you keep what you've paid for.",
      ],
    },
    {
      id: "intellectual-property",
      heading: "Our content and brand",
      paragraphs: [
        `The site's text, design, illustrations, code and the ${COMPANY.tradingName} name and mark belong to us or the people who licensed them to us. You may not use them without our written permission, except to link to the site or quote it briefly with credit.`,
        "Client names, logos and screenshots shown in our work belong to those clients and are shown with their permission.",
      ],
    },
    {
      id: "other-sites",
      heading: "Links to other sites",
      paragraphs: [
        "We link to other websites, such as our clients' products and our booking calendar. We don't control them and aren't responsible for their content, availability or privacy practices.",
      ],
    },
    {
      id: "liability",
      heading: "Our liability",
      paragraphs: [
        "We work to keep the site accurate and available, but we provide it as it is, without guarantees that it will always be complete, current or free of errors.",
        "To the extent the law allows, we're not liable for any loss arising from your use of the site, including lost profits, revenue, data or opportunity. Our liability for paid work is set out in the project agreement.",
        "Nothing in these terms limits liability that can't legally be limited, such as for death or personal injury caused by negligence, or for fraud.",
      ],
    },
    {
      id: "privacy",
      heading: "Your privacy",
      paragraphs: [
        "How we handle personal data is explained in our privacy policy and cookie policy, which form part of these terms.",
      ],
    },
    {
      id: "changes",
      heading: "Changes to these terms",
      paragraphs: [
        "We may update these terms. The version on this page, with the date at the top, is the one that applies. Changes don't affect project agreements already signed.",
      ],
    },
    {
      id: "law",
      heading: "Law and disputes",
      paragraphs: [
        `These terms are governed by the law of ${COMPANY.governingLaw}, and its courts have jurisdiction over any dispute about them. If you have a complaint, please email ${COMPANY.email} first; most things are easier to sort out in a conversation.`,
      ],
    },
  ],
};
