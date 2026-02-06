import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import homeScreen from "@assets/image_1770368397106.png";
import savedScreen from "@assets/image_1770368482539.png";
import detailScreen from "@assets/image_1770369299270.png";
import profileScreen from "@assets/image_1770369232368.png";

export function PhoneMockup() {
  const [activeScreen, setActiveScreen] = useState(0);
  
  // Use the provided screenshots
  const screens = [
    { src: homeScreen, alt: "FamPal Home Search" },
    { src: detailScreen, alt: "Place Details with AI and Facilities" },
    { src: savedScreen, alt: "Saved Places List" },
    { src: profileScreen, alt: "Family Profile and Settings" }
  ];

  // Auto rotate screens
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [screens.length]);

  return (
    <div className="relative mx-auto w-[280px] h-[580px] md:w-[300px] md:h-[600px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-900 shadow-2xl ring-1 ring-white/10 select-none overflow-hidden">
      {/* Dynamic Island / Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-20 flex justify-center items-center">
        <div className="w-16 h-4 bg-black rounded-full flex items-center gap-2 px-2">
           <div className="w-2 h-2 rounded-full bg-slate-800"></div>
           <div className="w-1 h-1 rounded-full bg-blue-900"></div>
        </div>
      </div>

      {/* Screen Content */}
      <div className="relative w-full h-full bg-slate-50 rounded-[2.5rem] overflow-hidden flex flex-col">
        <div className="flex-1 relative overflow-hidden h-full w-full">
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
              <img 
                src={screen.src} 
                alt={screen.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
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