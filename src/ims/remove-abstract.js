
export const name = "ims/remove-abstract";

export function run(conf, doc, cb) {
  
  //if we have a temp abstract, remove it
  //id='abstract' class="ims-temp-abstract"
  var abstract = doc.getElementById('abstract');
  if(abstract && abstract.classList.contains('ims-temp-abstract')) {
    abstract.parentElement.removeChild(abstract);
  }        
  
  cb();
}
