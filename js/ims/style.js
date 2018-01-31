define(["exports", "core/utils", "core/pubsubhub"], function (exports, _utils, _pubsubhub) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.name = undefined;
  exports.run = run;
  const name = exports.name = "ims/style";

  // function attachFixupScript(doc) {
  //   const script = doc.createElement("script");
  //   script.addEventListener(
  //     "load",
  //     function() {
  //       if (window.location.hash) {
  //         window.location = window.location;
  //       }
  //     },
  //     { once: true }
  //   );
  //   //TODO IMS canonical location
  //   script.src = "../js/fixup.js";
  //   doc.body.appendChild(script);
  // }

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

    //attachFixupScript(doc);  
    attachMetaViewport(doc);
    //TODO IMS canonical location
    (0, _utils.linkCSS)(doc, "../css/ims-base.css");
    cb();
  }
});
//# sourceMappingURL=style.js.map