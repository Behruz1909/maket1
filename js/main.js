"use strict"

let elForm = document.querySelector(".intro__form");
let elMessage = document.querySelector(".message");
let elText = document.querySelector(".intro__textarea")
let elResult = document.querySelector(".result")

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault()

let elTextVal = elText.value;

if(elTextVal == "") {
    elMessage.textContent = "bosh narsa kiritmang!"
    elMessage.style.color = "red"
} else {
    elMessage.textContent = "Hikoyangiz qabul qilindi."
    elMessage.style.color = "orange";
}

elResult.style.display = "block";
})
