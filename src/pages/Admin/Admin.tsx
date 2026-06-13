import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Modal, Table, Select, Input } from "animal-island-ui";
import type { TableColumn } from "animal-island-ui";
import { usePosts } from "../../hooks/usePosts";
import { useCategories } from "../../hooks/useCategories";
import type { Post, Category } from "../../data/posts";
import { DEFAULT_CATEGORY_ID, posts as staticPosts } from "../../data/posts";
import { loadLocalData } from "../../utils/localStorage";
import { deploySiteConfig, setDeployToken, getDeployToken } from "../../utils/deploy";
import ArticleForm from "./ArticleForm";
import { loadImages, deleteImage, type StoredImage } from "../../utils/images";
import { loadSiteSettings, saveSiteSettings, type FAQItem } from "../../utils/siteSettings";
import { loadSocial, saveSocial as persistSocial } from "../../utils/socialLinks";
import "./Admin.less";

const ADMIN_USER = "lwy";
const ADMIN_PASS = "liwenyu2388";
const AUTH_KEY = "lwyblog-auth";

function getAuth(): boolean {
  return sessionStorage.getItem(AUTH_KEY) === "1";
}

function setAuth() {
  sessionStorage.setItem(AUTH_KEY, "1");
}

export default function Admin() {
  const navigate = useNavigate();
  const { posts, addPost, updatePost, deletePost } = usePosts();
  const { categories, addCategory, updateCategory, deleteCategory, getCategoryName } = useCategories();
  const [dark, setDark] = useState(() =>
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => observer.disconnect();
  }, []);

  const [authed, setAuthed] = useState(getAuth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [formOpen, setFormOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<Post | null>(null);
  const [categoryFilter, setCategoryFilter] = useState("全部");
  const [searchQuery, setSearchQuery] = useState("");

  // Category management state
  const [editingCatId, setEditingCatId] = useState<string | null>(null);
  const [editingCatName, setEditingCatName] = useState("");
  const [newCatName, setNewCatName] = useState("");
  const [catDeleteConfirm, setCatDeleteConfirm] = useState<Category | null>(null);
  const [adminTab, setAdminTab] = useState<"posts" | "categories" | "images" | "social" | "site" | "homepage">("posts");

  // Social media state
  const [github, setGithub] = useState("");
  const [emailSocial, setEmailSocial] = useState("");
  const [weibo, setWeibo] = useState("");
  const [bilibili, setBilibili] = useState("");

  // Image management state
  const [imageList, setImageList] = useState<StoredImage[]>([]);

  const refreshImages = () => setImageList(loadImages());

  // Site settings state
  const [blogTitle, setBlogTitle] = useState("");
  const [avatarEmoji, setAvatarEmoji] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [authorBio, setAuthorBio] = useState("");
  const [skillTags, setSkillTags] = useState<string[]>([]);
  const [logoEmoji, setLogoEmoji] = useState("");
  const [newSkillTag, setNewSkillTag] = useState("");

  const [heroTypewriter, setHeroTypewriter] = useState("");
  const [heroSubtitle, setHeroSubtitle] = useState("");
  const [welcomeModalTitle, setWelcomeModalTitle] = useState("");
  const [welcomeModalBodyTitle, setWelcomeModalBodyTitle] = useState("");
  const [welcomeModalDescription, setWelcomeModalDescription] = useState("");
  const [subscribeTitle, setSubscribeTitle] = useState("");
  const [subscribeDescription, setSubscribeDescription] = useState("");
  const [subscribeSuccessMessage, setSubscribeSuccessMessage] = useState("");
  const [subscribeSwitchOffLabel, setSubscribeSwitchOffLabel] = useState("");
  const [subscribeSwitchOnLabel, setSubscribeSwitchOnLabel] = useState("");

  const [faqItems, setFaqItems] = useState<FAQItem[]>([]);
  const [newFaqQ, setNewFaqQ] = useState("");
  const [newFaqA, setNewFaqA] = useState("");

  const [seoTitle, setSeoTitle] = useState("");
  const [seoDescription, setSeoDescription] = useState("");
  const [seoKeywords, setSeoKeywords] = useState("");

  const [footerType, setFooterType] = useState("sea");
  const [footerCopyright, setFooterCopyright] = useState("");
  const [ghToken, setGhToken] = useState(() => getDeployToken());

  // Toast notification
  const [toastMsg, setToastMsg] = useState("");
  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(""), 2000);
  };

  // Save social media data to localStorage
  const saveSocial = () => {
    persistSocial({
      github: github.trim(),
      email: emailSocial.trim(),
      weibo: weibo.trim(),
      bilibili: bilibili.trim(),
    });
    showToast("社媒信息已保存");
  };

  // Save site settings
  const saveSite = () => {
    const config = {
      blogTitle, avatarEmoji, authorName, authorBio,
      skillTags, logoEmoji,
      heroTypewriter, heroSubtitle,
      welcomeModalTitle, welcomeModalBodyTitle, welcomeModalDescription,
      subscribeTitle, subscribeDescription, subscribeSuccessMessage,
      subscribeSwitchOffLabel, subscribeSwitchOnLabel,
      faqItems,
      seoTitle, seoDescription, seoKeywords,
      footerType, footerCopyright,
    };
    saveSiteSettings(config);
    // Auto-deploy if token is set
    if (ghToken) {
      deploySiteConfig(JSON.stringify(config, null, 2)).then(ok => {
        showToast(ok ? "已保存并触发部署，1-2 分钟后生效" : "保存成功，部署失败");
      });
    } else {
      showToast("站点设置已保存");
    }
  };

  // Load images when switching to images tab
  useEffect(() => {
    if (adminTab === "images") refreshImages();
  }, [adminTab]);

  // Load social data when authenticated
  useEffect(() => {
    if (authed) {
      const data = loadSocial();
      setGithub(data.github || "");
      setEmailSocial(data.email || "");
      setWeibo(data.weibo || "");
      setBilibili(data.bilibili || "");
    }
  }, [authed]);

  // Load site settings when authenticated
  useEffect(() => {
    if (authed) {
      const s = loadSiteSettings();
      setBlogTitle(s.blogTitle);
      setAvatarEmoji(s.avatarEmoji);
      setAuthorName(s.authorName);
      setAuthorBio(s.authorBio);
      setSkillTags(s.skillTags);
      setLogoEmoji(s.logoEmoji);
      setHeroTypewriter(s.heroTypewriter);
      setHeroSubtitle(s.heroSubtitle);
      setWelcomeModalTitle(s.welcomeModalTitle);
      setWelcomeModalBodyTitle(s.welcomeModalBodyTitle);
      setWelcomeModalDescription(s.welcomeModalDescription);
      setSubscribeTitle(s.subscribeTitle);
      setSubscribeDescription(s.subscribeDescription);
      setSubscribeSuccessMessage(s.subscribeSuccessMessage);
      setSubscribeSwitchOffLabel(s.subscribeSwitchOffLabel);
      setSubscribeSwitchOnLabel(s.subscribeSwitchOnLabel);
      setFaqItems(s.faqItems);
      setSeoTitle(s.seoTitle);
      setSeoDescription(s.seoDescription);
      setSeoKeywords(s.seoKeywords);
      setFooterType(s.footerType);
      setFooterCopyright(s.footerCopyright);
    }
  }, [authed]);

  const filterOptions = useMemo(
    () => [
      { label: "全部", key: "全部" },
      ...categories.map((c) => ({ label: c.name, key: c.id })),
    ],
    [categories],
  );

  const filteredPosts = useMemo(() => {
    let result = categoryFilter === "全部"
      ? posts
      : posts.filter((p) => p.categoryId === categoryFilter || (!p.categoryId && categoryFilter === DEFAULT_CATEGORY_ID));

    const q = searchQuery.trim().toLowerCase();
    if (q) {
      result = result.filter((p) => {
        if (p.title.toLowerCase().includes(q)) return true;
        if (p.tags.some((t) => t.toLowerCase().includes(q))) return true;
        if (getCategoryName(p.categoryId).toLowerCase().includes(q)) return true;
        return false;
      });
    }
    return result;
  }, [posts, categoryFilter, searchQuery, getCategoryName]);

  function handleLogin() {
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setAuth();
      setAuthed(true);
      setLoginError("");
    } else {
      setLoginError("账号或密码错误");
    }
  }

  function handleLoginKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter") handleLogin();
  }

  function handleCreate() {
    setEditingPost(null);
    setFormOpen(true);
  }

  function handleEdit(post: Post) {
    setEditingPost(post);
    setFormOpen(true);
  }

  function handleDeleteClick(post: Post) {
    setPostToDelete(post);
    setDeleteConfirmOpen(true);
  }

  function confirmDelete() {
    if (postToDelete) {
      deletePost(postToDelete.id);
      showToast("文章已删除");
    }
    setDeleteConfirmOpen(false);
    setPostToDelete(null);
  }

  function handleSave(data: Post | Omit<Post, "id">) {
    if ("id" in data) {
      updatePost(data as Post);
      showToast("文章已更新");
    } else {
      addPost(data);
      showToast("文章已创建");
    }
    setFormOpen(false);
    setEditingPost(null);
  }

  // Category handlers
  function startEditCat(cat: Category) {
    setEditingCatId(cat.id);
    setEditingCatName(cat.name);
  }

  function saveEditCat() {
    if (editingCatId && editingCatName.trim()) {
      updateCategory({ id: editingCatId, name: editingCatName.trim() });
      showToast("分类已更新");
    }
    setEditingCatId(null);
    setEditingCatName("");
  }

  function handleAddCategory() {
    if (newCatName.trim()) {
      addCategory(newCatName.trim());
      setNewCatName("");
      showToast("分类已添加");
    }
  }

  const tagCount = useMemo(
    () => new Set(posts.flatMap((p) => p.tags)).size,
    [posts],
  );

  const columns: TableColumn[] = [
    {
      title: "标题",
      dataIndex: "title" as keyof Post,
      width: "30%",
      render: (value: unknown) => (
        <span style={{ fontWeight: 700 }}>{String(value)}</span>
      ),
    },
    {
      title: "分类",
      dataIndex: "categoryId" as keyof Post,
      width: "12%",
      render: (_value: unknown, record: unknown) => {
        const post = record as Post;
        return (
          <span className="admin-tag-pill">{getCategoryName(post.categoryId)}</span>
        );
      },
    },
    {
      title: "标签",
      dataIndex: "tags" as keyof Post,
      width: "18%",
      render: (_value: unknown, record: unknown) => {
        const post = record as Post;
        return (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {post.tags.map((t) => (
              <span key={t} className="admin-tag-pill">#{t}</span>
            ))}
          </div>
        );
      },
    },
    {
      title: "日期",
      dataIndex: "date" as keyof Post,
      width: "15%",
      render: (value: unknown) => String(value),
    },
    {
      title: "操作",
      dataIndex: "id" as keyof Post,
      width: "30%",
      render: (_value: unknown, record: unknown) => {
        const post = record as Post;
        return (
          <div style={{ display: "flex", gap: 8 }}>
            <Button type="text" onClick={() => handleEdit(post)}>
              编辑
            </Button>
            <Button type="text" onClick={() => handleDeleteClick(post)}>
              删除
            </Button>
          </div>
        );
      },
    },
  ];

  // Read site info for login / sidebar branding
  const siteInfo = loadSiteSettings();

  // ----- Login screen -----
  if (!authed) {
    return (
      <div
        className={`admin${dark ? " admin--dark" : ""}`}
        style={{
          background: dark ? "#2a241a" : "transparent",
          color: dark ? "#f3e9d2" : "#3b2f22",
          minHeight: "100vh",
          display: "flex",
        }}
      >
        <div className="admin-login">
          <Card>
            <div style={{ padding: 40, textAlign: "center", maxWidth: 360, margin: "0 auto" }}>
              <div style={{ fontSize: 48, marginBottom: 8 }}>{siteInfo.logoEmoji}</div>
              <h2 style={{ margin: "0 0 8px" }}>管理后台</h2>
              <p style={{ margin: "0 0 20px", fontSize: 14, opacity: 0.6 }}>{siteInfo.blogTitle}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="账号"
                  onKeyDown={handleLoginKeyDown}
                />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="密码"
                  onKeyDown={handleLoginKeyDown}
                />
                {loginError && (
                  <p style={{ color: "#e06040", fontSize: 13, margin: 0 }}>{loginError}</p>
                )}
                <Button type="primary" onClick={handleLogin}>
                  登录
                </Button>
              </div>
              <div style={{ marginTop: 16 }}>
                <Button type="text" onClick={() => navigate("/")}>
                  返回博客
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  const sidebarItems = [
    { key: "posts" as const, label: "文章管理", icon: "📝" },
    { key: "categories" as const, label: "分类管理", icon: "📂" },
    { key: "images" as const, label: "图片管理", icon: "🖼" },
    { key: "social" as const, label: "社媒信息", icon: "🔗" },
    { key: "site" as const, label: "站点信息", icon: "🏝" },
    { key: "homepage" as const, label: "首页文案", icon: "📋" },
  ];

  // ----- Admin panel -----
  return (
    <div
      className={`admin${dark ? " admin--dark" : ""}`}
      style={{
        background: dark ? "#2a241a" : "transparent",
        color: dark ? "#f3e9d2" : "#3b2f22",
        minHeight: "100vh",
        display: "flex",
      }}
    >
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-brand" onClick={() => navigate("/")}>
          <span className="admin-sidebar-logo">{siteInfo.logoEmoji}</span>
          <span className="admin-sidebar-name">{siteInfo.blogTitle}</span>
        </div>
        <nav className="admin-sidebar-nav">
          {sidebarItems.map((item) => (
            <button
              key={item.key}
              className={`admin-sidebar-item ${adminTab === item.key ? "admin-sidebar-item--active" : ""}`}
              onClick={() => setAdminTab(item.key)}
            >
              <span className="admin-sidebar-item-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        <div className="admin-sidebar-footer">
          <div style={{ marginBottom: 8 }}>
            <Input
              value={ghToken}
              onChange={(e) => { setGhToken(e.target.value); setDeployToken(e.target.value); }}
              placeholder="GitHub Token (自动部署)"
              style={{ fontSize: 11 }}
            />
          </div>
          <Button type="text" onClick={() => navigate("/")}>
            返回博客
          </Button>
          <Button type="primary" onClick={() => {
            sessionStorage.removeItem(AUTH_KEY);
            setAuthed(false);
          }}>
            退出登录
          </Button>
        </div>
      </aside>

      {/* Main */}
      <main className="admin-main">
        {/* Stats bar */}
        <div className="admin-stats-bar">
          <span>📝 {posts.length} 篇文章</span>
          <span>📂 {categories.length} 个分类</span>
          <span>🏷️ {tagCount} 个标签</span>
        </div>

        {/* Posts Tab */}
        {adminTab === "posts" && (
          <>
            <div className="admin-toolbar">
              <Button type="primary" onClick={handleCreate}>
                + 新建文章
              </Button>
              <Button onClick={() => {
                const localData = loadLocalData();
                const exportPosts = localData.posts.filter((lp: Post) =>
                  !staticPosts.some((sp: Post) => sp.id === lp.id)
                );
                if (exportPosts.length === 0) {
                  showToast("没有需要导出的文章");
                  return;
                }
                const blob = new Blob([JSON.stringify(exportPosts, null, 2)], { type: "application/json" });
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url; a.download = "export-posts.json";
                a.click();
                URL.revokeObjectURL(url);
                showToast(`已导出 ${exportPosts.length} 篇文章`);
              }}>
                导出文章
              </Button>
              <div className="admin-filter-group">
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="搜索标题、标签..."
                />
                <div className="admin-filter-select">
                  <Select
                    value={categoryFilter}
                    onChange={setCategoryFilter}
                    options={filterOptions}
                  />
                </div>
              </div>
            </div>
            <Card>
              <Table
                columns={columns}
                dataSource={filteredPosts as unknown as Record<string, unknown>[]}
                rowKey="id"
                emptyText={
                  searchQuery.trim()
                    ? "没有匹配的文章"
                    : categoryFilter !== "全部"
                      ? "该分类下暂无文章"
                      : "还没有文章，点击「新建文章」开始创作吧！"
                }
              />
            </Card>
          </>
        )}

        {/* Categories Tab */}
        {adminTab === "categories" && (
          <Card>
            <div className="admin-card-inner">
              <h3>📂 分类管理</h3>
              <div className="admin-cat-add">
                <Input
                  value={newCatName}
                  onChange={(e) => setNewCatName(e.target.value)}
                  placeholder="新分类名称"
                  onKeyDown={(e) => { if (e.key === "Enter") handleAddCategory(); }}
                />
                <Button type="primary" onClick={handleAddCategory}>添加</Button>
              </div>
              <div className="admin-cat-list">
                {categories.map((cat) => (
                  <div key={cat.id} className="admin-cat-row">
                    {editingCatId === cat.id ? (
                      <>
                        <Input
                          value={editingCatName}
                          onChange={(e) => setEditingCatName(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") saveEditCat();
                            if (e.key === "Escape") setEditingCatId(null);
                          }}
                        />
                        <Button type="primary" onClick={saveEditCat}>保存</Button>
                        <Button onClick={() => setEditingCatId(null)}>取消</Button>
                      </>
                    ) : (
                      <>
                        <span className="admin-cat-name">{cat.name}</span>
                        <div className="admin-cat-actions">
                          <Button type="text" onClick={() => startEditCat(cat)}>编辑</Button>
                          {cat.id !== DEFAULT_CATEGORY_ID && (
                            <Button type="text" onClick={() => setCatDeleteConfirm(cat)}>删除</Button>
                          )}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Card>
        )}

        {/* Images Tab */}
        {adminTab === "images" && (
          <Card>
            <div className="admin-card-inner">
              <h3>🖼 图片管理</h3>
              <p style={{ fontSize: 13, opacity: 0.6, margin: "0 0 16px" }}>
                共 {imageList.length} 张图片 · 存储在浏览器本地
              </p>
              {imageList.length === 0 ? (
                <p style={{ textAlign: "center", color: "#999", padding: 32 }}>
                  还没有上传图片。在编辑文章时点击「📷 插入图片」即可上传。
                </p>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {imageList.map((img) => (
                    <div
                      key={img.id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        padding: "10px 14px",
                        borderRadius: 12,
                        background: "rgba(255,255,255,0.5)",
                      }}
                    >
                      <img
                        src={img.dataUrl}
                        alt={img.name}
                        style={{ width: 56, height: 56, borderRadius: 8, objectFit: "cover" }}
                      />
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 14, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{img.name}</div>
                        <div style={{ fontSize: 12, opacity: 0.5, marginTop: 2 }}>
                          {img.date} · 引用：<code>@img/{img.id}</code>
                        </div>
                      </div>
                      <Button type="text" onClick={() => {
                        navigator.clipboard.writeText(`![image](@img/${img.id})`);
                        showToast("已复制图片引用");
                      }}>
                        复制
                      </Button>
                      <Button type="text" onClick={() => {
                        deleteImage(img.id);
                        refreshImages();
                        showToast("图片已删除");
                      }}>
                        删除
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Card>
        )}

        {/* Social Tab */}
        {adminTab === "social" && (
          <Card>
            <div className="admin-card-inner">
              <h3>🔗 社媒信息</h3>
              <div className="admin-social-list">
                <div className="admin-social-row">
                  <label>GitHub</label>
                  <Input
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    placeholder="https://github.com/xxx"
                  />
                </div>
                <div className="admin-social-row">
                  <label>邮箱</label>
                  <Input
                    value={emailSocial}
                    onChange={(e) => setEmailSocial(e.target.value)}
                    placeholder="xxx@email.com"
                  />
                </div>
                <div className="admin-social-row">
                  <label>微博</label>
                  <Input
                    value={weibo}
                    onChange={(e) => setWeibo(e.target.value)}
                    placeholder="微博链接或昵称"
                  />
                </div>
                <div className="admin-social-row">
                  <label>Bilibili</label>
                  <Input
                    value={bilibili}
                    onChange={(e) => setBilibili(e.target.value)}
                    placeholder="B站链接或昵称"
                  />
                </div>
              </div>
              <div className="admin-social-save">
                <Button type="primary" onClick={saveSocial}>保存</Button>
              </div>
            </div>
          </Card>
        )}

        {/* Site Settings Tab */}
        {adminTab === "site" && (
          <Card>
            <div className="admin-card-inner">
              <h3>🏝 站点信息</h3>
              <div className="admin-social-list">
                <div className="admin-social-row">
                  <label>站点名称</label>
                  <Input value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} placeholder="LWY's Island" />
                </div>
                <div className="admin-social-row">
                  <label>Logo 图标</label>
                  <Input value={logoEmoji} onChange={(e) => setLogoEmoji(e.target.value)} placeholder="🌿" />
                </div>
                <div className="admin-social-row">
                  <label>头像图标</label>
                  <Input value={avatarEmoji} onChange={(e) => setAvatarEmoji(e.target.value)} placeholder="🦊" />
                </div>
                <div className="admin-social-row">
                  <label>作者昵称</label>
                  <Input value={authorName} onChange={(e) => setAuthorName(e.target.value)} placeholder="你好，我是 LWY" />
                </div>
                <div className="admin-social-row">
                  <label>作者简介</label>
                  <Input value={authorBio} onChange={(e) => setAuthorBio(e.target.value)} placeholder="一段简短的自我介绍..." />
                </div>
              </div>

              {/* Skill Tags */}
              <div style={{ marginTop: 12 }}>
                <label style={{ display: "block", marginBottom: 8, fontWeight: 600, fontSize: 13, opacity: 0.75 }}>
                  技能标签
                </label>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 8 }}>
                  {skillTags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "4px 12px",
                        borderRadius: 14,
                        fontSize: 13,
                        background: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {tag}
                      <span
                        onClick={() => setSkillTags(skillTags.filter((_, i) => i !== idx))}
                        style={{ cursor: "pointer", fontSize: 14, lineHeight: 1, opacity: 0.5 }}
                      >
                        ✕
                      </span>
                    </span>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <Input
                    value={newSkillTag}
                    onChange={(e) => setNewSkillTag(e.target.value)}
                    placeholder="新标签"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && newSkillTag.trim()) {
                        setSkillTags([...skillTags, newSkillTag.trim()]);
                        setNewSkillTag("");
                      }
                    }}
                  />
                  <Button onClick={() => {
                    if (newSkillTag.trim()) {
                      setSkillTags([...skillTags, newSkillTag.trim()]);
                      setNewSkillTag("");
                    }
                  }}>添加</Button>
                </div>
              </div>

              <h4 style={{ margin: "16px 0 8px", fontSize: 13, opacity: 0.6 }}>页脚设置</h4>
              <div className="admin-social-list">
                <div className="admin-social-row">
                  <label>页脚类型</label>
                  <Select
                    value={footerType}
                    onChange={setFooterType}
                    options={[
                      { label: "🌊 海浪 (sea)", key: "sea" },
                      { label: "🌳 树林 (tree)", key: "tree" },
                    ]}
                  />
                </div>
                <div className="admin-social-row">
                  <label>版权文字</label>
                  <Input value={footerCopyright} onChange={(e) => setFooterCopyright(e.target.value)} placeholder="© 2024 Your Name" />
                </div>
              </div>

              <div className="admin-social-save" style={{ marginTop: 20, display: "flex", gap: 12 }}>
                <Button type="primary" onClick={saveSite}>保存</Button>
                <Button onClick={() => {
                  const config = {
                    blogTitle, avatarEmoji, authorName, authorBio,
                    skillTags, logoEmoji,
                    heroTypewriter, heroSubtitle,
                    welcomeModalTitle, welcomeModalBodyTitle, welcomeModalDescription,
                    subscribeTitle, subscribeDescription, subscribeSuccessMessage,
                    subscribeSwitchOffLabel, subscribeSwitchOnLabel,
                    faqItems,
                    seoTitle, seoDescription, seoKeywords,
                    footerType, footerCopyright,
                  };
                  const blob = new Blob([JSON.stringify(config, null, 2)], { type: "application/json" });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement("a");
                  a.href = url; a.download = "site-config.json";
                  a.click();
                  URL.revokeObjectURL(url);
                  showToast("配置文件已下载，替换 src/data/site-config.json 后部署即可");
                }}>导出配置</Button>
              </div>
            </div>
          </Card>
        )}

        {/* Homepage Text Tab */}
        {adminTab === "homepage" && (
          <Card>
            <div className="admin-card-inner">
              <h3>📋 首页文案</h3>

              <h4 style={{ margin: "16px 0 8px", fontSize: 13, opacity: 0.6 }}>Hero 区域</h4>
              <div className="admin-social-list">
                <div className="admin-social-row">
                  <label>打字机文字</label>
                  <Input value={heroTypewriter} onChange={(e) => setHeroTypewriter(e.target.value)} placeholder="欢迎来到我的小岛！" />
                </div>
                <div className="admin-social-row">
                  <label>副标题</label>
                  <Input value={heroSubtitle} onChange={(e) => setHeroSubtitle(e.target.value)} placeholder="在这里记录技术学习与生活点滴 🌿" />
                </div>
              </div>

              <h4 style={{ margin: "16px 0 8px", fontSize: 13, opacity: 0.6 }}>欢迎弹窗</h4>
              <div className="admin-social-list">
                <div className="admin-social-row">
                  <label>弹窗标题</label>
                  <Input value={welcomeModalTitle} onChange={(e) => setWelcomeModalTitle(e.target.value)} placeholder="🌿 欢迎来到无人岛" />
                </div>
                <div className="admin-social-row">
                  <label>正文标题</label>
                  <Input value={welcomeModalBodyTitle} onChange={(e) => setWelcomeModalBodyTitle(e.target.value)} placeholder="欢迎来到我的小岛！" />
                </div>
                <div className="admin-social-row">
                  <label>描述文字</label>
                  <Input value={welcomeModalDescription} onChange={(e) => setWelcomeModalDescription(e.target.value)} placeholder="这里记录着我的技术探索..." />
                </div>
              </div>

              <h4 style={{ margin: "16px 0 8px", fontSize: 13, opacity: 0.6 }}>订阅区</h4>
              <div className="admin-social-list">
                <div className="admin-social-row">
                  <label>订阅标题</label>
                  <Input value={subscribeTitle} onChange={(e) => setSubscribeTitle(e.target.value)} placeholder="📬 订阅更新" />
                </div>
                <div className="admin-social-row">
                  <label>订阅描述</label>
                  <Input value={subscribeDescription} onChange={(e) => setSubscribeDescription(e.target.value)} placeholder="不想错过新文章？留下邮箱吧" />
                </div>
                <div className="admin-social-row">
                  <label>成功消息</label>
                  <Input value={subscribeSuccessMessage} onChange={(e) => setSubscribeSuccessMessage(e.target.value)} placeholder="订阅成功！有新文章时会通知你。" />
                </div>
                <div className="admin-social-row">
                  <label>开关左侧文字</label>
                  <Input value={subscribeSwitchOffLabel} onChange={(e) => setSubscribeSwitchOffLabel(e.target.value)} placeholder="仅新文章" />
                </div>
                <div className="admin-social-row">
                  <label>开关右侧文字</label>
                  <Input value={subscribeSwitchOnLabel} onChange={(e) => setSubscribeSwitchOnLabel(e.target.value)} placeholder="周刊" />
                </div>
              </div>

              {/* FAQ Management */}
              <h4 style={{ margin: "16px 0 8px", fontSize: 13, opacity: 0.6 }}>
                常见问题 ({faqItems.length})
              </h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {faqItems.map((faq, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: "12px 14px",
                      borderRadius: 10,
                      background: "rgba(255,255,255,0.5)",
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 12, opacity: 0.5, flexShrink: 0 }}>Q{idx + 1}:</span>
                      <Input
                        value={faq.question}
                        onChange={(e) => {
                          const next = [...faqItems];
                          next[idx] = { ...next[idx], question: e.target.value };
                          setFaqItems(next);
                        }}
                        placeholder="问题"
                      />
                      <Button type="text" onClick={() => setFaqItems(faqItems.filter((_, i) => i !== idx))}>
                        删除
                      </Button>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 12, opacity: 0.5, flexShrink: 0 }}>A{idx + 1}:</span>
                      <Input
                        value={faq.answer}
                        onChange={(e) => {
                          const next = [...faqItems];
                          next[idx] = { ...next[idx], answer: e.target.value };
                          setFaqItems(next);
                        }}
                        placeholder="答案"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 8 }}>
                <Input value={newFaqQ} onChange={(e) => setNewFaqQ(e.target.value)} placeholder="新问题" />
                <Input value={newFaqA} onChange={(e) => setNewFaqA(e.target.value)} placeholder="新答案" />
                <Button onClick={() => {
                  if (newFaqQ.trim() && newFaqA.trim()) {
                    setFaqItems([...faqItems, { question: newFaqQ.trim(), answer: newFaqA.trim() }]);
                    setNewFaqQ("");
                    setNewFaqA("");
                  }
                }}>添加</Button>
              </div>

              <h4 style={{ margin: "16px 0 8px", fontSize: 13, opacity: 0.6 }}>SEO / 元信息</h4>
              <div className="admin-social-list">
                <div className="admin-social-row">
                  <label>页面标题</label>
                  <Input value={seoTitle} onChange={(e) => setSeoTitle(e.target.value)} placeholder="LWY's Island" />
                </div>
                <div className="admin-social-row">
                  <label>描述 (meta)</label>
                  <Input value={seoDescription} onChange={(e) => setSeoDescription(e.target.value)} placeholder="description" />
                </div>
                <div className="admin-social-row">
                  <label>关键词 (meta)</label>
                  <Input value={seoKeywords} onChange={(e) => setSeoKeywords(e.target.value)} placeholder="博客, 前端, React" />
                </div>
              </div>

              <div className="admin-social-save" style={{ marginTop: 20 }}>
                <Button type="primary" onClick={saveSite}>保存</Button>
              </div>
            </div>
          </Card>
        )}
      </main>

      {/* Toast */}
      {toastMsg && (
        <div style={{ position: "fixed", bottom: 32, left: "50%", zIndex: 9999, pointerEvents: "none" }}>
          <div
            style={{
              transform: "translateX(-50%)",
              padding: "10px 24px",
              borderRadius: 12,
              background: dark ? "rgba(58,49,37,0.95)" : "rgba(60,50,30,0.9)",
              color: "#f3e9d2",
              fontSize: 14,
              fontWeight: 600,
              boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
              animation: "toastIn 0.3s ease",
            }}
          >
            {toastMsg}
          </div>
        </div>
      )}

      {/* Modals */}
      <Modal
        open={!!catDeleteConfirm}
        onClose={() => setCatDeleteConfirm(null)}
        onOk={() => {
          if (catDeleteConfirm) {
            deleteCategory(catDeleteConfirm.id);
            showToast("分类已删除");
            setCatDeleteConfirm(null);
          }
        }}
        title="确认删除分类"
      >
        <p style={{ padding: 16, color: "#666" }}>
          确定要删除分类「{catDeleteConfirm?.name}」吗？已有文章将显示为"未分类"。
        </p>
      </Modal>

      <Modal
        open={formOpen}
        onClose={() => { setFormOpen(false); setEditingPost(null); }}
        title={editingPost ? "编辑文章" : "新建文章"}
        footer={null}
        width={700}
      >
        <ArticleForm
          initialData={editingPost}
          categories={categories}
          onSave={handleSave}
          onCancel={() => { setFormOpen(false); setEditingPost(null); }}
        />
      </Modal>

      <Modal
        open={deleteConfirmOpen}
        onClose={() => setDeleteConfirmOpen(false)}
        onOk={confirmDelete}
        title="确认删除"
      >
        <p style={{ padding: 16, color: "#666" }}>
          确定要删除文章「{postToDelete?.title}」吗？此操作不可撤销。
        </p>
      </Modal>
    </div>
  );
}
