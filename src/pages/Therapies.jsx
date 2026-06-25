import { useState } from "react";
import Header from "../components/Header";

import therapiesVideo from "../assets/videos/therapie-video.mp4";

import podalImg from "../assets/images/podal-therapie-image.webp";
import neckImg from "../assets/images/neck-therapie-image.webp";
import lymphaticImg from "../assets/images/lymphatic-therapie-image.webp";
import tuinaCompletoImg from "../assets/images/tuinacorporal-therapie-image.webp";
import tuinaMedioImg from "../assets/images/tuina-image.webp";
import sacroImg from "../assets/images/Sacro-Espalda-Cuello-Brazos-image.jpg";

import extremidadesImg from "../assets/images/extremidades-image.webp";
import reafirmanteImg from "../assets/images/reafirmante-image.webp";
import reductivoImg from "../assets/images/reductivo-image.webp";
import celulitisImg from "../assets/images/celulitis-image.webp";
import veloNoviaImg from "../assets/images/velodenovia-image.webp";
import termoImg from "../assets/images/celulitis-con-termoterapia-y-acupuntura-image.webp";

const therapies = [
  {
    category: "Bienestar y Relajación",
    items: [
      {
        title: "Masaje Podal",
        duration: "60 min",
        image: podalImg,
        text: "Estimula puntos reflejos para aliviar tensión, mejorar circulación y restaurar equilibrio.",
        description:
          "Terapia enfocada en estimular puntos reflejos del pie para favorecer relajación profunda, circulación y equilibrio energético.",
        benefits: [
          "Reduce tensión",
          "Favorece circulación",
          "Estimula puntos reflejos",
          "Promueve descanso",
        ],
        idealFor: ["Estrés", "Cansancio", "Piernas pesadas"],
      },
      {
        title: "Masaje Tuina Cuerpo Completo",
        duration: "90 min",
        image: tuinaCompletoImg,
        text: "Trabajo corporal integral para liberar tensión, mejorar movilidad y equilibrar energía.",
        description:
          "Tratamiento corporal integral basado en técnicas Tuina para liberar bloqueos, mejorar movilidad y restaurar equilibrio general.",
        benefits: [
          "Libera tensión muscular",
          "Mejora movilidad",
          "Estimula energía corporal",
          "Apoya recuperación",
        ],
        idealFor: ["Rigidez", "Estrés físico", "Dolor general"],
      },
      {
        title: "Extremidades",
        duration: "45 min",
        image: extremidadesImg,
        text: "Atención enfocada en brazos, piernas y articulaciones para recuperar ligereza.",
        description:
          "Sesión focalizada en brazos, piernas y articulaciones para reducir pesadez, mejorar circulación y recuperar movilidad.",
        benefits: [
          "Reduce pesadez",
          "Favorece circulación",
          "Mejora movilidad",
          "Relaja articulaciones",
        ],
        idealFor: ["Piernas cansadas", "Brazos tensos", "Rigidez articular"],
      },
    ],
  },
  {
    category: "Dolor y Recuperación",
    items: [
      {
        title: "Masaje Tuina Medio Cuerpo",
        duration: "60 min",
        image: tuinaMedioImg,
        text: "Tratamiento para espalda, cuello y zonas de tensión muscular persistente.",
        description:
          "Terapia enfocada en zonas de tensión persistente, especialmente espalda, cuello y hombros.",
        benefits: [
          "Disminuye rigidez",
          "Libera contracturas",
          "Mejora postura",
          "Relaja espalda",
        ],
        idealFor: ["Dolor de espalda", "Tensión cervical", "Estrés muscular"],
      },
      {
        title: "Masaje Tuina Cervical",
        duration: "45 min",
        image: neckImg,
        text: "Enfoque cervical para aliviar rigidez, contracturas y estrés acumulado.",
        description:
          "Tratamiento focalizado en cuello, hombros y zona cervical para aliviar tensión acumulada.",
        benefits: [
          "Alivia cuello rígido",
          "Reduce tensión",
          "Mejora movilidad cervical",
          "Relaja hombros",
        ],
        idealFor: ["Cervicalgia", "Estrés", "Dolor de cuello"],
      },
      {
        title: "Sacro, Espalda, Cuello y Brazos",
        duration: "75 min",
        image: sacroImg,
        text: "Protocolo focalizado para tensión profunda en cadena posterior y hombros.",
        description:
          "Protocolo completo para trabajar espalda baja, zona sacra, cuello y brazos desde una visión corporal integral.",
        benefits: [
          "Libera cadena posterior",
          "Reduce tensión profunda",
          "Mejora movilidad",
          "Relaja hombros y brazos",
        ],
        idealFor: ["Dolor lumbar", "Tensión dorsal", "Rigidez de hombros"],
      },
    ],
  },
  {
    category: "Estética y Remodelación",
    items: [
      {
        title: "Reafirmante",
        duration: "60 min",
        image: reafirmanteImg,
        text: "Terapia corporal orientada a tonificar y mejorar apariencia de la piel.",
        description:
          "Tratamiento corporal orientado a mejorar firmeza, tono y apariencia general de la piel.",
        benefits: [
          "Mejora firmeza",
          "Estimula circulación",
          "Tonifica tejido",
          "Favorece apariencia corporal",
        ],
        idealFor: ["Flacidez", "Cuidado corporal", "Mantenimiento estético"],
      },
      {
        title: "Reductivo",
        duration: "60 min",
        image: reductivoImg,
        text: "Técnica corporal enfocada en moldear, activar circulación y reducir retención.",
        description:
          "Terapia enfocada en moldear zonas específicas, activar circulación y apoyar procesos de reducción corporal.",
        benefits: [
          "Moldea zonas específicas",
          "Activa circulación",
          "Reduce retención",
          "Estimula tejido",
        ],
        idealFor: ["Retención de líquidos", "Moldeo corporal", "Bienestar estético"],
      },
      {
        title: "Celulitis y Estrías",
        duration: "60 min",
        image: celulitisImg,
        text: "Tratamiento estético para mejorar textura, firmeza y apariencia corporal.",
        description:
          "Tratamiento corporal orientado a mejorar textura de piel, firmeza y apariencia de zonas con celulitis o estrías.",
        benefits: [
          "Mejora textura",
          "Estimula piel",
          "Favorece firmeza",
          "Apoya drenaje",
        ],
        idealFor: ["Celulitis", "Estrías", "Textura irregular"],
      },
      {
        title: "Velo de Novia",
        duration: "60 min",
        image: veloNoviaImg,
        text: "Protocolo de preparación corporal para luminosidad, relajación y bienestar.",
        description:
          "Protocolo de preparación corporal y relajación profunda para lucir y sentirse mejor antes de un evento especial.",
        benefits: [
          "Relaja profundamente",
          "Mejora apariencia",
          "Reduce tensión",
          "Aporta bienestar",
        ],
        idealFor: ["Eventos especiales", "Novias", "Preparación corporal"],
      },
      {
        title: "Celulitis con Termoterapia y Acupuntura",
        duration: "75 min",
        image: termoImg,
        text: "Combinación terapéutica para estimular circulación y mejorar tejido.",
        description:
          "Tratamiento combinado que integra estímulo térmico y técnicas puntuales para favorecer circulación y tejido corporal.",
        benefits: [
          "Estimula circulación",
          "Activa tejido",
          "Apoya drenaje",
          "Mejora textura",
        ],
        idealFor: ["Celulitis", "Retención", "Tratamiento corporal avanzado"],
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
        description:
          "Terapia suave orientada a estimular el sistema linfático, reducir retención de líquidos y favorecer sensación de ligereza.",
        benefits: [
          "Reduce retención",
          "Favorece circulación",
          "Disminuye pesadez",
          "Apoya recuperación",
        ],
        idealFor: ["Inflamación", "Piernas pesadas", "Retención de líquidos"],
      },
    ],
  },
];

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
                    <article className="catalog-card" key={therapy.title}>
                      <img src={therapy.image} alt={therapy.title} />

                      <div className="catalog-card-body">
                        <span className="catalog-duration">
                          {therapy.duration}
                        </span>
                        <h2>{therapy.title}</h2>
                        <p>{therapy.text}</p>

                        <button
                          type="button"
                          className="catalog-link"
                          onClick={() => setSelectedTherapy(therapy)}
                        >
                          Ver detalle
                        </button>
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

      {selectedTherapy && (
        <div
          className="therapy-modal-backdrop"
          onClick={() => setSelectedTherapy(null)}
        >
          <div className="therapy-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="therapy-modal-close"
              onClick={() => setSelectedTherapy(null)}
            >
              ×
            </button>

            <div className="therapy-modal-image">
              <img src={selectedTherapy.image} alt={selectedTherapy.title} />
            </div>

            <div className="therapy-modal-content">
              <span className="section-tag">Detalle de terapia</span>

              <h2>{selectedTherapy.title}</h2>

              <div className="therapy-modal-meta">
                <span>{selectedTherapy.duration}</span>
              </div>

              <p>{selectedTherapy.description}</p>

              <div className="therapy-modal-lists">
                <div>
                  <h3>Beneficios</h3>
                  <ul>
                    {selectedTherapy.benefits.map((benefit) => (
                      <li key={benefit}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3>Ideal para</h3>
                  <ul>
                    {selectedTherapy.idealFor.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <p className="therapy-modal-note">
                Antes de iniciar cualquier tratamiento se realiza una evaluación
                para determinar si la terapia es adecuada para cada persona.
              </p>

              <div className="therapy-modal-actions">
                <a href="/contacto" className="btn btn-primary">
                  Agendar evaluación
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}