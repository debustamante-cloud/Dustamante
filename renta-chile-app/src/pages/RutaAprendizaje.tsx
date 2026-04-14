import { learningPathSteps } from '../data/learningPath';
import { CheckCircle } from 'lucide-react';

export function RutaAprendizaje() {
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Ruta de Aprendizaje</h2>
      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '7px', width: '2px', background: 'var(--border-color)' }}></div>
        
        {learningPathSteps.map((step, index) => (
          <div key={step.id} style={{ position: 'relative', marginBottom: '2rem' }}>
            <div style={{ position: 'absolute', left: '-2rem', background: 'white', padding: '2px' }}>
              <CheckCircle size={20} color="var(--accent)" />
            </div>
            <div className="card" style={{ margin: 0 }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 'bold' }}>Paso {index + 1}</span>
              <h3 style={{ margin: '0.25rem 0' }}>{step.title}</h3>
              <p style={{ margin: 0, color: 'var(--text-secondary)' }}>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
