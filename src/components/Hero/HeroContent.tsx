import type { RefObject } from "react";

interface HeroContentProps {
  contentRef: RefObject<HTMLDivElement | null>;
  metaRef: RefObject<HTMLDivElement | null>;
}

export const HeroContent = ({ contentRef, metaRef }: HeroContentProps) => {
  return (
    <>
      <div className="hero__content" ref={contentRef}>
        <div className="hero__eyebrow">
          <span>A Campaign in the Mists of Forodain</span>
        </div>
        <h1 className="hero__title">
          Chronicles of the
          <br />
          <em>Broken Spear</em>
        </h1>
        <p className="hero__sub">
          A simple weapon sundered binds the fate of a nation.
        </p>
      </div>
      <div className="hero__campaign-meta" ref={metaRef}>
        <div className="hero__session">Session XXIII</div>
        <div>
          Year 1422 of the <strong>Common Reckoning</strong>
        </div>
        <div>
          Began <strong>PASTURES, 1144</strong>
        </div>
      </div>
    </>
  );
};
