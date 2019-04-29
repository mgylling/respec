define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.run = run;
  _exports.name = void 0;
  const name = "ims/comments";
  _exports.name = name;

  async function run(conf) {
    //remove all document comment nodes
    var nodeIterator = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_COMMENT);
    var comments = [];
    var currentNode;

    while (currentNode = nodeIterator.nextNode()) {
      comments.push(currentNode);
    }

    comments.forEach(function (comment) {
      comment.parentElement.removeChild(comment);
    });
  }
});
//# sourceMappingURL=comments.js.map