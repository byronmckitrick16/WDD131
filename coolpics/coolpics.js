const menuButton = document.querySelector(".menuButton");
menuButton.addEventListener("click", menuHide);

function menuHide() {
    const menuLink = document.querySelector("nav").querySelectorAll("a");
    menuLink.forEach(link => {
        link.classList.toggle("hide");
    });
}