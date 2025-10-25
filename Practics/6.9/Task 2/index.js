const numbers = [12, -3, 45, 0, 7, 19, -8, 23];

const allEl = document.querySelector(".all-elements");
let allAsText = "";
for (let i = 0; i < numbers.length; i++) {
      allAsText += numbers[i];
      if (i !== numbers.length - 1) {
        allAsText += ", ";
      }
    }
    
allEl.textContent = allAsText;

const minOut = document.querySelector(".minNumber");
const maxOut = document.querySelector(".maxNumber");

// Обработчики для кнопок: поиск min/max «вручную» циклом
document.querySelector(".min").onclick = function () {
// Предполагаем, что первый — минимальный
    let currentMin = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < currentMin) {
          currentMin = numbers[i];
        }
      }
      minOut.textContent = currentMin;
    };

    document.querySelector(".max").onclick = function () {
      // Предполагаем, что первый — максимальный
    let currentMax = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > currentMax) {
          currentMax = numbers[i];
        }
      }
      maxOut.textContent = currentMax;
    };