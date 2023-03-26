const box = document.getElementById("box")
const input = document.getElementById("input")

input.addEventListener("keypress", () => {
 box.style.backgroundColor = "red";
});