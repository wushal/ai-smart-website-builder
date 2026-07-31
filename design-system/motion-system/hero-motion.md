# Hero 动画设计规则

> 基于 motionsites.ai 设计语言拆解，涵盖 Hero Section 的文字动效、排版策略、渐变技术、按钮设计和入场动画模式。

---

## 一、Hero 排版基础规则

### 字体选择

- 标题使用**无衬线字体**（如 Inter、Satoshi、Clash Display），确保可变字重支持。
- 正文/副标题使用同一字体族的 Regular (400) 或 Medium (500) 字重。

### 字号比例（Type Scale）

| 元素 | 移动端 | 桌面端 | 行高 |
|------|--------|--------|------|
| Badge 标签 | 12px | 14px | 1.4 |
| 主标题 H1 | 38px | 56px | 34px / 46px |
| 副标题 | 16px | 18px | 1.6 |
| CTA 按钮文字 | 14px | 16px | 1 |

### 字间距与字重

```css
.hero-title {
  font-weight: 900;            /* font-black */
  text-transform: uppercase;   /* 全大写 */
  letter-spacing: -0.03em;     /* 紧凑字间距，增强视觉冲击 */
  line-height: 1.05;           /* 标题行高接近 1 */
}

.hero-subtitle {
  font-weight: 400;
  letter-spacing: 0;           /* 正文零字间距 */
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.7);
}
```

### 设计原则

1. **对比优先**：标题 900 字重 vs 正文 400 字重，形成极端对比。
2. **负字间距**：大标题使用 -0.03em 至 -0.05em，让字块更紧凑有力。
3. **全大写 + 紧凑间距**：适合英文场景；中文标题保持正常大小写，通过字重和尺寸制造对比。
4. **行高控制**：标题行高 1.0-1.1，多行标题行高 1.15-1.25，避免行间空隙过大。

---

## 二、渐变文字动画（核心技法）

### 原理

通过 CSS `@property` 将渐变角度声明为可动画化的自定义属性，再用 `@keyframes` 驱动角度变化，实现渐变在文字上的持续流动效果。

### 完整代码

```css
/* 第一步：注册自定义属性，使其可被 CSS 动画系统插值 */
@property --gradient-angle {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

/* 第二步：定义关键帧——角度从 0deg 到 360deg 循环 */
@keyframes gradient-rotate {
  0% {
    --gradient-angle: 0deg;
  }
  100% {
    --gradient-angle: 360deg;
  }
}

/* 第三步：应用到标题 */
.hero-title-gradient {
  background: linear-gradient(
    var(--gradient-angle),
    rgb(208, 178, 255),   /* 紫 */
    rgb(255, 238, 216),   /* 暖白 */
    rgb(232, 64, 13)      /* 深橙红 */
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-rotate 6s ease-in-out infinite;
}
```

### 渐变色值说明

| 色值 | 色相 | 视觉作用 |
|------|------|----------|
| `rgb(208, 178, 255)` | 淡紫 | 起始色，冷调科技感 |
| `rgb(255, 238, 216)` | 暖白 | 过渡色，柔化对比 |
| `rgb(232, 64, 13)` | 深橙红 | 终止色，高能量焦点 |

### 参数调整建议

- **动画时长**：6s 适中，3s 偏快/激进，10s 偏慢/优雅。
- **缓动函数**：`ease-in-out` 使渐变流转自然；`linear` 适合匀速旋转。
- **渐变角度范围**：0deg-360deg 完整旋转；0deg-180deg 半程往复可避免跳变。
- **色值替换**：可将三色替换为品牌色，保持"冷-暖-强"的视觉节奏。

### Badge 彩虹渐变文字

```css
.hero-badge {
  background: radial-gradient(
    circle at center,
    #ff6b6b, #feca57, #48dbfb, #ff9ff3, #ff6b6b
  );
  background-size: 100% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  font-size: 14px;
  padding: 6px 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
}
```

---

## 三、多层叠文字效果

### 三层架构

motionsites.ai 的 Hero 文字使用三层叠加结构，创造深度和质感：

