# Hero Layout System（首屏布局系统）

> 基于 motionsites.ai 及国内外高级官网设计语言，涵盖首屏布局类型、结构规范、视觉层次、响应式适配和动效集成。Hero 是用户打开网站后看到的第一个完整视口，它决定了用户对品牌的全部第一印象。一个出色的首屏必须在 **0.5 秒内** 完成品牌认知传递，在 **3 秒内** 引导用户产生点击意愿。

---

## 一、设计目标与原则

首屏布局系统围绕四个核心目标构建，每一个布局决策都必须服务于至少一个目标：

### 1.1 四大核心目标

| 目标 | 说明 | 衡量指标 |
|------|------|---------|
| **建立品牌认知** | 用户在 0.5s 内识别出品牌调性（科技感/温暖/专业/奢华） | 品牌色彩覆盖 Hero 区域 ≥ 60% |
| **传递核心价值** | 一句话说清产品做什么、为谁解决问题 | 标题字数 ≤ 12 词（中文 ≤ 20 字） |
| **引导用户行动** | CTA 按钮在首屏可见且具有视觉优先级 | CTA 点击热区 ≥ 总面积的 2% |
| **创造视觉冲击** | 通过动效、排版、色彩创造令人记住的画面 | 动效帧率 ≥ 60fps，首屏独特性评分 ≥ 8/10 |

### 1.2 设计原则

- **单一焦点原则**：首屏有且仅有一个视觉焦点，所有元素围绕它组织层级
- **渐次揭示原则**：信息按重要性分层入场，而非一次性全部展示
- **留白即呼吸**：Hero 区域内容占比不超过 40%，剩余 60% 为留白与视觉元素
- **动效服务于叙事**：每一帧动画都在讲述品牌故事，拒绝无意义的装饰性动效
- **对比度优先**：无论背景如何复杂，文字对比度必须满足 WCAG AA 标准（≥ 4.5:1）

---

## 二、首屏必备元素

一个合格的 Hero 区域必须包含以下五个核心元素，缺一不可：

### 2.1 强标题（Headline）

- **作用**：在 1 秒内传达产品核心价值
- **字数限制**：英文 ≤ 12 词，中文 ≤ 20 字
- **视觉权重**：必须是首屏中字号最大、字重最重的元素
- **层级**：`<h1>` 语义标签，`z-index` 层级高于背景

```css
.hero-title {
  font-size: clamp(40px, 7vw, 96px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: #0a0a0a;
  max-width: 900px;
}
```

### 2.2 描述文字（Description）

- **作用**：补充标题未覆盖的关键信息，降低用户理解成本
- **字数限制**：1-2 句话，≤ 30 词
- **视觉权重**：次于标题，字号通常为标题的 30-40%

```css
.hero-description {
  font-size: clamp(16px, 2vw, 20px);
  font-weight: 400;
  line-height: 1.6;
  color: #525252;
  max-width: 600px;
  margin-top: 1.25rem;
}
```

### 2.3 CTA 按钮（Call to Action）

- **作用**：将用户意图转化为具体行动
- **数量限制**：最多 2 个（主 CTA + 次 CTA）
- **视觉权重**：色彩对比度最高的可交互元素

```css
.hero-cta-group {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 2rem;
}
```

### 2.4 视觉焦点（Visual Focal Point）

- **作用**：通过具象化展示让用户直观理解产品形态
- **形式**：产品截图、3D 渲染、视频、插画
- **占比**：建议占据 Hero 可视区域的 40-60%

```css
.hero-visual {
  width: 100%;
  max-width: 1000px;
  margin-top: 3rem;
  border-radius: 12px;
  overflow: hidden;
}
```

### 2.5 背景动效（Background Motion）

- **作用**：营造氛围感，提升品牌高级感
- **约束**：不得影响文字可读性，对比度差异 ≥ 4.5:1
- **层级**：`z-index: 0`，始终在最底层

```css
.hero-bg-motion {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  opacity: 0.4;
}
```

---

## 三、三大首屏布局类型

### 3.1 Center Hero（居中对称型）

#### 适用行业

AI SaaS、科技产品、创意工具、开发者平台

#### 布局结构图

```
┌─────────────────────────────────────────────────────┐
│  ○ Logo     Features     Pricing     Docs     Login │  ← Navbar (z: 50)
├─────────────────────────────────────────────────────┤
│                                                     │
│                    [Badge]                          │  ← 徽章标签
│                                                     │
│            Build Better Products                    │  ← 主标题 H1
│              Faster with AI                         │
│                                                     │
│         The AI-powered platform that helps          │  ← 描述文字
│         teams ship 10x faster.                      │
│                                                     │
│           [ Get Started → ]  [ Watch Demo ]         │  ← CTA 按钮组
│                                                     │
│     ┌─────────────────────────────────────┐        │
│     │                                     │        │
│     │         Product Screenshot          │        │  ← 产品视觉
│     │         / 3D Scene / Video          │        │
│     │                                     │        │
│     └─────────────────────────────────────┘        │
│                                                     │
│  ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧  │  ← 背景动效层
└─────────────────────────────────────────────────────┘
```

#### 完整 CSS 代码

```css
/* Center Hero 容器 */
.hero-center {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 80px 24px 60px; /* 顶部补偿 Navbar 高度 */
  text-align: center;
  overflow: hidden;
}

/* 内容容器 - 限制最大宽度 */
.hero-center__content {
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
}

/* 标题区域 */
.hero-center__title {
  font-size: clamp(40px, 7vw, 96px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.05;
  color: #0a0a0a;
  max-width: 900px;
}

/* 描述文字 */
.hero-center__description {
  font-size: clamp(16px, 2vw, 20px);
  font-weight: 400;
  line-height: 1.6;
  color: #525252;
  max-width: 600px;
  margin-top: 1.25rem;
}

/* CTA 按钮组 */
.hero-center__cta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

/* 产品视觉区域 */
.hero-center__visual {
  position: relative;
  z-index: 10;
  width: 100%;
  max-width: 1000px;
  margin-top: 3.5rem;
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(0, 0, 0, 0.05);
}

/* 背景动效层 */
.hero-center__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none;
}
```

