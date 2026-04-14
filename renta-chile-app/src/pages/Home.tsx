import { Link } from 'react-router-dom';
import { BookOpen, Layers, Calculator, List, Route } from 'lucide-react';

export function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Impuesto a la Renta</h1>
      <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>Plataforma académica y formal para el estudio tributario en Chile.</p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', textAlign: 'left' }}>
        
        <Link to="/ruta-aprendizaje" className="card" style={{ textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s' }}>
          <Route size={32} color="var(--accent)" style={{ marginBottom: '1rem' }} />
          <h3>Ruta de Aprendizaje</h3>
          <p style={{ color: 'var(--text-muted)' }}>Sigue el paso a paso estructurado desde conceptos básicos hasta la tributación final.</p>
        </Link>
        
        <Link to="/flujo-tributario" className="card" style={{ textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s' }}>
          <Layers size={32} color="var(--semaforo-verde)" style={{ marginBottom: '1rem' }} />
          <h3>Flujo Tributario Completo</h3>
          <p style={{ color: 'var(--text-muted)' }}>Visualiza la cascada impositiva interactiva que conecta todos los artículos y regímenes.</p>
        </Link>

        <Link to="/articulos" className="card" style={{ textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s' }}>
          <BookOpen size={32} color="var(--primary-light)" style={{ marginBottom: '1rem' }} />
          <h3>Estudio por Artículo</h3>
          <p style={{ color: 'var(--text-muted)' }}>Fichas detalladas de los artículos 17, 21, 29 al 33 bis.</p>
        </Link>

        <Link to="/partidas" className="card" style={{ textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s' }}>
          <List size={32} color="var(--semaforo-amarillo)" style={{ marginBottom: '1rem' }} />
          <h3>Análisis de Partidas</h3>
          <p style={{ color: 'var(--text-muted)' }}>Casos específicos: Honorarios, depreciación, multas, etc.</p>
        </Link>

        <Link to="/calculadoras" className="card" style={{ textDecoration: 'none', color: 'inherit', transition: 'transform 0.2s' }}>
          <Calculator size={32} color="var(--semaforo-rojo)" style={{ marginBottom: '1rem' }} />
          <h3>Calculadoras</h3>
          <p style={{ color: 'var(--text-muted)' }}>Simuladores paso a paso con advertencias y resultados.</p>
        </Link>
      </div>
    </div>
  );
}
