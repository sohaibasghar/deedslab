import hairline from "./engine";
import figures from "./figures";

/**
 * Draws the named figure into `stage` and starts its idle tour.
 * Returns a cleanup function that stops the tour and removes the drawing.
 */
export function mountFigure(stage, name) {
  const figure = figures[name];
  if (!figure) return () => {};
  hairline.inject(document);
  const svg = hairline.mk(
    "svg",
    { viewBox: "0 0 400 320", "aria-hidden": "true", focusable: "false" },
    stage,
  );
  const drawing = figure.mount(
    { stage, svg, read: { textContent: "" } },
    figure.range[1],
  );
  const tour = figure.tour?.length ? hairline.tour(stage, figure.tour) : null;
  return () => {
    tour?.stop();
    drawing.destroy();
    svg.remove();
  };
}
