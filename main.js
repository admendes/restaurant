(()=>{"use strict";const t=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.setAttribute("id","about");const e=document.createElement("h2");e.setAttribute("id","about-title"),e.textContent="About us";const n=document.createElement("img");n.setAttribute("id","about-image"),n.src="./../dist/images/about.jpg",n.alt="About";const d=document.createElement("p");return d.setAttribute("id","about-paragraph"),d.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",t.appendChild(n),t.appendChild(d),document.getElementById("button-home").classList.remove("clicked"),document.getElementById("button-menu").classList.remove("clicked"),document.getElementById("button-about").classList.add("clicked"),t}())},e=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.setAttribute("id","home");const e=document.createElement("h2");e.setAttribute("id","home-title"),e.textContent="Home";const n=document.createElement("img");n.setAttribute("id","home-image"),n.src="./dist/images/home.jpeg",n.alt="Home";const d=document.createElement("p");return d.setAttribute("id","home-paragraph"),d.textContent="Very good restaurant. Try our food!",t.appendChild(n),t.appendChild(d),document.getElementById("button-home").classList.add("clicked"),document.getElementById("button-menu").classList.remove("clicked"),document.getElementById("button-about").classList.remove("clicked"),t}())},n=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");t.setAttribute("id","menu");const e=document.createElement("h2");e.setAttribute("id","menu-title"),e.textContent="This is the menu title";const n=document.createElement("p");n.setAttribute("id","menu-paragraph"),n.textContent="zzsadasdadas";const d=document.createElement("img");d.classList.add("menu-image"),d.src="./dist/images/menu1.jpeg";const o=document.createElement("img");o.classList.add("menu-image"),o.src="./dist/images/menu2.jpg";const i=document.createElement("img");i.classList.add("menu-image"),i.src="./dist/images/menu3.jpg";const c=document.createElement("img");c.classList.add("menu-image"),c.src="./dist/images/menu4.jpg";const a=document.createElement("p");a.classList.add("menu-text"),a.textContent="Menu option #1";const s=document.createElement("p");s.classList.add("menu-text"),s.textContent="Menu option #2";const u=document.createElement("p");u.classList.add("menu-text"),u.textContent="Menu option #3";const m=document.createElement("p");return m.classList.add("menu-text"),m.textContent="Menu option #4",t.appendChild(d),t.appendChild(o),t.appendChild(a),t.appendChild(s),t.appendChild(i),t.appendChild(c),t.appendChild(u),t.appendChild(m),document.getElementById("button-home").classList.remove("clicked"),document.getElementById("button-menu").classList.add("clicked"),document.getElementById("button-about").classList.remove("clicked"),t}())};(function(){const d=document.getElementById("content");d.appendChild(function(){const t=document.createElement("header");t.classList.add("header");const e=document.createElement("h1");return e.setAttribute("id","header-text"),e.textContent="Pasta Restoranti",t.appendChild(e),t}()),d.appendChild(function(){const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("h5");return e.setAttribute("id","footer-text"),e.textContent="Website by admendes",t.appendChild(e),t}()),d.appendChild(function(){const d=document.createElement("nav");d.setAttribute("id","nav");const o=document.createElement("button");o.setAttribute("id","button-home"),o.classList.add("nav-button"),o.textContent="Home",o.addEventListener("click",e);const i=document.createElement("button");i.setAttribute("id","button-menu"),i.classList.add("nav-button"),i.textContent="Menu",i.addEventListener("click",n);const c=document.createElement("button");return c.setAttribute("id","button-about"),c.classList.add("nav-button"),c.textContent="About",c.addEventListener("click",t),d.appendChild(o),d.appendChild(i),d.appendChild(c),d}()),d.appendChild(function(){const t=document.createElement("main");return t.setAttribute("id","main"),t}()),e()})(),console.log("tessst")})();