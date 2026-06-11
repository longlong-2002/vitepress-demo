# VitePress 博客自定义域名部署教程 (likl.cc.cd)

本文档说明如何将 VitePress 博客部署到自定义域名 **likl.cc.cd**（GitHub Pages 托管）。

---

## 一、修改项目代码

### 1. 添加 CNAME 文件

在仓库**根目录**创建 `CNAME` 文件（没有后缀），内容为：

```
likl.cc.cd
```

> ⚠️ 注意：文件名就是 `CNAME`，没有 `.txt` 后缀。

### 2. 修复 config.mjs

确保 `.vitepress/config.mjs` 中 `title` 只定义一次，没有乱码：

```js
export default defineConfig({
  base: "/",
  title: "龙龙的技术日记",
  appearance: "dark",
  // ... 其余配置
})
```

### 3. 更新部署脚本

`.github/workflows/deploy.yml` 中构建步骤需要包含复制 CNAME 文件：

```yaml
- name: Build with VitePress
  run: |
    pnpm run docs:build
    cp CNAME .vitepress/dist/CNAME 2>/dev/null || true
    touch .nojekyll
```

---

## 二、推送代码到 GitHub

```powershell
cd D:\my-notes\vitepress-demo
git add -A
git commit -m "fix: configure custom domain likl.cc.cd"
git push origin master
```

> 如果 `git push` 失败，需要输入 **GitHub Personal Access Token**（不是密码）。
> 也可以在 GitHub 网页端手动上传 `CNAME`、`.vitepress/config.mjs`、`.github/workflows/deploy.yml` 三个文件。

推送后 GitHub Actions 会自动构建部署，等 1~3 分钟。

---

## 三、域名 DNS 配置

### 1. 验证域名所有权（TXT 记录）

在域名管理后台（DNS 解析管理页面）添加：

| 记录类型 | 记录名称 | 记录值 |
|---------|---------|--------|
| **TXT** | `_github-pages-challenge-longlong-2002.likl` | `8fffc940108b51154035df52fde9c4`（从 GitHub 复制） |

添加后回到 GitHub 点击 **验证** 按钮。

### 2. 域名解析到 GitHub Pages（CNAME 记录）

添加两条 CNAME 记录：

| 记录类型 | 记录名称 | 记录值 |
|---------|---------|--------|
| **CNAME** | `@` | `longlong-2002.github.io`（换成你自己的 GitHub 用户名） |
| **CNAME** | `www` | `longlong-2002.github.io`（换成你自己的 GitHub 用户名） |

添加后保存，等几分钟生效。

---

## 四、GitHub Pages 配置

1. 打开仓库的 Pages 设置：`https://github.com/longlong-2002/vitepress-demo/settings/pages`
2. **Source** 选择 **GitHub Actions**
3. 自定义域名 `likl.cc.cd` 显示为 **Verified**
4. 点击 **Enforce HTTPS** 勾选强制 HTTPS
5. 保存

---

## 五、验证

等待 1~5 分钟后访问 `https://likl.cc.cd`，如果看到博客首页就说明部署成功。

---

## 六、常见问题

### Q1: 访问显示 404

- 确认代码已推送到 GitHub（GitHub Actions 有构建记录吗？）
- 确认 DNS CNAME 记录已添加且已生效
- 确认 GitHub Pages Settings 中已启用 HTTPS

### Q2: 未来更换域名

1. 修改根目录 `CNAME` 文件，写入新域名
2. 修改 GitHub Pages Settings 中的 Custom Domain
3. 在域名管理后台更新 DNS 记录

### Q3: 本地开发

```bash
cd vitepress-demo
npm install
npm run docs:dev
# 访问 http://localhost:5173
```

本地开发时 CNAME 文件不会影响本地访问。

---

## 七、项目文件结构

```
vitepress-demo/
├── .github/workflows/deploy.yml   # GitHub Actions 自动部署配置
├── .vitepress/
│   └── config.mjs                 # VitePress 主配置
├── CNAME                          # 自定义域名文件
├── DEPLOY-TUTORIAL.md             # 本教程
├── index.md                       # 首页内容
├── package.json                   # 项目依赖
├── about/                         # 关于页内容
├── daily/                         # 日常笔记
├── devops/                        # DevOps 文章
├── experience/                    # 踩坑经验
├── leading/                       # 前端文章
├── tools/                         # 工具文章
└── public/                        # 公共资源（logo 等）
```
