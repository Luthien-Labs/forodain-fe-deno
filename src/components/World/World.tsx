import { useState } from 'react';
import { ChapterStrip } from '../Story/ChapterStrip';
import { WorldReader } from './WorldReader';
import { worldEntries } from '../../data/worldEntries';
import '../Story/Story.scss';

const summaries = worldEntries.map(({ id, title, label }) => ({ _id: id, title, label }));

export const World = () => {
  const [entryIdx, setEntryIdx] = useState(0);

  return (
    <main className="jl__main">
      <header className="jl__head">
        <p className="jl__kicker">
          <span>§ II · The World</span>
        </p>
        <h2 className="jl__title">Into Forodain</h2>
      </header>
      <ChapterStrip
        chapters={summaries}
        activeIndex={entryIdx}
        onSelect={setEntryIdx}
      />
      <WorldReader
        entry={worldEntries[entryIdx]}
        entryIndex={entryIdx}
        entryCount={worldEntries.length}
        onPrev={() => setEntryIdx((i) => Math.max(0, i - 1))}
        onNext={() => setEntryIdx((i) => Math.min(worldEntries.length - 1, i + 1))}
      />
    </main>
  );
};
