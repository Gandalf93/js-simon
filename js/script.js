// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.



// faccio un array vuoto, con un ciclo for creo i 5 numeri casuali


var casuali = [];

for (var i = 0; i < 5; i++){
    casuali.push(Math.floor(Math.random() * 100) + 1);

}

alert(casuali);

console.log(casuali);


// funzione che ritarda l'inizio del prompt di 30 secondi

setTimeout(ritarda, 1000, memoria);
var memoria = [];


function ritarda(ar){

     var ar = [];
    for (var i = 0; i < 5; i++){
        var ricordati = parseInt(prompt('scrivi il numero'));
        ar.push(ricordati);
    }
console.log(ar);
}

// adesso devo comparare i numeri dei due array e vedere se corrispondono tra loro. faccio un if e comparo

if(casuali[i] == memoria [i]){
    alert('hai vinto');
}else{
    alert('hai perso');
}



    


