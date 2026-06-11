# Windows 11 安装 Codex Skill：planning-with-files

> 从零开始：安装 Codex → 安装 Skill → 开始使用文件化规划。
> 适用系统：Windows 11（PowerShell）

---

## 一、这个 Skill 是做什么的？

**planning-with-files** 让 Codex 在处理复杂任务时自动创建管理文件：

| 文件 | 用途 |
| --- | --- |
| `task_plan.md` | 任务阶段、进度、决策记录 |
| `findings.md` | 调研发现、收集到的信息 |
| `progress.md` | 每步操作、测试结果、错误日志 |

核心思想：**把重要信息写到文件里，不要只存在对话上下文里**。这样即使对话很长或者被清空（`/clear`），进度也不会丢失。

---

## 二、安装 Codex CLI

> 如果已安装 Codex，跳到[第三部分](#三安装planning-with-files-skill)。

### 方法一：Microsoft Store 安装（推荐 ✅）

1. 打开 **Microsoft Store**
2. 搜索 **"OpenAI Codex"** 或 **"Codex"**
3. 点击 **"获取"** / **"安装"**
4. 安装完成后在开始菜单搜索 "Codex" 即可打开

安装路径：`C:\Program Files\WindowsApps\OpenAI.Codex_*`

### 方法二：通过 GitHub Releases

1. 访问 [OpenAI Codex Releases](https://github.com/openai/codex)
2. 下载最新的 `.msi` 安装包
3. 双击安装，按提示完成

### 验证安装

打开 **PowerShell**（管理员权限非必须），运行：

:::code-group
```sh [window]
where.exe codex
```
:::

如果输出类似 `C:\Program Files\WindowsApps\OpenAI.Codex_...\codex.exe`，说明安装成功。

### 如果提示应用安装失败

:::code-group
```sh [window]
Get-AppxPackage -AllUsers OpenAI.Codex | Foreach {
  Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppXManifest.xml"
}
```
:::

确保 Windows 11 已更新到最新版本，并重启电脑。

---

## 三、安装 planning-with-files Skill

> 前置条件：Codex 已安装并配置好。

### 方法一：使用 Codex 内置安装器（✅ 推荐）

打开 **PowerShell**，复制粘贴以下命令：

:::code-group
```sh [window]
$env:CODEX_HOME = "$env:USERPROFILE\.codex"

python "$env:CODEX_HOME\skills\.system\skill-installer\scripts\install-skill-from-github.py" `
  --repo OthmanAdi/planning-with-files `
  --path . `
  --name planning-with-files `
  --ref master `
  --method download
```
:::

> **注意**：`OthmanAdi/planning-with-files` 使用 `master` 分支（不是 `main`），所以必须加 `--ref master`。

执行成功后会输出：

```
Installed planning-with-files to C:\Users\你的用户名\.codex\skills\planning-with-files
```

---

### 方法二：手动下载安装（网络不好时备用）

#### 第 1 步：下载 ZIP 包

:::code-group
```sh [window]
$wc = New-Object Net.WebClient
$zipPath = "$env:TEMP\planning-with-files.zip"
$zipUrl = "https://codeload.github.com/OthmanAdi/planning-with-files/zip/refs/heads/master"
$wc.DownloadFile($zipUrl, $zipPath)
Write-Host "�� 下载完成：$env:TEMP\planning-with-files.zip"
```
:::

#### 第 2 步：解压

:::code-group
```sh [window]
Add-Type -Assembly System.IO.Compression.FileSystem
$extractPath = "$env:TEMP\planning-with-files-extracted"
[System.IO.Compression.ZipFile]::ExtractToDirectory($zipPath, $extractPath)
Write-Host "�� 已解压到 $extractPath"
```
:::

#### 第 3 步：安装到 Codex

:::code-group
```sh [window]
$dest = "$env:USERPROFILE\.codex\skills\planning-with-files"

if (Test-Path $dest) {
    Write-Host "⚠️  目录已存在：$dest"
} else {
    $source = "$extractPath\planning-with-files-master\.codex\skills\planning-with-files"
    Copy-Item -Recurse $source $dest
    Write-Host "�� 已安装到 $dest"
}
```
:::

#### 第 4 步：清理

:::code-group
```sh [window]
Remove-Item "$extractPath\planning-with-files-master" -Recurse -Force -ErrorAction SilentlyContinue
Remove-Item $zipPath -Force -ErrorAction SilentlyContinue
Write-Host "�� 临时文件已清理"
```
:::

---

## 四、验证安装

确认文件都在：

:::code-group
```sh [window]
Get-ChildItem -Recurse "$env:USERPROFILE\.codex\skills\planning-with-files"
```
:::

应该看到这样的结构：

```
planning-with-files\
├── SKILL.md                     ← Skill 定义（主入口）
├── references\                  ← 参考文档
│   ├── examples.md              ← 使用案例
│   └── reference.md             ← 核心理念
├── scripts\                     ← 辅助脚本
│   ├── init-session.ps1
│   └── session-catchup.py
└── templates\                   ← 模板文件
    ├── task_plan.md
    ├── findings.md
    └── progress.md
```

---

## 五、重启 Codex

⚠️ **必须重启 Codex 才能生效！**

1. 完全关闭 Codex 应用
2. 重新打开 Codex

重启后 Skill 自动加载，无需额外配置。

---

## 六、使用教程

### 直接触发

在 Codex 对话中直接说：

| 你说 | Codex 会 |
| --- | --- |
| `"帮我规划一下这个任务"` | 创建 `task_plan.md`，拆解步骤 |
| `"先做个规划，再开始做"` | 规划 → 执行 |
| `"用 planning-with-files"` | 自动使用文件化规划模式 |

### 自动触发

Codex 遇到复杂任务时**会自动**使用这个 Skill：

- `"帮我重构整个登录模块"`
- `"分析这个项目的安全漏洞"`
- `"搭建一个 Flask 项目"`

### 实际效果

当你说 *"帮我分析这个项目并写出改进建议"* 时，Codex 会：

1. 创建 `task_plan.md` 规划步骤
2. 调研时把发现写入 `findings.md`
3. 每完成一个阶段更新进度
4. 记录错误，避免重复踩坑
5. 做决策前先重新读取规划，确保目标一致

> **注意**：规划文件创建在**你的项目目录**（如 `./task_plan.md`），不是 Skill 安装目录。

---

## 七、Windows 辅助脚本

| 脚本 | 用途 | 运行命令 |
| --- | --- | --- |
| `init-session.ps1` | 初始化规划文件 | `.\scripts\init-session.ps1` |
| `check-complete.ps1` | 检查阶段完成情况 | `.\scripts\check-complete.ps1` |
| `attest-plan.ps1` | 批准规划文件内容 | `.\scripts\attest-plan.ps1` |
| `set-active-plan.ps1` | 设置活跃规划 | `.\scripts\set-active-plan.ps1` |
| `resolve-plan-dir.ps1` | 解析规划目录 | `.\scripts\resolve-plan-dir.ps1` |
| `session-catchup.py` | 恢复上次会话上下文 | `python scripts\session-catchup.py` |

> 首次运行 `.ps1` 脚本可能需要临时解除执行策略限制：
>
> :::code-group
> ```sh [window]
> Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
> ```
> :::

---

## 八、常见问题

### Codex 相关

**Q：Microsoft Store 搜不到 Codex？**
A：确保 Windows 11 已更新到 22H2 或更高版本。也可以通过 [OpenAI 官网](https://openai.com) 下载。

**Q：Codex 启动后提示登录？**
A：需要 OpenAI 账号。访问 [platform.openai.com](https://platform.openai.com) 注册并配置 API Key。

**Q：`where.exe codex` 找不到命令？**
A：说明 Codex 未安装或未添加到系统 PATH。将 `codex.exe` 所在目录添加到 PATH：

:::code-group
```sh [window]
# 临时添加（仅当前终端有效）
$env:Path += ";C:\Program Files\WindowsApps\OpenAI.Codex_*\app\resources"

# 永久添加（管理员 PowerShell 运行）
[Environment]::SetEnvironmentVariable(
    "Path",
    $env:Path + ";C:\Program Files\WindowsApps\OpenAI.Codex_*\app\resources",
    "Machine"
)
```
:::

### 安装相关

**Q：`--method download` 失败，报 404？**
A：改用[方法二](#方法二手动下载安装网络不好时备用)（手动下载 ZIP），那个一定能成功。

**Q：`git clone` 超时？**
A：用方法二的 ZIP 方式，不需要 git。

**Q：Python 报错 `ModuleNotFoundError`？**
A：确认 Python 已安装：`python --version`。需要 Python 3.8+。从 [python.org](https://www.python.org/downloads/) 下载安装，勾选 **"Add Python to PATH"**。

**Q：安装后 Codex 没识别到新 Skill？**
A：确认两点：① 已重启 Codex；② `~\.codex\skills\planning-with-files\SKILL.md` 文件存在。

**Q：规划文件在哪里？**
A：创建在你的**项目根目录**。比如在项目目录下和 Codex 对话，规划文件就在项目根目录。

**Q：什么时候不需要用它？**
A：简单任务不需要，比如改一个文件、查一个命令、回答一个问题。

---

## 九、参考链接

- GitHub 仓库：https://github.com/OthmanAdi/planning-with-files
- OpenAI Codex 官网：https://openai.com/codex
- OpenAI 平台：https://platform.openai.com
