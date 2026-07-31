# 3D 动画设计规则

> 基于 motionsites.ai 设计语言拆解，涵盖 CSS 3D 变换、WebGL/Three.js 场景、3D 产品展示、粒子系统和 Spline 集成。

---

## 一、CSS 3D 变换基础

CSS 3D 变换是所有浏览器原生 3D 效果的基石。motionsites.ai 的模板库中，大量"3D"视觉效果本质上是纯 CSS 3D Transform 实现的，无需 WebGL。掌握以下四个核心属性是构建一切 CSS 3D 效果的前提。

### 1.1 perspective — 透视距离

`perspective` 定义观察者到 Z=0 平面的距离，值越小透视畸变越强烈，值越大越接近正交投影。它必须设置在**父容器**上，而非变换元素本身。

```css
.parent {
  /* 800px 是舒适的默认值，适合大多数卡片/面板场景 */
  perspective: 800px;
  /* 1200px 适合大区域场景，透视感更温和 */
  /* 400px 适合强调近大远小的戏剧化效果 */
}

.parent-strong {
  perspective: 400px;
}
```

**参数选择指南：**

| 场景 | 推荐 perspective 值 | 效果 |
|------|-------------------|------|
| 卡片 hover 倾斜 | 600–1000px | 自然微妙 |
| 全屏视差层 | 1000–1500px | 柔和深远 |
| 3D 翻转卡片 | 800–1200px | 标准效果 |
| 戏剧化近景 | 200–500px | 强烈畸变 |

### 1.2 transform-style: preserve-3d — 保持 3D 空间

默认情况下子元素的 3D 变换会被"拍平"到父元素的平面上。`preserve-3d` 让子元素在真实的 3D 空间中定位，这是实现多层深度、3D 翻转等效果的关键。

```css
.card-container {
  perspective: 1000px;
}

.card {
  transform-style: preserve-3d;
  transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.card:hover {
  transform: rotateY(180deg);
}

/* preserve-3d 下的子元素各处于不同的 Z 深度 */
.card-face {
  /* 正面和背面分别定位在 Z 轴两侧 */
  backface-visibility: hidden;
  position: absolute;
  inset: 0;
}

.card-back {
  transform: rotateY(180deg);
}
```

**注意：** `preserve-3d` 不能与 `overflow: hidden` 同时使用在同一个元素上，后者会强制创建新的堆叠上下文并破坏 3D 空间。

### 1.3 rotate3d / translate3d — 三维旋转与平移

```css
/* rotate3d(x, y, z, angle) — 绕任意轴旋转 */
.element {
  transform: rotate3d(1, 1, 0, 45deg); /* 绕 (1,1,0) 轴旋转 45° */
}

/* translate3d(x, y, z) — 三轴平移，Z 轴正值朝向观察者 */
.layer-near {
  transform: translate3d(0, 0, 50px);  /* 靠近观察者 */
}
.layer-far {
  transform: translate3d(0, 0, -100px); /* 远离观察者 */
}

/* 组合变换：顺序很重要 */
.complex-transform {
  transform: perspective(800px) rotateX(15deg) rotateY(-10deg) translateZ(30px);
}
```

**motionsites.ai 风格微倾斜：**

```css
/* 模板库中常见的轻微 3D 倾斜，营造"浮在页面上"的感觉 */
.float-card {
  transform: perspective(1000px) rotateX(2deg) rotateY(-1deg) translateZ(10px);
  transition: transform 0.4s ease;
}

.float-card:hover {
  transform: perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(20px);
}
```

### 1.4 backface-visibility — 背面可见性

控制元素背面是否可见。在 3D 翻转卡片中用于隐藏背面内容。

```css
.face {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}

/* 允许背面可见的特殊场景：半透明旋转展示 */
.glass-rotate {
  backface-visibility: visible;
  opacity: 0.7;
}
```

---

## 二、多层深度视差（CSS 伪 3D）

motionsites.ai 的 "Layered Depth" 模板展示了如何用纯 CSS `perspective` + `translateZ` 构建伪 3D 视差。核心思想：将不同内容层放置在 Z 轴不同深度，配合鼠标移动产生视差位移。

### 2.1 视差容器结构

```html
<div class="parallax-scene">
  <div class="parallax-layer layer-bg">背景层</div>
  <div class="parallax-layer layer-mid">中景层</div>
  <div class="parallax-layer layer-fg">前景层</div>
</div>
```

