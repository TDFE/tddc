(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[46],{"7xvG":function(e,a,n){"use strict";n.r(a);n("p5Mg");var t=n("KakZ"),l=(n("6r4r"),n("dEzY")),r=(n("unWr"),n("xVCw")),o=n("9og8"),d=(n("tgna"),n("StZz")),s=(n("XwJb"),n("kjlY")),i=n("WmNS"),c=n.n(i),m=n("q1tI"),p=n.n(m),u=s["a"].Option,v={labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:18}}};a["default"]=d["a"].create({name:"data_process"})((e=>{var a,n=e.form,i=e.onCancel,f=e.dmConfig,h=void 0===f?{}:f,w=e.dialogShowInfo,k=e.editor,b=e.disabled,g=h||{},E=(g.dataMachine,n.getFieldDecorator),C=n.setFieldsValue,x=n.resetFields,y=n.validateFields,I=w||{},z=I.type,M=I.nodeId,F="DecisionToolServiceNode"===z;Object(m["useEffect"])((()=>{F&&S()}),[z]);var S=function(){var e=Object(o["default"])(c.a.mark((function e(){var a;return c.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,x();case 2:a=k.schema.data.nodesMap[M].data,C(a||{});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=()=>{y(((e,a)=>{if(!e){var n=a||{},t=n.nodeName;k.schema.data.nodesMap[M].name=t,k.schema.data.nodesMap[M].data=a,k.graph.node.nodes[M].shape.select("text.flow-txt-node").node.innerHTML=t.length>6?t.substring(0,6)+"...":t,i()}}))},j=[p.a.createElement(r["a"],{onClick:i,key:"cancel"},"\u53d6\u6d88"),p.a.createElement(r["a"],{type:"primary",onClick:N,key:"ok"},"\u786e\u5b9a")],q=[p.a.createElement(r["a"],{onClick:i,key:"cancel"},"\u5173\u95ed")];return p.a.createElement(t["a"],{title:"\u6570\u636e\u52a0\u5de5",visible:F,maskClosable:!1,zIndex:1002,width:600,onCancel:i,footer:b?q:j},p.a.createElement(d["a"],v,p.a.createElement(d["a"].Item,{label:"\u8282\u70b9\u540d\u79f0"},E("nodeName",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u8282\u70b9\u540d\u79f0"},{max:50,message:"\u6700\u591a50\u4e2a\u5b57\u7b26"},{pattern:/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/,message:"\u8282\u70b9\u540d\u79f0\u53ea\u652f\u6301\u4e2d\u82f1\u6587\u3001\u6570\u5b57\u3001\u4e0b\u5212\u7ebf\u7684\u8f93\u5165\u7ec4\u5408"}]})(p.a.createElement(l["a"],{placeholder:"\u8bf7\u8f93\u5165\u8282\u70b9\u540d\u79f0",disabled:b}))),p.a.createElement(d["a"].Item,{label:"\u6570\u636e\u52a0\u5de5\u4efb\u52a1"},E("dataProcessId",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u6570\u636e\u52a0\u5de5\u4efb\u52a1"}]})(p.a.createElement(s["a"],{isVirtual:!0,placeholder:"\u8bf7\u9009\u62e9\u6570\u636e\u52a0\u5de5\u4efb\u52a1",allowClear:!0,optionFilterProp:"children",showSearch:!0,disabled:b},null===(a=[{id:"zzf",name:"\u5468\u6cfd\u98de"},{id:"fmk",name:"\u653e\u5149\u660e"}])||void 0===a?void 0:a.map((e=>p.a.createElement(u,{key:null===e||void 0===e?void 0:e.id,value:null===e||void 0===e?void 0:e.id},null===e||void 0===e?void 0:e.name))))))))}))}}]);