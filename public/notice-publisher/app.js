(function () {
  'use strict';

  const SETTINGS_KEY = 'notice_publisher_v1_settings';
  const LANGS = ['cht', 'en', 'kr'];
  const LANG_LABELS = { cht: '繁中', en: 'English', kr: '한국어' };

  const state = {
    env: 'editor',
    envList: [],
    defaultEnvId: 'prod',
    tabs: [],
    items: [],
    selectedTabId: null,
    selectedItemId: null,
    imageBlobs: {},
    pendingItemFiles: {},
    previewLang: 'cht',
  };

  function defaultEnvList() {
    return [
      { id: 'editor', label: 'Editor' },
      { id: 'pre', label: 'Pre' },
      { id: 'prod', label: 'Prod' },
    ];
  }

  function normalizeEnvId(raw) {
    return String(raw || '')
      .trim()
      .toLowerCase()
      .replace(/\s+/g, '_')
      .replace(/[^a-z0-9_-]/g, '');
  }

  function normalizeEnvEntry(raw) {
    const entry = raw || {};
    const id = normalizeEnvId(entry.id);
    return {
      id: id,
      label: String(entry.label || entry.id || id).trim() || id,
    };
  }

  function getEnvIds() {
    return state.envList.map(function (e) { return e.id; });
  }

  function findEnvEntry(envId) {
    return state.envList.find(function (e) { return e.id === envId; });
  }

  function saveSettings() {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify({
      envList: state.envList,
      defaultEnvId: state.defaultEnvId,
    }));
  }

  function loadSettings() {
    state.envList = defaultEnvList();
    state.defaultEnvId = 'prod';
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return;
    try {
      const data = JSON.parse(raw);
      if (Array.isArray(data.envList) && data.envList.length) {
        state.envList = data.envList.map(normalizeEnvEntry).filter(function (e) { return e.id; });
      }
      if (data.defaultEnvId && findEnvEntry(data.defaultEnvId)) {
        state.defaultEnvId = data.defaultEnvId;
      } else if (state.envList.length) {
        state.defaultEnvId = state.envList[state.envList.length - 1].id;
      }
    } catch (e) {
      console.error(e);
      state.envList = defaultEnvList();
    }
    if (!state.envList.length) state.envList = defaultEnvList();
    if (!findEnvEntry(state.defaultEnvId)) {
      state.defaultEnvId = state.envList[0].id;
    }
    if (!findEnvEntry(state.env)) {
      state.env = state.envList[0].id;
    }
  }

  function migrateEnvStorage(oldId, newId) {
    if (oldId === newId) return;
    const data = localStorage.getItem(storageKey(oldId));
    if (data) {
      localStorage.setItem(storageKey(newId), data);
      localStorage.removeItem(storageKey(oldId));
    }
  }

  function renderEnvList() {
    const el = document.getElementById('envList');
    if (!el) return;
    el.innerHTML = '';
    state.envList.forEach(function (entry) {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'env-btn' + (state.env === entry.id ? ' active' : '');
      btn.dataset.env = entry.id;
      btn.title = entry.id;
      btn.textContent = entry.label;
      btn.onclick = function () { switchEnv(entry.id); };
      el.appendChild(btn);
    });
    renderEnvCopyTargets();
  }

  function renderEnvCopyTargets() {
    const sel = document.getElementById('envCopyTarget');
    if (!sel) return;
    const prev = sel.value;
    sel.innerHTML = '';
    const targets = state.envList.filter(function (entry) { return entry.id !== state.env; });
    if (!targets.length) {
      const opt = document.createElement('option');
      opt.value = '';
      opt.textContent = '无其它环境';
      sel.appendChild(opt);
      sel.disabled = true;
      return;
    }
    sel.disabled = false;
    targets.forEach(function (entry) {
      const opt = document.createElement('option');
      opt.value = entry.id;
      opt.textContent = entry.label;
      opt.title = entry.id;
      sel.appendChild(opt);
    });
    if (prev && targets.some(function (e) { return e.id === prev; })) {
      sel.value = prev;
    }
  }

  function copyStoredImagesBetweenEnvs(fromEnv, toEnv, items) {
    const filenames = Array.from(collectImageFilenamesFromItems(items));
    if (!filenames.length) return Promise.resolve(0);
    let copied = 0;
    return Promise.all(filenames.map(function (filename) {
      return getImageBlobForFilename(filename, fromEnv, items).then(function (blob) {
        if (!blob || !blob.size) return false;
        return persistImageBlob(toEnv, filename, blob).then(function () {
          copied += 1;
          return true;
        });
      });
    })).then(function () { return copied; });
  }

  function copyCurrentEnvToTarget() {
    const targetEnvId = normalizeEnvId(document.getElementById('envCopyTarget').value);
    const fromEnv = state.env;
    const fromEntry = findEnvEntry(fromEnv);
    const toEntry = findEnvEntry(targetEnvId);
    if (!targetEnvId || !toEntry) {
      toast('请选择目标环境');
      return;
    }
    if (fromEnv === targetEnvId) {
      toast('目标环境不能与当前环境相同');
      return;
    }
    const fromLabel = fromEntry ? fromEntry.label : fromEnv;
    const toLabel = toEntry.label;
    if (!confirm(
      '将「' + fromLabel + ' (' + fromEnv + ')」的页签、公告与图片\n'
      + '全部覆盖到「' + toLabel + ' (' + targetEnvId + ')」，是否继续？'
    )) {
      return;
    }

    syncTabEditorToTab();
    syncEditorToItem();
    renderPreview();
    saveEnv();

    const snapshot = readEnvSnapshot(fromEnv);
    const items = snapshot.items.map(function (item) {
      const copy = normalizeItem(JSON.parse(JSON.stringify(item)));
      const entryFile = resolveImageFilename(copy, 'entry');
      const contentFile = resolveImageFilename(copy, 'content');
      copy.entryImage = entryFile ? imageRelativePath(targetEnvId, entryFile) : '';
      copy.contentImage = contentFile ? imageRelativePath(targetEnvId, contentFile) : '';
      return copy;
    });

    localStorage.setItem(storageKey(targetEnvId), JSON.stringify({
      tabs: snapshot.tabs.map(normalizeTab),
      items: items,
    }));

    const btn = document.getElementById('btnCopyEnv');
    if (btn) btn.disabled = true;
    let copiedImageCount = 0;

    copyStoredImagesBetweenEnvs(fromEnv, targetEnvId, snapshot.items).then(function (imageCount) {
      copiedImageCount = imageCount || 0;
      if (state.env === targetEnvId) {
        revokeAllImageObjectUrls();
        state.imageBlobs = {};
        state.pendingItemFiles = {};
        loadEnv(targetEnvId);
        syncFormFromState();
        return hydrateEnvImages(targetEnvId);
      }
    }).then(function () {
      renderAll();
      toast('已复制到 ' + toLabel + '（' + items.length + ' 条公告，' + copiedImageCount + ' 张图片）');
    }).catch(function (err) {
      console.error(err);
      alert('复制失败：' + (err && err.message ? err.message : String(err)));
    }).then(function () {
      if (btn) btn.disabled = false;
    });
  }

  function addEnv() {
    saveEnv();
    const idRaw = prompt('环境 ID（CDN 路径名，如 staging）', 'staging');
    if (idRaw == null) return;
    const id = normalizeEnvId(idRaw);
    if (!id) {
      toast('环境 ID 无效');
      return;
    }
    if (findEnvEntry(id)) {
      toast('环境 ID 已存在');
      return;
    }
    const labelRaw = prompt('显示名称', idRaw.trim() || id);
    if (labelRaw == null) return;
    const label = labelRaw.trim() || id;
    state.envList.push({ id: id, label: label });
    if (!findEnvEntry(state.defaultEnvId)) state.defaultEnvId = id;
    saveSettings();
    switchEnv(id);
    toast('已新增环境 ' + label);
  }

  function editEnv() {
    const current = findEnvEntry(state.env);
    if (!current) return;
    const newIdRaw = prompt('环境 ID（CDN 路径名）', current.id);
    if (newIdRaw == null) return;
    const newId = normalizeEnvId(newIdRaw);
    if (!newId) {
      toast('环境 ID 无效');
      return;
    }
    const newLabelRaw = prompt('显示名称', current.label);
    if (newLabelRaw == null) return;
    const newLabel = newLabelRaw.trim() || newId;
    if (newId !== current.id && findEnvEntry(newId)) {
      toast('环境 ID 已存在');
      return;
    }
    saveEnv();
    if (newId !== current.id) {
      migrateEnvStorage(current.id, newId);
      if (state.defaultEnvId === current.id) state.defaultEnvId = newId;
      current.id = newId;
      state.env = newId;
    }
    current.label = newLabel;
    saveSettings();
    renderAll();
    toast('已更新环境 → ' + newLabel + ' (' + newId + ')');
  }

  function deleteEnv() {
    if (state.envList.length <= 1) {
      toast('至少保留 1 个环境');
      return;
    }
    const current = findEnvEntry(state.env);
    if (!current) return;
    if (!confirm('确定删除环境「' + current.label + '」及其本地数据？')) return;
    localStorage.removeItem(storageKey(current.id));
    state.envList = state.envList.filter(function (e) { return e.id !== current.id; });
    if (state.defaultEnvId === current.id) {
      state.defaultEnvId = state.envList[0].id;
    }
    state.env = state.envList[0].id;
    state.selectedTabId = null;
    state.selectedItemId = null;
    state.imageBlobs = {};
    saveSettings();
    loadEnv(state.env);
    syncFormFromState();
    renderAll();
    toast('已删除环境');
  }

  function emptyLang() {
    return { cht: '', en: '', kr: '' };
  }

  function langText(obj) {
    if (!obj || typeof obj !== 'object') return '';
    if (obj[state.previewLang]) return obj[state.previewLang];
    for (let i = 0; i < LANGS.length; i++) {
      if (obj[LANGS[i]]) return obj[LANGS[i]];
    }
    return '';
  }

  function normalizeTabId(id) {
    const n = parseInt(id, 10);
    return Number.isFinite(n) ? n : 0;
  }

  function normalizeLangObject(obj) {
    const out = emptyLang();
    if (!obj || typeof obj !== 'object') return out;
    LANGS.forEach(function (lang) {
      if (obj[lang] != null) out[lang] = String(obj[lang]);
    });
    return out;
  }

  function normalizeItem(raw) {
    const item = raw || {};
    let entryImageFile = item.entryImageFile || '';
    let contentImageFile = item.contentImageFile || '';
    if (!entryImageFile && item.entryImage) {
      const m = item.entryImage.match(/\/([^/]+)$/);
      entryImageFile = m ? m[1] : '';
    }
    if (!contentImageFile && item.contentImage) {
      const m = item.contentImage.match(/\/([^/]+)$/);
      contentImageFile = m ? m[1] : '';
    }
    return {
      id: String(item.id || 'notice_' + Date.now()),
      tabId: normalizeTabId(item.tabId != null ? item.tabId : 1),
      sortOrder: parseInt(item.sortOrder, 10) || 0,
      startAt: parseInt(item.startAt, 10) || 0,
      endAt: parseInt(item.endAt, 10) || 0,
      showRedDot: item.showRedDot !== false,
      entryImage: item.entryImage || '',
      entryImageFile: entryImageFile,
      contentImage: item.contentImage || '',
      contentImageFile: contentImageFile,
      title: normalizeLangObject(item.title),
      content: normalizeLangObject(item.content),
    };
  }

  function normalizeTab(raw) {
    const tab = raw || {};
    return {
      id: normalizeTabId(tab.id),
      sortOrder: parseInt(tab.sortOrder, 10) || 0,
      name: normalizeLangObject(tab.name),
    };
  }

  function defaultTabs() {
    return [
      { id: 1, sortOrder: 1, name: { cht: '公告', en: 'Notice', kr: '공지' } },
      { id: 2, sortOrder: 2, name: { cht: '系统', en: 'System', kr: '시스템' } },
      { id: 3, sortOrder: 3, name: { cht: '资讯', en: 'News', kr: '정보' } },
    ];
  }

  function defaultItems() {
    const nowMs = Date.now();
    const now = Math.floor(nowMs / 1000);
    const end = now + 86400 * 30;
    return [
      {
        id: 'notice_' + nowMs,
        tabId: 1,
        sortOrder: 100,
        startAt: now,
        endAt: end,
        showRedDot: true,
        entryImage: '',
        entryImageFile: '',
        contentImage: '',
        contentImageFile: '',
        title: { cht: '示例公告', en: 'Sample Notice', kr: '샘플 공지' },
        content: {
          cht: '<size=28><b>【维护时间】</b></size>\n2026-09-02 14:00-17:00\n\n<size=28><b>【重点更新内容】</b></size>\n1. 这是临时编辑器生成的示例公告。',
          en: '<size=28><b>[Maintenance]</b></size>\n2026-09-02 14:00-17:00 UTC+8',
          kr: '샘플 공지 내용',
        },
      },
    ];
  }

  function storageKey(env) {
    return 'notice_publisher_v1_' + env;
  }

  function saveEnv() {
    const payload = {
      tabs: state.tabs,
      items: state.items,
    };
    localStorage.setItem(storageKey(state.env), JSON.stringify(payload));
  }

  function fillImageContainer(container, url, emptyLabel) {
    if (!container) return;
    container.innerHTML = '';
    if (!url) {
      container.textContent = emptyLabel || '无图';
      container.classList.add('empty');
      return;
    }
    container.classList.remove('empty');
    const img = document.createElement('img');
    img.alt = '';
    img.src = url;
    container.appendChild(img);
  }

  function loadEnv(env) {
    const raw = localStorage.getItem(storageKey(env));
    if (!raw) {
      state.tabs = defaultTabs().map(normalizeTab);
      state.items = defaultItems().map(normalizeItem);
      return;
    }
    try {
      const data = JSON.parse(raw);
      state.tabs = (data.tabs || defaultTabs()).map(normalizeTab);
      state.items = (data.items || []).map(normalizeItem);
    } catch (e) {
      console.error(e);
      state.tabs = defaultTabs().map(normalizeTab);
      state.items = defaultItems().map(normalizeItem);
    }
  }

  function switchEnv(env) {
    saveEnv();
    revokeAllImageObjectUrls();
    state.env = env;
    state.selectedTabId = null;
    state.selectedItemId = null;
    state.imageBlobs = {};
    state.pendingItemFiles = {};
    loadEnv(env);
    syncFormFromState();
    hydrateEnvImages(env).then(function () {
      fillEditors();
    renderPreview();
      renderAll();
    });
  }

  function dataUrlToBlob(dataUrl) {
    if (!dataUrl || dataUrl.indexOf('data:') !== 0) return null;
    try {
      const parts = dataUrl.split(',');
      if (parts.length < 2) return null;
      const mimeMatch = parts[0].match(/:(.*?);/);
      const mime = mimeMatch ? mimeMatch[1] : 'application/octet-stream';
      const binary = atob(parts[1]);
      const len = binary.length;
      const bytes = new Uint8Array(len);
      for (let i = 0; i < len; i++) bytes[i] = binary.charCodeAt(i);
      return new Blob([bytes], { type: mime });
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  function urlToBlob(url) {
    if (!url) return Promise.resolve(null);
    if (url.indexOf('data:') === 0) {
      return Promise.resolve(dataUrlToBlob(url));
    }
    return fetch(url).then(function (resp) {
      return resp.ok ? resp.blob() : null;
    }).catch(function () { return null; });
  }

  const IMAGE_DB_NAME = 'notice_publisher_v1_images';
  const IMAGE_STORE = 'blobs';
  let imageDbPromise = null;

  function openImageDb() {
    if (!imageDbPromise) {
      imageDbPromise = new Promise(function (resolve, reject) {
        const req = indexedDB.open(IMAGE_DB_NAME, 1);
        req.onerror = function () { reject(req.error); };
        req.onsuccess = function () { resolve(req.result); };
        req.onupgradeneeded = function (ev) {
          const db = ev.target.result;
          if (!db.objectStoreNames.contains(IMAGE_STORE)) {
            db.createObjectStore(IMAGE_STORE);
          }
        };
      });
    }
    return imageDbPromise;
  }

  function storedImageKey(env, filename) {
    return scopedPendingBlobKey(env, filename);
  }

  function persistImageBlob(env, filename, blob) {
    if (!env || !filename || !blob) return Promise.resolve();
    return openImageDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        const tx = db.transaction(IMAGE_STORE, 'readwrite');
        tx.objectStore(IMAGE_STORE).put(blob, storedImageKey(env, filename));
        tx.oncomplete = function () { resolve(); };
        tx.onerror = function () { reject(tx.error); };
      });
    });
  }

  function loadImageBlob(env, filename) {
    if (!env || !filename) return Promise.resolve(null);
    return openImageDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        const tx = db.transaction(IMAGE_STORE, 'readonly');
        const req = tx.objectStore(IMAGE_STORE).get(storedImageKey(env, filename));
        req.onsuccess = function () { resolve(req.result || null); };
        req.onerror = function () { reject(req.error); };
      });
    }).catch(function (err) {
      console.error('读取图片缓存失败:', env, filename, err);
      return null;
    });
  }

  function deleteStoredImageBlob(env, filename) {
    if (!env || !filename) return Promise.resolve();
    return openImageDb().then(function (db) {
      return new Promise(function (resolve, reject) {
        const tx = db.transaction(IMAGE_STORE, 'readwrite');
        tx.objectStore(IMAGE_STORE).delete(storedImageKey(env, filename));
        tx.oncomplete = function () { resolve(); };
        tx.onerror = function () { reject(tx.error); };
      });
    }).catch(function (err) {
      console.error('删除图片缓存失败:', env, filename, err);
    });
  }

  function isFilenameUsedInItems(items, filename) {
    return items.some(function (item) {
      return resolveImageFilename(item, 'entry') === filename
        || resolveImageFilename(item, 'content') === filename;
    });
  }

  function deleteStoredImageBlobIfUnused(env, filename, items) {
    if (!filename || isFilenameUsedInItems(items, filename)) return Promise.resolve();
    return deleteStoredImageBlob(env, filename);
  }

  function revokeAllImageObjectUrls() {
    Object.keys(state.imageBlobs).forEach(function (key) {
      revokeImageBlobUrl(state.imageBlobs[key]);
    });
  }

  function registerImageBlobInMemory(env, filename, blob) {
    window['_pendingBlob_' + scopedPendingBlobKey(env, filename)] = blob;
    if (env === state.env) {
      window['_pendingBlob_' + filename] = blob;
      state.items.forEach(function (item) {
        if (resolveImageFilename(item, 'entry') === filename) {
          state.pendingItemFiles['entry_' + item.id] = blob;
        }
        if (resolveImageFilename(item, 'content') === filename) {
          state.pendingItemFiles['content_' + item.id] = blob;
        }
      });
    }
  }

  function hydrateEnvImages(env) {
    const filenames = Array.from(collectImageFilenamesFromItems(state.items));
    if (!filenames.length) return Promise.resolve();

    return Promise.all(filenames.map(function (filename) {
      const scoped = window['_pendingBlob_' + scopedPendingBlobKey(env, filename)];
      if (scoped instanceof Blob || scoped instanceof File) {
        return Promise.resolve();
      }
      return loadImageBlob(env, filename).then(function (blob) {
        if (blob && blob.size > 0) {
          registerImageBlobInMemory(env, filename, blob);
        }
      });
    }));
  }

  function scopedPendingBlobKey(env, filename) {
    return env + '/' + filename;
  }

  function findItemFileBlob(filename, env, items) {
    env = env != null ? env : state.env;
    items = items || state.items;

    const scoped = window['_pendingBlob_' + scopedPendingBlobKey(env, filename)];
    if (scoped instanceof Blob || scoped instanceof File) {
      return Promise.resolve(scoped);
    }

    let found = null;
    items.some(function (item) {
      if (item.entryImageFile === filename) {
        const key = 'entry_' + item.id;
        if (env === state.env && state.pendingItemFiles[key]) {
          found = state.pendingItemFiles[key];
          return true;
        }
        if (window['_pendingBlob_' + filename]) {
          found = window['_pendingBlob_' + filename];
          return true;
        }
        if (env === state.env && state.imageBlobs[key]) {
          found = state.imageBlobs[key];
          return true;
        }
      }
      if (item.contentImageFile === filename) {
        const key = 'content_' + item.id;
        if (env === state.env && state.pendingItemFiles[key]) {
          found = state.pendingItemFiles[key];
          return true;
        }
        if (window['_pendingBlob_' + filename]) {
          found = window['_pendingBlob_' + filename];
          return true;
        }
        if (env === state.env && state.imageBlobs[key]) {
          found = state.imageBlobs[key];
          return true;
        }
      }
      return false;
    });
    if (!found) return loadImageBlob(env, filename);
    if (found instanceof Blob || found instanceof File) {
      return Promise.resolve(found);
    }
    return urlToBlob(found);
  }

  function getImageBlobForFilename(filename, env, items) {
    return findItemFileBlob(filename, env, items);
  }

  function imageRelativePath(env, filename) {
    if (!filename) return '';
    return env + '/images/' + filename;
  }

  function hasCustomImageFile(item, kind) {
    const file = kind === 'entry' ? item.entryImageFile : item.contentImageFile;
    return !!file;
  }

  function resolveImageFilename(item, kind) {
    let file = kind === 'entry' ? item.entryImageFile : item.contentImageFile;
    if (!file) {
      const path = kind === 'entry' ? item.entryImage : item.contentImage;
      if (path) {
        const m = String(path).match(/\/([^/]+)$/);
        file = m ? m[1] : '';
      }
    }
    return file ? String(file).trim() : '';
  }

  function cacheBlobUrlForItem(item, kind, blob) {
    const key = kind + '_' + item.id;
    if (state.imageBlobs[key]) return state.imageBlobs[key];
    const url = URL.createObjectURL(blob);
    state.imageBlobs[key] = url;
    return url;
  }

  function resolveImageLocalUrl(item, kind) {
    if (!item) return '';
    const key = kind + '_' + item.id;
    if (state.imageBlobs[key]) return state.imageBlobs[key];

    const pending = state.pendingItemFiles[key];
    if (pending instanceof Blob || pending instanceof File) {
      return cacheBlobUrlForItem(item, kind, pending);
    }

    const file = resolveImageFilename(item, kind);
    if (!file) return '';

    const scoped = window['_pendingBlob_' + scopedPendingBlobKey(state.env, file)];
    const legacy = window['_pendingBlob_' + file];
    const blob = (scoped instanceof Blob || scoped instanceof File)
      ? scoped
      : (legacy instanceof Blob || legacy instanceof File ? legacy : null);
    if (blob) return cacheBlobUrlForItem(item, kind, blob);

    return '';
  }

  /** 正文配图：宽大于 550 缩至 550 等比；宽不超过 550 用原尺寸；在 Banner 区居中 */
  function layoutContentPreviewImage(img) {
    const maxW = 550;
    const nw = img.naturalWidth;
    const nh = img.naturalHeight;
    if (!nw || !nh) return;
    img.style.maxWidth = maxW + 'px';
    img.style.width = nw > maxW ? maxW + 'px' : nw + 'px';
    img.style.height = 'auto';
  }

  function revokeImageBlobUrl(url) {
    if (url && typeof url === 'string' && url.indexOf('blob:') === 0) {
      try {
        URL.revokeObjectURL(url);
      } catch (e) {
        /* ignore */
      }
    }
  }

  function removeItemImageAssets(item, kind) {
    const key = kind + '_' + item.id;
    const oldFile = kind === 'entry' ? item.entryImageFile : item.contentImageFile;

    revokeImageBlobUrl(state.imageBlobs[key]);
    delete state.imageBlobs[key];
    delete state.pendingItemFiles[key];

    if (kind === 'entry') {
      item.entryImage = '';
      item.entryImageFile = '';
    } else {
      item.contentImage = '';
      item.contentImageFile = '';
    }

    if (oldFile) {
      delete window['_pendingBlob_' + scopedPendingBlobKey(state.env, oldFile)];
      delete window['_pendingBlob_' + oldFile];
      deleteStoredImageBlobIfUnused(state.env, oldFile, state.items);
    }

    const upload = document.getElementById('upload_' + kind);
    if (upload) upload.value = '';
  }

  function clearItemImage(kind) {
    const item = selectedItem();
    if (!item) return;
    const hadImage = !!(kind === 'entry' ? item.entryImageFile : item.contentImageFile)
      || !!resolveImageLocalUrl(item, kind);
    if (!hadImage) return;

    removeItemImageAssets(item, kind);
    const fileField = document.getElementById(kind === 'entry' ? 'f_entryFile' : 'f_contentFile');
    if (fileField) fileField.value = '';
    saveEnv();
    updateImagePreview(kind, item);

    toast(kind === 'entry' ? '已清除入口缩略图' : '已清除正文配图');
  }

  function resolveImageExportFile(item, kind) {
    if (hasCustomImageFile(item, kind)) {
      return kind === 'entry' ? item.entryImageFile : item.contentImageFile;
    }
    return '';
  }

  function resolveItemUrlsForEnv(env, item) {
    const copy = JSON.parse(JSON.stringify(item));
    const entryFile = resolveImageExportFile(item, 'entry');
    const contentFile = resolveImageExportFile(item, 'content');
    copy.entryImage = entryFile ? imageRelativePath(env, entryFile) : '';
    copy.contentImage = contentFile ? imageRelativePath(env, contentFile) : '';
    delete copy.entryImageFile;
    delete copy.contentImageFile;
    delete copy.tags;
    return copy;
  }

  function resolveItemUrls(item) {
    return resolveItemUrlsForEnv(state.env, item);
  }

  function buildNoticeDataForEnv(env, tabs, items) {
    return {
      tabs: tabs,
      items: items.map(function (item) {
        return resolveItemUrlsForEnv(env, item);
      }),
    };
  }

  function buildNoticeData() {
    return buildNoticeDataForEnv(state.env, state.tabs, state.items);
  }

  function readEnvSnapshot(env) {
    if (env === state.env) {
      return {
        tabs: state.tabs.map(normalizeTab),
        items: state.items.map(normalizeItem),
      };
    }
    const raw = localStorage.getItem(storageKey(env));
    if (!raw) {
      return {
        tabs: defaultTabs().map(normalizeTab),
        items: defaultItems().map(normalizeItem),
      };
    }
    try {
      const data = JSON.parse(raw);
      return {
        tabs: (data.tabs || defaultTabs()).map(normalizeTab),
        items: (data.items || []).map(normalizeItem),
      };
    } catch (e) {
      console.error(e);
      return {
        tabs: defaultTabs().map(normalizeTab),
        items: defaultItems().map(normalizeItem),
      };
    }
  }

  function noticeDataFileName(env) {
    return env + '_notice_data.json';
  }

  function toast(msg) {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.classList.add('show');
    setTimeout(function () { el.classList.remove('show'); }, 2500);
  }

  function getTabItems(tabId) {
    const tid = normalizeTabId(tabId);
    return state.items
      .filter(function (i) { return normalizeTabId(i.tabId) === tid; })
      .sort(function (a, b) {
        if (a.sortOrder !== b.sortOrder) return a.sortOrder - b.sortOrder;
        return b.startAt - a.startAt;
      });
  }

  function selectedTab() {
    if (state.selectedTabId == null) return null;
    const tid = normalizeTabId(state.selectedTabId);
    return state.tabs.find(function (t) { return normalizeTabId(t.id) === tid; }) || null;
  }

  function selectedItem() {
    return state.items.find(function (i) { return i.id === state.selectedItemId; });
  }

  function nextTabId() {
    let max = 0;
    state.tabs.forEach(function (t) {
      max = Math.max(max, normalizeTabId(t.id));
    });
    return max + 1;
  }

  function renderTabList() {
    const el = document.getElementById('tabList');
    el.innerHTML = '';
    state.tabs
      .slice()
      .sort(function (a, b) { return a.sortOrder - b.sortOrder; })
      .forEach(function (tab) {
        const div = document.createElement('div');
        div.className = 'list-item' + (normalizeTabId(state.selectedTabId) === normalizeTabId(tab.id) ? ' active' : '');
        div.innerHTML = '<div>' + esc(tab.name.cht || tab.name.en) + '</div><div class="meta">ID=' + tab.id + ' · sort=' + tab.sortOrder + '</div>';
        div.onclick = function () {
          syncTabEditorToTab();
          syncEditorToItem();
    renderPreview();
          state.selectedTabId = normalizeTabId(tab.id);
          const items = getTabItems(state.selectedTabId);
          state.selectedItemId = items.length ? items[0].id : null;
          renderAll();
        };
        el.appendChild(div);
      });
  }

  function renderItemList() {
    const el = document.getElementById('itemList');
    el.innerHTML = '';
    if (!state.selectedTabId) {
      el.innerHTML = '<div class="empty-hint">请先选择页签</div>';
      return;
    }
    const items = getTabItems(state.selectedTabId);
    if (!items.length) {
      el.innerHTML = '<div class="empty-hint">该页签下暂无公告<br><button class="btn btn-primary" id="addFirstItem">+ 新增</button></div>';
      document.getElementById('addFirstItem').onclick = addItem;
      return;
    }
    items.forEach(function (item) {
      const div = document.createElement('div');
      div.className = 'list-item' + (state.selectedItemId === item.id ? ' active' : '');
      const title = item.title.cht || item.title.en || item.id;
      div.innerHTML = '<div>' + esc(title) + (item.showRedDot ? ' <span style="color:#e85d5d">●</span>' : '') + '</div><div class="meta">sort=' + item.sortOrder + ' · ' + item.id + '</div>';
      div.onclick = function () {
        syncTabEditorToTab();
        syncEditorToItem();
    renderPreview();
        state.selectedItemId = item.id;
        renderAll();
      };
      el.appendChild(div);
    });
  }

  function esc(s) {
    const d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  function dtLocal(ts) {
    if (!ts) return '';
    const d = new Date(ts * 1000);
    const pad = function (n) { return String(n).padStart(2, '0'); };
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()) + 'T' + pad(d.getHours()) + ':' + pad(d.getMinutes());
  }

  function tsFromLocal(val) {
    if (!val) return 0;
    return Math.floor(new Date(val).getTime() / 1000);
  }

  function refreshTabIdDisplay(item) {
    const el = document.getElementById('f_tabId');
    if (!el) return;
    const tid = item
      ? normalizeTabId(item.tabId)
      : (state.selectedTabId != null ? normalizeTabId(state.selectedTabId) : null);
    if (tid == null) {
      el.value = '';
      return;
    }
    const tab = state.tabs.find(function (t) { return normalizeTabId(t.id) === tid; });
    const name = tab ? (tab.name.cht || tab.name.en || '') : '';
    el.value = name ? tid + ' - ' + name : String(tid);
  }

  function updateEditorVisibility() {
    const empty = document.getElementById('editorEmpty');
    const tabSec = document.getElementById('tabEditorSection');
    const itemSec = document.getElementById('itemEditorSection');
    const tab = selectedTab();
    const item = selectedItem();
    const showTab = !!tab;
    if (empty) empty.style.display = showTab ? 'none' : '';
    if (tabSec) tabSec.style.display = showTab ? '' : 'none';
    if (itemSec) itemSec.style.display = item ? '' : 'none';
  }

  function fillTabEditor(tab) {
    if (!tab) return;
    const fTabId = document.getElementById('f_tab_id');
    if (!fTabId) return;
    fTabId.value = tab.id;
    document.getElementById('f_tab_sortOrder').value = tab.sortOrder;
    LANGS.forEach(function (lang) {
      document.getElementById('tab_name_' + lang).value = tab.name[lang] || '';
    });
  }

  function syncTabEditorToTab() {
    const tab = selectedTab();
    const fTabId = document.getElementById('f_tab_id');
    if (!tab || !fTabId) return;
    const oldId = normalizeTabId(state.selectedTabId);
    const newId = normalizeTabId(fTabId.value) || oldId;
    if (newId !== oldId) {
      if (state.tabs.some(function (t) {
        return normalizeTabId(t.id) === newId && normalizeTabId(t.id) !== oldId;
      })) {
        toast('页签 ID 已存在');
        fTabId.value = String(oldId);
        return;
      }
      state.items.forEach(function (i) {
        if (normalizeTabId(i.tabId) === oldId) i.tabId = newId;
      });
      tab.id = newId;
      state.selectedTabId = newId;
    }
    tab.sortOrder = parseInt(document.getElementById('f_tab_sortOrder').value, 10) || 0;
    LANGS.forEach(function (lang) {
      tab.name[lang] = document.getElementById('tab_name_' + lang).value;
    });
    saveEnv();
    renderTabList();
    refreshTabIdDisplay(selectedItem());
    renderPreview();
  }

  function fillItemEditor(item) {
    if (!item) return;
    refreshTabIdDisplay(item);
    document.getElementById('f_id').value = item.id;
    document.getElementById('f_sortOrder').value = item.sortOrder;
    document.getElementById('f_startAt').value = dtLocal(item.startAt);
    document.getElementById('f_endAt').value = dtLocal(item.endAt);
    document.getElementById('f_showRedDot').checked = item.showRedDot;
    document.getElementById('f_entryFile').value = item.entryImageFile || '';
    document.getElementById('f_contentFile').value = item.contentImageFile || '';

    LANGS.forEach(function (lang) {
      document.getElementById('title_' + lang).value = item.title[lang] || '';
      document.getElementById('content_' + lang).value = item.content[lang] || '';
    });

    updateImagePreview('entry', item);
    updateImagePreview('content', item);
  }

  function fillEditors() {
    updateEditorVisibility();
    fillTabEditor(selectedTab());
    fillItemEditor(selectedItem());
  }

  function imagePreviewPlaceholder(kind) {
    return kind === 'entry' ? '点击选择图片' : '暂无配图';
  }

  function updateImagePreview(kind, item) {
    const prev = document.getElementById('preview_' + kind);
    if (!prev) return;
    const localUrl = resolveImageLocalUrl(item, kind);
    const file = kind === 'entry' ? item.entryImageFile : item.contentImageFile;
    if (localUrl) {
      fillImageContainer(prev, localUrl);
    } else if (file) {
      prev.innerHTML = '<span class="image-preview-status"><strong>' + esc(file) + '</strong>未选本地文件</span>';
      prev.classList.add('empty');
    } else {
      prev.textContent = imagePreviewPlaceholder(kind);
      prev.classList.add('empty');
    }
  }

  function fillPreviewImageSurface(container, item, kind) {
    if (!container) return;
    const url = resolveImageLocalUrl(item, kind);
    const file = kind === 'entry' ? item.entryImageFile : item.contentImageFile;

    container.classList.remove('has-image', 'missing-local');
    container.innerHTML = '';

    if (url) {
      container.classList.add('has-image');
      const img = document.createElement('img');
      img.alt = '';
      img.className = kind === 'content' ? 'preview-content-image' : 'preview-entry-image';
      img.src = url;
      if (kind === 'content') {
        img.onload = function () { layoutContentPreviewImage(img); };
        if (img.complete) layoutContentPreviewImage(img);
      }
      container.appendChild(img);
      return;
    }

    const resolvedFile = resolveImageFilename(item, kind);
    if (resolvedFile) {
      container.classList.add('missing-local');
      container.textContent = resolvedFile;
    }
  }

  function syncEditorToItem() {
    const item = selectedItem();
    if (!item || !document.getElementById('f_id')) return;
    if (state.selectedTabId != null) {
      item.tabId = normalizeTabId(state.selectedTabId);
    }
    item.sortOrder = parseInt(document.getElementById('f_sortOrder').value, 10) || 0;
    item.startAt = tsFromLocal(document.getElementById('f_startAt').value);
    item.endAt = tsFromLocal(document.getElementById('f_endAt').value);
    item.showRedDot = document.getElementById('f_showRedDot').checked;
    const entryFile = document.getElementById('f_entryFile').value.trim();
    const contentFile = document.getElementById('f_contentFile').value.trim();

    if (!entryFile) {
      if (item.entryImageFile || resolveImageLocalUrl(item, 'entry')) {
        removeItemImageAssets(item, 'entry');
      } else {
        item.entryImage = '';
        item.entryImageFile = '';
      }
    } else {
      item.entryImageFile = entryFile;
    }

    if (!contentFile) {
      if (item.contentImageFile || resolveImageLocalUrl(item, 'content')) {
        removeItemImageAssets(item, 'content');
      } else {
        item.contentImage = '';
        item.contentImageFile = '';
      }
    } else {
      item.contentImageFile = contentFile;
    }

    LANGS.forEach(function (lang) {
      item.title[lang] = document.getElementById('title_' + lang).value;
      item.content[lang] = document.getElementById('content_' + lang).value;
    });

    saveEnv();
    renderItemList();
    updateImagePreview('entry', item);
    updateImagePreview('content', item);
    renderPreview();
  }

  function renderPreview() {
    const item = selectedItem();
    const tabsEl = document.getElementById('previewTabs');
    const listEl = document.getElementById('previewList');

    document.querySelectorAll('.preview-lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === state.previewLang);
    });

    tabsEl.innerHTML = '';
    state.tabs.slice().sort(function (a, b) { return a.sortOrder - b.sortOrder; }).forEach(function (tab) {
      const tabItems = getTabItems(tab.id);
      const hasUnread = tabItems.some(function (i) { return i.showRedDot; });
      const div = document.createElement('div');
      div.className = 'preview-tab' + (normalizeTabId(state.selectedTabId) === normalizeTabId(tab.id) ? ' active' : '');
      div.innerHTML = esc(langText(tab.name)) + (hasUnread ? '<span class="dot"></span>' : '');
      div.setAttribute('role', 'button');
      div.setAttribute('aria-pressed', String(normalizeTabId(state.selectedTabId) === normalizeTabId(tab.id)));
      div.tabIndex = 0;
      div.onclick = function () {
        syncTabEditorToTab();
        syncEditorToItem();
        state.selectedTabId = normalizeTabId(tab.id);
        const items = getTabItems(state.selectedTabId);
        state.selectedItemId = items.length ? items[0].id : null;
        renderAll();
        tabsEl.querySelector('.preview-tab.active')?.focus();
      };
      div.onkeydown = function (event) {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); div.click(); }
      };
      tabsEl.appendChild(div);
    });

    listEl.innerHTML = '';
    const bannerEl = document.getElementById('previewDetailBanner');
    const detailTextEl = document.getElementById('previewDetailText');

    if (!state.selectedTabId) {
      if (bannerEl) bannerEl.hidden = true;
      if (detailTextEl) detailTextEl.innerHTML = '<div class="preview-detail-empty">选择页签</div>';
      return;
    }

    getTabItems(state.selectedTabId).forEach(function (it) {
      const div = document.createElement('div');
      div.className = 'preview-list-item' + (state.selectedItemId === it.id ? ' selected' : '');
      div.setAttribute('role', 'button');
      div.setAttribute('aria-label', langText(it.title) || it.id);
      div.setAttribute('aria-pressed', String(state.selectedItemId === it.id));
      div.tabIndex = 0;
      div.onclick = function () {
        syncTabEditorToTab();
        syncEditorToItem();
        state.selectedItemId = it.id;
        renderAll();
        listEl.querySelector('.preview-list-item.selected')?.focus();
      };
      div.onkeydown = function (event) {
        if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); div.click(); }
      };
      const iconPh = document.createElement('div');
      iconPh.className = 'preview-item-icon';
      iconPh.title = '入口 251×175';
      fillPreviewImageSurface(iconPh, it, 'entry');
      const titleEl = document.createElement('div');
      titleEl.className = 'preview-list-title';
      titleEl.textContent = langText(it.title);
      div.appendChild(iconPh);
      div.appendChild(titleEl);
      listEl.appendChild(div);
    });

    if (!item) {
      if (bannerEl) bannerEl.hidden = true;
      if (detailTextEl) detailTextEl.innerHTML = '<div class="preview-detail-empty">选择公告查看预览</div>';
      return;
    }

    const hasContentImage = !!resolveImageFilename(item, 'content');
    if (bannerEl) {
      bannerEl.hidden = !hasContentImage;
      if (hasContentImage) {
        fillPreviewImageSurface(bannerEl, item, 'content');
        bannerEl.title = resolveImageLocalUrl(item, 'content')
          ? '正文配图 宽 550'
          : '已配置文件名，需选择本地图片后预览';
      } else {
        bannerEl.classList.remove('has-image', 'missing-local');
        bannerEl.innerHTML = '';
      }
    }
    if (detailTextEl) {
      detailTextEl.innerHTML = tmpToHtml(langText(item.content))
        || '<div class="preview-detail-empty">（无正文）</div>';
    }
  }

  function tmpToHtml(text) {
    if (!text) return '';
    return esc(text)
      .replace(/&lt;size=(\d+)&gt;/g, '<span style="font-size:$1px">')
      .replace(/&lt;\/size&gt;/g, '</span>')
      .replace(/&lt;b&gt;/g, '<b>')
      .replace(/&lt;\/b&gt;/g, '</b>')
      .replace(/&lt;color=(#[0-9a-fA-F]+)&gt;/g, '<span style="color:$1">')
      .replace(/&lt;\/color&gt;/g, '</span>')
      .replace(/\n/g, '<br>');
  }

  function renderAll() {
    renderEnvList();
    document.querySelectorAll('.env-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.env === state.env);
    });

    renderTabList();
    renderItemList();

    const item = selectedItem();
    if (item && state.selectedTabId && normalizeTabId(item.tabId) !== normalizeTabId(state.selectedTabId)) {
      state.selectedItemId = null;
    }
    fillEditors();
    renderPreview();

  }

  function syncFormFromState() {
    if (!state.selectedTabId && state.tabs.length) state.selectedTabId = normalizeTabId(state.tabs[0].id);
    if (state.selectedItemId && !selectedItem()) state.selectedItemId = null;
    if (!state.selectedItemId && state.selectedTabId) {
      const items = getTabItems(state.selectedTabId);
      if (items.length) state.selectedItemId = items[0].id;
    }
  }

  function addTab() {
    syncTabEditorToTab();
    syncEditorToItem();
    renderPreview();
    const id = nextTabId();
    const maxSort = state.tabs.reduce(function (m, t) {
      return Math.max(m, t.sortOrder);
    }, 0);
    const tab = normalizeTab({ id: id, sortOrder: maxSort + 1, name: emptyLang() });
    state.tabs.push(tab);
    state.selectedTabId = id;
    state.selectedItemId = null;
    saveEnv();
    renderAll();
    toast('已新增页签 ID=' + id);
  }

  function deleteTab() {
    if (state.tabs.length <= 1) {
      toast('至少保留 1 个页签');
      return;
    }
    const tab = selectedTab();
    if (!tab) {
      toast('请先选择页签');
      return;
    }
    const name = tab.name.cht || tab.name.en || ('ID=' + tab.id);
    const itemCount = getTabItems(tab.id).length;
    const msg = itemCount
      ? '确定删除页签「' + name + '」及其下 ' + itemCount + ' 条公告？'
      : '确定删除页签「' + name + '」？';
    if (!confirm(msg)) return;
    const tid = normalizeTabId(tab.id);
    state.tabs = state.tabs.filter(function (t) { return normalizeTabId(t.id) !== tid; });
    state.items = state.items.filter(function (i) { return normalizeTabId(i.tabId) !== tid; });
    state.selectedTabId = null;
    state.selectedItemId = null;
    syncFormFromState();
    saveEnv();
    renderAll();
    toast('已删除页签');
  }

  function addItem() {
    syncTabEditorToTab();
    const nowMs = Date.now();
    const now = Math.floor(nowMs / 1000);
    const id = 'notice_' + nowMs;
    const item = {
      id: id,
      tabId: state.selectedTabId ? normalizeTabId(state.selectedTabId) : 1,
      sortOrder: 100,
      startAt: now,
      endAt: now + 86400 * 7,
      showRedDot: true,
      entryImage: '',
      entryImageFile: '',
      contentImage: '',
      contentImageFile: '',
      title: emptyLang(),
      content: emptyLang(),
    };
    state.items.push(item);
    state.selectedItemId = id;
    saveEnv();
    renderAll();
  }

  function deleteItem() {
    const item = selectedItem();
    if (!item) {
      toast('请先选择要删除的公告');
      return;
    }
    if (!confirm('确定删除公告「' + (item.title.cht || item.id) + '」？')) return;
    const orphanFiles = [];
    ['entry', 'content'].forEach(function (kind) {
      const file = resolveImageFilename(item, kind);
      if (file) orphanFiles.push(file);
    });
    revokeImageBlobUrl(state.imageBlobs['entry_' + item.id]);
    revokeImageBlobUrl(state.imageBlobs['content_' + item.id]);
    delete state.imageBlobs['entry_' + item.id];
    delete state.imageBlobs['content_' + item.id];
    delete state.pendingItemFiles['entry_' + item.id];
    delete state.pendingItemFiles['content_' + item.id];
    state.items = state.items.filter(function (i) { return i.id !== item.id; });
    orphanFiles.forEach(function (file) {
      delete window['_pendingBlob_' + scopedPendingBlobKey(state.env, file)];
      delete window['_pendingBlob_' + file];
      deleteStoredImageBlobIfUnused(state.env, file, state.items);
    });
    state.selectedItemId = null;
    syncFormFromState();
    saveEnv();
    renderAll();
  }

  function hasAnyLangText(obj) {
    if (!obj || typeof obj !== 'object') return false;
    return LANGS.some(function (lang) {
      return String(obj[lang] || '').trim().length > 0;
    });
  }

  function originalImageFileName(file) {
    const raw = file && file.name ? String(file.name).trim() : '';
    if (!raw) return '';
    const base = raw.split(/[/\\]/).pop();
    return base ? base.trim() : raw;
  }

  function isSafeImageFileName(filename) {
    const name = String(filename || '');
    if (!name || name !== name.trim()) return false;
    if (name.length > 255) return false;
    if (/[/\\:\0]/.test(name) || name.indexOf('..') >= 0) return false;
    return true;
  }

  function validateTmpContent(contentObj) {
    const issues = [];
    if (!contentObj || typeof contentObj !== 'object') return issues;

    LANGS.forEach(function (lang) {
      const text = String(contentObj[lang] || '');
      if (!text.trim()) return;

      const tagRules = [
        { open: /<b>/g, close: /<\/b>/g, label: '<b>' },
        { open: /<size=\d+>/g, close: /<\/size>/g, label: '<size>' },
        { open: /<color=#[0-9a-fA-F]{3,8}>/g, close: /<\/color>/g, label: '<color>' },
      ];

      tagRules.forEach(function (rule) {
        const openCount = (text.match(rule.open) || []).length;
        const closeCount = (text.match(rule.close) || []).length;
        if (openCount !== closeCount) {
          issues.push('正文 ' + lang + ' 中 ' + rule.label + ' 标签未成对（' + openCount + '/' + closeCount + '）');
        }
      });
    });

    return issues;
  }

  function validateEnvExportSync(env, tabs, items) {
    const errors = [];
    const tabIds = new Set();

    tabs.forEach(function (tab) {
      const tid = normalizeTabId(tab.id);
      if (tid <= 0) {
        errors.push('[环境 ' + env + '] 页签 ID 无效');
        return;
      }
      if (tabIds.has(tid)) {
        errors.push('[环境 ' + env + '] 页签 ID 重复: ' + tid);
      }
      tabIds.add(tid);
      if (!hasAnyLangText(tab.name)) {
        errors.push('[环境 ' + env + '] 页签 ID=' + tid + ' 名称三语均为空');
      }
    });

    const itemIds = new Set();
    items.forEach(function (item) {
      const id = String(item.id || '').trim();
      if (!id) {
        errors.push('[环境 ' + env + '] 存在公告 ID 为空的条目');
        return;
      }
      if (itemIds.has(id)) {
        errors.push('[环境 ' + env + '] 公告 ID 重复: ' + id);
      }
      itemIds.add(id);

      const tabId = normalizeTabId(item.tabId);
      if (!tabIds.has(tabId)) {
        errors.push('[环境 ' + env + '] 公告「' + id + '」所属页签 ID=' + tabId + ' 不存在');
      }

      if (item.startAt > 0 && item.endAt > 0 && item.startAt > item.endAt) {
        errors.push('[环境 ' + env + '] 公告「' + id + '」开始时间晚于结束时间');
      }
      if (!hasAnyLangText(item.title)) {
        errors.push('[环境 ' + env + '] 公告「' + id + '」主标题三语均为空');
      }
      if (!hasAnyLangText(item.content)) {
        errors.push('[环境 ' + env + '] 公告「' + id + '」正文三语均为空');
      }

      ['entry', 'content'].forEach(function (kind) {
        const file = resolveImageExportFile(item, kind);
        if (!file) return;
        if (!isSafeImageFileName(file)) {
          errors.push('[环境 ' + env + '] 公告「' + id + '」图片文件名不合法: ' + file);
        }
      });

      validateTmpContent(item.content).forEach(function (msg) {
        errors.push('[环境 ' + env + '] 公告「' + id + '」' + msg);
      });
    });

    return errors;
  }

  function validateEnvExportImages(env, items) {
    const filenames = Array.from(collectImageFilenamesFromItems(items));
    if (!filenames.length) {
      return Promise.resolve([]);
    }

    return Promise.all(filenames.map(function (filename) {
      return getImageBlobForFilename(filename, env, items).then(function (blob) {
        if (blob && blob.size > 0) return '';
        return '[环境 ' + env + '] 图片「' + filename + '」已配置但未选择本地文件';
      });
    })).then(function (lines) {
      return lines.filter(function (line) { return !!line; });
    });
  }

  function validateExportEnvIds(envIds) {
    const syncErrors = [];
    envIds.forEach(function (env) {
      const snapshot = readEnvSnapshot(env);
      syncErrors.push.apply(syncErrors, validateEnvExportSync(env, snapshot.tabs, snapshot.items));
    });

    if (syncErrors.length) {
      return Promise.resolve(syncErrors);
    }

    return Promise.all(envIds.map(function (env) {
      const snapshot = readEnvSnapshot(env);
      return validateEnvExportImages(env, snapshot.items);
    })).then(function (nested) {
      const errors = [];
      nested.forEach(function (lines) {
        errors.push.apply(errors, lines);
      });
      return errors;
    });
  }

  function formatExportErrors(errors) {
    const maxLines = 30;
    let body = errors.slice(0, maxLines).join('\n');
    if (errors.length > maxLines) {
      body += '\n…另有 ' + (errors.length - maxLines) + ' 项未显示';
    }
    return '检测到以下问题，已取消部署：\n\n' + body;
  }

  function collectImageFilenamesFromItems(items) {
    const seen = new Set();
    items.forEach(function (item) {
      ['entry', 'content'].forEach(function (kind) {
        const file = resolveImageExportFile(item, kind);
        if (file) seen.add(file);
      });
    });
    return seen;
  }

  function collectImageFilenames() {
    return collectImageFilenamesFromItems(state.items);
  }

  async function deployCurrentEnvironment() {
    const button = document.getElementById('btnDeploy');
    const status = document.getElementById('deployStatus');
    const link = document.getElementById('deployUrl');
    const manifestLink = document.getElementById('manifestUrl');
    button.disabled = true;
    link.hidden = true;
    manifestLink.hidden = true;
    status.textContent = '正在校验公告…';
    try {
      const token = sessionStorage.getItem('lwyblog-gh-token');
      if (!token) throw new Error('请先在管理后台「推送部署」中配置 GitHub Token，然后返回这里一键部署');
      syncTabEditorToTab();
      syncEditorToItem();
    renderPreview();
      saveEnv();
      const env = state.env;
      const snapshot = readEnvSnapshot(env);
      const errors = validateEnvExportSync(env, snapshot.tabs, snapshot.items);
      errors.push.apply(errors, await validateEnvExportImages(env, snapshot.items));
      if (errors.length) throw new Error(formatExportErrors(errors));
      const images = [];
      for (const filename of collectImageFilenamesFromItems(snapshot.items)) {
        const blob = await getImageBlobForFilename(filename, env, snapshot.items);
        if (!blob || !blob.size) throw new Error('缺少图片：' + filename);
        images.push({ filename: filename, blob: blob });
      }
      const publisher = await import('./deploy.js');
      const result = await publisher.deployNotice({
        env: env,
        data: buildNoticeDataForEnv(env, snapshot.tabs, snapshot.items),
        images: images,
        token: token,
        onProgress: function (message, details) {
          status.textContent = message;
          if (details) {
            link.href = details.url;
            link.textContent = details.url;
            link.hidden = false;
          }
        },
      });
      status.textContent = '部署成功 · ' + env + ' 环境公告已上线 · manifest revision ' + result.revision;
      manifestLink.href = result.manifestUrl;
      manifestLink.textContent = 'Manifest：' + result.manifestUrl;
      manifestLink.hidden = false;
      link.href = result.url;
      link.textContent = result.url;
      link.hidden = false;
      toast('公告已部署到 www.lwyzyc.com');
    } catch (error) {
      status.textContent = error.message || String(error);
    } finally {
      button.disabled = false;
    }
  }

  function importJson() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = function () {
      const file = input.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = function () {
        try {
          const data = JSON.parse(reader.result);
          if (data.tabs && data.items) {
            state.tabs = data.tabs.map(normalizeTab);
            state.items = (data.items || []).map(normalizeItem);
            state.selectedTabId = null;
            state.selectedItemId = null;
            syncFormFromState();
            saveEnv();
            renderAll();
            toast('导入成功');
          } else if (data.environments) {
            const merged = state.envList.slice();
            Object.keys(data.environments).forEach(function (envId) {
              const id = normalizeEnvId(envId);
              if (!id) return;
              if (!merged.some(function (e) { return e.id === id; })) {
                merged.push({
                  id: id,
                  label: id.charAt(0).toUpperCase() + id.slice(1),
                });
              }
            });
            state.envList = merged;
            if (data.defaultEnv) {
              const defId = normalizeEnvId(data.defaultEnv);
              if (findEnvEntry(defId)) state.defaultEnvId = defId;
            }
            saveSettings();
            renderAll();
            toast('已更新环境列表');
          } else {
            alert('无法识别的 JSON 格式');
          }
        } catch (e) {
          alert('JSON 解析失败: ' + e.message);
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  function bindImageUpload(kind) {
    document.getElementById('upload_' + kind).onchange = function (e) {
      const file = e.target.files[0];
      const item = selectedItem();
      if (!file || !item) return;
      const key = kind + '_' + item.id;
      state.imageBlobs[key] = URL.createObjectURL(file);
      const fname = originalImageFileName(file);
      if (!fname) return;
      if (kind === 'entry') {
        item.entryImageFile = fname;
        document.getElementById('f_entryFile').value = fname;
      } else {
        item.contentImageFile = fname;
        document.getElementById('f_contentFile').value = fname;
      }
      window['_pendingBlob_' + scopedPendingBlobKey(state.env, fname)] = file;
      window['_pendingBlob_' + fname] = file;
      state.pendingItemFiles[key] = file;
      saveEnv();
      persistImageBlob(state.env, fname, file).catch(function (err) {
        console.error(err);
        toast('图片已缓存到页面，但写入本地库失败');
      });
      updateImagePreview(kind, item);

      toast('图片已选：已保存到浏览器，刷新后仍可编辑与部署');
    };
  }

  function insertTmpTag(tag) {
    const ta = document.getElementById('content_cht');
    if (!ta) return;
    const start = ta.selectionStart;
    const end = ta.selectionEnd;
    const val = ta.value;
    ta.value = val.slice(0, start) + tag + val.slice(end);
    syncEditorToItem();
    renderPreview();
  }

  function renderLangFieldCards(fieldPrefix, kind) {
    return LANGS.map(function (lang) {
      const id = fieldPrefix + '_' + lang;
      const label = LANG_LABELS[lang] || lang;
      let control;
      if (kind === 'title') {
        control = '<input id="' + id + '" type="text" class="lang-control lang-control-title" placeholder="' + label + '标题">';
      } else {
        control = '<textarea id="' + id + '" class="lang-control lang-control-content content" placeholder="支持 TMP：&lt;b&gt; &lt;color&gt; &lt;size&gt;"></textarea>';
      }
      return (
        '<div class="lang-field-card">' +
        '<div class="lang-field-head">' +
        '<span class="lang-badge lang-badge-' + lang + '">' + label + '</span>' +
        '<code class="lang-field-code">' + lang + '</code>' +
        '</div>' +
        control +
        '</div>'
      );
    }).join('');
  }

  function initEditorForm() {
    document.getElementById('editorPanel').innerHTML =
      '<div id="tabEditorSection" class="form-section form-section-tab form-collapsible">' +
      '<details>' +
      '<summary>页签设置</summary>' +
      '<div class="form-collapsible-body">' +
      '<div class="form-row"><label>页签 ID</label><input id="f_tab_id" type="number" min="1"></div>' +
      '<div class="form-row"><label>排序 sortOrder</label><input id="f_tab_sortOrder" type="number"></div>' +
      '<h4 class="form-subheading">页签名称（三语）</h4>' +
      '<div class="lang-grid">' +
      LANGS.map(function (l) {
        return '<div class="lang-col"><label>' + l + '</label><input id="tab_name_' + l + '" type="text"></div>';
      }).join('') +
      '</div></div></details></div>' +

      '<hr class="editor-divider">' +

      '<div id="itemEditorSection">' +
      '<div class="form-section form-collapsible">' +
      '<details open>' +
      '<summary>基础信息</summary>' +
      '<div class="form-collapsible-body notice-metadata-grid">' +
      '<div class="form-row"><label>公告 ID</label><input id="f_id" type="text" readonly tabindex="-1" title="创建时自动生成，不可修改"></div>' +
      '<div class="form-row"><label>页签 ID</label><input id="f_tabId" type="text" readonly tabindex="-1"></div>' +
      '<div class="form-row"><label>排序 sortOrder</label><input id="f_sortOrder" type="number"></div>' +
      '<div class="form-row"><label>开始时间</label><input id="f_startAt" type="datetime-local"></div>' +
      '<div class="form-row"><label>结束时间</label><input id="f_endAt" type="datetime-local"></div>' +
      '<div class="form-row"><label>显示红点</label><div class="checkbox-row"><input id="f_showRedDot" type="checkbox"> showRedDot</div></div>' +
      '</div></details></div>' +

      '<div class="form-section form-section-lang">' +
      '<div class="lang-panel">' +
      '<div class="lang-panel-header">' +
      '<span class="lang-panel-title">主标题</span>' +
      '<code class="lang-panel-tag">title</code>' +
      '<span class="lang-panel-meta">三语</span>' +
      '</div>' +
      '<div class="lang-field-grid lang-field-grid-title">' + renderLangFieldCards('title', 'title') + '</div>' +
      '</div></div>' +

      '<div class="form-section form-section-images">' +
      '<h3>图片</h3>' +
      '<div class="image-upload-row">' +
      '<div class="image-card">' +
      '<div class="image-card-header">' +
      '<span class="image-card-title">入口缩略图</span>' +
      '<code class="image-card-tag">entryImage</code>' +
      '<span class="image-card-spec">默认尺寸为 250 * 175</span>' +
      '</div>' +
      '<div class="image-preview image-preview-lg empty" id="preview_entry">点击选择图片</div>' +
      '<label class="image-field-label" for="f_entryFile">CDN 文件名</label>' +
      '<input id="f_entryFile" type="text" class="image-filename-input" placeholder="entry_xxx.png">' +
      '<div class="image-upload-actions">' +
      '<label class="btn image-pick-btn" for="upload_entry">选择图片</label>' +
      '<button type="button" class="btn image-clear-btn" id="clear_entry">清除图片</button>' +
      '</div>' +
      '<input type="file" id="upload_entry" accept="image/*" hidden>' +
      '<p class="image-upload-hint">资源路径 <code>{env}/images/文件名</code></p>' +
      '</div>' +
      '<div class="image-card">' +
      '<div class="image-card-header">' +
      '<span class="image-card-title">正文配图</span>' +
      '<code class="image-card-tag">contentImage</code>' +
      '<div class="image-card-header-aside">' +
      '<span class="image-card-optional">可选</span>' +
      '<span class="image-card-spec">默认宽度 550</span>' +
      '</div>' +
      '</div>' +
      '<div class="image-preview image-preview-lg empty" id="preview_content">暂无配图</div>' +
      '<label class="image-field-label" for="f_contentFile">CDN 文件名</label>' +
      '<input id="f_contentFile" type="text" class="image-filename-input" placeholder="content_xxx.png">' +
      '<div class="image-upload-actions">' +
      '<label class="btn image-pick-btn" for="upload_content">选择图片</label>' +
      '<button type="button" class="btn image-clear-btn" id="clear_content">清除图片</button>' +
      '</div>' +
      '<input type="file" id="upload_content" accept="image/*" hidden>' +
      '</div>' +
      '</div></div>' +

      '<div class="form-section form-section-lang">' +
      '<div class="lang-panel lang-panel-content">' +
      '<div class="lang-panel-header">' +
      '<span class="lang-panel-title">正文</span>' +
      '<code class="lang-panel-tag">content</code>' +
      '<span class="lang-panel-meta">TMP 富文本 · 三语</span>' +
      '</div>' +
      '<div class="content-toolbar">' +
      '<span class="content-toolbar-label">插入标签</span>' +
      '<div class="content-toolbar-actions">' +
      '<button type="button" class="content-tool-btn" data-tmp="<b></b>">&lt;b&gt; 加粗</button>' +
      '<button type="button" class="content-tool-btn" data-tmp="<color=#FF4444></color>">&lt;color&gt; 标红</button>' +
      '<button type="button" class="content-tool-btn" data-tmp="<size=28></size>">&lt;size&gt; 标题</button>' +
      '</div>' +
      '<span class="content-toolbar-hint">作用于繁中 textarea 光标处</span>' +
      '</div>' +
      '<div class="lang-field-grid lang-field-grid-content">' + renderLangFieldCards('content', 'content') + '</div>' +
      '</div></div>' +

      '<div class="editor-save-actions">' +
      '<button type="button" class="btn btn-primary" id="saveItemBtn">保存到本地</button>' +
      '<button type="button" class="btn btn-danger" id="deleteItemBtn">删除公告</button></div>' +
      '</div>';

    ['f_tab_id', 'f_tab_sortOrder'].forEach(function (id) {
      document.getElementById(id).onchange = syncTabEditorToTab;
      document.getElementById(id).oninput = syncTabEditorToTab;
    });
    LANGS.forEach(function (l) {
      document.getElementById('tab_name_' + l).oninput = syncTabEditorToTab;
    });

    ['f_sortOrder', 'f_startAt', 'f_endAt', 'f_entryFile', 'f_contentFile'].forEach(function (id) {
      document.getElementById(id).onchange = syncEditorToItem;
      document.getElementById(id).oninput = syncEditorToItem;
    });
    document.getElementById('f_showRedDot').onchange = syncEditorToItem;
    LANGS.forEach(function (l) {
      document.getElementById('title_' + l).oninput = syncEditorToItem;
      document.getElementById('content_' + l).oninput = syncEditorToItem;
    });

    document.getElementById('saveItemBtn').onclick = function () { syncEditorToItem(); toast('已保存到浏览器 localStorage'); };
    document.getElementById('deleteItemBtn').onclick = deleteItem;

    document.querySelectorAll('[data-tmp]').forEach(function (btn) {
      btn.onclick = function () { insertTmpTag(btn.dataset.tmp); };
    });

    bindImageUpload('entry');
    bindImageUpload('content');
    document.getElementById('clear_entry').onclick = function () { clearItemImage('entry'); };
    document.getElementById('clear_content').onclick = function () { clearItemImage('content'); };
  }

  function init() {
    const preview = document.getElementById('clientPreview');
    const openPreview = document.getElementById('btnOpenPreview');
    const closePreview = document.getElementById('btnClosePreview');
    function hidePreview() {
      preview.classList.remove('preview-modal-open');
      openPreview.focus();
    }
    openPreview.onclick = function () {
      renderPreview();
      preview.classList.add('preview-modal-open');
      closePreview.focus();
    };
    closePreview.onclick = hidePreview;
    document.addEventListener('keydown', function (event) {
      if (!preview.classList.contains('preview-modal-open')) return;
      if (event.key === 'Escape') hidePreview();
      if (event.key === 'Tab') {
        const buttons = Array.from(preview.querySelectorAll('button, [tabindex="0"]'));
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    });
    loadSettings();
    loadEnv(state.env);
    syncFormFromState();
    initEditorForm();

    document.getElementById('btnAddTab').onclick = addTab;
    document.getElementById('btnDeleteTab').onclick = deleteTab;
    document.getElementById('btnAddItem').onclick = function () {
      if (!state.selectedTabId && state.tabs.length) {
        state.selectedTabId = normalizeTabId(state.tabs[0].id);
      }
      if (!state.selectedTabId) {
        toast('请先新增页签');
        return;
      }
      addItem();
    };
    document.getElementById('btnDeleteItem').onclick = deleteItem;
    document.getElementById('btnDeploy').onclick = deployCurrentEnvironment;

    document.getElementById('btnImport').onclick = importJson;
    document.querySelectorAll('.preview-lang-btn').forEach(function (btn) {
      btn.onclick = function () { state.previewLang = btn.dataset.lang; renderPreview(); };
    });
    document.getElementById('btnCopyEnv').onclick = copyCurrentEnvToTarget;



    hydrateEnvImages(state.env).then(function () {
      fillEditors();
    renderPreview();
      renderAll();
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
