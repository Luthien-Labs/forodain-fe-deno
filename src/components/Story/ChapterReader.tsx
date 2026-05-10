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

type ImageAlign = 'left' | 'right' | 'center';

const SectionFig = ({ src, align }: { src: string; align: ImageAlign }) => {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  const isPlaceholder = !loaded || failed;

  return (
    <figure
      className={`jl__section-fig jl__section-fig--${align}${isPlaceholder ? ' is-placeholder' : ''}`}
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

const ChapterSectionBlock = ({ section, isFirst, isLast, imageAlign }: { section: ChapterSection; isFirst: boolean; isLast: boolean; imageAlign?: ImageAlign }) => {
  const centerBottom = isLast && section.paragraphs.length <= 1;
  return (
    <section className={`jl__section${isFirst ? ' jl__section--first' : ''}`}>
      {section.heading && <h4 className="jl__section-h">{section.heading}</h4>}
      {section.image && !centerBottom && <SectionFig src={section.image} align={imageAlign ?? 'right'} />}
      {section.paragraphs.map((para, i) => (
        <p key={i}>{para}</p>
      ))}
      {section.image && centerBottom && <SectionFig src={section.image} align="center" />}
    </section>
  );
};

interface ChapterReaderProps {
  chapter: Chapter;
  chapterIndex: number;
  chapterCount: number;
  onPrev: () => void;
  onNext: () => void;
}

export const ChapterReader = ({ chapter, chapterIndex, chapterCount, onPrev, onNext }: ChapterReaderProps) => {
  const romanNum = toRoman(chapterIndex + 1);

  let imgIdx = 0;
  const sectionAlignments = chapter.sections.map((s): ImageAlign | undefined => {
    if (!s.image) return undefined;
    const align: ImageAlign = imgIdx % 2 === 0 ? 'right' : 'left';
    imgIdx++;
    return align;
  });

  return (
    <article className="jl__chapter">
      <div className="jl__chapter-meta">
        <span><b>Chapter {romanNum}</b></span>
      </div>
      <h3 className="jl__chapter-h">{chapter.title}</h3>
      <div className="jl__body">
        {chapter.sections.map((section, i) => (
          <ChapterSectionBlock key={i} section={section} isFirst={i === 0} isLast={i === chapter.sections.length - 1} imageAlign={sectionAlignments[i]} />
        ))}
      </div>
      <div className="jl__chapter-foot">
        <button className="jl__nav-btn" onClick={onPrev} disabled={chapterIndex === 0}>
          ← Previous
        </button>
        <span>Chapter {chapterIndex + 1} of {chapterCount}</span>
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
