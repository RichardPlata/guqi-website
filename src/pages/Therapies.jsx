import Header from "../components/Header";

import podalImg from "../assets/images/podal-therapie-image.jpg";
import neckImg from "../assets/images/neck-therapie-image.jpg";
import lymphaticImg from "../assets/images/lymphatic-therapie-image.jpg";
import tuinaImg from "../assets/images/tuinacorporal-therapie-image.jpg";
import fasciaImg from "../assets/images/fascia-therapie-image.jpg";

const therapies = [
  {
    category: "Bienestar y Relajación",
    items: [
      {
        title: "Masaje Podal",
        duration: "60 min",
        image: podalImg,
        text: "Estimula puntos reflejos para aliviar tensión, mejorar circulación y restaurar equilibrio.",
      },
      {
        title: "Masaje Tuina Cuerpo Completo",
        duration: "90 min",
        image: tuinaImg,
        text: "Trabajo corporal integral para liberar tensión, mejorar movilidad y equilibrar energía.",
      },
      {
        title: "Extremidades",
        duration: "45 min",
        image: tuinaImg,
        text: "Atención enfocada en brazos, piernas y articulaciones para recuperar ligereza.",
      },
    ],
  },
  {
    category: "Dolor y Recuperación",
    items: [
      {
        title: "Masaje Tuina Medio Cuerpo",
        duration: "60 min",
        image: fasciaImg,
        text: "Tratamiento para espalda, cuello y zonas de tensión muscular persistente.",
      },
      {
        title: "Masaje Tuina Cervical",
        duration: "45 min",
        image: neckImg,
        text: "Enfoque cervical para aliviar rigidez, contracturas y estrés acumulado.",
      },
      {
        title: "Sacro, Espalda, Cuello y Brazos",
        duration: "75 min",
        image: fasciaImg,
        text: "Protocolo focalizado para tensión profunda en cadena posterior y hombros.",
      },
    ],
  },
  {
    category: "Estética y Remodelación",
    items: [
      {
        title: "Reafirmante",
        duration: "60 min",
        image: lymphaticImg,
        text: "Terapia corporal orientada a tonificar y mejorar apariencia de la piel.",
      },
      {
        title: "Reductivo",
        duration: "60 min",
        image: lymphaticImg,
        text: "Técnica corporal enfocada en moldear, activar circulación y reducir retención.",
      },
      {
        title: "Celulitis y Estrías",
        duration: "60 min",
        image: lymphaticImg,
        text: "Tratamiento estético para mejorar textura, firmeza y apariencia corporal.",
      },
      {
        title: "Velo de Novia",
        duration: "60 min",
        image: tuinaImg,
        text: "Protocolo de preparación corporal para luminosidad, relajación y bienestar.",
      },
      {
        title: "Celulitis con Termoterapia y Acupuntura",
        duration: "75 min",
        image: lymphaticImg,
        text: "Combinación terapéutica para estimular circulación y mejorar tejido.",
      },
    ],
  },
  {
    category: "Drenaje y Circulación",
    items: [
      {
        title: "Drenaje Linfático Completo",
        duration: "90 min",
        image: lymphaticImg,
        text: "Estimula el sistema linfático para reducir retención, inflamación y pesadez.",
      },
    ],
  },
];

export default function Therapies() {
  return (
    <>
      <Header />

      <main className="therapies-page">
        <section className="therapies-hero">
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
                    <article className="catalog-card" key={therapy.title}>
                      <img src={therapy.image} alt={therapy.title} />

                      <div className="catalog-card-body">
                        <span className="catalog-duration">
                          {therapy.duration}
                        </span>

                        <h2>{therapy.title}</h2>
                        <p>{therapy.text}</p>

                        <a href="/terapias/tuina-cervical">
                          Ver detalle
                        </a>
                      </div>
                    </article>
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
    </>
  );
}