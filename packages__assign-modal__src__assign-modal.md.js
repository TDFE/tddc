(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[23],{MZF8:function(e,n,t){"use strict";var a=t("ogwx");t.d(n,"a",(function(){return a["b"]}));t("VCU9")},WpQk:function(e,n,t){},"dMo/":function(e,n,t){"use strict";var a=t("q1tI"),l=t.n(a),r=t("hKI/"),c=t.n(r);t("WpQk");function d(e,n){return E(e)||m(e,n)||o(e,n)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,n){if(e){if("string"===typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,a=new Array(n);t<n;t++)a[t]=e[t];return a}function m(e,n){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var a,l,r=[],c=!0,d=!1;try{for(t=t.call(e);!(c=(a=t.next()).done);c=!0)if(r.push(a.value),n&&r.length===n)break}catch(i){d=!0,l=i}finally{try{c||null==t["return"]||t["return"]()}finally{if(d)throw l}}return r}}function E(e){if(Array.isArray(e))return e}var s=function(e){var n=e.children,t=Object(a["useRef"])(),r=Object(a["useState"])(!1),i=d(r,2),o=i[0],u=i[1],m=Object(a["useState"])(!1),E=d(m,2),s=E[0],f=E[1];return Object(a["useEffect"])((function(){var e=t.current,n=c()((function(){u(e.scrollLeft>0),f(e.scrollLeft<e.scrollWidth-e.offsetWidth)}),100);return n(),e.addEventListener("scroll",n),window.addEventListener("resize",n),function(){e.removeEventListener("scroll",n),window.removeEventListener("resize",n)}}),[]),l.a.createElement("div",{className:"__dumi-default-table"},l.a.createElement("div",{className:"__dumi-default-table-content",ref:t,"data-left-folded":o||void 0,"data-right-folded":s||void 0},l.a.createElement("table",null,n)))};n["a"]=s},iIZ4:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),l=t.n(a),r=t("dEAq"),c=t("Zxc8"),d=t("H1Ra"),i=t("dMo/"),o=l.a.memo((e=>{var n=e.demos,t=n["assign-modal-demo"].component;return l.a.createElement(l.a.Fragment,null,l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"markdown"},l.a.createElement("h3",{id:"\u5b89\u88c5\u548c\u521d\u59cb\u5316"},l.a.createElement(r["AnchorLink"],{to:"#\u5b89\u88c5\u548c\u521d\u59cb\u5316","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u5b89\u88c5\u548c\u521d\u59cb\u5316"),l.a.createElement(d["a"],{code:"npm install @tddc/assign-modal --save",lang:"unknown"}),l.a.createElement("h3",{id:"\u6388\u6743\u7ec4\u4ef6\u5728\u4e2d\u53f0\u4e2d\u7684\u4f7f\u7528"},l.a.createElement(r["AnchorLink"],{to:"#\u6388\u6743\u7ec4\u4ef6\u5728\u4e2d\u53f0\u4e2d\u7684\u4f7f\u7528","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6388\u6743\u7ec4\u4ef6\u5728\u4e2d\u53f0\u4e2d\u7684\u4f7f\u7528")),l.a.createElement(c["default"],n["assign-modal-demo"].previewerProps,l.a.createElement(t,null)),l.a.createElement("div",{className:"markdown"},l.a.createElement("h5",{id:"\u673a\u6784\u6811\u8054\u52a8\u903b\u8f91"},l.a.createElement(r["AnchorLink"],{to:"#\u673a\u6784\u6811\u8054\u52a8\u903b\u8f91","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u673a\u6784\u6811\u8054\u52a8\u903b\u8f91"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u673a\u6784\u6388\u6743\u65f6\uff0c\u70b9\u51fb\u6388\u6743\u67d0\u4e0b\u7ea7\u673a\u6784\uff0c\u8be5\u673a\u6784\u7684\u4e0a\u7ea7\u673a\u6784\u9ed8\u8ba4\u4e00\u8d77\u6388\u6743\u4e0a"),l.a.createElement("li",null,"\u53d6\u6d88\u6388\u6743\u65f6\uff0c\u70b9\u51fb\u53d6\u6d88\u67d0\u4e0a\u7ea7\u673a\u6784\u6388\u6743\uff0c\u8be5\u673a\u6784\u7684\u4e0b\u7ea7\u673a\u6784\u9ed8\u8ba4\u4e00\u8d77\u53d6\u6d88\u6388\u6743"),l.a.createElement("li",null,"\u521b\u5efa\u65f6\uff0c\u8be5\u6307\u6807/\u89c4\u5219\u96c6\u7684\u6240\u5c5e\u673a\u6784\u53ca\u5176\u4e0a\u7ea7\u673a\u6784\u9ed8\u8ba4\u6388\u6743\u52fe\u9009\u4e14\u7f6e\u7070\u4e0d\u5f97\u4fee\u6539"),l.a.createElement("li",null,"\u673a\u6784\u6388\u6743\u52fe\u9009\u5168\u5c40\u65f6\uff0c\u7cfb\u7edf\u5185\u6240\u6709\u673a\u6784\u90fd\u88ab\u6388\u6743\u53ef\u4f7f\u7528\u8be5\u7ec4\u4ef6\uff0c\u4e14\u5f53\u524d\u7528\u6237\u6240\u5728\u673a\u6784\u6811\u4e0b\u6240\u6709\u673a\u6784\u90fd\u52fe\u4e0a\u6388\u6743\u5173\u7cfb, \u6b64\u65f6 ",l.a.createElement("code",null,"checkedKeys = ['all'] // \u673a\u6784\u5b57\u6bb5"))),l.a.createElement("h5",{id:"\u6e20\u9053\u8054\u52a8\u903b\u8f91"},l.a.createElement(r["AnchorLink"],{to:"#\u6e20\u9053\u8054\u52a8\u903b\u8f91","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\u6e20\u9053\u8054\u52a8\u903b\u8f91"),l.a.createElement("ul",null,l.a.createElement("li",null,"\u6e20\u9053\u6388\u6743\u52fe\u9009\u5168\u5c40\u65f6\uff0c\u7cfb\u7edf\u5185\u6240\u6709\u6e20\u9053\u90fd\u88ab\u6388\u6743\u53ef\u4f7f\u7528\u8be5\u7ec4\u4ef6\uff0c\u4e14\u5f53\u524d\u7528\u6237\u6240\u5728\u673a\u6784\u6811\u4e0b\u6240\u6709\u673a\u6784\u90fd\u52fe\u4e0a\u6388\u6743\u5173\u7cfb\uff0c \u6b64\u65f6 ",l.a.createElement("code",null,"appKeys = ['all'] // \u6e20\u9053\u5b57\u6bb5"))),l.a.createElement("h4",{id:"-\u5165\u53c2"},l.a.createElement(r["AnchorLink"],{to:"#-\u5165\u53c2","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83d\ude80 ",l.a.createElement("code",null,"\u5165\u53c2")),l.a.createElement(i["a"],null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"\u53c2\u6570"),l.a.createElement("th",null,"\u8bf4\u660e"),l.a.createElement("th",null,"\u7c7b\u578b"),l.a.createElement("th",null,"\u9ed8\u8ba4\u503c"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"visible"),l.a.createElement("td",null,"\u5f39\u7a97\u662f\u5426\u53ef\u89c1"),l.a.createElement("td",null,"Boo"),l.a.createElement("td",null,"false")),l.a.createElement("tr",null,l.a.createElement("td",null,"disabled"),l.a.createElement("td",null,"\u662f\u5426\u7981\u7528\u7f16\u8f91"),l.a.createElement("td",null,"Boo"),l.a.createElement("td",null,"false")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(r["AnchorLink"],{to:"#-orglist-%E5%86%B3%E7%AD%96%E4%B8%AD%E5%8F%B0%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84"},"orgList")),l.a.createElement("td",null,"\u673a\u6784\u5217\u8868"),l.a.createElement("td",null,"Object"),l.a.createElement("td",null,"[]")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(r["AnchorLink"],{to:"#-applist-%E5%86%B3%E7%AD%96%E4%B8%AD%E5%8F%B0%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84"},"appList")),l.a.createElement("td",null,"\u5e94\u7528\u5217\u8868"),l.a.createElement("td",null,"Object"),l.a.createElement("td",null,"[]")),l.a.createElement("tr",null,l.a.createElement("td",null,"title"),l.a.createElement("td",null,"\u6807\u9898"),l.a.createElement("td",null,"String"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(r["AnchorLink"],{to:"#-dataitem-%E5%86%B3%E7%AD%96%E4%B8%AD%E5%8F%B0%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84"},"dataItem")),l.a.createElement("td",null,"\u6388\u6743\u5217\u8868\u9879(","{"," appCode, appCodes, orgCode, orgCodes","}",")"),l.a.createElement("td",null,"Object"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"onSubmit"),l.a.createElement("td",null,"\u786e\u5b9a\u64cd\u4f5c\u56de\u8c03"),l.a.createElement("td",null,"function(data)"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"close"),l.a.createElement("td",null,"\u5173\u95ed\u64cd\u4f5c\u56de\u8c03"),l.a.createElement("td",null,"function"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"appTitle"),l.a.createElement("td",null,"\u6e20\u9053\u5217\u8868\u6807\u9898"),l.a.createElement("td",null,"String"),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,"orgTitle"),l.a.createElement("td",null,"\u673a\u6784\u5217\u8868\u6807\u9898"),l.a.createElement("td",null,"String"),l.a.createElement("td",null)))),l.a.createElement("h4",{id:"-orglist-\u51b3\u7b56\u4e2d\u53f0\u6570\u636e\u7ed3\u6784"},l.a.createElement(r["AnchorLink"],{to:"#-orglist-\u51b3\u7b56\u4e2d\u53f0\u6570\u636e\u7ed3\u6784","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83d\ude80 ",l.a.createElement("code",null,"orgList \u51b3\u7b56\u4e2d\u53f0\u6570\u636e\u7ed3\u6784")),l.a.createElement(d["a"],{code:"[\n  {\n    uuid: 'a8202aea546f48979754bdd45c471b08',\n    gmtCreate: 1534236485000,\n    gmtModified: 1652357658000,\n    code: 'TongDun',\n    level: 1,\n    name: '\u540c\u76fe\u79d1\u6280',\n    enName: 'Tongdun',\n    children: [\n      {\n        uuid: 'eb4ead032843421cae09764086a22385',\n        gmtCreate: 1640674771000,\n        gmtModified: 1653892116000,\n        code: 'second',\n        level: 2,\n        parentUuid: 'a8202aea546f48979754bdd45c471b08',\n        name: '\u4e8c\u7ea7\u673a\u6784',\n        children: [\n          {\n            uuid: '950dd630dd894a388bd9643a8cb81d91',\n            gmtCreate: 1653892154000,\n            gmtModified: 1653892154000,\n            code: 'third',\n            level: 3,\n            parentUuid: 'eb4ead032843421cae09764086a22385',\n            name: '\u4e09\u7ea7\u673a\u6784',\n            children: [],\n            title: '\u4e09\u7ea7\u673a\u6784',\n            value: 'third',\n            key: 'third',\n          },\n        ],\n        title: '\u4e8c\u7ea7\u673a\u6784',\n        value: 'second',\n        key: 'second',\n      },\n      {\n        uuid: '6ab67ec5e4694cb3b0eaf45b940dd249',\n        gmtCreate: 1653892195000,\n        gmtModified: 1653892195000,\n        code: 'secondB',\n        level: 2,\n        parentUuid: 'a8202aea546f48979754bdd45c471b08',\n        name: '\u4e8c\u7ea7\u673a\u6784B',\n        children: [\n          {\n            uuid: '9ac2ffd5f29c4ec7b727a92f21a4e573',\n            gmtCreate: 1653892213000,\n            gmtModified: 1653892213000,\n            code: 'thirdB',\n            level: 3,\n            parentUuid: '6ab67ec5e4694cb3b0eaf45b940dd249',\n            name: '\u4e09\u7ea7\u673a\u6784B',\n            children: [\n              {\n                uuid: '39a54700c0e44addae4955090c820136',\n                gmtCreate: 1655795757000,\n                gmtModified: 1655795757000,\n                code: '4jijigou',\n                level: 4,\n                parentUuid: '9ac2ffd5f29c4ec7b727a92f21a4e573',\n                name: '\u56db\u7ea7\u673a\u6784C',\n                children: [],\n                title: '\u56db\u7ea7\u673a\u6784C',\n                value: '4jijigou',\n                key: '4jijigou',\n              },\n            ],\n            title: '\u4e09\u7ea7\u673a\u6784B',\n            value: 'thirdB',\n            key: 'thirdB',\n          },\n        ],\n        title: '\u4e8c\u7ea7\u673a\u6784B',\n        value: 'secondB',\n        key: 'secondB',\n      },\n    ],\n    title: '\u540c\u76fe\u79d1\u6280',\n    value: 'TongDun',\n    key: 'TongDun',\n  },\n];",lang:"javascript"}),l.a.createElement("h4",{id:"-applist-\u51b3\u7b56\u4e2d\u53f0\u6570\u636e\u7ed3\u6784"},l.a.createElement(r["AnchorLink"],{to:"#-applist-\u51b3\u7b56\u4e2d\u53f0\u6570\u636e\u7ed3\u6784","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83d\ude80 ",l.a.createElement("code",null,"appList \u51b3\u7b56\u4e2d\u53f0\u6570\u636e\u7ed3\u6784")),l.a.createElement(d["a"],{code:"[\n  {\n    uuid: '1601fa112a7042a0a665ced5bb38145f',\n    gmtCreate: 1629357194000,\n    gmtModified: 1640593395000,\n    name: 'TG01',\n    displayName: '\u5929\u7b56_\u4ea4\u6613',\n    partnerCode: 'kratos',\n    have: true,\n    description: 'TG01',\n    signForSwitch: false,\n    signForWrite: false,\n    label: '\u5929\u7b56_\u4ea4\u6613',\n    value: 'TG01',\n  },\n  {\n    uuid: 'ee3fb41440f04c558c49dbd3ba832883',\n    gmtCreate: 1629357212000,\n    gmtModified: 1640593385000,\n    name: 'TG02',\n    displayName: '\u5929\u7b56_\u4fe1\u8d37',\n    partnerCode: 'kratos',\n    have: true,\n    description: 'TG02',\n    signForSwitch: false,\n    signForWrite: false,\n    label: '\u5929\u7b56_\u4fe1\u8d37',\n    value: 'TG02',\n  },\n  {\n    uuid: '4740e7e4c5454819a93ba61265de0f95',\n    gmtCreate: 1640676527000,\n    gmtModified: 1640676527000,\n    name: 'sbh',\n    displayName: '\u968f\u4fbf\u82b1',\n    partnerCode: 'kratos',\n    have: true,\n    description: '\u968f\u4fbf\u82b1\u673a\u5668\u4eba\u652f\u6301\u968f\u4fbf\u82b1',\n    signForSwitch: false,\n    signForWrite: false,\n    label: '\u968f\u4fbf\u82b1',\n    value: 'sbh',\n  },\n];",lang:"javascript"}),l.a.createElement("h4",{id:"-dataitem-\u51b3\u7b56\u4e2d\u53f0\u6570\u636e\u7ed3\u6784"},l.a.createElement(r["AnchorLink"],{to:"#-dataitem-\u51b3\u7b56\u4e2d\u53f0\u6570\u636e\u7ed3\u6784","aria-hidden":"true",tabIndex:-1},l.a.createElement("span",{className:"icon icon-link"})),"\ud83d\ude80 ",l.a.createElement("code",null,"dataItem \u51b3\u7b56\u4e2d\u53f0\u6570\u636e\u7ed3\u6784")),l.a.createElement(d["a"],{code:"{\n        appCode: 'app1', // \u6240\u5c5e\u5e94\u7528\n        orgCode: 'TongDun', // \u6240\u5c5e\u673a\u6784\n        appCodes: ['app1', 'app2'], // \u5177\u6709\u6743\u9650\u7684\u5e94\u7528\n        orgCodes: ['TongDun', 'JiGou1'], // \u5177\u6709\u6743\u9650\u7684\u673a\u6784\n    }",lang:"javascript"}))))}));n["default"]=e=>{var n=l.a.useContext(r["context"]),t=n.demos;return l.a.useEffect((()=>{var n;null!==e&&void 0!==e&&null!==(n=e.location)&&void 0!==n&&n.hash&&r["AnchorLink"].scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.a.createElement(o,{demos:t})}}}]);