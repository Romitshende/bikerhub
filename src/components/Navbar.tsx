"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

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

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <NavLink key={item.name} item={item} isActive={pathname === item.path} />
          ))}
        </div>

        {/* Decorative Profile Circle (Visible on Desktop) */}
        <div className="hidden md:block h-8 w-8 rounded-full bg-linear-to-tr from-cyan-400 to-indigo-500" />
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col space-y-4 py-4 border-t border-white/10">
          {navItems.map((item) => (
            <NavLink key={item.name} item={item} isActive={pathname === item.path} />
          ))}
        </div>
      )}
    </nav>
  );
}

// Helper component to keep code clean
function NavLink({ item, isActive }: { item: { name: string, path: string }, isActive: boolean }) {
  return (
    <Link
      href={item.path}
      className={`text-xs font-bold tracking-widest transition-colors duration-200 hover:text-cyan-400 ${
        isActive ? "text-cyan-400" : "text-slate-400"
      }`}
    >
      {item.name}
    </Link>
  );
}