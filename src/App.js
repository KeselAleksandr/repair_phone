import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Range from './components/Range/Range';
import Advantage from './components/Advantage/Advantage';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Faq from './components/Faq/Faq';
import AppContext from './AppContext';
import { useState } from 'react';

function App() {
  return (
    <AppContext.Provider value={{}}>
      <div>
        <Header />
        <Slider />
        <Range />
        <Advantage />
        <Gallery />
        <Contact />
        <Faq />
      </div>
    </AppContext.Provider>
  );
}

export default App;
