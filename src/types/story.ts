export interface ChapterSummary {
  _id: string;
  title: string;
  label?: string;
  date?: string;
}

export interface ChapterSection {
  heading?: string;
  image?: string;
  paragraphs: string[];
}

export interface Chapter extends ChapterSummary {
  sections: ChapterSection[];
}
