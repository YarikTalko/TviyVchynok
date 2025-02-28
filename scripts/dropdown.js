function dropdownMenu() {
    document.getElementById("header-dropdown-container-id").classList.toggle("showMenu");
}

window.onclick = function (event) {
    if (event.target.closest("hamburger-menu-button")) {
        let dropdownMenu = document.getElementById("header-dropdown-container-id");
        if (dropdownMenu.classList.contains("showMenu")) {
            dropdownMenu.classList.remove("showMenu");
        }
    }
    if (document.getElementById("hamburger-menu-button-id").getAttribute("src") === "images/hamburger_menu.svg") {
        document.getElementById("hamburger-menu-button-id").src = "images/close_button.svg";
    } else {
        document.getElementById("hamburger-menu-button-id").src = "images/hamburger_menu.svg";
    }
};