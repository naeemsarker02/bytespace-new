import Image from "next/image";
import Container from "@/components/ui/Container";
import { partners } from "@/data/partners";

export default function LogoStrip() {
  return (
    <section aria-label="Partners" className="bg-shuttle-50 py-16 xl:py-20">
      <Container>
        <ul className="flex flex-wrap items-end justify-center gap-x-[72px] gap-y-8">
          {partners.map((partner) => (
            <li key={partner.id}>
              <Image src={partner.logo} alt={partner.name} width={168} height={41} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
