"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, BookOpen, Users, Home, Library, Trophy } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/books", label: "Books", icon: BookOpen },
    { href: "/characters", label: "Characters", icon: Users },
    { href: "/reading-order", label: "Reading Order", icon: Library },
    { href: "/polls", label: "Polls", icon: Trophy },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <img src="/logo.jpg" alt="Emunah Chronicles" className="w-8 h-8 rounded" />
            <span className="font-cinzel text-xl font-bold gold-gradient">
              Emunah Chronicles
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-[#e8e4dc] hover:text-gold transition-colors font-crimson text-lg"
              >
                <link.icon className="w-4 h-4" />
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-[#e8e4dc] hover:text-gold"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0a0f]/98 border-b border-gold/20">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-3 text-[#e8e4dc] hover:text-gold transition-colors font-crimson text-lg py-2"
                onClick={() => setIsOpen(false)}
              >
                <link.icon className="w-5 h-5" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}