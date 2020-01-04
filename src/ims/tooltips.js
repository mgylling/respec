//@ts-check

import { toHTMLNode } from "../ims/utils.js";

export const name = "ims/tooltips";

export async function run(conf) {

  document.body.appendChild(toHTMLNode(
    `<script src='https://unpkg.com/tippy.js@2.5.4/dist/tippy.all.min.js'></script>`
  ));
  document.body.appendChild(toHTMLNode(`<script>tippy('[title]')</script>`));

}
