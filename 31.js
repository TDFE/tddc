(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{"/Dnb":function(e,t,n){},YNjj:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var a=n("q1tI"),i=n.n(a),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"12px",n=10,a=document.createElement("span");return a.innerText=e,a.style.fontSize=t,document.documentElement.append(a),n=a.offsetWidth,document.documentElement.removeChild(a),n},r=(e,t,n)=>{var a=[];while(t>1){var i=0,l=!1,r=new Array(t).fill(0);while(i<e.length){var o=i%t;if(e[i]>r[o]){r[o]=e[i];var u=r.reduce(((e,t)=>e+t));if(u>n){l=!0;break}}i++}if(!l){a=r;break}if(t--,1===t){a=[n];break}l=!1}return a},o=n("tJVT"),u=(e,t,n)=>{var i=Object(a["useState"])([]),l=Object(o["default"])(i,2),u=l[0],d=l[1],c=Object(a["useState"])(0),v=Object(o["default"])(c,2),s=v[0],m=v[1];return Object(a["useEffect"])((()=>{var e=t.current,n=function(){var e,n,a=null===(e=t.current)||void 0===e||null===(n=e.getBoundingClientRect())||void 0===n?void 0:n.width;m(a)};if(e){var a,i=null===e||void 0===e||null===(a=e.getBoundingClientRect())||void 0===a?void 0:a.width;console.log(i,"containerWidth"),m(i)}return window.addEventListener("resize",n,!1),()=>{window.removeEventListener("resize",n,!1)}}),[t]),Object(a["useEffect"])((()=>{var t=r(e,n,s);d(t)}),[e,t,n,s]),u},d=u,c=(n("/Dnb"),e=>{var t=e.list,n=e.labelFontSize,r=void 0===n?"12px":n,o=e.valueFontSize,u=void 0===o?"14px":o,c=e.itemSpace,v=void 0===c?8:c,s=e.maxColumn,m=void 0===s?10:s,f=Object(a["useRef"])(),b=Object(a["useMemo"])((()=>null===t||void 0===t?void 0:t.map((e=>{var t=e.label,n=e.value;return l(t+":",r)+l(n,u)+v+15}))),[t]),p=d(b,f,m);return Array.isArray(t)?i.a.createElement("div",{ref:f,className:"auto-text-align-wrapper"},t.map(((e,t)=>{var n=e.label,a=e.value,l=p[t%(null===p||void 0===p?void 0:p.length)];return i.a.createElement("div",{key:n,className:"auto-text-align-item",style:{width:l?l+"px":"auto",paddingRight:v}},i.a.createElement("div",{className:"auto-text-align-label",style:{fontSize:r}},n,":"),i.a.createElement("div",{className:"auto-text-align-value",style:{fontSize:u}},a))}))):null}),v=Object(a["memo"])(c)}}]);