import { useState } from 'react';
import { ChapterStrip } from '../Story/ChapterStrip';
import { WorldReader } from '../World/WorldReader';
import { characterEntries } from '../../data/characterEntries';
import '../Story/Story.scss';

const summaries = characterEntries.map(({ id, title, label }) => ({ _id: id, title, label }));

export const Characters = () => {
  const [entryIdx, setEntryIdx] = useState(0);

  return (
    <main className="jl__main">
      <header className="jl__head">
        <p className="jl__kicker">
          <span>§ V · Characters</span>
        </p>
        <h2 className="jl__title">The Party</h2>
      </header>
      <ChapterStrip
        chapters={summaries}
        activeIndex={entryIdx}
        onSelect={setEntryIdx}
      />
      <WorldReader
        entry={characterEntries[entryIdx]}
        entryIndex={entryIdx}
        entryCount={characterEntries.length}
        onPrev={() => setEntryIdx((i) => Math.max(0, i - 1))}
        onNext={() => setEntryIdx((i) => Math.min(characterEntries.length - 1, i + 1))}
      />
    </main>
  );
};
