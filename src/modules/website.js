function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const headerText = document.createElement("h1");
    headerText.setAttribute("id", "header-text");
    headerText.textContent ="Title this is";
    header.appendChild(headerText);

    return header;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const footerText = document.createElement("h5");
    footerText.setAttribute("id", "footer-text");
    footerText.textContent ="footer text this is";
    footer.appendChild(footerText);

    return footer;
}

function createNav() {
    const nav = document.createElement("nav");
    nav.setAttribute("id", "nav");

    const homeButton = document.createElement("button");
    homeButton.setAttribute("id", "button-home");
    homeButton.classList.add("nav-button");
    homeButton.textContent = "Home";

    const menuButton = document.createElement("button");
    menuButton.setAttribute("id", "button-menu");
    menuButton.classList.add("nav-button");
    menuButton.textContent = "Menu";

    const aboutButton = document.createElement("button");
    aboutButton.setAttribute("id", "button-about");
    aboutButton.classList.add("nav-button");
    aboutButton.textContent = "About";

    nav.appendChild(homeButton);
    nav.appendChild(menuButton);
    nav.appendChild(aboutButton);

    return nav;
}

function createMain() {
    const main = document.createElement("main");
    main.setAttribute("id", "main");
    return main;
}

function init() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createFooter());
    content.appendChild(createNav());
    content.appendChild(createMain());
    console.log("yutp")
}

export default init();