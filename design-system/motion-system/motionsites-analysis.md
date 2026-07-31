# MotionSites Motion Design Analysis

## 1. Design Philosophy（设计理念）

### 核心目标

让网站从传统「信息展示页面」升级为：

> 一个具有沉浸式体验的产品演示空间。

官网不是简单介绍产品，而是在用户进入页面的第一秒，通过视觉、动画、交互建立：

- 产品价值感
- 品牌高级感
- 技术可信度
- 用户探索欲

---

## 2. Overall Design Language（整体视觉语言）

### Design Keywords

所有生成的网站动效设计必须围绕：

| English | 中文 |
|---------|------|
| cinematic | 电影感 |
| immersive | 沉浸式 |
| interactive | 交互式 |
| premium | 高级 |
| futuristic | 未来科技 |
| dynamic | 动态 |
| minimal | 极简 |

---

## 3. Layout System（页面布局体系）

### 核心原则

避免传统官网结构：

```
标题
+
文字介绍
+
图片
+
按钮
```

升级为：

```
视觉中心
+
动态内容
+
空间层次
+
交互反馈
```

**设计目标：**

让用户感觉是在体验一个产品，而不是阅读一个网页。

---

## 4. Hero Section Design（首屏设计）

Hero 是整个官网最重要区域。

### Layout Structure

标准结构：

```
┌─────────────────────────────────┐
│         Navigation               │
├─────────────────────────────────┤
│         巨大标题                 │
├─────────────────────────────────┤
│       产品价值描述               │
├─────────────────────────────────┤
│       CTA Button                │
├─────────────────────────────────┤
│     动态产品视觉区域             │
├─────────────────────────────────┤
│      背景动画效果               │
└─────────────────────────────────┘
```

### Hero Title（标题设计）

**设计规则**

特点：

- 超大字号
- 强视觉冲击
- 短句表达
- 强品牌感

**推荐：**

```
font-size:    64px - 120px
font-weight:  700 - 900
letter-spacing: -0.03em
```

**示例：**

科技产品：

```
Build the future
with AI Agents
```

医疗产品：

```
Healthcare intelligence
powered by AI
```

---

## 5. Hero Animation System（首屏动画系统）

### 5.1 Page Entrance Animation（页面进入动画）

页面加载时：

**所有元素不能直接出现。**

**必须有进入过程。**

**动画规则：**

```css
opacity:    0 → 1
transform:  translateY(40px) → translateY(0)
```

**参数：**

```
duration:   0.6s - 1s
ease:       easeOut
```

**实现技术：** Framer Motion

**组件：**

```jsx
<MotionFadeIn>
  Content
</MotionFadeIn>
```

**适用：**

- Hero 标题
- 描述文字
- CTA 按钮
- 产品视觉

### 5.2 Typography Animation（文字动画）

#### Letter Reveal

标题采用逐字出现效果。

**示例：**

```
AI        →  AI Future  →  AI Future Platform
```

**动画规则：**

```
opacity:   0 → 1
y:         20px → 0
delay:     staggerChildren
```

**组件：**

```jsx
<TextReveal />
```

**适用：**

- Hero 标题
- 品牌 Slogan
- 产品名称

### 5.3 CTA Button Animation（按钮动画）

按钮不能是静态元素。

**默认状态：**

```
scale:  1
```

**Hover 状态：**

```
scale:         1.05
shadow:        increase
background:    gradient transition
```

**组件：**

```jsx
<MagneticButton />
```

**效果：**

鼠标靠近按钮时产生轻微吸附。

**适用于：**

- Start Now
- Try Demo
- Contact Sales

---

## 6. Background Motion System（背景动态系统）

**MotionSites 风格核心：**

**背景必须具有微动态效果。**

**禁止：**

- 纯色静态背景
- 静态图片背景

### 6.1 Gradient Movement（渐变流动）

**效果：**

多层渐变缓慢移动。

**技术：**

```css
background: linear-gradient() + radial-gradient()
```

**动画：**

```css
background-position: 0% → 100%
```

**组件：**

```jsx
<GradientBackground />
```

**适用：**

- AI SaaS
- 科技官网
- Web3
- 开发者工具

### 6.2 Particle Animation（粒子效果）

**背景包含：**

- 微粒
- 光点
- 星云
- 流动线条

**设计原则：**

低存在感。

需要：**高级、克制、沉浸**

**禁止：**

- 大量粒子
- 游戏化效果
- 过度炫技

**组件：**

```jsx
<ParticleBackground />
```

**技术：**

- Three.js
- React Three Fiber

---

## 7. Product Visualization（产品视觉展示）

**核心理念：**

**不要简单展示产品截图。**

**应该：**

**使用动画展示产品运行过程。**

### 7.1 Floating Product Card（产品漂浮）

**效果：**

产品界面悬浮在页面中。

