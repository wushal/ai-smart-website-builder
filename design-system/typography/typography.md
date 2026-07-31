# Website Typography System（官网字体排版系统）

> 基于 motionsites.ai 及现代高级官网设计语言拆解，涵盖标题、正文、标签、导航的完整字体排版规范。可作为 AI 生成官网时的审美约束。

---

## 一、Design Goals（设计目标）

### 1.1 标题职责

标题负责建立**第一视觉冲击**。官网标题必须：

- 简洁
- 强识别度
- 高视觉权重
- 支撑品牌定位

### 1.2 正文职责

正文负责：

- 信息解释
- 产品说明
- 用户理解

### 1.3 整体原则

| 原则 | 说明 |
|------|------|
| 层级分明 | 标题与正文的字号、字重对比必须足够大（≥2:1） |
| 阅读舒适 | 正文行高 1.6-1.8，段宽不超过 720px |
| 品牌一致 | 全站最多 2 种字体（1 标题 + 1 正文） |
| 克制用字 | 能用短句就不用长句，能用一行就不用两行 |

---

## 二、Font Family（字体选择）

### 2.1 英文字体

**优先级排序：**

| 字体 | 特点 | 适用场景 | 参考案例 |
|------|------|---------|---------|
| **Inter** | x-height 大，屏幕可读性极佳，可变字体 | 正文 + UI 通用 | Linear、Vercel、大量 SaaS |
| **Plus Jakarta Sans** | 友好现代，略带几何感 | 标题 + 正文 | 新兴品牌官网 |
| **Geist** | Vercel 自研，几何无衬线，代码/UI 优化 | 正文 + 代码 + 界面 | Vercel |
| **SF Pro Display** | Apple 自有，优雅精致 | Apple 生态产品 | Apple |

### 2.2 中文字体

| 字体 | 特点 | 来源 |
|------|------|------|
| **HarmonyOS Sans** | 华为自研，现代简约 | 开源 |
| **PingFang SC** | Apple 中文，优雅精致 | 系统 |
| **Noto Sans SC** | Google + Adobe，开源免费，字重齐全 | 开源 |
| **阿里巴巴普惠体** | 阿里自研，开源免费 | 开源 |

### 2.3 字体搭配方案

```css
/* 方案一：国际 SaaS（推荐） */
--font-heading: 'Plus Jakarta Sans', 'Inter', sans-serif;
--font-body:    'Inter', sans-serif;
--font-mono:    'JetBrains Mono', monospace;

/* 方案二：开发者工具 */
--font-heading: 'Geist', 'Inter', sans-serif;
--font-body:    'Geist', 'Inter', sans-serif;
--font-mono:    'JetBrains Mono', monospace;

/* 方案三：中文优先 */
--font-heading: 'HarmonyOS Sans', 'PingFang SC', 'Noto Sans SC', sans-serif;
--font-body:    'HarmonyOS Sans', 'PingFang SC', 'Noto Sans SC', sans-serif;

/* 方案四：创意品牌 */
--font-heading: 'SF Pro Display', 'Plus Jakarta Sans', sans-serif;
--font-body:    'Inter', sans-serif;
--font-mono:    'SF Mono', monospace;
```

### 2.4 硬性规则

- **禁止**超过 2 种无衬线字体混用
- **允许** 1 种无衬线 + 1 种等宽字体（代码场景）
- 衬线字体仅限品牌特殊需求，不可用于正文
- 中文页面优先使用系统中文字体，避免加载额外中文字体文件（体积过大）

---

## 三、Heading Scale（标题字号体系）

### 3.1 Hero Title（首屏大标题）

**用途：** 首页首屏、品牌核心信息

**Desktop：**

```css
font-size:      72px - 120px;
font-weight:    700 - 900;
line-height:    1.0 - 1.1;
letter-spacing: -0.03em;
text-transform: uppercase;  /* 可选，视品牌风格 */
```

**Mobile：**

```css
font-size:      40px - 56px;
line-height:    1.1 - 1.2;
```

**设计要求：**

- 超大字号，强视觉冲击
- 短句表达，一句话建立价值
- 支持渐变文字效果（MotionSites 风格）

**示例：**

```
科技产品：  Build the future with AI
医疗产品：  Healthcare intelligence powered by AI
SaaS 产品：  Ship faster, scale smarter
```

### 3.2 H1 — Page Title（页面标题）

**用途：** 各页面主标题、About 页、Pricing 页

```css
font-size:      48px - 72px;
font-weight:    700 - 800;
line-height:    1.1 - 1.2;
letter-spacing: -0.02em;
```

### 3.3 H2 — Section Title（章节标题）

**用途：** Features、Workflow、Pricing、Testimonials 等区块标题

```css
font-size:      36px - 56px;
font-weight:    700;
line-height:    1.2;
letter-spacing: -0.02em;
```

