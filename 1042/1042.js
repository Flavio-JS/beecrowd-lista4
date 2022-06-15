var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

let valor1 = parseFloat(lines.shift());
let valor2 = parseFloat(lines.shift());
let valor3 = parseFloat(lines.shift());

let menorValor = Math.min(valor1, valor2, valor3);
let maiorValor = Math.max(valor1, valor2, valor3);

let intermediarioValor = 0;

if (menorValor < valor1 && valor1 < maiorValor) {
  intermediarioValor = valor1;
} else if (menorValor < valor2 && valor2 < maiorValor) {
  intermediarioValor = valor2;
} else if (menorValor < valor3 && valor3 < maiorValor) {
  intermediarioValor = valor3;
}

console.log(
  `${menorValor}\n${intermediarioValor}\n${maiorValor}\n\n${valor1}\n${valor2}\n${valor3}`
);
