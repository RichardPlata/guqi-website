import { useState } from "react";

import Header from "../components/Header";
import CourseCard from "../components/CourseCard";
import CourseModal from "../components/CourseModal";

import courses from "../data/courses";

import courseVideo from "../assets/videos/course-video.mp4";

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);

  return (
    <>
      <Header />

      <main className="courses-page">
        <section className="courses-hero contact-video-hero">
          <video
            src={courseVideo}
            autoPlay
            muted
            loop
            playsInline
          />

          <div className="contact-video-overlay" />

          <div className="container">
            <span className="eyebrow">
              Formación GU-QI
            </span>

            <h1>
              Cursos para profundizar
              <br />
              en salud integrativa.
            </h1>

            <p>
              Programas para comprender el cuerpo desde una
              mirada física, emocional, energética y terapéutica.
            </p>
          </div>
        </section>

        <section className="therapy-catalog">
          <div className="container">
            <div className="catalog-grid">
              {courses.map((course) => (
                <CourseCard
                  key={course.title}
                  course={course}
                  onClick={() => setSelectedCourse(course)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
      />
    </>
  );
}