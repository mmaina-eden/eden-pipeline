const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/M0PreScan-BWJS4Gen.js","assets/xlsx-CKN5doRT.js","assets/masterCatalogs-BbD_0MWE.js","assets/M1PHIScrubber-C0v-ylbi.js","assets/M2TriageRouter-BN-RoRQx.js","assets/M3AliasEngine-CUKKBvHN.js","assets/cohere-Dswmjygu.js","assets/M4ConfidenceThreshold-D8bSbw8L.js","assets/M5DefinitionEngine-CpXqBlhG.js","assets/M6DeltaReport-Blj5RTzv.js","assets/M7AuditLog-BmjLsAP9.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function xy(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var nx={exports:{}},Zc={},ix={exports:{}},tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ga=Symbol.for("react.element"),_y=Symbol.for("react.portal"),vy=Symbol.for("react.fragment"),yy=Symbol.for("react.strict_mode"),Sy=Symbol.for("react.profiler"),My=Symbol.for("react.provider"),Ey=Symbol.for("react.context"),wy=Symbol.for("react.forward_ref"),Ty=Symbol.for("react.suspense"),by=Symbol.for("react.memo"),Ay=Symbol.for("react.lazy"),fm=Symbol.iterator;function Ry(n){return n===null||typeof n!="object"?null:(n=fm&&n[fm]||n["@@iterator"],typeof n=="function"?n:null)}var rx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sx=Object.assign,ox={};function _o(n,e,t){this.props=n,this.context=e,this.refs=ox,this.updater=t||rx}_o.prototype.isReactComponent={};_o.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};_o.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function ax(){}ax.prototype=_o.prototype;function Fh(n,e,t){this.props=n,this.context=e,this.refs=ox,this.updater=t||rx}var Oh=Fh.prototype=new ax;Oh.constructor=Fh;sx(Oh,_o.prototype);Oh.isPureReactComponent=!0;var hm=Array.isArray,lx=Object.prototype.hasOwnProperty,kh={current:null},cx={key:!0,ref:!0,__self:!0,__source:!0};function ux(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)lx.call(e,i)&&!cx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ga,type:n,key:s,ref:o,props:r,_owner:kh.current}}function Cy(n,e){return{$$typeof:Ga,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Bh(n){return typeof n=="object"&&n!==null&&n.$$typeof===Ga}function Py(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var pm=/\/+/g;function Tu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Py(""+n.key):e.toString(36)}function Yl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Ga:case _y:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Tu(o,0):i,hm(r)?(t="",n!=null&&(t=n.replace(pm,"$&/")+"/"),Yl(r,e,t,"",function(c){return c})):r!=null&&(Bh(r)&&(r=Cy(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(pm,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",hm(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Tu(s,a);o+=Yl(s,e,t,l,r)}else if(l=Ry(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Tu(s,a++),o+=Yl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Za(n,e,t){if(n==null)return n;var i=[],r=0;return Yl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Iy(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var mn={current:null},ql={transition:null},Ly={ReactCurrentDispatcher:mn,ReactCurrentBatchConfig:ql,ReactCurrentOwner:kh};function dx(){throw Error("act(...) is not supported in production builds of React.")}tt.Children={map:Za,forEach:function(n,e,t){Za(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Za(n,function(){e++}),e},toArray:function(n){return Za(n,function(e){return e})||[]},only:function(n){if(!Bh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};tt.Component=_o;tt.Fragment=vy;tt.Profiler=Sy;tt.PureComponent=Fh;tt.StrictMode=yy;tt.Suspense=Ty;tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ly;tt.act=dx;tt.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=sx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=kh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)lx.call(e,l)&&!cx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ga,type:n.type,key:r,ref:s,props:i,_owner:o}};tt.createContext=function(n){return n={$$typeof:Ey,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:My,_context:n},n.Consumer=n};tt.createElement=ux;tt.createFactory=function(n){var e=ux.bind(null,n);return e.type=n,e};tt.createRef=function(){return{current:null}};tt.forwardRef=function(n){return{$$typeof:wy,render:n}};tt.isValidElement=Bh;tt.lazy=function(n){return{$$typeof:Ay,_payload:{_status:-1,_result:n},_init:Iy}};tt.memo=function(n,e){return{$$typeof:by,type:n,compare:e===void 0?null:e}};tt.startTransition=function(n){var e=ql.transition;ql.transition={};try{n()}finally{ql.transition=e}};tt.unstable_act=dx;tt.useCallback=function(n,e){return mn.current.useCallback(n,e)};tt.useContext=function(n){return mn.current.useContext(n)};tt.useDebugValue=function(){};tt.useDeferredValue=function(n){return mn.current.useDeferredValue(n)};tt.useEffect=function(n,e){return mn.current.useEffect(n,e)};tt.useId=function(){return mn.current.useId()};tt.useImperativeHandle=function(n,e,t){return mn.current.useImperativeHandle(n,e,t)};tt.useInsertionEffect=function(n,e){return mn.current.useInsertionEffect(n,e)};tt.useLayoutEffect=function(n,e){return mn.current.useLayoutEffect(n,e)};tt.useMemo=function(n,e){return mn.current.useMemo(n,e)};tt.useReducer=function(n,e,t){return mn.current.useReducer(n,e,t)};tt.useRef=function(n){return mn.current.useRef(n)};tt.useState=function(n){return mn.current.useState(n)};tt.useSyncExternalStore=function(n,e,t){return mn.current.useSyncExternalStore(n,e,t)};tt.useTransition=function(){return mn.current.useTransition()};tt.version="18.3.1";ix.exports=tt;var ie=ix.exports;const Ny=xy(ie);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dy=ie,Uy=Symbol.for("react.element"),Fy=Symbol.for("react.fragment"),Oy=Object.prototype.hasOwnProperty,ky=Dy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,By={key:!0,ref:!0,__self:!0,__source:!0};function fx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Oy.call(e,i)&&!By.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Uy,type:n,key:s,ref:o,props:r,_owner:ky.current}}Zc.Fragment=Fy;Zc.jsx=fx;Zc.jsxs=fx;nx.exports=Zc;var E=nx.exports,Hd={},hx={exports:{}},Pn={},px={exports:{}},mx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(P,O){var q=P.length;P.push(O);e:for(;0<q;){var K=q-1>>>1,ee=P[K];if(0<r(ee,O))P[K]=O,P[q]=ee,q=K;else break e}}function t(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var O=P[0],q=P.pop();if(q!==O){P[0]=q;e:for(var K=0,ee=P.length,Ne=ee>>>1;K<Ne;){var ze=2*(K+1)-1,he=P[ze],j=ze+1,re=P[j];if(0>r(he,q))j<ee&&0>r(re,he)?(P[K]=re,P[j]=q,K=j):(P[K]=he,P[ze]=q,K=ze);else if(j<ee&&0>r(re,q))P[K]=re,P[j]=q,K=j;else break e}}return O}function r(P,O){var q=P.sortIndex-O.sortIndex;return q!==0?q:P.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,f=null,u=3,p=!1,g=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(P){for(var O=t(c);O!==null;){if(O.callback===null)i(c);else if(O.startTime<=P)i(c),O.sortIndex=O.expirationTime,e(l,O);else break;O=t(c)}}function S(P){if(v=!1,_(P),!g)if(t(l)!==null)g=!0,I(w);else{var O=t(c);O!==null&&N(S,O.startTime-P)}}function w(P,O){g=!1,v&&(v=!1,h(y),y=-1),p=!0;var q=u;try{for(_(O),f=t(l);f!==null&&(!(f.expirationTime>O)||P&&!L());){var K=f.callback;if(typeof K=="function"){f.callback=null,u=f.priorityLevel;var ee=K(f.expirationTime<=O);O=n.unstable_now(),typeof ee=="function"?f.callback=ee:f===t(l)&&i(l),_(O)}else i(l);f=t(l)}if(f!==null)var Ne=!0;else{var ze=t(c);ze!==null&&N(S,ze.startTime-O),Ne=!1}return Ne}finally{f=null,u=q,p=!1}}var b=!1,R=null,y=-1,T=5,D=-1;function L(){return!(n.unstable_now()-D<T)}function z(){if(R!==null){var P=n.unstable_now();D=P;var O=!0;try{O=R(!0,P)}finally{O?G():(b=!1,R=null)}}else b=!1}var G;if(typeof m=="function")G=function(){m(z)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,F=W.port2;W.port1.onmessage=z,G=function(){F.postMessage(null)}}else G=function(){x(z,0)};function I(P){R=P,b||(b=!0,G())}function N(P,O){y=x(function(){P(n.unstable_now())},O)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(P){P.callback=null},n.unstable_continueExecution=function(){g||p||(g=!0,I(w))},n.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<P?Math.floor(1e3/P):5},n.unstable_getCurrentPriorityLevel=function(){return u},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(P){switch(u){case 1:case 2:case 3:var O=3;break;default:O=u}var q=u;u=O;try{return P()}finally{u=q}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(P,O){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var q=u;u=P;try{return O()}finally{u=q}},n.unstable_scheduleCallback=function(P,O,q){var K=n.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?K+q:K):q=K,P){case 1:var ee=-1;break;case 2:ee=250;break;case 5:ee=1073741823;break;case 4:ee=1e4;break;default:ee=5e3}return ee=q+ee,P={id:d++,callback:O,priorityLevel:P,startTime:q,expirationTime:ee,sortIndex:-1},q>K?(P.sortIndex=q,e(c,P),t(l)===null&&P===t(c)&&(v?(h(y),y=-1):v=!0,N(S,q-K))):(P.sortIndex=ee,e(l,P),g||p||(g=!0,I(w))),P},n.unstable_shouldYield=L,n.unstable_wrapCallback=function(P){var O=u;return function(){var q=u;u=O;try{return P.apply(this,arguments)}finally{u=q}}}})(mx);px.exports=mx;var zy=px.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vy=ie,Cn=zy;function oe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var gx=new Set,ga={};function os(n,e){eo(n,e),eo(n+"Capture",e)}function eo(n,e){for(ga[n]=e,n=0;n<e.length;n++)gx.add(e[n])}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gd=Object.prototype.hasOwnProperty,Hy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mm={},gm={};function Gy(n){return Gd.call(gm,n)?!0:Gd.call(mm,n)?!1:Hy.test(n)?gm[n]=!0:(mm[n]=!0,!1)}function Wy(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function jy(n,e,t,i){if(e===null||typeof e>"u"||Wy(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function gn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var en={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){en[n]=new gn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];en[e]=new gn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){en[n]=new gn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){en[n]=new gn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){en[n]=new gn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){en[n]=new gn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){en[n]=new gn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){en[n]=new gn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){en[n]=new gn(n,5,!1,n.toLowerCase(),null,!1,!1)});var zh=/[\-:]([a-z])/g;function Vh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(zh,Vh);en[e]=new gn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(zh,Vh);en[e]=new gn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(zh,Vh);en[e]=new gn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){en[n]=new gn(n,1,!1,n.toLowerCase(),null,!1,!1)});en.xlinkHref=new gn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){en[n]=new gn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Hh(n,e,t,i){var r=en.hasOwnProperty(e)?en[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jy(e,t,r,i)&&(t=null),i||r===null?Gy(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ji=Vy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ja=Symbol.for("react.element"),Ls=Symbol.for("react.portal"),Ns=Symbol.for("react.fragment"),Gh=Symbol.for("react.strict_mode"),Wd=Symbol.for("react.profiler"),xx=Symbol.for("react.provider"),_x=Symbol.for("react.context"),Wh=Symbol.for("react.forward_ref"),jd=Symbol.for("react.suspense"),Xd=Symbol.for("react.suspense_list"),jh=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),vx=Symbol.for("react.offscreen"),xm=Symbol.iterator;function Ro(n){return n===null||typeof n!="object"?null:(n=xm&&n[xm]||n["@@iterator"],typeof n=="function"?n:null)}var wt=Object.assign,bu;function Ko(n){if(bu===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);bu=e&&e[1]||""}return`
`+bu+n}var Au=!1;function Ru(n,e){if(!n||Au)return"";Au=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Au=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Ko(n):""}function Xy(n){switch(n.tag){case 5:return Ko(n.type);case 16:return Ko("Lazy");case 13:return Ko("Suspense");case 19:return Ko("SuspenseList");case 0:case 2:case 15:return n=Ru(n.type,!1),n;case 11:return n=Ru(n.type.render,!1),n;case 1:return n=Ru(n.type,!0),n;default:return""}}function Yd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Ns:return"Fragment";case Ls:return"Portal";case Wd:return"Profiler";case Gh:return"StrictMode";case jd:return"Suspense";case Xd:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case _x:return(n.displayName||"Context")+".Consumer";case xx:return(n._context.displayName||"Context")+".Provider";case Wh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case jh:return e=n.displayName||null,e!==null?e:Yd(n.type)||"Memo";case ur:e=n._payload,n=n._init;try{return Yd(n(e))}catch{}}return null}function Yy(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Yd(e);case 8:return e===Gh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function yx(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qy(n){var e=yx(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Qa(n){n._valueTracker||(n._valueTracker=qy(n))}function Sx(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=yx(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function mc(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function qd(n,e){var t=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function _m(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ar(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Mx(n,e){e=e.checked,e!=null&&Hh(n,"checked",e,!1)}function $d(n,e){Mx(n,e);var t=Ar(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Kd(n,e.type,t):e.hasOwnProperty("defaultValue")&&Kd(n,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function vm(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Kd(n,e,t){(e!=="number"||mc(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Zo=Array.isArray;function Ws(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ar(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Zd(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function ym(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(oe(92));if(Zo(t)){if(1<t.length)throw Error(oe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ar(t)}}function Ex(n,e){var t=Ar(e.value),i=Ar(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Sm(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function wx(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jd(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?wx(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var el,Tx=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(el=el||document.createElement("div"),el.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=el.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function xa(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var ia={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},$y=["Webkit","ms","Moz","O"];Object.keys(ia).forEach(function(n){$y.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),ia[e]=ia[n]})});function bx(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||ia.hasOwnProperty(n)&&ia[n]?(""+e).trim():e+"px"}function Ax(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=bx(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Ky=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qd(n,e){if(e){if(Ky[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function ef(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tf=null;function Xh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var nf=null,js=null,Xs=null;function Mm(n){if(n=Xa(n)){if(typeof nf!="function")throw Error(oe(280));var e=n.stateNode;e&&(e=nu(e),nf(n.stateNode,n.type,e))}}function Rx(n){js?Xs?Xs.push(n):Xs=[n]:js=n}function Cx(){if(js){var n=js,e=Xs;if(Xs=js=null,Mm(n),e)for(n=0;n<e.length;n++)Mm(e[n])}}function Px(n,e){return n(e)}function Ix(){}var Cu=!1;function Lx(n,e,t){if(Cu)return n(e,t);Cu=!0;try{return Px(n,e,t)}finally{Cu=!1,(js!==null||Xs!==null)&&(Ix(),Cx())}}function _a(n,e){var t=n.stateNode;if(t===null)return null;var i=nu(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(oe(231,e,typeof t));return t}var rf=!1;if(ji)try{var Co={};Object.defineProperty(Co,"passive",{get:function(){rf=!0}}),window.addEventListener("test",Co,Co),window.removeEventListener("test",Co,Co)}catch{rf=!1}function Zy(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(d){this.onError(d)}}var ra=!1,gc=null,xc=!1,sf=null,Jy={onError:function(n){ra=!0,gc=n}};function Qy(n,e,t,i,r,s,o,a,l){ra=!1,gc=null,Zy.apply(Jy,arguments)}function eS(n,e,t,i,r,s,o,a,l){if(Qy.apply(this,arguments),ra){if(ra){var c=gc;ra=!1,gc=null}else throw Error(oe(198));xc||(xc=!0,sf=c)}}function as(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function Nx(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Em(n){if(as(n)!==n)throw Error(oe(188))}function tS(n){var e=n.alternate;if(!e){if(e=as(n),e===null)throw Error(oe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Em(r),n;if(s===i)return Em(r),e;s=s.sibling}throw Error(oe(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(t.alternate!==i)throw Error(oe(190))}if(t.tag!==3)throw Error(oe(188));return t.stateNode.current===t?n:e}function Dx(n){return n=tS(n),n!==null?Ux(n):null}function Ux(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=Ux(n);if(e!==null)return e;n=n.sibling}return null}var Fx=Cn.unstable_scheduleCallback,wm=Cn.unstable_cancelCallback,nS=Cn.unstable_shouldYield,iS=Cn.unstable_requestPaint,Lt=Cn.unstable_now,rS=Cn.unstable_getCurrentPriorityLevel,Yh=Cn.unstable_ImmediatePriority,Ox=Cn.unstable_UserBlockingPriority,_c=Cn.unstable_NormalPriority,sS=Cn.unstable_LowPriority,kx=Cn.unstable_IdlePriority,Jc=null,vi=null;function oS(n){if(vi&&typeof vi.onCommitFiberRoot=="function")try{vi.onCommitFiberRoot(Jc,n,void 0,(n.current.flags&128)===128)}catch{}}var ti=Math.clz32?Math.clz32:cS,aS=Math.log,lS=Math.LN2;function cS(n){return n>>>=0,n===0?32:31-(aS(n)/lS|0)|0}var tl=64,nl=4194304;function Jo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vc(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Jo(a):(s&=o,s!==0&&(i=Jo(s)))}else o=t&~r,o!==0?i=Jo(o):s!==0&&(i=Jo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ti(e),r=1<<t,i|=n[t],e&=~r;return i}function uS(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function dS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ti(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=uS(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function of(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Bx(){var n=tl;return tl<<=1,!(tl&4194240)&&(tl=64),n}function Pu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Wa(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ti(e),n[e]=t}function fS(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ti(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function qh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ti(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var ut=0;function zx(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Vx,$h,Hx,Gx,Wx,af=!1,il=[],vr=null,yr=null,Sr=null,va=new Map,ya=new Map,fr=[],hS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Tm(n,e){switch(n){case"focusin":case"focusout":vr=null;break;case"dragenter":case"dragleave":yr=null;break;case"mouseover":case"mouseout":Sr=null;break;case"pointerover":case"pointerout":va.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function Po(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Xa(e),e!==null&&$h(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function pS(n,e,t,i,r){switch(e){case"focusin":return vr=Po(vr,n,e,t,i,r),!0;case"dragenter":return yr=Po(yr,n,e,t,i,r),!0;case"mouseover":return Sr=Po(Sr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return va.set(s,Po(va.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ya.set(s,Po(ya.get(s)||null,n,e,t,i,r)),!0}return!1}function jx(n){var e=Yr(n.target);if(e!==null){var t=as(e);if(t!==null){if(e=t.tag,e===13){if(e=Nx(t),e!==null){n.blockedOn=e,Wx(n.priority,function(){Hx(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function $l(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=lf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);tf=i,t.target.dispatchEvent(i),tf=null}else return e=Xa(t),e!==null&&$h(e),n.blockedOn=t,!1;e.shift()}return!0}function bm(n,e,t){$l(n)&&t.delete(e)}function mS(){af=!1,vr!==null&&$l(vr)&&(vr=null),yr!==null&&$l(yr)&&(yr=null),Sr!==null&&$l(Sr)&&(Sr=null),va.forEach(bm),ya.forEach(bm)}function Io(n,e){n.blockedOn===e&&(n.blockedOn=null,af||(af=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,mS)))}function Sa(n){function e(r){return Io(r,n)}if(0<il.length){Io(il[0],n);for(var t=1;t<il.length;t++){var i=il[t];i.blockedOn===n&&(i.blockedOn=null)}}for(vr!==null&&Io(vr,n),yr!==null&&Io(yr,n),Sr!==null&&Io(Sr,n),va.forEach(e),ya.forEach(e),t=0;t<fr.length;t++)i=fr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<fr.length&&(t=fr[0],t.blockedOn===null);)jx(t),t.blockedOn===null&&fr.shift()}var Ys=Ji.ReactCurrentBatchConfig,yc=!0;function gS(n,e,t,i){var r=ut,s=Ys.transition;Ys.transition=null;try{ut=1,Kh(n,e,t,i)}finally{ut=r,Ys.transition=s}}function xS(n,e,t,i){var r=ut,s=Ys.transition;Ys.transition=null;try{ut=4,Kh(n,e,t,i)}finally{ut=r,Ys.transition=s}}function Kh(n,e,t,i){if(yc){var r=lf(n,e,t,i);if(r===null)zu(n,e,i,Sc,t),Tm(n,i);else if(pS(r,n,e,t,i))i.stopPropagation();else if(Tm(n,i),e&4&&-1<hS.indexOf(n)){for(;r!==null;){var s=Xa(r);if(s!==null&&Vx(s),s=lf(n,e,t,i),s===null&&zu(n,e,i,Sc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else zu(n,e,i,null,t)}}var Sc=null;function lf(n,e,t,i){if(Sc=null,n=Xh(i),n=Yr(n),n!==null)if(e=as(n),e===null)n=null;else if(t=e.tag,t===13){if(n=Nx(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Sc=n,null}function Xx(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rS()){case Yh:return 1;case Ox:return 4;case _c:case sS:return 16;case kx:return 536870912;default:return 16}default:return 16}}var mr=null,Zh=null,Kl=null;function Yx(){if(Kl)return Kl;var n,e=Zh,t=e.length,i,r="value"in mr?mr.value:mr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Kl=r.slice(n,1<i?1-i:void 0)}function Zl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function rl(){return!0}function Am(){return!1}function In(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rl:Am,this.isPropagationStopped=Am,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),e}var vo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jh=In(vo),ja=wt({},vo,{view:0,detail:0}),_S=In(ja),Iu,Lu,Lo,Qc=wt({},ja,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Lo&&(Lo&&n.type==="mousemove"?(Iu=n.screenX-Lo.screenX,Lu=n.screenY-Lo.screenY):Lu=Iu=0,Lo=n),Iu)},movementY:function(n){return"movementY"in n?n.movementY:Lu}}),Rm=In(Qc),vS=wt({},Qc,{dataTransfer:0}),yS=In(vS),SS=wt({},ja,{relatedTarget:0}),Nu=In(SS),MS=wt({},vo,{animationName:0,elapsedTime:0,pseudoElement:0}),ES=In(MS),wS=wt({},vo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),TS=In(wS),bS=wt({},vo,{data:0}),Cm=In(bS),AS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},RS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},CS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function PS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=CS[n])?!!e[n]:!1}function Qh(){return PS}var IS=wt({},ja,{key:function(n){if(n.key){var e=AS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Zl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?RS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qh,charCode:function(n){return n.type==="keypress"?Zl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Zl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),LS=In(IS),NS=wt({},Qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pm=In(NS),DS=wt({},ja,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qh}),US=In(DS),FS=wt({},vo,{propertyName:0,elapsedTime:0,pseudoElement:0}),OS=In(FS),kS=wt({},Qc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),BS=In(kS),zS=[9,13,27,32],ep=ji&&"CompositionEvent"in window,sa=null;ji&&"documentMode"in document&&(sa=document.documentMode);var VS=ji&&"TextEvent"in window&&!sa,qx=ji&&(!ep||sa&&8<sa&&11>=sa),Im=" ",Lm=!1;function $x(n,e){switch(n){case"keyup":return zS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kx(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ds=!1;function HS(n,e){switch(n){case"compositionend":return Kx(e);case"keypress":return e.which!==32?null:(Lm=!0,Im);case"textInput":return n=e.data,n===Im&&Lm?null:n;default:return null}}function GS(n,e){if(Ds)return n==="compositionend"||!ep&&$x(n,e)?(n=Yx(),Kl=Zh=mr=null,Ds=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return qx&&e.locale!=="ko"?null:e.data;default:return null}}var WS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Nm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!WS[n.type]:e==="textarea"}function Zx(n,e,t,i){Rx(i),e=Mc(e,"onChange"),0<e.length&&(t=new Jh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var oa=null,Ma=null;function jS(n){l_(n,0)}function eu(n){var e=Os(n);if(Sx(e))return n}function XS(n,e){if(n==="change")return e}var Jx=!1;if(ji){var Du;if(ji){var Uu="oninput"in document;if(!Uu){var Dm=document.createElement("div");Dm.setAttribute("oninput","return;"),Uu=typeof Dm.oninput=="function"}Du=Uu}else Du=!1;Jx=Du&&(!document.documentMode||9<document.documentMode)}function Um(){oa&&(oa.detachEvent("onpropertychange",Qx),Ma=oa=null)}function Qx(n){if(n.propertyName==="value"&&eu(Ma)){var e=[];Zx(e,Ma,n,Xh(n)),Lx(jS,e)}}function YS(n,e,t){n==="focusin"?(Um(),oa=e,Ma=t,oa.attachEvent("onpropertychange",Qx)):n==="focusout"&&Um()}function qS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return eu(Ma)}function $S(n,e){if(n==="click")return eu(e)}function KS(n,e){if(n==="input"||n==="change")return eu(e)}function ZS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ri=typeof Object.is=="function"?Object.is:ZS;function Ea(n,e){if(ri(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Gd.call(e,r)||!ri(n[r],e[r]))return!1}return!0}function Fm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Om(n,e){var t=Fm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Fm(t)}}function e_(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?e_(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function t_(){for(var n=window,e=mc();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=mc(n.document)}return e}function tp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function JS(n){var e=t_(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&e_(t.ownerDocument.documentElement,t)){if(i!==null&&tp(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=Om(t,s);var o=Om(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var QS=ji&&"documentMode"in document&&11>=document.documentMode,Us=null,cf=null,aa=null,uf=!1;function km(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;uf||Us==null||Us!==mc(i)||(i=Us,"selectionStart"in i&&tp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),aa&&Ea(aa,i)||(aa=i,i=Mc(cf,"onSelect"),0<i.length&&(e=new Jh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Us)))}function sl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Fs={animationend:sl("Animation","AnimationEnd"),animationiteration:sl("Animation","AnimationIteration"),animationstart:sl("Animation","AnimationStart"),transitionend:sl("Transition","TransitionEnd")},Fu={},n_={};ji&&(n_=document.createElement("div").style,"AnimationEvent"in window||(delete Fs.animationend.animation,delete Fs.animationiteration.animation,delete Fs.animationstart.animation),"TransitionEvent"in window||delete Fs.transitionend.transition);function tu(n){if(Fu[n])return Fu[n];if(!Fs[n])return n;var e=Fs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in n_)return Fu[n]=e[t];return n}var i_=tu("animationend"),r_=tu("animationiteration"),s_=tu("animationstart"),o_=tu("transitionend"),a_=new Map,Bm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Cr(n,e){a_.set(n,e),os(e,[n])}for(var Ou=0;Ou<Bm.length;Ou++){var ku=Bm[Ou],eM=ku.toLowerCase(),tM=ku[0].toUpperCase()+ku.slice(1);Cr(eM,"on"+tM)}Cr(i_,"onAnimationEnd");Cr(r_,"onAnimationIteration");Cr(s_,"onAnimationStart");Cr("dblclick","onDoubleClick");Cr("focusin","onFocus");Cr("focusout","onBlur");Cr(o_,"onTransitionEnd");eo("onMouseEnter",["mouseout","mouseover"]);eo("onMouseLeave",["mouseout","mouseover"]);eo("onPointerEnter",["pointerout","pointerover"]);eo("onPointerLeave",["pointerout","pointerover"]);os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));os("onBeforeInput",["compositionend","keypress","textInput","paste"]);os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nM=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));function zm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,eS(i,e,void 0,n),n.currentTarget=null}function l_(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;zm(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;zm(r,a,c),s=l}}}if(xc)throw n=sf,xc=!1,sf=null,n}function gt(n,e){var t=e[mf];t===void 0&&(t=e[mf]=new Set);var i=n+"__bubble";t.has(i)||(c_(e,n,2,!1),t.add(i))}function Bu(n,e,t){var i=0;e&&(i|=4),c_(t,n,i,e)}var ol="_reactListening"+Math.random().toString(36).slice(2);function wa(n){if(!n[ol]){n[ol]=!0,gx.forEach(function(t){t!=="selectionchange"&&(nM.has(t)||Bu(t,!1,n),Bu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ol]||(e[ol]=!0,Bu("selectionchange",!1,e))}}function c_(n,e,t,i){switch(Xx(e)){case 1:var r=gS;break;case 4:r=xS;break;default:r=Kh}t=r.bind(null,e,t,n),r=void 0,!rf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function zu(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Yr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Lx(function(){var c=s,d=Xh(t),f=[];e:{var u=a_.get(n);if(u!==void 0){var p=Jh,g=n;switch(n){case"keypress":if(Zl(t)===0)break e;case"keydown":case"keyup":p=LS;break;case"focusin":g="focus",p=Nu;break;case"focusout":g="blur",p=Nu;break;case"beforeblur":case"afterblur":p=Nu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=yS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=US;break;case i_:case r_:case s_:p=ES;break;case o_:p=OS;break;case"scroll":p=_S;break;case"wheel":p=BS;break;case"copy":case"cut":case"paste":p=TS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Pm}var v=(e&4)!==0,x=!v&&n==="scroll",h=v?u!==null?u+"Capture":null:u;v=[];for(var m=c,_;m!==null;){_=m;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,h!==null&&(S=_a(m,h),S!=null&&v.push(Ta(m,S,_)))),x)break;m=m.return}0<v.length&&(u=new p(u,g,null,t,d),f.push({event:u,listeners:v}))}}if(!(e&7)){e:{if(u=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",u&&t!==tf&&(g=t.relatedTarget||t.fromElement)&&(Yr(g)||g[Xi]))break e;if((p||u)&&(u=d.window===d?d:(u=d.ownerDocument)?u.defaultView||u.parentWindow:window,p?(g=t.relatedTarget||t.toElement,p=c,g=g?Yr(g):null,g!==null&&(x=as(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(v=Rm,S="onMouseLeave",h="onMouseEnter",m="mouse",(n==="pointerout"||n==="pointerover")&&(v=Pm,S="onPointerLeave",h="onPointerEnter",m="pointer"),x=p==null?u:Os(p),_=g==null?u:Os(g),u=new v(S,m+"leave",p,t,d),u.target=x,u.relatedTarget=_,S=null,Yr(d)===c&&(v=new v(h,m+"enter",g,t,d),v.target=_,v.relatedTarget=x,S=v),x=S,p&&g)t:{for(v=p,h=g,m=0,_=v;_;_=us(_))m++;for(_=0,S=h;S;S=us(S))_++;for(;0<m-_;)v=us(v),m--;for(;0<_-m;)h=us(h),_--;for(;m--;){if(v===h||h!==null&&v===h.alternate)break t;v=us(v),h=us(h)}v=null}else v=null;p!==null&&Vm(f,u,p,v,!1),g!==null&&x!==null&&Vm(f,x,g,v,!0)}}e:{if(u=c?Os(c):window,p=u.nodeName&&u.nodeName.toLowerCase(),p==="select"||p==="input"&&u.type==="file")var w=XS;else if(Nm(u))if(Jx)w=KS;else{w=qS;var b=YS}else(p=u.nodeName)&&p.toLowerCase()==="input"&&(u.type==="checkbox"||u.type==="radio")&&(w=$S);if(w&&(w=w(n,c))){Zx(f,w,t,d);break e}b&&b(n,u,c),n==="focusout"&&(b=u._wrapperState)&&b.controlled&&u.type==="number"&&Kd(u,"number",u.value)}switch(b=c?Os(c):window,n){case"focusin":(Nm(b)||b.contentEditable==="true")&&(Us=b,cf=c,aa=null);break;case"focusout":aa=cf=Us=null;break;case"mousedown":uf=!0;break;case"contextmenu":case"mouseup":case"dragend":uf=!1,km(f,t,d);break;case"selectionchange":if(QS)break;case"keydown":case"keyup":km(f,t,d)}var R;if(ep)e:{switch(n){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Ds?$x(n,t)&&(y="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(y="onCompositionStart");y&&(qx&&t.locale!=="ko"&&(Ds||y!=="onCompositionStart"?y==="onCompositionEnd"&&Ds&&(R=Yx()):(mr=d,Zh="value"in mr?mr.value:mr.textContent,Ds=!0)),b=Mc(c,y),0<b.length&&(y=new Cm(y,n,null,t,d),f.push({event:y,listeners:b}),R?y.data=R:(R=Kx(t),R!==null&&(y.data=R)))),(R=VS?HS(n,t):GS(n,t))&&(c=Mc(c,"onBeforeInput"),0<c.length&&(d=new Cm("onBeforeInput","beforeinput",null,t,d),f.push({event:d,listeners:c}),d.data=R))}l_(f,e)})}function Ta(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Mc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=_a(n,t),s!=null&&i.unshift(Ta(n,s,r)),s=_a(n,e),s!=null&&i.push(Ta(n,s,r))),n=n.return}return i}function us(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Vm(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=_a(t,s),l!=null&&o.unshift(Ta(t,l,a))):r||(l=_a(t,s),l!=null&&o.push(Ta(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var iM=/\r\n?/g,rM=/\u0000|\uFFFD/g;function Hm(n){return(typeof n=="string"?n:""+n).replace(iM,`
`).replace(rM,"")}function al(n,e,t){if(e=Hm(e),Hm(n)!==e&&t)throw Error(oe(425))}function Ec(){}var df=null,ff=null;function hf(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pf=typeof setTimeout=="function"?setTimeout:void 0,sM=typeof clearTimeout=="function"?clearTimeout:void 0,Gm=typeof Promise=="function"?Promise:void 0,oM=typeof queueMicrotask=="function"?queueMicrotask:typeof Gm<"u"?function(n){return Gm.resolve(null).then(n).catch(aM)}:pf;function aM(n){setTimeout(function(){throw n})}function Vu(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Sa(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Sa(e)}function Mr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Wm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var yo=Math.random().toString(36).slice(2),gi="__reactFiber$"+yo,ba="__reactProps$"+yo,Xi="__reactContainer$"+yo,mf="__reactEvents$"+yo,lM="__reactListeners$"+yo,cM="__reactHandles$"+yo;function Yr(n){var e=n[gi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Xi]||t[gi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Wm(n);n!==null;){if(t=n[gi])return t;n=Wm(n)}return e}n=t,t=n.parentNode}return null}function Xa(n){return n=n[gi]||n[Xi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Os(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(oe(33))}function nu(n){return n[ba]||null}var gf=[],ks=-1;function Pr(n){return{current:n}}function _t(n){0>ks||(n.current=gf[ks],gf[ks]=null,ks--)}function mt(n,e){ks++,gf[ks]=n.current,n.current=e}var Rr={},ln=Pr(Rr),vn=Pr(!1),Qr=Rr;function to(n,e){var t=n.type.contextTypes;if(!t)return Rr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function yn(n){return n=n.childContextTypes,n!=null}function wc(){_t(vn),_t(ln)}function jm(n,e,t){if(ln.current!==Rr)throw Error(oe(168));mt(ln,e),mt(vn,t)}function u_(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,Yy(n)||"Unknown",r));return wt({},t,i)}function Tc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Rr,Qr=ln.current,mt(ln,n),mt(vn,vn.current),!0}function Xm(n,e,t){var i=n.stateNode;if(!i)throw Error(oe(169));t?(n=u_(n,e,Qr),i.__reactInternalMemoizedMergedChildContext=n,_t(vn),_t(ln),mt(ln,n)):_t(vn),mt(vn,t)}var Fi=null,iu=!1,Hu=!1;function d_(n){Fi===null?Fi=[n]:Fi.push(n)}function uM(n){iu=!0,d_(n)}function Ir(){if(!Hu&&Fi!==null){Hu=!0;var n=0,e=ut;try{var t=Fi;for(ut=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Fi=null,iu=!1}catch(r){throw Fi!==null&&(Fi=Fi.slice(n+1)),Fx(Yh,Ir),r}finally{ut=e,Hu=!1}}return null}var Bs=[],zs=0,bc=null,Ac=0,Dn=[],Un=0,es=null,Oi=1,ki="";function Vr(n,e){Bs[zs++]=Ac,Bs[zs++]=bc,bc=n,Ac=e}function f_(n,e,t){Dn[Un++]=Oi,Dn[Un++]=ki,Dn[Un++]=es,es=n;var i=Oi;n=ki;var r=32-ti(i)-1;i&=~(1<<r),t+=1;var s=32-ti(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Oi=1<<32-ti(e)+r|t<<r|i,ki=s+n}else Oi=1<<s|t<<r|i,ki=n}function np(n){n.return!==null&&(Vr(n,1),f_(n,1,0))}function ip(n){for(;n===bc;)bc=Bs[--zs],Bs[zs]=null,Ac=Bs[--zs],Bs[zs]=null;for(;n===es;)es=Dn[--Un],Dn[Un]=null,ki=Dn[--Un],Dn[Un]=null,Oi=Dn[--Un],Dn[Un]=null}var Rn=null,An=null,yt=!1,Zn=null;function h_(n,e){var t=On(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Ym(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Rn=n,An=Mr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Rn=n,An=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=es!==null?{id:Oi,overflow:ki}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=On(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Rn=n,An=null,!0):!1;default:return!1}}function xf(n){return(n.mode&1)!==0&&(n.flags&128)===0}function _f(n){if(yt){var e=An;if(e){var t=e;if(!Ym(n,e)){if(xf(n))throw Error(oe(418));e=Mr(t.nextSibling);var i=Rn;e&&Ym(n,e)?h_(i,t):(n.flags=n.flags&-4097|2,yt=!1,Rn=n)}}else{if(xf(n))throw Error(oe(418));n.flags=n.flags&-4097|2,yt=!1,Rn=n}}}function qm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Rn=n}function ll(n){if(n!==Rn)return!1;if(!yt)return qm(n),yt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!hf(n.type,n.memoizedProps)),e&&(e=An)){if(xf(n))throw p_(),Error(oe(418));for(;e;)h_(n,e),e=Mr(e.nextSibling)}if(qm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(oe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){An=Mr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}An=null}}else An=Rn?Mr(n.stateNode.nextSibling):null;return!0}function p_(){for(var n=An;n;)n=Mr(n.nextSibling)}function no(){An=Rn=null,yt=!1}function rp(n){Zn===null?Zn=[n]:Zn.push(n)}var dM=Ji.ReactCurrentBatchConfig;function No(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(oe(309));var i=t.stateNode}if(!i)throw Error(oe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(oe(284));if(!t._owner)throw Error(oe(290,n))}return n}function cl(n,e){throw n=Object.prototype.toString.call(e),Error(oe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function $m(n){var e=n._init;return e(n._payload)}function m_(n){function e(h,m){if(n){var _=h.deletions;_===null?(h.deletions=[m],h.flags|=16):_.push(m)}}function t(h,m){if(!n)return null;for(;m!==null;)e(h,m),m=m.sibling;return null}function i(h,m){for(h=new Map;m!==null;)m.key!==null?h.set(m.key,m):h.set(m.index,m),m=m.sibling;return h}function r(h,m){return h=br(h,m),h.index=0,h.sibling=null,h}function s(h,m,_){return h.index=_,n?(_=h.alternate,_!==null?(_=_.index,_<m?(h.flags|=2,m):_):(h.flags|=2,m)):(h.flags|=1048576,m)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,m,_,S){return m===null||m.tag!==6?(m=$u(_,h.mode,S),m.return=h,m):(m=r(m,_),m.return=h,m)}function l(h,m,_,S){var w=_.type;return w===Ns?d(h,m,_.props.children,S,_.key):m!==null&&(m.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ur&&$m(w)===m.type)?(S=r(m,_.props),S.ref=No(h,m,_),S.return=h,S):(S=rc(_.type,_.key,_.props,null,h.mode,S),S.ref=No(h,m,_),S.return=h,S)}function c(h,m,_,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==_.containerInfo||m.stateNode.implementation!==_.implementation?(m=Ku(_,h.mode,S),m.return=h,m):(m=r(m,_.children||[]),m.return=h,m)}function d(h,m,_,S,w){return m===null||m.tag!==7?(m=Jr(_,h.mode,S,w),m.return=h,m):(m=r(m,_),m.return=h,m)}function f(h,m,_){if(typeof m=="string"&&m!==""||typeof m=="number")return m=$u(""+m,h.mode,_),m.return=h,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ja:return _=rc(m.type,m.key,m.props,null,h.mode,_),_.ref=No(h,null,m),_.return=h,_;case Ls:return m=Ku(m,h.mode,_),m.return=h,m;case ur:var S=m._init;return f(h,S(m._payload),_)}if(Zo(m)||Ro(m))return m=Jr(m,h.mode,_,null),m.return=h,m;cl(h,m)}return null}function u(h,m,_,S){var w=m!==null?m.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return w!==null?null:a(h,m,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ja:return _.key===w?l(h,m,_,S):null;case Ls:return _.key===w?c(h,m,_,S):null;case ur:return w=_._init,u(h,m,w(_._payload),S)}if(Zo(_)||Ro(_))return w!==null?null:d(h,m,_,S,null);cl(h,_)}return null}function p(h,m,_,S,w){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(_)||null,a(m,h,""+S,w);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ja:return h=h.get(S.key===null?_:S.key)||null,l(m,h,S,w);case Ls:return h=h.get(S.key===null?_:S.key)||null,c(m,h,S,w);case ur:var b=S._init;return p(h,m,_,b(S._payload),w)}if(Zo(S)||Ro(S))return h=h.get(_)||null,d(m,h,S,w,null);cl(m,S)}return null}function g(h,m,_,S){for(var w=null,b=null,R=m,y=m=0,T=null;R!==null&&y<_.length;y++){R.index>y?(T=R,R=null):T=R.sibling;var D=u(h,R,_[y],S);if(D===null){R===null&&(R=T);break}n&&R&&D.alternate===null&&e(h,R),m=s(D,m,y),b===null?w=D:b.sibling=D,b=D,R=T}if(y===_.length)return t(h,R),yt&&Vr(h,y),w;if(R===null){for(;y<_.length;y++)R=f(h,_[y],S),R!==null&&(m=s(R,m,y),b===null?w=R:b.sibling=R,b=R);return yt&&Vr(h,y),w}for(R=i(h,R);y<_.length;y++)T=p(R,h,y,_[y],S),T!==null&&(n&&T.alternate!==null&&R.delete(T.key===null?y:T.key),m=s(T,m,y),b===null?w=T:b.sibling=T,b=T);return n&&R.forEach(function(L){return e(h,L)}),yt&&Vr(h,y),w}function v(h,m,_,S){var w=Ro(_);if(typeof w!="function")throw Error(oe(150));if(_=w.call(_),_==null)throw Error(oe(151));for(var b=w=null,R=m,y=m=0,T=null,D=_.next();R!==null&&!D.done;y++,D=_.next()){R.index>y?(T=R,R=null):T=R.sibling;var L=u(h,R,D.value,S);if(L===null){R===null&&(R=T);break}n&&R&&L.alternate===null&&e(h,R),m=s(L,m,y),b===null?w=L:b.sibling=L,b=L,R=T}if(D.done)return t(h,R),yt&&Vr(h,y),w;if(R===null){for(;!D.done;y++,D=_.next())D=f(h,D.value,S),D!==null&&(m=s(D,m,y),b===null?w=D:b.sibling=D,b=D);return yt&&Vr(h,y),w}for(R=i(h,R);!D.done;y++,D=_.next())D=p(R,h,y,D.value,S),D!==null&&(n&&D.alternate!==null&&R.delete(D.key===null?y:D.key),m=s(D,m,y),b===null?w=D:b.sibling=D,b=D);return n&&R.forEach(function(z){return e(h,z)}),yt&&Vr(h,y),w}function x(h,m,_,S){if(typeof _=="object"&&_!==null&&_.type===Ns&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ja:e:{for(var w=_.key,b=m;b!==null;){if(b.key===w){if(w=_.type,w===Ns){if(b.tag===7){t(h,b.sibling),m=r(b,_.props.children),m.return=h,h=m;break e}}else if(b.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ur&&$m(w)===b.type){t(h,b.sibling),m=r(b,_.props),m.ref=No(h,b,_),m.return=h,h=m;break e}t(h,b);break}else e(h,b);b=b.sibling}_.type===Ns?(m=Jr(_.props.children,h.mode,S,_.key),m.return=h,h=m):(S=rc(_.type,_.key,_.props,null,h.mode,S),S.ref=No(h,m,_),S.return=h,h=S)}return o(h);case Ls:e:{for(b=_.key;m!==null;){if(m.key===b)if(m.tag===4&&m.stateNode.containerInfo===_.containerInfo&&m.stateNode.implementation===_.implementation){t(h,m.sibling),m=r(m,_.children||[]),m.return=h,h=m;break e}else{t(h,m);break}else e(h,m);m=m.sibling}m=Ku(_,h.mode,S),m.return=h,h=m}return o(h);case ur:return b=_._init,x(h,m,b(_._payload),S)}if(Zo(_))return g(h,m,_,S);if(Ro(_))return v(h,m,_,S);cl(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,m!==null&&m.tag===6?(t(h,m.sibling),m=r(m,_),m.return=h,h=m):(t(h,m),m=$u(_,h.mode,S),m.return=h,h=m),o(h)):t(h,m)}return x}var io=m_(!0),g_=m_(!1),Rc=Pr(null),Cc=null,Vs=null,sp=null;function op(){sp=Vs=Cc=null}function ap(n){var e=Rc.current;_t(Rc),n._currentValue=e}function vf(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function qs(n,e){Cc=n,sp=Vs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(_n=!0),n.firstContext=null)}function Hn(n){var e=n._currentValue;if(sp!==n)if(n={context:n,memoizedValue:e,next:null},Vs===null){if(Cc===null)throw Error(oe(308));Vs=n,Cc.dependencies={lanes:0,firstContext:n}}else Vs=Vs.next=n;return e}var qr=null;function lp(n){qr===null?qr=[n]:qr.push(n)}function x_(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,lp(e)):(t.next=r.next,r.next=t),e.interleaved=t,Yi(n,i)}function Yi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var dr=!1;function cp(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function __(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Hi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Er(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,rt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Yi(n,t)}return r=i.interleaved,r===null?(e.next=e,lp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Yi(n,t)}function Jl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,qh(n,t)}}function Km(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Pc(n,e,t,i){var r=n.updateQueue;dr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=n.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,d=c=l=null,a=s;do{var u=a.lane,p=a.eventTime;if((i&u)===u){d!==null&&(d=d.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=n,v=a;switch(u=e,p=t,v.tag){case 1:if(g=v.payload,typeof g=="function"){f=g.call(p,f,u);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,u=typeof g=="function"?g.call(p,f,u):g,u==null)break e;f=wt({},f,u);break e;case 2:dr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,u=r.effects,u===null?r.effects=[a]:u.push(a))}else p={eventTime:p,lane:u,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=p,l=f):d=d.next=p,o|=u;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;u=a,a=u.next,u.next=null,r.lastBaseUpdate=u,r.shared.pending=null}}while(!0);if(d===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ns|=o,n.lanes=o,n.memoizedState=f}}function Zm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Ya={},yi=Pr(Ya),Aa=Pr(Ya),Ra=Pr(Ya);function $r(n){if(n===Ya)throw Error(oe(174));return n}function up(n,e){switch(mt(Ra,e),mt(Aa,n),mt(yi,Ya),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jd(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Jd(e,n)}_t(yi),mt(yi,e)}function ro(){_t(yi),_t(Aa),_t(Ra)}function v_(n){$r(Ra.current);var e=$r(yi.current),t=Jd(e,n.type);e!==t&&(mt(Aa,n),mt(yi,t))}function dp(n){Aa.current===n&&(_t(yi),_t(Aa))}var St=Pr(0);function Ic(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gu=[];function fp(){for(var n=0;n<Gu.length;n++)Gu[n]._workInProgressVersionPrimary=null;Gu.length=0}var Ql=Ji.ReactCurrentDispatcher,Wu=Ji.ReactCurrentBatchConfig,ts=0,Et=null,Ot=null,qt=null,Lc=!1,la=!1,Ca=0,fM=0;function nn(){throw Error(oe(321))}function hp(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ri(n[t],e[t]))return!1;return!0}function pp(n,e,t,i,r,s){if(ts=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ql.current=n===null||n.memoizedState===null?gM:xM,n=t(i,r),la){s=0;do{if(la=!1,Ca=0,25<=s)throw Error(oe(301));s+=1,qt=Ot=null,e.updateQueue=null,Ql.current=_M,n=t(i,r)}while(la)}if(Ql.current=Nc,e=Ot!==null&&Ot.next!==null,ts=0,qt=Ot=Et=null,Lc=!1,e)throw Error(oe(300));return n}function mp(){var n=Ca!==0;return Ca=0,n}function hi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qt===null?Et.memoizedState=qt=n:qt=qt.next=n,qt}function Gn(){if(Ot===null){var n=Et.alternate;n=n!==null?n.memoizedState:null}else n=Ot.next;var e=qt===null?Et.memoizedState:qt.next;if(e!==null)qt=e,Ot=n;else{if(n===null)throw Error(oe(310));Ot=n,n={memoizedState:Ot.memoizedState,baseState:Ot.baseState,baseQueue:Ot.baseQueue,queue:Ot.queue,next:null},qt===null?Et.memoizedState=qt=n:qt=qt.next=n}return qt}function Pa(n,e){return typeof e=="function"?e(n):e}function ju(n){var e=Gn(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=Ot,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((ts&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Et.lanes|=d,ns|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ri(i,e.memoizedState)||(_n=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,Et.lanes|=s,ns|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Xu(n){var e=Gn(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ri(s,e.memoizedState)||(_n=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function y_(){}function S_(n,e){var t=Et,i=Gn(),r=e(),s=!ri(i.memoizedState,r);if(s&&(i.memoizedState=r,_n=!0),i=i.queue,gp(w_.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||qt!==null&&qt.memoizedState.tag&1){if(t.flags|=2048,Ia(9,E_.bind(null,t,i,r,e),void 0,null),$t===null)throw Error(oe(349));ts&30||M_(t,e,r)}return r}function M_(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function E_(n,e,t,i){e.value=t,e.getSnapshot=i,T_(e)&&b_(n)}function w_(n,e,t){return t(function(){T_(e)&&b_(n)})}function T_(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ri(n,t)}catch{return!0}}function b_(n){var e=Yi(n,1);e!==null&&ni(e,n,1,-1)}function Jm(n){var e=hi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:n},e.queue=n,n=n.dispatch=mM.bind(null,Et,n),[e.memoizedState,n]}function Ia(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function A_(){return Gn().memoizedState}function ec(n,e,t,i){var r=hi();Et.flags|=n,r.memoizedState=Ia(1|e,t,void 0,i===void 0?null:i)}function ru(n,e,t,i){var r=Gn();i=i===void 0?null:i;var s=void 0;if(Ot!==null){var o=Ot.memoizedState;if(s=o.destroy,i!==null&&hp(i,o.deps)){r.memoizedState=Ia(e,t,s,i);return}}Et.flags|=n,r.memoizedState=Ia(1|e,t,s,i)}function Qm(n,e){return ec(8390656,8,n,e)}function gp(n,e){return ru(2048,8,n,e)}function R_(n,e){return ru(4,2,n,e)}function C_(n,e){return ru(4,4,n,e)}function P_(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function I_(n,e,t){return t=t!=null?t.concat([n]):null,ru(4,4,P_.bind(null,e,n),t)}function xp(){}function L_(n,e){var t=Gn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&hp(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function N_(n,e){var t=Gn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&hp(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function D_(n,e,t){return ts&21?(ri(t,e)||(t=Bx(),Et.lanes|=t,ns|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,_n=!0),n.memoizedState=t)}function hM(n,e){var t=ut;ut=t!==0&&4>t?t:4,n(!0);var i=Wu.transition;Wu.transition={};try{n(!1),e()}finally{ut=t,Wu.transition=i}}function U_(){return Gn().memoizedState}function pM(n,e,t){var i=Tr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},F_(n))O_(e,t);else if(t=x_(n,e,t,i),t!==null){var r=fn();ni(t,n,i,r),k_(t,e,i)}}function mM(n,e,t){var i=Tr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(F_(n))O_(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ri(a,o)){var l=e.interleaved;l===null?(r.next=r,lp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=x_(n,e,r,i),t!==null&&(r=fn(),ni(t,n,i,r),k_(t,e,i))}}function F_(n){var e=n.alternate;return n===Et||e!==null&&e===Et}function O_(n,e){la=Lc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function k_(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,qh(n,t)}}var Nc={readContext:Hn,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useInsertionEffect:nn,useLayoutEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useMutableSource:nn,useSyncExternalStore:nn,useId:nn,unstable_isNewReconciler:!1},gM={readContext:Hn,useCallback:function(n,e){return hi().memoizedState=[n,e===void 0?null:e],n},useContext:Hn,useEffect:Qm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,ec(4194308,4,P_.bind(null,e,n),t)},useLayoutEffect:function(n,e){return ec(4194308,4,n,e)},useInsertionEffect:function(n,e){return ec(4,2,n,e)},useMemo:function(n,e){var t=hi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=hi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=pM.bind(null,Et,n),[i.memoizedState,n]},useRef:function(n){var e=hi();return n={current:n},e.memoizedState=n},useState:Jm,useDebugValue:xp,useDeferredValue:function(n){return hi().memoizedState=n},useTransition:function(){var n=Jm(!1),e=n[0];return n=hM.bind(null,n[1]),hi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=Et,r=hi();if(yt){if(t===void 0)throw Error(oe(407));t=t()}else{if(t=e(),$t===null)throw Error(oe(349));ts&30||M_(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Qm(w_.bind(null,i,s,n),[n]),i.flags|=2048,Ia(9,E_.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=hi(),e=$t.identifierPrefix;if(yt){var t=ki,i=Oi;t=(i&~(1<<32-ti(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Ca++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=fM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},xM={readContext:Hn,useCallback:L_,useContext:Hn,useEffect:gp,useImperativeHandle:I_,useInsertionEffect:R_,useLayoutEffect:C_,useMemo:N_,useReducer:ju,useRef:A_,useState:function(){return ju(Pa)},useDebugValue:xp,useDeferredValue:function(n){var e=Gn();return D_(e,Ot.memoizedState,n)},useTransition:function(){var n=ju(Pa)[0],e=Gn().memoizedState;return[n,e]},useMutableSource:y_,useSyncExternalStore:S_,useId:U_,unstable_isNewReconciler:!1},_M={readContext:Hn,useCallback:L_,useContext:Hn,useEffect:gp,useImperativeHandle:I_,useInsertionEffect:R_,useLayoutEffect:C_,useMemo:N_,useReducer:Xu,useRef:A_,useState:function(){return Xu(Pa)},useDebugValue:xp,useDeferredValue:function(n){var e=Gn();return Ot===null?e.memoizedState=n:D_(e,Ot.memoizedState,n)},useTransition:function(){var n=Xu(Pa)[0],e=Gn().memoizedState;return[n,e]},useMutableSource:y_,useSyncExternalStore:S_,useId:U_,unstable_isNewReconciler:!1};function $n(n,e){if(n&&n.defaultProps){e=wt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function yf(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:wt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var su={isMounted:function(n){return(n=n._reactInternals)?as(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=fn(),r=Tr(n),s=Hi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Er(n,s,r),e!==null&&(ni(e,n,r,i),Jl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=fn(),r=Tr(n),s=Hi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Er(n,s,r),e!==null&&(ni(e,n,r,i),Jl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=fn(),i=Tr(n),r=Hi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Er(n,r,i),e!==null&&(ni(e,n,i,t),Jl(e,n,i))}};function eg(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ea(t,i)||!Ea(r,s):!0}function B_(n,e,t){var i=!1,r=Rr,s=e.contextType;return typeof s=="object"&&s!==null?s=Hn(s):(r=yn(e)?Qr:ln.current,i=e.contextTypes,s=(i=i!=null)?to(n,r):Rr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=su,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function tg(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&su.enqueueReplaceState(e,e.state,null)}function Sf(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},cp(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Hn(s):(s=yn(e)?Qr:ln.current,r.context=to(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(yf(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&su.enqueueReplaceState(r,r.state,null),Pc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function so(n,e){try{var t="",i=e;do t+=Xy(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Yu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Mf(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var vM=typeof WeakMap=="function"?WeakMap:Map;function z_(n,e,t){t=Hi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Uc||(Uc=!0,Lf=i),Mf(n,e)},t}function V_(n,e,t){t=Hi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Mf(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Mf(n,e),typeof i!="function"&&(wr===null?wr=new Set([this]):wr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function ng(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new vM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=NM.bind(null,n,e,t),e.then(n,n))}function ig(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function rg(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Hi(-1,1),e.tag=2,Er(t,e,1))),t.lanes|=1),n)}var yM=Ji.ReactCurrentOwner,_n=!1;function dn(n,e,t,i){e.child=n===null?g_(e,null,t,i):io(e,n.child,t,i)}function sg(n,e,t,i,r){t=t.render;var s=e.ref;return qs(e,r),i=pp(n,e,t,i,s,r),t=mp(),n!==null&&!_n?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qi(n,e,r)):(yt&&t&&np(e),e.flags|=1,dn(n,e,i,r),e.child)}function og(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Tp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,H_(n,e,s,i,r)):(n=rc(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Ea,t(o,i)&&n.ref===e.ref)return qi(n,e,r)}return e.flags|=1,n=br(s,i),n.ref=e.ref,n.return=e,e.child=n}function H_(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Ea(s,i)&&n.ref===e.ref)if(_n=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(_n=!0);else return e.lanes=n.lanes,qi(n,e,r)}return Ef(n,e,t,i,r)}function G_(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(Gs,Tn),Tn|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,mt(Gs,Tn),Tn|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,mt(Gs,Tn),Tn|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,mt(Gs,Tn),Tn|=i;return dn(n,e,r,t),e.child}function W_(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Ef(n,e,t,i,r){var s=yn(t)?Qr:ln.current;return s=to(e,s),qs(e,r),t=pp(n,e,t,i,s,r),i=mp(),n!==null&&!_n?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qi(n,e,r)):(yt&&i&&np(e),e.flags|=1,dn(n,e,t,r),e.child)}function ag(n,e,t,i,r){if(yn(t)){var s=!0;Tc(e)}else s=!1;if(qs(e,r),e.stateNode===null)tc(n,e),B_(e,t,i),Sf(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Hn(c):(c=yn(t)?Qr:ln.current,c=to(e,c));var d=t.getDerivedStateFromProps,f=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&tg(e,o,i,c),dr=!1;var u=e.memoizedState;o.state=u,Pc(e,i,o,r),l=e.memoizedState,a!==i||u!==l||vn.current||dr?(typeof d=="function"&&(yf(e,t,d,i),l=e.memoizedState),(a=dr||eg(e,t,a,i,u,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,__(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:$n(e.type,a),o.props=c,f=e.pendingProps,u=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Hn(l):(l=yn(t)?Qr:ln.current,l=to(e,l));var p=t.getDerivedStateFromProps;(d=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||u!==l)&&tg(e,o,i,l),dr=!1,u=e.memoizedState,o.state=u,Pc(e,i,o,r);var g=e.memoizedState;a!==f||u!==g||vn.current||dr?(typeof p=="function"&&(yf(e,t,p,i),g=e.memoizedState),(c=dr||eg(e,t,c,i,u,g,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&u===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&u===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&u===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&u===n.memoizedState||(e.flags|=1024),i=!1)}return wf(n,e,t,i,s,r)}function wf(n,e,t,i,r,s){W_(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Xm(e,t,!1),qi(n,e,s);i=e.stateNode,yM.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=io(e,n.child,null,s),e.child=io(e,null,a,s)):dn(n,e,a,s),e.memoizedState=i.state,r&&Xm(e,t,!0),e.child}function j_(n){var e=n.stateNode;e.pendingContext?jm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&jm(n,e.context,!1),up(n,e.containerInfo)}function lg(n,e,t,i,r){return no(),rp(r),e.flags|=256,dn(n,e,t,i),e.child}var Tf={dehydrated:null,treeContext:null,retryLane:0};function bf(n){return{baseLanes:n,cachePool:null,transitions:null}}function X_(n,e,t){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),mt(St,r&1),n===null)return _f(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=lu(o,i,0,null),n=Jr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=bf(t),e.memoizedState=Tf,n):_p(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return SM(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=br(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=br(a,s):(s=Jr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?bf(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Tf,i}return s=n.child,n=s.sibling,i=br(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function _p(n,e){return e=lu({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function ul(n,e,t,i){return i!==null&&rp(i),io(e,n.child,null,t),n=_p(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function SM(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Yu(Error(oe(422))),ul(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=lu({mode:"visible",children:i.children},r,0,null),s=Jr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&io(e,n.child,null,o),e.child.memoizedState=bf(o),e.memoizedState=Tf,s);if(!(e.mode&1))return ul(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=Yu(s,i,void 0),ul(n,e,o,i)}if(a=(o&n.childLanes)!==0,_n||a){if(i=$t,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Yi(n,r),ni(i,n,r,-1))}return wp(),i=Yu(Error(oe(421))),ul(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=DM.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,An=Mr(r.nextSibling),Rn=e,yt=!0,Zn=null,n!==null&&(Dn[Un++]=Oi,Dn[Un++]=ki,Dn[Un++]=es,Oi=n.id,ki=n.overflow,es=e),e=_p(e,i.children),e.flags|=4096,e)}function cg(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),vf(n.return,e,t)}function qu(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Y_(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(dn(n,e,i.children,t),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&cg(n,t,e);else if(n.tag===19)cg(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(mt(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Ic(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),qu(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Ic(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}qu(e,!0,t,null,s);break;case"together":qu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tc(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function qi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),ns|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(oe(153));if(e.child!==null){for(n=e.child,t=br(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=br(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function MM(n,e,t){switch(e.tag){case 3:j_(e),no();break;case 5:v_(e);break;case 1:yn(e.type)&&Tc(e);break;case 4:up(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;mt(Rc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(mt(St,St.current&1),e.flags|=128,null):t&e.child.childLanes?X_(n,e,t):(mt(St,St.current&1),n=qi(n,e,t),n!==null?n.sibling:null);mt(St,St.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Y_(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),mt(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,G_(n,e,t)}return qi(n,e,t)}var q_,Af,$_,K_;q_=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Af=function(){};$_=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,$r(yi.current);var s=null;switch(t){case"input":r=qd(n,r),i=qd(n,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=Zd(n,r),i=Zd(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Ec)}Qd(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ga.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ga.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};K_=function(n,e,t,i){t!==i&&(e.flags|=4)};function Do(n,e){if(!yt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function rn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function EM(n,e,t){var i=e.pendingProps;switch(ip(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rn(e),null;case 1:return yn(e.type)&&wc(),rn(e),null;case 3:return i=e.stateNode,ro(),_t(vn),_t(ln),fp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(ll(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Zn!==null&&(Uf(Zn),Zn=null))),Af(n,e),rn(e),null;case 5:dp(e);var r=$r(Ra.current);if(t=e.type,n!==null&&e.stateNode!=null)$_(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return rn(e),null}if(n=$r(yi.current),ll(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[gi]=e,i[ba]=s,n=(e.mode&1)!==0,t){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Qo.length;r++)gt(Qo[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":_m(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":ym(i,s),gt("invalid",i)}Qd(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&al(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&al(i.textContent,a,n),r=["children",""+a]):ga.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&gt("scroll",i)}switch(t){case"input":Qa(i),vm(i,s,!0);break;case"textarea":Qa(i),Sm(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Ec)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=wx(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[gi]=e,n[ba]=i,q_(n,e,!1,!1),e.stateNode=n;e:{switch(o=ef(t,i),t){case"dialog":gt("cancel",n),gt("close",n),r=i;break;case"iframe":case"object":case"embed":gt("load",n),r=i;break;case"video":case"audio":for(r=0;r<Qo.length;r++)gt(Qo[r],n);r=i;break;case"source":gt("error",n),r=i;break;case"img":case"image":case"link":gt("error",n),gt("load",n),r=i;break;case"details":gt("toggle",n),r=i;break;case"input":_m(n,i),r=qd(n,i),gt("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),gt("invalid",n);break;case"textarea":ym(n,i),r=Zd(n,i),gt("invalid",n);break;default:r=i}Qd(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ax(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Tx(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&xa(n,l):typeof l=="number"&&xa(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ga.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",n):l!=null&&Hh(n,s,l,o))}switch(t){case"input":Qa(n),vm(n,i,!1);break;case"textarea":Qa(n),Sm(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ar(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Ws(n,!!i.multiple,s,!1):i.defaultValue!=null&&Ws(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Ec)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rn(e),null;case 6:if(n&&e.stateNode!=null)K_(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(t=$r(Ra.current),$r(yi.current),ll(e)){if(i=e.stateNode,t=e.memoizedProps,i[gi]=e,(s=i.nodeValue!==t)&&(n=Rn,n!==null))switch(n.tag){case 3:al(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&al(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i}return rn(e),null;case 13:if(_t(St),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(yt&&An!==null&&e.mode&1&&!(e.flags&128))p_(),no(),e.flags|=98560,s=!1;else if(s=ll(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[gi]=e}else no(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rn(e),s=!1}else Zn!==null&&(Uf(Zn),Zn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||St.current&1?Bt===0&&(Bt=3):wp())),e.updateQueue!==null&&(e.flags|=4),rn(e),null);case 4:return ro(),Af(n,e),n===null&&wa(e.stateNode.containerInfo),rn(e),null;case 10:return ap(e.type._context),rn(e),null;case 17:return yn(e.type)&&wc(),rn(e),null;case 19:if(_t(St),s=e.memoizedState,s===null)return rn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Do(s,!1);else{if(Bt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Ic(n),o!==null){for(e.flags|=128,Do(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return mt(St,St.current&1|2),e.child}n=n.sibling}s.tail!==null&&Lt()>oo&&(e.flags|=128,i=!0,Do(s,!1),e.lanes=4194304)}else{if(!i)if(n=Ic(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Do(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!yt)return rn(e),null}else 2*Lt()-s.renderingStartTime>oo&&t!==1073741824&&(e.flags|=128,i=!0,Do(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,t=St.current,mt(St,i?t&1|2:t&1),e):(rn(e),null);case 22:case 23:return Ep(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Tn&1073741824&&(rn(e),e.subtreeFlags&6&&(e.flags|=8192)):rn(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function wM(n,e){switch(ip(e),e.tag){case 1:return yn(e.type)&&wc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return ro(),_t(vn),_t(ln),fp(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return dp(e),null;case 13:if(_t(St),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));no()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return _t(St),null;case 4:return ro(),null;case 10:return ap(e.type._context),null;case 22:case 23:return Ep(),null;case 24:return null;default:return null}}var dl=!1,an=!1,TM=typeof WeakSet=="function"?WeakSet:Set,ye=null;function Hs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ct(n,e,i)}else t.current=null}function Rf(n,e,t){try{t()}catch(i){Ct(n,e,i)}}var ug=!1;function bM(n,e){if(df=yc,n=t_(),tp(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,d=0,f=n,u=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)u=f,f=p;for(;;){if(f===n)break t;if(u===t&&++c===r&&(a=o),u===s&&++d===i&&(l=o),(p=f.nextSibling)!==null)break;f=u,u=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(ff={focusedElem:n,selectionRange:t},yc=!1,ye=e;ye!==null;)if(e=ye,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ye=n;else for(;ye!==null;){e=ye;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,x=g.memoizedState,h=e.stateNode,m=h.getSnapshotBeforeUpdate(e.elementType===e.type?v:$n(e.type,v),x);h.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(S){Ct(e,e.return,S)}if(n=e.sibling,n!==null){n.return=e.return,ye=n;break}ye=e.return}return g=ug,ug=!1,g}function ca(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&Rf(e,t,s)}r=r.next}while(r!==i)}}function ou(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Cf(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Z_(n){var e=n.alternate;e!==null&&(n.alternate=null,Z_(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[gi],delete e[ba],delete e[mf],delete e[lM],delete e[cM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function J_(n){return n.tag===5||n.tag===3||n.tag===4}function dg(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||J_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Pf(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Ec));else if(i!==4&&(n=n.child,n!==null))for(Pf(n,e,t),n=n.sibling;n!==null;)Pf(n,e,t),n=n.sibling}function If(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(If(n,e,t),n=n.sibling;n!==null;)If(n,e,t),n=n.sibling}var Zt=null,Kn=!1;function nr(n,e,t){for(t=t.child;t!==null;)Q_(n,e,t),t=t.sibling}function Q_(n,e,t){if(vi&&typeof vi.onCommitFiberUnmount=="function")try{vi.onCommitFiberUnmount(Jc,t)}catch{}switch(t.tag){case 5:an||Hs(t,e);case 6:var i=Zt,r=Kn;Zt=null,nr(n,e,t),Zt=i,Kn=r,Zt!==null&&(Kn?(n=Zt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Zt.removeChild(t.stateNode));break;case 18:Zt!==null&&(Kn?(n=Zt,t=t.stateNode,n.nodeType===8?Vu(n.parentNode,t):n.nodeType===1&&Vu(n,t),Sa(n)):Vu(Zt,t.stateNode));break;case 4:i=Zt,r=Kn,Zt=t.stateNode.containerInfo,Kn=!0,nr(n,e,t),Zt=i,Kn=r;break;case 0:case 11:case 14:case 15:if(!an&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rf(t,e,o),r=r.next}while(r!==i)}nr(n,e,t);break;case 1:if(!an&&(Hs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ct(t,e,a)}nr(n,e,t);break;case 21:nr(n,e,t);break;case 22:t.mode&1?(an=(i=an)||t.memoizedState!==null,nr(n,e,t),an=i):nr(n,e,t);break;default:nr(n,e,t)}}function fg(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new TM),e.forEach(function(i){var r=UM.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function jn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Zt=a.stateNode,Kn=!1;break e;case 3:Zt=a.stateNode.containerInfo,Kn=!0;break e;case 4:Zt=a.stateNode.containerInfo,Kn=!0;break e}a=a.return}if(Zt===null)throw Error(oe(160));Q_(s,o,r),Zt=null,Kn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Ct(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)ev(e,n),e=e.sibling}function ev(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(jn(e,n),ci(n),i&4){try{ca(3,n,n.return),ou(3,n)}catch(v){Ct(n,n.return,v)}try{ca(5,n,n.return)}catch(v){Ct(n,n.return,v)}}break;case 1:jn(e,n),ci(n),i&512&&t!==null&&Hs(t,t.return);break;case 5:if(jn(e,n),ci(n),i&512&&t!==null&&Hs(t,t.return),n.flags&32){var r=n.stateNode;try{xa(r,"")}catch(v){Ct(n,n.return,v)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Mx(r,s),ef(a,o);var c=ef(a,s);for(o=0;o<l.length;o+=2){var d=l[o],f=l[o+1];d==="style"?Ax(r,f):d==="dangerouslySetInnerHTML"?Tx(r,f):d==="children"?xa(r,f):Hh(r,d,f,c)}switch(a){case"input":$d(r,s);break;case"textarea":Ex(r,s);break;case"select":var u=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ws(r,!!s.multiple,p,!1):u!==!!s.multiple&&(s.defaultValue!=null?Ws(r,!!s.multiple,s.defaultValue,!0):Ws(r,!!s.multiple,s.multiple?[]:"",!1))}r[ba]=s}catch(v){Ct(n,n.return,v)}}break;case 6:if(jn(e,n),ci(n),i&4){if(n.stateNode===null)throw Error(oe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(v){Ct(n,n.return,v)}}break;case 3:if(jn(e,n),ci(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Sa(e.containerInfo)}catch(v){Ct(n,n.return,v)}break;case 4:jn(e,n),ci(n);break;case 13:jn(e,n),ci(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Sp=Lt())),i&4&&fg(n);break;case 22:if(d=t!==null&&t.memoizedState!==null,n.mode&1?(an=(c=an)||d,jn(e,n),an=c):jn(e,n),ci(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!d&&n.mode&1)for(ye=n,d=n.child;d!==null;){for(f=ye=d;ye!==null;){switch(u=ye,p=u.child,u.tag){case 0:case 11:case 14:case 15:ca(4,u,u.return);break;case 1:Hs(u,u.return);var g=u.stateNode;if(typeof g.componentWillUnmount=="function"){i=u,t=u.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(v){Ct(i,t,v)}}break;case 5:Hs(u,u.return);break;case 22:if(u.memoizedState!==null){pg(f);continue}}p!==null?(p.return=u,ye=p):pg(f)}d=d.sibling}e:for(d=null,f=n;;){if(f.tag===5){if(d===null){d=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=bx("display",o))}catch(v){Ct(n,n.return,v)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(v){Ct(n,n.return,v)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:jn(e,n),ci(n),i&4&&fg(n);break;case 21:break;default:jn(e,n),ci(n)}}function ci(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(J_(t)){var i=t;break e}t=t.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(xa(r,""),i.flags&=-33);var s=dg(n);If(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=dg(n);Pf(n,a,o);break;default:throw Error(oe(161))}}catch(l){Ct(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function AM(n,e,t){ye=n,tv(n)}function tv(n,e,t){for(var i=(n.mode&1)!==0;ye!==null;){var r=ye,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||dl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||an;a=dl;var c=an;if(dl=o,(an=l)&&!c)for(ye=r;ye!==null;)o=ye,l=o.child,o.tag===22&&o.memoizedState!==null?mg(r):l!==null?(l.return=o,ye=l):mg(r);for(;s!==null;)ye=s,tv(s),s=s.sibling;ye=r,dl=a,an=c}hg(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ye=s):hg(n)}}function hg(n){for(;ye!==null;){var e=ye;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:an||ou(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!an)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:$n(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Zm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&Sa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}an||e.flags&512&&Cf(e)}catch(u){Ct(e,e.return,u)}}if(e===n){ye=null;break}if(t=e.sibling,t!==null){t.return=e.return,ye=t;break}ye=e.return}}function pg(n){for(;ye!==null;){var e=ye;if(e===n){ye=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ye=t;break}ye=e.return}}function mg(n){for(;ye!==null;){var e=ye;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{ou(4,e)}catch(l){Ct(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ct(e,r,l)}}var s=e.return;try{Cf(e)}catch(l){Ct(e,s,l)}break;case 5:var o=e.return;try{Cf(e)}catch(l){Ct(e,o,l)}}}catch(l){Ct(e,e.return,l)}if(e===n){ye=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ye=a;break}ye=e.return}}var RM=Math.ceil,Dc=Ji.ReactCurrentDispatcher,vp=Ji.ReactCurrentOwner,zn=Ji.ReactCurrentBatchConfig,rt=0,$t=null,Ut=null,Qt=0,Tn=0,Gs=Pr(0),Bt=0,La=null,ns=0,au=0,yp=0,ua=null,xn=null,Sp=0,oo=1/0,Ui=null,Uc=!1,Lf=null,wr=null,fl=!1,gr=null,Fc=0,da=0,Nf=null,nc=-1,ic=0;function fn(){return rt&6?Lt():nc!==-1?nc:nc=Lt()}function Tr(n){return n.mode&1?rt&2&&Qt!==0?Qt&-Qt:dM.transition!==null?(ic===0&&(ic=Bx()),ic):(n=ut,n!==0||(n=window.event,n=n===void 0?16:Xx(n.type)),n):1}function ni(n,e,t,i){if(50<da)throw da=0,Nf=null,Error(oe(185));Wa(n,t,i),(!(rt&2)||n!==$t)&&(n===$t&&(!(rt&2)&&(au|=t),Bt===4&&hr(n,Qt)),Sn(n,i),t===1&&rt===0&&!(e.mode&1)&&(oo=Lt()+500,iu&&Ir()))}function Sn(n,e){var t=n.callbackNode;dS(n,e);var i=vc(n,n===$t?Qt:0);if(i===0)t!==null&&wm(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&wm(t),e===1)n.tag===0?uM(gg.bind(null,n)):d_(gg.bind(null,n)),oM(function(){!(rt&6)&&Ir()}),t=null;else{switch(zx(i)){case 1:t=Yh;break;case 4:t=Ox;break;case 16:t=_c;break;case 536870912:t=kx;break;default:t=_c}t=cv(t,nv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function nv(n,e){if(nc=-1,ic=0,rt&6)throw Error(oe(327));var t=n.callbackNode;if($s()&&n.callbackNode!==t)return null;var i=vc(n,n===$t?Qt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Oc(n,i);else{e=i;var r=rt;rt|=2;var s=rv();($t!==n||Qt!==e)&&(Ui=null,oo=Lt()+500,Zr(n,e));do try{IM();break}catch(a){iv(n,a)}while(!0);op(),Dc.current=s,rt=r,Ut!==null?e=0:($t=null,Qt=0,e=Bt)}if(e!==0){if(e===2&&(r=of(n),r!==0&&(i=r,e=Df(n,r))),e===1)throw t=La,Zr(n,0),hr(n,i),Sn(n,Lt()),t;if(e===6)hr(n,i);else{if(r=n.current.alternate,!(i&30)&&!CM(r)&&(e=Oc(n,i),e===2&&(s=of(n),s!==0&&(i=s,e=Df(n,s))),e===1))throw t=La,Zr(n,0),hr(n,i),Sn(n,Lt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:Hr(n,xn,Ui);break;case 3:if(hr(n,i),(i&130023424)===i&&(e=Sp+500-Lt(),10<e)){if(vc(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){fn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=pf(Hr.bind(null,n,xn,Ui),e);break}Hr(n,xn,Ui);break;case 4:if(hr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ti(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*RM(i/1960))-i,10<i){n.timeoutHandle=pf(Hr.bind(null,n,xn,Ui),i);break}Hr(n,xn,Ui);break;case 5:Hr(n,xn,Ui);break;default:throw Error(oe(329))}}}return Sn(n,Lt()),n.callbackNode===t?nv.bind(null,n):null}function Df(n,e){var t=ua;return n.current.memoizedState.isDehydrated&&(Zr(n,e).flags|=256),n=Oc(n,e),n!==2&&(e=xn,xn=t,e!==null&&Uf(e)),n}function Uf(n){xn===null?xn=n:xn.push.apply(xn,n)}function CM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ri(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(n,e){for(e&=~yp,e&=~au,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ti(e),i=1<<t;n[t]=-1,e&=~i}}function gg(n){if(rt&6)throw Error(oe(327));$s();var e=vc(n,0);if(!(e&1))return Sn(n,Lt()),null;var t=Oc(n,e);if(n.tag!==0&&t===2){var i=of(n);i!==0&&(e=i,t=Df(n,i))}if(t===1)throw t=La,Zr(n,0),hr(n,e),Sn(n,Lt()),t;if(t===6)throw Error(oe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Hr(n,xn,Ui),Sn(n,Lt()),null}function Mp(n,e){var t=rt;rt|=1;try{return n(e)}finally{rt=t,rt===0&&(oo=Lt()+500,iu&&Ir())}}function is(n){gr!==null&&gr.tag===0&&!(rt&6)&&$s();var e=rt;rt|=1;var t=zn.transition,i=ut;try{if(zn.transition=null,ut=1,n)return n()}finally{ut=i,zn.transition=t,rt=e,!(rt&6)&&Ir()}}function Ep(){Tn=Gs.current,_t(Gs)}function Zr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,sM(t)),Ut!==null)for(t=Ut.return;t!==null;){var i=t;switch(ip(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&wc();break;case 3:ro(),_t(vn),_t(ln),fp();break;case 5:dp(i);break;case 4:ro();break;case 13:_t(St);break;case 19:_t(St);break;case 10:ap(i.type._context);break;case 22:case 23:Ep()}t=t.return}if($t=n,Ut=n=br(n.current,null),Qt=Tn=e,Bt=0,La=null,yp=au=ns=0,xn=ua=null,qr!==null){for(e=0;e<qr.length;e++)if(t=qr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}qr=null}return n}function iv(n,e){do{var t=Ut;try{if(op(),Ql.current=Nc,Lc){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Lc=!1}if(ts=0,qt=Ot=Et=null,la=!1,Ca=0,vp.current=null,t===null||t.return===null){Bt=1,La=e,Ut=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var u=d.alternate;u?(d.updateQueue=u.updateQueue,d.memoizedState=u.memoizedState,d.lanes=u.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=ig(o);if(p!==null){p.flags&=-257,rg(p,o,a,s,e),p.mode&1&&ng(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var v=new Set;v.add(l),e.updateQueue=v}else g.add(l);break e}else{if(!(e&1)){ng(s,c,e),wp();break e}l=Error(oe(426))}}else if(yt&&a.mode&1){var x=ig(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),rg(x,o,a,s,e),rp(so(l,a));break e}}s=l=so(l,a),Bt!==4&&(Bt=2),ua===null?ua=[s]:ua.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=z_(s,l,e);Km(s,h);break e;case 1:a=l;var m=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof m.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(wr===null||!wr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=V_(s,a,e);Km(s,S);break e}}s=s.return}while(s!==null)}ov(t)}catch(w){e=w,Ut===t&&t!==null&&(Ut=t=t.return);continue}break}while(!0)}function rv(){var n=Dc.current;return Dc.current=Nc,n===null?Nc:n}function wp(){(Bt===0||Bt===3||Bt===2)&&(Bt=4),$t===null||!(ns&268435455)&&!(au&268435455)||hr($t,Qt)}function Oc(n,e){var t=rt;rt|=2;var i=rv();($t!==n||Qt!==e)&&(Ui=null,Zr(n,e));do try{PM();break}catch(r){iv(n,r)}while(!0);if(op(),rt=t,Dc.current=i,Ut!==null)throw Error(oe(261));return $t=null,Qt=0,Bt}function PM(){for(;Ut!==null;)sv(Ut)}function IM(){for(;Ut!==null&&!nS();)sv(Ut)}function sv(n){var e=lv(n.alternate,n,Tn);n.memoizedProps=n.pendingProps,e===null?ov(n):Ut=e,vp.current=null}function ov(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=wM(t,e),t!==null){t.flags&=32767,Ut=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Bt=6,Ut=null;return}}else if(t=EM(t,e,Tn),t!==null){Ut=t;return}if(e=e.sibling,e!==null){Ut=e;return}Ut=e=n}while(e!==null);Bt===0&&(Bt=5)}function Hr(n,e,t){var i=ut,r=zn.transition;try{zn.transition=null,ut=1,LM(n,e,t,i)}finally{zn.transition=r,ut=i}return null}function LM(n,e,t,i){do $s();while(gr!==null);if(rt&6)throw Error(oe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(oe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(fS(n,s),n===$t&&(Ut=$t=null,Qt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||fl||(fl=!0,cv(_c,function(){return $s(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=zn.transition,zn.transition=null;var o=ut;ut=1;var a=rt;rt|=4,vp.current=null,bM(n,t),ev(t,n),JS(ff),yc=!!df,ff=df=null,n.current=t,AM(t),iS(),rt=a,ut=o,zn.transition=s}else n.current=t;if(fl&&(fl=!1,gr=n,Fc=r),s=n.pendingLanes,s===0&&(wr=null),oS(t.stateNode),Sn(n,Lt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Uc)throw Uc=!1,n=Lf,Lf=null,n;return Fc&1&&n.tag!==0&&$s(),s=n.pendingLanes,s&1?n===Nf?da++:(da=0,Nf=n):da=0,Ir(),null}function $s(){if(gr!==null){var n=zx(Fc),e=zn.transition,t=ut;try{if(zn.transition=null,ut=16>n?16:n,gr===null)var i=!1;else{if(n=gr,gr=null,Fc=0,rt&6)throw Error(oe(331));var r=rt;for(rt|=4,ye=n.current;ye!==null;){var s=ye,o=s.child;if(ye.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(ye=c;ye!==null;){var d=ye;switch(d.tag){case 0:case 11:case 15:ca(8,d,s)}var f=d.child;if(f!==null)f.return=d,ye=f;else for(;ye!==null;){d=ye;var u=d.sibling,p=d.return;if(Z_(d),d===c){ye=null;break}if(u!==null){u.return=p,ye=u;break}ye=p}}}var g=s.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}ye=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ye=o;else e:for(;ye!==null;){if(s=ye,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ca(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,ye=h;break e}ye=s.return}}var m=n.current;for(ye=m;ye!==null;){o=ye;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,ye=_;else e:for(o=m;ye!==null;){if(a=ye,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ou(9,a)}}catch(w){Ct(a,a.return,w)}if(a===o){ye=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,ye=S;break e}ye=a.return}}if(rt=r,Ir(),vi&&typeof vi.onPostCommitFiberRoot=="function")try{vi.onPostCommitFiberRoot(Jc,n)}catch{}i=!0}return i}finally{ut=t,zn.transition=e}}return!1}function xg(n,e,t){e=so(t,e),e=z_(n,e,1),n=Er(n,e,1),e=fn(),n!==null&&(Wa(n,1,e),Sn(n,e))}function Ct(n,e,t){if(n.tag===3)xg(n,n,t);else for(;e!==null;){if(e.tag===3){xg(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(wr===null||!wr.has(i))){n=so(t,n),n=V_(e,n,1),e=Er(e,n,1),n=fn(),e!==null&&(Wa(e,1,n),Sn(e,n));break}}e=e.return}}function NM(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=fn(),n.pingedLanes|=n.suspendedLanes&t,$t===n&&(Qt&t)===t&&(Bt===4||Bt===3&&(Qt&130023424)===Qt&&500>Lt()-Sp?Zr(n,0):yp|=t),Sn(n,e)}function av(n,e){e===0&&(n.mode&1?(e=nl,nl<<=1,!(nl&130023424)&&(nl=4194304)):e=1);var t=fn();n=Yi(n,e),n!==null&&(Wa(n,e,t),Sn(n,t))}function DM(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),av(n,t)}function UM(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),av(n,t)}var lv;lv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||vn.current)_n=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return _n=!1,MM(n,e,t);_n=!!(n.flags&131072)}else _n=!1,yt&&e.flags&1048576&&f_(e,Ac,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;tc(n,e),n=e.pendingProps;var r=to(e,ln.current);qs(e,t),r=pp(null,e,i,n,r,t);var s=mp();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yn(i)?(s=!0,Tc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,cp(e),r.updater=su,e.stateNode=r,r._reactInternals=e,Sf(e,i,n,t),e=wf(null,e,i,!0,s,t)):(e.tag=0,yt&&s&&np(e),dn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(tc(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=OM(i),n=$n(i,n),r){case 0:e=Ef(null,e,i,n,t);break e;case 1:e=ag(null,e,i,n,t);break e;case 11:e=sg(null,e,i,n,t);break e;case 14:e=og(null,e,i,$n(i.type,n),t);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),Ef(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),ag(n,e,i,r,t);case 3:e:{if(j_(e),n===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,__(n,e),Pc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=so(Error(oe(423)),e),e=lg(n,e,i,t,r);break e}else if(i!==r){r=so(Error(oe(424)),e),e=lg(n,e,i,t,r);break e}else for(An=Mr(e.stateNode.containerInfo.firstChild),Rn=e,yt=!0,Zn=null,t=g_(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(no(),i===r){e=qi(n,e,t);break e}dn(n,e,i,t)}e=e.child}return e;case 5:return v_(e),n===null&&_f(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,hf(i,r)?o=null:s!==null&&hf(i,s)&&(e.flags|=32),W_(n,e),dn(n,e,o,t),e.child;case 6:return n===null&&_f(e),null;case 13:return X_(n,e,t);case 4:return up(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=io(e,null,i,t):dn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),sg(n,e,i,r,t);case 7:return dn(n,e,e.pendingProps,t),e.child;case 8:return dn(n,e,e.pendingProps.children,t),e.child;case 12:return dn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,mt(Rc,i._currentValue),i._currentValue=o,s!==null)if(ri(s.value,o)){if(s.children===r.children&&!vn.current){e=qi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Hi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),vf(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),vf(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}dn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,qs(e,t),r=Hn(r),i=i(r),e.flags|=1,dn(n,e,i,t),e.child;case 14:return i=e.type,r=$n(i,e.pendingProps),r=$n(i.type,r),og(n,e,i,r,t);case 15:return H_(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:$n(i,r),tc(n,e),e.tag=1,yn(i)?(n=!0,Tc(e)):n=!1,qs(e,t),B_(e,i,r),Sf(e,i,r,t),wf(null,e,i,!0,n,t);case 19:return Y_(n,e,t);case 22:return G_(n,e,t)}throw Error(oe(156,e.tag))};function cv(n,e){return Fx(n,e)}function FM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(n,e,t,i){return new FM(n,e,t,i)}function Tp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function OM(n){if(typeof n=="function")return Tp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Wh)return 11;if(n===jh)return 14}return 2}function br(n,e){var t=n.alternate;return t===null?(t=On(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function rc(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Tp(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case Ns:return Jr(t.children,r,s,e);case Gh:o=8,r|=8;break;case Wd:return n=On(12,t,e,r|2),n.elementType=Wd,n.lanes=s,n;case jd:return n=On(13,t,e,r),n.elementType=jd,n.lanes=s,n;case Xd:return n=On(19,t,e,r),n.elementType=Xd,n.lanes=s,n;case vx:return lu(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case xx:o=10;break e;case _x:o=9;break e;case Wh:o=11;break e;case jh:o=14;break e;case ur:o=16,i=null;break e}throw Error(oe(130,n==null?n:typeof n,""))}return e=On(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Jr(n,e,t,i){return n=On(7,n,i,e),n.lanes=t,n}function lu(n,e,t,i){return n=On(22,n,i,e),n.elementType=vx,n.lanes=t,n.stateNode={isHidden:!1},n}function $u(n,e,t){return n=On(6,n,null,e),n.lanes=t,n}function Ku(n,e,t){return e=On(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function kM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Pu(0),this.expirationTimes=Pu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Pu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function bp(n,e,t,i,r,s,o,a,l){return n=new kM(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=On(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},cp(s),n}function BM(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ls,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function uv(n){if(!n)return Rr;n=n._reactInternals;e:{if(as(n)!==n||n.tag!==1)throw Error(oe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(n.tag===1){var t=n.type;if(yn(t))return u_(n,t,e)}return e}function dv(n,e,t,i,r,s,o,a,l){return n=bp(t,i,!0,n,r,s,o,a,l),n.context=uv(null),t=n.current,i=fn(),r=Tr(t),s=Hi(i,r),s.callback=e??null,Er(t,s,r),n.current.lanes=r,Wa(n,r,i),Sn(n,i),n}function cu(n,e,t,i){var r=e.current,s=fn(),o=Tr(r);return t=uv(t),e.context===null?e.context=t:e.pendingContext=t,e=Hi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Er(r,e,o),n!==null&&(ni(n,r,o,s),Jl(n,r,o)),o}function kc(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function _g(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Ap(n,e){_g(n,e),(n=n.alternate)&&_g(n,e)}function zM(){return null}var fv=typeof reportError=="function"?reportError:function(n){console.error(n)};function Rp(n){this._internalRoot=n}uu.prototype.render=Rp.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(oe(409));cu(n,e,null,null)};uu.prototype.unmount=Rp.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;is(function(){cu(null,n,null,null)}),e[Xi]=null}};function uu(n){this._internalRoot=n}uu.prototype.unstable_scheduleHydration=function(n){if(n){var e=Gx();n={blockedOn:null,target:n,priority:e};for(var t=0;t<fr.length&&e!==0&&e<fr[t].priority;t++);fr.splice(t,0,n),t===0&&jx(n)}};function Cp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function du(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function vg(){}function VM(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=kc(o);s.call(c)}}var o=dv(e,i,n,0,null,!1,!1,"",vg);return n._reactRootContainer=o,n[Xi]=o.current,wa(n.nodeType===8?n.parentNode:n),is(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=kc(l);a.call(c)}}var l=bp(n,0,!1,null,null,!1,!1,"",vg);return n._reactRootContainer=l,n[Xi]=l.current,wa(n.nodeType===8?n.parentNode:n),is(function(){cu(e,l,t,i)}),l}function fu(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=kc(o);a.call(l)}}cu(e,o,n,r)}else o=VM(t,e,n,r,i);return kc(o)}Vx=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Jo(e.pendingLanes);t!==0&&(qh(e,t|1),Sn(e,Lt()),!(rt&6)&&(oo=Lt()+500,Ir()))}break;case 13:is(function(){var i=Yi(n,1);if(i!==null){var r=fn();ni(i,n,1,r)}}),Ap(n,1)}};$h=function(n){if(n.tag===13){var e=Yi(n,134217728);if(e!==null){var t=fn();ni(e,n,134217728,t)}Ap(n,134217728)}};Hx=function(n){if(n.tag===13){var e=Tr(n),t=Yi(n,e);if(t!==null){var i=fn();ni(t,n,e,i)}Ap(n,e)}};Gx=function(){return ut};Wx=function(n,e){var t=ut;try{return ut=n,e()}finally{ut=t}};nf=function(n,e,t){switch(e){case"input":if($d(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=nu(i);if(!r)throw Error(oe(90));Sx(i),$d(i,r)}}}break;case"textarea":Ex(n,t);break;case"select":e=t.value,e!=null&&Ws(n,!!t.multiple,e,!1)}};Px=Mp;Ix=is;var HM={usingClientEntryPoint:!1,Events:[Xa,Os,nu,Rx,Cx,Mp]},Uo={findFiberByHostInstance:Yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},GM={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ji.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Dx(n),n===null?null:n.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||zM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{Jc=hl.inject(GM),vi=hl}catch{}}Pn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HM;Pn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cp(e))throw Error(oe(200));return BM(n,e,null,t)};Pn.createRoot=function(n,e){if(!Cp(n))throw Error(oe(299));var t=!1,i="",r=fv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=bp(n,1,!1,null,null,t,!1,i,r),n[Xi]=e.current,wa(n.nodeType===8?n.parentNode:n),new Rp(e)};Pn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(oe(188)):(n=Object.keys(n).join(","),Error(oe(268,n)));return n=Dx(e),n=n===null?null:n.stateNode,n};Pn.flushSync=function(n){return is(n)};Pn.hydrate=function(n,e,t){if(!du(e))throw Error(oe(200));return fu(null,n,e,!0,t)};Pn.hydrateRoot=function(n,e,t){if(!Cp(n))throw Error(oe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=fv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=dv(e,null,n,1,t??null,r,!1,s,o),n[Xi]=e.current,wa(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new uu(e)};Pn.render=function(n,e,t){if(!du(e))throw Error(oe(200));return fu(null,n,e,!1,t)};Pn.unmountComponentAtNode=function(n){if(!du(n))throw Error(oe(40));return n._reactRootContainer?(is(function(){fu(null,null,n,!1,function(){n._reactRootContainer=null,n[Xi]=null})}),!0):!1};Pn.unstable_batchedUpdates=Mp;Pn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!du(t))throw Error(oe(200));if(n==null||n._reactInternals===void 0)throw Error(oe(38));return fu(n,e,t,!1,i)};Pn.version="18.3.1-next-f1338f8080-20240426";function hv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hv)}catch(n){console.error(n)}}hv(),hx.exports=Pn;var WM=hx.exports,yg=WM;Hd.createRoot=yg.createRoot,Hd.hydrateRoot=yg.hydrateRoot;const jM="modulepreload",XM=function(n){return"/eden-pipeline/"+n},Sg={},Tt=function(e,t,i){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=XM(l),l in Sg)return;Sg[l]=!0;const c=l.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":jM,c||(f.as="script"),f.crossOrigin="",f.href=l,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((u,p)=>{f.addEventListener("load",u),f.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pp="183",YM=0,Mg=1,qM=2,sc=1,pv=2,ea=3,$i=0,hn=1,Jn=2,Gi=0,Ks=1,Ff=2,Eg=3,wg=4,$M=5,Wr=100,KM=101,ZM=102,JM=103,QM=104,e1=200,t1=201,n1=202,i1=203,Of=204,kf=205,r1=206,s1=207,o1=208,a1=209,l1=210,c1=211,u1=212,d1=213,f1=214,Bf=0,zf=1,Vf=2,ao=3,Hf=4,Gf=5,Wf=6,jf=7,Ip=0,h1=1,p1=2,Si=0,Lp=1,mv=2,gv=3,Np=4,xv=5,_v=6,vv=7,Tg="attached",m1="detached",yv=300,rs=301,lo=302,oc=303,Zu=304,hu=306,co=1e3,xi=1001,Bc=1002,zt=1003,Sv=1004,ta=1005,Vt=1006,ac=1007,Bi=1008,bn=1009,Mv=1010,Ev=1011,Na=1012,Dp=1013,Ei=1014,kn=1015,Ki=1016,Up=1017,Fp=1018,Da=1020,wv=35902,Tv=35899,bv=1021,Av=1022,Bn=1023,Zi=1026,Kr=1027,Op=1028,kp=1029,uo=1030,Bp=1031,zp=1033,lc=33776,cc=33777,uc=33778,dc=33779,Xf=35840,Yf=35841,qf=35842,$f=35843,Kf=36196,Zf=37492,Jf=37496,Qf=37488,eh=37489,th=37490,nh=37491,ih=37808,rh=37809,sh=37810,oh=37811,ah=37812,lh=37813,ch=37814,uh=37815,dh=37816,fh=37817,hh=37818,ph=37819,mh=37820,gh=37821,xh=36492,_h=36494,vh=36495,yh=36283,Sh=36284,Mh=36285,Eh=36286,Ua=2300,Fa=2301,Ju=2302,bg=2303,Ag=2400,Rg=2401,Cg=2402,g1=2500,x1=0,Rv=1,wh=2,_1=3200,Vp=0,v1=1,pr="",kt="srgb",pn="srgb-linear",zc="linear",at="srgb",ds=7680,Pg=519,y1=512,S1=513,M1=514,Hp=515,E1=516,w1=517,Gp=518,T1=519,Th=35044,Ig="300 es",_i=2e3,Oa=2001;function b1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function A1(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ka(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function R1(){const n=ka("canvas");return n.style.display="block",n}const Lg={};function Vc(...n){const e="THREE."+n.shift();console.log(e,...n)}function Cv(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function Le(...n){n=Cv(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Oe(...n){n=Cv(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Hc(...n){const e=n.join(" ");e in Lg||(Lg[e]=!0,Le(...n))}function C1(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}const P1={[Bf]:zf,[Vf]:Wf,[Hf]:jf,[ao]:Gf,[zf]:Bf,[Wf]:Vf,[jf]:Hf,[Gf]:ao};class So{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ng=1234567;const fa=Math.PI/180,fo=180/Math.PI;function ii(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function Wp(n,e){return(n%e+e)%e}function I1(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function L1(n,e,t){return n!==e?(t-n)/(e-n):0}function ha(n,e,t){return(1-t)*n+t*e}function N1(n,e,t,i){return ha(n,e,1-Math.exp(-t*i))}function D1(n,e=1){return e-Math.abs(Wp(n,e*2)-e)}function U1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function F1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function O1(n,e){return n+Math.floor(Math.random()*(e-n+1))}function k1(n,e){return n+Math.random()*(e-n)}function B1(n){return n*(.5-Math.random())}function z1(n){n!==void 0&&(Ng=n);let e=Ng+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function V1(n){return n*fa}function H1(n){return n*fo}function G1(n){return(n&n-1)===0&&n!==0}function W1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function j1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function X1(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),d=o((e+i)/2),f=s((e-i)/2),u=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":n.set(a*d,l*f,l*u,a*c);break;case"YZY":n.set(l*u,a*d,l*f,a*c);break;case"ZXZ":n.set(l*f,l*u,a*d,a*c);break;case"XZX":n.set(a*d,l*g,l*p,a*c);break;case"YXY":n.set(l*p,a*d,l*g,a*c);break;case"ZYZ":n.set(l*g,l*p,a*d,a*c);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function lt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Y1={DEG2RAD:fa,RAD2DEG:fo,generateUUID:ii,clamp:et,euclideanModulo:Wp,mapLinear:I1,inverseLerp:L1,lerp:ha,damp:N1,pingpong:D1,smoothstep:U1,smootherstep:F1,randInt:O1,randFloat:k1,randFloatSpread:B1,seededRandom:z1,degToRad:V1,radToDeg:H1,isPowerOfTwo:G1,ceilPowerOfTwo:W1,floorPowerOfTwo:j1,setQuaternionFromProperEuler:X1,normalize:lt,denormalize:Qn};class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],f=i[r+3],u=s[o+0],p=s[o+1],g=s[o+2],v=s[o+3];if(f!==v||l!==u||c!==p||d!==g){let x=l*u+c*p+d*g+f*v;x<0&&(u=-u,p=-p,g=-g,v=-v,x=-x);let h=1-a;if(x<.9995){const m=Math.acos(x),_=Math.sin(m);h=Math.sin(h*m)/_,a=Math.sin(a*m)/_,l=l*h+u*a,c=c*h+p*a,d=d*h+g*a,f=f*h+v*a}else{l=l*h+u*a,c=c*h+p*a,d=d*h+g*a,f=f*h+v*a;const m=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=m,c*=m,d*=m,f*=m}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],f=s[o],u=s[o+1],p=s[o+2],g=s[o+3];return e[t]=a*g+d*f+l*p-c*u,e[t+1]=l*g+d*u+c*f-a*p,e[t+2]=c*g+d*p+a*u-l*f,e[t+3]=d*g-a*f-l*u-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),f=a(s/2),u=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=u*d*f+c*p*g,this._y=c*p*f-u*d*g,this._z=c*d*g+u*p*f,this._w=c*d*f-u*p*g;break;case"YXZ":this._x=u*d*f+c*p*g,this._y=c*p*f-u*d*g,this._z=c*d*g-u*p*f,this._w=c*d*f+u*p*g;break;case"ZXY":this._x=u*d*f-c*p*g,this._y=c*p*f+u*d*g,this._z=c*d*g+u*p*f,this._w=c*d*f-u*p*g;break;case"ZYX":this._x=u*d*f-c*p*g,this._y=c*p*f+u*d*g,this._z=c*d*g-u*p*f,this._w=c*d*f+u*p*g;break;case"YZX":this._x=u*d*f+c*p*g,this._y=c*p*f+u*d*g,this._z=c*d*g-u*p*f,this._w=c*d*f-u*p*g;break;case"XZY":this._x=u*d*f-c*p*g,this._y=c*p*f-u*d*g,this._z=c*d*g+u*p*f,this._w=c*d*f+u*p*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],d=t[6],f=t[10],u=i+a+f;if(u>0){const p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(d-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(d-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+d)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+d)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,d=t._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){const c=Math.acos(a),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+i*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(e=0,t=0,i=0){k.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Dg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Dg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*d,this.y=i+l*d+a*c-s*f,this.z=r+l*f+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Qu.copy(this).projectOnVector(e),this.sub(Qu)}reflect(e){return this.sub(Qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qu=new k,Dg=new Qi;class qe{constructor(e,t,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=t,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],f=i[7],u=i[2],p=i[5],g=i[8],v=r[0],x=r[3],h=r[6],m=r[1],_=r[4],S=r[7],w=r[2],b=r[5],R=r[8];return s[0]=o*v+a*m+l*w,s[3]=o*x+a*_+l*b,s[6]=o*h+a*S+l*R,s[1]=c*v+d*m+f*w,s[4]=c*x+d*_+f*b,s[7]=c*h+d*S+f*R,s[2]=u*v+p*m+g*w,s[5]=u*x+p*_+g*b,s[8]=u*h+p*S+g*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return t*o*d-t*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=d*o-a*c,u=a*l-d*s,p=c*s-o*l,g=t*f+i*u+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-d*i)*v,e[2]=(a*i-r*o)*v,e[3]=u*v,e[4]=(d*t-r*l)*v,e[5]=(r*s-a*t)*v,e[6]=p*v,e[7]=(i*l-c*t)*v,e[8]=(o*t-i*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(ed.makeScale(e,t)),this}rotate(e){return this.premultiply(ed.makeRotation(-e)),this}translate(e,t){return this.premultiply(ed.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ed=new qe,Ug=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Fg=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q1(){const n={enabled:!0,workingColorSpace:pn,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===at&&(r.r=Wi(r.r),r.g=Wi(r.g),r.b=Wi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===at&&(r.r=Zs(r.r),r.g=Zs(r.g),r.b=Zs(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pr?zc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Hc("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Hc("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[pn]:{primaries:e,whitePoint:i,transfer:zc,toXYZ:Ug,fromXYZ:Fg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:i,transfer:at,toXYZ:Ug,fromXYZ:Fg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),n}const nt=q1();function Wi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Zs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let fs;class $1{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{fs===void 0&&(fs=ka("canvas")),fs.width=e.width,fs.height=e.height;const r=fs.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=fs}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ka("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Wi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Wi(t[i]/255)*255):t[i]=Wi(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let K1=0;class jp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=ii(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(td(r[o].image)):s.push(td(r[o]))}else s=td(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function td(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$1.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}let Z1=0;const nd=new k;class Ht extends So{constructor(e=Ht.DEFAULT_IMAGE,t=Ht.DEFAULT_MAPPING,i=xi,r=xi,s=Vt,o=Bi,a=Bn,l=bn,c=Ht.DEFAULT_ANISOTROPY,d=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=ii(),this.name="",this.source=new jp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(nd).x}get height(){return this.source.getSize(nd).y}get depth(){return this.source.getSize(nd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case co:e.x=e.x-Math.floor(e.x);break;case xi:e.x=e.x<0?0:1;break;case Bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case co:e.y=e.y-Math.floor(e.y);break;case xi:e.y=e.y<0?0:1;break;case Bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Ht.DEFAULT_IMAGE=null;Ht.DEFAULT_MAPPING=yv;Ht.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,t=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],d=l[4],f=l[8],u=l[1],p=l[5],g=l[9],v=l[2],x=l[6],h=l[10];if(Math.abs(d-u)<.01&&Math.abs(f-v)<.01&&Math.abs(g-x)<.01){if(Math.abs(d+u)<.1&&Math.abs(f+v)<.1&&Math.abs(g+x)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,S=(p+1)/2,w=(h+1)/2,b=(d+u)/4,R=(f+v)/4,y=(g+x)/4;return _>S&&_>w?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=b/i,s=R/i):S>w?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=b/r,s=y/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=R/s,r=y/s),this.set(i,r,s,t),this}let m=Math.sqrt((x-g)*(x-g)+(f-v)*(f-v)+(u-d)*(u-d));return Math.abs(m)<.001&&(m=1),this.x=(x-g)/m,this.y=(f-v)/m,this.z=(u-d)/m,this.w=Math.acos((c+p+h-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class J1 extends So{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new xt(0,0,e,t),this.scissorTest=!1,this.viewport=new xt(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:i.depth},s=new Ht(r),o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Vt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new jp(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mi extends J1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Pv extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q1 extends Ht{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=zt,this.minFilter=zt,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $e{constructor(e,t,i,r,s,o,a,l,c,d,f,u,p,g,v,x){$e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,d,f,u,p,g,v,x)}set(e,t,i,r,s,o,a,l,c,d,f,u,p,g,v,x){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=d,h[10]=f,h[14]=u,h[3]=p,h[7]=g,h[11]=v,h[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $e().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,i=e.elements,r=1/hs.setFromMatrixColumn(e,0).length(),s=1/hs.setFromMatrixColumn(e,1).length(),o=1/hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const u=o*d,p=o*f,g=a*d,v=a*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=p+g*c,t[5]=u-v*c,t[9]=-a*l,t[2]=v-u*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const u=l*d,p=l*f,g=c*d,v=c*f;t[0]=u+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*d,t[9]=-a,t[2]=p*a-g,t[6]=v+u*a,t[10]=o*l}else if(e.order==="ZXY"){const u=l*d,p=l*f,g=c*d,v=c*f;t[0]=u-v*a,t[4]=-o*f,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*d,t[9]=v-u*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const u=o*d,p=o*f,g=a*d,v=a*f;t[0]=l*d,t[4]=g*c-p,t[8]=u*c+v,t[1]=l*f,t[5]=v*c+u,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const u=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*d,t[4]=v-u*f,t[8]=g*f+p,t[1]=f,t[5]=o*d,t[9]=-a*d,t[2]=-c*d,t[6]=p*f+g,t[10]=u-v*f}else if(e.order==="XZY"){const u=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=u*f+v,t[5]=o*d,t[9]=p*f-g,t[2]=g*f-p,t[6]=a*d,t[10]=v*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eE,e,tE)}lookAt(e,t,i){const r=this.elements;return En.subVectors(e,t),En.lengthSq()===0&&(En.z=1),En.normalize(),ir.crossVectors(i,En),ir.lengthSq()===0&&(Math.abs(i.z)===1?En.x+=1e-4:En.z+=1e-4,En.normalize(),ir.crossVectors(i,En)),ir.normalize(),pl.crossVectors(En,ir),r[0]=ir.x,r[4]=pl.x,r[8]=En.x,r[1]=ir.y,r[5]=pl.y,r[9]=En.y,r[2]=ir.z,r[6]=pl.z,r[10]=En.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],f=i[5],u=i[9],p=i[13],g=i[2],v=i[6],x=i[10],h=i[14],m=i[3],_=i[7],S=i[11],w=i[15],b=r[0],R=r[4],y=r[8],T=r[12],D=r[1],L=r[5],z=r[9],G=r[13],W=r[2],F=r[6],I=r[10],N=r[14],P=r[3],O=r[7],q=r[11],K=r[15];return s[0]=o*b+a*D+l*W+c*P,s[4]=o*R+a*L+l*F+c*O,s[8]=o*y+a*z+l*I+c*q,s[12]=o*T+a*G+l*N+c*K,s[1]=d*b+f*D+u*W+p*P,s[5]=d*R+f*L+u*F+p*O,s[9]=d*y+f*z+u*I+p*q,s[13]=d*T+f*G+u*N+p*K,s[2]=g*b+v*D+x*W+h*P,s[6]=g*R+v*L+x*F+h*O,s[10]=g*y+v*z+x*I+h*q,s[14]=g*T+v*G+x*N+h*K,s[3]=m*b+_*D+S*W+w*P,s[7]=m*R+_*L+S*F+w*O,s[11]=m*y+_*z+S*I+w*q,s[15]=m*T+_*G+S*N+w*K,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],f=e[6],u=e[10],p=e[14],g=e[3],v=e[7],x=e[11],h=e[15],m=l*p-c*u,_=a*p-c*f,S=a*u-l*f,w=o*p-c*d,b=o*u-l*d,R=o*f-a*d;return t*(v*m-x*_+h*S)-i*(g*m-x*w+h*b)+r*(g*_-v*w+h*R)-s*(g*S-v*b+x*R)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],f=e[9],u=e[10],p=e[11],g=e[12],v=e[13],x=e[14],h=e[15],m=t*a-i*o,_=t*l-r*o,S=t*c-s*o,w=i*l-r*a,b=i*c-s*a,R=r*c-s*l,y=d*v-f*g,T=d*x-u*g,D=d*h-p*g,L=f*x-u*v,z=f*h-p*v,G=u*h-p*x,W=m*G-_*z+S*L+w*D-b*T+R*y;if(W===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/W;return e[0]=(a*G-l*z+c*L)*F,e[1]=(r*z-i*G-s*L)*F,e[2]=(v*R-x*b+h*w)*F,e[3]=(u*b-f*R-p*w)*F,e[4]=(l*D-o*G-c*T)*F,e[5]=(t*G-r*D+s*T)*F,e[6]=(x*S-g*R-h*_)*F,e[7]=(d*R-u*S+p*_)*F,e[8]=(o*z-a*D+c*y)*F,e[9]=(i*D-t*z-s*y)*F,e[10]=(g*b-v*S+h*m)*F,e[11]=(f*S-d*b-p*m)*F,e[12]=(a*T-o*L-l*y)*F,e[13]=(t*L-i*T+r*y)*F,e[14]=(v*_-g*w-x*m)*F,e[15]=(d*w-f*_+u*m)*F,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,d=o+o,f=a+a,u=s*c,p=s*d,g=s*f,v=o*d,x=o*f,h=a*f,m=l*c,_=l*d,S=l*f,w=i.x,b=i.y,R=i.z;return r[0]=(1-(v+h))*w,r[1]=(p+S)*w,r[2]=(g-_)*w,r[3]=0,r[4]=(p-S)*b,r[5]=(1-(u+h))*b,r[6]=(x+m)*b,r[7]=0,r[8]=(g+_)*R,r[9]=(x-m)*R,r[10]=(1-(u+v))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),t.identity(),this;let o=hs.set(r[0],r[1],r[2]).length();const a=hs.set(r[4],r[5],r[6]).length(),l=hs.set(r[8],r[9],r[10]).length();s<0&&(o=-o),Xn.copy(this);const c=1/o,d=1/a,f=1/l;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=d,Xn.elements[5]*=d,Xn.elements[6]*=d,Xn.elements[8]*=f,Xn.elements[9]*=f,Xn.elements[10]*=f,t.setFromRotationMatrix(Xn),i.x=o,i.y=a,i.z=l,this}makePerspective(e,t,i,r,s,o,a=_i,l=!1){const c=this.elements,d=2*s/(t-e),f=2*s/(i-r),u=(t+e)/(t-e),p=(i+r)/(i-r);let g,v;if(l)g=s/(o-s),v=o*s/(o-s);else if(a===_i)g=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Oa)g=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=_i,l=!1){const c=this.elements,d=2/(t-e),f=2/(i-r),u=-(t+e)/(t-e),p=-(i+r)/(i-r);let g,v;if(l)g=1/(o-s),v=o/(o-s);else if(a===_i)g=-2/(o-s),v=-(o+s)/(o-s);else if(a===Oa)g=-1/(o-s),v=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=d,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const hs=new k,Xn=new $e,eE=new k(0,0,0),tE=new k(1,1,1),ir=new k,pl=new k,En=new k,Og=new $e,kg=new Qi;class si{constructor(e=0,t=0,i=0,r=si.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],f=r[2],u=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(et(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,p),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Og.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Og,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kg.setFromEuler(this),this.setFromQuaternion(kg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}si.DEFAULT_ORDER="XYZ";class Iv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nE=0;const Bg=new k,ps=new Qi,Ci=new $e,ml=new k,Fo=new k,iE=new k,rE=new Qi,zg=new k(1,0,0),Vg=new k(0,1,0),Hg=new k(0,0,1),Gg={type:"added"},sE={type:"removed"},ms={type:"childadded",child:null},id={type:"childremoved",child:null};class vt extends So{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nE++}),this.uuid=ii(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=vt.DEFAULT_UP.clone();const e=new k,t=new si,i=new Qi,r=new k(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new $e},normalMatrix:{value:new qe}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Iv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.multiply(ps),this}rotateOnWorldAxis(e,t){return ps.setFromAxisAngle(e,t),this.quaternion.premultiply(ps),this}rotateX(e){return this.rotateOnAxis(zg,e)}rotateY(e){return this.rotateOnAxis(Vg,e)}rotateZ(e){return this.rotateOnAxis(Hg,e)}translateOnAxis(e,t){return Bg.copy(e).applyQuaternion(this.quaternion),this.position.add(Bg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zg,e)}translateY(e){return this.translateOnAxis(Vg,e)}translateZ(e){return this.translateOnAxis(Hg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ml.copy(e):ml.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ci.lookAt(Fo,ml,this.up):Ci.lookAt(ml,Fo,this.up),this.quaternion.setFromRotationMatrix(Ci),r&&(Ci.extractRotation(r.matrixWorld),ps.setFromRotationMatrix(Ci),this.quaternion.premultiply(ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Gg),ms.child=e,this.dispatchEvent(ms),ms.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(sE),id.child=e,this.dispatchEvent(id),id.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Gg),ms.child=e,this.dispatchEvent(ms),ms.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,e,iE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,rE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*i-s[8]*r,s[13]+=i-s[1]*t-s[5]*i-s[9]*r,s[14]+=r-s[2]*t-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),f=o(e.shapes),u=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),f.length>0&&(i.shapes=f),u.length>0&&(i.skeletons=u),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}vt.DEFAULT_UP=new k(0,1,0);vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class zi extends vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oE={type:"move"};class rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const x=t.getJointPose(v,i),h=this._getHandJoint(c,v);x!==null&&(h.matrix.fromArray(x.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=x.radius),h.visible=x!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=d.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&u>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oE)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new zi;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const Lv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},rr={h:0,s:0,l:0},gl={h:0,s:0,l:0};function sd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Be{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=nt.workingColorSpace){return this.r=e,this.g=t,this.b=i,nt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=nt.workingColorSpace){if(e=Wp(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=sd(o,s,e+1/3),this.g=sd(o,s,e),this.b=sd(o,s,e-1/3)}return nt.colorSpaceToWorking(this,r),this}setStyle(e,t=kt){function i(s){s!==void 0&&parseFloat(s)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const i=Lv[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Wi(e.r),this.g=Wi(e.g),this.b=Wi(e.b),this}copyLinearToSRGB(e){return this.r=Zs(e.r),this.g=Zs(e.g),this.b=Zs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return nt.workingToColorSpace(on.copy(this),e),Math.round(et(on.r*255,0,255))*65536+Math.round(et(on.g*255,0,255))*256+Math.round(et(on.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(on.copy(this),t);const i=on.r,r=on.g,s=on.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=d<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(on.copy(this),t),e.r=on.r,e.g=on.g,e.b=on.b,e}getStyle(e=kt){nt.workingToColorSpace(on.copy(this),e);const t=on.r,i=on.g,r=on.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(rr),this.setHSL(rr.h+e,rr.s+t,rr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(rr),e.getHSL(gl);const i=ha(rr.h,gl.h,t),r=ha(rr.s,gl.s,t),s=ha(rr.l,gl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const on=new Be;Be.NAMES=Lv;class pu{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Be(e),this.density=t}clone(){return new pu(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class mu extends vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new si,this.environmentIntensity=1,this.environmentRotation=new si,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Yn=new k,Pi=new k,od=new k,Ii=new k,gs=new k,xs=new k,Wg=new k,ad=new k,ld=new k,cd=new k,ud=new xt,dd=new xt,fd=new xt;class Fn{constructor(e=new k,t=new k,i=new k){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Yn.subVectors(e,t),r.cross(Yn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Yn.subVectors(r,t),Pi.subVectors(i,t),od.subVectors(e,t);const o=Yn.dot(Yn),a=Yn.dot(Pi),l=Yn.dot(od),c=Pi.dot(Pi),d=Pi.dot(od),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const u=1/f,p=(c*l-a*d)*u,g=(o*d-a*l)*u;return s.set(1-p-g,g,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ii.x),l.addScaledVector(o,Ii.y),l.addScaledVector(a,Ii.z),l)}static getInterpolatedAttribute(e,t,i,r,s,o){return ud.setScalar(0),dd.setScalar(0),fd.setScalar(0),ud.fromBufferAttribute(e,t),dd.fromBufferAttribute(e,i),fd.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(ud,s.x),o.addScaledVector(dd,s.y),o.addScaledVector(fd,s.z),o}static isFrontFacing(e,t,i,r){return Yn.subVectors(i,t),Pi.subVectors(e,t),Yn.cross(Pi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Yn.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Fn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Fn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Fn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;gs.subVectors(r,i),xs.subVectors(s,i),ad.subVectors(e,i);const l=gs.dot(ad),c=xs.dot(ad);if(l<=0&&c<=0)return t.copy(i);ld.subVectors(e,r);const d=gs.dot(ld),f=xs.dot(ld);if(d>=0&&f<=d)return t.copy(r);const u=l*f-d*c;if(u<=0&&l>=0&&d<=0)return o=l/(l-d),t.copy(i).addScaledVector(gs,o);cd.subVectors(e,s);const p=gs.dot(cd),g=xs.dot(cd);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(xs,a);const x=d*g-p*f;if(x<=0&&f-d>=0&&p-g>=0)return Wg.subVectors(s,r),a=(f-d)/(f-d+(p-g)),t.copy(r).addScaledVector(Wg,a);const h=1/(x+v+u);return o=v*h,a=u*h,t.copy(i).addScaledVector(gs,o).addScaledVector(xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class oi{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,qn):qn.fromBufferAttribute(s,o),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xl.copy(i.boundingBox)),xl.applyMatrix4(e.matrixWorld),this.union(xl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oo),_l.subVectors(this.max,Oo),_s.subVectors(e.a,Oo),vs.subVectors(e.b,Oo),ys.subVectors(e.c,Oo),sr.subVectors(vs,_s),or.subVectors(ys,vs),Dr.subVectors(_s,ys);let t=[0,-sr.z,sr.y,0,-or.z,or.y,0,-Dr.z,Dr.y,sr.z,0,-sr.x,or.z,0,-or.x,Dr.z,0,-Dr.x,-sr.y,sr.x,0,-or.y,or.x,0,-Dr.y,Dr.x,0];return!hd(t,_s,vs,ys,_l)||(t=[1,0,0,0,1,0,0,0,1],!hd(t,_s,vs,ys,_l))?!1:(vl.crossVectors(sr,or),t=[vl.x,vl.y,vl.z],hd(t,_s,vs,ys,_l))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Li),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Li=[new k,new k,new k,new k,new k,new k,new k,new k],qn=new k,xl=new oi,_s=new k,vs=new k,ys=new k,sr=new k,or=new k,Dr=new k,Oo=new k,_l=new k,vl=new k,Ur=new k;function hd(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ur.fromArray(n,s);const a=r.x*Math.abs(Ur.x)+r.y*Math.abs(Ur.y)+r.z*Math.abs(Ur.z),l=e.dot(Ur),c=t.dot(Ur),d=i.dot(Ur);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const Dt=new k,yl=new Ve;let aE=0;class Gt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:aE++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Th,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)yl.fromBufferAttribute(this,t),yl.applyMatrix3(e),this.setXY(t,yl.x,yl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Th&&(e.usage=this.usage),e}}class Nv extends Gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Dv extends Gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ft extends Gt{constructor(e,t,i){super(new Float32Array(e),t,i)}}const lE=new oi,ko=new k,pd=new k;class Ti{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):lE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ko.subVectors(e,this.center);const t=ko.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(ko,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(pd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ko.copy(e.center).add(pd)),this.expandByPoint(ko.copy(e.center).sub(pd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let cE=0;const Ln=new $e,md=new vt,Ss=new k,wn=new oi,Bo=new oi,Yt=new k;class Mt extends So{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cE++}),this.uuid=ii(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(b1(e)?Dv:Nv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return md.lookAt(e),md.updateMatrix(),this.applyMatrix4(md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ss).negate(),this.translate(Ss.x,Ss.y,Ss.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ft(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Yt.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(Yt),Yt.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(Yt)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Bo.setFromBufferAttribute(a),this.morphTargetsRelative?(Yt.addVectors(wn.min,Bo.min),wn.expandByPoint(Yt),Yt.addVectors(wn.max,Bo.max),wn.expandByPoint(Yt)):(wn.expandByPoint(Bo.min),wn.expandByPoint(Bo.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Yt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Yt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Yt.fromBufferAttribute(a,c),l&&(Ss.fromBufferAttribute(e,c),Yt.add(Ss)),r=Math.max(r,i.distanceToSquared(Yt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let y=0;y<i.count;y++)a[y]=new k,l[y]=new k;const c=new k,d=new k,f=new k,u=new Ve,p=new Ve,g=new Ve,v=new k,x=new k;function h(y,T,D){c.fromBufferAttribute(i,y),d.fromBufferAttribute(i,T),f.fromBufferAttribute(i,D),u.fromBufferAttribute(s,y),p.fromBufferAttribute(s,T),g.fromBufferAttribute(s,D),d.sub(c),f.sub(c),p.sub(u),g.sub(u);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(v.copy(d).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(L),x.copy(f).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(L),a[y].add(v),a[T].add(v),a[D].add(v),l[y].add(x),l[T].add(x),l[D].add(x))}let m=this.groups;m.length===0&&(m=[{start:0,count:e.count}]);for(let y=0,T=m.length;y<T;++y){const D=m[y],L=D.start,z=D.count;for(let G=L,W=L+z;G<W;G+=3)h(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const _=new k,S=new k,w=new k,b=new k;function R(y){w.fromBufferAttribute(r,y),b.copy(w);const T=a[y];_.copy(T),_.sub(w.multiplyScalar(w.dot(T))).normalize(),S.crossVectors(b,T);const L=S.dot(l[y])<0?-1:1;o.setXYZW(y,_.x,_.y,_.z,L)}for(let y=0,T=m.length;y<T;++y){const D=m[y],L=D.start,z=D.count;for(let G=L,W=L+z;G<W;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,p=i.count;u<p;u++)i.setXYZ(u,0,0,0);const r=new k,s=new k,o=new k,a=new k,l=new k,c=new k,d=new k,f=new k;if(e)for(let u=0,p=e.count;u<p;u+=3){const g=e.getX(u+0),v=e.getX(u+1),x=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),o.fromBufferAttribute(t,x),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,x),a.add(d),l.add(d),c.add(d),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(x,c.x,c.y,c.z)}else for(let u=0,p=t.count;u<p;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),i.setXYZ(u+0,d.x,d.y,d.z),i.setXYZ(u+1,d.x,d.y,d.z),i.setXYZ(u+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Yt.fromBufferAttribute(e,t),Yt.normalize(),e.setXYZ(t,Yt.x,Yt.y,Yt.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,f=a.normalized,u=new c.constructor(l.length*d);let p=0,g=0;for(let v=0,x=l.length;v<x;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*d;for(let h=0;h<d;h++)u[g++]=c[p++]}return new Gt(u,d,f)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Mt,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,f=c.length;d<f;d++){const u=c[d],p=e(u,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,u=c.length;f<u;f++){const p=c[f];d.push(p.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(t))}const s=e.morphAttributes;for(const c in s){const d=[],f=s[c];for(let u=0,p=f.length;u<p;u++)d.push(f[u].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Uv{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Th,this.updateRanges=[],this.version=0,this.uuid=ii()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ii()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new k;class Ba{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=lt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),i=lt(i,this.array),r=lt(r,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Vc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ba(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Vc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}let uE=0;class Vn extends So{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uE++}),this.uuid=ii(),this.name="",this.type="Material",this.blending=Ks,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Of,this.blendDst=kf,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=ao,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Of&&(i.blendSrc=this.blendSrc),this.blendDst!==kf&&(i.blendDst=this.blendDst),this.blendEquation!==Wr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ao&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Fv extends Vn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ms;const zo=new k,Es=new k,ws=new k,Ts=new Ve,Vo=new Ve,Ov=new $e,Sl=new k,Ho=new k,Ml=new k,jg=new Ve,gd=new Ve,Xg=new Ve;class dE extends vt{constructor(e=new Fv){if(super(),this.isSprite=!0,this.type="Sprite",Ms===void 0){Ms=new Mt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Uv(t,5);Ms.setIndex([0,1,2,0,2,3]),Ms.setAttribute("position",new Ba(i,3,0,!1)),Ms.setAttribute("uv",new Ba(i,2,3,!1))}this.geometry=Ms,this.material=e,this.center=new Ve(.5,.5),this.count=1}raycast(e,t){e.camera===null&&Oe('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Es.setFromMatrixScale(this.matrixWorld),Ov.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ws.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-ws.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;El(Sl.set(-.5,-.5,0),ws,o,Es,r,s),El(Ho.set(.5,-.5,0),ws,o,Es,r,s),El(Ml.set(.5,.5,0),ws,o,Es,r,s),jg.set(0,0),gd.set(1,0),Xg.set(1,1);let a=e.ray.intersectTriangle(Sl,Ho,Ml,!1,zo);if(a===null&&(El(Ho.set(-.5,.5,0),ws,o,Es,r,s),gd.set(0,1),a=e.ray.intersectTriangle(Sl,Ml,Ho,!1,zo),a===null))return;const l=e.ray.origin.distanceTo(zo);l<e.near||l>e.far||t.push({distance:l,point:zo.clone(),uv:Fn.getInterpolation(zo,Sl,Ho,Ml,jg,gd,Xg,new Ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function El(n,e,t,i,r,s){Ts.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Vo.x=s*Ts.x-r*Ts.y,Vo.y=r*Ts.x+s*Ts.y):Vo.copy(Ts),n.copy(e),n.x+=Vo.x,n.y+=Vo.y,n.applyMatrix4(Ov)}const Ni=new k,xd=new k,wl=new k,ar=new k,_d=new k,Tl=new k,vd=new k;class gu{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){xd.copy(e).add(t).multiplyScalar(.5),wl.copy(t).sub(e).normalize(),ar.copy(this.origin).sub(xd);const s=e.distanceTo(t)*.5,o=-this.direction.dot(wl),a=ar.dot(this.direction),l=-ar.dot(wl),c=ar.lengthSq(),d=Math.abs(1-o*o);let f,u,p,g;if(d>0)if(f=o*l-a,u=o*a-l,g=s*d,f>=0)if(u>=-g)if(u<=g){const v=1/d;f*=v,u*=v,p=f*(f+o*u+2*a)+u*(o*f+u+2*l)+c}else u=s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u=-s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;else u<=-g?(f=Math.max(0,-(-o*s+a)),u=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c):u<=g?(f=0,u=Math.min(Math.max(-s,-l),s),p=u*(u+2*l)+c):(f=Math.max(0,-(o*s+a)),u=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+u*(u+2*l)+c);else u=o>0?-s:s,f=Math.max(0,-(o*u+a)),p=-f*f+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(xd).addScaledVector(wl,u),p}intersectSphere(e,t){Ni.subVectors(e.center,this.origin);const i=Ni.dot(this.direction),r=Ni.dot(Ni)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),d>=0?(s=(e.min.y-u.y)*d,o=(e.max.y-u.y)*d):(s=(e.max.y-u.y)*d,o=(e.min.y-u.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,i,r,s){_d.subVectors(t,e),Tl.subVectors(i,e),vd.crossVectors(_d,Tl);let o=this.direction.dot(vd),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ar.subVectors(this.origin,e);const l=a*this.direction.dot(Tl.crossVectors(ar,Tl));if(l<0)return null;const c=a*this.direction.dot(_d.cross(ar));if(c<0||l+c>o)return null;const d=-a*ar.dot(vd);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ei extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Yg=new $e,Fr=new gu,bl=new Ti,qg=new k,Al=new k,Rl=new k,Cl=new k,yd=new k,Pl=new k,$g=new k,Il=new k;class Pt extends vt{constructor(e=new Mt,t=new ei){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Pl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],f=s[l];d!==0&&(yd.fromBufferAttribute(f,e),o?Pl.addScaledVector(yd,d):Pl.addScaledVector(yd.sub(t),d))}t.add(Pl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bl.copy(i.boundingSphere),bl.applyMatrix4(s),Fr.copy(e.ray).recast(e.near),!(bl.containsPoint(Fr.origin)===!1&&(Fr.intersectSphere(bl,qg)===null||Fr.origin.distanceToSquared(qg)>(e.far-e.near)**2))&&(Yg.copy(s).invert(),Fr.copy(e.ray).applyMatrix4(Yg),!(i.boundingBox!==null&&Fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Fr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,u=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const x=u[g],h=o[x.materialIndex],m=Math.max(x.start,p.start),_=Math.min(a.count,Math.min(x.start+x.count,p.start+p.count));for(let S=m,w=_;S<w;S+=3){const b=a.getX(S),R=a.getX(S+1),y=a.getX(S+2);r=Ll(this,h,e,i,c,d,f,b,R,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let x=g,h=v;x<h;x+=3){const m=a.getX(x),_=a.getX(x+1),S=a.getX(x+2);r=Ll(this,o,e,i,c,d,f,m,_,S),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=u.length;g<v;g++){const x=u[g],h=o[x.materialIndex],m=Math.max(x.start,p.start),_=Math.min(l.count,Math.min(x.start+x.count,p.start+p.count));for(let S=m,w=_;S<w;S+=3){const b=S,R=S+1,y=S+2;r=Ll(this,h,e,i,c,d,f,b,R,y),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=x.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let x=g,h=v;x<h;x+=3){const m=x,_=x+1,S=x+2;r=Ll(this,o,e,i,c,d,f,m,_,S),r&&(r.faceIndex=Math.floor(x/3),t.push(r))}}}}function fE(n,e,t,i,r,s,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===$i,a),l===null)return null;Il.copy(a),Il.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(Il);return c<t.near||c>t.far?null:{distance:c,point:Il.clone(),object:n}}function Ll(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,Al),n.getVertexPosition(l,Rl),n.getVertexPosition(c,Cl);const d=fE(n,e,t,i,Al,Rl,Cl,$g);if(d){const f=new k;Fn.getBarycoord($g,Al,Rl,Cl,f),r&&(d.uv=Fn.getInterpolatedAttribute(r,a,l,c,f,new Ve)),s&&(d.uv1=Fn.getInterpolatedAttribute(s,a,l,c,f,new Ve)),o&&(d.normal=Fn.getInterpolatedAttribute(o,a,l,c,f,new k),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new k,materialIndex:0};Fn.getNormal(Al,Rl,Cl,u.normal),d.face=u,d.barycoord=f}return d}const Kg=new k,Zg=new xt,Jg=new xt,hE=new k,Qg=new $e,Nl=new k,Sd=new Ti,e0=new $e,Md=new gu;class pE extends Pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tg,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new oi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Nl),this.boundingBox.expandByPoint(Nl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ti),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Nl),this.boundingSphere.expandByPoint(Nl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sd.copy(this.boundingSphere),Sd.applyMatrix4(r),e.ray.intersectsSphere(Sd)!==!1&&(e0.copy(r).invert(),Md.copy(e.ray).applyMatrix4(e0),!(this.boundingBox!==null&&Md.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Md)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new xt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tg?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===m1?this.bindMatrixInverse.copy(this.bindMatrix).invert():Le("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Zg.fromBufferAttribute(r.attributes.skinIndex,e),Jg.fromBufferAttribute(r.attributes.skinWeight,e),Kg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=Jg.getComponent(s);if(o!==0){const a=Zg.getComponent(s);Qg.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(hE.copy(Kg).applyMatrix4(Qg),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class kv extends vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xp extends Ht{constructor(e=null,t=1,i=1,r,s,o,a,l,c=zt,d=zt,f,u){super(null,o,a,l,c,d,r,s,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const t0=new $e,mE=new $e;class Yp{constructor(e=[],t=[]){this.uuid=ii(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Le("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new $e;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:mE;t0.multiplyMatrices(a,t[s]),t0.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Yp(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Xp(t,e,e,Bn,kn);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(Le("Skeleton: No bone found with UUID:",s),o=new kv),this.bones.push(o),this.boneInverses.push(new $e().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class bh extends Gt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const bs=new $e,n0=new $e,Dl=[],i0=new oi,gE=new $e,Go=new Pt,Wo=new Ti;class Bv extends Pt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bh(new Float32Array(i*16),16),this.previousInstanceMatrix=null,this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,gE)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new oi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,bs),i0.copy(e.boundingBox).applyMatrix4(bs),this.boundingBox.union(i0)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ti),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,bs),Wo.copy(e.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(Wo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.previousInstanceMatrix!==null&&(this.previousInstanceMatrix=e.previousInstanceMatrix.clone()),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const i=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,o=e*s+1;for(let a=0;a<i.length;a++)i[a]=r[o+a]}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Go.geometry=this.geometry,Go.material=this.material,Go.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wo.copy(this.boundingSphere),Wo.applyMatrix4(i),e.ray.intersectsSphere(Wo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,bs),n0.multiplyMatrices(i,bs),Go.matrixWorld=n0,Go.raycast(e,Dl);for(let o=0,a=Dl.length;o<a;o++){const l=Dl[o];l.instanceId=s,l.object=this,t.push(l)}Dl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const i=t.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new Xp(new Float32Array(r*this.count),r,this.count,Op,kn));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<i.length;c++)o+=i[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=r*e;s[l]=a,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ed=new k,xE=new k,_E=new qe;class Gr{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ed.subVectors(i,t).cross(xE.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ed),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||_E.getNormalMatrix(e),r=this.coplanarPoint(Ed).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Or=new Ti,vE=new Ve(.5,.5),Ul=new k;class qp{constructor(e=new Gr,t=new Gr,i=new Gr,r=new Gr,s=new Gr,o=new Gr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=_i,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],d=s[4],f=s[5],u=s[6],p=s[7],g=s[8],v=s[9],x=s[10],h=s[11],m=s[12],_=s[13],S=s[14],w=s[15];if(r[0].setComponents(c-o,p-d,h-g,w-m).normalize(),r[1].setComponents(c+o,p+d,h+g,w+m).normalize(),r[2].setComponents(c+a,p+f,h+v,w+_).normalize(),r[3].setComponents(c-a,p-f,h-v,w-_).normalize(),i)r[4].setComponents(l,u,x,S).normalize(),r[5].setComponents(c-l,p-u,h-x,w-S).normalize();else if(r[4].setComponents(c-l,p-u,h-x,w-S).normalize(),t===_i)r[5].setComponents(c+l,p+u,h+x,w+S).normalize();else if(t===Oa)r[5].setComponents(l,u,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(e){Or.center.set(0,0,0);const t=vE.distanceTo(e.center);return Or.radius=.7071067811865476+t,Or.applyMatrix4(e.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Ul.x=r.normal.x>0?e.max.x:e.min.x,Ul.y=r.normal.y>0?e.max.y:e.min.y,Ul.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ul)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ho extends Vn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Gc=new k,Wc=new k,r0=new $e,jo=new gu,Fl=new Ti,wd=new k,s0=new k;class za extends vt{constructor(e=new Mt,t=new ho){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Gc.fromBufferAttribute(t,r-1),Wc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Gc.distanceTo(Wc);e.setAttribute("lineDistance",new Ft(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(r),Fl.radius+=s,e.ray.intersectsSphere(Fl)===!1)return;r0.copy(r).invert(),jo.copy(e.ray).applyMatrix4(r0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,d=i.index,u=i.attributes.position;if(d!==null){const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,x=g-1;v<x;v+=c){const h=d.getX(v),m=d.getX(v+1),_=Ol(this,e,jo,l,h,m,v);_&&t.push(_)}if(this.isLineLoop){const v=d.getX(g-1),x=d.getX(p),h=Ol(this,e,jo,l,v,x,g-1);h&&t.push(h)}}else{const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,x=g-1;v<x;v+=c){const h=Ol(this,e,jo,l,v,v+1,v);h&&t.push(h)}if(this.isLineLoop){const v=Ol(this,e,jo,l,g-1,p,g-1);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ol(n,e,t,i,r,s,o){const a=n.geometry.attributes.position;if(Gc.fromBufferAttribute(a,r),Wc.fromBufferAttribute(a,s),t.distanceSqToSegment(Gc,Wc,wd,s0)>i)return;wd.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(wd);if(!(c<e.near||c>e.far))return{distance:c,point:s0.clone().applyMatrix4(n.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:n}}const o0=new k,a0=new k;class Ah extends za{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)o0.fromBufferAttribute(t,r),a0.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+o0.distanceTo(a0);e.setAttribute("lineDistance",new Ft(i,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yE extends za{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Va extends Vn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const l0=new $e,Rh=new gu,kl=new Ti,Bl=new k;class jc extends vt{constructor(e=new Mt,t=new Va){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kl.copy(i.boundingSphere),kl.applyMatrix4(r),kl.radius+=s,e.ray.intersectsSphere(kl)===!1)return;l0.copy(r).invert(),Rh.copy(e.ray).applyMatrix4(l0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const u=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=u,v=p;g<v;g++){const x=c.getX(g);Bl.fromBufferAttribute(f,x),c0(Bl,x,l,r,e,t,this)}}else{const u=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let g=u,v=p;g<v;g++)Bl.fromBufferAttribute(f,g),c0(Bl,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function c0(n,e,t,i,r,s,o){const a=Rh.distanceSqToPoint(n);if(a<t){const l=new k;Rh.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class zv extends Ht{constructor(e=[],t=rs,i,r,s,o,a,l,c,d){super(e,t,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class u0 extends Ht{constructor(e,t,i,r,s,o,a,l,c){super(e,t,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ha extends Ht{constructor(e,t,i=Ei,r,s,o,a=zt,l=zt,c,d=Zi,f=1){if(d!==Zi&&d!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const u={width:e,height:t,depth:f};super(u,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new jp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class SE extends Ha{constructor(e,t=Ei,i=rs,r,s,o=zt,a=zt,l,c=Zi){const d={width:e,height:e,depth:1},f=[d,d,d,d,d,d];super(e,e,t,i,r,s,o,a,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vv extends Ht{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Mo extends Mt{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],f=[];let u=0,p=0;g("z","y","x",-1,-1,i,t,e,o,s,0),g("z","y","x",1,-1,i,t,-e,o,s,1),g("x","z","y",1,1,e,i,t,r,o,2),g("x","z","y",1,-1,e,i,-t,r,o,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(d,3)),this.setAttribute("uv",new Ft(f,2));function g(v,x,h,m,_,S,w,b,R,y,T){const D=S/R,L=w/y,z=S/2,G=w/2,W=b/2,F=R+1,I=y+1;let N=0,P=0;const O=new k;for(let q=0;q<I;q++){const K=q*L-G;for(let ee=0;ee<F;ee++){const Ne=ee*D-z;O[v]=Ne*m,O[x]=K*_,O[h]=W,c.push(O.x,O.y,O.z),O[v]=0,O[x]=0,O[h]=b>0?1:-1,d.push(O.x,O.y,O.z),f.push(ee/R),f.push(1-q/y),N+=1}}for(let q=0;q<y;q++)for(let K=0;K<R;K++){const ee=u+K+F*q,Ne=u+K+F*(q+1),ze=u+(K+1)+F*(q+1),he=u+(K+1)+F*q;l.push(ee,Ne,he),l.push(Ne,ze,he),P+=6}a.addGroup(p,P,T),p+=P,u+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class qa extends Mt{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),c(i),d(),this.setAttribute("position",new Ft(s,3)),this.setAttribute("normal",new Ft(s.slice(),3)),this.setAttribute("uv",new Ft(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(m){const _=new k,S=new k,w=new k;for(let b=0;b<t.length;b+=3)p(t[b+0],_),p(t[b+1],S),p(t[b+2],w),l(_,S,w,m)}function l(m,_,S,w){const b=w+1,R=[];for(let y=0;y<=b;y++){R[y]=[];const T=m.clone().lerp(S,y/b),D=_.clone().lerp(S,y/b),L=b-y;for(let z=0;z<=L;z++)z===0&&y===b?R[y][z]=T:R[y][z]=T.clone().lerp(D,z/L)}for(let y=0;y<b;y++)for(let T=0;T<2*(b-y)-1;T++){const D=Math.floor(T/2);T%2===0?(u(R[y][D+1]),u(R[y+1][D]),u(R[y][D])):(u(R[y][D+1]),u(R[y+1][D+1]),u(R[y+1][D]))}}function c(m){const _=new k;for(let S=0;S<s.length;S+=3)_.x=s[S+0],_.y=s[S+1],_.z=s[S+2],_.normalize().multiplyScalar(m),s[S+0]=_.x,s[S+1]=_.y,s[S+2]=_.z}function d(){const m=new k;for(let _=0;_<s.length;_+=3){m.x=s[_+0],m.y=s[_+1],m.z=s[_+2];const S=x(m)/2/Math.PI+.5,w=h(m)/Math.PI+.5;o.push(S,1-w)}g(),f()}function f(){for(let m=0;m<o.length;m+=6){const _=o[m+0],S=o[m+2],w=o[m+4],b=Math.max(_,S,w),R=Math.min(_,S,w);b>.9&&R<.1&&(_<.2&&(o[m+0]+=1),S<.2&&(o[m+2]+=1),w<.2&&(o[m+4]+=1))}}function u(m){s.push(m.x,m.y,m.z)}function p(m,_){const S=m*3;_.x=e[S+0],_.y=e[S+1],_.z=e[S+2]}function g(){const m=new k,_=new k,S=new k,w=new k,b=new Ve,R=new Ve,y=new Ve;for(let T=0,D=0;T<s.length;T+=9,D+=6){m.set(s[T+0],s[T+1],s[T+2]),_.set(s[T+3],s[T+4],s[T+5]),S.set(s[T+6],s[T+7],s[T+8]),b.set(o[D+0],o[D+1]),R.set(o[D+2],o[D+3]),y.set(o[D+4],o[D+5]),w.copy(m).add(_).add(S).divideScalar(3);const L=x(w);v(b,D+0,m,L),v(R,D+2,_,L),v(y,D+4,S,L)}}function v(m,_,S,w){w<0&&m.x===1&&(o[_]=m.x-1),S.x===0&&S.z===0&&(o[_]=w/2/Math.PI+.5)}function x(m){return Math.atan2(m.z,-m.x)}function h(m){return Math.atan2(-m.y,Math.sqrt(m.x*m.x+m.z*m.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qa(e.vertices,e.indices,e.radius,e.detail)}}class jr extends qa{constructor(e=1,t=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new jr(e.radius,e.detail)}}class pa extends qa{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new pa(e.radius,e.detail)}}class xu extends Mt{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,f=e/a,u=t/l,p=[],g=[],v=[],x=[];for(let h=0;h<d;h++){const m=h*u-o;for(let _=0;_<c;_++){const S=_*f-s;g.push(S,-m,0),v.push(0,0,1),x.push(_/a),x.push(1-h/l)}}for(let h=0;h<l;h++)for(let m=0;m<a;m++){const _=m+c*h,S=m+c*(h+1),w=m+1+c*(h+1),b=m+1+c*h;p.push(_,S,b),p.push(S,w,b)}this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(v,3)),this.setAttribute("uv",new Ft(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xu(e.width,e.height,e.widthSegments,e.heightSegments)}}class $p extends Mt{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],f=new k,u=new k,p=[],g=[],v=[],x=[];for(let h=0;h<=i;h++){const m=[],_=h/i;let S=0;h===0&&o===0?S=.5/t:h===i&&l===Math.PI&&(S=-.5/t);for(let w=0;w<=t;w++){const b=w/t;f.x=-e*Math.cos(r+b*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+b*s)*Math.sin(o+_*a),g.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),x.push(b+S,1-_),m.push(c++)}d.push(m)}for(let h=0;h<i;h++)for(let m=0;m<t;m++){const _=d[h][m+1],S=d[h][m],w=d[h+1][m],b=d[h+1][m+1];(h!==0||o>0)&&p.push(_,S,b),(h!==i-1||l<Math.PI)&&p.push(S,w,b)}this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(v,3)),this.setAttribute("uv",new Ft(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $p(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xc extends qa{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Xc(e.radius,e.detail)}}class Yc extends Mt{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s,thetaStart:o,thetaLength:a},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],d=[],f=[],u=new k,p=new k,g=new k;for(let v=0;v<=i;v++){const x=o+v/i*a;for(let h=0;h<=r;h++){const m=h/r*s;p.x=(e+t*Math.cos(x))*Math.cos(m),p.y=(e+t*Math.cos(x))*Math.sin(m),p.z=t*Math.sin(x),c.push(p.x,p.y,p.z),u.x=e*Math.cos(m),u.y=e*Math.sin(m),g.subVectors(p,u).normalize(),d.push(g.x,g.y,g.z),f.push(h/r),f.push(v/i)}}for(let v=1;v<=i;v++)for(let x=1;x<=r;x++){const h=(r+1)*v+x-1,m=(r+1)*(v-1)+x-1,_=(r+1)*(v-1)+x,S=(r+1)*v+x;l.push(h,m,S),l.push(m,_,S)}this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(d,3)),this.setAttribute("uv",new Ft(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function po(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function un(n){const e={};for(let t=0;t<n.length;t++){const i=po(n[t]);for(const r in i)e[r]=i[r]}return e}function ME(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Hv(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}const EE={clone:po,merge:un};var wE=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,TE=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wE,this.fragmentShader=TE,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=ME(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class bE extends wi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ss extends Vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vp,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bi extends ss{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class AE extends Vn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vp,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new si,this.combine=Ip,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class RE extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CE extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function zl(n,e){return!n||n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function PE(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function d0(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function Gv(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push(...o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class Eo{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class IE extends Eo{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ag,endingEnd:Ag}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Rg:s=e,a=2*t-i;break;case Cg:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Rg:o=e,l=2*i-t;break;case Cg:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,d=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*d,this._offsetNext=o*d}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,g=(i-t)/(r-t),v=g*g,x=v*g,h=-u*x+2*u*v-u*g,m=(1+u)*x+(-1.5-2*u)*v+(-.5+u)*g+1,_=(-1-p)*x+(1.5+p)*v+.5*g,S=p*x-p*v;for(let w=0;w!==a;++w)s[w]=h*o[d+w]+m*o[c+w]+_*o[l+w]+S*o[f+w];return s}}class LE extends Eo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=(i-t)/(r-t),f=1-d;for(let u=0;u!==a;++u)s[u]=o[c+u]*f+o[l+u]*d;return s}}class NE extends Eo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class DE extends Eo{interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,d=this.settings||this.DefaultSettings_,f=d.inTangents,u=d.outTangents;if(!f||!u){const v=(i-t)/(r-t),x=1-v;for(let h=0;h!==a;++h)s[h]=o[c+h]*x+o[l+h]*v;return s}const p=a*2,g=e-1;for(let v=0;v!==a;++v){const x=o[c+v],h=o[l+v],m=g*p+v*2,_=u[m],S=u[m+1],w=e*p+v*2,b=f[w],R=f[w+1];let y=(i-t)/(r-t),T,D,L,z,G;for(let W=0;W<8;W++){T=y*y,D=T*y,L=1-y,z=L*L,G=z*L;const I=G*t+3*z*y*_+3*L*T*b+D*r-i;if(Math.abs(I)<1e-10)break;const N=3*z*(_-t)+6*L*y*(b-_)+3*T*(r-b);if(Math.abs(N)<1e-10)break;y=y-I/N,y=Math.max(0,Math.min(1,y))}s[v]=G*x+3*z*y*S+3*L*T*R+D*h}return s}}class ai{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zl(t,this.TimeBufferType),this.values=zl(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:zl(e.times,Array),values:zl(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new NE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new LE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new IE(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){const t=new DE(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.settings=this.settings),t}setInterpolation(e){let t;switch(e){case Ua:t=this.InterpolantFactoryMethodDiscrete;break;case Fa:t=this.InterpolantFactoryMethodLinear;break;case Ju:t=this.InterpolantFactoryMethodSmooth;break;case bg:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Le("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ua;case this.InterpolantFactoryMethodLinear:return Fa;case this.InterpolantFactoryMethodSmooth:return Ju;case this.InterpolantFactoryMethodBezier:return bg}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){Oe("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Oe("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&A1(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){Oe("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Ju,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],d=e[a+1];if(c!==d&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*i,u=f-i,p=f+i;for(let g=0;g!==i;++g){const v=t[f+g];if(v!==t[u+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,u=o*i;for(let p=0;p!==i;++p)t[u+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}ai.prototype.ValueTypeName="";ai.prototype.TimeBufferType=Float32Array;ai.prototype.ValueBufferType=Float32Array;ai.prototype.DefaultInterpolation=Fa;class wo extends ai{constructor(e,t,i){super(e,t,i)}}wo.prototype.ValueTypeName="bool";wo.prototype.ValueBufferType=Array;wo.prototype.DefaultInterpolation=Ua;wo.prototype.InterpolantFactoryMethodLinear=void 0;wo.prototype.InterpolantFactoryMethodSmooth=void 0;class Wv extends ai{constructor(e,t,i,r){super(e,t,i,r)}}Wv.prototype.ValueTypeName="color";class mo extends ai{constructor(e,t,i,r){super(e,t,i,r)}}mo.prototype.ValueTypeName="number";class UE extends Eo{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let d=c+a;c!==d;c+=4)Qi.slerpFlat(s,0,o,c-a,o,c,l);return s}}class go extends ai{constructor(e,t,i,r){super(e,t,i,r)}InterpolantFactoryMethodLinear(e){return new UE(this.times,this.values,this.getValueSize(),e)}}go.prototype.ValueTypeName="quaternion";go.prototype.InterpolantFactoryMethodSmooth=void 0;class To extends ai{constructor(e,t,i){super(e,t,i)}}To.prototype.ValueTypeName="string";To.prototype.ValueBufferType=Array;To.prototype.DefaultInterpolation=Ua;To.prototype.InterpolantFactoryMethodLinear=void 0;To.prototype.InterpolantFactoryMethodSmooth=void 0;class xo extends ai{constructor(e,t,i,r){super(e,t,i,r)}}xo.prototype.ValueTypeName="vector";class FE{constructor(e="",t=-1,i=[],r=g1){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=ii(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(kE(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s.userData=JSON.parse(e.userData||"{}"),s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let s=0,o=i.length;s!==o;++s)t.push(ai.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const d=PE(l);l=d0(l,1,d),c=d0(c,1,d),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new mo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],d=c.name.match(s);if(d&&d.length>1){const f=d[1];let u=r[f];u||(r[f]=u=[]),u.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(Le("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Oe("AnimationClip: No animation in JSONLoader data."),null;const i=function(f,u,p,g,v){if(p.length!==0){const x=[],h=[];Gv(p,x,h,g),x.length!==0&&v.push(new f(u,x,h))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const u=c[f].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const p={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let v=0;v<u[g].morphTargets.length;v++)p[u[g].morphTargets[v]]=-1;for(const v in p){const x=[],h=[];for(let m=0;m!==u[g].morphTargets.length;++m){const _=u[g];x.push(_.time),h.push(_.morphTarget===v?1:0)}r.push(new mo(".morphTargetInfluence["+v+"]",x,h))}l=p.length*o}else{const p=".bones["+t[f].name+"]";i(xo,p+".position",u,"pos",r),i(go,p+".quaternion",u,"rot",r),i(xo,p+".scale",u,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());const t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}}function OE(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return mo;case"vector":case"vector2":case"vector3":case"vector4":return xo;case"color":return Wv;case"quaternion":return go;case"bool":case"boolean":return wo;case"string":return To}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function kE(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=OE(n.type);if(n.times===void 0){const t=[],i=[];Gv(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const Vi={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(f0(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!f0(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function f0(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class BE{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,f){return c.push(d,f),this},this.removeHandler=function(d){const f=c.indexOf(d);return f!==-1&&c.splice(f,2),this},this.getHandler=function(d){for(let f=0,u=c.length;f<u;f+=2){const p=c[f],g=c[f+1];if(p.global&&(p.lastIndex=0),p.test(d))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const zE=new BE;class bo{constructor(e){this.manager=e!==void 0?e:zE,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}bo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Di={};class VE extends Error{constructor(e,t){super(e),this.response=t}}class jv extends bo{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Vi.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Di[e]!==void 0){Di[e].push({onLoad:t,onProgress:i,onError:r});return}Di[e]=[],Di[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const d=Di[e],f=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=u?parseInt(u):0,g=p!==0;let v=0;const x=new ReadableStream({start(h){m();function m(){f.read().then(({done:_,value:S})=>{if(_)h.close();else{v+=S.byteLength;const w=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let b=0,R=d.length;b<R;b++){const y=d[b];y.onProgress&&y.onProgress(w)}h.enqueue(S),m()}},_=>{h.error(_)})}}});return new Response(x)}else throw new VE(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return c.json();default:if(a==="")return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),u=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(u);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Vi.add(`file:${e}`,c);const d=Di[e];delete Di[e];for(let f=0,u=d.length;f<u;f++){const p=d[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const d=Di[e];if(d===void 0)throw this.manager.itemError(e),c;delete Di[e];for(let f=0,u=d.length;f<u;f++){const p=d[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const As=new WeakMap;class HE extends bo{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Vi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0);else{let f=As.get(o);f===void 0&&(f=[],As.set(o,f)),f.push({onLoad:t,onError:r})}return o}const a=ka("img");function l(){d(),t&&t(this);const f=As.get(this)||[];for(let u=0;u<f.length;u++){const p=f[u];p.onLoad&&p.onLoad(this)}As.delete(this),s.manager.itemEnd(e)}function c(f){d(),r&&r(f),Vi.remove(`image:${e}`);const u=As.get(this)||[];for(let p=0;p<u.length;p++){const g=u[p];g.onError&&g.onError(f)}As.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function d(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Vi.add(`image:${e}`,a),s.manager.itemStart(e),a.src=e,a}}class GE extends bo{constructor(e){super(e)}load(e,t,i,r){const s=new Ht,o=new HE(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class _u extends vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Td=new $e,h0=new k,p0=new k;class Kp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.mapType=bn,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qp,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;h0.setFromMatrixPosition(e.matrixWorld),t.position.copy(h0),p0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(p0),t.updateMatrixWorld(),Td.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Td,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===Oa||t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Td)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Vl=new k,Hl=new Qi,ui=new k;class Xv extends vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=_i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vl,Hl,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Hl,ui.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Vl,Hl,ui),ui.x===1&&ui.y===1&&ui.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vl,Hl,ui.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const lr=new k,m0=new Ve,g0=new Ve;class Jt extends Xv{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fo*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,m0,g0),t.subVectors(g0,m0)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class WE extends Kp{constructor(){super(new Jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,i=fo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class jE extends _u{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new WE}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class XE extends Kp{constructor(){super(new Jt(90,1,.5,500)),this.isPointLightShadow=!0}}class xr extends _u{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new XE}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class vu extends Xv{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class YE extends Kp{constructor(){super(new vu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Js extends _u{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(vt.DEFAULT_UP),this.updateMatrix(),this.target=new vt,this.shadow=new YE}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class qE extends _u{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ma{static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}const bd=new WeakMap;class $E extends bo{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Le("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Le("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Vi.get(`image-bitmap:${e}`);if(o!==void 0){if(s.manager.itemStart(e),o.then){o.then(c=>{if(bd.has(o)===!0)r&&r(bd.get(o)),s.manager.itemError(e),s.manager.itemEnd(e);else return t&&t(c),s.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Vi.add(`image-bitmap:${e}`,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),bd.set(l,c),Vi.remove(`image-bitmap:${e}`),s.manager.itemError(e),s.manager.itemEnd(e)});Vi.add(`image-bitmap:${e}`,l),s.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}const Rs=-90,Cs=1;class KE extends vt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Jt(Rs,Cs,e,t);r.layers=this.layers,this.add(r);const s=new Jt(Rs,Cs,e,t);s.layers=this.layers,this.add(s);const o=new Jt(Rs,Cs,e,t);o.layers=this.layers,this.add(o);const a=new Jt(Rs,Cs,e,t);a.layers=this.layers,this.add(a);const l=new Jt(Rs,Cs,e,t);l.layers=this.layers,this.add(l);const c=new Jt(Rs,Cs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Oa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(i,1,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,2,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,3,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(i,4,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(f,u,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ZE extends Jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Zp="\\[\\]\\.:\\/",JE=new RegExp("["+Zp+"]","g"),Jp="[^"+Zp+"]",QE="[^"+Zp.replace("\\.","")+"]",ew=/((?:WC+[\/:])*)/.source.replace("WC",Jp),tw=/(WCOD+)?/.source.replace("WCOD",QE),nw=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jp),iw=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jp),rw=new RegExp("^"+ew+tw+nw+iw+"$"),sw=["material","materials","bones","map"];class ow{constructor(e,t,i){const r=i||ct.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class ct{constructor(e,t,i){this.path=t,this.parsedPath=i||ct.parseTrackName(t),this.node=ct.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new ct.Composite(e,t,i):new ct(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(JE,"")}static parseTrackName(e){const t=rw.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);sw.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=ct.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;Oe("PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}ct.Composite=ow;ct.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ct.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ct.prototype.GetterByBindingType=[ct.prototype._getValue_direct,ct.prototype._getValue_array,ct.prototype._getValue_arrayElement,ct.prototype._getValue_toArray];ct.prototype.SetterByBindingTypeAndVersioning=[[ct.prototype._setValue_direct,ct.prototype._setValue_direct_setNeedsUpdate,ct.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_array,ct.prototype._setValue_array_setNeedsUpdate,ct.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_arrayElement,ct.prototype._setValue_arrayElement_setNeedsUpdate,ct.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ct.prototype._setValue_fromArray,ct.prototype._setValue_fromArray_setNeedsUpdate,ct.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];function x0(n,e,t,i){const r=aw(i);switch(t){case bv:return n*e;case Op:return n*e/r.components*r.byteLength;case kp:return n*e/r.components*r.byteLength;case uo:return n*e*2/r.components*r.byteLength;case Bp:return n*e*2/r.components*r.byteLength;case Av:return n*e*3/r.components*r.byteLength;case Bn:return n*e*4/r.components*r.byteLength;case zp:return n*e*4/r.components*r.byteLength;case lc:case cc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case uc:case dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Yf:case $f:return Math.max(n,16)*Math.max(e,8)/4;case Xf:case qf:return Math.max(n,8)*Math.max(e,8)/2;case Kf:case Zf:case Qf:case eh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Jf:case th:case nh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ih:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case rh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case sh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case oh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case ah:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case lh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ch:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case uh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case dh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case fh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case hh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case ph:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case mh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case gh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case xh:case _h:case vh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case yh:case Sh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Mh:case Eh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function aw(n){switch(n){case bn:case Mv:return{byteLength:1,components:1};case Na:case Ev:case Ki:return{byteLength:2,components:1};case Up:case Fp:return{byteLength:2,components:4};case Ei:case Dp:case kn:return{byteLength:4,components:1};case wv:case Tv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pp}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yv(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function lw(n){const e=new WeakMap;function t(a,l){const c=a.array,d=a.usage,f=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,d),a.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const d=l.array,f=l.updateRanges;if(n.bindBuffer(c,a),f.length===0)n.bufferSubData(c,0,d);else{f.sort((p,g)=>p.start-g.start);let u=0;for(let p=1;p<f.length;p++){const g=f[u],v=f[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,f[u]=v)}f.length=u+1;for(let p=0,g=f.length;p<g;p++){const v=f[p];n.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var cw=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uw=`#ifdef USE_ALPHAHASH
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
#endif`,dw=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fw=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hw=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pw=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mw=`#ifdef USE_AOMAP
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
#endif`,gw=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xw=`#ifdef USE_BATCHING
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
#endif`,_w=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vw=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yw=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sw=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Mw=`#ifdef USE_IRIDESCENCE
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
#endif`,Ew=`#ifdef USE_BUMPMAP
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
#endif`,ww=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Aw=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Cw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Iw=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Lw=`#define PI 3.141592653589793
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
} // validated`,Nw=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dw=`vec3 transformedNormal = objectNormal;
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
#endif`,Uw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ow=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kw=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bw="gl_FragColor = linearToOutputTexel( gl_FragColor );",zw=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vw=`#ifdef USE_ENVMAP
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
#endif`,Hw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gw=`#ifdef USE_ENVMAP
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
#endif`,Ww=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jw=`#ifdef USE_ENVMAP
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
#endif`,Xw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$w=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kw=`#ifdef USE_GRADIENTMAP
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
}`,Zw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eT=`uniform bool receiveShadow;
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
#endif`,tT=`#ifdef USE_ENVMAP
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
#endif`,nT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,iT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,oT=`PhysicalMaterial material;
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
#endif`,aT=`uniform sampler2D dfgLUT;
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
}`,lT=`
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
#endif`,cT=`#if defined( RE_IndirectDiffuse )
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
#endif`,uT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,fT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_T=`#if defined( USE_POINTS_UV )
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
#endif`,vT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ST=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,MT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ET=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wT=`#ifdef USE_MORPHTARGETS
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
#endif`,TT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,AT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,RT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,IT=`#ifdef USE_NORMALMAP
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
#endif`,LT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,NT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,DT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,UT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,kT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,BT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,HT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,GT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,XT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,YT=`float getShadowMask() {
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
}`,qT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$T=`#ifdef USE_SKINNING
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
#endif`,KT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ZT=`#ifdef USE_SKINNING
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
#endif`,JT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,QT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nb=`#ifdef USE_TRANSMISSION
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
#endif`,ib=`#ifdef USE_TRANSMISSION
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
#endif`,rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ob=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ab=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cb=`uniform sampler2D t2D;
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
}`,ub=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,db=`#ifdef ENVMAP_TYPE_CUBE
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
}`,fb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`#include <common>
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
}`,mb=`#if DEPTH_PACKING == 3200
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
}`,gb=`#define DISTANCE
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
}`,xb=`#define DISTANCE
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
}`,_b=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yb=`uniform float scale;
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
}`,Sb=`uniform vec3 diffuse;
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
}`,Mb=`#include <common>
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
}`,Eb=`uniform vec3 diffuse;
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
}`,wb=`#define LAMBERT
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
}`,Tb=`#define LAMBERT
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
}`,bb=`#define MATCAP
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
}`,Ab=`#define MATCAP
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
}`,Rb=`#define NORMAL
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
}`,Cb=`#define NORMAL
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
}`,Pb=`#define PHONG
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
}`,Ib=`#define PHONG
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
}`,Lb=`#define STANDARD
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
}`,Nb=`#define STANDARD
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
}`,Db=`#define TOON
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
}`,Ub=`#define TOON
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
}`,Fb=`uniform float size;
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
}`,Ob=`uniform vec3 diffuse;
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
}`,kb=`#include <common>
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
}`,Bb=`uniform vec3 color;
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
}`,zb=`uniform float rotation;
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
}`,Vb=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:cw,alphahash_pars_fragment:uw,alphamap_fragment:dw,alphamap_pars_fragment:fw,alphatest_fragment:hw,alphatest_pars_fragment:pw,aomap_fragment:mw,aomap_pars_fragment:gw,batching_pars_vertex:xw,batching_vertex:_w,begin_vertex:vw,beginnormal_vertex:yw,bsdfs:Sw,iridescence_fragment:Mw,bumpmap_pars_fragment:Ew,clipping_planes_fragment:ww,clipping_planes_pars_fragment:Tw,clipping_planes_pars_vertex:bw,clipping_planes_vertex:Aw,color_fragment:Rw,color_pars_fragment:Cw,color_pars_vertex:Pw,color_vertex:Iw,common:Lw,cube_uv_reflection_fragment:Nw,defaultnormal_vertex:Dw,displacementmap_pars_vertex:Uw,displacementmap_vertex:Fw,emissivemap_fragment:Ow,emissivemap_pars_fragment:kw,colorspace_fragment:Bw,colorspace_pars_fragment:zw,envmap_fragment:Vw,envmap_common_pars_fragment:Hw,envmap_pars_fragment:Gw,envmap_pars_vertex:Ww,envmap_physical_pars_fragment:tT,envmap_vertex:jw,fog_vertex:Xw,fog_pars_vertex:Yw,fog_fragment:qw,fog_pars_fragment:$w,gradientmap_pars_fragment:Kw,lightmap_pars_fragment:Zw,lights_lambert_fragment:Jw,lights_lambert_pars_fragment:Qw,lights_pars_begin:eT,lights_toon_fragment:nT,lights_toon_pars_fragment:iT,lights_phong_fragment:rT,lights_phong_pars_fragment:sT,lights_physical_fragment:oT,lights_physical_pars_fragment:aT,lights_fragment_begin:lT,lights_fragment_maps:cT,lights_fragment_end:uT,logdepthbuf_fragment:dT,logdepthbuf_pars_fragment:fT,logdepthbuf_pars_vertex:hT,logdepthbuf_vertex:pT,map_fragment:mT,map_pars_fragment:gT,map_particle_fragment:xT,map_particle_pars_fragment:_T,metalnessmap_fragment:vT,metalnessmap_pars_fragment:yT,morphinstance_vertex:ST,morphcolor_vertex:MT,morphnormal_vertex:ET,morphtarget_pars_vertex:wT,morphtarget_vertex:TT,normal_fragment_begin:bT,normal_fragment_maps:AT,normal_pars_fragment:RT,normal_pars_vertex:CT,normal_vertex:PT,normalmap_pars_fragment:IT,clearcoat_normal_fragment_begin:LT,clearcoat_normal_fragment_maps:NT,clearcoat_pars_fragment:DT,iridescence_pars_fragment:UT,opaque_fragment:FT,packing:OT,premultiplied_alpha_fragment:kT,project_vertex:BT,dithering_fragment:zT,dithering_pars_fragment:VT,roughnessmap_fragment:HT,roughnessmap_pars_fragment:GT,shadowmap_pars_fragment:WT,shadowmap_pars_vertex:jT,shadowmap_vertex:XT,shadowmask_pars_fragment:YT,skinbase_vertex:qT,skinning_pars_vertex:$T,skinning_vertex:KT,skinnormal_vertex:ZT,specularmap_fragment:JT,specularmap_pars_fragment:QT,tonemapping_fragment:eb,tonemapping_pars_fragment:tb,transmission_fragment:nb,transmission_pars_fragment:ib,uv_pars_fragment:rb,uv_pars_vertex:sb,uv_vertex:ob,worldpos_vertex:ab,background_vert:lb,background_frag:cb,backgroundCube_vert:ub,backgroundCube_frag:db,cube_vert:fb,cube_frag:hb,depth_vert:pb,depth_frag:mb,distance_vert:gb,distance_frag:xb,equirect_vert:_b,equirect_frag:vb,linedashed_vert:yb,linedashed_frag:Sb,meshbasic_vert:Mb,meshbasic_frag:Eb,meshlambert_vert:wb,meshlambert_frag:Tb,meshmatcap_vert:bb,meshmatcap_frag:Ab,meshnormal_vert:Rb,meshnormal_frag:Cb,meshphong_vert:Pb,meshphong_frag:Ib,meshphysical_vert:Lb,meshphysical_frag:Nb,meshtoon_vert:Db,meshtoon_frag:Ub,points_vert:Fb,points_frag:Ob,shadow_vert:kb,shadow_frag:Bb,sprite_vert:zb,sprite_frag:Vb},fe={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},mi={basic:{uniforms:un([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:un([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:un([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:un([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:un([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:un([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:un([fe.points,fe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:un([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:un([fe.common,fe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:un([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:un([fe.sprite,fe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:un([fe.common,fe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:un([fe.lights,fe.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};mi.physical={uniforms:un([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Gl={r:0,b:0,g:0},kr=new si,Hb=new $e;function Gb(n,e,t,i,r,s){const o=new Be(0);let a=r===!0?0:1,l,c,d=null,f=0,u=null;function p(m){let _=m.isScene===!0?m.background:null;if(_&&_.isTexture){const S=m.backgroundBlurriness>0;_=e.get(_,S)}return _}function g(m){let _=!1;const S=p(m);S===null?x(o,a):S&&S.isColor&&(x(S,1),_=!0);const w=n.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(n.autoClear||_)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(m,_){const S=p(_);S&&(S.isCubeTexture||S.mapping===hu)?(c===void 0&&(c=new Pt(new Mo(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:po(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),kr.copy(_.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Hb.makeRotationFromEuler(kr)),c.material.toneMapped=nt.getTransfer(S.colorSpace)!==at,(d!==S||f!==S.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,d=S,f=S.version,u=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Pt(new xu(2,2),new wi({name:"BackgroundMaterial",uniforms:po(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=nt.getTransfer(S.colorSpace)!==at,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(d!==S||f!==S.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,d=S,f=S.version,u=n.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,_){m.getRGB(Gl,Hv(n)),t.buffers.color.setClear(Gl.r,Gl.g,Gl.b,_,s)}function h(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),a=_,x(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(m){a=m,x(o,a)},render:g,addToRenderList:v,dispose:h}}function Wb(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null);let s=r,o=!1;function a(L,z,G,W,F){let I=!1;const N=f(L,W,G,z);s!==N&&(s=N,c(s.object)),I=p(L,W,G,F),I&&g(L,W,G,F),F!==null&&e.update(F,n.ELEMENT_ARRAY_BUFFER),(I||o)&&(o=!1,S(L,z,G,W),F!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function l(){return n.createVertexArray()}function c(L){return n.bindVertexArray(L)}function d(L){return n.deleteVertexArray(L)}function f(L,z,G,W){const F=W.wireframe===!0;let I=i[z.id];I===void 0&&(I={},i[z.id]=I);const N=L.isInstancedMesh===!0?L.id:0;let P=I[N];P===void 0&&(P={},I[N]=P);let O=P[G.id];O===void 0&&(O={},P[G.id]=O);let q=O[F];return q===void 0&&(q=u(l()),O[F]=q),q}function u(L){const z=[],G=[],W=[];for(let F=0;F<t;F++)z[F]=0,G[F]=0,W[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:G,attributeDivisors:W,object:L,attributes:{},index:null}}function p(L,z,G,W){const F=s.attributes,I=z.attributes;let N=0;const P=G.getAttributes();for(const O in P)if(P[O].location>=0){const K=F[O];let ee=I[O];if(ee===void 0&&(O==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),O==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor)),K===void 0||K.attribute!==ee||ee&&K.data!==ee.data)return!0;N++}return s.attributesNum!==N||s.index!==W}function g(L,z,G,W){const F={},I=z.attributes;let N=0;const P=G.getAttributes();for(const O in P)if(P[O].location>=0){let K=I[O];K===void 0&&(O==="instanceMatrix"&&L.instanceMatrix&&(K=L.instanceMatrix),O==="instanceColor"&&L.instanceColor&&(K=L.instanceColor));const ee={};ee.attribute=K,K&&K.data&&(ee.data=K.data),F[O]=ee,N++}s.attributes=F,s.attributesNum=N,s.index=W}function v(){const L=s.newAttributes;for(let z=0,G=L.length;z<G;z++)L[z]=0}function x(L){h(L,0)}function h(L,z){const G=s.newAttributes,W=s.enabledAttributes,F=s.attributeDivisors;G[L]=1,W[L]===0&&(n.enableVertexAttribArray(L),W[L]=1),F[L]!==z&&(n.vertexAttribDivisor(L,z),F[L]=z)}function m(){const L=s.newAttributes,z=s.enabledAttributes;for(let G=0,W=z.length;G<W;G++)z[G]!==L[G]&&(n.disableVertexAttribArray(G),z[G]=0)}function _(L,z,G,W,F,I,N){N===!0?n.vertexAttribIPointer(L,z,G,F,I):n.vertexAttribPointer(L,z,G,W,F,I)}function S(L,z,G,W){v();const F=W.attributes,I=G.getAttributes(),N=z.defaultAttributeValues;for(const P in I){const O=I[P];if(O.location>=0){let q=F[P];if(q===void 0&&(P==="instanceMatrix"&&L.instanceMatrix&&(q=L.instanceMatrix),P==="instanceColor"&&L.instanceColor&&(q=L.instanceColor)),q!==void 0){const K=q.normalized,ee=q.itemSize,Ne=e.get(q);if(Ne===void 0)continue;const ze=Ne.buffer,he=Ne.type,j=Ne.bytesPerElement,re=he===n.INT||he===n.UNSIGNED_INT||q.gpuType===Dp;if(q.isInterleavedBufferAttribute){const ne=q.data,ke=ne.stride,Ae=q.offset;if(ne.isInstancedInterleavedBuffer){for(let Ue=0;Ue<O.locationSize;Ue++)h(O.location+Ue,ne.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Ue=0;Ue<O.locationSize;Ue++)x(O.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let Ue=0;Ue<O.locationSize;Ue++)_(O.location+Ue,ee/O.locationSize,he,K,ke*j,(Ae+ee/O.locationSize*Ue)*j,re)}else{if(q.isInstancedBufferAttribute){for(let ne=0;ne<O.locationSize;ne++)h(O.location+ne,q.meshPerAttribute);L.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let ne=0;ne<O.locationSize;ne++)x(O.location+ne);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let ne=0;ne<O.locationSize;ne++)_(O.location+ne,ee/O.locationSize,he,K,ee*j,ee/O.locationSize*ne*j,re)}}else if(N!==void 0){const K=N[P];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(O.location,K);break;case 3:n.vertexAttrib3fv(O.location,K);break;case 4:n.vertexAttrib4fv(O.location,K);break;default:n.vertexAttrib1fv(O.location,K)}}}}m()}function w(){T();for(const L in i){const z=i[L];for(const G in z){const W=z[G];for(const F in W){const I=W[F];for(const N in I)d(I[N].object),delete I[N];delete W[F]}}delete i[L]}}function b(L){if(i[L.id]===void 0)return;const z=i[L.id];for(const G in z){const W=z[G];for(const F in W){const I=W[F];for(const N in I)d(I[N].object),delete I[N];delete W[F]}}delete i[L.id]}function R(L){for(const z in i){const G=i[z];for(const W in G){const F=G[W];if(F[L.id]===void 0)continue;const I=F[L.id];for(const N in I)d(I[N].object),delete I[N];delete F[L.id]}}}function y(L){for(const z in i){const G=i[z],W=L.isInstancedMesh===!0?L.id:0,F=G[W];if(F!==void 0){for(const I in F){const N=F[I];for(const P in N)d(N[P].object),delete N[P];delete F[I]}delete G[W],Object.keys(G).length===0&&delete i[z]}}}function T(){D(),o=!0,s!==r&&(s=r,c(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:T,resetDefaultState:D,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:y,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:x,disableUnusedAttributes:m}}function jb(n,e,t){let i;function r(c){i=c}function s(c,d){n.drawArrays(i,c,d),t.update(d,i,1)}function o(c,d,f){f!==0&&(n.drawArraysInstanced(i,c,d,f),t.update(d,i,f))}function a(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,f);let p=0;for(let g=0;g<f;g++)p+=d[g];t.update(p,i,1)}function l(c,d,f,u){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],d[g],u[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,d,0,u,0,f);let g=0;for(let v=0;v<f;v++)g+=d[v]*u[v];t.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Xb(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==Bn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const y=R===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==bn&&i.convert(R)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==kn&&!y)}function l(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(Le("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),x=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),w=n.getParameter(n.MAX_SAMPLES),b=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:u,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:x,maxAttributes:h,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:S,maxSamples:w,samples:b}}function Yb(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Gr,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){const p=f.length!==0||u||i!==0||r;return r=u,i=f.length,p},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,u){t=d(f,u,0)},this.setState=function(f,u,p){const g=f.clippingPlanes,v=f.clipIntersection,x=f.clipShadows,h=n.get(f);if(!r||g===null||g.length===0||s&&!x)s?d(null):c();else{const m=s?0:i,_=m*4;let S=h.clippingState||null;l.value=S,S=d(g,u,_,p);for(let w=0;w!==_;++w)S[w]=t[w];h.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=m}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(f,u,p,g){const v=f!==null?f.length:0;let x=null;if(v!==0){if(x=l.value,g!==!0||x===null){const h=p+v*4,m=u.matrixWorldInverse;a.getNormalMatrix(m),(x===null||x.length<h)&&(x=new Float32Array(h));for(let _=0,S=p;_!==v;++_,S+=4)o.copy(f[_]).applyMatrix4(m,a),o.normal.toArray(x,S),x[S+3]=o.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}const _r=4,_0=[.125,.215,.35,.446,.526,.582],Xr=20,qb=256,Xo=new vu,v0=new Be;let Ad=null,Rd=0,Cd=0,Pd=!1;const $b=new k;class qc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=$b}=s;Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=M0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=S0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ad,Rd,Cd),this._renderer.xr.enabled=Pd,e.scissorTest=!1,Ps(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ad=this._renderer.getRenderTarget(),Rd=this._renderer.getActiveCubeFace(),Cd=this._renderer.getActiveMipmapLevel(),Pd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:Ki,format:Bn,colorSpace:pn,depthBuffer:!1},r=y0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=y0(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Kb(s)),this._blurMaterial=Jb(s,e,t),this._ggxMaterial=Zb(s,e,t)}return r}_compileMaterial(e){const t=new Pt(new Mt,e);this._renderer.compile(t,Xo)}_sceneToCubeUV(e,t,i,r,s){const l=new Jt(90,1,t,i),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,u=f.autoClear,p=f.toneMapping;f.getClearColor(v0),f.toneMapping=Si,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Pt(new Mo,new ei({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const v=this._backgroundBox,x=v.material;let h=!1;const m=e.background;m?m.isColor&&(x.color.copy(m),e.background=null,h=!0):(x.color.copy(v0),h=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+d[_],s.y,s.z)):S===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+d[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+d[_]));const w=this._cubeSize;Ps(r,S*w,_>2?w:0,w,w),f.setRenderTarget(r),h&&f.render(v,l),f.render(e,l)}f.toneMapping=p,f.autoClear=u,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===rs||e.mapping===lo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=M0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=S0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ps(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Xo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-d*d),u=0+c*1.25,p=f*u,{_lodMax:g}=this,v=this._sizeLods[i],x=3*v*(i>g-_r?i-g+_r:0),h=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,Ps(s,x,h,3*v,2*v),r.setRenderTarget(s),r.render(a,Xo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Ps(e,x,h,3*v,2*v),r.setRenderTarget(e),r.render(a,Xo)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Oe("blur direction must be either latitudinal or longitudinal!");const d=3,f=this._lodMeshes[r];f.material=c;const u=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Xr-1),v=s/g,x=isFinite(s)?1+Math.floor(d*v):Xr;x>Xr&&Le(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Xr}`);const h=[];let m=0;for(let R=0;R<Xr;++R){const y=R/v,T=Math.exp(-y*y/2);h.push(T),R===0?m+=T:R<x&&(m+=2*T)}for(let R=0;R<h.length;R++)h[R]=h[R]/m;u.envMap.value=e.texture,u.samples.value=x,u.weights.value=h,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);const{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-i;const S=this._sizeLods[r],w=3*S*(r>_-_r?r-_+_r:0),b=4*(this._cubeSize-S);Ps(t,w,b,3*S,2*S),l.setRenderTarget(t),l.render(f,Xo)}}function Kb(n){const e=[],t=[],i=[];let r=n;const s=n-_r+1+_0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>n-_r?l=_0[o-n+_r-1]:o===0&&(l=0),t.push(l);const c=1/(a-2),d=-c,f=1+c,u=[d,d,f,d,f,f,d,d,f,f,d,f],p=6,g=6,v=3,x=2,h=1,m=new Float32Array(v*g*p),_=new Float32Array(x*g*p),S=new Float32Array(h*g*p);for(let b=0;b<p;b++){const R=b%3*2/3-1,y=b>2?0:-1,T=[R,y,0,R+2/3,y,0,R+2/3,y+1,0,R,y,0,R+2/3,y+1,0,R,y+1,0];m.set(T,v*g*b),_.set(u,x*g*b);const D=[b,b,b,b,b,b];S.set(D,h*g*b)}const w=new Mt;w.setAttribute("position",new Gt(m,v)),w.setAttribute("uv",new Gt(_,x)),w.setAttribute("faceIndex",new Gt(S,h)),i.push(new Pt(w,null)),r>_r&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function y0(n,e,t){const i=new Mi(n,e,t);return i.texture.mapping=hu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ps(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Zb(n,e,t){return new wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:qb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function Jb(n,e,t){const i=new Float32Array(Xr),r=new k(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function S0(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yu(),fragmentShader:`

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
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function M0(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gi,depthTest:!1,depthWrite:!1})}function yu(){return`

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
	`}class qv extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zv(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Mo(5,5,5),s=new wi({name:"CubemapFromEquirect",uniforms:po(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Gi});s.uniforms.tEquirect.value=t;const o=new Pt(r,s),a=t.minFilter;return t.minFilter===Bi&&(t.minFilter=Vt),new KE(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}function Qb(n){let e=new WeakMap,t=new WeakMap,i=null;function r(u,p=!1){return u==null?null:p?o(u):s(u)}function s(u){if(u&&u.isTexture){const p=u.mapping;if(p===oc||p===Zu)if(e.has(u)){const g=e.get(u).texture;return a(g,u.mapping)}else{const g=u.image;if(g&&g.height>0){const v=new qv(g.height);return v.fromEquirectangularTexture(n,u),e.set(u,v),u.addEventListener("dispose",c),a(v.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture){const p=u.mapping,g=p===oc||p===Zu,v=p===rs||p===lo;if(g||v){let x=t.get(u);const h=x!==void 0?x.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==h)return i===null&&(i=new qc(n)),x=g?i.fromEquirectangular(u,x):i.fromCubemap(u,x),x.texture.pmremVersion=u.pmremVersion,t.set(u,x),x.texture;if(x!==void 0)return x.texture;{const m=u.image;return g&&m&&m.height>0||v&&m&&l(m)?(i===null&&(i=new qc(n)),x=g?i.fromEquirectangular(u):i.fromCubemap(u),x.texture.pmremVersion=u.pmremVersion,t.set(u,x),u.addEventListener("dispose",d),x.texture):null}}}return u}function a(u,p){return p===oc?u.mapping=rs:p===Zu&&(u.mapping=lo),u}function l(u){let p=0;const g=6;for(let v=0;v<g;v++)u[v]!==void 0&&p++;return p===g}function c(u){const p=u.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function d(u){const p=u.target;p.removeEventListener("dispose",d);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function f(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:f}}function e2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&Hc("WebGLRenderer: "+i+" extension not supported."),r}}}function t2(n,e,t,i){const r={},s=new WeakMap;function o(f){const u=f.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",o),delete r[u.id];const p=s.get(u);p&&(e.remove(p),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function a(f,u){return r[u.id]===!0||(u.addEventListener("dispose",o),r[u.id]=!0,t.memory.geometries++),u}function l(f){const u=f.attributes;for(const p in u)e.update(u[p],n.ARRAY_BUFFER)}function c(f){const u=[],p=f.index,g=f.attributes.position;let v=0;if(g===void 0)return;if(p!==null){const m=p.array;v=p.version;for(let _=0,S=m.length;_<S;_+=3){const w=m[_+0],b=m[_+1],R=m[_+2];u.push(w,b,b,R,R,w)}}else{const m=g.array;v=g.version;for(let _=0,S=m.length/3-1;_<S;_+=3){const w=_+0,b=_+1,R=_+2;u.push(w,b,b,R,R,w)}}const x=new(g.count>=65535?Dv:Nv)(u,1);x.version=v;const h=s.get(f);h&&e.remove(h),s.set(f,x)}function d(f){const u=s.get(f);if(u){const p=f.index;p!==null&&u.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:d}}function n2(n,e,t){let i;function r(u){i=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,p){n.drawElements(i,p,s,u*o),t.update(p,i,1)}function c(u,p,g){g!==0&&(n.drawElementsInstanced(i,p,s,u*o,g),t.update(p,i,g))}function d(u,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,u,0,g);let x=0;for(let h=0;h<g;h++)x+=p[h];t.update(x,i,1)}function f(u,p,g,v){if(g===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let h=0;h<u.length;h++)c(u[h]/o,p[h],v[h]);else{x.multiDrawElementsInstancedWEBGL(i,p,0,s,u,0,v,0,g);let h=0;for(let m=0;m<g;m++)h+=p[m]*v[m];t.update(h,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function i2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Oe("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function r2(n,e,t){const i=new WeakMap,r=new xt;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let u=i.get(a);if(u===void 0||u.count!==f){let T=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],m=a.morphAttributes.color||[];let _=0;p===!0&&(_=1),g===!0&&(_=2),v===!0&&(_=3);let S=a.attributes.position.count*_,w=1;S>e.maxTextureSize&&(w=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const b=new Float32Array(S*w*4*f),R=new Pv(b,S,w,f);R.type=kn,R.needsUpdate=!0;const y=_*4;for(let D=0;D<f;D++){const L=x[D],z=h[D],G=m[D],W=S*w*4*D;for(let F=0;F<L.count;F++){const I=F*y;p===!0&&(r.fromBufferAttribute(L,F),b[W+I+0]=r.x,b[W+I+1]=r.y,b[W+I+2]=r.z,b[W+I+3]=0),g===!0&&(r.fromBufferAttribute(z,F),b[W+I+4]=r.x,b[W+I+5]=r.y,b[W+I+6]=r.z,b[W+I+7]=0),v===!0&&(r.fromBufferAttribute(G,F),b[W+I+8]=r.x,b[W+I+9]=r.y,b[W+I+10]=r.z,b[W+I+11]=G.itemSize===4?r.w:1)}}u={count:f,texture:R,size:new Ve(S,w)},i.set(a,u),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function s2(n,e,t,i,r){let s=new WeakMap;function o(c){const d=r.render.frame,f=c.geometry,u=e.get(c,f);if(s.get(u)!==d&&(e.update(u),s.set(u,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==d&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,d))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==d&&(p.update(),s.set(p,d))}return u}function a(){s=new WeakMap}function l(c){const d=c.target;d.removeEventListener("dispose",l),i.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:o,dispose:a}}const o2={[Lp]:"LINEAR_TONE_MAPPING",[mv]:"REINHARD_TONE_MAPPING",[gv]:"CINEON_TONE_MAPPING",[Np]:"ACES_FILMIC_TONE_MAPPING",[_v]:"AGX_TONE_MAPPING",[vv]:"NEUTRAL_TONE_MAPPING",[xv]:"CUSTOM_TONE_MAPPING"};function a2(n,e,t,i,r){const s=new Mi(e,t,{type:n,depthBuffer:i,stencilBuffer:r}),o=new Mi(e,t,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),a=new Mt;a.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ft([0,2,0,0,2,0],2));const l=new bE({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Pt(a,l),d=new vu(-1,1,1,-1,0,1);let f=null,u=null,p=!1,g,v=null,x=[],h=!1;this.setSize=function(m,_){s.setSize(m,_),o.setSize(m,_);for(let S=0;S<x.length;S++){const w=x[S];w.setSize&&w.setSize(m,_)}},this.setEffects=function(m){x=m,h=x.length>0&&x[0].isRenderPass===!0;const _=s.width,S=s.height;for(let w=0;w<x.length;w++){const b=x[w];b.setSize&&b.setSize(_,S)}},this.begin=function(m,_){if(p||m.toneMapping===Si&&x.length===0)return!1;if(v=_,_!==null){const S=_.width,w=_.height;(s.width!==S||s.height!==w)&&this.setSize(S,w)}return h===!1&&m.setRenderTarget(s),g=m.toneMapping,m.toneMapping=Si,!0},this.hasRenderPass=function(){return h},this.end=function(m,_){m.toneMapping=g,p=!0;let S=s,w=o;for(let b=0;b<x.length;b++){const R=x[b];if(R.enabled!==!1&&(R.render(m,w,S,_),R.needsSwap!==!1)){const y=S;S=w,w=y}}if(f!==m.outputColorSpace||u!==m.toneMapping){f=m.outputColorSpace,u=m.toneMapping,l.defines={},nt.getTransfer(f)===at&&(l.defines.SRGB_TRANSFER="");const b=o2[u];b&&(l.defines[b]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,m.setRenderTarget(v),m.render(c,d),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const $v=new Ht,Ch=new Ha(1,1),Kv=new Pv,Zv=new Q1,Jv=new zv,E0=[],w0=[],T0=new Float32Array(16),b0=new Float32Array(9),A0=new Float32Array(4);function Ao(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=E0[r];if(s===void 0&&(s=new Float32Array(r),E0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Wt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function jt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Su(n,e){let t=w0[e];t===void 0&&(t=new Int32Array(e),w0[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function l2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function c2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2fv(this.addr,e),jt(t,e)}}function u2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Wt(t,e))return;n.uniform3fv(this.addr,e),jt(t,e)}}function d2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4fv(this.addr,e),jt(t,e)}}function f2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Wt(t,i))return;A0.set(i),n.uniformMatrix2fv(this.addr,!1,A0),jt(t,i)}}function h2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Wt(t,i))return;b0.set(i),n.uniformMatrix3fv(this.addr,!1,b0),jt(t,i)}}function p2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Wt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Wt(t,i))return;T0.set(i),n.uniformMatrix4fv(this.addr,!1,T0),jt(t,i)}}function m2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function g2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2iv(this.addr,e),jt(t,e)}}function x2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3iv(this.addr,e),jt(t,e)}}function _2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4iv(this.addr,e),jt(t,e)}}function v2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function y2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Wt(t,e))return;n.uniform2uiv(this.addr,e),jt(t,e)}}function S2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Wt(t,e))return;n.uniform3uiv(this.addr,e),jt(t,e)}}function M2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Wt(t,e))return;n.uniform4uiv(this.addr,e),jt(t,e)}}function E2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Ch.compareFunction=t.isReversedDepthBuffer()?Gp:Hp,s=Ch):s=$v,t.setTexture2D(e||s,r)}function w2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Zv,r)}function T2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Jv,r)}function b2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Kv,r)}function A2(n){switch(n){case 5126:return l2;case 35664:return c2;case 35665:return u2;case 35666:return d2;case 35674:return f2;case 35675:return h2;case 35676:return p2;case 5124:case 35670:return m2;case 35667:case 35671:return g2;case 35668:case 35672:return x2;case 35669:case 35673:return _2;case 5125:return v2;case 36294:return y2;case 36295:return S2;case 36296:return M2;case 35678:case 36198:case 36298:case 36306:case 35682:return E2;case 35679:case 36299:case 36307:return w2;case 35680:case 36300:case 36308:case 36293:return T2;case 36289:case 36303:case 36311:case 36292:return b2}}function R2(n,e){n.uniform1fv(this.addr,e)}function C2(n,e){const t=Ao(e,this.size,2);n.uniform2fv(this.addr,t)}function P2(n,e){const t=Ao(e,this.size,3);n.uniform3fv(this.addr,t)}function I2(n,e){const t=Ao(e,this.size,4);n.uniform4fv(this.addr,t)}function L2(n,e){const t=Ao(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function N2(n,e){const t=Ao(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function D2(n,e){const t=Ao(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function U2(n,e){n.uniform1iv(this.addr,e)}function F2(n,e){n.uniform2iv(this.addr,e)}function O2(n,e){n.uniform3iv(this.addr,e)}function k2(n,e){n.uniform4iv(this.addr,e)}function B2(n,e){n.uniform1uiv(this.addr,e)}function z2(n,e){n.uniform2uiv(this.addr,e)}function V2(n,e){n.uniform3uiv(this.addr,e)}function H2(n,e){n.uniform4uiv(this.addr,e)}function G2(n,e,t){const i=this.cache,r=e.length,s=Su(t,r);Wt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));let o;this.type===n.SAMPLER_2D_SHADOW?o=Ch:o=$v;for(let a=0;a!==r;++a)t.setTexture2D(e[a]||o,s[a])}function W2(n,e,t){const i=this.cache,r=e.length,s=Su(t,r);Wt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Zv,s[o])}function j2(n,e,t){const i=this.cache,r=e.length,s=Su(t,r);Wt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Jv,s[o])}function X2(n,e,t){const i=this.cache,r=e.length,s=Su(t,r);Wt(i,s)||(n.uniform1iv(this.addr,s),jt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Kv,s[o])}function Y2(n){switch(n){case 5126:return R2;case 35664:return C2;case 35665:return P2;case 35666:return I2;case 35674:return L2;case 35675:return N2;case 35676:return D2;case 5124:case 35670:return U2;case 35667:case 35671:return F2;case 35668:case 35672:return O2;case 35669:case 35673:return k2;case 5125:return B2;case 36294:return z2;case 36295:return V2;case 36296:return H2;case 35678:case 36198:case 36298:case 36306:case 35682:return G2;case 35679:case 36299:case 36307:return W2;case 35680:case 36300:case 36308:case 36293:return j2;case 36289:case 36303:case 36311:case 36292:return X2}}class q2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=A2(t.type)}}class $2{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y2(t.type)}}class K2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Id=/(\w+)(\])?(\[|\.)?/g;function R0(n,e){n.seq.push(e),n.map[e.id]=e}function Z2(n,e,t){const i=n.name,r=i.length;for(Id.lastIndex=0;;){const s=Id.exec(i),o=Id.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){R0(t,c===void 0?new q2(a,n,e):new $2(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new K2(a),R0(t,f)),t=f}}}class fc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Z2(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function C0(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const J2=37297;let Q2=0;function eA(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const P0=new qe;function tA(n){nt._getMatrix(P0,nt.workingColorSpace,n);const e=`mat3( ${P0.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(n)){case zc:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function I0(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+eA(n.getShaderSource(e),a)}else return s}function nA(n,e){const t=tA(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const iA={[Lp]:"Linear",[mv]:"Reinhard",[gv]:"Cineon",[Np]:"ACESFilmic",[_v]:"AgX",[vv]:"Neutral",[xv]:"Custom"};function rA(n,e){const t=iA[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Wl=new k;function sA(){nt.getLuminanceCoefficients(Wl);const n=Wl.x.toFixed(4),e=Wl.y.toFixed(4),t=Wl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oA(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function aA(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lA(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function na(n){return n!==""}function L0(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function N0(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const cA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ph(n){return n.replace(cA,dA)}const uA=new Map;function dA(n,e){let t=Ke[e];if(t===void 0){const i=uA.get(e);if(i!==void 0)t=Ke[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Ph(t)}const fA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function D0(n){return n.replace(fA,hA)}function hA(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function U0(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const pA={[sc]:"SHADOWMAP_TYPE_PCF",[ea]:"SHADOWMAP_TYPE_VSM"};function mA(n){return pA[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const gA={[rs]:"ENVMAP_TYPE_CUBE",[lo]:"ENVMAP_TYPE_CUBE",[hu]:"ENVMAP_TYPE_CUBE_UV"};function xA(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":gA[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const _A={[lo]:"ENVMAP_MODE_REFRACTION"};function vA(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":_A[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yA={[Ip]:"ENVMAP_BLENDING_MULTIPLY",[h1]:"ENVMAP_BLENDING_MIX",[p1]:"ENVMAP_BLENDING_ADD"};function SA(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":yA[n.combine]||"ENVMAP_BLENDING_NONE"}function MA(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function EA(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=mA(t),c=xA(t),d=vA(t),f=SA(t),u=MA(t),p=oA(t),g=aA(s),v=r.createProgram();let x,h,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(na).join(`
`),x.length>0&&(x+=`
`),h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(na).join(`
`),h.length>0&&(h+=`
`)):(x=[U0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),h=[U0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Si?"#define TONE_MAPPING":"",t.toneMapping!==Si?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Si?rA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,nA("linearToOutputTexel",t.outputColorSpace),sA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),o=Ph(o),o=L0(o,t),o=N0(o,t),a=Ph(a),a=L0(a,t),a=N0(a,t),o=D0(o),a=D0(a),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,h=["#define varying in",t.glslVersion===Ig?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ig?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const _=m+x+o,S=m+h+a,w=C0(r,r.VERTEX_SHADER,_),b=C0(r,r.FRAGMENT_SHADER,S);r.attachShader(v,w),r.attachShader(v,b),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function R(L){if(n.debug.checkShaderErrors){const z=r.getProgramInfoLog(v)||"",G=r.getShaderInfoLog(w)||"",W=r.getShaderInfoLog(b)||"",F=z.trim(),I=G.trim(),N=W.trim();let P=!0,O=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(P=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,w,b);else{const q=I0(r,w,"vertex"),K=I0(r,b,"fragment");Oe("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+F+`
`+q+`
`+K)}else F!==""?Le("WebGLProgram: Program Info Log:",F):(I===""||N==="")&&(O=!1);O&&(L.diagnostics={runnable:P,programLog:F,vertexShader:{log:I,prefix:x},fragmentShader:{log:N,prefix:h}})}r.deleteShader(w),r.deleteShader(b),y=new fc(r,v),T=lA(r,v)}let y;this.getUniforms=function(){return y===void 0&&R(this),y};let T;this.getAttributes=function(){return T===void 0&&R(this),T};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=r.getProgramParameter(v,J2)),D},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Q2++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=b,this}let wA=0;class TA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new bA(e),t.set(e,i)),i}}class bA{constructor(e){this.id=wA++,this.code=e,this.usedTimes=0}}function AA(n,e,t,i,r,s){const o=new Iv,a=new TA,l=new Set,c=[],d=new Map,f=i.logarithmicDepthBuffer;let u=i.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return l.add(y),y===0?"uv":`uv${y}`}function v(y,T,D,L,z){const G=L.fog,W=z.geometry,F=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?L.environment:null,I=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap,N=e.get(y.envMap||F,I),P=N&&N.mapping===hu?N.image.height:null,O=p[y.type];y.precision!==null&&(u=i.getMaxPrecision(y.precision),u!==y.precision&&Le("WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const q=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,K=q!==void 0?q.length:0;let ee=0;W.morphAttributes.position!==void 0&&(ee=1),W.morphAttributes.normal!==void 0&&(ee=2),W.morphAttributes.color!==void 0&&(ee=3);let Ne,ze,he,j;if(O){const ot=mi[O];Ne=ot.vertexShader,ze=ot.fragmentShader}else Ne=y.vertexShader,ze=y.fragmentShader,a.update(y),he=a.getVertexShaderID(y),j=a.getFragmentShaderID(y);const re=n.getRenderTarget(),ne=n.state.buffers.depth.getReversed(),ke=z.isInstancedMesh===!0,Ae=z.isBatchedMesh===!0,Ue=!!y.map,_e=!!y.matcap,De=!!N,Ge=!!y.aoMap,Xe=!!y.lightMap,We=!!y.bumpMap,bt=!!y.normalMap,U=!!y.displacementMap,At=!!y.emissiveMap,it=!!y.metalnessMap,je=!!y.roughnessMap,ge=y.anisotropy>0,C=y.clearcoat>0,M=y.dispersion>0,V=y.iridescence>0,Q=y.sheen>0,te=y.transmission>0,Z=ge&&!!y.anisotropyMap,Se=C&&!!y.clearcoatMap,ue=C&&!!y.clearcoatNormalMap,Pe=C&&!!y.clearcoatRoughnessMap,Fe=V&&!!y.iridescenceMap,se=V&&!!y.iridescenceThicknessMap,le=Q&&!!y.sheenColorMap,Ee=Q&&!!y.sheenRoughnessMap,Te=!!y.specularMap,xe=!!y.specularColorMap,Ze=!!y.specularIntensityMap,B=te&&!!y.transmissionMap,de=te&&!!y.thicknessMap,ce=!!y.gradientMap,Me=!!y.alphaMap,ae=y.alphaTest>0,J=!!y.alphaHash,we=!!y.extensions;let He=Si;y.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(He=n.toneMapping);const pt={shaderID:O,shaderType:y.type,shaderName:y.name,vertexShader:Ne,fragmentShader:ze,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:j,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Ae,batchingColor:Ae&&z._colorsTexture!==null,instancing:ke,instancingColor:ke&&z.instanceColor!==null,instancingMorph:ke&&z.morphTexture!==null,outputColorSpace:re===null?n.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:pn,alphaToCoverage:!!y.alphaToCoverage,map:Ue,matcap:_e,envMap:De,envMapMode:De&&N.mapping,envMapCubeUVHeight:P,aoMap:Ge,lightMap:Xe,bumpMap:We,normalMap:bt,displacementMap:U,emissiveMap:At,normalMapObjectSpace:bt&&y.normalMapType===v1,normalMapTangentSpace:bt&&y.normalMapType===Vp,metalnessMap:it,roughnessMap:je,anisotropy:ge,anisotropyMap:Z,clearcoat:C,clearcoatMap:Se,clearcoatNormalMap:ue,clearcoatRoughnessMap:Pe,dispersion:M,iridescence:V,iridescenceMap:Fe,iridescenceThicknessMap:se,sheen:Q,sheenColorMap:le,sheenRoughnessMap:Ee,specularMap:Te,specularColorMap:xe,specularIntensityMap:Ze,transmission:te,transmissionMap:B,thicknessMap:de,gradientMap:ce,opaque:y.transparent===!1&&y.blending===Ks&&y.alphaToCoverage===!1,alphaMap:Me,alphaTest:ae,alphaHash:J,combine:y.combine,mapUv:Ue&&g(y.map.channel),aoMapUv:Ge&&g(y.aoMap.channel),lightMapUv:Xe&&g(y.lightMap.channel),bumpMapUv:We&&g(y.bumpMap.channel),normalMapUv:bt&&g(y.normalMap.channel),displacementMapUv:U&&g(y.displacementMap.channel),emissiveMapUv:At&&g(y.emissiveMap.channel),metalnessMapUv:it&&g(y.metalnessMap.channel),roughnessMapUv:je&&g(y.roughnessMap.channel),anisotropyMapUv:Z&&g(y.anisotropyMap.channel),clearcoatMapUv:Se&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ue&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Fe&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:se&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:le&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&g(y.sheenRoughnessMap.channel),specularMapUv:Te&&g(y.specularMap.channel),specularColorMapUv:xe&&g(y.specularColorMap.channel),specularIntensityMapUv:Ze&&g(y.specularIntensityMap.channel),transmissionMapUv:B&&g(y.transmissionMap.channel),thicknessMapUv:de&&g(y.thicknessMap.channel),alphaMapUv:Me&&g(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(bt||ge),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!W.attributes.uv&&(Ue||Me),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.wireframe===!1&&(y.flatShading===!0||W.attributes.normal===void 0&&bt===!1&&(y.isMeshLambertMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isMeshPhysicalMaterial)),sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ne,skinning:z.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ee,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:He,decodeVideoTexture:Ue&&y.map.isVideoTexture===!0&&nt.getTransfer(y.map.colorSpace)===at,decodeVideoTextureEmissive:At&&y.emissiveMap.isVideoTexture===!0&&nt.getTransfer(y.emissiveMap.colorSpace)===at,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Jn,flipSided:y.side===hn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:we&&y.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&y.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return pt.vertexUv1s=l.has(1),pt.vertexUv2s=l.has(2),pt.vertexUv3s=l.has(3),l.clear(),pt}function x(y){const T=[];if(y.shaderID?T.push(y.shaderID):(T.push(y.customVertexShaderID),T.push(y.customFragmentShaderID)),y.defines!==void 0)for(const D in y.defines)T.push(D),T.push(y.defines[D]);return y.isRawShaderMaterial===!1&&(h(T,y),m(T,y),T.push(n.outputColorSpace)),T.push(y.customProgramCacheKey),T.join()}function h(y,T){y.push(T.precision),y.push(T.outputColorSpace),y.push(T.envMapMode),y.push(T.envMapCubeUVHeight),y.push(T.mapUv),y.push(T.alphaMapUv),y.push(T.lightMapUv),y.push(T.aoMapUv),y.push(T.bumpMapUv),y.push(T.normalMapUv),y.push(T.displacementMapUv),y.push(T.emissiveMapUv),y.push(T.metalnessMapUv),y.push(T.roughnessMapUv),y.push(T.anisotropyMapUv),y.push(T.clearcoatMapUv),y.push(T.clearcoatNormalMapUv),y.push(T.clearcoatRoughnessMapUv),y.push(T.iridescenceMapUv),y.push(T.iridescenceThicknessMapUv),y.push(T.sheenColorMapUv),y.push(T.sheenRoughnessMapUv),y.push(T.specularMapUv),y.push(T.specularColorMapUv),y.push(T.specularIntensityMapUv),y.push(T.transmissionMapUv),y.push(T.thicknessMapUv),y.push(T.combine),y.push(T.fogExp2),y.push(T.sizeAttenuation),y.push(T.morphTargetsCount),y.push(T.morphAttributeCount),y.push(T.numDirLights),y.push(T.numPointLights),y.push(T.numSpotLights),y.push(T.numSpotLightMaps),y.push(T.numHemiLights),y.push(T.numRectAreaLights),y.push(T.numDirLightShadows),y.push(T.numPointLightShadows),y.push(T.numSpotLightShadows),y.push(T.numSpotLightShadowsWithMaps),y.push(T.numLightProbes),y.push(T.shadowMapType),y.push(T.toneMapping),y.push(T.numClippingPlanes),y.push(T.numClipIntersection),y.push(T.depthPacking)}function m(y,T){o.disableAll(),T.instancing&&o.enable(0),T.instancingColor&&o.enable(1),T.instancingMorph&&o.enable(2),T.matcap&&o.enable(3),T.envMap&&o.enable(4),T.normalMapObjectSpace&&o.enable(5),T.normalMapTangentSpace&&o.enable(6),T.clearcoat&&o.enable(7),T.iridescence&&o.enable(8),T.alphaTest&&o.enable(9),T.vertexColors&&o.enable(10),T.vertexAlphas&&o.enable(11),T.vertexUv1s&&o.enable(12),T.vertexUv2s&&o.enable(13),T.vertexUv3s&&o.enable(14),T.vertexTangents&&o.enable(15),T.anisotropy&&o.enable(16),T.alphaHash&&o.enable(17),T.batching&&o.enable(18),T.dispersion&&o.enable(19),T.batchingColor&&o.enable(20),T.gradientMap&&o.enable(21),y.push(o.mask),o.disableAll(),T.fog&&o.enable(0),T.useFog&&o.enable(1),T.flatShading&&o.enable(2),T.logarithmicDepthBuffer&&o.enable(3),T.reversedDepthBuffer&&o.enable(4),T.skinning&&o.enable(5),T.morphTargets&&o.enable(6),T.morphNormals&&o.enable(7),T.morphColors&&o.enable(8),T.premultipliedAlpha&&o.enable(9),T.shadowMapEnabled&&o.enable(10),T.doubleSided&&o.enable(11),T.flipSided&&o.enable(12),T.useDepthPacking&&o.enable(13),T.dithering&&o.enable(14),T.transmission&&o.enable(15),T.sheen&&o.enable(16),T.opaque&&o.enable(17),T.pointsUvs&&o.enable(18),T.decodeVideoTexture&&o.enable(19),T.decodeVideoTextureEmissive&&o.enable(20),T.alphaToCoverage&&o.enable(21),y.push(o.mask)}function _(y){const T=p[y.type];let D;if(T){const L=mi[T];D=EE.clone(L.uniforms)}else D=y.uniforms;return D}function S(y,T){let D=d.get(T);return D!==void 0?++D.usedTimes:(D=new EA(n,T,y,r),c.push(D),d.set(T,D)),D}function w(y){if(--y.usedTimes===0){const T=c.indexOf(y);c[T]=c[c.length-1],c.pop(),d.delete(y.cacheKey),y.destroy()}}function b(y){a.remove(y)}function R(){a.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:_,acquireProgram:S,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:R}}function RA(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,l){n.get(o)[a]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function CA(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function F0(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function O0(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function a(u,p,g,v,x,h){let m=n[e];return m===void 0?(m={id:u.id,object:u,geometry:p,material:g,materialVariant:o(u),groupOrder:v,renderOrder:u.renderOrder,z:x,group:h},n[e]=m):(m.id=u.id,m.object=u,m.geometry=p,m.material=g,m.materialVariant=o(u),m.groupOrder=v,m.renderOrder=u.renderOrder,m.z=x,m.group=h),e++,m}function l(u,p,g,v,x,h){const m=a(u,p,g,v,x,h);g.transmission>0?i.push(m):g.transparent===!0?r.push(m):t.push(m)}function c(u,p,g,v,x,h){const m=a(u,p,g,v,x,h);g.transmission>0?i.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function d(u,p){t.length>1&&t.sort(u||CA),i.length>1&&i.sort(p||F0),r.length>1&&r.sort(p||F0)}function f(){for(let u=e,p=n.length;u<p;u++){const g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:f,sort:d}}function PA(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new O0,n.set(i,[o])):r>=s.length?(o=new O0,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function IA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new k,color:new Be};break;case"SpotLight":t={position:new k,direction:new k,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new k,halfWidth:new k,halfHeight:new k};break}return n[e.id]=t,t}}}function LA(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let NA=0;function DA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function UA(n){const e=new IA,t=LA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new k);const r=new k,s=new $e,o=new $e;function a(c){let d=0,f=0,u=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,g=0,v=0,x=0,h=0,m=0,_=0,S=0,w=0,b=0,R=0;c.sort(DA);for(let T=0,D=c.length;T<D;T++){const L=c[T],z=L.color,G=L.intensity,W=L.distance;let F=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===uo?F=L.shadow.map.texture:F=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)d+=z.r*G,f+=z.g*G,u+=z.b*G;else if(L.isLightProbe){for(let I=0;I<9;I++)i.probe[I].addScaledVector(L.sh.coefficients[I],G);R++}else if(L.isDirectionalLight){const I=e.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const N=L.shadow,P=t.get(L);P.shadowIntensity=N.intensity,P.shadowBias=N.bias,P.shadowNormalBias=N.normalBias,P.shadowRadius=N.radius,P.shadowMapSize=N.mapSize,i.directionalShadow[p]=P,i.directionalShadowMap[p]=F,i.directionalShadowMatrix[p]=L.shadow.matrix,m++}i.directional[p]=I,p++}else if(L.isSpotLight){const I=e.get(L);I.position.setFromMatrixPosition(L.matrixWorld),I.color.copy(z).multiplyScalar(G),I.distance=W,I.coneCos=Math.cos(L.angle),I.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),I.decay=L.decay,i.spot[v]=I;const N=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,N.updateMatrices(L),L.castShadow&&b++),i.spotLightMatrix[v]=N.matrix,L.castShadow){const P=t.get(L);P.shadowIntensity=N.intensity,P.shadowBias=N.bias,P.shadowNormalBias=N.normalBias,P.shadowRadius=N.radius,P.shadowMapSize=N.mapSize,i.spotShadow[v]=P,i.spotShadowMap[v]=F,S++}v++}else if(L.isRectAreaLight){const I=e.get(L);I.color.copy(z).multiplyScalar(G),I.halfWidth.set(L.width*.5,0,0),I.halfHeight.set(0,L.height*.5,0),i.rectArea[x]=I,x++}else if(L.isPointLight){const I=e.get(L);if(I.color.copy(L.color).multiplyScalar(L.intensity),I.distance=L.distance,I.decay=L.decay,L.castShadow){const N=L.shadow,P=t.get(L);P.shadowIntensity=N.intensity,P.shadowBias=N.bias,P.shadowNormalBias=N.normalBias,P.shadowRadius=N.radius,P.shadowMapSize=N.mapSize,P.shadowCameraNear=N.camera.near,P.shadowCameraFar=N.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=F,i.pointShadowMatrix[g]=L.shadow.matrix,_++}i.point[g]=I,g++}else if(L.isHemisphereLight){const I=e.get(L);I.skyColor.copy(L.color).multiplyScalar(G),I.groundColor.copy(L.groundColor).multiplyScalar(G),i.hemi[h]=I,h++}}x>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=f,i.ambient[2]=u;const y=i.hash;(y.directionalLength!==p||y.pointLength!==g||y.spotLength!==v||y.rectAreaLength!==x||y.hemiLength!==h||y.numDirectionalShadows!==m||y.numPointShadows!==_||y.numSpotShadows!==S||y.numSpotMaps!==w||y.numLightProbes!==R)&&(i.directional.length=p,i.spot.length=v,i.rectArea.length=x,i.point.length=g,i.hemi.length=h,i.directionalShadow.length=m,i.directionalShadowMap.length=m,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=m,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+w-b,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=R,y.directionalLength=p,y.pointLength=g,y.spotLength=v,y.rectAreaLength=x,y.hemiLength=h,y.numDirectionalShadows=m,y.numPointShadows=_,y.numSpotShadows=S,y.numSpotMaps=w,y.numLightProbes=R,i.version=NA++)}function l(c,d){let f=0,u=0,p=0,g=0,v=0;const x=d.matrixWorldInverse;for(let h=0,m=c.length;h<m;h++){const _=c[h];if(_.isDirectionalLight){const S=i.directional[f];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),f++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(x),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(x),p++}else if(_.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(x),o.identity(),s.copy(_.matrixWorld),s.premultiply(x),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const S=i.point[u];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(x),u++}else if(_.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(x),v++}}}return{setup:a,setupView:l,state:i}}function k0(n){const e=new UA(n),t=[],i=[];function r(d){c.camera=d,t.length=0,i.length=0}function s(d){t.push(d)}function o(d){i.push(d)}function a(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function FA(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new k0(n),e.set(r,[a])):s>=o.length?(a=new k0(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const OA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kA=`uniform sampler2D shadow_pass;
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
}`,BA=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],zA=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],B0=new $e,Yo=new k,Ld=new k;function VA(n,e,t){let i=new qp;const r=new Ve,s=new Ve,o=new xt,a=new RE,l=new CE,c={},d=t.maxTextureSize,f={[$i]:hn,[hn]:$i,[Jn]:Jn},u=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:OA,fragmentShader:kA}),p=u.clone();p.defines.HORIZONTAL_PASS=1;const g=new Mt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Pt(g,u),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let h=this.type;this.render=function(b,R,y){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||b.length===0)return;this.type===pv&&(Le("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=sc);const T=n.getRenderTarget(),D=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Gi),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=h!==this.type;G&&R.traverse(function(W){W.material&&(Array.isArray(W.material)?W.material.forEach(F=>F.needsUpdate=!0):W.material.needsUpdate=!0)});for(let W=0,F=b.length;W<F;W++){const I=b[W],N=I.shadow;if(N===void 0){Le("WebGLShadowMap:",I,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const P=N.getFrameExtents();r.multiply(P),s.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/P.x),r.x=s.x*P.x,N.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/P.y),r.y=s.y*P.y,N.mapSize.y=s.y));const O=n.state.buffers.depth.getReversed();if(N.camera._reversedDepth=O,N.map===null||G===!0){if(N.map!==null&&(N.map.depthTexture!==null&&(N.map.depthTexture.dispose(),N.map.depthTexture=null),N.map.dispose()),this.type===ea){if(I.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}N.map=new Mi(r.x,r.y,{format:uo,type:Ki,minFilter:Vt,magFilter:Vt,generateMipmaps:!1}),N.map.texture.name=I.name+".shadowMap",N.map.depthTexture=new Ha(r.x,r.y,kn),N.map.depthTexture.name=I.name+".shadowMapDepth",N.map.depthTexture.format=Zi,N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=zt,N.map.depthTexture.magFilter=zt}else I.isPointLight?(N.map=new qv(r.x),N.map.depthTexture=new SE(r.x,Ei)):(N.map=new Mi(r.x,r.y),N.map.depthTexture=new Ha(r.x,r.y,Ei)),N.map.depthTexture.name=I.name+".shadowMap",N.map.depthTexture.format=Zi,this.type===sc?(N.map.depthTexture.compareFunction=O?Gp:Hp,N.map.depthTexture.minFilter=Vt,N.map.depthTexture.magFilter=Vt):(N.map.depthTexture.compareFunction=null,N.map.depthTexture.minFilter=zt,N.map.depthTexture.magFilter=zt);N.camera.updateProjectionMatrix()}const q=N.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<q;K++){if(N.map.isWebGLCubeRenderTarget)n.setRenderTarget(N.map,K),n.clear();else{K===0&&(n.setRenderTarget(N.map),n.clear());const ee=N.getViewport(K);o.set(s.x*ee.x,s.y*ee.y,s.x*ee.z,s.y*ee.w),z.viewport(o)}if(I.isPointLight){const ee=N.camera,Ne=N.matrix,ze=I.distance||ee.far;ze!==ee.far&&(ee.far=ze,ee.updateProjectionMatrix()),Yo.setFromMatrixPosition(I.matrixWorld),ee.position.copy(Yo),Ld.copy(ee.position),Ld.add(BA[K]),ee.up.copy(zA[K]),ee.lookAt(Ld),ee.updateMatrixWorld(),Ne.makeTranslation(-Yo.x,-Yo.y,-Yo.z),B0.multiplyMatrices(ee.projectionMatrix,ee.matrixWorldInverse),N._frustum.setFromProjectionMatrix(B0,ee.coordinateSystem,ee.reversedDepth)}else N.updateMatrices(I);i=N.getFrustum(),S(R,y,N.camera,I,this.type)}N.isPointLightShadow!==!0&&this.type===ea&&m(N,y),N.needsUpdate=!1}h=this.type,x.needsUpdate=!1,n.setRenderTarget(T,D,L)};function m(b,R){const y=e.update(v);u.defines.VSM_SAMPLES!==b.blurSamples&&(u.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Mi(r.x,r.y,{format:uo,type:Ki})),u.uniforms.shadow_pass.value=b.map.depthTexture,u.uniforms.resolution.value=b.mapSize,u.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(R,null,y,u,v,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(R,null,y,p,v,null)}function _(b,R,y,T){let D=null;const L=y.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)D=L;else if(D=y.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=D.uuid,G=R.uuid;let W=c[z];W===void 0&&(W={},c[z]=W);let F=W[G];F===void 0&&(F=D.clone(),W[G]=F,R.addEventListener("dispose",w)),D=F}if(D.visible=R.visible,D.wireframe=R.wireframe,T===ea?D.side=R.shadowSide!==null?R.shadowSide:R.side:D.side=R.shadowSide!==null?R.shadowSide:f[R.side],D.alphaMap=R.alphaMap,D.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,D.map=R.map,D.clipShadows=R.clipShadows,D.clippingPlanes=R.clippingPlanes,D.clipIntersection=R.clipIntersection,D.displacementMap=R.displacementMap,D.displacementScale=R.displacementScale,D.displacementBias=R.displacementBias,D.wireframeLinewidth=R.wireframeLinewidth,D.linewidth=R.linewidth,y.isPointLight===!0&&D.isMeshDistanceMaterial===!0){const z=n.properties.get(D);z.light=y}return D}function S(b,R,y,T,D){if(b.visible===!1)return;if(b.layers.test(R.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&D===ea)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(y.matrixWorldInverse,b.matrixWorld);const G=e.update(b),W=b.material;if(Array.isArray(W)){const F=G.groups;for(let I=0,N=F.length;I<N;I++){const P=F[I],O=W[P.materialIndex];if(O&&O.visible){const q=_(b,O,T,D);b.onBeforeShadow(n,b,R,y,G,q,P),n.renderBufferDirect(y,null,G,q,b,P),b.onAfterShadow(n,b,R,y,G,q,P)}}}else if(W.visible){const F=_(b,W,T,D);b.onBeforeShadow(n,b,R,y,G,F,null),n.renderBufferDirect(y,null,G,F,b,null),b.onAfterShadow(n,b,R,y,G,F,null)}}const z=b.children;for(let G=0,W=z.length;G<W;G++)S(z[G],R,y,T,D)}function w(b){b.target.removeEventListener("dispose",w);for(const y in c){const T=c[y],D=b.target.uuid;D in T&&(T[D].dispose(),delete T[D])}}}function HA(n,e){function t(){let B=!1;const de=new xt;let ce=null;const Me=new xt(0,0,0,0);return{setMask:function(ae){ce!==ae&&!B&&(n.colorMask(ae,ae,ae,ae),ce=ae)},setLocked:function(ae){B=ae},setClear:function(ae,J,we,He,pt){pt===!0&&(ae*=He,J*=He,we*=He),de.set(ae,J,we,He),Me.equals(de)===!1&&(n.clearColor(ae,J,we,He),Me.copy(de))},reset:function(){B=!1,ce=null,Me.set(-1,0,0,0)}}}function i(){let B=!1,de=!1,ce=null,Me=null,ae=null;return{setReversed:function(J){if(de!==J){const we=e.get("EXT_clip_control");J?we.clipControlEXT(we.LOWER_LEFT_EXT,we.ZERO_TO_ONE_EXT):we.clipControlEXT(we.LOWER_LEFT_EXT,we.NEGATIVE_ONE_TO_ONE_EXT),de=J;const He=ae;ae=null,this.setClear(He)}},getReversed:function(){return de},setTest:function(J){J?re(n.DEPTH_TEST):ne(n.DEPTH_TEST)},setMask:function(J){ce!==J&&!B&&(n.depthMask(J),ce=J)},setFunc:function(J){if(de&&(J=P1[J]),Me!==J){switch(J){case Bf:n.depthFunc(n.NEVER);break;case zf:n.depthFunc(n.ALWAYS);break;case Vf:n.depthFunc(n.LESS);break;case ao:n.depthFunc(n.LEQUAL);break;case Hf:n.depthFunc(n.EQUAL);break;case Gf:n.depthFunc(n.GEQUAL);break;case Wf:n.depthFunc(n.GREATER);break;case jf:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Me=J}},setLocked:function(J){B=J},setClear:function(J){ae!==J&&(ae=J,de&&(J=1-J),n.clearDepth(J))},reset:function(){B=!1,ce=null,Me=null,ae=null,de=!1}}}function r(){let B=!1,de=null,ce=null,Me=null,ae=null,J=null,we=null,He=null,pt=null;return{setTest:function(ot){B||(ot?re(n.STENCIL_TEST):ne(n.STENCIL_TEST))},setMask:function(ot){de!==ot&&!B&&(n.stencilMask(ot),de=ot)},setFunc:function(ot,Ai,Ri){(ce!==ot||Me!==Ai||ae!==Ri)&&(n.stencilFunc(ot,Ai,Ri),ce=ot,Me=Ai,ae=Ri)},setOp:function(ot,Ai,Ri){(J!==ot||we!==Ai||He!==Ri)&&(n.stencilOp(ot,Ai,Ri),J=ot,we=Ai,He=Ri)},setLocked:function(ot){B=ot},setClear:function(ot){pt!==ot&&(n.clearStencil(ot),pt=ot)},reset:function(){B=!1,de=null,ce=null,Me=null,ae=null,J=null,we=null,He=null,pt=null}}}const s=new t,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let d={},f={},u=new WeakMap,p=[],g=null,v=!1,x=null,h=null,m=null,_=null,S=null,w=null,b=null,R=new Be(0,0,0),y=0,T=!1,D=null,L=null,z=null,G=null,W=null;const F=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,N=0;const P=n.getParameter(n.VERSION);P.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(P)[1]),I=N>=1):P.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),I=N>=2);let O=null,q={};const K=n.getParameter(n.SCISSOR_BOX),ee=n.getParameter(n.VIEWPORT),Ne=new xt().fromArray(K),ze=new xt().fromArray(ee);function he(B,de,ce,Me){const ae=new Uint8Array(4),J=n.createTexture();n.bindTexture(B,J),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let we=0;we<ce;we++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(de,0,n.RGBA,1,1,Me,0,n.RGBA,n.UNSIGNED_BYTE,ae):n.texImage2D(de+we,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ae);return J}const j={};j[n.TEXTURE_2D]=he(n.TEXTURE_2D,n.TEXTURE_2D,1),j[n.TEXTURE_CUBE_MAP]=he(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[n.TEXTURE_2D_ARRAY]=he(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),j[n.TEXTURE_3D]=he(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(n.DEPTH_TEST),o.setFunc(ao),We(!1),bt(Mg),re(n.CULL_FACE),Ge(Gi);function re(B){d[B]!==!0&&(n.enable(B),d[B]=!0)}function ne(B){d[B]!==!1&&(n.disable(B),d[B]=!1)}function ke(B,de){return f[B]!==de?(n.bindFramebuffer(B,de),f[B]=de,B===n.DRAW_FRAMEBUFFER&&(f[n.FRAMEBUFFER]=de),B===n.FRAMEBUFFER&&(f[n.DRAW_FRAMEBUFFER]=de),!0):!1}function Ae(B,de){let ce=p,Me=!1;if(B){ce=u.get(de),ce===void 0&&(ce=[],u.set(de,ce));const ae=B.textures;if(ce.length!==ae.length||ce[0]!==n.COLOR_ATTACHMENT0){for(let J=0,we=ae.length;J<we;J++)ce[J]=n.COLOR_ATTACHMENT0+J;ce.length=ae.length,Me=!0}}else ce[0]!==n.BACK&&(ce[0]=n.BACK,Me=!0);Me&&n.drawBuffers(ce)}function Ue(B){return g!==B?(n.useProgram(B),g=B,!0):!1}const _e={[Wr]:n.FUNC_ADD,[KM]:n.FUNC_SUBTRACT,[ZM]:n.FUNC_REVERSE_SUBTRACT};_e[JM]=n.MIN,_e[QM]=n.MAX;const De={[e1]:n.ZERO,[t1]:n.ONE,[n1]:n.SRC_COLOR,[Of]:n.SRC_ALPHA,[l1]:n.SRC_ALPHA_SATURATE,[o1]:n.DST_COLOR,[r1]:n.DST_ALPHA,[i1]:n.ONE_MINUS_SRC_COLOR,[kf]:n.ONE_MINUS_SRC_ALPHA,[a1]:n.ONE_MINUS_DST_COLOR,[s1]:n.ONE_MINUS_DST_ALPHA,[c1]:n.CONSTANT_COLOR,[u1]:n.ONE_MINUS_CONSTANT_COLOR,[d1]:n.CONSTANT_ALPHA,[f1]:n.ONE_MINUS_CONSTANT_ALPHA};function Ge(B,de,ce,Me,ae,J,we,He,pt,ot){if(B===Gi){v===!0&&(ne(n.BLEND),v=!1);return}if(v===!1&&(re(n.BLEND),v=!0),B!==$M){if(B!==x||ot!==T){if((h!==Wr||S!==Wr)&&(n.blendEquation(n.FUNC_ADD),h=Wr,S=Wr),ot)switch(B){case Ks:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ff:n.blendFunc(n.ONE,n.ONE);break;case Eg:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wg:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Oe("WebGLState: Invalid blending: ",B);break}else switch(B){case Ks:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ff:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Eg:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wg:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",B);break}m=null,_=null,w=null,b=null,R.set(0,0,0),y=0,x=B,T=ot}return}ae=ae||de,J=J||ce,we=we||Me,(de!==h||ae!==S)&&(n.blendEquationSeparate(_e[de],_e[ae]),h=de,S=ae),(ce!==m||Me!==_||J!==w||we!==b)&&(n.blendFuncSeparate(De[ce],De[Me],De[J],De[we]),m=ce,_=Me,w=J,b=we),(He.equals(R)===!1||pt!==y)&&(n.blendColor(He.r,He.g,He.b,pt),R.copy(He),y=pt),x=B,T=!1}function Xe(B,de){B.side===Jn?ne(n.CULL_FACE):re(n.CULL_FACE);let ce=B.side===hn;de&&(ce=!ce),We(ce),B.blending===Ks&&B.transparent===!1?Ge(Gi):Ge(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),o.setFunc(B.depthFunc),o.setTest(B.depthTest),o.setMask(B.depthWrite),s.setMask(B.colorWrite);const Me=B.stencilWrite;a.setTest(Me),Me&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),At(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?re(n.SAMPLE_ALPHA_TO_COVERAGE):ne(n.SAMPLE_ALPHA_TO_COVERAGE)}function We(B){D!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),D=B)}function bt(B){B!==YM?(re(n.CULL_FACE),B!==L&&(B===Mg?n.cullFace(n.BACK):B===qM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ne(n.CULL_FACE),L=B}function U(B){B!==z&&(I&&n.lineWidth(B),z=B)}function At(B,de,ce){B?(re(n.POLYGON_OFFSET_FILL),(G!==de||W!==ce)&&(G=de,W=ce,o.getReversed()&&(de=-de),n.polygonOffset(de,ce))):ne(n.POLYGON_OFFSET_FILL)}function it(B){B?re(n.SCISSOR_TEST):ne(n.SCISSOR_TEST)}function je(B){B===void 0&&(B=n.TEXTURE0+F-1),O!==B&&(n.activeTexture(B),O=B)}function ge(B,de,ce){ce===void 0&&(O===null?ce=n.TEXTURE0+F-1:ce=O);let Me=q[ce];Me===void 0&&(Me={type:void 0,texture:void 0},q[ce]=Me),(Me.type!==B||Me.texture!==de)&&(O!==ce&&(n.activeTexture(ce),O=ce),n.bindTexture(B,de||j[B]),Me.type=B,Me.texture=de)}function C(){const B=q[O];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function M(){try{n.compressedTexImage2D(...arguments)}catch(B){Oe("WebGLState:",B)}}function V(){try{n.compressedTexImage3D(...arguments)}catch(B){Oe("WebGLState:",B)}}function Q(){try{n.texSubImage2D(...arguments)}catch(B){Oe("WebGLState:",B)}}function te(){try{n.texSubImage3D(...arguments)}catch(B){Oe("WebGLState:",B)}}function Z(){try{n.compressedTexSubImage2D(...arguments)}catch(B){Oe("WebGLState:",B)}}function Se(){try{n.compressedTexSubImage3D(...arguments)}catch(B){Oe("WebGLState:",B)}}function ue(){try{n.texStorage2D(...arguments)}catch(B){Oe("WebGLState:",B)}}function Pe(){try{n.texStorage3D(...arguments)}catch(B){Oe("WebGLState:",B)}}function Fe(){try{n.texImage2D(...arguments)}catch(B){Oe("WebGLState:",B)}}function se(){try{n.texImage3D(...arguments)}catch(B){Oe("WebGLState:",B)}}function le(B){Ne.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),Ne.copy(B))}function Ee(B){ze.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),ze.copy(B))}function Te(B,de){let ce=c.get(de);ce===void 0&&(ce=new WeakMap,c.set(de,ce));let Me=ce.get(B);Me===void 0&&(Me=n.getUniformBlockIndex(de,B.name),ce.set(B,Me))}function xe(B,de){const Me=c.get(de).get(B);l.get(de)!==Me&&(n.uniformBlockBinding(de,Me,B.__bindingPointIndex),l.set(de,Me))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},O=null,q={},f={},u=new WeakMap,p=[],g=null,v=!1,x=null,h=null,m=null,_=null,S=null,w=null,b=null,R=new Be(0,0,0),y=0,T=!1,D=null,L=null,z=null,G=null,W=null,Ne.set(0,0,n.canvas.width,n.canvas.height),ze.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:ne,bindFramebuffer:ke,drawBuffers:Ae,useProgram:Ue,setBlending:Ge,setMaterial:Xe,setFlipSided:We,setCullFace:bt,setLineWidth:U,setPolygonOffset:At,setScissorTest:it,activeTexture:je,bindTexture:ge,unbindTexture:C,compressedTexImage2D:M,compressedTexImage3D:V,texImage2D:Fe,texImage3D:se,updateUBOMapping:Te,uniformBlockBinding:xe,texStorage2D:ue,texStorage3D:Pe,texSubImage2D:Q,texSubImage3D:te,compressedTexSubImage2D:Z,compressedTexSubImage3D:Se,scissor:le,viewport:Ee,reset:Ze}}function GA(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ve,d=new WeakMap;let f;const u=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return p?new OffscreenCanvas(C,M):ka("canvas")}function v(C,M,V){let Q=1;const te=ge(C);if((te.width>V||te.height>V)&&(Q=V/Math.max(te.width,te.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(Q*te.width),Se=Math.floor(Q*te.height);f===void 0&&(f=g(Z,Se));const ue=M?g(Z,Se):f;return ue.width=Z,ue.height=Se,ue.getContext("2d").drawImage(C,0,0,Z,Se),Le("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+Se+")."),ue}else return"data"in C&&Le("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),C;return C}function x(C){return C.generateMipmaps}function h(C){n.generateMipmap(C)}function m(C){return C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?n.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(C,M,V,Q,te=!1){if(C!==null){if(n[C]!==void 0)return n[C];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=M;if(M===n.RED&&(V===n.FLOAT&&(Z=n.R32F),V===n.HALF_FLOAT&&(Z=n.R16F),V===n.UNSIGNED_BYTE&&(Z=n.R8)),M===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.R8UI),V===n.UNSIGNED_SHORT&&(Z=n.R16UI),V===n.UNSIGNED_INT&&(Z=n.R32UI),V===n.BYTE&&(Z=n.R8I),V===n.SHORT&&(Z=n.R16I),V===n.INT&&(Z=n.R32I)),M===n.RG&&(V===n.FLOAT&&(Z=n.RG32F),V===n.HALF_FLOAT&&(Z=n.RG16F),V===n.UNSIGNED_BYTE&&(Z=n.RG8)),M===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.RG8UI),V===n.UNSIGNED_SHORT&&(Z=n.RG16UI),V===n.UNSIGNED_INT&&(Z=n.RG32UI),V===n.BYTE&&(Z=n.RG8I),V===n.SHORT&&(Z=n.RG16I),V===n.INT&&(Z=n.RG32I)),M===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),V===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),V===n.UNSIGNED_INT&&(Z=n.RGB32UI),V===n.BYTE&&(Z=n.RGB8I),V===n.SHORT&&(Z=n.RGB16I),V===n.INT&&(Z=n.RGB32I)),M===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),V===n.UNSIGNED_INT&&(Z=n.RGBA32UI),V===n.BYTE&&(Z=n.RGBA8I),V===n.SHORT&&(Z=n.RGBA16I),V===n.INT&&(Z=n.RGBA32I)),M===n.RGB&&(V===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(Z=n.R11F_G11F_B10F)),M===n.RGBA){const Se=te?zc:nt.getTransfer(Q);V===n.FLOAT&&(Z=n.RGBA32F),V===n.HALF_FLOAT&&(Z=n.RGBA16F),V===n.UNSIGNED_BYTE&&(Z=Se===at?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(C,M){let V;return C?M===null||M===Ei||M===Da?V=n.DEPTH24_STENCIL8:M===kn?V=n.DEPTH32F_STENCIL8:M===Na&&(V=n.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ei||M===Da?V=n.DEPTH_COMPONENT24:M===kn?V=n.DEPTH_COMPONENT32F:M===Na&&(V=n.DEPTH_COMPONENT16),V}function w(C,M){return x(C)===!0||C.isFramebufferTexture&&C.minFilter!==zt&&C.minFilter!==Vt?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function b(C){const M=C.target;M.removeEventListener("dispose",b),y(M),M.isVideoTexture&&d.delete(M)}function R(C){const M=C.target;M.removeEventListener("dispose",R),D(M)}function y(C){const M=i.get(C);if(M.__webglInit===void 0)return;const V=C.source,Q=u.get(V);if(Q){const te=Q[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&T(C),Object.keys(Q).length===0&&u.delete(V)}i.remove(C)}function T(C){const M=i.get(C);n.deleteTexture(M.__webglTexture);const V=C.source,Q=u.get(V);delete Q[M.__cacheKey],o.memory.textures--}function D(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(M.__webglFramebuffer[Q]))for(let te=0;te<M.__webglFramebuffer[Q].length;te++)n.deleteFramebuffer(M.__webglFramebuffer[Q][te]);else n.deleteFramebuffer(M.__webglFramebuffer[Q]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[Q])}else{if(Array.isArray(M.__webglFramebuffer))for(let Q=0;Q<M.__webglFramebuffer.length;Q++)n.deleteFramebuffer(M.__webglFramebuffer[Q]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Q=0;Q<M.__webglColorRenderbuffer.length;Q++)M.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[Q]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=C.textures;for(let Q=0,te=V.length;Q<te;Q++){const Z=i.get(V[Q]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(V[Q])}i.remove(C)}let L=0;function z(){L=0}function G(){const C=L;return C>=r.maxTextures&&Le("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),L+=1,C}function W(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function F(C,M){const V=i.get(C);if(C.isVideoTexture&&it(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&V.__version!==C.version){const Q=C.image;if(Q===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{j(V,C,M);return}}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+M)}function I(C,M){const V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){j(V,C,M);return}else C.isExternalTexture&&(V.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+M)}function N(C,M){const V=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&V.__version!==C.version){j(V,C,M);return}t.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+M)}function P(C,M){const V=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&V.__version!==C.version){re(V,C,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+M)}const O={[co]:n.REPEAT,[xi]:n.CLAMP_TO_EDGE,[Bc]:n.MIRRORED_REPEAT},q={[zt]:n.NEAREST,[Sv]:n.NEAREST_MIPMAP_NEAREST,[ta]:n.NEAREST_MIPMAP_LINEAR,[Vt]:n.LINEAR,[ac]:n.LINEAR_MIPMAP_NEAREST,[Bi]:n.LINEAR_MIPMAP_LINEAR},K={[y1]:n.NEVER,[T1]:n.ALWAYS,[S1]:n.LESS,[Hp]:n.LEQUAL,[M1]:n.EQUAL,[Gp]:n.GEQUAL,[E1]:n.GREATER,[w1]:n.NOTEQUAL};function ee(C,M){if(M.type===kn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Vt||M.magFilter===ac||M.magFilter===ta||M.magFilter===Bi||M.minFilter===Vt||M.minFilter===ac||M.minFilter===ta||M.minFilter===Bi)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,O[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,O[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,O[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,q[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,q[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,K[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===zt||M.minFilter!==ta&&M.minFilter!==Bi||M.type===kn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ne(C,M){let V=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",b));const Q=M.source;let te=u.get(Q);te===void 0&&(te={},u.set(Q,te));const Z=W(M);if(Z!==C.__cacheKey){te[Z]===void 0&&(te[Z]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,V=!0),te[Z].usedTimes++;const Se=te[C.__cacheKey];Se!==void 0&&(te[C.__cacheKey].usedTimes--,Se.usedTimes===0&&T(M)),C.__cacheKey=Z,C.__webglTexture=te[Z].texture}return V}function ze(C,M,V){return Math.floor(Math.floor(C/V)/M)}function he(C,M,V,Q){const Z=C.updateRanges;if(Z.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,M.width,M.height,V,Q,M.data);else{Z.sort((se,le)=>se.start-le.start);let Se=0;for(let se=1;se<Z.length;se++){const le=Z[Se],Ee=Z[se],Te=le.start+le.count,xe=ze(Ee.start,M.width,4),Ze=ze(le.start,M.width,4);Ee.start<=Te+1&&xe===Ze&&ze(Ee.start+Ee.count-1,M.width,4)===xe?le.count=Math.max(le.count,Ee.start+Ee.count-le.start):(++Se,Z[Se]=Ee)}Z.length=Se+1;const ue=n.getParameter(n.UNPACK_ROW_LENGTH),Pe=n.getParameter(n.UNPACK_SKIP_PIXELS),Fe=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,M.width);for(let se=0,le=Z.length;se<le;se++){const Ee=Z[se],Te=Math.floor(Ee.start/4),xe=Math.ceil(Ee.count/4),Ze=Te%M.width,B=Math.floor(Te/M.width),de=xe,ce=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ze),n.pixelStorei(n.UNPACK_SKIP_ROWS,B),t.texSubImage2D(n.TEXTURE_2D,0,Ze,B,de,ce,V,Q,M.data)}C.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ue),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Pe),n.pixelStorei(n.UNPACK_SKIP_ROWS,Fe)}}function j(C,M,V){let Q=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Q=n.TEXTURE_3D);const te=Ne(C,M),Z=M.source;t.bindTexture(Q,C.__webglTexture,n.TEXTURE0+V);const Se=i.get(Z);if(Z.version!==Se.__version||te===!0){t.activeTexture(n.TEXTURE0+V);const ue=nt.getPrimaries(nt.workingColorSpace),Pe=M.colorSpace===pr?null:nt.getPrimaries(M.colorSpace),Fe=M.colorSpace===pr||ue===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);let se=v(M.image,!1,r.maxTextureSize);se=je(M,se);const le=s.convert(M.format,M.colorSpace),Ee=s.convert(M.type);let Te=_(M.internalFormat,le,Ee,M.colorSpace,M.isVideoTexture);ee(Q,M);let xe;const Ze=M.mipmaps,B=M.isVideoTexture!==!0,de=Se.__version===void 0||te===!0,ce=Z.dataReady,Me=w(M,se);if(M.isDepthTexture)Te=S(M.format===Kr,M.type),de&&(B?t.texStorage2D(n.TEXTURE_2D,1,Te,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,Te,se.width,se.height,0,le,Ee,null));else if(M.isDataTexture)if(Ze.length>0){B&&de&&t.texStorage2D(n.TEXTURE_2D,Me,Te,Ze[0].width,Ze[0].height);for(let ae=0,J=Ze.length;ae<J;ae++)xe=Ze[ae],B?ce&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,le,Ee,xe.data):t.texImage2D(n.TEXTURE_2D,ae,Te,xe.width,xe.height,0,le,Ee,xe.data);M.generateMipmaps=!1}else B?(de&&t.texStorage2D(n.TEXTURE_2D,Me,Te,se.width,se.height),ce&&he(M,se,le,Ee)):t.texImage2D(n.TEXTURE_2D,0,Te,se.width,se.height,0,le,Ee,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){B&&de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Te,Ze[0].width,Ze[0].height,se.depth);for(let ae=0,J=Ze.length;ae<J;ae++)if(xe=Ze[ae],M.format!==Bn)if(le!==null)if(B){if(ce)if(M.layerUpdates.size>0){const we=x0(xe.width,xe.height,M.format,M.type);for(const He of M.layerUpdates){const pt=xe.data.subarray(He*we/xe.data.BYTES_PER_ELEMENT,(He+1)*we/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,He,xe.width,xe.height,1,le,pt)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,se.depth,le,xe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ae,Te,xe.width,xe.height,se.depth,0,xe.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else B?ce&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ae,0,0,0,xe.width,xe.height,se.depth,le,Ee,xe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ae,Te,xe.width,xe.height,se.depth,0,le,Ee,xe.data)}else{B&&de&&t.texStorage2D(n.TEXTURE_2D,Me,Te,Ze[0].width,Ze[0].height);for(let ae=0,J=Ze.length;ae<J;ae++)xe=Ze[ae],M.format!==Bn?le!==null?B?ce&&t.compressedTexSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,le,xe.data):t.compressedTexImage2D(n.TEXTURE_2D,ae,Te,xe.width,xe.height,0,xe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):B?ce&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,xe.width,xe.height,le,Ee,xe.data):t.texImage2D(n.TEXTURE_2D,ae,Te,xe.width,xe.height,0,le,Ee,xe.data)}else if(M.isDataArrayTexture)if(B){if(de&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Me,Te,se.width,se.height,se.depth),ce)if(M.layerUpdates.size>0){const ae=x0(se.width,se.height,M.format,M.type);for(const J of M.layerUpdates){const we=se.data.subarray(J*ae/se.data.BYTES_PER_ELEMENT,(J+1)*ae/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,se.width,se.height,1,le,Ee,we)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,le,Ee,se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,se.width,se.height,se.depth,0,le,Ee,se.data);else if(M.isData3DTexture)B?(de&&t.texStorage3D(n.TEXTURE_3D,Me,Te,se.width,se.height,se.depth),ce&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,le,Ee,se.data)):t.texImage3D(n.TEXTURE_3D,0,Te,se.width,se.height,se.depth,0,le,Ee,se.data);else if(M.isFramebufferTexture){if(de)if(B)t.texStorage2D(n.TEXTURE_2D,Me,Te,se.width,se.height);else{let ae=se.width,J=se.height;for(let we=0;we<Me;we++)t.texImage2D(n.TEXTURE_2D,we,Te,ae,J,0,le,Ee,null),ae>>=1,J>>=1}}else if(Ze.length>0){if(B&&de){const ae=ge(Ze[0]);t.texStorage2D(n.TEXTURE_2D,Me,Te,ae.width,ae.height)}for(let ae=0,J=Ze.length;ae<J;ae++)xe=Ze[ae],B?ce&&t.texSubImage2D(n.TEXTURE_2D,ae,0,0,le,Ee,xe):t.texImage2D(n.TEXTURE_2D,ae,Te,le,Ee,xe);M.generateMipmaps=!1}else if(B){if(de){const ae=ge(se);t.texStorage2D(n.TEXTURE_2D,Me,Te,ae.width,ae.height)}ce&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,le,Ee,se)}else t.texImage2D(n.TEXTURE_2D,0,Te,le,Ee,se);x(M)&&h(Q),Se.__version=Z.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function re(C,M,V){if(M.image.length!==6)return;const Q=Ne(C,M),te=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+V);const Z=i.get(te);if(te.version!==Z.__version||Q===!0){t.activeTexture(n.TEXTURE0+V);const Se=nt.getPrimaries(nt.workingColorSpace),ue=M.colorSpace===pr?null:nt.getPrimaries(M.colorSpace),Pe=M.colorSpace===pr||Se===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const Fe=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,le=[];for(let J=0;J<6;J++)!Fe&&!se?le[J]=v(M.image[J],!0,r.maxCubemapSize):le[J]=se?M.image[J].image:M.image[J],le[J]=je(M,le[J]);const Ee=le[0],Te=s.convert(M.format,M.colorSpace),xe=s.convert(M.type),Ze=_(M.internalFormat,Te,xe,M.colorSpace),B=M.isVideoTexture!==!0,de=Z.__version===void 0||Q===!0,ce=te.dataReady;let Me=w(M,Ee);ee(n.TEXTURE_CUBE_MAP,M);let ae;if(Fe){B&&de&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Ze,Ee.width,Ee.height);for(let J=0;J<6;J++){ae=le[J].mipmaps;for(let we=0;we<ae.length;we++){const He=ae[we];M.format!==Bn?Te!==null?B?ce&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,we,0,0,He.width,He.height,Te,He.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,we,Ze,He.width,He.height,0,He.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,we,0,0,He.width,He.height,Te,xe,He.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,we,Ze,He.width,He.height,0,Te,xe,He.data)}}}else{if(ae=M.mipmaps,B&&de){ae.length>0&&Me++;const J=ge(le[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Me,Ze,J.width,J.height)}for(let J=0;J<6;J++)if(se){B?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,le[J].width,le[J].height,Te,xe,le[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ze,le[J].width,le[J].height,0,Te,xe,le[J].data);for(let we=0;we<ae.length;we++){const pt=ae[we].image[J].image;B?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,we+1,0,0,pt.width,pt.height,Te,xe,pt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,we+1,Ze,pt.width,pt.height,0,Te,xe,pt.data)}}else{B?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Te,xe,le[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ze,Te,xe,le[J]);for(let we=0;we<ae.length;we++){const He=ae[we];B?ce&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,we+1,0,0,Te,xe,He.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,we+1,Ze,Te,xe,He.image[J])}}}x(M)&&h(n.TEXTURE_CUBE_MAP),Z.__version=te.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ne(C,M,V,Q,te,Z){const Se=s.convert(V.format,V.colorSpace),ue=s.convert(V.type),Pe=_(V.internalFormat,Se,ue,V.colorSpace),Fe=i.get(M),se=i.get(V);if(se.__renderTarget=M,!Fe.__hasExternalTextures){const le=Math.max(1,M.width>>Z),Ee=Math.max(1,M.height>>Z);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,Pe,le,Ee,M.depth,0,Se,ue,null):t.texImage2D(te,Z,Pe,le,Ee,0,Se,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),At(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,te,se.__webglTexture,0,U(M)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,te,se.__webglTexture,Z),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ke(C,M,V){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){const Q=M.depthTexture,te=Q&&Q.isDepthTexture?Q.type:null,Z=S(M.stencilBuffer,te),Se=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;At(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(M),Z,M.width,M.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(M),Z,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Z,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Se,n.RENDERBUFFER,C)}else{const Q=M.textures;for(let te=0;te<Q.length;te++){const Z=Q[te],Se=s.convert(Z.format,Z.colorSpace),ue=s.convert(Z.type),Pe=_(Z.internalFormat,Se,ue,Z.colorSpace);At(M)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U(M),Pe,M.width,M.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,U(M),Pe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Pe,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ae(C,M,V){const Q=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(M.depthTexture);if(te.__renderTarget=M,(!te.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Q){if(te.__webglInit===void 0&&(te.__webglInit=!0,M.depthTexture.addEventListener("dispose",b)),te.__webglTexture===void 0){te.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,te.__webglTexture),ee(n.TEXTURE_CUBE_MAP,M.depthTexture);const Fe=s.convert(M.depthTexture.format),se=s.convert(M.depthTexture.type);let le;M.depthTexture.format===Zi?le=n.DEPTH_COMPONENT24:M.depthTexture.format===Kr&&(le=n.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,le,M.width,M.height,0,Fe,se,null)}}else F(M.depthTexture,0);const Z=te.__webglTexture,Se=U(M),ue=Q?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,Pe=M.depthTexture.format===Kr?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(M.depthTexture.format===Zi)At(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,ue,Z,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,ue,Z,0);else if(M.depthTexture.format===Kr)At(M)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Pe,ue,Z,0,Se):n.framebufferTexture2D(n.FRAMEBUFFER,Pe,ue,Z,0);else throw new Error("Unknown depthTexture format")}function Ue(C){const M=i.get(C),V=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Q){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Q.removeEventListener("dispose",te)};Q.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=Q}if(C.depthTexture&&!M.__autoAllocateDepthBuffer)if(V)for(let Q=0;Q<6;Q++)Ae(M.__webglFramebuffer[Q],C,Q);else{const Q=C.texture.mipmaps;Q&&Q.length>0?Ae(M.__webglFramebuffer[0],C,0):Ae(M.__webglFramebuffer,C,0)}else if(V){M.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[Q]),M.__webglDepthbuffer[Q]===void 0)M.__webglDepthbuffer[Q]=n.createRenderbuffer(),ke(M.__webglDepthbuffer[Q],C,!1);else{const te=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Z)}}else{const Q=C.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ke(M.__webglDepthbuffer,C,!1);else{const te=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,te,n.RENDERBUFFER,Z)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(C,M,V){const Q=i.get(C);M!==void 0&&ne(Q.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Ue(C)}function De(C){const M=C.texture,V=i.get(C),Q=i.get(M);C.addEventListener("dispose",R);const te=C.textures,Z=C.isWebGLCubeRenderTarget===!0,Se=te.length>1;if(Se||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=M.version,o.memory.textures++),Z){V.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[ue]=[];for(let Pe=0;Pe<M.mipmaps.length;Pe++)V.__webglFramebuffer[ue][Pe]=n.createFramebuffer()}else V.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let ue=0;ue<M.mipmaps.length;ue++)V.__webglFramebuffer[ue]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Se)for(let ue=0,Pe=te.length;ue<Pe;ue++){const Fe=i.get(te[ue]);Fe.__webglTexture===void 0&&(Fe.__webglTexture=n.createTexture(),o.memory.textures++)}if(C.samples>0&&At(C)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let ue=0;ue<te.length;ue++){const Pe=te[ue];V.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[ue]);const Fe=s.convert(Pe.format,Pe.colorSpace),se=s.convert(Pe.type),le=_(Pe.internalFormat,Fe,se,Pe.colorSpace,C.isXRRenderTarget===!0),Ee=U(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ee,le,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,V.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ke(V.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){t.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),ee(n.TEXTURE_CUBE_MAP,M);for(let ue=0;ue<6;ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)ne(V.__webglFramebuffer[ue][Pe],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Pe);else ne(V.__webglFramebuffer[ue],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);x(M)&&h(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Se){for(let ue=0,Pe=te.length;ue<Pe;ue++){const Fe=te[ue],se=i.get(Fe);let le=n.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(le,se.__webglTexture),ee(le,Fe),ne(V.__webglFramebuffer,C,Fe,n.COLOR_ATTACHMENT0+ue,le,0),x(Fe)&&h(le)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ue=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,Q.__webglTexture),ee(ue,M),M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)ne(V.__webglFramebuffer[Pe],C,M,n.COLOR_ATTACHMENT0,ue,Pe);else ne(V.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,ue,0);x(M)&&h(ue),t.unbindTexture()}C.depthBuffer&&Ue(C)}function Ge(C){const M=C.textures;for(let V=0,Q=M.length;V<Q;V++){const te=M[V];if(x(te)){const Z=m(C),Se=i.get(te).__webglTexture;t.bindTexture(Z,Se),h(Z),t.unbindTexture()}}}const Xe=[],We=[];function bt(C){if(C.samples>0){if(At(C)===!1){const M=C.textures,V=C.width,Q=C.height;let te=n.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=i.get(C),ue=M.length>1;if(ue)for(let Fe=0;Fe<M.length;Fe++)t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Se.__webglMultisampledFramebuffer);const Pe=C.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglFramebuffer);for(let Fe=0;Fe<M.length;Fe++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Fe]);const se=i.get(M[Fe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,se,0)}n.blitFramebuffer(0,0,V,Q,0,0,V,Q,te,n.NEAREST),l===!0&&(Xe.length=0,We.length=0,Xe.push(n.COLOR_ATTACHMENT0+Fe),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Xe.push(Z),We.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,We)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Xe))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let Fe=0;Fe<M.length;Fe++){t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.RENDERBUFFER,Se.__webglColorRenderbuffer[Fe]);const se=i.get(M[Fe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Se.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Fe,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Se.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function U(C){return Math.min(r.maxSamples,C.samples)}function At(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function it(C){const M=o.render.frame;d.get(C)!==M&&(d.set(C,M),C.update())}function je(C,M){const V=C.colorSpace,Q=C.format,te=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||V!==pn&&V!==pr&&(nt.getTransfer(V)===at?(Q!==Bn||te!==bn)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",V)),M}function ge(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=F,this.setTexture2DArray=I,this.setTexture3D=N,this.setTextureCube=P,this.rebindTextures=_e,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=bt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=At,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function WA(n,e){function t(i,r=pr){let s;const o=nt.getTransfer(r);if(i===bn)return n.UNSIGNED_BYTE;if(i===Up)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Fp)return n.UNSIGNED_SHORT_5_5_5_1;if(i===wv)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Tv)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Mv)return n.BYTE;if(i===Ev)return n.SHORT;if(i===Na)return n.UNSIGNED_SHORT;if(i===Dp)return n.INT;if(i===Ei)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===Ki)return n.HALF_FLOAT;if(i===bv)return n.ALPHA;if(i===Av)return n.RGB;if(i===Bn)return n.RGBA;if(i===Zi)return n.DEPTH_COMPONENT;if(i===Kr)return n.DEPTH_STENCIL;if(i===Op)return n.RED;if(i===kp)return n.RED_INTEGER;if(i===uo)return n.RG;if(i===Bp)return n.RG_INTEGER;if(i===zp)return n.RGBA_INTEGER;if(i===lc||i===cc||i===uc||i===dc)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===lc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===uc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===dc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===lc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===cc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===uc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===dc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Xf||i===Yf||i===qf||i===$f)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Xf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Yf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===$f)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Kf||i===Zf||i===Jf||i===Qf||i===eh||i===th||i===nh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Kf||i===Zf)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Jf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Qf)return s.COMPRESSED_R11_EAC;if(i===eh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===th)return s.COMPRESSED_RG11_EAC;if(i===nh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ih||i===rh||i===sh||i===oh||i===ah||i===lh||i===ch||i===uh||i===dh||i===fh||i===hh||i===ph||i===mh||i===gh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===ih)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===rh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===sh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===oh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===ah)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===lh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ch)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===uh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===dh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===fh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===hh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ph)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===mh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===gh)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===xh||i===_h||i===vh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===xh)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===_h)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yh||i===Sh||i===Mh||i===Eh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===yh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Sh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Eh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Da?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const jA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XA=`
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

}`;class YA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Vv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new wi({vertexShader:jA,fragmentShader:XA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new xu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class qA extends So{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,f=null,u=null,p=null,g=null;const v=typeof XRWebGLBinding<"u",x=new YA,h={},m=t.getContextAttributes();let _=null,S=null;const w=[],b=[],R=new Ve;let y=null;const T=new Jt;T.viewport=new xt;const D=new Jt;D.viewport=new xt;const L=[T,D],z=new ZE;let G=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let re=w[j];return re===void 0&&(re=new rd,w[j]=re),re.getTargetRaySpace()},this.getControllerGrip=function(j){let re=w[j];return re===void 0&&(re=new rd,w[j]=re),re.getGripSpace()},this.getHand=function(j){let re=w[j];return re===void 0&&(re=new rd,w[j]=re),re.getHandSpace()};function F(j){const re=b.indexOf(j.inputSource);if(re===-1)return;const ne=w[re];ne!==void 0&&(ne.update(j.inputSource,j.frame,c||o),ne.dispatchEvent({type:j.type,data:j.inputSource}))}function I(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",N);for(let j=0;j<w.length;j++){const re=b[j];re!==null&&(b[j]=null,w[j].disconnect(re))}G=null,W=null,x.reset();for(const j in h)delete h[j];e.setRenderTarget(_),p=null,u=null,f=null,r=null,S=null,he.stop(),i.isPresenting=!1,e.setPixelRatio(y),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&v&&(f=new XRWebGLBinding(r,t)),f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",I),r.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await t.makeXRCompatible(),y=e.getPixelRatio(),e.getSize(R),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ne=null,ke=null,Ae=null;m.depth&&(Ae=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ne=m.stencil?Kr:Zi,ke=m.stencil?Da:Ei);const Ue={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:s};f=this.getBinding(),u=f.createProjectionLayer(Ue),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new Mi(u.textureWidth,u.textureHeight,{format:Bn,type:bn,depthTexture:new Ha(u.textureWidth,u.textureHeight,ke,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1})}else{const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Mi(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:bn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),he.setContext(r),he.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function N(j){for(let re=0;re<j.removed.length;re++){const ne=j.removed[re],ke=b.indexOf(ne);ke>=0&&(b[ke]=null,w[ke].disconnect(ne))}for(let re=0;re<j.added.length;re++){const ne=j.added[re];let ke=b.indexOf(ne);if(ke===-1){for(let Ue=0;Ue<w.length;Ue++)if(Ue>=b.length){b.push(ne),ke=Ue;break}else if(b[Ue]===null){b[Ue]=ne,ke=Ue;break}if(ke===-1)break}const Ae=w[ke];Ae&&Ae.connect(ne)}}const P=new k,O=new k;function q(j,re,ne){P.setFromMatrixPosition(re.matrixWorld),O.setFromMatrixPosition(ne.matrixWorld);const ke=P.distanceTo(O),Ae=re.projectionMatrix.elements,Ue=ne.projectionMatrix.elements,_e=Ae[14]/(Ae[10]-1),De=Ae[14]/(Ae[10]+1),Ge=(Ae[9]+1)/Ae[5],Xe=(Ae[9]-1)/Ae[5],We=(Ae[8]-1)/Ae[0],bt=(Ue[8]+1)/Ue[0],U=_e*We,At=_e*bt,it=ke/(-We+bt),je=it*-We;if(re.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(je),j.translateZ(it),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ae[10]===-1)j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const ge=_e+it,C=De+it,M=U-je,V=At+(ke-je),Q=Ge*De/C*ge,te=Xe*De/C*ge;j.projectionMatrix.makePerspective(M,V,Q,te,ge,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function K(j,re){re===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(re.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let re=j.near,ne=j.far;x.texture!==null&&(x.depthNear>0&&(re=x.depthNear),x.depthFar>0&&(ne=x.depthFar)),z.near=D.near=T.near=re,z.far=D.far=T.far=ne,(G!==z.near||W!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),G=z.near,W=z.far),z.layers.mask=j.layers.mask|6,T.layers.mask=z.layers.mask&-5,D.layers.mask=z.layers.mask&-3;const ke=j.parent,Ae=z.cameras;K(z,ke);for(let Ue=0;Ue<Ae.length;Ue++)K(Ae[Ue],ke);Ae.length===2?q(z,T,D):z.projectionMatrix.copy(T.projectionMatrix),ee(j,z,ke)};function ee(j,re,ne){ne===null?j.matrix.copy(re.matrixWorld):(j.matrix.copy(ne.matrixWorld),j.matrix.invert(),j.matrix.multiply(re.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=fo*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&p===null))return l},this.setFoveation=function(j){l=j,u!==null&&(u.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(z)},this.getCameraTexture=function(j){return h[j]};let Ne=null;function ze(j,re){if(d=re.getViewerPose(c||o),g=re,d!==null){const ne=d.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let ke=!1;ne.length!==z.cameras.length&&(z.cameras.length=0,ke=!0);for(let De=0;De<ne.length;De++){const Ge=ne[De];let Xe=null;if(p!==null)Xe=p.getViewport(Ge);else{const bt=f.getViewSubImage(u,Ge);Xe=bt.viewport,De===0&&(e.setRenderTargetTextures(S,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(S))}let We=L[De];We===void 0&&(We=new Jt,We.layers.enable(De),We.viewport=new xt,L[De]=We),We.matrix.fromArray(Ge.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ge.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),De===0&&(z.matrix.copy(We.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),ke===!0&&z.cameras.push(We)}const Ae=r.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&v){f=i.getBinding();const De=f.getDepthInformation(ne[0]);De&&De.isValid&&De.texture&&x.init(De,r.renderState)}if(Ae&&Ae.includes("camera-access")&&v){e.state.unbindTexture(),f=i.getBinding();for(let De=0;De<ne.length;De++){const Ge=ne[De].camera;if(Ge){let Xe=h[Ge];Xe||(Xe=new Vv,h[Ge]=Xe);const We=f.getCameraImage(Ge);Xe.sourceTexture=We}}}}for(let ne=0;ne<w.length;ne++){const ke=b[ne],Ae=w[ne];ke!==null&&Ae!==void 0&&Ae.update(ke,re,c||o)}Ne&&Ne(j,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const he=new Yv;he.setAnimationLoop(ze),this.setAnimationLoop=function(j){Ne=j},this.dispose=function(){}}}const Br=new si,$A=new $e;function KA(n,e){function t(x,h){x.matrixAutoUpdate===!0&&x.updateMatrix(),h.value.copy(x.matrix)}function i(x,h){h.color.getRGB(x.fogColor.value,Hv(n)),h.isFog?(x.fogNear.value=h.near,x.fogFar.value=h.far):h.isFogExp2&&(x.fogDensity.value=h.density)}function r(x,h,m,_,S){h.isMeshBasicMaterial?s(x,h):h.isMeshLambertMaterial?(s(x,h),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)):h.isMeshToonMaterial?(s(x,h),f(x,h)):h.isMeshPhongMaterial?(s(x,h),d(x,h),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)):h.isMeshStandardMaterial?(s(x,h),u(x,h),h.isMeshPhysicalMaterial&&p(x,h,S)):h.isMeshMatcapMaterial?(s(x,h),g(x,h)):h.isMeshDepthMaterial?s(x,h):h.isMeshDistanceMaterial?(s(x,h),v(x,h)):h.isMeshNormalMaterial?s(x,h):h.isLineBasicMaterial?(o(x,h),h.isLineDashedMaterial&&a(x,h)):h.isPointsMaterial?l(x,h,m,_):h.isSpriteMaterial?c(x,h):h.isShadowMaterial?(x.color.value.copy(h.color),x.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(x,h){x.opacity.value=h.opacity,h.color&&x.diffuse.value.copy(h.color),h.emissive&&x.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(x.map.value=h.map,t(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,t(h.alphaMap,x.alphaMapTransform)),h.bumpMap&&(x.bumpMap.value=h.bumpMap,t(h.bumpMap,x.bumpMapTransform),x.bumpScale.value=h.bumpScale,h.side===hn&&(x.bumpScale.value*=-1)),h.normalMap&&(x.normalMap.value=h.normalMap,t(h.normalMap,x.normalMapTransform),x.normalScale.value.copy(h.normalScale),h.side===hn&&x.normalScale.value.negate()),h.displacementMap&&(x.displacementMap.value=h.displacementMap,t(h.displacementMap,x.displacementMapTransform),x.displacementScale.value=h.displacementScale,x.displacementBias.value=h.displacementBias),h.emissiveMap&&(x.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,x.emissiveMapTransform)),h.specularMap&&(x.specularMap.value=h.specularMap,t(h.specularMap,x.specularMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest);const m=e.get(h),_=m.envMap,S=m.envMapRotation;_&&(x.envMap.value=_,Br.copy(S),Br.x*=-1,Br.y*=-1,Br.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),x.envMapRotation.value.setFromMatrix4($A.makeRotationFromEuler(Br)),x.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=h.reflectivity,x.ior.value=h.ior,x.refractionRatio.value=h.refractionRatio),h.lightMap&&(x.lightMap.value=h.lightMap,x.lightMapIntensity.value=h.lightMapIntensity,t(h.lightMap,x.lightMapTransform)),h.aoMap&&(x.aoMap.value=h.aoMap,x.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,x.aoMapTransform))}function o(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,h.map&&(x.map.value=h.map,t(h.map,x.mapTransform))}function a(x,h){x.dashSize.value=h.dashSize,x.totalSize.value=h.dashSize+h.gapSize,x.scale.value=h.scale}function l(x,h,m,_){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.size.value=h.size*m,x.scale.value=_*.5,h.map&&(x.map.value=h.map,t(h.map,x.uvTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,t(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function c(x,h){x.diffuse.value.copy(h.color),x.opacity.value=h.opacity,x.rotation.value=h.rotation,h.map&&(x.map.value=h.map,t(h.map,x.mapTransform)),h.alphaMap&&(x.alphaMap.value=h.alphaMap,t(h.alphaMap,x.alphaMapTransform)),h.alphaTest>0&&(x.alphaTest.value=h.alphaTest)}function d(x,h){x.specular.value.copy(h.specular),x.shininess.value=Math.max(h.shininess,1e-4)}function f(x,h){h.gradientMap&&(x.gradientMap.value=h.gradientMap)}function u(x,h){x.metalness.value=h.metalness,h.metalnessMap&&(x.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,x.metalnessMapTransform)),x.roughness.value=h.roughness,h.roughnessMap&&(x.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,x.roughnessMapTransform)),h.envMap&&(x.envMapIntensity.value=h.envMapIntensity)}function p(x,h,m){x.ior.value=h.ior,h.sheen>0&&(x.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),x.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(x.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,x.sheenColorMapTransform)),h.sheenRoughnessMap&&(x.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,x.sheenRoughnessMapTransform))),h.clearcoat>0&&(x.clearcoat.value=h.clearcoat,x.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(x.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,x.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(x.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===hn&&x.clearcoatNormalScale.value.negate())),h.dispersion>0&&(x.dispersion.value=h.dispersion),h.iridescence>0&&(x.iridescence.value=h.iridescence,x.iridescenceIOR.value=h.iridescenceIOR,x.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(x.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,x.iridescenceMapTransform)),h.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),h.transmission>0&&(x.transmission.value=h.transmission,x.transmissionSamplerMap.value=m.texture,x.transmissionSamplerSize.value.set(m.width,m.height),h.transmissionMap&&(x.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,x.transmissionMapTransform)),x.thickness.value=h.thickness,h.thicknessMap&&(x.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=h.attenuationDistance,x.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(x.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(x.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=h.specularIntensity,x.specularColor.value.copy(h.specularColor),h.specularColorMap&&(x.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,x.specularColorMapTransform)),h.specularIntensityMap&&(x.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,h){h.matcap&&(x.matcap.value=h.matcap)}function v(x,h){const m=e.get(h).light;x.referencePosition.value.setFromMatrixPosition(m.matrixWorld),x.nearDistance.value=m.shadow.camera.near,x.farDistance.value=m.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ZA(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(m,_){const S=_.program;i.uniformBlockBinding(m,S)}function c(m,_){let S=r[m.id];S===void 0&&(g(m),S=d(m),r[m.id]=S,m.addEventListener("dispose",x));const w=_.program;i.updateUBOMapping(m,w);const b=e.render.frame;s[m.id]!==b&&(u(m),s[m.id]=b)}function d(m){const _=f();m.__bindingPointIndex=_;const S=n.createBuffer(),w=m.__size,b=m.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,w,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,S),S}function f(){for(let m=0;m<a;m++)if(o.indexOf(m)===-1)return o.push(m),m;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(m){const _=r[m.id],S=m.uniforms,w=m.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let b=0,R=S.length;b<R;b++){const y=Array.isArray(S[b])?S[b]:[S[b]];for(let T=0,D=y.length;T<D;T++){const L=y[T];if(p(L,b,T,w)===!0){const z=L.__offset,G=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let F=0;F<G.length;F++){const I=G[F],N=v(I);typeof I=="number"||typeof I=="boolean"?(L.__data[0]=I,n.bufferSubData(n.UNIFORM_BUFFER,z+W,L.__data)):I.isMatrix3?(L.__data[0]=I.elements[0],L.__data[1]=I.elements[1],L.__data[2]=I.elements[2],L.__data[3]=0,L.__data[4]=I.elements[3],L.__data[5]=I.elements[4],L.__data[6]=I.elements[5],L.__data[7]=0,L.__data[8]=I.elements[6],L.__data[9]=I.elements[7],L.__data[10]=I.elements[8],L.__data[11]=0):(I.toArray(L.__data,W),W+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,L.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(m,_,S,w){const b=m.value,R=_+"_"+S;if(w[R]===void 0)return typeof b=="number"||typeof b=="boolean"?w[R]=b:w[R]=b.clone(),!0;{const y=w[R];if(typeof b=="number"||typeof b=="boolean"){if(y!==b)return w[R]=b,!0}else if(y.equals(b)===!1)return y.copy(b),!0}return!1}function g(m){const _=m.uniforms;let S=0;const w=16;for(let R=0,y=_.length;R<y;R++){const T=Array.isArray(_[R])?_[R]:[_[R]];for(let D=0,L=T.length;D<L;D++){const z=T[D],G=Array.isArray(z.value)?z.value:[z.value];for(let W=0,F=G.length;W<F;W++){const I=G[W],N=v(I),P=S%w,O=P%N.boundary,q=P+O;S+=O,q!==0&&w-q<N.storage&&(S+=w-q),z.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=N.storage}}}const b=S%w;return b>0&&(S+=w-b),m.__size=S,m.__cache={},this}function v(m){const _={boundary:0,storage:0};return typeof m=="number"||typeof m=="boolean"?(_.boundary=4,_.storage=4):m.isVector2?(_.boundary=8,_.storage=8):m.isVector3||m.isColor?(_.boundary=16,_.storage=12):m.isVector4?(_.boundary=16,_.storage=16):m.isMatrix3?(_.boundary=48,_.storage=48):m.isMatrix4?(_.boundary=64,_.storage=64):m.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Le("WebGLRenderer: Unsupported uniform value type.",m),_}function x(m){const _=m.target;_.removeEventListener("dispose",x);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const m in r)n.deleteBuffer(r[m]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}const JA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let di=null;function QA(){return di===null&&(di=new Xp(JA,16,16,uo,Ki),di.name="DFG_LUT",di.minFilter=Vt,di.magFilter=Vt,di.wrapS=xi,di.wrapT=xi,di.generateMipmaps=!1,di.needsUpdate=!0),di}class Qp{constructor(e={}){const{canvas:t=R1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=bn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const v=p,x=new Set([zp,Bp,kp]),h=new Set([bn,Ei,Na,Da,Up,Fp]),m=new Uint32Array(4),_=new Int32Array(4);let S=null,w=null;const b=[],R=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let D=!1;this._outputColorSpace=kt;let L=0,z=0,G=null,W=-1,F=null;const I=new xt,N=new xt;let P=null;const O=new Be(0);let q=0,K=t.width,ee=t.height,Ne=1,ze=null,he=null;const j=new xt(0,0,K,ee),re=new xt(0,0,K,ee);let ne=!1;const ke=new qp;let Ae=!1,Ue=!1;const _e=new $e,De=new k,Ge=new xt,Xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let We=!1;function bt(){return G===null?Ne:1}let U=i;function At(A,H){return t.getContext(A,H)}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pp}`),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",He,!1),t.addEventListener("webglcontextcreationerror",pt,!1),U===null){const H="webgl2";if(U=At(H,A),U===null)throw At(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Oe("WebGLRenderer: "+A.message),A}let it,je,ge,C,M,V,Q,te,Z,Se,ue,Pe,Fe,se,le,Ee,Te,xe,Ze,B,de,ce,Me;function ae(){it=new e2(U),it.init(),de=new WA(U,it),je=new Xb(U,it,e,de),ge=new HA(U,it),je.reversedDepthBuffer&&u&&ge.buffers.depth.setReversed(!0),C=new i2(U),M=new RA,V=new GA(U,it,ge,M,je,de,C),Q=new Qb(T),te=new lw(U),ce=new Wb(U,te),Z=new t2(U,te,C,ce),Se=new s2(U,Z,te,ce,C),xe=new r2(U,je,V),le=new Yb(M),ue=new AA(T,Q,it,je,ce,le),Pe=new KA(T,M),Fe=new PA,se=new FA(it),Te=new Gb(T,Q,ge,Se,g,l),Ee=new VA(T,Se,je),Me=new ZA(U,C,je,ge),Ze=new jb(U,it,C),B=new n2(U,it,C),C.programs=ue.programs,T.capabilities=je,T.extensions=it,T.properties=M,T.renderLists=Fe,T.shadowMap=Ee,T.state=ge,T.info=C}ae(),v!==bn&&(y=new a2(v,t.width,t.height,r,s));const J=new qA(T,U);this.xr=J,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const A=it.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=it.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ne},this.setPixelRatio=function(A){A!==void 0&&(Ne=A,this.setSize(K,ee,!1))},this.getSize=function(A){return A.set(K,ee)},this.setSize=function(A,H,$=!0){if(J.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}K=A,ee=H,t.width=Math.floor(A*Ne),t.height=Math.floor(H*Ne),$===!0&&(t.style.width=A+"px",t.style.height=H+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,A,H)},this.getDrawingBufferSize=function(A){return A.set(K*Ne,ee*Ne).floor()},this.setDrawingBufferSize=function(A,H,$){K=A,ee=H,Ne=$,t.width=Math.floor(A*$),t.height=Math.floor(H*$),this.setViewport(0,0,A,H)},this.setEffects=function(A){if(v===bn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let H=0;H<A.length;H++)if(A[H].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(I)},this.getViewport=function(A){return A.copy(j)},this.setViewport=function(A,H,$,Y){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,H,$,Y),ge.viewport(I.copy(j).multiplyScalar(Ne).round())},this.getScissor=function(A){return A.copy(re)},this.setScissor=function(A,H,$,Y){A.isVector4?re.set(A.x,A.y,A.z,A.w):re.set(A,H,$,Y),ge.scissor(N.copy(re).multiplyScalar(Ne).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(A){ge.setScissorTest(ne=A)},this.setOpaqueSort=function(A){ze=A},this.setTransparentSort=function(A){he=A},this.getClearColor=function(A){return A.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor(...arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha(...arguments)},this.clear=function(A=!0,H=!0,$=!0){let Y=0;if(A){let X=!1;if(G!==null){const pe=G.texture.format;X=x.has(pe)}if(X){const pe=G.texture.type,ve=h.has(pe),me=Te.getClearColor(),be=Te.getClearAlpha(),Ce=me.r,Ye=me.g,Je=me.b;ve?(m[0]=Ce,m[1]=Ye,m[2]=Je,m[3]=be,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=Ce,_[1]=Ye,_[2]=Je,_[3]=be,U.clearBufferiv(U.COLOR,0,_))}else Y|=U.COLOR_BUFFER_BIT}H&&(Y|=U.DEPTH_BUFFER_BIT),$&&(Y|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y!==0&&U.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",He,!1),t.removeEventListener("webglcontextcreationerror",pt,!1),Te.dispose(),Fe.dispose(),se.dispose(),M.dispose(),Q.dispose(),Se.dispose(),ce.dispose(),Me.dispose(),ue.dispose(),J.dispose(),J.removeEventListener("sessionstart",rm),J.removeEventListener("sessionend",sm),Lr.stop()};function we(A){A.preventDefault(),Vc("WebGLRenderer: Context Lost."),D=!0}function He(){Vc("WebGLRenderer: Context Restored."),D=!1;const A=C.autoReset,H=Ee.enabled,$=Ee.autoUpdate,Y=Ee.needsUpdate,X=Ee.type;ae(),C.autoReset=A,Ee.enabled=H,Ee.autoUpdate=$,Ee.needsUpdate=Y,Ee.type=X}function pt(A){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const H=A.target;H.removeEventListener("dispose",ot),Ai(H)}function Ai(A){Ri(A),M.remove(A)}function Ri(A){const H=M.get(A).programs;H!==void 0&&(H.forEach(function($){ue.releaseProgram($)}),A.isShaderMaterial&&ue.releaseShaderCache(A))}this.renderBufferDirect=function(A,H,$,Y,X,pe){H===null&&(H=Xe);const ve=X.isMesh&&X.matrixWorld.determinant()<0,me=dy(A,H,$,Y,X);ge.setMaterial(Y,ve);let be=$.index,Ce=1;if(Y.wireframe===!0){if(be=Z.getWireframeAttribute($),be===void 0)return;Ce=2}const Ye=$.drawRange,Je=$.attributes.position;let Ie=Ye.start*Ce,dt=(Ye.start+Ye.count)*Ce;pe!==null&&(Ie=Math.max(Ie,pe.start*Ce),dt=Math.min(dt,(pe.start+pe.count)*Ce)),be!==null?(Ie=Math.max(Ie,0),dt=Math.min(dt,be.count)):Je!=null&&(Ie=Math.max(Ie,0),dt=Math.min(dt,Je.count));const It=dt-Ie;if(It<0||It===1/0)return;ce.setup(X,Y,me,$,be);let Rt,ft=Ze;if(be!==null&&(Rt=te.get(be),ft=B,ft.setIndex(Rt)),X.isMesh)Y.wireframe===!0?(ge.setLineWidth(Y.wireframeLinewidth*bt()),ft.setMode(U.LINES)):ft.setMode(U.TRIANGLES);else if(X.isLine){let tn=Y.linewidth;tn===void 0&&(tn=1),ge.setLineWidth(tn*bt()),X.isLineSegments?ft.setMode(U.LINES):X.isLineLoop?ft.setMode(U.LINE_LOOP):ft.setMode(U.LINE_STRIP)}else X.isPoints?ft.setMode(U.POINTS):X.isSprite&&ft.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Hc("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))ft.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const tn=X._multiDrawStarts,Re=X._multiDrawCounts,Mn=X._multiDrawCount,st=be?te.get(be).bytesPerElement:1,Wn=M.get(Y).currentProgram.getUniforms();for(let li=0;li<Mn;li++)Wn.setValue(U,"_gl_DrawID",li),ft.render(tn[li]/st,Re[li])}else if(X.isInstancedMesh)ft.renderInstances(Ie,It,X.count);else if($.isInstancedBufferGeometry){const tn=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Re=Math.min($.instanceCount,tn);ft.renderInstances(Ie,It,Re)}else ft.render(Ie,It)};function im(A,H,$){A.transparent===!0&&A.side===Jn&&A.forceSinglePass===!1?(A.side=hn,A.needsUpdate=!0,Ka(A,H,$),A.side=$i,A.needsUpdate=!0,Ka(A,H,$),A.side=Jn):Ka(A,H,$)}this.compile=function(A,H,$=null){$===null&&($=A),w=se.get($),w.init(H),R.push(w),$.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),A!==$&&A.traverseVisible(function(X){X.isLight&&X.layers.test(H.layers)&&(w.pushLight(X),X.castShadow&&w.pushShadow(X))}),w.setupLights();const Y=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const pe=X.material;if(pe)if(Array.isArray(pe))for(let ve=0;ve<pe.length;ve++){const me=pe[ve];im(me,$,X),Y.add(me)}else im(pe,$,X),Y.add(pe)}),w=R.pop(),Y},this.compileAsync=function(A,H,$=null){const Y=this.compile(A,H,$);return new Promise(X=>{function pe(){if(Y.forEach(function(ve){M.get(ve).currentProgram.isReady()&&Y.delete(ve)}),Y.size===0){X(A);return}setTimeout(pe,10)}it.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let Eu=null;function uy(A){Eu&&Eu(A)}function rm(){Lr.stop()}function sm(){Lr.start()}const Lr=new Yv;Lr.setAnimationLoop(uy),typeof self<"u"&&Lr.setContext(self),this.setAnimationLoop=function(A){Eu=A,J.setAnimationLoop(A),A===null?Lr.stop():Lr.start()},J.addEventListener("sessionstart",rm),J.addEventListener("sessionend",sm),this.render=function(A,H){if(H!==void 0&&H.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;const $=J.enabled===!0&&J.isPresenting===!0,Y=y!==null&&(G===null||$)&&y.begin(T,G);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(J.cameraAutoUpdate===!0&&J.updateCamera(H),H=J.getCamera()),A.isScene===!0&&A.onBeforeRender(T,A,H,G),w=se.get(A,R.length),w.init(H),R.push(w),_e.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ke.setFromProjectionMatrix(_e,_i,H.reversedDepth),Ue=this.localClippingEnabled,Ae=le.init(this.clippingPlanes,Ue),S=Fe.get(A,b.length),S.init(),b.push(S),J.enabled===!0&&J.isPresenting===!0){const ve=T.xr.getDepthSensingMesh();ve!==null&&wu(ve,H,-1/0,T.sortObjects)}wu(A,H,0,T.sortObjects),S.finish(),T.sortObjects===!0&&S.sort(ze,he),We=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,We&&Te.addToRenderList(S,A),this.info.render.frame++,Ae===!0&&le.beginShadows();const X=w.state.shadowsArray;if(Ee.render(X,A,H),Ae===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Y&&y.hasRenderPass())===!1){const ve=S.opaque,me=S.transmissive;if(w.setupLights(),H.isArrayCamera){const be=H.cameras;if(me.length>0)for(let Ce=0,Ye=be.length;Ce<Ye;Ce++){const Je=be[Ce];am(ve,me,A,Je)}We&&Te.render(A);for(let Ce=0,Ye=be.length;Ce<Ye;Ce++){const Je=be[Ce];om(S,A,Je,Je.viewport)}}else me.length>0&&am(ve,me,A,H),We&&Te.render(A),om(S,A,H)}G!==null&&z===0&&(V.updateMultisampleRenderTarget(G),V.updateRenderTargetMipmap(G)),Y&&y.end(T),A.isScene===!0&&A.onAfterRender(T,A,H),ce.resetDefaultState(),W=-1,F=null,R.pop(),R.length>0?(w=R[R.length-1],Ae===!0&&le.setGlobalState(T.clippingPlanes,w.state.camera)):w=null,b.pop(),b.length>0?S=b[b.length-1]:S=null};function wu(A,H,$,Y){if(A.visible===!1)return;if(A.layers.test(H.layers)){if(A.isGroup)$=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(H);else if(A.isLight)w.pushLight(A),A.castShadow&&w.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){Y&&Ge.setFromMatrixPosition(A.matrixWorld).applyMatrix4(_e);const ve=Se.update(A),me=A.material;me.visible&&S.push(A,ve,me,$,Ge.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){const ve=Se.update(A),me=A.material;if(Y&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ge.copy(A.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),Ge.copy(ve.boundingSphere.center)),Ge.applyMatrix4(A.matrixWorld).applyMatrix4(_e)),Array.isArray(me)){const be=ve.groups;for(let Ce=0,Ye=be.length;Ce<Ye;Ce++){const Je=be[Ce],Ie=me[Je.materialIndex];Ie&&Ie.visible&&S.push(A,ve,Ie,$,Ge.z,Je)}}else me.visible&&S.push(A,ve,me,$,Ge.z,null)}}const pe=A.children;for(let ve=0,me=pe.length;ve<me;ve++)wu(pe[ve],H,$,Y)}function om(A,H,$,Y){const{opaque:X,transmissive:pe,transparent:ve}=A;w.setupLightsView($),Ae===!0&&le.setGlobalState(T.clippingPlanes,$),Y&&ge.viewport(I.copy(Y)),X.length>0&&$a(X,H,$),pe.length>0&&$a(pe,H,$),ve.length>0&&$a(ve,H,$),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function am(A,H,$,Y){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[Y.id]===void 0){const Ie=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[Y.id]=new Mi(1,1,{generateMipmaps:!0,type:Ie?Ki:bn,minFilter:Bi,samples:Math.max(4,je.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:nt.workingColorSpace})}const pe=w.state.transmissionRenderTarget[Y.id],ve=Y.viewport||I;pe.setSize(ve.z*T.transmissionResolutionScale,ve.w*T.transmissionResolutionScale);const me=T.getRenderTarget(),be=T.getActiveCubeFace(),Ce=T.getActiveMipmapLevel();T.setRenderTarget(pe),T.getClearColor(O),q=T.getClearAlpha(),q<1&&T.setClearColor(16777215,.5),T.clear(),We&&Te.render($);const Ye=T.toneMapping;T.toneMapping=Si;const Je=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),w.setupLightsView(Y),Ae===!0&&le.setGlobalState(T.clippingPlanes,Y),$a(A,$,Y),V.updateMultisampleRenderTarget(pe),V.updateRenderTargetMipmap(pe),it.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let dt=0,It=H.length;dt<It;dt++){const Rt=H[dt],{object:ft,geometry:tn,material:Re,group:Mn}=Rt;if(Re.side===Jn&&ft.layers.test(Y.layers)){const st=Re.side;Re.side=hn,Re.needsUpdate=!0,lm(ft,$,Y,tn,Re,Mn),Re.side=st,Re.needsUpdate=!0,Ie=!0}}Ie===!0&&(V.updateMultisampleRenderTarget(pe),V.updateRenderTargetMipmap(pe))}T.setRenderTarget(me,be,Ce),T.setClearColor(O,q),Je!==void 0&&(Y.viewport=Je),T.toneMapping=Ye}function $a(A,H,$){const Y=H.isScene===!0?H.overrideMaterial:null;for(let X=0,pe=A.length;X<pe;X++){const ve=A[X],{object:me,geometry:be,group:Ce}=ve;let Ye=ve.material;Ye.allowOverride===!0&&Y!==null&&(Ye=Y),me.layers.test($.layers)&&lm(me,H,$,be,Ye,Ce)}}function lm(A,H,$,Y,X,pe){A.onBeforeRender(T,H,$,Y,X,pe),A.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(T,H,$,Y,A,pe),X.transparent===!0&&X.side===Jn&&X.forceSinglePass===!1?(X.side=hn,X.needsUpdate=!0,T.renderBufferDirect($,H,Y,X,A,pe),X.side=$i,X.needsUpdate=!0,T.renderBufferDirect($,H,Y,X,A,pe),X.side=Jn):T.renderBufferDirect($,H,Y,X,A,pe),A.onAfterRender(T,H,$,Y,X,pe)}function Ka(A,H,$){H.isScene!==!0&&(H=Xe);const Y=M.get(A),X=w.state.lights,pe=w.state.shadowsArray,ve=X.state.version,me=ue.getParameters(A,X.state,pe,H,$),be=ue.getProgramCacheKey(me);let Ce=Y.programs;Y.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?H.environment:null,Y.fog=H.fog;const Ye=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;Y.envMap=Q.get(A.envMap||Y.environment,Ye),Y.envMapRotation=Y.environment!==null&&A.envMap===null?H.environmentRotation:A.envMapRotation,Ce===void 0&&(A.addEventListener("dispose",ot),Ce=new Map,Y.programs=Ce);let Je=Ce.get(be);if(Je!==void 0){if(Y.currentProgram===Je&&Y.lightsStateVersion===ve)return um(A,me),Je}else me.uniforms=ue.getUniforms(A),A.onBeforeCompile(me,T),Je=ue.acquireProgram(me,be),Ce.set(be,Je),Y.uniforms=me.uniforms;const Ie=Y.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ie.clippingPlanes=le.uniform),um(A,me),Y.needsLights=hy(A),Y.lightsStateVersion=ve,Y.needsLights&&(Ie.ambientLightColor.value=X.state.ambient,Ie.lightProbe.value=X.state.probe,Ie.directionalLights.value=X.state.directional,Ie.directionalLightShadows.value=X.state.directionalShadow,Ie.spotLights.value=X.state.spot,Ie.spotLightShadows.value=X.state.spotShadow,Ie.rectAreaLights.value=X.state.rectArea,Ie.ltc_1.value=X.state.rectAreaLTC1,Ie.ltc_2.value=X.state.rectAreaLTC2,Ie.pointLights.value=X.state.point,Ie.pointLightShadows.value=X.state.pointShadow,Ie.hemisphereLights.value=X.state.hemi,Ie.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ie.spotLightMatrix.value=X.state.spotLightMatrix,Ie.spotLightMap.value=X.state.spotLightMap,Ie.pointShadowMatrix.value=X.state.pointShadowMatrix),Y.currentProgram=Je,Y.uniformsList=null,Je}function cm(A){if(A.uniformsList===null){const H=A.currentProgram.getUniforms();A.uniformsList=fc.seqWithValue(H.seq,A.uniforms)}return A.uniformsList}function um(A,H){const $=M.get(A);$.outputColorSpace=H.outputColorSpace,$.batching=H.batching,$.batchingColor=H.batchingColor,$.instancing=H.instancing,$.instancingColor=H.instancingColor,$.instancingMorph=H.instancingMorph,$.skinning=H.skinning,$.morphTargets=H.morphTargets,$.morphNormals=H.morphNormals,$.morphColors=H.morphColors,$.morphTargetsCount=H.morphTargetsCount,$.numClippingPlanes=H.numClippingPlanes,$.numIntersection=H.numClipIntersection,$.vertexAlphas=H.vertexAlphas,$.vertexTangents=H.vertexTangents,$.toneMapping=H.toneMapping}function dy(A,H,$,Y,X){H.isScene!==!0&&(H=Xe),V.resetTextureUnits();const pe=H.fog,ve=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial?H.environment:null,me=G===null?T.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:pn,be=Y.isMeshStandardMaterial||Y.isMeshLambertMaterial&&!Y.envMap||Y.isMeshPhongMaterial&&!Y.envMap,Ce=Q.get(Y.envMap||ve,be),Ye=Y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Je=!!$.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ie=!!$.morphAttributes.position,dt=!!$.morphAttributes.normal,It=!!$.morphAttributes.color;let Rt=Si;Y.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Rt=T.toneMapping);const ft=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,tn=ft!==void 0?ft.length:0,Re=M.get(Y),Mn=w.state.lights;if(Ae===!0&&(Ue===!0||A!==F)){const Xt=A===F&&Y.id===W;le.setState(Y,A,Xt)}let st=!1;Y.version===Re.__version?(Re.needsLights&&Re.lightsStateVersion!==Mn.state.version||Re.outputColorSpace!==me||X.isBatchedMesh&&Re.batching===!1||!X.isBatchedMesh&&Re.batching===!0||X.isBatchedMesh&&Re.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Re.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Re.instancing===!1||!X.isInstancedMesh&&Re.instancing===!0||X.isSkinnedMesh&&Re.skinning===!1||!X.isSkinnedMesh&&Re.skinning===!0||X.isInstancedMesh&&Re.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Re.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Re.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Re.instancingMorph===!1&&X.morphTexture!==null||Re.envMap!==Ce||Y.fog===!0&&Re.fog!==pe||Re.numClippingPlanes!==void 0&&(Re.numClippingPlanes!==le.numPlanes||Re.numIntersection!==le.numIntersection)||Re.vertexAlphas!==Ye||Re.vertexTangents!==Je||Re.morphTargets!==Ie||Re.morphNormals!==dt||Re.morphColors!==It||Re.toneMapping!==Rt||Re.morphTargetsCount!==tn)&&(st=!0):(st=!0,Re.__version=Y.version);let Wn=Re.currentProgram;st===!0&&(Wn=Ka(Y,H,X));let li=!1,Nr=!1,ls=!1;const ht=Wn.getUniforms(),Kt=Re.uniforms;if(ge.useProgram(Wn.program)&&(li=!0,Nr=!0,ls=!0),Y.id!==W&&(W=Y.id,Nr=!0),li||F!==A){ge.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ht.setValue(U,"projectionMatrix",A.projectionMatrix),ht.setValue(U,"viewMatrix",A.matrixWorldInverse);const tr=ht.map.cameraPosition;tr!==void 0&&tr.setValue(U,De.setFromMatrixPosition(A.matrixWorld)),je.logarithmicDepthBuffer&&ht.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ht.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),F!==A&&(F=A,Nr=!0,ls=!0)}if(Re.needsLights&&(Mn.state.directionalShadowMap.length>0&&ht.setValue(U,"directionalShadowMap",Mn.state.directionalShadowMap,V),Mn.state.spotShadowMap.length>0&&ht.setValue(U,"spotShadowMap",Mn.state.spotShadowMap,V),Mn.state.pointShadowMap.length>0&&ht.setValue(U,"pointShadowMap",Mn.state.pointShadowMap,V)),X.isSkinnedMesh){ht.setOptional(U,X,"bindMatrix"),ht.setOptional(U,X,"bindMatrixInverse");const Xt=X.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),ht.setValue(U,"boneTexture",Xt.boneTexture,V))}X.isBatchedMesh&&(ht.setOptional(U,X,"batchingTexture"),ht.setValue(U,"batchingTexture",X._matricesTexture,V),ht.setOptional(U,X,"batchingIdTexture"),ht.setValue(U,"batchingIdTexture",X._indirectTexture,V),ht.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&ht.setValue(U,"batchingColorTexture",X._colorsTexture,V));const er=$.morphAttributes;if((er.position!==void 0||er.normal!==void 0||er.color!==void 0)&&xe.update(X,$,Wn),(Nr||Re.receiveShadow!==X.receiveShadow)&&(Re.receiveShadow=X.receiveShadow,ht.setValue(U,"receiveShadow",X.receiveShadow)),(Y.isMeshStandardMaterial||Y.isMeshLambertMaterial||Y.isMeshPhongMaterial)&&Y.envMap===null&&H.environment!==null&&(Kt.envMapIntensity.value=H.environmentIntensity),Kt.dfgLUT!==void 0&&(Kt.dfgLUT.value=QA()),Nr&&(ht.setValue(U,"toneMappingExposure",T.toneMappingExposure),Re.needsLights&&fy(Kt,ls),pe&&Y.fog===!0&&Pe.refreshFogUniforms(Kt,pe),Pe.refreshMaterialUniforms(Kt,Y,Ne,ee,w.state.transmissionRenderTarget[A.id]),fc.upload(U,cm(Re),Kt,V)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(fc.upload(U,cm(Re),Kt,V),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ht.setValue(U,"center",X.center),ht.setValue(U,"modelViewMatrix",X.modelViewMatrix),ht.setValue(U,"normalMatrix",X.normalMatrix),ht.setValue(U,"modelMatrix",X.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Xt=Y.uniformsGroups;for(let tr=0,cs=Xt.length;tr<cs;tr++){const dm=Xt[tr];Me.update(dm,Wn),Me.bind(dm,Wn)}}return Wn}function fy(A,H){A.ambientLightColor.needsUpdate=H,A.lightProbe.needsUpdate=H,A.directionalLights.needsUpdate=H,A.directionalLightShadows.needsUpdate=H,A.pointLights.needsUpdate=H,A.pointLightShadows.needsUpdate=H,A.spotLights.needsUpdate=H,A.spotLightShadows.needsUpdate=H,A.rectAreaLights.needsUpdate=H,A.hemisphereLights.needsUpdate=H}function hy(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(A,H,$){const Y=M.get(A);Y.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),M.get(A.texture).__webglTexture=H,M.get(A.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:$,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,H){const $=M.get(A);$.__webglFramebuffer=H,$.__useDefaultFramebuffer=H===void 0};const py=U.createFramebuffer();this.setRenderTarget=function(A,H=0,$=0){G=A,L=H,z=$;let Y=null,X=!1,pe=!1;if(A){const me=M.get(A);if(me.__useDefaultFramebuffer!==void 0){ge.bindFramebuffer(U.FRAMEBUFFER,me.__webglFramebuffer),I.copy(A.viewport),N.copy(A.scissor),P=A.scissorTest,ge.viewport(I),ge.scissor(N),ge.setScissorTest(P),W=-1;return}else if(me.__webglFramebuffer===void 0)V.setupRenderTarget(A);else if(me.__hasExternalTextures)V.rebindTextures(A,M.get(A.texture).__webglTexture,M.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Ye=A.depthTexture;if(me.__boundDepthTexture!==Ye){if(Ye!==null&&M.has(Ye)&&(A.width!==Ye.image.width||A.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");V.setupDepthRenderbuffer(A)}}const be=A.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(pe=!0);const Ce=M.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ce[H])?Y=Ce[H][$]:Y=Ce[H],X=!0):A.samples>0&&V.useMultisampledRTT(A)===!1?Y=M.get(A).__webglMultisampledFramebuffer:Array.isArray(Ce)?Y=Ce[$]:Y=Ce,I.copy(A.viewport),N.copy(A.scissor),P=A.scissorTest}else I.copy(j).multiplyScalar(Ne).floor(),N.copy(re).multiplyScalar(Ne).floor(),P=ne;if($!==0&&(Y=py),ge.bindFramebuffer(U.FRAMEBUFFER,Y)&&ge.drawBuffers(A,Y),ge.viewport(I),ge.scissor(N),ge.setScissorTest(P),X){const me=M.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,me.__webglTexture,$)}else if(pe){const me=H;for(let be=0;be<A.textures.length;be++){const Ce=M.get(A.textures[be]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+be,Ce.__webglTexture,$,me)}}else if(A!==null&&$!==0){const me=M.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,me.__webglTexture,$)}W=-1},this.readRenderTargetPixels=function(A,H,$,Y,X,pe,ve,me=0){if(!(A&&A.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){ge.bindFramebuffer(U.FRAMEBUFFER,be);try{const Ce=A.textures[me],Ye=Ce.format,Je=Ce.type;if(A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+me),!je.textureFormatReadable(Ye)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!je.textureTypeReadable(Je)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=A.width-Y&&$>=0&&$<=A.height-X&&U.readPixels(H,$,Y,X,de.convert(Ye),de.convert(Je),pe)}finally{const Ce=G!==null?M.get(G).__webglFramebuffer:null;ge.bindFramebuffer(U.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(A,H,$,Y,X,pe,ve,me=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=M.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be)if(H>=0&&H<=A.width-Y&&$>=0&&$<=A.height-X){ge.bindFramebuffer(U.FRAMEBUFFER,be);const Ce=A.textures[me],Ye=Ce.format,Je=Ce.type;if(A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+me),!je.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!je.textureTypeReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ie=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ie),U.bufferData(U.PIXEL_PACK_BUFFER,pe.byteLength,U.STREAM_READ),U.readPixels(H,$,Y,X,de.convert(Ye),de.convert(Je),0);const dt=G!==null?M.get(G).__webglFramebuffer:null;ge.bindFramebuffer(U.FRAMEBUFFER,dt);const It=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await C1(U,It,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ie),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,pe),U.deleteBuffer(Ie),U.deleteSync(It),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,H=null,$=0){const Y=Math.pow(2,-$),X=Math.floor(A.image.width*Y),pe=Math.floor(A.image.height*Y),ve=H!==null?H.x:0,me=H!==null?H.y:0;V.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,$,0,0,ve,me,X,pe),ge.unbindTexture()};const my=U.createFramebuffer(),gy=U.createFramebuffer();this.copyTextureToTexture=function(A,H,$=null,Y=null,X=0,pe=0){let ve,me,be,Ce,Ye,Je,Ie,dt,It;const Rt=A.isCompressedTexture?A.mipmaps[pe]:A.image;if($!==null)ve=$.max.x-$.min.x,me=$.max.y-$.min.y,be=$.isBox3?$.max.z-$.min.z:1,Ce=$.min.x,Ye=$.min.y,Je=$.isBox3?$.min.z:0;else{const Kt=Math.pow(2,-X);ve=Math.floor(Rt.width*Kt),me=Math.floor(Rt.height*Kt),A.isDataArrayTexture?be=Rt.depth:A.isData3DTexture?be=Math.floor(Rt.depth*Kt):be=1,Ce=0,Ye=0,Je=0}Y!==null?(Ie=Y.x,dt=Y.y,It=Y.z):(Ie=0,dt=0,It=0);const ft=de.convert(H.format),tn=de.convert(H.type);let Re;H.isData3DTexture?(V.setTexture3D(H,0),Re=U.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(V.setTexture2DArray(H,0),Re=U.TEXTURE_2D_ARRAY):(V.setTexture2D(H,0),Re=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);const Mn=U.getParameter(U.UNPACK_ROW_LENGTH),st=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Wn=U.getParameter(U.UNPACK_SKIP_PIXELS),li=U.getParameter(U.UNPACK_SKIP_ROWS),Nr=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Rt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Rt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ce),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ye),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Je);const ls=A.isDataArrayTexture||A.isData3DTexture,ht=H.isDataArrayTexture||H.isData3DTexture;if(A.isDepthTexture){const Kt=M.get(A),er=M.get(H),Xt=M.get(Kt.__renderTarget),tr=M.get(er.__renderTarget);ge.bindFramebuffer(U.READ_FRAMEBUFFER,Xt.__webglFramebuffer),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,tr.__webglFramebuffer);for(let cs=0;cs<be;cs++)ls&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,M.get(A).__webglTexture,X,Je+cs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,M.get(H).__webglTexture,pe,It+cs)),U.blitFramebuffer(Ce,Ye,ve,me,Ie,dt,ve,me,U.DEPTH_BUFFER_BIT,U.NEAREST);ge.bindFramebuffer(U.READ_FRAMEBUFFER,null),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||M.has(A)){const Kt=M.get(A),er=M.get(H);ge.bindFramebuffer(U.READ_FRAMEBUFFER,my),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,gy);for(let Xt=0;Xt<be;Xt++)ls?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Kt.__webglTexture,X,Je+Xt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Kt.__webglTexture,X),ht?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,er.__webglTexture,pe,It+Xt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,er.__webglTexture,pe),X!==0?U.blitFramebuffer(Ce,Ye,ve,me,Ie,dt,ve,me,U.COLOR_BUFFER_BIT,U.NEAREST):ht?U.copyTexSubImage3D(Re,pe,Ie,dt,It+Xt,Ce,Ye,ve,me):U.copyTexSubImage2D(Re,pe,Ie,dt,Ce,Ye,ve,me);ge.bindFramebuffer(U.READ_FRAMEBUFFER,null),ge.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ht?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Re,pe,Ie,dt,It,ve,me,be,ft,tn,Rt.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(Re,pe,Ie,dt,It,ve,me,be,ft,Rt.data):U.texSubImage3D(Re,pe,Ie,dt,It,ve,me,be,ft,tn,Rt):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,pe,Ie,dt,ve,me,ft,tn,Rt.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,pe,Ie,dt,Rt.width,Rt.height,ft,Rt.data):U.texSubImage2D(U.TEXTURE_2D,pe,Ie,dt,ve,me,ft,tn,Rt);U.pixelStorei(U.UNPACK_ROW_LENGTH,Mn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Wn),U.pixelStorei(U.UNPACK_SKIP_ROWS,li),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Nr),pe===0&&H.generateMipmaps&&U.generateMipmap(Re),ge.unbindTexture()},this.initRenderTarget=function(A){M.get(A).__webglFramebuffer===void 0&&V.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?V.setTextureCube(A,0):A.isData3DTexture?V.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?V.setTexture2DArray(A,0):V.setTexture2D(A,0),ge.unbindTexture()},this.resetState=function(){L=0,z=0,G=null,ge.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}}function z0(n,e){if(e===x1)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===wh||e===Rv){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===wh)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}function eR(n){const e=new Map,t=new Map,i=n.clone();return Qv(n,i,function(r,s){e.set(s,r),t.set(r,s)}),i.traverse(function(r){if(!r.isSkinnedMesh)return;const s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(l){return t.get(l)}),s.bind(s.skeleton,s.bindMatrix)}),i}function Qv(n,e,t){t(n,e);for(let i=0;i<n.children.length;i++)Qv(n.children[i],e.children[i],t)}class ey extends bo{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new sR(t)}),this.register(function(t){return new oR(t)}),this.register(function(t){return new mR(t)}),this.register(function(t){return new gR(t)}),this.register(function(t){return new xR(t)}),this.register(function(t){return new lR(t)}),this.register(function(t){return new cR(t)}),this.register(function(t){return new uR(t)}),this.register(function(t){return new dR(t)}),this.register(function(t){return new rR(t)}),this.register(function(t){return new fR(t)}),this.register(function(t){return new aR(t)}),this.register(function(t){return new pR(t)}),this.register(function(t){return new hR(t)}),this.register(function(t){return new nR(t)}),this.register(function(t){return new V0(t,Qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new V0(t,Qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new _R(t)})}load(e,t,i,r){const s=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=ma.extractUrlBase(e);o=ma.resolveURL(c,this.path)}else o=ma.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new jv(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(d){t(d),s.manager.itemEnd(e)},a)}catch(d){a(d)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===ty){try{o[Qe.KHR_BINARY_GLTF]=new vR(e)}catch(f){r&&r(f);return}s=JSON.parse(o[Qe.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new LR(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let d=0;d<this.pluginCallbacks.length;d++){const f=this.pluginCallbacks[d](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let d=0;d<s.extensionsUsed.length;++d){const f=s.extensionsUsed[d],u=s.extensionsRequired||[];switch(f){case Qe.KHR_MATERIALS_UNLIT:o[f]=new iR;break;case Qe.KHR_DRACO_MESH_COMPRESSION:o[f]=new yR(s,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:o[f]=new SR;break;case Qe.KHR_MESH_QUANTIZATION:o[f]=new MR;break;default:u.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function tR(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}function Nt(n,e,t){const i=n.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}const Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class nR{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const d=new Be(16777215);l.color!==void 0&&d.setRGB(l.color[0],l.color[1],l.color[2],pn);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Js(d),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new xr(d),c.distance=f;break;case"spot":c=new jE(d),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),pi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class iR{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return ei}extendParams(e,t,i){const r=[];e.color=new Be(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],pn),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,kt))}return Promise.all(r)}}class rR{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}}class sR{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?bi:null}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(r.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){const s=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ve(s,s)}return Promise.all(r)}}class oR{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?bi:null}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}}class aR{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?bi:null}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(r)}}class lR{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?bi:null}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];if(t.sheenColor=new Be(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){const s=i.sheenColorFactor;t.sheenColor.setRGB(s[0],s[1],s[2],pn)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,kt)),i.sheenRoughnessTexture!==void 0&&r.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(r)}}class cR{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?bi:null}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&r.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(r)}}class uR{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?bi:null}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&r.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;const s=i.attenuationColor||[1,1,1];return t.attenuationColor=new Be().setRGB(s[0],s[1],s[2],pn),Promise.all(r)}}class dR{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?bi:null}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5),Promise.resolve()}}class fR{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?bi:null}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));const s=i.specularColorFactor||[1,1,1];return t.specularColor=new Be().setRGB(s[0],s[1],s[2],pn),i.specularColorTexture!==void 0&&r.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,kt)),Promise.all(r)}}class hR{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?bi:null}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&r.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(r)}}class pR{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Nt(this.parser,e,this.name)!==null?bi:null}extendMaterialParams(e,t){const i=Nt(this.parser,e,this.name);if(i===null)return Promise.resolve();const r=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&r.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(r)}}class mR{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class gR{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class xR{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return i.loadTextureImage(e,o.source,l)}}class V0{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,d=r.count,f=r.byteStride,u=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(d,f,u,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(d*f);return o.decodeGltfBuffer(new Uint8Array(p),d,f,u,r.mode,r.filter),p})})}else return null}}class _R{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==Nn.TRIANGLES&&c.mode!==Nn.TRIANGLE_STRIP&&c.mode!==Nn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(d=>(l[c]=d,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const d=c.pop(),f=d.isGroup?d.children:[d],u=c[0].count,p=[];for(const g of f){const v=new $e,x=new k,h=new Qi,m=new k(1,1,1),_=new Bv(g.geometry,g.material,u);for(let S=0;S<u;S++)l.TRANSLATION&&x.fromBufferAttribute(l.TRANSLATION,S),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,S),l.SCALE&&m.fromBufferAttribute(l.SCALE,S),_.setMatrixAt(S,v.compose(x,h,m));for(const S in l)if(S==="_COLOR_0"){const w=l[S];_.instanceColor=new bh(w.array,w.itemSize,w.normalized)}else S!=="TRANSLATION"&&S!=="ROTATION"&&S!=="SCALE"&&g.geometry.setAttribute(S,l[S]);vt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),p.push(_)}return d.isGroup?(d.clear(),d.add(...p),d):p[0]}))}}const ty="glTF",qo=12,H0={JSON:1313821514,BIN:5130562};class vR{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,qo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==ty)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-qo,s=new DataView(e,qo);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===H0.JSON){const c=new Uint8Array(e,qo+o,a);this.content=i.decode(c)}else if(l===H0.BIN){const c=qo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class yR{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const d in o){const f=Ih[d]||d.toLowerCase();a[f]=o[d]}for(const d in e.attributes){const f=Ih[d]||d.toLowerCase();if(o[d]!==void 0){const u=i.accessors[e.attributes[d]],p=Qs[u.componentType];c[f]=p.name,l[f]=u.normalized===!0}}return t.getDependency("bufferView",s).then(function(d){return new Promise(function(f,u){r.decodeDracoFile(d,function(p){for(const g in p.attributes){const v=p.attributes[g],x=l[g];x!==void 0&&(v.normalized=x)}f(p)},a,c,pn,u)})})}}class SR{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class MR{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}}class ny extends Eo{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,d=r-t,f=(i-t)/d,u=f*f,p=u*f,g=e*c,v=g-c,x=-2*p+3*u,h=p-u,m=1-x,_=h-u+f;for(let S=0;S!==a;S++){const w=o[v+S+a],b=o[v+S+l]*d,R=o[g+S+a],y=o[g+S]*d;s[S]=m*w+_*b+x*R+h*y}return s}}const ER=new Qi;class wR extends ny{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return ER.fromArray(s).normalize().toArray(s),s}}const Nn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},G0={9728:zt,9729:Vt,9984:Sv,9985:ac,9986:ta,9987:Bi},W0={33071:xi,33648:Bc,10497:co},Nd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ih={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},cr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},TR={CUBICSPLINE:void 0,LINEAR:Fa,STEP:Ua},Dd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function bR(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new ss({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:$i})),n.DefaultMaterial}function zr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function pi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function AR(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,d=e.length;c<d;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,d=e.length;c<d;c++){const f=e[c];if(i){const u=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(u)}if(r){const u=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(u)}if(s){const u=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(u)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const d=c[0],f=c[1],u=c[2];return i&&(n.morphAttributes.position=d),r&&(n.morphAttributes.normal=f),s&&(n.morphAttributes.color=u),n.morphTargetsRelative=!0,n})}function RR(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function CR(n){let e;const t=n.extensions&&n.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ud(t.attributes):e=n.indices+":"+Ud(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Ud(n.targets[i]);return e}function Ud(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Lh(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function PR(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":n.search(/\.ktx2($|\?)/i)>0||n.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const IR=new $e;class LR{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new tR,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=-1,s=!1,o=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){const a=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);r=i&&l?parseInt(l[1],10):-1,s=a.indexOf("Firefox")>-1,o=s?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&r<17||s&&o<98?this.textureLoader=new GE(this.options.manager):this.textureLoader=new $E(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jv(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return zr(s,a,r),pi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,d]of o.children.entries())s(d,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(ma.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=Nd[r.type],a=Qs[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Gt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=Nd[r.type],c=Qs[r.componentType],d=c.BYTES_PER_ELEMENT,f=d*l,u=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let v,x;if(p&&p!==f){const h=Math.floor(u/p),m="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let _=t.cache.get(m);_||(v=new c(a,h*p,r.count*p/d),_=new Uv(v,p/d),t.cache.add(m,_)),x=new Ba(_,l,u%p/d,g)}else a===null?v=new c(r.count*l):v=new c(a,u,r.count*l),x=new Gt(v,l,g);if(r.sparse!==void 0){const h=Nd.SCALAR,m=Qs[r.sparse.indices.componentType],_=r.sparse.indices.byteOffset||0,S=r.sparse.values.byteOffset||0,w=new m(o[1],_,r.sparse.count*h),b=new c(o[2],S,r.sparse.count*l);a!==null&&(x=new Gt(x.array.slice(),x.itemSize,x.normalized)),x.normalized=!1;for(let R=0,y=w.length;R<y;R++){const T=w[R];if(x.setX(T,b[R*l]),l>=2&&x.setY(T,b[R*l+1]),l>=3&&x.setZ(T,b[R*l+2]),l>=4&&x.setW(T,b[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}x.normalized=g}return x})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(d){d.flipY=!1,d.name=o.name||a.name||"",d.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(d.name=a.uri);const u=(s.samplers||{})[o.sampler]||{};return d.magFilter=G0[u.magFilter]||Vt,d.minFilter=G0[u.minFilter]||Bi,d.wrapS=W0[u.wrapS]||co,d.wrapT=W0[u.wrapT]||co,d.generateMipmaps=!d.isCompressedTexture&&d.minFilter!==zt&&d.minFilter!==Vt,r.associations.set(d,{textures:e}),d}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const u=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(u),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const d=Promise.resolve(l).then(function(f){return new Promise(function(u,p){let g=u;t.isImageBitmapLoader===!0&&(g=function(v){const x=new Ht(v);x.needsUpdate=!0,u(x)}),t.load(ma.resolveURL(f,s.path),g,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),pi(f,o),f.userData.mimeType=o.mimeType||PR(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=d,d}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[Qe.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Va,Vn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new ho,Vn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return ss}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Qe.KHR_MATERIALS_UNLIT]){const f=r[Qe.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new Be(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const u=f.baseColorFactor;a.color.setRGB(u[0],u[1],u[2],pn),a.opacity=u[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,kt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=Jn);const d=s.alphaMode||Dd.OPAQUE;if(d===Dd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,d===Dd.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==ei&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ve(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==ei&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==ei){const f=s.emissiveFactor;a.emissive=new Be().setRGB(f[0],f[1],f[2],pn)}return s.emissiveTexture!==void 0&&o!==ei&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,kt)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),pi(f,s),t.associations.set(f,{materials:e}),s.extensions&&zr(r,f,s),f})}createUniqueName(e){const t=ct.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return j0(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],d=CR(c),f=r[d];if(f)o.push(f.promise);else{let u;c.extensions&&c.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?u=s(c):u=j0(new Mt,c,t),r[d]={primitive:c,promise:u},o.push(u)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const d=o[l].material===void 0?bR(this.cache):this.getDependency("material",o[l].material);a.push(d)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),d=l[l.length-1],f=[];for(let p=0,g=d.length;p<g;p++){const v=d[p],x=o[p];let h;const m=c[p];if(x.mode===Nn.TRIANGLES||x.mode===Nn.TRIANGLE_STRIP||x.mode===Nn.TRIANGLE_FAN||x.mode===void 0)h=s.isSkinnedMesh===!0?new pE(v,m):new Pt(v,m),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),x.mode===Nn.TRIANGLE_STRIP?h.geometry=z0(h.geometry,Rv):x.mode===Nn.TRIANGLE_FAN&&(h.geometry=z0(h.geometry,wh));else if(x.mode===Nn.LINES)h=new Ah(v,m);else if(x.mode===Nn.LINE_STRIP)h=new za(v,m);else if(x.mode===Nn.LINE_LOOP)h=new yE(v,m);else if(x.mode===Nn.POINTS)h=new jc(v,m);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+x.mode);Object.keys(h.geometry.morphAttributes).length>0&&RR(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),pi(h,s),x.extensions&&zr(r,h,x),t.assignFinalMaterial(h),f.push(h)}for(let p=0,g=f.length;p<g;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return s.extensions&&zr(r,f[0],s),f[0];const u=new zi;s.extensions&&zr(r,u,s),t.associations.set(u,{meshes:e});for(let p=0,g=f.length;p<g;p++)u.add(f[p]);return u})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Jt(Y1.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new vu(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),pi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,d=o.length;c<d;c++){const f=o[c];if(f){a.push(f);const u=new $e;s!==null&&u.fromArray(s.array,c*16),l.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Yp(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],d=[];for(let f=0,u=r.channels.length;f<u;f++){const p=r.channels[f],g=r.samplers[p.sampler],v=p.target,x=v.node,h=r.parameters!==void 0?r.parameters[g.input]:g.input,m=r.parameters!==void 0?r.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",x)),a.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",m)),c.push(g),d.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(d)]).then(function(f){const u=f[0],p=f[1],g=f[2],v=f[3],x=f[4],h=[];for(let _=0,S=u.length;_<S;_++){const w=u[_],b=p[_],R=g[_],y=v[_],T=x[_];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();const D=i._createAnimationTracks(w,b,R,y,T);if(D)for(let L=0;L<D.length;L++)h.push(D[L])}const m=new FE(s,void 0,h);return pi(m,r),m})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,d=a.length;c<d;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const d=c[0],f=c[1],u=c[2];u!==null&&d.traverse(function(p){p.isSkinnedMesh&&p.bind(u,IR)});for(let p=0,g=f.length;p<g;p++)d.add(f[p]);if(d.userData.pivot!==void 0&&f.length>0){const p=d.userData.pivot,g=f[0];d.pivot=new k().fromArray(p),d.position.x-=p[0],d.position.y-=p[1],d.position.z-=p[2],g.position.set(0,0,0),delete d.userData.pivot}return d})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let d;if(s.isBone===!0?d=new kv:c.length>1?d=new zi:c.length===1?d=c[0]:d=new vt,d!==c[0])for(let f=0,u=c.length;f<u;f++)d.add(c[f]);if(s.name&&(d.userData.name=s.name,d.name=o),pi(d,s),s.extensions&&zr(i,d,s),s.matrix!==void 0){const f=new $e;f.fromArray(s.matrix),d.applyMatrix4(f)}else s.translation!==void 0&&d.position.fromArray(s.translation),s.rotation!==void 0&&d.quaternion.fromArray(s.rotation),s.scale!==void 0&&d.scale.fromArray(s.scale);if(!r.associations.has(d))r.associations.set(d,{});else if(s.mesh!==void 0&&r.meshCache.refs[s.mesh]>1){const f=r.associations.get(d);r.associations.set(d,{...f})}return r.associations.get(d).nodes=e,d}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new zi;i.name&&(s.name=r.createUniqueName(i.name)),pi(s,i),i.extensions&&zr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let d=0,f=l.length;d<f;d++){const u=l[d];u.parent!==null?s.add(eR(u)):s.add(u)}const c=d=>{const f=new Map;for(const[u,p]of r.associations)(u instanceof Vn||u instanceof Ht)&&f.set(u,p);return d.traverse(u=>{const p=r.associations.get(u);p!=null&&f.set(u,p)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];cr[s.path]===cr.weights?e.traverse(function(u){u.morphTargetInfluences&&l.push(u.name?u.name:u.uuid)}):l.push(a);let c;switch(cr[s.path]){case cr.weights:c=mo;break;case cr.rotation:c=go;break;case cr.translation:case cr.scale:c=xo;break;default:switch(i.itemSize){case 1:c=mo;break;case 2:case 3:default:c=xo;break}break}const d=r.interpolation!==void 0?TR[r.interpolation]:Fa,f=this._getArrayFromAccessor(i);for(let u=0,p=l.length;u<p;u++){const g=new c(l[u]+"."+cr[s.path],t.array,f,d);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Lh(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof go?wR:ny;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function NR(n,e,t){const i=e.attributes,r=new oi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new k(l[0],l[1],l[2]),new k(c[0],c[1],c[2])),a.normalized){const d=Lh(Qs[a.componentType]);r.min.multiplyScalar(d),r.max.multiplyScalar(d)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new k,l=new k;for(let c=0,d=s.length;c<d;c++){const f=s[c];if(f.POSITION!==void 0){const u=t.json.accessors[f.POSITION],p=u.min,g=u.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),u.normalized){const v=Lh(Qs[u.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new Ti;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function j0(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Ih[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return nt.workingColorSpace!==pn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${nt.workingColorSpace}" not supported.`),pi(n,e),NR(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?AR(n,e.targets,t):n})}const DR=`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');

  .lp-root {
    position: fixed; inset: 0; background: #888888;
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

  /* Vignette — grey edges like Sketchfab studio */
  .lp-vignette {
    position: absolute; inset: 0; z-index: 2; pointer-events: none;
    background: radial-gradient(ellipse at 50% 40%, rgba(0,0,0,0.0) 30%, rgba(60,60,60,0.45) 100%);
  }

  /* Water shimmer overlay */
  .lp-water {
    position: absolute; inset: 0; z-index: 3; pointer-events: none;
    background: repeating-linear-gradient(
      175deg,
      transparent 0px,
      transparent 8px,
      rgba(0,160,220,0.015) 8px,
      rgba(0,160,220,0.015) 9px
    );
    animation: lpWaterShimmer 6s ease-in-out infinite alternate;
  }
  @keyframes lpWaterShimmer {
    0%   { opacity: 0.4; transform: skewX(0deg); }
    100% { opacity: 0.8; transform: skewX(0.3deg); }
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
    font-size: 13px; color: rgba(255,255,255,0.75);
    letter-spacing: 1px; margin-bottom: 36px;
    max-width: 380px; margin-left: auto; margin-right: auto;
    text-shadow: 0 1px 4px rgba(0,0,0,0.5);
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
    text-transform: uppercase; color: rgba(255,255,255,0.7);
    text-shadow: 0 1px 3px rgba(0,0,0,0.4);
  }

  /* Click hint */
  .lp-hint {
    position: absolute; bottom: 28px; right: 32px; z-index: 10;
    font-size: 9px; letter-spacing: 2px; text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    text-shadow: 0 1px 3px rgba(0,0,0,0.3);
    animation: lpFadeIn 2s ease 1.5s both;
    pointer-events: none;
  }

  /* Grid corner decorations */
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

  /* Loading spinner */
  .lp-loader {
    position: absolute; inset: 0; z-index: 50;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    background: #14141e;
    transition: opacity 0.8s ease;
  }
  .lp-loader.hidden { opacity: 0; pointer-events: none; }
  .lp-loader-ring {
    width: 52px; height: 52px;
    border: 2px solid rgba(34,197,94,0.15);
    border-top-color: #22c55e;
    border-radius: 50%;
    animation: lpSpin 0.9s linear infinite;
    margin-bottom: 18px;
  }
  .lp-loader-text {
    font-size: 9px; letter-spacing: 4px; text-transform: uppercase;
    color: rgba(34,197,94,0.5);
  }
  .lp-loader-bar {
    width: 160px; height: 2px;
    background: rgba(34,197,94,0.1);
    border-radius: 2px; margin-top: 14px; overflow: hidden;
  }
  .lp-loader-fill {
    height: 100%; background: #22c55e;
    border-radius: 2px;
    box-shadow: 0 0 8px #22c55e;
    transition: width 0.3s ease;
  }

  /* Fade-out transition */
  .lp-fadeout {
    position: absolute; inset: 0; z-index: 100;
    background: #14141e; opacity: 0;
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
  @keyframes lpSpin {
    to { transform: rotate(360deg); }
  }
`;function UR({onEnter:n}){const e=ie.useRef(null),t=ie.useRef(null),i=ie.useRef(null),r=ie.useRef(null),[s,o]=ie.useState(!1);function a(){s||(o(!0),t.current&&t.current.classList.add("active"),setTimeout(n,650))}return ie.useEffect(()=>{const l=e.current;if(!l)return;const c=new Qp({antialias:!0,alpha:!1});c.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),c.setSize(l.offsetWidth,l.offsetHeight),c.setClearColor(8947848,1),c.shadowMap.enabled=!0,c.outputColorSpace=kt,c.toneMapping=Lp,c.toneMappingExposure=.9,l.appendChild(c.domElement);const d=new qc(c);d.compileEquirectangularShader();const f=document.createElement("canvas");f.width=64,f.height=32;const u=f.getContext("2d"),p=u.createLinearGradient(0,0,0,32);p.addColorStop(0,"#b8b8b8"),p.addColorStop(.4,"#888888"),p.addColorStop(1,"#555555"),u.fillStyle=p,u.fillRect(0,0,64,32);const g=new u0(f);g.mapping=oc;const v=d.fromEquirectangular(g).texture;d.dispose(),g.dispose();const x=new mu;x.fog=new pu(8947848,.012),x.environment=v;const h=new Jt(42,l.offsetWidth/l.offsetHeight,.1,300);h.position.set(0,0,13),h.lookAt(0,0,0);const m=new Js(16777215,2);m.position.set(-6,8,10),x.add(m);const _=new Js(13691135,.8);_.position.set(8,2,-4),x.add(_);const S=new Js(16777215,.4);S.position.set(0,2,12),x.add(S);const w=new xr(16720384,4,12);w.position.set(0,0,8),x.add(w);const b=new xr(16716032,3,7);b.position.set(0,0,5.5),x.add(b);const R=30,y=2,T=[];for(let _e=-R;_e<=R;_e+=y)T.push(new k(-R,0,_e),new k(R,0,_e)),T.push(new k(_e,0,-R),new k(_e,0,R));const D=new Mt().setFromPoints(T),L=new ho({color:4473924,transparent:!0,opacity:.25}),z=new Ah(D,L);z.position.y=-5,x.add(z);const G=[new k(-R,0,0),new k(R,0,0),new k(0,0,-R),new k(0,0,R)],W=new Ah(new Mt().setFromPoints(G),new ho({color:3355443,transparent:!0,opacity:.4}));W.position.y=-5,x.add(W);const F=200,I=new Float32Array(F*3),N=new Float32Array(F),P=new Float32Array(F*3);for(let _e=0;_e<F;_e++){I[_e*3]=(Math.random()-.5)*40,I[_e*3+1]=(Math.random()-.5)*24-6,I[_e*3+2]=(Math.random()-.5)*30-5,N[_e]=.02+Math.random()*.04;const De=Math.random();De<.35?(P[_e*3]=0,P[_e*3+1]=.71,P[_e*3+2]=.85):De<.6?(P[_e*3]=0,P[_e*3+1]=.47,P[_e*3+2]=.85):De<.78?(P[_e*3]=.13,P[_e*3+1]=.77,P[_e*3+2]=.37):De<.9?(P[_e*3]=1,P[_e*3+1]=.42,P[_e*3+2]=.21):(P[_e*3]=.86,P[_e*3+1]=.15,P[_e*3+2]=.09)}const O=new Mt;O.setAttribute("position",new Gt(I,3)),O.setAttribute("color",new Gt(P,3));const q=new jc(O,new Va({size:.09,sizeAttenuation:!0,vertexColors:!0,transparent:!0,opacity:.7}));x.add(q);const K=[[-14,8,-20,2.2],[10,12,-25,2.8],[18,4,-22,1.5],[-8,-4,-18,1.2],[5,16,-28,3.2],[-18,14,-30,2]];for(const[_e,De,Ge,Xe]of K){const We=new Pt(new $p(Xe,8,8),new ei({color:8947848,transparent:!0,opacity:.06+Math.random()*.04}));We.position.set(_e,De,Ge),x.add(We)}let ee=null;new ey().load("/eden-pipeline/robotic_eye.glb",_e=>{const De=_e.scene;De.traverse(it=>{if(it.isMesh){const je=it;je.castShadow=!0,je.receiveShadow=!0,je.name,je.name,(Array.isArray(je.material)?je.material:[je.material]).forEach(C=>{C instanceof ss&&(C.envMap=v,C.envMapIntensity=.3,je.name==="Light Low Poly_0"?(C.emissive.set(16717824),C.emissiveIntensity=6,C.color.set(16717824),C.roughness=.2,C.metalness=0,C.transparent=!1,C.depthWrite=!0):je.name==="Lens Low Poly_0"?(C.color.set(328965),C.roughness=.04,C.metalness=.15,C.envMapIntensity=2.5):je.name==="Circle Low Poly_0"?(C.transparent=!0,C.opacity=.55,C.color.set(1118481),C.roughness=.35,C.metalness=.6,C.side=Jn,C.depthWrite=!1):je.name.startsWith("Eyeball Segment Low Poly")&&(C.transparent=!0,C.opacity=0,C.depthWrite=!1,C.visible=!1),C.needsUpdate=!0)})}});const Ge=new oi().setFromObject(De),Xe=Ge.getSize(new k),U=8/Math.max(Xe.x,Xe.y,Xe.z);De.scale.setScalar(U),Ge.setFromObject(De);const At=Ge.getCenter(new k);De.position.sub(At),ee=new zi,ee.add(De),x.add(ee),(()=>{const je=document.createElement("canvas");je.width=512,je.height=512;const ge=je.getContext("2d"),C=512/2,M=512/2,V=512*.3,Q=[[80,.05,"rgba(220,10,0,1)"],[55,.1,"rgba(230,15,0,1)"],[36,.2,"rgba(240,20,0,1)"],[22,.42,"rgba(245,25,0,1)"],[12,.8,"rgba(255,30,0,1)"],[5,1,"rgba(255,55,15,1)"]];for(const[Pe,Fe,se]of Q)ge.beginPath(),ge.arc(C,M,V,0,Math.PI*2),ge.strokeStyle=se,ge.lineWidth=Pe,ge.globalAlpha=Fe,ge.stroke();ge.globalAlpha=1;const te=new u0(je),Z=new Fv({map:te,transparent:!0,blending:Ff,depthWrite:!1,depthTest:!1}),Se=new dE(Z),ue=3.2;Se.scale.set(ue,ue,1),Se.position.set(0,.15,0),ee.add(Se)})(),i.current&&i.current.classList.add("hidden")},_e=>{if(_e.total>0&&r.current){const De=Math.round(_e.loaded/_e.total*100);r.current.style.width=De+"%"}},_e=>{console.error("[LandingPage] GLB load error:",_e),i.current&&i.current.classList.add("hidden")});const ze={x:0,y:0},he=_e=>{ze.x=(_e.clientX/window.innerWidth-.5)*2,ze.y=(_e.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",he);const j=()=>{h.aspect=l.offsetWidth/l.offsetHeight,h.updateProjectionMatrix(),c.setSize(l.offsetWidth,l.offsetHeight)};window.addEventListener("resize",j);let re,ne=0,ke=performance.now();const Ae={x:0,y:0};function Ue(){re=requestAnimationFrame(Ue);const _e=performance.now(),De=Math.min((_e-ke)/1e3,.05);ne+=De,ke=_e,ee&&(Ae.y+=(ze.x*.5-Ae.y)*.04,Ae.x+=(-ze.y*.3-Ae.x)*.04,ee.rotation.y=Ae.y+Math.sin(ne*.4)*.18,ee.rotation.x=Ae.x+Math.sin(ne*.3)*.06,ee.position.y=Math.sin(ne*.8)*.25),w.intensity=4+Math.sin(ne*3.2)*1.5,b.intensity=3+Math.sin(ne*3.2+1)*1;const Ge=O.attributes.position.array;for(let Xe=0;Xe<F;Xe++)Ge[Xe*3+1]+=N[Xe],Ge[Xe*3+1]>12&&(Ge[Xe*3+1]=-10,Ge[Xe*3]=(Math.random()-.5)*40,Ge[Xe*3+2]=(Math.random()-.5)*30-5);O.attributes.position.needsUpdate=!0,h.position.x=Math.sin(ne*.12)*.5,h.position.y=Math.sin(ne*.18)*.3,h.lookAt(0,0,0),c.render(x,h)}return Ue(),()=>{cancelAnimationFrame(re),window.removeEventListener("mousemove",he),window.removeEventListener("resize",j),c.dispose(),l.contains(c.domElement)&&l.removeChild(c.domElement)}},[]),E.jsxs(E.Fragment,{children:[E.jsx("style",{children:DR}),E.jsxs("div",{className:"lp-root",onClick:a,children:[E.jsx("div",{ref:e,style:{position:"absolute",inset:0,zIndex:1}}),E.jsx("div",{className:"lp-scanlines"}),E.jsx("div",{className:"lp-vignette"}),E.jsx("div",{className:"lp-water"}),E.jsx("div",{className:"lp-grid-deco"}),E.jsx("div",{className:"lp-grid-deco-bl"}),E.jsxs("div",{ref:i,className:"lp-loader",children:[E.jsx("div",{className:"lp-loader-ring"}),E.jsx("div",{className:"lp-loader-text",children:"Initializing System"}),E.jsx("div",{className:"lp-loader-bar",children:E.jsx("div",{ref:r,className:"lp-loader-fill",style:{width:"0%"}})})]}),E.jsxs("div",{className:"lp-badge",children:[E.jsx("div",{className:"lp-badge-cross",children:E.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",children:[E.jsx("rect",{x:"8",y:"0",width:"4",height:"20",rx:"1.5",fill:"#dc2626",fillOpacity:"0.8"}),E.jsx("rect",{x:"0",y:"8",width:"20",height:"4",rx:"1.5",fill:"#dc2626",fillOpacity:"0.8"})]})}),E.jsx("span",{className:"lp-badge-text",children:"Eden Care — Medical AI"})]}),E.jsx("div",{className:"lp-overlay",children:E.jsxs("div",{className:"lp-brand",children:[E.jsx("div",{className:"lp-eyebrow",children:"by Eden Care"}),E.jsx("div",{className:"lp-title",children:"GINJA AI"}),E.jsx("div",{className:"lp-subtitle",children:"Medical Code Intelligence"}),E.jsx("div",{className:"lp-desc",children:"Insurance catalog processing pipeline · 7 AI modules · SHA-256 secured"}),E.jsxs("button",{className:"lp-btn",onClick:l=>{l.stopPropagation(),a()},children:[E.jsx("span",{className:"lp-btn-dot"}),"ENTER SYSTEM"]})]})}),E.jsx("div",{className:"lp-hint",children:"Click anywhere to enter"}),E.jsx("div",{ref:t,className:"lp-fadeout"})]})]})}const iy="Muthigani",FR=[{username:"Muthigani",passwordHash:"c62b2152b8513d4c0c03ca8ba2716a45dc7e5227c1b051e50c765c8c97eddf25",role:"SUPER_ADMIN"}],hc="eden_session_v2",em="eden_login_attempts",pc=5,Nh=15*60*1e3,ry="eden_users_v2";function tm(){try{const n=localStorage.getItem(ry);return n?JSON.parse(atob(n)):[]}catch{return[]}}function sy(n){try{const e=n.filter(t=>t.username.toLowerCase()!==iy.toLowerCase());localStorage.setItem(ry,btoa(JSON.stringify(e)))}catch{}}function Mu(){return[...FR,...tm()]}function OR(n){return Mu().find(e=>e.username.toLowerCase()===n.trim().toLowerCase())}function kR(n,e){if(Mu().some(r=>r.username.toLowerCase()===n.trim().toLowerCase()))throw new Error(`Username "${n}" is already taken.`);const i=tm();i.push({username:n.trim(),passwordHash:e,role:"USER"}),sy(i)}function BR(n){if(n.toLowerCase()===iy.toLowerCase())throw new Error("Cannot remove the super admin.");const e=tm().filter(t=>t.username.toLowerCase()!==n.toLowerCase());sy(e)}async function zR(n){const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(n));return Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join("")}function oy(){const n=ie.useRef(null);return ie.useEffect(()=>{const e=n.current;if(!e)return;const t=new Qp({antialias:!0,alpha:!1});t.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),t.setSize(window.innerWidth,window.innerHeight),t.setClearColor(16054008,1),e.appendChild(t.domElement);const i=new mu;i.fog=new pu(16054008,.038);const r=new Jt(60,window.innerWidth/window.innerHeight,.1,200);r.position.set(0,0,28);const s=new ei({color:1483594,wireframe:!0}),o=new ei({color:14427686,wireframe:!0}),a=new ei({color:13421772,wireframe:!0}),l=[],c=[[new jr(2.2,0),s,[-14,5,-5],1],[new jr(1.4,0),o,[12,-3,-8],.8],[new jr(3,0),a,[-6,-8,-15],.5],[new pa(1.8,0),s,[16,7,-10],.9],[new pa(2.5,0),a,[0,10,-12],.4],[new Xc(2,0),s,[-18,-5,-8],.7],[new Xc(1.2,0),o,[8,-9,-6],1.1],[new jr(1.6,1),a,[-10,12,-18],.3],[new pa(1,0),s,[20,-8,-12],.6],[new jr(.8,0),o,[-4,-12,-4],1.3],[new Yc(1.5,.06,6,20),s,[-20,8,-6],.5],[new Yc(2.2,.06,5,16),a,[6,14,-20],.3]];for(const[F,I,N,P]of c){const O=new Pt(F,I);O.position.set(...N),O.rotation.set(Math.random()*Math.PI*2,Math.random()*Math.PI*2,Math.random()*Math.PI*2),i.add(O),l.push({mesh:O,rx:(Math.random()-.5)*.006*P,ry:(Math.random()-.5)*.008*P,rz:(Math.random()-.5)*.004*P,drift:new k((Math.random()-.5)*.004,(Math.random()-.5)*.003,0)})}function d(){const F=[];for(let P=0;P<400;P++){const O=P/400*40-20;let q=0;const K=(O%5+5)%5;K<.2?q=Math.sin(K*Math.PI/.2)*.3:K<.6?q=0:K<.65?q=-.5:K<.72?q=Math.sin((K-.65)*Math.PI/.07)*3.5:K<.78?q=-.4:K<1.5?q=Math.sin((K-.78)*Math.PI/.72)*.6:q=0,F.push(new k(O,q-8,-2))}return new Mt().setFromPoints(F)}const f=new za(d(),new ho({color:1483594,linewidth:1,transparent:!0,opacity:.5}));i.add(f);function u(){const F=[];for(let P=0;P<300;P++){const O=P/300*40-20,q=(O%4+4)%4;let K=0;q<.1?K=Math.sin(q*Math.PI/.1)*.2:q<.4?K=0:q<.45?K=-.3:q<.5?K=Math.sin((q-.45)*Math.PI/.05)*2.2:q<.55?K=-.25:q<1.2?K=Math.sin((q-.55)*Math.PI/.65)*.4:K=0,F.push(new k(O,K+9,-8))}return new Mt().setFromPoints(F)}const p=new za(u(),new ho({color:14427686,linewidth:1,transparent:!0,opacity:.3}));i.add(p);const g=120,v=new Float32Array(g*3);for(let F=0;F<g;F++)v[F*3]=(Math.random()-.5)*60,v[F*3+1]=(Math.random()-.5)*40,v[F*3+2]=(Math.random()-.5)*30-10;const x=new Mt;x.setAttribute("position",new Gt(v,3));const h=new jc(x,new Va({color:1483594,size:.12,sizeAttenuation:!0,transparent:!0,opacity:.5}));i.add(h);const m=200,_=new Float32Array(m*3);for(let F=0;F<m;F++)_[F*3]=(Math.random()-.5)*70,_[F*3+1]=(Math.random()-.5)*50,_[F*3+2]=(Math.random()-.5)*40-15;const S=new Mt;S.setAttribute("position",new Gt(_,3));const w=new jc(S,new Va({color:11184810,size:.06,sizeAttenuation:!0,transparent:!0,opacity:.3}));i.add(w);const b={x:0,y:0},R={x:0,y:0},y=F=>{b.x=(F.clientX/window.innerWidth-.5)*2,b.y=(F.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",y);let T=0;const D=()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),t.setSize(window.innerWidth,window.innerHeight)};window.addEventListener("resize",D);let L,z=0,G=performance.now();function W(){L=requestAnimationFrame(W);const F=performance.now();z+=(F-G)/1e3,G=F;for(const I of l)I.mesh.rotation.x+=I.rx,I.mesh.rotation.y+=I.ry,I.mesh.rotation.z+=I.rz,I.mesh.position.x+=I.drift.x,I.mesh.position.y+=I.drift.y,I.mesh.position.x>25&&(I.drift.x*=-1),I.mesh.position.x<-25&&(I.drift.x*=-1),I.mesh.position.y>18&&(I.drift.y*=-1),I.mesh.position.y<-18&&(I.drift.y*=-1);T-=.015,f.position.x=T%5,p.position.x=T*.7%4,h.rotation.y=z*.04,w.rotation.y=-z*.025,R.x+=(b.y*.04-R.x)*.04,R.y+=(b.x*.06-R.y)*.04,i.rotation.x=R.x,i.rotation.y=R.y,t.render(i,r)}return W(),()=>{cancelAnimationFrame(L),window.removeEventListener("mousemove",y),window.removeEventListener("resize",D),t.dispose(),e.contains(t.domElement)&&e.removeChild(t.domElement)}},[]),E.jsx("div",{ref:n,style:{position:"fixed",inset:0,zIndex:0,pointerEvents:"none"}})}async function VR(n){const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(n));return Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join("")}function $c(){try{return JSON.parse(localStorage.getItem(em)||'{"attempts":[],"lockedUntil":0}')}catch{return{attempts:[],lockedUntil:0}}}function jl(){const n=$c(),e=Date.now();return n.lockedUntil>e?{locked:!0,remainingMs:n.lockedUntil-e}:{locked:!1,remainingMs:0}}function HR(){const n=$c(),e=Date.now();n.attempts=[...(n.attempts||[]).filter(t=>e-t<Nh),e],n.attempts.length>=pc&&(n.lockedUntil=e+Nh),localStorage.setItem(em,JSON.stringify(n))}function GR(){localStorage.removeItem(em)}function X0(n){const e=Math.ceil(n/1e3);return e>=60?Math.ceil(e/60)+"m":e+"s"}const WR=`
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
`;function jR({onLogin:n}){const[e,t]=ie.useState(""),[i,r]=ie.useState(""),[s,o]=ie.useState(!1),[a,l]=ie.useState(""),[c,d]=ie.useState(!1),[f,u]=ie.useState(0),[p,g]=ie.useState(0),[v,x]=ie.useState(!1),h=ie.useRef(null);ie.useEffect(()=>{const R=setInterval(()=>{const{locked:L,remainingMs:z}=jl();u(L?z:0)},500),y=$c();g((y.attempts||[]).length);const{locked:T,remainingMs:D}=jl();return T&&u(D),()=>clearInterval(R)},[]);function m(R){const y=h.current;if(!y)return;const T=y.getBoundingClientRect(),D=T.left+T.width/2,L=T.top+T.height/2,z=(R.clientX-D)/(T.width/2),G=(R.clientY-L)/(T.height/2);y.style.transform=`perspective(900px) rotateY(${z*5}deg) rotateX(${-G*4}deg) scale3d(1.01,1.01,1.01)`}function _(){const R=h.current;R&&(R.style.transform="perspective(900px) rotateY(0deg) rotateX(0deg) scale3d(1,1,1)")}async function S(R){R.preventDefault(),l("");const{locked:y}=jl();if(!y){if(!e.trim()||!i){l("Enter both fields.");return}d(!0);try{const T=await VR(i),D=OR(e);if(D&&D.passwordHash===T){GR();const L=btoa((navigator.userAgent+window.screen.width+window.screen.height).slice(0,200));sessionStorage.setItem(hc,JSON.stringify({username:D.username,role:D.role,loginTime:new Date().toISOString(),fingerprint:L})),n(D.username,D.role)}else{HR();const L=$c(),z=pc-L.attempts.length,{locked:G}=jl();g(L.attempts.length),l(G?`Locked for ${X0(Nh)}.`:`Incorrect credentials.${z>0?` ${z} left.`:""}`),r(""),x(!0),setTimeout(()=>x(!1),450)}}finally{d(!1)}}}const w=f>0,b=Math.min(p,pc);return E.jsxs(E.Fragment,{children:[E.jsx("style",{children:WR}),E.jsx(oy,{}),E.jsx("div",{style:{position:"fixed",inset:0,zIndex:1,pointerEvents:"none",background:"rgba(244,246,248,0.55)"}}),E.jsxs("div",{style:{minHeight:"100vh",display:"flex",position:"relative",zIndex:2},children:[E.jsxs("div",{style:{flex:"0 0 48%",display:"flex",flexDirection:"column",justifyContent:"center",padding:"60px 56px",borderRight:"1px solid rgba(17,17,17,0.08)"},children:[E.jsx("div",{className:"ls-cross ls-line-1",style:{marginBottom:32},children:E.jsxs("svg",{width:"52",height:"52",viewBox:"0 0 52 52",fill:"none",children:[E.jsx("rect",{x:"20",y:"0",width:"12",height:"52",rx:"3",fill:"#16a34a"}),E.jsx("rect",{x:"0",y:"20",width:"52",height:"12",rx:"3",fill:"#16a34a"})]})}),E.jsx("div",{className:"ls-line-2",style:{fontSize:11,fontWeight:700,color:"#16a34a",letterSpacing:"4px",textTransform:"uppercase",marginBottom:16},children:"Medical AI Platform"}),E.jsxs("h1",{className:"ls-line-3",style:{fontSize:"clamp(40px, 5.5vw, 68px)",fontWeight:900,lineHeight:.95,letterSpacing:"-0.04em",color:"#111111",marginBottom:8},children:["GINJA",E.jsx("br",{}),E.jsx("span",{style:{color:"#16a34a"},children:"AI"})]}),E.jsx("div",{className:"ls-line-3",style:{fontSize:15,fontWeight:600,color:"#dc2626",letterSpacing:"2px",textTransform:"uppercase",marginBottom:20},children:"by Eden Care"}),E.jsx("div",{className:"ls-line-3",style:{width:60,height:3,background:"linear-gradient(90deg, #16a34a, #22c55e)",borderRadius:2,marginBottom:24}}),E.jsx("p",{className:"ls-line-4",style:{fontSize:14,color:"rgba(17,17,17,0.45)",lineHeight:1.7,maxWidth:340,marginBottom:40},children:"Medical code intelligence pipeline. Automated processing of hospital billing catalogs for insurance claims adjudication."}),E.jsx("div",{className:"ls-line-5",style:{display:"flex",gap:32},children:[["7","AI Modules"],["M4","DNA Engine"],["SHA-256","Security"]].map(([R,y])=>E.jsxs("div",{children:[E.jsx("div",{style:{fontSize:22,fontWeight:900,color:"#111",letterSpacing:"-0.03em"},children:R}),E.jsx("div",{style:{fontSize:10,color:"#16a34a",letterSpacing:"1.5px",textTransform:"uppercase",marginTop:3,fontWeight:600},children:y})]},y))})]}),E.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:"40px 48px"},children:E.jsxs("div",{ref:h,className:`ls-tilt${v?" ls-shake":""}`,onMouseMove:m,onMouseLeave:_,style:{width:"100%",maxWidth:400,background:"#ffffff",border:"1px solid rgba(17,17,17,0.1)",borderRadius:20,overflow:"hidden",boxShadow:"0 24px 80px rgba(0,0,0,0.12), 0 4px 24px rgba(0,0,0,0.06)",position:"relative"},children:[E.jsx("div",{style:{height:4,background:"linear-gradient(90deg, #16a34a, #22c55e)"}}),E.jsxs("div",{style:{padding:"36px 36px 32px"},children:[E.jsxs("div",{style:{marginBottom:32},children:[E.jsx("div",{style:{fontSize:11,fontWeight:700,color:"#16a34a",letterSpacing:"3px",textTransform:"uppercase",marginBottom:8},children:"Secure Access"}),E.jsx("div",{style:{fontSize:22,fontWeight:800,color:"#111",letterSpacing:"-0.03em"},children:"Sign In"})]}),w&&E.jsxs("div",{style:{background:"rgba(220,38,38,0.06)",border:"1px solid rgba(220,38,38,0.2)",borderRadius:12,padding:"14px 16px",marginBottom:24,display:"flex",alignItems:"center",gap:12},children:[E.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:"#dc2626",flexShrink:0}}),E.jsxs("div",{children:[E.jsx("div",{style:{fontWeight:700,color:"#dc2626",fontSize:13},children:"Access Suspended"}),E.jsxs("div",{style:{fontSize:12,color:"rgba(220,38,38,0.7)",marginTop:2},children:["Retry in ",E.jsx("strong",{style:{color:"#dc2626"},children:X0(f)})]})]})]}),E.jsxs("form",{onSubmit:S,style:{display:"flex",flexDirection:"column",gap:18},children:[E.jsxs("div",{children:[E.jsx("label",{style:{display:"block",fontSize:10,fontWeight:700,color:"rgba(17,17,17,0.4)",letterSpacing:"2px",textTransform:"uppercase",marginBottom:8},children:"Identifier"}),E.jsx("input",{className:"ls-input",type:"text",value:e,onChange:R=>t(R.target.value),disabled:w||c,autoComplete:"username",placeholder:"Username",style:{border:`1.5px solid ${a&&!w?"rgba(220,38,38,0.4)":"rgba(17,17,17,0.15)"}`}})]}),E.jsxs("div",{children:[E.jsx("label",{style:{display:"block",fontSize:10,fontWeight:700,color:"rgba(17,17,17,0.4)",letterSpacing:"2px",textTransform:"uppercase",marginBottom:8},children:"Passcode"}),E.jsxs("div",{style:{position:"relative"},children:[E.jsx("input",{className:"ls-input",type:s?"text":"password",value:i,onChange:R=>r(R.target.value),disabled:w||c,autoComplete:"current-password",placeholder:"••••••••••",style:{border:`1.5px solid ${a&&!w?"rgba(220,38,38,0.4)":"rgba(17,17,17,0.15)"}`,paddingRight:44}}),E.jsx("button",{type:"button",onClick:()=>o(R=>!R),tabIndex:-1,style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",color:"rgba(17,17,17,0.3)",fontSize:14,padding:4},children:s?"🙈":"👁"})]})]}),b>0&&!w&&E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[E.jsx("span",{style:{fontSize:10,color:"rgba(17,17,17,0.3)",letterSpacing:"1.5px",textTransform:"uppercase"},children:"Attempts"}),E.jsx("div",{style:{display:"flex",gap:5},children:Array.from({length:pc}).map((R,y)=>E.jsx("div",{style:{width:7,height:7,borderRadius:"50%",transition:"all 0.2s",background:y<b?"#dc2626":"rgba(17,17,17,0.1)",boxShadow:y<b?"0 0 6px rgba(220,38,38,0.5)":"none"}},y))})]}),a&&!w&&E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"10px 14px",borderRadius:10,background:"rgba(220,38,38,0.05)",border:"1px solid rgba(220,38,38,0.2)",fontSize:12,color:"#dc2626"},children:[E.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:"#dc2626",flexShrink:0}}),a]}),E.jsx("button",{className:"btn-green",type:"submit",disabled:w||c||!e.trim()||!i,style:{padding:"14px",borderRadius:12,fontSize:12,letterSpacing:"3px",marginTop:4},children:c?E.jsxs("span",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:10},children:[E.jsx("span",{style:{width:14,height:14,borderRadius:"50%",border:"2px solid rgba(255,255,255,0.3)",borderTopColor:"#fff",display:"inline-block",animation:"lsSpin 0.8s linear infinite"}}),"VERIFYING"]}):w?"LOCKED":"AUTHORIZE ACCESS"})]}),E.jsxs("div",{style:{marginTop:24,paddingTop:20,borderTop:"1px solid rgba(17,17,17,0.07)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[E.jsx("span",{style:{fontSize:9,color:"rgba(17,17,17,0.25)",letterSpacing:"1px",textTransform:"uppercase"},children:"SHA-256 · Rate Limited"}),E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[E.jsx("div",{className:"live-dot",style:{width:5,height:5}}),E.jsx("span",{style:{fontSize:9,color:"rgba(22,163,74,0.7)",letterSpacing:"1px",textTransform:"uppercase"},children:"Secured"})]})]})]})]})})]})]})}class XR extends mu{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new Mo;e.deleteAttribute("uv");const t=new ss({side:hn}),i=new ss,r=new xr(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new Pt(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const o=new Bv(e,i,6),a=new vt;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);const l=new Pt(e,Is(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new Pt(e,Is(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const d=new Pt(e,Is(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);const f=new Pt(e,Is(43));f.position.set(-.462,8.89,14.52),f.scale.set(4.38,5.441,.088),this.add(f);const u=new Pt(e,Is(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);const p=new Pt(e,Is(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Is(n){return new AE({color:0,emissive:16777215,emissiveIntensity:n})}function YR({processing:n=!1,onClick:e,width:t=540,height:i=340}){const r=ie.useRef(null),s=ie.useRef(n),o=ie.useRef(e);return ie.useEffect(()=>{s.current=n},[n]),ie.useEffect(()=>{o.current=e},[e]),ie.useEffect(()=>{const a=r.current;if(!a)return;const l=new Qp({antialias:!0,alpha:!0});l.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),l.setSize(t,i),l.setClearColor(0,0),l.shadowMap.enabled=!0,l.shadowMap.type=pv,l.outputColorSpace=kt,l.toneMapping=Np,l.toneMappingExposure=1.6,a.appendChild(l.domElement);const c=new qc(l);c.compileEquirectangularShader();const d=c.fromScene(new XR,.04).texture;c.dispose();const f=new mu;f.environment=d;const u=new Jt(38,t/i,.1,200);u.position.set(6,8,16),u.lookAt(0,2,0),f.add(new qE(16777215,1.2));const p=new Js(16774624,2.5);p.position.set(5,12,8),p.castShadow=!0,p.shadow.mapSize.set(512,512),f.add(p);const g=new Js(13693183,1.2);g.position.set(-6,4,6),f.add(g);const v=new xr(16738740,3,12);v.position.set(-3,4,5),f.add(v);const x=new xr(58879,3,12);x.position.set(3.5,3,5),f.add(x);const h=new xr(8146431,2.5,10);h.position.set(0,2.5,6),f.add(h);const m=new xr(16765286,2.5,22);m.position.set(-1,12,2),f.add(m);const _=new ey;let S=null;_.load("/eden-pipeline/sd_macross_factory.glb",W=>{const F=W.scene;F.traverse(K=>{if(K.name&&console.log("[MacrossFactory] Node:",K.name,K.type),K.isMesh){const ee=K;ee.castShadow=!0,ee.receiveShadow=!0,(Array.isArray(ee.material)?ee.material:[ee.material]).forEach(ze=>{ze instanceof ss&&(ze.envMap=d,ze.envMapIntensity=1.2,ze.needsUpdate=!0)})}});const I=new oi().setFromObject(F),N=I.getSize(new k),O=14/Math.max(N.x,N.y,N.z);F.scale.setScalar(O),I.setFromObject(F);const q=I.getCenter(new k);F.position.sub(q),I.setFromObject(F),F.position.y-=I.min.y,S=new zi,S.add(F),f.add(S)},void 0,W=>console.error("[ThreeComputer] GLB load error:",W));const w={x:0,y:0},b={x:0,y:0},R=W=>{const F=a.getBoundingClientRect();w.x=((W.clientX-F.left)/F.width-.5)*2,w.y=((W.clientY-F.top)/F.height-.5)*2};window.addEventListener("mousemove",R);let y=0;const T=()=>{var W;y=1,(W=o.current)==null||W.call(o)};l.domElement.addEventListener("click",T);let D,L=0,z=performance.now();function G(){D=requestAnimationFrame(G);const W=performance.now(),F=Math.min((W-z)/1e3,.05);L+=F,z=W;const I=s.current;if(b.x+=(w.x*.18-b.x)*.05,b.y+=(-w.y*.1-b.y)*.05,S&&(S.rotation.y=b.x,S.rotation.x=b.y,S.rotation.y+=L*.04),I){const P=.5+Math.sin(L*8)*.5;v.intensity=2+P*5,x.intensity=2+P*5,h.intensity=2+P*4}else v.intensity=2.5+Math.sin(L*1.8)*.8,x.intensity=2.5+Math.sin(L*2.2+1)*.8,h.intensity=1.8+Math.sin(L*1.4+2)*.6;if(y>0){y-=F*3;const P=Math.max(0,y);x.intensity=P*10+2.5}const N=L*20%360;h.color.setHSL(N/360,.9,.6),l.render(f,u)}return G(),()=>{cancelAnimationFrame(D),window.removeEventListener("mousemove",R),l.domElement.removeEventListener("click",T),l.dispose(),a.contains(l.domElement)&&a.removeChild(l.domElement)}},[t,i]),E.jsx("div",{ref:r,style:{width:t,height:i,cursor:"pointer",display:"inline-block",position:"relative"}})}const qR=ie.lazy(()=>Tt(()=>import("./M0PreScan-BWJS4Gen.js"),__vite__mapDeps([0,1,2]))),$R=ie.lazy(()=>Tt(()=>import("./M1PHIScrubber-C0v-ylbi.js"),__vite__mapDeps([3,1]))),KR=ie.lazy(()=>Tt(()=>import("./M2TriageRouter-BN-RoRQx.js"),__vite__mapDeps([4,1]))),ZR=ie.lazy(()=>Tt(()=>import("./M3AliasEngine-CUKKBvHN.js"),__vite__mapDeps([5,1,6]))),JR=ie.lazy(()=>Tt(()=>import("./M4ConfidenceThreshold-D8bSbw8L.js"),__vite__mapDeps([7,1,6,2]))),QR=ie.lazy(()=>Tt(()=>import("./M5DefinitionEngine-CpXqBlhG.js"),__vite__mapDeps([8,1]))),eC=ie.lazy(()=>Tt(()=>import("./M6DeltaReport-Blj5RTzv.js"),__vite__mapDeps([9,1]))),tC=ie.lazy(()=>Tt(()=>import("./M7AuditLog-BmjLsAP9.js"),__vite__mapDeps([10,1]))),nC=`
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
`;function iC({id:n,onClose:e}){const t=()=>{};switch(n){case"M0":return E.jsx(qR,{onComplete:t});case"M1":return E.jsx($R,{onComplete:t,prefillData:null});case"M2":return E.jsx(KR,{onComplete:t,prefillData:null});case"M3":return E.jsx(ZR,{onComplete:t,prefillData:null});case"M4":return E.jsx(JR,{onComplete:t,prefillData:null});case"M5":return E.jsx(QR,{onComplete:t,prefillData:null});case"M6":return E.jsx(eC,{onComplete:t,prefillData:null});case"M7":return E.jsx(tC,{});default:return E.jsx("div",{style:{padding:40,color:"#999"},children:"Module not found."})}}function rC({moduleId:n,moduleLabel:e,moduleColor:t,onClose:i}){return ie.useEffect(()=>{const r=s=>{s.key==="Escape"&&i()};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[i]),E.jsxs(E.Fragment,{children:[E.jsx("style",{children:nC}),E.jsx("div",{className:"mo-backdrop",onClick:i}),E.jsxs("div",{className:"mo-sheet",onClick:r=>r.stopPropagation(),children:[E.jsxs("div",{className:"mo-header",children:[E.jsxs("div",{className:"mo-header-left",children:[E.jsx("div",{className:"mo-color-dot",style:{background:t}}),E.jsx("span",{className:"mo-module-id",style:{color:t},children:n}),E.jsx("span",{className:"mo-module-name",children:e})]}),E.jsx("button",{className:"mo-close",onClick:i,title:"Close (Esc)",children:"✕"})]}),E.jsx("div",{className:"mo-body",children:E.jsx(ie.Suspense,{fallback:E.jsx("div",{className:"mo-loader",children:"Loading module…"}),children:E.jsx(iC,{id:n,onClose:i})})})]})]})}const Fd=[{id:"M0",label:"Pre-Scan",icon:"🔍",desc:"File upload & master catalog load",color:"#7c3aed"},{id:"M1",label:"PHI Scrubber",icon:"🛡️",desc:"Detect & block patient identifiers",color:"#dc2626"},{id:"M2",label:"Triage Router",icon:"🤖",desc:"AI classification into 8 domains",color:"#0284c7"},{id:"M3",label:"Alias Engine",icon:"🔗",desc:"Resolve alternate code names",color:"#d97706"},{id:"M4",label:"Confidence Score",icon:"🎯",desc:"DNA matching & approval staging",color:"#16a34a"},{id:"M5",label:"Definition Engine",icon:"📖",desc:"Enrich codes with clinical definitions",color:"#0891b2"},{id:"M6",label:"Delta Report",icon:"📊",desc:"Compare & export changes vs master",color:"#4338ca"},{id:"M7",label:"Audit Log",icon:"📋",desc:"Persistent cross-session audit trail",color:"#334155"}],sC=`
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
`;function Y0({username:n,role:e,mode:t,onModeToggle:i,onLogout:r,onAdminPanel:s,userCount:o,pipelineRunning:a}){var d,f;const[l,c]=ie.useState(null);return E.jsxs(E.Fragment,{children:[E.jsx("style",{children:sC}),E.jsxs("div",{className:"dash-root",children:[E.jsx("nav",{className:"dash-nav",children:E.jsxs("div",{className:"dash-nav-inner",children:[E.jsxs("div",{className:"dash-brand",children:[E.jsx("div",{className:"dash-brand-logo",children:E.jsxs("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",children:[E.jsx("rect",{x:"7.5",y:"0",width:"3",height:"18",rx:"1.5",fill:"white"}),E.jsx("rect",{x:"0",y:"7.5",width:"18",height:"3",rx:"1.5",fill:"white"})]})}),E.jsxs("div",{className:"dash-brand-name",children:["GINJA ",E.jsx("span",{children:"AI"})]}),E.jsx("div",{style:{fontSize:10,color:"rgba(17,17,17,0.3)",letterSpacing:"1px",fontWeight:600},children:"by Eden Care"})]}),E.jsxs("div",{className:"dash-nav-actions",children:[E.jsx("div",{className:`dash-mode-badge ${t}`,onClick:i,title:"Click to toggle mode",children:t==="auto"?"⚡ Auto":"🎛️ Manual"}),s&&E.jsxs("button",{onClick:s,style:{padding:"5px 12px",borderRadius:8,background:"rgba(124,58,237,0.08)",color:"#7c3aed",border:"1px solid rgba(124,58,237,0.2)",fontSize:11,fontWeight:700,cursor:"pointer"},children:["👑 Admin ",o!==void 0?`(${o})`:""]}),E.jsxs("div",{className:"dash-user",children:[E.jsx("div",{className:"dash-user-avatar",children:n.slice(0,1).toUpperCase()}),E.jsx("span",{className:"dash-user-name",children:n})]}),E.jsx("button",{className:"dash-btn-logout",onClick:r,children:"Sign out"})]})]})}),E.jsxs("div",{className:"dash-hero",children:[E.jsxs("div",{className:"dash-hero-title",children:["Medical Code ",E.jsx("span",{children:"Intelligence"})," Pipeline"]}),E.jsx("div",{className:"dash-hero-sub",children:"Select a module to process your insurance catalog data"}),E.jsxs("div",{className:"dash-computer-wrap",onClick:()=>c("M0"),children:[E.jsx(YR,{processing:a,width:620,height:380}),E.jsx("div",{className:"dash-computer-label",children:"Click to launch pipeline"})]})]}),a&&E.jsx("div",{className:"dash-status-strip",children:E.jsxs("div",{className:"dash-status-inner",children:[E.jsx("span",{className:"live-dot"}),E.jsx("span",{style:{fontWeight:700,color:"var(--green)"},children:"Pipeline Running"}),E.jsx("span",{style:{color:"rgba(17,17,17,0.4)"},children:"Processing your catalog through all modules…"})]})}),E.jsxs("div",{className:"dash-grid-section",children:[E.jsxs("div",{className:"dash-section-header",children:[E.jsx("div",{className:"dash-section-title",children:"Pipeline Modules"}),E.jsx("div",{style:{fontSize:11,color:"rgba(17,17,17,0.3)"},children:"8 modules · Click to open"})]}),E.jsx("div",{className:"dash-grid",children:Fd.map(u=>E.jsxs("div",{className:"dash-module-card",onClick:()=>c(u.id),children:[E.jsx("div",{className:"dash-module-card-stripe",style:{background:u.color}}),E.jsx("span",{className:"dash-module-icon",children:u.icon}),E.jsx("div",{className:"dash-module-id",style:{color:u.color},children:u.id}),E.jsx("div",{className:"dash-module-label",children:u.label}),E.jsx("div",{className:"dash-module-desc",children:u.desc}),E.jsx("div",{className:"dash-module-arrow",children:"→"})]},u.id))})]})]}),l&&E.jsx(rC,{moduleId:l,moduleLabel:((d=Fd.find(u=>u.id===l))==null?void 0:d.label)||l,moduleColor:((f=Fd.find(u=>u.id===l))==null?void 0:f.color)||"#16a34a",onClose:()=>c(null)})]})}const Dh={gemini:"eden_api_gemini",groq:"eden_api_groq",openRouter:"eden_api_openrouter",cerebras:"eden_api_cerebras",togetherAI:"eden_api_togetherai",mistral:"eden_api_mistral",cohere:"eden_api_cohere",deepseek:"eden_api_deepseek",umls:"eden_api_umls",bioportal:"eden_api_bioportal"};function fi(n){try{const e=localStorage.getItem(Dh[n]);if(!e)return"";try{return atob(e)}catch{return e}}catch{return""}}function oC(n,e){try{const t=e.trim();t?localStorage.setItem(Dh[n],btoa(t)):localStorage.removeItem(Dh[n])}catch{}}const aC="llama-3.3-70b-versatile",lC="https://api.groq.com/openai/v1/chat/completions",Od=4;function cC(n){return new Promise(e=>setTimeout(e,n))}function uC(n,e){if(e){const i=parseFloat(e);if(!isNaN(i))return Math.ceil(i*1e3)+500}const t=n.match(/try again in (\d+(?:\.\d+)?)s/i);return t?Math.ceil(parseFloat(t[1])*1e3)+500:15e3}async function dC(n,e,t=1e3){var r,s,o,a;let i="";for(let l=1;l<=Od;l++){const c=await fetch(lC,{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer "+n},body:JSON.stringify({model:aC,messages:[{role:"user",content:e}],max_tokens:t,temperature:.1})});if(c.ok)return((o=(s=(r=(await c.json()).choices)==null?void 0:r[0])==null?void 0:s.message)==null?void 0:o.content)??"";const d=await c.text();let f=`Groq ${c.status}`;try{const u=JSON.parse(d);f+=`: ${((a=u.error)==null?void 0:a.message)??d.slice(0,200)}`}catch{f+=`: ${d.slice(0,200)}`}if(c.status===429&&l<Od){const u=uC(d,c.headers.get("retry-after"));console.warn(`[Groq] Rate limit hit (attempt ${l}/${Od}). Waiting ${Math.round(u/1e3)}s...`),await cC(u);continue}i=f;break}throw new Error(i||"Groq request failed after retries")}const fC="gemini-2.0-flash",kd=3;function hC(n){const e=n.match(/retry in (\d+(?:\.\d+)?)s/i);return e?Math.ceil(parseFloat(e[1])*1e3)+500:1e4}function pC(n){return new Promise(e=>setTimeout(e,n))}async function mC(n,e,t=3e3,i=!1){var l,c,d,f,u,p;const r=`https://generativelanguage.googleapis.com/v1beta/models/${fC}:generateContent?key=${n}`,s={maxOutputTokens:t,temperature:.1};i&&(s.responseMimeType="application/json");const o=JSON.stringify({contents:[{role:"user",parts:[{text:e}]}],generationConfig:s});let a="";for(let g=1;g<=kd;g++){const v=await fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:o});if(v.ok)return((u=(f=(d=(c=(l=(await v.json()).candidates)==null?void 0:l[0])==null?void 0:c.content)==null?void 0:d.parts)==null?void 0:f[0])==null?void 0:u.text)??"";const x=await v.text();let h=`Gemini ${v.status}`;try{const _=JSON.parse(x);h+=`: ${((p=_.error)==null?void 0:p.message)??x.slice(0,300)}`}catch{h+=`: ${x.slice(0,300)}`}const m=h.includes("limit: 0")||h.includes("free_tier_requests");if(v.status===429&&m)throw new Error("DAILY_QUOTA_EXHAUSTED: "+h);if(v.status===429&&g<kd){const _=hC(h);console.warn(`[Gemini] Rate limit hit (attempt ${g}/${kd}). Waiting ${Math.round(_/1e3)}s before retry...`),await pC(_);continue}a=h;break}throw new Error(a||"Gemini request failed after retries")}const gC="https://openrouter.ai/api/v1/chat/completions",xC=["deepseek/deepseek-r1:free","deepseek/deepseek-chat-v3-0324:free","google/gemma-3-27b-it:free","meta-llama/llama-3.3-70b-instruct:free","qwen/qwq-32b:free"];async function _C(n,e,t=2e3){var r,s,o,a;let i="";for(const l of xC)try{const c=await fetch(gC,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`,"HTTP-Referer":typeof window<"u"?window.location.origin:"https://eden-pipeline","X-Title":"Eden Care Pipeline"},body:JSON.stringify({model:l,messages:[{role:"user",content:e}],max_tokens:t,temperature:.1})});if(c.ok){const p=((o=(s=(r=(await c.json()).choices)==null?void 0:r[0])==null?void 0:s.message)==null?void 0:o.content)??"";if(p.trim())return p;throw new Error("Empty response from "+l)}const d=await c.text();let f=`OpenRouter ${c.status}`;try{f+=": "+(((a=JSON.parse(d).error)==null?void 0:a.message)||d.slice(0,200))}catch{f+=": "+d.slice(0,200)}if(c.status===429||c.status===404){i=f;continue}throw new Error(f)}catch(c){if(c.message.includes("429")||c.message.includes("quota")||c.message.includes("404")||c.message.includes("unavailable")){i=c.message;continue}throw c}throw new Error(i||"OpenRouter: all free models exhausted")}const vC="https://api.deepseek.com/v1/chat/completions",yC="deepseek-chat";async function SC(n,e,t=2e3){var s,o,a,l;const i=await fetch(vC,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${n}`},body:JSON.stringify({model:yC,messages:[{role:"user",content:e}],max_tokens:t,temperature:.1})});if(!i.ok){const c=await i.text();let d=`DeepSeek ${i.status}`;try{d+=": "+(((s=JSON.parse(c).error)==null?void 0:s.message)||c.slice(0,200))}catch{d+=": "+c.slice(0,200)}throw new Error(d)}return((l=(a=(o=(await i.json()).choices)==null?void 0:o[0])==null?void 0:a.message)==null?void 0:l.content)??""}const Bd="eden_apikey_pin_v1",nm="eden_pin_rate_v1",MC=5,Uh=5*60*1e3;function ay(){try{return JSON.parse(localStorage.getItem(nm)||'{"attempts":[],"lockedUntil":0}')}catch{return{attempts:[],lockedUntil:0}}}function zd(){const n=ay(),e=Date.now();return n.lockedUntil>e?{locked:!0,remainingMs:n.lockedUntil-e}:{locked:!1,remainingMs:0}}function EC(){const n=ay(),e=Date.now();n.attempts=[...(n.attempts||[]).filter(t=>e-t<Uh),e],n.attempts.length>=MC&&(n.lockedUntil=e+Uh),localStorage.setItem(nm,JSON.stringify(n))}function wC(){localStorage.removeItem(nm)}function q0(n){const e=Math.ceil(n/1e3);return e>=60?Math.ceil(e/60)+"m "+e%60+"s":e+"s"}async function $0(n){const e=await crypto.subtle.digest("SHA-256",new TextEncoder().encode(n));return Array.from(new Uint8Array(e)).map(t=>t.toString(16).padStart(2,"0")).join("")}const K0=[{id:"gemini",label:"Gemini 2.0 Flash",icon:"✨",color:"#38bdf8",badge:"PRIMARY",placeholder:"AIza...",hint:"1,500 req/day free · aistudio.google.com"},{id:"groq",label:"Groq (Llama 3.3 70B)",icon:"⚡",color:"#a78bfa",badge:"FAST",placeholder:"gsk_...",hint:"14,400 req/day free · console.groq.com"},{id:"openRouter",label:"OpenRouter (multi-model)",icon:"🔀",color:"#67e8f9",badge:"MULTI",placeholder:"sk-or-...",hint:"Free models, DeepSeek R1 · openrouter.ai"},{id:"cerebras",label:"Cerebras (Llama 3.3 70B)",icon:"🧠",color:"#fbbf24",badge:"SPEED",placeholder:"csk-...",hint:"~3,000 tok/s fastest inference · cloud.cerebras.ai"},{id:"deepseek",label:"DeepSeek (V3 / R1)",icon:"🔭",color:"#34d399",badge:"REASON",placeholder:"sk-...",hint:"10M free tokens · platform.deepseek.com"},{id:"mistral",label:"Mistral (mistral-small)",icon:"🌀",color:"#c4b5fd",badge:"STRUCT",placeholder:"...",hint:"500K tok/min free · console.mistral.ai"},{id:"togetherAI",label:"Together AI (Llama 70B)",icon:"🤝",color:"#f9a8d4",badge:"CREDIT",placeholder:"...",hint:"$5–$25 free credit · api.together.xyz"},{id:"cohere",label:"Cohere (Command-R+)",icon:"🪄",color:"#6ee7b7",badge:"CLASS",placeholder:"...",hint:"20 req/s trial key · dashboard.cohere.com"}],TC=[{id:"umls",label:"UMLS Metathesaurus",icon:"🔗",color:"#67e8f9",placeholder:"xxxxxxxx-xxxx-...",hint:"200+ medical databases · uts.nlm.nih.gov"},{id:"bioportal",label:"NCBO BioPortal",icon:"🧭",color:"#c4b5fd",placeholder:"xxxxxxxx-xxxx-...",hint:"800+ ontologies · bioportal.bioontology.org"}],bC=["1","2","3","4","5","6","7","8","9","⌫","0","✓"],AC=`
  @keyframes pinShake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}
  .pin-shake{animation:pinShake 0.4s ease;}
  .pin-digit-btn{transition:all 0.1s;}
  .pin-digit-btn:hover:not(:disabled){background:rgba(124,58,237,0.25)!important;border-color:rgba(124,58,237,0.5)!important;}
  .pin-digit-btn:active:not(:disabled){transform:scale(0.94);}
  .key-row-card{transition:border-color 0.2s;}
  .key-row-card:hover{border-color:rgba(124,58,237,0.35)!important;}
`;function Z0({role:n}){return n!=="SUPER_ADMIN"?null:E.jsx(RC,{})}function RC(){const[n,e]=ie.useState("idle"),[t,i]=ie.useState(""),[r,s]=ie.useState(""),[o,a]=ie.useState(!1),[l,c]=ie.useState(0),[d,f]=ie.useState(""),[u,p]=ie.useState(""),[g,v]=ie.useState("enter"),[x,h]=ie.useState({}),[m,_]=ie.useState({});ie.useEffect(()=>{_({gemini:fi("gemini"),groq:fi("groq"),openRouter:fi("openRouter"),cerebras:fi("cerebras"),deepseek:fi("deepseek"),mistral:fi("mistral"),togetherAI:fi("togetherAI"),cohere:fi("cohere"),umls:fi("umls"),bioportal:fi("bioportal")})},[n]),ie.useEffect(()=>{const I=setInterval(()=>{const{locked:N,remainingMs:P}=zd();c(N?P:0)},500);return()=>clearInterval(I)},[]);function S(){const I=!!localStorage.getItem(Bd);e(I?"pin-entry":"pin-setup"),i(""),s("")}function w(){e("idle"),i(""),s("")}async function b(I){if(n==="pin-entry"){if(I==="⌫"){i(P=>P.slice(0,-1));return}if(I==="✓"){await R();return}if(t.length>=4)return;const N=t+I;i(N),N.length===4&&setTimeout(()=>R(N),100)}if(n==="pin-setup")if(g==="enter"){if(I==="⌫"){f(N=>N.slice(0,-1));return}if(I==="✓"||d.length===3){const N=I==="⌫"||I==="✓"?d:d+I;if(N.length===4){f(N),v("confirm"),p("");return}I!=="⌫"&&I!=="✓"&&f(P=>P.length<4?P+I:P);return}f(N=>N.length<4?N+I:N),d.length+1===4&&I!=="⌫"&&I!=="✓"&&setTimeout(()=>{v("confirm"),p("")},150)}else{if(I==="⌫"){p(P=>P.slice(0,-1));return}if(I==="✓"){await y();return}const N=u+I;p(N),N.length===4&&setTimeout(()=>y(N),100)}}async function R(I){const{locked:N}=zd();if(N)return;const P=I||t;if(P.length<4){s("Enter all 4 digits");return}const O=localStorage.getItem(Bd);if(await $0(P)===O)wC(),e("open"),i(""),s("");else{EC();const{locked:K,remainingMs:ee}=zd();K&&c(ee),T(),s(K?`Locked for ${q0(Uh)}`:"Wrong PIN"),i("")}}async function y(I){const N=d;if(N!==(I||u)){T(),s("PINs don't match — try again"),v("enter"),f(""),p("");return}const O=await $0(N);localStorage.setItem(Bd,O),e("open"),f(""),p(""),s("")}function T(){a(!0),setTimeout(()=>a(!1),500)}const[D,L]=ie.useState({});function z(I,N){_(P=>({...P,[I]:N})),oC(I,N),L(P=>({...P,[I]:"idle"}))}async function G(I,N){if(N.trim()){L(P=>({...P,[I]:"testing"}));try{const P="Reply with exactly: OK";if(I==="groq")await dC(N,P,5);else if(I==="gemini")await mC(N,P,5);else if(I==="openRouter")await _C(N,P,5);else if(I==="deepseek")await SC(N,P,5);else if(I==="umls"){const O=await fetch(`https://uts-ws.nlm.nih.gov/rest/search/current?string=aspirin&apiKey=${encodeURIComponent(N)}&pageSize=1`);if(!O.ok)throw new Error("UMLS "+O.status)}else if(I==="bioportal"){const O=await fetch(`https://data.bioontology.org/search?q=aspirin&apikey=${encodeURIComponent(N)}&pagesize=1`);if(!O.ok)throw new Error("BioPortal "+O.status)}L(O=>({...O,[I]:"ok"}))}catch{L(P=>({...P,[I]:"fail"}))}}}const W=K0.map(I=>I.id),F=W.filter(I=>{var N;return(N=m[I])==null?void 0:N.trim()}).length;return E.jsxs(E.Fragment,{children:[E.jsx("style",{children:AC}),E.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",padding:"10px 20px 0"},children:[n==="idle"&&E.jsxs("button",{onClick:S,style:{display:"flex",alignItems:"center",gap:8,padding:"8px 16px",borderRadius:10,border:"1px solid rgba(124,58,237,0.3)",background:"rgba(124,58,237,0.1)",cursor:"pointer",fontSize:13,fontWeight:600,color:"#c4b5fd",width:"100%",transition:"all 0.2s"},children:[E.jsx("span",{style:{fontSize:14},children:"🔑"}),E.jsxs("span",{style:{flex:1},children:["API Keys — ",F===0?"No keys set yet":`${F}/${W.length} AI providers active`]}),E.jsx("span",{style:{fontSize:11,padding:"2px 8px",borderRadius:10,background:"rgba(124,58,237,0.2)",color:"#a78bfa"},children:"🔒 PIN protected"}),E.jsx("span",{style:{fontSize:11,color:"rgba(255,255,255,0.3)"},children:"▼ open"})]}),(n==="pin-entry"||n==="pin-setup")&&E.jsxs("div",{style:{background:"rgba(10,10,26,0.97)",border:"1px solid rgba(124,58,237,0.3)",borderRadius:16,padding:24,display:"flex",flexDirection:"column",alignItems:"center",gap:16,position:"relative"},children:[E.jsx("button",{onClick:w,style:{position:"absolute",top:12,right:14,background:"none",border:"none",color:"rgba(255,255,255,0.4)",cursor:"pointer",fontSize:18},children:"✕"}),E.jsx("div",{style:{fontSize:24,filter:"drop-shadow(0 0 10px rgba(124,58,237,0.7))"},children:"🔑"}),E.jsx("div",{style:{color:"#fff",fontWeight:700,fontSize:14,textAlign:"center"},children:n==="pin-entry"?"Enter your 4-digit PIN":g==="enter"?"Set a 4-digit PIN for API Keys":"Confirm your PIN"}),l>0&&E.jsxs("div",{style:{background:"rgba(244,63,94,0.15)",border:"1px solid rgba(244,63,94,0.3)",borderRadius:8,padding:"8px 16px",fontSize:12,color:"#f43f5e",textAlign:"center"},children:["🔒 Locked — try again in ",q0(l)]}),E.jsx("div",{className:o?"pin-shake":"",style:{display:"flex",gap:12,marginTop:4},children:Array.from({length:4}).map((I,N)=>{const P=n==="pin-entry"?N<t.length:g==="enter"?N<d.length:N<u.length;return E.jsx("div",{style:{width:14,height:14,borderRadius:"50%",border:"2px solid rgba(124,58,237,0.6)",background:P?"#7c3aed":"transparent",boxShadow:P?"0 0 8px rgba(124,58,237,0.8)":"none",transition:"all 0.15s"}},N)})}),r&&E.jsx("div",{style:{fontSize:12,color:"#f43f5e",textAlign:"center"},children:r}),E.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,width:200},children:bC.map(I=>E.jsx("button",{className:"pin-digit-btn",onClick:()=>b(I),disabled:l>0||I==="✓"&&(n==="pin-entry"?t.length<4:g==="enter"?d.length<4:u.length<4),style:{padding:"14px 0",borderRadius:10,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)",color:I==="✓"?"#10b981":I==="⌫"?"#f43f5e":"#fff",fontSize:I==="✓"||I==="⌫"?18:20,fontWeight:700,cursor:"pointer"},children:I},I))}),n==="pin-setup"&&g==="confirm"&&E.jsx("button",{onClick:()=>{v("enter"),f(""),p(""),s("")},style:{fontSize:11,color:"rgba(255,255,255,0.35)",background:"none",border:"none",cursor:"pointer"},children:"← Re-enter PIN"})]}),n==="open"&&E.jsxs("div",{style:{background:"rgba(10,10,26,0.95)",border:"1px solid rgba(124,58,237,0.25)",borderRadius:16,padding:16,display:"flex",flexDirection:"column",gap:12},children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[E.jsx("span",{style:{fontSize:14,color:"#c4b5fd"},children:"🔑"}),E.jsxs("span",{style:{flex:1,fontWeight:700,fontSize:13,color:"#fff"},children:["API Keys — ",F,"/",W.length," AI providers active"]}),E.jsx("button",{onClick:w,style:{padding:"4px 12px",borderRadius:8,border:"1px solid rgba(255,255,255,0.1)",background:"transparent",color:"rgba(255,255,255,0.4)",fontSize:11,cursor:"pointer"},children:"🔒 Lock"})]}),E.jsx("div",{style:{fontSize:11,color:"rgba(255,255,255,0.35)",paddingBottom:8,borderBottom:"1px solid rgba(255,255,255,0.06)"},children:"Keys saved in browser storage — never leave your device."}),E.jsxs("div",{style:{fontSize:10,fontWeight:800,color:"rgba(255,255,255,0.3)",letterSpacing:"1px",textTransform:"uppercase"},children:["🤖 AI Providers (",F,"/",W.length,")"]}),K0.map(I=>{const N=m[I.id]||"",P=N.trim().length>0,O=D[I.id]||"idle";return E.jsxs("div",{className:"key-row-card",style:{background:"rgba(255,255,255,0.03)",border:`1px solid ${O==="ok"?"rgba(52,211,153,0.3)":O==="fail"?"rgba(244,63,94,0.3)":"rgba(255,255,255,0.06)"}`,borderRadius:10,padding:"10px 14px"},children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:7},children:[E.jsx("span",{style:{fontSize:14},children:I.icon}),E.jsx("span",{style:{fontWeight:700,fontSize:12,color:I.color},children:I.label}),E.jsx("span",{style:{fontSize:9,fontWeight:800,color:"#fff",background:I.color+"33",border:`1px solid ${I.color}55`,padding:"1px 6px",borderRadius:8},children:I.badge}),O==="ok"&&E.jsx("span",{style:{fontSize:10,color:"#34d399",marginLeft:"auto"},children:"✓ Valid"}),O==="fail"&&E.jsx("span",{style:{fontSize:10,color:"#f87171",marginLeft:"auto"},children:"✗ Invalid"}),O==="idle"&&P&&E.jsx("span",{style:{fontSize:10,color:"rgba(255,255,255,0.3)",marginLeft:"auto"},children:"saved"})]}),E.jsxs("div",{style:{display:"flex",gap:7},children:[E.jsx("input",{type:x[I.id]?"text":"password",value:N,onChange:q=>z(I.id,q.target.value),placeholder:I.placeholder,style:{flex:1,padding:"7px 10px",borderRadius:7,border:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.04)",color:"#fff",fontSize:11,fontFamily:"monospace",outline:"none"}}),P&&E.jsx("button",{onClick:()=>G(I.id,N),disabled:O==="testing",style:{padding:"6px 10px",borderRadius:7,border:"1px solid rgba(52,211,153,0.3)",background:"rgba(52,211,153,0.08)",cursor:"pointer",fontSize:11,color:"#34d399",whiteSpace:"nowrap"},children:O==="testing"?"…":"▶ Test"}),E.jsx("button",{onClick:()=>h(q=>({...q,[I.id]:!q[I.id]})),style:{padding:"6px 10px",borderRadius:7,border:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.05)",cursor:"pointer",fontSize:12,color:"rgba(255,255,255,0.5)"},children:x[I.id]?"🙈":"👁"}),P&&E.jsx("button",{onClick:()=>z(I.id,""),style:{padding:"6px 10px",borderRadius:7,border:"1px solid rgba(244,63,94,0.3)",background:"rgba(244,63,94,0.1)",cursor:"pointer",fontSize:11,color:"#f87171"},children:"✕"})]}),E.jsx("div",{style:{fontSize:10,color:"rgba(255,255,255,0.3)",marginTop:5},children:I.hint})]},I.id)}),E.jsx("div",{style:{fontSize:10,fontWeight:800,color:"rgba(255,255,255,0.3)",letterSpacing:"1px",textTransform:"uppercase",marginTop:4},children:"🗄️ Data Source Keys (optional)"}),TC.map(I=>{const N=m[I.id]||"",P=N.trim().length>0;return E.jsxs("div",{className:"key-row-card",style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:10,padding:"10px 14px"},children:[E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:7},children:[E.jsx("span",{style:{fontSize:14},children:I.icon}),E.jsx("span",{style:{fontWeight:700,fontSize:12,color:I.color},children:I.label}),E.jsx("span",{style:{fontSize:9,fontWeight:800,color:"#fff",background:I.color+"33",padding:"1px 6px",borderRadius:8},children:"DATA"}),P&&E.jsx("span",{style:{fontSize:10,color:"#34d399",marginLeft:"auto"},children:"✓ saved"})]}),E.jsxs("div",{style:{display:"flex",gap:7},children:[E.jsx("input",{type:x[I.id]?"text":"password",value:N,onChange:O=>z(I.id,O.target.value),placeholder:I.placeholder,style:{flex:1,padding:"7px 10px",borderRadius:7,border:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.04)",color:"#fff",fontSize:11,fontFamily:"monospace",outline:"none"}}),E.jsx("button",{onClick:()=>h(O=>({...O,[I.id]:!O[I.id]})),style:{padding:"6px 10px",borderRadius:7,border:"1px solid rgba(255,255,255,0.08)",background:"rgba(255,255,255,0.05)",cursor:"pointer",fontSize:12,color:"rgba(255,255,255,0.5)"},children:x[I.id]?"🙈":"👁"}),P&&E.jsx("button",{onClick:()=>z(I.id,""),style:{padding:"6px 10px",borderRadius:7,border:"1px solid rgba(244,63,94,0.3)",background:"rgba(244,63,94,0.1)",cursor:"pointer",fontSize:11,color:"#f87171"},children:"✕"})]}),E.jsx("div",{style:{fontSize:10,color:"rgba(255,255,255,0.3)",marginTop:5},children:I.hint})]},I.id)}),E.jsx("div",{style:{fontSize:10,color:"rgba(255,255,255,0.2)",padding:"8px 12px",background:"rgba(255,255,255,0.02)",borderRadius:8,border:"1px solid rgba(255,255,255,0.04)",marginTop:4},children:"💡 Gemini handles M5 matching. DeepSeek & Cerebras are fast fallbacks. All 8 AI providers form a waterfall chain — no batch is ever dropped. UMLS & BioPortal unlock extra M3 terminology tiers."})]})]})]})}const CC=`
  @keyframes slideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}
  @keyframes fadeOverlay{from{opacity:0}to{opacity:1}}
  .admin-panel{animation:slideIn 0.25s ease forwards;}
  .admin-overlay{animation:fadeOverlay 0.2s ease forwards;}
  .admin-remove-btn{transition:all 0.15s;}
  .admin-remove-btn:hover{background:rgba(244,63,94,0.2)!important;color:#f87171!important;}
  .admin-add-input{transition:border-color 0.2s;}
  .admin-add-input:focus{border-color:rgba(124,58,237,0.5)!important;outline:none!important;box-shadow:0 0 0 3px rgba(124,58,237,0.15)!important;}
`;function J0({currentUser:n,onClose:e}){const[t,i]=ie.useState([]),[r,s]=ie.useState(""),[o,a]=ie.useState(""),[l,c]=ie.useState(""),[d,f]=ie.useState(""),[u,p]=ie.useState(!1),[g,v]=ie.useState(!1);function x(){i(Mu())}ie.useEffect(()=>{x()},[]);async function h(w){if(w.preventDefault(),c(""),f(""),!r.trim()){c("Username is required.");return}if(!o.trim()||o.length<6){c("Password must be at least 6 characters.");return}p(!0);try{const b=await zR(o);kR(r.trim(),b),f(`User "${r.trim()}" added.`),s(""),a(""),x()}catch(b){c(b.message||"Failed to add user.")}finally{p(!1)}}function m(w){if(confirm(`Remove user "${w}"? This cannot be undone.`))try{BR(w),x(),f(`User "${w}" removed.`),c("")}catch(b){c(b.message)}}const _=t.filter(w=>w.role!=="SUPER_ADMIN"),S=t.find(w=>w.role==="SUPER_ADMIN");return E.jsxs(E.Fragment,{children:[E.jsx("style",{children:CC}),E.jsx("div",{className:"admin-overlay",onClick:e,style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:300}}),E.jsxs("div",{className:"admin-panel",style:{position:"fixed",top:0,right:0,bottom:0,width:"100%",maxWidth:420,background:"linear-gradient(180deg,#0f0a1e 0%,#0a0a1a 100%)",borderLeft:"1px solid rgba(124,58,237,0.2)",zIndex:301,display:"flex",flexDirection:"column",overflow:"hidden"},children:[E.jsxs("div",{style:{padding:"20px 24px 16px",borderBottom:"1px solid rgba(255,255,255,0.07)",display:"flex",alignItems:"center",gap:12},children:[E.jsx("span",{style:{fontSize:20,filter:"drop-shadow(0 0 8px rgba(124,58,237,0.7))"},children:"👥"}),E.jsxs("div",{style:{flex:1},children:[E.jsx("div",{style:{color:"#fff",fontWeight:800,fontSize:15},children:"User Management"}),E.jsx("div",{style:{color:"rgba(255,255,255,0.35)",fontSize:11,marginTop:2},children:"Super Admin controls"})]}),E.jsx("button",{onClick:e,style:{background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.1)",borderRadius:8,color:"rgba(255,255,255,0.5)",fontSize:16,cursor:"pointer",width:32,height:32,display:"flex",alignItems:"center",justifyContent:"center"},children:"✕"})]}),E.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"20px 24px",display:"flex",flexDirection:"column",gap:20},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontSize:10,fontWeight:800,color:"rgba(255,255,255,0.3)",letterSpacing:"1px",textTransform:"uppercase",marginBottom:8},children:"Super Admin"}),E.jsxs("div",{style:{background:"rgba(124,58,237,0.12)",border:"1px solid rgba(124,58,237,0.25)",borderRadius:12,padding:"12px 16px",display:"flex",alignItems:"center",gap:12},children:[E.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:"linear-gradient(135deg,#7c3aed,#a855f7)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16},children:"👑"}),E.jsxs("div",{style:{flex:1},children:[E.jsx("div",{style:{color:"#c4b5fd",fontWeight:700,fontSize:13},children:S==null?void 0:S.username}),E.jsx("div",{style:{color:"rgba(255,255,255,0.3)",fontSize:11,marginTop:2},children:"Full system access · cannot be removed"})]}),E.jsx("span",{style:{fontSize:9,fontWeight:800,padding:"3px 8px",borderRadius:10,background:"rgba(124,58,237,0.3)",color:"#c4b5fd",border:"1px solid rgba(124,58,237,0.4)"},children:"ADMIN"})]})]}),E.jsxs("div",{children:[E.jsxs("div",{style:{fontSize:10,fontWeight:800,color:"rgba(255,255,255,0.3)",letterSpacing:"1px",textTransform:"uppercase",marginBottom:8},children:["Users (",_.length,")"]}),_.length===0?E.jsx("div",{style:{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:12,padding:"20px",textAlign:"center",color:"rgba(255,255,255,0.25)",fontSize:12},children:"No regular users yet. Add one below."}):E.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:_.map(w=>E.jsxs("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:12,padding:"12px 16px",display:"flex",alignItems:"center",gap:12},children:[E.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:"linear-gradient(135deg,#0f172a,#1e293b)",border:"1px solid rgba(6,182,212,0.3)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:16},children:"👤"}),E.jsxs("div",{style:{flex:1},children:[E.jsx("div",{style:{color:"#fff",fontWeight:600,fontSize:13},children:w.username}),E.jsx("div",{style:{color:"rgba(255,255,255,0.3)",fontSize:11,marginTop:2},children:"Standard user · pipeline access only"})]}),E.jsx("span",{style:{fontSize:9,fontWeight:800,padding:"3px 8px",borderRadius:10,background:"rgba(6,182,212,0.15)",color:"#67e8f9",border:"1px solid rgba(6,182,212,0.25)"},children:"USER"}),w.username!==n&&E.jsx("button",{className:"admin-remove-btn",onClick:()=>m(w.username),style:{padding:"5px 10px",borderRadius:8,border:"1px solid rgba(244,63,94,0.25)",background:"rgba(244,63,94,0.08)",color:"#f87171",cursor:"pointer",fontSize:11},children:"Remove"})]},w.username))})]}),E.jsxs("div",{children:[E.jsx("div",{style:{fontSize:10,fontWeight:800,color:"rgba(255,255,255,0.3)",letterSpacing:"1px",textTransform:"uppercase",marginBottom:12},children:"Add New User"}),E.jsxs("form",{onSubmit:h,style:{display:"flex",flexDirection:"column",gap:12},children:[E.jsxs("div",{children:[E.jsx("label",{style:{display:"block",fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.4)",marginBottom:6,letterSpacing:"0.8px"},children:"USERNAME"}),E.jsx("input",{className:"admin-add-input",type:"text",value:r,onChange:w=>s(w.target.value),placeholder:"e.g. JohnDoe",autoComplete:"off",style:{width:"100%",padding:"10px 14px",borderRadius:10,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)",color:"#fff",fontSize:13,boxSizing:"border-box"}})]}),E.jsxs("div",{children:[E.jsx("label",{style:{display:"block",fontSize:11,fontWeight:700,color:"rgba(255,255,255,0.4)",marginBottom:6,letterSpacing:"0.8px"},children:"PASSWORD"}),E.jsxs("div",{style:{position:"relative"},children:[E.jsx("input",{className:"admin-add-input",type:g?"text":"password",value:o,onChange:w=>a(w.target.value),placeholder:"Minimum 6 characters",autoComplete:"new-password",style:{width:"100%",padding:"10px 44px 10px 14px",borderRadius:10,border:"1px solid rgba(255,255,255,0.1)",background:"rgba(255,255,255,0.05)",color:"#fff",fontSize:13,boxSizing:"border-box"}}),E.jsx("button",{type:"button",onClick:()=>v(w=>!w),tabIndex:-1,style:{position:"absolute",right:12,top:"50%",transform:"translateY(-50%)",background:"none",border:"none",cursor:"pointer",fontSize:14,color:"rgba(255,255,255,0.35)"},children:g?"🙈":"👁️"})]})]}),l&&E.jsx("div",{style:{fontSize:12,color:"#f87171",background:"rgba(244,63,94,0.1)",border:"1px solid rgba(244,63,94,0.25)",borderRadius:8,padding:"8px 12px"},children:l}),d&&E.jsx("div",{style:{fontSize:12,color:"#34d399",background:"rgba(52,211,153,0.1)",border:"1px solid rgba(52,211,153,0.25)",borderRadius:8,padding:"8px 12px"},children:d}),E.jsx("button",{type:"submit",disabled:u,style:{padding:"11px",borderRadius:10,border:"none",background:"linear-gradient(135deg,#7c3aed,#06b6d4)",color:"#fff",fontWeight:700,fontSize:13,cursor:"pointer",boxShadow:"0 4px 20px rgba(124,58,237,0.3)",transition:"all 0.2s"},children:u?"Adding…":"+ Add User"})]})]}),E.jsx("div",{style:{fontSize:11,color:"rgba(255,255,255,0.2)",background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.04)",borderRadius:8,padding:"10px 12px"},children:"💡 Regular users have access to all pipeline modules but cannot see or edit API keys. User data is stored in this browser's localStorage."})]})]})]})}const PC=`
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
`;function Q0({children:n,className:e,style:t,onClick:i}){const r=ie.useRef(null);function s(a){const l=r.current;if(!l)return;const c=l.getBoundingClientRect(),d=(a.clientX-(c.left+c.width/2))/(c.width/2),f=(a.clientY-(c.top+c.height/2))/(c.height/2);l.style.transform=`perspective(800px) rotateY(${d*7}deg) rotateX(${-f*6}deg) scale3d(1.02,1.02,1.02)`}function o(){const a=r.current;a&&(a.style.transform="perspective(800px) rotateY(0) rotateX(0) scale3d(1,1,1)")}return E.jsx("div",{ref:r,className:`ms-tilt ${e||""}`,style:{...t,borderRadius:20,overflow:"hidden"},onMouseMove:s,onMouseLeave:o,onClick:i,children:n})}function IC({onSelect:n}){return E.jsxs(E.Fragment,{children:[E.jsx("style",{children:PC}),E.jsx(oy,{}),E.jsx("div",{style:{position:"fixed",inset:0,zIndex:1,pointerEvents:"none",background:"rgba(0,0,0,0.55)"}}),E.jsxs("div",{style:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"40px 24px",position:"relative",zIndex:2},children:[E.jsxs("div",{className:"ms-stagger-1",style:{textAlign:"center",marginBottom:48},children:[E.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:10,marginBottom:20,padding:"6px 16px 6px 10px",borderRadius:20,border:"1px solid rgba(220,38,38,0.35)",background:"rgba(220,38,38,0.08)"},children:[E.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",children:[E.jsx("rect",{x:"5.5",y:"0",width:"3",height:"14",rx:"1",fill:"#dc2626"}),E.jsx("rect",{x:"0",y:"5.5",width:"14",height:"3",rx:"1",fill:"#dc2626"})]}),E.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#dc2626",letterSpacing:"2.5px",textTransform:"uppercase"},children:"Eden Care Pipeline"})]}),E.jsx("h2",{style:{fontSize:"clamp(28px, 4vw, 48px)",fontWeight:900,color:"#ffffff",letterSpacing:"-0.04em",lineHeight:1,marginBottom:12},children:"Select Processing Mode"}),E.jsx("p",{style:{fontSize:14,color:"rgba(255,255,255,0.38)",maxWidth:380,margin:"0 auto"},children:"Choose how you want to process your insurance catalog data through the pipeline"})]}),E.jsxs("div",{className:"ms-stagger-2",style:{display:"flex",gap:20,flexWrap:"wrap",justifyContent:"center",maxWidth:760,width:"100%"},children:[E.jsx(Q0,{className:"ms-card-auto",style:{flex:"1 1 320px",maxWidth:360},onClick:()=>n("auto"),children:E.jsxs("div",{style:{padding:"32px 28px 28px"},children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:28},children:[E.jsx("span",{className:"ms-tag",style:{fontSize:9,fontWeight:800,padding:"4px 10px",borderRadius:6,letterSpacing:"2px",textTransform:"uppercase"},children:"Recommended"}),E.jsx("span",{style:{fontSize:28},children:"🤖"})]}),E.jsx("h3",{style:{fontSize:24,fontWeight:900,letterSpacing:"-0.04em",marginBottom:6,color:"inherit"},children:"Auto Mode"}),E.jsx("p",{className:"ms-feature",style:{fontSize:13,lineHeight:1.6,marginBottom:24},children:"Upload once. All 7 modules execute automatically with live status updates."}),E.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:10,marginBottom:28},children:["Upload → full pipeline executes","Live neural status per module","Delta report auto-downloads","Zero manual intervention"].map(e=>E.jsxs("li",{style:{display:"flex",gap:10,fontSize:12.5,alignItems:"flex-start"},children:[E.jsx("span",{className:"ms-feature-check",style:{fontWeight:900,flexShrink:0,marginTop:1},children:"✕"}),E.jsx("span",{className:"ms-feature",children:e})]},e))}),E.jsx("button",{className:"ms-cta",style:{width:"100%",padding:"14px",borderRadius:12,fontSize:12},children:"Launch Auto Pipeline →"})]})}),E.jsxs("div",{className:"ms-divider",style:{alignSelf:"stretch",flexDirection:"column",width:1,minHeight:300},children:[E.jsx("div",{style:{flex:1,width:1,background:"rgba(255,255,255,0.07)"}}),E.jsx("span",{style:{fontSize:10,color:"rgba(255,255,255,0.2)",letterSpacing:"2px",textTransform:"uppercase",writingMode:"vertical-lr"},children:"or"}),E.jsx("div",{style:{flex:1,width:1,background:"rgba(255,255,255,0.07)"}})]}),E.jsx(Q0,{className:"ms-card-manual",style:{flex:"1 1 320px",maxWidth:360},onClick:()=>n("manual"),children:E.jsxs("div",{style:{padding:"32px 28px 28px"},children:[E.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:28},children:[E.jsx("span",{className:"ms-tag",style:{fontSize:9,fontWeight:700,padding:"4px 10px",borderRadius:6,letterSpacing:"2px",textTransform:"uppercase"},children:"Full Control"}),E.jsx("span",{style:{fontSize:28},children:"🎛️"})]}),E.jsx("h3",{style:{fontSize:24,fontWeight:900,letterSpacing:"-0.04em",marginBottom:6,color:"inherit"},children:"Manual Mode"}),E.jsx("p",{className:"ms-feature",style:{fontSize:13,lineHeight:1.6,marginBottom:24},children:"Step through each module individually. Inspect and verify at every stage."}),E.jsx("ul",{style:{listStyle:"none",display:"flex",flexDirection:"column",gap:10,marginBottom:28},children:["Step-by-step navigation","Inspect results per module","Modify inputs before advancing","Best for QA & troubleshooting"].map(e=>E.jsxs("li",{style:{display:"flex",gap:10,fontSize:12.5,alignItems:"flex-start"},children:[E.jsx("span",{className:"ms-feature-check",style:{fontWeight:900,flexShrink:0,marginTop:1},children:"✕"}),E.jsx("span",{className:"ms-feature",children:e})]},e))}),E.jsx("button",{className:"ms-cta",style:{width:"100%",padding:"14px",borderRadius:12,fontSize:12},children:"Start Manual Mode →"})]})})]}),E.jsx("div",{className:"ms-stagger-4",style:{marginTop:36,fontSize:11,color:"rgba(255,255,255,0.2)",letterSpacing:"0.5px"},children:"Switch modes at any time from the navigation bar"})]})]})}const ex={m0Result:null,m1Result:null,m2Result:null,m3Result:null,m4Result:null,m5Result:null};function ly(){const[n,e]=ie.useState(ex);function t(c){e(d=>({...d,m0Result:c}))}function i(c){e(d=>({...d,m1Result:c}))}function r(c){e(d=>({...d,m2Result:c}))}function s(c){e(d=>({...d,m3Result:c}))}function o(c){e(d=>({...d,m4Result:c}))}function a(c){e(d=>({...d,m5Result:c}))}function l(){e(ex)}return{state:n,setM0:t,setM1:i,setM2:r,setM3:s,setM4:o,setM5:a,reset:l}}const LC=ie.lazy(()=>Tt(()=>import("./M0PreScan-BWJS4Gen.js"),__vite__mapDeps([0,1,2]))),NC=ie.lazy(()=>Tt(()=>import("./M1PHIScrubber-C0v-ylbi.js"),__vite__mapDeps([3,1]))),DC=ie.lazy(()=>Tt(()=>import("./M2TriageRouter-BN-RoRQx.js"),__vite__mapDeps([4,1]))),UC=ie.lazy(()=>Tt(()=>import("./M3AliasEngine-CUKKBvHN.js"),__vite__mapDeps([5,1,6]))),FC=ie.lazy(()=>Tt(()=>import("./M4ConfidenceThreshold-D8bSbw8L.js"),__vite__mapDeps([7,1,6,2]))),OC=ie.lazy(()=>Tt(()=>import("./M5DefinitionEngine-CpXqBlhG.js"),__vite__mapDeps([8,1]))),kC=ie.lazy(()=>Tt(()=>import("./M6DeltaReport-Blj5RTzv.js"),__vite__mapDeps([9,1]))),Vd=[{key:"m0",num:"01",label:"Pre-Scan",desc:"Catalog upload & pre-match"},{key:"m1",num:"02",label:"PHI Scrubber",desc:"Anonymize patient identifiers"},{key:"m2",num:"03",label:"Triage Router",desc:"Route by clinical domain"},{key:"m3",num:"04",label:"Alias Engine",desc:"Resolve aliases via APIs"},{key:"m5",num:"05",label:"Code Prep Engine",desc:"Enrich definitions for code matching"},{key:"m4",num:"06",label:"Code Assignment Engine",desc:"Assign & match DNA codes"},{key:"m6",num:"07",label:"Delta Report",desc:"Generate comparison report"}],BC=`
  @keyframes amp-spin  { to { transform: rotate(360deg); } }
  @keyframes amp-pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
  @keyframes amp-rowIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
  @keyframes amp-barFill { from{width:0%} }
  @keyframes amp-redPulse { 0%,100%{box-shadow:0 0 0 0 rgba(220,38,38,0)} 50%{box-shadow:0 0 0 6px rgba(220,38,38,0.15)} }
  .amp-row { animation: amp-rowIn 0.3s cubic-bezier(0.16,1,0.3,1) both; }
  .amp-running-text { animation: amp-pulse 1.4s ease-in-out infinite; }
  .amp-spinner { width:16px;height:16px;border-radius:50%;border:2px solid rgba(220,38,38,0.2);border-top-color:#dc2626;display:inline-block;animation:amp-spin 0.8s linear infinite; }
  .amp-active-row { animation: amp-redPulse 2s ease-in-out infinite; }
`;function zC({onComplete:n}){var z,G,W,F,I,N;const{state:e,setM0:t,setM1:i,setM2:r,setM3:s,setM4:o,setM5:a}=ly(),[l,c]=ie.useState({m0:"running",m1:"waiting",m2:"waiting",m3:"waiting",m5:"waiting",m4:"waiting",m6:"waiting"}),[d,f]=ie.useState({m0:"Upload catalog files to begin"}),[u,p]=ie.useState("m0"),[g,v]=ie.useState("uploading"),[x,h]=ie.useState(1);function m(P,O,q){c(K=>({...K,[P]:O})),q&&f(K=>({...K,[P]:q}))}function _(P){var K,ee;t(P);const O=((K=P==null?void 0:P.preMatched)==null?void 0:K.length)||0,q=((ee=P==null?void 0:P.toProcess)==null?void 0:ee.length)||0;m("m0","done",`${O} pre-matched · ${q} to process`),v("running"),p("m1"),m("m1","running","Scanning for PHI…"),h(2)}function S(P){i(P),m("m1","done",`Risk: ${(P==null?void 0:P.riskLevel)||"clean"}`),p("m2"),m("m2","running","Routing by domain…"),h(3)}function w(P){var O;r(P),m("m2","done",`${((O=P==null?void 0:P.triaged)==null?void 0:O.length)||0} items triaged`),p("m3"),m("m3","running","Resolving aliases…"),h(4)}function b(P){var O;s(P),m("m3","done",`${((O=P==null?void 0:P.resolved)==null?void 0:O.length)||0} resolved`),p("m5"),m("m5","running","Enriching definitions…"),h(5)}function R(P){var O;a(P),m("m5","done",`${((O=P==null?void 0:P.enriched)==null?void 0:O.length)||0} enriched`),p("m4"),m("m4","running","Assigning DNA codes…"),h(6)}function y(P){var O;o(P),m("m4","done",`${((O=P==null?void 0:P.results)==null?void 0:O.length)||0} codes assigned`),p("m6"),m("m6","running","Generating delta report…"),h(7)}function T(){m("m6","done","Report generated · downloaded ✓"),p(null),v("done"),n==null||n()}const D=Object.values(l).filter(P=>P==="done").length,L=Math.round(D/Vd.length*100);return E.jsxs(E.Fragment,{children:[E.jsx("style",{children:BC}),E.jsxs("div",{style:{maxWidth:860,margin:"0 auto",padding:"32px 20px"},children:[E.jsxs("div",{style:{marginBottom:24},children:[E.jsxs("div",{style:{display:"flex",alignItems:"flex-end",justifyContent:"space-between",marginBottom:6},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#dc2626",letterSpacing:"3px",textTransform:"uppercase",marginBottom:4},children:"Auto Pipeline"}),E.jsx("h2",{style:{fontSize:24,fontWeight:900,color:"#ffffff",letterSpacing:"-0.04em",lineHeight:1},children:g==="uploading"?"Upload Files to Begin":g==="done"?"Pipeline Complete":`Processing — ${D}/7`})]}),E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[g==="running"&&E.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,padding:"5px 12px",borderRadius:6,border:"1px solid rgba(220,38,38,0.35)",background:"rgba(220,38,38,0.07)"},children:[E.jsx("div",{className:"live-dot"}),E.jsx("span",{style:{fontSize:10,fontWeight:700,color:"#dc2626",letterSpacing:"2px",textTransform:"uppercase"},children:"Live"})]}),E.jsxs("span",{style:{fontSize:22,fontWeight:900,color:L===100?"#ffffff":"rgba(255,255,255,0.3)"},children:[L,"%"]})]})]}),(g==="running"||g==="done")&&E.jsx("div",{style:{height:2,background:"rgba(255,255,255,0.08)",borderRadius:1,overflow:"hidden"},children:E.jsx("div",{style:{height:"100%",width:`${L}%`,background:L===100?"#ffffff":"#dc2626",transition:"width 0.6s cubic-bezier(0.16,1,0.3,1)",animation:"amp-barFill 0.6s ease"}})})]}),E.jsxs("div",{style:{border:"1px solid rgba(255,255,255,0.08)",borderRadius:16,overflow:"hidden"},children:[E.jsx("div",{style:{display:"grid",gridTemplateColumns:"48px 1fr 100px 120px",padding:"10px 20px",background:"rgba(255,255,255,0.03)",borderBottom:"1px solid rgba(255,255,255,0.06)"},children:["#","Module","Status","Result"].map(P=>E.jsx("span",{style:{fontSize:9,fontWeight:700,color:"rgba(255,255,255,0.25)",letterSpacing:"2px",textTransform:"uppercase"},children:P},P))}),Vd.map((P,O)=>{const q=l[P.key],K=d[P.key],ee=u===P.key,Ne=q==="done";return E.jsxs("div",{className:`amp-row${ee?" amp-active-row":""}`,style:{display:"grid",gridTemplateColumns:"48px 1fr 100px 120px",padding:"14px 20px",alignItems:"center",background:Ne?"rgba(255,255,255,0.02)":ee?"rgba(220,38,38,0.05)":"transparent",borderBottom:O<Vd.length-1?"1px solid rgba(255,255,255,0.05)":"none",transition:"background 0.3s",animationDelay:`${O*.04}s`},children:[E.jsx("span",{style:{fontWeight:900,fontSize:13,fontFamily:"monospace",color:Ne?"rgba(255,255,255,0.2)":ee?"#dc2626":"rgba(255,255,255,0.12)"},children:P.num}),E.jsxs("div",{children:[E.jsxs("div",{style:{fontWeight:700,fontSize:13,color:Ne?"rgba(255,255,255,0.5)":ee?"#ffffff":"rgba(255,255,255,0.3)",marginBottom:2},children:[ee&&E.jsx("span",{className:"amp-spinner",style:{marginRight:8}}),P.label]}),E.jsx("div",{style:{fontSize:11,color:"rgba(255,255,255,0.2)"},children:P.desc})]}),E.jsxs("div",{children:[q==="waiting"&&E.jsx("span",{style:{fontSize:9,padding:"3px 8px",borderRadius:4,background:"rgba(255,255,255,0.04)",color:"rgba(255,255,255,0.2)",fontWeight:700,letterSpacing:"1px"},children:"WAITING"}),q==="running"&&E.jsx("span",{style:{fontSize:9,padding:"3px 8px",borderRadius:4,background:"rgba(220,38,38,0.15)",color:"#ef4444",fontWeight:700,letterSpacing:"1px",border:"1px solid rgba(220,38,38,0.3)"},children:"RUNNING"}),q==="done"&&E.jsx("span",{style:{fontSize:9,padding:"3px 8px",borderRadius:4,background:"rgba(255,255,255,0.08)",color:"#ffffff",fontWeight:700,letterSpacing:"1px"},children:"DONE"}),q==="error"&&E.jsx("span",{style:{fontSize:9,padding:"3px 8px",borderRadius:4,background:"rgba(220,38,38,0.2)",color:"#ef4444",fontWeight:700,letterSpacing:"1px"},children:"ERROR"})]}),E.jsx("div",{className:ee?"amp-running-text":"",style:{fontSize:11,color:Ne?"rgba(255,255,255,0.45)":"rgba(255,255,255,0.2)",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},children:K||"—"})]},P.key)})]}),g==="uploading"&&E.jsxs("div",{style:{marginTop:24},children:[E.jsx("div",{style:{fontSize:10,fontWeight:700,color:"rgba(255,255,255,0.3)",letterSpacing:"2px",textTransform:"uppercase",marginBottom:12},children:"Step 01 — Pre-Scan Upload"}),E.jsx(ie.Suspense,{fallback:E.jsx("div",{style:{padding:32,textAlign:"center",border:"1px dashed rgba(255,255,255,0.08)",borderRadius:12,color:"rgba(255,255,255,0.3)",fontSize:13},children:"Loading upload module…"}),children:E.jsx(LC,{onComplete:_})})]}),g==="done"&&E.jsxs("div",{style:{marginTop:24,padding:"28px 32px",background:"#ffffff",borderRadius:16,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[E.jsxs("div",{children:[E.jsx("div",{style:{fontSize:10,fontWeight:700,color:"#dc2626",letterSpacing:"3px",textTransform:"uppercase",marginBottom:4},children:"Pipeline Complete"}),E.jsx("div",{style:{fontSize:20,fontWeight:900,color:"#000000",letterSpacing:"-0.04em"},children:"All 7 modules finished"}),E.jsx("div",{style:{fontSize:13,color:"rgba(0,0,0,0.5)",marginTop:4},children:"Delta report has been generated and downloaded."})]}),E.jsx("div",{style:{fontSize:40},children:"✓"})]}),g==="running"&&E.jsx("div",{style:{position:"absolute",left:"-9999px",pointerEvents:"none",width:1,height:1,overflow:"hidden"},children:E.jsxs(ie.Suspense,{fallback:null,children:[x===2&&E.jsx(NC,{prefillData:e.m0Result?{toProcess:e.m0Result.toProcess}:null,onComplete:S}),x===3&&E.jsx(DC,{prefillData:e.m1Result,onComplete:w}),x===4&&E.jsx(UC,{prefillData:e.m2Result,onComplete:b}),x===5&&E.jsx(OC,{prefillData:e.m3Result,onComplete:R}),x===6&&E.jsx(FC,{prefillData:{...e.m5Result||e.m3Result,masterCatalogs:(z=e.m0Result)==null?void 0:z.masterCatalogs},onComplete:y}),x===7&&E.jsx(kC,{prefillData:{results:(G=e.m4Result)==null?void 0:G.results,hospitalName:(W=e.m4Result)==null?void 0:W.hospitalName,masterCatalogs:(F=e.m4Result)==null?void 0:F.masterCatalogs,masterDNAs:(I=e.m4Result)==null?void 0:I.masterDNAs,preMatched:(N=e.m0Result)==null?void 0:N.preMatched},onComplete:T})]})})]})]})}const Kc="audit_log_v1",cy=500;function tx(n){try{const e=JSON.parse(localStorage.getItem(Kc)||"[]"),t={...n,id:crypto.randomUUID?crypto.randomUUID():Date.now().toString(36),timestamp:new Date().toISOString()};localStorage.setItem(Kc,JSON.stringify([t,...e].slice(0,cy)))}catch{}}function VC(n="system"){function e(i){tx({...i,user:n})}function t(i,r,s="pipeline"){tx({module:i,action:"ERROR: "+r,fileName:s,outcome:"error",itemCount:0,user:n})}return{writeEntry:e,logError:t}}function JC(n,e,t="pipeline"){try{const i=JSON.parse(localStorage.getItem(Kc)||"[]"),r={id:crypto.randomUUID?crypto.randomUUID():Date.now().toString(36),timestamp:new Date().toISOString(),module:n,action:"ERROR: "+e,fileName:t,outcome:"error",itemCount:0,user:"system"};localStorage.setItem(Kc,JSON.stringify([r,...i].slice(0,cy)))}catch{}}const HC=ie.lazy(()=>Tt(()=>import("./M0PreScan-BWJS4Gen.js"),__vite__mapDeps([0,1,2]))),GC=ie.lazy(()=>Tt(()=>import("./M1PHIScrubber-C0v-ylbi.js"),__vite__mapDeps([3,1]))),WC=ie.lazy(()=>Tt(()=>import("./M2TriageRouter-BN-RoRQx.js"),__vite__mapDeps([4,1]))),jC=ie.lazy(()=>Tt(()=>import("./M3AliasEngine-CUKKBvHN.js"),__vite__mapDeps([5,1,6]))),XC=ie.lazy(()=>Tt(()=>import("./M4ConfidenceThreshold-D8bSbw8L.js"),__vite__mapDeps([7,1,6,2]))),YC=ie.lazy(()=>Tt(()=>import("./M5DefinitionEngine-CpXqBlhG.js"),__vite__mapDeps([8,1]))),qC=ie.lazy(()=>Tt(()=>import("./M6DeltaReport-Blj5RTzv.js"),__vite__mapDeps([9,1]))),$C=ie.lazy(()=>Tt(()=>import("./M7AuditLog-BmjLsAP9.js"),__vite__mapDeps([10,1]))),KC=30*60*1e3,$o="eden_mode_v1";function ZC(){var O,q,K,ee,Ne,ze;const[n,e]=ie.useState("landing"),[t,i]=ie.useState(null),[r,s]=ie.useState("USER"),[o,a]=ie.useState(1),[l,c]=ie.useState(new Set),[d,f]=ie.useState(null),[u,p]=ie.useState(!1),[g,v]=ie.useState(null),[x,h]=ie.useState(0),m=ie.useRef(null),{state:_,setM0:S,setM1:w,setM2:b,setM3:R,setM4:y,setM5:T}=ly();ie.useEffect(()=>{const he=sessionStorage.getItem(hc);if(he)try{const j=JSON.parse(he);if(j.username){const re=btoa((navigator.userAgent+window.screen.width+window.screen.height).slice(0,200));if(j.fingerprint&&j.fingerprint!==re){sessionStorage.removeItem(hc);return}i(j.username),s(j.role||"USER"),D();const ne=sessionStorage.getItem($o);(ne==="auto"||ne==="manual")&&f(ne),e("app")}}catch{}},[]),ie.useEffect(()=>{if(!t)return;function he(){m.current&&clearTimeout(m.current),m.current=setTimeout(()=>{W("session-expired")},KC)}return he(),window.addEventListener("mousemove",he),window.addEventListener("keydown",he),window.addEventListener("click",he),()=>{m.current&&clearTimeout(m.current),window.removeEventListener("mousemove",he),window.removeEventListener("keydown",he),window.removeEventListener("click",he)}},[t]);function D(){try{h(Mu().length)}catch{h(1)}}const{writeEntry:L}=VC(t||"system");function z(he,j="info"){v({msg:he,type:j}),setTimeout(()=>v(null),3500)}function G(he,j){i(he),s(j),D(),f(null),sessionStorage.removeItem($o),e("app")}function W(he){sessionStorage.removeItem(hc),sessionStorage.removeItem($o),i(null),s("USER"),a(1),c(new Set),f(null),p(!1),e("landing"),he==="session-expired"&&z("Session expired — please sign in again.","error")}function F(){W()}function I(he){f(he),sessionStorage.setItem($o,he)}function N(){const he=d==="auto"?"manual":"auto";f(he),sessionStorage.setItem($o,he)}function P(he,j,re){var ne,ke,Ae,Ue,_e,De;re(j),c(Ge=>new Set([...Ge,he])),a(he+1<=8?he+1:he),L({module:"Step"+he,action:"Step completed — passed to Step "+(he+1),fileName:"pipeline",outcome:"success",itemCount:Array.isArray(j)?j.length:((ne=j==null?void 0:j.rows)==null?void 0:ne.length)||((ke=j==null?void 0:j.triaged)==null?void 0:ke.length)||((Ae=j==null?void 0:j.resolved)==null?void 0:Ae.length)||((Ue=j==null?void 0:j.results)==null?void 0:Ue.length)||((_e=j==null?void 0:j.enriched)==null?void 0:_e.length)||((De=j==null?void 0:j.toProcess)==null?void 0:De.length)||0})}return n==="landing"?E.jsx(UR,{onEnter:()=>e("login")}):t?d===null?E.jsxs(E.Fragment,{children:[E.jsx(IC,{onSelect:I}),g&&E.jsx(Xl,{msg:g.msg,type:g.type})]}):d==="auto"?E.jsxs(E.Fragment,{children:[E.jsx(Y0,{username:t,role:r,mode:d,onModeToggle:N,onLogout:F,onAdminPanel:r==="SUPER_ADMIN"?()=>p(!0):void 0,userCount:r==="SUPER_ADMIN"?x:void 0,pipelineRunning:!0}),E.jsx(Z0,{role:r}),E.jsx(zC,{onComplete:()=>z("Pipeline complete! Delta report downloaded.","success")}),u&&r==="SUPER_ADMIN"&&E.jsx(J0,{currentUser:t,onClose:()=>{p(!1),D()}}),g&&E.jsx(Xl,{msg:g.msg,type:g.type})]}):E.jsxs(E.Fragment,{children:[E.jsx(Y0,{username:t,role:r,mode:d,onModeToggle:N,onLogout:F,onAdminPanel:r==="SUPER_ADMIN"?()=>p(!0):void 0,userCount:r==="SUPER_ADMIN"?x:void 0}),E.jsx(Z0,{role:r}),E.jsx("div",{style:{display:"none"},children:E.jsxs(ie.Suspense,{fallback:null,children:[o===2&&E.jsx(GC,{prefillData:_.m0Result?{toProcess:_.m0Result.toProcess}:null,onComplete:he=>P(2,he,w)}),o===3&&E.jsx(WC,{prefillData:_.m1Result,onComplete:he=>P(3,he,b)}),o===4&&E.jsx(jC,{prefillData:_.m2Result,onComplete:he=>P(4,he,R)}),o===5&&E.jsx(YC,{prefillData:_.m3Result,onComplete:he=>P(5,he,T)}),o===6&&E.jsx(XC,{prefillData:{..._.m5Result||_.m3Result,masterCatalogs:(O=_.m0Result)==null?void 0:O.masterCatalogs},onComplete:he=>P(6,he,y)}),o===7&&E.jsx(qC,{prefillData:{results:(q=_.m4Result)==null?void 0:q.results,hospitalName:(K=_.m4Result)==null?void 0:K.hospitalName,masterCatalogs:(ee=_.m4Result)==null?void 0:ee.masterCatalogs,masterDNAs:(Ne=_.m4Result)==null?void 0:Ne.masterDNAs,preMatched:(ze=_.m0Result)==null?void 0:ze.preMatched},onComplete:()=>P(7,{},()=>{})}),o===8&&E.jsx($C,{}),o===1&&E.jsx(HC,{onComplete:he=>P(1,he,S)})]})}),u&&r==="SUPER_ADMIN"&&E.jsx(J0,{currentUser:t,onClose:()=>{p(!1),D()}}),g&&E.jsx(Xl,{msg:g.msg,type:g.type})]}):E.jsxs(E.Fragment,{children:[E.jsx(jR,{onLogin:G}),g&&E.jsx(Xl,{msg:g.msg,type:g.type})]})}function Xl({msg:n,type:e}){const i={error:{bg:"#fff5f5",border:"#dc2626",text:"#dc2626"},success:{bg:"#f0fdf4",border:"#16a34a",text:"#16a34a"},info:{bg:"#f8fafc",border:"#64748b",text:"#334155"}}[e];return E.jsx("div",{style:{position:"fixed",bottom:28,left:"50%",transform:"translateX(-50%)",background:i.bg,border:"1px solid rgba(0,0,0,0.08)",borderLeft:`3px solid ${i.border}`,borderRadius:10,padding:"12px 24px",color:i.text,fontSize:12,fontWeight:700,zIndex:9999,boxShadow:"0 8px 40px rgba(0,0,0,0.12)",whiteSpace:"nowrap",letterSpacing:"0.5px",animation:"toastSlide 0.3s cubic-bezier(0.16,1,0.3,1)",fontFamily:"Inter, -apple-system, sans-serif"},children:n})}Hd.createRoot(document.getElementById("root")).render(E.jsx(Ny.StrictMode,{children:E.jsx(ZC,{})}));export{Ny as R,mC as a,_C as b,dC as c,SC as d,fi as g,E as j,JC as l,ie as r,oC as s,VC as u};
