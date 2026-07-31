# 科技行业官网色彩搭配拆解

> 基于 Linear、Vercel、Stripe、Apple、华为、阿里云等国内外科技品牌官网的真实 CSS 色值拆解。

---

## 一、行业色彩特征总览

科技行业官网的配色风格在过去十年中经历了显著演变，但当前呈现出以下三大核心特征：

### 1. 暗色极简成为主流

自 2020 年起，暗色模式从"可选功能"变为"默认设计语言"。Linear、Vercel、OpenAI 等新一代科技品牌不约而同地采用深色背景作为官网主视觉。原因有三：

- **聚焦内容**：暗色背景消除了环境光干扰，让品牌色和产品界面成为视觉焦点
- **降低视觉疲劳**：开发者和技术受众是科技产品的核心用户群，长时间面对屏幕的他们天然偏好暗色
- **暗示前沿感**：深色界面在潜意识中与"终端"、"代码编辑器"、"太空"等科技意象关联

值得注意的是，这些品牌几乎不使用纯黑 `#000000`，而是采用带有微妙色相倾向的深色，如 `#0A0A0F`（Linear，微蓝黑）、`#111827`（Tailwind gray-900，微蓝灰）、`#0a0a0b`（近乎纯黑但更柔和）。

### 2. 品牌色作为唯一强调

科技官网普遍遵循 **60-30-10 法则** 的极端版本——背景和文字占据 90% 以上的面积，品牌色仅用于关键交互元素（按钮、链接、图标高亮、品牌标识）。这种克制让每一次品牌色的出现都具有强烈的视觉权重。

- Linear 的紫蓝 `#5E6AD2` 只出现在 CTA 按钮和选中态
- Vercel 的蓝 `#006bff` 只用于链接和核心操作
- OpenAI 的绿 `#10a37f` 只用于品牌标识和少量交互元素

### 3. 渐变从线性到网格（Mesh Gradient）

2023 年以来，Stripe 引领的 Mesh Gradient 风格席卷科技圈。与传统双色线性渐变不同，Mesh Gradient 使用多个色彩节点在二维空间中混合，产生类似水彩或极光的视觉效果。

- **早期**：简单的双色线性渐变（如 `linear-gradient(135deg, #667eea, #764ba2)`）
- **当前**：多色网格渐变，3-5 个色彩锚点，配合 `blur` 和低透明度叠加
- **代表**：Stripe 官网的紫色-粉色-橙色-青色四色网格渐变系统

---

## 二、国际品牌配色拆解

### 2.1 Linear（暗色极简标杆）

**品牌概述**：Linear 是新一代项目管理工具，以极致的暗色 UI 设计在开发者社区中赢得口碑，其官网是暗色极简风格的教科书级案例。

**色彩体系表**：

| 角色 | 色值 | RGB | CSS 变量建议 | 用途 |
|------|------|-----|-------------|------|
| 主背景 | `#0A0A0F` | `rgb(10, 10, 15)` | `--color-bg-primary` | 页面主背景 |
| 次背景 | `#12121A` | `rgb(18, 18, 26)` | `--color-bg-secondary` | 卡片、面板背景 |
| 边框 | `#1E1E2E` | `rgb(30, 30, 46)` | `--color-border` | 分隔线、卡片边框 |
| 品牌色 | `#5E6AD2` | `rgb(94, 106, 210)` | `--color-brand` | CTA 按钮、链接、选中态 |
| 品牌色悬停 | `#7B85E0` | `rgb(123, 133, 224)` | `--color-brand-hover` | 交互悬停态 |
| 主文字 | `#FFFFFF` | `rgb(255, 255, 255)` | `--color-text-primary` | 标题、正文主色 |
| 次文字 | `#8B8B8B` | `rgb(139, 139, 139)` | `--color-text-secondary` | 描述、辅助说明 |
| 弱文字 | `#555566` | `rgb(85, 85, 102)` | `--color-text-tertiary` | 占位符、时间戳 |
| 灰度 L1 | `#1A1A24` | `rgb(26, 26, 36)` | `--color-gray-100` | 最浅的暗色层级 |
| 灰度 L2 | `#22222E` | `rgb(34, 34, 46)` | `--color-gray-200` | 悬停背景 |
| 灰度 L3 | `#2A2A38` | `rgb(42, 42, 56)` | `--color-gray-300` | 激活态背景 |
| 灰度 L4 | `#333344` | `rgb(51, 51, 68)` | `--color-gray-400` | 禁用态边框 |
| 灰度 L5 | `#44445A` | `rgb(68, 68, 90)` | `--color-gray-500` | 图标默认色 |
| 灰度 L6 | `#66667A` | `rgb(102, 102, 122)` | `--color-gray-600` | 次要图标 |
| 灰度 L7 | `#8888A0` | `rgb(136, 136, 160)` | `--color-gray-700` | 辅助文字 |
| 灰度 L8 | `#AAAA C0` | `rgb(170, 170, 192)` | `--color-gray-800` | 次要文字 |
| 灰度 L9 | `#CCCCDD` | `rgb(204, 204, 221)` | `--color-gray-900` | 强调文字 |
| 灰度 L10 | `#EEEEF5` | `rgb(238, 238, 245)` | `--color-gray-1000` | 最亮文字 |

**CSS 变量定义**：

```css
:root {
  /* Linear Dark Theme */
  --color-bg-primary: #0A0A0F;
  --color-bg-secondary: #12121A;
  --color-bg-tertiary: #1A1A24;
  --color-border: #1E1E2E;
  --color-border-hover: #2A2A38;
  --color-brand: #5E6AD2;
  --color-brand-hover: #7B85E0;
  --color-brand-muted: rgba(94, 106, 210, 0.15);
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #8B8B8B;
  --color-text-tertiary: #555566;
  --color-text-brand: #5E6AD2;

  /* 10-level gray system */
  --color-gray-100: #1A1A24;
  --color-gray-200: #22222E;
  --color-gray-300: #2A2A38;
  --color-gray-400: #333344;
  --color-gray-500: #44445A;
  --color-gray-600: #66667A;
  --color-gray-700: #8888A0;
  --color-gray-800: #AAAAC0;
  --color-gray-900: #CCCCDD;
  --color-gray-1000: #EEEEF5;

  /* Functional colors */
  --color-success: #4DAF73;
  --color-warning: #E2B340;
  --color-error: #E5534B;
  --color-info: #539BF5;
}
```

**配色特点分析**：

Linear 的配色之所以被认为是暗色 UI 的天花板，核心在于三个细节：

1. **背景不是纯黑**：`#0A0A0F` 带有微弱的蓝色倾向（B 通道比 R/G 高 5），在视觉上比纯黑更有"深度感"和"空间感"
2. **灰度系统带蓝紫倾向**：从 L1 到 L10，每个灰度都带有微妙的蓝紫色相（B 通道始终高于 R/G），让整个页面在单色中产生和谐的色调统一
3. **品牌色使用极度克制**：`#5E6AD2` 这个紫蓝色在页面中占比不超过 5%，但由于暗色背景的高对比，每次出现都极具辨识度

**适配建议**：

