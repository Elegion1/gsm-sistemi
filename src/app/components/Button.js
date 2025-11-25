export default function Button({ label, onClick, className, style }) {
  return (
    <>
      <button
        className={`btn bg-c ${className}`}
        onClick={onClick}
        style={style}
      >
        {label}
      </button>
    </>
  );
}
