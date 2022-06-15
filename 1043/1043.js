var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());
let area = 0;
let perimetro = 0;

if (Math.abs(b - c) < a && a < b + c) {
  perimetro = a + b + c;
  console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else if (Math.abs(a - c) < b && b < a + c) {
  perimetro = a + b + c;
  console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else if (Math.abs(a - b) < c && c < a + b) {
  perimetro = a + b + c;
  console.log(`Perimetro = ${perimetro.toFixed(1)}`);
} else {
  area = ((a + b) * c) / 2;
  console.log(`Area = ${area.toFixed(1)}`);
}
