//arrays

var arr1 = [1,2,3,4];

console.log(arr1[1]);


//przypisanie nowej wartości zamiast 3
arr1[2] = 100;
console.log(arr1);

//undefined

console.log(arr1[10]);


arr1[10]=30;
console.log(arr1);

//uzuuuuuuuppp



var arr2 = [1,2,3,4,5,6,7];
for(let i=0; i<arr2.length;i++){
    console.log(arr2[i]);
}

//arrow function
arr2.forEach(element => {
    console.log(element);
})

//krótszy zapis anonymous function

arr2.forEach(function(element2) {
    console.log(element2);
})


arr2.push(111);  //dodawnie na końcu
console.log(arr2)

arr2.unshift(222); //dodawnaie na poczatku
console.log(arr2)


arr2.pop()  //zdejmuje na końcu
console.log(arr2)

arr2.shift() // zdejmuje na początku
console.log(arr2)


//podmiana wartości, pierwsze wystapienie wartości-> adres i podmienia; liczy od 1
arr2[arr2.indexOf(2)]=300;
console.log(arr2);

arr2[arr2.indexOf(222)]=555;
console.log(arr2);


//spilce dzieli tablicę na częsci, od i-tego elementu włącznie, od 3go indeksu

var arr3 = [10,20,30,40,50,60,70,80];
var newArr = arr3.splice(3);
console.log('arr3', arr3);
console.log('newArr', newArr);

//slice starą tabloice zostawia bez zmian od do <...), po indeksach czyli z zerem 
var arr3 = [10,20,30,40,50,60,70,80];
var newArr2 = arr3.slice(2,4);
console.log('arr3', arr3);
console.log('newArr2', newArr2);