### 3.4 H3 — Subsection Title（子章节标题）

**用途：** 特性详细说明、FAQ 问题

```css
font-size:      24px - 32px;
font-weight:    600 - 700;
line-height:    1.3;
letter-spacing: -0.01em;
```

### 3.5 H4 — Card Title（卡片标题）

**用途：** 功能卡片、团队成员、博客卡片

```css
font-size:      20px - 28px;
font-weight:    600;
line-height:    1.3;
letter-spacing: 0;
```

### 3.6 H5 / H6 — Minor Heading（辅助标题）

**用途：** 标签、分组名、侧边栏标题

```css
/* H5 */
font-size:      16px - 18px;
font-weight:    600;
letter-spacing: 0.02em; /* 略微加宽，标签感 */
text-transform:  uppercase;

/* H6 */
font-size:      14px;
font-weight:    600;
letter-spacing: 0.05em;
text-transform:  uppercase;
color:          var(--muted);
```

### 3.7 标题字号总表

| 等级 | Desktop | Mobile | 字重 | 行高 | 字间距 |
|------|---------|--------|------|------|--------|
| Hero | 72-120px | 40-56px | 700-900 | 1.0-1.1 | -0.03em |
| H1 | 48-72px | 32-48px | 700-800 | 1.1-1.2 | -0.02em |
| H2 | 36-56px | 28-40px | 700 | 1.2 | -0.02em |
| H3 | 24-32px | 20-24px | 600-700 | 1.3 | -0.01em |
| H4 | 20-28px | 18-22px | 600 | 1.3 | 0 |
| H5 | 16-18px | 16px | 600 | 1.4 | 0.02em |
| H6 | 14px | 14px | 600 | 1.4 | 0.05em |

---

## 四、Body Typography（正文字体排版）

### 4.1 Font Size（字号层级）

**Large Description（大段描述）：**

```
用途：  Hero 副标题、Section 引言
字号：  18px - 24px
字重：  400 - 500
```

**Normal Body（标准正文）：**

```
用途：  产品说明、Features 描述、博客正文
字号：  16px - 18px
字重：  400
```

**Small Text（辅助文字）：**

```
用途：  标签说明、脚注、版权信息
字号：  14px
字重：  400
```

**Caption（极小文字）：**

```
用途：  Badge、时间戳、按钮副文本
字号：  12px
字重：  400 - 500
```

### 4.2 Line Height（行高）

| 类型 | 行高 | 说明 |
|------|------|------|
| Hero 标题 | 1.0 - 1.1 | 紧凑，视觉冲击 |
| 普通标题 | 1.2 - 1.3 | 略松，保持可读 |
| 大段描述 | 1.5 - 1.6 | 舒适阅读 |
| 标准正文 | 1.6 - 1.8 | 最佳阅读体验 |
| 小字/标签 | 1.4 - 1.5 | 紧凑但不拥挤 |

### 4.3 Paragraph Width（段落宽度）

```
正文最大宽度：  600px - 720px（约 65-75 字符/行 英文）
```

**必须避免：**

- 正文铺满全屏宽度（阅读疲劳）
- 单行超过 80 个英文字符
- 中文单行超过 35 个汉字

```css
.prose {
  max-width:  680px;
  margin:     0 auto;
}
```

### 4.4 Body Color（正文色彩）

```css
/* 主正文 — 不要使用纯黑 */
--text-primary: #f5f5f5;     /* 暗色主题 */
--text-primary: #374151;     /* 亮色主题 */

/* 次要文字 */
--text-secondary: #a0a0a0;   /* 暗色主题 */
--text-secondary: #6b7280;   /* 亮色主题 */

/* 辅助/禁用文字 */
--text-muted: #666666;       /* 暗色主题 */
--text-muted: #9ca3af;       /* 亮色主题 */
```

**硬性规则：**

- 正文**禁止**使用纯黑 `#000000`
- 标题与正文的颜色对比需维持层级感（标题更亮/更深）
- 暗色主题下，正文用 `#a0a0a0` 级别灰，标题用 `#f5f5f5` 级别白

---

## 五、Letter Spacing（字间距规范）

### 5.1 标题字间距

```css
/* Hero / H1 — 紧凑字距，视觉冲击 */
letter-spacing: -0.03em;

/* H2 / H3 — 微紧凑 */
letter-spacing: -0.02em ~ -0.01em;

/* H4+ — 默认 */
letter-spacing: 0;
```

### 5.2 大写标签字间距

```css
/* 全大写标签/导航项 — 需要加宽补偿 */
text-transform:  uppercase;
letter-spacing: 0.05em ~ 0.1em;
font-size:       12px - 14px;
font-weight:     600;
```

### 5.3 正文

```css
letter-spacing: 0; /* 始终使用默认 */
```

### 5.4 字间距总表

