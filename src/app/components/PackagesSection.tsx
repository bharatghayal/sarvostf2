import { motion } from "motion/react";
import { CheckCircle2, Star } from "lucide-react";

const packages = [
  {
    name: "Basic Compliance",
    subtitle: "Perfect for businesses needing statutory compliance management",
    price: "Custom",
    priceNote: "Contact for pricing",
    features: [
      "GST Filing (Monthly/Quarterly)",
      "TDS Filing & Returns",
      "ITR Filing",
      "Compliance Alerts & Reminders",
      "Annual Compliance Calendar",
      "Email Support",
    ],
    color: "#0A4DA2",
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Finance & Compliance",
    subtitle: "Complete financial management for growing businesses",
    price: "Custom",
    priceNote: "Most Popular Choice",
    features: [
      "Everything in Basic",
      "Bookkeeping & Accounting",
      "Bank Reconciliation",
      "MIS Reports (Monthly)",
      "Cash Flow Management",
      "Tax Planning & Advisory",
      "Business Health Reports",
      "Dedicated Relationship Manager",
      "Priority Support",
    ],
    color: "#F5A000",
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Payroll & HR Add-On",
    subtitle: "Employee and payroll management services",
    price: "Custom",
    priceNote: "Add-on or standalone",
    features: [
      "Payroll Processing",
      "PF & ESIC Compliance",
      "Employee Documentation",
      "Salary Slips Generation",
      "HR Compliance Management",
      "Leave & Attendance Tracking",
    ],
    color: "#0A4DA2",
    popular: false,
    cta: "Get Started",
  },
];

export function PackagesSection() {
  return (
    <section id="packages" className="py-24" style={{ background: "#F4F4F4" }}>
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
            Service Packages
          </p>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: "#1a1a2e",
              fontSize: "2.2rem",
            }}
          >
            Flexible <span style={{ color: "#0A4DA2" }}>Service Packages</span>
          </h2>
          <p
            className="text-gray-500 max-w-2xl mx-auto mt-4"
            style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
          >
            Tailored solutions for every business stage — from basic compliance to full financial management.
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative"
            >
              {pkg.popular && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-white text-xs font-bold"
                  style={{
                    background: "linear-gradient(135deg, #F5A000, #e08e00)",
                    boxShadow: "0 4px 15px rgba(245,160,0,0.5)",
                    fontFamily: "Inter, sans-serif",
                  }}
                >
                  <Star size={12} fill="white" />
                  MOST POPULAR
                </div>
              )}

              <div
                className="bg-white rounded-3xl p-8 h-full transition-all duration-300 hover:-translate-y-2 shimmer-hover"
                style={{
                  boxShadow: pkg.popular
                    ? `0 20px 60px rgba(245,160,0,0.2), 0 0 0 2px ${pkg.color}`
                    : "0 4px 24px rgba(10,77,162,0.08)",
                  border: pkg.popular ? `2px solid ${pkg.color}` : "1px solid rgba(10,77,162,0.08)",
                }}
              >
                {/* Header */}
                <div className="mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                    style={{ background: `${pkg.color}15` }}
                  >
                    <div
                      className="w-5 h-5 rounded-full"
                      style={{ background: pkg.color }}
                    />
                  </div>
                  <h3
                    className="mb-2"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 700,
                      fontSize: "1.25rem",
                      color: "#1a1a2e",
                    }}
                  >
                    {pkg.name}
                  </h3>
                  <p className="text-gray-500 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                    {pkg.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div
                  className="rounded-2xl p-4 mb-6 text-center"
                  style={{ background: `${pkg.color}08` }}
                >
                  <div
                    className="font-bold text-2xl"
                    style={{ fontFamily: "Poppins, sans-serif", color: pkg.color }}
                  >
                    {pkg.price}
                  </div>
                  <div className="text-xs text-gray-500 mt-1" style={{ fontFamily: "Inter, sans-serif" }}>
                    {pkg.priceNote}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3">
                      <CheckCircle2
                        size={17}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: pkg.color }}
                      />
                      <span
                        className="text-gray-600 text-sm"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="tel:+919923333005"
                  className="block w-full text-center px-6 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
                  style={{
                    background: pkg.popular
                      ? `linear-gradient(135deg, ${pkg.color}, #e08e00)`
                      : `${pkg.color}15`,
                    color: pkg.popular ? "#ffffff" : pkg.color,
                    fontFamily: "Inter, sans-serif",
                    boxShadow: pkg.popular ? `0 8px 20px ${pkg.color}40` : "none",
                  }}
                >
                  {pkg.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-400 mt-10"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          All packages are customizable. Contact us for a tailored quote based on your business needs.
        </motion.p>
      </div>
    </section>
  );
}
