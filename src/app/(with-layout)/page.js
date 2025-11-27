import Image from "next/image";
import Link from "next/link";
import Hero from "@/app/components/HeroHome";
import ProductCard from "@/app/components/ProductCard";
import owner from "@/data/owner.json";
import productsData from "@/data/products.json";
import Button from "@/app/components/Button";
import InfoCard from "@/app/components/InfoCard";
import partners from "@/data/partners.json";
import jobs from "@/data/jobs.json";

const products = productsData.slice(0, 8);

export const metadata = {
  title: `${owner.companyName} | Infissi, Serramenti, Porte e Zanzariere a ${owner.address.city}`,
  description: owner.seoDescription,
  keywords: owner.seoKeywords,
};

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
    <>
      <Hero />
      <main>
        <div className="px-5 d-flex flex-column gap-5 my-5 w-75 mx-auto">
          <section id="chi-siamo">
            <h2 className="text-uppercase fw-medium text-center">Chi siamo</h2>
            <p className="text-center mt-4 fs-4 fw-normal">
              <span className="fw-bold">{owner.legalName},</span> con sede in{" "}
              <span className="fw-bold">
                {owner.address.street}, {owner.address.streetNumber} –{" "}
                {owner.address.locality} ({owner.address.province}),
              </span>{" "}
              è un’azienda giovane specializzata in infissi, serramenti, porte,
              zanzariere e sistemi oscuranti.
            </p>
            <p className="text-center mt-4 fs-4 fw-normal">
              Offriamo un servizio completo: consulenza, sopralluoghi,
              progettazione, posa in opera e assistenza, con attenzione alla
              qualità dei materiali e alle normative sulle agevolazioni fiscali.
            </p>
            <p className="text-center mt-4 fs-4 fw-normal">
              La nostra missione è fornire soluzioni tecniche affidabili,
              precise e durevoli, affiancando privati e aziende con
              professionalità e trasparenza.
            </p>
          </section>
          <section id="prodotti">
            <h2 className="text-uppercase fw-medium text-center">Prodotti</h2>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4 mt-4">
              {products.map((product) => (
                <ProductCard key={product.name} product={product} />
              ))}
            </div>
            <div className="w-100 d-flex justify-content-center align-items-center mt-5">
              <Link href="/prodotti">
                <Button
                  className="bg-a text-light"
                  label="Vedi tutti i prodotti"
                />
              </Link>
            </div>
          </section>

          <section id="perche-sceglierci">
            <h2 className="text-uppercase fw-medium text-center">
              Perché sceglierci
            </h2>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 mt-4">
              {cta.map((item, index) => (
                <InfoCard key={index} title={item} />
              ))}
            </div>
          </section>

          <section id="partners">
            <h2 className="text-uppercase fw-medium text-center">Partners</h2>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 mt-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-center align-items-center p-3"
                  style={{ width: 200, height: 200 }}
                >
                  <div
                    className={`${partner.background}`}
                    style={{ padding: "10px", display: "inline-block" }}
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
                </div>
              ))}
            </div>
          </section>

          <section id="realizzazioni">
            <h2 className="text-uppercase fw-medium text-center">
              Realizzazioni
            </h2>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-5 mt-4">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-center align-items-center p-3"
                  style={{ width: 300, height: 200 }}
                >
                  <Image
                    src={job.image}
                    alt={job.title}
                    width={300}
                    height={200}
                    style={{ objectFit: "cover" }}
                    unoptimized
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
