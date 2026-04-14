import { BaseTributaria } from '../types';

export const partidas: BaseTributaria[] = [
  {
    id: 'partida-gastos-rechazados',
    tipo: 'partida',
    titulo: 'Partida: Gastos Rechazados',
    resumen: 'Análisis del impacto de contabilizar gastos que no cumplen los requisitos del Art. 31.',
    baseLegal: 'Art. 21 y Art. 33 N°1 LIR',
    analisisTributario: {
      queRegula: '[Texto editable por usuario]',
      cuandoAplica: '[Texto editable por usuario]',
      requisitos: ['[Texto editable por usuario]'],
      incluye: ['Multas', 'Intereses penales', 'Gastos de supermercado sin justificación'],
      excluye: ['[Texto editable por usuario]']
    },
    efectoRLI: {
      tipo: 'Agregado',
      explicacion: 'Al ser contabilizados como pérdida disminuyen la utilidad financiera, pero tributariamente no son aceptados por lo que deben reponerse (agregados) a la RLI.'
    },
    diferenciasPorRegimen: {
      '14 A': 'Tributan con un 40% (inciso 1) o 35% (inciso 3) según corresponda.',
      '14 D N°3': '[Texto editable por usuario]',
      '14 D N°8': '[Texto editable por usuario]'
    },
    efectoSocios: '[Texto editable por usuario: Si beneficia al socio, inciso 1...]',
    ejemploDuoc: '[Texto editable por usuario]',
    errorFrecuente: 'Olvidar el reajuste al término del ejercicio (Corrección Monetaria) antes de aplicar el impuesto del Art. 21.',
    resumenFinal: '[Texto editable por usuario]',
    articulosRelacionados: ['art-21', 'art-33']
  },
  {
    id: 'partida-mercaderias',
    tipo: 'partida',
    titulo: 'Cuenta: Mercaderías / Costo de Ventas',
    resumen: 'Tratamiento del valor de adquisición y deducción al momento de la venta de bienes del giro.',
    baseLegal: 'Art. 30 LIR',
    analisisTributario: {
      queRegula: '[Texto editable por usuario]',
      cuandoAplica: '[Texto editable por usuario]',
      requisitos: ['[Texto editable por usuario]'],
      incluye: ['[Texto editable por usuario]'],
      excluye: ['[Texto editable por usuario]']
    },
    efectoRLI: {
      tipo: 'Neutro',
      explicacion: 'Si coincide con el costo tributario es neutro. Se generan ajustes si hay mermas no aceptadas o diferencias de costeo.'
    },
    diferenciasPorRegimen: {
      '14 A': 'Deducción como costo en el ejercicio en que se vendan (Art 30).',
      '14 D N°3': 'Se deduce como gasto el 100% de la existencia en el año que se paga la factura de compra.',
      '14 D N°8': 'Igual al 14 D3, el egreso se reconoce al pagarse.'
    },
    efectoSocios: '[Texto editable por usuario]',
    ejemploDuoc: '[Texto editable por usuario]',
    errorFrecuente: '[Texto editable por usuario]',
    resumenFinal: '[Texto editable por usuario]',
    articulosRelacionados: ['art-30']
  }
];
