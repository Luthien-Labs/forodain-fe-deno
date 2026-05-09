import { useState } from 'react';
import { ChapterStrip } from '../Story/ChapterStrip';
import { WorldReader } from '../World/WorldReader';
import { denizenEntries } from '../../data/denizenEntries';
import '../Story/Story.scss';

const summaries = denizenEntries.map(({ id, title, label }) => ({ _id: id, title, label }));

export const Denizens = () => {
  const [entryIdx, setEntryIdx] = useState(0);

  return (
    <main className="jl__main">
      <header className="jl__head">
        <p className="jl__kicker">
          <span>§ III · Denizens</span>
        </p>
        <h2 className="jl__title">Races & Classes of Forodain</h2>
      </header>
      <ChapterStrip
        chapters={summaries}
        activeIndex={entryIdx}
        onSelect={setEntryIdx}
      />
      <WorldReader
        entry={denizenEntries[entryIdx]}
        entryIndex={entryIdx}
        entryCount={denizenEntries.length}
        onPrev={() => setEntryIdx((i) => Math.max(0, i - 1))}
        onNext={() => setEntryIdx((i) => Math.min(denizenEntries.length - 1, i + 1))}
      />
    </main>
  );
};
