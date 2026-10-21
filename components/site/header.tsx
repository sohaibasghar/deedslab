"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { Anchor } from "@/components/ds/anchor";
import { Logo } from "@/components/ds/brand";
import { Button } from "@/components/ds/button";
import { Icon } from "@/components/ds/icon";
import type { LinkAction } from "@/components/ds/offer";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { cx } from "@/lib/cx";

type NavLink = { label: string; href: string };

const isCurrent = (pathname: string, href: string) =>
  pathname === href || pathname.startsWith(`${href}/`);

export function Header({
  links,
  cta,
  homeHref = "/",
}: {
  links: NavLink[];
  cta?: LinkAction;
  homeHref?: string;
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Close the mobile menu when the route changes (state adjusted during render, no effect needed).
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  return (
    <header className="dl-header">
      <div className="dl-header__inner">
        <Anchor
          className="dl-header__home"
          href={homeHref}
          aria-label="Deeds Lab home"
        >
          <Logo size={22} decorative />
        </Anchor>
        <nav
          className={cx("dl-header__nav", open && "is-open")}
          id="dl-nav"
          aria-label="Main"
        >
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Anchor
                  href={link.href}
                  className="label dl-header__link"
                  aria-current={
                    isCurrent(pathname, link.href) ? "page" : undefined
                  }
                >
                  {link.label}
                </Anchor>
              </li>
            ))}
          </ul>
          <ThemeToggle className="dl-header__theme" />
          {cta ? (
            <Button href={cta.href} className="dl-header__cta">
              {cta.label}
            </Button>
          ) : null}
        </nav>
        <button
          type="button"
          className="dl-header__toggle"
          aria-expanded={open}
          aria-controls="dl-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} size={24} />
          <span className="dl-sr">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>
    </header>
  );
}