- 适合：开发者工具、SaaS 后台、项目管理、代码编辑器类产品
- 不适合：面向大众消费者的 C 端产品（暗色可能增加认知负荷）
- 变体建议：可将品牌色替换为其他色相（如绿色 `#10b981`、青色 `#06b6d4`），整体暗色框架不变

---

### 2.2 Vercel（黑白蓝三色系统）

**品牌概述**：Vercel 是前端部署平台，其官网以极简的黑白灰为基底、蓝色为唯一强调色，是"少即是多"设计哲学的典范。

**色彩体系表**：

| 角色 | 色值 | RGB | CSS 变量建议 | 用途 |
|------|------|-----|-------------|------|
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | `--color-bg-primary` | 页面主背景 |
| 次背景 | `#FAFAFA` | `rgb(250, 250, 250)` | `--color-bg-secondary` | 代码块、卡片背景 |
| 主色 | `#171717` | `rgb(23, 23, 23)` | `--color-text-primary` | 标题、正文 |
| 次色 | `#4d4d4d` | `rgb(77, 77, 77)` | `--color-text-secondary` | 描述文字 |
| 强调色 | `#006bff` | `rgb(0, 107, 255)` | `--color-accent` | 链接、按钮、Logo |
| 边框 | `#EAEAEA` | `rgb(234, 234, 234)` | `--color-border` | 分隔线 |
| 灰度 L1 | `#f2f2f2` | `rgb(242, 242, 242)` | `--color-gray-100` | 最浅灰 |
| 灰度 L2 | `#e5e5e5` | `rgb(229, 229, 229)` | `--color-gray-200` | 禁用背景 |
| 灰度 L3 | `#d4d4d4` | `rgb(212, 212, 212)` | `--color-gray-300` | 占位符边框 |
| 灰度 L4 | `#a3a3a3` | `rgb(163, 163, 163)` | `--color-gray-400` | 次要文字 |
| 灰度 L5 | `#737373` | `rgb(115, 115, 115)` | `--color-gray-500` | 辅助图标 |
| 灰度 L6 | `#525252` | `rgb(82, 82, 82)` | `--color-gray-600` | 描述文字 |
| 灰度 L7 | `#404040` | `rgb(64, 64, 64)` | `--color-gray-700` | 次要标题 |
| 灰度 L8 | `#2e2e2e` | `rgb(46, 46, 46)` | `--color-gray-800` | 代码块背景 |
| 灰度 L9 | `#262626` | `rgb(38, 38, 38)` | `--color-gray-900` | 深色背景 |
| 灰度 L10 | `#171717` | `rgb(23, 23, 23)` | `--color-gray-1000` | 主文字/最深 |

**CSS 变量定义**：

```css
:root {
  /* Vercel Light Theme */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #FAFAFA;
  --color-bg-code: #F5F5F5;
  --color-text-primary: #171717;
  --color-text-secondary: #4d4d4d;
  --color-text-tertiary: #737373;
  --color-accent: #006bff;
  --color-accent-hover: #0050cc;
  --color-border: #EAEAEA;
  --color-border-hover: #d4d4d4;

  /* 10-level gray system (neutral, no hue bias) */
  --color-gray-100: #f2f2f2;
  --color-gray-200: #e5e5e5;
  --color-gray-300: #d4d4d4;
  --color-gray-400: #a3a3a3;
  --color-gray-500: #737373;
  --color-gray-600: #525252;
  --color-gray-700: #404040;
  --color-gray-800: #2e2e2e;
  --color-gray-900: #262626;
  --color-gray-1000: #171717;
}
```

**配色特点分析**：

Vercel 的配色策略是"用最少的颜色传达最大的信息层级"：

1. **纯中性灰度**：10 级灰度 R=G=B 完全相等，没有任何色相倾向，是真正的"无色"灰。这让蓝色强调色在页面中异常突出
2. **高对比度标题**：`#171717` 在 `#FFFFFF` 上的对比度达到 16.7:1，远超 WCAG AAA 的 7:1 标准
3. **蓝色只做"指路"**：所有可点击元素统一使用 `#006bff`，用户形成"蓝色=可操作"的条件反射

**适配建议**：

- 适合：技术文档站、开发者平台、API 文档、开源项目官网
- 不适合：需要情感化表达的品牌网站（颜色太少显得冷漠）
- 变体建议：保持黑白灰骨架，将蓝色替换为品牌色即可适配大多数技术产品

---

### 2.3 Stripe（Mesh Gradient 大师）

**品牌概述**：Stripe 是全球领先的支付平台，其官网以精致的 Mesh Gradient 渐变和白色基底构建出科技感与亲和力兼具的视觉体系。

**色彩体系表**：

| 角色 | 色值 | RGB | CSS 变量建议 | 用途 |
|------|------|-----|-------------|------|
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | `--color-bg-primary` | 页面主背景 |
| 浅灰背景 | `#F6F9FC` | `rgb(246, 249, 252)` | `--color-bg-secondary` | 交替区块、卡片 |
| 主文字 | `#1A1F36` | `rgb(26, 31, 54)` | `--color-text-primary` | 标题、正文 |
| 品牌蓝 | `#635BFF` | `rgb(99, 91, 255)` | `--color-brand` | CTA 按钮、主品牌色 |
| 品牌蓝悬停 | `#7A73FF` | `rgb(122, 115, 255)` | `--color-brand-hover` | 按钮悬停态 |
| 渐变紫起 | `#7B61FF` | `rgb(123, 97, 255)` | `--gradient-purple-start` | 渐变起始色 |
| 渐变紫止 | `#9B59B6` | `rgb(155, 89, 182)` | `--gradient-purple-end` | 渐变终止色 |
| 渐变粉起 | `#FF6B9D` | `rgb(255, 107, 157)` | `--gradient-pink-start` | 渐变起始色 |
| 渐变粉止 | `#E84393` | `rgb(232, 67, 147)` | `--gradient-pink-end` | 渐变终止色 |
| 渐变橙起 | `#FF9A56` | `rgb(255, 154, 86)` | `--gradient-orange-start` | 渐变起始色 |
| 渐变橙止 | `#FDCB6E` | `rgb(253, 203, 110)` | `--gradient-orange-end` | 渐变终止色 |
| 渐变青起 | `#00D2FF` | `rgb(0, 210, 255)` | `--gradient-cyan-start` | 渐变起始色 |
| 渐变青止 | `#0ABDE3` | `rgb(10, 189, 227)` | `--gradient-cyan-end` | 渐变终止色 |
| 边框 | `#E3E8EF` | `rgb(227, 232, 239)` | `--color-border` | 卡片、分隔线 |
| 次文字 | `#525F7F` | `rgb(82, 95, 127)` | `--color-text-secondary` | 描述文字 |

**CSS 变量定义**：

