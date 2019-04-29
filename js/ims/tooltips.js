define(["exports", "ims/utils"], function (_exports, _utils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.run = run;
  _exports.name = void 0;
  const name = "ims/tooltips";
  _exports.name = name;

  async function run(conf) {
    document.body.appendChild((0, _utils.toHTMLNode)("<script src='https://unpkg.com/tippy.js@2.5.4/dist/tippy.all.min.js'></script>"));
    document.body.appendChild((0, _utils.toHTMLNode)("<script>tippy('[title]')</script>"));
  }
});
//# sourceMappingURL=tooltips.js.map