| 场景 | 字间距 | 说明 |
|------|--------|------|
| Hero 标题 | -0.03em | 紧凑，冲击力 |
| H1-H2 | -0.02em | 微紧凑 |
| H3 | -0.01em | 自然 |
| H4+ / 正文 | 0 | 默认 |
| 大写标签 | 0.05em - 0.1em | 加宽补偿 |
| 数字展示 | -0.02em | 表格数据紧凑 |

---

## 六、Font Weight（字重规范）

### 6.1 字重对比原则

标题与正文之间必须有**明显的字重对比**：

```
标题：700 - 900（Bold → Black）
正文：400（Regular）
辅助：400 - 500
```

### 6.2 字重使用规则

| 元素 | 字重 | 说明 |
|------|------|------|
| Hero 标题 | 800 - 900 | 最强冲击 |
| H1-H2 | 700 - 800 | 强调但可读 |
| H3 | 600 - 700 | 结构层级 |
| H4 | 600 | 卡片级 |
| 正文 | 400 | 舒适阅读 |
| Strong/Bold | 600 | 行内强调（避免 700，太重） |
| 按钮 | 600 | 按钮文字 |
| 标签/Badge | 500 - 600 | 小字加粗 |
| 代码 | 400 | 等宽字体 |

---

## 七、Text Decoration（文字装饰与效果）

### 7.1 渐变文字（MotionSites 核心）

```css
.gradient-text {
  background: linear-gradient(135deg, #d0b2ff 0%, #ffebd8 50%, #e8400d 100%);
  background-size: 200% 200%;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: gradient-shift 6s ease-in-out infinite;
}

@keyframes gradient-shift {
  0%   { background-position: 0% 50%; }
  50%  { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

**适用：** Hero 标题中的关键词高亮、品牌核心词

### 7.2 发光文字

```css
.glow-text {
  position: relative;
}

.glow-text::after {
  content: attr(data-text);
  position: absolute;
  inset: 0;
  background: inherit;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  filter: blur(10px);
  mix-blend-mode: screen;
  opacity: 0.8;
  pointer-events: none;
}
```

**适用：** Hero 标题、品牌视觉焦点

### 7.3 噪点纹理叠加

```css
.textured-text::before {
  content: '';
  position: absolute;
  inset: -6px 0% 0% -6px;
  background-image: url('noise-texture.avif');
  background-size: 60%;
  mix-blend-mode: overlay;
  border-radius: 8px;
  pointer-events: none;
  z-index: 3;
}
```

### 7.4 链接与强调

```css
/* 下划线链接 */
a {
  text-decoration: underline;
  text-underline-offset: 3px;   /* 下划线与文字间距 */
  text-decoration-color: rgba(255, 255, 255, 0.3); /* 暗色主题 */
  transition: text-decoration-color 0.2s;
}

a:hover {
  text-decoration-color: rgba(255, 255, 255, 0.8);
}

/* 行内高亮 */
mark {
  background: linear-gradient(120deg, rgba(255, 200, 0, 0.3) 0%, rgba(255, 100, 0, 0.3) 100%);
  padding: 0.1em 0.3em;
  border-radius: 4px;
}
```

---

## 八、Writing Rules（文案规则）

### 8.1 标题文案

**必须：**

- 大标题短句化
- 一句话表达价值
- 避免长段落

**推荐：**

```
Build the future with AI
```

**不要：**

```
Our company provides various AI solutions
to help businesses improve efficiency
```

### 8.2 正文文案

**必须：**

- 简洁
- 产品导向
- 用户价值

**推荐：**

```
帮助企业通过 AI 自动处理客户咨询
```

**避免：**

```
我们是一家专注人工智能技术研发的公司
```

### 8.3 CTA 文案

**原则：** 动词开头，3-5 个词

```
好的：  Start Free Trial / Get Started / See Demo / Try Now
差的：  Click here / Submit / Learn more about our product
```

### 8.4 多语言排版

**中英混排规则：**

- 中文字符与英文字母/数字之间**不加空格**（使用 CSS `word-spacing` 或 JS 自动插入）
- 标点符号使用全角
- 英文/数字使用半角
- 字号以中文为基准，英文允许略小 1-2px

```css
/* 中英混排优化 */
body {
  word-break: break-word;
  overflow-wrap: break-word;
}

/* 自动在中英文间添加间距（通过 JS 或 CSS） */
.text-auto-space {
  text-autospace: ideograph-alpha ideograph-numeral;
}
```

---

## 九、Typography Animation（文字动效）

### 9.1 标题默认支持的动效

| 动效 | 说明 | 组件 |
|------|------|------|
| Text Reveal | 逐字/逐行显现 | `<TextReveal />` |
| Fade In | 整体渐入 | `<MotionFadeIn />` |
| Blur Reveal | 从模糊到清晰 | `<BlurReveal />` |
| Gradient Flow | 渐变色流动 | CSS `@keyframes` |

### 9.2 Text Reveal（文字揭示）

```css
/* 逐字显现 */
.char {
  display:       inline-block;
  opacity:       0;
  transform:     translateY(20px);
  animation:     char-reveal 0.5s ease-out forwards;
}

