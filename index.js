/*1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)*/
const a = 3;
const b = 5;
if (a > b) {
    console.log(a);
} else if (b > a) {
    console.log(b);
} else {
    console.log(a + ' lygu ' + b);
}
console.log('---------------');
/*
2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
*/
for (let i = 1; i <= 10; i++) {
    console.log(i);
    
}
console.log('---------------');
/*
3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
*/
for (let i = 0; i <= 10; i+= 2) {
    console.log(i);
    
}
console.log('---------------');
/*
4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
*/
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
for (let i = 0; i < 5; i++) {
    console.log(rand(1, 10));
}
console.log('---------------');
/*
5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
*/
let i = 0;
while (i !== 5) {
    i = rand(1, 10);
    console.log(i);
    
}
console.log('---------------');
/*
6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
*/
let x = [];
for (let i = 0; i < (rand(20, 30)); i++) {
    x.push(rand(10, 30));
}
let big = x[0];
for (let j = 0; j < x.length; j++) {
    if (x[j] > big) {
        big = x[j];
    }  
}
console.log(x);
console.log(big);
console.log('---------------');
/*
7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
*/
function random() {
    let text = [];
    let possible = 'ABCD';
    for (let i = 0; i < 100; i++) {
      text.push(possible.charAt(Math.floor(Math.random() * possible.length)));
    }
    return text;
}
console.log(random());

let letters = random();

function letterCount(letters) {
    let aa = 0;
    let bb = 0;
    let cc = 0;
    let dd = 0;
    for (let j = 0; j < letters.length; j++) {
        if (letters[j] === 'A') {
            aa += 1;
        } else if (letters[j] === 'B') {
            bb += 1;
        } else if (letters[j] === 'C') {
            cc += 1;
        } else if (letters[j] === 'D') {
            dd += 1;
        }
    }
    return `A = ${aa}, B = ${bb}, C = ${cc}, D = ${dd},`;
}

console.log(letterCount(letters));

console.log('---------------');
/*
8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas). Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
*/
//const arr1 = 3;
//const arr2 = 2;
const arr1 = [1, 2, 14, 6];
const arr2 = [6, 2, 7, 12];
function lygineSuma(arr1, arr2) {
    if (typeof arr1 == 'number' && typeof arr2 == 'number') {
        if ((arr1 + arr2) % 2 === 0) {
            return arr1 + arr2;
        } else {
            return 'suma nelyginė';
        }
    }
    if (Array.isArray(arr1) && Array.isArray(arr2)) {
        if ((arr1.length + arr2.length) % 2 === 0) {
            return arr1.length + arr2.length;
        } else {
        return 'suma nelyginė';
    }
  }
}
  console.log(lygineSuma(arr1, arr2));
  console.log('---------------');
/*
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
*/
function isPrime(num) {
    if (num === 2) {
      return 'pirminis';
    } else if (num > 1) {
      for (let i = 2; i < num; i++) {
        if (num % i !== 0) {
          return 'pirminis';
        } else if (num === i * i) {
          return 'nepirminis';
        } else {
          return 'nepirminis';
        }
      }
    } else {
      return 'nepirminis';
    }
  }
  console.log(isPrime(11));
  console.log('---------------');
/*
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)*/
let params = [];
for (let i = 0; i < 10; i++) {
    params.push(rand(1, 9));
}
console.log(params);
function telefonoNumeris(params) {
   for (let j = 0; j < params.length; j++) {
    return `(${params[0]}${params[1]}${params[2]}) ${params[3]}${params[4]}${params[5]}-${params[6]}${params[7]}${params[8]}${params[9]}`;
   } 
}
console.log(telefonoNumeris(params));
console.log('---------------');
