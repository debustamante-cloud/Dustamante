export const learningPathBlocks = [
  {
    blockName: 'Construcción de la RLI',
    steps: [
      { id: 'lp-1', title: 'Concepto de Renta', description: 'Reconocimiento básico de todo incremento de patrimonio según Art. 2 y no renta según Art. 17.', route: '/articulos' },
      { id: 'lp-2', title: 'Ingresos Brutos', description: 'Reconocimiento de los ingresos del giro y otros ingresos tributables (Art. 29).', route: '/articulos' },
      { id: 'lp-3', title: 'Costos Directos', description: 'Deducción del costo de ventas o prestación de servicios (Art. 30).', route: '/articulos' },
      { id: 'lp-4', title: 'Gastos Necesarios', description: 'Deducción de desembolsos necesarios para producir la renta con sus requisitos (Art. 31).', route: '/articulos' },
      { id: 'lp-5', title: 'Ajustes RLI', description: 'Conciliación: Agregados (ej. Gastos Rechazados) y deducciones a la base financiera (Art. 33).', route: '/articulos' },
      { id: 'lp-6', title: 'Renta Líquida Imponible', description: 'Determinación de la base tributaria final de la empresa libre de ajustes financieros.' }
    ]
  },
  {
    blockName: 'Tributación de la Empresa',
    steps: [
      { id: 'lp-7', title: 'Impuesto de Primera Categoría (IDPC)', description: 'Aplicación de la tasa de impuesto corporativo (10%, 25% o 27%) sobre la RLI obtenida.' }
    ]
  },
  {
    blockName: 'Sistema de Regímenes',
    steps: [
      { id: 'lp-8', title: 'Clasificación de Régimen', description: 'Elegir el camino 14 A, 14 D3 o 14 D8, determinando los registros empresariales y obligaciones contables.', route: '/regimenes' }
    ]
  },
  {
    blockName: 'Integración con Socios',
    steps: [
      { id: 'lp-9', title: 'Retiros, Dividendos o Atribución', description: 'Distribución o reconocimiento del flujo de riqueza hacia los dueños patrimoniales o naturales.' },
      { id: 'lp-10', title: 'Tributación Final', description: 'Impacto en el Impuesto Global Complementario (IGC) o Adicional (IA) de los dueños, con el uso de créditos y restitución si aplica.' }
    ]
  }
];
