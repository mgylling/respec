define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.run = run;
  _exports.name = void 0;
  const name = "ims/compute";
  _exports.name = name;

  async function run(conf) {
    //compute misc variables used by multiple other modules and store them back in conf.
    var base = "https://www.imsglobal.org/spec/".concat(conf.shortName, "/"); //v1p2-style reformat for use in path segments

    conf.versionURL = "v".concat(conf.specVersion).replace('.', 'p');
    conf.thisURL = "".concat(base).concat(conf.versionURL, "/");
    conf.errataURL = "".concat(conf.thisURL, "errata/");

    if (conf.specType !== "spec") {
      conf.thisURL = "".concat(conf.thisURL).concat(conf.specType, "/");
    }

    conf.latestURI = "".concat(base, "latest/");

    if (conf.specType !== "spec") {
      conf.latestURI = "".concat(conf.latestURI).concat(conf.specType, "/");
    } //needed for aux docs that need to point back to main spec


    conf.mainSpecURL = "".concat(base).concat(conf.versionURL, "/");
  }
});
//# sourceMappingURL=compute.js.map