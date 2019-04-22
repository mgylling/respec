export const name = "ims/comments";

export async function run(conf) {
  //remove all document comment nodes

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
