//@ts-check
// Module ims/style
// Inserts the CSS that ReSpec uses into the document. Replaces core/style and w3c/style.
//
// Inserts two style sheets: 1) the main ReSpec stylesheet, and 2) the IMS stylesheet
// which has overrides for the standard ReSpec styles plus custom for things like the 
// "IMS Final Release" status.
// 
// This script also performs the other functions provided by core/style and w3c/style.
//
// CONFIGURATION
// - overrideCSSLocation: by default ims-base.css will be loaded from
//   https://purl.imsglobal.org/spec/ims-base.css
// - overrideReSpecCSSLocation: by default respec-all.css will be loaded from
//   https://purl.imsglobal.org/spec/respec-all.css

import { toKeyValuePairs, linkCSS } from "../core/utils";

export const name = "ims/style";

/**
 * From w3c/style...
 * 
 * Make a best effort to attach meta viewport at the top of the head.
 * Other plugins might subsequently push it down, but at least we start
 * at the right place. When ReSpec exports the HTML, it again moves the
 * meta viewport to the top of the head - so to make sure it's the first
 * thing the browser sees. See js/ui/save-html.js.
 */
function attachMetaViewport() {
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

  attachMetaViewport();

  // W3C base styles
  var w3cCssURL = "https://www.w3.org/StyleSheets/TR/2016/base.css";

  // Highlight styles
  var highlightCssURL = "https://purl.imsglobal.org/spec/github.css";
  if (conf.overrideHighlightCSSLocation) {
    highlightCssURL = conf.overrideHighlightCSSLocation;
  }

  // ReSpec styles
  var respecCssURL = "https://purl.imsglobal.org/spec/respec2.css" ;
  if(conf.overrideReSpecCSSLocation) {
    respecCssURL = conf.overrideReSpecCSSLocation;
  }

  // IMS overrides
  var cssURL = "https://purl.imsglobal.org/spec/ims-base.css"  
  if(conf.overrideCSSLocation) {
    cssURL = conf.overrideCSSLocation;
  }

  //linkCSS(document, respecCssURL);
  linkCSS(document, w3cCssURL);
  linkCSS(document, highlightCssURL);
  linkCSS(document, respecCssURL);
  linkCSS(document, cssURL);
}
