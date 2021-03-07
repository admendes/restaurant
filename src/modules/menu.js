function createMenu() {
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    
    const title = document.createElement("h2");
    title.setAttribute("id", "menu-title");
    title.textContent = "This is the menu title";

    const paragraph = document.createElement("p");
    paragraph.setAttribute("id", "menu-paragraph");
    paragraph.textContent = "zzsadasdadasdd4242342424 24234 24 2432 oa0";

    menu.appendChild(title);
    menu.appendChild(paragraph);

    const homeButton = document.getElementById("button-home");
    homeButton.classList.remove("clicked");
    const menuButton = document.getElementById("button-menu");
    menuButton.classList.add("clicked");
    const aboutButton = document.getElementById("button-about");
    aboutButton.classList.remove("clicked");

    return menu;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;