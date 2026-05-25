import { motion } from "motion/react";
import {
  Rocket,
  Store,
  ShoppingBag,
  Briefcase,
  ShoppingCart,
  Factory,
  Users,
  Building2,
} from "lucide-react";

const industries = [
  {
    icon: Rocket,
    title: "Startups",
    desc: "From incorporation to first audit — we handle everything.",
    color: "#0A4DA2",
  },
  {
    icon: Store,
    title: "SMEs",
    desc: "Scalable finance solutions tailored for growing SMEs.",
    color: "#F5A000",
  },
  {
    icon: ShoppingBag,
    title: "Traders",
    desc: "GST, inventory accounting, and trading compliance.",
    color: "#0A4DA2",
  },
  {
    icon: Briefcase,
    title: "Professionals",
    desc: "Tax planning for CAs, doctors, consultants & freelancers.",
    color: "#F5A000",
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce",
    desc: "Platform reconciliation, GST compliance & marketplace support.",
    color: "#0A4DA2",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Cost accounting, compliance & financial controls for manufacturers.",
    color: "#F5A000",
  },
  {
    icon: Users,
    title: "Agencies",
    desc: "Service business accounting, billing & MIS reporting.",
    color: "#0A4DA2",
  },
  {
    icon: Building2,
    title: "Service Providers",
    desc: "End-to-end finance management for service businesses.",
    color: "#F5A000",
  },
];

export function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#F5A000", fontFamily: "Inter, sans-serif" }}
          >
            Industries We Serve
          </p>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: "#1a1a2e",
              fontSize: "2.2rem",
            }}
          >
            Who We <span style={{ color: "#0A4DA2" }}>Work With</span>
          </h2>
          <p
            className="text-gray-500 max-w-2xl mx-auto mt-4"
            style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
          >
            From early-stage startups to established enterprises, we serve businesses across every industry with customized financial solutions.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl p-6 text-center overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default"
              style={{
                background: "#F8FAFF",
                border: "1px solid rgba(10,77,162,0.07)",
              }}
            >
              {/* Hover background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${ind.color}12, ${ind.color}06)`,
                }}
              />

              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${ind.color}20, ${ind.color}10)`,
                  boxShadow: `0 4px 15px ${ind.color}20`,
                }}
              >
                <ind.icon size={26} style={{ color: ind.color }} />
              </div>

              <h4
                className="relative mb-2 font-semibold"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "0.95rem",
                  color: "#1a1a2e",
                }}
              >
                {ind.title}
              </h4>
              <p
                className="relative text-gray-500 text-xs leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {ind.desc}
              </p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-2xl"
                style={{ background: `linear-gradient(90deg, transparent, ${ind.color}, transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
