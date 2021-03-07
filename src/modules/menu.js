function createMenu() {
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    
    const title = document.createElement("h2");
    title.setAttribute("id", "menu-title");
    title.textContent = "This is the menu title";

    const paragraph = document.createElement("p");
    paragraph.setAttribute("id", "menu-paragraph");
    paragraph.textContent = "zzsadasdadas";

    //menu.appendChild(title);
    //menu.appendChild(paragraph);

    const menuImg1 = document.createElement("img");
    menuImg1.classList.add("menu-image");
    menuImg1.src = "../dist/images/menu1.jpeg";

    const menuImg2 = document.createElement("img");
    menuImg2.classList.add("menu-image");
    menuImg2.src = "../dist/images/menu2.jpg";

    const menuImg3 = document.createElement("img");
    menuImg3.classList.add("menu-image");
    menuImg3.src = "../dist/images/menu3.jpg";

    const menuImg4 = document.createElement("img");
    menuImg4.classList.add("menu-image");
    menuImg4.src = "../dist/images/menu4.jpg";

    const menuText1 = document.createElement("p");
    menuText1.classList.add("menu-text");
    menuText1.textContent = "Menu option #1";

    const menuText2 = document.createElement("p");
    menuText2.classList.add("menu-text");
    menuText2.textContent = "Menu option #2";

    const menuText3 = document.createElement("p");
    menuText3.classList.add("menu-text");
    menuText3.textContent = "Menu option #3";

    const menuText4 = document.createElement("p");
    menuText4.classList.add("menu-text");
    menuText4.textContent = "Menu option #4";

    menu.appendChild(menuImg1);
    menu.appendChild(menuImg2);
    menu.appendChild(menuText1);
    menu.appendChild(menuText2);
    menu.appendChild(menuImg3);
    menu.appendChild(menuImg4);
    menu.appendChild(menuText3);
    menu.appendChild(menuText4);

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