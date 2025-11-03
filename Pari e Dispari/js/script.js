// Esercizio 2 //
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer 
// (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari 
// o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// Esecuzione logica
// Creazione della variabile e chiedere al utente 

let sceltaUtente = prompt("Ciao, sceglie tra pari e dispari");
let numeroUtente = parseInt(prompt("Adesso, sceglie un numero da 1 a 5"));

// si sceglie un numero pari o dispari
// Creazione del numero random con funzione (1-5)
function generateRandomNumber () {
    const generateRandomNumber = Math.floor(Math.random() * 5) + 1;
    return generateRandomNumber;
}
const numeroComputer = generateRandomNumber();
console.log(`Il computer ha scelto: ${numeroComputer}`);

// Funzione di somma
function somma(num1, num2) {
    return num1 + num2;
}

const totale = somma(numeroUtente, numeroComputer);
console.log(`La somma è: ${totale}`);

// Funzione per determinare se un numero è pari o dispari
function pariDispari (num) {
    let result;
    if(num % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari";
    }
    return result;
}

const risultato = pariDispari(totale);
console.log(`La somma è ${risultato}`);