```css
.parallax-scene {
  perspective: 1000px;
  perspective-origin: 50% 50%;
  overflow: hidden;
  height: 100vh;
  position: relative;
}

.parallax-layer {
  position: absolute;
  inset: -50px; /* 留出位移余量 */
  transform-style: preserve-3d;
  transition: transform 0.1s ease-out; /* 低延迟跟随鼠标 */
}

/* 不同 Z 深度 = 不同视差强度 */
.layer-bg {
  transform: translateZ(-200px) scale(1.25); /* 最远，移动最慢 */
}
.layer-mid {
  transform: translateZ(0px) scale(1);       /* 中间层 */
}
.layer-fg {
  transform: translateZ(100px) scale(0.9);   /* 最近，移动最快 */
}
```

**关键公式：** 当使用 `translateZ` 将元素推到 `perspective` 范围之外时，必须用 `scale` 补偿以避免元素缩小。补偿公式：

```
scale = perspective / (perspective - translateZ)
```

例如：`perspective: 1000px`，`translateZ: -200px` → `scale = 1000 / 1200 ≈ 1.25`

### 2.2 鼠标视差联动（JS）

```javascript
const scene = document.querySelector('.parallax-scene');

scene.addEventListener('mousemove', (e) => {
  const rect = scene.getBoundingClientRect();
  const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 ~ 0.5
  const y = (e.clientY - rect.top) / rect.height - 0.5;

  document.querySelector('.layer-bg').style.transform =
    `translateZ(-200px) scale(1.25) translate(${x * -10}px, ${y * -10}px)`;

  document.querySelector('.layer-mid').style.transform =
    `translateZ(0px) scale(1) translate(${x * -20}px, ${y * -20}px)`;

  document.querySelector('.layer-fg').style.transform =
    `translateZ(100px) scale(0.9) translate(${x * -40}px, ${y * -40}px)`;
});
```

**参数说明：**
- 越靠近观察者的层（Z 值越大），`translate` 偏移量应越大，形成近快远慢的视差
- 使用 `transition: 0.1s ease-out` 避免生硬跳变，模拟惯性
- 移动端可改用 `DeviceOrientationEvent` 替代鼠标

### 2.3 motionsites.ai 的 "Cursor Follow" 风格

motionsites.ai 的光标跟随效果通常包含 3D 视差层和缓动跟随：

```css
.cursor-follower {
  position: fixed;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.15s ease-out, width 0.3s, height 0.3s;
  transform: translate(-50%, -50%);
}
```

```javascript
const follower = document.querySelector('.cursor-follower');
let mouseX = 0, mouseY = 0;
let followerX = 0, followerY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  followerX += (mouseX - followerX) * 0.12;
  followerY += (mouseY - followerY) * 0.12;
  follower.style.left = followerX + 'px';
  follower.style.top = followerY + 'px';
  requestAnimationFrame(animate);
}
animate();
```

---

## 三、3D 卡片翻转与倾斜

### 3.1 3D 翻转卡片（完整组件）

motionsites.ai 风格的翻转卡片，正反两面展示不同内容。

```html
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <h3>服务概览</h3>
      <p>悬停查看详情</p>
    </div>
    <div class="flip-card-back">
      <h3>详细说明</h3>
      <p>这里是背面的详细内容描述。</p>
    </div>
  </div>
</div>
```

```css
.flip-card {
  perspective: 1000px;
  width: 320px;
  height: 200px;
  cursor: pointer;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.7s cubic-bezier(0.23, 1, 0.32, 1);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.flip-card-front {
  background: linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 100%);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.flip-card-back {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #e0e0e0;
  transform: rotateY(180deg);
  border: 1px solid rgba(255, 255, 255, 0.12);
}
```

### 3.2 3D Tilt 效果（鼠标跟随倾斜）

motionsites.ai 产品卡片常用的微交互：鼠标位置决定卡片的 3D 倾斜方向和角度。

