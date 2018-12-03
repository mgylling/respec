define(["exports", "core/utils", "core/pubsubhub", "ims/utils"], function (exports, _utils, _pubsubhub, _utils2) {
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

    attachScript(doc, doc.head, conf, "https://cdnjs.cloudflare.com/ajax/libs/tippy.js/2.5.4/tippy.min.js");

    doc.body.appendChild((0, _utils2.toHTMLNode)(`<script>tippy('[title]')</script>`));

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
//# sourceMappingURL=scripts0.js.map