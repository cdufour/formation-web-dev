 // variables
 var n1 = 5; 
 var n2 = 3;
 console.log(n1 + n2);

 // conditions
 if (10 > 9) {
   console.log("10 est sup. à 9")
 }

 // itérations
 for (var i = 0; i < 5; i++) {
   console.log(i);
 }

 // fonctions
 //...




 for (var i = 1; i < 100; i++) {
   // création dynamique de balises
   var p = document.createElement("p");
   p.innerText = "Simple paragraphe " + i;

   if (i > 10) {
     p.className = "citation"
   }

   document.body.appendChild(p);
 }

 // surveillance et réaction
 document
   .getElementsByTagName("h1")[0]
   .addEventListener("click", function() {
     console.log('click sur premier h1');
   })