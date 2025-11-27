export default function HeroBottom({ items }) {
  return (
    <div className="hero-bottom bg-d d-flex justify-content-center align-items-center gap-5 p-3">
      {items.map((text, index) => (
        <h3
          style={{ maxWidth: "250px" }}
          key={index}
          className="text-a text-uppercase text-center fw-bold m-0"
        >
          {text}
        </h3>
      ))}
    </div>
  );
}
