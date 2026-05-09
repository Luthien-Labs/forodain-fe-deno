import { useState, useEffect } from 'react';
import { useParallax } from '../../hooks/useParallax';
import { HeroBackground } from './HeroBackground';
import { HeroContent } from './HeroContent';
import { fetchChapters } from '../../api';
import './Hero.scss';

const toRoman = (n: number): string => {
  const vals = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
  const syms = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I'];
  let result = '';
  for (let i = 0; i < vals.length; i++) {
    while (n >= vals[i]) { result += syms[i]; n -= vals[i]; }
  }
  return result;
};

export const Hero = () => {
  const { heroRef, contentRef, metaRef, vignetteRef, dustNearRef, dustMidRef } = useParallax();
  const [sessionLabel, setSessionLabel] = useState('…');

  useEffect(() => {
    fetchChapters()
      .then((chapters) => setSessionLabel(toRoman(chapters.length)))
      .catch(() => { /* leave as ellipsis on error */ });
  }, []);

  return (
    <header className="hero" ref={heroRef}>
      <HeroBackground
        vignetteRef={vignetteRef}
        dustMidRef={dustMidRef}
        dustNearRef={dustNearRef}
      />
      <HeroContent contentRef={contentRef} metaRef={metaRef} sessionLabel={sessionLabel} />
    </header>
  );
}
