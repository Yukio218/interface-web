// ------------------------- VARIBALES ------------------------- \\
const maConstante = "Infinie";
let result = 4;
let age = 92;
let nom = "Jamal";
let message = "la variable 'result' est plus grande que 40";
let phrase = `Bonjour les amis,
je m'appel ${nom} et jai ${age} ans`;

let date = new Date();
let datePrecis = new Date(2026, 0, 13, 13, 13);

let monObjet = {
  nom: "Comme JSON",
  age: "999",
};
let monTableau = [1111, 222, 33, 4];

// ------------------------- CONSOLE ------------------------- \\
alert("Alert de ficher externe");
console.log("JE SUIS UN LOG");

console.log(date);
console.log(datePrecis);
console.log("JE SUIS UN LOG");

result = 52;

// --------------- VARIBALES --------------- \\
if (result > 40) {
  console.log(message);
} else {
  result = "je suis result et nest plus un number";
  alert(result);
}
for (let i in monTableau) {
  console.log(monTableau[i], "est un " + typeof monTableau[i]);
}

console.error("une erreur produite...");
