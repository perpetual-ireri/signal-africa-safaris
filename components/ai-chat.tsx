"use client";

import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
};

const quickReplies = [
  "Kenya safaris",
  "Gorilla trekking",
  "Beach holidays",
  "Best time to visit",
  "Pricing",
];

// Simple rule-based responses (no backend needed)
const getBotResponse = (input: string): string => {
  const text = input.toLowerCase();

  if (text.includes("kenya") || text.includes("migration") || text.includes("maasai")) {
    return "🇰🇪 Kenya is our home turf! Our most popular packages include:\n\n• 3-Day Maasai Mara — from KShs 20,633\n• 4-Day Amboseli with Kilimanjaro views\n• 7-Day Beach & Safari Combo\n\nWould you like me to send you a detailed quote? Click the WhatsApp button below or share your travel dates here.";
  }
  if (text.includes("gorilla") || text.includes("uganda") || text.includes("rwanda") || text.includes("bwindi")) {
    return "🦍 Gorilla trekking is a once-in-a-lifetime experience! We offer:\n\n• Uganda — Bwindi Forest (from $1,800)\n• Rwanda — Volcanoes NP (from $2,200)\n\nPermits need to be booked 3-6 months in advance. When are you planning to travel?";
  }
  if (text.includes("beach") || text.includes("diani") || text.includes("zanzibar") || text.includes("mombasa")) {
    return "🏖️ Perfect choice! Our beach packages:\n\n• Diani Beach & Safari Combo — 7 days from $1,200\n• Zanzibar Beach & Safari — 8 days from $1,950\n• Mombasa SGR Package — 3 days from KShs 16,500\n\nShould I connect you with a consultant to customize this?";
  }
  if (text.includes("best time") || text.includes("when") || text.includes("season")) {
    return "📅 Best time to visit Kenya:\n\n• July–October — Great Migration + dry season (ideal for wildlife)\n• January–March — Dry, fewer crowds\n• April–May & November — Green season, lower prices\n\nWhat month are you thinking?";
  }
  if (text.includes("price") || text.includes("cost") || text.includes("how much") || text.includes("budget")) {
    return "💰 Our pricing tiers:\n\n• Budget safaris — from $350/person\n• Mid-range — from $400/person\n• Luxury fly-in — from $700+/person\n\nEach quote is tailored to your dates, group size and comfort level. Share your details and I'll get a consultant to send you a personalized quote within 24 hours.";
  }
  if (text.includes("custom") || text.includes("tailor") || text.includes("private")) {
    return "🎯 Absolutely — every safari we design is tailor-made. Just tell us:\n\n• Your travel dates\n• Number of travellers (and ages if kids)\n• Budget level (budget / mid-range / luxury)\n• Must-see destinations\n\nOr click the WhatsApp button below for instant chat with a human consultant.";
  }
  if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
    return "👋 Hello! Welcome to Adequate Safaris. I'm here to help you plan your dream African adventure.\n\nWhat kind of safari interests you — wildlife, gorillas, beaches, or something else?";
  }
  if (text.includes("thank")) {
    return "🙏 You're welcome! Feel free to reach out anytime via WhatsApp. Safari njema!";
  }
  return "Thanks for your message! For personalized help, our safari consultants can answer this best.\n\nClick the WhatsApp button below to chat directly, or try asking about: Kenya safaris, gorilla trekking, beach holidays, or pricing.";
};

type AIChatProps = {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};

export default function AIChat({ isOpen, onClose, onOpen }: AIChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      from: "bot",
      text: "👋 Hi! I'm your safari assistant. Ask me anything about our tours, destinations, or pricing — or tap a quick reply below.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, [messages, isOpen]);

  const handleSend = (text?: string) => {
    const messageText = (text ?? input).trim();
    if (!messageText) return;

    const userMsg: Message = { id: Date.now(), from: "user", text: messageText };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMsg: Message = {
        id: Date.now() + 1,
        from: "bot",
        text: getBotResponse(messageText),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Floating trigger button (when chat is closed) */}
      {!isOpen && (
        <button
          onClick={onOpen}
          aria-label="Open AI assistant"
          className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#1f5e3b] to-[#14291f] text-white shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
        >
          <MessageCircle size={24} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#d4a24c] rounded-full border-2 border-white animate-pulse" />
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[min(92vw,400px)] h-[min(80vh,600px)] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#1f5e3b] to-[#14291f] text-white px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#d4a24c] text-[#14291f] flex items-center justify-center">
                <Sparkles size={18} />
              </div>
              <div>
                <div className="font-brand font-bold text-lg leading-tight">
                  Safari Assistant
                </div>
                <div className="text-[11px] text-[#d4a24c] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                  Online now
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close chat"
              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#f7f4ed]">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                    m.from === "user"
                      ? "bg-[#1f5e3b] text-white rounded-br-sm"
                      : "bg-white text-[#14291f] shadow-sm rounded-bl-sm border border-gray-100"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.15s" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.3s" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          <div className="px-3 pt-3 pb-1 bg-white border-t border-gray-100 flex flex-wrap gap-2">
            {quickReplies.map((q) => (
              <button
                key={q}
                onClick={() => handleSend(q)}
                className="text-xs bg-[#f3f8f1] hover:bg-[#e8f0e6] text-[#1f5e3b] font-medium px-3 py-1.5 rounded-full transition-colors border border-[#1f5e3b]/10"
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2.5 rounded-full bg-[#f7f4ed] border border-gray-200 text-sm focus:outline-none focus:border-[#1f5e3b] focus:ring-2 focus:ring-[#1f5e3b]/20"
              />
              <button
                type="submit"
                aria-label="Send message"
                className="w-10 h-10 rounded-full bg-[#1f5e3b] text-white flex items-center justify-center hover:bg-[#164a2e] transition-colors shrink-0"
              >
                <Send size={16} />
              </button>
            </form>

            {/* WhatsApp handoff */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 text-xs text-[#25D366] hover:text-[#1ebe5a] font-medium transition-colors"
            >
              <MessageCircle size={14} /> Talk to a human on WhatsApp →
            </a>
          </div>
        </div>
      )}
    </>
  );
}