define(["exports", "core/utils"], function (_exports, _utils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.run = run;
  _exports.name = void 0;
  const name = "ims/style";
  _exports.name = name;

  async function attachMetaViewport() {
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

  async function run(conf) {
    await attachMetaViewport(); //IMS canonical location

    var cssURL = "https://purl.imsglobal.org/spec/ims-base.css";

    if (conf.overrideCSSLocation) {
      cssURL = conf.overrideCSSLocation;
    }

    (0, _utils.linkCSS)(document, cssURL);
  }
});
//# sourceMappingURL=style.js.map