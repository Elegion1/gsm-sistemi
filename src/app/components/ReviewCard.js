export default function ReviewCard({ review }) {
  function renderStars(rating) {
    const maxStars = 5;
    return Array.from({ length: maxStars }, (_, i) => (
      <span key={i}>{i < rating ? "★" : "☆"}</span>
    ));
  }

  return (
    <div
      className="review-card p-3"
      style={{
        width: "100%", // Default: tutta la larghezza (mobile)
        maxWidth: "400px", // Limite massimo per non farla diventare gigante su desktop
        margin: "0 auto", // Centra la card se il contenitore è più largo
      }}
    >
      <p className="h4 text-uppercase text-center">{review.user}</p>
      <p className="fs-5 fw-bold text-center text-capitalize">{review.title}</p>
      <p className="text-center">{review.body}</p>
      <div className="text-warning text-center fs-2">
        {renderStars(review.rating)}
      </div>
    </div>
  );
}
