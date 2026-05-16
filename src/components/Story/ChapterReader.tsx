import { useState } from 'react';
import type { Chapter, Block } from '../../types/story';

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

const renderBlock = (block: Block, i: number) => {
  switch (block.type) {
    case 'paragraph':
      return <p key={i}>{block.text}</p>;
    case 'heading':
      return <h4 key={i} className="jl__section-h">{block.text}</h4>;
    case 'image':
      return (
        <SectionFig
          key={i}
          src={block.src}
          align={block.placement === 'standalone' ? 'center' : block.placement}
        />
      );
    case 'quote':
      return (
        <blockquote key={i}>
          <p>{block.text}</p>
          {block.cite && <cite>{block.cite}</cite>}
        </blockquote>
      );
    case 'divider':
      return <hr key={i} className="jl__divider" />;
  }
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

  return (
    <article className="jl__chapter">
      <div className="jl__chapter-meta">
        <span><b>Chapter {romanNum}</b></span>
      </div>
      <h3 className="jl__chapter-h">{chapter.title}</h3>
      {chapter.subtitle && <p className="jl__chapter-subtitle">{chapter.subtitle}</p>}
      <div className="jl__body">
        {chapter.blocks.map((block, i) => renderBlock(block, i))}
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
