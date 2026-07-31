import { useTranslation } from "react-i18next";
import { useAppStore } from "@/config/store";
import { motion } from "framer-motion";
import { Target, TrendingUp, Users, Heart, MapPin, Phone, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "@/components/ui/ImageUpload";

const milestones = [
  { year: "2015", title: "公司成立", desc: "创始团队组建" },
  { year: "2017", title: "产品发布", desc: "首个云计算产品上线" },
  { year: "2019", title: "B轮融资", desc: "亿元级融资，业务扩张" },
  { year: "2021", title: "行业领先", desc: "客户突破1000家" },
  { year: "2023", title: "出海战略", desc: "全球化布局启动" },
  { year: "2025", title: "生态构建", desc: "500+合作伙伴" },
];

const values = [
  { icon: Target, title: "客户第一", desc: "以客户需求为导向" },
  { icon: TrendingUp, title: "追求极致", desc: "精益求精的态度" },
  { icon: Users, title: "开放协作", desc: "与合作伙伴共建生态" },
  { icon: Heart, title: "诚信担当", desc: "高度的责任感" },
];

export default function AboutPage() {
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
              {t("home.about.title")}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              {t("about.page.title")}
            </h1>
            <p className="text-xl text-slate-400">
              {t("about.page.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* 数据 */}
      <section className={`py-16 ${isDark ? "bg-slate-900" : "bg-slate-800"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: "1000+", label: t("about.stats.clients") },
              { num: "50+", label: t("about.stats.cities") },
              { num: "100+", label: t("about.stats.patents") },
              { num: "300+", label: t("about.stats.experts") },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.num}</div>
                <div className="text-slate-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 价值观 */}
      <section className={`py-28 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className={`text-sm font-semibold tracking-widest uppercase mb-3 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
              {t("about.culture.title")}
            </div>
            <h2 className={`text-4xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{t("about.culture.desc")}</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-2xl p-8 ${isDark ? "bg-slate-800" : "bg-slate-50"}`}
                >
                  <Icon className={`w-8 h-8 mb-4 ${isDark ? "text-blue-400" : "text-blue-600"}`} />
                  <h3 className={`text-xl font-bold mb-2 ${isDark ? "text-white" : "text-slate-900"}`}>{v.title}</h3>
                  <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>{v.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 发展历程 - 时间线 */}
      <section className={`py-28 ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className={`text-sm font-semibold tracking-widest uppercase mb-3 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
              {t("about.history.title")}
            </div>
            <h2 className={`text-4xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{t("about.history.desc")}</h2>
          </div>
          <div className="relative">
            <div className={`absolute left-0 md:left-1/2 top-0 bottom-0 w-px ${isDark ? "bg-slate-700" : "bg-slate-300"}`} />
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className={`absolute left-0 md:left-1/2 w-3 h-3 rounded-full -translate-x-1.5 ${isDark ? "bg-blue-500" : "bg-blue-600"}`} />
                <div className="ml-8 md:ml-0 md:w-1/2 md:px-12">
                  <div className={`text-3xl font-bold mb-1 ${isDark ? "text-white" : "text-slate-900"}`}>{m.year}</div>
                  <div className={`font-semibold mb-1 ${isDark ? "text-slate-200" : "text-slate-700"}`}>{m.title}</div>
                  <div className={`text-sm ${isDark ? "text-slate-500" : "text-slate-500"}`}>{m.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 团队 */}
      <section className={`py-28 ${isDark ? "bg-slate-950" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className={`text-sm font-semibold tracking-widest uppercase mb-3 ${isDark ? "text-blue-400" : "text-blue-600"}`}>
              {t("about.team.title")}
            </div>
            <h2 className={`text-4xl font-bold ${isDark ? "text-white" : "text-slate-900"}`}>{t("about.team.desc")}</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {["张明远 / CEO", "李晓峰 / CTO", "王芳 / VP Sales", "陈思远 / VP Product"].map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl overflow-hidden ${isDark ? "bg-slate-800" : "bg-slate-50"}`}
              >
                <div className="aspect-square">
                  <ImageUpload
                    className="w-full h-full"
                    placeholder={name.split(" / ")[0]}
                    rounded={false}
                  />
                </div>
                <div className="p-4">
                  <h4 className={`font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>{name.split(" / ")[0]}</h4>
                  <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>{name.split(" / ")[1]}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 联系 */}
      <section className={`py-28 ${isDark ? "bg-slate-900" : "bg-slate-900"}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: MapPin, label: t("about.contact.address"), value: "北京市海淀区中关村科技园" },
              { icon: Phone, label: t("about.contact.phone"), value: "400-888-9999" },
              { icon: Mail, label: t("about.contact.email"), value: "contact@company.com" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="text-center">
                  <Icon className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                  <div className="text-slate-400 text-sm mb-1">{item.label}</div>
                  <div className="text-white font-medium">{item.value}</div>
                </div>
              );
            })}
          </div>
          <div className="text-center flex gap-4 justify-center">
            <button
              onClick={() => navigate("/pricing")}
              className="px-8 py-3 rounded-full bg-white text-slate-900 font-semibold hover:bg-slate-100 transition"
            >
              {t("about.cta.book")}
            </button>
            <button
              onClick={() => navigate("/cases")}
              className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition"
            >
              {t("about.cta.cases")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}