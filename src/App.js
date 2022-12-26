import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Acheiumdocumento from './components/pages/Acheiumdocumento';
import Perdiumdocumento from './components/pages/Perdiumdocumento';
import Home from './components/pages/Home';
import NavBar from './components/NavBar';
import Quemsomos from './components/pages/Quemsomos';

function App() {
  return (
    <Router>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Acheiumdocumento" element={<Acheiumdocumento/>} />
            <Route path="/Perdiumdocumento" element={<Perdiumdocumento/>} />
            <Route path="/Quemsomos" element={<Quemsomos/>} />
        </Routes>
    </Router>
    
  );
}

export default App;
