import Hero from "@/app/components/Hero";
import PageLayout from "@/app/components/PageLayout";
import ContactCTA from "@/app/components/ContactCTA";
import services from "@/data/services.json";

export const metadata = {
  title: "Servizi | Soluzioni su Misura per Ogni Esigenza",
  description:
    "Scopri tutti i nostri servizi dedicati al miglioramento del comfort, della funzionalità e dell’efficienza degli spazi. Dalla consulenza all’installazione, offriamo soluzioni professionali, personalizzate e curate in ogni dettaglio.",
  alternates: {
    canonical: "/servizi",
  },
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
          <p className="text-center text-muted mb-5">
            Offriamo soluzioni professionali e personalizzate per migliorare
            comfort, funzionalità ed efficienza degli spazi.
          </p>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 mt-4 g-4">
            {services.map((item, index) => (
              <div className="col" key={index}>
                <div className="p-3 border h-100 d-flex flex-column">
                  {item.icon && (
                    <img
                      src={item.icon}
                      alt={item.name}
                      className="mx-auto mb-3"
                      style={{ width: 80, height: 80 }}
                    />
                  )}
                  <h3 className="text-uppercase fs-5 fw-bold text-a text-center">
                    {item.name}
                  </h3>
                  <p className="mt-2">{item.description}</p>
                  {item.details && (
                    <ul className="list-unstyled mt-2 text-muted">
                      {item.details.map((detail, i) => (
                        <li key={i}>• {detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
        <ContactCTA />
      </PageLayout>
    </>
  );
}
