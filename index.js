console.log(`@Anku_Choudhary`);

var valueElement = document.getElementById("value");
var increaseBtn = document.getElementById("increaseBtn");
var decreaseBtn = document.getElementById("decreaseBtn");

var value = parseInt(valueElement.innerHTML);

increaseBtn.addEventListener("click", function () {
    value += 1;
    valueElement.innerHTML = value;
});

decreaseBtn.addEventListener("click", function () {
    value -= 1;
    valueElement.innerHTML = value;
});