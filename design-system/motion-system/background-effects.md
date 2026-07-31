# 背景效果设计规则

> 基于 motionsites.ai 设计语言拆解，涵盖渐变背景、粒子系统、玻璃拟态、噪点纹理和流体效果。

---

## 一、背景色彩体系

### 1.1 灰度基底 + 彩色渐变点缀

motionsites.ai 采用**纯灰度色板**作为 UI 元素颜色（按钮、卡片、边框、文字），所有 CSS 变量的 saturation 固定为 0%。页面视觉层次和色彩冲击力完全由**背景渐变层**承担。

核心策略：**UI 层去色，背景层上色**。

```css
:root {
  /* 灰度色板 — 所有 UI 元素使用这些变量 */
  --background: hsl(0, 0%, 9%);       /* #171717 — 主背景 */
  --foreground: hsl(0, 0%, 98%);      /* #fafafa — 主文字 */
  --card: hsl(0, 0%, 10%);            /* #1a1a1a — 卡片背景 */
  --card-foreground: hsl(0, 0%, 98%);
  --muted: hsl(0, 0%, 15%);           /* #262626 — 次要背景 */
  --muted-foreground: hsl(0, 0%, 64%);/* #a3a3a3 — 次要文字 */
  --border: hsl(0, 0%, 16%);          /* #292929 — 边框 */
  --ring: hsl(0, 0%, 40%);            /* #666666 — 焦点环 */
  --accent: hsl(0, 0%, 90%);          /* #e6e6e6 — 强调 */
}
```

### 1.2 60-30-10 法则在背景中的应用

| 层级 | 占比 | 内容 | 示例 |
|------|------|------|------|
| 60% | 基底色 | 纯灰度背景 `#171717` | 页面主背景 |
| 30% | 渐变色 | 径向渐变叠加层 | 彩虹渐变光晕 |
| 10% | 高亮点 | 小面积玻璃卡片 / 光效 | CTA Banner、Hero 光斑 |

渐变层始终作为**独立的绝对定位伪元素或 div**存在，不干扰 UI 层色彩变量。

### 1.3 色彩引入方式

色彩仅通过以下三种途径进入页面：

1. **背景渐变** — `radial-gradient` / `conic-gradient` 大面积光晕
2. **图片/视频内容** — 项目展示卡片中的截图和封面
3. **CTA 高亮区** — 如底部 Banner 的 `purple → pink → orange` 渐变

---

## 二、渐变背景（核心技法）

### 2.1 统一彩虹渐变基准

motionsites.ai 的标志性背景是一组固定的径向渐变色值，通过 CSS 变量控制位置实现动画：

```css
:root {
  --gradient-x: 44.373%;
  --gradient-y: 35.1526%;
}

.hero-gradient {
  background: radial-gradient(
    80.17% 109.2%
    at var(--gradient-x) var(--gradient-y),
    rgb(208, 178, 255) 0%,
    rgb(255, 238, 216) 42.83%,
    rgb(232, 64, 13) 88.38%
  );
}
```

三个色值解析：
- `rgb(208, 178, 255)` — 淡紫 /薰衣草，冷色起调
- `rgb(255, 238, 216)` — 暖桃 / 奶油白，中间过渡
- `rgb(232, 64, 13)` — 深橙 / 赤红，暖色收尾

### 2.2 CSS @property 驱动渐变位移动画

通过注册自定义属性为 `<percentage>` 类型，使渐变中心点可被 CSS transition 或 animation 平滑驱动：

```css
@property --gradient-x {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 44.373%;
}

@property --gradient-y {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 35.1526%;
}

.animated-gradient {
  --gradient-x: 44.373%;
  --gradient-y: 35.1526%;

  background: radial-gradient(
    80.17% 109.2%
    at var(--gradient-x) var(--gradient-y),
    rgb(208, 178, 255) 0%,
    rgb(255, 238, 216) 42.83%,
    rgb(232, 64, 13) 88.38%
  );
  transition: --gradient-x 2s ease, --gradient-y 2s ease;
}

/* 鼠标跟随或滚动驱动时，JS 仅更新这两个变量 */
/* element.style.setProperty('--gradient-x', xPercent + '%'); */
```

### 2.3 Mesh Gradient 多层叠加

