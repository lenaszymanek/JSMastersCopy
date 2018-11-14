let a =5;
let b = 10;

a += b;

//16

a++;
let c = 'tekst'

c+=a
//tekst


let e = true;

console.log(e+c);

//truetekst

let f = [1,2];
let g = 'napis';

console.log(f+g);

let h = true;
let i = true;

console.log(h+i);
//

let j = 12;
let k = null;

console.log(j+k);
//?

let l = undefined;
let m = 100;

console.log(l+m);

//nie radzi sobie

let n = 'tekst 1'
let o = 'teskt 2'
console.log(n+o);

//nie

let p = 12;
let r ='1';
console.log(p-r);
//11

r--;

console.log(r);

a=1.3;
b=2;

console.log(a*b);

a=1.3;
b=2.2;

console.log(a*b);

//błędnie liczy js liczby mzienno przecinkowe

console.log(Number((a*b).toFixed(2)));

//skrócenie i konwersja na numer


a=2;
b='tekst'
console.log(a*b);
// NaN mnożenie przez tekst Not a number




a = 2;
b = null;

console.log(a*b);
//0



a=12;
b=2;
a/=b;
console.log(a);
//6

a=12;
b='2';
a/=b;
console.log(a);
//6;


a = 3.3;
b = 2.2;
console.log(a/b);
//1.49999 błąd js


a=10;
b=3;
console.log(a%b);


a=10;
b=Infinity;

console.log(a/b);

//0  WOW


console.log(1===1);
//true

console.log(1==='1');
//false

console.log(1=='1');
//true

console.log(NaN == NaN);
//false, nanów nie wolno porównywać; robic is NaN

console.log(Infinity==Infinity);
//true

console.log(0==null);
//false; nie można prównywać nulli, ale null z nullem tak

console.log(null==null);
//true

console.log(null==undefined);
//true; jesus


console.log('----------------');

if(1==1 && 2==2){
    console.log('true');
}

//true



console.log((1==1)||(2==3));
//true, OR

console.log((1==1)|| (2==3) && (4 == 3));
//true, najpierw &&

let isTrue = true;
console.log(!isTrue);
//false, zaprzeczenie


a=5;
b=5;

console.log(a==b ? 'Równe': 'Nie równe');
// szybki IF, jeżeli to





















