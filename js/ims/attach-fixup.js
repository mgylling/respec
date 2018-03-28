define(["exports", "core/utils", "core/pubsubhub"], function (exports, _utils, _pubsubhub) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.name = undefined;
  exports.run = run;
  const name = exports.name = "ims/style";

  function attachFixupScript(doc, conf) {

    const script = doc.createElement("script");
    script.addEventListener("load", function () {
      if (window.location.hash) {
        window.location = window.location;
      }
    }, { once: true });

    //IMS canonical location  
    var fixupURL = "https://purl.imsglobal.org/spec/fixup.js";
    if (conf.overrideFixupLocation) {
      fixupURL = conf.overrideFixupLocation;
    }
    script.src = fixupURL;
    doc.body.appendChild(script);
  }

  function run(conf, doc, cb) {
    attachFixupScript(doc, conf);
    cb();
  }
});
//# sourceMappingURL=attach-fixup.js.map