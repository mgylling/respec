export const name = "ims/utils";

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
