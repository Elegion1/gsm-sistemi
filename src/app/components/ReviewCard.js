export default function ReviewCard({ review }) {
  function renderStars(rating) {
    const maxStars = 5;

    return Array.from({ length: maxStars }, (_, i) => (
      <span key={i}>{i < rating ? "★" : "☆"}</span>
    ));
  }
  return (
    <>
      <div className="review-card p-3">
        <h4 className="text-uppercase text-center">{review.user}</h4>
        <p className="fs-5 fw-bold text-center text-capitalize">{review.title}</p>
        <p className="text-center">{review.body}</p>
        <div className="text-warning text-center fs-2">{renderStars(review.rating)}</div>
      </div>
    </>
  );
}
