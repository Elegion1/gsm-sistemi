"use client";

export default function Button({ label, onClick, className, style }) {
  return (
    <>
      <button
        className={`btn btn-card ${className}`}
        onClick={onClick}
        style={style}
      >
        {label}
      </button>
    </>
  );
}
