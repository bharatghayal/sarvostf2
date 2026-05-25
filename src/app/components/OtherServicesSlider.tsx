import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";
import ptImg from "../../imports/image.png";
import udyamImg from "../../imports/image-1.png";
import iecImg from "../../imports/image-2.png";
import fssaiImg from "../../imports/image-3.png";

const slides = [
  {
    id: "pt",
    title: "PT Registration",
    subtitle: "Certificate",
    tagline: "What Services Offered Under This Package?",
    points: [
      "20 Minutes Call On The Complete Basics Of PT And Its Applicability",
      "Registration On Maha GST",
      "Receipt Of Application Form",
      "Receipt Of PT Registration Certificate",
    ],
    pricing: null,
    image: ptImg,
    accent: "#0A4DA2",
  },
  {
    id: "udyam",
    title: "Udyam",
    subtitle: "Registration",
    tagline: "Our Fees For Udyam Registration",
    points: [],
    pricing: [
      { label: "Individual / Proprietor", price: "₹500/-" },
      { label: "Partnership Firm / Pvt Ltd Company / Any Other Entity", price: "₹1,500/-" },
    ],
    image: udyamImg,
    accent: "#F5A000",
  },
  {
    id: "iec",
    title: "IEC",
    subtitle: "Registration",
    tagline: "Our Fees For IEC Registration",
    points: [],
    pricing: [
      { label: "Individual / Proprietor", price: "₹2,000/-", note: "Partnership Firm / Pvt Ltd / Any Other Entity – ₹3,000/-" },
      { label: "Partnership Firm / Pvt Ltd / Any Other Entity", price: "₹1,500/-" },
    ],
    image: iecImg,
    accent: "#0A4DA2",
  },
  {
    id: "fssai",
    title: "Registration Under FSSAI",
    subtitle: "(Food And Drug License)",
    tagline: "Our Fees For FSSAI Registration",
    points: [],
    pricing: [
      { label: "Central Licence (For Sales Above 20 Cr)", price: "₹9,500/-", note: "Including ₹7,500/- Govt. Charges" },
      { label: "State Licence (For Sales Above 20 Cr)", price: "₹3,000/-", note: "Including ₹2,000/- Govt. Charges" },
    ],
    image: fssaiImg,
    accent: "#F5A000",
  },
];

