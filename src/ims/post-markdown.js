//@ts-check
export const name = "ims/post-markdown";

/**
 * Post processing of markdown transcludes. Run after markkdown.
 * 
 * @param {*} conf respecConfig
 */
export async function run(conf) {

  if(conf.format !== "markdown") return;

  //remove <md-only> elements
  var mdOnlies = document.body.querySelectorAll("md-only");
  for (var i = 0; i < mdOnlies.length; i++) {
	  mdOnlies[i].parentNode.removeChild(mdOnlies[i]);
	}

  //find abstract and add class introductory
  var abstract = document.body.querySelector("#abstract");
  if(abstract) {
    if(abstract.tagName.startsWith("H")) {
      abstract = abstract.parentElement;
    }
    if(abstract.tagName === "SECTION") {
      if(!abstract.classList.contains("introductory")) {
        abstract.classList.add("introductory");
      }
    }
  }
}
