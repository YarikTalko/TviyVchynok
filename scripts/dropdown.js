function dropdownMenu() {
    document.getElementById("header-dropdown-container-id").classList.toggle("showMenu");
}

window.onclick = function(event) {
    if (event.target.closest("hamburger-menu-button")) {
        let dropdownMenu = document.getElementById("header-dropdown-container-id");
        if (dropdownMenu.classList.contains("showMenu")) {
            dropdownMenu.classList.remove("showMenu");
        }
    }
};