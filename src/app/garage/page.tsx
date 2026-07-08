"use client";
import { useState } from 'react';

export default function GaragePage() {
  const [isOwner, setIsOwner] = useState(true);
  const riderProfile = {
    name: "Riya Roy",
    role: "Engineer & Track Rider",
    avatar: "/avatar.png",
    bio: "Obsessed with apex corners and high-performance engineering. When I'm not piloting commercial jets, you'll find me tearing down the canyon twisties on a cafe racer or dialing in track telemetry.",
  };

  const garageBikes = [
    {
      id: "1",
      modelName: "Triumph Speed Twin 1200",
      modifications: "Custom Ohlins, SC-Project exhaust, clip-ons.",
      image: "/triumph.png",
      year: "2024"
    },
    {
      id: "2",
      modelName: "BMW S1000 RR",
      modifications: "Carbon fiber, Brembo GP4-RX, slicks.",
      image: "/s1000rr.png",
      year: "2025"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-20 selection:bg-cyan-500/30">
      
      {/* 1. Atelier Header */}
      <header className="mb-32 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent -z-10" />
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="flex gap-8 items-center">
            <div className="h-24 w-24 rounded-full border border-white/10 p-1 overflow-hidden">
  <img 
    src={riderProfile.avatar} 
    className="h-full w-full rounded-full object-cover" 
    style={{ objectPosition: 'center 20%' }} 
  />
</div>
            <div>
              <h1 className="text-5xl font-black uppercase tracking-tighter">{riderProfile.name}</h1>
              <span className="text-cyan-400 font-mono tracking-[0.2em] text-[10px] uppercase">{riderProfile.role}</span>
            </div>
          </div>
          <p className="max-w-md text-slate-400 font-light leading-relaxed border-l border-white/10 pl-6">
            {riderProfile.bio}
          </p>
        </div>
      </header>

      {/* 2. Machine Showcase */}
      <section className="space-y-40">
        {garageBikes.map((bike, index) => (
          <div key={bike.id} className="grid md:grid-cols-12 gap-16 items-center">
            <div className={`md:col-span-7 relative group ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
              <div className="aspect-[16/9] overflow-hidden rounded-[2rem] bg-slate-900/50 border border-white/5 relative">
                <img src={bike.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" />
              </div>
            </div>

            <div className={`md:col-span-5 space-y-6 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
              <div className="flex items-center gap-4">
                <span className="text-[9px] font-bold tracking-[0.3em] uppercase text-cyan-500">{bike.year}</span>
                <div className="h-[1px] flex-1 bg-white/10" />
              </div>
              <h2 className="text-6xl font-black uppercase leading-[0.9] tracking-tighter">{bike.modelName}</h2>
              <p className="text-slate-400 text-sm pl-4 border-l-2 border-cyan-500/50 py-2">
                {bike.modifications}
              </p>
              <button className="px-8 py-3 border border-white/10 hover:bg-white hover:text-black transition-all duration-300 text-[10px] uppercase font-bold tracking-[0.2em]">
                View Telemetry
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* 3. Join Section */}
      <section className="mt-40 p-16 bg-slate-900/10 border border-white/5 rounded-[3rem] text-center backdrop-blur-sm">
        <div className="max-w-xl mx-auto space-y-8">
          <h2 className="text-4xl font-black uppercase tracking-tight">Join the Inner Circle</h2>
          <p className="text-slate-400 text-sm tracking-wide">
            Exclusive access to performance telemetry and our curated route index.
          </p>
          
          <form className="grid md:grid-cols-2 gap-4 mt-8" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="EMAIL ADDRESS" className="col-span-2 bg-black border border-white/10 p-5 rounded-2xl text-[10px] font-bold tracking-widest text-center focus:border-cyan-500 outline-none transition-colors" />
            <input type="tel" placeholder="CONTACT NUMBER" className="col-span-2 bg-black border border-white/10 p-5 rounded-2xl text-[10px] font-bold tracking-widest text-center focus:border-cyan-500 outline-none transition-colors" />
            <button className="col-span-2 py-5 bg-white text-black font-black uppercase text-[10px] tracking-[0.2em] hover:bg-cyan-400 transition-all rounded-2xl">
              JOIN NOW
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}