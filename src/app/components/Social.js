import Link from "next/link";
import owner from "@/data/owner.json";

export default function Social({ item }) {
  if (!item) return null;

  const socials = [
    { key: "facebook", icon: "bi-facebook" },
    { key: "instagram", icon: "bi-instagram" },
    { key: "whatsapp", icon: "bi-whatsapp" },
    { key: "google", icon: "bi-google" },
  ];

  return (
    <>
      {socials.map(({ key, icon }) => {
        const value = item[key];
        if (!value || value.trim() === "") return null;

        let href = value;
        if (key === "whatsapp") {
          const cleanPhone = owner.phone
            .replace(/^(\+39)/, "")
            .replace(/\D/g, "");
          href = value + cleanPhone;
        }

        return (
          <Link
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-d"
            style={{ fontSize: "1.8rem" }}
          >
            <i className={`bi ${icon}`}></i>
          </Link>
        );
      })}
    </>
  );
}