1. **底层（原始文字）**：正常渲染的渐变文字。
2. **中层（发光层）**：相同文字副本，添加 `filter: blur(10px)` + `mix-blend-mode: screen` + `opacity: 0.8`，形成柔和光晕。
3. **顶层（噪点纹理）**：覆盖全区域的 `.avif` 格式噪点贴图，`mix-blend-mode: overlay`，增加颗粒质感。

### HTML 结构

```html
<div class="hero-text-stack">
  <!-- 发光层（绝对定位，位于原始文字下方） -->
  <span class="hero-text-glow" aria-hidden="true">
    Superpowers
  </span>
  <!-- 原始文字层 -->
  <h1 class="hero-text-main">
    Superpowers
  </h1>
  <!-- 噪点纹理层（覆盖整个 Hero 区域） -->
  <div class="noise-overlay" aria-hidden="true"></div>
</div>
```

### CSS 代码

```css
/* 容器：相对定位，确保各层正确堆叠 */
.hero-text-stack {
  position: relative;
  display: inline-block;
}

/* 原始文字层 */
.hero-text-main {
  position: relative;
  z-index: 2;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  background: linear-gradient(
    var(--gradient-angle),
    rgb(208, 178, 255),
    rgb(255, 238, 216),
    rgb(232, 64, 13)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-rotate 6s ease-in-out infinite;
}

/* 发光层：模糊 + 混合模式 */
.hero-text-glow {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  font-size: inherit;
  line-height: inherit;
  /* 关键：与原始文字完全相同的渐变 */
  background: linear-gradient(
    var(--gradient-angle),
    rgb(208, 178, 255),
    rgb(255, 238, 216),
    rgb(232, 64, 13)
  );
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  /* 发光效果参数 */
  filter: blur(10px);          /* 模糊半径 10px */
  mix-blend-mode: screen;      /* screen 混合模式，亮色更亮 */
  opacity: 0.8;                /* 80% 不透明度 */
  animation: gradient-rotate 6s ease-in-out infinite;
  pointer-events: none;
}

/* 噪点纹理叠加层 */
.noise-overlay {
  position: absolute;
  inset: 0;
  z-index: 3;                   /* 置于文字之上 */
  pointer-events: none;
  opacity: 0.15;                /* 低不透明度，保持文字可读性 */
  mix-blend-mode: overlay;      /* overlay 增强明暗对比 */
  background-image: url("noise-texture.avif");
  background-repeat: repeat;
  background-size: 256px 256px; /* 噪点贴图尺寸 */
}
```

### 噪点贴图生成建议

- 使用 SVG `<feTurbulence>` 滤镜生成，导出为 `.avif` 或 `.webp` 格式以优化体积。
- 推荐参数：`baseFrequency="0.65"` `numOctaves="3"` `type="fractalNoise"`。
- 贴图尺寸 128x128 或 256x256 px，`background-repeat: repeat` 平铺。

### 设计原则

1. **发光层模糊半径**不宜超过 15px，否则失去文字可辨识度。
2. **噪点层不透明度**控制在 0.1-0.2，过高会降低文字对比度。
3. **mix-blend-mode: screen** 在深色背景上效果最佳（背景 `#171717`）。
4. **发光层必须同步动画**：与原始文字相同的 `animation` 声明，保证渐变流转一致。

---

## 四、文字揭示动画（Reveal Hero）

### 模式一：逐字显现（Typewriter）

通过 `animation-delay` 递增为每个字符设置错开延迟，实现逐字出现效果。

```css
@keyframes char-reveal {
  0% {
    opacity: 0;
    transform: translateY(20px);
    filter: blur(4px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
    filter: blur(0);
  }
}

.reveal-char {
  display: inline-block;
  opacity: 0;
  animation: char-reveal 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* 每个字符通过 inline style 或 CSS 变量设置延迟 */
.reveal-char:nth-child(1) { animation-delay: 0.05s; }
.reveal-char:nth-child(2) { animation-delay: 0.1s; }
.reveal-char:nth-child(3) { animation-delay: 0.15s; }
/* ... 以此类推 */
```

