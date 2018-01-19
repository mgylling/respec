define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.run = run;
  exports.name = "ims/add-rfc2119";

  

  function run(conf, doc, cb) {
    var confH = doc.getElementById('conformance').children[0];
    var p1 = document.createElement("p");
    p1.appendChild(document.createTextNode(
      "All sections marked as non-normative, all authoring guidelines, " +
      "diagrams, examples, and notes in this specification are non-normative. " +
      "Everything else in this specification is normative."
    ));
    var p2 = document.createElement("p");
    p2.appendChild(document.createTextNode(
      "The key words MAY, MUST, MUST NOT, RECOMMENDED, SHOULD, and SHOULD NOT " +
      "are to be interpreted as described in [[!RFC2119]]."       
    ));
        
    var p3 = document.createElement("p");
    p3.appendChild(document.createTextNode(
      "The Conformance Certification Guide for this specification " +
      "[[!" + conf.certGuideShortName + "]] may introduce greater normative constraints " +
      "than those defined here for specific service or implementation " +
      "categories."       
    ));
      
    var ps = [p3,p2,p1];
    
    ps.forEach(function(element) {
      if (confH.nextSibling) {
          confH.parentNode.insertBefore(element, confH.nextSibling);
      } else {
          confH.parentNode.appendChild(element);
      }  
    });
    
    
    
  
    cb();
  }
});
//# sourceMappingURL=remove-abstract.js.map