export interface NpcEntry {
  name: string;
  status?: string;
  description?: string;
}

export interface MetSection {
  heading?: string;
  intro?: string;
  npcs: NpcEntry[];
}

export interface MetEntry {
  id: string;
  title: string;
  label?: string;
  sections: MetSection[];
}
