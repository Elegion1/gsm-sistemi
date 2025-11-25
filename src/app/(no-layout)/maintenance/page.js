import Image from "next/image";
import "./layout.css";

export const metadata = {
  title: "Sito in costruzione | GSM Sistemi",
  description:
    "Il sito è attualmente in costruzione. Per informazioni contattaci al numero +39 349 41 26 860 o visita la nostra sede in Via Giuseppe Cesarò, 99/c Casa Santa Erice (TP).",
};

export default function MaintenancePage() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="position-relative bg-container">
        <Image
          src={"/images/bg.svg"}
          alt="Zanzariera"
          className="image"
          width={500}
          height={418}
          style={{ objectFit: "contain" }}
        />

        {/* Zanzara animata */}
        <Image
          src={"/images/zanzar.svg"}
          alt="zanzara"
          className="mosquito"
          width={209}
          height={280}
          style={{ objectFit: "contain" }}
        />
      </div>

      <h1 className="text-center text-d mt-3">Sito in costruzione</h1>
      <h2 className="text-center fw-normal text-d">
        Per info contattaci al numero <strong>+39 349 41 26 860</strong>
      </h2>
      <h3 className="text-center fw-normal text-d">
        Oppure vieni a trovarci in{" "}
        <strong>Via Giuseppe Cesarò, 99/c Casa Santa Erice (TP)</strong>
      </h3>
    </div>
  );
}
