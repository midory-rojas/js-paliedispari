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
// 1. Creazione della variabile e chiedere al utente
// si sceglie un numero pari o dispari

let sceltaUtente = prompt("Ciao, sceglie tra pari e dispari");
let numeroUtente = parseInt(prompt("Adesso, sceglie un numero da 1 a 5"));

// 2. Creazione del numero random con funzione (1-5)
function generateRandomNumber () {
    const generateRandomNumber = Math.floor(Math.random() * 5) + 1;
    return generateRandomNumber;
}
const numeroComputer = generateRandomNumber();
console.log(`Il computer ha scelto: ${numeroComputer}`);

// 3. Funzione di somma con i due numeri (numero del utente) + (numero random generato per il computer)
function somma(num1, num2) {
    return num1 + num2;
}

const totale = somma(numeroUtente, numeroComputer);
console.log(`La somma è: ${totale}`);

// 4. Funzione per determinare se un numero è pari o dispari
function pariDispari (num) {
    let result;
    if(num % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari";
    }
    return result;
}

// 5. Determiniamo se la somma è pari o dispari (usando la funzione)
const risultato = pariDispari(totale);
console.log(`La somma è ${risultato}`);

// 6. Dichiaramo chi ha vinto
// Se risultato (pari o dispari) che è uscita da la somma dei due numeri (numeroUtente + numeroComputer)
// è uguale alla parola che ha scelto l'utente, allora Utente ha vinto
// Altrimenti, utente ha perso

if (risultato === sceltaUtente) {
    console.log("Hai vinto");
} else {
    console.log("Hai perso");
}







