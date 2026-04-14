import { useState } from 'react';
import { learningPathBlocks } from '../data/learningPath';
import { CheckCircle, ChevronDown, ChevronRight } from 'lucide-react';

export function RutaAprendizaje() {
  // Controla qué bloque está abierto. Inicia en null para que todos estén cerrados.
  const [activeBlock, setActiveBlock] = useState<number | null>(null);

  const toggleBlock = (index: number) => {
    setActiveBlock(current => current === index ? null : index);
  };

  // Pre-calculamos los números de paso para que la numeración (1 al 10) 
  // no se pierda al ocultar los bloques en el DOM.
  let globalStepCounter = 1;
  const blocksWithNumbers = learningPathBlocks.map(block => ({
    ...block,
    steps: block.steps.map(step => ({
      ...step,
      stepNumber: globalStepCounter++
    }))
  }));

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', paddingBottom: '2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h2>Ruta de Aprendizaje</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
          Esta ruta muestra el proceso completo desde la generación de renta hasta su tributación en los socios. 
          <strong> Toca un bloque para explorarlo.</strong>
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {blocksWithNumbers.map((block, blockIndex) => {
          const isOpen = activeBlock === blockIndex;

          return (
            <div 
              key={blockIndex} 
              className="card" 
              style={{ 
                padding: 0, 
                margin: 0,
                overflow: 'hidden', 
                borderLeft: isOpen ? '4px solid var(--accent)' : '4px solid transparent',
                transition: 'all 0.2s ease-in-out'
              }}
            >
              
              {/* Cabecera del Bloque (Clickable) */}
              <button 
                onClick={() => toggleBlock(blockIndex)}
                style={{ 
                  width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
                  padding: '1.5rem', background: isOpen ? '#f8fafc' : 'white', 
                  border: 'none', cursor: 'pointer', textAlign: 'left'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ 
                    background: isOpen ? 'var(--accent)' : '#f1f5f9', 
                    color: isOpen ? 'white' : 'var(--text-muted)', 
                    borderRadius: '8px', width: '36px', height: '36px', 
                    display: 'flex', justifyContent: 'center', alignItems: 'center', 
                    fontWeight: 'bold', fontSize: '1.1rem'
                  }}>
                    {blockIndex + 1}
                  </div>
                  <h3 style={{ 
                    margin: 0, 
                    color: isOpen ? 'var(--accent)' : 'var(--primary)', 
                    fontSize: '1.15rem' 
                  }}>
                    {block.blockName}
                  </h3>
                </div>
                <div>
                  {isOpen ? <ChevronDown size={24} color="var(--accent)" /> : <ChevronRight size={24} color="var(--text-muted)" />}
                </div>
              </button>

              {/* Contenido (Línea de tiempo interna) */}
              {isOpen && (
                <div style={{ padding: '1.5rem', borderTop: '1px solid var(--border-color)', background: 'white' }}>
                  <div style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                    
                    {/* Línea conectora interna gruesa */}
                    <div style={{ position: 'absolute', top: 0, bottom: 0, left: '6px', width: '2px', background: 'var(--border-color)' }}></div>
                    
                    {block.steps.map((step, stepIdx) => (
                      <div key={step.id} style={{ position: 'relative', marginBottom: stepIdx === block.steps.length - 1 ? '0' : '2rem' }}>
                        
                        <div style={{ position: 'absolute', left: '-2.1rem', background: 'white', padding: '2px' }}>
                          <CheckCircle size={18} color="var(--semaforo-verde)" />
                        </div>
                        
                        <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
                          <span style={{ fontSize: '0.75rem', color: 'var(--semaforo-verde)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            Paso {step.stepNumber}
                          </span>
                          <h4 style={{ margin: '0.25rem 0 0.5rem 0', fontSize: '1.05rem', color: 'var(--primary)' }}>
                            {step.title}
                          </h4>
                          <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                            {step.description}
                          </p>
                        </div>

                      </div>
                    ))}

                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