```css
:root {
  /* Stripe Theme */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F6F9FC;
  --color-text-primary: #1A1F36;
  --color-text-secondary: #525F7F;
  --color-text-tertiary: #8792A2;
  --color-brand: #635BFF;
  --color-brand-hover: #7A73FF;
  --color-brand-light: rgba(99, 91, 255, 0.08);
  --color-border: #E3E8EF;
  --color-border-light: #F0F3F9;

  /* Stripe Mesh Gradient System */
  --gradient-purple: linear-gradient(135deg, #7B61FF, #9B59B6);
  --gradient-pink: linear-gradient(135deg, #FF6B9D, #E84393);
  --gradient-orange: linear-gradient(135deg, #FF9A56, #FDCB6E);
  --gradient-cyan: linear-gradient(135deg, #00D2FF, #0ABDE3);

  /* Combined mesh gradient */
  --gradient-mesh-primary:
    radial-gradient(at 40% 20%, #7B61FF 0px, transparent 50%),
    radial-gradient(at 80% 0%, #FF6B9D 0px, transparent 50%),
    radial-gradient(at 0% 50%, #00D2FF 0px, transparent 50%),
    radial-gradient(at 80% 50%, #FF9A56 0px, transparent 50%),
    radial-gradient(at 0% 100%, #9B59B6 0px, transparent 50%),
    radial-gradient(at 80% 100%, #FDCB6E 0px, transparent 50%),
    linear-gradient(135deg, #F6F9FC, #FFFFFF);

  /* Functional */
  --color-success: #20C997;
  --color-warning: #FCC419;
  --color-error: #FA5252;
}
```

**配色特点分析**：

Stripe 的配色在科技行业中独树一帜，因为它是少数使用"彩色"而非"暗色"建立科技感的品牌：

1. **Mesh Gradient 的精髓是"低饱和+大模糊"**：每个渐变节点都使用 `radial-gradient` 配合大范围扩散（`transparent 50%`），让颜色像水彩一样自然融合
2. **渐变色与品牌蓝同属紫色系**：`#635BFF`（品牌蓝）与 `#7B61FF→#9B59B6`（渐变紫）色相接近，保持整体和谐
3. **白色背景上的微蓝灰**：`#F6F9FC` 和 `#E3E8EF` 都带有微弱的蓝色倾向，与品牌蓝形成呼应

**适配建议**：

- 适合：金融科技、支付平台、SaaS 产品、需要"专业但不冰冷"形象的 B2B 产品
- 不适合：极简主义技术工具（渐变会显得过于花哨）
- 变体建议：保留 Mesh Gradient 手法，将渐变色替换为品牌色系的延伸色即可

---

### 2.4 OpenAI（AI 新锐暗色）

**品牌概述**：OpenAI 是全球领先的人工智能公司，其官网以深色背景搭配标志性的绿色强调，定义了 AI 行业的视觉风格。

**色彩体系表**：

| 角色 | 色值 | RGB | CSS 变量建议 | 用途 |
|------|------|-----|-------------|------|
| 主背景 | `#000000` | `rgb(0, 0, 0)` | `--color-bg-primary` | 页面主背景 |
| 次背景 | `#0D0D0D` | `rgb(13, 13, 13)` | `--color-bg-secondary` | 内容区块 |
| 卡片背景 | `#1A1A1A` | `rgb(26, 26, 26)` | `--color-bg-card` | 卡片、面板 |
| 品牌色 | `#10A37F` | `rgb(16, 163, 127)` | `--color-brand` | Logo、CTA、品牌标识 |
| 品牌色亮 | `#1DB886` | `rgb(29, 184, 134)` | `--color-brand-bright` | 悬停态 |
| 品牌色暗 | `#0D8C6C` | `rgb(13, 140, 108)` | `--color-brand-dark` | 按下态 |
| 主文字 | `#FFFFFF` | `rgb(255, 255, 255)` | `--color-text-primary` | 标题 |
| 次文字 | `#B4B4B4` | `rgb(180, 180, 180)` | `--color-text-secondary` | 正文 |
| 弱文字 | `#6E6E6E` | `rgb(110, 110, 110)` | `--color-text-tertiary` | 辅助信息 |
| 边框 | `#2A2A2A` | `rgb(42, 42, 42)` | `--color-border` | 分隔线 |

**CSS 变量定义**：

```css
:root {
  /* OpenAI Dark Theme */
  --color-bg-primary: #000000;
  --color-bg-secondary: #0D0D0D;
  --color-bg-card: #1A1A1A;
  --color-bg-hover: #222222;
  --color-brand: #10A37F;
  --color-brand-bright: #1DB886;
  --color-brand-dark: #0D8C6C;
  --color-brand-muted: rgba(16, 163, 127, 0.12);
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #B4B4B4;
  --color-text-tertiary: #6E6E6E;
  --color-border: #2A2A2A;
  --color-border-hover: #3A3A3A;
}
```

**配色特点分析**：

1. **绿色=AI 的视觉符号**：OpenAI 选择了绿色而非常见的蓝色作为品牌色，在 AI 行业中形成了差异化。绿色暗示"生命"、"智能"、"成长"
2. **极致的纯黑背景**：与其他品牌不同，OpenAI 大胆使用纯黑 `#000000`，配合 OLED 屏幕可以做到真正的"黑色"渲染，增加沉浸感
3. **低饱和度的灰色层级**：文字灰 `#B4B4B4` 和 `#6E6E6E` 都是纯灰色，不抢品牌色的视觉权重

**适配建议**：

- 适合：AI 产品、机器学习平台、数据科学工具、需要"未来感"的产品
- 不适合：面向传统行业客户的企业软件（纯黑+绿色可能显得过于前卫）
- 变体建议：可将绿色替换为其他"科技感"色相，如青色、蓝绿色

---

### 2.5 Apple（白色极简）

**品牌概述**：Apple 是全球最具价值的科技品牌，其官网以大量留白和极少的色彩使用，诠释了"设计就是减少"的理念。

**色彩体系表**：

| 角色 | 色值 | RGB | CSS 变量建议 | 用途 |
|------|------|-----|-------------|------|
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | `--color-bg-primary` | 页面主背景 |
| 次背景 | `#F5F5F7` | `rgb(245, 245, 247)` | `--color-bg-secondary` | 交替区块 |
| 深背景 | `#000000` | `rgb(0, 0, 0)` | `--color-bg-dark` | 深色区块/产品展示 |
| 主文字 | `#1D1D1F` | `rgb(29, 29, 31)` | `--color-text-primary` | 标题、正文 |
| 次文字 | `#86868B` | `rgb(134, 134, 139)` | `--color-text-secondary` | 描述文字 |
| 链接蓝 | `#0066CC` | `rgb(0, 102, 204)` | `--color-link` | 链接 |
| 强调蓝 | `#0071E3` | `rgb(0, 113, 227)` | `--color-accent` | CTA 按钮 |
| 边框 | `#D2D2D7` | `rgb(210, 210, 215)` | `--color-border` | 分隔线 |

**CSS 变量定义**：

```css
:root {
  /* Apple Theme */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F5F5F7;
  --color-bg-dark: #000000;
  --color-text-primary: #1D1D1F;
  --color-text-secondary: #86868B;
  --color-text-tertiary: #AFAFB2;
  --color-link: #0066CC;
  --color-accent: #0071E3;
  --color-accent-hover: #0077ED;
  --color-border: #D2D2D7;
  --color-border-light: #E8E8ED;
}
```

