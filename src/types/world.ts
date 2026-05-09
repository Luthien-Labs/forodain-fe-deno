export interface WorldSection {
  heading?: string;
  paragraphs: string[];
}

export interface WorldEntry {
  id: string;
  title: string;
  label?: string;
  sections: WorldSection[];
}
