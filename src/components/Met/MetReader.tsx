import type { MetEntry, MetSection, NpcEntry } from '../../types/met';

const toRoman = (n: number): string => {
  const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const syms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let result = '';
  for (let i = 0; i < vals.length; i++) {
    while (n >= vals[i]) { result += syms[i]; n -= vals[i]; }
  }
  return result;
};

const NpcRow = ({ npc }: { npc: NpcEntry }) => (
  <li className="met__npc">
    <div className="met__npc-header">
      <span className="met__npc-name">{npc.name}</span>
      {npc.status && <span className="met__npc-status">{npc.status}</span>}
    </div>
    {npc.description && <p className="met__npc-desc">{npc.description}</p>}
  </li>
);

const MetSectionBlock = ({ section }: { section: MetSection }) => (
  <div className="met__section">
    {section.heading && <h4 className="met__section-h">{section.heading}</h4>}
    {section.intro && <p className="met__intro">{section.intro}</p>}
    {section.npcs.length > 0 && (
      <ul className="met__roster">
        {section.npcs.map((npc, i) => <NpcRow key={i} npc={npc} />)}
      </ul>
    )}
  </div>
);

interface MetReaderProps {
  entry: MetEntry;
  entryIndex: number;
  entryCount: number;
  onPrev: () => void;
  onNext: () => void;
}

export const MetReader = ({ entry, entryIndex, entryCount, onPrev, onNext }: MetReaderProps) => {
  const romanNum = toRoman(entryIndex + 1);

  return (
    <article className="jl__chapter">
      <div className="jl__chapter-meta">
        <span><b>Entry {romanNum}</b></span>
      </div>
      <h3 className="jl__chapter-h">{entry.title}</h3>
      <div className="met__body">
        {entry.sections.map((section, i) => (
          <MetSectionBlock key={i} section={section} />
        ))}
      </div>
      <div className="jl__chapter-foot">
        <button className="jl__nav-btn" onClick={onPrev} disabled={entryIndex === 0}>
          ← Previous
        </button>
        <span>Entry {romanNum} of {entryCount}</span>
        <button className="jl__nav-btn" onClick={onNext} disabled={entryIndex === entryCount - 1}>
          Next →
        </button>
      </div>
    </article>
  );
};
