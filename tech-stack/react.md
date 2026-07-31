# 智能官网前端架构与 React 技术标准规范 (v1.0)

> **文档适用范围：** AI 驱动的智能官网前端项目生成器、组件库建设、动态 Schema 渲染引擎及云端沙盒（Sandpack / WebContainer）实时运行环境。  
> **制定原则：** **确定性优先（Deterministic）** > **高复用性（Reusable）** > **声明式动效（Declarative Motion）** > **类型安全（Type-Safe）**。

---

## 1. 总体架构与技术底座 (Tech Stack & Core Architecture)

为了保证 AI（LLM）生成的代码或 Schema 具备 **100% 编译通过率**、且在浏览器端沙盒中实现**即见即所得**的极速渲染，底层技术栈必须严格遵循以下标准配置：

| 技术层级 | 标准选型 | 版本要求 | 规范说明与准入原因 |
| :--- | :--- | :--- | :--- |
| **核心框架** | **React + Vite** | React 18.3+ / Vite 5.x | 采用 CSR（客户端渲染）架构，抛弃沉重的 SSR（如 Next.js 复杂路由），确保能在 WebContainer/Sandpack 中纯浏览器端编译运行。 |
| **编程语言** | **TypeScript** | TypeScript 5.x | **严格模式（Strict Mode）**。全量导出接口类型定义，杜绝 `any`，利用编译期检查消除 AI 生成时的隐式类型绑定报错。 |
| **样式引擎** | **Tailwind CSS** | Tailwind v3.4+ / v4 | **AI 代码生成的最佳拍档**。利用其原子化、确定性的类名消除样式冲突（CSS Collision）和全局样式污染。 |
| **组件底座** | **Shadcn/UI + Radix UI**| 最新稳定版 | 无样式（Headless UI）无障碍组件库底座，通过 Tailwind 进行定制，保证高无障碍性（a11y）和极端的样式自定义自由度。 |
| **动画与动效**| **Framer Motion** | v11.x+ | 声明式动画标准库。封装为预设的 `variants` JSON 词条，禁止 LLM 直接编写复杂的 JS 回调动画。 |
| **平滑滚动** | **Lenis Scroll** | v1.x | 保证跨浏览器（尤其是独立站、科技风）的全站平滑惯性滚动体验。 |
| **状态管理** | **Zustand** | v4.x | 轻量级原子化状态管理。专用于全局主题切换、智能客服侧边栏状态、多语言切换等轻量全局状态。 |
| **图标库** | **Lucide React** | v0.380+ | 统一图标库规范。AI 只需输出字符串名称（如 `'ArrowRight'`, `'ShieldCheck'`），前端进行动态按需映射。 |

---

## 2. 工程目录与模块化设计 (Directory Structure)

标准的 AI 生成产物及底座工程目录结构如下，任何新增组件或模板必须遵守单一职责原则：

```text
├── src/
│   ├── assets/              # 静态资源（基础 Logo、默认占位图常量）
│   ├── components/
│   │   ├── base/            # Shadcn 基础原子组件 (Button, Badge, Card, Input)
│   │   ├── sections/        # [核心] 业务区块组件库 (HeroSection, FeatureMatrix 等)
│   │   ├── widgets/         # 独立挂件组件 (AIChatWidget, FloatingCTA, CookieBanner)
│   │   └── renderer/        # Schema 动态渲染引擎 (PageRenderer, SectionErrorBoundary)
│   ├── config/
│   │   ├── design-tokens.ts # 四大行业主题 CSS 变量与 Tailwind 映射配置
│   │   └── animations.ts    # Framer Motion 全局动画预设常量池
│   ├── hooks/               # 自定义 Hooks (useScrollReveal, useTheme, useChatStream)
│   ├── types/               # 全局 TypeScript 接口定义 (schema.d.ts, theme.d.ts)
│   ├── utils/               # 工具函数 (cn 样式合并, 校验解析函数)
│   ├── App.tsx              # 应用入口（包裹 Lenis 滚动与 ThemeProvider）
│   └── main.tsx             # DOM 挂载载体
├── public/                  # 公共静态文件
├── tailwind.config.ts       # Tailwind 配置文件（定义四大主题变量）
├── tsconfig.json            # 严格模式 TS 配置
└── package.json             # 明确锁定版本依赖（不可随意引入 Node 原生模块依赖）
```

