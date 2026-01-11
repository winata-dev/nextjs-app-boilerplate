import { FeatureCard } from "@/components/molecules/FeatureCard";

type Feature = {
  title: string;
  description: string;
};

type FeatureSectionProps = {
  eyebrow?: string;
  heading?: string;
  features?: Feature[];
};

const defaultFeatures: Feature[] = [
  {
    title: "Smart Inventory",
    description: "Track stock in real time with clean, human-friendly alerts.",
  },
  {
    title: "Unified Orders",
    description: "Keep sales, payouts, and shipping updates in one view.",
  },
  {
    title: "Insightful Metrics",
    description: "See what is growing and what needs attention at a glance.",
  },
];

export function FeatureSection({
  eyebrow = "Why Blossend",
  heading = "Everything you need to scale with clarity",
  features = defaultFeatures,
}: FeatureSectionProps) {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
          {heading}
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
