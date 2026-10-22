---
title: "AI prototype to production: what to fix first"
slug: ai-prototype-to-production
description: Built your app with Lovable, Bolt or Replit? The checks to run before real users, payments or private data arrive, in the order that matters.
author: Sohaib Asghar
role: CTO & Co-Founder, Deeds Lab
published: 2026-10-22
updated: 2026-10-22
keywords: Lovable security, AI app builder production, Supabase row level security, vibe coding security, AI prototype to production
---

An app built with Lovable, Bolt or Replit can be live in days. That speed is real and useful. The risk starts when real users, payments or private data arrive, because the tools optimise for something that works, not something that is safe.

Here is the order we check things in when a founder brings us an AI-built prototype.

## 1. Who can read what

This is the most common serious problem, and it is usually invisible from the front end.

Many AI-built apps use Supabase or Firebase as the backend. In Supabase, the key that ships to the browser is designed to be public, but only if Row Level Security (RLS) is switched on and each table has policies that say who can read and write which rows. Supabase's own documentation is explicit about this. Without those policies, anyone who opens the browser's developer tools can query your tables directly.

This is not theoretical. In 2025 a vulnerability was published (CVE-2025-48757, rated critical) describing apps generated with Lovable whose RLS policies let unauthenticated visitors read or write database tables. Lovable disputed the classification, saying protecting the data is the app owner's responsibility. Either way, the lesson for founders is the same: check it yourself.

What to do:

- Turn on RLS for every table.
- Write a policy for each table that limits access to the signed-in user's own rows, or to an admin role.
- Test it by signing in as one user and trying to read another user's data.

## 2. Secrets in the browser

API keys for payments, email, AI models or admin access must never be in code the browser downloads. The Supabase service role key, for example, bypasses every RLS policy and belongs only on a server.

What to do:

- Search the built front-end code for anything that looks like a key.
- Move secret calls into server functions or edge functions.
- Rotate any key that has ever been exposed. Removing it from the code is not enough once it has been published.
- Turn on secret scanning in your repository. GitHub's push protection blocks many known key formats before they are committed.

## 3. Payments

Payment flows built by AI tools often handle the happy path well and the rest badly. Check what happens when:

- a card is declined;
- a payment succeeds but the user closes the page before the redirect;
- a refund is issued;
- someone calls your "payment succeeded" endpoint without paying.

The fix is almost always the same: treat the payment provider's signed webhook as the only source of truth, verify the signature, and never trust a success message from the browser.

## 4. Sign-up and login

Check password resets, email verification and session length. Sessions that never expire, reset links that can be reused and accounts that work before the email is confirmed are all common.

## 5. The rest of the OWASP list

The OWASP Top 10 for 2025 puts Broken Access Control first, which is exactly the RLS problem above. Security Misconfiguration is second and Software Supply Chain Failures third. For an AI-built app that means: keep dependencies updated, remove packages you don't use, and switch off debug settings before launch.

## 6. Load and running costs

Two questions founders rarely ask until it hurts: what breaks at 100 users and at 10,000, and what will hosting and AI usage cost as usage grows. AI features in particular can turn a small bill into a large one if every page load calls a model. Cache what you can and put usage limits on paid APIs.

## 7. Can another engineer change it safely?

Generated code can be hard to follow. Before you hire, ask an engineer to read it and tell you whether they could change it without breaking something. If the answer is no, that does not always mean a rebuild. Often it means tests around the critical paths and some restructuring.

## Use the tools' own checks, then get a human review

Lovable now offers a quick security scan that runs before publishing, including a review of RLS rules, and a deeper code scan you can start yourself. Its own documentation says these tools cannot guarantee complete security and recommends a professional review for apps handling sensitive data. We agree. Run the built-in scans first, fix what they find, then have an engineer review the rest.

## Fix, rebuild or ship

Sometimes the honest answer is "it's fine, ship it". More often it is a short list of fixes. A rebuild is only worth it when fixing would cost more than starting again with a clean foundation.

## Sources

- [Securing your data, Supabase documentation](https://supabase.com/docs/guides/database/secure-data)
- [CVE-2025-48757, SentinelOne vulnerability database](https://www.sentinelone.com/vulnerability-database/cve-2025-48757/)
- [OWASP Top 10:2025](https://owasp.org/Top10/2025/)
- [Security features, Lovable documentation](https://docs.lovable.dev/features/security)
- [Working with secret scanning and push protection, GitHub Docs](https://docs.github.com/en/code-security/secret-scanning/working-with-secret-scanning-and-push-protection)
