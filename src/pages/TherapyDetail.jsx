import Header from "../components/Header";

import podalImg from "../assets/images/podal-therapie-image.webp";

export default function TherapyDetail() {
  return (
    <>
      <Header />

      <main className="therapy-detail-page">
        <section className="therapy-detail-hero">
          <div className="container therapy-detail-grid">
            <div className="therapy-detail-copy">
              <span className="eyebrow">
                Terapia Integrativa
              </span>

              <h1>
                Masaje
                <br />
                Podal
              </h1>

              <p>
                Terapia enfocada en estimular puntos reflejos del pie para
                favorecer el equilibrio energético, reducir tensión acumulada
                y mejorar la circulación.
              </p>

              <div className="therapy-meta">
                <div>
                  <strong>Duración</strong>
                  <span>60 min</span>
                </div>

                <div>
                  <strong>Sesiones</strong>
                  <span>1 - 4 recomendadas</span>
                </div>
              </div>

              <a
                href="/contacto"
                className="btn btn-primary"
              >
                Agendar Evaluación
              </a>
            </div>

            <div className="therapy-detail-image">
              <img
                src={podalImg}
                alt="Masaje Podal"
              />
            </div>
          </div>
        </section>

        <section className="therapy-description">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">
                Descripción
              </span>

              <h2>
                ¿Cómo funciona?
              </h2>

              <p>
                Mediante presión específica en puntos reflejos del pie,
                esta terapia busca estimular órganos y sistemas del cuerpo,
                promoviendo relajación profunda y bienestar integral.
              </p>
            </div>
          </div>
        </section>

        <section className="therapy-benefits">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">
                Beneficios
              </span>

              <h2>
                Lo que puede ayudarte a mejorar
              </h2>
            </div>

            <div className="benefits-grid">
              <Benefit text="Disminución del estrés y ansiedad" />
              <Benefit text="Mejora de circulación" />
              <Benefit text="Relajación profunda" />
              <Benefit text="Equilibrio energético" />
              <Benefit text="Descanso y sueño reparador" />
              <Benefit text="Bienestar general" />
            </div>
          </div>
        </section>

        <section className="therapy-process">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">
                Proceso
              </span>

              <h2>
                ¿Qué sucede durante la sesión?
              </h2>
            </div>

            <div className="process-steps">
              <ProcessStep
                number="01"
                title="Evaluación"
                text="Identificación de síntomas y objetivos."
              />

              <ProcessStep
                number="02"
                title="Aplicación"
                text="Trabajo terapéutico personalizado."
              />

              <ProcessStep
                number="03"
                title="Seguimiento"
                text="Recomendaciones para potenciar resultados."
              />
            </div>
          </div>
        </section>

        <section className="therapy-cta">
          <div className="container">
            <span className="section-tag">
              Agenda tu sesión
            </span>

            <h2>
              Comienza tu proceso
              <br />
              de recuperación.
            </h2>

            <div className="hero-actions">
              <a
                href="/contacto"
                className="btn btn-primary"
              >
                Agendar
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

function Benefit({ text }) {
  return (
    <div className="benefit-card">
      {text}
    </div>
  );
}

function ProcessStep({
  number,
  title,
  text,
}) {
  return (
    <div className="process-step">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}