import { useState } from "react";
import { CheckCircle, ChevronDown, ChevronUp, Phone, MessageCircle } from "lucide-react";

const gstPackages = [
  {
    title: "GST Registration",
    price: "₹2,000",
    subtitle: "One-time registration",
    covers: [
      "Filing of Registration Application",
      "Receipt of GST Identification Number (GSTIN)",
    ],
  },
  {
    title: "GST Return Filing",
    monthlyPrice: "₹500",
    quarterlyPrice: "₹1,500",
    subtitle: "Monthly / Quarterly",
    covers: [
      "GSTR Filing Monthly",
      "Accounting not part of this service",
      "Valid for turnover less than ₹1.5 Crores",
    ],
  },
];

const compulsoryCategories = [
  "Persons making any inter-State taxable supply",
  "Who are required to pay tax under reverse charge",
  "Non-resident taxable persons",
  "Persons required to deduct tax under Section 37",
  "Persons who supply goods/services on behalf of other registered taxable persons",
  "Input service distributor",
  "Persons supplying goods/services through electronic commerce operator",
  "Every electronic commerce operator",
  "An aggregator who supplies services under his brand name or trade name",
  "Casual taxable persons",
  "Any other person or class of persons as notified by Government",
];

const documentSections = [
  {
    title: "Company Documents",
    subtitle: "Pvt. Ltd. / Public Company / OPC",
    docs: [
      "PAN card of the company",
      "Registration Certificate of the company",
      "Memorandum of Association (MOA) | Articles of Association (AOA)",
      "Copy of Cancelled cheque of the company",
      "Declaration to comply with the provisions",
      "Copy of Board resolution",
    ],
  },
  {
    title: "Director Related Documents",
    subtitle: "For all directors",
    docs: [
      "PAN card and ID proof of directors",
    ],
  },
  {
    title: "LLP / Partnership Documents",
    subtitle: "Limited Liability Partnership",
    docs: [
      "PAN card of the LLP",
      "Registration Certificate of the LLP",
      "LLP Partnership agreement",
      "Copy of Cancelled cheque of the LLP",
      "Declaration to comply with the provisions",
      "Copy of Board resolution",
    ],
  },
  {
    title: "Designated Partner Documents",
    subtitle: "For all designated partners",
    docs: [
      "PAN card and ID proof of designated partners",
    ],
  },
  {
    title: "Individual / Sole Proprietor Documents",
    subtitle: "Sole proprietorship / Individual",
    docs: [
      "PAN card and ID proof of the individual",
      "Copy of Cancelled cheque or bank statement",
      "Declaration to comply with the provisions",
    ],
  },
  {
    title: "Registered Office Documents",
    subtitle: "For all entity types",
    docs: [
      "Copy of electricity bill / landline bill / water bill",
      "No objection certificate of the owner",
      "Rent agreement (in case premises are rented)",
    ],
  },
];