---

## 3. Schema 驱动渲染层规范 (Schema-Driven Rendering Engine)

系统核心摒弃“AI 直接输出十几页散乱 `.tsx` 源码”，而是强制要求 AI 输出 JSON Schema，由 `<PageRenderer />` 引擎进行解析与组装。

### 3.1 页面引擎主渲染逻辑 (`PageRenderer.tsx`)
渲染器必须内嵌 **Error Boundary（错误边界）** 与 **异常降级机制（Fallback UI）**。即便 AI 幻觉生成了不存在的组件名称，系统不能白屏，必须优雅降级：

```tsx import React, { Suspense } from 'react';
import { SectionSchema } from '@/types/schema';
import { ErrorBoundary } from '@/components/renderer/SectionErrorBoundary';
import { SectionSkeleton } from '@/components/renderer/SectionSkeleton';

// 严格建立白名单映射表，防止 XSS 和未知组件渲染
import { HeroSection } from '@/components/sections/HeroSection';
import { FeatureMatrix } from '@/components/sections/FeatureMatrix';
import { SocialProof } from '@/components/sections/SocialProof';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { CallToAction } from '@/components/sections/CallToAction';
import { Footer } from '@/components/sections/Footer';

const SECTION_MAP: Record<string, React.FC<any>> = {
  HeroSection,
  FeatureMatrix,
  SocialProof,
  FAQAccordion,
  CallToAction,
  Footer,
};

interface PageRendererProps {
  sections: SectionSchema[];
  theme: string;
}

export const PageRenderer: React.FC<PageRendererProps> = ({ sections, theme }) => {
  return (
    <main className={`min-h-screen w-full bg-background text-foreground theme-${theme}`}>
      {sections.map((section, index) => {
        const Component = SECTION_MAP[section.type];

        if (!Component) {
          console.warn(`[PageRenderer] Unknown section type: ${section.type}`);
          return null; // 或者返回一个未识别组件的专属占位符
        }

        return (
          <ErrorBoundary key={section.id || `section-${index}`} sectionType={section.type}>
            <Suspense fallback={<SectionSkeleton />}>
              <Component {...section.content} animationPreset={section.animationPreset} />
            </Suspense>
          </ErrorBoundary>
        );
      })}
    </main>
  );
};
```

---

## 4. 四大行业主题 Design Token 规范 (Design Tokens System)

为实现一键切换“医疗、科技、电商、跨境独立站”四大风格，必须通过 CSS 变量（CSS Variables）与 Tailwind 深度绑定，**绝对禁止在业务组件中写死硬编码的十六进制颜色（如 `#3B82F6`）**。

### 4.1 Tailwind Token 映射规则 (`tailwind.config.ts`)

```typescript import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
    },
  },
  plugins: [],
};

export default config;
```

### 4.2 四大风格专属规范与 CSS 变量特征

| 行业风格 | 视觉与气质核心 | 圆角 (`--radius`) | 字体体系 | 主色调特征 | 交互体验重点 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **医疗行业 (Medical)** | 洁净、严谨、治愈、值得信赖 | `0.5rem` (平滑中圆角) | 现代无衬线 (Inter / Noto Sans) | 深度信任蓝 `#1E40AF` / 治愈绿 `#059669` | 平缓过度、拒绝跳视、突出咨询入口与认证背书 |
| **科技行业 (Tech)** | 极客、未来、动态、高密信息 | `0.75rem` 或 `1rem` | 极客无衬线 + 等宽字体 (JetBrains Mono) | 暗黑底色 `#0B0F19` + 荧光青紫 `#8B5CF6` / `#06B6D4` | 便当盒网格 (Bento)、毛玻璃、弹性平移、视差滚动 |
| **电商行业 (E-Commerce)**| 强转化、限时紧迫、高对比视觉 | `0.375rem` (紧凑有力) | 高识别度黑体 (Roboto / Montserrat) | 警示高光红 `#EF4444` / 活力橙 `#F97316` | 卡片快滑、购物车浮动反馈、倒计时脉冲动画 |
| **跨境独立站 (DTC)** | 极简欧美风、品牌叙事、大留白 | `0px` (无圆角锐利) 或 `2rem` (极圆) | 优雅衬线体 (Playfair Display) + 几何无衬线 | 高阶极简黑白 + 暖调大地色 (Terra Cotta / Olive) | 沉浸式全屏图文字、慢速镜头推拉、滚动叙事 |

