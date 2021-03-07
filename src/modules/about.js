function createAbout() {
    const about = document.createElement("div");
    about.setAttribute("id", "about");
    
    const title = document.createElement("h2");
    title.setAttribute("id", "about-title");
    title.textContent = "About us";

    const aboutImage = document.createElement("img");
    aboutImage.setAttribute("id", "about-image");
    aboutImage.src = "./dist/images/about.jpg";
    aboutImage.alt = "About"

    const paragraph = document.createElement("p");
    paragraph.setAttribute("id", "about-paragraph");
    paragraph.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

    //about.appendChild(title);
    about.appendChild(aboutImage);
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