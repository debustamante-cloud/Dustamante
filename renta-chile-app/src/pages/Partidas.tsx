import { partidas } from '../data/partidas';
import { FichaCompleta } from '../components/ui/FichaCompleta';

export function Partidas() {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h2>Estudio por Partida o Cuenta</h2>
        <p>Análisis tributario de las cuentas contables más complejas y recurrentes.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {partidas.map(partida => (
          <FichaCompleta key={partida.id} data={partida} />
        ))}
      </div>
    </div>
  );
}
