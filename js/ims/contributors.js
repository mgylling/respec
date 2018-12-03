define(["exports", "core/pubsubhub", "ims/utils"], function (exports, _pubsubhub, _utils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.name = undefined;
  exports.run = run;
  const name = exports.name = "ims/contributors";

  function run(conf, doc, cb) {
    if (!conf.contributors) return cb();

    if (conf.specType !== "errata") {
      var useRoles = hasRoles(conf.contributors);
      var contrib = (0, _utils.toHTMLNode)(`<section id='contributors' class="appendix">
    <h2>List of Contributors</h2>
    <p>The following individuals contributed to the development of this document:</p>
    <table class="contributors" title="List of Contributors"
      summary="The list of contributors to this work.">
      <thead>
        <th>Name</th>
        <th>Organization</th>
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
      ret += "</td>";
      ret += "</tr>";
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
});
//# sourceMappingURL=contributors.js.map