import seedImages from "../data/seed-images.json";

const STORAGE_KEY = "lwyblog-images";
const SEED_LOADED_KEY = "lwyblog-images-seeded";

export interface StoredImage {
  id: string;
  dataUrl: string;
  name: string;
  date: string;
}

function mergeSeedImages(): void {
  try {
    if (localStorage.getItem(SEED_LOADED_KEY)) return;
    const existing = loadImagesRaw();
    const existingIds = new Set(existing.map((e) => e.id));
    const newImages = seedImages.filter((s) => !existingIds.has(s.id));
    if (newImages.length > 0) {
      saveImages([...existing, ...newImages]);
    }
    localStorage.setItem(SEED_LOADED_KEY, "1");
  } catch { /* ignore */ }
}

function loadImagesRaw(): StoredImage[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function loadImages(): StoredImage[] {
  mergeSeedImages();
  return loadImagesRaw();
}

export function saveImages(images: StoredImage[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(images));
}

export function deleteImage(id: string): StoredImage[] {
  const images = loadImages().filter((img) => img.id !== id);
  saveImages(images);
  return images;
}

/** Compress image to max 800px width, JPEG quality 0.8 */
export function compressImage(file: File): Promise<StoredImage> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const maxW = 800;
        let w = img.width;
        let h = img.height;
        if (w > maxW) {
          h = Math.round((h * maxW) / w);
          w = maxW;
        }
        const canvas = document.createElement("canvas");
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(img, 0, 0, w, h);
        const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
        resolve({
          id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
          dataUrl,
          name: file.name,
          date: new Date().toISOString().slice(0, 10),
        });
      };
      img.onerror = reject;
      img.src = reader.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export function generateImageId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
}
