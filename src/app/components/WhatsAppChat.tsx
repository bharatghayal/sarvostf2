import { useState, useEffect } from "react";
import { X, Send } from "lucide-react";

const WHATSAPP_NUMBER = "919923333005";
const GREETING_DELAY = 3000;

const quickReplies = [
  "I need help with GST filing",
  "Tell me about Income Tax Return",
  "What are your service packages?",
  "I want a free consultation",
];

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [message, setMessage] = useState("");
  const [showPulse, setShowPulse] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBadge(true);
    }, GREETING_DELAY);
    return () => clearTimeout(timer);
  }, []);

  const openWhatsApp = (text?: string) => {
    const msg = encodeURIComponent(text || message || "Hello! I'd like to know more about your services.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank", "noopener,noreferrer");
    setMessage("");
  };

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
    setShowBadge(false);
    setShowPulse(false);
  };

  return (
    <>
      {/* Chat Widget */}
      <div
        className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3"
        style={{ fontFamily: "Inter, sans-serif" }}
      >
        {/* Chat Panel */}
        {isOpen && (
          <div
            className="w-80 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: "#fff",
              border: "1px solid rgba(10,77,162,0.1)",
              animation: "slideUp 0.25s ease-out",
              boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
            }}
          >
            {/* Header */}
            <div
              className="px-4 py-4 flex items-center gap-3"
              style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
            >
              <div className="relative">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                >
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <span
                  className="absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white"
                  style={{ background: "#4ade80" }}
                />
              </div>
              <div className="flex-1">
                <div className="text-white font-semibold text-sm">SARVOST Support</div>
                <div className="text-green-100 text-xs">Typically replies in minutes</div>
              </div>
              <button
                onClick={handleToggle}
                className="w-7 h-7 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <X size={14} color="white" />
              </button>
            </div>

            {/* Body */}
            <div className="px-4 py-4" style={{ background: "#ECE5DD", minHeight: "160px" }}>
              {/* Agent bubble */}
              <div className="flex items-end gap-2 mb-4">
                <div
                  className="w-7 h-7 rounded-full flex-shrink-0 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </div>
                <div
                  className="rounded-xl rounded-bl-none px-3 py-2.5 max-w-[200px]"
                  style={{ background: "white", boxShadow: "0 1px 2px rgba(0,0,0,0.1)" }}
                >
                  <p className="text-gray-800 text-xs leading-relaxed">
                    👋 Hi there! Welcome to <strong>SARVOST</strong>. How can we help you today?
                  </p>
                  <p className="text-gray-400 text-[10px] mt-1 text-right">Just now</p>
                </div>
              </div>

              {/* Quick replies */}
              <div className="flex flex-col gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => openWhatsApp(reply)}
                    className="text-left text-xs px-3 py-2 rounded-xl transition-all duration-150 hover:scale-[1.02] active:scale-95"
                    style={{
                      background: "white",
                      color: "#128C7E",
                      border: "1px solid #25D366",
                      fontFamily: "Inter, sans-serif",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
                    }}
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div
              className="px-3 py-3 flex items-center gap-2"
              style={{ background: "#F0F0F0", borderTop: "1px solid rgba(0,0,0,0.06)" }}
            >
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && message.trim() && openWhatsApp()}
                placeholder="Type a message..."
                className="flex-1 px-3 py-2 rounded-full text-xs outline-none"
                style={{
                  background: "white",
                  border: "1px solid rgba(0,0,0,0.08)",
                  color: "#333",
                  fontFamily: "Inter, sans-serif",
                }}
              />
              <button
                onClick={() => openWhatsApp()}
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150 hover:scale-110 active:scale-95"
                style={{ background: "linear-gradient(135deg, #25D366, #128C7E)" }}
              >
                <Send size={15} color="white" />
              </button>
            </div>
          </div>
        )}

        {/* Floating Button */}
        <div className="relative">
          {/* Notification badge */}
          {showBadge && !isOpen && (
            <div
              className="absolute -top-2 -left-2 w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] font-bold z-10"
              style={{ background: "#F5A000", boxShadow: "0 2px 8px rgba(245,160,0,0.5)" }}
            >
              1
            </div>
          )}

          {/* Pulse rings */}
          {showPulse && !isOpen && (
            <>
              <span
                className="absolute inset-0 rounded-full animate-ping opacity-30"
                style={{ background: "#25D366" }}
              />
              <span
                className="absolute inset-0 rounded-full animate-ping opacity-20"
                style={{ background: "#25D366", animationDelay: "0.4s" }}
              />
            </>
          )}

          <button
            onClick={handleToggle}
            className="relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #25D366, #128C7E)",
              boxShadow: "0 6px 24px rgba(37,211,102,0.45)",
            }}
            aria-label="Chat on WhatsApp"
          >
            {isOpen ? (
              <X size={24} color="white" />
            ) : (
              <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0)    scale(1);    }
        }
      `}</style>
    </>
  );
}
