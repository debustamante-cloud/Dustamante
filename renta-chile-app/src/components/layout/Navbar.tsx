import { Link, useLocation } from 'react-router-dom';
import { Home, BookOpen, Layers, Calculator, HelpCircle } from 'lucide-react';
import './Navbar.css';

export function Navbar() {
  return (
    <nav className="desktop-navbar">
      <div className="nav-brand">
        <Link to="/">RentaChile App</Link>
      </div>
      <div className="nav-links">
        <Link to="/ruta-aprendizaje"><BookOpen size={18}/> Aprendizaje</Link>
        <Link to="/flujo-tributario"><Layers size={18}/> Flujo</Link>
        <Link to="/regimenes">Regímenes</Link>
        <Link to="/articulos">Artículos</Link>
        <Link to="/partidas">Partidas</Link>
        <Link to="/calculadoras"><Calculator size={18}/> Calculadoras</Link>
      </div>
    </nav>
  );
}

export function MobileMenu() {
  const loc = useLocation();
  const isActive = (path: string) => loc.pathname === path ? 'active' : '';

  return (
    <nav className="mobile-menu">
      <Link to="/" className={`menu-item ${isActive('/')}`}>
        <Home size={20}/>
        <span>Inicio</span>
      </Link>
      <Link to="/flujo-tributario" className={`menu-item ${isActive('/flujo-tributario')}`}>
        <Layers size={20}/>
        <span>Flujo</span>
      </Link>
      <Link to="/articulos" className={`menu-item ${isActive('/articulos')}`}>
        <BookOpen size={20}/>
        <span>Estudio</span>
      </Link>
      <Link to="/calculadoras" className={`menu-item ${isActive('/calculadoras')}`}>
        <Calculator size={20}/>
        <span>Calc</span>
      </Link>
      <Link to="/quiz" className={`menu-item ${isActive('/quiz')}`}>
        <HelpCircle size={20}/>
        <span>Quiz</span>
      </Link>
    </nav>
  );
}
