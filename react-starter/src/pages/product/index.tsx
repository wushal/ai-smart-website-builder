import { useTranslation } from "react-i18next";
import { useAppStore } from "@/config/store";
import { motion } from "framer-motion";
import { Cloud, Database, Shield, Network, Cpu, Globe, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "@/components/ui/ImageUpload";

const products = [
  { icon: Cloud, key: "product.ecs", num: "01", color: "bg-blue-600" },
  { icon: Database, key: "product.db", num: "02", color: "bg-emerald-600" },
  { icon: Shield, key: "product.sec", num: "03", color: "bg-rose-600" },
  { icon: Network, key: "product.cdn", num: "04", color: "bg-purple-600" },
  { icon: Cpu, key: "product.bigdata", num: "05", color: "bg-orange-600" },
  { icon: Globe, key: "product.ops", num: "06", color: "bg-cyan-600" },
];

export default function ProductPage() {
  const { t } = useTranslation();
  const { theme } = useAppStore();
  const isDark = theme === "dark";
  const navigate = useNavigate();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className={`absolute inset-0 ${isDark ? "bg-slate-950" : "bg-slate-50"}`} />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <div className={`text-sm font-semibold tracking-widest uppercase mb-4 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
              {t("home.features.title")}
            </div>
            <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${isDark ? "text-white" : "text-slate-900"}`}>
              {t("product.page.title")}
            </h1>
            <p className={`text-xl max-w-xl ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              {t("product.page.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* 产品列表 - 图文交错 */}
      <section className={`py-20 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6">
          {products.map((p, i) => {
            const Icon = p.icon;
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={p.key}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-16 ${
                  i !== products.length - 1 ? (isDark ? "border-b border-slate-800" : "border-b border-slate-100") : ""
                }`}
              >
                {/* 图片区域 - 预留上传入口 */}
                <div className={`lg:w-1/2 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className={`aspect-[4/3] rounded-2xl overflow-hidden ${isDark ? "bg-slate-800" : "bg-slate-100"}`}>
                    <ImageUpload
                      className="w-full h-full rounded-2xl"
                      placeholder={`${t(p.key + ".title")} - ${t("lang.zh")}`}
                      rounded={false}
                    />
                  </div>
                </div>

                {/* 文字区域 */}
                <div className={`lg:w-1/2 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className={`text-6xl font-bold ${isDark ? "text-slate-800" : "text-slate-100"}`}>{p.num}</span>
                    <div className={`w-12 h-12 rounded-xl ${p.color} flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <h3 className={`text-3xl font-bold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>
                    {t(p.key + ".title")}
                  </h3>
                  <p className={`text-lg leading-relaxed mb-6 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    {t(p.key + ".desc")}
                  </p>
                  <button
                    onClick={() => navigate("/pricing")}
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition ${
                      isDark ? "text-blue-400 hover:text-blue-300" : "text-blue-600 hover:text-blue-700"
                    }`}
                  >
                    {t("pricing.buy")}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className={`py-24 ${isDark ? "bg-slate-900" : "bg-slate-900"}`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t("product.cta")}</h2>
          <button
            onClick={() => navigate("/pricing")}
            className="mt-6 px-8 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition"
          >
            {t("product.cta.btn")}
          </button>
        </div>
      </section>
    </div>
  );
}