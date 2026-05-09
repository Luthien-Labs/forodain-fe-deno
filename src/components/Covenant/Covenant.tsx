import { useState } from 'react';
import { ChapterStrip } from '../Story/ChapterStrip';
import { WorldReader } from '../World/WorldReader';
import { covenantEntries } from '../../data/covenantEntries';
import '../Story/Story.scss';

const summaries = covenantEntries.map(({ id, title }) => ({ _id: id, title }));

export const Covenant = () => {
  const [entryIdx, setEntryIdx] = useState(0);

  return (
    <main className="jl__main">
      <header className="jl__head">
        <p className="jl__kicker">
          <span>§ IV · The Covenant</span>
        </p>
        <h2 className="jl__title">The Covenant of Aeladh</h2>
      </header>
      <ChapterStrip
        chapters={summaries}
        activeIndex={entryIdx}
        onSelect={setEntryIdx}
      />
      <WorldReader
        entry={covenantEntries[entryIdx]}
        entryIndex={entryIdx}
        entryCount={covenantEntries.length}
        onPrev={() => setEntryIdx((i) => Math.max(0, i - 1))}
        onNext={() => setEntryIdx((i) => Math.min(covenantEntries.length - 1, i + 1))}
      />
    </main>
  );
};
