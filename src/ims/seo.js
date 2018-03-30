import { pub } from "core/pubsubhub";
export const name = "ims/seo";

export function run(conf, doc, cb) {

  var linkElem = doc.createElement("link");
  linkElem.setAttribute("rel", "canonical");
  linkElem.setAttribute("href", conf.thisURL);
  doc.head.appendChild(linkElem);

  cb();
}
