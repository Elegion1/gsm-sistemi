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
            sizes="(max-width: 768px) 600px, 1200px"
            style={{ width: "100%", height: "auto" }}
            priority
            fetchPriority="high"
            imageSizes={[16, 32, 48, 64, 96, 128, 256, 384]}
            deviceSizes={[640, 750, 828, 1080, 1200, 1920]}
          />
        </div>
        <HeroTextDynamic />
      </section>
      <HeroBottom items={heroItems} />
    </>
  );
}
