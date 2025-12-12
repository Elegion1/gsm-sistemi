"use client";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
      body: JSON.stringify(data),
    });

    setStatus(res.ok ? "success" : "error");
    e.target.reset();
  };

  useEffect(() => {
    const forms = document.querySelectorAll(".needs-validation");
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add("was-validated");
        },
        false
      );
    });
  }, []);

  return (
    <div
      className={`position-relative p-md-5 bg-d p-2 contact-card ${
        status === "loading" ? "loading-overlay" : ""
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className="needs-validation"
        noValidate
        style={{
          opacity: status === "loading" ? 0.4 : 1,
          pointerEvents: status === "loading" ? "none" : "auto",
        }}
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Nome e Cognome *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form-control"
            required
          />
          <div className="invalid-feedback">Inserisci il tuo nome</div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            required
          />
          <div className="invalid-feedback">Inserisci una email valida</div>
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Telefono
          </label>
          <input type="text" id="phone" name="phone" className="form-control" />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Messaggio *
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="form-control"
            required
          ></textarea>
          <div className="invalid-feedback">Inserisci un messaggio</div>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <button type="submit" className="btn bg-a text-light rounded-0">
            {status === "loading" ? "Invio in corso..." : "Invia richiesta"}
          </button>
        </div>

        {status === "success" && (
          <p className="text-success mt-2">
            ✅ Messaggio inviato correttamente!
          </p>
        )}
        {status === "error" && (
          <p className="text-danger mt-2">❌ Si è verificato un errore</p>
        )}
      </form>

      {status === "loading" && (
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
        >
          <div className="spinner-border text-light" role="status"></div>
        </div>
      )}
    </div>
  );
}
