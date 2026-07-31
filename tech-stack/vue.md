# 智能官网前端架构与 Vue 技术标准规范 (v1.0)

> **文档适用范围：** AI 驱动的智能官网前端项目生成器、组件库建设、动态 Schema 渲染引擎及云端沙盒（Sandpack / WebContainer）实时运行环境。  
> **制定原则：** **确定性优先（Deterministic）** > **高复用性（Reusable）** > **声明式动效（Declarative Motion）** > **类型安全（Type-Safe）**。

---

## 1. 总体架构与技术底座 (Tech Stack & Core Architecture)

为了保证 AI（LLM）生成的代码或 Schema 具备 **100% 编译通过率**、且在浏览器端沙盒中实现**即见即所得**的极速渲染，底层技术栈必须严格遵循以下标准配置：

| 技术层级 | 标准选型 | 版本要求 | 规范说明与准入原因 |
| :--- | :--- | :--- | :--- |
| **核心框架** | **Vue 3 + Vite** | Vue 3.4+ / Vite 5.x | 强制采用 **Composition API + `<script setup>`** 语法。采用 CSR（客户端渲染）架构，抛弃沉重的 SSR（如 Nuxt.js 复杂路由），确保在 WebContainer/Sandpack 中纯浏览器端极速编译。 |
| **编程语言** | **TypeScript** | TypeScript 5.x | **严格模式（Strict Mode）**。全量使用 `defineProps<T>()` 与 `defineEmits<T>()` 宏进行类型限制，杜绝 `any`，利用编译期检查消除 AI 生成时的类型隐式绑定报错。 |
| **样式引擎** | **Tailwind CSS** | Tailwind v3.4+ / v4 | **AI 代码生成的最佳拍档**。利用其原子化、确定性的类名消除组件样式冲突（CSS Collision）和全局样式污染。 |
| **组件底座** | **Shadcn Vue / Radix Vue** | 最新稳定版 | 无样式（Headless UI）无障碍组件库底座，通过 Tailwind 进行定制，保证高无障碍性（a11y）与极致的样式自定义自由度。 |
| **动画与动效** | **@vueuse/motion** | v2.x+ | Vue 生态标准的声明式动画库（对标 React 的 Framer Motion）。封装为预设的 `v-motion` 指令与变体词条，禁止 LLM 直接编写复杂的 JS 钩子动画。 |
| **平滑滚动** | **Lenis Scroll** | v1.x | 配合 Vue 核心生命周期封装，保证跨浏览器（尤其是独立站、科技风）的全站平滑惯性滚动体验。 |
| **状态管理** | **Pinia** | v2.x | Vue 官方轻量级模块化状态管理。专用于全局主题切换、智能客服侧边栏状态、多语言切换等轻量全局状态。 |
| **图标库** | **Lucide Vue Next**| v0.380+ (`lucide-vue-next`)| 统一图标库规范。AI 只需输出字符串名称（如 `'ArrowRight'`, `'ShieldCheck'`），前端利用 `<component :is="" />` 进行动态按需映射。 |

---

## 2. 工程目录与模块化设计 (Directory Structure)

标准的 AI 生成产物及底座工程目录结构如下，严格遵循 Vue 3 单文件组件（SFC）最佳实践：

```text
├── src/
│   ├── assets/              # 静态资源（基础 Logo、默认占位图常量）
│   ├── components/
│   │   ├── base/            # Shadcn Vue 基础原子组件 (Button, Badge, Card, Input)
│   │   ├── sections/        # [核心] 业务区块组件库 (HeroSection, FeatureMatrix 等)
│   │   ├── widgets/         # 独立挂件组件 (AIChatWidget, FloatingCTA, CookieBanner)
│   │   └── renderer/        # Schema 动态渲染引擎 (PageRenderer, SectionErrorBoundary)
│   ├── config/
│   │   ├── design-tokens.ts # 四大行业主题 CSS 变量与 Tailwind 映射配置
│   │   └── animations.ts    # @vueuse/motion 全局动画变体（Variants）预设常量池
│   ├── composables/         # 组合式函数 (useScrollReveal, useTheme, useChatStream)
│   ├── stores/              # Pinia 状态仓库 (useThemeStore, useChatStore)
│   ├── types/               # 全局 TypeScript 接口定义 (schema.d.ts, theme.d.ts)
│   ├── utils/               # 工具函数 (cn 样式合并, 校验解析函数)
│   ├── App.vue              # 应用根组件（包裹 Lenis 滚动与基础布局）
│   └── main.ts              # Vue 实例创建与 Pinia/Motion 插件挂载载体
├── public/                  # 公共静态文件
├── tailwind.config.ts       # Tailwind 配置文件（定义四大主题变量）
├── tsconfig.json            # 严格模式 TS 配置
└── package.json             # 明确锁定版本依赖（不可随意引入 Node 原生模块依赖）
```

