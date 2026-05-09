import { useParallax } from '../../hooks/useParallax';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import './Hero.scss';

export const Hero = () => {
  const { heroRef, contentRef, metaRef, vignetteRef, dustNearRef, dustMidRef } = useParallax();

  return (
    <header className="hero" ref={heroRef}>
      <HeroBackground
        vignetteRef={vignetteRef}
        dustMidRef={dustMidRef}
        dustNearRef={dustNearRef}
      />
      <HeroContent contentRef={contentRef} metaRef={metaRef} />
    </header>
  );
}
