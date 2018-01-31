define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.run = run;
  const name = exports.name = "ims/remove-abstract";

  function run(conf, doc, cb) {

    //if we have a temp abstract, remove it
    //id='abstract' class="ims-temp-abstract"
    var abstract = doc.getElementById('abstract');
    if (abstract && abstract.classList.contains('ims-temp-abstract')) {
      abstract.parentElement.removeChild(abstract);
    }

    cb();
  }
});
//# sourceMappingURL=remove-abstract.js.map