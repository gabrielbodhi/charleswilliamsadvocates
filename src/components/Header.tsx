"use client";

import { useState, useEffect } from "react";
import content from "@/content/siteContent.json";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <a href="#" className="logo">
          {content.nav.logo}
          <span>.</span>
        </a>
        <div className={`nav-links${menuOpen ? " open" : ""}`} id="navLinks">
          {content.nav.links.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a
            href={content.nav.cta.href}
            className="nav-cta-btn"
            onClick={closeMenu}
          >
            {content.nav.cta.label}
          </a>
        </div>
        <button
          className={`burger${menuOpen ? " active" : ""}`}
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