网格渐变（Mesh Gradient）的核心是**多个径向渐变叠加**，每个渐变使用不同的中心点和颜色：

```css
.mesh-gradient {
  background:
    radial-gradient(ellipse 80% 50% at 20% 40%, rgba(208, 178, 255, 0.4), transparent),
    radial-gradient(ellipse 60% 80% at 80% 20%, rgba(255, 238, 216, 0.3), transparent),
    radial-gradient(ellipse 70% 60% at 50% 80%, rgba(232, 64, 13, 0.2), transparent),
    radial-gradient(ellipse 90% 70% at 10% 90%, rgba(64, 178, 232, 0.15), transparent);
  background-color: #171717;
}
```

叠加规则：
- 渐变数量 3-5 层为佳，超过 6 层会导致性能下降且视觉混杂
- 每层的 `rgba` alpha 值控制在 0.1-0.5 之间，避免过饱和
- 最底层设置 `background-color` 作为兜底纯色
- 各层中心点（`at X% Y%`）均匀分布在视口不同象限

### 2.4 动画化 Mesh Gradient

```css
@property --mesh-x-1 { syntax: '<percentage>'; inherits: false; initial-value: 20%; }
@property --mesh-y-1 { syntax: '<percentage>'; inherits: false; initial-value: 40%; }
@property --mesh-x-2 { syntax: '<percentage>'; inherits: false; initial-value: 80%; }
@property --mesh-y-2 { syntax: '<percentage>'; inherits: false; initial-value: 20%; }

@keyframes mesh-drift {
  0%   { --mesh-x-1: 20%; --mesh-y-1: 40%; --mesh-x-2: 80%; --mesh-y-2: 20%; }
  50%  { --mesh-x-1: 60%; --mesh-y-1: 70%; --mesh-x-2: 30%; --mesh-y-2: 50%; }
  100% { --mesh-x-1: 20%; --mesh-y-1: 40%; --mesh-x-2: 80%; --mesh-y-2: 20%; }
}

.animated-mesh {
  animation: mesh-drift 12s ease-in-out infinite;
  background:
    radial-gradient(ellipse 80% 50% at var(--mesh-x-1) var(--mesh-y-1), rgba(208,178,255,0.4), transparent),
    radial-gradient(ellipse 60% 80% at var(--mesh-x-2) var(--mesh-y-2), rgba(255,238,216,0.3), transparent),
    radial-gradient(ellipse 70% 60% at 50% 80%, rgba(232,64,13,0.2), transparent);
  background-color: #171717;
}
```

---

## 三、极光/流体背景

### 3.1 Aurora/Northern Lights 效果

极光效果的核心原理：**多层彩色渐变 + 大面积模糊 + 混合模式叠加**。

```css
.aurora-bg {
  position: relative;
  overflow: hidden;
  background: #171717;
}

.aurora-bg::before,
.aurora-bg::after {
  content: '';
  position: absolute;
  inset: -50%;
  border-radius: 50%;
}

.aurora-bg::before {
  background: conic-gradient(
    from 0deg at 50% 50%,
    rgba(120, 80, 255, 0.4),
    rgba(0, 200, 150, 0.2),
    rgba(255, 100, 200, 0.3),
    rgba(120, 80, 255, 0.4)
  );
  filter: blur(120px);
  animation: aurora-rotate 20s linear infinite;
}

.aurora-bg::after {
  background: conic-gradient(
    from 180deg at 50% 50%,
    rgba(100, 200, 255, 0.3),
    rgba(200, 100, 255, 0.2),
    rgba(255, 150, 100, 0.3),
    rgba(100, 200, 255, 0.3)
  );
  filter: blur(100px);
  animation: aurora-rotate 15s linear infinite reverse;
  mix-blend-mode: screen;
}

@keyframes aurora-rotate {
  to { transform: rotate(360deg); }
}
```

### 3.2 多层 blur + mix-blend-mode 技法

极光/流体效果的关键参数组合：

| 属性 | 推荐值 | 作用 |
|------|--------|------|
| `filter: blur()` | 80px - 150px | 消除渐变边缘的锐利感 |
| `mix-blend-mode` | `screen` / `lighten` / `soft-light` | 使重叠区域产生光学混色 |
| `opacity` | 0.2 - 0.5 | 控制色彩浓度，避免过亮 |
| `animation` | 12s - 30s linear infinite | 缓慢旋转或位移营造流动感 |

