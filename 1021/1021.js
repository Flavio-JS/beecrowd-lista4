var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split("\n");

let dinheiroTotal = parseFloat(lines.shift());

let dinheiroInteiro = Math.floor(dinheiroTotal);
let centavos = (dinheiroTotal - dinheiroInteiro) * 100;

let cem = dinheiroInteiro / 100 - (dinheiroInteiro % 100) / 100;
let restoCem = dinheiroInteiro % 100;

let cinquenta = restoCem / 50 - (restoCem % 50) / 50;
let restoCinquenta = restoCem % 50;

let vinte = restoCinquenta / 20 - (restoCinquenta % 20) / 20;
let restoVinte = restoCinquenta % 20;

let dez = restoVinte / 10 - (restoVinte % 10) / 10;
let restoDez = restoVinte % 10;

let cinco = restoDez / 5 - (restoDez % 5) / 5;
let restoCinco = restoDez % 5;

let dois = restoCinco / 2 - (restoCinco % 2) / 2;
let restoDois = restoCinco % 2;

let um = parseFloat(restoDois);

let cinquentaCentavos = centavos / 50 - (centavos % 50) / 50;
let restoCinquentaCentavos = centavos % 50;

let vinteCincoCentavos =
  restoCinquentaCentavos / 25 - (restoCinquentaCentavos % 25) / 25;
let restoVinteCincoCentavos = restoCinquentaCentavos % 25;

let dezCentavos =
  restoVinteCincoCentavos / 10 - (restoVinteCincoCentavos % 10) / 10;
let restoDezCentavos = restoVinteCincoCentavos % 10;

let cincoCentavos = restoDezCentavos / 5 - (restoDezCentavos % 5) / 5;
let restoCincoCentavos = restoDezCentavos % 5;

let umCentavo = parseFloat(restoCincoCentavos);

console.log(`NOTAS:`);
console.log(cem.toFixed(0) + " nota(s) de R$ 100.00");
console.log(cinquenta.toFixed(0) + " nota(s) de R$ 50.00");
console.log(vinte.toFixed(0) + " nota(s) de R$ 20.00");
console.log(dez.toFixed(0) + " nota(s) de R$ 10.00");
console.log(cinco.toFixed(0) + " nota(s) de R$ 5.00");
console.log(dois.toFixed(0) + " nota(s) de R$ 2.00");
console.log(`MOEDAS:`);
console.log(um.toFixed(0) + " moeda(s) de R$ 1.00");
console.log(cinquentaCentavos.toFixed(0) + " moeda(s) de R$ 0.50");
console.log(vinteCincoCentavos.toFixed(0) + " moeda(s) de R$ 0.25");
console.log(dezCentavos.toFixed(0) + " moeda(s) de R$ 0.10");
console.log(cincoCentavos.toFixed(0) + " moeda(s) de R$ 0.05");
console.log(umCentavo.toFixed(0) + " moeda(s) de R$ 0.01");
