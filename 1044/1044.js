var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

let a = lines.shift();
let b = lines.shift();

if (a % b == 0) {
  console.log(`Sao Multiplos`);
} else if (b % a == 0) {
  console.log(`Sao Multiplos`);
} else {
  console.log(`Nao sao Multiplos`);
}
