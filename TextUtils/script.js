const upperCaseButton = document.getElementById("uppercaseButton");
const lowerCaseButton = document.getElementById("lowercaseButton");
const capitalizeButton = document.getElementById("clearButton");
const removeSpaceButton = document.getElementById("whiteRemoveButton");
const clearButton = document.getElementById("clearButton");

const texts = document.getElementById("textArea");

upperCaseButton.addEventListener("click", () => {
  let words = texts.value;
  texts.value = words.toUpperCase();
});

lowerCaseButton.onclick = () => {
  let words = texts.value;
  texts.value = words.toLowerCase();
};

removeSpaceButton.onclick = () => {
  const text = texts.value;

  let words = text.replace(/\s+/g, " ");

  // for (let index=0; index<words.length; index++) {
  //     words[i] = ;
  // }

  texts.value = words;
};
clearButton.onclick = () => {
  texts.value = "";
};
