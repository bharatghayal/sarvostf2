import { motion } from "motion/react";
import {
  FileText,
  BarChart2,
  Users,
  Briefcase,
  Building2,
  Banknote,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Tax & Compliance Management",
    desc: "GST, TDS, ITR, ROC, MSME, FSSAI, PT, IEC and comprehensive statutory compliance services.",
    tags: ["GST Filing", "TDS Returns", "ITR", "ROC"],
    color: "#0A4DA2",
  },
  {
    icon: BarChart2,
    title: "Financial Management & Reporting",
    desc: "Bookkeeping, MIS reports, cash flow tracking, budgeting, and profitability analysis.",
    tags: ["Bookkeeping", "MIS Reports", "Cash Flow"],
    color: "#F5A000",
  },
  {
    icon: Users,
    title: "Payroll & HR Management",
    desc: "Payroll processing, PF/ESIC compliance, employee documentation, and comprehensive HR support.",
    tags: ["Payroll", "PF/ESIC", "HR Docs"],
    color: "#0A4DA2",
  },
  {
    icon: Briefcase,
    title: "Virtual CFO Services",
    desc: "Strategic finance management, KPI monitoring, growth planning, and executive financial reporting.",
    tags: ["Strategy", "KPI Monitoring", "Growth Plans"],
    color: "#F5A000",
  },
  {
    icon: Building2,
    title: "Business Advisory & Structuring",
    desc: "Business setup, tax planning, process structuring, and robust financial controls.",
    tags: ["Setup", "Tax Planning", "Controls"],
    color: "#0A4DA2",
  },
  {
    icon: Banknote,
    title: "Funding & Loan Advisory",
    desc: "Loan assistance, CMA reports, working capital management, and bank liaison services.",
    tags: ["Loan Help", "CMA Reports", "Capital"],
    color: "#F5A000",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24" style={{ background: "#F4F4F4" }}>
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
            What We Offer
          </p>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: "#1a1a2e",
              fontSize: "2.2rem",
            }}
          >
            Our <span style={{ color: "#0A4DA2" }}>Core Services</span>
          </h2>
          <p
            className="text-gray-500 max-w-2xl mx-auto mt-4"
            style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
          >
            Comprehensive financial and compliance solutions designed to help your business thrive in today's competitive landscape.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white rounded-2xl p-7 overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl shimmer-hover"
              style={{
                boxShadow: "0 4px 20px rgba(10,77,162,0.07)",
                border: "1px solid rgba(10,77,162,0.06)",
              }}
            >
              {/* Top accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl transition-all duration-300 group-hover:h-1.5"
                style={{ background: `linear-gradient(90deg, ${service.color}, ${service.color === "#0A4DA2" ? "#F5A000" : "#0A4DA2"})` }}
              />

              {/* Background decoration */}
              <div
                className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `${service.color}08` }}
              />

              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                style={{
                  background: `${service.color}15`,
                  boxShadow: `0 0 0 0 ${service.color}30`,
                }}
              >
                <service.icon size={26} style={{ color: service.color }} />
              </div>

              <h3
                className="mb-3"
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  color: "#1a1a2e",
                }}
              >
                {service.title}
              </h3>
              <p
                className="text-gray-500 text-sm mb-5 leading-relaxed"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {service.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: `${service.color}12`,
                      color: service.color,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="tel:+919923333005"
                className="flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
                style={{ color: service.color, fontFamily: "Inter, sans-serif" }}
              >
                Learn More <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
