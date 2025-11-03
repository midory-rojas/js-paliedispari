// Esercizio 1 //

// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma 
// (NON usare split, reverse e join)


// 1. Chiedamo al utente di inserire una parola, usiamo prompt
// 2. Creiamo la funzione per verificare si la parola è palidroma
// parametro: parola che l'utente inserisce
// return: stringa, La parola è palindroma o La parola non è palindroma
// Dobbiamo ciclare il ciclo FOR per confrontare la parola con la sua versione 
// al contrario 

const parolaUtente = prompt("Ciao, inserisce una parola");

function isPalidroma(parola) {
    
let parolaInversa = "";
    for (let i = parola.length - 1; i >= 0; i--) {
        parolaInversa = parolaInversa + parola[i];    
    }
    if (parola === parolaInversa) {
        return  "La parola è palindroma";
    } else {
        return  "La parola non è palindroma";
    }
} 
const risultato = isPalidroma(parolaUtente);
console.log (risultato);