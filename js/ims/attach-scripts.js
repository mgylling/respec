define(["exports", "core/utils", "core/pubsubhub"], function (exports, _utils, _pubsubhub) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.name = undefined;
  exports.run = run;
  const name = exports.name = "ims/attach-scripts";

  function attachScript(doc, dest, conf, url) {

    const script = doc.createElement("script");
    script.type = 'text/javascript';
    script.addEventListener("load", function () {
      //console.log("loading " + url + content);
      if (window.location.hash) {
        window.location = window.location;
      }
    }, { once: true });
    script.src = url;
    dest.appendChild(script);
  }

  function run(conf, doc, cb) {

    if (!conf.noSideBarTOC) {
      //IMS canonical location  
      var fixupURL = "https://purl.imsglobal.org/spec/fixup.js";
      if (conf.overrideFixupLocation) {
        fixupURL = conf.overrideFixupLocation;
      }
      attachScript(doc, doc.body, conf, fixupURL);
    } else {
      doc.body.className += " toc-inline";
    }

    cb();
  }
});
//# sourceMappingURL=attach-scripts.js.map