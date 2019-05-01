define(["exports", "../core/pubsubhub"], function (_exports, _pubsubhub) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.run = run;
  _exports.name = void 0;
  //@ts-check

  /**
   * check config and inform user if required ones are missing
   */
  const name = "ims/config";
  /**
   * Returns true if value is not null or empty.
   * 
   * @param { string } value
   */

  _exports.name = name;

  function check(value) {
    return value != undefined && value.trim().length > 0;
  }
  /**
   * @param {*} conf 
   */


  async function run(conf) {
    if (!check(conf.specTitle)) {
      (0, _pubsubhub.pub)("error", "head config must have the <code>specTitle</code> property set: " + "title of the document, excluding version");
      conf.specTitle = "@@@FIXME (conf.specTitle)";
    }

    if (!check(conf.specDate)) {
      (0, _pubsubhub.pub)("error", "head config must have the <code>specDate</code> property set, e.g. 'June 28, 2019'");
      conf.specDate = "@@@FIXME(conf.specDate)";
    }

    if (!check(conf.specNature)) {
      (0, _pubsubhub.pub)("error", "head config must have the <code>specNature</code> property set: one of 'normative' or 'informative'");
      conf.specNature = "informative";
    }

    if (!check(conf.specType)) {
      (0, _pubsubhub.pub)("error", "head config must have the <code>specType</code> property set: One of 'spec', 'cert', 'impl', 'errata', 'doc' ");
      conf.specType = "spec";
    }

    if (conf.specType === 'doc') {
      return;
    }

    if (!check(conf.shortName)) {
      (0, _pubsubhub.pub)("error", "head config must have the <code>shortName</code> property set: " + "list at urls-names.md#shortnames");
      conf.shortName = "FIXME";
    }

    if (!check(conf.specStatus)) {
      (0, _pubsubhub.pub)("error", "head config must have the <code>specStatus</code> property set to " + "one of 'IMS Base Document', 'IMS Candidate Final', IMS Candidate Final Public', " + "or 'IMS Final Release'");
      conf.specStatus = "@@@FIXME(conf.specStatus)";
    }

    var statusValues = ["IMS Base Document", "IMS Candidate Final", "IMS Candidate Final Public", "IMS Final Release"];

    if (statusValues.indexOf(conf.specStatus) == -1) {
      (0, _pubsubhub.pub)("error", "head config must have the <code>specStatus</code> property set to " + "one of 'IMS Base Document', 'IMS Candidate Final', 'IMS Candidate Final Public', " + "or 'IMS Final Release'");
    }

    if (!check(conf.specVersion)) {
      (0, _pubsubhub.pub)("error", "head config must have the <code>specVersion</code> property set, e.g. '1.1'");
      conf.specVersion = "@@@FIXME(conf.specVersion)";
    }
  }
});
//# sourceMappingURL=config.js.map