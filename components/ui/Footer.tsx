import Link from "next/link";

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="px-6 py-12 md:px-12"
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(201,168,76,0.08)",
      }}
    >
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <div className="max-w-xl">
          <div className="mb-3 flex items-center gap-3">
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full"
              style={{ background: "linear-gradient(135deg, #c9a84c, #8b1a1a)" }}
            >
              <span className="font-display text-xs font-black text-white">
                BW
              </span>
            </div>
            <span className="font-display text-sm font-bold uppercase tracking-[0.28em] text-baroque-cream">
              Baroque Works
            </span>
          </div>

          <p
            className="text-sm leading-relaxed"
            style={{ color: "rgba(245,240,232,0.44)" }}
          >
            A polished fan archive focused on the Alabasta conflict: the hidden
            structure of Baroque Works and the Straw Hat crew that unraveled it.
          </p>
        </div>

        <div className="flex flex-col gap-4 md:items-end">
          <div className="flex flex-wrap gap-5">
            {[
              { href: "/", label: "Home" },
              { href: "/baroque", label: "Baroque Works" },
              { href: "/strawhat", label: "Straw Hats" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.26em] transition-colors"
                style={{ color: "rgba(245,240,232,0.42)" }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-xs" style={{ color: "rgba(245,240,232,0.28)" }}>
            &copy; 2026 - Fan project by{" "}
            <Link
              href="https://github.com/mosesfawole"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors"
              style={{ color: "#c9a84c" }}
            >
              Moses Fawole
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
