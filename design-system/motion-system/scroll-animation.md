# 滚动动画设计规则

> 基于 motionsites.ai 设计语言拆解，涵盖滚动驱动的动画模式、视差效果、元素入场、进度联动和性能优化。

---

## 一、滚动动画层级分类

滚动动画按照视觉影响范围分为四个层级，由微观到宏观逐级递进。

| 层级 | 名称 | 说明 | 典型场景 |
|------|------|------|----------|
| L1 | 细节层（Detail） | 单个元素入场微动效：fade、slide、scale | 文字行淡入、图标弹出 |
| L2 | 结构层（Structure） | 同一组元素按序 stagger 入场 | 卡片列表逐张浮现、特性列表错落入场 |
| L3 | 场景层（Scene） | 区块级视差与布局切换，多元素联动 | 背景图视差、前景内容滑入、进度条驱动 |
| L4 | 沉浸层（Immersive） | 全页滚动叙事，章节间沉浸式过渡 | Scroll Landing Page、Layered Depth |

**层级叠加原则：**
- 同一视口内最多同时激活 L1 + L2 两层动画
- L3/L4 动画独占滚动阶段，避免与其他层级并行
- 动画时长随层级递增：L1 ≤ 400ms，L2 ≤ 600ms，L3 ≤ 800ms，L4 自适应滚动距离

---

## 二、元素入场动画（Scroll Reveal）

### 2.1 Intersection Observer 方案（兼容性最佳）

```js
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // 单次触发
      }
    });
  },
  {
    root: null,
    rootMargin: '0px 0px -60px 0px', // 底部偏移，元素露出 60px 后触发
    threshold: 0.1, // 10% 可见时触发
  }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
```

对应 CSS：

```css
.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition:
    opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}
```

**参数说明：**

| 参数 | 值 | 说明 |
|------|----|------|
| `translateY` | 24px | 初始偏移量，避免零距离动画显得"闪烁" |
| `transition-duration` | 500ms | L1 入场标准时长 |
| `cubic-bezier` | (0.4, 0, 0.2, 1) | Material Design 标准缓动 |
| `rootMargin` | -60px | 提前触发余量，确保用户看到动画起点 |
| `threshold` | 0.1 | 触发灵敏度，0.1 为推荐最小值 |

### 2.2 CSS Scroll-Driven Animations 方案（Chrome 115+）

```css
@keyframes scroll-reveal {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.reveal-css {
  animation: scroll-reveal linear both;
  animation-timeline: view();
  animation-range: entry 0% entry 40%; // 元素进入视口 0%→40% 区间完成动画
}
```

**优势：** 纯 CSS、无 JS、跟随滚动帧率精确同步，不会产生"脱离"感。

### 2.3 Stagger 时序控制

列表元素错落入场，每项延迟递增：

```css
.stagger-list .reveal:nth-child(1) { transition-delay: 0ms; }
.stagger-list .reveal:nth-child(2) { transition-delay: 80ms; }
.stagger-list .reveal:nth-child(3) { transition-delay: 160ms; }
.stagger-list .reveal:nth-child(4) { transition-delay: 240ms; }
.stagger-list .reveal:nth-child(5) { transition-delay: 320ms; }
.stagger-list .reveal:nth-child(6) { transition-delay: 400ms; }
```

**规则：**
- 单项延迟间隔：60–100ms，推荐 80ms
- 总延迟上限：≤ 500ms（超过则用户注意力断裂）
- 列表超过 6 项时，采用分组策略（每组 3–4 项，组间延迟 200ms）

### 2.4 Fade + Slide 组合变体

```css
/* 向上淡入（默认） */
.reveal-up {
  opacity: 0;
  transform: translateY(24px);
}

/* 向左滑入 */
.reveal-left {
  opacity: 0;
  transform: translateX(-32px);
}

/* 缩放弹入 */
.reveal-scale {
  opacity: 0;
  transform: scale(0.92);
}

/* 模糊淡入（强叙事感） */
.reveal-blur {
  opacity: 0;
  filter: blur(8px);
  transform: translateY(16px);
}

/* 通用恢复态 */
.revealed {
  opacity: 1 !important;
  transform: none !important;
  filter: none !important;
  transition:
    opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    filter 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
```

---

## 三、视差滚动效果（Parallax）

### 3.1 多层深度视差（Layered Depth）

将页面分为 3–4 个深度层，各层以不同速率滚动，营造纵深感：

