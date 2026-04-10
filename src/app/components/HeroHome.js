import Image from "next/image";
import HeroBottom from "./HeroBottom";
import HeroTextDynamic from "./HeroTextDynamic";

const heroItems = [
  "qualità certificata",
  "efficienza energetica",
  "design su misura",
  "installazione professionale",
];

export default function HeroHome() {
  return (
    <>
      <section>
        <div className="hero">
          <Image
            src="/images/image.png"
            alt="gsm-sistemi"
            width={1400}
            height={1008}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
            priority={true}
          />
        </div>
        <HeroTextDynamic />
      </section>
      <HeroBottom items={heroItems} />
    </>
  );
}
