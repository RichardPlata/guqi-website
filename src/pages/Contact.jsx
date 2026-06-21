import Header from "../components/Header";
import contactVideo from "../assets/videos/Contact-Video.mp4";

export default function Contact() {
  return (
    <>
      <Header />

      <main className="contact-page">
        <section className="contact-hero contact-video-hero">
          <video src={contactVideo} autoPlay muted loop playsInline />
          <div className="contact-video-overlay" />

          <div className="container contact-hero-grid">
            <div>
              <span className="eyebrow">Contacto</span>
              <h1>
                Agenda tu
                <br />
                evaluación.
              </h1>
              <p>
                Cuéntanos qué deseas mejorar y nos pondremos en contacto para
                orientarte hacia el protocolo más adecuado.
              </p>
            </div>

            <div className="contact-info-panel">
              <div>
                <span>WhatsApp</span>
                <strong>+52 000 000 0000</strong>
              </div>
              <div>
                <span>Correo</span>
                <strong>contacto@guqi.com</strong>
              </div>
              <div>
                <span>Horario</span>
                <strong>Lun - Sáb / 10:00 - 18:00</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <div className="container contact-form-grid">
            <div className="section-header">
              <span className="section-tag">Solicitud de cita</span>
              <h2>
                Inicia tu proceso
                <br />
                con GU-QI.
              </h2>
              <p>
                Este formulario funciona como primer contacto. La cita se
                confirmará posteriormente por WhatsApp o correo.
              </p>
            </div>

            <form className="contact-form">
              <div className="form-row">
                <label>
                  Nombre
                  <input type="text" placeholder="Tu nombre" />
                </label>
                <label>
                  Teléfono
                  <input type="tel" placeholder="+52" />
                </label>
              </div>

              <label>
                Correo electrónico
                <input type="email" placeholder="correo@ejemplo.com" />
              </label>

              <label>
                Terapia de interés
                <select>
                  <option>Masaje Podal</option>
                  <option>Masaje Tuina Cervical</option>
                  <option>Drenaje Linfático Completo</option>
                  <option>Masaje Tuina Cuerpo Completo</option>
                  <option>No estoy seguro/a</option>
                </select>
              </label>

              <label>
                Mensaje
                <textarea placeholder="Cuéntanos qué deseas mejorar" rows="6" />
              </label>

              <button type="button" className="btn btn-primary">
                Enviar solicitud
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}