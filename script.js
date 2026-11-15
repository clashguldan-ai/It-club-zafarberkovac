const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");
const form = document.getElementById("form");
const success = document.getElementById("success");

menuBtn.addEventListener("click", function () {
menu.classList.toggle("open");
});

menu.querySelectorAll("a").forEach(function (link) {
link.addEventListener("click", function () {
menu.classList.remove("open");
});
});

function setError(id, message) {
document.getElementById(id).textContent = message;
}

function isValidEmail(value) {
return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

form.addEventListener("submit", function (event) {
event.preventDefault();
success.textContent = "";

const ime = document.getElementById("ime").value.trim();
const email = document.getElementById("email").value.trim();
const razred = document.getElementById("razred").value;
const poruka = document.getElementById("poruka").value.trim();
let valid = true;

setError("imeErr", "");
setError("emailErr", "");
setError("razredErr", "");
setError("porukaErr", "");

if (ime.length < 3) {
setError("imeErr", "Unesi ime i prezime (najmanje 3 znaka).");
valid = false;
}

if (!isValidEmail(email)) {
setError("emailErr", "Unesi ispravnu email adresu.");
valid = false;
}

if (razred === "") {
setError("razredErr", "Odaberi razred.");
valid = false;
}

if (poruka.length < 10) {
setError("porukaErr", "Poruka mora imati najmanje 10 znakova.");
valid = false;
}

if (valid) {
success.textContent = "Hvala, " + ime + "! Tvoja prijava je poslana.";
form.reset();
}
});
