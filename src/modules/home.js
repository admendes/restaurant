function createHome() {
    const home = document.createElement("div");
    home.setAttribute("id", "home");
    
    const title = document.createElement("h2");
    title.setAttribute("id", "home-title");
    title.textContent = "This is the home title";

    const paragraph = document.createElement("p");
    paragraph.setAttribute("id", "home-paragraph");
    paragraph.textContent = "asdoaoidsjo aosdoia sjoidjaoidj aiosdjiaso jdioaj doiajsdoi ajsodijasio djaisodjaosijdaosidjaosidj aoisdj aoidjoa0";

    home.appendChild(title);
    home.appendChild(paragraph);

    return home;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;