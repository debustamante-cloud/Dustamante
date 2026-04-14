import { useState } from 'react';
import { AlertCircle, Play } from 'lucide-react';
import { calculators } from '../data/calculatorsMetaData';
export function Calculadoras() {
  const [activeTab, setActiveTab] = useState(calculators[0].id);
  const activeCalc = calculators.find(c => c.id === activeTab);

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h2>Calculadoras Interactivas</h2>
        <p>Herramientas de simulación. (Lógica en construcción, actualmente muestra estructura).</p>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
        {calculators.map(c => (
          <button 
            key={c.id} 
            onClick={() => setActiveTab(c.id)}
            style={{ padding: '0.5rem 1rem', borderRadius: '99px', border: '1px solid var(--border-color)', background: activeTab === c.id ? 'var(--primary)' : 'white', color: activeTab === c.id ? 'white' : 'var(--text-primary)', cursor: 'pointer', whiteSpace: 'nowrap' }}
          >
            {c.titulo}
          </button>
        ))}
      </div>

      {activeCalc && (
        <div className="card">
          <h3 style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1rem' }}>{activeCalc.titulo}</h3>
          <p>{activeCalc.descripcion}</p>

          <div style={{ background: '#fffbeb', padding: '1rem', borderRadius: '4px', borderLeft: '4px solid #f59e0b', marginBottom: '1.5rem' }}>
            <strong style={{ color: '#d97706', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><AlertCircle size={18}/> Advertencias</strong>
            <ul style={{ margin: 0, paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              {activeCalc.advertenciasGenerales.map((adv, i) => <li key={i}>{adv}</li>)}
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {activeCalc.camposEntrada.map((campo, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                <label style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)' }}>{campo}</label>
                <input type="number" placeholder="Ingresa valor..." style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', fontSize: '1rem' }} />
              </div>
            ))}
          </div>

          <button style={{ width: '100%', marginTop: '1.5rem', background: 'var(--accent)', color: 'white', padding: '1rem', border: 'none', borderRadius: 'var(--radius-md)', fontSize: '1rem', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}>
            <Play size={18} /> Calcular {activeCalc.resultadoLabel}
          </button>
        </div>
      )}
    </div>
  );
}
