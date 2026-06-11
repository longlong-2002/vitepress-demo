# 项目启动指南

这是一个基于 VitePress 的静态网站项目。本教程详细说明如何从零开始启动这个项目。

## 前置条件

1. **Node.js**（推荐 v18 或更高版本）
   - 检查安装：`node --version`
   - 下载地址：https://nodejs.org/

2. **包管理工具**（二选一）
   - npm（Node.js 自带）：`npm --version`
   - pnpm（推荐）：`pnpm --version` 或 `npm install -g pnpm`

## 一、克隆/进入项目目录

```bash
cd d:\my-notes\vitepress-demo
```

## 二、安装依赖

**使用 npm：**
```bash
npm install
```

**使用 pnpm（推荐）：**
```bash
pnpm install
```

这会根据 `package.json` 和 lock 文件安装所有必需的依赖包到 `node_modules` 文件夹。

**预计时间：** 1-5 分钟（取决于网速和机器性能）

## 三、启动开发服务器

### 方式一：npm 命令

```bash
npm run docs:dev
```

### 方式二：pnpm 命令（推荐）

```bash
pnpm run docs:dev
```

### 方式三：直接运行 VitePress

```bash
# 使用 npm
npx vitepress dev . --port 8732

# 使用 pnpm
pnpm exec vitepress dev . --port 8732
```

## 四、访问项目

启动后，你会看到类似的输出：

```
  vitepress v1.5.0

  ➜  Local:   http://localhost:8732/
  ➜  Network: use --host to expose
```

在浏览器中打开：**http://localhost:8732/**

## 五、其他常用命令

### 构建生产版本
```bash
npm run docs:build
# 或
pnpm run docs:build
```

生成的静态文件会在 `.vitepress/dist` 目录中。

### 预览生产构建
```bash
npm run docs:preview
# 或
pnpm run docs:preview
```

在 `http://localhost:8730/` 上查看构建后的效果。

### 代码格式化
```bash
npm run lint
# 或
pnpm run lint
```

使用 Prettier 格式化所有 `.js`、`.ts`、`.md`、`.json`、`.css`、`.scss` 文件。

## 六、项目结构说明

```
vitepress-demo/
├── .vitepress/               # VitePress 配置目录
│   ├── config.mjs           # 主配置文件
│   ├── theme/               # 主题定制
│   │   ├── styles/          # 样式文件 (SCSS)
│   │   └── MLayout.vue      # 自定义布局
│   └── configs/             # 配置模块
│       ├── nav.js           # 导航栏配置
│       └── sidebar.js       # 侧边栏配置
├── about/                    # 关于页面
├── daily/                    # 日常笔记
├── devops/                   # 运维笔记
├── efficiency/               # 效率工具
├── goal/                     # 目标管理
├── leading/                  # 前端学习
├── public/                   # 静态资源
├── package.json              # 项目配置和依赖
├── pnpm-workspace.yaml       # Pnpm 工作区配置
└── index.md                  # 首页
```

## 七、故障排除

### 问题 1：Node.js 版本过低
**症状：** 启动时出现版本不兼容错误
```bash
# 检查版本
node --version
# 需要升级 Node.js 到 v18+
```

### 问题 2：依赖安装失败
**解决方案：**
```bash
# 清除 npm 缓存
npm cache clean --force

# 删除 node_modules 和 lock 文件
rm -r node_modules package-lock.json

# 重新安装
npm install
```

### 问题 3：端口 8732 已被占用
**解决方案：**
```bash
# 使用其他端口
npm run docs:dev -- --port 8888
```

### 问题 4：Sass 编译警告
**现象：** 看到很多关于 `@import` 废弃的警告，但项目仍能运行

这是正常的警告，不影响运行。如需消除，可以将 `.vitepress/theme/styles/index.scss` 中的 `@import` 改为 `@use`。

### 问题 5：热更新不工作
**解决方案：**
```bash
# 重启开发服务器
# 1. 按 Ctrl+C 停止
# 2. 再次运行 npm run docs:dev
```

## 八、开发工作流

1. **启动开发服务器**
   ```bash
   npm run docs:dev
   ```

2. **编辑 Markdown 文件**
   - 在 `about/`、`daily/` 等目录中修改或创建 `.md` 文件
   - 修改会自动热更新

3. **修改配置**
   - 编辑 `.vitepress/config.mjs` 修改站点配置
   - 修改 `.vitepress/configs/nav.js` 和 `sidebar.js` 修改导航和侧边栏
   - 修改 `.vitepress/theme/styles/` 中的 SCSS 文件修改样式

4. **构建部署**
   ```bash
   npm run docs:build
   # 上传 .vitepress/dist 目录到服务器
   ```

## 九、快速参考

| 任务 | 命令 |
|------|------|
| 安装依赖 | `npm install` 或 `pnpm install` |
| 启动开发 | `npm run docs:dev` 或 `pnpm run docs:dev` |
| 构建生产 | `npm run docs:build` 或 `pnpm run docs:build` |
| 预览构建 | `npm run docs:preview` 或 `pnpm run docs:preview` |
| 格式化代码 | `npm run lint` 或 `pnpm run lint` |
| 停止服务 | `Ctrl+C` |

## 十、更多资源

- VitePress 官方文档：https://vitepress.dev/
- Markdown 基础语法：https://markdown.com.cn/
- 项目首页：http://localhost:8732/

---

**提示：** 首次启动通常需要 1-2 分钟来编译样式和配置。之后的热更新会很快。
