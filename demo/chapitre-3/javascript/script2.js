// ------------------------- VARIBALES ------------------------- \\

/*for (let multiple = 0; multiple <= 500; multiple + 10) {
  if (multiple != 0) {
    console.log("ex03", multiple);
  }
}

let nombre = 0;

if (nombre >= 0 && nombre <= 100) {
  alert("Valide");
} else {
  alert("Invalide");
}

function ex02_Mot() {
  let mot = prompt("Entrez un mot");

  switch (mot.length) {
    case 0:
      alert("Vous n'avez pas entré de mot");
      break;
    case 1:
      alert("1 caractère");
      break;
    case 2:
    case 3:
    case 4:
      alert("2 à 4 caractères");
      break;
    case 5:
      alert("5 caractères");
      break;
    case mot.length > 5:
      alert("plus de 5 caractères");
      break;
  }
}*/

function calculerAge(anneNaissance) {
  return new Date().getFullYear() - anneNaissance;
}
let age = calculerAge(2006);
console.log(`Votre age approx est de ${age} ans`);

function appliquerOperation(nombre, operation) {
  return operation(nombre);
}

const carre = (nombre) => nombre * nombre;

console.log(appliquerOperation(4, carre));

// ------------------------- OBJETS ------------------------- \\

const moi = {
  prenom: "John",
  nom: "Smith",
  age: 42,
  jeuVideo: "Doom",
  resume() {
    return `Vous êtes ${this.prenom} ${this.nom} agé de ${this.age} ans. Vous jouez à ${this.jeuVideo}`;
  },
};

console.log(moi.resume());

// --------------- VARIBALES --------------- \\

console.error("une erreur produite...");
