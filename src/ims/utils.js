//@ts-check
export const name = "ims/utils";

/**
 * Returns the first Element in the string.
 * 
 * @param { string } string the HTML string to convert
 * @returns { Element } the first element in the string
 */
export function toHTMLElement(string) {
  var node = toHTMLNode(string);
  return node.parentElement.firstElementChild;
}

export function toHTMLNodes(string) {
  var element = document.createElement('div');
  element.innerHTML = string;
  return element.childNodes;
}

export function toHTMLNode(string) {
  var element = document.createElement('div');
  element.innerHTML = string;
  return element.childNodes[0];
}
