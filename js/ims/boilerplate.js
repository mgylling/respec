define(["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.run = run;

  //adds the IMS default header elements

  function run(conf, doc, cb) {
    var body = doc.body;

    var header = doc.createElement("header");

    var logo = toElement("<a id='logo' href='https://www.imsglobal.org'><img src='./images/imslogo.jpg' alt='IMS logo'></img></a>");
    header.appendChild(logo);

    var h1 = toElement("<h1 class='title'>" + conf.specTitle + "</h1>");
    header.appendChild(h1);
    doc.title = conf.specTitle.replace("<br/>", " ");

    var release = toElement(`<div class='subtitle'>${conf.specStatus}<br/>Version ${conf.specVersion}</div>`);
    header.appendChild(release);

    var statusPD = toElement(`<span class='statusPD' data-content="${conf.specStatus}">${conf.specStatus}</span>`);
    header.appendChild(statusPD);

    var versionTable = toElement(`<table class='versionTable' title='Version/Release Details' summary='Details about the version and release.'>
    <tbody><tr>
    <td>Date Issued:</td><td>${conf.specDate}</td></tr>
    <tr><td>Latest version:</td>
    <td><a href='${conf.latestVersion}'>${conf.latestVersion}</a></td></tr></tbody></table>`);
    header.appendChild(versionTable);

    var ipr = toElement(`<div id="ipr">
    <h2>IPR and Distribution Notices</h2>
    <p>Recipients of this document are requested to submit, with their comments, notification of any relevant patent claims or other intellectual property rights of which they may be aware that might be infringed by any implementation of the specification set forth in this document, and to provide supporting documentation.</p>
    <p>IMS takes no position regarding the validity or scope of any intellectual property or other rights that might be claimed to pertain to the implementation or use of the technology described in this document or the extent to which any license under such rights might or might not be available; neither does it represent that it has made any effort to identify any such rights. Information on IMS's procedures with respect to rights in IMS specifications can be found at the IMS Intellectual Property Rights web page: <a href="http://www.imsglobal.org/ipr/imsipr_policyFinal.pdf">http://www.imsglobal.org/ipr/imsipr_policyFinal.pdf</a>.</p>
    <p>Copyright © 2017 IMS Global Learning Consortium. All Rights Reserved.</p>
    <p>Use of this specification to develop products or services is governed by the license with IMS found on the IMS website: <a href="http://www.imsglobal.org/speclicense.html">http://www.imsglobal.org/speclicense.html</a>.</p>
    <p>Permission is granted to all parties to use excerpts from this document as needed in producing requests for proposals.</p>
    <p>The limited permissions granted above are perpetual and will not be revoked by IMS or its successors or assigns.</p>
    <p>THIS SPECIFICATION IS BEING OFFERED WITHOUT ANY WARRANTY WHATSOEVER, AND IN PARTICULAR, ANY WARRANTY OF NONINFRINGEMENT IS EXPRESSLY DISCLAIMED. ANY USE OF THIS SPECIFICATION SHALL BE MADE ENTIRELY AT THE IMPLEMENTER'S OWN RISK, AND NEITHER THE CONSORTIUM, NOR ANY OF ITS MEMBERS OR SUBMITTERS, SHALL HAVE ANY LIABILITY WHATSOEVER TO ANY IMPLEMENTER OR THIRD PARTY FOR ANY DAMAGES OF ANY NATURE WHATSOEVER, DIRECTLY OR INDIRECTLY, ARISING FROM THE USE OF THIS SPECIFICATION.</p>
    <p>Public contributions, comments and questions can be posted here: <a href="http://www.imsglobal.org/forums/ims-glc-public-forums-and-resources">http://www.imsglobal.org/forums/ims-glc-public-forums-and-resources</a>.</p>
  </div>`);
    header.appendChild(ipr);

    var copyRight = toElement(`<div id="copyright">
    <div class="cpr">
      <p>© 2017 IMS Global Learning Consortium, Inc.</p>
      <p>All Rights Reserved.</p>
    </div>
    <div>
      <p>Trademark information: <a href="http://www.imsglobal.org/copyright.html">http://www.imsglobal.org/copyright.html</a></p>
      <p>Document Name: ${conf.specTitle} ${conf.specVersion}</p>
      <p>Revision: ${conf.specDate}</p>
    </div>
  </div><hr/>`);
    header.appendChild(copyRight);

    body.insertBefore(header, body.firstChild);

    //insert a temporary abstract. this is removed again at the end of the ims profile runner
    var tempAbstract = toElement("<span id='abstract'>removed by script</span>");
    header.parentNode.insertBefore(tempAbstract, header.nextSibling);

    var footer = doc.createElement("footer");
    var about = toElement(`<section><h2>About this Document</h2>
    <table class="aboutThisDoc" title="Document Summary Details" summary="The document summary details."><tbody>
      <tr><td>Title:</td><td>${conf.specTitle.replace("<br/>", " ")}</td></tr>
      <tr><td>Editors:</td><td>${personsToCommaString(conf.editors)}</td></tr>
      <tr><td>Co-chairs:</td><td>${personsToCommaString(conf.cochairs)}</td></tr>
      <tr><td>Version:</td><td>${conf.specVersion}</td></tr>
      <tr><td>Version Date:</td><td>${conf.specDate}</td></tr>
      <tr><td>Status:</td><td>${conf.specStatus}</td></tr>
      <tr><td>Summary:</td><td>${conf.specSummary}</td></tr>
      <tr><td>Revision Information:</td><td>${conf.specRevOrder} release of this specification.</td></tr>
      <tr><td>Purpose:</td><td>For public adoption and implemenation.</td></tr>
      <tr><td>Document Location:</td><td><a href="${conf.latestVersion}">${conf.latestVersion}</a></td></tr>
      </tbody></table>
  </section>`);
    footer.appendChild(about);

    var contrib = toElement(`<section><h2>List of Contributors</h2>
    <p>The following individuals contributed to the development of this document:</p>
    <table class="contributors" title="List of Contributors" summary="The list of contributors to this work.">
                <tbody>
                    ${personsToTableRows(conf.contributors)}
                </tbody>
            </table>
  </section>`);
    footer.appendChild(contrib);

    var revHistory = toElement(`<section><h2>Revision History</h2>
  <table id="revisionHistory" title="Revision History" summary="Publication history and revision details for the document.">
      <thead><tr><th class="one">Version No.</th><th class="two">Release Date</th><th class="three">Comments</th></tr></thead>
              <tbody><tr>
                      <td class="one">${conf.specStatus} ${conf.specVersion}</td>
                      <td class="two">${conf.specDate}</td>
                      <td class="three">The original Final Release. This declares the standard ready for public adoption.</td>
                  </tr>
                  </tbody></table></section>`);
    footer.appendChild(revHistory);

    var endWarranty = toElement(`<div class="endWarranty">
    <p>IMS Global Learning Consortium, Inc. ("IMS Global") is publishing the information contained in this document ("Specification") for purposes of scientific, experimental, and scholarly collaboration only.</p>
    <p>IMS Global makes no warranty or representation regarding the accuracy or completeness of the Specification.</p>
    <p>This material is provided on an "As Is" and "As Available" basis.</p>
    <p>The Specification is at all times subject to change and revision without notice.</p>
    <p>It is your sole responsibility to evaluate the usefulness, accuracy, and completeness of the Specification as it relates to you.</p>
    <p>IMS Global would appreciate receiving your comments and suggestions.</p>
    <p>Please contact IMS Global through our website at http://www.imsglobal.org.</p>
    <p>Please refer to Document Name: ${conf.specTitle.replace("<br/>", " ")} ${conf.specVersion} </p>
    <p>Date: ${conf.specDate}</p>
    <div>`);
    footer.appendChild(endWarranty);

    doc.body.appendChild(footer);

    cb();
  }

  function toElement(html) {
    var element = document.createElement('div');
    element.innerHTML = html;
    return element;
  }

  function personsToCommaString(arr) {
    var ret = "";
    arr.forEach(function (entry) {
      ret += entry.name + ", " + entry.company + "<br/>";
    });
    return ret;
  }

  function personsToTableRows(arr) {
    var ret = "";
    arr.forEach(function (entry) {
      ret += "<tr><td>" + entry.name + "</td><td>" + entry.company + "</td></tr>";
    });
    return ret;
  }
});
//# sourceMappingURL=boilerplate.js.map