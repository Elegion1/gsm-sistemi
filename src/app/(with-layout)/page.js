import Image from "next/image";
import Hero from "@/app/components/Hero";
import ProductCard from "@/app/components/ProductCard";
import owner from "@/data/owner.json";
import productsData from "@/data/products.json";
import Button from "@/app/components/Button";
import InfoCard from "@/app/components/InfoCard";

export const metadata = {
  title: `${owner.companyName} | Infissi, Serramenti, Porte e Zanzariere a ${owner.address.city}`,
  description: owner.seoDescription,
  keywords: owner.seoKeywords,
};

const products = productsData.slice(0, 8);

const cta = [
  "consulenza & progettazione",
  "preventivi",
  "sopralluoghi & posa in opera",
  "consegna",
  "agevolazioni fiscali",
  "forniture per aziende",
];

export default function Home() {
  return (
    <div>
      <Hero />
      <main>
        <section id="chi-siamo" className="mt-5 px-5 ">
          <h2 className="text-uppercase fw-medium text-center">Chi siamo</h2>
          <p className="text-center mt-4 px-5 fs-4 fw-normal">
            <span className="fw-bold">
              GSM SISTEMI di Giovanni Sugamiele & C. Snc,
            </span>{" "}
            con sede in{" "}
            <span className="fw-bold">
              Via Giuseppe Cesarò 99/e – Casa Santa Erice (TP),
            </span>{" "}
            è un’azienda giovane specializzata in infissi, serramenti, porte,
            zanzariere e sistemi oscuranti. <br /> <br />
            Offriamo un servizio completo: consulenza, sopralluoghi,
            progettazione, posa in opera e assistenza, con attenzione alla
            qualità dei materiali e alle normative sulle agevolazioni fiscali.
            <br /> <br />
            La nostra missione è fornire soluzioni tecniche affidabili, precise
            e durevoli, affiancando privati e aziende con professionalità e
            trasparenza.
          </p>
        </section>
        <section id="prodotti" className="mt-5 px-5">
          <h2 className="text-uppercase fw-medium text-center">Prodotti</h2>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 mt-4">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
          <div className="w-100 d-flex justify-content-center align-items-center mt-5">
            <Button
              className="bg-a text-light"
              label={"Vedi tutti i prodotti"}
            />
          </div>
        </section>

        <section id="perche-sceglierci" className="mt-5 px-5">
          <h2 className="text-uppercase fw-medium text-center">
            Perché sceglierci
          </h2>
          <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 mt-4">
            {cta.map((item, index) => (
              <InfoCard key={index} title={item} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
