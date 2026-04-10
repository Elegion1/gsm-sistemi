import Image from "next/image";
import Link from "next/link";

export default function PartnerCard({
  partner,
  href,
  className = "",
  showOverlay = true,
}) {
  const content = (
    <div
      className={`partner position-relative d-flex justify-content-center align-items-center p-3 ${className}`}
      style={{
        width: 200,
        // Rimuoviamo height: 200
        minHeight: 150, // Un minimo per mantenere consistenza visiva nella griglia
        display: "flex",
        boxSizing: "border-box",
      }}
    >
      <div
        className={`${partner.background} p-2 `}
        style={{
          width: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image
          src={partner.logo}
          alt={partner.name}
          // Usiamo width e height originali per mantenere l'aspect ratio
          // Next.js userà questi valori per calcolare lo spazio
          width={200}
          height={120}
          sizes="200px"
          style={{
            width: "100%",
            height: "auto",
            objectFit: "contain",
            maxHeight: "150px", // Evita che loghi troppo "alti" diventino giganti
          }}
          loading="lazy"
        />
      </div>

      {showOverlay && (
        <div className="partner-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center p-2">
          <p className="text-white fw-normal text-center m-0">
            {partner.description}
          </p>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        aria-label={`Vai al sito del partner ${partner.name}`}
        target="_blank"
        href={href}
        className="text-decoration-none"
      >
        {content}
      </Link>
    );
  }

  return content;
}
