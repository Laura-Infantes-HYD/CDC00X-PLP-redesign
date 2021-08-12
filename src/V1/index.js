import "./style.scss";
import pollForEl from "../helpers/pollForEl";
import _onLoad from "./components/_onLoad";
import pollForTrue from "../helpers/pollForTrue";
import qaCookieExists from "../helpers/qaCookieExists";
import getColours from "./services/product-colours.service";
import isIE from "../helpers/isIE";
import polyfillFetch from "../helpers/polyfillFetch";
import "whatwg-fetch";

// Test name to be added to ./style.scss and testName variable below
const testName = "CDC013"; // add test name here

//Uncomment the following lines to run peview links:
pollForTrue(() => {
  return qaCookieExists(testName);
}).then(() => {
  pollForEl(".CDC002").then(init);
});

// Comment the following line to run peview links:
//pollForEl(".CDC002").then(init);

async function init() {
  const testAlreadyLoaded = document.body.classList.contains(testName);
  const errorMsg = "Test already loaded";

  if (testAlreadyLoaded) {
    console.warn(errorMsg);
    return;
  }

  //if (isIE()) polyfillFetch();

  document.body.classList.add(testName);

  _onLoad();
}
