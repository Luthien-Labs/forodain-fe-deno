export interface ChapterSummary {
  _id: string;
  title: string;
  label?: string;
}

export type Block =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'image'; src: string; placement: 'standalone' | 'left' | 'right' }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'divider' }

export interface Chapter {
  _id: string;
  title: string;
  subtitle?: string;
  status: 'draft' | 'published';
  order: number;
  blocks: Block[];
  createdAt: string;
  updatedAt: string;
}
