export interface RegimenInfo {
  id: string;
  nombre: string;
  descripcion: string;
  tasaIDPC: string;
  baseImponible: string;
  registrosEmpresariales: string;
  tributacionSocios: string;
}

export const regimes: RegimenInfo[] = [
  {
    id: '14A',
    nombre: '14 A - Régimen Parcialmente Integrado',
    descripcion: '[Texto editable por usuario: Descripción general del 14A]',
    tasaIDPC: '27%',
    baseImponible: 'Determinada sobre la base de Balance General (Contabilidad Completa) más ajustes del Art 33 (Agregados y Deducciones).',
    registrosEmpresariales: 'Obligatorios: RAI, DDAN, REX, SAC.',
    tributacionSocios: 'Tributan en base a retiros con restitución del 35% del crédito (tasa efectiva final 44.45%).',
  },
  {
    id: '14D3',
    nombre: '14 D N°3 - Régimen Pro Pyme General',
    descripcion: '[Texto editable por usuario: Descripción general del D3]',
    tasaIDPC: '10% (transitorio) / 25% (permanente)',
    baseImponible: 'Ingresos Percibidos menos Egresos Pagados.',
    registrosEmpresariales: 'Solo si tiene rentas exentas o ingresos no renta está obligado a llevar REX.',
    tributacionSocios: 'Tributan en base a retiros. Crédito por IDPC integrado al 100% (sin restitución).',
  },
  {
    id: '14D8',
    nombre: '14 D N°8 - Régimen Pro Pyme Transparente',
    descripcion: '[Texto editable por usuario: Descripción general del D8]',
    tasaIDPC: '0%',
    baseImponible: 'Ingresos Percibidos menos Egresos Pagados.',
    registrosEmpresariales: 'Liberado.',
    tributacionSocios: 'Se atribuye la base imponible determinada a los socios según su % de participación a final de año (tributan independientemente si retiran o no). Crédito CPeS.',
  }
]
