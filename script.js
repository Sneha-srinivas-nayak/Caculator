document.addEventListener("DOMContentLoaded", function () {
  const display = document.querySelector(".display");
  const buttons = document.querySelector(".buttons");

  buttons.addEventListener("click", function (event) {
    const target = event.target;
    const value = target.dataset.value;

    if (value) {
      handleButtonClick(value);
    }
  });

  function handleButtonClick(value) {
    if (value === "AC") {
      display.value = "";
    } else if (value === "DEL") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = "Error";
      }
    } else if (value === "sqrt") {
      display.value = Math.sqrt(eval(display.value));
    } else if (value === "square") {
      display.value = Math.pow(eval(display.value), 2);
    } else if (value === "sin") {
      display.value = Math.sin(eval(display.value));
    } else if (value === "cos") {
      display.value = Math.cos(eval(display.value));
    } else if (value === "tan") {
      display.value = Math.tan(eval(display.value));
    } else {
      display.value += value;
    }
  }
});
