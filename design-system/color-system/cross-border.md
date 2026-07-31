# 跨境独立站/DTC品牌官网色彩搭配拆解

> 基于 Gymshark、Nothing、Allbirds、Glossier、SHEIN、Anker 等跨境品牌的真实色值拆解。

---

## 一、行业色彩特征总览

跨境独立站/DTC（Direct-to-Consumer）品牌的官网配色与国内电商有着本质区别。核心差异在于：**品牌辨识度高于一切**——在海外市场，消费者面对的选择远比国内丰富，一个没有色彩记忆点的网站很难被记住。

### 跨境独立站配色的四大核心逻辑

| 核心逻辑 | 说明 |
|---------|------|
| **品牌辨识度** | 首屏必须在 3 秒内通过色彩传达品牌调性，色彩是品牌认知的第一触点 |
| **目标市场适配** | 不同市场对色彩的偏好差异极大，欧美偏极简暗色，东南亚偏明亮暖色 |
| **产品色驱动** | 产品本身颜色是页面色彩的一部分，页面配色不能抢产品风头 |
| **转化导向** | 色彩服务于转化路径——CTA 按钮色、促销色、信任色都需要经过精心设计 |

### 跨境 vs 国内配色对比

| 维度 | 跨境独立站 | 国内电商 |
|------|-----------|---------|
| 背景 | 大量纯黑/纯白/自然色 | 多为白色/浅灰 |
| 品牌色饱和度 | 偏低或极端两极化 | 中高饱和度为主 |
| 促销色使用 | 克制，仅用于关键 CTA | 频繁使用红色/橙色 |
| 字体颜色对比 | 极端对比（黑底白字或白底深色字） | 中等对比 |
| 整体色调 | 统一感强，色数控制在 3-5 个 | 色数多，信息密度高 |

### 60-30-10 法则在独立站中的落地

- **60% 主色调**：背景色、大面积留白区域，通常为白色、黑色或中性色
- **30% 辅助色**：卡片、模块背景、次要区域，为主色的变体或相近色
- **10% 强调色**：品牌主色、CTA 按钮、关键信息，用于引导用户注意力

---

## 二、国际 DTC 品牌配色拆解

### 2.1 Gymshark（暗色力量型）

**品牌定位**：运动健身服饰，面向全球年轻健身群体

**设计哲学**：Gymshark 采用全暗色方案，纯黑背景传递力量感和专业感。黑色在运动品类中暗示"硬核"和"专注"，与健身房环境高度契合。大面积黑色搭配少量白色文字和高对比度的 CTA，让用户的注意力集中在产品图片上。

#### 完整色板

| 色彩角色 | HEX | RGB | 用途 | CSS 变量建议 |
|---------|-----|-----|------|-------------|
| 主背景 | `#000000` | `rgb(0, 0, 0)` | 全站主背景色 | `--color-bg-primary` |
| 交替背景 | `#F5F5F5` | `rgb(245, 245, 245)` | 区块交替背景、卡片底色 | `--color-bg-secondary` |
| 主文字 | `#FFFFFF` | `rgb(255, 255, 255)` | 深色背景上的主文字 | `--color-text-primary` |
| 辅助文字 | `#999999` | `rgb(153, 153, 153)` | 次要信息、辅助说明 | `--color-text-secondary` |
| CTA 按钮 | `#FFFFFF` | `rgb(255, 255, 255)` | 主操作按钮（白底黑字反转） | `--color-cta-primary` |
| 边框/分割 | `#333333` | `rgb(51, 51, 51)` | 分割线、卡片边框 | `--color-border` |

#### CSS 变量定义

```css
:root {
  /* Gymshark Dark Power Theme */
  --color-bg-primary: #000000;
  --color-bg-secondary: #F5F5F5;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #999999;
  --color-text-dark: #000000;
  --color-cta-primary: #FFFFFF;
  --color-cta-hover: #E5E5E5;
  --color-border: #333333;
  --color-border-light: #1A1A1A;
}
```

#### 字体搭配

- **标题字体**：Montserrat Bold — 几何无衬线体，粗体传递力量感
- **正文字体**：Roboto — 高可读性，适合产品描述和详情页

#### 适用品类建议

- 运动服饰/健身器材
- 极限运动品牌
- 电竞/游戏外设
- 潮流街头品牌
- 功能性服饰（如户外机能风）

---

### 2.2 Nothing Phone（极简白色型）

**品牌定位**：科技消费电子，强调极简设计和透明美学

**设计哲学**：Nothing Phone 的官网是"少即是多"的极致实践。超浅灰背景 `#F5F5F5` 配合 font-weight:100 的超细字体，营造出一种"呼吸感"十足的空间。品牌使用三种自定义字体——NType82（品牌标题）、Ndot-Regular（正文）、LatteraMonoLL（等宽技术感），每种字体都有明确的角色分工。整体视觉传递出透明、轻盈、科技前卫的调性。

#### 完整色板

| 色彩角色 | HEX | RGB | 用途 | CSS 变量建议 |
|---------|-----|-----|------|-------------|
| 主背景 | `#F5F5F5` | `rgb(245, 245, 245)` | 全站背景 | `--color-bg-primary` |
| 纯白区域 | `#FFFFFF` | `rgb(255, 255, 255)` | 卡片、模态框、产品展示区 | `--color-bg-card` |
| 主文字 | `#1A1A1A` | `rgb(26, 26, 26)` | 标题和主要文字 | `--color-text-primary` |
| 次要文字 | `#6B7280` | `rgb(107, 114, 128)` | 描述文字、辅助信息 | `--color-text-secondary` |
| 品牌强调 | `#000000` | `rgb(0, 0, 0)` | 品牌标志、关键强调元素 | `--color-accent` |
| 灰色点缀 | `#D1D5DB` | `rgb(209, 213, 219)` | 图标、装饰线、阴影 | `--color-muted` |

#### CSS 变量定义

```css
:root {
  /* Nothing Minimalist Light Theme */
  --color-bg-primary: #F5F5F5;
  --color-bg-card: #FFFFFF;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #6B7280;
  --color-accent: #000000;
  --color-muted: #D1D5DB;
  --color-border: #E5E7EB;
  --color-highlight: #000000;

  /* Typography */
  --font-brand: 'NType82', sans-serif;
  --font-body: 'Ndot-Regular', sans-serif;
  --font-mono: 'LatteraMonoLL', monospace;
  --font-weight-ultra-light: 100;
}
```

#### 字体搭配

- **品牌标题**：NType82 — 品牌定制字体，几何感强
- **正文**：Ndot-Regular — 品牌定制字体，轻盈通透
- **技术参数**：LatteraMonoLL — 等宽字体，用于规格参数展示

