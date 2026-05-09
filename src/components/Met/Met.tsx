import { useState } from 'react';
import { ChapterStrip } from '../Story/ChapterStrip';
import { MetReader } from './MetReader';
import { metEntries } from '../../data/metEntries';
import '../Story/Story.scss';
import './Met.scss';

const summaries = metEntries.map(({ id, title, label }) => ({ _id: id, title, label }));

export const Met = () => {
  const [entryIdx, setEntryIdx] = useState(0);

  return (
    <main className="jl__main">
      <header className="jl__head">
        <p className="jl__kicker">
          <span>§ VI · Those We Have Met</span>
        </p>
        <h2 className="jl__title">Those We Have Met Along the Way</h2>
      </header>
      <ChapterStrip
        chapters={summaries}
        activeIndex={entryIdx}
        onSelect={setEntryIdx}
      />
      <MetReader
        entry={metEntries[entryIdx]}
        entryIndex={entryIdx}
        entryCount={metEntries.length}
        onPrev={() => setEntryIdx((i) => Math.max(0, i - 1))}
        onNext={() => setEntryIdx((i) => Math.min(metEntries.length - 1, i + 1))}
      />
    </main>
  );
};
