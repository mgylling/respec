import { toKeyValuePairs, createResourceHint, linkCSS } from "core/utils";
import { pub } from "core/pubsubhub";

export const name = "ims/style";

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
  attachMetaViewport(doc);
  //IMS canonical location
  var cssURL = "https://purl.imsglobal.org/spec/ims-base.css"  
  if(conf.overrideCSSLocation) {
    cssURL = conf.overrideCSSLocation;
  }
  linkCSS(doc, cssURL);
  cb();
}
