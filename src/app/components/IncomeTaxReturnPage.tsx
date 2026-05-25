import { CheckCircle, Phone, MessageCircle } from "lucide-react";

const itrPackages = [
  {
    title: "Salary + House Rent Income",
    price: "₹1,000",
    tag: "Most Popular",
    tagColor: "#0A4DA2",
    covers: [
      "Salary Income",
      "House Property Income",
      "Interest from Bank Deposits",
    ],
  },
  {
    title: "Salary + Capital Gain / F&O Trading",
    price: "₹2,000",
    tag: "Investors",
    tagColor: "#0A4DA2",
    covers: [
      "Salary Income",
      "House Property Income",
      "Interest from Bank Deposits",
      "Capital Gains (stocks, mutual funds, etc.)",
    ],
  },
  {
    title: "Salary + Capital Gain + Foreign Income",
    price: "₹2,500",
    tag: "NRI / Foreign",
    tagColor: "#0A4DA2",
    covers: [
      "Salary Income",
      "House Property Income",
      "Capital Gains",
      "Foreign Income",
    ],
  },
  {
    title: "Shop Owners",
    price: "₹1,500",
    tag: "Retail / Wholesale",
    tagColor: "#F5A000",
    covers: [
      "Retail / Wholesale Business Income",
      "Income from Capital Gain",
      "Salary + Other Income",
    ],
  },
  {
    title: "Professionals / Freelancers",
    price: "₹2,000",
    tag: "Professionals",
    tagColor: "#F5A000",
    covers: [
      "Income from Profession / Freelancing",
      "Income from Capital Gain",
      "Salary + Other Income",
    ],
  },
  {
    title: "Small Manufacturer",
    price: "₹4,000",
    tag: "Business",
    tagColor: "#F5A000",
    covers: [
      "Income from Business / Manufacturing",
      "GST Reconciliation",
      "Income from Capital Gain",
      "Salary + Other Income",
    ],
  },
];

const whatYouGet = [
  "ITR Acknowledgment, Balance Sheet, P&L Statement & Tax Computation",
  "Payment only after getting your work done",
  "Free Consultation with an expert CA",
  "Suggestion for tax saving & post-filing support",
];

const whyFileITR = [
  {
    title: "Easy Loan Approvals",
    description:
      "Majority of banks ask for a copy of income tax returns for at least three consecutive years to sanction a loan. Furnishing I-T returns improves your chances significantly.",
    icon: "🏦",
  },
  {
    title: "VISA Processing",
    description:
      "Foreign consulates ask you to furnish ITR receipts of the last couple of years at the time of visa interview. Some embassies may ask for ITR receipts of previous three years.",
    icon: "✈️",
  },
  {
    title: "Carry Forward of Losses",
    description:
      "By filing ITR, you can carry forward losses for the next eight years to set off against future income. This helps reduce your tax burden in future years.",
    icon: "📉",
  },
  {
    title: "To Claim TDS Refunds",
    description:
      "If you have invested in fixed deposits, interest income is charged TDS at 10%. Filing ITR allows you to claim a refund if your actual tax liability is lower.",
    icon: "💰",
  },
  {
    title: "Buying a High Life Cover",
    description:
      "Life insurance companies ask for ITR receipts if you opt to buy a term policy with sum insured of ₹50 lakh or more. ITR serves as income proof.",
    icon: "🛡️",
  },
  {
    title: "Avoid Interest on Tax Liability",
    description:
      "Filing ITR on time helps you avoid interest and penalties on unpaid tax liabilities. Timely compliance protects you from unnecessary financial burden.",
    icon: "⏰",
  },
  {
    title: "Self Employed Income Proof",
    description:
      "Salaried persons get Form 16 as income proof, but businessmen, consultants, and partners of firms do not. ITR receipts become their official income document.",
    icon: "💼",
  },
  {
    title: "Government Tenders",
    description:
      "If you plan to apply for a government tender, you will need to show your tax returns of previous years to prove your financial status and payment capability.",
    icon: "📋",
  },
  {
    title: "Share Market Trading Losses",
    description:
      "If you have incurred losses in share market trading, filing ITR allows you to set off those losses against future capital gains, reducing your future tax outflow.",
    icon: "📊",
  },
];

