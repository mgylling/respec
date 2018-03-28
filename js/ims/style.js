define(["exports", "core/utils", "core/pubsubhub"], function (exports, _utils, _pubsubhub) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.name = undefined;
  exports.run = run;
  const name = exports.name = "ims/style";

  function attachMetaViewport(doc) {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    const contentProps = {
      width: "device-width",
      "initial-scale": "1",
      "shrink-to-fit": "no"
    };
    meta.content = (0, _utils.toKeyValuePairs)(contentProps).replace(/\"/g, "");
    document.head.insertBefore(meta, document.head.firstChild);
  }

  function run(conf, doc, cb) {
    attachMetaViewport(doc);
    //IMS canonical location
    var cssURL = "https://purl.imsglobal.org/spec/ims-base.css";
    if (conf.overrideCSSLocation) {
      cssURL = conf.overrideCSSLocation;
    }
    (0, _utils.linkCSS)(doc, cssURL);
    cb();
  }
});
//# sourceMappingURL=style.js.map