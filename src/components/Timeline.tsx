"use client";

import { useEffect, useRef, useState } from "react";
import { movements } from "@/data/movements";
import Link from "next/link";

const MIN_YEAR = -40000;
const MAX_YEAR = 2026;

const SPLIT_YEAR_1 = -3000;
const SPLIT_YEAR_2 = 1500;
const SPLIT_YEAR_3 = 1900;

const BASE_WIDTH = 4000 * 4.2;
const LEFT_PAD = 60;
const RIGHT_PAD = 30;

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function toPercent(year: number) {
  const prehistoryWeight = 0.05;   // - -3000
  const antiquityWeight = 0.15;     // -3000 - 1500
  const modernWeight = 0.10;  // 1500 - 1880
  const contemporaryWeight = 0.15;  // 1880 -

  if (year <= SPLIT_YEAR_1) {
    const t = (year - MIN_YEAR) / (SPLIT_YEAR_1 - MIN_YEAR);
    return t * prehistoryWeight * 100;
  }

  if (year <= SPLIT_YEAR_2) {
    const t = (year - SPLIT_YEAR_1) / (SPLIT_YEAR_2 - SPLIT_YEAR_1);
    return (
      prehistoryWeight * 100 +
      t * antiquityWeight * 100
    );
  }

  if (year <= SPLIT_YEAR_3) {
    const t = (year - SPLIT_YEAR_2) / (SPLIT_YEAR_3 - SPLIT_YEAR_2);
    return (
      (prehistoryWeight + antiquityWeight) * 100 +
      t * modernWeight * 100
    );
  }

  const t = (year - SPLIT_YEAR_3) / (MAX_YEAR - SPLIT_YEAR_3);

  return (
    (prehistoryWeight + antiquityWeight + modernWeight) * 100 +
    t * contemporaryWeight * 100
  );
}

function toPx(year: number, worldWidth: number) {
  const p = clamp(toPercent(year), 0, 100);
  return LEFT_PAD + (p / 100) * (worldWidth - LEFT_PAD - RIGHT_PAD);
}

function overlap(aStart: number, aEnd: number, bStart: number, bEnd: number) {
  return aStart < bEnd && bStart < aEnd;
}

