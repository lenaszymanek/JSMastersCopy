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
        console.log('Hello');

    },
    "99tt": 'wartość'  //jeżeli zaczyna się od wartpści to w podwójnych uszach

};

//obiekty : nazwa : wartość


console.log(person);

person.greet();   //funkcja zdefiniowana w obiekcie, tak ją wywołujemy
console.log(person.name)
console.log(person.hobbies[0]);
console.log(person.adres.ulica);


