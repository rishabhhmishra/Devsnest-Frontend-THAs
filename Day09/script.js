const container = document.querySelector(".container");
let booked = document.querySelector(".booked");
let remaining = document.querySelector(".remaining");

for (let i = 0; i < 36; i++) {
  container.appendChild(createDiv(i));
}

function createDiv(i) {
  let div = document.createElement("div");
  div.classList.add("vaccant");
  return div;
}

let count = 0;
let boxes = container.childNodes;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.classList.contains("vaccant")) {
      box.classList.add("taken");
      box.classList.remove("vaccant");
      count++;
      changeCount(count);
    } else {
      box.classList.remove("taken");
      box.classList.add("vaccant");
      count--;
      changeCount(count);
    }
  });
});

function changeCount(count) {
  booked.innerText = `${count}`;
  remaining.innerText = `${36 - count}`;
}
