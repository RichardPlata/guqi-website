export default function TherapyCard({ therapy, onClick }) {
  return (
    <article className="catalog-card">
      <img src={therapy.image} alt={therapy.title} />

      <div className="catalog-card-body">
        <span className="catalog-duration">{therapy.duration}</span>
        <h2>{therapy.title}</h2>
        <p>{therapy.text}</p>

        <button type="button" className="catalog-link" onClick={onClick}>
          Ver detalle
        </button>
      </div>
    </article>
  );
}