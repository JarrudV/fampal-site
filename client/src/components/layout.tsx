import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/constants";
import { FamPalLogo } from "@/components/fampal-logo";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /**
   * Footer social links
   * Keep hidden until we actually have a real channel worth linking to.
   * If/when you launch Discord later, add it back here.
   */
  const SHOW_SOCIAL_LINKS = false;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container-width flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <FamPalLogo className="w-10 h-10 group-hover:scale-105 transition-transform shadow-lg shadow-blue-500/20 rounded-xl" />
            <span className="font-extrabold text-2xl tracking-tight text-slate-900">FamPal</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === "/" ? "text-primary" : "text-slate-600"
              }`}
            >
              Home
            </Link>
            <Link
              href="/pricing"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === "/pricing" ? "text-primary" : "text-slate-600"
              }`}
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === "/faq" ? "text-primary" : "text-slate-600"
              }`}
            >
              FAQ
            </Link>
            <Link
              href="/support"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location === "/support" ? "text-primary" : "text-slate-600"
              }`}
            >
              Support
            </Link>
          </nav>

          <div className="hidden md:flex">
            <Button
              className="rounded-full px-6 bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg shadow-primary/25 transition-all hover:shadow-primary/40 hover:-translate-y-0.5"
              asChild
            >
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">
                Open App
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-slate-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-xl p-4 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-5">
            <Link href="/" className="text-base font-medium p-2 text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg">
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-base font-medium p-2 text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg"
            >
              Pricing
            </Link>
            <Link href="/faq" className="text-base font-medium p-2 text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg">
              FAQ
            </Link>
            <Link
              href="/support"
              className="text-base font-medium p-2 text-slate-600 hover:text-primary hover:bg-slate-50 rounded-lg"
            >
              Support
            </Link>
            <Button className="w-full rounded-xl bg-primary text-white" asChild>
              <a href={APP_URL}>Open App</a>
            </Button>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-slate-50 border-t border-slate-100 py-12 md:py-16">
        <div className="container-width">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <FamPalLogo className="w-8 h-8 rounded-lg" />
                <span className="font-bold text-xl text-slate-900">FamPal</span>
              </Link>

              <p className="text-slate-500 max-w-sm leading-relaxed">
                Making family adventures easier to plan and more fun to remember.
                Discover, plan, and share your best moments.
              </p>

              {/* Social links (hidden until we have real channels) */}
              {SHOW_SOCIAL_LINKS && (
                <div className="flex gap-4 mt-6">
                  {/* Add real links here when ready (Discord, etc.) */}
                </div>
              )}
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-slate-500 hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="text-slate-500 hover:text-primary transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-slate-500 hover:text-primary transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <a href={APP_URL} className="text-slate-500 hover:text-primary transition-colors">
                    Log in
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  {/* No email system yet — send support to Jarrud */}
                  <a
                    href="mailto:jarrud@wearemuloo.com?subject=FamPal%20Support"
                    className="text-slate-500 hover:text-primary transition-colors"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <Link href="/privacy" className="text-slate-500 hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-slate-500 hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/delete-account" className="text-slate-500 hover:text-primary transition-colors">
                    Delete Account / Data
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <div className="text-center md:text-left">
              <p className="font-medium text-slate-500">
                An app built by{" "}
                <a
                  href="https://wearemuloo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:no-underline"
                >
                  Muloo
                </a>
              </p>
              <p>© {new Date().getFullYear()} FamPal. All rights reserved.</p>
            </div>

            <p>Made with ❤️ for families everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
