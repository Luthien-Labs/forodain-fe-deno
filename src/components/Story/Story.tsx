import { useState, useEffect } from "react";
import { ChapterStrip } from "./ChapterStrip";
import { ChapterReader } from "./ChapterReader";
import { fetchChapters, fetchChapter } from "../../api";
import type { Chapter } from "../../types/story";
import "./Story.scss";

export const Story = () => {
  const [summaries, setSummaries] = useState<Chapter[] | null>(null);
  const [activeChapter, setActiveChapter] = useState<Chapter | null>(null);
  const [chapterIdx, setChapterIdx] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchChapters()
      .then((data) => {
        setSummaries(data);
      })
      .catch((err: Error) => setError(err.message));
  }, []);

  useEffect(() => {
    if (!summaries || summaries.length === 0) return;
    fetchChapter(summaries[chapterIdx]._id)
      .then(setActiveChapter)
      .catch((err: Error) => setError(err.message));
  }, [summaries, chapterIdx]);

  if (error) {
    return (
      <main className="jl__main">
        <p style={{ color: 'var(--rust)' }}>Failed to load story: {error}</p>
      </main>
    );
  }

  return (
    <main className="jl__main">
      <header className="jl__head">
        <p className="jl__kicker">
          <span>§ I · The Story</span>
        </p>
        <h2 className="jl__title">
          "In the cold and brutal north, it is for the bold and true to restore
          the land to Aeladh."
        </h2>
      </header>
      {summaries === null ? (
        <p className="jl__loading">Loading chapters…</p>
      ) : (
        <>
          <ChapterStrip
            chapters={summaries}
            activeIndex={chapterIdx}
            onSelect={setChapterIdx}
          />
          {activeChapter === null ? (
            <p className="jl__loading">Loading…</p>
          ) : (
            <ChapterReader
              chapter={activeChapter}
              chapterIndex={chapterIdx}
              chapterCount={summaries.length}
              onPrev={() => setChapterIdx((i) => Math.max(0, i - 1))}
              onNext={() =>
                setChapterIdx((i) => Math.min(summaries.length - 1, i + 1))
              }
            />
          )}
        </>
      )}
    </main>
  );
};
