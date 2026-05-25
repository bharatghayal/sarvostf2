import { Mail, Phone, MapPin, ArrowRight, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import logo from "../../imports/Group_8.png";

const services = [
  "Tax & Compliance Management",
  "Financial Management & Reporting",
  "Payroll & HR Management",
  "Virtual CFO Services",
  "Business Advisory & Structuring",
  "Funding & Loan Advisory",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "Industries", href: "#industries" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: Linkedin, href: "https://in.linkedin.com/company/sarvost", color: "#0077B5" },
  { icon: Twitter, href: "#", color: "#1DA1F2" },
  { icon: Facebook, href: "https://www.facebook.com/sarvost", color: "#4267B2" },
  { icon: Instagram, href: "https://www.instagram.com/sarvost1?igsh=MWRkOXJzb2ExbDZmdw==", color: "#E1306C" },
];

export function Footer() {
  return (
    <footer
      id="contact"
      style={{ background: "linear-gradient(180deg, #061d3f 0%, #030f20 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <img src={logo} alt="SARVOST" className="h-10 w-auto mb-5 brightness-200" />
            <p
              className="text-blue-300 text-sm leading-relaxed mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Your trusted finance & compliance partner for smarter business growth. Expert CA-led, technology-driven financial solutions.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = s.color;
                    (e.currentTarget as HTMLElement).style.borderColor = s.color;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                  }}
                >
                  <s.icon size={16} color="white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-semibold mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-blue-300 text-sm transition-all duration-200 hover:text-[#F5A000] hover:gap-3"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <ArrowRight size={13} />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-white font-semibold mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="flex items-start gap-2 text-blue-300 text-sm transition-all duration-200 hover:text-[#F5A000]"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <ArrowRight size={13} className="mt-0.5 flex-shrink-0" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-semibold mb-6"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              Contact Us
            </h4>
            <div className="space-y-5">
              <a
                href="tel:+919923333005"
                className="flex items-start gap-3 group"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(245,160,0,0.15)" }}
                >
                  <Phone size={16} style={{ color: "#F5A000" }} />
                </div>
                <div>
                  <div className="text-xs text-blue-400 mb-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
                    Call Us
                  </div>
                  <div
                    className="text-sm text-blue-200 group-hover:text-[#F5A000] transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    +91 99233 33005
                  </div>
                </div>
              </a>

              <a
                href="mailto:info@sarvost.com"
                className="flex items-start gap-3 group"
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(245,160,0,0.15)" }}
                >
                  <Mail size={16} style={{ color: "#F5A000" }} />
                </div>
                <div>
                  <div className="text-xs text-blue-400 mb-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
                    Email Us
                  </div>
                  <div
                    className="text-sm text-blue-200 group-hover:text-[#F5A000] transition-colors"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    info@sarvost.com
                  </div>
                </div>
              </a>

              <div className="flex items-start gap-3">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(245,160,0,0.15)" }}
                >
                  <MapPin size={16} style={{ color: "#F5A000" }} />
                </div>
                <div>
                  <div className="text-xs text-blue-400 mb-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
                    Office Address
                  </div>
                  <div
                    className="text-sm text-blue-200 leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Office no D-506, 5th Floor, Freedom Tower, Akashwani Chowk, Chhatrapati Sambhajinagar (Aurangabad) - 431005
                  </div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/919923333005"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, #25D366, #128C7E)",
                boxShadow: "0 4px 15px rgba(37,211,102,0.3)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className="border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        />

        {/* Bottom Bar */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-blue-400 text-sm"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            © 2025 SARVOST Business Process Solution. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Disclaimer"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-blue-400 text-xs hover:text-[#F5A000] transition-colors"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
