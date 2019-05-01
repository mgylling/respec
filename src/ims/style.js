//@ts-check

import { toKeyValuePairs, linkCSS } from "../core/utils";

export const name = "ims/style";

async function attachMetaViewport() {
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

export async function run(conf) {        
  await attachMetaViewport();
  //IMS canonical location
  var cssURL = "https://purl.imsglobal.org/spec/ims-base.css"  
  if(conf.overrideCSSLocation) {
    cssURL = conf.overrideCSSLocation;
  }
  linkCSS(document, cssURL);
}