### 3.3 水平条带极光变体

```css
.aurora-bands {
  position: relative;
  overflow: hidden;
  background: #0a0a0b;
}

.aurora-band {
  position: absolute;
  width: 200%;
  height: 30vh;
  left: -50%;
  filter: blur(60px);
  opacity: 0.4;
  mix-blend-mode: screen;
}

.aurora-band:nth-child(1) {
  top: 10%;
  background: linear-gradient(90deg, transparent, rgba(100, 200, 255, 0.5), rgba(180, 100, 255, 0.3), transparent);
  animation: band-drift-1 18s ease-in-out infinite alternate;
}

.aurora-band:nth-child(2) {
  top: 30%;
  background: linear-gradient(90deg, transparent, rgba(0, 255, 180, 0.3), rgba(255, 100, 150, 0.4), transparent);
  animation: band-drift-2 22s ease-in-out infinite alternate;
}

.aurora-band:nth-child(3) {
  top: 55%;
  background: linear-gradient(90deg, transparent, rgba(255, 180, 100, 0.3), rgba(100, 150, 255, 0.4), transparent);
  animation: band-drift-3 16s ease-in-out infinite alternate;
}

@keyframes band-drift-1 { to { transform: translateX(15%) scaleY(1.3); } }
@keyframes band-drift-2 { to { transform: translateX(-20%) scaleY(0.8); } }
@keyframes band-drift-3 { to { transform: translateX(10%) scaleY(1.1); } }
```

---

## 四、玻璃拟态与液态玻璃

### 4.1 基础玻璃拟态

motionsites.ai 的卡片大量使用 `backdrop-filter: blur()` 实现磨砂玻璃效果：

```css
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}
```

参数规范：
- `background` alpha 值：0.03 - 0.08（暗色主题下更透明）
- `backdrop-filter: blur()` 值：12px - 24px
- `border` alpha 值：0.08 - 0.15
- `border-radius`：12px - 24px

### 4.2 内阴影玻璃质感（motionsites.ai 标志性手法）

motionsites.ai 使用一组精细的内阴影模拟玻璃表面的**双光源折射**：

```css
.glass-inner-shadow {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow:
    inset -4px -4px 8px 0px rgba(255, 255, 255, 0.15),
    inset 4px 4px 4px 0px rgba(255, 255, 255, 0.15);
}
```

解析：
- **右上内阴影** `inset -4px -4px 8px`：模拟来自左上方的光源在玻璃右侧边缘产生的高光
- **左下内阴影** `inset 4px 4px 4px`：模拟来自右下方的光源在玻璃左侧边缘产生的高光
- 两个方向的内阴影共同产生**边缘发光**的玻璃折射感

### 4.3 边框光泽效果

```css
.glass-shine {
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  border-radius: 16px;
  overflow: hidden;
}

.glass-shine::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2) 0%,
    transparent 40%,
    transparent 60%,
    rgba(255, 255, 255, 0.1) 100%
  );
  -webkit-mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  mask:
    linear-gradient(#fff 0 0) content-box,
    linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
}
```

### 4.4 Liquid Glass 演进方向

液态玻璃是玻璃拟态的 2025-2026 演进形态，核心特征：

```css
.liquid-glass {
  /* 更强的模糊 + 更低的透明度 */
  backdrop-filter: blur(24px) saturate(1.5);
  -webkit-backdrop-filter: blur(24px) saturate(1.5);

  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.02) 50%,
      rgba(255, 255, 255, 0.08) 100%
    );

  /* 动态折射边缘 */
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;

  /* 内外阴影结合产生悬浮感 */
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.3),
    inset -3px -3px 6px rgba(255, 255, 255, 0.1),
    inset 3px 3px 6px rgba(255, 255, 255, 0.08);

  /* 微妙的形变动画 — 液态感 */
  transition: border-radius 0.6s cubic-bezier(0.34, 1.56, 0.64, 1),
              box-shadow 0.3s ease;
}

.liquid-glass:hover {
  border-radius: 24px 16px 24px 16px;
  box-shadow:
    0 12px 40px rgba(0, 0, 0, 0.4),
    inset -4px -4px 8px rgba(255, 255, 255, 0.12),
    inset 4px 4px 8px rgba(255, 255, 255, 0.1);
}
```

