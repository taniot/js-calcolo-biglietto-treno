'use strict';

//km inseriti dall'utente
const kmRichiesti = Number(
  prompt('Inserisci i km che vuoi percorrere (es. 10.5)')
);

//eta inserita dall'utente
const etaPasseggero = Number(prompt('Inserisci la tua età'));

//prezzo al km
const prezzoKm = 0.21;

/* sconti */
//sconto minorenni
const percentualeScontoMinorenni = 20;
//sconto over 65
const percentualeScontoOver65 = 40;

if (!isNaN(kmRichiesti) && !isNaN(etaPasseggero)) {
  //calcolo prezzo iniziale
  let prezzoBiglietto = prezzoKm * kmRichiesti;
  //sconto iniziale
  let scontoBiglietto = 0;

  if (etaPasseggero < 18) {
    //calcolo sconto under 18
    scontoBiglietto = (prezzoBiglietto / 100) * percentualeScontoMinorenni;
  } else if (etaPasseggero >= 65) {
    //calcolo sconto over 65
    scontoBiglietto = (prezzoBiglietto / 100) * percentualeScontoOver65;
  }

  //calcolo prezzo biglietto comprensivo di sconto
  prezzoBiglietto -= scontoBiglietto;
  console.log('Il prezzo del biglietto è', prezzoBiglietto.toFixed(2));
} else {
  //dati non validi
  console.log('Errore, hai inserito valori non numerici');
}
