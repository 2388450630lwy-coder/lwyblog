# 游戏公告编辑器

入口：管理后台侧栏「游戏公告」，路由 `/#/admin?tab=notices`，沿用后台登录流程。旧路由 `/#/notices` 自动跳转到该后台页签。

保留多环境、页签、三语公告、图片预览和 JSON 导入。点击「一键部署当前环境」将 JSON 和图片一次提交到网站仓库 main，触发既有 GitHub Pages 工作流。先在后台「推送部署」配置 GitHub Token（Contents 写入和 Actions 读取权限），Token 仅保存在当前浏览器会话。

各环境使用独立资源根地址：`https://www.lwyzyc.com/game-notices/{env}/`。清单位于该目录的 `manifest.json`，公告为 `{env}_notice_data.json`，版本文件为 `{SHA256}.json`。例如 Editor 清单为 `https://www.lwyzyc.com/game-notices/editor/manifest.json`。JSON 图片路径相对环境根地址，采用 `images/{SHA256}-文件名`。发布仅更新当前环境的资源、清单和版本号，自动清理其未使用的历史图片。其他环境不受影响；已缓存旧 JSON 的客户端可能无法再加载被删除的旧图。

页面等待本次提交的工作流成功并验证线上 JSON 后才显示部署成功。失败或等待超时会显示原因及已提交的资源地址。发布会沿用网站的整个站点部署流程，不新增独立 CDN 服务。上述地址是发布目标，实际可访问性需要发布后验证。

运行 `npm run dev` 或 `npm run build`。无 ZIP 导出或外部 CDN 脚本依赖。草稿和图片仍保存在当前浏览器，不在设备间共享。

发布同时更新当前环境的 `manifest.json`。格式保留 `files`、`revision`、`schemaVersion` 和 `version`，不含 project。记录包含 `FileHash`（SHA-256）、`fileName`（相对环境目录）和 `size`（实际 UTF-8 字节数）。每次发布 revision 加一，并更新 version。Pre、Prod 初始化清单 revision=0，尚无公告；Editor 已迁移测试公告。根目录旧文件暂保留为兼容快照，后续发布不再更新，客户端需切换至新环境地址。
