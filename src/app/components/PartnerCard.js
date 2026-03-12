import Image from "next/image";
import Link from "next/link";

export default function PartnerCard({ partner, href, className = "", showOverlay = true }) {
  const content = (
    <div
      className={`partner position-relative d-flex justify-content-center align-items-center p-3 ${className}`}
      style={{ width: 200, height: 200 }}
    >
      <div className={`p-3 ${partner.background}`} style={{ display: "inline-block" }}>
        <Image
          src={partner.logo}
          alt={partner.name}
          width={200}
          height={100}
          style={{ objectFit: "contain" }}
          loading="lazy"
        />
      </div>
      {showOverlay && ( 
        <div className="partner-overlay position-absolute bottom-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center p-2">
          <p className="text-white fw-normal text-center">{partner.description}</p>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link aria-label={`Vai al sito del partner ${partner.name}`} target="_blank" href={href} className="text-decoration-none">
        {content}
      </Link>
    );
  }

  return content;
}
