import PageLayout from "@/app/components/PageLayout";
import Hero from "@/app/components/Hero";
import ContactForm from "@/app/components/ContactForm";

export default function ContattiPage() {
  return (
    <>
      <Hero title="Contattaci" image={"/images/contacts.png"} imageHeight={"80vh"}/>
      <PageLayout>
        <section>
          <p className="text-center">
            Per qualsiasi informazione sui prodotti, preventivi o assistenza, il
            nostro team è a tua disposizione.
          </p>
          <p className="text-center">
            Contattaci per trovare la soluzione migliore tra i nostri prodotti e
            servizi per la tua casa
          </p>
        </section>
        <section>
          <ContactForm />
        </section>
      </PageLayout>
    </>
  );
}
