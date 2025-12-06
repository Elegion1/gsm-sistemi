import Hero from "@/app/components/Hero";
import PageLayout from "@/app/components/PageLayout";
import ProductCard from "@/app/components/ProductCard";
import ContactCTA from "@/app/components/ContactCTA";
import owner from "@/data/owner";
import products from "@/data/products.json";

export const metadata = {
  title: `Prodotti | Soluzioni di ${owner.companyName}`,
  description: `Esplora la vasta gamma di prodotti offerti da ${owner.companyName}, tra cui infissi, serramenti, porte e zanzariere di alta qualità per ogni esigenza abitativa a ${owner.address.city}.`,
};

export default function ProdottiPage() {
  return (
    <>
      <Hero
        title={"I nostri prodotti"}
        description={`Esplora la vasta gamma di prodotti offerti da ${owner.companyName}, tra cui infissi, serramenti, porte e zanzariere di alta qualità per ogni esigenza abitativa a ${owner.address.city}.`}
        image="/images/products.png"
        imagePosition={"top"}
        imageHeight="70vh"
      />
      <PageLayout>
        <section>
          <h2 className="text-uppercase fw-medium text-center">
            i nostri prodotti
          </h2>
          <p className="text-center fs-4 w-md-50 mx-auto">
            Ogni nostro prodotto è progettato per garantire sicurezza, durata e
            design moderno. Scopri la qualità dei materiali e l’attenzione al
            dettaglio in ogni soluzione
          </p>
          <div className="row g-4 mt-4 w-md-75 mx-auto">
            {products.map((product, index) => (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center align-items-center"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
        <ContactCTA />
      </PageLayout>
    </>
  );
}
