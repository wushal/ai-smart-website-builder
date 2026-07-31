import { useTranslation } from "react-i18next";
import { useAppStore } from "@/config/store";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const caseList = [
  {
    company: "华盛银行",
    industry: "金融科技",
    metric: "99.999%",
    metricLabel: "系统可用性",
    desc: "核心系统分布式重构，支撑日均百万级交易",
    color: "bg-slate-800",
  },
  {
    company: "优选生鲜",
    industry: "新零售",
    metric: "30分钟",
    metricLabel: "平均送达",
    desc: "全渠道中台建设，大促期间零故障运行",
    color: "bg-emerald-700",
  },
  {
    company: "速达物流",
    industry: "智慧物流",
    metric: "-25%",
    metricLabel: "运输成本",
    desc: "智能调度平台，全国3000+网点数据贯通",
    color: "bg-blue-700",
  },
  {
    company: "仁和医院",
    industry: "医疗健康",
    metric: "-60%",
    metricLabel: "等待时间",
    desc: "集团级医疗云平台，20家医院数据共享",
    color: "bg-rose-700",
  },
];

export default function Cases() {
  const { t } = useTranslation();
  const { theme } = useAppStore();
  const isDark = theme === "dark";
  const navigate = useNavigate();

  return (
    <section className={`py-28 ${isDark ? "bg-slate-950" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className={`text-sm font-semibold tracking-widest uppercase mb-3 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
              {t("home.cases.title")}
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
              {t("home.cases.desc")}
            </h2>
          </div>
          <button
            onClick={() => navigate("/cases")}
            className={`group flex items-center gap-2 text-sm font-medium transition ${
              isDark ? "text-slate-400 hover:text-white" : "text-slate-500 hover:text-slate-900"
            }`}
          >
            查看全部案例
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bento 网格 - 大卡片 + 小卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {caseList.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => navigate("/cases")}
              className={`${item.color} text-white rounded-2xl p-8 md:p-10 cursor-pointer group relative overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl`}
            >
              {/* 装饰圆 */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/15 backdrop-blur">
                    {item.industry}
                  </span>
                </div>

                <div className="mb-6">
                  <div className="text-5xl md:text-6xl font-bold mb-1">{item.metric}</div>
                  <div className="text-white/60 text-sm">{item.metricLabel}</div>
                </div>

                <h3 className="text-2xl font-bold mb-2">{item.company}</h3>
                <p className="text-white/70 text-sm max-w-xs">{item.desc}</p>

                <div className="mt-8 flex items-center gap-2 text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                  查看详情
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
