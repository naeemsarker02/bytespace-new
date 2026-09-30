import Image from "next/image";
import Container from "@/components/ui/Container";
import { partners } from "@/data/partners";

export default function LogoStrip() {
  return (
    <section aria-label="Partners" className="bg-shuttle-50 py-16 xl:py-20">
      <Container>
        <ul className="flex flex-wrap items-end justify-center gap-x-8 gap-y-6 md:gap-x-[72px] md:gap-y-8">
          {partners.map((partner) => (
            <li key={partner.id} className="w-[calc(50%-1rem)] sm:w-auto">
              <Image src={partner.logo} alt={partner.name} width={168} height={41} className="mx-auto h-8 w-auto md:h-[41px]" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
