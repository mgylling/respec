//@ts-check
import { pub } from "../core/pubsubhub";
import { toHTMLNode } from "../ims/utils";

export const name =  "ims/abstract";

/**
 * Handles checking for the abstract, and inserts a temp one if not present.
 * 
 * @param {*} conf respecConfig
 */
export async function run(conf) {

  var abstract = document.querySelector("#abstract");
  if(abstract === null) {
      pub("warn", "No abstract found. Consider adding a section element with an "
      + "id of 'abstract'");
      //insert a temp abstract
      var tempAbstract = toHTMLNode("<section id='abstract' class='introductory remove'><h2>h</h2></section>");
      document.body.prepend(tempAbstract);
  }

}