**动画：**

```css
translateY:  0 → -20px → 0
rotate:      small angle
```

**组件：**

```jsx
<FloatingCard />
```

**适用：**

- SaaS Dashboard
- AI Agent
- 数据平台

### 7.2 3D Product Scene

科技行业可加入：

- 3D 模型
- 空间旋转
- 光影效果

**技术：**

- Three.js
- React Three Fiber

**组件：**

```jsx
<ThreeScene />
```

**适用：**

- AI 产品
- 云计算
- 开发者平台

---

## 8. Scroll Animation System（滚动动画系统）

用户滚动页面时：

**页面内容需要产生反馈。**

### 8.1 Scroll Reveal

**元素进入视口：**

```css
opacity:  0 → 1
y:        50px → 0
```

**组件：**

```jsx
<ScrollReveal />
```

**适用：**

- Features
- Cards
- Testimonials
- Pricing

### 8.2 Parallax Effect（视差滚动）

不同层级使用不同速度。

**示例：**

```
背景：  speed 0.2
内容：  speed 1
```

**组件：**

```jsx
<ParallaxSection />
```

**适用：**

- Brand Story
- Hero
- 产品介绍

---

## 9. Interactive Components（交互组件）

### 9.1 Magnetic Cursor Button

**效果：**

鼠标靠近 → 按钮产生吸附。

**逻辑：**

```
cursor position → button transform
```

**适用：**

高级品牌官网。

### 9.2 Hover Card

**默认：**

```
translateY:  0
```

**Hover：**

```
translateY:  -8px
scale:       1.02
shadow:      increase
```

**组件：**

```jsx
<HoverCard />
```

### 9.3 Glassmorphism Card（玻璃拟态）

**视觉：**

```
半透明背景
+
背景模糊
+
细边框
```

**CSS：**

```css
background:      rgba()
backdrop-filter:  blur()
border:           1px solid rgba()
```

**组件：**

```jsx
<GlassCard />
```

**适用：**

- AI 产品
- 科技产品
- SaaS 官网

---

## 10. Page Transition（页面切换动画）

**多页面网站：**

**禁止直接跳转。**

**需要：**

- fade
- slide
- scale

**组件：**

```jsx
<PageTransition />
```

**技术：**

Framer Motion

---

## 11. Industry Motion Rules（行业动效规则）

### Technology / AI SaaS

**关键词：** futuristic、intelligent、dynamic

**默认开启：**

| 模块 | 说明 |
|------|------|
| Hero | Gradient Background |
| Particle Effect | 浮动 Dashboard 动画 |
| Text Reveal | 文字揭示 |
| Scroll Reveal | 滚动渐入 |
| 3D Effect | 3D 效果 |

**组件：**

- GlassCard
- AIWorkflow
- FloatingCard

**禁止：**

- 传统商务 Banner
- 静态页面

### Medical

**关键词：** trust、clean、professional、human

**使用：**

- Soft Fade
- Smooth Scroll
- Floating Illustration

**避免：**

- Neon
- Heavy Particle
- Cyber Style

### Ecommerce

**关键词：** conversion、premium、product

**使用：**

- Product Hover
- Image Zoom
- Carousel
- CTA Animation

**目标：**

提升用户购买转化。

### Cross-border Independent Store

**关键词：** brand、lifestyle、storytelling

**使用：**

- Parallax Story
- Product Gallery
- Smooth Transition
- Video Background

---

## 12. Required Motion Stack（技术规范）

**所有生成项目默认使用：**

| 类别 | 技术 |
|------|------|
| Animation | Framer Motion |
| Advanced Scroll | GSAP ScrollTrigger |
| Smooth Scroll | Lenis |
| 3D（科技类） | Three.js / React Three Fiber |

---

## 13. Component Library Mapping（组件映射）

| 需求 | 组件 |
|------|------|
| 高级 Hero | AnimatedHero |
| 文字动画 | TextReveal |
| 动态背景 | GradientBackground |
| 粒子背景 | ParticleBackground |
| 产品漂浮 | FloatingCard |
| 滚动动画 | ScrollReveal |
| 视差滚动 | ParallaxSection |
| 玻璃卡片 | GlassCard |
| 高级按钮 | MagneticButton |
| 3D 展示 | ThreeScene |

---

## 14. AI Generation Rules（AI 生成规则）

生成官网时必须满足：

```yaml
requirements:
  hero:
    - include animation
  section:
    - support scroll animation
  button:
    - include interaction feedback
  page:
    - avoid static landing page
  motion:
    - serve product expression
    - avoid unnecessary effects
```

---

## Final Principle（最终原则）

生成的网站必须满足：

> **不是一个网页，而是一段产品体验动画。**

所有动画必须：

```
增强理解
+
提升品牌感
+
促进转化
```

**禁止：**

为了炫技而动画。
