export interface AnalisisTributario {
  queRegula: string;
  cuandoAplica: string;
  requisitos: string[];
  incluye: string[];
  excluye: string[];
}

export interface EfectoRLI {
  tipo: 'Agregado' | 'Deducción' | 'Neutro' | 'Especial';
  explicacion: string;
}

export interface DiferenciasPorRegimen {
  '14 A': string;
  '14 D N°3': string;
  '14 D N°8': string;
}

export interface BaseTributaria {
  id: string; 
  tipo: 'articulo' | 'partida';
  titulo: string;
  resumen: string;
  baseLegal: string;
  analisisTributario: AnalisisTributario;
  efectoRLI: EfectoRLI;
  diferenciasPorRegimen: DiferenciasPorRegimen;
  efectoSocios: string;
  ejemploDuoc: string;
  errorFrecuente: string;
  resumenFinal: string;
  
  // Interconexión
  articulosRelacionados?: string[];
  partidasRelacionadas?: string[];
}

export interface CalculadoraMetadata {
  id: string;
  titulo: string;
  descripcion: string;
  advertenciasGenerales: string[];
  // Estructura para que a futuro puedan meter fórmulas. 
  // Por ahora la interfaz solo dicta los campos que se verán
  camposEntrada: string[];
  resultadoLabel: string;
}
