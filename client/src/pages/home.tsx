import React from "react";
import { Layout } from "@/components/layout";
import { PhoneMockup } from "@/components/phone-mockup";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/constants";
import { ArrowRight, MapPin, Heart, Users, Star, Shield, Lock, BrainCircuit, Compass, Filter, CheckSquare, Circle, ClipboardList, Share2, Sparkles, LayoutGrid, Moon, Laptop } from "lucide-react";

export default function Home() {
  const SHOW_HERO_SOCIAL_PROOF = false;
  const SHOW_TESTIMONIALS = false;
  const HAS_SCALE_CLAIM = false;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(ellipse_at_top,var(--color-orange-50),transparent_70%)] -z-10 opacity-60"></div>
        <div
          className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl -z-10 mix-blend-multiply animate-pulse"
          style={{ animationDuration: "4s" }}
        ></div>
        <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>

        <div className="container-width">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
            {/* Hero Text */}
            <div className="flex-1 text-center md:text-left space-y-8">
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-sm font-medium text-blue-600 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                The best activity planner is here
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight pb-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                Less searching.<br />
                <span className="text-blue-600">Less guessing.</span><br />
                <span className="text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 block mt-2 pb-1">
                  Plan your next adventure with ease.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto md:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                Discover restaurants, play spots, outdoor adventures, and more. Know the facilities and accessibility upfront, get AI-powered recommendations based on your preferences, and plan with a partner or friends. Stop Googling and calling places—we do the work for you.
                <span className="block mt-2 text-sm text-slate-400">Private by default. Secure by design.</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                <Button
                  size="lg"
                  className="rounded-full px-8 h-12 text-base shadow-xl shadow-blue-500/20 bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                  asChild
                >
                  <a href={APP_URL}>
                    Open the app <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full px-8 h-12 text-base bg-white border-slate-200 hover:bg-slate-50 text-slate-700 w-full sm:w-auto"
                  asChild
                >
                  <a href="#how-it-works">How it works</a>
                </Button>
              </div>

              {SHOW_HERO_SOCIAL_PROOF && (
                <div className="pt-4 flex items-center justify-center md:justify-start gap-4 text-sm text-slate-400 animate-in fade-in duration-1000 delay-500">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"
                        aria-hidden="true"
                      >
                        <div className="w-full h-full bg-slate-300"></div>
                      </div>
                    ))}
                  </div>
                  <p>Trusted by modern families</p>
                </div>
              )}
            </div>

            {/* Phone Mockup */}
            <div className="flex-1 flex justify-center md:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-blue-200 rounded-full blur-[80px] opacity-40 -z-10 transform translate-y-10"></div>
                <PhoneMockup />

                <div
                  className="absolute top-1/4 -left-12 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce"
                  style={{ animationDuration: "3s" }}
                >
                  <div className="p-2 bg-green-100 rounded-full text-green-600">
                    <Shield size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Your Profile</p>
                    <p className="text-sm font-bold text-slate-800">Secure & Private</p>
                  </div>
                </div>

                <div
                  className="absolute bottom-1/4 -right-8 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce"
                  style={{ animationDelay: "1.5s", animationDuration: "4s" }}
                >
                  <div className="p-2 bg-purple-100 rounded-full text-purple-500">
                    <BrainCircuit size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Gemini AI</p>
                    <p className="text-sm font-bold text-slate-800">Answering your questions...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="container-width max-w-4xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">Sound familiar?</h2>

          <div className="flex flex-wrap justify-center gap-4 text-slate-500">
            <span className="bg-slate-50 px-4 py-2 rounded-full border border-slate-100">“We need to do something... now what?”</span>
            <span className="bg-slate-50 px-4 py-2 rounded-full border border-slate-100">“Does this place actually have a play area?”</span>
            <span className="bg-slate-50 px-4 py-2 rounded-full border border-slate-100">“Is it pram friendly or am I carrying everything?”</span>
            <span className="bg-slate-50 px-4 py-2 rounded-full border border-slate-100">“Where do we park?”</span>
            <span className="bg-slate-50 px-4 py-2 rounded-full border border-slate-100">“Is it genuinely kid friendly or just says it is?”</span>
            <span className="bg-slate-50 px-4 py-2 rounded-full border border-slate-100">“Why am I phoning places like it’s 2009?”</span>
            <span className="bg-slate-50 px-4 py-2 rounded-full border border-slate-100">“We ended up at another chain restaurant because we couldn't think of anything else.”</span>
            <span className="bg-slate-50 px-4 py-2 rounded-full border border-slate-100">“I wish I could see what other people actually recommend nearby.”</span>
          </div>

          <div className="pt-4">
            <p className="text-xl font-medium text-blue-600">The app fixes this.</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The ultimate activity planner</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
                icon={<Compass className="text-blue-500" />}
                title="Smart Explore"
                description="Browse places by what you're in the mood for. Irrelevant results are automatically filtered out so only genuinely great places make it through."
                color="bg-blue-50"
            />
            <FeatureCard
                icon={<Filter className="text-purple-500" />}
                title="Layered Filters"
                description="Refine your results with five filter layers: Venue type, Food type, your preferences, Accessibility, and Indoor/Outdoor."
                color="bg-purple-50"
            />
            <FeatureCard
                icon={<BrainCircuit className="text-green-500" />}
                title="AI-Powered Insights"
                description="Tap 'Ask AI' for personalised recommendations powered by Google Gemini. The AI considers your dietary needs, allergies, and interests, then summarises real reviews."
                color="bg-green-50"
            />
            <FeatureCard
                icon={<CheckSquare className="text-red-500" />}
                title="Know Before You Go"
                description="See facility details and accessibility upfront: toilets, parking, shade, and noise levels. No more guessing — and no more phoning ahead to check."
                color="bg-red-50"
            />
            <FeatureCard
                icon={<Users className="text-orange-500" />}
                title="Personalized Profiles"
                description="Create a personalized profile with your interests, dietary needs, accessibility requirements, and more. The app uses this to tailor every recommendation to you."
                color="bg-orange-50"
            />
            <FeatureCard
                icon={<Heart className="text-teal-500" />}
                title="Partner Space"
                description="Link with your partner and share a private space. Save favourites together, create shared memories, and plan outings without the back-and-forth messaging."
                color="bg-teal-50"
            />
            <FeatureCard
                icon={<Circle className="text-blue-500" />}
                title="Friend Circles"
                description="Create private groups with friends. Share your favourite finds, see what your friends recommend, and coordinate group outings — all within the app."
                color="bg-blue-50"
            />
            <FeatureCard
                icon={<ClipboardList className="text-purple-500" />}
                title="Adventures Tracker"
                description="Mark places as visited, rate them, add notes, and build a timeline of your outings. Never forget a great find again."
                color="bg-purple-50"
            />
            <FeatureCard
                icon={<Share2 className="text-green-500" />}
                title="Save & Share"
                description="Save places for later. Share venue details instantly via WhatsApp. Add planned activities to Google Calendar."
                color="bg-green-50"
            />
            <FeatureCard
                icon={<Sparkles className="text-red-500" />}
                title="Fresh Finds Only"
                description="Toggle on 'Fresh Finds' to hide places you've already saved, so you only see new discoveries."
                color="bg-red-50"
            />
            <FeatureCard
                icon={<LayoutGrid className="text-orange-500" />}
                title="Discovery Mode"
                description="Switch between a clean list view and a Netflix-style visual browse for a more inspiring exploration experience."
                color="bg-orange-50"
            />
            <FeatureCard
                icon={<Moon className="text-teal-500" />}
                title="Dark Mode"
                description="Easy on the eyes for those late-night planning sessions."
                color="bg-teal-50"
            />
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="py-20 bg-slate-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How it works</h2>
            <p className="text-slate-500">Three simple steps to easier plans.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center relative">
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10"></div>

            <Step
              number="1"
              title="Pick your vibe"
              description="Choose a category — or search for something specific. Filter by venue type, food, your needs, or accessibility."
            />
            <Step
              number="2"
              title="See what matters"
              description="Facility details, AI review summaries, and relevant info — all at a glance. No more Googling, calling, or guessing."
            />
            <Step
              number="3"
              title="Share, go, remember"
              description="Send the plan to your partner or friends via WhatsApp, add it to your calendar, enjoy the day, and save the memory privately."
            />
          </div>
        </div>
      </section>

      {/* Trust/Tech Section */}
      <section className="py-16 bg-slate-50/50 border-y border-slate-100">
        <div className="container-width">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
            Built on trusted technology. Private by default.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-80">
            <div className="font-bold text-xl md:text-2xl text-slate-600 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-red-500" /> Google Maps
            </div>
            <div className="font-bold text-xl md:text-2xl text-slate-600 flex items-center gap-3">
              <BrainCircuit className="w-8 h-8 text-purple-500" /> Google Gemini AI
            </div>
            <div className="font-bold text-xl md:text-2xl text-slate-600 flex items-center gap-3">
              <Shield className="w-8 h-8 text-blue-500" /> Secure Cloud
            </div>
          </div>
        </div>
      </section>

      {SHOW_TESTIMONIALS && (
        <section className="py-20">
          <div className="container-width">
            <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Loved by everyone</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialCard
                quote="I love that I can share photos with my family without posting them on public social media."
                author="Sarah J."
                role="User"
              />
              <TestimonialCard
                quote="The AI summaries save me so much time reading reviews. I know instantly if a place is right for me."
                author="Michael T."
                role="User"
              />
              <TestimonialCard
                quote="Partner linking is a game changer. We both add ideas to our weekend itinerary."
                author="Emily R."
                role="User"
              />
            </div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="py-20">
        <div className="container-width">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready for your next adventure?</h2>

              <p className="text-blue-100 text-lg md:text-xl">
                Plan better, easier days out.
              </p>

              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 border-0 shadow-lg rounded-full px-10 h-14 text-lg font-semibold"
                asChild
              >
                <a href={APP_URL}>Get Started for Free</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}) {
  return (
    <div className="group p-8 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 leading-relaxed">{description}</p>
    </div>
  );
}

function Step({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 rounded-full bg-white border-2 border-blue-100 text-blue-600 font-bold text-xl flex items-center justify-center shadow-sm mb-6 relative z-10">
        {number}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 max-w-xs mx-auto">{description}</p>
    </div>
  );
}

function TestimonialCard({ quote, author, role }: { quote: string; author: string; role: string }) {
  return (
    <div className="p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 transition-colors">
      <div className="flex gap-1 text-orange-400 mb-4" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={16} fill="currentColor" />
        ))}
      </div>
      <p className="text-slate-700 italic mb-6">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-200" aria-hidden="true"></div>
        <div>
          <p className="font-bold text-slate-900 text-sm">{author}</p>
          <p className="text-slate-400 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
