import { BadgeDot } from "@/components/atoms/BadgeDot";
import { FeatureSection } from "@/components/organisms/FeatureSection";

type LandingTemplateProps = {
  headline?: string;
  subhead?: string;
};

export function LandingTemplate({
  headline = "Manage your store with focus and speed.",
  subhead = "Blossend helps teams keep products, orders, and insights aligned in one calm workspace.",
}: LandingTemplateProps) {
  return (
    <div className="bg-slate-50">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <BadgeDot label="Now shipping v1" />
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {headline}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">{subhead}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
            Start free trial
          </button>
          <button className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900">
            View demo
          </button>
        </div>
      </section>
      <FeatureSection />
    </div>
  );
}
