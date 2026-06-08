import { useState, useRef, useEffect } from "react";
import { Input, Button, Select, Modal } from "animal-island-ui";
import type { Post, PostSection, Category } from "../../data/posts";
import { DEFAULT_CATEGORY_ID } from "../../data/posts";
import { loadImages, saveImages, deleteImage, compressImage, type StoredImage } from "../../utils/images";

interface ArticleFormProps {
  initialData: Post | null;
  categories: Category[];
  onSave: (data: Post | Omit<Post, "id">) => void;
  onCancel: () => void;
}

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

// Convert PostSection[] → Markdown string
function sectionsToMarkdown(sections: PostSection[]): string {
  return sections
    .map((s) => {
      const heading = `## ${s.heading}`;
      const body = s.paragraphs.join("\n\n");
      return `${heading}\n\n${body}`;
    })
    .join("\n\n");
}

// Convert Markdown string → PostSection[]
function markdownToSections(md: string): PostSection[] {
  const sections: PostSection[] = [];
  const blocks = md.split(/\n(?=## )/);
  for (const block of blocks) {
    const lines = block.trim().split("\n");
    const heading = lines[0].replace(/^##\s*/, "").trim();
    const body = lines
      .slice(1)
      .join("\n")
      .trim()
      .split(/\n\n+/)
      .map((p) => p.trim())
      .filter(Boolean);
    if (heading || body.length > 0) {
      sections.push({
        heading: heading || "",
        paragraphs: body.length > 0 ? body : [""],
      });
    }
  }
  return sections.length > 0 ? sections : [{ heading: "", paragraphs: [""] }];
}

export default function ArticleForm({ initialData, categories, onSave, onCancel }: ArticleFormProps) {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [categoryId, setCategoryId] = useState(initialData?.categoryId ?? DEFAULT_CATEGORY_ID);
  const [tagsStr, setTagsStr] = useState(initialData?.tags?.join(", ") ?? "");
  const [date, setDate] = useState(initialData?.date ?? todayStr());
  const [cover, setCover] = useState(initialData?.cover ?? "");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt ?? "");
  const [markdown, setMarkdown] = useState(
    initialData ? sectionsToMarkdown(initialData.sections) : "## \n\n"
  );
  const [takeaways, setTakeaways] = useState<string[]>(
    initialData?.takeaways ?? [""]
  );

  const [errors, setErrors] = useState<Record<string, string>>({});
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Image modal
  const [imgModalOpen, setImgModalOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const [images, setImages] = useState<StoredImage[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (imgModalOpen) setImages(loadImages());
  }, [imgModalOpen]);

  function insertImage(url: string, imgId?: string) {
    const ta = textareaRef.current;
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    // Use short reference for base64, raw URL for external links
    const ref = imgId ? `@img/${imgId}` : url;
    const text = `![image](${ref})`;
    const newVal = markdown.slice(0, start) + text + markdown.slice(end);
    setMarkdown(newVal);
    // Restore cursor after inserted text
    setTimeout(() => {
      ta.focus();
      ta.selectionStart = ta.selectionEnd = start + text.length;
    }, 0);
    setImgModalOpen(false);
    setImgUrl("");
  }

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const stored = await compressImage(file);
    const updated = [...images, stored];
    saveImages(updated);
    setImages(updated);
    insertImage(stored.dataUrl, stored.id);
  }

  function handleDeleteImg(id: string) {
    const updated = deleteImage(id);
    setImages(updated);
  }

  function validate(): boolean {
    const e: Record<string, string> = {};
    if (!title.trim()) e.title = "标题不能为空";
    if (!categoryId) e.categoryId = "请选择分类";
    const sections = markdownToSections(markdown);
    const hasContent = sections.some((s) => s.heading.trim() || s.paragraphs.some((p) => p.trim()));
    if (!hasContent) e.markdown = "正文不能为空";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSave() {
    if (!validate()) return;
    const cleanSections = markdownToSections(markdown);
    const cleanTakeaways = takeaways.map((t) => t.trim()).filter(Boolean);
    const tags = tagsStr
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    const base = {
      title: title.trim(),
      tags,
      categoryId,
      date: date.trim() || todayStr(),
      cover: cover.trim(),
      excerpt: excerpt.trim(),
      sections: cleanSections,
      takeaways: cleanTakeaways,
    };
    if (initialData) {
      onSave({ ...base, id: initialData.id });
    } else {
      onSave(base);
    }
  }

  function updateTakeaway(idx: number, value: string) {
    setTakeaways((prev) => prev.map((t, i) => (i === idx ? value : t)));
  }

  function addTakeaway() {
    setTakeaways((prev) => [...prev, ""]);
  }

  function removeTakeaway(idx: number) {
    setTakeaways((prev) => prev.filter((_, i) => i !== idx));
  }

  const inlineErrorStyle: React.CSSProperties = {
    color: "#e06040",
    fontSize: 12,
    marginTop: 2,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {/* Basic info */}
      <div>
        <label style={{ fontWeight: 700, fontSize: 14, display: "block", marginBottom: 4 }}>
          标题 *
        </label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="文章标题"
          status={errors.title ? "error" : undefined}
        />
        {errors.title && <div style={inlineErrorStyle}>{errors.title}</div>}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <div>
          <label style={{ fontWeight: 700, fontSize: 14, display: "block", marginBottom: 4 }}>
            分类 *
          </label>
          <Select
            value={categoryId}
            onChange={setCategoryId}
            options={categories.map((c) => ({ label: c.name, key: c.id }))}
          />
          {errors.categoryId && <div style={inlineErrorStyle}>{errors.categoryId}</div>}
        </div>
        <div>
          <label style={{ fontWeight: 700, fontSize: 14, display: "block", marginBottom: 4 }}>
            封面 Emoji
          </label>
          <Input
            value={cover}
            onChange={(e) => setCover(e.target.value)}
            placeholder="如 🌸"
          />
        </div>
      </div>

      <div>
        <label style={{ fontWeight: 700, fontSize: 14, display: "block", marginBottom: 4 }}>
          标签
        </label>
        <Input
          value={tagsStr}
          onChange={(e) => setTagsStr(e.target.value)}
          placeholder="多个标签用逗号分隔，如 React, TypeScript"
        />
      </div>

      <div>
        <label style={{ fontWeight: 700, fontSize: 14, display: "block", marginBottom: 4 }}>
          日期
        </label>
        <Input
          value={date}
          onChange={(e) => setDate(e.target.value)}
          placeholder={todayStr()}
        />
      </div>

      <div>
        <label style={{ fontWeight: 700, fontSize: 14, display: "block", marginBottom: 4 }}>
          摘要
        </label>
        <Input
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
          placeholder="文章摘要"
        />
      </div>

      {/* Markdown body */}
      <div
        style={{
          border: errors.markdown ? "1px solid #e06040" : "1px solid #e8dfc5",
          borderRadius: 12,
          padding: 14,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
          <label style={{ fontWeight: 700, fontSize: 14 }}>
            正文 (Markdown) *
          </label>
          <Button type="text" onClick={() => setImgModalOpen(true)}>
            📷 插入图片
          </Button>
        </div>
        <p style={{ fontSize: 12, color: "#888", margin: "0 0 8px" }}>
          用 <code>## 小标题</code> 分隔段落，空行分隔段落
        </p>
        {errors.markdown && <div style={inlineErrorStyle}>{errors.markdown}</div>}
        <textarea
          ref={textareaRef}
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          rows={18}
          style={{
            width: "100%",
            font: "inherit",
            fontSize: 14,
            padding: 10,
            borderRadius: 8,
            border: "1px solid #d4c9b4",
            resize: "vertical",
            background: "rgba(255,255,255,0.6)",
            lineHeight: 1.6,
          }}
          placeholder={"## 第一段标题\n\n正文内容第一段。\n\n正文内容第二段。\n\n## 第二段标题\n\n更多内容..."}
        />
      </div>

      {/* Takeaways */}
      <div
        style={{
          border: "1px solid #e8dfc5",
          borderRadius: 12,
          padding: 14,
        }}
      >
        <label style={{ fontWeight: 700, fontSize: 14, display: "block", marginBottom: 6 }}>
          要点总结
        </label>
        {takeaways.map((t, i) => (
          <div key={i} style={{ display: "flex", gap: 6, marginBottom: 6 }}>
            <Input
              value={t}
              onChange={(e) => updateTakeaway(i, e.target.value)}
              placeholder={`要点 ${i + 1}`}
            />
            {takeaways.length > 1 && (
              <Button type="text" onClick={() => removeTakeaway(i)}>
                ✕
              </Button>
            )}
          </div>
        ))}
        <Button type="text" onClick={addTakeaway}>
          + 添加要点
        </Button>
      </div>

      {/* Actions */}
      <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 8 }}>
        <Button onClick={onCancel}>取消</Button>
        <Button type="primary" onClick={handleSave}>
          {initialData ? "保存修改" : "创建文章"}
        </Button>
      </div>

      {/* Image Modal */}
      <Modal
        open={imgModalOpen}
        onClose={() => { setImgModalOpen(false); setImgUrl(""); }}
        title="📷 插入图片"
        footer={null}
      >
        <div style={{ padding: "8px 0" }}>
          {/* Upload */}
          <div style={{ marginBottom: 16 }}>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />
            <Button onClick={() => fileInputRef.current?.click()}>
              选择本地图片（自动压缩）
            </Button>
          </div>

          {/* URL input */}
          <div style={{ marginBottom: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6, opacity: 0.6 }}>
              或粘贴图片 URL
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Input
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
                placeholder="https://example.com/image.jpg"
                onKeyDown={(e) => { if (e.key === "Enter" && imgUrl.trim()) insertImage(imgUrl.trim()); }}
              />
              <Button
                type="primary"
                onClick={() => imgUrl.trim() && insertImage(imgUrl.trim())}
              >
                插入
              </Button>
            </div>
          </div>

          {/* Uploaded list */}
          {images.length > 0 && (
            <div>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 8, opacity: 0.6 }}>
                已上传（共 {images.length} 张，点击插入）
              </div>
              <div style={{ maxHeight: 200, overflowY: "auto" }}>
                {images.map((img) => (
                  <div
                    key={img.id}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "6px 0",
                      borderBottom: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    <img
                      src={img.dataUrl}
                      alt=""
                      style={{ width: 40, height: 40, borderRadius: 6, objectFit: "cover", cursor: "pointer" }}
                      onClick={() => insertImage(img.dataUrl, img.id)}
                    />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 13, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                        {img.name}
                      </div>
                      <div style={{ fontSize: 11, opacity: 0.5 }}>{img.date}</div>
                    </div>
                    <Button type="text" onClick={() => {
                      navigator.clipboard.writeText(img.dataUrl);
                    }}>
                      复制
                    </Button>
                    <Button type="text" onClick={() => handleDeleteImg(img.id)}>
                      删除
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}
