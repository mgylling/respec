define(["exports", "core/utils", "core/pubsubhub"], function (exports, _utils, _pubsubhub) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.name = undefined;
  exports.run = run;
  const name = exports.name = "ims/style";

  function attachFixupScript(doc) {

    const script = doc.createElement("script");
    script.addEventListener("load", function () {
      if (window.location.hash) {
        window.location = window.location;
      }
    }, { once: true });
    //TODO IMS canonical location
    script.src = "../js/fixup.js";
    doc.body.appendChild(script);
  }

  function run(conf, doc, cb) {
    attachFixupScript(doc);
    cb();
  }
});
//# sourceMappingURL=attach-fixup.js.map