### 模式二：逐行滑入

整行文字从下方滑入，行与行之间设置 stagger 延迟。

```css
@keyframes line-slide-in {
  0% {
    opacity: 0;
    transform: translateY(60px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal-line {
  overflow: hidden;
}

.reveal-line-inner {
  display: block;
  transform: translateY(100%);
  animation: line-slide-in 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.reveal-line:nth-child(1) .reveal-line-inner { animation-delay: 0.1s; }
.reveal-line:nth-child(2) .reveal-line-inner { animation-delay: 0.25s; }
.reveal-line:nth-child(3) .reveal-line-inner { animation-delay: 0.4s; }
```

### 模式三：clip-path 揭示

使用 `clip-path` 从一侧展开文字区域，制造帷幕拉开效果。

```css
@keyframes clip-reveal {
  0% {
    clip-path: inset(0 100% 0 0);
    opacity: 0;
  }
  100% {
    clip-path: inset(0 0% 0 0);
    opacity: 1;
  }
}

.clip-reveal-text {
  animation: clip-reveal 1s cubic-bezier(0.77, 0, 0.175, 1) forwards;
}

/* 从左到右揭示 */
.clip-reveal-left {
  animation-name: clip-reveal-left;
}

@keyframes clip-reveal-left {
  0% {
    clip-path: inset(0 0 0 100%);
    opacity: 0;
  }
  100% {
    clip-path: inset(0 0 0 0%);
    opacity: 1;
  }
}
```

### 模式四：Split-Text 逐字模糊消散

配合 JavaScript 的文本拆分（将每个字符包裹为 `<span>`），实现高级逐字动画。

```css
@keyframes split-reveal {
  0% {
    opacity: 0;
    transform: translateY(40px) rotateX(-40deg);
    filter: blur(8px);
  }
  60% {
    filter: blur(2px);
  }
  100% {
    opacity: 1;
    transform: translateY(0) rotateX(0deg);
    filter: blur(0);
  }
}

/* 推荐 stagger 间隔：30-50ms 每字符 */
```

### 设计原则

1. **缓动函数**推荐 `cubic-bezier(0.16, 1, 0.3, 1)`（ease-out-quint），快速启动、缓慢到位。
2. **单字符动画时长**：0.4-0.6s。
3. **stagger 间隔**：30-60ms/字符，过长会让用户等待，过短会失去效果。
4. **整行动画时长**：0.7-1.0s，行间延迟 150-250ms。
5. **模糊参数**：起始 `blur(4px-8px)`，结束时 `blur(0)`，增加"聚焦"感。

---

## 五、CTA 按钮设计规范

### Neumorphism 风格按钮

motionsites.ai 使用的 CTA 按钮采用拟物化设计，在深色背景上呈现浮起的质感。

```css
.cta-button-neu {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  border: none;
  border-radius: 16px;          /* 胶囊形圆角 */
  border-top: 2px solid rgba(255, 255, 255, 0.9);
  background: linear-gradient(
    to top,
    rgb(207, 222, 246),          /* 底部：冷蓝灰 */
    rgb(250, 250, 250)           /* 顶部：近白 */
  );
  color: #171717;                 /* 深色文字 */
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  /* 拟物阴影 */
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.3),
    0 1px 3px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.4);
  transition: all 0.2s ease;
}

.cta-button-neu:hover {
  transform: translateY(-2px);
  box-shadow:
    0 6px 12px rgba(0, 0, 0, 0.4),
    0 2px 4px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.5);
}

.cta-button-neu:active {
  transform: translateY(1px);
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.3),
    0 1px 2px rgba(0, 0, 0, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}
```

### 渐变强调按钮（品牌色）

```css
.cta-button-gradient {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  border: none;
  border-radius: 16px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  transition: all 0.25s ease;
}

.cta-button-gradient:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.5);
}

.cta-button-gradient:active {
  transform: translateY(0) scale(0.98);
}
```

### 幽灵按钮（Ghost）

