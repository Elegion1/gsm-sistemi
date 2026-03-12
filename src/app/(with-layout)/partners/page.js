import Hero from "@/app/components/Hero";
import PageLayout from "@/app/components/PageLayout";
import partners from "@/data/partners.json";
import owner from "@/data/owner.json";
import InfoCard from "@/app/components/InfoCard";
import Button from "@/app/components/Button";
import Link from "next/link";
import PartnerCard from "@/app/components/PartnerCard";

const visiblePartners = partners.filter((partner) => partner.show !== false);

export const metadata = {
  title: `Partners | Collaborazioni di ${owner.companyName}`,
  description: `Scopri i nostri partners e le collaborazioni di ${owner.companyName} nel settore degli infissi, serramenti, porte e zanzariere a ${owner.address.city}.`,
  alternates: {
    canonical: "/partners",
  },
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
        imagePositionDesktop="center"
        imageHeightDesktop="70vh"
        imageHeightMobile="50vh"
        imagePositionMobile="top"
      />
      <PageLayout>
        <section className="d-flex justify-content-center align-items-center gap-md-5 gap-3 flex-wrap">
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
          <div className="d-flex flex-wrap justify-content-around align-items-center gap-md-5 gap-1 mt-4 mx-auto">
            {visiblePartners.map((partner, index) => (
              <PartnerCard key={index} partner={partner} href={partner.link} />
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
            <Link
              aria-label="Vai alla pagina contatti"
              href="/contatti"
              className="text-decoration-none"
            >
              <Button label="Contattaci" className="bg-a text-d" />
            </Link>
          </div>
        </section>
      </PageLayout>
    </>
  );
}
