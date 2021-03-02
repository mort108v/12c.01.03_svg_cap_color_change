"use strict"

let elementToPaint;



document.addEventListener("DOMContentLoaded", init);

async function init() {
    console.log("DOM Loaded");

    let response = await fetch("imagefiles/double-red-airtech-mesh-3d-logo-cap-allwhite-01.svg");
    let mySVGdata = await response.text();
    document.querySelector("#capsvg").innerHTML = mySVGdata;

    manipulateSVG();

    document.querySelector(".treebutton").addEventListener("click", treefunc);
    document.querySelector(".carbutton").addEventListener("click", carfunc);
    document.querySelector(".housebutton").addEventListener("click", windowfunc);
}

function manipulateSVG() {
    console.log("manipulateSVG");
    // DO shit

    document.querySelector("#visor").classList.add("g_to_interact_with");
    document.querySelector("#crown").classList.add("g_to_interact_with");

    let gSpots = document.querySelectorAll(".g_to_interact_with");

    gSpots.forEach(gSpot => {
        console.log(gSpot);

        gSpot.addEventListener("mouseover", mouseoverG);
        gSpot.addEventListener("mouseout", mouseoutG);
        gSpot.addEventListener("click", clickG);
    });

    // Do color buttons

    let colorButtons = document.querySelectorAll(".color_btn");

    colorButtons.forEach(colorButton => {
        console.log(colorButton);

        colorButton.addEventListener("mouseover", mouseoverColorButton);
        colorButton.addEventListener("mouseout", mouseoutColorButton);
        colorButton.addEventListener("click", clickColorButton);
    });

}

function mouseoverColorButton() {
    console.log("mouseoverColorButton");

    this.classList.add("boxShadowThis");
}

function mouseoutColorButton() {
    console.log("mouseoutColorButton");

    this.classList.remove("boxShadowThis");

}

function clickColorButton() {
    console.log("clickColorButton", this);
    // getAttribute("fill")
    const color = this.getAttribute("fill");
    elementToPaint.style.fill = color;
}

function mouseoverG() {
    console.log("mouseoverG");

    this.classList.add("boxShadowThis");
}

function mouseoutG() {
    console.log("mouseoutG");

    this.classList.remove("boxShadowThis");

}

function clickG() {
    console.log("clickG");

    elementToPaint = this;
    elementToPaint.style.fill = "grey";
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