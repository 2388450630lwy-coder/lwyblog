import type { Post, Category } from "../data/posts";

const STORAGE_KEY = "lwyblog-posts";

export interface LocalStorageData {
  posts: Post[];
  deletedStaticIds: string[];
  categories?: Category[];
}

export function loadLocalData(): LocalStorageData {
  const defaultData: LocalStorageData = { posts: [], deletedStaticIds: [] };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultData;
    const data = JSON.parse(raw);
    if (!Array.isArray(data.posts)) return defaultData;
    if (!Array.isArray(data.deletedStaticIds)) return defaultData;
    return data as LocalStorageData;
  } catch {
    return defaultData;
  }
}

export function saveLocalData(data: LocalStorageData): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    console.warn("localStorage quota exceeded, changes won't persist");
  }
}

export function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}
