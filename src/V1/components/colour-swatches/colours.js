import { qs, qsa } from "../../../helpers/querySelectors";
import getColours from "../../services/product-colours.service";
import swatchBoxTemplate from "./swatchBoxTemplate";

export default async () => {
  const prodCards = qsa(".p-item");

  prodCards.forEach(async (card) => {
    addPlaceHolder(card);
    addSwatches(card);
  });
};

const addSwatches = async (card) => {
  const url = extractUrl(card);
  const data = await getColours(url);
  const swatchesWrap = qs(".HYD-swatch-list-wrap", card);

  swatchesWrap.innerHTML = "";

  if (data === null || data.error) return;

  swatchesWrap.insertAdjacentElement("beforeend", swatchBoxTemplate(data));
  addSwatchEvents();
};

const addSwatchEvents = () => {
  let swatches = qsa(".HYD-swatch");

  swatches.forEach((swatch) => {
    swatch.addEventListener("click", (e) => {
      sessionStorage.setItem("PLPColourSelection", swatch.dataset.name);
    });
  });
};

const extractUrl = (card) => {
  const link = qs("a", card);
  return link.href;
};

const addPlaceHolder = (card) => {
  const cardTitle = qs(".p-info.text-block", card);

  cardTitle.insertAdjacentHTML("afterend", placeHolder);
};

const createSwatchDivs = (amount) => {
  let divs = "";
  for (let i = 0; i < amount; i++) {
    divs = divs + `<div class="HYD-swatch"></div>`;
  }
  return divs;
};

const placeHolder = `<div class="HYD-swatch-list-wrap"><span>LOADING COLOURS...</span>${(() => {
  return createSwatchDivs(6);
})()}</div>`;
