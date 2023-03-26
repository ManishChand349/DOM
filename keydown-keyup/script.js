const box = document.getElementById("box")
const input = document.getElementById("input")

box.addEventListener("keyup", () => {
 box.style.backgroundColor = "red";
});
box.addEventListener("keydown", () => {
 box.style.backgroundColor = "blue";
});