/* stagger 延迟：每字递增 30-50ms */
.char:nth-child(1)  { animation-delay: 0ms; }
.char:nth-child(2)  { animation-delay: 40ms; }
.char:nth-child(3)  { animation-delay: 80ms; }
/* ... */

@keyframes char-reveal {
  to {
    opacity:   1;
    transform: translateY(0);
  }
}
```

### 9.3 Blur Reveal（模糊揭示）

```css
.blur-reveal {
  filter:    blur(10px);
  opacity:   0;
  transform: translateY(20px) scale(0.95);
  transition: filter 0.8s ease-out, opacity 0.8s ease-out, transform 0.8s ease-out;
}

.blur-reveal.visible {
  filter:    blur(0);
  opacity:   1;
  transform: translateY(0) scale(1);
}
```

### 9.4 动效时序规范

| 动效类型 | 时长 | 缓动 | 延迟策略 |
|---------|------|------|---------|
| Hero 标题揭示 | 0.6-0.8s | ease-out | 0ms |
| Hero 副标题 | 0.5-0.6s | ease-out | 200-300ms |
| CTA 按钮 | 0.4-0.5s | ease-out | 400-500ms |
| Section 标题 | 0.5-0.6s | ease-out | 视口触发 |
| 正文段落 | 0.5s | ease-out | 标题后 100ms |
| 逐字揭示/字 | 0.3-0.5s | ease-out | 30-50ms stagger |

---

## 十、Responsive Typography（响应式排版）

### 10.1 断点与字号缩放

```css
/* 基准：Mobile First */

/* Mobile: < 640px（基准值） */
--hero-size:  clamp(40px, 10vw, 56px);
--h1-size:    clamp(32px, 8vw, 48px);
--h2-size:    clamp(28px, 7vw, 40px);
--h3-size:    clamp(22px, 5vw, 30px);
--body-size:  16px;

/* Tablet: 640px - 1024px */
--hero-size:  clamp(48px, 8vw, 72px);
--h1-size:    clamp(40px, 6vw, 56px);
--h2-size:    clamp(32px, 5vw, 48px);

/* Desktop: > 1024px */
--hero-size:  clamp(72px, 6vw, 120px);
--h1-size:    clamp(48px, 4vw, 72px);
--h2-size:    clamp(36px, 3vw, 56px);
```

### 10.2 使用 clamp() 实现流式缩放

```css
h1 {
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  /* 最小 40px，随视口缩放，最大 72px */
}

h2 {
  font-size: clamp(1.75rem, 3.5vw, 3.5rem);
  /* 最小 28px，最大 56px */
}
```

### 10.3 移动端特别规则

- Hero 标题最低 **40px**，保持视觉冲击
- 正文字号不低于 **14px**（辅助文字最低 **12px**）
- 字间距在移动端可略微放宽（-0.03em → -0.02em）
- 行高在移动端可略微增加（+0.1）

---

## 十一、AI 审美规则摘要

以下规则可直接作为 AI 生成官网时的排版约束：

### 必须遵守

1. 标题使用**紧凑字间距**（-0.03em ~ -0.02em）
2. 标题字重 **700-900**，正文字重 **400**
3. Hero 标题字号 **≥72px**（桌面端）
4. 正文最大宽度 **≤720px**
5. 正文行高 **1.6-1.8**
6. 正文颜色**禁止纯黑** `#000`
7. 全站字体种类 **≤2 种**
8. 标题文案**一句话表达价值**
9. 所有标题必须支持**进入动画**（Text Reveal / Fade In）
10. 使用 `clamp()` 实现响应式字号

### 禁止事项

1. 标题使用长段落（超过 2 行的 Hero 标题）
2. 正文铺满全屏宽度
3. 正文使用纯黑 `#000` 或纯白 `#fff`
4. 标题字重低于 600
5. 超过 2 种字体混用
6. 标题使用默认字间距（0）
7. 英文正文使用大写（除标签/Badge 外）
8. 中英混排时使用全角字母/数字

### 可选增强

1. Hero 关键词使用**渐变文字**效果
2. 标题叠加**发光层**（blur + screen）
3. 标题叠加**噪点纹理**（overlay blend mode）
4. 使用**逐字揭示动画**（stagger 30-50ms）
5. 正文链接使用**渐变下划线**效果

---

*本文档综合参考：motionsites.ai 实际 CSS 拆解、Google Typography Guidelines、Apple Human Interface Guidelines Typography、Material Design Type Scale。*
