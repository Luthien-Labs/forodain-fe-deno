import { Hero } from './components/Hero/Hero';
import { SectionNav } from './components/SectionNav/SectionNav';
import { Placeholder } from './components/Placeholder/Placeholder';

const App = () => (
  <>
    <Hero />
    <div className="journal-theme">
      <SectionNav />
      <Placeholder />
    </div>
  </>
);

export default App;
