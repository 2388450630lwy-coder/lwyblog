import { useEffect, useRef } from "react";
import "./NoticePublisher.less";

export default function NoticePublisher() {
  const frame = useRef<HTMLIFrameElement>(null);
  const syncTheme = () => {
    frame.current?.contentDocument?.documentElement.classList.toggle(
      "dark", document.documentElement.classList.contains("dark"),
    );
  };

  useEffect(() => {
    const observer = new MutationObserver(syncTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="notice-page">
      <div className="notice-page-intro">
        <div>
          <span className="notice-page-badge">📣 游戏运营工具</span>
          <h1>游戏公告发布</h1>
          <p>编辑多语言公告，预览客户端效果，一键发布到游戏 CDN。</p>
        </div>
        <span className="notice-page-note">资源域名：www.lwyzyc.com/game-notices/ · 草稿保存在当前浏览器</span>
      </div>
      <iframe
        ref={frame}
        title="游戏公告编辑器"
        src={`${import.meta.env.BASE_URL}notice-publisher/index.html`}
        onLoad={syncTheme}
        className="notice-page-frame"
      />
    </main>
  );
}
