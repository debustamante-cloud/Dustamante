import { CalculadoraMetadata } from '../types';

export const calculators: CalculadoraMetadata[] = [
  {
    id: '14e',
    titulo: 'Incentivo al Ahorro (Art 14 E)',
    descripcion: 'Determina el monto máximo a deducir de la RLI por concepto de inversión de utilidades (tope 50% RLI o 5.000 UF).',
    advertenciasGenerales: [
      'Debe estar pagado o invertido efectivamente.',
      'Tope de 5.000 UF se ajusta proporcionalmente a los meses del ejercicio.'
    ],
    camposEntrada: [
      'Ingresos del giro',
      'RLI (antes del 14 E)',
      'Retiros del ejercicio'
    ],
    resultadoLabel: 'Deducción Aceptada por Art 14 E'
  },
  {
    id: '33bis',
    titulo: 'Crédito Activo Fijo (Art 33 bis)',
    descripcion: 'Calcula el crédito del 4% o 6% sobre la inversión en Activo Fijo Inmovilizado.',
    advertenciasGenerales: [
      'No aplica para bienes que puedan ser deducidos como gasto en 1 año.',
      'Debe ser un bien nuevo o terminado de construir en el ejercicio.'
    ],
    camposEntrada: [
      'Valor de Adquisición',
      'Corrección Monetaria'
    ],
    resultadoLabel: 'Crédito contra IDPC'
  }
];
