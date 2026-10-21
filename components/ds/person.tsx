import Image from "next/image";
import { TextLink } from "@/components/ds/text-link";
import { cx } from "@/lib/cx";

type PersonProps = {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
  linkedin?: string;
  className?: string;
};

export function Person({
  name,
  role,
  bio,
  photo,
  linkedin,
  className,
}: PersonProps) {
  const initials = name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("")
    .slice(0, 2);
  return (
    <article className={cx("dl-person", className)}>
      <div className="dl-person__photo">
        {photo ? (
          <Image
            src={photo}
            alt=""
            width={800}
            height={800}
            sizes="(min-width: 1024px) 240px, 45vw"
          />
        ) : (
          <span className="h3 dl-person__initials" aria-hidden="true">
            {initials}
          </span>
        )}
      </div>
      <h3 className="h5 dl-person__name">{name}</h3>
      <p className="caption dl-person__role">{role}</p>
      {bio ? <p className="body-s dl-person__bio">{bio}</p> : null}
      {linkedin ? (
        <TextLink href={linkedin} external className="body-s">
          LinkedIn
        </TextLink>
      ) : null}
    </article>
  );
}
