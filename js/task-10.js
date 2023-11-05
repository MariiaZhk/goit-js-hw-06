// Завдання 10
// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls input");
const btnCreateEl = document.querySelector("button[data-create]");
const btnDestroyEl = document.querySelector("button[data-destroy]");
const containerBoxesEl = document.querySelector("#boxes");

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = 30 + i * 10 + "px";
    divEl.style.height = 30 + i * 10 + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    containerBoxesEl.append(divEl);
  }
}

const onBtnCreateElClick = () => {
  let amount = inputEl.value;
  if (amount > 0) {
    createBoxes(amount);
  }
};

const onBtnDestroyElClick = () => {
  containerBoxesEl.innerHTML = "";
  inputEl.value = "";
};

btnCreateEl.addEventListener("click", onBtnCreateElClick);
btnDestroyEl.addEventListener("click", onBtnDestroyElClick);
