// 1.Напиши скрипт в якому є три радіобатони зі значенями кольрів. При обиранніна будь якого колір фону боді змінюється відповідно

const inputRadioEls = document.querySelectorAll('[name="color"]');
const inputCheck = document.querySelector('[name="color"]');
console.log(inputRadioEls);

inputRadioEls.forEach((input) => {
  console.log(input);

  input.addEventListener("change", onRadioClick);
});

function onRadioClick(event) {
  const color = event.target.value;
  document.body.style.backgroundColor = color;
}

if (inputCheck) {
  document.body.style.backgroundColor = inputCheck.value;
}

// 2.Напиши скрипт який, при наборі тексту в інпут input#name-input (подія input), підставляє його поточне значення в span#name-output. якщо інпут порожній, в спані повинен відображатися рядок 'незнайомець'.

const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  spanRef.textContent = event.target.value;
}




// 3. Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text оновлюючи властивість font-size. В результаті при перетягуванні повзунка змінюватиметься розмір тексту.

const rangeEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

// console.log(range);
// console.log(text);


rangeEl.addEventListener('input', onFontSize);

function onFontSize(event) {
    const size = event.target.value + "px";

    console.log(size);

    textEl.style.fontSize = size
}




const imageRef = document.querySelector(".image");

imageRef.addEventListener('click', onImageClick);