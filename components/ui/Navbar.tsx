"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/baroque", label: "Baroque Works" },
  { href: "/strawhat", label: "Straw Hats" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const nextValue = window.scrollY > 40;
      setScrolled((current) =>
        current === nextValue ? current : nextValue,
      );
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      document.body.style.removeProperty("overflow");
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.removeProperty("overflow");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        aria-label="Primary"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6"
      >
        <div
          className="mx-auto flex h-16 max-w-7xl items-center justify-between rounded-full px-5 md:px-6"
          style={{
            background: scrolled ? "rgba(10,10,10,0.8)" : "rgba(10,10,10,0.42)",
            backdropFilter: "blur(18px)",
            border: scrolled
              ? "1px solid rgba(201,168,76,0.14)"
              : "1px solid rgba(255,255,255,0.08)",
            boxShadow: scrolled
              ? "0 14px 34px rgba(0,0,0,0.24)"
              : "0 10px 28px rgba(0,0,0,0.14)",
          }}
        >
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <div
              className="flex h-9 w-9 items-center justify-center rounded-full"
              style={{
                background: "linear-gradient(135deg, #c9a84c, #8b1a1a)",
              }}
            >
              <span className="font-display text-xs font-black text-white">
                BW
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="font-display text-sm font-bold uppercase tracking-[0.28em] text-baroque-cream">
                Baroque Works
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] transition-colors duration-300"
                  style={{
                    color: isActive ? "#f5f0e8" : "rgba(245,240,232,0.6)",
                    background: isActive
                      ? "linear-gradient(135deg, rgba(201,168,76,0.22), rgba(139,26,26,0.18))"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(201,168,76,0.18)"
                      : "1px solid transparent",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <button
            type="button"
            className="p-2 text-baroque-cream md:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-3"
            style={{ background: "rgba(10,10,10,0.96)" }}
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={pathname === link.href ? "page" : undefined}
                  className="block rounded-full px-6 py-3 text-center font-display text-xl uppercase tracking-[0.22em]"
                  style={{
                    color:
                      pathname === link.href
                        ? "#f5f0e8"
                        : "rgba(245,240,232,0.7)",
                    background:
                      pathname === link.href
                        ? "linear-gradient(135deg, rgba(201,168,76,0.18), rgba(139,26,26,0.16))"
                        : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
