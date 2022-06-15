var input = require("fs").readFileSync("stdin", "utf8");
var lines = input.split(" ");
var linesQuebraLinha = input.split("\n");

let n1 = parseFloat(lines.shift());
let n2 = parseFloat(lines.shift());
let n3 = parseFloat(lines.shift());
let n4 = parseFloat(lines.shift());
let n5 = parseFloat(linesQuebraLinha[1]);

let media = parseFloat((n1 * 2 + n2 * 3 + n3 * 4 + n4) / 10);

if (media >= 7) {
  console.log(`Media: ${media.toFixed(1)}`);
  console.log(`Aluno aprovado.`);
} else if (media < 5) {
  console.log(`Media: ${media.toFixed(1)}`);
  console.log(`Aluno reprovado.`);
} else {
  console.log(`Media: ${media.toFixed(1)}`);
  console.log(`Aluno em exame.`);
  console.log(`Nota do exame: ${n5.toFixed(1)}`);

  let mediaFinal = 0;

  media = parseFloat(media);
  n5 = parseFloat(n5);

  mediaFinal = (media + n5) / 2;

  if (mediaFinal < 5) {
    console.log(`Aluno reprovado.`);
    console.log(`Media final: ${mediaFinal.toFixed(1)}`);
  } else {
    console.log(`Aluno aprovado.`);
    console.log(`Media final: ${mediaFinal.toFixed(1)}`);
  }
}
