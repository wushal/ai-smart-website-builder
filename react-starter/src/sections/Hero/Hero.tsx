import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { TrendingUp, Shield, Zap, Globe, ArrowRight, Play, Sparkles } from "lucide-react";
import Typewriter from "@/components/motion/Typewriter";
import { useAppStore } from "@/config/store";
import { useNavigate } from "react-router-dom";

interface Props {
  onConsultClick?: () => void;
}

export default function Hero({ onConsultClick }: Props) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { theme } = useAppStore();
  const isDark = theme === "dark";

  const stats = [
    { icon: <TrendingUp className="w-5 h-5" />, value: "1000+", label: t("home.stats.clients") },
    { icon: <Shield className="w-5 h-5" />, value: "99.99%", label: t("home.stats.uptime") },
    { icon: <Zap className="w-5 h-5" />, value: "10ms", label: t("home.stats.response") },
    { icon: <Globe className="w-5 h-5" />, value: "200+", label: t("home.stats.nodes") },
  ];

  // 环绕式背景文案
  const ringWords = [
    "CLOUD · ", "DATA · ", "SECURITY · ", "ANALYTICS · ",
    "GLOBAL · ", "RELIABLE · ", "FAST · ", "SMART · ",
  ];

  return (
    <section
      className={`relative overflow-hidden pt-32 pb-20 ${
        isDark
          ? "bg-slate-950 text-white"
          : "bg-gradient-to-br from-slate-50 via-white to-blue-50/30 text-slate-900"
      }`}
    >
      {/* 背景动效 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <div
          className={`absolute inset-0 ${isDark ? "opacity-30" : "opacity-50"}`}
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${
              isDark ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.05)"
            } 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* 左侧环绕文字 */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="flex flex-col gap-3 pl-6">
          {ringWords.slice(0, 4).map((word, i) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 0.08, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.8 }}
              className="text-xs font-bold tracking-[0.3em] uppercase whitespace-nowrap"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              {word.repeat(3)}
            </motion.div>
          ))}
        </div>
      </div>

      {/* 右侧环绕文字 */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="flex flex-col gap-3 pr-6">
          {ringWords.slice(4).map((word, i) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 0.08, x: 0 }}
              transition={{ delay: 0.8 + i * 0.1, duration: 0.8 }}
              className="text-xs font-bold tracking-[0.3em] uppercase whitespace-nowrap"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              {word.repeat(3)}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* 顶部标签 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium ${
              isDark
                ? "bg-blue-500/10 text-blue-300 border border-blue-500/20"
                : "bg-blue-50 text-blue-600 border border-blue-100"
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>十年沉淀 · 服务1000+企业</span>
            <ArrowRight className="w-3 h-3" />
          </div>
        </motion.div>

        {/* 主标题 */}
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
          >
            <span className="block mb-2">{t("home.title")}</span>
            <span className="block text-2xl md:text-3xl font-normal mt-6 opacity-80">
              让企业
              <Typewriter
                words={[t("home.typing1"), t("home.typing2"), t("home.typing3")]}
                className="ml-2 font-semibold text-blue-500"
              />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className={`mt-8 text-lg md:text-xl max-w-2xl mx-auto ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            {t("home.subtitle")}
          </motion.p>

          {/* 按钮组 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <button
              onClick={onConsultClick}
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              {t("home.cta_consult")}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => navigate("/cases")}
              className={`group inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium transition-all hover:-translate-y-0.5 ${
                isDark
                  ? "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  : "bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 shadow-sm"
              }`}
            >
              <Play className="w-4 h-4" />
              {t("home.cta_cases")}
            </button>
          </motion.div>
        </div>

        {/* 数据指标 - 黑色背景卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-20"
        >
          <div className="bg-slate-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl" />
            </div>
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-3 text-blue-400">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
