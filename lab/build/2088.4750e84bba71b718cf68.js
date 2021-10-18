"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[2088],{64797:(o,n,r)=>{r.d(n,{Z:()=>t});var c=r(1799),e=r.n(c),a=r(82609),s=r.n(a)()(e());s.push([o.id,"/*\n\n    Name:       shadowfox\n    Author:     overdodactyl (http://github.com/overdodactyl)\n\n    Original shadowfox color scheme by Firefox\n\n*/\n\n.cm-s-shadowfox.CodeMirror { background: #2a2a2e; color: #b1b1b3; }\n.cm-s-shadowfox div.CodeMirror-selected { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-line::selection, .cm-s-shadowfox .CodeMirror-line > span::selection, .cm-s-shadowfox .CodeMirror-line > span > span::selection { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-line::-moz-selection, .cm-s-shadowfox .CodeMirror-line > span::-moz-selection, .cm-s-shadowfox .CodeMirror-line > span > span::-moz-selection { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-gutters { background: #0c0c0d ; border-right: 1px solid #0c0c0d; }\n.cm-s-shadowfox .CodeMirror-guttermarker { color: #555; }\n.cm-s-shadowfox .CodeMirror-linenumber { color: #939393; }\n.cm-s-shadowfox .CodeMirror-cursor { border-left: 1px solid #fff; }\n\n.cm-s-shadowfox span.cm-comment { color: #939393; }\n.cm-s-shadowfox span.cm-atom { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-quote { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-builtin { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-attribute { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-keyword { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-error { color: #FF7DE9; }\n\n.cm-s-shadowfox span.cm-number { color: #6B89FF; }\n.cm-s-shadowfox span.cm-string { color: #6B89FF; }\n.cm-s-shadowfox span.cm-string-2 { color: #6B89FF; }\n\n.cm-s-shadowfox span.cm-meta { color: #939393; }\n.cm-s-shadowfox span.cm-hr { color: #939393; }\n\n.cm-s-shadowfox span.cm-header { color: #75BFFF; }\n.cm-s-shadowfox span.cm-qualifier { color: #75BFFF; }\n.cm-s-shadowfox span.cm-variable-2 { color: #75BFFF; }\n\n.cm-s-shadowfox span.cm-property { color: #86DE74; }\n\n.cm-s-shadowfox span.cm-def { color: #75BFFF; }\n.cm-s-shadowfox span.cm-bracket { color: #75BFFF; }\n.cm-s-shadowfox span.cm-tag { color: #75BFFF; }\n.cm-s-shadowfox span.cm-link:visited { color: #75BFFF; }\n\n.cm-s-shadowfox span.cm-variable { color: #B98EFF; }\n.cm-s-shadowfox span.cm-variable-3 { color: #d7d7db; }\n.cm-s-shadowfox span.cm-link { color: #737373; }\n.cm-s-shadowfox span.cm-operator { color: #b1b1b3; }\n.cm-s-shadowfox span.cm-special { color: #d7d7db; }\n\n.cm-s-shadowfox .CodeMirror-activeline-background { background: rgba(185, 215, 253, .15) }\n.cm-s-shadowfox .CodeMirror-matchingbracket { outline: solid 1px rgba(255, 255, 255, .25); color: white !important; }\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/shadowfox.css"],names:[],mappings:"AAAA;;;;;;;CAOC;;AAED,6BAA6B,mBAAmB,EAAE,cAAc,EAAE;AAClE,0CAA0C,mBAAmB,EAAE;AAC/D,6JAA6J,mBAAmB,EAAE;AAClL,4KAA4K,mBAAmB,EAAE;AACjM,sCAAsC,oBAAoB,EAAE,+BAA+B,EAAE;AAC7F,2CAA2C,WAAW,EAAE;AACxD,yCAAyC,cAAc,EAAE;AACzD,qCAAqC,2BAA2B,EAAE;;AAElE,kCAAkC,cAAc,EAAE;AAClD,+BAA+B,cAAc,EAAE;AAC/C,gCAAgC,cAAc,EAAE;AAChD,kCAAkC,cAAc,EAAE;AAClD,oCAAoC,cAAc,EAAE;AACpD,kCAAkC,cAAc,EAAE;AAClD,gCAAgC,cAAc,EAAE;;AAEhD,iCAAiC,cAAc,EAAE;AACjD,iCAAiC,cAAc,EAAE;AACjD,mCAAmC,cAAc,EAAE;;AAEnD,+BAA+B,cAAc,EAAE;AAC/C,6BAA6B,cAAc,EAAE;;AAE7C,iCAAiC,cAAc,EAAE;AACjD,oCAAoC,cAAc,EAAE;AACpD,qCAAqC,cAAc,EAAE;;AAErD,mCAAmC,cAAc,EAAE;;AAEnD,8BAA8B,cAAc,EAAE;AAC9C,kCAAkC,cAAc,EAAE;AAClD,8BAA8B,cAAc,EAAE;AAC9C,uCAAuC,cAAc,EAAE;;AAEvD,mCAAmC,cAAc,EAAE;AACnD,qCAAqC,cAAc,EAAE;AACrD,+BAA+B,cAAc,EAAE;AAC/C,mCAAmC,cAAc,EAAE;AACnD,kCAAkC,cAAc,EAAE;;AAElD,oDAAoD,qCAAqC;AACzF,8CAA8C,2CAA2C,EAAE,uBAAuB,EAAE",sourcesContent:["/*\n\n    Name:       shadowfox\n    Author:     overdodactyl (http://github.com/overdodactyl)\n\n    Original shadowfox color scheme by Firefox\n\n*/\n\n.cm-s-shadowfox.CodeMirror { background: #2a2a2e; color: #b1b1b3; }\n.cm-s-shadowfox div.CodeMirror-selected { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-line::selection, .cm-s-shadowfox .CodeMirror-line > span::selection, .cm-s-shadowfox .CodeMirror-line > span > span::selection { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-line::-moz-selection, .cm-s-shadowfox .CodeMirror-line > span::-moz-selection, .cm-s-shadowfox .CodeMirror-line > span > span::-moz-selection { background: #353B48; }\n.cm-s-shadowfox .CodeMirror-gutters { background: #0c0c0d ; border-right: 1px solid #0c0c0d; }\n.cm-s-shadowfox .CodeMirror-guttermarker { color: #555; }\n.cm-s-shadowfox .CodeMirror-linenumber { color: #939393; }\n.cm-s-shadowfox .CodeMirror-cursor { border-left: 1px solid #fff; }\n\n.cm-s-shadowfox span.cm-comment { color: #939393; }\n.cm-s-shadowfox span.cm-atom { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-quote { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-builtin { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-attribute { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-keyword { color: #FF7DE9; }\n.cm-s-shadowfox span.cm-error { color: #FF7DE9; }\n\n.cm-s-shadowfox span.cm-number { color: #6B89FF; }\n.cm-s-shadowfox span.cm-string { color: #6B89FF; }\n.cm-s-shadowfox span.cm-string-2 { color: #6B89FF; }\n\n.cm-s-shadowfox span.cm-meta { color: #939393; }\n.cm-s-shadowfox span.cm-hr { color: #939393; }\n\n.cm-s-shadowfox span.cm-header { color: #75BFFF; }\n.cm-s-shadowfox span.cm-qualifier { color: #75BFFF; }\n.cm-s-shadowfox span.cm-variable-2 { color: #75BFFF; }\n\n.cm-s-shadowfox span.cm-property { color: #86DE74; }\n\n.cm-s-shadowfox span.cm-def { color: #75BFFF; }\n.cm-s-shadowfox span.cm-bracket { color: #75BFFF; }\n.cm-s-shadowfox span.cm-tag { color: #75BFFF; }\n.cm-s-shadowfox span.cm-link:visited { color: #75BFFF; }\n\n.cm-s-shadowfox span.cm-variable { color: #B98EFF; }\n.cm-s-shadowfox span.cm-variable-3 { color: #d7d7db; }\n.cm-s-shadowfox span.cm-link { color: #737373; }\n.cm-s-shadowfox span.cm-operator { color: #b1b1b3; }\n.cm-s-shadowfox span.cm-special { color: #d7d7db; }\n\n.cm-s-shadowfox .CodeMirror-activeline-background { background: rgba(185, 215, 253, .15) }\n.cm-s-shadowfox .CodeMirror-matchingbracket { outline: solid 1px rgba(255, 255, 255, .25); color: white !important; }\n"],sourceRoot:""}]);const t=s},82609:o=>{o.exports=function(o){var n=[];return n.toString=function(){return this.map((function(n){var r=o(n);return n[2]?"@media ".concat(n[2]," {").concat(r,"}"):r})).join("")},n.i=function(o,r,c){"string"==typeof o&&(o=[[null,o,""]]);var e={};if(c)for(var a=0;a<this.length;a++){var s=this[a][0];null!=s&&(e[s]=!0)}for(var t=0;t<o.length;t++){var A=[].concat(o[t]);c&&e[A[0]]||(r&&(A[2]?A[2]="".concat(r," and ").concat(A[2]):A[2]=r),n.push(A))}},n}},1799:o=>{function n(o,n){(null==n||n>o.length)&&(n=o.length);for(var r=0,c=new Array(n);r<n;r++)c[r]=o[r];return c}o.exports=function(o){var r,c,e=(c=4,function(o){if(Array.isArray(o))return o}(r=o)||function(o,n){var r=o&&("undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"]);if(null!=r){var c,e,a=[],s=!0,t=!1;try{for(r=r.call(o);!(s=(c=r.next()).done)&&(a.push(c.value),!n||a.length!==n);s=!0);}catch(o){t=!0,e=o}finally{try{s||null==r.return||r.return()}finally{if(t)throw e}}return a}}(r,c)||function(o,r){if(o){if("string"==typeof o)return n(o,r);var c=Object.prototype.toString.call(o).slice(8,-1);return"Object"===c&&o.constructor&&(c=o.constructor.name),"Map"===c||"Set"===c?Array.from(o):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?n(o,r):void 0}}(r,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=e[1],s=e[3];if(!s)return a;if("function"==typeof btoa){var t=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),A="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t),i="/*# ".concat(A," */"),d=s.sources.map((function(o){return"/*# sourceURL=".concat(s.sourceRoot||"").concat(o," */")}));return[a].concat(d).concat([i]).join("\n")}return[a].join("\n")}},72088:(o,n,r)=>{r.r(n),r.d(n,{default:()=>s});var c=r(46062),e=r.n(c),a=r(64797);e()(a.Z,{insert:"head",singleton:!1});const s=a.Z.locals||{}},46062:(o,n,r)=>{var c,e=function(){var o={};return function(n){if(void 0===o[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(o){r=null}o[n]=r}return o[n]}}(),a=[];function s(o){for(var n=-1,r=0;r<a.length;r++)if(a[r].identifier===o){n=r;break}return n}function t(o,n){for(var r={},c=[],e=0;e<o.length;e++){var t=o[e],A=n.base?t[0]+n.base:t[0],i=r[A]||0,d="".concat(A," ").concat(i);r[A]=i+1;var l=s(d),m={css:t[1],media:t[2],sourceMap:t[3]};-1!==l?(a[l].references++,a[l].updater(m)):a.push({identifier:d,updater:h(m,n),references:1}),c.push(d)}return c}function A(o){var n=document.createElement("style"),c=o.attributes||{};if(void 0===c.nonce){var a=r.nc;a&&(c.nonce=a)}if(Object.keys(c).forEach((function(o){n.setAttribute(o,c[o])})),"function"==typeof o.insert)o.insert(n);else{var s=e(o.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var i,d=(i=[],function(o,n){return i[o]=n,i.filter(Boolean).join("\n")});function l(o,n,r,c){var e=r?"":c.media?"@media ".concat(c.media," {").concat(c.css,"}"):c.css;if(o.styleSheet)o.styleSheet.cssText=d(n,e);else{var a=document.createTextNode(e),s=o.childNodes;s[n]&&o.removeChild(s[n]),s.length?o.insertBefore(a,s[n]):o.appendChild(a)}}function m(o,n,r){var c=r.css,e=r.media,a=r.sourceMap;if(e?o.setAttribute("media",e):o.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(c+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),o.styleSheet)o.styleSheet.cssText=c;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(c))}}var f=null,u=0;function h(o,n){var r,c,e;if(n.singleton){var a=u++;r=f||(f=A(n)),c=l.bind(null,r,a,!1),e=l.bind(null,r,a,!0)}else r=A(n),c=m.bind(null,r,n),e=function(){!function(o){if(null===o.parentNode)return!1;o.parentNode.removeChild(o)}(r)};return c(o),function(n){if(n){if(n.css===o.css&&n.media===o.media&&n.sourceMap===o.sourceMap)return;c(o=n)}else e()}}o.exports=function(o,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===c&&(c=Boolean(window&&document&&document.all&&!window.atob)),c));var r=t(o=o||[],n);return function(o){if(o=o||[],"[object Array]"===Object.prototype.toString.call(o)){for(var c=0;c<r.length;c++){var e=s(r[c]);a[e].references--}for(var A=t(o,n),i=0;i<r.length;i++){var d=s(r[i]);0===a[d].references&&(a[d].updater(),a.splice(d,1))}r=A}}}}}]);
//# sourceMappingURL=2088.4750e84bba71b718cf68.js.map