```javascript
function initTilt(card) {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // 最大倾斜角度 ±15°
    const maxTilt = 15;
    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    card.style.transform = `
      perspective(800px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateZ(10px)
    `;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)';
    card.style.transition = 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
  });

  card.addEventListener('mouseenter', () => {
    card.style.transition = 'none';
  });
}

// 初始化所有 .tilt-card 元素
document.querySelectorAll('.tilt-card').forEach(initTilt);
```

```css
.tilt-card {
  background: linear-gradient(to bottom, #1a1a2e, #0f0f0f);
  border-radius: 16px;
  padding: 32px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  transform-style: preserve-3d;
  will-change: transform;
  /* motionsites.ai 风格：hover 时轻微浮起 */
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
}
```

### 3.3 Neumorphism 按钮（motionsites.ai 标志性元素）

motionsites.ai 模板中的按钮常使用 neumorphism 风格，通过 `linear-gradient` 和 `border-top` 高光模拟 3D 凸起。

```css
.neu-button {
  padding: 14px 32px;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  color: #ffffff;
  background: linear-gradient(to top, #2a2a3e, #3a3a52);
  border-top: 2px solid rgba(255, 255, 255, 0.25);
  box-shadow:
    0 4px 12px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
}

.neu-button:hover {
  transform: translateY(-4px);  /* 模拟浮起 */
  box-shadow:
    0 8px 24px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  border-top-color: rgba(255, 255, 255, 0.35);
}

.neu-button:active {
  transform: translateY(-1px);
  box-shadow:
    0 2px 8px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.05);
}
```

**参数说明：**
- `linear-gradient(to top, dark, light)`：底部深、顶部浅，模拟上方光源
- `border-top: 2px solid white`：顶部高光边框，强化凸起感
- `translateY(-4px)` hover：浮起 + 阴影扩大，是 motionsites.ai 最常用的 hover 模式

---

## 四、CSS 3D 文字效果

motionsites.ai 的 "3D Collectible Hero" 和 "Reveal Hero" 模板中，文字效果是视觉核心。主要技法包括多层 Z 轴分层、`text-shadow` 3D 挤压和 neumorphism 凸起。

### 4.1 多层 Z 轴分层文字

将同一文字复制多层，分别放置在不同 Z 深度，配合 `mix-blend-mode` 和 `filter: blur()` 创造空间深度。

```html
<div class="text-3d-container">
  <h1 class="text-3d-layer text-glow">AETHERIS</h1>
  <h1 class="text-3d-layer text-blur">AETHERIS</h1>
  <h1 class="text-3d-layer text-main">AETHERIS</h1>
</div>
```

```css
.text-3d-container {
  position: relative;
  perspective: 500px;
  transform-style: preserve-3d;
}

.text-3d-layer {
  font-size: clamp(48px, 8vw, 120px);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1;
  position: absolute;
  white-space: nowrap;
}

/* 最底层：发光扩散层 */
.text-glow {
  transform: translateZ(-60px);
  color: transparent;
  text-shadow: 0 0 80px rgba(120, 100, 255, 0.4);
  filter: blur(20px);
  mix-blend-mode: screen;
}

/* 中间层：模糊深度层 */
.text-blur {
  transform: translateZ(-30px);
  color: rgba(255, 255, 255, 0.15);
  filter: blur(8px);
  mix-blend-mode: screen;
}

/* 顶层：清晰主体文字 */
.text-main {
  transform: translateZ(0);
  color: #ffffff;
  position: relative;
}
```

**motionsites.ai 核心技法解析：**
- `mix-blend-mode: screen`：让发光层与背景融合，避免生硬的叠加边缘，创造大气感（"Aetheris Voyage" 风格）
- `filter: blur()` 的梯度递减（20px → 8px → 0px）模拟景深效果
- 三层结构是 motionsites.ai 的标准配方，不建议超过四层（性能与视觉收益递减）

### 4.2 text-shadow 3D 挤压效果

纯 `text-shadow` 实现的长阴影/挤压 3D 效果，无需 3D Transform。

```css
.text-extrude {
  font-size: 80px;
  font-weight: 900;
  color: #1a1a2e;
  text-shadow:
    1px 1px 0 #2a2a3e,
    2px 2px 0 #2a2a3e,
    3px 3px 0 #2a2a3e,
    4px 4px 0 #2a2a3e,
    5px 5px 0 #2a2a3e,
    6px 6px 0 #2a2a3e,
    7px 7px 10px rgba(0, 0, 0, 0.4);
}
```

**参数说明：**
- 前面 N 层 `text-shadow` 无模糊（`0`），偏移量逐层递增 1px，形成棱角分明的挤压感
- 最后一层加 `blur` 和降低透明度，作为投影柔化边缘
- 递增步长 1px 适合精细挤压，2px 适合粗犷风格
- 建议最多 8-10 层阴影，超过后性能下降且视觉收益低

### 4.3 Neumorphism 凸起文字

```css
.text-neu {
  font-size: 72px;
  font-weight: 800;
  color: #1a1a2e;
  text-shadow:
    -2px -2px 4px rgba(255, 255, 255, 0.05),
    2px 2px 4px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(120, 100, 255, 0.1);
  letter-spacing: -0.02em;
}
```

### 4.4 液态玻璃文字（"Liquid Glass Agency" 风格）

```css
.glass-text {
  font-size: 64px;
  font-weight: 700;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.3) 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.3));
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 16px 32px;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
```

---

## 五、Three.js / React Three Fiber 场景

当 CSS 3D 无法满足需求时（如真实 3D 模型、复杂光照、物理模拟），需要引入 WebGL。Three.js 是最主流的 WebGL 库，React Three Fiber (R3F) 是其 React 声明式封装。

### 5.1 Scene / Camera / Renderer 基础（原生 Three.js）

```javascript
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// 场景
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x0a0a0f);
scene.fog = new THREE.FogExp2(0x0a0a0f, 0.02); // 指数雾，营造深度消隐

// 透视相机
const camera = new THREE.PerspectiveCamera(
  45,                                        // FOV：45° 适合产品展示，60° 适合场景浏览
  window.innerWidth / window.innerHeight,     // 宽高比
  0.1,                                       // 近裁剪面
  1000                                       // 远裁剪面
);
camera.position.set(0, 2, 8);

// 渲染器
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,          // 透明背景（可与网页背景融合）
  powerPreference: 'high-performance'
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // 限制 DPR 保障性能
renderer.toneMapping = THREE.ACESFilmicToneMapping;           // 电影级色调映射
renderer.toneMappingExposure = 1.2;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;             // 柔和阴影
document.getElementById('canvas-container').appendChild(renderer.domElement);

// 控制器
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 3;
controls.maxDistance = 20;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;

// 动画循环
function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}
animate();
```

### 5.2 环境光与点光源

```javascript
// 环境光 — 全局均匀照明，填充阴影
const ambientLight = new THREE.AmbientLight(0x404060, 0.5);
scene.add(ambientLight);

// 主方向光 — 模拟太阳/主光源，产生阴影
const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
dirLight.position.set(5, 8, 5);
dirLight.castShadow = true;
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;
dirLight.shadow.camera.near = 0.5;
dirLight.shadow.camera.far = 50;
scene.add(dirLight);

// 点光源 — 局部高光，适合产品展示的"聚光灯"效果
const pointLight1 = new THREE.PointLight(0x7864ff, 2, 20);
pointLight1.position.set(-3, 3, 2);
scene.add(pointLight1);

const pointLight2 = new THREE.PointLight(0xff6480, 1.5, 15);
pointLight2.position.set(3, 1, -2);
scene.add(pointLight2);

// 半球光 — 天空/地面渐变，适合户外场景
const hemiLight = new THREE.HemisphereLight(0x8888cc, 0x222233, 0.6);
scene.add(hemiLight);
```

**光照搭配指南（motionsites.ai 风格）：**
- 深色背景 + 冷暖双色点光源（紫 + 粉红/橙）→ 科幻感（"Aetheris Voyage" 风格）
- 单方向光 + 微弱环境光 → 产品展示的干净感
- 多点光源 + 低环境光 → 戏剧化高对比

### 5.3 PBR 材质

```javascript
import { MeshStandardMaterial, MeshPhysicalMaterial } from 'three';

// 标准材质 — 适合大多数产品
const standardMat = new THREE.MeshStandardMaterial({
  color: 0x1a1a2e,
  metalness: 0.3,      // 0 = 绝缘体，1 = 完全金属
  roughness: 0.4,       // 0 = 镜面反射，1 = 完全漫反射
  envMapIntensity: 1.0,
});

// 物理材质 — 支持清漆、折射等高级特性
const glassMat = new MeshPhysicalMaterial({
  color: 0xffffff,
  metalness: 0.0,
  roughness: 0.05,
  transmission: 0.95,    // 透射率（玻璃效果）
  thickness: 0.5,        // 折射厚度
  ior: 1.5,              // 折射率
  clearcoat: 1.0,        // 清漆层
  clearcoatRoughness: 0.1,
  envMapIntensity: 1.5,
});

// Neumorphism 风格材质（对应 motionsites.ai 的 neumorphism 按钮）
const neuMat = new THREE.MeshStandardMaterial({
  color: 0x2a2a3e,
  metalness: 0.1,
  roughness: 0.8,
  normalScale: new THREE.Vector2(0.5, 0.5),
});
```

### 5.4 React Three Fiber 代码示例

```jsx
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';
import { useRef } from 'react';

function ProductModel() {
  const meshRef = useRef();

  useFrame((state) => {
    // 缓慢自动旋转 + 微浮动
    meshRef.current.rotation.y += 0.005;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
  });

  return (
    <mesh ref={meshRef} castShadow>
      <boxGeometry args={[2, 2, 2]} />
      <meshPhysicalMaterial
        color="#1a1a2e"
        metalness={0.3}
        roughness={0.2}
        clearcoat={1}
        clearcoatRoughness={0.1}
      />
    </mesh>
  );
}

function Scene() {
  return (
    <Canvas
      camera={{ position: [0, 2, 6], fov: 45 }}
      shadows
      dpr={[1, 2]}              // 限制 DPR 范围
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
        toneMappingExposure: 1.2,
      }}
    >
      {/* 环境光照 */}
      <Environment preset="night" />

      {/* 灯光 */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <pointLight position={[-3, 3, 2]} color="#7864ff" intensity={2} />

      {/* 模型 */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <ProductModel />
      </Float>

      {/* 交互控制 */}
      <OrbitControls
        enableDamping
        dampingFactor={0.05}
        minDistance={3}
        maxDistance={15}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
}

// 使用
export default function Page() {
  return (
    <div style={{ width: '100%', height: '100vh', background: '#0a0a0f' }}>
      <Scene />
    </div>
  );
}
```

---

## 六、3D 产品展示页

3D 产品展示是 motionsites.ai "3D Collectible Hero" 模板的核心场景。涵盖模型加载、旋转交互、材质切换和环境光照。

### 6.1 模型加载（glTF / GLB）

```jsx
import { useGLTF } from '@react-three/drei';

function ProductShowcase() {
  const { scene, materials } = useGLTF('/models/product.glb');

  // 遍历所有网格，开启阴影
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <primitive object={scene} scale={1.5} />;
}

// 预加载模型
useGLTF.preload('/models/product.glb');
```

**模型格式选择：**
- `.glb`（二进制 glTF）：推荐，体积小，单文件
- `.gltf`（JSON glTF）：可读性好，但需要额外管理纹理文件

### 6.2 自动旋转 + 用户交互

```jsx
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function InteractiveModel() {
  const controlsRef = useRef();
  const groupRef = useRef();
  const isUserInteracting = useRef(false);

  useFrame((state) => {
    // 仅在用户未交互时自动旋转
    if (!isUserInteracting.current && groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <>
      <group ref={groupRef}>
        <ProductShowcase />
      </group>
      <OrbitControls
        ref={controlsRef}
        enableZoom={true}
        enablePan={false}
        minPolarAngle={Math.PI / 6}    // 限制上下旋转范围
        maxPolarAngle={Math.PI / 2.5}
        onStart={() => { isUserInteracting.current = true; }}
        onEnd={() => {
          // 延迟恢复自动旋转，避免立即抢夺控制权
          setTimeout(() => { isUserInteracting.current = false; }, 3000);
        }}
      />
    </>
  );
}
```

### 6.3 环境贴图 HDRI

HDRI 环境贴图提供真实的环境反射，对金属和玻璃材质尤其重要。

```jsx
import { Environment } from '@react-three/drei';

// 方式一：使用预设（快速原型）
<Environment preset="city" />       // 城市
<Environment preset="studio" />     // 摄影棚（产品展示首选）
<Environment preset="night" />      // 夜景（motionsites.ai 科幻风格）
<Environment preset="sunset" />     // 日落

// 方式二：加载自定义 HDRI
<Environment files="/hdri/studio.hdr" background={false} />

// 方式三：加载压缩的 HDR 文件（推荐生产环境）
<Environment
  files="/hdri/studio.hdr"
  background={false}
  environmentIntensity={0.8}  // 调整环境光强度
/>
```

**HDRI 推荐资源：**
- Poly Haven（免费 CC0）：https://polyhaven.com/hdris
- HDRI Haven：高质量免费 HDR

### 6.4 性能优化 — LOD（Level of Detail）

```jsx
import { LOD } from 'three';

function ProductWithLOD() {
  const lod = useRef();

  useEffect(() => {
    const lodObj = lod.current;

    // 高精度模型（近距离）
    const high = useGLTF('/models/product_high.glb').scene.clone();
    // 中精度模型（中距离）
    const mid = useGLTF('/models/product_mid.glb').scene.clone();
    // 低精度模型（远距离）
    const low = useGLTF('/models/product_low.glb').scene.clone();

    lodObj.addLevel(high, 0);    // 0-5 单位
    lodObj.addLevel(mid, 5);     // 5-15 单位
    lodObj.addLevel(low, 15);    // 15+ 单位
  }, []);

  return <lod ref={lod} />;
}
```

**产品展示页性能清单：**
- 模型面数控制在 50K 三角面以内（手机端 < 20K）
- 纹理使用 KTX2 压缩格式（体积减少 60-80%）
- 使用 `draco` 几何压缩
- 启用 `frustumCulled`（默认开启）剔除屏幕外对象
- 阴影贴图不超过 1024x1024（移动端 512x512）

---

## 七、Spline 3D 集成

Spline（splin.design）是低门槛的 3D 场景编辑器，可直接在浏览器中创建 3D 场景并嵌入网页，适合不需要写 Shader 的团队。

### 7.1 Spline 场景创建流程

1. 在 spline.design 中创建场景
2. 添加 3D 对象、材质、动画、交互事件
3. 点击 "Export" → "Public Link" 获取分享 URL
4. 或下载 `.splinecode` 文件进行本地嵌入

### 7.2 iframe 嵌入（最简方案）

```html
<iframe
  src="https://my.spline.design/your-scene-id/"
  frameborder="0"
  width="100%"
  height="600"
  style="border: none;"
  loading="lazy"
></iframe>
```

**优点：** 零代码，即插即用
**缺点：** 无法与页面 JS 交互，SEO 不友好，加载较慢

### 7.3 @splinetool/react-spline 嵌入（推荐）

```bash
npm install @splinetool/react-spline @splinetool/runtime
```

```jsx
import Spline from '@splinetool/react-spline';

function HeroSection() {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Spline scene="https://prod.spline.design/your-scene-id/scene.splinecode" />
    </div>
  );
}
```

### 7.4 事件绑定

```jsx
import Spline from '@splinetool/react-spline';
import { useState } from 'react';

function InteractiveSpline() {
  const [isLoading, setIsLoading] = useState(true);

  function onLoad(spline) {
    // 场景加载完成
    setIsLoading(false);

    // 获取场景中的对象
    const obj = spline.findObjectByName('Button');

    // 监听鼠标事件
    if (obj) {
      // 鼠标悬停
      obj.addEventListener('mouseHover', (e) => {
        console.log('Hovered:', e.target.name);
      });

      // 鼠标点击
      obj.addEventListener('mouseDown', (e) => {
        console.log('Clicked:', e.target.name);
        // 触发页面导航等操作
        window.location.href = '/products';
      });
    }
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      {isLoading && (
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
        }}>
          Loading 3D Scene...
        </div>
      )}
      <Spline
        scene="https://prod.spline.design/your-scene-id/scene.splinecode"
        onLoad={onLoad}
      />
    </div>
  );
}
```

### 7.5 性能注意事项

| 注意事项 | 说明 |
|---------|------|
| 懒加载 | Spline 场景较大（通常 1-10MB），使用 `loading="lazy"` 或动态 import |
| 限制场景复杂度 | 单场景对象数 < 100，材质避免复杂 Shader |
| 移动端降级 | 检测 `navigator.hardwareConcurrency` 或屏幕宽度，低端设备显示静态图 |
| 预加载 | 使用 `<link rel="preload">` 预加载 `.splinecode` 文件 |
| 缓存 | Spline CDN 默认缓存，但自定义域名需配置 Cache-Control |

```jsx
// 移动端降级示例
import { useState, useEffect } from 'react';

function SplineWithFallback() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768 || navigator.hardwareConcurrency < 4);
  }, []);

  if (isMobile) {
    return <img src="/images/hero-fallback.webp" alt="Hero" className="w-full h-screen object-cover" />;
  }

  return <Spline scene="https://prod.spline.design/your-scene-id/scene.splinecode" />;
}
```

---

## 八、粒子系统

粒子系统用于创建星空、光点、烟尘等氛围效果，是 motionsites.ai "Aetheris Voyage" 风格的重要组成。

### 8.1 Three.js Points + BufferGeometry（标准方案）

```javascript
import * as THREE from 'three';

function createParticles(count = 2000) {
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const sizes = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    // 随机位置（球形分布）
    const radius = 10 + Math.random() * 20;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);

    // 颜色：紫色到蓝色渐变
    const t = Math.random();
    colors[i * 3] = 0.47 + t * 0.2;       // R
    colors[i * 3 + 1] = 0.39 * (1 - t);   // G
    colors[i * 3 + 2] = 1.0;               // B

    sizes[i] = Math.random() * 3 + 1;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('aColor', new THREE.BufferAttribute(colors, 3));
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));

  return geometry;
}

const particleGeometry = createParticles(3000);
const particleMaterial = new THREE.PointsMaterial({
  size: 0.05,
  vertexColors: true,
  transparent: true,
  opacity: 0.6,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
  sizeAttenuation: true,  // 近大远小
});

const particles = new THREE.Points(particleGeometry, particleMaterial);
scene.add(particles);

// 动画：缓慢旋转
function animate() {
  particles.rotation.y += 0.0003;
  particles.rotation.x += 0.0001;
}
```

### 8.2 自定义着色器粒子（高级方案）

```javascript
const vertexShader = `
  attribute float aSize;
  attribute vec3 aColor;
  varying vec3 vColor;
  uniform float uTime;

  void main() {
    vColor = aColor;
    vec3 pos = position;

    // 正弦波浮动
    pos.y += sin(uTime * 0.5 + position.x * 0.5) * 0.3;
    pos.x += cos(uTime * 0.3 + position.z * 0.5) * 0.2;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = aSize * (200.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fragmentShader = `
  varying vec3 vColor;

  void main() {
    // 圆形粒子（丢弃正方形角落）
    float dist = length(gl_PointCoord - vec2(0.5));
    if (dist > 0.5) discard;

    // 中心亮，边缘柔和衰减
    float alpha = 1.0 - smoothstep(0.0, 0.5, dist);
    gl_FragColor = vec4(vColor, alpha * 0.6);
  }
`;

const shaderMaterial = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    uTime: { value: 0 },
  },
  transparent: true,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
});

