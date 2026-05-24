import { useState, useCallback, useMemo } from "react";
import type { Post } from "../data/posts";
import { posts as staticPosts } from "../data/posts";
import { loadLocalData, saveLocalData, generateId } from "../utils/localStorage";

export interface UsePostsReturn {
  posts: Post[];
  addPost: (post: Omit<Post, "id">) => void;
  updatePost: (post: Post) => void;
  deletePost: (id: string) => void;
}

export function usePosts(): UsePostsReturn {
  const [version, setVersion] = useState(0);

  const merged = useMemo(() => {
    const localData = loadLocalData();
    const result: Post[] = [...localData.posts];
    const localIds = new Set(localData.posts.map((p) => p.id));

    for (const sp of staticPosts) {
      if (localData.deletedStaticIds.includes(sp.id)) continue;
      if (localIds.has(sp.id)) continue;
      result.push(sp);
    }

    result.sort((a, b) => b.date.localeCompare(a.date));
    return result;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [version]);

  const addPost = useCallback((post: Omit<Post, "id">) => {
    const localData = loadLocalData();
    const newPost: Post = { ...post, id: generateId() };
    localData.posts.unshift(newPost);
    saveLocalData(localData);
    setVersion((v) => v + 1);
  }, []);

  const updatePost = useCallback((post: Post) => {
    const localData = loadLocalData();
    const idx = localData.posts.findIndex((p) => p.id === post.id);
    if (idx >= 0) {
      localData.posts[idx] = post;
    } else {
      localData.posts.unshift(post);
    }
    saveLocalData(localData);
    setVersion((v) => v + 1);
  }, []);

  const deletePost = useCallback((id: string) => {
    const localData = loadLocalData();
    localData.posts = localData.posts.filter((p) => p.id !== id);

    const isStatic = staticPosts.some((p) => p.id === id);
    if (isStatic && !localData.deletedStaticIds.includes(id)) {
      localData.deletedStaticIds.push(id);
    }
    saveLocalData(localData);
    setVersion((v) => v + 1);
  }, []);

  return { posts: merged, addPost, updatePost, deletePost };
}
