define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.run = run;
  const name = exports.name = "ims/strip-comments";

  function run(conf, doc, cb) {

    var nodeIterator = doc.createNodeIterator(doc.documentElement, NodeFilter.SHOW_COMMENT);
    var comments = [];
    var currentNode;

    while (currentNode = nodeIterator.nextNode()) {
      comments.push(currentNode);
    }

    comments.forEach(function (comment) {
      comment.parentElement.removeChild(comment);
    });

    cb();
  }
});
//# sourceMappingURL=strip-comments.js.map