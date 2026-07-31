# 电商行业（平台型）官网色彩搭配拆解

> 基于 Amazon、淘宝、京东、拼多多、Shopify、Etsy 等国内外电商平台的真实色值拆解。

---

## 一、行业色彩特征总览

电商平台的色彩设计与其他行业有本质区别——一切以**转化为核心目标**。配色不是单纯的美学表达，而是行为引导工具。具体体现为以下四大特征：

### 1. 转化导向

电商配色体系围绕"点击-浏览-加购-支付"的完整链路设计。从首页到商品详情页、从搜索结果到购物车，每一个关键触点都有对应的色彩策略。主色调建立品牌认知，辅助色引导操作行为，促销色制造紧迫感。整套配色体系服务于一个终极目标：**提高转化率**。

### 2. 促销色醒目

电商页面中，促销色彩永远是最抢眼的层级。红色用于划线价与促销价对比，橙色用于 CTA 按钮和限时标签，黄色用于优惠券和闪购专区。这些高饱和度暖色在视觉层级中始终处于最高优先级，确保用户第一眼就能捕捉到价格优势信息。

### 3. 信任色打底

电商平台需要建立用户信任感。国际平台普遍选择深蓝、深灰作为 Header 和导航栏底色（如 Amazon 的 #232F3E），中国平台则通过红色传递"正品保障"的品牌承诺（如京东的 #E1251B）。信任色通常出现在页面的"结构性"区域——顶部导航、底部信息栏、品牌 Logo 区。

### 4. 中外差异明显

- **国际平台**：以冷色（蓝/深蓝/深灰）为结构性底色，暖色（橙/黄/红）作为点缀和行动号召。整体偏理性、克制，强调"发现-决策"的购物路径。
- **中国平台**：以暖色（红/橙/金）为主导，页面充满活力与热闹感。色彩饱和度高、信息密度大，强调"刺激-冲动"的购物氛围。

---

## 二、国际电商平台配色拆解

### 2.1 Amazon（深蓝+橙色信任组合）

Amazon 是全球最大的电商平台，其配色体系被广泛研究并成为行业标准参考。

**品牌色板表**

| 色彩角色 | 色值 | RGB | 用途说明 | CSS 变量名建议 |
|---------|------|-----|---------|--------------|
| 主色（深蓝） | #232F3E | rgb(35, 47, 62) | 顶部导航栏、搜索栏背景、页脚背景 | `--amazon-primary` |
| 辅助色（橙色） | #FF9900 | rgb(255, 153, 0) | CTA 按钮、Add to Cart、促销标签、Logo 点缀 | `--amazon-accent` |
| 浅蓝灰 | #37475A | rgb(55, 71, 90) | 次级导航背景、二级菜单 | `--amazon-secondary` |
| 链接蓝 | #007185 | rgb(0, 113, 133) | 文字链接、可点击元素 | `--amazon-link` |
| 链接蓝 Hover | #C7511F | rgb(199, 81, 31) | 链接悬停态 | `--amazon-link-hover` |
| 促销红 | #CC0C39 | rgb(204, 12, 57) | Deal 标签、折扣标识 | `--amazon-deal` |
| 背景白 | #FFFFFF | rgb(255, 255, 255) | 主内容区背景 | `--amazon-bg` |
| 浅灰背景 | #EAEDED | rgb(234, 237, 237) | 卡片分隔背景、辅助区域 | `--amazon-bg-secondary` |
| 深灰文字 | #0F1111 | rgb(15, 17, 17) | 主标题文字 | `--amazon-text-primary` |
| 中灰文字 | #565959 | rgb(86, 89, 89) | 正文文字、描述 | `--amazon-text-secondary` |
| 星级黄 | #DE7921 | rgb(222, 121, 33) | 评分星级 | `--amazon-star` |

**CSS 变量定义**

```css
:root {
  --amazon-primary: #232F3E;
  --amazon-accent: #FF9900;
  --amazon-secondary: #37475A;
  --amazon-link: #007185;
  --amazon-link-hover: #C7511F;
  --amazon-deal: #CC0C39;
  --amazon-bg: #FFFFFF;
  --amazon-bg-secondary: #EAEDED;
  --amazon-text-primary: #0F1111;
  --amazon-text-secondary: #565959;
  --amazon-star: #DE7921;
}
```

**配色策略分析**

Amazon 的配色逻辑清晰且高效：深蓝（#232F3E）作为"框架色"包裹整个页面顶部和底部，传递专业、可信赖的品牌调性；橙色（#FF9900）作为"行动色"出现在所有需要用户点击的地方——Add to Cart 按钮、Buy Now 按钮、促销标签。这种深蓝+橙色的组合在色彩心理学上形成了"信任+行动"的双重驱动。值得注意的是，Amazon 的链接色使用的是青蓝色（#007185）而非纯蓝，这在大量文字信息中提供了更好的可读性和品牌辨识度。促销场景中，Amazon 使用特定的红色（#CC0C39）而非纯红，与其整体色调保持和谐。

---

### 2.2 Walmart（蓝+黄活力组合）

Walmart 作为美国最大的实体零售转型电商平台，其配色传承了线下品牌基因。

**品牌色板表**

| 色彩角色 | 色值 | RGB | 用途说明 | CSS 变量名建议 |
|---------|------|-----|---------|--------------|
| 主色（蓝色） | #0071DC | rgb(0, 113, 220) | Header 背景、品牌标识、主按钮 | `--walmart-primary` |
| 辅助色（黄色） | #FFC220 | rgb(255, 194, 32) | 火花元素、价格标签、促销区 | `--walmart-accent` |
| 深蓝 | #004F9A | rgb(0, 79, 154) | 深色变体、Hover 状态 | `--walmart-primary-dark` |
| 浅蓝 | #E6F1FC | rgb(230, 241, 252) | 浅色背景、选中态 | `--walmart-primary-light` |
| 促销红 | #E31837 | rgb(227, 24, 55) | Rollback 标签、清仓标识 | `--walmart-deal` |
| 背景白 | #FFFFFF | rgb(255, 255, 255) | 主内容区背景 | `--walmart-bg` |
| 浅灰 | #F2F4F5 | rgb(242, 244, 245) | 辅助背景、分隔区 | `--walmart-bg-secondary` |
| 深灰文字 | #1A1A1A | rgb(26, 26, 26) | 主文字 | `--walmart-text-primary` |
| 中灰文字 | #5C5E5F | rgb(92, 94, 95) | 次级文字 | `--walmart-text-secondary` |

**CSS 变量定义**

```css
:root {
  --walmart-primary: #0071DC;
  --walmart-accent: #FFC220;
  --walmart-primary-dark: #004F9A;
  --walmart-primary-light: #E6F1FC;
  --walmart-deal: #E31837;
  --walmart-bg: #FFFFFF;
  --walmart-bg-secondary: #F2F4F5;
  --walmart-text-primary: #1A1A1A;
  --walmart-text-secondary: #5C5E5F;
}
```

**配色策略分析**

Walmart 的蓝+黄组合是经典的"信任+活力"配色。蓝色（#0071DC）延续了其线下门店的品牌基因，传递低价可靠的品牌承诺；黄色火花（#FFC220）是 Walmart 独有的品牌超级符号，在线上被灵活运用在价格标签、促销区域和装饰元素中。与 Amazon 不同，Walmart 的主色是明亮的蓝色而非深蓝，这使其页面整体感觉更加开放、亲切，符合其"人人可负担"的品牌定位。在促销场景中，Walmart 使用红色（#E31837）标注 Rollback（降价）商品，形成蓝色常态 + 黄色品牌 + 红色促销的三色体系。

---

### 2.3 Etsy（橙色手工艺温暖）

Etsy 是全球最大的手工艺品电商平台，其配色传递手工、温暖、个性化的品牌调性。

**品牌色板表**

