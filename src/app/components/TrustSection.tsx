import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Users, CheckCircle2, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Businesses Supported", color: "#0A4DA2" },
  { icon: CheckCircle2, value: 100, suffix: "%", label: "Compliance Tracking", color: "#F5A000" },
  { icon: Award, value: 10, suffix: "+", label: "Years of Expertise", color: "#0A4DA2" },
  { icon: TrendingUp, value: 98, suffix: "%", label: "Client Retention Rate", color: "#F5A000" },
];

const clientNames = [
  "TechCorp", "GrowthVentures", "StartupHub", "FinanceWorks",
  "RetailPro", "ManufactureCo", "ServiceEdge", "TradeConnect",
];

function AnimatedCounter({ target, color, suffix }: { target: number; color: string; suffix: string }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const duration = 1800;
    const step = target / (duration / 16);
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      setCount(Math.floor(current));
      if (current >= target) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span style={{ color: "#1a1a2e", fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "2.4rem" }}>
      {count}{suffix}
    </span>
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group"
    >
      <div
        className="bg-white rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        style={{ boxShadow: "0 4px 24px rgba(10,77,162,0.08)", border: "1px solid rgba(10,77,162,0.06)" }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${stat.color}15` }}
        >
          <stat.icon size={28} style={{ color: stat.color }} />
        </div>
        <div className="mb-2">
          {visible ? (
            <AnimatedCounter target={stat.value} color={stat.color} suffix={stat.suffix} />
          ) : (
            <span style={{ color: "#1a1a2e", fontFamily: "Poppins, sans-serif", fontWeight: 800, fontSize: "2.4rem" }}>
              0{stat.suffix}
            </span>
          )}
        </div>
        <p className="text-gray-500 text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}

export function TrustSection() {
  return (
    <section className="py-20" style={{ background: "#F4F4F4" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
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
            Trusted Partners
          </p>
          <h2
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#0A4DA2", fontSize: "2.2rem" }}
          >
            Trusted By Growing Businesses
          </h2>
          <p
            className="text-gray-500 max-w-2xl mx-auto mt-4"
            style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
          >
            Helping startups, SMEs, traders, professionals, and growing companies achieve financial clarity and compliance confidence.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* Client logos */}
        <div className="overflow-hidden">
          <p
            className="text-center text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Businesses We've Helped Grow
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            {clientNames.map((name) => (
              <div
                key={name}
                className="px-6 py-3 rounded-xl bg-white font-semibold text-sm transition-all duration-200 hover:shadow-md hover:-translate-y-1"
                style={{
                  color: "#0A4DA2",
                  fontFamily: "Poppins, sans-serif",
                  border: "1px solid rgba(10,77,162,0.1)",
                  boxShadow: "0 2px 12px rgba(10,77,162,0.05)",
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
