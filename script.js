const btn = document.getElementById("btn");
const square = document.getElementById("square");
const input = document.getElementById("text");
const cirBtn = document.getElementById("e_btn");
const range = document.getElementById("range");
const rangeSpan = document.getElementById("range-span");
const circle = document.getElementById("circle");

const logger = function () {
  console.log(input.value)
  square.style.backgroundColor = `${input.value}`;
}

btn.addEventListener("click", logger);


cirBtn.style.display = "none";

range.addEventListener("input", function (e) {
  rangeSpan.textContent = e.target.value;
  circle.style.height = circle.style.width = `${e.target.value}%`;
})


