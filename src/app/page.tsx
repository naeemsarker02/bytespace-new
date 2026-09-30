// TEMPORARY token check page - replaced by the real landing page in the next milestone.
export default function Home() {
  return (
    <main className="mx-auto max-w-[1200px] space-y-8 p-10">
      <h1 className="font-heading text-[44px] leading-[1.2] font-semibold tracking-[-0.44px] text-shuttle-950">
        ByteSpace design tokens
      </h1>
      <p className="text-lg leading-[1.6] text-shuttle-700">
        Body text uses the body font stack (Satoshi once the font files are added).
      </p>
      <div className="flex gap-4">
        <div className="h-20 w-40 rounded-card bg-persian-800" />
        <div className="h-20 w-40 rounded-card bg-electric-400" />
        <div className="h-20 w-40 rounded-card bg-shuttle-100" />
        <div className="h-20 w-40 rounded-float bg-surface-alt shadow-hero" />
      </div>
    </main>
  );
}
