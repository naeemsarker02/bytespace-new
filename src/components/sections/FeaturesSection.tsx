import Container from "@/components/ui/Container";
import CreatorRow from "./CreatorRow";
import GrowthRow from "./GrowthRow";

// Soft lime / periwinkle glows behind the two feature rows (the Figma frame has blurred shapes).
const backdrop = [
  "radial-gradient(ellipse 45% 28% at 25% 0%, rgba(212,251,32,0.30), transparent 70%)",
  "radial-gradient(circle 260px at 2% 88%, rgba(212,251,32,0.40), transparent 70%)",
  "radial-gradient(circle 300px at 0% 48%, rgba(160,180,255,0.35), transparent 70%)",
  "radial-gradient(circle 420px at 92% 96%, rgba(160,180,255,0.45), transparent 70%)",
  "radial-gradient(circle 350px at 100% 5%, rgba(190,200,255,0.35), transparent 70%)",
].join(", ");

export default function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-surface-alt py-16 xl:py-[120px]">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ backgroundImage: backdrop }} />
      <Container className="relative flex flex-col gap-16 xl:gap-[72px]">
        <GrowthRow />
        <CreatorRow />
      </Container>
    </section>
  );
}
