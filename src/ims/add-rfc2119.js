import { pub } from "core/pubsubhub";

export const name =  "ims/add-rfc2119";

export function run(conf, doc, cb) {
  
  if(conf.specNature !== "errata") {    
    var confH = doc.getElementById('conformance'); //gets the heading element
    if(!confH) {
      pub("error", "No conformance section found (id='conformance')");
    }
    if(!conf.specNature) {
      pub("error", "Document must have config.specNature set");
    }
    
    let content;
    if(conf.specNature === "normative") {
      content = getNormativeText(conf);
    } else if(conf.specNature === "informative") {
      content = getInformativeText(conf);
    }   
            
    content.forEach(function(element) {
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
  p1.appendChild(document.createTextNode(
    "All sections marked as non-normative, all authoring guidelines, " +
    "diagrams, examples, and notes in this specification are non-normative. " +
    "Everything else in this specification is normative."
  ));
  var p2 = document.createElement("p");
  p2.appendChild(document.createTextNode(
    "The key words MAY, MUST, and MUST NOT " +
    "are to be interpreted as described in [[!RFC2119]]."       
  ));
      
  var p3 = document.createElement("p");
  p3.appendChild(document.createTextNode(
    "The Conformance Certification Guide for this specification " +
    "[[!" + conf.certGuideBiblioKey + "]] may introduce greater normative constraints " +
    "than those defined here for specific service or implementation " +
    "categories."       
  ));
    
  return [p3,p2,p1];
}

function getInformativeText(conf) {
  var p1 = document.createElement("p");
  p1.appendChild(document.createTextNode(
    "This document is an informative resource in the Document Set of the " +
    conf.mainSpecNiceName + " specification [[!" + conf.mainSpecBiblioKey + 
    "]]. As such, it does not " +
    "include any normative requirements. Occurrences in this document of words " +
    "such as MAY, MUST, MUST NOT, SHOULD or RECOMMENDED have no impact on the " +
    "conformance critera for implementors of this specification."      
  ));
  
    
  return [p1];
}