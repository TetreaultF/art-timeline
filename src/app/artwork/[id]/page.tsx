import { notFound } from "next/navigation";
import Link from "next/link";
import ArtworkViewer from "@/components/ArtworkViewer";

import { artworks } from "@/data/artworks/artworks";

export function generateStaticParams() {
  return artworks.map((artwork) => ({
    id: artwork.id,
  }));
}

export default async function ArtworkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const artwork = artworks.find((a) => a.id === id);

  if (!artwork) return notFound();

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "white",
        paddingBottom: 80,
      }}
    >
      {/* NAV */}

      <div
        style={{
          padding: "30px 40px 0",
        }}
      >
        <Link
          href={`/movement/${artwork.movement}`}
          style={{
            color: "#aaa",
            textDecoration: "none",
            fontSize: 14,
          }}
        >
          ← Retour au mouvement
        </Link>
      </div>

      {/* HEADER */}

      <div
        style={{
          padding: "30px 80px",
          maxWidth: 1400,
        }}
      >
        <h1
          style={{
            fontSize: 48,
            margin: 0,
            marginBottom: 10,
            fontWeight: 700,
          }}
        >
          {artwork.title}
        </h1>

        <div
          style={{
            color: "#ddd",
            fontSize: 22,
            marginBottom: 8,
          }}
        >
          {artwork.artist}, {artwork.date}
        </div>

        <div
          style={{
            color: "#999",
            fontSize: 16,
          }}
        >
          {artwork.location}
        </div>
      </div>

      {/* IMAGE */}
      <ArtworkViewer
        src={artwork.image}
        alt={artwork.title}
      />

      {/* DESCRIPTION */}

      <div
        style={{
          width: "100%",
          paddingLeft: 80,
          paddingRight: 80,
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            fontSize: 28,
            marginBottom: 20,
          }}
        >
          Description
        </h2>

        <p
          style={{
            color: "#ddd",
            fontSize: 18,
            lineHeight: 1.8,
            textAlign: "justify",
            whiteSpace: "pre-line",
          }}
        >
          {artwork.description}
        </p>
      </div>
    </div>
  );
}