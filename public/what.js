document.querySelector(".bi-list").addEventListener("click", showMenu);

function showMenu() {
    document.querySelector(".hidden-menu").style.visibility = "visible";
}

document.querySelector(".bi-x").addEventListener("click", hideMenu);

function hideMenu() {
    document.querySelector(".hidden-menu").style.visibility = "hidden";
}
