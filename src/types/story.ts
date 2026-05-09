export interface ChapterSection {
  image?: string;
  paragraphs: string[];
}

export interface Chapter {
  _id: string;
  title: string;
  date?: string;
  sections: ChapterSection[];
}
