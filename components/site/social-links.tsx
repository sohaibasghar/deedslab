import { Fragment } from "react";
import { TextLink } from "@/components/ds/text-link";
import type { SocialLink } from "@/content/social";

/** Profile links in a line, each opening in a new tab. Renders nothing when empty. */
export function SocialLinks({
  links,
  separator = " · ",
}: {
  links: SocialLink[];
  separator?: string;
}) {
  if (!links.length) return null;
  return (
    <>
      {links.map((link, i) => (
        <Fragment key={link.href}>
          {i > 0 ? separator : null}
          <TextLink href={link.href} external>
            {link.label}
          </TextLink>
        </Fragment>
      ))}
    </>
  );
}