// 在动画循环中更新 uniform
function animate(time) {
  shaderMaterial.uniforms.uTime.value = time * 0.001;
}
```

### 8.3 Canvas 2D 轻量方案

当不需要真正的 3D 空间时，Canvas 2D 可以实现高性能的粒子效果，适合 motionsites.ai 风格的背景氛围。

```javascript
class ParticleSystem2D {
  constructor(canvas, count = 150) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: -1000, y: -1000 };

    this.resize();
    this.init(count);
    this.bindEvents();
    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  init(count) {
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
  }

  bindEvents() {
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
  }

  animate() {
    const { ctx, canvas, particles, mouse } = this;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p) => {
      // 鼠标排斥
      const dx = p.x - mouse.x;
      const dy = p.y - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        const force = (120 - dist) / 120;
        p.vx += (dx / dist) * force * 0.2;
        p.vy += (dy / dist) * force * 0.2;
      }

      // 速度衰减
      p.vx *= 0.99;
      p.vy *= 0.99;

      p.x += p.vx;
      p.y += p.vy;

      // 边界循环
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      // 绘制
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(120, 100, 255, ${p.opacity})`;
      ctx.fill();
    });

    // 绘制粒子间连线
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 100) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(120, 100, 255, ${0.08 * (1 - dist / 100)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

// 使用
const system = new ParticleSystem2D(document.getElementById('particle-canvas'), 150);
```

