import { toKeyValuePairs, createResourceHint, linkCSS } from "core/utils";
import { pub, sub } from "core/pubsubhub";
export const name = "ims/style";

function attachFixupScript(doc) {
  
  const script = doc.createElement("script");
  script.addEventListener(
    "load",
    function() {
      if (window.location.hash) {
        window.location = window.location;
      }
    },
    { once: true }
  );
  //TODO IMS canonical location
  script.src = "../js/fixup.js";
  doc.body.appendChild(script);
}

export function run(conf, doc, cb) {    
  attachFixupScript(doc);  
  cb();
}
