var samochod = 'Toyota';
var person = {
    name: 'Jacek',
    age: 46,
    adres:{
        ulica :'Nagietkowa',
        numer:58,
        kod:'81-589'
    },
    hobbies:['motór','podróże'],
    greet: function(){
        console.log('Mam na imię:' + this.name);  //this - odnosi się do obiektu na ktorym pracujemy
        
    },
    samochod: function(){
        console.log('Moj samochod to:' + samochod);    
    }

};

console.log(person);
person.greet();
person.samochod();


person.name = 'Rima';
person.greet();

//innsy sposón towrzenia obiektów

var anotherPerson = new Object();
anotherPerson.imie = 'Maja'
anotherPerson.nazwisko = 'Sen';
console.log(anotherPerson);

//kazdy obiekt tworzony dziedziczy po obiekcie Obiekt, można je overwrite

//trzeci sposób tworzenia obiektow

var kolejnaosoba = Object.create(null);  //obiekt bez __prototype

kolejnaosoba.imie='Tigran';
kolejnaosoba.nazwisko='Sen';
console.log(kolejnaosoba);


//myk z __prototype

var osoba3 = Object.create(person);
console.log(osoba3);
console.log(osoba3.name);





