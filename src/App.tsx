import { useState } from 'react';
import { Hero } from './components/Hero/Hero';
import { SectionNav, type SectionKey } from './components/SectionNav/SectionNav';
import { Story } from './components/Story/Story';
import { World } from './components/World/World';
import { Denizens } from './components/Denizens/Denizens';
import { Covenant } from './components/Covenant/Covenant';
import { Characters } from './components/Characters/Characters';
import { Met } from './components/Met/Met';
import { Placeholder } from './components/Placeholder/Placeholder';

const App = () => {
  const [section, setSection] = useState<SectionKey>('story');

  return (
    <>
      <Hero />
      <div className="journal-theme">
        <SectionNav active={section} onSectionChange={setSection} />
        {section === 'story' && <Story />}
        {section === 'world' && <World />}
        {section === 'denizens' && <Denizens />}
        {section === 'covenant' && <Covenant />}
        {section === 'characters' && <Characters />}
        {section === 'met' && <Met />}
        {section !== 'story' && section !== 'world' && section !== 'denizens' && section !== 'covenant' && section !== 'characters' && section !== 'met' && <Placeholder />}
      </div>
    </>
  );
};

export default App;
