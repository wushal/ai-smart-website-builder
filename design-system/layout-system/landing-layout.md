# Landing Page Layout System（落地页布局系统）

> 涵盖完整官网的页面结构、各区块布局规范、区块间距系统和行业定制化规则。本文档适用于设计系统团队与前端开发协作，确保落地页在视觉、交互和转化效率上达到统一标准。

---

## 一、页面结构总览

### 1.1 标准 Section 顺序

完整官网默认包含 10 个标准 Section，按照自上而下的叙事弧线排列：

```
┌──────────────────────────────────────────────────────┐
│                     Navbar (导航栏)                    │  固定顶部
├──────────────────────────────────────────────────────┤
│                     Hero (首屏)                       │  建立认知
├──────────────────────────────────────────────────────┤
│                Social Proof (社会证明)                 │  建立信任
├──────────────────────────────────────────────────────┤
│               Features (功能展示)                     │  解释能力
├──────────────────────────────────────────────────────┤
│               Workflow (工作流程)                     │  解释流程
├──────────────────────────────────────────────────────┤
│            Product Demo (产品演示)                    │  视觉说服
├──────────────────────────────────────────────────────┤
│             Testimonials (用户评价)                   │  社会认同
├──────────────────────────────────────────────────────┤
│                Pricing (定价)                         │  商业转化
├──────────────────────────────────────────────────────┤
│                  FAQ (常见问题)                       │  降低疑虑
├──────────────────────────────────────────────────────┤
│                 Footer (页脚)                         │  补充导航
└──────────────────────────────────────────────────────┘
```

### 1.2 各 Section 核心职责

| # | Section | 核心职责 | 转化目标 |
|---|---------|---------|---------|
| 1 | Navbar | 全局导航与品牌标识 | 引导用户到达关键区域 |
| 2 | Hero | 建立认知——用户 3 秒内理解产品是什么 | 首屏 CTA 点击 |
| 3 | Social Proof | 建立信任——"别人都在用" | 降低跳出率 |
| 4 | Features | 解释能力——产品能做什么 | 激发兴趣 |
| 5 | Workflow | 解释流程——怎么用、多简单 | 消除使用顾虑 |
| 6 | Product Demo | 视觉说服——眼见为实 | 增强购买意愿 |
| 7 | Testimonials | 社会认同——真实用户的声音 | 巩固信任 |
| 8 | Pricing | 商业转化——引导付费决策 | 促成转化 |
| 9 | FAQ | 降低疑虑——解答最后疑问 | 消除障碍 |
| 10 | Footer | 补充导航与品牌收尾 | 提供替代路径 |

### 1.3 页面视觉流动方向

落地页遵循自上而下的叙事弧线，信息密度和视觉节奏交替变化，形成"吸引 → 信任 → 理解 → 渴望 → 行动"的完整转化漏斗：

```
注意力强度  ▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░░░░░░░░░▓▓▓▓▓░░░░░
           ↑ Hero      ↑ Features       ↑ Pricing
信息密度    ░░░░░░░░░░░▓▓▓▓▓▓▓▓▓░░░░▓▓▓▓▓▓▓▓░░░░░░░
                       ↑ Workflow       ↑ FAQ
视觉节奏   快──────────慢──────────快──────────慢
```

---

## 二、Section 逐一详解

---

### 2.1 Navbar（导航栏）

**核心职责**：全局导航与品牌标识，确保用户在任何滚动位置都能快速跳转。

#### 布局参数

| 属性 | 值 |
|------|-----|
| 定位 | `position: fixed; top: 0; z-index: 1000` |
| 高度 | 56px（紧凑） / 64px（标准） |
| 最大宽度 | `max-width: 1440px; margin: 0 auto` |
| 内边距 | `padding: 0 24px`（桌面）/ `0 16px`（移动） |
| 背景变化 | 滚动前透明 → 滚动后实色 + 底部阴影 |

#### 结构组成

```
┌─────────────────────────────────────────────────────┐
│  [Logo]    Home  Features  Pricing  Docs   [CTA]   │
│                                                       │
│  ┌─────────────────────────────────────────────────┐ │
│  │  Logo区域  │  菜单项(4-6个)        │  CTA按钮   │ │
│  └─────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
```

- **Logo**：左侧，高度 32px，与导航文字垂直居中
- **菜单项**：4-6 个，字体 14-16px，字重 500，间距 32px
- **CTA 按钮**：右侧，主色调填充，圆角 8px，高度 36-40px
- **滚动后变化**：`background: rgba(255,255,255,0.95); backdrop-filter: blur(12px); box-shadow: 0 1px 3px rgba(0,0,0,0.1)`

#### 移动端适配

- 768px 以下隐藏菜单项，显示汉堡图标
- 侧边抽屉菜单，宽度 280px，从右侧滑入
- 遮罩层 `background: rgba(0,0,0,0.5)`

#### CSS 代码

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.navbar.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-inner {
  width: 100%;
  max-width: 1440px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  height: 32px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 32px;
}

.navbar-menu a {
  font-size: 15px;
  font-weight: 500;
  color: #475569;
  text-decoration: none;
  transition: color 0.2s ease;
}

.navbar-menu a:hover {
  color: #0f172a;
}

.navbar-cta {
  height: 40px;
  padding: 0 20px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  border: none;
}

@media (max-width: 768px) {
  .navbar-menu {
    display: none;
  }

  .navbar-hamburger {
    display: flex;
  }
}
```

---

### 2.2 Hero（首屏）

**核心职责**：建立认知——让用户在 3 秒内理解产品是什么、能解决什么问题。

#### 布局参数

| 属性 | 值 |
|------|-----|
| 最小高度 | `min-height: 80vh`（内容紧凑时）至 `100vh` |
| 最大宽度 | `max-width: 1200px`（内容区） |
| 内边距 | `padding: 120px 24px 80px`（为 Navbar 留出空间） |
| 文字对齐 | 居中（Centered）/ 左对齐（Split） |
| 背景处理 | 渐变 / 大图 + 遮罩 / 纯色 |

> 详细的三种 Hero 布局类型（Centered / Split / Visual-First）请参考 `hero-layout.md`。

#### 三种布局类型概览

**类型 A：Centered（居中式）**

```
┌─────────────────────────────────────────────────┐
│                                                   │
│                [Badge / 标签]                      │
│                                                   │
│              主标题 (H1, 48-72px)                  │
│                                                   │
│              副标题 (20-24px, 灰色)                │
│                                                   │
│           [CTA 主按钮]  [CTA 次按钮]               │
│                                                   │
│                  [产品预览图]                      │
│                                                   │
└─────────────────────────────────────────────────┘
```

**类型 B：Split（分栏式）**

```
┌────────────────────────┬────────────────────────┐
│                        │                        │
│    主标题 (H1)          │                        │
│                        │    [产品截图/           │
│    副标题               │     插图/              │
│                        │     动画]               │
│    [CTA] [CTA]          │                        │
│                        │                        │
│    [信任指标]           │                        │
│                        │                        │
└────────────────────────┴────────────────────────┘
```

**类型 C：Visual-First（视觉优先式）**

```
┌─────────────────────────────────────────────────┐
│                                                   │
│              ┌─────────────────┐                  │
│              │                 │                  │
│              │   大面积产品     │                  │
│              │   视觉/视频      │                  │
│              │                 │                  │
│              └─────────────────┘                  │
│                                                   │
│              主标题 + 副标题 + CTA                 │
│                                                   │
└─────────────────────────────────────────────────┘
```

#### CSS 代码

```css
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 120px 24px 80px;
  text-align: center;
}

