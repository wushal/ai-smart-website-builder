# 交互设计规则

> 基于 motionsites.ai 设计语言拆解，涵盖导航交互、卡片悬停、按钮反馈、光标效果和微交互模式。

---

## 一、导航栏交互

### 1.1 固定定位容器

```css
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  background-color: rgba(0, 0, 0, 0.6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.navbar-inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 24px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
```

### 1.2 标签栏切换（Featured / Popular / Recent）

```tsx
// React 组件示例
function TabBar() {
  const tabs = ['Featured', 'Popular', 'Recent'];
  const [active, setActive] = useState(0);

  return (
    <div className="inline-flex rounded-full border border-white/10 p-1 gap-1">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          onClick={() => setActive(i)}
          className={`
            px-4 py-1.5 rounded-full text-sm font-medium
            transition-all duration-300
            ${
              active === i
                ? 'bg-[rgb(32,32,32)] text-white shadow-sm'
                : 'bg-transparent text-white/72 hover:text-white hover:bg-white/5'
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
```

**CSS 状态参数：**

| 状态 | background-color | color | border |
|------|-----------------|-------|--------|
| 选中 | `rgb(32, 32, 32)` | `rgb(255, 255, 255)` | none（胶囊形状自带） |
| 未选中 | `transparent` | `rgba(255, 255, 255, 0.72)` | none |
| 父容器 | — | — | `1px solid rgba(255, 255, 255, 0.1)` |

### 1.3 Hover 与 Focus 状态

```css
.nav-link {
  color: rgba(255, 255, 255, 0.72);
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: rgb(255, 255, 255);
  opacity: 0.9;
}

.nav-link:focus-visible {
  outline: 2px solid rgb(255, 255, 255);
  outline-offset: 2px;
  border-radius: 4px;
}
```

### 1.4 移动端汉堡菜单

```tsx
function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          {open ? (
            <path d="M18 6L6 18M6 6l12 12" /> // X icon
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" /> // Hamburger icon
          )}
        </svg>
      </button>

      {/* 移动菜单面板 */}
      <div
        className={`
          fixed inset-0 top-16 bg-black/95 backdrop-blur-lg z-40
          transition-all duration-300 ease-out
          ${open ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}
        `}
      >
        <nav className="flex flex-col items-center gap-6 pt-12">
          {/* nav items */}
        </nav>
      </div>
    </>
  );
}
```

---

## 二、卡片悬停效果

### 2.1 上浮 + 阴影（核心模式）

```css
.card {
  border-radius: 24px; /* rounded-3xl */
  overflow: hidden;
  transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1),
              box-shadow 0.3s cubic-bezier(0, 0, 0.2, 1);
  cursor: pointer;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```

**参数速查：**

| 属性 | 值 |
|------|-----|
| 上浮距离 | `translateY(-4px)` |
| 阴影 | `0 8px 32px rgba(0, 0, 0, 0.3)` |
| 过渡时长 | `0.3s` |
| 缓动函数 | `cubic-bezier(0, 0, 0.2, 1)` — Material Design standard |
| 卡片圆角 | `24px` (rounded-3xl) |
| 图片区域圆角 | `12px` (rounded-xl) |
| 图片宽高比 | `aspect-ratio: 4/3` |

### 2.2 3D Tilt 倾斜效果

```tsx
function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8; // 最大旋转 8deg
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="card" // 复用基础卡片样式
      style={{ transition: 'transform 0.15s ease-out' }}
    >
      {children}
    </div>
  );
}
```

### 2.3 边框发光效果

```css
.card-glow {
  position: relative;
  border-radius: 24px;
  background: rgb(16, 16, 16);
}

