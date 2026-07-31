import { useTranslation } from "react-i18next";
import { useAppStore } from "@/config/store";
import { motion } from "framer-motion";
import { Server, Shield, Zap, Globe, BarChart3, Lock } from "lucide-react";

const featureList = [
  { icon: Server, titleKey: "features.cloud.title", descKey: "features.cloud.desc", accent: "blue" },
  { icon: Shield, titleKey: "features.security.title", descKey: "features.security.desc", accent: "green" },
  { icon: Zap, titleKey: "features.speed.title", descKey: "features.speed.desc", accent: "orange" },
  { icon: Globe, titleKey: "features.global.title", descKey: "features.global.desc", accent: "purple" },
  { icon: BarChart3, titleKey: "features.analytics.title", descKey: "features.analytics.desc", accent: "red" },
  { icon: Lock, titleKey: "features.compliance.title", descKey: "features.compliance.desc", accent: "cyan" },
];

export default function Features() {
  const { t } = useTranslation();
  const { theme } = useAppStore();
  const isDark = theme === "dark";

  return (
    <section className={`py-28 ${isDark ? "bg-slate-950" : "bg-white"}`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header - 左侧大标题右侧描述，不对称布局 */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-6">
          <div>
            <div className={`text-sm font-semibold tracking-widest uppercase mb-3 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
              {t("home.features.title")}
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold leading-tight max-w-xl ${isDark ? "text-white" : "text-slate-900"}`}>
              {t("home.features.desc")}
            </h2>
          </div>
          <p className={`max-w-sm text-lg ${isDark ? "text-slate-400" : "text-slate-500"}`}>
            十年技术沉淀，覆盖云、数、安、智全链路
          </p>
        </div>

        {/* 非对称布局 - 前3个一行，后3个偏移 */}
        <div className="grid md:grid-cols-3 gap-px bg-slate-200 dark:bg-slate-800 rounded-3xl overflow-hidden">
          {featureList.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`group p-8 md:p-10 transition-colors cursor-default ${
                  isDark ? "bg-slate-950 hover:bg-slate-900" : "bg-white hover:bg-slate-50"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${
                    f.accent === "blue"
                      ? "bg-blue-500/10 text-blue-500"
                      : f.accent === "green"
                      ? "bg-green-500/10 text-green-500"
                      : f.accent === "orange"
                      ? "bg-orange-500/10 text-orange-500"
                      : f.accent === "purple"
                      ? "bg-purple-500/10 text-purple-500"
                      : f.accent === "red"
                      ? "bg-red-500/10 text-red-500"
                      : "bg-cyan-500/10 text-cyan-500"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${isDark ? "text-white" : "text-slate-900"}`}>
                  {t(f.titleKey)}
                </h3>
                <p className={`leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  {t(f.descKey)}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}