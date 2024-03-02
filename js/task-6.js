function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    boxesContainer.innerHTML = "";
    createBoxes(amount);
    input.value = '';
    input.classList.remove("error")
  } else {
    input.classList.add("error")
  }
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const size = 30 + i * 10;
    const box = document.createElement('div');
    box.style.width = `${size}px`
    box.style.height = `${size}px`
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
  input.value = "";
  input.classList.remove("error")
}
