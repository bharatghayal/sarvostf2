import { motion } from "motion/react";
import {
  Award,
  Smartphone,
  Brain,
  UserCheck,
  Activity,
  Clock,
  Lock,
  Building,
} from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Chartered Accountant Led",
    desc: "Every engagement is supervised by qualified CAs ensuring accuracy and professionalism.",
    color: "#0A4DA2",
  },
  {
    icon: Smartphone,
    title: "100% Digital Process",
    desc: "Fully paperless, cloud-based operations for seamless, efficient collaboration.",
    color: "#F5A000",
  },
  {
    icon: Brain,
    title: "AI-Driven Reports",
    desc: "Intelligent automation and AI-generated reports for real-time business insights.",
    color: "#0A4DA2",
  },
  {
    icon: UserCheck,
    title: "Dedicated Relationship Manager",
    desc: "Your personal point of contact for all queries, updates, and support.",
    color: "#F5A000",
  },
  {
    icon: Activity,
    title: "Real-Time Insights",
    desc: "Live dashboards and instant reports to track your financial health anytime.",
    color: "#0A4DA2",
  },
  {
    icon: Clock,
    title: "Timely Compliance Guarantee",
    desc: "Zero-miss policy on due dates — we ensure 100% on-time filings always.",
    color: "#F5A000",
  },
  {
    icon: Lock,
    title: "Data Security",
    desc: "Bank-grade encryption and strict confidentiality protocols protect your data.",
    color: "#0A4DA2",
  },
  {
    icon: Building,
    title: "Industry Expertise",
    desc: "Deep domain knowledge across manufacturing, retail, ecommerce, startups & more.",
    color: "#F5A000",
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-24 bg-white">
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
            Our Advantages
          </p>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: "#1a1a2e",
              fontSize: "2.2rem",
            }}
          >
            Why Businesses Choose{" "}
            <span style={{ color: "#0A4DA2" }}>SARVOST</span>
          </h2>
          <p
            className="text-gray-500 max-w-2xl mx-auto mt-4"
            style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
          >
            We combine expert knowledge with cutting-edge technology to deliver financial excellence that helps your business grow.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default"
              style={{
                background: "#F8FAFF",
                border: "1px solid rgba(10,77,162,0.07)",
              }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${feat.color}20, ${feat.color}10)`,
                  boxShadow: `0 4px 15px ${feat.color}20`,
                }}
              >
                <feat.icon size={26} style={{ color: feat.color }} />
              </div>
              <h4
                className="mb-2"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  color: "#1a1a2e",
                }}
              >
                {feat.title}
              </h4>
              <p
                className="text-gray-500 text-xs leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl p-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0A4DA2 0%, #1565c7 50%, #0d3a80 100%)",
            boxShadow: "0 20px 60px rgba(10,77,162,0.3)",
          }}
        >
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #F5A000, transparent)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #F5A000, transparent)" }}
          />
          <h3
            className="text-white mb-4"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.7rem" }}
          >
            Ready to Transform Your Business Finance?
          </h3>
          <p
            className="text-blue-200 mb-7 max-w-xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.7 }}
          >
            Join 500+ businesses who trust SARVOST for their financial management and compliance needs.
          </p>
          <a
            href="tel:+919923333005"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #F5A000, #e08e00)",
              boxShadow: "0 8px 25px rgba(245,160,0,0.45)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Get Started Today
          </a>
        </motion.div>
      </div>
    </section>
  );
}
