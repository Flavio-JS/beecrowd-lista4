var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

let a = lines.shift();
let b = lines.shift();
let c = lines.shift();

let delta = Math.pow(b, 2) - 4 * a * c;

if (a == 0 || delta < 0) {
  console.log(`Impossivel calcular`);
} else {
  let r1 = ((-b + Math.sqrt(delta)) / (2 * a)).toFixed(5);

  let r2 = ((-b - Math.sqrt(delta)) / (2 * a)).toFixed(5);

  console.log(`R1 = ${r1}`);
  console.log(`R2 = ${r2}`);
}