| 色彩角色 | 色值 | RGB | 用途说明 | CSS 变量名建议 |
|---------|------|-----|---------|--------------|
| 主色（橙色） | #F56400 | rgb(245, 100, 0) | Logo、CTA 按钮、品牌标识 | `--etsy-primary` |
| 暖白 | #FAFAFA | rgb(250, 250, 250) | 页面背景、卡片背景 | `--etsy-bg` |
| 深棕 | #3D2C2E | rgb(61, 44, 46) | 页脚、深色区域 | `--etsy-footer` |
| 中灰 | #595959 | rgb(89, 89, 89) | 次级文字 | `--etsy-text-secondary` |
| 深色文字 | #222222 | rgb(34, 34, 34) | 主文字 | `--etsy-text-primary` |
| 浅橙 | #FFF0E6 | rgb(255, 240, 230) | 选中态、悬停态背景 | `--etsy-primary-light` |
| 促销红 | #D4442A | rgb(212, 68, 42) | Sale 标签 | `--etsy-deal` |
| 绿色 | #2E8B57 | rgb(46, 139, 87) | Bestseller 标签 | `--etsy-bestseller` |

**CSS 变量定义**

```css
:root {
  --etsy-primary: #F56400;
  --etsy-bg: #FAFAFA;
  --etsy-footer: #3D2C2E;
  --etsy-text-secondary: #595959;
  --etsy-text-primary: #222222;
  --etsy-primary-light: #FFF0E6;
  --etsy-deal: #D4442A;
  --etsy-bestseller: #2E8B57;
}
```

**配色策略分析**

Etsy 的橙色（#F56400）比 Amazon 的橙色更偏红、更温暖，传递出手工艺品的温度感。暖白背景（#FAFAFA）而非纯白，营造出纸张般的手工质感。深棕色（#3D2C2E）用于页脚，像木质底座一样给页面"收尾"，整体形成"暖橙-暖白-深棕"的温暖色系。Etsy 的促销色使用的是偏暗的红橙色（#D4442A），而非高饱和度的纯红，这与其"精致手作"的品牌调性保持一致——即使是促销，也要保持优雅。

---

### 2.4 Shopify（绿色增长/SaaS 营销）

Shopify 是全球最大的电商建站平台，其配色体现 SaaS 产品的现代感和增长导向。

**品牌色板表**

| 色彩角色 | 色值 | RGB | 用途说明 | CSS 变量名建议 |
|---------|------|-----|---------|--------------|
| 主色（绿色） | #96BF48 | rgb(150, 191, 72) | Logo、CTA 按钮、品牌标识 | `--shopify-primary` |
| 深绿 | #557A22 | rgb(85, 122, 34) | 按钮悬停态、深色变体 | `--shopify-primary-dark` |
| 浅绿 | #DEF7EC | rgb(222, 247, 236) | 浅色背景、标签 | `--shopify-primary-light` |
| 深灰 | #202223 | rgb(32, 34, 35) | 深色背景区域、标题 | `--shopify-dark` |
| 紫色 | #7B61FF | rgb(123, 97, 255) | 强调色、功能标签 | `--shopify-purple` |
| 蓝色 | #4A90D9 | rgb(74, 144, 217) | 链接、辅助信息 | `--shopify-blue` |
| 橙色 | #F49352 | rgb(244, 147, 82) | 警告、次要强调 | `--shopify-orange` |
| 背景白 | #FFFFFF | rgb(255, 255, 255) | 主内容区背景 | `--shopify-bg` |
| 浅灰 | #F6F6F7 | rgb(246, 246, 247) | 辅助背景 | `--shopify-bg-secondary` |
| 中灰文字 | #6D7175 | rgb(109, 113, 117) | 次级文字 | `--shopify-text-secondary` |

**CSS 变量定义**

```css
:root {
  --shopify-primary: #96BF48;
  --shopify-primary-dark: #557A22;
  --shopify-primary-light: #DEF7EC;
  --shopify-dark: #202223;
  --shopify-purple: #7B61FF;
  --shopify-blue: #4A90D9;
  --shopify-orange: #F49352;
  --shopify-bg: #FFFFFF;
  --shopify-bg-secondary: #F6F6F7;
  --shopify-text-secondary: #6D7175;
}
```

**配色策略分析**

Shopify 的绿色（#96BF48）是一个偏黄绿的"活泼绿"，传递增长、新生、繁荣的商业寓意。与其他电商平台不同，Shopify 面向的是商家而非消费者，因此其配色更加"产品化"——使用了紫色、蓝色、橙色等多色辅助体系来区分不同功能模块。深色区域（#202223）用于产品展示区的对比背景，绿色 CTA 按钮在深色背景上格外醒目。整体配色传递"专业但不沉闷、现代但有温度"的 SaaS 产品调性。

---

### 2.5 Shopee（橙红东南亚活力）

Shopee 是东南亚及台湾地区领先的电商平台，其配色极具热带活力。

**品牌色板表**

| 色彩角色 | 色值 | RGB | 用途说明 | CSS 变量名建议 |
|---------|------|-----|---------|--------------|
| 主色（橙红） | #EE4D2D | rgb(238, 77, 45) | Logo、Header、CTA 按钮 | `--shopee-primary` |
| 深橙红 | #D73211 | rgb(215, 50, 17) | 按钮悬停态、深色变体 | `--shopee-primary-dark` |
| 浅橙 | #FFF0ED | rgb(255, 240, 237) | 浅色背景、选中态 | `--shopee-primary-light` |
| 橙黄 | #F7572D | rgb(247, 87, 45) | 渐变辅助色 | `--shopee-gradient` |
| 背景白 | #FFFFFF | rgb(255, 255, 255) | 主内容区背景 | `--shopee-bg` |
| 浅灰 | #F5F5F5 | rgb(245, 245, 245) | 辅助背景 | `--shopee-bg-secondary` |
| 深灰文字 | #222222 | rgb(34, 34, 34) | 主文字 | `--shopee-text-primary` |
| 中灰文字 | #757575 | rgb(117, 117, 117) | 次级文字 | `--shopee-text-secondary` |
| 金色 | #FFBF00 | rgb(255, 191, 0) | 评分星级、金币元素 | `--shopee-gold` |
| 渐变红 | #F53D2D | rgb(245, 61, 45) | 渐变起始色 | `--shopee-gradient-start` |

**CSS 变量定义**

```css
:root {
  --shopee-primary: #EE4D2D;
  --shopee-primary-dark: #D73211;
  --shopee-primary-light: #FFF0ED;
  --shopee-gradient: #F7572D;
  --shopee-bg: #FFFFFF;
  --shopee-bg-secondary: #F5F5F5;
  --shopee-text-primary: #222222;
  --shopee-text-secondary: #757575;
  --shopee-gold: #FFBF00;
  --shopee-gradient-start: #F53D2D;
}
```

**配色策略分析**

Shopee 的橙红色（#EE4D2D）是一个饱和度极高的暖色，在东南亚热带气候的文化语境中传递热情、活力、热闹的购物氛围。与中国的红色系电商不同，Shopee 选择橙红而非纯红，在保持活力的同时减少了一些"紧迫感"。Shopee 的大量运营活动使用渐变效果（从 #F53D2D 到 #EE4D2D），增加视觉层次感。金色（#FFBF00）用于 Shopee Coins（虾币）等游戏化元素，增强用户的平台粘性。

---

### 2.6 Mercado Libre（亮黄拉美热情）

Mercado Libre 是拉丁美洲最大的电商平台，其亮黄色品牌色极具辨识度。

**品牌色板表**

