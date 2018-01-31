export const name = "ims/add-abstract";

export function run(conf, doc, cb) {  
  //insert a temporary abstract if none is present in the doc 
  //(e.g. erratas dont have abstracts)
  //this is needed for the overall script to work. 
  //later in the profile, it is removede again (remove-abstract.js)
  
  var abstract = doc.getElementById('abstract');
  if(!abstract) {
    var header = doc.body.getElementsByTagName('header')[0];
    var tempAbstract = toElement("<span id='abstract' class="ims-temp-abstract">removed later by script</span>");
    header.parentNode.insertBefore(tempAbstract, header.nextSibling);  
  }
  
  cb();
}

function toElement(html) {
  var element = document.createElement('div');
  element.innerHTML = html;
  return element;
}