Liquid Glass 相比传统 Glassmorphism 的关键差异：
- `saturate(1.5)` 增强背景色饱和度，产生折射色彩偏移
- 背景使用 `linear-gradient` 替代纯色，模拟光线在曲面玻璃上的不均匀反射
- hover 时 `border-radius` 的非对称变化产生液态流动感

---

## 五、噪点纹理

### 5.1 SVG filter 噪点（推荐方案）

```html
<!-- 定义 SVG 滤镜 — 可放在页面任意位置 -->
<svg style="display: none;">
  <filter id="noise">
    <feTurbulence
      type="fractalNoise"
      baseFrequency="0.65"
      numOctaves="3"
      stitchTiles="stitch"
    />
    <feColorMatrix type="saturate" values="0" />
  </filter>
</svg>
```

```css
.noise-overlay {
  position: relative;
}

.noise-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  filter: url(#noise);
  opacity: 0.03;
  mix-blend-mode: overlay;
  z-index: 1;
}
```

参数规范：
- `baseFrequency`：0.5 - 0.8，值越大噪点越细腻
- `numOctaves`：3 - 5，值越大细节越丰富
- `opacity`：0.02 - 0.06，极低不透明度即可产生质感
- `mix-blend-mode: overlay` 使噪点与底色融合而非覆盖

### 5.2 CSS 背景图噪点（备用方案）

适用于不支持 SVG filter 的环境，使用预生成的 base64 噪点图：

```css
.noise-css {
  position: relative;
}

.noise-css::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  opacity: 0.04;
  mix-blend-mode: overlay;
  z-index: 1;
  /* base64 编码的灰度噪点 PNG — 约 200x200px 平铺 */
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
  background-repeat: repeat;
  background-size: 256px 256px;
}
```

### 5.3 噪点与渐变的组合

噪点纹理应**始终覆盖在渐变层之上**，用于柔化渐变的数字感：

```css
.gradient-with-noise {
  position: relative;
  background: #171717;
}

/* 渐变层 */
.gradient-with-noise::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    80% 110% at 44% 35%,
    rgb(208, 178, 255, 0.3),
    rgb(255, 238, 216, 0.2) 43%,
    rgb(232, 64, 13, 0.15) 88%
  );
}

/* 噪点层 — 覆盖在渐变上方 */
.gradient-with-noise::after {
  content: '';
  position: absolute;
  inset: 0;
  pointer-events: none;
  filter: url(#noise);
  opacity: 0.04;
  mix-blend-mode: overlay;
  z-index: 1;
}
```

---

## 六、粒子与光效背景

### 6.1 CSS radial-gradient 模拟光点

最轻量的方案，适合少量静态光点装饰：

```css
.light-dots {
  background:
    radial-gradient(1px 1px at 15% 25%, rgba(255, 255, 255, 0.8), transparent),
    radial-gradient(1px 1px at 45% 65%, rgba(255, 255, 255, 0.6), transparent),
    radial-gradient(1px 1px at 72% 18%, rgba(255, 255, 255, 0.7), transparent),
    radial-gradient(1px 1px at 88% 52%, rgba(255, 255, 255, 0.5), transparent),
    radial-gradient(2px 2px at 30% 82%, rgba(208, 178, 255, 0.6), transparent),
    radial-gradient(2px 2px at 60% 40%, rgba(255, 238, 216, 0.5), transparent);
  background-color: #171717;
}
```

### 6.2 Canvas 2D 粒子系统

适合中等数量的动态粒子（50-200 个），性能可控：

```css
.particle-canvas {
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}
```

```javascript
const canvas = document.querySelector('.particle-canvas');
const ctx = canvas.getContext('2d');

const particles = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  radius: Math.random() * 1.5 + 0.5,
  opacity: Math.random() * 0.5 + 0.1,
  vx: (Math.random() - 0.5) * 0.3,
  vy: (Math.random() - 0.5) * 0.3,
}));

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
    ctx.fill();

    p.x += p.vx;
    p.y += p.vy;

    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
  });
  requestAnimationFrame(draw);
}

draw();
```

