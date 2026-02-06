import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function PhoneMockup() {
  const [activeScreen, setActiveScreen] = useState(0);
  
  // Simulated screens for the carousel
  const screens = [
    {
      color: "bg-orange-50",
      content: (
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-4 pt-12 flex justify-between items-center">
            <div className="w-8 h-8 rounded-full bg-slate-200"></div>
            <div className="w-24 h-4 rounded-full bg-slate-200"></div>
            <div className="w-8 h-8 rounded-full bg-slate-200"></div>
          </div>
          {/* Hero Card */}
          <div className="mx-4 mt-2 h-48 rounded-2xl bg-orange-100 border border-orange-200 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200/50 to-orange-100"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <div className="w-2/3 h-6 rounded-md bg-white/60 mb-2"></div>
              <div className="w-1/2 h-4 rounded-md bg-white/40"></div>
            </div>
          </div>
          {/* List */}
          <div className="p-4 space-y-3">
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-100"></div>
              <div className="flex-1 space-y-2 py-1">
                <div className="w-3/4 h-4 rounded bg-slate-100"></div>
                <div className="w-1/2 h-3 rounded bg-slate-50"></div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-xl bg-green-100"></div>
              <div className="flex-1 space-y-2 py-1">
                <div className="w-2/3 h-4 rounded bg-slate-100"></div>
                <div className="w-1/2 h-3 rounded bg-slate-50"></div>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-12 h-12 rounded-xl bg-purple-100"></div>
              <div className="flex-1 space-y-2 py-1">
                <div className="w-4/5 h-4 rounded bg-slate-100"></div>
                <div className="w-1/3 h-3 rounded bg-slate-50"></div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      color: "bg-blue-50",
      content: (
        <div className="h-full flex flex-col p-4 pt-12">
          <div className="w-1/2 h-6 rounded-lg bg-slate-200 mb-6"></div>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="aspect-square rounded-2xl bg-white shadow-sm border border-slate-100"></div>
            <div className="aspect-square rounded-2xl bg-white shadow-sm border border-slate-100"></div>
            <div className="aspect-square rounded-2xl bg-white shadow-sm border border-slate-100"></div>
            <div className="aspect-square rounded-2xl bg-white shadow-sm border border-slate-100"></div>
          </div>
          <div className="w-full h-32 rounded-2xl bg-blue-100/50 border border-blue-100"></div>
        </div>
      )
    },
    {
      color: "bg-purple-50",
      content: (
        <div className="h-full flex flex-col pt-12 relative">
          <div className="px-4 mb-4">
            <div className="w-20 h-20 rounded-full bg-slate-200 mx-auto mb-4 border-4 border-white shadow-sm"></div>
            <div className="w-32 h-6 rounded-full bg-slate-200 mx-auto mb-2"></div>
            <div className="w-24 h-4 rounded-full bg-slate-100 mx-auto"></div>
          </div>
          <div className="flex-1 bg-white rounded-t-3xl shadow-sm border-t border-slate-100 p-6 space-y-4">
             <div className="w-full h-12 rounded-xl bg-slate-50 border border-slate-100"></div>
             <div className="w-full h-12 rounded-xl bg-slate-50 border border-slate-100"></div>
             <div className="w-full h-12 rounded-xl bg-slate-50 border border-slate-100"></div>
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
      <div className="relative w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
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
            <div className={cn("absolute inset-0 -z-10", screen.color)}></div>
            {screen.content}
          </div>
        ))}

        {/* Status Bar Mockup */}
        <div className="absolute top-3 left-6 right-6 flex justify-between items-center z-10 text-[10px] font-bold text-slate-800">
          <span>9:41</span>
          <div className="flex gap-1">
            <div className="w-3 h-3 rounded-full border border-slate-800"></div>
            <div className="w-3 h-3 rounded-full border border-slate-800 bg-slate-800"></div>
          </div>
        </div>
        
        {/* Home Indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-900/20 rounded-full z-10"></div>
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