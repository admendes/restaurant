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

    return menu;
}

function loadMenu() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createMenu());
}

export default loadMenu;