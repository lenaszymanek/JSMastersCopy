let a = 5;
let b = a;

console.log(a,b);

a=20;
console.log(a,b);

//b zostaje w pamięci po staremu

let c = {a: 5};
let d = c;

console.log(c);
console.log(d);

c.a = 7; //zmiana obiektu
//c={m:100} zdefiniowanie obiektu

console.log(c);
console.log(d);

//d jest wskaźnikiem na c, więc zmiana się przenosi, to nie jest ty prymitywny; reference type

c = {a: 7};

console.log(c);
console.log(d);


tab1 = [1,2,3];
tab2=tab1;
console.log(tab1);
console.log(tab2);

tab2.push(4);
console.log(tab1);
console.log(tab2);

//to nie jest tablica tylko refenrecja na tablice

//-------------------global scope i local scope


var aa = 'global';

function funkcja(){
    var aa = 'local scope';
    bb='global scope bo bb bez var', ingeruje w zmienną globalną;
    console.log(aa);
    console.log(bb);
}

funkcja()

console.log(aa);
//'global'
console.log(bb);