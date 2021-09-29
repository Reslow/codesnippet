


filterItems("all")
function filterItems(c) {
  let selection, i;
  selection = document.getElementsByClassName("selection");
  if (c == "all") c = "";

  for (i = 0; i < selection.length; i++) {
    removeClass(selection[i], "show");
    if (selection[i].className.indexOf(c) > -1) addClass(selection[i], "show");
  }
}

function addClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function removeClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
let mybtnContainer = document.getElementById("snippetNav");
let mybtns = mybtnContainer && mybtnContainer.getElementsByClassName("mybtn")

for (let i = 0; i < mybtns.length; i++) {
  mybtns[i].addEventListener("click", function() 
  {
    let current = mybtnContainer.getElementsByClassName(" active");
    current[0].className = current[0].className.replace(" active", '');
    this.className += " active";
  });
}