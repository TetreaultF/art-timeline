import Timeline from "@/components/Timeline";

export default function Home() {
  return (
    <main style={{ paddingTop: "60px", background: "#0f0f0f", color: "white" }}>

      {/* HEADER */}
      <section style={{ maxWidth: 1200, marginBottom: 20, paddingLeft: 60 }}>
        <h1 style={{ fontSize: 48, fontWeight: 700, marginBottom: 20 }}>
          Ligne du temps de l'histoire de l'art
        </h1>

        <p style={{ fontSize: 18, color: "#bbb", lineHeight: 1.5 }}>
          Explore les mouvements artistiques de 40 000 av. J.-C. à aujourd'hui.
          Navigue horizontalement dans le temps, découvre les périodes et clique
          sur chaque mouvement pour apprendre davantage sur celui-ci et ses œuvres phares.
        </p>
      </section>

      {/* TIMELINE */}
      <section>
        <Timeline />
      </section>

    </main>
  );
}