---

## 3. Schema 驱动渲染层规范 (Schema-Driven Rendering Engine)

系统核心摒弃“AI 直接输出十几页散乱 `.vue` 源码”，而是强制要求 AI 输出 JSON Schema，由 `<PageRenderer />` 引擎进行解析与组装。利用 Vue 的动态组件 `<component :is="" />` 与 `onErrorCaptured` 异常捕获机制实现无懈可击的渲染。

### 3.1 页面引擎主渲染逻辑 (`PageRenderer.vue`)

```vue
<script setup lang="ts">
import { onErrorCaptured, ref, resolveComponent, type Component } from 'vue';
import type { SectionSchema } from '@/types/schema';
import SectionSkeleton from '@/components/renderer/SectionSkeleton.vue';

// 严格建立白名单映射表，防止 XSS 和未知组件渲染
import HeroSection from '@/components/sections/HeroSection.vue';
import FeatureMatrix from '@/components/sections/FeatureMatrix.vue';
import SocialProof from '@/components/sections/SocialProof.vue';
import FAQAccordion from '@/components/sections/FAQAccordion.vue';
import CallToAction from '@/components/sections/CallToAction.vue';
import Footer from '@/components/sections/Footer.vue';

const SECTION_MAP: Record<string, Component> = {
  HeroSection,
  FeatureMatrix,
  SocialProof,
  FAQAccordion,
  CallToAction,
  Footer,
};

const props = defineProps<{
  sections: SectionSchema[];
  theme: string;
}>();

// 错误边界状态记录
const errorSections = ref<Set<string>>(new Set());

onErrorCaptured((err, instance, info) => {
  console.warn('[PageRenderer Error Boundary]:', err, info);
  // 阻止错误向上传播导致整站白屏，记录当前出错模块并降级显示
  return false;
});

const getSectionComponent = (type: string): Component | null => {
  const comp = SECTION_MAP[type];
  if (!comp) {
    console.warn(`[PageRenderer] Unknown section type: ${type}`);
    return null;
  }
  return comp;
};
</script>

<template>
  <main :class="['min-h-screen w-full bg-background text-foreground', `theme-${theme}`]">
    <template v-for="(section, index) in sections" :key="section.id || `section-${index}`">
      <div v-if="errorSections.has(section.id)" class="p-4 text-center text-muted-foreground bg-destructive/10">
        模块 [{{ section.type }}] 加载异常，已启用安全降级
      </div>
      <Suspense v-else>
        <template #default>
          <component
            :is="getSectionComponent(section.type)"
            v-if="getSectionComponent(section.type)"
            v-bind="section.content"
            :animation-preset="section.animationPreset"
          />
        </template>
        <template #fallback>
          <SectionSkeleton/>
        </template>
      </Suspense>
    </template>
  </main>
</template>
```

---

## 4. 四大行业主题 Design Token 规范 (Design Tokens System)

通过 CSS 变量（CSS Variables）与 Tailwind 深度绑定，**绝对禁止在 Vue 组件的 `<style>` 或 `<template>` 中写死硬编码的十六进制颜色（如 `#3B82F6`）**，确保主题能在运行时一键无缝热切换。

### 4.1 Tailwind Token 映射规则 (`tailwind.config.ts`)

```typescript import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
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
| **医疗行业 (Medical)** | 洁净、严谨、治愈、值得信赖 | `0.5rem` (平滑中圆角) | 现代无衬线 (Inter / Noto Sans) | 深度信任蓝 `#1E40AF` / 治愈绿 `#059669` | 平缓过渡、拒绝跳视、突出咨询入口与认证背书 |
| **科技行业 (Tech)** | 极客、未来、动态、高密信息 | `0.75rem` 或 `1rem` | 极客无衬线 + 等宽字体 (JetBrains Mono) | 暗黑底色 `#0B0F19` + 荧光青紫 `#8B5CF6` / `#06B6D4` | 便当盒网格 (Bento)、毛玻璃、弹性平移、视差滚动 |
| **电商行业 (E-Commerce)**| 强转化、限时紧迫、高对比视觉 | `0.375rem` (紧凑有力) | 高识别度黑体 (Roboto / Montserrat) | 警示高光红 `#EF4444` / 活力橙 `#F97316` | 卡片快滑、购物车浮动反馈、倒计时脉冲动画 |
| **跨境独立站 (DTC)** | 极简欧美风、品牌叙事、大留白 | `0px` (无圆角锐利) 或 `2rem` (极圆) | 优雅衬线体 (Playfair Display) + 几何无衬线 | 高阶极简黑白 + 暖调大地色 (Terra Cotta / Olive) | 沉浸式全屏图文字、慢速镜头推拉、滚动叙事 |

