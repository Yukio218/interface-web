// ------- Exercice 1 -------- \\
const premierP = document.querySelector(".row p");
premierP.style.color = "green";

const fruits = document.querySelectorAll(".fruit");
fruits.forEach((fruit) => {
  fruit.classList.add("actif");
});

// ------- Exercice 2 -------- \\
const divOut2 = document.querySelector("#out2");
const fruits2 = document.querySelector("#fruits2");
divOut2.textContent = fruits2.firstElementChild.textContent + fruits2.lastElementChild.textContent + fruits2.children[0].nextElementSibling.textContent;

// ------- Exercice 3 -------- \\
const divLog3 = document.querySelector("#log3");
const divBloc3 = document.querySelector("#bloc3");
divLog3.textContent = "ojd";
divLog3.innerHTML = "ji";


// ------- Exercice 4 -------- \\

// ------- Exercice 5 -------- \\

// ------- Exercice 6 -------- \\

// ------- Exercice 7 -------- \\