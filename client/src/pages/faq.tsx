import { Layout } from "@/components/layout";
import { FAQS, APP_URL } from "@/lib/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  return (
    <Layout>
      <section className="py-20 md:py-32 min-h-[80vh] bg-slate-50/30">
        <div className="container-width max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Frequently Asked Questions</h1>
            <p className="text-xl text-slate-500">Everything you need to know about FamPal.</p>
          </div>

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-100">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {FAQS.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-slate-100 last:border-0">
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-800 hover:text-primary transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-500 leading-relaxed text-base pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-16 text-center bg-blue-50 rounded-3xl p-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Still have questions?</h3>
            <p className="text-slate-600 mb-8">Can't find the answer you're looking for? Please chat to our friendly team.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="rounded-full bg-white" asChild>
                <a href="mailto:support@fampal.co.za">Contact Support</a>
              </Button>
              <Button size="lg" className="rounded-full bg-primary text-white" asChild>
                <a href={APP_URL}>Get Started</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}