"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[5303],{95687:(n,t,e)=>{e.d(t,{Z:()=>a});var o=e(1799),r=e.n(o),i=e(82609),c=e.n(i)()(r());c.push([n.id,'/*\nCopyright (C) 2011 by MarkLogic Corporation\nAuthor: Mike Brevoort <mike@brevoort.com>\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n*/\n.cm-s-xq-light span.cm-keyword { line-height: 1em; font-weight: bold; color: #5A5CAD; }\n.cm-s-xq-light span.cm-atom { color: #6C8CD5; }\n.cm-s-xq-light span.cm-number { color: #164; }\n.cm-s-xq-light span.cm-def { text-decoration:underline; }\n.cm-s-xq-light span.cm-variable { color: black; }\n.cm-s-xq-light span.cm-variable-2 { color:black; }\n.cm-s-xq-light span.cm-variable-3, .cm-s-xq-light span.cm-type { color: black; }\n.cm-s-xq-light span.cm-property {}\n.cm-s-xq-light span.cm-operator {}\n.cm-s-xq-light span.cm-comment { color: #0080FF; font-style: italic; }\n.cm-s-xq-light span.cm-string { color: red; }\n.cm-s-xq-light span.cm-meta { color: yellow; }\n.cm-s-xq-light span.cm-qualifier { color: grey; }\n.cm-s-xq-light span.cm-builtin { color: #7EA656; }\n.cm-s-xq-light span.cm-bracket { color: #cc7; }\n.cm-s-xq-light span.cm-tag { color: #3F7F7F; }\n.cm-s-xq-light span.cm-attribute { color: #7F007F; }\n.cm-s-xq-light span.cm-error { color: #f00; }\n\n.cm-s-xq-light .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-xq-light .CodeMirror-matchingbracket { outline:1px solid grey;color:black !important;background:yellow; }\n',"",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/xq-light.css"],names:[],mappings:"AAAA;;;;;;;;;;;;;;;;;;;;;CAqBC;AACD,iCAAiC,gBAAgB,EAAE,iBAAiB,EAAE,cAAc,EAAE;AACtF,8BAA8B,cAAc,EAAE;AAC9C,gCAAgC,WAAW,EAAE;AAC7C,6BAA6B,yBAAyB,EAAE;AACxD,kCAAkC,YAAY,EAAE;AAChD,oCAAoC,WAAW,EAAE;AACjD,iEAAiE,YAAY,EAAE;AAC/E,iCAAiC;AACjC,iCAAiC;AACjC,iCAAiC,cAAc,EAAE,kBAAkB,EAAE;AACrE,gCAAgC,UAAU,EAAE;AAC5C,8BAA8B,aAAa,EAAE;AAC7C,mCAAmC,WAAW,EAAE;AAChD,iCAAiC,cAAc,EAAE;AACjD,iCAAiC,WAAW,EAAE;AAC9C,6BAA6B,cAAc,EAAE;AAC7C,mCAAmC,cAAc,EAAE;AACnD,+BAA+B,WAAW,EAAE;;AAE5C,mDAAmD,mBAAmB,EAAE;AACxE,6CAA6C,sBAAsB,CAAC,sBAAsB,CAAC,iBAAiB,EAAE",sourcesContent:['/*\nCopyright (C) 2011 by MarkLogic Corporation\nAuthor: Mike Brevoort <mike@brevoort.com>\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the "Software"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in\nall copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\nTHE SOFTWARE.\n*/\n.cm-s-xq-light span.cm-keyword { line-height: 1em; font-weight: bold; color: #5A5CAD; }\n.cm-s-xq-light span.cm-atom { color: #6C8CD5; }\n.cm-s-xq-light span.cm-number { color: #164; }\n.cm-s-xq-light span.cm-def { text-decoration:underline; }\n.cm-s-xq-light span.cm-variable { color: black; }\n.cm-s-xq-light span.cm-variable-2 { color:black; }\n.cm-s-xq-light span.cm-variable-3, .cm-s-xq-light span.cm-type { color: black; }\n.cm-s-xq-light span.cm-property {}\n.cm-s-xq-light span.cm-operator {}\n.cm-s-xq-light span.cm-comment { color: #0080FF; font-style: italic; }\n.cm-s-xq-light span.cm-string { color: red; }\n.cm-s-xq-light span.cm-meta { color: yellow; }\n.cm-s-xq-light span.cm-qualifier { color: grey; }\n.cm-s-xq-light span.cm-builtin { color: #7EA656; }\n.cm-s-xq-light span.cm-bracket { color: #cc7; }\n.cm-s-xq-light span.cm-tag { color: #3F7F7F; }\n.cm-s-xq-light span.cm-attribute { color: #7F007F; }\n.cm-s-xq-light span.cm-error { color: #f00; }\n\n.cm-s-xq-light .CodeMirror-activeline-background { background: #e8f2ff; }\n.cm-s-xq-light .CodeMirror-matchingbracket { outline:1px solid grey;color:black !important;background:yellow; }\n'],sourceRoot:""}]);const a=c},82609:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=n(t);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(r[c]=!0)}for(var a=0;a<n.length;a++){var s=[].concat(n[a]);o&&r[s[0]]||(e&&(s[2]?s[2]="".concat(e," and ").concat(s[2]):s[2]=e),t.push(s))}},t}},1799:n=>{function t(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,o=new Array(t);e<t;e++)o[e]=n[e];return o}n.exports=function(n){var e,o,r=(o=4,function(n){if(Array.isArray(n))return n}(e=n)||function(n,t){var e=n&&("undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"]);if(null!=e){var o,r,i=[],c=!0,a=!1;try{for(e=e.call(n);!(c=(o=e.next()).done)&&(i.push(o.value),!t||i.length!==t);c=!0);}catch(n){a=!0,r=n}finally{try{c||null==e.return||e.return()}finally{if(a)throw r}}return i}}(e,o)||function(n,e){if(n){if("string"==typeof n)return t(n,e);var o=Object.prototype.toString.call(n).slice(8,-1);return"Object"===o&&n.constructor&&(o=n.constructor.name),"Map"===o||"Set"===o?Array.from(n):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(n,e):void 0}}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=r[1],c=r[3];if(!c)return i;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),A="/*# ".concat(s," */"),l=c.sources.map((function(n){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(n," */")}));return[i].concat(l).concat([A]).join("\n")}return[i].join("\n")}},25303:(n,t,e)=>{e.r(t),e.d(t,{default:()=>c});var o=e(46062),r=e.n(o),i=e(95687);r()(i.Z,{insert:"head",singleton:!1});const c=i.Z.locals||{}},46062:(n,t,e)=>{var o,r=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),i=[];function c(n){for(var t=-1,e=0;e<i.length;e++)if(i[e].identifier===n){t=e;break}return t}function a(n,t){for(var e={},o=[],r=0;r<n.length;r++){var a=n[r],s=t.base?a[0]+t.base:a[0],A=e[s]||0,l="".concat(s," ").concat(A);e[s]=A+1;var m=c(l),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==m?(i[m].references++,i[m].updater(u)):i.push({identifier:l,updater:f(u,t),references:1}),o.push(l)}return o}function s(n){var t=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var i=e.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(n){t.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(t);else{var c=r(n.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var A,l=(A=[],function(n,t){return A[n]=t,A.filter(Boolean).join("\n")});function m(n,t,e,o){var r=e?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=l(t,r);else{var i=document.createTextNode(r),c=n.childNodes;c[t]&&n.removeChild(c[t]),c.length?n.insertBefore(i,c[t]):n.appendChild(i)}}function u(n,t,e){var o=e.css,r=e.media,i=e.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var h=null,p=0;function f(n,t){var e,o,r;if(t.singleton){var i=p++;e=h||(h=s(t)),o=m.bind(null,e,i,!1),r=m.bind(null,e,i,!0)}else e=s(t),o=u.bind(null,e,t),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return o(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;o(n=t)}else r()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o));var e=a(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<e.length;o++){var r=c(e[o]);i[r].references--}for(var s=a(n,t),A=0;A<e.length;A++){var l=c(e[A]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}e=s}}}}}]);
//# sourceMappingURL=5303.1550844cc2ace705e941.js.map