```css
.parallax-container {
  position: relative;
  overflow: hidden;
  height: 80vh;
}

.parallax-layer-bg {
  position: absolute;
  inset: 0;
  /* 背景层：最慢，滚动速度 0.3x */
  transform: translateZ(-2px) scale(3);
  will-change: transform;
}

.parallax-layer-mid {
  position: absolute;
  inset: 0;
  /* 中间层：中速，滚动速度 0.6x */
  transform: translateZ(-1px) scale(2);
  will-change: transform;
}

.parallax-layer-fg {
  position: relative;
  z-index: 1;
  /* 前景层：正常速度 1x（无 transform） */
}
```

CSS `perspective` + `translateZ` 原生视差：

```css
.parallax-wrapper {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 8px; /* 透视值越小，视差越明显 */
  perspective-origin: center center;
}

.parallax-group {
  position: relative;
  transform-style: preserve-3d;
  height: 100vh;
}

.parallax-layer--back {
  position: absolute;
  inset: 0;
  transform: translateZ(-4px) scale(1.5); /* 远景层 */
}

.parallax-layer--mid {
  position: absolute;
  inset: 0;
  transform: translateZ(-2px) scale(1.25); /* 中景层 */
}

.parallax-layer--front {
  position: relative;
  transform: translateZ(0); /* 前景层，正常滚动 */
}
```

### 3.2 固定背景 + 前景切换

经典"窗口"视差：背景固定，前景内容逐段切换：

```css
.parallax-section {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.parallax-section .bg-image {
  position: absolute;
  inset: -20%; /* 留出滚动余量 */
  background-attachment: fixed; /* 经典方案，移动端不支持 */
  background-size: cover;
  background-position: center;
}

/* 移动端兼容：用 JS 替代 background-attachment */
@media (max-width: 768px) {
  .parallax-section .bg-image {
    background-attachment: scroll;
    will-change: transform;
    /* JS: transform: translateY(offset * 0.3) */
  }
}
```

**JS 补偿（移动端）：**

```js
function handleParallax() {
  const sections = document.querySelectorAll('.parallax-section');
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const bg = section.querySelector('.bg-image');
    if (!bg) return;

    const speed = 0.3;
    const yPos = -(scrollY - section.offsetTop) * speed;
    bg.style.transform = `translate3d(0, ${yPos}px, 0)`;
  });
}

// 使用 rAF 节流而非 scroll 事件直绑（见第八章）
let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      handleParallax();
      ticking = false;
    });
    ticking = true;
  }
});
```

### 3.3 CSS vs JS 视差对比

| 方案 | 性能 | 兼容性 | 精度 | 适用场景 |
|------|------|--------|------|----------|
| `background-attachment: fixed` | 高 | 桌面端，iOS 不支持 | 低 | 简单背景视差 |
| `perspective` + `translateZ` | 高 | Chrome/Firefox/Safari | 中 | 多层深度视差 |
| CSS `animation-timeline: scroll()` | 最高 | Chrome 115+ | 高 | 现代浏览器项目 |
| JS + `requestAnimationFrame` | 中 | 全平台 | 最高 | 需要精细控制的场景 |

---

## 四、滚动进度联动动画

### 4.1 顶部阅读进度条

```css
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  width: 0%;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  z-index: 9999;
  transform-origin: left;
}

/* CSS Scroll-Driven 方案 */
.progress-bar-css {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #6366f1, #8b5cf6);
  z-index: 9999;
  animation: progress-fill linear;
  animation-timeline: scroll();
}

@keyframes progress-fill {
  from { width: 0%; }
  to { width: 100%; }
}
```

```js
// JS 方案
window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / scrollHeight) * 100;
  document.querySelector('.progress-bar').style.width = `${progress}%`;
});
```

### 4.2 数字递增动画

数字在进入视口时从 0 递增到目标值：

```js
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1200; // ms
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // easeOutExpo 缓动
    const eased = 1 - Math.pow(2, -10 * progress);
    const current = Math.round(eased * target);
    el.textContent = current.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('[data-counter]').forEach((el) => counterObserver.observe(el));
```

```html
<span data-counter data-target="12000">0</span>
```

### 4.3 滚动驱动 Opacity / Transform / Clip-path

使用 CSS Scroll-Driven Animations 实现滚动联动的样式变化：

```css
/* 元素随滚动淡出 */
@keyframes fade-out-on-scroll {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-40px);
  }
}

.scroll-fade-out {
  animation: fade-out-on-scroll linear;
  animation-timeline: scroll();
  animation-range: 0% 30%; // 页面滚动 0%→30% 时完成动画
}

/* 元素随滚动展开（clip-path 圆形揭示） */
@keyframes circle-reveal {
  from {
    clip-path: circle(0% at 50% 50%);
  }
  to {
    clip-path: circle(100% at 50% 50%);
  }
}

.scroll-circle-reveal {
  animation: circle-reveal ease-out;
  animation-timeline: view();
  animation-range: entry 0% entry 60%;
}
```

