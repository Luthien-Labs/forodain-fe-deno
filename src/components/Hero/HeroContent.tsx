import type { RefObject } from 'react';

interface HeroContentProps {
  contentRef: RefObject<HTMLDivElement | null>;
  metaRef: RefObject<HTMLDivElement | null>;
}

export const HeroContent = ({ contentRef, metaRef }: HeroContentProps) => {
  return (
    <>
      <div className="hero__content" ref={contentRef}>
        <div className="hero__eyebrow">
          <span>A Campaign in the Marches of Vael</span>
        </div>
        <h1 className="hero__title">
          Chronicles of the<br />
          <em>Broken Spear</em>
        </h1>
        <p className="hero__sub">
          Three winters since the last king bled. The roads are dark, the gods are quieter
          still, and a spear once thought ceremonial has split in two.
        </p>
      </div>
      <div className="hero__campaign-meta" ref={metaRef}>
        <div className="hero__session">Session XXIII</div>
        <div>Year 1147 of the <strong>Iron Concord</strong></div>
        <div>Began <strong>Frostmonth, 1144</strong></div>
      </div>
    </>
  );
}
