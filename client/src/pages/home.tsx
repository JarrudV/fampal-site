import { Layout } from "@/components/layout";
import { PhoneMockup } from "@/components/phone-mockup";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/constants";
import { ArrowRight, MapPin, Heart, Users, Star, Sparkles, Shield, Lock, BrainCircuit } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
        {/* Background Gradients - Reverted to Orange Theme */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(ellipse_at_top,var(--color-orange-50),transparent_70%)] -z-10 opacity-60"></div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl -z-10 mix-blend-multiply animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>

        <div className="container-width">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
            {/* Hero Text */}
            <div className="flex-1 text-center md:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm text-sm font-medium text-blue-600 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                The safe way to plan family fun
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight pb-4 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                Less searching.<br/>
                <span className="text-blue-600">Less guessing.</span><br/>
                <span className="text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 block mt-2 pb-1">Adventures made easy.</span>
              </h1>
              
              <p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto md:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                Know the facilities upfront (play areas, pram access, toilets). Decide together, save easy wins, and enjoy family time without the stress.
                <span className="block mt-2 text-sm text-slate-400">Private by default. Secure by design.</span>
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-xl shadow-blue-500/20 bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto" asChild>
                  <a href={APP_URL}>Open the app <ArrowRight className="ml-2 w-4 h-4" /></a>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full px-8 h-12 text-base bg-white border-slate-200 hover:bg-slate-50 text-slate-700 w-full sm:w-auto" asChild>
                  <Link href="/pricing">See pricing</Link>
                </Button>
              </div>
              
              <div className="pt-4 flex items-center justify-center md:justify-start gap-4 text-sm text-slate-400 animate-in fade-in duration-1000 delay-500">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] text-slate-500 overflow-hidden">
                      <div className={`w-full h-full bg-slate-${i*100 + 100}`}></div>
                    </div>
                  ))}
                </div>
                <p>Trusted by modern families</p>
              </div>
            </div>
            
            {/* Phone Mockup */}
            <div className="flex-1 flex justify-center md:justify-end animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-orange-200 to-blue-200 rounded-full blur-[80px] opacity-40 -z-10 transform translate-y-10"></div>
                <PhoneMockup />
                
                {/* Floating Elements */}
                <div className="absolute top-1/4 -left-12 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="p-2 bg-green-100 rounded-full text-green-600">
                    <Shield size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Child Profile</p>
                    <p className="text-sm font-bold text-slate-800">Secure & Private</p>
                  </div>
                </div>
                
                <div className="absolute bottom-1/4 -right-8 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}>
                  <div className="p-2 bg-purple-100 rounded-full text-purple-500">
                    <BrainCircuit size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Gemini AI</p>
                    <p className="text-sm font-bold text-slate-800">Summarizing Reviews...</p>
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
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
            Tired of Googling "kid friendly places" and calling to check for high chairs?
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-slate-500">
             <span className="bg-slate-50 px-4 py-2 rounded-full border border-slate-100">🚫 Guessing facilities</span>
             <span className="bg-slate-50 px-4 py-2 rounded-full border border-slate-100">🚫 WhatsApp link chaos</span>
             <span className="bg-slate-50 px-4 py-2 rounded-full border border-slate-100">🚫 Disappointing outings</span>
          </div>
          <div className="pt-4">
             <p className="text-xl font-medium text-blue-600">FamPal fixes this.</p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Real world family advice</h2>
            <p className="text-lg text-slate-500">We focus on the practical details that make or break a family outing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MapPin className="text-blue-500" />}
              title="Know Before You Go"
              description="See facilities upfront: Is there a play area? Is it fenced? Are there baby changing stations? No more surprises."
              color="bg-blue-50"
            />
            <FeatureCard 
              icon={<BrainCircuit className="text-purple-500" />}
              title="Review Summaries"
              description="Stop reading 50 reviews. Our AI scans them for you and highlights safety, facilities, and vibe instantly."
              color="bg-purple-50"
            />
            <FeatureCard 
              icon={<Users className="text-green-500" />}
              title="Plan Together"
              description="Link with your partner to save ideas to a shared list. Stop sending links back and forth on WhatsApp."
              color="bg-green-50"
            />
            <FeatureCard 
              icon={<Heart className="text-red-500" />}
              title="Save What Works"
              description="Build a library of 'Safe Bets'—places you know your family loves, organized and ready for next time."
              color="bg-red-50"
            />
            <FeatureCard 
              icon={<Lock className="text-orange-500" />}
              title="Private Memories"
              description="Keep photos and notes private. Share only with the people you trust, or keep them just for you."
              color="bg-orange-50"
            />
            <FeatureCard 
              icon={<Shield className="text-teal-500" />}
              title="Secure Child Profiles"
              description="Tailor recommendations to your child's age group without compromising their data privacy."
              color="bg-teal-50"
            />
          </div>
        </div>
      </section>

      {/* Social Proof / Trust Section - Moved here */}
      <section className="py-16 bg-slate-50/50 border-y border-slate-100">
        <div className="container-width">
          <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">Partnering with secure technology</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-20 opacity-80">
            <div className="font-bold text-xl md:text-2xl text-slate-600 flex items-center gap-3"><BrainCircuit className="w-8 h-8 text-purple-500" /> Gemini AI</div>
            <div className="font-bold text-xl md:text-2xl text-slate-600 flex items-center gap-3"><MapPin className="w-8 h-8 text-red-500" /> Google Maps</div>
            <div className="font-bold text-xl md:text-2xl text-slate-600 flex items-center gap-3"><Shield className="w-8 h-8 text-blue-500" /> Secure Cloud</div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-slate-50">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">How FamPal works</h2>
            <p className="text-slate-500">Three simple steps to better family time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent -z-10"></div>
            
            <Step 
              number="1"
              title="Pick a Vibe"
              description="Tell us who's coming (ages, interests) and we'll filter out the places that won't work."
            />
            <Step 
              number="2"
              title="Check What Matters"
              description="See facility details and AI summaries instantly. No more guessing."
            />
            <Step 
              number="3"
              title="Share, Go, Remember"
              description="Send the plan to your partner, enjoy the day, and save the memory privately."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container-width">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Loved by families</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TestimonialCard 
              quote="I love that I can share photos with the grandparents without posting them on public social media."
              author="Sarah J."
              role="Mom of 2"
            />
            <TestimonialCard 
              quote="The AI summaries save me so much time reading reviews. I know instantly if a place is toddler-friendly."
              author="Michael T."
              role="Dad of 3"
            />
            <TestimonialCard 
              quote="Partner linking is a game changer. We both add ideas to our weekend itinerary."
              author="Emily R."
              role="Adventure Mom"
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="container-width">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready for your next adventure?</h2>
              <p className="text-blue-100 text-lg md:text-xl">Join thousands of families planning better, safer days together with FamPal.</p>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 border-0 shadow-lg rounded-full px-10 h-14 text-lg font-semibold" asChild>
                <a href={APP_URL}>Get Started for Free</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

function FeatureCard({ icon, title, description, color }: { icon: React.ReactNode, title: string, description: string, color: string }) {
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

function Step({ number, title, description }: { number: string, title: string, description: string }) {
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

function TestimonialCard({ quote, author, role }: { quote: string, author: string, role: string }) {
  return (
    <div className="p-8 rounded-3xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 transition-colors">
      <div className="flex gap-1 text-orange-400 mb-4">
        {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
      </div>
      <p className="text-slate-700 italic mb-6">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-200"></div>
        <div>
          <p className="font-bold text-slate-900 text-sm">{author}</p>
          <p className="text-slate-400 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}