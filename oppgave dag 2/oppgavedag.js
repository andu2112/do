import fortnite from fortnite.api

const body= document.querySelector("body")
const output=document.getElementById("output");
const navn= document.getElementById("navn");
const liste=document.querySelector("ul");
const tall=document.querySelector(".tall");
const nummer= document.getElementById("nummer");

const STORAGE_NØKKEL = "navn";
const SESSION_NØKKEL = "navn";

const audio= new Audio("sadTombstone.mp3");

let alleNavn = [];
let gjetteTall;

function generereTilfeldigTall(maksTall) {
  return Math.round(Math.random() * maksTall);
}

function velkommen() {
  const sessionNavn = sessionStorage.getItem(SESSION_NØKKEL);

  if (sessionNavn) {
    output.innerText = `Velkommen, vi ønsker deg alt som er godt, ${sessionNavn}`;
  }
}

function navnSkriver() {
  if (localStorage.getItem(STORAGE_NØKKEL)) {
    liste.innerHTML = "";

    alleNavn = JSON.parse(localStorage.getItem(STORAGE_NØKKEL));

    alleNavn.forEach(navn => {
      liste.innerHTML += `<li>${navn}</li>`;
    });
  }
}

navn.addEventListener("keyup", e => {
    if(e.key === "Enter") {
      const eventValue = e.target.value;

      if(localStorage.getItem(STORAGE_NØKKEL)) {
          alleNavn = JSON.parse(localStorage.getItem(STORAGE_NØKKEL));
      }

      alleNavn.push(eventValue);

      localStorage.setItem(STORAGE_NØKKEL, JSON.stringify(alleNavn));
      sessionStorage.setItem(SESSION_NØKKEL, eventValue);
      
      velkommen();
      navnSkriver();

      e.target.value = "";
    }
});



const app = fortniteAPI


nummer.addEventListener("keyup", e => {
  if(e.key === 'Enter') {
    gjetteTall = e.target.value;
    e.target.value = "";
  }
});

window.addEventListener('DOMContentLoaded', () => {
  velkommen();
  navnSkriver();
  tall.innerText = generereTilfeldigTall(100);
});

setInterval(() => {
  const dato = new Date();
  const sekunder = dato.getSeconds();
  const tilfeldigTall = generereTilfeldigTall(100);
 
const colors=["rød","blå","grønn","orange"]
  if(sekunder === 0) {
    if(tilfeldigTall == gjetteTall) {
      const color2= Math.round(Math.random() * (colors.length - 1))
      audio.play();

       body.classList.add(colors[color2])
     
    }

    tall.innerText = tilfeldigTall;
  }
}, 1000);

