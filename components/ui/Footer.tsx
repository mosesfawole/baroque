import Link from "next/link";

export default function Footer() {
  return (
    <footer
      className="py-12 px-6 md:px-12"
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(201,168,76,0.1)",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div
            className="w-6 h-6 rounded-sm flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, #c9a84c, #8b1a1a)" }}
          >
            <span className="font-display font-black text-[10px] text-white">
              BW
            </span>
          </div>
          <span className="font-display text-xs tracking-widest uppercase text-baroque-cream opacity-60">
            Baroque Works
          </span>
        </div>

        {/* Links */}
        <div className="flex items-center gap-6">
          {[
            { href: "/baroque", label: "Baroque Works" },
            { href: "/strawhat", label: "Straw Hats" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase transition-colors"
              style={{ color: "rgba(245,240,232,0.4)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Credit */}
        <p className="text-xs" style={{ color: "rgba(245,240,232,0.3)" }}>
          © 2026 — Fan project by{" "}
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
    </footer>
  );
}
