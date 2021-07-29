import { qs, qsa } from "../../../helpers/querySelectors";
import getColours from "../../services/product-colours.service";
import swatchBoxTemplate from "./swatchBoxTemplate";

export default async () => {
  addSwatches();
};

const addSwatches = async () => {
  const prodCards = qsa(".p-item");

  prodCards.forEach(async (card) => {
    const url = extractUrl(card);
    const colours = await getColours(url);
    const cardTitle = qs(".p-info.text-block", card);

    cardTitle.insertAdjacentElement("afterend", swatchBoxTemplate(colours));
    // div.dataset.colours = JSON.stringify(colours);
    // div.style.border = "solid 2px red";
  });
};

const extractUrl = (card) => {
  const link = qs("a", card);

  return link.href;
};
