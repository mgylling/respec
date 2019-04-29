define(["exports", "core/pubsubhub", "ims/utils", "core/utils"], function (_exports, _pubsubhub, _utils, _utils2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.run = run;
  _exports.name = void 0;
  const name = "ims/admonitions";
  /*
  * Handles admonitions, adding a top bar and a11y attrs
  * Types currently supported:
  * aside.note
  * aside.ednote
  * aside.warning
  * aside.issue (will yield error if status is final, warning if CF)
  *
  * Alternate syntax is div.aside.note|warning|issue
  *
  * This replaces core/issues-notes.js, which has github features we can't utilize
  * because of our non-open repos.
  */

  _exports.name = name;

  async function run(conf) {
    //check and warn for issue admons in late process stages
    var issues = document.body.querySelectorAll("aside.issue, div.aside.issue");

    if (issues.length > 0) {
      if (conf.specStatus == "IMS Final Release") {
        (0, _pubsubhub.pub)("error", "Issue asides must not be present when the status is 'IMS Final Release'");
      } else if (conf.specStatus == "IMS Candidate Final") {
        (0, _pubsubhub.pub)("warning", "Issue asides should not be present when the status is 'IMS Final Release'");
      }
    } //prep the output element


    var admons = document.body.querySelectorAll("aside.note, aside.ednote, aside.warning, aside.issue, " + " div.aside.note, div.aside.ednote div.aside.warning, div.aside.issue"); //console.log("admons length: " + admons.length);

    admons.forEach(aside => {
      var type = getAdmonType(aside);
      aside.setAttribute("role", "note");
      aside.classList.add("admonition");

      if (!aside.hasAttribute("id")) {
        (0, _utils2.addId)(aside);
      }

      var topBar = (0, _utils.toHTMLNode)("<div class='admon-top'>".concat(type, "</div>"));
      topBar.classList.add(type + "-title");
      aside.insertAdjacentElement('afterbegin', topBar);
    });
  }

  function getAdmonType(aside) {
    if (aside.classList.contains('note')) {
      return "note";
    } else if (aside.classList.contains('warning')) {
      return "warning";
    } else if (aside.classList.contains('issue')) {
      return "issue";
    }

    return "info";
  }
});
//# sourceMappingURL=admonitions.js.map