**配色特点分析**：

Apple 的配色策略核心是"让产品说话"：

1. **几乎无品牌色**：Apple 官网没有固定的"品牌色"，蓝色仅用于可操作元素（"购买"按钮、"了解更多"链接），其余全部由黑白灰构成
2. **大面积留白**：页面中文字和图片只占 30-40% 的面积，60% 以上是纯白或纯黑背景
3. **文字对比度极高**：`#1D1D1F` 在 `#FFFFFF` 上的对比度为 17.4:1，`#F5F5F7` 背景上的 `#1D1D1F` 也有 16.1:1

**适配建议**：

- 适合：硬件产品展示、高端品牌官网、内容驱动的网站
- 不适合：功能复杂的 SaaS 产品（留白太多，信息密度不够）
- 变体建议：Apple 的配色几乎不可复制——它的有效性建立在强大的品牌认知和高质量的产品摄影之上

---

## 三、中国品牌配色拆解

### 3.1 华为

| 角色 | 色值 | RGB | CSS 变量建议 | 用途 |
|------|------|-----|-------------|------|
| 品牌红 | `#CF0A2C` | `rgb(207, 10, 44)` | `--color-brand` | Logo、CTA 按钮 |
| 品牌红悬停 | `#E00D32` | `rgb(224, 13, 50)` | `--color-brand-hover` | 交互悬停 |
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | `--color-bg-primary` | 页面主背景 |
| 深背景 | `#000000` | `rgb(0, 0, 0)` | `--color-bg-dark` | 产品展示区块 |
| 主文字 | `#191919` | `rgb(25, 25, 25)` | `--color-text-primary` | 标题、正文 |
| 次文字 | `#666666` | `rgb(102, 102, 102)` | `--color-text-secondary` | 描述 |
| 浅灰背景 | `#F5F5F5` | `rgb(245, 245, 245)` | `--color-bg-secondary` | 交替区块 |

华为的品牌红 `#CF0A2C` 取自中国红，传递"中国科技力量"的定位。应用场景：全产品线官网、企业官网、发布会物料。红色在科技行业中较为少见，这使得华为在视觉上具有极高的辨识度。

---

### 3.2 阿里巴巴/阿里云

| 角色 | 色值 | RGB | CSS 变量建议 | 用途 |
|------|------|-----|-------------|------|
| 品牌橙 | `#FF6A00` | `rgb(255, 106, 0)` | `--color-brand` | Logo、CTA |
| 品牌橙深 | `#E55D00` | `rgb(229, 93, 0)` | `--color-brand-dark` | 按下态 |
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | `--color-bg-primary` | 页面主背景 |
| 浅灰 | `#F5F5F5` | `rgb(245, 245, 245)` | `--color-bg-secondary` | 交替区块 |
| 主文字 | `#1D1D1F` | `rgb(29, 29, 31)` | `--color-text-primary` | 标题 |
| 次文字 | `#666666` | `rgb(102, 102, 102)` | `--color-text-secondary` | 描述 |
| 深色区块 | `#171717` | `rgb(23, 23, 23)` | `--color-bg-dark` | 深色区块 |

阿里巴巴的橙色 `#FF6A00` 传递"活力、温暖、开放"的品牌性格。阿里云在此基础上增加了更多蓝色系元素以增强"技术感"。应用场景：电商平台、云计算平台、企业服务官网。

---

### 3.3 腾讯/腾讯云

| 角色 | 色值 | RGB | CSS 变量建议 | 用途 |
|------|------|-----|-------------|------|
| 品牌蓝 | `#1677FF` | `rgb(22, 119, 255)` | `--color-brand` | Logo、CTA |
| 品牌蓝深 | `#0958D9` | `rgb(9, 88, 217)` | `--color-brand-dark` | 按下态 |
| 品牌蓝浅 | `#E6F4FF` | `rgb(230, 244, 255)` | `--color-brand-light` | 浅色背景 |
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | `--color-bg-primary` | 页面主背景 |
| 主文字 | `#1F1F1F` | `rgb(31, 31, 31)` | `--color-text-primary` | 标题 |
| 次文字 | `#666666` | `rgb(102, 102, 102)` | `--color-text-secondary` | 描述 |

腾讯蓝 `#1677FF` 与 Ant Design 的主色一致（Ant Design 是腾讯系设计体系），传递"可靠、专业、连接"的品牌形象。应用场景：社交产品、云服务、游戏平台。

---

### 3.4 字节跳动

| 角色 | 色值 | RGB | CSS 变量建议 | 用途 |
|------|------|-----|-------------|------|
| 品牌黑 | `#000000` | `rgb(0, 0, 0)` | `--color-brand` | Logo |
| 强调青 | `#00BCD4` | `rgb(0, 188, 212)` | `--color-accent` | 交互元素 |
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | `--color-bg-primary` | 页面主背景 |
| 深色背景 | `#111111` | `rgb(17, 17, 17)` | `--color-bg-dark` | 深色区块 |
| 主文字 | `#1A1A1A` | `rgb(26, 26, 26)` | `--color-text-primary` | 标题 |
| 次文字 | `#888888` | `rgb(136, 136, 136)` | `--color-text-secondary` | 描述 |

字节跳动的视觉系统以黑白为主，青色 `#00BCD4` 作为点缀，传递"极简、高效、现代"的风格。这种配色与其产品（抖音/TikTok）的多彩内容形成反差，让产品本身成为视觉焦点。应用场景：内容平台、效率工具、短视频产品官网。

---

### 3.5 小米

| 角色 | 色值 | RGB | CSS 变量建议 | 用途 |
|------|------|-----|-------------|------|
| 品牌橙 | `#FF6700` | `rgb(255, 103, 0)` | `--color-brand` | Logo、CTA |
| 品牌橙深 | `#E55D00` | `rgb(229, 93, 0)` | `--color-brand-dark` | 悬停态 |
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | `--color-bg-primary` | 页面主背景 |
| 浅灰 | `#F7F7F7` | `rgb(247, 247, 247)` | `--color-bg-secondary` | 交替区块 |
| 主文字 | `#333333` | `rgb(51, 51, 51)` | `--color-text-primary` | 标题 |
| 次文字 | `#666666` | `rgb(102, 102, 102)` | `--color-text-secondary` | 描述 |

小米橙 `#FF6700` 与阿里橙 `#FF6A00` 非常接近，但小米的品牌调性更偏向"性价比"和"年轻活力"。应用场景：消费电子、IoT 产品、智能硬件。

---

### 3.6 百度

| 角色 | 色值 | RGB | CSS 变量建议 | 用途 |
|------|------|-----|-------------|------|
| 品牌蓝 | `#2932E1` | `rgb(41, 50, 225)` | `--color-brand-blue` | 主品牌色 |
| 品牌红 | `#DE2910` | `rgb(222, 41, 16)` | `--color-brand-red` | 辅助品牌色 |
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | `--color-bg-primary` | 页面主背景 |
| 主文字 | `#222222` | `rgb(34, 34, 34)` | `--color-text-primary` | 标题 |
| 次文字 | `#555555` | `rgb(85, 85, 85)` | `--color-text-secondary` | 描述 |
| 搜索框背景 | `#F5F5F6` | `rgb(245, 245, 246)` | `--color-input-bg` | 搜索输入框 |

