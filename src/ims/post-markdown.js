//@ts-check

import { pub } from "../core/pubsubhub";

export const name = "ims/post-markdown";

export async function run(conf) {
  //post processing of markdown transcludes

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
      abstract = abstract.parentNode;
      if(abstract.tagName === "SECTION") {
        if(!abstract.classList.contains("introductory")) {
          abstract.classList.add("introductory");
        }
      }
    }
  }
}
