import React from "react";

export default function GenerateButton() {
  return (
    <button
      className="relative w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-48 rounded-full bg-gradient-to-b from-slate-700 to-slate-900 text-white text-md sm:text-lg md:text-xl lg:text-lg xl:text-md font-bold shadow-[0_4px_16px_rgba(0,0,0,0.4)] sm:shadow-[0_6px_24px_rgba(0,0,0,0.4)] md:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-200 ease-out hover:shadow-[0_6px_20px_rgba(0,0,0,0.5)] sm:hover:shadow-[0_8px_28px_rgba(0,0,0,0.5)] md:hover:shadow-[0_12px_40px_rgba(0,0,0,0.5)] hover:scale-[1.02] focus:outline-none flex items-center justify-center border-2 sm:border-3 md:border-4 border-white/20 active:scale-[0.98] active:shadow-[0_2px_8px_rgba(0,0,0,0.4)] sm:active:shadow-[0_3px_12px_rgba(0,0,0,0.4)] md:active:shadow-[0_4px_16px_rgba(0,0,0,0.4)] hover:cursor-pointer"
      style={{
        background: "linear-gradient(135deg, #475569 0%, #334155 50%, #1e293b 100%)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,0,0.2)",
      }}
    >
      {/* Inner highlight for 3D effect */}
      <span 
        className="absolute inset-1 sm:inset-1.5 md:inset-2 rounded-full pointer-events-none opacity-30"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%)",
        }}
      ></span>
      
      {/* Subtle inner glow */}
      <span 
        className="absolute inset-4 sm:inset-5 md:inset-6 lg:inset-7 xl:inset-8 rounded-full pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(circle at center, rgba(255,255,255,0.3), transparent 70%)",
        }}
      ></span>
      
      {/* Button Text */}
      <span className="z-10 relative font-black tracking-wide text-shadow-lg">
        GENERATE
      </span>
      
      {/* Subtle border highlight */}
      <span className="absolute inset-1 sm:inset-1.5 md:inset-2 rounded-full border border-white/30 pointer-events-none"></span>
    </button>
  );}