**JS 方案（全浏览器兼容）：**

```js
function bindScrollDrivenAnimation(el, props) {
  const { from, to, range = [0, 1] } = props;

  function update() {
    const rect = el.getBoundingClientRect();
    const viewHeight = window.innerHeight;
    // 计算元素在视口中的进度 [0, 1]
    const progress = Math.max(0, Math.min(1,
      (viewHeight - rect.top) / (viewHeight + rect.height)
    ));
    // 映射到指定区间
    const mapped = Math.max(0, Math.min(1,
      (progress - range[0]) / (range[1] - range[0])
    ));

    Object.keys(from).forEach((prop) => {
      const startVal = from[prop];
      const endVal = to[prop];
      el.style[prop] = interpolate(startVal, endVal, mapped);
    });
  }

  window.addEventListener('scroll', () => requestAnimationFrame(update), { passive: true });
  update();
}
```

---

## 五、卡片滚动展示

### 5.1 卡片 Hover 浮起 + 阴影

motionsites.ai 标准卡片交互参数：

```css
.card {
  border-radius: 12px;
  background: #ffffff;
  transition:
    transform 0.3s cubic-bezier(0, 0, 0.2, 1),
    box-shadow 0.3s cubic-bezier(0, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow:
    0 12px 24px -4px rgba(0, 0, 0, 0.08),
    0 4px 8px -2px rgba(0, 0, 0, 0.04);
}
```

**参数说明：**

| 属性 | 值 | 说明 |
|------|----|------|
| `translateY` | -4px | 浮起距离，4px 既能感知又不突兀 |
| `transition-duration` | 300ms | 足够流畅，不会感到拖沓 |
| `cubic-bezier` | (0, 0, 0.2, 1) | motionsites.ai 标准缓动，前端微快 |
| `box-shadow` | 24px 模糊 + 4px 近影 | 双层阴影模拟自然光照 |
| `border-radius` | 12px | 标准圆角，与设计系统一致 |

### 5.2 Shimmer 骨架屏加载动画

motionsites.ai 骨架屏闪烁效果：

```css
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.6s ease infinite;
  border-radius: 8px;
}

/* 更精确的方案：使用伪元素 translate */
@keyframes shimmer-slide {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(100%);
  }
}

.skeleton-v2 {
  position: relative;
  overflow: hidden;
  background: #f0f0f0;
  border-radius: 8px;
}

.skeleton-v2::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.4) 50%,
    transparent 100%
  );
  animation: shimmer-slide 1.6s ease infinite;
}
```

**参数说明：**

| 属性 | 值 | 说明 |
|------|----|------|
| `animation-duration` | 1.6s | 完整一次闪烁的周期 |
| `timing-function` | ease | 缓入缓出，避免机械感 |
| `iteration-count` | infinite | 循环播放直到内容加载 |
| `translate` | -50% → 100% | 光带从左侧进入到右侧离开 |

### 5.3 视频预览卡片交互

卡片使用 img + video 双层结构，hover 时切换显示：

```html
<div class="video-preview-card">
  <img src="thumbnail.jpg" alt="Preview" class="card-poster" />
  <video src="preview.mp4" muted loop playsinline class="card-video"></video>
</div>
```

```css
.video-preview-card {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
}

.card-poster,
.card-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  inset: 0;
}

.card-poster {
  opacity: 1;
  transition: opacity 0.3s cubic-bezier(0, 0, 0.2, 1);
}

.card-video {
  opacity: 0;
  transition: opacity 0.3s cubic-bezier(0, 0, 0.2, 1);
  pointer-events: none;
}

/* Hover 时海报淡出、视频淡入 */
.video-preview-card:hover .card-poster {
  opacity: 0;
}

.video-preview-card:hover .card-video {
  opacity: 1;
}
```

```js
// 控制 video 播放/暂停，避免不必要资源消耗
document.querySelectorAll('.video-preview-card').forEach((card) => {
  const video = card.querySelector('.card-video');

  card.addEventListener('mouseenter', () => {
    if (video) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  });

  card.addEventListener('mouseleave', () => {
    if (video) {
      video.pause();
    }
  });
});
```

---

## 六、跑马灯与无限滚动

### 6.1 CSS Marquee 动画

motionsites.ai 风格的无缝跑马灯：

