import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Acheiumdocumento from './components/pages/Acheiumdocumento';
import Perdiumdocumento from './components/pages/Perdiumdocumento';
import Home from './components/pages/Home';
import NavBar from './components/Layout/NavBar';
import Quemsomos from './components/pages/Quemsomos';
import Bilhetedeidentidade from './components/pages/Bilhetedeidentidade';
import Cartadeconducao from './components/pages/Cartadeconducao';
import Passaporte from './components/pages/Passaporte';
import LivreteEtitulo from './components/pages/LivreteEtitulo';
import PaginaPesquisa from './components/pages/PaginaPesquisa';
import DocAchadoRecente from './components/pages/DocAchadosRecentes';


function App() {
  return (
    <Router>
        <NavBar/>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Acheiumdocumento" element={<Acheiumdocumento/>} />
            <Route path="/Perdiumdocumento" element={<Perdiumdocumento/>} />
            <Route path="/Quemsomos" element={<Quemsomos/>} />
            <Route path="/Bilhetedeidentidade" element={<Bilhetedeidentidade/>} />
            <Route path="/Passaporte" element={<Passaporte/>} />
            <Route path="/LivreteEtitulo" element={<LivreteEtitulo/>} />
            <Route path="/Cartadeconducao" element={<Cartadeconducao/>} />
            <Route path="/PaginaPesquisa" element={<PaginaPesquisa/>} />
            <Route path="/DocAchadosRecentes" element={<DocAchadoRecente/>} />

        </Routes>
    </Router>
    
  );
}

export default App;
