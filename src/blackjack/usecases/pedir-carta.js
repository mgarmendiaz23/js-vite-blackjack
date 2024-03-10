
// Usamos JSDOC para documentar
/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deck Es un arreglo de cartas / strings
 * @returns {string} Retorna la carta del Deck
 */
export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }

    const carta = deck.pop();
    return carta;

}