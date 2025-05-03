import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import CTA from "./components/useState/CTA/Cta";
import UseState from "./components/useState/UseState";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<CTA />} />
          <Route path="/use-state-component" element={<UseState />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
