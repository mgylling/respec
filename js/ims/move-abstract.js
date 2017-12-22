define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.run = run;
  exports.name = "ims/move-abstract";

  //moves the abstract to come before the ipr in the header

  function run(conf, doc, cb) {
    var abstract = doc.getElementById('abstract');
    var ipr = doc.getElementById('ipr');
    ipr.parentElement.insertBefore(abstract, ipr);
    cb();
  }
});
//# sourceMappingURL=remove-abstract.js.map