"use client";

export default function Button({ label, onClick, className, style }) {
  return (
    <>
      <button
        className={`btn ${className}`}
        onClick={onClick}
        style={style}
      >
        {label}
      </button>
    </>
  );
}
