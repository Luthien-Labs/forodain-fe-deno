import type { Chapter } from './types/story';

const hashKey = async (): Promise<string> => {
  const date = new Date().toISOString().split('T')[0];
  const raw = `${import.meta.env.VITE_API_KEY}-${date}`;
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(raw));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
};

const BASE =
  import.meta.env.MODE === 'development'
    ? '/api'
    : import.meta.env.VITE_API_BASE_URL;

const get = async <T>(path: string): Promise<T> => {
  const key = await hashKey();
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'x-api-key': key, 'Content-Type': 'application/json' },
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
  return res.json() as Promise<T>;
};

export const fetchChapters = (): Promise<Chapter[]> =>
  get<{ stories: Chapter[] }>('/stories').then((d) => d.stories);

export const fetchChapter = (id: string): Promise<Chapter> =>
  get<{ story: Chapter }>(`/story/${id}`).then((d) => d.story);