---

## 5. 组件编写规范与 TypeScript 最佳实践 (Component Standards)

### 5.1 组件开发核心规则
1. **纯函数式组件（Functional Components）**：统一使用 `React.FC<Props>` 或直接对解构参数进行类型推导，严禁使用 Class 组件。
2. **样式合并约束**：所有对外暴露 `className` Props 的组件，其内部样式合并必须统一使用 `cn()` 工具函数（基于 `clsx` + `tailwind-merge`），防止 Tailwind 类名覆盖失效。
3. **第三方图标动态映射**：严格采用 `<DynamicIcon name={iconName} />` 包装器，防止引入整个图标库包体导致打包内存溢出。

### 5.2 组件代码模板标准 (Standard Component Template)

```tsx import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { getAnimationVariant } from '@/config/animations';
import * as Icons from 'lucide-react';

export interface FeatureItem {
  title: string;
  description: string;
  iconName?: string;
  colSpan?: number;
}

export interface FeatureMatrixProps {
  sectionTitle: string;
  sectionSubtitle?: string;
  items: FeatureItem[];
  animationPreset?: string;
  className?: string;
}

export const FeatureMatrix: React.FC<FeatureMatrixProps> = ({
  sectionTitle,
  sectionSubtitle,
  items = [],
  animationPreset = 'stagger-fade',
  className,
}) => {
  const containerVariants = getAnimationVariant(animationPreset);

  return (
    <section className={cn('py-20 px-6 md:px-12 bg-background w-full', className)}>
      <div className="max-w-7xl mx-auto">
        {/* 标题区域 */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            {sectionTitle}
          </h2>
          {sectionSubtitle && (
            <p className="text-lg text-muted-foreground">{sectionSubtitle}</p>
          )}
        </div>

        {/* 动态网格布局 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {items.map((item, idx) => {
            // 动态图标获取
            const IconComponent = item.iconName && (Icons as any)[item.iconName] 
              ? (Icons as any)[item.iconName] 
              : Icons.CheckCircle2;

            return (
              <motion.div
                key={idx}
                variants={getAnimationVariant('fade-in-up')}
                className={cn(
                  'p-8 rounded-lg bg-card border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/50 flex flex-col justify-between',
                  item.colSpan === 2 && 'md:col-span-2',
                  item.colSpan === 3 && 'md:col-span-3'
                )}
              >
                <div>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
```

---

## 6. 动画与动效开发规范 (Motion & Animation Standards)

为了保障动画流畅度（FPS 恒定在 60），并适应不同使用者的硬件性能，所有动画开发必须遵循以下准则：

### 6.1 动画性能四大守则
1. **只触发 `transform` 与 `opacity` 动画**：绝对禁止对 `width`、`height`、`top`、`left`、`margin`、`padding` 进行过渡动画，杜绝引发浏览器重排（Reflow / Layout Thrashing）。
2. **强制视口懒加载触发**：所有进场动画必须配合 `whileInView="visible"` 与 `viewport={{ once: true, margin: "-50px" }}` 使用，保证页面加载首屏时不额外消耗 CPU 处理屏外计算。
3. **硬件加速启用**：在频繁发生位置移动或缩放的 UI 卡片上，适度添加 `will-change-transform` 属性。
4. **尊重无障碍减弱动画 (`prefers-reduced-motion`)**：使用 `framer-motion` 的 `useReducedMotion` Hook，若系统侦测到用户开启了减弱动效，则自动退化为最基础的 0.1s 极简渐显，关闭所有移位与平移弹性。

### 6.2 标准预设动画池 (`config/animations.ts`)

