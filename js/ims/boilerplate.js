define(["exports", "hyperhtml"], function (_exports, _hyperhtml) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.run = run;
  _exports.name = void 0;
  _hyperhtml = _interopRequireDefault(_hyperhtml);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  function _templateObject10() {
    const data = _taggedTemplateLiteral(["<div id=\"endWarranty\">\n    <p>IMS Global Learning Consortium, Inc. (\"IMS Global\") is publishing the information contained in this document (\"Specification\") for purposes of scientific, experimental, and scholarly collaboration only.</p>\n    <p>IMS Global makes no warranty or representation regarding the accuracy or completeness of the Specification.</p>\n    <p>This material is provided on an \"As Is\" and \"As Available\" basis.</p>\n    <p>The Specification is at all times subject to change and revision without notice.</p>\n    <p>It is your sole responsibility to evaluate the usefulness, accuracy, and completeness of the Specification as it relates to you.</p>\n    <p>IMS Global would appreciate receiving your comments and suggestions.</p>\n    <p>Please contact IMS Global through our website at http://www.imsglobal.org.</p>\n    <p>Please refer to Document Name: ", " ", " </p>\n    <p>Date: ", "</p>\n    <div>"]);

    _templateObject10 = function _templateObject10() {
      return data;
    };

    return data;
  }

  function _templateObject9() {
    const data = _taggedTemplateLiteral(["<div id=\"cpr\">\n      <p>\xA9 ", " IMS Global Learning Consortium, Inc. All Rights Reserved.</p>\n      <p>Trademark information: <a href=\"http://www.imsglobal.org/copyright.html\">http://www.imsglobal.org/copyright.html</a></p>\n    </div>"]);

    _templateObject9 = function _templateObject9() {
      return data;
    };

    return data;
  }

  function _templateObject8() {
    const data = _taggedTemplateLiteral(["<div id=\"ipr\">\n    <h2>IPR and Distribution Notices</h2>\n    <p>Recipients of this document are requested to submit, with their comments, notification of any relevant patent claims or other intellectual property rights of which they may be aware that might be infringed by any implementation of the specification set forth in this document, and to provide supporting documentation.</p>\n    <p>IMS takes no position regarding the validity or scope of any intellectual property or other rights that might be claimed to pertain to the implementation or use of the technology described in this document or the extent to which any license under such rights might or might not be available; neither does it represent that it has made any effort to identify any such rights. Information on IMS's procedures with respect to rights in IMS specifications can be found at the IMS Intellectual Property Rights web page: <a href=\"http://www.imsglobal.org/ipr/imsipr_policyFinal.pdf\">http://www.imsglobal.org/ipr/imsipr_policyFinal.pdf</a>.</p>\n    <p>Copyright \xA9 ", " IMS Global Learning Consortium. All Rights Reserved.</p>\n    <p>Use of this specification to develop products or services is governed by the license with IMS found on the IMS website: <a href=\"http://www.imsglobal.org/speclicense.html\">http://www.imsglobal.org/speclicense.html</a>.</p>\n    <p>Permission is granted to all parties to use excerpts from this document as needed in producing requests for proposals.</p>\n    <p>The limited permissions granted above are perpetual and will not be revoked by IMS or its successors or assigns.</p>\n    <p>THIS SPECIFICATION IS BEING OFFERED WITHOUT ANY WARRANTY WHATSOEVER, AND IN PARTICULAR, ANY WARRANTY OF NONINFRINGEMENT IS EXPRESSLY DISCLAIMED. ANY USE OF THIS SPECIFICATION SHALL BE MADE ENTIRELY AT THE IMPLEMENTER'S OWN RISK, AND NEITHER THE CONSORTIUM, NOR ANY OF ITS MEMBERS OR SUBMITTERS, SHALL HAVE ANY LIABILITY WHATSOEVER TO ANY IMPLEMENTER OR THIRD PARTY FOR ANY DAMAGES OF ANY NATURE WHATSOEVER, DIRECTLY OR INDIRECTLY, ARISING FROM THE USE OF THIS SPECIFICATION.</p>\n    <p>Public contributions, comments and questions can be posted here: <a href=\"http://www.imsglobal.org/forums/ims-glc-public-forums-and-resources\">http://www.imsglobal.org/forums/ims-glc-public-forums-and-resources</a>.</p>\n    </div>"]);

    _templateObject8 = function _templateObject8() {
      return data;
    };

    return data;
  }

  function _templateObject7() {
    const data = _taggedTemplateLiteral(["\n      <table id='version-table' title='Version/Release Details' summary='Details about the version and release.'>\n        <tbody>\n          <tr>\n            <td>Date Issued:</td>\n            <td>", "</td>\n          </tr>\n          <tr>\n            <td>Status:</td>\n            <td>", "</td>\n          </tr>\n        </tbody>  \n      </table>"]);

    _templateObject7 = function _templateObject7() {
      return data;
    };

    return data;
  }

  function _templateObject6() {
    const data = _taggedTemplateLiteral(["\n        <tr>\n          <td>Latest version:</td>\n          <td><a href='", "'>", "</a></td>\n        </tr>\n        <tr>\n          <td>Errata:</td>\n          <td><a href='", "'>", "</a></td>\n        </tr>"]);

    _templateObject6 = function _templateObject6() {
      return data;
    };

    return data;
  }

  function _templateObject5() {
    const data = _taggedTemplateLiteral(["\n    <table id='version-table' title='Version/Release Details' summary='Details about the version and release.'>\n      <tbody>\n        <tr>\n          <td>Date Issued:</td>\n          <td>", "</td>\n        </tr>\n        <tr>\n          <td>Status:</td>\n          <td>", "</td>\n        </tr>\n        <tr>\n          <td>This version:</td>\n          <td><a href='", "'>", "</a></td>\n        </tr>\n        ", "\n      </tbody>\n    </table>"]);

    _templateObject5 = function _templateObject5() {
      return data;
    };

    return data;
  }

  function _templateObject4() {
    const data = _taggedTemplateLiteral(["<span class='", "' data-content='", "'>", "</span>"]);

    _templateObject4 = function _templateObject4() {
      return data;
    };

    return data;
  }

  function _templateObject3() {
    const data = _taggedTemplateLiteral(["<div class='subtitle'>", "<br/>Version ", "</div>"]);

    _templateObject3 = function _templateObject3() {
      return data;
    };

    return data;
  }

  function _templateObject2() {
    const data = _taggedTemplateLiteral(["<a href='https://www.imsglobal.org' id='logo'><img src='", "' alt='IMS logo'></img></a>"]);

    _templateObject2 = function _templateObject2() {
      return data;
    };

    return data;
  }

  function _templateObject() {
    const data = _taggedTemplateLiteral(["<h1 class='title' id='title'>", "</h1>"]);

    _templateObject = function _templateObject() {
      return data;
    };

    return data;
  }

  function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

  const name = "ims/boilerplate";
  /**
   * @param {*} conf
   */

  _exports.name = name;

  function getStatusString(conf) {
    //specStatusString: an override of the default descriptions
    if (conf.specStatusString) {
      return conf.specStatusString;
    } //for generic docs, have a generic desc


    if (conf.specType === "doc") {
      return "This is an informative IMS Global document that may be revised at any time.";
    } //specStatus: See ims/config.js for known values


    switch (conf.specStatus) {
      case 'IMS Base Document':
        return "This document is for review and comment by IMS Contributing Members.";

      case 'IMS Candidate Final':
        return "This document is for review and adoption by the IMS membership.";

      case 'IMS Candidate Final Public':
        return "This document is for review and adoption by the IMS membership.";

      case 'IMS Final Release':
        return "This document is made available for adoption by the public community at large.";

      default:
        // ims/config.js will issue error for unknown values
        return "Unknown <code>specStatus: \"" + conf.specStatus + "\"</code>";
    }
  }
  /**
   * @param {*} conf
   */


  async function run(conf) {
    document.title = conf.specTitle + " " + conf.specVersion + " " + conf.specStatus;
    var body = document.body;
    var header = document.createElement("header");
    var headerTop = document.createElement("div");
    headerTop.setAttribute("class", "header-top");
    var hd = (0, _hyperhtml.default)(_templateObject(), conf.specTitle);
    headerTop.appendChild(hd);
    const imgURL = "https://www.imsglobal.org/sites/default/files/IMSglobalreg2_2.png";
    var logo = (0, _hyperhtml.default)(_templateObject2(), imgURL);
    headerTop.appendChild(logo);
    header.appendChild(headerTop);

    if (conf.specType !== "doc") {
      var release = (0, _hyperhtml.default)(_templateObject3(), conf.specStatus, conf.specVersion);
      header.appendChild(release);
      var statusClass = "statusPD" + (conf.specStatus === 'IMS Final Release' ? " final" : "");
      var statusPD = (0, _hyperhtml.default)(_templateObject4(), statusClass, conf.specStatus, conf.specStatus);
      header.appendChild(statusPD);
    }

    var versionTable = (0, _hyperhtml.default)(_templateObject5(), conf.specDate, getStatusString(conf), conf.thisURL, conf.thisURL, conf.specNature === "normative" ? (0, _hyperhtml.default)(_templateObject6(), conf.latestURI, conf.latestURI, conf.errataURL, conf.errataURL) : null);

    if (conf.specType !== "doc") {
      header.appendChild(versionTable);
    } else {
      var genericDocTable = (0, _hyperhtml.default)(_templateObject7(), conf.specDate, getStatusString(conf));
      header.appendChild(genericDocTable);
    }

    var ipr = (0, _hyperhtml.default)(_templateObject8(), new Date().getFullYear());
    header.appendChild(ipr);
    var copyRight = (0, _hyperhtml.default)(_templateObject9(), new Date().getFullYear());
    header.appendChild(copyRight);

    if (body.firstChild) {
      body.insertBefore(header, body.firstChild);
    } else {
      body.appendChild(header);
    }

    var footer = document.createElement("footer");
    var endWarranty = (0, _hyperhtml.default)(_templateObject10(), conf.specTitle.replace("<br/>", " "), conf.specVersion, conf.specDate);
    footer.appendChild(endWarranty);
    document.body.appendChild(footer);
  }
});
//# sourceMappingURL=boilerplate.js.map