import { pub } from "core/pubsubhub";
import { toHTMLNode } from "ims/utils";

export const name = "ims/tooltips";

export function run(conf, doc, cb) {

  doc.body.appendChild(toHTMLNode(
    `<script src='https://unpkg.com/tippy.js@2.5.4/dist/tippy.all.min.js'></script>`
  ));
  doc.body.appendChild(toHTMLNode(`<script>tippy('[title]')</script>`));

  cb();

}
