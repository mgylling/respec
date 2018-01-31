define(["exports", "core/pubsubhub", "ims/utils"], function (exports, _pubsubhub, _utils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.name = undefined;
  exports.run = run;
  const name = exports.name = "ims/transclude";

  function run(conf, doc, cb) {

    /*
    Filesystem transclusion is done using body script elements with a class 
    of 'transclude'. If the script element has an id attribute equal to the 
    name of a string variable in global scope, then the script element is 
    replaced with HTML nodes corresponding to the given variable. 
    
    Each script element can declare zero, one or several string variables. In
    other words, it is possible to have one script which 
    declares all transclude variables, and then src-less script elements which
    then only declares where the content should be inserted. It is equally ok
    to have each occurence of the script element in the body to bring in its own 
    content via its own src. 
    
    Note the use of template literals to allow easy authoring and maintenance
    of multi-line strings in the js files referenced. 
    */
    var transcludes = doc.querySelectorAll('script.transclude');
    for (var i = 0; i < transcludes.length; i++) {
      var script = transcludes[i];
      if (!script.id) {
        pub("error", "Transclude script must have an id attribute that matches"
          +" the name of a string variable");
        continue;
      } else if (typeof window[script.id] !== 'string' || window[script.id] === null) {
        pub("error", `Could not find a string to transclude with name ${script.id}`);
        continue;
      }
      var newNodes = (0, _utils.toHTMLNodes)(window[script.id]);
      for (var k = 0; k < newNodes.length; k++) {
        var clone = newNodes[k].cloneNode(true);
        script.parentNode.insertBefore(clone, script);
      }
      script.parentNode.removeChild(script);
    }

    cb();
  }
});
//# sourceMappingURL=transclude.js.map