import { useState, useCallback, useMemo } from "react";
import type { Category } from "../data/posts";
import { DEFAULT_CATEGORY_ID, DEFAULT_CATEGORY_NAME } from "../data/posts";
import { loadLocalData, saveLocalData, generateId } from "../utils/localStorage";

export interface UseCategoriesReturn {
  categories: Category[];
  addCategory: (name: string) => void;
  updateCategory: (category: Category) => void;
  deleteCategory: (id: string) => void;
  getCategoryName: (id?: string) => string;
}

function ensureCategories(localData: ReturnType<typeof loadLocalData>): Category[] {
  if (!localData.categories || localData.categories.length === 0) {
    localData.categories = [{ id: DEFAULT_CATEGORY_ID, name: DEFAULT_CATEGORY_NAME }];
    saveLocalData(localData);
  }
  return localData.categories;
}

export function useCategories(): UseCategoriesReturn {
  const [version, setVersion] = useState(0);

  const categories = useMemo(() => {
    const localData = loadLocalData();
    if (!localData.categories || localData.categories.length === 0) {
      return [{ id: DEFAULT_CATEGORY_ID, name: DEFAULT_CATEGORY_NAME }];
    }
    return localData.categories;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [version]);

  const addCategory = useCallback((name: string) => {
    const localData = loadLocalData();
    ensureCategories(localData);
    localData.categories!.push({ id: generateId(), name: name.trim() });
    saveLocalData(localData);
    setVersion((v) => v + 1);
  }, []);

  const updateCategory = useCallback((category: Category) => {
    const localData = loadLocalData();
    ensureCategories(localData);
    const idx = localData.categories!.findIndex((c) => c.id === category.id);
    if (idx >= 0) {
      localData.categories![idx] = category;
      saveLocalData(localData);
      setVersion((v) => v + 1);
    }
  }, []);

  const deleteCategory = useCallback((id: string) => {
    if (id === DEFAULT_CATEGORY_ID) return;
    const localData = loadLocalData();
    ensureCategories(localData);
    localData.categories = localData.categories!.filter((c) => c.id !== id);
    saveLocalData(localData);
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

  return { categories, addCategory, updateCategory, deleteCategory, getCategoryName };
}
