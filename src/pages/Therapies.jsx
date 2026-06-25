import { useState } from "react";
import Header from "../components/Header";
import TherapyCard from "../components/TherapyCard";
import TherapyModal from "../components/TherapyModal";
import therapies from "../data/therapies";

import therapiesVideo from "../assets/videos/therapie-video.mp4";

export default function Therapies() {
  const [selectedTherapy, setSelectedTherapy] = useState(null);

  return (
    <>
      <Header />

      <main className="therapies-page">
        <section className="therapies-hero contact-video-hero">
          <video src={therapiesVideo} autoPlay muted loop playsInline />
          <div className="contact-video-overlay" />

          <div className="container therapies-hero-content">
            <span className="eyebrow">Protocolos Terapéuticos</span>

            <h1>
              Terapias diseñadas
              <br />
              para restaurar equilibrio
            </h1>

            <p>
              Cada terapia trabaja sobre el origen del desequilibrio, combinando
              técnicas corporales, enfoque energético y seguimiento personalizado.
            </p>
          </div>
        </section>

        <section className="therapy-catalog">
          <div className="container">
            {therapies.map((group) => (
              <div className="therapy-category" key={group.category}>
                <div className="category-header">
                  <span>{group.category}</span>
                </div>

                <div className="catalog-grid">
                  {group.items.map((therapy) => (
                    <TherapyCard
                      key={therapy.title}
                      therapy={therapy}
                      onClick={() => setSelectedTherapy(therapy)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="therapy-help">
          <div className="container therapy-help-content">
            <div>
              <span className="section-tag">Evaluación Inicial</span>

              <h2>
                ¿No sabes qué terapia
                <br />
                elegir?
              </h2>

              <p>
                Agenda una evaluación y te ayudamos a definir el protocolo más
                adecuado para tu cuerpo y tus objetivos.
              </p>
            </div>

            <a href="/contacto" className="btn btn-primary">
              Agendar Evaluación
            </a>
          </div>
        </section>
      </main>

      <TherapyModal
        therapy={selectedTherapy}
        onClose={() => setSelectedTherapy(null)}
      />
    </>
  );
}