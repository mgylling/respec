define(["exports", "core/pubsubhub", "ims/utils"], function (_exports, _pubsubhub, _utils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.run = run;
  _exports.name = void 0;
  const name = "ims/abstract";
  /*
  * Handles checking for the abstract, and inserts a temp one if not present.
  */

  _exports.name = name;

  async function run(conf) {
    var abstract = document.querySelector("#abstract");

    if (abstract === null) {
      (0, _pubsubhub.pub)("warn", "No abstract found. Consider adding a section element with an " + "id of'abstract', a class of 'introductory' and a h2 child as the first child of the body"); //insert a temp abstract

      var tempAbstract = (0, _utils.toHTMLNode)("<section id='abstract' class='introductory remove'><h2>h</h2></section>");
      document.body.prepend(tempAbstract);
    }
  }
});
//# sourceMappingURL=abstract.js.map