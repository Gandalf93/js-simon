// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var casuali = [];

for (var i = 0; i < 5; i++){
    casuali.push(Math.floor(Math.random() * 100) + 1);
}

alert(casuali);

console.log(casuali);

setTimeout(ritarda, 1000);

function ritarda(){

   var memoria = [];

   for (var i = 0; i < 5; i++){
       var ricordati = parseInt(prompt('scrivi il numero'));
       if(casuali.includes(ricordati)){
        memoria.push(ricordati);
    }
 }
 alert('ne hai indovinati'+ ' ' + memoria.length + ' ' + 'I numeri sono' + ' ' + memoria);
 console.log(memoria);
}
        

       










       

   
    







      








    


