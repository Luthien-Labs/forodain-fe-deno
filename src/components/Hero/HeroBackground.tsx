import type { RefObject } from 'react';

interface HeroBackgroundProps {
  vignetteRef: RefObject<HTMLDivElement | null>;
  dustMidRef: RefObject<HTMLDivElement | null>;
  dustNearRef: RefObject<HTMLDivElement | null>;
}

export const HeroBackground = ({ vignetteRef, dustMidRef, dustNearRef }: HeroBackgroundProps) => {
  return (
    <>
      <div
        className="hero__art"
        aria-hidden="true"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}img/forest.jpg)` }}
      />
      <div
        className="hero__dust hero__dust--far"
        aria-hidden="true"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}img/dust3.webp)` }}
      />
      <div
        className="hero__dust hero__dust--mid"
        ref={dustMidRef}
        aria-hidden="true"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}img/dust2.webp)` }}
      />
      <div className="hero__vignette" ref={vignetteRef} aria-hidden="true" />
      <div
        className="hero__dust hero__dust--near"
        ref={dustNearRef}
        aria-hidden="true"
        style={{ backgroundImage: `url(${import.meta.env.BASE_URL}img/dust2.webp)` }}
      />
      <div className="hero__grain" aria-hidden="true" />
    </>
  );
};
