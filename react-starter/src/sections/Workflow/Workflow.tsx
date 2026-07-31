import { useTranslation } from "react-i18next";
import { useAppStore } from "@/config/store";
import { motion } from "framer-motion";
import { MessageSquare, FileText, Code2, Rocket, RefreshCw } from "lucide-react";

const steps = [
  { icon: MessageSquare, num: "01", titleKey: "workflow.step1.title", descKey: "workflow.step1.desc" },
  { icon: FileText, num: "02", titleKey: "workflow.step2.title", descKey: "workflow.step2.desc" },
  { icon: Code2, num: "03", titleKey: "workflow.step3.title", descKey: "workflow.step3.desc" },
  { icon: Rocket, num: "04", titleKey: "workflow.step4.title", descKey: "workflow.step4.desc" },
  { icon: RefreshCw, num: "05", titleKey: "workflow.step5.title", descKey: "workflow.step5.desc" },
];

export default function Workflow() {
  const { t } = useTranslation();
  const { theme } = useAppStore();
  const isDark = theme === "dark";

  return (
    <section className={`py-28 ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className={`text-sm font-semibold tracking-widest uppercase mb-3 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
            {t("home.workflow.title")}
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>
            {t("home.workflow.desc")}
          </h2>
        </div>

        {/* 横向流程 - 大字号 + 细线连接 */}
        <div className="relative">
          {/* 连接线 */}
          <div className={`hidden lg:block absolute top-8 left-[8%] right-[8%] h-px ${isDark ? "bg-slate-700" : "bg-slate-300"}`} />

          <div className="grid md:grid-cols-5 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {/* 步骤编号 */}
                  <div className="relative z-10 mb-6">
                    <span className={`text-5xl font-bold tabular-nums ${isDark ? "text-slate-800" : "text-slate-200"}`}>
                      {step.num}
                    </span>
                  </div>

                  {/* 图标 */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      isDark ? "bg-slate-800 text-slate-300" : "bg-white text-slate-600 shadow-sm"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className={`text-lg font-semibold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>
                    {t(step.titleKey)}
                  </h3>
                  <p className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {t(step.descKey)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}