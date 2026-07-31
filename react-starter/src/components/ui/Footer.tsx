import { useAppStore } from "@/config/store";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const { theme } = useAppStore();
  const isDark = theme === "dark";

  const columns = [
    {
      title: "产品",
      links: [
        { label: "弹性云计算", href: "/product" },
        { label: "数据服务", href: "/product" },
        { label: "安全防护", href: "/product" },
      ],
    },
    {
      title: "方案",
      links: [
        { label: "金融科技", href: "/solution" },
        { label: "新零售", href: "/solution" },
        { label: "智慧医疗", href: "/solution" },
      ],
    },
    {
      title: "公司",
      links: [
        { label: "关于我们", href: "/about" },
        { label: "客户案例", href: "/cases" },
        { label: "价格方案", href: "/pricing" },
      ],
    },
  ];

  return (
    <footer
      className={`border-t ${
        isDark ? "bg-slate-950 border-slate-800 text-slate-300" : "bg-slate-50 border-slate-200 text-slate-600"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white">
                N
              </div>
              <span className={isDark ? "text-white" : "text-slate-900"}>NextCloud</span>
            </Link>
            <p className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}>
              助力企业数字化转型，共创智慧未来。
              我们以技术创新驱动业务增长，为1000+企业提供稳定可靠的服务。
            </p>
            <div className="flex gap-3 mt-6">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition ${
                    isDark ? "bg-slate-800 hover:bg-slate-700" : "bg-white hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Columns */}
          {columns.map((column) => (
            <div key={column.title}>
              <h4 className={`font-semibold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>{column.title}</h4>
              <ul className="space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className={`hover:underline ${isDark ? "hover:text-white" : "hover:text-slate-900"}`}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div
          className={`mt-12 pt-6 border-t text-sm flex flex-col md:flex-row justify-between gap-4 ${
            isDark ? "border-slate-800" : "border-slate-200"
          }`}
        >
          <span>© 2026 NextCloud. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:underline">隐私政策</a>
            <a href="#" className="hover:underline">服务条款</a>
            <a href="#" className="hover:underline">Cookie 设置</a>
          </div>
        </div>
      </div>
    </footer>
  );
}