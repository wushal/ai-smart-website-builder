import { useTranslation } from "react-i18next";
import { useAppStore } from "@/config/store";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const cases = [
  {
    company: "华盛银行",
    metric: "99.999%",
    label: "系统可用性",
    desc: "核心系统分布式重构，支撑日均百万级交易",
    color: "bg-slate-800",
    size: "lg",
  },
  {
    company: "优选生鲜",
    metric: "30分钟",
    label: "平均送达",
    desc: "全渠道中台建设，大促期间零故障运行",
    color: "bg-emerald-800",
    size: "sm",
  },
  {
    company: "速达物流",
    metric: "-25%",
    label: "运输成本",
    desc: "智能调度平台，全国3000+网点数据贯通",
    color: "bg-blue-800",
    size: "sm",
  },
  {
    company: "仁和医院",
    metric: "-60%",
    label: "等待时间",
    desc: "集团级医疗云平台，20家医院数据共享",
    color: "bg-rose-800",
    size: "lg",
  },
];

export default function CasesPage() {
  const { t } = useTranslation();
  const { theme } = useAppStore();
  const isDark = theme === "dark";
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className={`py-32 ${isDark ? "bg-slate-950" : "bg-slate-900"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold tracking-widest uppercase mb-4 text-blue-400">
              {t("home.cases.title")}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {t("cases.page.title")}
            </h1>
            <p className="text-xl text-slate-400">
              {t("cases.page.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Bento 网格布局 */}
      <section className={`py-20 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cases.map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`${item.color} text-white rounded-3xl p-8 md:p-12 cursor-pointer group relative overflow-hidden ${
                  item.size === "lg" ? "md:row-span-1" : ""
                }`}
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative">
                  <div className="mb-8">
                    <div className="text-6xl md:text-7xl font-bold mb-2">{item.metric}</div>
                    <div className="text-white/60 text-sm uppercase tracking-widest">{item.label}</div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{item.company}</h3>
                  <p className="text-white/70 text-sm max-w-sm">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 数据对比条 */}
      <section className={`py-20 ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "1000+", label: "服务客户" },
              { num: "50+", label: "覆盖城市" },
              { num: "300+", label: "技术专家" },
              { num: "10年", label: "行业深耕" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="py-8"
              >
                <div className={`text-4xl md:text-5xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{stat.num}</div>
                <div className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-24 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>
            {t("cases.cta")}
          </h2>
          <button
            onClick={() => navigate("/about")}
            className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            {t("nav.consult")}
          </button>
        </div>
      </section>
    </div>
  );
}