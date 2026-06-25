import Header from "../components/Header";

import philosophyVideo from "../assets/videos/philosopie-video.mp4";
import biomagneticVideo from "../assets/videos/biomagnetic-video.mp4";

import woodIcon from "../assets/images/Wood.svg";
import fireIcon from "../assets/images/Fire.svg";
import earthIcon from "../assets/images/Earth.svg";
import metalIcon from "../assets/images/Metal.svg";
import waterIcon from "../assets/images/Water.svg";

import fasciaImage from "../assets/images/fascia-therapie-image.webp";
import yinYangImage from "../assets/images/ying-yang.svg";

const elements = [
  { title: "Madera", icon: woodIcon },
  { title: "Fuego", icon: fireIcon },
  { title: "Tierra", icon: earthIcon },
  { title: "Metal", icon: metalIcon },
  { title: "Agua", icon: waterIcon },
];

export default function Philosophy() {
  return (
    <>
      <Header />

      <main className="philosophy-page">
        <section className="philosophy-hero contact-video-hero">
          <video src={philosophyVideo} autoPlay muted loop playsInline />
          <div className="contact-video-overlay" />

          <div className="container">
            <span className="eyebrow">Filosofía GU-QI</span>

            <h1>
              Ciencia,
              <br />
              energía
              <br />
              y equilibrio.
            </h1>

            <p>
              Integramos biomagnetismo, terapia fascial, medicina oriental y los
              Cinco Elementos para comprender el cuerpo como un sistema conectado.
            </p>
          </div>
        </section>

        <section className="philosophy-block">
          <div className="container philosophy-grid">
            <div>
              <span className="section-tag">Biomagnetismo</span>

              <h2>
                Restaurar equilibrio
                <br />
                a través del campo energético.
              </h2>

              <p>
                El biomagnetismo busca identificar desequilibrios energéticos
                que pueden afectar el funcionamiento natural del organismo.
              </p>
            </div>

            <div className="philosophy-media">
              <video src={biomagneticVideo} autoPlay muted loop playsInline />
            </div>
          </div>
        </section>

        <section className="philosophy-block light">
          <div className="container philosophy-grid">
            <div className="philosophy-media">
              <img src={fasciaImage} alt="Fascia abstracta" />
            </div>

            <div>
              <span className="section-tag">Fascia</span>

              <h2>
                La red que conecta
                todo el cuerpo.
              </h2>

              <p>
                La fascia es un tejido continuo que participa en movimiento,
                postura y transmisión de fuerzas. Comprenderla permite intervenir
                más allá del síntoma.
              </p>
            </div>
          </div>
        </section>

        <section className="five-elements">
          <div className="container">
            <div className="section-header center">
              <span className="section-tag">Cinco Elementos</span>

              <h2>
                Un modelo para comprender
                el equilibrio vital.
              </h2>
            </div>

            <div className="elements-grid">
              {elements.map((element) => (
                <ElementCard
                  key={element.title}
                  title={element.title}
                  icon={element.icon}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="philosophy-block">
          <div className="container philosophy-grid">
            <div>
              <span className="section-tag">Yin y Yang</span>

              <h2>
                El equilibrio
                entre fuerzas opuestas.
              </h2>

              <p>
                Yin y Yang representan aspectos complementarios presentes en los
                sistemas vivos. El bienestar surge cuando existe armonía entre ambos.
              </p>
            </div>

            <div className="philosophy-media">
              <img src={yinYangImage} alt="Yin y Yang" />
            </div>
          </div>
        </section>

        <section className="philosophy-cta">
          <div className="container">
            <span className="section-tag">Descubre tu equilibrio</span>

            <h2>
              Cada persona requiere
              un camino diferente.
            </h2>

            <a href="/contacto" className="btn btn-primary">
              Agendar Evaluación
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

function ElementCard({ title, icon }) {
  return (
    <div className="element-card">
      <img src={icon} alt={title} className="element-icon-img" />
      <h3>{title}</h3>
    </div>
  );
}