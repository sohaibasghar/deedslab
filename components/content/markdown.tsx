import ReactMarkdown, { type Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { Anchor } from "@/components/ds/anchor";

// Markdown rendered with the site's type styles. External links open in a new
// tab; tables and code blocks scroll sideways inside their own box on phones.
const COMPONENTS: Components = {
  h2: ({ children }) => <h2 className="h4">{children}</h2>,
  h3: ({ children }) => <h3 className="h5">{children}</h3>,
  p: ({ children }) => <p className="body">{children}</p>,
  ul: ({ children }) => <ul className="body">{children}</ul>,
  ol: ({ children }) => <ol className="body">{children}</ol>,
  blockquote: ({ children }) => (
    <blockquote className="dl-md__quote">{children}</blockquote>
  ),
  a: ({ href = "", children }) =>
    /^https?:/.test(href) ? (
      <a
        href={href}
        className="dl-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ) : (
      <Anchor href={href} className="dl-link">
        {children}
      </Anchor>
    ),
  table: ({ children }) => (
    <div
      className="dl-md__scroll"
      role="region"
      aria-label="Table"
      tabIndex={0}
    >
      <table className="body-s">{children}</table>
    </div>
  ),
  pre: ({ children }) => (
    <div className="dl-md__scroll" role="region" aria-label="Code" tabIndex={0}>
      <pre className="mono-s">{children}</pre>
    </div>
  ),
};

export function Markdown({ children }: { children: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={COMPONENTS}>
      {children}
    </ReactMarkdown>
  );
}
