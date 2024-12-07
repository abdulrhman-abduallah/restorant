const menu = document.createElement("button");
const contact = document.createElement("button"); 
const nav = document.querySelector("nav");
const homepage = document.createElement("p");

homepage .style.display = "none"

const home = document.createElement("button");
home.textContent = "about"
home.addEventListener("click",()=>{
    homepage.textContent = ""
    homepage.style.display = "block";
    homepage.textContent = "this is the about page for now"

});

nav.appendChild(home);
content.appendChild(homepage);