function AccordionItem({ section, index }: { section: typeof documentSections[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{ border: "1px solid rgba(10,77,162,0.12)" }}
    >
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left transition-all"
        style={{ background: open ? "rgba(10,77,162,0.06)" : "white" }}
        onClick={() => setOpen(!open)}
      >
        <div>
          <div className="font-semibold text-sm" style={{ color: "#0A4DA2", fontFamily: "Poppins, sans-serif" }}>
            {section.title}
          </div>
          <div className="text-xs text-gray-500 mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
            {section.subtitle}
          </div>
        </div>
        {open ? <ChevronUp size={18} color="#0A4DA2" /> : <ChevronDown size={18} color="#0A4DA2" />}
      </button>
      {open && (
        <div className="px-5 pb-4 pt-2" style={{ background: "white" }}>
          <ul className="space-y-2">
            {section.docs.map((doc) => (
              <li key={doc} className="flex items-start gap-2.5">
                <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#F5A000" }} />
                <span className="text-sm text-gray-700" style={{ fontFamily: "Inter, sans-serif" }}>{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export function GstServicesPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen" style={{ background: "#F4F4F4", fontFamily: "Inter, sans-serif" }}>
      {/* Hero */}
      <div
        className="relative pt-28 pb-20 px-4"
        style={{ background: "linear-gradient(135deg, #0A4DA2 0%, #06336b 60%, #041f42 100%)" }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #F5A000 0%, transparent 50%), radial-gradient(circle at 80% 20%, #F5A000 0%, transparent 40%)" }}
        />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-4"
            style={{ background: "rgba(245,160,0,0.2)", color: "#F5A000", border: "1px solid rgba(245,160,0,0.4)" }}
          >
            SARVOST — GST Services
          </span>
          <h1
            className="text-4xl sm:text-5xl text-white mb-4"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}
          >
            Goods &amp; Services Tax
          </h1>
          <p className="text-blue-200 text-base max-w-xl mx-auto mb-8">
            Expert CA-led GST registration and filing services tailored for businesses of every size.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/919923333005?text=${encodeURIComponent("Hello! I need help with GST Services.")}`}
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

        {/* Pricing Cards */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
              Our GST Packages
            </h2>
            <p className="text-gray-500 text-sm">Transparent pricing — no hidden charges</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {/* GST Registration Card */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: "white", boxShadow: "0 8px 40px rgba(10,77,162,0.1)" }}
            >
              <div className="px-6 pt-7 pb-5">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{ background: "rgba(10,77,162,0.08)", color: "#0A4DA2" }}
                >
                  One-Time
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                  GST Registration
                </h3>
                <div
                  className="text-4xl font-bold mt-3 mb-1"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    background: "linear-gradient(135deg, #0A4DA2, #F5A000)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  ₹2,000
                </div>
                <p className="text-xs text-gray-400 mb-5">+ Govt. fee (if applicable)</p>
                <div
                  className="h-px w-full mb-5"
                  style={{ background: "rgba(10,77,162,0.08)" }}
                />
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">What it covers</p>
                <ul className="space-y-3">
                  {gstPackages[0].covers.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#0A4DA2" }} />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <a
                  href={`https://wa.me/919923333005?text=${encodeURIComponent("I want to register for GST. Please help.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02]"
                  style={{ background: "linear-gradient(135deg, #0A4DA2, #06336b)" }}
                >
                  Enquire Now
                </a>
              </div>
            </div>

            {/* GST Return Filing Card */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: "white", boxShadow: "0 8px 40px rgba(10,77,162,0.1)" }}
            >
              <div className="px-6 pt-7 pb-5">
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                  style={{ background: "rgba(245,160,0,0.12)", color: "#e08e00" }}
                >
                  Recurring
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1" style={{ fontFamily: "Poppins, sans-serif" }}>
                  GST Return Filing
                </h3>
                <div className="flex gap-6 mt-3 mb-1">
                  <div>
                    <div
                      className="text-3xl font-bold"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        background: "linear-gradient(135deg, #0A4DA2, #F5A000)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      ₹1,000
                    </div>
                    <div className="text-xs text-gray-400">Monthly Filing</div>
                  </div>
                  <div
                    className="w-px"
                    style={{ background: "rgba(10,77,162,0.1)" }}
                  />
                  <div>
                    <div
                      className="text-3xl font-bold"
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        background: "linear-gradient(135deg, #0A4DA2, #F5A000)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      ₹2,000
                    </div>
                    <div className="text-xs text-gray-400">Quarterly Filing</div>
                  </div>
                </div>
                <div
                  className="h-px w-full mb-5 mt-5"
                  style={{ background: "rgba(10,77,162,0.08)" }}
                />
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3">What it covers</p>
                <ul className="space-y-3">
                  {gstPackages[1].covers.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={16} className="mt-0.5 flex-shrink-0" style={{ color: "#0A4DA2" }} />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="px-6 pb-6">
                <a
                  href={`https://wa.me/919923333005?text=${encodeURIComponent("I want to file my GST returns. Please help.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.02]"
                  style={{ background: "linear-gradient(135deg, #F5A000, #e08e00)" }}
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Who needs to register */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
              Who is Required to Get Registered?
            </h2>
          </div>

          {/* Threshold */}
          <div
            className="rounded-2xl p-6 mb-6"
            style={{
              background: "linear-gradient(135deg, #0A4DA2 0%, #06336b 100%)",
              boxShadow: "0 8px 30px rgba(10,77,162,0.2)",
            }}
          >
            <h3 className="text-white font-semibold mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
              Every Supplier shall be liable for registration under GST Act if their aggregate turnover exceeds:
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: "Trader or Manufacturer", value: "₹40 Lakhs" },
                { label: "Service Provider", value: "₹20 Lakhs" },
              ].map((t) => (
                <div
                  key={t.label}
                  className="rounded-xl p-4 flex items-center gap-4"
                  style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <div
                    className="text-2xl font-bold"
                    style={{ fontFamily: "Poppins, sans-serif", color: "#F5A000" }}
                  >
                    {t.value}
                  </div>
                  <div className="text-blue-200 text-sm">{t.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Compulsory Categories */}
          <div
            className="rounded-2xl p-6 mb-4"
            style={{ background: "white", boxShadow: "0 4px 20px rgba(10,77,162,0.08)" }}
          >
            <h3 className="font-semibold text-gray-900 mb-4" style={{ fontFamily: "Poppins, sans-serif" }}>
              Following categories must register regardless of turnover:
            </h3>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {compulsoryCategories.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle size={15} className="mt-0.5 flex-shrink-0" style={{ color: "#F5A000" }} />
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-2xl p-5 flex items-center gap-4"
            style={{ background: "rgba(245,160,0,0.08)", border: "1px solid rgba(245,160,0,0.2)" }}
          >
            <CheckCircle size={20} style={{ color: "#F5A000", flexShrink: 0 }} />
            <p className="text-sm text-gray-700">
              <strong>Voluntary Registration:</strong> Any supplier may voluntarily register under GST even if below the threshold limit.
            </p>
          </div>
        </section>

        {/* Required Documents */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl text-gray-900 mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>
              Documents Required for GST Registration
            </h2>
            <p className="text-gray-500 text-sm">Select your entity type below</p>
          </div>
          <div className="space-y-3">
            {documentSections.map((section, i) => (
              <AccordionItem key={section.title} section={section} index={i} />
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
            Ready to Get Started?
          </h2>
          <p className="text-blue-200 text-sm mb-6 max-w-md mx-auto">
            Contact our GST experts today for a free consultation. Payment only after work is done.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/919923333005?text=${encodeURIComponent("Hello! I need GST registration/filing services.")}`}
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
