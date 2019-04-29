define(["exports", "deps/text!core/css/github.css", "core/worker"], function (_exports, _github, _worker) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.run = run;
  _exports.name = void 0;
  _github = _interopRequireDefault(_github);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /**
   * Module core/highlight
   *
   * Performs syntax highlighting to all pre and code elements.
   *
   * IMS change: dont insert head style element (line 18). The hljs styles
   * are at the bottom of ims-base.css instead. This is since the head is discarded
   * when publishing in Drupal.
   *
   */
  const name = "ims/highlight"; // Opportunistically insert the style into the head to reduce FOUC.

  _exports.name = name;
  const codeStyle = document.createElement("style");
  codeStyle.textContent = _github.default; //document.head.appendChild(codeStyle);

  let idCounter = 0;

  function getLanguageHint(classList) {
    return Array.from(classList).filter(item => item !== "highlight" && item !== "nolinks").map(item => item.toLowerCase());
  }

  async function run(conf) {
    // Nothing to do
    if (conf.noHighlightCSS) {
      return;
    }

    const highlightables = Array.from(document.querySelectorAll("pre:not(.idl):not(.nohighlight), code.highlight"));

    if (!highlightables.length) {
      return;
    }

    const promisesToHighlight = highlightables.map(element => {
      return new Promise(resolve => {
        if (element.textContent.trim() === "") {
          return resolve(element); // no work to do
        }

        const done = () => {
          element.setAttribute("aria-busy", "false");
          resolve(element);
        }; // We always resolve, even if we couldn't actually highlight


        const timeoutId = setTimeout(() => {
          console.error("Timed-out waiting for highlight:", element);
          done();
        }, 4000);
        const msg = {
          action: "highlight",
          code: element.textContent,
          id: "highlight:" + idCounter++,
          languages: getLanguageHint(element.classList)
        };
        element.setAttribute("aria-busy", "true");
        element.setAttribute("aria-live", "polite");

        _worker.worker.postMessage(msg);

        _worker.worker.addEventListener("message", function listener(ev) {
          const {
            data: {
              id,
              code,
              language,
              value
            }
          } = ev;

          if (id !== msg.id) {
            return; // not for us!
          }

          element.innerHTML = value;

          if (element.localName === "pre") {
            element.classList.add("hljs");
          }

          if (language) {
            element.classList.add(language);
          }

          clearTimeout(timeoutId);

          _worker.worker.removeEventListener("message", listener);

          done();
        });
      });
    });
    await Promise.all(promisesToHighlight);
  }
});
//# sourceMappingURL=highlight.js.map