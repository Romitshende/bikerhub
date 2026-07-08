"use client";

import { useState } from "react";
import RouteMap from "@/components/RouteMap";

export default function NewRoutePage() {
  const [title, setTitle] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [coordinates, setCoordinates] = useState<[number, number][]>([]);

  const availableTags = ["Twisties", "Scenic Cruiser", "Off-Road", "Smooth Asphalt", "Gravel Alert"];

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting Route Data:", { title, tags: selectedTags, coordinates });
    alert("Route saved successfully in state! Next step: connect schema submission.");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start py-4">
      {/* Configuration Metadata Form Sidebar */}
      <div className="bg-slate-900/40 border border-white/5 p-6 rounded-2xl backdrop-blur-xl lg:col-span-1">
        <h2 className="text-xl font-black tracking-wider text-white uppercase mb-6">Plan Route</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">Route Name</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., Mountain Canyon Twisties"
              className="w-full rounded-lg bg-slate-950 border border-white/10 px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
            />
          </div>

          <div>
            <label className="block text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">Road Attributes</label>
            <div className="flex flex-wrap gap-2">
              {availableTags.map((tag) => {
                const isSelected = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all border ${
                      isSelected
                        ? "bg-cyan-500/10 text-cyan-400 border-cyan-400"
                        : "bg-slate-950 text-slate-400 border-white/5 hover:border-slate-700"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="submit"
            disabled={coordinates.length === 0}
            className="w-full mt-4 rounded-lg bg-cyan-500 px-4 py-3 text-sm font-bold tracking-wider text-slate-950 hover:bg-cyan-400 transition-colors disabled:opacity-40 disabled:cursor-not-allowed uppercase"
          >
            Save Curated Route
          </button>
        </form>
      </div>

      {/* Interactive Map Layout Container */}
      <div className="lg:col-span-2">
        <div className="mb-4">
          <p className="text-sm text-slate-400">
            Click step-by-step directly onto the dark canvas map to draw out your planned riding path line.
          </p>
        </div>
        <RouteMap onCoordinatesChange={(coords) => setCoordinates(coords)} />
      </div>
    </div>
  );
}