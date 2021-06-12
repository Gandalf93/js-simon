// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

var casuali = [];

   for (var i = 0; i < 5; i++) {
    var n =  Math.floor(Math.random() *100) + 1;
    var check = casuali.includes(n);
  
  if(check === false) {
    casuali.push(n);
  } else {
    while(check === true){
      n = Math.floor(Math.random() * 100) + 1;
      check = casuali.includes(n);
        if(check === false){
          casuali.push(n);
        }
      }
    }
  }
     

console.log(casuali);
alert(casuali);



setTimeout(ritarda, 1000);

function ritarda(){

   var memoria = [];

   for (var i = 1; i <= 5; i++){
       var ricordati = parseInt(prompt('scrivi il numero' + ' ' + i));
       if(casuali.includes(ricordati)){
        memoria.push(ricordati);
    }
 }

 
 alert('ne hai indovinati  '+ ' ' + memoria.length + ' ' + 'I numeri sono: ' + ' ' + memoria + '  -  ' + 'i numeri del computer sono: ' + casuali);
 
}
        
//BONUS controllare che i numeri generati casualmente siano univoci (non ci siano doppioni) ed anche i numeri che l'utente inserisce non devono già essere stati scritti precedentemente.
       












       

   
    







      








    


