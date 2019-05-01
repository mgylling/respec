//@ts-check

export const name = "ims/comments";

/**
 * Remove all comment nodes.
 * 
 * @param {*} conf 
 */
export async function run(conf) {

  var nodeIterator = document.createNodeIterator(
      document.documentElement,
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

}