**方案选择指南：**

| 方案 | 粒子数上限 | 3D 空间 | 交互复杂度 | 适用场景 |
|------|-----------|---------|-----------|---------|
| Canvas 2D | ~500 | 否 | 低 | 背景氛围、鼠标互动 |
| Three.js Points | ~50K | 是 | 中 | 星空、大型粒子场 |
| Shader 粒子 | ~100K+ | 是 | 高 | 高端视觉、大量粒子 |

---

## 九、3D 动画性能优化

### 9.1 GPU 实例化（InstancedMesh）

当场景中有大量相同几何体的对象（如产品阵列、粒子替代物）时，使用 `InstancedMesh` 将 draw call 从 N 降为 1。

```javascript
import * as THREE from 'three';

const count = 500;
const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
const material = new THREE.MeshStandardMaterial({ color: 0x7864ff });

const instancedMesh = new THREE.InstancedMesh(geometry, material, count);
instancedMesh.castShadow = true;
instancedMesh.receiveShadow = true;

const dummy = new THREE.Object3D();

for (let i = 0; i < count; i++) {
  dummy.position.set(
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20
  );
  dummy.rotation.set(
    Math.random() * Math.PI,
    Math.random() * Math.PI,
    0
  );
  dummy.updateMatrix();
  instancedMesh.setMatrixAt(i, dummy.matrix);
}

instancedMesh.instanceMatrix.needsUpdate = true;
scene.add(instancedMesh);
```

