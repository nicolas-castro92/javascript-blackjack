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
    deck = _.shuffle(deck)
    console.log(deck);
    return deck;
}

crearDeck();

const pedirCarta = () => {

    if( deck.length === 0 ){
        throw 'No hay mas cartas en la baraja';
    }

    const carta = deck.pop();
    console.log(carta);
    console.log(deck);

    return carta;
}
//let valoresAceptados = pedirCarta().replace(/\D/g,'');
pedirCarta();

const valorCarta = (carta) => {
    
    const valor = carta.substring(0,carta.length-1);
    
    return ( isNaN(valor) ) ? 
            ( valor==='A' ) ? 11 : 10 
            : valor * 1 ;

    /* let puntos  = 0;
    console.log('dime'+valor);

    if( isNaN(valor) ){
        puntos = (valor==='A') ? 11 : 10;
        console.log(puntos);
    }else{
        puntos = valor*1;
        console.log(puntos);
    } */

}

const resultado = valorCarta(pedirCarta());
console.log({resultado});