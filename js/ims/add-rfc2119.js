define(["exports", "core/pubsubhub", "ims/utils"], function (exports, _pubsubhub, _utils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.name = undefined;
  exports.run = run;
  const name = exports.name = "ims/add-rfc2119";

  function run(conf, doc, cb) {

    if (conf.specType !== "errata") {

      var confH = doc.getElementById('conformance');
      if (!confH) {
        confH = doc.getElementById('conformance-statements');
      }
      console.log("==>" + confH.tagName);
      //if we are at the section, get the heading
      if (confH.tagName == 'SECTION') {
        confH = confH.querySelector("h1, h2, h3, h4, h5, h6");
        if (!confH) {
          (0, _pubsubhub.pub)("error", "No heading found in conformance section");
        }
      }

      if (!confH) {
        (0, _pubsubhub.pub)("error", "No conformance section found (id='conformance')");
      }

      if (!conf.specNature) {
        (0, _pubsubhub.pub)("error", "Document must have config.specNature set");
      }

      let content;
      if (conf.specNature === "normative") {
        content = getNormativeText(conf);
      } else if (conf.specNature === "informative") {
        content = getInformativeText(conf);
      }

      content.forEach(function (element) {
        if (confH.nextSibling) {
          confH.parentNode.insertBefore(element, confH.nextSibling);
        } else {
          confH.parentNode.appendChild(element);
        }
      });
    }
    cb();
  }

  function getNormativeText(conf) {
    var p1 = document.createElement("p");
    p1.appendChild(document.createTextNode("All sections marked as non-normative, all authoring guidelines, " + "diagrams, examples, and notes in this specification are non-normative. " + "Everything else in this specification is normative."));
    var p2 = document.createElement("p");
    p2.appendChild(document.createTextNode(`The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", 
    "SHOULD NOT", "RECOMMENDED", "MAY", and "OPTIONAL" in this document are to 
    be interpreted as described in [[!RFC2119]].`));

    var p3 = (0, _utils.toHTMLNode)(`<p>An implementation of this specification that fails to 
    implement a MUST/REQUIRED/SHALL requirement or fails to abide by a 
    MUST NOT/SHALL NOT prohibition is considered nonconformant. 
    SHOULD/SHOULD NOT/RECOMMENDED statements constitute a best practice. 
    Ignoring a best practice does not violate conformance but a decision to 
    disregard such guidance should be carefully considered. 
    MAY/OPTIONAL statements indicate that implementers are entirely free to 
    choose whether or not to implement the option.</p>`);

    var p4 = (0, _utils.toHTMLNode)(`<p>The <a href='#document-set'>Conformance and Certification Guide</a> for this 
  specification may introduce greater normative constraints than those defined 
  here for specific service or implementation categories.</p>`);

    return [p4, p3, p2, p1];
  }

  function getInformativeText(conf) {
    if (!conf.mainSpecTitle) {
      (0, _pubsubhub.pub)("warning", "No mainSpecTitle property found in config')");
    }
    if (!conf.mainSpecTitle) {
      (0, _pubsubhub.pub)("warning", "No mainSpecBiblioKey property found in config')");
    }
    var p1 = document.createElement("p");
    p1.appendChild(document.createTextNode("This document is an informative resource in the Document Set of the " + conf.mainSpecTitle + " specification [[!" + conf.mainSpecBiblioKey + "]]. As such, it does not " + "include any normative requirements. Occurrences in this document of terms " + "such as MAY, MUST, MUST NOT, SHOULD or RECOMMENDED have no impact on the " + "conformance critera for implementors of this specification."));

    return [p1];
  }
});
//# sourceMappingURL=add-rfc2119.js.map