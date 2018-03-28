define(["exports", "core/pubsubhub", "ims/utils"], function (exports, _pubsubhub, _utils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.name = undefined;
  exports.run = run;
  const name = exports.name = "ims/compute";

  function run(conf, doc, cb) {
    //compute misc variables used by multiple other modules and store them back in conf.

    var base = `https://www.imsglobal.org/${conf.shortName}/`;

    //v1p2-style reformat for use in path segments
    conf.versionURL = `v${conf.specVersion}`.replace('.', 'p');

    conf.thisURL = `${base}${conf.versionURL}/`;
    if (conf.specType !== "spec") {
      conf.thisURL = `${conf.thisURL}${conf.specType}/`;
    }

    conf.latestURI = `${base}latest/`;
    if (conf.specType !== "spec") {
      conf.latestURI = `${conf.latestURI}${conf.specType}/`;
    }

    conf.errataURL = `${conf.thisURL}errata/`;

    //needed for aux docs that need to point back to main spec
    conf.mainSpecURL = `${base}${conf.versionURL}/`;

    cb();
  }
});
//# sourceMappingURL=compute.js.map