.hero-centered {
  max-width: 800px;
  margin: 0 auto;
}

.hero-split {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
  text-align: left;
}

.hero h1 {
  font-size: clamp(40px, 5vw, 72px);
  font-weight: 700;
  line-height: 1.1;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
}

.hero-subtitle {
  font-size: clamp(18px, 2vw, 24px);
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 640px;
}

.hero-centered .hero-subtitle {
  margin-left: auto;
  margin-right: auto;
}

.hero-cta-group {
  display: flex;
  align-items: center;
  gap: 16px;
  justify-content: center;
}

.hero-split .hero-cta-group {
  justify-content: flex-start;
}

@media (max-width: 768px) {
  .hero-split {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero-split .hero-cta-group {
    justify-content: center;
  }
}
```

---

### 2.3 Social Proof（社会证明）

**核心职责**：建立信任——通过知名客户、用户规模和关键数据证明产品可靠。

#### 布局模式

**模式 A：Logo 墙**

```
┌──────────────────────────────────────────────────────────────┐
│                Trusted by 10,000+ teams worldwide             │
│                                                               │
│   [Logo1]  [Logo2]  [Logo3]  [Logo4]  [Logo5]  [Logo6]       │
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

**模式 B：数据亮点**

```
┌──────────────────────────────────────────────────────────────┐
│                                                               │
│      10,000+            99.9%            50ms              4.9  │
│      活跃用户            可用性          响应时间          用户评分│
│                                                               │
└──────────────────────────────────────────────────────────────┘
```

#### 布局参数

| 属性 | 值 |
|------|-----|
| 布局方式 | `display: flex` 横排排列 |
| Logo 样式 | `filter: grayscale(100%); opacity: 0.6` |
| Logo 间距 | `gap: 32-48px` |
| 数据亮点列数 | 3-4 列 |
| 数据数字字号 | 48-64px，字重 700 |
| 数据标签字号 | 16-18px，颜色 `#64748b` |
| 区块内边距 | `padding: 64-80px 24px` |
| 背景色 | 通常为浅灰 `#f8fafc` 或白色 |

#### CSS 代码

```css
.social-proof {
  padding: 80px 24px;
  text-align: center;
}

.social-proof-heading {
  font-size: 16px;
  font-weight: 500;
  color: #94a3b8;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 48px;
}

/* Logo 墙 */
.logo-wall {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 48px;
  max-width: 1000px;
  margin: 0 auto;
}

.logo-wall img {
  height: 32px;
  filter: grayscale(100%);
  opacity: 0.5;
  transition: opacity 0.3s ease, filter 0.3s ease;
}

.logo-wall img:hover {
  opacity: 0.8;
  filter: grayscale(0%);
}

/* 数据亮点 */
.stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  max-width: 900px;
  margin: 0 auto;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 56px;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 1;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 16px;
  color: #64748b;
}

@media (max-width: 768px) {
  .stats-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  .stat-number {
    font-size: 40px;
  }
}
```

---

### 2.4 Features（功能展示）

**核心职责**：解释能力——让用户清晰理解产品提供的核心功能与价值。

#### 布局模式

**模式 A：Bento Grid（便当盒网格）**

```
┌──────────────────┬──────────┬──────────┐
│                  │          │          │
│    大 Feature     │ Feature  │ Feature  │
│    (2x2)         │          │          │
│                  │          │          │
├──────────┬───────┴──────────┴──────────┤
│          │                              │
│ Feature  │       大 Feature (2x1)       │
│          │                              │
├──────────┼──────────────┬───────────────┤
│          │              │               │
│ Feature  │   Feature    │   Feature     │
│          │              │               │
└──────────┴──────────────┴───────────────┘
```

**模式 B：Z 字型图文交替**

```
┌──────────────────────────────────────────────────┐
│  ┌────────────────────┐  ┌────────────────────┐   │
│  │                    │  │                    │   │
│  │    [图标/插图]      │  │   Feature 2 标题   │   │
│  │                    │  │   描述文字...       │   │
│  └────────────────────┘  └────────────────────┘   │
│         Feature 1 标题                              │
│         描述文字...                                 │
│                                                    │
│  ┌────────────────────┐  ┌────────────────────┐   │
│  │   Feature 3 标题   │  │                    │   │
│  │   描述文字...       │  │    [图标/插图]      │   │
│  │                    │  │                    │   │
│  └────────────────────┘  └────────────────────┘   │
│                                                    │
└──────────────────────────────────────────────────┘
```

**模式 C：卡片网格**

```
┌────────────┐  ┌────────────┐  ┌────────────┐
│  [图标]     │  │  [图标]     │  │  [图标]     │
│  标题       │  │  标题       │  │  标题       │
│  描述...    │  │  描述...    │  │  描述...    │
└────────────┘  └────────────┘  └────────────┘
┌────────────┐  ┌────────────┐  ┌────────────┐
│  [图标]     │  │  [图标]     │  │  [图标]     │
│  标题       │  │  标题       │  │  标题       │
│  描述...    │  │  描述...    │  │  描述...    │
└────────────┘  └────────────┘  └────────────┘
```

#### 布局参数

| 属性 | 值 |
|------|-----|
| 功能数量 | 3-6 个核心功能 |
| 网格间距 | `gap: 24px` |
| 区块上下内边距 | `padding: 80-120px 24px` |
| 单个 Feature 结构 | 图标 + 标题 + 描述 |
| 标题字号 | 20-24px，字重 600 |
| 描述字号 | 16px，颜色 `#64748b`，行高 1.6 |
| 内容最大宽度 | `max-width: 1200px` |

#### CSS 代码

```css
.features {
  padding: 120px 24px;
}

.features-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.features-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 64px;
}

.features-header h2 {
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.features-header p {
  font-size: 18px;
  color: #64748b;
  line-height: 1.6;
}

/* 卡片网格 */
.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.feature-card {
  padding: 32px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.feature-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transform: translateY(-4px);
}

.feature-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 24px;
}

.feature-card h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #0f172a;
}

.feature-card p {
  font-size: 16px;
  color: #64748b;
  line-height: 1.6;
}

/* Bento Grid */
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.bento-large {
  grid-column: span 2;
  grid-row: span 2;
}

.bento-wide {
  grid-column: span 2;
}

@media (max-width: 768px) {
  .features-grid,
  .bento-grid {
    grid-template-columns: 1fr;
  }

  .bento-large,
  .bento-wide {
    grid-column: span 1;
    grid-row: span 1;
  }
}
```

---

### 2.5 Workflow（工作流程）

**核心职责**：解释流程——让用户了解使用产品有多简单，消除"太难了"的顾虑。

#### 布局模式

**模式 A：横向步骤流**

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                    │
│   (1)──────────(2)──────────(3)──────────(4)                      │
│   ┌─────┐     ┌─────┐     ┌─────┐     ┌─────┐                    │
│   │ 图标 │────▶│ 图标 │────▶│ 图标 │────▶│ 图标 │                    │
│   └─────┘     └─────┘     └─────┘     └─────┘                    │
│   步骤标题    步骤标题    步骤标题    步骤标题                       │
│   步骤描述    步骤描述    步骤描述    步骤描述                       │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

**模式 B：垂直时间线**

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                    │
│   ●  步骤 1：注册账号                                              │
│   │  描述文字说明这一步的操作...                                    │
│   │  ┌──────────────────────────────────┐                         │
│   │  │         [插图/截图]               │                         │
│   │  └──────────────────────────────────┘                         │
│   │                                                                │
│   ●  步骤 2：配置项目                                              │
│   │  描述文字说明这一步的操作...                                    │
│   │  ┌──────────────────────────────────┐                         │
│   │  │         [插图/截图]               │                         │
│   │  └──────────────────────────────────┘                         │
│   │                                                                │
│   ●  步骤 3：开始使用                                              │
│      描述文字说明这一步的操作...                                    │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

#### 布局参数

| 属性 | 值 |
|------|-----|
| 步骤数量 | 3-5 步 |
| 横向步骤间距 | `gap: 24-32px` |
| 垂直步骤间距 | `gap: 48-64px` |
| 编号样式 | 圆形背景，字号 14-16px，字重 700 |
| 连接线 | `border-bottom: 2px dashed #cbd5e1` 或实线 |
| 箭头 | SVG 箭头图标，颜色 `#94a3b8` |
| 每步结构 | 编号 + 标题 + 描述 + 插图 |
| 标题字号 | 18-20px，字重 600 |
| 描述字号 | 16px，颜色 `#64748b` |
| 区块内边距 | `padding: 100-120px 24px` |

#### CSS 代码

```css
.workflow {
  padding: 120px 24px;
}

.workflow-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.workflow-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 80px;
}

/* 横向步骤流 */
.steps-horizontal {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  position: relative;
}

.step-card {
  text-align: center;
  position: relative;
}

.step-number {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  margin: 0 auto 20px;
  position: relative;
  z-index: 1;
}

/* 步骤间连接线 */
.steps-horizontal::before {
  content: '';
  position: absolute;
  top: 24px;
  left: 12%;
  right: 12%;
  height: 2px;
  background: #e2e8f0;
  z-index: 0;
}

.step-card h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #0f172a;
}

.step-card p {
  font-size: 15px;
  color: #64748b;
  line-height: 1.6;
}

.step-illustration {
  margin-top: 20px;
  border-radius: 12px;
  overflow: hidden;
}

/* 垂直时间线 */
.steps-vertical {
  max-width: 640px;
  margin: 0 auto;
  position: relative;
}

.steps-vertical::before {
  content: '';
  position: absolute;
  top: 24px;
  bottom: 24px;
  left: 23px;
  width: 2px;
  background: #e2e8f0;
}

.step-vertical-item {
  display: flex;
  gap: 24px;
  padding-bottom: 48px;
  position: relative;
}

.step-vertical-item:last-child {
  padding-bottom: 0;
}

.step-vertical-dot {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 700;
  flex-shrink: 0;
  position: relative;
  z-index: 1;
}

.step-vertical-content h3 {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #0f172a;
}

.step-vertical-content p {
  font-size: 16px;
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 16px;
}

@media (max-width: 768px) {
  .steps-horizontal {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .steps-horizontal::before {
    top: 0;
    bottom: 0;
    left: 23px;
    right: auto;
    width: 2px;
    height: 100%;
  }
}
```

---

### 2.6 Product Demo（产品演示）

**核心职责**：视觉说服——通过截图、视频或 GIF 展示真实产品界面，让用户"眼见为实"。

#### 布局模式

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                    │
│              看看 [产品名] 如何为你工作                               │
│                                                                    │
│        ┌──────────────────────────────────────────┐               │
│        │                                          │               │
│        │          [产品截图 / 视频 / GIF]          │               │
│        │                                          │               │
│        │                                          │               │
│        └──────────────────────────────────────────┘               │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

#### 布局参数

| 属性 | 值 |
|------|-----|
| 宽度 | `width: 100%` 或 `max-width: 1200px` 居中 |
| 圆角 | `border-radius: 16px`（rounded-2xl） |
| 阴影 | `box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25)` |
| 边框 | `border: 1px solid #e2e8f0`（浅色主题） |
| 浮动动画 | `translateY(0) → translateY(-20px) → translateY(0)` |
| 动画周期 | 6-8 秒，ease-in-out |
| 区块内边距 | `padding: 100-120px 24px` |
| 标题字号 | 32-48px，居中 |
| 副标题字号 | 18px，居中，颜色 `#64748b` |

#### CSS 代码

```css
.product-demo {
  padding: 120px 24px;
}

.product-demo-inner {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
}

.product-demo-header {
  max-width: 640px;
  margin: 0 auto 64px;
}

.product-demo-header h2 {
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.product-screenshot {
  width: 100%;
  border-radius: 16px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border: 1px solid #e2e8f0;
  animation: float 6s ease-in-out infinite;
  overflow: hidden;
}

.product-screenshot img,
.product-screenshot video {
  width: 100%;
  height: auto;
  display: block;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

/* 深色主题下的增强阴影 */
.product-demo-dark .product-screenshot {
  box-shadow: 0 25px 60px -12px rgba(0, 0, 0, 0.5);
  border-color: rgba(255, 255, 255, 0.1);
}

@media (prefers-reduced-motion: reduce) {
  .product-screenshot {
    animation: none;
  }
}
```

---

### 2.7 Testimonials（用户评价）

**核心职责**：社会认同——通过真实用户的评价增强可信度和情感连接。

#### 布局模式

```
┌──────────────────────────────────────────────────────────────────┐
│                    深受用户喜爱                                    │
│                                                                    │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐ │
│  │  ★★★★★           │  │  ★★★★★           │  │  ★★★★★           │ │
│  │                  │  │                  │  │                  │ │
│  │  "评价文字..."    │  │  "评价文字..."    │  │  "评价文字..."    │ │
│  │                  │  │                  │  │                  │ │
│  │  [头像] 姓名      │  │  [头像] 姓名      │  │  [头像] 姓名      │ │
│  │  职位 / 公司      │  │  职位 / 公司      │  │  职位 / 公司      │ │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘ │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

#### 布局参数

| 属性 | 值 |
|------|-----|
| 布局方式 | `grid` 1-3 列 |
| 评价数量 | 3-6 条 |
| 卡片内边距 | `padding: 32px` |
| 卡片圆角 | `border-radius: 16px` |
| 卡片边框 | `border: 1px solid #e2e8f0` |
| 头像尺寸 | `width: 48px; height: 48px; border-radius: 50%` |
| 姓名字号 | 16px，字重 600 |
| 职位字号 | 14px，颜色 `#94a3b8` |
| 评价字号 | 16-18px，行高 1.7 |
| 星级 | 金色 `#f59e0b`，5 星制 |
| 区块内边距 | `padding: 100-120px 24px` |
| 可选轮播 | Carousel，自动播放 5 秒间隔 |

#### CSS 代码

```css
.testimonials {
  padding: 120px 24px;
}

.testimonials-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.testimonials-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 64px;
}

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.testimonial-card {
  padding: 32px;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  transition: box-shadow 0.3s ease;
}

.testimonial-card:hover {
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
}

.testimonial-stars {
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
  color: #f59e0b;
  font-size: 18px;
}

.testimonial-text {
  font-size: 17px;
  line-height: 1.7;
  color: #334155;
  margin-bottom: 24px;
}

.testimonial-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.testimonial-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
}

.testimonial-name {
  font-size: 16px;
  font-weight: 600;
  color: #0f172a;
}

.testimonial-role {
  font-size: 14px;
  color: #94a3b8;
}

/* 轮播模式 */
.testimonials-carousel {
  overflow: hidden;
  position: relative;
}

.testimonials-track {
  display: flex;
  gap: 24px;
  transition: transform 0.5s ease;
}

.testimonials-track .testimonial-card {
  min-width: calc(33.333% - 16px);
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  .testimonials-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .testimonials-track .testimonial-card {
    min-width: calc(50% - 12px);
  }
}

@media (max-width: 640px) {
  .testimonials-grid {
    grid-template-columns: 1fr;
  }

  .testimonials-track .testimonial-card {
    min-width: 100%;
  }
}
```

---

### 2.8 Pricing（定价）

**核心职责**：商业转化——引导用户做出付费决策，是转化漏斗的关键节点。

#### 布局模式

```
┌──────────────────────────────────────────────────────────────────┐
│                     选择适合你的方案                                │
│                                                                    │
│              [月付]  ──●──  [年付 (省20%)]                          │
│                                                                    │
│  ┌──────────────┐  ┌━━━━━━━━━━━━━━━━┐  ┌──────────────┐          │
│  │   基础版      │  │   专业版 (推荐)  │  │   企业版      │          │
│  │              │  ┃                  ┃  │              │          │
│  │   ¥0/月      │  ┃    ¥99/月        ┃  │   定制报价    │          │
│  │              │  ┃                  ┃  │              │          │
│  │  · 功能1     │  ┃  · 功能1         ┃  │  · 功能1     │          │
│  │  · 功能2     │  ┃  · 功能2         ┃  │  · 功能2     │          │
│  │  · 功能3     │  ┃  · 功能3         ┃  │  · 功能3     │          │
│  │              │  ┃  · 功能4 (独有)   ┃  │  · 功能4     │          │
│  │  [开始使用]   │  ┃                  ┃  │  [联系销售]   │          │
│  │              │  ┃  [立即升级]       ┃  │              │          │
│  └──────────────┘  ┗━━━━━━━━━━━━━━━━┛  └──────────────┘          │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

#### 布局参数

| 属性 | 值 |
|------|-----|
| 布局方式 | `grid` 3 列（基础 / 专业 / 企业） |
| 卡片宽度 | 等宽，推荐卡片可略大（scale 1.02-1.05） |
| 卡片内边距 | `padding: 32-40px` |
| 卡片圆角 | `border-radius: 16-20px` |
| 推荐 Plan 高亮 | 边框发光 `box-shadow: 0 0 0 2px [主色]` 或放大 5% |
| 推荐标签 | 顶部胶囊标签 "最受欢迎" |
| 价格字号 | 40-56px，字重 700 |
| 功能列表 | 每行一个，带对勾图标，间距 12-16px |
| CTA 按钮 | 宽度 100%，高度 44-48px |
| 月付/年付切换 | Toggle 开关，居中 |
| 区块内边距 | `padding: 100-120px 24px` |

#### CSS 代码

```css
.pricing {
  padding: 120px 24px;
}

.pricing-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.pricing-header {
  text-align: center;
  max-width: 640px;
  margin: 0 auto 48px;
}

/* 月付/年付切换 */
.pricing-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 64px;
  font-size: 15px;
  color: #64748b;
}

