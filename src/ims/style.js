import { toKeyValuePairs, createResourceHint, linkCSS } from "core/utils";
import { pub, sub } from "core/pubsubhub";
export const name = "ims/style";

// function attachFixupScript(doc) {
//   const script = doc.createElement("script");
//   script.addEventListener(
//     "load",
//     function() {
//       if (window.location.hash) {
//         window.location = window.location;
//       }
//     },
//     { once: true }
//   );
//   //TODO IMS canonical location
//   script.src = "../js/fixup.js";
//   doc.body.appendChild(script);
// }

function attachMetaViewport(doc) {
  const meta = document.createElement("meta");
  meta.name = "viewport";
  const contentProps = {
    width: "device-width",
    "initial-scale": "1",
    "shrink-to-fit": "no",
  };
  meta.content = toKeyValuePairs(contentProps).replace(/\"/g, "");
  document.head.insertBefore(meta, document.head.firstChild);
}

export function run(conf, doc, cb) {    
  
  //attachFixupScript(doc);  
  attachMetaViewport(doc);
  //TODO IMS canonical location
  linkCSS(doc, "../css/ims-base.css");
  cb();
}
