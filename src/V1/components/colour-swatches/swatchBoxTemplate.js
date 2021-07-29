export default (colours) => {
  const box = document.createElement("div");
  const amountOfSwatchesToDisplay = 4;
  let swatchesCount = 0;

  for (const colour of colours) {
    if (swatchesCount > amountOfSwatchesToDisplay) break;

    box.insertAdjacentHTML("beforeend", swatch(colour));
    swatchesCount++;
  }

  box.classList.add("HYD-swatch-list");

  return box;
};

const swatch = (colour) =>
  `<div class='HYD-swatch' style="background:${colour.HexCode};"> </div>`;