#### 排列规则

- 所有文本元素（Badge → Title → Description → CTA）垂直居中排列
- 元素间距：Badge → Title `16px`，Title → Description `20px`，Description → CTA `40px`
- CTA 组内间距：主按钮与次按钮间距 `12px`
- 产品视觉与 CTA 间距：`56px`（3.5rem）

#### 动画规范：元素错位入场时序

```css
/* 错位入场动画 - Center Hero */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-center__badge {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
}

.hero-center__title {
  animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
}

.hero-center__description {
  animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.35s both;
}

.hero-center__cta {
  animation: fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s both;
}

.hero-center__visual {
  animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both;
}
```

#### 真实案例参考

| 品牌 | 标题字数 | 视觉形式 | 动效特征 |
|------|---------|---------|---------|
| **Linear** | 3 词 | 产品截图 + 光晕 | 渐变网格背景缓慢流动 |
| **Vercel** | 4 词 | 代码/终端截图 | 三角形网格粒子背景 |
| **OpenAI** | 2 词 | 产品 Demo 动画 | 深色背景 + 发光渐变 |
| **Anthropic** | 5 词 | 抽象图形 | 柔和渐变流动背景 |

---

### 3.2 Split Hero（左右分屏型）

#### 适用行业

医疗健康、电商、企业服务、金融科技、教育

#### 布局结构图

```
┌─────────────────────────────────────────────────────┐
│  ○ Logo     Solutions     About     Contact     ▾  │  ← Navbar
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌──────────────────┐  ┌────────────────────────┐  │
│  │                  │  │                        │  │
│  │  Transform Your  │  │    ┌──────────────┐    │  │
│  │  Health Journey   │  │    │              │    │  │
│  │                  │  │    │   Product    │    │  │
│  │  Personalized    │  │    │   Image /    │    │  │
│  │  treatments      │  │    │   Video      │    │  │
│  │  powered by AI   │  │    │              │    │  │
│  │                  │  │    └──────────────┘    │  │
│  │  [ Book Now → ]  │  │                        │  │
│  │  [ Learn More  ] │  │    浮动信息卡片         │  │
│  │                  │  │    ┌────┐               │  │
│  └──────────────────┘  │    │ +12│               │  │
│                        │    └────┘               │  │
│                        └────────────────────────┘  │
│  Left: 45%               Right: 55%               │
└─────────────────────────────────────────────────────┘
```

#### 完整 CSS 代码

```css
/* Split Hero 容器 */
.hero-split {
  position: relative;
  display: grid;
  grid-template-columns: 45fr 55fr; /* 45:55 比例 */
  min-height: 100vh;
  padding-top: 64px; /* 补偿 Navbar 高度 */
  overflow: hidden;
}

/* 文字侧 */
.hero-split__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 48px 60px 80px;
  max-width: 640px;
}

/* 图片/产品侧 */
.hero-split__visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
}

/* 文字侧标题 */
.hero-split__title {
  font-size: clamp(36px, 5vw, 72px);
  font-weight: 800;
  letter-spacing: -0.025em;
  line-height: 1.08;
  color: #0a0a0a;
}

/* 文字侧描述 */
.hero-split__description {
  font-size: clamp(15px, 1.5vw, 18px);
  font-weight: 400;
  line-height: 1.65;
  color: #525252;
  margin-top: 1.25rem;
  max-width: 480px;
}

/* 文字侧 CTA（左对齐） */
.hero-split__cta {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 2rem;
}

/* 图片侧主视觉 */
.hero-split__image {
  width: 100%;
  max-width: 600px;
  border-radius: 20px;
  object-fit: cover;
  box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.2);
}

/* 浮动信息卡片 */
.hero-split__floating-card {
  position: absolute;
  padding: 12px 20px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.5);
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
```

#### 文字侧排版规则

- 标题左对齐，最大 3 行
- 描述文字左对齐，最大 4 行
- CTA 按钮组左对齐（区别于 Center Hero 的居中对齐）
- 各元素垂直间距：Title → Description `20px`，Description → CTA `32px`

#### 图片侧展示规则

- 图片应略微倾斜（`rotate(-2deg)` 至 `rotate(2deg)`）以增加动态感
- 图片圆角：`16-24px`
- 图片阴影：大范围柔和阴影 `0 25px 60px -15px rgba(0,0,0,0.2)`
- 可叠加 1-2 个浮动信息卡片增加层次感

#### 响应式降级：移动端变为上下堆叠

```css
/* Tablet 降级 */
@media (max-width: 1024px) {
  .hero-split {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-top: 64px;
  }

  .hero-split__text {
    padding: 40px 24px;
    max-width: 100%;
    text-align: center;
    align-items: center;
  }

  .hero-split__cta {
    justify-content: center;
  }

  .hero-split__visual {
    padding: 0 24px 40px;
  }
}

/* Mobile 降级 */
@media (max-width: 640px) {
  .hero-split__title {
    font-size: clamp(28px, 8vw, 40px);
  }

  .hero-split__text {
    padding: 32px 16px;
  }

  .hero-split__visual {
    padding: 0 16px 32px;
  }
}
```

#### 真实案例参考

| 品牌 | 图文比例 | 文字对齐 | 特色 |
|------|---------|---------|------|
| **Ro.co** | 40:60 | 左对齐 | 产品图倾斜 + 浮动数据卡片 |
| **Apple** | 50:50 | 左对齐 | 产品实拍 + 极简文字 |
| **华为** | 45:55 | 左对齐 | 产品渲染图 + 大字标题 |