**性能提升：** 500 个独立 Mesh = 500 draw calls；`InstancedMesh` = 1 draw call。帧率可从 15fps 提升到 60fps。

### 9.2 纹理压缩

```javascript
import { KTX2Loader } from 'three/addons/loaders/KTX2Loader';
import { MeshoptDecoder } from 'three/addons/libs/meshopt_decoder.module.js';

const ktx2Loader = new KTX2Loader();
ktx2Loader.setTranscoderPath('/basis/');
ktx2Loader.detectSupport(renderer);
ktx2Loader.setDecoderOptions({
  format: THREE.KTX2Loader.BC7_SRGB, // 桌面端
});

// 加载压缩纹理
const texture = await ktx2Loader.loadAsync('/textures/metal_bc7.ktx2');
```

**格式对比：**

| 格式 | 压缩率 | 质量 | 兼容性 | 推荐场景 |
|------|-------|------|-------|---------|
| PNG/JPG | 1x | 高 | 全部 | 原始素材 |
| KTX2 (BC7) | 4-6x | 高 | 桌面 GPU | 桌面端产品展示 |
| KTX2 (ASTC) | 4-6x | 高 | 移动 GPU | 移动端 |
| WebP | 2-3x | 中 | 全部 | 2D UI 纹理 |
| Basis Universal | 4-8x | 中 | 全部 | 通用跨平台 |