#### 适用品类建议

- 消费电子/手机配件
- 智能家居产品
- 极简生活方式品牌
- 设计师品牌
- 科技初创品牌

---

### 2.3 Allbirds（自然可持续型）

**品牌定位**：环保休闲鞋服，强调可持续材料与舒适体验

**设计哲学**：Allbirds 的 `#ECE9E2` 天然米色背景是其最核心的视觉识别。这个色值不是简单的灰色或白色，而是带有温暖自然感的"羊皮纸色"，直接传达品牌"源自自然"的理念。配合 Geograph 无衬线体和 Self Modern 衬线体的搭配，形成了一种"自然但不粗糙，精致但不冷硬"的独特调性。

#### 完整色板

| 色彩角色 | HEX | RGB | 用途 | CSS 变量建议 |
|---------|-----|-----|------|-------------|
| 主背景 | `#ECE9E2` | `rgb(236, 233, 226)` | 全站背景，天然米色 | `--color-bg-primary` |
| 纯白区域 | `#FFFFFF` | `rgb(255, 255, 255)` | 产品卡片、信息区块 | `--color-bg-card` |
| 深色文字 | `#2D2D2D` | `rgb(45, 45, 45)` | 标题和主要文字 | `--color-text-primary` |
| 辅助文字 | `#6B6560` | `rgb(107, 101, 96)` | 描述文字、说明 | `--color-text-secondary` |
| 自然绿 | `#5C8A4D` | `rgb(92, 138, 77)` | 可持续标签、环保标识 | `--color-sustainability` |
| 大地棕 | `#8B7355` | `rgb(139, 115, 85)` | 辅助装饰、CTA 背景 | `--color-earth` |
| 暖白 | `#F5F2ED` | `rgb(245, 242, 237)` | 浅色区块、hover 状态 | `--color-bg-hover` |

#### CSS 变量定义

```css
:root {
  /* Allbirds Natural Sustainability Theme */
  --color-bg-primary: #ECE9E2;
  --color-bg-card: #FFFFFF;
  --color-bg-hover: #F5F2ED;
  --color-text-primary: #2D2D2D;
  --color-text-secondary: #6B6560;
  --color-sustainability: #5C8A4D;
  --color-earth: #8B7355;
  --color-cta-primary: #2D2D2D;
  --color-cta-text: #FFFFFF;
  --color-border: #D4CFC6;

  /* Typography */
  --font-heading: 'Geograph', sans-serif;
  --font-serif: 'Self Modern', serif;
}
```

#### 字体搭配

- **标题字体**：Geograph — 友好的无衬线几何体
- **引言/品牌故事**：Self Modern — 优雅衬线体，增加品牌温度

#### 适用品类建议

- 环保/可持续品牌
- 天然有机护肤
- 家居/寝具品牌
- 母婴产品
- 健康食品/保健品
- 手工/匠人品牌

---

### 2.4 Glossier（友好玩趣型）

**品牌定位**：美妆护肤，面向 Z 世代年轻女性

**设计哲学**：Glossier 的 `#E9B5B7` 是美妆行业最具辨识度的品牌色之一。这个柔和的粉色不是"少女粉"，而是一种"皮肤色的粉"——像是脸颊自然泛红的色调，传递"你的皮肤本来就很好"的品牌理念。粉色作为主背景大面积使用，搭配白色文字和极简排版，打破了美妆行业传统的"奢华金+黑色"套路。

#### 完整色板

| 色彩角色 | HEX | RGB | 用途 | CSS 变量建议 |
|---------|-----|-----|------|-------------|
| 主背景/品牌色 | `#E9B5B7` | `rgb(233, 181, 183)` | 全站主背景、品牌标识 | `--color-bg-primary` |
| 浅粉变体 | `#F2DDE0` | `rgb(242, 221, 224)` | 交替区块、卡片背景 | `--color-bg-secondary` |
| 白色区域 | `#FFFFFF` | `rgb(255, 255, 255)` | 产品展示区、模态框 | `--color-bg-card` |
| 深色文字 | `#2D2D2D` | `rgb(45, 45, 45)` | 标题和主要文字 | `--color-text-primary` |
| 白色文字 | `#FFFFFF` | `rgb(255, 255, 255)` | 粉色背景上的文字 | `--color-text-on-brand` |
| CTA 按钮 | `#2D2D2D` | `rgb(45, 45, 45)` | 深色 CTA（在粉色背景上） | `--color-cta-primary` |
| 柔和粉 | `#D4A0A3` | `rgb(212, 160, 163)` | 边框、装饰元素 | `--color-border` |

#### CSS 变量定义

```css
:root {
  /* Glossier Friendly Playful Theme */
  --color-bg-primary: #E9B5B7;
  --color-bg-secondary: #F2DDE0;
  --color-bg-card: #FFFFFF;
  --color-text-primary: #2D2D2D;
  --color-text-on-brand: #FFFFFF;
  --color-text-secondary: #5C4A4C;
  --color-cta-primary: #2D2D2D;
  --color-cta-hover: #1A1A1A;
  --color-border: #D4A0A3;
  --color-accent-light: #F7ECE9;
}
```

#### 字体搭配

- **标题字体**：自定义无衬线体（Glossier 独家字体）— 圆润友好
- **正文字体**：系统无衬线字体栈 — 高可读性

#### 适用品类建议

- 美妆/护肤品牌
- 女性时尚品牌
- 少女/年轻女性产品
- 情侣/婚礼相关品牌
- 宠物用品（友好调性）
- 母婴品牌（温暖调性）

---

### 2.5 Patagonia（户外自然型）

**品牌定位**：高端户外装备，环保主义先锋品牌

**设计哲学**：Patagonia 的色彩体系直接来源于自然——深蓝（海洋）、森林绿（森林）、大地棕（土地）、岩石灰（山脉）。品牌不使用任何"人造感"的高饱和度色彩，每一个色值都像是从户外风景中提取的。官网以白色为底，大量使用自然摄影图片作为色彩载体，文字和 UI 元素保持在最低限度，让"自然"本身成为主角。

#### 完整色板

