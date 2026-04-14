import { learningPathBlocks } from '../data/learningPath';
import { CheckCircle } from 'lucide-react';

export function RutaAprendizaje() {
  let globalStepCounter = 1;

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>Ruta de Aprendizaje</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Esta ruta muestra el proceso completo desde la generación de renta hasta su tributación en los socios.
        </p>
      </div>
      
      <div style={{ position: 'relative', paddingLeft: '2rem' }}>
        {/* Línea conectora central */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '7px', width: '2px', background: 'var(--border-color)' }}></div>
        
        {learningPathBlocks.map((block, blockIndex) => (
          <div key={blockIndex} style={{ marginBottom: '3rem' }}>
            
            {/* Cabecera del Bloque */}
            <div style={{ position: 'relative', marginBottom: '1.5rem' }}>
              <div style={{ position: 'absolute', left: '-2.4rem', background: 'var(--bg-color)', padding: '5px' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: 'var(--primary)' }}></div>
              </div>
              <h3 style={{ margin: 0, color: 'var(--primary)', textTransform: 'uppercase', fontSize: '1rem', letterSpacing: '0.05em' }}>
                {block.blockName}
              </h3>
            </div>

            {/* Pasos del Bloque */}
            {block.steps.map((step) => {
              const currentStepNumber = globalStepCounter++;
              return (
                <div key={step.id} style={{ position: 'relative', marginBottom: '1.5rem', paddingLeft: '1rem' }}>
                  <div style={{ position: 'absolute', left: '-3rem', background: 'var(--bg-color)', padding: '2px' }}>
                    <CheckCircle size={20} color="var(--accent)" />
                  </div>
                  <div className="card" style={{ margin: 0, borderLeft: '3px solid var(--accent)' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--accent)', fontWeight: 'bold' }}>Paso {currentStepNumber}</span>
                    <h4 style={{ margin: '0.25rem 0', fontSize: '1.1rem' }}>{step.title}</h4>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', lineHeight: '1.4' }}>{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}