```css
.cta-button-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 32px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  background: transparent;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 500;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.25s ease;
}

.cta-button-ghost:hover {
  border-color: rgba(255, 255, 255, 0.5);
  background: rgba(255, 255, 255, 0.05);
  color: #ffffff;
}
```

### 设计原则

1. **圆角**：16px（胶囊形）或 12px（柔和方块），保持与页面整体圆润度一致。
2. **内边距**：垂直 14px、水平 32px，确保触摸目标 >= 44px。
3. **Neumorphism 要素**：`border-top: 2px solid white` 是关键，模拟顶部高光；`linear-gradient(to top, ...)` 从深到浅模拟光照方向。
4. **Hover 反馈**：`translateY(-2px)` 上浮 + 阴影扩大 = 按钮弹起感。
5. **按钮组合**：主 CTA（Neumorphism/Gradient）+ 次 CTA（Ghost），间距 16px。

---

## 六、Hero 入场动画

### 整体入场时序

Hero 区域各元素按序入场，形成叙事节奏：

```
[0ms]     背景渐显
[100ms]   Badge 标签滑入
[300ms]   标题第 1 行滑入
[500ms]   标题第 2 行滑入（或渐变文字开始流动）
[700ms]   标题第 3 行滑入
[900ms]   副标题淡入上移
[1100ms]  CTA 按钮 A 淡入
[1200ms]  CTA 按钮 B 淡入
[1400ms]  背景装饰/光效激活
```

### 错位入场代码

```css
/* 通用入场动画 */
@keyframes fade-slide-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Badge */
.hero-badge {
  opacity: 0;
  animation: fade-slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards;
}

/* 标题 */
.hero-title {
  opacity: 0;
  animation: fade-slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards;
}

/* 副标题 */
.hero-subtitle {
  opacity: 0;
  animation: fade-slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.9s forwards;
}

/* CTA 按钮 */
.hero-cta-primary {
  opacity: 0;
  animation: fade-slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.1s forwards;
}

.hero-cta-secondary {
  opacity: 0;
  animation: fade-slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.2s forwards;
}
```

### Fade + Slide 组合变体

```css
/* 从左侧滑入 */
@keyframes fade-slide-left {
  0% {
    opacity: 0;
    transform: translateX(-40px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

/* 缩放淡入 */
@keyframes fade-scale-up {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}

/* 透视旋转入场 */
@keyframes perspective-in {
  0% {
    opacity: 0;
    transform: perspective(800px) rotateX(10deg) translateY(40px);
  }
  100% {
    opacity: 1;
    transform: perspective(800px) rotateX(0deg) translateY(0);
  }
}
```

### Stagger 时序规范

| 元素层级 | 基础延迟 | stagger 间隔 | 动画时长 |
|----------|----------|-------------|----------|
| 装饰/Badge | 0-100ms | — | 0.5-0.6s |
| 标题行 | 200-400ms | 150-200ms/行 | 0.7-0.9s |
| 副标题 | 标题结束 + 100ms | — | 0.5-0.6s |
| CTA 按钮组 | 副标题结束 + 100ms | 80-100ms/按钮 | 0.5-0.6s |
| 背景装饰 | 最后 | — | 0.8-1.2s |

### 设计原则

1. **总入场时间控制在 1.5-2.0s**，超过 2s 会让用户感到等待。
2. **使用 `animation-fill-mode: forwards`** 确保元素在动画结束后保持终态。
3. **缓动函数统一**：整个 Hero 区域使用相同的缓动曲线，保持节奏一致。
4. **尊重 `prefers-reduced-motion`**：为减少动效偏好的用户禁用动画。

```css
@media (prefers-reduced-motion: reduce) {
  .hero-badge,
  .hero-title,
  .hero-subtitle,
  .hero-cta-primary,
  .hero-cta-secondary {
    animation: none;
    opacity: 1;
    transform: none;
  }
}
```

---

## 七、光标跟随 Hero 效果

### 鼠标位置驱动光晕