### 9.3 按需加载

```jsx
import { lazy, Suspense } from 'react';

// 懒加载 3D 组件 — 仅在滚动到视口时加载
const Scene3D = lazy(() => import('./Scene3D'));

function ProductPage() {
  return (
    <div>
      <h1>Product</h1>
      <p>Description...</p>

      <Suspense fallback={
        <div style={{
          width: '100%',
          height: '500px',
          background: 'linear-gradient(135deg, #0f0f0f, #1a1a2e)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#555',
        }}>
          Loading 3D...
        </div>
      }>
        <Scene3D />
      </Suspense>
    </div>
  );
}
```

### 9.4 移动端降级策略

```javascript
// 设备能力检测
function getDeviceTier() {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
  if (!gl) return 'low'; // 不支持 WebGL

  const renderer = gl.getParameter(gl.RENDERER);
  const maxTextureSize = gl.getParameter(gl.MAX_TEXTURE_SIZE);
  const isMobile = /Mobi|Android/i.test(navigator.userAgent);

  if (isMobile || maxTextureSize < 4096) return 'medium';
  return 'high';
}

const tier = getDeviceTier();

const config = {
  high: {
    pixelRatio: Math.min(window.devicePixelRatio, 2),
    shadowMapSize: 2048,
    particleCount: 5000,
    antialias: true,
    modelDetail: 'high',
  },
  medium: {
    pixelRatio: 1,
    shadowMapSize: 1024,
    particleCount: 1000,
    antialias: false,
    modelDetail: 'low',
  },
  low: {
    pixelRatio: 1,
    shadowMapSize: 512,
    particleCount: 0,       // 禁用粒子
    antialias: false,
    modelDetail: 'low',
    fallback: true,          // 使用静态图片替代
  },
};
```

