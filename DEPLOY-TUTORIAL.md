# VitePress 博客自定义域名部署教程 (likl.cc.cd)

本文档说明如何将博客部署到自定义域名 **likl.cc.cd**（GitHub Pages 托管）。

---

## 一、域名 DNS 配置（需要在域名管理后台操作）

在域名服务商（如阿里云/腾讯云/Godaddy）添加以下 DNS 记录：

| 类型 | 主机记录 | 记录值 | 说明 |
|------|---------|--------|------|
| CNAME | `www` | `longlong-2002.github.io` | 将 www.likl.cc.cd 指向 GitHub Pages |
| CNAME | `@` | `longlong-2002.github.io` | 将 likl.cc.cd 直接指向 GitHub Pages（部分服务商需用 ALIAS 或 ANAME 记录） |

> **重要：** `longlong-2002.github.io` 替换为你的实际 GitHub Pages 用户名。如果你的仓库名为 `用户名.github.io`，则 CNAME 目标为该仓库名。

DNS 传播可能需要几分钟到几小时。

---

## 二、GitHub 仓库配置

### 1. 打开仓库设置

进入 `https://github.com/longlong-2002/vitepress-demo/settings/pages`

### 2. 自定义域名

在 **"Custom domain"** 输入框中填入：

```
likl.cc.cd
```

点击 **Save** 保存。

### 3. 等待验证

GitHub 会验证域名所有权（通过 CNAME 记录）。验证通过后，会显示：

```
✓ Your site is successfully deployed
Custom domain is configured
```

> ⚠️ 首次使用可能需要等待 DNS 生效（通常 10 分钟 ~ 24 小时）。

### 4. 强制 HTTPS（推荐）

勾选 **"Enforce HTTPS"** 选项，使网站使用 HTTPS 访问。

---

## 三、本地开发

```bash
# 进入项目目录
cd vitepress-demo

# 安装依赖（如果没有 pnpm，用 npm）
npm install
# 或
pnpm install

# 启动本地开发服务器
npm run docs:dev
# 或
pnpm docs:dev

# 访问 http://localhost:5173
```

---

## 四、构建与部署

### 方式一：自动部署（推荐，使用 GitHub Actions）

每次推送 `master` 分支时，GitHub Actions 会自动构建并部署。

**关键文件：** `.github/workflows/deploy.yml`

自动部署会完成以下操作：
1. 安装依赖（pnpm）
2. 构建 VitePress 站点
3. **复制 CNAME 文件到构建产物**（确保自定义域名生效）
4. 上传到 GitHub Pages

### 方式二：手动构建部署

```bash
# 构建
npm run docs:build

# 构建产物在 .vitepress/dist/ 目录
# 复制 CNAME 文件
cp CNAME .vitepress/dist/CNAME

# 将 .vitepress/dist/ 内容上传到 GitHub Pages
```

---

## 五、修改域名

如果未来需要更换域名，只需修改两个地方：

### 1. 修改根目录下的 `CNAME` 文件

```
# CNAME
# 将旧域名改为新域名，例如：
newdomain.com
```

### 2. 修改 GitHub Pages 设置

进入 GitHub 仓库 Settings → Pages → Custom domain，填入新域名。

### 3. 更新 DNS 解析

在域名服务商处更新 CNAME 记录指向 GitHub Pages。

---

## 六、项目文件结构

```
vitepress-demo/
├── .github/workflows/deploy.yml   # GitHub Actions 自动部署配置
├── .vitepress/
│   ├── config.mjs                 # VitePress 主配置（站点信息、导航、侧边栏等）
│   └── dist/                      # 构建产物（不要手动编辑）
├── CNAME                          # 自定义域名文件（必填！）
├── index.md                       # 首页内容
├── package.json                   # 项目依赖
├── about/                         # 关于页内容
├── daily/                         # 日常笔记
├── devops/                        # DevOps 文章
├── experience/                    # 踩坑经验
├── leading/                       # 前端文章
├── tools/                         # 工具文章
└── public/                        # 公共资源（logo 等，构建后在根目录访问）
```

---

## 七、常见问题

### Q1: 部署后域名无法访问

- 检查 DNS CNAME 记录是否正确指向 `用户名.github.io`
- 等待 DNS 生效（通常几分钟到几小时）
- 检查 GitHub Pages 设置中是否正确配置了 Custom domain

### Q2: CNAME 文件丢失

- 每次 `docs:build` 不会自动复制 CNAME
- 本地开发时手动执行：`cp CNAME .vitepress/dist/CNAME`
- GitHub Actions 已自动包含此步骤

### Q3: 如何修改导航栏/侧边栏

编辑 `.vitepress/config.mjs` 中的 `nav`（导航栏）和 `sidebar`（侧边栏）配置。

### Q4: 如何添加新文章

在对应目录（如 `daily/`）下新建 `.md` 文件，在 `index.md` 中配置侧边栏即可。