.pricing-toggle-label.active {
  color: #0f172a;
  font-weight: 600;
}

.pricing-toggle-switch {
  width: 48px;
  height: 28px;
  border-radius: 14px;
  background: #e2e8f0;
  position: relative;
  cursor: pointer;
  transition: background 0.3s ease;
}

.pricing-toggle-switch.active {
  background: #3b82f6;
}

.pricing-toggle-switch::after {
  content: '';
  position: absolute;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: white;
  top: 3px;
  left: 3px;
  transition: transform 0.3s ease;
}

.pricing-toggle-switch.active::after {
  transform: translateX(20px);
}

/* 定价卡片 */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: start;
}

.pricing-card {
  padding: 40px 32px;
  border-radius: 20px;
  border: 1px solid #e2e8f0;
  background: #ffffff;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}

/* 推荐 Plan 高亮 */
.pricing-card.featured {
  border-color: #3b82f6;
  box-shadow: 0 0 0 2px #3b82f6, 0 12px 40px rgba(59, 130, 246, 0.15);
  transform: scale(1.03);
  z-index: 1;
}

.pricing-card.featured:hover {
  transform: scale(1.03) translateY(-4px);
}

.pricing-badge {
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  color: white;
  background: #3b82f6;
}

.pricing-plan-name {
  font-size: 20px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 8px;
}

.pricing-plan-desc {
  font-size: 14px;
  color: #94a3b8;
  margin-bottom: 24px;
}

.pricing-amount {
  display: flex;
  align-items: baseline;
  gap: 4px;
  margin-bottom: 32px;
}

.pricing-currency {
  font-size: 24px;
  font-weight: 600;
  color: #0f172a;
}

.pricing-value {
  font-size: 56px;
  font-weight: 700;
  color: #0f172a;
  line-height: 1;
  letter-spacing: -0.02em;
}

.pricing-period {
  font-size: 16px;
  color: #94a3b8;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin-bottom: 32px;
}

.pricing-features li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 0;
  font-size: 15px;
  color: #334155;
  border-bottom: 1px solid #f1f5f9;
}

