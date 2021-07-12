const container = document.querySelector(".container");
const box = document.querySelector(".box");

container.addEventListener("click", (e) => {
  const x = e.clientX;
  const y = e.clientY;

  //   const oofx = e.offsetX;
  //   const oofy = e.offsetY;

  //   console.log(oofx, oofy);

  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
});