```css
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.marquee-container {
  overflow: hidden;
  white-space: nowrap;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}

.marquee-track {
  display: inline-flex;
  animation: marquee 240s linear infinite;
  /* 240s 为 motionsites.ai 标准速度，内容越长越需要 */
}

.marquee-track:hover {
  animation-play-state: paused; // 悬停暂停，提升可读性
}

.marquee-item {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 0 24px;
  white-space: nowrap;
  flex-shrink: 0;
}
```

**无缝循环实现原理：**

1. 将内容复制一份，首尾相接（内容 x2）
2. 容器 `overflow: hidden` 裁切可见区域
3. 动画将整个 track 从 `0` 平移到 `-50%`（即一份内容的宽度）
4. 动画结束瞬间回到起点，因内容是重复的，视觉上无缝衔接

```html
<div class="marquee-container">
  <div class="marquee-track">
    <!-- 第一份内容 -->
    <span class="marquee-item">品牌 A</span>
    <span class="marquee-item">品牌 B</span>
    <span class="marquee-item">品牌 C</span>
    <span class="marquee-item">品牌 D</span>
    <!-- 第二份内容（完全重复） -->
    <span class="marquee-item">品牌 A</span>
    <span class="marquee-item">品牌 B</span>
    <span class="marquee-item">品牌 C</span>
    <span class="marquee-item">品牌 D</span>
  </div>
</div>
```

### 6.2 垂直跑马灯

```css
@keyframes marquee-vertical {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}

.marquee-vertical {
  overflow: hidden;
  height: 200px; /* 可视区域高度 */
}

.marquee-vertical .marquee-track {
  flex-direction: column;
  animation: marquee-vertical 30s linear infinite;
}
```

### 6.3 速度控制规则

| 内容长度 | 推荐速度 | 说明 |
|----------|----------|------|
| 3–5 个项目 | 20–30s | 快速浏览型 |
| 6–12 个项目 | 60–120s | 标准展示型 |
| 12+ 个项目 | 120–240s | 长列表型 |
| 悬停 | `paused` | 始终支持暂停 |

**通用过渡参数（motionsites.ai 标准）：**
- `transition-duration`: 0.15s
- `cubic-bezier(0.4, 0, 0.2, 1)`

---

## 七、页面过渡动画

### 7.1 Headless UI Enter/Exit 动画系统

motionsites.ai 使用 headless-ui 的过渡组件（Transition / Dialog / Menu 等），基于 CSS 类名驱动：

```jsx
// 示例：模态框入场/退场
import { Transition } from '@headlessui/react';

function Modal({ isOpen, onClose }) {
  return (
    <Transition
      show={isOpen}
      enter="transition duration-150 ease-out"  // motionsites.ai: 150ms ease-out
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition duration-100 ease-in"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      {/* modal content */}
    </Transition>
  );
}
```

**标准参数：**

| 阶段 | 时长 | 缓动 | 说明 |
|------|------|------|------|
| Enter | 150ms | ease-out | 入场稍快 |
| Leave | 100ms | ease-in | 退场更快，避免拖沓 |

### 7.2 View Transitions API（路由切换）

现代浏览器支持的原生页面过渡方案：

```js
// 在路由切换时触发
document.startViewTransition(() => {
  // 执行 DOM 更新
  updateRoute(newPath);
});
```

```css
/* 页面级淡入淡出 */
::view-transition-old(root) {
  animation: fade-out 150ms ease-in forwards;
}

::view-transition-new(root) {
  animation: fade-in 150ms ease-out forwards;
}

@keyframes fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* 共享元素过渡：卡片 → 详情页 */
.card-image {
  view-transition-name: hero-image;
}

.detail-image {
  view-transition-name: hero-image;
}
```

**兼容性：** Chrome 111+、Edge 111+。Safari/Firefox 需渐进增强。

### 7.3 路由级过渡方案（框架）

```jsx
// Next.js App Router + Framer Motion
import { motion, AnimatePresence } from 'framer-motion';

function Layout({ children }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{
          duration: 0.15, // motionsites.ai 标准
          ease: [0.4, 0, 0.2, 1],
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
```

---

## 八、性能优化规则

### 8.1 will-change 使用规范

```css
/* 正确：在动画即将发生前声明 */
.animated-element {
  will-change: transform, opacity;
}

/* 错误：全局滥用 */
* {
  will-change: transform; /* ❌ 浪费内存 */
}
```

**规则：**
- 仅对即将参与动画的元素声明 `will-change`
- 动画结束后移除：`el.style.willChange = 'auto'`
- 每个元素最多声明 2 个属性（`transform` + `opacity`）
- 不用于静态元素

### 8.2 GPU 加速要点