.card-glow::before {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 25px;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card-glow:hover::before {
  opacity: 1;
}
```

### 2.4 视频预览自动播放

```tsx
function VideoPreviewCard({ thumbnailSrc, videoSrc }: { thumbnailSrc: string; videoSrc: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-xl overflow-hidden aspect-[4/3]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 底层：静态缩略图 */}
      <img
        src={thumbnailSrc}
        alt="Preview thumbnail"
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-opacity duration-300
          ${isHovered ? 'opacity-0' : 'opacity-100'}
        `}
      />

      {/* 上层：自动播放视频 */}
      <video
        src={videoSrc}
        autoPlay={isHovered}
        loop
        playsInline
        muted
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-opacity duration-300
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
      />
    </div>
  );
}
```

**实现要点：**
- `autoplay` 属性根据 hover 状态动态切换，避免非交互时消耗带宽
- 双层 `img` + `video` 通过 `opacity` 实现平滑过渡
- `playsInline` 防止 iOS 自动全屏
- `muted` 确保浏览器允许自动播放（Chrome 策略要求）

---

## 三、按钮交互规范

### 3.1 基础 Hover / Focus / Active 状态

```css
/* 次要按钮 */
.btn-secondary {
  background-color: hsl(var(--secondary));
  color: hsl(var(--muted-foreground));
  padding: 8px 20px;
  border-radius: 9999px; /* rounded-full */
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background-color: hsl(var(--accent));
  color: hsl(var(--foreground));
}

.btn-secondary:focus-visible {
  outline: 2px solid hsl(var(--primary));
  outline-offset: 2px;
}

.btn-secondary:active {
  transform: scale(0.97);
}
```

### 3.2 Neumorphism 按钮

```css
.btn-neumorphic {
  background: rgb(24, 24, 27); /* zinc-900 */
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 9999px;
  padding: 10px 24px;
  color: rgb(255, 255, 255);
  font-weight: 500;
  box-shadow:
    4px 4px 8px rgba(0, 0, 0, 0.4),
    -2px -2px 8px rgba(255, 255, 255, 0.03);
  transition: all 0.2s ease;
}

.btn-neumorphic:hover {
  box-shadow:
    2px 2px 4px rgba(0, 0, 0, 0.3),
    -1px -1px 4px rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.15);
}

.btn-neumorphic:active {
  box-shadow:
    inset 2px 2px 4px rgba(0, 0, 0, 0.4),
    inset -1px -1px 4px rgba(255, 255, 255, 0.03);
}
```

### 3.3 渐变按钮

```css
.btn-gradient {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);
  background-size: 200% 200%;
  border: none;
  border-radius: 9999px;
  padding: 12px 28px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  animation: gradient-shift 3s ease infinite;
}

.btn-gradient:hover {
  background-position: 100% 0;
  box-shadow: 0 4px 20px rgba(139, 92, 246, 0.4);
  transform: translateY(-1px);
}

@keyframes gradient-shift {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
```

### 3.4 磁性按钮（Magnetic Button）

```tsx
function MagneticButton({ children }: { children: React.ReactNode }) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // 鼠标在按钮范围内时产生吸附，范围外则按距离衰减
    btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
  };

  const handleMouseLeave = () => {
    if (!btnRef.current) return;
    btnRef.current.style.transform = 'translate(0, 0)';
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="btn-secondary"
      style={{ transition: 'transform 0.2s ease-out' }}
    >
      {children}
    </button>
  );
}
```

**参数：** 吸附系数 `0.3`，可根据按钮尺寸调整为 `0.2 ~ 0.5`。

### 3.5 Ripple 涟漪效果

```tsx
function RippleButton({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const btnRef = useRef<HTMLButtonElement>(null);

  const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement('span');
    ripple.className = 'ripple-effect';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;

    btn.appendChild(ripple);

    ripple.addEventListener('animationend', () => ripple.remove());
  };

  return (
    <button ref={btnRef} onClick={createRipple} {...props}>
      {children}
      <style>{`
        .ripple-effect {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.25);
          transform: scale(0);
          animation: ripple 0.6s linear;
          pointer-events: none;
        }
        @keyframes ripple {
          to { transform: scale(4); opacity: 0; }
        }
      `}</style>
    </button>
  );
}
```

---

## 四、光标交互

### 4.1 自定义光标形态

```css
/* 隐藏系统光标 */
.cursor-interactive * {
  cursor: none !important;
}

/* 自定义光标圆点 */
.custom-cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: rgb(255, 255, 255);
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  transition: width 0.2s ease, height 0.2s ease, background 0.2s ease;
  mix-blend-mode: difference;
}

/* 悬停可交互元素时光标放大 */
.custom-cursor.hovering {
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
}
```

```tsx
function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const move = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    // 监听可交互元素
    const addHoverListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
      });
    };

    window.addEventListener('mousemove', move);
    addHoverListeners();

    return () => window.removeEventListener('mousemove', move);
  }, []);

  return <div ref={cursorRef} className="custom-cursor" />;
}
```

### 4.2 鼠标跟随光晕（Cursor Follow 效果）

```tsx
function CursorGlow() {
  return (
    <>
      <style>{`
        .cursor-glow {
          position: fixed;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(139, 92, 246, 0.08) 0%,
            transparent 70%
          );
          pointer-events: none;
          z-index: 0;
          transform: translate(-50%, -50%);
        }
      `}</style>
      {/* 通过 framer-motion 或直接 JS 驱动 */}
      <motion.div
        className="cursor-glow"
        animate={{ x: mouseX - 300, y: mouseY - 300 }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />
    </>
  );
}
```

