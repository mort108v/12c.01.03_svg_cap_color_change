"use strict"

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("DOM Loaded");

    document.querySelector("button.tree"), addEventListener("click", treefunc);
    document.querySelector("button.car"), addEventListener("click", carfunc);
    document.querySelector("button.house"), addEventListener("click", windowfunc);
}

function treefunc() {
    console.log("Tree animation");

}

function carfunc() {
    console.log("car animation");

}

function windowfunc() {
    console.log("window animation");

}