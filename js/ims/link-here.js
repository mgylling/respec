define(["exports", "core/pubsubhub", "ims/utils"], function (exports, _pubsubhub, _utils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.name = undefined;
  exports.run = run;
  const name = exports.name = "ims/link-here";

  function run(conf, doc, cb) {

    var sections = document.querySelectorAll("section:not(.introductory)");
    for (var i = 0; i < sections.length; i++) {
      var h = sections[i].querySelector("h1, h2, h3, h4, h5, h6");
      if (h == undefined) continue;
      //console.log(h.textContent);
      var link = (0, _utils.toHTMLNode)(`<span class="link-here"><a class="hidden-reveal" 
        title="link here" href="#${h.id}">&nbsp;</a>&nbsp;</span>`);

      h.insertAdjacentElement('afterbegin', link);
      //console.log(link);
    }

    cb();
  }
});
//# sourceMappingURL=link-here.js.map