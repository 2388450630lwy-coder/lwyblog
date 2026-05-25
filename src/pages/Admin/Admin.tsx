import { useState, useMemo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Modal, Table, Select, Input } from "animal-island-ui";
import type { TableColumn } from "animal-island-ui";
import { usePosts } from "../../hooks/usePosts";
import { useCategories } from "../../hooks/useCategories";
import type { Post, Category } from "../../data/posts";
import { DEFAULT_CATEGORY_ID } from "../../data/posts";
import ArticleForm from "./ArticleForm";
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
        }}
      >
        <div className="admin-login">
          <Card color="app-green">
            <div style={{ padding: 40, textAlign: "center", maxWidth: 360, margin: "0 auto" }}>
              <div style={{ fontSize: 48, marginBottom: 8 }}>🔐</div>
              <h2 style={{ margin: "0 0 20px" }}>管理后台登录</h2>
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
                  ← 返回博客
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // ----- Admin panel -----
  return (
    <div
      className={`admin${dark ? " admin--dark" : ""}`}
      style={{
        background: dark ? "#2a241a" : "transparent",
        color: dark ? "#f3e9d2" : "#3b2f22",
        minHeight: "100vh",
      }}
    >
      <div className="admin-toolbar">
        <div className="admin-toolbar-row">
          <Button type="primary" onClick={() => {
            sessionStorage.removeItem(AUTH_KEY);
            setAuthed(false);
          }}>
            退出登录
          </Button>
          <Button type="primary" onClick={handleCreate}>
            + 新建文章
          </Button>
        </div>
        <div className="admin-toolbar-row">
          <div className="admin-filter-group">
            <span className="admin-filter-label">筛选</span>
            <div className="admin-search-input">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索文章标题、分类、标签..."
              />
            </div>
            <div className="admin-filter-select">
              <Select
                value={categoryFilter}
                onChange={setCategoryFilter}
                options={filterOptions}
              />
            </div>
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

      {/* Category Management */}
      <Card color="app-green">
        <div style={{ padding: 4 }}>
          <h3 style={{ margin: "0 0 14px", fontSize: 16 }}>分类管理</h3>

          {/* Add new category */}
          <div className="admin-cat-add">
            <Input
              value={newCatName}
              onChange={(e) => setNewCatName(e.target.value)}
              placeholder="新分类名称"
              onKeyDown={(e) => { if (e.key === "Enter") handleAddCategory(); }}
            />
            <Button type="primary" onClick={handleAddCategory}>
              添加
            </Button>
          </div>

          {/* Category list */}
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
                    <Button type="primary" onClick={saveEditCat}>
                      保存
                    </Button>
                    <Button onClick={() => setEditingCatId(null)}>
                      取消
                    </Button>
                  </>
                ) : (
                  <>
                    <span className="admin-cat-name">{cat.name}</span>
                    <div className="admin-cat-actions">
                      <Button type="text" onClick={() => startEditCat(cat)}>
                        编辑
                      </Button>
                      {cat.id !== DEFAULT_CATEGORY_ID && (
                        <Button type="text" onClick={() => setCatDeleteConfirm(cat)}>
                          删除
                        </Button>
                      )}
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Category Delete Modal */}
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

      {/* Create/Edit Modal */}
      <Modal
        open={formOpen}
        onClose={() => {
          setFormOpen(false);
          setEditingPost(null);
        }}
        title={editingPost ? "编辑文章" : "新建文章"}
        footer={null}
        width={700}
      >
        <ArticleForm
          initialData={editingPost}
          categories={categories}
          onSave={handleSave}
          onCancel={() => {
            setFormOpen(false);
            setEditingPost(null);
          }}
        />
      </Modal>

      {/* Delete Confirmation Modal */}
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
