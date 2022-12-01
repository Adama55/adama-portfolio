import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import CV from './pages/CV'
import Contact from './pages/Contact'
import Layout from './layout/Layout/Layout'
import './styles/Theme.css'

function App() {
  return (
    <div className="App back-color-bleu">
      <Router>
        <Layout>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="portfolio/*" element={<Portfolio />}/>
            <Route path="cv/*" element={<CV />}/>
            <Route path="contact/*" element={<Contact />}/>
        </Routes> 
        </Layout>               
      </Router>      
    </div>
  );
}

export default App;