粒子参数规范：
- 数量：50-150（移动端 30-80）
- 半径：0.5px - 2px
- 透明度：0.1 - 0.6
- 速度：每帧 0.1px - 0.5px
- 颜色：白色 `rgba(255,255,255,...)` 或与主渐变同色系

### 6.3 WebGL 粒子系统概览

大规模粒子（500+）或需要 3D 深度效果时使用 Three.js / WebGL：

```
适用场景：
- Aetheris Voyage 风格的深度空间背景
- 大量粒子形成星云/银河效果
- 需要 3D 视差和鼠标交互

技术选型：
- Three.js Points + BufferGeometry
- GPU 粒子（Transform Feedback / Compute Shader）
- 粒子数量 1000-10000+

性能要点：
- 使用 BufferGeometry 而非独立 Mesh
- 粒子纹理使用 32x32 或 64x64 的小图
- 使用 AdditiveBlending 产生光晕叠加
- 离屏粒子 alpha < 0.05 直接 discard
```

### 6.4 光晕（Glow）效果

```css
.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.3;
  mix-blend-mode: screen;
  pointer-events: none;
}

.glow-orb--purple {
  width: 400px;
  height: 400px;
  top: -100px;
  right: 10%;
  background: radial-gradient(circle, rgba(208, 178, 255, 0.6), transparent 70%);
}

.glow-orb--orange {
  width: 300px;
  height: 300px;
  bottom: -50px;
  left: 5%;
  background: radial-gradient(circle, rgba(232, 120, 64, 0.5), transparent 70%);
}
```

光晕使用规则：
- 尺寸 200px - 600px
- `blur` 值 60px - 120px
- `opacity` 0.15 - 0.4
- 始终 `pointer-events: none`
- 使用 `mix-blend-mode: screen` 或 `lighten`

---

## 七、暗色主题背景规则

### 7.1 避免纯黑

**禁止使用 `#000000` 或 `hsl(0,0%,0%)` 作为页面背景。** 纯黑会导致：
- 渐变和光效缺乏对比基础
- 眼睛长时间观看产生眩光
- 与周围系统 UI 产生不自然的硬边界

推荐背景色值：

```css
:root {
  /* motionsites.ai 主背景 */
  --bg-primary: #171717;      /* hsl(0, 0%, 9%) — 最推荐 */
  --bg-secondary: #0a0a0b;   /* 极深灰，略带冷调 */
  --bg-elevated: #1a1a1a;    /* 卡片/弹窗背景 */
  --bg-sunken: #111111;      /* 凹陷区域 */
}
```

### 7.2 对比度要求

| 元素 | 最小对比度 | 推荐值 |
|------|-----------|--------|
| 正文文字 vs 背景 | 4.5:1 (WCAG AA) | 7:1+ |
| 大标题 vs 背景 | 3:1 (WCAG AA) | 5:1+ |
| 次要文字 vs 背景 | 3:1 | 4.5:1+ |
| 边框 vs 背景 | 1.5:1 | 2:1+ |
| 渐变光效 vs 背景 | 无强制要求 | 2:1+ 可感知 |

在 `#171717` 背景上：
- 主文字使用 `#fafafa`（对比度 ~18:1）
- 次要文字使用 `#a3a3a3`（对比度 ~5.5:1）
- 边框使用 `#292929`（对比度 ~1.6:1）

### 7.3 暗色主题下的渐变亮度控制

```css
/* 渐变在暗色背景上必须降低 alpha 值 */
.dark-bg .gradient-overlay {
  /* 推荐 alpha 0.1-0.3，而非亮色主题的 0.3-0.6 */
  background: radial-gradient(
    80% 110% at 44% 35%,
    rgba(208, 178, 255, 0.2) 0%,
    rgba(255, 238, 216, 0.15) 43%,
    rgba(232, 64, 13, 0.1) 88%
  );
}
```

---

## 八、渐变动画性能优化

### 8.1 will-change 提示

```css
.animated-gradient {
  will-change: --gradient-x, --gradient-y;
}

.aurora-layer {
  will-change: transform;
}

.particle-canvas {
  will-change: contents;
}
```

使用规则：
- 仅在动画即将开始前设置（或通过 JS 在交互时添加）
- 动画结束后移除 `will-change`
- 不要对超过 5 个元素同时设置

