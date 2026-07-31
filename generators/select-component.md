# Component Selection Generator

> 根据行业和业务目标选择合适的组件，确保设计差异化和业务有效性

---

## 一、核心原则

### 1.1 组件选择优先级

| 优先级 | 因素 | 说明 |
|--------|------|------|
| P0 | 行业规范 | 必须遵守行业专属组件规则 |
| P1 | 业务目标 | 组件需服务于转化目标 |
| P2 | 用户体验 | 组件需符合用户预期 |
| P3 | 设计差异化 | 避免通用化组件过度使用 |

### 1.2 禁止事项

- 禁止跨行业混用组件（如医疗网站使用科技风格的粒子背景）
- 禁止所有页面使用相同的组件组合
- 禁止使用与业务目标无关的装饰性组件

---

## 二、行业组件映射

### 2.1 科技行业（Technology）

**业务目标**：Lead Generation（获客）、Brand Awareness（品牌认知）

**推荐组件**：

| 组件 | 优先级 | 用途 | 设计要求 |
|------|--------|------|---------|
| AnimatedHero | P0 | 首屏展示 | 居中布局、深色背景、产品 Demo |
| SocialProof | P0 | 建立信任 | Logo 墙、数据指标 |
| FeatureCard | P1 | 功能展示 | 3-4 列、图标 + 标题 + 描述 |
| Workflow | P1 | 流程说明 | 3-5 步、可视化流程图 |
| ProductDemo | P1 | 产品演示 | Dashboard 截图、交互演示 |
| PricingCard | P2 | 价格方案 | 3 档定价、对比表格 |
| FAQ | P2 | 常见问题 | 手风琴式、5-8 个问题 |

**禁止组件**：
- ParticleBackground（除非是复杂级别）
- FloatingCard（除非是产品展示）
- GradientBackground（过度使用）

### 2.2 医疗行业（Medical）

**业务目标**：Appointment Booking（预约）、Trust Building（信任建立）

**推荐组件**：

| 组件 | 优先级 | 用途 | 设计要求 |
|------|--------|------|---------|
| SplitHero | P0 | 首屏展示 | 左右分屏、医生图片、预约 CTA |
| TrustBadge | P0 | 建立信任 | 认证标志、资质展示 |
| ServiceCard | P1 | 服务展示 | 2-3 列、图标 + 服务名称 + 价格 |
| DoctorCard | P1 | 医生团队 | 横向滚动、头像 + 姓名 + 专长 |
| TestimonialCard | P1 | 患者评价 | 居中展示、评分 + 评语 |
| AppointmentButton | P2 | 预约入口 | 全圆角、品牌色、醒目位置 |
| FAQ | P2 | 常见问题 | 手风琴式、医疗相关问题 |

**禁止组件**：
- ParticleBackground
- FloatingCard
- GradientBackground
- MagneticButton
- PricingCard（医疗服务不适合定价卡片）

### 2.3 电商行业（Ecommerce）

**业务目标**：Purchase Conversion（购买转化）、User Acquisition（用户获取）

**推荐组件**：

| 组件 | 优先级 | 用途 | 设计要求 |
|------|--------|------|---------|
| SplitHero | P0 | 首屏展示 | 产品大图 + 促销信息 |
| ProductCard | P0 | 产品展示 | 网格布局、图片 + 价格 + 评分 |
| Benefits | P1 | 购物保障 | 水平排列、图标 + 文字 |
| ReviewCard | P1 | 用户评价 | 横向滚动、星级 + 评语 |
| BestSellers | P1 | 热销产品 | 横向滚动、热销标签 |
| CTABanner | P2 | 促销活动 | 全屏横幅、限时优惠 |
| Newsletter | P2 | 用户订阅 | 邮箱输入 + 订阅按钮 |

**禁止组件**：
- ParticleBackground
- GradientBackground（产品区）
- PricingCard（电商使用产品卡片）

### 2.4 跨境行业（Cross-Border）

**业务目标**：Brand Awareness（品牌认知）、Global Sales（全球销售）

**推荐组件**：

