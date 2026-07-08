"use client";

import { useState } from "react";

export default function RidesPage() {
  const [rides, setRides] = useState([
    {
      id: "ride-1",
      title: "Tamhini Ghat Monsoon Cruise",
      meetTime: "Sunday, July 12 • 06:00 AM",
      description: "Early morning breakfast sprint down the winding curves of Tamhini Ghat. Smooth asphalt, dense green scenery.",
      routeTags: ["TWISTIES", "SCENIC"],
      creatorName: "Captain Rhea",
      creatorBike: "Triumph Speed Twin 1200",
      image: "/tamhini.png",
      attendees: 14,
      isJoined: false,
    },
    {
      id: "ride-2",
      title: "Canyon Apex & Track Telemetry",
      meetTime: "Saturday, July 18 • 05:30 AM",
      description: "Dedicated sunrise run for sportbike enthusiasts focused on apex corner optimization. Safety gear mandatory.",
      routeTags: ["APEX", "TELEMETRY"],
      creatorName: "Ananya R.",
      creatorBike: "BMW S1000 RR",
      image: "/track-meet.png",
      attendees: 8,
      isJoined: true,
    },
  ]);

  const handleRSVP = (id: string) => {
    setRides((prev) => prev.map((r) => r.id === id ? {...r, isJoined: !r.isJoined, attendees: r.isJoined ? r.attendees - 1 : r.attendees + 1} : r));
  };

  return (
    <div className="bg-slate-950 min-h-screen p-8 md:p-20 text-slate-200">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Premium Header */}
        <header className="border-b border-white/10 pb-8">
          <h1 className="text-5xl font-black uppercase tracking-tighter text-white">Collective Rides</h1>
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mt-2 italic">Curated sequences for the dedicated rider.</p>
        </header>

        {/* Ride Cards */}
        <div className="grid grid-cols-1 gap-12">
          {rides.map((ride) => (
            <div key={ride.id} className="group relative flex flex-col md:flex-row gap-8 border-b border-white/5 pb-12 hover:border-white/20 transition-all duration-500">
              {/* Image Section */}
              <div className="h-64 md:h-56 w-full md:w-96 overflow-hidden rounded-xl bg-slate-900 border border-white/5">
                <img src={ride.image} alt={ride.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>

              {/* Text Section */}
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] font-bold tracking-[0.2em] text-slate-400 uppercase">{ride.meetTime}</span>
                    <div className="flex gap-2">
                      {ride.routeTags.map(tag => (
                        <span key={tag} className="text-[8px] font-black tracking-widest text-slate-600 border border-slate-800 px-2 py-1">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <h2 className="text-3xl font-black text-white uppercase tracking-tight leading-none mb-4">{ride.title}</h2>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-lg">{ride.description}</p>
                </div>

                <div className="flex items-center justify-between mt-8">
                  <div className="text-[9px] uppercase tracking-widest text-slate-600">
                    Host: <span className="text-slate-300 font-bold">{ride.creatorName}</span> / <span className="font-mono">{ride.creatorBike}</span>
                  </div>
                  <button 
                    onClick={() => handleRSVP(ride.id)}
                    className={`px-6 py-3 text-[9px] font-black tracking-[0.2em] uppercase transition-all border ${
                      ride.isJoined 
                      ? "border-white/20 text-white bg-white/5" 
                      : "border-white/10 text-white hover:bg-white hover:text-slate-950"
                    }`}
                  >
                    {ride.isJoined ? `✓ CONFIRMED (${ride.attendees})` : `RSVP (${ride.attendees})`}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}