| 色彩角色 | HEX | RGB | 用途 | CSS 变量建议 |
|---------|-----|-----|------|-------------|
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | 全站主背景 | `--color-bg-primary` |
| 自然白 | `#FAFAF7` | `rgb(250, 250, 247)` | 微暖白色，交替区块 | `--color-bg-secondary` |
| 主文字 | `#1B1B1B` | `rgb(27, 27, 27)` | 标题和主要文字 | `--color-text-primary` |
| 海洋蓝 | `#1B4B6B` | `rgb(27, 75, 107)` | 链接、强调元素 | `--color-ocean` |
| 森林绿 | `#2D5F3E` | `rgb(45, 95, 62)` | 环保标识、可持续标签 | `--color-forest` |
| 大地棕 | `#8B6F47` | `rgb(139, 111, 71)` | 辅助装饰 | `--color-earth` |
| 岩石灰 | `#6B6B6B` | `rgb(107, 107, 107)` | 辅助文字 | `--color-rock` |
| CTA 按钮 | `#1B4B6B` | `rgb(27, 75, 107)` | 主操作按钮 | `--color-cta-primary` |

#### CSS 变量定义

```css
:root {
  /* Patagonia Outdoor Nature Theme */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #FAFAF7;
  --color-text-primary: #1B1B1B;
  --color-text-secondary: #6B6B6B;
  --color-ocean: #1B4B6B;
  --color-forest: #2D5F3E;
  --color-earth: #8B6F47;
  --color-rock: #6B6B6B;
  --color-cta-primary: #1B4B6B;
  --color-cta-hover: #153A54;
  --color-border: #E0DDD6;
}
```

#### 字体搭配

- **标题字体**：粗衬线体 — 传递经典户外感
- **正文字体**：无衬线体 — 高可读性，适合产品信息

#### 适用品类建议

- 户外运动装备
- 冲浪/滑雪品牌
- 旅行用品
- 环保品牌（任何品类）
- 有机食品
- 营地/露营装备

---

### 2.6 Fenty Beauty（多元大胆型）

**品牌定位**：高端美妆，强调包容性和多元肤色

**设计哲学**：Fenty Beauty 的色彩策略是"多色并存但不杂乱"。品牌主色为深棕色 `#3D2B1F`，象征多元肤色的包容。但官网大胆使用多种色彩——裸色、粉色、紫色、橙色——每种色彩都对应一个产品线或肤色调。整体设计在"大胆"和"精致"之间取得平衡，大量留白让多彩元素有呼吸空间。

#### 完整色板

| 色彩角色 | HEX | RGB | 用途 | CSS 变量建议 |
|---------|-----|-----|------|-------------|
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | 全站主背景 | `--color-bg-primary` |
| 品牌深棕 | `#3D2B1F` | `rgb(61, 43, 31)` | 品牌标识、标题 | `--color-brand-dark` |
| 裸色系 | `#D4A574` | `rgb(212, 165, 116)` | 辅助背景、产品区域 | `--color-nude` |
| 玫瑰粉 | `#C77B8B` | `rgb(199, 123, 139)` | 唇部产品关联区 | `--color-rose` |
| 梅子紫 | `#8B5E83` | `rgb(139, 94, 131)` | 眼影产品关联区 | `--color-plum` |
| 暖橙 | `#D4845A` | `rgb(212, 132, 90)` | 腮红产品关联区 | `--color-warm` |
| 深色文字 | `#1A1A1A` | `rgb(26, 26, 26)` | 正文文字 | `--color-text-primary` |
| CTA 按钮 | `#3D2B1F` | `rgb(61, 43, 31)` | 主操作按钮 | `--color-cta-primary` |

#### CSS 变量定义

```css
:root {
  /* Fenty Beauty Bold Inclusive Theme */
  --color-bg-primary: #FFFFFF;
  --color-brand-dark: #3D2B1F;
  --color-nude: #D4A574;
  --color-rose: #C77B8B;
  --color-plum: #8B5E83;
  --color-warm: #D4845A;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #6B6B6B;
  --color-cta-primary: #3D2B1F;
  --color-cta-hover: #2A1D14;
  --color-border: #E5DDD5;
}
```

#### 字体搭配

- **品牌标题**：粗衬线体 — 传递高端感与经典美
- **正文/产品名**：无衬线体 — 清晰现代

#### 适用品类建议

- 高端美妆/彩妆
- 多元文化品牌
- 时尚品牌（强调包容性）
- 多肤色适配产品
- 创意/艺术类品牌

---

## 三、中国跨境品牌配色拆解

中国跨境品牌在配色上呈现出两大趋势：一是品牌色极高辨识度（因为需要快速建立海外认知），二是色彩选择与中国供应链优势品类高度关联。

### 3.1 SHEIN（黑红极简型）

| 色彩角色 | HEX | RGB | 用途 | CSS 变量建议 |
|---------|-----|-----|------|-------------|
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | 全站主背景 | `--color-bg-primary` |
| 品牌黑 | `#000000` | `rgb(0, 0, 0)` | Logo、导航栏、主文字 | `--color-brand-black` |
| 品牌红 | `#E53935` | `rgb(229, 57, 53)` | 促销标识、CTA、品牌强调 | `--color-brand-red` |
| 次要文字 | `#666666` | `rgb(102, 102, 102)` | 辅助说明文字 | `--color-text-secondary` |
| 浅灰背景 | `#F5F5F5` | `rgb(245, 245, 245)` | 交替区块 | `--color-bg-secondary` |

```css
:root {
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F5F5F5;
  --color-brand-black: #000000;
  --color-brand-red: #E53935;
  --color-text-primary: #000000;
  --color-text-secondary: #666666;
  --color-cta-primary: #E53935;
  --color-cta-hover: #C62828;
  --color-border: #E5E5E5;
}
```

**设计要点**：黑白为基底，红色仅用于关键转化触点——购物车、促销标签、限时折扣。整体克制但品牌色冲击力强。

**适用品类**：快时尚、服装、配饰、低价走量型电商。

---

### 3.2 Temu（橙黄活力型）

| 色彩角色 | HEX | RGB | 用途 | CSS 变量建议 |
|---------|-----|-----|------|-------------|
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | 全站主背景 | `--color-bg-primary` |
| 品牌橙黄 | `#FB8915` | `rgb(251, 137, 21)` | Logo、主 CTA、促销标识 | `--color-brand-orange` |
| 深橙变体 | `#FF6600` | `rgb(255, 102, 0)` | 悬停状态、价格标注 | `--color-brand-orange-dark` |
| 浅黄背景 | `#FFF8E1` | `rgb(255, 248, 225)` | 促销区块、Banner 背景 | `--color-bg-promo` |
| 主文字 | `#1A1A1A` | `rgb(26, 26, 26)` | 标题和主要文字 | `--color-text-primary` |
| 辅助文字 | `#757575` | `rgb(117, 117, 117)` | 描述、次要信息 | `--color-text-secondary` |

