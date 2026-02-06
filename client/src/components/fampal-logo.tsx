export function FamPalLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main Blue Background Container - Soft Rounded Square */}
      <rect width="100" height="100" rx="22" fill="#3B82F6" />
      
      {/* Three Intersecting Circles */}
      <g transform="translate(50, 50)">
        {/* Left Circle - White */}
        <circle cx="-15" cy="5" r="22" fill="white" />
        
        {/* Right Circle - Light Blue */}
        <circle cx="15" cy="5" r="22" fill="#BFDBFE" />
        
        {/* Top Circle - Orange (Overlaying the others) */}
        <circle cx="0" cy="-15" r="18" fill="#F97316" />
      </g>
    </svg>
  );
}