---

### 3.3 Product Showcase Hero（产品展示型）

#### 适用行业

SaaS Dashboard、数据平台、开发者工具、项目管理

#### 布局结构图

```
┌─────────────────────────────────────────────────────┐
│  ○ Logo     Product     Pricing     Docs      Sign ↑│  ← Navbar
├─────────────────────────────────────────────────────┤
│                                                     │
│                 The Modern Stack                    │  ← 主标题
│           for Payment Infrastructure                │
│                                                     │
│        Build, scale, and optimize your              │  ← 描述
│        payment workflows with ease.                 │
│                                                     │
│          [ Start Now → ]  [ Documentation ]         │  ← CTA
│                                                     │
│  ┌─────────────────────────────────────────────┐    │
│  │  ┌──── Dashboard Screenshot ────────────┐   │    │
│  │  │                                       │   │    │
│  │  │   ┌─────────┐  ┌─────────────────┐   │   │    │
│  │  │   │ Revenue │  │  Transaction    │   │   │    │
│  │  │   │ $24.5k  │  │  History        │   │   │    │
│  │  │   │  +12.5% │  │  ─────────────  │   │   │    │
│  │  │   └─────────┘  └─────────────────┘   │   │    │
│  │  │                                       │   │    │
│  │  └───────────────────────────────────────┘   │    │
│  └─────────────────────────────────────────────┘    │
│                                                     │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐         │  ← 浮动卡片
│  │ ✓ Paid   │  │ $1.2M    │  │ ⚡ 99.9% │         │
│  │ $50.00   │  │ Processed│  │ Uptime   │         │
│  └──────────┘  └──────────┘  └──────────┘         │
│  ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧ ✦ ✧  │  ← 背景网格
└─────────────────────────────────────────────────────┘
```

#### 完整 CSS 代码

```css
/* Product Showcase Hero 容器 */
.hero-showcase {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 80px 24px 60px;
  text-align: center;
  overflow: hidden;
}

/* 产品截图/Dashboard 容器 */
.hero-showcase__product {
  position: relative;
  width: 100%;
  max-width: 1100px;
  margin-top: 3rem;
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    0 50px 100px -20px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(0, 0, 0, 0.05);
  animation: dashboardFloat 6s ease-in-out infinite;
}

/* Dashboard 浮动动画 */
@keyframes dashboardFloat {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* 产品截图内部样式 */
.hero-showcase__product img,
.hero-showcase__product video {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 16px;
}

/* 浮动卡片容器 */
.hero-showcase__floats {
  position: absolute;
  inset: 0;
  z-index: 20;
  pointer-events: none;
}
```

#### 浮动卡片组件 FloatingCard

```css
/* FloatingCard 通用样式 */
.floating-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 20px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(16px);
  border-radius: 14px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.08),
    0 0 0 1px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.6);
  font-size: 14px;
  font-weight: 500;
  color: #171717;
  pointer-events: auto;
}

/* 不同浮动卡片的位置 */
.floating-card--left {
  bottom: 20%;
  left: -60px;
  animation: floatCard 5s ease-in-out infinite;
}

.floating-card--right {
  top: 25%;
  right: -40px;
  animation: floatCard 5s ease-in-out 1s infinite;
}

.floating-card--bottom {
  bottom: 5%;
  right: 10%;
  animation: floatCard 5s ease-in-out 2s infinite;
}

@keyframes floatCard {
  0%, 100% { transform: translateY(0px) scale(1); }
  50% { transform: translateY(-15px) scale(1.02); }
}
```

```html
<!-- FloatingCard 使用示例 -->
<div class="floating-card floating-card--left">
  <span class="floating-card__icon">✓</span>
  <div>
    <div class="floating-card__label">Payment Received</div>
    <div class="floating-card__value">$50.00</div>
  </div>
</div>

<div class="floating-card floating-card--right">
  <span class="floating-card__icon">⚡</span>
  <div>
    <div class="floating-card__label">Uptime</div>
    <div class="floating-card__value">99.9%</div>
  </div>
</div>
```

#### Dashboard 展示规则

- Dashboard 截图宽度：`max-width: 1100px`，占据视口 70-80%
- 浮动动画：`translateY: 0 → -20px → 0`，周期 6 秒，缓动 `ease-in-out`
- 阴影层次：双层阴影（主投影 + 细边框）增加立体感
- 浮动卡片数量：2-3 个，分布在截图的左/右/下方

#### 真实案例参考

| 品牌 | Dashboard 展示 | 浮动元素 | 动效特征 |
|------|--------------|---------|---------|
| **Stripe** | 3D 旋转 Dashboard | 无 | Dashboard 持续旋转 + 粒子背景 |
| **Notion** | 产品截图 + 浮动笔记 | 浮动文字卡片 | 截图缩放入场 |
| **Figma** | 多窗口截图 | 光标动画 | 窗口依次入场 |

---

### 3.4 Fullscreen Visual Hero（全屏视觉型）

#### 适用行业

奢侈品牌、生活方式、影视娱乐、旅游、建筑

#### 布局结构图

```
┌─────────────────────────────────────────────────────┐
│  ○ Logo                                           │  ← 透明 Navbar
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────────────────────────────────────────┐    │
│  │                                             │    │
│  │         Fullscreen Video / Image            │    │  ← 全屏背景
│  │         作为 Hero 背景                      │    │    z-index: 0
│  │                                             │    │
│  │     ┌─────────────────────────────┐        │    │
│  │     │                             │        │    │
│  │     │   Experience the            │        │    │  ← 文字叠加层
│  │     │   Extraordinary             │        │    │    z-index: 10
│  │     │                             │        │    │
│  │     │   [ Explore Collection → ]  │        │    │
│  │     │                             │        │    │
│  │     └─────────────────────────────┘        │    │
│  │                                             │    │
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│    │  ← 底部渐变遮罩
│  └─────────────────────────────────────────────┘    │    z-index: 5
│                                                     │
└─────────────────────────────────────────────────────┘
```