百度是少数使用"蓝+红"双品牌色的科技公司。蓝色传递"技术、信任"，红色传递"热情、中国"，两者结合形成独特的品牌识别。应用场景：搜索引擎、AI 平台、地图服务、自动驾驶。

---

### 3.7 美团

| 角色 | 色值 | RGB | CSS 变量建议 | 用途 |
|------|------|-----|-------------|------|
| 品牌黄 | `#FFB100` | `rgb(255, 177, 0)` | `--color-brand` | Logo、CTA |
| 品牌黄深 | `#E59E00` | `rgb(229, 158, 0)` | `--color-brand-dark` | 悬停态 |
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | `--color-bg-primary` | 页面主背景 |
| 浅灰 | `#F5F5F5` | `rgb(245, 245, 245)` | `--color-bg-secondary` | 交替区块 |
| 主文字 | `#333333` | `rgb(51, 51, 51)` | `--color-text-primary` | 标题 |
| 次文字 | `#666666` | `rgb(102, 102, 102)` | `--color-text-secondary` | 描述 |

美团黄 `#FFB100` 是科技行业中罕见的黄色品牌色，传递"温暖、食物、生活服务"的品牌联想。黄色在白色背景上需要注意对比度——`#FFB100` 在白色上的对比度约为 2.1:1，不满足 WCAG AA 标准，因此美团在实际使用中会将黄色仅用于大面积色块和图标，文字部分使用深色。应用场景：生活服务平台、外卖、酒店旅游、本地服务。

---

## 四、三大主流配色方案

### 方案A：暗色系 + 霓虹强调色

适合开发者工具、AI 产品、加密货币、游戏等需要"前沿感"的产品。

**完整色板**：

| 角色 | 色值 | RGB | CSS 变量建议 | 用途 |
|------|------|-----|-------------|------|
| 主背景 | `#0a0a0b` | `rgb(10, 10, 11)` | `--color-bg-primary` | 页面主背景 |
| 次背景 | `#111827` | `rgb(17, 24, 39)` | `--color-bg-secondary` | 卡片、面板 |
| 三级背景 | `#1F2937` | `rgb(31, 41, 55)` | `--color-bg-tertiary` | 悬停背景 |
| 边框 | `#374151` | `rgb(55, 65, 81)` | `--color-border` | 分隔线 |
| 品牌色 | `#8B5CF6` | `rgb(139, 92, 246)` | `--color-brand` | 霓虹紫 |
| 品牌色亮 | `#A78BFA` | `rgb(167, 139, 250)` | `--color-brand-light` | 悬停态 |
| 强调色 | `#06B6D4` | `rgb(6, 182, 212)` | `--color-accent` | 霓虹青 |
| 主文字 | `#F9FAFB` | `rgb(249, 250, 251)` | `--color-text-primary` | 标题 |
| 次文字 | `#9CA3AF` | `rgb(156, 163, 175)` | `--color-text-secondary` | 描述 |
| 弱文字 | `#6B7280` | `rgb(107, 114, 128)` | `--color-text-tertiary` | 辅助信息 |

**CSS 变量定义**：

```css
:root {
  /* Scheme A: Dark + Neon Accent */
  --color-bg-primary: #0a0a0b;
  --color-bg-secondary: #111827;
  --color-bg-tertiary: #1F2937;
  --color-bg-elevated: #1E293B;
  --color-border: #374151;
  --color-border-hover: #4B5563;
  --color-brand: #8B5CF6;
  --color-brand-hover: #A78BFA;
  --color-brand-muted: rgba(139, 92, 246, 0.15);
  --color-accent: #06B6D4;
  --color-accent-hover: #22D3EE;
  --color-text-primary: #F9FAFB;
  --color-text-secondary: #9CA3AF;
  --color-text-tertiary: #6B7280;
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #EF4444;
}
```

**品牌色替换方案**：将 `--color-brand` 替换为以下任一色值即可改变整体风格：

| 风格 | 色值 | RGB | 效果 |
|------|------|-----|------|
| 霓虹绿 | `#10B981` | `rgb(16, 185, 129)` | 类 OpenAI 风格 |
| 霓虹蓝 | `#3B82F6` | `rgb(59, 130, 246)` | 经典科技蓝 |
| 霓虹粉 | `#EC4899` | `rgb(236, 72, 153)` | 活力感 |
| 霓虹橙 | `#F97316` | `rgb(249, 115, 22)` | 温暖感 |

---

### 方案B：明亮极简

适合技术文档、开发者平台、B2B SaaS、企业官网。

**完整色板**：

| 角色 | 色值 | RGB | CSS 变量建议 | 用途 |
|------|------|-----|-------------|------|
| 主背景 | `#FFFFFF` | `rgb(255, 255, 255)` | `--color-bg-primary` | 页面主背景 |
| 次背景 | `#FAFAFA` | `rgb(250, 250, 250)` | `--color-bg-secondary` | 交替区块 |
| 代码背景 | `#F5F5F5` | `rgb(245, 245, 245)` | `--color-bg-code` | 代码块 |
| 边框 | `#E5E7EB` | `rgb(229, 231, 235)` | `--color-border` | 分隔线 |
| 品牌色 | `#111827` | `rgb(17, 24, 39)` | `--color-brand` | 深色品牌 |
| 强调色 | `#3B82F6` | `rgb(59, 130, 246)` | `--color-accent` | 链接、按钮 |
| 主文字 | `#111827` | `rgb(17, 24, 39)` | `--color-text-primary` | 标题 |
| 次文字 | `#1F2937` | `rgb(31, 41, 55)` | `--color-text-secondary` | 正文 |
| 弱文字 | `#6B7280` | `rgb(107, 114, 128)` | `--color-text-tertiary` | 辅助 |

**CSS 变量定义**：

```css
:root {
  /* Scheme B: Bright Minimal */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #FAFAFA;
  --color-bg-code: #F5F5F5;
  --color-bg-hover: #F9FAFB;
  --color-border: #E5E7EB;
  --color-border-hover: #D1D5DB;
  --color-brand: #111827;
  --color-accent: #3B82F6;
  --color-accent-hover: #2563EB;
  --color-accent-light: rgba(59, 130, 246, 0.08);
  --color-text-primary: #111827;
  --color-text-secondary: #1F2937;
  --color-text-tertiary: #6B7280;
  --color-success: #059669;
  --color-warning: #D97706;
  --color-error: #DC2626;
}
```

---

### 方案C：柔和色调

适合教育科技、健康科技、面向女性用户的产品、需要"亲和力"的品牌。

**完整色板**：

