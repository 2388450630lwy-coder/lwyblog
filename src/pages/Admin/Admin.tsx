import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Modal, Table, Select, Input } from "animal-island-ui";
import type { TableColumn } from "animal-island-ui";
import { usePosts } from "../../hooks/usePosts";
import { useCategories } from "../../hooks/useCategories";
import type { Post, Category } from "../../data/posts";
import { DEFAULT_CATEGORY_ID } from "../../data/posts";
import ArticleForm from "./ArticleForm";
import { loadImages, deleteImage, type StoredImage } from "../../utils/images";
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
  const [adminTab, setAdminTab] = useState<"posts" | "categories" | "images" | "social">("posts");

  // Social media state
  const SOCIAL_KEY = "lwyblog-social";
  const [github, setGithub] = useState("");
  const [email, setEmailSocial] = useState("");
  const [weibo, setWeibo] = useState("");
  const [bilibili, setBilibili] = useState("");

  // Image management state
  const [imageList, setImageList] = useState<StoredImage[]>([]);

  const refreshImages = () => setImageList(loadImages());

  // Save social media data to localStorage
  const saveSocial = () => {
    localStorage.setItem(SOCIAL_KEY, JSON.stringify({
      github: github.trim(),
      email: email.trim(),
      weibo: weibo.trim(),
      bilibili: bilibili.trim(),
    }));
  };

  // Load images when switching to images tab
  useEffect(() => {
    if (adminTab === "images") refreshImages();
  }, [adminTab]);

  // Load social data when authenticated
  useEffect(() => {
    if (authed) {
      try {
        const raw = localStorage.getItem(SOCIAL_KEY);
        if (raw) {
          const data = JSON.parse(raw);
          setGithub(data.github || "");
          setEmailSocial(data.email || "");
          setWeibo(data.weibo || "");
          setBilibili(data.bilibili || "");
        }
      } catch { /* ignore */ }
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
    }
    setDeleteConfirmOpen(false);
    setPostToDelete(null);
  }

  function handleSave(data: Post | Omit<Post, "id">) {
    if ("id" in data) {
      updatePost(data as Post);
    } else {
      addPost(data);
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
    }
    setEditingCatId(null);
    setEditingCatName("");
  }

  function handleAddCategory() {
    if (newCatName.trim()) {
      addCategory(newCatName.trim());
      setNewCatName("");
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
          <Card color="app-green">
            <div style={{ padding: 40, textAlign: "center", maxWidth: 360, margin: "0 auto" }}>
              <div style={{ fontSize: 48, marginBottom: 8 }}>🌿</div>
              <h2 style={{ margin: "0 0 8px" }}>管理后台</h2>
              <p style={{ margin: "0 0 20px", fontSize: 14, opacity: 0.6 }}>LWY's Island</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="账号"
                  onKeyDown={handleLoginKeyDown}
                />
                <Input
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
          <span className="admin-sidebar-logo">🌿</span>
          <span className="admin-sidebar-name">LWY's Island</span>
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
            <Card color="app-green">
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
          <Card color="app-green">
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
          <Card color="app-green">
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
                      <Button type="text" onClick={() => navigator.clipboard.writeText(`![image](@img/${img.id})`)}>
                        复制
                      </Button>
                      <Button type="text" onClick={() => {
                        deleteImage(img.id);
                        refreshImages();
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
          <Card color="app-green">
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
                    value={email}
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
      </main>

      {/* Modals */}
      <Modal
        open={!!catDeleteConfirm}
        onClose={() => setCatDeleteConfirm(null)}
        onOk={() => {
          if (catDeleteConfirm) {
            deleteCategory(catDeleteConfirm.id);
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
