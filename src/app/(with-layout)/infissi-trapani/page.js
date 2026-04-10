import Image from "next/image";
import Link from "next/link";
import PageLayout from "@/app/components/PageLayout";
import HeroHome from "@/app/components/HeroHome";
import ProductCard from "@/app/components/ProductCard";
import ContactCTA from "@/app/components/ContactCTA";
import owner from "@/data/owner.json";
import productsData from "@/data/products.json";
import Button from "@/app/components/Button";
import InfoCard from "@/app/components/InfoCard";
import reviews from "@/data/reviews.json";
import ReviewCard from "@/app/components/ReviewCard";

// Filtriamo i prodotti cercando "Infissi", "Finestre" o materiali specifici nel nome
const targetedProducts = productsData
  .filter((p) => {
    const name = p.name?.toLowerCase() || "";
    const features = p.features?.map((f) => f.toLowerCase()) || [];

    return (
      name.includes("infissi") ||
      name.includes("finestre") ||
      name.includes("pvc") || // Spesso gli infissi sono taggati col materiale
      features.includes("isolamento termico") // Un'altra caratteristica tipica degli infissi
    );
  })
  .slice(0, 4);

export const metadata = {
  title: `Migliori Infissi a Trapani | Prezzi e Posa Qualificata | GSM Sistemi`,
  description: `Cerchi infissi a Trapani? GSM Sistemi offre serramenti in PVC e Alluminio ad alta efficienza energetica. Sopralluoghi gratuiti a Trapani, Erice e provincia. Scopri i Bonus 2026.`,
  keywords:
    "infissi trapani, serramenti trapani, infissi pvc trapani, montaggio infissi trapani, preventivo infissi trapani",
  alternates: {
    canonical: "/infissi-trapani",
  },
};

const localBenefits = [
  "Resistenza alla Salsedine",
  "Isolamento Termico Estivo",
  "Certificazione Energetica",
  "Posa in Opera Certificata",
  "Assistenza Post-Vendita",
];

export default function InfissiTrapaniPage() {
  return (
    <>
      {/* Possiamo riutilizzare HeroHome o crearne una specifica con testo dedicato */}
      <HeroHome
        title="Vendita e Installazione Infissi a Trapani"
        subtitle="Soluzioni in PVC e Alluminio progettate per il clima della Sicilia"
      />

      <main>
        <PageLayout>
          {/* SEZIONE SEO CORE */}
          <section id="infissi-trapani-expert" className="py-3 py-md-5">
            <h1 className="text-uppercase fw-bold text-center mb-4">
              Specialisti in Infissi e Serramenti a Trapani
            </h1>

            <div className="row align-items-center mt-5">
              {/* Aumentata la colonna testo per dare più spazio */}
              <div className="col-lg-8">
                <p className="fs-4 fw-normal">
                  Vivere a <strong>Trapani</strong> o nei comuni costieri come{" "}
                  <strong>Erice Casa Santa, Paceco e Marsala</strong> richiede
                  serramenti capaci di resistere ad agenti atmosferici intensi,
                  vento e salsedine.
                </p>
                <p className="fs-5">
                  <span className="fw-bold">{owner.legalName}</span> seleziona i
                  migliori materiali (PVC, Alluminio a Taglio Termico e Legno)
                  per garantirti un risparmio reale in bolletta. Non vendiamo
                  solo finestre, ma una consulenza completa per migliorare il
                  comfort della tua casa.
                </p>
                <div className="row mb-3 g-3 p-3">
                  {localBenefits.map((benefit, i) => (
                    <div key={i} className="col-12 col-md-6">
                      <div className="fs-5 d-flex align-items-center">
                        <i className="bi bi-check-circle-fill text-c me-3"></i>
                        <span>{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ridotta la colonna immagine a col-lg-4 */}
              <div className="col-lg-4 d-flex justify-content-center">
                <div
                  className="overflow-hidden"
                  style={{ maxWidth: "80vw" }}
                >
                  <Image
                    src="/images/jobs/job 10.JPG"
                    alt="Installazione Infissi Trapani GSM Sistemi"
                    width={400} // Dimensioni nominali ridotte
                    height={533}
                    sizes="(max-width: 768px) 100vw, 350px"
                    style={{
                      objectFit: "contain",
                      width: "100%",
                      height: "auto",
                      maxHeight: "450px", // Limita l'altezza massima per non allungare la sezione
                    }}
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* SEZIONE PRODOTTI TARGETIZZATI */}
          <section
            id="prodotti-locali"
            className="py-3 py-md-5 px-3"
          >
            <h2 className="text-uppercase fw-medium text-center mb-5">
              Le nostre soluzioni per il territorio
            </h2>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-4">
              {targetedProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
            <div className="text-center mt-5">
              <Link href="/prodotti">
                <Button
                  className="bg-a text-light"
                  label="Scopri tutto il catalogo"
                />
              </Link>
            </div>
          </section>

          {/* PERCHÉ SCEGLIERCI (LOCAL) */}
          <section id="perche-noi" className="py-3 py-md-5">
            <h2 className="text-uppercase fw-medium text-center mb-5">
              Perché scegliere GSM Sistemi a Trapani
            </h2>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
              <InfoCard
                title="Sopralluoghi Gratuiti"
                description="Veniamo noi a casa tua a Trapani ed Erice senza impegno"
              />
              <InfoCard
                title="Bonus Infissi 2026"
                description="Ti seguiamo in tutte le pratiche per le detrazioni fiscali"
              />
              <InfoCard
                title="Posa Qualificata"
                description="Installazione eseguita da tecnici esperti per evitare infiltrazioni"
              />
            </div>
          </section>

          {/* RECENSIONI LOCALI */}
          {reviews.length > 0 && (
            <section id="feedback-trapani" className="py-3 py-md-5">
              <h2 className="text-uppercase fw-medium text-center mb-5">
                Cosa dicono i nostri clienti
              </h2>
              <div className="d-flex justify-content-center align-items-center gap-4 flex-wrap">
                {reviews
                  // Filtriamo per includere solo quelle che contengono "Google" nel titolo
                  .filter((item) =>
                    item.title?.toLowerCase().includes("google"),
                  )
                  // Prendiamo le prime 5 che superano il filtro
                  .slice(0, 5)
                  .map((item, index) => (
                    <ReviewCard key={index} review={item} />
                  ))}
              </div>
            </section>
          )}

          <ContactCTA title="Richiedi un preventivo gratuito per i tuoi nuovi infissi a Trapani" />
        </PageLayout>
      </main>
    </>
  );
}
