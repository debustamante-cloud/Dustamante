import { BaseTributaria } from '../types';

export const articles: BaseTributaria[] = [
  {
    id: 'art-21',
    tipo: 'articulo',
    titulo: 'Artículo 21: Gastos Rechazados',
    resumen: 'Regula el tratamiento de los gastos que no son aceptados tributariamente.',
    baseLegal: 'Art. 21 LIR',
    analisisTributario: {
      queRegula: '[Texto editable por usuario: Qué regula este artículo]',
      cuandoAplica: '[Texto editable por usuario: Cuándo aplica]',
      requisitos: ['[Requisito 1]', '[Requisito 2]'],
      incluye: ['[Incluye 1]'],
      excluye: ['[Excluye 1]']
    },
    efectoRLI: {
      tipo: 'Agregado',
      explicacion: '[Texto editable por usuario: Por qué se agrega o deduce]'
    },
    diferenciasPorRegimen: {
      '14 A': '[Texto editable por usuario: Tratamiento en 14 A]',
      '14 D N°3': '[Texto editable por usuario: Tratamiento en 14 D N°3]',
      '14 D N°8': '[Texto editable por usuario: Tratamiento en 14 D N°8]'
    },
    efectoSocios: '[Texto editable por usuario: Efecto final en los socios]',
    ejemploDuoc: '[Texto editable por usuario: Ejemplo práctico tipo Duoc]',
    errorFrecuente: '[Texto editable por usuario: Error común cometido por estudiantes]',
    resumenFinal: '[Texto editable por usuario: Resumen final de cierre]',
    partidasRelacionadas: ['partida-gastos-rechazados', 'partida-remuneraciones']
  },
  // Agregar más mock articles...
  {
    id: 'art-31',
    tipo: 'articulo',
    titulo: 'Artículo 31: Gastos Aceptados',
    resumen: 'Establece los requisitos generales y específicos para que un gasto sea deducible de los ingresos brutos.',
    baseLegal: 'Art. 31 incisos 1 al 4 LIR',
    analisisTributario: {
      queRegula: '[Texto editable por usuario]',
      cuandoAplica: '[Texto editable por usuario]',
      requisitos: ['Necesarios para producir la renta', 'No rebajados como costo', 'Pagados o adeudados'],
      incluye: ['[Texto editable por usuario]'],
      excluye: ['[Texto editable por usuario]']
    },
    efectoRLI: {
      tipo: 'Deducción',
      explicacion: '[Texto editable por usuario]'
    },
    diferenciasPorRegimen: {
      '14 A': '[Texto editable por usuario]',
      '14 D N°3': 'Tienen que estar pagados para ser aceptados.',
      '14 D N°8': '[Texto editable por usuario]'
    },
    efectoSocios: '[Texto editable por usuario]',
    ejemploDuoc: '[Texto editable por usuario]',
    errorFrecuente: '[Texto editable por usuario]',
    resumenFinal: '[Texto editable por usuario]',
    partidasRelacionadas: ['partida-honorarios', 'partida-intereses', 'partida-remuneraciones']
  }
];
