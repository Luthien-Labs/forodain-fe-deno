import { useRef, useEffect } from 'react';

export function useParallax() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const vignetteRef = useRef<HTMLDivElement>(null);
  const dustNearRef = useRef<HTMLDivElement>(null);
  const dustMidRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    let ticking = false;

    function update() {
      const y = window.scrollY;
      const h = hero!.offsetHeight;

      if (y < h) {
        const t = y / h;

        hero!.style.setProperty('--py-bg', `${y * 0.45}px`);
        hero!.style.setProperty('--py-content', `${-y * 0.25}px`);
        hero!.style.setProperty('--py-meta', `${-y * 0.18}px`);
        hero!.style.setProperty('--py-dust-far', `${-y * 0.15}px`);
        hero!.style.setProperty('--py-dust-far-x', `${y * 0.04}px`);
        hero!.style.setProperty('--py-dust-mid', `${-y * 0.32}px`);
        hero!.style.setProperty('--py-dust-mid-x', `${-y * 0.06}px`);
        hero!.style.setProperty('--py-dust-near', `${-y * 0.55}px`);
        hero!.style.setProperty('--py-dust-near-x', `${y * 0.09}px`);

        const content = contentRef.current;
        const meta = metaRef.current;
        const vignette = vignetteRef.current;
        const dustNear = dustNearRef.current;
        const dustMid = dustMidRef.current;

        if (content) content.style.opacity = String(Math.max(0, 1 - t * 1.4));
        if (meta) meta.style.opacity = String(Math.max(0, 1 - t * 1.6));
        if (vignette) vignette.style.opacity = String(Math.min(1, 0.85 + t * 0.4));
        if (dustNear) dustNear.style.opacity = String(Math.max(0, 0.25 - t * 0.3));
        if (dustMid) dustMid.style.opacity = String(Math.max(0, 0.17 - t * 0.2));
      }

      ticking = false;
    }

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    update();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { heroRef, contentRef, metaRef, vignetteRef, dustNearRef, dustMidRef };
}
