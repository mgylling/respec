define(["exports", "core/pubsubhub"], function (exports, _pubsubhub) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.name = undefined;
  exports.run = run;
  const name = exports.name = "ims/seo";

  function run(conf, doc, cb) {

    var linkElem = doc.createElement("link");
    linkElem.setAttribute("rel", "canonical");
    linkElem.setAttribute("href", conf.thisURL);
    doc.head.appendChild(linkElem);

    cb();
  }
});
//# sourceMappingURL=seo.js.map