.pricing-features li:last-child {
  border-bottom: none;
}

.pricing-check {
  color: #22c55e;
  font-size: 18px;
  flex-shrink: 0;
}

.pricing-cta {
  width: 100%;
  height: 48px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.pricing-cta:hover {
  opacity: 0.9;
  transform: scale(1.01);
}

.pricing-cta.primary {
  background: #3b82f6;
  color: white;
}

.pricing-cta.secondary {
  background: #f1f5f9;
  color: #0f172a;
}

@media (max-width: 768px) {
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }

  .pricing-card.featured {
    transform: none;
  }

  .pricing-card.featured:hover {
    transform: translateY(-4px);
  }
}
```

---

### 2.9 FAQ（常见问题）

**核心职责**：降低疑虑——解答用户最后的疑问，消除购买障碍。

#### 布局模式

```
┌──────────────────────────────────────────────────────────────────┐
│                     常见问题                                      │
│                                                                    │
│            ┌────────────────────────────────────┐                 │
│            │  ▶  产品支持哪些支付方式？            │                 │
│            ├────────────────────────────────────┤                 │
│            │  ▶  可以随时取消订阅吗？              │                 │
│            ├────────────────────────────────────┤                 │
│            │  ▼  数据安全如何保障？               │                 │
│            │     我们采用 AES-256 加密...        │                 │
│            ├────────────────────────────────────┤                 │
│            │  ▶  是否提供免费试用？               │                 │
│            ├────────────────────────────────────┤                 │
│            │  ▶  如何联系客服？                   │                 │
│            └────────────────────────────────────┘                 │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