| 色彩角色 | 色值 | RGB | 用途说明 | CSS 变量名建议 |
|---------|------|-----|---------|--------------|
| 主色（亮黄） | #FFE600 | rgb(255, 230, 0) | Logo、品牌标识、核心元素 | `--meli-primary` |
| 深蓝 | #2D3277 | rgb(45, 50, 119) | Header 背景、导航栏 | `--meli-dark` |
| 浅黄 | #FFF9E6 | rgb(255, 249, 230) | 浅色背景、悬停态 | `--meli-primary-light` |
| 绿色 | #00A650 | rgb(0, 166, 80) | 成功状态、环保标签 | `--meli-green` |
| 蓝色 | #3483FA | rgb(52, 131, 250) | 链接、辅助按钮 | `--meli-blue` |
| 促销红 | #F73E3E | rgb(247, 62, 62) | 促销标签、折扣 | `--meli-deal` |
| 背景白 | #FFFFFF | rgb(255, 255, 255) | 主内容区背景 | `--meli-bg` |
| 浅灰 | #EEEEEE | rgb(238, 238, 238) | 辅助背景 | `--meli-bg-secondary` |
| 深灰文字 | #333333 | rgb(51, 51, 51) | 主文字 | `--meli-text-primary` |
| 中灰文字 | #666666 | rgb(102, 102, 102) | 次级文字 | `--meli-text-secondary` |

**CSS 变量定义**

```css
:root {
  --meli-primary: #FFE600;
  --meli-dark: #2D3277;
  --meli-primary-light: #FFF9E6;
  --meli-green: #00A650;
  --meli-blue: #3483FA;
  --meli-deal: #F73E3E;
  --meli-bg: #FFFFFF;
  --meli-bg-secondary: #EEEEEE;
  --meli-text-primary: #333333;
  --meli-text-secondary: #666666;
}
```

**配色策略分析**

Mercado Libre 的配色是"黄+深蓝"的独特组合。亮黄色（#FFE600）作为品牌主色出现在 Logo 和核心品牌元素中，传递拉美市场的热情与活力；深蓝（#2D3277）作为 Header 背景色，为大量商品信息提供稳定的"框架"。这种"黄上蓝下"的配色在电商行业中非常罕见——黄色通常是点缀色而非主色，但 Mercado Libre 成功地让亮黄色成为了其最强烈的品牌记忆点。促销场景中使用的蓝色（#3483FA）按钮，在黄色背景上形成互补色对比，极为醒目。

---

### 2.7 Coupang（蓝+红韩国配送）

Coupang 是韩国最大的电商平台，以"火箭配送"闻名，配色体现速度与可靠。

**品牌色板表**

| 色彩角色 | 色值 | RGB | 用途说明 | CSS 变量名建议 |
|---------|------|-----|---------|--------------|
| 主色（蓝色） | #2D5AE0 | rgb(45, 90, 224) | Header、Logo、主按钮 | `--coupang-primary` |
| 深蓝 | #1A3CA0 | rgb(26, 60, 160) | 按钮悬停态 | `--coupang-primary-dark` |
| 浅蓝 | #EBF0FF | rgb(235, 240, 255) | 浅色背景、标签 | `--coupang-primary-light` |
| 红色 | #E74C3C | rgb(231, 76, 60) | 火箭标识、促销标签 | `--coupang-red` |
| 橙色 | #F39C12 | rgb(243, 156, 18) | Rocket Delivery 标识 | `--coupang-orange` |
| 背景白 | #FFFFFF | rgb(255, 255, 255) | 主内容区背景 | `--coupang-bg` |
| 浅灰 | #F7F7F7 | rgb(247, 247, 247) | 辅助背景 | `--coupang-bg-secondary` |
| 深灰文字 | #191919 | rgb(25, 25, 25) | 主文字 | `--coupang-text-primary` |
| 中灰文字 | #6B7280 | rgb(107, 114, 128) | 次级文字 | `--coupang-text-secondary` |

**CSS 变量定义**

```css
:root {
  --coupang-primary: #2D5AE0;
  --coupang-primary-dark: #1A3CA0;
  --coupang-primary-light: #EBF0FF;
  --coupang-red: #E74C3C;
  --coupang-orange: #F39C12;
  --coupang-bg: #FFFFFF;
  --coupang-bg-secondary: #F7F7F7;
  --coupang-text-primary: #191919;
  --coupang-text-secondary: #6B7280;
}
```

**配色策略分析**

Coupang 的蓝色（#2D5AE0）是一个偏亮、偏紫的蓝色，比 Walmart 的蓝更鲜艳，传递科技感和速度感。红色（#E74C3C）配合橙色（#F39C12）用于"Rocket Delivery"火箭配送标识，在蓝色主调中形成强烈的暖色点缀，暗示"快速、火热"的配送体验。整体配色简洁明快，符合韩国市场偏好干净、现代的视觉风格。

---

### 2.8 Target（红色品牌标识）

Target 是美国知名零售商，其红色 Bullseye 标识是全球最具辨识度的品牌符号之一。

**品牌色板表**

| 色彩角色 | 色值 | RGB | 用途说明 | CSS 变量名建议 |
|---------|------|-----|---------|--------------|
| 主色（红色） | #CC0000 | rgb(204, 0, 0) | Logo Bullseye、品牌标识、CTA | `--target-primary` |
| 深红 | #A80000 | rgb(168, 0, 0) | 按钮悬停态、深色变体 | `--target-primary-dark` |
| 浅红 | #FFF0F0 | rgb(255, 240, 240) | 浅色背景、选中态 | `--target-primary-light` |
| 背景白 | #FFFFFF | rgb(255, 255, 255) | 主内容区背景 | `--target-bg` |
| 浅灰 | #F7F7F7 | rgb(247, 247, 247) | 辅助背景 | `--target-bg-secondary` |
| 深灰 | #333333 | rgb(51, 51, 51) | 导航文字、深色元素 | `--target-dark` |
| 深灰文字 | #333333 | rgb(51, 51, 51) | 主文字 | `--target-text-primary` |
| 中灰文字 | #767676 | rgb(118, 118, 118) | 次级文字 | `--target-text-secondary` |

**CSS 变量定义**

```css
:root {
  --target-primary: #CC0000;
  --target-primary-dark: #A80000;
  --target-primary-light: #FFF0F0;
  --target-bg: #FFFFFF;
  --target-bg-secondary: #F7F7F7;
  --target-dark: #333333;
  --target-text-primary: #333333;
  --target-text-secondary: #767676;
}
```

**配色策略分析**

Target 是国际平台中少有的以纯红色为主色的电商。其红色（#CC0000）直接来源于 Bullseye 靶心 Logo，是品牌标识的视觉延伸。与中国的红色电商不同，Target 的红色使用非常克制——页面主体大面积留白，红色仅出现在 Logo、关键按钮和少量装饰元素上。这种"少即是多"的策略使红色更加醒目，体现了成熟品牌的配色自信。

---

## 三、中国电商平台配色拆解

### 3.1 淘宝（橙色活力）

淘宝是中国最大的 C2C 电商平台，橙色是其最核心的品牌标识色。

**品牌色板表**

| 色彩角色 | 色值 | RGB | 用途说明 | CSS 变量名建议 |
|---------|------|-----|---------|--------------|
| 主色（橙色） | #FF5000 | rgb(255, 80, 0) | Logo、搜索按钮、CTA、促销标签 | `--taobao-primary` |
| 辅助色（红色） | #FF2D00 | rgb(255, 45, 0) | 热门标签、促销强化 | `--taobao-red` |
| 深橙 | #E64800 | rgb(230, 72, 0) | 按钮悬停态 | `--taobao-primary-dark` |
| 浅橙 | #FFF4EB | rgb(255, 244, 235) | 选中态背景 | `--taobao-primary-light` |
| 金色 | #FFAC00 | rgb(255, 172, 0) | 金牌卖家、VIP 标识 | `--taobao-gold` |
| 背景白 | #FFFFFF | rgb(255, 255, 255) | 主内容区背景 | `--taobao-bg` |
| 浅灰 | #F5F5F5 | rgb(245, 245, 245) | 辅助背景 | `--taobao-bg-secondary` |
| 深灰文字 | #333333 | rgb(51, 51, 51) | 主文字 | `--taobao-text-primary` |
| 中灰文字 | #999999 | rgb(153, 153, 153) | 次级文字 | `--taobao-text-secondary` |
| 促销价红 | #FF0036 | rgb(255, 0, 54) | 促销价格文字 | `--taobao-price-deal` |

**CSS 变量定义**

