// Forma 1: Aqui usando un Alias a crearDeck
// import { crearDeck as  crearNuevoDeck } from './usecases/crear-deck'

// Forma 2: Exportacion independiente
export { crearDeck } from './crear-deck';

// exporta pedir carta
export { pedirCarta } from './pedir-carta';

// exporta Valor carta
export { valorCarta } from './valor-carta';

// exporta turno de la computadora
export { turnoComputadora } from './turno-computadora';

// exporta Crear carta HTML
export { crearCartaHTML } from './crear-carta-html';
