import { useState } from 'react';
import type { Chapter, ChapterSection } from '../../types/story';

const toRoman = (n: number): string => {
  const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const syms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let result = '';
  for (let i = 0; i < vals.length; i++) {
    while (n >= vals[i]) { result += syms[i]; n -= vals[i]; }
  }
  return result;
};

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
    {section.heading && <h4 className="jl__section-h">{section.heading}</h4>}
    {section.image && <SectionFig src={section.image} />}
    {section.paragraphs.map((para, i) => (
      <p key={i}>{para}</p>
    ))}
  </section>
);

interface ChapterReaderProps {
  chapter: Chapter;
  chapterIndex: number;
  chapterCount: number;
  onPrev: () => void;
  onNext: () => void;
}

export const ChapterReader = ({ chapter, chapterIndex, chapterCount, onPrev, onNext }: ChapterReaderProps) => {
  const romanNum = toRoman(chapterIndex + 1);

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
        <button className="jl__nav-btn" onClick={onPrev} disabled={chapterIndex === 0}>
          ← Previous
        </button>
        <span>Chapter {romanNum} of {chapterCount}</span>
        <button
          className="jl__nav-btn"
          onClick={onNext}
          disabled={chapterIndex === chapterCount - 1}
        >
          Next →
        </button>
      </div>
    </article>
  );
};
