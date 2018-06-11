import { pub } from "core/pubsubhub";
import { toHTMLNode } from "ims/utils";

export const name =  "ims/link-here";

export function run(conf, doc, cb) {
    
    var sections = document.querySelectorAll("section:not(.introductory)");
    for (var i = 0; i < sections.length; i++) {
      var h = sections[i].querySelector("h1, h2, h3, h4, h5, h6");
      //console.log(h.textContent);
      var link = toHTMLNode(`<span class="link-here"><a class="hidden-reveal" 
        title="link here" href="#${h.id}">&nbsp;</a>&nbsp;</span>`);
      
      h.insertAdjacentElement('afterbegin', link);
      //console.log(link);
    }

    cb();
}