```css
:root {
  --taobao-primary: #FF5000;
  --taobao-red: #FF2D00;
  --taobao-primary-dark: #E64800;
  --taobao-primary-light: #FFF4EB;
  --taobao-gold: #FFAC00;
  --taobao-bg: #FFFFFF;
  --taobao-bg-secondary: #F5F5F5;
  --taobao-text-primary: #333333;
  --taobao-text-secondary: #999999;
  --taobao-price-deal: #FF0036;
}
```

**配色策略分析**

淘宝的橙色（#FF5000）是一个高饱和度的纯橙色，传递热闹、活力、购物欲的品牌感受。与 Amazon 的深蓝框架不同，淘宝的页面顶部直接使用橙色作为搜索栏的 CTA 按钮色，白色背景上大面积使用橙色引导点击。辅助红色（#FF2D00）在促销场景中与橙色形成"橙红渐变"，营造"火热"的购物氛围。淘宝的信息密度极高，配色需要在大量商品图片和文字中保持层次感——通过"橙色引导+灰色分级+白色留白"的三层结构实现。

---

### 3.2 天猫（深红高端）

天猫是阿里巴巴旗下的 B2C 品牌零售平台，深红色体现高端品牌调性。

**品牌色板表**

| 色彩角色 | 色值 | RGB | 用途说明 | CSS 变量名建议 |
|---------|------|-----|---------|--------------|
| 主色（深红） | #B22222 | rgb(178, 34, 34) | Logo（天猫形象）、品牌标识 | `--tmall-primary` |
| 黑色 | #000000 | rgb(0, 0, 0) | 导航栏、高端感强化 | `--tmall-dark` |
| 红色 | #E53935 | rgb(229, 57, 53) | CTA 按钮、促销标签 | `--tmall-red` |
| 金色 | #D4A853 | rgb(212, 168, 83) | 奢侈品标签、VIP | `--tmall-gold` |
| 浅红 | #FFF5F5 | rgb(255, 245, 245) | 选中态、浅色背景 | `--tmall-primary-light` |
| 背景白 | #FFFFFF | rgb(255, 255, 255) | 主内容区背景 | `--tmall-bg` |
| 浅灰 | #F5F5F5 | rgb(245, 245, 245) | 辅助背景 | `--tmall-bg-secondary` |
| 深灰文字 | #333333 | rgb(51, 51, 51) | 主文字 | `--tmall-text-primary` |
| 中灰文字 | #999999 | rgb(153, 153, 153) | 次级文字 | `--tmall-text-secondary` |

**CSS 变量定义**

```css
:root {
  --tmall-primary: #B22222;
  --tmall-dark: #000000;
  --tmall-red: #E53935;
  --tmall-gold: #D4A853;
  --tmall-primary-light: #FFF5F5;
  --tmall-bg: #FFFFFF;
  --tmall-bg-secondary: #F5F5F5;
  --tmall-text-primary: #333333;
  --tmall-text-secondary: #999999;
}
```

**配色策略分析**

天猫的深红色（#B22222）比淘宝的橙色更沉稳、更高端，与黑色导航栏的组合直接对标奢侈品电商的视觉风格。金色（#D4A853）作为辅助色出现在奢侈品频道和 VIP 标识中，进一步强化"品质-正品-高端"的品牌定位。在实际页面中，天猫大量使用黑色作为"框架色"——黑色导航栏、黑色品牌专区边框，这与淘宝的白色框架形成鲜明对比，也标志着天猫与淘宝在品牌定位上的差异化。

---

### 3.3 京东（红色信任）

京东是中国最大的自营型电商平台，红色传递"正品保障"的品牌承诺。

**品牌色板表**

| 色彩角色 | 色值 | RGB | 用途说明 | CSS 变量名建议 |
|---------|------|-----|---------|--------------|
| 主色（红色） | #E1251B | rgb(225, 37, 27) | Logo、Header、CTA 按钮、品牌标识 | `--jd-primary` |
| 深红 | #C91623 | rgb(201, 22, 35) | 按钮悬停态 | `--jd-primary-dark` |
| 白色 | #FFFFFF | rgb(255, 255, 255) | 主内容区、按钮文字 | `--jd-bg` |
| 深灰 | #333333 | rgb(51, 51, 51) | 导航文字、辅助深色 | `--jd-dark` |
| 浅灰 | #F5F5F5 | rgb(245, 245, 245) | 辅助背景 | `--jd-bg-secondary` |
| 中灰文字 | #666666 | rgb(102, 102, 102) | 次级文字 | `--jd-text-secondary` |
| 深灰文字 | #222222 | rgb(34, 34, 34) | 主文字 | `--jd-text-primary` |
| 促销红 | #F10215 | rgb(241, 2, 21) | 京东秒杀、促销价 | `--jd-deal` |
| 京东红 | #E4393C | rgb(228, 57, 60) | PLUS 会员标识 | `--jd-plus` |

**CSS 变量定义**

```css
:root {
  --jd-primary: #E1251B;
  --jd-primary-dark: #C91623;
  --jd-bg: #FFFFFF;
  --jd-dark: #333333;
  --jd-bg-secondary: #F5F5F5;
  --jd-text-secondary: #666666;
  --jd-text-primary: #222222;
  --jd-deal: #F10215;
  --jd-plus: #E4393C;
}
```

**配色策略分析**

京东的红色（#E1251B）是一个纯正、饱和的红色，在中国文化中天然关联"喜庆、正色、官方"，暗示"正品保障"的品牌承诺。京东 Header 直接使用红色背景+白色文字，是中国电商平台中品牌色使用面积最大的。京东 PLUS 会员使用略偏亮的红色（#E4393C），在视觉上与主品牌色保持一致的同时增加了层次。京东秒杀频道使用更亮的红色（#F10215），形成"品牌红-会员红-秒杀红"的三级红色体系，通过饱和度和明度的微妙变化区分不同功能场景。

---

### 3.4 拼多多（红+橙紧迫感）

拼多多以社交拼团和低价策略闻名，其配色强化紧迫感和刺激感。

**品牌色板表**

| 色彩角色 | 色值 | RGB | 用途说明 | CSS 变量名建议 |
|---------|------|-----|---------|--------------|
| 主色（红色） | #E02E24 | rgb(224, 46, 36) | Logo、品牌标识、Header 元素 | `--pdd-primary` |
| 辅助色（橙色） | #FF6D00 | rgb(255, 109, 0) | CTA 按钮、拼团标签、限时标签 | `--pdd-accent` |
| 深红 | #CC0000 | rgb(204, 0, 0) | 促销强化 | `--pdd-primary-dark` |
| 浅红 | #FFF0EE | rgb(255, 240, 238) | 选中态、浅色背景 | `--pdd-primary-light` |
| 金色 | #FFB800 | rgb(255, 184, 0) | 百亿补贴标签、金币 | `--pdd-gold` |
| 背景白 | #FFFFFF | rgb(255, 255, 255) | 主内容区背景 | `--pdd-bg` |
| 浅灰 | #F5F5F5 | rgb(245, 245, 245) | 辅助背景 | `--pdd-bg-secondary` |
| 深灰文字 | #333333 | rgb(51, 51, 51) | 主文字 | `--pdd-text-primary` |
| 中灰文字 | #999999 | rgb(153, 153, 153) | 次级文字 | `--pdd-text-secondary` |
| 促销价红 | #FF0000 | rgb(255, 0, 0) | 促销价格文字 | `--pdd-price-deal` |

**CSS 变量定义**

```css
:root {
  --pdd-primary: #E02E24;
  --pdd-accent: #FF6D00;
  --pdd-primary-dark: #CC0000;
  --pdd-primary-light: #FFF0EE;
  --pdd-gold: #FFB800;
  --pdd-bg: #FFFFFF;
  --pdd-bg-secondary: #F5F5F5;
  --pdd-text-primary: #333333;
  --pdd-text-secondary: #999999;
  --pdd-price-deal: #FF0000;
}
```

**配色策略分析**

