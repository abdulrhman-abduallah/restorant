const nav = document.querySelector("nav");
const homepage = document.createElement("p");
homepage.textContent = "This is the home page for now "

homepage .style.display = "none"

const home = document.createElement("button");
home.textContent = "Home"
home.addEventListener("click",()=>{
    homepage.textContent = ""
    homepage.style.display = "block";
    homepage.textContent = "this is the about page for now"

});

nav.appendChild(home);
content.appendChild(homepage);