```typescript import { Variants } from 'framer-motion';

export const ANIMATION_PRESETS: Record<string, Variants> = {
  'fade-in-up': {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    },
  },
  'spring-scale': {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      transition: { type: 'spring', damping: 20, stiffness: 300 } 
    },
  },
  'slow-zoom': {
    hidden: { scale: 1.08, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 1.2, ease: 'easeOut' } 
    },
  },
  'stagger-fade': {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  },
};

export const getAnimationVariant = (presetName?: string): Variants => {
  if (!presetName || !ANIMATION_PRESETS[presetName]) {
    return ANIMATION_PRESETS['fade-in-up'];
  }
  return ANIMATION_PRESETS[presetName];
};
```

---

## 7. 智能客服挂件 `<AIChatWidget />` 集成规范

该组件作为“一句话描述”赋能业务闭环的核心引擎，必须具备通用对接能力和流式渲染响应规范。

```text
+-----------------------------------------------------------------------+
|                       <AIChatWidget /> 架构边界                       |
|                                                                       |
|  +--------------------+      +-------------------------------------+  |
|  | 前端沙盒内预置Mock |      | 后端真实部署环境 (Production Zone)  |  |
|  |                    |      |                                     |  |
|  |   [初识自动问候]   |      |        [.env 环境变量配置]         |  |
|  |   [消息气泡流式UI] | ---> | VITE_AI_CHAT_ENDPOINT=https://...   |  |
|  |   [基础场景常见问] |      | VITE_AI_CHAT_PROTOCOL=sse/websocket |  |
|  +--------------------+      +-------------------------------------+  |
+-----------------------------------------------------------------------+
```

### 7.1 核心对接规范
1. **通信协议标准**：预留支持 **SSE (Server-Sent Events)** 流式文本响应与 **WebSocket** 两种接口协议。在前端导出项目时，通过抽象层 `src/services/chatService.ts` 进行统一通信。
2. **无缝 Mock 降级**：在沙盒未接入真实后端 API 之前，系统必须内置针对当期主题（医疗、科技等）的预置智能 Mock 对话脚本，使用户在沙盒预览期就能体验流畅的“打字机”流式回答效果。
3. **安全与防注入**：对于后端返回的 Markdown 文本解析，必须经过 DOMPurify 净化处理，防止跨站脚本攻击（XSS）。

---

## 8. 代码质量、测试与沙盒（Sandpack/WebContainer）交付规范

前端代码一键导出为压缩包（`.zip`）或直接推送到 GitHub/在线代码沙盒前，必须经历自动化的格式校正与沙盒兼容性检查。

### 8.1 ESLint 与 Prettier 强制约束
* 禁用未使用变量（`no-unused-vars` 警告，严禁发生由于存在未使用 import 导致 Vite 编译终断）。
* 强制要求所有 DOM 操作必须通过 `useRef` 闭包获取，禁止使用 `document.getElementById` 等直接越过 React 虚拟 DOM 树的原生查找指令。
* `Prettier` 设置为单引号 `'`，行宽配置为 `100` 字符，缩进格式必须为 `2` 个空格。

### 8.2 沙盒极速渲染适配规范
为了保障 Sandpack 或 WebContainer 内在 **3 秒内**完成初始化依赖安装并渲染画面：
1. **依赖包数量严控**：`package.json` 中的 `dependencies` 不得超过 15 个，严禁引入非必要的重量级 UI 套件（如 Ant Design 或 Material UI 完整包体）。
2. **纯粹 Node.js 扩展剔除**：第三方工具包中如果依赖了底层的 `fs`、`path`、`crypto` 等 Node 原生模块，在浏览器 WebContainer 环境下极易报错。必须采用纯 JS/TS 实现的轻量同等工具库替换（如使用 `uuid` 或 `nanoid` 代替原生加密 ID）。
3. **资源统一网络化**：在模板生成的初筛期，页面内部所有摄影占位图、示范视屏链接、品牌 Logo 等，必须全部指向稳定的高质量公网 CDN（如 Unsplash 静态裁剪 CDN URL 或 JSDelivr 白名单地址），确保沙盒工程零大体积本地静态文件加载。

---

> **结语：** 遵守本套标准，系统不仅能够将“一句话”高效映射为商业成熟度极高的 React 代码，更能确保项目具备专业前端团队级别的可维护性、高拓展性以及最佳的视觉响应表现。
