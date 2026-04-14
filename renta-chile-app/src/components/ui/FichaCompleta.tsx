import { BaseTributaria } from '../../types';
import { Accordion } from './Accordion';
import { Semaphore } from './Semaphore';
import { Link } from 'react-router-dom';
import { AlertCircle, FileText, CheckCircle, Repeat } from 'lucide-react';

interface FichaProps {
  data: BaseTributaria;
}

export function FichaCompleta({ data }: FichaProps) {
  const getSemaforoStatus = (tipo: string) => {
    switch(tipo) {
      case 'Agregado': return 'rojo';
      case 'Deducción': return 'verde';
      case 'Neutro': return 'neutro';
      default: return 'amarillo';
    }
  };

  return (
    <div className="card" style={{ padding: '0' }}>
      {/* Header */}
      <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--primary)', color: 'white', borderTopLeftRadius: 'var(--radius-lg)', borderTopRightRadius: 'var(--radius-lg)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: '#cbd5e1' }}>{data.tipo}</span>
            <h2 style={{ color: 'white', margin: '0.25rem 0' }}>{data.titulo}</h2>
            <p style={{ margin: 0, opacity: 0.9 }}>{data.baseLegal}</p>
          </div>
          <Semaphore status={getSemaforoStatus(data.efectoRLI.tipo)} label={data.efectoRLI.tipo} />
        </div>
      </div>

      <div style={{ padding: '1.5rem' }}>
        {/* Resumen Ráptio */}
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>{data.resumen}</p>
        
        {/* Acordeones Dinámicos */}
        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          
          <Accordion title="Análisis Tributario" defaultOpen={true}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
              <div><strong>¿Qué regula?:</strong> {data.analisisTributario.queRegula}</div>
              <div><strong>¿Cuándo aplica?:</strong> {data.analisisTributario.cuandoAplica}</div>
              <div>
                <strong>Requisitos:</strong>
                <ul>
                  {data.analisisTributario.requisitos.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <div style={{flex: 1, padding: '1rem', background: '#ecfdf5', borderRadius: '4px'}}>
                   <h4 style={{color: '#059669', margin: '0 0 0.5rem 0'}}>Incluye</h4>
                   <ul style={{margin:0, paddingLeft:'1.2rem', color: '#047857'}}>
                     {data.analisisTributario.incluye.map((i, idx) => <li key={idx}>{i}</li>)}
                   </ul>
                </div>
                <div style={{flex: 1, padding: '1rem', background: '#fef2f2', borderRadius: '4px'}}>
                   <h4 style={{color: '#dc2626', margin: '0 0 0.5rem 0'}}>Excluye</h4>
                   <ul style={{margin:0, paddingLeft:'1.2rem', color: '#b91c1c'}}>
                     {data.analisisTributario.excluye.map((e, idx) => <li key={idx}>{e}</li>)}
                   </ul>
                </div>
              </div>
            </div>
          </Accordion>

          <Accordion title={`Efecto RLI: ${data.efectoRLI.tipo}`}>
            <p>{data.efectoRLI.explicacion}</p>
          </Accordion>

          <Accordion title="Diferencias por Régimen">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ borderLeft: '3px solid var(--accent)', paddingLeft: '1rem' }}>
                <strong>14 A: </strong> {data.diferenciasPorRegimen['14 A']}
              </div>
              <div style={{ borderLeft: '3px solid #10b981', paddingLeft: '1rem' }}>
                <strong>14 D N°3: </strong> {data.diferenciasPorRegimen['14 D N°3']}
              </div>
              <div style={{ borderLeft: '3px solid #f59e0b', paddingLeft: '1rem' }}>
                <strong>14 D N°8: </strong> {data.diferenciasPorRegimen['14 D N°8']}
              </div>
            </div>
          </Accordion>

          <Accordion title="Efecto Final en Socios">
            <p>{data.efectoSocios}</p>
          </Accordion>

          <Accordion title="Ejemplo Práctico & Error Frecuente">
            <div style={{ background: '#f8fafc', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>
              <strong><FileText size={16} style={{display:'inline', verticalAlign:'text-bottom'}}/> Ejemplo tipo Duoc:</strong>
              <p style={{marginTop: '0.5rem'}}>{data.ejemploDuoc}</p>
            </div>
            <div style={{ background: '#fffbeb', padding: '1rem', borderRadius: '4px', borderLeft: '4px solid #f59e0b' }}>
              <strong><AlertCircle size={16} style={{display:'inline', verticalAlign:'text-bottom', color:'#d97706'}}/> Error Frecuente:</strong>
              <p style={{marginTop: '0.5rem'}}>{data.errorFrecuente}</p>
            </div>
          </Accordion>
        </div>

        {/* Interconexiones */}
        {((data.articulosRelacionados && data.articulosRelacionados.length > 0) || (data.partidasRelacionadas && data.partidasRelacionadas.length > 0)) && (
          <div style={{ marginTop: '2rem', padding: '1.5rem', background: '#f1f5f9', borderRadius: 'var(--radius-md)' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize:'1.1rem' }}><Repeat size={18}/> Módulos Relacionados</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              {data.articulosRelacionados?.map(art => (
                <Link key={art} to={`/articulos/${art}`} className="badge-link badge-articulo">Ver {art}</Link>
              ))}
              {data.partidasRelacionadas?.map(part => (
                <Link key={part} to={`/partidas/${part}`} className="badge-link badge-partida">Ver {part.replace('partida-', '')}</Link>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Footer Resumen Final */}
      <div style={{ padding: '1rem 1.5rem', background: '#e0f2fe', color: '#0369a1', borderBottomLeftRadius: 'var(--radius-lg)', borderBottomRightRadius: 'var(--radius-lg)', display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <CheckCircle size={24} />
        <p style={{ margin: 0 }}><strong>Conclusión:</strong> {data.resumenFinal}</p>
      </div>
    </div>
  );
}

// Estilos adicionales para Ficha
const styleNode = document.createElement('style');
styleNode.innerHTML = `
.badge-link {
  padding: 0.35rem 0.75rem;
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s;
}
.badge-articulo { background: #dbeafe; color: #1e40af; border: 1px solid #bfdbfe; }
.badge-articulo:hover { background: #bfdbfe; }
.badge-partida { background: #f3e8ff; color: #6b21a8; border: 1px solid #e9d5ff; }
.badge-partida:hover { background: #e9d5ff; }
`;
document.head.appendChild(styleNode);
