import { createContext, useContext, useState, useCallback, useMemo, type ReactNode } from "react";
import type { Post, Category } from "../data/posts";
import { posts as staticPosts, DEFAULT_CATEGORY_ID, DEFAULT_CATEGORY_NAME } from "../data/posts";
import { loadLocalData, saveLocalData, generateId } from "../utils/localStorage";
import { loadSiteSettings } from "../utils/siteSettings";
import userPosts from "../data/user-posts.json";

const SEED_CATEGORIES: Category[] = [
  { id: DEFAULT_CATEGORY_ID, name: DEFAULT_CATEGORY_NAME },
  { id: "linux", name: "Linux" },
  { id: "unity", name: "Unity" },
  { id: "algorithm", name: "算法" },
  { id: "pattern", name: "设计模式" },
  { id: "insight", name: "心得" },
  { id: "tools", name: "Tools" },
];

function mergeCategories(localData: ReturnType<typeof loadLocalData>): Category[] {
  if (!localData.categories) localData.categories = [];
  let changed = false;

  const siteSettings = loadSiteSettings();
  const allSeeds = [...SEED_CATEGORIES, ...(siteSettings.categories || [])];
  const seen = new Set<string>();
  const deduped: Category[] = [];
  for (const c of allSeeds) {
    if (!seen.has(c.id)) {
      deduped.push(c);
      seen.add(c.id);
    }
  }
  for (const seed of deduped) {
    if (!localData.categories.some((c: Category) => c.id === seed.id)) {
      localData.categories.push(seed);
      changed = true;
    }
  }
  if (changed) saveLocalData(localData);
  return localData.categories;
}

function mergePosts(localData: ReturnType<typeof loadLocalData>): Post[] {
  const result: Post[] = [...localData.posts];
  const localIds = new Set(localData.posts.map((p) => p.id));

  for (const sp of staticPosts) {
    if (localData.deletedStaticIds.includes(sp.id)) continue;
    if (localIds.has(sp.id)) continue;
    result.push(sp);
  }

  for (const up of userPosts as Post[]) {
    if (localData.deletedStaticIds.includes(up.id)) continue;
    if (localIds.has(up.id)) continue;
    result.push(up);
  }

  result.sort((a, b) => b.date.localeCompare(a.date));
  return result;
}

export interface BlogData {
  posts: Post[];
  categories: Category[];
  addPost: (post: Omit<Post, "id">) => void;
  updatePost: (post: Post) => void;
  deletePost: (id: string) => void;
  addCategory: (name: string) => void;
  updateCategory: (category: Category) => void;
  deleteCategory: (id: string) => void;
  getCategoryName: (id?: string) => string;
}

const BlogContext = createContext<BlogData | null>(null);

export function BlogProvider({ children }: { children: ReactNode }) {
  const [version, setVersion] = useState(0);

  // Load local data once — re-reads when version bumps (post/category mutations)
  const localData = useMemo(() => loadLocalData(), [version]);

  const posts = useMemo(() => mergePosts(localData), [localData]);
  const categories = useMemo(() => mergeCategories(localData), [localData]);

  const addPost = useCallback((post: Omit<Post, "id">) => {
    const ld = loadLocalData();
    ld.posts.unshift({ ...post, id: generateId() });
    saveLocalData(ld);
    setVersion((v) => v + 1);
  }, []);

  const updatePost = useCallback((post: Post) => {
    const ld = loadLocalData();
    const idx = ld.posts.findIndex((p) => p.id === post.id);
    if (idx >= 0) {
      ld.posts[idx] = post;
    } else {
      ld.posts.unshift(post);
    }
    saveLocalData(ld);
    setVersion((v) => v + 1);
  }, []);

  const deletePost = useCallback((id: string) => {
    const ld = loadLocalData();
    ld.posts = ld.posts.filter((p) => p.id !== id);
    const isStatic = staticPosts.some((p) => p.id === id);
    if (isStatic && !ld.deletedStaticIds.includes(id)) {
      ld.deletedStaticIds.push(id);
    }
    saveLocalData(ld);
    setVersion((v) => v + 1);
  }, []);

  const addCategory = useCallback((name: string) => {
    const ld = loadLocalData();
    mergeCategories(ld);
    ld.categories!.push({ id: generateId(), name: name.trim() });
    saveLocalData(ld);
    setVersion((v) => v + 1);
  }, []);

  const updateCategory = useCallback((category: Category) => {
    const ld = loadLocalData();
    mergeCategories(ld);
    const idx = ld.categories!.findIndex((c) => c.id === category.id);
    if (idx >= 0) {
      ld.categories![idx] = category;
      saveLocalData(ld);
      setVersion((v) => v + 1);
    }
  }, []);

  const deleteCategory = useCallback((id: string) => {
    if (id === DEFAULT_CATEGORY_ID) return;
    const ld = loadLocalData();
    mergeCategories(ld);
    ld.categories = ld.categories!.filter((c) => c.id !== id);
    saveLocalData(ld);
    setVersion((v) => v + 1);
  }, []);

  const getCategoryName = useCallback(
    (id?: string): string => {
      if (!id) return "未分类";
      const cat = categories.find((c) => c.id === id);
      return cat ? cat.name : "未分类";
    },
    [categories],
  );

  const value = useMemo<BlogData>(
    () => ({
      posts,
      categories,
      addPost,
      updatePost,
      deletePost,
      addCategory,
      updateCategory,
      deleteCategory,
      getCategoryName,
    }),
    [posts, categories, addPost, updatePost, deletePost, addCategory, updateCategory, deleteCategory, getCategoryName],
  );

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}

export function useBlog(): BlogData {
  const ctx = useContext(BlogContext);
  if (!ctx) throw new Error("useBlog() must be used within <BlogProvider>");
  return ctx;
}
