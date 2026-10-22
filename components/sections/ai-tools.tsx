import type { CSSProperties } from "react";
import { Mark } from "@/components/ds/brand";
import { AI_TOOLS } from "@/content/ai-tools";

/**
 * The AI tools we build with, as cards floating around the Deeds Lab mark.
 */
export function AiTools() {
  return (
    <div className="dl-tools">
      <div className="dl-tools__copy">
        <h3 className="h4">The AI tools we build with.</h3>
        <p className="body dl-muted">
          Models and coding agents that scope, write, test and review alongside
          our engineers. People decide what ships.
        </p>
        <p className="caption dl-muted">
          Logos belong to their owners. Deeds Lab is not affiliated with or
          endorsed by them.
        </p>
      </div>
      <AiToolsStage />
    </div>
  );
}

/**
 * Just the stage: the mark with the tool cards around it. On load the cards
 * spread out from behind the mark, then float; CSS only, still with reduced motion.
 */
export function AiToolsStage() {
  return (
    <div className="dl-tools__stage">
      <div className="dl-tools__glow" aria-hidden="true" />
      <Mark size={260} decorative className="dl-tools__mark" />
      <ul className="dl-tools__list">
        {AI_TOOLS.map((tool, i) => (
          <li
            key={tool.name}
            className="dl-tools__chip"
            // Unitless positions (percent of the stage) and the card's order, for
            // the CSS that places it and staggers its entrance.
            style={
              {
                "--cx": tool.at.x,
                "--cy": tool.at.y,
                "--pcx": tool.phoneAt.x,
                "--pcy": tool.phoneAt.y,
                "--i": i,
              } as CSSProperties
            }
          >
            <div className="dl-tools__card">
              <svg
                viewBox={tool.viewBox}
                width={28}
                height={28}
                aria-hidden="true"
                focusable="false"
                dangerouslySetInnerHTML={{ __html: tool.svg }}
              />
              <span className="dl-tools__name">{tool.name}</span>
              <span className="dl-sr">: {tool.role}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
