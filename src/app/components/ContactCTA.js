import Link from "next/link";

export default function ContactCTA() {
  return (
    <section id="contacts">
      <h2 className="text-uppercase fw-medium text-center">
        Richiedi un preventivo gratuito
      </h2>
      <h3 className="text-uppercase fw-normal text-center">
        Parla con un tecnico
      </h3>
      <div className="w-100 d-flex justify-content-center align-items-center mt-4">
        <Link aria-label="Vai alla pagina contatti" href="/contatti" className="btn bg-c text-d">
          Contattaci
        </Link>
      </div>
    </section>
  );
}
