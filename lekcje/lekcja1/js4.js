var x =1;
var y = true;

console.log('Wynik: ' + x); // x jest stringiem, doklejanie tekstu, automatycznie konwertuje
console.log('Wynik2:', x); // x jest numeryczny

console.log('czy prawda', y);

console.log(typeof y);

var tablica = [1, 2, 'aaaaa'];  

console.log(tablica);
console.log(tablica[1]);  //element tablica, numeruje się od zera

//console.log(z); //is not definedi sie zatrzymuje
console.log(tablica[100]); //undefined

console.log(typeof tablica[100]);  //wysiwtla string 'undefined'

var j = NaN;  //not a number
console.log(typeof j);   // jest number :)

var k = null; //typ object
console.log(typeof k);

console.log(null==undefined); //true, bo sprawdza wynik operacji a obydwa sa puste
console.log(null===undefined); //false, sprawdza wynik i typ zmiennych


var obiekt = {
    imie: 'Jacek',
    nazwisko: 'Sen',
    wiek: 111
}
console.log(obiekt);

console.log(obiekt.nazwisko);