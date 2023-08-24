export const Data = () => {
function loadAndProcessData() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://fe.it-academy.by/Examples/test_JSE.txt', true);

  xhr.onload = function () {
    if (xhr.status === 200) {
      const textData = xhr.responseText;
      findAndLogStringConstants(textData);
    } else {
      console.error('Ошибка загрузки файла:', xhr.statusText);
    }
  };

  xhr.onerror = function () {
    console.error('Ошибка загрузки файла');
  };

  xhr.send();
}

function findAndLogStringConstants(text) {
  const stringConstants = text.match(/"([^"\\]*(\\.[^"\\]*)*)"|'([^'\\]*(\\.[^'\\]*)*)'/g);

  if (stringConstants) {
    stringConstants.forEach(str => {
      console.log(str);
    });
  }
}

loadAndProcessData();
}