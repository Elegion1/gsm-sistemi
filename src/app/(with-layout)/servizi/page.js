import Hero from "@/app/components/Hero";
import PageLayout from "@/app/components/PageLayout";
import ContactCTA from "@/app/components/ContactCTA";
import services from "@/data/services.json";

export const metadata = {
  title: "Servizi | Soluzioni su Misura per Ogni Esigenza",
  description:
    "Scopri tutti i nostri servizi dedicati al miglioramento del comfort, della funzionalità e dell’efficienza degli spazi. Dalla consulenza all’installazione, offriamo soluzioni professionali, personalizzate e curate in ogni dettaglio.",
};

export default function ServiziPage() {
  return (
    <>
      <Hero
        title={"Soluzioni su misura per ogni esigenza"}
        description={
          "Offriamo servizi progettati per migliorare comfort, funzionalità ed efficienza degli spazi. Dalla consulenza all’installazione, ti accompagniamo in ogni fase con competenza e attenzione al dettaglio"
        }
        image={"/images/services.png"}
        imagePositionDesktop="center"
        imageHeightDesktop="80vh"
        imagePositionMobile="center"
        imageHeightMobile="60vh"
      />
      <PageLayout>
        <section>
          <h2 className="text-uppercase fw-medium text-center">Servizi</h2>
          <div className="row mt-4">
            {services.map((item, index) => (
              <div className="col-12 col-md-6" key={index}>
                <h3 className="text-uppercase fs-5 fw-bold text-center text-a">
                  {item.name}
                </h3>
                <p className="fw-normal text-center mx-auto">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <ContactCTA />
      </PageLayout>
    </>
  );
}
