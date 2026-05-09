import { useState } from 'react';
import type { Chapter, ChapterSection } from '../../types/story';

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];

const SectionFig = ({ src }: { src: string }) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const isPlaceholder = !loaded || failed;

  return (
    <figure
      className={`jl__section-fig${isPlaceholder ? ' is-placeholder' : ''}`}
      data-src={`↳ ${src}`}
    >
      <img
        src={src}
        alt=""
        onLoad={() => { setLoaded(true); setFailed(false); }}
        onError={() => setFailed(true)}
      />
    </figure>
  );
};

const ChapterSectionBlock = ({ section, isFirst }: { section: ChapterSection; isFirst: boolean }) => (
  <section className={`jl__section${isFirst ? ' jl__section--first' : ''}`}>
    {section.image && <SectionFig src={section.image} />}
    {section.paragraphs.map((para, i) => (
      <p key={i}>{para}</p>
    ))}
  </section>
);

interface ChapterReaderProps {
  chapters: Chapter[];
  activeIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

export const ChapterReader = ({ chapters, activeIndex, onPrev, onNext }: ChapterReaderProps) => {
  const chapter = chapters[activeIndex];
  const romanNum = ROMAN[activeIndex] ?? String(activeIndex + 1);

  return (
    <article className="jl__chapter">
      <div className="jl__chapter-meta">
        <span><b>Chapter {romanNum}</b></span>
      </div>
      <h3 className="jl__chapter-h">{chapter.title}</h3>
      <div className="jl__body">
        {chapter.sections.map((section, i) => (
          <ChapterSectionBlock key={i} section={section} isFirst={i === 0} />
        ))}
      </div>
      <div className="jl__chapter-foot">
        <button className="jl__nav-btn" onClick={onPrev} disabled={activeIndex === 0}>
          ← Previous
        </button>
        <span>Chapter {romanNum} of {chapters.length}</span>
        <button
          className="jl__nav-btn"
          onClick={onNext}
          disabled={activeIndex === chapters.length - 1}
        >
          Next →
        </button>
      </div>
    </article>
  );
};