const TICKS = [
  -40000, -5000, -2000, -1000, -500,
  0, 500, 1000, 1500, 
  1550, 1600, 1650, 1700, 1750, 1800, 1850, 
  1900, 1910, 1920, 1930, 1940, 1950, 1960, 1970, 1980, 1990, 2000, 2010, 2020, 2026
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(1);
  const [tooltip, setTooltip] = useState<any>(null);

  useEffect(() => {
    movements.forEach((m) => {
      if (m.image) {
        const img = new Image();
        img.src = m.image;
      }
    });

    const el = containerRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (e.ctrlKey) {
        setZoom((z) => Math.min(3, Math.max(0.5, z - e.deltaY * 0.0015)));
        return;
      }

      el.scrollLeft += e.deltaY;
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const rows: any[][] = [];
  const positioned: any[] = [];

  for (const m of movements) {
    let row = 0;

    while (rows[row]?.some((r) => overlap(m.start, m.end, r.start, r.end))) {
      row++;
    }

    if (!rows[row]) rows[row] = [];
    rows[row].push(m);
    positioned.push({ ...m, row });
  }

  const rowHeight = 55;
  const AXIS_HEIGHT = 40;

  const rawWorldWidth = BASE_WIDTH * zoom;
  const worldEnd = toPx(MAX_YEAR, rawWorldWidth) + RIGHT_PAD + 40;
  const worldWidth = worldEnd;
  const worldHeight = Math.max(300, rows.length * rowHeight + AXIS_HEIGHT);

  const axisY = worldHeight - 30;

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "70vh",
        overflowX: "auto",
        overflowY: "auto",
        background: "#0f0f0f",
        borderBottom: "1px solid #333",
        position: "relative",
        color: "white"
      }}
    >
      <div
        style={{
          width: `${worldWidth}px`,
          height: `${worldHeight}px`,
          position: "relative"
        }}
      >
        {/* AXE */}
        <div
          style={{
            position: "absolute",
            top: axisY,
            left: LEFT_PAD,
            width: toPx(MAX_YEAR, rawWorldWidth) - LEFT_PAD,
            height: 2,
            background: "#666"
          }}
        />

        {/* FLECHE FIN AXE */}
        <div
          style={{
            position: "absolute",
            top: axisY - 4,
            left: toPx(MAX_YEAR, rawWorldWidth),
            width: 0,
            height: 0,
            borderTop: "5px solid transparent",
            borderBottom: "5px solid transparent",
            borderLeft: "10px solid #666"
          }}
        />

        {/* COCHES LIGNE */}
        {TICKS.map((year) => (
          <div
            key={year}
            style={{
              position: "absolute",
              left: toPx(year, rawWorldWidth),
              top: axisY,
              transform: "translateX(-50%)",
              color: "#aaa",
              fontSize: 11
            }}
          >
            <div style={{ width: 1, height: 10, background: "#666", margin: "0 auto" }} />
            <div>{year}</div>
          </div>
        ))}

        {/* BLOCS */}
        {positioned.map((m) => {
          const leftPx = toPx(m.start, rawWorldWidth);
          const rightPx = toPx(m.end, rawWorldWidth);
          const widthPx = Math.max(rightPx - leftPx, 4);

          return (
            <Link key={m.id} href={`/movement/${m.id}`}>
              <div
                onMouseEnter={(e) =>
                  setTooltip({
                    name: m.name,
                    desc: m.description,
                    start: m.start,
                    end: m.end,
                    image: m.image,
                    x: e.clientX,
                    y: e.clientY
                  })
                }
                onMouseMove={(e) =>
                  setTooltip((t: any) =>
                    t ? { ...t, x: e.clientX, y: e.clientY } : t
                  )
                }
                onMouseLeave={() => setTooltip(null)}
                style={{
                  position: "absolute",
                  left: leftPx,
                  width: widthPx,
                  top: m.row * rowHeight,
                  height: rowHeight,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 10px",
                  background: m.color,
                  cursor: "pointer",
                  opacity: 0.92
                }}
              >
                <div style={{ fontSize: 13, fontWeight: 600, textAlign: "center" }}>
                  {m.name}
                </div>
              </div>
            </Link>
          );
        })}

        {/* LIGNE 1500 */}
        <div
          style={{
            position: "absolute",
            left: toPx(1500, rawWorldWidth),
            top: 0,
            width: 2,
            height: axisY,
            background: "#d0d0d069",
            transform: "translateX(-50%)",
            pointerEvents: "none"
          }}
        />
        {/* LIGNE 1900 */}
        <div
          style={{
            position: "absolute",
            left: toPx(1900, rawWorldWidth),
            top: 0,
            width: 2,
            height: axisY,
            background: "#d0d0d069",
            transform: "translateX(-50%)",
            pointerEvents: "none"
          }}
        />
        {/* TOOLTIP */}
        {tooltip && (
          <div
            style={{
              position: "fixed",
              left: tooltip.x,
              top: tooltip.y,
              transform: "translate(-10px, -110%)",
              width: 320,
              background: "#111",
              border: "1px solid #444",
              borderRadius: 10,
              padding: 10,
              color: "white",
              pointerEvents: "none",
              zIndex: 9999,
              display: "flex",
              gap: 12,
              alignItems: "flex-start",
              boxShadow: "0 6px 20px rgba(0,0,0,0.4)"
            }}
          >
            {tooltip.image && (
              <img
                key={tooltip.image}
                src={tooltip.image}
                alt={tooltip.name}
                style={{
                  width: 60,
                  height: 60,
                  objectFit: "cover",
                  borderRadius: 6,
                  flexShrink: 0,
                }}
              />
            )}

            <div style={{ flex: 1 }}>
              <div style={{ position: "relative", marginBottom: 6 }}>
                <div style={{ fontWeight: 600, fontSize: 14, paddingRight: 70 }}>
                  {tooltip.name}
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    fontSize: 10,
                    color: "#aaa"
                  }}
                >
                  {tooltip.start} à {tooltip.end}
                </div>
              </div>
              <div style={{ fontSize: 11, color: "#bbb", lineHeight: 1.4 }}>
                {tooltip.desc}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}