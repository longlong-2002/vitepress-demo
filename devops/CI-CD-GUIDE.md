# 技术笔记站点搭建教程 & CI/CD 使用指南

> 本项目是一个基于 **VitePress** 的个人技术博客，使用 **GitHub Pages** 免费托管，通过 **GitHub Actions** 实现自动化部署。
>
> 本教程面向新手，每一步都写得很详细，照着做就行。

---

## 目录

1. [环境准备：安装必要的软件](#1-环境准备安装必要的软件)
2. [获取项目：克隆代码到本地](#2-获取项目克隆代码到本地)
3. [安装依赖：下载项目所需的包](#3-安装依赖下载项目所需的包)
4. [本地开发：在电脑上预览网站](#4-本地开发在电脑上预览网站)
5. [提交代码：把修改同步到 GitHub](#5-提交代码把修改同步到-github)
6. [自动部署：推送到 master 自动发布](#6-自动部署推送到-master-自动发布)
7. [CI/CD 详解：后台发生了什么](#7-cicd-详解后台发生了什么)
8. [本地提交规范：代码怎么提交](#8-本地提交规范代码怎么提交)
9. [常见问题：遇到问题怎么办](#9-常见问题遇到问题怎么办)

---

## 1. 环境准备：安装必要的软件

在开始之前，你需要安装 **3 个软件**。全部免费，按顺序安装即可。

### 1.1 安装 Git（版本管理工具）

Git 用来下载和管理代码。

1. 打开浏览器，访问：[https://git-scm.com/download/win](https://git-scm.com/download/win)
2. 页面会自动开始下载（如果没下载，点击蓝色链接 "click here to download manually"）
3. 下载完成后，双击 `.exe` 安装文件
4. 一路点击 **Next**（下一步），所有选项保持默认，直到安装完成
5. 安装完成后，**右键点击桌面**，应该会多出两个菜单项：`Git Bash Here` 和 `Git GUI Here`

**验证 Git 是否安装成功**：

```
1. 按键盘 Win + R
2. 输入 cmd，回车（打开命令提示符）
3. 输入：git --version
4. 如果显示版本号（如 git version 2.43.0），说明安装成功
```

### 1.2 安装 Node.js（JavaScript 运行环境）

Node.js 是项目的运行环境，推荐 **20 LTS** 版本。

1. 打开浏览器，访问：[https://nodejs.org](https://nodejs.org)
2. 点击页面上的 **LTS** 大按钮（这是推荐版本，会自动选最新的长期支持版）
3. 下载完成后，双击 `.msi` 安装文件
4. 一路点击 **Next**，勾选接受协议，所有选项保持默认
5. **重要**：安装过程中有一个选项叫 "Automatically install the necessary tools"，确保勾选它
6. 安装完成后重启电脑（或直接重启 PowerShell）

**验证 Node.js 是否安装成功**：

```
1. 按键盘 Win + R
2. 输入 powershell，回车（打开 PowerShell）
3. 输入：node -v
4. 显示 v20.x.x（或更高的 LTS 版本），说明安装成功

5. 再输入：npm -v
6. 显示 10.x.x 左右，说明 npm 也安装成功
```

> **如果 `node -v` 提示"不是内部或外部命令"**：说明环境变量没生效，重启电脑或重新安装 Node.js 即可。

### 1.3 安装 pnpm（更快的包管理器）

pnpm 比 npm 更快、更省硬盘空间。

1. 打开 PowerShell
2. 输入以下命令，回车：

```powershell
npm install -g pnpm
```

3. 等待安装完成
4. 输入：`pnpm -v`，如果显示版本号（如 9.x.x），说明安装成功

---

## 2. 获取项目：克隆代码到本地

### 2.1 选择一个存放项目的位置

假设你要把项目放在 D 盘根目录下：

```
1. 打开 "此电脑"（或按 Win + E 打开资源管理器）
2. 进入 D 盘
3. 如果没有 "my-notes" 这个文件夹，右键 → 新建 → 文件夹，命名为 "my-notes"
```

### 2.2 用 Git 克隆项目

```
1. 按 Win + R，输入 powershell，回车
2. 输入以下命令（按回车执行）：
```

```powershell
cd D:\my-notes
git clone https://github.com/longlong-2002/my-notes.git
```

3. 等待克隆完成（进度条走完）
4. 输入以下命令进入项目目录：

```powershell
cd my-notes\vitepress-demo
```

> ⚠️ **注意**：`cd` 后面有空格，路径中的反斜杠 `\` 不能漏。你可以直接粘贴上面的命令。

**验证是否进入了正确的目录**：

```
输入：pwd
应该显示：D:\my-notes\vitepress-demo
```

### 2.3 如果不想用命令行，也可以手动下载

1. 打开浏览器，访问：[https://github.com/longlong-2002/my-notes](https://github.com/longlong-2002/my-notes)
2. 点击绿色的 **Code** 按钮
3. 点击 **Download ZIP**
4. 解压下载的 `.zip` 文件到 `D:\my-notes\`
5. 进入 `D:\my-notes\vitepress-demo` 目录

---

## 3. 安装依赖：下载项目所需的包

### 3.1 确认你站在正确的位置

```
在 PowerShell 中输入：pwd
应该显示：D:\my-notes\vitepress-demo

如果显示的是其他路径，输入：cd D:\my-notes\vitepress-demo
```

> 🔴 **新手最容易出错的地方**：必须在 `vitepress-demo` 目录下执行命令，而不是在 `C:\Users\小杰` 或其他地方。

### 3.2 安装依赖包

```powershell
pnpm install
```

等待安装完成（通常 1-2 分钟），看到类似输出：

```
Progress: resolved 342, reused 0, downloaded 342, added 342, done
```

如果安装失败，试试：

```powershell
pnpm store prune
pnpm install
```

### 3.3 初始化 Git 钩子

```powershell
pnpm prepare
```

这会安装项目的自动检查工具（用于在提交代码前自动格式化代码）。

---

## 4. 本地开发：在电脑上预览网站

### 4.1 启动开发服务器

```powershell
pnpm docs:dev
```

启动成功后，你会看到类似输出：

```
  VITEPRESS - Startup in 520ms

  ➜  Local:   http://localhost:8732/
  ➜  Network: use --host to expose
```

### 4.2 在浏览器中查看

1. 打开浏览器（推荐 Chrome）
2. 地址栏输入：`http://localhost:8732`
3. 按回车，就能看到你的网站了！

### 4.3 修改内容并查看效果

1. 用编辑器（如 VS Code）打开项目：
   - 按 `Win + R`，输入 `code`，回车
   - 点击 **File → Open Folder**
   - 选择 `D:\my-notes\vitepress-demo`
2. 在左侧文件树中，找到想修改的文件（例如 `README.md` 或 `daily/` 下的笔记）
3. 修改后保存（`Ctrl + S`）
4. 浏览器会自动刷新，看到你修改的内容

> 💡 **热更新**：不需要手动刷新浏览器，改完代码保存后页面自动更新。

### 4.4 停止开发服务器

需要停止时，在 PowerShell 中按 `Ctrl + C`，然后按 `Y` 回车。

### 4.5 构建生产版本

当你准备好发布时：

```powershell
pnpm docs:build
```

构建完成后，产物会生成在 `.vitepress/dist/` 文件夹中。

### 4.6 预览构建结果

```powershell
pnpm docs:preview
```

然后在浏览器打开：`http://localhost:8730`

---

## 5. 提交代码：把修改同步到 GitHub

### 5.1 查看改动了哪些文件

```powershell
git status
```

会列出你修改、新增或删除的文件。

### 5.2 添加文件到暂存区

```powershell
# 添加所有改动的文件
git add .

# 或者只添加指定文件
git add daily/my-first-post.md
```

### 5.3 提交代码

```powershell
git commit -m "docs: add first daily post"
```

> ⚠️ **提交信息有格式要求**（详见第 8 节）。如果格式不对，会提示错误。

### 5.4 推送到 GitHub

```powershell
git push
```

如果提示需要用户名密码：

```powershell
# 首次推送可能需要配置 Git 信息
git config --global user.name "你的GitHub用户名"
git config --global user.email "你的GitHub邮箱"
git push
```

---

## 6. 自动部署：推送到 master 自动发布

### 6.1 第一次配置（只需做一次）

1. 打开浏览器，访问你的 GitHub 仓库：`https://github.com/longlong-2002/my-notes`
2. 点击上方的 **Settings**（设置）
3. 左侧菜单找到 **Pages**，点击进入
4. 在 **Source** 下拉菜单中，选择 **GitHub Actions**
5. 点击 **Save**

> ⚠️ **这一步不做的话，GitHub Pages 不会自动部署！**

### 6.2 推送代码到 master 分支

```powershell
# 确保你在正确的分支
git branch

# 如果在 master 分支，直接推送：
git push

# 如果不在 master 分支，先切换：
git checkout master
git push
```

### 6.3 查看部署进度

1. 打开 GitHub 仓库页面
2. 点击 **Actions** 标签
3. 你会看到 "Deploy VitePress to Pages" 正在运行
4. 等待构建完成（约 1-3 分钟）
5. 部署成功后，点击运行记录右侧的 **View deployment** 即可访问网站

### 6.4 手动触发部署（不用等推送）

如果不想等推送，可以手动触发：

1. 打开 GitHub 仓库 → **Actions**
2. 在左侧找到 "Deploy VitePress to Pages"
3. 点击 **Run workflow**
4. 选择分支（master）→ 点击绿色的 **Run workflow** 按钮

---

## 7. CI/CD 详解：后台发生了什么

### 7.1 整体流程示意图

```
你写代码
  │
  ▼
git push 推送到 GitHub
  │
  ├── 推送到 master ──→ 自动构建 → 自动部署到 GitHub Pages ──→ 你的网站上线
  │
  ├── 创建 PR 到 master ──→ 自动检查代码格式和类型 ──→ 检查通过才能合并
  │
  └── 推送到其他分支 ──→ 自动检查代码（不部署）
```

### 7.2 两个自动化任务

#### 任务一：CI 检查（代码质量检查）

**触发时机**：创建 PR 或 push 到非 master 分支

**检查三项内容**：

| 检查项 | 做什么 | 简单说 |
|--------|--------|--------|
| **Lint** | 检查代码格式是否符合规范 | 缩进、引号、分号对不对 |
| **Type Check** | 检查 TypeScript 类型是否正确 | 有没有拼写错误、类型不匹配 |
| **Build** | 尝试构建整个网站 | 网站能不能正常编译出来 |

三个检查并行执行，全部通过才算成功。

#### 任务二：部署（发布网站）

**触发时机**：推送代码到 master 分支

**执行两步**：

```
第 1 步：构建
  → 下载依赖 → 编译 VitePress → 生成静态文件

第 2 步：部署
  → 把生成的静态文件发布到 GitHub Pages
```

### 7.3 缓存加速

系统会自动缓存已安装的依赖包。首次构建约需 1-2 分钟，后续构建因使用缓存只需几十秒。

---

## 8. 本地提交规范：代码怎么提交

### 8.1 自动格式化（Pre-commit）

每次你提交代码时，系统会自动格式化所有改动的文件，无需手动操作。

### 8.2 提交信息格式

每次提交代码时，信息必须按照以下格式书写：

```
type(scope): 描述内容
```

**type** 是固定的，只能从下面选一个：

| type | 用途 | 例子 |
|------|------|------|
| `feat` | 新增功能 | `feat(vitepress): add search bar` |
| `fix` | 修复 bug | `fix(devops): correct docker config` |
| `docs` | 写文档/笔记 | `docs: add kubernetes notes` |
| `style` | 代码格式（不改逻辑） | `style: fix indentation` |
| `refactor` | 重构（不改功能） | `refactor(config): simplify sidebar` |
| `perf` | 性能优化 | `perf: lazy load images` |
| `test` | 测试相关 | `test: add unit test` |
| `chore` | 杂项/依赖更新 | `chore: update dependencies` |
| `ci` | CI/CD 配置变更 | `ci: add workflow` |
| `build` | 构建系统变更 | `build: upgrade vitepress` |
| `revert` | 回滚 | `revert: revert commit abc123` |

**scope** 是可选的，表示改动的模块，用括号括起来：

- `(vitepress)` — 改的是站点配置
- `(devops)` — 改的是运维笔记
- `(daily)` — 改的是日常笔记
- 也可以省略

**描述内容**要简洁明了，不超过 72 个字符。

### 8.3 正确 vs 错误示例

```
✅ 正确：  docs: add docker installation guide
✅ 正确：  fix(devops): correct image tag in dockerfile
✅ 正确：  feat: add dark mode toggle
✅ 正确：  chore: update pnpm to v9
❌ 错误：  update
❌ 错误：  修复了docker的问题
❌ 错误：  fix : something wrong
```

### 8.4 跳过检查（紧急情况下使用）

```powershell
git commit --no-verify -m "紧急修复"
```

> ⚠️ 仅限紧急情况，事后请补上符合规范的提交。

---

## 9. 常见问题：遇到问题怎么办

### Q1: 执行 pnpm install 报错 "No package.json found"

**原因**：你不在项目目录下。

**解决**：

```powershell
# 先切换到项目目录
cd D:\my-notes\vitepress-demo

# 确认当前目录
pwd
# 应该显示：D:\my-notes\vitepress-demo

# 再执行安装
pnpm install
```

### Q2: node -v 提示"不是内部或外部命令"

**原因**：环境变量没生效。

**解决**：

```
1. 重启电脑
2. 重新打开 PowerShell
3. 再输入 node -v
```

如果还不行，重新安装 Node.js，安装时确保勾选 "Add to PATH"。

### Q3: pnpm install 很慢

**原因**：网络问题，默认连接的是国外源。

**解决**：

```powershell
# 切换到国内镜像源
pnpm config set registry https://registry.npmmirror.com

# 然后重新安装
pnpm install
```

### Q4: 本地开发时页面不刷新

**原因**：浏览器缓存。

**解决**：
- 按 `Ctrl + Shift + R` 强制刷新
- 或按 `F12` 打开开发者工具，右键刷新按钮选择"清空缓存并硬性重新加载"

### Q5: CI 检查失败了怎么办

**步骤**：

```
1. 打开 GitHub 仓库
2. 点击 Actions 标签
3. 找到失败的检查任务
4. 点击查看详情，找到红色错误信息
5. 根据错误信息修改代码
6. 重新推送
```

常见错误和修复：

| 错误信息 | 原因 | 解决 |
|----------|------|------|
| Prettier check failed | 代码格式不对 | 本地运行 `pnpm lint` 自动修复 |
| TypeScript error | 类型错误 | 本地运行 `npx tsc --noEmit` 查看错误 |
| Build failed | 构建出错 | 本地运行 `pnpm docs:build` 查看错误 |

### Q6: GitHub Pages 显示 404

**检查步骤**：

```
1. 打开仓库 → Settings → Pages
2. 确认 Source 选的是 "GitHub Actions"
3. 打开 Actions 标签，确认部署任务成功（绿色对勾）
4. 部署成功后，点击运行记录右侧的 "View deployment"
5. 如果仍有问题，等待 2-3 分钟（GitHub Pages 需要时间生效）
```

### Q7: Git push 被要求输入用户名和密码

**原因**：GitHub 已不再支持密码认证。

**解决**：

```
方法 1：使用 GitHub Personal Access Token
  1. 打开 https://github.com/settings/tokens
  2. 点击 Generate new token (classic)
  3. 勾选 repo 权限
  4. 生成 token 并复制
  5. 推送时，用户名输入 GitHub 用户名，密码粘贴 token

方法 2：使用 SSH（推荐）
  1. 生成 SSH 密钥：ssh-keygen -t ed25519 -C "你的邮箱"
  2. 复制公钥：cat ~/.ssh/id_ed25519.pub
  3. 打开 https://github.com/settings/keys
  4. New SSH key，粘贴公钥
  5. 将仓库地址改为 SSH 格式：git remote set-url origin git@github.com:longlong-2002/my-notes.git
```

### Q8: 命令行中反斜杠路径不会输入

**方法 1**：直接用鼠标拖拽文件夹到 PowerShell 窗口，路径会自动输入

**方法 2**：用正斜杠代替反斜杠，PowerShell 同样支持：

```powershell
# 这两种写法等价
cd D:\my-notes\vitepress-demo
cd D:/my-notes/vitepress-demo
```

---

## 快速参考：常用命令速查表

> 复制粘贴这些命令就能用

| 你想做什么 | 输入什么 |
|------------|----------|
| 进入项目目录 | `cd D:\my-notes\vitepress-demo` |
| 查看当前在哪 | `pwd` |
| 安装依赖 | `pnpm install` |
| 启动开发服务器 | `pnpm docs:dev` |
| 构建生产版 | `pnpm docs:build` |
| 预览构建结果 | `pnpm docs:preview` |
| 格式化代码 | `pnpm lint` |
| 查看改了什么 | `git status` |
| 提交代码 | `git add .` 然后 `git commit -m "docs: 描述"` |
| 推送到 GitHub | `git push` |
| 查看提交历史 | `git log --oneline` |
| 停止开发服务器 | `Ctrl + C` 然后按 `Y` |

---

## 下一步

1. 照着教程把环境装好
2. 启动 `pnpm docs:dev` 看看你的网站
3. 修改一篇笔记试试
4. 推送到 GitHub，看看自动部署
5. 遇到问题看第 9 节的 FAQ
