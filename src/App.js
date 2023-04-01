import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home'
import Portfolio from './pages/Portfolio/Portfolio'
import CV from './pages/CV/CV'
import Contact from './pages/Contact/Contact'
import Layout from './layout/Layout/Layout'
import Error404 from "./pages/Error404/Error404";
import './styles/Theme.css'

function App() {
  return (
    <div className="App back-color-bleu">
      <Router>
        <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/cv" element={<CV />}/>
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
        </Routes> 
        </Layout>               
      </Router>      
    </div>
  );
}

export default App;
