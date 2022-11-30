import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Header from './mainComponents/Header'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import CV from './pages/CV'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="portfolio/*" element={<Portfolio />}/>
            <Route path="cv/*" element={<CV />}/>
            <Route path="contact/*" element={<Contact />}/>
        </Routes>        
      </Router>
      
    </div>
  );
}

export default App;
