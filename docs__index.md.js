(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[14],{"F+kV":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("dEAq"),c=a("dMo/"),s=l.a.memo((e=>{e.demos;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h2",{id:"\u7ec4\u4ef6\u770b\u677f"},l.a.createElement(r["AnchorLink"],{to:"#\u7ec4\u4ef6\u770b\u677f","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u7ec4\u4ef6\u770b\u677f"),l.a.createElement(c["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u7ec4\u4ef6"),l.a.createElement("th",null,"\u4e0b\u8f7d\u91cf"),l.a.createElement("th",null,"\u7248\u672c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"@tddc/layout"),l.a.createElement("td",null,l.a.createElement(r["Link"],{to:"https://www.npmjs.com/package/@tddc/layout"},l.a.createElement("img",{src:"https://img.shields.io/npm/dw/@tddc/layout.svg",alt:"layout"}))),l.a.createElement("td",null,l.a.createElement(r["Link"],{to:"https://www.npmjs.com/package/@tddc/layout"},l.a.createElement("img",{src:"https://img.shields.io/npm/v/@tddc/layout.svg?style=flat-square?style=flat-square",alt:"npm package"})))),l.a.createElement("tr",null,l.a.createElement("td",null,"@tddc/reference"),l.a.createElement("td",null,l.a.createElement(r["Link"],{to:"https://www.npmjs.com/package/@tddc/reference"},l.a.createElement("img",{src:"https://img.shields.io/npm/dw/@tddc/reference.svg",alt:"layout"}))),l.a.createElement("td",null,l.a.createElement(r["Link"],{to:"https://www.npmjs.com/package/@tddc/reference"},l.a.createElement("img",{src:"https://img.shields.io/npm/v/@tddc/reference.svg?style=flat-square?style=flat-square",alt:"npm package"})))),l.a.createElement("tr",null,l.a.createElement("td",null,"@tddc/tracker"),l.a.createElement("td",null,l.a.createElement(r["Link"],{to:"https://www.npmjs.com/package/@tddc/tracker"},l.a.createElement("img",{src:"https://img.shields.io/npm/dw/@tddc/tracker.svg",alt:"layout"}))),l.a.createElement("td",null,l.a.createElement(r["Link"],{to:"https://www.npmjs.com/package/@tddc/tracker"},l.a.createElement("img",{src:"https://img.shields.io/npm/v/@tddc/tracker.svg?style=flat-square?style=flat-square",alt:"npm package"})))),l.a.createElement("tr",null,l.a.createElement("td",null,"@tddc/tree-view"),l.a.createElement("td",null,l.a.createElement(r["Link"],{to:"https://www.npmjs.com/package/@tddc/tree-view"},l.a.createElement("img",{src:"https://img.shields.io/npm/dw/@tddc/treeview.svg",alt:"layout"}))),l.a.createElement("td",null,l.a.createElement(r["Link"],{to:"https://www.npmjs.com/package/@tddc/tree-view"},l.a.createElement("img",{src:"https://img.shields.io/npm/v/@tddc/tree-view.svg?style=flat-square?style=flat-square",alt:"npm package"}))))))))}));t["default"]=e=>{var t=l.a.useContext(r["context"]),a=t.demos;return l.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(s,{demos:a})}},WpQk:function(e,t,a){},"dMo/":function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n),r=a("hKI/"),c=a.n(r);a("WpQk");function s(e,t){return u(e)||i(e,t)||m(e,t)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return d(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?d(e,t):void 0}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function i(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,l,r=[],c=!0,s=!1;try{for(a=a.call(e);!(c=(n=a.next()).done);c=!0)if(r.push(n.value),t&&r.length===t)break}catch(o){s=!0,l=o}finally{try{c||null==a["return"]||a["return"]()}finally{if(s)throw l}}return r}}function u(e){if(Array.isArray(e))return e}var p=function(e){var t=e.children,a=Object(n["useRef"])(),r=Object(n["useState"])(!1),o=s(r,2),m=o[0],d=o[1],i=Object(n["useState"])(!1),u=s(i,2),p=u[0],f=u[1];return Object(n["useEffect"])((function(){var e=a.current,t=c()((function(){d(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:a,"data-left-folded":m||void 0,"data-right-folded":p||void 0},l.a.createElement("table",null,t)))};t["a"]=p}}]);