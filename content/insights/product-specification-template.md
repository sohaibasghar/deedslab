---
title: How to write a product specification
slug: product-specification-template
description: A plain-English guide and template for writing a product specification that developers can estimate and build from, even if you are not technical.
author: Adil
role: CEO & Founder, Deeds Lab
published: 2026-10-22
updated: 2026-10-22
keywords: product specification template, how to write a product spec, product requirements document, PRD template, app specification
---

A product specification is the document a developer estimates and builds from. A good one lets two different teams give you comparable estimates. A weak one gets you estimates that differ wildly, because each team has filled the gaps with its own guesses.

You don't need to be technical to write one. You need to be specific.

## What goes in it

Atlassian's guidance on product requirements documents lists the same core parts most teams use: goals, background, assumptions, user stories, design, open questions and what is out of scope. For a founder's first product, we use a version in plain language.

### 1. One paragraph on the product

What it is, who it is for and the problem it solves. If you can't write this paragraph, stop and work on it before anything else.

### 2. Goals

What version one has to achieve, in measurable terms where possible. "Twenty pilot customers using it weekly" is a goal. "A great user experience" is not.

### 3. Users

List each kind of user. For most products there are two or three: for example, a customer, a staff member and an admin. For each, write what they need to do.

### 4. User stories

For each kind of user, list what they do, one line each, in this form:

> As a [type of user], I want to [do something] so that [reason].

Rank them. Mark which ones version one must have and which can wait.

### 5. Screens

List every screen and what is on it. Sketches are fine; photos of paper sketches are fine. If you have a clickable prototype, link it here.

### 6. Data

What information the product stores and where it comes from: user accounts, orders, bookings, uploaded files. Note anything sensitive, such as health or financial data, because it changes how the product must be built.

### 7. Integrations

Anything outside the product it depends on: payments, email, maps, calendars, another company's system. Each one adds work, so list them all.

### 8. Rules

The business logic: who can see what, what happens when something is cancelled, how prices or permissions are calculated. Complicated rules are the most common reason estimates grow.

### 9. Assumptions and open questions

What you are assuming but haven't confirmed, and what you haven't decided. Writing these down early saves rework later.

### 10. What version one leaves out

The most valuable section, and the one founders skip. A clear "not in version one" list stops scope growing quietly during the build.

## How long should it be?

As long as it needs to be to answer the questions above, and no longer. For a typical first version that is often between five and fifteen pages, plus screens. Keep it as a living document: update it when decisions change, and date the changes.

## Common mistakes

- **Describing the solution instead of the need.** "Use a chatbot" is a solution. "Customers need answers to delivery questions outside office hours" is a need. Let the team propose the solution.
- **Leaving out the admin side.** Someone has to manage users, refunds and content. That is part of the product.
- **No priorities.** If everything is essential, the estimate will be for everything.
- **No out-of-scope list.** Without one, every good idea during the build becomes a change.

## A template to copy

```
Product: [one paragraph]
Goals for version one: [3-5 measurable goals]
Users: [type] - needs to [...]
User stories (ranked, must/later): As a [...], I want to [...] so that [...]
Screens: [name] - [what's on it]
Data: [what is stored, what is sensitive]
Integrations: [payments, email, ...]
Rules: [who can see what, edge cases]
Assumptions: [...]
Open questions: [...]
Not in version one: [...]
```

## Sources

- [How to create a product requirements document, Atlassian](https://www.atlassian.com/agile/product-management/requirements)
- [What is an MVP?, Lean Startup Co.](https://leanstartup.co/what-is-an-mvp/)
