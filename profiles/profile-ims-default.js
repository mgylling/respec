"use strict";
// In case everything else fails, we want the error
window.addEventListener("error", ev => {
  console.error(ev.error, ev.message, ev);
});

const modules = [
  // order is significant
  import("../src/core/base-runner.js"),
  import("../src/core/ui.js"),
  import("../src/core/jquery-enhanced.js"),
  import("../src/core/reindent.js"),
  import("../src/core/location-hash.js"),
  import("../src/core/l10n.js"),
  // Similar to ims/compute and not used by IMS specs
  import("../src/w3c/defaults.js"),
  import("../src/core/style.js"),
  // Replaced by ims/style
  //import("../src/w3c/style.js"),
  import("../src/ims/style.js"),
  import("../src/ims/config.js"),
  import("../src/ims/compute.js"),
  import("../src/ims/transclude.js"),
  import("../src/w3c/l10n.js"),
  // Adds GitHub links to front matter (not used by IMS specs)
  //import("../src/core/github.js"),
  import("../src/core/data-include.js"),
  import("../src/core/markdown.js"),
  // New order: run id-headers after markdown and before post-markdown
  import("../src/core/id-headers.js"),
  // Run after id-headers so abstract is identified
  import("../src/ims/post-markdown.js"),
  // W3C frontmatter is not used by IMS
  //import("../src/w3c/headers.js"),
  // Replaced by ims/abstract
  //import("../src/w3c/abstract.js"),
  import("../src/ims/abstract.js"),
  import("../src/core/data-transform.js"),
  import("../src/core/data-abbr.js"),
  // Add ims/inlines
  import("../src/ims/inlines.js"),
  import("../src/core/inlines.js"),
  // Replaced by ims/conformance
  //import("../src/w3c/conformance.js"),
  import("../src/ims/conformance.js"),
  import("../src/ims/biblio.js"),
  import("../src/core/dfn.js"),
  import("../src/core/pluralize.js"),
  import("../src/core/examples.js"),
  // Replaced by ims/admonitions
  //import("../src/core/issues-notes.js"),
  import("../src/ims/admonitions.js"),
  // Removed.js)",
  //import("../src/core/requirements.js"),
  import("../src/core/best-practices.js"),
  import("../src/core/figures.js"),
  import("../src/core/webidl.js"),
  import("../src/core/data-cite.js"),
  import("../src/core/biblio.js"),
  import("../src/core/webidl-index.js"),
  import("../src/core/link-to-dfn.js"),
  import("../src/core/render-biblio.js"),
  // Replaced by ims/contrib
  //import("../src/core/contrib.js"),
  import("../src/ims/contributors.js"),
  import("../src/core/fix-headers.js"),
  import("../src/core/structure.js"),
  import("../src/core/informative.js"),
  // Moved id-headers up in order
  //import("../src/core/id-headers.js"),
  import("../src/core/caniuse.js"),
  import("../src/ui/save-html.js"),
  import("../src/ui/search-specref.js"),
  import("../src/ui/dfn-list.js"),
  import("../src/ui/about-respec.js"),
  import("../src/core/seo.js"),
  // Replaced by ims/seo
  //import("../src/w3c/seo.js"),
  import("../src/ims/seo.js"),
  import("../src/core/highlight.js"),
  import("../src/core/webidl-clipboard.js"),
  // Testing disabled in this profile
  //import("../src/core/data-tests.js"),
  import("../src/core/list-sorter.js"),
  import("../src/core/highlight-vars.js"),
  import("../src/core/algorithms.js"),
  import("../src/ims/boilerplate.js"),
  import("../src/ims/cleanBody.js"),
  import("../src/ims/title-attrs.js"),
  import("../src/ims/scripts.js"),
  // Not working...disable until fixed
  //import("../src/ims/tooltips.js"),
  import("../src/ims/comments.js"),
  import("../src/core/anchor-expander.js"),
  /* Linter must be the last thing to run */
  import("../src/core/linter.js"),
];

async function domReady() {
  if (document.readyState === "loading") {
    await new Promise(resolve =>
      document.addEventListener("DOMContentLoaded", resolve)
    );
  }
}

(async () => {
  const [runner, { ui }, ...plugins] = await Promise.all(modules);
  try {
    ui.show();
    await domReady();
    await runner.runAll(plugins);
  } finally {
    ui.enable();
  }
})().catch(err => {
  console.error(err);
});
