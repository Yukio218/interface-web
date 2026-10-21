const monElement = document.querySelector(".dernier");
monElement.textContent = monElement;
console.log(monElement);

const listeLettre = document.querySelector("ul");
const lettre = listeLettre.children[1];

const titre = document.querySelector("h1");
titre.textContent = "Allo";

console.log(listeLettre.children[2]);
console.log(lettre.previousElementSibling);

monInterval = setInterval(() => {
  const monInput = document.querySelector("#monChamp");
  console.log(monInput.value);
  if (monInput.value.length == 0) {
    titre.textContent = "Allo";
  } else {
    titre.textContent = monInput.value;
  }
}, 1200);

setTimeout(() => {
  clearInterval(monInterval);
  console.log("10 secondes a écoulé");
  titre.classList.remove("lightgreen");
}, 10000);

const monDivQuiChange = document.querySelector("#troisieme");
monDivQuiChange.innerHTML = "";

const monA = document.createElement("a");
monA.textContent = "Site du cours";
monA.setAttribute("href", "http://www.coursinfo.ca/420-3E5");
monA.setAttribute("target", "_blank");

monDivQuiChange.append(monA);

const first = listeLettre.children[0];
first.remove();
listeLettre.append(first);

const copyListeLettre = listeLettre.cloneNode(true);
monA.append(copyListeLettre);

titre.classList.add("green");
console.log(titre.dataset);

const monButton = document.querySelector("#clickme");

monButton.addEventListener("click", () => {
  monA.style.color = "red";
});
