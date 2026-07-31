import { useTranslation } from "react-i18next";
import { useAppStore } from "@/config/store";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    nameKey: "pricing.basic",
    price: "9,900",
    descKey: "pricing.basic.desc",
    features: ["10个用户账号", "50GB云存储", "工单技术支持", "每日数据备份", "API调用 1万/月"],
  },
  {
    nameKey: "pricing.pro",
    price: "29,900",
    descKey: "pricing.pro.desc",
    features: ["无限用户账号", "500GB云存储", "7x24小时支持", "实时数据备份", "API调用 10万/月", "专属客户经理"],
    highlight: true,
  },
  {
    nameKey: "pricing.enterprise",
    price: "pricing.custom",
    descKey: "pricing.enterprise.desc",
    features: ["无限用户与存储", "专属技术团队", "私有化部署", "定制化开发", "SLA服务保障", "客户成功团队"],
  },
];

const faqs = [
  { qKey: "pricing.faq.month", aKey: "pricing.faq.month.a" },
  { qKey: "pricing.faq.upgrade", aKey: "pricing.faq.upgrade.a" },
  { qKey: "pricing.faq.trial", aKey: "pricing.faq.trial.a" },
  { qKey: "pricing.faq.extra", aKey: "pricing.faq.extra.a" },
];

export default function PricingPage() {
  const { t } = useTranslation();
  const { theme } = useAppStore();
  const isDark = theme === "dark";
  const [billing, setBilling] = useState<"monthly" | "yearly">("yearly");

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className={`py-32 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className={`text-sm font-semibold tracking-widest uppercase mb-4 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
            {t("home.pricing.title")}
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>
            {t("pricing.page.title")}
          </h1>
          <p className={`text-xl max-w-xl mx-auto ${isDark ? "text-slate-400" : "text-slate-600"}`}>
            {t("pricing.page.desc")}
          </p>

          {/* 切换 */}
          <div className={`inline-flex items-center gap-2 p-1 rounded-full mt-10 ${isDark ? "bg-slate-800" : "bg-slate-100"}`}>
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                billing === "monthly" ? "bg-white text-slate-900 shadow-sm" : isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              月付
            </button>
            <button
              onClick={() => setBilling("yearly")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                billing === "yearly" ? "bg-white text-slate-900 shadow-sm" : isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              年付
            </button>
          </div>
        </div>
      </section>

      {/* 价格卡片 */}
      <section className={`py-10 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-4">
            {plans.map((plan, i) => {
              const isCustom = plan.price === "pricing.custom";
              const price = isCustom ? t(plan.price) : `¥${plan.price}`;
              return (
                <motion.div
                  key={plan.nameKey}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-3xl p-8 flex flex-col ${
                    plan.highlight
                      ? "bg-blue-600 text-white ring-4 ring-blue-600/20"
                      : isDark
                      ? "bg-slate-800 text-slate-100"
                      : "bg-slate-50 text-slate-900"
                  }`}
                >
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold">{t(plan.nameKey)}</h3>
                    <p className={`text-sm mt-1 ${plan.highlight ? "text-white/70" : isDark ? "text-slate-400" : "text-slate-500"}`}>
                      {t(plan.descKey)}
                    </p>
                  </div>

                  <div className="mb-8">
                    <span className="text-5xl font-bold">{price}</span>
                    {!isCustom && (
                      <span className={`text-sm ${plan.highlight ? "text-white/60" : isDark ? "text-slate-400" : "text-slate-400"}`}>
                        /{t("pricing.year")}
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-white/80" : isDark ? "text-blue-400" : "text-blue-600"}`} />
                        <span className={plan.highlight ? "text-white/90" : isDark ? "text-slate-300" : "text-slate-600"}>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-xl text-sm font-semibold transition ${
                      plan.highlight
                        ? "bg-white text-blue-600 hover:bg-slate-100"
                        : isDark
                        ? "bg-slate-700 text-white hover:bg-slate-600"
                        : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    {isCustom ? t("pricing.contact") : t("pricing.buy")}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`py-24 ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.qKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-2xl p-6 ${isDark ? "bg-slate-800" : "bg-white"}`}
              >
                <h4 className={`font-semibold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{t(faq.qKey)}</h4>
                <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>{t(faq.aKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}