import type { WorldEntry, WorldSection } from '../../types/world';

const toRoman = (n: number): string => {
  const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const syms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let result = '';
  for (let i = 0; i < vals.length; i++) {
    while (n >= vals[i]) { result += syms[i]; n -= vals[i]; }
  }
  return result;
};

const WorldSectionBlock = ({ section, isFirst }: { section: WorldSection; isFirst: boolean }) => (
  <section className={`jl__section${isFirst ? ' jl__section--first' : ''}`}>
    {section.heading && <h4 className="jl__section-h">{section.heading}</h4>}
    {section.paragraphs.map((para, i) => (
      <p key={i}>{para}</p>
    ))}
  </section>
);

interface WorldReaderProps {
  entry: WorldEntry;
  entryIndex: number;
  entryCount: number;
  onPrev: () => void;
  onNext: () => void;
}

export const WorldReader = ({ entry, entryIndex, entryCount, onPrev, onNext }: WorldReaderProps) => {
  const romanNum = toRoman(entryIndex + 1);

  return (
    <article className="jl__chapter">
      <div className="jl__chapter-meta">
        <span><b>Entry {romanNum}</b></span>
      </div>
      <h3 className="jl__chapter-h">{entry.title}</h3>
      <div className="jl__body">
        {entry.sections.map((section, i) => (
          <WorldSectionBlock key={i} section={section} isFirst={i === 0} />
        ))}
      </div>
      <div className="jl__chapter-foot">
        <button className="jl__nav-btn" onClick={onPrev} disabled={entryIndex === 0}>
          ← Previous
        </button>
        <span>Entry {romanNum} of {entryCount}</span>
        <button
          className="jl__nav-btn"
          onClick={onNext}
          disabled={entryIndex === entryCount - 1}
        >
          Next →
        </button>
      </div>
    </article>
  );
};
