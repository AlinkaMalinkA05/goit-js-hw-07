function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 const changedColor = getRandomHexColor;
const btn = document.querySelector(".change-color");
const bkgColor = document.querySelector (".color")
btn.addEventListener("click", handleClick) 
function handleClick() {
  document.body.style.backgroundColor = changedColor;
  bkgColor.textContent = changedColor;
}
 