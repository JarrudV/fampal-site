import { Layout } from "@/components/layout";
import { PhoneMockup } from "@/components/phone-mockup";
import { Button } from "@/components/ui/button";
import { APP_URL } from "@/lib/constants";
import { ArrowRight, MapPin, Heart, Users, Star, Sparkles, Shield, Clock } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[800px] bg-[radial-gradient(ellipse_at_top,var(--color-orange-50),transparent_70%)] -z-10 opacity-60"></div>
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-3xl -z-10 mix-blend-multiply animate-pulse" style={{ animationDuration: '4s' }}></div>
        <div className="absolute top-40 left-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-3xl -z-10 mix-blend-multiply"></div>

        <div className="container-width">
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-8">
            {/* Hero Text */}
            <div className="flex-1 text-center md:text-left space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-orange-100 shadow-sm text-sm font-medium text-orange-600 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
                The #1 app for family adventures
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                Plan better family <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500">adventures</span> together
              </h1>
              
              <p className="text-lg md:text-xl text-slate-500 max-w-xl mx-auto md:mx-0 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
                FamPal helps you discover kid-friendly activities, organize your itinerary, and share memories with your inner circle. Less planning, more bonding.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700 delay-300">
                <Button size="lg" className="rounded-full px-8 h-12 text-base shadow-xl shadow-orange-500/20 bg-primary hover:bg-primary/90 text-white w-full sm:w-auto" asChild>
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
                <p>Trusted by 1,000+ families</p>
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
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">New Place Found</p>
                    <p className="text-sm font-bold text-slate-800">Sunny Park</p>
                  </div>
                </div>
                
                <div className="absolute bottom-1/4 -right-8 bg-white p-3 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-3 animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}>
                  <div className="p-2 bg-red-100 rounded-full text-red-500">
                    <Heart size={20} fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Saved to</p>
                    <p className="text-sm font-bold text-slate-800">Summer Trip</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-10 border-y border-slate-100 bg-slate-50/50">
        <div className="container-width">
          <p className="text-center text-sm font-medium text-slate-400 uppercase tracking-wider mb-6">Trusted by modern families everywhere</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder Logos */}
            {['FamilyGuide', 'KidExplorer', 'ParentLife', 'Moments', 'Together'].map((name) => (
              <div key={name} className="flex items-center gap-2 font-bold text-xl text-slate-600">
                <div className="w-6 h-6 rounded bg-slate-400/50"></div>
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32">
        <div className="container-width">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Everything you need for perfect family days</h2>
            <p className="text-lg text-slate-500">FamPal brings all your planning into one beautiful, easy-to-use app designed for busy parents.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<MapPin className="text-blue-500" />}
              title="Discover Places"
              description="Find kid-friendly parks, museums, and hidden gems near you or at your destination."
              color="bg-blue-50"
            />
            <FeatureCard 
              icon={<Heart className="text-red-500" />}
              title="Save Favorites"
              description="Build lists of places you want to visit. Organize them by trip or theme."
              color="bg-red-50"
            />
            <FeatureCard 
              icon={<Users className="text-purple-500" />}
              title="Share with Circles"
              description="Invite family members to your circle. Plan together and keep everyone in the loop."
              color="bg-purple-50"
            />
            <FeatureCard 
              icon={<Star className="text-yellow-500" />}
              title="Build Memories"
              description="Keep a digital journal of your adventures. Upload photos and notes to cherish forever."
              color="bg-yellow-50"
            />
            <FeatureCard 
              icon={<Sparkles className="text-orange-500" />}
              title="Smart Suggestions"
              description="Get personalized recommendations based on your family's interests and ages."
              color="bg-orange-50"
            />
            <FeatureCard 
              icon={<Shield className="text-green-500" />}
              title="Safe & Private"
              description="Your family data is private. Share only with the people you trust in your circle."
              color="bg-green-50"
            />
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
              title="Create a Circle"
              description="Sign up and create a private circle for your family members."
            />
            <Step 
              number="2"
              title="Plan Together"
              description="Add activities to your itinerary. Everyone can suggest ideas."
            />
            <Step 
              number="3"
              title="Enjoy the Adventure"
              description="Follow your plan, take photos, and save memories in the app."
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
              quote="FamPal changed how we do weekends. No more arguing about where to go!"
              author="Sarah J."
              role="Mom of 2"
            />
            <TestimonialCard 
              quote="I love that I can share the itinerary with my husband and he actually knows what's happening."
              author="Michael T."
              role="Dad of 3"
            />
            <TestimonialCard 
              quote="The best app for keeping track of all the cool places we want to visit someday."
              author="Emily R."
              role="Adventure Mom"
            />
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20">
        <div className="container-width">
          <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-30"></div>
            
            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready for your next adventure?</h2>
              <p className="text-orange-100 text-lg md:text-xl">Join thousands of families planning better days together with FamPal.</p>
              <Button size="lg" className="bg-white text-orange-600 hover:bg-orange-50 border-0 shadow-lg rounded-full px-10 h-14 text-lg font-semibold" asChild>
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
      <div className="w-12 h-12 rounded-full bg-white border-2 border-orange-100 text-orange-600 font-bold text-xl flex items-center justify-center shadow-sm mb-6 relative z-10">
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