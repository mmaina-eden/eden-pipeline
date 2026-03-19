const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/M0PreScan-BA-tck_L.js","assets/xlsx-CKN5doRT.js","assets/masterCatalogs-BbD_0MWE.js","assets/M1PHIScrubber-YkSOGB62.js","assets/M2TriageRouter-Bm7XwYYI.js","assets/M3AliasEngine-D-jF6WjV.js","assets/cohere-Dswmjygu.js","assets/M4ConfidenceThreshold-DaMAY3Y0.js","assets/M5DefinitionEngine-3sFys_2X.js","assets/M6DeltaReport-DxgK6osZ.js","assets/M7AuditLog-B-57k9uo.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Lv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var yg={exports:{}},ec={},Sg={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yo=Symbol.for("react.element"),Dv=Symbol.for("react.portal"),Nv=Symbol.for("react.fragment"),Iv=Symbol.for("react.strict_mode"),Uv=Symbol.for("react.profiler"),Fv=Symbol.for("react.provider"),Ov=Symbol.for("react.context"),kv=Symbol.for("react.forward_ref"),zv=Symbol.for("react.suspense"),Bv=Symbol.for("react.memo"),Vv=Symbol.for("react.lazy"),Jh=Symbol.iterator;function Hv(t){return t===null||typeof t!="object"?null:(t=Jh&&t[Jh]||t["@@iterator"],typeof t=="function"?t:null)}var Mg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Eg=Object.assign,bg={};function Fs(t,e,n){this.props=t,this.context=e,this.refs=bg,this.updater=n||Mg}Fs.prototype.isReactComponent={};Fs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Fs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function wg(){}wg.prototype=Fs.prototype;function Lf(t,e,n){this.props=t,this.context=e,this.refs=bg,this.updater=n||Mg}var Df=Lf.prototype=new wg;Df.constructor=Lf;Eg(Df,Fs.prototype);Df.isPureReactComponent=!0;var Zh=Array.isArray,Tg=Object.prototype.hasOwnProperty,Nf={current:null},Ag={key:!0,ref:!0,__self:!0,__source:!0};function Rg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Tg.call(e,i)&&!Ag.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Yo,type:t,key:s,ref:o,props:r,_owner:Nf.current}}function Gv(t,e){return{$$typeof:Yo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function If(t){return typeof t=="object"&&t!==null&&t.$$typeof===Yo}function Wv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qh=/\/+/g;function Ec(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Wv(""+t.key):e.toString(36)}function Za(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Yo:case Dv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ec(o,0):i,Zh(r)?(n="",t!=null&&(n=t.replace(Qh,"$&/")+"/"),Za(r,e,n,"",function(c){return c})):r!=null&&(If(r)&&(r=Gv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Qh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Zh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ec(s,a);o+=Za(s,e,n,l,r)}else if(l=Hv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ec(s,a++),o+=Za(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function sa(t,e,n){if(t==null)return t;var i=[],r=0;return Za(t,i,"","",function(s){return e.call(n,s,r++)}),i}function jv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var rn={current:null},Qa={transition:null},Xv={ReactCurrentDispatcher:rn,ReactCurrentBatchConfig:Qa,ReactCurrentOwner:Nf};function Cg(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:sa,forEach:function(t,e,n){sa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return sa(t,function(){e++}),e},toArray:function(t){return sa(t,function(e){return e})||[]},only:function(t){if(!If(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Fs;Xe.Fragment=Nv;Xe.Profiler=Uv;Xe.PureComponent=Lf;Xe.StrictMode=Iv;Xe.Suspense=zv;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xv;Xe.act=Cg;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Eg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Nf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Tg.call(e,l)&&!Ag.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Yo,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:Ov,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Fv,_context:t},t.Consumer=t};Xe.createElement=Rg;Xe.createFactory=function(t){var e=Rg.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:kv,render:t}};Xe.isValidElement=If;Xe.lazy=function(t){return{$$typeof:Vv,_payload:{_status:-1,_result:t},_init:jv}};Xe.memo=function(t,e){return{$$typeof:Bv,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=Qa.transition;Qa.transition={};try{t()}finally{Qa.transition=e}};Xe.unstable_act=Cg;Xe.useCallback=function(t,e){return rn.current.useCallback(t,e)};Xe.useContext=function(t){return rn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return rn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return rn.current.useEffect(t,e)};Xe.useId=function(){return rn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return rn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return rn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return rn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return rn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return rn.current.useReducer(t,e,n)};Xe.useRef=function(t){return rn.current.useRef(t)};Xe.useState=function(t){return rn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return rn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return rn.current.useTransition()};Xe.version="18.3.1";Sg.exports=Xe;var se=Sg.exports;const Yv=Lv(se);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $v=se,qv=Symbol.for("react.element"),Kv=Symbol.for("react.fragment"),Jv=Object.prototype.hasOwnProperty,Zv=$v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Qv={key:!0,ref:!0,__self:!0,__source:!0};function Pg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Jv.call(e,i)&&!Qv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:qv,type:t,key:s,ref:o,props:r,_owner:Zv.current}}ec.Fragment=Kv;ec.jsx=Pg;ec.jsxs=Pg;yg.exports=ec;var S=yg.exports,zu={},Lg={exports:{}},bn={},Dg={exports:{}},Ng={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,O){var $=L.length;L.push(O);e:for(;0<$;){var Z=$-1>>>1,ie=L[Z];if(0<r(ie,O))L[Z]=O,L[$]=ie,$=Z;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var O=L[0],$=L.pop();if($!==O){L[0]=$;e:for(var Z=0,ie=L.length,Ae=ie>>>1;Z<Ae;){var We=2*(Z+1)-1,te=L[We],G=We+1,ee=L[G];if(0>r(te,$))G<ie&&0>r(ee,te)?(L[Z]=ee,L[G]=$,Z=G):(L[Z]=te,L[We]=$,Z=We);else if(G<ie&&0>r(ee,$))L[Z]=ee,L[G]=$,Z=G;else break e}}return O}function r(L,O){var $=L.sortIndex-O.sortIndex;return $!==0?$:L.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,d=3,m=!1,g=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var O=n(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=L)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(c)}}function _(L){if(M=!1,v(L),!g)if(n(l)!==null)g=!0,P(T);else{var O=n(c);O!==null&&N(_,O.startTime-L)}}function T(L,O){g=!1,M&&(M=!1,u(y),y=-1),m=!0;var $=d;try{for(v(O),h=n(l);h!==null&&(!(h.expirationTime>O)||L&&!D());){var Z=h.callback;if(typeof Z=="function"){h.callback=null,d=h.priorityLevel;var ie=Z(h.expirationTime<=O);O=t.unstable_now(),typeof ie=="function"?h.callback=ie:h===n(l)&&i(l),v(O)}else i(l);h=n(l)}if(h!==null)var Ae=!0;else{var We=n(c);We!==null&&N(_,We.startTime-O),Ae=!1}return Ae}finally{h=null,d=$,m=!1}}var A=!1,R=null,y=-1,w=5,F=-1;function D(){return!(t.unstable_now()-F<w)}function V(){if(R!==null){var L=t.unstable_now();F=L;var O=!0;try{O=R(!0,L)}finally{O?W():(A=!1,R=null)}}else A=!1}var W;if(typeof p=="function")W=function(){p(V)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,z=j.port2;j.port1.onmessage=V,W=function(){z.postMessage(null)}}else W=function(){x(V,0)};function P(L){R=L,A||(A=!0,W())}function N(L,O){y=x(function(){L(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){g||m||(g=!0,P(T))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var O=3;break;default:O=d}var $=d;d=O;try{return L()}finally{d=$}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,O){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var $=d;d=L;try{return O()}finally{d=$}},t.unstable_scheduleCallback=function(L,O,$){var Z=t.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?Z+$:Z):$=Z,L){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=$+ie,L={id:f++,callback:O,priorityLevel:L,startTime:$,expirationTime:ie,sortIndex:-1},$>Z?(L.sortIndex=$,e(c,L),n(l)===null&&L===n(c)&&(M?(u(y),y=-1):M=!0,N(_,$-Z))):(L.sortIndex=ie,e(l,L),g||m||(g=!0,P(T))),L},t.unstable_shouldYield=D,t.unstable_wrapCallback=function(L){var O=d;return function(){var $=d;d=O;try{return L.apply(this,arguments)}finally{d=$}}}})(Ng);Dg.exports=Ng;var e_=Dg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var t_=se,En=e_;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ig=new Set,To={};function zr(t,e){bs(t,e),bs(t+"Capture",e)}function bs(t,e){for(To[t]=e,t=0;t<e.length;t++)Ig.add(e[t])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bu=Object.prototype.hasOwnProperty,n_=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ep={},tp={};function i_(t){return Bu.call(tp,t)?!0:Bu.call(ep,t)?!1:n_.test(t)?tp[t]=!0:(ep[t]=!0,!1)}function r_(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function s_(t,e,n,i){if(e===null||typeof e>"u"||r_(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function sn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Gt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Gt[t]=new sn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Gt[e]=new sn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Gt[t]=new sn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Gt[t]=new sn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Gt[t]=new sn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Gt[t]=new sn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Gt[t]=new sn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Gt[t]=new sn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Gt[t]=new sn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uf=/[\-:]([a-z])/g;function Ff(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uf,Ff);Gt[e]=new sn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uf,Ff);Gt[e]=new sn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uf,Ff);Gt[e]=new sn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Gt[t]=new sn(t,1,!1,t.toLowerCase(),null,!1,!1)});Gt.xlinkHref=new sn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Gt[t]=new sn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Of(t,e,n,i){var r=Gt.hasOwnProperty(e)?Gt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(s_(e,n,r,i)&&(n=null),i||r===null?i_(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Di=t_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,oa=Symbol.for("react.element"),rs=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),kf=Symbol.for("react.strict_mode"),Vu=Symbol.for("react.profiler"),Ug=Symbol.for("react.provider"),Fg=Symbol.for("react.context"),zf=Symbol.for("react.forward_ref"),Hu=Symbol.for("react.suspense"),Gu=Symbol.for("react.suspense_list"),Bf=Symbol.for("react.memo"),Gi=Symbol.for("react.lazy"),Og=Symbol.for("react.offscreen"),np=Symbol.iterator;function Gs(t){return t===null||typeof t!="object"?null:(t=np&&t[np]||t["@@iterator"],typeof t=="function"?t:null)}var vt=Object.assign,bc;function oo(t){if(bc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bc=e&&e[1]||""}return`
`+bc+t}var wc=!1;function Tc(t,e){if(!t||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?oo(t):""}function o_(t){switch(t.tag){case 5:return oo(t.type);case 16:return oo("Lazy");case 13:return oo("Suspense");case 19:return oo("SuspenseList");case 0:case 2:case 15:return t=Tc(t.type,!1),t;case 11:return t=Tc(t.type.render,!1),t;case 1:return t=Tc(t.type,!0),t;default:return""}}function Wu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ss:return"Fragment";case rs:return"Portal";case Vu:return"Profiler";case kf:return"StrictMode";case Hu:return"Suspense";case Gu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Fg:return(t.displayName||"Context")+".Consumer";case Ug:return(t._context.displayName||"Context")+".Provider";case zf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Bf:return e=t.displayName||null,e!==null?e:Wu(t.type)||"Memo";case Gi:e=t._payload,t=t._init;try{return Wu(t(e))}catch{}}return null}function a_(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Wu(e);case 8:return e===kf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function kg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function l_(t){var e=kg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function aa(t){t._valueTracker||(t._valueTracker=l_(t))}function zg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=kg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function vl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ju(t,e){var n=e.checked;return vt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function ip(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bg(t,e){e=e.checked,e!=null&&Of(t,"checked",e,!1)}function Xu(t,e){Bg(t,e);var n=or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Yu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Yu(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function rp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Yu(t,e,n){(e!=="number"||vl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ao=Array.isArray;function gs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function $u(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return vt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(ao(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function Vg(t,e){var n=or(e.value),i=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function op(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Hg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var la,Gg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(la=la||document.createElement("div"),la.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=la.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ao(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},c_=["Webkit","ms","Moz","O"];Object.keys(po).forEach(function(t){c_.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),po[e]=po[t]})});function Wg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||po.hasOwnProperty(t)&&po[t]?(""+e).trim():e+"px"}function jg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Wg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var u_=vt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ku(t,e){if(e){if(u_[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Ju(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zu=null;function Vf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Qu=null,xs=null,vs=null;function ap(t){if(t=Ko(t)){if(typeof Qu!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=sc(e),Qu(t.stateNode,t.type,e))}}function Xg(t){xs?vs?vs.push(t):vs=[t]:xs=t}function Yg(){if(xs){var t=xs,e=vs;if(vs=xs=null,ap(t),e)for(t=0;t<e.length;t++)ap(e[t])}}function $g(t,e){return t(e)}function qg(){}var Ac=!1;function Kg(t,e,n){if(Ac)return t(e,n);Ac=!0;try{return $g(t,e,n)}finally{Ac=!1,(xs!==null||vs!==null)&&(qg(),Yg())}}function Ro(t,e){var n=t.stateNode;if(n===null)return null;var i=sc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var ed=!1;if(wi)try{var Ws={};Object.defineProperty(Ws,"passive",{get:function(){ed=!0}}),window.addEventListener("test",Ws,Ws),window.removeEventListener("test",Ws,Ws)}catch{ed=!1}function d_(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var mo=!1,_l=null,yl=!1,td=null,f_={onError:function(t){mo=!0,_l=t}};function h_(t,e,n,i,r,s,o,a,l){mo=!1,_l=null,d_.apply(f_,arguments)}function p_(t,e,n,i,r,s,o,a,l){if(h_.apply(this,arguments),mo){if(mo){var c=_l;mo=!1,_l=null}else throw Error(oe(198));yl||(yl=!0,td=c)}}function Br(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function lp(t){if(Br(t)!==t)throw Error(oe(188))}function m_(t){var e=t.alternate;if(!e){if(e=Br(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return lp(r),t;if(s===i)return lp(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Zg(t){return t=m_(t),t!==null?Qg(t):null}function Qg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Qg(t);if(e!==null)return e;t=t.sibling}return null}var e0=En.unstable_scheduleCallback,cp=En.unstable_cancelCallback,g_=En.unstable_shouldYield,x_=En.unstable_requestPaint,Tt=En.unstable_now,v_=En.unstable_getCurrentPriorityLevel,Hf=En.unstable_ImmediatePriority,t0=En.unstable_UserBlockingPriority,Sl=En.unstable_NormalPriority,__=En.unstable_LowPriority,n0=En.unstable_IdlePriority,tc=null,ii=null;function y_(t){if(ii&&typeof ii.onCommitFiberRoot=="function")try{ii.onCommitFiberRoot(tc,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:E_,S_=Math.log,M_=Math.LN2;function E_(t){return t>>>=0,t===0?32:31-(S_(t)/M_|0)|0}var ca=64,ua=4194304;function lo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=lo(a):(s&=o,s!==0&&(i=lo(s)))}else o=n&~r,o!==0?i=lo(o):s!==0&&(i=lo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Wn(e),r=1<<n,i|=t[n],e&=~r;return i}function b_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function w_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=b_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function nd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function i0(){var t=ca;return ca<<=1,!(ca&4194240)&&(ca=64),t}function Rc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function $o(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wn(e),t[e]=n}function T_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Wn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Gf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Wn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var it=0;function r0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var s0,Wf,o0,a0,l0,id=!1,da=[],Ji=null,Zi=null,Qi=null,Co=new Map,Po=new Map,ji=[],A_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function up(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":Co.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Po.delete(e.pointerId)}}function js(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ko(e),e!==null&&Wf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function R_(t,e,n,i,r){switch(e){case"focusin":return Ji=js(Ji,t,e,n,i,r),!0;case"dragenter":return Zi=js(Zi,t,e,n,i,r),!0;case"mouseover":return Qi=js(Qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Co.set(s,js(Co.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Po.set(s,js(Po.get(s)||null,t,e,n,i,r)),!0}return!1}function c0(t){var e=Tr(t.target);if(e!==null){var n=Br(e);if(n!==null){if(e=n.tag,e===13){if(e=Jg(n),e!==null){t.blockedOn=e,l0(t.priority,function(){o0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function el(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=rd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Zu=i,n.target.dispatchEvent(i),Zu=null}else return e=Ko(n),e!==null&&Wf(e),t.blockedOn=n,!1;e.shift()}return!0}function dp(t,e,n){el(t)&&n.delete(e)}function C_(){id=!1,Ji!==null&&el(Ji)&&(Ji=null),Zi!==null&&el(Zi)&&(Zi=null),Qi!==null&&el(Qi)&&(Qi=null),Co.forEach(dp),Po.forEach(dp)}function Xs(t,e){t.blockedOn===e&&(t.blockedOn=null,id||(id=!0,En.unstable_scheduleCallback(En.unstable_NormalPriority,C_)))}function Lo(t){function e(r){return Xs(r,t)}if(0<da.length){Xs(da[0],t);for(var n=1;n<da.length;n++){var i=da[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&Xs(Ji,t),Zi!==null&&Xs(Zi,t),Qi!==null&&Xs(Qi,t),Co.forEach(e),Po.forEach(e),n=0;n<ji.length;n++)i=ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ji.length&&(n=ji[0],n.blockedOn===null);)c0(n),n.blockedOn===null&&ji.shift()}var _s=Di.ReactCurrentBatchConfig,El=!0;function P_(t,e,n,i){var r=it,s=_s.transition;_s.transition=null;try{it=1,jf(t,e,n,i)}finally{it=r,_s.transition=s}}function L_(t,e,n,i){var r=it,s=_s.transition;_s.transition=null;try{it=4,jf(t,e,n,i)}finally{it=r,_s.transition=s}}function jf(t,e,n,i){if(El){var r=rd(t,e,n,i);if(r===null)kc(t,e,i,bl,n),up(t,i);else if(R_(r,t,e,n,i))i.stopPropagation();else if(up(t,i),e&4&&-1<A_.indexOf(t)){for(;r!==null;){var s=Ko(r);if(s!==null&&s0(s),s=rd(t,e,n,i),s===null&&kc(t,e,i,bl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else kc(t,e,i,null,n)}}var bl=null;function rd(t,e,n,i){if(bl=null,t=Vf(i),t=Tr(t),t!==null)if(e=Br(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Jg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return bl=t,null}function u0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(v_()){case Hf:return 1;case t0:return 4;case Sl:case __:return 16;case n0:return 536870912;default:return 16}default:return 16}}var $i=null,Xf=null,tl=null;function d0(){if(tl)return tl;var t,e=Xf,n=e.length,i,r="value"in $i?$i.value:$i.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return tl=r.slice(t,1<i?1-i:void 0)}function nl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function fa(){return!0}function fp(){return!1}function wn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?fa:fp,this.isPropagationStopped=fp,this}return vt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=fa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=fa)},persist:function(){},isPersistent:fa}),e}var Os={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yf=wn(Os),qo=vt({},Os,{view:0,detail:0}),D_=wn(qo),Cc,Pc,Ys,nc=vt({},qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$f,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ys&&(Ys&&t.type==="mousemove"?(Cc=t.screenX-Ys.screenX,Pc=t.screenY-Ys.screenY):Pc=Cc=0,Ys=t),Cc)},movementY:function(t){return"movementY"in t?t.movementY:Pc}}),hp=wn(nc),N_=vt({},nc,{dataTransfer:0}),I_=wn(N_),U_=vt({},qo,{relatedTarget:0}),Lc=wn(U_),F_=vt({},Os,{animationName:0,elapsedTime:0,pseudoElement:0}),O_=wn(F_),k_=vt({},Os,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),z_=wn(k_),B_=vt({},Os,{data:0}),pp=wn(B_),V_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},H_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},G_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function W_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=G_[t])?!!e[t]:!1}function $f(){return W_}var j_=vt({},qo,{key:function(t){if(t.key){var e=V_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=nl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?H_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$f,charCode:function(t){return t.type==="keypress"?nl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?nl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),X_=wn(j_),Y_=vt({},nc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mp=wn(Y_),$_=vt({},qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$f}),q_=wn($_),K_=vt({},Os,{propertyName:0,elapsedTime:0,pseudoElement:0}),J_=wn(K_),Z_=vt({},nc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Q_=wn(Z_),ey=[9,13,27,32],qf=wi&&"CompositionEvent"in window,go=null;wi&&"documentMode"in document&&(go=document.documentMode);var ty=wi&&"TextEvent"in window&&!go,f0=wi&&(!qf||go&&8<go&&11>=go),gp=" ",xp=!1;function h0(t,e){switch(t){case"keyup":return ey.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function p0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function ny(t,e){switch(t){case"compositionend":return p0(e);case"keypress":return e.which!==32?null:(xp=!0,gp);case"textInput":return t=e.data,t===gp&&xp?null:t;default:return null}}function iy(t,e){if(os)return t==="compositionend"||!qf&&h0(t,e)?(t=d0(),tl=Xf=$i=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return f0&&e.locale!=="ko"?null:e.data;default:return null}}var ry={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ry[t.type]:e==="textarea"}function m0(t,e,n,i){Xg(i),e=wl(e,"onChange"),0<e.length&&(n=new Yf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var xo=null,Do=null;function sy(t){T0(t,0)}function ic(t){var e=cs(t);if(zg(e))return t}function oy(t,e){if(t==="change")return e}var g0=!1;if(wi){var Dc;if(wi){var Nc="oninput"in document;if(!Nc){var _p=document.createElement("div");_p.setAttribute("oninput","return;"),Nc=typeof _p.oninput=="function"}Dc=Nc}else Dc=!1;g0=Dc&&(!document.documentMode||9<document.documentMode)}function yp(){xo&&(xo.detachEvent("onpropertychange",x0),Do=xo=null)}function x0(t){if(t.propertyName==="value"&&ic(Do)){var e=[];m0(e,Do,t,Vf(t)),Kg(sy,e)}}function ay(t,e,n){t==="focusin"?(yp(),xo=e,Do=n,xo.attachEvent("onpropertychange",x0)):t==="focusout"&&yp()}function ly(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ic(Do)}function cy(t,e){if(t==="click")return ic(e)}function uy(t,e){if(t==="input"||t==="change")return ic(e)}function dy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xn=typeof Object.is=="function"?Object.is:dy;function No(t,e){if(Xn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Bu.call(e,r)||!Xn(t[r],e[r]))return!1}return!0}function Sp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Mp(t,e){var n=Sp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sp(n)}}function v0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?v0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function _0(){for(var t=window,e=vl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vl(t.document)}return e}function Kf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function fy(t){var e=_0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&v0(n.ownerDocument.documentElement,n)){if(i!==null&&Kf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Mp(n,s);var o=Mp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var hy=wi&&"documentMode"in document&&11>=document.documentMode,as=null,sd=null,vo=null,od=!1;function Ep(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;od||as==null||as!==vl(i)||(i=as,"selectionStart"in i&&Kf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),vo&&No(vo,i)||(vo=i,i=wl(sd,"onSelect"),0<i.length&&(e=new Yf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=as)))}function ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ls={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionend:ha("Transition","TransitionEnd")},Ic={},y0={};wi&&(y0=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function rc(t){if(Ic[t])return Ic[t];if(!ls[t])return t;var e=ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in y0)return Ic[t]=e[n];return t}var S0=rc("animationend"),M0=rc("animationiteration"),E0=rc("animationstart"),b0=rc("transitionend"),w0=new Map,bp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,e){w0.set(t,e),zr(e,[t])}for(var Uc=0;Uc<bp.length;Uc++){var Fc=bp[Uc],py=Fc.toLowerCase(),my=Fc[0].toUpperCase()+Fc.slice(1);cr(py,"on"+my)}cr(S0,"onAnimationEnd");cr(M0,"onAnimationIteration");cr(E0,"onAnimationStart");cr("dblclick","onDoubleClick");cr("focusin","onFocus");cr("focusout","onBlur");cr(b0,"onTransitionEnd");bs("onMouseEnter",["mouseout","mouseover"]);bs("onMouseLeave",["mouseout","mouseover"]);bs("onPointerEnter",["pointerout","pointerover"]);bs("onPointerLeave",["pointerout","pointerover"]);zr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));zr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));zr("onBeforeInput",["compositionend","keypress","textInput","paste"]);zr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));zr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gy=new Set("cancel close invalid load scroll toggle".split(" ").concat(co));function wp(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,p_(i,e,void 0,t),t.currentTarget=null}function T0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;wp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;wp(r,a,c),s=l}}}if(yl)throw t=td,yl=!1,td=null,t}function dt(t,e){var n=e[dd];n===void 0&&(n=e[dd]=new Set);var i=t+"__bubble";n.has(i)||(A0(e,t,2,!1),n.add(i))}function Oc(t,e,n){var i=0;e&&(i|=4),A0(n,t,i,e)}var pa="_reactListening"+Math.random().toString(36).slice(2);function Io(t){if(!t[pa]){t[pa]=!0,Ig.forEach(function(n){n!=="selectionchange"&&(gy.has(n)||Oc(n,!1,t),Oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[pa]||(e[pa]=!0,Oc("selectionchange",!1,e))}}function A0(t,e,n,i){switch(u0(e)){case 1:var r=P_;break;case 4:r=L_;break;default:r=jf}n=r.bind(null,e,n,t),r=void 0,!ed||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function kc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Tr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Kg(function(){var c=s,f=Vf(n),h=[];e:{var d=w0.get(t);if(d!==void 0){var m=Yf,g=t;switch(t){case"keypress":if(nl(n)===0)break e;case"keydown":case"keyup":m=X_;break;case"focusin":g="focus",m=Lc;break;case"focusout":g="blur",m=Lc;break;case"beforeblur":case"afterblur":m=Lc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=hp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=I_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=q_;break;case S0:case M0:case E0:m=O_;break;case b0:m=J_;break;case"scroll":m=D_;break;case"wheel":m=Q_;break;case"copy":case"cut":case"paste":m=z_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=mp}var M=(e&4)!==0,x=!M&&t==="scroll",u=M?d!==null?d+"Capture":null:d;M=[];for(var p=c,v;p!==null;){v=p;var _=v.stateNode;if(v.tag===5&&_!==null&&(v=_,u!==null&&(_=Ro(p,u),_!=null&&M.push(Uo(p,_,v)))),x)break;p=p.return}0<M.length&&(d=new m(d,g,null,n,f),h.push({event:d,listeners:M}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==Zu&&(g=n.relatedTarget||n.fromElement)&&(Tr(g)||g[Ti]))break e;if((m||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=c,g=g?Tr(g):null,g!==null&&(x=Br(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=c),m!==g)){if(M=hp,_="onMouseLeave",u="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(M=mp,_="onPointerLeave",u="onPointerEnter",p="pointer"),x=m==null?d:cs(m),v=g==null?d:cs(g),d=new M(_,p+"leave",m,n,f),d.target=x,d.relatedTarget=v,_=null,Tr(f)===c&&(M=new M(u,p+"enter",g,n,f),M.target=v,M.relatedTarget=x,_=M),x=_,m&&g)t:{for(M=m,u=g,p=0,v=M;v;v=Gr(v))p++;for(v=0,_=u;_;_=Gr(_))v++;for(;0<p-v;)M=Gr(M),p--;for(;0<v-p;)u=Gr(u),v--;for(;p--;){if(M===u||u!==null&&M===u.alternate)break t;M=Gr(M),u=Gr(u)}M=null}else M=null;m!==null&&Tp(h,d,m,M,!1),g!==null&&x!==null&&Tp(h,x,g,M,!0)}}e:{if(d=c?cs(c):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var T=oy;else if(vp(d))if(g0)T=uy;else{T=ly;var A=ay}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(T=cy);if(T&&(T=T(t,c))){m0(h,T,n,f);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Yu(d,"number",d.value)}switch(A=c?cs(c):window,t){case"focusin":(vp(A)||A.contentEditable==="true")&&(as=A,sd=c,vo=null);break;case"focusout":vo=sd=as=null;break;case"mousedown":od=!0;break;case"contextmenu":case"mouseup":case"dragend":od=!1,Ep(h,n,f);break;case"selectionchange":if(hy)break;case"keydown":case"keyup":Ep(h,n,f)}var R;if(qf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else os?h0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(f0&&n.locale!=="ko"&&(os||y!=="onCompositionStart"?y==="onCompositionEnd"&&os&&(R=d0()):($i=f,Xf="value"in $i?$i.value:$i.textContent,os=!0)),A=wl(c,y),0<A.length&&(y=new pp(y,t,null,n,f),h.push({event:y,listeners:A}),R?y.data=R:(R=p0(n),R!==null&&(y.data=R)))),(R=ty?ny(t,n):iy(t,n))&&(c=wl(c,"onBeforeInput"),0<c.length&&(f=new pp("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=R))}T0(h,e)})}function Uo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function wl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ro(t,n),s!=null&&i.unshift(Uo(t,s,r)),s=Ro(t,e),s!=null&&i.push(Uo(t,s,r))),t=t.return}return i}function Gr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Tp(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Ro(n,s),l!=null&&o.unshift(Uo(n,l,a))):r||(l=Ro(n,s),l!=null&&o.push(Uo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var xy=/\r\n?/g,vy=/\u0000|\uFFFD/g;function Ap(t){return(typeof t=="string"?t:""+t).replace(xy,`
`).replace(vy,"")}function ma(t,e,n){if(e=Ap(e),Ap(t)!==e&&n)throw Error(oe(425))}function Tl(){}var ad=null,ld=null;function cd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ud=typeof setTimeout=="function"?setTimeout:void 0,_y=typeof clearTimeout=="function"?clearTimeout:void 0,Rp=typeof Promise=="function"?Promise:void 0,yy=typeof queueMicrotask=="function"?queueMicrotask:typeof Rp<"u"?function(t){return Rp.resolve(null).then(t).catch(Sy)}:ud;function Sy(t){setTimeout(function(){throw t})}function zc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Lo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Lo(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Cp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),ei="__reactFiber$"+ks,Fo="__reactProps$"+ks,Ti="__reactContainer$"+ks,dd="__reactEvents$"+ks,My="__reactListeners$"+ks,Ey="__reactHandles$"+ks;function Tr(t){var e=t[ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ti]||n[ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Cp(t);t!==null;){if(n=t[ei])return n;t=Cp(t)}return e}t=n,n=t.parentNode}return null}function Ko(t){return t=t[ei]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function sc(t){return t[Fo]||null}var fd=[],us=-1;function ur(t){return{current:t}}function ft(t){0>us||(t.current=fd[us],fd[us]=null,us--)}function ut(t,e){us++,fd[us]=t.current,t.current=e}var ar={},Jt=ur(ar),cn=ur(!1),Nr=ar;function ws(t,e){var n=t.type.contextTypes;if(!n)return ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function Al(){ft(cn),ft(Jt)}function Pp(t,e,n){if(Jt.current!==ar)throw Error(oe(168));ut(Jt,e),ut(cn,n)}function R0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,a_(t)||"Unknown",r));return vt({},n,i)}function Rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,Nr=Jt.current,ut(Jt,t),ut(cn,cn.current),!0}function Lp(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=R0(t,e,Nr),i.__reactInternalMemoizedMergedChildContext=t,ft(cn),ft(Jt),ut(Jt,t)):ft(cn),ut(cn,n)}var xi=null,oc=!1,Bc=!1;function C0(t){xi===null?xi=[t]:xi.push(t)}function by(t){oc=!0,C0(t)}function dr(){if(!Bc&&xi!==null){Bc=!0;var t=0,e=it;try{var n=xi;for(it=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xi=null,oc=!1}catch(r){throw xi!==null&&(xi=xi.slice(t+1)),e0(Hf,dr),r}finally{it=e,Bc=!1}}return null}var ds=[],fs=0,Cl=null,Pl=0,An=[],Rn=0,Ir=null,_i=1,yi="";function yr(t,e){ds[fs++]=Pl,ds[fs++]=Cl,Cl=t,Pl=e}function P0(t,e,n){An[Rn++]=_i,An[Rn++]=yi,An[Rn++]=Ir,Ir=t;var i=_i;t=yi;var r=32-Wn(i)-1;i&=~(1<<r),n+=1;var s=32-Wn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,_i=1<<32-Wn(e)+r|n<<r|i,yi=s+t}else _i=1<<s|n<<r|i,yi=t}function Jf(t){t.return!==null&&(yr(t,1),P0(t,1,0))}function Zf(t){for(;t===Cl;)Cl=ds[--fs],ds[fs]=null,Pl=ds[--fs],ds[fs]=null;for(;t===Ir;)Ir=An[--Rn],An[Rn]=null,yi=An[--Rn],An[Rn]=null,_i=An[--Rn],An[Rn]=null}var Sn=null,yn=null,ht=!1,Vn=null;function L0(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Dp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,yn=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ir!==null?{id:_i,overflow:yi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,yn=null,!0):!1;default:return!1}}function hd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function pd(t){if(ht){var e=yn;if(e){var n=e;if(!Dp(t,e)){if(hd(t))throw Error(oe(418));e=er(n.nextSibling);var i=Sn;e&&Dp(t,e)?L0(i,n):(t.flags=t.flags&-4097|2,ht=!1,Sn=t)}}else{if(hd(t))throw Error(oe(418));t.flags=t.flags&-4097|2,ht=!1,Sn=t}}}function Np(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function ga(t){if(t!==Sn)return!1;if(!ht)return Np(t),ht=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!cd(t.type,t.memoizedProps)),e&&(e=yn)){if(hd(t))throw D0(),Error(oe(418));for(;e;)L0(t,e),e=er(e.nextSibling)}if(Np(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Sn?er(t.stateNode.nextSibling):null;return!0}function D0(){for(var t=yn;t;)t=er(t.nextSibling)}function Ts(){yn=Sn=null,ht=!1}function Qf(t){Vn===null?Vn=[t]:Vn.push(t)}var wy=Di.ReactCurrentBatchConfig;function $s(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function xa(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ip(t){var e=t._init;return e(t._payload)}function N0(t){function e(u,p){if(t){var v=u.deletions;v===null?(u.deletions=[p],u.flags|=16):v.push(p)}}function n(u,p){if(!t)return null;for(;p!==null;)e(u,p),p=p.sibling;return null}function i(u,p){for(u=new Map;p!==null;)p.key!==null?u.set(p.key,p):u.set(p.index,p),p=p.sibling;return u}function r(u,p){return u=rr(u,p),u.index=0,u.sibling=null,u}function s(u,p,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<p?(u.flags|=2,p):v):(u.flags|=2,p)):(u.flags|=1048576,p)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,p,v,_){return p===null||p.tag!==6?(p=Yc(v,u.mode,_),p.return=u,p):(p=r(p,v),p.return=u,p)}function l(u,p,v,_){var T=v.type;return T===ss?f(u,p,v.props.children,_,v.key):p!==null&&(p.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Gi&&Ip(T)===p.type)?(_=r(p,v.props),_.ref=$s(u,p,v),_.return=u,_):(_=cl(v.type,v.key,v.props,null,u.mode,_),_.ref=$s(u,p,v),_.return=u,_)}function c(u,p,v,_){return p===null||p.tag!==4||p.stateNode.containerInfo!==v.containerInfo||p.stateNode.implementation!==v.implementation?(p=$c(v,u.mode,_),p.return=u,p):(p=r(p,v.children||[]),p.return=u,p)}function f(u,p,v,_,T){return p===null||p.tag!==7?(p=Dr(v,u.mode,_,T),p.return=u,p):(p=r(p,v),p.return=u,p)}function h(u,p,v){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Yc(""+p,u.mode,v),p.return=u,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case oa:return v=cl(p.type,p.key,p.props,null,u.mode,v),v.ref=$s(u,null,p),v.return=u,v;case rs:return p=$c(p,u.mode,v),p.return=u,p;case Gi:var _=p._init;return h(u,_(p._payload),v)}if(ao(p)||Gs(p))return p=Dr(p,u.mode,v,null),p.return=u,p;xa(u,p)}return null}function d(u,p,v,_){var T=p!==null?p.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return T!==null?null:a(u,p,""+v,_);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case oa:return v.key===T?l(u,p,v,_):null;case rs:return v.key===T?c(u,p,v,_):null;case Gi:return T=v._init,d(u,p,T(v._payload),_)}if(ao(v)||Gs(v))return T!==null?null:f(u,p,v,_,null);xa(u,v)}return null}function m(u,p,v,_,T){if(typeof _=="string"&&_!==""||typeof _=="number")return u=u.get(v)||null,a(p,u,""+_,T);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case oa:return u=u.get(_.key===null?v:_.key)||null,l(p,u,_,T);case rs:return u=u.get(_.key===null?v:_.key)||null,c(p,u,_,T);case Gi:var A=_._init;return m(u,p,v,A(_._payload),T)}if(ao(_)||Gs(_))return u=u.get(v)||null,f(p,u,_,T,null);xa(p,_)}return null}function g(u,p,v,_){for(var T=null,A=null,R=p,y=p=0,w=null;R!==null&&y<v.length;y++){R.index>y?(w=R,R=null):w=R.sibling;var F=d(u,R,v[y],_);if(F===null){R===null&&(R=w);break}t&&R&&F.alternate===null&&e(u,R),p=s(F,p,y),A===null?T=F:A.sibling=F,A=F,R=w}if(y===v.length)return n(u,R),ht&&yr(u,y),T;if(R===null){for(;y<v.length;y++)R=h(u,v[y],_),R!==null&&(p=s(R,p,y),A===null?T=R:A.sibling=R,A=R);return ht&&yr(u,y),T}for(R=i(u,R);y<v.length;y++)w=m(R,u,y,v[y],_),w!==null&&(t&&w.alternate!==null&&R.delete(w.key===null?y:w.key),p=s(w,p,y),A===null?T=w:A.sibling=w,A=w);return t&&R.forEach(function(D){return e(u,D)}),ht&&yr(u,y),T}function M(u,p,v,_){var T=Gs(v);if(typeof T!="function")throw Error(oe(150));if(v=T.call(v),v==null)throw Error(oe(151));for(var A=T=null,R=p,y=p=0,w=null,F=v.next();R!==null&&!F.done;y++,F=v.next()){R.index>y?(w=R,R=null):w=R.sibling;var D=d(u,R,F.value,_);if(D===null){R===null&&(R=w);break}t&&R&&D.alternate===null&&e(u,R),p=s(D,p,y),A===null?T=D:A.sibling=D,A=D,R=w}if(F.done)return n(u,R),ht&&yr(u,y),T;if(R===null){for(;!F.done;y++,F=v.next())F=h(u,F.value,_),F!==null&&(p=s(F,p,y),A===null?T=F:A.sibling=F,A=F);return ht&&yr(u,y),T}for(R=i(u,R);!F.done;y++,F=v.next())F=m(R,u,y,F.value,_),F!==null&&(t&&F.alternate!==null&&R.delete(F.key===null?y:F.key),p=s(F,p,y),A===null?T=F:A.sibling=F,A=F);return t&&R.forEach(function(V){return e(u,V)}),ht&&yr(u,y),T}function x(u,p,v,_){if(typeof v=="object"&&v!==null&&v.type===ss&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case oa:e:{for(var T=v.key,A=p;A!==null;){if(A.key===T){if(T=v.type,T===ss){if(A.tag===7){n(u,A.sibling),p=r(A,v.props.children),p.return=u,u=p;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===Gi&&Ip(T)===A.type){n(u,A.sibling),p=r(A,v.props),p.ref=$s(u,A,v),p.return=u,u=p;break e}n(u,A);break}else e(u,A);A=A.sibling}v.type===ss?(p=Dr(v.props.children,u.mode,_,v.key),p.return=u,u=p):(_=cl(v.type,v.key,v.props,null,u.mode,_),_.ref=$s(u,p,v),_.return=u,u=_)}return o(u);case rs:e:{for(A=v.key;p!==null;){if(p.key===A)if(p.tag===4&&p.stateNode.containerInfo===v.containerInfo&&p.stateNode.implementation===v.implementation){n(u,p.sibling),p=r(p,v.children||[]),p.return=u,u=p;break e}else{n(u,p);break}else e(u,p);p=p.sibling}p=$c(v,u.mode,_),p.return=u,u=p}return o(u);case Gi:return A=v._init,x(u,p,A(v._payload),_)}if(ao(v))return g(u,p,v,_);if(Gs(v))return M(u,p,v,_);xa(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,p!==null&&p.tag===6?(n(u,p.sibling),p=r(p,v),p.return=u,u=p):(n(u,p),p=Yc(v,u.mode,_),p.return=u,u=p),o(u)):n(u,p)}return x}var As=N0(!0),I0=N0(!1),Ll=ur(null),Dl=null,hs=null,eh=null;function th(){eh=hs=Dl=null}function nh(t){var e=Ll.current;ft(Ll),t._currentValue=e}function md(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){Dl=t,eh=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ln=!0),t.firstContext=null)}function Dn(t){var e=t._currentValue;if(eh!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(Dl===null)throw Error(oe(308));hs=t,Dl.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var Ar=null;function ih(t){Ar===null?Ar=[t]:Ar.push(t)}function U0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,ih(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ai(t,i)}function Ai(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Wi=!1;function rh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function F0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ai(t,n)}return r=i.interleaved,r===null?(e.next=e,ih(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ai(t,n)}function il(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Gf(t,n)}}function Up(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nl(t,e,n,i){var r=t.updateQueue;Wi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,m=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,M=a;switch(d=e,m=n,M.tag){case 1:if(g=M.payload,typeof g=="function"){h=g.call(m,h,d);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=M.payload,d=typeof g=="function"?g.call(m,h,d):g,d==null)break e;h=vt({},h,d);break e;case 2:Wi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else m={eventTime:m,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=m,l=h):f=f.next=m,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Fr|=o,t.lanes=o,t.memoizedState=h}}function Fp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Jo={},ri=ur(Jo),Oo=ur(Jo),ko=ur(Jo);function Rr(t){if(t===Jo)throw Error(oe(174));return t}function sh(t,e){switch(ut(ko,e),ut(Oo,t),ut(ri,Jo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:qu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=qu(e,t)}ft(ri),ut(ri,e)}function Rs(){ft(ri),ft(Oo),ft(ko)}function O0(t){Rr(ko.current);var e=Rr(ri.current),n=qu(e,t.type);e!==n&&(ut(Oo,t),ut(ri,n))}function oh(t){Oo.current===t&&(ft(ri),ft(Oo))}var pt=ur(0);function Il(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vc=[];function ah(){for(var t=0;t<Vc.length;t++)Vc[t]._workInProgressVersionPrimary=null;Vc.length=0}var rl=Di.ReactCurrentDispatcher,Hc=Di.ReactCurrentBatchConfig,Ur=0,mt=null,Lt=null,Ot=null,Ul=!1,_o=!1,zo=0,Ty=0;function jt(){throw Error(oe(321))}function lh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xn(t[n],e[n]))return!1;return!0}function ch(t,e,n,i,r,s){if(Ur=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rl.current=t===null||t.memoizedState===null?Py:Ly,t=n(i,r),_o){s=0;do{if(_o=!1,zo=0,25<=s)throw Error(oe(301));s+=1,Ot=Lt=null,e.updateQueue=null,rl.current=Dy,t=n(i,r)}while(_o)}if(rl.current=Fl,e=Lt!==null&&Lt.next!==null,Ur=0,Ot=Lt=mt=null,Ul=!1,e)throw Error(oe(300));return t}function uh(){var t=zo!==0;return zo=0,t}function Zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ot===null?mt.memoizedState=Ot=t:Ot=Ot.next=t,Ot}function Nn(){if(Lt===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=Lt.next;var e=Ot===null?mt.memoizedState:Ot.next;if(e!==null)Ot=e,Lt=t;else{if(t===null)throw Error(oe(310));Lt=t,t={memoizedState:Lt.memoizedState,baseState:Lt.baseState,baseQueue:Lt.baseQueue,queue:Lt.queue,next:null},Ot===null?mt.memoizedState=Ot=t:Ot=Ot.next=t}return Ot}function Bo(t,e){return typeof e=="function"?e(t):e}function Gc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Lt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Ur&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,mt.lanes|=f,Fr|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Xn(i,e.memoizedState)||(ln=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Fr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Wc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Xn(s,e.memoizedState)||(ln=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function k0(){}function z0(t,e){var n=mt,i=Nn(),r=e(),s=!Xn(i.memoizedState,r);if(s&&(i.memoizedState=r,ln=!0),i=i.queue,dh(H0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Ot!==null&&Ot.memoizedState.tag&1){if(n.flags|=2048,Vo(9,V0.bind(null,n,i,r,e),void 0,null),kt===null)throw Error(oe(349));Ur&30||B0(n,e,r)}return r}function B0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function V0(t,e,n,i){e.value=n,e.getSnapshot=i,G0(e)&&W0(t)}function H0(t,e,n){return n(function(){G0(e)&&W0(t)})}function G0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xn(t,n)}catch{return!0}}function W0(t){var e=Ai(t,1);e!==null&&jn(e,t,1,-1)}function Op(t){var e=Zn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Bo,lastRenderedState:t},e.queue=t,t=t.dispatch=Cy.bind(null,mt,t),[e.memoizedState,t]}function Vo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function j0(){return Nn().memoizedState}function sl(t,e,n,i){var r=Zn();mt.flags|=t,r.memoizedState=Vo(1|e,n,void 0,i===void 0?null:i)}function ac(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(Lt!==null){var o=Lt.memoizedState;if(s=o.destroy,i!==null&&lh(i,o.deps)){r.memoizedState=Vo(e,n,s,i);return}}mt.flags|=t,r.memoizedState=Vo(1|e,n,s,i)}function kp(t,e){return sl(8390656,8,t,e)}function dh(t,e){return ac(2048,8,t,e)}function X0(t,e){return ac(4,2,t,e)}function Y0(t,e){return ac(4,4,t,e)}function $0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function q0(t,e,n){return n=n!=null?n.concat([t]):null,ac(4,4,$0.bind(null,e,t),n)}function fh(){}function K0(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lh(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function J0(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&lh(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Z0(t,e,n){return Ur&21?(Xn(n,e)||(n=i0(),mt.lanes|=n,Fr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ln=!0),t.memoizedState=n)}function Ay(t,e){var n=it;it=n!==0&&4>n?n:4,t(!0);var i=Hc.transition;Hc.transition={};try{t(!1),e()}finally{it=n,Hc.transition=i}}function Q0(){return Nn().memoizedState}function Ry(t,e,n){var i=ir(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},ex(t))tx(e,n);else if(n=U0(t,e,n,i),n!==null){var r=en();jn(n,t,i,r),nx(n,e,i)}}function Cy(t,e,n){var i=ir(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(ex(t))tx(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Xn(a,o)){var l=e.interleaved;l===null?(r.next=r,ih(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=U0(t,e,r,i),n!==null&&(r=en(),jn(n,t,i,r),nx(n,e,i))}}function ex(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function tx(t,e){_o=Ul=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function nx(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Gf(t,n)}}var Fl={readContext:Dn,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},Py={readContext:Dn,useCallback:function(t,e){return Zn().memoizedState=[t,e===void 0?null:e],t},useContext:Dn,useEffect:kp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,sl(4194308,4,$0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return sl(4194308,4,t,e)},useInsertionEffect:function(t,e){return sl(4,2,t,e)},useMemo:function(t,e){var n=Zn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Zn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=Ry.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=Zn();return t={current:t},e.memoizedState=t},useState:Op,useDebugValue:fh,useDeferredValue:function(t){return Zn().memoizedState=t},useTransition:function(){var t=Op(!1),e=t[0];return t=Ay.bind(null,t[1]),Zn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=Zn();if(ht){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),kt===null)throw Error(oe(349));Ur&30||B0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,kp(H0.bind(null,i,s,t),[t]),i.flags|=2048,Vo(9,V0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Zn(),e=kt.identifierPrefix;if(ht){var n=yi,i=_i;n=(i&~(1<<32-Wn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Ty++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Ly={readContext:Dn,useCallback:K0,useContext:Dn,useEffect:dh,useImperativeHandle:q0,useInsertionEffect:X0,useLayoutEffect:Y0,useMemo:J0,useReducer:Gc,useRef:j0,useState:function(){return Gc(Bo)},useDebugValue:fh,useDeferredValue:function(t){var e=Nn();return Z0(e,Lt.memoizedState,t)},useTransition:function(){var t=Gc(Bo)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:k0,useSyncExternalStore:z0,useId:Q0,unstable_isNewReconciler:!1},Dy={readContext:Dn,useCallback:K0,useContext:Dn,useEffect:dh,useImperativeHandle:q0,useInsertionEffect:X0,useLayoutEffect:Y0,useMemo:J0,useReducer:Wc,useRef:j0,useState:function(){return Wc(Bo)},useDebugValue:fh,useDeferredValue:function(t){var e=Nn();return Lt===null?e.memoizedState=t:Z0(e,Lt.memoizedState,t)},useTransition:function(){var t=Wc(Bo)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:k0,useSyncExternalStore:z0,useId:Q0,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=vt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function gd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:vt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var lc={isMounted:function(t){return(t=t._reactInternals)?Br(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=en(),r=ir(t),s=Mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&(jn(e,t,r,i),il(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=en(),r=ir(t),s=Mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,r),e!==null&&(jn(e,t,r,i),il(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=en(),i=ir(t),r=Mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=tr(t,r,i),e!==null&&(jn(e,t,i,n),il(e,t,i))}};function zp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!No(n,i)||!No(r,s):!0}function ix(t,e,n){var i=!1,r=ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Dn(s):(r=un(e)?Nr:Jt.current,i=e.contextTypes,s=(i=i!=null)?ws(t,r):ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=lc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Bp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&lc.enqueueReplaceState(e,e.state,null)}function xd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},rh(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Dn(s):(s=un(e)?Nr:Jt.current,r.context=ws(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(gd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&lc.enqueueReplaceState(r,r.state,null),Nl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Cs(t,e){try{var n="",i=e;do n+=o_(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function jc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function vd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ny=typeof WeakMap=="function"?WeakMap:Map;function rx(t,e,n){n=Mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){kl||(kl=!0,Rd=i),vd(t,e)},n}function sx(t,e,n){n=Mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){vd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){vd(t,e),typeof i!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Vp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ny;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Yy.bind(null,t,e,n),e.then(t,t))}function Hp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mi(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var Iy=Di.ReactCurrentOwner,ln=!1;function Qt(t,e,n,i){e.child=t===null?I0(e,null,n,i):As(e,t.child,n,i)}function Wp(t,e,n,i,r){n=n.render;var s=e.ref;return ys(e,r),i=ch(t,e,n,i,s,r),n=uh(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(ht&&n&&Jf(e),e.flags|=1,Qt(t,e,i,r),e.child)}function jp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!yh(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,ox(t,e,s,i,r)):(t=cl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:No,n(o,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=rr(s,i),t.ref=e.ref,t.return=e,e.child=t}function ox(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(No(s,i)&&t.ref===e.ref)if(ln=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(ln=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return _d(t,e,n,i,r)}function ax(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ut(ms,xn),xn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ut(ms,xn),xn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ut(ms,xn),xn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ut(ms,xn),xn|=i;return Qt(t,e,r,n),e.child}function lx(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function _d(t,e,n,i,r){var s=un(n)?Nr:Jt.current;return s=ws(e,s),ys(e,r),n=ch(t,e,n,i,s,r),i=uh(),t!==null&&!ln?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(ht&&i&&Jf(e),e.flags|=1,Qt(t,e,n,r),e.child)}function Xp(t,e,n,i,r){if(un(n)){var s=!0;Rl(e)}else s=!1;if(ys(e,r),e.stateNode===null)ol(t,e),ix(e,n,i),xd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Dn(c):(c=un(n)?Nr:Jt.current,c=ws(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Bp(e,o,i,c),Wi=!1;var d=e.memoizedState;o.state=d,Nl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||cn.current||Wi?(typeof f=="function"&&(gd(e,n,f,i),l=e.memoizedState),(a=Wi||zp(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,F0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:zn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Dn(l):(l=un(n)?Nr:Jt.current,l=ws(e,l));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&Bp(e,o,i,l),Wi=!1,d=e.memoizedState,o.state=d,Nl(e,i,o,r);var g=e.memoizedState;a!==h||d!==g||cn.current||Wi?(typeof m=="function"&&(gd(e,n,m,i),g=e.memoizedState),(c=Wi||zp(e,n,c,i,d,g,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return yd(t,e,n,i,s,r)}function yd(t,e,n,i,r,s){lx(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Lp(e,n,!1),Ri(t,e,s);i=e.stateNode,Iy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=As(e,t.child,null,s),e.child=As(e,null,a,s)):Qt(t,e,a,s),e.memoizedState=i.state,r&&Lp(e,n,!0),e.child}function cx(t){var e=t.stateNode;e.pendingContext?Pp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Pp(t,e.context,!1),sh(t,e.containerInfo)}function Yp(t,e,n,i,r){return Ts(),Qf(r),e.flags|=256,Qt(t,e,n,i),e.child}var Sd={dehydrated:null,treeContext:null,retryLane:0};function Md(t){return{baseLanes:t,cachePool:null,transitions:null}}function ux(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ut(pt,r&1),t===null)return pd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=dc(o,i,0,null),t=Dr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Md(n),e.memoizedState=Sd,t):hh(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Uy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=rr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=rr(a,s):(s=Dr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Md(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Sd,i}return s=t.child,t=s.sibling,i=rr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function hh(t,e){return e=dc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function va(t,e,n,i){return i!==null&&Qf(i),As(e,t.child,null,n),t=hh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Uy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=jc(Error(oe(422))),va(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=dc({mode:"visible",children:i.children},r,0,null),s=Dr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&As(e,t.child,null,o),e.child.memoizedState=Md(o),e.memoizedState=Sd,s);if(!(e.mode&1))return va(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=jc(s,i,void 0),va(t,e,o,i)}if(a=(o&t.childLanes)!==0,ln||a){if(i=kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ai(t,r),jn(i,t,r,-1))}return _h(),i=jc(Error(oe(421))),va(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=$y.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=er(r.nextSibling),Sn=e,ht=!0,Vn=null,t!==null&&(An[Rn++]=_i,An[Rn++]=yi,An[Rn++]=Ir,_i=t.id,yi=t.overflow,Ir=e),e=hh(e,i.children),e.flags|=4096,e)}function $p(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),md(t.return,e,n)}function Xc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function dx(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Qt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&$p(t,n,e);else if(t.tag===19)$p(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ut(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Il(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Xc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Il(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Xc(e,!0,n,null,s);break;case"together":Xc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ol(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Fr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=rr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=rr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Fy(t,e,n){switch(e.tag){case 3:cx(e),Ts();break;case 5:O0(e);break;case 1:un(e.type)&&Rl(e);break;case 4:sh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ut(Ll,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ut(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?ux(t,e,n):(ut(pt,pt.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);ut(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return dx(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ut(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,ax(t,e,n)}return Ri(t,e,n)}var fx,Ed,hx,px;fx=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ed=function(){};hx=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Rr(ri.current);var s=null;switch(n){case"input":r=ju(t,r),i=ju(t,i),s=[];break;case"select":r=vt({},r,{value:void 0}),i=vt({},i,{value:void 0}),s=[];break;case"textarea":r=$u(t,r),i=$u(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Tl)}Ku(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(To.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(To.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&dt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};px=function(t,e,n,i){n!==i&&(e.flags|=4)};function qs(t,e){if(!ht)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Xt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Oy(t,e,n){var i=e.pendingProps;switch(Zf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xt(e),null;case 1:return un(e.type)&&Al(),Xt(e),null;case 3:return i=e.stateNode,Rs(),ft(cn),ft(Jt),ah(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ga(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(Ld(Vn),Vn=null))),Ed(t,e),Xt(e),null;case 5:oh(e);var r=Rr(ko.current);if(n=e.type,t!==null&&e.stateNode!=null)hx(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Xt(e),null}if(t=Rr(ri.current),ga(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ei]=e,i[Fo]=s,t=(e.mode&1)!==0,n){case"dialog":dt("cancel",i),dt("close",i);break;case"iframe":case"object":case"embed":dt("load",i);break;case"video":case"audio":for(r=0;r<co.length;r++)dt(co[r],i);break;case"source":dt("error",i);break;case"img":case"image":case"link":dt("error",i),dt("load",i);break;case"details":dt("toggle",i);break;case"input":ip(i,s),dt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},dt("invalid",i);break;case"textarea":sp(i,s),dt("invalid",i)}Ku(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ma(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ma(i.textContent,a,t),r=["children",""+a]):To.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&dt("scroll",i)}switch(n){case"input":aa(i),rp(i,s,!0);break;case"textarea":aa(i),op(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Tl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Hg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ei]=e,t[Fo]=i,fx(t,e,!1,!1),e.stateNode=t;e:{switch(o=Ju(n,i),n){case"dialog":dt("cancel",t),dt("close",t),r=i;break;case"iframe":case"object":case"embed":dt("load",t),r=i;break;case"video":case"audio":for(r=0;r<co.length;r++)dt(co[r],t);r=i;break;case"source":dt("error",t),r=i;break;case"img":case"image":case"link":dt("error",t),dt("load",t),r=i;break;case"details":dt("toggle",t),r=i;break;case"input":ip(t,i),r=ju(t,i),dt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=vt({},i,{value:void 0}),dt("invalid",t);break;case"textarea":sp(t,i),r=$u(t,i),dt("invalid",t);break;default:r=i}Ku(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?jg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Gg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ao(t,l):typeof l=="number"&&Ao(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(To.hasOwnProperty(s)?l!=null&&s==="onScroll"&&dt("scroll",t):l!=null&&Of(t,s,l,o))}switch(n){case"input":aa(t),rp(t,i,!1);break;case"textarea":aa(t),op(t);break;case"option":i.value!=null&&t.setAttribute("value",""+or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?gs(t,!!i.multiple,s,!1):i.defaultValue!=null&&gs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Tl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xt(e),null;case 6:if(t&&e.stateNode!=null)px(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Rr(ko.current),Rr(ri.current),ga(e)){if(i=e.stateNode,n=e.memoizedProps,i[ei]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:ma(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ma(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return Xt(e),null;case 13:if(ft(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ht&&yn!==null&&e.mode&1&&!(e.flags&128))D0(),Ts(),e.flags|=98560,s=!1;else if(s=ga(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[ei]=e}else Ts(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xt(e),s=!1}else Vn!==null&&(Ld(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Dt===0&&(Dt=3):_h())),e.updateQueue!==null&&(e.flags|=4),Xt(e),null);case 4:return Rs(),Ed(t,e),t===null&&Io(e.stateNode.containerInfo),Xt(e),null;case 10:return nh(e.type._context),Xt(e),null;case 17:return un(e.type)&&Al(),Xt(e),null;case 19:if(ft(pt),s=e.memoizedState,s===null)return Xt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)qs(s,!1);else{if(Dt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Il(t),o!==null){for(e.flags|=128,qs(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ut(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>Ps&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304)}else{if(!i)if(t=Il(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),qs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ht)return Xt(e),null}else 2*Tt()-s.renderingStartTime>Ps&&n!==1073741824&&(e.flags|=128,i=!0,qs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=pt.current,ut(pt,i?n&1|2:n&1),e):(Xt(e),null);case 22:case 23:return vh(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?xn&1073741824&&(Xt(e),e.subtreeFlags&6&&(e.flags|=8192)):Xt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function ky(t,e){switch(Zf(e),e.tag){case 1:return un(e.type)&&Al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Rs(),ft(cn),ft(Jt),ah(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return oh(e),null;case 13:if(ft(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Ts()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(pt),null;case 4:return Rs(),null;case 10:return nh(e.type._context),null;case 22:case 23:return vh(),null;case 24:return null;default:return null}}var _a=!1,qt=!1,zy=typeof WeakSet=="function"?WeakSet:Set,ve=null;function ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){St(t,e,i)}else n.current=null}function bd(t,e,n){try{n()}catch(i){St(t,e,i)}}var qp=!1;function By(t,e){if(ad=El,t=_0(),Kf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)d=h,h=m;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(m=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(ld={focusedElem:t,selectionRange:n},El=!1,ve=e;ve!==null;)if(e=ve,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ve=t;else for(;ve!==null;){e=ve;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var M=g.memoizedProps,x=g.memoizedState,u=e.stateNode,p=u.getSnapshotBeforeUpdate(e.elementType===e.type?M:zn(e.type,M),x);u.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(_){St(e,e.return,_)}if(t=e.sibling,t!==null){t.return=e.return,ve=t;break}ve=e.return}return g=qp,qp=!1,g}function yo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&bd(e,n,s)}r=r.next}while(r!==i)}}function cc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function wd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function mx(t){var e=t.alternate;e!==null&&(t.alternate=null,mx(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ei],delete e[Fo],delete e[dd],delete e[My],delete e[Ey])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function gx(t){return t.tag===5||t.tag===3||t.tag===4}function Kp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||gx(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Tl));else if(i!==4&&(t=t.child,t!==null))for(Td(t,e,n),t=t.sibling;t!==null;)Td(t,e,n),t=t.sibling}function Ad(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Ad(t,e,n),t=t.sibling;t!==null;)Ad(t,e,n),t=t.sibling}var Bt=null,Bn=!1;function Fi(t,e,n){for(n=n.child;n!==null;)xx(t,e,n),n=n.sibling}function xx(t,e,n){if(ii&&typeof ii.onCommitFiberUnmount=="function")try{ii.onCommitFiberUnmount(tc,n)}catch{}switch(n.tag){case 5:qt||ps(n,e);case 6:var i=Bt,r=Bn;Bt=null,Fi(t,e,n),Bt=i,Bn=r,Bt!==null&&(Bn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(Bn?(t=Bt,n=n.stateNode,t.nodeType===8?zc(t.parentNode,n):t.nodeType===1&&zc(t,n),Lo(t)):zc(Bt,n.stateNode));break;case 4:i=Bt,r=Bn,Bt=n.stateNode.containerInfo,Bn=!0,Fi(t,e,n),Bt=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&bd(n,e,o),r=r.next}while(r!==i)}Fi(t,e,n);break;case 1:if(!qt&&(ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){St(n,e,a)}Fi(t,e,n);break;case 21:Fi(t,e,n);break;case 22:n.mode&1?(qt=(i=qt)||n.memoizedState!==null,Fi(t,e,n),qt=i):Fi(t,e,n);break;default:Fi(t,e,n)}}function Jp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new zy),e.forEach(function(i){var r=qy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,Bn=!1;break e;case 3:Bt=a.stateNode.containerInfo,Bn=!0;break e;case 4:Bt=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(Bt===null)throw Error(oe(160));xx(s,o,r),Bt=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){St(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)vx(e,t),e=e.sibling}function vx(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),$n(t),i&4){try{yo(3,t,t.return),cc(3,t)}catch(M){St(t,t.return,M)}try{yo(5,t,t.return)}catch(M){St(t,t.return,M)}}break;case 1:Un(e,t),$n(t),i&512&&n!==null&&ps(n,n.return);break;case 5:if(Un(e,t),$n(t),i&512&&n!==null&&ps(n,n.return),t.flags&32){var r=t.stateNode;try{Ao(r,"")}catch(M){St(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Bg(r,s),Ju(a,o);var c=Ju(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?jg(r,h):f==="dangerouslySetInnerHTML"?Gg(r,h):f==="children"?Ao(r,h):Of(r,f,h,c)}switch(a){case"input":Xu(r,s);break;case"textarea":Vg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?gs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?gs(r,!!s.multiple,s.defaultValue,!0):gs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Fo]=s}catch(M){St(t,t.return,M)}}break;case 6:if(Un(e,t),$n(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){St(t,t.return,M)}}break;case 3:if(Un(e,t),$n(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Lo(e.containerInfo)}catch(M){St(t,t.return,M)}break;case 4:Un(e,t),$n(t);break;case 13:Un(e,t),$n(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(gh=Tt())),i&4&&Jp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(c=qt)||f,Un(e,t),qt=c):Un(e,t),$n(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(ve=t,f=t.child;f!==null;){for(h=ve=f;ve!==null;){switch(d=ve,m=d.child,d.tag){case 0:case 11:case 14:case 15:yo(4,d,d.return);break;case 1:ps(d,d.return);var g=d.stateNode;if(typeof g.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(M){St(i,n,M)}}break;case 5:ps(d,d.return);break;case 22:if(d.memoizedState!==null){Qp(h);continue}}m!==null?(m.return=d,ve=m):Qp(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Wg("display",o))}catch(M){St(t,t.return,M)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(M){St(t,t.return,M)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Un(e,t),$n(t),i&4&&Jp(t);break;case 21:break;default:Un(e,t),$n(t)}}function $n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(gx(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ao(r,""),i.flags&=-33);var s=Kp(t);Ad(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Kp(t);Td(t,a,o);break;default:throw Error(oe(161))}}catch(l){St(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Vy(t,e,n){ve=t,_x(t)}function _x(t,e,n){for(var i=(t.mode&1)!==0;ve!==null;){var r=ve,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||_a;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||qt;a=_a;var c=qt;if(_a=o,(qt=l)&&!c)for(ve=r;ve!==null;)o=ve,l=o.child,o.tag===22&&o.memoizedState!==null?em(r):l!==null?(l.return=o,ve=l):em(r);for(;s!==null;)ve=s,_x(s),s=s.sibling;ve=r,_a=a,qt=c}Zp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ve=s):Zp(t)}}function Zp(t){for(;ve!==null;){var e=ve;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:qt||cc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Fp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Fp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Lo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}qt||e.flags&512&&wd(e)}catch(d){St(e,e.return,d)}}if(e===t){ve=null;break}if(n=e.sibling,n!==null){n.return=e.return,ve=n;break}ve=e.return}}function Qp(t){for(;ve!==null;){var e=ve;if(e===t){ve=null;break}var n=e.sibling;if(n!==null){n.return=e.return,ve=n;break}ve=e.return}}function em(t){for(;ve!==null;){var e=ve;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{cc(4,e)}catch(l){St(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){St(e,r,l)}}var s=e.return;try{wd(e)}catch(l){St(e,s,l)}break;case 5:var o=e.return;try{wd(e)}catch(l){St(e,o,l)}}}catch(l){St(e,e.return,l)}if(e===t){ve=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ve=a;break}ve=e.return}}var Hy=Math.ceil,Ol=Di.ReactCurrentDispatcher,ph=Di.ReactCurrentOwner,Ln=Di.ReactCurrentBatchConfig,qe=0,kt=null,Pt=null,Ht=0,xn=0,ms=ur(0),Dt=0,Ho=null,Fr=0,uc=0,mh=0,So=null,an=null,gh=0,Ps=1/0,gi=null,kl=!1,Rd=null,nr=null,ya=!1,qi=null,zl=0,Mo=0,Cd=null,al=-1,ll=0;function en(){return qe&6?Tt():al!==-1?al:al=Tt()}function ir(t){return t.mode&1?qe&2&&Ht!==0?Ht&-Ht:wy.transition!==null?(ll===0&&(ll=i0()),ll):(t=it,t!==0||(t=window.event,t=t===void 0?16:u0(t.type)),t):1}function jn(t,e,n,i){if(50<Mo)throw Mo=0,Cd=null,Error(oe(185));$o(t,n,i),(!(qe&2)||t!==kt)&&(t===kt&&(!(qe&2)&&(uc|=n),Dt===4&&Xi(t,Ht)),dn(t,i),n===1&&qe===0&&!(e.mode&1)&&(Ps=Tt()+500,oc&&dr()))}function dn(t,e){var n=t.callbackNode;w_(t,e);var i=Ml(t,t===kt?Ht:0);if(i===0)n!==null&&cp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&cp(n),e===1)t.tag===0?by(tm.bind(null,t)):C0(tm.bind(null,t)),yy(function(){!(qe&6)&&dr()}),n=null;else{switch(r0(i)){case 1:n=Hf;break;case 4:n=t0;break;case 16:n=Sl;break;case 536870912:n=n0;break;default:n=Sl}n=Ax(n,yx.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function yx(t,e){if(al=-1,ll=0,qe&6)throw Error(oe(327));var n=t.callbackNode;if(Ss()&&t.callbackNode!==n)return null;var i=Ml(t,t===kt?Ht:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Bl(t,i);else{e=i;var r=qe;qe|=2;var s=Mx();(kt!==t||Ht!==e)&&(gi=null,Ps=Tt()+500,Lr(t,e));do try{jy();break}catch(a){Sx(t,a)}while(!0);th(),Ol.current=s,qe=r,Pt!==null?e=0:(kt=null,Ht=0,e=Dt)}if(e!==0){if(e===2&&(r=nd(t),r!==0&&(i=r,e=Pd(t,r))),e===1)throw n=Ho,Lr(t,0),Xi(t,i),dn(t,Tt()),n;if(e===6)Xi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Gy(r)&&(e=Bl(t,i),e===2&&(s=nd(t),s!==0&&(i=s,e=Pd(t,s))),e===1))throw n=Ho,Lr(t,0),Xi(t,i),dn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Sr(t,an,gi);break;case 3:if(Xi(t,i),(i&130023424)===i&&(e=gh+500-Tt(),10<e)){if(Ml(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){en(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ud(Sr.bind(null,t,an,gi),e);break}Sr(t,an,gi);break;case 4:if(Xi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Wn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Hy(i/1960))-i,10<i){t.timeoutHandle=ud(Sr.bind(null,t,an,gi),i);break}Sr(t,an,gi);break;case 5:Sr(t,an,gi);break;default:throw Error(oe(329))}}}return dn(t,Tt()),t.callbackNode===n?yx.bind(null,t):null}function Pd(t,e){var n=So;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=Bl(t,e),t!==2&&(e=an,an=n,e!==null&&Ld(e)),t}function Ld(t){an===null?an=t:an.push.apply(an,t)}function Gy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Xn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Xi(t,e){for(e&=~mh,e&=~uc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wn(e),i=1<<n;t[n]=-1,e&=~i}}function tm(t){if(qe&6)throw Error(oe(327));Ss();var e=Ml(t,0);if(!(e&1))return dn(t,Tt()),null;var n=Bl(t,e);if(t.tag!==0&&n===2){var i=nd(t);i!==0&&(e=i,n=Pd(t,i))}if(n===1)throw n=Ho,Lr(t,0),Xi(t,e),dn(t,Tt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,an,gi),dn(t,Tt()),null}function xh(t,e){var n=qe;qe|=1;try{return t(e)}finally{qe=n,qe===0&&(Ps=Tt()+500,oc&&dr())}}function Or(t){qi!==null&&qi.tag===0&&!(qe&6)&&Ss();var e=qe;qe|=1;var n=Ln.transition,i=it;try{if(Ln.transition=null,it=1,t)return t()}finally{it=i,Ln.transition=n,qe=e,!(qe&6)&&dr()}}function vh(){xn=ms.current,ft(ms)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,_y(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(Zf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Al();break;case 3:Rs(),ft(cn),ft(Jt),ah();break;case 5:oh(i);break;case 4:Rs();break;case 13:ft(pt);break;case 19:ft(pt);break;case 10:nh(i.type._context);break;case 22:case 23:vh()}n=n.return}if(kt=t,Pt=t=rr(t.current,null),Ht=xn=e,Dt=0,Ho=null,mh=uc=Fr=0,an=So=null,Ar!==null){for(e=0;e<Ar.length;e++)if(n=Ar[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Ar=null}return t}function Sx(t,e){do{var n=Pt;try{if(th(),rl.current=Fl,Ul){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ul=!1}if(Ur=0,Ot=Lt=mt=null,_o=!1,zo=0,ph.current=null,n===null||n.return===null){Dt=1,Ho=e,Pt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Hp(o);if(m!==null){m.flags&=-257,Gp(m,o,a,s,e),m.mode&1&&Vp(s,c,e),e=m,l=c;var g=e.updateQueue;if(g===null){var M=new Set;M.add(l),e.updateQueue=M}else g.add(l);break e}else{if(!(e&1)){Vp(s,c,e),_h();break e}l=Error(oe(426))}}else if(ht&&a.mode&1){var x=Hp(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Gp(x,o,a,s,e),Qf(Cs(l,a));break e}}s=l=Cs(l,a),Dt!==4&&(Dt=2),So===null?So=[s]:So.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=rx(s,l,e);Up(s,u);break e;case 1:a=l;var p=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(nr===null||!nr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var _=sx(s,a,e);Up(s,_);break e}}s=s.return}while(s!==null)}bx(n)}catch(T){e=T,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function Mx(){var t=Ol.current;return Ol.current=Fl,t===null?Fl:t}function _h(){(Dt===0||Dt===3||Dt===2)&&(Dt=4),kt===null||!(Fr&268435455)&&!(uc&268435455)||Xi(kt,Ht)}function Bl(t,e){var n=qe;qe|=2;var i=Mx();(kt!==t||Ht!==e)&&(gi=null,Lr(t,e));do try{Wy();break}catch(r){Sx(t,r)}while(!0);if(th(),qe=n,Ol.current=i,Pt!==null)throw Error(oe(261));return kt=null,Ht=0,Dt}function Wy(){for(;Pt!==null;)Ex(Pt)}function jy(){for(;Pt!==null&&!g_();)Ex(Pt)}function Ex(t){var e=Tx(t.alternate,t,xn);t.memoizedProps=t.pendingProps,e===null?bx(t):Pt=e,ph.current=null}function bx(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=ky(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Dt=6,Pt=null;return}}else if(n=Oy(n,e,xn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Dt===0&&(Dt=5)}function Sr(t,e,n){var i=it,r=Ln.transition;try{Ln.transition=null,it=1,Xy(t,e,n,i)}finally{Ln.transition=r,it=i}return null}function Xy(t,e,n,i){do Ss();while(qi!==null);if(qe&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(T_(t,s),t===kt&&(Pt=kt=null,Ht=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ya||(ya=!0,Ax(Sl,function(){return Ss(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var o=it;it=1;var a=qe;qe|=4,ph.current=null,By(t,n),vx(n,t),fy(ld),El=!!ad,ld=ad=null,t.current=n,Vy(n),x_(),qe=a,it=o,Ln.transition=s}else t.current=n;if(ya&&(ya=!1,qi=t,zl=r),s=t.pendingLanes,s===0&&(nr=null),y_(n.stateNode),dn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(kl)throw kl=!1,t=Rd,Rd=null,t;return zl&1&&t.tag!==0&&Ss(),s=t.pendingLanes,s&1?t===Cd?Mo++:(Mo=0,Cd=t):Mo=0,dr(),null}function Ss(){if(qi!==null){var t=r0(zl),e=Ln.transition,n=it;try{if(Ln.transition=null,it=16>t?16:t,qi===null)var i=!1;else{if(t=qi,qi=null,zl=0,qe&6)throw Error(oe(331));var r=qe;for(qe|=4,ve=t.current;ve!==null;){var s=ve,o=s.child;if(ve.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ve=c;ve!==null;){var f=ve;switch(f.tag){case 0:case 11:case 15:yo(8,f,s)}var h=f.child;if(h!==null)h.return=f,ve=h;else for(;ve!==null;){f=ve;var d=f.sibling,m=f.return;if(mx(f),f===c){ve=null;break}if(d!==null){d.return=m,ve=d;break}ve=m}}}var g=s.alternate;if(g!==null){var M=g.child;if(M!==null){g.child=null;do{var x=M.sibling;M.sibling=null,M=x}while(M!==null)}}ve=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ve=o;else e:for(;ve!==null;){if(s=ve,s.flags&2048)switch(s.tag){case 0:case 11:case 15:yo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,ve=u;break e}ve=s.return}}var p=t.current;for(ve=p;ve!==null;){o=ve;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,ve=v;else e:for(o=p;ve!==null;){if(a=ve,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:cc(9,a)}}catch(T){St(a,a.return,T)}if(a===o){ve=null;break e}var _=a.sibling;if(_!==null){_.return=a.return,ve=_;break e}ve=a.return}}if(qe=r,dr(),ii&&typeof ii.onPostCommitFiberRoot=="function")try{ii.onPostCommitFiberRoot(tc,t)}catch{}i=!0}return i}finally{it=n,Ln.transition=e}}return!1}function nm(t,e,n){e=Cs(n,e),e=rx(t,e,1),t=tr(t,e,1),e=en(),t!==null&&($o(t,1,e),dn(t,e))}function St(t,e,n){if(t.tag===3)nm(t,t,n);else for(;e!==null;){if(e.tag===3){nm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(nr===null||!nr.has(i))){t=Cs(n,t),t=sx(e,t,1),e=tr(e,t,1),t=en(),e!==null&&($o(e,1,t),dn(e,t));break}}e=e.return}}function Yy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=en(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(Ht&n)===n&&(Dt===4||Dt===3&&(Ht&130023424)===Ht&&500>Tt()-gh?Lr(t,0):mh|=n),dn(t,e)}function wx(t,e){e===0&&(t.mode&1?(e=ua,ua<<=1,!(ua&130023424)&&(ua=4194304)):e=1);var n=en();t=Ai(t,e),t!==null&&($o(t,e,n),dn(t,n))}function $y(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),wx(t,n)}function qy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),wx(t,n)}var Tx;Tx=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||cn.current)ln=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ln=!1,Fy(t,e,n);ln=!!(t.flags&131072)}else ln=!1,ht&&e.flags&1048576&&P0(e,Pl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ol(t,e),t=e.pendingProps;var r=ws(e,Jt.current);ys(e,n),r=ch(null,e,i,t,r,n);var s=uh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,Rl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,rh(e),r.updater=lc,e.stateNode=r,r._reactInternals=e,xd(e,i,t,n),e=yd(null,e,i,!0,s,n)):(e.tag=0,ht&&s&&Jf(e),Qt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ol(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Jy(i),t=zn(i,t),r){case 0:e=_d(null,e,i,t,n);break e;case 1:e=Xp(null,e,i,t,n);break e;case 11:e=Wp(null,e,i,t,n);break e;case 14:e=jp(null,e,i,zn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),_d(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Xp(t,e,i,r,n);case 3:e:{if(cx(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,F0(t,e),Nl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Cs(Error(oe(423)),e),e=Yp(t,e,i,n,r);break e}else if(i!==r){r=Cs(Error(oe(424)),e),e=Yp(t,e,i,n,r);break e}else for(yn=er(e.stateNode.containerInfo.firstChild),Sn=e,ht=!0,Vn=null,n=I0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ts(),i===r){e=Ri(t,e,n);break e}Qt(t,e,i,n)}e=e.child}return e;case 5:return O0(e),t===null&&pd(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,cd(i,r)?o=null:s!==null&&cd(i,s)&&(e.flags|=32),lx(t,e),Qt(t,e,o,n),e.child;case 6:return t===null&&pd(e),null;case 13:return ux(t,e,n);case 4:return sh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=As(e,null,i,n):Qt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Wp(t,e,i,r,n);case 7:return Qt(t,e,e.pendingProps,n),e.child;case 8:return Qt(t,e,e.pendingProps.children,n),e.child;case 12:return Qt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ut(Ll,i._currentValue),i._currentValue=o,s!==null)if(Xn(s.value,o)){if(s.children===r.children&&!cn.current){e=Ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Mi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),md(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),md(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Qt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ys(e,n),r=Dn(r),i=i(r),e.flags|=1,Qt(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),jp(t,e,i,r,n);case 15:return ox(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),ol(t,e),e.tag=1,un(i)?(t=!0,Rl(e)):t=!1,ys(e,n),ix(e,i,r),xd(e,i,r,n),yd(null,e,i,!0,t,n);case 19:return dx(t,e,n);case 22:return ax(t,e,n)}throw Error(oe(156,e.tag))};function Ax(t,e){return e0(t,e)}function Ky(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,i){return new Ky(t,e,n,i)}function yh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Jy(t){if(typeof t=="function")return yh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===zf)return 11;if(t===Bf)return 14}return 2}function rr(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function cl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")yh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ss:return Dr(n.children,r,s,e);case kf:o=8,r|=8;break;case Vu:return t=Pn(12,n,e,r|2),t.elementType=Vu,t.lanes=s,t;case Hu:return t=Pn(13,n,e,r),t.elementType=Hu,t.lanes=s,t;case Gu:return t=Pn(19,n,e,r),t.elementType=Gu,t.lanes=s,t;case Og:return dc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ug:o=10;break e;case Fg:o=9;break e;case zf:o=11;break e;case Bf:o=14;break e;case Gi:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Pn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Dr(t,e,n,i){return t=Pn(7,t,i,e),t.lanes=n,t}function dc(t,e,n,i){return t=Pn(22,t,i,e),t.elementType=Og,t.lanes=n,t.stateNode={isHidden:!1},t}function Yc(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function $c(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Zy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rc(0),this.expirationTimes=Rc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Sh(t,e,n,i,r,s,o,a,l){return t=new Zy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},rh(s),t}function Qy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Rx(t){if(!t)return ar;t=t._reactInternals;e:{if(Br(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(un(n))return R0(t,n,e)}return e}function Cx(t,e,n,i,r,s,o,a,l){return t=Sh(n,i,!0,t,r,s,o,a,l),t.context=Rx(null),n=t.current,i=en(),r=ir(n),s=Mi(i,r),s.callback=e??null,tr(n,s,r),t.current.lanes=r,$o(t,r,i),dn(t,i),t}function fc(t,e,n,i){var r=e.current,s=en(),o=ir(r);return n=Rx(n),e.context===null?e.context=n:e.pendingContext=n,e=Mi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=tr(r,e,o),t!==null&&(jn(t,r,o,s),il(t,r,o)),o}function Vl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function im(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Mh(t,e){im(t,e),(t=t.alternate)&&im(t,e)}function eS(){return null}var Px=typeof reportError=="function"?reportError:function(t){console.error(t)};function Eh(t){this._internalRoot=t}hc.prototype.render=Eh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));fc(t,e,null,null)};hc.prototype.unmount=Eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){fc(null,t,null,null)}),e[Ti]=null}};function hc(t){this._internalRoot=t}hc.prototype.unstable_scheduleHydration=function(t){if(t){var e=a0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ji.length&&e!==0&&e<ji[n].priority;n++);ji.splice(n,0,t),n===0&&c0(t)}};function bh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rm(){}function tS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Vl(o);s.call(c)}}var o=Cx(e,i,t,0,null,!1,!1,"",rm);return t._reactRootContainer=o,t[Ti]=o.current,Io(t.nodeType===8?t.parentNode:t),Or(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Vl(l);a.call(c)}}var l=Sh(t,0,!1,null,null,!1,!1,"",rm);return t._reactRootContainer=l,t[Ti]=l.current,Io(t.nodeType===8?t.parentNode:t),Or(function(){fc(e,l,n,i)}),l}function mc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Vl(o);a.call(l)}}fc(e,o,t,r)}else o=tS(n,e,t,r,i);return Vl(o)}s0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=lo(e.pendingLanes);n!==0&&(Gf(e,n|1),dn(e,Tt()),!(qe&6)&&(Ps=Tt()+500,dr()))}break;case 13:Or(function(){var i=Ai(t,1);if(i!==null){var r=en();jn(i,t,1,r)}}),Mh(t,1)}};Wf=function(t){if(t.tag===13){var e=Ai(t,134217728);if(e!==null){var n=en();jn(e,t,134217728,n)}Mh(t,134217728)}};o0=function(t){if(t.tag===13){var e=ir(t),n=Ai(t,e);if(n!==null){var i=en();jn(n,t,e,i)}Mh(t,e)}};a0=function(){return it};l0=function(t,e){var n=it;try{return it=t,e()}finally{it=n}};Qu=function(t,e,n){switch(e){case"input":if(Xu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=sc(i);if(!r)throw Error(oe(90));zg(i),Xu(i,r)}}}break;case"textarea":Vg(t,n);break;case"select":e=n.value,e!=null&&gs(t,!!n.multiple,e,!1)}};$g=xh;qg=Or;var nS={usingClientEntryPoint:!1,Events:[Ko,cs,sc,Xg,Yg,xh]},Ks={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},iS={bundleType:Ks.bundleType,version:Ks.version,rendererPackageName:Ks.rendererPackageName,rendererConfig:Ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Di.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ks.findFiberByHostInstance||eS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sa.isDisabled&&Sa.supportsFiber)try{tc=Sa.inject(iS),ii=Sa}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=nS;bn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!bh(e))throw Error(oe(200));return Qy(t,e,null,n)};bn.createRoot=function(t,e){if(!bh(t))throw Error(oe(299));var n=!1,i="",r=Px;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Sh(t,1,!1,null,null,n,!1,i,r),t[Ti]=e.current,Io(t.nodeType===8?t.parentNode:t),new Eh(e)};bn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Zg(e),t=t===null?null:t.stateNode,t};bn.flushSync=function(t){return Or(t)};bn.hydrate=function(t,e,n){if(!pc(e))throw Error(oe(200));return mc(null,t,e,!0,n)};bn.hydrateRoot=function(t,e,n){if(!bh(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Px;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Cx(e,null,t,1,n??null,r,!1,s,o),t[Ti]=e.current,Io(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new hc(e)};bn.render=function(t,e,n){if(!pc(e))throw Error(oe(200));return mc(null,t,e,!1,n)};bn.unmountComponentAtNode=function(t){if(!pc(t))throw Error(oe(40));return t._reactRootContainer?(Or(function(){mc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1};bn.unstable_batchedUpdates=xh;bn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!pc(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return mc(t,e,n,!1,i)};bn.version="18.3.1-next-f1338f8080-20240426";function Lx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lx)}catch(t){console.error(t)}}Lx(),Lg.exports=bn;var rS=Lg.exports,sm=rS;zu.createRoot=sm.createRoot,zu.hydrateRoot=sm.hydrateRoot;const sS="modulepreload",oS=function(t){return"/eden-pipeline/"+t},om={},_t=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=oS(l),l in om)return;om[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":sS,c||(h.as="script"),h.crossOrigin="",h.href=l,a&&h.setAttribute("nonce",a),document.head.appendChild(h),c)return new Promise((d,m)=>{h.addEventListener("load",d),h.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wh="183",aS=0,am=1,lS=2,ul=1,cS=2,uo=3,lr=0,fn=1,vi=2,Ei=0,Ms=1,lm=2,cm=3,um=4,uS=5,Er=100,dS=101,fS=102,hS=103,pS=104,mS=200,gS=201,xS=202,vS=203,Dd=204,Nd=205,_S=206,yS=207,SS=208,MS=209,ES=210,bS=211,wS=212,TS=213,AS=214,Id=0,Ud=1,Fd=2,Ls=3,Od=4,kd=5,zd=6,Bd=7,Dx=0,RS=1,CS=2,si=0,Nx=1,Ix=2,Ux=3,Fx=4,Ox=5,kx=6,zx=7,Bx=300,kr=301,Ds=302,qc=303,Kc=304,gc=306,Vd=1e3,Si=1001,Hd=1002,Vt=1003,PS=1004,Ma=1005,Kt=1006,Jc=1007,Cr=1008,Cn=1009,Vx=1010,Hx=1011,Go=1012,Th=1013,ai=1014,ti=1015,Ci=1016,Ah=1017,Rh=1018,Wo=1020,Gx=35902,Wx=35899,jx=1021,Xx=1022,Gn=1023,Pi=1026,Pr=1027,Yx=1028,Ch=1029,Ns=1030,Ph=1031,Lh=1033,dl=33776,fl=33777,hl=33778,pl=33779,Gd=35840,Wd=35841,jd=35842,Xd=35843,Yd=36196,$d=37492,qd=37496,Kd=37488,Jd=37489,Zd=37490,Qd=37491,ef=37808,tf=37809,nf=37810,rf=37811,sf=37812,of=37813,af=37814,lf=37815,cf=37816,uf=37817,df=37818,ff=37819,hf=37820,pf=37821,mf=36492,gf=36494,xf=36495,vf=36283,_f=36284,yf=36285,Sf=36286,LS=3200,DS=0,NS=1,Yi="",vn="srgb",Is="srgb-linear",Hl="linear",nt="srgb",Wr=7680,dm=519,IS=512,US=513,FS=514,Dh=515,OS=516,kS=517,Nh=518,zS=519,fm=35044,hm="300 es",ni=2e3,Gl=2001;function BS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Wl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function VS(){const t=Wl("canvas");return t.style.display="block",t}const pm={};function mm(...t){const e="THREE."+t.shift();console.log(e,...t)}function $x(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ue(...t){t=$x(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Je(...t){t=$x(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function jl(...t){const e=t.join(" ");e in pm||(pm[e]=!0,Ue(...t))}function HS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const GS={[Id]:Ud,[Fd]:zd,[Od]:Bd,[Ls]:kd,[Ud]:Id,[zd]:Fd,[Bd]:Od,[kd]:Ls};class zs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zc=Math.PI/180,Mf=180/Math.PI;function Zo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function je(t,e,n){return Math.max(e,Math.min(n,t))}function WS(t,e){return(t%e+e)%e}function Qc(t,e,n){return(1-n)*t+n*e}function Js(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class De{constructor(e=0,n=0){De.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Bs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3],d=s[o+0],m=s[o+1],g=s[o+2],M=s[o+3];if(h!==M||l!==d||c!==m||f!==g){let x=l*d+c*m+f*g+h*M;x<0&&(d=-d,m=-m,g=-g,M=-M,x=-x);let u=1-a;if(x<.9995){const p=Math.acos(x),v=Math.sin(p);u=Math.sin(u*p)/v,a=Math.sin(a*p)/v,l=l*u+d*a,c=c*u+m*a,f=f*u+g*a,h=h*u+M*a}else{l=l*u+d*a,c=c*u+m*a,f=f*u+g*a,h=h*u+M*a;const p=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=p,c*=p,f*=p,h*=p}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],m=s[o+2],g=s[o+3];return e[n]=a*g+f*h+l*m-c*d,e[n+1]=l*g+f*d+c*h-a*m,e[n+2]=c*g+f*m+a*d-l*h,e[n+3]=f*g-a*h-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),m=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*m*g,this._y=c*m*h-d*f*g,this._z=c*f*g+d*m*h,this._w=c*f*h-d*m*g;break;case"YXZ":this._x=d*f*h+c*m*g,this._y=c*m*h-d*f*g,this._z=c*f*g-d*m*h,this._w=c*f*h+d*m*g;break;case"ZXY":this._x=d*f*h-c*m*g,this._y=c*m*h+d*f*g,this._z=c*f*g+d*m*h,this._w=c*f*h-d*m*g;break;case"ZYX":this._x=d*f*h-c*m*g,this._y=c*m*h+d*f*g,this._z=c*f*g-d*m*h,this._w=c*f*h+d*m*g;break;case"YZX":this._x=d*f*h+c*m*g,this._y=c*m*h+d*f*g,this._z=c*f*g-d*m*h,this._w=c*f*h-d*m*g;break;case"XZY":this._x=d*f*h-c*m*g,this._y=c*m*h-d*f*g,this._z=c*f*g+d*m*h,this._w=c*f*h+d*m*g;break;default:Ue("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-c)*m,this._z=(o-r)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(s-c)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-r)/m,this._x=(s+c)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(gm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(gm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return eu.copy(this).projectOnVector(e),this.sub(eu)}reflect(e){return this.sub(eu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(je(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const eu=new U,gm=new Bs;class ze{constructor(e,n,i,r,s,o,a,l,c){ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],m=i[5],g=i[8],M=r[0],x=r[3],u=r[6],p=r[1],v=r[4],_=r[7],T=r[2],A=r[5],R=r[8];return s[0]=o*M+a*p+l*T,s[3]=o*x+a*v+l*A,s[6]=o*u+a*_+l*R,s[1]=c*M+f*p+h*T,s[4]=c*x+f*v+h*A,s[7]=c*u+f*_+h*R,s[2]=d*M+m*p+g*T,s[5]=d*x+m*v+g*A,s[8]=d*u+m*_+g*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,m=c*s-o*l,g=n*h+i*d+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/g;return e[0]=h*M,e[1]=(r*c-f*i)*M,e[2]=(a*i-r*o)*M,e[3]=d*M,e[4]=(f*n-r*l)*M,e[5]=(r*s-a*n)*M,e[6]=m*M,e[7]=(i*l-c*n)*M,e[8]=(o*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(tu.makeScale(e,n)),this}rotate(e){return this.premultiply(tu.makeRotation(-e)),this}translate(e,n){return this.premultiply(tu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tu=new ze,xm=new ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vm=new ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jS(){const t={enabled:!0,workingColorSpace:Is,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===nt&&(r.r=bi(r.r),r.g=bi(r.g),r.b=bi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===nt&&(r.r=Es(r.r),r.g=Es(r.g),r.b=Es(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Yi?Hl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return jl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return jl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Is]:{primaries:e,whitePoint:i,transfer:Hl,toXYZ:xm,fromXYZ:vm,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:vn},outputColorSpaceConfig:{drawingBufferColorSpace:vn}},[vn]:{primaries:e,whitePoint:i,transfer:nt,toXYZ:xm,fromXYZ:vm,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:vn}}}),t}const $e=jS();function bi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Es(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let jr;class XS{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{jr===void 0&&(jr=Wl("canvas")),jr.width=e.width,jr.height=e.height;const r=jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=jr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Wl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=bi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(bi(n[i]/255)*255):n[i]=bi(n[i]);return{data:n,width:e.width,height:e.height}}else return Ue("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let YS=0;class Ih{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Zo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(nu(r[o].image)):s.push(nu(r[o]))}else s=nu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function nu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?XS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ue("Texture: Unable to serialize Texture."),{})}let $S=0;const iu=new U;class tn extends zs{constructor(e=tn.DEFAULT_IMAGE,n=tn.DEFAULT_MAPPING,i=Si,r=Si,s=Kt,o=Cr,a=Gn,l=Cn,c=tn.DEFAULT_ANISOTROPY,f=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Zo(),this.name="",this.source=new Ih(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(iu).x}get height(){return this.source.getSize(iu).y}get depth(){return this.source.getSize(iu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ue(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ue(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vd:e.x=e.x-Math.floor(e.x);break;case Si:e.x=e.x<0?0:1;break;case Hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vd:e.y=e.y-Math.floor(e.y);break;case Si:e.y=e.y<0?0:1;break;case Hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Bx;tn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,n=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],m=l[5],g=l[9],M=l[2],x=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-M)<.01&&Math.abs(g-x)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+M)<.1&&Math.abs(g+x)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,_=(m+1)/2,T=(u+1)/2,A=(f+d)/4,R=(h+M)/4,y=(g+x)/4;return v>_&&v>T?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=R/i):_>T?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=A/r,s=y/r):T<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),i=R/s,r=y/s),this.set(i,r,s,n),this}let p=Math.sqrt((x-g)*(x-g)+(h-M)*(h-M)+(d-f)*(d-f));return Math.abs(p)<.001&&(p=1),this.x=(x-g)/p,this.y=(h-M)/p,this.z=(d-f)/p,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=je(this.x,e.x,n.x),this.y=je(this.y,e.y,n.y),this.z=je(this.z,e.z,n.z),this.w=je(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=je(this.x,e,n),this.y=je(this.y,e,n),this.z=je(this.z,e,n),this.w=je(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(je(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qS extends zs{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new At(0,0,e,n),this.scissorTest=!1,this.viewport=new At(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new tn(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Ih(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class oi extends qS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class qx extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class KS extends tn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gt{constructor(e,n,i,r,s,o,a,l,c,f,h,d,m,g,M,x){gt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,d,m,g,M,x)}set(e,n,i,r,s,o,a,l,c,f,h,d,m,g,M,x){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=m,u[7]=g,u[11]=M,u[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new gt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Xr.setFromMatrixColumn(e,0).length(),s=1/Xr.setFromMatrixColumn(e,1).length(),o=1/Xr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,m=o*h,g=a*f,M=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=m+g*c,n[5]=d-M*c,n[9]=-a*l,n[2]=M-d*c,n[6]=g+m*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,m=l*h,g=c*f,M=c*h;n[0]=d+M*a,n[4]=g*a-m,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=m*a-g,n[6]=M+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,m=l*h,g=c*f,M=c*h;n[0]=d-M*a,n[4]=-o*h,n[8]=g+m*a,n[1]=m+g*a,n[5]=o*f,n[9]=M-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,m=o*h,g=a*f,M=a*h;n[0]=l*f,n[4]=g*c-m,n[8]=d*c+M,n[1]=l*h,n[5]=M*c+d,n[9]=m*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,m=o*c,g=a*l,M=a*c;n[0]=l*f,n[4]=M-d*h,n[8]=g*h+m,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=m*h+g,n[10]=d-M*h}else if(e.order==="XZY"){const d=o*l,m=o*c,g=a*l,M=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+M,n[5]=o*f,n[9]=m*h-g,n[2]=g*h-m,n[6]=a*f,n[10]=M*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(JS,e,ZS)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Oi.crossVectors(i,mn),Oi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Oi.crossVectors(i,mn)),Oi.normalize(),Ea.crossVectors(mn,Oi),r[0]=Oi.x,r[4]=Ea.x,r[8]=mn.x,r[1]=Oi.y,r[5]=Ea.y,r[9]=mn.y,r[2]=Oi.z,r[6]=Ea.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],m=i[13],g=i[2],M=i[6],x=i[10],u=i[14],p=i[3],v=i[7],_=i[11],T=i[15],A=r[0],R=r[4],y=r[8],w=r[12],F=r[1],D=r[5],V=r[9],W=r[13],j=r[2],z=r[6],P=r[10],N=r[14],L=r[3],O=r[7],$=r[11],Z=r[15];return s[0]=o*A+a*F+l*j+c*L,s[4]=o*R+a*D+l*z+c*O,s[8]=o*y+a*V+l*P+c*$,s[12]=o*w+a*W+l*N+c*Z,s[1]=f*A+h*F+d*j+m*L,s[5]=f*R+h*D+d*z+m*O,s[9]=f*y+h*V+d*P+m*$,s[13]=f*w+h*W+d*N+m*Z,s[2]=g*A+M*F+x*j+u*L,s[6]=g*R+M*D+x*z+u*O,s[10]=g*y+M*V+x*P+u*$,s[14]=g*w+M*W+x*N+u*Z,s[3]=p*A+v*F+_*j+T*L,s[7]=p*R+v*D+_*z+T*O,s[11]=p*y+v*V+_*P+T*$,s[15]=p*w+v*W+_*N+T*Z,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],m=e[14],g=e[3],M=e[7],x=e[11],u=e[15],p=l*m-c*d,v=a*m-c*h,_=a*d-l*h,T=o*m-c*f,A=o*d-l*f,R=o*h-a*f;return n*(M*p-x*v+u*_)-i*(g*p-x*T+u*A)+r*(g*v-M*T+u*R)-s*(g*_-M*A+x*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],m=e[11],g=e[12],M=e[13],x=e[14],u=e[15],p=n*a-i*o,v=n*l-r*o,_=n*c-s*o,T=i*l-r*a,A=i*c-s*a,R=r*c-s*l,y=f*M-h*g,w=f*x-d*g,F=f*u-m*g,D=h*x-d*M,V=h*u-m*M,W=d*u-m*x,j=p*W-v*V+_*D+T*F-A*w+R*y;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/j;return e[0]=(a*W-l*V+c*D)*z,e[1]=(r*V-i*W-s*D)*z,e[2]=(M*R-x*A+u*T)*z,e[3]=(d*A-h*R-m*T)*z,e[4]=(l*F-o*W-c*w)*z,e[5]=(n*W-r*F+s*w)*z,e[6]=(x*_-g*R-u*v)*z,e[7]=(f*R-d*_+m*v)*z,e[8]=(o*V-a*F+c*y)*z,e[9]=(i*F-n*V-s*y)*z,e[10]=(g*A-M*_+u*p)*z,e[11]=(h*_-f*A-m*p)*z,e[12]=(a*w-o*D-l*y)*z,e[13]=(n*D-i*w+r*y)*z,e[14]=(M*v-g*T-x*p)*z,e[15]=(f*T-h*v+d*p)*z,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,d=s*c,m=s*f,g=s*h,M=o*f,x=o*h,u=a*h,p=l*c,v=l*f,_=l*h,T=i.x,A=i.y,R=i.z;return r[0]=(1-(M+u))*T,r[1]=(m+_)*T,r[2]=(g-v)*T,r[3]=0,r[4]=(m-_)*A,r[5]=(1-(d+u))*A,r[6]=(x+p)*A,r[7]=0,r[8]=(g+v)*R,r[9]=(x-p)*R,r[10]=(1-(d+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let o=Xr.set(r[0],r[1],r[2]).length();const a=Xr.set(r[4],r[5],r[6]).length(),l=Xr.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Fn.copy(this);const c=1/o,f=1/a,h=1/l;return Fn.elements[0]*=c,Fn.elements[1]*=c,Fn.elements[2]*=c,Fn.elements[4]*=f,Fn.elements[5]*=f,Fn.elements[6]*=f,Fn.elements[8]*=h,Fn.elements[9]*=h,Fn.elements[10]*=h,n.setFromRotationMatrix(Fn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,n,i,r,s,o,a=ni,l=!1){const c=this.elements,f=2*s/(n-e),h=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let g,M;if(l)g=s/(o-s),M=o*s/(o-s);else if(a===ni)g=-(o+s)/(o-s),M=-2*o*s/(o-s);else if(a===Gl)g=-o/(o-s),M=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=ni,l=!1){const c=this.elements,f=2/(n-e),h=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let g,M;if(l)g=1/(o-s),M=o/(o-s);else if(a===ni)g=-2/(o-s),M=-(o+s)/(o-s);else if(a===Gl)g=-1/(o-s),M=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=g,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Xr=new U,Fn=new gt,JS=new U(0,0,0),ZS=new U(1,1,1),Oi=new U,Ea=new U,mn=new U,_m=new gt,ym=new Bs;class Li{constructor(e=0,n=0,i=0,r=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:Ue("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return _m.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_m,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return ym.setFromEuler(this),this.setFromQuaternion(ym,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class Kx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let QS=0;const Sm=new U,Yr=new Bs,di=new gt,ba=new U,Zs=new U,e1=new U,t1=new Bs,Mm=new U(1,0,0),Em=new U(0,1,0),bm=new U(0,0,1),wm={type:"added"},n1={type:"removed"},$r={type:"childadded",child:null},ru={type:"childremoved",child:null};class nn extends zs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Zo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nn.DEFAULT_UP.clone();const e=new U,n=new Li,i=new Bs,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new gt},normalMatrix:{value:new ze}}),this.matrix=new gt,this.matrixWorld=new gt,this.matrixAutoUpdate=nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Yr.setFromAxisAngle(e,n),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,n){return Yr.setFromAxisAngle(e,n),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(Mm,e)}rotateY(e){return this.rotateOnAxis(Em,e)}rotateZ(e){return this.rotateOnAxis(bm,e)}translateOnAxis(e,n){return Sm.copy(e).applyQuaternion(this.quaternion),this.position.add(Sm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Mm,e)}translateY(e){return this.translateOnAxis(Em,e)}translateZ(e){return this.translateOnAxis(bm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ba.copy(e):ba.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Zs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(Zs,ba,this.up):di.lookAt(ba,Zs,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Yr.setFromRotationMatrix(di),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wm),$r.child=e,this.dispatchEvent($r),$r.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(n1),ru.child=e,this.dispatchEvent(ru),ru.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wm),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,e,e1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zs,t1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}nn.DEFAULT_UP=new U(0,1,0);nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fo extends nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const i1={type:"move"};class su{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const M of e.hand.values()){const x=n.getJointPose(M,i),u=this._getHandJoint(c,M);x!==null&&(u.matrix.fromArray(x.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=x.radius),u.visible=x!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),m=.02,g=.005;c.inputState.pinching&&d>m+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(i1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new fo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const Jx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ki={h:0,s:0,l:0},wa={h:0,s:0,l:0};function ou(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=$e.workingColorSpace){return this.r=e,this.g=n,this.b=i,$e.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=$e.workingColorSpace){if(e=WS(e,1),n=je(n,0,1),i=je(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=ou(o,s,e+1/3),this.g=ou(o,s,e),this.b=ou(o,s,e-1/3)}return $e.colorSpaceToWorking(this,r),this}setStyle(e,n=vn){function i(s){s!==void 0&&parseFloat(s)<1&&Ue("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ue("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Ue("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=vn){const i=Jx[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ue("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return $e.workingToColorSpace($t.copy(this),e),Math.round(je($t.r*255,0,255))*65536+Math.round(je($t.g*255,0,255))*256+Math.round(je($t.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=$e.workingColorSpace){$e.workingToColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,s=$t.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=$e.workingColorSpace){return $e.workingToColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=vn){$e.workingToColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==vn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(ki),this.setHSL(ki.h+e,ki.s+n,ki.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(ki),e.getHSL(wa);const i=Qc(ki.h,wa.h,n),r=Qc(ki.s,wa.s,n),s=Qc(ki.l,wa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new Qe;Qe.NAMES=Jx;class Uh{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qe(e),this.density=n}clone(){return new Uh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Zx extends nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const On=new U,fi=new U,au=new U,hi=new U,qr=new U,Kr=new U,Tm=new U,lu=new U,cu=new U,uu=new U,du=new At,fu=new At,hu=new At;class Hn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),On.subVectors(e,n),r.cross(On);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){On.subVectors(r,n),fi.subVectors(i,n),au.subVectors(e,n);const o=On.dot(On),a=On.dot(fi),l=On.dot(au),c=fi.dot(fi),f=fi.dot(au),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,m=(c*l-a*f)*d,g=(o*f-a*l)*d;return s.set(1-m-g,g,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return du.setScalar(0),fu.setScalar(0),hu.setScalar(0),du.fromBufferAttribute(e,n),fu.fromBufferAttribute(e,i),hu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(du,s.x),o.addScaledVector(fu,s.y),o.addScaledVector(hu,s.z),o}static isFrontFacing(e,n,i,r){return On.subVectors(i,n),fi.subVectors(e,n),On.cross(fi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return On.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),On.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Hn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Hn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Hn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;qr.subVectors(r,i),Kr.subVectors(s,i),lu.subVectors(e,i);const l=qr.dot(lu),c=Kr.dot(lu);if(l<=0&&c<=0)return n.copy(i);cu.subVectors(e,r);const f=qr.dot(cu),h=Kr.dot(cu);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(qr,o);uu.subVectors(e,s);const m=qr.dot(uu),g=Kr.dot(uu);if(g>=0&&m<=g)return n.copy(s);const M=m*c-l*g;if(M<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Kr,a);const x=f*g-m*h;if(x<=0&&h-f>=0&&m-g>=0)return Tm.subVectors(s,r),a=(h-f)/(h-f+(m-g)),n.copy(r).addScaledVector(Tm,a);const u=1/(x+M+d);return o=M*u,a=d*u,n.copy(i).addScaledVector(qr,o).addScaledVector(Kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Qo{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ta.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ta.copy(i.boundingBox)),Ta.applyMatrix4(e.matrixWorld),this.union(Ta)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),Aa.subVectors(this.max,Qs),Jr.subVectors(e.a,Qs),Zr.subVectors(e.b,Qs),Qr.subVectors(e.c,Qs),zi.subVectors(Zr,Jr),Bi.subVectors(Qr,Zr),pr.subVectors(Jr,Qr);let n=[0,-zi.z,zi.y,0,-Bi.z,Bi.y,0,-pr.z,pr.y,zi.z,0,-zi.x,Bi.z,0,-Bi.x,pr.z,0,-pr.x,-zi.y,zi.x,0,-Bi.y,Bi.x,0,-pr.y,pr.x,0];return!pu(n,Jr,Zr,Qr,Aa)||(n=[1,0,0,0,1,0,0,0,1],!pu(n,Jr,Zr,Qr,Aa))?!1:(Ra.crossVectors(zi,Bi),n=[Ra.x,Ra.y,Ra.z],pu(n,Jr,Zr,Qr,Aa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pi=[new U,new U,new U,new U,new U,new U,new U,new U],kn=new U,Ta=new Qo,Jr=new U,Zr=new U,Qr=new U,zi=new U,Bi=new U,pr=new U,Qs=new U,Aa=new U,Ra=new U,mr=new U;function pu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){mr.fromArray(t,s);const a=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),c=n.dot(mr),f=i.dot(mr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Ct=new U,Ca=new De;let r1=0;class hn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:r1++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=fm,this.updateRanges=[],this.gpuType=ti,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ca.fromBufferAttribute(this,n),Ca.applyMatrix3(e),this.setXY(n,Ca.x,Ca.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Js(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Js(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Js(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Js(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Js(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fm&&(e.usage=this.usage),e}}class Qx extends hn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class ev extends hn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class xt extends hn{constructor(e,n,i){super(new Float32Array(e),n,i)}}const s1=new Qo,eo=new U,mu=new U;class ea{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):s1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const n=eo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(eo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(mu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(mu)),this.expandByPoint(eo.copy(e.center).sub(mu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let o1=0;const Tn=new gt,gu=new nn,es=new U,gn=new Qo,to=new Qo,Ft=new U;class Mt extends zs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=Zo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(BS(e)?ev:Qx)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,n,i){return Tn.makeTranslation(e,n,i),this.applyMatrix4(Tn),this}scale(e,n,i){return Tn.makeScale(e,n,i),this.applyMatrix4(Tn),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(es).negate(),this.translate(es.x,es.y,es.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new xt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ue("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];to.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(gn.min,to.min),gn.expandByPoint(Ft),Ft.addVectors(gn.max,to.max),gn.expandByPoint(Ft)):(gn.expandByPoint(to.min),gn.expandByPoint(to.max))}gn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Ft.fromBufferAttribute(a,c),l&&(es.fromBufferAttribute(e,c),Ft.add(es)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new U,l[y]=new U;const c=new U,f=new U,h=new U,d=new De,m=new De,g=new De,M=new U,x=new U;function u(y,w,F){c.fromBufferAttribute(i,y),f.fromBufferAttribute(i,w),h.fromBufferAttribute(i,F),d.fromBufferAttribute(s,y),m.fromBufferAttribute(s,w),g.fromBufferAttribute(s,F),f.sub(c),h.sub(c),m.sub(d),g.sub(d);const D=1/(m.x*g.y-g.x*m.y);isFinite(D)&&(M.copy(f).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(D),x.copy(h).multiplyScalar(m.x).addScaledVector(f,-g.x).multiplyScalar(D),a[y].add(M),a[w].add(M),a[F].add(M),l[y].add(x),l[w].add(x),l[F].add(x))}let p=this.groups;p.length===0&&(p=[{start:0,count:e.count}]);for(let y=0,w=p.length;y<w;++y){const F=p[y],D=F.start,V=F.count;for(let W=D,j=D+V;W<j;W+=3)u(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const v=new U,_=new U,T=new U,A=new U;function R(y){T.fromBufferAttribute(r,y),A.copy(T);const w=a[y];v.copy(w),v.sub(T.multiplyScalar(T.dot(w))).normalize(),_.crossVectors(A,w);const D=_.dot(l[y])<0?-1:1;o.setXYZW(y,v.x,v.y,v.z,D)}for(let y=0,w=p.length;y<w;++y){const F=p[y],D=F.start,V=F.count;for(let W=D,j=D+V;W<j;W+=3)R(e.getX(W+0)),R(e.getX(W+1)),R(e.getX(W+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new hn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new U,s=new U,o=new U,a=new U,l=new U,c=new U,f=new U,h=new U;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),M=e.getX(d+1),x=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,M),o.fromBufferAttribute(n,x),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,x),a.add(f),l.add(f),c.add(f),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ft.fromBufferAttribute(e,n),Ft.normalize(),e.setXYZ(n,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let m=0,g=0;for(let M=0,x=l.length;M<x;M++){a.isInterleavedBufferAttribute?m=l[M]*a.data.stride+a.offset:m=l[M]*f;for(let u=0;u<f;u++)d[g++]=c[m++]}return new hn(d,f,h)}if(this.index===null)return Ue("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Mt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],m=e(d,i);l.push(m)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];f.push(m.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,m=h.length;d<m;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let a1=0;class Vs extends zs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=Zo(),this.name="",this.type="Material",this.blending=Ms,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dd,this.blendDst=Nd,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ue(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ue(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(i.blending=this.blending),this.side!==lr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Dd&&(i.blendSrc=this.blendSrc),this.blendDst!==Nd&&(i.blendDst=this.blendDst),this.blendEquation!==Er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Wr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Wr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mi=new U,xu=new U,Pa=new U,Vi=new U,vu=new U,La=new U,_u=new U;class Fh{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(mi.copy(this.origin).addScaledVector(this.direction,n),mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xu.copy(e).add(n).multiplyScalar(.5),Pa.copy(n).sub(e).normalize(),Vi.copy(this.origin).sub(xu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Pa),a=Vi.dot(this.direction),l=-Vi.dot(Pa),c=Vi.lengthSq(),f=Math.abs(1-o*o);let h,d,m,g;if(f>0)if(h=o*l-a,d=o*a-l,g=s*f,h>=0)if(d>=-g)if(d<=g){const M=1/f;h*=M,d*=M,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),m=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(xu).addScaledVector(Pa,d),m}intersectSphere(e,n){mi.subVectors(e.center,this.origin);const i=mi.dot(this.direction),r=mi.dot(mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,mi)!==null}intersectTriangle(e,n,i,r,s){vu.subVectors(n,e),La.subVectors(i,e),_u.crossVectors(vu,La);let o=this.direction.dot(_u),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,e);const l=a*this.direction.dot(La.crossVectors(Vi,La));if(l<0)return null;const c=a*this.direction.dot(vu.cross(Vi));if(c<0||l+c>o)return null;const f=-a*Vi.dot(_u);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sr extends Vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Dx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Am=new gt,gr=new Fh,Da=new ea,Rm=new U,Na=new U,Ia=new U,Ua=new U,yu=new U,Fa=new U,Cm=new U,Oa=new U;class Mn extends nn{constructor(e=new Mt,n=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Fa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(yu.fromBufferAttribute(h,e),o?Fa.addScaledVector(yu,f):Fa.addScaledVector(yu.sub(n),f))}n.add(Fa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Da.copy(i.boundingSphere),Da.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(Da.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Da,Rm)===null||gr.origin.distanceToSquared(Rm)>(e.far-e.near)**2))&&(Am.copy(s).invert(),gr.copy(e.ray).applyMatrix4(Am),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){const x=d[g],u=o[x.materialIndex],p=Math.max(x.start,m.start),v=Math.min(a.count,Math.min(x.start+x.count,m.start+m.count));for(let _=p,T=v;_<T;_+=3){const A=a.getX(_),R=a.getX(_+1),y=a.getX(_+2);r=ka(this,u,e,i,c,f,h,A,R,y),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(a.count,m.start+m.count);for(let x=g,u=M;x<u;x+=3){const p=a.getX(x),v=a.getX(x+1),_=a.getX(x+2);r=ka(this,o,e,i,c,f,h,p,v,_),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,M=d.length;g<M;g++){const x=d[g],u=o[x.materialIndex],p=Math.max(x.start,m.start),v=Math.min(l.count,Math.min(x.start+x.count,m.start+m.count));for(let _=p,T=v;_<T;_+=3){const A=_,R=_+1,y=_+2;r=ka(this,u,e,i,c,f,h,A,R,y),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=x.materialIndex,n.push(r))}}else{const g=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let x=g,u=M;x<u;x+=3){const p=x,v=x+1,_=x+2;r=ka(this,o,e,i,c,f,h,p,v,_),r&&(r.faceIndex=Math.floor(x/3),n.push(r))}}}}function l1(t,e,n,i,r,s,o,a){let l;if(e.side===fn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===lr,a),l===null)return null;Oa.copy(a),Oa.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Oa);return c<n.near||c>n.far?null:{distance:c,point:Oa.clone(),object:t}}function ka(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Na),t.getVertexPosition(l,Ia),t.getVertexPosition(c,Ua);const f=l1(t,e,n,i,Na,Ia,Ua,Cm);if(f){const h=new U;Hn.getBarycoord(Cm,Na,Ia,Ua,h),r&&(f.uv=Hn.getInterpolatedAttribute(r,a,l,c,h,new De)),s&&(f.uv1=Hn.getInterpolatedAttribute(s,a,l,c,h,new De)),o&&(f.normal=Hn.getInterpolatedAttribute(o,a,l,c,h,new U),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new U,materialIndex:0};Hn.getNormal(Na,Ia,Ua,d.normal),f.face=d,f.barycoord=h}return f}class c1 extends tn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Vt,f=Vt,h,d){super(null,o,a,l,c,f,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Su=new U,u1=new U,d1=new ze;class Mr{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Su.subVectors(i,n).cross(u1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Su),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||d1.getNormalMatrix(e),r=this.coplanarPoint(Su).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new ea,f1=new De(.5,.5),za=new U;class tv{constructor(e=new Mr,n=new Mr,i=new Mr,r=new Mr,s=new Mr,o=new Mr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=ni,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],h=s[5],d=s[6],m=s[7],g=s[8],M=s[9],x=s[10],u=s[11],p=s[12],v=s[13],_=s[14],T=s[15];if(r[0].setComponents(c-o,m-f,u-g,T-p).normalize(),r[1].setComponents(c+o,m+f,u+g,T+p).normalize(),r[2].setComponents(c+a,m+h,u+M,T+v).normalize(),r[3].setComponents(c-a,m-h,u-M,T-v).normalize(),i)r[4].setComponents(l,d,x,_).normalize(),r[5].setComponents(c-l,m-d,u-x,T-_).normalize();else if(r[4].setComponents(c-l,m-d,u-x,T-_).normalize(),n===ni)r[5].setComponents(c+l,m+d,u+x,T+_).normalize();else if(n===Gl)r[5].setComponents(l,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){xr.center.set(0,0,0);const n=f1.distanceTo(e.center);return xr.radius=.7071067811865476+n,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(za.x=r.normal.x>0?e.max.x:e.min.x,za.y=r.normal.y>0?e.max.y:e.min.y,za.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(za)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jo extends Vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xl=new U,Yl=new U,Pm=new gt,no=new Fh,Ba=new ea,Mu=new U,Lm=new U;class Ef extends nn{constructor(e=new Mt,n=new jo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)Xl.fromBufferAttribute(n,r-1),Yl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=Xl.distanceTo(Yl);e.setAttribute("lineDistance",new xt(i,1))}else Ue("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ba.copy(i.boundingSphere),Ba.applyMatrix4(r),Ba.radius+=s,e.ray.intersectsSphere(Ba)===!1)return;Pm.copy(r).invert(),no.copy(e.ray).applyMatrix4(Pm);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const m=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let M=m,x=g-1;M<x;M+=c){const u=f.getX(M),p=f.getX(M+1),v=Va(this,e,no,l,u,p,M);v&&n.push(v)}if(this.isLineLoop){const M=f.getX(g-1),x=f.getX(m),u=Va(this,e,no,l,M,x,g-1);u&&n.push(u)}}else{const m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let M=m,x=g-1;M<x;M+=c){const u=Va(this,e,no,l,M,M+1,M);u&&n.push(u)}if(this.isLineLoop){const M=Va(this,e,no,l,g-1,m,g-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Va(t,e,n,i,r,s,o){const a=t.geometry.attributes.position;if(Xl.fromBufferAttribute(a,r),Yl.fromBufferAttribute(a,s),n.distanceSqToSegment(Xl,Yl,Mu,Lm)>i)return;Mu.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(Mu);if(!(c<e.near||c>e.far))return{distance:c,point:Lm.clone().applyMatrix4(t.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:t}}const Dm=new U,Nm=new U;class Im extends Ef{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)Dm.fromBufferAttribute(n,r),Nm.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+Dm.distanceTo(Nm);e.setAttribute("lineDistance",new xt(i,1))}else Ue("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class $l extends Vs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Um=new gt,bf=new Fh,Ha=new ea,Ga=new U;class wf extends nn{constructor(e=new Mt,n=new $l){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ha.copy(i.boundingSphere),Ha.applyMatrix4(r),Ha.radius+=s,e.ray.intersectsSphere(Ha)===!1)return;Um.copy(r).invert(),bf.copy(e.ray).applyMatrix4(Um);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,h=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let g=d,M=m;g<M;g++){const x=c.getX(g);Ga.fromBufferAttribute(h,x),Fm(Ga,x,l,r,e,n,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=d,M=m;g<M;g++)Ga.fromBufferAttribute(h,g),Fm(Ga,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Fm(t,e,n,i,r,s,o){const a=bf.distanceSqToPoint(t);if(a<n){const l=new U;bf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class nv extends tn{constructor(e=[],n=kr,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xo extends tn{constructor(e,n,i=ai,r,s,o,a=Vt,l=Vt,c,f=Pi,h=1){if(f!==Pi&&f!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:h};super(d,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ih(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class h1 extends Xo{constructor(e,n=ai,i=kr,r,s,o=Vt,a=Vt,l,c=Pi){const f={width:e,height:e,depth:1},h=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class iv extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ta extends Mt{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(h,2));function g(M,x,u,p,v,_,T,A,R,y,w){const F=_/R,D=T/y,V=_/2,W=T/2,j=A/2,z=R+1,P=y+1;let N=0,L=0;const O=new U;for(let $=0;$<P;$++){const Z=$*D-W;for(let ie=0;ie<z;ie++){const Ae=ie*F-V;O[M]=Ae*p,O[x]=Z*v,O[u]=j,c.push(O.x,O.y,O.z),O[M]=0,O[x]=0,O[u]=A>0?1:-1,f.push(O.x,O.y,O.z),h.push(ie/R),h.push(1-$/y),N+=1}}for(let $=0;$<y;$++)for(let Z=0;Z<R;Z++){const ie=d+Z+z*$,Ae=d+Z+z*($+1),We=d+(Z+1)+z*($+1),te=d+(Z+1)+z*$;l.push(ie,Ae,te),l.push(Ae,We,te),L+=6}a.addGroup(m,L,w),m+=L,d+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class na extends Mt{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),f(),this.setAttribute("position",new xt(s,3)),this.setAttribute("normal",new xt(s.slice(),3)),this.setAttribute("uv",new xt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(p){const v=new U,_=new U,T=new U;for(let A=0;A<n.length;A+=3)m(n[A+0],v),m(n[A+1],_),m(n[A+2],T),l(v,_,T,p)}function l(p,v,_,T){const A=T+1,R=[];for(let y=0;y<=A;y++){R[y]=[];const w=p.clone().lerp(_,y/A),F=v.clone().lerp(_,y/A),D=A-y;for(let V=0;V<=D;V++)V===0&&y===A?R[y][V]=w:R[y][V]=w.clone().lerp(F,V/D)}for(let y=0;y<A;y++)for(let w=0;w<2*(A-y)-1;w++){const F=Math.floor(w/2);w%2===0?(d(R[y][F+1]),d(R[y+1][F]),d(R[y][F])):(d(R[y][F+1]),d(R[y+1][F+1]),d(R[y+1][F]))}}function c(p){const v=new U;for(let _=0;_<s.length;_+=3)v.x=s[_+0],v.y=s[_+1],v.z=s[_+2],v.normalize().multiplyScalar(p),s[_+0]=v.x,s[_+1]=v.y,s[_+2]=v.z}function f(){const p=new U;for(let v=0;v<s.length;v+=3){p.x=s[v+0],p.y=s[v+1],p.z=s[v+2];const _=x(p)/2/Math.PI+.5,T=u(p)/Math.PI+.5;o.push(_,1-T)}g(),h()}function h(){for(let p=0;p<o.length;p+=6){const v=o[p+0],_=o[p+2],T=o[p+4],A=Math.max(v,_,T),R=Math.min(v,_,T);A>.9&&R<.1&&(v<.2&&(o[p+0]+=1),_<.2&&(o[p+2]+=1),T<.2&&(o[p+4]+=1))}}function d(p){s.push(p.x,p.y,p.z)}function m(p,v){const _=p*3;v.x=e[_+0],v.y=e[_+1],v.z=e[_+2]}function g(){const p=new U,v=new U,_=new U,T=new U,A=new De,R=new De,y=new De;for(let w=0,F=0;w<s.length;w+=9,F+=6){p.set(s[w+0],s[w+1],s[w+2]),v.set(s[w+3],s[w+4],s[w+5]),_.set(s[w+6],s[w+7],s[w+8]),A.set(o[F+0],o[F+1]),R.set(o[F+2],o[F+3]),y.set(o[F+4],o[F+5]),T.copy(p).add(v).add(_).divideScalar(3);const D=x(T);M(A,F+0,p,D),M(R,F+2,v,D),M(y,F+4,_,D)}}function M(p,v,_,T){T<0&&p.x===1&&(o[v]=p.x-1),_.x===0&&_.z===0&&(o[v]=T/2/Math.PI+.5)}function x(p){return Math.atan2(p.z,-p.x)}function u(p){return Math.atan2(-p.y,Math.sqrt(p.x*p.x+p.z*p.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new na(e.vertices,e.indices,e.radius,e.detail)}}class Ni{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ue("Curve: .getPoint() not implemented.")}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n=null){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const f=i[r],d=i[r+1]-f,m=(o-f)/d;return(r+m)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new De:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n=!1){const i=new U,r=[],s=[],o=[],a=new U,l=new gt;for(let m=0;m<=e;m++){const g=m/e;r[m]=this.getTangentAt(g,new U)}s[0]=new U,o[0]=new U;let c=Number.MAX_VALUE;const f=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);f<=c&&(c=f,i.set(1,0,0)),h<=c&&(c=h,i.set(0,1,0)),d<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let m=1;m<=e;m++){if(s[m]=s[m-1].clone(),o[m]=o[m-1].clone(),a.crossVectors(r[m-1],r[m]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(je(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(a,g))}o[m].crossVectors(r[m],s[m])}if(n===!0){let m=Math.acos(je(s[0].dot(s[e]),-1,1));m/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(m=-m);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class rv extends Ni{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new De){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,m=c-this.aY;l=d*f-m*h+this.aX,c=d*h+m*f+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class p1 extends rv{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Oh(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,f,h){let d=(o-s)/c-(a-s)/(c+f)+(a-o)/f,m=(a-o)/f-(l-o)/(f+h)+(l-a)/h;d*=f,m*=f,r(o,a,d,m)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Wa=new U,Eu=new Oh,bu=new Oh,wu=new Oh;class sv extends Ni{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new U){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,f;this.closed||a>0?c=r[(a-1)%s]:(Wa.subVectors(r[0],r[1]).add(r[0]),c=Wa);const h=r[a%s],d=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(Wa.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=Wa),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(h),m),M=Math.pow(h.distanceToSquared(d),m),x=Math.pow(d.distanceToSquared(f),m);M<1e-4&&(M=1),g<1e-4&&(g=M),x<1e-4&&(x=M),Eu.initNonuniformCatmullRom(c.x,h.x,d.x,f.x,g,M,x),bu.initNonuniformCatmullRom(c.y,h.y,d.y,f.y,g,M,x),wu.initNonuniformCatmullRom(c.z,h.z,d.z,f.z,g,M,x)}else this.curveType==="catmullrom"&&(Eu.initCatmullRom(c.x,h.x,d.x,f.x,this.tension),bu.initCatmullRom(c.y,h.y,d.y,f.y,this.tension),wu.initCatmullRom(c.z,h.z,d.z,f.z,this.tension));return i.set(Eu.calc(l),bu.calc(l),wu.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new U().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Om(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function m1(t,e){const n=1-t;return n*n*e}function g1(t,e){return 2*(1-t)*t*e}function x1(t,e){return t*t*e}function Eo(t,e,n,i){return m1(t,e)+g1(t,n)+x1(t,i)}function v1(t,e){const n=1-t;return n*n*n*e}function _1(t,e){const n=1-t;return 3*n*n*t*e}function y1(t,e){return 3*(1-t)*t*t*e}function S1(t,e){return t*t*t*e}function bo(t,e,n,i,r){return v1(t,e)+_1(t,n)+y1(t,i)+S1(t,r)}class M1 extends Ni{constructor(e=new De,n=new De,i=new De,r=new De){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new De){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(bo(e,r.x,s.x,o.x,a.x),bo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class E1 extends Ni{constructor(e=new U,n=new U,i=new U,r=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new U){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(bo(e,r.x,s.x,o.x,a.x),bo(e,r.y,s.y,o.y,a.y),bo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class b1 extends Ni{constructor(e=new De,n=new De){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new De){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new De){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class w1 extends Ni{constructor(e=new U,n=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new U){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new U){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class T1 extends Ni{constructor(e=new De,n=new De,i=new De){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new De){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Eo(e,r.x,s.x,o.x),Eo(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ov extends Ni{constructor(e=new U,n=new U,i=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new U){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Eo(e,r.x,s.x,o.x),Eo(e,r.y,s.y,o.y),Eo(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class A1 extends Ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new De){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],f=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Om(a,l.x,c.x,f.x,h.x),Om(a,l.y,c.y,f.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new De().fromArray(r))}return this}}var R1=Object.freeze({__proto__:null,ArcCurve:p1,CatmullRomCurve3:sv,CubicBezierCurve:M1,CubicBezierCurve3:E1,EllipseCurve:rv,LineCurve:b1,LineCurve3:w1,QuadraticBezierCurve:T1,QuadraticBezierCurve3:ov,SplineCurve:A1});class br extends na{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new br(e.radius,e.detail)}}class wo extends na{constructor(e=1,n=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,n),this.type="OctahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new wo(e.radius,e.detail)}}class xc extends Mt{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,m=[],g=[],M=[],x=[];for(let u=0;u<f;u++){const p=u*d-o;for(let v=0;v<c;v++){const _=v*h-s;g.push(_,-p,0),M.push(0,0,1),x.push(v/a),x.push(1-u/l)}}for(let u=0;u<l;u++)for(let p=0;p<a;p++){const v=p+c*u,_=p+c*(u+1),T=p+1+c*(u+1),A=p+1+c*u;m.push(v,_,A),m.push(_,T,A)}this.setIndex(m),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(M,3)),this.setAttribute("uv",new xt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.width,e.height,e.widthSegments,e.heightSegments)}}class ql extends Mt{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],h=new U,d=new U,m=[],g=[],M=[],x=[];for(let u=0;u<=i;u++){const p=[],v=u/i;let _=0;u===0&&o===0?_=.5/n:u===i&&l===Math.PI&&(_=-.5/n);for(let T=0;T<=n;T++){const A=T/n;h.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),M.push(d.x,d.y,d.z),x.push(A+_,1-v),p.push(c++)}f.push(p)}for(let u=0;u<i;u++)for(let p=0;p<n;p++){const v=f[u][p+1],_=f[u][p],T=f[u+1][p],A=f[u+1][p+1];(u!==0||o>0)&&m.push(v,_,A),(u!==i-1||l<Math.PI)&&m.push(_,T,A)}this.setIndex(m),this.setAttribute("position",new xt(g,3)),this.setAttribute("normal",new xt(M,3)),this.setAttribute("uv",new xt(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ql(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Kl extends na{constructor(e=1,n=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,n),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Kl(e.radius,e.detail)}}class Jl extends Mt{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],f=[],h=[],d=new U,m=new U,g=new U;for(let M=0;M<=i;M++){const x=o+M/i*a;for(let u=0;u<=r;u++){const p=u/r*s;m.x=(e+n*Math.cos(x))*Math.cos(p),m.y=(e+n*Math.cos(x))*Math.sin(p),m.z=n*Math.sin(x),c.push(m.x,m.y,m.z),d.x=e*Math.cos(p),d.y=e*Math.sin(p),g.subVectors(m,d).normalize(),f.push(g.x,g.y,g.z),h.push(u/r),h.push(M/i)}}for(let M=1;M<=i;M++)for(let x=1;x<=r;x++){const u=(r+1)*M+x-1,p=(r+1)*(M-1)+x-1,v=(r+1)*(M-1)+x,_=(r+1)*M+x;l.push(u,p,_),l.push(p,v,_)}this.setIndex(l),this.setAttribute("position",new xt(c,3)),this.setAttribute("normal",new xt(f,3)),this.setAttribute("uv",new xt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class kh extends Mt{constructor(e=new ov(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),n=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:r,closed:s};const o=e.computeFrenetFrames(n,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new U,l=new U,c=new De;let f=new U;const h=[],d=[],m=[],g=[];M(),this.setIndex(g),this.setAttribute("position",new xt(h,3)),this.setAttribute("normal",new xt(d,3)),this.setAttribute("uv",new xt(m,2));function M(){for(let v=0;v<n;v++)x(v);x(s===!1?n:0),p(),u()}function x(v){f=e.getPointAt(v/n,f);const _=o.normals[v],T=o.binormals[v];for(let A=0;A<=r;A++){const R=A/r*Math.PI*2,y=Math.sin(R),w=-Math.cos(R);l.x=w*_.x+y*T.x,l.y=w*_.y+y*T.y,l.z=w*_.z+y*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=f.x+i*l.x,a.y=f.y+i*l.y,a.z=f.z+i*l.z,h.push(a.x,a.y,a.z)}}function u(){for(let v=1;v<=n;v++)for(let _=1;_<=r;_++){const T=(r+1)*(v-1)+(_-1),A=(r+1)*v+(_-1),R=(r+1)*v+_,y=(r+1)*(v-1)+_;g.push(T,A,y),g.push(A,R,y)}}function p(){for(let v=0;v<=n;v++)for(let _=0;_<=r;_++)c.x=v/n,c.y=_/r,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new kh(new R1[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function Us(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ue("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Zt(t){const e={};for(let n=0;n<t.length;n++){const i=Us(t[n]);for(const r in i)e[r]=i[r]}return e}function C1(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function av(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}const P1={clone:Us,merge:Zt};var L1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,D1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=L1,this.fragmentShader=D1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Us(e.uniforms),this.uniformsGroups=C1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class N1 extends li{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class I1 extends Vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=LS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class U1 extends Vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ja=new U,Xa=new Bs,qn=new U;class lv extends nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new gt,this.projectionMatrix=new gt,this.projectionMatrixInverse=new gt,this.coordinateSystem=ni,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ja,Xa,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,Xa,qn.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(ja,Xa,qn),qn.x===1&&qn.y===1&&qn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ja,Xa,qn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new U,km=new De,zm=new De;class _n extends lv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Mf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Mf*2*Math.atan(Math.tan(Zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,n){return this.getViewBounds(e,km,zm),n.subVectors(zm,km)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Zc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class cv extends lv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ts=-90,ns=1;class F1 extends nn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(ts,ns,e,n);r.layers=this.layers,this.add(r);const s=new _n(ts,ns,e,n);s.layers=this.layers,this.add(s);const o=new _n(ts,ns,e,n);o.layers=this.layers,this.add(o);const a=new _n(ts,ns,e,n);a.layers=this.layers,this.add(a);const l=new _n(ts,ns,e,n);l.layers=this.layers,this.add(l);const c=new _n(ts,ns,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(h,d,m),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class O1 extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Bm(t,e,n,i){const r=k1(i);switch(n){case jx:return t*e;case Yx:return t*e/r.components*r.byteLength;case Ch:return t*e/r.components*r.byteLength;case Ns:return t*e*2/r.components*r.byteLength;case Ph:return t*e*2/r.components*r.byteLength;case Xx:return t*e*3/r.components*r.byteLength;case Gn:return t*e*4/r.components*r.byteLength;case Lh:return t*e*4/r.components*r.byteLength;case dl:case fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case hl:case pl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Wd:case Xd:return Math.max(t,16)*Math.max(e,8)/4;case Gd:case jd:return Math.max(t,8)*Math.max(e,8)/2;case Yd:case $d:case Kd:case Jd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case qd:case Zd:case Qd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ef:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case tf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case nf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case rf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case sf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case of:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case af:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case lf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case cf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case uf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case df:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case ff:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case hf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case pf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case mf:case gf:case xf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case vf:case _f:return Math.ceil(t/4)*Math.ceil(e/4)*8;case yf:case Sf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function k1(t){switch(t){case Cn:case Vx:return{byteLength:1,components:1};case Go:case Hx:case Ci:return{byteLength:2,components:1};case Ah:case Rh:return{byteLength:2,components:4};case ai:case Th:case ti:return{byteLength:4,components:1};case Gx:case Wx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wh}}));typeof window<"u"&&(window.__THREE__?Ue("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function z1(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),a.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,f);else{h.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<h.length;m++){const g=h[d],M=h[m];M.start<=g.start+g.count+1?g.count=Math.max(g.count,M.start+M.count-g.start):(++d,h[d]=M)}h.length=d+1;for(let m=0,g=h.length;m<g;m++){const M=h[m];t.bufferSubData(c,M.start*f.BYTES_PER_ELEMENT,f,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var B1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,V1=`#ifdef USE_ALPHAHASH
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
#endif`,H1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,j1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,X1=`#ifdef USE_AOMAP
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
#endif`,Y1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$1=`#ifdef USE_BATCHING
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
#endif`,q1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,K1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Z1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Q1=`#ifdef USE_IRIDESCENCE
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
#endif`,eM=`#ifdef USE_BUMPMAP
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
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,oM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,aM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,cM=`#define PI 3.141592653589793
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
} // validated`,uM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dM=`vec3 transformedNormal = objectNormal;
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
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gM="gl_FragColor = linearToOutputTexel( gl_FragColor );",xM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vM=`#ifdef USE_ENVMAP
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
#endif`,_M=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,MM=`#ifdef USE_ENVMAP
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
#endif`,EM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,wM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,TM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,AM=`#ifdef USE_GRADIENTMAP
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
}`,RM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,CM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LM=`uniform bool receiveShadow;
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
#endif`,DM=`#ifdef USE_ENVMAP
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
#endif`,NM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,IM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OM=`PhysicalMaterial material;
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
#endif`,kM=`uniform sampler2D dfgLUT;
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
}`,zM=`
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
#endif`,BM=`#if defined( RE_IndirectDiffuse )
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
#endif`,VM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,XM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$M=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qM=`#if defined( USE_POINTS_UV )
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
#endif`,KM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tE=`#ifdef USE_MORPHTARGETS
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
#endif`,nE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lE=`#ifdef USE_NORMALMAP
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
#endif`,cE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_E=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ME=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,bE=`float getShadowMask() {
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
}`,wE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,TE=`#ifdef USE_SKINNING
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
#endif`,AE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RE=`#ifdef USE_SKINNING
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
#endif`,CE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,LE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,DE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,NE=`#ifdef USE_TRANSMISSION
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
#endif`,IE=`#ifdef USE_TRANSMISSION
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
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const zE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,BE=`uniform sampler2D t2D;
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
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jE=`#include <common>
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
}`,XE=`#if DEPTH_PACKING == 3200
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
}`,YE=`#define DISTANCE
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
}`,$E=`#define DISTANCE
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
}`,qE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`uniform float scale;
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
}`,ZE=`uniform vec3 diffuse;
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
}`,QE=`#include <common>
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
}`,e2=`uniform vec3 diffuse;
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
}`,t2=`#define LAMBERT
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
}`,n2=`#define LAMBERT
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
}`,i2=`#define MATCAP
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
}`,r2=`#define MATCAP
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
}`,s2=`#define NORMAL
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
}`,o2=`#define NORMAL
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
}`,a2=`#define PHONG
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
}`,l2=`#define PHONG
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
}`,c2=`#define STANDARD
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
}`,u2=`#define STANDARD
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
}`,d2=`#define TOON
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
}`,f2=`#define TOON
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
}`,h2=`uniform float size;
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
}`,p2=`uniform vec3 diffuse;
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
}`,m2=`#include <common>
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
}`,g2=`uniform vec3 color;
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
}`,x2=`uniform float rotation;
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
}`,v2=`uniform vec3 diffuse;
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
}`,Be={alphahash_fragment:B1,alphahash_pars_fragment:V1,alphamap_fragment:H1,alphamap_pars_fragment:G1,alphatest_fragment:W1,alphatest_pars_fragment:j1,aomap_fragment:X1,aomap_pars_fragment:Y1,batching_pars_vertex:$1,batching_vertex:q1,begin_vertex:K1,beginnormal_vertex:J1,bsdfs:Z1,iridescence_fragment:Q1,bumpmap_pars_fragment:eM,clipping_planes_fragment:tM,clipping_planes_pars_fragment:nM,clipping_planes_pars_vertex:iM,clipping_planes_vertex:rM,color_fragment:sM,color_pars_fragment:oM,color_pars_vertex:aM,color_vertex:lM,common:cM,cube_uv_reflection_fragment:uM,defaultnormal_vertex:dM,displacementmap_pars_vertex:fM,displacementmap_vertex:hM,emissivemap_fragment:pM,emissivemap_pars_fragment:mM,colorspace_fragment:gM,colorspace_pars_fragment:xM,envmap_fragment:vM,envmap_common_pars_fragment:_M,envmap_pars_fragment:yM,envmap_pars_vertex:SM,envmap_physical_pars_fragment:DM,envmap_vertex:MM,fog_vertex:EM,fog_pars_vertex:bM,fog_fragment:wM,fog_pars_fragment:TM,gradientmap_pars_fragment:AM,lightmap_pars_fragment:RM,lights_lambert_fragment:CM,lights_lambert_pars_fragment:PM,lights_pars_begin:LM,lights_toon_fragment:NM,lights_toon_pars_fragment:IM,lights_phong_fragment:UM,lights_phong_pars_fragment:FM,lights_physical_fragment:OM,lights_physical_pars_fragment:kM,lights_fragment_begin:zM,lights_fragment_maps:BM,lights_fragment_end:VM,logdepthbuf_fragment:HM,logdepthbuf_pars_fragment:GM,logdepthbuf_pars_vertex:WM,logdepthbuf_vertex:jM,map_fragment:XM,map_pars_fragment:YM,map_particle_fragment:$M,map_particle_pars_fragment:qM,metalnessmap_fragment:KM,metalnessmap_pars_fragment:JM,morphinstance_vertex:ZM,morphcolor_vertex:QM,morphnormal_vertex:eE,morphtarget_pars_vertex:tE,morphtarget_vertex:nE,normal_fragment_begin:iE,normal_fragment_maps:rE,normal_pars_fragment:sE,normal_pars_vertex:oE,normal_vertex:aE,normalmap_pars_fragment:lE,clearcoat_normal_fragment_begin:cE,clearcoat_normal_fragment_maps:uE,clearcoat_pars_fragment:dE,iridescence_pars_fragment:fE,opaque_fragment:hE,packing:pE,premultiplied_alpha_fragment:mE,project_vertex:gE,dithering_fragment:xE,dithering_pars_fragment:vE,roughnessmap_fragment:_E,roughnessmap_pars_fragment:yE,shadowmap_pars_fragment:SE,shadowmap_pars_vertex:ME,shadowmap_vertex:EE,shadowmask_pars_fragment:bE,skinbase_vertex:wE,skinning_pars_vertex:TE,skinning_vertex:AE,skinnormal_vertex:RE,specularmap_fragment:CE,specularmap_pars_fragment:PE,tonemapping_fragment:LE,tonemapping_pars_fragment:DE,transmission_fragment:NE,transmission_pars_fragment:IE,uv_pars_fragment:UE,uv_pars_vertex:FE,uv_vertex:OE,worldpos_vertex:kE,background_vert:zE,background_frag:BE,backgroundCube_vert:VE,backgroundCube_frag:HE,cube_vert:GE,cube_frag:WE,depth_vert:jE,depth_frag:XE,distance_vert:YE,distance_frag:$E,equirect_vert:qE,equirect_frag:KE,linedashed_vert:JE,linedashed_frag:ZE,meshbasic_vert:QE,meshbasic_frag:e2,meshlambert_vert:t2,meshlambert_frag:n2,meshmatcap_vert:i2,meshmatcap_frag:r2,meshnormal_vert:s2,meshnormal_frag:o2,meshphong_vert:a2,meshphong_frag:l2,meshphysical_vert:c2,meshphysical_frag:u2,meshtoon_vert:d2,meshtoon_frag:f2,points_vert:h2,points_frag:p2,shadow_vert:m2,shadow_frag:g2,sprite_vert:x2,sprite_frag:v2},he={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},Qn={basic:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Zt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Zt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Zt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Zt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Zt([he.points,he.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Zt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Zt([he.common,he.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Zt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Zt([he.sprite,he.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Zt([he.common,he.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Zt([he.lights,he.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};Qn.physical={uniforms:Zt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const Ya={r:0,b:0,g:0},vr=new Li,_2=new gt;function y2(t,e,n,i,r,s){const o=new Qe(0);let a=r===!0?0:1,l,c,f=null,h=0,d=null;function m(p){let v=p.isScene===!0?p.background:null;if(v&&v.isTexture){const _=p.backgroundBlurriness>0;v=e.get(v,_)}return v}function g(p){let v=!1;const _=m(p);_===null?x(o,a):_&&_.isColor&&(x(_,1),v=!0);const T=t.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(p,v){const _=m(v);_&&(_.isCubeTexture||_.mapping===gc)?(c===void 0&&(c=new Mn(new ta(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Us(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,A,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),vr.copy(v.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(_2.makeRotationFromEuler(vr)),c.material.toneMapped=$e.getTransfer(_.colorSpace)!==nt,(f!==_||h!==_.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,f=_,h=_.version,d=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Mn(new xc(2,2),new li({name:"BackgroundMaterial",uniforms:Us(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=$e.getTransfer(_.colorSpace)!==nt,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||h!==_.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,f=_,h=_.version,d=t.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function x(p,v){p.getRGB(Ya,av(t)),n.buffers.color.setClear(Ya.r,Ya.g,Ya.b,v,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(p,v=1){o.set(p),a=v,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(p){a=p,x(o,a)},render:g,addToRenderList:M,dispose:u}}function S2(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(D,V,W,j,z){let P=!1;const N=h(D,j,W,V);s!==N&&(s=N,c(s.object)),P=m(D,j,W,z),P&&g(D,j,W,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(P||o)&&(o=!1,_(D,V,W,j),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return t.createVertexArray()}function c(D){return t.bindVertexArray(D)}function f(D){return t.deleteVertexArray(D)}function h(D,V,W,j){const z=j.wireframe===!0;let P=i[V.id];P===void 0&&(P={},i[V.id]=P);const N=D.isInstancedMesh===!0?D.id:0;let L=P[N];L===void 0&&(L={},P[N]=L);let O=L[W.id];O===void 0&&(O={},L[W.id]=O);let $=O[z];return $===void 0&&($=d(l()),O[z]=$),$}function d(D){const V=[],W=[],j=[];for(let z=0;z<n;z++)V[z]=0,W[z]=0,j[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:W,attributeDivisors:j,object:D,attributes:{},index:null}}function m(D,V,W,j){const z=s.attributes,P=V.attributes;let N=0;const L=W.getAttributes();for(const O in L)if(L[O].location>=0){const Z=z[O];let ie=P[O];if(ie===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor)),Z===void 0||Z.attribute!==ie||ie&&Z.data!==ie.data)return!0;N++}return s.attributesNum!==N||s.index!==j}function g(D,V,W,j){const z={},P=V.attributes;let N=0;const L=W.getAttributes();for(const O in L)if(L[O].location>=0){let Z=P[O];Z===void 0&&(O==="instanceMatrix"&&D.instanceMatrix&&(Z=D.instanceMatrix),O==="instanceColor"&&D.instanceColor&&(Z=D.instanceColor));const ie={};ie.attribute=Z,Z&&Z.data&&(ie.data=Z.data),z[O]=ie,N++}s.attributes=z,s.attributesNum=N,s.index=j}function M(){const D=s.newAttributes;for(let V=0,W=D.length;V<W;V++)D[V]=0}function x(D){u(D,0)}function u(D,V){const W=s.newAttributes,j=s.enabledAttributes,z=s.attributeDivisors;W[D]=1,j[D]===0&&(t.enableVertexAttribArray(D),j[D]=1),z[D]!==V&&(t.vertexAttribDivisor(D,V),z[D]=V)}function p(){const D=s.newAttributes,V=s.enabledAttributes;for(let W=0,j=V.length;W<j;W++)V[W]!==D[W]&&(t.disableVertexAttribArray(W),V[W]=0)}function v(D,V,W,j,z,P,N){N===!0?t.vertexAttribIPointer(D,V,W,z,P):t.vertexAttribPointer(D,V,W,j,z,P)}function _(D,V,W,j){M();const z=j.attributes,P=W.getAttributes(),N=V.defaultAttributeValues;for(const L in P){const O=P[L];if(O.location>=0){let $=z[L];if($===void 0&&(L==="instanceMatrix"&&D.instanceMatrix&&($=D.instanceMatrix),L==="instanceColor"&&D.instanceColor&&($=D.instanceColor)),$!==void 0){const Z=$.normalized,ie=$.itemSize,Ae=e.get($);if(Ae===void 0)continue;const We=Ae.buffer,te=Ae.type,G=Ae.bytesPerElement,ee=te===t.INT||te===t.UNSIGNED_INT||$.gpuType===Th;if($.isInterleavedBufferAttribute){const re=$.data,Fe=re.stride,Le=$.offset;if(re.isInstancedInterleavedBuffer){for(let Ne=0;Ne<O.locationSize;Ne++)u(O.location+Ne,re.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ne=0;Ne<O.locationSize;Ne++)x(O.location+Ne);t.bindBuffer(t.ARRAY_BUFFER,We);for(let Ne=0;Ne<O.locationSize;Ne++)v(O.location+Ne,ie/O.locationSize,te,Z,Fe*G,(Le+ie/O.locationSize*Ne)*G,ee)}else{if($.isInstancedBufferAttribute){for(let re=0;re<O.locationSize;re++)u(O.location+re,$.meshPerAttribute);D.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let re=0;re<O.locationSize;re++)x(O.location+re);t.bindBuffer(t.ARRAY_BUFFER,We);for(let re=0;re<O.locationSize;re++)v(O.location+re,ie/O.locationSize,te,Z,ie*G,ie/O.locationSize*re*G,ee)}}else if(N!==void 0){const Z=N[L];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(O.location,Z);break;case 3:t.vertexAttrib3fv(O.location,Z);break;case 4:t.vertexAttrib4fv(O.location,Z);break;default:t.vertexAttrib1fv(O.location,Z)}}}}p()}function T(){w();for(const D in i){const V=i[D];for(const W in V){const j=V[W];for(const z in j){const P=j[z];for(const N in P)f(P[N].object),delete P[N];delete j[z]}}delete i[D]}}function A(D){if(i[D.id]===void 0)return;const V=i[D.id];for(const W in V){const j=V[W];for(const z in j){const P=j[z];for(const N in P)f(P[N].object),delete P[N];delete j[z]}}delete i[D.id]}function R(D){for(const V in i){const W=i[V];for(const j in W){const z=W[j];if(z[D.id]===void 0)continue;const P=z[D.id];for(const N in P)f(P[N].object),delete P[N];delete z[D.id]}}}function y(D){for(const V in i){const W=i[V],j=D.isInstancedMesh===!0?D.id:0,z=W[j];if(z!==void 0){for(const P in z){const N=z[P];for(const L in N)f(N[L].object),delete N[L];delete z[P]}delete W[j],Object.keys(W).length===0&&delete i[V]}}}function w(){F(),o=!0,s!==r&&(s=r,c(s.object))}function F(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:w,resetDefaultState:F,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:x,disableUnusedAttributes:p}}function M2(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function a(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let m=0;for(let g=0;g<h;g++)m+=f[g];n.update(m,i,1)}function l(c,f,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<c.length;g++)o(c[g],f[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let g=0;for(let M=0;M<h;M++)g+=f[M]*d[M];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function E2(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Gn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const y=R===Ci&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Cn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ti&&!y)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Ue("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),x=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),_=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),T=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:M,maxCubemapSize:x,maxAttributes:u,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:_,maxSamples:T,samples:A}}function b2(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Mr,a=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||r;return r=d,i=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,M=h.clipIntersection,x=h.clipShadows,u=t.get(h);if(!r||g===null||g.length===0||s&&!x)s?f(null):c();else{const p=s?0:i,v=p*4;let _=u.clippingState||null;l.value=_,_=f(g,d,v,m);for(let T=0;T!==v;++T)_[T]=n[T];u.clippingState=_,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=p}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,m,g){const M=h!==null?h.length:0;let x=null;if(M!==0){if(x=l.value,g!==!0||x===null){const u=m+M*4,p=d.matrixWorldInverse;a.getNormalMatrix(p),(x===null||x.length<u)&&(x=new Float32Array(u));for(let v=0,_=m;v!==M;++v,_+=4)o.copy(h[v]).applyMatrix4(p,a),o.normal.toArray(x,_),x[_+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}const Ki=4,Vm=[.125,.215,.35,.446,.526,.582],wr=20,w2=256,io=new cv,Hm=new Qe;let Tu=null,Au=0,Ru=0,Cu=!1;const T2=new U;class Gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=T2}=s;Tu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=jm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Tu,Au,Ru),this._renderer.xr.enabled=Cu,e.scissorTest=!1,is(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===kr||e.mapping===Ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Tu=this._renderer.getRenderTarget(),Au=this._renderer.getActiveCubeFace(),Ru=this._renderer.getActiveMipmapLevel(),Cu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kt,minFilter:Kt,generateMipmaps:!1,type:Ci,format:Gn,colorSpace:Is,depthBuffer:!1},r=Wm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wm(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=A2(s)),this._blurMaterial=C2(s,e,n),this._ggxMaterial=R2(s,e,n)}return r}_compileMaterial(e){const n=new Mn(new Mt,e);this._renderer.compile(n,io)}_sceneToCubeUV(e,n,i,r,s){const l=new _n(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,m=h.toneMapping;h.getClearColor(Hm),h.toneMapping=si,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mn(new ta,new sr({name:"PMREM.Background",side:fn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,x=M.material;let u=!1;const p=e.background;p?p.isColor&&(x.color.copy(p),e.background=null,u=!0):(x.color.copy(Hm),u=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[v],s.y,s.z)):_===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[v]));const T=this._cubeSize;is(r,_*T,v>2?T:0,T,T),h.setRenderTarget(r),u&&h.render(M,l),h.render(e,l)}h.toneMapping=m,h.autoClear=d,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===kr||e.mapping===Ds;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=jm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;is(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,io)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-f*f),d=0+c*1.25,m=h*d,{_lodMax:g}=this,M=this._sizeLods[i],x=3*M*(i>g-Ki?i-g+Ki:0),u=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=g-n,is(s,x,u,3*M,2*M),r.setRenderTarget(s),r.render(a,io),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,is(e,x,u,3*M,2*M),r.setRenderTarget(e),r.render(a,io)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Je("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=c;const d=c.uniforms,m=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wr-1),M=s/g,x=isFinite(s)?1+Math.floor(f*M):wr;x>wr&&Ue(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${wr}`);const u=[];let p=0;for(let R=0;R<wr;++R){const y=R/M,w=Math.exp(-y*y/2);u.push(w),R===0?p+=w:R<x&&(p+=2*w)}for(let R=0;R<u.length;R++)u[R]=u[R]/p;d.envMap.value=e.texture,d.samples.value=x,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=g,d.mipInt.value=v-i;const _=this._sizeLods[r],T=3*_*(r>v-Ki?r-v+Ki:0),A=4*(this._cubeSize-_);is(n,T,A,3*_,2*_),l.setRenderTarget(n),l.render(h,io)}}function A2(t){const e=[],n=[],i=[];let r=t;const s=t-Ki+1+Vm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Ki?l=Vm[o-t+Ki-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,g=6,M=3,x=2,u=1,p=new Float32Array(M*g*m),v=new Float32Array(x*g*m),_=new Float32Array(u*g*m);for(let A=0;A<m;A++){const R=A%3*2/3-1,y=A>2?0:-1,w=[R,y,0,R+2/3,y,0,R+2/3,y+1,0,R,y,0,R+2/3,y+1,0,R,y+1,0];p.set(w,M*g*A),v.set(d,x*g*A);const F=[A,A,A,A,A,A];_.set(F,u*g*A)}const T=new Mt;T.setAttribute("position",new hn(p,M)),T.setAttribute("uv",new hn(v,x)),T.setAttribute("faceIndex",new hn(_,u)),i.push(new Mn(T,null)),r>Ki&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function Wm(t,e,n){const i=new oi(t,e,n);return i.texture.mapping=gc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function is(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function R2(t,e,n){return new li({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:w2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function C2(t,e,n){const i=new Float32Array(wr),r=new U(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function jm(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vc(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Xm(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function vc(){return`

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
	`}class dv extends oi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new nv(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ta(5,5,5),s=new li({name:"CubemapFromEquirect",uniforms:Us(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:fn,blending:Ei});s.uniforms.tEquirect.value=n;const o=new Mn(r,s),a=n.minFilter;return n.minFilter===Cr&&(n.minFilter=Kt),new F1(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}function P2(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?o(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===qc||m===Kc)if(e.has(d)){const g=e.get(d).texture;return a(g,d.mapping)}else{const g=d.image;if(g&&g.height>0){const M=new dv(g.height);return M.fromEquirectangularTexture(t,d),e.set(d,M),d.addEventListener("dispose",c),a(M.texture,d.mapping)}else return null}}return d}function o(d){if(d&&d.isTexture){const m=d.mapping,g=m===qc||m===Kc,M=m===kr||m===Ds;if(g||M){let x=n.get(d);const u=x!==void 0?x.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return i===null&&(i=new Gm(t)),x=g?i.fromEquirectangular(d,x):i.fromCubemap(d,x),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),x.texture;if(x!==void 0)return x.texture;{const p=d.image;return g&&p&&p.height>0||M&&p&&l(p)?(i===null&&(i=new Gm(t)),x=g?i.fromEquirectangular(d):i.fromCubemap(d),x.texture.pmremVersion=d.pmremVersion,n.set(d,x),d.addEventListener("dispose",f),x.texture):null}}}return d}function a(d,m){return m===qc?d.mapping=kr:m===Kc&&(d.mapping=Ds),d}function l(d){let m=0;const g=6;for(let M=0;M<g;M++)d[M]!==void 0&&m++;return m===g}function c(d){const m=d.target;m.removeEventListener("dispose",c);const g=e.get(m);g!==void 0&&(e.delete(m),g.dispose())}function f(d){const m=d.target;m.removeEventListener("dispose",f);const g=n.get(m);g!==void 0&&(n.delete(m),g.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function L2(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&jl("WebGLRenderer: "+i+" extension not supported."),r}}}function D2(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function c(h){const d=[],m=h.index,g=h.attributes.position;let M=0;if(g===void 0)return;if(m!==null){const p=m.array;M=m.version;for(let v=0,_=p.length;v<_;v+=3){const T=p[v+0],A=p[v+1],R=p[v+2];d.push(T,A,A,R,R,T)}}else{const p=g.array;M=g.version;for(let v=0,_=p.length/3-1;v<_;v+=3){const T=v+0,A=v+1,R=v+2;d.push(T,A,A,R,R,T)}}const x=new(g.count>=65535?ev:Qx)(d,1);x.version=M;const u=s.get(h);u&&e.remove(u),s.set(h,x)}function f(h){const d=s.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function N2(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,m){t.drawElements(i,m,s,d*o),n.update(m,i,1)}function c(d,m,g){g!==0&&(t.drawElementsInstanced(i,m,s,d*o,g),n.update(m,i,g))}function f(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,s,d,0,g);let x=0;for(let u=0;u<g;u++)x+=m[u];n.update(x,i,1)}function h(d,m,g,M){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let u=0;u<d.length;u++)c(d[u]/o,m[u],M[u]);else{x.multiDrawElementsInstancedWEBGL(i,m,0,s,d,0,M,0,g);let u=0;for(let p=0;p<g;p++)u+=m[p]*M[p];n.update(u,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function I2(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:Je("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function U2(t,e,n){const i=new WeakMap,r=new At;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let w=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",w)};d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],p=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),g===!0&&(v=2),M===!0&&(v=3);let _=a.attributes.position.count*v,T=1;_>e.maxTextureSize&&(T=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const A=new Float32Array(_*T*4*h),R=new qx(A,_,T,h);R.type=ti,R.needsUpdate=!0;const y=v*4;for(let F=0;F<h;F++){const D=x[F],V=u[F],W=p[F],j=_*T*4*F;for(let z=0;z<D.count;z++){const P=z*y;m===!0&&(r.fromBufferAttribute(D,z),A[j+P+0]=r.x,A[j+P+1]=r.y,A[j+P+2]=r.z,A[j+P+3]=0),g===!0&&(r.fromBufferAttribute(V,z),A[j+P+4]=r.x,A[j+P+5]=r.y,A[j+P+6]=r.z,A[j+P+7]=0),M===!0&&(r.fromBufferAttribute(W,z),A[j+P+8]=r.x,A[j+P+9]=r.y,A[j+P+10]=r.z,A[j+P+11]=W.itemSize===4?r.w:1)}}d={count:h,texture:R,size:new De(_,T)},i.set(a,d),a.addEventListener("dispose",w)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let M=0;M<c.length;M++)m+=c[M];const g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function F2(t,e,n,i,r){let s=new WeakMap;function o(c){const f=r.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==f&&(e.update(d),s.set(d,f)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==f&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,f))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==f&&(m.update(),s.set(m,f))}return d}function a(){s=new WeakMap}function l(c){const f=c.target;f.removeEventListener("dispose",l),i.releaseStatesOfObject(f),n.remove(f.instanceMatrix),f.instanceColor!==null&&n.remove(f.instanceColor)}return{update:o,dispose:a}}const O2={[Nx]:"LINEAR_TONE_MAPPING",[Ix]:"REINHARD_TONE_MAPPING",[Ux]:"CINEON_TONE_MAPPING",[Fx]:"ACES_FILMIC_TONE_MAPPING",[kx]:"AGX_TONE_MAPPING",[zx]:"NEUTRAL_TONE_MAPPING",[Ox]:"CUSTOM_TONE_MAPPING"};function k2(t,e,n,i,r){const s=new oi(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),o=new oi(e,n,{type:Ci,depthBuffer:!1,stencilBuffer:!1}),a=new Mt;a.setAttribute("position",new xt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new xt([0,2,0,0,2,0],2));const l=new N1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Mn(a,l),f=new cv(-1,1,1,-1,0,1);let h=null,d=null,m=!1,g,M=null,x=[],u=!1;this.setSize=function(p,v){s.setSize(p,v),o.setSize(p,v);for(let _=0;_<x.length;_++){const T=x[_];T.setSize&&T.setSize(p,v)}},this.setEffects=function(p){x=p,u=x.length>0&&x[0].isRenderPass===!0;const v=s.width,_=s.height;for(let T=0;T<x.length;T++){const A=x[T];A.setSize&&A.setSize(v,_)}},this.begin=function(p,v){if(m||p.toneMapping===si&&x.length===0)return!1;if(M=v,v!==null){const _=v.width,T=v.height;(s.width!==_||s.height!==T)&&this.setSize(_,T)}return u===!1&&p.setRenderTarget(s),g=p.toneMapping,p.toneMapping=si,!0},this.hasRenderPass=function(){return u},this.end=function(p,v){p.toneMapping=g,m=!0;let _=s,T=o;for(let A=0;A<x.length;A++){const R=x[A];if(R.enabled!==!1&&(R.render(p,T,_,v),R.needsSwap!==!1)){const y=_;_=T,T=y}}if(h!==p.outputColorSpace||d!==p.toneMapping){h=p.outputColorSpace,d=p.toneMapping,l.defines={},$e.getTransfer(h)===nt&&(l.defines.SRGB_TRANSFER="");const A=O2[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=_.texture,p.setRenderTarget(M),p.render(c,f),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const fv=new tn,Tf=new Xo(1,1),hv=new qx,pv=new KS,mv=new nv,Ym=[],$m=[],qm=new Float32Array(16),Km=new Float32Array(9),Jm=new Float32Array(4);function Hs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Ym[r];if(s===void 0&&(s=new Float32Array(r),Ym[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Nt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function _c(t,e){let n=$m[e];n===void 0&&(n=new Int32Array(e),$m[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function z2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function B2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function V2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Nt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function H2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function G2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;Jm.set(i),t.uniformMatrix2fv(this.addr,!1,Jm),It(n,i)}}function W2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;Km.set(i),t.uniformMatrix3fv(this.addr,!1,Km),It(n,i)}}function j2(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Nt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Nt(n,i))return;qm.set(i),t.uniformMatrix4fv(this.addr,!1,qm),It(n,i)}}function X2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Y2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function $2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function K2(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function J2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Nt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function Z2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Nt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function Q2(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Nt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function eb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Tf.compareFunction=n.isReversedDepthBuffer()?Nh:Dh,s=Tf):s=fv,n.setTexture2D(e||s,r)}function tb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||pv,r)}function nb(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||mv,r)}function ib(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||hv,r)}function rb(t){switch(t){case 5126:return z2;case 35664:return B2;case 35665:return V2;case 35666:return H2;case 35674:return G2;case 35675:return W2;case 35676:return j2;case 5124:case 35670:return X2;case 35667:case 35671:return Y2;case 35668:case 35672:return $2;case 35669:case 35673:return q2;case 5125:return K2;case 36294:return J2;case 36295:return Z2;case 36296:return Q2;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return nb;case 36289:case 36303:case 36311:case 36292:return ib}}function sb(t,e){t.uniform1fv(this.addr,e)}function ob(t,e){const n=Hs(e,this.size,2);t.uniform2fv(this.addr,n)}function ab(t,e){const n=Hs(e,this.size,3);t.uniform3fv(this.addr,n)}function lb(t,e){const n=Hs(e,this.size,4);t.uniform4fv(this.addr,n)}function cb(t,e){const n=Hs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ub(t,e){const n=Hs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function db(t,e){const n=Hs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function fb(t,e){t.uniform1iv(this.addr,e)}function hb(t,e){t.uniform2iv(this.addr,e)}function pb(t,e){t.uniform3iv(this.addr,e)}function mb(t,e){t.uniform4iv(this.addr,e)}function gb(t,e){t.uniform1uiv(this.addr,e)}function xb(t,e){t.uniform2uiv(this.addr,e)}function vb(t,e){t.uniform3uiv(this.addr,e)}function _b(t,e){t.uniform4uiv(this.addr,e)}function yb(t,e,n){const i=this.cache,r=e.length,s=_c(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Tf:o=fv;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function Sb(t,e,n){const i=this.cache,r=e.length,s=_c(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||pv,s[o])}function Mb(t,e,n){const i=this.cache,r=e.length,s=_c(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||mv,s[o])}function Eb(t,e,n){const i=this.cache,r=e.length,s=_c(n,r);Nt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||hv,s[o])}function bb(t){switch(t){case 5126:return sb;case 35664:return ob;case 35665:return ab;case 35666:return lb;case 35674:return cb;case 35675:return ub;case 35676:return db;case 5124:case 35670:return fb;case 35667:case 35671:return hb;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return xb;case 36295:return vb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return Sb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return Eb}}class wb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=rb(n.type)}}class Tb{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=bb(n.type)}}class Ab{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Pu=/(\w+)(\])?(\[|\.)?/g;function Zm(t,e){t.seq.push(e),t.map[e.id]=e}function Rb(t,e,n){const i=t.name,r=i.length;for(Pu.lastIndex=0;;){const s=Pu.exec(i),o=Pu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Zm(n,c===void 0?new wb(a,t,e):new Tb(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new Ab(a),Zm(n,h)),n=h}}}class ml{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);Rb(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Qm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Cb=37297;let Pb=0;function Lb(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const eg=new ze;function Db(t){$e._getMatrix(eg,$e.workingColorSpace,t);const e=`mat3( ${eg.elements.map(n=>n.toFixed(4))} )`;switch($e.getTransfer(t)){case Hl:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return Ue("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function tg(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+Lb(t.getShaderSource(e),a)}else return s}function Nb(t,e){const n=Db(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Ib={[Nx]:"Linear",[Ix]:"Reinhard",[Ux]:"Cineon",[Fx]:"ACESFilmic",[kx]:"AgX",[zx]:"Neutral",[Ox]:"Custom"};function Ub(t,e){const n=Ib[e];return n===void 0?(Ue("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const $a=new U;function Fb(){$e.getLuminanceCoefficients($a);const t=$a.x.toFixed(4),e=$a.y.toFixed(4),n=$a.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ob(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function kb(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function zb(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ho(t){return t!==""}function ng(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ig(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Bb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Af(t){return t.replace(Bb,Hb)}const Vb=new Map;function Hb(t,e){let n=Be[e];if(n===void 0){const i=Vb.get(e);if(i!==void 0)n=Be[i],Ue('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Af(n)}const Gb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rg(t){return t.replace(Gb,Wb)}function Wb(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function sg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}const jb={[ul]:"SHADOWMAP_TYPE_PCF",[uo]:"SHADOWMAP_TYPE_VSM"};function Xb(t){return jb[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Yb={[kr]:"ENVMAP_TYPE_CUBE",[Ds]:"ENVMAP_TYPE_CUBE",[gc]:"ENVMAP_TYPE_CUBE_UV"};function $b(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":Yb[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const qb={[Ds]:"ENVMAP_MODE_REFRACTION"};function Kb(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":qb[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Jb={[Dx]:"ENVMAP_BLENDING_MULTIPLY",[RS]:"ENVMAP_BLENDING_MIX",[CS]:"ENVMAP_BLENDING_ADD"};function Zb(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":Jb[t.combine]||"ENVMAP_BLENDING_NONE"}function Qb(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function ew(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Xb(n),c=$b(n),f=Kb(n),h=Zb(n),d=Qb(n),m=Ob(n),g=kb(s),M=r.createProgram();let x,u,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ho).join(`
`),x.length>0&&(x+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ho).join(`
`),u.length>0&&(u+=`
`)):(x=[sg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),u=[sg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==si?"#define TONE_MAPPING":"",n.toneMapping!==si?Be.tonemapping_pars_fragment:"",n.toneMapping!==si?Ub("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Nb("linearToOutputTexel",n.outputColorSpace),Fb(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ho).join(`
`)),o=Af(o),o=ng(o,n),o=ig(o,n),a=Af(a),a=ng(a,n),a=ig(a,n),o=rg(o),a=rg(a),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,x=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,u=["#define varying in",n.glslVersion===hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=p+x+o,_=p+u+a,T=Qm(r,r.VERTEX_SHADER,v),A=Qm(r,r.FRAGMENT_SHADER,_);r.attachShader(M,T),r.attachShader(M,A),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(D){if(t.debug.checkShaderErrors){const V=r.getProgramInfoLog(M)||"",W=r.getShaderInfoLog(T)||"",j=r.getShaderInfoLog(A)||"",z=V.trim(),P=W.trim(),N=j.trim();let L=!0,O=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(L=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,T,A);else{const $=tg(r,T,"vertex"),Z=tg(r,A,"fragment");Je("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+$+`
`+Z)}else z!==""?Ue("WebGLProgram: Program Info Log:",z):(P===""||N==="")&&(O=!1);O&&(D.diagnostics={runnable:L,programLog:z,vertexShader:{log:P,prefix:x},fragmentShader:{log:N,prefix:u}})}r.deleteShader(T),r.deleteShader(A),y=new ml(r,M),w=zb(r,M)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let w;this.getAttributes=function(){return w===void 0&&R(this),w};let F=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=r.getProgramParameter(M,Cb)),F},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Pb++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=T,this.fragmentShader=A,this}let tw=0;class nw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new iw(e),n.set(e,i)),i}}class iw{constructor(e){this.id=tw++,this.code=e,this.usedTimes=0}}function rw(t,e,n,i,r,s){const o=new Kx,a=new nw,l=new Set,c=[],f=new Map,h=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function M(y,w,F,D,V){const W=D.fog,j=V.geometry,z=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?D.environment:null,P=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,N=e.get(y.envMap||z,P),L=N&&N.mapping===gc?N.image.height:null,O=m[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&Ue("WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));const $=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Z=$!==void 0?$.length:0;let ie=0;j.morphAttributes.position!==void 0&&(ie=1),j.morphAttributes.normal!==void 0&&(ie=2),j.morphAttributes.color!==void 0&&(ie=3);let Ae,We,te,G;if(O){const tt=Qn[O];Ae=tt.vertexShader,We=tt.fragmentShader}else Ae=y.vertexShader,We=y.fragmentShader,a.update(y),te=a.getVertexShaderID(y),G=a.getFragmentShaderID(y);const ee=t.getRenderTarget(),re=t.state.buffers.depth.getReversed(),Fe=V.isInstancedMesh===!0,Le=V.isBatchedMesh===!0,Ne=!!y.map,Et=!!y.matcap,Ye=!!N,Ze=!!y.aoMap,ot=!!y.lightMap,Ve=!!y.bumpMap,bt=!!y.normalMap,I=!!y.displacementMap,Rt=!!y.emissiveMap,et=!!y.metalnessMap,lt=!!y.roughnessMap,we=y.anisotropy>0,C=y.clearcoat>0,E=y.dispersion>0,B=y.iridescence>0,Q=y.sheen>0,ne=y.transmission>0,J=we&&!!y.anisotropyMap,ye=C&&!!y.clearcoatMap,de=C&&!!y.clearcoatNormalMap,Pe=C&&!!y.clearcoatRoughnessMap,Ie=B&&!!y.iridescenceMap,ae=B&&!!y.iridescenceThicknessMap,ce=Q&&!!y.sheenColorMap,Se=Q&&!!y.sheenRoughnessMap,Ee=!!y.specularMap,ge=!!y.specularColorMap,He=!!y.specularIntensityMap,k=ne&&!!y.transmissionMap,fe=ne&&!!y.thicknessMap,ue=!!y.gradientMap,_e=!!y.alphaMap,le=y.alphaTest>0,K=!!y.alphaHash,Me=!!y.extensions;let Oe=si;y.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Oe=t.toneMapping);const ct={shaderID:O,shaderType:y.type,shaderName:y.name,vertexShader:Ae,fragmentShader:We,defines:y.defines,customVertexShaderID:te,customFragmentShaderID:G,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Le,batchingColor:Le&&V._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&V.instanceColor!==null,instancingMorph:Fe&&V.morphTexture!==null,outputColorSpace:ee===null?t.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Is,alphaToCoverage:!!y.alphaToCoverage,map:Ne,matcap:Et,envMap:Ye,envMapMode:Ye&&N.mapping,envMapCubeUVHeight:L,aoMap:Ze,lightMap:ot,bumpMap:Ve,normalMap:bt,displacementMap:I,emissiveMap:Rt,normalMapObjectSpace:bt&&y.normalMapType===NS,normalMapTangentSpace:bt&&y.normalMapType===DS,metalnessMap:et,roughnessMap:lt,anisotropy:we,anisotropyMap:J,clearcoat:C,clearcoatMap:ye,clearcoatNormalMap:de,clearcoatRoughnessMap:Pe,dispersion:E,iridescence:B,iridescenceMap:Ie,iridescenceThicknessMap:ae,sheen:Q,sheenColorMap:ce,sheenRoughnessMap:Se,specularMap:Ee,specularColorMap:ge,specularIntensityMap:He,transmission:ne,transmissionMap:k,thicknessMap:fe,gradientMap:ue,opaque:y.transparent===!1&&y.blending===Ms&&y.alphaToCoverage===!1,alphaMap:_e,alphaTest:le,alphaHash:K,combine:y.combine,mapUv:Ne&&g(y.map.channel),aoMapUv:Ze&&g(y.aoMap.channel),lightMapUv:ot&&g(y.lightMap.channel),bumpMapUv:Ve&&g(y.bumpMap.channel),normalMapUv:bt&&g(y.normalMap.channel),displacementMapUv:I&&g(y.displacementMap.channel),emissiveMapUv:Rt&&g(y.emissiveMap.channel),metalnessMapUv:et&&g(y.metalnessMap.channel),roughnessMapUv:lt&&g(y.roughnessMap.channel),anisotropyMapUv:J&&g(y.anisotropyMap.channel),clearcoatMapUv:ye&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:de&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Se&&g(y.sheenRoughnessMap.channel),specularMapUv:Ee&&g(y.specularMap.channel),specularColorMapUv:ge&&g(y.specularColorMap.channel),specularIntensityMapUv:He&&g(y.specularIntensityMap.channel),transmissionMapUv:k&&g(y.transmissionMap.channel),thicknessMapUv:fe&&g(y.thicknessMap.channel),alphaMapUv:_e&&g(y.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(bt||we),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(Ne||_e),fog:!!W,useFog:y.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||j.attributes.normal===void 0&&bt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:re,skinning:V.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ne&&y.map.isVideoTexture===!0&&$e.getTransfer(y.map.colorSpace)===nt,decodeVideoTextureEmissive:Rt&&y.emissiveMap.isVideoTexture===!0&&$e.getTransfer(y.emissiveMap.colorSpace)===nt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===vi,flipSided:y.side===fn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Me&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Me&&y.extensions.multiDraw===!0||Le)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function x(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)w.push(F),w.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(u(w,y),p(w,y),w.push(t.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function u(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function p(y,w){o.disableAll(),w.instancing&&o.enable(0),w.instancingColor&&o.enable(1),w.instancingMorph&&o.enable(2),w.matcap&&o.enable(3),w.envMap&&o.enable(4),w.normalMapObjectSpace&&o.enable(5),w.normalMapTangentSpace&&o.enable(6),w.clearcoat&&o.enable(7),w.iridescence&&o.enable(8),w.alphaTest&&o.enable(9),w.vertexColors&&o.enable(10),w.vertexAlphas&&o.enable(11),w.vertexUv1s&&o.enable(12),w.vertexUv2s&&o.enable(13),w.vertexUv3s&&o.enable(14),w.vertexTangents&&o.enable(15),w.anisotropy&&o.enable(16),w.alphaHash&&o.enable(17),w.batching&&o.enable(18),w.dispersion&&o.enable(19),w.batchingColor&&o.enable(20),w.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reversedDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.decodeVideoTextureEmissive&&o.enable(20),w.alphaToCoverage&&o.enable(21),y.push(o.mask)}function v(y){const w=m[y.type];let F;if(w){const D=Qn[w];F=P1.clone(D.uniforms)}else F=y.uniforms;return F}function _(y,w){let F=f.get(w);return F!==void 0?++F.usedTimes:(F=new ew(t,w,y,r),c.push(F),f.set(w,F)),F}function T(y){if(--y.usedTimes===0){const w=c.indexOf(y);c[w]=c[c.length-1],c.pop(),f.delete(y.cacheKey),y.destroy()}}function A(y){a.remove(y)}function R(){a.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:v,acquireProgram:_,releaseProgram:T,releaseShaderCache:A,programs:c,dispose:R}}function sw(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function ow(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function og(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function ag(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function a(d,m,g,M,x,u){let p=t[e];return p===void 0?(p={id:d.id,object:d,geometry:m,material:g,materialVariant:o(d),groupOrder:M,renderOrder:d.renderOrder,z:x,group:u},t[e]=p):(p.id=d.id,p.object=d,p.geometry=m,p.material=g,p.materialVariant=o(d),p.groupOrder=M,p.renderOrder=d.renderOrder,p.z=x,p.group=u),e++,p}function l(d,m,g,M,x,u){const p=a(d,m,g,M,x,u);g.transmission>0?i.push(p):g.transparent===!0?r.push(p):n.push(p)}function c(d,m,g,M,x,u){const p=a(d,m,g,M,x,u);g.transmission>0?i.unshift(p):g.transparent===!0?r.unshift(p):n.unshift(p)}function f(d,m){n.length>1&&n.sort(d||ow),i.length>1&&i.sort(m||og),r.length>1&&r.sort(m||og)}function h(){for(let d=e,m=t.length;d<m;d++){const g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:f}}function aw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new ag,t.set(i,[o])):r>=s.length?(o=new ag,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function lw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new Qe};break;case"SpotLight":n={position:new U,direction:new U,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function cw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let uw=0;function dw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function fw(t){const e=new lw,n=cw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new U);const r=new U,s=new gt,o=new gt;function a(c){let f=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let m=0,g=0,M=0,x=0,u=0,p=0,v=0,_=0,T=0,A=0,R=0;c.sort(dw);for(let w=0,F=c.length;w<F;w++){const D=c[w],V=D.color,W=D.intensity,j=D.distance;let z=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===Ns?z=D.shadow.map.texture:z=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)f+=V.r*W,h+=V.g*W,d+=V.b*W;else if(D.isLightProbe){for(let P=0;P<9;P++)i.probe[P].addScaledVector(D.sh.coefficients[P],W);R++}else if(D.isDirectionalLight){const P=e.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const N=D.shadow,L=n.get(D);L.shadowIntensity=N.intensity,L.shadowBias=N.bias,L.shadowNormalBias=N.normalBias,L.shadowRadius=N.radius,L.shadowMapSize=N.mapSize,i.directionalShadow[m]=L,i.directionalShadowMap[m]=z,i.directionalShadowMatrix[m]=D.shadow.matrix,p++}i.directional[m]=P,m++}else if(D.isSpotLight){const P=e.get(D);P.position.setFromMatrixPosition(D.matrixWorld),P.color.copy(V).multiplyScalar(W),P.distance=j,P.coneCos=Math.cos(D.angle),P.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),P.decay=D.decay,i.spot[M]=P;const N=D.shadow;if(D.map&&(i.spotLightMap[T]=D.map,T++,N.updateMatrices(D),D.castShadow&&A++),i.spotLightMatrix[M]=N.matrix,D.castShadow){const L=n.get(D);L.shadowIntensity=N.intensity,L.shadowBias=N.bias,L.shadowNormalBias=N.normalBias,L.shadowRadius=N.radius,L.shadowMapSize=N.mapSize,i.spotShadow[M]=L,i.spotShadowMap[M]=z,_++}M++}else if(D.isRectAreaLight){const P=e.get(D);P.color.copy(V).multiplyScalar(W),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),i.rectArea[x]=P,x++}else if(D.isPointLight){const P=e.get(D);if(P.color.copy(D.color).multiplyScalar(D.intensity),P.distance=D.distance,P.decay=D.decay,D.castShadow){const N=D.shadow,L=n.get(D);L.shadowIntensity=N.intensity,L.shadowBias=N.bias,L.shadowNormalBias=N.normalBias,L.shadowRadius=N.radius,L.shadowMapSize=N.mapSize,L.shadowCameraNear=N.camera.near,L.shadowCameraFar=N.camera.far,i.pointShadow[g]=L,i.pointShadowMap[g]=z,i.pointShadowMatrix[g]=D.shadow.matrix,v++}i.point[g]=P,g++}else if(D.isHemisphereLight){const P=e.get(D);P.skyColor.copy(D.color).multiplyScalar(W),P.groundColor.copy(D.groundColor).multiplyScalar(W),i.hemi[u]=P,u++}}x>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const y=i.hash;(y.directionalLength!==m||y.pointLength!==g||y.spotLength!==M||y.rectAreaLength!==x||y.hemiLength!==u||y.numDirectionalShadows!==p||y.numPointShadows!==v||y.numSpotShadows!==_||y.numSpotMaps!==T||y.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=x,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=p,i.directionalShadowMap.length=p,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=p,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=_+T-A,i.spotLightMap.length=T,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=R,y.directionalLength=m,y.pointLength=g,y.spotLength=M,y.rectAreaLength=x,y.hemiLength=u,y.numDirectionalShadows=p,y.numPointShadows=v,y.numSpotShadows=_,y.numSpotMaps=T,y.numLightProbes=R,i.version=uw++)}function l(c,f){let h=0,d=0,m=0,g=0,M=0;const x=f.matrixWorldInverse;for(let u=0,p=c.length;u<p;u++){const v=c[u];if(v.isDirectionalLight){const _=i.directional[h];_.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(x),h++}else if(v.isSpotLight){const _=i.spot[m];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(x),_.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(x),m++}else if(v.isRectAreaLight){const _=i.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(x),o.identity(),s.copy(v.matrixWorld),s.premultiply(x),o.extractRotation(s),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){const _=i.point[d];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(x),d++}else if(v.isHemisphereLight){const _=i.hemi[M];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(x),M++}}}return{setup:a,setupView:l,state:i}}function lg(t){const e=new fw(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function hw(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new lg(t),e.set(r,[a])):s>=o.length?(a=new lg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const pw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mw=`uniform sampler2D shadow_pass;
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
}`,gw=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],xw=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],cg=new gt,ro=new U,Lu=new U;function vw(t,e,n){let i=new tv;const r=new De,s=new De,o=new At,a=new I1,l=new U1,c={},f=n.maxTextureSize,h={[lr]:fn,[fn]:lr,[vi]:vi},d=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:pw,fragmentShader:mw}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Mt;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Mn(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ul;let u=this.type;this.render=function(A,R,y){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||A.length===0)return;this.type===cS&&(Ue("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ul);const w=t.getRenderTarget(),F=t.getActiveCubeFace(),D=t.getActiveMipmapLevel(),V=t.state;V.setBlending(Ei),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const W=u!==this.type;W&&R.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(z=>z.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,z=A.length;j<z;j++){const P=A[j],N=P.shadow;if(N===void 0){Ue("WebGLShadowMap:",P,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const L=N.getFrameExtents();r.multiply(L),s.copy(N.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/L.x),r.x=s.x*L.x,N.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/L.y),r.y=s.y*L.y,N.mapSize.y=s.y));const O=t.state.buffers.depth.getReversed();if(N.camera._reversedDepth=O,N.map===null||W===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===uo){if(P.isPointLight){Ue("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new oi(r.x,r.y,{format:Ns,type:Ci,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),N.map.texture.name=P.name+".shadowMap",N.map.depthTexture=new Xo(r.x,r.y,ti),N.map.depthTexture.name=P.name+".shadowMapDepth",N.map.depthTexture.format=Pi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Vt,N.map.depthTexture.magFilter=Vt}else P.isPointLight?(N.map=new dv(r.x),N.map.depthTexture=new h1(r.x,ai)):(N.map=new oi(r.x,r.y),N.map.depthTexture=new Xo(r.x,r.y,ai)),N.map.depthTexture.name=P.name+".shadowMap",N.map.depthTexture.format=Pi,this.type===ul?(N.map.depthTexture.compareFunction=O?Nh:Dh,N.map.depthTexture.minFilter=Kt,N.map.depthTexture.magFilter=Kt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=Vt,N.map.depthTexture.magFilter=Vt);N.camera.updateProjectionMatrix()}const $=N.map.isWebGLCubeRenderTarget?6:1;for(let Z=0;Z<$;Z++){if(N.map.isWebGLCubeRenderTarget)t.setRenderTarget(N.map,Z),t.clear();else{Z===0&&(t.setRenderTarget(N.map),t.clear());const ie=N.getViewport(Z);o.set(s.x*ie.x,s.y*ie.y,s.x*ie.z,s.y*ie.w),V.viewport(o)}if(P.isPointLight){const ie=N.camera,Ae=N.matrix,We=P.distance||ie.far;We!==ie.far&&(ie.far=We,ie.updateProjectionMatrix()),ro.setFromMatrixPosition(P.matrixWorld),ie.position.copy(ro),Lu.copy(ie.position),Lu.add(gw[Z]),ie.up.copy(xw[Z]),ie.lookAt(Lu),ie.updateMatrixWorld(),Ae.makeTranslation(-ro.x,-ro.y,-ro.z),cg.multiplyMatrices(ie.projectionMatrix,ie.matrixWorldInverse),N._frustum.setFromProjectionMatrix(cg,ie.coordinateSystem,ie.reversedDepth)}else N.updateMatrices(P);i=N.getFrustum(),_(R,y,N.camera,P,this.type)}N.isPointLightShadow!==!0&&this.type===uo&&p(N,y),N.needsUpdate=!1}u=this.type,x.needsUpdate=!1,t.setRenderTarget(w,F,D)};function p(A,R){const y=e.update(M);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new oi(r.x,r.y,{format:Ns,type:Ci})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(R,null,y,d,M,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(R,null,y,m,M,null)}function v(A,R,y,w){let F=null;const D=y.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)F=D;else if(F=y.isPointLight===!0?l:a,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const V=F.uuid,W=R.uuid;let j=c[V];j===void 0&&(j={},c[V]=j);let z=j[W];z===void 0&&(z=F.clone(),j[W]=z,R.addEventListener("dispose",T)),F=z}if(F.visible=R.visible,F.wireframe=R.wireframe,w===uo?F.side=R.shadowSide!==null?R.shadowSide:R.side:F.side=R.shadowSide!==null?R.shadowSide:h[R.side],F.alphaMap=R.alphaMap,F.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,F.map=R.map,F.clipShadows=R.clipShadows,F.clippingPlanes=R.clippingPlanes,F.clipIntersection=R.clipIntersection,F.displacementMap=R.displacementMap,F.displacementScale=R.displacementScale,F.displacementBias=R.displacementBias,F.wireframeLinewidth=R.wireframeLinewidth,F.linewidth=R.linewidth,y.isPointLight===!0&&F.isMeshDistanceMaterial===!0){const V=t.properties.get(F);V.light=y}return F}function _(A,R,y,w,F){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&F===uo)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,A.matrixWorld);const W=e.update(A),j=A.material;if(Array.isArray(j)){const z=W.groups;for(let P=0,N=z.length;P<N;P++){const L=z[P],O=j[L.materialIndex];if(O&&O.visible){const $=v(A,O,w,F);A.onBeforeShadow(t,A,R,y,W,$,L),t.renderBufferDirect(y,null,W,$,A,L),A.onAfterShadow(t,A,R,y,W,$,L)}}}else if(j.visible){const z=v(A,j,w,F);A.onBeforeShadow(t,A,R,y,W,z,null),t.renderBufferDirect(y,null,W,z,A,null),A.onAfterShadow(t,A,R,y,W,z,null)}}const V=A.children;for(let W=0,j=V.length;W<j;W++)_(V[W],R,y,w,F)}function T(A){A.target.removeEventListener("dispose",T);for(const y in c){const w=c[y],F=A.target.uuid;F in w&&(w[F].dispose(),delete w[F])}}}function _w(t,e){function n(){let k=!1;const fe=new At;let ue=null;const _e=new At(0,0,0,0);return{setMask:function(le){ue!==le&&!k&&(t.colorMask(le,le,le,le),ue=le)},setLocked:function(le){k=le},setClear:function(le,K,Me,Oe,ct){ct===!0&&(le*=Oe,K*=Oe,Me*=Oe),fe.set(le,K,Me,Oe),_e.equals(fe)===!1&&(t.clearColor(le,K,Me,Oe),_e.copy(fe))},reset:function(){k=!1,ue=null,_e.set(-1,0,0,0)}}}function i(){let k=!1,fe=!1,ue=null,_e=null,le=null;return{setReversed:function(K){if(fe!==K){const Me=e.get("EXT_clip_control");K?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),fe=K;const Oe=le;le=null,this.setClear(Oe)}},getReversed:function(){return fe},setTest:function(K){K?ee(t.DEPTH_TEST):re(t.DEPTH_TEST)},setMask:function(K){ue!==K&&!k&&(t.depthMask(K),ue=K)},setFunc:function(K){if(fe&&(K=GS[K]),_e!==K){switch(K){case Id:t.depthFunc(t.NEVER);break;case Ud:t.depthFunc(t.ALWAYS);break;case Fd:t.depthFunc(t.LESS);break;case Ls:t.depthFunc(t.LEQUAL);break;case Od:t.depthFunc(t.EQUAL);break;case kd:t.depthFunc(t.GEQUAL);break;case zd:t.depthFunc(t.GREATER);break;case Bd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=K}},setLocked:function(K){k=K},setClear:function(K){le!==K&&(le=K,fe&&(K=1-K),t.clearDepth(K))},reset:function(){k=!1,ue=null,_e=null,le=null,fe=!1}}}function r(){let k=!1,fe=null,ue=null,_e=null,le=null,K=null,Me=null,Oe=null,ct=null;return{setTest:function(tt){k||(tt?ee(t.STENCIL_TEST):re(t.STENCIL_TEST))},setMask:function(tt){fe!==tt&&!k&&(t.stencilMask(tt),fe=tt)},setFunc:function(tt,ci,ui){(ue!==tt||_e!==ci||le!==ui)&&(t.stencilFunc(tt,ci,ui),ue=tt,_e=ci,le=ui)},setOp:function(tt,ci,ui){(K!==tt||Me!==ci||Oe!==ui)&&(t.stencilOp(tt,ci,ui),K=tt,Me=ci,Oe=ui)},setLocked:function(tt){k=tt},setClear:function(tt){ct!==tt&&(t.clearStencil(tt),ct=tt)},reset:function(){k=!1,fe=null,ue=null,_e=null,le=null,K=null,Me=null,Oe=null,ct=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},h={},d=new WeakMap,m=[],g=null,M=!1,x=null,u=null,p=null,v=null,_=null,T=null,A=null,R=new Qe(0,0,0),y=0,w=!1,F=null,D=null,V=null,W=null,j=null;const z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,N=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(L)[1]),P=N>=1):L.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),P=N>=2);let O=null,$={};const Z=t.getParameter(t.SCISSOR_BOX),ie=t.getParameter(t.VIEWPORT),Ae=new At().fromArray(Z),We=new At().fromArray(ie);function te(k,fe,ue,_e){const le=new Uint8Array(4),K=t.createTexture();t.bindTexture(k,K),t.texParameteri(k,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(k,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Me=0;Me<ue;Me++)k===t.TEXTURE_3D||k===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,le):t.texImage2D(fe+Me,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,le);return K}const G={};G[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),G[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),G[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),G[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ee(t.DEPTH_TEST),o.setFunc(Ls),Ve(!1),bt(am),ee(t.CULL_FACE),Ze(Ei);function ee(k){f[k]!==!0&&(t.enable(k),f[k]=!0)}function re(k){f[k]!==!1&&(t.disable(k),f[k]=!1)}function Fe(k,fe){return h[k]!==fe?(t.bindFramebuffer(k,fe),h[k]=fe,k===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=fe),k===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Le(k,fe){let ue=m,_e=!1;if(k){ue=d.get(fe),ue===void 0&&(ue=[],d.set(fe,ue));const le=k.textures;if(ue.length!==le.length||ue[0]!==t.COLOR_ATTACHMENT0){for(let K=0,Me=le.length;K<Me;K++)ue[K]=t.COLOR_ATTACHMENT0+K;ue.length=le.length,_e=!0}}else ue[0]!==t.BACK&&(ue[0]=t.BACK,_e=!0);_e&&t.drawBuffers(ue)}function Ne(k){return g!==k?(t.useProgram(k),g=k,!0):!1}const Et={[Er]:t.FUNC_ADD,[dS]:t.FUNC_SUBTRACT,[fS]:t.FUNC_REVERSE_SUBTRACT};Et[hS]=t.MIN,Et[pS]=t.MAX;const Ye={[mS]:t.ZERO,[gS]:t.ONE,[xS]:t.SRC_COLOR,[Dd]:t.SRC_ALPHA,[ES]:t.SRC_ALPHA_SATURATE,[SS]:t.DST_COLOR,[_S]:t.DST_ALPHA,[vS]:t.ONE_MINUS_SRC_COLOR,[Nd]:t.ONE_MINUS_SRC_ALPHA,[MS]:t.ONE_MINUS_DST_COLOR,[yS]:t.ONE_MINUS_DST_ALPHA,[bS]:t.CONSTANT_COLOR,[wS]:t.ONE_MINUS_CONSTANT_COLOR,[TS]:t.CONSTANT_ALPHA,[AS]:t.ONE_MINUS_CONSTANT_ALPHA};function Ze(k,fe,ue,_e,le,K,Me,Oe,ct,tt){if(k===Ei){M===!0&&(re(t.BLEND),M=!1);return}if(M===!1&&(ee(t.BLEND),M=!0),k!==uS){if(k!==x||tt!==w){if((u!==Er||_!==Er)&&(t.blendEquation(t.FUNC_ADD),u=Er,_=Er),tt)switch(k){case Ms:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lm:t.blendFunc(t.ONE,t.ONE);break;case cm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case um:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Je("WebGLState: Invalid blending: ",k);break}else switch(k){case Ms:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case lm:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case cm:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case um:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",k);break}p=null,v=null,T=null,A=null,R.set(0,0,0),y=0,x=k,w=tt}return}le=le||fe,K=K||ue,Me=Me||_e,(fe!==u||le!==_)&&(t.blendEquationSeparate(Et[fe],Et[le]),u=fe,_=le),(ue!==p||_e!==v||K!==T||Me!==A)&&(t.blendFuncSeparate(Ye[ue],Ye[_e],Ye[K],Ye[Me]),p=ue,v=_e,T=K,A=Me),(Oe.equals(R)===!1||ct!==y)&&(t.blendColor(Oe.r,Oe.g,Oe.b,ct),R.copy(Oe),y=ct),x=k,w=!1}function ot(k,fe){k.side===vi?re(t.CULL_FACE):ee(t.CULL_FACE);let ue=k.side===fn;fe&&(ue=!ue),Ve(ue),k.blending===Ms&&k.transparent===!1?Ze(Ei):Ze(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);const _e=k.stencilWrite;a.setTest(_e),_e&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Rt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ee(t.SAMPLE_ALPHA_TO_COVERAGE):re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(k){F!==k&&(k?t.frontFace(t.CW):t.frontFace(t.CCW),F=k)}function bt(k){k!==aS?(ee(t.CULL_FACE),k!==D&&(k===am?t.cullFace(t.BACK):k===lS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):re(t.CULL_FACE),D=k}function I(k){k!==V&&(P&&t.lineWidth(k),V=k)}function Rt(k,fe,ue){k?(ee(t.POLYGON_OFFSET_FILL),(W!==fe||j!==ue)&&(W=fe,j=ue,o.getReversed()&&(fe=-fe),t.polygonOffset(fe,ue))):re(t.POLYGON_OFFSET_FILL)}function et(k){k?ee(t.SCISSOR_TEST):re(t.SCISSOR_TEST)}function lt(k){k===void 0&&(k=t.TEXTURE0+z-1),O!==k&&(t.activeTexture(k),O=k)}function we(k,fe,ue){ue===void 0&&(O===null?ue=t.TEXTURE0+z-1:ue=O);let _e=$[ue];_e===void 0&&(_e={type:void 0,texture:void 0},$[ue]=_e),(_e.type!==k||_e.texture!==fe)&&(O!==ue&&(t.activeTexture(ue),O=ue),t.bindTexture(k,fe||G[k]),_e.type=k,_e.texture=fe)}function C(){const k=$[O];k!==void 0&&k.type!==void 0&&(t.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{t.compressedTexImage2D(...arguments)}catch(k){Je("WebGLState:",k)}}function B(){try{t.compressedTexImage3D(...arguments)}catch(k){Je("WebGLState:",k)}}function Q(){try{t.texSubImage2D(...arguments)}catch(k){Je("WebGLState:",k)}}function ne(){try{t.texSubImage3D(...arguments)}catch(k){Je("WebGLState:",k)}}function J(){try{t.compressedTexSubImage2D(...arguments)}catch(k){Je("WebGLState:",k)}}function ye(){try{t.compressedTexSubImage3D(...arguments)}catch(k){Je("WebGLState:",k)}}function de(){try{t.texStorage2D(...arguments)}catch(k){Je("WebGLState:",k)}}function Pe(){try{t.texStorage3D(...arguments)}catch(k){Je("WebGLState:",k)}}function Ie(){try{t.texImage2D(...arguments)}catch(k){Je("WebGLState:",k)}}function ae(){try{t.texImage3D(...arguments)}catch(k){Je("WebGLState:",k)}}function ce(k){Ae.equals(k)===!1&&(t.scissor(k.x,k.y,k.z,k.w),Ae.copy(k))}function Se(k){We.equals(k)===!1&&(t.viewport(k.x,k.y,k.z,k.w),We.copy(k))}function Ee(k,fe){let ue=c.get(fe);ue===void 0&&(ue=new WeakMap,c.set(fe,ue));let _e=ue.get(k);_e===void 0&&(_e=t.getUniformBlockIndex(fe,k.name),ue.set(k,_e))}function ge(k,fe){const _e=c.get(fe).get(k);l.get(fe)!==_e&&(t.uniformBlockBinding(fe,_e,k.__bindingPointIndex),l.set(fe,_e))}function He(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},O=null,$={},h={},d=new WeakMap,m=[],g=null,M=!1,x=null,u=null,p=null,v=null,_=null,T=null,A=null,R=new Qe(0,0,0),y=0,w=!1,F=null,D=null,V=null,W=null,j=null,Ae.set(0,0,t.canvas.width,t.canvas.height),We.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ee,disable:re,bindFramebuffer:Fe,drawBuffers:Le,useProgram:Ne,setBlending:Ze,setMaterial:ot,setFlipSided:Ve,setCullFace:bt,setLineWidth:I,setPolygonOffset:Rt,setScissorTest:et,activeTexture:lt,bindTexture:we,unbindTexture:C,compressedTexImage2D:E,compressedTexImage3D:B,texImage2D:Ie,texImage3D:ae,updateUBOMapping:Ee,uniformBlockBinding:ge,texStorage2D:de,texStorage3D:Pe,texSubImage2D:Q,texSubImage3D:ne,compressedTexSubImage2D:J,compressedTexSubImage3D:ye,scissor:ce,viewport:Se,reset:He}}function yw(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,f=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,E){return m?new OffscreenCanvas(C,E):Wl("canvas")}function M(C,E,B){let Q=1;const ne=we(C);if((ne.width>B||ne.height>B)&&(Q=B/Math.max(ne.width,ne.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const J=Math.floor(Q*ne.width),ye=Math.floor(Q*ne.height);h===void 0&&(h=g(J,ye));const de=E?g(J,ye):h;return de.width=J,de.height=ye,de.getContext("2d").drawImage(C,0,0,J,ye),Ue("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+J+"x"+ye+")."),de}else return"data"in C&&Ue("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),C;return C}function x(C){return C.generateMipmaps}function u(C){t.generateMipmap(C)}function p(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(C,E,B,Q,ne=!1){if(C!==null){if(t[C]!==void 0)return t[C];Ue("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let J=E;if(E===t.RED&&(B===t.FLOAT&&(J=t.R32F),B===t.HALF_FLOAT&&(J=t.R16F),B===t.UNSIGNED_BYTE&&(J=t.R8)),E===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.R8UI),B===t.UNSIGNED_SHORT&&(J=t.R16UI),B===t.UNSIGNED_INT&&(J=t.R32UI),B===t.BYTE&&(J=t.R8I),B===t.SHORT&&(J=t.R16I),B===t.INT&&(J=t.R32I)),E===t.RG&&(B===t.FLOAT&&(J=t.RG32F),B===t.HALF_FLOAT&&(J=t.RG16F),B===t.UNSIGNED_BYTE&&(J=t.RG8)),E===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.RG8UI),B===t.UNSIGNED_SHORT&&(J=t.RG16UI),B===t.UNSIGNED_INT&&(J=t.RG32UI),B===t.BYTE&&(J=t.RG8I),B===t.SHORT&&(J=t.RG16I),B===t.INT&&(J=t.RG32I)),E===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.RGB8UI),B===t.UNSIGNED_SHORT&&(J=t.RGB16UI),B===t.UNSIGNED_INT&&(J=t.RGB32UI),B===t.BYTE&&(J=t.RGB8I),B===t.SHORT&&(J=t.RGB16I),B===t.INT&&(J=t.RGB32I)),E===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&(J=t.RGBA8UI),B===t.UNSIGNED_SHORT&&(J=t.RGBA16UI),B===t.UNSIGNED_INT&&(J=t.RGBA32UI),B===t.BYTE&&(J=t.RGBA8I),B===t.SHORT&&(J=t.RGBA16I),B===t.INT&&(J=t.RGBA32I)),E===t.RGB&&(B===t.UNSIGNED_INT_5_9_9_9_REV&&(J=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&(J=t.R11F_G11F_B10F)),E===t.RGBA){const ye=ne?Hl:$e.getTransfer(Q);B===t.FLOAT&&(J=t.RGBA32F),B===t.HALF_FLOAT&&(J=t.RGBA16F),B===t.UNSIGNED_BYTE&&(J=ye===nt?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT_4_4_4_4&&(J=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&(J=t.RGB5_A1)}return(J===t.R16F||J===t.R32F||J===t.RG16F||J===t.RG32F||J===t.RGBA16F||J===t.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function _(C,E){let B;return C?E===null||E===ai||E===Wo?B=t.DEPTH24_STENCIL8:E===ti?B=t.DEPTH32F_STENCIL8:E===Go&&(B=t.DEPTH24_STENCIL8,Ue("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ai||E===Wo?B=t.DEPTH_COMPONENT24:E===ti?B=t.DEPTH_COMPONENT32F:E===Go&&(B=t.DEPTH_COMPONENT16),B}function T(C,E){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==Vt&&C.minFilter!==Kt?Math.log2(Math.max(E.width,E.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?E.mipmaps.length:1}function A(C){const E=C.target;E.removeEventListener("dispose",A),y(E),E.isVideoTexture&&f.delete(E)}function R(C){const E=C.target;E.removeEventListener("dispose",R),F(E)}function y(C){const E=i.get(C);if(E.__webglInit===void 0)return;const B=C.source,Q=d.get(B);if(Q){const ne=Q[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&w(C),Object.keys(Q).length===0&&d.delete(B)}i.remove(C)}function w(C){const E=i.get(C);t.deleteTexture(E.__webglTexture);const B=C.source,Q=d.get(B);delete Q[E.__cacheKey],o.memory.textures--}function F(C){const E=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let ne=0;ne<E.__webglFramebuffer[Q].length;ne++)t.deleteFramebuffer(E.__webglFramebuffer[Q][ne]);else t.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)t.deleteFramebuffer(E.__webglFramebuffer[Q]);else t.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&t.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&t.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&t.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const B=C.textures;for(let Q=0,ne=B.length;Q<ne;Q++){const J=i.get(B[Q]);J.__webglTexture&&(t.deleteTexture(J.__webglTexture),o.memory.textures--),i.remove(B[Q])}i.remove(C)}let D=0;function V(){D=0}function W(){const C=D;return C>=r.maxTextures&&Ue("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),D+=1,C}function j(C){const E=[];return E.push(C.wrapS),E.push(C.wrapT),E.push(C.wrapR||0),E.push(C.magFilter),E.push(C.minFilter),E.push(C.anisotropy),E.push(C.internalFormat),E.push(C.format),E.push(C.type),E.push(C.generateMipmaps),E.push(C.premultiplyAlpha),E.push(C.flipY),E.push(C.unpackAlignment),E.push(C.colorSpace),E.join()}function z(C,E){const B=i.get(C);if(C.isVideoTexture&&et(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&B.__version!==C.version){const Q=C.image;if(Q===null)Ue("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Ue("WebGLRenderer: Texture marked for update but image is incomplete");else{G(B,C,E);return}}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+E)}function P(C,E){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){G(B,C,E);return}else C.isExternalTexture&&(B.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+E)}function N(C,E){const B=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){G(B,C,E);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+E)}function L(C,E){const B=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&B.__version!==C.version){ee(B,C,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+E)}const O={[Vd]:t.REPEAT,[Si]:t.CLAMP_TO_EDGE,[Hd]:t.MIRRORED_REPEAT},$={[Vt]:t.NEAREST,[PS]:t.NEAREST_MIPMAP_NEAREST,[Ma]:t.NEAREST_MIPMAP_LINEAR,[Kt]:t.LINEAR,[Jc]:t.LINEAR_MIPMAP_NEAREST,[Cr]:t.LINEAR_MIPMAP_LINEAR},Z={[IS]:t.NEVER,[zS]:t.ALWAYS,[US]:t.LESS,[Dh]:t.LEQUAL,[FS]:t.EQUAL,[Nh]:t.GEQUAL,[OS]:t.GREATER,[kS]:t.NOTEQUAL};function ie(C,E){if(E.type===ti&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Kt||E.magFilter===Jc||E.magFilter===Ma||E.magFilter===Cr||E.minFilter===Kt||E.minFilter===Jc||E.minFilter===Ma||E.minFilter===Cr)&&Ue("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,O[E.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,O[E.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,O[E.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,$[E.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,$[E.minFilter]),E.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,Z[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Vt||E.minFilter!==Ma&&E.minFilter!==Cr||E.type===ti&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function Ae(C,E){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,E.addEventListener("dispose",A));const Q=E.source;let ne=d.get(Q);ne===void 0&&(ne={},d.set(Q,ne));const J=j(E);if(J!==C.__cacheKey){ne[J]===void 0&&(ne[J]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,B=!0),ne[J].usedTimes++;const ye=ne[C.__cacheKey];ye!==void 0&&(ne[C.__cacheKey].usedTimes--,ye.usedTimes===0&&w(E)),C.__cacheKey=J,C.__webglTexture=ne[J].texture}return B}function We(C,E,B){return Math.floor(Math.floor(C/B)/E)}function te(C,E,B,Q){const J=C.updateRanges;if(J.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,E.width,E.height,B,Q,E.data);else{J.sort((ae,ce)=>ae.start-ce.start);let ye=0;for(let ae=1;ae<J.length;ae++){const ce=J[ye],Se=J[ae],Ee=ce.start+ce.count,ge=We(Se.start,E.width,4),He=We(ce.start,E.width,4);Se.start<=Ee+1&&ge===He&&We(Se.start+Se.count-1,E.width,4)===ge?ce.count=Math.max(ce.count,Se.start+Se.count-ce.start):(++ye,J[ye]=Se)}J.length=ye+1;const de=t.getParameter(t.UNPACK_ROW_LENGTH),Pe=t.getParameter(t.UNPACK_SKIP_PIXELS),Ie=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,E.width);for(let ae=0,ce=J.length;ae<ce;ae++){const Se=J[ae],Ee=Math.floor(Se.start/4),ge=Math.ceil(Se.count/4),He=Ee%E.width,k=Math.floor(Ee/E.width),fe=ge,ue=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,He),t.pixelStorei(t.UNPACK_SKIP_ROWS,k),n.texSubImage2D(t.TEXTURE_2D,0,He,k,fe,ue,B,Q,E.data)}C.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,de),t.pixelStorei(t.UNPACK_SKIP_PIXELS,Pe),t.pixelStorei(t.UNPACK_SKIP_ROWS,Ie)}}function G(C,E,B){let Q=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=t.TEXTURE_3D);const ne=Ae(C,E),J=E.source;n.bindTexture(Q,C.__webglTexture,t.TEXTURE0+B);const ye=i.get(J);if(J.version!==ye.__version||ne===!0){n.activeTexture(t.TEXTURE0+B);const de=$e.getPrimaries($e.workingColorSpace),Pe=E.colorSpace===Yi?null:$e.getPrimaries(E.colorSpace),Ie=E.colorSpace===Yi||de===Pe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let ae=M(E.image,!1,r.maxTextureSize);ae=lt(E,ae);const ce=s.convert(E.format,E.colorSpace),Se=s.convert(E.type);let Ee=v(E.internalFormat,ce,Se,E.colorSpace,E.isVideoTexture);ie(Q,E);let ge;const He=E.mipmaps,k=E.isVideoTexture!==!0,fe=ye.__version===void 0||ne===!0,ue=J.dataReady,_e=T(E,ae);if(E.isDepthTexture)Ee=_(E.format===Pr,E.type),fe&&(k?n.texStorage2D(t.TEXTURE_2D,1,Ee,ae.width,ae.height):n.texImage2D(t.TEXTURE_2D,0,Ee,ae.width,ae.height,0,ce,Se,null));else if(E.isDataTexture)if(He.length>0){k&&fe&&n.texStorage2D(t.TEXTURE_2D,_e,Ee,He[0].width,He[0].height);for(let le=0,K=He.length;le<K;le++)ge=He[le],k?ue&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,ge.width,ge.height,ce,Se,ge.data):n.texImage2D(t.TEXTURE_2D,le,Ee,ge.width,ge.height,0,ce,Se,ge.data);E.generateMipmaps=!1}else k?(fe&&n.texStorage2D(t.TEXTURE_2D,_e,Ee,ae.width,ae.height),ue&&te(E,ae,ce,Se)):n.texImage2D(t.TEXTURE_2D,0,Ee,ae.width,ae.height,0,ce,Se,ae.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,Ee,He[0].width,He[0].height,ae.depth);for(let le=0,K=He.length;le<K;le++)if(ge=He[le],E.format!==Gn)if(ce!==null)if(k){if(ue)if(E.layerUpdates.size>0){const Me=Bm(ge.width,ge.height,E.format,E.type);for(const Oe of E.layerUpdates){const ct=ge.data.subarray(Oe*Me/ge.data.BYTES_PER_ELEMENT,(Oe+1)*Me/ge.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,Oe,ge.width,ge.height,1,ce,ct)}E.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,ge.width,ge.height,ae.depth,ce,ge.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,le,Ee,ge.width,ge.height,ae.depth,0,ge.data,0,0);else Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?ue&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,le,0,0,0,ge.width,ge.height,ae.depth,ce,Se,ge.data):n.texImage3D(t.TEXTURE_2D_ARRAY,le,Ee,ge.width,ge.height,ae.depth,0,ce,Se,ge.data)}else{k&&fe&&n.texStorage2D(t.TEXTURE_2D,_e,Ee,He[0].width,He[0].height);for(let le=0,K=He.length;le<K;le++)ge=He[le],E.format!==Gn?ce!==null?k?ue&&n.compressedTexSubImage2D(t.TEXTURE_2D,le,0,0,ge.width,ge.height,ce,ge.data):n.compressedTexImage2D(t.TEXTURE_2D,le,Ee,ge.width,ge.height,0,ge.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?ue&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,ge.width,ge.height,ce,Se,ge.data):n.texImage2D(t.TEXTURE_2D,le,Ee,ge.width,ge.height,0,ce,Se,ge.data)}else if(E.isDataArrayTexture)if(k){if(fe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,_e,Ee,ae.width,ae.height,ae.depth),ue)if(E.layerUpdates.size>0){const le=Bm(ae.width,ae.height,E.format,E.type);for(const K of E.layerUpdates){const Me=ae.data.subarray(K*le/ae.data.BYTES_PER_ELEMENT,(K+1)*le/ae.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,K,ae.width,ae.height,1,ce,Se,Me)}E.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,ce,Se,ae.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Ee,ae.width,ae.height,ae.depth,0,ce,Se,ae.data);else if(E.isData3DTexture)k?(fe&&n.texStorage3D(t.TEXTURE_3D,_e,Ee,ae.width,ae.height,ae.depth),ue&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,ce,Se,ae.data)):n.texImage3D(t.TEXTURE_3D,0,Ee,ae.width,ae.height,ae.depth,0,ce,Se,ae.data);else if(E.isFramebufferTexture){if(fe)if(k)n.texStorage2D(t.TEXTURE_2D,_e,Ee,ae.width,ae.height);else{let le=ae.width,K=ae.height;for(let Me=0;Me<_e;Me++)n.texImage2D(t.TEXTURE_2D,Me,Ee,le,K,0,ce,Se,null),le>>=1,K>>=1}}else if(He.length>0){if(k&&fe){const le=we(He[0]);n.texStorage2D(t.TEXTURE_2D,_e,Ee,le.width,le.height)}for(let le=0,K=He.length;le<K;le++)ge=He[le],k?ue&&n.texSubImage2D(t.TEXTURE_2D,le,0,0,ce,Se,ge):n.texImage2D(t.TEXTURE_2D,le,Ee,ce,Se,ge);E.generateMipmaps=!1}else if(k){if(fe){const le=we(ae);n.texStorage2D(t.TEXTURE_2D,_e,Ee,le.width,le.height)}ue&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,Se,ae)}else n.texImage2D(t.TEXTURE_2D,0,Ee,ce,Se,ae);x(E)&&u(Q),ye.__version=J.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function ee(C,E,B){if(E.image.length!==6)return;const Q=Ae(C,E),ne=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+B);const J=i.get(ne);if(ne.version!==J.__version||Q===!0){n.activeTexture(t.TEXTURE0+B);const ye=$e.getPrimaries($e.workingColorSpace),de=E.colorSpace===Yi?null:$e.getPrimaries(E.colorSpace),Pe=E.colorSpace===Yi||ye===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Ie=E.isCompressedTexture||E.image[0].isCompressedTexture,ae=E.image[0]&&E.image[0].isDataTexture,ce=[];for(let K=0;K<6;K++)!Ie&&!ae?ce[K]=M(E.image[K],!0,r.maxCubemapSize):ce[K]=ae?E.image[K].image:E.image[K],ce[K]=lt(E,ce[K]);const Se=ce[0],Ee=s.convert(E.format,E.colorSpace),ge=s.convert(E.type),He=v(E.internalFormat,Ee,ge,E.colorSpace),k=E.isVideoTexture!==!0,fe=J.__version===void 0||Q===!0,ue=ne.dataReady;let _e=T(E,Se);ie(t.TEXTURE_CUBE_MAP,E);let le;if(Ie){k&&fe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,He,Se.width,Se.height);for(let K=0;K<6;K++){le=ce[K].mipmaps;for(let Me=0;Me<le.length;Me++){const Oe=le[Me];E.format!==Gn?Ee!==null?k?ue&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,0,0,Oe.width,Oe.height,Ee,Oe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,He,Oe.width,Oe.height,0,Oe.data):Ue("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,0,0,Oe.width,Oe.height,Ee,ge,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me,He,Oe.width,Oe.height,0,Ee,ge,Oe.data)}}}else{if(le=E.mipmaps,k&&fe){le.length>0&&_e++;const K=we(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,He,K.width,K.height)}for(let K=0;K<6;K++)if(ae){k?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ce[K].width,ce[K].height,Ee,ge,ce[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,He,ce[K].width,ce[K].height,0,Ee,ge,ce[K].data);for(let Me=0;Me<le.length;Me++){const ct=le[Me].image[K].image;k?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,0,0,ct.width,ct.height,Ee,ge,ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,He,ct.width,ct.height,0,Ee,ge,ct.data)}}else{k?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Ee,ge,ce[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,He,Ee,ge,ce[K]);for(let Me=0;Me<le.length;Me++){const Oe=le[Me];k?ue&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,0,0,Ee,ge,Oe.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,Me+1,He,Ee,ge,Oe.image[K])}}}x(E)&&u(t.TEXTURE_CUBE_MAP),J.__version=ne.version,E.onUpdate&&E.onUpdate(E)}C.__version=E.version}function re(C,E,B,Q,ne,J){const ye=s.convert(B.format,B.colorSpace),de=s.convert(B.type),Pe=v(B.internalFormat,ye,de,B.colorSpace),Ie=i.get(E),ae=i.get(B);if(ae.__renderTarget=E,!Ie.__hasExternalTextures){const ce=Math.max(1,E.width>>J),Se=Math.max(1,E.height>>J);ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,J,Pe,ce,Se,E.depth,0,ye,de,null):n.texImage2D(ne,J,Pe,ce,Se,0,ye,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Rt(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ne,ae.__webglTexture,0,I(E)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ne,ae.__webglTexture,J),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(C,E,B){if(t.bindRenderbuffer(t.RENDERBUFFER,C),E.depthBuffer){const Q=E.depthTexture,ne=Q&&Q.isDepthTexture?Q.type:null,J=_(E.stencilBuffer,ne),ye=E.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;Rt(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,I(E),J,E.width,E.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,I(E),J,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,J,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ye,t.RENDERBUFFER,C)}else{const Q=E.textures;for(let ne=0;ne<Q.length;ne++){const J=Q[ne],ye=s.convert(J.format,J.colorSpace),de=s.convert(J.type),Pe=v(J.internalFormat,ye,de,J.colorSpace);Rt(E)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,I(E),Pe,E.width,E.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,I(E),Pe,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,Pe,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Le(C,E,B){const Q=E.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=i.get(E.depthTexture);if(ne.__renderTarget=E,(!ne.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,E.depthTexture.addEventListener("dispose",A)),ne.__webglTexture===void 0){ne.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),ie(t.TEXTURE_CUBE_MAP,E.depthTexture);const Ie=s.convert(E.depthTexture.format),ae=s.convert(E.depthTexture.type);let ce;E.depthTexture.format===Pi?ce=t.DEPTH_COMPONENT24:E.depthTexture.format===Pr&&(ce=t.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ce,E.width,E.height,0,Ie,ae,null)}}else z(E.depthTexture,0);const J=ne.__webglTexture,ye=I(E),de=Q?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,Pe=E.depthTexture.format===Pr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(E.depthTexture.format===Pi)Rt(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Pe,de,J,0,ye):t.framebufferTexture2D(t.FRAMEBUFFER,Pe,de,J,0);else if(E.depthTexture.format===Pr)Rt(E)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Pe,de,J,0,ye):t.framebufferTexture2D(t.FRAMEBUFFER,Pe,de,J,0);else throw new Error("Unknown depthTexture format")}function Ne(C){const E=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",ne)};Q.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=Q}if(C.depthTexture&&!E.__autoAllocateDepthBuffer)if(B)for(let Q=0;Q<6;Q++)Le(E.__webglFramebuffer[Q],C,Q);else{const Q=C.texture.mipmaps;Q&&Q.length>0?Le(E.__webglFramebuffer[0],C,0):Le(E.__webglFramebuffer,C,0)}else if(B){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=t.createRenderbuffer(),Fe(E.__webglDepthbuffer[Q],C,!1);else{const ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,J)}}else{const Q=C.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=t.createRenderbuffer(),Fe(E.__webglDepthbuffer,C,!1);else{const ne=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=E.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,ne,t.RENDERBUFFER,J)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Et(C,E,B){const Q=i.get(C);E!==void 0&&re(Q.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&Ne(C)}function Ye(C){const E=C.texture,B=i.get(C),Q=i.get(E);C.addEventListener("dispose",R);const ne=C.textures,J=C.isWebGLCubeRenderTarget===!0,ye=ne.length>1;if(ye||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=E.version,o.memory.textures++),J){B.__webglFramebuffer=[];for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer[de]=[];for(let Pe=0;Pe<E.mipmaps.length;Pe++)B.__webglFramebuffer[de][Pe]=t.createFramebuffer()}else B.__webglFramebuffer[de]=t.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){B.__webglFramebuffer=[];for(let de=0;de<E.mipmaps.length;de++)B.__webglFramebuffer[de]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ye)for(let de=0,Pe=ne.length;de<Pe;de++){const Ie=i.get(ne[de]);Ie.__webglTexture===void 0&&(Ie.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Rt(C)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let de=0;de<ne.length;de++){const Pe=ne[de];B.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[de]);const Ie=s.convert(Pe.format,Pe.colorSpace),ae=s.convert(Pe.type),ce=v(Pe.internalFormat,Ie,ae,Pe.colorSpace,C.isXRRenderTarget===!0),Se=I(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Se,ce,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,B.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Fe(B.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(J){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),ie(t.TEXTURE_CUBE_MAP,E);for(let de=0;de<6;de++)if(E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)re(B.__webglFramebuffer[de][Pe],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,Pe);else re(B.__webglFramebuffer[de],C,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);x(E)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ye){for(let de=0,Pe=ne.length;de<Pe;de++){const Ie=ne[de],ae=i.get(Ie);let ce=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,ae.__webglTexture),ie(ce,Ie),re(B.__webglFramebuffer,C,Ie,t.COLOR_ATTACHMENT0+de,ce,0),x(Ie)&&u(ce)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,Q.__webglTexture),ie(de,E),E.mipmaps&&E.mipmaps.length>0)for(let Pe=0;Pe<E.mipmaps.length;Pe++)re(B.__webglFramebuffer[Pe],C,E,t.COLOR_ATTACHMENT0,de,Pe);else re(B.__webglFramebuffer,C,E,t.COLOR_ATTACHMENT0,de,0);x(E)&&u(de),n.unbindTexture()}C.depthBuffer&&Ne(C)}function Ze(C){const E=C.textures;for(let B=0,Q=E.length;B<Q;B++){const ne=E[B];if(x(ne)){const J=p(C),ye=i.get(ne).__webglTexture;n.bindTexture(J,ye),u(J),n.unbindTexture()}}}const ot=[],Ve=[];function bt(C){if(C.samples>0){if(Rt(C)===!1){const E=C.textures,B=C.width,Q=C.height;let ne=t.COLOR_BUFFER_BIT;const J=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ye=i.get(C),de=E.length>1;if(de)for(let Ie=0;Ie<E.length;Ie++)n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);const Pe=C.texture.mipmaps;Pe&&Pe.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Ie=0;Ie<E.length;Ie++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ye.__webglColorRenderbuffer[Ie]);const ae=i.get(E[Ie]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ae,0)}t.blitFramebuffer(0,0,B,Q,0,0,B,Q,ne,t.NEAREST),l===!0&&(ot.length=0,Ve.length=0,ot.push(t.COLOR_ATTACHMENT0+Ie),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ot.push(J),Ve.push(J),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ve)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ot))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let Ie=0;Ie<E.length;Ie++){n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.RENDERBUFFER,ye.__webglColorRenderbuffer[Ie]);const ae=i.get(E[Ie]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ye.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ie,t.TEXTURE_2D,ae,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const E=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[E])}}}function I(C){return Math.min(r.maxSamples,C.samples)}function Rt(C){const E=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function et(C){const E=o.render.frame;f.get(C)!==E&&(f.set(C,E),C.update())}function lt(C,E){const B=C.colorSpace,Q=C.format,ne=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||B!==Is&&B!==Yi&&($e.getTransfer(B)===nt?(Q!==Gn||ne!==Cn)&&Ue("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",B)),E}function we(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=V,this.setTexture2D=z,this.setTexture2DArray=P,this.setTexture3D=N,this.setTextureCube=L,this.rebindTextures=Et,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=re,this.useMultisampledRTT=Rt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function Sw(t,e){function n(i,r=Yi){let s;const o=$e.getTransfer(r);if(i===Cn)return t.UNSIGNED_BYTE;if(i===Ah)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Rh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Gx)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Wx)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Vx)return t.BYTE;if(i===Hx)return t.SHORT;if(i===Go)return t.UNSIGNED_SHORT;if(i===Th)return t.INT;if(i===ai)return t.UNSIGNED_INT;if(i===ti)return t.FLOAT;if(i===Ci)return t.HALF_FLOAT;if(i===jx)return t.ALPHA;if(i===Xx)return t.RGB;if(i===Gn)return t.RGBA;if(i===Pi)return t.DEPTH_COMPONENT;if(i===Pr)return t.DEPTH_STENCIL;if(i===Yx)return t.RED;if(i===Ch)return t.RED_INTEGER;if(i===Ns)return t.RG;if(i===Ph)return t.RG_INTEGER;if(i===Lh)return t.RGBA_INTEGER;if(i===dl||i===fl||i===hl||i===pl)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===dl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===hl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===pl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===dl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===fl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===hl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===pl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Gd||i===Wd||i===jd||i===Xd)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Gd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Wd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===jd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xd)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Yd||i===$d||i===qd||i===Kd||i===Jd||i===Zd||i===Qd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Yd||i===$d)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===qd)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Kd)return s.COMPRESSED_R11_EAC;if(i===Jd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Zd)return s.COMPRESSED_RG11_EAC;if(i===Qd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ef||i===tf||i===nf||i===rf||i===sf||i===of||i===af||i===lf||i===cf||i===uf||i===df||i===ff||i===hf||i===pf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ef)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===tf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===rf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===sf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===of)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===af)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===cf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===uf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===df)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ff)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===pf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mf||i===gf||i===xf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===mf)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===gf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===xf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===vf||i===_f||i===yf||i===Sf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===_f)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===yf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Sf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Wo?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const Mw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ew=`
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

}`;class bw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new iv(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new li({vertexShader:Mw,fragmentShader:Ew,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Mn(new xc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ww extends zs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,m=null,g=null;const M=typeof XRWebGLBinding<"u",x=new bw,u={},p=n.getContextAttributes();let v=null,_=null;const T=[],A=[],R=new De;let y=null;const w=new _n;w.viewport=new At;const F=new _n;F.viewport=new At;const D=[w,F],V=new O1;let W=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ee=T[G];return ee===void 0&&(ee=new su,T[G]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(G){let ee=T[G];return ee===void 0&&(ee=new su,T[G]=ee),ee.getGripSpace()},this.getHand=function(G){let ee=T[G];return ee===void 0&&(ee=new su,T[G]=ee),ee.getHandSpace()};function z(G){const ee=A.indexOf(G.inputSource);if(ee===-1)return;const re=T[ee];re!==void 0&&(re.update(G.inputSource,G.frame,c||o),re.dispatchEvent({type:G.type,data:G.inputSource}))}function P(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",P),r.removeEventListener("inputsourceschange",N);for(let G=0;G<T.length;G++){const ee=A[G];ee!==null&&(A[G]=null,T[G].disconnect(ee))}W=null,j=null,x.reset();for(const G in u)delete u[G];e.setRenderTarget(v),m=null,d=null,h=null,r=null,_=null,te.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&Ue("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&Ue("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(G){c=G},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",P),r.addEventListener("inputsourceschange",N),p.xrCompatible!==!0&&await n.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let re=null,Fe=null,Le=null;p.depth&&(Le=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=p.stencil?Pr:Pi,Fe=p.stencil?Wo:ai);const Ne={colorFormat:n.RGBA8,depthFormat:Le,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ne),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new oi(d.textureWidth,d.textureHeight,{format:Gn,type:Cn,depthTexture:new Xo(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const re={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new oi(m.framebufferWidth,m.framebufferHeight,{format:Gn,type:Cn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),te.setContext(r),te.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function N(G){for(let ee=0;ee<G.removed.length;ee++){const re=G.removed[ee],Fe=A.indexOf(re);Fe>=0&&(A[Fe]=null,T[Fe].disconnect(re))}for(let ee=0;ee<G.added.length;ee++){const re=G.added[ee];let Fe=A.indexOf(re);if(Fe===-1){for(let Ne=0;Ne<T.length;Ne++)if(Ne>=A.length){A.push(re),Fe=Ne;break}else if(A[Ne]===null){A[Ne]=re,Fe=Ne;break}if(Fe===-1)break}const Le=T[Fe];Le&&Le.connect(re)}}const L=new U,O=new U;function $(G,ee,re){L.setFromMatrixPosition(ee.matrixWorld),O.setFromMatrixPosition(re.matrixWorld);const Fe=L.distanceTo(O),Le=ee.projectionMatrix.elements,Ne=re.projectionMatrix.elements,Et=Le[14]/(Le[10]-1),Ye=Le[14]/(Le[10]+1),Ze=(Le[9]+1)/Le[5],ot=(Le[9]-1)/Le[5],Ve=(Le[8]-1)/Le[0],bt=(Ne[8]+1)/Ne[0],I=Et*Ve,Rt=Et*bt,et=Fe/(-Ve+bt),lt=et*-Ve;if(ee.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(lt),G.translateZ(et),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Le[10]===-1)G.projectionMatrix.copy(ee.projectionMatrix),G.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{const we=Et+et,C=Ye+et,E=I-lt,B=Rt+(Fe-lt),Q=Ze*Ye/C*we,ne=ot*Ye/C*we;G.projectionMatrix.makePerspective(E,B,Q,ne,we,C),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function Z(G,ee){ee===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ee.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let ee=G.near,re=G.far;x.texture!==null&&(x.depthNear>0&&(ee=x.depthNear),x.depthFar>0&&(re=x.depthFar)),V.near=F.near=w.near=ee,V.far=F.far=w.far=re,(W!==V.near||j!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),W=V.near,j=V.far),V.layers.mask=G.layers.mask|6,w.layers.mask=V.layers.mask&-5,F.layers.mask=V.layers.mask&-3;const Fe=G.parent,Le=V.cameras;Z(V,Fe);for(let Ne=0;Ne<Le.length;Ne++)Z(Le[Ne],Fe);Le.length===2?$(V,w,F):V.projectionMatrix.copy(w.projectionMatrix),ie(G,V,Fe)};function ie(G,ee,re){re===null?G.matrix.copy(ee.matrixWorld):(G.matrix.copy(re.matrixWorld),G.matrix.invert(),G.matrix.multiply(ee.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ee.projectionMatrix),G.projectionMatrixInverse.copy(ee.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Mf*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(V)},this.getCameraTexture=function(G){return u[G]};let Ae=null;function We(G,ee){if(f=ee.getViewerPose(c||o),g=ee,f!==null){const re=f.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let Fe=!1;re.length!==V.cameras.length&&(V.cameras.length=0,Fe=!0);for(let Ye=0;Ye<re.length;Ye++){const Ze=re[Ye];let ot=null;if(m!==null)ot=m.getViewport(Ze);else{const bt=h.getViewSubImage(d,Ze);ot=bt.viewport,Ye===0&&(e.setRenderTargetTextures(_,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(_))}let Ve=D[Ye];Ve===void 0&&(Ve=new _n,Ve.layers.enable(Ye),Ve.viewport=new At,D[Ye]=Ve),Ve.matrix.fromArray(Ze.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Ze.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(ot.x,ot.y,ot.width,ot.height),Ye===0&&(V.matrix.copy(Ve.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Fe===!0&&V.cameras.push(Ve)}const Le=r.enabledFeatures;if(Le&&Le.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const Ye=h.getDepthInformation(re[0]);Ye&&Ye.isValid&&Ye.texture&&x.init(Ye,r.renderState)}if(Le&&Le.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let Ye=0;Ye<re.length;Ye++){const Ze=re[Ye].camera;if(Ze){let ot=u[Ze];ot||(ot=new iv,u[Ze]=ot);const Ve=h.getCameraImage(Ze);ot.sourceTexture=Ve}}}}for(let re=0;re<T.length;re++){const Fe=A[re],Le=T[re];Fe!==null&&Le!==void 0&&Le.update(Fe,ee,c||o)}Ae&&Ae(G,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}const te=new uv;te.setAnimationLoop(We),this.setAnimationLoop=function(G){Ae=G},this.dispose=function(){}}}const _r=new Li,Tw=new gt;function Aw(t,e){function n(x,u){x.matrixAutoUpdate===!0&&x.updateMatrix(),u.value.copy(x.matrix)}function i(x,u){u.color.getRGB(x.fogColor.value,av(t)),u.isFog?(x.fogNear.value=u.near,x.fogFar.value=u.far):u.isFogExp2&&(x.fogDensity.value=u.density)}function r(x,u,p,v,_){u.isMeshBasicMaterial?s(x,u):u.isMeshLambertMaterial?(s(x,u),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(x,u),h(x,u)):u.isMeshPhongMaterial?(s(x,u),f(x,u),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(x,u),d(x,u),u.isMeshPhysicalMaterial&&m(x,u,_)):u.isMeshMatcapMaterial?(s(x,u),g(x,u)):u.isMeshDepthMaterial?s(x,u):u.isMeshDistanceMaterial?(s(x,u),M(x,u)):u.isMeshNormalMaterial?s(x,u):u.isLineBasicMaterial?(o(x,u),u.isLineDashedMaterial&&a(x,u)):u.isPointsMaterial?l(x,u,p,v):u.isSpriteMaterial?c(x,u):u.isShadowMaterial?(x.color.value.copy(u.color),x.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(x,u){x.opacity.value=u.opacity,u.color&&x.diffuse.value.copy(u.color),u.emissive&&x.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(x.map.value=u.map,n(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.bumpMap&&(x.bumpMap.value=u.bumpMap,n(u.bumpMap,x.bumpMapTransform),x.bumpScale.value=u.bumpScale,u.side===fn&&(x.bumpScale.value*=-1)),u.normalMap&&(x.normalMap.value=u.normalMap,n(u.normalMap,x.normalMapTransform),x.normalScale.value.copy(u.normalScale),u.side===fn&&x.normalScale.value.negate()),u.displacementMap&&(x.displacementMap.value=u.displacementMap,n(u.displacementMap,x.displacementMapTransform),x.displacementScale.value=u.displacementScale,x.displacementBias.value=u.displacementBias),u.emissiveMap&&(x.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,x.emissiveMapTransform)),u.specularMap&&(x.specularMap.value=u.specularMap,n(u.specularMap,x.specularMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest);const p=e.get(u),v=p.envMap,_=p.envMapRotation;v&&(x.envMap.value=v,_r.copy(_),_r.x*=-1,_r.y*=-1,_r.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),x.envMapRotation.value.setFromMatrix4(Tw.makeRotationFromEuler(_r)),x.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=u.reflectivity,x.ior.value=u.ior,x.refractionRatio.value=u.refractionRatio),u.lightMap&&(x.lightMap.value=u.lightMap,x.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,x.lightMapTransform)),u.aoMap&&(x.aoMap.value=u.aoMap,x.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,x.aoMapTransform))}function o(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,u.map&&(x.map.value=u.map,n(u.map,x.mapTransform))}function a(x,u){x.dashSize.value=u.dashSize,x.totalSize.value=u.dashSize+u.gapSize,x.scale.value=u.scale}function l(x,u,p,v){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.size.value=u.size*p,x.scale.value=v*.5,u.map&&(x.map.value=u.map,n(u.map,x.uvTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function c(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.rotation.value=u.rotation,u.map&&(x.map.value=u.map,n(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,n(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function f(x,u){x.specular.value.copy(u.specular),x.shininess.value=Math.max(u.shininess,1e-4)}function h(x,u){u.gradientMap&&(x.gradientMap.value=u.gradientMap)}function d(x,u){x.metalness.value=u.metalness,u.metalnessMap&&(x.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,x.metalnessMapTransform)),x.roughness.value=u.roughness,u.roughnessMap&&(x.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,x.roughnessMapTransform)),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)}function m(x,u,p){x.ior.value=u.ior,u.sheen>0&&(x.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),x.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(x.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,x.sheenColorMapTransform)),u.sheenRoughnessMap&&(x.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,x.sheenRoughnessMapTransform))),u.clearcoat>0&&(x.clearcoat.value=u.clearcoat,x.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(x.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,x.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(x.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===fn&&x.clearcoatNormalScale.value.negate())),u.dispersion>0&&(x.dispersion.value=u.dispersion),u.iridescence>0&&(x.iridescence.value=u.iridescence,x.iridescenceIOR.value=u.iridescenceIOR,x.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(x.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,x.iridescenceMapTransform)),u.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),u.transmission>0&&(x.transmission.value=u.transmission,x.transmissionSamplerMap.value=p.texture,x.transmissionSamplerSize.value.set(p.width,p.height),u.transmissionMap&&(x.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,x.transmissionMapTransform)),x.thickness.value=u.thickness,u.thicknessMap&&(x.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=u.attenuationDistance,x.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(x.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(x.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=u.specularIntensity,x.specularColor.value.copy(u.specularColor),u.specularColorMap&&(x.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,x.specularColorMapTransform)),u.specularIntensityMap&&(x.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,u){u.matcap&&(x.matcap.value=u.matcap)}function M(x,u){const p=e.get(u).light;x.referencePosition.value.setFromMatrixPosition(p.matrixWorld),x.nearDistance.value=p.shadow.camera.near,x.farDistance.value=p.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Rw(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(p,v){const _=v.program;i.uniformBlockBinding(p,_)}function c(p,v){let _=r[p.id];_===void 0&&(g(p),_=f(p),r[p.id]=_,p.addEventListener("dispose",x));const T=v.program;i.updateUBOMapping(p,T);const A=e.render.frame;s[p.id]!==A&&(d(p),s[p.id]=A)}function f(p){const v=h();p.__bindingPointIndex=v;const _=t.createBuffer(),T=p.__size,A=p.usage;return t.bindBuffer(t.UNIFORM_BUFFER,_),t.bufferData(t.UNIFORM_BUFFER,T,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,_),_}function h(){for(let p=0;p<a;p++)if(o.indexOf(p)===-1)return o.push(p),p;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(p){const v=r[p.id],_=p.uniforms,T=p.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,R=_.length;A<R;A++){const y=Array.isArray(_[A])?_[A]:[_[A]];for(let w=0,F=y.length;w<F;w++){const D=y[w];if(m(D,A,w,T)===!0){const V=D.__offset,W=Array.isArray(D.value)?D.value:[D.value];let j=0;for(let z=0;z<W.length;z++){const P=W[z],N=M(P);typeof P=="number"||typeof P=="boolean"?(D.__data[0]=P,t.bufferSubData(t.UNIFORM_BUFFER,V+j,D.__data)):P.isMatrix3?(D.__data[0]=P.elements[0],D.__data[1]=P.elements[1],D.__data[2]=P.elements[2],D.__data[3]=0,D.__data[4]=P.elements[3],D.__data[5]=P.elements[4],D.__data[6]=P.elements[5],D.__data[7]=0,D.__data[8]=P.elements[6],D.__data[9]=P.elements[7],D.__data[10]=P.elements[8],D.__data[11]=0):(P.toArray(D.__data,j),j+=N.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,V,D.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(p,v,_,T){const A=p.value,R=v+"_"+_;if(T[R]===void 0)return typeof A=="number"||typeof A=="boolean"?T[R]=A:T[R]=A.clone(),!0;{const y=T[R];if(typeof A=="number"||typeof A=="boolean"){if(y!==A)return T[R]=A,!0}else if(y.equals(A)===!1)return y.copy(A),!0}return!1}function g(p){const v=p.uniforms;let _=0;const T=16;for(let R=0,y=v.length;R<y;R++){const w=Array.isArray(v[R])?v[R]:[v[R]];for(let F=0,D=w.length;F<D;F++){const V=w[F],W=Array.isArray(V.value)?V.value:[V.value];for(let j=0,z=W.length;j<z;j++){const P=W[j],N=M(P),L=_%T,O=L%N.boundary,$=L+O;_+=O,$!==0&&T-$<N.storage&&(_+=T-$),V.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=N.storage}}}const A=_%T;return A>0&&(_+=T-A),p.__size=_,p.__cache={},this}function M(p){const v={boundary:0,storage:0};return typeof p=="number"||typeof p=="boolean"?(v.boundary=4,v.storage=4):p.isVector2?(v.boundary=8,v.storage=8):p.isVector3||p.isColor?(v.boundary=16,v.storage=12):p.isVector4?(v.boundary=16,v.storage=16):p.isMatrix3?(v.boundary=48,v.storage=48):p.isMatrix4?(v.boundary=64,v.storage=64):p.isTexture?Ue("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ue("WebGLRenderer: Unsupported uniform value type.",p),v}function x(p){const v=p.target;v.removeEventListener("dispose",x);const _=o.indexOf(v.__bindingPointIndex);o.splice(_,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const p in r)t.deleteBuffer(r[p]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}const Cw=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Kn=null;function Pw(){return Kn===null&&(Kn=new c1(Cw,16,16,Ns,Ci),Kn.name="DFG_LUT",Kn.minFilter=Kt,Kn.magFilter=Kt,Kn.wrapS=Si,Kn.wrapT=Si,Kn.generateMipmaps=!1,Kn.needsUpdate=!0),Kn}class gv{constructor(e={}){const{canvas:n=VS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Cn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const M=m,x=new Set([Lh,Ph,Ch]),u=new Set([Cn,ai,Go,Wo,Ah,Rh]),p=new Uint32Array(4),v=new Int32Array(4);let _=null,T=null;const A=[],R=[];let y=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let F=!1;this._outputColorSpace=vn;let D=0,V=0,W=null,j=-1,z=null;const P=new At,N=new At;let L=null;const O=new Qe(0);let $=0,Z=n.width,ie=n.height,Ae=1,We=null,te=null;const G=new At(0,0,Z,ie),ee=new At(0,0,Z,ie);let re=!1;const Fe=new tv;let Le=!1,Ne=!1;const Et=new gt,Ye=new U,Ze=new At,ot={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ve=!1;function bt(){return W===null?Ae:1}let I=i;function Rt(b,H){return n.getContext(b,H)}try{const b={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${wh}`),n.addEventListener("webglcontextlost",Me,!1),n.addEventListener("webglcontextrestored",Oe,!1),n.addEventListener("webglcontextcreationerror",ct,!1),I===null){const H="webgl2";if(I=Rt(H,b),I===null)throw Rt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw Je("WebGLRenderer: "+b.message),b}let et,lt,we,C,E,B,Q,ne,J,ye,de,Pe,Ie,ae,ce,Se,Ee,ge,He,k,fe,ue,_e;function le(){et=new L2(I),et.init(),fe=new Sw(I,et),lt=new E2(I,et,e,fe),we=new _w(I,et),lt.reversedDepthBuffer&&d&&we.buffers.depth.setReversed(!0),C=new I2(I),E=new sw,B=new yw(I,et,we,E,lt,fe,C),Q=new P2(w),ne=new z1(I),ue=new S2(I,ne),J=new D2(I,ne,C,ue),ye=new F2(I,J,ne,ue,C),ge=new U2(I,lt,B),ce=new b2(E),de=new rw(w,Q,et,lt,ue,ce),Pe=new Aw(w,E),Ie=new aw,ae=new hw(et),Ee=new y2(w,Q,we,ye,g,l),Se=new vw(w,ye,lt),_e=new Rw(I,C,lt,we),He=new M2(I,et,C),k=new N2(I,et,C),C.programs=de.programs,w.capabilities=lt,w.extensions=et,w.properties=E,w.renderLists=Ie,w.shadowMap=Se,w.state=we,w.info=C}le(),M!==Cn&&(y=new k2(M,n.width,n.height,r,s));const K=new ww(w,I);this.xr=K,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const b=et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(b){b!==void 0&&(Ae=b,this.setSize(Z,ie,!1))},this.getSize=function(b){return b.set(Z,ie)},this.setSize=function(b,H,q=!0){if(K.isPresenting){Ue("WebGLRenderer: Can't change size while VR device is presenting.");return}Z=b,ie=H,n.width=Math.floor(b*Ae),n.height=Math.floor(H*Ae),q===!0&&(n.style.width=b+"px",n.style.height=H+"px"),y!==null&&y.setSize(n.width,n.height),this.setViewport(0,0,b,H)},this.getDrawingBufferSize=function(b){return b.set(Z*Ae,ie*Ae).floor()},this.setDrawingBufferSize=function(b,H,q){Z=b,ie=H,Ae=q,n.width=Math.floor(b*q),n.height=Math.floor(H*q),this.setViewport(0,0,b,H)},this.setEffects=function(b){if(M===Cn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let H=0;H<b.length;H++)if(b[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(P)},this.getViewport=function(b){return b.copy(G)},this.setViewport=function(b,H,q,Y){b.isVector4?G.set(b.x,b.y,b.z,b.w):G.set(b,H,q,Y),we.viewport(P.copy(G).multiplyScalar(Ae).round())},this.getScissor=function(b){return b.copy(ee)},this.setScissor=function(b,H,q,Y){b.isVector4?ee.set(b.x,b.y,b.z,b.w):ee.set(b,H,q,Y),we.scissor(N.copy(ee).multiplyScalar(Ae).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(b){we.setScissorTest(re=b)},this.setOpaqueSort=function(b){We=b},this.setTransparentSort=function(b){te=b},this.getClearColor=function(b){return b.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(b=!0,H=!0,q=!0){let Y=0;if(b){let X=!1;if(W!==null){const pe=W.texture.format;X=x.has(pe)}if(X){const pe=W.texture.type,xe=u.has(pe),me=Ee.getClearColor(),be=Ee.getClearAlpha(),Re=me.r,ke=me.g,Ge=me.b;xe?(p[0]=Re,p[1]=ke,p[2]=Ge,p[3]=be,I.clearBufferuiv(I.COLOR,0,p)):(v[0]=Re,v[1]=ke,v[2]=Ge,v[3]=be,I.clearBufferiv(I.COLOR,0,v))}else Y|=I.COLOR_BUFFER_BIT}H&&(Y|=I.DEPTH_BUFFER_BIT),q&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Me,!1),n.removeEventListener("webglcontextrestored",Oe,!1),n.removeEventListener("webglcontextcreationerror",ct,!1),Ee.dispose(),Ie.dispose(),ae.dispose(),E.dispose(),Q.dispose(),ye.dispose(),ue.dispose(),_e.dispose(),de.dispose(),K.dispose(),K.removeEventListener("sessionstart",Gh),K.removeEventListener("sessionend",Wh),fr.stop()};function Me(b){b.preventDefault(),mm("WebGLRenderer: Context Lost."),F=!0}function Oe(){mm("WebGLRenderer: Context Restored."),F=!1;const b=C.autoReset,H=Se.enabled,q=Se.autoUpdate,Y=Se.needsUpdate,X=Se.type;le(),C.autoReset=b,Se.enabled=H,Se.autoUpdate=q,Se.needsUpdate=Y,Se.type=X}function ct(b){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function tt(b){const H=b.target;H.removeEventListener("dispose",tt),ci(H)}function ci(b){ui(b),E.remove(b)}function ui(b){const H=E.get(b).programs;H!==void 0&&(H.forEach(function(q){de.releaseProgram(q)}),b.isShaderMaterial&&de.releaseShaderCache(b))}this.renderBufferDirect=function(b,H,q,Y,X,pe){H===null&&(H=ot);const xe=X.isMesh&&X.matrixWorld.determinant()<0,me=wv(b,H,q,Y,X);we.setMaterial(Y,xe);let be=q.index,Re=1;if(Y.wireframe===!0){if(be=J.getWireframeAttribute(q),be===void 0)return;Re=2}const ke=q.drawRange,Ge=q.attributes.position;let Ce=ke.start*Re,rt=(ke.start+ke.count)*Re;pe!==null&&(Ce=Math.max(Ce,pe.start*Re),rt=Math.min(rt,(pe.start+pe.count)*Re)),be!==null?(Ce=Math.max(Ce,0),rt=Math.min(rt,be.count)):Ge!=null&&(Ce=Math.max(Ce,0),rt=Math.min(rt,Ge.count));const wt=rt-Ce;if(wt<0||wt===1/0)return;ue.setup(X,Y,me,q,be);let yt,st=He;if(be!==null&&(yt=ne.get(be),st=k,st.setIndex(yt)),X.isMesh)Y.wireframe===!0?(we.setLineWidth(Y.wireframeLinewidth*bt()),st.setMode(I.LINES)):st.setMode(I.TRIANGLES);else if(X.isLine){let Wt=Y.linewidth;Wt===void 0&&(Wt=1),we.setLineWidth(Wt*bt()),X.isLineSegments?st.setMode(I.LINES):X.isLineLoop?st.setMode(I.LINE_LOOP):st.setMode(I.LINE_STRIP)}else X.isPoints?st.setMode(I.POINTS):X.isSprite&&st.setMode(I.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)jl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))st.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Wt=X._multiDrawStarts,Te=X._multiDrawCounts,pn=X._multiDrawCount,Ke=be?ne.get(be).bytesPerElement:1,In=E.get(Y).currentProgram.getUniforms();for(let Yn=0;Yn<pn;Yn++)In.setValue(I,"_gl_DrawID",Yn),st.render(Wt[Yn]/Ke,Te[Yn])}else if(X.isInstancedMesh)st.renderInstances(Ce,wt,X.count);else if(q.isInstancedBufferGeometry){const Wt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Te=Math.min(q.instanceCount,Wt);st.renderInstances(Ce,wt,Te)}else st.render(Ce,wt)};function Hh(b,H,q){b.transparent===!0&&b.side===vi&&b.forceSinglePass===!1?(b.side=fn,b.needsUpdate=!0,ra(b,H,q),b.side=lr,b.needsUpdate=!0,ra(b,H,q),b.side=vi):ra(b,H,q)}this.compile=function(b,H,q=null){q===null&&(q=b),T=ae.get(q),T.init(H),R.push(T),q.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),b!==q&&b.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights();const Y=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const pe=X.material;if(pe)if(Array.isArray(pe))for(let xe=0;xe<pe.length;xe++){const me=pe[xe];Hh(me,q,X),Y.add(me)}else Hh(pe,q,X),Y.add(pe)}),T=R.pop(),Y},this.compileAsync=function(b,H,q=null){const Y=this.compile(b,H,q);return new Promise(X=>{function pe(){if(Y.forEach(function(xe){E.get(xe).currentProgram.isReady()&&Y.delete(xe)}),Y.size===0){X(b);return}setTimeout(pe,10)}et.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Sc=null;function bv(b){Sc&&Sc(b)}function Gh(){fr.stop()}function Wh(){fr.start()}const fr=new uv;fr.setAnimationLoop(bv),typeof self<"u"&&fr.setContext(self),this.setAnimationLoop=function(b){Sc=b,K.setAnimationLoop(b),b===null?fr.stop():fr.start()},K.addEventListener("sessionstart",Gh),K.addEventListener("sessionend",Wh),this.render=function(b,H){if(H!==void 0&&H.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;const q=K.enabled===!0&&K.isPresenting===!0,Y=y!==null&&(W===null||q)&&y.begin(w,W);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(K.cameraAutoUpdate===!0&&K.updateCamera(H),H=K.getCamera()),b.isScene===!0&&b.onBeforeRender(w,b,H,W),T=ae.get(b,R.length),T.init(H),R.push(T),Et.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Fe.setFromProjectionMatrix(Et,ni,H.reversedDepth),Ne=this.localClippingEnabled,Le=ce.init(this.clippingPlanes,Ne),_=Ie.get(b,A.length),_.init(),A.push(_),K.enabled===!0&&K.isPresenting===!0){const xe=w.xr.getDepthSensingMesh();xe!==null&&Mc(xe,H,-1/0,w.sortObjects)}Mc(b,H,0,w.sortObjects),_.finish(),w.sortObjects===!0&&_.sort(We,te),Ve=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Ve&&Ee.addToRenderList(_,b),this.info.render.frame++,Le===!0&&ce.beginShadows();const X=T.state.shadowsArray;if(Se.render(X,b,H),Le===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&y.hasRenderPass())===!1){const xe=_.opaque,me=_.transmissive;if(T.setupLights(),H.isArrayCamera){const be=H.cameras;if(me.length>0)for(let Re=0,ke=be.length;Re<ke;Re++){const Ge=be[Re];Xh(xe,me,b,Ge)}Ve&&Ee.render(b);for(let Re=0,ke=be.length;Re<ke;Re++){const Ge=be[Re];jh(_,b,Ge,Ge.viewport)}}else me.length>0&&Xh(xe,me,b,H),Ve&&Ee.render(b),jh(_,b,H)}W!==null&&V===0&&(B.updateMultisampleRenderTarget(W),B.updateRenderTargetMipmap(W)),Y&&y.end(w),b.isScene===!0&&b.onAfterRender(w,b,H),ue.resetDefaultState(),j=-1,z=null,R.pop(),R.length>0?(T=R[R.length-1],Le===!0&&ce.setGlobalState(w.clippingPlanes,T.state.camera)):T=null,A.pop(),A.length>0?_=A[A.length-1]:_=null};function Mc(b,H,q,Y){if(b.visible===!1)return;if(b.layers.test(H.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(H);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Fe.intersectsSprite(b)){Y&&Ze.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Et);const xe=ye.update(b),me=b.material;me.visible&&_.push(b,xe,me,q,Ze.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Fe.intersectsObject(b))){const xe=ye.update(b),me=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ze.copy(b.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ze.copy(xe.boundingSphere.center)),Ze.applyMatrix4(b.matrixWorld).applyMatrix4(Et)),Array.isArray(me)){const be=xe.groups;for(let Re=0,ke=be.length;Re<ke;Re++){const Ge=be[Re],Ce=me[Ge.materialIndex];Ce&&Ce.visible&&_.push(b,xe,Ce,q,Ze.z,Ge)}}else me.visible&&_.push(b,xe,me,q,Ze.z,null)}}const pe=b.children;for(let xe=0,me=pe.length;xe<me;xe++)Mc(pe[xe],H,q,Y)}function jh(b,H,q,Y){const{opaque:X,transmissive:pe,transparent:xe}=b;T.setupLightsView(q),Le===!0&&ce.setGlobalState(w.clippingPlanes,q),Y&&we.viewport(P.copy(Y)),X.length>0&&ia(X,H,q),pe.length>0&&ia(pe,H,q),xe.length>0&&ia(xe,H,q),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Xh(b,H,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[Y.id]===void 0){const Ce=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[Y.id]=new oi(1,1,{generateMipmaps:!0,type:Ce?Ci:Cn,minFilter:Cr,samples:Math.max(4,lt.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:$e.workingColorSpace})}const pe=T.state.transmissionRenderTarget[Y.id],xe=Y.viewport||P;pe.setSize(xe.z*w.transmissionResolutionScale,xe.w*w.transmissionResolutionScale);const me=w.getRenderTarget(),be=w.getActiveCubeFace(),Re=w.getActiveMipmapLevel();w.setRenderTarget(pe),w.getClearColor(O),$=w.getClearAlpha(),$<1&&w.setClearColor(16777215,.5),w.clear(),Ve&&Ee.render(q);const ke=w.toneMapping;w.toneMapping=si;const Ge=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),T.setupLightsView(Y),Le===!0&&ce.setGlobalState(w.clippingPlanes,Y),ia(b,q,Y),B.updateMultisampleRenderTarget(pe),B.updateRenderTargetMipmap(pe),et.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let rt=0,wt=H.length;rt<wt;rt++){const yt=H[rt],{object:st,geometry:Wt,material:Te,group:pn}=yt;if(Te.side===vi&&st.layers.test(Y.layers)){const Ke=Te.side;Te.side=fn,Te.needsUpdate=!0,Yh(st,q,Y,Wt,Te,pn),Te.side=Ke,Te.needsUpdate=!0,Ce=!0}}Ce===!0&&(B.updateMultisampleRenderTarget(pe),B.updateRenderTargetMipmap(pe))}w.setRenderTarget(me,be,Re),w.setClearColor(O,$),Ge!==void 0&&(Y.viewport=Ge),w.toneMapping=ke}function ia(b,H,q){const Y=H.isScene===!0?H.overrideMaterial:null;for(let X=0,pe=b.length;X<pe;X++){const xe=b[X],{object:me,geometry:be,group:Re}=xe;let ke=xe.material;ke.allowOverride===!0&&Y!==null&&(ke=Y),me.layers.test(q.layers)&&Yh(me,H,q,be,ke,Re)}}function Yh(b,H,q,Y,X,pe){b.onBeforeRender(w,H,q,Y,X,pe),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(w,H,q,Y,b,pe),X.transparent===!0&&X.side===vi&&X.forceSinglePass===!1?(X.side=fn,X.needsUpdate=!0,w.renderBufferDirect(q,H,Y,X,b,pe),X.side=lr,X.needsUpdate=!0,w.renderBufferDirect(q,H,Y,X,b,pe),X.side=vi):w.renderBufferDirect(q,H,Y,X,b,pe),b.onAfterRender(w,H,q,Y,X,pe)}function ra(b,H,q){H.isScene!==!0&&(H=ot);const Y=E.get(b),X=T.state.lights,pe=T.state.shadowsArray,xe=X.state.version,me=de.getParameters(b,X.state,pe,H,q),be=de.getProgramCacheKey(me);let Re=Y.programs;Y.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?H.environment:null,Y.fog=H.fog;const ke=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;Y.envMap=Q.get(b.envMap||Y.environment,ke),Y.envMapRotation=Y.environment!==null&&b.envMap===null?H.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",tt),Re=new Map,Y.programs=Re);let Ge=Re.get(be);if(Ge!==void 0){if(Y.currentProgram===Ge&&Y.lightsStateVersion===xe)return qh(b,me),Ge}else me.uniforms=de.getUniforms(b),b.onBeforeCompile(me,w),Ge=de.acquireProgram(me,be),Re.set(be,Ge),Y.uniforms=me.uniforms;const Ce=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ce.clippingPlanes=ce.uniform),qh(b,me),Y.needsLights=Av(b),Y.lightsStateVersion=xe,Y.needsLights&&(Ce.ambientLightColor.value=X.state.ambient,Ce.lightProbe.value=X.state.probe,Ce.directionalLights.value=X.state.directional,Ce.directionalLightShadows.value=X.state.directionalShadow,Ce.spotLights.value=X.state.spot,Ce.spotLightShadows.value=X.state.spotShadow,Ce.rectAreaLights.value=X.state.rectArea,Ce.ltc_1.value=X.state.rectAreaLTC1,Ce.ltc_2.value=X.state.rectAreaLTC2,Ce.pointLights.value=X.state.point,Ce.pointLightShadows.value=X.state.pointShadow,Ce.hemisphereLights.value=X.state.hemi,Ce.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ce.spotLightMatrix.value=X.state.spotLightMatrix,Ce.spotLightMap.value=X.state.spotLightMap,Ce.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.currentProgram=Ge,Y.uniformsList=null,Ge}function $h(b){if(b.uniformsList===null){const H=b.currentProgram.getUniforms();b.uniformsList=ml.seqWithValue(H.seq,b.uniforms)}return b.uniformsList}function qh(b,H){const q=E.get(b);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function wv(b,H,q,Y,X){H.isScene!==!0&&(H=ot),B.resetTextureUnits();const pe=H.fog,xe=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?H.environment:null,me=W===null?w.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:Is,be=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Re=Q.get(Y.envMap||xe,be),ke=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ce=!!q.morphAttributes.position,rt=!!q.morphAttributes.normal,wt=!!q.morphAttributes.color;let yt=si;Y.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(yt=w.toneMapping);const st=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Wt=st!==void 0?st.length:0,Te=E.get(Y),pn=T.state.lights;if(Le===!0&&(Ne===!0||b!==z)){const Ut=b===z&&Y.id===j;ce.setState(Y,b,Ut)}let Ke=!1;Y.version===Te.__version?(Te.needsLights&&Te.lightsStateVersion!==pn.state.version||Te.outputColorSpace!==me||X.isBatchedMesh&&Te.batching===!1||!X.isBatchedMesh&&Te.batching===!0||X.isBatchedMesh&&Te.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Te.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Te.instancing===!1||!X.isInstancedMesh&&Te.instancing===!0||X.isSkinnedMesh&&Te.skinning===!1||!X.isSkinnedMesh&&Te.skinning===!0||X.isInstancedMesh&&Te.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Te.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Te.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Te.instancingMorph===!1&&X.morphTexture!==null||Te.envMap!==Re||Y.fog===!0&&Te.fog!==pe||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==ce.numPlanes||Te.numIntersection!==ce.numIntersection)||Te.vertexAlphas!==ke||Te.vertexTangents!==Ge||Te.morphTargets!==Ce||Te.morphNormals!==rt||Te.morphColors!==wt||Te.toneMapping!==yt||Te.morphTargetsCount!==Wt)&&(Ke=!0):(Ke=!0,Te.__version=Y.version);let In=Te.currentProgram;Ke===!0&&(In=ra(Y,H,X));let Yn=!1,hr=!1,Vr=!1;const at=In.getUniforms(),zt=Te.uniforms;if(we.useProgram(In.program)&&(Yn=!0,hr=!0,Vr=!0),Y.id!==j&&(j=Y.id,hr=!0),Yn||z!==b){we.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),at.setValue(I,"projectionMatrix",b.projectionMatrix),at.setValue(I,"viewMatrix",b.matrixWorldInverse);const Ui=at.map.cameraPosition;Ui!==void 0&&Ui.setValue(I,Ye.setFromMatrixPosition(b.matrixWorld)),lt.logarithmicDepthBuffer&&at.setValue(I,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&at.setValue(I,"isOrthographic",b.isOrthographicCamera===!0),z!==b&&(z=b,hr=!0,Vr=!0)}if(Te.needsLights&&(pn.state.directionalShadowMap.length>0&&at.setValue(I,"directionalShadowMap",pn.state.directionalShadowMap,B),pn.state.spotShadowMap.length>0&&at.setValue(I,"spotShadowMap",pn.state.spotShadowMap,B),pn.state.pointShadowMap.length>0&&at.setValue(I,"pointShadowMap",pn.state.pointShadowMap,B)),X.isSkinnedMesh){at.setOptional(I,X,"bindMatrix"),at.setOptional(I,X,"bindMatrixInverse");const Ut=X.skeleton;Ut&&(Ut.boneTexture===null&&Ut.computeBoneTexture(),at.setValue(I,"boneTexture",Ut.boneTexture,B))}X.isBatchedMesh&&(at.setOptional(I,X,"batchingTexture"),at.setValue(I,"batchingTexture",X._matricesTexture,B),at.setOptional(I,X,"batchingIdTexture"),at.setValue(I,"batchingIdTexture",X._indirectTexture,B),at.setOptional(I,X,"batchingColorTexture"),X._colorsTexture!==null&&at.setValue(I,"batchingColorTexture",X._colorsTexture,B));const Ii=q.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&ge.update(X,q,In),(hr||Te.receiveShadow!==X.receiveShadow)&&(Te.receiveShadow=X.receiveShadow,at.setValue(I,"receiveShadow",X.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&H.environment!==null&&(zt.envMapIntensity.value=H.environmentIntensity),zt.dfgLUT!==void 0&&(zt.dfgLUT.value=Pw()),hr&&(at.setValue(I,"toneMappingExposure",w.toneMappingExposure),Te.needsLights&&Tv(zt,Vr),pe&&Y.fog===!0&&Pe.refreshFogUniforms(zt,pe),Pe.refreshMaterialUniforms(zt,Y,Ae,ie,T.state.transmissionRenderTarget[b.id]),ml.upload(I,$h(Te),zt,B)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ml.upload(I,$h(Te),zt,B),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&at.setValue(I,"center",X.center),at.setValue(I,"modelViewMatrix",X.modelViewMatrix),at.setValue(I,"normalMatrix",X.normalMatrix),at.setValue(I,"modelMatrix",X.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Ut=Y.uniformsGroups;for(let Ui=0,Hr=Ut.length;Ui<Hr;Ui++){const Kh=Ut[Ui];_e.update(Kh,In),_e.bind(Kh,In)}}return In}function Tv(b,H){b.ambientLightColor.needsUpdate=H,b.lightProbe.needsUpdate=H,b.directionalLights.needsUpdate=H,b.directionalLightShadows.needsUpdate=H,b.pointLights.needsUpdate=H,b.pointLightShadows.needsUpdate=H,b.spotLights.needsUpdate=H,b.spotLightShadows.needsUpdate=H,b.rectAreaLights.needsUpdate=H,b.hemisphereLights.needsUpdate=H}function Av(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return W},this.setRenderTargetTextures=function(b,H,q){const Y=E.get(b);Y.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),E.get(b.texture).__webglTexture=H,E.get(b.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,H){const q=E.get(b);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0};const Rv=I.createFramebuffer();this.setRenderTarget=function(b,H=0,q=0){W=b,D=H,V=q;let Y=null,X=!1,pe=!1;if(b){const me=E.get(b);if(me.__useDefaultFramebuffer!==void 0){we.bindFramebuffer(I.FRAMEBUFFER,me.__webglFramebuffer),P.copy(b.viewport),N.copy(b.scissor),L=b.scissorTest,we.viewport(P),we.scissor(N),we.setScissorTest(L),j=-1;return}else if(me.__webglFramebuffer===void 0)B.setupRenderTarget(b);else if(me.__hasExternalTextures)B.rebindTextures(b,E.get(b.texture).__webglTexture,E.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const ke=b.depthTexture;if(me.__boundDepthTexture!==ke){if(ke!==null&&E.has(ke)&&(b.width!==ke.image.width||b.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");B.setupDepthRenderbuffer(b)}}const be=b.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(pe=!0);const Re=E.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Re[H])?Y=Re[H][q]:Y=Re[H],X=!0):b.samples>0&&B.useMultisampledRTT(b)===!1?Y=E.get(b).__webglMultisampledFramebuffer:Array.isArray(Re)?Y=Re[q]:Y=Re,P.copy(b.viewport),N.copy(b.scissor),L=b.scissorTest}else P.copy(G).multiplyScalar(Ae).floor(),N.copy(ee).multiplyScalar(Ae).floor(),L=re;if(q!==0&&(Y=Rv),we.bindFramebuffer(I.FRAMEBUFFER,Y)&&we.drawBuffers(b,Y),we.viewport(P),we.scissor(N),we.setScissorTest(L),X){const me=E.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+H,me.__webglTexture,q)}else if(pe){const me=H;for(let be=0;be<b.textures.length;be++){const Re=E.get(b.textures[be]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+be,Re.__webglTexture,q,me)}}else if(b!==null&&q!==0){const me=E.get(b.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,me.__webglTexture,q)}j=-1},this.readRenderTargetPixels=function(b,H,q,Y,X,pe,xe,me=0){if(!(b&&b.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){we.bindFramebuffer(I.FRAMEBUFFER,be);try{const Re=b.textures[me],ke=Re.format,Ge=Re.type;if(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+me),!lt.textureFormatReadable(ke)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Ge)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=b.width-Y&&q>=0&&q<=b.height-X&&I.readPixels(H,q,Y,X,fe.convert(ke),fe.convert(Ge),pe)}finally{const Re=W!==null?E.get(W).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,H,q,Y,X,pe,xe,me=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be)if(H>=0&&H<=b.width-Y&&q>=0&&q<=b.height-X){we.bindFramebuffer(I.FRAMEBUFFER,be);const Re=b.textures[me],ke=Re.format,Ge=Re.type;if(b.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+me),!lt.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ce=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ce),I.bufferData(I.PIXEL_PACK_BUFFER,pe.byteLength,I.STREAM_READ),I.readPixels(H,q,Y,X,fe.convert(ke),fe.convert(Ge),0);const rt=W!==null?E.get(W).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,rt);const wt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await HS(I,wt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ce),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,pe),I.deleteBuffer(Ce),I.deleteSync(wt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,H=null,q=0){const Y=Math.pow(2,-q),X=Math.floor(b.image.width*Y),pe=Math.floor(b.image.height*Y),xe=H!==null?H.x:0,me=H!==null?H.y:0;B.setTexture2D(b,0),I.copyTexSubImage2D(I.TEXTURE_2D,q,0,0,xe,me,X,pe),we.unbindTexture()};const Cv=I.createFramebuffer(),Pv=I.createFramebuffer();this.copyTextureToTexture=function(b,H,q=null,Y=null,X=0,pe=0){let xe,me,be,Re,ke,Ge,Ce,rt,wt;const yt=b.isCompressedTexture?b.mipmaps[pe]:b.image;if(q!==null)xe=q.max.x-q.min.x,me=q.max.y-q.min.y,be=q.isBox3?q.max.z-q.min.z:1,Re=q.min.x,ke=q.min.y,Ge=q.isBox3?q.min.z:0;else{const zt=Math.pow(2,-X);xe=Math.floor(yt.width*zt),me=Math.floor(yt.height*zt),b.isDataArrayTexture?be=yt.depth:b.isData3DTexture?be=Math.floor(yt.depth*zt):be=1,Re=0,ke=0,Ge=0}Y!==null?(Ce=Y.x,rt=Y.y,wt=Y.z):(Ce=0,rt=0,wt=0);const st=fe.convert(H.format),Wt=fe.convert(H.type);let Te;H.isData3DTexture?(B.setTexture3D(H,0),Te=I.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(B.setTexture2DArray(H,0),Te=I.TEXTURE_2D_ARRAY):(B.setTexture2D(H,0),Te=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,H.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,H.unpackAlignment);const pn=I.getParameter(I.UNPACK_ROW_LENGTH),Ke=I.getParameter(I.UNPACK_IMAGE_HEIGHT),In=I.getParameter(I.UNPACK_SKIP_PIXELS),Yn=I.getParameter(I.UNPACK_SKIP_ROWS),hr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,yt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,yt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Re),I.pixelStorei(I.UNPACK_SKIP_ROWS,ke),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ge);const Vr=b.isDataArrayTexture||b.isData3DTexture,at=H.isDataArrayTexture||H.isData3DTexture;if(b.isDepthTexture){const zt=E.get(b),Ii=E.get(H),Ut=E.get(zt.__renderTarget),Ui=E.get(Ii.__renderTarget);we.bindFramebuffer(I.READ_FRAMEBUFFER,Ut.__webglFramebuffer),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ui.__webglFramebuffer);for(let Hr=0;Hr<be;Hr++)Vr&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,E.get(b).__webglTexture,X,Ge+Hr),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,E.get(H).__webglTexture,pe,wt+Hr)),I.blitFramebuffer(Re,ke,xe,me,Ce,rt,xe,me,I.DEPTH_BUFFER_BIT,I.NEAREST);we.bindFramebuffer(I.READ_FRAMEBUFFER,null),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||E.has(b)){const zt=E.get(b),Ii=E.get(H);we.bindFramebuffer(I.READ_FRAMEBUFFER,Cv),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,Pv);for(let Ut=0;Ut<be;Ut++)Vr?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,zt.__webglTexture,X,Ge+Ut):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,zt.__webglTexture,X),at?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ii.__webglTexture,pe,wt+Ut):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ii.__webglTexture,pe),X!==0?I.blitFramebuffer(Re,ke,xe,me,Ce,rt,xe,me,I.COLOR_BUFFER_BIT,I.NEAREST):at?I.copyTexSubImage3D(Te,pe,Ce,rt,wt+Ut,Re,ke,xe,me):I.copyTexSubImage2D(Te,pe,Ce,rt,Re,ke,xe,me);we.bindFramebuffer(I.READ_FRAMEBUFFER,null),we.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else at?b.isDataTexture||b.isData3DTexture?I.texSubImage3D(Te,pe,Ce,rt,wt,xe,me,be,st,Wt,yt.data):H.isCompressedArrayTexture?I.compressedTexSubImage3D(Te,pe,Ce,rt,wt,xe,me,be,st,yt.data):I.texSubImage3D(Te,pe,Ce,rt,wt,xe,me,be,st,Wt,yt):b.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,pe,Ce,rt,xe,me,st,Wt,yt.data):b.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,pe,Ce,rt,yt.width,yt.height,st,yt.data):I.texSubImage2D(I.TEXTURE_2D,pe,Ce,rt,xe,me,st,Wt,yt);I.pixelStorei(I.UNPACK_ROW_LENGTH,pn),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ke),I.pixelStorei(I.UNPACK_SKIP_PIXELS,In),I.pixelStorei(I.UNPACK_SKIP_ROWS,Yn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,hr),pe===0&&H.generateMipmaps&&I.generateMipmap(Te),we.unbindTexture()},this.initRenderTarget=function(b){E.get(b).__webglFramebuffer===void 0&&B.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?B.setTextureCube(b,0):b.isData3DTexture?B.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?B.setTexture2DArray(b,0):B.setTexture2D(b,0),we.unbindTexture()},this.resetState=function(){D=0,V=0,W=null,we.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),n.unpackColorSpace=$e._getUnpackColorSpace()}}const Lw=`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@400;700&display=swap');

  .lp { position:fixed; inset:0; background:#020510; overflow:hidden; cursor:pointer; font-family:'Space Grotesk',sans-serif; }

  /* Canvas */
  .lp-canvas { position:absolute; inset:0; z-index:1; }

  /* Scanlines */
  .lp-scan {
    position:absolute; inset:0; z-index:2; pointer-events:none;
    background: repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,0.07) 3px,rgba(0,0,0,0.07) 4px);
  }

  /* Vignette */
  .lp-vig {
    position:absolute; inset:0; z-index:3; pointer-events:none;
    background: radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(2,5,16,0.85) 100%);
  }

  /* ── Content ── */
  .lp-content {
    position:absolute; inset:0; z-index:10; pointer-events:none;
    display:flex; flex-direction:column; align-items:center; justify-content:center;
    gap:0;
  }

  /* Eden Care eyebrow */
  .lp-eyebrow {
    font-family:'Space Mono',monospace;
    font-size:10px; font-weight:700; letter-spacing:6px; text-transform:uppercase;
    color:#ef4444; margin-bottom:20px;
    text-shadow: 0 0 20px rgba(239,68,68,0.8), 0 0 40px rgba(239,68,68,0.4);
    animation: lp-fadein 1s ease 0.2s both;
  }

  /* Main title */
  .lp-title {
    font-family:'Space Grotesk',sans-serif;
    font-size: clamp(72px,12vw,160px);
    font-weight:700; line-height:0.9;
    letter-spacing:-0.04em;
    color:#ffffff;
    position:relative;
    animation: lp-fadein 0.8s ease 0.4s both;
    margin-bottom:4px;
  }
  .lp-title-ginja { display:inline-block; position:relative; }
  .lp-title-ginja::after {
    content:'GINJA';
    position:absolute; inset:0;
    color:#22c55e;
    clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
    text-shadow: 0 0 60px rgba(34,197,94,0.6);
    animation: lp-glitch 4s infinite;
  }
  .lp-title-ai {
    display:inline-block;
    color:#22c55e;
    text-shadow: 0 0 40px rgba(34,197,94,0.5), 0 0 80px rgba(34,197,94,0.2);
    margin-left:16px;
  }

  @keyframes lp-glitch {
    0%,90%,100% { clip-path:polygon(0 0,100% 0,100% 50%,0 50%); transform:none; color:#22c55e; }
    91% { clip-path:polygon(0 20%,100% 20%,100% 65%,0 65%); transform:translate(-3px,1px); color:#ef4444; }
    93% { clip-path:polygon(0 0,100% 0,100% 40%,0 40%); transform:translate(3px,-1px); color:#22c55e; }
    95% { clip-path:polygon(0 55%,100% 55%,100% 100%,0 100%); transform:translate(-2px,2px); color:#ffffff; }
    97% { clip-path:polygon(0 0,100% 0,100% 50%,0 50%); transform:none; color:#22c55e; }
  }

  /* Subtitle */
  .lp-sub {
    font-family:'Space Mono',monospace;
    font-size:clamp(11px,1.5vw,15px); font-weight:400; letter-spacing:4px;
    text-transform:uppercase; color:rgba(255,255,255,0.35);
    margin-top:20px; margin-bottom:48px;
    animation: lp-fadein 1s ease 0.7s both;
  }
  .lp-sub span { color:rgba(34,197,94,0.7); }

  /* Stats row */
  .lp-stats {
    display:flex; gap:40px; margin-bottom:52px;
    animation: lp-fadein 1s ease 0.9s both;
  }
  .lp-stat { text-align:center; }
  .lp-stat-val {
    font-family:'Space Mono',monospace;
    font-size:22px; font-weight:700; color:#22c55e;
    text-shadow: 0 0 20px rgba(34,197,94,0.5);
    display:block;
  }
  .lp-stat-lbl {
    font-size:9px; letter-spacing:2px; text-transform:uppercase;
    color:rgba(255,255,255,0.25); margin-top:2px; display:block;
  }
  .lp-stat-div { width:1px; background:rgba(255,255,255,0.08); align-self:stretch; }

  /* CTA button */
  .lp-cta {
    pointer-events:all;
    position:relative; overflow:hidden;
    padding:16px 48px; border-radius:4px;
    background: transparent;
    border: 1px solid rgba(34,197,94,0.4);
    color:#22c55e; font-family:'Space Mono',monospace;
    font-size:12px; font-weight:700; letter-spacing:4px; text-transform:uppercase;
    cursor:pointer;
    transition: all 0.3s ease;
    text-shadow: 0 0 12px rgba(34,197,94,0.4);
    box-shadow: 0 0 30px rgba(34,197,94,0.08), inset 0 0 30px rgba(34,197,94,0.04);
    animation: lp-fadein 1s ease 1.1s both;
  }
  .lp-cta::before {
    content:''; position:absolute; inset:0;
    background: linear-gradient(90deg, transparent, rgba(34,197,94,0.08), transparent);
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }
  .lp-cta:hover { border-color:#22c55e; box-shadow: 0 0 50px rgba(34,197,94,0.2), inset 0 0 30px rgba(34,197,94,0.08); }
  .lp-cta:hover::before { transform:translateX(100%); }
  .lp-cta-dot {
    display:inline-block; width:7px; height:7px; border-radius:50%;
    background:#22c55e; margin-right:12px; vertical-align:middle;
    box-shadow:0 0 8px #22c55e;
    animation:lp-pulse 1.4s ease-in-out infinite;
  }
  @keyframes lp-pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(0.6)} }

  /* Corner HUD elements */
  .lp-hud-tl, .lp-hud-tr, .lp-hud-bl, .lp-hud-br {
    position:absolute; z-index:10; pointer-events:none;
    font-family:'Space Mono',monospace;
    font-size:8px; letter-spacing:1.5px; text-transform:uppercase;
    color:rgba(255,255,255,0.18);
    animation: lp-fadein 2s ease 1.5s both;
  }
  .lp-hud-tl { top:24px; left:28px; }
  .lp-hud-tr { top:24px; right:28px; text-align:right; }
  .lp-hud-bl { bottom:24px; left:28px; }
  .lp-hud-br { bottom:24px; right:28px; text-align:right; }
  .lp-hud-green { color:rgba(34,197,94,0.5); }
  .lp-hud-red   { color:rgba(239,68,68,0.5); }

  /* Fade transition */
  .lp-fade { position:absolute; inset:0; z-index:100; background:#020510; opacity:0; pointer-events:none; transition:opacity 0.7s ease; }
  .lp-fade.on { opacity:1; pointer-events:all; }

  @keyframes lp-fadein { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:none} }
`;function Dw({onEnter:t}){const e=se.useRef(null),n=se.useRef(null),[i,r]=se.useState(!1);function s(){var o;i||(r(!0),(o=n.current)==null||o.classList.add("on"),setTimeout(t,700))}return se.useEffect(()=>{const o=e.current;if(!o)return;const a=o.offsetWidth,l=o.offsetHeight,c=new gv({antialias:!0,alpha:!1});c.setPixelRatio(Math.min(devicePixelRatio,2)),c.setSize(a,l),c.setClearColor(132368,1),c.outputColorSpace=vn,o.appendChild(c.domElement);const f=new Zx,h=new _n(60,a/l,.1,500);h.position.set(0,0,22);const d=new fo;f.add(d);const m=4,g=220,M=3.8,x=18,u=[],p=[];for(let te=0;te<g;te++){const G=te/(g-1),ee=G*Math.PI*2*m,re=(G-.5)*x;u.push(new U(Math.cos(ee)*M,re,Math.sin(ee)*M)),p.push(new U(Math.cos(ee+Math.PI)*M,re,Math.sin(ee+Math.PI)*M))}function v(te,G){const ee=new sv(te),re=new kh(ee,g*2,.06,6,!1),Fe=new sr({color:G});return new Mn(re,Fe)}d.add(v(u,2278750)),d.add(v(p,15680580));const _=36,T=new jo({color:3359061,transparent:!0,opacity:.6});for(let te=0;te<_;te++){const G=te/(_-1),ee=Math.floor(G*(g-1)),re=new Mt().setFromPoints([u[ee],p[ee]]);d.add(new Im(re,T))}const A=new ql(.14,8,8),R=new ql(.14,8,8),y=new sr({color:2278750}),w=new sr({color:15680580}),F=60;for(let te=0;te<F;te++){const G=Math.floor(te/F*g),ee=new Mn(A,y);ee.position.copy(u[G]),d.add(ee);const re=new Mn(R,w);re.position.copy(p[G]),d.add(re)}const D=900,V=new Float32Array(D*3),W=new Float32Array(D*3);for(let te=0;te<D;te++){V[te*3]=(Math.random()-.5)*80,V[te*3+1]=(Math.random()-.5)*60,V[te*3+2]=(Math.random()-.5)*40-10;const G=Math.random()>.5;W[te*3]=G?.13:.94,W[te*3+1]=G?.77:.27,W[te*3+2]=G?.37:.27}const j=new Mt;j.setAttribute("position",new hn(V,3)),j.setAttribute("color",new hn(W,3)),f.add(new wf(j,new $l({size:.08,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.5})));const z=40,P=3,N=[];for(let te=-z;te<=z;te+=P)N.push(new U(-z,-12,te),new U(z,-12,te)),N.push(new U(te,-12,-z),new U(te,-12,z));f.add(new Im(new Mt().setFromPoints(N),new jo({color:993818,transparent:!0,opacity:.6})));const L={x:0,y:0},O=te=>{L.x=(te.clientX/innerWidth-.5)*2,L.y=(te.clientY/innerHeight-.5)*2};window.addEventListener("mousemove",O);const $=()=>{h.aspect=o.offsetWidth/o.offsetHeight,h.updateProjectionMatrix(),c.setSize(o.offsetWidth,o.offsetHeight)};window.addEventListener("resize",$);let Z,ie=performance.now(),Ae=0;function We(){Z=requestAnimationFrame(We);const te=performance.now();Ae+=Math.min((te-ie)/1e3,.05),ie=te,d.rotation.y=Ae*.22+L.x*.3,d.rotation.x=L.y*.12,d.position.y=Math.sin(Ae*.4)*.4,h.position.x+=(L.x*2-h.position.x)*.03,h.position.y+=(-L.y*1.5-h.position.y)*.03,h.lookAt(0,0,0);const G=j.attributes.position.array;for(let ee=0;ee<D;ee++)G[ee*3+1]+=.015,G[ee*3+1]>30&&(G[ee*3+1]=-30);j.attributes.position.needsUpdate=!0,c.render(f,h)}return We(),()=>{cancelAnimationFrame(Z),window.removeEventListener("mousemove",O),window.removeEventListener("resize",$),c.dispose(),o.contains(c.domElement)&&o.removeChild(c.domElement)}},[]),S.jsxs(S.Fragment,{children:[S.jsx("style",{children:Lw}),S.jsxs("div",{className:"lp",onClick:s,children:[S.jsx("div",{ref:e,className:"lp-canvas"}),S.jsx("div",{className:"lp-scan"}),S.jsx("div",{className:"lp-vig"}),S.jsxs("div",{className:"lp-hud-tl",children:[S.jsx("div",{className:"lp-hud-red",children:"■ Eden Care Medical AI"}),S.jsx("div",{style:{marginTop:4},children:"System v2.4.1 — Active"})]}),S.jsxs("div",{className:"lp-hud-tr",children:[S.jsx("div",{className:"lp-hud-green",children:"● Pipeline Ready"}),S.jsx("div",{style:{marginTop:4},children:"SHA-256 Secured"})]}),S.jsx("div",{className:"lp-hud-bl",children:"7 AI Modules · 8 Domains"}),S.jsx("div",{className:"lp-hud-br",children:"Click anywhere to enter"}),S.jsxs("div",{className:"lp-content",children:[S.jsx("div",{className:"lp-eyebrow",children:"by Eden Care"}),S.jsxs("div",{className:"lp-title",children:[S.jsx("span",{className:"lp-title-ginja",children:"GINJA"}),S.jsx("span",{className:"lp-title-ai",children:"AI"})]}),S.jsxs("div",{className:"lp-sub",children:["Medical Code ",S.jsx("span",{children:"Intelligence"})," · Insurance Catalog Pipeline"]}),S.jsxs("div",{className:"lp-stats",children:[S.jsxs("div",{className:"lp-stat",children:[S.jsx("span",{className:"lp-stat-val",children:"7"}),S.jsx("span",{className:"lp-stat-lbl",children:"AI Modules"})]}),S.jsx("div",{className:"lp-stat-div"}),S.jsxs("div",{className:"lp-stat",children:[S.jsx("span",{className:"lp-stat-val",children:"8"}),S.jsx("span",{className:"lp-stat-lbl",children:"Domains"})]}),S.jsx("div",{className:"lp-stat-div"}),S.jsxs("div",{className:"lp-stat",children:[S.jsx("span",{className:"lp-stat-val",children:"99%"}),S.jsx("span",{className:"lp-stat-lbl",children:"Accuracy"})]}),S.jsx("div",{className:"lp-stat-div"}),S.jsxs("div",{className:"lp-stat",children:[S.jsx("span",{className:"lp-stat-val",children:"256"}),S.jsx("span",{className:"lp-stat-lbl",children:"Bit Secure"})]})]}),S.jsxs("button",{className:"lp-cta",onClick:o=>{o.stopPropagation(),s()},children:[S.jsx("span",{className:"lp-cta-dot"}),"ENTER SYSTEM"]})]}),S.jsx("div",{ref:n,className:"lp-fade"})]})]})}const xv="Muthigani",Nw=[{username:"Muthigani",passwordHash:"c62b2152b8513d4c0c03ca8ba2716a45dc7e5227c1b051e50c765c8c97eddf25",role:"SUPER_ADMIN"}],gl="eden_session_v2",zh="eden_login_attempts",xl=5,Rf=15*60*1e3,vv="eden_users_v2";function Bh(){try{const t=localStorage.getItem(vv);return t?JSON.parse(atob(t)):[]}catch{return[]}}function _v(t){try{const e=t.filter(n=>n.username.toLowerCase()!==xv.toLowerCase());localStorage.setItem(vv,btoa(JSON.stringify(e)))}catch{}}function yc(){return[...Nw,...Bh()]}function Iw(t){return yc().find(e=>e.username.toLowerCase()===t.trim().toLowerCase())}function Uw(t,e){if(yc().some(r=>r.username.toLowerCase()===t.trim().toLowerCase()))throw new Error(`Username "${t}" is already taken.`);const i=Bh();i.push({username:t.trim(),passwordHash:e,role:"USER"}),_v(i)}function Fw(t){if(t.toLowerCase()===xv.toLowerCase())throw new Error("Cannot remove the super admin.");const e=Bh().filter(n=>n.username.toLowerCase()!==t.toLowerCase());_v(e)}async function Ow(t){const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return Array.from(new Uint8Array(e)).map(n=>n.toString(16).padStart(2,"0")).join("")}function yv(){const t=se.useRef(null);return se.useEffect(()=>{const e=t.current;if(!e)return;const n=new gv({antialias:!0,alpha:!1});n.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),n.setSize(window.innerWidth,window.innerHeight),n.setClearColor(16054008,1),e.appendChild(n.domElement);const i=new Zx;i.fog=new Uh(16054008,.038);const r=new _n(60,window.innerWidth/window.innerHeight,.1,200);r.position.set(0,0,28);const s=new sr({color:1483594,wireframe:!0}),o=new sr({color:14427686,wireframe:!0}),a=new sr({color:13421772,wireframe:!0}),l=[],c=[[new br(2.2,0),s,[-14,5,-5],1],[new br(1.4,0),o,[12,-3,-8],.8],[new br(3,0),a,[-6,-8,-15],.5],[new wo(1.8,0),s,[16,7,-10],.9],[new wo(2.5,0),a,[0,10,-12],.4],[new Kl(2,0),s,[-18,-5,-8],.7],[new Kl(1.2,0),o,[8,-9,-6],1.1],[new br(1.6,1),a,[-10,12,-18],.3],[new wo(1,0),s,[20,-8,-12],.6],[new br(.8,0),o,[-4,-12,-4],1.3],[new Jl(1.5,.06,6,20),s,[-20,8,-6],.5],[new Jl(2.2,.06,5,16),a,[6,14,-20],.3]];for(const[z,P,N,L]of c){const O=new Mn(z,P);O.position.set(...N),O.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),i.add(O),l.push({mesh:O,rx:(Math.random()-.5)*.006*L,ry:(Math.random()-.5)*.008*L,rz:(Math.random()-.5)*.004*L,drift:new U((Math.random()-.5)*.004,(Math.random()-.5)*.003,0)})}function f(){const z=[];for(let L=0;L<400;L++){const O=L/400*40-20;let $=0;const Z=(O%5+5)%5;Z<.2?$=Math.sin(Z*Math.PI/.2)*.3:Z<.6?$=0:Z<.65?$=-.5:Z<.72?$=Math.sin((Z-.65)*Math.PI/.07)*3.5:Z<.78?$=-.4:Z<1.5?$=Math.sin((Z-.78)*Math.PI/.72)*.6:$=0,z.push(new U(O,$-8,-2))}return new Mt().setFromPoints(z)}const h=new Ef(f(),new jo({color:1483594,linewidth:1,transparent:!0,opacity:.5}));i.add(h);function d(){const z=[];for(let L=0;L<300;L++){const O=L/300*40-20,$=(O%4+4)%4;let Z=0;$<.1?Z=Math.sin($*Math.PI/.1)*.2:$<.4?Z=0:$<.45?Z=-.3:$<.5?Z=Math.sin(($-.45)*Math.PI/.05)*2.2:$<.55?Z=-.25:$<1.2?Z=Math.sin(($-.55)*Math.PI/.65)*.4:Z=0,z.push(new U(O,Z+9,-8))}return new Mt().setFromPoints(z)}const m=new Ef(d(),new jo({color:14427686,linewidth:1,transparent:!0,opacity:.3}));i.add(m);const g=120,M=new Float32Array(g*3);for(let z=0;z<g;z++)M[z*3]=(Math.random()-.5)*60,M[z*3+1]=(Math.random()-.5)*40,M[z*3+2]=(Math.random()-.5)*30-10;const x=new Mt;x.setAttribute("position",new hn(M,3));const u=new wf(x,new $l({color:1483594,size:.12,sizeAttenuation:!0,transparent:!0,opacity:.5}));i.add(u);const p=200,v=new Float32Array(p*3);for(let z=0;z<p;z++)v[z*3]=(Math.random()-.5)*70,v[z*3+1]=(Math.random()-.5)*50,v[z*3+2]=(Math.random()-.5)*40-15;const _=new Mt;_.setAttribute("position",new hn(v,3));const T=new wf(_,new $l({color:11184810,size:.06,sizeAttenuation:!0,transparent:!0,opacity:.3}));i.add(T);const A={x:0,y:0},R={x:0,y:0},y=z=>{A.x=(z.clientX/window.innerWidth-.5)*2,A.y=(z.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",y);let w=0;const F=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",F);let D,V=0,W=performance.now();function j(){D=requestAnimationFrame(j);const z=performance.now();V+=(z-W)/1e3,W=z;for(const P of l)P.mesh.rotation.x+=P.rx,P.mesh.rotation.y+=P.ry,P.mesh.rotation.z+=P.rz,P.mesh.position.x+=P.drift.x,P.mesh.position.y+=P.drift.y,P.mesh.position.x>25&&(P.drift.x*=-1),P.mesh.position.x<-25&&(P.drift.x*=-1),P.mesh.position.y>18&&(P.drift.y*=-1),P.mesh.position.y<-18&&(P.drift.y*=-1);w-=.015,h.position.x=w%5,m.position.x=w*.7%4,u.rotation.y=V*.04,T.rotation.y=-V*.025,R.x+=(A.y*.04-R.x)*.04,R.y+=(A.x*.06-R.y)*.04,i.rotation.x=R.x,i.rotation.y=R.y,n.render(i,r)}return j(),()=>{cancelAnimationFrame(D),window.removeEventListener("mousemove",y),window.removeEventListener("resize",F),n.dispose(),e.contains(n.domElement)&&e.removeChild(n.domElement)}},[]),S.jsx("div",{ref:t,style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"}})}async function kw(t){const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return Array.from(new Uint8Array(e)).map(n=>n.toString(16).padStart(2,"0")).join("")}function Zl(){try{return JSON.parse(localStorage.getItem(zh)||'{"attempts":[],"lockedUntil":0}')}catch{return{attempts:[],lockedUntil:0}}}function qa(){const t=Zl(),e=Date.now();return t.lockedUntil>e?{locked:!0,remainingMs:t.lockedUntil-e}:{locked:!1,remainingMs:0}}function zw(){const t=Zl(),e=Date.now();t.attempts=[...(t.attempts||[]).filter(n=>e-n<Rf),e],t.attempts.length>=xl&&(t.lockedUntil=e+Rf),localStorage.setItem(zh,JSON.stringify(t))}function Bw(){localStorage.removeItem(zh)}function ug(t){const e=Math.ceil(t/1e3);return e>=60?Math.ceil(e/60)+"m":e+"s"}const Vw=`
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
`;function Hw({onLogin:t}){const[e,n]=se.useState(""),[i,r]=se.useState(""),[s,o]=se.useState(!1),[a,l]=se.useState(""),[c,f]=se.useState(!1),[h,d]=se.useState(0),[m,g]=se.useState(0),[M,x]=se.useState(!1),u=se.useRef(null);se.useEffect(()=>{const R=setInterval(()=>{const{locked:D,remainingMs:V}=qa();d(D?V:0)},500),y=Zl();g((y.attempts||[]).length);const{locked:w,remainingMs:F}=qa();return w&&d(F),()=>clearInterval(R)},[]);function p(R){const y=u.current;if(!y)return;const w=y.getBoundingClientRect(),F=w.left+w.width/2,D=w.top+w.height/2,V=(R.clientX-F)/(w.width/2),W=(R.clientY-D)/(w.height/2);y.style.transform=`perspective(900px) rotateY(${V*5}deg) rotateX(${-W*4}deg) scale3d(1.01,1.01,1.01)`}function v(){const R=u.current;R&&(R.style.transform="perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)")}async function _(R){R.preventDefault(),l("");const{locked:y}=qa();if(!y){if(!e.trim()||!i){l("Enter both fields.");return}f(!0);try{const w=await kw(i),F=Iw(e);if(F&&F.passwordHash===w){Bw();const D=btoa((navigator.userAgent+window.screen.width+window.screen.height).slice(0,200));sessionStorage.setItem(gl,JSON.stringify({username:F.username,role:F.role,loginTime:new Date().toISOString(),fingerprint:D})),t(F.username,F.role)}else{zw();const D=Zl(),V=xl-D.attempts.length,{locked:W}=qa();g(D.attempts.length),l(W?`Locked for ${ug(Rf)}.`:`Incorrect credentials.${V>0?` ${V} left.`:""}`),r(""),x(!0),setTimeout(()=>x(!1),450)}}finally{f(!1)}}}const T=h>0,A=Math.min(m,xl);return S.jsxs(S.Fragment,{children:[S.jsx("style",{children:Vw}),S.jsx(yv,{}),S.jsx("div",{style:{position:"fixed",inset:0,zIndex:1,pointerEvents:"none",background:"rgba(244,246,248,0.55)"}}),S.jsxs("div",{style:{minHeight:"100vh",display:"flex",position:"relative",zIndex:2},children:[S.jsxs("div",{style:{flex:"0 0 48%",display:"flex",flexDirection:"column",justifyContent:"center",padding:"60px 56px",borderRight:"1px solid rgba(17,17,17,0.08)"},children:[S.jsx("div",{className:"ls-cross ls-line-1",style:{marginBottom:32},children:S.jsxs("svg",{width:"52",height:"52",viewBox:"0 0 52 52",fill:"none",children:[S.jsx("rect",{x:"20",y:"0",width:"12",height:"52",rx:"3",fill:"#16a34a"}),S.jsx("rect",{x:"0",y:"20",width:"52",height:"12",rx:"3",fill:"#16a34a"})]})}),S.jsx("div",{className:"ls-line-2",style:{fontSize:11,fontWeight:700,color:"#16a34a",letterSpacing:"4px",textTransform:"uppercase",marginBottom:16},children:"Medical AI Platform"}),S.jsxs("h1",{className:"ls-line-3",style:{fontSize:"clamp(40px, 5.5vw, 68px)",fontWeight:900,lineHeight:.95,letterSpacing:"-0.04em",color:"#111111",marginBottom:8},children:["GINJA",S.jsx("br",{}),S.jsx("span",{style:{color:"#16a34a"},children:"AI"})]}),S.jsx("div",{className:"ls-line-3",style:{fontSize:15,fontWeight:600,color:"#dc2626",letterSpacing:"2px",textTransform:"uppercase",marginBottom:20},children:"by Eden Care"}),S.jsx("div",{className:"ls-line-3",style:{width:60,height:3,background:"linear-gradient(90deg, #16a34a, #22c55e)",borderRadius:2,marginBottom:24}}),S.jsx("p",{className:"ls-line-4",style:{fontSize:14,color:"rgba(17,17,17,0.45)",lineHeight:1.7,maxWidth:340,marginBottom:40},children:"Medical code intelligence pipeline. Automated processing of hospital billing catalogs for insurance claims adjudication."}),S.jsx("div",{className:"ls-line-5",style:{display:"flex",gap:32},children:[["7","AI Modules"],["M4","DNA Engine"],["SHA-256","Security"]].map(([R,y])=>S.jsxs("div",{children:[S.jsx("div",{style:{fontSize:22,fontWeight:900,color:"#111",letterSpacing:"-0.03em"},children:R}),S.jsx("div",{style:{fontSize:10,color:"#16a34a",letterSpacing:"1.5px",textTransform:"uppercase",marginTop:3,fontWeight:600},children:y})]},y))})]}),S.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:"40px 48px"},children:S.jsxs("div",{ref:u,className:`ls-tilt${M?" ls-shake":""}`,onMouseMove:p,onMouseLeave:v,style:{width:"100%",maxWidth:400,background:"#ffffff",border:"1px solid rgba(17,17,17,0.1)",borderRadius:20,overflow:"hidden",boxShadow:"0 24px 80px rgba(0,0,0,0.12), 0 4px 24px rgba(0,0,0,0.06)",position:"relative"},children:[S.jsx("div",{style:{height:4,background:"linear-gradient(90deg, #16a34a, #22c55e)"}}),S.jsxs("div",{style:{padding:"36px 36px 32px"},children:[S.jsxs("div",{style:{marginBottom:32},children:[S.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#16a34a",letterSpacing:"3px",textTransform:"uppercase",marginBottom:8},children:"Secure Access"}),S.jsx("div",{style:{fontSize:22,fontWeight:800,color:"#111",letterSpacing:"-0.03em"},children:"Sign In"})]}),T&&S.jsxs("div",{style:{background:"rgba(220,38,38,0.06)",border:"1px solid rgba(220,38,38,0.2)",borderRadius:12,padding:"14px 16px",marginBottom:24,display:"flex",alignItems:"center",gap:12},children:[S.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:"#dc2626",flexShrink:0}}),S.jsxs("div",{children:[S.jsx("div",{style:{fontWeight:700,color:"#dc2626",fontSize:13},children:"Access Suspended"}),S.jsxs("div",{style:{fontSize:12,color:"rgba(220,38,38,0.7)",marginTop:2},children:["Retry in ",S.jsx("strong",{style:{color:"#dc2626"},children:ug(h)})]})]})]}),S.jsxs("form",{onSubmit:_,style:{display:"flex",flexDirection:"column",gap:18},children:[S.jsxs("div",{children:[S.jsx("label",{style:{display:"block",fontSize:10,fontWeight:700,color:"rgba(17,17,17,0.4)",letterSpacing:"2px",textTransform:"uppercase",marginBottom:8},children:"Identifier"}),S.jsx("input",{className:"ls-input",type:"text",value:e,onChange:R=>n(R.target.value),disabled:T||c,autoComplete:"username",placeholder:"Username",style:{border:`1.5px solid ${a&&!T?"rgba(220,38,38,0.4)":"rgba(17,17,17,0.15)"}`}})]}),S.jsxs("div",{children:[S.jsx("label",{style:{display:"block",fontSize:10,fontWeight:700,color:"rgba(17,17,17,0.4)",letterSpacing:"2px",textTransform:"uppercase",marginBottom:8},children:"Passcode"}),S.jsxs("div",{style:{position:"relative"},children:[S.jsx("input",{className:"ls-input",type:s?"text":"password",value:i,onChange:R=>r(R.target.value),disabled:T||c,autoComplete:"current-password",placeholder:"••••••••••",style:{border:`1.5px solid ${a&&!T?"rgba(220,38,38,0.4)":"rgba(17,17,17,0.15)"}`,paddingRight:44}}),S.jsx("button",{type:"button",onClick:()=>o(R=>!R),tabIndex:-1,style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"rgba(17,17,17,0.3)",fontSize:14,padding:4},children:s?"🙈":"👁"})]})]}),A>0&&!T&&S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[S.jsx("span",{style:{fontSize:10,color:"rgba(17,17,17,0.3)",letterSpacing:"1.5px",textTransform:"uppercase"},children:"Attempts"}),S.jsx("div",{style:{display:"flex",gap:5},children:Array.from({length:xl}).map((R,y)=>S.jsx("div",{style:{width:7,height:7,borderRadius:"50%",transition:"all 0.2s",background:y<A?"#dc2626":"rgba(17,17,17,0.1)",boxShadow:y<A?"0 0 6px rgba(220,38,38,0.5)":"none"}},y))})]}),a&&!T&&S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",borderRadius:10,background:"rgba(220,38,38,0.05)",border:"1px solid rgba(220,38,38,0.2)",fontSize:12,color:"#dc2626"},children:[S.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:"#dc2626",flexShrink:0}}),a]}),S.jsx("button",{className:"btn-green",type:"submit",disabled:T||c||!e.trim()||!i,style:{padding:"14px",borderRadius:12,fontSize:12,letterSpacing:"3px",marginTop:4},children:c?S.jsxs("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10},children:[S.jsx("span",{style:{width:14,height:14,borderRadius:"50%",border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"#fff",display:"inline-block",animation:"lsSpin 0.8s linear infinite"}}),"VERIFYING"]}):T?"LOCKED":"AUTHORIZE ACCESS"})]}),S.jsxs("div",{style:{marginTop:24,paddingTop:20,borderTop:"1px solid rgba(17,17,17,0.07)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[S.jsx("span",{style:{fontSize:9,color:"rgba(17,17,17,0.25)",letterSpacing:"1px",textTransform:"uppercase"},children:"SHA-256 · Rate Limited"}),S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[S.jsx("div",{className:"live-dot",style:{width:5,height:5}}),S.jsx("span",{style:{fontSize:9,color:"rgba(22,163,74,0.7)",letterSpacing:"1px",textTransform:"uppercase"},children:"Secured"})]})]})]})]})})]})]})}const Gw=se.lazy(()=>_t(()=>import("./M0PreScan-BA-tck_L.js"),__vite__mapDeps([0,1,2]))),Ww=se.lazy(()=>_t(()=>import("./M1PHIScrubber-YkSOGB62.js"),__vite__mapDeps([3,1]))),jw=se.lazy(()=>_t(()=>import("./M2TriageRouter-Bm7XwYYI.js"),__vite__mapDeps([4,1]))),Xw=se.lazy(()=>_t(()=>import("./M3AliasEngine-D-jF6WjV.js"),__vite__mapDeps([5,1,6]))),Yw=se.lazy(()=>_t(()=>import("./M4ConfidenceThreshold-DaMAY3Y0.js"),__vite__mapDeps([7,1,6,2]))),$w=se.lazy(()=>_t(()=>import("./M5DefinitionEngine-3sFys_2X.js"),__vite__mapDeps([8,1]))),qw=se.lazy(()=>_t(()=>import("./M6DeltaReport-DxgK6osZ.js"),__vite__mapDeps([9,1]))),Kw=se.lazy(()=>_t(()=>import("./M7AuditLog-B-57k9uo.js"),__vite__mapDeps([10,1]))),Jw=`
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
`;function Zw({id:t,onComplete:e}){switch(t){case"M0":return S.jsx(Gw,{onComplete:e});case"M1":return S.jsx(Ww,{onComplete:e,prefillData:null});case"M2":return S.jsx(jw,{onComplete:e,prefillData:null});case"M3":return S.jsx(Xw,{onComplete:e,prefillData:null});case"M4":return S.jsx(Yw,{onComplete:e,prefillData:null});case"M5":return S.jsx($w,{onComplete:e,prefillData:null});case"M6":return S.jsx(qw,{onComplete:e,prefillData:null});case"M7":return S.jsx(Kw,{});default:return S.jsx("div",{style:{padding:40,color:"#999"},children:"Module not found."})}}function Qw({moduleId:t,moduleLabel:e,moduleColor:n,onClose:i,onComplete:r,prefillData:s}){return se.useEffect(()=>{const o=a=>{a.key==="Escape"&&i()};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[i]),S.jsxs(S.Fragment,{children:[S.jsx("style",{children:Jw}),S.jsx("div",{className:"mo-backdrop",onClick:i}),S.jsxs("div",{className:"mo-sheet",onClick:o=>o.stopPropagation(),children:[S.jsxs("div",{className:"mo-header",children:[S.jsxs("div",{className:"mo-header-left",children:[S.jsx("div",{className:"mo-color-dot",style:{background:n}}),S.jsx("span",{className:"mo-module-id",style:{color:n},children:t}),S.jsx("span",{className:"mo-module-name",children:e})]}),S.jsx("button",{className:"mo-close",onClick:i,title:"Close (Esc)",children:"✕"})]}),S.jsx("div",{className:"mo-body",children:S.jsx(se.Suspense,{fallback:S.jsx("div",{className:"mo-loader",children:"Loading module…"}),children:S.jsx(Zw,{id:t,onComplete:r??(()=>{})})})})]})]})}const Du=[{id:"M0",label:"Pre-Scan",icon:"⬡",desc:"File upload & master catalog validation",color:"#a78bfa",glow:"rgba(167,139,250,0.25)"},{id:"M1",label:"PHI Scrubber",icon:"⬡",desc:"Detect & redact patient identifiers",color:"#f87171",glow:"rgba(248,113,113,0.25)"},{id:"M2",label:"Triage Router",icon:"⬡",desc:"AI classification across 8 domains",color:"#38bdf8",glow:"rgba(56,189,248,0.25)"},{id:"M3",label:"Alias Engine",icon:"⬡",desc:"Resolve alternate & legacy code names",color:"#fb923c",glow:"rgba(251,146,60,0.25)"},{id:"M4",label:"Confidence Score",icon:"⬡",desc:"DNA matching & approval staging",color:"#4ade80",glow:"rgba(74,222,128,0.25)"},{id:"M5",label:"Definition Engine",icon:"⬡",desc:"Enrich codes with clinical definitions",color:"#22d3ee",glow:"rgba(34,211,238,0.25)"},{id:"M6",label:"Delta Report",icon:"⬡",desc:"Compare & export changes vs master",color:"#818cf8",glow:"rgba(129,140,248,0.25)"},{id:"M7",label:"Audit Log",icon:"⬡",desc:"Persistent cross-session audit trail",color:"#94a3b8",glow:"rgba(148,163,184,0.25)"}];function Ka(t,e=1400){const[n,i]=se.useState(0);return se.useEffect(()=>{let r;const s=a=>{r||(r=a);const l=Math.min((a-r)/e,1),c=1-Math.pow(1-l,3);i(Math.round(c*t)),l<1&&requestAnimationFrame(s)},o=requestAnimationFrame(s);return()=>cancelAnimationFrame(o)},[t]),n}function eT({active:t}){const e=se.useRef(null);return se.useEffect(()=>{const n=e.current;if(!n)return;const i=n.getContext("2d");let r,s=0;function o(){r=requestAnimationFrame(o),s+=.012;const a=n.width,l=n.height,c=a/2,f=l/2;i.clearRect(0,0,a,l),i.strokeStyle=t?"rgba(74,222,128,0.15)":"rgba(100,116,139,0.12)",i.lineWidth=1,i.beginPath(),i.arc(c,f,c*.92,0,Math.PI*2),i.stroke(),i.strokeStyle=t?"rgba(74,222,128,0.1)":"rgba(100,116,139,0.08)",i.beginPath(),i.arc(c,f,c*.72,0,Math.PI*2),i.stroke(),i.strokeStyle=t?"rgba(74,222,128,0.08)":"rgba(100,116,139,0.06)",i.beginPath(),i.arc(c,f,c*.52,0,Math.PI*2),i.stroke();const h=c*.92,d=t?["#4ade80","#f87171","#38bdf8","#a78bfa"]:["#475569","#475569","#475569","#475569"];[0,Math.PI*.5,Math.PI,Math.PI*1.5].forEach((u,p)=>{const v=s*(p%2===0?1:-1)+u,_=c+Math.cos(v)*h,T=f+Math.sin(v)*h;i.beginPath(),i.arc(_,T,3.5,0,Math.PI*2),i.fillStyle=d[p],i.shadowBlur=t?12:0,i.shadowColor=d[p],i.fill(),i.shadowBlur=0});const m=c*.52,g=s*2.5;i.beginPath(),i.arc(c+Math.cos(g)*m,f+Math.sin(g)*m,2.5,0,Math.PI*2),i.fillStyle=t?"#22d3ee":"#475569",i.shadowBlur=t?10:0,i.shadowColor="#22d3ee",i.fill(),i.shadowBlur=0;const M=.5+Math.sin(s*3)*.5,x=i.createRadialGradient(c,f,0,c,f,c*.18);x.addColorStop(0,t?`rgba(74,222,128,${.3+M*.3})`:"rgba(100,116,139,0.1)"),x.addColorStop(1,"transparent"),i.beginPath(),i.arc(c,f,c*.18,0,Math.PI*2),i.fillStyle=x,i.fill(),i.strokeStyle=t?`rgba(74,222,128,${.6+M*.4})`:"rgba(100,116,139,0.3)",i.lineWidth=1.5,i.beginPath(),i.moveTo(c-12,f),i.lineTo(c+12,f),i.moveTo(c,f-12),i.lineTo(c,f+12),i.stroke()}return o(),()=>cancelAnimationFrame(r)},[t]),S.jsx("canvas",{ref:e,width:260,height:260,style:{display:"block"}})}const tT=`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Space+Mono:wght@400;700&display=swap');

  * { box-sizing:border-box; margin:0; padding:0; }

  .db {
    min-height:100vh;
    background: #070c18;
    font-family:'Space Grotesk',sans-serif;
    color:#e2e8f0;
    position:relative;
    overflow-x:hidden;
  }

  /* Subtle grid bg */
  .db::before {
    content:''; position:fixed; inset:0; pointer-events:none; z-index:0;
    background-image:
      linear-gradient(rgba(74,222,128,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(74,222,128,0.03) 1px, transparent 1px);
    background-size: 48px 48px;
  }

  /* ── Nav ──────────────────────────────────────────────────────── */
  .db-nav {
    position:sticky; top:0; z-index:100;
    background: rgba(7,12,24,0.85);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid rgba(74,222,128,0.08);
  }
  .db-nav-inner {
    max-width:1320px; margin:0 auto; padding:0 28px;
    height:56px; display:flex; align-items:center; justify-content:space-between;
  }
  .db-brand { display:flex; align-items:center; gap:14px; }
  .db-brand-icon {
    width:34px; height:34px; border-radius:8px;
    background: linear-gradient(135deg,#16a34a,#22c55e);
    display:flex; align-items:center; justify-content:center;
    box-shadow: 0 0 16px rgba(34,197,94,0.4);
    flex-shrink:0;
  }
  .db-brand-name {
    font-family:'Space Grotesk',sans-serif;
    font-size:20px; font-weight:700; letter-spacing:-0.04em; color:#f8fafc;
  }
  .db-brand-name em { color:#4ade80; font-style:normal; }
  .db-brand-by { font-size:9px; letter-spacing:2px; color:rgba(248,250,252,0.25); text-transform:uppercase; margin-top:1px; }

  .db-nav-right { display:flex; align-items:center; gap:10px; }

  /* Mode toggle pill */
  .db-mode-pill {
    display:flex; align-items:center;
    background: rgba(15,23,42,0.8);
    border:1px solid rgba(255,255,255,0.07);
    border-radius:30px; padding:3px;
    cursor:pointer; gap:2px;
  }
  .db-mode-opt {
    padding:5px 14px; border-radius:24px;
    font-family:'Space Mono',monospace;
    font-size:9px; font-weight:700; letter-spacing:1.5px; text-transform:uppercase;
    color:rgba(255,255,255,0.3); transition:all 0.25s ease;
  }
  .db-mode-opt.active {
    background: rgba(74,222,128,0.15);
    color:#4ade80;
    box-shadow: 0 0 12px rgba(74,222,128,0.15);
  }
  .db-mode-opt.active-red {
    background: rgba(248,113,113,0.12);
    color:#f87171;
  }

  .db-user {
    display:flex; align-items:center; gap:8px;
    padding:6px 12px; border-radius:8px;
    background:rgba(255,255,255,0.04);
    border:1px solid rgba(255,255,255,0.07);
  }
  .db-avatar {
    width:26px; height:26px; border-radius:50%;
    background:linear-gradient(135deg,#16a34a,#22c55e);
    display:flex; align-items:center; justify-content:center;
    font-size:11px; font-weight:700; color:#fff;
    box-shadow:0 0 10px rgba(34,197,94,0.3);
  }
  .db-uname { font-size:12px; font-weight:600; color:#e2e8f0; }
  .db-role  { font-size:9px; color:rgba(255,255,255,0.25); letter-spacing:1px; text-transform:uppercase; }

  .db-btn {
    padding:6px 14px; border-radius:6px;
    font-family:'Space Mono',monospace;
    font-size:9px; font-weight:700; letter-spacing:1px; text-transform:uppercase;
    cursor:pointer; transition:all 0.2s; border:1px solid;
  }
  .db-btn-red   { background:rgba(248,113,113,0.06); color:#f87171; border-color:rgba(248,113,113,0.2); }
  .db-btn-red:hover { background:rgba(248,113,113,0.14); }
  .db-btn-purple{ background:rgba(167,139,250,0.07); color:#a78bfa; border-color:rgba(167,139,250,0.2); }
  .db-btn-purple:hover { background:rgba(167,139,250,0.14); }

  /* ── Hero ─────────────────────────────────────────────────────── */
  .db-hero {
    max-width:1320px; margin:0 auto;
    padding:40px 28px 0;
    display:grid; grid-template-columns:1fr auto; gap:32px; align-items:center;
    position:relative; z-index:1;
  }
  .db-hero-text {}
  .db-hero-eyebrow {
    font-family:'Space Mono',monospace;
    font-size:9px; font-weight:700; letter-spacing:4px; text-transform:uppercase;
    color:rgba(74,222,128,0.6); margin-bottom:12px;
  }
  .db-hero-title {
    font-size:clamp(28px,3.5vw,44px); font-weight:700;
    letter-spacing:-0.04em; line-height:1.1; color:#f8fafc;
    margin-bottom:10px;
  }
  .db-hero-title em { font-style:normal; color:#4ade80; }
  .db-hero-desc {
    font-size:13px; color:rgba(226,232,240,0.4); line-height:1.6;
    max-width:440px;
  }

  /* Status bar under title */
  .db-status-bar {
    display:flex; align-items:center; gap:20px; margin-top:20px; flex-wrap:wrap;
  }
  .db-status-dot {
    display:flex; align-items:center; gap:6px;
    font-family:'Space Mono',monospace;
    font-size:9px; letter-spacing:1px; text-transform:uppercase;
  }
  .db-dot { width:6px; height:6px; border-radius:50%; }
  .db-dot-green { background:#4ade80; box-shadow:0 0 8px #4ade80; animation:db-blink 1.5s infinite; }
  .db-dot-red   { background:#f87171; box-shadow:0 0 8px #f87171; }
  .db-dot-grey  { background:#475569; }
  @keyframes db-blink { 0%,100%{opacity:1} 50%{opacity:0.3} }

  /* Orbital canvas area */
  .db-orbital-wrap {
    position:relative; display:flex; align-items:center; justify-content:center;
    flex-shrink:0;
  }
  .db-orbital-label {
    position:absolute; bottom:-20px; left:0; right:0; text-align:center;
    font-family:'Space Mono',monospace;
    font-size:8px; letter-spacing:2px; text-transform:uppercase;
    color:rgba(255,255,255,0.15);
  }

  /* ── Stats row ────────────────────────────────────────────────── */
  .db-stats {
    max-width:1320px; margin:28px auto 0;
    padding:0 28px;
    display:grid; grid-template-columns:repeat(4,1fr); gap:12px;
    position:relative; z-index:1;
  }
  .db-stat-card {
    background:rgba(15,23,42,0.6);
    border:1px solid rgba(255,255,255,0.06);
    border-radius:12px; padding:16px 20px;
    backdrop-filter:blur(8px);
    transition:border-color 0.25s;
    position:relative; overflow:hidden;
  }
  .db-stat-card::before {
    content:''; position:absolute; top:0; left:0; right:0; height:1px;
    background:var(--sc, rgba(74,222,128,0.3));
  }
  .db-stat-card:hover { border-color:rgba(255,255,255,0.1); }
  .db-stat-lbl {
    font-family:'Space Mono',monospace;
    font-size:8px; letter-spacing:2px; text-transform:uppercase;
    color:rgba(255,255,255,0.25); margin-bottom:6px;
  }
  .db-stat-val {
    font-family:'Space Mono',monospace;
    font-size:28px; font-weight:700; line-height:1;
    color:var(--sv,#4ade80);
    text-shadow:0 0 20px var(--sv,rgba(74,222,128,0.4));
  }
  .db-stat-unit { font-size:12px; margin-left:3px; opacity:0.6; }

  /* ── Section header ───────────────────────────────────────────── */
  .db-section {
    max-width:1320px; margin:32px auto 0;
    padding:0 28px 48px;
    position:relative; z-index:1;
  }
  .db-section-head {
    display:flex; align-items:center; justify-content:space-between;
    margin-bottom:20px; padding-bottom:14px;
    border-bottom:1px solid rgba(255,255,255,0.05);
  }
  .db-section-title {
    font-family:'Space Mono',monospace;
    font-size:9px; font-weight:700; letter-spacing:3px; text-transform:uppercase;
    color:rgba(255,255,255,0.3);
  }
  .db-section-badge {
    font-family:'Space Mono',monospace;
    font-size:8px; letter-spacing:1px;
    color:rgba(74,222,128,0.5);
  }

  /* ── Module grid ──────────────────────────────────────────────── */
  .db-grid {
    display:grid;
    grid-template-columns:repeat(4,1fr);
    gap:14px;
  }
  @media(max-width:960px){ .db-grid{ grid-template-columns:repeat(2,1fr); } }
  @media(max-width:540px){ .db-grid{ grid-template-columns:1fr; } }

  .db-card {
    background:rgba(15,23,42,0.55);
    border:1px solid rgba(255,255,255,0.06);
    border-radius:14px; padding:22px;
    cursor:pointer; position:relative; overflow:hidden;
    transition:all 0.28s cubic-bezier(0.16,1,0.3,1);
    backdrop-filter:blur(10px);
  }
  .db-card::before {
    content:''; position:absolute;
    top:0; left:0; right:0; bottom:0;
    opacity:0; transition:opacity 0.3s;
    background:radial-gradient(ellipse at 50% 0%, var(--cg,rgba(74,222,128,0.12)) 0%, transparent 70%);
  }
  .db-card:hover { transform:translateY(-6px); border-color:rgba(255,255,255,0.12); }
  .db-card:hover::before { opacity:1; }

  /* top accent line */
  .db-card-line {
    position:absolute; top:0; left:20px; right:20px; height:1px;
    background:var(--cl,#4ade80);
    box-shadow: 0 0 8px var(--cl,#4ade80);
    opacity:0.5; transition:opacity 0.3s;
  }
  .db-card:hover .db-card-line { opacity:1; }

  /* hex icon */
  .db-card-hex {
    width:40px; height:40px; border-radius:10px; margin-bottom:14px;
    display:flex; align-items:center; justify-content:center;
    background:var(--cg,rgba(74,222,128,0.1));
    border:1px solid var(--cb,rgba(74,222,128,0.2));
    font-size:16px;
    transition:all 0.3s;
  }
  .db-card:hover .db-card-hex {
    box-shadow:0 0 20px var(--cg,rgba(74,222,128,0.3));
  }

  .db-card-id {
    font-family:'Space Mono',monospace;
    font-size:8px; font-weight:700; letter-spacing:2px;
    color:var(--cl,#4ade80); margin-bottom:5px; text-transform:uppercase;
  }
  .db-card-label {
    font-size:14px; font-weight:700; color:#f1f5f9;
    letter-spacing:-0.02em; margin-bottom:6px;
  }
  .db-card-desc {
    font-size:11px; color:rgba(226,232,240,0.35); line-height:1.55;
  }

  /* launch arrow */
  .db-card-launch {
    position:absolute; bottom:18px; right:18px;
    width:28px; height:28px; border-radius:8px;
    background:rgba(255,255,255,0.04); border:1px solid rgba(255,255,255,0.07);
    display:flex; align-items:center; justify-content:center;
    font-size:11px; color:rgba(255,255,255,0.2);
    opacity:0; transform:scale(0.8) translateX(4px);
    transition:all 0.25s ease;
  }
  .db-card:hover .db-card-launch { opacity:1; transform:scale(1) translateX(0); color:var(--cl,#4ade80); }

  /* Pipeline running banner */
  .db-pipeline-banner {
    max-width:1320px; margin:0 auto 0;
    padding:12px 28px 0;
    position:relative; z-index:1;
  }
  .db-pipeline-inner {
    background:rgba(74,222,128,0.06);
    border:1px solid rgba(74,222,128,0.2);
    border-radius:10px; padding:10px 18px;
    display:flex; align-items:center; gap:12px;
    font-family:'Space Mono',monospace; font-size:10px; letter-spacing:1px;
  }
`,nT={M0:"🔍",M1:"🛡",M2:"🤖",M3:"🔗",M4:"🎯",M5:"📖",M6:"📊",M7:"📋"},Nu=["M0","M1","M2","M3","M5","M4","M6","M7"];function dg({username:t,role:e,mode:n,onModeToggle:i,onLogout:r,onAdminPanel:s,userCount:o,pipelineRunning:a}){var p,v;const[l,c]=se.useState(null),[f,h]=se.useState({});function d(_,T){h(R=>({...R,[_]:T}));const A=Nu.indexOf(_);A!==-1&&A<Nu.length-1?c(Nu[A+1]):c(null)}function m(_){return _==="M1"?f.M0?{toProcess:f.M0.toProcess}:null:_==="M2"?f.M1??null:_==="M3"?f.M2??null:_==="M5"?f.M3??null:_==="M4"?f.M5??f.M3??null:_==="M6"?f.M4??null:null}const g=Ka(8,1200),M=Ka(99,1800),x=Ka(8,1e3),u=Ka(24700,2200);return S.jsxs(S.Fragment,{children:[S.jsx("style",{children:tT}),S.jsxs("div",{className:"db",children:[S.jsx("nav",{className:"db-nav",children:S.jsxs("div",{className:"db-nav-inner",children:[S.jsxs("div",{className:"db-brand",children:[S.jsx("div",{className:"db-brand-icon",children:S.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[S.jsx("rect",{x:"7.5",y:"0",width:"3",height:"18",rx:"1.5",fill:"white"}),S.jsx("rect",{x:"0",y:"7.5",width:"18",height:"3",rx:"1.5",fill:"white"})]})}),S.jsxs("div",{children:[S.jsxs("div",{className:"db-brand-name",children:["GINJA ",S.jsx("em",{children:"AI"})]}),S.jsx("div",{className:"db-brand-by",children:"by Eden Care"})]})]}),S.jsxs("div",{className:"db-nav-right",children:[S.jsxs("div",{className:"db-mode-pill",onClick:i,title:"Toggle mode",children:[S.jsx("div",{className:`db-mode-opt ${n==="auto"?"active":""}`,children:"Auto"}),S.jsx("div",{className:`db-mode-opt ${n==="manual"?"active-red":""}`,children:"Manual"})]}),s&&S.jsxs("button",{className:"db-btn db-btn-purple",onClick:s,children:["👑 Admin ",o!==void 0?`(${o})`:""]}),S.jsxs("div",{className:"db-user",children:[S.jsx("div",{className:"db-avatar",children:t[0].toUpperCase()}),S.jsxs("div",{children:[S.jsx("div",{className:"db-uname",children:t}),S.jsx("div",{className:"db-role",children:e})]})]}),S.jsx("button",{className:"db-btn db-btn-red",onClick:r,children:"Sign out"})]})]})}),S.jsxs("div",{className:"db-hero",children:[S.jsxs("div",{className:"db-hero-text",children:[S.jsx("div",{className:"db-hero-eyebrow",children:"Medical Code Intelligence Platform"}),S.jsxs("h1",{className:"db-hero-title",children:["Insurance Catalog",S.jsx("br",{}),S.jsx("em",{children:"Processing Pipeline"})]}),S.jsx("p",{className:"db-hero-desc",children:"Seven AI-powered modules process your catalog from raw upload to enriched, validated, delta-reported output — automatically or step-by-step."}),S.jsxs("div",{className:"db-status-bar",children:[S.jsxs("div",{className:"db-status-dot",children:[S.jsx("div",{className:"db-dot db-dot-green"}),S.jsx("span",{style:{color:"rgba(74,222,128,0.7)"},children:"System Online"})]}),S.jsxs("div",{className:"db-status-dot",children:[S.jsx("div",{className:"db-dot",style:{background:n==="auto"?"#4ade80":"#f87171",boxShadow:`0 0 8px ${n==="auto"?"#4ade80":"#f87171"}`}}),S.jsx("span",{style:{color:"rgba(226,232,240,0.35)"},children:n==="auto"?"Auto Pipeline":"Manual Mode"})]}),S.jsxs("div",{className:"db-status-dot",children:[S.jsx("div",{className:"db-dot db-dot-grey"}),S.jsx("span",{style:{color:"rgba(226,232,240,0.25)"},children:"SHA-256 Secured"})]})]})]}),S.jsxs("div",{className:"db-orbital-wrap",children:[S.jsx(eT,{active:n==="auto"||!!a}),S.jsx("div",{className:"db-orbital-label",children:"Pipeline Core"})]})]}),a&&S.jsx("div",{className:"db-pipeline-banner",children:S.jsxs("div",{className:"db-pipeline-inner",children:[S.jsx("div",{className:"db-dot db-dot-green",style:{width:7,height:7,flexShrink:0}}),S.jsx("span",{style:{color:"#4ade80"},children:"PIPELINE RUNNING"}),S.jsx("span",{style:{color:"rgba(255,255,255,0.25)"},children:"Processing catalog through all modules…"})]})}),S.jsx("div",{className:"db-stats",children:[{lbl:"AI Modules",val:g,unit:"",color:"#4ade80",sc:"rgba(74,222,128,0.3)"},{lbl:"Accuracy",val:M,unit:"%",color:"#38bdf8",sc:"rgba(56,189,248,0.3)"},{lbl:"Domains",val:x,unit:"",color:"#a78bfa",sc:"rgba(167,139,250,0.3)"},{lbl:"Codes Mapped",val:u,unit:"+",color:"#fb923c",sc:"rgba(251,146,60,0.3)"}].map(_=>S.jsxs("div",{className:"db-stat-card",style:{"--sc":_.sc,"--sv":_.color},children:[S.jsx("div",{className:"db-stat-lbl",children:_.lbl}),S.jsxs("div",{className:"db-stat-val",style:{color:_.color},children:[_.val.toLocaleString(),S.jsx("span",{className:"db-stat-unit",children:_.unit})]})]},_.lbl))}),S.jsxs("div",{className:"db-section",children:[S.jsxs("div",{className:"db-section-head",children:[S.jsx("div",{className:"db-section-title",children:"Pipeline Modules"}),S.jsx("div",{className:"db-section-badge",children:"8 modules · click to open"})]}),S.jsx("div",{className:"db-grid",children:Du.map(_=>S.jsxs("div",{className:"db-card",style:{"--cl":_.color,"--cg":_.glow,"--cb":_.color.replace(")",",0.25)").replace("rgb","rgba")},onClick:()=>c(_.id),children:[S.jsx("div",{className:"db-card-line"}),S.jsx("div",{className:"db-card-hex",children:nT[_.id]}),S.jsx("div",{className:"db-card-id",children:_.id}),S.jsx("div",{className:"db-card-label",children:_.label}),S.jsx("div",{className:"db-card-desc",children:_.desc}),S.jsx("div",{className:"db-card-launch",children:"↗"})]},_.id))})]})]}),l&&S.jsx(Qw,{moduleId:l,moduleLabel:((p=Du.find(_=>_.id===l))==null?void 0:p.label)||l,moduleColor:((v=Du.find(_=>_.id===l))==null?void 0:v.color)||"#4ade80",onClose:()=>c(null),onComplete:_=>d(l,_),prefillData:m(l)})]})}const Cf={gemini:"eden_api_gemini",groq:"eden_api_groq",openRouter:"eden_api_openrouter",cerebras:"eden_api_cerebras",togetherAI:"eden_api_togetherai",mistral:"eden_api_mistral",cohere:"eden_api_cohere",deepseek:"eden_api_deepseek",umls:"eden_api_umls",bioportal:"eden_api_bioportal"};function Jn(t){try{const e=localStorage.getItem(Cf[t]);if(!e)return"";try{return atob(e)}catch{return e}}catch{return""}}function iT(t,e){try{const n=e.trim();n?localStorage.setItem(Cf[t],btoa(n)):localStorage.removeItem(Cf[t])}catch{}}const rT="llama-3.3-70b-versatile",sT="https://api.groq.com/openai/v1/chat/completions",Iu=4;function oT(t){return new Promise(e=>setTimeout(e,t))}function aT(t,e){if(e){const i=parseFloat(e);if(!isNaN(i))return Math.ceil(i*1e3)+500}const n=t.match(/try again in (\d+(?:\.\d+)?)s/i);return n?Math.ceil(parseFloat(n[1])*1e3)+500:15e3}async function lT(t,e,n=1e3){var r,s,o,a;let i="";for(let l=1;l<=Iu;l++){const c=await fetch(sT,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+t},body:JSON.stringify({model:rT,messages:[{role:"user",content:e}],max_tokens:n,temperature:.1})});if(c.ok)return((o=(s=(r=(await c.json()).choices)==null?void 0:r[0])==null?void 0:s.message)==null?void 0:o.content)??"";const f=await c.text();let h=`Groq ${c.status}`;try{const d=JSON.parse(f);h+=`: ${((a=d.error)==null?void 0:a.message)??f.slice(0,200)}`}catch{h+=`: ${f.slice(0,200)}`}if(c.status===429&&l<Iu){const d=aT(f,c.headers.get("retry-after"));console.warn(`[Groq] Rate limit hit (attempt ${l}/${Iu}). Waiting ${Math.round(d/1e3)}s...`),await oT(d);continue}i=h;break}throw new Error(i||"Groq request failed after retries")}const cT="gemini-2.0-flash",Uu=3;function uT(t){const e=t.match(/retry in (\d+(?:\.\d+)?)s/i);return e?Math.ceil(parseFloat(e[1])*1e3)+500:1e4}function dT(t){return new Promise(e=>setTimeout(e,t))}async function fT(t,e,n=3e3,i=!1){var l,c,f,h,d,m;const r=`https://generativelanguage.googleapis.com/v1beta/models/${cT}:generateContent?key=${t}`,s={maxOutputTokens:n,temperature:.1};i&&(s.responseMimeType="application/json");const o=JSON.stringify({contents:[{role:"user",parts:[{text:e}]}],generationConfig:s});let a="";for(let g=1;g<=Uu;g++){const M=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:o});if(M.ok)return((d=(h=(f=(c=(l=(await M.json()).candidates)==null?void 0:l[0])==null?void 0:c.content)==null?void 0:f.parts)==null?void 0:h[0])==null?void 0:d.text)??"";const x=await M.text();let u=`Gemini ${M.status}`;try{const v=JSON.parse(x);u+=`: ${((m=v.error)==null?void 0:m.message)??x.slice(0,300)}`}catch{u+=`: ${x.slice(0,300)}`}const p=u.includes("limit: 0")||u.includes("free_tier_requests");if(M.status===429&&p)throw new Error("DAILY_QUOTA_EXHAUSTED: "+u);if(M.status===429&&g<Uu){const v=uT(u);console.warn(`[Gemini] Rate limit hit (attempt ${g}/${Uu}). Waiting ${Math.round(v/1e3)}s before retry...`),await dT(v);continue}a=u;break}throw new Error(a||"Gemini request failed after retries")}const hT="https://openrouter.ai/api/v1/chat/completions",pT=["deepseek/deepseek-r1:free","deepseek/deepseek-chat-v3-0324:free","google/gemma-3-27b-it:free","meta-llama/llama-3.3-70b-instruct:free","qwen/qwq-32b:free"];async function mT(t,e,n=2e3){var r,s,o,a;let i="";for(const l of pT)try{const c=await fetch(hT,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`,"HTTP-Referer":typeof window<"u"?window.location.origin:"https://eden-pipeline","X-Title":"Eden Care Pipeline"},body:JSON.stringify({model:l,messages:[{role:"user",content:e}],max_tokens:n,temperature:.1})});if(c.ok){const m=((o=(s=(r=(await c.json()).choices)==null?void 0:r[0])==null?void 0:s.message)==null?void 0:o.content)??"";if(m.trim())return m;throw new Error("Empty response from "+l)}const f=await c.text();let h=`OpenRouter ${c.status}`;try{h+=": "+(((a=JSON.parse(f).error)==null?void 0:a.message)||f.slice(0,200))}catch{h+=": "+f.slice(0,200)}if(c.status===429||c.status===404){i=h;continue}throw new Error(h)}catch(c){if(c.message.includes("429")||c.message.includes("quota")||c.message.includes("404")||c.message.includes("unavailable")){i=c.message;continue}throw c}throw new Error(i||"OpenRouter: all free models exhausted")}const gT="https://api.deepseek.com/v1/chat/completions",xT="deepseek-chat";async function vT(t,e,n=2e3){var s,o,a,l;const i=await fetch(gT,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({model:xT,messages:[{role:"user",content:e}],max_tokens:n,temperature:.1})});if(!i.ok){const c=await i.text();let f=`DeepSeek ${i.status}`;try{f+=": "+(((s=JSON.parse(c).error)==null?void 0:s.message)||c.slice(0,200))}catch{f+=": "+c.slice(0,200)}throw new Error(f)}return((l=(a=(o=(await i.json()).choices)==null?void 0:o[0])==null?void 0:a.message)==null?void 0:l.content)??""}const Fu="eden_apikey_pin_v1",Vh="eden_pin_rate_v1",_T=5,Pf=5*60*1e3;function Sv(){try{return JSON.parse(localStorage.getItem(Vh)||'{"attempts":[],"lockedUntil":0}')}catch{return{attempts:[],lockedUntil:0}}}function Ou(){const t=Sv(),e=Date.now();return t.lockedUntil>e?{locked:!0,remainingMs:t.lockedUntil-e}:{locked:!1,remainingMs:0}}function yT(){const t=Sv(),e=Date.now();t.attempts=[...(t.attempts||[]).filter(n=>e-n<Pf),e],t.attempts.length>=_T&&(t.lockedUntil=e+Pf),localStorage.setItem(Vh,JSON.stringify(t))}function ST(){localStorage.removeItem(Vh)}function fg(t){const e=Math.ceil(t/1e3);return e>=60?Math.ceil(e/60)+"m "+e%60+"s":e+"s"}async function hg(t){const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(t));return Array.from(new Uint8Array(e)).map(n=>n.toString(16).padStart(2,"0")).join("")}const pg=[{id:"gemini",label:"Gemini 2.0 Flash",icon:"✨",color:"#38bdf8",badge:"PRIMARY",placeholder:"AIza...",hint:"1,500 req/day free · aistudio.google.com"},{id:"groq",label:"Groq (Llama 3.3 70B)",icon:"⚡",color:"#a78bfa",badge:"FAST",placeholder:"gsk_...",hint:"14,400 req/day free · console.groq.com"},{id:"openRouter",label:"OpenRouter (multi-model)",icon:"🔀",color:"#67e8f9",badge:"MULTI",placeholder:"sk-or-...",hint:"Free models, DeepSeek R1 · openrouter.ai"},{id:"cerebras",label:"Cerebras (Llama 3.3 70B)",icon:"🧠",color:"#fbbf24",badge:"SPEED",placeholder:"csk-...",hint:"~3,000 tok/s fastest inference · cloud.cerebras.ai"},{id:"deepseek",label:"DeepSeek (V3 / R1)",icon:"🔭",color:"#34d399",badge:"REASON",placeholder:"sk-...",hint:"10M free tokens · platform.deepseek.com"},{id:"mistral",label:"Mistral (mistral-small)",icon:"🌀",color:"#c4b5fd",badge:"STRUCT",placeholder:"...",hint:"500K tok/min free · console.mistral.ai"},{id:"togetherAI",label:"Together AI (Llama 70B)",icon:"🤝",color:"#f9a8d4",badge:"CREDIT",placeholder:"...",hint:"$5–$25 free credit · api.together.xyz"},{id:"cohere",label:"Cohere (Command-R+)",icon:"🪄",color:"#6ee7b7",badge:"CLASS",placeholder:"...",hint:"20 req/s trial key · dashboard.cohere.com"}],MT=[{id:"umls",label:"UMLS Metathesaurus",icon:"🔗",color:"#67e8f9",placeholder:"xxxxxxxx-xxxx-...",hint:"200+ medical databases · uts.nlm.nih.gov"},{id:"bioportal",label:"NCBO BioPortal",icon:"🧭",color:"#c4b5fd",placeholder:"xxxxxxxx-xxxx-...",hint:"800+ ontologies · bioportal.bioontology.org"}],ET=["1","2","3","4","5","6","7","8","9","⌫","0","✓"],bT=`
  @keyframes pinShake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}
  .pin-shake{animation:pinShake 0.4s ease;}
  .pin-digit-btn{transition:all 0.1s;}
  .pin-digit-btn:hover:not(:disabled){background:rgba(124,58,237,0.25)!important;border-color:rgba(124,58,237,0.5)!important;}
  .pin-digit-btn:active:not(:disabled){transform:scale(0.94);}
  .key-row-card{transition:border-color 0.2s;}
  .key-row-card:hover{border-color:rgba(124,58,237,0.35)!important;}
`;function mg({role:t}){return t!=="SUPER_ADMIN"?null:S.jsx(wT,{})}function wT(){const[t,e]=se.useState("idle"),[n,i]=se.useState(""),[r,s]=se.useState(""),[o,a]=se.useState(!1),[l,c]=se.useState(0),[f,h]=se.useState(""),[d,m]=se.useState(""),[g,M]=se.useState("enter"),[x,u]=se.useState({}),[p,v]=se.useState({});se.useEffect(()=>{v({gemini:Jn("gemini"),groq:Jn("groq"),openRouter:Jn("openRouter"),cerebras:Jn("cerebras"),deepseek:Jn("deepseek"),mistral:Jn("mistral"),togetherAI:Jn("togetherAI"),cohere:Jn("cohere"),umls:Jn("umls"),bioportal:Jn("bioportal")})},[t]),se.useEffect(()=>{const P=setInterval(()=>{const{locked:N,remainingMs:L}=Ou();c(N?L:0)},500);return()=>clearInterval(P)},[]);function _(){const P=!!localStorage.getItem(Fu);e(P?"pin-entry":"pin-setup"),i(""),s("")}function T(){e("idle"),i(""),s("")}async function A(P){if(t==="pin-entry"){if(P==="⌫"){i(L=>L.slice(0,-1));return}if(P==="✓"){await R();return}if(n.length>=4)return;const N=n+P;i(N),N.length===4&&setTimeout(()=>R(N),100)}if(t==="pin-setup")if(g==="enter"){if(P==="⌫"){h(N=>N.slice(0,-1));return}if(P==="✓"||f.length===3){const N=P==="⌫"||P==="✓"?f:f+P;if(N.length===4){h(N),M("confirm"),m("");return}P!=="⌫"&&P!=="✓"&&h(L=>L.length<4?L+P:L);return}h(N=>N.length<4?N+P:N),f.length+1===4&&P!=="⌫"&&P!=="✓"&&setTimeout(()=>{M("confirm"),m("")},150)}else{if(P==="⌫"){m(L=>L.slice(0,-1));return}if(P==="✓"){await y();return}const N=d+P;m(N),N.length===4&&setTimeout(()=>y(N),100)}}async function R(P){const{locked:N}=Ou();if(N)return;const L=P||n;if(L.length<4){s("Enter all 4 digits");return}const O=localStorage.getItem(Fu);if(await hg(L)===O)ST(),e("open"),i(""),s("");else{yT();const{locked:Z,remainingMs:ie}=Ou();Z&&c(ie),w(),s(Z?`Locked for ${fg(Pf)}`:"Wrong PIN"),i("")}}async function y(P){const N=f;if(N!==(P||d)){w(),s("PINs don't match — try again"),M("enter"),h(""),m("");return}const O=await hg(N);localStorage.setItem(Fu,O),e("open"),h(""),m(""),s("")}function w(){a(!0),setTimeout(()=>a(!1),500)}const[F,D]=se.useState({});function V(P,N){v(L=>({...L,[P]:N})),iT(P,N),D(L=>({...L,[P]:"idle"}))}async function W(P,N){if(N.trim()){D(L=>({...L,[P]:"testing"}));try{const L="Reply with exactly: OK";if(P==="groq")await lT(N,L,5);else if(P==="gemini")await fT(N,L,5);else if(P==="openRouter")await mT(N,L,5);else if(P==="deepseek")await vT(N,L,5);else if(P==="umls"){const O=await fetch(`https://uts-ws.nlm.nih.gov/rest/search/current?string=aspirin&apiKey=${encodeURIComponent(N)}&pageSize=1`);if(!O.ok)throw new Error("UMLS "+O.status)}else if(P==="bioportal"){const O=await fetch(`https://data.bioontology.org/search?q=aspirin&apikey=${encodeURIComponent(N)}&pagesize=1`);if(!O.ok)throw new Error("BioPortal "+O.status)}D(O=>({...O,[P]:"ok"}))}catch{D(L=>({...L,[P]:"fail"}))}}}const j=pg.map(P=>P.id),z=j.filter(P=>{var N;return(N=p[P])==null?void 0:N.trim()}).length;return S.jsxs(S.Fragment,{children:[S.jsx("style",{children:bT}),S.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"10px 20px 0"},children:[t==="idle"&&S.jsxs("button",{onClick:_,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 16px",borderRadius:10,border:"1px solid rgba(124,58,237,0.3)",background:"rgba(124,58,237,0.1)",cursor:"pointer",fontSize:13,fontWeight:600,color:"#c4b5fd",width:"100%",transition:"all 0.2s"},children:[S.jsx("span",{style:{fontSize:14},children:"🔑"}),S.jsxs("span",{style:{flex:1},children:["API Keys — ",z===0?"No keys set yet":`${z}/${j.length} AI providers active`]}),S.jsx("span",{style:{fontSize:11,padding:"2px 8px",borderRadius:10,background:"rgba(124,58,237,0.2)",color:"#a78bfa"},children:"🔒 PIN protected"}),S.jsx("span",{style:{fontSize:11,color:"rgba(255,255,255,0.3)"},children:"▼ open"})]}),(t==="pin-entry"||t==="pin-setup")&&S.jsxs("div",{style:{background:"rgba(10,10,26,0.97)",border:"1px solid rgba(124,58,237,0.3)",borderRadius:16,padding:24,display:"flex",flexDirection:"column",alignItems:"center",gap:16,position:"relative"},children:[S.jsx("button",{onClick:T,style:{position:"absolute",top:12,right:14,background:"none",border:"none",color:"rgba(255,255,255,0.4)",cursor:"pointer",fontSize:18},children:"✕"}),S.jsx("div",{style:{fontSize:24,filter:"drop-shadow(0 0 10px rgba(124,58,237,0.7))"},children:"🔑"}),S.jsx("div",{style:{color:"#fff",fontWeight:700,fontSize:14,textAlign:"center"},children:t==="pin-entry"?"Enter your 4-digit PIN":g==="enter"?"Set a 4-digit PIN for API Keys":"Confirm your PIN"}),l>0&&S.jsxs("div",{style:{background:"rgba(244,63,94,0.15)",border:"1px solid rgba(244,63,94,0.3)",borderRadius:8,padding:"8px 16px",fontSize:12,color:"#f43f5e",textAlign:"center"},children:["🔒 Locked — try again in ",fg(l)]}),S.jsx("div",{className:o?"pin-shake":"",style:{display:"flex",gap:12,marginTop:4},children:Array.from({length:4}).map((P,N)=>{const L=t==="pin-entry"?N<n.length:g==="enter"?N<f.length:N<d.length;return S.jsx("div",{style:{width:14,height:14,borderRadius:"50%",border:"2px solid rgba(124,58,237,0.6)",background:L?"#7c3aed":"transparent",boxShadow:L?"0 0 8px rgba(124,58,237,0.8)":"none",transition:"all 0.15s"}},N)})}),r&&S.jsx("div",{style:{fontSize:12,color:"#f43f5e",textAlign:"center"},children:r}),S.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,width:200},children:ET.map(P=>S.jsx("button",{className:"pin-digit-btn",onClick:()=>A(P),disabled:l>0||P==="✓"&&(t==="pin-entry"?n.length<4:g==="enter"?f.length<4:d.length<4),style:{padding:"14px 0",borderRadius:10,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)",color:P==="✓"?"#10b981":P==="⌫"?"#f43f5e":"#fff",fontSize:P==="✓"||P==="⌫"?18:20,fontWeight:700,cursor:"pointer"},children:P},P))}),t==="pin-setup"&&g==="confirm"&&S.jsx("button",{onClick:()=>{M("enter"),h(""),m(""),s("")},style:{fontSize:11,color:"rgba(255,255,255,0.35)",background:"none",border:"none",cursor:"pointer"},children:"← Re-enter PIN"})]}),t==="open"&&S.jsxs("div",{style:{background:"rgba(10,10,26,0.95)",border:"1px solid rgba(124,58,237,0.25)",borderRadius:16,padding:16,display:"flex",flexDirection:"column",gap:12},children:[S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[S.jsx("span",{style:{fontSize:14,color:"#c4b5fd"},children:"🔑"}),S.jsxs("span",{style:{flex:1,fontWeight:700,fontSize:13,color:"#fff"},children:["API Keys — ",z,"/",j.length," AI providers active"]}),S.jsx("button",{onClick:T,style:{padding:"4px 12px",borderRadius:8,border:"1px solid rgba(255,255,255,0.1)",background:"transparent",color:"rgba(255,255,255,0.4)",fontSize:11,cursor:"pointer"},children:"🔒 Lock"})]}),S.jsx("div",{style:{fontSize:11,color:"rgba(255,255,255,0.35)",paddingBottom:8,borderBottom:"1px solid rgba(255,255,255,0.06)"},children:"Keys saved in browser storage — never leave your device."}),S.jsxs("div",{style:{fontSize:10,fontWeight:800,color:"rgba(255,255,255,0.3)",letterSpacing:"1px",textTransform:"uppercase"},children:["🤖 AI Providers (",z,"/",j.length,")"]}),pg.map(P=>{const N=p[P.id]||"",L=N.trim().length>0,O=F[P.id]||"idle";return S.jsxs("div",{className:"key-row-card",style:{background:"rgba(255,255,255,0.03)",border:`1px solid ${O==="ok"?"rgba(52,211,153,0.3)":O==="fail"?"rgba(244,63,94,0.3)":"rgba(255,255,255,0.06)"}`,borderRadius:10,padding:"10px 14px"},children:[S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:7},children:[S.jsx("span",{style:{fontSize:14},children:P.icon}),S.jsx("span",{style:{fontWeight:700,fontSize:12,color:P.color},children:P.label}),S.jsx("span",{style:{fontSize:9,fontWeight:800,color:"#fff",background:P.color+"33",border:`1px solid ${P.color}55`,padding:"1px 6px",borderRadius:8},children:P.badge}),O==="ok"&&S.jsx("span",{style:{fontSize:10,color:"#34d399",marginLeft:"auto"},children:"✓ Valid"}),O==="fail"&&S.jsx("span",{style:{fontSize:10,color:"#f87171",marginLeft:"auto"},children:"✗ Invalid"}),O==="idle"&&L&&S.jsx("span",{style:{fontSize:10,color:"rgba(255,255,255,0.3)",marginLeft:"auto"},children:"saved"})]}),S.jsxs("div",{style:{display:"flex",gap:7},children:[S.jsx("input",{type:x[P.id]?"text":"password",value:N,onChange:$=>V(P.id,$.target.value),placeholder:P.placeholder,style:{flex:1,padding:"7px 10px",borderRadius:7,border:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.04)",color:"#fff",fontSize:11,fontFamily:"monospace",outline:"none"}}),L&&S.jsx("button",{onClick:()=>W(P.id,N),disabled:O==="testing",style:{padding:"6px 10px",borderRadius:7,border:"1px solid rgba(52,211,153,0.3)",background:"rgba(52,211,153,0.08)",cursor:"pointer",fontSize:11,color:"#34d399",whiteSpace:"nowrap"},children:O==="testing"?"…":"▶ Test"}),S.jsx("button",{onClick:()=>u($=>({...$,[P.id]:!$[P.id]})),style:{padding:"6px 10px",borderRadius:7,border:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.05)",cursor:"pointer",fontSize:12,color:"rgba(255,255,255,0.5)"},children:x[P.id]?"🙈":"👁"}),L&&S.jsx("button",{onClick:()=>V(P.id,""),style:{padding:"6px 10px",borderRadius:7,border:"1px solid rgba(244,63,94,0.3)",background:"rgba(244,63,94,0.1)",cursor:"pointer",fontSize:11,color:"#f87171"},children:"✕"})]}),S.jsx("div",{style:{fontSize:10,color:"rgba(255,255,255,0.3)",marginTop:5},children:P.hint})]},P.id)}),S.jsx("div",{style:{fontSize:10,fontWeight:800,color:"rgba(255,255,255,0.3)",letterSpacing:"1px",textTransform:"uppercase",marginTop:4},children:"🗄️ Data Source Keys (optional)"}),MT.map(P=>{const N=p[P.id]||"",L=N.trim().length>0;return S.jsxs("div",{className:"key-row-card",style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:10,padding:"10px 14px"},children:[S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:7},children:[S.jsx("span",{style:{fontSize:14},children:P.icon}),S.jsx("span",{style:{fontWeight:700,fontSize:12,color:P.color},children:P.label}),S.jsx("span",{style:{fontSize:9,fontWeight:800,color:"#fff",background:P.color+"33",padding:"1px 6px",borderRadius:8},children:"DATA"}),L&&S.jsx("span",{style:{fontSize:10,color:"#34d399",marginLeft:"auto"},children:"✓ saved"})]}),S.jsxs("div",{style:{display:"flex",gap:7},children:[S.jsx("input",{type:x[P.id]?"text":"password",value:N,onChange:O=>V(P.id,O.target.value),placeholder:P.placeholder,style:{flex:1,padding:"7px 10px",borderRadius:7,border:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.04)",color:"#fff",fontSize:11,fontFamily:"monospace",outline:"none"}}),S.jsx("button",{onClick:()=>u(O=>({...O,[P.id]:!O[P.id]})),style:{padding:"6px 10px",borderRadius:7,border:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.05)",cursor:"pointer",fontSize:12,color:"rgba(255,255,255,0.5)"},children:x[P.id]?"🙈":"👁"}),L&&S.jsx("button",{onClick:()=>V(P.id,""),style:{padding:"6px 10px",borderRadius:7,border:"1px solid rgba(244,63,94,0.3)",background:"rgba(244,63,94,0.1)",cursor:"pointer",fontSize:11,color:"#f87171"},children:"✕"})]}),S.jsx("div",{style:{fontSize:10,color:"rgba(255,255,255,0.3)",marginTop:5},children:P.hint})]},P.id)}),S.jsx("div",{style:{fontSize:10,color:"rgba(255,255,255,0.2)",padding:"8px 12px",background:"rgba(255,255,255,0.02)",borderRadius:8,border:"1px solid rgba(255,255,255,0.04)",marginTop:4},children:"💡 Gemini handles M5 matching. DeepSeek & Cerebras are fast fallbacks. All 8 AI providers form a waterfall chain — no batch is ever dropped. UMLS & BioPortal unlock extra M3 terminology tiers."})]})]})]})}const TT=`
  @keyframes slideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}
  @keyframes fadeOverlay{from{opacity:0}to{opacity:1}}
  .admin-panel{animation:slideIn 0.25s ease forwards;}
  .admin-overlay{animation:fadeOverlay 0.2s ease forwards;}
  .admin-remove-btn{transition:all 0.15s;}
  .admin-remove-btn:hover{background:rgba(244,63,94,0.2)!important;color:#f87171!important;}
  .admin-add-input{transition:border-color 0.2s;}
  .admin-add-input:focus{border-color:rgba(124,58,237,0.5)!important;outline:none!important;box-shadow:0 0 0 3px rgba(124,58,237,0.15)!important;}
`;function gg({currentUser:t,onClose:e}){const[n,i]=se.useState([]),[r,s]=se.useState(""),[o,a]=se.useState(""),[l,c]=se.useState(""),[f,h]=se.useState(""),[d,m]=se.useState(!1),[g,M]=se.useState(!1);function x(){i(yc())}se.useEffect(()=>{x()},[]);async function u(T){if(T.preventDefault(),c(""),h(""),!r.trim()){c("Username is required.");return}if(!o.trim()||o.length<6){c("Password must be at least 6 characters.");return}m(!0);try{const A=await Ow(o);Uw(r.trim(),A),h(`User "${r.trim()}" added.`),s(""),a(""),x()}catch(A){c(A.message||"Failed to add user.")}finally{m(!1)}}function p(T){if(confirm(`Remove user "${T}"? This cannot be undone.`))try{Fw(T),x(),h(`User "${T}" removed.`),c("")}catch(A){c(A.message)}}const v=n.filter(T=>T.role!=="SUPER_ADMIN"),_=n.find(T=>T.role==="SUPER_ADMIN");return S.jsxs(S.Fragment,{children:[S.jsx("style",{children:TT}),S.jsx("div",{className:"admin-overlay",onClick:e,style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:300}}),S.jsxs("div",{className:"admin-panel",style:{position:"fixed",top:0,right:0,bottom:0,width:"100%",maxWidth:420,background:"linear-gradient(180deg,#0f0a1e 0%,#0a0a1a 100%)",borderLeft:"1px solid rgba(124,58,237,0.2)",zIndex:301,display:"flex",flexDirection:"column",overflow:"hidden"},children:[S.jsxs("div",{style:{padding:"20px 24px 16px",borderBottom:"1px solid rgba(255,255,255,0.07)",display:"flex",alignItems:"center",gap:12},children:[S.jsx("span",{style:{fontSize:20,filter:"drop-shadow(0 0 8px rgba(124,58,237,0.7))"},children:"👥"}),S.jsxs("div",{style:{flex:1},children:[S.jsx("div",{style:{color:"#fff",fontWeight:800,fontSize:15},children:"User Management"}),S.jsx("div",{style:{color:"rgba(255,255,255,0.35)",fontSize:11,marginTop:2},children:"Super Admin controls"})]}),S.jsx("button",{onClick:e,style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:8,color:"rgba(255,255,255,0.5)",fontSize:16,cursor:"pointer",width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),S.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"20px 24px",display:"flex",flexDirection:"column",gap:20},children:[S.jsxs("div",{children:[S.jsx("div",{style:{fontSize:10,fontWeight:800,color:"rgba(255,255,255,0.3)",letterSpacing:"1px",textTransform:"uppercase",marginBottom:8},children:"Super Admin"}),S.jsxs("div",{style:{background:"rgba(124,58,237,0.12)",border:"1px solid rgba(124,58,237,0.25)",borderRadius:12,padding:"12px 16px",display:"flex",alignItems:"center",gap:12},children:[S.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:"linear-gradient(135deg,#7c3aed,#a855f7)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16},children:"👑"}),S.jsxs("div",{style:{flex:1},children:[S.jsx("div",{style:{color:"#c4b5fd",fontWeight:700,fontSize:13},children:_==null?void 0:_.username}),S.jsx("div",{style:{color:"rgba(255,255,255,0.3)",fontSize:11,marginTop:2},children:"Full system access · cannot be removed"})]}),S.jsx("span",{style:{fontSize:9,fontWeight:800,padding:"3px 8px",borderRadius:10,background:"rgba(124,58,237,0.3)",color:"#c4b5fd",border:"1px solid rgba(124,58,237,0.4)"},children:"ADMIN"})]})]}),S.jsxs("div",{children:[S.jsxs("div",{style:{fontSize:10,fontWeight:800,color:"rgba(255,255,255,0.3)",letterSpacing:"1px",textTransform:"uppercase",marginBottom:8},children:["Users (",v.length,")"]}),v.length===0?S.jsx("div",{style:{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:12,padding:"20px",textAlign:"center",color:"rgba(255,255,255,0.25)",fontSize:12},children:"No regular users yet. Add one below."}):S.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:v.map(T=>S.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:12,padding:"12px 16px",display:"flex",alignItems:"center",gap:12},children:[S.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:"linear-gradient(135deg,#0f172a,#1e293b)",border:"1px solid rgba(6,182,212,0.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16},children:"👤"}),S.jsxs("div",{style:{flex:1},children:[S.jsx("div",{style:{color:"#fff",fontWeight:600,fontSize:13},children:T.username}),S.jsx("div",{style:{color:"rgba(255,255,255,0.3)",fontSize:11,marginTop:2},children:"Standard user · pipeline access only"})]}),S.jsx("span",{style:{fontSize:9,fontWeight:800,padding:"3px 8px",borderRadius:10,background:"rgba(6,182,212,0.15)",color:"#67e8f9",border:"1px solid rgba(6,182,212,0.25)"},children:"USER"}),T.username!==t&&S.jsx("button",{className:"admin-remove-btn",onClick:()=>p(T.username),style:{padding:"5px 10px",borderRadius:8,border:"1px solid rgba(244,63,94,0.25)",background:"rgba(244,63,94,0.08)",color:"#f87171",cursor:"pointer",fontSize:11},children:"Remove"})]},T.username))})]}),S.jsxs("div",{children:[S.jsx("div",{style:{fontSize:10,fontWeight:800,color:"rgba(255,255,255,0.3)",letterSpacing:"1px",textTransform:"uppercase",marginBottom:12},children:"Add New User"}),S.jsxs("form",{onSubmit:u,style:{display:"flex",flexDirection:"column",gap:12},children:[S.jsxs("div",{children:[S.jsx("label",{style:{display:"block",fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.4)",marginBottom:6,letterSpacing:"0.8px"},children:"USERNAME"}),S.jsx("input",{className:"admin-add-input",type:"text",value:r,onChange:T=>s(T.target.value),placeholder:"e.g. JohnDoe",autoComplete:"off",style:{width:"100%",padding:"10px 14px",borderRadius:10,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)",color:"#fff",fontSize:13,boxSizing:"border-box"}})]}),S.jsxs("div",{children:[S.jsx("label",{style:{display:"block",fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.4)",marginBottom:6,letterSpacing:"0.8px"},children:"PASSWORD"}),S.jsxs("div",{style:{position:"relative"},children:[S.jsx("input",{className:"admin-add-input",type:g?"text":"password",value:o,onChange:T=>a(T.target.value),placeholder:"Minimum 6 characters",autoComplete:"new-password",style:{width:"100%",padding:"10px 44px 10px 14px",borderRadius:10,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)",color:"#fff",fontSize:13,boxSizing:"border-box"}}),S.jsx("button",{type:"button",onClick:()=>M(T=>!T),tabIndex:-1,style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",fontSize:14,color:"rgba(255,255,255,0.35)"},children:g?"🙈":"👁️"})]})]}),l&&S.jsx("div",{style:{fontSize:12,color:"#f87171",background:"rgba(244,63,94,0.1)",border:"1px solid rgba(244,63,94,0.25)",borderRadius:8,padding:"8px 12px"},children:l}),f&&S.jsx("div",{style:{fontSize:12,color:"#34d399",background:"rgba(52,211,153,0.1)",border:"1px solid rgba(52,211,153,0.25)",borderRadius:8,padding:"8px 12px"},children:f}),S.jsx("button",{type:"submit",disabled:d,style:{padding:"11px",borderRadius:10,border:"none",background:"linear-gradient(135deg,#7c3aed,#06b6d4)",color:"#fff",fontWeight:700,fontSize:13,cursor:"pointer",boxShadow:"0 4px 20px rgba(124,58,237,0.3)",transition:"all 0.2s"},children:d?"Adding…":"+ Add User"})]})]}),S.jsx("div",{style:{fontSize:11,color:"rgba(255,255,255,0.2)",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.04)",borderRadius:8,padding:"10px 12px"},children:"💡 Regular users have access to all pipeline modules but cannot see or edit API keys. User data is stored in this browser's localStorage."})]})]})]})}const AT=`
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
`;function xg({children:t,className:e,style:n,onClick:i}){const r=se.useRef(null);function s(a){const l=r.current;if(!l)return;const c=l.getBoundingClientRect(),f=(a.clientX-(c.left+c.width/2))/(c.width/2),h=(a.clientY-(c.top+c.height/2))/(c.height/2);l.style.transform=`perspective(800px) rotateY(${f*7}deg) rotateX(${-h*6}deg) scale3d(1.02,1.02,1.02)`}function o(){const a=r.current;a&&(a.style.transform="perspective(800px) rotateY(0) rotateX(0) scale3d(1,1,1)")}return S.jsx("div",{ref:r,className:`ms-tilt ${e||""}`,style:{...n,borderRadius:20,overflow:"hidden"},onMouseMove:s,onMouseLeave:o,onClick:i,children:t})}function RT({onSelect:t}){return S.jsxs(S.Fragment,{children:[S.jsx("style",{children:AT}),S.jsx(yv,{}),S.jsx("div",{style:{position:"fixed",inset:0,zIndex:1,pointerEvents:"none",background:"rgba(0,0,0,0.55)"}}),S.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 24px",position:"relative",zIndex:2},children:[S.jsxs("div",{className:"ms-stagger-1",style:{textAlign:"center",marginBottom:48},children:[S.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:10,marginBottom:20,padding:"6px 16px 6px 10px",borderRadius:20,border:"1px solid rgba(220,38,38,0.35)",background:"rgba(220,38,38,0.08)"},children:[S.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:[S.jsx("rect",{x:"5.5",y:"0",width:"3",height:"14",rx:"1",fill:"#dc2626"}),S.jsx("rect",{x:"0",y:"5.5",width:"14",height:"3",rx:"1",fill:"#dc2626"})]}),S.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#dc2626",letterSpacing:"2.5px",textTransform:"uppercase"},children:"Eden Care Pipeline"})]}),S.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 48px)",fontWeight:900,color:"#ffffff",letterSpacing:"-0.04em",lineHeight:1,marginBottom:12},children:"Select Processing Mode"}),S.jsx("p",{style:{fontSize:14,color:"rgba(255,255,255,0.38)",maxWidth:380,margin:"0 auto"},children:"Choose how you want to process your insurance catalog data through the pipeline"})]}),S.jsxs("div",{className:"ms-stagger-2",style:{display:"flex",gap:20,flexWrap:"wrap",justifyContent:"center",maxWidth:760,width:"100%"},children:[S.jsx(xg,{className:"ms-card-auto",style:{flex:"1 1 320px",maxWidth:360},onClick:()=>t("auto"),children:S.jsxs("div",{style:{padding:"32px 28px 28px"},children:[S.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:28},children:[S.jsx("span",{className:"ms-tag",style:{fontSize:9,fontWeight:800,padding:"4px 10px",borderRadius:6,letterSpacing:"2px",textTransform:"uppercase"},children:"Recommended"}),S.jsx("span",{style:{fontSize:28},children:"🤖"})]}),S.jsx("h3",{style:{fontSize:24,fontWeight:900,letterSpacing:"-0.04em",marginBottom:6,color:"inherit"},children:"Auto Mode"}),S.jsx("p",{className:"ms-feature",style:{fontSize:13,lineHeight:1.6,marginBottom:24},children:"Upload once. All 7 modules execute automatically with live status updates."}),S.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:10,marginBottom:28},children:["Upload → full pipeline executes","Live neural status per module","Delta report auto-downloads","Zero manual intervention"].map(e=>S.jsxs("li",{style:{display:"flex",gap:10,fontSize:12.5,alignItems:"flex-start"},children:[S.jsx("span",{className:"ms-feature-check",style:{fontWeight:900,flexShrink:0,marginTop:1},children:"✕"}),S.jsx("span",{className:"ms-feature",children:e})]},e))}),S.jsx("button",{className:"ms-cta",style:{width:"100%",padding:"14px",borderRadius:12,fontSize:12},children:"Launch Auto Pipeline →"})]})}),S.jsxs("div",{className:"ms-divider",style:{alignSelf:"stretch",flexDirection:"column",width:1,minHeight:300},children:[S.jsx("div",{style:{flex:1,width:1,background:"rgba(255,255,255,0.07)"}}),S.jsx("span",{style:{fontSize:10,color:"rgba(255,255,255,0.2)",letterSpacing:"2px",textTransform:"uppercase",writingMode:"vertical-lr"},children:"or"}),S.jsx("div",{style:{flex:1,width:1,background:"rgba(255,255,255,0.07)"}})]}),S.jsx(xg,{className:"ms-card-manual",style:{flex:"1 1 320px",maxWidth:360},onClick:()=>t("manual"),children:S.jsxs("div",{style:{padding:"32px 28px 28px"},children:[S.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:28},children:[S.jsx("span",{className:"ms-tag",style:{fontSize:9,fontWeight:700,padding:"4px 10px",borderRadius:6,letterSpacing:"2px",textTransform:"uppercase"},children:"Full Control"}),S.jsx("span",{style:{fontSize:28},children:"🎛️"})]}),S.jsx("h3",{style:{fontSize:24,fontWeight:900,letterSpacing:"-0.04em",marginBottom:6,color:"inherit"},children:"Manual Mode"}),S.jsx("p",{className:"ms-feature",style:{fontSize:13,lineHeight:1.6,marginBottom:24},children:"Step through each module individually. Inspect and verify at every stage."}),S.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:10,marginBottom:28},children:["Step-by-step navigation","Inspect results per module","Modify inputs before advancing","Best for QA & troubleshooting"].map(e=>S.jsxs("li",{style:{display:"flex",gap:10,fontSize:12.5,alignItems:"flex-start"},children:[S.jsx("span",{className:"ms-feature-check",style:{fontWeight:900,flexShrink:0,marginTop:1},children:"✕"}),S.jsx("span",{className:"ms-feature",children:e})]},e))}),S.jsx("button",{className:"ms-cta",style:{width:"100%",padding:"14px",borderRadius:12,fontSize:12},children:"Start Manual Mode →"})]})})]}),S.jsx("div",{className:"ms-stagger-4",style:{marginTop:36,fontSize:11,color:"rgba(255,255,255,0.2)",letterSpacing:"0.5px"},children:"Switch modes at any time from the navigation bar"})]})]})}const vg={m0Result:null,m1Result:null,m2Result:null,m3Result:null,m4Result:null,m5Result:null};function Mv(){const[t,e]=se.useState(vg);function n(c){e(f=>({...f,m0Result:c}))}function i(c){e(f=>({...f,m1Result:c}))}function r(c){e(f=>({...f,m2Result:c}))}function s(c){e(f=>({...f,m3Result:c}))}function o(c){e(f=>({...f,m4Result:c}))}function a(c){e(f=>({...f,m5Result:c}))}function l(){e(vg)}return{state:t,setM0:n,setM1:i,setM2:r,setM3:s,setM4:o,setM5:a,reset:l}}const CT=se.lazy(()=>_t(()=>import("./M0PreScan-BA-tck_L.js"),__vite__mapDeps([0,1,2]))),PT=se.lazy(()=>_t(()=>import("./M1PHIScrubber-YkSOGB62.js"),__vite__mapDeps([3,1]))),LT=se.lazy(()=>_t(()=>import("./M2TriageRouter-Bm7XwYYI.js"),__vite__mapDeps([4,1]))),DT=se.lazy(()=>_t(()=>import("./M3AliasEngine-D-jF6WjV.js"),__vite__mapDeps([5,1,6]))),NT=se.lazy(()=>_t(()=>import("./M4ConfidenceThreshold-DaMAY3Y0.js"),__vite__mapDeps([7,1,6,2]))),IT=se.lazy(()=>_t(()=>import("./M5DefinitionEngine-3sFys_2X.js"),__vite__mapDeps([8,1]))),UT=se.lazy(()=>_t(()=>import("./M6DeltaReport-DxgK6osZ.js"),__vite__mapDeps([9,1]))),ku=[{key:"m0",num:"01",label:"Pre-Scan",desc:"Catalog upload & pre-match"},{key:"m1",num:"02",label:"PHI Scrubber",desc:"Anonymize patient identifiers"},{key:"m2",num:"03",label:"Triage Router",desc:"Route by clinical domain"},{key:"m3",num:"04",label:"Alias Engine",desc:"Resolve aliases via APIs"},{key:"m5",num:"05",label:"Code Prep Engine",desc:"Enrich definitions for code matching"},{key:"m4",num:"06",label:"Code Assignment Engine",desc:"Assign & match DNA codes"},{key:"m6",num:"07",label:"Delta Report",desc:"Generate comparison report"}],FT=`
  @keyframes amp-spin  { to { transform: rotate(360deg); } }
  @keyframes amp-pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
  @keyframes amp-rowIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
  @keyframes amp-barFill { from{width:0%} }
  @keyframes amp-redPulse { 0%,100%{box-shadow:0 0 0 0 rgba(220,38,38,0)} 50%{box-shadow:0 0 0 6px rgba(220,38,38,0.15)} }
  .amp-row { animation: amp-rowIn 0.3s cubic-bezier(0.16,1,0.3,1) both; }
  .amp-running-text { animation: amp-pulse 1.4s ease-in-out infinite; }
  .amp-spinner { width:16px;height:16px;border-radius:50%;border:2px solid rgba(220,38,38,0.2);border-top-color:#dc2626;display:inline-block;animation:amp-spin 0.8s linear infinite; }
  .amp-active-row { animation: amp-redPulse 2s ease-in-out infinite; }
`;function OT({onComplete:t}){var V,W,j,z,P,N;const{state:e,setM0:n,setM1:i,setM2:r,setM3:s,setM4:o,setM5:a}=Mv(),[l,c]=se.useState({m0:"running",m1:"waiting",m2:"waiting",m3:"waiting",m5:"waiting",m4:"waiting",m6:"waiting"}),[f,h]=se.useState({m0:"Upload catalog files to begin"}),[d,m]=se.useState("m0"),[g,M]=se.useState("uploading"),[x,u]=se.useState(1);function p(L,O,$){c(Z=>({...Z,[L]:O})),$&&h(Z=>({...Z,[L]:$}))}function v(L){var Z,ie;n(L);const O=((Z=L==null?void 0:L.preMatched)==null?void 0:Z.length)||0,$=((ie=L==null?void 0:L.toProcess)==null?void 0:ie.length)||0;p("m0","done",`${O} pre-matched · ${$} to process`),M("running"),m("m1"),p("m1","running","Scanning for PHI…"),u(2)}function _(L){i(L),p("m1","done",`Risk: ${(L==null?void 0:L.riskLevel)||"clean"}`),m("m2"),p("m2","running","Routing by domain…"),u(3)}function T(L){var O;r(L),p("m2","done",`${((O=L==null?void 0:L.triaged)==null?void 0:O.length)||0} items triaged`),m("m3"),p("m3","running","Resolving aliases…"),u(4)}function A(L){var O;s(L),p("m3","done",`${((O=L==null?void 0:L.resolved)==null?void 0:O.length)||0} resolved`),m("m5"),p("m5","running","Enriching definitions…"),u(5)}function R(L){var O;a(L),p("m5","done",`${((O=L==null?void 0:L.enriched)==null?void 0:O.length)||0} enriched`),m("m4"),p("m4","running","Assigning DNA codes…"),u(6)}function y(L){var O;o(L),p("m4","done",`${((O=L==null?void 0:L.results)==null?void 0:O.length)||0} codes assigned`),m("m6"),p("m6","running","Generating delta report…"),u(7)}function w(){p("m6","done","Report generated · downloaded ✓"),m(null),M("done"),t==null||t()}const F=Object.values(l).filter(L=>L==="done").length,D=Math.round(F/ku.length*100);return S.jsxs(S.Fragment,{children:[S.jsx("style",{children:FT}),S.jsx("div",{style:{background:"#070c18",minHeight:"100vh",borderTop:"1px solid rgba(74,222,128,0.08)"},children:S.jsxs("div",{style:{maxWidth:860,margin:"0 auto",padding:"32px 20px"},children:[S.jsxs("div",{style:{marginBottom:24},children:[S.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:6},children:[S.jsxs("div",{children:[S.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#dc2626",letterSpacing:"3px",textTransform:"uppercase",marginBottom:4},children:"Auto Pipeline"}),S.jsx("h2",{style:{fontSize:24,fontWeight:900,color:"#ffffff",letterSpacing:"-0.04em",lineHeight:1},children:g==="uploading"?"Upload Files to Begin":g==="done"?"Pipeline Complete":`Processing — ${F}/7`})]}),S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[g==="running"&&S.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,padding:"5px 12px",borderRadius:6,border:"1px solid rgba(220,38,38,0.35)",background:"rgba(220,38,38,0.07)"},children:[S.jsx("div",{className:"live-dot"}),S.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#dc2626",letterSpacing:"2px",textTransform:"uppercase"},children:"Live"})]}),S.jsxs("span",{style:{fontSize:22,fontWeight:900,color:D===100?"#ffffff":"rgba(255,255,255,0.3)"},children:[D,"%"]})]})]}),(g==="running"||g==="done")&&S.jsx("div",{style:{height:2,background:"rgba(255,255,255,0.08)",borderRadius:1,overflow:"hidden"},children:S.jsx("div",{style:{height:"100%",width:`${D}%`,background:D===100?"#ffffff":"#dc2626",transition:"width 0.6s cubic-bezier(0.16,1,0.3,1)",animation:"amp-barFill 0.6s ease"}})})]}),S.jsxs("div",{style:{border:"1px solid rgba(255,255,255,0.08)",borderRadius:16,overflow:"hidden"},children:[S.jsx("div",{style:{display:"grid",gridTemplateColumns:"48px 1fr 100px 120px",padding:"10px 20px",background:"rgba(255,255,255,0.03)",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:["#","Module","Status","Result"].map(L=>S.jsx("span",{style:{fontSize:9,fontWeight:700,color:"rgba(255,255,255,0.25)",letterSpacing:"2px",textTransform:"uppercase"},children:L},L))}),ku.map((L,O)=>{const $=l[L.key],Z=f[L.key],ie=d===L.key,Ae=$==="done";return S.jsxs("div",{className:`amp-row${ie?" amp-active-row":""}`,style:{display:"grid",gridTemplateColumns:"48px 1fr 100px 120px",padding:"14px 20px",alignItems:"center",background:Ae?"rgba(255,255,255,0.02)":ie?"rgba(220,38,38,0.05)":"transparent",borderBottom:O<ku.length-1?"1px solid rgba(255,255,255,0.05)":"none",transition:"background 0.3s",animationDelay:`${O*.04}s`},children:[S.jsx("span",{style:{fontWeight:900,fontSize:13,fontFamily:"monospace",color:Ae?"rgba(255,255,255,0.2)":ie?"#dc2626":"rgba(255,255,255,0.12)"},children:L.num}),S.jsxs("div",{children:[S.jsxs("div",{style:{fontWeight:700,fontSize:13,color:Ae?"rgba(255,255,255,0.5)":ie?"#ffffff":"rgba(255,255,255,0.3)",marginBottom:2},children:[ie&&S.jsx("span",{className:"amp-spinner",style:{marginRight:8}}),L.label]}),S.jsx("div",{style:{fontSize:11,color:"rgba(255,255,255,0.2)"},children:L.desc})]}),S.jsxs("div",{children:[$==="waiting"&&S.jsx("span",{style:{fontSize:9,padding:"3px 8px",borderRadius:4,background:"rgba(255,255,255,0.04)",color:"rgba(255,255,255,0.2)",fontWeight:700,letterSpacing:"1px"},children:"WAITING"}),$==="running"&&S.jsx("span",{style:{fontSize:9,padding:"3px 8px",borderRadius:4,background:"rgba(220,38,38,0.15)",color:"#ef4444",fontWeight:700,letterSpacing:"1px",border:"1px solid rgba(220,38,38,0.3)"},children:"RUNNING"}),$==="done"&&S.jsx("span",{style:{fontSize:9,padding:"3px 8px",borderRadius:4,background:"rgba(255,255,255,0.08)",color:"#ffffff",fontWeight:700,letterSpacing:"1px"},children:"DONE"}),$==="error"&&S.jsx("span",{style:{fontSize:9,padding:"3px 8px",borderRadius:4,background:"rgba(220,38,38,0.2)",color:"#ef4444",fontWeight:700,letterSpacing:"1px"},children:"ERROR"})]}),S.jsx("div",{className:ie?"amp-running-text":"",style:{fontSize:11,color:Ae?"rgba(255,255,255,0.45)":"rgba(255,255,255,0.2)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:Z||"—"})]},L.key)})]}),g==="uploading"&&S.jsxs("div",{style:{marginTop:24},children:[S.jsx("div",{style:{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.3)",letterSpacing:"2px",textTransform:"uppercase",marginBottom:12},children:"Step 01 — Pre-Scan Upload"}),S.jsx(se.Suspense,{fallback:S.jsx("div",{style:{padding:32,textAlign:"center",border:"1px dashed rgba(255,255,255,0.08)",borderRadius:12,color:"rgba(255,255,255,0.3)",fontSize:13},children:"Loading upload module…"}),children:S.jsx(CT,{onComplete:v})})]}),g==="done"&&S.jsxs("div",{style:{marginTop:24,padding:"28px 32px",background:"#ffffff",borderRadius:16,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[S.jsxs("div",{children:[S.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#dc2626",letterSpacing:"3px",textTransform:"uppercase",marginBottom:4},children:"Pipeline Complete"}),S.jsx("div",{style:{fontSize:20,fontWeight:900,color:"#000000",letterSpacing:"-0.04em"},children:"All 7 modules finished"}),S.jsx("div",{style:{fontSize:13,color:"rgba(0,0,0,0.5)",marginTop:4},children:"Delta report has been generated and downloaded."})]}),S.jsx("div",{style:{fontSize:40},children:"✓"})]}),g==="running"&&S.jsx("div",{style:{position:"absolute",left:"-9999px",pointerEvents:"none",width:1,height:1,overflow:"hidden"},children:S.jsxs(se.Suspense,{fallback:null,children:[x===2&&S.jsx(PT,{prefillData:e.m0Result?{toProcess:e.m0Result.toProcess}:null,onComplete:_}),x===3&&S.jsx(LT,{prefillData:e.m1Result,onComplete:T}),x===4&&S.jsx(DT,{prefillData:e.m2Result,onComplete:A}),x===5&&S.jsx(IT,{prefillData:e.m3Result,onComplete:R}),x===6&&S.jsx(NT,{prefillData:{...e.m5Result||e.m3Result,masterCatalogs:(V=e.m0Result)==null?void 0:V.masterCatalogs},onComplete:y}),x===7&&S.jsx(UT,{prefillData:{results:(W=e.m4Result)==null?void 0:W.results,hospitalName:(j=e.m4Result)==null?void 0:j.hospitalName,masterCatalogs:(z=e.m4Result)==null?void 0:z.masterCatalogs,masterDNAs:(P=e.m4Result)==null?void 0:P.masterDNAs,preMatched:(N=e.m0Result)==null?void 0:N.preMatched},onComplete:w})]})})]})})]})}const Ql="audit_log_v1",Ev=500;function _g(t){try{const e=JSON.parse(localStorage.getItem(Ql)||"[]"),n={...t,id:crypto.randomUUID?crypto.randomUUID():Date.now().toString(36),timestamp:new Date().toISOString()};localStorage.setItem(Ql,JSON.stringify([n,...e].slice(0,Ev)))}catch{}}function kT(t="system"){function e(i){_g({...i,user:t})}function n(i,r,s="pipeline"){_g({module:i,action:"ERROR: "+r,fileName:s,outcome:"error",itemCount:0,user:t})}return{writeEntry:e,logError:n}}function qT(t,e,n="pipeline"){try{const i=JSON.parse(localStorage.getItem(Ql)||"[]"),r={id:crypto.randomUUID?crypto.randomUUID():Date.now().toString(36),timestamp:new Date().toISOString(),module:t,action:"ERROR: "+e,fileName:n,outcome:"error",itemCount:0,user:"system"};localStorage.setItem(Ql,JSON.stringify([r,...i].slice(0,Ev)))}catch{}}const zT=se.lazy(()=>_t(()=>import("./M0PreScan-BA-tck_L.js"),__vite__mapDeps([0,1,2]))),BT=se.lazy(()=>_t(()=>import("./M1PHIScrubber-YkSOGB62.js"),__vite__mapDeps([3,1]))),VT=se.lazy(()=>_t(()=>import("./M2TriageRouter-Bm7XwYYI.js"),__vite__mapDeps([4,1]))),HT=se.lazy(()=>_t(()=>import("./M3AliasEngine-D-jF6WjV.js"),__vite__mapDeps([5,1,6]))),GT=se.lazy(()=>_t(()=>import("./M4ConfidenceThreshold-DaMAY3Y0.js"),__vite__mapDeps([7,1,6,2]))),WT=se.lazy(()=>_t(()=>import("./M5DefinitionEngine-3sFys_2X.js"),__vite__mapDeps([8,1]))),jT=se.lazy(()=>_t(()=>import("./M6DeltaReport-DxgK6osZ.js"),__vite__mapDeps([9,1]))),XT=se.lazy(()=>_t(()=>import("./M7AuditLog-B-57k9uo.js"),__vite__mapDeps([10,1]))),YT=30*60*1e3,so="eden_mode_v1";function $T(){var O,$,Z,ie,Ae,We;const[t,e]=se.useState("landing"),[n,i]=se.useState(null),[r,s]=se.useState("USER"),[o,a]=se.useState(1),[l,c]=se.useState(new Set),[f,h]=se.useState(null),[d,m]=se.useState(!1),[g,M]=se.useState(null),[x,u]=se.useState(0),p=se.useRef(null),{state:v,setM0:_,setM1:T,setM2:A,setM3:R,setM4:y,setM5:w}=Mv();se.useEffect(()=>{const te=sessionStorage.getItem(gl);if(te)try{const G=JSON.parse(te);if(G.username){const ee=btoa((navigator.userAgent+window.screen.width+window.screen.height).slice(0,200));if(G.fingerprint&&G.fingerprint!==ee){sessionStorage.removeItem(gl);return}i(G.username),s(G.role||"USER"),F();const re=sessionStorage.getItem(so);(re==="auto"||re==="manual")&&h(re),e("app")}}catch{}},[]),se.useEffect(()=>{if(!n)return;function te(){p.current&&clearTimeout(p.current),p.current=setTimeout(()=>{j("session-expired")},YT)}return te(),window.addEventListener("mousemove",te),window.addEventListener("keydown",te),window.addEventListener("click",te),()=>{p.current&&clearTimeout(p.current),window.removeEventListener("mousemove",te),window.removeEventListener("keydown",te),window.removeEventListener("click",te)}},[n]);function F(){try{u(yc().length)}catch{u(1)}}const{writeEntry:D}=kT(n||"system");function V(te,G="info"){M({msg:te,type:G}),setTimeout(()=>M(null),3500)}function W(te,G){i(te),s(G),F(),h(null),sessionStorage.removeItem(so),e("app")}function j(te){sessionStorage.removeItem(gl),sessionStorage.removeItem(so),i(null),s("USER"),a(1),c(new Set),h(null),m(!1),e("landing"),te==="session-expired"&&V("Session expired — please sign in again.","error")}function z(){j()}function P(te){h(te),sessionStorage.setItem(so,te)}function N(){const te=f==="auto"?"manual":"auto";h(te),sessionStorage.setItem(so,te)}function L(te,G,ee){var re,Fe,Le,Ne,Et,Ye;ee(G),c(Ze=>new Set([...Ze,te])),a(te+1<=8?te+1:te),D({module:"Step"+te,action:"Step completed — passed to Step "+(te+1),fileName:"pipeline",outcome:"success",itemCount:Array.isArray(G)?G.length:((re=G==null?void 0:G.rows)==null?void 0:re.length)||((Fe=G==null?void 0:G.triaged)==null?void 0:Fe.length)||((Le=G==null?void 0:G.resolved)==null?void 0:Le.length)||((Ne=G==null?void 0:G.results)==null?void 0:Ne.length)||((Et=G==null?void 0:G.enriched)==null?void 0:Et.length)||((Ye=G==null?void 0:G.toProcess)==null?void 0:Ye.length)||0})}return t==="landing"?S.jsx(Dw,{onEnter:()=>e("login")}):n?f===null?S.jsxs(S.Fragment,{children:[S.jsx(RT,{onSelect:P}),g&&S.jsx(Ja,{msg:g.msg,type:g.type})]}):f==="auto"?S.jsxs(S.Fragment,{children:[S.jsx(dg,{username:n,role:r,mode:f,onModeToggle:N,onLogout:z,onAdminPanel:r==="SUPER_ADMIN"?()=>m(!0):void 0,userCount:r==="SUPER_ADMIN"?x:void 0,pipelineRunning:!0}),S.jsx(mg,{role:r}),S.jsx(OT,{onComplete:()=>V("Pipeline complete! Delta report downloaded.","success")}),d&&r==="SUPER_ADMIN"&&S.jsx(gg,{currentUser:n,onClose:()=>{m(!1),F()}}),g&&S.jsx(Ja,{msg:g.msg,type:g.type})]}):S.jsxs(S.Fragment,{children:[S.jsx(dg,{username:n,role:r,mode:f,onModeToggle:N,onLogout:z,onAdminPanel:r==="SUPER_ADMIN"?()=>m(!0):void 0,userCount:r==="SUPER_ADMIN"?x:void 0}),S.jsx(mg,{role:r}),S.jsx("div",{style:{display:"none"},children:S.jsxs(se.Suspense,{fallback:null,children:[o===2&&S.jsx(BT,{prefillData:v.m0Result?{toProcess:v.m0Result.toProcess}:null,onComplete:te=>L(2,te,T)}),o===3&&S.jsx(VT,{prefillData:v.m1Result,onComplete:te=>L(3,te,A)}),o===4&&S.jsx(HT,{prefillData:v.m2Result,onComplete:te=>L(4,te,R)}),o===5&&S.jsx(WT,{prefillData:v.m3Result,onComplete:te=>L(5,te,w)}),o===6&&S.jsx(GT,{prefillData:{...v.m5Result||v.m3Result,masterCatalogs:(O=v.m0Result)==null?void 0:O.masterCatalogs},onComplete:te=>L(6,te,y)}),o===7&&S.jsx(jT,{prefillData:{results:($=v.m4Result)==null?void 0:$.results,hospitalName:(Z=v.m4Result)==null?void 0:Z.hospitalName,masterCatalogs:(ie=v.m4Result)==null?void 0:ie.masterCatalogs,masterDNAs:(Ae=v.m4Result)==null?void 0:Ae.masterDNAs,preMatched:(We=v.m0Result)==null?void 0:We.preMatched},onComplete:()=>L(7,{},()=>{})}),o===8&&S.jsx(XT,{}),o===1&&S.jsx(zT,{onComplete:te=>L(1,te,_)})]})}),d&&r==="SUPER_ADMIN"&&S.jsx(gg,{currentUser:n,onClose:()=>{m(!1),F()}}),g&&S.jsx(Ja,{msg:g.msg,type:g.type})]}):S.jsxs(S.Fragment,{children:[S.jsx(Hw,{onLogin:W}),g&&S.jsx(Ja,{msg:g.msg,type:g.type})]})}function Ja({msg:t,type:e}){const i={error:{bg:"#fff5f5",border:"#dc2626",text:"#dc2626"},success:{bg:"#f0fdf4",border:"#16a34a",text:"#16a34a"},info:{bg:"#f8fafc",border:"#64748b",text:"#334155"}}[e];return S.jsx("div",{style:{position:"fixed",bottom:28,left:"50%",transform:"translateX(-50%)",background:i.bg,border:"1px solid rgba(0,0,0,0.08)",borderLeft:`3px solid ${i.border}`,borderRadius:10,padding:"12px 24px",color:i.text,fontSize:12,fontWeight:700,zIndex:9999,boxShadow:"0 8px 40px rgba(0,0,0,0.12)",whiteSpace:"nowrap",letterSpacing:"0.5px",animation:"toastSlide 0.3s cubic-bezier(0.16,1,0.3,1)",fontFamily:"Inter, -apple-system, sans-serif"},children:t})}zu.createRoot(document.getElementById("root")).render(S.jsx(Yv.StrictMode,{children:S.jsx($T,{})}));export{Yv as R,fT as a,mT as b,lT as c,vT as d,Jn as g,S as j,qT as l,se as r,iT as s,kT as u};
