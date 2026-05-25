import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown, FileText, Receipt } from "lucide-react";
import logo from "../../imports/Group_8.png";

type Page = "home" | "gst" | "itr";

const serviceItems = [
  {
    id: "itr" as Page,
    label: "Income Tax Return",
    desc: "ITR filing for individuals & businesses",
    icon: FileText,
  },
  {
    id: "gst" as Page,
    label: "GST Services",
    desc: "Registration & return filing",
    icon: Receipt,
  },
];

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isServicePage = currentPage !== "home";
  const effectiveScrolled = scrolled || isServicePage;

  const textColor = effectiveScrolled ? "#333333" : "#ffffff";

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (currentPage !== "home") {
      onNavigate("home");
      setTimeout(() => {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: effectiveScrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.05)",
        backdropFilter: effectiveScrolled ? "blur(20px)" : "blur(10px)",
        boxShadow: effectiveScrolled ? "0 2px 30px rgba(10,77,162,0.12)" : "none",
        borderBottom: effectiveScrolled ? "1px solid rgba(10,77,162,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            className="flex items-center"
            onClick={() => { onNavigate("home"); setIsOpen(false); }}
          >
            <img src={logo} alt="SARVOST" className="h-10 w-auto" />
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {/* Home */}
            <button
              onClick={() => handleNavClick("#home")}
              className="text-sm font-medium transition-colors duration-200 hover:text-[#F5A000]"
              style={{ color: textColor, fontFamily: "Inter, sans-serif" }}
            >
              Home
            </button>

            {/* About */}
            <a
              href="#about"
              className="text-sm font-medium transition-colors duration-200 hover:text-[#F5A000]"
              style={{ color: textColor, fontFamily: "Inter, sans-serif" }}
              onClick={() => handleNavClick("#about")}
            >
              About
            </a>

            {/* Services Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 text-sm font-medium transition-colors duration-200 hover:text-[#F5A000]"
                style={{
                  color: isServicePage ? "#F5A000" : textColor,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Services
                <ChevronDown
                  size={14}
                  className="transition-transform duration-200"
                  style={{ transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {servicesOpen && (
                <div
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 rounded-2xl overflow-hidden"
                  style={{
                    background: "white",
                    boxShadow: "0 10px 40px rgba(10,77,162,0.15)",
                    border: "1px solid rgba(10,77,162,0.08)",
                  }}
                >
                  <div className="p-2">
                    {serviceItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <button
                          key={item.id}
                          onClick={() => { onNavigate(item.id); setServicesOpen(false); window.scrollTo(0, 0); }}
                          className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-left transition-all hover:bg-blue-50 group"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          <div
                            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors group-hover:bg-[#0A4DA2]"
                            style={{ background: "rgba(10,77,162,0.08)" }}
                          >
                            <Icon
                              size={16}
                              className="transition-colors group-hover:text-white"
                              style={{ color: "#0A4DA2" }}
                            />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                            <div className="text-xs text-gray-500 mt-0.5">{item.desc}</div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Packages */}
            <a
              href="#packages"
              className="text-sm font-medium transition-colors duration-200 hover:text-[#F5A000]"
              style={{ color: textColor, fontFamily: "Inter, sans-serif" }}
              onClick={() => handleNavClick("#packages")}
            >
              Packages
            </a>
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919923333005"
              className="flex items-center gap-2 text-sm font-medium"
              style={{ color: effectiveScrolled ? "#0A4DA2" : "#ffffff", fontFamily: "Inter, sans-serif" }}
            >
              <Phone size={15} />
              <span>+91 99233 33005</span>
            </a>
            <a
              href="tel:+919923333005"
              className="px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #F5A000, #e08e00)",
                boxShadow: "0 4px 15px rgba(245,160,0,0.35)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              Free Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            style={{ color: effectiveScrolled ? "#0A4DA2" : "#ffffff" }}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="lg:hidden py-4 px-4 rounded-2xl mb-3"
            style={{ background: "rgba(255,255,255,0.98)", backdropFilter: "blur(20px)" }}
          >
            <button
              className="block py-3 text-sm font-medium border-b border-gray-100 w-full text-left"
              style={{ color: "#333333", fontFamily: "Inter, sans-serif" }}
              onClick={() => { onNavigate("home"); setIsOpen(false); }}
            >
              Home
            </button>

            <a
              href="#about"
              className="block py-3 text-sm font-medium border-b border-gray-100"
              style={{ color: "#333333", fontFamily: "Inter, sans-serif" }}
              onClick={() => { handleNavClick("#about"); setIsOpen(false); }}
            >
              About
            </a>

            {/* Mobile Services */}
            <div className="border-b border-gray-100">
              <button
                className="flex items-center justify-between w-full py-3 text-sm font-medium"
                style={{ color: "#333333", fontFamily: "Inter, sans-serif" }}
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                <ChevronDown
                  size={14}
                  className="transition-transform"
                  style={{ transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)", color: "#0A4DA2" }}
                />
              </button>
              {mobileServicesOpen && (
                <div className="pb-2 pl-3 space-y-1">
                  {serviceItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => { onNavigate(item.id); setIsOpen(false); window.scrollTo(0, 0); }}
                        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left"
                        style={{ background: "rgba(10,77,162,0.04)" }}
                      >
                        <Icon size={15} style={{ color: "#0A4DA2" }} />
                        <span className="text-sm font-medium text-gray-800" style={{ fontFamily: "Inter, sans-serif" }}>
                          {item.label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <a
              href="#packages"
              className="block py-3 text-sm font-medium border-b border-gray-100"
              style={{ color: "#333333", fontFamily: "Inter, sans-serif" }}
              onClick={() => { handleNavClick("#packages"); setIsOpen(false); }}
            >
              Packages
            </a>
            <a
              href="tel:+919923333005"
              className="mt-3 block text-center px-5 py-2.5 rounded-full text-sm font-semibold text-white"
              style={{ background: "linear-gradient(135deg, #F5A000, #e08e00)", fontFamily: "Inter, sans-serif" }}
              onClick={() => setIsOpen(false)}
            >
              Free Consultation
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
