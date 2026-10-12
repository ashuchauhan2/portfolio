"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Link from "next/link";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Background", href: "/#background" },
  { label: "Direction", href: "/#direction" },
  { label: "Contact", href: "/#contact" },
];

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [instantMotion, setInstantMotion] = useState(false);
  const menuToggle = useRef(null);
  const header = useRef(null);

  const changeMenu = (open, instant = false) => {
    setInstantMotion(instant);
    setMenuOpen(open);
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape" && menuOpen) {
        setInstantMotion(true);
        setMenuOpen(false);
        menuToggle.current?.focus();
      }
    };
    const onPointerDown = (event) => {
      if (menuOpen && !header.current?.contains(event.target)) {
        setInstantMotion(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [menuOpen]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header" ref={header}>
        <div className="header-inner page-width">
          <Link
            className="wordmark"
            href="/"
            onClick={(event) => changeMenu(false, event.detail === 0)}
            aria-label="Ashu Chauhan, home"
          >
            <span className="monogram" aria-hidden="true">
              ac<span>.</span>
            </span>
            <span>Ashu Chauhan</span>
          </Link>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((link) => (
              <Link key={link.label} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            className="header-resume"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume <ArrowUpRight size={15} />
          </a>
          <button
            ref={menuToggle}
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            onClick={(event) => changeMenu(!menuOpen, event.detail === 0)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <nav
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
          data-open={menuOpen}
          data-instant={instantMotion}
          aria-hidden={!menuOpen}
          inert={!menuOpen}
        >
          {navigation.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={(event) => changeMenu(false, event.detail === 0)}
            >
              {link.label}
              <ArrowUpRight size={16} />
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
