define(["exports", "core/utils", "core/pubsubhub"], function (exports, _utils, _pubsubhub) {
  "use strict";

  /*
  IMS TODO
  IMS doesnt have different styles for different maturity levels, 
  so most of this can go away
  */

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.name = undefined;
  exports.run = run;
  /*jshint strict: true, browser:true, jquery: true*/
  /*globals define*/
  // Module w3c/style
  // Inserts a link to the appropriate W3C style for the specification's maturity level.
  // CONFIGURATION
  //  - specStatus: the short code for the specification's maturity level or type (required)

  const name = exports.name = "ims/style";

  function attachFixupScript(doc) {
    const script = doc.createElement("script");
    script.addEventListener("load", function () {
      if (window.location.hash) {
        window.location = window.location;
      }
    }, { once: true });
    //IMS TODO add canonical reference to script
    script.src = `../js/fixup.js`;
    doc.body.appendChild(script);
  }

  // Make a best effort to attach meta viewport at the top of the head.
  // Other plugins might subsequently push it down, but at least we start
  // at the right place. When ReSpec exports the HTML, it again moves the
  // meta viewport to the top of the head - so to make sure it's the first
  // thing the browser sees. See js/ui/save-html.js.
  function createMetaViewport() {
    const meta = document.createElement("meta");
    meta.name = "viewport";
    const contentProps = {
      width: "device-width",
      "initial-scale": "1",
      "shrink-to-fit": "no"
    };
    meta.content = (0, _utils.toKeyValuePairs)(contentProps).replace(/\"/g, "");
    return meta;
  }
  
  function createResourceHints() {    
    const resourceHints = [
    {
      hint: "preload", // all specs need it, and we attach it on end-all.
      //IMS TODO add canonical script url
      href: "https://www.imsglobal.org/scripts/fixup.js",
      as: "script"
    }].map(_utils.createResourceHint).reduce(function (frag, link) {
      frag.appendChild(link);
      return frag;
    }, document.createDocumentFragment());
    return resourceHints;
  }
  // // Collect elements for insertion (document fragment)
  // const elements = createResourceHints();
  // 
  // if (!document.head.querySelector("meta[name=viewport]")) {
  //   // Make meta viewport the first element in the head.
  //   elements.insertBefore(createMetaViewport(), elements.firstChild);
  // }

  // document.head.insertBefore(elements, document.head.firstChild);

  document.head.insertBefore(createMetaViewport(), document.head.firstChild);
  //IMS TODO add resource hint for fixup above

  function run(conf, doc, cb) {
    
    if (!conf.noToc) {
      (0, _pubsubhub.sub)("end-all", function () {
        attachFixupScript(doc);
      }, { once: true });
    }
    //const finalVersionPath = version ? version + "/" : "";
    //const finalStyleURL = `https://www.w3.org/StyleSheets/TR/${finalVersionPath}${styleFile}`;
        
    // IMS TODO add URL of canonical CSS location
    const finalStyleURL = `../css/ims-base.css`;

    (0, _utils.linkCSS)(doc, finalStyleURL);
    cb();
  }
});
//# sourceMappingURL=style.js.map