"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "@/components/ui/Container";
import Logo from "@/components/layout/Logo";
import { assets } from "@/data/assets";
import { authNav, mainNav } from "@/data/navigation";
import { cn } from "@/lib/cn";

// Client Component: it needs state (mobile menu open/closed) and the current pathname.
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <Container>
        <div className="relative flex h-[120px] items-center justify-between">
          <Logo />

          {/* Desktop navigation (lg and up) */}
          <nav aria-label="Main" className="absolute left-1/2 hidden -translate-x-1/2 gap-6 lg:flex">
            {mainNav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={cn(
                  "text-base text-shuttle-50 hover:underline",
                  isActive(item.href) ? "leading-[1.2] font-medium" : "leading-[1.6]",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-6 lg:flex">
            {authNav.map((item) => (
              <Link key={item.label} href={item.href} className="text-base leading-6 text-shuttle-50 hover:underline">
                {item.label}
              </Link>
            ))}
            <Link href="#" aria-label="Shopping bag">
              <Image src={assets.icons.bag} alt="" width={24} height={24} />
            </Link>
          </div>

          {/* Mobile menu button (below lg) */}
          <button
            type="button"
            className="flex size-10 items-center justify-center rounded-float text-shuttle-50 focus-visible:outline-2 focus-visible:outline-electric-400 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>

        {open && (
          <nav id="mobile-menu" aria-label="Mobile" className="rounded-float bg-persian-900 p-6 lg:hidden">
            <ul className="flex flex-col gap-4 text-base text-shuttle-50">
              {[...mainNav, ...authNav].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} onClick={() => setOpen(false)} className="block py-1">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}
