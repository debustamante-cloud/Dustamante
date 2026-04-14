import { flowSteps } from '../data/flowSteps';
import { ArrowDown, Info } from 'lucide-react';

export function FlujoTributario() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2>Flujo Tributario Completo</h2>
        <p>Cascada de determinación impositiva desde el resultado contable hasta los dueños.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
        {flowSteps.map((step, index) => (
          <div key={step.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            
            <div className="card" style={{ width: '100%', maxWidth: '500px', padding: '1rem', margin: 0, border: '2px solid var(--primary-light)', background: index % 2 === 0 ? 'white' : '#f8fafc' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.25rem 0' }}>{step.title}</h3>
                  <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{step.desc}</p>
                </div>
                {step.linkRef && (
                  <button style={{ background: 'transparent', border: 'none', color: 'var(--accent)', cursor: 'pointer' }} title={`Referencia: ${step.linkRef}`}>
                    <Info size={20} />
                  </button>
                )}
              </div>
            </div>

            {index < flowSteps.length - 1 && (
              <div style={{ padding: '0.5rem 0' }}>
                <ArrowDown size={24} color="var(--border-color)" />
              </div>
            )}
            
          </div>
        ))}
      </div>
    </div>
  );
}