---

## 5. 组件编写规范与 TypeScript 最佳实践 (Component Standards)

### 5.1 组件开发核心规则
1. **强制 `<script setup lang="ts">`**：统一使用 Vue 3 组合式语法糖，严禁使用 Options API（`data/methods`）或传统的 `Vue.extend`。
2. **默认值限制约束**：对组件 Props 的类型声明必须搭配 `withDefaults` 编译器宏使用，确保组件在 AI 未下发非必填字段时具备健康的默认渲染行为。
3. **样式合并约束**：外部传入的 `class` 属性合并必须通过 `cn()` 工具函数（基于 `clsx` + `tailwind-merge`）在 `:class` 绑定中执行，防止 Tailwind 样式优先级失效。
4. **第三方图标按需映射**：利用 Lucide Vue Next 的结构，通过解构或对象映射表配合 `<component :is="" />` 动态解析图标，杜绝全量注册导致包体积激增。

### 5.2 组件代码模板标准 (`FeatureMatrix.vue`)

```vue
<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '@/utils/cn';
import { getAnimationVariant } from '@/config/animations';
import * as Icons from 'lucide-vue-next';

export interface FeatureItem {
  title: string;
  description: string;
  iconName?: string;
  colSpan?: number;
}

export interface FeatureMatrixProps {
  sectionTitle: string;
  sectionSubtitle?: string;
  items?: FeatureItem[];
  animationPreset?: string;
  class?: string;
}

const props = withDefaults(defineProps<FeatureMatrixProps>(), {
  items: () => [],
  animationPreset: 'stagger-fade',
  class: '',
});

// 获取预设动画配置
const containerMotion = computed(() => getAnimationVariant(props.animationPreset));
const itemMotion = computed(() => getAnimationVariant('fade-in-up'));

// 动态获取图标组件
const getIconComponent = (iconName?: string) => {
  if (iconName && (Icons as Record<string, any>)[iconName]) {
    return (Icons as Record<string, any>)[iconName];
  }
  return Icons.CheckCircle2;
};
</script>

<template>
  <section :class="cn('py-20 px-6 md:px-12 bg-background w-full', props.class)">
    <div class="max-w-7xl mx-auto">
      <!-- 标题区域 -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          {{ sectionTitle }}
        </h2>
        <p v-if="sectionSubtitle" class="text-lg text-muted-foreground">
          {{ sectionSubtitle }}
        </p>
      </div>

      <!-- 动态网格布局：绑定 @vueuse/motion 动画指令 -->
      <div
        v-motion
        :initial="containerMotion.initial"
        :visible-once="containerMotion.visibleOnce"
        class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
      >
        <div
          v-for="(item, idx) in items"
          :key="idx"
          v-motion
          :initial="itemMotion.initial"
          :visible-once="itemMotion.visibleOnce"
          :class="cn(
            'p-8 rounded-lg bg-card border border-border shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/50 flex flex-col justify-between',
            item.colSpan === 2 && 'md:col-span-2',
            item.colSpan === 3 && 'md:col-span-3'
          )"
        >
          <div>
            <div class="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center text-primary mb-6">
              <component :is="getIconComponent(item.iconName)" class="w-6 h-6" />
            </div>
            <h3 class="text-xl font-semibold text-foreground mb-3">
              {{ item.title }}
            </h3>
            <p class="text-muted-foreground leading-relaxed">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
```

---

## 6. 动画与动效开发规范 (Motion & Animation Standards)

基于 **`@vueuse/motion`** 库制定标准化规范，保障整站渲染帧率恒定在 60 FPS：

### 6.1 动画性能四大守则
1. **只触发 `transform` 与 `opacity` 动画**：绝对禁止对 `width`、`height`、`top`、`left`、`margin`、`padding` 进行过渡动画，杜绝引发浏览器重排（Reflow / Layout Thrashing）。
2. **强制视口懒加载触发**：所有进场动画必须采用 `:visible-once` 绑定而非 `:enter`，确保元素进入浏览器可视窗口后才触发动效计算，降低页面加载首屏的 CPU 压力。
3. **硬件加速启用**：在频繁发生位置移动或缩放的 UI 卡片上，适度通过 Tailwind class 添加 `will-change-transform`。
4. **尊重无障碍减弱动画 (`prefers-reduced-motion`)**：在动画封装层引入 `@vueuse/core` 的 `usePreferredReducedMotion()` Hook，若侦测到用户开启减弱动效，自动剥离缩放与位移，退化为 `0.1s` 的纯透明度渐显。

### 6.2 标准预设动画池 (`config/animations.ts`)

