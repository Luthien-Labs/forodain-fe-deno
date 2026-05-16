import { useRef, useState, useEffect, useCallback } from 'react';
import type { Chapter } from '../../types/story';

const SCROLL_AMOUNT = 468; // ~2 card widths

const toRoman = (n: number): string => {
  const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const syms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let result = '';
  for (let i = 0; i < vals.length; i++) {
    while (n >= vals[i]) { result += syms[i]; n -= vals[i]; }
  }
  return result;
};

interface ChapterStripProps {
  chapters: Chapter[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export const ChapterStrip = ({ chapters, activeIndex, onSelect }: ChapterStripProps) => {
  const stripRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  // Right arrow: disabled when the strip is scrolled to its end
  const syncRight = useCallback(() => {
    const el = stripRef.current;
    if (!el) return;
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    syncRight();
    const el = stripRef.current;
    if (!el) return;
    el.addEventListener('scroll', syncRight, { passive: true });
    const ro = new ResizeObserver(syncRight);
    ro.observe(el);
    return () => { el.removeEventListener('scroll', syncRight); ro.disconnect(); };
  }, [chapters, syncRight]);

  // Left arrow: disabled when the first card is more than half visible
  useEffect(() => {
    const firstCard = cardRefs.current[0];
    const strip = stripRef.current;
    if (!firstCard || !strip) return;
    const io = new IntersectionObserver(
      ([entry]) => setCanLeft(entry.intersectionRatio < 0.5),
      { root: strip, threshold: 0.5 },
    );
    io.observe(firstCard);
    return () => io.disconnect();
  }, [chapters]);

  useEffect(() => {
    const card = cardRefs.current[activeIndex];
    const strip = stripRef.current;
    if (!card || !strip) return;
    const cardLeft = card.offsetLeft;
    const cardRight = cardLeft + card.offsetWidth;
    const stripLeft = strip.scrollLeft;
    const stripRight = stripLeft + strip.clientWidth;
    if (cardLeft < stripLeft) {
      strip.scrollTo({ left: cardLeft, behavior: 'smooth' });
    } else if (cardRight > stripRight) {
      strip.scrollTo({ left: cardRight - strip.clientWidth, behavior: 'smooth' });
    }
  }, [activeIndex]);

  const scroll = (dir: 'left' | 'right') => {
    stripRef.current?.scrollBy({ left: dir === 'left' ? -SCROLL_AMOUNT : SCROLL_AMOUNT, behavior: 'smooth' });
  };

  return (
    <>
      <p className="jl__strip-label">Chapters</p>
      <div className="jl__strip-wrap">
        {(canLeft || canRight) && (
          <button
            className="jl__strip-arrow jl__strip-arrow--prev"
            type="button"
            aria-label="Scroll chapters backward"
            disabled={!canLeft}
            onClick={() => scroll('left')}
          >
            ‹
          </button>
        )}
        <div className="jl__strip" role="listbox" aria-label="Chapters" ref={stripRef}>
          {chapters.map((chapter, i) => (
            <button
              key={chapter._id}
              ref={(el) => { cardRefs.current[i] = el; }}
              className="jl__card"
              role="option"
              aria-selected={i === activeIndex}
              aria-current={i === activeIndex ? 'true' : undefined}
              onClick={() => onSelect(i)}
            >
              <span className="jl__card-num">Ch. {toRoman(i + 1)}</span>
              <span className="jl__card-title">{chapter.title}</span>
            </button>
          ))}
        </div>
        {(canLeft || canRight) && (
          <button
            className="jl__strip-arrow jl__strip-arrow--next"
            type="button"
            aria-label="Scroll chapters forward"
            disabled={!canRight}
            onClick={() => scroll('right')}
          >
            ›
          </button>
        )}
      </div>
    </>
  );
};
