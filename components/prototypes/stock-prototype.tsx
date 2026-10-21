"use client";

import { useState } from "react";
import { DemoCursor } from "@/components/prototypes/demo-cursor";
import { useDemoLoop } from "@/components/prototypes/use-demo-loop";
import { cx } from "@/lib/cx";

const STOCK = [
  { sku: "Oak shelf", qty: 120, add: 80 },
  { sku: "Brass hinge", qty: 640, add: 360 },
  { sku: "Linen cover", qty: 45, add: 155 },
  { sku: "Steel frame", qty: 210, add: 90 },
];

const AUTOPLAY = [2, 0];
const LOW_STOCK = 100;
const MAX_QTY = Math.max(...STOCK.map((item) => item.qty + item.add));

const initial = () => STOCK.map(() => false);

/** A warehouse board; tap Receive to book a delivery into stock. */
export function StockPrototype() {
  const [received, setReceived] = useState(initial);
  const { root, targets, cursor, touched, touch } = useDemoLoop(
    (index) =>
      setReceived((list) => list.map((done, i) => i === index || done)),
    () => setReceived(initial()),
    AUTOPLAY,
  );
  const quantities = STOCK.map(
    (item, i) => item.qty + (received[i] ? item.add : 0),
  );
  const onShelf = quantities.reduce((sum, qty) => sum + qty, 0);
  const incoming = received.filter((done) => !done).length;
  const low = quantities.filter((qty) => qty < LOW_STOCK).length;

  return (
    <div
      ref={root}
      className="dl-proto dl-proto--board"
      role="group"
      aria-label="Interactive demo: warehouse stock"
    >
      <div className="dl-board dl-board--stock" onPointerDown={touch}>
        <div className="dl-stock__kpis">
          <span className="dl-stock__kpi">
            <i>On shelf</i>
            <b>{onShelf.toLocaleString("en-GB")}</b>
          </span>
          <span className="dl-stock__kpi">
            <i>Incoming</i>
            <b>{incoming}</b>
          </span>
          <span className={cx("dl-stock__kpi", low > 0 && "is-warn")}>
            <i>Low stock</i>
            <b>{low}</b>
          </span>
        </div>
        <div className="dl-stock__list">
          <b className="dl-stock__head">Warehouse, Lahore</b>
          {STOCK.map((item, i) => (
            <div key={item.sku} className="dl-stock__row">
              <span className="dl-stock__sku">{item.sku}</span>
              <span className="dl-stock__bar">
                <span
                  style={{ width: `${(quantities[i] / MAX_QTY) * 100}%` }}
                  className={quantities[i] < LOW_STOCK ? "is-low" : ""}
                />
              </span>
              <span className="dl-stock__q">{quantities[i]}</span>
              <button
                type="button"
                ref={(node) => {
                  targets.current[i] = node;
                }}
                className={cx("dl-stock__btn", received[i] && "is-done")}
                disabled={received[i]}
                onClick={() => {
                  touch();
                  setReceived((list) => list.map((done, j) => j === i || done));
                }}
              >
                {received[i] ? "Received" : `Receive +${item.add}`}
              </button>
            </div>
          ))}
        </div>
        {touched ? null : (
          <span className="dl-board__hint">
            Autoplay · tap Receive to try it
          </span>
        )}
        <DemoCursor cursor={cursor} />
      </div>
    </div>
  );
}
