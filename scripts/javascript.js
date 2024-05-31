console.log ("Hello world!")

const nameInput = document.getElementById("nameInput");
const button = document.getElementById("button");
const h3 = document.querySelector("h3");

const naamveld = document.getElementById("naamveld");

const hondBlankState = document.getElementById("hond_blankstate");

const keuzeAaien = document.getElementById("aaien");
const keuzeBadderen = document.getElementById("badderen");
const keuzeTrainen = document.getElementById("trainen");
const keuzeUitlaten = document.getElementById("uitlaten");
const keuzeVoeren = document.getElementById("voeren");

const hondAaien = document.getElementById("hond_aaien");
const hondBadderen = document.getElementById("hond_badderen");
const hondTrainen = document.getElementById("hond_trainen");
const hondUitlaten = document.getElementById("hond_uitlaten");
const hondVoeren = document.getElementById("hond_voeren");

const keuzePark = document.getElementById("park");
const keuzeTuin = document.getElementById("tuin");
const keuzeWoonkamer = document.getElementById("woonkamer");

const keuzeClasses = ['keuzePark', 'keuzeTuin', 'keuzeWoonkamer']

const hongerPercentage = document.getElementById("honger-percentage");
const plezierPercentage = document.getElementById("plezier-percentage");
const hygienePercentage = document.getElementById("hygiene-percentage");

const body = document.body;

let naamHond;

let aaienInteractie;
let badderenInteractie;
let trainenInteractie;
let uitlatenInteractie;
let voerenInteractie;

let honger = 100;
let plezier = 100;
let hygiene = 100;

let audioAaien = new Audio ("sounds/aaien_sound.wav");
let audioBadderen = new Audio ("sounds/badderen_sound.mp3");
let audioTrainen = new Audio ("sounds/hond-trainen_sound.wav");
let audioUitlaten = new Audio ("sounds/uitlaat_sound.wav");
let audioVoeren = new Audio ("sounds/voeren_sound.wav");

function logInput() {
    naamHond = nameInput.value;
    h3.textContent = naamHond;
}

function BlankState () {
    hondBlankState.style.display = "block";
    hondAaien.style.display = "none";
    hondBadderen.style.display = "none";
    hondTrainen.style.display = "none";
    hondUitlaten.style.display = "none";
    hondVoeren.style.display = "none"; 
}

function AaienHond () {
    hondBlankState.style.display = "none";
    hondAaien.style.display = "block";
    hondBadderen.style.display = "none";
    hondTrainen.style.display = "none";
    hondUitlaten.style.display = "none";
    hondVoeren.style.display = "none";
    audioAaien.play();
    plezier += 30;
    setTimeout(BlankState,5000);

}

function BadderenHond () {
    if (hygiene < 75) {
        hondBlankState.style.display = "none";
        hondAaien.style.display = "none";
        hondBadderen.style.display = "block";
        hondTrainen.style.display = "none";
        hondUitlaten.style.display = "none";
        hondVoeren.style.display = "none";
        audioBadderen.play();
        setTimeout(function(){

            audioBadderen.pause();
            audioBadderen.currentTime() = 0;
        },5000)
        hygiene += 25;
        setTimeout(BlankState,5000);
    }
}

function TrainenHond () {
    if (hygiene > 10) {
        hondBlankState.style.display = "none";
        hondAaien.style.display = "none";
        hondBadderen.style.display = "none";
        hondTrainen.style.display = "block";
        hondUitlaten.style.display = "none";
        hondVoeren.style.display = "none";
        audioTrainen.play();
        plezier += 20;
        hygiene -= 10;
        setTimeout(BlankState,10000);
    }
}

function UitlatenHond () {
    if(hygiene > 20) {
        hondBlankState.style.display = "none";
        hondAaien.style.display = "none";
        hondBadderen.style.display = "none";
        hondTrainen.style.display = "none";
        hondUitlaten.style.display = "block";
        hondVoeren.style.display = "none";
        audioUitlaten.play();
        setTimeout(function(){

            audioUitlaten.pause();
            audioUitlaten.currentTime() = 0;
        },5000)
        plezier += 10
        hygiene -= 20
        setTimeout(BlankState,5000);
    }
}

function VoerenHond () {
    if (honger < 70) {
        hondBlankState.style.display = "none";
        hondAaien.style.display = "none";
        hondBadderen.style.display = "none";
        hondTrainen.style.display = "none";
        hondUitlaten.style.display = "none";
        hondVoeren.style.display = "block";
        audioVoeren.play();
        honger += 30;
        setTimeout(BlankState,6000);
    }
}

function hongerOmlaag () {
    if (honger >0) {
        honger -- 
        console.log ("Honger:" + honger)
    }
}

function plezierOmlaag () {
    if (plezier >0) {
        plezier -- 
        console.log ("Plezier:" + plezier)
    }
}

function hygieneOmlaag () {
    if (hygiene >0) {
        hygiene -- 
        console.log ("Hygiene:" + hygiene)

    }
}

function updateTekst () {
    hongerPercentage.textContent = 'Honger: ' + honger + '%';
    plezierPercentage.textContent = 'Plezier: ' + plezier + '%';
    hygienePercentage.textContent = 'Hygiene: ' + hygiene + '%';
}

function changeBackground(keuze){

}

button.addEventListener ('click',logInput);

aaien.addEventListener ('click',AaienHond);
badderen.addEventListener ('click',BadderenHond);
trainen.addEventListener ('click',TrainenHond);
uitlaten.addEventListener ('click',UitlatenHond);
voeren.addEventListener ('click',VoerenHond);

keuzePark.addEventListener('click', function(){
    body.removeAttribute("class")
    body.classList.add(keuzeClasses[0])
})
keuzeTuin.addEventListener('click', function(){
    body.removeAttribute("class")
    body.classList.add(keuzeClasses[1])
})
keuzeWoonkamer.addEventListener('click', function(){
    body.removeAttribute("class")
    body.classList.add(keuzeClasses[2])
})

setInterval(hongerOmlaag, 2000);
setInterval(plezierOmlaag,1000);
setInterval(hygieneOmlaag,5000);

setInterval(updateTekst,500);
