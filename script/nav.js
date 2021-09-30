// Hamburgermenu
function openNav() {
  document.getElementById("mylinks").style.width = "100%";
}

function closeNav() {
  document.getElementById("mylinks").style.width = "0%";
}

// dropdown in main menu
function dropdown() {
  document.getElementById("myDropDown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropDown")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// setting different themes with the :root
function setTheme(color) {
  let root = document.querySelector(":root");
  localStorage.setItem("color", color);

  if (color === "dark") {
    root.setAttribute("class", "dark");
  }
 
  
  if (color === "red") {
    root.setAttribute("class", "red");
  }
  if (color === "light") {
    root.setAttribute("class", "light");
  }
  if (color === "default") {
    root.setAttribute("class", "");
  }
}
// showing which theme is active

const theme = localStorage.getItem("color")
setTheme(theme)

let nav = document.getElementById("myDropDown");
let btns = nav.getElementsByClassName("mybtn");
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
