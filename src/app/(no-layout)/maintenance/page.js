import Image from "next/image";

export default function MaintenancePage() {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <Image
        src={"/images/logo.JPG"}
        alt="Logo"
        width={1206}
        height={1169}
        className="image m-5"
      />
      <h1 className="text-center">Sito in costruzione</h1>
      <h2 className="text-center fw-normal">
        Per info contattaci al numero <strong>+39 349 41 26 860</strong>
      </h2>
      <h3 className="text-center fw-normal">
        Oppure vieni a trovarci in{" "}
        <strong>Via Giuseppe Cesarò, 99/c Casa Santa Erice (TP) </strong>
      </h3>
    </div>
  );
}
