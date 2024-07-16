
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contacto from './components/Contacto';
import Algebra from './components/Algebra';
import Historia from './components/Historia';
import Biologia from './components/Biologia';
import Psicologia from './components/Psicologia';
import Prestamo from './components/Prestamo';
import Rentados from './components/Rentados';


function App() {
  return (
    <div className="">
      <Router>
      <NavBar/>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/prestamo" element={<Prestamo/>} />
          <Route path="/rentados" element={<Rentados/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/algebra" element={<Algebra/>} />
          <Route path="/historia" element={<Historia/>} />
          <Route path="/biologia" element={<Biologia/>} />
          <Route path="/psicologia" element={<Psicologia/>} />
        
        
        </Routes>
      </Router>
      </div>
  );
}

export default App;
