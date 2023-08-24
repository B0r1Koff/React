export const PoemButton = () => {
function PoemButton(buttonCaption, alertText) {
    this.buttonCaption = buttonCaption;
    this.alertText = alertText;
  
    let button = document.createElement("button");
    button.textContent = buttonCaption;
    button.addEventListener("click", this.buttonPressed.bind(this));
    document.body.appendChild(button);
  }
  
  PoemButton.prototype.buttonPressed = function () {
    alert(this.alertText);
  };
  
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "https://fe.it-academy.by/Examples/test_JSE.json", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let data = JSON.parse(xhr.responseText);
      data.forEach(function (item) {
        new PoemButton(item.buttonCaption, item.alertText);
      });
    }
  };
  xhr.send();
}