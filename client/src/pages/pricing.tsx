import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { PRICING_TIERS, APP_URL } from "@/lib/constants";
import { Check, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Pricing() {
  return (
    <Layout>
      <section className="py-20 md:py-32 bg-slate-50/50">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Simple, fair pricing</h1>
            <p className="text-xl text-slate-500">Start for free, upgrade for more power. No hidden fees.</p>
            <p className="text-sm font-medium text-blue-600 bg-blue-50 inline-block px-4 py-1.5 rounded-full mt-2">
              Final pricing will be confirmed at launch. Early users get founder perks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
            {PRICING_TIERS.map((tier, index) => (
              <div 
                key={tier.name}
                className={cn(
                  "relative p-8 rounded-3xl border bg-white transition-all duration-300",
                  tier.popular 
                    ? "border-orange-200 shadow-2xl scale-105 z-10 ring-4 ring-orange-50" 
                    : "border-slate-200 shadow-sm hover:shadow-lg hover:-translate-y-1"
                )}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-extrabold text-slate-900">{tier.price}</span>
                    {tier.period && <span className="text-slate-500 font-medium">{tier.period}</span>}
                  </div>
                  <p className="text-slate-500 mt-4">{tier.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                      </div>
                      <span className="text-slate-600 text-sm font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={cn(
                    "w-full rounded-xl h-12 font-semibold",
                    tier.popular 
                      ? "bg-primary hover:bg-primary/90 text-white shadow-lg shadow-orange-500/20" 
                      : "bg-slate-100 hover:bg-slate-200 text-slate-900"
                  )}
                  asChild
                >
                  <a href={APP_URL}>{tier.cta}</a>
                </Button>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-sm text-slate-500">
              <ShieldCheck size={16} className="text-green-500" />
              <span className="font-medium">Payments handled securely. In-app purchases available on iOS and Android.</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}