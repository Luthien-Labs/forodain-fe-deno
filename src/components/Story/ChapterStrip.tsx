import type { Chapter } from '../../types/story';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

interface ChapterStripProps {
  chapters: Chapter[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export const ChapterStrip = ({ chapters, activeIndex, onSelect }: ChapterStripProps) => (
  <div className="jl__strip" role="listbox" aria-label="Chapters">
    {chapters.map((chapter, i) => (
      <button
        key={chapter._id}
        className="jl__card"
        role="option"
        aria-selected={i === activeIndex}
        aria-current={i === activeIndex ? 'true' : undefined}
        onClick={() => onSelect(i)}
      >
        <span className="jl__card-num">Ch. {ROMAN[i] ?? i + 1}</span>
        <span className="jl__card-title">{chapter.title}</span>
        {chapter.date && <span className="jl__card-date">{chapter.date}</span>}
      </button>
    ))}
  </div>
);