#### 布局参数

| 属性 | 值 |
|------|-----|
| 布局方式 | 手风琴 Accordion，`max-width: 720px` 居中 |
| 问题数量 | 5-10 个 |
| 问题字号 | 16-18px，字重 500-600 |
| 答案字号 | 15-16px，颜色 `#64748b`，行高 1.7 |
| 问题间距 | `border-bottom: 1px solid #e2e8f0` |
| 展开动画 | `max-height` + `opacity` 过渡，300ms |
| 展开图标 | `+` / `-` 或 chevron 旋转 180deg |
| 区块内边距 | `padding: 100-120px 24px` |

#### CSS 代码

```css
.faq {
  padding: 120px 24px;
}

.faq-inner {
  max-width: 720px;
  margin: 0 auto;
}

.faq-header {
  text-align: center;
  margin-bottom: 64px;
}

.faq-header h2 {
  font-size: clamp(32px, 4vw, 48px);
  font-weight: 700;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
}

.faq-header p {
  font-size: 18px;
  color: #64748b;
}

.faq-list {
  border-top: 1px solid #e2e8f0;
}

.faq-item {
  border-bottom: 1px solid #e2e8f0;
}

.faq-question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  font-size: 17px;
  font-weight: 500;
  color: #0f172a;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  gap: 16px;
  transition: color 0.2s ease;
}

.faq-question:hover {
  color: #3b82f6;
}

.faq-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
  color: #94a3b8;
}

.faq-item.open .faq-icon {
  transform: rotate(45deg);
  color: #3b82f6;
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  opacity: 0;
  transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
}

.faq-item.open .faq-answer {
  max-height: 300px;
  opacity: 1;
  padding-bottom: 24px;
}

.faq-answer p {
  font-size: 16px;
  color: #64748b;
  line-height: 1.7;
}
```

---

### 2.10 Footer（页脚）

**核心职责**：补充导航与品牌收尾——提供用户可能需要的所有辅助链接和品牌信息。

#### 布局模式

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                    │
│  [Logo]                                                           │
│                                                                    │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐│
│  │ 产品      │ │ 资源      │ │ 公司      │ │ 支持      │ │ 法律      ││
│  │ · 功能1   │ │ · 文档    │ │ 关于我们  │ │ 帮助中心  │ │ 隐私政策  ││
│  │ · 功能2   │ │ · 博客    │ │ 团队      │ │ 联系我们  │ │ 服务条款  ││
│  │ · 定价    │ │ · 教程    │ │ 招聘      │ │ 社区      │ │ Cookie    ││
│  │ · 更新    │ │ · API     │ │ 新闻      │ │ 状态      │ │           ││
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘│
│                                                                    │
│  ┌─────────────────────────────────────────────────────────────┐ │
│  │  [Twitter]  [GitHub]  [LinkedIn]  [YouTube]                 │ │
│  │                                                              │ │
│  │  © 2024 Company Name. All rights reserved.                   │ │
│  └─────────────────────────────────────────────────────────────┘ │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

#### 布局参数

| 属性 | 值 |
|------|-----|
| 链接列数 | 4-6 列 |
| 列标题字号 | 14px，字重 600，大写，颜色 `#94a3b8` |
| 链接字号 | 14-15px，颜色 `#64748b` |
| 链接间距 | 每条链接 `padding: 6px 0` |
| 列间距 | `gap: 32-48px` |
| 社交图标尺寸 | 20-24px |
| 版权栏 | 上边框 `border-top: 1px solid #e2e8f0` |
| 区块内边距 | `padding: 64-80px 24px` |
| 背景色 | `#0f172a`（深色）或 `#f8fafc`（浅色） |