#### 完整 CSS 代码

```css
/* Fullscreen Visual Hero 容器 */
.hero-visual-fullscreen {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* 全屏背景图片/视频 */
.hero-visual-fullscreen__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-visual-fullscreen__bg img,
.hero-visual-fullscreen__bg video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

/* 底部渐变遮罩 - 确保文字可读 */
.hero-visual-fullscreen__overlay {
  position: absolute;
  inset: 0;
  z-index: 5;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.1) 40%,
    rgba(0, 0, 0, 0.4) 100%
  );
  pointer-events: none;
}

/* 文字叠加层 */
.hero-visual-fullscreen__content {
  position: relative;
  z-index: 10;
  text-align: center;
  color: #ffffff;
  max-width: 800px;
  padding: 0 24px;
}

.hero-visual-fullscreen__title {
  font-size: clamp(36px, 6vw, 80px);
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1.1;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.hero-visual-fullscreen__cta {
  margin-top: 2rem;
}

.hero-visual-fullscreen__cta a {
  display: inline-flex;
  align-items: center;
  padding: 14px 32px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 999px;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.3s ease;
}

.hero-visual-fullscreen__cta a:hover {
  background: rgba(255, 255, 255, 0.25);
  border-color: rgba(255, 255, 255, 0.5);
}
```

#### z-index 层级规范

```
z-index: 50  →  Navbar（始终最上层）
z-index: 10  →  文字叠加层（标题、CTA）
z-index: 5   →  渐变遮罩层
z-index: 0   →  背景图片/视频层
```

---

## 四、标题区域排版规范

### 4.1 字号体系

| 断点 | 标题字号 | 描述字号 | 标题行高 |
|------|---------|---------|---------|
| **Desktop**（>1024px） | 72px - 120px | 18px - 22px | 1.0 - 1.1 |
| **Tablet**（640-1024px） | 48px - 72px | 16px - 20px | 1.05 - 1.15 |
| **Mobile**（<640px） | 40px - 56px | 15px - 18px | 1.1 - 1.2 |

### 4.2 字重与字间距

```css
.hero-title {
  font-weight: 700;   /* 最低 700，推荐 800-900 */
  letter-spacing: -0.03em; /* 紧凑字间距，增加大标题的视觉密度 */
}
```

- **字重**：最低 `700`，推荐 `800-900`，营造力量感
- **字间距**：`-0.03em`，对于超大标题（>80px）可收紧至 `-0.04em`

### 4.3 渐变文字效果

