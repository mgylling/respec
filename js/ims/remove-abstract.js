define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.run = run;

  //adds the IMS default header elements

  function run(conf, doc, cb) {
    var abstract = doc.getElementById('abstract');
    abstract.parentElement.removeChild(abstract);
    cb();
  }
});
//# sourceMappingURL=remove-abstract.js.map