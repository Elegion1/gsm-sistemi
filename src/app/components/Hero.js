import Image from "next/image";

export default function Hero({ params }) {
  return (
    <section>
      <div className="hero">
        <div style={{ width: "100%", height: "40vh", position: "relative" }}>
          <Image
            src="/images/image.png"
            alt="Hero Image"
            fill
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
      </div>
    </section>
  );
}
