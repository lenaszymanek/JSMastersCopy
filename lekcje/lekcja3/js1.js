var condition = true;
if (condition) {
  console.log("dzialam");
} else {
  console.log("nie dzialam");
}

var condition2 = null; //0, '',NAN, null  - nie dziala; 1,2, -1, ''cos' - dziala
if (condition2) {
  console.log("dzialam");
} else {
  console.log("nie dzialam");
}

console.log(1 == true); //true
console.log(2 == true); //false, inaczej niż w if
console.log(1 === true); ///false, bo tez typ sprawdza

var numer = 5;

switch (numer) {
  case 1:
    console.log("jeden");
    break;
  case 5:
    console.log("pięć");
    break;
  default:
    console.log('default');
    break;  
}


// ************* loop

for(let i = 0; i < 10; i++){
    console.log(i);
}
//let definiuje zmienną lokalna, a var globalną



// for(;;){
//   console.log('cos' + zmienna) //pętla nieskonczona
//   zmienna++
//   if (zmienna ===7) { //przerwanie zrobione
//     break;
//   }
// }

// for(let i =0; i<7; i++){
//   if(i===3){
//     continue;
//   }
//   console.log('i = ' + i);
// }


//Jacek

//break przerywa mała pętle, bo w niej jest

// for(let i =0; i<5; i++){

// }


var tab =  [1,2,3,10,'333','napis'];

for(let i=0; i<tab.length; i++){
  console.log(tab[i]);
}


let z =0;
while(z<5){
  console.log('z = ' + z)
  z++;
}

while(true){
  console.log('z2= ' +z);
  if (z===10) {
    break
  }
  z++
}

// pętla, gdy wykonaj chociaz raz, nawet jak nie jest skończony
do{
  console.log('wykonany');

}while(z>1500);