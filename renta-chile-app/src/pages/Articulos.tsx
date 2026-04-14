import { articles } from '../data/articles';
import { FichaCompleta } from '../components/ui/FichaCompleta';

export function Articulos() {
  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <h2>Estudio por Artículo</h2>
        <p>Selecciona un artículo para ver su análisis detallado basado en la LIR.</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {articles.map(art => (
          <FichaCompleta key={art.id} data={art} />
        ))}
      </div>
    </div>
  );
}
