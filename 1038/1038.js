var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

let tabelaDePrecos = [4, 4.5, 5, 2, 1.5];

let codigo = parseInt(lines.shift());
let quantidade = lines.shift();
let total = (tabelaDePrecos[codigo - 1] * quantidade).toFixed(2);

console.log(`Total: R$ ${total}`);