| 角色 | 色值 | RGB | CSS 变量建议 | 用途 |
|------|------|-----|-------------|------|
| 主背景 | `#FDF2F8` | `rgb(253, 242, 248)` | `--color-bg-primary` | 粉白色基调 |
| 次背景 | `#F5F3FF` | `rgb(245, 243, 255)` | `--color-bg-secondary` | 淡紫区块 |
| 三级背景 | `#FEFCE8` | `rgb(254, 252, 232)` | `--color-bg-tertiary` | 淡黄区块 |
| 卡片背景 | `#FFFFFF` | `rgb(255, 255, 255)` | `--color-bg-card` | 内容卡片 |
| 边框 | `#E9D5FF` | `rgb(233, 213, 255)` | `--color-border` | 紫色边框 |
| 品牌色 | `#7C3AED` | `rgb(124, 58, 237)` | `--color-brand` | 柔紫色 |
| 品牌色亮 | `#8B5CF6` | `rgb(139, 92, 246)` | `--color-brand-light` | 悬停态 |
| 强调色 | `#EC4899` | `rgb(236, 72, 153)` | `--color-accent` | 柔粉色 |
| 主文字 | `#374151` | `rgb(55, 65, 81)` | `--color-text-primary` | 标题 |
| 次文字 | `#4B5563` | `rgb(75, 85, 99)` | `--color-text-secondary` | 正文 |
| 弱文字 | `#9CA3AF` | `rgb(156, 163, 175)` | `--color-text-tertiary` | 辅助 |

**CSS 变量定义**：

```css
:root {
  /* Scheme C: Soft Tones */
  --color-bg-primary: #FDF2F8;
  --color-bg-secondary: #F5F3FF;
  --color-bg-tertiary: #FEFCE8;
  --color-bg-card: #FFFFFF;
  --color-bg-hover: #FAF5FF;
  --color-border: #E9D5FF;
  --color-border-hover: #D8B4FE;
  --color-brand: #7C3AED;
  --color-brand-hover: #8B5CF6;
  --color-brand-muted: rgba(124, 58, 237, 0.1);
  --color-accent: #EC4899;
  --color-accent-hover: #F472B6;
  --color-accent-muted: rgba(236, 72, 153, 0.1);
  --color-text-primary: #374151;
  --color-text-secondary: #4B5563;
  --color-text-tertiary: #9CA3AF;
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-error: #F43F5E;
}
```

---

## 五、渐变配色系统

### 5.1 Mesh Gradient 配色规则

Mesh Gradient（网格渐变）是 2023-2025 年科技行业最流行的视觉手法。与传统的 `linear-gradient` 或 `radial-gradient` 不同，Mesh Gradient 通过多个色彩节点在二维空间中的叠加混合，创造出有机的、类似水彩或极光的视觉效果。

**实现原理**：

使用多层 `radial-gradient` 叠加，每层一个颜色锚点，配合 `blur` 滤镜实现柔和过渡。

```css
.mesh-gradient {
  /* 基础底色 */
  background-color: #F6F9FC;

  /* 多层径向渐变叠加 */
  background-image:
    radial-gradient(at 20% 20%, rgba(123, 97, 255, 0.4) 0%, transparent 50%),
    radial-gradient(at 80% 10%, rgba(255, 107, 157, 0.3) 0%, transparent 50%),
    radial-gradient(at 10% 60%, rgba(0, 210, 255, 0.3) 0%, transparent 50%),
    radial-gradient(at 80% 60%, rgba(255, 154, 86, 0.25) 0%, transparent 50%),
    radial-gradient(at 40% 90%, rgba(155, 89, 182, 0.3) 0%, transparent 50%);

  /* 可选：增加模糊让过渡更柔和 */
  filter: blur(0px);
  /* 注：blur 应用于渐变容器内的伪元素而非背景本身 */
}
```

**配色规则**：

1. **底色为白或极浅灰**：`#FFFFFF`、`#F6F9FC`、`#FAFAFA`，确保渐变色在浅底上清晰可见
2. **每个锚点使用 rgba 降低不透明度**：建议在 0.2-0.5 之间，过高的透明度会导致颜色混合后变脏
3. **色彩数量控制在 3-5 个**：太少显单调，太多则失控
4. **每个锚点的扩散范围（transparent 的位置）在 40%-60%**：太小会产生明显的"色块"感
5. **锚点位置避免均匀分布**：使用不对称布局（如 `at 20% 20%`、`at 80% 10%`）营造自然感

### 5.2 Stripe 渐变色板拆解

Stripe 的渐变系统是最成熟的 Mesh Gradient 实现，其色板拆解如下：

**四组双色渐变**：

| 渐变名称 | 起始色 | RGB | 终止色 | RGB | CSS 变量 | 应用场景 |
|---------|--------|-----|--------|-----|---------|---------|
| 紫色渐变 | `#7B61FF` | `rgb(123, 97, 255)` | `#9B59B6` | `rgb(155, 89, 182)` | `--gradient-purple` | 主要装饰 |
| 粉色渐变 | `#FF6B9D` | `rgb(255, 107, 157)` | `#E84393` | `rgb(232, 67, 147)` | `--gradient-pink` | 暖色装饰 |
| 橙色渐变 | `#FF9A56` | `rgb(255, 154, 86)` | `#FDCB6E` | `rgb(253, 203, 110)` | `--gradient-orange` | 点缀色 |
| 青色渐变 | `#00D2FF` | `rgb(0, 210, 255)` | `#0ABDE3` | `rgb(10, 189, 227)` | `--gradient-cyan` | 冷色装饰 |

**完整的 Stripe Mesh Gradient CSS**：

```css
.stripe-mesh {
  background-color: #F6F9FC;
  background-image:
    /* 紫色锚点 - 左上区域 */
    radial-gradient(at 30% 15%, rgba(123, 97, 255, 0.35) 0%, transparent 50%),
    /* 粉色锚点 - 右上区域 */
    radial-gradient(at 75% 5%, rgba(255, 107, 157, 0.3) 0%, transparent 50%),
    /* 青色锚点 - 左中区域 */
    radial-gradient(at 5% 45%, rgba(0, 210, 255, 0.3) 0%, transparent 50%),
    /* 橙色锚点 - 右中区域 */
    radial-gradient(at 85% 55%, rgba(255, 154, 86, 0.25) 0%, transparent 50%),
    /* 紫色锚点 - 左下区域 */
    radial-gradient(at 15% 85%, rgba(155, 89, 182, 0.3) 0%, transparent 50%),
    /* 黄色锚点 - 右下区域 */
    radial-gradient(at 80% 90%, rgba(253, 203, 110, 0.25) 0%, transparent 50%);
}
```

### 5.3 渐变使用禁忌

1. **禁止在文字上使用渐变背景**：渐变背景上的文字对比度难以保证，严重影响可读性。如果必须使用，确保文字有 `text-shadow` 或半透明深色遮罩
2. **禁止使用超过 3 种色相的线性渐变**：如 `linear-gradient(45deg, red, blue, green, yellow, purple)` 会产生"彩虹糖"效果，显得不专业
3. **禁止在按钮上使用 Mesh Gradient**：按钮需要清晰的视觉边界，Mesh Gradient 的模糊特性会削弱按钮的"可点击"暗示
4. **禁止在高饱和度渐变上叠加高饱和度文字**：如粉色渐变背景上的红色文字，会导致视觉"嗡嗡声"（vibration）
5. **禁止暗色背景上的 Mesh Gradient 使用高不透明度**：暗色背景上的渐变锚点透明度应控制在 0.1-0.25，否则会破坏暗色的沉浸感
6. **禁止全屏使用 Mesh Gradient 作为内容区域背景**：应限制在装饰区域（Hero 背景的分隔带、卡片装饰、页脚上方的过渡区）
7. **禁止在 Mesh Gradient 区域放置需要精确色彩识别的内容**：如数据图表、颜色选择器
8. **禁止忘记提供纯色降级方案**：对于不支持 `radial-gradient` 的环境，应提供 `background-color` 作为降级