### 9.5 FPS 监控

```javascript
class FPSMonitor {
  constructor() {
    this.frames = 0;
    this.lastTime = performance.now();
    this.fps = 60;
    this.threshold = 30; // 低于此帧率触发降级

    this.monitor();
  }

  monitor() {
    this.frames++;
    const now = performance.now();

    if (now - this.lastTime >= 1000) {
      this.fps = this.frames;
      this.frames = 0;
      this.lastTime = now;

      if (this.fps < this.threshold) {
        this.onDegrade?.(this.fps);
      }

      console.log(`FPS: ${this.fps}`);
    }

    requestAnimationFrame(() => this.monitor());
  }

  onDegrade(callback) {
    this._onDegrade = callback;
  }
}

// 使用：当 FPS 过低时自动降低质量
const monitor = new FPSMonitor();
monitor.onDegrade((fps) => {
  console.warn(`Low FPS detected: ${fps}, reducing quality`);
  renderer.setPixelRatio(1);
  particleSystem.visible = false;
  shadowLight.castShadow = false;
});
```

---

## 十、AI 审美规则摘要

以下规则可直接作为 3D 动画设计的约束条件：

**CSS 3D 层**
1. `perspective` 值必须在 400px–1500px 之间，超出此范围会导致视觉畸变或透视感缺失
2. `transform-style: preserve-3d` 不得与 `overflow: hidden` 共存于同一元素
3. 卡片 hover 浮起高度统一为 `translateY(-4px)`，配合 `box-shadow` 扩大
4. Neumorphism 按钮必须使用 `linear-gradient(to top, dark, light)` + `border-top: 2px solid rgba(255,255,255,0.25)`
5. 多层文字效果不超过 3 层（发光层 + 模糊层 + 主体层），避免性能下降
6. `mix-blend-mode: screen` 仅用于发光/氛围层，不得用于正文内容
7. 所有 3D 变换动画使用 `cubic-bezier(0.23, 1, 0.32, 1)` 缓动函数

**Three.js / WebGL 层**
8. 产品展示 FOV 固定为 45°，场景浏览 FOV 固定为 60°
9. 渲染器 `pixelRatio` 上限为 2，防止高 DPR 设备性能崩溃
10. 阴影贴图桌面端不超过 2048x2048，移动端不超过 1024x1024
11. 场景对象数超过 100 时必须使用 `InstancedMesh`
12. 纹理必须使用 KTX2 压缩格式，禁止使用未压缩 PNG 作为 3D 纹理

**Spline 层**
13. Spline 场景文件大小不超过 5MB
14. 必须提供 2D 静态图作为移动端/低端设备的降级方案
15. Spline 嵌入必须使用 `@splinetool/react-spline`，禁止使用 iframe（除非无法使用 React）

**粒子系统层**
16. Canvas 2D 粒子数量上限 500，Three.js Points 上限 50K，Shader 粒子上限 100K
17. 粒子必须使用 `AdditiveBlending`（加法混合）和 `depthWrite: false`
18. 粒子颜色不得使用纯白 `#ffffff`，应使用低饱和度品牌色（如 `rgba(120, 100, 255, 0.6)`）

**性能层**
19. 所有 3D 场景必须实现 FPS 监控，低于 30fps 时自动降级
20. 3D 组件必须使用 `React.lazy` + `Suspense` 懒加载
21. 移动端（屏幕宽度 < 768px 或 `hardwareConcurrency` < 4）必须降低粒子数、关闭抗锯齿、缩小阴影贴图