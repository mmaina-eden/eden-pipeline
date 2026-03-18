const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/M0PreScan-myKsc9j9.js","assets/xlsx-CKN5doRT.js","assets/masterCatalogs-BbD_0MWE.js","assets/M1PHIScrubber-BbAijPmC.js","assets/M2TriageRouter-DBO3j3ul.js","assets/M3AliasEngine-CLhjO6on.js","assets/cohere-Dswmjygu.js","assets/M4ConfidenceThreshold-9zzSO57n.js","assets/M5DefinitionEngine-Di2WqjvR.js","assets/M6DeltaReport-DY2ZqRUJ.js","assets/M7AuditLog-C6CXZ9zB.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Av(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var y0={exports:{}},Ql={},S0={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jo=Symbol.for("react.element"),Rv=Symbol.for("react.portal"),Cv=Symbol.for("react.fragment"),Pv=Symbol.for("react.strict_mode"),Lv=Symbol.for("react.profiler"),Dv=Symbol.for("react.provider"),Iv=Symbol.for("react.context"),Nv=Symbol.for("react.forward_ref"),Uv=Symbol.for("react.suspense"),Fv=Symbol.for("react.memo"),Ov=Symbol.for("react.lazy"),Zh=Symbol.iterator;function kv(t){return t===null||typeof t!="object"?null:(t=Zh&&t[Zh]||t["@@iterator"],typeof t=="function"?t:null)}var M0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E0=Object.assign,w0={};function js(t,e,n){this.props=t,this.context=e,this.refs=w0,this.updater=n||M0}js.prototype.isReactComponent={};js.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};js.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function T0(){}T0.prototype=js.prototype;function Cf(t,e,n){this.props=t,this.context=e,this.refs=w0,this.updater=n||M0}var Pf=Cf.prototype=new T0;Pf.constructor=Cf;E0(Pf,js.prototype);Pf.isPureReactComponent=!0;var Jh=Array.isArray,b0=Object.prototype.hasOwnProperty,Lf={current:null},A0={key:!0,ref:!0,__self:!0,__source:!0};function R0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)b0.call(e,i)&&!A0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Jo,type:t,key:s,ref:o,props:r,_owner:Lf.current}}function zv(t,e){return{$$typeof:Jo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Df(t){return typeof t=="object"&&t!==null&&t.$$typeof===Jo}function Bv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qh=/\/+/g;function Mc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Bv(""+t.key):e.toString(36)}function el(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Jo:case Rv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Mc(o,0):i,Jh(r)?(n="",t!=null&&(n=t.replace(Qh,"$&/")+"/"),el(r,e,n,"",function(c){return c})):r!=null&&(Df(r)&&(r=zv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Qh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Jh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Mc(s,a);o+=el(s,e,n,l,r)}else if(l=kv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Mc(s,a++),o+=el(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ca(t,e,n){if(t==null)return t;var i=[],r=0;return el(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Vv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},tl={transition:null},Hv={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:tl,ReactCurrentOwner:Lf};function C0(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:ca,forEach:function(t,e,n){ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ca(t,function(){e++}),e},toArray:function(t){return ca(t,function(e){return e})||[]},only:function(t){if(!Df(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=js;Ye.Fragment=Cv;Ye.Profiler=Lv;Ye.PureComponent=Cf;Ye.StrictMode=Pv;Ye.Suspense=Uv;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Hv;Ye.act=C0;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=E0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Lf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)b0.call(e,l)&&!A0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Jo,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:Iv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Dv,_context:t},t.Consumer=t};Ye.createElement=R0;Ye.createFactory=function(t){var e=R0.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:Nv,render:t}};Ye.isValidElement=Df;Ye.lazy=function(t){return{$$typeof:Ov,_payload:{_status:-1,_result:t},_init:Vv}};Ye.memo=function(t,e){return{$$typeof:Fv,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=tl.transition;tl.transition={};try{t()}finally{tl.transition=e}};Ye.unstable_act=C0;Ye.useCallback=function(t,e){return an.current.useCallback(t,e)};Ye.useContext=function(t){return an.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return an.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return an.current.useEffect(t,e)};Ye.useId=function(){return an.current.useId()};Ye.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return an.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};Ye.useRef=function(t){return an.current.useRef(t)};Ye.useState=function(t){return an.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return an.current.useTransition()};Ye.version="18.3.1";S0.exports=Ye;var oe=S0.exports;const Gv=Av(oe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wv=oe,jv=Symbol.for("react.element"),Xv=Symbol.for("react.fragment"),Yv=Object.prototype.hasOwnProperty,$v=Wv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,qv={key:!0,ref:!0,__self:!0,__source:!0};function P0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Yv.call(e,i)&&!qv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:jv,type:t,key:s,ref:o,props:r,_owner:$v.current}}Ql.Fragment=Xv;Ql.jsx=P0;Ql.jsxs=P0;y0.exports=Ql;var E=y0.exports,Fu={},L0={exports:{}},Tn={},D0={exports:{}},I0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,O){var X=L.length;L.push(O);e:for(;0<X;){var J=X-1>>>1,ee=L[J];if(0<r(ee,O))L[J]=O,L[X]=ee,X=J;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var O=L[0],X=L.pop();if(X!==O){L[0]=X;e:for(var J=0,ee=L.length,ve=ee>>>1;J<ve;){var Oe=2*(J+1)-1,ce=L[Oe],j=Oe+1,ie=L[j];if(0>r(ce,X))j<ee&&0>r(ie,ce)?(L[J]=ie,L[j]=X,J=j):(L[J]=ce,L[Oe]=X,J=Oe);else if(j<ee&&0>r(ie,X))L[J]=ie,L[j]=X,J=j;else break e}}return O}function r(L,O){var X=L.sortIndex-O.sortIndex;return X!==0?X:L.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,d=3,m=!1,x=!1,y=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=L)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function S(L){if(y=!1,v(L),!x)if(n(l)!==null)x=!0,C(b);else{var O=n(c);O!==null&&U(S,O.startTime-L)}}function b(L,O){x=!1,y&&(y=!1,u(_),_=-1),m=!0;var X=d;try{for(v(O),h=n(l);h!==null&&(!(h.expirationTime>O)||L&&!D());){var J=h.callback;if(typeof J=="function"){h.callback=null,d=h.priorityLevel;var ee=J(h.expirationTime<=O);O=t.unstable_now(),typeof ee=="function"?h.callback=ee:h===n(l)&&i(l),v(O)}else i(l);h=n(l)}if(h!==null)var ve=!0;else{var Oe=n(c);Oe!==null&&U(S,Oe.startTime-O),ve=!1}return ve}finally{h=null,d=X,m=!1}}var A=!1,R=null,_=-1,w=5,I=-1;function D(){return!(t.unstable_now()-I<w)}function k(){if(R!==null){var L=t.unstable_now();I=L;var O=!0;try{O=R(!0,L)}finally{O?H():(A=!1,R=null)}}else A=!1}var H;if(typeof p=="function")H=function(){p(k)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,B=W.port2;W.port1.onmessage=k,H=function(){B.postMessage(null)}}else H=function(){g(k,0)};function C(L){R=L,A||(A=!0,H())}function U(L,O){_=g(function(){L(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){x||m||(x=!0,C(b))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var X=d;d=O;try{return L()}finally{d=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,O){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var X=d;d=L;try{return O()}finally{d=X}},t.unstable_scheduleCallback=function(L,O,X){var J=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?J+X:J):X=J,L){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=X+ee,L={id:f++,callback:O,priorityLevel:L,startTime:X,expirationTime:ee,sortIndex:-1},X>J?(L.sortIndex=X,e(c,L),n(l)===null&&L===n(c)&&(y?(u(_),_=-1):y=!0,U(S,X-J))):(L.sortIndex=ee,e(l,L),x||m||(x=!0,C(b))),L},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(L){var O=d;return function(){var X=d;d=O;try{return L.apply(this,arguments)}finally{d=X}}}})(I0);D0.exports=I0;var Kv=D0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zv=oe,wn=Kv;function re(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var N0=new Set,Lo={};function Hr(t,e){Ds(t,e),Ds(t+"Capture",e)}function Ds(t,e){for(Lo[t]=e,t=0;t<e.length;t++)N0.add(e[t])}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ou=Object.prototype.hasOwnProperty,Jv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ep={},tp={};function Qv(t){return Ou.call(tp,t)?!0:Ou.call(ep,t)?!1:Jv.test(t)?tp[t]=!0:(ep[t]=!0,!1)}function e_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function t_(t,e,n,i){if(e===null||typeof e>"u"||e_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var If=/[\-:]([a-z])/g;function Nf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(If,Nf);Xt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(If,Nf);Xt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(If,Nf);Xt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function Uf(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(t_(e,n,r,i)&&(n=null),i||r===null?Qv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=Zv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ua=Symbol.for("react.element"),ls=Symbol.for("react.portal"),cs=Symbol.for("react.fragment"),Ff=Symbol.for("react.strict_mode"),ku=Symbol.for("react.profiler"),U0=Symbol.for("react.provider"),F0=Symbol.for("react.context"),Of=Symbol.for("react.forward_ref"),zu=Symbol.for("react.suspense"),Bu=Symbol.for("react.suspense_list"),kf=Symbol.for("react.memo"),ji=Symbol.for("react.lazy"),O0=Symbol.for("react.offscreen"),np=Symbol.iterator;function Zs(t){return t===null||typeof t!="object"?null:(t=np&&t[np]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,Ec;function mo(t){if(Ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||""}return`
`+Ec+t}var wc=!1;function Tc(t,e){if(!t||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?mo(t):""}function n_(t){switch(t.tag){case 5:return mo(t.type);case 16:return mo("Lazy");case 13:return mo("Suspense");case 19:return mo("SuspenseList");case 0:case 2:case 15:return t=Tc(t.type,!1),t;case 11:return t=Tc(t.type.render,!1),t;case 1:return t=Tc(t.type,!0),t;default:return""}}function Vu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case cs:return"Fragment";case ls:return"Portal";case ku:return"Profiler";case Ff:return"StrictMode";case zu:return"Suspense";case Bu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case F0:return(t.displayName||"Context")+".Consumer";case U0:return(t._context.displayName||"Context")+".Provider";case Of:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case kf:return e=t.displayName||null,e!==null?e:Vu(t.type)||"Memo";case ji:e=t._payload,t=t._init;try{return Vu(t(e))}catch{}}return null}function i_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vu(e);case 8:return e===Ff?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function k0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function r_(t){var e=k0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function da(t){t._valueTracker||(t._valueTracker=r_(t))}function z0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=k0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Hu(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ip(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function B0(t,e){e=e.checked,e!=null&&Uf(t,"checked",e,!1)}function Gu(t,e){B0(t,e);var n=ar(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wu(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wu(t,e,n){(e!=="number"||yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var go=Array.isArray;function Ms(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ju(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(re(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(re(92));if(go(n)){if(1<n.length)throw Error(re(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function V0(t,e){var n=ar(e.value),i=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function op(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function H0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?H0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fa,G0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fa=fa||document.createElement("div"),fa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Do(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var So={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},s_=["Webkit","ms","Moz","O"];Object.keys(So).forEach(function(t){s_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),So[e]=So[t]})});function W0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||So.hasOwnProperty(t)&&So[t]?(""+e).trim():e+"px"}function j0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=W0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var o_=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Yu(t,e){if(e){if(o_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(re(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(re(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(re(61))}if(e.style!=null&&typeof e.style!="object")throw Error(re(62))}}function $u(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qu=null;function zf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ku=null,Es=null,ws=null;function ap(t){if(t=ta(t)){if(typeof Ku!="function")throw Error(re(280));var e=t.stateNode;e&&(e=rc(e),Ku(t.stateNode,t.type,e))}}function X0(t){Es?ws?ws.push(t):ws=[t]:Es=t}function Y0(){if(Es){var t=Es,e=ws;if(ws=Es=null,ap(t),e)for(t=0;t<e.length;t++)ap(e[t])}}function $0(t,e){return t(e)}function q0(){}var bc=!1;function K0(t,e,n){if(bc)return t(e,n);bc=!0;try{return $0(t,e,n)}finally{bc=!1,(Es!==null||ws!==null)&&(q0(),Y0())}}function Io(t,e){var n=t.stateNode;if(n===null)return null;var i=rc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(re(231,e,typeof n));return n}var Zu=!1;if(Ci)try{var Js={};Object.defineProperty(Js,"passive",{get:function(){Zu=!0}}),window.addEventListener("test",Js,Js),window.removeEventListener("test",Js,Js)}catch{Zu=!1}function a_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var Mo=!1,Sl=null,Ml=!1,Ju=null,l_={onError:function(t){Mo=!0,Sl=t}};function c_(t,e,n,i,r,s,o,a,l){Mo=!1,Sl=null,a_.apply(l_,arguments)}function u_(t,e,n,i,r,s,o,a,l){if(c_.apply(this,arguments),Mo){if(Mo){var c=Sl;Mo=!1,Sl=null}else throw Error(re(198));Ml||(Ml=!0,Ju=c)}}function Gr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Z0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function lp(t){if(Gr(t)!==t)throw Error(re(188))}function d_(t){var e=t.alternate;if(!e){if(e=Gr(t),e===null)throw Error(re(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return lp(r),t;if(s===i)return lp(r),e;s=s.sibling}throw Error(re(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(re(189))}}if(n.alternate!==i)throw Error(re(190))}if(n.tag!==3)throw Error(re(188));return n.stateNode.current===n?t:e}function J0(t){return t=d_(t),t!==null?Q0(t):null}function Q0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Q0(t);if(e!==null)return e;t=t.sibling}return null}var eg=wn.unstable_scheduleCallback,cp=wn.unstable_cancelCallback,f_=wn.unstable_shouldYield,h_=wn.unstable_requestPaint,Pt=wn.unstable_now,p_=wn.unstable_getCurrentPriorityLevel,Bf=wn.unstable_ImmediatePriority,tg=wn.unstable_UserBlockingPriority,El=wn.unstable_NormalPriority,m_=wn.unstable_LowPriority,ng=wn.unstable_IdlePriority,ec=null,oi=null;function g_(t){if(oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(ec,t,void 0,(t.current.flags&128)===128)}catch{}}var Xn=Math.clz32?Math.clz32:__,x_=Math.log,v_=Math.LN2;function __(t){return t>>>=0,t===0?32:31-(x_(t)/v_|0)|0}var ha=64,pa=4194304;function xo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function wl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=xo(a):(s&=o,s!==0&&(i=xo(s)))}else o=n&~r,o!==0?i=xo(o):s!==0&&(i=xo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Xn(e),r=1<<n,i|=t[n],e&=~r;return i}function y_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function S_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Xn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=y_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Qu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ig(){var t=ha;return ha<<=1,!(ha&4194240)&&(ha=64),t}function Ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Qo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xn(e),t[e]=n}function M_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Xn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Vf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Xn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function rg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sg,Hf,og,ag,lg,ed=!1,ma=[],Qi=null,er=null,tr=null,No=new Map,Uo=new Map,Yi=[],E_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function up(t,e){switch(t){case"focusin":case"focusout":Qi=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":No.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(e.pointerId)}}function Qs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ta(e),e!==null&&Hf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function w_(t,e,n,i,r){switch(e){case"focusin":return Qi=Qs(Qi,t,e,n,i,r),!0;case"dragenter":return er=Qs(er,t,e,n,i,r),!0;case"mouseover":return tr=Qs(tr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return No.set(s,Qs(No.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Uo.set(s,Qs(Uo.get(s)||null,t,e,n,i,r)),!0}return!1}function cg(t){var e=Ar(t.target);if(e!==null){var n=Gr(e);if(n!==null){if(e=n.tag,e===13){if(e=Z0(n),e!==null){t.blockedOn=e,lg(t.priority,function(){og(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function nl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=td(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);qu=i,n.target.dispatchEvent(i),qu=null}else return e=ta(n),e!==null&&Hf(e),t.blockedOn=n,!1;e.shift()}return!0}function dp(t,e,n){nl(t)&&n.delete(e)}function T_(){ed=!1,Qi!==null&&nl(Qi)&&(Qi=null),er!==null&&nl(er)&&(er=null),tr!==null&&nl(tr)&&(tr=null),No.forEach(dp),Uo.forEach(dp)}function eo(t,e){t.blockedOn===e&&(t.blockedOn=null,ed||(ed=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,T_)))}function Fo(t){function e(r){return eo(r,t)}if(0<ma.length){eo(ma[0],t);for(var n=1;n<ma.length;n++){var i=ma[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Qi!==null&&eo(Qi,t),er!==null&&eo(er,t),tr!==null&&eo(tr,t),No.forEach(e),Uo.forEach(e),n=0;n<Yi.length;n++)i=Yi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Yi.length&&(n=Yi[0],n.blockedOn===null);)cg(n),n.blockedOn===null&&Yi.shift()}var Ts=Ui.ReactCurrentBatchConfig,Tl=!0;function b_(t,e,n,i){var r=ot,s=Ts.transition;Ts.transition=null;try{ot=1,Gf(t,e,n,i)}finally{ot=r,Ts.transition=s}}function A_(t,e,n,i){var r=ot,s=Ts.transition;Ts.transition=null;try{ot=4,Gf(t,e,n,i)}finally{ot=r,Ts.transition=s}}function Gf(t,e,n,i){if(Tl){var r=td(t,e,n,i);if(r===null)Oc(t,e,i,bl,n),up(t,i);else if(w_(r,t,e,n,i))i.stopPropagation();else if(up(t,i),e&4&&-1<E_.indexOf(t)){for(;r!==null;){var s=ta(r);if(s!==null&&sg(s),s=td(t,e,n,i),s===null&&Oc(t,e,i,bl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Oc(t,e,i,null,n)}}var bl=null;function td(t,e,n,i){if(bl=null,t=zf(i),t=Ar(t),t!==null)if(e=Gr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Z0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bl=t,null}function ug(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(p_()){case Bf:return 1;case tg:return 4;case El:case m_:return 16;case ng:return 536870912;default:return 16}default:return 16}}var Ki=null,Wf=null,il=null;function dg(){if(il)return il;var t,e=Wf,n=e.length,i,r="value"in Ki?Ki.value:Ki.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return il=r.slice(t,1<i?1-i:void 0)}function rl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ga(){return!0}function fp(){return!1}function bn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ga:fp,this.isPropagationStopped=fp,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),e}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jf=bn(Xs),ea=wt({},Xs,{view:0,detail:0}),R_=bn(ea),Rc,Cc,to,tc=wt({},ea,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(Rc=t.screenX-to.screenX,Cc=t.screenY-to.screenY):Cc=Rc=0,to=t),Rc)},movementY:function(t){return"movementY"in t?t.movementY:Cc}}),hp=bn(tc),C_=wt({},tc,{dataTransfer:0}),P_=bn(C_),L_=wt({},ea,{relatedTarget:0}),Pc=bn(L_),D_=wt({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),I_=bn(D_),N_=wt({},Xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),U_=bn(N_),F_=wt({},Xs,{data:0}),pp=bn(F_),O_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},k_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function B_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=z_[t])?!!e[t]:!1}function Xf(){return B_}var V_=wt({},ea,{key:function(t){if(t.key){var e=O_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=rl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?k_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xf,charCode:function(t){return t.type==="keypress"?rl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?rl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),H_=bn(V_),G_=wt({},tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=bn(G_),W_=wt({},ea,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xf}),j_=bn(W_),X_=wt({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Y_=bn(X_),$_=wt({},tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),q_=bn($_),K_=[9,13,27,32],Yf=Ci&&"CompositionEvent"in window,Eo=null;Ci&&"documentMode"in document&&(Eo=document.documentMode);var Z_=Ci&&"TextEvent"in window&&!Eo,fg=Ci&&(!Yf||Eo&&8<Eo&&11>=Eo),gp=" ",xp=!1;function hg(t,e){switch(t){case"keyup":return K_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function J_(t,e){switch(t){case"compositionend":return pg(e);case"keypress":return e.which!==32?null:(xp=!0,gp);case"textInput":return t=e.data,t===gp&&xp?null:t;default:return null}}function Q_(t,e){if(us)return t==="compositionend"||!Yf&&hg(t,e)?(t=dg(),il=Wf=Ki=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fg&&e.locale!=="ko"?null:e.data;default:return null}}var ey={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ey[t.type]:e==="textarea"}function mg(t,e,n,i){X0(i),e=Al(e,"onChange"),0<e.length&&(n=new jf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var wo=null,Oo=null;function ty(t){bg(t,0)}function nc(t){var e=hs(t);if(z0(e))return t}function ny(t,e){if(t==="change")return e}var gg=!1;if(Ci){var Lc;if(Ci){var Dc="oninput"in document;if(!Dc){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),Dc=typeof _p.oninput=="function"}Lc=Dc}else Lc=!1;gg=Lc&&(!document.documentMode||9<document.documentMode)}function yp(){wo&&(wo.detachEvent("onpropertychange",xg),Oo=wo=null)}function xg(t){if(t.propertyName==="value"&&nc(Oo)){var e=[];mg(e,Oo,t,zf(t)),K0(ty,e)}}function iy(t,e,n){t==="focusin"?(yp(),wo=e,Oo=n,wo.attachEvent("onpropertychange",xg)):t==="focusout"&&yp()}function ry(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nc(Oo)}function sy(t,e){if(t==="click")return nc(e)}function oy(t,e){if(t==="input"||t==="change")return nc(e)}function ay(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var $n=typeof Object.is=="function"?Object.is:ay;function ko(t,e){if($n(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Ou.call(e,r)||!$n(t[r],e[r]))return!1}return!0}function Sp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mp(t,e){var n=Sp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sp(n)}}function vg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _g(){for(var t=window,e=yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yl(t.document)}return e}function $f(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ly(t){var e=_g(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&vg(n.ownerDocument.documentElement,n)){if(i!==null&&$f(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Mp(n,s);var o=Mp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var cy=Ci&&"documentMode"in document&&11>=document.documentMode,ds=null,nd=null,To=null,id=!1;function Ep(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;id||ds==null||ds!==yl(i)||(i=ds,"selectionStart"in i&&$f(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),To&&ko(To,i)||(To=i,i=Al(nd,"onSelect"),0<i.length&&(e=new jf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ds)))}function xa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fs={animationend:xa("Animation","AnimationEnd"),animationiteration:xa("Animation","AnimationIteration"),animationstart:xa("Animation","AnimationStart"),transitionend:xa("Transition","TransitionEnd")},Ic={},yg={};Ci&&(yg=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function ic(t){if(Ic[t])return Ic[t];if(!fs[t])return t;var e=fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yg)return Ic[t]=e[n];return t}var Sg=ic("animationend"),Mg=ic("animationiteration"),Eg=ic("animationstart"),wg=ic("transitionend"),Tg=new Map,wp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){Tg.set(t,e),Hr(e,[t])}for(var Nc=0;Nc<wp.length;Nc++){var Uc=wp[Nc],uy=Uc.toLowerCase(),dy=Uc[0].toUpperCase()+Uc.slice(1);ur(uy,"on"+dy)}ur(Sg,"onAnimationEnd");ur(Mg,"onAnimationIteration");ur(Eg,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(wg,"onTransitionEnd");Ds("onMouseEnter",["mouseout","mouseover"]);Ds("onMouseLeave",["mouseout","mouseover"]);Ds("onPointerEnter",["pointerout","pointerover"]);Ds("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fy=new Set("cancel close invalid load scroll toggle".split(" ").concat(vo));function Tp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,u_(i,e,void 0,t),t.currentTarget=null}function bg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Tp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Tp(r,a,c),s=l}}}if(Ml)throw t=Ju,Ml=!1,Ju=null,t}function pt(t,e){var n=e[ld];n===void 0&&(n=e[ld]=new Set);var i=t+"__bubble";n.has(i)||(Ag(e,t,2,!1),n.add(i))}function Fc(t,e,n){var i=0;e&&(i|=4),Ag(n,t,i,e)}var va="_reactListening"+Math.random().toString(36).slice(2);function zo(t){if(!t[va]){t[va]=!0,N0.forEach(function(n){n!=="selectionchange"&&(fy.has(n)||Fc(n,!1,t),Fc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[va]||(e[va]=!0,Fc("selectionchange",!1,e))}}function Ag(t,e,n,i){switch(ug(e)){case 1:var r=b_;break;case 4:r=A_;break;default:r=Gf}n=r.bind(null,e,n,t),r=void 0,!Zu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Oc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Ar(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}K0(function(){var c=s,f=zf(n),h=[];e:{var d=Tg.get(t);if(d!==void 0){var m=jf,x=t;switch(t){case"keypress":if(rl(n)===0)break e;case"keydown":case"keyup":m=H_;break;case"focusin":x="focus",m=Pc;break;case"focusout":x="blur",m=Pc;break;case"beforeblur":case"afterblur":m=Pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=P_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=j_;break;case Sg:case Mg:case Eg:m=I_;break;case wg:m=Y_;break;case"scroll":m=R_;break;case"wheel":m=q_;break;case"copy":case"cut":case"paste":m=U_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=mp}var y=(e&4)!==0,g=!y&&t==="scroll",u=y?d!==null?d+"Capture":null:d;y=[];for(var p=c,v;p!==null;){v=p;var S=v.stateNode;if(v.tag===5&&S!==null&&(v=S,u!==null&&(S=Io(p,u),S!=null&&y.push(Bo(p,S,v)))),g)break;p=p.return}0<y.length&&(d=new m(d,x,null,n,f),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==qu&&(x=n.relatedTarget||n.fromElement)&&(Ar(x)||x[Pi]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(x=n.relatedTarget||n.toElement,m=c,x=x?Ar(x):null,x!==null&&(g=Gr(x),x!==g||x.tag!==5&&x.tag!==6)&&(x=null)):(m=null,x=c),m!==x)){if(y=hp,S="onMouseLeave",u="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(y=mp,S="onPointerLeave",u="onPointerEnter",p="pointer"),g=m==null?d:hs(m),v=x==null?d:hs(x),d=new y(S,p+"leave",m,n,f),d.target=g,d.relatedTarget=v,S=null,Ar(f)===c&&(y=new y(u,p+"enter",x,n,f),y.target=v,y.relatedTarget=g,S=y),g=S,m&&x)t:{for(y=m,u=x,p=0,v=y;v;v=Yr(v))p++;for(v=0,S=u;S;S=Yr(S))v++;for(;0<p-v;)y=Yr(y),p--;for(;0<v-p;)u=Yr(u),v--;for(;p--;){if(y===u||u!==null&&y===u.alternate)break t;y=Yr(y),u=Yr(u)}y=null}else y=null;m!==null&&bp(h,d,m,y,!1),x!==null&&g!==null&&bp(h,g,x,y,!0)}}e:{if(d=c?hs(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var b=ny;else if(vp(d))if(gg)b=oy;else{b=ry;var A=iy}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=sy);if(b&&(b=b(t,c))){mg(h,b,n,f);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Wu(d,"number",d.value)}switch(A=c?hs(c):window,t){case"focusin":(vp(A)||A.contentEditable==="true")&&(ds=A,nd=c,To=null);break;case"focusout":To=nd=ds=null;break;case"mousedown":id=!0;break;case"contextmenu":case"mouseup":case"dragend":id=!1,Ep(h,n,f);break;case"selectionchange":if(cy)break;case"keydown":case"keyup":Ep(h,n,f)}var R;if(Yf)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else us?hg(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(fg&&n.locale!=="ko"&&(us||_!=="onCompositionStart"?_==="onCompositionEnd"&&us&&(R=dg()):(Ki=f,Wf="value"in Ki?Ki.value:Ki.textContent,us=!0)),A=Al(c,_),0<A.length&&(_=new pp(_,t,null,n,f),h.push({event:_,listeners:A}),R?_.data=R:(R=pg(n),R!==null&&(_.data=R)))),(R=Z_?J_(t,n):Q_(t,n))&&(c=Al(c,"onBeforeInput"),0<c.length&&(f=new pp("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=R))}bg(h,e)})}function Bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Al(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Io(t,n),s!=null&&i.unshift(Bo(t,s,r)),s=Io(t,e),s!=null&&i.push(Bo(t,s,r))),t=t.return}return i}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Io(n,s),l!=null&&o.unshift(Bo(n,l,a))):r||(l=Io(n,s),l!=null&&o.push(Bo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var hy=/\r\n?/g,py=/\u0000|\uFFFD/g;function Ap(t){return(typeof t=="string"?t:""+t).replace(hy,`
`).replace(py,"")}function _a(t,e,n){if(e=Ap(e),Ap(t)!==e&&n)throw Error(re(425))}function Rl(){}var rd=null,sd=null;function od(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ad=typeof setTimeout=="function"?setTimeout:void 0,my=typeof clearTimeout=="function"?clearTimeout:void 0,Rp=typeof Promise=="function"?Promise:void 0,gy=typeof queueMicrotask=="function"?queueMicrotask:typeof Rp<"u"?function(t){return Rp.resolve(null).then(t).catch(xy)}:ad;function xy(t){setTimeout(function(){throw t})}function kc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Fo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Fo(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ys=Math.random().toString(36).slice(2),ii="__reactFiber$"+Ys,Vo="__reactProps$"+Ys,Pi="__reactContainer$"+Ys,ld="__reactEvents$"+Ys,vy="__reactListeners$"+Ys,_y="__reactHandles$"+Ys;function Ar(t){var e=t[ii];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pi]||n[ii]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cp(t);t!==null;){if(n=t[ii])return n;t=Cp(t)}return e}t=n,n=t.parentNode}return null}function ta(t){return t=t[ii]||t[Pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function hs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(re(33))}function rc(t){return t[Vo]||null}var cd=[],ps=-1;function dr(t){return{current:t}}function mt(t){0>ps||(t.current=cd[ps],cd[ps]=null,ps--)}function ht(t,e){ps++,cd[ps]=t.current,t.current=e}var lr={},en=dr(lr),fn=dr(!1),Fr=lr;function Is(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function Cl(){mt(fn),mt(en)}function Pp(t,e,n){if(en.current!==lr)throw Error(re(168));ht(en,e),ht(fn,n)}function Rg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(re(108,i_(t)||"Unknown",r));return wt({},n,i)}function Pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Fr=en.current,ht(en,t),ht(fn,fn.current),!0}function Lp(t,e,n){var i=t.stateNode;if(!i)throw Error(re(169));n?(t=Rg(t,e,Fr),i.__reactInternalMemoizedMergedChildContext=t,mt(fn),mt(en),ht(en,t)):mt(fn),ht(fn,n)}var Si=null,sc=!1,zc=!1;function Cg(t){Si===null?Si=[t]:Si.push(t)}function yy(t){sc=!0,Cg(t)}function fr(){if(!zc&&Si!==null){zc=!0;var t=0,e=ot;try{var n=Si;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Si=null,sc=!1}catch(r){throw Si!==null&&(Si=Si.slice(t+1)),eg(Bf,fr),r}finally{ot=e,zc=!1}}return null}var ms=[],gs=0,Ll=null,Dl=0,Cn=[],Pn=0,Or=null,Ei=1,wi="";function Sr(t,e){ms[gs++]=Dl,ms[gs++]=Ll,Ll=t,Dl=e}function Pg(t,e,n){Cn[Pn++]=Ei,Cn[Pn++]=wi,Cn[Pn++]=Or,Or=t;var i=Ei;t=wi;var r=32-Xn(i)-1;i&=~(1<<r),n+=1;var s=32-Xn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ei=1<<32-Xn(e)+r|n<<r|i,wi=s+t}else Ei=1<<s|n<<r|i,wi=t}function qf(t){t.return!==null&&(Sr(t,1),Pg(t,1,0))}function Kf(t){for(;t===Ll;)Ll=ms[--gs],ms[gs]=null,Dl=ms[--gs],ms[gs]=null;for(;t===Or;)Or=Cn[--Pn],Cn[Pn]=null,wi=Cn[--Pn],Cn[Pn]=null,Ei=Cn[--Pn],Cn[Pn]=null}var En=null,Mn=null,xt=!1,Hn=null;function Lg(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Mn=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Or!==null?{id:Ei,overflow:wi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Mn=null,!0):!1;default:return!1}}function ud(t){return(t.mode&1)!==0&&(t.flags&128)===0}function dd(t){if(xt){var e=Mn;if(e){var n=e;if(!Dp(t,e)){if(ud(t))throw Error(re(418));e=nr(n.nextSibling);var i=En;e&&Dp(t,e)?Lg(i,n):(t.flags=t.flags&-4097|2,xt=!1,En=t)}}else{if(ud(t))throw Error(re(418));t.flags=t.flags&-4097|2,xt=!1,En=t}}}function Ip(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function ya(t){if(t!==En)return!1;if(!xt)return Ip(t),xt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!od(t.type,t.memoizedProps)),e&&(e=Mn)){if(ud(t))throw Dg(),Error(re(418));for(;e;)Lg(t,e),e=nr(e.nextSibling)}if(Ip(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(re(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=En?nr(t.stateNode.nextSibling):null;return!0}function Dg(){for(var t=Mn;t;)t=nr(t.nextSibling)}function Ns(){Mn=En=null,xt=!1}function Zf(t){Hn===null?Hn=[t]:Hn.push(t)}var Sy=Ui.ReactCurrentBatchConfig;function no(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(re(309));var i=n.stateNode}if(!i)throw Error(re(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(re(284));if(!n._owner)throw Error(re(290,t))}return t}function Sa(t,e){throw t=Object.prototype.toString.call(e),Error(re(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Np(t){var e=t._init;return e(t._payload)}function Ig(t){function e(u,p){if(t){var v=u.deletions;v===null?(u.deletions=[p],u.flags|=16):v.push(p)}}function n(u,p){if(!t)return null;for(;p!==null;)e(u,p),p=p.sibling;return null}function i(u,p){for(u=new Map;p!==null;)p.key!==null?u.set(p.key,p):u.set(p.index,p),p=p.sibling;return u}function r(u,p){return u=or(u,p),u.index=0,u.sibling=null,u}function s(u,p,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<p?(u.flags|=2,p):v):(u.flags|=2,p)):(u.flags|=1048576,p)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,p,v,S){return p===null||p.tag!==6?(p=Xc(v,u.mode,S),p.return=u,p):(p=r(p,v),p.return=u,p)}function l(u,p,v,S){var b=v.type;return b===cs?f(u,p,v.props.children,S,v.key):p!==null&&(p.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ji&&Np(b)===p.type)?(S=r(p,v.props),S.ref=no(u,p,v),S.return=u,S):(S=dl(v.type,v.key,v.props,null,u.mode,S),S.ref=no(u,p,v),S.return=u,S)}function c(u,p,v,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=Yc(v,u.mode,S),p.return=u,p):(p=r(p,v.children||[]),p.return=u,p)}function f(u,p,v,S,b){return p===null||p.tag!==7?(p=Nr(v,u.mode,S,b),p.return=u,p):(p=r(p,v),p.return=u,p)}function h(u,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Xc(""+p,u.mode,v),p.return=u,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ua:return v=dl(p.type,p.key,p.props,null,u.mode,v),v.ref=no(u,null,p),v.return=u,v;case ls:return p=Yc(p,u.mode,v),p.return=u,p;case ji:var S=p._init;return h(u,S(p._payload),v)}if(go(p)||Zs(p))return p=Nr(p,u.mode,v,null),p.return=u,p;Sa(u,p)}return null}function d(u,p,v,S){var b=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(u,p,""+v,S);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ua:return v.key===b?l(u,p,v,S):null;case ls:return v.key===b?c(u,p,v,S):null;case ji:return b=v._init,d(u,p,b(v._payload),S)}if(go(v)||Zs(v))return b!==null?null:f(u,p,v,S,null);Sa(u,v)}return null}function m(u,p,v,S,b){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(v)||null,a(p,u,""+S,b);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ua:return u=u.get(S.key===null?v:S.key)||null,l(p,u,S,b);case ls:return u=u.get(S.key===null?v:S.key)||null,c(p,u,S,b);case ji:var A=S._init;return m(u,p,v,A(S._payload),b)}if(go(S)||Zs(S))return u=u.get(v)||null,f(p,u,S,b,null);Sa(p,S)}return null}function x(u,p,v,S){for(var b=null,A=null,R=p,_=p=0,w=null;R!==null&&_<v.length;_++){R.index>_?(w=R,R=null):w=R.sibling;var I=d(u,R,v[_],S);if(I===null){R===null&&(R=w);break}t&&R&&I.alternate===null&&e(u,R),p=s(I,p,_),A===null?b=I:A.sibling=I,A=I,R=w}if(_===v.length)return n(u,R),xt&&Sr(u,_),b;if(R===null){for(;_<v.length;_++)R=h(u,v[_],S),R!==null&&(p=s(R,p,_),A===null?b=R:A.sibling=R,A=R);return xt&&Sr(u,_),b}for(R=i(u,R);_<v.length;_++)w=m(R,u,_,v[_],S),w!==null&&(t&&w.alternate!==null&&R.delete(w.key===null?_:w.key),p=s(w,p,_),A===null?b=w:A.sibling=w,A=w);return t&&R.forEach(function(D){return e(u,D)}),xt&&Sr(u,_),b}function y(u,p,v,S){var b=Zs(v);if(typeof b!="function")throw Error(re(150));if(v=b.call(v),v==null)throw Error(re(151));for(var A=b=null,R=p,_=p=0,w=null,I=v.next();R!==null&&!I.done;_++,I=v.next()){R.index>_?(w=R,R=null):w=R.sibling;var D=d(u,R,I.value,S);if(D===null){R===null&&(R=w);break}t&&R&&D.alternate===null&&e(u,R),p=s(D,p,_),A===null?b=D:A.sibling=D,A=D,R=w}if(I.done)return n(u,R),xt&&Sr(u,_),b;if(R===null){for(;!I.done;_++,I=v.next())I=h(u,I.value,S),I!==null&&(p=s(I,p,_),A===null?b=I:A.sibling=I,A=I);return xt&&Sr(u,_),b}for(R=i(u,R);!I.done;_++,I=v.next())I=m(R,u,_,I.value,S),I!==null&&(t&&I.alternate!==null&&R.delete(I.key===null?_:I.key),p=s(I,p,_),A===null?b=I:A.sibling=I,A=I);return t&&R.forEach(function(k){return e(u,k)}),xt&&Sr(u,_),b}function g(u,p,v,S){if(typeof v=="object"&&v!==null&&v.type===cs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ua:e:{for(var b=v.key,A=p;A!==null;){if(A.key===b){if(b=v.type,b===cs){if(A.tag===7){n(u,A.sibling),p=r(A,v.props.children),p.return=u,u=p;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===ji&&Np(b)===A.type){n(u,A.sibling),p=r(A,v.props),p.ref=no(u,A,v),p.return=u,u=p;break e}n(u,A);break}else e(u,A);A=A.sibling}v.type===cs?(p=Nr(v.props.children,u.mode,S,v.key),p.return=u,u=p):(S=dl(v.type,v.key,v.props,null,u.mode,S),S.ref=no(u,p,v),S.return=u,u=S)}return o(u);case ls:e:{for(A=v.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(u,p.sibling),p=r(p,v.children||[]),p.return=u,u=p;break e}else{n(u,p);break}else e(u,p);p=p.sibling}p=Yc(v,u.mode,S),p.return=u,u=p}return o(u);case ji:return A=v._init,g(u,p,A(v._payload),S)}if(go(v))return x(u,p,v,S);if(Zs(v))return y(u,p,v,S);Sa(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(u,p.sibling),p=r(p,v),p.return=u,u=p):(n(u,p),p=Xc(v,u.mode,S),p.return=u,u=p),o(u)):n(u,p)}return g}var Us=Ig(!0),Ng=Ig(!1),Il=dr(null),Nl=null,xs=null,Jf=null;function Qf(){Jf=xs=Nl=null}function eh(t){var e=Il.current;mt(Il),t._currentValue=e}function fd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function bs(t,e){Nl=t,Jf=xs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(Jf!==t)if(t={context:t,memoizedValue:e,next:null},xs===null){if(Nl===null)throw Error(re(308));xs=t,Nl.dependencies={lanes:0,firstContext:t}}else xs=xs.next=t;return e}var Rr=null;function th(t){Rr===null?Rr=[t]:Rr.push(t)}function Ug(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,th(e)):(n.next=r.next,r.next=n),e.interleaved=n,Li(t,i)}function Li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Xi=!1;function nh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function bi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Li(t,n)}return r=i.interleaved,r===null?(e.next=e,th(i)):(e.next=r.next,r.next=e),i.interleaved=e,Li(t,n)}function sl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vf(t,n)}}function Up(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ul(t,e,n,i){var r=t.updateQueue;Xi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=t,y=a;switch(d=e,m=n,y.tag){case 1:if(x=y.payload,typeof x=="function"){h=x.call(m,h,d);break e}h=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=y.payload,d=typeof x=="function"?x.call(m,h,d):x,d==null)break e;h=wt({},h,d);break e;case 2:Xi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);zr|=o,t.lanes=o,t.memoizedState=h}}function Fp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(re(191,r));r.call(i)}}}var na={},ai=dr(na),Ho=dr(na),Go=dr(na);function Cr(t){if(t===na)throw Error(re(174));return t}function ih(t,e){switch(ht(Go,e),ht(Ho,t),ht(ai,na),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Xu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Xu(e,t)}mt(ai),ht(ai,e)}function Fs(){mt(ai),mt(Ho),mt(Go)}function Og(t){Cr(Go.current);var e=Cr(ai.current),n=Xu(e,t.type);e!==n&&(ht(Ho,t),ht(ai,n))}function rh(t){Ho.current===t&&(mt(ai),mt(Ho))}var yt=dr(0);function Fl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bc=[];function sh(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var ol=Ui.ReactCurrentDispatcher,Vc=Ui.ReactCurrentBatchConfig,kr=0,Mt=null,It=null,zt=null,Ol=!1,bo=!1,Wo=0,My=0;function $t(){throw Error(re(321))}function oh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!$n(t[n],e[n]))return!1;return!0}function ah(t,e,n,i,r,s){if(kr=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ol.current=t===null||t.memoizedState===null?by:Ay,t=n(i,r),bo){s=0;do{if(bo=!1,Wo=0,25<=s)throw Error(re(301));s+=1,zt=It=null,e.updateQueue=null,ol.current=Ry,t=n(i,r)}while(bo)}if(ol.current=kl,e=It!==null&&It.next!==null,kr=0,zt=It=Mt=null,Ol=!1,e)throw Error(re(300));return t}function lh(){var t=Wo!==0;return Wo=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?Mt.memoizedState=zt=t:zt=zt.next=t,zt}function Nn(){if(It===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=It.next;var e=zt===null?Mt.memoizedState:zt.next;if(e!==null)zt=e,It=t;else{if(t===null)throw Error(re(310));It=t,t={memoizedState:It.memoizedState,baseState:It.baseState,baseQueue:It.baseQueue,queue:It.queue,next:null},zt===null?Mt.memoizedState=zt=t:zt=zt.next=t}return zt}function jo(t,e){return typeof e=="function"?e(t):e}function Hc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=It,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((kr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Mt.lanes|=f,zr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,$n(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,zr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Gc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(re(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);$n(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function kg(){}function zg(t,e){var n=Mt,i=Nn(),r=e(),s=!$n(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,ch(Hg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,Xo(9,Vg.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(re(349));kr&30||Bg(n,e,r)}return r}function Bg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Vg(t,e,n,i){e.value=n,e.getSnapshot=i,Gg(e)&&Wg(t)}function Hg(t,e,n){return n(function(){Gg(e)&&Wg(t)})}function Gg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!$n(t,n)}catch{return!0}}function Wg(t){var e=Li(t,1);e!==null&&Yn(e,t,1,-1)}function Op(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:jo,lastRenderedState:t},e.queue=t,t=t.dispatch=Ty.bind(null,Mt,t),[e.memoizedState,t]}function Xo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function jg(){return Nn().memoizedState}function al(t,e,n,i){var r=ei();Mt.flags|=t,r.memoizedState=Xo(1|e,n,void 0,i===void 0?null:i)}function oc(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(It!==null){var o=It.memoizedState;if(s=o.destroy,i!==null&&oh(i,o.deps)){r.memoizedState=Xo(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=Xo(1|e,n,s,i)}function kp(t,e){return al(8390656,8,t,e)}function ch(t,e){return oc(2048,8,t,e)}function Xg(t,e){return oc(4,2,t,e)}function Yg(t,e){return oc(4,4,t,e)}function $g(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qg(t,e,n){return n=n!=null?n.concat([t]):null,oc(4,4,$g.bind(null,e,t),n)}function uh(){}function Kg(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&oh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Zg(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&oh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Jg(t,e,n){return kr&21?($n(n,e)||(n=ig(),Mt.lanes|=n,zr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function Ey(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=Vc.transition;Vc.transition={};try{t(!1),e()}finally{ot=n,Vc.transition=i}}function Qg(){return Nn().memoizedState}function wy(t,e,n){var i=sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ex(t))tx(e,n);else if(n=Ug(t,e,n,i),n!==null){var r=sn();Yn(n,t,i,r),nx(n,e,i)}}function Ty(t,e,n){var i=sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ex(t))tx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,$n(a,o)){var l=e.interleaved;l===null?(r.next=r,th(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ug(t,e,r,i),n!==null&&(r=sn(),Yn(n,t,i,r),nx(n,e,i))}}function ex(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function tx(t,e){bo=Ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Vf(t,n)}}var kl={readContext:In,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},by={readContext:In,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:kp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,al(4194308,4,$g.bind(null,e,t),n)},useLayoutEffect:function(t,e){return al(4194308,4,t,e)},useInsertionEffect:function(t,e){return al(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=wy.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:Op,useDebugValue:uh,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=Op(!1),e=t[0];return t=Ey.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=ei();if(xt){if(n===void 0)throw Error(re(407));n=n()}else{if(n=e(),Bt===null)throw Error(re(349));kr&30||Bg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,kp(Hg.bind(null,i,s,t),[t]),i.flags|=2048,Xo(9,Vg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Bt.identifierPrefix;if(xt){var n=wi,i=Ei;n=(i&~(1<<32-Xn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Wo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=My++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ay={readContext:In,useCallback:Kg,useContext:In,useEffect:ch,useImperativeHandle:qg,useInsertionEffect:Xg,useLayoutEffect:Yg,useMemo:Zg,useReducer:Hc,useRef:jg,useState:function(){return Hc(jo)},useDebugValue:uh,useDeferredValue:function(t){var e=Nn();return Jg(e,It.memoizedState,t)},useTransition:function(){var t=Hc(jo)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:kg,useSyncExternalStore:zg,useId:Qg,unstable_isNewReconciler:!1},Ry={readContext:In,useCallback:Kg,useContext:In,useEffect:ch,useImperativeHandle:qg,useInsertionEffect:Xg,useLayoutEffect:Yg,useMemo:Zg,useReducer:Gc,useRef:jg,useState:function(){return Gc(jo)},useDebugValue:uh,useDeferredValue:function(t){var e=Nn();return It===null?e.memoizedState=t:Jg(e,It.memoizedState,t)},useTransition:function(){var t=Gc(jo)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:kg,useSyncExternalStore:zg,useId:Qg,unstable_isNewReconciler:!1};function Bn(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function hd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ac={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=sn(),r=sr(t),s=bi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(Yn(e,t,r,i),sl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=sn(),r=sr(t),s=bi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(Yn(e,t,r,i),sl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),i=sr(t),r=bi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ir(t,r,i),e!==null&&(Yn(e,t,i,n),sl(e,t,i))}};function zp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!ko(n,i)||!ko(r,s):!0}function ix(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=hn(e)?Fr:en.current,i=e.contextTypes,s=(i=i!=null)?Is(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ac,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ac.enqueueReplaceState(e,e.state,null)}function pd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},nh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=hn(e)?Fr:en.current,r.context=Is(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(hd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ac.enqueueReplaceState(r,r.state,null),Ul(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Os(t,e){try{var n="",i=e;do n+=n_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Wc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function md(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Cy=typeof WeakMap=="function"?WeakMap:Map;function rx(t,e,n){n=bi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Bl||(Bl=!0,Td=i),md(t,e)},n}function sx(t,e,n){n=bi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){md(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){md(t,e),typeof i!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Cy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Gy.bind(null,t,e,n),e.then(t,t))}function Hp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=bi(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var Py=Ui.ReactCurrentOwner,dn=!1;function nn(t,e,n,i){e.child=t===null?Ng(e,null,n,i):Us(e,t.child,n,i)}function Wp(t,e,n,i,r){n=n.render;var s=e.ref;return bs(e,r),i=ah(t,e,n,i,s,r),n=lh(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(xt&&n&&qf(e),e.flags|=1,nn(t,e,i,r),e.child)}function jp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!vh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ox(t,e,s,i,r)):(t=dl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:ko,n(o,i)&&t.ref===e.ref)return Di(t,e,r)}return e.flags|=1,t=or(s,i),t.ref=e.ref,t.return=e,e.child=t}function ox(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(ko(s,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,Di(t,e,r)}return gd(t,e,n,i,r)}function ax(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ht(_s,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ht(_s,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ht(_s,yn),yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ht(_s,yn),yn|=i;return nn(t,e,r,n),e.child}function lx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function gd(t,e,n,i,r){var s=hn(n)?Fr:en.current;return s=Is(e,s),bs(e,r),n=ah(t,e,n,i,s,r),i=lh(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(xt&&i&&qf(e),e.flags|=1,nn(t,e,n,r),e.child)}function Xp(t,e,n,i,r){if(hn(n)){var s=!0;Pl(e)}else s=!1;if(bs(e,r),e.stateNode===null)ll(t,e),ix(e,n,i),pd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=In(c):(c=hn(n)?Fr:en.current,c=Is(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Bp(e,o,i,c),Xi=!1;var d=e.memoizedState;o.state=d,Ul(e,i,o,r),l=e.memoizedState,a!==i||d!==l||fn.current||Xi?(typeof f=="function"&&(hd(e,n,f,i),l=e.memoizedState),(a=Xi||zp(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Fg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Bn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=In(l):(l=hn(n)?Fr:en.current,l=Is(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Bp(e,o,i,l),Xi=!1,d=e.memoizedState,o.state=d,Ul(e,i,o,r);var x=e.memoizedState;a!==h||d!==x||fn.current||Xi?(typeof m=="function"&&(hd(e,n,m,i),x=e.memoizedState),(c=Xi||zp(e,n,c,i,d,x,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return xd(t,e,n,i,s,r)}function xd(t,e,n,i,r,s){lx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Lp(e,n,!1),Di(t,e,s);i=e.stateNode,Py.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Us(e,t.child,null,s),e.child=Us(e,null,a,s)):nn(t,e,a,s),e.memoizedState=i.state,r&&Lp(e,n,!0),e.child}function cx(t){var e=t.stateNode;e.pendingContext?Pp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Pp(t,e.context,!1),ih(t,e.containerInfo)}function Yp(t,e,n,i,r){return Ns(),Zf(r),e.flags|=256,nn(t,e,n,i),e.child}var vd={dehydrated:null,treeContext:null,retryLane:0};function _d(t){return{baseLanes:t,cachePool:null,transitions:null}}function ux(t,e,n){var i=e.pendingProps,r=yt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ht(yt,r&1),t===null)return dd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=uc(o,i,0,null),t=Nr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=_d(n),e.memoizedState=vd,t):dh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ly(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=or(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=or(a,s):(s=Nr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?_d(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=vd,i}return s=t.child,t=s.sibling,i=or(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function dh(t,e){return e=uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ma(t,e,n,i){return i!==null&&Zf(i),Us(e,t.child,null,n),t=dh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ly(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Wc(Error(re(422))),Ma(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=uc({mode:"visible",children:i.children},r,0,null),s=Nr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Us(e,t.child,null,o),e.child.memoizedState=_d(o),e.memoizedState=vd,s);if(!(e.mode&1))return Ma(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(re(419)),i=Wc(s,i,void 0),Ma(t,e,o,i)}if(a=(o&t.childLanes)!==0,dn||a){if(i=Bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Li(t,r),Yn(i,t,r,-1))}return xh(),i=Wc(Error(re(421))),Ma(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Wy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Mn=nr(r.nextSibling),En=e,xt=!0,Hn=null,t!==null&&(Cn[Pn++]=Ei,Cn[Pn++]=wi,Cn[Pn++]=Or,Ei=t.id,wi=t.overflow,Or=e),e=dh(e,i.children),e.flags|=4096,e)}function $p(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),fd(t.return,e,n)}function jc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function dx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(nn(t,e,i.children,n),i=yt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$p(t,n,e);else if(t.tag===19)$p(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ht(yt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Fl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),jc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Fl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}jc(e,!0,n,null,s);break;case"together":jc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ll(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),zr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(re(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Dy(t,e,n){switch(e.tag){case 3:cx(e),Ns();break;case 5:Og(e);break;case 1:hn(e.type)&&Pl(e);break;case 4:ih(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ht(Il,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ht(yt,yt.current&1),e.flags|=128,null):n&e.child.childLanes?ux(t,e,n):(ht(yt,yt.current&1),t=Di(t,e,n),t!==null?t.sibling:null);ht(yt,yt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return dx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ht(yt,yt.current),i)break;return null;case 22:case 23:return e.lanes=0,ax(t,e,n)}return Di(t,e,n)}var fx,yd,hx,px;fx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};yd=function(){};hx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Cr(ai.current);var s=null;switch(n){case"input":r=Hu(t,r),i=Hu(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=ju(t,r),i=ju(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Rl)}Yu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Lo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Lo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&pt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};px=function(t,e,n,i){n!==i&&(e.flags|=4)};function io(t,e){if(!xt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Iy(t,e,n){var i=e.pendingProps;switch(Kf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return hn(e.type)&&Cl(),qt(e),null;case 3:return i=e.stateNode,Fs(),mt(fn),mt(en),sh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(Rd(Hn),Hn=null))),yd(t,e),qt(e),null;case 5:rh(e);var r=Cr(Go.current);if(n=e.type,t!==null&&e.stateNode!=null)hx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(re(166));return qt(e),null}if(t=Cr(ai.current),ya(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ii]=e,i[Vo]=s,t=(e.mode&1)!==0,n){case"dialog":pt("cancel",i),pt("close",i);break;case"iframe":case"object":case"embed":pt("load",i);break;case"video":case"audio":for(r=0;r<vo.length;r++)pt(vo[r],i);break;case"source":pt("error",i);break;case"img":case"image":case"link":pt("error",i),pt("load",i);break;case"details":pt("toggle",i);break;case"input":ip(i,s),pt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},pt("invalid",i);break;case"textarea":sp(i,s),pt("invalid",i)}Yu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&_a(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&_a(i.textContent,a,t),r=["children",""+a]):Lo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&pt("scroll",i)}switch(n){case"input":da(i),rp(i,s,!0);break;case"textarea":da(i),op(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Rl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=H0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ii]=e,t[Vo]=i,fx(t,e,!1,!1),e.stateNode=t;e:{switch(o=$u(n,i),n){case"dialog":pt("cancel",t),pt("close",t),r=i;break;case"iframe":case"object":case"embed":pt("load",t),r=i;break;case"video":case"audio":for(r=0;r<vo.length;r++)pt(vo[r],t);r=i;break;case"source":pt("error",t),r=i;break;case"img":case"image":case"link":pt("error",t),pt("load",t),r=i;break;case"details":pt("toggle",t),r=i;break;case"input":ip(t,i),r=Hu(t,i),pt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),pt("invalid",t);break;case"textarea":sp(t,i),r=ju(t,i),pt("invalid",t);break;default:r=i}Yu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?j0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&G0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Do(t,l):typeof l=="number"&&Do(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Lo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&pt("scroll",t):l!=null&&Uf(t,s,l,o))}switch(n){case"input":da(t),rp(t,i,!1);break;case"textarea":da(t),op(t);break;case"option":i.value!=null&&t.setAttribute("value",""+ar(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ms(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ms(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Rl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)px(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(re(166));if(n=Cr(Go.current),Cr(ai.current),ya(e)){if(i=e.stateNode,n=e.memoizedProps,i[ii]=e,(s=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:_a(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_a(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ii]=e,e.stateNode=i}return qt(e),null;case 13:if(mt(yt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xt&&Mn!==null&&e.mode&1&&!(e.flags&128))Dg(),Ns(),e.flags|=98560,s=!1;else if(s=ya(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(re(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(re(317));s[ii]=e}else Ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else Hn!==null&&(Rd(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||yt.current&1?Nt===0&&(Nt=3):xh())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Fs(),yd(t,e),t===null&&zo(e.stateNode.containerInfo),qt(e),null;case 10:return eh(e.type._context),qt(e),null;case 17:return hn(e.type)&&Cl(),qt(e),null;case 19:if(mt(yt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)io(s,!1);else{if(Nt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Fl(t),o!==null){for(e.flags|=128,io(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ht(yt,yt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>ks&&(e.flags|=128,i=!0,io(s,!1),e.lanes=4194304)}else{if(!i)if(t=Fl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xt)return qt(e),null}else 2*Pt()-s.renderingStartTime>ks&&n!==1073741824&&(e.flags|=128,i=!0,io(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=yt.current,ht(yt,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return gh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(re(156,e.tag))}function Ny(t,e){switch(Kf(e),e.tag){case 1:return hn(e.type)&&Cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Fs(),mt(fn),mt(en),sh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return rh(e),null;case 13:if(mt(yt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(re(340));Ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(yt),null;case 4:return Fs(),null;case 10:return eh(e.type._context),null;case 22:case 23:return gh(),null;case 24:return null;default:return null}}var Ea=!1,Jt=!1,Uy=typeof WeakSet=="function"?WeakSet:Set,ye=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){At(t,e,i)}else n.current=null}function Sd(t,e,n){try{n()}catch(i){At(t,e,i)}}var qp=!1;function Fy(t,e){if(rd=Tl,t=_g(),$f(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(sd={focusedElem:t,selectionRange:n},Tl=!1,ye=e;ye!==null;)if(e=ye,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ye=t;else for(;ye!==null;){e=ye;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var y=x.memoizedProps,g=x.memoizedState,u=e.stateNode,p=u.getSnapshotBeforeUpdate(e.elementType===e.type?y:Bn(e.type,y),g);u.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(re(163))}}catch(S){At(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}return x=qp,qp=!1,x}function Ao(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Sd(e,n,s)}r=r.next}while(r!==i)}}function lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Md(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mx(t){var e=t.alternate;e!==null&&(t.alternate=null,mx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ii],delete e[Vo],delete e[ld],delete e[vy],delete e[_y])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gx(t){return t.tag===5||t.tag===3||t.tag===4}function Kp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rl));else if(i!==4&&(t=t.child,t!==null))for(Ed(t,e,n),t=t.sibling;t!==null;)Ed(t,e,n),t=t.sibling}function wd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(wd(t,e,n),t=t.sibling;t!==null;)wd(t,e,n),t=t.sibling}var Gt=null,Vn=!1;function ki(t,e,n){for(n=n.child;n!==null;)xx(t,e,n),n=n.sibling}function xx(t,e,n){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(ec,n)}catch{}switch(n.tag){case 5:Jt||vs(n,e);case 6:var i=Gt,r=Vn;Gt=null,ki(t,e,n),Gt=i,Vn=r,Gt!==null&&(Vn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Vn?(t=Gt,n=n.stateNode,t.nodeType===8?kc(t.parentNode,n):t.nodeType===1&&kc(t,n),Fo(t)):kc(Gt,n.stateNode));break;case 4:i=Gt,r=Vn,Gt=n.stateNode.containerInfo,Vn=!0,ki(t,e,n),Gt=i,Vn=r;break;case 0:case 11:case 14:case 15:if(!Jt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Sd(n,e,o),r=r.next}while(r!==i)}ki(t,e,n);break;case 1:if(!Jt&&(vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){At(n,e,a)}ki(t,e,n);break;case 21:ki(t,e,n);break;case 22:n.mode&1?(Jt=(i=Jt)||n.memoizedState!==null,ki(t,e,n),Jt=i):ki(t,e,n);break;default:ki(t,e,n)}}function Zp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Uy),e.forEach(function(i){var r=jy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,Vn=!1;break e;case 3:Gt=a.stateNode.containerInfo,Vn=!0;break e;case 4:Gt=a.stateNode.containerInfo,Vn=!0;break e}a=a.return}if(Gt===null)throw Error(re(160));xx(s,o,r),Gt=null,Vn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){At(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vx(e,t),e=e.sibling}function vx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Kn(t),i&4){try{Ao(3,t,t.return),lc(3,t)}catch(y){At(t,t.return,y)}try{Ao(5,t,t.return)}catch(y){At(t,t.return,y)}}break;case 1:Fn(e,t),Kn(t),i&512&&n!==null&&vs(n,n.return);break;case 5:if(Fn(e,t),Kn(t),i&512&&n!==null&&vs(n,n.return),t.flags&32){var r=t.stateNode;try{Do(r,"")}catch(y){At(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&B0(r,s),$u(a,o);var c=$u(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?j0(r,h):f==="dangerouslySetInnerHTML"?G0(r,h):f==="children"?Do(r,h):Uf(r,f,h,c)}switch(a){case"input":Gu(r,s);break;case"textarea":V0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ms(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ms(r,!!s.multiple,s.defaultValue,!0):Ms(r,!!s.multiple,s.multiple?[]:"",!1))}r[Vo]=s}catch(y){At(t,t.return,y)}}break;case 6:if(Fn(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(re(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){At(t,t.return,y)}}break;case 3:if(Fn(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Fo(e.containerInfo)}catch(y){At(t,t.return,y)}break;case 4:Fn(e,t),Kn(t);break;case 13:Fn(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ph=Pt())),i&4&&Zp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Jt=(c=Jt)||f,Fn(e,t),Jt=c):Fn(e,t),Kn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(ye=t,f=t.child;f!==null;){for(h=ye=f;ye!==null;){switch(d=ye,m=d.child,d.tag){case 0:case 11:case 14:case 15:Ao(4,d,d.return);break;case 1:vs(d,d.return);var x=d.stateNode;if(typeof x.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(y){At(i,n,y)}}break;case 5:vs(d,d.return);break;case 22:if(d.memoizedState!==null){Qp(h);continue}}m!==null?(m.return=d,ye=m):Qp(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=W0("display",o))}catch(y){At(t,t.return,y)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){At(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Fn(e,t),Kn(t),i&4&&Zp(t);break;case 21:break;default:Fn(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gx(n)){var i=n;break e}n=n.return}throw Error(re(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Do(r,""),i.flags&=-33);var s=Kp(t);wd(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Kp(t);Ed(t,a,o);break;default:throw Error(re(161))}}catch(l){At(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Oy(t,e,n){ye=t,_x(t)}function _x(t,e,n){for(var i=(t.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ea;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Jt;a=Ea;var c=Jt;if(Ea=o,(Jt=l)&&!c)for(ye=r;ye!==null;)o=ye,l=o.child,o.tag===22&&o.memoizedState!==null?em(r):l!==null?(l.return=o,ye=l):em(r);for(;s!==null;)ye=s,_x(s),s=s.sibling;ye=r,Ea=a,Jt=c}Jp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):Jp(t)}}function Jp(t){for(;ye!==null;){var e=ye;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Jt||lc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Jt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Bn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Fo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(re(163))}Jt||e.flags&512&&Md(e)}catch(d){At(e,e.return,d)}}if(e===t){ye=null;break}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}}function Qp(t){for(;ye!==null;){var e=ye;if(e===t){ye=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ye=n;break}ye=e.return}}function em(t){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lc(4,e)}catch(l){At(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){At(e,r,l)}}var s=e.return;try{Md(e)}catch(l){At(e,s,l)}break;case 5:var o=e.return;try{Md(e)}catch(l){At(e,o,l)}}}catch(l){At(e,e.return,l)}if(e===t){ye=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ye=a;break}ye=e.return}}var ky=Math.ceil,zl=Ui.ReactCurrentDispatcher,fh=Ui.ReactCurrentOwner,Dn=Ui.ReactCurrentBatchConfig,tt=0,Bt=null,Dt=null,jt=0,yn=0,_s=dr(0),Nt=0,Yo=null,zr=0,cc=0,hh=0,Ro=null,un=null,ph=0,ks=1/0,yi=null,Bl=!1,Td=null,rr=null,wa=!1,Zi=null,Vl=0,Co=0,bd=null,cl=-1,ul=0;function sn(){return tt&6?Pt():cl!==-1?cl:cl=Pt()}function sr(t){return t.mode&1?tt&2&&jt!==0?jt&-jt:Sy.transition!==null?(ul===0&&(ul=ig()),ul):(t=ot,t!==0||(t=window.event,t=t===void 0?16:ug(t.type)),t):1}function Yn(t,e,n,i){if(50<Co)throw Co=0,bd=null,Error(re(185));Qo(t,n,i),(!(tt&2)||t!==Bt)&&(t===Bt&&(!(tt&2)&&(cc|=n),Nt===4&&$i(t,jt)),pn(t,i),n===1&&tt===0&&!(e.mode&1)&&(ks=Pt()+500,sc&&fr()))}function pn(t,e){var n=t.callbackNode;S_(t,e);var i=wl(t,t===Bt?jt:0);if(i===0)n!==null&&cp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&cp(n),e===1)t.tag===0?yy(tm.bind(null,t)):Cg(tm.bind(null,t)),gy(function(){!(tt&6)&&fr()}),n=null;else{switch(rg(i)){case 1:n=Bf;break;case 4:n=tg;break;case 16:n=El;break;case 536870912:n=ng;break;default:n=El}n=Ax(n,yx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yx(t,e){if(cl=-1,ul=0,tt&6)throw Error(re(327));var n=t.callbackNode;if(As()&&t.callbackNode!==n)return null;var i=wl(t,t===Bt?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Hl(t,i);else{e=i;var r=tt;tt|=2;var s=Mx();(Bt!==t||jt!==e)&&(yi=null,ks=Pt()+500,Ir(t,e));do try{Vy();break}catch(a){Sx(t,a)}while(!0);Qf(),zl.current=s,tt=r,Dt!==null?e=0:(Bt=null,jt=0,e=Nt)}if(e!==0){if(e===2&&(r=Qu(t),r!==0&&(i=r,e=Ad(t,r))),e===1)throw n=Yo,Ir(t,0),$i(t,i),pn(t,Pt()),n;if(e===6)$i(t,i);else{if(r=t.current.alternate,!(i&30)&&!zy(r)&&(e=Hl(t,i),e===2&&(s=Qu(t),s!==0&&(i=s,e=Ad(t,s))),e===1))throw n=Yo,Ir(t,0),$i(t,i),pn(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(re(345));case 2:Mr(t,un,yi);break;case 3:if($i(t,i),(i&130023424)===i&&(e=ph+500-Pt(),10<e)){if(wl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ad(Mr.bind(null,t,un,yi),e);break}Mr(t,un,yi);break;case 4:if($i(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Xn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*ky(i/1960))-i,10<i){t.timeoutHandle=ad(Mr.bind(null,t,un,yi),i);break}Mr(t,un,yi);break;case 5:Mr(t,un,yi);break;default:throw Error(re(329))}}}return pn(t,Pt()),t.callbackNode===n?yx.bind(null,t):null}function Ad(t,e){var n=Ro;return t.current.memoizedState.isDehydrated&&(Ir(t,e).flags|=256),t=Hl(t,e),t!==2&&(e=un,un=n,e!==null&&Rd(e)),t}function Rd(t){un===null?un=t:un.push.apply(un,t)}function zy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!$n(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(t,e){for(e&=~hh,e&=~cc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xn(e),i=1<<n;t[n]=-1,e&=~i}}function tm(t){if(tt&6)throw Error(re(327));As();var e=wl(t,0);if(!(e&1))return pn(t,Pt()),null;var n=Hl(t,e);if(t.tag!==0&&n===2){var i=Qu(t);i!==0&&(e=i,n=Ad(t,i))}if(n===1)throw n=Yo,Ir(t,0),$i(t,e),pn(t,Pt()),n;if(n===6)throw Error(re(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mr(t,un,yi),pn(t,Pt()),null}function mh(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(ks=Pt()+500,sc&&fr())}}function Br(t){Zi!==null&&Zi.tag===0&&!(tt&6)&&As();var e=tt;tt|=1;var n=Dn.transition,i=ot;try{if(Dn.transition=null,ot=1,t)return t()}finally{ot=i,Dn.transition=n,tt=e,!(tt&6)&&fr()}}function gh(){yn=_s.current,mt(_s)}function Ir(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,my(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(Kf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Cl();break;case 3:Fs(),mt(fn),mt(en),sh();break;case 5:rh(i);break;case 4:Fs();break;case 13:mt(yt);break;case 19:mt(yt);break;case 10:eh(i.type._context);break;case 22:case 23:gh()}n=n.return}if(Bt=t,Dt=t=or(t.current,null),jt=yn=e,Nt=0,Yo=null,hh=cc=zr=0,un=Ro=null,Rr!==null){for(e=0;e<Rr.length;e++)if(n=Rr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Rr=null}return t}function Sx(t,e){do{var n=Dt;try{if(Qf(),ol.current=kl,Ol){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ol=!1}if(kr=0,zt=It=Mt=null,bo=!1,Wo=0,fh.current=null,n===null||n.return===null){Nt=1,Yo=e,Dt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=jt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Hp(o);if(m!==null){m.flags&=-257,Gp(m,o,a,s,e),m.mode&1&&Vp(s,c,e),e=m,l=c;var x=e.updateQueue;if(x===null){var y=new Set;y.add(l),e.updateQueue=y}else x.add(l);break e}else{if(!(e&1)){Vp(s,c,e),xh();break e}l=Error(re(426))}}else if(xt&&a.mode&1){var g=Hp(o);if(g!==null){!(g.flags&65536)&&(g.flags|=256),Gp(g,o,a,s,e),Zf(Os(l,a));break e}}s=l=Os(l,a),Nt!==4&&(Nt=2),Ro===null?Ro=[s]:Ro.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=rx(s,l,e);Up(s,u);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(rr===null||!rr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=sx(s,a,e);Up(s,S);break e}}s=s.return}while(s!==null)}wx(n)}catch(b){e=b,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function Mx(){var t=zl.current;return zl.current=kl,t===null?kl:t}function xh(){(Nt===0||Nt===3||Nt===2)&&(Nt=4),Bt===null||!(zr&268435455)&&!(cc&268435455)||$i(Bt,jt)}function Hl(t,e){var n=tt;tt|=2;var i=Mx();(Bt!==t||jt!==e)&&(yi=null,Ir(t,e));do try{By();break}catch(r){Sx(t,r)}while(!0);if(Qf(),tt=n,zl.current=i,Dt!==null)throw Error(re(261));return Bt=null,jt=0,Nt}function By(){for(;Dt!==null;)Ex(Dt)}function Vy(){for(;Dt!==null&&!f_();)Ex(Dt)}function Ex(t){var e=bx(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?wx(t):Dt=e,fh.current=null}function wx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ny(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Nt=6,Dt=null;return}}else if(n=Iy(n,e,yn),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);Nt===0&&(Nt=5)}function Mr(t,e,n){var i=ot,r=Dn.transition;try{Dn.transition=null,ot=1,Hy(t,e,n,i)}finally{Dn.transition=r,ot=i}return null}function Hy(t,e,n,i){do As();while(Zi!==null);if(tt&6)throw Error(re(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(re(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(M_(t,s),t===Bt&&(Dt=Bt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wa||(wa=!0,Ax(El,function(){return As(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Dn.transition,Dn.transition=null;var o=ot;ot=1;var a=tt;tt|=4,fh.current=null,Fy(t,n),vx(n,t),ly(sd),Tl=!!rd,sd=rd=null,t.current=n,Oy(n),h_(),tt=a,ot=o,Dn.transition=s}else t.current=n;if(wa&&(wa=!1,Zi=t,Vl=r),s=t.pendingLanes,s===0&&(rr=null),g_(n.stateNode),pn(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Bl)throw Bl=!1,t=Td,Td=null,t;return Vl&1&&t.tag!==0&&As(),s=t.pendingLanes,s&1?t===bd?Co++:(Co=0,bd=t):Co=0,fr(),null}function As(){if(Zi!==null){var t=rg(Vl),e=Dn.transition,n=ot;try{if(Dn.transition=null,ot=16>t?16:t,Zi===null)var i=!1;else{if(t=Zi,Zi=null,Vl=0,tt&6)throw Error(re(331));var r=tt;for(tt|=4,ye=t.current;ye!==null;){var s=ye,o=s.child;if(ye.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ye=c;ye!==null;){var f=ye;switch(f.tag){case 0:case 11:case 15:Ao(8,f,s)}var h=f.child;if(h!==null)h.return=f,ye=h;else for(;ye!==null;){f=ye;var d=f.sibling,m=f.return;if(mx(f),f===c){ye=null;break}if(d!==null){d.return=m,ye=d;break}ye=m}}}var x=s.alternate;if(x!==null){var y=x.child;if(y!==null){x.child=null;do{var g=y.sibling;y.sibling=null,y=g}while(y!==null)}}ye=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ye=o;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ao(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ye=u;break e}ye=s.return}}var p=t.current;for(ye=p;ye!==null;){o=ye;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,ye=v;else e:for(o=p;ye!==null;){if(a=ye,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:lc(9,a)}}catch(b){At(a,a.return,b)}if(a===o){ye=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ye=S;break e}ye=a.return}}if(tt=r,fr(),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(ec,t)}catch{}i=!0}return i}finally{ot=n,Dn.transition=e}}return!1}function nm(t,e,n){e=Os(n,e),e=rx(t,e,1),t=ir(t,e,1),e=sn(),t!==null&&(Qo(t,1,e),pn(t,e))}function At(t,e,n){if(t.tag===3)nm(t,t,n);else for(;e!==null;){if(e.tag===3){nm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(rr===null||!rr.has(i))){t=Os(n,t),t=sx(e,t,1),e=ir(e,t,1),t=sn(),e!==null&&(Qo(e,1,t),pn(e,t));break}}e=e.return}}function Gy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(jt&n)===n&&(Nt===4||Nt===3&&(jt&130023424)===jt&&500>Pt()-ph?Ir(t,0):hh|=n),pn(t,e)}function Tx(t,e){e===0&&(t.mode&1?(e=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):e=1);var n=sn();t=Li(t,e),t!==null&&(Qo(t,e,n),pn(t,n))}function Wy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Tx(t,n)}function jy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(re(314))}i!==null&&i.delete(e),Tx(t,n)}var bx;bx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,Dy(t,e,n);dn=!!(t.flags&131072)}else dn=!1,xt&&e.flags&1048576&&Pg(e,Dl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ll(t,e),t=e.pendingProps;var r=Is(e,en.current);bs(e,n),r=ah(null,e,i,t,r,n);var s=lh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,Pl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,nh(e),r.updater=ac,e.stateNode=r,r._reactInternals=e,pd(e,i,t,n),e=xd(null,e,i,!0,s,n)):(e.tag=0,xt&&s&&qf(e),nn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ll(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Yy(i),t=Bn(i,t),r){case 0:e=gd(null,e,i,t,n);break e;case 1:e=Xp(null,e,i,t,n);break e;case 11:e=Wp(null,e,i,t,n);break e;case 14:e=jp(null,e,i,Bn(i.type,t),n);break e}throw Error(re(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),gd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Xp(t,e,i,r,n);case 3:e:{if(cx(e),t===null)throw Error(re(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Fg(t,e),Ul(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Os(Error(re(423)),e),e=Yp(t,e,i,n,r);break e}else if(i!==r){r=Os(Error(re(424)),e),e=Yp(t,e,i,n,r);break e}else for(Mn=nr(e.stateNode.containerInfo.firstChild),En=e,xt=!0,Hn=null,n=Ng(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ns(),i===r){e=Di(t,e,n);break e}nn(t,e,i,n)}e=e.child}return e;case 5:return Og(e),t===null&&dd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,od(i,r)?o=null:s!==null&&od(i,s)&&(e.flags|=32),lx(t,e),nn(t,e,o,n),e.child;case 6:return t===null&&dd(e),null;case 13:return ux(t,e,n);case 4:return ih(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Us(e,null,i,n):nn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),Wp(t,e,i,r,n);case 7:return nn(t,e,e.pendingProps,n),e.child;case 8:return nn(t,e,e.pendingProps.children,n),e.child;case 12:return nn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ht(Il,i._currentValue),i._currentValue=o,s!==null)if($n(s.value,o)){if(s.children===r.children&&!fn.current){e=Di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=bi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),fd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(re(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),fd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}nn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,bs(e,n),r=In(r),i=i(r),e.flags|=1,nn(t,e,i,n),e.child;case 14:return i=e.type,r=Bn(i,e.pendingProps),r=Bn(i.type,r),jp(t,e,i,r,n);case 15:return ox(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Bn(i,r),ll(t,e),e.tag=1,hn(i)?(t=!0,Pl(e)):t=!1,bs(e,n),ix(e,i,r),pd(e,i,r,n),xd(null,e,i,!0,t,n);case 19:return dx(t,e,n);case 22:return ax(t,e,n)}throw Error(re(156,e.tag))};function Ax(t,e){return eg(t,e)}function Xy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new Xy(t,e,n,i)}function vh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Yy(t){if(typeof t=="function")return vh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Of)return 11;if(t===kf)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function dl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")vh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case cs:return Nr(n.children,r,s,e);case Ff:o=8,r|=8;break;case ku:return t=Ln(12,n,e,r|2),t.elementType=ku,t.lanes=s,t;case zu:return t=Ln(13,n,e,r),t.elementType=zu,t.lanes=s,t;case Bu:return t=Ln(19,n,e,r),t.elementType=Bu,t.lanes=s,t;case O0:return uc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U0:o=10;break e;case F0:o=9;break e;case Of:o=11;break e;case kf:o=14;break e;case ji:o=16,i=null;break e}throw Error(re(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Nr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function uc(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=O0,t.lanes=n,t.stateNode={isHidden:!1},t}function Xc(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Yc(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function $y(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ac(0),this.expirationTimes=Ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function _h(t,e,n,i,r,s,o,a,l){return t=new $y(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},nh(s),t}function qy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ls,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Rx(t){if(!t)return lr;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(re(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(re(171))}if(t.tag===1){var n=t.type;if(hn(n))return Rg(t,n,e)}return e}function Cx(t,e,n,i,r,s,o,a,l){return t=_h(n,i,!0,t,r,s,o,a,l),t.context=Rx(null),n=t.current,i=sn(),r=sr(n),s=bi(i,r),s.callback=e??null,ir(n,s,r),t.current.lanes=r,Qo(t,r,i),pn(t,i),t}function dc(t,e,n,i){var r=e.current,s=sn(),o=sr(r);return n=Rx(n),e.context===null?e.context=n:e.pendingContext=n,e=bi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ir(r,e,o),t!==null&&(Yn(t,r,o,s),sl(t,r,o)),o}function Gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function im(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function yh(t,e){im(t,e),(t=t.alternate)&&im(t,e)}function Ky(){return null}var Px=typeof reportError=="function"?reportError:function(t){console.error(t)};function Sh(t){this._internalRoot=t}fc.prototype.render=Sh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(re(409));dc(t,e,null,null)};fc.prototype.unmount=Sh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Br(function(){dc(null,t,null,null)}),e[Pi]=null}};function fc(t){this._internalRoot=t}fc.prototype.unstable_scheduleHydration=function(t){if(t){var e=ag();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yi.length&&e!==0&&e<Yi[n].priority;n++);Yi.splice(n,0,t),n===0&&cg(t)}};function Mh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rm(){}function Zy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Gl(o);s.call(c)}}var o=Cx(e,i,t,0,null,!1,!1,"",rm);return t._reactRootContainer=o,t[Pi]=o.current,zo(t.nodeType===8?t.parentNode:t),Br(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Gl(l);a.call(c)}}var l=_h(t,0,!1,null,null,!1,!1,"",rm);return t._reactRootContainer=l,t[Pi]=l.current,zo(t.nodeType===8?t.parentNode:t),Br(function(){dc(e,l,n,i)}),l}function pc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Gl(o);a.call(l)}}dc(e,o,t,r)}else o=Zy(n,e,t,r,i);return Gl(o)}sg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=xo(e.pendingLanes);n!==0&&(Vf(e,n|1),pn(e,Pt()),!(tt&6)&&(ks=Pt()+500,fr()))}break;case 13:Br(function(){var i=Li(t,1);if(i!==null){var r=sn();Yn(i,t,1,r)}}),yh(t,1)}};Hf=function(t){if(t.tag===13){var e=Li(t,134217728);if(e!==null){var n=sn();Yn(e,t,134217728,n)}yh(t,134217728)}};og=function(t){if(t.tag===13){var e=sr(t),n=Li(t,e);if(n!==null){var i=sn();Yn(n,t,e,i)}yh(t,e)}};ag=function(){return ot};lg=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};Ku=function(t,e,n){switch(e){case"input":if(Gu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=rc(i);if(!r)throw Error(re(90));z0(i),Gu(i,r)}}}break;case"textarea":V0(t,n);break;case"select":e=n.value,e!=null&&Ms(t,!!n.multiple,e,!1)}};$0=mh;q0=Br;var Jy={usingClientEntryPoint:!1,Events:[ta,hs,rc,X0,Y0,mh]},ro={findFiberByHostInstance:Ar,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Qy={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=J0(t),t===null?null:t.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||Ky,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{ec=Ta.inject(Qy),oi=Ta}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jy;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mh(e))throw Error(re(200));return qy(t,e,null,n)};Tn.createRoot=function(t,e){if(!Mh(t))throw Error(re(299));var n=!1,i="",r=Px;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=_h(t,1,!1,null,null,n,!1,i,r),t[Pi]=e.current,zo(t.nodeType===8?t.parentNode:t),new Sh(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(re(188)):(t=Object.keys(t).join(","),Error(re(268,t)));return t=J0(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return Br(t)};Tn.hydrate=function(t,e,n){if(!hc(e))throw Error(re(200));return pc(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!Mh(t))throw Error(re(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Px;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Cx(e,null,t,1,n??null,r,!1,s,o),t[Pi]=e.current,zo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new fc(e)};Tn.render=function(t,e,n){if(!hc(e))throw Error(re(200));return pc(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!hc(t))throw Error(re(40));return t._reactRootContainer?(Br(function(){pc(null,null,t,!1,function(){t._reactRootContainer=null,t[Pi]=null})}),!0):!1};Tn.unstable_batchedUpdates=mh;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!hc(n))throw Error(re(200));if(t==null||t._reactInternals===void 0)throw Error(re(38));return pc(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function Lx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lx)}catch(t){console.error(t)}}Lx(),L0.exports=Tn;var eS=L0.exports,sm=eS;Fu.createRoot=sm.createRoot,Fu.hydrateRoot=sm.hydrateRoot;const tS="modulepreload",nS=function(t){return"/eden-pipeline/"+t},om={},Tt=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=nS(l),l in om)return;om[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":tS,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,m)=>{h.addEventListener("load",d),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eh="183",iS=0,am=1,rS=2,fl=1,sS=2,_o=3,cr=0,mn=1,Mi=2,Ai=0,Rs=1,lm=2,cm=3,um=4,oS=5,wr=100,aS=101,lS=102,cS=103,uS=104,dS=200,fS=201,hS=202,pS=203,Cd=204,Pd=205,mS=206,gS=207,xS=208,vS=209,_S=210,yS=211,SS=212,MS=213,ES=214,Ld=0,Dd=1,Id=2,zs=3,Nd=4,Ud=5,Fd=6,Od=7,Dx=0,wS=1,TS=2,li=0,Ix=1,Nx=2,Ux=3,Fx=4,Ox=5,kx=6,zx=7,Bx=300,Vr=301,Bs=302,$c=303,qc=304,mc=306,kd=1e3,Ti=1001,zd=1002,Wt=1003,bS=1004,ba=1005,Qt=1006,Kc=1007,Pr=1008,Sn=1009,Vx=1010,Hx=1011,$o=1012,wh=1013,ui=1014,ri=1015,Ii=1016,Th=1017,bh=1018,qo=1020,Gx=35902,Wx=35899,jx=1021,Xx=1022,jn=1023,Ni=1026,Lr=1027,Yx=1028,Ah=1029,Vs=1030,Rh=1031,Ch=1033,hl=33776,pl=33777,ml=33778,gl=33779,Bd=35840,Vd=35841,Hd=35842,Gd=35843,Wd=36196,jd=37492,Xd=37496,Yd=37488,$d=37489,qd=37490,Kd=37491,Zd=37808,Jd=37809,Qd=37810,ef=37811,tf=37812,nf=37813,rf=37814,sf=37815,of=37816,af=37817,lf=37818,cf=37819,uf=37820,df=37821,ff=36492,hf=36494,pf=36495,mf=36283,gf=36284,xf=36285,vf=36286,AS=3200,$x=0,RS=1,qi="",Rn="srgb",Hs="srgb-linear",Wl="linear",st="srgb",$r=7680,dm=519,CS=512,PS=513,LS=514,Ph=515,DS=516,IS=517,Lh=518,NS=519,fm=35044,hm="300 es",si=2e3,Ko=2001;function US(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function jl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function FS(){const t=jl("canvas");return t.style.display="block",t}const pm={};function mm(...t){const e="THREE."+t.shift();console.log(e,...t)}function qx(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Fe(...t){t=qx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function it(...t){t=qx(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Xl(...t){const e=t.join(" ");e in pm||(pm[e]=!0,Fe(...t))}function OS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const kS={[Ld]:Dd,[Id]:Fd,[Nd]:Od,[zs]:Ud,[Dd]:Ld,[Fd]:Id,[Od]:Nd,[Ud]:zs};class $s{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zc=Math.PI/180,_f=180/Math.PI;function ia(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function zS(t,e){return(t%e+e)%e}function Jc(t,e,n){return(1-n)*t+n*e}function so(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Ke{constructor(e=0,n=0){Ke.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],d=s[o+0],m=s[o+1],x=s[o+2],y=s[o+3];if(h!==y||l!==d||c!==m||f!==x){let g=l*d+c*m+f*x+h*y;g<0&&(d=-d,m=-m,x=-x,y=-y,g=-g);let u=1-a;if(g<.9995){const p=Math.acos(g),v=Math.sin(p);u=Math.sin(u*p)/v,a=Math.sin(a*p)/v,l=l*u+d*a,c=c*u+m*a,f=f*u+x*a,h=h*u+y*a}else{l=l*u+d*a,c=c*u+m*a,f=f*u+x*a,h=h*u+y*a;const p=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=p,c*=p,f*=p,h*=p}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],m=s[o+2],x=s[o+3];return e[n]=a*x+f*h+l*m-c*d,e[n+1]=l*x+f*d+c*h-a*m,e[n+2]=c*x+f*m+a*d-l*h,e[n+3]=f*x-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*m*x,this._y=c*m*h-d*f*x,this._z=c*f*x+d*m*h,this._w=c*f*h-d*m*x;break;case"YXZ":this._x=d*f*h+c*m*x,this._y=c*m*h-d*f*x,this._z=c*f*x-d*m*h,this._w=c*f*h+d*m*x;break;case"ZXY":this._x=d*f*h-c*m*x,this._y=c*m*h+d*f*x,this._z=c*f*x+d*m*h,this._w=c*f*h-d*m*x;break;case"ZYX":this._x=d*f*h-c*m*x,this._y=c*m*h+d*f*x,this._z=c*f*x-d*m*h,this._w=c*f*h+d*m*x;break;case"YZX":this._x=d*f*h+c*m*x,this._y=c*m*h+d*f*x,this._z=c*f*x-d*m*h,this._w=c*f*h-d*m*x;break;case"XZY":this._x=d*f*h-c*m*x,this._y=c*m*h-d*f*x,this._z=c*f*x+d*m*h,this._w=c*f*h+d*m*x;break;default:Fe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,n=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qc.copy(this).projectOnVector(e),this.sub(Qc)}reflect(e){return this.sub(Qc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qc=new V,gm=new qs;class Ve{constructor(e,n,i,r,s,o,a,l,c){Ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],m=i[5],x=i[8],y=r[0],g=r[3],u=r[6],p=r[1],v=r[4],S=r[7],b=r[2],A=r[5],R=r[8];return s[0]=o*y+a*p+l*b,s[3]=o*g+a*v+l*A,s[6]=o*u+a*S+l*R,s[1]=c*y+f*p+h*b,s[4]=c*g+f*v+h*A,s[7]=c*u+f*S+h*R,s[2]=d*y+m*p+x*b,s[5]=d*g+m*v+x*A,s[8]=d*u+m*S+x*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,m=c*s-o*l,x=n*h+i*d+r*m;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/x;return e[0]=h*y,e[1]=(r*c-f*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(f*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=m*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(eu.makeScale(e,n)),this}rotate(e){return this.premultiply(eu.makeRotation(-e)),this}translate(e,n){return this.premultiply(eu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const eu=new Ve,xm=new Ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vm=new Ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BS(){const t={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===st&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===st&&(r.r=Cs(r.r),r.g=Cs(r.g),r.b=Cs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===qi?Wl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Xl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Xl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Hs]:{primaries:e,whitePoint:i,transfer:Wl,toXYZ:xm,fromXYZ:vm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Rn},outputColorSpaceConfig:{drawingBufferColorSpace:Rn}},[Rn]:{primaries:e,whitePoint:i,transfer:st,toXYZ:xm,fromXYZ:vm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Rn}}}),t}const et=BS();function Ri(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Cs(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let qr;class VS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qr===void 0&&(qr=jl("canvas")),qr.width=e.width,qr.height=e.height;const r=qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=qr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=jl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ri(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ri(n[i]/255)*255):n[i]=Ri(n[i]);return{data:n,width:e.width,height:e.height}}else return Fe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HS=0;class Dh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=ia(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(tu(r[o].image)):s.push(tu(r[o]))}else s=tu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function tu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?VS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Fe("Texture: Unable to serialize Texture."),{})}let GS=0;const nu=new V;class on extends $s{constructor(e=on.DEFAULT_IMAGE,n=on.DEFAULT_MAPPING,i=Ti,r=Ti,s=Qt,o=Pr,a=jn,l=Sn,c=on.DEFAULT_ANISOTROPY,f=qi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=ia(),this.name="",this.source=new Dh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nu).x}get height(){return this.source.getSize(nu).y}get depth(){return this.source.getSize(nu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Fe(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Fe(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kd:e.x=e.x-Math.floor(e.x);break;case Ti:e.x=e.x<0?0:1;break;case zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kd:e.y=e.y-Math.floor(e.y);break;case Ti:e.y=e.y<0?0:1;break;case zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Bx;on.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,n=0,i=0,r=1){Rt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],m=l[5],x=l[9],y=l[2],g=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-y)<.01&&Math.abs(x-g)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+y)<.1&&Math.abs(x+g)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,S=(m+1)/2,b=(u+1)/2,A=(f+d)/4,R=(h+y)/4,_=(x+g)/4;return v>S&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=R/i):S>b?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=_/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=R/s,r=_/s),this.set(i,r,s,n),this}let p=Math.sqrt((g-x)*(g-x)+(h-y)*(h-y)+(d-f)*(d-f));return Math.abs(p)<.001&&(p=1),this.x=(g-x)/p,this.y=(h-y)/p,this.z=(d-f)/p,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class WS extends $s{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new on(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Dh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ci extends WS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Kx extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class jS extends on{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class vt{constructor(e,n,i,r,s,o,a,l,c,f,h,d,m,x,y,g){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,d,m,x,y,g)}set(e,n,i,r,s,o,a,l,c,f,h,d,m,x,y,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=m,u[7]=x,u[11]=y,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),s=1/Kr.setFromMatrixColumn(e,1).length(),o=1/Kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,m=o*h,x=a*f,y=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=m+x*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=x+m*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,x=c*f,y=c*h;n[0]=d+y*a,n[4]=x*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-x,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,x=c*f,y=c*h;n[0]=d-y*a,n[4]=-o*h,n[8]=x+m*a,n[1]=m+x*a,n[5]=o*f,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,m=o*h,x=a*f,y=a*h;n[0]=l*f,n[4]=x*c-m,n[8]=d*c+y,n[1]=l*h,n[5]=y*c+d,n[9]=m*c-x,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,x=a*l,y=a*c;n[0]=l*f,n[4]=y-d*h,n[8]=x*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*h+x,n[10]=d-y*h}else if(e.order==="XZY"){const d=o*l,m=o*c,x=a*l,y=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+y,n[5]=o*f,n[9]=m*h-x,n[2]=x*h-m,n[6]=a*f,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XS,e,YS)}lookAt(e,n,i){const r=this.elements;return vn.subVectors(e,n),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),zi.crossVectors(i,vn),zi.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),zi.crossVectors(i,vn)),zi.normalize(),Aa.crossVectors(vn,zi),r[0]=zi.x,r[4]=Aa.x,r[8]=vn.x,r[1]=zi.y,r[5]=Aa.y,r[9]=vn.y,r[2]=zi.z,r[6]=Aa.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],m=i[13],x=i[2],y=i[6],g=i[10],u=i[14],p=i[3],v=i[7],S=i[11],b=i[15],A=r[0],R=r[4],_=r[8],w=r[12],I=r[1],D=r[5],k=r[9],H=r[13],W=r[2],B=r[6],C=r[10],U=r[14],L=r[3],O=r[7],X=r[11],J=r[15];return s[0]=o*A+a*I+l*W+c*L,s[4]=o*R+a*D+l*B+c*O,s[8]=o*_+a*k+l*C+c*X,s[12]=o*w+a*H+l*U+c*J,s[1]=f*A+h*I+d*W+m*L,s[5]=f*R+h*D+d*B+m*O,s[9]=f*_+h*k+d*C+m*X,s[13]=f*w+h*H+d*U+m*J,s[2]=x*A+y*I+g*W+u*L,s[6]=x*R+y*D+g*B+u*O,s[10]=x*_+y*k+g*C+u*X,s[14]=x*w+y*H+g*U+u*J,s[3]=p*A+v*I+S*W+b*L,s[7]=p*R+v*D+S*B+b*O,s[11]=p*_+v*k+S*C+b*X,s[15]=p*w+v*H+S*U+b*J,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],m=e[14],x=e[3],y=e[7],g=e[11],u=e[15],p=l*m-c*d,v=a*m-c*h,S=a*d-l*h,b=o*m-c*f,A=o*d-l*f,R=o*h-a*f;return n*(y*p-g*v+u*S)-i*(x*p-g*b+u*A)+r*(x*v-y*b+u*R)-s*(x*S-y*A+g*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],m=e[11],x=e[12],y=e[13],g=e[14],u=e[15],p=n*a-i*o,v=n*l-r*o,S=n*c-s*o,b=i*l-r*a,A=i*c-s*a,R=r*c-s*l,_=f*y-h*x,w=f*g-d*x,I=f*u-m*x,D=h*g-d*y,k=h*u-m*y,H=d*u-m*g,W=p*H-v*k+S*D+b*I-A*w+R*_;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/W;return e[0]=(a*H-l*k+c*D)*B,e[1]=(r*k-i*H-s*D)*B,e[2]=(y*R-g*A+u*b)*B,e[3]=(d*A-h*R-m*b)*B,e[4]=(l*I-o*H-c*w)*B,e[5]=(n*H-r*I+s*w)*B,e[6]=(g*S-x*R-u*v)*B,e[7]=(f*R-d*S+m*v)*B,e[8]=(o*k-a*I+c*_)*B,e[9]=(i*I-n*k-s*_)*B,e[10]=(x*A-y*S+u*p)*B,e[11]=(h*S-f*A-m*p)*B,e[12]=(a*w-o*D-l*_)*B,e[13]=(n*D-i*w+r*_)*B,e[14]=(y*v-x*b-g*p)*B,e[15]=(f*b-h*v+d*p)*B,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,d=s*c,m=s*f,x=s*h,y=o*f,g=o*h,u=a*h,p=l*c,v=l*f,S=l*h,b=i.x,A=i.y,R=i.z;return r[0]=(1-(y+u))*b,r[1]=(m+S)*b,r[2]=(x-v)*b,r[3]=0,r[4]=(m-S)*A,r[5]=(1-(d+u))*A,r[6]=(g+p)*A,r[7]=0,r[8]=(x+v)*R,r[9]=(g-p)*R,r[10]=(1-(d+y))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Kr.set(r[0],r[1],r[2]).length();const a=Kr.set(r[4],r[5],r[6]).length(),l=Kr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),On.copy(this);const c=1/o,f=1/a,h=1/l;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=f,On.elements[5]*=f,On.elements[6]*=f,On.elements[8]*=h,On.elements[9]*=h,On.elements[10]*=h,n.setFromRotationMatrix(On),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=si,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let x,y;if(l)x=s/(o-s),y=o*s/(o-s);else if(a===si)x=-(o+s)/(o-s),y=-2*o*s/(o-s);else if(a===Ko)x=-o/(o-s),y=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=si,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let x,y;if(l)x=1/(o-s),y=o/(o-s);else if(a===si)x=-2/(o-s),y=-(o+s)/(o-s);else if(a===Ko)x=-1/(o-s),y=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=x,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Kr=new V,On=new vt,XS=new V(0,0,0),YS=new V(1,1,1),zi=new V,Aa=new V,vn=new V,_m=new vt,ym=new qs;class di{constructor(e=0,n=0,i=0,r=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Fe("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _m.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_m,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ym.setFromEuler(this),this.setFromQuaternion(ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class Zx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $S=0;const Sm=new V,Zr=new qs,mi=new vt,Ra=new V,oo=new V,qS=new V,KS=new qs,Mm=new V(1,0,0),Em=new V(0,1,0),wm=new V(0,0,1),Tm={type:"added"},ZS={type:"removed"},Jr={type:"childadded",child:null},iu={type:"childremoved",child:null};class Vt extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=ia(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new V,n=new di,i=new qs,r=new V(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ve}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.multiply(Zr),this}rotateOnWorldAxis(e,n){return Zr.setFromAxisAngle(e,n),this.quaternion.premultiply(Zr),this}rotateX(e){return this.rotateOnAxis(Mm,e)}rotateY(e){return this.rotateOnAxis(Em,e)}rotateZ(e){return this.rotateOnAxis(wm,e)}translateOnAxis(e,n){return Sm.copy(e).applyQuaternion(this.quaternion),this.position.add(Sm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Mm,e)}translateY(e){return this.translateOnAxis(Em,e)}translateZ(e){return this.translateOnAxis(wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ra.copy(e):Ra.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(oo,Ra,this.up):mi.lookAt(Ra,oo,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),Zr.setFromRotationMatrix(mi),this.quaternion.premultiply(Zr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Tm),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ZS),iu.child=e,this.dispatchEvent(iu),iu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Tm),Jr.child=e,this.dispatchEvent(Jr),Jr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,e,qS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(oo,KS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Vt.DEFAULT_UP=new V(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ys extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JS={type:"move"};class ru{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ys,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ys,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ys,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const g=n.getJointPose(y,i),u=this._getHandJoint(c,y);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,x=.005;c.inputState.pinching&&d>m+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(JS)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ys;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Jx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bi={h:0,s:0,l:0},Ca={h:0,s:0,l:0};function su(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Ze{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=et.workingColorSpace){if(e=zS(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=su(o,s,e+1/3),this.g=su(o,s,e),this.b=su(o,s,e-1/3)}return et.colorSpaceToWorking(this,r),this}setStyle(e,n=Rn){function i(s){s!==void 0&&parseFloat(s)<1&&Fe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Fe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Fe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Rn){const i=Jx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Fe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=Cs(e.r),this.g=Cs(e.g),this.b=Cs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return et.workingToColorSpace(Zt.copy(this),e),Math.round(qe(Zt.r*255,0,255))*65536+Math.round(qe(Zt.g*255,0,255))*256+Math.round(qe(Zt.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.workingToColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,s=Zt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=et.workingColorSpace){return et.workingToColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=Rn){et.workingToColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==Rn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Bi),this.setHSL(Bi.h+e,Bi.s+n,Bi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Bi),e.getHSL(Ca);const i=Jc(Bi.h,Ca.h,n),r=Jc(Bi.s,Ca.s,n),s=Jc(Bi.l,Ca.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Ze;Ze.NAMES=Jx;class gc{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Ze(e),this.density=n}clone(){return new gc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ih extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const kn=new V,gi=new V,ou=new V,xi=new V,Qr=new V,es=new V,bm=new V,au=new V,lu=new V,cu=new V,uu=new Rt,du=new Rt,fu=new Rt;class Wn{constructor(e=new V,n=new V,i=new V){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),gi.subVectors(i,n),ou.subVectors(e,n);const o=kn.dot(kn),a=kn.dot(gi),l=kn.dot(ou),c=gi.dot(gi),f=gi.dot(ou),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-a*f)*d,x=(o*f-a*l)*d;return s.set(1-m-x,x,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,xi.x),l.addScaledVector(o,xi.y),l.addScaledVector(a,xi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return uu.setScalar(0),du.setScalar(0),fu.setScalar(0),uu.fromBufferAttribute(e,n),du.fromBufferAttribute(e,i),fu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(uu,s.x),o.addScaledVector(du,s.y),o.addScaledVector(fu,s.z),o}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),gi.subVectors(e,n),kn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),kn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Wn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Wn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Qr.subVectors(r,i),es.subVectors(s,i),au.subVectors(e,i);const l=Qr.dot(au),c=es.dot(au);if(l<=0&&c<=0)return n.copy(i);lu.subVectors(e,r);const f=Qr.dot(lu),h=es.dot(lu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Qr,o);cu.subVectors(e,s);const m=Qr.dot(cu),x=es.dot(cu);if(x>=0&&m<=x)return n.copy(s);const y=m*c-l*x;if(y<=0&&c>=0&&x<=0)return a=c/(c-x),n.copy(i).addScaledVector(es,a);const g=f*x-m*h;if(g<=0&&h-f>=0&&m-x>=0)return bm.subVectors(s,r),a=(h-f)/(h-f+(m-x)),n.copy(r).addScaledVector(bm,a);const u=1/(g+y+d);return o=y*u,a=d*u,n.copy(i).addScaledVector(Qr,o).addScaledVector(es,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ra{constructor(e=new V(1/0,1/0,1/0),n=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,zn):zn.fromBufferAttribute(s,o),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pa.copy(i.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ao),La.subVectors(this.max,ao),ts.subVectors(e.a,ao),ns.subVectors(e.b,ao),is.subVectors(e.c,ao),Vi.subVectors(ns,ts),Hi.subVectors(is,ns),mr.subVectors(ts,is);let n=[0,-Vi.z,Vi.y,0,-Hi.z,Hi.y,0,-mr.z,mr.y,Vi.z,0,-Vi.x,Hi.z,0,-Hi.x,mr.z,0,-mr.x,-Vi.y,Vi.x,0,-Hi.y,Hi.x,0,-mr.y,mr.x,0];return!hu(n,ts,ns,is,La)||(n=[1,0,0,0,1,0,0,0,1],!hu(n,ts,ns,is,La))?!1:(Da.crossVectors(Vi,Hi),n=[Da.x,Da.y,Da.z],hu(n,ts,ns,is,La))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const vi=[new V,new V,new V,new V,new V,new V,new V,new V],zn=new V,Pa=new ra,ts=new V,ns=new V,is=new V,Vi=new V,Hi=new V,mr=new V,ao=new V,La=new V,Da=new V,gr=new V;function hu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){gr.fromArray(t,s);const a=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=e.dot(gr),c=n.dot(gr),f=i.dot(gr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Lt=new V,Ia=new Ke;let QS=0;class gn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:QS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=fm,this.updateRanges=[],this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ia.fromBufferAttribute(this,n),Ia.applyMatrix3(e),this.setXY(n,Ia.x,Ia.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=so(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=so(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=so(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=so(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=so(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fm&&(e.usage=this.usage),e}}class Qx extends gn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ev extends gn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Et extends gn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const e1=new ra,lo=new V,pu=new V;class sa{constructor(e=new V,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):e1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;lo.subVectors(e,this.center);const n=lo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(lo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(lo.copy(e.center).add(pu)),this.expandByPoint(lo.copy(e.center).sub(pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let t1=0;const An=new vt,mu=new Vt,rs=new V,_n=new ra,co=new ra,kt=new V;class St extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:t1++}),this.uuid=ia(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(US(e)?ev:Qx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ve().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return mu.lookAt(e),mu.updateMatrix(),this.applyMatrix4(mu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rs).negate(),this.translate(rs.x,rs.y,rs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Et(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Fe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ra);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];co.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(_n.min,co.min),_n.expandByPoint(kt),kt.addVectors(_n.max,co.max),_n.expandByPoint(kt)):(_n.expandByPoint(co.min),_n.expandByPoint(co.max))}_n.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)kt.fromBufferAttribute(a,c),l&&(rs.fromBufferAttribute(e,c),kt.add(rs)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let _=0;_<i.count;_++)a[_]=new V,l[_]=new V;const c=new V,f=new V,h=new V,d=new Ke,m=new Ke,x=new Ke,y=new V,g=new V;function u(_,w,I){c.fromBufferAttribute(i,_),f.fromBufferAttribute(i,w),h.fromBufferAttribute(i,I),d.fromBufferAttribute(s,_),m.fromBufferAttribute(s,w),x.fromBufferAttribute(s,I),f.sub(c),h.sub(c),m.sub(d),x.sub(d);const D=1/(m.x*x.y-x.x*m.y);isFinite(D)&&(y.copy(f).multiplyScalar(x.y).addScaledVector(h,-m.y).multiplyScalar(D),g.copy(h).multiplyScalar(m.x).addScaledVector(f,-x.x).multiplyScalar(D),a[_].add(y),a[w].add(y),a[I].add(y),l[_].add(g),l[w].add(g),l[I].add(g))}let p=this.groups;p.length===0&&(p=[{start:0,count:e.count}]);for(let _=0,w=p.length;_<w;++_){const I=p[_],D=I.start,k=I.count;for(let H=D,W=D+k;H<W;H+=3)u(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const v=new V,S=new V,b=new V,A=new V;function R(_){b.fromBufferAttribute(r,_),A.copy(b);const w=a[_];v.copy(w),v.sub(b.multiplyScalar(b.dot(w))).normalize(),S.crossVectors(A,w);const D=S.dot(l[_])<0?-1:1;o.setXYZW(_,v.x,v.y,v.z,D)}for(let _=0,w=p.length;_<w;++_){const I=p[_],D=I.start,k=I.count;for(let H=D,W=D+k;H<W;H+=3)R(e.getX(H+0)),R(e.getX(H+1)),R(e.getX(H+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new V,s=new V,o=new V,a=new V,l=new V,c=new V,f=new V,h=new V;if(e)for(let d=0,m=e.count;d<m;d+=3){const x=e.getX(d+0),y=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,x),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,g),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),a.add(f),l.add(f),c.add(f),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let m=0,x=0;for(let y=0,g=l.length;y<g;y++){a.isInterleavedBufferAttribute?m=l[y]*a.data.stride+a.offset:m=l[y]*f;for(let u=0;u<f;u++)d[x++]=c[m++]}return new gn(d,f,h)}if(this.index===null)return Fe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new St,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let n1=0;class Wr extends $s{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=ia(),this.name="",this.type="Material",this.blending=Rs,this.side=cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Pd,this.blendEquation=wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$r,this.stencilZFail=$r,this.stencilZPass=$r,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Fe(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Fe(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==cr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Cd&&(i.blendSrc=this.blendSrc),this.blendDst!==Pd&&(i.blendDst=this.blendDst),this.blendEquation!==wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==zs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$r&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$r&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$r&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const _i=new V,gu=new V,Na=new V,Gi=new V,xu=new V,Ua=new V,vu=new V;class Nh{constructor(e=new V,n=new V(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,_i)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=_i.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(_i.copy(this.origin).addScaledVector(this.direction,n),_i.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){gu.copy(e).add(n).multiplyScalar(.5),Na.copy(n).sub(e).normalize(),Gi.copy(this.origin).sub(gu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Na),a=Gi.dot(this.direction),l=-Gi.dot(Na),c=Gi.lengthSq(),f=Math.abs(1-o*o);let h,d,m,x;if(f>0)if(h=o*l-a,d=o*a-l,x=s*f,h>=0)if(d>=-x)if(d<=x){const y=1/f;h*=y,d*=y,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-x?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=x?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(gu).addScaledVector(Na,d),m}intersectSphere(e,n){_i.subVectors(e.center,this.origin);const i=_i.dot(this.direction),r=_i.dot(_i)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,_i)!==null}intersectTriangle(e,n,i,r,s){xu.subVectors(n,e),Ua.subVectors(i,e),vu.crossVectors(xu,Ua);let o=this.direction.dot(vu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);const l=a*this.direction.dot(Ua.crossVectors(Gi,Ua));if(l<0)return null;const c=a*this.direction.dot(xu.cross(Gi));if(c<0||l+c>o)return null;const f=-a*Gi.dot(vu);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ps extends Wr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=Dx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Am=new vt,xr=new Nh,Fa=new sa,Rm=new V,Oa=new V,ka=new V,za=new V,_u=new V,Ba=new V,Cm=new V,Va=new V;class Ue extends Vt{constructor(e=new St,n=new Ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ba.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(_u.fromBufferAttribute(h,e),o?Ba.addScaledVector(_u,f):Ba.addScaledVector(_u.sub(n),f))}n.add(Ba)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fa.copy(i.boundingSphere),Fa.applyMatrix4(s),xr.copy(e.ray).recast(e.near),!(Fa.containsPoint(xr.origin)===!1&&(xr.intersectSphere(Fa,Rm)===null||xr.origin.distanceToSquared(Rm)>(e.far-e.near)**2))&&(Am.copy(s).invert(),xr.copy(e.ray).applyMatrix4(Am),!(i.boundingBox!==null&&xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,y=d.length;x<y;x++){const g=d[x],u=o[g.materialIndex],p=Math.max(g.start,m.start),v=Math.min(a.count,Math.min(g.start+g.count,m.start+m.count));for(let S=p,b=v;S<b;S+=3){const A=a.getX(S),R=a.getX(S+1),_=a.getX(S+2);r=Ha(this,u,e,i,c,f,h,A,R,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let g=x,u=y;g<u;g+=3){const p=a.getX(g),v=a.getX(g+1),S=a.getX(g+2);r=Ha(this,o,e,i,c,f,h,p,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,y=d.length;x<y;x++){const g=d[x],u=o[g.materialIndex],p=Math.max(g.start,m.start),v=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let S=p,b=v;S<b;S+=3){const A=S,R=S+1,_=S+2;r=Ha(this,u,e,i,c,f,h,A,R,_),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const x=Math.max(0,m.start),y=Math.min(l.count,m.start+m.count);for(let g=x,u=y;g<u;g+=3){const p=g,v=g+1,S=g+2;r=Ha(this,o,e,i,c,f,h,p,v,S),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function i1(t,e,n,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===cr,a),l===null)return null;Va.copy(a),Va.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Va);return c<n.near||c>n.far?null:{distance:c,point:Va.clone(),object:t}}function Ha(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Oa),t.getVertexPosition(l,ka),t.getVertexPosition(c,za);const f=i1(t,e,n,i,Oa,ka,za,Cm);if(f){const h=new V;Wn.getBarycoord(Cm,Oa,ka,za,h),r&&(f.uv=Wn.getInterpolatedAttribute(r,a,l,c,h,new Ke)),s&&(f.uv1=Wn.getInterpolatedAttribute(s,a,l,c,h,new Ke)),o&&(f.normal=Wn.getInterpolatedAttribute(o,a,l,c,h,new V),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new V,materialIndex:0};Wn.getNormal(Oa,ka,za,d.normal),f.face=d,f.barycoord=h}return f}class r1 extends on{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Wt,f=Wt,h,d){super(null,o,a,l,c,f,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const yu=new V,s1=new V,o1=new Ve;class Er{constructor(e=new V(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=yu.subVectors(i,n).cross(s1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(yu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||o1.getNormalMatrix(e),r=this.coplanarPoint(yu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vr=new sa,a1=new Ke(.5,.5),Ga=new V;class Uh{constructor(e=new Er,n=new Er,i=new Er,r=new Er,s=new Er,o=new Er){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=si,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],h=s[5],d=s[6],m=s[7],x=s[8],y=s[9],g=s[10],u=s[11],p=s[12],v=s[13],S=s[14],b=s[15];if(r[0].setComponents(c-o,m-f,u-x,b-p).normalize(),r[1].setComponents(c+o,m+f,u+x,b+p).normalize(),r[2].setComponents(c+a,m+h,u+y,b+v).normalize(),r[3].setComponents(c-a,m-h,u-y,b-v).normalize(),i)r[4].setComponents(l,d,g,S).normalize(),r[5].setComponents(c-l,m-d,u-g,b-S).normalize();else if(r[4].setComponents(c-l,m-d,u-g,b-S).normalize(),n===si)r[5].setComponents(c+l,m+d,u+g,b+S).normalize();else if(n===Ko)r[5].setComponents(l,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vr)}intersectsSprite(e){vr.center.set(0,0,0);const n=a1.distanceTo(e.center);return vr.radius=.7071067811865476+n,vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(vr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ga.x=r.normal.x>0?e.max.x:e.min.x,Ga.y=r.normal.y>0?e.max.y:e.min.y,Ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ls extends Wr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Yl=new V,$l=new V,Pm=new vt,uo=new Nh,Wa=new sa,Su=new V,Lm=new V;class yf extends Vt{constructor(e=new St,n=new Ls){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Yl.fromBufferAttribute(n,r-1),$l.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Yl.distanceTo($l);e.setAttribute("lineDistance",new Et(i,1))}else Fe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wa.copy(i.boundingSphere),Wa.applyMatrix4(r),Wa.radius+=s,e.ray.intersectsSphere(Wa)===!1)return;Pm.copy(r).invert(),uo.copy(e.ray).applyMatrix4(Pm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),x=Math.min(f.count,o.start+o.count);for(let y=m,g=x-1;y<g;y+=c){const u=f.getX(y),p=f.getX(y+1),v=ja(this,e,uo,l,u,p,y);v&&n.push(v)}if(this.isLineLoop){const y=f.getX(x-1),g=f.getX(m),u=ja(this,e,uo,l,y,g,x-1);u&&n.push(u)}}else{const m=Math.max(0,o.start),x=Math.min(d.count,o.start+o.count);for(let y=m,g=x-1;y<g;y+=c){const u=ja(this,e,uo,l,y,y+1,y);u&&n.push(u)}if(this.isLineLoop){const y=ja(this,e,uo,l,x-1,m,x-1);y&&n.push(y)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ja(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Yl.fromBufferAttribute(a,r),$l.fromBufferAttribute(a,s),n.distanceSqToSegment(Yl,$l,Su,Lm)>i)return;Su.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Su);if(!(c<e.near||c>e.far))return{distance:c,point:Lm.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const Dm=new V,Im=new V;class Mu extends yf{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Dm.fromBufferAttribute(n,r),Im.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Dm.distanceTo(Im);e.setAttribute("lineDistance",new Et(i,1))}else Fe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ql extends Wr{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Nm=new vt,Sf=new Nh,Xa=new sa,Ya=new V;class Mf extends Vt{constructor(e=new St,n=new ql){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Xa.copy(i.boundingSphere),Xa.applyMatrix4(r),Xa.radius+=s,e.ray.intersectsSphere(Xa)===!1)return;Nm.copy(r).invert(),Sf.copy(e.ray).applyMatrix4(Nm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let x=d,y=m;x<y;x++){const g=c.getX(x);Ya.fromBufferAttribute(h,g),Um(Ya,g,l,r,e,n,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let x=d,y=m;x<y;x++)Ya.fromBufferAttribute(h,x),Um(Ya,x,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Um(t,e,n,i,r,s,o){const a=Sf.distanceSqToPoint(t);if(a<n){const l=new V;Sf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class tv extends on{constructor(e=[],n=Vr,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Zo extends on{constructor(e,n,i=ui,r,s,o,a=Wt,l=Wt,c,f=Ni,h=1){if(f!==Ni&&f!==Lr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Dh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class l1 extends Zo{constructor(e,n=ui,i=Vr,r,s,o=Wt,a=Wt,l,c=Ni){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class nv extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class gt extends St{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,m=0;x("z","y","x",-1,-1,i,n,e,o,s,0),x("z","y","x",1,-1,i,n,-e,o,s,1),x("x","z","y",1,1,e,i,n,r,o,2),x("x","z","y",1,-1,e,i,-n,r,o,3),x("x","y","z",1,-1,e,n,i,r,s,4),x("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(f,3)),this.setAttribute("uv",new Et(h,2));function x(y,g,u,p,v,S,b,A,R,_,w){const I=S/R,D=b/_,k=S/2,H=b/2,W=A/2,B=R+1,C=_+1;let U=0,L=0;const O=new V;for(let X=0;X<C;X++){const J=X*D-H;for(let ee=0;ee<B;ee++){const ve=ee*I-k;O[y]=ve*p,O[g]=J*v,O[u]=W,c.push(O.x,O.y,O.z),O[y]=0,O[g]=0,O[u]=A>0?1:-1,f.push(O.x,O.y,O.z),h.push(ee/R),h.push(1-X/_),U+=1}}for(let X=0;X<_;X++)for(let J=0;J<R;J++){const ee=d+J+B*X,ve=d+J+B*(X+1),Oe=d+(J+1)+B*(X+1),ce=d+(J+1)+B*X;l.push(ee,ve,ce),l.push(ve,Oe,ce),L+=6}a.addGroup(m,L,w),m+=L,d+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class ti extends St{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],d=[],m=[];let x=0;const y=[],g=i/2;let u=0;p(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(f),this.setAttribute("position",new Et(h,3)),this.setAttribute("normal",new Et(d,3)),this.setAttribute("uv",new Et(m,2));function p(){const S=new V,b=new V;let A=0;const R=(n-e)/i;for(let _=0;_<=s;_++){const w=[],I=_/s,D=I*(n-e)+e;for(let k=0;k<=r;k++){const H=k/r,W=H*l+a,B=Math.sin(W),C=Math.cos(W);b.x=D*B,b.y=-I*i+g,b.z=D*C,h.push(b.x,b.y,b.z),S.set(B,R,C).normalize(),d.push(S.x,S.y,S.z),m.push(H,1-I),w.push(x++)}y.push(w)}for(let _=0;_<r;_++)for(let w=0;w<s;w++){const I=y[w][_],D=y[w+1][_],k=y[w+1][_+1],H=y[w][_+1];(e>0||w!==0)&&(f.push(I,D,H),A+=3),(n>0||w!==s-1)&&(f.push(D,k,H),A+=3)}c.addGroup(u,A,0),u+=A}function v(S){const b=x,A=new Ke,R=new V;let _=0;const w=S===!0?e:n,I=S===!0?1:-1;for(let k=1;k<=r;k++)h.push(0,g*I,0),d.push(0,I,0),m.push(.5,.5),x++;const D=x;for(let k=0;k<=r;k++){const W=k/r*l+a,B=Math.cos(W),C=Math.sin(W);R.x=w*C,R.y=g*I,R.z=w*B,h.push(R.x,R.y,R.z),d.push(0,I,0),A.x=B*.5+.5,A.y=C*.5*I+.5,m.push(A.x,A.y),x++}for(let k=0;k<r;k++){const H=b+k,W=D+k;S===!0?f.push(W,W+1,H):f.push(W+1,W,H),_+=3}c.addGroup(u,_,S===!0?1:2),u+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ti(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class oa extends St{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new Et(s,3)),this.setAttribute("normal",new Et(s.slice(),3)),this.setAttribute("uv",new Et(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(p){const v=new V,S=new V,b=new V;for(let A=0;A<n.length;A+=3)m(n[A+0],v),m(n[A+1],S),m(n[A+2],b),l(v,S,b,p)}function l(p,v,S,b){const A=b+1,R=[];for(let _=0;_<=A;_++){R[_]=[];const w=p.clone().lerp(S,_/A),I=v.clone().lerp(S,_/A),D=A-_;for(let k=0;k<=D;k++)k===0&&_===A?R[_][k]=w:R[_][k]=w.clone().lerp(I,k/D)}for(let _=0;_<A;_++)for(let w=0;w<2*(A-_)-1;w++){const I=Math.floor(w/2);w%2===0?(d(R[_][I+1]),d(R[_+1][I]),d(R[_][I])):(d(R[_][I+1]),d(R[_+1][I+1]),d(R[_+1][I]))}}function c(p){const v=new V;for(let S=0;S<s.length;S+=3)v.x=s[S+0],v.y=s[S+1],v.z=s[S+2],v.normalize().multiplyScalar(p),s[S+0]=v.x,s[S+1]=v.y,s[S+2]=v.z}function f(){const p=new V;for(let v=0;v<s.length;v+=3){p.x=s[v+0],p.y=s[v+1],p.z=s[v+2];const S=g(p)/2/Math.PI+.5,b=u(p)/Math.PI+.5;o.push(S,1-b)}x(),h()}function h(){for(let p=0;p<o.length;p+=6){const v=o[p+0],S=o[p+2],b=o[p+4],A=Math.max(v,S,b),R=Math.min(v,S,b);A>.9&&R<.1&&(v<.2&&(o[p+0]+=1),S<.2&&(o[p+2]+=1),b<.2&&(o[p+4]+=1))}}function d(p){s.push(p.x,p.y,p.z)}function m(p,v){const S=p*3;v.x=e[S+0],v.y=e[S+1],v.z=e[S+2]}function x(){const p=new V,v=new V,S=new V,b=new V,A=new Ke,R=new Ke,_=new Ke;for(let w=0,I=0;w<s.length;w+=9,I+=6){p.set(s[w+0],s[w+1],s[w+2]),v.set(s[w+3],s[w+4],s[w+5]),S.set(s[w+6],s[w+7],s[w+8]),A.set(o[I+0],o[I+1]),R.set(o[I+2],o[I+3]),_.set(o[I+4],o[I+5]),b.copy(p).add(v).add(S).divideScalar(3);const D=g(b);y(A,I+0,p,D),y(R,I+2,v,D),y(_,I+4,S,D)}}function y(p,v,S,b){b<0&&p.x===1&&(o[v]=p.x-1),S.x===0&&S.z===0&&(o[v]=b/2/Math.PI+.5)}function g(p){return Math.atan2(p.z,-p.x)}function u(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.vertices,e.indices,e.radius,e.detail)}}class Tr extends oa{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Tr(e.radius,e.detail)}}class Po extends oa{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Po(e.radius,e.detail)}}class Ur extends St{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,m=[],x=[],y=[],g=[];for(let u=0;u<f;u++){const p=u*d-o;for(let v=0;v<c;v++){const S=v*h-s;x.push(S,-p,0),y.push(0,0,1),g.push(v/a),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let p=0;p<a;p++){const v=p+c*u,S=p+c*(u+1),b=p+1+c*(u+1),A=p+1+c*u;m.push(v,S,A),m.push(S,b,A)}this.setIndex(m),this.setAttribute("position",new Et(x,3)),this.setAttribute("normal",new Et(y,3)),this.setAttribute("uv",new Et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ur(e.width,e.height,e.widthSegments,e.heightSegments)}}class Dr extends St{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],h=new V,d=new V,m=[],x=[],y=[],g=[];for(let u=0;u<=i;u++){const p=[],v=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let b=0;b<=n;b++){const A=b/n;h.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),x.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),g.push(A+S,1-v),p.push(c++)}f.push(p)}for(let u=0;u<i;u++)for(let p=0;p<n;p++){const v=f[u][p+1],S=f[u][p],b=f[u+1][p],A=f[u+1][p+1];(u!==0||o>0)&&m.push(v,S,A),(u!==i-1||l<Math.PI)&&m.push(S,b,A)}this.setIndex(m),this.setAttribute("position",new Et(x,3)),this.setAttribute("normal",new Et(y,3)),this.setAttribute("uv",new Et(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Kl extends oa{constructor(e=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Kl(e.radius,e.detail)}}class Gs extends St{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],f=[],h=[],d=new V,m=new V,x=new V;for(let y=0;y<=i;y++){const g=o+y/i*a;for(let u=0;u<=r;u++){const p=u/r*s;m.x=(e+n*Math.cos(g))*Math.cos(p),m.y=(e+n*Math.cos(g))*Math.sin(p),m.z=n*Math.sin(g),c.push(m.x,m.y,m.z),d.x=e*Math.cos(p),d.y=e*Math.sin(p),x.subVectors(m,d).normalize(),f.push(x.x,x.y,x.z),h.push(u/r),h.push(y/i)}}for(let y=1;y<=i;y++)for(let g=1;g<=r;g++){const u=(r+1)*y+g-1,p=(r+1)*(y-1)+g-1,v=(r+1)*(y-1)+g,S=(r+1)*y+g;l.push(u,p,S),l.push(p,v,S)}this.setIndex(l),this.setAttribute("position",new Et(c,3)),this.setAttribute("normal",new Et(f,3)),this.setAttribute("uv",new Et(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Ws(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Fe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function tn(t){const e={};for(let n=0;n<t.length;n++){const i=Ws(t[n]);for(const r in i)e[r]=i[r]}return e}function c1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function iv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const u1={clone:Ws,merge:tn};var d1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,f1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends Wr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=d1,this.fragmentShader=f1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ws(e.uniforms),this.uniformsGroups=c1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class h1 extends fi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Gn extends Wr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$x,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class p1 extends Wr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class m1 extends Wr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Fh extends Vt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const Eu=new vt,Fm=new V,Om=new V;class rv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.mapType=Sn,this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uh,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Fm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Fm),Om.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Om),n.updateMatrixWorld(),Eu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eu,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===Ko||n.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Eu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const $a=new V,qa=new qs,Zn=new V;class sv extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose($a,qa,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,qa,Zn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose($a,qa,Zn),Zn.x===1&&Zn.y===1&&Zn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose($a,qa,Zn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new V,km=new Ke,zm=new Ke;class rn extends sv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=_f*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _f*2*Math.atan(Math.tan(Zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,n){return this.getViewBounds(e,km,zm),n.subVectors(zm,km)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Zc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class g1 extends rv{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ss extends Fh{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new g1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class Oh extends sv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class x1 extends rv{constructor(){super(new Oh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ef extends Fh{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new x1}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}}class ov extends Fh{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const ss=-90,os=1;class v1 extends Vt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new rn(ss,os,e,n);r.layers=this.layers,this.add(r);const s=new rn(ss,os,e,n);s.layers=this.layers,this.add(s);const o=new rn(ss,os,e,n);o.layers=this.layers,this.add(o);const a=new rn(ss,os,e,n);a.layers=this.layers,this.add(a);const l=new rn(ss,os,e,n);l.layers=this.layers,this.add(l);const c=new rn(ss,os,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ko)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,d,m),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class _1 extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Bm(t,e,n,i){const r=y1(i);switch(n){case jx:return t*e;case Yx:return t*e/r.components*r.byteLength;case Ah:return t*e/r.components*r.byteLength;case Vs:return t*e*2/r.components*r.byteLength;case Rh:return t*e*2/r.components*r.byteLength;case Xx:return t*e*3/r.components*r.byteLength;case jn:return t*e*4/r.components*r.byteLength;case Ch:return t*e*4/r.components*r.byteLength;case hl:case pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case ml:case gl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vd:case Gd:return Math.max(t,16)*Math.max(e,8)/4;case Bd:case Hd:return Math.max(t,8)*Math.max(e,8)/2;case Wd:case jd:case Yd:case $d:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xd:case qd:case Kd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case ef:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case tf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case nf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case rf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case sf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case of:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case af:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case lf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case cf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case uf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case df:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ff:case hf:case pf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case mf:case gf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case xf:case vf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function y1(t){switch(t){case Sn:case Vx:return{byteLength:1,components:1};case $o:case Hx:case Ii:return{byteLength:2,components:1};case Th:case bh:return{byteLength:2,components:4};case ui:case wh:case ri:return{byteLength:4,components:1};case Gx:case Wx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window<"u"&&(window.__THREE__?Fe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function av(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function S1(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,f);else{h.sort((m,x)=>m.start-x.start);let d=0;for(let m=1;m<h.length;m++){const x=h[d],y=h[m];y.start<=x.start+x.count+1?x.count=Math.max(x.count,y.start+y.count-x.start):(++d,h[d]=y)}h.length=d+1;for(let m=0,x=h.length;m<x;m++){const y=h[m];t.bufferSubData(c,y.start*f.BYTES_PER_ELEMENT,f,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var M1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,E1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,w1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,T1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,A1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,R1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,C1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,P1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,L1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,D1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,I1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,N1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,U1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,F1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,O1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,k1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,B1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,V1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,H1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,G1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,W1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,j1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,X1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Y1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,q1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,K1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Z1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,J1="gl_FragColor = linearToOutputTexel( gl_FragColor );",Q1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,tM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,nM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,iM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,aM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,uM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,dM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,pM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,mM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,gM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_M=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,SM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,MM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,EM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,TM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,AM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,CM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,PM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,LM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,NM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,UM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,FM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,OM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,kM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,BM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,VM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,HM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,XM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,YM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$M=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,KM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,ZM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,QM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,aE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,cE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,uE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const SE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ME=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,CE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,PE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,FE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,OE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,BE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,HE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,GE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$E=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ZE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ew=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ge={alphahash_fragment:M1,alphahash_pars_fragment:E1,alphamap_fragment:w1,alphamap_pars_fragment:T1,alphatest_fragment:b1,alphatest_pars_fragment:A1,aomap_fragment:R1,aomap_pars_fragment:C1,batching_pars_vertex:P1,batching_vertex:L1,begin_vertex:D1,beginnormal_vertex:I1,bsdfs:N1,iridescence_fragment:U1,bumpmap_pars_fragment:F1,clipping_planes_fragment:O1,clipping_planes_pars_fragment:k1,clipping_planes_pars_vertex:z1,clipping_planes_vertex:B1,color_fragment:V1,color_pars_fragment:H1,color_pars_vertex:G1,color_vertex:W1,common:j1,cube_uv_reflection_fragment:X1,defaultnormal_vertex:Y1,displacementmap_pars_vertex:$1,displacementmap_vertex:q1,emissivemap_fragment:K1,emissivemap_pars_fragment:Z1,colorspace_fragment:J1,colorspace_pars_fragment:Q1,envmap_fragment:eM,envmap_common_pars_fragment:tM,envmap_pars_fragment:nM,envmap_pars_vertex:iM,envmap_physical_pars_fragment:pM,envmap_vertex:rM,fog_vertex:sM,fog_pars_vertex:oM,fog_fragment:aM,fog_pars_fragment:lM,gradientmap_pars_fragment:cM,lightmap_pars_fragment:uM,lights_lambert_fragment:dM,lights_lambert_pars_fragment:fM,lights_pars_begin:hM,lights_toon_fragment:mM,lights_toon_pars_fragment:gM,lights_phong_fragment:xM,lights_phong_pars_fragment:vM,lights_physical_fragment:_M,lights_physical_pars_fragment:yM,lights_fragment_begin:SM,lights_fragment_maps:MM,lights_fragment_end:EM,logdepthbuf_fragment:wM,logdepthbuf_pars_fragment:TM,logdepthbuf_pars_vertex:bM,logdepthbuf_vertex:AM,map_fragment:RM,map_pars_fragment:CM,map_particle_fragment:PM,map_particle_pars_fragment:LM,metalnessmap_fragment:DM,metalnessmap_pars_fragment:IM,morphinstance_vertex:NM,morphcolor_vertex:UM,morphnormal_vertex:FM,morphtarget_pars_vertex:OM,morphtarget_vertex:kM,normal_fragment_begin:zM,normal_fragment_maps:BM,normal_pars_fragment:VM,normal_pars_vertex:HM,normal_vertex:GM,normalmap_pars_fragment:WM,clearcoat_normal_fragment_begin:jM,clearcoat_normal_fragment_maps:XM,clearcoat_pars_fragment:YM,iridescence_pars_fragment:$M,opaque_fragment:qM,packing:KM,premultiplied_alpha_fragment:ZM,project_vertex:JM,dithering_fragment:QM,dithering_pars_fragment:eE,roughnessmap_fragment:tE,roughnessmap_pars_fragment:nE,shadowmap_pars_fragment:iE,shadowmap_pars_vertex:rE,shadowmap_vertex:sE,shadowmask_pars_fragment:oE,skinbase_vertex:aE,skinning_pars_vertex:lE,skinning_vertex:cE,skinnormal_vertex:uE,specularmap_fragment:dE,specularmap_pars_fragment:fE,tonemapping_fragment:hE,tonemapping_pars_fragment:pE,transmission_fragment:mE,transmission_pars_fragment:gE,uv_pars_fragment:xE,uv_pars_vertex:vE,uv_vertex:_E,worldpos_vertex:yE,background_vert:SE,background_frag:ME,backgroundCube_vert:EE,backgroundCube_frag:wE,cube_vert:TE,cube_frag:bE,depth_vert:AE,depth_frag:RE,distance_vert:CE,distance_frag:PE,equirect_vert:LE,equirect_frag:DE,linedashed_vert:IE,linedashed_frag:NE,meshbasic_vert:UE,meshbasic_frag:FE,meshlambert_vert:OE,meshlambert_frag:kE,meshmatcap_vert:zE,meshmatcap_frag:BE,meshnormal_vert:VE,meshnormal_frag:HE,meshphong_vert:GE,meshphong_frag:WE,meshphysical_vert:jE,meshphysical_frag:XE,meshtoon_vert:YE,meshtoon_frag:$E,points_vert:qE,points_frag:KE,shadow_vert:ZE,shadow_frag:JE,sprite_vert:QE,sprite_frag:ew},pe={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ve}},envmap:{envMap:{value:null},envMapRotation:{value:new Ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ve},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0},uvTransform:{value:new Ve}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ve},alphaMap:{value:null},alphaMapTransform:{value:new Ve},alphaTest:{value:0}}},ni={basic:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:tn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:tn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:tn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Ze(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:tn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:tn([pe.points,pe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:tn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:tn([pe.common,pe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:tn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:tn([pe.sprite,pe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ve}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:tn([pe.common,pe.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:tn([pe.lights,pe.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};ni.physical={uniforms:tn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ve},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ve},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ve},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ve},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ve},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ve}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Ka={r:0,b:0,g:0},_r=new di,tw=new vt;function nw(t,e,n,i,r,s){const o=new Ze(0);let a=r===!0?0:1,l,c,f=null,h=0,d=null;function m(p){let v=p.isScene===!0?p.background:null;if(v&&v.isTexture){const S=p.backgroundBlurriness>0;v=e.get(v,S)}return v}function x(p){let v=!1;const S=m(p);S===null?g(o,a):S&&S.isColor&&(g(S,1),v=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?n.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function y(p,v){const S=m(v);S&&(S.isCubeTexture||S.mapping===mc)?(c===void 0&&(c=new Ue(new gt(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:Ws(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),_r.copy(v.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(tw.makeRotationFromEuler(_r)),c.material.toneMapped=et.getTransfer(S.colorSpace)!==st,(f!==S||h!==S.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=S,h=S.version,d=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ue(new Ur(2,2),new fi({name:"BackgroundMaterial",uniforms:Ws(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=et.getTransfer(S.colorSpace)!==st,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||h!==S.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=S,h=S.version,d=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,v){p.getRGB(Ka,iv(t)),n.buffers.color.setClear(Ka.r,Ka.g,Ka.b,v,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(p,v=1){o.set(p),a=v,g(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,g(o,a)},render:x,addToRenderList:y,dispose:u}}function iw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(D,k,H,W,B){let C=!1;const U=h(D,W,H,k);s!==U&&(s=U,c(s.object)),C=m(D,W,H,B),C&&x(D,W,H,B),B!==null&&e.update(B,t.ELEMENT_ARRAY_BUFFER),(C||o)&&(o=!1,S(D,k,H,W),B!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function f(D){return t.deleteVertexArray(D)}function h(D,k,H,W){const B=W.wireframe===!0;let C=i[k.id];C===void 0&&(C={},i[k.id]=C);const U=D.isInstancedMesh===!0?D.id:0;let L=C[U];L===void 0&&(L={},C[U]=L);let O=L[H.id];O===void 0&&(O={},L[H.id]=O);let X=O[B];return X===void 0&&(X=d(l()),O[B]=X),X}function d(D){const k=[],H=[],W=[];for(let B=0;B<n;B++)k[B]=0,H[B]=0,W[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:H,attributeDivisors:W,object:D,attributes:{},index:null}}function m(D,k,H,W){const B=s.attributes,C=k.attributes;let U=0;const L=H.getAttributes();for(const O in L)if(L[O].location>=0){const J=B[O];let ee=C[O];if(ee===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),J===void 0||J.attribute!==ee||ee&&J.data!==ee.data)return!0;U++}return s.attributesNum!==U||s.index!==W}function x(D,k,H,W){const B={},C=k.attributes;let U=0;const L=H.getAttributes();for(const O in L)if(L[O].location>=0){let J=C[O];J===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(J=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(J=D.instanceColor));const ee={};ee.attribute=J,J&&J.data&&(ee.data=J.data),B[O]=ee,U++}s.attributes=B,s.attributesNum=U,s.index=W}function y(){const D=s.newAttributes;for(let k=0,H=D.length;k<H;k++)D[k]=0}function g(D){u(D,0)}function u(D,k){const H=s.newAttributes,W=s.enabledAttributes,B=s.attributeDivisors;H[D]=1,W[D]===0&&(t.enableVertexAttribArray(D),W[D]=1),B[D]!==k&&(t.vertexAttribDivisor(D,k),B[D]=k)}function p(){const D=s.newAttributes,k=s.enabledAttributes;for(let H=0,W=k.length;H<W;H++)k[H]!==D[H]&&(t.disableVertexAttribArray(H),k[H]=0)}function v(D,k,H,W,B,C,U){U===!0?t.vertexAttribIPointer(D,k,H,B,C):t.vertexAttribPointer(D,k,H,W,B,C)}function S(D,k,H,W){y();const B=W.attributes,C=H.getAttributes(),U=k.defaultAttributeValues;for(const L in C){const O=C[L];if(O.location>=0){let X=B[L];if(X===void 0&&(L==="instanceMatrix"&&D.instanceMatrix&&(X=D.instanceMatrix),L==="instanceColor"&&D.instanceColor&&(X=D.instanceColor)),X!==void 0){const J=X.normalized,ee=X.itemSize,ve=e.get(X);if(ve===void 0)continue;const Oe=ve.buffer,ce=ve.type,j=ve.bytesPerElement,ie=ce===t.INT||ce===t.UNSIGNED_INT||X.gpuType===wh;if(X.isInterleavedBufferAttribute){const le=X.data,Ne=le.stride,Le=X.offset;if(le.isInstancedInterleavedBuffer){for(let De=0;De<O.locationSize;De++)u(O.location+De,le.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let De=0;De<O.locationSize;De++)g(O.location+De);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let De=0;De<O.locationSize;De++)v(O.location+De,ee/O.locationSize,ce,J,Ne*j,(Le+ee/O.locationSize*De)*j,ie)}else{if(X.isInstancedBufferAttribute){for(let le=0;le<O.locationSize;le++)u(O.location+le,X.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let le=0;le<O.locationSize;le++)g(O.location+le);t.bindBuffer(t.ARRAY_BUFFER,Oe);for(let le=0;le<O.locationSize;le++)v(O.location+le,ee/O.locationSize,ce,J,ee*j,ee/O.locationSize*le*j,ie)}}else if(U!==void 0){const J=U[L];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(O.location,J);break;case 3:t.vertexAttrib3fv(O.location,J);break;case 4:t.vertexAttrib4fv(O.location,J);break;default:t.vertexAttrib1fv(O.location,J)}}}}p()}function b(){w();for(const D in i){const k=i[D];for(const H in k){const W=k[H];for(const B in W){const C=W[B];for(const U in C)f(C[U].object),delete C[U];delete W[B]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;const k=i[D.id];for(const H in k){const W=k[H];for(const B in W){const C=W[B];for(const U in C)f(C[U].object),delete C[U];delete W[B]}}delete i[D.id]}function R(D){for(const k in i){const H=i[k];for(const W in H){const B=H[W];if(B[D.id]===void 0)continue;const C=B[D.id];for(const U in C)f(C[U].object),delete C[U];delete B[D.id]}}}function _(D){for(const k in i){const H=i[k],W=D.isInstancedMesh===!0?D.id:0,B=H[W];if(B!==void 0){for(const C in B){const U=B[C];for(const L in U)f(U[L].object),delete U[L];delete B[C]}delete H[W],Object.keys(H).length===0&&delete i[k]}}}function w(){I(),o=!0,s!==r&&(s=r,c(s.object))}function I(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfObject:_,releaseStatesOfProgram:R,initAttributes:y,enableAttribute:g,disableUnusedAttributes:p}}function rw(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function a(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let m=0;for(let x=0;x<h;x++)m+=f[x];n.update(m,i,1)}function l(c,f,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<c.length;x++)o(c[x],f[x],d[x]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let x=0;for(let y=0;y<h;y++)x+=f[y]*d[y];n.update(x,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==jn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const _=R===Ii&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Sn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ri&&!_)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Fe("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:x,maxTextureSize:y,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:S,maxSamples:b,samples:A}}function ow(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Er,a=new Ve,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const x=h.clippingPlanes,y=h.clipIntersection,g=h.clipShadows,u=t.get(h);if(!r||x===null||x.length===0||s&&!g)s?f(null):c();else{const p=s?0:i,v=p*4;let S=u.clippingState||null;l.value=S,S=f(x,d,v,m);for(let b=0;b!==v;++b)S[b]=n[b];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,x){const y=h!==null?h.length:0;let g=null;if(y!==0){if(g=l.value,x!==!0||g===null){const u=m+y*4,p=d.matrixWorldInverse;a.getNormalMatrix(p),(g===null||g.length<u)&&(g=new Float32Array(u));for(let v=0,S=m;v!==y;++v,S+=4)o.copy(h[v]).applyMatrix4(p,a),o.normal.toArray(g,S),g[S+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}const Ji=4,Vm=[.125,.215,.35,.446,.526,.582],br=20,aw=256,fo=new Oh,Hm=new Ze;let wu=null,Tu=0,bu=0,Au=!1;const lw=new V;class Gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=lw}=s;wu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wu,Tu,bu),this._renderer.xr.enabled=Au,e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Vr||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wu=this._renderer.getRenderTarget(),Tu=this._renderer.getActiveCubeFace(),bu=this._renderer.getActiveMipmapLevel(),Au=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Ii,format:jn,colorSpace:Hs,depthBuffer:!1},r=Wm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cw(s)),this._blurMaterial=dw(s,e,n),this._ggxMaterial=uw(s,e,n)}return r}_compileMaterial(e){const n=new Ue(new St,e);this._renderer.compile(n,fo)}_sceneToCubeUV(e,n,i,r,s){const l=new rn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(Hm),h.toneMapping=li,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ue(new gt,new Ps({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1})));const y=this._backgroundBox,g=y.material;let u=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,u=!0):(g.color.copy(Hm),u=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[v],s.y,s.z)):S===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[v]));const b=this._cubeSize;as(r,S*b,v>2?b:0,b,b),h.setRenderTarget(r),u&&h.render(y,l),h.render(e,l)}h.toneMapping=m,h.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Vr||e.mapping===Bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;as(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,fo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),d=0+c*1.25,m=h*d,{_lodMax:x}=this,y=this._sizeLods[i],g=3*y*(i>x-Ji?i-x+Ji:0),u=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=x-n,as(s,g,u,3*y,2*y),r.setRenderTarget(s),r.render(a,fo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=x-i,as(e,g,u,3*y,2*y),r.setRenderTarget(e),r.render(a,fo)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=c;const d=c.uniforms,m=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*br-1),y=s/x,g=isFinite(s)?1+Math.floor(f*y):br;g>br&&Fe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${br}`);const u=[];let p=0;for(let R=0;R<br;++R){const _=R/y,w=Math.exp(-_*_/2);u.push(w),R===0?p+=w:R<g&&(p+=2*w)}for(let R=0;R<u.length;R++)u[R]=u[R]/p;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=x,d.mipInt.value=v-i;const S=this._sizeLods[r],b=3*S*(r>v-Ji?r-v+Ji:0),A=4*(this._cubeSize-S);as(n,b,A,3*S,2*S),l.setRenderTarget(n),l.render(h,fo)}}function cw(t){const e=[],n=[],i=[];let r=t;const s=t-Ji+1+Vm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Ji?l=Vm[o-t+Ji-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,x=6,y=3,g=2,u=1,p=new Float32Array(y*x*m),v=new Float32Array(g*x*m),S=new Float32Array(u*x*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,_=A>2?0:-1,w=[R,_,0,R+2/3,_,0,R+2/3,_+1,0,R,_,0,R+2/3,_+1,0,R,_+1,0];p.set(w,y*x*A),v.set(d,g*x*A);const I=[A,A,A,A,A,A];S.set(I,u*x*A)}const b=new St;b.setAttribute("position",new gn(p,y)),b.setAttribute("uv",new gn(v,g)),b.setAttribute("faceIndex",new gn(S,u)),i.push(new Ue(b,null)),r>Ji&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Wm(t,e,n){const i=new ci(t,e,n);return i.texture.mapping=mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function as(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function uw(t,e,n){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:xc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function dw(t,e,n){const i=new Float32Array(br),r=new V(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function jm(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function Xm(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ai,depthTest:!1,depthWrite:!1})}function xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class lv extends ci{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new tv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new gt(5,5,5),s=new fi({name:"CubemapFromEquirect",uniforms:Ws(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Ai});s.uniforms.tEquirect.value=n;const o=new Ue(r,s),a=n.minFilter;return n.minFilter===Pr&&(n.minFilter=Qt),new v1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function fw(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?o(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===$c||m===qc)if(e.has(d)){const x=e.get(d).texture;return a(x,d.mapping)}else{const x=d.image;if(x&&x.height>0){const y=new lv(x.height);return y.fromEquirectangularTexture(t,d),e.set(d,y),d.addEventListener("dispose",c),a(y.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const m=d.mapping,x=m===$c||m===qc,y=m===Vr||m===Bs;if(x||y){let g=n.get(d);const u=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new Gm(t)),g=x?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{const p=d.image;return x&&p&&p.height>0||y&&p&&l(p)?(i===null&&(i=new Gm(t)),g=x?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",f),g.texture):null}}}return d}function a(d,m){return m===$c?d.mapping=Vr:m===qc&&(d.mapping=Bs),d}function l(d){let m=0;const x=6;for(let y=0;y<x;y++)d[y]!==void 0&&m++;return m===x}function c(d){const m=d.target;m.removeEventListener("dispose",c);const x=e.get(m);x!==void 0&&(e.delete(m),x.dispose())}function f(d){const m=d.target;m.removeEventListener("dispose",f);const x=n.get(m);x!==void 0&&(n.delete(m),x.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function hw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Xl("WebGLRenderer: "+i+" extension not supported."),r}}}function pw(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const x in d.attributes)e.remove(d.attributes[x]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function c(h){const d=[],m=h.index,x=h.attributes.position;let y=0;if(x===void 0)return;if(m!==null){const p=m.array;y=m.version;for(let v=0,S=p.length;v<S;v+=3){const b=p[v+0],A=p[v+1],R=p[v+2];d.push(b,A,A,R,R,b)}}else{const p=x.array;y=x.version;for(let v=0,S=p.length/3-1;v<S;v+=3){const b=v+0,A=v+1,R=v+2;d.push(b,A,A,R,R,b)}}const g=new(x.count>=65535?ev:Qx)(d,1);g.version=y;const u=s.get(h);u&&e.remove(u),s.set(h,g)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function mw(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){t.drawElements(i,m,s,d*o),n.update(m,i,1)}function c(d,m,x){x!==0&&(t.drawElementsInstanced(i,m,s,d*o,x),n.update(m,i,x))}function f(d,m,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,x);let g=0;for(let u=0;u<x;u++)g+=m[u];n.update(g,i,1)}function h(d,m,x,y){if(x===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let u=0;u<d.length;u++)c(d[u]/o,m[u],y[u]);else{g.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,y,0,x);let u=0;for(let p=0;p<x;p++)u+=m[p]*y[p];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function gw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:it("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function xw(t,e,n){const i=new WeakMap,r=new Rt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let w=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],p=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),x===!0&&(v=2),y===!0&&(v=3);let S=a.attributes.position.count*v,b=1;S>e.maxTextureSize&&(b=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*b*4*h),R=new Kx(A,S,b,h);R.type=ri,R.needsUpdate=!0;const _=v*4;for(let I=0;I<h;I++){const D=g[I],k=u[I],H=p[I],W=S*b*4*I;for(let B=0;B<D.count;B++){const C=B*_;m===!0&&(r.fromBufferAttribute(D,B),A[W+C+0]=r.x,A[W+C+1]=r.y,A[W+C+2]=r.z,A[W+C+3]=0),x===!0&&(r.fromBufferAttribute(k,B),A[W+C+4]=r.x,A[W+C+5]=r.y,A[W+C+6]=r.z,A[W+C+7]=0),y===!0&&(r.fromBufferAttribute(H,B),A[W+C+8]=r.x,A[W+C+9]=r.y,A[W+C+10]=r.z,A[W+C+11]=H.itemSize===4?r.w:1)}}d={count:h,texture:R,size:new Ke(S,b)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let y=0;y<c.length;y++)m+=c[y];const x=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",x),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function vw(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return d}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const _w={[Ix]:"LINEAR_TONE_MAPPING",[Nx]:"REINHARD_TONE_MAPPING",[Ux]:"CINEON_TONE_MAPPING",[Fx]:"ACES_FILMIC_TONE_MAPPING",[kx]:"AGX_TONE_MAPPING",[zx]:"NEUTRAL_TONE_MAPPING",[Ox]:"CUSTOM_TONE_MAPPING"};function yw(t,e,n,i,r){const s=new ci(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),o=new ci(e,n,{type:Ii,depthBuffer:!1,stencilBuffer:!1}),a=new St;a.setAttribute("position",new Et([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Et([0,2,0,0,2,0],2));const l=new h1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ue(a,l),f=new Oh(-1,1,1,-1,0,1);let h=null,d=null,m=!1,x,y=null,g=[],u=!1;this.setSize=function(p,v){s.setSize(p,v),o.setSize(p,v);for(let S=0;S<g.length;S++){const b=g[S];b.setSize&&b.setSize(p,v)}},this.setEffects=function(p){g=p,u=g.length>0&&g[0].isRenderPass===!0;const v=s.width,S=s.height;for(let b=0;b<g.length;b++){const A=g[b];A.setSize&&A.setSize(v,S)}},this.begin=function(p,v){if(m||p.toneMapping===li&&g.length===0)return!1;if(y=v,v!==null){const S=v.width,b=v.height;(s.width!==S||s.height!==b)&&this.setSize(S,b)}return u===!1&&p.setRenderTarget(s),x=p.toneMapping,p.toneMapping=li,!0},this.hasRenderPass=function(){return u},this.end=function(p,v){p.toneMapping=x,m=!0;let S=s,b=o;for(let A=0;A<g.length;A++){const R=g[A];if(R.enabled!==!1&&(R.render(p,b,S,v),R.needsSwap!==!1)){const _=S;S=b,b=_}}if(h!==p.outputColorSpace||d!==p.toneMapping){h=p.outputColorSpace,d=p.toneMapping,l.defines={},et.getTransfer(h)===st&&(l.defines.SRGB_TRANSFER="");const A=_w[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,p.setRenderTarget(y),p.render(c,f),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const cv=new on,wf=new Zo(1,1),uv=new Kx,dv=new jS,fv=new tv,Ym=[],$m=[],qm=new Float32Array(16),Km=new Float32Array(9),Zm=new Float32Array(4);function Ks(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ym[r];if(s===void 0&&(s=new Float32Array(r),Ym[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ut(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ft(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function vc(t,e){let n=$m[e];n===void 0&&(n=new Int32Array(e),$m[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Sw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Mw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2fv(this.addr,e),Ft(n,e)}}function Ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ut(n,e))return;t.uniform3fv(this.addr,e),Ft(n,e)}}function ww(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4fv(this.addr,e),Ft(n,e)}}function Tw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Zm.set(i),t.uniformMatrix2fv(this.addr,!1,Zm),Ft(n,i)}}function bw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;Km.set(i),t.uniformMatrix3fv(this.addr,!1,Km),Ft(n,i)}}function Aw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ut(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ft(n,e)}else{if(Ut(n,i))return;qm.set(i),t.uniformMatrix4fv(this.addr,!1,qm),Ft(n,i)}}function Rw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Cw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2iv(this.addr,e),Ft(n,e)}}function Pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3iv(this.addr,e),Ft(n,e)}}function Lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4iv(this.addr,e),Ft(n,e)}}function Dw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Iw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ut(n,e))return;t.uniform2uiv(this.addr,e),Ft(n,e)}}function Nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ut(n,e))return;t.uniform3uiv(this.addr,e),Ft(n,e)}}function Uw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ut(n,e))return;t.uniform4uiv(this.addr,e),Ft(n,e)}}function Fw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(wf.compareFunction=n.isReversedDepthBuffer()?Lh:Ph,s=wf):s=cv,n.setTexture2D(e||s,r)}function Ow(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||dv,r)}function kw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||fv,r)}function zw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||uv,r)}function Bw(t){switch(t){case 5126:return Sw;case 35664:return Mw;case 35665:return Ew;case 35666:return ww;case 35674:return Tw;case 35675:return bw;case 35676:return Aw;case 5124:case 35670:return Rw;case 35667:case 35671:return Cw;case 35668:case 35672:return Pw;case 35669:case 35673:return Lw;case 5125:return Dw;case 36294:return Iw;case 36295:return Nw;case 36296:return Uw;case 35678:case 36198:case 36298:case 36306:case 35682:return Fw;case 35679:case 36299:case 36307:return Ow;case 35680:case 36300:case 36308:case 36293:return kw;case 36289:case 36303:case 36311:case 36292:return zw}}function Vw(t,e){t.uniform1fv(this.addr,e)}function Hw(t,e){const n=Ks(e,this.size,2);t.uniform2fv(this.addr,n)}function Gw(t,e){const n=Ks(e,this.size,3);t.uniform3fv(this.addr,n)}function Ww(t,e){const n=Ks(e,this.size,4);t.uniform4fv(this.addr,n)}function jw(t,e){const n=Ks(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Xw(t,e){const n=Ks(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Yw(t,e){const n=Ks(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function $w(t,e){t.uniform1iv(this.addr,e)}function qw(t,e){t.uniform2iv(this.addr,e)}function Kw(t,e){t.uniform3iv(this.addr,e)}function Zw(t,e){t.uniform4iv(this.addr,e)}function Jw(t,e){t.uniform1uiv(this.addr,e)}function Qw(t,e){t.uniform2uiv(this.addr,e)}function e2(t,e){t.uniform3uiv(this.addr,e)}function t2(t,e){t.uniform4uiv(this.addr,e)}function n2(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=wf:o=cv;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function i2(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||dv,s[o])}function r2(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||fv,s[o])}function s2(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);Ut(i,s)||(t.uniform1iv(this.addr,s),Ft(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||uv,s[o])}function o2(t){switch(t){case 5126:return Vw;case 35664:return Hw;case 35665:return Gw;case 35666:return Ww;case 35674:return jw;case 35675:return Xw;case 35676:return Yw;case 5124:case 35670:return $w;case 35667:case 35671:return qw;case 35668:case 35672:return Kw;case 35669:case 35673:return Zw;case 5125:return Jw;case 36294:return Qw;case 36295:return e2;case 36296:return t2;case 35678:case 36198:case 36298:case 36306:case 35682:return n2;case 35679:case 36299:case 36307:return i2;case 35680:case 36300:case 36308:case 36293:return r2;case 36289:case 36303:case 36311:case 36292:return s2}}class a2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Bw(n.type)}}class l2{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=o2(n.type)}}class c2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Ru=/(\w+)(\])?(\[|\.)?/g;function Jm(t,e){t.seq.push(e),t.map[e.id]=e}function u2(t,e,n){const i=t.name,r=i.length;for(Ru.lastIndex=0;;){const s=Ru.exec(i),o=Ru.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Jm(n,c===void 0?new a2(a,t,e):new l2(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new c2(a),Jm(n,h)),n=h}}}class xl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);u2(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Qm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const d2=37297;let f2=0;function h2(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const e0=new Ve;function p2(t){et._getMatrix(e0,et.workingColorSpace,t);const e=`mat3( ${e0.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case Wl:return[e,"LinearTransferOETF"];case st:return[e,"sRGBTransferOETF"];default:return Fe("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function t0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+h2(t.getShaderSource(e),a)}else return s}function m2(t,e){const n=p2(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const g2={[Ix]:"Linear",[Nx]:"Reinhard",[Ux]:"Cineon",[Fx]:"ACESFilmic",[kx]:"AgX",[zx]:"Neutral",[Ox]:"Custom"};function x2(t,e){const n=g2[e];return n===void 0?(Fe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Za=new V;function v2(){et.getLuminanceCoefficients(Za);const t=Za.x.toFixed(4),e=Za.y.toFixed(4),n=Za.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _2(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(yo).join(`
`)}function y2(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function S2(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function yo(t){return t!==""}function n0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function i0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const M2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tf(t){return t.replace(M2,w2)}const E2=new Map;function w2(t,e){let n=Ge[e];if(n===void 0){const i=E2.get(e);if(i!==void 0)n=Ge[i],Fe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Tf(n)}const T2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function r0(t){return t.replace(T2,b2)}function b2(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function s0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const A2={[fl]:"SHADOWMAP_TYPE_PCF",[_o]:"SHADOWMAP_TYPE_VSM"};function R2(t){return A2[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const C2={[Vr]:"ENVMAP_TYPE_CUBE",[Bs]:"ENVMAP_TYPE_CUBE",[mc]:"ENVMAP_TYPE_CUBE_UV"};function P2(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":C2[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const L2={[Bs]:"ENVMAP_MODE_REFRACTION"};function D2(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":L2[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const I2={[Dx]:"ENVMAP_BLENDING_MULTIPLY",[wS]:"ENVMAP_BLENDING_MIX",[TS]:"ENVMAP_BLENDING_ADD"};function N2(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":I2[t.combine]||"ENVMAP_BLENDING_NONE"}function U2(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function F2(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=R2(n),c=P2(n),f=D2(n),h=N2(n),d=U2(n),m=_2(n),x=y2(s),y=r.createProgram();let g,u,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(yo).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x].filter(yo).join(`
`),u.length>0&&(u+=`
`)):(g=[s0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(yo).join(`
`),u=[s0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,x,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==li?"#define TONE_MAPPING":"",n.toneMapping!==li?Ge.tonemapping_pars_fragment:"",n.toneMapping!==li?x2("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,m2("linearToOutputTexel",n.outputColorSpace),v2(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(yo).join(`
`)),o=Tf(o),o=n0(o,n),o=i0(o,n),a=Tf(a),a=n0(a,n),a=i0(a,n),o=r0(o),a=r0(a),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=p+g+o,S=p+u+a,b=Qm(r,r.VERTEX_SHADER,v),A=Qm(r,r.FRAGMENT_SHADER,S);r.attachShader(y,b),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function R(D){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(y)||"",H=r.getShaderInfoLog(b)||"",W=r.getShaderInfoLog(A)||"",B=k.trim(),C=H.trim(),U=W.trim();let L=!0,O=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(L=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,A);else{const X=t0(r,b,"vertex"),J=t0(r,A,"fragment");it("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+B+`
`+X+`
`+J)}else B!==""?Fe("WebGLProgram: Program Info Log:",B):(C===""||U==="")&&(O=!1);O&&(D.diagnostics={runnable:L,programLog:B,vertexShader:{log:C,prefix:g},fragmentShader:{log:U,prefix:u}})}r.deleteShader(b),r.deleteShader(A),_=new xl(r,y),w=S2(r,y)}let _;this.getUniforms=function(){return _===void 0&&R(this),_};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let I=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=r.getProgramParameter(y,d2)),I},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=f2++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=A,this}let O2=0;class k2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new z2(e),n.set(e,i)),i}}class z2{constructor(e){this.id=O2++,this.code=e,this.usedTimes=0}}function B2(t,e,n,i,r,s){const o=new Zx,a=new k2,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(_){return l.add(_),_===0?"uv":`uv${_}`}function y(_,w,I,D,k){const H=D.fog,W=k.geometry,B=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?D.environment:null,C=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,U=e.get(_.envMap||B,C),L=U&&U.mapping===mc?U.image.height:null,O=m[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Fe("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const X=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,J=X!==void 0?X.length:0;let ee=0;W.morphAttributes.position!==void 0&&(ee=1),W.morphAttributes.normal!==void 0&&(ee=2),W.morphAttributes.color!==void 0&&(ee=3);let ve,Oe,ce,j;if(O){const rt=ni[O];ve=rt.vertexShader,Oe=rt.fragmentShader}else ve=_.vertexShader,Oe=_.fragmentShader,a.update(_),ce=a.getVertexShaderID(_),j=a.getFragmentShaderID(_);const ie=t.getRenderTarget(),le=t.state.buffers.depth.getReversed(),Ne=k.isInstancedMesh===!0,Le=k.isBatchedMesh===!0,De=!!_.map,ut=!!_.matcap,We=!!U,$e=!!_.aoMap,Je=!!_.lightMap,Be=!!_.bumpMap,dt=!!_.normalMap,F=!!_.displacementMap,_t=!!_.emissiveMap,Qe=!!_.metalnessMap,He=!!_.roughnessMap,Me=_.anisotropy>0,P=_.clearcoat>0,M=_.dispersion>0,N=_.iridescence>0,q=_.sheen>0,te=_.transmission>0,Z=Me&&!!_.anisotropyMap,he=P&&!!_.clearcoatMap,ne=P&&!!_.clearcoatNormalMap,Re=P&&!!_.clearcoatRoughnessMap,Ie=N&&!!_.iridescenceMap,se=N&&!!_.iridescenceThicknessMap,ue=q&&!!_.sheenColorMap,Ee=q&&!!_.sheenRoughnessMap,Te=!!_.specularMap,xe=!!_.specularColorMap,je=!!_.specularIntensityMap,z=te&&!!_.transmissionMap,fe=te&&!!_.thicknessMap,de=!!_.gradientMap,Se=!!_.alphaMap,ae=_.alphaTest>0,Q=!!_.alphaHash,we=!!_.extensions;let ke=li;_.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(ke=t.toneMapping);const ft={shaderID:O,shaderType:_.type,shaderName:_.name,vertexShader:ve,fragmentShader:Oe,defines:_.defines,customVertexShaderID:ce,customFragmentShaderID:j,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Le,batchingColor:Le&&k._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&k.instanceColor!==null,instancingMorph:Ne&&k.morphTexture!==null,outputColorSpace:ie===null?t.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Hs,alphaToCoverage:!!_.alphaToCoverage,map:De,matcap:ut,envMap:We,envMapMode:We&&U.mapping,envMapCubeUVHeight:L,aoMap:$e,lightMap:Je,bumpMap:Be,normalMap:dt,displacementMap:F,emissiveMap:_t,normalMapObjectSpace:dt&&_.normalMapType===RS,normalMapTangentSpace:dt&&_.normalMapType===$x,metalnessMap:Qe,roughnessMap:He,anisotropy:Me,anisotropyMap:Z,clearcoat:P,clearcoatMap:he,clearcoatNormalMap:ne,clearcoatRoughnessMap:Re,dispersion:M,iridescence:N,iridescenceMap:Ie,iridescenceThicknessMap:se,sheen:q,sheenColorMap:ue,sheenRoughnessMap:Ee,specularMap:Te,specularColorMap:xe,specularIntensityMap:je,transmission:te,transmissionMap:z,thicknessMap:fe,gradientMap:de,opaque:_.transparent===!1&&_.blending===Rs&&_.alphaToCoverage===!1,alphaMap:Se,alphaTest:ae,alphaHash:Q,combine:_.combine,mapUv:De&&x(_.map.channel),aoMapUv:$e&&x(_.aoMap.channel),lightMapUv:Je&&x(_.lightMap.channel),bumpMapUv:Be&&x(_.bumpMap.channel),normalMapUv:dt&&x(_.normalMap.channel),displacementMapUv:F&&x(_.displacementMap.channel),emissiveMapUv:_t&&x(_.emissiveMap.channel),metalnessMapUv:Qe&&x(_.metalnessMap.channel),roughnessMapUv:He&&x(_.roughnessMap.channel),anisotropyMapUv:Z&&x(_.anisotropyMap.channel),clearcoatMapUv:he&&x(_.clearcoatMap.channel),clearcoatNormalMapUv:ne&&x(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Re&&x(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&x(_.iridescenceMap.channel),iridescenceThicknessMapUv:se&&x(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&x(_.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&x(_.sheenRoughnessMap.channel),specularMapUv:Te&&x(_.specularMap.channel),specularColorMapUv:xe&&x(_.specularColorMap.channel),specularIntensityMapUv:je&&x(_.specularIntensityMap.channel),transmissionMapUv:z&&x(_.transmissionMap.channel),thicknessMapUv:fe&&x(_.thicknessMap.channel),alphaMapUv:Se&&x(_.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(dt||Me),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!W.attributes.uv&&(De||Se),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||W.attributes.normal===void 0&&dt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:le,skinning:k.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&I.length>0,shadowMapType:t.shadowMap.type,toneMapping:ke,decodeVideoTexture:De&&_.map.isVideoTexture===!0&&et.getTransfer(_.map.colorSpace)===st,decodeVideoTextureEmissive:_t&&_.emissiveMap.isVideoTexture===!0&&et.getTransfer(_.emissiveMap.colorSpace)===st,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Mi,flipSided:_.side===mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:we&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&_.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function g(_){const w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(const I in _.defines)w.push(I),w.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(u(w,_),p(w,_),w.push(t.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function u(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function p(_,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),_.push(o.mask)}function v(_){const w=m[_.type];let I;if(w){const D=ni[w];I=u1.clone(D.uniforms)}else I=_.uniforms;return I}function S(_,w){let I=f.get(w);return I!==void 0?++I.usedTimes:(I=new F2(t,w,_,r),c.push(I),f.set(w,I)),I}function b(_){if(--_.usedTimes===0){const w=c.indexOf(_);c[w]=c[c.length-1],c.pop(),f.delete(_.cacheKey),_.destroy()}}function A(_){a.remove(_)}function R(){a.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:v,acquireProgram:S,releaseProgram:b,releaseShaderCache:A,programs:c,dispose:R}}function V2(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function H2(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function o0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function a0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function a(d,m,x,y,g,u){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:m,material:x,materialVariant:o(d),groupOrder:y,renderOrder:d.renderOrder,z:g,group:u},t[e]=p):(p.id=d.id,p.object=d,p.geometry=m,p.material=x,p.materialVariant=o(d),p.groupOrder=y,p.renderOrder=d.renderOrder,p.z=g,p.group=u),e++,p}function l(d,m,x,y,g,u){const p=a(d,m,x,y,g,u);x.transmission>0?i.push(p):x.transparent===!0?r.push(p):n.push(p)}function c(d,m,x,y,g,u){const p=a(d,m,x,y,g,u);x.transmission>0?i.unshift(p):x.transparent===!0?r.unshift(p):n.unshift(p)}function f(d,m){n.length>1&&n.sort(d||H2),i.length>1&&i.sort(m||o0),r.length>1&&r.sort(m||o0)}function h(){for(let d=e,m=t.length;d<m;d++){const x=t[d];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function G2(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new a0,t.set(i,[o])):r>=s.length?(o=new a0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function W2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new V,color:new Ze};break;case"SpotLight":n={position:new V,direction:new V,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new V,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new V,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":n={color:new Ze,position:new V,halfWidth:new V,halfHeight:new V};break}return t[e.id]=n,n}}}function j2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let X2=0;function Y2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function $2(t){const e=new W2,n=j2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new V);const r=new V,s=new vt,o=new vt;function a(c){let f=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,x=0,y=0,g=0,u=0,p=0,v=0,S=0,b=0,A=0,R=0;c.sort(Y2);for(let w=0,I=c.length;w<I;w++){const D=c[w],k=D.color,H=D.intensity,W=D.distance;let B=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Vs?B=D.shadow.map.texture:B=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=k.r*H,h+=k.g*H,d+=k.b*H;else if(D.isLightProbe){for(let C=0;C<9;C++)i.probe[C].addScaledVector(D.sh.coefficients[C],H);R++}else if(D.isDirectionalLight){const C=e.get(D);if(C.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const U=D.shadow,L=n.get(D);L.shadowIntensity=U.intensity,L.shadowBias=U.bias,L.shadowNormalBias=U.normalBias,L.shadowRadius=U.radius,L.shadowMapSize=U.mapSize,i.directionalShadow[m]=L,i.directionalShadowMap[m]=B,i.directionalShadowMatrix[m]=D.shadow.matrix,p++}i.directional[m]=C,m++}else if(D.isSpotLight){const C=e.get(D);C.position.setFromMatrixPosition(D.matrixWorld),C.color.copy(k).multiplyScalar(H),C.distance=W,C.coneCos=Math.cos(D.angle),C.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),C.decay=D.decay,i.spot[y]=C;const U=D.shadow;if(D.map&&(i.spotLightMap[b]=D.map,b++,U.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[y]=U.matrix,D.castShadow){const L=n.get(D);L.shadowIntensity=U.intensity,L.shadowBias=U.bias,L.shadowNormalBias=U.normalBias,L.shadowRadius=U.radius,L.shadowMapSize=U.mapSize,i.spotShadow[y]=L,i.spotShadowMap[y]=B,S++}y++}else if(D.isRectAreaLight){const C=e.get(D);C.color.copy(k).multiplyScalar(H),C.halfWidth.set(D.width*.5,0,0),C.halfHeight.set(0,D.height*.5,0),i.rectArea[g]=C,g++}else if(D.isPointLight){const C=e.get(D);if(C.color.copy(D.color).multiplyScalar(D.intensity),C.distance=D.distance,C.decay=D.decay,D.castShadow){const U=D.shadow,L=n.get(D);L.shadowIntensity=U.intensity,L.shadowBias=U.bias,L.shadowNormalBias=U.normalBias,L.shadowRadius=U.radius,L.shadowMapSize=U.mapSize,L.shadowCameraNear=U.camera.near,L.shadowCameraFar=U.camera.far,i.pointShadow[x]=L,i.pointShadowMap[x]=B,i.pointShadowMatrix[x]=D.shadow.matrix,v++}i.point[x]=C,x++}else if(D.isHemisphereLight){const C=e.get(D);C.skyColor.copy(D.color).multiplyScalar(H),C.groundColor.copy(D.groundColor).multiplyScalar(H),i.hemi[u]=C,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const _=i.hash;(_.directionalLength!==m||_.pointLength!==x||_.spotLength!==y||_.rectAreaLength!==g||_.hemiLength!==u||_.numDirectionalShadows!==p||_.numPointShadows!==v||_.numSpotShadows!==S||_.numSpotMaps!==b||_.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=y,i.rectArea.length=g,i.point.length=x,i.hemi.length=u,i.directionalShadow.length=p,i.directionalShadowMap.length=p,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=p,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=S+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,_.directionalLength=m,_.pointLength=x,_.spotLength=y,_.rectAreaLength=g,_.hemiLength=u,_.numDirectionalShadows=p,_.numPointShadows=v,_.numSpotShadows=S,_.numSpotMaps=b,_.numLightProbes=R,i.version=X2++)}function l(c,f){let h=0,d=0,m=0,x=0,y=0;const g=f.matrixWorldInverse;for(let u=0,p=c.length;u<p;u++){const v=c[u];if(v.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),h++}else if(v.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),S.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(g),m++}else if(v.isRectAreaLight){const S=i.rectArea[x];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),o.identity(),s.copy(v.matrixWorld),s.premultiply(g),o.extractRotation(s),S.halfWidth.set(v.width*.5,0,0),S.halfHeight.set(0,v.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(v.matrixWorld),S.position.applyMatrix4(g),d++}else if(v.isHemisphereLight){const S=i.hemi[y];S.direction.setFromMatrixPosition(v.matrixWorld),S.direction.transformDirection(g),y++}}}return{setup:a,setupView:l,state:i}}function l0(t){const e=new $2(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function q2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new l0(t),e.set(r,[a])):s>=o.length?(a=new l0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const K2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,J2=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)],Q2=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)],c0=new vt,ho=new V,Cu=new V;function eT(t,e,n){let i=new Uh;const r=new Ke,s=new Ke,o=new Rt,a=new p1,l=new m1,c={},f=n.maxTextureSize,h={[cr]:mn,[mn]:cr,[Mi]:Mi},d=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:K2,fragmentShader:Z2}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const x=new St;x.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Ue(x,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fl;let u=this.type;this.render=function(A,R,_){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;this.type===sS&&(Fe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=fl);const w=t.getRenderTarget(),I=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Ai),k.buffers.depth.getReversed()===!0?k.buffers.color.setClear(0,0,0,0):k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const H=u!==this.type;H&&R.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(B=>B.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,B=A.length;W<B;W++){const C=A[W],U=C.shadow;if(U===void 0){Fe("WebGLShadowMap:",C,"has no shadow.");continue}if(U.autoUpdate===!1&&U.needsUpdate===!1)continue;r.copy(U.mapSize);const L=U.getFrameExtents();r.multiply(L),s.copy(U.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/L.x),r.x=s.x*L.x,U.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/L.y),r.y=s.y*L.y,U.mapSize.y=s.y));const O=t.state.buffers.depth.getReversed();if(U.camera._reversedDepth=O,U.map===null||H===!0){if(U.map!==null&&(U.map.depthTexture!==null&&(U.map.depthTexture.dispose(),U.map.depthTexture=null),U.map.dispose()),this.type===_o){if(C.isPointLight){Fe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}U.map=new ci(r.x,r.y,{format:Vs,type:Ii,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),U.map.texture.name=C.name+".shadowMap",U.map.depthTexture=new Zo(r.x,r.y,ri),U.map.depthTexture.name=C.name+".shadowMapDepth",U.map.depthTexture.format=Ni,U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Wt,U.map.depthTexture.magFilter=Wt}else C.isPointLight?(U.map=new lv(r.x),U.map.depthTexture=new l1(r.x,ui)):(U.map=new ci(r.x,r.y),U.map.depthTexture=new Zo(r.x,r.y,ui)),U.map.depthTexture.name=C.name+".shadowMap",U.map.depthTexture.format=Ni,this.type===fl?(U.map.depthTexture.compareFunction=O?Lh:Ph,U.map.depthTexture.minFilter=Qt,U.map.depthTexture.magFilter=Qt):(U.map.depthTexture.compareFunction=null,U.map.depthTexture.minFilter=Wt,U.map.depthTexture.magFilter=Wt);U.camera.updateProjectionMatrix()}const X=U.map.isWebGLCubeRenderTarget?6:1;for(let J=0;J<X;J++){if(U.map.isWebGLCubeRenderTarget)t.setRenderTarget(U.map,J),t.clear();else{J===0&&(t.setRenderTarget(U.map),t.clear());const ee=U.getViewport(J);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),k.viewport(o)}if(C.isPointLight){const ee=U.camera,ve=U.matrix,Oe=C.distance||ee.far;Oe!==ee.far&&(ee.far=Oe,ee.updateProjectionMatrix()),ho.setFromMatrixPosition(C.matrixWorld),ee.position.copy(ho),Cu.copy(ee.position),Cu.add(J2[J]),ee.up.copy(Q2[J]),ee.lookAt(Cu),ee.updateMatrixWorld(),ve.makeTranslation(-ho.x,-ho.y,-ho.z),c0.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),U._frustum.setFromProjectionMatrix(c0,ee.coordinateSystem,ee.reversedDepth)}else U.updateMatrices(C);i=U.getFrustum(),S(R,_,U.camera,C,this.type)}U.isPointLightShadow!==!0&&this.type===_o&&p(U,_),U.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(w,I,D)};function p(A,R){const _=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ci(r.x,r.y,{format:Vs,type:Ii})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(R,null,_,d,y,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(R,null,_,m,y,null)}function v(A,R,_,w){let I=null;const D=_.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)I=D;else if(I=_.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const k=I.uuid,H=R.uuid;let W=c[k];W===void 0&&(W={},c[k]=W);let B=W[H];B===void 0&&(B=I.clone(),W[H]=B,R.addEventListener("dispose",b)),I=B}if(I.visible=R.visible,I.wireframe=R.wireframe,w===_o?I.side=R.shadowSide!==null?R.shadowSide:R.side:I.side=R.shadowSide!==null?R.shadowSide:h[R.side],I.alphaMap=R.alphaMap,I.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,I.map=R.map,I.clipShadows=R.clipShadows,I.clippingPlanes=R.clippingPlanes,I.clipIntersection=R.clipIntersection,I.displacementMap=R.displacementMap,I.displacementScale=R.displacementScale,I.displacementBias=R.displacementBias,I.wireframeLinewidth=R.wireframeLinewidth,I.linewidth=R.linewidth,_.isPointLight===!0&&I.isMeshDistanceMaterial===!0){const k=t.properties.get(I);k.light=_}return I}function S(A,R,_,w,I){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&I===_o)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,A.matrixWorld);const H=e.update(A),W=A.material;if(Array.isArray(W)){const B=H.groups;for(let C=0,U=B.length;C<U;C++){const L=B[C],O=W[L.materialIndex];if(O&&O.visible){const X=v(A,O,w,I);A.onBeforeShadow(t,A,R,_,H,X,L),t.renderBufferDirect(_,null,H,X,A,L),A.onAfterShadow(t,A,R,_,H,X,L)}}}else if(W.visible){const B=v(A,W,w,I);A.onBeforeShadow(t,A,R,_,H,B,null),t.renderBufferDirect(_,null,H,B,A,null),A.onAfterShadow(t,A,R,_,H,B,null)}}const k=A.children;for(let H=0,W=k.length;H<W;H++)S(k[H],R,_,w,I)}function b(A){A.target.removeEventListener("dispose",b);for(const _ in c){const w=c[_],I=A.target.uuid;I in w&&(w[I].dispose(),delete w[I])}}}function tT(t,e){function n(){let z=!1;const fe=new Rt;let de=null;const Se=new Rt(0,0,0,0);return{setMask:function(ae){de!==ae&&!z&&(t.colorMask(ae,ae,ae,ae),de=ae)},setLocked:function(ae){z=ae},setClear:function(ae,Q,we,ke,ft){ft===!0&&(ae*=ke,Q*=ke,we*=ke),fe.set(ae,Q,we,ke),Se.equals(fe)===!1&&(t.clearColor(ae,Q,we,ke),Se.copy(fe))},reset:function(){z=!1,de=null,Se.set(-1,0,0,0)}}}function i(){let z=!1,fe=!1,de=null,Se=null,ae=null;return{setReversed:function(Q){if(fe!==Q){const we=e.get("EXT_clip_control");Q?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),fe=Q;const ke=ae;ae=null,this.setClear(ke)}},getReversed:function(){return fe},setTest:function(Q){Q?ie(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(Q){de!==Q&&!z&&(t.depthMask(Q),de=Q)},setFunc:function(Q){if(fe&&(Q=kS[Q]),Se!==Q){switch(Q){case Ld:t.depthFunc(t.NEVER);break;case Dd:t.depthFunc(t.ALWAYS);break;case Id:t.depthFunc(t.LESS);break;case zs:t.depthFunc(t.LEQUAL);break;case Nd:t.depthFunc(t.EQUAL);break;case Ud:t.depthFunc(t.GEQUAL);break;case Fd:t.depthFunc(t.GREATER);break;case Od:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Se=Q}},setLocked:function(Q){z=Q},setClear:function(Q){ae!==Q&&(ae=Q,fe&&(Q=1-Q),t.clearDepth(Q))},reset:function(){z=!1,de=null,Se=null,ae=null,fe=!1}}}function r(){let z=!1,fe=null,de=null,Se=null,ae=null,Q=null,we=null,ke=null,ft=null;return{setTest:function(rt){z||(rt?ie(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(rt){fe!==rt&&!z&&(t.stencilMask(rt),fe=rt)},setFunc:function(rt,hi,pi){(de!==rt||Se!==hi||ae!==pi)&&(t.stencilFunc(rt,hi,pi),de=rt,Se=hi,ae=pi)},setOp:function(rt,hi,pi){(Q!==rt||we!==hi||ke!==pi)&&(t.stencilOp(rt,hi,pi),Q=rt,we=hi,ke=pi)},setLocked:function(rt){z=rt},setClear:function(rt){ft!==rt&&(t.clearStencil(rt),ft=rt)},reset:function(){z=!1,fe=null,de=null,Se=null,ae=null,Q=null,we=null,ke=null,ft=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},h={},d=new WeakMap,m=[],x=null,y=!1,g=null,u=null,p=null,v=null,S=null,b=null,A=null,R=new Ze(0,0,0),_=0,w=!1,I=null,D=null,k=null,H=null,W=null;const B=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let C=!1,U=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(L)[1]),C=U>=1):L.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),C=U>=2);let O=null,X={};const J=t.getParameter(t.SCISSOR_BOX),ee=t.getParameter(t.VIEWPORT),ve=new Rt().fromArray(J),Oe=new Rt().fromArray(ee);function ce(z,fe,de,Se){const ae=new Uint8Array(4),Q=t.createTexture();t.bindTexture(z,Q),t.texParameteri(z,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(z,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let we=0;we<de;we++)z===t.TEXTURE_3D||z===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,Se,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(fe+we,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return Q}const j={};j[t.TEXTURE_2D]=ce(t.TEXTURE_2D,t.TEXTURE_2D,1),j[t.TEXTURE_CUBE_MAP]=ce(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[t.TEXTURE_2D_ARRAY]=ce(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),j[t.TEXTURE_3D]=ce(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(t.DEPTH_TEST),o.setFunc(zs),Be(!1),dt(am),ie(t.CULL_FACE),$e(Ai);function ie(z){f[z]!==!0&&(t.enable(z),f[z]=!0)}function le(z){f[z]!==!1&&(t.disable(z),f[z]=!1)}function Ne(z,fe){return h[z]!==fe?(t.bindFramebuffer(z,fe),h[z]=fe,z===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=fe),z===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Le(z,fe){let de=m,Se=!1;if(z){de=d.get(fe),de===void 0&&(de=[],d.set(fe,de));const ae=z.textures;if(de.length!==ae.length||de[0]!==t.COLOR_ATTACHMENT0){for(let Q=0,we=ae.length;Q<we;Q++)de[Q]=t.COLOR_ATTACHMENT0+Q;de.length=ae.length,Se=!0}}else de[0]!==t.BACK&&(de[0]=t.BACK,Se=!0);Se&&t.drawBuffers(de)}function De(z){return x!==z?(t.useProgram(z),x=z,!0):!1}const ut={[wr]:t.FUNC_ADD,[aS]:t.FUNC_SUBTRACT,[lS]:t.FUNC_REVERSE_SUBTRACT};ut[cS]=t.MIN,ut[uS]=t.MAX;const We={[dS]:t.ZERO,[fS]:t.ONE,[hS]:t.SRC_COLOR,[Cd]:t.SRC_ALPHA,[_S]:t.SRC_ALPHA_SATURATE,[xS]:t.DST_COLOR,[mS]:t.DST_ALPHA,[pS]:t.ONE_MINUS_SRC_COLOR,[Pd]:t.ONE_MINUS_SRC_ALPHA,[vS]:t.ONE_MINUS_DST_COLOR,[gS]:t.ONE_MINUS_DST_ALPHA,[yS]:t.CONSTANT_COLOR,[SS]:t.ONE_MINUS_CONSTANT_COLOR,[MS]:t.CONSTANT_ALPHA,[ES]:t.ONE_MINUS_CONSTANT_ALPHA};function $e(z,fe,de,Se,ae,Q,we,ke,ft,rt){if(z===Ai){y===!0&&(le(t.BLEND),y=!1);return}if(y===!1&&(ie(t.BLEND),y=!0),z!==oS){if(z!==g||rt!==w){if((u!==wr||S!==wr)&&(t.blendEquation(t.FUNC_ADD),u=wr,S=wr),rt)switch(z){case Rs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lm:t.blendFunc(t.ONE,t.ONE);break;case cm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case um:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:it("WebGLState: Invalid blending: ",z);break}else switch(z){case Rs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case cm:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case um:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",z);break}p=null,v=null,b=null,A=null,R.set(0,0,0),_=0,g=z,w=rt}return}ae=ae||fe,Q=Q||de,we=we||Se,(fe!==u||ae!==S)&&(t.blendEquationSeparate(ut[fe],ut[ae]),u=fe,S=ae),(de!==p||Se!==v||Q!==b||we!==A)&&(t.blendFuncSeparate(We[de],We[Se],We[Q],We[we]),p=de,v=Se,b=Q,A=we),(ke.equals(R)===!1||ft!==_)&&(t.blendColor(ke.r,ke.g,ke.b,ft),R.copy(ke),_=ft),g=z,w=!1}function Je(z,fe){z.side===Mi?le(t.CULL_FACE):ie(t.CULL_FACE);let de=z.side===mn;fe&&(de=!de),Be(de),z.blending===Rs&&z.transparent===!1?$e(Ai):$e(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),s.setMask(z.colorWrite);const Se=z.stencilWrite;a.setTest(Se),Se&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),_t(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ie(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(z){I!==z&&(z?t.frontFace(t.CW):t.frontFace(t.CCW),I=z)}function dt(z){z!==iS?(ie(t.CULL_FACE),z!==D&&(z===am?t.cullFace(t.BACK):z===rS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),D=z}function F(z){z!==k&&(C&&t.lineWidth(z),k=z)}function _t(z,fe,de){z?(ie(t.POLYGON_OFFSET_FILL),(H!==fe||W!==de)&&(H=fe,W=de,o.getReversed()&&(fe=-fe),t.polygonOffset(fe,de))):le(t.POLYGON_OFFSET_FILL)}function Qe(z){z?ie(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function He(z){z===void 0&&(z=t.TEXTURE0+B-1),O!==z&&(t.activeTexture(z),O=z)}function Me(z,fe,de){de===void 0&&(O===null?de=t.TEXTURE0+B-1:de=O);let Se=X[de];Se===void 0&&(Se={type:void 0,texture:void 0},X[de]=Se),(Se.type!==z||Se.texture!==fe)&&(O!==de&&(t.activeTexture(de),O=de),t.bindTexture(z,fe||j[z]),Se.type=z,Se.texture=fe)}function P(){const z=X[O];z!==void 0&&z.type!==void 0&&(t.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function M(){try{t.compressedTexImage2D(...arguments)}catch(z){it("WebGLState:",z)}}function N(){try{t.compressedTexImage3D(...arguments)}catch(z){it("WebGLState:",z)}}function q(){try{t.texSubImage2D(...arguments)}catch(z){it("WebGLState:",z)}}function te(){try{t.texSubImage3D(...arguments)}catch(z){it("WebGLState:",z)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(z){it("WebGLState:",z)}}function he(){try{t.compressedTexSubImage3D(...arguments)}catch(z){it("WebGLState:",z)}}function ne(){try{t.texStorage2D(...arguments)}catch(z){it("WebGLState:",z)}}function Re(){try{t.texStorage3D(...arguments)}catch(z){it("WebGLState:",z)}}function Ie(){try{t.texImage2D(...arguments)}catch(z){it("WebGLState:",z)}}function se(){try{t.texImage3D(...arguments)}catch(z){it("WebGLState:",z)}}function ue(z){ve.equals(z)===!1&&(t.scissor(z.x,z.y,z.z,z.w),ve.copy(z))}function Ee(z){Oe.equals(z)===!1&&(t.viewport(z.x,z.y,z.z,z.w),Oe.copy(z))}function Te(z,fe){let de=c.get(fe);de===void 0&&(de=new WeakMap,c.set(fe,de));let Se=de.get(z);Se===void 0&&(Se=t.getUniformBlockIndex(fe,z.name),de.set(z,Se))}function xe(z,fe){const Se=c.get(fe).get(z);l.get(fe)!==Se&&(t.uniformBlockBinding(fe,Se,z.__bindingPointIndex),l.set(fe,Se))}function je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},O=null,X={},h={},d=new WeakMap,m=[],x=null,y=!1,g=null,u=null,p=null,v=null,S=null,b=null,A=null,R=new Ze(0,0,0),_=0,w=!1,I=null,D=null,k=null,H=null,W=null,ve.set(0,0,t.canvas.width,t.canvas.height),Oe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:le,bindFramebuffer:Ne,drawBuffers:Le,useProgram:De,setBlending:$e,setMaterial:Je,setFlipSided:Be,setCullFace:dt,setLineWidth:F,setPolygonOffset:_t,setScissorTest:Qe,activeTexture:He,bindTexture:Me,unbindTexture:P,compressedTexImage2D:M,compressedTexImage3D:N,texImage2D:Ie,texImage3D:se,updateUBOMapping:Te,uniformBlockBinding:xe,texStorage2D:ne,texStorage3D:Re,texSubImage2D:q,texSubImage3D:te,compressedTexSubImage2D:Z,compressedTexSubImage3D:he,scissor:ue,viewport:Ee,reset:je}}function nT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,f=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(P,M){return m?new OffscreenCanvas(P,M):jl("canvas")}function y(P,M,N){let q=1;const te=Me(P);if((te.width>N||te.height>N)&&(q=N/Math.max(te.width,te.height)),q<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Z=Math.floor(q*te.width),he=Math.floor(q*te.height);h===void 0&&(h=x(Z,he));const ne=M?x(Z,he):h;return ne.width=Z,ne.height=he,ne.getContext("2d").drawImage(P,0,0,Z,he),Fe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+he+")."),ne}else return"data"in P&&Fe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),P;return P}function g(P){return P.generateMipmaps}function u(P){t.generateMipmap(P)}function p(P){return P.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?t.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(P,M,N,q,te=!1){if(P!==null){if(t[P]!==void 0)return t[P];Fe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Z=M;if(M===t.RED&&(N===t.FLOAT&&(Z=t.R32F),N===t.HALF_FLOAT&&(Z=t.R16F),N===t.UNSIGNED_BYTE&&(Z=t.R8)),M===t.RED_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.R8UI),N===t.UNSIGNED_SHORT&&(Z=t.R16UI),N===t.UNSIGNED_INT&&(Z=t.R32UI),N===t.BYTE&&(Z=t.R8I),N===t.SHORT&&(Z=t.R16I),N===t.INT&&(Z=t.R32I)),M===t.RG&&(N===t.FLOAT&&(Z=t.RG32F),N===t.HALF_FLOAT&&(Z=t.RG16F),N===t.UNSIGNED_BYTE&&(Z=t.RG8)),M===t.RG_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.RG8UI),N===t.UNSIGNED_SHORT&&(Z=t.RG16UI),N===t.UNSIGNED_INT&&(Z=t.RG32UI),N===t.BYTE&&(Z=t.RG8I),N===t.SHORT&&(Z=t.RG16I),N===t.INT&&(Z=t.RG32I)),M===t.RGB_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),N===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),N===t.UNSIGNED_INT&&(Z=t.RGB32UI),N===t.BYTE&&(Z=t.RGB8I),N===t.SHORT&&(Z=t.RGB16I),N===t.INT&&(Z=t.RGB32I)),M===t.RGBA_INTEGER&&(N===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),N===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),N===t.UNSIGNED_INT&&(Z=t.RGBA32UI),N===t.BYTE&&(Z=t.RGBA8I),N===t.SHORT&&(Z=t.RGBA16I),N===t.INT&&(Z=t.RGBA32I)),M===t.RGB&&(N===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),N===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),M===t.RGBA){const he=te?Wl:et.getTransfer(q);N===t.FLOAT&&(Z=t.RGBA32F),N===t.HALF_FLOAT&&(Z=t.RGBA16F),N===t.UNSIGNED_BYTE&&(Z=he===st?t.SRGB8_ALPHA8:t.RGBA8),N===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),N===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(P,M){let N;return P?M===null||M===ui||M===qo?N=t.DEPTH24_STENCIL8:M===ri?N=t.DEPTH32F_STENCIL8:M===$o&&(N=t.DEPTH24_STENCIL8,Fe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ui||M===qo?N=t.DEPTH_COMPONENT24:M===ri?N=t.DEPTH_COMPONENT32F:M===$o&&(N=t.DEPTH_COMPONENT16),N}function b(P,M){return g(P)===!0||P.isFramebufferTexture&&P.minFilter!==Wt&&P.minFilter!==Qt?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function A(P){const M=P.target;M.removeEventListener("dispose",A),_(M),M.isVideoTexture&&f.delete(M)}function R(P){const M=P.target;M.removeEventListener("dispose",R),I(M)}function _(P){const M=i.get(P);if(M.__webglInit===void 0)return;const N=P.source,q=d.get(N);if(q){const te=q[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&w(P),Object.keys(q).length===0&&d.delete(N)}i.remove(P)}function w(P){const M=i.get(P);t.deleteTexture(M.__webglTexture);const N=P.source,q=d.get(N);delete q[M.__cacheKey],o.memory.textures--}function I(P){const M=i.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),i.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let te=0;te<M.__webglFramebuffer[q].length;te++)t.deleteFramebuffer(M.__webglFramebuffer[q][te]);else t.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)t.deleteFramebuffer(M.__webglFramebuffer[q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const N=P.textures;for(let q=0,te=N.length;q<te;q++){const Z=i.get(N[q]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(N[q])}i.remove(P)}let D=0;function k(){D=0}function H(){const P=D;return P>=r.maxTextures&&Fe("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),D+=1,P}function W(P){const M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function B(P,M){const N=i.get(P);if(P.isVideoTexture&&Qe(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&N.__version!==P.version){const q=P.image;if(q===null)Fe("WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)Fe("WebGLRenderer: Texture marked for update but image is incomplete");else{j(N,P,M);return}}else P.isExternalTexture&&(N.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,N.__webglTexture,t.TEXTURE0+M)}function C(P,M){const N=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&N.__version!==P.version){j(N,P,M);return}else P.isExternalTexture&&(N.__webglTexture=P.sourceTexture?P.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,N.__webglTexture,t.TEXTURE0+M)}function U(P,M){const N=i.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&N.__version!==P.version){j(N,P,M);return}n.bindTexture(t.TEXTURE_3D,N.__webglTexture,t.TEXTURE0+M)}function L(P,M){const N=i.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&N.__version!==P.version){ie(N,P,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,N.__webglTexture,t.TEXTURE0+M)}const O={[kd]:t.REPEAT,[Ti]:t.CLAMP_TO_EDGE,[zd]:t.MIRRORED_REPEAT},X={[Wt]:t.NEAREST,[bS]:t.NEAREST_MIPMAP_NEAREST,[ba]:t.NEAREST_MIPMAP_LINEAR,[Qt]:t.LINEAR,[Kc]:t.LINEAR_MIPMAP_NEAREST,[Pr]:t.LINEAR_MIPMAP_LINEAR},J={[CS]:t.NEVER,[NS]:t.ALWAYS,[PS]:t.LESS,[Ph]:t.LEQUAL,[LS]:t.EQUAL,[Lh]:t.GEQUAL,[DS]:t.GREATER,[IS]:t.NOTEQUAL};function ee(P,M){if(M.type===ri&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Qt||M.magFilter===Kc||M.magFilter===ba||M.magFilter===Pr||M.minFilter===Qt||M.minFilter===Kc||M.minFilter===ba||M.minFilter===Pr)&&Fe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(P,t.TEXTURE_WRAP_S,O[M.wrapS]),t.texParameteri(P,t.TEXTURE_WRAP_T,O[M.wrapT]),(P===t.TEXTURE_3D||P===t.TEXTURE_2D_ARRAY)&&t.texParameteri(P,t.TEXTURE_WRAP_R,O[M.wrapR]),t.texParameteri(P,t.TEXTURE_MAG_FILTER,X[M.magFilter]),t.texParameteri(P,t.TEXTURE_MIN_FILTER,X[M.minFilter]),M.compareFunction&&(t.texParameteri(P,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(P,t.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Wt||M.minFilter!==ba&&M.minFilter!==Pr||M.type===ri&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");t.texParameterf(P,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function ve(P,M){let N=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",A));const q=M.source;let te=d.get(q);te===void 0&&(te={},d.set(q,te));const Z=W(M);if(Z!==P.__cacheKey){te[Z]===void 0&&(te[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,N=!0),te[Z].usedTimes++;const he=te[P.__cacheKey];he!==void 0&&(te[P.__cacheKey].usedTimes--,he.usedTimes===0&&w(M)),P.__cacheKey=Z,P.__webglTexture=te[Z].texture}return N}function Oe(P,M,N){return Math.floor(Math.floor(P/N)/M)}function ce(P,M,N,q){const Z=P.updateRanges;if(Z.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,M.width,M.height,N,q,M.data);else{Z.sort((se,ue)=>se.start-ue.start);let he=0;for(let se=1;se<Z.length;se++){const ue=Z[he],Ee=Z[se],Te=ue.start+ue.count,xe=Oe(Ee.start,M.width,4),je=Oe(ue.start,M.width,4);Ee.start<=Te+1&&xe===je&&Oe(Ee.start+Ee.count-1,M.width,4)===xe?ue.count=Math.max(ue.count,Ee.start+Ee.count-ue.start):(++he,Z[he]=Ee)}Z.length=he+1;const ne=t.getParameter(t.UNPACK_ROW_LENGTH),Re=t.getParameter(t.UNPACK_SKIP_PIXELS),Ie=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,M.width);for(let se=0,ue=Z.length;se<ue;se++){const Ee=Z[se],Te=Math.floor(Ee.start/4),xe=Math.ceil(Ee.count/4),je=Te%M.width,z=Math.floor(Te/M.width),fe=xe,de=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,je),t.pixelStorei(t.UNPACK_SKIP_ROWS,z),n.texSubImage2D(t.TEXTURE_2D,0,je,z,fe,de,N,q,M.data)}P.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,ne),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Re),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ie)}}function j(P,M,N){let q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=t.TEXTURE_3D);const te=ve(P,M),Z=M.source;n.bindTexture(q,P.__webglTexture,t.TEXTURE0+N);const he=i.get(Z);if(Z.version!==he.__version||te===!0){n.activeTexture(t.TEXTURE0+N);const ne=et.getPrimaries(et.workingColorSpace),Re=M.colorSpace===qi?null:et.getPrimaries(M.colorSpace),Ie=M.colorSpace===qi||ne===Re?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let se=y(M.image,!1,r.maxTextureSize);se=He(M,se);const ue=s.convert(M.format,M.colorSpace),Ee=s.convert(M.type);let Te=v(M.internalFormat,ue,Ee,M.colorSpace,M.isVideoTexture);ee(q,M);let xe;const je=M.mipmaps,z=M.isVideoTexture!==!0,fe=he.__version===void 0||te===!0,de=Z.dataReady,Se=b(M,se);if(M.isDepthTexture)Te=S(M.format===Lr,M.type),fe&&(z?n.texStorage2D(t.TEXTURE_2D,1,Te,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Te,se.width,se.height,0,ue,Ee,null));else if(M.isDataTexture)if(je.length>0){z&&fe&&n.texStorage2D(t.TEXTURE_2D,Se,Te,je[0].width,je[0].height);for(let ae=0,Q=je.length;ae<Q;ae++)xe=je[ae],z?de&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,xe.width,xe.height,ue,Ee,xe.data):n.texImage2D(t.TEXTURE_2D,ae,Te,xe.width,xe.height,0,ue,Ee,xe.data);M.generateMipmaps=!1}else z?(fe&&n.texStorage2D(t.TEXTURE_2D,Se,Te,se.width,se.height),de&&ce(M,se,ue,Ee)):n.texImage2D(t.TEXTURE_2D,0,Te,se.width,se.height,0,ue,Ee,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){z&&fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Te,je[0].width,je[0].height,se.depth);for(let ae=0,Q=je.length;ae<Q;ae++)if(xe=je[ae],M.format!==jn)if(ue!==null)if(z){if(de)if(M.layerUpdates.size>0){const we=Bm(xe.width,xe.height,M.format,M.type);for(const ke of M.layerUpdates){const ft=xe.data.subarray(ke*we/xe.data.BYTES_PER_ELEMENT,(ke+1)*we/xe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,ke,xe.width,xe.height,1,ue,ft)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,se.depth,ue,xe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ae,Te,xe.width,xe.height,se.depth,0,xe.data,0,0);else Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?de&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,se.depth,ue,Ee,xe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ae,Te,xe.width,xe.height,se.depth,0,ue,Ee,xe.data)}else{z&&fe&&n.texStorage2D(t.TEXTURE_2D,Se,Te,je[0].width,je[0].height);for(let ae=0,Q=je.length;ae<Q;ae++)xe=je[ae],M.format!==jn?ue!==null?z?de&&n.compressedTexSubImage2D(t.TEXTURE_2D,ae,0,0,xe.width,xe.height,ue,xe.data):n.compressedTexImage2D(t.TEXTURE_2D,ae,Te,xe.width,xe.height,0,xe.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?de&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,xe.width,xe.height,ue,Ee,xe.data):n.texImage2D(t.TEXTURE_2D,ae,Te,xe.width,xe.height,0,ue,Ee,xe.data)}else if(M.isDataArrayTexture)if(z){if(fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Se,Te,se.width,se.height,se.depth),de)if(M.layerUpdates.size>0){const ae=Bm(se.width,se.height,M.format,M.type);for(const Q of M.layerUpdates){const we=se.data.subarray(Q*ae/se.data.BYTES_PER_ELEMENT,(Q+1)*ae/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,ue,Ee,we)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ue,Ee,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Te,se.width,se.height,se.depth,0,ue,Ee,se.data);else if(M.isData3DTexture)z?(fe&&n.texStorage3D(t.TEXTURE_3D,Se,Te,se.width,se.height,se.depth),de&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ue,Ee,se.data)):n.texImage3D(t.TEXTURE_3D,0,Te,se.width,se.height,se.depth,0,ue,Ee,se.data);else if(M.isFramebufferTexture){if(fe)if(z)n.texStorage2D(t.TEXTURE_2D,Se,Te,se.width,se.height);else{let ae=se.width,Q=se.height;for(let we=0;we<Se;we++)n.texImage2D(t.TEXTURE_2D,we,Te,ae,Q,0,ue,Ee,null),ae>>=1,Q>>=1}}else if(je.length>0){if(z&&fe){const ae=Me(je[0]);n.texStorage2D(t.TEXTURE_2D,Se,Te,ae.width,ae.height)}for(let ae=0,Q=je.length;ae<Q;ae++)xe=je[ae],z?de&&n.texSubImage2D(t.TEXTURE_2D,ae,0,0,ue,Ee,xe):n.texImage2D(t.TEXTURE_2D,ae,Te,ue,Ee,xe);M.generateMipmaps=!1}else if(z){if(fe){const ae=Me(se);n.texStorage2D(t.TEXTURE_2D,Se,Te,ae.width,ae.height)}de&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,Ee,se)}else n.texImage2D(t.TEXTURE_2D,0,Te,ue,Ee,se);g(M)&&u(q),he.__version=Z.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ie(P,M,N){if(M.image.length!==6)return;const q=ve(P,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,P.__webglTexture,t.TEXTURE0+N);const Z=i.get(te);if(te.version!==Z.__version||q===!0){n.activeTexture(t.TEXTURE0+N);const he=et.getPrimaries(et.workingColorSpace),ne=M.colorSpace===qi?null:et.getPrimaries(M.colorSpace),Re=M.colorSpace===qi||he===ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Re);const Ie=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,ue=[];for(let Q=0;Q<6;Q++)!Ie&&!se?ue[Q]=y(M.image[Q],!0,r.maxCubemapSize):ue[Q]=se?M.image[Q].image:M.image[Q],ue[Q]=He(M,ue[Q]);const Ee=ue[0],Te=s.convert(M.format,M.colorSpace),xe=s.convert(M.type),je=v(M.internalFormat,Te,xe,M.colorSpace),z=M.isVideoTexture!==!0,fe=Z.__version===void 0||q===!0,de=te.dataReady;let Se=b(M,Ee);ee(t.TEXTURE_CUBE_MAP,M);let ae;if(Ie){z&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,je,Ee.width,Ee.height);for(let Q=0;Q<6;Q++){ae=ue[Q].mipmaps;for(let we=0;we<ae.length;we++){const ke=ae[we];M.format!==jn?Te!==null?z?de&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,ke.width,ke.height,Te,ke.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,je,ke.width,ke.height,0,ke.data):Fe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,0,0,ke.width,ke.height,Te,xe,ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we,je,ke.width,ke.height,0,Te,xe,ke.data)}}}else{if(ae=M.mipmaps,z&&fe){ae.length>0&&Se++;const Q=Me(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Se,je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){z?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ue[Q].width,ue[Q].height,Te,xe,ue[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,je,ue[Q].width,ue[Q].height,0,Te,xe,ue[Q].data);for(let we=0;we<ae.length;we++){const ft=ae[we].image[Q].image;z?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,ft.width,ft.height,Te,xe,ft.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,je,ft.width,ft.height,0,Te,xe,ft.data)}}else{z?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Te,xe,ue[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,je,Te,xe,ue[Q]);for(let we=0;we<ae.length;we++){const ke=ae[we];z?de&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,0,0,Te,xe,ke.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,we+1,je,Te,xe,ke.image[Q])}}}g(M)&&u(t.TEXTURE_CUBE_MAP),Z.__version=te.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function le(P,M,N,q,te,Z){const he=s.convert(N.format,N.colorSpace),ne=s.convert(N.type),Re=v(N.internalFormat,he,ne,N.colorSpace),Ie=i.get(M),se=i.get(N);if(se.__renderTarget=M,!Ie.__hasExternalTextures){const ue=Math.max(1,M.width>>Z),Ee=Math.max(1,M.height>>Z);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,Z,Re,ue,Ee,M.depth,0,he,ne,null):n.texImage2D(te,Z,Re,ue,Ee,0,he,ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,P),_t(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,te,se.__webglTexture,0,F(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,te,se.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(P,M,N){if(t.bindRenderbuffer(t.RENDERBUFFER,P),M.depthBuffer){const q=M.depthTexture,te=q&&q.isDepthTexture?q.type:null,Z=S(M.stencilBuffer,te),he=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;_t(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,F(M),Z,M.width,M.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,F(M),Z,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Z,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,he,t.RENDERBUFFER,P)}else{const q=M.textures;for(let te=0;te<q.length;te++){const Z=q[te],he=s.convert(Z.format,Z.colorSpace),ne=s.convert(Z.type),Re=v(Z.internalFormat,he,ne,Z.colorSpace);_t(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,F(M),Re,M.width,M.height):N?t.renderbufferStorageMultisample(t.RENDERBUFFER,F(M),Re,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Re,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Le(P,M,N){const q=M.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(M.depthTexture);if(te.__renderTarget=M,(!te.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q){if(te.__webglInit===void 0&&(te.__webglInit=!0,M.depthTexture.addEventListener("dispose",A)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),ee(t.TEXTURE_CUBE_MAP,M.depthTexture);const Ie=s.convert(M.depthTexture.format),se=s.convert(M.depthTexture.type);let ue;M.depthTexture.format===Ni?ue=t.DEPTH_COMPONENT24:M.depthTexture.format===Lr&&(ue=t.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,ue,M.width,M.height,0,Ie,se,null)}}else B(M.depthTexture,0);const Z=te.__webglTexture,he=F(M),ne=q?t.TEXTURE_CUBE_MAP_POSITIVE_X+N:t.TEXTURE_2D,Re=M.depthTexture.format===Lr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ni)_t(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Re,ne,Z,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,Re,ne,Z,0);else if(M.depthTexture.format===Lr)_t(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Re,ne,Z,0,he):t.framebufferTexture2D(t.FRAMEBUFFER,Re,ne,Z,0);else throw new Error("Unknown depthTexture format")}function De(P){const M=i.get(P),N=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){const q=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",te)};q.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=q}if(P.depthTexture&&!M.__autoAllocateDepthBuffer)if(N)for(let q=0;q<6;q++)Le(M.__webglFramebuffer[q],P,q);else{const q=P.texture.mipmaps;q&&q.length>0?Le(M.__webglFramebuffer[0],P,0):Le(M.__webglFramebuffer,P,0)}else if(N){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=t.createRenderbuffer(),Ne(M.__webglDepthbuffer[q],P,!1);else{const te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Z)}}else{const q=P.texture.mipmaps;if(q&&q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),Ne(M.__webglDepthbuffer,P,!1);else{const te=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,Z)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ut(P,M,N){const q=i.get(P);M!==void 0&&le(q.__webglFramebuffer,P,P.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),N!==void 0&&De(P)}function We(P){const M=P.texture,N=i.get(P),q=i.get(M);P.addEventListener("dispose",R);const te=P.textures,Z=P.isWebGLCubeRenderTarget===!0,he=te.length>1;if(he||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=M.version,o.memory.textures++),Z){N.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer[ne]=[];for(let Re=0;Re<M.mipmaps.length;Re++)N.__webglFramebuffer[ne][Re]=t.createFramebuffer()}else N.__webglFramebuffer[ne]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){N.__webglFramebuffer=[];for(let ne=0;ne<M.mipmaps.length;ne++)N.__webglFramebuffer[ne]=t.createFramebuffer()}else N.__webglFramebuffer=t.createFramebuffer();if(he)for(let ne=0,Re=te.length;ne<Re;ne++){const Ie=i.get(te[ne]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),o.memory.textures++)}if(P.samples>0&&_t(P)===!1){N.__webglMultisampledFramebuffer=t.createFramebuffer(),N.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ne=0;ne<te.length;ne++){const Re=te[ne];N.__webglColorRenderbuffer[ne]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,N.__webglColorRenderbuffer[ne]);const Ie=s.convert(Re.format,Re.colorSpace),se=s.convert(Re.type),ue=v(Re.internalFormat,Ie,se,Re.colorSpace,P.isXRRenderTarget===!0),Ee=F(P);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,ue,P.width,P.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ne,t.RENDERBUFFER,N.__webglColorRenderbuffer[ne])}t.bindRenderbuffer(t.RENDERBUFFER,null),P.depthBuffer&&(N.__webglDepthRenderbuffer=t.createRenderbuffer(),Ne(N.__webglDepthRenderbuffer,P,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),ee(t.TEXTURE_CUBE_MAP,M);for(let ne=0;ne<6;ne++)if(M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)le(N.__webglFramebuffer[ne][Re],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Re);else le(N.__webglFramebuffer[ne],P,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);g(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(he){for(let ne=0,Re=te.length;ne<Re;ne++){const Ie=te[ne],se=i.get(Ie);let ue=t.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ue=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ue,se.__webglTexture),ee(ue,Ie),le(N.__webglFramebuffer,P,Ie,t.COLOR_ATTACHMENT0+ne,ue,0),g(Ie)&&u(ue)}n.unbindTexture()}else{let ne=t.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ne=P.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ne,q.__webglTexture),ee(ne,M),M.mipmaps&&M.mipmaps.length>0)for(let Re=0;Re<M.mipmaps.length;Re++)le(N.__webglFramebuffer[Re],P,M,t.COLOR_ATTACHMENT0,ne,Re);else le(N.__webglFramebuffer,P,M,t.COLOR_ATTACHMENT0,ne,0);g(M)&&u(ne),n.unbindTexture()}P.depthBuffer&&De(P)}function $e(P){const M=P.textures;for(let N=0,q=M.length;N<q;N++){const te=M[N];if(g(te)){const Z=p(P),he=i.get(te).__webglTexture;n.bindTexture(Z,he),u(Z),n.unbindTexture()}}}const Je=[],Be=[];function dt(P){if(P.samples>0){if(_t(P)===!1){const M=P.textures,N=P.width,q=P.height;let te=t.COLOR_BUFFER_BIT;const Z=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,he=i.get(P),ne=M.length>1;if(ne)for(let Ie=0;Ie<M.length;Ie++)n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const Re=P.texture.mipmaps;Re&&Re.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let Ie=0;Ie<M.length;Ie++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ne){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ie]);const se=i.get(M[Ie]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,se,0)}t.blitFramebuffer(0,0,N,q,0,0,N,q,te,t.NEAREST),l===!0&&(Je.length=0,Be.length=0,Je.push(t.COLOR_ATTACHMENT0+Ie),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Je.push(Z),Be.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Be)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Je))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ne)for(let Ie=0;Ie<M.length;Ie++){n.bindFramebuffer(t.FRAMEBUFFER,he.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.RENDERBUFFER,he.__webglColorRenderbuffer[Ie]);const se=i.get(M[Ie]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,he.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.TEXTURE_2D,se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){const M=P.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function F(P){return Math.min(r.maxSamples,P.samples)}function _t(P){const M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Qe(P){const M=o.render.frame;f.get(P)!==M&&(f.set(P,M),P.update())}function He(P,M){const N=P.colorSpace,q=P.format,te=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||N!==Hs&&N!==qi&&(et.getTransfer(N)===st?(q!==jn||te!==Sn)&&Fe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",N)),M}function Me(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=k,this.setTexture2D=B,this.setTexture2DArray=C,this.setTexture3D=U,this.setTextureCube=L,this.rebindTextures=ut,this.setupRenderTarget=We,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=le,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function iT(t,e){function n(i,r=qi){let s;const o=et.getTransfer(r);if(i===Sn)return t.UNSIGNED_BYTE;if(i===Th)return t.UNSIGNED_SHORT_4_4_4_4;if(i===bh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Gx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Wx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Vx)return t.BYTE;if(i===Hx)return t.SHORT;if(i===$o)return t.UNSIGNED_SHORT;if(i===wh)return t.INT;if(i===ui)return t.UNSIGNED_INT;if(i===ri)return t.FLOAT;if(i===Ii)return t.HALF_FLOAT;if(i===jx)return t.ALPHA;if(i===Xx)return t.RGB;if(i===jn)return t.RGBA;if(i===Ni)return t.DEPTH_COMPONENT;if(i===Lr)return t.DEPTH_STENCIL;if(i===Yx)return t.RED;if(i===Ah)return t.RED_INTEGER;if(i===Vs)return t.RG;if(i===Rh)return t.RG_INTEGER;if(i===Ch)return t.RGBA_INTEGER;if(i===hl||i===pl||i===ml||i===gl)if(o===st)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===hl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===hl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Bd||i===Vd||i===Hd||i===Gd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Bd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Hd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Gd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wd||i===jd||i===Xd||i===Yd||i===$d||i===qd||i===Kd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Wd||i===jd)return o===st?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Xd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Yd)return s.COMPRESSED_R11_EAC;if(i===$d)return s.COMPRESSED_SIGNED_R11_EAC;if(i===qd)return s.COMPRESSED_RG11_EAC;if(i===Kd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Zd||i===Jd||i===Qd||i===ef||i===tf||i===nf||i===rf||i===sf||i===of||i===af||i===lf||i===cf||i===uf||i===df)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Zd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Jd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qd)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ef)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===tf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===rf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===of)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===af)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===lf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===cf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uf)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===df)return o===st?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ff||i===hf||i===pf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ff)return o===st?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mf||i===gf||i===xf||i===vf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===mf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===gf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===xf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===vf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===qo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const rT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class oT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new nv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new fi({vertexShader:rT,fragmentShader:sT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Ue(new Ur(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class aT extends $s{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,m=null,x=null;const y=typeof XRWebGLBinding<"u",g=new oT,u={},p=n.getContextAttributes();let v=null,S=null;const b=[],A=[],R=new Ke;let _=null;const w=new rn;w.viewport=new Rt;const I=new rn;I.viewport=new Rt;const D=[w,I],k=new _1;let H=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ie=b[j];return ie===void 0&&(ie=new ru,b[j]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(j){let ie=b[j];return ie===void 0&&(ie=new ru,b[j]=ie),ie.getGripSpace()},this.getHand=function(j){let ie=b[j];return ie===void 0&&(ie=new ru,b[j]=ie),ie.getHandSpace()};function B(j){const ie=A.indexOf(j.inputSource);if(ie===-1)return;const le=b[ie];le!==void 0&&(le.update(j.inputSource,j.frame,c||o),le.dispatchEvent({type:j.type,data:j.inputSource}))}function C(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",C),r.removeEventListener("inputsourceschange",U);for(let j=0;j<b.length;j++){const ie=A[j];ie!==null&&(A[j]=null,b[j].disconnect(ie))}H=null,W=null,g.reset();for(const j in u)delete u[j];e.setRenderTarget(v),m=null,d=null,h=null,r=null,S=null,ce.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&Fe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&Fe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h===null&&y&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",C),r.addEventListener("inputsourceschange",U),p.xrCompatible!==!0&&await n.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(R),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,Ne=null,Le=null;p.depth&&(Le=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=p.stencil?Lr:Ni,Ne=p.stencil?qo:ui);const De={colorFormat:n.RGBA8,depthFormat:Le,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(De),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),S=new ci(d.textureWidth,d.textureHeight,{format:jn,type:Sn,depthTexture:new Zo(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),S=new ci(m.framebufferWidth,m.framebufferHeight,{format:jn,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),ce.setContext(r),ce.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function U(j){for(let ie=0;ie<j.removed.length;ie++){const le=j.removed[ie],Ne=A.indexOf(le);Ne>=0&&(A[Ne]=null,b[Ne].disconnect(le))}for(let ie=0;ie<j.added.length;ie++){const le=j.added[ie];let Ne=A.indexOf(le);if(Ne===-1){for(let De=0;De<b.length;De++)if(De>=A.length){A.push(le),Ne=De;break}else if(A[De]===null){A[De]=le,Ne=De;break}if(Ne===-1)break}const Le=b[Ne];Le&&Le.connect(le)}}const L=new V,O=new V;function X(j,ie,le){L.setFromMatrixPosition(ie.matrixWorld),O.setFromMatrixPosition(le.matrixWorld);const Ne=L.distanceTo(O),Le=ie.projectionMatrix.elements,De=le.projectionMatrix.elements,ut=Le[14]/(Le[10]-1),We=Le[14]/(Le[10]+1),$e=(Le[9]+1)/Le[5],Je=(Le[9]-1)/Le[5],Be=(Le[8]-1)/Le[0],dt=(De[8]+1)/De[0],F=ut*Be,_t=ut*dt,Qe=Ne/(-Be+dt),He=Qe*-Be;if(ie.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(He),j.translateZ(Qe),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Le[10]===-1)j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Me=ut+Qe,P=We+Qe,M=F-He,N=_t+(Ne-He),q=$e*We/P*Me,te=Je*We/P*Me;j.projectionMatrix.makePerspective(M,N,q,te,Me,P),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function J(j,ie){ie===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ie.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let ie=j.near,le=j.far;g.texture!==null&&(g.depthNear>0&&(ie=g.depthNear),g.depthFar>0&&(le=g.depthFar)),k.near=I.near=w.near=ie,k.far=I.far=w.far=le,(H!==k.near||W!==k.far)&&(r.updateRenderState({depthNear:k.near,depthFar:k.far}),H=k.near,W=k.far),k.layers.mask=j.layers.mask|6,w.layers.mask=k.layers.mask&-5,I.layers.mask=k.layers.mask&-3;const Ne=j.parent,Le=k.cameras;J(k,Ne);for(let De=0;De<Le.length;De++)J(Le[De],Ne);Le.length===2?X(k,w,I):k.projectionMatrix.copy(w.projectionMatrix),ee(j,k,Ne)};function ee(j,ie,le){le===null?j.matrix.copy(ie.matrixWorld):(j.matrix.copy(le.matrixWorld),j.matrix.invert(),j.matrix.multiply(ie.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ie.projectionMatrix),j.projectionMatrixInverse.copy(ie.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=_f*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(j){l=j,d!==null&&(d.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(k)},this.getCameraTexture=function(j){return u[j]};let ve=null;function Oe(j,ie){if(f=ie.getViewerPose(c||o),x=ie,f!==null){const le=f.views;m!==null&&(e.setRenderTargetFramebuffer(S,m.framebuffer),e.setRenderTarget(S));let Ne=!1;le.length!==k.cameras.length&&(k.cameras.length=0,Ne=!0);for(let We=0;We<le.length;We++){const $e=le[We];let Je=null;if(m!==null)Je=m.getViewport($e);else{const dt=h.getViewSubImage(d,$e);Je=dt.viewport,We===0&&(e.setRenderTargetTextures(S,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(S))}let Be=D[We];Be===void 0&&(Be=new rn,Be.layers.enable(We),Be.viewport=new Rt,D[We]=Be),Be.matrix.fromArray($e.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray($e.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Je.x,Je.y,Je.width,Je.height),We===0&&(k.matrix.copy(Be.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Ne===!0&&k.cameras.push(Be)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){h=i.getBinding();const We=h.getDepthInformation(le[0]);We&&We.isValid&&We.texture&&g.init(We,r.renderState)}if(Le&&Le.includes("camera-access")&&y){e.state.unbindTexture(),h=i.getBinding();for(let We=0;We<le.length;We++){const $e=le[We].camera;if($e){let Je=u[$e];Je||(Je=new nv,u[$e]=Je);const Be=h.getCameraImage($e);Je.sourceTexture=Be}}}}for(let le=0;le<b.length;le++){const Ne=A[le],Le=b[le];Ne!==null&&Le!==void 0&&Le.update(Ne,ie,c||o)}ve&&ve(j,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),x=null}const ce=new av;ce.setAnimationLoop(Oe),this.setAnimationLoop=function(j){ve=j},this.dispose=function(){}}}const yr=new di,lT=new vt;function cT(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,iv(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,p,v,S){u.isMeshBasicMaterial?s(g,u):u.isMeshLambertMaterial?(s(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(g,u),h(g,u)):u.isMeshPhongMaterial?(s(g,u),f(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(g,u),d(g,u),u.isMeshPhysicalMaterial&&m(g,u,S)):u.isMeshMatcapMaterial?(s(g,u),x(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),y(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(o(g,u),u.isLineDashedMaterial&&a(g,u)):u.isPointsMaterial?l(g,u,p,v):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===mn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===mn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const p=e.get(u),v=p.envMap,S=p.envMapRotation;v&&(g.envMap.value=v,yr.copy(S),yr.x*=-1,yr.y*=-1,yr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(yr.y*=-1,yr.z*=-1),g.envMapRotation.value.setFromMatrix4(lT.makeRotationFromEuler(yr)),g.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function o(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function a(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,p,v){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*p,g.scale.value=v*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function f(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function h(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function d(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,p){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===mn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=p.texture,g.transmissionSamplerSize.value.set(p.width,p.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function x(g,u){u.matcap&&(g.matcap.value=u.matcap)}function y(g,u){const p=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(p.matrixWorld),g.nearDistance.value=p.shadow.camera.near,g.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function uT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,v){const S=v.program;i.uniformBlockBinding(p,S)}function c(p,v){let S=r[p.id];S===void 0&&(x(p),S=f(p),r[p.id]=S,p.addEventListener("dispose",g));const b=v.program;i.updateUBOMapping(p,b);const A=e.render.frame;s[p.id]!==A&&(d(p),s[p.id]=A)}function f(p){const v=h();p.__bindingPointIndex=v;const S=t.createBuffer(),b=p.__size,A=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,S),S}function h(){for(let p=0;p<a;p++)if(o.indexOf(p)===-1)return o.push(p),p;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(p){const v=r[p.id],S=p.uniforms,b=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,R=S.length;A<R;A++){const _=Array.isArray(S[A])?S[A]:[S[A]];for(let w=0,I=_.length;w<I;w++){const D=_[w];if(m(D,A,w,b)===!0){const k=D.__offset,H=Array.isArray(D.value)?D.value:[D.value];let W=0;for(let B=0;B<H.length;B++){const C=H[B],U=y(C);typeof C=="number"||typeof C=="boolean"?(D.__data[0]=C,t.bufferSubData(t.UNIFORM_BUFFER,k+W,D.__data)):C.isMatrix3?(D.__data[0]=C.elements[0],D.__data[1]=C.elements[1],D.__data[2]=C.elements[2],D.__data[3]=0,D.__data[4]=C.elements[3],D.__data[5]=C.elements[4],D.__data[6]=C.elements[5],D.__data[7]=0,D.__data[8]=C.elements[6],D.__data[9]=C.elements[7],D.__data[10]=C.elements[8],D.__data[11]=0):(C.toArray(D.__data,W),W+=U.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(p,v,S,b){const A=p.value,R=v+"_"+S;if(b[R]===void 0)return typeof A=="number"||typeof A=="boolean"?b[R]=A:b[R]=A.clone(),!0;{const _=b[R];if(typeof A=="number"||typeof A=="boolean"){if(_!==A)return b[R]=A,!0}else if(_.equals(A)===!1)return _.copy(A),!0}return!1}function x(p){const v=p.uniforms;let S=0;const b=16;for(let R=0,_=v.length;R<_;R++){const w=Array.isArray(v[R])?v[R]:[v[R]];for(let I=0,D=w.length;I<D;I++){const k=w[I],H=Array.isArray(k.value)?k.value:[k.value];for(let W=0,B=H.length;W<B;W++){const C=H[W],U=y(C),L=S%b,O=L%U.boundary,X=L+O;S+=O,X!==0&&b-X<U.storage&&(S+=b-X),k.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=U.storage}}}const A=S%b;return A>0&&(S+=b-A),p.__size=S,p.__cache={},this}function y(p){const v={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(v.boundary=4,v.storage=4):p.isVector2?(v.boundary=8,v.storage=8):p.isVector3||p.isColor?(v.boundary=16,v.storage=12):p.isVector4?(v.boundary=16,v.storage=16):p.isMatrix3?(v.boundary=48,v.storage=48):p.isMatrix4?(v.boundary=64,v.storage=64):p.isTexture?Fe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Fe("WebGLRenderer: Unsupported uniform value type.",p),v}function g(p){const v=p.target;v.removeEventListener("dispose",g);const S=o.indexOf(v.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const p in r)t.deleteBuffer(r[p]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}const dT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Jn=null;function fT(){return Jn===null&&(Jn=new r1(dT,16,16,Vs,Ii),Jn.name="DFG_LUT",Jn.minFilter=Qt,Jn.magFilter=Qt,Jn.wrapS=Ti,Jn.wrapT=Ti,Jn.generateMipmaps=!1,Jn.needsUpdate=!0),Jn}class kh{constructor(e={}){const{canvas:n=FS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Sn}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;const y=m,g=new Set([Ch,Rh,Ah]),u=new Set([Sn,ui,$o,qo,Th,bh]),p=new Uint32Array(4),v=new Int32Array(4);let S=null,b=null;const A=[],R=[];let _=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let I=!1;this._outputColorSpace=Rn;let D=0,k=0,H=null,W=-1,B=null;const C=new Rt,U=new Rt;let L=null;const O=new Ze(0);let X=0,J=n.width,ee=n.height,ve=1,Oe=null,ce=null;const j=new Rt(0,0,J,ee),ie=new Rt(0,0,J,ee);let le=!1;const Ne=new Uh;let Le=!1,De=!1;const ut=new vt,We=new V,$e=new Rt,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Be=!1;function dt(){return H===null?ve:1}let F=i;function _t(T,G){return n.getContext(T,G)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Eh}`),n.addEventListener("webglcontextlost",we,!1),n.addEventListener("webglcontextrestored",ke,!1),n.addEventListener("webglcontextcreationerror",ft,!1),F===null){const G="webgl2";if(F=_t(G,T),F===null)throw _t(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw it("WebGLRenderer: "+T.message),T}let Qe,He,Me,P,M,N,q,te,Z,he,ne,Re,Ie,se,ue,Ee,Te,xe,je,z,fe,de,Se;function ae(){Qe=new hw(F),Qe.init(),fe=new iT(F,Qe),He=new sw(F,Qe,e,fe),Me=new tT(F,Qe),He.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),P=new gw(F),M=new V2,N=new nT(F,Qe,Me,M,He,fe,P),q=new fw(w),te=new S1(F),de=new iw(F,te),Z=new pw(F,te,P,de),he=new vw(F,Z,te,de,P),xe=new xw(F,He,N),ue=new ow(M),ne=new B2(w,q,Qe,He,de,ue),Re=new cT(w,M),Ie=new G2,se=new q2(Qe),Te=new nw(w,q,Me,he,x,l),Ee=new eT(w,he,He),Se=new uT(F,P,He,Me),je=new rw(F,Qe,P),z=new mw(F,Qe,P),P.programs=ne.programs,w.capabilities=He,w.extensions=Qe,w.properties=M,w.renderLists=Ie,w.shadowMap=Ee,w.state=Me,w.info=P}ae(),y!==Sn&&(_=new yw(y,n.width,n.height,r,s));const Q=new aT(w,F);this.xr=Q,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const T=Qe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Qe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(T){T!==void 0&&(ve=T,this.setSize(J,ee,!1))},this.getSize=function(T){return T.set(J,ee)},this.setSize=function(T,G,K=!0){if(Q.isPresenting){Fe("WebGLRenderer: Can't change size while VR device is presenting.");return}J=T,ee=G,n.width=Math.floor(T*ve),n.height=Math.floor(G*ve),K===!0&&(n.style.width=T+"px",n.style.height=G+"px"),_!==null&&_.setSize(n.width,n.height),this.setViewport(0,0,T,G)},this.getDrawingBufferSize=function(T){return T.set(J*ve,ee*ve).floor()},this.setDrawingBufferSize=function(T,G,K){J=T,ee=G,ve=K,n.width=Math.floor(T*K),n.height=Math.floor(G*K),this.setViewport(0,0,T,G)},this.setEffects=function(T){if(y===Sn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let G=0;G<T.length;G++)if(T[G].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}_.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(C)},this.getViewport=function(T){return T.copy(j)},this.setViewport=function(T,G,K,$){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,G,K,$),Me.viewport(C.copy(j).multiplyScalar(ve).round())},this.getScissor=function(T){return T.copy(ie)},this.setScissor=function(T,G,K,$){T.isVector4?ie.set(T.x,T.y,T.z,T.w):ie.set(T,G,K,$),Me.scissor(U.copy(ie).multiplyScalar(ve).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(T){Me.setScissorTest(le=T)},this.setOpaqueSort=function(T){Oe=T},this.setTransparentSort=function(T){ce=T},this.getClearColor=function(T){return T.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(T=!0,G=!0,K=!0){let $=0;if(T){let Y=!1;if(H!==null){const me=H.texture.format;Y=g.has(me)}if(Y){const me=H.texture.type,_e=u.has(me),ge=Te.getClearColor(),be=Te.getClearAlpha(),Ce=ge.r,ze=ge.g,Xe=ge.b;_e?(p[0]=Ce,p[1]=ze,p[2]=Xe,p[3]=be,F.clearBufferuiv(F.COLOR,0,p)):(v[0]=Ce,v[1]=ze,v[2]=Xe,v[3]=be,F.clearBufferiv(F.COLOR,0,v))}else $|=F.COLOR_BUFFER_BIT}G&&($|=F.DEPTH_BUFFER_BIT),K&&($|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&F.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",we,!1),n.removeEventListener("webglcontextrestored",ke,!1),n.removeEventListener("webglcontextcreationerror",ft,!1),Te.dispose(),Ie.dispose(),se.dispose(),M.dispose(),q.dispose(),he.dispose(),de.dispose(),Se.dispose(),ne.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Gh),Q.removeEventListener("sessionend",Wh),hr.stop()};function we(T){T.preventDefault(),mm("WebGLRenderer: Context Lost."),I=!0}function ke(){mm("WebGLRenderer: Context Restored."),I=!1;const T=P.autoReset,G=Ee.enabled,K=Ee.autoUpdate,$=Ee.needsUpdate,Y=Ee.type;ae(),P.autoReset=T,Ee.enabled=G,Ee.autoUpdate=K,Ee.needsUpdate=$,Ee.type=Y}function ft(T){it("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function rt(T){const G=T.target;G.removeEventListener("dispose",rt),hi(G)}function hi(T){pi(T),M.remove(T)}function pi(T){const G=M.get(T).programs;G!==void 0&&(G.forEach(function(K){ne.releaseProgram(K)}),T.isShaderMaterial&&ne.releaseShaderCache(T))}this.renderBufferDirect=function(T,G,K,$,Y,me){G===null&&(G=Je);const _e=Y.isMesh&&Y.matrixWorld.determinant()<0,ge=Sv(T,G,K,$,Y);Me.setMaterial($,_e);let be=K.index,Ce=1;if($.wireframe===!0){if(be=Z.getWireframeAttribute(K),be===void 0)return;Ce=2}const ze=K.drawRange,Xe=K.attributes.position;let Pe=ze.start*Ce,at=(ze.start+ze.count)*Ce;me!==null&&(Pe=Math.max(Pe,me.start*Ce),at=Math.min(at,(me.start+me.count)*Ce)),be!==null?(Pe=Math.max(Pe,0),at=Math.min(at,be.count)):Xe!=null&&(Pe=Math.max(Pe,0),at=Math.min(at,Xe.count));const Ct=at-Pe;if(Ct<0||Ct===1/0)return;de.setup(Y,$,ge,K,be);let bt,lt=je;if(be!==null&&(bt=te.get(be),lt=z,lt.setIndex(bt)),Y.isMesh)$.wireframe===!0?(Me.setLineWidth($.wireframeLinewidth*dt()),lt.setMode(F.LINES)):lt.setMode(F.TRIANGLES);else if(Y.isLine){let Yt=$.linewidth;Yt===void 0&&(Yt=1),Me.setLineWidth(Yt*dt()),Y.isLineSegments?lt.setMode(F.LINES):Y.isLineLoop?lt.setMode(F.LINE_LOOP):lt.setMode(F.LINE_STRIP)}else Y.isPoints?lt.setMode(F.POINTS):Y.isSprite&&lt.setMode(F.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Xl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),lt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Qe.get("WEBGL_multi_draw"))lt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Yt=Y._multiDrawStarts,Ae=Y._multiDrawCounts,xn=Y._multiDrawCount,nt=be?te.get(be).bytesPerElement:1,Un=M.get($).currentProgram.getUniforms();for(let qn=0;qn<xn;qn++)Un.setValue(F,"_gl_DrawID",qn),lt.render(Yt[qn]/nt,Ae[qn])}else if(Y.isInstancedMesh)lt.renderInstances(Pe,Ct,Y.count);else if(K.isInstancedBufferGeometry){const Yt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ae=Math.min(K.instanceCount,Yt);lt.renderInstances(Pe,Ct,Ae)}else lt.render(Pe,Ct)};function Hh(T,G,K){T.transparent===!0&&T.side===Mi&&T.forceSinglePass===!1?(T.side=mn,T.needsUpdate=!0,la(T,G,K),T.side=cr,T.needsUpdate=!0,la(T,G,K),T.side=Mi):la(T,G,K)}this.compile=function(T,G,K=null){K===null&&(K=T),b=se.get(K),b.init(G),R.push(b),K.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),T!==K&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),b.setupLights();const $=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const me=Y.material;if(me)if(Array.isArray(me))for(let _e=0;_e<me.length;_e++){const ge=me[_e];Hh(ge,K,Y),$.add(ge)}else Hh(me,K,Y),$.add(me)}),b=R.pop(),$},this.compileAsync=function(T,G,K=null){const $=this.compile(T,G,K);return new Promise(Y=>{function me(){if($.forEach(function(_e){M.get(_e).currentProgram.isReady()&&$.delete(_e)}),$.size===0){Y(T);return}setTimeout(me,10)}Qe.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let yc=null;function yv(T){yc&&yc(T)}function Gh(){hr.stop()}function Wh(){hr.start()}const hr=new av;hr.setAnimationLoop(yv),typeof self<"u"&&hr.setContext(self),this.setAnimationLoop=function(T){yc=T,Q.setAnimationLoop(T),T===null?hr.stop():hr.start()},Q.addEventListener("sessionstart",Gh),Q.addEventListener("sessionend",Wh),this.render=function(T,G){if(G!==void 0&&G.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;const K=Q.enabled===!0&&Q.isPresenting===!0,$=_!==null&&(H===null||K)&&_.begin(w,H);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(_===null||_.isCompositing()===!1)&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(G),G=Q.getCamera()),T.isScene===!0&&T.onBeforeRender(w,T,G,H),b=se.get(T,R.length),b.init(G),R.push(b),ut.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ne.setFromProjectionMatrix(ut,si,G.reversedDepth),De=this.localClippingEnabled,Le=ue.init(this.clippingPlanes,De),S=Ie.get(T,A.length),S.init(),A.push(S),Q.enabled===!0&&Q.isPresenting===!0){const _e=w.xr.getDepthSensingMesh();_e!==null&&Sc(_e,G,-1/0,w.sortObjects)}Sc(T,G,0,w.sortObjects),S.finish(),w.sortObjects===!0&&S.sort(Oe,ce),Be=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Be&&Te.addToRenderList(S,T),this.info.render.frame++,Le===!0&&ue.beginShadows();const Y=b.state.shadowsArray;if(Ee.render(Y,T,G),Le===!0&&ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&_.hasRenderPass())===!1){const _e=S.opaque,ge=S.transmissive;if(b.setupLights(),G.isArrayCamera){const be=G.cameras;if(ge.length>0)for(let Ce=0,ze=be.length;Ce<ze;Ce++){const Xe=be[Ce];Xh(_e,ge,T,Xe)}Be&&Te.render(T);for(let Ce=0,ze=be.length;Ce<ze;Ce++){const Xe=be[Ce];jh(S,T,Xe,Xe.viewport)}}else ge.length>0&&Xh(_e,ge,T,G),Be&&Te.render(T),jh(S,T,G)}H!==null&&k===0&&(N.updateMultisampleRenderTarget(H),N.updateRenderTargetMipmap(H)),$&&_.end(w),T.isScene===!0&&T.onAfterRender(w,T,G),de.resetDefaultState(),W=-1,B=null,R.pop(),R.length>0?(b=R[R.length-1],Le===!0&&ue.setGlobalState(w.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?S=A[A.length-1]:S=null};function Sc(T,G,K,$){if(T.visible===!1)return;if(T.layers.test(G.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(G);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ne.intersectsSprite(T)){$&&$e.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ut);const _e=he.update(T),ge=T.material;ge.visible&&S.push(T,_e,ge,K,$e.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ne.intersectsObject(T))){const _e=he.update(T),ge=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),$e.copy(T.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),$e.copy(_e.boundingSphere.center)),$e.applyMatrix4(T.matrixWorld).applyMatrix4(ut)),Array.isArray(ge)){const be=_e.groups;for(let Ce=0,ze=be.length;Ce<ze;Ce++){const Xe=be[Ce],Pe=ge[Xe.materialIndex];Pe&&Pe.visible&&S.push(T,_e,Pe,K,$e.z,Xe)}}else ge.visible&&S.push(T,_e,ge,K,$e.z,null)}}const me=T.children;for(let _e=0,ge=me.length;_e<ge;_e++)Sc(me[_e],G,K,$)}function jh(T,G,K,$){const{opaque:Y,transmissive:me,transparent:_e}=T;b.setupLightsView(K),Le===!0&&ue.setGlobalState(w.clippingPlanes,K),$&&Me.viewport(C.copy($)),Y.length>0&&aa(Y,G,K),me.length>0&&aa(me,G,K),_e.length>0&&aa(_e,G,K),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Xh(T,G,K,$){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[$.id]===void 0){const Pe=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[$.id]=new ci(1,1,{generateMipmaps:!0,type:Pe?Ii:Sn,minFilter:Pr,samples:Math.max(4,He.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:et.workingColorSpace})}const me=b.state.transmissionRenderTarget[$.id],_e=$.viewport||C;me.setSize(_e.z*w.transmissionResolutionScale,_e.w*w.transmissionResolutionScale);const ge=w.getRenderTarget(),be=w.getActiveCubeFace(),Ce=w.getActiveMipmapLevel();w.setRenderTarget(me),w.getClearColor(O),X=w.getClearAlpha(),X<1&&w.setClearColor(16777215,.5),w.clear(),Be&&Te.render(K);const ze=w.toneMapping;w.toneMapping=li;const Xe=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),b.setupLightsView($),Le===!0&&ue.setGlobalState(w.clippingPlanes,$),aa(T,K,$),N.updateMultisampleRenderTarget(me),N.updateRenderTargetMipmap(me),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let at=0,Ct=G.length;at<Ct;at++){const bt=G[at],{object:lt,geometry:Yt,material:Ae,group:xn}=bt;if(Ae.side===Mi&&lt.layers.test($.layers)){const nt=Ae.side;Ae.side=mn,Ae.needsUpdate=!0,Yh(lt,K,$,Yt,Ae,xn),Ae.side=nt,Ae.needsUpdate=!0,Pe=!0}}Pe===!0&&(N.updateMultisampleRenderTarget(me),N.updateRenderTargetMipmap(me))}w.setRenderTarget(ge,be,Ce),w.setClearColor(O,X),Xe!==void 0&&($.viewport=Xe),w.toneMapping=ze}function aa(T,G,K){const $=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,me=T.length;Y<me;Y++){const _e=T[Y],{object:ge,geometry:be,group:Ce}=_e;let ze=_e.material;ze.allowOverride===!0&&$!==null&&(ze=$),ge.layers.test(K.layers)&&Yh(ge,G,K,be,ze,Ce)}}function Yh(T,G,K,$,Y,me){T.onBeforeRender(w,G,K,$,Y,me),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(w,G,K,$,T,me),Y.transparent===!0&&Y.side===Mi&&Y.forceSinglePass===!1?(Y.side=mn,Y.needsUpdate=!0,w.renderBufferDirect(K,G,$,Y,T,me),Y.side=cr,Y.needsUpdate=!0,w.renderBufferDirect(K,G,$,Y,T,me),Y.side=Mi):w.renderBufferDirect(K,G,$,Y,T,me),T.onAfterRender(w,G,K,$,Y,me)}function la(T,G,K){G.isScene!==!0&&(G=Je);const $=M.get(T),Y=b.state.lights,me=b.state.shadowsArray,_e=Y.state.version,ge=ne.getParameters(T,Y.state,me,G,K),be=ne.getProgramCacheKey(ge);let Ce=$.programs;$.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,$.fog=G.fog;const ze=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;$.envMap=q.get(T.envMap||$.environment,ze),$.envMapRotation=$.environment!==null&&T.envMap===null?G.environmentRotation:T.envMapRotation,Ce===void 0&&(T.addEventListener("dispose",rt),Ce=new Map,$.programs=Ce);let Xe=Ce.get(be);if(Xe!==void 0){if($.currentProgram===Xe&&$.lightsStateVersion===_e)return qh(T,ge),Xe}else ge.uniforms=ne.getUniforms(T),T.onBeforeCompile(ge,w),Xe=ne.acquireProgram(ge,be),Ce.set(be,Xe),$.uniforms=ge.uniforms;const Pe=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Pe.clippingPlanes=ue.uniform),qh(T,ge),$.needsLights=Ev(T),$.lightsStateVersion=_e,$.needsLights&&(Pe.ambientLightColor.value=Y.state.ambient,Pe.lightProbe.value=Y.state.probe,Pe.directionalLights.value=Y.state.directional,Pe.directionalLightShadows.value=Y.state.directionalShadow,Pe.spotLights.value=Y.state.spot,Pe.spotLightShadows.value=Y.state.spotShadow,Pe.rectAreaLights.value=Y.state.rectArea,Pe.ltc_1.value=Y.state.rectAreaLTC1,Pe.ltc_2.value=Y.state.rectAreaLTC2,Pe.pointLights.value=Y.state.point,Pe.pointLightShadows.value=Y.state.pointShadow,Pe.hemisphereLights.value=Y.state.hemi,Pe.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Pe.spotLightMatrix.value=Y.state.spotLightMatrix,Pe.spotLightMap.value=Y.state.spotLightMap,Pe.pointShadowMatrix.value=Y.state.pointShadowMatrix),$.currentProgram=Xe,$.uniformsList=null,Xe}function $h(T){if(T.uniformsList===null){const G=T.currentProgram.getUniforms();T.uniformsList=xl.seqWithValue(G.seq,T.uniforms)}return T.uniformsList}function qh(T,G){const K=M.get(T);K.outputColorSpace=G.outputColorSpace,K.batching=G.batching,K.batchingColor=G.batchingColor,K.instancing=G.instancing,K.instancingColor=G.instancingColor,K.instancingMorph=G.instancingMorph,K.skinning=G.skinning,K.morphTargets=G.morphTargets,K.morphNormals=G.morphNormals,K.morphColors=G.morphColors,K.morphTargetsCount=G.morphTargetsCount,K.numClippingPlanes=G.numClippingPlanes,K.numIntersection=G.numClipIntersection,K.vertexAlphas=G.vertexAlphas,K.vertexTangents=G.vertexTangents,K.toneMapping=G.toneMapping}function Sv(T,G,K,$,Y){G.isScene!==!0&&(G=Je),N.resetTextureUnits();const me=G.fog,_e=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?G.environment:null,ge=H===null?w.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:Hs,be=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,Ce=q.get($.envMap||_e,be),ze=$.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Xe=!!K.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Pe=!!K.morphAttributes.position,at=!!K.morphAttributes.normal,Ct=!!K.morphAttributes.color;let bt=li;$.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(bt=w.toneMapping);const lt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Yt=lt!==void 0?lt.length:0,Ae=M.get($),xn=b.state.lights;if(Le===!0&&(De===!0||T!==B)){const Ot=T===B&&$.id===W;ue.setState($,T,Ot)}let nt=!1;$.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==xn.state.version||Ae.outputColorSpace!==ge||Y.isBatchedMesh&&Ae.batching===!1||!Y.isBatchedMesh&&Ae.batching===!0||Y.isBatchedMesh&&Ae.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ae.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ae.instancing===!1||!Y.isInstancedMesh&&Ae.instancing===!0||Y.isSkinnedMesh&&Ae.skinning===!1||!Y.isSkinnedMesh&&Ae.skinning===!0||Y.isInstancedMesh&&Ae.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ae.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ae.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ae.instancingMorph===!1&&Y.morphTexture!==null||Ae.envMap!==Ce||$.fog===!0&&Ae.fog!==me||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==ue.numPlanes||Ae.numIntersection!==ue.numIntersection)||Ae.vertexAlphas!==ze||Ae.vertexTangents!==Xe||Ae.morphTargets!==Pe||Ae.morphNormals!==at||Ae.morphColors!==Ct||Ae.toneMapping!==bt||Ae.morphTargetsCount!==Yt)&&(nt=!0):(nt=!0,Ae.__version=$.version);let Un=Ae.currentProgram;nt===!0&&(Un=la($,G,Y));let qn=!1,pr=!1,jr=!1;const ct=Un.getUniforms(),Ht=Ae.uniforms;if(Me.useProgram(Un.program)&&(qn=!0,pr=!0,jr=!0),$.id!==W&&(W=$.id,pr=!0),qn||B!==T){Me.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),ct.setValue(F,"projectionMatrix",T.projectionMatrix),ct.setValue(F,"viewMatrix",T.matrixWorldInverse);const Oi=ct.map.cameraPosition;Oi!==void 0&&Oi.setValue(F,We.setFromMatrixPosition(T.matrixWorld)),He.logarithmicDepthBuffer&&ct.setValue(F,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ct.setValue(F,"isOrthographic",T.isOrthographicCamera===!0),B!==T&&(B=T,pr=!0,jr=!0)}if(Ae.needsLights&&(xn.state.directionalShadowMap.length>0&&ct.setValue(F,"directionalShadowMap",xn.state.directionalShadowMap,N),xn.state.spotShadowMap.length>0&&ct.setValue(F,"spotShadowMap",xn.state.spotShadowMap,N),xn.state.pointShadowMap.length>0&&ct.setValue(F,"pointShadowMap",xn.state.pointShadowMap,N)),Y.isSkinnedMesh){ct.setOptional(F,Y,"bindMatrix"),ct.setOptional(F,Y,"bindMatrixInverse");const Ot=Y.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),ct.setValue(F,"boneTexture",Ot.boneTexture,N))}Y.isBatchedMesh&&(ct.setOptional(F,Y,"batchingTexture"),ct.setValue(F,"batchingTexture",Y._matricesTexture,N),ct.setOptional(F,Y,"batchingIdTexture"),ct.setValue(F,"batchingIdTexture",Y._indirectTexture,N),ct.setOptional(F,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ct.setValue(F,"batchingColorTexture",Y._colorsTexture,N));const Fi=K.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&xe.update(Y,K,Un),(pr||Ae.receiveShadow!==Y.receiveShadow)&&(Ae.receiveShadow=Y.receiveShadow,ct.setValue(F,"receiveShadow",Y.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&G.environment!==null&&(Ht.envMapIntensity.value=G.environmentIntensity),Ht.dfgLUT!==void 0&&(Ht.dfgLUT.value=fT()),pr&&(ct.setValue(F,"toneMappingExposure",w.toneMappingExposure),Ae.needsLights&&Mv(Ht,jr),me&&$.fog===!0&&Re.refreshFogUniforms(Ht,me),Re.refreshMaterialUniforms(Ht,$,ve,ee,b.state.transmissionRenderTarget[T.id]),xl.upload(F,$h(Ae),Ht,N)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(xl.upload(F,$h(Ae),Ht,N),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ct.setValue(F,"center",Y.center),ct.setValue(F,"modelViewMatrix",Y.modelViewMatrix),ct.setValue(F,"normalMatrix",Y.normalMatrix),ct.setValue(F,"modelMatrix",Y.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Ot=$.uniformsGroups;for(let Oi=0,Xr=Ot.length;Oi<Xr;Oi++){const Kh=Ot[Oi];Se.update(Kh,Un),Se.bind(Kh,Un)}}return Un}function Mv(T,G){T.ambientLightColor.needsUpdate=G,T.lightProbe.needsUpdate=G,T.directionalLights.needsUpdate=G,T.directionalLightShadows.needsUpdate=G,T.pointLights.needsUpdate=G,T.pointLightShadows.needsUpdate=G,T.spotLights.needsUpdate=G,T.spotLightShadows.needsUpdate=G,T.rectAreaLights.needsUpdate=G,T.hemisphereLights.needsUpdate=G}function Ev(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(T,G,K){const $=M.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),M.get(T.texture).__webglTexture=G,M.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:K,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,G){const K=M.get(T);K.__webglFramebuffer=G,K.__useDefaultFramebuffer=G===void 0};const wv=F.createFramebuffer();this.setRenderTarget=function(T,G=0,K=0){H=T,D=G,k=K;let $=null,Y=!1,me=!1;if(T){const ge=M.get(T);if(ge.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(F.FRAMEBUFFER,ge.__webglFramebuffer),C.copy(T.viewport),U.copy(T.scissor),L=T.scissorTest,Me.viewport(C),Me.scissor(U),Me.setScissorTest(L),W=-1;return}else if(ge.__webglFramebuffer===void 0)N.setupRenderTarget(T);else if(ge.__hasExternalTextures)N.rebindTextures(T,M.get(T.texture).__webglTexture,M.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const ze=T.depthTexture;if(ge.__boundDepthTexture!==ze){if(ze!==null&&M.has(ze)&&(T.width!==ze.image.width||T.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(T)}}const be=T.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(me=!0);const Ce=M.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ce[G])?$=Ce[G][K]:$=Ce[G],Y=!0):T.samples>0&&N.useMultisampledRTT(T)===!1?$=M.get(T).__webglMultisampledFramebuffer:Array.isArray(Ce)?$=Ce[K]:$=Ce,C.copy(T.viewport),U.copy(T.scissor),L=T.scissorTest}else C.copy(j).multiplyScalar(ve).floor(),U.copy(ie).multiplyScalar(ve).floor(),L=le;if(K!==0&&($=wv),Me.bindFramebuffer(F.FRAMEBUFFER,$)&&Me.drawBuffers(T,$),Me.viewport(C),Me.scissor(U),Me.setScissorTest(L),Y){const ge=M.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+G,ge.__webglTexture,K)}else if(me){const ge=G;for(let be=0;be<T.textures.length;be++){const Ce=M.get(T.textures[be]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+be,Ce.__webglTexture,K,ge)}}else if(T!==null&&K!==0){const ge=M.get(T.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,ge.__webglTexture,K)}W=-1},this.readRenderTargetPixels=function(T,G,K,$,Y,me,_e,ge=0){if(!(T&&T.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be){Me.bindFramebuffer(F.FRAMEBUFFER,be);try{const Ce=T.textures[ge],ze=Ce.format,Xe=Ce.type;if(T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ge),!He.textureFormatReadable(ze)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Xe)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=T.width-$&&K>=0&&K<=T.height-Y&&F.readPixels(G,K,$,Y,fe.convert(ze),fe.convert(Xe),me)}finally{const Ce=H!==null?M.get(H).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(T,G,K,$,Y,me,_e,ge=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=M.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&_e!==void 0&&(be=be[_e]),be)if(G>=0&&G<=T.width-$&&K>=0&&K<=T.height-Y){Me.bindFramebuffer(F.FRAMEBUFFER,be);const Ce=T.textures[ge],ze=Ce.format,Xe=Ce.type;if(T.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+ge),!He.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Xe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Pe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Pe),F.bufferData(F.PIXEL_PACK_BUFFER,me.byteLength,F.STREAM_READ),F.readPixels(G,K,$,Y,fe.convert(ze),fe.convert(Xe),0);const at=H!==null?M.get(H).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,at);const Ct=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await OS(F,Ct,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Pe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,me),F.deleteBuffer(Pe),F.deleteSync(Ct),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,G=null,K=0){const $=Math.pow(2,-K),Y=Math.floor(T.image.width*$),me=Math.floor(T.image.height*$),_e=G!==null?G.x:0,ge=G!==null?G.y:0;N.setTexture2D(T,0),F.copyTexSubImage2D(F.TEXTURE_2D,K,0,0,_e,ge,Y,me),Me.unbindTexture()};const Tv=F.createFramebuffer(),bv=F.createFramebuffer();this.copyTextureToTexture=function(T,G,K=null,$=null,Y=0,me=0){let _e,ge,be,Ce,ze,Xe,Pe,at,Ct;const bt=T.isCompressedTexture?T.mipmaps[me]:T.image;if(K!==null)_e=K.max.x-K.min.x,ge=K.max.y-K.min.y,be=K.isBox3?K.max.z-K.min.z:1,Ce=K.min.x,ze=K.min.y,Xe=K.isBox3?K.min.z:0;else{const Ht=Math.pow(2,-Y);_e=Math.floor(bt.width*Ht),ge=Math.floor(bt.height*Ht),T.isDataArrayTexture?be=bt.depth:T.isData3DTexture?be=Math.floor(bt.depth*Ht):be=1,Ce=0,ze=0,Xe=0}$!==null?(Pe=$.x,at=$.y,Ct=$.z):(Pe=0,at=0,Ct=0);const lt=fe.convert(G.format),Yt=fe.convert(G.type);let Ae;G.isData3DTexture?(N.setTexture3D(G,0),Ae=F.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(N.setTexture2DArray(G,0),Ae=F.TEXTURE_2D_ARRAY):(N.setTexture2D(G,0),Ae=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,G.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,G.unpackAlignment);const xn=F.getParameter(F.UNPACK_ROW_LENGTH),nt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Un=F.getParameter(F.UNPACK_SKIP_PIXELS),qn=F.getParameter(F.UNPACK_SKIP_ROWS),pr=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,bt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,bt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ce),F.pixelStorei(F.UNPACK_SKIP_ROWS,ze),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Xe);const jr=T.isDataArrayTexture||T.isData3DTexture,ct=G.isDataArrayTexture||G.isData3DTexture;if(T.isDepthTexture){const Ht=M.get(T),Fi=M.get(G),Ot=M.get(Ht.__renderTarget),Oi=M.get(Fi.__renderTarget);Me.bindFramebuffer(F.READ_FRAMEBUFFER,Ot.__webglFramebuffer),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,Oi.__webglFramebuffer);for(let Xr=0;Xr<be;Xr++)jr&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,M.get(T).__webglTexture,Y,Xe+Xr),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,M.get(G).__webglTexture,me,Ct+Xr)),F.blitFramebuffer(Ce,ze,_e,ge,Pe,at,_e,ge,F.DEPTH_BUFFER_BIT,F.NEAREST);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||M.has(T)){const Ht=M.get(T),Fi=M.get(G);Me.bindFramebuffer(F.READ_FRAMEBUFFER,Tv),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,bv);for(let Ot=0;Ot<be;Ot++)jr?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ht.__webglTexture,Y,Xe+Ot):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ht.__webglTexture,Y),ct?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Fi.__webglTexture,me,Ct+Ot):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Fi.__webglTexture,me),Y!==0?F.blitFramebuffer(Ce,ze,_e,ge,Pe,at,_e,ge,F.COLOR_BUFFER_BIT,F.NEAREST):ct?F.copyTexSubImage3D(Ae,me,Pe,at,Ct+Ot,Ce,ze,_e,ge):F.copyTexSubImage2D(Ae,me,Pe,at,Ce,ze,_e,ge);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ct?T.isDataTexture||T.isData3DTexture?F.texSubImage3D(Ae,me,Pe,at,Ct,_e,ge,be,lt,Yt,bt.data):G.isCompressedArrayTexture?F.compressedTexSubImage3D(Ae,me,Pe,at,Ct,_e,ge,be,lt,bt.data):F.texSubImage3D(Ae,me,Pe,at,Ct,_e,ge,be,lt,Yt,bt):T.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,me,Pe,at,_e,ge,lt,Yt,bt.data):T.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,me,Pe,at,bt.width,bt.height,lt,bt.data):F.texSubImage2D(F.TEXTURE_2D,me,Pe,at,_e,ge,lt,Yt,bt);F.pixelStorei(F.UNPACK_ROW_LENGTH,xn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,nt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Un),F.pixelStorei(F.UNPACK_SKIP_ROWS,qn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,pr),me===0&&G.generateMipmaps&&F.generateMipmap(Ae),Me.unbindTexture()},this.initRenderTarget=function(T){M.get(T).__webglFramebuffer===void 0&&N.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?N.setTextureCube(T,0):T.isData3DTexture?N.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?N.setTexture2DArray(T,0):N.setTexture2D(T,0),Me.unbindTexture()},this.resetState=function(){D=0,k=0,H=null,Me.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}}const hT=`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');

  .lp-root {
    position: fixed; inset: 0; background: #050510;
    overflow: hidden; cursor: pointer;
    font-family: 'Inter', sans-serif;
  }

  /* Scanlines overlay */
  .lp-scanlines {
    position: absolute; inset: 0; z-index: 2; pointer-events: none;
    background: repeating-linear-gradient(
      0deg,
      transparent,
      transparent 2px,
      rgba(0,0,0,0.08) 2px,
      rgba(0,0,0,0.08) 4px
    );
  }

  /* Vignette */
  .lp-vignette {
    position: absolute; inset: 0; z-index: 2; pointer-events: none;
    background: radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(0,0,0,0.75) 100%);
  }

  /* HTML content layer */
  .lp-overlay {
    position: absolute; inset: 0; z-index: 10;
    display: flex; flex-direction: column;
    align-items: center; justify-content: flex-end;
    padding-bottom: clamp(40px, 8vh, 80px);
    pointer-events: none;
  }

  /* Brand block */
  .lp-brand {
    text-align: center;
    animation: lpFadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.3s both;
  }

  .lp-eyebrow {
    font-size: 11px; font-weight: 700;
    letter-spacing: 5px; text-transform: uppercase;
    color: #dc2626; margin-bottom: 12px;
    text-shadow: 0 0 20px rgba(220,38,38,0.8);
  }

  .lp-title {
    font-size: clamp(56px, 10vw, 120px);
    font-weight: 900; line-height: 0.9;
    letter-spacing: -0.05em;
    color: #22c55e;
    text-shadow: 0 0 40px rgba(34,197,94,0.5), 0 0 80px rgba(34,197,94,0.2);
    margin-bottom: 8px;
  }

  .lp-subtitle {
    font-size: clamp(14px, 2vw, 20px);
    font-weight: 700; letter-spacing: 4px;
    text-transform: uppercase; color: #dc2626;
    text-shadow: 0 0 20px rgba(220,38,38,0.6);
    margin-bottom: 32px;
  }

  .lp-desc {
    font-size: 13px; color: rgba(255,255,255,0.35);
    letter-spacing: 1px; margin-bottom: 36px;
    max-width: 380px; margin-left: auto; margin-right: auto;
  }

  /* CTA button */
  .lp-btn {
    pointer-events: all;
    display: inline-flex; align-items: center; gap: 12px;
    padding: 14px 36px; border-radius: 40px;
    background: transparent;
    border: 1.5px solid rgba(34,197,94,0.5);
    color: #22c55e; font-size: 12px; font-weight: 700;
    letter-spacing: 3px; text-transform: uppercase;
    cursor: pointer;
    transition: all 0.3s ease;
    text-shadow: 0 0 12px rgba(34,197,94,0.5);
    box-shadow: 0 0 20px rgba(34,197,94,0.1), inset 0 0 20px rgba(34,197,94,0.05);
    animation: lpFadeUp 1s cubic-bezier(0.16,1,0.3,1) 0.6s both;
  }
  .lp-btn:hover {
    background: rgba(34,197,94,0.12);
    border-color: #22c55e;
    box-shadow: 0 0 40px rgba(34,197,94,0.25), inset 0 0 20px rgba(34,197,94,0.1);
    transform: translateY(-2px);
  }
  .lp-btn-dot {
    width: 6px; height: 6px; border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 8px #22c55e;
    animation: lpBlink 1s ease-in-out infinite;
  }

  /* Top corner badge */
  .lp-badge {
    position: absolute; top: 28px; left: 32px; z-index: 10;
    display: flex; align-items: center; gap: 8px;
    pointer-events: none;
    animation: lpFadeIn 1s ease 0.1s both;
  }
  .lp-badge-cross {
    display: flex; align-items: center; justify-content: center;
    width: 28px; height: 28px;
  }
  .lp-badge-text {
    font-size: 9px; font-weight: 700; letter-spacing: 3px;
    text-transform: uppercase; color: rgba(255,255,255,0.4);
  }

  /* Click hint */
  .lp-hint {
    position: absolute; bottom: 28px; right: 32px; z-index: 10;
    font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
    color: rgba(255,255,255,0.18);
    animation: lpFadeIn 2s ease 1.5s both;
    pointer-events: none;
  }

  /* Neon grid lines top-right decoration */
  .lp-grid-deco {
    position: absolute; top: 0; right: 0;
    width: 200px; height: 200px; z-index: 3; pointer-events: none;
    opacity: 0.15;
    background:
      linear-gradient(rgba(34,197,94,0.4) 1px, transparent 1px),
      linear-gradient(90deg, rgba(34,197,94,0.4) 1px, transparent 1px);
    background-size: 24px 24px;
    mask-image: radial-gradient(ellipse at top right, black 0%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at top right, black 0%, transparent 70%);
  }
  .lp-grid-deco-bl {
    position: absolute; bottom: 0; left: 0;
    width: 160px; height: 160px; z-index: 3; pointer-events: none;
    opacity: 0.1;
    background:
      linear-gradient(rgba(220,38,38,0.4) 1px, transparent 1px),
      linear-gradient(90deg, rgba(220,38,38,0.4) 1px, transparent 1px);
    background-size: 20px 20px;
    mask-image: radial-gradient(ellipse at bottom left, black 0%, transparent 70%);
    -webkit-mask-image: radial-gradient(ellipse at bottom left, black 0%, transparent 70%);
  }

  /* Fade-out transition */
  .lp-fadeout {
    position: absolute; inset: 0; z-index: 100;
    background: #050510; opacity: 0;
    pointer-events: none;
    transition: opacity 0.6s ease;
  }
  .lp-fadeout.active { opacity: 1; pointer-events: all; }

  @keyframes lpFadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes lpFadeIn {
    from { opacity: 0; } to { opacity: 1; }
  }
  @keyframes lpBlink {
    0%,100% { opacity: 1; } 50% { opacity: 0.2; }
  }
`;function pT({onEnter:t}){const e=oe.useRef(null),n=oe.useRef(null),[i,r]=oe.useState(!1);function s(){i||(r(!0),n.current&&n.current.classList.add("active"),setTimeout(t,650))}return oe.useEffect(()=>{const o=e.current;if(!o)return;const a=new kh({antialias:!0,alpha:!1});a.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),a.setSize(o.offsetWidth,o.offsetHeight),a.setClearColor(328976,1),a.shadowMap.enabled=!0,o.appendChild(a.domElement);const l=new Ih;l.fog=new gc(328976,.018);const c=new rn(55,o.offsetWidth/o.offsetHeight,.1,300);c.position.set(0,3,22),c.lookAt(0,1,0),l.add(new ov(1118498,2));const f=new Ss(2278750,8,20);f.position.set(0,4,6),l.add(f);const h=new Ss(14427686,4,15);h.position.set(-6,6,4),l.add(h);const d=new Ef(4491519,1.5);d.position.set(8,10,5),l.add(d);const m=new ys;l.add(m);const x=new Gn({color:1713461,metalness:.8,roughness:.3}),y=new Gn({color:857376,metalness:.9,roughness:.2}),g=new Gn({color:2278750,emissive:2278750,emissiveIntensity:1.2,metalness:0,roughness:.5}),u=new Gn({color:14427686,emissive:14427686,emissiveIntensity:1,metalness:0,roughness:.5}),p=new Ls({color:2278750,linewidth:1}),v=new Ue(new gt(3.6,2.8,1.8),x);v.position.set(0,.2,0),m.add(v);const S=[];for(let N=0;N<14;N++){const q=(Math.random()-.5)*3.2,te=(Math.random()-.5)*2.4,Z=Math.random()>.5;S.push(new V(q,te,.91)),S.push(new V(Z?q+.6*(Math.random()>.5?1:-1):q,Z?te:te+.5*(Math.random()>.5?1:-1),.91));const he=new Ue(new gt(.07,.07,.01),g);he.position.set(q,te,.91),v.add(he)}const b=new St().setFromPoints(S),A=new Mu(b,p);v.add(A);const R=new Ue(new gt(.12,.7,.05),u);R.position.set(0,.2,.92),v.add(R);const _=new Ue(new gt(.7,.12,.05),u);_.position.set(0,.2,.92),v.add(_);for(let N=0;N<3;N++){const q=new Ue(new gt(1,.1,.06),y);q.position.set(-.8,-.4+N*.3,.92),v.add(q)}const w=new Ue(new ti(.35,.42,.55,8),y);w.position.set(0,1.7,0),m.add(w);const I=new ys;I.position.set(0,2.6,0),m.add(I);const D=new Ue(new gt(2.6,2.2,2.2),x);I.add(D);const k=new Ue(new gt(2,1,.25),y);k.position.set(0,.1,1.1),I.add(k);const H=new Ue(new gt(1.3,.3,.12),g);H.position.set(0,.1,1.23),I.add(H);const W=new Ss(2278750,6,5);W.position.set(0,.1,1),I.add(W);for(const N of[-1,1]){const q=new Ue(new gt(.15,.8,1),y);q.position.set(N*1.37,0,0),I.add(q);const te=new Ue(new ti(.06,.06,.3,6),g);te.position.set(N*1.37,.6,0),I.add(te)}const B=new Ue(new ti(.1,.14,.3,8),y);B.position.set(.5,1.15,0),I.add(B);const C=new Ue(new ti(.05,.05,1.4,8),u);C.position.set(.5,1.95,0),I.add(C);const U=new Ue(new Dr(.14,8,8),u);U.position.set(.5,2.7,0),I.add(U);const L=new Ss(14427686,3,4);L.position.set(.5,2.7,0),I.add(L);for(const N of[-1,1]){const q=new Ue(new Dr(.42,8,8),y);q.position.set(N*2.1,.4,0),m.add(q);const te=new Ue(new ti(.28,.22,1.4,8),x);te.position.set(N*2.4,-.3,0),m.add(te);const Z=new Ue(new Dr(.25,8,8),y);Z.position.set(N*2.55,-1.1,0),m.add(Z);const he=new Ue(new ti(.22,.16,1.1,8),x);he.position.set(N*2.7,-1.8,0),m.add(he);const ne=new Ue(new gt(.5,.5,.35),y);ne.position.set(N*2.85,-2.5,0),m.add(ne)}const O=new Ue(new gt(2.8,.5,1.5),y);O.position.set(0,-1.6,0),m.add(O);for(const N of[-1,1]){const q=new Ue(new ti(.45,.38,1.6,8),x);q.position.set(N*.85,-2.7,0),m.add(q);const te=new Ue(new Dr(.38,8,8),y);te.position.set(N*.85,-3.6,0),m.add(te);const Z=new Ue(new ti(.35,.28,1.4,8),x);Z.position.set(N*.85,-4.4,0),m.add(Z);const he=new Ue(new gt(.8,.35,1.2),y);he.position.set(N*.85,-5.3,.2),m.add(he)}const X=new Ue(new Gs(2.2,.05,8,60),new Gn({color:2278750,emissive:2278750,emissiveIntensity:2,metalness:0,roughness:.5}));X.position.set(0,3,0),X.rotation.x=Math.PI/2,m.add(X);const J=new Ue(new Gs(1.4,.03,8,60),new Gn({color:14427686,emissive:14427686,emissiveIntensity:1.5}));J.position.set(0,3,0),J.rotation.x=Math.PI/2,m.add(J),m.position.set(0,-1,0);const ee=30,ve=2,Oe=[];for(let N=-ee;N<=ee;N+=ve)Oe.push(new V(-ee,0,N),new V(ee,0,N)),Oe.push(new V(N,0,-ee),new V(N,0,ee));const ce=new St().setFromPoints(Oe),j=new Ls({color:1483594,transparent:!0,opacity:.18}),ie=new Mu(ce,j);ie.position.y=-6.5,l.add(ie);const le=[new V(-ee,0,0),new V(ee,0,0),new V(0,0,-ee),new V(0,0,ee)],Ne=new St().setFromPoints(le),Le=new Mu(Ne,new Ls({color:2278750,transparent:!0,opacity:.5}));Le.position.y=-6.5,l.add(Le);const De=180,ut=new Float32Array(De*3),We=new Float32Array(De),$e=new Float32Array(De*3);for(let N=0;N<De;N++){ut[N*3]=(Math.random()-.5)*40,ut[N*3+1]=(Math.random()-.5)*24-6,ut[N*3+2]=(Math.random()-.5)*30-5,We[N]=.02+Math.random()*.04;const q=Math.random()>.35;$e[N*3]=q?.13:.86,$e[N*3+1]=q?.77:.15,$e[N*3+2]=q?.37:.09}const Je=new St;Je.setAttribute("position",new gn(ut,3)),Je.setAttribute("color",new gn($e,3));const Be=new Mf(Je,new ql({size:.08,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.7}));l.add(Be);const dt={x:0,y:0},F=N=>{dt.x=(N.clientX/window.innerWidth-.5)*2,dt.y=(N.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",F);const _t=()=>{c.aspect=o.offsetWidth/o.offsetHeight,c.updateProjectionMatrix(),a.setSize(o.offsetWidth,o.offsetHeight)};window.addEventListener("resize",_t);let Qe,He=0,Me=performance.now();const P={x:0,y:0};function M(){Qe=requestAnimationFrame(M);const N=performance.now(),q=Math.min((N-Me)/1e3,.05);He+=q,Me=N,m.position.y=-1+Math.sin(He*.9)*.18,P.y+=(dt.x*.38-P.y)*.06,P.x+=(-dt.y*.22-P.x)*.06,I.rotation.y=P.y,I.rotation.x=P.x,m.rotation.y=Math.sin(He*.3)*.06;const te=Math.sin(He*1.4)*.12;m.children.forEach((ne,Re)=>{Re>=10&&Re<=13&&(ne.rotation.x=te*(Re%2===0?1:-1))}),X.rotation.z=He*.6,J.rotation.z=-He*.9;const Z=1+Math.sin(He*3)*.12;U.scale.setScalar(Z),L.intensity=2+Math.sin(He*3)*1.5,W.intensity=5+Math.sin(He*7.3)*1.5,f.position.x=Math.sin(He*.5)*6,f.position.z=Math.cos(He*.5)*6+4;const he=Je.attributes.position.array;for(let ne=0;ne<De;ne++)he[ne*3+1]+=We[ne],he[ne*3+1]>12&&(he[ne*3+1]=-10,he[ne*3]=(Math.random()-.5)*40,he[ne*3+2]=(Math.random()-.5)*30-5);Je.attributes.position.needsUpdate=!0,c.position.x=Math.sin(He*.12)*1.2,c.position.y=3+Math.sin(He*.18)*.4,c.lookAt(0,1.5,0),a.render(l,c)}return M(),()=>{cancelAnimationFrame(Qe),window.removeEventListener("mousemove",F),window.removeEventListener("resize",_t),a.dispose(),o.contains(a.domElement)&&o.removeChild(a.domElement)}},[]),E.jsxs(E.Fragment,{children:[E.jsx("style",{children:hT}),E.jsxs("div",{className:"lp-root",onClick:s,children:[E.jsx("div",{ref:e,style:{position:"absolute",inset:0,zIndex:1}}),E.jsx("div",{className:"lp-scanlines"}),E.jsx("div",{className:"lp-vignette"}),E.jsx("div",{className:"lp-grid-deco"}),E.jsx("div",{className:"lp-grid-deco-bl"}),E.jsxs("div",{className:"lp-badge",children:[E.jsx("div",{className:"lp-badge-cross",children:E.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[E.jsx("rect",{x:"8",y:"0",width:"4",height:"20",rx:"1.5",fill:"#dc2626",fillOpacity:"0.8"}),E.jsx("rect",{x:"0",y:"8",width:"20",height:"4",rx:"1.5",fill:"#dc2626",fillOpacity:"0.8"})]})}),E.jsx("span",{className:"lp-badge-text",children:"Eden Care — Medical AI"})]}),E.jsx("div",{className:"lp-overlay",children:E.jsxs("div",{className:"lp-brand",children:[E.jsx("div",{className:"lp-eyebrow",children:"by Eden Care"}),E.jsx("div",{className:"lp-title",children:"GINJA AI"}),E.jsx("div",{className:"lp-subtitle",children:"Medical Code Intelligence"}),E.jsx("div",{className:"lp-desc",children:"Insurance catalog processing pipeline · 7 AI modules · SHA-256 secured"}),E.jsxs("button",{className:"lp-btn",onClick:o=>{o.stopPropagation(),s()},children:[E.jsx("span",{className:"lp-btn-dot"}),"ENTER SYSTEM"]})]})}),E.jsx("div",{className:"lp-hint",children:"Click anywhere to enter"}),E.jsx("div",{ref:n,className:"lp-fadeout"})]})]})}const hv="Muthigani",mT=[{username:"Muthigani",passwordHash:"c62b2152b8513d4c0c03ca8ba2716a45dc7e5227c1b051e50c765c8c97eddf25",role:"SUPER_ADMIN"}],vl="eden_session_v2",zh="eden_login_attempts",_l=5,bf=15*60*1e3,pv="eden_users_v2";function Bh(){try{const t=localStorage.getItem(pv);return t?JSON.parse(atob(t)):[]}catch{return[]}}function mv(t){try{const e=t.filter(n=>n.username.toLowerCase()!==hv.toLowerCase());localStorage.setItem(pv,btoa(JSON.stringify(e)))}catch{}}function _c(){return[...mT,...Bh()]}function gT(t){return _c().find(e=>e.username.toLowerCase()===t.trim().toLowerCase())}function xT(t,e){if(_c().some(r=>r.username.toLowerCase()===t.trim().toLowerCase()))throw new Error(`Username "${t}" is already taken.`);const i=Bh();i.push({username:t.trim(),passwordHash:e,role:"USER"}),mv(i)}function vT(t){if(t.toLowerCase()===hv.toLowerCase())throw new Error("Cannot remove the super admin.");const e=Bh().filter(n=>n.username.toLowerCase()!==t.toLowerCase());mv(e)}async function _T(t){const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return Array.from(new Uint8Array(e)).map(n=>n.toString(16).padStart(2,"0")).join("")}function gv(){const t=oe.useRef(null);return oe.useEffect(()=>{const e=t.current;if(!e)return;const n=new kh({antialias:!0,alpha:!1});n.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),n.setSize(window.innerWidth,window.innerHeight),n.setClearColor(16054008,1),e.appendChild(n.domElement);const i=new Ih;i.fog=new gc(16054008,.038);const r=new rn(60,window.innerWidth/window.innerHeight,.1,200);r.position.set(0,0,28);const s=new Ps({color:1483594,wireframe:!0}),o=new Ps({color:14427686,wireframe:!0}),a=new Ps({color:13421772,wireframe:!0}),l=[],c=[[new Tr(2.2,0),s,[-14,5,-5],1],[new Tr(1.4,0),o,[12,-3,-8],.8],[new Tr(3,0),a,[-6,-8,-15],.5],[new Po(1.8,0),s,[16,7,-10],.9],[new Po(2.5,0),a,[0,10,-12],.4],[new Kl(2,0),s,[-18,-5,-8],.7],[new Kl(1.2,0),o,[8,-9,-6],1.1],[new Tr(1.6,1),a,[-10,12,-18],.3],[new Po(1,0),s,[20,-8,-12],.6],[new Tr(.8,0),o,[-4,-12,-4],1.3],[new Gs(1.5,.06,6,20),s,[-20,8,-6],.5],[new Gs(2.2,.06,5,16),a,[6,14,-20],.3]];for(const[B,C,U,L]of c){const O=new Ue(B,C);O.position.set(...U),O.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),i.add(O),l.push({mesh:O,rx:(Math.random()-.5)*.006*L,ry:(Math.random()-.5)*.008*L,rz:(Math.random()-.5)*.004*L,drift:new V((Math.random()-.5)*.004,(Math.random()-.5)*.003,0)})}function f(){const B=[];for(let L=0;L<400;L++){const O=L/400*40-20;let X=0;const J=(O%5+5)%5;J<.2?X=Math.sin(J*Math.PI/.2)*.3:J<.6?X=0:J<.65?X=-.5:J<.72?X=Math.sin((J-.65)*Math.PI/.07)*3.5:J<.78?X=-.4:J<1.5?X=Math.sin((J-.78)*Math.PI/.72)*.6:X=0,B.push(new V(O,X-8,-2))}return new St().setFromPoints(B)}const h=new yf(f(),new Ls({color:1483594,linewidth:1,transparent:!0,opacity:.5}));i.add(h);function d(){const B=[];for(let L=0;L<300;L++){const O=L/300*40-20,X=(O%4+4)%4;let J=0;X<.1?J=Math.sin(X*Math.PI/.1)*.2:X<.4?J=0:X<.45?J=-.3:X<.5?J=Math.sin((X-.45)*Math.PI/.05)*2.2:X<.55?J=-.25:X<1.2?J=Math.sin((X-.55)*Math.PI/.65)*.4:J=0,B.push(new V(O,J+9,-8))}return new St().setFromPoints(B)}const m=new yf(d(),new Ls({color:14427686,linewidth:1,transparent:!0,opacity:.3}));i.add(m);const x=120,y=new Float32Array(x*3);for(let B=0;B<x;B++)y[B*3]=(Math.random()-.5)*60,y[B*3+1]=(Math.random()-.5)*40,y[B*3+2]=(Math.random()-.5)*30-10;const g=new St;g.setAttribute("position",new gn(y,3));const u=new Mf(g,new ql({color:1483594,size:.12,sizeAttenuation:!0,transparent:!0,opacity:.5}));i.add(u);const p=200,v=new Float32Array(p*3);for(let B=0;B<p;B++)v[B*3]=(Math.random()-.5)*70,v[B*3+1]=(Math.random()-.5)*50,v[B*3+2]=(Math.random()-.5)*40-15;const S=new St;S.setAttribute("position",new gn(v,3));const b=new Mf(S,new ql({color:11184810,size:.06,sizeAttenuation:!0,transparent:!0,opacity:.3}));i.add(b);const A={x:0,y:0},R={x:0,y:0},_=B=>{A.x=(B.clientX/window.innerWidth-.5)*2,A.y=(B.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",_);let w=0;const I=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",I);let D,k=0,H=performance.now();function W(){D=requestAnimationFrame(W);const B=performance.now();k+=(B-H)/1e3,H=B;for(const C of l)C.mesh.rotation.x+=C.rx,C.mesh.rotation.y+=C.ry,C.mesh.rotation.z+=C.rz,C.mesh.position.x+=C.drift.x,C.mesh.position.y+=C.drift.y,C.mesh.position.x>25&&(C.drift.x*=-1),C.mesh.position.x<-25&&(C.drift.x*=-1),C.mesh.position.y>18&&(C.drift.y*=-1),C.mesh.position.y<-18&&(C.drift.y*=-1);w-=.015,h.position.x=w%5,m.position.x=w*.7%4,u.rotation.y=k*.04,b.rotation.y=-k*.025,R.x+=(A.y*.04-R.x)*.04,R.y+=(A.x*.06-R.y)*.04,i.rotation.x=R.x,i.rotation.y=R.y,n.render(i,r)}return W(),()=>{cancelAnimationFrame(D),window.removeEventListener("mousemove",_),window.removeEventListener("resize",I),n.dispose(),e.contains(n.domElement)&&e.removeChild(n.domElement)}},[]),E.jsx("div",{ref:t,style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"}})}async function yT(t){const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return Array.from(new Uint8Array(e)).map(n=>n.toString(16).padStart(2,"0")).join("")}function Zl(){try{return JSON.parse(localStorage.getItem(zh)||'{"attempts":[],"lockedUntil":0}')}catch{return{attempts:[],lockedUntil:0}}}function Ja(){const t=Zl(),e=Date.now();return t.lockedUntil>e?{locked:!0,remainingMs:t.lockedUntil-e}:{locked:!1,remainingMs:0}}function ST(){const t=Zl(),e=Date.now();t.attempts=[...(t.attempts||[]).filter(n=>e-n<bf),e],t.attempts.length>=_l&&(t.lockedUntil=e+bf),localStorage.setItem(zh,JSON.stringify(t))}function MT(){localStorage.removeItem(zh)}function u0(t){const e=Math.ceil(t/1e3);return e>=60?Math.ceil(e/60)+"m":e+"s"}const ET=`
  /* 3D tilt card */
  .ls-tilt { transform-style: preserve-3d; transition: transform 0.1s ease; will-change: transform; }

  /* Fade-up stagger */
  .ls-line-1 { animation: lsFadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.0s both; }
  .ls-line-2 { animation: lsFadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
  .ls-line-3 { animation: lsFadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
  .ls-line-4 { animation: lsFadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.3s both; }
  .ls-line-5 { animation: lsFadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.4s both; }
  @keyframes lsFadeUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }

  /* Shake */
  @keyframes shakeX { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-5px)} 80%{transform:translateX(5px)} }
  .ls-shake { animation: shakeX 0.4s ease both; }

  /* Spin */
  @keyframes lsSpin { to { transform: rotate(360deg); } }

  /* Green pulse cross */
  @keyframes greenPulse {
    0%,100% { filter: drop-shadow(0 0 8px rgba(22,163,74,0.3)); }
    50%     { filter: drop-shadow(0 0 24px rgba(22,163,74,0.7)); }
  }
  .ls-cross { animation: greenPulse 2.5s ease-in-out infinite; }

  /* Input focus green ring */
  .ls-input {
    width: 100%; padding: 12px 14px; border-radius: 10px;
    font-size: 14px; box-sizing: border-box;
    background: #fff; color: #111;
    font-family: inherit;
    transition: all 0.2s;
    outline: none;
  }
  .ls-input:focus {
    border-color: #16a34a !important;
    box-shadow: 0 0 0 3px rgba(22,163,74,0.15) !important;
  }
  .ls-input::placeholder { color: rgba(17,17,17,0.3); }
`;function wT({onLogin:t}){const[e,n]=oe.useState(""),[i,r]=oe.useState(""),[s,o]=oe.useState(!1),[a,l]=oe.useState(""),[c,f]=oe.useState(!1),[h,d]=oe.useState(0),[m,x]=oe.useState(0),[y,g]=oe.useState(!1),u=oe.useRef(null);oe.useEffect(()=>{const R=setInterval(()=>{const{locked:D,remainingMs:k}=Ja();d(D?k:0)},500),_=Zl();x((_.attempts||[]).length);const{locked:w,remainingMs:I}=Ja();return w&&d(I),()=>clearInterval(R)},[]);function p(R){const _=u.current;if(!_)return;const w=_.getBoundingClientRect(),I=w.left+w.width/2,D=w.top+w.height/2,k=(R.clientX-I)/(w.width/2),H=(R.clientY-D)/(w.height/2);_.style.transform=`perspective(900px) rotateY(${k*5}deg) rotateX(${-H*4}deg) scale3d(1.01,1.01,1.01)`}function v(){const R=u.current;R&&(R.style.transform="perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)")}async function S(R){R.preventDefault(),l("");const{locked:_}=Ja();if(!_){if(!e.trim()||!i){l("Enter both fields.");return}f(!0);try{const w=await yT(i),I=gT(e);if(I&&I.passwordHash===w){MT();const D=btoa((navigator.userAgent+screen.width+screen.height).slice(0,200));sessionStorage.setItem(vl,JSON.stringify({username:I.username,role:I.role,loginTime:new Date().toISOString(),fingerprint:D})),t(I.username,I.role)}else{ST();const D=Zl(),k=_l-D.attempts.length,{locked:H}=Ja();x(D.attempts.length),l(H?`Locked for ${u0(bf)}.`:`Incorrect credentials.${k>0?` ${k} left.`:""}`),r(""),g(!0),setTimeout(()=>g(!1),450)}}finally{f(!1)}}}const b=h>0,A=Math.min(m,_l);return E.jsxs(E.Fragment,{children:[E.jsx("style",{children:ET}),E.jsx(gv,{}),E.jsx("div",{style:{position:"fixed",inset:0,zIndex:1,pointerEvents:"none",background:"rgba(244,246,248,0.55)"}}),E.jsxs("div",{style:{minHeight:"100vh",display:"flex",position:"relative",zIndex:2},children:[E.jsxs("div",{style:{flex:"0 0 48%",display:"flex",flexDirection:"column",justifyContent:"center",padding:"60px 56px",borderRight:"1px solid rgba(17,17,17,0.08)"},children:[E.jsx("div",{className:"ls-cross ls-line-1",style:{marginBottom:32},children:E.jsxs("svg",{width:"52",height:"52",viewBox:"0 0 52 52",fill:"none",children:[E.jsx("rect",{x:"20",y:"0",width:"12",height:"52",rx:"3",fill:"#16a34a"}),E.jsx("rect",{x:"0",y:"20",width:"52",height:"12",rx:"3",fill:"#16a34a"})]})}),E.jsx("div",{className:"ls-line-2",style:{fontSize:11,fontWeight:700,color:"#16a34a",letterSpacing:"4px",textTransform:"uppercase",marginBottom:16},children:"Medical AI Platform"}),E.jsxs("h1",{className:"ls-line-3",style:{fontSize:"clamp(40px, 5.5vw, 68px)",fontWeight:900,lineHeight:.95,letterSpacing:"-0.04em",color:"#111111",marginBottom:8},children:["GINJA",E.jsx("br",{}),E.jsx("span",{style:{color:"#16a34a"},children:"AI"})]}),E.jsx("div",{className:"ls-line-3",style:{fontSize:15,fontWeight:600,color:"#dc2626",letterSpacing:"2px",textTransform:"uppercase",marginBottom:20},children:"by Eden Care"}),E.jsx("div",{className:"ls-line-3",style:{width:60,height:3,background:"linear-gradient(90deg, #16a34a, #22c55e)",borderRadius:2,marginBottom:24}}),E.jsx("p",{className:"ls-line-4",style:{fontSize:14,color:"rgba(17,17,17,0.45)",lineHeight:1.7,maxWidth:340,marginBottom:40},children:"Medical code intelligence pipeline. Automated processing of hospital billing catalogs for insurance claims adjudication."}),E.jsx("div",{className:"ls-line-5",style:{display:"flex",gap:32},children:[["7","AI Modules"],["M4","DNA Engine"],["SHA-256","Security"]].map(([R,_])=>E.jsxs("div",{children:[E.jsx("div",{style:{fontSize:22,fontWeight:900,color:"#111",letterSpacing:"-0.03em"},children:R}),E.jsx("div",{style:{fontSize:10,color:"#16a34a",letterSpacing:"1.5px",textTransform:"uppercase",marginTop:3,fontWeight:600},children:_})]},_))})]}),E.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:"40px 48px"},children:E.jsxs("div",{ref:u,className:`ls-tilt${y?" ls-shake":""}`,onMouseMove:p,onMouseLeave:v,style:{width:"100%",maxWidth:400,background:"#ffffff",border:"1px solid rgba(17,17,17,0.1)",borderRadius:20,overflow:"hidden",boxShadow:"0 24px 80px rgba(0,0,0,0.12), 0 4px 24px rgba(0,0,0,0.06)",position:"relative"},children:[E.jsx("div",{style:{height:4,background:"linear-gradient(90deg, #16a34a, #22c55e)"}}),E.jsxs("div",{style:{padding:"36px 36px 32px"},children:[E.jsxs("div",{style:{marginBottom:32},children:[E.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#16a34a",letterSpacing:"3px",textTransform:"uppercase",marginBottom:8},children:"Secure Access"}),E.jsx("div",{style:{fontSize:22,fontWeight:800,color:"#111",letterSpacing:"-0.03em"},children:"Sign In"})]}),b&&E.jsxs("div",{style:{background:"rgba(220,38,38,0.06)",border:"1px solid rgba(220,38,38,0.2)",borderRadius:12,padding:"14px 16px",marginBottom:24,display:"flex",alignItems:"center",gap:12},children:[E.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:"#dc2626",flexShrink:0}}),E.jsxs("div",{children:[E.jsx("div",{style:{fontWeight:700,color:"#dc2626",fontSize:13},children:"Access Suspended"}),E.jsxs("div",{style:{fontSize:12,color:"rgba(220,38,38,0.7)",marginTop:2},children:["Retry in ",E.jsx("strong",{style:{color:"#dc2626"},children:u0(h)})]})]})]}),E.jsxs("form",{onSubmit:S,style:{display:"flex",flexDirection:"column",gap:18},children:[E.jsxs("div",{children:[E.jsx("label",{style:{display:"block",fontSize:10,fontWeight:700,color:"rgba(17,17,17,0.4)",letterSpacing:"2px",textTransform:"uppercase",marginBottom:8},children:"Identifier"}),E.jsx("input",{className:"ls-input",type:"text",value:e,onChange:R=>n(R.target.value),disabled:b||c,autoComplete:"username",placeholder:"Username",style:{border:`1.5px solid ${a&&!b?"rgba(220,38,38,0.4)":"rgba(17,17,17,0.15)"}`}})]}),E.jsxs("div",{children:[E.jsx("label",{style:{display:"block",fontSize:10,fontWeight:700,color:"rgba(17,17,17,0.4)",letterSpacing:"2px",textTransform:"uppercase",marginBottom:8},children:"Passcode"}),E.jsxs("div",{style:{position:"relative"},children:[E.jsx("input",{className:"ls-input",type:s?"text":"password",value:i,onChange:R=>r(R.target.value),disabled:b||c,autoComplete:"current-password",placeholder:"••••••••••",style:{border:`1.5px solid ${a&&!b?"rgba(220,38,38,0.4)":"rgba(17,17,17,0.15)"}`,paddingRight:44}}),E.jsx("button",{type:"button",onClick:()=>o(R=>!R),tabIndex:-1,style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"rgba(17,17,17,0.3)",fontSize:14,padding:4},children:s?"🙈":"👁"})]})]}),A>0&&!b&&E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[E.jsx("span",{style:{fontSize:10,color:"rgba(17,17,17,0.3)",letterSpacing:"1.5px",textTransform:"uppercase"},children:"Attempts"}),E.jsx("div",{style:{display:"flex",gap:5},children:Array.from({length:_l}).map((R,_)=>E.jsx("div",{style:{width:7,height:7,borderRadius:"50%",transition:"all 0.2s",background:_<A?"#dc2626":"rgba(17,17,17,0.1)",boxShadow:_<A?"0 0 6px rgba(220,38,38,0.5)":"none"}},_))})]}),a&&!b&&E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",borderRadius:10,background:"rgba(220,38,38,0.05)",border:"1px solid rgba(220,38,38,0.2)",fontSize:12,color:"#dc2626"},children:[E.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:"#dc2626",flexShrink:0}}),a]}),E.jsx("button",{className:"btn-green",type:"submit",disabled:b||c||!e.trim()||!i,style:{padding:"14px",borderRadius:12,fontSize:12,letterSpacing:"3px",marginTop:4},children:c?E.jsxs("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10},children:[E.jsx("span",{style:{width:14,height:14,borderRadius:"50%",border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"#fff",display:"inline-block",animation:"lsSpin 0.8s linear infinite"}}),"VERIFYING"]}):b?"LOCKED":"AUTHORIZE ACCESS"})]}),E.jsxs("div",{style:{marginTop:24,paddingTop:20,borderTop:"1px solid rgba(17,17,17,0.07)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[E.jsx("span",{style:{fontSize:9,color:"rgba(17,17,17,0.25)",letterSpacing:"1px",textTransform:"uppercase"},children:"SHA-256 · Rate Limited"}),E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[E.jsx("div",{className:"live-dot",style:{width:5,height:5}}),E.jsx("span",{style:{fontSize:9,color:"rgba(22,163,74,0.7)",letterSpacing:"1px",textTransform:"uppercase"},children:"Secured"})]})]})]})]})})]})]})}function TT({processing:t=!1,onClick:e,width:n=480,height:i=320}){const r=oe.useRef(null),s=oe.useRef(t);return oe.useEffect(()=>{s.current=t},[t]),oe.useEffect(()=>{const o=r.current;if(!o)return;const a=new kh({antialias:!0,alpha:!0});a.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),a.setSize(n,i),a.setClearColor(0,0),o.appendChild(a.domElement);const l=new Ih,c=new rn(40,n/i,.1,100);c.position.set(0,1.2,14),c.lookAt(0,.5,0),l.add(new ov(16777215,1.2));const f=new Ef(16777215,2.5);f.position.set(5,8,6),l.add(f);const h=new Ef(8978380,1);h.position.set(-5,2,4),l.add(h);const d=new Ss(2278750,2.5,8);d.position.set(0,1,3.5),l.add(d);const m=new Gn({color:1710638,metalness:.7,roughness:.3}),x=new Gn({color:2236979,metalness:.8,roughness:.25}),y=new Gn({color:1447722,metalness:.9,roughness:.2}),g=new Gn({color:2278750,emissive:2278750,emissiveIntensity:.5,roughness:1,metalness:0}),u=new Gn({color:1483594,emissive:1483594,emissiveIntensity:.8}),p=new Ue(new gt(7.2,4.8,.4),m);p.position.set(0,1,0),l.add(p);const v=new Ue(new Ur(6.4,4.1),g);v.position.set(0,1,.22),l.add(v);const S=new Ue(new gt(7.2,.06,.1),u);S.position.set(0,3.43,.2),l.add(S);const b=new Ue(new gt(7.2,.06,.1),u);b.position.set(0,-1.42,.2),l.add(b);const A=new Ue(new Dr(.07,8,8),u);A.position.set(3.2,-1.25,.22),l.add(A);const R=new Ss(2278750,1,2);R.position.copy(A.position),l.add(R);const _=new Ue(new gt(.7,2,.55),x);_.position.set(0,-1.5,-.2),l.add(_);const w=new Ue(new gt(2.4,.25,.5),x);w.position.set(0,-.55,-.35),l.add(w);const I=new Ue(new gt(3.8,.22,2),y);I.position.set(0,-2.52,-.3),l.add(I);const D=new Ue(new gt(3.8,.05,.05),u);D.position.set(0,-2.42,.73),l.add(D);const k=[];for(let ee=0;ee<8;ee++){const ve=2+Math.random()*4,Oe=new Ue(new Ur(ve,.1),new Ps({color:2278750,transparent:!0,opacity:.5+Math.random()*.4}));Oe.position.set(-3.2+ve/2+Math.random()*.4,3-ee*.55,.23),l.add(Oe),k.push(Oe)}const H={x:0,y:0},W={x:0,y:0},B=ee=>{const ve=o.getBoundingClientRect();H.x=((ee.clientX-ve.left)/ve.width-.5)*2,H.y=((ee.clientY-ve.top)/ve.height-.5)*2};window.addEventListener("mousemove",B);let C=0;const U=()=>{C=1,U==null||U()};a.domElement.addEventListener("click",U);let L,O=0,X=performance.now();function J(){L=requestAnimationFrame(J);const ee=performance.now(),ve=Math.min((ee-X)/1e3,.05);O+=ve,X=ee;const Oe=s.current;if(W.x+=(H.x*.12-W.x)*.06,W.y+=(-H.y*.08-W.y)*.06,l.rotation.y=W.x,l.rotation.x=W.y,Oe){const ce=.5+Math.sin(O*6)*.5;g.color.setRGB(.86+ce*.1,.15,.09),g.emissive.setRGB(.86,.15,.09),g.emissiveIntensity=.4+ce*.4,d.color.setRGB(1,.2,.1),d.intensity=1.5+ce*2}else g.color.set(2278750),g.emissive.set(2278750),g.emissiveIntensity=.35+Math.sin(O*1.5)*.1,d.color.set(2278750),d.intensity=2+Math.sin(O*2)*.5;for(const ce of k)if(ce.position.y-=.004,ce.position.y<-1.2){ce.position.y=3.1;const j=2+Math.random()*4;ce.geometry.dispose(),ce.geometry=new Ur(j,.1),ce.position.x=-3.2+j/2+Math.random()*.4}if(R.intensity=.8+Math.sin(O*2.5)*.4,C>0){C-=ve*3;const ce=Math.max(0,C);g.emissiveIntensity=ce*3+.35,d.intensity=ce*8+2}a.render(l,c)}return J(),()=>{cancelAnimationFrame(L),window.removeEventListener("mousemove",B),a.domElement.removeEventListener("click",U),a.dispose(),o.contains(a.domElement)&&o.removeChild(a.domElement)}},[n,i]),E.jsx("div",{ref:r,style:{width:n,height:i,cursor:e?"pointer":"default",display:"inline-block"}})}const bT=oe.lazy(()=>Tt(()=>import("./M0PreScan-myKsc9j9.js"),__vite__mapDeps([0,1,2]))),AT=oe.lazy(()=>Tt(()=>import("./M1PHIScrubber-BbAijPmC.js"),__vite__mapDeps([3,1]))),RT=oe.lazy(()=>Tt(()=>import("./M2TriageRouter-DBO3j3ul.js"),__vite__mapDeps([4,1]))),CT=oe.lazy(()=>Tt(()=>import("./M3AliasEngine-CLhjO6on.js"),__vite__mapDeps([5,1,6]))),PT=oe.lazy(()=>Tt(()=>import("./M4ConfidenceThreshold-9zzSO57n.js"),__vite__mapDeps([7,1,6,2]))),LT=oe.lazy(()=>Tt(()=>import("./M5DefinitionEngine-Di2WqjvR.js"),__vite__mapDeps([8,1]))),DT=oe.lazy(()=>Tt(()=>import("./M6DeltaReport-DY2ZqRUJ.js"),__vite__mapDeps([9,1]))),IT=oe.lazy(()=>Tt(()=>import("./M7AuditLog-C6CXZ9zB.js"),__vite__mapDeps([10,1]))),NT=`
  .mo-backdrop {
    position: fixed; inset: 0; z-index: 200;
    background: rgba(17,17,17,0.4);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    animation: moFadeIn 0.25s ease both;
  }
  .mo-sheet {
    position: fixed; left: 0; right: 0; bottom: 0; z-index: 201;
    background: var(--off-white, #f4f6f8);
    border-radius: 20px 20px 0 0;
    box-shadow: 0 -8px 60px rgba(0,0,0,0.18);
    display: flex; flex-direction: column;
    max-height: 93vh;
    animation: moSlideUp 0.35s cubic-bezier(0.16,1,0.3,1) both;
    overflow: hidden;
  }
  .mo-header {
    display: flex; align-items: center; justify-content: space-between;
    padding: 16px 24px;
    background: var(--white, #fff);
    border-bottom: 1px solid var(--border, rgba(17,17,17,0.08));
    flex-shrink: 0;
  }
  .mo-header-left { display: flex; align-items: center; gap: 12px; }
  .mo-color-dot {
    width: 10px; height: 10px; border-radius: 50%;
  }
  .mo-module-id {
    font-size: 10px; font-weight: 800; letter-spacing: 2px;
    text-transform: uppercase;
  }
  .mo-module-name {
    font-size: 15px; font-weight: 700; color: var(--dark, #111);
    letter-spacing: -0.02em;
  }
  .mo-close {
    width: 32px; height: 32px; border-radius: 50%;
    background: rgba(17,17,17,0.06); border: none;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    font-size: 16px; color: rgba(17,17,17,0.5);
    transition: all 0.2s;
  }
  .mo-close:hover {
    background: rgba(220,38,38,0.08); color: #dc2626;
  }
  .mo-body {
    flex: 1; overflow-y: auto; overflow-x: hidden;
    padding: 0;
  }
  .mo-loader {
    display: flex; align-items: center; justify-content: center;
    min-height: 300px; color: rgba(17,17,17,0.3); font-size: 13px;
  }
  @keyframes moFadeIn {
    from { opacity: 0; } to { opacity: 1; }
  }
  @keyframes moSlideUp {
    from { opacity: 0; transform: translateY(40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`;function UT({id:t,onClose:e}){const n=()=>{};switch(t){case"M0":return E.jsx(bT,{onComplete:n});case"M1":return E.jsx(AT,{onComplete:n,prefillData:null});case"M2":return E.jsx(RT,{onComplete:n,prefillData:null});case"M3":return E.jsx(CT,{onComplete:n,prefillData:null});case"M4":return E.jsx(PT,{onComplete:n,prefillData:null});case"M5":return E.jsx(LT,{onComplete:n,prefillData:null});case"M6":return E.jsx(DT,{onComplete:n,prefillData:null});case"M7":return E.jsx(IT,{});default:return E.jsx("div",{style:{padding:40,color:"#999"},children:"Module not found."})}}function FT({moduleId:t,moduleLabel:e,moduleColor:n,onClose:i}){return oe.useEffect(()=>{const r=s=>{s.key==="Escape"&&i()};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[i]),E.jsxs(E.Fragment,{children:[E.jsx("style",{children:NT}),E.jsx("div",{className:"mo-backdrop",onClick:i}),E.jsxs("div",{className:"mo-sheet",onClick:r=>r.stopPropagation(),children:[E.jsxs("div",{className:"mo-header",children:[E.jsxs("div",{className:"mo-header-left",children:[E.jsx("div",{className:"mo-color-dot",style:{background:n}}),E.jsx("span",{className:"mo-module-id",style:{color:n},children:t}),E.jsx("span",{className:"mo-module-name",children:e})]}),E.jsx("button",{className:"mo-close",onClick:i,title:"Close (Esc)",children:"✕"})]}),E.jsx("div",{className:"mo-body",children:E.jsx(oe.Suspense,{fallback:E.jsx("div",{className:"mo-loader",children:"Loading module…"}),children:E.jsx(UT,{id:t,onClose:i})})})]})]})}const Pu=[{id:"M0",label:"Pre-Scan",icon:"🔍",desc:"File upload & master catalog load",color:"#7c3aed"},{id:"M1",label:"PHI Scrubber",icon:"🛡️",desc:"Detect & block patient identifiers",color:"#dc2626"},{id:"M2",label:"Triage Router",icon:"🤖",desc:"AI classification into 8 domains",color:"#0284c7"},{id:"M3",label:"Alias Engine",icon:"🔗",desc:"Resolve alternate code names",color:"#d97706"},{id:"M4",label:"Confidence Score",icon:"🎯",desc:"DNA matching & approval staging",color:"#16a34a"},{id:"M5",label:"Definition Engine",icon:"📖",desc:"Enrich codes with clinical definitions",color:"#0891b2"},{id:"M6",label:"Delta Report",icon:"📊",desc:"Compare & export changes vs master",color:"#4338ca"},{id:"M7",label:"Audit Log",icon:"📋",desc:"Persistent cross-session audit trail",color:"#334155"}],OT=`
  .dash-root {
    min-height: 100vh;
    background: var(--off-white, #f4f6f8);
    font-family: 'Inter', -apple-system, sans-serif;
  }

  /* ── Nav ─────────────────────────────────────────── */
  .dash-nav {
    position: sticky; top: 0; z-index: 50;
    background: var(--white, #ffffff);
    border-bottom: 1px solid var(--border, rgba(17,17,17,0.1));
    box-shadow: 0 1px 12px rgba(0,0,0,0.06);
  }
  .dash-nav-inner {
    max-width: 1200px; margin: 0 auto;
    padding: 0 24px;
    height: 60px;
    display: flex; align-items: center; justify-content: space-between;
  }
  .dash-brand {
    display: flex; align-items: center; gap: 12px;
  }
  .dash-brand-logo {
    width: 32px; height: 32px;
    background: var(--green, #16a34a);
    border-radius: 8px;
    display: flex; align-items: center; justify-content: center;
  }
  .dash-brand-name {
    font-size: 18px; font-weight: 900;
    letter-spacing: -0.04em;
    color: var(--dark, #111111);
  }
  .dash-brand-name span { color: var(--green, #16a34a); }
  .dash-nav-actions { display: flex; align-items: center; gap: 10px; }
  .dash-mode-badge {
    padding: 4px 12px; border-radius: 20px;
    font-size: 10px; font-weight: 700; letter-spacing: 1.5px;
    text-transform: uppercase; cursor: pointer;
    transition: all 0.2s;
  }
  .dash-mode-badge.auto {
    background: rgba(22,163,74,0.12); color: var(--green, #16a34a);
    border: 1px solid rgba(22,163,74,0.3);
  }
  .dash-mode-badge.manual {
    background: rgba(17,17,17,0.06); color: rgba(17,17,17,0.5);
    border: 1px solid rgba(17,17,17,0.12);
  }
  .dash-mode-badge:hover { opacity: 0.75; }
  .dash-user {
    display: flex; align-items: center; gap: 8px;
    padding: 6px 12px; border-radius: 10px;
    background: rgba(17,17,17,0.04);
    border: 1px solid rgba(17,17,17,0.08);
  }
  .dash-user-avatar {
    width: 24px; height: 24px; border-radius: 50%;
    background: var(--green, #16a34a);
    display: flex; align-items: center; justify-content: center;
    font-size: 11px; font-weight: 700; color: #fff;
  }
  .dash-user-name { font-size: 12px; font-weight: 600; color: var(--dark, #111); }
  .dash-btn-logout {
    padding: 6px 14px; border-radius: 8px;
    background: rgba(220,38,38,0.06); color: #dc2626;
    border: 1px solid rgba(220,38,38,0.2);
    font-size: 11px; font-weight: 700; cursor: pointer;
    transition: all 0.2s; letter-spacing: 0.5px;
  }
  .dash-btn-logout:hover { background: rgba(220,38,38,0.12); }

  /* ── Hero ────────────────────────────────────────── */
  .dash-hero {
    display: flex; flex-direction: column;
    align-items: center; padding: 40px 24px 20px;
    text-align: center;
  }
  .dash-hero-title {
    font-size: clamp(22px, 3vw, 30px); font-weight: 900;
    letter-spacing: -0.04em; color: var(--dark, #111);
    margin-bottom: 6px;
  }
  .dash-hero-title span { color: var(--green, #16a34a); }
  .dash-hero-sub {
    font-size: 13px; color: var(--dark-muted, rgba(17,17,17,0.45));
    margin-bottom: 28px;
  }
  .dash-computer-wrap {
    position: relative;
    filter: drop-shadow(0 20px 60px rgba(22,163,74,0.15)) drop-shadow(0 4px 24px rgba(0,0,0,0.1));
    cursor: pointer;
    transition: transform 0.3s var(--ease-spring, cubic-bezier(0.34,1.56,0.64,1));
  }
  .dash-computer-wrap:hover { transform: translateY(-4px) scale(1.01); }
  .dash-computer-label {
    font-size: 10px; font-weight: 700; letter-spacing: 2px;
    text-transform: uppercase; color: var(--green, #16a34a);
    margin-top: 12px; opacity: 0.7;
  }

  /* ── Pipeline status strip ───────────────────────── */
  .dash-status-strip {
    max-width: 1200px; margin: 0 auto 0;
    padding: 0 24px;
  }
  .dash-status-inner {
    background: var(--white, #fff);
    border: 1px solid rgba(22,163,74,0.2);
    border-radius: 12px;
    padding: 10px 18px;
    display: flex; align-items: center; gap: 12px;
    font-size: 12px;
  }

  /* ── Module grid ─────────────────────────────────── */
  .dash-grid-section {
    max-width: 1200px; margin: 0 auto;
    padding: 28px 24px 48px;
  }
  .dash-section-header {
    display: flex; align-items: center; justify-content: space-between;
    margin-bottom: 20px;
  }
  .dash-section-title {
    font-size: 13px; font-weight: 700; letter-spacing: 0.5px;
    color: var(--dark-muted, rgba(17,17,17,0.5));
    text-transform: uppercase;
  }
  .dash-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
  @media (max-width: 900px) { .dash-grid { grid-template-columns: repeat(2, 1fr); } }
  @media (max-width: 520px) { .dash-grid { grid-template-columns: 1fr; } }

  /* Module card */
  .dash-module-card {
    background: var(--white, #fff);
    border: 1px solid var(--border, rgba(17,17,17,0.1));
    border-radius: 16px;
    padding: 20px;
    cursor: pointer;
    position: relative; overflow: hidden;
    transition: all 0.25s var(--ease-out, cubic-bezier(0.16,1,0.3,1));
    box-shadow: 0 1px 6px rgba(0,0,0,0.04);
  }
  .dash-module-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 14px 40px rgba(0,0,0,0.1);
    border-color: rgba(17,17,17,0.18);
  }
  .dash-module-card-stripe {
    position: absolute; top: 0; left: 0; right: 0; height: 3px;
    border-radius: 16px 16px 0 0;
  }
  .dash-module-icon {
    font-size: 26px; margin-bottom: 12px; display: block;
  }
  .dash-module-id {
    font-size: 9px; font-weight: 800; letter-spacing: 2px;
    text-transform: uppercase; margin-bottom: 4px;
  }
  .dash-module-label {
    font-size: 14px; font-weight: 700;
    color: var(--dark, #111); margin-bottom: 6px;
    letter-spacing: -0.02em;
  }
  .dash-module-desc {
    font-size: 11px; color: var(--dark-muted, rgba(17,17,17,0.45));
    line-height: 1.5;
  }
  .dash-module-arrow {
    position: absolute; bottom: 16px; right: 16px;
    font-size: 12px; opacity: 0; transition: all 0.2s;
    transform: translateX(-4px);
  }
  .dash-module-card:hover .dash-module-arrow {
    opacity: 0.5; transform: translateX(0);
  }
`;function d0({username:t,role:e,mode:n,onModeToggle:i,onLogout:r,onAdminPanel:s,userCount:o,pipelineRunning:a}){var f,h;const[l,c]=oe.useState(null);return E.jsxs(E.Fragment,{children:[E.jsx("style",{children:OT}),E.jsxs("div",{className:"dash-root",children:[E.jsx("nav",{className:"dash-nav",children:E.jsxs("div",{className:"dash-nav-inner",children:[E.jsxs("div",{className:"dash-brand",children:[E.jsx("div",{className:"dash-brand-logo",children:E.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[E.jsx("rect",{x:"7.5",y:"0",width:"3",height:"18",rx:"1.5",fill:"white"}),E.jsx("rect",{x:"0",y:"7.5",width:"18",height:"3",rx:"1.5",fill:"white"})]})}),E.jsxs("div",{className:"dash-brand-name",children:["GINJA ",E.jsx("span",{children:"AI"})]}),E.jsx("div",{style:{fontSize:10,color:"rgba(17,17,17,0.3)",letterSpacing:"1px",fontWeight:600},children:"by Eden Care"})]}),E.jsxs("div",{className:"dash-nav-actions",children:[E.jsx("div",{className:`dash-mode-badge ${n}`,onClick:i,title:"Click to toggle mode",children:n==="auto"?"⚡ Auto":"🎛️ Manual"}),s&&E.jsxs("button",{onClick:s,style:{padding:"5px 12px",borderRadius:8,background:"rgba(124,58,237,0.08)",color:"#7c3aed",border:"1px solid rgba(124,58,237,0.2)",fontSize:11,fontWeight:700,cursor:"pointer"},children:["👑 Admin ",o!==void 0?`(${o})`:""]}),E.jsxs("div",{className:"dash-user",children:[E.jsx("div",{className:"dash-user-avatar",children:t.slice(0,1).toUpperCase()}),E.jsx("span",{className:"dash-user-name",children:t})]}),E.jsx("button",{className:"dash-btn-logout",onClick:r,children:"Sign out"})]})]})}),E.jsxs("div",{className:"dash-hero",children:[E.jsxs("div",{className:"dash-hero-title",children:["Medical Code ",E.jsx("span",{children:"Intelligence"})," Pipeline"]}),E.jsx("div",{className:"dash-hero-sub",children:"Select a module to process your insurance catalog data"}),E.jsxs("div",{className:"dash-computer-wrap",onClick:()=>c("M0"),children:[E.jsx(TT,{processing:a,width:440,height:280}),E.jsx("div",{className:"dash-computer-label",children:"Click to launch pipeline"})]})]}),a&&E.jsx("div",{className:"dash-status-strip",children:E.jsxs("div",{className:"dash-status-inner",children:[E.jsx("span",{className:"live-dot"}),E.jsx("span",{style:{fontWeight:700,color:"var(--green)"},children:"Pipeline Running"}),E.jsx("span",{style:{color:"rgba(17,17,17,0.4)"},children:"Processing your catalog through all modules…"})]})}),E.jsxs("div",{className:"dash-grid-section",children:[E.jsxs("div",{className:"dash-section-header",children:[E.jsx("div",{className:"dash-section-title",children:"Pipeline Modules"}),E.jsx("div",{style:{fontSize:11,color:"rgba(17,17,17,0.3)"},children:"8 modules · Click to open"})]}),E.jsx("div",{className:"dash-grid",children:Pu.map(d=>E.jsxs("div",{className:"dash-module-card",onClick:()=>c(d.id),children:[E.jsx("div",{className:"dash-module-card-stripe",style:{background:d.color}}),E.jsx("span",{className:"dash-module-icon",children:d.icon}),E.jsx("div",{className:"dash-module-id",style:{color:d.color},children:d.id}),E.jsx("div",{className:"dash-module-label",children:d.label}),E.jsx("div",{className:"dash-module-desc",children:d.desc}),E.jsx("div",{className:"dash-module-arrow",children:"→"})]},d.id))})]})]}),l&&E.jsx(FT,{moduleId:l,moduleLabel:((f=Pu.find(d=>d.id===l))==null?void 0:f.label)||l,moduleColor:((h=Pu.find(d=>d.id===l))==null?void 0:h.color)||"#16a34a",onClose:()=>c(null)})]})}const Af={gemini:"eden_api_gemini",groq:"eden_api_groq",openRouter:"eden_api_openrouter",cerebras:"eden_api_cerebras",togetherAI:"eden_api_togetherai",mistral:"eden_api_mistral",cohere:"eden_api_cohere",deepseek:"eden_api_deepseek",umls:"eden_api_umls",bioportal:"eden_api_bioportal"};function Qn(t){try{const e=localStorage.getItem(Af[t]);if(!e)return"";try{return atob(e)}catch{return e}}catch{return""}}function kT(t,e){try{const n=e.trim();n?localStorage.setItem(Af[t],btoa(n)):localStorage.removeItem(Af[t])}catch{}}const zT="llama-3.3-70b-versatile",BT="https://api.groq.com/openai/v1/chat/completions",Lu=4;function VT(t){return new Promise(e=>setTimeout(e,t))}function HT(t,e){if(e){const i=parseFloat(e);if(!isNaN(i))return Math.ceil(i*1e3)+500}const n=t.match(/try again in (\d+(?:\.\d+)?)s/i);return n?Math.ceil(parseFloat(n[1])*1e3)+500:15e3}async function GT(t,e,n=1e3){var r,s,o,a;let i="";for(let l=1;l<=Lu;l++){const c=await fetch(BT,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t},body:JSON.stringify({model:zT,messages:[{role:"user",content:e}],max_tokens:n,temperature:.1})});if(c.ok)return((o=(s=(r=(await c.json()).choices)==null?void 0:r[0])==null?void 0:s.message)==null?void 0:o.content)??"";const f=await c.text();let h=`Groq ${c.status}`;try{const d=JSON.parse(f);h+=`: ${((a=d.error)==null?void 0:a.message)??f.slice(0,200)}`}catch{h+=`: ${f.slice(0,200)}`}if(c.status===429&&l<Lu){const d=HT(f,c.headers.get("retry-after"));console.warn(`[Groq] Rate limit hit (attempt ${l}/${Lu}). Waiting ${Math.round(d/1e3)}s...`),await VT(d);continue}i=h;break}throw new Error(i||"Groq request failed after retries")}const WT="gemini-2.0-flash",Du=3;function jT(t){const e=t.match(/retry in (\d+(?:\.\d+)?)s/i);return e?Math.ceil(parseFloat(e[1])*1e3)+500:1e4}function XT(t){return new Promise(e=>setTimeout(e,t))}async function YT(t,e,n=3e3,i=!1){var l,c,f,h,d,m;const r=`https://generativelanguage.googleapis.com/v1beta/models/${WT}:generateContent?key=${t}`,s={maxOutputTokens:n,temperature:.1};i&&(s.responseMimeType="application/json");const o=JSON.stringify({contents:[{role:"user",parts:[{text:e}]}],generationConfig:s});let a="";for(let x=1;x<=Du;x++){const y=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:o});if(y.ok)return((d=(h=(f=(c=(l=(await y.json()).candidates)==null?void 0:l[0])==null?void 0:c.content)==null?void 0:f.parts)==null?void 0:h[0])==null?void 0:d.text)??"";const g=await y.text();let u=`Gemini ${y.status}`;try{const v=JSON.parse(g);u+=`: ${((m=v.error)==null?void 0:m.message)??g.slice(0,300)}`}catch{u+=`: ${g.slice(0,300)}`}const p=u.includes("limit: 0")||u.includes("free_tier_requests");if(y.status===429&&p)throw new Error("DAILY_QUOTA_EXHAUSTED: "+u);if(y.status===429&&x<Du){const v=jT(u);console.warn(`[Gemini] Rate limit hit (attempt ${x}/${Du}). Waiting ${Math.round(v/1e3)}s before retry...`),await XT(v);continue}a=u;break}throw new Error(a||"Gemini request failed after retries")}const $T="https://openrouter.ai/api/v1/chat/completions",qT=["deepseek/deepseek-r1:free","deepseek/deepseek-chat-v3-0324:free","google/gemma-3-27b-it:free","meta-llama/llama-3.3-70b-instruct:free","qwen/qwq-32b:free"];async function KT(t,e,n=2e3){var r,s,o,a;let i="";for(const l of qT)try{const c=await fetch($T,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`,"HTTP-Referer":typeof window<"u"?window.location.origin:"https://eden-pipeline","X-Title":"Eden Care Pipeline"},body:JSON.stringify({model:l,messages:[{role:"user",content:e}],max_tokens:n,temperature:.1})});if(c.ok){const m=((o=(s=(r=(await c.json()).choices)==null?void 0:r[0])==null?void 0:s.message)==null?void 0:o.content)??"";if(m.trim())return m;throw new Error("Empty response from "+l)}const f=await c.text();let h=`OpenRouter ${c.status}`;try{h+=": "+(((a=JSON.parse(f).error)==null?void 0:a.message)||f.slice(0,200))}catch{h+=": "+f.slice(0,200)}if(c.status===429||c.status===404){i=h;continue}throw new Error(h)}catch(c){if(c.message.includes("429")||c.message.includes("quota")||c.message.includes("404")||c.message.includes("unavailable")){i=c.message;continue}throw c}throw new Error(i||"OpenRouter: all free models exhausted")}const ZT="https://api.deepseek.com/v1/chat/completions",JT="deepseek-chat";async function QT(t,e,n=2e3){var s,o,a,l;const i=await fetch(ZT,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({model:JT,messages:[{role:"user",content:e}],max_tokens:n,temperature:.1})});if(!i.ok){const c=await i.text();let f=`DeepSeek ${i.status}`;try{f+=": "+(((s=JSON.parse(c).error)==null?void 0:s.message)||c.slice(0,200))}catch{f+=": "+c.slice(0,200)}throw new Error(f)}return((l=(a=(o=(await i.json()).choices)==null?void 0:o[0])==null?void 0:a.message)==null?void 0:l.content)??""}const Iu="eden_apikey_pin_v1",Vh="eden_pin_rate_v1",eb=5,Rf=5*60*1e3;function xv(){try{return JSON.parse(localStorage.getItem(Vh)||'{"attempts":[],"lockedUntil":0}')}catch{return{attempts:[],lockedUntil:0}}}function Nu(){const t=xv(),e=Date.now();return t.lockedUntil>e?{locked:!0,remainingMs:t.lockedUntil-e}:{locked:!1,remainingMs:0}}function tb(){const t=xv(),e=Date.now();t.attempts=[...(t.attempts||[]).filter(n=>e-n<Rf),e],t.attempts.length>=eb&&(t.lockedUntil=e+Rf),localStorage.setItem(Vh,JSON.stringify(t))}function nb(){localStorage.removeItem(Vh)}function f0(t){const e=Math.ceil(t/1e3);return e>=60?Math.ceil(e/60)+"m "+e%60+"s":e+"s"}async function h0(t){const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return Array.from(new Uint8Array(e)).map(n=>n.toString(16).padStart(2,"0")).join("")}const p0=[{id:"gemini",label:"Gemini 2.0 Flash",icon:"✨",color:"#38bdf8",badge:"PRIMARY",placeholder:"AIza...",hint:"1,500 req/day free · aistudio.google.com"},{id:"groq",label:"Groq (Llama 3.3 70B)",icon:"⚡",color:"#a78bfa",badge:"FAST",placeholder:"gsk_...",hint:"14,400 req/day free · console.groq.com"},{id:"openRouter",label:"OpenRouter (multi-model)",icon:"🔀",color:"#67e8f9",badge:"MULTI",placeholder:"sk-or-...",hint:"Free models, DeepSeek R1 · openrouter.ai"},{id:"cerebras",label:"Cerebras (Llama 3.3 70B)",icon:"🧠",color:"#fbbf24",badge:"SPEED",placeholder:"csk-...",hint:"~3,000 tok/s fastest inference · cloud.cerebras.ai"},{id:"deepseek",label:"DeepSeek (V3 / R1)",icon:"🔭",color:"#34d399",badge:"REASON",placeholder:"sk-...",hint:"10M free tokens · platform.deepseek.com"},{id:"mistral",label:"Mistral (mistral-small)",icon:"🌀",color:"#c4b5fd",badge:"STRUCT",placeholder:"...",hint:"500K tok/min free · console.mistral.ai"},{id:"togetherAI",label:"Together AI (Llama 70B)",icon:"🤝",color:"#f9a8d4",badge:"CREDIT",placeholder:"...",hint:"$5–$25 free credit · api.together.xyz"},{id:"cohere",label:"Cohere (Command-R+)",icon:"🪄",color:"#6ee7b7",badge:"CLASS",placeholder:"...",hint:"20 req/s trial key · dashboard.cohere.com"}],ib=[{id:"umls",label:"UMLS Metathesaurus",icon:"🔗",color:"#67e8f9",placeholder:"xxxxxxxx-xxxx-...",hint:"200+ medical databases · uts.nlm.nih.gov"},{id:"bioportal",label:"NCBO BioPortal",icon:"🧭",color:"#c4b5fd",placeholder:"xxxxxxxx-xxxx-...",hint:"800+ ontologies · bioportal.bioontology.org"}],rb=["1","2","3","4","5","6","7","8","9","⌫","0","✓"],sb=`
  @keyframes pinShake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}
  .pin-shake{animation:pinShake 0.4s ease;}
  .pin-digit-btn{transition:all 0.1s;}
  .pin-digit-btn:hover:not(:disabled){background:rgba(124,58,237,0.25)!important;border-color:rgba(124,58,237,0.5)!important;}
  .pin-digit-btn:active:not(:disabled){transform:scale(0.94);}
  .key-row-card{transition:border-color 0.2s;}
  .key-row-card:hover{border-color:rgba(124,58,237,0.35)!important;}
`;function m0({role:t}){return t!=="SUPER_ADMIN"?null:E.jsx(ob,{})}function ob(){const[t,e]=oe.useState("idle"),[n,i]=oe.useState(""),[r,s]=oe.useState(""),[o,a]=oe.useState(!1),[l,c]=oe.useState(0),[f,h]=oe.useState(""),[d,m]=oe.useState(""),[x,y]=oe.useState("enter"),[g,u]=oe.useState({}),[p,v]=oe.useState({});oe.useEffect(()=>{v({gemini:Qn("gemini"),groq:Qn("groq"),openRouter:Qn("openRouter"),cerebras:Qn("cerebras"),deepseek:Qn("deepseek"),mistral:Qn("mistral"),togetherAI:Qn("togetherAI"),cohere:Qn("cohere"),umls:Qn("umls"),bioportal:Qn("bioportal")})},[t]),oe.useEffect(()=>{const C=setInterval(()=>{const{locked:U,remainingMs:L}=Nu();c(U?L:0)},500);return()=>clearInterval(C)},[]);function S(){const C=!!localStorage.getItem(Iu);e(C?"pin-entry":"pin-setup"),i(""),s("")}function b(){e("idle"),i(""),s("")}async function A(C){if(t==="pin-entry"){if(C==="⌫"){i(L=>L.slice(0,-1));return}if(C==="✓"){await R();return}if(n.length>=4)return;const U=n+C;i(U),U.length===4&&setTimeout(()=>R(U),100)}if(t==="pin-setup")if(x==="enter"){if(C==="⌫"){h(U=>U.slice(0,-1));return}if(C==="✓"||f.length===3){const U=C==="⌫"||C==="✓"?f:f+C;if(U.length===4){h(U),y("confirm"),m("");return}C!=="⌫"&&C!=="✓"&&h(L=>L.length<4?L+C:L);return}h(U=>U.length<4?U+C:U),f.length+1===4&&C!=="⌫"&&C!=="✓"&&setTimeout(()=>{y("confirm"),m("")},150)}else{if(C==="⌫"){m(L=>L.slice(0,-1));return}if(C==="✓"){await _();return}const U=d+C;m(U),U.length===4&&setTimeout(()=>_(U),100)}}async function R(C){const{locked:U}=Nu();if(U)return;const L=C||n;if(L.length<4){s("Enter all 4 digits");return}const O=localStorage.getItem(Iu);if(await h0(L)===O)nb(),e("open"),i(""),s("");else{tb();const{locked:J,remainingMs:ee}=Nu();J&&c(ee),w(),s(J?`Locked for ${f0(Rf)}`:"Wrong PIN"),i("")}}async function _(C){const U=f;if(U!==(C||d)){w(),s("PINs don't match — try again"),y("enter"),h(""),m("");return}const O=await h0(U);localStorage.setItem(Iu,O),e("open"),h(""),m(""),s("")}function w(){a(!0),setTimeout(()=>a(!1),500)}const[I,D]=oe.useState({});function k(C,U){v(L=>({...L,[C]:U})),kT(C,U),D(L=>({...L,[C]:"idle"}))}async function H(C,U){if(U.trim()){D(L=>({...L,[C]:"testing"}));try{const L="Reply with exactly: OK";if(C==="groq")await GT(U,L,5);else if(C==="gemini")await YT(U,L,5);else if(C==="openRouter")await KT(U,L,5);else if(C==="deepseek")await QT(U,L,5);else if(C==="umls"){const O=await fetch(`https://uts-ws.nlm.nih.gov/rest/search/current?string=aspirin&apiKey=${encodeURIComponent(U)}&pageSize=1`);if(!O.ok)throw new Error("UMLS "+O.status)}else if(C==="bioportal"){const O=await fetch(`https://data.bioontology.org/search?q=aspirin&apikey=${encodeURIComponent(U)}&pagesize=1`);if(!O.ok)throw new Error("BioPortal "+O.status)}D(O=>({...O,[C]:"ok"}))}catch{D(L=>({...L,[C]:"fail"}))}}}const W=p0.map(C=>C.id),B=W.filter(C=>{var U;return(U=p[C])==null?void 0:U.trim()}).length;return E.jsxs(E.Fragment,{children:[E.jsx("style",{children:sb}),E.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"10px 20px 0"},children:[t==="idle"&&E.jsxs("button",{onClick:S,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 16px",borderRadius:10,border:"1px solid rgba(124,58,237,0.3)",background:"rgba(124,58,237,0.1)",cursor:"pointer",fontSize:13,fontWeight:600,color:"#c4b5fd",width:"100%",transition:"all 0.2s"},children:[E.jsx("span",{style:{fontSize:14},children:"🔑"}),E.jsxs("span",{style:{flex:1},children:["API Keys — ",B===0?"No keys set yet":`${B}/${W.length} AI providers active`]}),E.jsx("span",{style:{fontSize:11,padding:"2px 8px",borderRadius:10,background:"rgba(124,58,237,0.2)",color:"#a78bfa"},children:"🔒 PIN protected"}),E.jsx("span",{style:{fontSize:11,color:"rgba(255,255,255,0.3)"},children:"▼ open"})]}),(t==="pin-entry"||t==="pin-setup")&&E.jsxs("div",{style:{background:"rgba(10,10,26,0.97)",border:"1px solid rgba(124,58,237,0.3)",borderRadius:16,padding:24,display:"flex",flexDirection:"column",alignItems:"center",gap:16,position:"relative"},children:[E.jsx("button",{onClick:b,style:{position:"absolute",top:12,right:14,background:"none",border:"none",color:"rgba(255,255,255,0.4)",cursor:"pointer",fontSize:18},children:"✕"}),E.jsx("div",{style:{fontSize:24,filter:"drop-shadow(0 0 10px rgba(124,58,237,0.7))"},children:"🔑"}),E.jsx("div",{style:{color:"#fff",fontWeight:700,fontSize:14,textAlign:"center"},children:t==="pin-entry"?"Enter your 4-digit PIN":x==="enter"?"Set a 4-digit PIN for API Keys":"Confirm your PIN"}),l>0&&E.jsxs("div",{style:{background:"rgba(244,63,94,0.15)",border:"1px solid rgba(244,63,94,0.3)",borderRadius:8,padding:"8px 16px",fontSize:12,color:"#f43f5e",textAlign:"center"},children:["🔒 Locked — try again in ",f0(l)]}),E.jsx("div",{className:o?"pin-shake":"",style:{display:"flex",gap:12,marginTop:4},children:Array.from({length:4}).map((C,U)=>{const L=t==="pin-entry"?U<n.length:x==="enter"?U<f.length:U<d.length;return E.jsx("div",{style:{width:14,height:14,borderRadius:"50%",border:"2px solid rgba(124,58,237,0.6)",background:L?"#7c3aed":"transparent",boxShadow:L?"0 0 8px rgba(124,58,237,0.8)":"none",transition:"all 0.15s"}},U)})}),r&&E.jsx("div",{style:{fontSize:12,color:"#f43f5e",textAlign:"center"},children:r}),E.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,width:200},children:rb.map(C=>E.jsx("button",{className:"pin-digit-btn",onClick:()=>A(C),disabled:l>0||C==="✓"&&(t==="pin-entry"?n.length<4:x==="enter"?f.length<4:d.length<4),style:{padding:"14px 0",borderRadius:10,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)",color:C==="✓"?"#10b981":C==="⌫"?"#f43f5e":"#fff",fontSize:C==="✓"||C==="⌫"?18:20,fontWeight:700,cursor:"pointer"},children:C},C))}),t==="pin-setup"&&x==="confirm"&&E.jsx("button",{onClick:()=>{y("enter"),h(""),m(""),s("")},style:{fontSize:11,color:"rgba(255,255,255,0.35)",background:"none",border:"none",cursor:"pointer"},children:"← Re-enter PIN"})]}),t==="open"&&E.jsxs("div",{style:{background:"rgba(10,10,26,0.95)",border:"1px solid rgba(124,58,237,0.25)",borderRadius:16,padding:16,display:"flex",flexDirection:"column",gap:12},children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[E.jsx("span",{style:{fontSize:14,color:"#c4b5fd"},children:"🔑"}),E.jsxs("span",{style:{flex:1,fontWeight:700,fontSize:13,color:"#fff"},children:["API Keys — ",B,"/",W.length," AI providers active"]}),E.jsx("button",{onClick:b,style:{padding:"4px 12px",borderRadius:8,border:"1px solid rgba(255,255,255,0.1)",background:"transparent",color:"rgba(255,255,255,0.4)",fontSize:11,cursor:"pointer"},children:"🔒 Lock"})]}),E.jsx("div",{style:{fontSize:11,color:"rgba(255,255,255,0.35)",paddingBottom:8,borderBottom:"1px solid rgba(255,255,255,0.06)"},children:"Keys saved in browser storage — never leave your device."}),E.jsxs("div",{style:{fontSize:10,fontWeight:800,color:"rgba(255,255,255,0.3)",letterSpacing:"1px",textTransform:"uppercase"},children:["🤖 AI Providers (",B,"/",W.length,")"]}),p0.map(C=>{const U=p[C.id]||"",L=U.trim().length>0,O=I[C.id]||"idle";return E.jsxs("div",{className:"key-row-card",style:{background:"rgba(255,255,255,0.03)",border:`1px solid ${O==="ok"?"rgba(52,211,153,0.3)":O==="fail"?"rgba(244,63,94,0.3)":"rgba(255,255,255,0.06)"}`,borderRadius:10,padding:"10px 14px"},children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:7},children:[E.jsx("span",{style:{fontSize:14},children:C.icon}),E.jsx("span",{style:{fontWeight:700,fontSize:12,color:C.color},children:C.label}),E.jsx("span",{style:{fontSize:9,fontWeight:800,color:"#fff",background:C.color+"33",border:`1px solid ${C.color}55`,padding:"1px 6px",borderRadius:8},children:C.badge}),O==="ok"&&E.jsx("span",{style:{fontSize:10,color:"#34d399",marginLeft:"auto"},children:"✓ Valid"}),O==="fail"&&E.jsx("span",{style:{fontSize:10,color:"#f87171",marginLeft:"auto"},children:"✗ Invalid"}),O==="idle"&&L&&E.jsx("span",{style:{fontSize:10,color:"rgba(255,255,255,0.3)",marginLeft:"auto"},children:"saved"})]}),E.jsxs("div",{style:{display:"flex",gap:7},children:[E.jsx("input",{type:g[C.id]?"text":"password",value:U,onChange:X=>k(C.id,X.target.value),placeholder:C.placeholder,style:{flex:1,padding:"7px 10px",borderRadius:7,border:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.04)",color:"#fff",fontSize:11,fontFamily:"monospace",outline:"none"}}),L&&E.jsx("button",{onClick:()=>H(C.id,U),disabled:O==="testing",style:{padding:"6px 10px",borderRadius:7,border:"1px solid rgba(52,211,153,0.3)",background:"rgba(52,211,153,0.08)",cursor:"pointer",fontSize:11,color:"#34d399",whiteSpace:"nowrap"},children:O==="testing"?"…":"▶ Test"}),E.jsx("button",{onClick:()=>u(X=>({...X,[C.id]:!X[C.id]})),style:{padding:"6px 10px",borderRadius:7,border:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.05)",cursor:"pointer",fontSize:12,color:"rgba(255,255,255,0.5)"},children:g[C.id]?"🙈":"👁"}),L&&E.jsx("button",{onClick:()=>k(C.id,""),style:{padding:"6px 10px",borderRadius:7,border:"1px solid rgba(244,63,94,0.3)",background:"rgba(244,63,94,0.1)",cursor:"pointer",fontSize:11,color:"#f87171"},children:"✕"})]}),E.jsx("div",{style:{fontSize:10,color:"rgba(255,255,255,0.3)",marginTop:5},children:C.hint})]},C.id)}),E.jsx("div",{style:{fontSize:10,fontWeight:800,color:"rgba(255,255,255,0.3)",letterSpacing:"1px",textTransform:"uppercase",marginTop:4},children:"🗄️ Data Source Keys (optional)"}),ib.map(C=>{const U=p[C.id]||"",L=U.trim().length>0;return E.jsxs("div",{className:"key-row-card",style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:10,padding:"10px 14px"},children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:7},children:[E.jsx("span",{style:{fontSize:14},children:C.icon}),E.jsx("span",{style:{fontWeight:700,fontSize:12,color:C.color},children:C.label}),E.jsx("span",{style:{fontSize:9,fontWeight:800,color:"#fff",background:C.color+"33",padding:"1px 6px",borderRadius:8},children:"DATA"}),L&&E.jsx("span",{style:{fontSize:10,color:"#34d399",marginLeft:"auto"},children:"✓ saved"})]}),E.jsxs("div",{style:{display:"flex",gap:7},children:[E.jsx("input",{type:g[C.id]?"text":"password",value:U,onChange:O=>k(C.id,O.target.value),placeholder:C.placeholder,style:{flex:1,padding:"7px 10px",borderRadius:7,border:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.04)",color:"#fff",fontSize:11,fontFamily:"monospace",outline:"none"}}),E.jsx("button",{onClick:()=>u(O=>({...O,[C.id]:!O[C.id]})),style:{padding:"6px 10px",borderRadius:7,border:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.05)",cursor:"pointer",fontSize:12,color:"rgba(255,255,255,0.5)"},children:g[C.id]?"🙈":"👁"}),L&&E.jsx("button",{onClick:()=>k(C.id,""),style:{padding:"6px 10px",borderRadius:7,border:"1px solid rgba(244,63,94,0.3)",background:"rgba(244,63,94,0.1)",cursor:"pointer",fontSize:11,color:"#f87171"},children:"✕"})]}),E.jsx("div",{style:{fontSize:10,color:"rgba(255,255,255,0.3)",marginTop:5},children:C.hint})]},C.id)}),E.jsx("div",{style:{fontSize:10,color:"rgba(255,255,255,0.2)",padding:"8px 12px",background:"rgba(255,255,255,0.02)",borderRadius:8,border:"1px solid rgba(255,255,255,0.04)",marginTop:4},children:"💡 Gemini handles M5 matching. DeepSeek & Cerebras are fast fallbacks. All 8 AI providers form a waterfall chain — no batch is ever dropped. UMLS & BioPortal unlock extra M3 terminology tiers."})]})]})]})}const ab=`
  @keyframes slideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}
  @keyframes fadeOverlay{from{opacity:0}to{opacity:1}}
  .admin-panel{animation:slideIn 0.25s ease forwards;}
  .admin-overlay{animation:fadeOverlay 0.2s ease forwards;}
  .admin-remove-btn{transition:all 0.15s;}
  .admin-remove-btn:hover{background:rgba(244,63,94,0.2)!important;color:#f87171!important;}
  .admin-add-input{transition:border-color 0.2s;}
  .admin-add-input:focus{border-color:rgba(124,58,237,0.5)!important;outline:none!important;box-shadow:0 0 0 3px rgba(124,58,237,0.15)!important;}
`;function g0({currentUser:t,onClose:e}){const[n,i]=oe.useState([]),[r,s]=oe.useState(""),[o,a]=oe.useState(""),[l,c]=oe.useState(""),[f,h]=oe.useState(""),[d,m]=oe.useState(!1),[x,y]=oe.useState(!1);function g(){i(_c())}oe.useEffect(()=>{g()},[]);async function u(b){if(b.preventDefault(),c(""),h(""),!r.trim()){c("Username is required.");return}if(!o.trim()||o.length<6){c("Password must be at least 6 characters.");return}m(!0);try{const A=await _T(o);xT(r.trim(),A),h(`User "${r.trim()}" added.`),s(""),a(""),g()}catch(A){c(A.message||"Failed to add user.")}finally{m(!1)}}function p(b){if(confirm(`Remove user "${b}"? This cannot be undone.`))try{vT(b),g(),h(`User "${b}" removed.`),c("")}catch(A){c(A.message)}}const v=n.filter(b=>b.role!=="SUPER_ADMIN"),S=n.find(b=>b.role==="SUPER_ADMIN");return E.jsxs(E.Fragment,{children:[E.jsx("style",{children:ab}),E.jsx("div",{className:"admin-overlay",onClick:e,style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:300}}),E.jsxs("div",{className:"admin-panel",style:{position:"fixed",top:0,right:0,bottom:0,width:"100%",maxWidth:420,background:"linear-gradient(180deg,#0f0a1e 0%,#0a0a1a 100%)",borderLeft:"1px solid rgba(124,58,237,0.2)",zIndex:301,display:"flex",flexDirection:"column",overflow:"hidden"},children:[E.jsxs("div",{style:{padding:"20px 24px 16px",borderBottom:"1px solid rgba(255,255,255,0.07)",display:"flex",alignItems:"center",gap:12},children:[E.jsx("span",{style:{fontSize:20,filter:"drop-shadow(0 0 8px rgba(124,58,237,0.7))"},children:"👥"}),E.jsxs("div",{style:{flex:1},children:[E.jsx("div",{style:{color:"#fff",fontWeight:800,fontSize:15},children:"User Management"}),E.jsx("div",{style:{color:"rgba(255,255,255,0.35)",fontSize:11,marginTop:2},children:"Super Admin controls"})]}),E.jsx("button",{onClick:e,style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:8,color:"rgba(255,255,255,0.5)",fontSize:16,cursor:"pointer",width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),E.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"20px 24px",display:"flex",flexDirection:"column",gap:20},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontSize:10,fontWeight:800,color:"rgba(255,255,255,0.3)",letterSpacing:"1px",textTransform:"uppercase",marginBottom:8},children:"Super Admin"}),E.jsxs("div",{style:{background:"rgba(124,58,237,0.12)",border:"1px solid rgba(124,58,237,0.25)",borderRadius:12,padding:"12px 16px",display:"flex",alignItems:"center",gap:12},children:[E.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:"linear-gradient(135deg,#7c3aed,#a855f7)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16},children:"👑"}),E.jsxs("div",{style:{flex:1},children:[E.jsx("div",{style:{color:"#c4b5fd",fontWeight:700,fontSize:13},children:S==null?void 0:S.username}),E.jsx("div",{style:{color:"rgba(255,255,255,0.3)",fontSize:11,marginTop:2},children:"Full system access · cannot be removed"})]}),E.jsx("span",{style:{fontSize:9,fontWeight:800,padding:"3px 8px",borderRadius:10,background:"rgba(124,58,237,0.3)",color:"#c4b5fd",border:"1px solid rgba(124,58,237,0.4)"},children:"ADMIN"})]})]}),E.jsxs("div",{children:[E.jsxs("div",{style:{fontSize:10,fontWeight:800,color:"rgba(255,255,255,0.3)",letterSpacing:"1px",textTransform:"uppercase",marginBottom:8},children:["Users (",v.length,")"]}),v.length===0?E.jsx("div",{style:{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:12,padding:"20px",textAlign:"center",color:"rgba(255,255,255,0.25)",fontSize:12},children:"No regular users yet. Add one below."}):E.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:v.map(b=>E.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:12,padding:"12px 16px",display:"flex",alignItems:"center",gap:12},children:[E.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:"linear-gradient(135deg,#0f172a,#1e293b)",border:"1px solid rgba(6,182,212,0.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16},children:"👤"}),E.jsxs("div",{style:{flex:1},children:[E.jsx("div",{style:{color:"#fff",fontWeight:600,fontSize:13},children:b.username}),E.jsx("div",{style:{color:"rgba(255,255,255,0.3)",fontSize:11,marginTop:2},children:"Standard user · pipeline access only"})]}),E.jsx("span",{style:{fontSize:9,fontWeight:800,padding:"3px 8px",borderRadius:10,background:"rgba(6,182,212,0.15)",color:"#67e8f9",border:"1px solid rgba(6,182,212,0.25)"},children:"USER"}),b.username!==t&&E.jsx("button",{className:"admin-remove-btn",onClick:()=>p(b.username),style:{padding:"5px 10px",borderRadius:8,border:"1px solid rgba(244,63,94,0.25)",background:"rgba(244,63,94,0.08)",color:"#f87171",cursor:"pointer",fontSize:11},children:"Remove"})]},b.username))})]}),E.jsxs("div",{children:[E.jsx("div",{style:{fontSize:10,fontWeight:800,color:"rgba(255,255,255,0.3)",letterSpacing:"1px",textTransform:"uppercase",marginBottom:12},children:"Add New User"}),E.jsxs("form",{onSubmit:u,style:{display:"flex",flexDirection:"column",gap:12},children:[E.jsxs("div",{children:[E.jsx("label",{style:{display:"block",fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.4)",marginBottom:6,letterSpacing:"0.8px"},children:"USERNAME"}),E.jsx("input",{className:"admin-add-input",type:"text",value:r,onChange:b=>s(b.target.value),placeholder:"e.g. JohnDoe",autoComplete:"off",style:{width:"100%",padding:"10px 14px",borderRadius:10,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)",color:"#fff",fontSize:13,boxSizing:"border-box"}})]}),E.jsxs("div",{children:[E.jsx("label",{style:{display:"block",fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.4)",marginBottom:6,letterSpacing:"0.8px"},children:"PASSWORD"}),E.jsxs("div",{style:{position:"relative"},children:[E.jsx("input",{className:"admin-add-input",type:x?"text":"password",value:o,onChange:b=>a(b.target.value),placeholder:"Minimum 6 characters",autoComplete:"new-password",style:{width:"100%",padding:"10px 44px 10px 14px",borderRadius:10,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)",color:"#fff",fontSize:13,boxSizing:"border-box"}}),E.jsx("button",{type:"button",onClick:()=>y(b=>!b),tabIndex:-1,style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",fontSize:14,color:"rgba(255,255,255,0.35)"},children:x?"🙈":"👁️"})]})]}),l&&E.jsx("div",{style:{fontSize:12,color:"#f87171",background:"rgba(244,63,94,0.1)",border:"1px solid rgba(244,63,94,0.25)",borderRadius:8,padding:"8px 12px"},children:l}),f&&E.jsx("div",{style:{fontSize:12,color:"#34d399",background:"rgba(52,211,153,0.1)",border:"1px solid rgba(52,211,153,0.25)",borderRadius:8,padding:"8px 12px"},children:f}),E.jsx("button",{type:"submit",disabled:d,style:{padding:"11px",borderRadius:10,border:"none",background:"linear-gradient(135deg,#7c3aed,#06b6d4)",color:"#fff",fontWeight:700,fontSize:13,cursor:"pointer",boxShadow:"0 4px 20px rgba(124,58,237,0.3)",transition:"all 0.2s"},children:d?"Adding…":"+ Add User"})]})]}),E.jsx("div",{style:{fontSize:11,color:"rgba(255,255,255,0.2)",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.04)",borderRadius:8,padding:"10px 12px"},children:"💡 Regular users have access to all pipeline modules but cannot see or edit API keys. User data is stored in this browser's localStorage."})]})]})]})}const lb=`
  .ms-stagger-1 { animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.0s both; }
  .ms-stagger-2 { animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.1s both; }
  .ms-stagger-3 { animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.2s both; }
  .ms-stagger-4 { animation: fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) 0.3s both; }
  @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }

  .ms-tilt { transform-style:preserve-3d; transition:transform 0.12s ease; will-change:transform; }

  /* AUTO card — white on black */
  .ms-card-auto {
    background: #ffffff; color: #000000;
    border: none;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
  }
  .ms-card-auto:hover {
    box-shadow: 0 32px 80px rgba(255,255,255,0.15), 0 0 0 2px rgba(255,255,255,0.5);
  }
  .ms-card-auto .ms-feature { color: rgba(0,0,0,0.55); }
  .ms-card-auto .ms-feature-check { color: #dc2626; }
  .ms-card-auto .ms-tag { background: #000; color: #fff; }
  .ms-card-auto .ms-cta {
    background: #dc2626; color: #fff;
    border: none; cursor: pointer;
    font-weight: 800; letter-spacing: 2px; text-transform: uppercase;
    transition: all 0.2s;
  }
  .ms-card-auto .ms-cta:hover { background: #b91c1c; transform: translateY(-1px); }

  /* MANUAL card — black on black, white border */
  .ms-card-manual {
    background: #0d0d0d; color: #ffffff;
    border: 1px solid rgba(255,255,255,0.12);
    cursor: pointer;
    transition: border-color 0.3s, box-shadow 0.3s;
  }
  .ms-card-manual:hover {
    border-color: rgba(255,255,255,0.5);
    box-shadow: 0 32px 80px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.2);
  }
  .ms-card-manual .ms-feature { color: rgba(255,255,255,0.45); }
  .ms-card-manual .ms-feature-check { color: #dc2626; }
  .ms-card-manual .ms-tag { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.6); }
  .ms-card-manual .ms-cta {
    background: transparent; color: #fff;
    border: 1px solid rgba(255,255,255,0.25); cursor: pointer;
    font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
    transition: all 0.2s;
  }
  .ms-card-manual .ms-cta:hover { border-color: #dc2626; color: #dc2626; background: rgba(220,38,38,0.08); }

  /* Divider line with label */
  .ms-divider { position: relative; display: flex; align-items: center; gap: 16px; }
  .ms-divider::before, .ms-divider::after {
    content: ''; flex: 1; height: 1px; background: rgba(255,255,255,0.08);
  }
`;function x0({children:t,className:e,style:n,onClick:i}){const r=oe.useRef(null);function s(a){const l=r.current;if(!l)return;const c=l.getBoundingClientRect(),f=(a.clientX-(c.left+c.width/2))/(c.width/2),h=(a.clientY-(c.top+c.height/2))/(c.height/2);l.style.transform=`perspective(800px) rotateY(${f*7}deg) rotateX(${-h*6}deg) scale3d(1.02,1.02,1.02)`}function o(){const a=r.current;a&&(a.style.transform="perspective(800px) rotateY(0) rotateX(0) scale3d(1,1,1)")}return E.jsx("div",{ref:r,className:`ms-tilt ${e||""}`,style:{...n,borderRadius:20,overflow:"hidden"},onMouseMove:s,onMouseLeave:o,onClick:i,children:t})}function cb({onSelect:t}){return E.jsxs(E.Fragment,{children:[E.jsx("style",{children:lb}),E.jsx(gv,{}),E.jsx("div",{style:{position:"fixed",inset:0,zIndex:1,pointerEvents:"none",background:"rgba(0,0,0,0.55)"}}),E.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 24px",position:"relative",zIndex:2},children:[E.jsxs("div",{className:"ms-stagger-1",style:{textAlign:"center",marginBottom:48},children:[E.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:10,marginBottom:20,padding:"6px 16px 6px 10px",borderRadius:20,border:"1px solid rgba(220,38,38,0.35)",background:"rgba(220,38,38,0.08)"},children:[E.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:[E.jsx("rect",{x:"5.5",y:"0",width:"3",height:"14",rx:"1",fill:"#dc2626"}),E.jsx("rect",{x:"0",y:"5.5",width:"14",height:"3",rx:"1",fill:"#dc2626"})]}),E.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#dc2626",letterSpacing:"2.5px",textTransform:"uppercase"},children:"Eden Care Pipeline"})]}),E.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 48px)",fontWeight:900,color:"#ffffff",letterSpacing:"-0.04em",lineHeight:1,marginBottom:12},children:"Select Processing Mode"}),E.jsx("p",{style:{fontSize:14,color:"rgba(255,255,255,0.38)",maxWidth:380,margin:"0 auto"},children:"Choose how you want to process your insurance catalog data through the pipeline"})]}),E.jsxs("div",{className:"ms-stagger-2",style:{display:"flex",gap:20,flexWrap:"wrap",justifyContent:"center",maxWidth:760,width:"100%"},children:[E.jsx(x0,{className:"ms-card-auto",style:{flex:"1 1 320px",maxWidth:360},onClick:()=>t("auto"),children:E.jsxs("div",{style:{padding:"32px 28px 28px"},children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:28},children:[E.jsx("span",{className:"ms-tag",style:{fontSize:9,fontWeight:800,padding:"4px 10px",borderRadius:6,letterSpacing:"2px",textTransform:"uppercase"},children:"Recommended"}),E.jsx("span",{style:{fontSize:28},children:"🤖"})]}),E.jsx("h3",{style:{fontSize:24,fontWeight:900,letterSpacing:"-0.04em",marginBottom:6,color:"inherit"},children:"Auto Mode"}),E.jsx("p",{className:"ms-feature",style:{fontSize:13,lineHeight:1.6,marginBottom:24},children:"Upload once. All 7 modules execute automatically with live status updates."}),E.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:10,marginBottom:28},children:["Upload → full pipeline executes","Live neural status per module","Delta report auto-downloads","Zero manual intervention"].map(e=>E.jsxs("li",{style:{display:"flex",gap:10,fontSize:12.5,alignItems:"flex-start"},children:[E.jsx("span",{className:"ms-feature-check",style:{fontWeight:900,flexShrink:0,marginTop:1},children:"✕"}),E.jsx("span",{className:"ms-feature",children:e})]},e))}),E.jsx("button",{className:"ms-cta",style:{width:"100%",padding:"14px",borderRadius:12,fontSize:12},children:"Launch Auto Pipeline →"})]})}),E.jsxs("div",{className:"ms-divider",style:{alignSelf:"stretch",flexDirection:"column",width:1,minHeight:300},children:[E.jsx("div",{style:{flex:1,width:1,background:"rgba(255,255,255,0.07)"}}),E.jsx("span",{style:{fontSize:10,color:"rgba(255,255,255,0.2)",letterSpacing:"2px",textTransform:"uppercase",writingMode:"vertical-lr"},children:"or"}),E.jsx("div",{style:{flex:1,width:1,background:"rgba(255,255,255,0.07)"}})]}),E.jsx(x0,{className:"ms-card-manual",style:{flex:"1 1 320px",maxWidth:360},onClick:()=>t("manual"),children:E.jsxs("div",{style:{padding:"32px 28px 28px"},children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:28},children:[E.jsx("span",{className:"ms-tag",style:{fontSize:9,fontWeight:700,padding:"4px 10px",borderRadius:6,letterSpacing:"2px",textTransform:"uppercase"},children:"Full Control"}),E.jsx("span",{style:{fontSize:28},children:"🎛️"})]}),E.jsx("h3",{style:{fontSize:24,fontWeight:900,letterSpacing:"-0.04em",marginBottom:6,color:"inherit"},children:"Manual Mode"}),E.jsx("p",{className:"ms-feature",style:{fontSize:13,lineHeight:1.6,marginBottom:24},children:"Step through each module individually. Inspect and verify at every stage."}),E.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:10,marginBottom:28},children:["Step-by-step navigation","Inspect results per module","Modify inputs before advancing","Best for QA & troubleshooting"].map(e=>E.jsxs("li",{style:{display:"flex",gap:10,fontSize:12.5,alignItems:"flex-start"},children:[E.jsx("span",{className:"ms-feature-check",style:{fontWeight:900,flexShrink:0,marginTop:1},children:"✕"}),E.jsx("span",{className:"ms-feature",children:e})]},e))}),E.jsx("button",{className:"ms-cta",style:{width:"100%",padding:"14px",borderRadius:12,fontSize:12},children:"Start Manual Mode →"})]})})]}),E.jsx("div",{className:"ms-stagger-4",style:{marginTop:36,fontSize:11,color:"rgba(255,255,255,0.2)",letterSpacing:"0.5px"},children:"Switch modes at any time from the navigation bar"})]})]})}const v0={m0Result:null,m1Result:null,m2Result:null,m3Result:null,m4Result:null,m5Result:null};function vv(){const[t,e]=oe.useState(v0);function n(c){e(f=>({...f,m0Result:c}))}function i(c){e(f=>({...f,m1Result:c}))}function r(c){e(f=>({...f,m2Result:c}))}function s(c){e(f=>({...f,m3Result:c}))}function o(c){e(f=>({...f,m4Result:c}))}function a(c){e(f=>({...f,m5Result:c}))}function l(){e(v0)}return{state:t,setM0:n,setM1:i,setM2:r,setM3:s,setM4:o,setM5:a,reset:l}}const ub=oe.lazy(()=>Tt(()=>import("./M0PreScan-myKsc9j9.js"),__vite__mapDeps([0,1,2]))),db=oe.lazy(()=>Tt(()=>import("./M1PHIScrubber-BbAijPmC.js"),__vite__mapDeps([3,1]))),fb=oe.lazy(()=>Tt(()=>import("./M2TriageRouter-DBO3j3ul.js"),__vite__mapDeps([4,1]))),hb=oe.lazy(()=>Tt(()=>import("./M3AliasEngine-CLhjO6on.js"),__vite__mapDeps([5,1,6]))),pb=oe.lazy(()=>Tt(()=>import("./M4ConfidenceThreshold-9zzSO57n.js"),__vite__mapDeps([7,1,6,2]))),mb=oe.lazy(()=>Tt(()=>import("./M5DefinitionEngine-Di2WqjvR.js"),__vite__mapDeps([8,1]))),gb=oe.lazy(()=>Tt(()=>import("./M6DeltaReport-DY2ZqRUJ.js"),__vite__mapDeps([9,1]))),Uu=[{key:"m0",num:"01",label:"Pre-Scan",desc:"Catalog upload & pre-match"},{key:"m1",num:"02",label:"PHI Scrubber",desc:"Anonymize patient identifiers"},{key:"m2",num:"03",label:"Triage Router",desc:"Route by clinical domain"},{key:"m3",num:"04",label:"Alias Engine",desc:"Resolve aliases via APIs"},{key:"m5",num:"05",label:"Definition Engine",desc:"Enrich clinical definitions"},{key:"m4",num:"06",label:"DNA + Confidence",desc:"Assign M4 codes + confidence"},{key:"m6",num:"07",label:"Delta Report",desc:"Generate comparison report"}],xb=`
  @keyframes amp-spin  { to { transform: rotate(360deg); } }
  @keyframes amp-pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
  @keyframes amp-rowIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
  @keyframes amp-barFill { from{width:0%} }
  @keyframes amp-redPulse { 0%,100%{box-shadow:0 0 0 0 rgba(220,38,38,0)} 50%{box-shadow:0 0 0 6px rgba(220,38,38,0.15)} }
  .amp-row { animation: amp-rowIn 0.3s cubic-bezier(0.16,1,0.3,1) both; }
  .amp-running-text { animation: amp-pulse 1.4s ease-in-out infinite; }
  .amp-spinner { width:16px;height:16px;border-radius:50%;border:2px solid rgba(220,38,38,0.2);border-top-color:#dc2626;display:inline-block;animation:amp-spin 0.8s linear infinite; }
  .amp-active-row { animation: amp-redPulse 2s ease-in-out infinite; }
`;function vb({onComplete:t}){var k,H,W,B,C,U;const{state:e,setM0:n,setM1:i,setM2:r,setM3:s,setM4:o,setM5:a}=vv(),[l,c]=oe.useState({m0:"running",m1:"waiting",m2:"waiting",m3:"waiting",m5:"waiting",m4:"waiting",m6:"waiting"}),[f,h]=oe.useState({m0:"Upload catalog files to begin"}),[d,m]=oe.useState("m0"),[x,y]=oe.useState("uploading"),[g,u]=oe.useState(1);function p(L,O,X){c(J=>({...J,[L]:O})),X&&h(J=>({...J,[L]:X}))}function v(L){var J,ee;n(L);const O=((J=L==null?void 0:L.preMatched)==null?void 0:J.length)||0,X=((ee=L==null?void 0:L.toProcess)==null?void 0:ee.length)||0;p("m0","done",`${O} pre-matched · ${X} to process`),y("running"),m("m1"),p("m1","running","Scanning for PHI…"),u(2)}function S(L){i(L),p("m1","done",`Risk: ${(L==null?void 0:L.riskLevel)||"clean"}`),m("m2"),p("m2","running","Routing by domain…"),u(3)}function b(L){var O;r(L),p("m2","done",`${((O=L==null?void 0:L.triaged)==null?void 0:O.length)||0} items triaged`),m("m3"),p("m3","running","Resolving aliases…"),u(4)}function A(L){var O;s(L),p("m3","done",`${((O=L==null?void 0:L.resolved)==null?void 0:O.length)||0} resolved`),m("m5"),p("m5","running","Enriching definitions…"),u(5)}function R(L){var O;a(L),p("m5","done",`${((O=L==null?void 0:L.enriched)==null?void 0:O.length)||0} enriched`),m("m4"),p("m4","running","Assigning DNA codes…"),u(6)}function _(L){var O;o(L),p("m4","done",`${((O=L==null?void 0:L.results)==null?void 0:O.length)||0} codes assigned`),m("m6"),p("m6","running","Generating delta report…"),u(7)}function w(){p("m6","done","Report generated · downloaded ✓"),m(null),y("done"),t==null||t()}const I=Object.values(l).filter(L=>L==="done").length,D=Math.round(I/Uu.length*100);return E.jsxs(E.Fragment,{children:[E.jsx("style",{children:xb}),E.jsxs("div",{style:{maxWidth:860,margin:"0 auto",padding:"32px 20px"},children:[E.jsxs("div",{style:{marginBottom:24},children:[E.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:6},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#dc2626",letterSpacing:"3px",textTransform:"uppercase",marginBottom:4},children:"Auto Pipeline"}),E.jsx("h2",{style:{fontSize:24,fontWeight:900,color:"#ffffff",letterSpacing:"-0.04em",lineHeight:1},children:x==="uploading"?"Upload Files to Begin":x==="done"?"Pipeline Complete":`Processing — ${I}/7`})]}),E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[x==="running"&&E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,padding:"5px 12px",borderRadius:6,border:"1px solid rgba(220,38,38,0.35)",background:"rgba(220,38,38,0.07)"},children:[E.jsx("div",{className:"live-dot"}),E.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#dc2626",letterSpacing:"2px",textTransform:"uppercase"},children:"Live"})]}),E.jsxs("span",{style:{fontSize:22,fontWeight:900,color:D===100?"#ffffff":"rgba(255,255,255,0.3)"},children:[D,"%"]})]})]}),(x==="running"||x==="done")&&E.jsx("div",{style:{height:2,background:"rgba(255,255,255,0.08)",borderRadius:1,overflow:"hidden"},children:E.jsx("div",{style:{height:"100%",width:`${D}%`,background:D===100?"#ffffff":"#dc2626",transition:"width 0.6s cubic-bezier(0.16,1,0.3,1)",animation:"amp-barFill 0.6s ease"}})})]}),E.jsxs("div",{style:{border:"1px solid rgba(255,255,255,0.08)",borderRadius:16,overflow:"hidden"},children:[E.jsx("div",{style:{display:"grid",gridTemplateColumns:"48px 1fr 100px 120px",padding:"10px 20px",background:"rgba(255,255,255,0.03)",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:["#","Module","Status","Result"].map(L=>E.jsx("span",{style:{fontSize:9,fontWeight:700,color:"rgba(255,255,255,0.25)",letterSpacing:"2px",textTransform:"uppercase"},children:L},L))}),Uu.map((L,O)=>{const X=l[L.key],J=f[L.key],ee=d===L.key,ve=X==="done";return E.jsxs("div",{className:`amp-row${ee?" amp-active-row":""}`,style:{display:"grid",gridTemplateColumns:"48px 1fr 100px 120px",padding:"14px 20px",alignItems:"center",background:ve?"rgba(255,255,255,0.02)":ee?"rgba(220,38,38,0.05)":"transparent",borderBottom:O<Uu.length-1?"1px solid rgba(255,255,255,0.05)":"none",transition:"background 0.3s",animationDelay:`${O*.04}s`},children:[E.jsx("span",{style:{fontWeight:900,fontSize:13,fontFamily:"monospace",color:ve?"rgba(255,255,255,0.2)":ee?"#dc2626":"rgba(255,255,255,0.12)"},children:L.num}),E.jsxs("div",{children:[E.jsxs("div",{style:{fontWeight:700,fontSize:13,color:ve?"rgba(255,255,255,0.5)":ee?"#ffffff":"rgba(255,255,255,0.3)",marginBottom:2},children:[ee&&E.jsx("span",{className:"amp-spinner",style:{marginRight:8}}),L.label]}),E.jsx("div",{style:{fontSize:11,color:"rgba(255,255,255,0.2)"},children:L.desc})]}),E.jsxs("div",{children:[X==="waiting"&&E.jsx("span",{style:{fontSize:9,padding:"3px 8px",borderRadius:4,background:"rgba(255,255,255,0.04)",color:"rgba(255,255,255,0.2)",fontWeight:700,letterSpacing:"1px"},children:"WAITING"}),X==="running"&&E.jsx("span",{style:{fontSize:9,padding:"3px 8px",borderRadius:4,background:"rgba(220,38,38,0.15)",color:"#ef4444",fontWeight:700,letterSpacing:"1px",border:"1px solid rgba(220,38,38,0.3)"},children:"RUNNING"}),X==="done"&&E.jsx("span",{style:{fontSize:9,padding:"3px 8px",borderRadius:4,background:"rgba(255,255,255,0.08)",color:"#ffffff",fontWeight:700,letterSpacing:"1px"},children:"DONE"}),X==="error"&&E.jsx("span",{style:{fontSize:9,padding:"3px 8px",borderRadius:4,background:"rgba(220,38,38,0.2)",color:"#ef4444",fontWeight:700,letterSpacing:"1px"},children:"ERROR"})]}),E.jsx("div",{className:ee?"amp-running-text":"",style:{fontSize:11,color:ve?"rgba(255,255,255,0.45)":"rgba(255,255,255,0.2)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:J||"—"})]},L.key)})]}),x==="uploading"&&E.jsxs("div",{style:{marginTop:24},children:[E.jsx("div",{style:{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.3)",letterSpacing:"2px",textTransform:"uppercase",marginBottom:12},children:"Step 01 — Pre-Scan Upload"}),E.jsx(oe.Suspense,{fallback:E.jsx("div",{style:{padding:32,textAlign:"center",border:"1px dashed rgba(255,255,255,0.08)",borderRadius:12,color:"rgba(255,255,255,0.3)",fontSize:13},children:"Loading upload module…"}),children:E.jsx(ub,{onComplete:v})})]}),x==="done"&&E.jsxs("div",{style:{marginTop:24,padding:"28px 32px",background:"#ffffff",borderRadius:16,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#dc2626",letterSpacing:"3px",textTransform:"uppercase",marginBottom:4},children:"Pipeline Complete"}),E.jsx("div",{style:{fontSize:20,fontWeight:900,color:"#000000",letterSpacing:"-0.04em"},children:"All 7 modules finished"}),E.jsx("div",{style:{fontSize:13,color:"rgba(0,0,0,0.5)",marginTop:4},children:"Delta report has been generated and downloaded."})]}),E.jsx("div",{style:{fontSize:40},children:"✓"})]}),x==="running"&&E.jsx("div",{style:{position:"absolute",left:"-9999px",pointerEvents:"none",width:1,height:1,overflow:"hidden"},children:E.jsxs(oe.Suspense,{fallback:null,children:[g===2&&E.jsx(db,{prefillData:e.m0Result?{toProcess:e.m0Result.toProcess}:null,onComplete:S}),g===3&&E.jsx(fb,{prefillData:e.m1Result,onComplete:b}),g===4&&E.jsx(hb,{prefillData:e.m2Result,onComplete:A}),g===5&&E.jsx(mb,{prefillData:e.m3Result,onComplete:R}),g===6&&E.jsx(pb,{prefillData:{...e.m5Result||e.m3Result,masterCatalogs:(k=e.m0Result)==null?void 0:k.masterCatalogs},onComplete:_}),g===7&&E.jsx(gb,{prefillData:{results:(H=e.m4Result)==null?void 0:H.results,hospitalName:(W=e.m4Result)==null?void 0:W.hospitalName,masterCatalogs:(B=e.m4Result)==null?void 0:B.masterCatalogs,masterDNAs:(C=e.m4Result)==null?void 0:C.masterDNAs,preMatched:(U=e.m0Result)==null?void 0:U.preMatched},onComplete:w})]})})]})]})}const Jl="audit_log_v1",_v=500;function _0(t){try{const e=JSON.parse(localStorage.getItem(Jl)||"[]"),n={...t,id:crypto.randomUUID?crypto.randomUUID():Date.now().toString(36),timestamp:new Date().toISOString()};localStorage.setItem(Jl,JSON.stringify([n,...e].slice(0,_v)))}catch{}}function _b(t="system"){function e(i){_0({...i,user:t})}function n(i,r,s="pipeline"){_0({module:i,action:"ERROR: "+r,fileName:s,outcome:"error",itemCount:0,user:t})}return{writeEntry:e,logError:n}}function Pb(t,e,n="pipeline"){try{const i=JSON.parse(localStorage.getItem(Jl)||"[]"),r={id:crypto.randomUUID?crypto.randomUUID():Date.now().toString(36),timestamp:new Date().toISOString(),module:t,action:"ERROR: "+e,fileName:n,outcome:"error",itemCount:0,user:"system"};localStorage.setItem(Jl,JSON.stringify([r,...i].slice(0,_v)))}catch{}}const yb=oe.lazy(()=>Tt(()=>import("./M0PreScan-myKsc9j9.js"),__vite__mapDeps([0,1,2]))),Sb=oe.lazy(()=>Tt(()=>import("./M1PHIScrubber-BbAijPmC.js"),__vite__mapDeps([3,1]))),Mb=oe.lazy(()=>Tt(()=>import("./M2TriageRouter-DBO3j3ul.js"),__vite__mapDeps([4,1]))),Eb=oe.lazy(()=>Tt(()=>import("./M3AliasEngine-CLhjO6on.js"),__vite__mapDeps([5,1,6]))),wb=oe.lazy(()=>Tt(()=>import("./M4ConfidenceThreshold-9zzSO57n.js"),__vite__mapDeps([7,1,6,2]))),Tb=oe.lazy(()=>Tt(()=>import("./M5DefinitionEngine-Di2WqjvR.js"),__vite__mapDeps([8,1]))),bb=oe.lazy(()=>Tt(()=>import("./M6DeltaReport-DY2ZqRUJ.js"),__vite__mapDeps([9,1]))),Ab=oe.lazy(()=>Tt(()=>import("./M7AuditLog-C6CXZ9zB.js"),__vite__mapDeps([10,1]))),Rb=30*60*1e3,po="eden_mode_v1";function Cb(){var O,X,J,ee,ve,Oe;const[t,e]=oe.useState("landing"),[n,i]=oe.useState(null),[r,s]=oe.useState("USER"),[o,a]=oe.useState(1),[l,c]=oe.useState(new Set),[f,h]=oe.useState(null),[d,m]=oe.useState(!1),[x,y]=oe.useState(null),[g,u]=oe.useState(0),p=oe.useRef(null),{state:v,setM0:S,setM1:b,setM2:A,setM3:R,setM4:_,setM5:w}=vv();oe.useEffect(()=>{const ce=sessionStorage.getItem(vl);if(ce)try{const j=JSON.parse(ce);if(j.username){const ie=btoa((navigator.userAgent+t.width+t.height).slice(0,200));if(j.fingerprint&&j.fingerprint!==ie){sessionStorage.removeItem(vl);return}i(j.username),s(j.role||"USER"),I();const le=sessionStorage.getItem(po);(le==="auto"||le==="manual")&&h(le),e("app")}}catch{}},[]),oe.useEffect(()=>{if(!n)return;function ce(){p.current&&clearTimeout(p.current),p.current=setTimeout(()=>{W("session-expired")},Rb)}return ce(),window.addEventListener("mousemove",ce),window.addEventListener("keydown",ce),window.addEventListener("click",ce),()=>{p.current&&clearTimeout(p.current),window.removeEventListener("mousemove",ce),window.removeEventListener("keydown",ce),window.removeEventListener("click",ce)}},[n]);function I(){try{u(_c().length)}catch{u(1)}}const{writeEntry:D}=_b(n||"system");function k(ce,j="info"){y({msg:ce,type:j}),setTimeout(()=>y(null),3500)}function H(ce,j){i(ce),s(j),I(),h(null),sessionStorage.removeItem(po),e("app")}function W(ce){sessionStorage.removeItem(vl),sessionStorage.removeItem(po),i(null),s("USER"),a(1),c(new Set),h(null),m(!1),e("landing"),ce==="session-expired"&&k("Session expired — please sign in again.","error")}function B(){W()}function C(ce){h(ce),sessionStorage.setItem(po,ce)}function U(){const ce=f==="auto"?"manual":"auto";h(ce),sessionStorage.setItem(po,ce)}function L(ce,j,ie){var le,Ne,Le,De,ut,We;ie(j),c($e=>new Set([...$e,ce])),a(ce+1<=8?ce+1:ce),D({module:"Step"+ce,action:"Step completed — passed to Step "+(ce+1),fileName:"pipeline",outcome:"success",itemCount:Array.isArray(j)?j.length:((le=j==null?void 0:j.rows)==null?void 0:le.length)||((Ne=j==null?void 0:j.triaged)==null?void 0:Ne.length)||((Le=j==null?void 0:j.resolved)==null?void 0:Le.length)||((De=j==null?void 0:j.results)==null?void 0:De.length)||((ut=j==null?void 0:j.enriched)==null?void 0:ut.length)||((We=j==null?void 0:j.toProcess)==null?void 0:We.length)||0})}return t==="landing"?E.jsx(pT,{onEnter:()=>e("login")}):n?f===null?E.jsxs(E.Fragment,{children:[E.jsx(cb,{onSelect:C}),x&&E.jsx(Qa,{msg:x.msg,type:x.type})]}):f==="auto"?E.jsxs(E.Fragment,{children:[E.jsx(d0,{username:n,role:r,mode:f,onModeToggle:U,onLogout:B,onAdminPanel:r==="SUPER_ADMIN"?()=>m(!0):void 0,userCount:r==="SUPER_ADMIN"?g:void 0,pipelineRunning:!0}),E.jsx(m0,{role:r}),E.jsx(vb,{onComplete:()=>k("Pipeline complete! Delta report downloaded.","success")}),d&&r==="SUPER_ADMIN"&&E.jsx(g0,{currentUser:n,onClose:()=>{m(!1),I()}}),x&&E.jsx(Qa,{msg:x.msg,type:x.type})]}):E.jsxs(E.Fragment,{children:[E.jsx(d0,{username:n,role:r,mode:f,onModeToggle:U,onLogout:B,onAdminPanel:r==="SUPER_ADMIN"?()=>m(!0):void 0,userCount:r==="SUPER_ADMIN"?g:void 0}),E.jsx(m0,{role:r}),E.jsx("div",{style:{display:"none"},children:E.jsxs(oe.Suspense,{fallback:null,children:[o===2&&E.jsx(Sb,{prefillData:v.m0Result?{toProcess:v.m0Result.toProcess}:null,onComplete:ce=>L(2,ce,b)}),o===3&&E.jsx(Mb,{prefillData:v.m1Result,onComplete:ce=>L(3,ce,A)}),o===4&&E.jsx(Eb,{prefillData:v.m2Result,onComplete:ce=>L(4,ce,R)}),o===5&&E.jsx(Tb,{prefillData:v.m3Result,onComplete:ce=>L(5,ce,w)}),o===6&&E.jsx(wb,{prefillData:{...v.m5Result||v.m3Result,masterCatalogs:(O=v.m0Result)==null?void 0:O.masterCatalogs},onComplete:ce=>L(6,ce,_)}),o===7&&E.jsx(bb,{prefillData:{results:(X=v.m4Result)==null?void 0:X.results,hospitalName:(J=v.m4Result)==null?void 0:J.hospitalName,masterCatalogs:(ee=v.m4Result)==null?void 0:ee.masterCatalogs,masterDNAs:(ve=v.m4Result)==null?void 0:ve.masterDNAs,preMatched:(Oe=v.m0Result)==null?void 0:Oe.preMatched},onComplete:()=>L(7,{},()=>{})}),o===8&&E.jsx(Ab,{}),o===1&&E.jsx(yb,{onComplete:ce=>L(1,ce,S)})]})}),d&&r==="SUPER_ADMIN"&&E.jsx(g0,{currentUser:n,onClose:()=>{m(!1),I()}}),x&&E.jsx(Qa,{msg:x.msg,type:x.type})]}):E.jsxs(E.Fragment,{children:[E.jsx(wT,{onLogin:H}),x&&E.jsx(Qa,{msg:x.msg,type:x.type})]})}function Qa({msg:t,type:e}){const i={error:{bg:"#fff5f5",border:"#dc2626",text:"#dc2626"},success:{bg:"#f0fdf4",border:"#16a34a",text:"#16a34a"},info:{bg:"#f8fafc",border:"#64748b",text:"#334155"}}[e];return E.jsx("div",{style:{position:"fixed",bottom:28,left:"50%",transform:"translateX(-50%)",background:i.bg,border:"1px solid rgba(0,0,0,0.08)",borderLeft:`3px solid ${i.border}`,borderRadius:10,padding:"12px 24px",color:i.text,fontSize:12,fontWeight:700,zIndex:9999,boxShadow:"0 8px 40px rgba(0,0,0,0.12)",whiteSpace:"nowrap",letterSpacing:"0.5px",animation:"toastSlide 0.3s cubic-bezier(0.16,1,0.3,1)",fontFamily:"Inter, -apple-system, sans-serif"},children:t})}Fu.createRoot(document.getElementById("root")).render(E.jsx(Gv.StrictMode,{children:E.jsx(Cb,{})}));export{Gv as R,YT as a,KT as b,GT as c,QT as d,Qn as g,E as j,Pb as l,oe as r,kT as s,_b as u};
