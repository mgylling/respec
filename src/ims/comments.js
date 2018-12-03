import { pub } from "core/pubsubhub";

export const name = "ims/comments";

export function run(conf, doc, cb) {
  //remove all document comment nodes

  var nodeIterator = doc.createNodeIterator(
      doc.documentElement,
      NodeFilter.SHOW_COMMENT
  );
  var comments = [];
  var currentNode;

  while (currentNode = nodeIterator.nextNode()) {
    comments.push(currentNode);
  }

  comments.forEach(function(comment) {
    comment.parentElement.removeChild(comment);
  });

  cb();
}
