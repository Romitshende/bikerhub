"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "EXPLORE", path: "/" },
    { name: "PLAN ROUTE", path: "/routes/new" },
    { name: "UPCOMING RIDES", path: "/rides" },
    { name: "MY GARAGE", path: "/garage" },
  ];

  return (
    <nav className="w-full border-b border-white/10 bg-slate-950 px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="text-xl font-black tracking-wider text-white">
          BIKER<span className="text-cyan-400">HUB</span>
        </Link>

        {/* Links */}
        <div className="flex space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.name}
                href={item.path}
                className={`text-xs font-bold tracking-widest transition-colors duration-200 hover:text-cyan-400 ${
                  isActive ? "text-cyan-400" : "text-slate-400"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Decorative Profile Circle */}
        <div className="h-8 w-8 rounded-full bg-linear-to-tr from-cyan-400 to-indigo-500" />

      </div>
    </nav>
  );
}