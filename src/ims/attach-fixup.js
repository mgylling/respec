import { toKeyValuePairs, createResourceHint, linkCSS } from "core/utils";
import { pub } from "core/pubsubhub";
export const name = "ims/style";

function attachFixupScript(doc, conf) {
  
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
  var fixupURL = "../js/fixup.js";
  if(conf.overrideFixupLocation) {
    fixupURL = conf.overrideFixupLocation;
  }
  script.src = fixupURL;
  doc.body.appendChild(script);
}

export function run(conf, doc, cb) {    
  attachFixupScript(doc, conf);  
  cb();
}
