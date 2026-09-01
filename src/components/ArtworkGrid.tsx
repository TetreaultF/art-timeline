"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export type Artwork = {
  id: string;
  title: string;
  artist: string;
  date: number;
  movement: string;
  location: string;
  image: string;
  description: string;
};

export default function ArtworkGrid({
  artworks,
}: {
  artworks: Artwork[];
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [loaded, setLoaded] = useState<string[]>([]);

  return (
    <div
      style={{
        columnCount: 3,
        columnGap: 22,
        width: "100%",
      }}
    >
      {artworks.map((art, index) => {
        const isHovered = hovered === art.id;
        const isLoaded = loaded.includes(art.id);

        return (
          <Link
            key={art.id}
            href={`/artwork/${art.id}`}
            style={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <div
              onMouseEnter={() => setHovered(art.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                breakInside: "avoid",
                marginBottom: 22,
                position: "relative",
                cursor: "pointer",
                transform: isHovered ? "scale(1.025)" : "scale(1)",
                transition:
                  "transform 0.18s ease, opacity 0.4s ease",
                opacity: isLoaded ? 1 : 0,
              }}
            >
              <Image
                src={art.image}
                alt={art.title}
                width={1200}
                height={1600}
                priority={index < 8}
                onLoad={() =>
                  setLoaded((prev) =>
                    prev.includes(art.id)
                      ? prev
                      : [...prev, art.id]
                  )
                }
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />

              {/* OVERLAY */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: "12px 14px",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.82), rgba(0,0,0,0))",
                  color: "white",
                  opacity: isHovered ? 1 : 0,
                  transition: "opacity 0.18s ease",
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    fontSize: 15,
                    fontWeight: 600,
                    marginBottom: 2,
                  }}
                >
                  {art.title}
                </div>

                <div
                  style={{
                    fontSize: 12,
                    color: "#d0d0d0",
                  }}
                >
                  {art.artist}, {art.date}
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}