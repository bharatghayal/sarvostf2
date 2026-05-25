import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Parth Shete",
    title: "Director, United Gensets Private Limited",
    review:
      "SARVOST transformed our financial management. Their CA-led team handles all our GST, TDS, and payroll seamlessly. We've achieved 100% compliance since onboarding and can focus purely on growing our business.",
    rating: 5,
    avatar: "PS",
    color: "#0A4DA2",
    industry: "Power & Energy",
  },
  {
    name: "Raghuraj Pawade",
    title: "Infinite Events Private Limited",
    review:
      "The Virtual CFO service from SARVOST gave us the financial clarity we needed. Monthly MIS reports, cash flow analysis, and tax planning — all delivered professionally. Highly recommend for any growing SME.",
    rating: 5,
    avatar: "RP",
    color: "#F5A000",
    industry: "Events & Entertainment",
  },
  {
    name: "Dr. Dhananjay Ghunawat",
    title: "Microdentistry & Advanced Dental Care",
    review:
      "Outstanding compliance management! SARVOST ensured we never missed a single filing deadline. Their AI-powered reporting system gives us real-time business insights. True value for money.",
    rating: 5,
    avatar: "DG",
    color: "#0A4DA2",
    industry: "Healthcare & Dental",
  },
  {
    name: "Mr. Yogesh Fulwani",
    title: "Proprietor, Cubic Interior",
    review:
      "We were struggling with ecommerce GST reconciliation. SARVOST's team set up a complete system within days. Their dedicated relationship manager is always available. Simply the best finance partner!",
    rating: 5,
    avatar: "YF",
    color: "#F5A000",
    industry: "Interior Design",
  },
  {
    name: "Satish Lonikar",
    title: "Director, Malhar Corporation Private Limited",
    review:
      "As a doctor, I needed expert help with ITR filing and tax planning. SARVOST made it completely stress-free. Professional, responsive, and highly knowledgeable about professional tax compliance.",
    rating: 5,
    avatar: "SL",
    color: "#0A4DA2",
    industry: "Corporate",
  },
  {
    name: "Bharat Kasbekar",
    title: "Proprietor, Kasbekar Tel Bhandar",
    review:
      "SARVOST handles all our import-export compliance including IEC, GST, and TDS. Their team is proactive, knowledgeable, and always ahead of due dates. We've saved significantly on penalties.",
    rating: 5,
    avatar: "BK",
    color: "#F5A000",
    industry: "Trading",
  },
];

export function TestimonialsSection() {
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
            Client Success Stories
          </p>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              color: "#1a1a2e",
              fontSize: "2.2rem",
            }}
          >
            What Our Clients <span style={{ color: "#0A4DA2" }}>Say</span>
          </h2>
          <p
            className="text-gray-500 max-w-2xl mx-auto mt-4"
            style={{ fontFamily: "Inter, sans-serif", lineHeight: 1.8 }}
          >
            Real stories from real businesses that transformed their financial management with SARVOST.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-7 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                boxShadow: "0 4px 20px rgba(10,77,162,0.08)",
                border: "1px solid rgba(10,77,162,0.08)",
              }}
            >
              {/* Top accent */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-300"
                style={{ background: `linear-gradient(90deg, ${t.color}, ${t.color === "#0A4DA2" ? "#F5A000" : "#0A4DA2"})` }}
              />

              {/* Quote icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${t.color}15` }}
              >
                <Quote size={20} style={{ color: t.color }} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={15} fill="#F5A000" style={{ color: "#F5A000" }} />
                ))}
              </div>

              {/* Review */}
              <p
                className="text-gray-600 text-sm leading-relaxed mb-6"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                "{t.review}"
              </p>

              {/* Industry tag */}
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-5"
                style={{
                  background: `${t.color}12`,
                  color: t.color,
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {t.industry}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${t.color}, ${t.color === "#0A4DA2" ? "#1565c7" : "#e08e00"})`,
                    fontFamily: "Poppins, sans-serif",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div
                    className="font-semibold text-sm"
                    style={{ fontFamily: "Poppins, sans-serif", color: "#1a1a2e" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                    {t.title}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-12"
        >
          <div
            className="flex items-center gap-4 bg-white px-8 py-5 rounded-2xl"
            style={{ boxShadow: "0 4px 20px rgba(10,77,162,0.10)", border: "1px solid rgba(10,77,162,0.08)" }}
          >
            <div className="text-center">
              <div
                className="text-3xl font-bold"
                style={{ fontFamily: "Poppins, sans-serif", color: "#0A4DA2" }}
              >
                4.9
              </div>
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={14} fill="#F5A000" style={{ color: "#F5A000" }} />
                ))}
              </div>
            </div>
            <div
              className="w-px h-12 bg-gray-200"
            />
            <div>
              <div
                className="font-semibold text-sm"
                style={{ fontFamily: "Poppins, sans-serif", color: "#1a1a2e" }}
              >
                Google Rating
              </div>
              <div className="text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                Based on 200+ reviews
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
