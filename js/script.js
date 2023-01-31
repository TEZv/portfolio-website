//////////////HEADER
//-------------HERO BUTTON IN THE HEADER
function refresh() {
  const experience = document.getElementById("experience");
  if (experience.textContent === "Newbie") {
    experience.textContent = "Trainee";
  } else {
    experience.textContent = "Newbie";
  }
}

//////////////HEADER
//-------------T*HERO BUTTON IN THE BODY
const certificate = document.getElementById("heroCertificates");
function certificates() {
  if (certificate.style.display === "none") {
    certificate.style.display = "";
  } else {
    certificate.style.display = "none";
  }
}

//-------------SPAN ELEMENTS IN SKILLS

const html = document.getElementById("html");
const css = document.getElementById("css");
const js = document.getElementById("js");
const python = document.getElementById("python");
const cSharp = document.getElementById("cSharp");

const react = document.querySelector("#react");
const node = document.querySelector("#node");
const express = document.querySelector("#express");
const mongo = document.querySelector("#mongo");
const sql = document.querySelector("#sql");

html.textContent = "In progress ~~~ 50%";
css.textContent = "In progress ~~~ 50%";
js.textContent = "In progress ~~~ 30%";
python.textContent = "~~~ 10%";
cSharp.textContent = "Not yet";

react.innerHTML = "In progress ~~~ 15%";
node.innerHTML = "In progress ~~~ 15%";
express.innerText = "In progress ~~~ 5%";
mongo.innerText = "In progress ~~~ 5%";
sql.innerText = "In progress ~~~ 5%";


