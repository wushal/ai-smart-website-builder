# AI Native Website Architect Skill

一个强大的 AI Skill，能够通过一句自然语言描述，自动生成完整、高质量、多语言的企业官网代码。

## ✨ 核心特性

- **🎯 一句话生成官网**: 输入需求，自动生成 React + TypeScript + TailwindCSS 项目
- **🏭 多行业适配**: 支持科技、医疗、电商、跨境电商四大行业
- **🌍 多语言支持**: 内置多语言切换机制
- **🎨 双主题系统**: 支持深浅模式切换
- **💎 动效设计**: 集成 Framer Motion，提供专业级交互体验
- **🧠 反AI风格**: 内置反AI生成规则，避免千篇一律的视觉效果
- **📱 响应式**: 移动端优先设计，完美适配各种屏幕
- **🔌 AI 客服集成**: 可选集成 AI 客服组件

## 🚀 快速开始

### 1. 安装 Skill

#### 方式一：手动安装

```bash
# 克隆仓库
git clone https://github.com/yourname/ai-smart-website-builder.git

# 将 skill 目录复制到 TRAE skills 目录
cp -r ai-smart-website-builder ~/.trae-cn/skills/
```

#### 方式二：在对话中引用

直接在 TRAE 对话框中引用 `SKILL.md` 文件路径：

```
@/path/to/ai-smart-website-builder/SKILL.md
```

### 2. 使用示例

在 TRAE 中激活 Skill 后，直接用自然语言描述你的需求：

```
帮我生成一个AI客服SaaS官网
```

```
需要一个高端牙科诊所网站，要有预约功能
```

```
我想要一个有机护肤品电商网站，风格简约清新
```

```
生成一个跨境DTC品牌站，主打环保生活方式
```

## 🎯 反 AI 风格设计理念

本 Skill 的核心优势在于**拒绝平庸的 AI 生成风格**。我们建立了一套完整的反 AI 检测机制：

### ❌ 我们避免的 AI 常见问题

- **视觉同质化**: 避免所有网站都使用相同的紫蓝渐变
- **万能色滥用**: 不使用 `#8B5CF6`、`#06B6D4`、`#667eea` 等 AI 常用色
- **动效泛滥**: 不为每个元素添加相同的 fadeInUp 动画
- **模板化布局**: 不使用固定的"居中 Hero + 三列 Features"模式
- **空泛文案**: 拒绝 "赋能"、"革命"、"智能" 等空洞词汇

### ✅ 我们追求的行业差异化

| 行业 | 视觉语言 | 动效风格 | 色彩基调 |
|------|---------|---------|---------|
| **科技** | 暗色、未来感、线条感 | 克制、科技感 | 深色背景 + 品牌色点缀 |
| **医疗** | 明亮、专业、清新 | 温和、专业 | 白色/浅蓝 + 专业医疗色 |
| **电商** | 鲜艳、冲击力、紧迫感 | 动感、转化导向 | 品牌主色 + 高对比色 |
| **跨境** | 生活方式、品牌感、全球化 | 流畅、故事性 | 柔和色系 + 全球视野 |

## 📸 示例展示

不同行业生成的网站具有截然不同的视觉风格，充分展现行业差异化设计：

### 科技行业 - AI 客服 SaaS 官网

![科技行业示例](screenshots/technology-example.jpg)

### 医疗行业 - 牙科诊所网站

![医疗行业示例](screenshots/medical-example.jpg)

### 电商行业 - 有机护肤品商店

![电商行业示例](screenshots/ecommerce-example.jpg)

### 跨境电商 - DTC 生活方式品牌

![跨境电商示例](screenshots/cross-border-example.jpg)

---

## 🏭 支持的行业

| 行业 | 特点 | 适合场景 |
|------|------|---------|
| **科技 (Technology)** | 暗色主题、未来感、数据驱动 | SaaS 产品、AI 工具、B2B 服务 |
| **医疗 (Medical)** | 明亮、专业、信任感 | 诊所、医院、医疗器械 |
| **电商 (Ecommerce)** | 高转化、视觉冲击力、紧迫感 | 零售、美妆、服装 |
| **跨境 (Cross-Border)** | 品牌故事、生活方式、全球化 | DTC 品牌、国际贸易 |

## 📁 项目结构

```
ai-smart-website-builder/
├── SKILL.md                      # 核心 Skill 入口文件
├── skill-meta.yaml               # Skill 元数据
├── README.md                     # 项目说明
│
├── config/                       # 配置文件
│   ├── industry-map.yaml         # 行业映射
│   ├── tech-stack.yaml           # 技术栈配置
│   └── generation-rule.yaml      # 生成规则
│
├── design-system/                # 设计系统
│   ├── color-system/             # 色彩系统
│   ├── typography/               # 字体规范
│   ├── motion-system/            # 动效规范
│   ├── layout-system/            # 布局系统
│   ├── industries/               # 行业专属设计
│   │   ├── technology/
│   │   ├── medical/
│   │   ├── ecommerce/
│   │   └── cross-border/
│   └── quality-check/            # 质量检测规则
│       ├── ai-style-check.md     # AI 风格检测
│       └── ui-quality-check.md   # UI 质量检查
│
├── generators/                   # 生成器
│   ├── analyze-request.md        # 需求分析
│   ├── select-template.md        # 模板选择
│   ├── select-component.md       # 组件选择
│   └── generate-code.md          # 代码生成
│
├── prompts/                      # 提示词模板
│   ├── copywriting.md            # 文案生成
│   ├── image-generation.md       # 图片生成
│   ├── ui-generation.md          # UI 生成
│   └── website-analysis.md       # 网站分析
│
├── templates/                    # 行业模板
│   ├── technology-template/
│   ├── medical-template/
│   ├── ecommerce-template/
│   └── cross-border-template/
│
├── themes/                       # 行业主题
│   ├── technology.ts
│   ├── medical.ts
│   ├── ecommerce.ts
│   └── cross-border.ts
│
├── examples/                     # 示例
│   ├── technology-example.md
│   ├── medical-example.md
│   ├── ecommerce-example.md
│   └── cross-border-example.md
│
├── references/                   # 设计参考
│   ├── technology.md
│   ├── medical.md
│   ├── ecommerce.md
│   └── cross-border.md
│
└── react-starter/                # React 项目模板
    ├── src/
    ├── components/
    ├── sections/
    ├── pages/
    ├── services/
    ├── styles/
    └── README.md
```

## 🛠️ 生成的技术栈

- **框架**: React 18 + TypeScript
- **构建**: Vite
- **样式**: TailwindCSS
- **动效**: Framer Motion
- **图标**: Lucide React
- **状态管理**: Zustand
- **多语言**: react-i18next
- **路由**: React Router

## 📖 详细文档

- [核心 SKILL 规则](SKILL.md)
- [React 项目模板说明](react-starter/README.md)
- [设计系统总览](design-system/README.md)
- [反 AI 风格检测规则](design-system/quality-check/ai-style-check.md)

## 🤝 贡献指南

欢迎贡献！请查看 [CONTRIBUTING.md](CONTRIBUTING.md) 了解详情。

## 📄 许可证

本项目基于 [MIT License](LICENSE) 开源。

## 🙏 致谢

- Linear 设计系统参考
- Framer Motion 动画库
- TailwindCSS 样式框架

---

**让 AI 创造更好的网站体验** 🚀