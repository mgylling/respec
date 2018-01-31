define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.run = run;
  const name = exports.name = "ims/header";

  //adds the IMS default header elements

  function run(conf, doc, cb) {

    var body = doc.body;

    var header = doc.createElement("header");

    // var logo = toElement("<a href='https://www.imsglobal.org'><img src='./images/imslogo.jpg' alt='IMS logo'></img></a>");
    // header.appendChild(logo);

    var h1 = toElement("<h1>" + conf.specTitle + "</h1>");
    header.appendChild(h1);
    doc.title = conf.specTitle;

    body.insertBefore(header, body.firstChild);

    cb();
  }

  function toElement(html) {
    var element = document.createElement('div');
    element.innerHTML = html;
    return element;
  }
});
//# sourceMappingURL=header.js.map