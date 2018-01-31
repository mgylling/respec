define(["exports", "core/pubsubhub"], function (exports, _pubsubhub) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.name = undefined;
  exports.toHTMLNodes = toHTMLNodes;
  const name = exports.name = "ims/utils"; /*jshint browser: true */

  function toHTMLNodes(string) {
    var element = document.createElement('div');
    element.innerHTML = string;
    return element.childNodes;
  }
});
//# sourceMappingURL=utils.js.map