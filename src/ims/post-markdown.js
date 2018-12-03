import { pub } from "core/pubsubhub";

export const name = "ims/post-markdown";

export function run(conf, doc, cb) {
  //post processing of markdown transcludes

  if(conf.format !== "markdown") return cb();

  //remove <md-only> elements
  var mdOnlies = doc.body.querySelectorAll("md-only");
  for (var i = 0; i < mdOnlies.length; i++) {
	  mdOnlies[i].parentNode.removeChild(mdOnlies[i]);
	}

  //find abstract and add class introductory
  var abstract = doc.body.querySelector("#abstract");
  if(abstract) {
    if(abstract.tagName.startsWith("H")) {
      abstract = abstract.parentNode;
      if(abstract.tagName === "SECTION") {
        if(!abstract.classList.contains("introductory")) {
          abstract.classList.add("introductory");
        }
      }
    }
  }

  cb();
}
