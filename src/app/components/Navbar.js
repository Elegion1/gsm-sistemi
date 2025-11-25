import Image from "next/image";

const navItems = [
  { name: "prodotti", link: "/" },
  { name: "partners", link: "/partners" },
  { name: "servizi", link: "/servizi" },
  { name: "contatti", link: "/contatti" },
];

export default function Navbar() {
  return (
    <nav className="w-100 navbar d-flex justify-content-center align-items-center flex-column fixed-top">
      <Image src="/images/logo_long.svg" height={75} width={366} alt="Logo-gsm-sistemi" />

      <ul className="d-flex justify-content-center align-items-center gap-5 mt-3 mb-0 list-unstyled">
        {navItems.map((item) => (
          <li className="text-uppercase" key={item.name}>
            <a className="text-reset text-decoration-none text-c fw-semibold" href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
} 
