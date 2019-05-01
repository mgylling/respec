//@ts-check

export const name = "ims/seo";

export async function run(conf) {

  var linkElem = document.createElement("link");
  linkElem.setAttribute("rel", "canonical");
  linkElem.setAttribute("href", conf.thisURL);
  document.head.appendChild(linkElem);
}