#### CSS 代码

```css
.footer {
  padding: 80px 24px 32px;
  background: #0f172a;
  color: #94a3b8;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-top {
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  gap: 48px;
  margin-bottom: 64px;
}

.footer-brand {
  max-width: 280px;
}

.footer-brand-logo {
  height: 32px;
  margin-bottom: 16px;
  filter: brightness(0) invert(1);
}

.footer-brand p {
  font-size: 14px;
  line-height: 1.6;
  color: #64748b;
}

.footer-column h4 {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #94a3b8;
  margin-bottom: 20px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 12px;
}

.footer-links a {
  font-size: 15px;
  color: #64748b;
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer-links a:hover {
  color: #ffffff;
}

.footer-bottom {
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
}

.footer-social {
  display: flex;
  gap: 20px;
}

.footer-social a {
  color: #64748b;
  transition: color 0.2s ease;
}

.footer-social a:hover {
  color: #ffffff;
}

.footer-copyright {
  font-size: 14px;
  color: #475569;
}

@media (max-width: 768px) {
  .footer-top {
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .footer-brand {
    grid-column: span 2;
  }

  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
```

---

## 三、区块间距系统

### 3.1 Section 间距规范表

| 间距位置 | Desktop (>=1024px) | Tablet (768-1023px) | Mobile (<768px) |
|----------|-------------------|--------------------|--------------------|
| Section 上下内边距 | 100-120px | 80-100px | 64-80px |
| Section 左右内边距 | 24px | 24px | 16-20px |
| 内容最大宽度 | 1200-1400px | 100% | 100% |
| 标题与内容间距 | 48-64px | 40-48px | 32-40px |
| 卡片网格间距 | 24-32px | 20-24px | 16-20px |

### 3.2 交替背景色规则

为在视觉上区分不同 Section，采用交替背景色：

```
Section 1  Navbar     →  透明 / 深色
Section 2  Hero       →  渐变 / 品牌主色浅底
Section 3  Social Proof →  #ffffff（白色）
Section 4  Features   →  #f8fafc（浅灰）
Section 5  Workflow   →  #ffffff（白色）
Section 6  Product Demo → #f8fafc（浅灰）或 深色 #0f172a
Section 7  Testimonials → #ffffff（白色）
Section 8  Pricing    →  #f8fafc（浅灰）
Section 9  FAQ        →  #ffffff（白色）
Section 10 Footer     →  #0f172a（深色）
```

**规则要点**：
- 白色 `#ffffff` 与浅灰 `#f8fafc` 交替使用
- Product Demo 区块可使用深色背景制造对比
- Footer 始终使用深色背景
- Hero 背景根据品牌定制，通常使用渐变或品牌色

### 3.3 内容最大宽度

| 内容类型 | 最大宽度 | 说明 |
|---------|---------|------|
| 全宽内容（Hero 背景） | 100% | 背景/渐变铺满视口 |
| 标准内容区 | 1200px | Features、Workflow、Pricing 等 |
| 窄内容区 | 720px | FAQ、Blog 摘要等 |
| 导航栏 | 1440px | Navbar inner container |
| Logo 墙 | 1000px | Social Proof logo wall |

### 3.4 间距系统 CSS 变量

```css
:root {
  /* Section 间距 */
  --section-py-desktop: 120px;
  --section-py-tablet: 80px;
  --section-py-mobile: 64px;
  --section-px: 24px;

  /* 内容最大宽度 */
  --max-width-xl: 1440px;
  --max-width-lg: 1200px;
  --max-width-md: 1000px;
  --max-width-sm: 720px;

  /* 网格间距 */
  --grid-gap-lg: 32px;
  --grid-gap-md: 24px;
  --grid-gap-sm: 16px;

  /* 标题与内容间距 */
  --header-gap: 64px;

  /* 交替背景色 */
  --bg-white: #ffffff;
  --bg-light: #f8fafc;
  --bg-dark: #0f172a;
}

@media (max-width: 1023px) {
  :root {
    --section-py: var(--section-py-tablet);
  }
}

@media (max-width: 767px) {
  :root {
    --section-py: var(--section-py-mobile);
    --section-px: 16px;
  }
}
```

---

## 四、行业定制化布局

不同行业对落地页的 Section 组合有不同的需求。以下是四个典型行业的定制化规则。

### 4.1 AI SaaS 行业

**行业特征**：技术复杂度高，用户需要快速理解产品能力，信任建立在 Demo 效果上。

#### 推荐 Section 顺序

```
Navbar → Hero → Social Proof → Features → Workflow → Pricing → FAQ → Footer
```

#### 必含 Section

| Section | 优先级 | 说明 |
|---------|-------|------|
| Hero | 必含 | 突出 AI 能力，如 "AI 驱动的智能助手" |
| Social Proof | 必含 | 用户规模 / 知名客户 / 处理数据量 |
| Features | 必含 | 核心 AI 能力（NLP/CV/生成等） |
| Workflow | 必含 | 3 步展示使用流程，降低技术门槛 |
| Pricing | 必含 | API 调用量 / Token 计费 |
| FAQ | 必含 | 数据隐私 / 模型准确性 / 集成方式 |

#### 可省略 Section

- **Testimonials**：可合并到 Social Proof 中，以数据指标替代文字评价
- **Product Demo**：可替换为交互式 Demo

#### 行业特殊 Section

**AI Agent Demo / API Playground**

