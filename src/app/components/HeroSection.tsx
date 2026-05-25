import { motion, useScroll, useTransform } from "motion/react";
import { useId } from "react";
import { ArrowRight, TrendingUp, Shield, Zap } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Jan", revenue: 42000, compliance: 95 },
  { month: "Feb", revenue: 48000, compliance: 97 },
  { month: "Mar", revenue: 52000, compliance: 96 },
  { month: "Apr", revenue: 61000, compliance: 99 },
  { month: "May", revenue: 58000, compliance: 100 },
  { month: "Jun", revenue: 72000, compliance: 100 },
  { month: "Jul", revenue: 80000, compliance: 100 },
];

const floatingCards = [
  {
    icon: TrendingUp,
    label: "Revenue Growth",
    value: "+34.2%",
    color: "#F5A000",
    delay: 0,
  },
  {
    icon: Shield,
    label: "Compliance Rate",
    value: "100%",
    color: "#22c55e",
    delay: 0.2,
  },
  {
    icon: Zap,
    label: "Tax Saved",
    value: "₹12.4L",
    color: "#0A4DA2",
    delay: 0.4,
  },
];

export function HeroSection() {
  const uid = useId().replace(/:/g, "");
  const gradientId = `heroRevenue_${uid}`;

  // Use window scroll (no target ref needed — avoids position warning)
  const { scrollY } = useScroll();
  const orb1Y = useTransform(scrollY, [0, 700], [0, 140]);
  const orb2Y = useTransform(scrollY, [0, 700], [0, 200]);
  const orb3Y = useTransform(scrollY, [0, 700], [0, 80]);
  const gridY = useTransform(scrollY, [0, 700], [0, 60]);
  const contentY = useTransform(scrollY, [0, 700], [0, 50]);
  const contentOpacity = useTransform(scrollY, [0, 420], [1, 0]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #061d3f 0%, #0A4DA2 45%, #1565c7 75%, #0d3a80 100%)",
      }}
    >
      {/* Background Decorations — parallax layers */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: orb1Y, background: "radial-gradient(circle, #F5A000, transparent)" }}
          className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-10"
        />
        <motion.div
          style={{ y: orb2Y, background: "radial-gradient(circle, #F5A000, transparent)" }}
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10"
        />
        <motion.div
          style={{ y: orb3Y, background: "radial-gradient(circle, #ffffff, transparent)" }}
          className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full opacity-5"
        />
        {/* Grid pattern */}
        <motion.div
          style={{
            y: gridY,
            backgroundImage: `linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
          className="absolute inset-0 opacity-5"
        />
      </div>

      <motion.div style={{ y: contentY, opacity: contentOpacity, position: "relative", width: "100%" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
              style={{
                background: "rgba(245,160,0,0.15)",
                border: "1px solid rgba(245,160,0,0.4)",
                color: "#F5A000",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#F5A000] animate-pulse" />
              Trusted by 500+ Businesses Across India
            </div>

            <h1
              className="text-white mb-6 leading-tight"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.15,
              }}
            >
              Your Trusted Finance &amp;{" "}
              <span style={{ color: "#F5A000" }}>Compliance Partner</span> for
              Smarter Business Growth
            </h1>

            <p
              className="text-blue-100 mb-10 max-w-xl"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1.05rem",
                lineHeight: 1.75,
              }}
            >
              We help businesses manage accounting, taxation, compliance,
              payroll, and financial strategy — all under one roof. Expert-led,
              technology-driven, and results-focused.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919923333005"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: "linear-gradient(135deg, #F5A000, #e08e00)",
                  boxShadow: "0 8px 25px rgba(245,160,0,0.45)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Get Free Consultation
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-white transition-all duration-200 hover:bg-white/20"
                style={{
                  border: "2px solid rgba(255,255,255,0.4)",
                  background: "rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                Explore Services
              </a>
            </div>

            {/* Quick stats row */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {[
                { num: "500+", label: "Businesses" },
                { num: "100%", label: "Compliance" },
                { num: "10+", label: "Years Exp." },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="text-white mb-1"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.6rem" }}
                  >
                    {stat.num}
                  </div>
                  <div
                    className="text-blue-200 text-xs"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Dashboard Card */}
            <div
              className="rounded-2xl p-5 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.15)",
                boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
              }}
            >
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p
                    className="text-blue-200 text-xs mb-1"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    Business Performance
                  </p>
                  <p
                    className="text-white font-semibold"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    Financial Overview 2025
                  </p>
                </div>
                <div
                  className="px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: "rgba(34,197,94,0.2)", color: "#22c55e", fontFamily: "Inter, sans-serif" }}
                >
                  ↑ 34.2% Growth
                </div>
              </div>

              {/* Chart */}
              <div className="-mx-2" style={{ height: 192 }}>
                <ResponsiveContainer width="100%" height={192}>
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                        <stop key="s1" offset="5%" stopColor="#F5A000" stopOpacity={0.4} />
                        <stop key="s2" offset="95%" stopColor="#F5A000" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                    <XAxis dataKey="month" stroke="rgba(255,255,255,0.4)" tick={{ fontSize: 11, fontFamily: "Inter, sans-serif" }} />
                    <YAxis hide />
                    <Tooltip
                      contentStyle={{
                        background: "rgba(10,77,162,0.9)",
                        border: "1px solid rgba(255,255,255,0.2)",
                        borderRadius: "8px",
                        color: "#fff",
                        fontFamily: "Inter, sans-serif",
                        fontSize: "12px",
                      }}
                      formatter={(v: number) => [`₹${(v / 1000).toFixed(0)}K`, "Revenue"]}
                    />
                    <Area
                      type="monotone"
                      dataKey="revenue"
                      stroke="#F5A000"
                      strokeWidth={2.5}
                      fill={`url(#${gradientId})`}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Mini KPI row */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { label: "GST Filed", val: "24/24", color: "#22c55e" },
                  { label: "TDS Returns", val: "12/12", color: "#F5A000" },
                  { label: "MIS Reports", val: "7 Done", color: "#60a5fa" },
                ].map((kpi) => (
                  <div
                    key={kpi.label}
                    className="rounded-xl p-3"
                    style={{ background: "rgba(255,255,255,0.07)" }}
                  >
                    <div
                      className="font-bold text-sm mb-0.5"
                      style={{ color: kpi.color, fontFamily: "Poppins, sans-serif" }}
                    >
                      {kpi.val}
                    </div>
                    <div
                      className="text-blue-200 text-xs"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {kpi.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + card.delay, duration: 0.6 }}
                className="absolute"
                style={{
                  ...(i === 0 ? { top: -16, right: -16 } : {}),
                  ...(i === 1 ? { bottom: 80, left: -20 } : {}),
                  ...(i === 2 ? { bottom: -14, right: 40 } : {}),
                }}
              >
                <div
                  className="flex items-center gap-3 px-4 py-3 rounded-2xl"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    boxShadow: `0 8px 25px rgba(0,0,0,0.2), 0 0 0 1px rgba(255,255,255,0.3)`,
                    backdropFilter: "blur(20px)",
                    minWidth: "140px",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${card.color}20` }}
                  >
                    <card.icon size={18} style={{ color: card.color }} />
                  </div>
                  <div>
                    <div
                      className="font-bold text-sm"
                      style={{ color: "#1a1a2e", fontFamily: "Poppins, sans-serif" }}
                    >
                      {card.value}
                    </div>
                    <div
                      className="text-xs text-gray-500"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {card.label}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L60 69.3C120 58.7 240 37.3 360 32C480 26.7 600 37.3 720 42.7C840 48 960 48 1080 42.7C1200 37.3 1320 26.7 1380 21.3L1440 16V80H0Z"
            fill="#F4F4F4"
          />
        </svg>
      </div>
    </section>
  );
}
