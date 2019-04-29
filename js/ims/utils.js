define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.toHTMLNodes = toHTMLNodes;
  _exports.toHTMLNode = toHTMLNode;
  _exports.name = void 0;
  const name = "ims/utils";
  _exports.name = name;

  function toHTMLNodes(string) {
    var element = document.createElement('div');
    element.innerHTML = string;
    return element.childNodes;
  }

  function toHTMLNode(string) {
    var element = document.createElement('div');
    element.innerHTML = string;
    return element.childNodes[0];
  }
});
//# sourceMappingURL=utils.js.map