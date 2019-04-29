// Find the conformance section and assign an id so
// core/inlines knows this is a normative document.

import { addId, children } from "core/utils";

export const name = "ims/conformance";

export async function run(conf) {
    const conformanceSection = document.querySelector("section#conformance");
    if (!conformanceSection) {
        await findConformanceSection(document.body);
    }
}

// Find Conformance sections and assign an id
async function findConformanceSection(parent) {
    const sectionElements = children(parent, "section");
    for (const section of sectionElements) {
        if (!section.children.length) {
            continue;
        }

        if (!section.id) {
            const header = section.children[0];
            const title = header.textContent;
            if (title.toLowerCase() == "conformance") {
                addId(section, null, title);
            }
        }

        await findConformanceSection(section);
    }
}
