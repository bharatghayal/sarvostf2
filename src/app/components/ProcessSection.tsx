import { motion } from "motion/react";
import {
  MessageSquare,
  FileCheck,
  Database,
  Settings,
  HeadphonesIcon,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Consultation",
    desc: "Free discovery call to understand your business, goals, and financial challenges.",
    color: "#0A4DA2",
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Proposal & Agreement",
    desc: "Clear scope of work, transparent pricing, and formal engagement agreement.",
    color: "#F5A000",
  },
  {
    number: "03",
    icon: Database,
    title: "Secure Data Collection",
    desc: "Secure onboarding with encrypted data collection and system access setup.",
    color: "#0A4DA2",
  },
  {
    number: "04",
    icon: Settings,
    title: "System Setup & Automation",
    desc: "Configure accounting tools, automation workflows, and reporting dashboards.",
    color: "#F5A000",
  },
  {
    number: "05",
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    desc: "Continuous financial management, compliance tracking, and dedicated support.",
    color: "#0A4DA2",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24" style={{ background: "#F4F4F4" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "#F5A000", fontFamily: "Inter, sans-serif" }}
          >
            How We Work
          </p>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: "#1a1a2e",
              fontSize: "2.2rem",
            }}
          >
            Our Simple <span style={{ color: "#0A4DA2" }}>Working Process</span>
          </h2>
          <p
            className="text-gray-500 max-w-2xl mx-auto mt-4"
            style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
          >
            A clear, streamlined process designed to get you up and running quickly with minimal disruption.
          </p>
        </motion.div>

        {/* Timeline — Desktop */}
        <div className="hidden lg:block">
          {/* Connection line */}
          <div className="relative">
            <div
              className="absolute top-12 left-[10%] right-[10%] h-0.5 z-0"
              style={{ background: "linear-gradient(90deg, #0A4DA2, #F5A000, #0A4DA2, #F5A000, #0A4DA2)" }}
            />
            <div className="grid grid-cols-5 gap-4 relative z-10">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  {/* Circle */}
                  <div className="flex justify-center mb-6">
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center relative"
                      style={{
                        background: `linear-gradient(135deg, ${step.color}, ${step.color === "#0A4DA2" ? "#1565c7" : "#e08e00"})`,
                        boxShadow: `0 8px 25px ${step.color}40`,
                      }}
                    >
                      <step.icon size={32} color="white" />
                      <div
                        className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{ background: step.color === "#0A4DA2" ? "#F5A000" : "#0A4DA2", fontFamily: "Poppins, sans-serif" }}
                      >
                        {i + 1}
                      </div>
                    </div>
                  </div>
                  <h4
                    className="mb-2"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.9rem",
                      color: "#1a1a2e",
                    }}
                  >
                    {step.title}
                  </h4>
                  <p
                    className="text-gray-500 text-xs leading-relaxed"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {step.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline — Mobile */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${step.color}, ${step.color === "#0A4DA2" ? "#1565c7" : "#e08e00"})`,
                    boxShadow: `0 6px 18px ${step.color}40`,
                  }}
                >
                  <step.icon size={22} color="white" />
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-0.5 flex-1 mt-2"
                    style={{ background: `linear-gradient(180deg, ${step.color}, ${steps[i + 1].color})` }}
                  />
                )}
              </div>
              <div className="pb-6">
                <div
                  className="text-xs font-bold mb-1"
                  style={{ color: step.color, fontFamily: "Poppins, sans-serif" }}
                >
                  Step {i + 1}
                </div>
                <h4
                  className="mb-1.5"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "#1a1a2e",
                  }}
                >
                  {step.title}
                </h4>
                <p
                  className="text-gray-500 text-sm"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
