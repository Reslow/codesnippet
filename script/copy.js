function copy(id, message) {
  const selectTextArea = document.querySelector("#" + id);
  const textDiv = document.querySelector("#" + message);

  console.log(textDiv);

  navigator.clipboard
    .writeText(selectTextArea.value)
    .then(() => {})
    .catch((err) => {});
  textDiv.style.display = "block";
}

function hideMessage(message) {
  const textDiv = document.querySelector("#" + message);

  textDiv.style.display = "block";

  if ((textDiv.style.display = "block")) {
    textDiv.style.display = "none";
  }
}
