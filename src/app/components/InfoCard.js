export default function InfoCard({ title }) {
  return (
    <div className="info-card bg-d p-3 d-flex justify-content-center align-items-center">
      <h3 className="text-a text-uppercase text-center fw-medium fs-3 m-0 text-wrap w-50">{title}</h3>
    </div>
  );
}
