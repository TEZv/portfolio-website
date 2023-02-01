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


const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileMenuContainer = document.getElementById('mobile-menu-container');

hamburgerMenu.addEventListener('click', () => {
  if(mobileMenuContainer.classList.contains('make-absolute')){
    mobileMenuContainer.classList.remove('make-absolute');
  } else {
    mobileMenuContainer.classList.add('make-absolute');
  }
  console.log('click!')
})

import * as THREE from 'https://unpkg.com/three@0.127.0/build/three.module.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );

const camera = new THREE.PerspectiveCamera( 45, 320 / 390, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  antialias: true
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(320, 390);
camera.position.setZ(13);

renderer.render(scene, camera);

const geometrySphere = new THREE.SphereGeometry(6, 64, 64);
const materialSphere = new THREE.MeshBasicMaterial({ color: 0xFF5E69 });
const meshSphere = new THREE.Mesh(geometrySphere, materialSphere);
meshSphere.position.set(-.325, .25, -7)

const geometryBox = new THREE.BoxGeometry(1, 1, 1);
const materialBoxOne = new THREE.MeshStandardMaterial({ color: 0xFF785E });
const meshBoxOne = new THREE.Mesh(geometryBox, materialBoxOne);
meshBoxOne.position.set(-1.5, 4, 0);

const materialBoxTwo = new THREE.MeshStandardMaterial({ color: 0xB06BE9 });
const meshBoxTwo = new THREE.Mesh(geometryBox, materialBoxTwo);
meshBoxTwo.position.set(-3, 0.5, 0);

const materialBoxThree = new THREE.MeshStandardMaterial({ color: 0xFFA84B });
const meshBoxThree = new THREE.Mesh(geometryBox, materialBoxThree);
meshBoxThree.position.set(3, 1.5, 0);


scene.add(meshSphere, meshBoxOne, meshBoxTwo, meshBoxThree);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(20,20,20);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);

scene.add(pointLight, ambientLight);

//Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50, 0xff0000);
// scene.add(lightHelper, gridHelper);

function animate() {
  requestAnimationFrame(animate);

  meshBoxOne.rotation.x += 0.0018;
  meshBoxOne.rotation.y += 0.001;
  meshBoxOne.rotation.z += 0.0018;
  meshBoxTwo.rotation.x += 0.0018;
  meshBoxTwo.rotation.y += 0.001;
  meshBoxTwo.rotation.z += 0.0018;
  meshBoxThree.rotation.x += 0.0018;
  meshBoxThree.rotation.y += 0.001;
  meshBoxThree.rotation.z += 0.0018;

  renderer.render(scene, camera);
}

animate();