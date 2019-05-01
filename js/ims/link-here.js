define(["exports", "../ims/utils"], function (_exports, _utils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.run = run;
  _exports.name = void 0;
  //@ts-check
  const name = "ims/link-here";
  /**
   * 
   * 
   * @param {*} conf 
   */

  _exports.name = name;

  async function run(conf) {
    var sections = document.querySelectorAll("section:not(.introductory)");

    for (var i = 0; i < sections.length; i++) {
      var h = sections[i].querySelector("h1, h2, h3, h4, h5, h6");
      if (h == undefined) continue; //console.log(h.textContent);

      var link = (0, _utils.toHTMLNode)("<span class=\"link-here\"><a class=\"hidden-reveal\" \n        title=\"link here\" href=\"#".concat(h.id, "\">&nbsp;</a>&nbsp;</span>"));
      h.insertAdjacentElement('afterbegin', link); //console.log(link);
    }
  }
});
//# sourceMappingURL=link-here.js.map