```css
/* 光晕元素：大面积径向渐变，跟随鼠标 */
.cursor-glow {
  position: fixed;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  background: radial-gradient(
    circle at center,
    rgba(208, 178, 255, 0.15),
    rgba(232, 64, 13, 0.05),
    transparent 70%
  );
  transform: translate(-50%, -50%);
  transition: opacity 0.3s ease;
  opacity: 0;
}

.cursor-glow.active {
  opacity: 1;
}
```

```javascript
// 鼠标移动时更新光晕位置
const glow = document.querySelector('.cursor-glow');
const hero = document.querySelector('.hero-section');

hero.addEventListener('mousemove', (e) => {
  glow.classList.add('active');
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

hero.addEventListener('mouseleave', () => {
  glow.classList.remove('active');
});
```

### 磁性按钮（Magnetic Button）

按钮在鼠标靠近时向鼠标方向偏移，离开后弹回。

```javascript
const magneticBtn = document.querySelector('.cta-button-neu');

magneticBtn.addEventListener('mousemove', (e) => {
  const rect = magneticBtn.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  // 偏移幅度：最大 8px
  const moveX = Math.max(-8, Math.min(8, x * 0.2));
  const moveY = Math.max(-8, Math.min(8, y * 0.2));

  magneticBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

magneticBtn.addEventListener('mouseleave', () => {
  magneticBtn.style.transform = 'translate(0, 0)';
});
```

```css
.cta-button-neu {
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```

### 视差文字层

鼠标移动时，不同层级的文字以不同速度偏移，制造深度感。

```javascript
const parallaxLayers = document.querySelectorAll('[data-speed]');

document.querySelector('.hero-section').addEventListener('mousemove', (e) => {
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  const deltaX = (e.clientX - centerX) / centerX;
  const deltaY = (e.clientY - centerY) / centerY;

  parallaxLayers.forEach(layer => {
    const speed = parseFloat(layer.dataset.speed);
    const moveX = deltaX * speed * 20;  // 最大偏移量 = speed * 20px
    const moveY = deltaY * speed * 20;
    layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});
```

```html
<h1 class="hero-title" data-speed="0.5">Title</h1>
<p class="hero-subtitle" data-speed="0.3">Subtitle</p>
<div class="hero-decoration" data-speed="1.2">Decoration</div>
```

### 设计原则

1. **光晕尺寸**：600-800px，过大影响性能，过小失去氛围。
2. **光晕颜色**：使用 Hero 主渐变的低不透明度版本，保持视觉统一。
3. **磁性偏移**：最大 6-10px，过大显得松散。
4. **视差速度**：标题 0.3-0.5，副标题 0.2-0.3，装饰层 0.8-1.5。
5. **必须使用 `pointer-events: none`**：光晕层不应阻止用户的点击和悬停事件。

---

## 八、响应式适配规则

### 断点定义

| 断点 | 宽度范围 | 适用场景 |
|------|----------|----------|
| `sm` | < 640px | 移动端竖屏 |
| `md` | 640-768px | 移动端横屏 / 小平板 |
| `lg` | 768-1024px | 平板 |
| `xl` | 1024-1280px | 小桌面 |
| `2xl` | >= 1280px | 标准桌面 |

### 字号缩放

```css
.hero-title {
  font-size: 38px;          /* 移动端基准 */
  line-height: 34px;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 48px;
    line-height: 40px;
  }
}

@media (min-width: 1024px) {
  .hero-title {
    font-size: 56px;
    line-height: 46px;
  }
}

@media (min-width: 1280px) {
  .hero-title {
    font-size: 64px;
    line-height: 52px;
  }
}
```

### 间距调整

```css
.hero-section {
  padding: 80px 24px;       /* 移动端 */
}

@media (min-width: 768px) {
  .hero-section {
    padding: 120px 48px;
  }
}

@media (min-width: 1024px) {
  .hero-section {
    padding: 160px 64px;
  }
}
```

### 按钮与布局适配

```css
/* 移动端：按钮全宽，垂直堆叠 */
@media (max-width: 640px) {
  .hero-cta-group {
    flex-direction: column;
    gap: 12px;
  }

  .cta-button-neu,
  .cta-button-gradient,
  .cta-button-ghost {
    width: 100%;
    justify-content: center;
    padding: 16px 24px;
  }
}

/* 桌面端：按钮水平排列 */
@media (min-width: 641px) {
  .hero-cta-group {
    flex-direction: row;
    gap: 16px;
  }
}
```

