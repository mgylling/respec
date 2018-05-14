import { toKeyValuePairs, createResourceHint, linkCSS } from "core/utils";
import { pub } from "core/pubsubhub";
export const name = "ims/attach-scripts";

function attachScript(doc, dest, conf, url) {
  
  const script = doc.createElement("script");
  script.type = 'text/javascript';
  script.addEventListener(
    "load",
    function() {
      //console.log("loading " + url + content);
      if (window.location.hash) {
        window.location = window.location;
      }
    },
    { once: true }
  );  
  script.src = url;         
  dest.appendChild(script);
}

export function run(conf, doc, cb) {   
  
  if(!conf.noSideBarTOC) {
    //IMS canonical location  
    var fixupURL = "https://purl.imsglobal.org/spec/fixup.js";
    if(conf.overrideFixupLocation) {
      fixupURL = conf.overrideFixupLocation;
    }
    attachScript(doc, doc.body, conf, fixupURL);  
  } else {
    doc.body.className += " toc-inline";
  }  
    
  cb();
}
