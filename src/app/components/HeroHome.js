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
            width={2500}
            height={1801}
            style={{ width: "100%", height: "auto" }}
            loading="eager"
          />
        </div>
        <HeroTextDynamic />
      </section>
      <HeroBottom items={heroItems} />
    </>
  );
}
