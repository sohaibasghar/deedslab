import { Anchor } from "@/components/ds/anchor";
import { cx } from "@/lib/cx";
import { Logo } from "@/components/ds/brand";
import { TextLink } from "@/components/ds/text-link";
import { CookieSettingsButton } from "@/components/site/cookie-banner";
import { SocialLinks } from "@/components/site/social-links";
import type { SocialLink } from "@/content/social";

type FooterColumn = { title: string; links: { label: string; href: string }[] };

type FooterProps = {
  tagline?: string;
  contact?: string;
  columns: FooterColumn[];
  social?: SocialLink[];
  legal?: string;
  location?: string;
  className?: string;
};

export function Footer({
  tagline,
  contact,
  columns,
  social = [],
  legal,
  location,
  className,
}: FooterProps) {
  return (
    <footer className={cx("dl-footer", className)} data-theme="ink">
      <div className="dl-footer__inner">
        <div className="dl-footer__brand">
          <Logo size={24} />
          {tagline ? (
            <p className="body-s dl-footer__tagline">{tagline}</p>
          ) : null}
          {contact ? (
            <p className="body-s dl-footer__contact">
              <TextLink href={`mailto:${contact}`}>{contact}</TextLink>
            </p>
          ) : null}
          {social.length ? (
            <p className="body-s dl-footer__contact">
              <SocialLinks links={social} />
            </p>
          ) : null}
        </div>
        <nav className="dl-footer__cols" aria-label="Footer">
          {columns.map((column) => (
            <div key={column.title} className="dl-footer__col">
              <h2 className="label dl-footer__head">{column.title}</h2>
              <ul>
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Anchor href={link.href} className="body-s dl-footer__link">
                      {link.label}
                    </Anchor>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
        <div className="caption dl-footer__base">
          <span>{legal || ""}</span>
          <span className="dl-footer__legal">
            <Anchor href="/privacy">Privacy</Anchor>
            <Anchor href="/terms">Terms</Anchor>
            <Anchor href="/cookies">Cookies</Anchor>
            <CookieSettingsButton />
          </span>
          {location ? <span>{location}</span> : null}
        </div>
      </div>
    </footer>
  );
}
