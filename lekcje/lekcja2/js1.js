function napis1() {
console.log('Napis w funkcji')

}

napis1();  //wywołanie funkcji, musi byc z nawiasami

napis2()

function napis2() {
    console.log('Funkcja 2'); // zadziała w tej kolejności

    // sprawdzic bo mialo byc dwa razy 
}

var jakasZmienna = napis2  // to jak najbardziej działa, nie możemy wpisac tu z znawiasami bo to jest odpalanie funkcji przy definiowaniu jednoczesnym
jakasZmienna();
console.log(typeof jakasZmienna);


function napis3(){
    return ' napis zwracany z funkcji';
}

var jakasZmienna2= napis3();  //nie działa, sprawdzić

console.log(jakasZmienna2);
console.log(typeof jakasZmienna2);

//kolejny sposób definiowania funkcji

var kolejnaFunkcja = function(){
console.log('tralalala');

}

kolejnaFunkcja();


function dodawanie(x, y){
    return x+y;
}

var wynDodawania = dodawanie(10,20); // działa bo jest return; czyli zwraxcana wartość
console.log(wynDodawania);

var toSamo=dodawanie
console.log(toSamo(30,20));


var wynDodawania2 = dodawanie(10,20,30);
console.log(wynDodawania2);


var wynDodawania3 = dodawanie()
console.log(wynDodawania3);  //NAN