let stringaDiPartenza = "Ho un calendario sulla mia scrivania";
console.log(stringaDiPartenza);
stringaDiPartenza = stringaDiPartenza.toUpperCase();
console.log(stringaDiPartenza);
stringaDiPartenza = stringaDiPartenza.toLowerCase();
console.log(stringaDiPartenza);
stringaDiPartenza = stringaDiPartenza.split(" ");
console.log(stringaDiPartenza);
ris = stringaDiPartenza[3];
console.log(ris);
ris2 = stringaDiPartenza[5];
console.log(ris2);
let unioneStringhe = ris.concat(ris2);
console.log(unioneStringhe);
let classe = ["paolo", "giovanni", "andrea", "chiara", "filippo", "ilenia"];
console.log(classe);
console.log(classe[3]);
let terzoInLista = classe[3];
console.log(terzoInLista);
let lunghezza = terzoInLista.length;
console.log(lunghezza);
let ritirato = classe.pop();
console.log(ritirato);
console.log(classe);
let nuovoArrivato = classe.push("alfredo");
console.log(classe);
let finitoIlCorso = classe.shift();
console.log(classe);
let nuovoPrimoInClassifica = classe.unshift("giovanna");
console.log(classe);
console.log(classe[0]);

function appello() {
  let primoDellaLista = classe[0];
}
console.log(primoDellaLista);
