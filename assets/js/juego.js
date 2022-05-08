/**
 * 
 */

let deck         = [];
const tipos      = ['C','D','H','S'];
const especiales = ['A','J','Q','K'];

const crearDeck = () => {

    for(let i=2; i<=10; i++){
        for (const tipo of tipos) {
            deck.push( i+tipo );
        }
    }
    for (const especial of especiales) {
        for (const tipo of tipos) {
            deck.push( especial+tipo )
        }
    }

    console.log(deck);
    const variable = _.shuffle(deck)
    console.log(variable);
}

crearDeck();