```typescript import type { MotionVariants } from '@vueuse/motion';

export const ANIMATION_PRESETS: Record<string, MotionVariants> = {
  'fade-in-up': {
    initial: { opacity: 0, y: 30 },
    visibleOnce: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 600, ease: [0.16, 1, 0.3, 1] } 
    },
  },
  'spring-scale': {
    initial: { opacity: 0, scale: 0.92 },
    visibleOnce: { 
      opacity: 1, 
      scale: 1, 
      transition: { type: 'spring', damping: 20, stiffness: 300 } 
    },
  },
  'slow-zoom': {
    initial: { scale: 1.08, opacity: 0 },
    visibleOnce: { 
      scale: 1, 
      opacity: 1, 
      transition: { duration: 1200, ease: 'easeOut' } 
    },
  },
  'stagger-fade': {
    initial: { opacity: 0 },
    visibleOnce: {
      opacity: 1,
      transition: {
        staggerChildren: 120,
        delayChildren: 100,
      },
    },
  },
};

export const getAnimationVariant = (presetName?: string): MotionVariants => {
  if (!presetName || !ANIMATION_PRESETS[presetName]) {
    return ANIMATION_PRESETS['fade-in-up'];
  }
  return ANIMATION_PRESETS[presetName];
};
```

---

## 7. 智能客服挂件 `<AIChatWidget />` 集成规范

为了适应 Vue 的状态流转特征，挂件必须深度集成 **Pinia** 仓库以实现跨组件状态共识，支持流式渲染机制。

```text
+-----------------------------------------------------------------------+
|                    <AIChatWidget.vue> 架构边界                        |
|                                                                       |
|  +--------------------+      +-------------------------------------+  |
|  | 前端沙盒内预置Mock |      | 后端真实部署环境 (Production Zone)  |  |
|  |                    |      |                                     |  |
|  | [Pinia 存储会话流] |      |        [.env 环境变量配置]         |  |
|  | [消息气泡打字机UI] | ---> | VITE_AI_CHAT_ENDPOINT=https://...   |  |
|  | [基础场景常见问答] |      | VITE_AI_CHAT_PROTOCOL=sse/websocket |  |
|  +--------------------+      +-------------------------------------+  |
+-----------------------------------------------------------------------+
```

### 7.1 核心对接规范
1. **统一状态托管 (`useChatStore`)**：使用 Pinia 建立局部会话仓库，负责缓存问候语、会话消息队列、输入加载状态以及控制侧边栏面板的展开与折叠。
2. **双协议通信兼容**：底层对接逻辑通过 `src/composables/useChatStream.ts` 组合式函数承载，统一对接 **SSE (Server-Sent Events)** 与 **WebSocket** 通信协议。
3. **安全与防注入**：后端返回的 Markdown 流式文本在通过 `v-html` 渲染到气泡容器之前，必须经过 `DOMPurify.sanitize()` 严格净化，杜绝 XSS 注入漏洞。

---

## 8. 代码质量、测试与沙盒（Sandpack/WebContainer）交付规范

### 8.1 ESLint 与 Prettier 强制约束
* 引入 `@vue/eslint-config-typescript` 与 `eslint-plugin-vue`，启用 `vue3-recommended` 规则。
* 严禁越过 Vue 虚拟 DOM 机制进行原生 DOM 抓取（禁止使用 `document.querySelector`），所有模板 DOM 引用强制使用 `ref()` 绑定。
* `Prettier` 行宽定为 `100` 字符，使用单引号 `'`，禁止在 `<template>` 内写冗长的内联三元表达式，超过 2 个条件逻辑必须抽离为 `computed` 计算属性。

### 8.2 WebContainer / Sandpack 极速沙盒渲染适配
1. **依赖限制**：`package.json` 中的 `dependencies` 不得超过 15 个，严禁引入非必要的企业级重型 UI 全量包（如完整版 Element Plus 或 Vuetify），坚持采用 Headless 按需组件。
2. **Node 原生模块隔离**：浏览器端的 Vite 编译不支持原生 Node.js 的 `fs/path/crypto` 模块。工程内加密 ID、时间格式化等需求必须采用纯 JavaScript 的浏览器兼容库（如 `nanoid` 和 `dayjs`）。
3. **零本地媒体依赖**：所有静态素材、演示视频 URL、默认图标与实景图，一律通过 Unsplash 或公网高可用 CDN 外链承载，确保导出打包生成的 `.zip` 工程干净纯粹，开箱即建。

---

> **结语：** 本规范结合了 Vue 3 响应式系统极高的渲染效率与 Tailwind / Headless UI 的确定性，能有效支撑 AI 智能生成引擎高效构建出符合工业级标准的现代官网前端项目。