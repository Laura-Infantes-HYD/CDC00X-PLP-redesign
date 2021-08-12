import isPaintsPLP from "../../helpers/isPaintsPLP";
import pollForEl from "../../helpers/pollForEl";
import colours from "./colour-swatches/colours";
import shopNowCta from "./shop-now-cta/shopNowCta";

export default () => {
  isPaintsPLP() && pollForEl(".p-item").then(colours);
  pollForEl(".p-item a").then(shopNowCta);
};
