export interface WorldSection {
  heading?: string;
  paragraphs: string[];
}

export interface WorldEntry {
  id: string;
  title: string;
  sections: WorldSection[];
}
