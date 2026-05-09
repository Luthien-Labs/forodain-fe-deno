import { useState } from 'react';
import './SectionNav.scss';

const SECTIONS = [
  { key: 'story',      label: 'The Story' },
  { key: 'world',      label: 'The World' },
  { key: 'denizens',   label: 'Denizens' },
  { key: 'deities',    label: 'Deities' },
  { key: 'characters', label: 'Characters' },
] as const;

type SectionKey = (typeof SECTIONS)[number]['key'];

export const SectionNav = () => {
  const [active, setActive] = useState<SectionKey>('story');

  return (
    <nav className="section-nav" aria-label="Main sections">
      <div className="section-nav__bar">
        {SECTIONS.map(({ key, label }) => (
          <button
            key={key}
            className="section-nav__item"
            aria-current={active === key ? 'true' : undefined}
            onClick={() => setActive(key)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="section-nav__select-wrap">
        <span className="section-nav__select-label">Section</span>
        <select
          className="section-nav__select"
          aria-label="Jump to section"
          value={active}
          onChange={(e) => setActive(e.target.value as SectionKey)}
        >
          {SECTIONS.map(({ key, label }) => (
            <option key={key} value={key}>{label}</option>
          ))}
        </select>
        <span className="section-nav__select-caret" aria-hidden="true">▾</span>
      </div>
    </nav>
  );
}
