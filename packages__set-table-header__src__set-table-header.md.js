(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[32],{MZF8:function(e,t,l){"use strict";var a=l("ogwx");l.d(t,"a",(function(){return a["b"]}));l("VCU9")},WpQk:function(e,t,l){},"dMo/":function(e,t,l){"use strict";var a=l("q1tI"),n=l.n(a),r=l("hKI/"),c=l.n(r);l("WpQk");function d(e,t){return E(e)||i(e,t)||m(e,t)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){if(e){if("string"===typeof e)return o(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?o(e,t):void 0}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,a=new Array(t);l<t;l++)a[l]=e[l];return a}function i(e,t){var l=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=l){var a,n,r=[],c=!0,d=!1;try{for(l=l.call(e);!(c=(a=l.next()).done);c=!0)if(r.push(a.value),t&&r.length===t)break}catch(u){d=!0,n=u}finally{try{c||null==l["return"]||l["return"]()}finally{if(d)throw n}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var t=e.children,l=Object(a["useRef"])(),r=Object(a["useState"])(!1),u=d(r,2),m=u[0],o=u[1],i=Object(a["useState"])(!1),E=d(i,2),s=E[0],f=E[1];return Object(a["useEffect"])((function(){var e=l.current,t=c()((function(){o(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return t(),e.addEventListener("scroll",t),window.addEventListener("resize",t),function(){e.removeEventListener("scroll",t),window.removeEventListener("resize",t)}}),[]),n.a.createElement("div",{className:"__dumi-default-table"},n.a.createElement("div",{className:"__dumi-default-table-content",ref:l,"data-left-folded":m||void 0,"data-right-folded":s||void 0},n.a.createElement("table",null,t)))};t["a"]=s},oXGo:function(e,t,l){"use strict";l.r(t);var a=l("q1tI"),n=l.n(a),r=l("dEAq"),c=l("Zxc8"),d=l("H1Ra"),u=l("dMo/"),m=n.a.memo((e=>{var t=e.demos,l=t["set-table-header-demo"].component;return n.a.createElement(n.a.Fragment,null,n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"markdown"},n.a.createElement("h3",{id:"\u5b89\u88c5\u548c\u521d\u59cb\u5316"},n.a.createElement(r["AnchorLink"],{to:"#\u5b89\u88c5\u548c\u521d\u59cb\u5316","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5\u548c\u521d\u59cb\u5316"),n.a.createElement(d["a"],{code:"npm install @tddc/set-table-header --save",lang:"unknown"}),n.a.createElement("h3",{id:"\u8bf4\u660e"},n.a.createElement(r["AnchorLink"],{to:"#\u8bf4\u660e","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u8bf4\u660e"),n.a.createElement("ul",null,n.a.createElement("li",null,"\u81ea\u5b9a\u4e49\u8868\u5934\u8bbe\u7f6e")),n.a.createElement("h3",{id:"\u81ea\u5b9a\u4e49\u8868\u5934demo"},n.a.createElement(r["AnchorLink"],{to:"#\u81ea\u5b9a\u4e49\u8868\u5934demo","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\u81ea\u5b9a\u4e49\u8868\u5934demo")),n.a.createElement(c["default"],t["set-table-header-demo"].previewerProps,n.a.createElement(l,null)),n.a.createElement("div",{className:"markdown"},n.a.createElement("h4",{id:"-\u5165\u53c2"},n.a.createElement(r["AnchorLink"],{to:"#-\u5165\u53c2","aria-hidden":"true",tabIndex:-1},n.a.createElement("span",{className:"icon icon-link"})),"\ud83d\ude80 ",n.a.createElement("code",null,"\u5165\u53c2")),n.a.createElement(u["a"],null,n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("th",null,"\u53c2\u6570"),n.a.createElement("th",null,"\u8bf4\u660e"),n.a.createElement("th",null,"\u7c7b\u578b"),n.a.createElement("th",null,"\u9ed8\u8ba4\u503c"),n.a.createElement("th",null,"\u662f\u5426\u5fc5\u586b"))),n.a.createElement("tbody",null,n.a.createElement("tr",null,n.a.createElement("td",null,"allTableHead"),n.a.createElement("td",null,"table\u7684\u6240\u6709\u5217"),n.a.createElement("td",null,"Array<field, fieldName>"),n.a.createElement("td",null,"[]"),n.a.createElement("td",null,"\u662f")),n.a.createElement("tr",null,n.a.createElement("td",null,"currentTableHead"),n.a.createElement("td",null,"\u5f53\u524d\u9009\u4e2d\u7684\u5217"),n.a.createElement("td",null,"Array<field, fieldName>"),n.a.createElement("td",null,"[]"),n.a.createElement("td",null,"\u662f")),n.a.createElement("tr",null,n.a.createElement("td",null,"defaultTableHead"),n.a.createElement("td",null,"\u9ed8\u8ba4\u9009\u4e2d\u7684\u5217,\u7528\u4e8e\u70b9\u51fb\u9ed8\u8ba4\u5217"),n.a.createElement("td",null,"Array<field, fieldName>"),n.a.createElement("td",null,"[]"),n.a.createElement("td",null,"\u548conSetDefault\u5fc5\u987b\u6709\u4e00\u4e2a")),n.a.createElement("tr",null,n.a.createElement("td",null,"onSetDefault"),n.a.createElement("td",null,"\u9009\u4e2d\u9ed8\u8ba4\u5217\u540e\u7684\u56de\u8c03"),n.a.createElement("td",null,"Promise<field, fieldName>[]"),n.a.createElement("td",null,"async () => []"),n.a.createElement("td",null,"\u548cdefaultTableHead\u5fc5\u987b\u6709\u4e00\u4e2a")),n.a.createElement("tr",null,n.a.createElement("td",null,"renderItem"),n.a.createElement("td",null,"\u6bcf\u4e00\u9879\u7684\u6e32\u67d3"),n.a.createElement("td",null,"FN"),n.a.createElement("td",null,"(item) => ",n.a.createElement("div",null," key=","{","item.field","}"," item=","{","item","}"," value=","{","item.field","}",">","{","item.fieldName","}")),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"onCancel"),n.a.createElement("td",null,"\u53d6\u6d88\u5f39\u7a97\u7684\u56de\u8c03"),n.a.createElement("td",null,"FN"),n.a.createElement("td",null,"() => ","{"," ","}"),n.a.createElement("td",null,"\u5426")),n.a.createElement("tr",null,n.a.createElement("td",null,"onOk"),n.a.createElement("td",null,"\u70b9\u51fb\u786e\u8ba4\u540e\u7684\u56de\u8c03"),n.a.createElement("td",null,"Promise"),n.a.createElement("td",null,"async () => ","{","}"),n.a.createElement("td",null,"\u5426")))))))}));t["default"]=e=>{var t=n.a.useContext(r["context"]),l=t.demos;return n.a.useEffect((()=>{var t;null!==e&&void 0!==e&&null!==(t=e.location)&&void 0!==t&&t.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),n.a.createElement(m,{demos:l})}}}]);