define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.run = run;
  _exports.name = void 0;
  //@ts-check
  const name = "ims/cleanBody";
  /**
   * A snapshot-time body merciless script and inline css remover. Intended to
   * be used only by admins. The activators are conf.cleanBodyScripts,
   * conf.cleanBodyCSS, alternatively conf.cleanBodyAll
   * 
   * @param {*} conf
   */

  _exports.name = name;

  async function run(conf) {
    if (conf.cleanBodyAll || conf.cleanBodyScripts) {
      var scripts = document.body.querySelectorAll("script");
      scripts.forEach(function (script) {
        script.parentNode.removeChild(script);
      });
    }

    if (conf.cleanBodyAll || conf.cleanBodyCSS) {
      var styleElems = document.querySelectorAll("*[style]");
      styleElems.forEach(function (styleElem) {
        styleElem.removeAttribute("style");
      });
    }
  }
});
//# sourceMappingURL=cleanBody.js.map