拼多多的"红+橙"组合是电商行业中紧迫感最强的配色方案。红色（#E02E24）建立品牌认知，橙色（#FF6D00）作为行动色大量出现在"去拼单"、"马上抢"等 CTA 按钮上。红橙渐变在拼多多的设计中极为常见，这种从红到橙的渐变在视觉上产生"升温"效果，有效激发用户的紧迫感和购买冲动。百亿补贴标签使用的金色（#FFB800）在红色背景上形成强对比，传递"超值"的心理暗示。

---

### 3.5 抖音电商（黑+红潮流）

抖音电商依托短视频平台，其配色延续抖音 App 的潮流基因。

**品牌色板表**

| 色彩角色 | 色值 | RGB | 用途说明 | CSS 变量名建议 |
|---------|------|-----|---------|--------------|
| 主色（黑色） | #000000 | rgb(0, 0, 0) | 主背景、导航、品牌标识 | `--douyin-primary` |
| 辅助色（红色） | #FE2C55 | rgb(254, 44, 85) | CTA 按钮、直播标签、心跳元素 | `--douyin-red` |
| 辅助色（粉色） | #FF6699 | rgb(255, 102, 153) | 粉丝标签、推荐标签 | `--douyin-pink` |
| 青色 | #25F4EE | rgb(37, 244, 238) | Logo 点缀、抖动元素 | `--douyin-cyan` |
| 深灰 | #1A1A1A | rgb(26, 26, 26) | 卡片背景 | `--douyin-dark` |
| 中灰 | #999999 | rgb(153, 153, 153) | 次级文字 | `--douyin-text-secondary` |
| 白色 | #FFFFFF | rgb(255, 255, 255) | 文字、图标 | `--douyin-text-primary` |
| 浅灰 | #F2F2F2 | rgb(242, 242, 242) | 分隔线、边框 | `--douyin-border` |

**CSS 变量定义**

```css
:root {
  --douyin-primary: #000000;
  --douyin-red: #FE2C55;
  --douyin-pink: #FF6699;
  --douyin-cyan: #25F4EE;
  --douyin-dark: #1A1A1A;
  --douyin-text-secondary: #999999;
  --douyin-text-primary: #FFFFFF;
  --douyin-border: #F2F2F2;
}
```

**配色策略分析**

抖音电商是唯一以黑色为主背景的主流电商平台，这与其短视频内容的沉浸式体验一脉相承。黑色背景使商品图片和视频内容更加突出，红色（#FE2C55）CTA 按钮在深色背景上极为醒目。青色（#25F4EE）是抖音 Logo 的标志性辅助色，在电商页面中少量点缀，维持品牌一致性。整体"黑-红-青"配色方案传递年轻、潮流、时尚的品牌调性，与传统电商的"白底+暖色按钮"形成鲜明差异。

---

### 3.6 小红书电商（红色种草）

小红书电商基于社区"种草"生态，红色体现其内容社区的活力基因。

**品牌色板表**

| 色彩角色 | 色值 | RGB | 用途说明 | CSS 变量名建议 |
|---------|------|-----|---------|--------------|
| 主色（红色） | #FF2442 | rgb(255, 36, 66) | Logo、品牌标识、点赞按钮 | `--xhs-primary` |
| 深红 | #E01032 | rgb(224, 16, 50) | 按钮悬停态 | `--xhs-primary-dark` |
| 浅红 | #FFF0F2 | rgb(255, 240, 242) | 选中态、浅色背景 | `--xhs-primary-light` |
| 白色 | #FFFFFF | rgb(255, 255, 255) | 主内容区背景 | `--xhs-bg` |
| 浅灰 | #F6F6F6 | rgb(246, 246, 246) | 辅助背景 | `--xhs-bg-secondary` |
| 深灰文字 | #333333 | rgb(51, 51, 51) | 主文字 | `--xhs-text-primary` |
| 中灰文字 | #999999 | rgb(153, 153, 153) | 次级文字 | `--xhs-text-secondary` |
| 金色 | #FFD700 | rgb(255, 215, 0) | 好物推荐标签 | `--xhs-gold` |
| 绿色 | #07C160 | rgb(7, 193, 96) | 已购买、成功状态 | `--xhs-green` |

**CSS 变量定义**

```css
:root {
  --xhs-primary: #FF2442;
  --xhs-primary-dark: #E01032;
  --xhs-primary-light: #FFF0F2;
  --xhs-bg: #FFFFFF;
  --xhs-bg-secondary: #F6F6F6;
  --xhs-text-primary: #333333;
  --xhs-text-secondary: #999999;
  --xhs-gold: #FFD700;
  --xhs-green: #07C160;
}
```

**配色策略分析**

小红书的红色（#FF2442）是一个偏粉的红，比京东的红色更年轻、更女性化，与其核心用户群（年轻女性）高度契合。白色大面积留白配合卡片式布局，突出用户生成内容（UGC）的图片质量。金色（#FFD700）用于"好物推荐"等电商功能标签，在白色/红色体系中增加"品质感"。整体配色在"社区属性"和"电商属性"之间取得平衡——红色同时服务于"点赞"社区行为和"购买"电商行为。

---

### 3.7 美团（绿+黄生活服务）

美团是中国领先的生活服务电商平台，绿色传递便捷、健康的生活服务理念。

**品牌色板表**

| 色彩角色 | 色值 | RGB | 用途说明 | CSS 变量名建议 |
|---------|------|-----|---------|--------------|
| 主色（绿色） | #00B33B | rgb(0, 179, 59) | Logo、品牌标识、主按钮 | `--meituan-primary` |
| 辅助色（黄色） | #FFC300 | rgb(255, 195, 0) | 促销标签、满减标识、评分 | `--meituan-accent` |
| 深绿 | #009932 | rgb(0, 153, 50) | 按钮悬停态 | `--meituan-primary-dark` |
| 浅绿 | #E8F8EE | rgb(232, 248, 238) | 选中态、浅色背景 | `--meituan-primary-light` |
| 红色 | #FF6633 | rgb(255, 102, 51) | 限时抢购、优惠标签 | `--meituan-red` |
| 背景白 | #FFFFFF | rgb(255, 255, 255) | 主内容区背景 | `--meituan-bg` |
| 浅灰 | #F5F5F5 | rgb(245, 245, 245) | 辅助背景 | `--meituan-bg-secondary` |
| 深灰文字 | #333333 | rgb(51, 51, 51) | 主文字 | `--meituan-text-primary` |
| 中灰文字 | #999999 | rgb(153, 153, 153) | 次级文字 | `--meituan-text-secondary` |
| 橙色 | #FF8C00 | rgb(255, 140, 0) | 配送标识 | `--meituan-orange` |

**CSS 变量定义**

```css
:root {
  --meituan-primary: #00B33B;
  --meituan-accent: #FFC300;
  --meituan-primary-dark: #009932;
  --meituan-primary-light: #E8F8EE;
  --meituan-red: #FF6633;
  --meituan-bg: #FFFFFF;
  --meituan-bg-secondary: #F5F5F5;
  --meituan-text-primary: #333333;
  --meituan-text-secondary: #999999;
  --meituan-orange: #FF8C00;
}
```

**配色策略分析**

美团的绿色（#00B33B）在中国电商平台中独树一帜——绿色在色彩心理学中传递"安全、便捷、可信赖"，与美团"吃喝玩乐"的生活服务定位高度契合。黄色（#FFC300）作为辅助色出现在满减优惠、评分星级等场景中，在绿色主调中增添活力感。美团是少数以绿色为主色且成功建立强品牌认知的中国电商平台，证明了"非红色"也能在中国电商市场中脱颖而出。橙色（#FF8C00）用于外卖配送相关标识，在绿色体系中形成暖色点缀。

---

### 3.8 唯品会（粉色女性化）

唯品会是中国领先的品牌特卖电商平台，粉色是其核心品牌标识色。

**品牌色板表**

