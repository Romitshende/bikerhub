"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [routes] = useState([
    { id: 1, title: "Lavasa Mountain Pass", dist: "42km", tag: "TWISTIES", img: "/lavasa.png" },
    { id: 2, title: "Mahabaleshwar Ridge", dist: "78km", tag: "SCENIC", img: "/mahabaleshwar.png" },
    { id: 3, title: "Western Ghats Trail", dist: "35km", tag: "OFF-ROAD", img: "/western-ghats.png" },
  ]);

  return (
    <div className="min-h-screen bg-black text-white p-6 md:p-16">
      
      {/* Refined Header */}
      {/* Refined Header */}
<header className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
  <div>
    <span className="text-cyan-400 font-bold tracking-[0.3em] text-[10px] uppercase mb-4 block">
      BikerHub Elite
    </span>
    {/* Clean, bold, non-tilted heading */}
    <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight leading-[0.9]">
      Curated<br />Mastery
    </h1>
  </div>
  
  <div className="max-w-xs text-right">
    <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
      The ultimate index for performance motorcycle routes. Logged, tested, and shared by the riding community.
    </p>
    <Link 
      href="/routes/new" 
      className="inline-block px-8 py-4 bg-white text-black font-black uppercase text-[10px] tracking-[0.2em] hover:bg-cyan-400 transition-all duration-300 rounded-full"
    >
      Build Your Route
    </Link>
  </div>
</header>
{/* Bento Grid */}
<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto">
  
  {/* Large Feature */}
  <div className="col-span-1 md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl border border-white/10 bg-slate-900 h-80 md:h-162.5">
    <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent z-10" />
    <img 
      src={routes[0].img} 
      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105" 
    />
    <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-20">
      <span className="text-[10px] bg-cyan-500 text-black px-3 py-1 font-bold rounded-full">{routes[0].tag}</span>
      <h2 className="text-3xl md:text-5xl font-black mt-4 leading-none">{routes[0].title}</h2>
    </div>
  </div>

  {/* Secondary 1 */}
  <div className="col-span-1 md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-slate-900 flex items-center p-6 md:p-8 h-48">
    <div className="absolute inset-0 bg-black/60 z-10" />
    <img 
      src={routes[1].img} 
      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105" 
    />
    <div className="relative z-20 w-full flex justify-between items-center">
      <div>
        <span className="text-[9px] text-cyan-400 font-bold tracking-widest uppercase">{routes[1].tag}</span>
        <h2 className="text-2xl md:text-3xl font-black mt-1">{routes[1].title}</h2>
      </div>
      <div className="text-right">
        <p className="text-slate-400 font-mono text-[10px] uppercase">Distance</p>
        <p className="font-bold text-lg">{routes[1].dist}</p>
      </div>
    </div>
  </div>

  {/* Secondary 2 */}
  <div className="col-span-1 md:col-span-2 md:row-span-1 relative group overflow-hidden rounded-3xl border border-white/10 bg-slate-900 flex items-center p-6 md:p-8 h-48">
    <div className="absolute inset-0 bg-black/60 z-10" />
    <img 
      src={routes[2].img} 
      className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105" 
    />
    <div className="relative z-20 w-full flex justify-between items-center">
      <div>
        <span className="text-[9px] text-cyan-400 font-bold tracking-widest uppercase">{routes[2].tag}</span>
        <h2 className="text-2xl md:text-3xl font-black mt-1">{routes[2].title}</h2>
      </div>
      <div className="text-right">
        <p className="text-slate-400 font-mono text-[10px] uppercase">Distance</p>
        <p className="font-bold text-lg">{routes[2].dist}</p>
      </div>
    </div>
  </div>
</div>
</div>)}