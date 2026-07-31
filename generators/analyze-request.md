# Requirement Analysis Generator


## Goal

分析用户输入，提取官网需求。


## Extract


必须识别：


1. 行业

technology

medical

ecommerce

cross-border



2. 产品类型


例如：

SaaS

品牌官网

商城

服务平台



3. 用户目标


例如：

销售

品牌展示

获客

注册



4. 页面规模



判断：

simple

standard

complex



## Output Format


返回JSON:


{
industry:"",
business:"",
goal:"",
complexity:""
}
