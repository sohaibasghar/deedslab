import { BookingsPrototype } from "@/components/prototypes/bookings-prototype";
import { StockPrototype } from "@/components/prototypes/stock-prototype";
import { LivePrototype } from "@/components/prototypes/live-prototype";

export type PrototypeVariant =
  "platform" | "bookings" | "stock" | "signup" | "draft";

/** A small product mock for a media well: a live demo or a looping illustration. */
export function Prototype({
  variant = "platform",
}: {
  variant?: PrototypeVariant;
}) {
  if (variant === "bookings") {
    return <BookingsPrototype />;
  }
  if (variant === "stock") {
    return <StockPrototype />;
  }
  if (variant === "signup") {
    return (
      <div className="dl-proto dl-proto--signup" aria-hidden="true">
        <div className="dl-proto__app">
          <div className="dl-proto__form">
            <b className="dl-proto__title">Create your account</b>
            <span className="dl-proto__field">
              <span className="dl-proto__type">founder@yourcompany.com</span>
            </span>
            <span className="dl-proto__plans">
              <i>Starter</i>
              <i className="dl-proto__plan2">Team</i>
              <i>Scale</i>
            </span>
            <span className="dl-proto__cta">Continue</span>
          </div>
          <div className="dl-proto__done">
            <span className="dl-proto__check">✓</span>
            <b>You're in</b>
            <span>Workspace ready</span>
          </div>
          <span className="dl-proto__cursor" />
        </div>
      </div>
    );
  }
  if (variant === "draft") {
    return (
      <div className="dl-proto dl-proto--draft" aria-hidden="true">
        <div className="dl-proto__app">
          <div className="dl-proto__doc">
            <b>Product idea.docx</b>
            <i
              style={{
                width: "88%",
              }}
            />
            <i
              style={{
                width: "94%",
              }}
            />
            <i
              style={{
                width: "70%",
              }}
            />
            <i
              style={{
                width: "90%",
              }}
            />
            <i
              style={{
                width: "58%",
              }}
            />
            <i
              style={{
                width: "84%",
              }}
            />
          </div>
          <div className="dl-proto__screen">
            <span className="dl-proto__bar" />
            <span className="dl-proto__tile dl-proto__tile--a" />
            <span className="dl-proto__tile dl-proto__tile--b" />
            <span className="dl-proto__tile dl-proto__tile--c" />
            <span className="dl-proto__cta">Get started</span>
          </div>
          <span className="dl-proto__handle" />
        </div>
      </div>
    );
  }
  return <LivePrototype />;
}
