import PageLayout from "@/app/components/PageLayout";
import Hero from "@/app/components/Hero";
import ContactForm from "@/app/components/ContactForm";
import owner from "@/data/owner.json";

export const metadata = {
  title: `Contattaci | ${owner.companyName}`,
  description:
    "Hai bisogno di assistenza o vuoi richiedere un preventivo? Compila il modulo e verrai ricontattato rapidamente dal nostro team.",
  alternates: { canonical: "/contatti" },
  openGraph: {
    title: `Contattaci | ${owner.companyName}`,
    description:
      "Compila il form o utilizza i nostri recapiti per richiedere informazioni e assistenza.",
    url: "/contatti",
  },
};

export default function ContattiPage() {
  return (
    <>
      <Hero
        title="Contattaci"
        image={"/images/contacts.png"}
        imageHeightDesktop="80vh"
        imageHeightMobile="60vh"
      />
      <PageLayout>
        <section>
          <h2 className="text-center fs-5 fw-normal">
            Per qualsiasi informazione sui prodotti, preventivi o assistenza, il
            nostro team è a tua disposizione.
          </h2>
          <h3 className="text-center fs-5 fw-normal">
            Contattaci per trovare la soluzione migliore tra i nostri prodotti e
            servizi per la tua casa
          </h3>
        </section>
        <section>
          <ContactForm />
        </section>
      </PageLayout>
    </>
  );
}