```
┌──────────────────────────────────────────────────────────────────┐
│                     亲自体验 AI 的力量                             │
│                                                                    │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │  ┌──────────────────────────┐  ┌──────────────────────────┐│  │
│  │  │                          │  │                          ││  │
│  │  │     输入区域              │  │     AI 输出/响应区域      ││  │
│  │  │     (Prompt 输入框)       │  │     (实时流式展示)       ││  │
│  │  │                          │  │                          ││  │
│  │  └──────────────────────────┘  └──────────────────────────┘│  │
│  │                                                              │  │
│  │  [预设 Prompt 1]  [预设 Prompt 2]  [预设 Prompt 3]            │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

### 4.2 医疗行业

**行业特征**：信任是最核心的转化因素，用户需要看到资质、认证和专业人员信息。

#### 推荐 Section 顺序

```
Navbar → Hero → Trust Signals → Services/Specialties → Doctors/Team → Testimonials → Contact → Footer
```

#### 必含 Section

| Section | 优先级 | 说明 |
|---------|-------|------|
| Hero | 必含 | 温暖、专业的视觉风格 |
| Trust Signals | 必含（替换 Social Proof） | 认证资质 / 合作机构 / 安全标准 |
| Services/Specialties | 必含（替换 Features） | 诊疗项目 / 服务内容 |
| Doctors/Team | 必含 | 医生资质 / 从业经验 / 擅长领域 |
| Testimonials | 必含 | 患者真实评价，增强信任 |
| Contact | 必含（替换 Pricing） | 预约表单 / 地址 / 电话 |

#### 可省略 Section

- **Pricing**：医疗行业通常不以页面直接定价
- **Product Demo**：不适用

#### 行业特殊 Section

**Trust Signals（信任背书）**

```
┌──────────────────────────────────────────────────────────────────┐
│                     值得信赖的医疗品质                             │
│                                                                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│  │ [认证图标] │  │ [认证图标] │  │ [认证图标] │  │ [认证图标] │         │
│  │  ISO认证   │  │  JCI认证   │  │  三甲医院  │  │  医保定点  │         │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘         │
│                                                                    │
│  合作机构：[Logo1] [Logo2] [Logo3] [Logo4] [Logo5]                │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

### 4.3 电商/跨境行业

**行业特征**：视觉驱动，用户关注产品本身和真实评价，购买决策路径短。

#### 推荐 Section 顺序

```
Navbar → Hero → Product Gallery → Reviews → Brand Story → Newsletter → Footer
```

#### 必含 Section

| Section | 优先级 | 说明 |
|---------|-------|------|
| Hero | 必含 | 强视觉冲击，展示品牌调性 |
| Product Gallery | 必含（替换 Features） | 产品分类 / 热销商品展示 |
| Reviews | 必含（替换 Testimonials） | 带图片的真实买家评价 |
| Brand Story | 必含 | 品牌故事 / 工艺 / 原材料 |
| Newsletter | 必含（替换 Pricing/FAQ） | 邮件订阅 / 优惠码 |

#### 可省略 Section

- **Workflow**：电商流程用户已熟悉
- **Pricing**：商品在 Product Gallery 中直接展示价格
- **FAQ**：简化为退换货政策页面链接

#### 行业特殊 Section

**Best Sellers / 限时优惠**

```
┌──────────────────────────────────────────────────────────────────┐
│                 本周热销  ·  限时 8 折                              │
│                                                                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐         │
│  │ [商品图]  │  │ [商品图]  │  │ [商品图]  │  │ [商品图]  │         │
│  │           │  │           │  │           │  │           │         │
│  │ 商品名称  │  │ 商品名称  │  │ 商品名称  │  │ 商品名称  │         │
│  │ ¥199     │  │ ¥299     │  │ ¥159     │  │ ¥399     │         │
│  │ ~~¥249~~ │  │ ~~¥399~~ │  │ ~~¥199~~ │  │ ~~¥499~~ │         │
│  │ [加入购物车]│ │ [加入购物车]│ │ [加入购物车]│ │ [加入购物车]│         │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘         │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

### 4.4 企业服务/B2B 行业

**行业特征**：决策周期长，需要 Case Study 证明效果，转化目标为获取销售线索。

#### 推荐 Section 顺序

```
Navbar → Hero → Clients → Features → Case Studies → Pricing → Contact → Footer
```

#### 必含 Section

| Section | 优先级 | 说明 |
|---------|-------|------|
| Hero | 必含 | 突出 ROI / 效率提升 |
| Clients | 必含（替换 Social Proof） | 知名企业 Logo 墙 |
| Features | 必含 | 企业级功能（SSO/审计/权限等） |
| Case Studies | 必含（替换 Testimonials） | 详细客户案例，含数据 |
| Pricing | 必含 | 企业定价方案，引导联系销售 |
| Contact | 必含（替换 FAQ） | Demo 预约 / 销售联系表单 |

#### 可省略 Section

- **Workflow**：B2B 产品通常在 Demo 中展示
- **FAQ**：由 Contact 表单替代
- **Product Demo**：以 Case Study 截图替代

#### 行业特殊 Section

**ROI Calculator（投资回报计算器）**

```
┌──────────────────────────────────────────────────────────────────┐
│                   计算你的潜在回报                                  │
│                                                                    │
│  ┌────────────────────────────────────────────────────────────┐  │
│  │                                                              │  │
│  │  团队规模:   [━━━━━━━━●━━━━━]  50 人                         │  │
│  │                                                              │  │
│  │  当前月成本: [━━━━●━━━━━━━━━]  ¥50,000                       │  │
│  │                                                              │  │
│  │  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐       │  │
│  │  │  节省时间      │  │  提升效率      │  │  年度节省      │       │  │
│  │  │   120h/月     │  │    35%        │  │  ¥210,000    │       │  │
│  │  └──────────────┘  └──────────────┘  └──────────────┘       │  │
│  │                                                              │  │
│  │              [免费获取详细报告]                                 │  │
│  └────────────────────────────────────────────────────────────┘  │
│                                                                    │
└──────────────────────────────────────────────────────────────────┘
```

---

## 五、页面滚动叙事规则

### 5.1 视觉节奏

页面从上到下形成"快-慢-快-慢"的视觉节奏，引导用户注意力在关键转化点集中：

```
视觉节奏     快           慢           快           慢
            ▓▓▓▓▓▓▓░░░░░░░░░░░░░░▓▓▓▓▓░░░░░░░░░░░
            ↑ Hero       ↑ Features   ↑ Pricing  ↑ FAQ
            (3秒抓住)    (详细阅读)   (决策点)    (收尾)
```

| 区域 | 视觉节奏 | 设计手法 | 停留时间预期 |
|------|---------|---------|------------|
| Hero | 快 | 大字、高对比、动效 | 3-5 秒 |
| Social Proof | 快 | Logo 墙快速扫视 | 2-3 秒 |
| Features | 慢 | 图文结合，引导逐个阅读 | 15-30 秒 |
| Workflow | 慢 | 步骤分解，理解流程 | 10-20 秒 |
| Product Demo | 快 | 视觉截图/视频 | 5-10 秒 |
| Testimonials | 快 | 浏览评价关键词 | 10-15 秒 |
| Pricing | 快 | 对比决策 | 15-30 秒 |
| FAQ | 慢 | 按需展开阅读 | 10-20 秒 |

### 5.2 信息密度

信息密度遵循"低-中-高-低"的渐变曲线，避免用户疲劳：

```
信息密度     低           中           高           低
            ░░░░░░░░░░░▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░░░░░░░░░░░
            ↑ Hero       ↑ Features   ↑ Pricing  ↑ Footer
            (留白多)     (图文平衡)   (表格/列表)  (链接导航)
