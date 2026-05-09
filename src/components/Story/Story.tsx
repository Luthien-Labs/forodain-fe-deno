import { useState } from "react";
import { ChapterStrip } from "./ChapterStrip";
import { ChapterReader } from "./ChapterReader";
import { STORY_CHAPTERS } from "../../data/storyChapters";
import "./Story.scss";

export const Story = () => {
  const [chapterIdx, setChapterIdx] = useState(0);
  const chapters = STORY_CHAPTERS;

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
      <p className="jl__strip-label">Chapters — scroll →</p>
      <ChapterStrip
        chapters={chapters}
        activeIndex={chapterIdx}
        onSelect={setChapterIdx}
      />
      <ChapterReader
        chapters={chapters}
        activeIndex={chapterIdx}
        onPrev={() => setChapterIdx((i) => Math.max(0, i - 1))}
        onNext={() =>
          setChapterIdx((i) => Math.min(chapters.length - 1, i + 1))
        }
      />
    </main>
  );
};