**使用 `react-spring` 替代方案：**

```tsx
import { useSpring, animated } from '@react-spring/web';

function CursorGlowSpring() {
  const [spring, api] = useSpring(() => ({ x: 0, y: 0 }));

  useEffect(() => {
    const move = (e: MouseEvent) => {
      api.start({ x: e.clientX - 300, y: e.clientY - 300 });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, [api]);

  return (
    <animated.div
      className="cursor-glow"
      style={{ left: spring.x, top: spring.y }}
    />
  );
}
```

### 4.3 光标视差层

```tsx
// 鼠标移动时，不同层以不同速度位移，形成深度感
function ParallaxLayers() {
  const handleMouseMove = (e: React.MouseEvent) => {
    const layers = document.querySelectorAll('[data-parallax-speed]');
    layers.forEach((layer) => {
      const speed = parseFloat((layer as HTMLElement).dataset.parallaxSpeed || '0');
      const x = (window.innerWidth / 2 - e.clientX) * speed;
      const y = (window.innerHeight / 2 - e.clientY) * speed;
      (layer as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
    });
  };

  return (
    <div onMouseMove={handleMouseMove} className="relative overflow-hidden">
      <div data-parallax-speed="0.02" className="absolute inset-0">
        {/* 远景背景元素 */}
      </div>
      <div data-parallax-speed="0.05" className="absolute inset-0">
        {/* 中景元素 */}
      </div>
      <div data-parallax-speed="0.1" className="absolute inset-0">
        {/* 近景元素 */}
      </div>
    </div>
  );
}
```

### 4.4 CSS vs JS 实现对比

| 效果 | CSS 实现 | JS 实现 | 建议 |
|------|---------|---------|------|
| 自定义光标形状 | `cursor: url()` 简单替换 | `mousemove` + DOM 元素 | 需要状态切换时用 JS |
| 鼠标跟随光晕 | 仅 `:hover` 区域光效 | `mousemove` + spring physics | JS 提供更平滑的物理感 |
| 光标视差 | 不支持 | `mousemove` + `transform` | 必须用 JS |
| Mix-blend-mode 光标 | CSS `mix-blend-mode: difference` | — | CSS 优先，零性能开销 |
| 磁性吸附 | 不支持 | `mousemove` + 插值计算 | JS 必需 |

---

## 五、微交互系统

### 5.1 输入框聚焦

```css
.input-field {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 10px 16px;
  color: rgb(255, 255, 255);
  font-size: 14px;
  transition: all 0.2s ease;
}

.input-field::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.input-field:hover {
  border-color: rgba(255, 255, 255, 0.2);
}

.input-field:focus {
  outline: none;
  border-color: rgba(139, 92, 246, 0.6);
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.15);
  background: rgba(255, 255, 255, 0.08);
}
```

### 5.2 开关切换（Toggle）

```tsx
function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`
        relative w-11 h-6 rounded-full transition-colors duration-200
        ${checked ? 'bg-violet-500' : 'bg-white/10'}
      `}
    >
      <span
        className={`
          absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full
          shadow-sm transition-transform duration-200
          ${checked ? 'translate-x-5' : 'translate-x-0'}
        `}
      />
    </button>
  );
}
```

### 5.3 加载状态 — 骨架屏

