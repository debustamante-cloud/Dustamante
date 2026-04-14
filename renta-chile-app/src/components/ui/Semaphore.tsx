interface SemaphoreProps {
  status: 'verde' | 'rojo' | 'amarillo' | 'neutro';
  label?: string;
}

export function Semaphore({ status, label }: SemaphoreProps) {
  const colors = {
    verde: 'var(--semaforo-verde)',
    rojo: 'var(--semaforo-rojo)',
    amarillo: 'var(--semaforo-amarillo)',
    neutro: 'var(--semaforo-neutro)'
  };

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#f1f5f9', padding: '0.25rem 0.5rem', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 600 }}>
      <div 
        style={{ 
          width: '12px', height: '12px', borderRadius: '50%',
          backgroundColor: colors[status] 
        }} 
      />
      <span style={{color: 'var(--text-secondary)'}}>{label || status.toUpperCase()}</span>
    </div>
  );
}
