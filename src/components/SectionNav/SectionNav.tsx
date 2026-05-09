import './SectionNav.scss';

export const SECTIONS = [
  { key: 'story',      label: 'The Story' },
  { key: 'world',      label: 'The World' },
  { key: 'denizens',   label: 'Denizens' },
  { key: 'covenant',   label: 'The Covenant' },
  { key: 'characters', label: 'Characters' },
  { key: 'met',        label: 'Those We Have Met' },
  { key: 'stoneborn',  label: 'Stoneborn' },
] as const;

export type SectionKey = (typeof SECTIONS)[number]['key'];

interface SectionNavProps {
  active: SectionKey;
  onSectionChange: (key: SectionKey) => void;
}

export const SectionNav = ({ active, onSectionChange }: SectionNavProps) => (
  <nav className="section-nav" aria-label="Main sections">
    <div className="section-nav__bar">
      {SECTIONS.map(({ key, label }) => (
        <button
          key={key}
          className="section-nav__item"
          aria-current={active === key ? 'true' : undefined}
          onClick={() => onSectionChange(key)}
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
        onChange={(e) => onSectionChange(e.target.value as SectionKey)}
      >
        {SECTIONS.map(({ key, label }) => (
          <option key={key} value={key}>{label}</option>
        ))}
      </select>
      <span className="section-nav__select-caret" aria-hidden="true">▾</span>
    </div>
  </nav>
);