```css
.skeleton {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 25%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s ease-in-out infinite;
  border-radius: 8px;
}

@keyframes skeleton-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

**骨架屏卡片布局示例：**

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
  <div class="rounded-3xl overflow-hidden">
    <div class="skeleton aspect-[4/3]"></div>
    <div class="p-4 space-y-3">
      <div class="skeleton h-4 w-3/4 rounded"></div>
      <div class="skeleton h-3 w-1/2 rounded"></div>
    </div>
  </div>
  <!-- 重复占位 -->
</div>
```

### 5.4 Toast 通知（Sonner 库）

```tsx
import { Toaster, toast } from 'sonner';

function App() {
  return (
    <>
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgb(24, 24, 27)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'rgb(255, 255, 255)',
            borderRadius: '12px',
          },
        }}
      />
      <button onClick={() => toast.success('操作成功')}>触发通知</button>
    </>
  );
}
```

**Sonner Toast 动画参数：**
- 进入：`transform 0.4s` 由右侧滑入
- 退出：`transform 0.4s` 向右侧滑出
- 使用 `cubic-bezier(0.16, 1, 0.3, 1)`（Sonner 内置 spring-like 曲线）

### 5.5 工具提示（Tooltip）

```tsx
function Tooltip({ content, children }: { content: string; children: React.ReactNode }) {
  return (
    <div className="group relative inline-flex">
      {children}
      <div
        className="
          absolute bottom-full left-1/2 -translate-x-1/2 mb-2
          px-3 py-1.5 text-xs font-medium
          bg-white text-zinc-900 rounded-lg
          opacity-0 group-hover:opacity-100
          pointer-events-none
          transition-opacity duration-150
          shadow-lg
        "
        role="tooltip"
      >
        {content}
        {/* 小三角箭头 */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-white" />
      </div>
    </div>
  );
}
```

---

## 六、触摸与手势

### 6.1 移动端适配策略

```css
/* 触摸设备上禁用 hover 状态引起的 sticky hover */
@media (hover: none) {
  .card:hover {
    transform: none;
    box-shadow: none;
  }

  .card:active {
    transform: scale(0.98);
    transition: transform 0.1s ease;
  }
}

/* 增大触摸热区 */
.touch-target {
  min-width: 44px;
  min-height: 44px;
}
```

### 6.2 拖拽排序

```tsx
import { DndContext, closestCenter, useSensor, useSensors, PointerSensor } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy, useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

function SortableItem({ id, children }: { id: string; children: React.ReactNode }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
}

function SortableList({ items }: { items: string[] }) {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 8 }, // 8px 后触发拖拽
    })
  );

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter}>
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((id) => (
          <SortableItem key={id} id={id}>
            <div className="card p-4 mb-3">{id}</div>
          </SortableItem>
        ))}
      </SortableContext>
    </DndContext>
  );
}
```

### 6.3 Swipe 手势

```tsx
import { useSwipeable } from 'react-swipeable';

function SwipeableCard() {
  const handlers = useSwipeable({
    onSwipedLeft: () => console.log('Swiped left'),
    onSwipedRight: () => console.log('Swiped right'),
    onSwipedDown: () => console.log('Swiped down'),
    trackMouse: true,
    delta: 30, // 最小滑动距离 30px
  });

  return <div {...handlers} className="card">Swipe me</div>;
}
```

### 6.4 触摸反馈

```css
/* iOS 风格触摸高亮 */
.touch-ripple {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0.1);
  touch-action: manipulation; /* 消除 300ms 延迟 */
}

.touch-ripple:active {
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color 0.1s ease;
}
```

---

## 七、过渡动画规范

### 7.1 Transition 时长表

