'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  inputEl: document.querySelector('[type=number]'),
  btnCreateEl: document.querySelector('[data-create]'),
  btnDestroyEl: document.querySelector('[data-destroy]'),
  controlsDiv: document.querySelector('#controls'),
  boxesNewList: document.querySelector('#boxes'),
};

refs.btnCreateEl.addEventListener('click', createBoxes);

function createBoxes() {
  const amount = refs.inputEl.value;

  if (amount > 100) {
    refs.inputEl.value = '';
    return;
  }

  refs.boxesNewList.textContent = '';

  const arrOfBoxes = [];

  for (let i = 0; i < amount; i += 1) {
    const elementInBox = document.createElement('div');
    elementInBox.style.minWidth = 30 + i * 10 + 'px';
    elementInBox.style.minHeight = 30 + i * 10 + 'px';
    elementInBox.style.marginRight = '16px';
    elementInBox.style.backgroundColor = getRandomHexColor();

    arrOfBoxes.push(elementInBox);
  }

  refs.boxesNewList.append(...arrOfBoxes);
  refs.inputEl.value = '';
}

refs.btnDestroyEl.addEventListener('click', () => {
  refs.boxesNewList.textContent = '';
  refs.inputEl.value = '';
});

refs.inputEl.setAttribute('value', '1');