```css
:root {
  --color-bg-primary: #FFFFFF;
  --color-bg-promo: #FFF8E1;
  --color-brand-orange: #FB8915;
  --color-brand-orange-dark: #FF6600;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #757575;
  --color-cta-primary: #FB8915;
  --color-cta-hover: #FF6600;
  --color-border: #EEEEEE;
  --color-tag-bg: #FFF3E0;
}
```

**设计要点**：橙黄色是"最显眼的暖色"之一，在白色背景上极为突出。Temu 将其作为全站核心色，配合大面积浅黄促销区块，营造出"折扣、实惠"的视觉暗示。

**适用品类**：综合电商、日用百货、低价全品类。

---

### 3.3 Anker（科技蓝型）

| 色彩角色 | HEX | RGB | 用途 | CSS 变量建议 |
|---------|-----|-----|------|-------------|
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | 全站主背景 | `--color-bg-primary` |
| 品牌蓝 | `#0066CC` | `rgb(0, 102, 204)` | Logo、链接、CTA | `--color-brand-blue` |
| 深蓝变体 | `#004999` | `rgb(0, 73, 153)` | 悬停状态、强调 | `--color-brand-blue-dark` |
| 浅蓝背景 | `#F0F7FF` | `rgb(240, 247, 255)` | 交替区块、技术参数区 | `--color-bg-secondary` |
| 深色文字 | `#1A1A1A` | `rgb(26, 26, 26)` | 标题和主要文字 | `--color-text-primary` |
| 辅助灰 | `#6B7280` | `rgb(107, 114, 128)` | 辅助说明文字 | `--color-text-secondary` |

```css
:root {
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F0F7FF;
  --color-brand-blue: #0066CC;
  --color-brand-blue-dark: #004999;
  --color-brand-blue-light: #E6F0FF;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #6B7280;
  --color-cta-primary: #0066CC;
  --color-cta-hover: #004999;
  --color-border: #D1D9E6;
}
```

**设计要点**：蓝色是科技行业最经典的信任色。Anker 作为充电/音频品牌，蓝色传递"可靠、专业、技术领先"的信号。整体设计简洁克制，符合 3C 数码行业的国际审美。

**适用品类**：3C 数码、充电配件、音频设备、智能家居、消费电子。

---

### 3.4 Ugreen 绿联（科技绿型）

| 色彩角色 | HEX | RGB | 用途 | CSS 变量建议 |
|---------|-----|-----|------|-------------|
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | 全站主背景 | `--color-bg-primary` |
| 品牌绿 | `#00B04C` | `rgb(0, 176, 76)` | Logo、CTA、品牌标识 | `--color-brand-green` |
| 深绿变体 | `#008C3D` | `rgb(0, 140, 61)` | 悬停状态 | `--color-brand-green-dark` |
| 浅绿背景 | `#F0FAF4` | `rgb(240, 250, 244)` | 交替区块、环保标识区 | `--color-bg-secondary` |
| 深色文字 | `#1A1A1A` | `rgb(26, 26, 26)` | 标题和主要文字 | `--color-text-primary` |
| 辅助灰 | `#6B7280` | `rgb(107, 114, 128)` | 辅助文字 | `--color-text-secondary` |

```css
:root {
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F0FAF4;
  --color-brand-green: #00B04C;
  --color-brand-green-dark: #008C3D;
  --color-brand-green-light: #E6F7EE;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #6B7280;
  --color-cta-primary: #00B04C;
  --color-cta-hover: #008C3D;
  --color-border: #D1E8D9;
}
```

**设计要点**：绿色在 3C 配件行业较为少见，这反而成为 Ugreen 的差异化优势。"绿联"的中文品牌名与绿色天然呼应，品牌色与中英文命名高度统一。

**适用品类**：3C 配件、数码周边、充电设备、环保科技产品。

---

### 3.5 Jackery（户外橙型）

| 色彩角色 | HEX | RGB | 用途 | CSS 变量建议 |
|---------|-----|-----|------|-------------|
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | 全站主背景 | `--color-bg-primary` |
| 品牌橙 | `#FF6D00` | `rgb(255, 109, 0)` | Logo、CTA、品牌强调 | `--color-brand-orange` |
| 深橙变体 | `#E55F00` | `rgb(229, 95, 0)` | 悬停状态 | `--color-brand-orange-dark` |
| 浅橙背景 | `#FFF5EB` | `rgb(255, 245, 235)` | 交替区块、产品展示 | `--color-bg-secondary` |
| 深色背景 | `#1A1A1A` | `rgb(26, 26, 26)` | 户外场景区块 | `--color-bg-dark` |
| 白色文字 | `#FFFFFF` | `rgb(255, 255, 255)` | 深色背景上的文字 | `--color-text-on-dark` |

```css
:root {
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #FFF5EB;
  --color-bg-dark: #1A1A1A;
  --color-brand-orange: #FF6D00;
  --color-brand-orange-dark: #E55F00;
  --color-text-primary: #1A1A1A;
  --color-text-on-dark: #FFFFFF;
  --color-cta-primary: #FF6D00;
  --color-cta-hover: #E55F00;
  --color-border: #FFE0CC;
}
```

**设计要点**：橙色是户外/露营品类的高频色——它象征日落、篝火、能量。Jackery 以"便携电源"切入户外场景，橙色与产品使用场景天然匹配。

**适用品类**：户外电源、露营装备、便携储能、太阳能产品。

---

### 3.6 PatPat（蓝粉双色型）

| 色彩角色 | HEX | RGB | 用途 | CSS 变量建议 |
|---------|-----|-----|------|-------------|
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | 全站主背景 | `--color-bg-primary` |
| 品牌蓝 | `#4A90D9` | `rgb(74, 144, 217)` | Logo、导航、男童区 | `--color-brand-blue` |
| 品牌粉 | `#FF6B9D` | `rgb(255, 107, 157)` | 女童区、促销标签 | `--color-brand-pink` |
| 浅蓝背景 | `#F0F6FF` | `rgb(240, 246, 255)` | 男童品类区块 | `--color-bg-blue` |
| 浅粉背景 | `#FFF0F5` | `rgb(255, 240, 245)` | 女童品类区块 | `--color-bg-pink` |
| 主文字 | `#1A1A1A` | `rgb(26, 26, 26)` | 标题和主要文字 | `--color-text-primary` |
| CTA 按钮 | `#4A90D9` / `#FF6B9D` | — | 按品类区切换 | `--color-cta-primary` |

```css
:root {
  --color-bg-primary: #FFFFFF;
  --color-bg-blue: #F0F6FF;
  --color-bg-pink: #FFF0F5;
  --color-brand-blue: #4A90D9;
  --color-brand-pink: #FF6B9D;
  --color-brand-blue-dark: #3A78BC;
  --color-brand-pink-dark: #E55A88;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #6B7280;
  --color-cta-blue: #4A90D9;
  --color-cta-pink: #FF6B9D;
  --color-border: #E8E8E8;
}
```

