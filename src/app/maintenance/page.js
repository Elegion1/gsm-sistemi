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
      <h1>Sito in costruzione</h1>
    </div>
  );
}
