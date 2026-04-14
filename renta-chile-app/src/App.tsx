import { Routes, Route } from 'react-router-dom';
import { Navbar, MobileMenu } from './components/layout/Navbar';
import { Home } from './pages/Home';
import { RutaAprendizaje } from './pages/RutaAprendizaje';
import { FlujoTributario } from './pages/FlujoTributario';
import { Articulos } from './pages/Articulos';
import { Partidas } from './pages/Partidas';
import { Regimenes } from './pages/Regimenes';
import { Calculadoras } from './pages/Calculadoras';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ruta-aprendizaje" element={<RutaAprendizaje />} />
          <Route path="/flujo-tributario" element={<FlujoTributario />} />
          <Route path="/articulos" element={<Articulos />} />
          <Route path="/partidas" element={<Partidas />} />
          <Route path="/regimenes" element={<Regimenes />} />
          <Route path="/calculadoras" element={<Calculadoras />} />
          {/* Faltan Quiz e item view pages, pero es una base sólida */}
        </Routes>
      </main>

      <MobileMenu />
    </div>
  );
}

export default App;
