define(["exports", "core/pubsubhub"], function (exports, _pubsubhub) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.name = undefined;
  exports.run = run;
  const name = exports.name = "ims/md-bugfix";

  /**
   * Fix markdown bugs. Temp workaround, remove once migrated to 2018 version
   */
  function run(conf, doc, cb) {

    //replace :::ASTERISK::: with *
    var arr = textNodesUnder(doc.body);
    for (var i = 0; i < arr.length; i++) {
      var textNode = arr[i];
      if (textNode.textContent.includes(":::asterisk:::")) {
        var newNode = doc.createTextNode(textNode.textContent.replace(":::asterisk:::", '*'));
        textNode.parentNode.replaceChild(newNode, textNode);
      }
    }

    //kill double br's before a table
    var brs = doc.body.querySelectorAll("br");
    for (var i = 0; i < brs.length; i++) {
      var br = brs[i];

      var nextSibling = br.nextElementSibling;
      if (nextSibling == null) {
        continue;
      }

      var nextNextSibling = nextSibling.nextElementSibling;
      if (nextNextSibling == null) {
        continue;
      }

      if (nextSibling.nodeName == "BR" && nextNextSibling.nodeName == "TABLE") {
        br.classList.add("remove");
        nextSibling.classList.add("remove");
      }
    }

    cb();
  }

  function textNodesUnder(elem) {
    var n,
        a = [],
        walk = document.createTreeWalker(elem, NodeFilter.SHOW_TEXT, null, false);
    while (n = walk.nextNode()) a.push(n);
    return a;
  }
});
//# sourceMappingURL=md-bugfix.js.map