export function IncomeTaxReturnPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen" style={{ background: "#F4F4F4", fontFamily: "Inter, sans-serif" }}>
      {/* Hero */}
      <div
        className="relative pt-28 pb-20 px-4"
        style={{ background: "linear-gradient(135deg, #0A4DA2 0%, #06336b 60%, #041f42 100%)" }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 50%, #F5A000 0%, transparent 50%), radial-gradient(circle at 20% 80%, #F5A000 0%, transparent 40%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ background: "rgba(245,160,0,0.2)", color: "#F5A000", border: "1px solid rgba(245,160,0,0.4)" }}
          >
            SARVOST — Income Tax Services
          </span>
          <h1
            className="text-4xl sm:text-5xl text-white mb-4"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            Income Tax Return Filing
          </h1>
          <p className="text-blue-200 text-base max-w-xl mx-auto mb-8">
            Expert ITR filing for individuals, salaried employees, freelancers, and business owners. Fast, accurate, and CA-reviewed.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/919923333005?text=${encodeURIComponent("Hello! I need help with Income Tax Return filing.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            >
              <MessageCircle size={16} />
              WhatsApp Us
            </a>
            <a
              href="tel:+919923333005"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
              style={{ background: "rgba(255,255,255,0.12)", color: "white", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              <Phone size={16} />
              +91 99233 33005
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-14 space-y-16">

        {/* What You Get */}
        <section>
          <div
            className="rounded-2xl p-7"
            style={{ background: "linear-gradient(135deg, #0A4DA2 0%, #06336b 100%)", boxShadow: "0 8px 30px rgba(10,77,162,0.2)" }}
          >
            <h2 className="text-xl text-white font-bold mb-5 text-center" style={{ fontFamily: "Poppins, sans-serif" }}>
              What You Get with Every Package
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {whatYouGet.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-3 rounded-xl"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.12)" }}
                >
                  <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#F5A000" }} />
                  <span className="text-blue-100 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
              Choose Your ITR Package
            </h2>
            <p className="text-gray-500 text-sm">Transparent pricing — payment only after work is done</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {itrPackages.map((pkg) => (
              <div
                key={pkg.title}
                className="rounded-2xl overflow-hidden flex flex-col"
                style={{ background: "white", boxShadow: "0 6px 30px rgba(10,77,162,0.08)" }}
              >
                <div className="flex-1 px-5 pt-6 pb-4">
                  <div
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
                    style={{
                      background: pkg.tagColor === "#F5A000" ? "rgba(245,160,0,0.12)" : "rgba(10,77,162,0.08)",
                      color: pkg.tagColor,
                    }}
                  >
                    {pkg.tag}
                  </div>
                  <h3 className="font-bold text-gray-900 text-base leading-snug mb-3" style={{ fontFamily: "Poppins, sans-serif" }}>
                    {pkg.title}
                  </h3>
                  <div
                    className="text-3xl font-bold mb-4"
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      background: "linear-gradient(135deg, #0A4DA2, #F5A000)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {pkg.price}
                  </div>
                  <div
                    className="h-px w-full mb-4"
                    style={{ background: "rgba(10,77,162,0.08)" }}
                  />
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">Includes</p>
                  <ul className="space-y-2">
                    {pkg.covers.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#0A4DA2" }} />
                        <span className="text-xs text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="px-5 pb-5 pt-2">
                  <a
                    href={`https://wa.me/919923333005?text=${encodeURIComponent(`Hello! I want to file ITR — ${pkg.title} package.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02]"
                    style={{ background: "linear-gradient(135deg, #0A4DA2, #06336b)" }}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why File ITR */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
              Why Should You File ITR?
            </h2>
            <p className="text-gray-500 text-sm">Beyond just compliance — filing ITR benefits you in many ways</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyFileITR.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl p-5 flex flex-col gap-3 transition-all hover:-translate-y-1"
                style={{
                  background: "white",
                  boxShadow: "0 4px 20px rgba(10,77,162,0.07)",
                  border: "1px solid rgba(10,77,162,0.06)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "rgba(10,77,162,0.06)" }}
                >
                  {reason.icon}
                </div>
                <h3 className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                  {reason.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="rounded-2xl p-8 text-center"
          style={{
            background: "linear-gradient(135deg, #0A4DA2 0%, #06336b 100%)",
            boxShadow: "0 10px 40px rgba(10,77,162,0.25)",
          }}
        >
          <h2 className="text-2xl text-white mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
            File Your ITR Today
          </h2>
          <p className="text-blue-200 text-sm mb-6 max-w-md mx-auto">
            Our CA experts handle your ITR end-to-end. Free consultation — payment only after filing.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/919923333005?text=${encodeURIComponent("Hello! I want to file my Income Tax Return.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white transition-all hover:scale-105"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
            <a
              href="tel:+919923333005"
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all hover:scale-105"
              style={{ background: "rgba(245,160,0,1)", color: "white" }}
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