| 色彩角色 | 色值 | RGB | 用途说明 | CSS 变量名建议 |
|---------|------|-----|---------|--------------|
| 主色（粉色） | #FF6699 | rgb(255, 102, 153) | Logo、品牌标识、主按钮 | `--vipshop-primary` |
| 深粉 | #E5507A | rgb(229, 80, 122) | 按钮悬停态 | `--vipshop-primary-dark` |
| 浅粉 | #FFF0F5 | rgb(255, 240, 245) | 选中态、浅色背景 | `--vipshop-primary-light` |
| 玫红 | #FF3366 | rgb(255, 51, 102) | 促销标签、限时特卖 | `--vipshop-deal` |
| 白色 | #FFFFFF | rgb(255, 255, 255) | 主内容区背景 | `--vipshop-bg` |
| 浅灰 | #F5F5F5 | rgb(245, 245, 245) | 辅助背景 | `--vipshop-bg-secondary` |
| 深灰文字 | #333333 | rgb(51, 51, 51) | 主文字 | `--vipshop-text-primary` |
| 中灰文字 | #999999 | rgb(153, 153, 153) | 次级文字 | `--vipshop-text-secondary` |
| 金色 | #DAA520 | rgb(218, 165, 32) | VIP 会员、品牌特卖标识 | `--vipshop-gold` |

**CSS 变量定义**

```css
:root {
  --vipshop-primary: #FF6699;
  --vipshop-primary-dark: #E5507A;
  --vipshop-primary-light: #FFF0F5;
  --vipshop-deal: #FF3366;
  --vipshop-bg: #FFFFFF;
  --vipshop-bg-secondary: #F5F5F5;
  --vipshop-text-primary: #333333;
  --vipshop-text-secondary: #999999;
  --vipshop-gold: #DAA520;
}
```

**配色策略分析**

唯品会的粉色（#FF6699）是明确的"女性化"品牌色选择，与其核心用户群（女性消费者）和主打品类（服饰、美妆）高度匹配。粉色在电商行业中较为罕见作为主色使用，这使唯品会在众多红/橙色电商中形成了鲜明的差异化识别。玫红色（#FF3366）用于限时特卖等促销场景，比主粉色更深、更饱和，在视觉上制造"升级"的紧迫感。金色（#DAA520）用于 VIP 会员标识，在粉色体系中增添"尊贵感"。

---

## 四、促销色彩系统

### 4.1 促销价色彩规范

促销色彩是电商平台最核心的"行为引导色"系统，覆盖价格展示、倒计时、优惠券等关键转化触点。

**价格标签配色**

| 元素 | 推荐色值 | RGB | 字体要求 | CSS 变量名建议 |
|------|---------|-----|---------|--------------|
| 促销价文字 | #E02E24 | rgb(224, 46, 36) | ExtraBold / 900 | `--promo-price` |
| 促销价文字（强） | #FF0000 | rgb(255, 0, 0) | ExtraBold / 900 | `--promo-price-strong` |
| 促销价文字（京东风） | #CC0000 | rgb(204, 0, 0) | ExtraBold / 900 | `--promo-price-jd` |
| 划线价 | #999999 | rgb(153, 153, 153) | Regular / line-through | `--promo-price-original` |
| 价格符号（¥） | 与促销价同色 | - | 同促销价字号 | - |

```css
:root {
  --promo-price: #E02E24;
  --promo-price-strong: #FF0000;
  --promo-price-jd: #CC0000;
  --promo-price-original: #999999;
}

/* 促销价样式示例 */
.promo-price {
  color: var(--promo-price);
  font-weight: 900;
  font-size: 24px;
}

.promo-price-original {
  color: var(--promo-price-original);
  text-decoration: line-through;
  font-size: 14px;
  font-weight: 400;
}
```

**促销标签配色**

| 标签类型 | 背景色 | 文字色 | CSS 变量名建议 |
|---------|-------|-------|--------------|
| 限时折扣 | #E02E24 | #FFFFFF | `--tag-limited` |
| 秒杀 | #FF0000 | #FFFFFF | `--tag-flash-sale` |
| 满减 | #FF6D00 | #FFFFFF | `--tag-discount` |
| 新人专享 | #FF2442 | #FFFFFF | `--tag-new-user` |
| PLUS/VIP | #DAA520 | #FFFFFF | `--tag-vip` |

**倒计时配色**

| 元素 | 推荐色值 | 用途 |
|------|---------|------|
| 倒计时背景 | #333333 | 数字背景块 |
| 倒计时文字 | #FFFFFF | 数字 |
| 倒计时强调 | #FF0000 | 最后1小时变红 |
| 倒计时分隔符 | #FF6D00 | 冒号/连字符 |

```css
/* 倒计时样式示例 */
.countdown {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.countdown-number {
  background: #333333;
  color: #FFFFFF;
  font-weight: 700;
  padding: 2px 6px;
  border-radius: 4px;
  font-variant-numeric: tabular-nums;
}

.countdown-number.urgent {
  background: #FF0000;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
```

**优惠券配色**

| 券类型 | 背景色 | 文字色 | 边框色 | CSS 变量名建议 |
|-------|-------|-------|-------|--------------|
| 满减券 | #FFF8E1 | #E02E24 | #FFC107 | `--coupon-reduction` |
| 现金券 | #E8F5E9 | #00B33B | #4CAF50 | `--coupon-cash` |
| 品牌券 | #FDE8E8 | #CC0000 | #E57373 | `--coupon-brand` |
| 运费券 | #E3F2FD | #0071DC | #64B5F6 | `--coupon-shipping` |

```css
/* 优惠券样式示例 */
.coupon {
  background: #FFF8E1;
  color: #E02E24;
  border: 1px dashed #FFC107;
  border-radius: 8px;
  padding: 8px 16px;
}

.coupon-amount {
  font-size: 28px;
  font-weight: 900;
  color: #E02E24;
}

.coupon-condition {
  font-size: 12px;
  color: #E02E24;
  opacity: 0.8;
}
```

### 4.2 节日促销配色

不同节日促销有特定的配色传统，电商平台会根据节日主题调整整体色调。

| 节日 | 主色调 | 辅助色 | 代表平台活动 | 色值参考 |
|------|-------|-------|------------|---------|
| 双11 | 红+金 | 紫+黑 | 淘宝/天猫双11 | 主红 #FF0036、金色 #FFD700、紫色 #6A0DAD |
| 618 | 红+蓝 | 白 | 京东618 | 主红 #E1251B、蓝 #2D5AE0 |
| 黑五 | 黑+金 | 红 | Amazon/Walmart | 黑 #000000、金 #FFD700 |
| 圣诞 | 红+绿 | 白+金 | 国际平台 | 红 #C41E3A、绿 #1B5E20 |
| 春节 | 红+金 | 橙+黄 | 中国平台 | 红 #E02E24、金 #FFD700 |
| 年中大促 | 橙+蓝 | 白 | 综合 | 橙 #FF6D00、蓝 #2D5AE0 |
| 双12 | 红+粉 | 白 | 淘宝/天猫 | 红 #FF2442、粉 #FF6699 |

```css
/* 双11主题色示例 */
:root[data-theme="double11"] {
  --event-primary: #FF0036;
  --event-accent: #FFD700;
  --event-secondary: #6A0DAD;
  --event-bg: #1A0A2E;
  --event-text: #FFFFFF;
}

/* 黑五主题色示例 */
:root[data-theme="blackfriday"] {
  --event-primary: #000000;
  --event-accent: #FFD700;
  --event-secondary: #CC0000;
  --event-bg: #111111;
  --event-text: #FFFFFF;
}
```

### 4.3 促销色与品牌色的平衡

促销色是最容易破坏品牌一致性的元素。以下是保持平衡的核心原则：

1. **层级分离**：品牌色用于结构（Header、导航、Footer），促销色仅用于内容区（商品卡片、标签、价格）。两者不应在同一个结构元素上竞争。

2. **饱和度控制**：日常页面中促销色面积不超过页面总面积的 15%；大促期间可提升至 30%，但品牌色结构区域必须保持不变。

3. **色彩呼应**：促销色应从品牌色体系中派生。例如，京东的促销红（#F10215）从品牌红（#E1251B）派生；淘宝的促销价红（#FF0036）从品牌橙（#FF5000）向红色偏移。

