import type { RefObject } from 'react';
import forestImg from '../../assets/forest.jpg';
import dust2Img from '../../assets/dust2.webp';
import dust3Img from '../../assets/dust3.webp';

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
        style={{ backgroundImage: `url(${forestImg})` }}
      />
      <div
        className="hero__dust hero__dust--far"
        aria-hidden="true"
        style={{ backgroundImage: `url(${dust3Img})` }}
      />
      <div
        className="hero__dust hero__dust--mid"
        ref={dustMidRef}
        aria-hidden="true"
        style={{ backgroundImage: `url(${dust2Img})` }}
      />
      <div className="hero__vignette" ref={vignetteRef} aria-hidden="true" />
      <div
        className="hero__dust hero__dust--near"
        ref={dustNearRef}
        aria-hidden="true"
        style={{ backgroundImage: `url(${dust2Img})` }}
      />
      <div className="hero__grain" aria-hidden="true" />
    </>
  );
}
