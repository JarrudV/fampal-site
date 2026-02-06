import { Layout } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { FileQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4 text-center">
        <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 mb-6">
          <FileQuestion size={48} />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Page not found</h1>
        <p className="text-xl text-slate-500 max-w-md mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button size="lg" className="rounded-full px-8" asChild>
          <Link href="/">Go back home</Link>
        </Button>
      </div>
    </Layout>
  );
}