(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[54],{"/a18":function(e,t,a){"use strict";a.r(t),a.d(t,"flatten",(function(){return h}));var n=a("0Owb"),o=(a("52II"),a("rcpY")),r=a("tJVT"),l=a("k1fw"),c=a("q1tI"),d=a.n(c),i=a("WHYC"),u=a("uYtH"),v=(a("p6Fh"),e=>{var t,a,n=e.substring(1).split("&"),o={};for(a in n)""!==n[a]&&(t=n[a].split("="),o[decodeURIComponent(t[0])]=decodeURIComponent(t[1]));return o}),p=e=>{var t="";return Object.keys(e).forEach((a=>{t=""===t?"".concat(a,"=").concat(e[a]):"".concat(t,"&").concat(a,"=").concat(e[a])})),t};function h(e){for(var t,a=[],n=null===e||void 0===e||null===(t=e.props)||void 0===t?void 0:t.children,o=0,r=null===n||void 0===n?void 0:n.length;o<r;o++){var l,c,d;if(Array.isArray(null===(l=n[o])||void 0===l||null===(c=l.props)||void 0===c?void 0:c.children))a=a.concat(h(n[o]));else a.push(null===(d=n[o])||void 0===d?void 0:d.props)}return a}t["default"]=(e,t)=>{var a=t||{},s=a.includesSearch,m=void 0===s?["currentTab"]:s,b=a.BreadCrumbCustom,f=a.BreadCrumbPrototype,g=void 0===f?{}:f,j=a.showHeader;return Object(i["o"])((t=>{var a=t||{},s=a.match,f=a.location,w=f||{},O=w.pathname,E=w.search,k=e(Object(l["a"])({},t)),C=Object(c["useState"])([]),I=Object(r["default"])(C,2),y=I[0],F=I[1],H=v(E),J={};for(var Y in H)m.includes(Y)&&(J[Y]=H[Y]);return Object(c["useEffect"])((()=>{var e,t=[];null===(e=h(k))||void 0===e||e.forEach((e=>{t.push({path:"/"===e.path?null===s||void 0===s?void 0:s.path:e.path,name:e.name})}));var a=null===t||void 0===t?void 0:t.filter((e=>{var t=e.path;return Object(i["j"])(O,{path:t})}));a.sort(((e,t)=>e.path.length-t.path.length)),F(a)}),[O]),d.a.createElement(d.a.Fragment,null,((null===y||void 0===y?void 0:y.length)>1||j)&&d.a.createElement("div",{className:"page-global-header bread-crumb-head"},b&&!(null===y||void 0===y||!y.length)&&b(y),!b&&d.a.createElement(o["a"],Object(n["default"])({separator:">",className:"c-breadcrumb"},g||{}),null===y||void 0===y?void 0:y.map(((e,t)=>{var a=null;return t<(null===y||void 0===y?void 0:y.length)-1&&(a=(null===e||void 0===e?void 0:e.path)+(p(J)?"?".concat(p(J)):"")),d.a.createElement(o["a"].Item,{key:null===e||void 0===e?void 0:e.path},a?d.a.createElement(u["Link"],{to:a},null===e||void 0===e?void 0:e.name):null===e||void 0===e?void 0:e.name)})))),k||null)}))}},p6Fh:function(e,t,a){}}]);