### 8.2 GPU 加速层

确保动画元素在自己的合成层上：

```css
.gpu-layer {
  transform: translateZ(0);
  /* 或 */
  will-change: transform;
  /* 或 */
  contain: layout style paint;
}
```

**避免**以下会触发布局重排的操作：
- 动画 `width`、`height`、`top`、`left`
- 动画 `box-shadow`（大面积阴影）
- 修改 `border-radius`（触发表面重绘）

### 8.3 @media prefers-reduced-motion 降级

所有渐变动画必须提供无动画降级方案：

```css
/* 默认：动画版本 */
.animated-gradient {
  transition: --gradient-x 2s ease, --gradient-y 2s ease;
}

.aurora-bg::before {
  animation: aurora-rotate 20s linear infinite;
}

/* 降级：静止渐变 */
@media (prefers-reduced-motion: reduce) {
  .animated-gradient {
    transition: none;
    /* 固定到默认位置 */
    --gradient-x: 44.373%;
    --gradient-y: 35.1526%;
  }

  .aurora-bg::before,
  .aurora-bg::after {
    animation: none;
  }

  .particle-canvas {
    display: none;
  }

  .liquid-glass:hover {
    border-radius: 20px; /* 禁止 hover 形变 */
  }
}
```

### 8.4 性能检查清单

| 检查项 | 要求 |
|--------|------|
| 渐变动画 | 使用 `@property` + CSS transition，不使用 JS `requestAnimationFrame` 逐帧设置 `background` |
| 模糊元素 | 数量不超过 4 个，`blur` 值不超过 150px |
| 粒子数量 | Canvas 2D 不超过 150，WebGL 不超过 10000 |
| 合成层数 | 同一视口内不超过 8 个 `will-change` 元素 |
| 降级 | 必须有 `prefers-reduced-motion` 静态降级 |
| 帧率 | 渐变动画保持 60fps，粒子保持 30fps+ |

---

## 九、AI 审美规则摘要

以下规则可直接作为 AI 生成背景效果时的约束条件：

1. **灰度基底**：所有 UI 元素（文字、边框、按钮）使用 saturation=0% 的灰度色板，色彩仅通过背景渐变引入。

2. **禁止纯黑**：背景色使用 `#171717`（hsl 9%）或 `#0a0a0b`，绝不使用 `#000000`。

3. **渐变三色法**：单个渐变使用 2-3 个色值，遵循"冷-暖-热"或"暖-冷-暖"的过渡逻辑。

4. **渐变透明度上限**：暗色主题上的渐变色 alpha 值不超过 0.3，避免喧宾夺主。

5. **玻璃拟态参数**：`background rgba(255,255,255,0.05)` + `backdrop-filter blur(16px)` + `border rgba(255,255,255,0.1)` + 双方向内阴影。

6. **噪点必加**：任何大面积渐变背景必须覆盖一层 opacity 0.02-0.05 的噪点纹理，`mix-blend-mode: overlay`。

7. **动画缓动**：渐变位移使用 2s-4s `ease`/`ease-in-out`，极光旋转使用 12s-30s `linear infinite`，形变使用 `cubic-bezier(0.34, 1.56, 0.64, 1)`。

8. **模糊限制**：单页面内 `filter: blur()` 元素不超过 4 个，值不超过 150px。

9. **光晕辅助**：使用 2-3 个大尺寸 `radial-gradient` 圆形光晕作为氛围点缀，`mix-blend-mode: screen`，`pointer-events: none`。

10. **性能降级**：所有动画必须提供 `@media (prefers-reduced-motion: reduce)` 静态替代方案。

11. **渐变方向**：motionsites.ai 的主渐变中心偏向左上区域（约 44%, 35%），视觉重心落在内容区的黄金分割点附近。

12. **CTA 色彩策略**：仅 CTA 区域和关键交互元素使用高饱和度渐变（如 `purple → pink → orange`），页面其余部分保持灰度 + 低饱和度渐变。

13. **层叠顺序**：背景层（渐变/粒子）→ 噪点层 → 内容层（玻璃卡片/文字），z-index 严格分层。

14. **色彩和谐**：渐变中的多色必须来自同一色相环区间（相邻 120° 内）或形成明确的冷暖对比，禁止随机配色。