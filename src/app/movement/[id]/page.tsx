import { notFound } from "next/navigation";
import { movements } from "@/data/movements";
import { antiquityArtworks } from "@/data/artworks/antiquity";
import { medievalArtworks } from "@/data/artworks/medieval";
import { renaissanceArtworks } from "@/data/artworks/renaissance";
import { artworks } from "@/data/artworks/artworks";
import Link from "next/link";
import ArtworkGrid from "@/components/ArtworkGrid";

export default async function MovementPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const movement = movements.find((m) => m.id === id);

  if (!movement) return notFound();

  // filtre pour mouvements qui englobent plusieurs mouvements
  const movementArtworks =
    movement.id === "antiquity"
      ? antiquityArtworks
      : movement.id === "medieval"
      ? medievalArtworks
      : movement.id === "renaissance"
      ? renaissanceArtworks
      : artworks.filter((a) => a.movement === movement.id);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f0f0f",
        color: "white",
        padding: "40px 5vw",
      }}
    >
      {/* BACK */}
      <div style={{ marginBottom: 40 }}>
        <Link
          href="/"
          style={{
            color: "#aaa",
            textDecoration: "none",
            fontSize: 14,
          }}
        >
          ← Retour à la ligne du temps
        </Link>
      </div>

      {/* INFOS */}
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <div style={{ marginBottom: 20 }}>
          <div style={{ fontSize: 44, fontWeight: 700 }}>
            {movement.name}
          </div>

          <div style={{ color: "#aaa", fontSize: 16 }}>
            De {movement.start === -40000 ? "-40 000" : movement.start} à{" "}
            {movement.end}
          </div>
        </div>

        {/* COLOR STRIP */}
        <div
          style={{
            height: 4,
            width: 120,
            background: movement.color,
            marginBottom: 20,
          }}
        />

        {/* DESCRIPTION */}
        <p
          style={{
            fontSize: 18,
            lineHeight: 1.6,
            color: "#ddd",
            marginBottom: 50,
          }}
        >
          {movement.description}
        </p>

        {/* SECTIONS */}
        <div style={{ display: "grid", gap: 40 }}>
          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>
              Contexte historique
            </h2>
            <p style={{ color: "#bbb", lineHeight: 1.6 }}>
              Ici tu pourras ajouter le contexte politique, social et culturel du mouvement.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>
              Caractéristiques
            </h2>
            <p style={{ color: "#bbb", lineHeight: 1.6 }}>
              Style, techniques, thèmes, matériaux, etc.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>
              Artistes clés
            </h2>
            <p style={{ color: "#bbb", lineHeight: 1.6 }}>
              Liste d’artistes majeurs associés au mouvement.
            </p>
          </section>

          {/* ARTWORK GRID */}
          <section style={{ marginTop: 40 }}>
            <h2 style={{ fontSize: 22, marginBottom: 20 }}>
              Œuvres majeures
            </h2>

            <ArtworkGrid artworks={movementArtworks} />
          </section>
        </div>
      </div>
    </div>
  );
}