4. **节日主题的"皮肤化"**：节日配色应作为可切换的"主题皮肤"实现，而非修改全局品牌色。通过 CSS 变量和 `data-theme` 属性实现主题切换，活动结束后一键恢复。

```css
/* 促销色平衡示例 */
.product-card {
  /* 品牌色边框 - 始终保持 */
  border: 1px solid var(--brand-border, #E0E0E0);
  background: var(--brand-bg, #FFFFFF);
}

.product-card .price {
  /* 促销色 - 仅价格区域 */
  color: var(--promo-price, #E02E24);
  font-weight: 900;
}

.product-card .tag {
  /* 促销标签 - 仅标签区域 */
  background: var(--promo-tag-bg, #FF0000);
  color: var(--promo-tag-text, #FFFFFF);
}
```

---

## 五、中外电商配色差异对比

### 5.1 色彩倾向对比

| 维度 | 国际平台 | 中国平台 |
|------|---------|---------|
| 主色倾向 | 冷色主导（蓝/深蓝/深灰） | 暖色主导（红/橙/金） |
| 辅助色策略 | 暖色点缀（橙/黄作为 CTA） | 暖色叠加（红+橙+金多暖色组合） |
| 背景色 | 纯白 #FFFFFF 或极浅灰 | 纯白为主，浅灰辅助 |
| 文字色 | 深灰/黑色，对比度 4.5:1+ | 黑色/深灰，部分平台对比度偏低 |
| 促销色使用 | 面积小、位置精准 | 面积大、全页面渗透 |
| 整体饱和度 | 中等偏低，克制 | 高饱和度，热烈 |
| 色彩数量 | 3-5色为主，简洁 | 5-8色常见，丰富 |

**典型对比案例**

| 对比维度 | Amazon | 淘宝 |
|---------|--------|------|
| 主色 | 深蓝 #232F3E（冷色/理性） | 橙色 #FF5000（暖色/活力） |
| CTA 色 | 橙色 #FF9900（面积小） | 橙色 #FF5000（面积大） |
| 促销色 | 红色 #CC0C39（精准使用） | 红色 #FF0036（大面积使用） |
| 信息密度 | 中等，留白充足 | 高，信息密集 |
| 整体感受 | 专业、理性、可信赖 | 热闹、活力、购物欲 |

### 5.2 信息密度与色彩关系

信息密度是中外电商配色差异的深层原因。

**国际平台（低-中密度）**
- 页面留白充足，商品卡片间距大
- 色彩在"少"的场景中更醒目，因此不需要高饱和度
- 用户浏览路径：搜索 → 比较 → 决策（理性链路）
- 配色目标：建立信任感，引导清晰的操作路径

**中国平台（高密度）**
- 页面信息密集，商品卡片间距小
- 色彩需要在"多"的场景中脱颖而出，因此需要高饱和度和大面积
- 用户浏览路径：发现 → 刺激 → 冲动购买（感性链路）
- 配色目标：制造热闹氛围，用色彩刺激购买欲

```css
/* 国际风格 - 低密度 */
.product-grid-intl {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding: 32px;
  background: #FFFFFF;
}

/* 中国风格 - 高密度 */
.product-grid-cn {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  padding: 12px;
  background: #F5F5F5;
}
```

### 5.3 文化心理差异

色彩在不同文化中的心理含义直接影响电商配色策略。

**红色的文化差异**

| 维度 | 中国文化 | 西方文化 |
|------|---------|---------|
| 核心含义 | 喜庆、好运、繁荣、热情 | 警告、危险、紧急、清仓 |
| 电商语境 | 正品、促销、节日、活力 | Clearance（清仓）、Alert（警告） |
| 品牌色适用性 | 极高——天然适配促销场景 | 中等——需控制使用场景 |
| 用户心理反应 | 积极正向——激发购买欲 | 复合——既是注意力吸引也是风险信号 |
| 典型案例 | 京东红、天猫红、拼多多红 | Target 红（品牌标识，非促销驱动） |

**蓝色的文化差异**

| 维度 | 中国文化 | 西方文化 |
|------|---------|---------|
| 核心含义 | 科技、冷静、商务 | 信任、专业、安全 |
| 电商语境 | 支付安全、企业服务 | 品牌信任、品质保证 |
| 品牌色适用性 | 中等——偏工具化 | 极高——天然适配品牌信任 |
| 典型案例 | 支付宝蓝、美团外卖蓝 | Amazon 蓝、Walmart 蓝 |

**金色的文化差异**

| 维度 | 中国文化 | 西方文化 |
|------|---------|---------|
| 核心含义 | 财富、尊贵、皇家 | 奢华、品质、高端 |
| 电商语境 | 会员特权、百亿补贴、节日促销 | Premium 会员、高端品类 |
| 使用场景 | 大面积使用——双11、春节等 | 小面积点缀——VIP 标识 |

---

## 六、平台类型配色策略

### 6.1 市场平台型（Amazon/淘宝）配色规则

市场平台型电商（Marketplace）连接买家和卖家，页面需要同时服务"浏览-发现"和"交易-信任"两个目标。

**配色规则**

1. **框架色必须中性**：Header 和导航使用深色（深蓝/深灰/黑色），为海量商品信息提供稳定的视觉框架。Amazon 的 #232F3E 和淘宝的白色框架（橙色仅作点缀）都是这一原则的体现。

2. **品牌色克制使用**：品牌主色仅出现在 Logo、搜索 CTA、和少量关键按钮上，不干扰商品内容的展示。市场平台的"主角"是商品，而非平台自身。

3. **卖家品牌色不干扰**：市场平台有大量第三方卖家，必须确保卖家的自定义颜色不会破坏平台整体配色体系。

```css
/* 市场平台型配色框架 */
.marketplace-header {
  background: var(--mp-frame, #232F3E); /* 深色框架 */
  color: #FFFFFF;
}

.marketplace-content {
  background: var(--mp-bg, #FFFFFF); /* 白色内容区 */
}

.marketplace-cta {
  background: var(--mp-brand, #FF9900); /* 品牌色仅用于 CTA */
  color: #FFFFFF;
}

/* 卖家自定义色隔离 */
.seller-brand {
  /* 卖家品牌色仅在卡片内部使用 */
  --seller-accent: var(--seller-color, #FF5000);
}
```

### 6.2 自营零售型（京东/Walmart）配色规则

自营零售型电商以"正品保障"和"品质承诺"为核心卖点，配色需要传递更强的品牌信任感。

**配色规则**

1. **品牌色即框架色**：自营平台的 Header 可以直接使用品牌色（京东红 Header、Walmart 蓝 Header），因为所有商品都代表平台自身品质。

2. **信任色强化**：使用更饱和、更坚定的品牌色（京东的纯红 #E1251B vs 淘宝的橙色 #FF5000），传递"我们为每一件商品负责"的信心。

3. **服务标识配色**：自营平台需要突出物流、售后等服务标签，通常使用品牌色的变体或互补色。

```css
/* 自营零售型配色框架 */
.retail-header {
  background: var(--retail-brand, #E1251B); /* 品牌色即框架色 */
  color: #FFFFFF;
}

.retail-service-badge {
  background: var(--retail-brand-light, #FFF0EE);
  color: var(--retail-brand, #E1251B);
  border: 1px solid var(--retail-brand, #E1251B);
}
```

### 6.3 社交电商型（抖音/小红书）配色规则

社交电商型平台基于内容社区，"种草-拔草"链路的视觉体验是配色的核心考量。

**配色规则**

1. **内容优先**：配色必须为内容（图片/视频）让路，品牌色仅出现在导航栏和关键操作按钮上。抖音的黑色背景使视频内容更加突出。

2. **社区色与电商色融合**：同一颜色需要同时服务于社区行为（点赞、评论）和电商行为（购买、加购）。小红书的红色（#FF2442）同时是"点赞"和"购买"的颜色。

3. **潮流感配色**：使用更前卫的色彩组合（抖音的黑+红+青、小红书的粉+白+金），与传统电商的"安全配色"形成差异。

