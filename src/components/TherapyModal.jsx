const whatsappLink =
  "https://wa.me/527226773247?text=Hola,%20me%20gustaría%20agendar%20una%20evaluación%20en%20GU-QI.";

export default function TherapyModal({ therapy, onClose }) {
  if (!therapy) return null;

  return (
    <div className="therapy-modal-backdrop" onClick={onClose}>
      <div className="therapy-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="therapy-modal-close" onClick={onClose}>
          ×
        </button>

        <div className="therapy-modal-image">
          <img src={therapy.image} alt={therapy.title} />
        </div>

        <div className="therapy-modal-content">
          <span className="section-tag">Detalle de terapia</span>
          <h2>{therapy.title}</h2>

          <div className="therapy-modal-meta">
            <span>{therapy.duration}</span>
          </div>

          <p>{therapy.description}</p>

          <div className="therapy-modal-lists">
            <div>
              <h3>Beneficios</h3>
              <ul>{therapy.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
            </div>

            <div>
              <h3>Ideal para</h3>
              <ul>{therapy.idealFor.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          </div>

          <p className="therapy-modal-note">
            Antes de iniciar cualquier tratamiento se realiza una evaluación para
            determinar si la terapia es adecuada para cada persona.
          </p>

          <div className="therapy-modal-actions">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Agendar evaluación
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}