---

## 六、色彩心理学与科技感

### 6.1 为什么暗色系 = 科技感

暗色界面与"科技感"的关联并非偶然，而是多重心理因素共同作用的结果：

**1. 电影与流行文化的影响**

从《银翼杀手》（1982）到《黑客帝国》（1999）再到《赛博朋克 2077》（2020），科幻电影中的计算机界面几乎都是暗色的。这在我们潜意识中建立了"暗色 = 未来科技"的条件反射。当我们看到一个暗色界面时，大脑会自动激活"高科技"的联想。

**2. 代码编辑器的视觉印记**

开发者是科技产品的早期采用者和核心用户。他们每天 8 小时面对暗色代码编辑器（VS Code Dark+、Terminal、Vim）。暗色界面在开发者群体中唤起的不是"恐惧"而是"熟悉"和"专业"。

**3. 聚焦效应（Vignette Effect）**

暗色背景产生类似相机暗角的聚焦效果——视觉注意力自然被吸引到亮色区域（文字、品牌色、产品截图）。对于科技产品官网来说，这种聚焦效应让核心信息更加突出。

**4. OLED 屏幕的技术加持**

现代手机和高端显示器大量采用 OLED 面板，纯黑像素完全不发光。暗色背景在这些设备上呈现出极致的对比度和"无限深"的感觉，进一步强化了科技感。

### 6.2 品牌色选择心理学

科技行业品牌色的选择呈现出明显的心理学规律：

| 色相 | 心理暗示 | 代表品牌 | 适用产品类型 |
|------|---------|---------|-------------|
| 蓝色 | 信任、专业、稳定、安全 | Vercel、腾讯、百度、Facebook、LinkedIn | 企业服务、社交、金融科技 |
| 紫色 | 创新、神秘、高端、AI | Linear、Stripe | AI 产品、设计工具、创新产品 |
| 绿色 | 成长、智能、自然、开放 | OpenAI、Spotify、WhatsApp | AI 产品、健康科技、通讯 |
| 红色 | 热情、力量、 urgency | 华为、拼多多、Netflix | 内容平台、电商、中国品牌 |
| 橙色 | 活力、温暖、友好、年轻 | 阿里、小米 | 电商平台、消费电子、生活服务 |
| 黄色 | 乐观、食物、便利 | 美团 | 生活服务、外卖、本地服务 |
| 黑色 | 极致、高端、简洁 | 字节跳动、Apple | 高端品牌、内容平台 |
| 青色 | 前沿、清新、技术 | 字节跳动、Linear | AI 产品、技术工具 |

**关键发现**：

- **国际品牌偏蓝/紫**：在统计的 12 个品牌中，6 个使用蓝色或紫色作为主品牌色（50%），反映了蓝色在西方文化中"信任"和"专业"的心理暗示
- **中国品牌更分散**：中国品牌在色彩选择上更多元化，红色、橙色、黄色、蓝色均有使用，反映了中国市场更强调"差异化"和"文化认同"
- **AI 产品偏好绿色**：OpenAI 的绿色正在成为 AI 行业的"默认色"，类似 SaaS 行业的蓝色

### 6.3 对比度与可读性科学

WCAG 2.1 标准规定了两个级别的对比度要求：

| 级别 | 正文文字（<18px） | 大文字（>=18px 或 >=14px 粗体） |
|------|-------------------|-------------------------------|
| AA（最低标准） | >= 4.5:1 | >= 3:1 |
| AAA（增强标准） | >= 7:1 | >= 4.5:1 |

**科技品牌常见色彩组合的对比度分析**：

| 组合 | 对比度 | WCAG 级别 | 评价 |
|------|--------|----------|------|
| `#FFFFFF` on `#0A0A0F` | 18.7:1 | AAA | 优秀，Linear 主背景 |
| `#5E6AD2` on `#0A0A0F` | 4.6:1 | AA | 勉强达标，Linear 品牌色 |
| `#8B8B8B` on `#0A0A0F` | 5.4:1 | AA | 达标，Linear 次文字 |
| `#555566` on `#0A0A0F` | 2.8:1 | 不达标 | Linear 弱文字，仅用于装饰性文本 |
| `#171717` on `#FFFFFF` | 16.7:1 | AAA | 优秀，Vercel 主文字 |
| `#006bff` on `#FFFFFF` | 4.5:1 | AA | 勉强达标，Vercel 强调色 |
| `#4d4d4d` on `#FFFFFF` | 7.6:1 | AAA | 优秀，Vercel 次文字 |
| `#1A1F36` on `#F6F9FC` | 15.2:1 | AAA | 优秀，Stripe 主文字 |
| `#635BFF` on `#FFFFFF` | 4.5:1 | AA | 勉强达标，Stripe 品牌蓝 |
| `#10A37F` on `#000000` | 7.5:1 | AAA | 优秀，OpenAI 品牌色 |
| `#FFB100` on `#FFFFFF` | 2.1:1 | 不达标 | 美团黄，不可用于文字 |

**关键结论**：

- 品牌色在白色/深色背景上的对比度往往只勉强达到 AA 标准（4.5:1），因此品牌色**只应用于大文字或图形元素**，不应作为正文字色
- 暗色主题下的弱文字（如 `#555566` on `#0A0A0F`）不满足 WCAG AA，应限制在装饰性文本（时间戳、标签等）上使用
- 黄色系品牌色（如美团黄 `#FFB100`）在白色背景上不满足任何 WCAG 级别，**绝对不能用于文字**

---

## 七、AI 生成配色规则

### 必须遵守（10条）

1. **必须定义 CSS 变量**：所有颜色必须通过 CSS 自定义属性（`--color-*`）引用，禁止在组件代码中硬编码色值
2. **必须提供暗色/亮色两套方案**：即使默认只展示一套，也必须在 `:root` 和 `[data-theme="dark"]` 中分别定义
3. **必须使用语义化变量名**：使用 `--color-text-primary` 而非 `--color-gray-800`，使用 `--color-brand` 而非 `--color-blue-500`
4. **必须确保主文字对比度 >= 4.5:1**：所有正文文字在对应背景上的对比度必须满足 WCAG AA 标准
5. **必须使用 60-30-10 比例**：背景色占 60%，辅助色占 30%，品牌/强调色占 10%
6. **必须包含功能色定义**：成功（`--color-success`）、警告（`--color-warning`）、错误（`--color-error`）、信息（`--color-info`）四种功能色缺一不可
7. **必须提供 hover/active/focus 状态色**：每个交互元素至少定义三种状态的颜色
8. **必须在暗色方案中避免纯黑**：使用 `#0a0a0b`、`#111827` 等带有微弱色相的深色替代 `#000000`
9. **必须测试色盲友好性**：品牌色与功能色之间在红绿色盲（Deuteranopia）视角下仍可区分
10. **必须包含品牌色的 muted/transparent 变体**：如 `rgba(99, 91, 255, 0.08)` 用于背景色块、选中态等

