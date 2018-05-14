import { pub } from "core/pubsubhub";
import { toHTMLNode } from "ims/utils";

export const name =  "ims/contributors";

export function run(conf, doc, cb) {
  
  if(conf.specType !== "errata") {
    var useRoles = hasRoles(conf.contributors);
    var contrib = toHTMLNode(`<section id='contributors' class="appendix">
    <h2>List of Contributors</h2>
    <p>The following individuals contributed to the development of this document:</p>
    <table class="contributors" title="List of Contributors" 
      summary="The list of contributors to this work.">
      <thead>
        <th>Name</th>
        <th>Company</th>
        ${useRoles ? `<th>Role</th>` : ``}
      </thead>
      <tbody>
          ${personsToTableRows(conf.contributors)}
      </tbody>
    </table>   
    </section>`);    
    doc.body.appendChild(contrib);
  }  

  cb();
}

function personsToTableRows(arr) {
  //use incoming sort
  var ret = "";
  arr.forEach(function (entry) {
    ret += "<tr><td class='name'>" + entry.name + "</td>";
    ret += "<td class='co'>";
    if (entry.company) ret += entry.company;
    ret += "</td>";
    ret += "<td class='role'>";
    if (entry.role) ret += entry.role;
    ret += "</td>"
    ret +="</tr>";
  });
  return ret;
}

function hasRoles(arr) {  
  var hasRoles = false;  
  arr.forEach(function (entry) {        
    if (entry.role && entry.role.trim().length > 0) {      
      hasRoles = true; 
    } 
  });
  return hasRoles;
}  