**设计要点**：蓝粉双色方案直接服务于母婴品类的性别分区——蓝色对应男童，粉色对应女童。双色策略在母婴行业极为有效，帮助用户快速识别目标品类。

**适用品类**：母婴用品、童装、儿童玩具、亲子品牌。

---

### 3.7 Zaful（黑彩先锋型）

| 色彩角色 | HEX | RGB | 用途 | CSS 变量建议 |
|---------|-----|-----|------|-------------|
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | 全站主背景 | `--color-bg-primary` |
| 品牌黑 | `#000000` | `rgb(0, 0, 0)` | 导航栏、Logo、主文字 | `--color-brand-black` |
| 活力粉 | `#FF4081` | `rgb(255, 64, 129)` | 女装系列 CTA | `--color-accent-pink` |
| 活力蓝 | `#448AFF` | `rgb(68, 138, 255)` | 泳装系列 CTA | `--color-accent-blue` |
| 活力黄 | `#FFD600` | `rgb(255, 214, 0)` | 促销/折扣标签 | `--color-accent-yellow` |
| 活力绿 | `#69F0AE` | `rgb(105, 240, 174)` | 新品标签 | `--color-accent-green` |
| 浅灰背景 | `#F5F5F5` | `rgb(245, 245, 245)` | 交替区块 | `--color-bg-secondary` |

```css
:root {
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F5F5F5;
  --color-brand-black: #000000;
  --color-accent-pink: #FF4081;
  --color-accent-blue: #448AFF;
  --color-accent-yellow: #FFD600;
  --color-accent-green: #69F0AE;
  --color-text-primary: #000000;
  --color-text-secondary: #666666;
  --color-cta-primary: #000000;
  --color-border: #E5E5E5;
}
```

**设计要点**：Zaful 以黑色为基底，搭配多彩强调色，形成"黑色画布 + 色彩点缀"的效果。多彩策略服务于泳装/女装品类的季节性和多样性——不同色系对应不同产品系列。

**适用品类**：快时尚女装、泳装、派对服饰、年轻潮流品牌。

---

## 四、五大主流配色方案

### 方案 A：极简黑白型

**适用场景**：运动/科技/极简品牌，面向欧美市场

**核心调性**：力量、专业、极致、高级

#### 完整色板

| 色彩角色 | HEX | RGB | 用途 | CSS 变量建议 |
|---------|-----|-----|------|-------------|
| 主背景 | `#111111` | `rgb(17, 17, 17)` | 全站主背景 | `--color-bg-primary` |
| 纯黑区域 | `#0A0A0A` | `rgb(10, 10, 10)` | Hero 区域、重点区块 | `--color-bg-hero` |
| 主文字 | `#FFFFFF` | `rgb(255, 255, 255)` | 标题和主要文字 | `--color-text-primary` |
| 次要文字 | `#E5E7EB` | `rgb(229, 231, 235)` | 辅助说明文字 | `--color-text-secondary` |
| 深灰辅助 | `#374151` | `rgb(55, 65, 81)` | 边框、分割线、次要元素 | `--color-muted` |
| CTA 按钮 | `#FFFFFF` | `rgb(255, 255, 255)` | 主操作按钮（白底深色文字） | `--color-cta-primary` |
| CTA 悬停 | `#F3F4F6` | `rgb(243, 244, 246)` | 按钮悬停状态 | `--color-cta-hover` |

```css
:root {
  /* Scheme A: Minimalist Black & White */
  --color-bg-primary: #111111;
  --color-bg-hero: #0A0A0A;
  --color-bg-card: #1A1A1A;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #E5E7EB;
  --color-muted: #374151;
  --color-cta-primary: #FFFFFF;
  --color-cta-hover: #F3F4F6;
  --color-cta-text: #111111;
  --color-border: #374151;
}
```

#### 适用品类
运动服饰、健身器材、电竞外设、潮流街头品牌、功能性服饰、科技产品。

#### 目标市场
欧美市场为主（尤其是美国、英国、北欧），暗色系在这些市场与"高端、专业、潮流"强关联。

---

### 方案 B：温暖生活方式型

**适用场景**：家居/母婴/护肤/有机食品

**核心调性**：温暖、自然、舒适、信任

#### 完整色板

| 色彩角色 | HEX | RGB | 用途 | CSS 变量建议 |
|---------|-----|-----|------|-------------|
| 主背景 | `#FAF9F6` | `rgb(250, 249, 246)` | 全站主背景（暖白） | `--color-bg-primary` |
| 辅助背景 | `#FFF8F0` | `rgb(255, 248, 240)` | 交替区块（米白） | `--color-bg-secondary` |
| 主文字 | `#2D2D2D` | `rgb(45, 45, 45)` | 标题和主要文字 | `--color-text-primary` |
| 次要文字 | `#3D3D3D` | `rgb(61, 61, 61)` | 辅助说明文字 | `--color-text-secondary` |
| 暖棕主色 | `#5C4033` | `rgb(92, 64, 51)` | 品牌色、导航、CTA | `--color-warm-brown` |
| 自然绿 | `#2D6A4F` | `rgb(45, 106, 79)` | 环保标识、辅助强调 | `--color-natural-green` |
| 驼色强调 | `#C2956A` | `rgb(194, 149, 106)` | 装饰、hover 状态 | `--color-camel` |
| 柔绿点缀 | `#81C784` | `rgb(129, 199, 132)` | 标签、徽章 | `--color-soft-green` |

```css
:root {
  /* Scheme B: Warm Lifestyle */
  --color-bg-primary: #FAF9F6;
  --color-bg-secondary: #FFF8F0;
  --color-bg-card: #FFFFFF;
  --color-text-primary: #2D2D2D;
  --color-text-secondary: #3D3D3D;
  --color-warm-brown: #5C4033;
  --color-natural-green: #2D6A4F;
  --color-camel: #C2956A;
  --color-soft-green: #81C784;
  --color-cta-primary: #5C4033;
  --color-cta-hover: #4A3328;
  --color-border: #E8E2D9;
}
```

#### 适用品类
家居用品、母婴产品、有机护肤、健康食品、天然保健品、手工皂、蜡烛香氛、床上用品。

#### 目标市场
全球通用，欧美市场尤其认可自然/可持续色调，东南亚市场也接受暖色系。

---

### 方案 C：高端奢华型

**适用场景**：奢侈/高端时尚/珠宝/手表

