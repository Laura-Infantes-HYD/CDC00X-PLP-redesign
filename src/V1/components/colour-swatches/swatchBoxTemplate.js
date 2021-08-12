import isWhiteShade from "../../../helpers/isWhiteShade";
import { qs } from "../../../helpers/querySelectors";

export default (colours) => {
  const box = document.createElement("div");
  const amountOfSwatchesToDisplay = 4;
  let swatchesCount = 1;

  for (const colour of colours) {
    if (swatchesCount > amountOfSwatchesToDisplay) break;

    box.insertAdjacentHTML("beforeend", swatch(colour));

    swatchesCount++;
  }

  box.insertAdjacentHTML("beforeend", viewMoreSwatch(colours));
  box.classList.add("HYD-swatch-list");

  return box;
};

const viewMoreSwatch = (colours) => {
  const count = colours.length;
  const itemsLeft = { mobile: count - 2, desktop: count - 4 };
  const mobile = `<div class='HYD-swatch-more--mobile'>+${itemsLeft.mobile}</div>`;
  const desktop = `<div class='HYD-swatch-more--desktop'>+ ${itemsLeft.desktop} more</div>`;

  return `<div class='HYD-view-more-colours'>
              ${itemsLeft.mobile > 0 ? mobile : ""}
              ${itemsLeft.desktop > 0 ? desktop : ""}
            </div>`;
};

const swatch = (colour) =>
  `<div class='HYD-swatch ${
    isWhiteShade(colour.HexCode) ? "HYD-white-swatch" : ""
  } ' data-name="${colour.Name}" 
  }' style="background:${colour.HexCode};"> </div>`;
