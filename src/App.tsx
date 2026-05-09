import { useState } from 'react';
import { Hero } from './components/Hero/Hero';
import { SectionNav, type SectionKey } from './components/SectionNav/SectionNav';
import { Story } from './components/Story/Story';
import { World } from './components/World/World';
import { Denizens } from './components/Denizens/Denizens';
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
        {section !== 'story' && section !== 'world' && section !== 'denizens' && <Placeholder />}
      </div>
    </>
  );
};

export default App;
