//////////////HEADER
//-------------m*HERO BUTTON IN THE HEADER
function refresh() {
    const experience = document.getElementById("experience");
    if (experience.textContent === "Newbie") {
      experience.textContent = "Trainee";
    } else {
      experience.textContent = "Newbie";
    }
  }
  
  //////////////HEADER
  //-------------m*HERO BUTTONS IN THE BODY
  const linkCertificates = document.getElementById("linkCertificates");
  const cursaCertificates = document.getElementById("cursaCertificates");
  const glCertificates = document.getElementById("glCertificates");
  const goitCertificates = document.getElementById("goitCertificates");
  const fccCertificates = document.getElementById("fccCertificates");
  const qaCertificates = document.getElementById("qaCertificates");
  
  
  
  function certificateLink() {
    if (linkCertificates.style.display === "none") {
      linkCertificates.style.display = "";
    } else {
      linkCertificates.style.display = "none";
    }
  }
  
  function certificateCursa() {
    if (cursaCertificates.style.display === "none") {
      cursaCertificates.style.display = "";
    } else {
      cursaCertificates.style.display = "none";
    }
  }
  
  function certificateGL() {
    if (glCertificates.style.display === "none") {
      glCertificates.style.display = "";
    } else {
      glCertificates.style.display = "none";
    }
  }
  
  function certificateGOIT() {
    if (goitCertificates.style.display === "none") {
      goitCertificates.style.display = "";
    } else {
      goitCertificates.style.display = "none";
    }
  }
  
  function certificateFCC() {
    if (fccCertificates.style.display === "none") {
      fccCertificates.style.display = "";
    } else {
      fccCertificates.style.display = "none";
    }
  }
  
  function certificateQA() {
    if (qaCertificates.style.display === "none") {
      qaCertificates.style.display = "";
    } else {
      qaCertificates.style.display = "none";
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