export function OtherServicesSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback((idx: number, dir: number) => {
    setDirection(dir);
    setCurrent(idx);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="py-20 overflow-hidden" style={{ background: "#f5f8ff" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#F5A000", fontFamily: "Inter, sans-serif" }}
          >
            Additional Services
          </p>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: "#1a1a2e",
              fontSize: "2.2rem",
            }}
          >
            Other <span style={{ color: "#0A4DA2" }}>Services</span> We Offer
          </h2>
          <p
            className="text-gray-500 max-w-xl mx-auto mt-4"
            style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
          >
            From government registrations to food licenses — we handle all your compliance needs end-to-end.
          </p>
        </div>

        {/* Slider */}
        <div className="relative">
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={slide.id}
              custom={direction}
              initial={{ opacity: 0, x: direction * 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -80 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="rounded-3xl overflow-hidden"
              style={{
                background: "white",
                boxShadow: "0 8px 40px rgba(10,77,162,0.12)",
                border: "1px solid rgba(10,77,162,0.08)",
              }}
            >
              <div className="grid md:grid-cols-2 min-h-[360px]">
                {/* Image side */}
                <div className="relative overflow-hidden min-h-[260px] md:min-h-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover object-center"
                    style={{ minHeight: 260 }}
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to right, transparent 60%, white)",
                    }}
                  />
                </div>

                {/* Content side */}
                <div className="flex flex-col justify-center px-8 py-10 md:px-12">
                  {/* Accent bar */}
                  <div
                    className="w-12 h-1 rounded-full mb-5"
                    style={{ background: `linear-gradient(90deg, ${slide.accent}, #F5A000)` }}
                  />

                  <h3
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 800,
                      color: "#1a1a2e",
                      fontSize: "clamp(1.5rem, 3vw, 2rem)",
                      lineHeight: 1.2,
                    }}
                  >
                    <span style={{ color: slide.accent }}>{slide.title}</span>
                    {slide.subtitle && (
                      <>
                        {" "}
                        <span className="text-gray-700">{slide.subtitle}</span>
                      </>
                    )}
                  </h3>

                  <p
                    className="mt-3 mb-5 text-sm font-semibold uppercase tracking-wide"
                    style={{ color: "#F5A000", fontFamily: "Inter, sans-serif" }}
                  >
                    {slide.tagline}
                  </p>

                  {/* Bullet points */}
                  {slide.points.length > 0 && (
                    <ul className="space-y-3">
                      {slide.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="flex-shrink-0 mt-0.5"
                            style={{ color: slide.accent }}
                          />
                          <span
                            className="text-sm text-gray-600"
                            style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.6 }}
                          >
                            {pt}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Pricing rows */}
                  {slide.pricing && slide.pricing.length > 0 && (
                    <div className="space-y-4">
                      {slide.pricing.map((p, i) => (
                        <div
                          key={i}
                          className="flex items-start justify-between gap-4 rounded-2xl p-4"
                          style={{
                            background: i % 2 === 0 ? `${slide.accent}08` : "#F5A00008",
                            border: `1px solid ${i % 2 === 0 ? slide.accent : "#F5A000"}20`,
                          }}
                        >
                          <div className="flex items-start gap-2.5">
                            <CheckCircle2
                              size={16}
                              className="flex-shrink-0 mt-0.5"
                              style={{ color: i % 2 === 0 ? slide.accent : "#F5A000" }}
                            />
                            <div>
                              <span
                                className="text-sm text-gray-700"
                                style={{ fontFamily: "Inter, sans-serif" }}
                              >
                                {p.label}
                              </span>
                              {p.note && (
                                <div
                                  className="text-xs text-gray-400 mt-0.5"
                                  style={{ fontFamily: "Inter, sans-serif" }}
                                >
                                  {p.note}
                                </div>
                              )}
                            </div>
                          </div>
                          <span
                            className="font-bold text-sm whitespace-nowrap"
                            style={{
                              fontFamily: "Poppins, sans-serif",
                              color: i % 2 === 0 ? slide.accent : "#F5A000",
                            }}
                          >
                            {p.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <a
                    href="tel:+919923333005"
                    className="mt-7 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white text-sm transition-all duration-200 hover:scale-105 self-start"
                    style={{
                      background: `linear-gradient(135deg, ${slide.accent}, ${slide.accent === "#0A4DA2" ? "#1565c7" : "#e08e00"})`,
                      boxShadow: `0 6px 20px ${slide.accent}40`,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    Get This Service
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Prev / Next arrows */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 hidden md:flex"
            style={{ background: "white", border: "1px solid rgba(10,77,162,0.12)" }}
            aria-label="Previous"
          >
            <ChevronLeft size={20} style={{ color: "#0A4DA2" }} />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 hidden md:flex"
            style={{ background: "white", border: "1px solid rgba(10,77,162,0.12)" }}
            aria-label="Next"
          >
            <ChevronRight size={20} style={{ color: "#0A4DA2" }} />
          </button>
        </div>

        {/* Dot indicators + mobile arrows */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-9 h-9 rounded-full flex items-center justify-center md:hidden"
            style={{ background: "white", border: "1px solid rgba(10,77,162,0.12)", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
            aria-label="Previous"
          >
            <ChevronLeft size={18} style={{ color: "#0A4DA2" }} />
          </button>

          <div className="flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? 28 : 8,
                  height: 8,
                  background: i === current ? "#0A4DA2" : "rgba(10,77,162,0.2)",
                }}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-9 h-9 rounded-full flex items-center justify-center md:hidden"
            style={{ background: "white", border: "1px solid rgba(10,77,162,0.12)", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
            aria-label="Next"
          >
            <ChevronRight size={18} style={{ color: "#0A4DA2" }} />
          </button>
        </div>

        {/* Slide counter */}
        <p
          className="text-center mt-3 text-xs text-gray-400"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {current + 1} / {slides.length}
        </p>
      </div>
    </section>
  );
}
