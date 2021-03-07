function createAbout() {
    const about = document.createElement("div");
    about.setAttribute("id", "about");
    
    const title = document.createElement("h2");
    title.setAttribute("id", "about-title");
    title.textContent = "This is the about title";

    const paragraph = document.createElement("p");
    paragraph.setAttribute("id", "about-paragraph");
    paragraph.textContent = "zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzsodijasio djaisodjaosijdaosidjaoszzzzzzzzzzzzidj aoisdj aoidjoa0";

    about.appendChild(title);
    about.appendChild(paragraph);

    const homeButton = document.getElementById("button-home");
    homeButton.classList.remove("clicked");
    const menuButton = document.getElementById("button-menu");
    menuButton.classList.remove("clicked");
    const aboutButton = document.getElementById("button-about");
    aboutButton.classList.add("clicked");

    return about;
}

function loadAbout() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createAbout());
}

export default loadAbout;