### 禁止事项（8条）

1. **禁止在暗色背景上使用纯白 `#FFFFFF` 作为大面积背景色块**：使用 `#F9FAFB` 或 `rgba(255,255,255,0.95)` 降低刺眼感
2. **禁止品牌色超过 2 种**：一套配色方案中只允许 1 个品牌色 + 1 个强调色，严禁多品牌色共存
3. **禁止在渐变中使用超过 3 种色相**：渐变的色相跨度应控制在 60 度以内（色轮上相邻的 1/6）
4. **禁止在同一个页面中混用暖色和冷色渐变**：如紫-粉渐变和青-蓝渐变不应出现在同一视野内
5. **禁止使用 `opacity` 属性改变文字颜色**：使用 `rgba()` 或预计算的色值替代，因为 `opacity` 会影响所有子元素
6. **禁止在灰色系统中混入色相倾向但不统一**：如果灰度带蓝紫倾向（如 Linear），所有灰度层级必须保持一致的色相方向
7. **禁止忽略 `prefers-color-scheme` 媒体查询**：必须尊重用户的系统偏好设置
8. **禁止在深色背景上使用低饱和度的蓝色文字**：如 `#6688AA` on `#0A0A0F` 的对比度仅有 3.2:1，不满足 WCAG AA

### 推荐色值速查表

以下色值经过 WCAG AA 对比度验证，可直接用于对应角色：

**背景色**：

| 色值 | RGB | CSS 变量建议 | 适用场景 | 与白色文字对比度 |
|------|-----|-------------|---------|----------------|
| `#0a0a0b` | `rgb(10, 10, 11)` | `--color-bg-dark-primary` | 暗色主背景 | 19.3:1 |
| `#111827` | `rgb(17, 24, 39)` | `--color-bg-dark-secondary` | 暗色次背景 | 16.1:1 |
| `#1F2937` | `rgb(31, 41, 55)` | `--color-bg-dark-tertiary` | 暗色三级背景 | 12.4:1 |
| `#FFFFFF` | `rgb(255, 255, 255)` | `--color-bg-light-primary` | 亮色主背景 | - |
| `#F9FAFB` | `rgb(249, 250, 251)` | `--color-bg-light-secondary` | 亮色次背景 | - |
| `#F3F4F6` | `rgb(243, 244, 246)` | `--color-bg-light-tertiary` | 亮色三级背景 | - |

**文字色**：

| 色值 | RGB | CSS 变量建议 | 用途 | 在 `#0a0a0b` 上对比度 | 在 `#FFFFFF` 上对比度 |
|------|-----|-------------|------|---------------------|---------------------|
| `#F9FAFB` | `rgb(249, 250, 251)` | `--color-text-on-dark` | 暗色背景主文字 | 19.0:1 | - |
| `#D1D5DB` | `rgb(209, 213, 219)` | `--color-text-on-dark-secondary` | 暗色背景次文字 | 11.8:1 | - |
| `#9CA3AF` | `rgb(156, 163, 175)` | `--color-text-on-dark-tertiary` | 暗色背景弱文字 | 5.9:1 | - |
| `#111827` | `rgb(17, 24, 39)` | `--color-text-on-light` | 亮色背景主文字 | - | 16.1:1 |
| `#374151` | `rgb(55, 65, 81)` | `--color-text-on-light-secondary` | 亮色背景次文字 | - | 7.5:1 |
| `#6B7280` | `rgb(107, 114, 128)` | `--color-text-on-light-tertiary` | 亮色背景弱文字 | - | 4.6:1 |

**品牌色（已在白色背景上验证 >= 4.5:1）**：

| 色值 | RGB | CSS 变量建议 | 风格 | 在白色上对比度 |
|------|-----|-------------|------|--------------|
| `#5E6AD2` | `rgb(94, 106, 210)` | `--color-brand-indigo` | 紫蓝（Linear 风格） | 4.6:1 |
| `#006bff` | `rgb(0, 107, 255)` | `--color-brand-blue` | 蓝（Vercel 风格） | 4.5:1 |
| `#635BFF` | `rgb(99, 91, 255)` | `--color-brand-violet` | 紫（Stripe 风格） | 4.5:1 |
| `#10A37F` | `rgb(16, 163, 127)` | `--color-brand-green` | 绿（OpenAI 风格） | 3.6:1 |
| `#CF0A2C` | `rgb(207, 10, 44)` | `--color-brand-red` | 红（华为风格） | 5.5:1 |
| `#FF6A00` | `rgb(255, 106, 0)` | `--color-brand-orange` | 橙（阿里风格） | 3.0:1 |
| `#1677FF` | `rgb(22, 119, 255)` | `--color-brand-sky` | 天蓝（腾讯风格） | 4.6:1 |

**注**：对比度 < 4.5:1 的品牌色（绿色 `#10A37F`、橙色 `#FF6A00`）不应直接用于白色背景上的小文字，但可用于大文字（>=18px）、图标、按钮背景等元素。

**功能色**：

| 角色 | 色值 | RGB | CSS 变量建议 | 在白色上对比度 | 在 `#0a0a0b` 上对比度 |
|------|------|-----|-------------|--------------|---------------------|
| 成功 | `#10B981` | `rgb(16, 185, 129)` | `--color-success` | 3.3:1 | 6.3:1 |
| 警告 | `#F59E0B` | `rgb(245, 158, 11)` | `--color-warning` | 2.1:1 | 9.8:1 |
| 错误 | `#EF4444` | `rgb(239, 68, 68)` | `--color-error` | 3.9:1 | 5.3:1 |
| 信息 | `#3B82F6` | `rgb(59, 130, 246)` | `--color-info` | 3.4:1 | 5.1:1 |

**注**：功能色主要用于图标、背景色块、状态指示器，不建议直接用于文字。如需在功能色背景上放置白色文字，推荐使用功能色的深色变体（如 `#059669` for success）。

**边框色**：

| 色值 | RGB | CSS 变量建议 | 适用背景 |
|------|-----|-------------|---------|
| `#374151` | `rgb(55, 65, 81)` | `--color-border-dark` | 暗色背景 |
| `#4B5563` | `rgb(75, 85, 99)` | `--color-border-dark-hover` | 暗色背景悬停 |
| `#E5E7EB` | `rgb(229, 231, 235)` | `--color-border-light` | 亮色背景 |
| `#D1D5DB` | `rgb(209, 213, 219)` | `--color-border-light-hover` | 亮色背景悬停 |

---

> **文档说明**：本文档基于 2024-2025 年各品牌官网实际 CSS 色值拆解整理。色值可能随品牌视觉升级而变化，建议以各品牌官方设计系统（Design System）为准。