import owner from "@/data/owner.json";
const a = owner.address;
const fullAddress = `${a.street} ${a.streetNumber}, ${a.zip} ${a.city} (${a.province}), ${a.country}`;

export const metadata = {
  title: `${owner.companyName} | Infissi, Serramenti, Porte e Zanzariere a ${owner.address.city}`,
  description: owner.seoDescription,
  keywords: owner.seoKeywords,
};

export const jsonLd = {
  "@context": "https://schema.org",
  "@type": owner.businessType,
  name: owner.legalName,
  telephone: owner.phone2 || owner.phone || owner.landline,
  email: owner.email,
  url: owner.url,
  sameAs: [
    owner.socials.facebook,
    owner.socials.instagram,
    owner.socials.whatsapp,
    owner.socials.google,
  ].filter(Boolean),
  image: owner.logoUrl,
  areaServed: [
    {
      "@type": "City",
      name: "Trapani",
    },
    {
      "@type": "AdministrativeArea",
      name: "Provincia di Trapani",
    },
  ],
  knowsAbout: ["Infissi", "Serramenti", "Infissi in PVC", "Infissi in alluminio"],
  address: {
    "@type": "PostalAddress",
    streetAddress: `${owner.address.street} ${owner.address.streetNumber}`,
    addressLocality: owner.address.locality || owner.address.city,
    addressRegion: owner.address.province,
    postalCode: owner.address.zip,
    addressCountry: owner.address.country,
  },
};

export default function SeoData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
