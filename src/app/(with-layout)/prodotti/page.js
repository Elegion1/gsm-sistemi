import Hero from "@/app/components/Hero";
import ProductCard from "@/app/components/ProductCard";
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
        image="/images/hero.png"
      />
      <div className="my-5 px-5 d-flex flex-column gap-5">
        <section>
          <h2 className="text-uppercase fw-medium text-center">
            i nostri prodotti
          </h2>
          <div className="d-flex flex-wrap justify-content-around align-items-center gap-5 mt-4 w-75 mx-auto">
            {products.map((product, index) => (
             <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
