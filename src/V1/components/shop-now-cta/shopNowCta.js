import { qsa } from "../../../helpers/querySelectors";

export default () => {
  const cards = qsa(".p-item a .p-item-container");

  cards.forEach(insertCta);
};

const insertCta = (card) => {
  const ctaTemplate = `<div role='button' class='HYD-shop-now-cta'>Shop now</div>`;

  card.insertAdjacentHTML("beforeend", ctaTemplate);
};