| 组件 | 优先级 | 用途 | 设计要求 |
|------|--------|------|---------|
| VideoHero | P0 | 首屏展示 | 全屏视频、品牌故事 |
| BrandStory | P0 | 品牌叙事 | 图文交替、情感文案 |
| ProductGallery | P1 | 产品展示 | Lookbook 风格、场景图片 |
| Lifestyle | P1 | 生活方式 | 全屏图片、用户场景 |
| ReviewCard | P1 | 用户评价 | UGC 内容、真实图片 |
| ShippingInfo | P2 | 配送信息 | 图标 + 全球配送范围 |
| Newsletter | P2 | 用户订阅 | 品牌风格、订阅激励 |

**禁止组件**：
- ParticleBackground
- FloatingCard
- PricingCard
- MagneticButton

---

## 三、组件组合规则

### 3.1 页面组件数量

| 复杂度 | 组件数量 | 说明 |
|--------|---------|------|
| Simple | 4-6 | 核心组件，简洁明了 |
| Standard | 6-10 | 完整功能，适度丰富 |
| Complex | 10+ | 全面功能，深度体验 |

### 3.2 组件重复规则

- 同一组件类型在一个页面中最多出现 2 次（如两个不同区域的 CTA）
- 卡片类型组件最多使用 3 种不同样式（避免视觉混乱）
- 动效类型最多使用 2 种（入场动效 + 交互动效）

### 3.3 组件层级规则

**首屏组件**：
- 必须包含：Hero + CTA
- 可选：SocialProof（信任背书）

**核心内容区**：
- 必须包含：核心价值展示组件（Features/ServiceCard/ProductCard）
- 可选：Workflow/ProductDemo

**转化区**：
- 必须包含：CTA（转化入口）
- 可选：Testimonial/ReviewCard（社会证明）

**底部区**：
- 必须包含：Footer
- 可选：FAQ/Newsletter

---

## 四、反 AI 风格检查

### 4.1 组件同质化检查

| 检查项 | AI 风格特征 | 优化方案 |
|--------|-----------|---------|
| 卡片样式 | 所有卡片相同圆角、相同 hover | 根据卡片类型使用不同样式 |
| 动效类型 | 所有元素使用 fadeInUp | 动效多样化（TextReveal、Scale、Slide） |
| 组件组合 | Navbar → Hero → Features → Workflow → Pricing → FAQ → Footer | 根据行业调整组合顺序 |
| 按钮样式 | 所有按钮相同样式 | 建立按钮层级（主 CTA、次 CTA、辅助按钮） |

### 4.2 行业差异化检查

| 检查项 | 通过标准 |
|--------|---------|
| 医疗网站 | 使用 TrustBadge、DoctorCard，不使用深色背景 |
| 电商网站 | 使用 ProductCard、Benefits，产品图片为主导 |
| 跨境网站 | 使用 BrandStory、Lifestyle，全屏视觉为主 |
| 科技网站 | 使用 AnimatedHero、ProductDemo，深色背景可选 |

---

## 五、输出格式

### 5.1 组件选择结果

```json
{
  "industry": "technology",
  "business_goal": "lead_generation",
  "complexity": "standard",
  "components": [
    {
      "name": "AnimatedHero",
      "position": "hero",
      "priority": "P0",
      "variant": "dark-theme",
      "config": {
        "layout": "center",
        "animation": "text-reveal",
        "background": "gradient"
      }
    },
    {
      "name": "SocialProof",
      "position": "social-proof",
      "priority": "P0",
      "config": {
        "type": "logo-wall",
        "items": 6
      }
    },
    {
      "name": "FeatureCard",
      "position": "features",
      "priority": "P1",
      "config": {
        "columns": 3,
        "items": 6
      }
    }
  ]
}
```

### 5.2 组件清单

| 组件名称 | 位置 | 优先级 | 变体 | 配置 |
|---------|------|--------|------|------|
| AnimatedHero | hero | P0 | dark-theme | layout: center |
| SocialProof | social-proof | P0 | - | type: logo-wall |
| FeatureCard | features | P1 | - | columns: 3 |

---

> **文档版本**：v1.0
> **适用范围**：所有行业官网组件选择