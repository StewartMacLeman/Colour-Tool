"use strict";

// Updating the left-hand colours ---------------------------------------------

function colourUpdateLeft(colourClass){
  let scrollColour = document.querySelector(`.${colourClass}`);
  scrollColour.addEventListener( "click", colourBG );

  let leftContainer = document.querySelector(".colourBG_1");
  let textUpdate = document.querySelector(".colourText_1");

  function colourBG(){

    let style = window.getComputedStyle(scrollColour);
    let colour = style.getPropertyValue("background-color");
    leftContainer.style.background = colour;

    let description = scrollColour.textContent;
    textUpdate.textContent = "The colour displayed is: " + description;
    textUpdate.style.fontFamily = "futura";
    textUpdate.style.fontSize = "1em";
  }
}
colourUpdateLeft("white");
colourUpdateLeft("red");
colourUpdateLeft("orange");
colourUpdateLeft("yellow");
colourUpdateLeft("green");
colourUpdateLeft("palegreen");
colourUpdateLeft("lightblue");
colourUpdateLeft("blue");
colourUpdateLeft("grey");
colourUpdateLeft("black");

// Updating the right-hand colours ---------------------------------------------

function colourUpdateRight(colourClass){
  let scrollColour = document.querySelector(`.${colourClass}`);
  scrollColour.addEventListener( "click", colourBG );

  let leftContainer = document.querySelector(".colourBG_2");
  let textUpdate = document.querySelector(".colourText_2");

  function colourBG(){

    let style = window.getComputedStyle(scrollColour);
    let colour = style.getPropertyValue("background-color");
    leftContainer.style.background = colour;

    let description = scrollColour.textContent;
    textUpdate.textContent = "The colour displayed is: " + description;
    textUpdate.style.fontFamily = "futura";
    textUpdate.style.fontSize = "1em";
  }
}

colourUpdateRight("white_2");
colourUpdateRight("red_2");
colourUpdateRight("orange_2");
colourUpdateRight("yellow_2");
colourUpdateRight("green_2");
colourUpdateRight("palegreen_2");
colourUpdateRight("lightblue_2");
colourUpdateRight("blue_2");
colourUpdateRight("grey_2");
colourUpdateRight("black_2");

// Reset Function --------------------------------------------------------------

document.querySelector("#reset_btn_1").addEventListener("click", reset_btn_left);
document.querySelector("#reset_btn_2").addEventListener("click", reset_btn_right);

function reset_btn_left(){
  let leftContainer = document.querySelector(".colourBG_1");
  let textUpdate = document.querySelector(".colourText_1");
  let scroll_1 = document.querySelector(".colourScroll_1");

    leftContainer.style.background = "white";
    textUpdate.textContent = "The colour displayed is: White";
    textUpdate.style.fontFamily = "futura";
    textUpdate.style.fontSize = "1em";
    scroll_1.scrollTop = 0;
}

function reset_btn_right(){
  let leftContainer = document.querySelector(".colourBG_2");
  let textUpdate = document.querySelector(".colourText_2");
  let scroll_2 = document.querySelector(".colourScroll_2");

    leftContainer.style.background = "white";
    textUpdate.textContent = "The colour displayed is: White";
    textUpdate.style.fontFamily = "futura";
    textUpdate.style.fontSize = "1em";
    scroll_2.scrollTop = 0;
}