**核心调性**：精致、奢华、稀缺、永恒

#### 完整色板

| 色彩角色 | HEX | RGB | 用途 | CSS 变量建议 |
|---------|-----|-----|------|-------------|
| 主背景（亮模式） | `#FEFEFE` | `rgb(254, 254, 254)` | 亮模式主背景 | `--color-bg-light` |
| 主背景（暗模式） | `#0A0A0A` | `rgb(10, 10, 10)` | 暗模式主背景 | `--color-bg-dark` |
| 主文字（亮模式） | `#1A1A1A` | `rgb(26, 26, 26)` | 亮模式标题文字 | `--color-text-light` |
| 主文字（暗模式） | `#F5F5F5` | `rgb(245, 245, 245)` | 暗模式标题文字 | `--color-text-dark` |
| 奢华金 | `#C4A265` | `rgb(196, 162, 101)` | 品牌金、装饰元素 | `--color-gold` |
| 深金色 | `#8B6F47` | `rgb(139, 111, 71)` | 深色变体、hover | `--color-gold-dark` |
| 深灰辅助 | `#2C2C2C` | `rgb(44, 44, 44)` | 边框、次要元素（暗模式） | `--color-dark-gray` |
| 米色辅助 | `#E8DDD3` | `rgb(232, 221, 211)` | 辅助背景、hover（亮模式） | `--color-beige` |

```css
:root {
  /* Scheme C: Luxury Premium */
  --color-bg-light: #FEFEFE;
  --color-bg-dark: #0A0A0A;
  --color-bg-card-light: #FFFFFF;
  --color-bg-card-dark: #1A1A1A;
  --color-text-light: #1A1A1A;
  --color-text-dark: #F5F5F5;
  --color-gold: #C4A265;
  --color-gold-dark: #8B6F47;
  --color-dark-gray: #2C2C2C;
  --color-beige: #E8DDD3;
  --color-cta-primary: #C4A265;
  --color-cta-text: #FFFFFF;
  --color-border-light: #E8DDD3;
  --color-border-dark: #2C2C2C;
}
```

#### 适用品类
奢侈品牌、高端珠宝、手表、皮具、高端时尚、设计师品牌、精品酒店、高端家居。

#### 目标市场
全球高端消费市场，欧美、中东、日韩市场对金色/奢华色调接受度极高。

---

### 方案 D：明亮活力型

**适用场景**：快时尚/低价走量/日用百货

**核心调性**：活力、实惠、丰富、紧迫

#### 完整色板

| 色彩角色 | HEX | RGB | 用途 | CSS 变量建议 |
|---------|-----|-----|------|-------------|
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | 全站主背景 | `--color-bg-primary` |
| 浅灰背景 | `#FAFAFA` | `rgb(250, 250, 250)` | 交替区块 | `--color-bg-secondary` |
| 主文字 | `#111827` | `rgb(17, 24, 39)` | 标题和主要文字 | `--color-text-primary` |
| 次要文字 | `#1F2937` | `rgb(31, 41, 55)` | 辅助说明文字 | `--color-text-secondary` |
| 品牌色 | `—` | — | 根据品类自定义（饱和度高） | `--color-brand` |
| 促销红 | `#EF4444` | `rgb(239, 68, 68)` | 折扣标签、限时、库存告急 | `--color-promo-red` |
| 促销橙 | `#F97316` | `rgb(249, 115, 22)` | 新品、热卖标签 | `--color-promo-orange` |
| 价格标注 | `#EF4444` | `rgb(239, 68, 68)` | 价格、折扣数字 | `--color-price` |

```css
:root {
  /* Scheme D: Bright & Energetic */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #FAFAFA;
  --color-text-primary: #111827;
  --color-text-secondary: #1F2937;
  --color-brand: #3B82F6; /* customize per brand */
  --color-promo-red: #EF4444;
  --color-promo-orange: #F97316;
  --color-price: #EF4444;
  --color-cta-primary: #EF4444;
  --color-cta-hover: #DC2626;
  --color-border: #E5E7EB;
  --color-tag-bg: #FEF2F2;
}
```

#### 适用品类
快时尚、日用百货、低价全品类、食品饮料、手机配件、季节性商品。

#### 目标市场
全球大众市场，东南亚、拉美市场尤为适合——高饱和度明亮色彩在新兴市场转化率更高。

---

### 方案 E：大胆玩趣型

**适用场景**：年轻/美妆/创意/新消费品牌

**核心调性**：大胆、有趣、年轻、不拘一格

#### 完整色板（以 Athletic Greens 为参考）

| 色彩角色 | HEX | RGB | 用途 | CSS 变量建议 |
|---------|-----|-----|------|-------------|
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | 全站主背景 | `--color-bg-primary` |
| 品牌亮绿 | `#6ABF4B` | `rgb(106, 191, 75)` | Logo、CTA、品牌标识 | `--color-brand-green` |
| 深绿变体 | `#55A33A` | `rgb(85, 163, 58)` | 悬停状态、强调 | `--color-brand-green-dark` |
| 浅绿背景 | `#F0FAF0` | `rgb(240, 250, 240)` | 交替区块 | `--color-bg-secondary` |
| 深色文字 | `#1A1A1A` | `rgb(26, 26, 26)` | 标题和主要文字 | `--color-text-primary` |
| 辅助文字 | `#4A7A3F` | `rgb(74, 122, 63)` | 绿色系辅助文字 | `--color-text-secondary` |
| 活力黄 | `#FFD54F` | `rgb(255, 213, 79)` | 徽章、标签、点缀 | `--color-accent-yellow` |

```css
:root {
  /* Scheme E: Bold & Playful */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F0FAF0;
  --color-brand-green: #6ABF4B;
  --color-brand-green-dark: #55A33A;
  --color-brand-green-light: #E8F5E9;
  --color-text-primary: #1A1A1A;
  --color-text-secondary: #4A7A3F;
  --color-accent-yellow: #FFD54F;
  --color-cta-primary: #6ABF4B;
  --color-cta-hover: #55A33A;
  --color-cta-text: #FFFFFF;
  --color-border: #C8E6C9;
}
```

#### 适用品类
健康/保健品（如 Athletic Greens）、年轻美妆、创意文具、潮玩、宠物品牌、功能性食品。

#### 目标市场
全球年轻消费群体，欧美市场对大胆色彩接受度高，亚洲市场适合适度降低饱和度的变体。

---

## 五、目标市场色彩偏好

### 5.1 欧美市场偏好

