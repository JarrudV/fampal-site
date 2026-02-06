import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, FileText } from "lucide-react";
import { Link } from "wouter";

export default function Support() {
  return (
    <Layout>
      <section className="py-20 md:py-32">
        <div className="container-width max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">How can we help?</h1>
            <p className="text-xl text-slate-500">We're here to help you get the most out of FamPal.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Email Support</h3>
              <p className="text-slate-500 mb-6">
                Have a specific question or issue? Drop us an email and we'll get back to you within 24 hours.
              </p>
              <Button variant="outline" className="w-full rounded-xl" asChild>
                <a href="mailto:support@fampal.co.za">Email Us</a>
              </Button>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-6">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Legal & Privacy</h3>
              <p className="text-slate-500 mb-6">
                Questions about your data or our terms? Read our legal documents for full details.
              </p>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 rounded-xl" asChild>
                  <Link href="/privacy">Privacy</Link>
                </Button>
                <Button variant="outline" className="flex-1 rounded-xl" asChild>
                  <Link href="/terms">Terms</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}