```

- **Hero**：大量留白，单行标题 + 副标题 + CTA，信息密度最低
- **Features/Workflow**：图文交替，每个区块信息量适中
- **Pricing**：功能列表、价格对比，信息密度最高
- **FAQ/Footer**：按需阅读，单行条目，密度降低

### 5.3 滚动深度目标

关键转化元素的位置必须确保在合理的滚动深度内可见：

| 元素 | 目标滚动深度 | 说明 |
|------|------------|------|
| 主 CTA 按钮 | 0 屏（首屏） | 必须在 Hero 首屏可见 |
| Social Proof | 1 屏内 | 第二屏可见 |
| 核心功能 | 1-2 屏内 | 用户不需要滚动太多就能了解能力 |
| Pricing | 2-3 屏内 | 关键转化区域，不可过深 |
| 联系/CTA | 3-5 屏内 | 页面底部再次出现 CTA |
| 次要 CTA | 每屏可见 | Navbar 固定 CTA + 各区块内嵌 CTA |

### 5.4 重复 CTA 策略

为最大化转化率，CTA 按钮应在页面中多次出现：

```
位置 1: Navbar CTA（固定可见）        → "免费开始"
位置 2: Hero CTA（首屏主按钮）         → "立即体验"
位置 3: Features 区块底部              → "了解全部功能"
位置 4: Workflow 之后                  → "开始你的第一步"
位置 5: Pricing 每个卡片               → "选择此方案"
位置 6: FAQ 之后 / Footer 之前         → "准备好开始了吗？"
```

---

## 六、单页 vs 多页选择

### 6.1 什么时候用单页长滚动

**适用场景**：

- 核心信息不超过 5 个
- 单一产品 / 单一受众
- 转化目标明确且单一（注册 / 购买 / 预约）
- 营销活动页 / 产品发布页
- 初创公司 MVP 落地页

**优势**：
- 叙事流畅，用户不会被页面跳转打断
- 开发维护成本低
- 移动端体验好（无需复杂导航）
- 适合 A/B 测试优化

### 6.2 什么时候用多页

**适用场景**：

- 产品线复杂，多个产品 / 方案
- 多个目标受众（企业版 / 个人版）
- 内容量大（文档 / 教程 / 案例）
- 品牌需要建立完整的网站形象
- SEO 需要多个着陆页

**优势**：
- 每个页面聚焦单一主题
- 导航清晰，用户可快速跳转
- 适合大规模内容组织
- 专业感更强

### 6.3 多页时的共享布局组件

多页网站应保持一致的布局体验，以下组件在所有页面共享：

| 共享组件 | 说明 |
|---------|------|
| Navbar | 所有页面统一，当前页高亮 |
| Footer | 所有页面统一 |
| Section Header | 统一的标题 + 副标题样式 |
| CTA Button | 统一的颜色、圆角、字号 |
| 间距系统 | 统一的 Section 间距和内容宽度 |
| 响应式断点 | 统一的 768px / 1024px 断点 |

**多页典型结构**：

```
首页 (Home)
├── 产品页 (Products)
│   ├── 产品 A 详情页
│   └── 产品 B 详情页
├── 定价页 (Pricing)
├── 关于我们 (About)
├── 博客 (Blog)
│   └── 文章详情页
├── 帮助中心 (Help)
│   └── 文档页
└── 联系我们 (Contact)
```

---

## 七、AI 审美规则摘要

### 7.1 必须遵守（10 条）

1. **每个 Section 必须有明确的视觉分隔**——通过间距、背景色或分割线区分
2. **内容最大宽度不超过 1440px**——超宽屏幕下保持可读性
3. **文字行高不低于 1.5**——长文本区域行高 1.6-1.8
4. **CTA 按钮必须有悬停状态**——opacity 变化或 scale 微动
5. **移动端必须适配**——768px 和 1024px 两个关键断点
6. **首屏必须在 3 秒内传达核心信息**——标题不超过 10 个字
7. **Pricing 必须有推荐 Plan 的高亮**——视觉上突出最受欢迎的方案
8. **交替使用背景色**——白色与浅灰交替，避免视觉疲劳
9. **所有交互元素必须有 focus 状态**——无障碍访问基本要求
10. **图片必须设置 border-radius**——至少 8px，避免生硬直角

### 7.2 禁止事项（8 条）

1. **禁止使用超过 3 种主色调**——保持视觉统一
2. **禁止在 Hero 区块放置超过 3 个 CTA 按钮**——分散注意力
3. **禁止 Section 间距小于 64px（桌面端）**——区块之间需要呼吸感
4. **禁止使用纯黑 `#000000` 作为文字颜色**——使用 `#0f172a` 或 `#1e293b`
5. **禁止在 Pricing 卡片中隐藏关键信息**——价格和核心功能必须直接可见
6. **禁止使用 GIF 作为背景**——影响性能和可访问性
7. **禁止在移动端隐藏所有导航选项**——至少保留核心链接
8. **禁止使用小于 14px 的正文文字**——影响可读性

### 7.3 行业 Section 配置速查表

| Section | AI SaaS | 医疗 | 电商 | B2B | 通用官网 |
|---------|---------|------|------|-----|---------|
| Navbar | 必含 | 必含 | 必含 | 必含 | 必含 |
| Hero | 必含 | 必含 | 必含 | 必含 | 必含 |
| Social Proof | 必含 | Trust Signals | 可选 | Clients | 必含 |
| Features | 必含 | Services | Product Gallery | 必含 | 必含 |
| Workflow | 必含 | 可选 | 可省略 | 可选 | 必含 |
| Product Demo | AI Demo | 可省略 | 可省略 | Case Study | 必含 |
| Testimonials | 可合并 | 必含 | Reviews | Case Study | 必含 |
| Pricing | 必含 | 可省略 | Gallery 内 | 必含 | 必含 |
| FAQ | 必含 | Contact | Newsletter | Contact | 必含 |
| Footer | 必含 | 必含 | 必含 | 必含 | 必含 |
| **特殊** | API Playground | 认证/资质 | Best Sellers | ROI Calculator | — |

---

> 本文档为 Landing Page Layout System v1.0，适用于设计系统团队与前端开发的协作参考。具体项目的 Section 组合应根据业务需求和行业特征灵活调整。