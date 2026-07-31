import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useAppStore } from "@/config/store";
import api from "../../../services/api";

interface Message {
  id: number;
  text: string;
  from: "user" | "support";
  time: string;
}

export default function ChatWindow() {
  const { t } = useTranslation();
  const { theme, setChatOpen } = useAppStore();
  const isDark = theme === "dark";
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: t("chat.welcome"),
      from: "support",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  const quickQuestions = [
    { label: t("chat.q1"), message: "请问价格是怎么样的？" },
    { label: t("chat.q2"), message: "服务流程是怎样的？" },
    { label: t("chat.q3"), message: "我想联系销售" },
    { label: t("chat.q4"), message: "我有一些技术问题" },
  ];

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text,
      from: "user",
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // 调用后端 API
    try {
      const res: any = await api.chat.send({ message: text });
      const reply = res?.data?.message || "感谢您的咨询，我们的顾问会尽快与您联系。";
      const supportMsg: Message = {
        id: Date.now() + 1,
        text: reply,
        from: "support",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, supportMsg]);
    } catch (error) {
      // 静默失败
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        className={`fixed bottom-24 right-6 w-[380px] h-[560px] rounded-2xl shadow-2xl border overflow-hidden z-50 flex flex-col ${
          isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
        }`}
      >
        {/* 顶部 */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">
              💬
            </div>
            <div>
              <div className="font-semibold">{t("chat.title")}</div>
              <div className="text-xs text-white/80 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full" />
                在线
              </div>
            </div>
          </div>
          <button
            onClick={() => setChatOpen(false)}
            className="text-white/80 hover:text-white text-xl"
          >
            ×
          </button>
        </div>

        {/* 消息列表 */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2.5 text-sm ${
                  msg.from === "user"
                    ? "bg-blue-600 text-white"
                    : isDark
                    ? "bg-slate-800 text-slate-100"
                    : "bg-slate-100 text-slate-900"
                }`}
              >
                <div>{msg.text}</div>
                <div
                  className={`text-[10px] mt-1 ${
                    msg.from === "user" ? "text-white/70" : isDark ? "text-slate-500" : "text-slate-400"
                  }`}
                >
                  {msg.time}
                </div>
              </div>
            </motion.div>
          ))}

          {/* 快捷问题 */}
          {messages.length === 1 && (
            <div className="pt-2">
              <div className={`text-xs mb-2 ${isDark ? "text-slate-500" : "text-slate-400"}`}>
                {t("chat.quick_questions")}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {quickQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => sendMessage(q.message)}
                    className={`text-xs px-3 py-2 rounded-lg border text-left transition ${
                      isDark
                        ? "border-slate-700 hover:bg-slate-800 text-slate-300"
                        : "border-slate-200 hover:bg-slate-50 text-slate-700"
                    }`}
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 输入框 */}
        <div className={`p-3 border-t ${isDark ? "border-slate-800" : "border-slate-200"}`}>
          <div className="flex items-center gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
              placeholder={t("chat.placeholder")}
              className={`flex-1 px-4 py-2.5 rounded-full text-sm outline-none transition ${
                isDark
                  ? "bg-slate-800 text-white placeholder:text-slate-500 focus:bg-slate-700"
                  : "bg-slate-100 text-slate-900 placeholder:text-slate-400 focus:bg-slate-50 focus:ring-2 focus:ring-blue-500"
              }`}
            />
            <button
              onClick={() => sendMessage(input)}
              className="px-4 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition"
            >
              {t("chat.send")}
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}