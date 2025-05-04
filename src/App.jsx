import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import CTA from "./components/useState/CTA/Cta";
import UseState from "./components/useState/useStateComponent/UseState";
import Tailwind from './components/useState/Tailwind-Props/Tailwind';
import BgChanger from './components/useState/BgChanger/BgChanger';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CTA />} />
          <Route path="/use-state-component" element={<UseState />} />
          <Route path="/tailwind-component" element={<Tailwind />} />
          <Route path="/bgchanger-component" element={<BgChanger />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
