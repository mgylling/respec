"use strict";
// In case everything else fails, we want the error
window.addEventListener("error", ev => {
  console.error(ev.error, ev.message, ev);
});

// this is only set in a build, not at all in the dev environment
require.config({
  paths: {
    hyperhtml: "deps/hyperhtml",
    idb: "deps/idb",
    jquery: "deps/jquery",
    marked: "deps/marked",
    pluralize: "deps/pluralize",
    text: "deps/text",
    webidl2: "deps/webidl2",
  },
  shim: {
    shortcut: {
      exports: "shortcut",
    },
    idb: {
      exports: "idb",
    },
  },
});

define([
  // order is significant
  "./core/base-runner",
  "./core/ui",
  "./core/jquery-enhanced",
  "./core/reindent",
  "./core/location-hash",
  "./core/l10n",
  //"./w3c/defaults",
  //"./core/style",
  //"./w3c/style",
  "./ims/config",
  "./ims/compute",
  "./ims/transclude",
  "./ims/style",
  "./w3c/l10n",
  //"./core/github",
  "./core/data-include",
  "./core/markdown",
  "./ims/post-markdown",
  // Run id-headers after markdown to get heading id's early
  "./core/id-headers", 
  //"./w3c/headers",
  //"./w3c/abstract",
  "./ims/abstract",
  "./core/data-transform",
  "./core/data-abbr",
  // Identitfy conformance section if it exists 
  "./ims/conformance",
  "./core/inlines",
  //"./w3c/conformance",
  "./ims/biblio",
  "./core/dfn",
  "./core/pluralize",
  "./core/examples",
  "./ims/admonitions",
  //"./core/issues-notes",
  "./core/requirements",
  "./core/best-practices",
  "./core/figures",
  "./core/webidl",
  "./core/data-cite",
  "./core/biblio",
  "./core/webidl-index",
  "./core/link-to-dfn",
  "./core/render-biblio",
  //"./core/contrib",
  "./ims/contributors",
  "./core/fix-headers",
  "./core/structure",
  "./ims/rfc2119",
  "./core/informative",
  // Move id-headers up
  //"./core/id-headers",
  "./core/caniuse",
  "./ui/save-html",
  "./ui/search-specref",
  "./ui/dfn-list",
  "./ui/about-respec",
  "./core/seo",
  //"./w3c/seo",
  "./ims/seo",
  "./core/highlight",
  "./core/webidl-clipboard",
  //"./core/data-tests",
  "./core/list-sorter",
  "./core/highlight-vars",
  "./core/algorithms",
  "./ims/boilerplate",
  "./ims/cleanBody",
  "./ims/title-attrs",
  "./ims/md-bugfix",
  "./ims/link-here",
  "./ims/scripts",
  "./ims/tooltips",
  "./ims/comments",
  /* Linter must be the last thing to run */
  "./core/linter",
], (runner, { ui }, ...plugins) => {
  ui.show();
  domReady().then(async () => {
    try {
      await runner.runAll(plugins);
      await document.respecIsReady;
    } catch (err) {
      console.error(err);
    } finally {
      ui.enable();
    }
  });
});

async function domReady() {
  if (document.readyState === "loading") {
    await new Promise(resolve =>
      document.addEventListener("DOMContentLoaded", resolve)
    );
  }
}
