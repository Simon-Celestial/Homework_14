"use strict";

document.addEventListener('DOMContentLoaded', () => {
    let tabs = document.querySelectorAll(".tab-menu-container > div");
    let tabContents = document.querySelectorAll(".tab-menu-content > div");

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");
            tabContents.forEach((content) => content.classList.remove("show"));
            tabContents[index].classList.add("show");
        });
    });
});
