"use client";

import { useState } from "react";
import Map, { Source, Layer, Marker, MapLayerMouseEvent } from "react-map-gl/maplibre";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

interface RouteMapProps {
  onCoordinatesChange: (coords: [number, number][]) => void;
}

export default function RouteMap({ onCoordinatesChange }: RouteMapProps) {
  const [coordinates, setCoordinates] = useState<[number, number][]>([]);

  const handleMapClick = (e: MapLayerMouseEvent) => {
    const { lng, lat } = e.lngLat;
    const newCoords: [number, number][] = [...coordinates, [lng, lat]];
    setCoordinates(newCoords);
    onCoordinatesChange(newCoords);
  };

  const clearMap = () => {
    setCoordinates([]);
    onCoordinatesChange([]);
  };

  // GeoJSON formatting to draw lines over the map tiles
  const geojsonLine: any = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: coordinates,
    },
  };

  return (
    <div className="relative w-full h-125 rounded-xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl">
      <Map
        mapLib={maplibregl}
        initialViewState={{
          longitude: 73.8567, // Default center view: Pune/Mumbai hub coordinates
          latitude: 18.5204,
          zoom: 11,
        }}
        mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json" // Premium dark mode layer map tiles
        onClick={handleMapClick}
        cursor="pointer"
      >
        {/* Draw the connected route lines */}
        {coordinates.length > 1 && (
          <Source id="route-line" type="geojson" data={geojsonLine}>
            <Layer
              id="line-layer"
              type="line"
              paint={{
                "line-color": "#22d3ee", // Cyan accent line color
                "line-width": 4,
                "line-opacity": 0.8,
              }}
            />
          </Source>
        )}

        {/* Draw markers on start, endpoints, or intersections */}
        {coordinates.map((coord, index) => (
          <Marker key={index} longitude={coord[0]} latitude={coord[1]} anchor="bottom">
            <div className={`h-4 w-4 rounded-full border-2 border-slate-950 shadow-md ${
              index === 0 ? "bg-emerald-400 animate-pulse" : index === coordinates.length - 1 ? "bg-rose-500" : "bg-cyan-400"
            }`} />
          </Marker>
        ))}
      </Map>

      {/* Map Actions HUD overlay panel */}
      <div className="absolute bottom-4 left-4 z-10 flex gap-2">
        <button
          type="button"
          onClick={clearMap}
          className="rounded bg-slate-950/80 backdrop-blur px-3 py-1.5 text-xs font-bold tracking-wider text-rose-400 border border-rose-500/20 hover:bg-rose-500/10 transition-all"
        >
          RESET MARKERS
        </button>
        <div className="rounded bg-slate-950/80 backdrop-blur px-3 py-1.5 text-xs font-medium text-slate-400 border border-white/5">
          {coordinates.length} points plotted
        </div>
      </div>
    </div>
  );
}