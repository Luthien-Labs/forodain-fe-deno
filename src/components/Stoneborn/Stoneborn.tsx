import { useState } from 'react';
import { ChapterStrip } from '../Story/ChapterStrip';
import { WorldReader } from '../World/WorldReader';
import { stonebornEntries } from '../../data/stonebornEntries';
import '../Story/Story.scss';

const summaries = stonebornEntries.map(({ id, title, label }) => ({ _id: id, title, label }));

export const Stoneborn = () => {
  const [entryIdx, setEntryIdx] = useState(0);

  return (
    <main className="jl__main">
      <header className="jl__head">
        <p className="jl__kicker">
          <span>§ VII · Stoneborn</span>
        </p>
        <h2 className="jl__title">The Dwarves of Ardainn</h2>
      </header>
      <ChapterStrip
        chapters={summaries}
        activeIndex={entryIdx}
        onSelect={setEntryIdx}
      />
      <WorldReader
        entry={stonebornEntries[entryIdx]}
        entryIndex={entryIdx}
        entryCount={stonebornEntries.length}
        onPrev={() => setEntryIdx((i) => Math.max(0, i - 1))}
        onNext={() => setEntryIdx((i) => Math.min(stonebornEntries.length - 1, i + 1))}
      />
    </main>
  );
};
