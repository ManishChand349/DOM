const boxElement = document.getElementById("box")
const text = document.getElementById("clickMe")

boxElement.addEventListener("mouseout", () => {
     text.innerHTML = "Don't Leave Me"
});