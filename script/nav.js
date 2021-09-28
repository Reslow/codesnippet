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
window.onclick = function(event) {
  if (!event.target.matches('.dropDown')) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
// setting different themes with the :root 
function setTheme(color) {
  let root = document.querySelector(":root");
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