| 偏好特征 | 说明 | 推荐色系 |
|---------|------|---------|
| 极简主义 | 大面积留白、低饱和度、单色系 | 黑白灰、米色、低饱和蓝 |
| 暗色系 | 深色背景在欧美传达"高端""专业" | `#111111`、`#0A0A0A`、`#1A1A1A` |
| 可持续色 | 天然色调与环保理念强关联 | `#ECE9E2`、`#5C8A4D`、`#8B7355` |
| 克制用色 | 色彩数量控制在 3-5 个，避免花哨 | 单一品牌色 + 1-2 辅助色 |
| 高对比度 | 文字与背景对比度 WCAG AA 级以上 | 黑白、深蓝白、深绿白 |

**代表品牌**：Gymshark（暗色）、Nothing（极简白）、Allbirds（自然米色）、Patagonia（自然色）

---

### 5.2 东南亚市场偏好

| 偏好特征 | 说明 | 推荐色系 |
|---------|------|---------|
| 明亮色调 | 偏好高亮度的背景和元素 | `#FFFFFF`、`#FFF8F0`、`#FAFAFA` |
| 暖色系 | 橙色、红色、黄色接受度高 | `#FF6600`、`#E53935`、`#FB8915` |
| 高饱和度 | 品牌色饱和度偏高，更"显眼" | 高饱和蓝、红、橙、绿 |
| 多色并行 | 不排斥多色方案，视觉丰富度被接受 | 蓝粉双色、多彩强调 |
| 促销色突出 | 折扣/优惠标识需要足够醒目 | `#EF4444`、`#F97316`、`#FFD600` |

**代表品牌**：Shopee（橙）、Lazada（红）、Temu（橙黄）

---

### 5.3 日韩市场偏好

| 偏好特征 | 说明 | 推荐色系 |
|---------|------|---------|
| 柔和淡彩 | 偏好低饱和、高明度的柔和色调 | 淡粉 `#FCE4EC`、淡蓝 `#E3F2FD`、淡紫 `#F3E5F5` |
| 精致感 | 色彩搭配追求"细腻"而非"冲击" | 低对比度渐变、同色系搭配 |
| 莫兰迪色系 | 带灰调的中性色广泛流行 | 灰粉 `#D4A0A3`、灰绿 `#A8C5A0`、灰蓝 `#9FB8C8` |
| 极简但有温度 | 不是冷冰冰的黑白，而是带暖调的极简 | `#FAF9F6`、`#2D2D2D`、`#C2956A` |
| 季节感 | 色彩随季节微调（春粉、夏蓝、秋棕、冬白） | 季节性色板轮换 |

**代表品牌**：MUJI（自然白）、Uniqlo（红白极简）、Iris Hantverk（自然棕）

---

### 5.4 中东市场偏好

| 偏好特征 | 说明 | 推荐色系 |
|---------|------|---------|
| 金色奢华 | 金色在中东文化中象征财富与尊贵 | `#C4A265`、`#D4AF37`、`#8B6F47` |
| 深色背景 | 深色在中东传达高端与神秘 | `#0A0A0A`、`#1A1A1A`、`#1B1B2F` |
| 宝石色点缀 | 祖母绿、宝石蓝等深色点缀 | `#0F4C3A`、`#1B3A5C`、`#5B2C6F` |
| 高对比度 | 文字与背景需要强对比 | 深色底 + 金色/白色字 |
| 文化适配 | 避免紫色和蓝色在特定文化中的负面含义 | 偏暖色调为主 |

**代表品牌**：奢侈品电商 Ounass（黑金）、Namshi（现代简约）

---

## 六、产品色驱动配色策略

### 6.1 美妆品类色彩策略

**核心原则**：页面配色不能与产品色"打架"。美妆产品的色彩本身就是核心卖点，页面应作为"画框"而非"竞争者"。

#### 推荐策略

| 策略 | 说明 | 配色示例 |
|------|------|---------|
| 中性底色 | 用白色/米色/灰色为底，让产品色成为视觉焦点 | `#FFFFFF`、`#FAF9F6`、`#F5F5F5` |
| 肤色系背景 | 使用接近肤色的色调，让彩妆产品更"融合" | `#E9B5B7`、`#D4A574`、`#F2DDE0` |
| 品牌色克制 | 品牌色仅用于 Logo 和 CTA，不占大面积 | 品牌色占比 < 10% |
| 产品图驱动 | 每个区块的色调跟随该区块展示的产品色变化 | 动态色板切换 |

#### CTA 色彩注意事项

美妆品类的 CTA 按钮切忌使用"与产品同色"的色彩——用户会分不清哪个是产品、哪个是按钮。推荐使用深色（`#2D2D2D`、`#1A1A1A`）或品牌深色变体。

---

### 6.2 服饰品类色彩策略

**核心原则**：服饰品类色彩最为丰富，页面配色需要"能承载任何颜色的产品"。

#### 推荐策略

| 策略 | 说明 | 配色示例 |
|------|------|---------|
| 纯白/纯黑底 | 中性底色适配所有颜色产品 | `#FFFFFF` 或 `#000000` |
| 季节色轮换 | 春夏使用浅色背景，秋冬使用深色背景 | 春夏 `#FAFAFA`、秋冬 `#1A1A1A` |
| 色系分区 | 不同色系产品使用不同背景色分区 | 暖色产品暖背景、冷色产品冷背景 |
| 趋势色融入 | 每季将 Pantone 流行色融入 Banner 区域 | 年度流行色作为装饰色 |

#### 字体与色彩的配合

服饰品类对文字依赖较低（图片占主导），文字色彩需要确保在产品图片叠加时仍然可读——推荐使用半透明黑色/白色遮罩 + 高对比度文字。

---

### 6.3 3C 电子品类色彩策略

**核心原则**：3C 品类强调"技术感"和"信任感"，色彩需要传递专业可靠。

#### 推荐策略

| 策略 | 说明 | 配色示例 |
|------|------|---------|
| 科技蓝系 | 蓝色是全球 3C 行业最通用信任色 | `#0066CC`、`#0A84FF`、#1B4B6B` |
| 暗色高端 | 高端产品线使用暗色背景 | `#0A0A0A`、`#111111` |
| 产品色呼应 | 页面配色呼应产品外壳色 | 白色产品白底、黑色产品暗底 |
| 技术参数区 | 使用浅色背景 + 等宽字体展示参数 | `#F5F5F5` + monospace |

#### 配色案例

- **Anker**（充电品牌）：蓝色 `#0066CC` + 白色背景 = 科技可靠
- **Nothing**（手机品牌）：极简白 `#F5F5F5` + 超细字体 = 科技前卫
- **Jackery**（户外电源）：橙色 `#FF6D00` + 深色区块 = 户外能量

---

### 6.4 家居品类色彩策略

