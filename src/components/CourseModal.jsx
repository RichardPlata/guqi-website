const whatsapp = "527226773247";

export default function CourseModal({ course, onClose }) {
  if (!course) return null;

  const message = `Hola, me gustaría recibir información del curso: ${course.title}.`;

  return (
    <div
      className="therapy-modal-backdrop"
      onClick={onClose}
    >
      <div
        className="therapy-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="therapy-modal-close"
          onClick={onClose}
        >
          ×
        </button>

        <div className="therapy-modal-image">
          <img
            src={course.image}
            alt={course.title}
          />
        </div>

        <div className="therapy-modal-content">
          <span className="section-tag">
            Curso especializado
          </span>

          <h2>{course.title}</h2>

          <div className="therapy-modal-meta">
            <span>{course.duration}</span>
          </div>

          <p>{course.description}</p>

          <div className="therapy-modal-lists">
            <div>
              <h3>Dirigido a</h3>

              <ul>
                {course.audience.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3>Temas principales</h3>

              <ul>
                {course.topics.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="therapy-modal-actions">
            <a
              href={`https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Solicitar información
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}