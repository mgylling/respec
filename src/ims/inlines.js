// @ts-check
//
// Ensure the conformance section has an id, then run core/inlines.
//
// core/inlines determines whether a document is informative by the
// presence or absence of a section with id='conformance'. If the conformance
// section is in Markddown, it will not have an id. This module will assign the
// id to a section if the first header in the section is 'conformance' or
// 'conformance statements' (ignoring case). For example,
//
// Note: Run after core/markdown

import { addId, children } from "../core/utils";
import { pub } from "../core/pubsubhub.js";
import { run as core_inlines } from "../core/inlines";

export const name = "ims/inlines";

/**
 * Find the Conformance section in parent and assign an id
 * @param {Element | HTMLElement} parent
 */
function findConformanceSection(parent) {
    var sectionElements = children(parent, "section");
    for (var section of sectionElements) {
        if (!section.children.length) {
            continue;
        }

        if (!section.id) {
            var header = section.children[0];
            var title = header.textContent;
            if (title.toLowerCase() == "conformance" || title.toLowerCase() == "conformance statementss") {
                addId(section, null, "conformance");
                return section;
            }
        }

        var foundSection = findConformanceSection(section);
        if (foundSection) {
            return foundSection;
        }
    }

    return null;
}

/**
 * @param {*} conf
 */
export async function run(conf) {
    // No conformance section in IMS Errata documents
    if (conf.specType == "errata") {
        return;
    }

    var conformance = document.querySelector("section#conformance");
    if (!conformance) {
        conformance = findConformanceSection(document.body);
    }

    // Pass control to core/inlines
    return await core_inlines(conf);
}
