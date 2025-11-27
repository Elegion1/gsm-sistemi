import Hero from "@/app/components/Hero";
import partners from "@/data/partners.json";
import owner from "@/data/owner.json";
import Image from "next/image";
import Link from "next/link";
import InfoCard from "@/app/components/InfoCard";
import Button from "@/app/components/Button";

export const metadata = {
  title: `Partners | Collaborazioni di ${owner.companyName}`,
  description: `Scopri i nostri partners e le collaborazioni di ${owner.companyName} nel settore degli infissi, serramenti, porte e zanzariere a ${owner.address.city}.`,
};

const infoCardData = [
  {
    title: "Qualità certificata",
  },
  {
    title: "Prezzi più vantaggiosi",
  },
  {
    title: "Supporto più efficiente",
  },
  {
    title: "Accesso a prodotti esclusivi",
  },
];

export default function PartnersPage() {
  return (
    <>
      <Hero
        title={"I nostri partners"}
        description={`Scopri i nostri partners e le collaborazioni di ${owner.companyName} nel settore degli infissi, serramenti, porte e zanzariere a ${owner.address.city}.`}
        image="/images/hero.png"
      />
      <div className="my-5 px-5 d-flex flex-column gap-5">
        <section className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
          {infoCardData.map(({ title }, index) => (
            <InfoCard key={index} title={title} />
          ))}
        </section>

        <section>
          <h2 className="text-uppercase fw-medium text-center">
            i nostri partners
          </h2>
          <h3 className="fw-normal fs-4 text-center mt-3">
            Collaboriamo con partner affidabili e riconosciuti per offrire
            soluzioni di qualità, garantendo installazioni sicure, prodotti
            certificati e assistenza costante.
          </h3>
          <div className="d-flex flex-wrap justify-content-around align-items-center gap-5 mt-4 w-75 mx-auto">
            {partners.map((partner, index) => (
              <Link
                target="_blank"
                href={partner.link}
                className="text-decoration-none"
              >
                <div
                  key={index}
                  className="partner position-relative d-flex justify-content-center align-items-center p-3"
                  style={{ width: 200, height: 200 }}
                >
                  <div
                    className={`p-3 ${partner.background}`}
                    style={{ display: "inline-block" }}
                  >
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      width={200} // dimensione desiderata
                      height={100} // mantiene proporzioni
                      style={{ objectFit: "contain" }}
                      loading="lazy"
                    />
                  </div>
                  <div className="partner-overlay position-absolute bottom-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center p-2">
                    <p className="text-white fw-normal text-center">
                      {partner.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section>
          <p className="fs-3 text-center">
            Grazie ai nostri partner riusciamo a garantire installazioni più
            rapide
          </p>
          <p className="fs-3 text-center">
            Possiamo offrire prodotti con garanzie estese
          </p>
          <p className="fs-3 text-center">
            Riceviamo formazione continua sulle nuove tecnologie
          </p>
        </section>

        <section>
          <h2 className="text-uppercase fw-medium text-center">
            Diventa nostro partner
          </h2>
          <h3 className="fw-normal fs-4 text-center mt-3">
            Se sei un produttore o fornitore di infissi, serramenti, porte o
            zanzariere e desideri collaborare con noi, contattaci per discutere
            le opportunità di partnership.
          </h3>
          <div className="w-100 d-flex justify-content-center align-items-center mt-3">
            <Link href="/contattaci" className="text-decoration-none">
              <Button label="Contattaci" className="bg-a text-d" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
