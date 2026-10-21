import { Anchor } from "@/components/ds/anchor";
import type { LegalDocument as LegalDoc } from "@/content/legal";

/** A policy page body: a short list of contents, then each section with its own anchor. */
export function LegalDocument({ document }: { document: LegalDoc }) {
  return (
    <div className="dl-prose">
      <nav aria-label="Contents" className="dl-legal__toc">
        <p className="label">Contents</p>
        <ol className="body-s">
          {document.sections.map((section) => (
            <li key={section.id}>
              <Anchor href={`#${section.id}`}>{section.heading}</Anchor>
            </li>
          ))}
        </ol>
      </nav>
      {document.sections.map((section) => (
        <section key={section.id} id={section.id} className="dl-legal__section">
          <h2 className="h4">{section.heading}</h2>
          {section.paragraphs?.map((text) => (
            <p key={text} className="body">
              {text}
            </p>
          ))}
          {section.list ? (
            <ul className="body">
              {section.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          {section.after?.map((text) => (
            <p key={text} className="body">
              {text}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}
