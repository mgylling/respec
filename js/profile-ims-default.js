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
// Similar to ims/compute and not used by IMS specs
//"./w3c/defaults",
  "./core/style",
// Replaced by ims/style
//"./w3c/style",
  "./ims/style",
  "./ims/config",
  "./ims/compute",
  "./ims/transclude",
  "./w3c/l10n",
// Adds GitHub links to front matter (not used by IMS specs)
//"./core/github",
  "./core/data-include",
  "./core/markdown",
// New order: run id-headers after markdown and before post-markdown
  "./core/id-headers", 
// Run after id-headers so abstract is identified
  "./ims/post-markdown",
// W3C frontmatter is not used by IMS
//"./w3c/headers",
// Replaced by ims/abstract
//"./w3c/abstract",
  "./ims/abstract",
  "./core/data-transform",
  "./core/data-abbr",
  "./ims/inlines",
  "./core/inlines",
// Replaced by ims/conformance
//"./w3c/conformance",
  "./ims/conformance",
  "./ims/biblio",
  "./core/dfn",
  "./core/pluralize",
  "./core/examples",
// Replaced by ims/admonitions
//"./core/issues-notes",
  "./ims/admonitions",
  "./core/requirements",
  "./core/best-practices",
  "./core/figures",
  "./core/webidl",
  "./core/data-cite",
  "./core/biblio",
  "./core/webidl-index",
  "./core/link-to-dfn",
  "./core/render-biblio",
// Replaced by ims/contributors
//"./core/contrib",
  "./ims/contributors",
  "./core/fix-headers",
  "./core/structure",
  "./core/informative",
// Moved id-headers up in order
//"./core/id-headers",
  "./core/caniuse",
  "./ui/save-html",
  "./ui/search-specref",
  "./ui/dfn-list",
  "./ui/about-respec",
  "./core/seo",
// Replaced by ims/seo
//"./w3c/seo",
  "./ims/seo",
  "./core/highlight",
  "./core/webidl-clipboard",
// Testing disabled in this profile
//"./core/data-tests",
  "./core/list-sorter",
  "./core/highlight-vars",
  "./core/algorithms",
  "./ims/boilerplate",
  "./ims/cleanBody",
  "./ims/title-attrs",
  "./ims/link-here",
  "./ims/scripts",
  // Not working
  //"./ims/tooltips",
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
