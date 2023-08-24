export const PoemButton = () => {
class PoemButton {
  constructor(buttonCaption, alertText) {
    this.buttonCaption = buttonCaption;
    this.alertText = alertText;
  }

  buttonPressed() {
    alert(this.alertText);
  }
}

function loadPoemButtons() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://fe.it-academy.by/Examples/test_JSE.json', true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const poemData = JSON.parse(xhr.responseText);

      poemData.forEach(data => {
        const poemButton = new PoemButton(data.buttonCaption, data.alertText);
        createButton(poemButton);
      });
    } else {
      console.error('Ошибка загрузки файла:', xhr.statusText);
    }
  };

  xhr.onerror = function () {
    console.error('Ошибка загрузки файла');
  };

  xhr.send();
}

function createButton(poemButton) {
  const button = document.createElement('button');
  button.textContent = poemButton.buttonCaption;
  button.addEventListener('click', () => poemButton.buttonPressed());
  document.body.appendChild(button);
}

loadPoemButtons();
}