### 发光层响应式

```css
/* 移动端减弱发光效果，避免性能问题 */
.hero-text-glow {
  filter: blur(6px);
  opacity: 0.5;
}

@media (min-width: 768px) {
  .hero-text-glow {
    filter: blur(10px);
    opacity: 0.8;
  }
}
```

### 设计原则

1. **移动端优先**：先写移动端样式，再通过 `min-width` 媒体查询逐步增强。
2. **字号跳跃不宜过大**：相邻断点字号差 <= 10px，保持视觉连续性。
3. **发光/模糊效果降级**：移动端减小 blur 半径和 opacity，平衡性能与视觉。
4. **触摸目标**：移动端按钮高度 >= 48px，确保手指可轻松点击。
5. **光标跟随效果仅在桌面端启用**：触控设备无鼠标，无需光晕和磁性效果。

```css
/* 仅桌面端启用光标效果 */
@media (hover: hover) and (pointer: fine) {
  .cursor-glow {
    display: block;
  }
}

@media (hover: none) or (pointer: coarse) {
  .cursor-glow {
    display: none;
  }
}
```

---

## 九、AI 审美规则摘要

以下规则可直接作为设计约束或 Prompt 指令，确保 AI 生成的 Hero Section 符合 motionsites.ai 设计语言。

### 必须遵守

- [ ] 标题字重 900，全大写（英文），letter-spacing: -0.03em。
- [ ] 渐变文字动画使用 `@property` + `@keyframes`，时长 5-7s，ease-in-out 循环。
- [ ] 背景色 #171717（近纯黑），文字颜色白色或渐变。
- [ ] 发光层使用 `filter: blur(8-12px)` + `mix-blend-mode: screen` + `opacity: 0.7-0.9`。
- [ ] 噪点纹理叠加，`mix-blend-mode: overlay`，opacity 0.1-0.2。
- [ ] CTA 按钮使用 Neumorphism 风格或品牌色渐变，胶囊形圆角（16px）。
- [ ] 按钮顶部 2px solid white 高光线（Neumorphism 风格）。
- [ ] 入场动画使用 `cubic-bezier(0.16, 1, 0.3, 1)` 缓动。
- [ ] 入场总时长 <= 2s，元素间 stagger 间隔 100-200ms。
- [ ] 行高：标题 1.0-1.15，副标题 1.5-1.7。
- [ ] Badge 使用彩虹渐变文字或描边样式。

### 禁止事项

- [ ] 禁止使用衬线字体作为 Hero 标题字体。
- [ ] 禁止使用 > 12px 的 letter-spacing 于标题（需用负值或零值）。
- [ ] 禁止发光层 blur > 15px。
- [ ] 禁止使用纯色背景（需带微妙渐变或纹理）。
- [ ] 禁止使用硬编码 px 定位实现响应式（使用媒体查询或 clamp()）。
- [ ] 禁止在移动端保留光标跟随效果。
- [ ] 禁止入场动画总时长 > 2.5s。
- [ ] 禁止使用 `!important` 覆盖动画样式。
- [ ] 禁止忽略 `prefers-reduced-motion`。

### 可选增强

- [ ] 渐变文字可添加文字阴影增强对比：`text-shadow: 0 0 40px rgba(208, 178, 255, 0.3)`。
- [ ] 可在 Hero 底部添加渐隐遮罩，与下方内容自然过渡。
- [ ] 可为装饰元素添加缓慢浮动动画（3-4s ease-in-out infinite）。
- [ ] 可在深色背景上添加网格线或点阵底纹（opacity 0.05-0.1）。
- [ ] 标题区域可配合 GSAP 或 Framer Motion 实现更精细的 Split-Text 动画。

---

> 文档版本：v1.0 | 基于 motionsites.ai Hero 设计语言拆解 | 适用场景：AI 建站、前端开发、设计系统约束
