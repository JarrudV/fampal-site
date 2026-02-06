import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Home, Heart, Users, User, MapPin, Search } from "lucide-react";
import { FamPalLogo } from "@/components/fampal-logo";

export function PhoneMockup() {
  const [activeScreen, setActiveScreen] = useState(0);
  
  // Simulated screens for the carousel based on screenshots
  const screens = [
    {
      color: "bg-slate-50",
      content: (
        <div className="h-full flex flex-col bg-slate-50">
          {/* Header */}
          <div className="p-4 pt-12 flex justify-between items-center bg-white border-b border-slate-50">
            <div className="flex items-center gap-2">
              <FamPalLogo className="w-8 h-8 rounded-lg" />
              <div>
                <p className="text-[10px] text-slate-400 font-bold tracking-wider">LOCAL GUIDE</p>
                <div className="flex items-center gap-1 text-slate-900 font-bold text-sm">
                  Somerset West <span className="text-blue-500 text-[10px]">▼</span>
                </div>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden border border-slate-200">
              <div className="w-full h-full bg-slate-200"></div>
            </div>
          </div>
          
          {/* Search Bar */}
          <div className="p-4 bg-white pb-6">
            <div className="flex gap-2">
              <div className="flex-1 bg-slate-50 rounded-xl h-10 flex items-center px-3 gap-2 text-slate-400 text-xs border border-slate-100">
                <Search size={14} />
                <span>Search places...</span>
              </div>
              <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
                <Search size={18} />
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="p-4 pt-0 -mt-2">
            <div className="flex gap-2 overflow-x-hidden">
              <div className="bg-blue-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-md shadow-blue-500/20">Explore</div>
              <div className="bg-white text-slate-600 text-[10px] font-medium px-4 py-1.5 rounded-full border border-slate-100">Saved (5)</div>
              <div className="bg-white text-slate-600 text-[10px] font-medium px-4 py-1.5 rounded-full border border-slate-100">Adventures</div>
            </div>
          </div>

          {/* Cards */}
          <div className="px-4 space-y-3 pb-20 overflow-hidden">
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex gap-3">
              <div className="w-16 h-16 rounded-xl bg-slate-200 shrink-0"></div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 text-sm">Pajamas and Jam</h4>
                <p className="text-[10px] text-slate-400 mb-2">32 Van Zyl St, Strand</p>
                <div className="flex items-center gap-1">
                  <span className="text-orange-400 text-xs">★ 4.6</span>
                  <span className="text-slate-300 text-[10px]">$$</span>
                  <span className="ml-2 text-[9px] bg-green-100 text-green-600 px-1.5 rounded-sm">Playground</span>
                  <span className="text-[9px] bg-green-100 text-green-600 px-1.5 rounded-sm">Pram Access</span>
                </div>
              </div>
              <div className="flex flex-col justify-between items-end">
                <div className="w-6 h-6 bg-purple-50 rounded-lg flex items-center justify-center text-purple-500"><Users size={12} /></div>
                <div className="w-6 h-6 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500"><Heart size={12} fill="currentColor" /></div>
              </div>
            </div>

             <div className="bg-white p-3 rounded-2xl shadow-sm border border-slate-100 flex gap-3">
              <div className="w-16 h-16 rounded-xl bg-slate-200 shrink-0"></div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-900 text-sm">Lourensford Wine</h4>
                <p className="text-[10px] text-slate-400 mb-2">Somerset West</p>
                <div className="flex items-center gap-1">
                  <span className="text-orange-400 text-xs">★ 4.4</span>
                  <span className="text-slate-300 text-[10px]">$$</span>
                  <span className="ml-2 text-[9px] bg-green-100 text-green-600 px-1.5 rounded-sm">Fenced</span>
                </div>
              </div>
              <div className="flex flex-col justify-between items-end">
                <div className="w-6 h-6 bg-purple-50 rounded-lg flex items-center justify-center text-purple-500"><Users size={12} /></div>
                <div className="w-6 h-6 bg-blue-50 rounded-lg flex items-center justify-center text-blue-500"><Heart size={12} fill="currentColor" /></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      color: "bg-slate-50",
      content: (
        <div className="h-full flex flex-col bg-slate-50">
          {/* Header with Title */}
          <div className="p-4 pt-12 bg-white pb-2">
            <div className="flex items-center gap-2 text-blue-500 font-medium text-xs mb-1">
              <Users size={14} /> Partner Circles
            </div>
            <h2 className="text-xl font-bold text-slate-900">Your Circles</h2>
          </div>

          <div className="px-4 py-4 space-y-3">
             <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-3">
                   <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 text-lg">🏌️</div>
                   <div>
                      <h4 className="font-bold text-slate-900 text-sm">Golf</h4>
                      <p className="text-[10px] text-slate-400">View members & places</p>
                   </div>
                </div>
                <div className="text-slate-300">›</div>
             </div>

             <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="font-bold text-slate-900 text-sm mb-3">Join a circle</h4>
                <div className="flex gap-2">
                   <div className="flex-1 h-9 bg-slate-50 rounded-lg border border-slate-100 px-3 flex items-center text-xs text-slate-400">Enter code</div>
                   <div className="h-9 px-4 bg-purple-400 rounded-lg flex items-center text-white text-xs font-bold">Join</div>
                </div>
             </div>
          </div>
          
          <div className="px-4 mt-2">
             <div className="bg-pink-50 p-4 rounded-2xl border border-pink-100">
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-10 h-10 rounded-full bg-white overflow-hidden border-2 border-white shadow-sm"></div>
                   <div>
                      <h4 className="font-bold text-slate-900 text-sm">Jarrud V.</h4>
                      <p className="text-[10px] text-pink-500 font-bold">PARTNER LINKED</p>
                   </div>
                </div>
                <div className="bg-white/60 rounded-xl p-3 text-xs text-slate-600">
                   Shared Favorites: 12 places
                </div>
             </div>
          </div>
        </div>
      )
    },
    {
      color: "bg-slate-50",
      content: (
        <div className="h-full flex flex-col bg-slate-50 relative">
          {/* Adventure Summary */}
          <div className="p-4 pt-12">
            <div className="bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl p-4 text-white shadow-lg shadow-orange-500/20 relative overflow-hidden">
               <div className="relative z-10">
                  <p className="text-[10px] font-bold opacity-80 mb-1">ADVENTURES COMPLETED</p>
                  <h2 className="text-4xl font-extrabold">4</h2>
               </div>
               <div className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl">🏆</div>
            </div>
          </div>
          
          <div className="px-4 pb-2">
            <div className="flex justify-between items-center mb-2">
               <h3 className="font-bold text-slate-900">Add a Memory</h3>
               <span className="text-[10px] font-bold text-blue-500">ADD MEMORY</span>
            </div>
          </div>

          <div className="px-4 space-y-3 overflow-hidden">
             <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                <div className="flex justify-between mb-2">
                   <div className="flex gap-2 items-center">
                      <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">J</div>
                      <div>
                         <p className="text-xs font-bold text-slate-900">Jarrud V.</p>
                         <p className="text-[10px] text-slate-400">1d ago</p>
                      </div>
                   </div>
                </div>
                <p className="text-xs text-slate-600 mb-3">Best breakfasts ever! The kids loved the play area.</p>
                <div className="flex items-center gap-1 text-[10px] text-red-500 font-medium mb-3">
                   <MapPin size={10} /> Vergelegen Wine Estate
                </div>
                <div className="flex border-t border-slate-50 pt-2 gap-4">
                   <div className="flex-1 text-center text-[10px] text-slate-400 font-medium flex items-center justify-center gap-1"><Users size={10} /> Circle</div>
                   <div className="flex-1 text-center text-[10px] text-slate-400 font-medium flex items-center justify-center gap-1"><MapPin size={10} /> Share</div>
                </div>
             </div>
          </div>
        </div>
      )
    }
  ];

  // Auto rotate screens
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [screens.length]);

  return (
    <div className="relative mx-auto w-[280px] h-[580px] md:w-[300px] md:h-[600px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-900 shadow-2xl ring-1 ring-white/10 select-none">
      {/* Dynamic Island / Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-20 flex justify-center items-center">
        <div className="w-16 h-4 bg-black rounded-full flex items-center gap-2 px-2">
           <div className="w-2 h-2 rounded-full bg-slate-800"></div>
           <div className="w-1 h-1 rounded-full bg-blue-900"></div>
        </div>
      </div>

      {/* Screen Content */}
      <div className="relative w-full h-full bg-slate-50 rounded-[2.5rem] overflow-hidden flex flex-col">
        <div className="flex-1 relative overflow-hidden">
          {screens.map((screen, index) => (
            <div
              key={index}
              className={cn(
                "absolute inset-0 w-full h-full transition-all duration-700 ease-in-out flex flex-col",
                index === activeScreen 
                  ? "opacity-100 translate-x-0" 
                  : index < activeScreen ? "opacity-0 -translate-x-10" : "opacity-0 translate-x-10"
              )}
            >
              {screen.content}
            </div>
          ))}
        </div>

        {/* Bottom Nav - Always Visible */}
        <div className="h-16 bg-white border-t border-slate-100 flex justify-between items-center px-6 relative z-10">
           <div className="flex flex-col items-center gap-1 text-blue-500">
              <Home size={20} fill="currentColor" className="opacity-20" />
              <span className="text-[9px] font-medium text-slate-300">Home</span>
           </div>
           <div className="flex flex-col items-center gap-1 text-blue-500">
              <Heart size={20} fill="currentColor" />
              <span className="text-[9px] font-bold">Saved</span>
           </div>
           <div className="flex flex-col items-center gap-1 text-slate-300">
              <Users size={20} />
              <span className="text-[9px] font-medium">Circles</span>
           </div>
           <div className="flex flex-col items-center gap-1 text-slate-300">
              <User size={20} />
              <span className="text-[9px] font-medium">Profile</span>
           </div>
        </div>

        {/* Status Bar Mockup */}
        <div className="absolute top-3 left-6 right-6 flex justify-between items-center z-10 text-[10px] font-bold text-slate-800">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full border border-slate-800"></div>
            <div className="w-3 h-3 rounded-full border border-slate-800 bg-slate-800"></div>
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-900/10 rounded-full z-20"></div>
      </div>
      
      {/* Reflection/Gloss */}
      <div className="absolute inset-0 rounded-[3rem] ring-1 ring-inset ring-white/5 pointer-events-none z-30"></div>
      <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white/5 to-transparent rounded-[3rem] pointer-events-none z-30"></div>
      
      {/* Side Buttons */}
      <div className="absolute top-24 -right-3 w-1.5 h-12 bg-slate-800 rounded-r-md shadow-sm"></div>
      <div className="absolute top-24 -left-3 w-1.5 h-8 bg-slate-800 rounded-l-md shadow-sm"></div>
      <div className="absolute top-36 -left-3 w-1.5 h-12 bg-slate-800 rounded-l-md shadow-sm"></div>
    </div>
  );
}