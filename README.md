---
AIGC:
    ContentProducer: Minimax Agent AI
    ContentPropagator: Minimax Agent AI
    Label: AIGC
    ProduceID: "00000000000000000000000000000000"
    PropagateID: "00000000000000000000000000000000"
    ReservedCode1: 3045022100ad9eeaf65a1b6612d8ab2183cb1bb658a970307bb9610b64cf900d32a33672a902207ce6b0e16a2d5ae12719a7eac549cf06b533dc084f758fe9fdf05628b7123e0b
    ReservedCode2: 304502202d4325b11b97a2c35d81c65fac02d8be46cf7568c29568f9122fb197f6cf0b4e022100bbf5c6a95964acb23b4b1a9cb4994b3c660e1bd846512ddbfec2bbe757b99a74
---

# 中国4G Cat.1模组产业图谱

## 简介

本项目是中国4G Cat.1模组产业的全景分析报告网页，包含产业链结构、市场数据、厂商对比、下游应用及TOP50客户清单等内容。网页采用响应式设计，支持桌面端和移动端访问。

## 在线访问

网页已部署至GitHub Pages，可通过以下链接访问：

**https://zengkepa-png.github.io/cat1-industry-atlas/**

## 功能特性

- **响应式设计**：适配桌面端、平板和手机
- **数据可视化**：使用Chart.js展示市场份额、价格走势、市场规模预测
- **搜索筛选**：TOP50客户支持按名称和产品搜索
- **平滑导航**：固定导航栏，支持锚点平滑滚动
- **动画效果**：滚动时元素淡入动画
- **移动端适配**：汉堡菜单、响应式布局
- **无需后端**：纯静态网页，可直接托管

## 技术栈

- **HTML5**：语义化标签结构
- **CSS3**：现代CSS特性（Flexbox、Grid、Variables）
- **JavaScript (ES6+)**：交互逻辑
- **外部依赖**（通过CDN）：
  - Chart.js 4.x：数据可视化
  - Remix Icons：图标库
  - Google Fonts：字体资源

## 自定义修改

### 修改标题和描述

在 `index.html` 文件的 `<head>` 部分找到并修改：

```html
<title>您的自定义标题</title>
<meta name="description" content="您的自定义描述">
```

### 修改颜色主题

在 `<style>` 部分的 `:root` 选择器中修改：

```css
:root {
    --primary: #您的颜色代码;
    --secondary: #您的颜色代码;
    --accent: #您的颜色代码;
    /* 其他颜色变量 */
}
```

### 修改图表数据

在 `<script>` 部分找到对应的图表配置并修改 `data` 部分：

```javascript
datasets: [{
    data: [您的数据数组],
    // 其他配置
}]
```

### 修改客户数据

在 `clientsData` 数组中添加或修改客户信息：

```javascript
const clientsData = [
    { 
        name: "企业名称", 
        product: "主要产品", 
        category: "应用领域", 
        position: "市场地位" 
    },
    // 更多客户...
];
```

## 浏览器兼容性

- Chrome（最新版本）
- Firefox（最新版本）
- Safari（最新版本）
- Edge（最新版本）

## 许可证

本项目仅供学习和研究使用。

## 致谢

数据来源：
- Counterpoint Research
- IoT Analytics  
- IDC
- 华经产业研究院
- 艾瑞咨询

---

## GitHub Pages 快速部署步骤

### 步骤1：创建GitHub账户
如果没有GitHub账户，请先访问 [github.com](https://github.com) 注册。

### 步骤2：创建新仓库
1. 登录GitHub
2. 点击右上角 "+" → "New repository"
3. 填写信息：
   - Repository name: `cat1-industry-atlas`
   - Description: 中国4G Cat.1模组产业图谱
   - 选择 "Public"
   - **不要**勾选 "Add a README file"（因为我们已有index.html）
4. 点击 "Create repository"

### 步骤3：上传文件
1. 点击 "uploading an existing file"
2. 将 `index.html` 文件拖拽到上传区域
3. 添加提交信息："Add China 4G Cat.1 Industry Atlas webpage"
4. 点击 "Commit changes"

### 步骤4：启用Pages
1. 进入仓库的 "Settings" 页面
2. 左侧菜单选择 "Pages"
3. 在 "Build and deployment" 部分：
   - Source: 选择 "Deploy from a branch"
   - Branch: 选择 "main"（或 "master"）
   - Folder: 选择 "/ (root)"
4. 点击 "Save"
5. 等待约1-2分钟
6. 刷新页面，GitHub会显示访问链接

### 步骤5：访问您的网站
点击GitHub Pages部分显示的链接即可访问您的网页！

## 常见问题

### Q: 网页显示404错误？
A: 请确保：
1. 文件名为 `index.html`
2. 文件上传到仓库的根目录
3. GitHub Pages已正确启用（Settings → Pages）
4. 等待1-2分钟后刷新页面

### Q: 如何修改网页内容？
A: 直接在本地编辑 `index.html` 文件，然后使用Git命令或GitHub网页界面上传更新。

### Q: 可以使用自定义域名吗？
A: 可以！在Settings → Pages → Custom domain中配置您的域名。

### Q: 网页加载速度慢？
A: 本网页为纯静态文件，加载速度很快。如果很慢，请检查网络连接或尝试使用CDN。

## 联系方式

如有问题或建议，请通过GitHub Issues反馈。

---

**报告编制：MiniMax Agent**  
**发布时间：2026年1月**
