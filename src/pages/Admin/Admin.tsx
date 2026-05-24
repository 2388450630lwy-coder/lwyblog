import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Modal, Table, Select, Input } from "animal-island-ui";
import type { TableColumn } from "animal-island-ui";
import { usePosts } from "../../hooks/usePosts";
import type { Post } from "../../data/posts";
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
  const dark = document.documentElement.classList.contains("dark");

  const [authed, setAuthed] = useState(getAuth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [formOpen, setFormOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [postToDelete, setPostToDelete] = useState<Post | null>(null);
  const [tagFilter, setTagFilter] = useState("全部");

  const allTags = useMemo(
    () => ["全部", ...new Set(posts.map((p) => p.tag))],
    [posts]
  );

  const filteredPosts = useMemo(
    () => (tagFilter === "全部" ? posts : posts.filter((p) => p.tag === tagFilter)),
    [posts, tagFilter]
  );

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
      title: "标签",
      dataIndex: "tag" as keyof Post,
      width: "15%",
      render: (value: unknown) => (
        <span className="admin-tag-pill">{String(value)}</span>
      ),
    },
    {
      title: "日期",
      dataIndex: "date" as keyof Post,
      width: "15%",
      render: (value: unknown) => String(value),
    },
    {
      title: "阅读时长",
      dataIndex: "readTime" as keyof Post,
      width: "10%",
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
        <Button type="text" onClick={() => {
          sessionStorage.removeItem(AUTH_KEY);
          setAuthed(false);
        }}>
          退出登录
        </Button>
        <Button type="primary" onClick={handleCreate}>
          + 新建文章
        </Button>
        <Select
          value={tagFilter}
          onChange={setTagFilter}
          options={allTags.map((t) => ({ label: t, key: t }))}
        />
      </div>

      <Card color="app-green">
        <Table
          columns={columns}
          dataSource={filteredPosts as unknown as Record<string, unknown>[]}
          rowKey="id"
          emptyText={
            tagFilter !== "全部"
              ? "该标签下暂无文章"
              : "还没有文章，点击「新建文章」开始创作吧！"
          }
        />
      </Card>

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
