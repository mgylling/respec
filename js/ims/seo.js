define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.run = run;
  _exports.name = void 0;
  const name = "ims/seo";
  _exports.name = name;

  async function run(conf) {
    var linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "canonical");
    linkElem.setAttribute("href", conf.thisURL);
    document.head.appendChild(linkElem);
  }
});
//# sourceMappingURL=seo.js.map