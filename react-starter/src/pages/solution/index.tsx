import { useTranslation } from "react-i18next";
import { useAppStore } from "@/config/store";
import { motion } from "framer-motion";
import { Building2, ShoppingCart, Truck, HeartPulse, GraduationCap, Landmark, CheckCircle, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const solutions = [
  { icon: Building2, key: "solution.finance", tag: "金融科技", color: "from-slate-700 to-slate-800", accent: "bg-slate-500" },
  { icon: ShoppingCart, key: "solution.retail", tag: "新零售", color: "from-emerald-700 to-emerald-800", accent: "bg-emerald-500" },
  { icon: Truck, key: "solution.logistics", tag: "智慧物流", color: "from-blue-700 to-blue-800", accent: "bg-blue-500" },
  { icon: HeartPulse, key: "solution.medical", tag: "医疗健康", color: "from-rose-700 to-rose-800", accent: "bg-rose-500" },
  { icon: GraduationCap, key: "solution.education", tag: "智慧教育", color: "from-purple-700 to-purple-800", accent: "bg-purple-500" },
  { icon: Landmark, key: "solution.gov", tag: "政务民生", color: "from-cyan-700 to-cyan-800", accent: "bg-cyan-500" },
];

export default function SolutionPage() {
  const { t } = useTranslation();
  const { theme } = useAppStore();
  const isDark = theme === "dark";
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className={`relative py-32 overflow-hidden ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className={`text-sm font-semibold tracking-widest uppercase mb-4 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
              {t("home.solution.title")}
            </div>
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>
              {t("solution.page.title")}
            </h1>
            <p className={`text-xl max-w-xl ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              {t("solution.page.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* 方案网格 - 默认有内容，hover有动效 */}
      <section className={`py-20 ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {solutions.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.key}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  onClick={() => navigate("/cases")}
                  className={`relative rounded-2xl overflow-hidden cursor-pointer group h-[340px] border-2 border-transparent transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${s.hover} ${isDark ? "bg-slate-800" : "bg-white"}`}
                >
                  {/* 顶部彩色条 - hover时变宽 */}
                  <div className={`absolute top-0 left-0 right-0 h-1 ${s.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />

                  {/* 渐变背景 - hover时淡入 */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500`} />

                  <div className="relative p-8 h-full flex flex-col justify-between">
                    <div>
                      {/* 图标 - 默认显示 */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${isDark ? "bg-slate-700 text-slate-300" : "bg-slate-100 text-slate-600"} group-hover:bg-white/20 group-hover:text-white`}>
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* 标签 */}
                      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 transition-colors duration-300 ${
                        isDark ? "bg-slate-700 text-slate-300" : "bg-slate-100 text-slate-600"
                      } group-hover:bg-white/20 group-hover:text-white`}>
                        {s.tag}
                      </div>

                      {/* 标题 - 默认可见 */}
                      <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${isDark ? "text-white" : "text-slate-900"} group-hover:text-white`}>
                        {t(s.key)}
                      </h3>

                      {/* 功能列表 - 默认可见，浅色显示 */}
                      <ul className="space-y-2">
                        {["核心系统上云", "数据中台建设", "智能决策平台"].map((item) => (
                          <li key={item} className={`flex items-center gap-2 text-sm transition-colors duration-300 ${isDark ? "text-slate-400" : "text-slate-500"} group-hover:text-white/80`}>
                            <CheckCircle className="w-4 h-4 flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 底部按钮 - 默认可见 */}
                    <div className={`flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${isDark ? "text-blue-400" : "text-blue-600"} group-hover:text-white`}>
                      {t("cases.results")}
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`py-24 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>
            {t("solution.cta")}
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
