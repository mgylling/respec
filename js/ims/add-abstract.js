define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  const name = exports.name = "ims/add-abstract";

  function run(conf, doc, cb) {

    //insert a temporary abstract if none is present in the doc 
    //(e.g. erratas dont have abstracts)
    //this is needed for the overall script to work. 

    var abstract = doc.getElementById('abstract');
    if (!abstract) {
      var tempAbstract = toElement("<span id='abstract'>removed by script</span>");
      header.parentNode.insertBefore(tempAbstract, header.nextSibling);
    }

    cb();
  }

  function toElement(html) {
    var element = document.createElement('div');
    element.innerHTML = html;
    return element;
  }
});
//# sourceMappingURL=add-abstract.js.map