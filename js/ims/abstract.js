define(["exports", "core/pubsubhub", "ims/utils", "core/utils"], function (exports, _pubsubhub, _utils, _utils2) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.name = undefined;
    exports.run = run;
    const name = exports.name = "ims/abstract";

    /*
    * Handles checking for the abstract, and inserts a temp one if not present.
    */

    function run(conf, doc, cb) {

        var abstract = doc.querySelector("#abstract");
        if (abstract === null) {
            (0, _pubsubhub.pub)("warn", "No abstract found. Consider adding a section element with an " + "id of'abstract', a class of 'introductory' and a h2 child as the first child of the body");
            //insert a temp abstract
            var tempAbstract = (0, _utils.toHTMLNode)("<section id='abstract' class='introductory remove'><h2>h</h2></section>");
            doc.body.prepend(tempAbstract);
        }

        cb();
    }
});
//# sourceMappingURL=abstract.js.map