```css
/* 仅使用以下属性触发合成层（不会触发 layout/paint） */
.gpu-accelerated {
  transform: translateZ(0); /* 或 will-change: transform */
  opacity: 1;
  filter: blur(0);
}

/* 避免动画化这些属性（触发 layout 重排） */
/* ❌ width, height, top, left, margin, padding, font-size */

/* 避免动画化这些属性（触发 paint 重绘） */
/* ⚠️ box-shadow, border-color, background */
```

**transform 替代方案：**

| 避免使用 | 替代方案 |
|----------|----------|
| `top/left` 移动 | `transform: translate()` |
| `width/height` 缩放 | `transform: scale()` |
| `box-shadow` 变化 | `filter: drop-shadow()` |

### 8.3 requestAnimationFrame vs scroll 事件

```js
// ❌ 错误：scroll 事件中直接操作 DOM
window.addEventListener('scroll', () => {
  element.style.transform = `translateY(${window.scrollY * 0.5}px)`;
});

// ✅ 正确：rAF 节流
let ticking = false;

window.addEventListener('scroll', () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateParallax();
      ticking = false;
    });
    ticking = true;
  }
});

// ✅ 更优：passive 事件监听
window.addEventListener('scroll', handleScroll, { passive: true });
```

**性能对比：**

| 方案 | 帧率 | 触发频率 | 适用场景 |
|------|------|----------|----------|
| scroll 直绑 | 不稳定 | 每帧可能触发多次 | 不推荐 |
| rAF 节流 | 稳定 60fps | 每帧最多 1 次 | 通用 |
| CSS Scroll-Driven | 稳定 60fps | 浏览器原生 | 现代浏览器 |
| Intersection Observer | 按需 | 仅可见性变化时 | 入场动画 |

### 8.4 懒加载时机

```js
// 图片懒加载（原生）
<img src="image.jpg" loading="lazy" alt="Description" />

// 视频懒加载
<video src="video.mp4" preload="none" />

// 组件懒加载（React）
const HeavySection = React.lazy(() => import('./HeavySection'));
```

**动画资源的懒加载规则：**
- 首屏动画资源必须内联或预加载（`<link rel="preload">`）
- 非首屏动画 CSS 使用 `loading="lazy"` 或动态注入
- 视频/大型图片在进入视口前 200px 开始加载
- Shimmer 骨架屏作为加载占位，内容就绪后立即替换

---

## 九、AI 审美规则摘要

以下规则可直接作为 AI 生成滚动动画时的约束条件。

### 核心参数表

| 属性 | 标准值 | 允许范围 |
|------|--------|----------|
| 入场时长 | 500ms | 300–700ms |
| 退场时长 | 150ms | 100–300ms |
| 交互过渡 | 150ms | 100–250ms |
| Hover 浮起 | -4px | -2–8px |
| Stagger 间隔 | 80ms | 60–100ms |
| 跑马灯速度 | 240s | 20–240s |
| Shimmer 周期 | 1.6s | 1.2–2.0s |
| 缓动函数 | cubic-bezier(0.4,0,0.2,1) | 不变 |

### 缓动函数使用规则

| 场景 | 缓动 | 值 |
|------|------|----|
| 通用过渡 | ease | `cubic-bezier(0.4, 0, 0.2, 1)` |
| 入场动画 | ease-out | `cubic-bezier(0, 0, 0.2, 1)` |
| 退场动画 | ease-in | `cubic-bezier(0.4, 0, 1, 1)` |
| 弹性效果 | custom | `cubic-bezier(0.34, 1.56, 0.64, 1)` |
| Shimmer | ease | `ease` |
| 跑马灯 | linear | `linear` |

### 硬性约束

1. **禁止使用 `alert()`、`prompt()`、`confirm()`**
2. **所有动画必须尊重 `prefers-reduced-motion`**
   ```css
   @media (prefers-reduced-motion: reduce) {
     *, *::before, *::after {
       animation-duration: 0.01ms !important;
       transition-duration: 0.01ms !important;
     }
   }
   ```
3. **动画元素必须设置 `will-change` 或使用 `transform` 触发 GPU 加速**
4. **translate/scale/opacity 动画优先，禁止动画化 layout 属性**
5. **Intersection Observer 的 `rootMargin` 不超过 `-100px`，避免提前过早触发**
6. **同一视口内同时播放的动画不超过 3 组**
7. **所有交互元素（Hover、Focus）必须有明确的视觉反馈**
8. **卡片 Hover 阴影必须使用双层阴影（远影 + 近影）模拟自然光照**
9. **滚动驱动动画优先使用 CSS Scroll-Driven Animations，JS 作为降级方案**
10. **Skeleton/Shimmer 加载状态必须有，不允许白屏等待**
