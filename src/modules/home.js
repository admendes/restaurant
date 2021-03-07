function createHome() {
    const home = document.createElement("div");
    home.setAttribute("id", "home");
    
    const title = document.createElement("h2");
    title.setAttribute("id", "home-title");
    title.textContent = "Home";

    const menuImage = document.createElement("img");
    menuImage.setAttribute("id", "home-image");
    menuImage.src = "./dist/images/home.jpeg";
    menuImage.alt = "Home"

    const paragraph = document.createElement("p");
    paragraph.setAttribute("id", "home-paragraph");
    paragraph.textContent = "Very good restaurant. Try our food!";

    //home.appendChild(title);
    home.appendChild(menuImage);
    home.appendChild(paragraph);

    const homeButton = document.getElementById("button-home");
    homeButton.classList.add("clicked");
    const menuButton = document.getElementById("button-menu");
    menuButton.classList.remove("clicked");
    const aboutButton = document.getElementById("button-about");
    aboutButton.classList.remove("clicked");

    return home;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;