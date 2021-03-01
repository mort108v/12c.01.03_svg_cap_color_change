"use strict"

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("DOM Loaded");

    document.querySelector(".treebutton").addEventListener("click", treefunc);
    document.querySelector(".carbutton").addEventListener("click", carfunc);
    document.querySelector(".housebutton").addEventListener("click", windowfunc);
}

function treefunc() {
    console.log("Tree animation");

}

function carfunc() {
    console.log("car animation");

    document.querySelector(".wheelsturn").classList.add("move");
}

function windowfunc() {
    console.log("window animation");
    document.querySelector(".window").classList.add("light");
}