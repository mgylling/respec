define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.run = run;
  _exports.name = void 0;
  const name = "ims/scripts";
  _exports.name = name;

  function attachScript(url) {
    const script = document.createElement("script");
    script.type = 'text/javascript';
    script.addEventListener("load", function () {
      //console.log("loading " + url + content);
      if (window.location.hash) {
        window.location = window.location;
      }
    }, {
      once: true
    });
    script.src = url;
    document.body.appendChild(script);
  }

  async function run(conf) {
    if (!conf.noSideBarTOC) {
      //IMS canonical location
      var fixupURL = "https://purl.imsglobal.org/spec/fixup.js";

      if (conf.overrideFixupLocation) {
        fixupURL = conf.overrideFixupLocation;
      }

      attachScript(fixupURL);
    } else {
      document.body.className += " toc-inline";
    }
  }
});
//# sourceMappingURL=scripts.js.map