```css
/* 社交电商型配色框架 */
.social-header {
  background: var(--social-dark, #000000); /* 深色突出内容 */
  color: #FFFFFF;
}

.social-content {
  background: var(--social-bg, #FFFFFF);
}

/* 社区色与电商色共用 */
.social-action {
  background: var(--social-accent, #FE2C55); /* 点赞/购买同一色 */
  color: #FFFFFF;
}
```

### 6.4 建站服务型（Shopify）配色规则

建站服务型平台面向商家而非消费者，配色需要传递"专业产品"的 SaaS 调性。

**配色规则**

1. **产品化配色体系**：使用多色辅助体系（绿+紫+蓝+橙）区分不同功能模块，像专业 SaaS 产品一样通过色彩建立信息架构。

2. **增长导向的绿色**：绿色（#96BF48）传递增长、成功、繁荣的商业寓意，是建站服务最理想的品牌色选择。

3. **深色/浅色双模式**：建站平台通常提供深色展示区和浅色操作区，通过背景色的明暗对比引导用户注意力。

```css
/* 建站服务型配色框架 */
.saaS-header {
  background: var(--saas-dark, #202223); /* 深色产品感 */
  color: #FFFFFF;
}

.saaS-feature {
  /* 多色功能模块 */
  --feature-primary: #96BF48; /* 主功能 - 绿色 */
  --feature-analytics: #7B61FF; /* 数据分析 - 紫色 */
  --feature-settings: #4A90D9; /* 设置 - 蓝色 */
  --feature-alerts: #F49352; /* 警告 - 橙色 */
}
```

---

## 七、AI 生成配色规则

### 必须遵守

以下 10 条规则是生成电商配色方案时的硬性约束：

1. **品牌色必须在 3-5 个功能场景中保持一致使用**，包括 Header/Logo、主 CTA 按钮、活跃态标签、品牌水印/背景。不可随意替换或漂移色相。

2. **所有文字色彩组合必须满足 WCAG 2.1 AA 对比度标准**（正文 4.5:1，大文字 3:1）。深色背景上的浅色文字、浅色背景上的深色文字都必须通过对比度校验。

3. **促销色与品牌色之间必须有明确的视觉层级关系**：品牌色用于结构性元素（Header、导航、Footer），促销色仅用于内容区（价格、标签、倒计时）。两者不应在同一层级竞争注意力。

4. **主色+辅助色+中性色必须构成完整的三层色彩体系**：主色（品牌识别）→ 辅助色（行动引导）→ 中性色（背景/文字/分隔）。缺少任何一层都会导致配色体系不完整。

5. **每个色值必须同时提供 HEX 和 RGB 两种格式**，并标注 CSS 变量名建议。格式规范：HEX 使用大写（如 #FF5000），RGB 使用 `rgb()` 函数格式。

6. **中国目标市场的电商配色必须使用高饱和度暖色（红/橙/金）作为主色或主要辅助色**，遵循中国用户的色彩心理预期。冷色可用于辅助但不可作为唯一主色。

7. **国际目标市场的电商配色应以冷色（蓝/深蓝/深灰）为框架色**，暖色（橙/黄/红）作为 CTA 和促销点缀。整体饱和度应低于中国市场。

8. **促销价文字必须使用 ExtraBold/900 字重 + 红色系色值**（#E02E24 / #FF0000 / #CC0000），划线价使用 Regular/400 字重 + 灰色 + line-through。价格对比必须通过色彩+字重的双重差异实现。

9. **深色模式必须独立定义完整色板**，不可简单反转明暗。深色背景需要降低主色饱和度或提升明度以保证可读性，促销色在深色背景上需要额外的发光效果或边框增强。

10. **所有 CSS 变量必须使用 `--{platform}-{role}` 命名规范**，其中 `{platform}` 为平台英文缩写，`{role}` 为色彩角色（primary / accent / bg / text-primary / deal 等）。

### 禁止事项

以下 8 条是生成电商配色方案时的绝对禁区：

1. **禁止使用纯黑 #000000 作为白色背景上的正文色**。应使用 #222222 或 #333333，避免过高的对比度造成视觉疲劳。纯黑仅允许用于抖音等以深色为主背景的平台。

2. **禁止在同一页面中同时出现超过 3 种高饱和度的促销色**。红+橙+黄同时大面积使用会造成视觉混乱，应控制促销色在同一视觉区域内的种类不超过 2 种。

3. **禁止使用品牌色的互补色作为促销色**。例如，蓝色品牌的主页不应使用橙色促销标签（互补色冲突）。促销色应从品牌色的邻近色或三角色中选取。

4. **禁止在价格文字上使用渐变色、描边、阴影等装饰效果**。价格信息需要最高优先级的可读性，任何装饰效果都会降低可读性并增加认知负荷。

5. **禁止在浅色背景上使用浅灰色文字（对比度低于 3:1）**。如 #CCCCCC on #FFFFFF（对比度 1.6:1）、#999999 on #F5F5F5（对比度 2.8:1）等组合均不可用于正文内容。

6. **禁止在非节日/非大促期间使用节日主题色作为页面默认配色**。双11 红+金、圣诞红+绿等节日配色仅在对应活动期间启用，日常页面必须使用品牌标准色。

7. **禁止在同一个 CTA 按钮上同时使用品牌色渐变和品牌色实色**。按钮样式必须在"品牌色实色"和"品牌色渐变"之间选择一种，不可混用。

8. **禁止在移动端和桌面端使用不同的品牌主色**。响应式设计可以调整色彩面积和层级，但品牌主色必须在所有设备上保持一致，以维护品牌识别的统一性。

### 平台类型配色推荐速查表

| 平台类型 | 推荐主色倾向 | 推荐辅助色 | 推荐促销色 | 典型案例 |
|---------|------------|-----------|-----------|---------|
| 市场平台型（国际） | 深蓝 #232F3E / 蓝 #0071DC | 橙 #FF9900 / 黄 #FFC220 | 红 #CC0C39 / #E31837 | Amazon, Walmart |
| 市场平台型（中国） | 橙 #FF5000 / 红 #E1251B | 红 #FF2D00 / 金 #FFD700 | 红 #FF0036 / #E02E24 | 淘宝, 京东 |
| 自营零售型（国际） | 蓝 #0071DC / 红 #CC0000 | 黄 #FFC220 / 白 | 红 #E31837 | Walmart, Target |
| 自营零售型（中国） | 红 #E1251B / #E02E24 | 橙 #FF6D00 / 白 | 红 #FF0000 / #F10215 | 京东, 拼多多 |
| 社交电商型 | 黑 #000000 / 红 #FF2442 | 粉 #FF6699 / 青 #25F4EE | 红 #FE2C55 / 粉 #FF3366 | 抖音, 小红书 |
| 建站服务型 | 绿 #96BF48 / 蓝绿 | 紫 #7B61FF / 蓝 #4A90D9 | 橙 #F49352 | Shopify |
| 手工艺/垂直型 | 橙 #F56400 / 暖棕 | 暖白 #FAFAFA / 绿 | 红 #D4442A | Etsy |
| 生活服务型 | 绿 #00B33B | 黄 #FFC300 / 橙 #FF8C00 | 红 #FF6633 | 美团 |
| 新兴市场型（东南亚） | 橙红 #EE4D2D | 红 #F53D2D / 金 #FFBF00 | 红 #EE4D2D | Shopee |
| 新兴市场型（拉美） | 亮黄 #FFE600 / 深蓝 #2D3277 | 蓝 #3483FA / 绿 #00A650 | 红 #F73E3E | Mercado Libre |
| 女性向平台 | 粉 #FF6699 / 偏粉红 #FF2442 | 金 #DAA520 / 白 | 玫红 #FF3366 | 唯品会, 小红书 |
| 高端品牌型 | 深红 #B22222 / 黑 #000000 | 金 #D4A853 / 白 | 红 #E53935 | 天猫 |

---

> **声明**：本文档中的色值均来自对应平台的公开网站和官方品牌指南，仅供设计参考。品牌色可能随平台升级而调整，建议在实际项目前核实最新版本。