**核心原则**：家居品类需要营造"氛围感"——用户购买的是一种生活方式的想象。

#### 推荐策略

| 策略 | 说明 | 配色示例 |
|------|------|---------|
| 暖色调为主 | 暖白、米色、驼色营造温馨感 | `#FAF9F6`、`#FFF8F0`、`#ECE9E2` |
| 场景化配色 | 不同产品场景使用对应色调 | 厨房暖色、卧室冷色、客厅中性色 |
| 自然材质色 | 木质、棉麻、石材等材质色融入 | `#D4A574`、`#C2956A`、`#8B7355` |
| 留白充足 | 大面积留白让产品图片"呼吸" | 背景色占比 > 60% |

#### 避免事项

- 避免冷硬的纯蓝/纯绿（家居需要温暖感）
- 避免高饱和度色彩（会破坏"家"的舒适氛围）
- 避免纯黑背景（在欧美家居市场，纯黑传达"冰冷"而非"高端"）

---

## 七、AI 生成配色规则

### 必须遵守（10 条）

1. **品牌色唯一性**：全站必须有且仅有一个品牌主色（HEX），不得出现多个等权重的品牌色，除非品牌定位本身就是"多色"（如 Zaful）。

2. **60-30-10 比例**：背景色占 60%，辅助色占 30%，强调色占 10%。生成的色板必须标注每个色值的占比建议。

3. **WCAG AA 对比度**：所有文字-背景色彩组合必须满足 WCAG AA 标准（普通文字 >= 4.5:1，大文字 >= 3:1）。禁止出现浅灰文字配浅灰背景的组合。

4. **HEX + RGB + 用途三位一体**：每个色值必须同时提供 HEX、RGB 和具体用途说明。禁止出现无用途说明的"裸色值"。

5. **CSS 变量命名规范**：变量名必须语义化，使用 `--color-{role}-{variant}` 格式（如 `--color-bg-primary`、`--color-cta-hover`）。禁止使用 `--color1`、`--color2` 等无意义命名。

6. **目标市场适配**：生成的配色方案必须标注目标市场。面向欧美的方案不得使用东南亚风格的高饱和度配色，反之亦然。

7. **品类适配合规**：配色必须与品类属性匹配——美妆品类不得使用"机械蓝"，户外品类不得使用"珠宝金"，3C 品类不得使用"婴儿粉"。

8. **暗色/亮色模式完整**：如果品牌定位支持暗色模式（如高端奢华型），必须同时提供亮色和暗色两套完整色板，不得只提供单套。

9. **产品色不冲突**：页面配色不得与展示产品的颜色过于接近，确保产品图片是视觉焦点而非与背景融为一体。

10. **CTA 色彩醒目**：CTA 按钮色必须与页面主背景形成强对比，且与品牌色保持一致性（品牌色变体或品牌深色版）。

---

### 禁止事项（8 条）

1. **禁止使用默认蓝色 `#3B82F6`（Tailwind blue-500）作为品牌色**——这是最常见的"AI 配色痕迹"，全球有超过 10 万个网站使用此色值。如需蓝色，请选择更有辨识度的变体（如 `#0066CC`、`#0A84FF`、`#1B4B6B`）。

2. **禁止渐变背景滥用**——除非品牌定位为"创意/艺术/先锋"，否则不得使用三色以上渐变。独立站应以纯色为主。

3. **禁止紫色作为默认品牌色**——紫色在跨境市场辨识度低，且在不同文化中含义差异大。除非品牌明确要求或品类特殊（如冥想/灵性类产品），否则不推荐。

4. **禁止超过 6 个主要色值**——色值数量必须控制在核心色 3-5 个 + 辅助色 1-2 个。超过 6 个色值会导致视觉混乱。

5. **禁止使用纯黑 `#000000` 作为背景文字色**——在纯白背景上，`#000000` 过于刺眼。推荐使用 `#1A1A1A` 或 `#111827` 代替。

6. **禁止品牌色与 CTA 色完全不同**——CTA 按钮色必须是品牌色的变体或品牌深色版，不得使用与品牌色完全无关的"转化率红色"。

7. **禁止忽略 hover 状态**——每个交互色彩（CTA、链接、按钮）必须提供 hover 状态色值，不得只提供默认状态。

8. **禁止在奢侈品/高端品类中使用高饱和度促销色**——`#EF4444`（红色）、`#FFD600`（黄色）等促销色不得出现在高端品牌的配色方案中。

---

### 品类配色推荐速查表

| 品类 | 推荐方案 | 主色推荐 | 辅助色推荐 | 目标市场 |
|------|---------|---------|-----------|---------|
| 运动服饰 | A 极简黑白 | `#000000` | `#F5F5F5`、`#FFFFFF` | 欧美 |
| 快时尚 | D 明亮活力 | 品牌自定义（高饱和） | `#EF4444`（促销） | 全球 |
| 高端时尚 | C 高端奢华 | `#C4A265`（金色） | `#0A0A0A`、`#FEFEFE` | 欧美/中东 |
| 美妆护肤 | E 大胆玩趣 / Glossier 型 | `#E9B5B7`（裸粉） | `#FFFFFF`、`#2D2D2D` | 欧美/日韩 |
| 3C 电子 | A 极简黑白 / 科技蓝 | `#0066CC`（科技蓝） | `#F0F7FF`、`#1A1A1A` | 全球 |
| 户外装备 | 户外自然型 | `#FF6D00`（户外橙） | `#1B4B6B`、`#FFFFFF` | 欧美 |
| 家居用品 | B 温暖生活 | `#5C4033`（暖棕） | `#FAF9F6`、`#C2956A` | 全球 |
| 母婴用品 | B 温暖生活 / 蓝粉双色 | `#4A90D9`（蓝）+ `#FF6B9D`（粉） | `#FFFFFF`、`#FFF0F5` | 全球 |
| 宠物用品 | E 大胆玩趣 | `#6ABF4B`（活力绿） | `#FFFFFF`、`#FFD54F` | 欧美 |
| 健康食品 | B 温暖生活 / 自然型 | `#2D6A4F`（自然绿） | `#FAF9F6`、`#8B7355` | 全球 |
| 珠宝首饰 | C 高端奢华 | `#C4A265`（金色） | `#0A0A0A`、`#E8DDD3` | 欧美/中东 |
| 环保品牌 | 自然可持续型 | `#ECE9E2`（天然米色） | `#5C8A4D`、`#FFFFFF` | 欧美 |

---

> 本文档基于真实品牌色值和跨境行业实践编写。所有色值均来自品牌官网实际使用数据，可直接用于设计和开发参考。
