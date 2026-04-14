import { regimes } from '../data/regimes';

export function Regimenes() {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h2>Estudio por Régimen</h2>
        <p>Comparativa de los 3 regímenes tributarios vigentes para empresas en Chile.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {regimes.map(reg => (
          <div key={reg.id} className="card" style={{ borderLeft: '4px solid var(--primary)' }}>
            <h3>{reg.nombre}</h3>
            <p><strong>Descripción:</strong> {reg.descripcion}</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginTop: '1rem', padding: '1rem', background: '#f8fafc', borderRadius: '4px' }}>
              <div>
                <strong style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Tasa IDPC</strong>
                {reg.tasaIDPC}
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Base Imponible</strong>
                {reg.baseImponible}
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Registros Empresariales</strong>
                {reg.registrosEmpresariales}
              </div>
              <div>
                <strong style={{ display: 'block', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase' }}>Tributación Socios</strong>
                {reg.tributacionSocios}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
