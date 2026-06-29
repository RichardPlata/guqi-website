import { useState } from "react";
import Header from "../components/Header";
import contactVideo from "../assets/videos/Contact-Video.mp4";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    therapy: "No estoy seguro/a",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleWhatsApp = () => {
    if (!formData.name || !formData.phone) {
      alert("Por favor completa al menos tu nombre y teléfono.");
      return;
    }

    const whatsappNumber = "527226773247";

    const requestDate = new Date().toLocaleString("es-MX", {
      dateStyle: "long",
      timeStyle: "short",
    });

    const text = `
Hola, me gustaría agendar una evaluación en GU-QI.

📅 Solicitud enviada:
${requestDate}

👤 Nombre:
${formData.name}

📱 Teléfono:
${formData.phone}

📧 Correo:
${formData.email || "No proporcionado"}

🧘 Terapia de interés:
${formData.therapy}

📝 Mensaje:
${formData.message || "Sin mensaje adicional"}

Gracias.
`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

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
                <strong>+52 722 677 3247</strong>
              </div>

              <div>
                <span>Correo</span>
                <strong>guqiwellness@gmail.com</strong>
              </div>

              <div>
                <span>Horario</span>
                <strong>Lunes a Sábado · 10:00 - 18:00</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <div className="container contact-form-grid">
            <div className="section-header">
              <span className="section-tag">Solicitud de evaluación</span>

              <h2>
                Inicia tu proceso
                <br />
                con GU-QI.
              </h2>

              <p>
                Completa el formulario y al presionar el botón se abrirá
                WhatsApp con toda tu información lista para enviarse.
              </p>
            </div>

            <form
              className="contact-form"
              onSubmit={(e) => e.preventDefault()}
            >
              <div className="form-row">
                <label>
                  Nombre
                  <input
                    type="text"
                    name="name"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </label>

                <label>
                  Teléfono
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+52 722..."
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <label>
                Correo electrónico
                <input
                  type="email"
                  name="email"
                  placeholder="correo@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </label>

              <label>
                Terapia de interés
                <select
                  name="therapy"
                  value={formData.therapy}
                  onChange={handleChange}
                >
                  <option>No estoy seguro/a</option>
                  <option>Masaje Podal</option>
                  <option>Masaje Tuina Cervical</option>
                  <option>Masaje Tuina Cuerpo Completo</option>
                  <option>Masaje Tuina Medio Cuerpo</option>
                  <option>Extremidades</option>
                  <option>Sacro, Espalda, Cuello y Brazos</option>
                  <option>Drenaje Linfático Completo</option>
                  <option>Reafirmante</option>
                  <option>Reductivo</option>
                  <option>Celulitis y Estrías</option>
                  <option>Celulitis con Termoterapia y Acupuntura</option>
                  <option>Velo de Novia</option>
                </select>
              </label>

              <label>
                Mensaje
                <textarea
                  rows="6"
                  name="message"
                  placeholder="Cuéntanos qué deseas mejorar..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>

              <button
                type="button"
                className="btn btn-primary"
                onClick={handleWhatsApp}
              >
                Agendar por WhatsApp
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}