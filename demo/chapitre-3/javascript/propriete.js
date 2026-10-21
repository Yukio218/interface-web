class Auto {
  constructor(marque, couleur, vitesse) {
    this.marque = marque;
    this.couleur = couleur;
    this.vitesse = vitesse;
  }

  accelerer() {
    //Fonction fleché pour conserver le context du "this."
    setTimeout(() => {
      this.vitesse += 10;
    }, 1000);
  }
}

class AutoHybride extends Auto {
  constructor(marque, couleur, vitesse, autonomieElectrique) {
    super(marque, couleur, vitesse);
    this.autonomieElectrique = autonomieElectrique;
  }
}

const maVoitureA = new Auto("Toyota", "rouge", 90);
const maVoitureB = new Auto("Tesla", "noir", 120, 20);

maVoitureA.accelerer();

console.log(maVoitureA);

const nombres = [2, 5, 8, 11, , 14];

//Applique à tout les éléments du tableau
const carres = nombres.map((nombre) => nombre * nombre);
const pairs = nombres.filter((nombre) => nombre % 2 === 0);
const premierPlusGrandQue10 = nombres.find((nombre) => nombre > 10);

const utilisateur = {
  nom: "Alex",
  profil: {
    ville: "Laval",
  },
};

if (utilisateur.profil?.ville === "Laval") {
  console.log("T'habite en effet à Laval");
} else {
  console.log("Tu n'habite pas a laval");
}

let reponse = utilisateur.profil?.ville ?? "Ville inconnue";

console.log(reponse);

console.log("Code before time out");
const intervalId = setInterval(() => {
  console.log("3 sec plus tard (Code at each interval)");
}, 3000);

console.log("Code after time out still runs");
setTimeout(() => {
  clearInterval(intervalId);
  console.log("10 secondes a écoulé");
}, 10000);
