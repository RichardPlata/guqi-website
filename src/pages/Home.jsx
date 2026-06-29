import Header from "../components/Header";
import logoSymbol from "../assets/logo/guqi-symbol.svg";

import heroVideo from "../assets/videos/hero-video.mp4";
import ctaVideo from "../assets/videos/cta-video.mp4";

import podalImg from "../assets/images/podal-therapie-image.webp";
import neckImg from "../assets/images/neck-therapie-image.webp";
import lymphaticImg from "../assets/images/lymphatic-therapie-image.webp";
import tuinaImg from "../assets/images/tuinacorporal-therapie-image.webp";

export default function Home() {
  return (
    <>
      <Header />

      <main className="home-page">
        <section className="hero">
          <div className="container hero-content">
            <div className="hero-copy">
              <span className="eyebrow">Centro Integrativo</span>

              <h1 className="hero-title">
                <span>El custodio</span>
                <span>
                  <em>de tu</em>
                </span>
                <span>bienestar vital</span>
              </h1>

              <p>
                Medicina integrativa de precisión que combina biomagnetoterapia,
                terapia fascial, Tuina y filosofía oriental para restablecer el
                equilibrio energético del cuerpo.
              </p>

              <div className="hero-actions">
                <a href="/contacto" className="btn btn-primary">
                  Agendar Evaluación
                </a>
                <a href="/terapias" className="btn btn-secondary">
                  Explorar Terapias
                </a>
              </div>

              <a href="#terapias-destacadas" className="scroll-indicator">
                <span />
                Descubrir
              </a>
            </div>

            <div className="hero-visual">
              <img src={logoSymbol} alt="" className="hero-watermark" />

              <div className="hero-media">
                <video src={heroVideo} autoPlay muted loop playsInline />
              </div>
            </div>
          </div>
        </section>

        <section className="approach">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Pilares de Nuestra Práctica</span>
              <h2>
                Un enfoque que va
                <br />
                más allá del síntoma
              </h2>
              <p>
                En GU-QI evaluamos el sistema completo: energético, estructural
                y emocional para identificar el origen real del desequilibrio.
              </p>
            </div>

            <div className="approach-grid">
              <ApproachCard title="Medicina Integrativa" text="Fusionamos biomagnetismo y medicina oriental en un protocolo unificado." />
              <ApproachCard title="Protocolo Personalizado" text="Cada tratamiento inicia con una evaluación energética individual." />
              <ApproachCard title="Terapia Sin Fármacos" text="Métodos naturales enfocados en restaurar el equilibrio del cuerpo." />
              <ApproachCard title="Resultados Medibles" text="Seguimiento continuo para evaluar avances durante el proceso terapéutico." />
            </div>
          </div>
        </section>

        <section className="conditions">
          <div className="container">
            <div className="section-header center">
              <span className="section-tag">Áreas de Atención</span>
              <h2>¿Cómo podemos ayudarte?</h2>
            </div>

            <div className="conditions-grid">
              <ConditionCard title="Estrés y Ansiedad" text="Recupera equilibrio emocional y energético." />
              <ConditionCard title="Dolor Muscular" text="Tratamientos para tensión, contracturas y molestias persistentes." />
              <ConditionCard title="Inflamación" text="Protocolos orientados a restaurar funciones corporales alteradas." />
              <ConditionCard title="Bienestar Estético" text="Terapias reductivas, reafirmantes y drenaje linfático." />
              <ConditionCard title="Equilibrio Energético" text="Restablece armonía entre cuerpo y mente." />
              <ConditionCard title="Recuperación Integral" text="Un abordaje holístico para mejorar calidad de vida." />
            </div>
          </div>
        </section>

        <section className="featured-therapies" id="terapias-destacadas">
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Terapias Destacadas</span>
              <h2>
                Protocolos diseñados
                <br />
                para restaurar equilibrio
              </h2>
            </div>

            <div className="therapy-grid">
              <TherapyCard img={podalImg} title="Masaje Podal" text="Relajación profunda y estímulo reflejo para reequilibrar energía y circulación." />
              <TherapyCard img={neckImg} title="Masaje Tuina Cervical" text="Tratamiento focalizado para tensiones cervicales, rigidez y movilidad." />
              <TherapyCard img={lymphaticImg} title="Drenaje Linfático Completo" text="Estimulación del sistema linfático para reducir retención y favorecer recuperación." />
              <TherapyCard img={tuinaImg} title="Masaje Tuina Cuerpo Completo" text="Sesión integral para restaurar movilidad, balance energético y bienestar general." />
            </div>
          </div>
        </section>

        <section className="process">
          <div className="container process-content">
            <div className="section-header">
              <span className="section-tag">Proceso Terapéutico</span>
              <h2>
                Tres pasos para iniciar
                <br />
                tu recuperación
              </h2>
            </div>

            <div className="process-steps">
              <ProcessStep number="01" title="Evaluación Inicial" text="Identificamos síntomas, hábitos y desequilibrios para orientar el tratamiento." />
              <ProcessStep number="02" title="Sesión Personalizada" text="Aplicamos técnicas integrativas según tus necesidades físicas y energéticas." />
              <ProcessStep number="03" title="Seguimiento" text="Revisamos avances y ajustamos el protocolo para mantener resultados." />
            </div>
          </div>
        </section>

        <section className="final-cta">
          <video src={ctaVideo} autoPlay muted loop playsInline />
          <div className="final-cta-overlay" />
          <div className="container final-cta-content">
            <span className="section-tag">Agenda tu evaluación</span>
            <h2>
              Tu bienestar comienza
              <br />
              con equilibrio.
            </h2>
            <p>Da el primer paso hacia una experiencia terapéutica personalizada.</p>

            <div className="hero-actions">
              <a href="/contacto" className="btn btn-primary">Agendar cita</a>
              <a href="/terapias" className="btn btn-secondary">Explorar terapias</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


function ApproachCard({ title, text }) {
  return <div className="approach-card"><h3>{title}</h3><p>{text}</p></div>;
}

function ConditionCard({ title, text }) {
  return <div className="condition-card"><h3>{title}</h3><p>{text}</p></div>;
}

function TherapyCard({ img, title, text }) {
  return (
    <div className="therapy-card">
      <img src={img} alt={title} className="therapy-image" />
      <div className="therapy-info">
        <h3>{title}</h3>
        <p>{text}</p>
        <a href="/terapias" className="therapy-link">Ver detalle</a>
      </div>
    </div>
  );
}

function ProcessStep({ number, title, text }) {
  return <div className="process-step"><span>{number}</span><h3>{title}</h3><p>{text}</p></div>;
}