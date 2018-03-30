define(["exports", "core/pubsubhub"], function (exports, _pubsubhub) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.name = undefined;
  exports.run = run;
  const name = exports.name = "ims/cleanBody";

  /**
   * A snapshot-time body merciless script and inline css remover. Intended to
   * be used only by admins. The activators are conf.cleanBodyScripts, 
   * conf.cleanBodyCSS, alternatively conf.cleanBodyAll
   */
  function run(conf, doc, cb) {

    if (conf.cleanBodyAll || conf.cleanBodyScripts) {
      var scripts = doc.body.querySelectorAll("script");
      scripts.forEach(function (script) {
        script.parentNode.removeChild(script);
      });
    }

    if (conf.cleanBodyAll || conf.cleanBodyCSS) {
      var styleElems = doc.querySelectorAll("*[style]");
      styleElems.forEach(function (styleElem) {
        styleElem.removeAttribute("style");
      });
    }

    cb();
  }
});
//# sourceMappingURL=cleanBody.js.map