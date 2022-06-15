var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");

let a = parseFloat(lines.shift());
let b = parseFloat(lines.shift());
let c = parseFloat(lines.shift());
let d = parseFloat(lines.shift());

if (b > c) {
  if (d > a) {
    if (c + d > a + b) {
      if (c > 0) {
        if (d > 0) {
          if (a % 2 === 0) {
            console.log("Valores aceitos");
          } else {
            console.log("Valores nao aceitos");
          }
        } else {
          console.log("Valores nao aceitos");
        }
      } else {
        console.log("Valores nao aceitos");
      }
    } else {
      console.log("Valores nao aceitos");
    }
  } else {
    console.log("Valores nao aceitos");
  }
} else {
  console.log("Valores nao aceitos");
}
