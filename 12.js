(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[12],{"+DpJ":function(t,e,n){t.exports=n.p+"static/7.97ab1df4.svg"},"0PRB":function(t,e,n){t.exports=n.p+"static/2.800a139d.svg"},"0tVm":function(t,e,n){},"2hVM":function(t,e,n){t.exports=n.p+"static/18.e19c7b11.svg"},A0x7:function(t,e,n){t.exports=n.p+"static/16.7afcc059.svg"},DBjQ:function(t,e,n){t.exports=n.p+"static/4.1baa52d6.svg"},JF2k:function(t,e,n){t.exports=n.p+"static/1.ff6673cf.svg"},JXd3:function(t,e,n){t.exports=n.p+"static/11.21df2e77.svg"},KQTq:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return ht}));var i=n("qLMh"),r=n("9og8"),a=n("tJVT"),o=n("q1tI"),s=n.n(o),c=n("LvDl"),h=n("i8i4"),l=n.n(h),d=n("jrin");function u(t){var e=0,n=t.children,i=n&&n.length;if(i)while(--i>=0)e+=n[i].value;else e=1;t.value=e}var f=function(){return this.eachAfter(u)},p=n("rAM+"),v=function(t,e){var n,i=-1,r=Object(p["a"])(this);try{for(r.s();!(n=r.n()).done;){var a=n.value;t.call(e,a,++i,this)}}catch(o){r.e(o)}finally{r.f()}return this},O=function(t,e){var n,i,r=this,a=[r],o=-1;while(r=a.pop())if(t.call(e,r,++o,this),n=r.children)for(i=n.length-1;i>=0;--i)a.push(n[i]);return this},m=function(t,e){var n,i,r,a=this,o=[a],s=[],c=-1;while(a=o.pop())if(s.push(a),n=a.children)for(i=0,r=n.length;i<r;++i)o.push(n[i]);while(a=s.pop())t.call(e,a,++c,this);return this},g=function(t,e){var n,i=-1,r=Object(p["a"])(this);try{for(r.s();!(n=r.n()).done;){var a=n.value;if(t.call(e,a,++i,this))return a}}catch(o){r.e(o)}finally{r.f()}},E=function(t){return this.eachAfter((function(e){var n=+t(e.data)||0,i=e.children,r=i&&i.length;while(--r>=0)n+=i[r].value;e.value=n}))},y=function(t){return this.eachBefore((function(e){e.children&&e.children.sort(t)}))},N=function(t){var e=this,n=T(e,t),i=[e];while(e!==n)e=e.parent,i.push(e);var r=i.length;while(t!==n)i.splice(r,0,t),t=t.parent;return i};function T(t,e){if(t===e)return t;var n=t.ancestors(),i=e.ancestors(),r=null;t=n.pop(),e=i.pop();while(t===e)r=t,t=n.pop(),e=i.pop();return r}var x=function(){var t=this,e=[t];while(t=t.parent)e.push(t);return e},I=function(){return Array.from(this)},D=function(){var t=[];return this.eachBefore((function(e){e.children||t.push(e)})),t},_=function(){var t=this,e=[];return t.each((function(n){n!==t&&e.push({source:n.parent,target:n})})),e},b=Object(i["a"])().mark(P);function P(){var t,e,n,r,a,o;return Object(i["a"])().wrap((function(i){while(1)switch(i.prev=i.next){case 0:t=this,n=[t];case 1:e=n.reverse(),n=[];case 2:if(!(t=e.pop())){i.next=8;break}return i.next=5,t;case 5:if(r=t.children)for(a=0,o=r.length;a<o;++a)n.push(r[a]);i.next=2;break;case 8:if(n.length){i.next=1;break}case 9:case"end":return i.stop()}}),b,this)}function C(t,e){t instanceof Map?(t=[void 0,t],void 0===e&&(e=H)):void 0===e&&(e=w);var n,i,r,a,o,s=new L(t),c=[s];while(n=c.pop())if((r=e(n.data))&&(o=(r=Array.from(r)).length))for(n.children=r,a=o-1;a>=0;--a)c.push(i=r[a]=new L(r[a])),i.parent=n,i.depth=n.depth+1;return s.eachBefore(k)}function A(){return C(this).eachBefore(M)}function w(t){return t.children}function H(t){return Array.isArray(t)?t[1]:null}function M(t){void 0!==t.data.value&&(t.value=t.data.value),t.data=t.data.data}function k(t){var e=0;do{t.height=e}while((t=t.parent)&&t.height<++e)}function L(t){this.data=t,this.depth=this.height=0,this.parent=null}L.prototype=C.prototype=Object(d["a"])({constructor:L,count:f,each:v,eachAfter:m,eachBefore:O,find:g,sum:E,sort:y,path:N,ancestors:x,descendants:I,leaves:D,links:_,copy:A},Symbol.iterator,P);var B=120,R=40,S=120,j=20,W=38,V=5,F=130,U=60,J=60,K=100,q=20,G=16,X={RELATION_WIDTH:B,COMPONENT_HEIGHT:R,COMPONENT_WIDTH:S,COMPONENT_SPACE_VERTICAL:j,COMPONENT_SPACE_HORIZONTAL:W,COMPONENT_MARGIN:V,ROOT_HEIGHT:U,MARGIN_LEFT:J,CONTENT_WIDTH:K,DOT_WIDTH:q,EXPAND_WIDTH:G},Y={POLICY:{name:"\u7b56\u7565",color:"#D97B4E",img:n("JF2k")},POLICY_VERSION:{name:"\u7b56\u7565\u7248\u672c",color:"#D97B4E",img:n("JF2k")},POLICY_PIBLISH_HIS:{name:"\u7b56\u7565\u53d1\u5e03\u5386\u53f2",color:"#C78F58",img:n("JF2k")},DECISION_TOOL:{name:"\u51b3\u7b56\u5de5\u5177",color:"#357BEB",img:n("0PRB")},DECISION_TOOL_VERSION:{name:"\u51b3\u7b56\u5de5\u5177\u7248\u672c",color:"#357BEB",img:n("0PRB")},THIRD_SERVICE:{name:"\u4e09\u65b9\u670d\u52a1",color:"#3BA99E",img:n("reM5")},THIRD_SERVICE_VERSION:{name:"\u4e09\u65b9\u670d\u52a1\u7248\u672c",color:"#3BA99E",img:n("reM5")},MODEL:{name:"\u6a21\u578b",color:"#91B53B",img:n("DBjQ")},MODEL_VERSION:{name:"\u6a21\u578b\u7248\u672c",color:"#91B53B",img:n("DBjQ")},RULE:{name:"\u89c4\u5219",color:"#126BFB",img:n("VKlw")},RULE_SET:{name:"\u89c4\u5219\u96c6",color:"#1DA3DA",img:n("TA8b")},RULE_SET_VERSION:{name:"\u89c4\u5219\u96c6\u7248\u672c",color:"#1DA3DA",img:n("VKlw")},INDEX_OFFLINE:{name:"\u79bb\u7ebf\u6307\u6807",color:"#BC6BC6",img:n("+DpJ")},INDEX_OFFLINE_VERSION:{name:"\u79bb\u7ebf\u6307\u6807\u7248\u672c",color:"#BC6BC6",img:n("+DpJ")},INDEX_REALTIME:{name:"\u5b9e\u65f6\u6307\u6807",color:"#0BBBD1",img:n("Sf8D")},INDEX_REALTIME_VERSION:{name:"\u5b9e\u65f6\u6307\u6807\u7248\u672c",color:"#0BBBD1",img:n("Sf8D")},FIELD_SYSTEM:{name:"\u7cfb\u7edf\u5b57\u6bb5",color:"#6776CF",img:n("SqEa")},FIELD_SCRIPT:{name:"\u52a8\u6001\u5b57\u6bb5",color:"#5B8FF9 ",img:n("duW/")},DEAL_TYPE:{name:"\u98ce\u9669\u51b3\u7b56",color:"#CF6867",img:n("JXd3")},EVENT_TYPE:{name:"\u4e8b\u4ef6\u7c7b\u578b",color:"#D5A142",img:n("uxfL")},FUNCTION:{name:"\u51fd\u6570",color:"#DB6595",img:n("niuq")},FUNCTION_VERSION:{name:"\u51fd\u6570\u7248\u672c",color:"#DB6595",img:n("niuq")},NAME_LIST:{name:"\u540d\u5355\u96c6",color:"#E6A133",img:n("mzRs")},FLOW_TEMPLATE:{name:"\u6d41\u7a0b\u6a21\u677f",color:"#72A768",img:n("KnXB")},RULE_IMMUNE:{name:"\u89c4\u5219\u514d\u75ab",color:"#565ED5",img:n("A0x7")},NO_DISTURB:{name:"\u514d\u6253\u6270",color:"#7ABD87",img:n("LOY9")},API_SERVICE:{name:"\u5bf9\u63a5\u670d\u52a1",color:"#945FB9",img:n("2hVM")},ETL_HANDLER:{name:"ETL\u5904\u7406\u5668",color:"#5681B0",img:n("hr6F")}},z=X;class Q{constructor(){this.data=null,this.flattenNodes=[],this.flattenLinks=[],this.hierarchyData=null,this.finalValue=null,this.keyDefault=0}initData(){if(this.data){var t=Object(c["cloneDeep"])(this.data);this.setKey(t,{}),this.finalValue=Object.assign({type:"relation",path:["relation"]},t),this.finalValue.children=this.addDropAreaAndOperation(t.children,["children"]),this.hierarchyData=C(this.finalValue)}}setKey(t,e){var n=t=>{t&&t.key||(t.key=this.getUniqKey(this.keyDefault,e)),e[t.key]=1,t&&t.children&&t.children.length&&this.setKey(t.children,e)};Array.isArray(t)?t.forEach(((t,e)=>{t.index=e,n(t)})):t&&(t.index=0,n(t))}getUniqKey(t,e){if(t in e){var n=t+1;return this.getUniqKey(n,e)}return t}addDropAreaAndOperation(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";t||(t=[]);var r=[];return t.length&&t.forEach(((t,a)=>{var o,s=[].concat(e,[a]),c=t||{},h=c.key,l="";l=Y&&(null===(o=Y[t.nodeType])||void 0===o?void 0:o.color)||i;var d=Object.assign({},t,{type:"leaf",key:h,index:a,parentPath:e,path:s,color:l});t.children&&t.children.length&&(d.type="relation",d.children=this.addDropAreaAndOperation(t.children,s.concat(["children"]),n+1,l),s.push("relation")),r.push(d)})),r}}var Z=Q,$=(n("Vu+n"),t=>{var e=t.node,n=void 0===e?{}:e,i=n.data;return s.a.createElement("div",{className:"common"},(null===i||void 0===i?void 0:i.nodeName)||"\u9ed8\u8ba4\u8282\u70b9")}),tt=t=>{var e=t.source,n=t.target,i=t.root,r=t.color,a=t.type,o=t.linkType,c=(e,n,i,a)=>{var c=h(e,i),d=c?i-e:Math.abs(n-a),u=t.highlight,f={position:"absolute",height:c?0:d,width:c?d:0,left:e,top:(c?n:Math.min(n,a))+R/2,zIndex:u?1:0,borderBottom:"1px ".concat(o||"solid"," ").concat(r||"#c7d0d9"),borderLeft:"1px ".concat(o||"solid"," ").concat(r||"#c7d0d9")},p="link "+(u?["link-highlight"]:"");return s.a.createElement("div",{className:p,style:f,"data-key":l([e,n,i,a]),key:l([e,n,i,a])})},h=(t,e)=>t!==e,l=t=>{void 0===t&&(t=[]);var e=t,n=e[0],i=e[1],r=e[2],a=e[3];return","+n+","+i+"-"+r+","+a},d=e.x,u=e.y,f=n.x,p=n.y,v=[];if(d===f||u===p)v=[c(d,u,f,p)];else{var O=(d+f)/2,m=u,g=O,E=p;1===a?(v.push(c(d,u,O,m)),v.push(c(O,m,g,E)),v.push(c(g,E,f,p))):2===a&&(i?(v.push(c(d,u,O,m)),v.push(c(O,m,g,E)),v.push(c(g,E,f,p))):(v.push(c(d,u,f,u)),v.push(c(f,u,f,p))))}return s.a.createElement(s.a.Fragment,null,v)},et=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal 12px Segoe UI",n=document.createElement("canvas"),i=n.getContext("2d");i.font=e;var r=i.measureText(t);return r.width},nt=t=>(t.children&&(t._children=t.children,t._children.forEach(nt),t.children=null),t),it=t=>(t._children&&(t.children=t._children,t.children.forEach(it),t._children=null),t),rt=n("k1fw");n("0tVm");function at(t){return e=>{var n=e.x,i=e.y,r=e.width,a=e.fixed,o=e.minWidth,c=e.minHeight,h={};h=a?{width:o}:{width:r};var l=Object(rt["a"])({position:"absolute",top:n,left:i,fontFamily:"Segoe UI",fontSize:"12px",fontWeight:"normal",background:"white",height:c},h);return s.a.createElement("div",{className:"wrap-node",style:l},s.a.createElement(t,e))}}var ot=at;class st extends Z{constructor(){super(),this.dom=null,this.nodeDom=null,this.onChange=null,this.customPosition=null,this.fixed=!0,this.lineType=2,this.linkType="dashed",this.domHeight=0,this.domWidth=0,this.Nodes={},this.interaction=!0,this.constant={},this.constant.COMPONENT_WIDTH=S,this.constant.COMPONENT_HEIGHT=R,this.constant.COMPONENT_SPACE_VERTICAL=j,this.constant.COMPONENT_SPACE_HORIZONTAL=W,this.constant.ROOT_WIDTH=F}init(t){var e=t.data,n=t.options,i=t.styleOptions,r=t.container,a=n||{},o=a.initType,s=a.onChange,c=a.customPosition,h=a.fixed,l=a.nodeDom,d=a.lineType,u=i||{},f=u.nodeWidth,p=u.nodeHeight,v=u.spaceVertical,O=u.spaceHorizontal,m=u.rootWidth;this.initType=o||!1,this.nodeDom=l||$||null,this.onChange=s,this.customPosition=c,this.fixed=h,this.lineType=d||2,this.linkType="dashed",this.dom=r,this.domHeight=0,this.domWidth=0,this.constant={},this.constant.COMPONENT_WIDTH=f||S,this.constant.COMPONENT_HEIGHT=p||R,this.constant.COMPONENT_SPACE_VERTICAL=v||j,this.constant.COMPONENT_SPACE_HORIZONTAL=O||W,this.constant.ROOT_WIDTH=m||F,this.setData(e||null),this.data&&this.render()}setData(t){this.data=t}drawNode(){var t,e,n=[];return this.flattenNodes=(null===(t=this.Nodes)||void 0===t?void 0:t.descendants())||[],null===(e=this.flattenNodes)||void 0===e||e.forEach((t=>{var e=t.data,i=t.x,r=t.y,a=e.key,o=e.nodeName,c=et(o)>this.constant.COMPONENT_WIDTH,h=()=>{var e=this.nodeDom&&this.nodeDom({node:t,nodeToggle:t=>this.foldingClick(t),id:this.getHierarchyId(a,"root")+i+r,constants:z,fixed:this.fixed})||null;return e},l=ot(h);n.push(s.a.createElement(l,{key:this.getHierarchyId(a,"root")+i+r,id:this.getHierarchyId(a,"root"),width:!c&&this.constant.COMPONENT_WIDTH,minWidth:this.constant.COMPONENT_WIDTH,minHeight:this.constant.COMPONENT_HEIGHT,x:i,y:r,fixed:this.fixed}))})),n}drawLine(){var t;this.flattenLinks=(null===(t=this.Nodes)||void 0===t?void 0:t.links())||[];var e=[];return e=(null===this||void 0===this?void 0:this.flattenLinks.map((t=>{var e,n,i,r=t.source,a=t.target,o=r.data.key,c=a.data.key,h=r.y,l=et(r.data.nodeName||"");h=r.parent?this.fixed?r.y+this.constant.COMPONENT_WIDTH:r.y+(l>this.constant.COMPONENT_WIDTH?l:this.constant.COMPONENT_WIDTH):r.y+this.constant.COMPONENT_WIDTH;var d=(null===r||void 0===r||null===(e=r.data)||void 0===e?void 0:e.children.length)||(null===r||void 0===r||null===(n=r.data)||void 0===n?void 0:n._children.length)||0;return s.a.createElement("div",{key:this.getHierarchyId(o,c)+r.x+r.y,"data-key":this.getHierarchyId(o,c)+r.x+r.y},s.a.createElement(tt,{root:!r.parent,color:null===r||void 0===r||null===(i=r.data)||void 0===i?void 0:i.color,length:d,source:{x:h,y:r.x},target:{x:a.y,y:a.x},type:this.lineType,linkType:this.linkType}))})))||[],e}buildPosition(t){var e=0,n=0,i=0,r=null===t||void 0===t?void 0:t.eachAfter((t=>{var r=this.calcWidth(t)||0,o=t.children,s=t.data,c=t.parent;if(this.fixed?t.y=t.depth*(this.constant.COMPONENT_WIDTH+this.constant.COMPONENT_SPACE_HORIZONTAL):t.y=t.depth*(this.constant.COMPONENT_WIDTH+this.constant.COMPONENT_SPACE_HORIZONTAL)+r,this.customPosition){var h=this.customPosition(t),l=Object(a["default"])(h,2);t.x=l[0],t.y=l[1]}null===c?(t.y=0,t.x=o&&o.length?(o[0].x+o[o.length-1].x)/2:0):"relation"===s.type?t.x=o&&o.length?(o[0].x+o[o.length-1].x)/2:0:(t.x=e*(this.constant.COMPONENT_HEIGHT+this.constant.COMPONENT_SPACE_VERTICAL),e+=1),n=Math.max(t.y+et(t.data.nodeName||""),n),i=Math.max(t.x+R,i)}));this.domWidth=n,this.domHeight=i,this.Nodes=r}getHierarchyId(){var t=[],e=0,n=0;for(e=arguments.length,t=new Array(e);n<e;n++)t[n]=n<0||arguments.length<=n?void 0:arguments[n];return t.join(".")}calcWidth(t){var e=0;if(!t)return 0;var n=t=>{if(t){var i=et(t.data.nodeName||"");i>this.constant.COMPONENT_WIDTH&&(e+=i-this.constant.COMPONENT_WIDTH),t.parent&&n(t.parent)}};return n(t.parent,0),e}nodeChange(t){this.data.nodeName=t.nodeName,this.data.children=t.children,this.initData(this.data),this.render()}foldingClick(t){var e,n,i={nodeName:this.data.nodeName,children:this.data.children};t.children?(e=t.path.slice(0,t.path.length-1),n=Object(c["get"])(i,e),n._children=n.children,n.children=null):(e=t.path,n=Object(c["get"])(i,e),n.children=n._children,n._children=null),this.nodeChange&&this.nodeChange(i)}expand(){var t=this;return Object(r["a"])(Object(i["a"])().mark((function e(){return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.data.children.forEach(it);case 2:return e.next=4,t.initData();case 4:return e.next=6,t.render();case 6:case"end":return e.stop()}}),e)})))()}packUp(){var t=this;return Object(r["a"])(Object(i["a"])().mark((function e(){return Object(i["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.data.children.forEach(nt);case 2:return e.next=4,t.initData();case 4:return e.next=6,t.render();case 6:case"end":return e.stop()}}),e)})))()}render(){this.buildPosition(this.hierarchyData),l.a.render(s.a.createElement("div",{style:{position:"relative",zIndex:9,width:this.domWidth+100,height:this.domHeight,margin:"80px 0 0 20px"}},this.drawNode(),this.drawLine()),this.dom)}}var ct=()=>new Proxy(new st,{set(t,e,n){if("data"===e){if(!n)return!0;var i,r;if(!0!==t.initType&&t.interaction)null===n||void 0===n||null===(i=n.children)||void 0===i||i.forEach(nt);else null===n||void 0===n||null===(r=n.children)||void 0===r||r.forEach(it);return Reflect.set(t,e,n),t.initData(),t.render(),!0}return Reflect.set(t,e,n),!0},get(t,e){return Reflect.has(t,e)?Reflect.get(t,e):-1}}),ht=ct},KnXB:function(t,e,n){t.exports=n.p+"static/15.6e55790a.svg"},LOY9:function(t,e,n){t.exports=n.p+"static/17.1dbe7e86.svg"},Sf8D:function(t,e,n){t.exports=n.p+"static/8.d4dd9129.svg"},SqEa:function(t,e,n){t.exports=n.p+"static/9.372f59bd.svg"},TA8b:function(t,e,n){t.exports=n.p+"static/5.3de9f549.svg"},VKlw:function(t,e,n){t.exports=n.p+"static/6.c9dab43a.svg"},"Vu+n":function(t,e,n){},"duW/":function(t,e,n){t.exports=n.p+"static/10.a1835738.svg"},"hOG+":function(t,e){(function(e){t.exports=function(){var t={311:function(t){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}}},n={};function i(e){if(n[e])return n[e].exports;var r=n[e]={exports:{}},a=!0;try{t[e](r,r.exports,i),a=!1}finally{a&&delete n[e]}return r.exports}return i.ab=e+"/",i(311)}()}).call(this,"/")},hr6F:function(t,e,n){t.exports=n.p+"static/19.9cd5f9e9.svg"},jrin:function(t,e,n){"use strict";function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return i}))},k1fw:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var i=n("jrin");function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},mzRs:function(t,e,n){t.exports=n.p+"static/14.9a18a308.svg"},niuq:function(t,e,n){t.exports=n.p+"static/13.a39a59d1.svg"},"rAM+":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var i=n("Qw5x");function r(t,e){var n="undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Object(i["a"])(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var r=0,a=function(){};return{s:a,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,s=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return s=t.done,t},e:function(t){c=!0,o=t},f:function(){try{s||null==n["return"]||n["return"]()}finally{if(c)throw o}}}}},reM5:function(t,e,n){t.exports=n.p+"static/3.44bb9914.svg"},uxfL:function(t,e,n){t.exports=n.p+"static/12.0f41e521.svg"}}]);