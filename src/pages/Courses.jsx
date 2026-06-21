import Header from "../components/Header";

import obesidadImg from "../assets/images/Obesidad-Image.jpg";
import prostataImg from "../assets/images/Prostata-Image.jpg";

const courses = [
  {
    title: "Ingeniería de la Obesidad",
    image: obesidadImg,
    type: "Curso especializado",
    description:
      "Formación enfocada en comprender la obesidad desde una perspectiva integrativa, corporal, emocional y energética.",
    audience: "Profesionales y personas interesadas en salud integrativa",
  },
  {
    title: "Inflamación de la Próstata",
    image: prostataImg,
    type: "Curso especializado",
    description:
      "Curso orientado a explorar el vínculo entre inflamación, desvalorización, humillación y procesos corporales.",
    audience: "Profesionales, terapeutas y estudiantes",
  },
];

export default function Courses() {
  return (
    <>
      <Header />

      <main className="courses-page">
        <section className="courses-hero">
          <div className="container">
            <span className="eyebrow">Formación GU-QI</span>
            <h1>
              Cursos para profundizar
              <br />
              en salud integrativa.
            </h1>
            <p>
              Programas para comprender el cuerpo desde una mirada física,
              emocional, energética y terapéutica.
            </p>
          </div>
        </section>

        <section className="courses-list">
          <div className="container courses-grid two">
            {courses.map((course) => (
              <article className="course-card" key={course.title}>
                <img src={course.image} alt={course.title} />
                <span>{course.type}</span>
                <h2>{course.title}</h2>
                <p>{course.description}</p>

                <div className="course-meta">
                  <strong>Dirigido a:</strong>
                  <small>{course.audience}</small>
                </div>

                <a href="/contacto" className="course-link">
                  Solicitar información
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}