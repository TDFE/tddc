(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[29],{F1IJ:function(e,a,n){},TnVd:function(e,a,n){},TvK2:function(e,a,n){},gLab:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return c})),n.d(a,"RuleTree",(function(){return P}));var t=n("k1fw"),l=n("q1tI"),i=n.n(l),r=n("KQTq"),o=e=>{var a,n,o=e.data,c=e.options,s=e.refs,m=void 0===s?{}:s,u=e.styleOptions,d=e.style,p=(null===(a=window)||void 0===a||null===(n=a.propsData)||void 0===n?void 0:n.data)||o,v=Object(l["useRef"])(),f=Object(l["useRef"])();return Object(l["useEffect"])((()=>{f.current=Object(r["default"])(),m.current=f.current;var e={options:c,styleOptions:u,refs:m,container:v.current};f.current.init(e)}),[]),Object(l["useEffect"])((()=>{f.current.setData(p)}),[p]),i.a.createElement("div",{id:"tree",style:Object(t["a"])({},d)},i.a.createElement("div",{ref:v,style:{transformOrigin:"0 0"}}))},c=o,s=n("tJVT"),m=n("tQNo");function u(e,a,n){var l=a||{logic:"",children:[]},i=0,r=0,o={logic:"&&",children:[]},c=!1,s=!1;while(r<e.length){if("("===e.charAt(r))i++;else if(")"===e.charAt(r))i--;else if("|"===e.charAt(r)&&0===i){var m=e.substr(0,r);o.logic="||",o.children.push(m),e=e.substr(r+1),r=-1,s=!0}else"&"===e.charAt(r)&&0===i&&(c=!0);r++,r<e.length||0!==i||o.children.push(e)}if(l.logic=o.logic,!s&&c){var p=o.children[0],v=0,f=0;o.children=[];while(f<p.length){if("("===p.charAt(f))v++;else if(")"===p.charAt(f))v--;else if("&"===p.charAt(f)&&0===v){var g=p.substr(0,f);o.logic="||",o.children.push(g),p=p.substr(f+1),f=-1}""!==p&&f+1>=p.length&&(""!==p&&"("===p.charAt(0)&&")"===p.charAt(p.length-1)&&d(p.substr(1,p.length-2))&&(p=p.substr(1,p.length-2)),o.children.push(p)),f++}}return o.children=o.children.map((e=>{if(e.indexOf("&")>-1||e.indexOf("|")>-1){var a=e,i={logic:"&&",children:[]};""!==a&&"("===a.charAt(0)&&")"===a.charAt(a.length-1)&&d(a.substr(1,a.length-2))&&(a=a.substr(1,a.length-2)),l.children.push(i),u(a,i,n)}else{var r={};r=Object(t["a"])({name:e},n[e]),n[e]&&n[e].children&&(r.isGroup=!0),l.children.push(r)}})),l}function d(e){e=e.replace(/[^\(\)]/g,"");while(/\(\)/.test(e))e=e.replace(/\(\)/g,"");return""===e}function p(e,a){var n=[];return e&&e["params"]&&e["params"].map(((e,t)=>{e.children&&e.children.map(((e,t)=>{var l=a.find((a=>a.name===e.name)),i={name:e.name,componentType:e.componentType,type:e.type?e.type:"string",value:l&&l.value?l.value:e.defaultValue,mapType:e.mapType?e.mapType:null,selectName:e.selectName?e.selectName:null,selectType:e.selectType?e.selectType:null,selectOption:e.selectOption?e.selectOption:null,willChangeOther:e["willChangeOther"]?e["willChangeOther"]:[],willChangeSelf:e["willChangeSelf"]?e["willChangeSelf"]:null,willChangeParent:e["willChangeParent"]?e["willChangeParent"]:[]};n.push(i)}))})),n}function v(e,a){var n="string";if(e&&e.selectType&&"service"===e.selectType&&e.value&&e.selectName){var t=a&&a[e.selectName]&&e.value&&a[e.selectName].filter((a=>a.name===e.value))[0];n=t&&t["type"]?t["type"].toLowerCase():"string"}return n}var f=e=>{if("string"===typeof e)try{var a=JSON.parse(e);return!("object"!==typeof a||!a)}catch(n){return!1}},g=(e,a)=>{var n,t={field:{cn:"\u5b57\u6bb5",en:"field"},realtime:{cn:"\u5b9e\u65f6",en:"realtime"},offline:{cn:"\u79bb\u7ebf",en:"offline"}};return(null===(n=t[e])||void 0===n?void 0:n[a])||e},h=n("qV8v"),y={"==":"=","<=":"<=",">=":">=","!=":"!=","<":"<",">":">",include:"\u5305\u542b",prefix:"\u524d\u7f00",exclude:"\u4e0d\u5305\u542b",suffix:"\u540e\u7f00",isnull:"\u4e3a\u7a7a",notnull:"\u4e0d\u4e3a\u7a7a",in:"\u5b58\u5728",notin:"\u4e0d\u5b58\u5728"},N=["multiDimList/customList"],E=n("0Owb"),T=n("PpiC"),b=n("qM5x"),O=(n("quo7"),["data","showSourceName","bool","inputValue"]),L={INT:{displayName:"\u6574\u6570",color:"#5262C7"},DOUBLE:{displayName:"\u5c0f\u6570",color:"#00D2C2"},STRING:{displayName:"\u5b57\u7b26",color:"#826AF9"},ENUM:{displayName:"\u679a\u4e3e",color:"#00C5DC"},BOOLEAN:{displayName:"\u5e03\u5c14",color:"#4A9AF7"},DATETIME:{displayName:"\u65e5\u671f",color:"#826AF9"},INTEGER:{displayName:"\u6574\u6570",color:"#5262C7"},FLOAT:{displayName:"\u5c0f\u6570",color:"#00D2C2"},BOOL:{displayName:"\u5e03\u5c14",color:"#4A9AF7"},DATE:{displayName:"\u65e5\u671f",color:"#826AF9"},ARRAY:{displayName:"\u6570\u7ec4",color:"#00D2C2"}},A=e=>{var a,t=e.data,l=void 0===t?{}:t,r=e.showSourceName,o=void 0===r||r,c=e.bool,s=void 0===c||c,m=e.inputValue,u=Object(T["a"])(e,O),d=!1,p={},v=(null===l||void 0===l?void 0:l.status)||(null===l||void 0===l?void 0:l.ruleSetStatus);return(null===l||void 0===l?void 0:l.metricArea)&&"EDIT"===l.metricArea&&(d=!0),"import_wait_commit"===v&&(d=!0),s&&(a=l.dataType||l.datatype||l.type||"",p=L[a.toUpperCase()]?L[a.toUpperCase()]:{}),i.a.createElement("div",Object(E["default"])({className:"td-tag"},u,{style:{lineHeight:"22px"}}),s&&!m&&i.a.createElement("sup",{style:{color:p.color}},p.displayName," "),d&&i.a.createElement(b["Tooltip"],{title:"\u5bfc\u5165\u5f85\u63d0\u4ea4",placement:"top"},i.a.createElement("img",{src:n("muA5"),className:"tag-img"})),o&&"[".concat(null===l||void 0===l?void 0:l.sourceName,"]"))},w=A,C=(n("jvWb"),{"&&":"\u4e0e","||":"\u6216"}),x=e=>{var a=e.allMap,n=e.lang,t=e.conditionData,l=e.conditionSingleData,r=e.conditionType,o=e.conditionArr,c=e.keyMap,s=void 0===c?{}:c,m=a.fieldParamListSelect,u=void 0===m?[]:m,d=a.ruleAndIndexFieldList,p=void 0===d?[]:d,v="in"===l["op"]||"notin"===l["op"],f=t||{},g=f.logicOperator,N=["","","","",""],E=N.property,T=N.propertyDataType,b=N.op,O=N.rightValueType,L=N.value;E=l[s.property||"property"],T=l[s.propertyDataType||"propertyDataType"],b=l[s.op||"op"],O=l[s.rightValueType||"rightValueType"],L=l[s.value||"value"];var A=["belong","notbelong"].includes(b),x=["prefix","suffix"].includes(b),D=["",""],S=D[0];E&&p&&p.length&&(S=p.find((e=>e.name===E))||{},S=S&&S.dName?i.a.createElement(i.a.Fragment,null,i.a.createElement(w,{data:S}),S.dName):E);var j=()=>i.a.createElement("span",{className:"condition-op"},y[b]||b),F=()=>{var e=p.filter((e=>e.type&&(e.type===T||["DOUBLE","INT"].includes(e.type)&&["DOUBLE","INT"].includes(T)))).find((e=>e.name===L))||{};return i.a.createElement("span",{className:"condition-type"},i.a.createElement(i.a.Fragment,null,i.a.createElement(w,{data:e}),e.dName)||L)},I=()=>{var e={};return l["enumTypeValues"].length&&(e=l["enumTypeValues"].find((e=>e.value===L))||{}),i.a.createElement("span",{className:"condition-value"},e.description||L)},V=()=>{var e,a=[],n=(null===(e=p.find((e=>e.name===l.property)))||void 0===e?void 0:e.enumTypeValues)||[];return n.length&&(a=n.filter((e=>L.includes(e.value)))||{}),a.map(((e,a)=>i.a.createElement("span",{className:"condition-value",key:a},e.description||"")))},M=()=>{var e=u.find((e=>e.name===L))||{};return i.a.createElement("span",{className:"condition-op"},("en"===n?e.enDName:e.dName)||L)},J=i.a.createElement("span",{className:"one-condition-item ".concat("group"===r?"one-condition-group-item":"")},"group"===r&&"".concat(Number(o[0])+1,".").concat(Number(o[1])+1,". "),i.a.createElement("span",{className:"condition-value"},S),j(),b&&!["isnull","notnull"].includes(b)&&i.a.createElement(i.a.Fragment,null,x&&i.a.createElement("span",{className:"condition-op"},x&&("en"===n?" is ":"\u4e3a")),"input"===O&&"ENUM"!==T&&!A&&i.a.createElement("span",{className:"condition-value"},L||0===L?L:""),"context"===O&&"ENUM"!==T&&!A&&F(),"ENUM"===T&&!A&&!v&&I(),A&&M(),v&&V()));return i.a.createElement(i.a.Fragment,null,"group"===r&&0===o[1]&&i.a.createElement("div",null,"\u6761\u4ef6\u5173\u7cfb\uff1a&nbsp;",C[g]||g),i.a.createElement(h["a"],{title:J,placement:"topLeft",overlayClassName:"node-text"},J))},D=x,S=e=>{var a=e.params,n=e.allMap,t=e.lang,l=n||{},r=l.ruleAndIndexFieldList,o=void 0===r?[]:r,c=l.multiDimCustomListBusiTypeSelect,s=void 0===c?[]:c,m=l.multiDimCustomListTypeSelect,u=void 0===m?[]:m,d=l.multiDimCustomListSelect,p=void 0===d?[]:d,v={};a&&a.map((e=>{e.name&&(v[e.name]=e.value)}));var f=[],h=v||{},y=h.defineType,N=h.definitionList,E=void 0===N?null:N,T=h.conditions,b=void 0===T?[]:T,O=h.score;y&&(f=p.filter((e=>{var a=e.type?e.type.toString():null;if(a)return a===y})));var L=o.filter((e=>"STRING"===e.type)),A={};f&&E&&(A=f.find((e=>e.uuid===E)));var w=A||{},C=w.columnBOList,x=void 0===C?[]:C,D=(u.find((e=>e.name===y))||{}).dName||y,S=(f.find((e=>e.uuid===E))||{}).name||y;return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null,"\u590d\u6838\u540d\u5355\u5217\u8868\uff1a",D," ",S),i.a.createElement("span",null,"\u5339\u914d\u5b57\u6bb5\uff1a",b&&b.map(((e,a)=>{var n=e||{},l=n.leftValue,r=n.right,o=n.weight,c=null,m=null;x&&r&&(m=x.find((e=>e.uuid===r))),m&&(c=s.find((e=>e.name===m.busiType.toString())));var u="",d="";if(L&&L.length){var p=L.find((e=>e.name===l))||{};u="[".concat(g(p.sourceName,t),"]"),d=p.dName||l}var v="";return x&&x.length&&(v=(x.find((e=>e.uuid===r))||{}).name||r),i.a.createElement("span",{key:a},u,d,v,(o||0===o)&&"\u6743\u91cd".concat(o,"%"),c&&c.dName)}))),i.a.createElement("span",null,"\u5339\u914d\u5ea6\uff1a",O||0===O?O:""))},j=e=>{var a=e.data,n=e.simpleCfgList,t=a||{},l=t.property;return i.a.createElement(i.a.Fragment,null,"multiDimList/customList"===l&&i.a.createElement(S,{currentParamInfo:a,simpleCfgList:n}))},F=(n("TnVd"),(e,a)=>{var n,t={field:{cn:"\u5b57\u6bb5",en:"field"},realtime:{cn:"\u5b9e\u65f6",en:"realtime"},offline:{cn:"\u79bb\u7ebf",en:"offline"}};return(null===(n=t[e])||void 0===n?void 0:n[a])||e}),I={input:"\u5e38\u91cf",context:"\u53d8\u91cf"},V=e=>{var a=e.allMap,n=e.ruleTemplateListObj,t=e.data,l=e.lang,r=void 0===l?"en":l,o=t||{},c=o.description,s=o.property,m=t||{},u=m.params,d=void 0===u?[]:u;"string"===typeof d&&f(d)&&(d=JSON.parse(d));var g=n&&s?n[s]:null,h=g&&g.cfgJson&&f(g.cfgJson)?JSON.parse(g.cfgJson):null,y=p(h,d),E=(e,a,n)=>{if(n){var t=[];return e&&e.length&&e.map((e=>{a.includes(e.value)&&t.push("en"===r?e.enName:e.name)})),t.join("en"===r?",":"\uff0c")}var l=e&&e.length&&e.find((e=>e.value===a))||{};return("en"===r?l.enName:l.name)||a},T=(e,a,n,t)=>{if(t){var l=[];return e&&e.length&&e.map((e=>{a.includes(e.name)&&l.push("en"===r?e.enDName:e.dName)})),l.join("en"===r?",":"\uff0c")}var i=e&&e.length&&e.find((e=>e.name===a))||{};return"ruleAndIndexFieldList"===n?"[".concat(i.sourceName&&F(i.sourceName,r),"] ").concat("en"===r?i.name:i.dName):("en"===r?i.enDName:i.dName)||a},O=(e,a)=>{a=a?a.toString().split(","):void 0;var n=[];return e&&e.length&&e.map((e=>{var t;null!==(t=a)&&void 0!==t&&t.includes(e.value)&&n.push("en"===r?e.enName:e.name)})),n.join("en"===r?",":"\uff0c")},L=(e,n)=>{var t=[];t=n?a.ruleAndIndexFieldList:a.ruleFieldList;var l=t&&t.length&&t.find((a=>a.name===e))||{};return n?"[".concat(F(l.sourceName,r),"] ").concat("en"===r?l.name:l.dName):("en"===r?l.name:l.dName)||e},A=i.a.createElement(i.a.Fragment,null,s&&N.includes(s)&&i.a.createElement(j,{data:t,simpleCfgList:y,lang:r}),s&&!N.includes(s)&&h.params&&h.params.map(((e,n)=>i.a.createElement("span",{className:"rule-condition-template",key:n},"en"===r?e.enLabelText:e.labelText," \uff1a",e.children&&e.children.map((e=>{var n=e||{},l=n.name,r=n.componentType,o=n.selectName,c=n.mapType,s=n.addonAfter,m=n.selectType,u=n.selectOption,p=n.includeIndex,f=n.mode,g=d.find((e=>e.name===l))||void 0,h=g||{},N=h.type,b=void 0===N?void 0:N,A=h.value,w=void 0===A?void 0:A,C=null;"select"===r&&o&&("static"===c?C=o:"dynamic"===c&&"${RuleSetUuid}_ruleSets"===o&&(C="rulesetVersion"));var x=y.find((e=>e.name===l))||{},D=x||{},S=D.willChangeSelf,j=void 0===S?{}:S,F=j?j.name:null,V=F?y.find((e=>e.name===F)):{},M=V.value||null,J=!1,k=j||{},U=k.changeMode,R=k.caseList,P=void 0===R?[]:R;if("whenSomeValue"===U)P&&P.map((e=>{e["modeValueList"]&&e["modeValueList"].find((e=>e===M))&&e.changeType&&"hidden"===e.changeType&&(J=!0)}));else if("whenSomeType"===U){var B=v(V,a);P&&P.map((e=>{e["modeValueList"]&&e["modeValueList"].find((e=>e.toLowerCase()===B.toLowerCase()))&&e.changeType&&"hidden"===e.changeType&&(J=!0)}))}if(!J){var q=["value","op"].includes(l)?t[l]:w;return i.a.createElement(i.a.Fragment,null,"input"===r&&"".concat(q).concat(s||""),"select"===r&&"self"===m&&(E(u,q,f)||q),"select"===r&&"service"===m&&(T(a[C],q,C,f)||q),"checkbox"===r&&"self"===m&&(O(u,w)||w),"checkbox"===r&&"service"===m&&(O(a[e.selectName],w)||w),"variable"===r&&i.a.createElement(i.a.Fragment,null,I[b],"input"===b&&(w||""),"context"===b&&L(w,p)))}}))))));return i.a.createElement(i.a.Fragment,null,g&&g.description&&i.a.createElement(b["Popover"],{content:A,overlayClassName:"template-node"},i.a.createElement("span",{className:"template-des"},i.a.createElement(b["a"],{title:"\u89c4\u5219\u63cf\u8ff0\uff1a".concat(c),placement:"bottom"}))))},M=V,J=(n("TvK2"),{"&&":"\u4e14","||":"\u6216"}),k=e=>{var a,n,t=e.node,l=e.IFCondition,r=e.lang,o=e.allMap,c=e.ruleTemplateListObj,s=t.data,m=t.parent,u=s.logic,d=void 0===u?"":u,p=s.type,v=s.name,f=s.children,g=s.logicOperator,h=J[d],y=!m;y&&l&&(h="!&&"===l?"\u6216":"\u4e14");var N=m&&"leaf"===p,E=m&&!!d&&!v,T=m&&!(null===f||void 0===f||!f.length)&&!!v,b=!(null===m||void 0===m||null===(a=m.children)||void 0===a||!a.length)&&!(null===m||void 0===m||null===(n=m.data)||void 0===n||!n.name),O=!!s.description,L=J[g],A=null;s.name&&(A=s.index);var w=s.property,C={position:"absolute",left:"-46px",zIndex:10};return i.a.createElement("div",{className:"condition-tree-node"},y&&i.a.createElement("div",{className:"root"},h),T&&i.a.createElement("div",{className:"group-node"},i.a.createElement("span",{className:"name"},v,i.a.createElement("span",{className:"node-sup"},"\u7ec4"),l&&i.a.createElement("span",{className:"node-sup if"},"\u975e")),i.a.createElement("span",{className:"logic"},L)),E&&i.a.createElement("div",{className:"relation-node"},i.a.createElement("span",{className:"logic"},h)),N&&i.a.createElement("div",{className:"leaf-node",style:b?C:{}},v&&i.a.createElement("span",{className:"name"},v,O&&i.a.createElement("span",{className:"node-sup"},"\u6a21"),l&&i.a.createElement("span",{className:"node-sup if"},"\u975e")),i.a.createElement("span",{className:"leaf-text"},O?i.a.createElement(M,{conditionIndex:A,data:s,template:w,ruleTemplateListObj:c,lang:r,allMap:o}):i.a.createElement(D,{conditionData:null,conditionSingleData:s,conditionType:"single",conditionArr:[A],allMap:o}))))},U=k,R=(n("F1IJ"),e=>{var a=e.rules,n=e.value,r=e.dataSourceList,o=e.ruleTemplateList,d=e.logicOperator,p=e.lang,v=e.options,f=void 0===v?{}:v,g=e.styleOptions,h=void 0===g?{}:g,y=e.showLogic,N=void 0!==y&&y,E=n,T=["!&&","!||"].includes(d)&&d;if(T){var b=a.map(((e,a)=>"!"+(a+1))),O="!&&"===d?"|":"&";E=b.join(O)}var L=Object(l["useState"])(),A=Object(s["default"])(L,2),w=A[0],C=A[1],x=e=>{var n=Object(m["cloneDeep"])(a),t={};n.forEach(((e,a)=>{t[a+1]=e}));var l=null;e&&(l=u(e,null,t)),C(l)};Object(l["useEffect"])((()=>{x(n)}),[n,a]);var D=e=>{var a=e.node;return i.a.createElement(U,{node:a,lang:p,allMap:r,ruleTemplateListObj:o,IFCondition:T})},S=e=>{var a,n,t=e.x,l=e.y,i=e.data,r=e.parent,o=i.type,c=r&&"leaf"===o,s=!(null===r||void 0===r||null===(a=r.children)||void 0===a||!a.length)&&!(null===r||void 0===r||null===(n=r.data)||void 0===n||!n.name);return c&&s?[t,l+95]:[t,l]};return i.a.createElement("div",{className:"custom-rule-tree"},N&&i.a.createElement("span",{className:"logic-text"},"\u903b\u8f91\u5173\u7cfb\uff1a",E),i.a.createElement(c,{data:w,options:Object(t["a"])({fixed:!1,initType:!0,linkType:"solid",lineType:1,nodeDom:D,customPosition:S},f),styleOptions:Object(t["a"])({nodeWidth:30,spaceHorizontal:60,spaceVertical:12},h)}))}),P=R},jvWb:function(e,a,n){},muA5:function(e,a,n){e.exports=n.p+"static/import_export.0b3c55e8.svg"},quo7:function(e,a,n){}}]);