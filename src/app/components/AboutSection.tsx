import { motion } from "motion/react";
import { CheckCircle, BarChart3, ShieldCheck, Rocket, Brain } from "lucide-react";
import teamImg from "../../imports/15ffca75e9.jpg";

const features = [
  {
    icon: BarChart3,
    title: "Financial Clarity",
    desc: "Clear, actionable financial insights for smarter decisions.",
    color: "#0A4DA2",
  },
  {
    icon: ShieldCheck,
    title: "Compliance Management",
    desc: "100% statutory compliance — GST, TDS, ROC, and more.",
    color: "#F5A000",
  },
  {
    icon: Rocket,
    title: "Business Growth",
    desc: "Strategic advisory to scale your business confidently.",
    color: "#0A4DA2",
  },
  {
    icon: Brain,
    title: "AI-Driven Reporting",
    desc: "Real-time MIS reports and automated financial analytics.",
    color: "#F5A000",
  },
];

const missions = [
  "Stay compliant with all regulations",
  "Improve cash flow and profitability",
  "Make better financial decisions",
  "Reduce operational stress",
  "Scale confidently with expert support",
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image with decorations */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-3xl hover-img-zoom" style={{ boxShadow: "0 30px 60px rgba(10,77,162,0.18)" }}>
              <img
                src={teamImg}
                alt="SARVOST Team"
                className="w-full h-[500px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 60%, rgba(10,77,162,0.7) 100%)" }}
              />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white text-sm font-medium" style={{ fontFamily: "Inter, sans-serif" }}>
                  Expert CA-led team delivering financial excellence
                </p>
              </div>
            </div>

            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-5"
              style={{ boxShadow: "0 12px 35px rgba(10,77,162,0.18)", border: "1px solid rgba(10,77,162,0.08)" }}
            >
              <div className="text-center">
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ fontFamily: "Poppins, sans-serif", color: "#0A4DA2" }}
                >
                  10+
                </div>
                <div className="text-xs text-gray-500" style={{ fontFamily: "Inter, sans-serif" }}>
                  Years of<br />Excellence
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 rounded-2xl p-4 flex items-center gap-3"
              style={{
                background: "linear-gradient(135deg, #0A4DA2, #1565c7)",
                boxShadow: "0 12px 35px rgba(10,77,162,0.35)",
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                <CheckCircle size={20} color="#F5A000" />
              </div>
              <div>
                <div className="text-white font-bold text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                  CA Certified
                </div>
                <div className="text-blue-200 text-xs" style={{ fontFamily: "Inter, sans-serif" }}>
                  Expert Led Team
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#F5A000", fontFamily: "Inter, sans-serif" }}
            >
              About SARVOST
            </p>
            <h2
              className="mb-6"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                color: "#1a1a2e",
                fontSize: "2.2rem",
                lineHeight: 1.25,
              }}
            >
              We Act As Your Outsourced{" "}
              <span style={{ color: "#0A4DA2" }}>Finance &amp; Growth Partner</span>
            </h2>
            <p
              className="text-gray-600 mb-7"
              style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
            >
              At SARVOST, we simplify finance, taxation, payroll, and compliance management for modern businesses. We combine expert advisory with technology-driven systems to deliver reliable and efficient financial solutions.
            </p>

            {/* Mission list */}
            <div className="mb-9 space-y-3">
              {missions.map((m) => (
                <div key={m} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: "#0A4DA2" }}
                  >
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-gray-600 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{m}</span>
                </div>
              ))}
            </div>

            {/* Feature cards grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feat, i) => (
                <motion.div
                  key={feat.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  style={{
                    background: "#F8FAFF",
                    border: `1px solid ${feat.color}18`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${feat.color}15` }}
                  >
                    <feat.icon size={20} style={{ color: feat.color }} />
                  </div>
                  <h4
                    className="font-semibold mb-1 text-sm"
                    style={{ fontFamily: "Poppins, sans-serif", color: "#1a1a2e" }}
                  >
                    {feat.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                    {feat.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