| 交互类型 | 时长 | 缓动曲线 | 说明 |
|---------|------|---------|------|
| 按钮 hover 颜色切换 | `150ms` | `ease` | 即时反馈，不拖沓 |
| 卡片 hover 上浮 | `300ms` | `cubic-bezier(0, 0, 0.2, 1)` | Material Design standard |
| 模态框进出 | `300ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | 弹性进出 |
| 导航栏展开/收起 | `300ms` | `ease-out` | 菜单滑入 |
| 标签切换指示器 | `300ms` | `cubic-bezier(0.4, 0, 0.2, 1)` | 平滑滑动 |
| Toast 通知 | `400ms` | `cubic-bezier(0.16, 1, 0.3, 1)` | Sonner 默认 |
| 3D Tilt | `150ms` | `ease-out` | 实时跟踪，越快越好 |
| 视频预览 opacity | `300ms` | `ease` | 图片视频切换 |
| Skeleton shimmer | `1500ms` | `ease-in-out` | 无限循环 |
| 页面路由切换 | `200ms` | `ease-in-out` | 内容淡入淡出 |
| 焦点环 | `150ms` | `ease` | 即时视觉反馈 |

### 7.2 缓动曲线选择

```css
/* 标准缓动 — 通用过渡 */
--ease-standard: cubic-bezier(0, 0, 0.2, 1);

/* 减速进入 — 元素从外部进入视口 */
--ease-decelerate: cubic-bezier(0, 0, 0.2, 1);

/* 加速退出 — 元素离开视口 */
--ease-accelerate: cubic-bezier(0.4, 0, 1, 1);

/* 弹性 — 模态框、浮动面板 */
--ease-spring: cubic-bezier(0.16, 1, 0.3, 1);

/* 线性 — 进度条、骨架屏 */
--ease-linear: linear;
```

**选择原则：**
- 进入动画用 `decelerate`（快进慢停）
- 退出动画用 `accelerate`（慢起快离）
- 状态切换用 `standard`（Material 标准）
- 强调回弹感用 `spring`（`0.16, 1, 0.3, 1`）

### 7.3 属性优先级

性能从高到低排列（优先使用靠前的属性做动画）：

1. `transform` — GPU 加速，不触发布局
2. `opacity` — GPU 加速，不触发布局
3. `filter` — GPU 加速，可能触发合成层
4. `color` / `background-color` — 仅触发重绘
5. `width` / `height` / `padding` / `margin` — 触发布局重排，**尽量避免**

```css
/* 推荐：用 transform 代替 width 动画 */
.expand-enter {
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1);
}

.expand-enter.active {
  transform: scaleX(1);
}
```

### 7.4 Stagger 时序

```tsx
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // 每个子元素间隔 50ms
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0, 0, 0.2, 1],
    },
  },
};

