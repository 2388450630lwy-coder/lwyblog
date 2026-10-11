# 游戏公告编辑器

入口：管理后台侧栏「游戏公告」，路由 `/#/admin?tab=notices`，沿用后台登录流程。旧路由 `/#/notices` 自动跳转到该后台页签。

保留多环境、页签、三语公告、图片预览和 JSON 导入。点击「一键部署当前环境」将 JSON 和图片一次提交到网站仓库 main，触发既有 GitHub Pages 工作流。先在后台「推送部署」配置 GitHub Token（Contents 写入和 Actions 读取权限），Token 仅保存在当前浏览器会话。

资源根地址：`https://www.lwyzyc.com/game-notices/`。环境 JSON 地址为 `{env}_notice_data.json`（例如 `https://www.lwyzyc.com/game-notices/prod_notice_data.json`）。JSON 图片路径相对资源根地址，采用 `{env}/images/{SHA256}-文件名`，避免旧图缓存；客户端需定期刷新固定地址的 JSON。发布时自动清理当前环境未使用的历史图片，并移除该环境旧图片清单记录；其他环境和其清单引用的图片保留。清理与新资源在同次提交中完成。已缓存旧 JSON 的客户端可能无法再加载被删除的旧图。

页面等待本次提交的工作流成功并验证线上 JSON 后才显示部署成功。失败或等待超时会显示原因及已提交的资源地址。发布会沿用网站的整个站点部署流程，不新增独立 CDN 服务。上述地址是发布目标，实际可访问性需要发布后验证。

运行 `npm run dev` 或 `npm run build`。无 ZIP 导出或外部 CDN 脚本依赖。草稿和图片仍保存在当前浏览器，不在设备间共享。

发布同时更新 `https://www.lwyzyc.com/game-notices/manifest.json`（文件名为 manifest，不是 mainfest）。格式保留 `files`、`revision`、`schemaVersion` 和 `version`。每个资源记录包含 `FileHash`（SHA-256）、`fileName` 和 `size`（实际 UTF-8 字节数）；JSON 同时发布固定地址和 `{FileHash}.json` 版本地址。每次发布将 revision 加一，并更新 version（SHA-256）。现有其他环境和文本资源记录保留；首次发布创建 schemaVersion=2、revision=1 的清单。清单、JSON、图片一起提交，线上清单和两个 JSON 地址均验证通过后才显示成功。
