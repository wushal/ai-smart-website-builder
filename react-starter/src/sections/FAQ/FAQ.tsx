import { useTranslation } from "react-i18next";
import { useAppStore } from "@/config/store";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqList = [
  { qKey: "faq.q1", aKey: "faq.a1" },
  { qKey: "faq.q2", aKey: "faq.a2" },
  { qKey: "faq.q3", aKey: "faq.a3" },
  { qKey: "faq.q4", aKey: "faq.a4" },
  { qKey: "faq.q5", aKey: "faq.a5" },
  { qKey: "faq.q6", aKey: "faq.a6" },
];

export default function FAQ() {
  const { t } = useTranslation();
  const { theme } = useAppStore();
  const isDark = theme === "dark";
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className={`py-28 ${isDark ? "bg-slate-950" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* 左侧标题区 */}
          <div className="lg:col-span-2">
            <div className={`text-sm font-semibold tracking-widest uppercase mb-3 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
              {t("home.faq.title")}
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold leading-tight mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>
              {t("home.faq.desc")}
            </h2>
            <p className={`${isDark ? "text-slate-400" : "text-slate-500"}`}>
              还有其他问题？随时联系我们的支持团队。
            </p>
          </div>

          {/* 右侧问答区 */}
          <div className="lg:col-span-3">
            {faqList.map((item, i) => (
              <motion.div
                key={item.qKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`border-b ${isDark ? "border-slate-800" : "border-slate-200"}`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                >
                  <span className={`text-lg font-medium transition ${openIndex === i ? (isDark ? "text-white" : "text-slate-900") : isDark ? "text-slate-300 group-hover:text-white" : "text-slate-600 group-hover:text-slate-900"}`}>
                    {t(item.qKey)}
                  </span>
                  <span
                    className={`text-xl font-light transition-transform duration-300 ${
                      openIndex === i ? "rotate-45" : ""
                    } ${isDark ? "text-slate-500" : "text-slate-400"}`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className={`pb-6 leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        {t(item.aKey)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}