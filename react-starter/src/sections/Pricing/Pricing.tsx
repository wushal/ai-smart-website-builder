import { useTranslation } from "react-i18next";
import { useAppStore } from "@/config/store";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const plans = [
  {
    nameKey: "pricing.basic",
    price: "9,900",
    periodKey: "pricing.year",
    descKey: "pricing.basic.desc",
    features: [
      "10个用户账号",
      "50GB云存储",
      "工单技术支持",
      "每日数据备份",
      "API调用 1万/月",
    ],
  },
  {
    nameKey: "pricing.pro",
    price: "29,900",
    periodKey: "pricing.year",
    descKey: "pricing.pro.desc",
    features: [
      "无限用户账号",
      "500GB云存储",
      "7x24小时支持",
      "实时数据备份",
      "API调用 10万/月",
      "专属客户经理",
    ],
    highlight: true,
  },
  {
    nameKey: "pricing.enterprise",
    price: "pricing.custom",
    descKey: "pricing.enterprise.desc",
    features: [
      "无限用户与存储",
      "专属技术团队",
      "私有化部署",
      "定制化开发",
      "SLA服务保障",
      "客户成功团队",
    ],
  },
];

export default function Pricing() {
  const { t } = useTranslation();
  const { theme } = useAppStore();
  const isDark = theme === "dark";
  const navigate = useNavigate();

  return (
    <section className={`py-28 ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className={`text-sm font-semibold tracking-widest uppercase mb-3 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
            {t("home.pricing.title")}
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
            {t("home.pricing.desc")}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-4 items-stretch">
          {plans.map((plan, i) => {
            const isCustom = plan.price === "pricing.custom";
            return (
              <motion.div
                key={plan.nameKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 flex flex-col ${
                  plan.highlight
                    ? isDark
                      ? "bg-blue-600 text-white"
                      : "bg-blue-600 text-white shadow-xl shadow-blue-500/20"
                    : isDark
                    ? "bg-slate-800 text-slate-100 border border-slate-700"
                    : "bg-white text-slate-900 border border-slate-200"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-green-500 text-white text-xs font-semibold">
                    {t("pricing.popular")}
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-1">{t(plan.nameKey)}</h3>
                  <p className={`text-sm ${plan.highlight ? "text-white/70" : isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {t(plan.descKey)}
                  </p>
                </div>

                <div className="mb-8">
                  {isCustom ? (
                    <span className="text-4xl font-bold">{t(plan.price)}</span>
                  ) : (
                    <>
                      <span className={`text-sm ${plan.highlight ? "text-white/60" : isDark ? "text-slate-400" : "text-slate-400"}`}>¥</span>
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className={`text-sm ${plan.highlight ? "text-white/60" : isDark ? "text-slate-400" : "text-slate-400"}`}>/{t(plan.periodKey)}</span>
                    </>
                  )}
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlight ? "text-white/80" : isDark ? "text-blue-400" : "text-blue-600"}`} />
                      <span className={plan.highlight ? "text-white/90" : isDark ? "text-slate-300" : "text-slate-600"}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate("/pricing")}
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
  );
}