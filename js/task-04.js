// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і
// зменшувати його значення на одиницю.

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const decrementBtnEl = document.querySelector(
  'button[data-action="decrement"]'
);

const incrementBtnEl = document.querySelector(
  'button[data-action="increment"]'
);
const valueEl = document.querySelector("#value");
let counterValue = 0;

const onDecrementBtnElClick = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const onIncrementBtnElClick = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

decrementBtnEl.addEventListener("click", onDecrementBtnElClick);
incrementBtnEl.addEventListener("click", onIncrementBtnElClick);
