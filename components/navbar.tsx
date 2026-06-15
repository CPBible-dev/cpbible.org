"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/features", label: "Features" },
  { href: "/translations", label: "Translations" },
  { href: "/impact", label: "Impact" },
  { href: "/contact", label: "Contact" },
];

  return (
    <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link href="/" className="font-bold text-2xl text-[#4E5D30]">
          CPBible
        </Link>

        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium hover:text-[#4E5D30]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

<div className="hidden md:flex items-center gap-3">

  <Link
    href="/download"
    className="rounded-full border border-[#4E5D30] px-5 py-2.5 font-semibold text-[#4E5D30] transition hover:bg-[#4E5D30] hover:text-white"
  >
    Download App
  </Link>

  <Link
    href="/donate"
    className="rounded-full bg-[#4E5D30] px-5 py-2.5 font-semibold text-white transition hover:opacity-90"
  >
    Support CPBible
  </Link>

</div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="flex flex-col gap-4 p-6">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}