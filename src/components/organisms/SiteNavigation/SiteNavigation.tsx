"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import "./SiteNavigation.css";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

const DRAWER_ID = "navigation-drawer";
const TOGGLE_ID = "navigation-toggle";
const DRAWER_LABEL_ID = "navigation-drawer-label";

export const SiteNavigation = ({ children }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const firstDrawerLinkRef = useRef<HTMLAnchorElement>(null);
  const lastDrawerLinkRef = useRef<HTMLAnchorElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
      }
    };

    const handleFocusTrap = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === "Tab") {
        const focusableElements = drawerRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("keydown", handleFocusTrap);
      document.body.style.overflow = "hidden";
      
      // Focus first link when drawer opens
      setTimeout(() => {
        firstDrawerLinkRef.current?.focus();
      }, 100);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleFocusTrap);
      document.body.style.overflow = "";
    };
  }, [isOpen, isMounted]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOverlayClick = () => {
    setIsOpen(false);
    toggleButtonRef.current?.focus();
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="navigation-wrapper">
        <div className="navigation-content">
          <nav 
            className="navigation-nav" 
            aria-label="Main navigation"
            role="navigation"
          >
            <div className="navigation-mobile-toggle">
              <button
                id={TOGGLE_ID}
                ref={toggleButtonRef}
                type="button"
                className="navigation-mobile-toggle-button"
                aria-expanded={isOpen}
                aria-controls={DRAWER_ID}
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                onClick={handleToggle}
              >
                <span className="navigation-mobile-toggle-icon-wrapper" aria-hidden="true">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="navigation-mobile-toggle-icon"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                  </svg>
                </span>
                <span className="sr-only">
                  {isOpen ? "Close navigation menu" : "Open navigation menu"}
                </span>
              </button>
            </div>
            <div className="navigation-brand">
              <Link href="/" aria-label="Ian Holden - Home">
                Ian Holden
              </Link>
            </div>
            <div className="navigation-desktop">
              <ul className="navigation-desktop-list" role="list">
                {navigation.map((item, index) => (
                  <li key={item.name} role="listitem">
                    <Link 
                      href={item.href} 
                      className="navigation-desktop-link"
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          {children}
        </div>
        <button
          type="button"
          className="navigation-overlay"
          aria-label="Close navigation menu"
          onClick={handleOverlayClick}
          aria-hidden={!isOpen}
          tabIndex={isOpen ? 0 : -1}
        />
        <div
          id={DRAWER_ID}
          ref={drawerRef}
          className="navigation-drawer"
          aria-labelledby={DRAWER_LABEL_ID}
          aria-hidden={!isOpen}
          role="dialog"
          aria-modal="true"
        >
          <div id={DRAWER_LABEL_ID} className="sr-only">
            Main navigation menu
          </div>
          <ul className="navigation-drawer-list" role="list">
            {navigation.map((item, index) => (
              <li key={item.name} className="navigation-drawer-item" role="listitem">
                <Link
                  href={item.href}
                  className="navigation-drawer-link"
                  ref={index === 0 ? firstDrawerLinkRef : index === navigation.length - 1 ? lastDrawerLinkRef : null}
                  onClick={handleLinkClick}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
