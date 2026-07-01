export default function CourseCard({ course, onClick }) {
  return (
    <article className="catalog-card">
      <img src={course.image} alt={course.title} />

      <div className="catalog-card-body">
        <span className="catalog-duration">
          {course.duration}
        </span>

        <h2>{course.title}</h2>

        <p>{course.text}</p>

        <button
          type="button"
          className="catalog-link"
          onClick={onClick}
        >
          Ver detalle
        </button>
      </div>
    </article>
  );
}