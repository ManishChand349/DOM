const addBtn = document.getElementById("addBtn");
const subtractBtn = document.getElementById("subtractBtn");
const resetBtn = document.getElementById("resetBtn");
const result = document.getElementById("result");

let currentValue = 0;

addBtn.addEventListener("click", () => {
  currentValue += 1;
  result.textContent = `${currentValue}`;
});

subtractBtn.addEventListener("click", () => {
  if (currentValue != 0) {
    currentValue -= 1;
    result.textContent = `${currentValue}`;
  }
});
resetBtn.addEventListener("click", () => {
  currentValue = 0;
  result.textContent = `${currentValue}`;
});
