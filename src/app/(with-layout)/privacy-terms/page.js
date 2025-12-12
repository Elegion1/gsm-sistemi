import Link from "next/link";
import owner from "@/data/owner.json";

export const metadata = {
  title: `Privacy Policy | ${owner.companyName}`,
  description:
    `Informativa completa sul trattamento dei dati personali da parte di ${owner.companyName}. Scopri come gestiamo sicurezza, contatti, richieste dal sito e tutela della privacy`,
};

export default function PrivacyPage() {
  return (
    <div style={{ marginTop: "25vh" }} className="container mb-5">
      <h1 className="text-center fw-bold mb-4">Informativa Privacy</h1>
      <p className="text-muted text-end">Ultimo aggiornamento: 12/12/2025</p>

      <section className="mb-4">
        <h2 className="fw-semibold">1. Titolare del trattamento</h2>
        <p>
          Il titolare del trattamento dei dati è{" "}
          <strong>{owner.legalName}</strong>, con sede in{" "}
          <strong>
            {owner.address.street}, {owner.address.streetNumber},
            {owner.address.city}, {owner.address.locality} {owner.address.zip}{" "}
            {owner.address.province}
          </strong>
          , email: <Link href={`mailto:${owner.email}`}>{owner.email}</Link>.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="fw-semibold">2. Tipologia di dati raccolti</h2>
        <ul>
          <li>
            <strong>Dati forniti direttamente:</strong> nome, email, telefono e
            messaggi inseriti nei moduli di contatto.
          </li>
          <li>
            <strong>Dati di navigazione:</strong> informazioni raccolte
            automaticamente come indirizzo IP, tipo di browser, pagine visitate
            e durata della visita.
          </li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="fw-semibold">3. Finalità del trattamento</h2>
        <p>I dati raccolti vengono utilizzati esclusivamente per:</p>
        <ul>
          <li>
            Rispondere alle richieste inviate tramite i moduli di contatto.
          </li>
          <li>Fornire informazioni sui nostri servizi e prodotti.</li>
          <li>Migliorare l’esperienza di navigazione sul sito.</li>
          <li>Adempiere obblighi di legge.</li>
        </ul>
      </section>

      <section className="mb-4">
        <h2 className="fw-semibold">4. Base giuridica</h2>
        <p>
          Il trattamento dei dati si basa sul tuo consenso e sull’esecuzione di
          obblighi contrattuali o legali previsti dalla normativa vigente.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="fw-semibold">5. Conservazione dei dati</h2>
        <p>
          I dati personali forniti tramite moduli saranno conservati per il
          tempo necessario a gestire la richiesta o fino al termine degli
          obblighi di legge. I dati di navigazione saranno conservati per un
          periodo massimo di 12 mesi.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="fw-semibold">6. Diritti dell’utente</h2>
        <p>Hai diritto di:</p>
        <ul>
          <li>Accedere ai tuoi dati personali.</li>
          <li>Chiederne la rettifica o la cancellazione.</li>
          <li>Limitare il trattamento o opporti al suo utilizzo.</li>
          <li>Richiedere la portabilità dei dati.</li>
          <li>
            Revocare il consenso in qualsiasi momento senza pregiudicare la
            liceità del trattamento precedente.
          </li>
        </ul>
        <p>
          Per esercitare i tuoi diritti, contattaci via email a:{" "}
          <Link href={`mailto:${owner.email}`}>{owner.email}</Link>.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="fw-semibold">7. Sicurezza dei dati</h2>
        <p>
          Adottiamo misure tecniche e organizzative per proteggere i tuoi dati
          da accessi non autorizzati, perdite, alterazioni o divulgazioni non
          consentite.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="fw-semibold">8. Modifiche all’informativa</h2>
        <p>
          Ci riserviamo il diritto di aggiornare la presente informativa.
          Eventuali modifiche saranno pubblicate su questa pagina con la data di
          aggiornamento aggiornata.
        </p>
      </section>
    </div>
  );
}
