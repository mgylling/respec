define(["exports", "core/pubsubhub", "ims/utils"], function (exports, _pubsubhub, _utils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.name = undefined;
  exports.run = run;
  const name = exports.name = "ims/tooltips";

  function run(conf, doc, cb) {

    doc.body.appendChild((0, _utils.toHTMLNode)(`<script src='https://unpkg.com/tippy.js@2.5.4/dist/tippy.all.min.js'></script>`));
    doc.body.appendChild((0, _utils.toHTMLNode)(`<script>tippy('[title]')</script>`));

    cb();
  }
});
//# sourceMappingURL=tooltips.js.map