```css
/* 基础渐变文字 */
.hero-title--gradient {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 深色主题渐变 */
.hero-title--gradient-dark {
  background: linear-gradient(180deg, #ffffff 0%, #a0a0a0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* 品牌色渐变（可按需替换色值） */
.hero-title--gradient-brand {
  background: linear-gradient(
    135deg,
    var(--color-primary) 0%,
    var(--color-secondary) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

### 4.4 多行标题限制

- **最大行数**：2-3 行，超过 3 行必须缩短文案
- **行高**：`1.0 - 1.1`（行间距极紧凑，保持标题的整体感）
- **标题宽度**：`max-width` 限制为 `800-1000px`，避免单行过长

```css
/* 标题行数限制 */
.hero-title {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* 最多 3 行 */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

### 4.5 标题与描述的间距

| 关系 | 间距 |
|------|------|
| 标题 → 描述 | `20px`（1.25rem） |
| 描述 → CTA | `32-40px`（2-2.5rem） |
| 标题行间距 | `0.05em - 0.1em`（通过 line-height 控制） |

---

## 五、CTA 按钮布局

### 5.1 CTA 位置规则

| 布局类型 | CTA 对齐方式 | 位置 |
|---------|------------|------|
| Center Hero | 居中 | 标题正下方，水平居中 |
| Split Hero | 左对齐 | 描述文字左下方 |
| Product Showcase | 居中 | 标题正下方，水平居中 |
| Fullscreen Visual | 居中 | 画面底部居中 |

### 5.2 主 CTA + 次 CTA 排列

```css
/* CTA 按钮组 */
.hero-cta-group {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

/* 主 CTA - 实心按钮 */
.cta-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding: 0 2rem;
  background: #0a0a0a;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  gap: 8px;
}

.cta-primary:hover {
  background: #262626;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* 次 CTA - Ghost 按钮 */
.cta-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding: 0 2rem;
  background: transparent;
  color: #525252;
  font-size: 15px;
  font-weight: 500;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  cursor: pointer;
  transition: all 0.2s ease;
  gap: 8px;
}

.cta-ghost:hover {
  border-color: rgba(0, 0, 0, 0.3);
  color: #0a0a0a;
  background: rgba(0, 0, 0, 0.03);
}
```

### 5.3 Neumorphism 按钮样式

```css
/* Neumorphism 风格按钮 - 适合浅色背景 */
.cta-neumorphism {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  padding: 0 2rem;
  background: #e8e8e8;
  color: #333333;
  font-size: 15px;
  font-weight: 600;
  border-radius: 14px;
  border: none;
  cursor: pointer;
  box-shadow:
    6px 6px 12px rgba(0, 0, 0, 0.08),
    -6px -6px 12px rgba(255, 255, 255, 0.8);
  transition: all 0.2s ease;
}

.cta-neumorphism:hover {
  box-shadow:
    4px 4px 8px rgba(0, 0, 0, 0.1),
    -4px -4px 8px rgba(255, 255, 255, 0.9);
  transform: translateY(-1px);
}

.cta-neumorphism:active {
  box-shadow:
    inset 2px 2px 4px rgba(0, 0, 0, 0.08),
    inset -2px -2px 4px rgba(255, 255, 255, 0.8);
  transform: translateY(0);
}
```

### 5.4 磁性按钮效果（MagneticButton）

```javascript
// MagneticButton 效果 - 鼠标靠近时按钮跟随偏移
class MagneticButton {
  constructor(element) {
    this.element = element;
    this.strength = 0.3; // 磁性强度
    this.animate = this.animate.bind(this);
    this.element.addEventListener('mousemove', this.handleMouseMove.bind(this));
    this.element.addEventListener('mouseleave', this.handleMouseLeave.bind(this));
  }

  handleMouseMove(e) {
    const rect = this.element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    this.element.style.transform = `translate(${x * this.strength}px, ${y * this.strength}px)`;
    this.element.style.transition = 'transform 0.2s ease-out';
  }

  handleMouseLeave() {
    this.element.style.transform = 'translate(0, 0)';
    this.element.style.transition = 'transform 0.4s ease-out';
  }
}
```

### 5.5 按钮尺寸规范

| 属性 | 数值 |
|------|------|
| 按钮高度 | `48px` - `56px`（推荐 `52px`） |
| 水平内边距 | `0 2rem`（`0 32px`） |
| 圆角 | `12px` - `14px`（次 CTA 可用 `999px` 全圆角） |
| 字号 | `14px` - `16px` |
| 字重 | `500` - `600` |
| 按钮间距 | `12px` |

---

## 六、视觉焦点区域

### 6.1 产品图片/视频展示规范

```css
/* 产品图片容器 */
.hero-visual-container {
  position: relative;
  width: 100%;
  max-width: 1000px;
  border-radius: 16px;
  overflow: hidden;
  background: #f5f5f5;
}

/* 图片适配 */
.hero-visual-container img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

/* 视频适配 */
.hero-visual-container video {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 16px;
}

/* 浅色背景上的产品图阴影 */
.hero-visual-container--light {
  box-shadow:
    0 25px 50px -12px rgba(0, 0, 0, 0.12),
    0 0 0 1px rgba(0, 0, 0, 0.04);
}

/* 深色背景上的产品图阴影 */
.hero-visual-container--dark {
  box-shadow:
    0 25px 80px -20px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.06);
}
```

### 6.2 3D 场景容器尺寸

```css
/* 3D 场景容器 */
.hero-3d-container {
  position: relative;
  width: 100%;
  max-width: 900px;
  height: 500px; /* 固定高度或 aspect-ratio */
  aspect-ratio: 16 / 9;
  border-radius: 16px;
  overflow: hidden;
}

/* Canvas 填满容器 */
.hero-3d-container canvas {
  width: 100% !important;
  height: 100% !important;
  display: block;
}
```

### 6.3 视觉焦点与文字的间距

| 布局类型 | 文字 → 视觉间距 |
|---------|----------------|
| Center Hero | `48-64px`（3-4rem） |
| Split Hero | 无间距（左右分列） |
| Product Showcase | `40-56px`（2.5-3.5rem） |
| Fullscreen Visual | 视觉即背景，无间距概念 |

### 6.4 视觉区域占比

- **建议占比**：Hero 区域中，视觉元素（图片/视频/3D）应占可视面积的 **40-60%**
- **文字区域**：占 20-30%
- **留白区域**：占 15-25%
- **公式**：`视觉(50%) + 文字(25%) + 留白(25%) = 100%`

---

## 七、背景动效层

### 7.1 z-index 层级规范

```
z-index: 50  →  Navbar（导航栏）
z-index: 20  →  浮动卡片（FloatingCard）
z-index: 10  →  Hero 文字内容（标题/描述/CTA）
z-index: 5   →  渐变遮罩（如 Fullscreen Visual）
z-index: 1   →  产品视觉（截图/Dashboard）
z-index: 0   →  背景动效层（粒子/渐变/网格）
```

背景动效必须在 `z-index: 0`，确保不影响任何前景内容。

### 7.2 渐变背景

```css
/* 浅色渐变背景 - 适合科技产品 */
.hero-bg-gradient--light {
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.15), transparent),
    radial-gradient(ellipse 60% 40% at 80% 50%, rgba(99, 102, 241, 0.1), transparent);
  pointer-events: none;
}

/* 深色渐变背景 - 适合 AI/暗色主题 */
.hero-bg-gradient--dark {
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(ellipse 80% 60% at 50% -10%, rgba(120, 119, 198, 0.2), transparent),
    radial-gradient(ellipse 50% 40% at 70% 60%, rgba(99, 102, 241, 0.08), transparent);
  pointer-events: none;
}

/* 品牌色渐变 - 可自定义色值 */
.hero-bg-gradient--brand {
  position: absolute;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(ellipse 60% 50% at 30% 20%, var(--color-accent-alpha-15), transparent),
    radial-gradient(ellipse 50% 40% at 80% 70%, var(--color-secondary-alpha-10), transparent);
  pointer-events: none;
}

/* 流动渐变动画 */
@keyframes gradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.hero-bg-gradient--animated {
  position: absolute;
  inset: 0;
  z-index: 0;
  background: linear-gradient(
    -45deg,
    #ee7752, #e73c7e, #23a6d5, #23d5ab
  );
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
  opacity: 0.08;
  pointer-events: none;
}
```

### 7.3 粒子效果容器定位

```css
/* 粒子效果容器 */
.hero-bg-particles {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
  pointer-events: none; /* 不影响交互 */
}

/* 单个粒子 */
.particle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.3;
  animation: particleDrift linear infinite;
}

@keyframes particleDrift {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    transform: translateY(-100vh) translateX(50px);
    opacity: 0;
  }
}
```

### 7.4 对比度要求

背景动效不得影响文字可读性，必须满足以下要求：

| 场景 | 最低对比度 | 说明 |
|------|----------|------|
| 浅色背景 + 深色文字 | 4.5:1 | WCAG AA 标准 |
| 深色背景 + 浅色文字 | 4.5:1 | WCAG AA 标准 |
| 大文字（>24px bold） | 3:1 | WCAG AA 大文字标准 |
| 动效区域与文字重叠 | 4.5:1 | 动效透明度 ≤ 0.15 |

```css
/* 确保文字在动效背景上的可读性 */
.hero-bg-motion {
  opacity: 0.15; /* 动效层透明度不超过 15% */
}

/* 或使用遮罩层 */
.hero-content-backdrop {
  position: relative;
  z-index: 10;
  /* 半透明背景确保文字可读 */
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(2px);
  border-radius: 16px;
  padding: 32px;
}
```

---

## 八、导航栏与 Hero 的关系

### 8.1 导航栏定位方式

```css
/* 方式一：Fixed 定位 - 悬浮于页面之上 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 64px;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  transition: all 0.3s ease;
}

/* 方式二：Sticky 定位 - 滚动后吸顶 */
.navbar {
  position: sticky;
  top: 0;
  height: 64px;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
```

### 8.2 导航栏高度

- **标准高度**：`56px` - `64px`
- **紧凑模式**：`48px`（移动端）
- **宽裕模式**：`72px`（奢侈品牌）

### 8.3 Hero 顶部 padding 补偿

```css
/* Hero 必须补偿导航栏高度，避免内容被遮挡 */
.hero-center {
  /* Fixed Navbar：使用 padding-top 补偿 */
  padding-top: 64px; /* = Navbar 高度 */
  /* 额外加 16px 呼吸空间 */
  padding-top: calc(64px + 16px); /* 推荐：Navbar 高度 + 16px */
}

/* 或者使用更精确的计算 */
.hero-center {
  padding-top: calc(var(--navbar-height, 64px) + 16px);
}
```

### 8.4 透明导航栏 vs 实色导航栏

```css
/* 透明导航栏 - 适合深色/全屏视觉 Hero */
.navbar--transparent {
  background: transparent;
  color: #ffffff;
  border-bottom: none;
}

.navbar--transparent.scrolled {
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(16px);
}

/* 实色导航栏 - 适合浅色/产品展示型 Hero */
.navbar--solid {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(12px);
  color: #0a0a0a;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
```

**选择规则**：

| 条件 | 推荐导航栏 |
|------|----------|
| 深色背景 Hero / 全屏视觉 Hero | 透明导航栏（白色文字） |
| 浅色背景 Hero / 产品展示 Hero | 实色或毛玻璃导航栏 |
| 品牌有强烈的 Logo 色彩 | 透明导航栏 + 品牌色 Logo |

---

## 九、响应式布局规范

### 9.1 断点定义

| 断点名称 | 范围 | 典型设备 |
|---------|------|---------|
| **Desktop** | > 1024px | 桌面显示器、笔记本 |
| **Tablet** | 640px - 1024px | iPad、平板 |
| **Mobile** | < 640px | 手机 |

### 9.2 Center Hero 响应式降级

```css
/* Desktop: 完整布局 */
@media (min-width: 1025px) {
  .hero-center {
    padding: 80px 48px 60px;
  }
  .hero-center__title {
    font-size: clamp(56px, 7vw, 96px);
  }
}

/* Tablet: 简化布局 */
@media (min-width: 640px) and (max-width: 1024px) {
  .hero-center {
    padding: 72px 32px 48px;
  }
  .hero-center__title {
    font-size: clamp(40px, 8vw, 64px);
  }
  .hero-center__visual {
    max-width: 700px;
  }
}

/* Mobile: 堆叠布局，字号缩放 */
@media (max-width: 639px) {
  .hero-center {
    padding: 64px 16px 40px;
    min-height: auto; /* 取消 100vh，允许自然高度 */
  }
  .hero-center__title {
    font-size: clamp(28px, 10vw, 40px);
    letter-spacing: -0.02em;
  }
  .hero-center__description {
    font-size: 15px;
    max-width: 100%;
  }
  .hero-center__cta {
    flex-direction: column; /* 按钮变为垂直堆叠 */
    width: 100%;
  }
  .hero-center__cta > * {
    width: 100%;
    justify-content: center;
  }
  .hero-center__visual {
    margin-top: 2rem;
    border-radius: 12px;
  }
}
```

### 9.3 Split Hero 响应式降级

```css
/* Desktop: 左右分列 */
@media (min-width: 1025px) {
  .hero-split {
    grid-template-columns: 45fr 55fr;
  }
}

/* Tablet: 比例调整 */
@media (min-width: 640px) and (max-width: 1024px) {
  .hero-split {
    grid-template-columns: 1fr 1fr;
    min-height: auto;
    padding-top: 64px;
  }
  .hero-split__text {
    padding: 40px 32px;
  }
}

/* Mobile: 上下堆叠 */
@media (max-width: 639px) {
  .hero-split {
    grid-template-columns: 1fr; /* 单列 */
    min-height: auto;
  }
  .hero-split__text {
    padding: 40px 20px 24px;
    text-align: center;
    align-items: center;
  }
  .hero-split__title {
    font-size: clamp(28px, 8vw, 40px);
  }
  .hero-split__cta {
    justify-content: center;
  }
  .hero-split__visual {
    padding: 0 20px 40px;
    order: 2; /* 图片移到下方 */
  }
  /* 移动端隐藏浮动卡片 */
  .hero-split__floating-card {
    display: none;
  }
}
```

### 9.4 Product Showcase Hero 响应式降级

```css
/* Desktop: 完整展示 */
@media (min-width: 1025px) {
  .hero-showcase__product {
    max-width: 1100px;
  }
  .floating-card {
    display: flex;
  }
}

/* Tablet: 缩小截图 */
@media (min-width: 640px) and (max-width: 1024px) {
  .hero-showcase__product {
    max-width: 100%;
  }
}

/* Mobile: 隐藏浮动卡片，简化展示 */
@media (max-width: 639px) {
  .hero-showcase__product {
    margin-top: 2rem;
    border-radius: 12px;
  }
  /* 移动端隐藏所有浮动卡片 */
  .hero-showcase__floats {
    display: none;
  }
  /* 关闭浮动动画，节省性能 */
  .hero-showcase__product {
    animation: none;
  }
}
```

### 9.5 各布局类型降级策略总结

| 布局类型 | Desktop | Tablet | Mobile |
|---------|---------|--------|--------|
| **Center Hero** | 完整居中 + 大标题 + 产品图 | 简化间距 + 中标题 | 堆叠 + 小标题 + CTA 纵向排列 |
| **Split Hero** | 45:55 分列 | 50:50 分列 | 单列堆叠，文字在上 |
| **Product Showcase** | Dashboard + 浮动卡片 | 缩小 Dashboard | 纯截图，无浮动卡片 |
| **Fullscreen Visual** | 全屏视频 + 叠加文字 | 70vh 高度 + 文字 | 50vh 高度 + 放大文字 |

---

## 十、首屏动效时序编排

### 10.1 完整入场时序表

```
时间轴（0ms - 1400ms）

0ms     │────────── Navbar 入场 ──────────│
        │  类型: fadeIn / slideDown       │
        │  时长: 400ms                    │
        │  缓动: cubic-bezier(0.16,1,0.3,1)│
        │
100ms   │────── Badge 徽章入场 ──────│
        │  类型: fadeInUp                │
        │  时长: 600ms                   │
        │  延迟: 100ms                   │
        │
200ms   │──────── Title 标题入场 ────────│
        │  类型: fadeInUp                │
        │  时长: 700ms                   │
        │  延迟: 200ms                   │
        │
350ms   │──── Description 描述入场 ────│
        │  类型: fadeInUp                │
        │  时长: 700ms                   │
        │  延迟: 350ms                   │
        │
500ms   │─────── CTA 按钮入场 ─────────│
        │  类型: fadeInUp + scale(0.95→1)│
        │  时长: 600ms                   │
        │  延迟: 500ms                   │
        │
600ms   │── Product Visual 视觉入场 ───│
        │  类型: fadeInUp + scale(0.97→1)│
        │  时长: 800ms                   │
        │  延迟: 600ms                   │
        │
900ms   │──── Floating Cards 入场 ─────│
        │  类型: fadeIn + scale(0.8→1)   │
        │  时长: 500ms                   │
        │  延迟: 900ms                   │
        │
1400ms  │────── 全部动画完成 ───────────│
```

### 10.2 统一动画 CSS

```css
/* 核心缓动函数 - 推荐用于所有 Hero 动效 */
:root {
  --ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);
  --ease-out-quart: cubic-bezier(0.25, 1, 0.5, 1);
  --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* 通用入场动画 */
@keyframes heroFadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes heroFadeInScale {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes heroFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Navbar */
.hero-navbar {
  animation: heroFadeIn 400ms var(--ease-out-expo) 0ms both;
}

/* Badge */
.hero-badge {
  animation: heroFadeInUp 600ms var(--ease-out-expo) 100ms both;
}

/* Title */
.hero-title {
  animation: heroFadeInUp 700ms var(--ease-out-expo) 200ms both;
}

/* Description */
.hero-description {
  animation: heroFadeInUp 700ms var(--ease-out-expo) 350ms both;
}

/* CTA */
.hero-cta-group {
  animation: heroFadeInUp 600ms var(--ease-out-expo) 500ms both;
}

/* Product Visual */
.hero-visual {
  animation: heroFadeInScale 800ms var(--ease-out-expo) 600ms both;
}

/* Floating Cards */
.floating-card {
  animation: heroFadeInScale 500ms var(--ease-spring) 900ms both;
}
```

### 10.3 动画性能注意事项

- **仅动画 `transform` 和 `opacity`**：这两个属性不触发重排（reflow）
- **使用 `will-change`**：对即将动画的元素预声明

```css
/* 性能优化 - 提前告知浏览器哪些属性会变化 */
.hero-title,
.hero-description,
.hero-cta-group,
.hero-visual,
.floating-card {
  will-change: transform, opacity;
}

/* 动画结束后移除 will-change */
.floating-card {
  animation: heroFadeInScale 500ms var(--ease-spring) 900ms both;
  animation-fill-mode: both;
}
```

- **尊重用户偏好**：减少动画模式

```css
/* 尊重用户系统设置 - 减少动画 */
@media (prefers-reduced-motion: reduce) {
  .hero-navbar,
  .hero-badge,
  .hero-title,
  .hero-description,
  .hero-cta-group,
  .hero-visual,
  .floating-card {
    animation: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

---

## 十一、行业适配速查表

| 行业 | 推荐布局 | 标题风格 | CTA 风格 | 视觉焦点 | 参考品牌 |
|------|---------|---------|---------|---------|---------|
| **AI SaaS** | Center Hero | 渐变文字、72-96px | 实心深色按钮 | 产品 Demo 动画 | Linear, Vercel |
| **开发者工具** | Product Showcase | 等宽/代码风、64-80px | Ghost + 实心双按钮 | Dashboard 截图 | Stripe, GitHub |
| **医疗健康** | Split Hero | 温暖柔和、48-64px | 圆角柔和按钮 | 产品实拍/插画 | Ro.co, Zocdoc |
| **电商零售** | Split Hero | 大胆醒目、56-72px | 鲜明色彩按钮 | 产品高清图 | Apple, Nike |
| **企业服务** | Split Hero | 专业稳重、48-64px | 实心品牌色按钮 | 数据图表/平台截图 | Salesforce, 钉钉 |
| **金融科技** | Center Hero | 信任感、56-72px | 深蓝/深绿按钮 | 安全/数据可视化 | Plaid, Coinbase |
| **创意工具** | Center Hero | 艺术感/渐变、72-96px | 品牌色按钮 | 创意作品展示 | Figma, Canva |
| **教育科技** | Center Hero | 友好亲切、48-64px | 明亮色彩按钮 | 学习场景/产品截图 | Duolingo, Coursera |
| **奢侈品牌** | Fullscreen Visual | 极简优雅、48-80px | 透明/描边按钮 | 全屏视频/大片 | Apple, 华为 |
| **生活方式** | Fullscreen Visual | 情感化、56-80px | Ghost 按钮 | 氛围图片/视频 | Airbnb, 蔚来 |
| **影视娱乐** | Fullscreen Visual | 电影感、64-96px | 播放按钮/CTA | 剧照/预告片 | Netflix, Disney+ |
| **数据平台** | Product Showcase | 技术感、48-64px | 实色按钮 | 实时 Dashboard | Datadog, Mixpanel |

---

## 十二、AI 审美规则摘要

### 12.1 必须遵守（10 条）

1. **首屏必须有单一视觉焦点**：不允许所有元素争夺注意力，必须通过字号、色彩、留白建立清晰的视觉层级
2. **标题字号必须使用 `clamp()`**：确保在所有屏幕尺寸下平滑缩放，避免硬断点造成的跳变
3. **背景动效 z-index 必须为 0**：动效层永远在文字层下方，不得遮挡任何可读内容
4. **文字对比度必须 ≥ 4.5:1**：无论背景多复杂，文字可读性是底线，使用遮罩或半透明背景保障
5. **CTA 按钮必须可见且可点击**：首屏必须有至少一个 CTA，且 CTA 热区不小于 `48×52px`
6. **动效仅使用 transform 和 opacity**：禁止动画化 `width`、`height`、`top`、`left` 等触发重排的属性
7. **必须尊重 `prefers-reduced-motion`**：在用户系统设置减少动画时，关闭所有入场动画和持续动画
8. **Hero 区域内容占比不超过 40%**：留白是设计的一部分，不是浪费；60% 的空间留给呼吸和视觉元素
9. **渐变文字必须提供 fallback**：使用 `-webkit-text-fill-color: transparent` 时，必须同时声明 `color` 属性作为降级
10. **导航栏高度必须被 Hero padding 补偿**：Fixed/Sticky 导航栏会遮挡 Hero 内容，必须通过 `padding-top` 补偿

### 12.2 禁止事项（8 条）

1. **禁止使用超过 3 行的标题**：超过 3 行的标题失去冲击力，必须精简文案
2. **禁止在首屏放置 3 个以上 CTA**：多个 CTA 分散用户注意力，最多主 CTA + 次 CTA 共 2 个
3. **禁止使用纯装饰性动效**：每一帧动画必须服务于信息传达或品牌叙事，拒绝"为了动而动"
4. **禁止在背景动效层放置可交互元素**：背景层 `pointer-events: none`，交互元素必须在前景层
5. **禁止使用 `!important` 覆盖动画**：除 `prefers-reduced-motion` 外，不得使用 `!important` 强制覆盖样式
6. **禁止标题使用 `text-shadow` 模糊效果**：文字阴影降低可读性，如需增强对比应使用背景遮罩
7. **禁止在移动端保留桌面端动效**：移动端必须关闭浮动卡片、粒子效果等性能消耗型元素
8. **禁止全屏视频自动播放带声音**：视频可自动播放但必须静音，声音必须由用户主动触发

---

## 附录：快速启动模板

### Center Hero 快速模板

```html
<section class="hero-center">
  <!-- 背景动效层 -->
  <div class="hero-center__bg">
    <div class="hero-bg-gradient--light"></div>
  </div>

  <!-- 内容层 -->
  <div class="hero-center__content">
    <span class="hero-badge">New: AI-Powered Features</span>
    <h1 class="hero-center__title">Build Better Products Faster</h1>
    <p class="hero-center__description">
      The modern platform that helps teams ship 10x faster with AI.
    </p>
    <div class="hero-center__cta">
      <a href="#" class="cta-primary">Get Started Free →</a>
      <a href="#" class="cta-ghost">Watch Demo</a>
    </div>
  </div>

  <!-- 产品视觉 -->
  <div class="hero-center__visual">
    <img src="product-screenshot.png" alt="Product Dashboard" />
  </div>
</section>
```

### Split Hero 快速模板

```html
<section class="hero-split">
  <!-- 文字侧 -->
  <div class="hero-split__text">
    <h1 class="hero-split__title">Transform Your Health Journey</h1>
    <p class="hero-split__description">
      Personalized treatments powered by AI, designed for your unique needs.
    </p>
    <div class="hero-split__cta">
      <a href="#" class="cta-primary">Book Now →</a>
      <a href="#" class="cta-ghost">Learn More</a>
    </div>
  </div>

  <!-- 视觉侧 -->
  <div class="hero-split__visual">
    <img
      class="hero-split__image"
      src="product-image.jpg"
      alt="Product Preview"
    />
    <div class="hero-split__floating-card floating-card--left">
      <span>+12%</span> Improvement
    </div>
  </div>
</section>
```

---

> **文档版本**：v1.0
> **适用范围**：所有基于 motionsites.ai 设计语言的首屏布局
> **维护建议**：每季度根据行业案例更新"真实案例参考"部分