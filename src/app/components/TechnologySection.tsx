import { motion } from "motion/react";
import { Cloud, Shield, Zap, BarChart3, RefreshCw, Lock } from "lucide-react";

const tools = [
  {
    name: "Tally Prime",
    abbr: "T",
    color: "#0056A2",
    bg: "#E8F0FB",
    desc: "India's #1 accounting software",
  },
  {
    name: "Zoho Books",
    abbr: "ZB",
    color: "#E8372A",
    bg: "#FDECEA",
    desc: "Cloud-based accounting platform",
  },
  {
    name: "Vyapar",
    abbr: "V",
    color: "#2E7D32",
    bg: "#E8F5E9",
    desc: "GST billing & accounting app",
  },
  {
    name: "QuickBooks",
    abbr: "QB",
    color: "#2CA01C",
    bg: "#E8F5E9",
    desc: "Financial management software",
  },
  {
    name: "Cloud ERP",
    abbr: "CE",
    color: "#0A4DA2",
    bg: "#E8F0FB",
    desc: "Integrated cloud ERP solutions",
  },
  {
    name: "Razorpay",
    abbr: "RP",
    color: "#2D81FF",
    bg: "#E8F0FB",
    desc: "Payment reconciliation tools",
  },
];

const techFeatures = [
  {
    icon: Cloud,
    title: "Real-Time Cloud Access",
    desc: "Access your financial data anytime, anywhere from any device securely.",
    color: "#0A4DA2",
  },
  {
    icon: Zap,
    title: "AI Reconciliation",
    desc: "Automated bank reconciliation powered by intelligent AI algorithms.",
    color: "#F5A000",
  },
  {
    icon: BarChart3,
    title: "Automated MIS Reports",
    desc: "Auto-generated monthly MIS reports delivered to your inbox on time.",
    color: "#0A4DA2",
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    desc: "256-bit encryption with multi-factor authentication for all data.",
    color: "#F5A000",
  },
  {
    icon: RefreshCw,
    title: "Live Sync",
    desc: "Real-time synchronization across all accounting tools and platforms.",
    color: "#0A4DA2",
  },
  {
    icon: Shield,
    title: "Compliance Automation",
    desc: "Automated reminders and filings to ensure zero compliance misses.",
    color: "#F5A000",
  },
];

const dashboardImg = "https://images.unsplash.com/photo-1748609339084-ea43ec1b8fbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGZpbmFuY2UlMjBkYXNoYm9hcmQlMjBhbmFseXRpY3N8ZW58MXx8fHwxNzc4MTM0NTU2fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function TechnologySection() {
  return (
    <section className="py-24" style={{ background: "#F4F4F4" }}>
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
            Technology Stack
          </p>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: "#1a1a2e",
              fontSize: "2.2rem",
            }}
          >
            Smart Technology &{" "}
            <span style={{ color: "#0A4DA2" }}>Secure Systems</span>
          </h2>
          <p
            className="text-gray-500 max-w-2xl mx-auto mt-4"
            style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
          >
            We leverage industry-leading accounting tools and AI-powered automation to deliver seamless, accurate financial management.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Dashboard visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden" style={{ boxShadow: "0 25px 60px rgba(10,77,162,0.2)" }}>
              <img
                src={dashboardImg}
                alt="Finance Dashboard"
                className="w-full h-80 object-cover"
              />
              <div
                className="absolute inset-0 rounded-3xl"
                style={{ background: "linear-gradient(135deg, rgba(10,77,162,0.6), rgba(10,77,162,0.1))" }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div
                    className="text-5xl font-bold mb-2"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    AI-Powered
                  </div>
                  <div className="text-lg text-blue-200" style={{ fontFamily: "Inter, sans-serif" }}>
                    Financial Intelligence Platform
                  </div>
                </div>
              </div>
            </div>

            {/* Floating feature badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-4 flex items-center gap-3"
              style={{ boxShadow: "0 10px 30px rgba(10,77,162,0.18)" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ background: "#0A4DA215" }}
              >
                <Shield size={20} style={{ color: "#0A4DA2" }} />
              </div>
              <div>
                <div className="font-bold text-sm" style={{ fontFamily: "Poppins, sans-serif", color: "#1a1a2e" }}>
                  ISO Compliant
                </div>
                <div className="text-xs text-gray-500" style={{ fontFamily: "Inter, sans-serif" }}>
                  Data Security Certified
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Tech features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {techFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ border: "1px solid rgba(10,77,162,0.07)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: `${feat.color}15` }}
                >
                  <feat.icon size={20} style={{ color: feat.color }} />
                </div>
                <h5
                  className="mb-1 font-semibold text-sm"
                  style={{ fontFamily: "Poppins, sans-serif", color: "#1a1a2e" }}
                >
                  {feat.title}
                </h5>
                <p className="text-xs text-gray-500 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  {feat.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Tools Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p
            className="text-center text-sm font-semibold text-gray-400 mb-8 uppercase tracking-widest"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Accounting Tools We Work With
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-5 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                style={{ border: "1px solid rgba(10,77,162,0.07)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 font-bold text-sm"
                  style={{ background: tool.bg, color: tool.color, fontFamily: "Poppins, sans-serif" }}
                >
                  {tool.abbr}
                </div>
                <div
                  className="font-semibold text-xs mb-1"
                  style={{ fontFamily: "Poppins, sans-serif", color: "#1a1a2e" }}
                >
                  {tool.name}
                </div>
                <div className="text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                  {tool.desc}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
