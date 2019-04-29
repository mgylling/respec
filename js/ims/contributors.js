define(["exports", "ims/utils"], function (_exports, _utils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.run = run;
  _exports.name = void 0;
  const name = "ims/contributors";
  _exports.name = name;

  async function run(conf) {
    if (!conf.contributors) return;

    if (conf.specType !== "errata") {
      var useRoles = hasRoles(conf.contributors);
      var contrib = (0, _utils.toHTMLNode)("<section id='contributors' class=\"appendix\">\n    <h2>List of Contributors</h2>\n    <p>The following individuals contributed to the development of this document:</p>\n    <table class=\"contributors\" title=\"List of Contributors\"\n      summary=\"The list of contributors to this work.\">\n      <thead>\n        <th>Name</th>\n        <th>Organization</th>\n        ".concat(useRoles ? "<th>Role</th>" : "", "\n      </thead>\n      <tbody>\n          ").concat(personsToTableRows(conf.contributors), "\n      </tbody>\n    </table>\n    </section>"));
      document.body.appendChild(contrib);
    }
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