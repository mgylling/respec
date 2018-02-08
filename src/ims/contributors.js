import { pub } from "core/pubsubhub";

export const name =  "ims/contributors";

export function run(conf, doc, cb) {
  
  if(conf.specNature !== "errata") {
  var contrib = toElement(`<section id='contributors' class="appendix">
    <h2>List of Contributors</h2>
    <p>The following individuals contributed to the development of this document:</p>
    <table class="contributors" title="List of Contributors" 
      summary="The list of contributors to this work.">
      <tbody>
          ${personsToTableRows(conf.contributors)}
      </tbody>
    </table>
    </section>`);    
    doc.body.appendChild(contrib);
  }  

  cb();
}

function toElement(html) {
  var element = document.createElement('div');
  element.innerHTML = html;
  return element.children[0];
}

function personsToTableRows(arr) {
  //TODO sort array? or use incoming sort
  var ret = "";
  arr.forEach(function (entry) {
    ret += "<tr><td class='name'>" + entry.name + "</td>";
    if (entry.company) ret += "<td class='co'>" + entry.company + "</td>";
    if (entry.role) ret += "<td class='role'>" + entry.role + "</td>";      
    ret +="</tr>";
  });
  return ret;
}