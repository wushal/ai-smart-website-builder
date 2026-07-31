import { Menu, X, Sun, Moon, Globe, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useAppStore, type Lang } from "@/config/store";

const langs: { code: Lang; label: string; flag: string }[] = [
  { code: "zh", label: "中文", flag: "🇨🇳" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "ko", label: "한국어", flag: "🇰🇷" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme, lang, setLang } = useAppStore();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const items = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.product"), href: "/product" },
    { label: t("nav.solution"), href: "/solution" },
    { label: t("nav.cases"), href: "/cases" },
    { label: t("nav.pricing"), href: "/pricing" },
    { label: t("nav.about"), href: "/about" },
  ];

  const currentLang = langs.find((l) => l.code === lang);

  const handleLangChange = (code: Lang) => {
    setLang(code);
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  const isDark = theme === "dark";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b transition-colors ${
        isDark
          ? "bg-slate-950/80 border-slate-800 text-white"
          : "bg-white/80 border-slate-200 text-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
            N
          </div>
          <span>NextCloud</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {items.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition ${
                location.pathname === item.href
                  ? isDark ? "text-white" : "text-slate-900"
                  : isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          {/* 语言切换 */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm transition ${
                isDark ? "hover:bg-slate-800" : "hover:bg-slate-100"
              }`}
            >
              <Globe className="w-4 h-4" />
              <span>{currentLang?.label}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  className={`absolute right-0 mt-2 w-40 rounded-xl shadow-lg border overflow-hidden ${
                    isDark ? "bg-slate-900 border-slate-800" : "bg-white border-slate-200"
                  }`}
                >
                  {langs.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => handleLangChange(l.code)}
                      className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm transition ${
                        lang === l.code
                          ? isDark ? "bg-slate-800" : "bg-slate-50"
                          : isDark ? "hover:bg-slate-800" : "hover:bg-slate-50"
                      }`}
                    >
                      <span>{l.flag}</span>
                      <span>{l.label}</span>
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* 主题切换 */}
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-lg transition ${
              isDark ? "hover:bg-slate-800" : "hover:bg-slate-100"
            }`}
            title={isDark ? t("theme.light") : t("theme.dark")}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <Link
            to="/pricing"
            className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition"
          >
            {t("nav.consult")}
          </Link>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden px-6 pb-6 border-t ${
              isDark ? "bg-slate-950 border-slate-800" : "bg-white border-slate-200"
            }`}
          >
            <div className="flex flex-col gap-3 pt-4">
              {items.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={`py-2 text-sm ${
                    location.pathname === item.href ? "font-semibold" : ""
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
                <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800">
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
                {langs.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => handleLangChange(l.code)}
                    className={`px-2 py-1 text-xs rounded ${
                      lang === l.code ? "bg-blue-100 text-blue-700" : ""
                    }`}
                  >
                    {l.flag} {l.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}