function StaggerGrid({ children }: { children: React.ReactNode[] }) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3"
      style={{ gridAutoFlow: 'dense' }}
    >
      {children.map((child, i) => (
        <motion.div key={i} variants={item}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
```

**Stagger 参数建议：**

| 场景 | staggerChildren | duration | 说明 |
|------|----------------|----------|------|
| 网格列表（4列） | `0.05s` | `0.3s` | 总动画时长约 `0.05 * n + 0.3` 秒 |
| 导航菜单项 | `0.06s` | `0.25s` | 从上到下依次展开 |
| 表单字段 | `0.08s` | `0.4s` | 逐行显现 |
| 步骤指示器 | `0.1s` | `0.3s` | 强调时序感 |

---

## 八、可访问性交互

### 8.1 Focus-Visible 可见焦点

```css
/* 所有可交互元素统一焦点样式 */
:focus-visible {
  outline: 2px solid rgba(139, 92, 246, 0.8);
  outline-offset: 2px;
  border-radius: 4px;
}

/* 链接和按钮 */
a:focus-visible,
button:focus-visible {
  outline: 2px solid rgba(139, 92, 246, 0.8);
  outline-offset: 3px;
}

/* 仅键盘导航时显示焦点环（鼠标点击不显示） */
:focus:not(:focus-visible) {
  outline: none;
}
```

### 8.2 prefers-reduced-motion 降级

```css
/* 默认：启用动画 */
.card {
  transition: transform 0.3s cubic-bezier(0, 0, 0.2, 1),
              box-shadow 0.3s cubic-bezier(0, 0, 0.2, 1);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

/* 降级：用户偏好减少动效 */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }

  .card:hover {
    transform: none;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
}
```

```tsx
// JS 中检测减少动效偏好
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// 在 framer-motion 中使用
<motion.div
  animate={prefersReducedMotion ? {} : { y: -4, boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
  transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
/>
```

### 8.3 键盘导航

```tsx
// Tab 栏键盘导航
function AccessibleTabBar({ tabs, active, onChange }: TabBarProps) {
  return (
    <div role="tablist" className="inline-flex rounded-full border border-white/10 p-1 gap-1">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          role="tab"
          aria-selected={i === active}
          tabIndex={i === active ? 0 : -1} // roving tabindex
          onClick={() => onChange(i)}
          onKeyDown={(e) => {
            let next = i;
            if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
              next = (i + 1) % tabs.length;
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
              next = (i - 1 + tabs.length) % tabs.length;
            } else if (e.key === 'Home') {
              next = 0;
            } else if (e.key === 'End') {
              next = tabs.length - 1;
            } else {
              return;
            }
            e.preventDefault();
            onChange(next);
            // 聚焦到新激活的 tab
            tabsRefs.current[next]?.focus();
          }}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300
            ${i === active
              ? 'bg-[rgb(32,32,32)] text-white'
              : 'bg-transparent text-white/72'
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
```

### 8.4 ARIA 标注规范

| 组件 | role | 必需属性 | 说明 |
|------|------|---------|------|
| Tab 按钮 | `tab` | `aria-selected`, `tabIndex` | Roving tabindex 模式 |
| Tab 面板 | `tabpanel` | `aria-labelledby` | 关联 tab 的 id |
| Toggle 开关 | `switch` | `aria-checked` | 必须用 `button` 实现 |
| 对话框 | `dialog` | `aria-modal="true"`, `aria-labelledby` | 配合 `focus trap` |
| Toast 通知 | `alert` | — | `role="status"` 或 `role="alert"` |
| 工具提示 | `tooltip` | — | 通过 `aria-describedby` 关联 |
| 下拉菜单 | `menu` | `aria-activedescendant` | 配合 `menuitem` |
| 手风琴面板 | `region` | `aria-labelledby`, `aria-hidden` | 展开/收起状态 |
| 搜索框 | `searchbox` | `aria-label` 或 `aria-labelledby` | — |
| 加载状态 | `status` | `aria-live="polite"` | 不打断用户 |

---

## 九、AI 审美规则摘要

以下规则可直接作为 AI 生成 UI 代码时的约束条件：

1. **圆角层级**：容器 `24px`，图片区域 `12px`，按钮/标签 `9999px`（全圆角胶囊），输入框 `12px`
2. **卡片悬停**：上浮 `4px` + 阴影 `0 8px 32px rgba(0,0,0,0.3)`，过渡 `0.3s cubic-bezier(0,0,0.2,1)`
3. **标签栏**：父容器 `rounded-full border border-white/10 p-1`，选中态 `bg-[rgb(32,32,32)] text-white`，未选中 `text-white/72`
4. **最大内容宽度**：`1440px`，导航栏 `fixed` + `backdrop-blur`
5. **网格系统**：`grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 grid-auto-flow: dense`
6. **色彩体系**：深色背景 `rgb(0,0,0)` / `rgb(9,9,11)`，强调色紫罗兰系 `#6366f1` ~ `#a855f7`
7. **动画优先级**：`transform` > `opacity` > `filter`，严禁 `width/height` 做动画
8. **过渡时长**：微交互 `150ms`，标准过渡 `300ms`，弹性 `0.16,1,0.3,1`
9. **焦点样式**：`outline: 2px solid rgba(139,92,246,0.8); outline-offset: 2px`，仅 `:focus-visible` 时显示
10. **减少动效**：`@media (prefers-reduced-motion: reduce)` 下所有动画降级为 `0.01ms`
11. **触摸热区**：最小 `44x44px`，`touch-action: manipulation`
12. **Toast 通知**：Sonner 库 `theme="dark"`，圆角 `12px`，边框 `rgba(255,255,255,0.1)`
13. **视频预览**：双层 `img + video` opacity 切换，`playsInline muted`，hover 时 autoplay
14. **链接 hover**：`opacity: 0.9 transition-opacity`，简洁不夸张
15. **图片宽高比**：卡片图片 `aspect-[4/3]`，保持视觉一致性

---

> 文档版本：1.0
> 来源：motionsites.ai 设计语言拆解 + 2025 现代交互模式
