import './App.css';
import './2xl.css';
import './xl.css';
import './lg.css';
import './md.css';
import './sm.css';
import './xsm.css';
 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import { Service } from './components/Service';
import Buying from './components/Buying';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Product/*" element={<Buying />} />
          <Route path="/Service" element={<Service />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
