import { pub } from "core/pubsubhub";
import { toHTMLNode } from "ims/utils";
import { addId } from "core/utils";

export const name =  "ims/abstract";

/*
* Handles checking for the abstract, and inserts a temp one if not present.
*/

export function run(conf, doc, cb) {

  var abstract = doc.querySelector("#abstract");
  if(abstract === null) {
      pub("warn", "No abstract found. Consider adding a section element with an "
      + "id of'abstract', a class of 'introductory' and a h2 child as the first child of the body");
      //insert a temp abstract
      var tempAbstract = toHTMLNode("<section id='abstract' class='introductory remove'><h2>h</h2></section>");
      doc.body.prepend(tempAbstract);
  }

  cb();
}
