import { motion } from "motion/react";
import { ArrowRight, Phone, MapPin } from "lucide-react";

export function CTASection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #061d3f 0%, #0A4DA2 40%, #1565c7 70%, #0d3a80 100%)",
      }}
    >
      {/* Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, #F5A000, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #F5A000, transparent)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5"
          style={{ background: "radial-gradient(circle, #ffffff, transparent)" }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-7"
            style={{
              background: "rgba(245,160,0,0.15)",
              border: "1px solid rgba(245,160,0,0.4)",
              color: "#F5A000",
              fontFamily: "Inter, sans-serif",
            }}
          >
            <span className="w-2 h-2 rounded-full bg-[#F5A000] animate-pulse" />
            Free Consultation Available Now
          </div>

          <h2
            className="text-white mb-5"
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
              lineHeight: 1.2,
            }}
          >
            Take Control Of Your{" "}
            <span style={{ color: "#F5A000" }}>Business Finances</span> Today
          </h2>

          <p
            className="text-blue-200 mb-10 max-w-2xl mx-auto"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1.1rem",
              lineHeight: 1.75,
            }}
          >
            Stop worrying about compliance and focus on growing your business confidently. Our expert CA team is ready to take care of everything.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+919923333005"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white transition-all duration-200 hover:scale-105 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #F5A000, #e08e00)",
                boxShadow: "0 8px 30px rgba(245,160,0,0.5)",
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
              }}
            >
              Book Free Consultation
              <ArrowRight size={18} />
            </a>
            <a
              href="tel:+919923333005"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-200 hover:bg-white/20"
              style={{
                border: "2px solid rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <Phone size={18} />
              Call Us Now
            </a>
          </div>

          <p
            className="text-blue-300 text-sm mt-8"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            No commitment required · 100% confidential · Response within 24 hours
          </p>

          {/* Address */}
          <div
            className="inline-flex items-start gap-2.5 mt-6 px-5 py-3 rounded-2xl"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            <MapPin size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#F5A000" }} />
            <p className="text-blue-200 text-sm text-left" style={{ fontFamily: "Inter, sans-serif" }}>
              Office no D-506, 5th Floor, Freedom Tower, Akashwani Chowk,<br />
              Chhatrapati Sambhajinagar (Aurangabad) – 431005
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
