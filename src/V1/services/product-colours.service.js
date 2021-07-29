const getColours = async (url) => {
    const page = await getProductPage(url)
    const colours = extractColours(page)

    return colours
};

const getProductPage = async (url) => {
  const prodPage = await fetch(url, reqOptions).then((response) => {
    return response.text();
  });
  
  return toHTML(prodPage);
};

const toHTML = (string)=>{
    let div = document.createElement('div')
    div.innerHTML = string

    return div
}

const extractColours = (prodPageHtml)=>{
    const dataContainingDiv = prodPageHtml.querySelector('page > div');
    const coloursData = dataContainingDiv.getAttribute('colours');
    const colours = JSON.parse(coloursData)

    return colours
}

const reqOptions = (() => {
  return {
    headers: {
      accept:
        "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
      "cache-control": "no-cache",
      pragma: "no-cache",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "document",
      "sec-fetch-mode": "navigate",
      "sec-fetch-site": "same-origin",
      "sec-fetch-user": "?1",
      "upgrade-insecure-requests": "1",
    },
    referrerPolicy: "strict-origin-when-cross-origin",
    body: null,
    method: "GET",
    mode: "cors",
    credentials: "include",
  };
})();

export default getColours;
