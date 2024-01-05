import Header from './components/Header/Header';
import Slider from './components/Slider/Slider';
import Range from './components/Range/Range';
import Advantage from './components/Advantage/Advantage';
import Adress from './components/Adress/Adress';
import Contact from './components/Contact/Contact';
import Faq from './components/Faq/Faq';
import AppContext from './AppContext';
import { useState, useRef } from 'react';

function App() {
  const [faq, setFaq] = useState('');
  const [range, setRange] = useState('');
  const [advantage, setAdvantage] = useState('');
  const [adress, setAdress] = useState('');
  const [contact, setContact] = useState('');

  return (
    <AppContext.Provider value={{ faq, range, advantage, adress, contact }}>
      <div>
        <Header />
        <Slider />
        <Range setRange={setRange} />
        <Advantage setAdvantage={setAdvantage} />
        <Adress setAdress={setAdress} />
        <Contact setContact={setContact} />
        <Faq setFaq={setFaq} />
      </div>
    </AppContext.Provider>
  );
}

export default App;
