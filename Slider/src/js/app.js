"use strict"

document.addEventListener('DOMContentLoaded', () => {

    let backwardBtn = document.getElementById("backwardBtn"),
        forwardBtn = document.getElementById("forwardBtn"),
        sliderImg = document.getElementById("sliderImg"),
        sliderContainer = document.getElementById("sliderContainer");

    let imgs = [
        "./images/hero1.jpg",
        "./images/hero2.jpg",
        "./images/hero3.webp",
        "./images/hero4.webp",
        "./images/hero5.jpg",
        "./images/hero6.jpg",
        "./images/hero7.jpg"
    ];

    let intervalID;
    let currentIndex = 0;

    let Slider = () => {
        if (currentIndex < 0) {
            currentIndex = imgs.length - 1;
        } else if (currentIndex >= imgs.length) {
            currentIndex = 0;
        }
        sliderImg.src = imgs[currentIndex]
    }

    backwardBtn.addEventListener("click", () => {
        currentIndex--;
        Slider();
    });
    forwardBtn.addEventListener("click", () => {
        currentIndex++;
        Slider();
    });

    let sliderMover = () => {
        intervalID = setInterval(() => {
            currentIndex++;
            Slider();
        }, 3000);
    };
    sliderMover();

    sliderContainer.addEventListener("mouseenter", () => {
        clearInterval(intervalID);
    });
    sliderContainer.addEventListener("mouseleave", () => {
        sliderMover();
    });


});