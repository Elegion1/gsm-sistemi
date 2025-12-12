"use client";
import { useState, useEffect } from "react";

const COOKIE_NAME = "cookie_consent_status"; // può essere cambiato
const COOKIE_EXP_DAYS = 365;

function setCookie(name, value, days) {
  const expires = new Date(
    Date.now() + days * 24 * 60 * 60 * 1000
  ).toUTCString();
  document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`));
  return match ? match[2] : null;
}

export default function CookieConsentBanner({
  onAccept = () => {},
  onDecline = () => {},
  message = "Utilizziamo i cookie per migliorare la tua esperienza sul sito. Puoi scegliere di accettare o rifiutare i cookie non essenziali.",
  acceptLabel = "Accetta tutti",
  declineLabel = "Rifiuta",
  className = "",
  style = {},
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const status = getCookie(COOKIE_NAME);
    if (!status) {
      setShow(true);
    }
  }, []);

  const handleAccept = () => {
    setCookie(COOKIE_NAME, "accepted", COOKIE_EXP_DAYS);
    setShow(false);
    onAccept();
  };

  const handleDecline = () => {
    setCookie(COOKIE_NAME, "declined", COOKIE_EXP_DAYS);
    setShow(false);
    onDecline();
  };

  if (!show) {
    return null;
  }

  return (
    <div
      className={`cookie-consent-banner bg-b text-d ${className}`}
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        padding: "1rem",
        boxShadow: "0 -2px 8px rgba(0,0,0,0.2)",
        zIndex: 1000,
        ...style,
      }}
    >
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <div className="mb-2 mb-md-0">
          {message}{" "}
          <a href="/privacy-terms" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </a>
        </div>
        <div className="d-flex gap-2">
          <button className="btn bg-c" onClick={handleDecline}>
            {declineLabel}
          </button>
          <button className="btn bg-a" onClick={handleAccept}>
            {acceptLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
