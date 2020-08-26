import { toHTMLNode } from "../ims/utils.js";

export const name = "ims/highlight-prism";

export async function run(conf) {
    if (conf.noHighlightCSS) return;
    
    let highlightables = document.querySelectorAll(`div.example pre code`);
      
    // Nothing to highlight
    if (!highlightables.length) {
      return;
    }
    //add prism classes
    highlightables.forEach(function(codeElem) {
        let preElem = codeElem.parentElement;
        preElem.classList.add("line-numbers");
        preElem.classList.add(getCodeLanguage(codeElem.textContent));
    });

    //add css
    const prismCss = `<style id="prismStyle" type='text/css'>code[class*=language-],pre[class*=language-]{color:#000;background:0 0;text-shadow:0 1px #fff;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}code[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection{text-shadow:none;background:#b3d4fc}code[class*=language-] ::selection,code[class*=language-]::selection,pre[class*=language-] ::selection,pre[class*=language-]::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}}pre[class*=language-]{padding:1em;margin:0;overflow:auto}:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}.token.punctuation{color:#999}.token.namespace{opacity:.7}.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#9a6e3a;background:hsla(0,0%,100%,.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.class-name,.token.function{color:#dd4a68}.token.important,.token.regex,.token.variable{color:#e90}.token.bold,.token.important{font-weight:700}.token.italic{font-style:italic}.token.entity{cursor:help}pre[class*=language-].line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber}pre[class*=language-].line-numbers>code{position:relative;white-space:inherit}.line-numbers .line-numbers-rows{position:absolute;pointer-events:none;top:0;font-size:100%;left:-3.8em;width:3em;letter-spacing:-1px;border-right:1px solid #999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.line-numbers-rows>span{display:block;counter-increment:linenumber}.line-numbers-rows>span:before{content:counter(linenumber);color:#999;display:block;padding-right:.8em;text-align:right}</style>`
    var styleElem = toHTMLNode(prismCss);
    document.head.appendChild(styleElem);

    //add script imports
    var prismScripts = ["https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/prism.min.js", "https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/autoloader/prism-autoloader.min.js", "https://cdnjs.cloudflare.com/ajax/libs/prism/1.21.0/plugins/line-numbers/prism-line-numbers.js"];
    prismScripts.forEach(function(uri) {
        var scrptElem = document.createElement("script");
        scrptElem.setAttribute("src", uri);
        scrptElem.setAttribute("type", "text/javascript");
        scrptElem.setAttribute("class", "remove");
        document.body.appendChild(scrptElem);
    });
}

function getCodeLanguage(snippet) {
    //note this is temp for qti
    let lang = "lang-html"; 

    console.log(snippet);
    if(snippet.includes("<") && snippet.includes(">")) {
        lang = "language-xml";    
    } else if(snippet.includes("{") && snippet.includes("}")) {
        lang = "language-css";    
    }

    return lang;
}

