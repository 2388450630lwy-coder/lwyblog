const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-BipfU2E8.js","assets/useCategories-CRoApKUb.js","assets/Home-BjMBD-ql.css","assets/Post-BRLdKOS-.js","assets/images-DopeTKei.js","assets/Post-BA8JItJp.css","assets/Admin-CI4s0S4X.js","assets/Admin-CZ33iDTf.css","assets/Categories-DhzzbLym.js","assets/Categories-BAwrntsB.css","assets/Tags-fmml8c5y.js","assets/Tags-621iPlSZ.css","assets/Archive-CfCiFRNl.js","assets/Archive-CB9w6A7b.css"])))=>i.map(i=>d[i]);
(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))o(p);new MutationObserver(p=>{for(const f of p)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&o(g)}).observe(document,{childList:!0,subtree:!0});function d(p){const f={};return p.integrity&&(f.integrity=p.integrity),p.referrerPolicy&&(f.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?f.credentials="include":p.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function o(p){if(p.ep)return;p.ep=!0;const f=d(p);fetch(p.href,f)}})();function Gm(l){return l&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")?l.default:l}var Ho={exports:{}},Hi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mp;function Pm(){if(mp)return Hi;mp=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.fragment");function d(o,p,f){var g=null;if(f!==void 0&&(g=""+f),p.key!==void 0&&(g=""+p.key),"key"in p){f={};for(var v in p)v!=="key"&&(f[v]=p[v])}else f=p;return p=f.ref,{$$typeof:l,type:o,key:g,ref:p!==void 0?p:null,props:f}}return Hi.Fragment=u,Hi.jsx=d,Hi.jsxs=d,Hi}var yp;function Hm(){return yp||(yp=1,Ho.exports=Pm()),Ho.exports}var D=Hm(),Vo={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vp;function Vm(){if(vp)return ee;vp=1;var l=Symbol.for("react.transitional.element"),u=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),g=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),k=Symbol.iterator;function H(x){return x===null||typeof x!="object"?null:(x=k&&x[k]||x["@@iterator"],typeof x=="function"?x:null)}var q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,G={};function L(x,U,I){this.props=x,this.context=U,this.refs=G,this.updater=I||q}L.prototype.isReactComponent={},L.prototype.setState=function(x,U){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,U,"setState")},L.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function O(){}O.prototype=L.prototype;function j(x,U,I){this.props=x,this.context=U,this.refs=G,this.updater=I||q}var F=j.prototype=new O;F.constructor=j,P(F,L.prototype),F.isPureReactComponent=!0;var Z=Array.isArray;function ie(){}var J={H:null,A:null,T:null,S:null},we=Object.prototype.hasOwnProperty;function je(x,U,I){var X=I.ref;return{$$typeof:l,type:x,key:U,ref:X!==void 0?X:null,props:I}}function Bt(x,U){return je(x.type,U,x.props)}function mt(x){return typeof x=="object"&&x!==null&&x.$$typeof===l}function Xe(x){var U={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(I){return U[I]})}var Nt=/\/+/g;function yt(x,U){return typeof x=="object"&&x!==null&&x.key!=null?Xe(""+x.key):U.toString(36)}function ke(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(ie,ie):(x.status="pending",x.then(function(U){x.status==="pending"&&(x.status="fulfilled",x.value=U)},function(U){x.status==="pending"&&(x.status="rejected",x.reason=U)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function B(x,U,I,X,te){var re=typeof x;(re==="undefined"||re==="boolean")&&(x=null);var he=!1;if(x===null)he=!0;else switch(re){case"bigint":case"string":case"number":he=!0;break;case"object":switch(x.$$typeof){case l:case u:he=!0;break;case w:return he=x._init,B(he(x._payload),U,I,X,te)}}if(he)return te=te(x),he=X===""?"."+yt(x,0):X,Z(te)?(I="",he!=null&&(I=he.replace(Nt,"$&/")+"/"),B(te,U,I,"",function(Qa){return Qa})):te!=null&&(mt(te)&&(te=Bt(te,I+(te.key==null||x&&x.key===te.key?"":(""+te.key).replace(Nt,"$&/")+"/")+he)),U.push(te)),1;he=0;var Ke=X===""?".":X+":";if(Z(x))for(var Me=0;Me<x.length;Me++)X=x[Me],re=Ke+yt(X,Me),he+=B(X,U,I,re,te);else if(Me=H(x),typeof Me=="function")for(x=Me.call(x),Me=0;!(X=x.next()).done;)X=X.value,re=Ke+yt(X,Me++),he+=B(X,U,I,re,te);else if(re==="object"){if(typeof x.then=="function")return B(ke(x),U,I,X,te);throw U=String(x),Error("Objects are not valid as a React child (found: "+(U==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":U)+"). If you meant to render a collection of children, use an array instead.")}return he}function V(x,U,I){if(x==null)return x;var X=[],te=0;return B(x,X,"","",function(re){return U.call(I,re,te++)}),X}function $(x){if(x._status===-1){var U=x._result;U=U(),U.then(function(I){(x._status===0||x._status===-1)&&(x._status=1,x._result=I)},function(I){(x._status===0||x._status===-1)&&(x._status=2,x._result=I)}),x._status===-1&&(x._status=0,x._result=U)}if(x._status===1)return x._result.default;throw x._result}var ye=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var U=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(U))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},Ce={map:V,forEach:function(x,U,I){V(x,function(){U.apply(this,arguments)},I)},count:function(x){var U=0;return V(x,function(){U++}),U},toArray:function(x){return V(x,function(U){return U})||[]},only:function(x){if(!mt(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return ee.Activity=S,ee.Children=Ce,ee.Component=L,ee.Fragment=d,ee.Profiler=p,ee.PureComponent=j,ee.StrictMode=o,ee.Suspense=m,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,ee.__COMPILER_RUNTIME={__proto__:null,c:function(x){return J.H.useMemoCache(x)}},ee.cache=function(x){return function(){return x.apply(null,arguments)}},ee.cacheSignal=function(){return null},ee.cloneElement=function(x,U,I){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var X=P({},x.props),te=x.key;if(U!=null)for(re in U.key!==void 0&&(te=""+U.key),U)!we.call(U,re)||re==="key"||re==="__self"||re==="__source"||re==="ref"&&U.ref===void 0||(X[re]=U[re]);var re=arguments.length-2;if(re===1)X.children=I;else if(1<re){for(var he=Array(re),Ke=0;Ke<re;Ke++)he[Ke]=arguments[Ke+2];X.children=he}return je(x.type,te,X)},ee.createContext=function(x){return x={$$typeof:g,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:f,_context:x},x},ee.createElement=function(x,U,I){var X,te={},re=null;if(U!=null)for(X in U.key!==void 0&&(re=""+U.key),U)we.call(U,X)&&X!=="key"&&X!=="__self"&&X!=="__source"&&(te[X]=U[X]);var he=arguments.length-2;if(he===1)te.children=I;else if(1<he){for(var Ke=Array(he),Me=0;Me<he;Me++)Ke[Me]=arguments[Me+2];te.children=Ke}if(x&&x.defaultProps)for(X in he=x.defaultProps,he)te[X]===void 0&&(te[X]=he[X]);return je(x,re,te)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(x){return{$$typeof:v,render:x}},ee.isValidElement=mt,ee.lazy=function(x){return{$$typeof:w,_payload:{_status:-1,_result:x},_init:$}},ee.memo=function(x,U){return{$$typeof:h,type:x,compare:U===void 0?null:U}},ee.startTransition=function(x){var U=J.T,I={};J.T=I;try{var X=x(),te=J.S;te!==null&&te(I,X),typeof X=="object"&&X!==null&&typeof X.then=="function"&&X.then(ie,ye)}catch(re){ye(re)}finally{U!==null&&I.types!==null&&(U.types=I.types),J.T=U}},ee.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},ee.use=function(x){return J.H.use(x)},ee.useActionState=function(x,U,I){return J.H.useActionState(x,U,I)},ee.useCallback=function(x,U){return J.H.useCallback(x,U)},ee.useContext=function(x){return J.H.useContext(x)},ee.useDebugValue=function(){},ee.useDeferredValue=function(x,U){return J.H.useDeferredValue(x,U)},ee.useEffect=function(x,U){return J.H.useEffect(x,U)},ee.useEffectEvent=function(x){return J.H.useEffectEvent(x)},ee.useId=function(){return J.H.useId()},ee.useImperativeHandle=function(x,U,I){return J.H.useImperativeHandle(x,U,I)},ee.useInsertionEffect=function(x,U){return J.H.useInsertionEffect(x,U)},ee.useLayoutEffect=function(x,U){return J.H.useLayoutEffect(x,U)},ee.useMemo=function(x,U){return J.H.useMemo(x,U)},ee.useOptimistic=function(x,U){return J.H.useOptimistic(x,U)},ee.useReducer=function(x,U,I){return J.H.useReducer(x,U,I)},ee.useRef=function(x){return J.H.useRef(x)},ee.useState=function(x){return J.H.useState(x)},ee.useSyncExternalStore=function(x,U,I){return J.H.useSyncExternalStore(x,U,I)},ee.useTransition=function(){return J.H.useTransition()},ee.version="19.2.6",ee}var bp;function iu(){return bp||(bp=1,Vo.exports=Vm()),Vo.exports}var _=iu();const un=Gm(_);var Io={exports:{}},Vi={},qo={exports:{}},Fo={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xp;function Im(){return xp||(xp=1,(function(l){function u(B,V){var $=B.length;B.push(V);e:for(;0<$;){var ye=$-1>>>1,Ce=B[ye];if(0<p(Ce,V))B[ye]=V,B[$]=Ce,$=ye;else break e}}function d(B){return B.length===0?null:B[0]}function o(B){if(B.length===0)return null;var V=B[0],$=B.pop();if($!==V){B[0]=$;e:for(var ye=0,Ce=B.length,x=Ce>>>1;ye<x;){var U=2*(ye+1)-1,I=B[U],X=U+1,te=B[X];if(0>p(I,$))X<Ce&&0>p(te,I)?(B[ye]=te,B[X]=$,ye=X):(B[ye]=I,B[U]=$,ye=U);else if(X<Ce&&0>p(te,$))B[ye]=te,B[X]=$,ye=X;else break e}}return V}function p(B,V){var $=B.sortIndex-V.sortIndex;return $!==0?$:B.id-V.id}if(l.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;l.unstable_now=function(){return f.now()}}else{var g=Date,v=g.now();l.unstable_now=function(){return g.now()-v}}var m=[],h=[],w=1,S=null,k=3,H=!1,q=!1,P=!1,G=!1,L=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;function F(B){for(var V=d(h);V!==null;){if(V.callback===null)o(h);else if(V.startTime<=B)o(h),V.sortIndex=V.expirationTime,u(m,V);else break;V=d(h)}}function Z(B){if(P=!1,F(B),!q)if(d(m)!==null)q=!0,ie||(ie=!0,Xe());else{var V=d(h);V!==null&&ke(Z,V.startTime-B)}}var ie=!1,J=-1,we=5,je=-1;function Bt(){return G?!0:!(l.unstable_now()-je<we)}function mt(){if(G=!1,ie){var B=l.unstable_now();je=B;var V=!0;try{e:{q=!1,P&&(P=!1,O(J),J=-1),H=!0;var $=k;try{t:{for(F(B),S=d(m);S!==null&&!(S.expirationTime>B&&Bt());){var ye=S.callback;if(typeof ye=="function"){S.callback=null,k=S.priorityLevel;var Ce=ye(S.expirationTime<=B);if(B=l.unstable_now(),typeof Ce=="function"){S.callback=Ce,F(B),V=!0;break t}S===d(m)&&o(m),F(B)}else o(m);S=d(m)}if(S!==null)V=!0;else{var x=d(h);x!==null&&ke(Z,x.startTime-B),V=!1}}break e}finally{S=null,k=$,H=!1}V=void 0}}finally{V?Xe():ie=!1}}}var Xe;if(typeof j=="function")Xe=function(){j(mt)};else if(typeof MessageChannel<"u"){var Nt=new MessageChannel,yt=Nt.port2;Nt.port1.onmessage=mt,Xe=function(){yt.postMessage(null)}}else Xe=function(){L(mt,0)};function ke(B,V){J=L(function(){B(l.unstable_now())},V)}l.unstable_IdlePriority=5,l.unstable_ImmediatePriority=1,l.unstable_LowPriority=4,l.unstable_NormalPriority=3,l.unstable_Profiling=null,l.unstable_UserBlockingPriority=2,l.unstable_cancelCallback=function(B){B.callback=null},l.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):we=0<B?Math.floor(1e3/B):5},l.unstable_getCurrentPriorityLevel=function(){return k},l.unstable_next=function(B){switch(k){case 1:case 2:case 3:var V=3;break;default:V=k}var $=k;k=V;try{return B()}finally{k=$}},l.unstable_requestPaint=function(){G=!0},l.unstable_runWithPriority=function(B,V){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var $=k;k=B;try{return V()}finally{k=$}},l.unstable_scheduleCallback=function(B,V,$){var ye=l.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?ye+$:ye):$=ye,B){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=$+Ce,B={id:w++,callback:V,priorityLevel:B,startTime:$,expirationTime:Ce,sortIndex:-1},$>ye?(B.sortIndex=$,u(h,B),d(m)===null&&B===d(h)&&(P?(O(J),J=-1):P=!0,ke(Z,$-ye))):(B.sortIndex=Ce,u(m,B),q||H||(q=!0,ie||(ie=!0,Xe()))),B},l.unstable_shouldYield=Bt,l.unstable_wrapCallback=function(B){var V=k;return function(){var $=k;k=V;try{return B.apply(this,arguments)}finally{k=$}}}})(Fo)),Fo}var Cp;function qm(){return Cp||(Cp=1,qo.exports=Im()),qo.exports}var Yo={exports:{}},Qe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sp;function Fm(){if(Sp)return Qe;Sp=1;var l=iu();function u(m){var h="https://react.dev/errors/"+m;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)h+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+m+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var o={d:{f:d,r:function(){throw Error(u(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},p=Symbol.for("react.portal");function f(m,h,w){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:S==null?null:""+S,children:m,containerInfo:h,implementation:w}}var g=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function v(m,h){if(m==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,Qe.createPortal=function(m,h){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(u(299));return f(m,h,null,w)},Qe.flushSync=function(m){var h=g.T,w=o.p;try{if(g.T=null,o.p=2,m)return m()}finally{g.T=h,o.p=w,o.d.f()}},Qe.preconnect=function(m,h){typeof m=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,o.d.C(m,h))},Qe.prefetchDNS=function(m){typeof m=="string"&&o.d.D(m)},Qe.preinit=function(m,h){if(typeof m=="string"&&h&&typeof h.as=="string"){var w=h.as,S=v(w,h.crossOrigin),k=typeof h.integrity=="string"?h.integrity:void 0,H=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;w==="style"?o.d.S(m,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:k,fetchPriority:H}):w==="script"&&o.d.X(m,{crossOrigin:S,integrity:k,fetchPriority:H,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Qe.preinitModule=function(m,h){if(typeof m=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var w=v(h.as,h.crossOrigin);o.d.M(m,{crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&o.d.M(m)},Qe.preload=function(m,h){if(typeof m=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var w=h.as,S=v(w,h.crossOrigin);o.d.L(m,w,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Qe.preloadModule=function(m,h){if(typeof m=="string")if(h){var w=v(h.as,h.crossOrigin);o.d.m(m,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:w,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else o.d.m(m)},Qe.requestFormReset=function(m){o.d.r(m)},Qe.unstable_batchedUpdates=function(m,h){return m(h)},Qe.useFormState=function(m,h,w){return g.H.useFormState(m,h,w)},Qe.useFormStatus=function(){return g.H.useHostTransitionStatus()},Qe.version="19.2.6",Qe}var _p;function Pp(){if(_p)return Yo.exports;_p=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),Yo.exports=Fm(),Yo.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function Ym(){if(Tp)return Vi;Tp=1;var l=qm(),u=iu(),d=Pp();function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function g(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function v(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(f(e)!==e)throw Error(o(188))}function h(e){var t=e.alternate;if(!t){if(t=f(e),t===null)throw Error(o(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var r=i.alternate;if(r===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===r.child){for(r=i.child;r;){if(r===n)return m(i),e;if(r===a)return m(i),t;r=r.sibling}throw Error(o(188))}if(n.return!==a.return)n=i,a=r;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,a=r;break}if(c===a){s=!0,a=i,n=r;break}c=c.sibling}if(!s){for(c=r.child;c;){if(c===n){s=!0,n=r,a=i;break}if(c===a){s=!0,a=r,n=i;break}c=c.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==a)throw Error(o(190))}if(n.tag!==3)throw Error(o(188));return n.stateNode.current===n?e:t}function w(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=w(e),t!==null)return t;e=e.sibling}return null}var S=Object.assign,k=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),q=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),j=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),ie=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),we=Symbol.for("react.lazy"),je=Symbol.for("react.activity"),Bt=Symbol.for("react.memo_cache_sentinel"),mt=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=mt&&e[mt]||e["@@iterator"],typeof e=="function"?e:null)}var Nt=Symbol.for("react.client.reference");function yt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Nt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case L:return"Profiler";case G:return"StrictMode";case Z:return"Suspense";case ie:return"SuspenseList";case je:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case q:return"Portal";case j:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case F:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return t=e.displayName||null,t!==null?t:yt(e.type)||"Memo";case we:t=e._payload,e=e._init;try{return yt(e(t))}catch{}}return null}var ke=Array.isArray,B=u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$={pending:!1,data:null,method:null,action:null},ye=[],Ce=-1;function x(e){return{current:e}}function U(e){0>Ce||(e.current=ye[Ce],ye[Ce]=null,Ce--)}function I(e,t){Ce++,ye[Ce]=e.current,e.current=t}var X=x(null),te=x(null),re=x(null),he=x(null);function Ke(e,t){switch(I(re,t),I(te,e),I(X,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Gf(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Gf(t),e=Pf(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}U(X),I(X,e)}function Me(){U(X),U(te),U(re)}function Qa(e){e.memoizedState!==null&&I(he,e);var t=X.current,n=Pf(t,e.type);t!==n&&(I(te,e),I(X,n))}function Qi(e){te.current===e&&(U(X),U(te)),he.current===e&&(U(he),Ui._currentValue=$)}var Sl,hu;function Gn(e){if(Sl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Sl=t&&t[1]||"",hu=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Sl+e+hu}var _l=!1;function Tl(e,t){if(!e||_l)return"";_l=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(t){var z=function(){throw Error()};if(Object.defineProperty(z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(z,[])}catch(R){var E=R}Reflect.construct(e,[],z)}else{try{z.call()}catch(R){E=R}e.call(z.prototype)}}else{try{throw Error()}catch(R){E=R}(z=e())&&typeof z.catch=="function"&&z.catch(function(){})}}catch(R){if(R&&E&&typeof R.stack=="string")return[R.stack,E.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=a.DetermineComponentFrameRoot(),s=r[0],c=r[1];if(s&&c){var y=s.split(`
`),A=c.split(`
`);for(i=a=0;a<y.length&&!y[a].includes("DetermineComponentFrameRoot");)a++;for(;i<A.length&&!A[i].includes("DetermineComponentFrameRoot");)i++;if(a===y.length||i===A.length)for(a=y.length-1,i=A.length-1;1<=a&&0<=i&&y[a]!==A[i];)i--;for(;1<=a&&0<=i;a--,i--)if(y[a]!==A[i]){if(a!==1||i!==1)do if(a--,i--,0>i||y[a]!==A[i]){var M=`
`+y[a].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=a&&0<=i);break}}}finally{_l=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Gn(n):""}function mh(e,t){switch(e.tag){case 26:case 27:case 5:return Gn(e.type);case 16:return Gn("Lazy");case 13:return e.child!==t&&t!==null?Gn("Suspense Fallback"):Gn("Suspense");case 19:return Gn("SuspenseList");case 0:case 15:return Tl(e.type,!1);case 11:return Tl(e.type.render,!1);case 1:return Tl(e.type,!0);case 31:return Gn("Activity");default:return""}}function gu(e){try{var t="",n=null;do t+=mh(e,n),n=e,e=e.return;while(e);return t}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var wl=Object.prototype.hasOwnProperty,Al=l.unstable_scheduleCallback,El=l.unstable_cancelCallback,yh=l.unstable_shouldYield,vh=l.unstable_requestPaint,rt=l.unstable_now,bh=l.unstable_getCurrentPriorityLevel,mu=l.unstable_ImmediatePriority,yu=l.unstable_UserBlockingPriority,Zi=l.unstable_NormalPriority,xh=l.unstable_LowPriority,vu=l.unstable_IdlePriority,Ch=l.log,Sh=l.unstable_setDisableYieldValue,Za=null,lt=null;function dn(e){if(typeof Ch=="function"&&Sh(e),lt&&typeof lt.setStrictMode=="function")try{lt.setStrictMode(Za,e)}catch{}}var st=Math.clz32?Math.clz32:wh,_h=Math.log,Th=Math.LN2;function wh(e){return e>>>=0,e===0?32:31-(_h(e)/Th|0)|0}var Ki=256,Ji=262144,Wi=4194304;function Pn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $i(e,t,n){var a=e.pendingLanes;if(a===0)return 0;var i=0,r=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~r,a!==0?i=Pn(a):(s&=c,s!==0?i=Pn(s):n||(n=c&~e,n!==0&&(i=Pn(n))))):(c=a&~r,c!==0?i=Pn(c):s!==0?i=Pn(s):n||(n=a&~e,n!==0&&(i=Pn(n)))),i===0?0:t!==0&&t!==i&&(t&r)===0&&(r=i&-i,n=t&-t,r>=n||r===32&&(n&4194048)!==0)?t:i}function Ka(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Ah(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function bu(){var e=Wi;return Wi<<=1,(Wi&62914560)===0&&(Wi=4194304),e}function Dl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ja(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Eh(e,t,n,a,i,r){var s=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var c=e.entanglements,y=e.expirationTimes,A=e.hiddenUpdates;for(n=s&~n;0<n;){var M=31-st(n),z=1<<M;c[M]=0,y[M]=-1;var E=A[M];if(E!==null)for(A[M]=null,M=0;M<E.length;M++){var R=E[M];R!==null&&(R.lane&=-536870913)}n&=~z}a!==0&&xu(e,a,0),r!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=r&~(s&~t))}function xu(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var a=31-st(t);e.entangledLanes|=t,e.entanglements[a]=e.entanglements[a]|1073741824|n&261930}function Cu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-st(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}function Su(e,t){var n=t&-t;return n=(n&42)!==0?1:Rl(n),(n&(e.suspendedLanes|t))!==0?0:n}function Rl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ml(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function _u(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:up(e.type))}function Tu(e,t){var n=V.p;try{return V.p=e,t()}finally{V.p=n}}var fn=Math.random().toString(36).slice(2),Ve="__reactFiber$"+fn,We="__reactProps$"+fn,sa="__reactContainer$"+fn,Ll="__reactEvents$"+fn,Dh="__reactListeners$"+fn,Rh="__reactHandles$"+fn,wu="__reactResources$"+fn,Wa="__reactMarker$"+fn;function Ol(e){delete e[Ve],delete e[We],delete e[Ll],delete e[Dh],delete e[Rh]}function oa(e){var t=e[Ve];if(t)return t;for(var n=e.parentNode;n;){if(t=n[sa]||n[Ve]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Xf(e);e!==null;){if(n=e[Ve])return n;e=Xf(e)}return t}e=n,n=e.parentNode}return null}function ua(e){if(e=e[Ve]||e[sa]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function $a(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(o(33))}function ca(e){var t=e[wu];return t||(t=e[wu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Pe(e){e[Wa]=!0}var Au=new Set,Eu={};function Hn(e,t){da(e,t),da(e+"Capture",t)}function da(e,t){for(Eu[e]=t,e=0;e<t.length;e++)Au.add(t[e])}var Mh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Du={},Ru={};function Lh(e){return wl.call(Ru,e)?!0:wl.call(Du,e)?!1:Mh.test(e)?Ru[e]=!0:(Du[e]=!0,!1)}function er(e,t,n){if(Lh(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var a=t.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function tr(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function Vt(e,t,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+a)}}function vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Mu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Oh(e,t,n){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,r=a.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){n=""+s,r.call(this,s)}}),Object.defineProperty(e,t,{enumerable:a.enumerable}),{getValue:function(){return n},setValue:function(s){n=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kl(e){if(!e._valueTracker){var t=Mu(e)?"checked":"value";e._valueTracker=Oh(e,t,""+e[t])}}function Lu(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=Mu(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function nr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var kh=/[\n"\\]/g;function bt(e){return e.replace(kh,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Bl(e,t,n,a,i,r,s,c){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+vt(t)):e.value!==""+vt(t)&&(e.value=""+vt(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Nl(e,s,vt(t)):n!=null?Nl(e,s,vt(n)):a!=null&&e.removeAttribute("value"),i==null&&r!=null&&(e.defaultChecked=!!r),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+vt(c):e.removeAttribute("name")}function Ou(e,t,n,a,i,r,s,c){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||n!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){kl(e);return}n=n!=null?""+vt(n):"",t=t!=null?""+vt(t):n,c||t===e.value||(e.value=t),e.defaultValue=t}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),kl(e)}function Nl(e,t,n){t==="number"&&nr(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function fa(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+vt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function ku(e,t,n){if(t!=null&&(t=""+vt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+vt(n):""}function Bu(e,t,n,a){if(t==null){if(a!=null){if(n!=null)throw Error(o(92));if(ke(a)){if(1<a.length)throw Error(o(93));a=a[0]}n=a}n==null&&(n=""),t=n}n=vt(t),e.defaultValue=n,a=e.textContent,a===n&&a!==""&&a!==null&&(e.value=a),kl(e)}function pa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Bh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Nu(e,t,n){var a=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?a?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":a?e.setProperty(t,n):typeof n!="number"||n===0||Bh.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function zu(e,t,n){if(t!=null&&typeof t!="object")throw Error(o(62));if(e=e.style,n!=null){for(var a in n)!n.hasOwnProperty(a)||t!=null&&t.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in t)a=t[i],t.hasOwnProperty(i)&&n[i]!==a&&Nu(e,i,a)}else for(var r in t)t.hasOwnProperty(r)&&Nu(e,r,t[r])}function zl(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ar(e){return zh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function It(){}var Ul=null;function jl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ha=null,ga=null;function Uu(e){var t=ua(e);if(t&&(e=t.stateNode)){var n=e[We]||null;e:switch(e=t.stateNode,t.type){case"input":if(Bl(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+bt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=a[We]||null;if(!i)throw Error(o(90));Bl(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)a=n[t],a.form===e.form&&Lu(a)}break e;case"textarea":ku(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&fa(e,!!n.multiple,t,!1)}}}var Gl=!1;function ju(e,t,n){if(Gl)return e(t,n);Gl=!0;try{var a=e(t);return a}finally{if(Gl=!1,(ha!==null||ga!==null)&&(qr(),ha&&(t=ha,e=ga,ga=ha=null,Uu(t),e)))for(t=0;t<e.length;t++)Uu(e[t])}}function ei(e,t){var n=e.stateNode;if(n===null)return null;var a=n[We]||null;if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(o(231,t,typeof n));return n}var qt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pl=!1;if(qt)try{var ti={};Object.defineProperty(ti,"passive",{get:function(){Pl=!0}}),window.addEventListener("test",ti,ti),window.removeEventListener("test",ti,ti)}catch{Pl=!1}var pn=null,Hl=null,ir=null;function Gu(){if(ir)return ir;var e,t=Hl,n=t.length,a,i="value"in pn?pn.value:pn.textContent,r=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(a=1;a<=s&&t[n-a]===i[r-a];a++);return ir=i.slice(e,1<a?1-a:void 0)}function rr(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function lr(){return!0}function Pu(){return!1}function $e(e){function t(n,a,i,r,s){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=r,this.target=s,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(n=e[c],this[c]=n?n(r):r[c]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?lr:Pu,this.isPropagationStopped=Pu,this}return S(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=lr)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=lr)},persist:function(){},isPersistent:lr}),t}var Vn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sr=$e(Vn),ni=S({},Vn,{view:0,detail:0}),Uh=$e(ni),Vl,Il,ai,or=S({},ni,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ai&&(ai&&e.type==="mousemove"?(Vl=e.screenX-ai.screenX,Il=e.screenY-ai.screenY):Il=Vl=0,ai=e),Vl)},movementY:function(e){return"movementY"in e?e.movementY:Il}}),Hu=$e(or),jh=S({},or,{dataTransfer:0}),Gh=$e(jh),Ph=S({},ni,{relatedTarget:0}),ql=$e(Ph),Hh=S({},Vn,{animationName:0,elapsedTime:0,pseudoElement:0}),Vh=$e(Hh),Ih=S({},Vn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qh=$e(Ih),Fh=S({},Vn,{data:0}),Vu=$e(Fh),Yh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Xh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qh[e])?!!t[e]:!1}function Fl(){return Zh}var Kh=S({},ni,{key:function(e){if(e.key){var t=Yh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=rr(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Xh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fl,charCode:function(e){return e.type==="keypress"?rr(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?rr(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Jh=$e(Kh),Wh=S({},or,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Iu=$e(Wh),$h=S({},ni,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fl}),eg=$e($h),tg=S({},Vn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ng=$e(tg),ag=S({},or,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ig=$e(ag),rg=S({},Vn,{newState:0,oldState:0}),lg=$e(rg),sg=[9,13,27,32],Yl=qt&&"CompositionEvent"in window,ii=null;qt&&"documentMode"in document&&(ii=document.documentMode);var og=qt&&"TextEvent"in window&&!ii,qu=qt&&(!Yl||ii&&8<ii&&11>=ii),Fu=" ",Yu=!1;function Xu(e,t){switch(e){case"keyup":return sg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ma=!1;function ug(e,t){switch(e){case"compositionend":return Qu(t);case"keypress":return t.which!==32?null:(Yu=!0,Fu);case"textInput":return e=t.data,e===Fu&&Yu?null:e;default:return null}}function cg(e,t){if(ma)return e==="compositionend"||!Yl&&Xu(e,t)?(e=Gu(),ir=Hl=pn=null,ma=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return qu&&t.locale!=="ko"?null:t.data;default:return null}}var dg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!dg[e.type]:t==="textarea"}function Ku(e,t,n,a){ha?ga?ga.push(a):ga=[a]:ha=a,t=Jr(t,"onChange"),0<t.length&&(n=new sr("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var ri=null,li=null;function fg(e){kf(e,0)}function ur(e){var t=$a(e);if(Lu(t))return e}function Ju(e,t){if(e==="change")return t}var Wu=!1;if(qt){var Xl;if(qt){var Ql="oninput"in document;if(!Ql){var $u=document.createElement("div");$u.setAttribute("oninput","return;"),Ql=typeof $u.oninput=="function"}Xl=Ql}else Xl=!1;Wu=Xl&&(!document.documentMode||9<document.documentMode)}function ec(){ri&&(ri.detachEvent("onpropertychange",tc),li=ri=null)}function tc(e){if(e.propertyName==="value"&&ur(li)){var t=[];Ku(t,li,e,jl(e)),ju(fg,t)}}function pg(e,t,n){e==="focusin"?(ec(),ri=t,li=n,ri.attachEvent("onpropertychange",tc)):e==="focusout"&&ec()}function hg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ur(li)}function gg(e,t){if(e==="click")return ur(t)}function mg(e,t){if(e==="input"||e==="change")return ur(t)}function yg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ot=typeof Object.is=="function"?Object.is:yg;function si(e,t){if(ot(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!wl.call(t,i)||!ot(e[i],t[i]))return!1}return!0}function nc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ac(e,t){var n=nc(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=nc(n)}}function ic(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?ic(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=nr(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=nr(e.document)}return t}function Zl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var vg=qt&&"documentMode"in document&&11>=document.documentMode,ya=null,Kl=null,oi=null,Jl=!1;function lc(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Jl||ya==null||ya!==nr(a)||(a=ya,"selectionStart"in a&&Zl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),oi&&si(oi,a)||(oi=a,a=Jr(Kl,"onSelect"),0<a.length&&(t=new sr("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=ya)))}function In(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var va={animationend:In("Animation","AnimationEnd"),animationiteration:In("Animation","AnimationIteration"),animationstart:In("Animation","AnimationStart"),transitionrun:In("Transition","TransitionRun"),transitionstart:In("Transition","TransitionStart"),transitioncancel:In("Transition","TransitionCancel"),transitionend:In("Transition","TransitionEnd")},Wl={},sc={};qt&&(sc=document.createElement("div").style,"AnimationEvent"in window||(delete va.animationend.animation,delete va.animationiteration.animation,delete va.animationstart.animation),"TransitionEvent"in window||delete va.transitionend.transition);function qn(e){if(Wl[e])return Wl[e];if(!va[e])return e;var t=va[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in sc)return Wl[e]=t[n];return e}var oc=qn("animationend"),uc=qn("animationiteration"),cc=qn("animationstart"),bg=qn("transitionrun"),xg=qn("transitionstart"),Cg=qn("transitioncancel"),dc=qn("transitionend"),fc=new Map,$l="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");$l.push("scrollEnd");function Rt(e,t){fc.set(e,t),Hn(t,[e])}var cr=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xt=[],ba=0,es=0;function dr(){for(var e=ba,t=es=ba=0;t<e;){var n=xt[t];xt[t++]=null;var a=xt[t];xt[t++]=null;var i=xt[t];xt[t++]=null;var r=xt[t];if(xt[t++]=null,a!==null&&i!==null){var s=a.pending;s===null?i.next=i:(i.next=s.next,s.next=i),a.pending=i}r!==0&&pc(n,i,r)}}function fr(e,t,n,a){xt[ba++]=e,xt[ba++]=t,xt[ba++]=n,xt[ba++]=a,es|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function ts(e,t,n,a){return fr(e,t,n,a),pr(e)}function Fn(e,t){return fr(e,null,null,t),pr(e)}function pc(e,t,n){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n);for(var i=!1,r=e.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(i=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,i&&t!==null&&(i=31-st(n),e=r.hiddenUpdates,a=e[i],a===null?e[i]=[t]:a.push(t),t.lane=n|536870912),r):null}function pr(e){if(50<Mi)throw Mi=0,co=null,Error(o(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var xa={};function Sg(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ut(e,t,n,a){return new Sg(e,t,n,a)}function ns(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ft(e,t){var n=e.alternate;return n===null?(n=ut(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function hc(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function hr(e,t,n,a,i,r){var s=0;if(a=e,typeof e=="function")ns(e)&&(s=1);else if(typeof e=="string")s=Em(e,n,X.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case je:return e=ut(31,n,t,i),e.elementType=je,e.lanes=r,e;case P:return Yn(n.children,i,r,t);case G:s=8,i|=24;break;case L:return e=ut(12,n,t,i|2),e.elementType=L,e.lanes=r,e;case Z:return e=ut(13,n,t,i),e.elementType=Z,e.lanes=r,e;case ie:return e=ut(19,n,t,i),e.elementType=ie,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case j:s=10;break e;case O:s=9;break e;case F:s=11;break e;case J:s=14;break e;case we:s=16,a=null;break e}s=29,n=Error(o(130,e===null?"null":typeof e,"")),a=null}return t=ut(s,n,t,i),t.elementType=e,t.type=a,t.lanes=r,t}function Yn(e,t,n,a){return e=ut(7,e,a,t),e.lanes=n,e}function as(e,t,n){return e=ut(6,e,null,t),e.lanes=n,e}function gc(e){var t=ut(18,null,null,0);return t.stateNode=e,t}function is(e,t,n){return t=ut(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mc=new WeakMap;function Ct(e,t){if(typeof e=="object"&&e!==null){var n=mc.get(e);return n!==void 0?n:(t={value:e,source:t,stack:gu(t)},mc.set(e,t),t)}return{value:e,source:t,stack:gu(t)}}var Ca=[],Sa=0,gr=null,ui=0,St=[],_t=0,hn=null,zt=1,Ut="";function Yt(e,t){Ca[Sa++]=ui,Ca[Sa++]=gr,gr=e,ui=t}function yc(e,t,n){St[_t++]=zt,St[_t++]=Ut,St[_t++]=hn,hn=e;var a=zt;e=Ut;var i=32-st(a)-1;a&=~(1<<i),n+=1;var r=32-st(t)+i;if(30<r){var s=i-i%5;r=(a&(1<<s)-1).toString(32),a>>=s,i-=s,zt=1<<32-st(t)+i|n<<i|a,Ut=r+e}else zt=1<<r|n<<i|a,Ut=e}function rs(e){e.return!==null&&(Yt(e,1),yc(e,1,0))}function ls(e){for(;e===gr;)gr=Ca[--Sa],Ca[Sa]=null,ui=Ca[--Sa],Ca[Sa]=null;for(;e===hn;)hn=St[--_t],St[_t]=null,Ut=St[--_t],St[_t]=null,zt=St[--_t],St[_t]=null}function vc(e,t){St[_t++]=zt,St[_t++]=Ut,St[_t++]=hn,zt=t.id,Ut=t.overflow,hn=e}var Ie=null,_e=null,ce=!1,gn=null,Tt=!1,ss=Error(o(519));function mn(e){var t=Error(o(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ci(Ct(t,e)),ss}function bc(e){var t=e.stateNode,n=e.type,a=e.memoizedProps;switch(t[Ve]=e,t[We]=a,n){case"dialog":se("cancel",t),se("close",t);break;case"iframe":case"object":case"embed":se("load",t);break;case"video":case"audio":for(n=0;n<Oi.length;n++)se(Oi[n],t);break;case"source":se("error",t);break;case"img":case"image":case"link":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"input":se("invalid",t),Ou(t,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":se("invalid",t);break;case"textarea":se("invalid",t),Bu(t,a.value,a.defaultValue,a.children)}n=a.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||a.suppressHydrationWarning===!0||Uf(t.textContent,n)?(a.popover!=null&&(se("beforetoggle",t),se("toggle",t)),a.onScroll!=null&&se("scroll",t),a.onScrollEnd!=null&&se("scrollend",t),a.onClick!=null&&(t.onclick=It),t=!0):t=!1,t||mn(e,!0)}function xc(e){for(Ie=e.return;Ie;)switch(Ie.tag){case 5:case 31:case 13:Tt=!1;return;case 27:case 3:Tt=!0;return;default:Ie=Ie.return}}function _a(e){if(e!==Ie)return!1;if(!ce)return xc(e),ce=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Ao(e.type,e.memoizedProps)),n=!n),n&&_e&&mn(e),xc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));_e=Yf(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));_e=Yf(e)}else t===27?(t=_e,Mn(e.type)?(e=Lo,Lo=null,_e=e):_e=t):_e=Ie?At(e.stateNode.nextSibling):null;return!0}function Xn(){_e=Ie=null,ce=!1}function os(){var e=gn;return e!==null&&(at===null?at=e:at.push.apply(at,e),gn=null),e}function ci(e){gn===null?gn=[e]:gn.push(e)}var us=x(null),Qn=null,Xt=null;function yn(e,t,n){I(us,t._currentValue),t._currentValue=n}function Qt(e){e._currentValue=us.current,U(us)}function cs(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function ds(e,t,n,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var r=i.dependencies;if(r!==null){var s=i.child;r=r.firstContext;e:for(;r!==null;){var c=r;r=i;for(var y=0;y<t.length;y++)if(c.context===t[y]){r.lanes|=n,c=r.alternate,c!==null&&(c.lanes|=n),cs(r.return,n,e),a||(s=null);break e}r=c.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(o(341));s.lanes|=n,r=s.alternate,r!==null&&(r.lanes|=n),cs(s,n,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function Ta(e,t,n,a){e=null;for(var i=t,r=!1;i!==null;){if(!r){if((i.flags&524288)!==0)r=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(o(387));if(s=s.memoizedProps,s!==null){var c=i.type;ot(i.pendingProps.value,s.value)||(e!==null?e.push(c):e=[c])}}else if(i===he.current){if(s=i.alternate,s===null)throw Error(o(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Ui):e=[Ui])}i=i.return}e!==null&&ds(t,e,n,a),t.flags|=262144}function mr(e){for(e=e.firstContext;e!==null;){if(!ot(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Zn(e){Qn=e,Xt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function qe(e){return Cc(Qn,e)}function yr(e,t){return Qn===null&&Zn(e),Cc(e,t)}function Cc(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Xt===null){if(e===null)throw Error(o(308));Xt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Xt=Xt.next=t;return n}var _g=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,a){e.push(a)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},Tg=l.unstable_scheduleCallback,wg=l.unstable_NormalPriority,Be={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function fs(){return{controller:new _g,data:new Map,refCount:0}}function di(e){e.refCount--,e.refCount===0&&Tg(wg,function(){e.controller.abort()})}var fi=null,ps=0,wa=0,Aa=null;function Ag(e,t){if(fi===null){var n=fi=[];ps=0,wa=yo(),Aa={status:"pending",value:void 0,then:function(a){n.push(a)}}}return ps++,t.then(Sc,Sc),t}function Sc(){if(--ps===0&&fi!==null){Aa!==null&&(Aa.status="fulfilled");var e=fi;fi=null,wa=0,Aa=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Eg(e,t){var n=[],a={status:"pending",value:null,reason:null,then:function(i){n.push(i)}};return e.then(function(){a.status="fulfilled",a.value=t;for(var i=0;i<n.length;i++)(0,n[i])(t)},function(i){for(a.status="rejected",a.reason=i,i=0;i<n.length;i++)(0,n[i])(void 0)}),a}var _c=B.S;B.S=function(e,t){sf=rt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Ag(e,t),_c!==null&&_c(e,t)};var Kn=x(null);function hs(){var e=Kn.current;return e!==null?e:Se.pooledCache}function vr(e,t){t===null?I(Kn,Kn.current):I(Kn,t.pool)}function Tc(){var e=hs();return e===null?null:{parent:Be._currentValue,pool:e}}var Ea=Error(o(460)),gs=Error(o(474)),br=Error(o(542)),xr={then:function(){}};function wc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ac(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(It,It),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dc(e),e;default:if(typeof t.status=="string")t.then(It,It);else{if(e=Se,e!==null&&100<e.shellSuspendCounter)throw Error(o(482));e=t,e.status="pending",e.then(function(a){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=a}},function(a){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=a}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dc(e),e}throw Wn=t,Ea}}function Jn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(Wn=n,Ea):n}}var Wn=null;function Ec(){if(Wn===null)throw Error(o(459));var e=Wn;return Wn=null,e}function Dc(e){if(e===Ea||e===br)throw Error(o(483))}var Da=null,pi=0;function Cr(e){var t=pi;return pi+=1,Da===null&&(Da=[]),Ac(Da,e,t)}function hi(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Sr(e,t){throw t.$$typeof===k?Error(o(525)):(e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Rc(e){function t(C,b){if(e){var T=C.deletions;T===null?(C.deletions=[b],C.flags|=16):T.push(b)}}function n(C,b){if(!e)return null;for(;b!==null;)t(C,b),b=b.sibling;return null}function a(C){for(var b=new Map;C!==null;)C.key!==null?b.set(C.key,C):b.set(C.index,C),C=C.sibling;return b}function i(C,b){return C=Ft(C,b),C.index=0,C.sibling=null,C}function r(C,b,T){return C.index=T,e?(T=C.alternate,T!==null?(T=T.index,T<b?(C.flags|=67108866,b):T):(C.flags|=67108866,b)):(C.flags|=1048576,b)}function s(C){return e&&C.alternate===null&&(C.flags|=67108866),C}function c(C,b,T,N){return b===null||b.tag!==6?(b=as(T,C.mode,N),b.return=C,b):(b=i(b,T),b.return=C,b)}function y(C,b,T,N){var K=T.type;return K===P?M(C,b,T.props.children,N,T.key):b!==null&&(b.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===we&&Jn(K)===b.type)?(b=i(b,T.props),hi(b,T),b.return=C,b):(b=hr(T.type,T.key,T.props,null,C.mode,N),hi(b,T),b.return=C,b)}function A(C,b,T,N){return b===null||b.tag!==4||b.stateNode.containerInfo!==T.containerInfo||b.stateNode.implementation!==T.implementation?(b=is(T,C.mode,N),b.return=C,b):(b=i(b,T.children||[]),b.return=C,b)}function M(C,b,T,N,K){return b===null||b.tag!==7?(b=Yn(T,C.mode,N,K),b.return=C,b):(b=i(b,T),b.return=C,b)}function z(C,b,T){if(typeof b=="string"&&b!==""||typeof b=="number"||typeof b=="bigint")return b=as(""+b,C.mode,T),b.return=C,b;if(typeof b=="object"&&b!==null){switch(b.$$typeof){case H:return T=hr(b.type,b.key,b.props,null,C.mode,T),hi(T,b),T.return=C,T;case q:return b=is(b,C.mode,T),b.return=C,b;case we:return b=Jn(b),z(C,b,T)}if(ke(b)||Xe(b))return b=Yn(b,C.mode,T,null),b.return=C,b;if(typeof b.then=="function")return z(C,Cr(b),T);if(b.$$typeof===j)return z(C,yr(C,b),T);Sr(C,b)}return null}function E(C,b,T,N){var K=b!==null?b.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return K!==null?null:c(C,b,""+T,N);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case H:return T.key===K?y(C,b,T,N):null;case q:return T.key===K?A(C,b,T,N):null;case we:return T=Jn(T),E(C,b,T,N)}if(ke(T)||Xe(T))return K!==null?null:M(C,b,T,N,null);if(typeof T.then=="function")return E(C,b,Cr(T),N);if(T.$$typeof===j)return E(C,b,yr(C,T),N);Sr(C,T)}return null}function R(C,b,T,N,K){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return C=C.get(T)||null,c(b,C,""+N,K);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case H:return C=C.get(N.key===null?T:N.key)||null,y(b,C,N,K);case q:return C=C.get(N.key===null?T:N.key)||null,A(b,C,N,K);case we:return N=Jn(N),R(C,b,T,N,K)}if(ke(N)||Xe(N))return C=C.get(T)||null,M(b,C,N,K,null);if(typeof N.then=="function")return R(C,b,T,Cr(N),K);if(N.$$typeof===j)return R(C,b,T,yr(b,N),K);Sr(b,N)}return null}function Y(C,b,T,N){for(var K=null,de=null,Q=b,ae=b=0,ue=null;Q!==null&&ae<T.length;ae++){Q.index>ae?(ue=Q,Q=null):ue=Q.sibling;var fe=E(C,Q,T[ae],N);if(fe===null){Q===null&&(Q=ue);break}e&&Q&&fe.alternate===null&&t(C,Q),b=r(fe,b,ae),de===null?K=fe:de.sibling=fe,de=fe,Q=ue}if(ae===T.length)return n(C,Q),ce&&Yt(C,ae),K;if(Q===null){for(;ae<T.length;ae++)Q=z(C,T[ae],N),Q!==null&&(b=r(Q,b,ae),de===null?K=Q:de.sibling=Q,de=Q);return ce&&Yt(C,ae),K}for(Q=a(Q);ae<T.length;ae++)ue=R(Q,C,ae,T[ae],N),ue!==null&&(e&&ue.alternate!==null&&Q.delete(ue.key===null?ae:ue.key),b=r(ue,b,ae),de===null?K=ue:de.sibling=ue,de=ue);return e&&Q.forEach(function(Nn){return t(C,Nn)}),ce&&Yt(C,ae),K}function W(C,b,T,N){if(T==null)throw Error(o(151));for(var K=null,de=null,Q=b,ae=b=0,ue=null,fe=T.next();Q!==null&&!fe.done;ae++,fe=T.next()){Q.index>ae?(ue=Q,Q=null):ue=Q.sibling;var Nn=E(C,Q,fe.value,N);if(Nn===null){Q===null&&(Q=ue);break}e&&Q&&Nn.alternate===null&&t(C,Q),b=r(Nn,b,ae),de===null?K=Nn:de.sibling=Nn,de=Nn,Q=ue}if(fe.done)return n(C,Q),ce&&Yt(C,ae),K;if(Q===null){for(;!fe.done;ae++,fe=T.next())fe=z(C,fe.value,N),fe!==null&&(b=r(fe,b,ae),de===null?K=fe:de.sibling=fe,de=fe);return ce&&Yt(C,ae),K}for(Q=a(Q);!fe.done;ae++,fe=T.next())fe=R(Q,C,ae,fe.value,N),fe!==null&&(e&&fe.alternate!==null&&Q.delete(fe.key===null?ae:fe.key),b=r(fe,b,ae),de===null?K=fe:de.sibling=fe,de=fe);return e&&Q.forEach(function(jm){return t(C,jm)}),ce&&Yt(C,ae),K}function xe(C,b,T,N){if(typeof T=="object"&&T!==null&&T.type===P&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case H:e:{for(var K=T.key;b!==null;){if(b.key===K){if(K=T.type,K===P){if(b.tag===7){n(C,b.sibling),N=i(b,T.props.children),N.return=C,C=N;break e}}else if(b.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===we&&Jn(K)===b.type){n(C,b.sibling),N=i(b,T.props),hi(N,T),N.return=C,C=N;break e}n(C,b);break}else t(C,b);b=b.sibling}T.type===P?(N=Yn(T.props.children,C.mode,N,T.key),N.return=C,C=N):(N=hr(T.type,T.key,T.props,null,C.mode,N),hi(N,T),N.return=C,C=N)}return s(C);case q:e:{for(K=T.key;b!==null;){if(b.key===K)if(b.tag===4&&b.stateNode.containerInfo===T.containerInfo&&b.stateNode.implementation===T.implementation){n(C,b.sibling),N=i(b,T.children||[]),N.return=C,C=N;break e}else{n(C,b);break}else t(C,b);b=b.sibling}N=is(T,C.mode,N),N.return=C,C=N}return s(C);case we:return T=Jn(T),xe(C,b,T,N)}if(ke(T))return Y(C,b,T,N);if(Xe(T)){if(K=Xe(T),typeof K!="function")throw Error(o(150));return T=K.call(T),W(C,b,T,N)}if(typeof T.then=="function")return xe(C,b,Cr(T),N);if(T.$$typeof===j)return xe(C,b,yr(C,T),N);Sr(C,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,b!==null&&b.tag===6?(n(C,b.sibling),N=i(b,T),N.return=C,C=N):(n(C,b),N=as(T,C.mode,N),N.return=C,C=N),s(C)):n(C,b)}return function(C,b,T,N){try{pi=0;var K=xe(C,b,T,N);return Da=null,K}catch(Q){if(Q===Ea||Q===br)throw Q;var de=ut(29,Q,null,C.mode);return de.lanes=N,de.return=C,de}finally{}}}var $n=Rc(!0),Mc=Rc(!1),vn=!1;function ms(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ys(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(pe&2)!==0){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,t=pr(e),pc(e,null,n),t}return fr(e,a,t,n),pr(e)}function gi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Cu(e,n)}}function vs(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,r=null;if(n=n.firstBaseUpdate,n!==null){do{var s={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};r===null?i=r=s:r=r.next=s,n=n.next}while(n!==null);r===null?i=r=t:r=r.next=t}else i=r=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:r,shared:a.shared,callbacks:a.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var bs=!1;function mi(){if(bs){var e=Aa;if(e!==null)throw e}}function yi(e,t,n,a){bs=!1;var i=e.updateQueue;vn=!1;var r=i.firstBaseUpdate,s=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var y=c,A=y.next;y.next=null,s===null?r=A:s.next=A,s=y;var M=e.alternate;M!==null&&(M=M.updateQueue,c=M.lastBaseUpdate,c!==s&&(c===null?M.firstBaseUpdate=A:c.next=A,M.lastBaseUpdate=y))}if(r!==null){var z=i.baseState;s=0,M=A=y=null,c=r;do{var E=c.lane&-536870913,R=E!==c.lane;if(R?(oe&E)===E:(a&E)===E){E!==0&&E===wa&&(bs=!0),M!==null&&(M=M.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var Y=e,W=c;E=t;var xe=n;switch(W.tag){case 1:if(Y=W.payload,typeof Y=="function"){z=Y.call(xe,z,E);break e}z=Y;break e;case 3:Y.flags=Y.flags&-65537|128;case 0:if(Y=W.payload,E=typeof Y=="function"?Y.call(xe,z,E):Y,E==null)break e;z=S({},z,E);break e;case 2:vn=!0}}E=c.callback,E!==null&&(e.flags|=64,R&&(e.flags|=8192),R=i.callbacks,R===null?i.callbacks=[E]:R.push(E))}else R={lane:E,tag:c.tag,payload:c.payload,callback:c.callback,next:null},M===null?(A=M=R,y=z):M=M.next=R,s|=E;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;R=c,c=R.next,R.next=null,i.lastBaseUpdate=R,i.shared.pending=null}}while(!0);M===null&&(y=z),i.baseState=y,i.firstBaseUpdate=A,i.lastBaseUpdate=M,r===null&&(i.shared.lanes=0),wn|=s,e.lanes=s,e.memoizedState=z}}function Lc(e,t){if(typeof e!="function")throw Error(o(191,e));e.call(t)}function Oc(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Lc(n[e],t)}var Ra=x(null),_r=x(0);function kc(e,t){e=an,I(_r,e),I(Ra,t),an=e|t.baseLanes}function xs(){I(_r,an),I(Ra,Ra.current)}function Cs(){an=_r.current,U(Ra),U(_r)}var ct=x(null),wt=null;function Cn(e){var t=e.alternate;I(Le,Le.current&1),I(ct,e),wt===null&&(t===null||Ra.current!==null||t.memoizedState!==null)&&(wt=e)}function Ss(e){I(Le,Le.current),I(ct,e),wt===null&&(wt=e)}function Bc(e){e.tag===22?(I(Le,Le.current),I(ct,e),wt===null&&(wt=e)):Sn()}function Sn(){I(Le,Le.current),I(ct,ct.current)}function dt(e){U(ct),wt===e&&(wt=null),U(Le)}var Le=x(0);function Tr(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Ro(n)||Mo(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Zt=0,ne=null,ve=null,Ne=null,wr=!1,Ma=!1,ea=!1,Ar=0,vi=0,La=null,Dg=0;function De(){throw Error(o(321))}function _s(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ot(e[n],t[n]))return!1;return!0}function Ts(e,t,n,a,i,r){return Zt=r,ne=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?yd:Gs,ea=!1,r=n(a,i),ea=!1,Ma&&(r=zc(t,n,a,i)),Nc(e),r}function Nc(e){B.H=Ci;var t=ve!==null&&ve.next!==null;if(Zt=0,Ne=ve=ne=null,wr=!1,vi=0,La=null,t)throw Error(o(300));e===null||ze||(e=e.dependencies,e!==null&&mr(e)&&(ze=!0))}function zc(e,t,n,a){ne=e;var i=0;do{if(Ma&&(La=null),vi=0,Ma=!1,25<=i)throw Error(o(301));if(i+=1,Ne=ve=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}B.H=vd,r=t(n,a)}while(Ma);return r}function Rg(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?bi(t):t,e=e.useState()[0],(ve!==null?ve.memoizedState:null)!==e&&(ne.flags|=1024),t}function ws(){var e=Ar!==0;return Ar=0,e}function As(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Es(e){if(wr){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}wr=!1}Zt=0,Ne=ve=ne=null,Ma=!1,vi=Ar=0,La=null}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ne.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Oe(){if(ve===null){var e=ne.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var t=Ne===null?ne.memoizedState:Ne.next;if(t!==null)Ne=t,ve=e;else{if(e===null)throw ne.alternate===null?Error(o(467)):Error(o(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Ne===null?ne.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function Er(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function bi(e){var t=vi;return vi+=1,La===null&&(La=[]),e=Ac(La,e,t),t=ne,(Ne===null?t.memoizedState:Ne.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?yd:Gs),e}function Dr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return bi(e);if(e.$$typeof===j)return qe(e)}throw Error(o(438,String(e)))}function Ds(e){var t=null,n=ne.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var a=ne.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(t={data:a.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=Er(),ne.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),a=0;a<e;a++)n[a]=Bt;return t.index++,n}function Kt(e,t){return typeof t=="function"?t(e):t}function Rr(e){var t=Oe();return Rs(t,ve,e)}function Rs(e,t,n){var a=e.queue;if(a===null)throw Error(o(311));a.lastRenderedReducer=n;var i=e.baseQueue,r=a.pending;if(r!==null){if(i!==null){var s=i.next;i.next=r.next,r.next=s}t.baseQueue=i=r,a.pending=null}if(r=e.baseState,i===null)e.memoizedState=r;else{t=i.next;var c=s=null,y=null,A=t,M=!1;do{var z=A.lane&-536870913;if(z!==A.lane?(oe&z)===z:(Zt&z)===z){var E=A.revertLane;if(E===0)y!==null&&(y=y.next={lane:0,revertLane:0,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null}),z===wa&&(M=!0);else if((Zt&E)===E){A=A.next,E===wa&&(M=!0);continue}else z={lane:0,revertLane:A.revertLane,gesture:null,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},y===null?(c=y=z,s=r):y=y.next=z,ne.lanes|=E,wn|=E;z=A.action,ea&&n(r,z),r=A.hasEagerState?A.eagerState:n(r,z)}else E={lane:z,revertLane:A.revertLane,gesture:A.gesture,action:A.action,hasEagerState:A.hasEagerState,eagerState:A.eagerState,next:null},y===null?(c=y=E,s=r):y=y.next=E,ne.lanes|=z,wn|=z;A=A.next}while(A!==null&&A!==t);if(y===null?s=r:y.next=c,!ot(r,e.memoizedState)&&(ze=!0,M&&(n=Aa,n!==null)))throw n;e.memoizedState=r,e.baseState=s,e.baseQueue=y,a.lastRenderedState=r}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Ms(e){var t=Oe(),n=t.queue;if(n===null)throw Error(o(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,r=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do r=e(r,s.action),s=s.next;while(s!==i);ot(r,t.memoizedState)||(ze=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),n.lastRenderedState=r}return[r,a]}function Uc(e,t,n){var a=ne,i=Oe(),r=ce;if(r){if(n===void 0)throw Error(o(407));n=n()}else n=t();var s=!ot((ve||i).memoizedState,n);if(s&&(i.memoizedState=n,ze=!0),i=i.queue,ks(Pc.bind(null,a,i,e),[e]),i.getSnapshot!==t||s||Ne!==null&&Ne.memoizedState.tag&1){if(a.flags|=2048,Oa(9,{destroy:void 0},Gc.bind(null,a,i,n,t),null),Se===null)throw Error(o(349));r||(Zt&127)!==0||jc(a,t,n)}return n}function jc(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ne.updateQueue,t===null?(t=Er(),ne.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Gc(e,t,n,a){t.value=n,t.getSnapshot=a,Hc(t)&&Vc(e)}function Pc(e,t,n){return n(function(){Hc(t)&&Vc(e)})}function Hc(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ot(e,n)}catch{return!0}}function Vc(e){var t=Fn(e,2);t!==null&&it(t,e,2)}function Ls(e){var t=Je();if(typeof e=="function"){var n=e;if(e=n(),ea){dn(!0);try{n()}finally{dn(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:e},t}function Ic(e,t,n,a){return e.baseState=n,Rs(e,ve,typeof a=="function"?a:Kt)}function Mg(e,t,n,a,i){if(Or(e))throw Error(o(485));if(e=t.action,e!==null){var r={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){r.listeners.push(s)}};B.T!==null?n(!0):r.isTransition=!1,a(r),n=t.pending,n===null?(r.next=t.pending=r,qc(t,r)):(r.next=n.next,t.pending=n.next=r)}}function qc(e,t){var n=t.action,a=t.payload,i=e.state;if(t.isTransition){var r=B.T,s={};B.T=s;try{var c=n(i,a),y=B.S;y!==null&&y(s,c),Fc(e,t,c)}catch(A){Os(e,t,A)}finally{r!==null&&s.types!==null&&(r.types=s.types),B.T=r}}else try{r=n(i,a),Fc(e,t,r)}catch(A){Os(e,t,A)}}function Fc(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(a){Yc(e,t,a)},function(a){return Os(e,t,a)}):Yc(e,t,n)}function Yc(e,t,n){t.status="fulfilled",t.value=n,Xc(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,qc(e,n)))}function Os(e,t,n){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do t.status="rejected",t.reason=n,Xc(t),t=t.next;while(t!==a)}e.action=null}function Xc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qc(e,t){return t}function Zc(e,t){if(ce){var n=Se.formState;if(n!==null){e:{var a=ne;if(ce){if(_e){t:{for(var i=_e,r=Tt;i.nodeType!==8;){if(!r){i=null;break t}if(i=At(i.nextSibling),i===null){i=null;break t}}r=i.data,i=r==="F!"||r==="F"?i:null}if(i){_e=At(i.nextSibling),a=i.data==="F!";break e}}mn(a)}a=!1}a&&(t=n[0])}}return n=Je(),n.memoizedState=n.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qc,lastRenderedState:t},n.queue=a,n=hd.bind(null,ne,a),a.dispatch=n,a=Ls(!1),r=js.bind(null,ne,!1,a.queue),a=Je(),i={state:t,dispatch:null,action:e,pending:null},a.queue=i,n=Mg.bind(null,ne,i,r,n),i.dispatch=n,a.memoizedState=e,[t,n,!1]}function Kc(e){var t=Oe();return Jc(t,ve,e)}function Jc(e,t,n){if(t=Rs(e,t,Qc)[0],e=Rr(Kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var a=bi(t)}catch(s){throw s===Ea?br:s}else a=t;t=Oe();var i=t.queue,r=i.dispatch;return n!==t.memoizedState&&(ne.flags|=2048,Oa(9,{destroy:void 0},Lg.bind(null,i,n),null)),[a,r,e]}function Lg(e,t){e.action=t}function Wc(e){var t=Oe(),n=ve;if(n!==null)return Jc(t,n,e);Oe(),t=t.memoizedState,n=Oe();var a=n.queue.dispatch;return n.memoizedState=e,[t,a,!1]}function Oa(e,t,n,a){return e={tag:e,create:n,deps:a,inst:t,next:null},t=ne.updateQueue,t===null&&(t=Er(),ne.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e),e}function $c(){return Oe().memoizedState}function Mr(e,t,n,a){var i=Je();ne.flags|=e,i.memoizedState=Oa(1|t,{destroy:void 0},n,a===void 0?null:a)}function Lr(e,t,n,a){var i=Oe();a=a===void 0?null:a;var r=i.memoizedState.inst;ve!==null&&a!==null&&_s(a,ve.memoizedState.deps)?i.memoizedState=Oa(t,r,n,a):(ne.flags|=e,i.memoizedState=Oa(1|t,r,n,a))}function ed(e,t){Mr(8390656,8,e,t)}function ks(e,t){Lr(2048,8,e,t)}function Og(e){ne.flags|=4;var t=ne.updateQueue;if(t===null)t=Er(),ne.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function td(e){var t=Oe().memoizedState;return Og({ref:t,nextImpl:e}),function(){if((pe&2)!==0)throw Error(o(440));return t.impl.apply(void 0,arguments)}}function nd(e,t){return Lr(4,2,e,t)}function ad(e,t){return Lr(4,4,e,t)}function id(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function rd(e,t,n){n=n!=null?n.concat([e]):null,Lr(4,4,id.bind(null,t,e),n)}function Bs(){}function ld(e,t){var n=Oe();t=t===void 0?null:t;var a=n.memoizedState;return t!==null&&_s(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function sd(e,t){var n=Oe();t=t===void 0?null:t;var a=n.memoizedState;if(t!==null&&_s(t,a[1]))return a[0];if(a=e(),ea){dn(!0);try{e()}finally{dn(!1)}}return n.memoizedState=[a,t],a}function Ns(e,t,n){return n===void 0||(Zt&1073741824)!==0&&(oe&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=uf(),ne.lanes|=e,wn|=e,n)}function od(e,t,n,a){return ot(n,t)?n:Ra.current!==null?(e=Ns(e,n,a),ot(e,t)||(ze=!0),e):(Zt&42)===0||(Zt&1073741824)!==0&&(oe&261930)===0?(ze=!0,e.memoizedState=n):(e=uf(),ne.lanes|=e,wn|=e,t)}function ud(e,t,n,a,i){var r=V.p;V.p=r!==0&&8>r?r:8;var s=B.T,c={};B.T=c,js(e,!1,t,n);try{var y=i(),A=B.S;if(A!==null&&A(c,y),y!==null&&typeof y=="object"&&typeof y.then=="function"){var M=Eg(y,a);xi(e,t,M,ht(e))}else xi(e,t,a,ht(e))}catch(z){xi(e,t,{then:function(){},status:"rejected",reason:z},ht())}finally{V.p=r,s!==null&&c.types!==null&&(s.types=c.types),B.T=s}}function kg(){}function zs(e,t,n,a){if(e.tag!==5)throw Error(o(476));var i=cd(e).queue;ud(e,i,t,$,n===null?kg:function(){return dd(e),n(a)})}function cd(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:$,baseState:$,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:$},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Kt,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function dd(e){var t=cd(e);t.next===null&&(t=e.alternate.memoizedState),xi(e,t.next.queue,{},ht())}function Us(){return qe(Ui)}function fd(){return Oe().memoizedState}function pd(){return Oe().memoizedState}function Bg(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=ht();e=bn(n);var a=xn(t,e,n);a!==null&&(it(a,t,n),gi(a,t,n)),t={cache:fs()},e.payload=t;return}t=t.return}}function Ng(e,t,n){var a=ht();n={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Or(e)?gd(t,n):(n=ts(e,t,n,a),n!==null&&(it(n,e,a),md(n,t,a)))}function hd(e,t,n){var a=ht();xi(e,t,n,a)}function xi(e,t,n,a){var i={lane:a,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Or(e))gd(t,i);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var s=t.lastRenderedState,c=r(s,n);if(i.hasEagerState=!0,i.eagerState=c,ot(c,s))return fr(e,t,i,0),Se===null&&dr(),!1}catch{}finally{}if(n=ts(e,t,i,a),n!==null)return it(n,e,a),md(n,t,a),!0}return!1}function js(e,t,n,a){if(a={lane:2,revertLane:yo(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Or(e)){if(t)throw Error(o(479))}else t=ts(e,n,a,2),t!==null&&it(t,e,2)}function Or(e){var t=e.alternate;return e===ne||t!==null&&t===ne}function gd(e,t){Ma=wr=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function md(e,t,n){if((n&4194048)!==0){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,Cu(e,n)}}var Ci={readContext:qe,use:Dr,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};Ci.useEffectEvent=De;var yd={readContext:qe,use:Dr,useCallback:function(e,t){return Je().memoizedState=[e,t===void 0?null:t],e},useContext:qe,useEffect:ed,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Mr(4194308,4,id.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Mr(4194308,4,e,t)},useInsertionEffect:function(e,t){Mr(4,2,e,t)},useMemo:function(e,t){var n=Je();t=t===void 0?null:t;var a=e();if(ea){dn(!0);try{e()}finally{dn(!1)}}return n.memoizedState=[a,t],a},useReducer:function(e,t,n){var a=Je();if(n!==void 0){var i=n(t);if(ea){dn(!0);try{n(t)}finally{dn(!1)}}}else i=t;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=Ng.bind(null,ne,e),[a.memoizedState,e]},useRef:function(e){var t=Je();return e={current:e},t.memoizedState=e},useState:function(e){e=Ls(e);var t=e.queue,n=hd.bind(null,ne,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Bs,useDeferredValue:function(e,t){var n=Je();return Ns(n,e,t)},useTransition:function(){var e=Ls(!1);return e=ud.bind(null,ne,e.queue,!0,!1),Je().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var a=ne,i=Je();if(ce){if(n===void 0)throw Error(o(407));n=n()}else{if(n=t(),Se===null)throw Error(o(349));(oe&127)!==0||jc(a,t,n)}i.memoizedState=n;var r={value:n,getSnapshot:t};return i.queue=r,ed(Pc.bind(null,a,r,e),[e]),a.flags|=2048,Oa(9,{destroy:void 0},Gc.bind(null,a,r,n,t),null),n},useId:function(){var e=Je(),t=Se.identifierPrefix;if(ce){var n=Ut,a=zt;n=(a&~(1<<32-st(a)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ar++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=Dg++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:Us,useFormState:Zc,useActionState:Zc,useOptimistic:function(e){var t=Je();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=js.bind(null,ne,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ds,useCacheRefresh:function(){return Je().memoizedState=Bg.bind(null,ne)},useEffectEvent:function(e){var t=Je(),n={impl:e};return t.memoizedState=n,function(){if((pe&2)!==0)throw Error(o(440));return n.impl.apply(void 0,arguments)}}},Gs={readContext:qe,use:Dr,useCallback:ld,useContext:qe,useEffect:ks,useImperativeHandle:rd,useInsertionEffect:nd,useLayoutEffect:ad,useMemo:sd,useReducer:Rr,useRef:$c,useState:function(){return Rr(Kt)},useDebugValue:Bs,useDeferredValue:function(e,t){var n=Oe();return od(n,ve.memoizedState,e,t)},useTransition:function(){var e=Rr(Kt)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:bi(e),t]},useSyncExternalStore:Uc,useId:fd,useHostTransitionStatus:Us,useFormState:Kc,useActionState:Kc,useOptimistic:function(e,t){var n=Oe();return Ic(n,ve,e,t)},useMemoCache:Ds,useCacheRefresh:pd};Gs.useEffectEvent=td;var vd={readContext:qe,use:Dr,useCallback:ld,useContext:qe,useEffect:ks,useImperativeHandle:rd,useInsertionEffect:nd,useLayoutEffect:ad,useMemo:sd,useReducer:Ms,useRef:$c,useState:function(){return Ms(Kt)},useDebugValue:Bs,useDeferredValue:function(e,t){var n=Oe();return ve===null?Ns(n,e,t):od(n,ve.memoizedState,e,t)},useTransition:function(){var e=Ms(Kt)[0],t=Oe().memoizedState;return[typeof e=="boolean"?e:bi(e),t]},useSyncExternalStore:Uc,useId:fd,useHostTransitionStatus:Us,useFormState:Wc,useActionState:Wc,useOptimistic:function(e,t){var n=Oe();return ve!==null?Ic(n,ve,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ds,useCacheRefresh:pd};vd.useEffectEvent=td;function Ps(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:S({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hs={enqueueSetState:function(e,t,n){e=e._reactInternals;var a=ht(),i=bn(a);i.payload=t,n!=null&&(i.callback=n),t=xn(e,i,a),t!==null&&(it(t,e,a),gi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=ht(),i=bn(a);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=xn(e,i,a),t!==null&&(it(t,e,a),gi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ht(),a=bn(n);a.tag=2,t!=null&&(a.callback=t),t=xn(e,a,n),t!==null&&(it(t,e,n),gi(t,e,n))}};function bd(e,t,n,a,i,r,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,r,s):t.prototype&&t.prototype.isPureReactComponent?!si(n,a)||!si(i,r):!0}function xd(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Hs.enqueueReplaceState(t,t.state,null)}function ta(e,t){var n=t;if("ref"in t){n={};for(var a in t)a!=="ref"&&(n[a]=t[a])}if(e=e.defaultProps){n===t&&(n=S({},n));for(var i in e)n[i]===void 0&&(n[i]=e[i])}return n}function Cd(e){cr(e)}function Sd(e){console.error(e)}function _d(e){cr(e)}function kr(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(a){setTimeout(function(){throw a})}}function Td(e,t,n){try{var a=e.onCaughtError;a(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Vs(e,t,n){return n=bn(n),n.tag=3,n.payload={element:null},n.callback=function(){kr(e,t)},n}function wd(e){return e=bn(e),e.tag=3,e}function Ad(e,t,n,a){var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=a.value;e.payload=function(){return i(r)},e.callback=function(){Td(t,n,a)}}var s=n.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){Td(t,n,a),typeof i!="function"&&(An===null?An=new Set([this]):An.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function zg(e,t,n,a,i){if(n.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(t=n.alternate,t!==null&&Ta(t,n,i,!0),n=ct.current,n!==null){switch(n.tag){case 31:case 13:return wt===null?Fr():n.alternate===null&&Re===0&&(Re=3),n.flags&=-257,n.flags|=65536,n.lanes=i,a===xr?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([a]):t.add(a),ho(e,a,i)),!1;case 22:return n.flags|=65536,a===xr?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([a])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([a]):n.add(a)),ho(e,a,i)),!1}throw Error(o(435,n.tag))}return ho(e,a,i),Fr(),!1}if(ce)return t=ct.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,a!==ss&&(e=Error(o(422),{cause:a}),ci(Ct(e,n)))):(a!==ss&&(t=Error(o(423),{cause:a}),ci(Ct(t,n))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=Ct(a,n),i=Vs(e.stateNode,a,i),vs(e,i),Re!==4&&(Re=2)),!1;var r=Error(o(520),{cause:a});if(r=Ct(r,n),Ri===null?Ri=[r]:Ri.push(r),Re!==4&&(Re=2),t===null)return!0;a=Ct(a,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,e=Vs(n.stateNode,a,e),vs(n,e),!1;case 1:if(t=n.type,r=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(An===null||!An.has(r))))return n.flags|=65536,i&=-i,n.lanes|=i,i=wd(i),Ad(i,e,n,a),vs(n,i),!1}n=n.return}while(n!==null);return!1}var Is=Error(o(461)),ze=!1;function Fe(e,t,n,a){t.child=e===null?Mc(t,null,n,a):$n(t,e.child,n,a)}function Ed(e,t,n,a,i){n=n.render;var r=t.ref;if("ref"in a){var s={};for(var c in a)c!=="ref"&&(s[c]=a[c])}else s=a;return Zn(t),a=Ts(e,t,n,s,r,i),c=ws(),e!==null&&!ze?(As(e,t,i),Jt(e,t,i)):(ce&&c&&rs(t),t.flags|=1,Fe(e,t,a,i),t.child)}function Dd(e,t,n,a,i){if(e===null){var r=n.type;return typeof r=="function"&&!ns(r)&&r.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=r,Rd(e,t,r,a,i)):(e=hr(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Js(e,i)){var s=r.memoizedProps;if(n=n.compare,n=n!==null?n:si,n(s,a)&&e.ref===t.ref)return Jt(e,t,i)}return t.flags|=1,e=Ft(r,a),e.ref=t.ref,e.return=t,t.child=e}function Rd(e,t,n,a,i){if(e!==null){var r=e.memoizedProps;if(si(r,a)&&e.ref===t.ref)if(ze=!1,t.pendingProps=a=r,Js(e,i))(e.flags&131072)!==0&&(ze=!0);else return t.lanes=e.lanes,Jt(e,t,i)}return qs(e,t,n,a,i)}function Md(e,t,n,a){var i=a.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|n:n,e!==null){for(a=t.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~r}else a=0,t.child=null;return Ld(e,t,r,n,a)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&vr(t,r!==null?r.cachePool:null),r!==null?kc(t,r):xs(),Bc(t);else return a=t.lanes=536870912,Ld(e,t,r!==null?r.baseLanes|n:n,n,a)}else r!==null?(vr(t,r.cachePool),kc(t,r),Sn(),t.memoizedState=null):(e!==null&&vr(t,null),xs(),Sn());return Fe(e,t,i,n),t.child}function Si(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Ld(e,t,n,a,i){var r=hs();return r=r===null?null:{parent:Be._currentValue,pool:r},t.memoizedState={baseLanes:n,cachePool:r},e!==null&&vr(t,null),xs(),Bc(t),e!==null&&Ta(e,t,a,!0),t.childLanes=i,null}function Br(e,t){return t=zr({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Od(e,t,n){return $n(t,e.child,null,n),e=Br(t,t.pendingProps),e.flags|=2,dt(t),t.memoizedState=null,e}function Ug(e,t,n){var a=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(ce){if(a.mode==="hidden")return e=Br(t,a),t.lanes=536870912,Si(null,e);if(Ss(t),(e=_e)?(e=Ff(e,Tt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:hn!==null?{id:zt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},n=gc(e),n.return=t,t.child=n,Ie=t,_e=null)):e=null,e===null)throw mn(t);return t.lanes=536870912,null}return Br(t,a)}var r=e.memoizedState;if(r!==null){var s=r.dehydrated;if(Ss(t),i)if(t.flags&256)t.flags&=-257,t=Od(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(o(558));else if(ze||Ta(e,t,n,!1),i=(n&e.childLanes)!==0,ze||i){if(a=Se,a!==null&&(s=Su(a,n),s!==0&&s!==r.retryLane))throw r.retryLane=s,Fn(e,s),it(a,e,s),Is;Fr(),t=Od(e,t,n)}else e=r.treeContext,_e=At(s.nextSibling),Ie=t,ce=!0,gn=null,Tt=!1,e!==null&&vc(t,e),t=Br(t,a),t.flags|=4096;return t}return e=Ft(e.child,{mode:a.mode,children:a.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Nr(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(o(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function qs(e,t,n,a,i){return Zn(t),n=Ts(e,t,n,a,void 0,i),a=ws(),e!==null&&!ze?(As(e,t,i),Jt(e,t,i)):(ce&&a&&rs(t),t.flags|=1,Fe(e,t,n,i),t.child)}function kd(e,t,n,a,i,r){return Zn(t),t.updateQueue=null,n=zc(t,a,n,i),Nc(e),a=ws(),e!==null&&!ze?(As(e,t,r),Jt(e,t,r)):(ce&&a&&rs(t),t.flags|=1,Fe(e,t,n,r),t.child)}function Bd(e,t,n,a,i){if(Zn(t),t.stateNode===null){var r=xa,s=n.contextType;typeof s=="object"&&s!==null&&(r=qe(s)),r=new n(a,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Hs,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=a,r.state=t.memoizedState,r.refs={},ms(t),s=n.contextType,r.context=typeof s=="object"&&s!==null?qe(s):xa,r.state=t.memoizedState,s=n.getDerivedStateFromProps,typeof s=="function"&&(Ps(t,n,s,a),r.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(s=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),s!==r.state&&Hs.enqueueReplaceState(r,r.state,null),yi(t,a,r,i),mi(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!0}else if(e===null){r=t.stateNode;var c=t.memoizedProps,y=ta(n,c);r.props=y;var A=r.context,M=n.contextType;s=xa,typeof M=="object"&&M!==null&&(s=qe(M));var z=n.getDerivedStateFromProps;M=typeof z=="function"||typeof r.getSnapshotBeforeUpdate=="function",c=t.pendingProps!==c,M||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(c||A!==s)&&xd(t,r,a,s),vn=!1;var E=t.memoizedState;r.state=E,yi(t,a,r,i),mi(),A=t.memoizedState,c||E!==A||vn?(typeof z=="function"&&(Ps(t,n,z,a),A=t.memoizedState),(y=vn||bd(t,n,y,a,E,A,s))?(M||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=A),r.props=a,r.state=A,r.context=s,a=y):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{r=t.stateNode,ys(e,t),s=t.memoizedProps,M=ta(n,s),r.props=M,z=t.pendingProps,E=r.context,A=n.contextType,y=xa,typeof A=="object"&&A!==null&&(y=qe(A)),c=n.getDerivedStateFromProps,(A=typeof c=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(s!==z||E!==y)&&xd(t,r,a,y),vn=!1,E=t.memoizedState,r.state=E,yi(t,a,r,i),mi();var R=t.memoizedState;s!==z||E!==R||vn||e!==null&&e.dependencies!==null&&mr(e.dependencies)?(typeof c=="function"&&(Ps(t,n,c,a),R=t.memoizedState),(M=vn||bd(t,n,M,a,E,R,y)||e!==null&&e.dependencies!==null&&mr(e.dependencies))?(A||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(a,R,y),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(a,R,y)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=R),r.props=a,r.state=R,r.context=y,a=M):(typeof r.componentDidUpdate!="function"||s===e.memoizedProps&&E===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&E===e.memoizedState||(t.flags|=1024),a=!1)}return r=a,Nr(e,t),a=(t.flags&128)!==0,r||a?(r=t.stateNode,n=a&&typeof n.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&a?(t.child=$n(t,e.child,null,i),t.child=$n(t,null,n,i)):Fe(e,t,n,i),t.memoizedState=r.state,e=t.child):e=Jt(e,t,i),e}function Nd(e,t,n,a){return Xn(),t.flags|=256,Fe(e,t,n,a),t.child}var Fs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ys(e){return{baseLanes:e,cachePool:Tc()}}function Xs(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=pt),e}function zd(e,t,n){var a=t.pendingProps,i=!1,r=(t.flags&128)!==0,s;if((s=r)||(s=e!==null&&e.memoizedState===null?!1:(Le.current&2)!==0),s&&(i=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(ce){if(i?Cn(t):Sn(),(e=_e)?(e=Ff(e,Tt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:hn!==null?{id:zt,overflow:Ut}:null,retryLane:536870912,hydrationErrors:null},n=gc(e),n.return=t,t.child=n,Ie=t,_e=null)):e=null,e===null)throw mn(t);return Mo(e)?t.lanes=32:t.lanes=536870912,null}var c=a.children;return a=a.fallback,i?(Sn(),i=t.mode,c=zr({mode:"hidden",children:c},i),a=Yn(a,i,n,null),c.return=t,a.return=t,c.sibling=a,t.child=c,a=t.child,a.memoizedState=Ys(n),a.childLanes=Xs(e,s,n),t.memoizedState=Fs,Si(null,a)):(Cn(t),Qs(t,c))}var y=e.memoizedState;if(y!==null&&(c=y.dehydrated,c!==null)){if(r)t.flags&256?(Cn(t),t.flags&=-257,t=Zs(e,t,n)):t.memoizedState!==null?(Sn(),t.child=e.child,t.flags|=128,t=null):(Sn(),c=a.fallback,i=t.mode,a=zr({mode:"visible",children:a.children},i),c=Yn(c,i,n,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,$n(t,e.child,null,n),a=t.child,a.memoizedState=Ys(n),a.childLanes=Xs(e,s,n),t.memoizedState=Fs,t=Si(null,a));else if(Cn(t),Mo(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var A=s.dgst;s=A,a=Error(o(419)),a.stack="",a.digest=s,ci({value:a,source:null,stack:null}),t=Zs(e,t,n)}else if(ze||Ta(e,t,n,!1),s=(n&e.childLanes)!==0,ze||s){if(s=Se,s!==null&&(a=Su(s,n),a!==0&&a!==y.retryLane))throw y.retryLane=a,Fn(e,a),it(s,e,a),Is;Ro(c)||Fr(),t=Zs(e,t,n)}else Ro(c)?(t.flags|=192,t.child=e.child,t=null):(e=y.treeContext,_e=At(c.nextSibling),Ie=t,ce=!0,gn=null,Tt=!1,e!==null&&vc(t,e),t=Qs(t,a.children),t.flags|=4096);return t}return i?(Sn(),c=a.fallback,i=t.mode,y=e.child,A=y.sibling,a=Ft(y,{mode:"hidden",children:a.children}),a.subtreeFlags=y.subtreeFlags&65011712,A!==null?c=Ft(A,c):(c=Yn(c,i,n,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,Si(null,a),a=t.child,c=e.child.memoizedState,c===null?c=Ys(n):(i=c.cachePool,i!==null?(y=Be._currentValue,i=i.parent!==y?{parent:y,pool:y}:i):i=Tc(),c={baseLanes:c.baseLanes|n,cachePool:i}),a.memoizedState=c,a.childLanes=Xs(e,s,n),t.memoizedState=Fs,Si(e.child,a)):(Cn(t),n=e.child,e=n.sibling,n=Ft(n,{mode:"visible",children:a.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Qs(e,t){return t=zr({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function zr(e,t){return e=ut(22,e,null,t),e.lanes=0,e}function Zs(e,t,n){return $n(t,e.child,null,n),e=Qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ud(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),cs(e.return,t,n)}function Ks(e,t,n,a,i,r){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i,treeForkCount:r}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=a,s.tail=n,s.tailMode=i,s.treeForkCount=r)}function jd(e,t,n){var a=t.pendingProps,i=a.revealOrder,r=a.tail;a=a.children;var s=Le.current,c=(s&2)!==0;if(c?(s=s&1|2,t.flags|=128):s&=1,I(Le,s),Fe(e,t,a,n),a=ce?ui:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ud(e,n,t);else if(e.tag===19)Ud(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Tr(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ks(t,!1,i,n,r,a);break;case"backwards":case"unstable_legacy-backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Tr(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ks(t,!0,n,null,r,a);break;case"together":Ks(t,!1,null,null,void 0,a);break;default:t.memoizedState=null}return t.child}function Jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wn|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Ta(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,n=Ft(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ft(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Js(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&mr(e)))}function jg(e,t,n){switch(t.tag){case 3:Ke(t,t.stateNode.containerInfo),yn(t,Be,e.memoizedState.cache),Xn();break;case 27:case 5:Qa(t);break;case 4:Ke(t,t.stateNode.containerInfo);break;case 10:yn(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ss(t),null;break;case 13:var a=t.memoizedState;if(a!==null)return a.dehydrated!==null?(Cn(t),t.flags|=128,null):(n&t.child.childLanes)!==0?zd(e,t,n):(Cn(t),e=Jt(e,t,n),e!==null?e.sibling:null);Cn(t);break;case 19:var i=(e.flags&128)!==0;if(a=(n&t.childLanes)!==0,a||(Ta(e,t,n,!1),a=(n&t.childLanes)!==0),i){if(a)return jd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),I(Le,Le.current),a)break;return null;case 22:return t.lanes=0,Md(e,t,n,t.pendingProps);case 24:yn(t,Be,e.memoizedState.cache)}return Jt(e,t,n)}function Gd(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)ze=!0;else{if(!Js(e,n)&&(t.flags&128)===0)return ze=!1,jg(e,t,n);ze=(e.flags&131072)!==0}else ze=!1,ce&&(t.flags&1048576)!==0&&yc(t,ui,t.index);switch(t.lanes=0,t.tag){case 16:e:{var a=t.pendingProps;if(e=Jn(t.elementType),t.type=e,typeof e=="function")ns(e)?(a=ta(e,a),t.tag=1,t=Bd(null,t,e,a,n)):(t.tag=0,t=qs(null,t,e,a,n));else{if(e!=null){var i=e.$$typeof;if(i===F){t.tag=11,t=Ed(null,t,e,a,n);break e}else if(i===J){t.tag=14,t=Dd(null,t,e,a,n);break e}}throw t=yt(e)||e,Error(o(306,t,""))}}return t;case 0:return qs(e,t,t.type,t.pendingProps,n);case 1:return a=t.type,i=ta(a,t.pendingProps),Bd(e,t,a,i,n);case 3:e:{if(Ke(t,t.stateNode.containerInfo),e===null)throw Error(o(387));a=t.pendingProps;var r=t.memoizedState;i=r.element,ys(e,t),yi(t,a,null,n);var s=t.memoizedState;if(a=s.cache,yn(t,Be,a),a!==r.cache&&ds(t,[Be],n,!0),mi(),a=s.element,r.isDehydrated)if(r={element:a,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=Nd(e,t,a,n);break e}else if(a!==i){i=Ct(Error(o(424)),t),ci(i),t=Nd(e,t,a,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(_e=At(e.firstChild),Ie=t,ce=!0,gn=null,Tt=!0,n=Mc(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Xn(),a===i){t=Jt(e,t,n);break e}Fe(e,t,a,n)}t=t.child}return t;case 26:return Nr(e,t),e===null?(n=Jf(t.type,null,t.pendingProps,null))?t.memoizedState=n:ce||(n=t.type,e=t.pendingProps,a=Wr(re.current).createElement(n),a[Ve]=t,a[We]=e,Ye(a,n,e),Pe(a),t.stateNode=a):t.memoizedState=Jf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Qa(t),e===null&&ce&&(a=t.stateNode=Qf(t.type,t.pendingProps,re.current),Ie=t,Tt=!0,i=_e,Mn(t.type)?(Lo=i,_e=At(a.firstChild)):_e=i),Fe(e,t,t.pendingProps.children,n),Nr(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&ce&&((i=a=_e)&&(a=hm(a,t.type,t.pendingProps,Tt),a!==null?(t.stateNode=a,Ie=t,_e=At(a.firstChild),Tt=!1,i=!0):i=!1),i||mn(t)),Qa(t),i=t.type,r=t.pendingProps,s=e!==null?e.memoizedProps:null,a=r.children,Ao(i,r)?a=null:s!==null&&Ao(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=Ts(e,t,Rg,null,null,n),Ui._currentValue=i),Nr(e,t),Fe(e,t,a,n),t.child;case 6:return e===null&&ce&&((e=n=_e)&&(n=gm(n,t.pendingProps,Tt),n!==null?(t.stateNode=n,Ie=t,_e=null,e=!0):e=!1),e||mn(t)),null;case 13:return zd(e,t,n);case 4:return Ke(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=$n(t,null,a,n):Fe(e,t,a,n),t.child;case 11:return Ed(e,t,t.type,t.pendingProps,n);case 7:return Fe(e,t,t.pendingProps,n),t.child;case 8:return Fe(e,t,t.pendingProps.children,n),t.child;case 12:return Fe(e,t,t.pendingProps.children,n),t.child;case 10:return a=t.pendingProps,yn(t,t.type,a.value),Fe(e,t,a.children,n),t.child;case 9:return i=t.type._context,a=t.pendingProps.children,Zn(t),i=qe(i),a=a(i),t.flags|=1,Fe(e,t,a,n),t.child;case 14:return Dd(e,t,t.type,t.pendingProps,n);case 15:return Rd(e,t,t.type,t.pendingProps,n);case 19:return jd(e,t,n);case 31:return Ug(e,t,n);case 22:return Md(e,t,n,t.pendingProps);case 24:return Zn(t),a=qe(Be),e===null?(i=hs(),i===null&&(i=Se,r=fs(),i.pooledCache=r,r.refCount++,r!==null&&(i.pooledCacheLanes|=n),i=r),t.memoizedState={parent:a,cache:i},ms(t),yn(t,Be,i)):((e.lanes&n)!==0&&(ys(e,t),yi(t,null,null,n),mi()),i=e.memoizedState,r=t.memoizedState,i.parent!==a?(i={parent:a,cache:a},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),yn(t,Be,a)):(a=r.cache,yn(t,Be,a),a!==i.cache&&ds(t,[Be],n,!0))),Fe(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Wt(e){e.flags|=4}function Ws(e,t,n,a,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(pf())e.flags|=8192;else throw Wn=xr,gs}else e.flags&=-16777217}function Pd(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!np(t))if(pf())e.flags|=8192;else throw Wn=xr,gs}function Ur(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?bu():536870912,e.lanes|=t,za|=t)}function _i(e,t){if(!ce)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Te(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function Gg(e,t,n){var a=t.pendingProps;switch(ls(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Te(t),null;case 1:return Te(t),null;case 3:return n=t.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Qt(Be),Me(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(_a(t)?Wt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,os())),Te(t),null;case 26:var i=t.type,r=t.memoizedState;return e===null?(Wt(t),r!==null?(Te(t),Pd(t,r)):(Te(t),Ws(t,i,null,a,n))):r?r!==e.memoizedState?(Wt(t),Te(t),Pd(t,r)):(Te(t),t.flags&=-16777217):(e=e.memoizedProps,e!==a&&Wt(t),Te(t),Ws(t,i,e,a,n)),null;case 27:if(Qi(t),n=re.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Wt(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return Te(t),null}e=X.current,_a(t)?bc(t):(e=Qf(i,a,n),t.stateNode=e,Wt(t))}return Te(t),null;case 5:if(Qi(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==a&&Wt(t);else{if(!a){if(t.stateNode===null)throw Error(o(166));return Te(t),null}if(r=X.current,_a(t))bc(t);else{var s=Wr(re.current);switch(r){case 1:r=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:r=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":r=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":r=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":r=s.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof a.is=="string"?s.createElement("select",{is:a.is}):s.createElement("select"),a.multiple?r.multiple=!0:a.size&&(r.size=a.size);break;default:r=typeof a.is=="string"?s.createElement(i,{is:a.is}):s.createElement(i)}}r[Ve]=t,r[We]=a;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)r.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=r;e:switch(Ye(r,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&Wt(t)}}return Te(t),Ws(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==a&&Wt(t);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(e=re.current,_a(t)){if(e=t.stateNode,n=t.memoizedProps,a=null,i=Ie,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Ve]=t,e=!!(e.nodeValue===n||a!==null&&a.suppressHydrationWarning===!0||Uf(e.nodeValue,n)),e||mn(t,!0)}else e=Wr(e).createTextNode(a),e[Ve]=t,t.stateNode=e}return Te(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(a=_a(t),n!==null){if(e===null){if(!a)throw Error(o(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(557));e[Ve]=t}else Xn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),e=!1}else n=os(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(dt(t),t):(dt(t),null);if((t.flags&128)!==0)throw Error(o(558))}return Te(t),null;case 13:if(a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=_a(t),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(o(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(o(317));i[Ve]=t}else Xn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Te(t),i=!1}else i=os(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(dt(t),t):(dt(t),null)}return dt(t),(t.flags&128)!==0?(t.lanes=n,t):(n=a!==null,e=e!==null&&e.memoizedState!==null,n&&(a=t.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==i&&(a.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Ur(t,t.updateQueue),Te(t),null);case 4:return Me(),e===null&&Co(t.stateNode.containerInfo),Te(t),null;case 10:return Qt(t.type),Te(t),null;case 19:if(U(Le),a=t.memoizedState,a===null)return Te(t),null;if(i=(t.flags&128)!==0,r=a.rendering,r===null)if(i)_i(a,!1);else{if(Re!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=Tr(e),r!==null){for(t.flags|=128,_i(a,!1),e=r.updateQueue,t.updateQueue=e,Ur(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)hc(n,e),n=n.sibling;return I(Le,Le.current&1|2),ce&&Yt(t,a.treeForkCount),t.child}e=e.sibling}a.tail!==null&&rt()>Vr&&(t.flags|=128,i=!0,_i(a,!1),t.lanes=4194304)}else{if(!i)if(e=Tr(r),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,Ur(t,e),_i(a,!0),a.tail===null&&a.tailMode==="hidden"&&!r.alternate&&!ce)return Te(t),null}else 2*rt()-a.renderingStartTime>Vr&&n!==536870912&&(t.flags|=128,i=!0,_i(a,!1),t.lanes=4194304);a.isBackwards?(r.sibling=t.child,t.child=r):(e=a.last,e!==null?e.sibling=r:t.child=r,a.last=r)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=rt(),e.sibling=null,n=Le.current,I(Le,i?n&1|2:n&1),ce&&Yt(t,a.treeForkCount),e):(Te(t),null);case 22:case 23:return dt(t),Cs(),a=t.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(t.flags|=8192):a&&(t.flags|=8192),a?(n&536870912)!==0&&(t.flags&128)===0&&(Te(t),t.subtreeFlags&6&&(t.flags|=8192)):Te(t),n=t.updateQueue,n!==null&&Ur(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),a=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),a!==n&&(t.flags|=2048),e!==null&&U(Kn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Qt(Be),Te(t),null;case 25:return null;case 30:return null}throw Error(o(156,t.tag))}function Pg(e,t){switch(ls(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Qt(Be),Me(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Qi(t),null;case 31:if(t.memoizedState!==null){if(dt(t),t.alternate===null)throw Error(o(340));Xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(dt(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Xn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return U(Le),null;case 4:return Me(),null;case 10:return Qt(t.type),null;case 22:case 23:return dt(t),Cs(),e!==null&&U(Kn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Qt(Be),null;case 25:return null;default:return null}}function Hd(e,t){switch(ls(t),t.tag){case 3:Qt(Be),Me();break;case 26:case 27:case 5:Qi(t);break;case 4:Me();break;case 31:t.memoizedState!==null&&dt(t);break;case 13:dt(t);break;case 19:U(Le);break;case 10:Qt(t.type);break;case 22:case 23:dt(t),Cs(),e!==null&&U(Kn);break;case 24:Qt(Be)}}function Ti(e,t){try{var n=t.updateQueue,a=n!==null?n.lastEffect:null;if(a!==null){var i=a.next;n=i;do{if((n.tag&e)===e){a=void 0;var r=n.create,s=n.inst;a=r(),s.destroy=a}n=n.next}while(n!==i)}}catch(c){me(t,t.return,c)}}function _n(e,t,n){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var r=i.next;a=r;do{if((a.tag&e)===e){var s=a.inst,c=s.destroy;if(c!==void 0){s.destroy=void 0,i=t;var y=n,A=c;try{A()}catch(M){me(i,y,M)}}}a=a.next}while(a!==r)}}catch(M){me(t,t.return,M)}}function Vd(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{Oc(t,n)}catch(a){me(e,e.return,a)}}}function Id(e,t,n){n.props=ta(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(a){me(e,t,a)}}function wi(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof n=="function"?e.refCleanup=n(a):n.current=a}}catch(i){me(e,t,i)}}function jt(e,t){var n=e.ref,a=e.refCleanup;if(n!==null)if(typeof a=="function")try{a()}catch(i){me(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(i){me(e,t,i)}else n.current=null}function qd(e){var t=e.type,n=e.memoizedProps,a=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&a.focus();break e;case"img":n.src?a.src=n.src:n.srcSet&&(a.srcset=n.srcSet)}}catch(i){me(e,e.return,i)}}function $s(e,t,n){try{var a=e.stateNode;om(a,e.type,n,t),a[We]=t}catch(i){me(e,e.return,i)}}function Fd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Mn(e.type)||e.tag===4}function eo(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Mn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function to(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=It));else if(a!==4&&(a===27&&Mn(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(to(e,t,n),e=e.sibling;e!==null;)to(e,t,n),e=e.sibling}function jr(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(a===27&&Mn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(jr(e,t,n),e=e.sibling;e!==null;)jr(e,t,n),e=e.sibling}function Yd(e){var t=e.stateNode,n=e.memoizedProps;try{for(var a=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Ye(t,a,n),t[Ve]=e,t[We]=n}catch(r){me(e,e.return,r)}}var $t=!1,Ue=!1,no=!1,Xd=typeof WeakSet=="function"?WeakSet:Set,He=null;function Hg(e,t){if(e=e.containerInfo,To=rl,e=rc(e),Zl(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,r=a.focusNode;a=a.focusOffset;try{n.nodeType,r.nodeType}catch{n=null;break e}var s=0,c=-1,y=-1,A=0,M=0,z=e,E=null;t:for(;;){for(var R;z!==n||i!==0&&z.nodeType!==3||(c=s+i),z!==r||a!==0&&z.nodeType!==3||(y=s+a),z.nodeType===3&&(s+=z.nodeValue.length),(R=z.firstChild)!==null;)E=z,z=R;for(;;){if(z===e)break t;if(E===n&&++A===i&&(c=s),E===r&&++M===a&&(y=s),(R=z.nextSibling)!==null)break;z=E,E=z.parentNode}z=R}n=c===-1||y===-1?null:{start:c,end:y}}else n=null}n=n||{start:0,end:0}}else n=null;for(wo={focusedElem:e,selectionRange:n},rl=!1,He=t;He!==null;)if(t=He,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,He=e;else for(;He!==null;){switch(t=He,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)i=e[n],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,n=t,i=r.memoizedProps,r=r.memoizedState,a=n.stateNode;try{var Y=ta(n.type,i);e=a.getSnapshotBeforeUpdate(Y,r),a.__reactInternalSnapshotBeforeUpdate=e}catch(W){me(n,n.return,W)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Do(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Do(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(o(163))}if(e=t.sibling,e!==null){e.return=t.return,He=e;break}He=t.return}}function Qd(e,t,n){var a=n.flags;switch(n.tag){case 0:case 11:case 15:tn(e,n),a&4&&Ti(5,n);break;case 1:if(tn(e,n),a&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(s){me(n,n.return,s)}else{var i=ta(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){me(n,n.return,s)}}a&64&&Vd(n),a&512&&wi(n,n.return);break;case 3:if(tn(e,n),a&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{Oc(e,t)}catch(s){me(n,n.return,s)}}break;case 27:t===null&&a&4&&Yd(n);case 26:case 5:tn(e,n),t===null&&a&4&&qd(n),a&512&&wi(n,n.return);break;case 12:tn(e,n);break;case 31:tn(e,n),a&4&&Jd(e,n);break;case 13:tn(e,n),a&4&&Wd(e,n),a&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Kg.bind(null,n),mm(e,n))));break;case 22:if(a=n.memoizedState!==null||$t,!a){t=t!==null&&t.memoizedState!==null||Ue,i=$t;var r=Ue;$t=a,(Ue=t)&&!r?nn(e,n,(n.subtreeFlags&8772)!==0):tn(e,n),$t=i,Ue=r}break;case 30:break;default:tn(e,n)}}function Zd(e){var t=e.alternate;t!==null&&(e.alternate=null,Zd(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Ol(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ae=null,et=!1;function en(e,t,n){for(n=n.child;n!==null;)Kd(e,t,n),n=n.sibling}function Kd(e,t,n){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount(Za,n)}catch{}switch(n.tag){case 26:Ue||jt(n,t),en(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ue||jt(n,t);var a=Ae,i=et;Mn(n.type)&&(Ae=n.stateNode,et=!1),en(e,t,n),Bi(n.stateNode),Ae=a,et=i;break;case 5:Ue||jt(n,t);case 6:if(a=Ae,i=et,Ae=null,en(e,t,n),Ae=a,et=i,Ae!==null)if(et)try{(Ae.nodeType===9?Ae.body:Ae.nodeName==="HTML"?Ae.ownerDocument.body:Ae).removeChild(n.stateNode)}catch(r){me(n,t,r)}else try{Ae.removeChild(n.stateNode)}catch(r){me(n,t,r)}break;case 18:Ae!==null&&(et?(e=Ae,If(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),qa(e)):If(Ae,n.stateNode));break;case 4:a=Ae,i=et,Ae=n.stateNode.containerInfo,et=!0,en(e,t,n),Ae=a,et=i;break;case 0:case 11:case 14:case 15:_n(2,n,t),Ue||_n(4,n,t),en(e,t,n);break;case 1:Ue||(jt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"&&Id(n,t,a)),en(e,t,n);break;case 21:en(e,t,n);break;case 22:Ue=(a=Ue)||n.memoizedState!==null,en(e,t,n),Ue=a;break;default:en(e,t,n)}}function Jd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{qa(e)}catch(n){me(t,t.return,n)}}}function Wd(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{qa(e)}catch(n){me(t,t.return,n)}}function Vg(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xd),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xd),t;default:throw Error(o(435,e.tag))}}function Gr(e,t){var n=Vg(e);t.forEach(function(a){if(!n.has(a)){n.add(a);var i=Jg.bind(null,e,a);a.then(i,i)}})}function tt(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a],r=e,s=t,c=s;e:for(;c!==null;){switch(c.tag){case 27:if(Mn(c.type)){Ae=c.stateNode,et=!1;break e}break;case 5:Ae=c.stateNode,et=!1;break e;case 3:case 4:Ae=c.stateNode.containerInfo,et=!0;break e}c=c.return}if(Ae===null)throw Error(o(160));Kd(r,s,i),Ae=null,et=!1,r=i.alternate,r!==null&&(r.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)$d(t,e),t=t.sibling}var Mt=null;function $d(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:tt(t,e),nt(e),a&4&&(_n(3,e,e.return),Ti(3,e),_n(5,e,e.return));break;case 1:tt(t,e),nt(e),a&512&&(Ue||n===null||jt(n,n.return)),a&64&&$t&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?a:n.concat(a))));break;case 26:var i=Mt;if(tt(t,e),nt(e),a&512&&(Ue||n===null||jt(n,n.return)),a&4){var r=n!==null?n.memoizedState:null;if(a=e.memoizedState,n===null)if(a===null)if(e.stateNode===null){e:{a=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(a){case"title":r=i.getElementsByTagName("title")[0],(!r||r[Wa]||r[Ve]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=i.createElement(a),i.head.insertBefore(r,i.querySelector("head > title"))),Ye(r,a,n),r[Ve]=e,Pe(r),a=r;break e;case"link":var s=ep("link","href",i).get(a+(n.href||""));if(s){for(var c=0;c<s.length;c++)if(r=s[c],r.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&r.getAttribute("rel")===(n.rel==null?null:n.rel)&&r.getAttribute("title")===(n.title==null?null:n.title)&&r.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break t}}r=i.createElement(a),Ye(r,a,n),i.head.appendChild(r);break;case"meta":if(s=ep("meta","content",i).get(a+(n.content||""))){for(c=0;c<s.length;c++)if(r=s[c],r.getAttribute("content")===(n.content==null?null:""+n.content)&&r.getAttribute("name")===(n.name==null?null:n.name)&&r.getAttribute("property")===(n.property==null?null:n.property)&&r.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&r.getAttribute("charset")===(n.charSet==null?null:n.charSet)){s.splice(c,1);break t}}r=i.createElement(a),Ye(r,a,n),i.head.appendChild(r);break;default:throw Error(o(468,a))}r[Ve]=e,Pe(r),a=r}e.stateNode=a}else tp(i,e.type,e.stateNode);else e.stateNode=$f(i,a,e.memoizedProps);else r!==a?(r===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):r.count--,a===null?tp(i,e.type,e.stateNode):$f(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&$s(e,e.memoizedProps,n.memoizedProps)}break;case 27:tt(t,e),nt(e),a&512&&(Ue||n===null||jt(n,n.return)),n!==null&&a&4&&$s(e,e.memoizedProps,n.memoizedProps);break;case 5:if(tt(t,e),nt(e),a&512&&(Ue||n===null||jt(n,n.return)),e.flags&32){i=e.stateNode;try{pa(i,"")}catch(Y){me(e,e.return,Y)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,$s(e,i,n!==null?n.memoizedProps:i)),a&1024&&(no=!0);break;case 6:if(tt(t,e),nt(e),a&4){if(e.stateNode===null)throw Error(o(162));a=e.memoizedProps,n=e.stateNode;try{n.nodeValue=a}catch(Y){me(e,e.return,Y)}}break;case 3:if(tl=null,i=Mt,Mt=$r(t.containerInfo),tt(t,e),Mt=i,nt(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{qa(t.containerInfo)}catch(Y){me(e,e.return,Y)}no&&(no=!1,ef(e));break;case 4:a=Mt,Mt=$r(e.stateNode.containerInfo),tt(t,e),nt(e),Mt=a;break;case 12:tt(t,e),nt(e);break;case 31:tt(t,e),nt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Gr(e,a)));break;case 13:tt(t,e),nt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Hr=rt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Gr(e,a)));break;case 22:i=e.memoizedState!==null;var y=n!==null&&n.memoizedState!==null,A=$t,M=Ue;if($t=A||i,Ue=M||y,tt(t,e),Ue=M,$t=A,nt(e),a&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(n===null||y||$t||Ue||na(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){y=n=t;try{if(r=y.stateNode,i)s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{c=y.stateNode;var z=y.memoizedProps.style,E=z!=null&&z.hasOwnProperty("display")?z.display:null;c.style.display=E==null||typeof E=="boolean"?"":(""+E).trim()}}catch(Y){me(y,y.return,Y)}}}else if(t.tag===6){if(n===null){y=t;try{y.stateNode.nodeValue=i?"":y.memoizedProps}catch(Y){me(y,y.return,Y)}}}else if(t.tag===18){if(n===null){y=t;try{var R=y.stateNode;i?qf(R,!0):qf(y.stateNode,!1)}catch(Y){me(y,y.return,Y)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}a&4&&(a=e.updateQueue,a!==null&&(n=a.retryQueue,n!==null&&(a.retryQueue=null,Gr(e,n))));break;case 19:tt(t,e),nt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Gr(e,a)));break;case 30:break;case 21:break;default:tt(t,e),nt(e)}}function nt(e){var t=e.flags;if(t&2){try{for(var n,a=e.return;a!==null;){if(Fd(a)){n=a;break}a=a.return}if(n==null)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode,r=eo(e);jr(e,r,i);break;case 5:var s=n.stateNode;n.flags&32&&(pa(s,""),n.flags&=-33);var c=eo(e);jr(e,c,s);break;case 3:case 4:var y=n.stateNode.containerInfo,A=eo(e);to(e,A,y);break;default:throw Error(o(161))}}catch(M){me(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ef(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;ef(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function tn(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Qd(e,t.alternate,t),t=t.sibling}function na(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:_n(4,t,t.return),na(t);break;case 1:jt(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Id(t,t.return,n),na(t);break;case 27:Bi(t.stateNode);case 26:case 5:jt(t,t.return),na(t);break;case 22:t.memoizedState===null&&na(t);break;case 30:na(t);break;default:na(t)}e=e.sibling}}function nn(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var a=t.alternate,i=e,r=t,s=r.flags;switch(r.tag){case 0:case 11:case 15:nn(i,r,n),Ti(4,r);break;case 1:if(nn(i,r,n),a=r,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(A){me(a,a.return,A)}if(a=r,i=a.updateQueue,i!==null){var c=a.stateNode;try{var y=i.shared.hiddenCallbacks;if(y!==null)for(i.shared.hiddenCallbacks=null,i=0;i<y.length;i++)Lc(y[i],c)}catch(A){me(a,a.return,A)}}n&&s&64&&Vd(r),wi(r,r.return);break;case 27:Yd(r);case 26:case 5:nn(i,r,n),n&&a===null&&s&4&&qd(r),wi(r,r.return);break;case 12:nn(i,r,n);break;case 31:nn(i,r,n),n&&s&4&&Jd(i,r);break;case 13:nn(i,r,n),n&&s&4&&Wd(i,r);break;case 22:r.memoizedState===null&&nn(i,r,n),wi(r,r.return);break;case 30:break;default:nn(i,r,n)}t=t.sibling}}function ao(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&di(n))}function io(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&di(e))}function Lt(e,t,n,a){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tf(e,t,n,a),t=t.sibling}function tf(e,t,n,a){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Lt(e,t,n,a),i&2048&&Ti(9,t);break;case 1:Lt(e,t,n,a);break;case 3:Lt(e,t,n,a),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&di(e)));break;case 12:if(i&2048){Lt(e,t,n,a),e=t.stateNode;try{var r=t.memoizedProps,s=r.id,c=r.onPostCommit;typeof c=="function"&&c(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(y){me(t,t.return,y)}}else Lt(e,t,n,a);break;case 31:Lt(e,t,n,a);break;case 13:Lt(e,t,n,a);break;case 23:break;case 22:r=t.stateNode,s=t.alternate,t.memoizedState!==null?r._visibility&2?Lt(e,t,n,a):Ai(e,t):r._visibility&2?Lt(e,t,n,a):(r._visibility|=2,ka(e,t,n,a,(t.subtreeFlags&10256)!==0||!1)),i&2048&&ao(s,t);break;case 24:Lt(e,t,n,a),i&2048&&io(t.alternate,t);break;default:Lt(e,t,n,a)}}function ka(e,t,n,a,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,s=t,c=n,y=a,A=s.flags;switch(s.tag){case 0:case 11:case 15:ka(r,s,c,y,i),Ti(8,s);break;case 23:break;case 22:var M=s.stateNode;s.memoizedState!==null?M._visibility&2?ka(r,s,c,y,i):Ai(r,s):(M._visibility|=2,ka(r,s,c,y,i)),i&&A&2048&&ao(s.alternate,s);break;case 24:ka(r,s,c,y,i),i&&A&2048&&io(s.alternate,s);break;default:ka(r,s,c,y,i)}t=t.sibling}}function Ai(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,a=t,i=a.flags;switch(a.tag){case 22:Ai(n,a),i&2048&&ao(a.alternate,a);break;case 24:Ai(n,a),i&2048&&io(a.alternate,a);break;default:Ai(n,a)}t=t.sibling}}var Ei=8192;function Ba(e,t,n){if(e.subtreeFlags&Ei)for(e=e.child;e!==null;)nf(e,t,n),e=e.sibling}function nf(e,t,n){switch(e.tag){case 26:Ba(e,t,n),e.flags&Ei&&e.memoizedState!==null&&Dm(n,Mt,e.memoizedState,e.memoizedProps);break;case 5:Ba(e,t,n);break;case 3:case 4:var a=Mt;Mt=$r(e.stateNode.containerInfo),Ba(e,t,n),Mt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Ei,Ei=16777216,Ba(e,t,n),Ei=a):Ba(e,t,n));break;default:Ba(e,t,n)}}function af(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Di(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];He=a,lf(a,e)}af(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rf(e),e=e.sibling}function rf(e){switch(e.tag){case 0:case 11:case 15:Di(e),e.flags&2048&&_n(9,e,e.return);break;case 3:Di(e);break;case 12:Di(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,Pr(e)):Di(e);break;default:Di(e)}}function Pr(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var a=t[n];He=a,lf(a,e)}af(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:_n(8,t,t.return),Pr(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,Pr(t));break;default:Pr(t)}e=e.sibling}}function lf(e,t){for(;He!==null;){var n=He;switch(n.tag){case 0:case 11:case 15:_n(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var a=n.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:di(n.memoizedState.cache)}if(a=n.child,a!==null)a.return=n,He=a;else e:for(n=e;He!==null;){a=He;var i=a.sibling,r=a.return;if(Zd(a),a===n){He=null;break e}if(i!==null){i.return=r,He=i;break e}He=r}}}var Ig={getCacheForType:function(e){var t=qe(Be),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return qe(Be).controller.signal}},qg=typeof WeakMap=="function"?WeakMap:Map,pe=0,Se=null,le=null,oe=0,ge=0,ft=null,Tn=!1,Na=!1,ro=!1,an=0,Re=0,wn=0,aa=0,lo=0,pt=0,za=0,Ri=null,at=null,so=!1,Hr=0,sf=0,Vr=1/0,Ir=null,An=null,Ge=0,En=null,Ua=null,rn=0,oo=0,uo=null,of=null,Mi=0,co=null;function ht(){return(pe&2)!==0&&oe!==0?oe&-oe:B.T!==null?yo():_u()}function uf(){if(pt===0)if((oe&536870912)===0||ce){var e=Ji;Ji<<=1,(Ji&3932160)===0&&(Ji=262144),pt=e}else pt=536870912;return e=ct.current,e!==null&&(e.flags|=32),pt}function it(e,t,n){(e===Se&&(ge===2||ge===9)||e.cancelPendingCommit!==null)&&(ja(e,0),Dn(e,oe,pt,!1)),Ja(e,n),((pe&2)===0||e!==Se)&&(e===Se&&((pe&2)===0&&(aa|=n),Re===4&&Dn(e,oe,pt,!1)),Gt(e))}function cf(e,t,n){if((pe&6)!==0)throw Error(o(327));var a=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ka(e,t),i=a?Xg(e,t):po(e,t,!0),r=a;do{if(i===0){Na&&!a&&Dn(e,t,0,!1);break}else{if(n=e.current.alternate,r&&!Fg(n)){i=po(e,t,!1),r=!1;continue}if(i===2){if(r=t,e.errorRecoveryDisabledLanes&r)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var c=e;i=Ri;var y=c.current.memoizedState.isDehydrated;if(y&&(ja(c,s).flags|=256),s=po(c,s,!1),s!==2){if(ro&&!y){c.errorRecoveryDisabledLanes|=r,aa|=r,i=4;break e}r=at,at=i,r!==null&&(at===null?at=r:at.push.apply(at,r))}i=s}if(r=!1,i!==2)continue}}if(i===1){ja(e,0),Dn(e,t,0,!0);break}e:{switch(a=e,r=i,r){case 0:case 1:throw Error(o(345));case 4:if((t&4194048)!==t)break;case 6:Dn(a,t,pt,!Tn);break e;case 2:at=null;break;case 3:case 5:break;default:throw Error(o(329))}if((t&62914560)===t&&(i=Hr+300-rt(),10<i)){if(Dn(a,t,pt,!Tn),$i(a,0,!0)!==0)break e;rn=t,a.timeoutHandle=Hf(df.bind(null,a,n,at,Ir,so,t,pt,aa,za,Tn,r,"Throttled",-0,0),i);break e}df(a,n,at,Ir,so,t,pt,aa,za,Tn,r,null,-0,0)}}break}while(!0);Gt(e)}function df(e,t,n,a,i,r,s,c,y,A,M,z,E,R){if(e.timeoutHandle=-1,z=t.subtreeFlags,z&8192||(z&16785408)===16785408){z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:It},nf(t,r,z);var Y=(r&62914560)===r?Hr-rt():(r&4194048)===r?sf-rt():0;if(Y=Rm(z,Y),Y!==null){rn=r,e.cancelPendingCommit=Y(bf.bind(null,e,t,r,n,a,i,s,c,y,M,z,null,E,R)),Dn(e,r,s,!A);return}}bf(e,t,r,n,a,i,s,c,y)}function Fg(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var a=0;a<n.length;a++){var i=n[a],r=i.getSnapshot;i=i.value;try{if(!ot(r(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Dn(e,t,n,a){t&=~lo,t&=~aa,e.suspendedLanes|=t,e.pingedLanes&=~t,a&&(e.warmLanes|=t),a=e.expirationTimes;for(var i=t;0<i;){var r=31-st(i),s=1<<r;a[r]=-1,i&=~s}n!==0&&xu(e,n,t)}function qr(){return(pe&6)===0?(Li(0),!1):!0}function fo(){if(le!==null){if(ge===0)var e=le.return;else e=le,Xt=Qn=null,Es(e),Da=null,pi=0,e=le;for(;e!==null;)Hd(e.alternate,e),e=e.return;le=null}}function ja(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,dm(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),rn=0,fo(),Se=e,le=n=Ft(e.current,null),oe=t,ge=0,ft=null,Tn=!1,Na=Ka(e,t),ro=!1,za=pt=lo=aa=wn=Re=0,at=Ri=null,so=!1,(t&8)!==0&&(t|=t&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=t;0<a;){var i=31-st(a),r=1<<i;t|=e[i],a&=~r}return an=t,dr(),n}function ff(e,t){ne=null,B.H=Ci,t===Ea||t===br?(t=Ec(),ge=3):t===gs?(t=Ec(),ge=4):ge=t===Is?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,ft=t,le===null&&(Re=1,kr(e,Ct(t,e.current)))}function pf(){var e=ct.current;return e===null?!0:(oe&4194048)===oe?wt===null:(oe&62914560)===oe||(oe&536870912)!==0?e===wt:!1}function hf(){var e=B.H;return B.H=Ci,e===null?Ci:e}function gf(){var e=B.A;return B.A=Ig,e}function Fr(){Re=4,Tn||(oe&4194048)!==oe&&ct.current!==null||(Na=!0),(wn&134217727)===0&&(aa&134217727)===0||Se===null||Dn(Se,oe,pt,!1)}function po(e,t,n){var a=pe;pe|=2;var i=hf(),r=gf();(Se!==e||oe!==t)&&(Ir=null,ja(e,t)),t=!1;var s=Re;e:do try{if(ge!==0&&le!==null){var c=le,y=ft;switch(ge){case 8:fo(),s=6;break e;case 3:case 2:case 9:case 6:ct.current===null&&(t=!0);var A=ge;if(ge=0,ft=null,Ga(e,c,y,A),n&&Na){s=0;break e}break;default:A=ge,ge=0,ft=null,Ga(e,c,y,A)}}Yg(),s=Re;break}catch(M){ff(e,M)}while(!0);return t&&e.shellSuspendCounter++,Xt=Qn=null,pe=a,B.H=i,B.A=r,le===null&&(Se=null,oe=0,dr()),s}function Yg(){for(;le!==null;)mf(le)}function Xg(e,t){var n=pe;pe|=2;var a=hf(),i=gf();Se!==e||oe!==t?(Ir=null,Vr=rt()+500,ja(e,t)):Na=Ka(e,t);e:do try{if(ge!==0&&le!==null){t=le;var r=ft;t:switch(ge){case 1:ge=0,ft=null,Ga(e,t,r,1);break;case 2:case 9:if(wc(r)){ge=0,ft=null,yf(t);break}t=function(){ge!==2&&ge!==9||Se!==e||(ge=7),Gt(e)},r.then(t,t);break e;case 3:ge=7;break e;case 4:ge=5;break e;case 7:wc(r)?(ge=0,ft=null,yf(t)):(ge=0,ft=null,Ga(e,t,r,7));break;case 5:var s=null;switch(le.tag){case 26:s=le.memoizedState;case 5:case 27:var c=le;if(s?np(s):c.stateNode.complete){ge=0,ft=null;var y=c.sibling;if(y!==null)le=y;else{var A=c.return;A!==null?(le=A,Yr(A)):le=null}break t}}ge=0,ft=null,Ga(e,t,r,5);break;case 6:ge=0,ft=null,Ga(e,t,r,6);break;case 8:fo(),Re=6;break e;default:throw Error(o(462))}}Qg();break}catch(M){ff(e,M)}while(!0);return Xt=Qn=null,B.H=a,B.A=i,pe=n,le!==null?0:(Se=null,oe=0,dr(),Re)}function Qg(){for(;le!==null&&!yh();)mf(le)}function mf(e){var t=Gd(e.alternate,e,an);e.memoizedProps=e.pendingProps,t===null?Yr(e):le=t}function yf(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=kd(n,t,t.pendingProps,t.type,void 0,oe);break;case 11:t=kd(n,t,t.pendingProps,t.type.render,t.ref,oe);break;case 5:Es(t);default:Hd(n,t),t=le=hc(t,an),t=Gd(n,t,an)}e.memoizedProps=e.pendingProps,t===null?Yr(e):le=t}function Ga(e,t,n,a){Xt=Qn=null,Es(t),Da=null,pi=0;var i=t.return;try{if(zg(e,i,t,n,oe)){Re=1,kr(e,Ct(n,e.current)),le=null;return}}catch(r){if(i!==null)throw le=i,r;Re=1,kr(e,Ct(n,e.current)),le=null;return}t.flags&32768?(ce||a===1?e=!0:Na||(oe&536870912)!==0?e=!1:(Tn=e=!0,(a===2||a===9||a===3||a===6)&&(a=ct.current,a!==null&&a.tag===13&&(a.flags|=16384))),vf(t,e)):Yr(t)}function Yr(e){var t=e;do{if((t.flags&32768)!==0){vf(t,Tn);return}e=t.return;var n=Gg(t.alternate,t,an);if(n!==null){le=n;return}if(t=t.sibling,t!==null){le=t;return}le=t=e}while(t!==null);Re===0&&(Re=5)}function vf(e,t){do{var n=Pg(e.alternate,e);if(n!==null){n.flags&=32767,le=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){le=e;return}le=e=n}while(e!==null);Re=6,le=null}function bf(e,t,n,a,i,r,s,c,y){e.cancelPendingCommit=null;do Xr();while(Ge!==0);if((pe&6)!==0)throw Error(o(327));if(t!==null){if(t===e.current)throw Error(o(177));if(r=t.lanes|t.childLanes,r|=es,Eh(e,n,r,s,c,y),e===Se&&(le=Se=null,oe=0),Ua=t,En=e,rn=n,oo=r,uo=i,of=a,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Wg(Zi,function(){return Tf(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||a){a=B.T,B.T=null,i=V.p,V.p=2,s=pe,pe|=4;try{Hg(e,t,n)}finally{pe=s,V.p=i,B.T=a}}Ge=1,xf(),Cf(),Sf()}}function xf(){if(Ge===1){Ge=0;var e=En,t=Ua,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null;var a=V.p;V.p=2;var i=pe;pe|=4;try{$d(t,e);var r=wo,s=rc(e.containerInfo),c=r.focusedElem,y=r.selectionRange;if(s!==c&&c&&c.ownerDocument&&ic(c.ownerDocument.documentElement,c)){if(y!==null&&Zl(c)){var A=y.start,M=y.end;if(M===void 0&&(M=A),"selectionStart"in c)c.selectionStart=A,c.selectionEnd=Math.min(M,c.value.length);else{var z=c.ownerDocument||document,E=z&&z.defaultView||window;if(E.getSelection){var R=E.getSelection(),Y=c.textContent.length,W=Math.min(y.start,Y),xe=y.end===void 0?W:Math.min(y.end,Y);!R.extend&&W>xe&&(s=xe,xe=W,W=s);var C=ac(c,W),b=ac(c,xe);if(C&&b&&(R.rangeCount!==1||R.anchorNode!==C.node||R.anchorOffset!==C.offset||R.focusNode!==b.node||R.focusOffset!==b.offset)){var T=z.createRange();T.setStart(C.node,C.offset),R.removeAllRanges(),W>xe?(R.addRange(T),R.extend(b.node,b.offset)):(T.setEnd(b.node,b.offset),R.addRange(T))}}}}for(z=[],R=c;R=R.parentNode;)R.nodeType===1&&z.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<z.length;c++){var N=z[c];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}rl=!!To,wo=To=null}finally{pe=i,V.p=a,B.T=n}}e.current=t,Ge=2}}function Cf(){if(Ge===2){Ge=0;var e=En,t=Ua,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=B.T,B.T=null;var a=V.p;V.p=2;var i=pe;pe|=4;try{Qd(e,t.alternate,t)}finally{pe=i,V.p=a,B.T=n}}Ge=3}}function Sf(){if(Ge===4||Ge===3){Ge=0,vh();var e=En,t=Ua,n=rn,a=of;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ge=5:(Ge=0,Ua=En=null,_f(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(An=null),Ml(n),t=t.stateNode,lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot(Za,t,void 0,(t.current.flags&128)===128)}catch{}if(a!==null){t=B.T,i=V.p,V.p=2,B.T=null;try{for(var r=e.onRecoverableError,s=0;s<a.length;s++){var c=a[s];r(c.value,{componentStack:c.stack})}}finally{B.T=t,V.p=i}}(rn&3)!==0&&Xr(),Gt(e),i=e.pendingLanes,(n&261930)!==0&&(i&42)!==0?e===co?Mi++:(Mi=0,co=e):Mi=0,Li(0)}}function _f(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,di(t)))}function Xr(){return xf(),Cf(),Sf(),Tf()}function Tf(){if(Ge!==5)return!1;var e=En,t=oo;oo=0;var n=Ml(rn),a=B.T,i=V.p;try{V.p=32>n?32:n,B.T=null,n=uo,uo=null;var r=En,s=rn;if(Ge=0,Ua=En=null,rn=0,(pe&6)!==0)throw Error(o(331));var c=pe;if(pe|=4,rf(r.current),tf(r,r.current,s,n),pe=c,Li(0,!1),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot(Za,r)}catch{}return!0}finally{V.p=i,B.T=a,_f(e,t)}}function wf(e,t,n){t=Ct(n,t),t=Vs(e.stateNode,t,2),e=xn(e,t,2),e!==null&&(Ja(e,2),Gt(e))}function me(e,t,n){if(e.tag===3)wf(e,e,n);else for(;t!==null;){if(t.tag===3){wf(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(An===null||!An.has(a))){e=Ct(n,e),n=wd(2),a=xn(t,n,2),a!==null&&(Ad(n,a,t,e),Ja(a,2),Gt(a));break}}t=t.return}}function ho(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new qg;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(ro=!0,i.add(n),e=Zg.bind(null,e,t,n),t.then(e,e))}function Zg(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Se===e&&(oe&n)===n&&(Re===4||Re===3&&(oe&62914560)===oe&&300>rt()-Hr?(pe&2)===0&&ja(e,0):lo|=n,za===oe&&(za=0)),Gt(e)}function Af(e,t){t===0&&(t=bu()),e=Fn(e,t),e!==null&&(Ja(e,t),Gt(e))}function Kg(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Af(e,n)}function Jg(e,t){var n=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(o(314))}a!==null&&a.delete(t),Af(e,n)}function Wg(e,t){return Al(e,t)}var Qr=null,Pa=null,go=!1,Zr=!1,mo=!1,Rn=0;function Gt(e){e!==Pa&&e.next===null&&(Pa===null?Qr=Pa=e:Pa=Pa.next=e),Zr=!0,go||(go=!0,em())}function Li(e,t){if(!mo&&Zr){mo=!0;do for(var n=!1,a=Qr;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var r=0;else{var s=a.suspendedLanes,c=a.pingedLanes;r=(1<<31-st(42|e)+1)-1,r&=i&~(s&~c),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(n=!0,Mf(a,r))}else r=oe,r=$i(a,a===Se?r:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(r&3)===0||Ka(a,r)||(n=!0,Mf(a,r));a=a.next}while(n);mo=!1}}function $g(){Ef()}function Ef(){Zr=go=!1;var e=0;Rn!==0&&cm()&&(e=Rn);for(var t=rt(),n=null,a=Qr;a!==null;){var i=a.next,r=Df(a,t);r===0?(a.next=null,n===null?Qr=i:n.next=i,i===null&&(Pa=n)):(n=a,(e!==0||(r&3)!==0)&&(Zr=!0)),a=i}Ge!==0&&Ge!==5||Li(e),Rn!==0&&(Rn=0)}function Df(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var s=31-st(r),c=1<<s,y=i[s];y===-1?((c&n)===0||(c&a)!==0)&&(i[s]=Ah(c,t)):y<=t&&(e.expiredLanes|=c),r&=~c}if(t=Se,n=oe,n=$i(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,n===0||e===t&&(ge===2||ge===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&El(a),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ka(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(a!==null&&El(a),Ml(n)){case 2:case 8:n=yu;break;case 32:n=Zi;break;case 268435456:n=vu;break;default:n=Zi}return a=Rf.bind(null,e),n=Al(n,a),e.callbackPriority=t,e.callbackNode=n,t}return a!==null&&a!==null&&El(a),e.callbackPriority=2,e.callbackNode=null,2}function Rf(e,t){if(Ge!==0&&Ge!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Xr()&&e.callbackNode!==n)return null;var a=oe;return a=$i(e,e===Se?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(cf(e,a,t),Df(e,rt()),e.callbackNode!=null&&e.callbackNode===n?Rf.bind(null,e):null)}function Mf(e,t){if(Xr())return null;cf(e,t,!0)}function em(){fm(function(){(pe&6)!==0?Al(mu,$g):Ef()})}function yo(){if(Rn===0){var e=wa;e===0&&(e=Ki,Ki<<=1,(Ki&261888)===0&&(Ki=256)),Rn=e}return Rn}function Lf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ar(""+e)}function Of(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function tm(e,t,n,a,i){if(t==="submit"&&n&&n.stateNode===i){var r=Lf((i[We]||null).action),s=a.submitter;s&&(t=(t=s[We]||null)?Lf(t.formAction):s.getAttribute("formAction"),t!==null&&(r=t,s=null));var c=new sr("action","action",null,a,i);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Rn!==0){var y=s?Of(i,s):new FormData(i);zs(n,{pending:!0,data:y,method:i.method,action:r},null,y)}}else typeof r=="function"&&(c.preventDefault(),y=s?Of(i,s):new FormData(i),zs(n,{pending:!0,data:y,method:i.method,action:r},r,y))},currentTarget:i}]})}}for(var vo=0;vo<$l.length;vo++){var bo=$l[vo],nm=bo.toLowerCase(),am=bo[0].toUpperCase()+bo.slice(1);Rt(nm,"on"+am)}Rt(oc,"onAnimationEnd"),Rt(uc,"onAnimationIteration"),Rt(cc,"onAnimationStart"),Rt("dblclick","onDoubleClick"),Rt("focusin","onFocus"),Rt("focusout","onBlur"),Rt(bg,"onTransitionRun"),Rt(xg,"onTransitionStart"),Rt(Cg,"onTransitionCancel"),Rt(dc,"onTransitionEnd"),da("onMouseEnter",["mouseout","mouseover"]),da("onMouseLeave",["mouseout","mouseover"]),da("onPointerEnter",["pointerout","pointerover"]),da("onPointerLeave",["pointerout","pointerover"]),Hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Oi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),im=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Oi));function kf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var r=void 0;if(t)for(var s=a.length-1;0<=s;s--){var c=a[s],y=c.instance,A=c.currentTarget;if(c=c.listener,y!==r&&i.isPropagationStopped())break e;r=c,i.currentTarget=A;try{r(i)}catch(M){cr(M)}i.currentTarget=null,r=y}else for(s=0;s<a.length;s++){if(c=a[s],y=c.instance,A=c.currentTarget,c=c.listener,y!==r&&i.isPropagationStopped())break e;r=c,i.currentTarget=A;try{r(i)}catch(M){cr(M)}i.currentTarget=null,r=y}}}}function se(e,t){var n=t[Ll];n===void 0&&(n=t[Ll]=new Set);var a=e+"__bubble";n.has(a)||(Bf(t,e,2,!1),n.add(a))}function xo(e,t,n){var a=0;t&&(a|=4),Bf(n,e,a,t)}var Kr="_reactListening"+Math.random().toString(36).slice(2);function Co(e){if(!e[Kr]){e[Kr]=!0,Au.forEach(function(n){n!=="selectionchange"&&(im.has(n)||xo(n,!1,e),xo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Kr]||(t[Kr]=!0,xo("selectionchange",!1,t))}}function Bf(e,t,n,a){switch(up(t)){case 2:var i=Om;break;case 8:i=km;break;default:i=zo}n=i.bind(null,t,n,e),i=void 0,!Pl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function So(e,t,n,a,i){var r=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var s=a.tag;if(s===3||s===4){var c=a.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=a.return;s!==null;){var y=s.tag;if((y===3||y===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=oa(c),s===null)return;if(y=s.tag,y===5||y===6||y===26||y===27){a=r=s;continue e}c=c.parentNode}}a=a.return}ju(function(){var A=r,M=jl(n),z=[];e:{var E=fc.get(e);if(E!==void 0){var R=sr,Y=e;switch(e){case"keypress":if(rr(n)===0)break e;case"keydown":case"keyup":R=Jh;break;case"focusin":Y="focus",R=ql;break;case"focusout":Y="blur",R=ql;break;case"beforeblur":case"afterblur":R=ql;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":R=Hu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":R=Gh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":R=eg;break;case oc:case uc:case cc:R=Vh;break;case dc:R=ng;break;case"scroll":case"scrollend":R=Uh;break;case"wheel":R=ig;break;case"copy":case"cut":case"paste":R=qh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":R=Iu;break;case"toggle":case"beforetoggle":R=lg}var W=(t&4)!==0,xe=!W&&(e==="scroll"||e==="scrollend"),C=W?E!==null?E+"Capture":null:E;W=[];for(var b=A,T;b!==null;){var N=b;if(T=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||T===null||C===null||(N=ei(b,C),N!=null&&W.push(ki(b,N,T))),xe)break;b=b.return}0<W.length&&(E=new R(E,Y,null,n,M),z.push({event:E,listeners:W}))}}if((t&7)===0){e:{if(E=e==="mouseover"||e==="pointerover",R=e==="mouseout"||e==="pointerout",E&&n!==Ul&&(Y=n.relatedTarget||n.fromElement)&&(oa(Y)||Y[sa]))break e;if((R||E)&&(E=M.window===M?M:(E=M.ownerDocument)?E.defaultView||E.parentWindow:window,R?(Y=n.relatedTarget||n.toElement,R=A,Y=Y?oa(Y):null,Y!==null&&(xe=f(Y),W=Y.tag,Y!==xe||W!==5&&W!==27&&W!==6)&&(Y=null)):(R=null,Y=A),R!==Y)){if(W=Hu,N="onMouseLeave",C="onMouseEnter",b="mouse",(e==="pointerout"||e==="pointerover")&&(W=Iu,N="onPointerLeave",C="onPointerEnter",b="pointer"),xe=R==null?E:$a(R),T=Y==null?E:$a(Y),E=new W(N,b+"leave",R,n,M),E.target=xe,E.relatedTarget=T,N=null,oa(M)===A&&(W=new W(C,b+"enter",Y,n,M),W.target=T,W.relatedTarget=xe,N=W),xe=N,R&&Y)t:{for(W=rm,C=R,b=Y,T=0,N=C;N;N=W(N))T++;N=0;for(var K=b;K;K=W(K))N++;for(;0<T-N;)C=W(C),T--;for(;0<N-T;)b=W(b),N--;for(;T--;){if(C===b||b!==null&&C===b.alternate){W=C;break t}C=W(C),b=W(b)}W=null}else W=null;R!==null&&Nf(z,E,R,W,!1),Y!==null&&xe!==null&&Nf(z,xe,Y,W,!0)}}e:{if(E=A?$a(A):window,R=E.nodeName&&E.nodeName.toLowerCase(),R==="select"||R==="input"&&E.type==="file")var de=Ju;else if(Zu(E))if(Wu)de=mg;else{de=hg;var Q=pg}else R=E.nodeName,!R||R.toLowerCase()!=="input"||E.type!=="checkbox"&&E.type!=="radio"?A&&zl(A.elementType)&&(de=Ju):de=gg;if(de&&(de=de(e,A))){Ku(z,de,n,M);break e}Q&&Q(e,E,A),e==="focusout"&&A&&E.type==="number"&&A.memoizedProps.value!=null&&Nl(E,"number",E.value)}switch(Q=A?$a(A):window,e){case"focusin":(Zu(Q)||Q.contentEditable==="true")&&(ya=Q,Kl=A,oi=null);break;case"focusout":oi=Kl=ya=null;break;case"mousedown":Jl=!0;break;case"contextmenu":case"mouseup":case"dragend":Jl=!1,lc(z,n,M);break;case"selectionchange":if(vg)break;case"keydown":case"keyup":lc(z,n,M)}var ae;if(Yl)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else ma?Xu(e,n)&&(ue="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(ue="onCompositionStart");ue&&(qu&&n.locale!=="ko"&&(ma||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&ma&&(ae=Gu()):(pn=M,Hl="value"in pn?pn.value:pn.textContent,ma=!0)),Q=Jr(A,ue),0<Q.length&&(ue=new Vu(ue,e,null,n,M),z.push({event:ue,listeners:Q}),ae?ue.data=ae:(ae=Qu(n),ae!==null&&(ue.data=ae)))),(ae=og?ug(e,n):cg(e,n))&&(ue=Jr(A,"onBeforeInput"),0<ue.length&&(Q=new Vu("onBeforeInput","beforeinput",null,n,M),z.push({event:Q,listeners:ue}),Q.data=ae)),tm(z,e,A,n,M)}kf(z,t)})}function ki(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Jr(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,r=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||r===null||(i=ei(e,n),i!=null&&a.unshift(ki(e,i,r)),i=ei(e,t),i!=null&&a.push(ki(e,i,r))),e.tag===3)return a;e=e.return}return[]}function rm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Nf(e,t,n,a,i){for(var r=t._reactName,s=[];n!==null&&n!==a;){var c=n,y=c.alternate,A=c.stateNode;if(c=c.tag,y!==null&&y===a)break;c!==5&&c!==26&&c!==27||A===null||(y=A,i?(A=ei(n,r),A!=null&&s.unshift(ki(n,A,y))):i||(A=ei(n,r),A!=null&&s.push(ki(n,A,y)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var lm=/\r\n?/g,sm=/\u0000|\uFFFD/g;function zf(e){return(typeof e=="string"?e:""+e).replace(lm,`
`).replace(sm,"")}function Uf(e,t){return t=zf(t),zf(e)===t}function be(e,t,n,a,i,r){switch(n){case"children":typeof a=="string"?t==="body"||t==="textarea"&&a===""||pa(e,a):(typeof a=="number"||typeof a=="bigint")&&t!=="body"&&pa(e,""+a);break;case"className":tr(e,"class",a);break;case"tabIndex":tr(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":tr(e,n,a);break;case"style":zu(e,a,r);break;case"data":if(t!=="object"){tr(e,"data",a);break}case"src":case"href":if(a===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=ar(""+a),e.setAttribute(n,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(n==="formAction"?(t!=="input"&&be(e,t,"name",i.name,i,null),be(e,t,"formEncType",i.formEncType,i,null),be(e,t,"formMethod",i.formMethod,i,null),be(e,t,"formTarget",i.formTarget,i,null)):(be(e,t,"encType",i.encType,i,null),be(e,t,"method",i.method,i,null),be(e,t,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(n);break}a=ar(""+a),e.setAttribute(n,a);break;case"onClick":a!=null&&(e.onclick=It);break;case"onScroll":a!=null&&se("scroll",e);break;case"onScrollEnd":a!=null&&se("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}n=ar(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""+a):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":a===!0?e.setAttribute(n,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(n,a):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(n,a):e.removeAttribute(n);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(n):e.setAttribute(n,a);break;case"popover":se("beforetoggle",e),se("toggle",e),er(e,"popover",a);break;case"xlinkActuate":Vt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Vt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Vt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Vt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Vt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Vt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Vt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":er(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Nh.get(n)||n,er(e,n,a))}}function _o(e,t,n,a,i,r){switch(n){case"style":zu(e,a,r);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(o(61));if(n=a.__html,n!=null){if(i.children!=null)throw Error(o(60));e.innerHTML=n}}break;case"children":typeof a=="string"?pa(e,a):(typeof a=="number"||typeof a=="bigint")&&pa(e,""+a);break;case"onScroll":a!=null&&se("scroll",e);break;case"onScrollEnd":a!=null&&se("scrollend",e);break;case"onClick":a!=null&&(e.onclick=It);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Eu.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),r=e[We]||null,r=r!=null?r[n]:null,typeof r=="function"&&e.removeEventListener(t,r,i),typeof a=="function")){typeof r!="function"&&r!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,a,i);break e}n in e?e[n]=a:a===!0?e.setAttribute(n,""):er(e,n,a)}}}function Ye(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",e),se("load",e);var a=!1,i=!1,r;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(s!=null)switch(r){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:be(e,t,r,s,n,null)}}i&&be(e,t,"srcSet",n.srcSet,n,null),a&&be(e,t,"src",n.src,n,null);return;case"input":se("invalid",e);var c=r=s=i=null,y=null,A=null;for(a in n)if(n.hasOwnProperty(a)){var M=n[a];if(M!=null)switch(a){case"name":i=M;break;case"type":s=M;break;case"checked":y=M;break;case"defaultChecked":A=M;break;case"value":r=M;break;case"defaultValue":c=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(o(137,t));break;default:be(e,t,a,M,n,null)}}Ou(e,r,c,y,A,s,i,!1);return;case"select":se("invalid",e),a=s=r=null;for(i in n)if(n.hasOwnProperty(i)&&(c=n[i],c!=null))switch(i){case"value":r=c;break;case"defaultValue":s=c;break;case"multiple":a=c;default:be(e,t,i,c,n,null)}t=r,n=s,e.multiple=!!a,t!=null?fa(e,!!a,t,!1):n!=null&&fa(e,!!a,n,!0);return;case"textarea":se("invalid",e),r=i=a=null;for(s in n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case"value":a=c;break;case"defaultValue":i=c;break;case"children":r=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(o(91));break;default:be(e,t,s,c,n,null)}Bu(e,a,i,r);return;case"option":for(y in n)if(n.hasOwnProperty(y)&&(a=n[y],a!=null))switch(y){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:be(e,t,y,a,n,null)}return;case"dialog":se("beforetoggle",e),se("toggle",e),se("cancel",e),se("close",e);break;case"iframe":case"object":se("load",e);break;case"video":case"audio":for(a=0;a<Oi.length;a++)se(Oi[a],e);break;case"image":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"embed":case"source":case"link":se("error",e),se("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(A in n)if(n.hasOwnProperty(A)&&(a=n[A],a!=null))switch(A){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:be(e,t,A,a,n,null)}return;default:if(zl(t)){for(M in n)n.hasOwnProperty(M)&&(a=n[M],a!==void 0&&_o(e,t,M,a,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(a=n[c],a!=null&&be(e,t,c,a,n,null))}function om(e,t,n,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,r=null,s=null,c=null,y=null,A=null,M=null;for(R in n){var z=n[R];if(n.hasOwnProperty(R)&&z!=null)switch(R){case"checked":break;case"value":break;case"defaultValue":y=z;default:a.hasOwnProperty(R)||be(e,t,R,null,a,z)}}for(var E in a){var R=a[E];if(z=n[E],a.hasOwnProperty(E)&&(R!=null||z!=null))switch(E){case"type":r=R;break;case"name":i=R;break;case"checked":A=R;break;case"defaultChecked":M=R;break;case"value":s=R;break;case"defaultValue":c=R;break;case"children":case"dangerouslySetInnerHTML":if(R!=null)throw Error(o(137,t));break;default:R!==z&&be(e,t,E,R,a,z)}}Bl(e,s,c,y,A,M,r,i);return;case"select":R=s=c=E=null;for(r in n)if(y=n[r],n.hasOwnProperty(r)&&y!=null)switch(r){case"value":break;case"multiple":R=y;default:a.hasOwnProperty(r)||be(e,t,r,null,a,y)}for(i in a)if(r=a[i],y=n[i],a.hasOwnProperty(i)&&(r!=null||y!=null))switch(i){case"value":E=r;break;case"defaultValue":c=r;break;case"multiple":s=r;default:r!==y&&be(e,t,i,r,a,y)}t=c,n=s,a=R,E!=null?fa(e,!!n,E,!1):!!a!=!!n&&(t!=null?fa(e,!!n,t,!0):fa(e,!!n,n?[]:"",!1));return;case"textarea":R=E=null;for(c in n)if(i=n[c],n.hasOwnProperty(c)&&i!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:be(e,t,c,null,a,i)}for(s in a)if(i=a[s],r=n[s],a.hasOwnProperty(s)&&(i!=null||r!=null))switch(s){case"value":E=i;break;case"defaultValue":R=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(o(91));break;default:i!==r&&be(e,t,s,i,a,r)}ku(e,E,R);return;case"option":for(var Y in n)if(E=n[Y],n.hasOwnProperty(Y)&&E!=null&&!a.hasOwnProperty(Y))switch(Y){case"selected":e.selected=!1;break;default:be(e,t,Y,null,a,E)}for(y in a)if(E=a[y],R=n[y],a.hasOwnProperty(y)&&E!==R&&(E!=null||R!=null))switch(y){case"selected":e.selected=E&&typeof E!="function"&&typeof E!="symbol";break;default:be(e,t,y,E,a,R)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var W in n)E=n[W],n.hasOwnProperty(W)&&E!=null&&!a.hasOwnProperty(W)&&be(e,t,W,null,a,E);for(A in a)if(E=a[A],R=n[A],a.hasOwnProperty(A)&&E!==R&&(E!=null||R!=null))switch(A){case"children":case"dangerouslySetInnerHTML":if(E!=null)throw Error(o(137,t));break;default:be(e,t,A,E,a,R)}return;default:if(zl(t)){for(var xe in n)E=n[xe],n.hasOwnProperty(xe)&&E!==void 0&&!a.hasOwnProperty(xe)&&_o(e,t,xe,void 0,a,E);for(M in a)E=a[M],R=n[M],!a.hasOwnProperty(M)||E===R||E===void 0&&R===void 0||_o(e,t,M,E,a,R);return}}for(var C in n)E=n[C],n.hasOwnProperty(C)&&E!=null&&!a.hasOwnProperty(C)&&be(e,t,C,null,a,E);for(z in a)E=a[z],R=n[z],!a.hasOwnProperty(z)||E===R||E==null&&R==null||be(e,t,z,E,a,R)}function jf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function um(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),a=0;a<n.length;a++){var i=n[a],r=i.transferSize,s=i.initiatorType,c=i.duration;if(r&&c&&jf(s)){for(s=0,c=i.responseEnd,a+=1;a<n.length;a++){var y=n[a],A=y.startTime;if(A>c)break;var M=y.transferSize,z=y.initiatorType;M&&jf(z)&&(y=y.responseEnd,s+=M*(y<c?1:(c-A)/(y-A)))}if(--a,t+=8*(r+s)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var To=null,wo=null;function Wr(e){return e.nodeType===9?e:e.ownerDocument}function Gf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Pf(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Ao(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Eo=null;function cm(){var e=window.event;return e&&e.type==="popstate"?e===Eo?!1:(Eo=e,!0):(Eo=null,!1)}var Hf=typeof setTimeout=="function"?setTimeout:void 0,dm=typeof clearTimeout=="function"?clearTimeout:void 0,Vf=typeof Promise=="function"?Promise:void 0,fm=typeof queueMicrotask=="function"?queueMicrotask:typeof Vf<"u"?function(e){return Vf.resolve(null).then(e).catch(pm)}:Hf;function pm(e){setTimeout(function(){throw e})}function Mn(e){return e==="head"}function If(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"||n==="/&"){if(a===0){e.removeChild(i),qa(t);return}a--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")a++;else if(n==="html")Bi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Bi(n);for(var r=n.firstChild;r;){var s=r.nextSibling,c=r.nodeName;r[Wa]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&r.rel.toLowerCase()==="stylesheet"||n.removeChild(r),r=s}}else n==="body"&&Bi(e.ownerDocument.body);n=i}while(n);qa(t)}function qf(e,t){var n=e;e=0;do{var a=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),a&&a.nodeType===8)if(n=a.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=a}while(n)}function Do(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Do(n),Ol(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function hm(e,t,n,a){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[Wa])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=At(e.nextSibling),e===null)break}return null}function gm(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=At(e.nextSibling),e===null))return null;return e}function Ff(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=At(e.nextSibling),e===null))return null;return e}function Ro(e){return e.data==="$?"||e.data==="$~"}function Mo(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function mm(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var a=function(){t(),n.removeEventListener("DOMContentLoaded",a)};n.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function At(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Lo=null;function Yf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return At(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Xf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Qf(e,t,n){switch(t=Wr(n),e){case"html":if(e=t.documentElement,!e)throw Error(o(452));return e;case"head":if(e=t.head,!e)throw Error(o(453));return e;case"body":if(e=t.body,!e)throw Error(o(454));return e;default:throw Error(o(451))}}function Bi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Ol(e)}var Et=new Map,Zf=new Set;function $r(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ln=V.d;V.d={f:ym,r:vm,D:bm,C:xm,L:Cm,m:Sm,X:Tm,S:_m,M:wm};function ym(){var e=ln.f(),t=qr();return e||t}function vm(e){var t=ua(e);t!==null&&t.tag===5&&t.type==="form"?dd(t):ln.r(e)}var Ha=typeof document>"u"?null:document;function Kf(e,t,n){var a=Ha;if(a&&typeof t=="string"&&t){var i=bt(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof n=="string"&&(i+='[crossorigin="'+n+'"]'),Zf.has(i)||(Zf.add(i),e={rel:e,crossOrigin:n,href:t},a.querySelector(i)===null&&(t=a.createElement("link"),Ye(t,"link",e),Pe(t),a.head.appendChild(t)))}}function bm(e){ln.D(e),Kf("dns-prefetch",e,null)}function xm(e,t){ln.C(e,t),Kf("preconnect",e,t)}function Cm(e,t,n){ln.L(e,t,n);var a=Ha;if(a&&e&&t){var i='link[rel="preload"][as="'+bt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(i+='[imagesrcset="'+bt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(i+='[imagesizes="'+bt(n.imageSizes)+'"]')):i+='[href="'+bt(e)+'"]';var r=i;switch(t){case"style":r=Va(e);break;case"script":r=Ia(e)}Et.has(r)||(e=S({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Et.set(r,e),a.querySelector(i)!==null||t==="style"&&a.querySelector(Ni(r))||t==="script"&&a.querySelector(zi(r))||(t=a.createElement("link"),Ye(t,"link",e),Pe(t),a.head.appendChild(t)))}}function Sm(e,t){ln.m(e,t);var n=Ha;if(n&&e){var a=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+bt(a)+'"][href="'+bt(e)+'"]',r=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ia(e)}if(!Et.has(r)&&(e=S({rel:"modulepreload",href:e},t),Et.set(r,e),n.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(zi(r)))return}a=n.createElement("link"),Ye(a,"link",e),Pe(a),n.head.appendChild(a)}}}function _m(e,t,n){ln.S(e,t,n);var a=Ha;if(a&&e){var i=ca(a).hoistableStyles,r=Va(e);t=t||"default";var s=i.get(r);if(!s){var c={loading:0,preload:null};if(s=a.querySelector(Ni(r)))c.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Et.get(r))&&Oo(e,n);var y=s=a.createElement("link");Pe(y),Ye(y,"link",e),y._p=new Promise(function(A,M){y.onload=A,y.onerror=M}),y.addEventListener("load",function(){c.loading|=1}),y.addEventListener("error",function(){c.loading|=2}),c.loading|=4,el(s,t,a)}s={type:"stylesheet",instance:s,count:1,state:c},i.set(r,s)}}}function Tm(e,t){ln.X(e,t);var n=Ha;if(n&&e){var a=ca(n).hoistableScripts,i=Ia(e),r=a.get(i);r||(r=n.querySelector(zi(i)),r||(e=S({src:e,async:!0},t),(t=Et.get(i))&&ko(e,t),r=n.createElement("script"),Pe(r),Ye(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function wm(e,t){ln.M(e,t);var n=Ha;if(n&&e){var a=ca(n).hoistableScripts,i=Ia(e),r=a.get(i);r||(r=n.querySelector(zi(i)),r||(e=S({src:e,async:!0,type:"module"},t),(t=Et.get(i))&&ko(e,t),r=n.createElement("script"),Pe(r),Ye(r,"link",e),n.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},a.set(i,r))}}function Jf(e,t,n,a){var i=(i=re.current)?$r(i):null;if(!i)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=Va(n.href),n=ca(i).hoistableStyles,a=n.get(t),a||(a={type:"style",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Va(n.href);var r=ca(i).hoistableStyles,s=r.get(e);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,s),(r=i.querySelector(Ni(e)))&&!r._p&&(s.instance=r,s.state.loading=5),Et.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Et.set(e,n),r||Am(i,e,n,s.state))),t&&a===null)throw Error(o(528,""));return s}if(t&&a!==null)throw Error(o(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ia(n),n=ca(i).hoistableScripts,a=n.get(t),a||(a={type:"script",instance:null,count:0,state:null},n.set(t,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Va(e){return'href="'+bt(e)+'"'}function Ni(e){return'link[rel="stylesheet"]['+e+"]"}function Wf(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Am(e,t,n,a){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?a.loading=1:(t=e.createElement("link"),a.preload=t,t.addEventListener("load",function(){return a.loading|=1}),t.addEventListener("error",function(){return a.loading|=2}),Ye(t,"link",n),Pe(t),e.head.appendChild(t))}function Ia(e){return'[src="'+bt(e)+'"]'}function zi(e){return"script[async]"+e}function $f(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var a=e.querySelector('style[data-href~="'+bt(n.href)+'"]');if(a)return t.instance=a,Pe(a),a;var i=S({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Pe(a),Ye(a,"style",i),el(a,n.precedence,e),t.instance=a;case"stylesheet":i=Va(n.href);var r=e.querySelector(Ni(i));if(r)return t.state.loading|=4,t.instance=r,Pe(r),r;a=Wf(n),(i=Et.get(i))&&Oo(a,i),r=(e.ownerDocument||e).createElement("link"),Pe(r);var s=r;return s._p=new Promise(function(c,y){s.onload=c,s.onerror=y}),Ye(r,"link",a),t.state.loading|=4,el(r,n.precedence,e),t.instance=r;case"script":return r=Ia(n.src),(i=e.querySelector(zi(r)))?(t.instance=i,Pe(i),i):(a=n,(i=Et.get(r))&&(a=S({},n),ko(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Pe(i),Ye(i,"link",a),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(a=t.instance,t.state.loading|=4,el(a,n.precedence,e));return t.instance}function el(e,t,n){for(var a=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,r=i,s=0;s<a.length;s++){var c=a[s];if(c.dataset.precedence===t)r=c;else if(r!==i)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Oo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ko(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var tl=null;function ep(e,t,n){if(tl===null){var a=new Map,i=tl=new Map;i.set(n,a)}else i=tl,a=i.get(n),a||(a=new Map,i.set(n,a));if(a.has(e))return a;for(a.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var r=n[i];if(!(r[Wa]||r[Ve]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var s=r.getAttribute(t)||"";s=e+s;var c=a.get(s);c?c.push(r):a.set(s,[r])}}return a}function tp(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Em(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function np(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Dm(e,t,n,a){if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var i=Va(a.href),r=t.querySelector(Ni(i));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=nl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=r,Pe(r);return}r=t.ownerDocument||t,a=Wf(a),(i=Et.get(i))&&Oo(a,i),r=r.createElement("link"),Pe(r);var s=r;s._p=new Promise(function(c,y){s.onload=c,s.onerror=y}),Ye(r,"link",a),n.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=nl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var Bo=0;function Rm(e,t){return e.stylesheets&&e.count===0&&il(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var a=setTimeout(function(){if(e.stylesheets&&il(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&Bo===0&&(Bo=62500*um());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&il(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>Bo?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function nl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)il(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var al=null;function il(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,al=new Map,t.forEach(Mm,e),al=null,nl.call(e))}function Mm(e,t){if(!(t.state.loading&4)){var n=al.get(e);if(n)var a=n.get(null);else{n=new Map,al.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<i.length;r++){var s=i[r];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(n.set(s.dataset.precedence,s),a=s)}a&&n.set(null,a)}i=t.instance,s=i.getAttribute("data-precedence"),r=n.get(s)||a,r===a&&n.set(null,i),n.set(s,i),this.count++,a=nl.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),r?r.parentNode.insertBefore(i,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Ui={$$typeof:j,Provider:null,Consumer:null,_currentValue:$,_currentValue2:$,_threadCount:0};function Lm(e,t,n,a,i,r,s,c,y){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dl(0),this.hiddenUpdates=Dl(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=r,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=y,this.incompleteTransitions=new Map}function ap(e,t,n,a,i,r,s,c,y,A,M,z){return e=new Lm(e,t,n,s,y,A,M,z,c),t=1,r===!0&&(t|=24),r=ut(3,null,null,t),e.current=r,r.stateNode=e,t=fs(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:a,isDehydrated:n,cache:t},ms(r),e}function ip(e){return e?(e=xa,e):xa}function rp(e,t,n,a,i,r){i=ip(i),a.context===null?a.context=i:a.pendingContext=i,a=bn(t),a.payload={element:n},r=r===void 0?null:r,r!==null&&(a.callback=r),n=xn(e,a,t),n!==null&&(it(n,e,t),gi(n,e,t))}function lp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function No(e,t){lp(e,t),(e=e.alternate)&&lp(e,t)}function sp(e){if(e.tag===13||e.tag===31){var t=Fn(e,67108864);t!==null&&it(t,e,67108864),No(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=ht();t=Rl(t);var n=Fn(e,t);n!==null&&it(n,e,t),No(e,t)}}var rl=!0;function Om(e,t,n,a){var i=B.T;B.T=null;var r=V.p;try{V.p=2,zo(e,t,n,a)}finally{V.p=r,B.T=i}}function km(e,t,n,a){var i=B.T;B.T=null;var r=V.p;try{V.p=8,zo(e,t,n,a)}finally{V.p=r,B.T=i}}function zo(e,t,n,a){if(rl){var i=Uo(a);if(i===null)So(e,t,a,ll,n),cp(e,a);else if(Nm(i,e,t,n,a))a.stopPropagation();else if(cp(e,a),t&4&&-1<Bm.indexOf(e)){for(;i!==null;){var r=ua(i);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var s=Pn(r.pendingLanes);if(s!==0){var c=r;for(c.pendingLanes|=2,c.entangledLanes|=2;s;){var y=1<<31-st(s);c.entanglements[1]|=y,s&=~y}Gt(r),(pe&6)===0&&(Vr=rt()+500,Li(0))}}break;case 31:case 13:c=Fn(r,2),c!==null&&it(c,r,2),qr(),No(r,2)}if(r=Uo(a),r===null&&So(e,t,a,ll,n),r===i)break;i=r}i!==null&&a.stopPropagation()}else So(e,t,a,null,n)}}function Uo(e){return e=jl(e),jo(e)}var ll=null;function jo(e){if(ll=null,e=oa(e),e!==null){var t=f(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=g(t),e!==null)return e;e=null}else if(n===31){if(e=v(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ll=e,null}function up(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(bh()){case mu:return 2;case yu:return 8;case Zi:case xh:return 32;case vu:return 268435456;default:return 32}default:return 32}}var Go=!1,Ln=null,On=null,kn=null,ji=new Map,Gi=new Map,Bn=[],Bm="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function cp(e,t){switch(e){case"focusin":case"focusout":Ln=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":ji.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gi.delete(t.pointerId)}}function Pi(e,t,n,a,i,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:r,targetContainers:[i]},t!==null&&(t=ua(t),t!==null&&sp(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Nm(e,t,n,a,i){switch(t){case"focusin":return Ln=Pi(Ln,e,t,n,a,i),!0;case"dragenter":return On=Pi(On,e,t,n,a,i),!0;case"mouseover":return kn=Pi(kn,e,t,n,a,i),!0;case"pointerover":var r=i.pointerId;return ji.set(r,Pi(ji.get(r)||null,e,t,n,a,i)),!0;case"gotpointercapture":return r=i.pointerId,Gi.set(r,Pi(Gi.get(r)||null,e,t,n,a,i)),!0}return!1}function dp(e){var t=oa(e.target);if(t!==null){var n=f(t);if(n!==null){if(t=n.tag,t===13){if(t=g(n),t!==null){e.blockedOn=t,Tu(e.priority,function(){op(n)});return}}else if(t===31){if(t=v(n),t!==null){e.blockedOn=t,Tu(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function sl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Uo(e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Ul=a,n.target.dispatchEvent(a),Ul=null}else return t=ua(n),t!==null&&sp(t),e.blockedOn=n,!1;t.shift()}return!0}function fp(e,t,n){sl(e)&&n.delete(t)}function zm(){Go=!1,Ln!==null&&sl(Ln)&&(Ln=null),On!==null&&sl(On)&&(On=null),kn!==null&&sl(kn)&&(kn=null),ji.forEach(fp),Gi.forEach(fp)}function ol(e,t){e.blockedOn===t&&(e.blockedOn=null,Go||(Go=!0,l.unstable_scheduleCallback(l.unstable_NormalPriority,zm)))}var ul=null;function pp(e){ul!==e&&(ul=e,l.unstable_scheduleCallback(l.unstable_NormalPriority,function(){ul===e&&(ul=null);for(var t=0;t<e.length;t+=3){var n=e[t],a=e[t+1],i=e[t+2];if(typeof a!="function"){if(jo(a||n)===null)continue;break}var r=ua(n);r!==null&&(e.splice(t,3),t-=3,zs(r,{pending:!0,data:i,method:n.method,action:a},a,i))}}))}function qa(e){function t(y){return ol(y,e)}Ln!==null&&ol(Ln,e),On!==null&&ol(On,e),kn!==null&&ol(kn,e),ji.forEach(t),Gi.forEach(t);for(var n=0;n<Bn.length;n++){var a=Bn[n];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Bn.length&&(n=Bn[0],n.blockedOn===null);)dp(n),n.blockedOn===null&&Bn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(a=0;a<n.length;a+=3){var i=n[a],r=n[a+1],s=i[We]||null;if(typeof r=="function")s||pp(n);else if(s){var c=null;if(r&&r.hasAttribute("formAction")){if(i=r,s=r[We]||null)c=s.formAction;else if(jo(i)!==null)continue}else c=s.action;typeof c=="function"?n[a+1]=c:(n.splice(a,3),a-=3),pp(n)}}}function hp(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),a||setTimeout(n,20)}function n(){if(!a&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function Po(e){this._internalRoot=e}cl.prototype.render=Po.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));var n=t.current,a=ht();rp(n,a,e,t,null,null)},cl.prototype.unmount=Po.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;rp(e.current,2,null,e,null,null),qr(),t[sa]=null}};function cl(e){this._internalRoot=e}cl.prototype.unstable_scheduleHydration=function(e){if(e){var t=_u();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bn.length&&t!==0&&t<Bn[n].priority;n++);Bn.splice(n,0,e),n===0&&dp(e)}};var gp=u.version;if(gp!=="19.2.6")throw Error(o(527,gp,"19.2.6"));V.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=h(t),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var Um={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{Za=dl.inject(Um),lt=dl}catch{}}return Vi.createRoot=function(e,t){if(!p(e))throw Error(o(299));var n=!1,a="",i=Cd,r=Sd,s=_d;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=ap(e,1,!1,null,null,n,a,null,i,r,s,hp),e[sa]=t.current,Co(e),new Po(t)},Vi.hydrateRoot=function(e,t,n){if(!p(e))throw Error(o(299));var a=!1,i="",r=Cd,s=Sd,c=_d,y=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(s=n.onCaughtError),n.onRecoverableError!==void 0&&(c=n.onRecoverableError),n.formState!==void 0&&(y=n.formState)),t=ap(e,1,!0,t,n??null,a,i,y,r,s,c,hp),t.context=ip(null),n=t.current,a=ht(),a=Rl(a),i=bn(a),i.callback=null,xn(n,i,a),n=a,t.current.lanes=n,Ja(t,n),Gt(t),e[sa]=t.current,Co(e),new cl(t)},Vi.version="19.2.6",Vi}var wp;function Xm(){if(wp)return Io.exports;wp=1;function l(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l)}catch(u){console.error(u)}}return l(),Io.exports=Ym(),Io.exports}var Qm=Xm();const Zm="modulepreload",Km=function(l){return"/"+l},Ap={},Ya=function(u,d,o){let p=Promise.resolve();if(d&&d.length>0){let g=function(h){return Promise.all(h.map(w=>Promise.resolve(w).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};document.getElementsByTagName("link");const v=document.querySelector("meta[property=csp-nonce]"),m=(v==null?void 0:v.nonce)||(v==null?void 0:v.getAttribute("nonce"));p=g(d.map(h=>{if(h=Km(h),h in Ap)return;Ap[h]=!0;const w=h.endsWith(".css"),S=w?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${S}`))return;const k=document.createElement("link");if(k.rel=w?"stylesheet":Zm,w||(k.as="script"),k.crossOrigin="",k.href=h,m&&k.setAttribute("nonce",m),document.head.appendChild(k),w)return new Promise((H,q)=>{k.addEventListener("load",H),k.addEventListener("error",()=>q(new Error(`Unable to preload CSS for ${h}`)))})}))}function f(g){const v=new Event("vite:preloadError",{cancelable:!0});if(v.payload=g,window.dispatchEvent(v),!v.defaultPrevented)throw g}return p.then(g=>{for(const v of g||[])v.status==="rejected"&&f(v.reason);return u().catch(f)})};/**
 * react-router v7.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Ep="popstate";function Dp(l){return typeof l=="object"&&l!=null&&"pathname"in l&&"search"in l&&"hash"in l&&"state"in l&&"key"in l}function Jm(l={}){function u(p,f){let{pathname:g="/",search:v="",hash:m=""}=la(p.location.hash.substring(1));return!g.startsWith("/")&&!g.startsWith(".")&&(g="/"+g),Wo("",{pathname:g,search:v,hash:m},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function d(p,f){let g=p.document.querySelector("base"),v="";if(g&&g.getAttribute("href")){let m=p.location.href,h=m.indexOf("#");v=h===-1?m:m.slice(0,h)}return v+"#"+(typeof f=="string"?f:qi(f))}function o(p,f){kt(p.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(f)})`)}return $m(u,d,o,l)}function Ee(l,u){if(l===!1||l===null||typeof l>"u")throw new Error(u)}function kt(l,u){if(!l){typeof console<"u"&&console.warn(u);try{throw new Error(u)}catch{}}}function Wm(){return Math.random().toString(36).substring(2,10)}function Rp(l,u){return{usr:l.state,key:l.key,idx:u,masked:l.mask?{pathname:l.pathname,search:l.search,hash:l.hash}:void 0}}function Wo(l,u,d=null,o,p){return{pathname:typeof l=="string"?l:l.pathname,search:"",hash:"",...typeof u=="string"?la(u):u,state:d,key:u&&u.key||o||Wm(),mask:p}}function qi({pathname:l="/",search:u="",hash:d=""}){return u&&u!=="?"&&(l+=u.charAt(0)==="?"?u:"?"+u),d&&d!=="#"&&(l+=d.charAt(0)==="#"?d:"#"+d),l}function la(l){let u={};if(l){let d=l.indexOf("#");d>=0&&(u.hash=l.substring(d),l=l.substring(0,d));let o=l.indexOf("?");o>=0&&(u.search=l.substring(o),l=l.substring(0,o)),l&&(u.pathname=l)}return u}function $m(l,u,d,o={}){let{window:p=document.defaultView,v5Compat:f=!1}=o,g=p.history,v="POP",m=null,h=w();h==null&&(h=0,g.replaceState({...g.state,idx:h},""));function w(){return(g.state||{idx:null}).idx}function S(){v="POP";let G=w(),L=G==null?null:G-h;h=G,m&&m({action:v,location:P.location,delta:L})}function k(G,L){v="PUSH";let O=Dp(G)?G:Wo(P.location,G,L);d&&d(O,G),h=w()+1;let j=Rp(O,h),F=P.createHref(O.mask||O);try{g.pushState(j,"",F)}catch(Z){if(Z instanceof DOMException&&Z.name==="DataCloneError")throw Z;p.location.assign(F)}f&&m&&m({action:v,location:P.location,delta:1})}function H(G,L){v="REPLACE";let O=Dp(G)?G:Wo(P.location,G,L);d&&d(O,G),h=w();let j=Rp(O,h),F=P.createHref(O.mask||O);g.replaceState(j,"",F),f&&m&&m({action:v,location:P.location,delta:0})}function q(G){return e0(G)}let P={get action(){return v},get location(){return l(p,g)},listen(G){if(m)throw new Error("A history only accepts one active listener");return p.addEventListener(Ep,S),m=G,()=>{p.removeEventListener(Ep,S),m=null}},createHref(G){return u(p,G)},createURL:q,encodeLocation(G){let L=q(G);return{pathname:L.pathname,search:L.search,hash:L.hash}},push:k,replace:H,go(G){return g.go(G)}};return P}function e0(l,u=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),Ee(d,"No window.location.(origin|href) available to create URL");let o=typeof l=="string"?l:qi(l);return o=o.replace(/ $/,"%20"),!u&&o.startsWith("//")&&(o=d+o),new URL(o,d)}function Hp(l,u,d="/"){return t0(l,u,d,!1)}function t0(l,u,d,o,p){let f=typeof u=="string"?la(u):u,g=cn(f.pathname||"/",d);if(g==null)return null;let v=n0(l),m=null,h=h0(g);for(let w=0;m==null&&w<v.length;++w)m=f0(v[w],h,o);return m}function n0(l){let u=Vp(l);return a0(u),u}function Vp(l,u=[],d=[],o="",p=!1){let f=(g,v,m=p,h)=>{let w={relativePath:h===void 0?g.path||"":h,caseSensitive:g.caseSensitive===!0,childrenIndex:v,route:g};if(w.relativePath.startsWith("/")){if(!w.relativePath.startsWith(o)&&m)return;Ee(w.relativePath.startsWith(o),`Absolute route path "${w.relativePath}" nested under path "${o}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),w.relativePath=w.relativePath.slice(o.length)}let S=Ot([o,w.relativePath]),k=d.concat(w);g.children&&g.children.length>0&&(Ee(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),Vp(g.children,u,k,S,m)),!(g.path==null&&!g.index)&&u.push({path:S,score:c0(S,g.index),routesMeta:k})};return l.forEach((g,v)=>{var m;if(g.path===""||!((m=g.path)!=null&&m.includes("?")))f(g,v);else for(let h of Ip(g.path))f(g,v,!0,h)}),u}function Ip(l){let u=l.split("/");if(u.length===0)return[];let[d,...o]=u,p=d.endsWith("?"),f=d.replace(/\?$/,"");if(o.length===0)return p?[f,""]:[f];let g=Ip(o.join("/")),v=[];return v.push(...g.map(m=>m===""?f:[f,m].join("/"))),p&&v.push(...g),v.map(m=>l.startsWith("/")&&m===""?"/":m)}function a0(l){l.sort((u,d)=>u.score!==d.score?d.score-u.score:d0(u.routesMeta.map(o=>o.childrenIndex),d.routesMeta.map(o=>o.childrenIndex)))}var i0=/^:[\w-]+$/,r0=3,l0=2,s0=1,o0=10,u0=-2,Mp=l=>l==="*";function c0(l,u){let d=l.split("/"),o=d.length;return d.some(Mp)&&(o+=u0),u&&(o+=l0),d.filter(p=>!Mp(p)).reduce((p,f)=>p+(i0.test(f)?r0:f===""?s0:o0),o)}function d0(l,u){return l.length===u.length&&l.slice(0,-1).every((o,p)=>o===u[p])?l[l.length-1]-u[u.length-1]:0}function f0(l,u,d=!1){let{routesMeta:o}=l,p={},f="/",g=[];for(let v=0;v<o.length;++v){let m=o[v],h=v===o.length-1,w=f==="/"?u:u.slice(f.length)||"/",S=vl({path:m.relativePath,caseSensitive:m.caseSensitive,end:h},w),k=m.route;if(!S&&h&&d&&!o[o.length-1].route.index&&(S=vl({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},w)),!S)return null;Object.assign(p,S.params),g.push({params:p,pathname:Ot([f,S.pathname]),pathnameBase:v0(Ot([f,S.pathnameBase])),route:k}),S.pathnameBase!=="/"&&(f=Ot([f,S.pathnameBase]))}return g}function vl(l,u){typeof l=="string"&&(l={path:l,caseSensitive:!1,end:!0});let[d,o]=p0(l.path,l.caseSensitive,l.end),p=u.match(d);if(!p)return null;let f=p[0],g=f.replace(/(.)\/+$/,"$1"),v=p.slice(1);return{params:o.reduce((h,{paramName:w,isOptional:S},k)=>{if(w==="*"){let q=v[k]||"";g=f.slice(0,f.length-q.length).replace(/(.)\/+$/,"$1")}const H=v[k];return S&&!H?h[w]=void 0:h[w]=(H||"").replace(/%2F/g,"/"),h},{}),pathname:f,pathnameBase:g,pattern:l}}function p0(l,u=!1,d=!0){kt(l==="*"||!l.endsWith("*")||l.endsWith("/*"),`Route path "${l}" will be treated as if it were "${l.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${l.replace(/\*$/,"/*")}".`);let o=[],p="^"+l.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,v,m,h,w)=>{if(o.push({paramName:v,isOptional:m!=null}),m){let S=w.charAt(h+g.length);return S&&S!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return l.endsWith("*")?(o.push({paramName:"*"}),p+=l==="*"||l==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?p+="\\/*$":l!==""&&l!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,u?void 0:"i"),o]}function h0(l){try{return l.split("/").map(u=>decodeURIComponent(u).replace(/\//g,"%2F")).join("/")}catch(u){return kt(!1,`The URL path "${l}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${u}).`),l}}function cn(l,u){if(u==="/")return l;if(!l.toLowerCase().startsWith(u.toLowerCase()))return null;let d=u.endsWith("/")?u.length-1:u.length,o=l.charAt(d);return o&&o!=="/"?null:l.slice(d)||"/"}var g0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function m0(l,u="/"){let{pathname:d,search:o="",hash:p=""}=typeof l=="string"?la(l):l,f;return d?(d=Fp(d),d.startsWith("/")?f=Lp(d.substring(1),"/"):f=Lp(d,u)):f=u,{pathname:f,search:b0(o),hash:x0(p)}}function Lp(l,u){let d=bl(u).split("/");return l.split("/").forEach(p=>{p===".."?d.length>1&&d.pop():p!=="."&&d.push(p)}),d.length>1?d.join("/"):"/"}function Xo(l,u,d,o){return`Cannot include a '${l}' character in a manually specified \`to.${u}\` field [${JSON.stringify(o)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function y0(l){return l.filter((u,d)=>d===0||u.route.path&&u.route.path.length>0)}function qp(l){let u=y0(l);return u.map((d,o)=>o===u.length-1?d.pathname:d.pathnameBase)}function ru(l,u,d,o=!1){let p;typeof l=="string"?p=la(l):(p={...l},Ee(!p.pathname||!p.pathname.includes("?"),Xo("?","pathname","search",p)),Ee(!p.pathname||!p.pathname.includes("#"),Xo("#","pathname","hash",p)),Ee(!p.search||!p.search.includes("#"),Xo("#","search","hash",p)));let f=l===""||p.pathname==="",g=f?"/":p.pathname,v;if(g==null)v=d;else{let S=u.length-1;if(!o&&g.startsWith("..")){let k=g.split("/");for(;k[0]==="..";)k.shift(),S-=1;p.pathname=k.join("/")}v=S>=0?u[S]:"/"}let m=m0(p,v),h=g&&g!=="/"&&g.endsWith("/"),w=(f||g===".")&&d.endsWith("/");return!m.pathname.endsWith("/")&&(h||w)&&(m.pathname+="/"),m}var Fp=l=>l.replace(/\/\/+/g,"/"),Ot=l=>Fp(l.join("/")),bl=l=>l.replace(/\/+$/,""),v0=l=>bl(l).replace(/^\/*/,"/"),b0=l=>!l||l==="?"?"":l.startsWith("?")?l:"?"+l,x0=l=>!l||l==="#"?"":l.startsWith("#")?l:"#"+l,C0=class{constructor(l,u,d,o=!1){this.status=l,this.statusText=u||"",this.internal=o,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function S0(l){return l!=null&&typeof l.status=="number"&&typeof l.statusText=="string"&&typeof l.internal=="boolean"&&"data"in l}function _0(l){let u=l.map(d=>d.route.path).filter(Boolean);return Ot(u)||"/"}var Yp=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Xp(l,u){let d=l;if(typeof d!="string"||!g0.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let o=d,p=!1;if(Yp)try{let f=new URL(window.location.href),g=d.startsWith("//")?new URL(f.protocol+d):new URL(d),v=cn(g.pathname,u);g.origin===f.origin&&v!=null?d=v+g.search+g.hash:p=!0}catch{kt(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:o,isExternal:p,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Qp=["POST","PUT","PATCH","DELETE"];new Set(Qp);var T0=["GET",...Qp];new Set(T0);var Xa=_.createContext(null);Xa.displayName="DataRouter";var xl=_.createContext(null);xl.displayName="DataRouterState";var Zp=_.createContext(!1);function w0(){return _.useContext(Zp)}var Kp=_.createContext({isTransitioning:!1});Kp.displayName="ViewTransition";var A0=_.createContext(new Map);A0.displayName="Fetchers";var E0=_.createContext(null);E0.displayName="Await";var Dt=_.createContext(null);Dt.displayName="Navigation";var Fi=_.createContext(null);Fi.displayName="Location";var Pt=_.createContext({outlet:null,matches:[],isDataRoute:!1});Pt.displayName="Route";var lu=_.createContext(null);lu.displayName="RouteError";var Jp="REACT_ROUTER_ERROR",D0="REDIRECT",R0="ROUTE_ERROR_RESPONSE";function M0(l){if(l.startsWith(`${Jp}:${D0}:{`))try{let u=JSON.parse(l.slice(28));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string"&&typeof u.location=="string"&&typeof u.reloadDocument=="boolean"&&typeof u.replace=="boolean")return u}catch{}}function L0(l){if(l.startsWith(`${Jp}:${R0}:{`))try{let u=JSON.parse(l.slice(40));if(typeof u=="object"&&u&&typeof u.status=="number"&&typeof u.statusText=="string")return new C0(u.status,u.statusText,u.data)}catch{}}function O0(l,{relative:u}={}){Ee(Yi(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:o}=_.useContext(Dt),{hash:p,pathname:f,search:g}=Xi(l,{relative:u}),v=f;return d!=="/"&&(v=f==="/"?d:Ot([d,f])),o.createHref({pathname:v,search:g,hash:p})}function Yi(){return _.useContext(Fi)!=null}function Ht(){return Ee(Yi(),"useLocation() may be used only in the context of a <Router> component."),_.useContext(Fi).location}var Wp="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function $p(l){_.useContext(Dt).static||_.useLayoutEffect(l)}function eh(){let{isDataRoute:l}=_.useContext(Pt);return l?F0():k0()}function k0(){Ee(Yi(),"useNavigate() may be used only in the context of a <Router> component.");let l=_.useContext(Xa),{basename:u,navigator:d}=_.useContext(Dt),{matches:o}=_.useContext(Pt),{pathname:p}=Ht(),f=JSON.stringify(qp(o)),g=_.useRef(!1);return $p(()=>{g.current=!0}),_.useCallback((m,h={})=>{if(kt(g.current,Wp),!g.current)return;if(typeof m=="number"){d.go(m);return}let w=ru(m,JSON.parse(f),p,h.relative==="path");l==null&&u!=="/"&&(w.pathname=w.pathname==="/"?u:Ot([u,w.pathname])),(h.replace?d.replace:d.push)(w,h.state,h)},[u,d,f,p,l])}_.createContext(null);function R2(){let{matches:l}=_.useContext(Pt),u=l[l.length-1];return(u==null?void 0:u.params)??{}}function Xi(l,{relative:u}={}){let{matches:d}=_.useContext(Pt),{pathname:o}=Ht(),p=JSON.stringify(qp(d));return _.useMemo(()=>ru(l,JSON.parse(p),o,u==="path"),[l,p,o,u])}function B0(l,u){return th(l,u)}function th(l,u,d){var G;Ee(Yi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:o}=_.useContext(Dt),{matches:p}=_.useContext(Pt),f=p[p.length-1],g=f?f.params:{},v=f?f.pathname:"/",m=f?f.pathnameBase:"/",h=f&&f.route;{let L=h&&h.path||"";ah(v,!h||L.endsWith("*")||L.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${L}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${L}"> to <Route path="${L==="/"?"*":`${L}/*`}">.`)}let w=Ht(),S;if(u){let L=typeof u=="string"?la(u):u;Ee(m==="/"||((G=L.pathname)==null?void 0:G.startsWith(m)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${L.pathname}" was given in the \`location\` prop.`),S=L}else S=w;let k=S.pathname||"/",H=k;if(m!=="/"){let L=m.replace(/^\//,"").split("/");H="/"+k.replace(/^\//,"").split("/").slice(L.length).join("/")}let q=d&&d.state.matches.length?d.state.matches.map(L=>Object.assign(L,{route:d.manifest[L.route.id]||L.route})):Hp(l,{pathname:H});kt(h||q!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),kt(q==null||q[q.length-1].route.element!==void 0||q[q.length-1].route.Component!==void 0||q[q.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let P=G0(q&&q.map(L=>Object.assign({},L,{params:Object.assign({},g,L.params),pathname:Ot([m,o.encodeLocation?o.encodeLocation(L.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathname]),pathnameBase:L.pathnameBase==="/"?m:Ot([m,o.encodeLocation?o.encodeLocation(L.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:L.pathnameBase])})),p,d);return u&&P?_.createElement(Fi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...S},navigationType:"POP"}},P):P}function N0(){let l=q0(),u=S0(l)?`${l.status} ${l.statusText}`:l instanceof Error?l.message:JSON.stringify(l),d=l instanceof Error?l.stack:null,o="rgba(200,200,200, 0.5)",p={padding:"0.5rem",backgroundColor:o},f={padding:"2px 4px",backgroundColor:o},g=null;return console.error("Error handled by React Router default ErrorBoundary:",l),g=_.createElement(_.Fragment,null,_.createElement("p",null,"💿 Hey developer 👋"),_.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",_.createElement("code",{style:f},"ErrorBoundary")," or"," ",_.createElement("code",{style:f},"errorElement")," prop on your route.")),_.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},u),d?_.createElement("pre",{style:p},d):null,g)}var z0=_.createElement(N0,null),nh=class extends _.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,u){return u.location!==l.location||u.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:u.error,location:u.location,revalidation:l.revalidation||u.revalidation}}componentDidCatch(l,u){this.props.onError?this.props.onError(l,u):console.error("React Router caught the following error during render",l)}render(){let l=this.state.error;if(this.context&&typeof l=="object"&&l&&"digest"in l&&typeof l.digest=="string"){const d=L0(l.digest);d&&(l=d)}let u=l!==void 0?_.createElement(Pt.Provider,{value:this.props.routeContext},_.createElement(lu.Provider,{value:l,children:this.props.component})):this.props.children;return this.context?_.createElement(U0,{error:l},u):u}};nh.contextType=Zp;var Qo=new WeakMap;function U0({children:l,error:u}){let{basename:d}=_.useContext(Dt);if(typeof u=="object"&&u&&"digest"in u&&typeof u.digest=="string"){let o=M0(u.digest);if(o){let p=Qo.get(u);if(p)throw p;let f=Xp(o.location,d);if(Yp&&!Qo.get(u))if(f.isExternal||o.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:o.replace}));throw Qo.set(u,g),g}return _.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return l}function j0({routeContext:l,match:u,children:d}){let o=_.useContext(Xa);return o&&o.static&&o.staticContext&&(u.route.errorElement||u.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=u.route.id),_.createElement(Pt.Provider,{value:l},d)}function G0(l,u=[],d){let o=d==null?void 0:d.state;if(l==null){if(!o)return null;if(o.errors)l=o.matches;else if(u.length===0&&!o.initialized&&o.matches.length>0)l=o.matches;else return null}let p=l,f=o==null?void 0:o.errors;if(f!=null){let w=p.findIndex(S=>S.route.id&&(f==null?void 0:f[S.route.id])!==void 0);Ee(w>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(f).join(",")}`),p=p.slice(0,Math.min(p.length,w+1))}let g=!1,v=-1;if(d&&o){g=o.renderFallback;for(let w=0;w<p.length;w++){let S=p[w];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(v=w),S.route.id){let{loaderData:k,errors:H}=o,q=S.route.loader&&!k.hasOwnProperty(S.route.id)&&(!H||H[S.route.id]===void 0);if(S.route.lazy||q){d.isStatic&&(g=!0),v>=0?p=p.slice(0,v+1):p=[p[0]];break}}}}let m=d==null?void 0:d.onError,h=o&&m?(w,S)=>{var k,H;m(w,{location:o.location,params:((H=(k=o.matches)==null?void 0:k[0])==null?void 0:H.params)??{},pattern:_0(o.matches),errorInfo:S})}:void 0;return p.reduceRight((w,S,k)=>{let H,q=!1,P=null,G=null;o&&(H=f&&S.route.id?f[S.route.id]:void 0,P=S.route.errorElement||z0,g&&(v<0&&k===0?(ah("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),q=!0,G=null):v===k&&(q=!0,G=S.route.hydrateFallbackElement||null)));let L=u.concat(p.slice(0,k+1)),O=()=>{let j;return H?j=P:q?j=G:S.route.Component?j=_.createElement(S.route.Component,null):S.route.element?j=S.route.element:j=w,_.createElement(j0,{match:S,routeContext:{outlet:w,matches:L,isDataRoute:o!=null},children:j})};return o&&(S.route.ErrorBoundary||S.route.errorElement||k===0)?_.createElement(nh,{location:o.location,revalidation:o.revalidation,component:P,error:H,children:O(),routeContext:{outlet:null,matches:L,isDataRoute:!0},onError:h}):O()},null)}function su(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function P0(l){let u=_.useContext(Xa);return Ee(u,su(l)),u}function H0(l){let u=_.useContext(xl);return Ee(u,su(l)),u}function V0(l){let u=_.useContext(Pt);return Ee(u,su(l)),u}function ou(l){let u=V0(l),d=u.matches[u.matches.length-1];return Ee(d.route.id,`${l} can only be used on routes that contain a unique "id"`),d.route.id}function I0(){return ou("useRouteId")}function q0(){var o;let l=_.useContext(lu),u=H0("useRouteError"),d=ou("useRouteError");return l!==void 0?l:(o=u.errors)==null?void 0:o[d]}function F0(){let{router:l}=P0("useNavigate"),u=ou("useNavigate"),d=_.useRef(!1);return $p(()=>{d.current=!0}),_.useCallback(async(p,f={})=>{kt(d.current,Wp),d.current&&(typeof p=="number"?await l.navigate(p):await l.navigate(p,{fromRouteId:u,...f}))},[l,u])}var Op={};function ah(l,u,d){!u&&!Op[l]&&(Op[l]=!0,kt(!1,d))}_.memo(Y0);function Y0({routes:l,manifest:u,future:d,state:o,isStatic:p,onError:f}){return th(l,void 0,{manifest:u,state:o,isStatic:p,onError:f})}function ra(l){Ee(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function X0({basename:l="/",children:u=null,location:d,navigationType:o="POP",navigator:p,static:f=!1,useTransitions:g}){Ee(!Yi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let v=l.replace(/^\/*/,"/"),m=_.useMemo(()=>({basename:v,navigator:p,static:f,useTransitions:g,future:{}}),[v,p,f,g]);typeof d=="string"&&(d=la(d));let{pathname:h="/",search:w="",hash:S="",state:k=null,key:H="default",mask:q}=d,P=_.useMemo(()=>{let G=cn(h,v);return G==null?null:{location:{pathname:G,search:w,hash:S,state:k,key:H,mask:q},navigationType:o}},[v,h,w,S,k,H,o,q]);return kt(P!=null,`<Router basename="${v}"> is not able to match the URL "${h}${w}${S}" because it does not start with the basename, so the <Router> won't render anything.`),P==null?null:_.createElement(Dt.Provider,{value:m},_.createElement(Fi.Provider,{children:u,value:P}))}function Q0({children:l,location:u}){return B0($o(l),u)}function $o(l,u=[]){let d=[];return _.Children.forEach(l,(o,p)=>{if(!_.isValidElement(o))return;let f=[...u,p];if(o.type===_.Fragment){d.push.apply(d,$o(o.props.children,f));return}Ee(o.type===ra,`[${typeof o.type=="string"?o.type:o.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Ee(!o.props.index||!o.props.children,"An index route cannot have child routes.");let g={id:o.props.id||f.join("-"),caseSensitive:o.props.caseSensitive,element:o.props.element,Component:o.props.Component,index:o.props.index,path:o.props.path,middleware:o.props.middleware,loader:o.props.loader,action:o.props.action,hydrateFallbackElement:o.props.hydrateFallbackElement,HydrateFallback:o.props.HydrateFallback,errorElement:o.props.errorElement,ErrorBoundary:o.props.ErrorBoundary,hasErrorBoundary:o.props.hasErrorBoundary===!0||o.props.ErrorBoundary!=null||o.props.errorElement!=null,shouldRevalidate:o.props.shouldRevalidate,handle:o.props.handle,lazy:o.props.lazy};o.props.children&&(g.children=$o(o.props.children,f)),d.push(g)}),d}var ml="get",yl="application/x-www-form-urlencoded";function Cl(l){return typeof HTMLElement<"u"&&l instanceof HTMLElement}function Z0(l){return Cl(l)&&l.tagName.toLowerCase()==="button"}function K0(l){return Cl(l)&&l.tagName.toLowerCase()==="form"}function J0(l){return Cl(l)&&l.tagName.toLowerCase()==="input"}function W0(l){return!!(l.metaKey||l.altKey||l.ctrlKey||l.shiftKey)}function $0(l,u){return l.button===0&&(!u||u==="_self")&&!W0(l)}var fl=null;function e1(){if(fl===null)try{new FormData(document.createElement("form"),0),fl=!1}catch{fl=!0}return fl}var t1=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Zo(l){return l!=null&&!t1.has(l)?(kt(!1,`"${l}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${yl}"`),null):l}function n1(l,u){let d,o,p,f,g;if(K0(l)){let v=l.getAttribute("action");o=v?cn(v,u):null,d=l.getAttribute("method")||ml,p=Zo(l.getAttribute("enctype"))||yl,f=new FormData(l)}else if(Z0(l)||J0(l)&&(l.type==="submit"||l.type==="image")){let v=l.form;if(v==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=l.getAttribute("formaction")||v.getAttribute("action");if(o=m?cn(m,u):null,d=l.getAttribute("formmethod")||v.getAttribute("method")||ml,p=Zo(l.getAttribute("formenctype"))||Zo(v.getAttribute("enctype"))||yl,f=new FormData(v,l),!e1()){let{name:h,type:w,value:S}=l;if(w==="image"){let k=h?`${h}.`:"";f.append(`${k}x`,"0"),f.append(`${k}y`,"0")}else h&&f.append(h,S)}}else{if(Cl(l))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=ml,o=null,p=yl,g=l}return f&&p==="text/plain"&&(g=f,f=void 0),{action:o,method:d.toLowerCase(),encType:p,formData:f,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function uu(l,u){if(l===!1||l===null||typeof l>"u")throw new Error(u)}function ih(l,u,d,o){let p=typeof l=="string"?new URL(l,typeof window>"u"?"server://singlefetch/":window.location.origin):l;return d?p.pathname.endsWith("/")?p.pathname=`${p.pathname}_.${o}`:p.pathname=`${p.pathname}.${o}`:p.pathname==="/"?p.pathname=`_root.${o}`:u&&cn(p.pathname,u)==="/"?p.pathname=`${bl(u)}/_root.${o}`:p.pathname=`${bl(p.pathname)}.${o}`,p}async function a1(l,u){if(l.id in u)return u[l.id];try{let d=await import(l.module);return u[l.id]=d,d}catch(d){return console.error(`Error loading route module \`${l.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function i1(l){return l==null?!1:l.href==null?l.rel==="preload"&&typeof l.imageSrcSet=="string"&&typeof l.imageSizes=="string":typeof l.rel=="string"&&typeof l.href=="string"}async function r1(l,u,d){let o=await Promise.all(l.map(async p=>{let f=u.routes[p.route.id];if(f){let g=await a1(f,d);return g.links?g.links():[]}return[]}));return u1(o.flat(1).filter(i1).filter(p=>p.rel==="stylesheet"||p.rel==="preload").map(p=>p.rel==="stylesheet"?{...p,rel:"prefetch",as:"style"}:{...p,rel:"prefetch"}))}function kp(l,u,d,o,p,f){let g=(m,h)=>d[h]?m.route.id!==d[h].route.id:!0,v=(m,h)=>{var w;return d[h].pathname!==m.pathname||((w=d[h].route.path)==null?void 0:w.endsWith("*"))&&d[h].params["*"]!==m.params["*"]};return f==="assets"?u.filter((m,h)=>g(m,h)||v(m,h)):f==="data"?u.filter((m,h)=>{var S;let w=o.routes[m.route.id];if(!w||!w.hasLoader)return!1;if(g(m,h)||v(m,h))return!0;if(m.route.shouldRevalidate){let k=m.route.shouldRevalidate({currentUrl:new URL(p.pathname+p.search+p.hash,window.origin),currentParams:((S=d[0])==null?void 0:S.params)||{},nextUrl:new URL(l,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof k=="boolean")return k}return!0}):[]}function l1(l,u,{includeHydrateFallback:d}={}){return s1(l.map(o=>{let p=u.routes[o.route.id];if(!p)return[];let f=[p.module];return p.clientActionModule&&(f=f.concat(p.clientActionModule)),p.clientLoaderModule&&(f=f.concat(p.clientLoaderModule)),d&&p.hydrateFallbackModule&&(f=f.concat(p.hydrateFallbackModule)),p.imports&&(f=f.concat(p.imports)),f}).flat(1))}function s1(l){return[...new Set(l)]}function o1(l){let u={},d=Object.keys(l).sort();for(let o of d)u[o]=l[o];return u}function u1(l,u){let d=new Set;return new Set(u),l.reduce((o,p)=>{let f=JSON.stringify(o1(p));return d.has(f)||(d.add(f),o.push({key:f,link:p})),o},[])}function cu(){let l=_.useContext(Xa);return uu(l,"You must render this element inside a <DataRouterContext.Provider> element"),l}function c1(){let l=_.useContext(xl);return uu(l,"You must render this element inside a <DataRouterStateContext.Provider> element"),l}var du=_.createContext(void 0);du.displayName="FrameworkContext";function fu(){let l=_.useContext(du);return uu(l,"You must render this element inside a <HydratedRouter> element"),l}function d1(l,u){let d=_.useContext(du),[o,p]=_.useState(!1),[f,g]=_.useState(!1),{onFocus:v,onBlur:m,onMouseEnter:h,onMouseLeave:w,onTouchStart:S}=u,k=_.useRef(null);_.useEffect(()=>{if(l==="render"&&g(!0),l==="viewport"){let P=L=>{L.forEach(O=>{g(O.isIntersecting)})},G=new IntersectionObserver(P,{threshold:.5});return k.current&&G.observe(k.current),()=>{G.disconnect()}}},[l]),_.useEffect(()=>{if(o){let P=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(P)}}},[o]);let H=()=>{p(!0)},q=()=>{p(!1),g(!1)};return d?l!=="intent"?[f,k,{}]:[f,k,{onFocus:Ii(v,H),onBlur:Ii(m,q),onMouseEnter:Ii(h,H),onMouseLeave:Ii(w,q),onTouchStart:Ii(S,H)}]:[!1,k,{}]}function Ii(l,u){return d=>{l&&l(d),d.defaultPrevented||u(d)}}function f1({page:l,...u}){let d=w0(),{router:o}=cu(),p=_.useMemo(()=>Hp(o.routes,l,o.basename),[o.routes,l,o.basename]);return p?d?_.createElement(h1,{page:l,matches:p,...u}):_.createElement(g1,{page:l,matches:p,...u}):null}function p1(l){let{manifest:u,routeModules:d}=fu(),[o,p]=_.useState([]);return _.useEffect(()=>{let f=!1;return r1(l,u,d).then(g=>{f||p(g)}),()=>{f=!0}},[l,u,d]),o}function h1({page:l,matches:u,...d}){let o=Ht(),{future:p}=fu(),{basename:f}=cu(),g=_.useMemo(()=>{if(l===o.pathname+o.search+o.hash)return[];let v=ih(l,f,p.unstable_trailingSlashAwareDataRequests,"rsc"),m=!1,h=[];for(let w of u)typeof w.route.shouldRevalidate=="function"?m=!0:h.push(w.route.id);return m&&h.length>0&&v.searchParams.set("_routes",h.join(",")),[v.pathname+v.search]},[f,p.unstable_trailingSlashAwareDataRequests,l,o,u]);return _.createElement(_.Fragment,null,g.map(v=>_.createElement("link",{key:v,rel:"prefetch",as:"fetch",href:v,...d})))}function g1({page:l,matches:u,...d}){let o=Ht(),{future:p,manifest:f,routeModules:g}=fu(),{basename:v}=cu(),{loaderData:m,matches:h}=c1(),w=_.useMemo(()=>kp(l,u,h,f,o,"data"),[l,u,h,f,o]),S=_.useMemo(()=>kp(l,u,h,f,o,"assets"),[l,u,h,f,o]),k=_.useMemo(()=>{if(l===o.pathname+o.search+o.hash)return[];let P=new Set,G=!1;if(u.forEach(O=>{var F;let j=f.routes[O.route.id];!j||!j.hasLoader||(!w.some(Z=>Z.route.id===O.route.id)&&O.route.id in m&&((F=g[O.route.id])!=null&&F.shouldRevalidate)||j.hasClientLoader?G=!0:P.add(O.route.id))}),P.size===0)return[];let L=ih(l,v,p.unstable_trailingSlashAwareDataRequests,"data");return G&&P.size>0&&L.searchParams.set("_routes",u.filter(O=>P.has(O.route.id)).map(O=>O.route.id).join(",")),[L.pathname+L.search]},[v,p.unstable_trailingSlashAwareDataRequests,m,o,f,w,u,l,g]),H=_.useMemo(()=>l1(S,f),[S,f]),q=p1(S);return _.createElement(_.Fragment,null,k.map(P=>_.createElement("link",{key:P,rel:"prefetch",as:"fetch",href:P,...d})),H.map(P=>_.createElement("link",{key:P,rel:"modulepreload",href:P,...d})),q.map(({key:P,link:G})=>_.createElement("link",{key:P,nonce:d.nonce,...G,crossOrigin:G.crossOrigin??d.crossOrigin})))}function m1(...l){return u=>{l.forEach(d=>{typeof d=="function"?d(u):d!=null&&(d.current=u)})}}var y1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{y1&&(window.__reactRouterVersion="7.15.1")}catch{}function v1({basename:l,children:u,useTransitions:d,window:o}){let p=_.useRef();p.current==null&&(p.current=Jm({window:o,v5Compat:!0}));let f=p.current,[g,v]=_.useState({action:f.action,location:f.location}),m=_.useCallback(h=>{d===!1?v(h):_.startTransition(()=>v(h))},[d]);return _.useLayoutEffect(()=>f.listen(m),[f,m]),_.createElement(X0,{basename:l,children:u,location:g.location,navigationType:g.action,navigator:f,useTransitions:d})}var rh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,lh=_.forwardRef(function({onClick:u,discover:d="render",prefetch:o="none",relative:p,reloadDocument:f,replace:g,mask:v,state:m,target:h,to:w,preventScrollReset:S,viewTransition:k,defaultShouldRevalidate:H,...q},P){let{basename:G,navigator:L,useTransitions:O}=_.useContext(Dt),j=typeof w=="string"&&rh.test(w),F=Xp(w,G);w=F.to;let Z=O0(w,{relative:p}),ie=Ht(),J=null;if(v){let ke=ru(v,[],ie.mask?ie.mask.pathname:"/",!0);G!=="/"&&(ke.pathname=ke.pathname==="/"?G:Ot([G,ke.pathname])),J=L.createHref(ke)}let[we,je,Bt]=d1(o,q),mt=S1(w,{replace:g,mask:v,state:m,target:h,preventScrollReset:S,relative:p,viewTransition:k,defaultShouldRevalidate:H,useTransitions:O});function Xe(ke){u&&u(ke),ke.defaultPrevented||mt(ke)}let Nt=!(F.isExternal||f),yt=_.createElement("a",{...q,...Bt,href:(Nt?J:void 0)||F.absoluteURL||Z,onClick:Nt?Xe:u,ref:m1(P,je),target:h,"data-discover":!j&&d==="render"?"true":void 0});return we&&!j?_.createElement(_.Fragment,null,yt,_.createElement(f1,{page:Z})):yt});lh.displayName="Link";var b1=_.forwardRef(function({"aria-current":u="page",caseSensitive:d=!1,className:o="",end:p=!1,style:f,to:g,viewTransition:v,children:m,...h},w){let S=Xi(g,{relative:h.relative}),k=Ht(),H=_.useContext(xl),{navigator:q,basename:P}=_.useContext(Dt),G=H!=null&&E1(S)&&v===!0,L=q.encodeLocation?q.encodeLocation(S).pathname:S.pathname,O=k.pathname,j=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;d||(O=O.toLowerCase(),j=j?j.toLowerCase():null,L=L.toLowerCase()),j&&P&&(j=cn(j,P)||j);const F=L!=="/"&&L.endsWith("/")?L.length-1:L.length;let Z=O===L||!p&&O.startsWith(L)&&O.charAt(F)==="/",ie=j!=null&&(j===L||!p&&j.startsWith(L)&&j.charAt(L.length)==="/"),J={isActive:Z,isPending:ie,isTransitioning:G},we=Z?u:void 0,je;typeof o=="function"?je=o(J):je=[o,Z?"active":null,ie?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let Bt=typeof f=="function"?f(J):f;return _.createElement(lh,{...h,"aria-current":we,className:je,ref:w,style:Bt,to:g,viewTransition:v},typeof m=="function"?m(J):m)});b1.displayName="NavLink";var x1=_.forwardRef(({discover:l="render",fetcherKey:u,navigate:d,reloadDocument:o,replace:p,state:f,method:g=ml,action:v,onSubmit:m,relative:h,preventScrollReset:w,viewTransition:S,defaultShouldRevalidate:k,...H},q)=>{let{useTransitions:P}=_.useContext(Dt),G=w1(),L=A1(v,{relative:h}),O=g.toLowerCase()==="get"?"get":"post",j=typeof v=="string"&&rh.test(v),F=Z=>{if(m&&m(Z),Z.defaultPrevented)return;Z.preventDefault();let ie=Z.nativeEvent.submitter,J=(ie==null?void 0:ie.getAttribute("formmethod"))||g,we=()=>G(ie||Z.currentTarget,{fetcherKey:u,method:J,navigate:d,replace:p,state:f,relative:h,preventScrollReset:w,viewTransition:S,defaultShouldRevalidate:k});P&&d!==!1?_.startTransition(()=>we()):we()};return _.createElement("form",{ref:q,method:O,action:L,onSubmit:o?m:F,...H,"data-discover":!j&&l==="render"?"true":void 0})});x1.displayName="Form";function C1(l){return`${l} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function sh(l){let u=_.useContext(Xa);return Ee(u,C1(l)),u}function S1(l,{target:u,replace:d,mask:o,state:p,preventScrollReset:f,relative:g,viewTransition:v,defaultShouldRevalidate:m,useTransitions:h}={}){let w=eh(),S=Ht(),k=Xi(l,{relative:g});return _.useCallback(H=>{if($0(H,u)){H.preventDefault();let q=d!==void 0?d:qi(S)===qi(k),P=()=>w(l,{replace:q,mask:o,state:p,preventScrollReset:f,relative:g,viewTransition:v,defaultShouldRevalidate:m});h?_.startTransition(()=>P()):P()}},[S,w,k,d,o,p,u,l,f,g,v,m,h])}var _1=0,T1=()=>`__${String(++_1)}__`;function w1(){let{router:l}=sh("useSubmit"),{basename:u}=_.useContext(Dt),d=I0(),o=l.fetch,p=l.navigate;return _.useCallback(async(f,g={})=>{let{action:v,method:m,encType:h,formData:w,body:S}=n1(f,u);if(g.navigate===!1){let k=g.fetcherKey||T1();await o(k,d,g.action||v,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:w,body:S,formMethod:g.method||m,formEncType:g.encType||h,flushSync:g.flushSync})}else await p(g.action||v,{defaultShouldRevalidate:g.defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:w,body:S,formMethod:g.method||m,formEncType:g.encType||h,replace:g.replace,state:g.state,fromRouteId:d,flushSync:g.flushSync,viewTransition:g.viewTransition})},[o,p,u,d])}function A1(l,{relative:u}={}){let{basename:d}=_.useContext(Dt),o=_.useContext(Pt);Ee(o,"useFormAction must be used inside a RouteContext");let[p]=o.matches.slice(-1),f={...Xi(l||".",{relative:u})},g=Ht();if(l==null){f.search=g.search;let v=new URLSearchParams(f.search),m=v.getAll("index");if(m.some(w=>w==="")){v.delete("index"),m.filter(S=>S).forEach(S=>v.append("index",S));let w=v.toString();f.search=w?`?${w}`:""}}return(!l||l===".")&&p.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(f.pathname=f.pathname==="/"?d:Ot([d,f.pathname])),qi(f)}function E1(l,{relative:u}={}){let d=_.useContext(Kp);Ee(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=sh("useViewTransitionState"),p=Xi(l,{relative:u});if(!d.isTransitioning)return!1;let f=cn(d.currentLocation.pathname,o)||d.currentLocation.pathname,g=cn(d.nextLocation.pathname,o)||d.nextLocation.pathname;return vl(p.pathname,g)!=null||vl(p.pathname,f)!=null}var D1=Pp();const R1="animal-btn-QoKe1",M1="animal-btn-small-6Srsd",L1="animal-btn-middle-zEXqv",O1="animal-btn-large-k9IvA",k1="animal-btn-default-L7yE6",B1="animal-btn-primary-9tMG9",N1="animal-btn-dashed-wzZ-i",z1="animal-btn-text-Tope4",U1="animal-btn-link-pURnf",j1="animal-btn-danger-zQ4kF",G1="animal-btn-ghost-Ykty4",P1="animal-btn-block-MC4pp",H1="animal-btn-loading-PfXLM",V1="animal-animal-btn-loading-Rf1hg",I1="animal-btn-icon-P5CS9",zn={btn:R1,"btn-small":"animal-btn-small-6Srsd",btnSmall:M1,"btn-middle":"animal-btn-middle-zEXqv",btnMiddle:L1,"btn-large":"animal-btn-large-k9IvA",btnLarge:O1,"btn-default":"animal-btn-default-L7yE6",btnDefault:k1,"btn-primary":"animal-btn-primary-9tMG9",btnPrimary:B1,"btn-dashed":"animal-btn-dashed-wzZ-i",btnDashed:N1,"btn-text":"animal-btn-text-Tope4",btnText:z1,"btn-link":"animal-btn-link-pURnf",btnLink:U1,"btn-danger":"animal-btn-danger-zQ4kF",btnDanger:j1,"btn-ghost":"animal-btn-ghost-Ykty4",btnGhost:G1,"btn-block":"animal-btn-block-MC4pp",btnBlock:P1,"btn-loading":"animal-btn-loading-PfXLM",btnLoading:H1,"animal-btn-loading":"animal-animal-btn-loading-Rf1hg",animalBtnLoading:V1,"btn-icon":"animal-btn-icon-P5CS9",btnIcon:I1},jn=({type:l="default",size:u="middle",danger:d=!1,ghost:o=!1,block:p=!1,loading:f=!1,disabled:g=!1,icon:v,htmlType:m="button",children:h,className:w,...S})=>{const k=[zn.btn,zn[`btn-${l}`],zn[`btn-${u}`],d&&zn["btn-danger"],o&&zn["btn-ghost"],p&&zn["btn-block"],f&&zn["btn-loading"],w].filter(Boolean).join(" ");return D.jsxs("button",{type:m,className:k,disabled:g,...S,children:[v&&!f&&D.jsx("span",{className:zn["btn-icon"],children:v}),h&&D.jsx("span",{children:h})]})};jn.displayName="Button";const q1="animal-wrapper-IRrhj",F1="animal-wrapper-disabled-MWwHK",Y1="animal-input-12WUn",X1="animal-wrapper-no-shadow-WP9Gk",Q1="animal-wrapper-small-mWvja",Z1="animal-wrapper-middle-zXqMR",K1="animal-wrapper-large-RrYM4",J1="animal-wrapper-error-W-VRo",W1="animal-wrapper-warning-miO7A",$1="animal-prefix-g8f1R",ey="animal-suffix-o7ywP",ty="animal-clear-HuR2N",sn={wrapper:q1,"wrapper-disabled":"animal-wrapper-disabled-MWwHK",wrapperDisabled:F1,input:Y1,"wrapper-no-shadow":"animal-wrapper-no-shadow-WP9Gk",wrapperNoShadow:X1,"wrapper-small":"animal-wrapper-small-mWvja",wrapperSmall:Q1,"wrapper-middle":"animal-wrapper-middle-zXqMR",wrapperMiddle:Z1,"wrapper-large":"animal-wrapper-large-RrYM4",wrapperLarge:K1,"wrapper-error":"animal-wrapper-error-W-VRo",wrapperError:J1,"wrapper-warning":"animal-wrapper-warning-miO7A",wrapperWarning:W1,prefix:$1,suffix:ey,clear:ty},oh=({size:l="middle",prefix:u,suffix:d,allowClear:o=!1,status:p,shadow:f=!1,disabled:g=!1,className:v,value:m,defaultValue:h,onChange:w,onClear:S,...k})=>{const[H,q]=_.useState(h??""),P=m!==void 0,G=P?m:H,L=_.useCallback(F=>{P||q(F.target.value),w==null||w(F)},[P,w]),O=_.useCallback(()=>{P||q(""),S==null||S();const F=new Event("input",{bubbles:!0}),Z={value:""};w==null||w({target:Z,currentTarget:Z,nativeEvent:F})},[P,w,S]),j=[sn.wrapper,sn[`wrapper-${l}`],p&&sn[`wrapper-${p}`],g&&sn["wrapper-disabled"],!f&&sn["wrapper-no-shadow"],v].filter(Boolean).join(" ");return D.jsxs("span",{className:j,children:[u&&D.jsx("span",{className:sn.prefix,children:u}),D.jsx("input",{className:sn.input,disabled:g,value:G,onChange:L,...k}),o&&G&&!g&&D.jsx("span",{className:sn.clear,onClick:O,role:"button",tabIndex:-1,children:"×"}),d&&D.jsx("span",{className:sn.suffix,children:d})]})};oh.displayName="Input";const ny="animal-switch-disabled-U5tjL",ay="animal-switch-checked-6HKL4",iy="animal-switch-small-jkWtD",ry="animal-handle-KgZ7M",ly="animal-inner-5x97M",sy="animal-switch-loading--3JYL",oy="animal-spinner-QK4sP",uy="animal-animal-spin-P6YYa",Un={switch:"animal-switch-NQPLj","switch-disabled":"animal-switch-disabled-U5tjL",switchDisabled:ny,"switch-checked":"animal-switch-checked-6HKL4",switchChecked:ay,"switch-small":"animal-switch-small-jkWtD",switchSmall:iy,handle:ry,inner:ly,"switch-loading":"animal-switch-loading--3JYL",switchLoading:sy,spinner:oy,"animal-spin":"animal-animal-spin-P6YYa",animalSpin:uy},eu=({checked:l,defaultChecked:u=!1,size:d="default",disabled:o=!1,loading:p=!1,checkedChildren:f,unCheckedChildren:g,onChange:v,className:m})=>{const[h,w]=_.useState(u),S=l!==void 0,k=S?l:h,H=_.useCallback(()=>{if(o||p)return;const P=!k;S||w(P),v==null||v(P)},[o,p,k,S,v]),q=[Un.switch,Un[`switch-${d}`],k&&Un["switch-checked"],o&&Un["switch-disabled"],p&&Un["switch-loading"],m].filter(Boolean).join(" ");return D.jsxs("button",{type:"button",role:"switch","aria-checked":k,className:q,onClick:H,disabled:o,children:[D.jsx("span",{className:Un.handle,children:p&&D.jsx("span",{className:Un.spinner})}),D.jsx("span",{className:Un.inner,children:k?f:g})]})};eu.displayName="Switch";const pu=({children:l,className:u,style:d,forceAll:o=!0})=>{const p=["animal-cursor",o?"animal-cursor--force":"animal-cursor--scoped",u].filter(Boolean).join(" ");return D.jsx("div",{className:p,style:d,children:l})};pu.displayName="Cursor";const tu=l=>l==null||typeof l=="boolean"?0:typeof l=="string"||typeof l=="number"?String(l).length:Array.isArray(l)?l.reduce((u,d)=>u+tu(d),0):un.isValidElement(l)?tu(l.props.children):0,nu=(l,u,d="tw")=>{if(u.stopped||l==null||typeof l=="boolean")return null;if(typeof l=="string"||typeof l=="number"){const o=String(l);if(u.remaining>=o.length)return u.remaining-=o.length,o;const p=o.slice(0,u.remaining);return u.remaining=0,u.stopped=!0,p}if(Array.isArray(l))return l.map((o,p)=>D.jsx(un.Fragment,{children:nu(o,u,`${d}-${p}`)},`${d}-${p}`));if(un.isValidElement(l)){const o=l.props,p=nu(o.children,u,d);return un.cloneElement(l,void 0,p)}return null},uh=({children:l,speed:u=90,trigger:d,autoPlay:o=!0,onDone:p})=>{const f=_.useMemo(()=>tu(l),[l]),[g,v]=_.useState(o?0:f),m=_.useRef(null);return _.useEffect(()=>{if(m.current&&window.clearInterval(m.current),!o){v(f);return}if(v(0),f!==0)return m.current=window.setInterval(()=>{v(h=>h>=f?(m.current&&window.clearInterval(m.current),h):h+1)},u),()=>{m.current&&window.clearInterval(m.current)}},[f,u,d,o]),_.useEffect(()=>{f>0&&g>=f&&(p==null||p())},[g,f]),D.jsx(D.Fragment,{children:nu(l,{remaining:g,stopped:!1})})};uh.displayName="Typewriter";const cy="animal-mask-hAWeP",dy="animal-modal-d0zyM",fy="animal-modalClipped-7IuAw",py="animal-header-udOSi",hy="animal-title-s6pv3",gy="animal-body--aiyx",my="animal-footer-9Ib-a",ia={mask:cy,modal:dy,modalClipped:fy,header:py,title:hy,body:gy,footer:my},yy=()=>D.jsx("svg",{style:{position:"absolute",width:0,height:0},"aria-hidden":!0,children:D.jsx("clipPath",{id:"animal-modal-clip",clipPathUnits:"objectBoundingBox",children:D.jsx("path",{d:"M0.501,0.005 L0.501,0.005 L0.523,0.005 L0.549,0.006 C0.704,0.01,0.796,0.017,0.825,0.027 L0.827,0.028 C0.872,0.045,0.939,0.044,0.978,0.17 C1,0.254,1,0.365,0.99,0.505 L0.988,0.513 C0.979,0.558,0.971,0.598,0.965,0.633 C0.956,0.689,0.979,0.77,0.964,0.865 C0.953,0.928,0.921,0.966,0.869,0.979 C0.821,0.986,0.773,0.992,0.726,0.995 L0.712,0.996 L0.694,0.997 C0.648,1,0.586,1,0.507,1 L0.501,1 L0.464,1 C0.385,1,0.325,0.998,0.283,0.995 C0.234,0.992,0.184,0.987,0.133,0.979 C0.081,0.966,0.05,0.928,0.039,0.865 C0.023,0.77,0.047,0.689,0.037,0.633 C0.031,0.595,0.023,0.552,0.013,0.505 C-0.006,0.365,-0.002,0.254,0.024,0.17 C0.064,0.045,0.13,0.045,0.174,0.028 L0.175,0.028 C0.204,0.017,0.303,0.009,0.474,0.005 L0.501,0.005"})})}),ch=({open:l,title:u,width:d=520,maskClosable:o=!0,footer:p,onClose:f,onOk:g,children:v,className:m,typeSpeed:h=80,typewriter:w=!0})=>{const[S,k]=_.useState(0);_.useEffect(()=>{l&&k(L=>L+1)},[l]),_.useEffect(()=>{if(!l)return;const L=O=>{O.key==="Escape"&&(f==null||f())};return document.addEventListener("keydown",L),()=>document.removeEventListener("keydown",L)},[l,f]),_.useEffect(()=>(l&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=""}),[l]);const H=_.useCallback(()=>{o&&(f==null||f())},[o,f]),q=_.useCallback(L=>{L.stopPropagation()},[]);if(!l)return null;const P=D.jsxs(D.Fragment,{children:[D.jsx(jn,{type:"primary",onClick:f,children:"取消"}),D.jsx(jn,{type:"primary",onClick:g,children:"确定"})]}),G=D.jsx(pu,{children:D.jsx("div",{className:ia.mask,onClick:H,children:D.jsxs("div",{className:[ia.modal,m].filter(Boolean).join(" "),style:{width:d},onClick:q,role:"dialog","aria-modal":"true",children:[D.jsx(yy,{}),D.jsxs("div",{className:ia.modalClipped,children:[u&&D.jsx("div",{className:ia.header,children:u&&D.jsx("div",{className:ia.title,children:u})}),D.jsx("div",{className:ia.body,children:w?D.jsx(uh,{speed:h,trigger:S,children:v}):v}),p!==null&&D.jsx("div",{className:ia.footer,children:p===void 0?P:p})]})]})})});return D1.createPortal(G,document.body)};ch.displayName="Modal";const vy="animal-card-DJ515",by="animal-card-title-PL-WB",xy="animal-card-dashed-fqnm1",Cy="animal-card-app-pink-3Eo8d",Sy="animal-card-purple-Gq7sR",_y="animal-card-app-blue-GHH1a",Ty="animal-card-app-yellow-DWB-L",wy="animal-card-app-orange-V5yD7",Ay="animal-card-app-teal-R5kFG",Ey="animal-card-app-green-xlNUs",Dy="animal-card-app-red-DzE0l",Ry="animal-card-lime-green-KiJbe",My="animal-card-yellow-green-4c-lF",Ly="animal-card-brown-hLCrx",Oy="animal-card-warm-peach-pink-RlSVo",pl={card:vy,"card-title":"animal-card-title-PL-WB",cardTitle:by,"card-dashed":"animal-card-dashed-fqnm1",cardDashed:xy,"card-app-pink":"animal-card-app-pink-3Eo8d",cardAppPink:Cy,"card-purple":"animal-card-purple-Gq7sR",cardPurple:Sy,"card-app-blue":"animal-card-app-blue-GHH1a",cardAppBlue:_y,"card-app-yellow":"animal-card-app-yellow-DWB-L",cardAppYellow:Ty,"card-app-orange":"animal-card-app-orange-V5yD7",cardAppOrange:wy,"card-app-teal":"animal-card-app-teal-R5kFG",cardAppTeal:Ay,"card-app-green":"animal-card-app-green-xlNUs",cardAppGreen:Ey,"card-app-red":"animal-card-app-red-DzE0l",cardAppRed:Dy,"card-lime-green":"animal-card-lime-green-KiJbe",cardLimeGreen:Ry,"card-yellow-green":"animal-card-yellow-green-4c-lF",cardYellowGreen:My,"card-brown":"animal-card-brown-hLCrx",cardBrown:Ly,"card-warm-peach-pink":"animal-card-warm-peach-pink-RlSVo",cardWarmPeachPink:Oy},ky=({type:l="default",color:u="default",children:d,className:o,style:p,...f})=>{const g=[pl.card,l==="title"&&pl["card-title"],l==="dashed"&&pl["card-dashed"],u!=="default"&&pl[`card-${u}`],o].filter(Boolean).join(" ");return D.jsx("div",{className:g,style:p,...f,children:d})};ky.displayName="Card";const By="animal-footer-5DMOR",Ny="animal-tree-KZ8hX",Bp={footer:By,tree:Ny},dh=({type:l="tree",className:u,style:d})=>{const o=[Bp.footer,Bp[l],u].filter(Boolean).join(" ");return D.jsx("div",{className:o,style:d})};dh.displayName="Footer";const zy="animal-faqCard-5jlOE",Uy="animal-disabled-9DAjm",jy="animal-questionHeader-iqP87",Gy="animal-questionIcon-xRkdp",Py="animal-expanded-a8Eze",Hy="animal-questionText-jVpUv",Vy="animal-leafDecoration-RoK4H",Iy="animal-answerWrapper-tzFtx",qy="animal-answerContent-ppsk-",on={faqCard:zy,disabled:Uy,questionHeader:jy,questionIcon:Gy,expanded:Py,questionText:Hy,leafDecoration:Vy,answerWrapper:Iy,answerContent:qy},Fy=({question:l,answer:u,defaultExpanded:d=!1,disabled:o=!1,className:p,style:f})=>{const[g,v]=_.useState(d),m=()=>{o||v(!g)},h=[on.faqCard,g&&on.expanded,o&&on.disabled,p].filter(Boolean).join(" ");return D.jsxs("div",{className:h,style:f,children:[D.jsxs("button",{className:on.questionHeader,onClick:m,disabled:o,"aria-expanded":g,children:[D.jsx("span",{className:on.questionIcon,children:g?"−":"+"}),D.jsx("span",{className:on.questionText,children:l}),D.jsx("span",{className:on.leafDecoration,children:D.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:D.jsx("path",{fill:"currentColor",d:"M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"})})})]}),D.jsx("div",{className:on.answerWrapper,children:D.jsx("div",{className:on.answerContent,children:u})})]})};Fy.displayName="Collapse";const Yy="animal-acDatetime-hVKh7",Xy="animal-acDate-rhO3k",Qy="animal-acWeekday-bxDHR",Zy="animal-acMonthday-1jUmX",Ky="animal-acTime-S-twb",Jy="animal-acColon-g4vuJ",Fa={acDatetime:Yy,acDate:Xy,acWeekday:Qy,acMonthday:Zy,acTime:Ky,acColon:Jy},Wy=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],$y=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ev=({className:l})=>{const[u,d]=_.useState(new Date);return _.useEffect(()=>{const o=setInterval(()=>d(new Date),1e3);return()=>clearInterval(o)},[]),D.jsxs("div",{className:`${Fa.acDatetime} ${l||""}`,children:[D.jsxs("div",{className:Fa.acDate,children:[D.jsx("span",{className:Fa.acWeekday,children:Wy[u.getDay()]}),D.jsxs("span",{className:Fa.acMonthday,children:[$y[u.getMonth()]," ",u.getDate()]})]}),D.jsxs("div",{className:Fa.acTime,children:[u.getHours().toString().padStart(2,"0"),D.jsx("span",{className:Fa.acColon,children:":"}),u.getMinutes().toString().padStart(2,"0")]})]})};ev.displayName="Time";const tv="animal-divider-ZBhpE",nv="animal-line-teal-Z80hb",av="animal-line-white-VDY1E",iv="animal-line-yellow-ifvJz",rv="animal-wave-yellow-AO-io",Np={divider:tv,"line-teal":"animal-line-teal-Z80hb",lineTeal:nv,"line-white":"animal-line-white-VDY1E",lineWhite:av,"line-yellow":"animal-line-yellow-ifvJz",lineYellow:iv,"wave-yellow":"animal-wave-yellow-AO-io",waveYellow:rv},lv=({type:l="line-brown",className:u,style:d})=>{const o=[Np.divider,Np[l],u].filter(Boolean).join(" ");return D.jsx("div",{className:o,style:d})};lv.displayName="Divider";const sv="animal-wrapper-pbOTq",ov="animal-trigger-2-Ahh",uv="animal-open-867xo",cv="animal-value-623RB",dv="animal-placeholder-vpC8E",fv="animal-arrow-xNbxA",pv="animal-dropdown-0l6jF",hv="animal-option-GEkLI",gv="animal-active-jtSpt",mv="animal-hovered-N-cco",yv="animal-pillBar-O9cTb",vv="animal-optionDot-FQtyw",bv="animal-disabled-Oy12C",gt={wrapper:sv,trigger:ov,open:uv,value:cv,placeholder:dv,arrow:fv,dropdown:pv,option:hv,active:gv,hovered:mv,pillBar:yv,optionDot:vv,disabled:bv},xv=({options:l,value:u,onChange:d,placeholder:o="请选择",disabled:p=!1})=>{var G;const[f,g]=_.useState(!1),[v,m]=_.useState(null),[h,w]=_.useState({}),[S,k]=_.useState(!1),H=_.useRef(null),q=((G=l.find(L=>L.key===u))==null?void 0:G.label)||o;_.useEffect(()=>{const L=O=>{H.current&&!H.current.contains(O.target)&&(g(!1),k(!1))};return f&&document.addEventListener("mousedown",L),()=>document.removeEventListener("mousedown",L)},[f]),_.useEffect(()=>{if(f&&H.current){const L=H.current.getBoundingClientRect(),O=window.innerWidth,j=window.innerHeight,F=l.length*44+24,Z={position:"absolute"};L.right+200>O?(Z.right="100%",Z.marginRight="6px",Z.left="auto"):(Z.left="100%",Z.marginLeft="6px",Z.right="auto");const ie=j-L.bottom,J=L.top;ie<F&&J>ie?(Z.top="auto",Z.bottom="100%",Z.marginBottom="6px",delete Z.transform):ie<F||L.top<F?(Z.top="100%",Z.marginTop="6px",Z.bottom="auto",delete Z.transform):(Z.top="50%",Z.transform="translateY(-50%)",Z.bottom="auto"),w(Z),requestAnimationFrame(()=>{k(!0)})}else f||k(!1)},[f,l.length]);const P=L=>{d(L),g(!1),k(!1)};return D.jsxs("div",{ref:H,className:`${gt.wrapper} ${p?gt.disabled:""}`,children:[D.jsxs("div",{className:`${gt.trigger} ${f?gt.open:""}`,onClick:()=>!p&&g(!f),children:[D.jsx("span",{className:u?gt.value:gt.placeholder,children:q}),D.jsx("span",{className:gt.arrow,children:D.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:D.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),f&&S&&D.jsx("div",{className:gt.dropdown,style:h,children:l.map(L=>D.jsxs("div",{className:`${gt.option} ${u===L.key?gt.active:""} ${v===L.key?gt.hovered:""}`,onClick:()=>P(L.key),onMouseEnter:()=>m(L.key),onMouseLeave:()=>m(null),children:[D.jsx("span",{className:gt.optionDot}),L.label,u===L.key&&D.jsx("div",{className:gt.pillBar})]},L.key))})]})};xv.displayName="Select";var zp={exports:{}},Up;function Cv(){return Up||(Up=1,(function(l){(function(){var u={}.hasOwnProperty;function d(){for(var f="",g=0;g<arguments.length;g++){var v=arguments[g];v&&(f=p(f,o(v)))}return f}function o(f){if(typeof f=="string"||typeof f=="number")return f;if(typeof f!="object")return"";if(Array.isArray(f))return d.apply(null,f);if(f.toString!==Object.prototype.toString&&!f.toString.toString().includes("[native code]"))return f.toString();var g="";for(var v in f)u.call(f,v)&&f[v]&&(g=p(g,v));return g}function p(f,g){return g?f?f+" "+g:f+g:f}l.exports?(d.default=d,l.exports=d):window.classNames=d})()})(zp)),zp.exports}Cv();const Sv="animal-wrapper-HLEzB",_v="animal-container-oauvb",Tv="animal-closing-iG6pq",hl={wrapper:Sv,container:_v,closing:Tv},wv=`/*!
 * GSAP 3.2.6
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function n(t){return"string"==typeof t}function o(t){return"function"==typeof t}function p(t){return"number"==typeof t}function q(t){return void 0===t}function r(t){return"object"==typeof t}function s(t){return!1!==t}function t(){return"undefined"!=typeof window}function u(t){return o(t)||n(t)}function K(t){return(l=pt(t,at))&&ie}function L(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")}function M(t,e){return!e&&console.warn(t)}function N(t,e){return t&&(at[t]=e)&&l&&(l[t]=e)||at}function O(){return 0}function Y(t){var e,i,n=t[0];if(r(n)||o(n)||(t=[t]),!(e=(n._gsap||{}).harness)){for(i=dt.length;i--&&!dt[i].targetTest(n););e=dt[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ft(t[i],e)))||t.splice(i,1);return t}function Z(t){return t._gsap||Y(yt(t))[0]._gsap}function $(t,e){var r=t[e];return o(r)?t[e]():q(r)&&t.getAttribute(e)||r}function _(t,e){return(t=t.split(",")).forEach(e)||t}function aa(t){return Math.round(1e5*t)/1e5||0}function ba(t,e){for(var r=e.length,i=0;t.indexOf(e[i])<0&&++i<r;);return i<r}function ca(t,e,r){var i,n=p(t[1]),a=(n?2:1)+(e<2?0:1),o=t[a];if(n&&(o.duration=t[1]),o.parent=r,e){for(i=o;r&&!("immediateRender"in i);)i=r.vars.defaults||{},r=s(r.vars.inherit)&&r.parent;o.immediateRender=s(i.immediateRender),e<2?o.runBackwards=1:o.startAt=t[a-1]}return o}function da(){var t,e,r=ot.length,i=ot.slice(0);for(ut={},t=ot.length=0;t<r;t++)(e=i[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function ea(t,e,r,i){ot.length&&da(),t.render(e,r,i),ot.length&&da()}function fa(t){var e=parseFloat(t);return(e||0===e)&&(t+"").match(nt).length<2?e:t}function ga(t){return t}function ha(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ia(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function ka(t,e){for(var i in e)t[i]=r(e[i])?ka(t[i]||(t[i]={}),e[i]):e[i];return t}function la(t,e){var r,i={};for(r in t)r in e||(i[r]=t[r]);return i}function ma(t){var e=t.parent||F,r=t.keyframes?ia:ha;if(s(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent;return t}function pa(t,e,r,i){void 0===r&&(r="_first"),void 0===i&&(i="_last");var n=e._prev,a=e._next;n?n._next=a:t[r]===e&&(t[r]=a),a?a._prev=n:t[i]===e&&(t[i]=n),e._next=e._prev=e.parent=null}function qa(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function ra(t){for(var e=t;e;)e._dirty=1,e=e.parent;return t}function ua(t){return t._repeat?_t(t._tTime,t=t.duration()+t._rDelay)*t:0}function wa(t,e){return(t-e._start)*e._ts+(0<=e._ts?0:e._dirty?e.totalDuration():e._tDur)}function xa(t){return t._end=aa(t._start+(t._tDur/Math.abs(t._ts||t._rts||B)||0))}function ya(t,e){var r;if((e._time||e._initted&&!e._dur)&&(r=wa(t.rawTime(),e),(!e._dur||gt(0,e.totalDuration(),r)-e._tTime>B)&&e.render(r,!0)),ra(t)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(r=t;r._dp;)0<=r.rawTime()&&r.totalTime(r._tTime),r=r._dp;t._zTime=-B}}function za(t,e,r,i){return e.parent&&qa(e),e._start=aa(r+e._delay),e._end=aa(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),function _addLinkedListItem(t,e,r,i,n){void 0===r&&(r="_first"),void 0===i&&(i="_last");var a,s=t[i];if(n)for(a=e[n];s&&s[n]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[i]=e,e._prev=s,e.parent=e._dp=t}(t,e,"_first","_last",t._sort?"_start":0),t._recent=e,i||ya(t,e),t}function Aa(t,e,r,i){return qt(t,e),t._initted?!r&&t._pt&&(t._dur&&!1!==t.vars.lazy||!t._dur&&t.vars.lazy)&&d!==Ot.frame?(ot.push(t),t._lazy=[e,i],1):void 0:1}function Da(t,e,r){var i=t._repeat,n=aa(e)||0;return t._dur=n,t._tDur=i?i<0?1e12:aa(n*(i+1)+t._rDelay*i):n,t._time>n&&(t._time=n,t._tTime=Math.min(t._tTime,t._tDur)),r||ra(t.parent),t.parent&&xa(t),t}function Ea(t){return t instanceof Bt?ra(t):Da(t,t._dur)}function Ga(t,e){var r,i,a=t.labels,s=t._recent||mt,o=t.duration()>=R?s.endTime(!1):t._dur;return n(e)&&(isNaN(e)||e in a)?"<"===(r=e.charAt(0))||">"===r?("<"===r?s._start:s.endTime(0<=s._repeat))+(parseFloat(e.substr(1))||0):(r=e.indexOf("="))<0?(e in a||(a[e]=o),a[e]):(i=+(e.charAt(r-1)+e.substr(r+1)),1<r?Ga(t,e.substr(0,r-1))+i:o+i):null==e?o:+e}function Ha(t,e){return t||0===t?e(t):e}function Ja(t){return(t+"").substr((parseFloat(t)+"").length)}function Ma(t,e){return t&&r(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&r(t[0]))&&!t.nodeType&&t!==i}function Pa(t){return t.sort(function(){return.5-Math.random()})}function Qa(t){if(o(t))return t;var p=r(t)?t:{each:t},_=Dt(p.ease),m=p.from||0,g=parseFloat(p.base)||0,v={},e=0<m&&m<1,y=isNaN(m)||e,T=p.axis,b=m,w=m;return n(m)?b=w={center:.5,edges:.5,end:1}[m]||0:!e&&y&&(b=m[0],w=m[1]),function(t,e,r){var i,n,a,s,o,u,h,l,f,d=(r||p).length,c=v[d];if(!c){if(!(f="auto"===p.grid?0:(p.grid||[1,R])[1])){for(h=-R;h<(h=r[f++].getBoundingClientRect().left)&&f<d;);f--}for(c=v[d]=[],i=y?Math.min(f,d)*b-.5:m%f,n=y?d*w/f-.5:m/f|0,l=R,u=h=0;u<d;u++)a=u%f-i,s=n-(u/f|0),c[u]=o=T?Math.abs("y"===T?s:a):j(a*a+s*s),h<o&&(h=o),o<l&&(l=o);"random"===m&&Pa(c),c.max=h-l,c.min=l,c.v=d=(parseFloat(p.amount)||parseFloat(p.each)*(d<f?d-1:T?"y"===T?d/f:f:Math.max(f,d/f))||0)*("edges"===m?-1:1),c.b=d<0?g-d:g,c.u=Ja(p.amount||p.each)||0,_=_&&d<0?zt(_):_}return d=(c[t]-c.min)/c.max||0,aa(c.b+(_?_(d):d)*c.v)+c.u}}function Ra(e){var r=e<1?Math.pow(10,(e+"").length-2):1;return function(t){return~~(Math.round(parseFloat(t)/e)*e*r)/r+(p(t)?0:Ja(t))}}function Sa(u,t){var h,l,e=H(u);return!e&&r(u)&&(h=e=u.radius||R,u.values?(u=yt(u.values),(l=!p(u[0]))&&(h*=h)):u=Ra(u.increment)),Ha(t,e?o(u)?function(t){return l=u(t),Math.abs(l-t)<=h?l:t}:function(t){for(var e,r,i=parseFloat(l?t.x:t),n=parseFloat(l?t.y:0),a=R,s=0,o=u.length;o--;)(e=l?(e=u[o].x-i)*e+(r=u[o].y-n)*r:Math.abs(u[o]-i))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||p(t)?s:s+Ja(t)}:Ra(u))}function Ta(t,e,r,i){return Ha(H(t)?!e:!0===r?!!(r=0):!i,function(){return H(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(i=r<1?Math.pow(10,(r+"").length-2):1)&&~~(Math.round((t+Math.random()*(e-t))/r)*r*i)/i})}function Xa(e,r,t){return Ha(t,function(t){return e[~~r(t)]})}function $a(t){for(var e,r,i,n,a=0,s="";~(e=t.indexOf("random(",a));)i=t.indexOf(")",e),n="["===t.charAt(e+7),r=t.substr(e+7,i-e-7).match(n?nt:Q),s+=t.substr(a,e-a)+Ta(n?r:+r[0],+r[1],+r[2]||1e-5),a=i+1;return s+t.substr(a,t.length-a)}function bb(t,e,r){var i,n,a,s=t.labels,o=R;for(i in s)(n=s[i]-e)<0==!!r&&n&&o>(n=Math.abs(n))&&(a=i,o=n);return a}function db(t){return qa(t),t.progress()<1&&bt(t,"onInterrupt"),t}function ib(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*wt+.5|0}function jb(t,e,r){var i,n,a,s,o,u,h,l,f,d,c=t?p(t)?[t>>16,t>>8&wt,t&wt]:0:xt.black;if(!c){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),xt[t])c=xt[t];else if("#"===t.charAt(0))4===t.length&&(t="#"+(i=t.charAt(1))+i+(n=t.charAt(2))+n+(a=t.charAt(3))+a),c=[(t=parseInt(t.substr(1),16))>>16,t>>8&wt,t&wt];else if("hsl"===t.substr(0,3))if(c=d=t.match(Q),e){if(~t.indexOf("="))return c=t.match(W),r&&c.length<4&&(c[3]=1),c}else s=+c[0]%360/360,o=c[1]/100,i=2*(u=c[2]/100)-(n=u<=.5?u*(o+1):u+o-u*o),3<c.length&&(c[3]*=1),c[0]=ib(s+1/3,i,n),c[1]=ib(s,i,n),c[2]=ib(s-1/3,i,n);else c=t.match(Q)||xt.transparent;c=c.map(Number)}return e&&!d&&(i=c[0]/wt,n=c[1]/wt,a=c[2]/wt,u=((h=Math.max(i,n,a))+(l=Math.min(i,n,a)))/2,h===l?s=o=0:(f=h-l,o=.5<u?f/(2-h-l):f/(h+l),s=h===i?(n-a)/f+(n<a?6:0):h===n?(a-i)/f+2:(i-n)/f+4,s*=60),c[0]=~~(s+.5),c[1]=~~(100*o+.5),c[2]=~~(100*u+.5)),r&&c.length<4&&(c[3]=1),c}function kb(t){var r=[],i=[],n=-1;return t.split(kt).forEach(function(t){var e=t.match(tt)||[];r.push.apply(r,e),i.push(n+=e.length+1)}),r.c=i,r}function lb(t,e,r){var i,n,a,s,o="",u=(t+o).match(kt),h=e?"hsla(":"rgba(",l=0;if(!u)return t;if(u=u.map(function(t){return(t=jb(t,e,1))&&h+(e?t[0]+","+t[1]+"%,"+t[2]+"%,"+t[3]:t.join(","))+")"}),r&&(a=kb(t),(i=r.c).join(o)!==a.c.join(o)))for(s=(n=t.replace(kt,"1").split(tt)).length-1;l<s;l++)o+=n[l]+(~i.indexOf(l)?u.shift()||h+"0,0,0,0)":(a.length?a:u.length?u:r).shift());if(!n)for(s=(n=t.split(kt)).length-1;l<s;l++)o+=n[l]+u[l];return o+n[s]}function ob(t){var e,r=t.join(" ");if(kt.lastIndex=0,kt.test(r))return e=Mt.test(r),t[1]=lb(t[1],e),t[0]=lb(t[0],e,kb(t[1])),!0}function wb(t){var e=(t+"").split("("),r=Pt[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,i,n={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,i=r.substr(0,e),n[s]=isNaN(i)?i.replace(St,"").trim():+i,s=r.substr(e+1).trim();return n}(e[1])]:rt.exec(t)[1].split(",").map(fa)):Pt._CE&&At.test(t)?Pt._CE("",t):r}function zb(t,e,r,i){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===i&&(i=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var n,a={easeIn:e,easeOut:r,easeInOut:i};return _(t,function(t){for(var e in Pt[t]=at[t]=a,Pt[n=t.toLowerCase()]=r,a)Pt[n+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Pt[t+"."+e]=a[e]}),a}function Ab(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function Bb(r,t,e){function Yk(t){return 1===t?1:i*Math.pow(2,-10*t)*J((t-a)*n)+1}var i=1<=t?t:1,n=(e||(r?.3:.45))/(t<1?t:1),a=n/I*(Math.asin(1/i)||0),s="out"===r?Yk:"in"===r?function(t){return 1-Yk(1-t)}:Ab(Yk);return n=I/n,s.config=function(t,e){return Bb(r,t,e)},s}function Cb(e,r){function el(t){return t?--t*t*((r+1)*t+r)+1:0}void 0===r&&(r=1.70158);var t="out"===e?el:"in"===e?function(t){return 1-el(1-t)}:Ab(el);return t.config=function(t){return Cb(e,t)},t}var F,i,a,h,l,f,d,c,m,g,v,y,T,b,w,x,k,C,P,A,S,z,D,G={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},E={duration:.5,overwrite:!1,delay:0},R=1e8,B=1/R,I=2*Math.PI,U=I/4,X=0,j=Math.sqrt,V=Math.cos,J=Math.sin,H=Array.isArray,Q=/(?:-?\\.?\\d|\\.)+/gi,W=/[-+=.]*\\d+[.e\\-+]*\\d*[e\\-\\+]*\\d*/g,tt=/[-+=.]*\\d+[.e-]*\\d*[a-z%]*/g,et=/[-+=.]*\\d+(?:\\.|e-|e)*\\d*/gi,rt=/\\(([^()]+)\\)/i,it=/[+-]=-?[\\.\\d]+/,nt=/[#\\-+.]*\\b[a-z\\d-=+%.]+/gi,at={},st={},ot=[],ut={},ht={},lt={},ft=30,dt=[],ct="",pt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},_t=function _animationCycle(t,e){return(t/=e)&&~~t===t?~~t-1:~~t},mt={_start:0,endTime:O},gt=function _clamp(t,e,r){return r<t?t:e<r?e:r},vt=[].slice,yt=function toArray(t,e){return!n(t)||e||!a&&Ct()?H(t)?function _flatten(t,e,r){return void 0===r&&(r=[]),t.forEach(function(t){return n(t)&&!e||Ma(t,1)?r.push.apply(r,yt(t)):r.push(t)})||r}(t,e):Ma(t)?vt.call(t,0):t?[t]:[]:vt.call(h.querySelectorAll(t),0)},Tt=function mapRange(e,t,r,i,n){var a=t-e,s=i-r;return Ha(n,function(t){return r+(t-e)/a*s})},bt=function _callback(t,e,r){var i,n,a=t.vars,s=a[e];if(s)return i=a[e+"Params"],n=a.callbackScope||t,r&&ot.length&&da(),i?s.apply(n,i):s.call(n)},wt=255,xt={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},kt=function(){var t,e="(?:\\\\b(?:(?:rgb|rgba|hsl|hsla)\\\\(.+?\\\\))|\\\\B#(?:[0-9a-f]{3}){1,2}\\\\b";for(t in xt)e+="|"+t+"\\\\b";return new RegExp(e+")","gi")}(),Mt=/hsl[a]?\\(/,Ot=(b=Date.now,w=500,x=33,k=b(),C=k,A=P=1/240,T={time:0,frame:0,tick:function tick(){ck(!0)},wake:function wake(){f&&(!a&&t()&&(i=a=window,h=i.document||{},at.gsap=ie,(i.gsapVersions||(i.gsapVersions=[])).push(ie.version),K(l||i.GreenSockGlobals||!i.gsap&&i||{}),y=i.requestAnimationFrame),g&&T.sleep(),v=y||function(t){return setTimeout(t,1e3*(A-T.time)+1|0)},m=1,ck(2))},sleep:function sleep(){(y?i.cancelAnimationFrame:clearTimeout)(g),m=0,v=O},lagSmoothing:function lagSmoothing(t,e){w=t||1e8,x=Math.min(e,w,0)},fps:function fps(t){P=1/(t||240),A=T.time+P},add:function add(t){S.indexOf(t)<0&&S.push(t),Ct()},remove:function remove(t){var e;~(e=S.indexOf(t))&&S.splice(e,1)},_listeners:S=[]}),Ct=function _wake(){return!m&&Ot.wake()},Pt={},At=/^[\\d.\\-M][\\d.\\-,\\s]/,St=/["']/g,zt=function _invertEase(e){return function(t){return 1-e(1-t)}},Dt=function _parseEase(t,e){return t&&(o(t)?t:Pt[t]||wb(t))||e};function ck(e){var t,r,i=b()-C,n=!0===e;w<i&&(k+=i-x),C+=i,T.time=(C-k)/1e3,(0<(t=T.time-A)||n)&&(T.frame++,A+=t+(P<=t?.004:P-t),r=1),n||(g=v(ck)),r&&S.forEach(function(t){return t(T.time,i,T.frame,e)})}function vl(t){return t<D?z*t*t:t<.7272727272727273?z*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?z*(t-=2.25/2.75)*t+.9375:z*Math.pow(t-2.625/2.75,2)+.984375}_("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;zb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Pt.Linear.easeNone=Pt.none=Pt.Linear.easeIn,zb("Elastic",Bb("in"),Bb("out"),Bb()),z=7.5625,D=1/2.75,zb("Bounce",function(t){return 1-vl(1-t)},vl),zb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),zb("Circ",function(t){return-(j(1-t*t)-1)}),zb("Sine",function(t){return 1-V(t*U)}),zb("Back",Cb("in"),Cb("out"),Cb()),Pt.SteppedEase=Pt.steps=at.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,i=t+(e?0:1),n=e?1:0;return function(t){return((i*gt(0,.99999999,t)|0)+n)*r}}},E.ease=Pt["quad.out"],_("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(t){return ct+=t+","+t+"Params,"});var Rt,Ft=function GSCache(t,e){this.id=X++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:$,this.set=e?e.getSetter:Zt},Et=((Rt=Animation.prototype).delay=function delay(t){return t||0===t?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+t-this._delay),this._delay=t,this):this._delay},Rt.duration=function duration(t){return arguments.length?this.totalDuration(0<this._repeat?t+(t+this._rDelay)*this._repeat:t):this.totalDuration()&&this._dur},Rt.totalDuration=function totalDuration(t){return arguments.length?(this._dirty=0,Da(this,this._repeat<0?t:(t-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},Rt.totalTime=function totalTime(t,e){if(Ct(),!arguments.length)return this._tTime;var r=this.parent||this._dp;if(r&&r.smoothChildTiming&&this._ts){for(this._start=aa(r._time-(0<this._ts?t/this._ts:((this._dirty?this.totalDuration():this._tDur)-t)/-this._ts)),xa(this),r._dirty||ra(r);r.parent;)r.parent._time!==r._start+(0<=r._ts?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&za(this._dp,this,this._start-this._delay)}return(this._tTime!==t||!this._dur&&!e||this._initted&&Math.abs(this._zTime)===B)&&(this._ts||(this._pTime=t),ea(this,t,e)),this},Rt.time=function time(t,e){return arguments.length?this.totalTime(Math.min(this.totalDuration(),t+ua(this))%this._dur||(t?this._dur:0),e):this._time},Rt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},Rt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*(!this._yoyo||1&this.iteration()?t:1-t)+ua(this),e):this.duration()?Math.min(1,this._time/this._dur):this.ratio},Rt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?_t(this._tTime,r)+1:1},Rt.timeScale=function timeScale(t){if(!arguments.length)return this._rts===-B?0:this._rts;if(this._rts===t)return this;var e=this.parent&&this._ts?wa(this.parent._time,this):this._tTime;return this._rts=+t||0,this._ts=this._ps||t===-B?0:this._rts,function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this.totalTime(gt(0,this._tDur,e),!0))},Rt.paused=function paused(t){return arguments.length?(this._ps!==t&&((this._ps=t)?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ct(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,1===this.progress()&&(this._tTime-=B)&&Math.abs(this._zTime)!==B))),this):this._ps},Rt.startTime=function startTime(t){if(arguments.length){this._start=t;var e=this.parent||this._dp;return!e||!e._sort&&this.parent||za(e,this,t-this._delay),this}return this._start},Rt.endTime=function endTime(t){return this._start+(s(t)?this.totalDuration():this.duration())/Math.abs(this._ts)},Rt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?wa(e.rawTime(t),this):this._tTime:this._tTime},Rt.repeat=function repeat(t){return arguments.length?(this._repeat=t,Ea(this)):this._repeat},Rt.repeatDelay=function repeatDelay(t){return arguments.length?(this._rDelay=t,Ea(this)):this._rDelay},Rt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Rt.seek=function seek(t,e){return this.totalTime(Ga(this,t),s(e))},Rt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,s(e))},Rt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Rt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Rt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Rt.resume=function resume(){return this.paused(!1)},Rt.reversed=function reversed(t){return arguments.length?(!!t!==this.reversed()&&this.timeScale(-this._rts||(t?-B:0)),this):this._rts<0},Rt.invalidate=function invalidate(){return this._initted=0,this._zTime=-B,this},Rt.isActive=function isActive(t){var e,r=this.parent||this._dp,i=this._start;return!(r&&!(this._ts&&(this._initted||!t)&&r.isActive(t)&&(e=r.rawTime(!0))>=i&&e<this.endTime(!0)-B))},Rt.eventCallback=function eventCallback(t,e,r){var i=this.vars;return 1<arguments.length?(e?(i[t]=e,r&&(i[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete i[t],this):i[t]},Rt.then=function then(t){var i=this;return new Promise(function(e){function Km(){var t=i.then;i.then=null,o(r)&&(r=r(i))&&(r.then||r===i)&&(i.then=t),e(r),i.then=t}var r=o(t)?t:ga;i._initted&&1===i.totalProgress()&&0<=i._ts||!i._tTime&&i._ts<0?Km():i._prom=Km})},Rt.kill=function kill(){db(this)},Animation);function Animation(t,e){var r=t.parent||F;this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Da(this,+t.duration,1),this.data=t.data,m||Ot.wake(),r&&za(r,this,e||0===e?e:r._time,1),t.reversed&&this.reverse(),t.paused&&this.paused(!0)}ha(Et.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-B,_prom:0,_ps:!1,_rts:1});var Bt=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t,e)||this).labels={},r.smoothChildTiming=!!t.smoothChildTiming,r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=s(t.sortChildren),r.parent&&ya(r.parent,_assertThisInitialized(r)),r}_inheritsLoose(Timeline,i);var t=Timeline.prototype;return t.to=function to(t,e,r,i){return new Ut(t,ca(arguments,0,this),Ga(this,p(e)?i:r)),this},t.from=function from(t,e,r,i){return new Ut(t,ca(arguments,1,this),Ga(this,p(e)?i:r)),this},t.fromTo=function fromTo(t,e,r,i,n){return new Ut(t,ca(arguments,2,this),Ga(this,p(e)?n:i)),this},t.set=function set(t,e,r){return e.duration=0,e.parent=this,ma(e).repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Ut(t,e,Ga(this,r),1),this},t.call=function call(t,e,r){return za(this,Ut.delayedCall(0,t,e),Ga(this,r))},t.staggerTo=function staggerTo(t,e,r,i,n,a,s){return r.duration=e,r.stagger=r.stagger||i,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Ut(t,r,Ga(this,n)),this},t.staggerFrom=function staggerFrom(t,e,r,i,n,a,o){return r.runBackwards=1,ma(r).immediateRender=s(r.immediateRender),this.staggerTo(t,e,r,i,n,a,o)},t.staggerFromTo=function staggerFromTo(t,e,r,i,n,a,o,u){return i.startAt=r,ma(i).immediateRender=s(i.immediateRender),this.staggerTo(t,e,i,n,a,o,u)},t.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d,c,p,_=this._time,m=this._dirty?this.totalDuration():this._tDur,g=this._dur,v=this!==F&&m-B<t&&0<=t?m:t<B?0:t,y=this._zTime<0!=t<0&&(this._initted||!g);if(v!==this._tTime||r||y){if(_!==this._time&&g&&(v+=this._time-_,t+=this._time-_),i=v,f=this._start,u=!(l=this._ts),y&&(g||(_=this._zTime),!t&&e||(this._zTime=t)),this._repeat&&(c=this._yoyo,o=g+this._rDelay,(g<(i=aa(v%o))||m===v)&&(i=g),(s=~~(v/o))&&s===v/o&&(i=g,s--),c&&1&s&&(i=g-i,p=1),s!==(d=_t(this._tTime,o))&&!this._lock)){var T=c&&1&d,b=T===(c&&1&s);if(s<d&&(T=!T),_=T?0:g,this._lock=1,this.render(_,e,!g)._lock=0,!e&&this.parent&&bt(this,"onRepeat"),this.vars.repeatRefresh&&!p&&(this.invalidate()._lock=1),_!==this._time||u!=!this._ts)return this;if(b&&(this._lock=2,_=T?g+1e-4:-1e-4,this.render(_,!0),this.vars.repeatRefresh&&!p&&this.invalidate()),this._lock=0,!this._ts&&!u)return this}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var i;if(e<r)for(i=t._first;i&&i._start<=r;){if(!i._dur&&"isPause"===i.data&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=r;){if(!i._dur&&"isPause"===i.data&&i._start<e)return i;i=i._prev}}(this,aa(_),aa(i)))&&(v-=i-(i=h._start)),this._tTime=v,this._time=i,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=t),_||!i||e||bt(this,"onStart"),_<=i&&0<=t)for(n=this._first;n;){if(a=n._next,(n._act||i>=n._start)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(i-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(i-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=-B);break}}n=a}else{n=this._last;for(var w=t<0?t:i;n;){if(a=n._prev,(n._act||w<=n._end)&&n._ts&&h!==n){if(n.parent!==this)return this.render(t,e,r);if(n.render(0<n._ts?(w-n._start)*n._ts:(n._dirty?n.totalDuration():n._tDur)+(w-n._start)*n._ts,e,r),i!==this._time||!this._ts&&!u){h=0,a&&(v+=this._zTime=w?-B:B);break}}n=a}}if(h&&!e&&(this.pause(),h.render(_<=i?0:-B)._zTime=_<=i?1:-1,this._ts))return this._start=f,xa(this),this.render(t,e,r);this._onUpdate&&!e&&bt(this,"onUpdate",!0),(v===m&&m>=this.totalDuration()||!v&&this._ts<0)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||this._lock||(!t&&g||!(t&&0<this._ts||!v&&this._ts<0)||qa(this,1),e||t<0&&!_||(bt(this,v===m?"onComplete":"onReverseComplete",!0),this._prom&&this._prom())))}return this},t.add=function add(t,e){var r=this;if(p(e)||(e=Ga(this,e)),!(t instanceof Et)){if(H(t))return t.forEach(function(t){return r.add(t,e)}),ra(this);if(n(t))return this.addLabel(t,e);if(!o(t))return this;t=Ut.delayedCall(0,t)}return this!==t?za(this,t,e):this},t.getChildren=function getChildren(t,e,r,i){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===i&&(i=-R);for(var n=[],a=this._first;a;)a._start>=i&&(a instanceof Ut?e&&n.push(a):(r&&n.push(a),t&&n.push.apply(n,a.getChildren(!0,e,r)))),a=a._next;return n},t.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},t.remove=function remove(t){return n(t)?this.removeLabel(t):o(t)?this.killTweensOf(t):(pa(this,t),t===this._recent&&(this._recent=this._last),ra(this))},t.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,this.parent||this._dp||!this._ts||(this._start=aa(Ot.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts))),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},t.addLabel=function addLabel(t,e){return this.labels[t]=Ga(this,e),this},t.removeLabel=function removeLabel(t){return delete this.labels[t],this},t.addPause=function addPause(t,e,r){var i=Ut.delayedCall(0,e||O,r);return i.data="isPause",this._hasPause=1,za(this,i,Ga(this,t))},t.removePause=function removePause(t){var e=this._first;for(t=Ga(this,t);e;)e._start===t&&"isPause"===e.data&&qa(e),e=e._next},t.killTweensOf=function killTweensOf(t,e,r){for(var i=this.getTweensOf(t,r),n=i.length;n--;)Lt!==i[n]&&i[n].kill(t,e);return this},t.getTweensOf=function getTweensOf(t,e){for(var r,i=[],n=yt(t),a=this._first;a;)a instanceof Ut?!ba(a._targets,n)||e&&!a.isActive("started"===e)||i.push(a):(r=a.getTweensOf(n,e)).length&&i.push.apply(i,r),a=a._next;return i},t.tweenTo=function tweenTo(t,e){e=e||{};var r=this,i=Ga(r,t),n=e.startAt,a=e.onStart,s=e.onStartParams,o=Ut.to(r,ha(e,{ease:"none",lazy:!1,time:i,duration:e.duration||Math.abs((i-(n&&"time"in n?n.time:r._time))/r.timeScale())||B,onStart:function onStart(){r.pause();var t=e.duration||Math.abs((i-r._time)/r.timeScale());o._dur!==t&&Da(o,t).render(o._time,!0,!0),a&&a.apply(o,s||[])}}));return o},t.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,ha({startAt:{time:Ga(this,t)}},r))},t.recent=function recent(){return this._recent},t.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),bb(this,Ga(this,t))},t.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),bb(this,Ga(this,t),1)},t.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+B)},t.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var i,n=this._first,a=this.labels;n;)n._start>=r&&(n._start+=t),n=n._next;if(e)for(i in a)a[i]>=r&&(a[i]+=t);return ra(this)},t.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return i.prototype.invalidate.call(this)},t.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._time=this._tTime=0,t&&(this.labels={}),ra(this)},t.totalDuration=function totalDuration(t){var e,r,i,n,a=0,s=this,o=s._last,u=R;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-t:t));if(s._dirty){for(n=s.parent;o;)e=o._prev,o._dirty&&o.totalDuration(),u<(i=o._start)&&s._sort&&o._ts&&!s._lock?(s._lock=1,za(s,o,i-o._delay,1)._lock=0):u=i,i<0&&o._ts&&(a-=i,(!n&&!s._dp||n&&n.smoothChildTiming)&&(s._start+=i/s._ts,s._time-=i,s._tTime-=i),s.shiftChildren(-i,!1,-1e20),u=0),a<(r=xa(o))&&o._ts&&(a=r),o=e;Da(s,s===F&&s._time>a?s._time:Math.min(R,a),1),s._dirty=0}return s._tDur},Timeline.updateRoot=function updateRoot(t){if(F._ts&&(ea(F,wa(t,F)),d=Ot.frame),Ot.frame>=ft){ft+=G.autoSleep||120;var e=F._first;if((!e||!e._ts)&&G.autoSleep&&Ot._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||Ot.sleep()}}},Timeline}(Et);ha(Bt.prototype,{_lock:0,_hasPause:0,_forcing:0});function Jb(t,e,i,a,s,u){var h,l,f,d;if(ht[t]&&!1!==(h=new ht[t]).init(s,h.rawVars?e[t]:function _processVars(t,e,i,a,s){if(o(t)&&(t=Yt(t,s,e,i,a)),!r(t)||t.style&&t.nodeType||H(t))return n(t)?Yt(t,s,e,i,a):t;var u,h={};for(u in t)h[u]=Yt(t[u],s,e,i,a);return h}(e[t],a,s,u,i),i,a,u)&&(i._pt=l=new ee(i._pt,s,t,0,1,h.render,h,0,h.priority),i!==c))for(f=i._ptLookup[i._targets.indexOf(s)],d=h._props.length;d--;)f[h._props[d]]=l;return h}var Lt,It=function _addPropTween(t,e,r,i,a,s,u,h,l){o(i)&&(i=i(a||0,t,s));var f,d=t[e],c="get"!==r?r:o(d)?l?t[e.indexOf("set")||!o(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():d,p=o(d)?l?Vt:jt:Xt;if(n(i)&&(~i.indexOf("random(")&&(i=$a(i)),"="===i.charAt(1)&&(i=parseFloat(c)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+(Ja(c)||0))),c!==i)return isNaN(c+i)?(d||e in t||L(e,i),function _addComplexStringPropTween(t,e,r,i,n,a,s){var o,u,h,l,f,d,c,p,_=new ee(this._pt,t,e,0,1,Qt,null,n),m=0,g=0;for(_.b=r,_.e=i,r+="",(c=~(i+="").indexOf("random("))&&(i=$a(i)),a&&(a(p=[r,i],t,e),r=p[0],i=p[1]),u=r.match(et)||[];o=et.exec(i);)l=o[0],f=i.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(d=parseFloat(u[g-1])||0,_._pt={_next:_._pt,p:f||1===g?f:",",s:d,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-d,m:h&&h<4?Math.round:0},m=et.lastIndex);return _.c=m<i.length?i.substring(m,i.length):"",_.fp=s,(it.test(i)||c)&&(_.e=0),this._pt=_}.call(this,t,e,c,i,p,h||G.stringFilter,l)):(f=new ee(this._pt,t,e,+c||0,i-(c||0),"boolean"==typeof d?Ht:Jt,0,p),l&&(f.fp=l),u&&f.modifier(u,this,t),this._pt=f)},qt=function _initTween(t,e){var r,i,n,a,o,u,h,l,f,d,c,p,_=t.vars,m=_.ease,g=_.startAt,v=_.immediateRender,y=_.lazy,T=_.onUpdate,b=_.onUpdateParams,w=_.callbackScope,x=_.runBackwards,k=_.yoyoEase,M=_.keyframes,O=_.autoRevert,C=t._dur,P=t._startAt,A=t._targets,S=t.parent,z=S&&"nested"===S.data?S.parent._targets:A,D="auto"===t._overwrite,R=t.timeline;if(!R||M&&m||(m="none"),t._ease=Dt(m,E.ease),t._yEase=k?zt(Dt(!0===k?m:k,E.ease)):0,k&&t._yoyo&&!t._repeat&&(k=t._yEase,t._yEase=t._ease,t._ease=k),!R){if(P&&P.render(-1,!0).kill(),g){if(qa(t._startAt=Ut.set(A,ha({data:"isStart",overwrite:!1,parent:S,immediateRender:!0,lazy:s(y),startAt:null,delay:0,onUpdate:T,onUpdateParams:b,callbackScope:w,stagger:0},g))),v)if(0<e)O||(t._startAt=0);else if(C)return}else if(x&&C)if(P)O||(t._startAt=0);else if(e&&(v=!1),qa(t._startAt=Ut.set(A,pt(la(_,st),{overwrite:!1,data:"isFromStart",lazy:v&&s(y),immediateRender:v,stagger:0,parent:S}))),v){if(!e)return}else _initTween(t._startAt,B);for(r=la(_,st),p=(l=A[t._pt=0]?Z(A[0]).harness:0)&&_[l.prop],y=C&&s(y)||y&&!C,i=0;i<A.length;i++){if(h=(o=A[i])._gsap||Y(A)[i]._gsap,t._ptLookup[i]=d={},ut[h.id]&&da(),c=z===A?i:z.indexOf(o),l&&!1!==(f=new l).init(o,p||r,t,c,z)&&(t._pt=a=new ee(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){d[t]=a}),f.priority&&(u=1)),!l||p)for(n in r)ht[n]&&(f=Jb(n,r,t,c,o,z))?f.priority&&(u=1):d[n]=a=It.call(t,o,n,"get",r[n],c,z,0,_.stringFilter);t._op&&t._op[i]&&t.kill(o,t._op[i]),D&&t._pt&&(Lt=t,F.killTweensOf(o,d,"started"),Lt=0),t._pt&&y&&(ut[h.id]=1)}u&&te(t),t._onInit&&t._onInit(t)}t._from=!R&&!!_.runBackwards,t._onUpdate=T,t._initted=1},Yt=function _parseFuncOrString(t,e,r,i,a){return o(t)?t.call(e,r,i,a):n(t)&&~t.indexOf("random(")?$a(t):t},Nt=ct+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",Gt=(Nt+",id,stagger,delay,duration,paused").split(","),Ut=function(A){function Tween(t,e,i,n){var a;"number"==typeof e&&(i.duration=e,e=i,i=null);var o,h,l,f,d,c,_,m,g=(a=A.call(this,n?e:ma(e),i)||this).vars,v=g.duration,y=g.delay,T=g.immediateRender,b=g.stagger,w=g.overwrite,x=g.keyframes,k=g.defaults,C=a.parent,P=(H(t)?p(t[0]):"length"in e)?[t]:yt(t);if(a._targets=P.length?Y(P):M("GSAP target "+t+" not found. https://greensock.com",!G.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=w,x||b||u(v)||u(y)){if(e=a.vars,(o=a.timeline=new Bt({data:"nested",defaults:k||{}})).kill(),o.parent=_assertThisInitialized(a),x)ha(o.vars.defaults,{ease:"none"}),x.forEach(function(t){return o.to(P,t,">")});else{if(f=P.length,_=b?Qa(b):O,r(b))for(d in b)~Nt.indexOf(d)&&((m=m||{})[d]=b[d]);for(h=0;h<f;h++){for(d in l={},e)Gt.indexOf(d)<0&&(l[d]=e[d]);l.stagger=0,m&&pt(l,m),e.yoyoEase&&!e.repeat&&(l.yoyoEase=e.yoyoEase),c=P[h],l.duration=+Yt(v,_assertThisInitialized(a),h,c,P),l.delay=(+Yt(y,_assertThisInitialized(a),h,c,P)||0)-a._delay,!b&&1===f&&l.delay&&(a._delay=y=l.delay,a._start+=y,l.delay=0),o.to(c,l,_(h,c,P))}v=y=0}v||a.duration(v=o.duration())}else a.timeline=0;return!0===w&&(Lt=_assertThisInitialized(a),F.killTweensOf(P),Lt=0),C&&ya(C,_assertThisInitialized(a)),(T||!v&&!x&&a._start===C._time&&s(T)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(a))&&"nested"!==C.data)&&(a._tTime=-B,a.render(Math.max(0,-y))),a}_inheritsLoose(Tween,A);var t=Tween.prototype;return t.render=function render(t,e,r){var i,n,a,s,o,u,h,l,f,d=this._time,c=this._tDur,p=this._dur,_=c-B<t&&0<=t?c:t<B?0:t;if(p){if(_!==this._tTime||!t||r||this._startAt&&this._zTime<0!=t<0){if(i=_,l=this.timeline,this._repeat){if(s=p+this._rDelay,(p<(i=aa(_%s))||c===_)&&(i=p),(a=~~(_/s))&&a===_/s&&(i=p,a--),(u=this._yoyo&&1&a)&&(f=this._yEase,i=p-i),o=_t(this._tTime,s),i===d&&!r&&this._initted)return this;a!==o&&(!this.vars.repeatRefresh||u||this._lock||(this._lock=r=1,this.render(s*a,!0).invalidate()._lock=0))}if(!this._initted){if(Aa(this,i,r,e))return this._tTime=0,this;if(p!==this._dur)return this.render(t,e,r)}for(this._tTime=_,this._time=i,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(i/p),this._from&&(this.ratio=h=1-h),d||!i||e||bt(this,"onStart"),n=this._pt;n;)n.r(h,n.d),n=n._next;l&&l.render(t<0?t:!i&&u?-B:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),bt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&bt(this,"onRepeat"),_!==this._tDur&&_||this._tTime!==_||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,r),!t&&p||!(t&&0<this._ts||!_&&this._ts<0)||qa(this,1),e||t<0&&!d||_<c&&0<this.timeScale()||(bt(this,_===c?"onComplete":"onReverseComplete",!0),this._prom&&this._prom()))}}else!function _renderZeroDurationTween(t,e,r,i){var n,a=t._zTime<0?0:1,s=e<0?0:1,o=t._rDelay,u=0;if(o&&t._repeat&&(u=gt(0,t._tDur,e),_t(u,o)!==_t(t._tTime,o)&&(a=1-s,t.vars.repeatRefresh&&t._initted&&t.invalidate())),(t._initted||!Aa(t,e,i,r))&&(s!==a||i||t._zTime===B||!e&&t._zTime)){for(t._zTime=e||(r?B:0),t.ratio=s,t._from&&(s=1-s),t._time=0,t._tTime=u,r||bt(t,"onStart"),n=t._pt;n;)n.r(s,n.d),n=n._next;!s&&t._startAt&&!t._onUpdate&&t._start&&t._startAt.render(e,!0,i),t._onUpdate&&(r||bt(t,"onUpdate")),u&&t._repeat&&!r&&t.parent&&bt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===s&&(t.ratio&&qa(t,1),r||(bt(t,t.ratio?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}}(this,t,e,r);return this},t.targets=function targets(){return this._targets},t.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._act=this._lazy=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),A.prototype.invalidate.call(this)},t.kill=function kill(t,e){if(void 0===e&&(e="all"),!(t||e&&"all"!==e)&&(this._lazy=0,this.parent))return db(this);if(this.timeline)return this.timeline.killTweensOf(t,e,Lt&&!0!==Lt.vars.overwrite),this;var r,i,a,s,o,u,h,l=this._targets,f=t?yt(t):l,d=this._ptLookup,c=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,i=r===e.length;i&&r--&&t[r]===e[r];);return r<0}(l,f))return db(this);for(r=this._op=this._op||[],"all"!==e&&(n(e)&&(o={},_(e,function(t){return o[t]=1}),e=o),e=function _addAliasesToVars(t,e){var r,i,n,a,s=t[0]?Z(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(i in r=pt({},e),o)if(i in r)for(n=(a=o[i].split(",")).length;n--;)r[a[n]]=r[i];return r}(l,e)),h=l.length;h--;)if(~f.indexOf(l[h]))for(o in i=d[h],"all"===e?(r[h]=e,s=i,a={}):(a=r[h]=r[h]||{},s=e),s)(u=i&&i[o])&&("kill"in u.d&&!0!==u.d.kill(o)||pa(this,u,"_pt"),delete i[o]),"all"!==a&&(a[o]=1);return this._initted&&!this._pt&&c&&db(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return new Tween(t,ca(arguments,1))},Tween.delayedCall=function delayedCall(t,e,r,i){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:i})},Tween.fromTo=function fromTo(t,e,r){return new Tween(t,ca(arguments,2))},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return F.killTweensOf(t,e,r)},Tween}(Et);ha(Ut.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),_("staggerTo,staggerFrom,staggerFromTo",function(r){Ut[r]=function(){var t=new Bt,e=vt.call(arguments,0);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function Ub(t,e,r){return t.setAttribute(e,r)}function ac(t,e,r,i){i.mSet(t,e,i.m.call(i.tween,r,i.mt),i)}var Xt=function _setterPlain(t,e,r){return t[e]=r},jt=function _setterFunc(t,e,r){return t[e](r)},Vt=function _setterFuncWithParam(t,e,r,i){return t[e](i.fp,r)},Zt=function _getSetter(t,e){return o(t[e])?jt:q(t[e])&&t.setAttribute?Ub:Xt},Jt=function _renderPlain(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4,e)},Ht=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Qt=function _renderComplexString(t,e){var r=e._pt,i="";if(!t&&e.b)i=e.b;else if(1===t&&e.e)i=e.e;else{for(;r;)i=r.p+(r.m?r.m(r.s+r.c*t):Math.round(1e4*(r.s+r.c*t))/1e4)+i,r=r._next;i+=e.c}e.set(e.t,e.p,i,e)},$t=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},Wt=function _addPluginModifier(t,e,r,i){for(var n,a=this._pt;a;)n=a._next,a.p===i&&a.modifier(t,e,r),a=n},Kt=function _killPropTweensOf(t){for(var e,r,i=this._pt;i;)r=i._next,i.p===t&&!i.op||i.op===t?pa(this,i,"_pt"):i.dep||(e=1),i=r;return!e},te=function _sortPropTweensByPriority(t){for(var e,r,i,n,a=t._pt;a;){for(e=a._next,r=i;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:n)?a._prev._next=a:i=a,(a._next=r)?r._prev=a:n=a,a=e}t._pt=i},ee=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=ac,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,i,n,a,s,o,u){this.t=e,this.s=i,this.c=n,this.p=r,this.r=a||Jt,this.d=s||this,this.set=o||Xt,this.pr=u||0,(this._next=t)&&(t._prev=this)}_(ct+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert",function(t){return st[t]=1}),at.TweenMax=at.TweenLite=Ut,at.TimelineLite=at.TimelineMax=Bt,F=new Bt({sortChildren:!1,defaults:E,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),G.stringFilter=ob;var re={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=o(t),i=e&&!r&&t.init?function(){this._props=[]}:t,n={init:O,render:$t,add:It,kill:Kt,modifier:Wt,rawVars:0},a={targetTest:0,get:0,getSetter:Zt,aliases:{},register:0};if(Ct(),t!==i){if(ht[e])return;ha(i,ha(la(t,n),a)),pt(i.prototype,pt(n,la(t,a))),ht[i.prop=e]=i,t.targetTest&&(dt.push(i),st[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}N(e,i),t.register&&t.register(ie,i,ee)}(t)})},timeline:function timeline(t){return new Bt(t)},getTweensOf:function getTweensOf(t,e){return F.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){n(i)&&(i=yt(i)[0]);var a=Z(i||{}).get,s=e?ga:fa;return"native"===e&&(e=""),i?t?s((ht[t]&&ht[t].get||a)(i,t,e,r)):function(t,e,r){return s((ht[t]&&ht[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,i){if(1<(r=yt(r)).length){var n=r.map(function(t){return ie.quickSetter(t,e,i)}),a=n.length;return function(t){for(var e=a;e--;)n[e](t)}}r=r[0]||{};var s=ht[e],o=Z(r),u=s?function(t){var e=new s;c._pt=0,e.init(r,i?t+i:t,c,0,[r]),e.render(1,e),c._pt&&$t(1,c)}:o.set(r,e);return s?u:function(t){return u(r,e,i?t+i:t,o,1)}},isTweening:function isTweening(t){return 0<F.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Dt(t.ease,E.ease)),ka(E,t||{})},config:function config(t){return ka(G,t||{})},registerEffect:function registerEffect(t){var n=t.name,i=t.effect,e=t.plugins,a=t.defaults,s=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ht[t]&&!at[t]&&M(n+" effect requires "+t+" plugin.")}),lt[n]=function(t,e,r){return i(yt(t),ha(e||{},a),r)},s&&(Bt.prototype[n]=function(t,e,i){return this.add(lt[n](t,r(e)?e:(i=e)&&{},this),i)})},registerEase:function registerEase(t,e){Pt[t]=Dt(e)},parseEase:function parseEase(t,e){return arguments.length?Dt(t,e):Pt},getById:function getById(t){return F.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,i,n=new Bt(t);for(n.smoothChildTiming=s(t.smoothChildTiming),F.remove(n),n._dp=0,n._time=n._tTime=F._time,r=F._first;r;)i=r._next,!e&&!r._dur&&r instanceof Ut&&r.vars.onComplete===r._targets[0]||za(n,r,r._start-r._delay),r=i;return za(F,n,0),n},utils:{wrap:function wrap(e,t,r){var i=t-e;return H(e)?Xa(e,wrap(0,e.length),t):Ha(r,function(t){return(i+(t-e)%i)%i+e})},wrapYoyo:function wrapYoyo(e,t,r){var i=t-e,n=2*i;return H(e)?Xa(e,wrapYoyo(0,e.length-1),t):Ha(r,function(t){return e+(i<(t=(n+(t-e)%n)%n)?n-t:t)})},distribute:Qa,random:Ta,snap:Sa,normalize:function normalize(t,e,r){return Tt(t,e,0,1,r)},getUnit:Ja,clamp:function clamp(e,r,t){return Ha(t,function(t){return gt(e,r,t)})},splitColor:jb,toArray:yt,mapRange:Tt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Ja(t))}},interpolate:function interpolate(e,r,t,i){var a=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!a){var s,o,u,h,l,f=n(e),d={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(H(e)&&!H(r)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=pt(H(e)?[]:{},e));if(!u){for(s in r)It.call(d,e,s,"get",r[s]);a=function func(t){return $t(t,d)||(f?e.p:e)}}}return Ha(t,a)},shuffle:Pa},install:K,effects:lt,ticker:Ot,updateRoot:Bt.updateRoot,plugins:ht,globalTimeline:F,core:{PropTween:ee,globals:N,Tween:Ut,Timeline:Bt,Animation:Et,getCache:Z,_removeLinkedListItem:pa}};_("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return re[t]=Ut[t]}),Ot.add(Bt.updateRoot),c=re.to({},{duration:0});function ec(t,e){for(var r=t._pt;r&&r.p!==e&&r.op!==e&&r.fp!==e;)r=r._next;return r}function gc(t,a){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(n(i)&&(e={},_(i,function(t){return e[t]=1}),i=e),a){for(r in e={},i)e[r]=a(i[r]);i=e}!function _addModifiers(t,e){var r,i,n,a=t._targets;for(r in e)for(i=a.length;i--;)(n=(n=t._ptLookup[i][r])&&n.d)&&(n._pt&&(n=ec(n,r)),n&&n.modifier&&n.modifier(e[r],t,a[i],r))}(t,i)}}}}var ie=re.registerPlugin({name:"attr",init:function init(t,e,r,i,n){for(var a in e)this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],i,n,0,0,a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r]||0,e[r])}},gc("roundProps",Ra),gc("modifiers"),gc("snap",Sa))||re;Ut.version=Bt.version=ie.version="3.2.6",f=1,t()&&Ct();function Rc(t,e){return e.set(e.t,e.p,Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Sc(t,e){return e.set(e.t,e.p,1===t?e.e:Math.round(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Tc(t,e){return e.set(e.t,e.p,t?Math.round(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function Uc(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function Vc(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function Wc(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function Xc(t,e,r){return t.style[e]=r}function Yc(t,e,r){return t.style.setProperty(e,r)}function Zc(t,e,r){return t._gsap[e]=r}function $c(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function _c(t,e,r,i,n){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(n,a)}function ad(t,e,r,i,n){var a=t._gsap;a[e]=r,a.renderTransform(n,a)}function ed(t,e){var r=ae.createElementNS?ae.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ae.createElement(t);return r.style?r:ae.createElement(t)}function fd(t,e,r){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Fe,"-$1").toLowerCase())||i.getPropertyValue(e)||!r&&fd(t,Ne(e)||e,1)||""}function id(){!function _windowExists(){return"undefined"!=typeof window}()||(ne=window,ae=ne.document,se=ae.documentElement,ue=ed("div")||{style:{}},he=ed("div"),Ie=Ne(Ie),qe=Ne(qe),ue.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fe=!!Ne("perspective"),oe=1)}function jd(t){var e,r=ed("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,a=this.style.cssText;if(se.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=jd}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),se.removeChild(r),this.style.cssText=a,e}function kd(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function ld(e){var r;try{r=e.getBBox()}catch(t){r=jd.call(e,!0)}return r&&(r.width||r.height)||e.getBBox===jd||(r=jd.call(e,!0)),!r||r.width||r.x||r.y?r:{x:+kd(e,["x","cx","x1"])||0,y:+kd(e,["y","cy","y1"])||0,width:0,height:0}}function md(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!ld(t))}function nd(t,e){if(e){var r=t.style;e in Se&&(e=Ie),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Fe,"-$1").toLowerCase())):r.removeAttribute(e)}}function od(t,e,r,i,n,a){var s=new ee(t._pt,e,r,0,1,a?Wc:Vc);return(t._pt=s).b=i,s.e=n,t._props.push(r),s}function qd(t,e,r,i){var n,a,s,o,u=parseFloat(r)||0,h=(r+"").trim().substr((u+"").length)||"px",l=ue.style,f=Ee.test(e),d="svg"===t.tagName.toLowerCase(),c=(d?"client":"offset")+(f?"Width":"Height"),p="px"===i,_="%"===i;return i===h||!u||Ge[i]||Ge[h]?u:("px"===h||p||(u=qd(t,e,r,"px")),o=t.getCTM&&md(t),_&&(Se[e]||~e.indexOf("adius"))?aa(u/(o?t.getBBox()[f?"width":"height"]:t[c])*100):(l[f?"width":"height"]=100+(p?h:i),a=~e.indexOf("adius")||"em"===i&&t.appendChild&&!d?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==ae&&a.appendChild||(a=ae.body),(s=a._gsap)&&_&&s.width&&f&&s.time===Ot.time?aa(u/s.width*100):(!_&&"%"!==h||(l.position=fd(t,"position")),a===t&&(l.position="static"),a.appendChild(ue),n=ue[c],a.removeChild(ue),l.position="absolute",f&&_&&((s=Z(a)).time=Ot.time,s.width=a[c]),aa(p?n*u/100:n&&u?100/n*u:0))))}function rd(t,e,r,i){var n;return oe||id(),e in Le&&"transform"!==e&&~(e=Le[e]).indexOf(",")&&(e=e.split(",")[0]),Se[e]&&"transform"!==e?(n=Ze(t,i),n="transformOrigin"!==e?n[e]:Je(fd(t,qe))+" "+n.zOrigin+"px"):(n=t.style[e])&&"auto"!==n&&!i&&!~(n+"").indexOf("calc(")||(n=Xe[e]&&Xe[e](t,e,r)||fd(t,e)||$(t,e)||("opacity"===e?1:0)),r&&!~(n+"").indexOf(" ")?qd(t,e,n,r)+r:n}function sd(t,e,r,i){if(!r||"none"===r){var n=Ne(e,t,1),a=n&&fd(t,n,1);a&&a!==r&&(e=n,r=a)}var s,o,u,h,l,f,d,c,p,_,m,g,v=new ee(this._pt,t.style,e,0,1,Qt),y=0,T=0;if(v.b=r,v.e=i,r+="","auto"===(i+="")&&(t.style[e]=i,i=fd(t,e)||i,t.style[e]=r),ob(s=[r,i]),i=s[1],u=(r=s[0]).match(tt)||[],(i.match(tt)||[]).length){for(;o=tt.exec(i);)d=o[0],p=i.substring(y,o.index),l?l=(l+1)%5:"rgba("!==p.substr(-5)&&"hsla("!==p.substr(-5)||(l=1),d!==(f=u[T++]||"")&&(h=parseFloat(f)||0,m=f.substr((h+"").length),(g="="===d.charAt(1)?+(d.charAt(0)+"1"):0)&&(d=d.substr(2)),c=parseFloat(d),_=d.substr((c+"").length),y=tt.lastIndex-_.length,_||(_=_||G.units[e]||m,y===i.length&&(i+=_,v.e+=_)),m!==_&&(h=qd(t,e,f,_)||0),v._pt={_next:v._pt,p:p||1===T?p:",",s:h,c:g?g*c:c-h,m:l&&l<4?Math.round:0});v.c=y<i.length?i.substring(y,i.length):""}else v.r="display"===e&&"none"===i?Wc:Vc;return it.test(i)&&(v.e=0),this._pt=v}function ud(t){var e=t.split(" "),r=e[0],i=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==i&&"right"!==i||(t=r,r=i,i=t),e[0]=Ue[r]||r,e[1]=Ue[i]||i,e.join(" ")}function vd(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,i,n,a=e.t,s=a.style,o=e.u,u=a._gsap;if("all"===o||!0===o)s.cssText="",i=1;else for(n=(o=o.split(",")).length;-1<--n;)r=o[n],Se[r]&&(i=1,r="transformOrigin"===r?qe:Ie),nd(a,r);i&&(nd(a,Ie),u&&(u.svg&&a.removeAttribute("transform"),Ze(a,1),u.uncache=1))}}function zd(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function Ad(t){var e=fd(t,Ie);return zd(e)?je:e.substr(7).match(W).map(aa)}function Bd(t,e){var r,i,n,a,s=t._gsap||Z(t),o=t.style,u=Ad(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(n=t.transform.baseVal.consolidate().matrix).a,n.b,n.c,n.d,n.e,n.f]).join(",")?je:u:(u!==je||t.offsetParent||t===se||s.svg||(n=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,i=t.nextSibling,se.appendChild(t)),u=Ad(t),n?o.display=n:nd(t,"display"),a&&(i?r.insertBefore(t,i):r?r.appendChild(t):se.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function Cd(t,e,r,i,n,a){var s,o,u,h=t._gsap,l=n||Bd(t,!0),f=h.xOrigin||0,d=h.yOrigin||0,c=h.xOffset||0,p=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],T=l[5],b=e.split(" "),w=parseFloat(b[0])||0,x=parseFloat(b[1])||0;r?l!==je&&(o=_*v-m*g)&&(u=w*(-m/o)+x*(_/o)-(_*T-m*y)/o,w=w*(v/o)+x*(-g/o)+(g*T-v*y)/o,x=u):(w=(s=ld(t)).x+(~b[0].indexOf("%")?w/100*s.width:w),x=s.y+(~(b[1]||b[0]).indexOf("%")?x/100*s.height:x)),i||!1!==i&&h.smooth?(y=w-f,T=x-d,h.xOffset=c+(y*_+T*g)-y,h.yOffset=p+(y*m+T*v)-T):h.xOffset=h.yOffset=0,h.xOrigin=w,h.yOrigin=x,h.smooth=!!i,h.origin=e,h.originIsAbsolute=!!r,t.style[qe]="0px 0px",a&&(od(a,h,"xOrigin",f,w),od(a,h,"yOrigin",d,x),od(a,h,"xOffset",c,h.xOffset),od(a,h,"yOffset",p,h.yOffset)),t.setAttribute("data-svg-origin",w+" "+x)}function Fd(t,e,r){var i=Ja(e);return aa(parseFloat(e)+parseFloat(qd(t,"x",r+"px",i)))+i}function Md(t,e,r,i,a,s){var o,u,h=360,l=n(a),f=parseFloat(a)*(l&&~a.indexOf("rad")?ze:1),d=s?f*s:f-i,c=i+d+"deg";return l&&("short"===(o=a.split("_")[1])&&(d%=h)!==d%180&&(d+=d<0?h:-h),"cw"===o&&d<0?d=(d+36e9)%h-~~(d/h)*h:"ccw"===o&&0<d&&(d=(d-36e9)%h-~~(d/h)*h)),t._pt=u=new ee(t._pt,e,r,i,d,Sc),u.e=c,u.u="deg",t._props.push(r),u}function Nd(t,e,r){var i,n,a,s,o,u,h,l=he.style,f=r._gsap;for(n in l.cssText=getComputedStyle(r).cssText+";position:absolute;display:block;",l[Ie]=e,ae.body.appendChild(he),i=Ze(he,1),Se)(a=f[n])!==(s=i[n])&&"perspective,force3D,transformOrigin,svgOrigin".indexOf(n)<0&&(o=Ja(a)!==(h=Ja(s))?qd(r,n,a,h):parseFloat(a),u=parseFloat(s),t._pt=new ee(t._pt,f,n,o,u-o,Rc),t._pt.u=h||0,t._props.push(n));ae.body.removeChild(he)}var ne,ae,se,oe,ue,he,le,fe,de=Pt.Power0,ce=Pt.Power1,pe=Pt.Power2,_e=Pt.Power3,me=Pt.Power4,ge=Pt.Linear,ve=Pt.Quad,ye=Pt.Cubic,Te=Pt.Quart,be=Pt.Quint,we=Pt.Strong,xe=Pt.Elastic,ke=Pt.Back,Me=Pt.SteppedEase,Oe=Pt.Bounce,Ce=Pt.Sine,Pe=Pt.Expo,Ae=Pt.Circ,Se={},ze=180/Math.PI,De=Math.PI/180,Re=Math.atan2,Fe=/([A-Z])/g,Ee=/(?:left|right|width|margin|padding|x)/i,Be=/[\\s,\\(]\\S/,Le={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ie="transform",qe=Ie+"Origin",Ye="O,Moz,ms,Ms,Webkit".split(","),Ne=function _checkPropPrefix(t,e,r){var i=(e||ue).style,n=5;if(t in i&&!r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(Ye[n]+t in i););return n<0?null:(3===n?"ms":0<=n?Ye[n]:"")+t},Ge={deg:1,rad:1,turn:1},Ue={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Xe={clearProps:function clearProps(t,e,r,i,n){if("isFromStart"!==n.data){var a=t._pt=new ee(t._pt,e,r,0,0,vd);return a.u=i,a.pr=-10,a.tween=n,t._props.push(r),1}}},je=[1,0,0,1,0,0],Ve={},Ze=function _parseTransform(t,e){var r=t._gsap||new Ft(t);if("x"in r&&!e&&!r.uncache)return r;var i,n,a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,T,b,w,x,k,M,O,C,P,A,S,z,D,R,F,E=t.style,B=r.scaleX<0,L="deg",I=fd(t,qe)||"0";return i=n=a=u=h=l=f=d=c=0,s=o=1,r.svg=!(!t.getCTM||!md(t)),m=Bd(t,r.svg),r.svg&&(O=!r.uncache&&t.getAttribute("data-svg-origin"),Cd(t,O||I,!!O||r.originIsAbsolute,!1!==r.smooth,m)),p=r.xOrigin||0,_=r.yOrigin||0,m!==je&&(T=m[0],b=m[1],w=m[2],x=m[3],i=k=m[4],n=M=m[5],6===m.length?(s=Math.sqrt(T*T+b*b),o=Math.sqrt(x*x+w*w),u=T||b?Re(b,T)*ze:0,(f=w||x?Re(w,x)*ze+u:0)&&(o*=Math.cos(f*De)),r.svg&&(i-=p-(p*T+_*w),n-=_-(p*b+_*x))):(F=m[6],D=m[7],A=m[8],S=m[9],z=m[10],R=m[11],i=m[12],n=m[13],a=m[14],h=(g=Re(F,z))*ze,g&&(O=k*(v=Math.cos(-g))+A*(y=Math.sin(-g)),C=M*v+S*y,P=F*v+z*y,A=k*-y+A*v,S=M*-y+S*v,z=F*-y+z*v,R=D*-y+R*v,k=O,M=C,F=P),l=(g=Re(-w,z))*ze,g&&(v=Math.cos(-g),R=x*(y=Math.sin(-g))+R*v,T=O=T*v-A*y,b=C=b*v-S*y,w=P=w*v-z*y),u=(g=Re(b,T))*ze,g&&(O=T*(v=Math.cos(g))+b*(y=Math.sin(g)),C=k*v+M*y,b=b*v-T*y,M=M*v-k*y,T=O,k=C),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=aa(Math.sqrt(T*T+b*b+w*w)),o=aa(Math.sqrt(M*M+F*F)),g=Re(k,M),f=2e-4<Math.abs(g)?g*ze:0,c=R?1/(R<0?-R:R):0),r.svg&&(m=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!zd(fd(t,Ie)),m&&t.setAttribute("transform",m))),90<Math.abs(f)&&Math.abs(f)<270&&(B?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=((r.xPercent=i&&Math.round(t.offsetWidth/2)===Math.round(-i)?-50:0)?0:i)+"px",r.y=((r.yPercent=n&&Math.round(t.offsetHeight/2)===Math.round(-n)?-50:0)?0:n)+"px",r.z=a+"px",r.scaleX=aa(s),r.scaleY=aa(o),r.rotation=aa(u)+L,r.rotationX=aa(h)+L,r.rotationY=aa(l)+L,r.skewX=f+L,r.skewY=d+L,r.transformPerspective=c+"px",(r.zOrigin=parseFloat(I.split(" ")[2])||0)&&(E[qe]=Je(I)),r.xOffset=r.yOffset=0,r.force3D=G.force3D,r.renderTransform=r.svg?tr:fe?Ke:He,r.uncache=0,r},Je=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},He=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Ke(t,e)},Qe="0deg",$e="0px",We=") ",Ke=function _renderCSSTransforms(t,e){var r=e||this,i=r.xPercent,n=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,d=r.skewY,c=r.scaleX,p=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",T="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Qe||h!==Qe)){var b,w=parseFloat(h)*De,x=Math.sin(w),k=Math.cos(w);w=parseFloat(l)*De,b=Math.cos(w),a=Fd(g,a,x*b*-v),s=Fd(g,s,-Math.sin(w)*-v),o=Fd(g,o,k*b*-v+v)}_!==$e&&(y+="perspective("+_+We),(i||n)&&(y+="translate("+i+"%, "+n+"%) "),!T&&a===$e&&s===$e&&o===$e||(y+=o!==$e||T?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+We),u!==Qe&&(y+="rotate("+u+We),h!==Qe&&(y+="rotateY("+h+We),l!==Qe&&(y+="rotateX("+l+We),f===Qe&&d===Qe||(y+="skew("+f+", "+d+We),1===c&&1===p||(y+="scale("+c+", "+p+We),g.style[Ie]=y||"translate(0, 0)"},tr=function _renderSVGTransforms(t,e){var r,i,n,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,d=o.rotation,c=o.skewX,p=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,T=o.xOffset,b=o.yOffset,w=o.forceCSS,x=parseFloat(l),k=parseFloat(f);d=parseFloat(d),c=parseFloat(c),(p=parseFloat(p))&&(c+=p=parseFloat(p),d+=p),d||c?(d*=De,c*=De,r=Math.cos(d)*_,i=Math.sin(d)*_,n=Math.sin(d-c)*-m,a=Math.cos(d-c)*m,c&&(p*=De,s=Math.tan(c-p),n*=s=Math.sqrt(1+s*s),a*=s,p&&(s=Math.tan(p),r*=s=Math.sqrt(1+s*s),i*=s)),r=aa(r),i=aa(i),n=aa(n),a=aa(a)):(r=_,a=m,i=n=0),(x&&!~(l+"").indexOf("px")||k&&!~(f+"").indexOf("px"))&&(x=qd(g,"x",l,"px"),k=qd(g,"y",f,"px")),(v||y||T||b)&&(x=aa(x+v-(v*r+y*n)+T),k=aa(k+y-(v*i+y*a)+b)),(u||h)&&(s=g.getBBox(),x=aa(x+u/100*s.width),k=aa(k+h/100*s.height)),s="matrix("+r+","+i+","+n+","+a+","+x+","+k+")",g.setAttribute("transform",s),w&&(g.style[Ie]=s)};_("padding,margin,Width,Radius",function(e,r){var t="Right",i="Bottom",n="Left",o=(r<3?["Top",t,i,n]:["Top"+n,"Top"+t,i+t,i+n]).map(function(t){return r<2?e+t:"border"+t+e});Xe[1<r?"border"+e:e]=function(e,t,r,i,n){var a,s;if(arguments.length<4)return a=o.map(function(t){return rd(e,t,r)}),5===(s=a.join(" ")).split(a[0]).length?a[0]:s;a=(i+"").split(" "),s={},o.forEach(function(t,e){return s[t]=a[e]=a[e]||a[(e-1)/2|0]}),e.init(t,s,n)}});var er,rr,ir,nr={name:"css",register:id,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,i,n){var a,s,o,u,h,l,f,d,c,p,_,m,g,v,y,T=this._props,b=t.style;for(f in oe||id(),e)if("autoRound"!==f&&(s=e[f],!ht[f]||!Jb(f,e,r,i,t,n)))if(h=typeof s,l=Xe[f],"function"===h&&(h=typeof(s=s.call(r,i,t,n))),"string"===h&&~s.indexOf("random(")&&(s=$a(s)),l)l(this,t,f,s,r)&&(y=1);else if("--"===f.substr(0,2))this.add(b,"setProperty",getComputedStyle(t).getPropertyValue(f)+"",s+"",i,n,0,0,f);else{if(a=rd(t,f),u=parseFloat(a),(p="string"===h&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),f in Le&&("autoAlpha"===f&&(1===u&&"hidden"===rd(t,"visibility")&&o&&(u=0),od(this,b,"visibility",u?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==f&&"transform"!==f&&~(f=Le[f]).indexOf(",")&&(f=f.split(",")[0])),_=f in Se)if(m||((g=t._gsap).renderTransform||Ze(t),v=!1!==e.smoothOrigin&&g.smooth,(m=this._pt=new ee(this._pt,b,Ie,0,1,g.renderTransform,g,0,-1)).dep=1),"scale"===f)this._pt=new ee(this._pt,g,"scaleY",g.scaleY,p?p*o:o-g.scaleY),T.push("scaleY",f),f+="X";else{if("transformOrigin"===f){s=ud(s),g.svg?Cd(t,s,0,v,0,this):((c=parseFloat(s.split(" ")[2])||0)!==g.zOrigin&&od(this,g,"zOrigin",g.zOrigin,c),od(this,b,f,Je(a),Je(s)));continue}if("svgOrigin"===f){Cd(t,s,1,v,0,this);continue}if(f in Ve){Md(this,g,f,u,s,p);continue}if("smoothOrigin"===f){od(this,g,"smooth",g.smooth,s);continue}if("force3D"===f){g[f]=s;continue}if("transform"===f){Nd(this,s,t);continue}}else f in b||(f=Ne(f)||f);if(_||(o||0===o)&&(u||0===u)&&!Be.test(s)&&f in b)(d=(a+"").substr((u+"").length))!==(c=(s+"").substr(((o=o||0)+"").length)||(f in G.units?G.units[f]:d))&&(u=qd(t,f,a,c)),this._pt=new ee(this._pt,_?g:b,f,u,p?p*o:o-u,"px"!==c||!1===e.autoRound||_?Rc:Uc),this._pt.u=c||0,d!==c&&(this._pt.b=a,this._pt.r=Tc);else if(f in b)sd.call(this,t,f,a,s);else{if(!(f in t)){L(f,s);continue}this.add(t,f,t[f],s,i,n)}T.push(f)}y&&te(this)},get:rd,aliases:Le,getSetter:function getSetter(t,e,r){var i=Le[e];return i&&i.indexOf(",")<0&&(e=i),e in Se&&e!==qe&&(t._gsap.x||rd(t,"x"))?r&&le===r?"scale"===e?$c:Zc:(le=r||{})&&("scale"===e?_c:ad):t.style&&!q(t.style[e])?Xc:~e.indexOf("-")?Yc:Zt(t,e)},core:{_removeProperty:nd,_getMatrix:Bd}};ie.utils.checkPrefix=Ne,ir=_((er="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(rr="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){Se[t]=1}),_(rr,function(t){G.units[t]="deg",Ve[t]=1}),Le[ir[13]]=er+","+rr,_("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");Le[e[1]]=ir[e[0]]}),_("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){G.units[t]="px"}),ie.registerPlugin(nr);var ar=ie.registerPlugin(nr)||ie,sr=ar.core.Tween;e.Back=ke,e.Bounce=Oe,e.CSSPlugin=nr,e.Circ=Ae,e.Cubic=ye,e.Elastic=xe,e.Expo=Pe,e.Linear=ge,e.Power0=de,e.Power1=ce,e.Power2=pe,e.Power3=_e,e.Power4=me,e.Quad=ve,e.Quart=Te,e.Quint=be,e.Sine=Ce,e.SteppedEase=Me,e.Strong=we,e.TimelineLite=Bt,e.TimelineMax=Bt,e.TweenLite=Ut,e.TweenMax=sr,e.default=ar,e.gsap=ar;if (typeof(window)==="undefined"||window!==e){Object.defineProperty(e,"__esModule",{value:!0})} else {delete e.default}});

`,Av=`/*!
 * MotionPathPlugin 3.3.0
 * https://greensock.com
 * 
 * @license Copyright 2020, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(t){"use strict";function p(t){return"string"==typeof t}function x(t,e,n,r){var a=t[e],o=1===r?6:subdivideSegment(a,n,r);if(o&&o+n+2<a.length)return t.splice(e,0,a.slice(0,n+o+2)),a.splice(0,n+o),1}function A(t,e){var n=t.length,r=t[n-1]||[],a=r.length;e[0]===r[a-2]&&e[1]===r[a-1]&&(e=r.concat(e.slice(2)),n--),t[n]=e}var M=/[achlmqstvz]|(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[0-9]/gi,R=/(?:(-)?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[0-9]/gi,L=/[\\+\\-]?\\d*\\.?\\d+e[\\+\\-]?\\d+/gi,r=/(^[#\\.][a-z]|[a-y][a-z])/i,F=Math.PI/180,s=180/Math.PI,W=Math.sin,U=Math.cos,H=Math.abs,Z=Math.sqrt,S=Math.atan2,B=1e8,l=function _isNumber(t){return"number"==typeof t},N={},_={},e=1e5,d=function _wrapProgress(t){return Math.round((t+B)%1*e)/e||(t<0?0:1)},C=function _round(t){return Math.round(t*e)/e||0},I=function _copyMetaData(t,e){return e.totalLength=t.totalLength,t.samples?(e.samples=t.samples.slice(0),e.lookup=t.lookup.slice(0),e.minLength=t.minLength,e.resolution=t.resolution):e.totalPoints=t.totalPoints,e};function getRawPath(t){var e,n=(t=p(t)&&r.test(t)&&document.querySelector(t)||t).getAttribute?t:0;return n&&(t=t.getAttribute("d"))?(n._gsPath||(n._gsPath={}),(e=n._gsPath[t])&&!e._dirty?e:n._gsPath[t]=stringToRawPath(t)):t?p(t)?stringToRawPath(t):l(t[0])?[t]:t:console.warn("Expecting a <path> element or an SVG path data string")}function reverseSegment(t){var e,n=0;for(t.reverse();n<t.length;n+=2)e=t[n],t[n]=t[n+1],t[n+1]=e;t.reversed=!t.reversed}var D={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"};function convertToPath(t,e){var n,r,a,o,i,s,l,h,u,g,f,p,c,d,m,v,x,y,P,w,b,M,L=t.tagName.toLowerCase(),T=.552284749831;return"path"!==L&&t.getBBox?(s=function _createPath(t,e){var n,r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=[].slice.call(t.attributes),o=a.length;for(e=","+e+",";-1<--o;)n=a[o].nodeName.toLowerCase(),e.indexOf(","+n+",")<0&&r.setAttributeNS(null,n,a[o].nodeValue);return r}(t,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),M=function _attrToObj(t,e){for(var n=e?e.split(","):[],r={},a=n.length;-1<--a;)r[n[a]]=+t.getAttribute(n[a])||0;return r}(t,D[L]),"rect"===L?(o=M.rx,i=M.ry,r=M.x,a=M.y,g=M.width-2*o,f=M.height-2*i,n=o||i?"M"+(v=(d=(c=r+o)+g)+o)+","+(y=a+i)+" V"+(P=y+f)+" C"+[v,w=P+i*T,m=d+o*T,b=P+i,d,b,d-(d-c)/3,b,c+(d-c)/3,b,c,b,p=r+o*(1-T),b,r,w,r,P,r,P-(P-y)/3,r,y+(P-y)/3,r,y,r,x=a+i*(1-T),p,a,c,a,c+(d-c)/3,a,d-(d-c)/3,a,d,a,m,a,v,x,v,y].join(",")+"z":"M"+(r+g)+","+a+" v"+f+" h"+-g+" v"+-f+" h"+g+"z"):"circle"===L||"ellipse"===L?(h="circle"===L?(o=i=M.r)*T:(o=M.rx,(i=M.ry)*T),n="M"+((r=M.cx)+o)+","+(a=M.cy)+" C"+[r+o,a+h,r+(l=o*T),a+i,r,a+i,r-l,a+i,r-o,a+h,r-o,a,r-o,a-h,r-l,a-i,r,a-i,r+l,a-i,r+o,a-h,r+o,a].join(",")+"z"):"line"===L?n="M"+M.x1+","+M.y1+" L"+M.x2+","+M.y2:"polyline"!==L&&"polygon"!==L||(n="M"+(r=(u=(t.getAttribute("points")+"").match(R)||[]).shift())+","+(a=u.shift())+" L"+u.join(","),"polygon"===L&&(n+=","+r+","+a+"z")),s.setAttribute("d",rawPathToString(s._gsRawPath=stringToRawPath(n))),e&&t.parentNode&&(t.parentNode.insertBefore(s,t),t.parentNode.removeChild(t)),s):t}function getRotationAtBezierT(t,e,n){var r,a=t[e],o=t[e+2],i=t[e+4];return a+=(o-a)*n,a+=((o+=(i-o)*n)-a)*n,r=o+(i+(t[e+6]-i)*n-o)*n-a,a=t[e+1],a+=((o=t[e+3])-a)*n,a+=((o+=((i=t[e+5])-o)*n)-a)*n,C(S(o+(i+(t[e+7]-i)*n-o)*n-a,r)*s)}function sliceRawPath(t,e,n){!function _isUndefined(t){return void 0===t}(n)||(n=1);var r=n<(e=e||0),a=Math.max(0,~~(H(n-e)-1e-8));if(r&&(r=n,n=e,e=r,r=1,a-=a?1:0),e<0||n<0){var o=1+~~Math.min(e,n);e+=o,n+=o}var i,s,l,h,u,g,f,p=function copyRawPath(t){for(var e=[],n=0;n<t.length;n++)e[n]=I(t[n],t[n].slice(0));return I(t,e)}(t.totalLength?t:cacheRawPathMeasurements(t)),c=1<n,d=getProgressData(p,e,N,!0),m=getProgressData(p,n,_),v=m.segment,y=d.segment,P=m.segIndex,w=d.segIndex,b=m.i,M=d.i,L=w===P,T=b===M&&L,R=L&&b<M||T&&d.t>m.t;if(c||a){if(x(p,w,M,d.t)&&(i=1,w++,T?R?m.t/=d.t:(m.t=(m.t-d.t)/(1-d.t),P++,b=0):w<=P+1&&!R&&(P++,L&&(b-=M))),m.t?x(p,P,b,m.t)&&(R&&i&&w++,r&&P++):(P--,r&&w--),h=[],g=1+(u=p.length)*a,f=w,r)for(g+=(u-(P=(P||u)-1)+w)%u,l=0;l<g;l++)A(h,p[f]),f=(f||u)-1;else for(g+=(u-w+P)%u,l=0;l<g;l++)A(h,p[f++%u]);p=h}else if(s=1===m.t?6:subdivideSegment(v,b,m.t),e!==n)for(i=subdivideSegment(y,M,T?d.t/m.t:d.t),L&&(s+=i),v.splice(b+s+2),(i||M)&&y.splice(0,M+i),l=p.length;l--;)(l<w||P<l)&&p.splice(l,1);else v.angle=getRotationAtBezierT(v,b+s,0),d=v[b+=s],m=v[b+1],v.length=v.totalLength=0,v.totalPoints=p.totalPoints=8,v.push(d,m,d,m,d,m,d,m);return r&&function _reverseRawPath(t,e){var n=t.length;for(e||t.reverse();n--;)t[n].reversed||reverseSegment(t[n])}(p,c||a),p.totalLength=0,p}function measureSegment(t,e,n){e=e||0,t.samples||(t.samples=[],t.lookup=[]);var r,a,o,i,s,l,h,u,g,f,p,c,d,m,v,x,y,P=~~t.resolution||12,w=1/P,b=n?e+6*n+1:t.length,M=t[e],L=t[e+1],T=e?e/6*P:0,R=t.samples,S=t.lookup,N=(e?t.minLength:B)||B,_=R[T+n*P-1],C=e?R[T-1]:0;for(R.length=S.length=0,a=e+2;a<b;a+=6){if(o=t[a+4]-M,i=t[a+2]-M,s=t[a]-M,u=t[a+5]-L,g=t[a+3]-L,f=t[a+1]-L,l=h=p=c=0,H(o)<1e-5&&H(u)<1e-5&&H(s)+H(f)<1e-5)8<t.length&&(t.splice(a,6),a-=6,b-=6);else for(r=1;r<=P;r++)l=h-(h=((m=w*r)*m*o+3*(d=1-m)*(m*i+d*s))*m),p=c-(c=(m*m*u+3*d*(m*g+d*f))*m),(x=Z(p*p+l*l))<N&&(N=x),C+=x,R[T++]=C;M+=o,L+=u}if(_)for(_-=C;T<R.length;T++)R[T]+=_;if(R.length&&N)for(t.totalLength=y=R[R.length-1]||0,t.minLength=N,x=v=0,r=0;r<y;r+=N)S[x++]=R[v]<r?++v:v;else t.totalLength=R[0]=0;return e?C-R[e/2-1]:C}function cacheRawPathMeasurements(t,e){var n,r,a;for(a=n=r=0;a<t.length;a++)t[a].resolution=~~e||12,r+=t[a].length,n+=measureSegment(t[a]);return t.totalPoints=r,t.totalLength=n,t}function subdivideSegment(t,e,n){if(n<=0||1<=n)return 0;var r=t[e],a=t[e+1],o=t[e+2],i=t[e+3],s=t[e+4],l=t[e+5],h=r+(o-r)*n,u=o+(s-o)*n,g=a+(i-a)*n,f=i+(l-i)*n,p=h+(u-h)*n,c=g+(f-g)*n,d=s+(t[e+6]-s)*n,m=l+(t[e+7]-l)*n;return u+=(d-u)*n,f+=(m-f)*n,t.splice(e+2,4,C(h),C(g),C(p),C(c),C(p+(u-p)*n),C(c+(f-c)*n),C(u),C(f),C(d),C(m)),t.samples&&t.samples.splice(e/6*t.resolution|0,0,0,0,0,0,0,0),6}function getProgressData(t,e,n,r){n=n||{},t.totalLength||cacheRawPathMeasurements(t),(e<0||1<e)&&(e=d(e));var a,o,i,s,l,h,u,g=0,f=t[0];if(1<t.length){for(i=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<i;)g=h;e=(i-(s=l-(f=t[g]).totalLength))/(l-s)||0}return a=f.samples,o=f.resolution,i=f.totalLength*e,s=(h=f.lookup[~~(i/f.minLength)]||0)?a[h-1]:0,(l=a[h])<i&&(s=l,l=a[++h]),u=1/o*((i-s)/(l-s)+h%o),h=6*~~(h/o),r&&1===u&&(h+6<f.length?(h+=6,u=0):g+1<t.length&&(h=u=0,f=t[++g])),n.t=u,n.i=h,n.path=t,n.segment=f,n.segIndex=g,n}function getPositionOnPath(t,e,n,r){var a,o,i,s,l,h,u,g,f,p=t[0],c=r||{};if((e<0||1<e)&&(e=d(e)),1<t.length){for(i=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<i;)p=t[h];e=(i-(s=l-p.totalLength))/(l-s)||0}return a=p.samples,o=p.resolution,i=p.totalLength*e,s=(h=p.lookup[~~(i/p.minLength)]||0)?a[h-1]:0,(l=a[h])<i&&(s=l,l=a[++h]),f=1-(u=1/o*((i-s)/(l-s)+h%o)||0),g=p[h=6*~~(h/o)],c.x=C((u*u*(p[h+6]-g)+3*f*(u*(p[h+4]-g)+f*(p[h+2]-g)))*u+g),c.y=C((u*u*(p[h+7]-(g=p[h+1]))+3*f*(u*(p[h+5]-g)+f*(p[h+3]-g)))*u+g),n&&(c.angle=p.totalLength?getRotationAtBezierT(p,h,1<=u?1-1e-9:u||1e-9):p.angle||0),c}function transformRawPath(t,e,n,r,a,o,i){for(var s,l,h,u,g,f=t.length;-1<--f;)for(l=(s=t[f]).length,h=0;h<l;h+=2)u=s[h],g=s[h+1],s[h]=u*e+g*r+o,s[h+1]=u*n+g*a+i;return t._dirty=1,t}function arcToSegment(t,e,n,r,a,o,i,s,l){if(t!==s||e!==l){n=H(n),r=H(r);var h=a%360*F,u=U(h),g=W(h),f=Math.PI,p=2*f,c=(t-s)/2,d=(e-l)/2,m=u*c+g*d,v=-g*c+u*d,x=m*m,y=v*v,P=x/(n*n)+y/(r*r);1<P&&(n=Z(P)*n,r=Z(P)*r);var w=n*n,b=r*r,M=(w*b-w*y-b*x)/(w*y+b*x);M<0&&(M=0);var L=(o===i?-1:1)*Z(M),T=n*v/r*L,R=-r*m/n*L,S=u*T-g*R+(t+s)/2,N=g*T+u*R+(e+l)/2,_=(m-T)/n,C=(v-R)/r,A=(-m-T)/n,O=(-v-R)/r,B=_*_+C*C,I=(C<0?-1:1)*Math.acos(_/Z(B)),V=(_*O-C*A<0?-1:1)*Math.acos((_*A+C*O)/Z(B*(A*A+O*O)));isNaN(V)&&(V=f),!i&&0<V?V-=p:i&&V<0&&(V+=p),I%=p,V%=p;var D,z=Math.ceil(H(V)/(p/4)),E=[],G=V/z,j=4/3*W(G/2)/(1+U(G/2)),Y=u*n,k=g*n,q=g*-r,X=u*r;for(D=0;D<z;D++)m=U(a=I+D*G),v=W(a),_=U(a+=G),C=W(a),E.push(m-j*v,v+j*m,_+j*C,C-j*_,_,C);for(D=0;D<E.length;D+=2)m=E[D],v=E[D+1],E[D]=m*Y+v*q+S,E[D+1]=m*k+v*X+N;return E[D-2]=s,E[D-1]=l,E}}function stringToRawPath(t){function qf(t,e,n,r){u=(n-t)/3,g=(r-e)/3,s.push(t+u,e+g,n-u,r-g,n,r)}var e,n,r,a,o,i,s,l,h,u,g,f,p,c,d,m=(t+"").replace(L,function(t){var e=+t;return e<1e-4&&-1e-4<e?0:e}).match(M)||[],v=[],x=0,y=0,P=m.length,w=0,b="ERROR: malformed path: "+t;if(!t||!isNaN(m[0])||isNaN(m[1]))return console.log(b),v;for(e=0;e<P;e++)if(p=o,isNaN(m[e])?i=(o=m[e].toUpperCase())!==m[e]:e--,r=+m[e+1],a=+m[e+2],i&&(r+=x,a+=y),e||(l=r,h=a),"M"===o)s&&(s.length<8?--v.length:w+=s.length),x=l=r,y=h=a,s=[r,a],v.push(s),e+=2,o="L";else if("C"===o)i||(x=y=0),(s=s||[0,0]).push(r,a,x+1*m[e+3],y+1*m[e+4],x+=1*m[e+5],y+=1*m[e+6]),e+=6;else if("S"===o)u=x,g=y,"C"!==p&&"S"!==p||(u+=x-s[s.length-4],g+=y-s[s.length-3]),i||(x=y=0),s.push(u,g,r,a,x+=1*m[e+3],y+=1*m[e+4]),e+=4;else if("Q"===o)u=x+2/3*(r-x),g=y+2/3*(a-y),i||(x=y=0),x+=1*m[e+3],y+=1*m[e+4],s.push(u,g,x+2/3*(r-x),y+2/3*(a-y),x,y),e+=4;else if("T"===o)u=x-s[s.length-4],g=y-s[s.length-3],s.push(x+u,y+g,r+2/3*(x+1.5*u-r),a+2/3*(y+1.5*g-a),x=r,y=a),e+=2;else if("H"===o)qf(x,y,x=r,y),e+=1;else if("V"===o)qf(x,y,x,y=r+(i?y-x:0)),e+=1;else if("L"===o||"Z"===o)"Z"===o&&(r=l,a=h,s.closed=!0),("L"===o||.5<H(x-r)||.5<H(y-a))&&(qf(x,y,r,a),"L"===o&&(e+=2)),x=r,y=a;else if("A"===o){if(c=m[e+4],d=m[e+5],u=m[e+6],g=m[e+7],n=7,1<c.length&&(c.length<3?(g=u,u=d,n--):(g=d,u=c.substr(2),n-=2),d=c.charAt(1),c=c.charAt(0)),f=arcToSegment(x,y,+m[e+1],+m[e+2],+m[e+3],+c,+d,(i?x:0)+1*u,(i?y:0)+1*g),e+=n,f)for(n=0;n<f.length;n++)s.push(f[n]);x=s[s.length-2],y=s[s.length-1]}else console.log(b);return(e=s.length)<6?(v.pop(),e=0):s[0]===s[e-2]&&s[1]===s[e-1]&&(s.closed=!0),v.totalPoints=w+e,v}function flatPointsToSegment(t,e){void 0===e&&(e=1);for(var n=t[0],r=0,a=[n,r],o=2;o<t.length;o+=2)a.push(n,r,t[o],r=(t[o]-n)*e/2,n=t[o],-r);return a}function pointsToSegment(t,e,n){var r,a,o,i,s,l,h,u,g,f,p,c,d,m,v=t.length-2,x=+t[0],y=+t[1],P=+t[2],w=+t[3],b=[x,y,x,y],M=P-x,L=w-y,T=Math.abs(t[v]-x)<.001&&Math.abs(t[v+1]-y)<.001;for(isNaN(n)&&(n=Math.PI/10),T&&(t.push(P,w),P=x,w=y,x=t[v-2],y=t[v-1],t.unshift(x,y),v+=4),e=e||0===e?+e:1,s=2;s<v;s+=2)r=x,a=y,x=P,y=w,c=(l=M)*l+(u=L)*u,d=(M=(P=+t[s+2])-x)*M+(L=(w=+t[s+3])-y)*L,m=(h=P-r)*h+(g=w-a)*g,p=(o=Math.acos((c+d-m)/Z(4*c*d)))/Math.PI*e,f=Z(c)*p,p*=Z(d),x===r&&y===a||(n<o?(i=S(g,h),b.push(C(x-U(i)*f),C(y-W(i)*f),C(x),C(y),C(x+U(i)*p),C(y+W(i)*p))):(i=S(u,l),b.push(C(x-U(i)*f),C(y-W(i)*f)),i=S(L,M),b.push(C(x),C(y),C(x+U(i)*p),C(y+W(i)*p))));return b.push(C(P),C(w),C(P),C(w)),T&&(b.splice(0,6),b.length=b.length-6),b}function rawPathToString(t){l(t[0])&&(t=[t]);var e,n,r,a,o="",i=t.length;for(n=0;n<i;n++){for(a=t[n],o+="M"+C(a[0])+","+C(a[1])+" C",e=a.length,r=2;r<e;r++)o+=C(a[r++])+","+C(a[r++])+" "+C(a[r++])+","+C(a[r++])+" "+C(a[r++])+","+C(a[r])+" ";a.closed&&(o+="z")}return o}function O(t){var e=t.ownerDocument||t;!(w in t.style)&&"msTransform"in t.style&&(b=(w="msTransform")+"Origin");for(;e.parentNode&&(e=e.parentNode););if(f=window,y=new G,e){c=(g=e).documentElement,m=e.body;var n=e.createElement("div"),r=e.createElement("div");m.appendChild(n),n.appendChild(r),n.style.position="static",n.style[w]="translate3d(0,0,1px)",P=r.offsetParent!==n,m.removeChild(n)}return e}function T(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)}function V(t,e){if(t.parentNode&&(g||O(t))){var n=T(t),r=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",a=n?e?"rect":"g":"div",o=2!==e?0:100,i=3===e?100:0,s="position:absolute;display:block;pointer-events:none;",l=g.createElementNS?g.createElementNS(r.replace(/^https/,"http"),a):g.createElement(a);return e&&(n?(v=v||V(t),l.setAttribute("width",.01),l.setAttribute("height",.01),l.setAttribute("transform","translate("+o+","+i+")"),v.appendChild(l)):(u||((u=V(t)).style.cssText=s),l.style.cssText=s+"width:0.1px;height:0.1px;top:"+i+"px;left:"+o+"px",u.appendChild(l))),l}throw"Need document and parent."}function X(t,e){var n,r,a,o,i,s=T(t),l=t===s,h=s?z:E;if(t===f)return t;if(h.length||h.push(V(t,1),V(t,2),V(t,3)),n=s?v:u,s)a=l?{x:0,y:0}:t.getBBox(),i=(r=t.transform?t.transform.baseVal:{}).numberOfItems?(o=(r=1<r.numberOfItems?function _consolidate(t){for(var e=new G,n=0;n<t.numberOfItems;n++)e.multiply(t.getItem(n).matrix);return e}(r):r.getItem(0).matrix).a*a.x+r.c*a.y,r.b*a.x+r.d*a.y):(r=y,o=a.x,a.y),e&&"g"===t.tagName.toLowerCase()&&(o=i=0),n.setAttribute("transform","matrix("+r.a+","+r.b+","+r.c+","+r.d+","+(r.e+o)+","+(r.f+i)+")"),(l?s:t.parentNode).appendChild(n);else{if(o=i=0,P)for(r=t.offsetParent,a=t;(a=a&&a.parentNode)&&a!==r&&a.parentNode;)4<(f.getComputedStyle(a)[w]+"").length&&(o=a.offsetLeft,i=a.offsetTop,a=0);(a=n.style).top=t.offsetTop-i+"px",a.left=t.offsetLeft-o+"px",r=f.getComputedStyle(t),a[w]=r[w],a[b]=r[b],a.border=r.border,a.borderLeftStyle=r.borderLeftStyle,a.borderTopStyle=r.borderTopStyle,a.borderLeftWidth=r.borderLeftWidth,a.borderTopWidth=r.borderTopWidth,a.position="fixed"===r.position?"fixed":"absolute",t.parentNode.appendChild(n)}return n}function Y(t,e,n,r,a,o,i){return t.a=e,t.b=n,t.c=r,t.d=a,t.e=o,t.f=i,t}var g,f,c,m,u,v,y,P,n,w="transform",b=w+"Origin",z=[],E=[],G=((n=Matrix2D.prototype).inverse=function inverse(){var t=this.a,e=this.b,n=this.c,r=this.d,a=this.e,o=this.f,i=t*r-e*n;return Y(this,r/i,-e/i,-n/i,t/i,(n*o-r*a)/i,-(t*o-e*a)/i)},n.multiply=function multiply(t){var e=this.a,n=this.b,r=this.c,a=this.d,o=this.e,i=this.f,s=t.a,l=t.c,h=t.b,u=t.d,g=t.e,f=t.f;return Y(this,s*e+h*r,s*n+h*a,l*e+u*r,l*n+u*a,o+g*e+f*r,i+g*n+f*a)},n.clone=function clone(){return new Matrix2D(this.a,this.b,this.c,this.d,this.e,this.f)},n.equals=function equals(t){var e=this.a,n=this.b,r=this.c,a=this.d,o=this.e,i=this.f;return e===t.a&&n===t.b&&r===t.c&&a===t.d&&o===t.e&&i===t.f},n.apply=function apply(t,e){void 0===e&&(e={});var n=t.x,r=t.y,a=this.a,o=this.b,i=this.c,s=this.d,l=this.e,h=this.f;return e.x=n*a+r*i+l||0,e.y=n*o+r*s+h||0,e},Matrix2D);function Matrix2D(t,e,n,r,a,o){void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),void 0===r&&(r=1),void 0===a&&(a=0),void 0===o&&(o=0),Y(this,t,e,n,r,a,o)}function getGlobalMatrix(t,e,n){if(!t||!t.parentNode||(g||O(t)).documentElement===t)return new G;var r=T(t)?z:E,a=X(t,n),o=r[0].getBoundingClientRect(),i=r[1].getBoundingClientRect(),s=r[2].getBoundingClientRect(),l=a.parentNode,h=function _isFixed(t){return"fixed"===f.getComputedStyle(t).position||((t=t.parentNode)&&1===t.nodeType?_isFixed(t):void 0)}(t),u=new G((i.left-o.left)/100,(i.top-o.top)/100,(s.left-o.left)/100,(s.top-o.top)/100,o.left+(h?0:function _getDocScrollLeft(){return f.pageXOffset||g.scrollLeft||c.scrollLeft||m.scrollLeft||0}()),o.top+(h?0:function _getDocScrollTop(){return f.pageYOffset||g.scrollTop||c.scrollTop||m.scrollTop||0}()));return l.removeChild(a),e?u.inverse():u}function ga(t,e,n,r){for(var a=e.length,o=r,i=0;i<a;i++)t[o]=parseFloat(e[i][n]),o+=2;return t}function ha(t,e,n){return parseFloat(t._gsap.get(t,e,n||"px"))||0}function ia(t){var e,n=t[0],r=t[1];for(e=2;e<t.length;e+=2)n=t[e]+=n,r=t[e+1]+=r}function ja(t,e,n,r,a,o,i){return e="cubic"===i.type?[e]:(e.unshift(ha(n,r,i.unitX),a?ha(n,a,i.unitY):0),i.relative&&ia(e),[(a?pointsToSegment:flatPointsToSegment)(e,i.curviness)]),e=o(tt(e,n,i)),et(t,n,r,e,"x",i.unitX),a&&et(t,n,a,e,"y",i.unitY),cacheRawPathMeasurements(e,i.resolution||(0===i.curviness?20:12))}function ka(t){return t}function ma(t,e,n){var r,a,o,i=getGlobalMatrix(t);return"svg"===(t.tagName+"").toLowerCase()?(a=(r=t.viewBox.baseVal).x,o=r.y,r.width||(r={width:+t.getAttribute("width"),height:+t.getAttribute("height")})):(r=e&&t.getBBox&&t.getBBox(),a=o=0),e&&"auto"!==e&&(a+=e.push?e[0]*(r?r.width:t.offsetWidth||0):e.x,o+=e.push?e[1]*(r?r.height:t.offsetHeight||0):e.y),n.apply(a||o?i.apply({x:a,y:o}):{x:i.e,y:i.f})}function na(t,e,n,r){var a,o=getGlobalMatrix(t.parentNode,!0,!0),i=o.clone().multiply(getGlobalMatrix(e)),s=ma(t,n,o),l=ma(e,r,o),h=l.x,u=l.y;return i.e=i.f=0,"auto"===r&&e.getTotalLength&&"path"===e.tagName.toLowerCase()&&(a=e.getAttribute("d").match(K)||[],h+=(a=i.apply({x:+a[0],y:+a[1]})).x,u+=a.y),(a||e.getBBox&&t.getBBox)&&(h-=(a=i.apply(e.getBBox())).x,u-=a.y),i.e=h-s.x,i.f=u-s.y,i}var j,k,q,Q,$=["x","translateX","left","marginLeft"],J=["y","translateY","top","marginTop"],o=Math.PI/180,K=/[-+\\.]*\\d+[\\.e\\-\\+]*\\d*[e\\-\\+]*\\d*/g,tt=function _align(t,e,n){var r,a,o,i=n.align,s=n.matrix,l=n.offsetX,h=n.offsetY,u=n.alignOrigin,g=t[0][0],f=t[0][1],p=ha(e,"x"),c=ha(e,"y");return t&&t.length?(i&&("self"===i||(r=Q(i)[0]||e)===e?transformRawPath(t,1,0,0,1,p-g,c-f):(u&&!1!==u[2]?j.set(e,{transformOrigin:100*u[0]+"% "+100*u[1]+"%"}):u=[ha(e,"xPercent")/-100,ha(e,"yPercent")/-100],o=(a=na(e,r,u,"auto")).apply({x:g,y:f}),transformRawPath(t,a.a,a.b,a.c,a.d,p+a.e-(o.x-a.e),c+a.f-(o.y-a.f)))),s?transformRawPath(t,s.a,s.b,s.c,s.d,s.e,s.f):(l||h)&&transformRawPath(t,1,0,0,1,l||0,h||0),t):getRawPath("M0,0L0,0")},et=function _addDimensionalPropTween(t,e,n,r,a,o){var i=e._gsap,s=i.harness,l=s&&s.aliases&&s.aliases[n],h=l&&l.indexOf(",")<0?l:n,u=t._pt=new k(t._pt,e,h,0,0,ka,0,i.set(e,h,t));u.u=q(i.get(e,h,o))||0,u.path=r,u.pp=a,t._props.push(h)},a={version:"3.3.0",name:"motionPath",register:function register(t,e,n){q=(j=t).utils.getUnit,Q=j.utils.toArray,k=n},init:function init(t,e){if(!j)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;"object"==typeof e&&!e.style&&e.path||(e={path:e});var n,r,a,o,i=[],s=e.path,l=s[0],h=e.autoRotate,u=function _sliceModifier(e,n){return function(t){return e||1!==n?sliceRawPath(t,e,n):t}}(e.start,"end"in e?e.end:1);if(this.rawPaths=i,this.target=t,(this.rotate=h||0===h)&&(this.rOffset=parseFloat(h)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=t._gsap.set(t,this.rProp,this),this.ru=q(t._gsap.get(t,this.rProp))||0),!Array.isArray(s)||"closed"in s||"number"==typeof l)cacheRawPathMeasurements(n=u(tt(getRawPath(e.path),t,e)),e.resolution),i.push(n),et(this,t,e.x||"x",n,"x",e.unitX||"px"),et(this,t,e.y||"y",n,"y",e.unitY||"px");else{for(r in l)~$.indexOf(r)?a=r:~J.indexOf(r)&&(o=r);for(r in a&&o?i.push(ja(this,ga(ga([],s,a,0),s,o,1),t,e.x||a,e.y||o,u,e)):a=o=0,l)r!==a&&r!==o&&i.push(ja(this,ga([],s,r,0),t,r,0,u,e))}},render:function render(t,e){var n=e.rawPaths,r=n.length,a=e._pt;for(1<t?t=1:t<0&&(t=0);r--;)getPositionOnPath(n[r],t,!r&&e.rotate,n[r]);for(;a;)a.set(a.t,a.p,a.path[a.pp]+a.u,a.d,t),a=a._next;e.rotate&&e.rSet(e.target,e.rProp,n[0].angle*(e.radians?o:1)+e.rOffset+e.ru,e,t)},getLength:function getLength(t){return cacheRawPathMeasurements(getRawPath(t)).totalLength},sliceRawPath:sliceRawPath,getRawPath:getRawPath,pointsToSegment:pointsToSegment,stringToRawPath:stringToRawPath,rawPathToString:rawPathToString,transformRawPath:transformRawPath,getGlobalMatrix:getGlobalMatrix,getPositionOnPath:getPositionOnPath,cacheRawPathMeasurements:cacheRawPathMeasurements,convertToPath:function convertToPath$1(t,e){return Q(t).map(function(t){return convertToPath(t,!1!==e)})},convertCoordinates:function convertCoordinates(t,e,n){var r=getGlobalMatrix(e,!0,!0).multiply(getGlobalMatrix(t));return n?r.apply(n):r},getAlignMatrix:na,getRelativePosition:function getRelativePosition(t,e,n,r){var a=na(t,e,n,r);return{x:a.e,y:a.f}},arrayToRawPath:function arrayToRawPath(t,e){var n=ga(ga([],t,(e=e||{}).x||"x",0),t,e.y||"y",1);return e.relative&&ia(n),["cubic"===e.type?n:pointsToSegment(n,e.curviness)]}};!function _getGSAP(){return j||"undefined"!=typeof window&&(j=window.gsap)&&j.registerPlugin&&j}()||j.registerPlugin(a),t.MotionPathPlugin=a,t.default=a;if (typeof(window)==="undefined"||window!==t){Object.defineProperty(t,"__esModule",{value:!0})} else {delete t.default}});

`,Ev='gsap.to("#whole-island",{transformOrigin:"bottom center",y:-15,rotation:1,duration:1,ease:"sine.inOut",yoyo:true,repeat:-1});gsap.fromTo("#tree",{transformOrigin:"bottom center",rotation:-6},{transformOrigin:"bottom center",rotation:5,duration:2,ease:"sine.inOut",yoyo:true,repeat:-1});gsap.to("#leaf1",{transformOrigin:"center right",y:-3,duration:1,ease:"sine.inOut",yoyo:true,repeat:-1});gsap.fromTo("#leaf2",{transformOrigin:"bottom right",rotation:3},{transformOrigin:"bottom right",rotation:-4,x:-3,y:-3,duration:1,ease:"sine.inOut",yoyo:true,repeat:-1});gsap.to("#leaf3",{transformOrigin:"bottom center",rotation:-6,duration:1,ease:"sine.inOut",yoyo:true,repeat:-1});gsap.to("#leaf4",{transformOrigin:"bottom left",rotation:-6,y:-3,duration:1,ease:"sine.inOut",yoyo:true,repeat:-1});gsap.to("#leaf5",{transformOrigin:"top left",y:-3,duration:1,ease:"sine.inOut",yoyo:true,repeat:-1});gsap.to("#water-circle1",{transformOrigin:"center center",scaleX:1.2,duration:1,ease:"sine.inOut",yoyo:true,repeat:-1});gsap.to("#water-circle2",{transformOrigin:"center center",scaleX:0.8,duration:1,ease:"sine.inOut",yoyo:true,repeat:-1,delay:-0.5});gsap.fromTo("#tri-wave1",{x:-60},{x:20,duration:6,repeat:-1,ease:"none"});gsap.fromTo("#tri-wave2",{x:-10},{x:50,duration:6,repeat:-1,ease:"none"});gsap.fromTo("#tri-wave1>path, #tri-wave2>path",{scaleY:0},{scaleY:1,duration:1,repeat:-1,yoyo:true,transformOrigin:"bottom center"});gsap.fromTo("#sine-wave-group *",{x:0},{x:75,repeat:-1,duration:2,ease:"none"});gsap.fromTo("#sine-wave-group *",{scaleY:0.8,transformOrigin:"bottom center"},{scaleY:1.2,transformOrigin:"bottom center",repeat:-1,duration:1,yoyo:true,ease:"sine.inOut"});gsap.registerPlugin(MotionPathPlugin);gsap.set("#fish-path",{scaleY:1.3,scaleX:1.3,transformOrigin:"bottom left"});gsap.to("#fish",{duration:3,repeat:-1,repeatDelay:4,ease:"slow(0.3, 0.7, false)",immediateRender:true,motionPath:{path:"#fish-path",align:"#fish-path",alignOrigin:[0.5,0.5],autoRotate:true,start:0,end:1}});',Dv=`<svg viewBox="0 0 446 540" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" class="illustration">
<defs>
    <path id="wave-segment" d="M78.238,447.196C99.161,447.224 102.365,433.986 117.183,433.986C132.006,433.986 138.546,447.165 154.302,447.165C170.057,447.165 179.54,433.877 192.035,433.877C204.53,433.877 212.069,447.271 228.234,447.2L228.238,447.2L228.238,456.742L174.344,456.758L78.238,456.773L78.238,447.196Z" style="fill:rgb(186,228,240);"></path>
    <path id="fish-path" d="M13.805,497.326C13.805,497.384 14.676,454.6 14.676,454.6C15.117,447.421 27.398,371.652 61.333,371.652C95.268,371.652 105.059,451.758 105.059,454.992C105.059,458.227 106.846,496.252 106.846,496.252"></path>
</defs>
<g id="scene">
    <mask id="fish-mask">
        <rect x="0" y="291" width="230" height="122" style="fill:white;"></rect>
    </mask>
    <mask id="leaves">
        <path id="leaf3" d="M240.331,175.61C249.784,176.339 250.158,149.143 251.971,143.795C253.784,138.446 265.447,112.749 300.347,88.992C309.312,82.889 273.249,84.744 262.701,95.4C262.408,95.697 299.949,59.14 306.273,31.167C307.299,26.628 249.717,36.275 232.63,81.142C222.01,109.028 230.879,174.881 240.331,175.61Z" style="fill:white;"></path>
        <path id="leaf4" d="M235.235,178.598C230.936,186.776 266.297,154.023 318.903,172.056C323.277,173.556 316.664,157.916 303.38,150.707C300.853,149.335 357.48,165.86 365.744,172.947C369.234,175.941 366.977,149.035 343.343,139.012C342.972,138.854 395.083,146.153 405.989,149.98C402.419,131.963 371.178,102.148 331.289,103.467C302.148,104.431 250.238,129.248 235.235,178.598Z" style="fill:white;"></path>
        <path id="leaf5" d="M225.34,183.401C242.089,183.539 293.669,185.304 293.267,235.202C301.036,226.747 302.632,218.437 301.053,208.836C307.555,214.258 316.799,229.731 326.228,250.463C335.015,247.135 333.311,224.064 332.455,221.081C331.599,218.098 353.49,248.751 367.144,253.999C374.306,246.977 367.541,201.115 334.573,182.932C301.604,164.749 252.16,164.232 222.521,178.152C219.051,180.584 208.59,183.263 225.34,183.401Z" style="fill:white;"></path>
        <path id="leaf2" d="M258.286,187.293C240.185,184.835 213.891,161.373 191.899,150.057C181.762,144.841 155.131,147.377 152.51,147.063C149.889,146.749 160.892,131.003 174.394,130.585C148.357,121.905 126.027,133.793 123.824,131.978C121.622,130.162 125.177,116.202 149.97,106.951C148.994,105.186 114.646,110.911 94.891,95.692C89.271,91.895 124.581,66.427 144.554,68.645C164.527,70.862 192.389,70.409 230.889,143.333C236.093,156.138 252.386,169.599 252.386,169.599C259.636,174.413 265.589,189.696 258.286,187.293Z" style="fill:white;"></path>
        <path id="leaf1" d="M258.286,187.293C240.185,184.835 210.105,169.378 185.032,211.545C181.648,215.311 177.193,210.024 179.458,194.986C169.272,211.871 150.363,232.47 145.605,231.801C140.847,231.132 144.651,202.538 148.831,194.882C141.881,190.227 118.57,237.947 114.874,238.097C104.523,239.756 100.911,141.41 191.899,150.057C234.088,154.067 252.386,169.599 252.386,169.599C259.636,174.413 265.589,189.696 258.286,187.293Z" style="fill:white;"></path>
    </mask>
    <mask id="water-mask">
        <path id="water-mask" d="M357.315,457.852C357.437,447.646 336.649,432.68 329.793,430.146C322.936,427.612 314.374,428.513 238.56,428.513C162.746,428.513 145.106,431.336 137.885,433.152C120.949,437.411 109.195,447.259 109.195,458.368C109.195,465.163 130.018,472.394 230.463,472.394C330.908,472.394 357.193,468.059 357.315,457.852Z" style="fill:white;"></path>
    </mask>
    <ellipse id="water-circle1" cx="232.22" cy="476.77" rx="98.92" ry="27.85" fill="#12b2da"></ellipse>
    <ellipse id="water-circle2" cx="258.15" cy="505.32" rx="73.8" ry="18.22" fill="#12b2da"></ellipse>
    <g mask="url(#fish-mask)">
        <path mask="url(#fish-mask)" id="fish" d="M50.84 379.73a.82.82 0 001.19 1.08c4.62-3.66 8.38-6.75 12.4-6.27 4.93.6 7.64 4.13 11.17 7.58 3.54 3.46 12.51 5.33 15.32 1.09 2.81-4.25.94-12.5-3.43-15.8-4.1-3.11-15.71-5.28-23.96-.09a40.6 40.6 0 00-12.7 12.41z" fill="#0793b8"></path>
    </g>
    <g id="tri-wave2" fill="#2ec3ec">
        <path d="M32.73 413.4a1.27 1.27 0 012.05.01l21.54 29.41a1.27 1.27 0 01-1.02 2.02H12.03a1.27 1.27 0 01-1.02-2.02l21.72-29.41z"></path>
        <path d="M76.46 413.4a1.27 1.27 0 012.04.01l21.55 29.41a1.27 1.27 0 01-1.02 2.02H55.76a1.27 1.27 0 01-1.02-2.02l21.72-29.41z"></path>
        <path d="M120.35 413.4a1.27 1.27 0 012.04.01l21.55 29.41a1.27 1.27 0 01-1.03 2.02H99.66a1.27 1.27 0 01-1.02-2.02l21.72-29.41z"></path>
    </g>
    <g id="whole-island">
        <g id="tree">
            <g id="trunk">
                <path d="M213.22 300.79c5.11-16.37 25.14-63.35 19.41-78.67-2.73-6.27-5.74 4.48-7.08 6.09-1.33 1.61-9.85-17.34-13.5-17.37-3.66-.02-2.22 4.79-6.04 3.71-3.82-1.07-11.66-5.68-6.03-12.13 3.44-4.26-.36-7.98-7.01-8.9-6.66-.9 3.72-18.2 10.99-20.22 7.26-2 48.02-11.76 69.87 9.27 13.25 12.6 10.28 12.74 6.7 13.47-3.58.72-8.31-1.49-9.12.87-.81 2.36-.34 7.25-4.09 10.01s-13.19 6.65-12.11 8.26c1.08 1.6 15.9 56.5 2.36 89.27-18.8-.05-47.45 1.59-44.35-3.66z" fill="#e5b13b"></path>
                <path d="M255.2 215.18c.68 1-3.42-2-9.85-1.73-3.92.16-11.38 3.5-12.72 8.68-2.73-6.28-5.74 4.47-7.08 6.08-1.33 1.61-9.85-17.34-13.5-17.37-3.66-.02-7.84-13.08-14.36-16.05-4.95-2.25 16.2-13.42 28.46-12.84 7.91.37 33.58 2.68 42.53 8.4 4.54 2.9 3.46 5.03 1.77 12.55-1.34 5.94-16.32 10.67-15.24 12.28zM261.06 242.04c.85 5.74 1.55 12.04 1.92 18.54l-4.57 4.63-4.45-10.34-9.79 11.7-6.07-9.77-6.5 10.4-5.44-3.51c1.88-5.83 3.61-11.7 4.93-17.21l6.36-6.74 7.26 6.83 9.3-8.82 7.05 4.3z" fill="#f2e390"></path>
                <path d="M224.3 199.7c9.25-4.05 13.24 13.88 4.94 17.24-8.3 3.36-12.8-13.8-4.93-17.25zM247.78 186.94c5.3-8.59 18.79 3.88 13.88 11.37-4.91 7.5-18.4-4.05-13.88-11.37z" fill="#e5b13b"></path>
            </g>
            <g id="leaf-bg" mask="url(#leaves)">
                <path fill="#ABD25E" d="M52.91 2.99h386.67V280.6H52.91z"></path>
                <ellipse cx="236.41" cy="137.75" rx="125.06" ry="80.87" fill="#8cc751"></ellipse>
            </g>
        </g>
        <g id="island">
            <path id="island-dirt" d="M344.8 381.58c-3.22-6.65-224.38-19.67-224.1 12.27v9.44c0 23 7.75 44.2 20.79 61.13 2.87 4.2 177.12 3.56 182.8.64a99.87 99.87 0 0021.3-61.77c0-18.04.38-19.29-.78-21.7z" fill="#fed09d"></path>
            <path id="island-dirt1" d="M283.82 374.64c33.92 1.72 59.9 4.7 60.99 6.94 1.16 2.42.77 3.67.77 21.71a99.87 99.87 0 01-21.28 61.77c-1.62.83-16.96 1.48-38.1 1.88a340.61 340.61 0 002.05-37.63 333.1 333.1 0 00-4.43-54.67z" fill="#fbb381" fill-opacity=".97"></path>
            <path d="M258.9 393.96s-5.6 48.68-12 63.21c-6.39 14.53.83-57.2-7.37-76.36-8.21-19.16 19.36 13.15 19.36 13.15zM132.09 380.06s7.16 63.86 33.56 86.93c7.92.12 16.42.15 16.42.15s-29.56-66.88-25.57-83.3c-9.14-3.15-24.41-3.78-24.41-3.78z" fill="#fbb381"></path>
            <path id="Grass" d="M207.31 296.89c1.53-5.52 4.13-14.63 5.08-15.86 1.37-1.8 11.24 11.8 13 12.45 1.77.66 10.36-9.54 12.57-10.46 2.2-.92 13.4 10.9 15 11.69 1.6.79 15.09-13.1 16.87-12.77 1.2.22 1.9 10.6 2.47 17.92 60.25 15.2 73 64.26 73.43 88.25-3.87-.2-8.18 8.96-12.77 10.35-4.6 1.39-16.02-4.5-20.17-3.32-4.16 1.19-14.83 10.42-19.82 10.7-4.99.28-11.34-6.23-16-5.48-4.67.74-12.37 8.56-18.45 8.5-6.08-.08-9.08-6.6-15.72-6.59-6.65.03-16.76 8.65-20.3 9-3.54.37-12.63-10.06-17.24-9.74-4.62.32-13.67 8.36-18.57 8.2-4.91-.16-12.44-9.97-16.59-9.58-4.14.4-15.47 7.5-19.98 5.96-4.5-1.55-7.6-10.46-14.42-11.45-6.78-1-8.81 1.85-15.6 1.53.9-30.06 12.28-88.8 87.21-99.3z" fill="#8cc751"></path>
            <g id="grass-shapes">
                <path d="M187.54 351.45a1.26 1.26 0 011.9-.61l23.64 15.98a1.26 1.26 0 01-.31 2.24c-6.9 2.24-26.46 8.6-33.37 10.86a1.26 1.26 0 01-1.57-1.63l9.71-26.84zM246.08 320.07a1.26 1.26 0 011.97.2l15.04 24.27a1.26 1.26 0 01-1.2 1.91l-34.9-3.75a1.26 1.26 0 01-.76-2.12l19.85-20.51zM278.82 342.07c.04-.37.25-.72.58-.93.32-.22.72-.27 1.08-.15l26.67 8.65c.45.15.77.54.82 1 .06.47-.16.93-.57 1.2l-29.33 19.25c-.4.27-.91.28-1.32.05a1.2 1.2 0 01-.6-1.15l2.68-27.92z" fill="#bbd86a"></path>
                <path d="M295.38 308.3A90 90 0 01323.55 330l-43.68-5.05a1.63 1.63 0 01-1.32-.92c-.21-.49-.08-1.03.33-1.39l16.5-14.33z" fill="#78bb4d"></path>
                <path d="M164.06 311.45l6.7 5.53c.43.34.57.88.37 1.38-.2.5-.7.86-1.3.95l-19.9 2.83a85.74 85.74 0 0114.13-10.7z" fill="#bbd86a"></path>
                <path id="Grass1" d="M134.1 342.3l26.84-.64c.51-.02.99.2 1.22.55.23.35.19.77-.12 1.09l-18.3 18.9c-.24.25-.63.4-1.04.42-.42 0-.81-.13-1.07-.38l-11.92-11.2a94.53 94.53 0 014.4-8.75z" fill="#78bb4d"></path>
                <path d="M198.96 298.3l2.04 9.27c.09.39-.06.79-.37 1.03s-.74.29-1.1.11l-14.2-6.87c4.26-1.38 8.8-2.56 13.63-3.53z" fill="#bbd86a"></path>
                <path d="M331.63 375.4a.9.9 0 01-.56.38.9.9 0 01-.67-.1l-13.5-8.62a.54.54 0 01-.23-.64.84.84 0 01.62-.52l21.78-5.07c.3-.07.6 0 .79.19.18.18.2.44.06.67l-8.29 13.7zM208.4 334.54a.81.81 0 01-.69.12.81.81 0 01-.54-.44c-1.36-2.99-6.69-13.48-8.36-17.14a.74.74 0 01.12-.8.8.8 0 01.8-.24l21.68 5.65c.3.08.52.31.59.6a.74.74 0 01-.3.76c-3.23 2.38-10.65 9.55-13.3 11.49z" fill="#78bb4d"></path>
            </g>
        </g>
    </g>
    <path id="front-water" d="M357.31 457.85c-.49-8.02-19.23-9.86-34.35-8.83-7.3.5-11.12 5.67-86.93 5.67-75.82 0-101.03-6.83-109.88-6.76-7.44.06-16.96 3.64-16.96 10.44 0 6.8 20.83 14.02 121.27 14.02 100.45 0 127.48-4.35 126.85-14.54z" fill="#bae4f0"></path>
    <g id="tri-wave1" fill="#2ec3ec">
        <path d="M366.29 502.93a1.27 1.27 0 012.04 0l21.55 29.42a1.27 1.27 0 01-1.03 2.02h-43.27a1.27 1.27 0 01-1.01-2.02l21.72-29.42z"></path>
        <path d="M322.56 502.93a1.27 1.27 0 012.04 0l21.55 29.42a1.27 1.27 0 01-1.02 2.02h-43.27a1.27 1.27 0 01-1.02-2.02l21.72-29.42zM410.18 502.93a1.27 1.27 0 012.04 0l21.54 29.42a1.27 1.27 0 01-1.02 2.02h-43.27a1.27 1.27 0 01-1.02-2.02l21.73-29.42z"></path>
    </g>
    <g mask="url(#water-mask)" id="sine-wave-group">
        <use href="#wave-segment" id="wave-segment-0" x="-150"></use>
        <use href="#wave-segment" id="wave-segment-1"></use>
        <use href="#wave-segment" id="wave-segment-2" x="150"></use>
        <use href="#wave-segment" id="wave-segment-3" x="3000"></use>
    </g>
</g></svg>`,fh=({className:l,style:u,active:d=!0})=>{const o=_.useRef(null),p=_.useRef(null);return _.useEffect(()=>{if(!o.current)return;const f=document.createElement("script");f.textContent=wv,o.current.appendChild(f);const g=document.createElement("script");g.textContent=Av,o.current.appendChild(g);const v=document.createElement("script");return v.textContent=Ev,o.current.appendChild(v),()=>{f.remove(),g.remove(),v.remove()}},[]),_.useEffect(()=>{if(!p.current||!o.current)return;const f=o.current,g=f.getBoundingClientRect(),v=Math.ceil(Math.hypot(g.width,g.height)/2)+50,m=Math.max(.1,v/1500);d?(f.classList.remove(hl.closing),f.style.transition="",f.style.setProperty("--mask-r","0px"),f.style.display="flex"):(f.classList.add(hl.closing),f.style.transition="",f.style.setProperty("--mask-r","0px"),f.offsetHeight,f.style.transition=`--mask-r ${m}s linear`,f.style.setProperty("--mask-r",`${v}px`),setTimeout(()=>{o.current&&(o.current.style.display="none")},m*1e3))},[d]),D.jsx("div",{ref:p,className:hl.wrapper,children:D.jsx("div",{ref:o,className:`${hl.container} ${l||""}`,style:u,children:D.jsx("div",{dangerouslySetInnerHTML:{__html:Dv}})})})};fh.displayName="Loading";const Rv="animal-wrapper-LJBly",Mv="animal-scrollable-5Wnhh",Lv="animal-table-Os4fM",Ov="animal-thead-2ge5M",kv="animal-headerRow-sAsWX",Bv="animal-headerCell-LhL6h",Nv="animal-tbody-3RGsp",zv="animal-row-iDOMw",Uv="animal-cell-4PAU2",jv="animal-striped-8Ih-N",Gv="animal-emptyCell--stiv",Pv="animal-emptyContent-JrC1j",Hv="animal-emptyIcon-SNcRm",Vv="animal-loading-mPt0l",Iv="animal-loadingOverlay-PMW6Z",qv="animal-loadingSpinner-KZEsv",Ze={wrapper:Rv,scrollable:Mv,table:Lv,thead:Ov,headerRow:kv,headerCell:Bv,tbody:Nv,row:zv,cell:Uv,striped:jv,emptyCell:Gv,emptyContent:Pv,emptyIcon:Hv,loading:Vv,loadingOverlay:Iv,loadingSpinner:qv},Fv=({columns:l=[],dataSource:u=[],rowKey:d="key",striped:o=!0,showHeader:p=!0,rowClassName:f,onRow:g,loading:v=!1,emptyText:m="暂无数据",scroll:h,className:w,style:S})=>{const k=(L,O)=>typeof d=="function"?d(L):L[d]||String(O),H=(L,O)=>{const j=[Ze.row];return o&&O%2===1&&j.push(Ze.striped),f&&(typeof f=="function"?j.push(f(L,O)):j.push(f)),j.join(" ")},q=(L,O,j)=>{const F=L.dataIndex?O[L.dataIndex]:void 0;return L.render?L.render(F,O,j):F},P=[Ze.table,v&&Ze.loading,w].filter(Boolean).join(" "),G=[Ze.wrapper,h&&Ze.scrollable].filter(Boolean).join(" ");return D.jsxs("div",{className:G,style:S,children:[D.jsxs("table",{className:P,children:[p&&D.jsx("thead",{className:Ze.thead,children:D.jsx("tr",{className:Ze.headerRow,children:l.map((L,O)=>D.jsx("th",{className:Ze.headerCell,style:{width:L.width,textAlign:L.align||"left",...L.style},children:L.title},O))})}),D.jsx("tbody",{className:Ze.tbody,children:u.length===0?D.jsx("tr",{children:D.jsx("td",{colSpan:l.length,className:Ze.emptyCell,children:D.jsxs("div",{className:Ze.emptyContent,children:[D.jsx("svg",{className:Ze.emptyIcon,viewBox:"0 0 24 24",width:"48",height:"48",children:D.jsx("path",{fill:"currentColor",d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"})}),D.jsx("span",{children:m})]})})}):u.map((L,O)=>D.jsx("tr",{className:H(L,O),...g==null?void 0:g(L,O),children:l.map((j,F)=>D.jsx("td",{className:Ze.cell,style:{textAlign:j.align||"left",...j.style},children:q(j,L,O)},F))},k(L,O)))})]}),v&&D.jsx("div",{className:Ze.loadingOverlay,children:D.jsx("div",{className:Ze.loadingSpinner,children:D.jsx("svg",{viewBox:"0 0 50 50",width:"40",height:"40",children:D.jsx("circle",{cx:"25",cy:"25",r:"20",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeDasharray:"31.4 31.4"})})})})]})};Fv.displayName="Table";const M2="default",L2="默认分类",jp=[{id:"wp-1",tags:["Linux"],categoryId:"linux",title:"WordPress博客搭建",date:"2024-04-08",cover:"🐧",excerpt:"一、前言 大多数人都用过一些社交平台的博客，比如童年的QQ空间，然后就是微博.作为一名程序员之前用过CSDN发表过几篇文章，但是懂得都懂，这些平台的博客都不能自己去独立设置，所有想自己搭建个人博客，网上有很多开源的博客系统，最终选择了wor...",sections:[{heading:"一、前言",paragraphs:["大多数人都用过一些社交平台的博客，比如童年的`QQ空间`，然后就是微博.作为一名程序员之前用过`CSDN`发表过几篇文章，但是懂得都懂，这些平台的博客都不能自己去独立设置，所有想自己搭建个人博客，网上有很多开源的博客系统，最终选择了[wordPess](https://cn.wordpress.org/)博客系统搭建."]},{heading:"二、准备工作",paragraphs:["搭建博客前期的准备的内容:","-   服务器: 网上的云服务器有许多，如阿里云、腾讯云、华为云等等，个人喜欢阿里云一点，所有就在阿里云买了一个`ecs`的服务器.具体的购买服务器等操作可以去网上搜索一下.\n-   域名和`ICP`备案: 域名现在都比较便宜，几块钱就能租个一年(记得解析域名).但是买完域名后一定要在`ICP`备案（这些都可以在阿里云进行）,如果没有备案的话，配置域名的网页是无法访问的.\n-   开放端口：访问网页是需要开放端口号，博客搭建需要开放80，443,81端口，具体的开放端口在这也不描述啦."]},{heading:"3.1 拉取镜像",paragraphs:["1.  下载docker:\n    \n    ```shell\n    curl -fsSL https://get.docker.com | bash -s docker \n    ```\n    \n2.  拉取wordpress， mysql, nginxManager镜像\n    \n    ```shell\n    docker pull wordpress\n    docker pull mysql:5.7\n    docker pull jc21/nginx-proxy-manager\n    ```"]},{heading:"3.2 正式部署",paragraphs:["1.  创建数据库：",`\`\`\`shell
# 创建内部网络
docker network create web
# 创建数据库容器
# MYSQL_ROOT_PASSWORD: 为mysql的密码，可以自己定义
docker run --name mysql57 --net web -e MYSQL_ROOT_PASSWORD=123456 -d mysql:5.7 --character-set-server=utf8 --collation-server=utf8_unicode_ci
# 进入数据库容器
docker exec -it mysql57 bash
# 进入数据库
mysql -uroot -p 
# 输入刚设置的mysql密码
123456
# 创建数据库
create database wp;
# 为数据库创建用户
create user wp identified by "123456";
# 数据库权限设置
grant all on wp.* to wp;
# 退出数据库
exit;
\`\`\``,"2.  搭建wordpress和nginx\\_proxy容器",`\`\`\`shell
# 在自己的服务器中创建wp文件夹和nginx文件夹用来放相关配置
cd ~/home
mkdir wp nginx_proxy
# 创建wordpress容器
cd /home/wp
docker run -dit --net web -v \`pwd\`:/var/www/html --name wordpress wordpress
# 创建nginx_proxy容器
cd /home/nginx_proxy
docker run -dit -p 80:80 -p 81:81 -p 443:443 --net web --name nginx_proxy -v $PWD/data:/data -v $PWD/letsencrypt:/etc/letsencrypt --restart=unless-stopped jc21/nginx-proxy-manager
\`\`\``]},{heading:"3.3 Nginx_proxy反向代理",paragraphs:["-   打开浏览器输入你的服务器IP:端口 例如 `175.45.46.166:81`\n    \n-   ![](@img/kzvvhi08)\n    \n-   输入默认账号和密码(后续可以改): 账户: `admin@example.com` 密码: `changeme`\n    \n-   点击页面的Proxy Hosts:\n    \n    ![](@img/cp0janxc)\n    \n-   创建反向代理: 点击左上角的`Add Proxy Host`,输入`Domain Name（域名）`,输入`Forward Hostname/IP`填写wordpress，然后保存.\n    \n    ![](@img/03ui6p8o)"]},{heading:"四、配置wordPress",paragraphs:["前面已经完成了所有的搭建，现在可以输入你的访问站点:`http://` + `域名`进入wordpress网页啦",`1.  进入站点，显示下图界面.选择简体中文然后点击继续
    
    ![](@img/2b92r0pq)
    
2.  点击现在开始: ![](@img/nbdi2vvm)
    
3.  填写刚刚设置的相关信息:
    
    -   数据库名: wp
    -   用户名: wp
    -   密码: 123456
    -   数据库主机: mysql57
    -   表前缀: wp\\_ ![](@img/olj510gf)
4.  然后按照网页默认设置就可以了，最后到如下界面:
    
    ![](@img/s3e1xrsc)`]},{heading:"五、结束（但未完全结束）",paragraphs:["以上就是搭建博客的总过程，如果没有问题的话，你就完成了wordpress的全部搭建(废话，哈哈哈哈哈).然后就可以选择一个好的主题去设置你的网页.","完善网页时遇到了一个问题，上传主题文件时，有上传文件设置，需要如下修改","1.  进入wordpress容器: `docker exec -it wp /bin/bash`\n    \n2.  复制默认的 php.ini 配置文件： `cp /usr/local/etc/php/php.ini-production /usr/local/etc/php/php.ini`\n    \n3.  修改php.ini配置文件: `vim /usr/local/etc/php/php.ini`\n    \n    -   找到以下三个关键值，并根据你的需求修改它们: `upload_max_filesize`：文件大小限制 `post_max_size`：POST请求大小限制 `memory_limit`：内存占用限制\n        \n    -   ```shell\n        upload_max_filesize = 200M\n        post_max_size = 250M\n        memory_limit = 500M\n        ```\n        \n    -   保存更改并退出容器,如果没有成功则重启wordpress容器 :`docker restart wp`。"]}],takeaways:[]},{id:"wp-2",tags:["Unity"],categoryId:"unity",title:"AssetBundle",date:"2024-04-08",cover:"🎮",excerpt:"AssetBundle File Guid确保了资产在整个Unity工程中唯一,Local确保了Object在资产中唯一.InstanceID能够让Unity快速找到资产中的Object. AssetBundle(资产文件)，AssetBu...",sections:[{heading:"AssetBundle",paragraphs:[`1.  File Guid确保了资产在整个Unity工程中唯一,Local确保了**Object在资产**中唯一.InstanceID能够让Unity快速找到资产中的Object.
    
2.  AssetBundle**(资产文件)**，[AssetBundle文件结构浅析 - Pink-Floyd - 博客园 (cnblogs.com)](https://www.cnblogs.com/pinkfloyd/p/6489979.html)，包含两部分:**包头和数据段**
    
    -   **包头**:包含有关AssetBundle的信息，比如标识符、压缩类型、内容清单(?? 与manifest的区别).内容清单是一个以**ObjectsName**为键的查找表，表中的每个数据都提供一个字节索引用来查找**对应的Object（并非Asset）**在**数据段**中的位置(**平衡搜索树**和**红黑树算法**查找).
        
    -   数据段包含通过**序列化AssetBundle中的Assets而生成的原始数据**
        
3.  AssetBundle的压缩方式：
    
    -   LZMA格式: 压缩的AssetBundle体积最小(高压缩比)，会对**所有序列化Assets后的完整字节数组**进行压缩,但是相对的会**增加解压的时间**.
        
    -   LZ4格式：压缩的AssetBundle体积较大，会**单独压缩单独**的Assets的字节.
        
    -   不压缩：体积最大，但访问的速度最快，数据段将保持为原始字节流.
        
4.  加载AssetBundle的四个API
    
    1.  AssetBundle.LoadFromMemory(Async optional)
        
    2.  AssetBundle.LoadFromFile(Async optional)
        
    3.  UnityWebRequest's DownloadHandlerAssetBundle
        
    4.  WWW.LoadFromCacheOrDownload (on Unity 5.6 or older)
        
    5.  [Unity手游实战：从0开始SLG——资源管理系统-基础篇（三）AssetBundle原理 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/97551363)`]}],takeaways:[]},{id:"wp-3",tags:["Linux"],categoryId:"linux",title:"初识Linux",date:"2024-04-09",cover:"🐧",excerpt:"一、Linux是什么 Linux 全称GNU/Linux,是一种免费使用和自由传播的类UNIX操作系统，主要是一个基于POSIX的多用户、支持多线程和多CPU的操作系统，支持32位和64位硬件，能运行主要的Unix工具软件、应用程序和网络协...",sections:[{heading:"一、Linux是什么",paragraphs:["[Linux](https://baike.baidu.com/item/Linux?fromModule=lemma_search-box) 全称GNU/Linux,是一种免费使用和自由传播的**类UNIX**操作系统，主要是一个基于**POSIX**的**多用户**、支持**多线程**和**多CPU**的操作系统，支持32位和64位硬件，能运行主要的**Unix**工具软件、应用程序和**网络协议** . Linux继承了Unix以网络为核心的设计思想，是一个性能稳定的**多用户网络操作系统**"]},{heading:"1.1 Linux的特点",paragraphs:["Linux不仅系统性能稳定，而且是**开源软件** .其核心防火墙组件性能高效、配置简单，保证系统的安全，Linux不仅仅被公司当作**服务器**使用，甚至当作**防火墙** ."]},{heading:"2.1 基本思想",paragraphs:["基本思想有两点：",`1.  一切都是**文件** (系统中的所有都归结为一个文件，包括**命令**、**硬件**、**软件设备**、**操作系统**、**进程**等等对于操作新系统内核而言，都视为拥有各组特性或类型的**文件**)
2.  每个**文件**都有确定的用途.`]},{heading:"2.2 多用户、多任务",paragraphs:["Linux支持多用户，**各个用户**对于自己的**文件设备**有自己的特殊的权力，保证了各用户之间互不影响，**多任务**则是现代电脑主要的一个特点，Linux可以使**多个程序同时并独立**地运行."]},{heading:"2.3 支持多种平台",paragraphs:["Linux可以运行在多种硬件平台上，如具有**x86**、**680x0**等处理器的平台.此外Linux是一种[嵌入式系统](https://baike.baidu.com/item/%E5%B5%8C%E5%85%A5%E5%BC%8F%E7%B3%BB%E7%BB%9F/186978)，可以运行在PC、游戏机或者机顶盒上.同时Linux也支持**多处理器技术**。多个处理器同时工作，使性能大大提高."]},{heading:"三、系统优势",paragraphs:[`1.  **代码开源** ：Linux由众多微内核组成，其源代码完全开源；
2.  **网络功能** ：Linux继承了Unix的特性，具有非常强大的网络功能，其支持所有的**因特网协议**，包括**TCP/IPv4**、**TCP/IPv6**和**数据链路层拓扑程序**等，且可以利用Unix的网络特性开发出新的**协议栈** ；
3.  **系工具链完整** ：Linux系统工具链完整，简单操作就可以配置出合适的开发环境，可以简化开发过程，减少开发中仿真工具的障碍，使系统具有较强的移植性；
4.  **开发工具多** ：**容器**、**版本控制器（Git、Svn）**、**文本编辑器（Linux的**[Vi](https://baike.baidu.com/item/Vi/5043202?fromModule=search-result_lemma-recommend)**、 emacs、gedit、DOS等下的edit)**、**集成开发环境(即IDE)**`,"以上简述了Linux的基本概念，其中未涉及到的后续会慢慢补充的."]}],takeaways:[]},{id:"wp-4",tags:["Unity"],categoryId:"unity",title:"Unity的文件与资产",date:"2024-04-09",cover:"🎮",excerpt:"一、Unity的文件夹 当我们创建一个项目时，有几个默认的文件夹也会随之创建，而且这些文件夹都在Unity中有着不可或缺的作用，以下就是刚创建的4个目录(Asset、Library、Package、ProjectSettings): 1.1...",sections:[{heading:"一、Unity的文件夹",paragraphs:["当我们创建一个项目时，有几个默认的文件夹也会随之创建，而且这些文件夹都在Unity中有着不可或缺的作用，以下就是刚创建的4个目录(Asset、Library、Package、ProjectSettings):","![](D:\\svn\\Typora\\Unity\\Image\\ee87560f-8c6d-4b64-b121-b9622ce9233d.png)"]},{heading:"1.1 Assets",paragraphs:[`1.  **Assets的作用:** 存放资源的根目录，也是打开Unity工程最一个目录，他的作用是给开发者用来组织管理游戏所需要的各种资源，例如脚本、模型、材质，贴图、音频、脚本等.
2.  **Assets的资源产生方式:**
    -   第三方工具生成的资源：这些资源通常由第三方工具(Maya、3ds Max、Ps等)生成，然后导入到Unity中 使用，例如：FBX、纹理、声音等
    -   Unity自己生成的资源: 例如Prefabs、Scenes、Animator文件等
3.  **Assets的资源管理:** Unity编辑器中的Asset文件夹中提供了许多的API，用于管理和操作项目中的资源.以下是常见的Assets文件操作的API：
    -   **AssetDataBase.CreateAsset**: 在指定路径下创建新资源
    -   **AssetDataBase.GetDependencies**: 获取给定路径下资源的所有依赖项
    -   **AssetDatabase.SaveAssets**：将所有未保存的资源更改写入磁盘
    -   **AssetDatabase.Refresh** :导入所有更改的资源。这将确保资源数据库中的信息与磁盘上的实际文件同步.
    -   **AssetDatabase**是Unity编辑器中用于访问资源并执行操作的重要接口，可以使用这些API来管理项目中的资源，包括创建、删除、导入、移动和保存资源等. AssetDatabase的API: [Unity官方AssetDatabase的API](https://docs.unity.cn/cn/2022.3/ScriptReference/AssetDatabase.html)`]},{heading:"1.2 Library",paragraphs:[`1.  **Library的作用**: 主要用于存储Unity项目的内部数据和资源.
    
    -   它包含了Unity编辑器需要的所有内部数据，以及会将Assets的资源导入成Unity可识别的格式，如PS的.psd文件可以转换为在移动设备和PC显卡上渲染的纹理.
    -   它类似一个缓存的文件夹，当删除Assets的图片和资源音频时，并不会自动删除，而是保留在Library文件夹中.
2.  **Library的常见文件夹**:
    
    -   PackageCache: 用于缓存项目中的Package文件中的数据
    -   ScriptAssemblies: DLL文件，将Assets的代码编译为DLL文件储存
    -   ShaderCache：该文件夹用于存储已编译的着色器程序
    
    ![](D:\\svn\\Typora\\Unity\\Image\\c82d25e8-4d5a-4823-a5b9-e68cac88c767.png)`]},{heading:"1.3 Packages",paragraphs:[`-   **Packages的作用:** Package包配置信息，Unity会根据配置生成相应的数据，它用于放置一些官方组件和第三方插件.
-   **Package的重要文件:**
    -   manifest.json: 描述了项目中所用到的所有包及其版本信息的文件
    -   packages-lock.json: 锁定文件，用于记录项目中所有包的确切信息，以确保在不同的环境或团队成员间的一致性.`]},{heading:"1.4 ProjectSettings",paragraphs:["**ProjectSettings的作用:** 当前Unity工程下的各项设置参数记录.",`| 文件名称 | 中文对照 |
| --- | --- |
| AudioManager | 音频管理器 |
| TimeManager | 事件管理器 |
| GraphicsSettings | 图像设置 |
| InputManager | 输入管理器 |
| EditorSettings | 编辑器设置 |
| ProjectSettings | 项目设置 |
| QualitySettings | 特性设置 |
| UserSettings | 用户的构建设置 |`]},{heading:"1.5 特殊文件夹:",paragraphs:[`-   **Editor:** 用于存放编辑器脚本的文件夹，这些编辑器脚本用于扩展Unity编辑器，可以用来创建自定义的Inspector面板，编辑器窗口等，这些脚本在**游戏构建**时不会被打包成DLL放到游戏项目工程中.
-   **Resources**：存在资源的特殊文件夹.所有资源可以用Unity的API([Resources的API](https://docs.unity.cn/cn/2022.3/ScriptReference/Resources.html))查找和访问.构建游戏项目时，会将整个文件的资源添加到项目中，Resources中全部资源会被打包成一个缺省的**AssetBundle（resources.assets）** .
-   **Plugins:** 这个文件夹用于扩展 Unity 的功能。 通常存放DLL文件、C++文件、C文件等。它们可以访问第三方代码库、系统调用和SDK等。
-   **StreamingAssets:** 用于存放资源，该文件夹在打包的时候资源不会被压缩或加密，会原封不动的复制到项目的特定文件夹中，一般用来存放AssetBundle资源以及一些音效、网络等配置.`]},{heading:"2.1 什么是Unity资产",paragraphs:["Assets文件中的资源就是资产，资源文件一般分为两种类型，一种是Unity原生支持的格式,例如Prefabs、材质球、Scene等。另一种则是需要Unity在导入的时候处理过才能支持的文件，如FBX、纹理、mp3等. Unity在导入资源时有各种**导入器**（Importer）.所有的资源都会放在Assets文件夹下，然后经过Unity处理后会缓存在Libaray文件夹下.","![](D:\\svn\\Typora\\Unity\\Image\\ee87560f-8c6d-4b64-b121-b9622ce9233d.png)"]},{heading:"2.2 Asset和Objects",paragraphs:[`-   Asset: Unity的资源，也可以指**Projects窗口**中所看到的**单个文件或文件夹**.
    
-   Object: UnityEngine.Object继承的对象，其实是一个可以**序列化**的数据，用来描述特定的**资源实例**，它也可以代表所有Unity引擎所支持的类型，如Mesh,Sprite,AudioClip（class类）等.
    
-   **Asset和Objects的区别:** Asset和Objects是一种**一对多的关系**，例如一个Prefab**(Asset)** 里面包含许多Text、Button、GameObject、Image**(Object)**等.`]},{heading:"2.3 File GUIDS、Local IDS、InstanceID",paragraphs:[`-   **Meta文件:** 每次创建或者导入一个资源时，Unity会同时创建**同名的Meta文件**，而这个Meta文件就是Unity用来**资源管理**的重要文件之一. 它的本质是文本文档，它采用的是**YAML格式**来写的.Unity的**序列化文件(.asset、.meta和.prefab)**都是用这个格式类写的，如Prefab、场景等等.
-   FileGUIDS**(简称GUID)**: Guid是Meta中最最最重要的数据.Guid就表示这个文件(.meta)，也就是同名资源的**唯一ID**.通过Guid就可以找到工程中的**资源文件**，在编辑器中经常使用**AssetDatabase.GUIDToAssetPath**和**AssetDatabase.AssetPathToGUID**进行互转.
-   **LocalIDS**(又称fileID)：GUID对应一个文件，一个文件中可能会包含多个文件，这个时候就需要另外一个ID来表示，这就是**FileID**.FileID的储存方式有2种:
    
    -   非序列化文件(如FBX文件): FileID直接存储在meta文件中.
        
    -   序列化文件**(.prefab、.asset)**:FileID存储在自身数据中.
        
-   **InstanceID**: GUID和fileID能够使Unity在编辑器模式下快速完成Unity的资源管理，但是在运行时，则会存在比较大的性能问题，运行时需要一个表示更好的系统，于是Unity就弄了一套缓存系统**（PersistentManager）**,将GUID和fileID转换为一个**简单且唯一**的整数.从**文件加载**的对象将被分配一个正数的**InstanceID**，新创建的对象将具有负数的**InstanceID**，即使稍后将对象保存到文件中，其负值也会保持不变。`,`| 字段 | 图片 |
| --- | --- |
| GUID | ![](D:\\svn\\Typora\\Unity\\Image\\20240319234428.png) |
| LocalID | ![](D:\\svn\\Typora\\Unity\\Image\\20240319234630.png) |
| InstanceID | ![](D:\\svn\\Typora\\Unity\\Image\\20240319234834.png) |`]},{heading:"3.1 Object加载",paragraphs:[`-   当Unity的**应用程序**启动时，PersistentManager的缓存系统会对项目立刻要用到的数据(比如启动场景里的Object和依赖项)以及Resource目录下的Object进行初始化.如果在**运行时**导入了Asset或从**AssetBundles**加载了Object都会参数新的InstanceID.
    
-   Object会自动加载的情况:
    
    -   某个Object的InstanceID被间接的引用了.
    -   Object当前没有加载到内存中
    -   可以定位到Object的源位置（File GUID和LoaclID）
-   资源加载错误: 如果File GUID和LocalID没有InstanceID, 或者有InstanceID，但是对应的Object已经被卸载了,并且Instance ID引用了无效的FileGUID和LocalID,那么这个Objects的引用会被保留，但是实际**Objects**不会被加载。在Unity的编辑器里会显示为：**“(Missing)”**引用，而在运行时，根据Objects类型不一样，有可能会是空指针，有可能会丢失网格或者纹理贴图导致场景或者物体显示粉红色.`]},{heading:"3.2 Object卸载",paragraphs:["```c#\n// TODO: AssetBundle和Resource的卸载\n```"]}],takeaways:[]},{id:"wp-5",tags:["Linux"],categoryId:"linux",title:"Linux的文件命令",date:"2024-04-09",cover:"🐧",excerpt:"一、文件的基本属性 Linux系统是一种典型的多用户系统，不同的用户处于不同的地位，拥有不同的权限，为了保护系统的安全性，Linux系统对不同的用户访问同一文件的权限有着不同的规定. 每个文件都由10个字符来确定 第0位确定文件的类型，一共...",sections:[{heading:"一、文件的基本属性",paragraphs:["Linux系统是一种典型的多用户系统，不同的用户处于不同的地位，拥有不同的权限，为了保护系统的安全性，Linux系统对不同的用户访问**同一文件的权限**有着不同的规定. 每个文件都由10个字符来确定 第0位确定文件的类型，一共有5个字符","![请添加图片描述](@img/x8wa1ib0)","![请添加图片描述](@img/9yuofh10)","![请添加图片描述](@img/j6uuh07y)","-   d 表示**目录**，- 表示**文件**，l 表示**链接文档**，bc不常用 读写执行分别为rwx，如果没有权限则为 -"]},{heading:"1.1 Linux的文件属主和属组",paragraphs:["**属主**：对于文件来说，都有一个特定的所有者，也就是对该文件所具有的所有权的用户 **属组**：用户是按组分类的，一个用户可以属于一个或多个组，**属主**以外的用户可以分为同组用户，即有属组权限，还可以分为其他用户，只能由其他用户权限."]},{heading:"1.2 更改文件属性",paragraphs:[`-   **charp**: 更改文件属组. **语法:** charp \\[-R\\] 属组名 文件名 -R:表示递归
-   **chown**: 更改文件属主，同时也可以更改文件属组 **语法:** chown \\[-R\\] 属主名 文件名 或者 chown \\[-R\\] 属主名：属组名 文件名
-   **chmod**: 更改文件9个属性即rwxrwxrwx 每个权限字符都有各自的分数 r：4 w： 2 x： 1 **语法**：
    1.  chmod \\[-R\\] xyz ：文件名或者文件夹名 “xyz”分别表示不同权限的值.
    2.  chmod +x filename：将文件改为可执行文件
    3.  [chmod文件命令](https://www.runoob.com/linux/linux-comm-chmod.html)`]},{heading:"二、Linux的文件与目录管理",paragraphs:["Linux的目录结构为**树状结构（类似Windows中我的电脑）**，最顶级的的目录为**根目录“/”** ."]},{heading:"2.1 绝对路径与相对路径",paragraphs:[`-   **绝对路径**：路径的写法由根目录_/_写起，例如/user/share/doc这个目录.
-   **相对路径**：路径的写法不是由_/_写起，而是以当前路径写起，例如由/user/share/doc这个目录到/user/share/man底下时，可以直接写成 **cd ../man ," .. ":表示上一目录** .`]},{heading:"2.2 处理文件的常用指令",paragraphs:["path : 文件路径 dirname: 文件夹名 filename :文件名 文件：蓝色是文件夹，白色是普通文件，绿色为可执行文件",`-   **ls** (list files) ：列出文件及文件名 **写法**：ls path **（path 可加可不加）** 例： ls ：列出**当前文件**的文件名 ls /user/share: 列出**share文件**的文件名
-   **cd** (change directory) ：切换文件夹 **写法**： cd path
-   **pwd** (print work directory) ：显示当前的文件夹
-   **mkdir** (make directory)：创建一个新的文件夹 **写法** ：mkdir dirname
-   **rmdir** (remove directory)：删除一个空的文件夹 **写法**: rmdir dirname
-   **cp** （copy file）：复制文件或者文件夹 **写法**：cp filesname 或者 cp dirname
-   **rm** (remove) ：删除文件或文件夹 **写法**： remove filename remove dirname
-   **mv** (move file) ：移动文件或者目录，或者重命名文件夹和目录 **写法**：mv filenameA filenameB
-   **Ctrl + c**： 取消命令，并且换行
-   **Ctrl + u**：清空本行命令
-   **tab键**：可以补全命令和文件名，没有补全可以点击两下，显示备选选项.
-   **touch**：创建一个文件 **写法**：touch filename
-   **cat**: 展示文件中的内容 **写法**：cat filename
-   **./**：执行可执行文件 **写法**：./**相对路径或者** ./**绝对路径**
-   **bash**: 执行shell文件 **写法**：bash filename.`]},{heading:"2.3 文本的复制与粘贴",paragraphs:[`-   选中文本：按住shift选中
-   复制文本：Ctrl + insert
-   粘贴文本：Shift + insert`]},{heading:"2.4 文件选项与参数",paragraphs:[`-   **ls** ：
    
    -   \\-a：全部的文件，包含**隐藏文件(以.开头的文件)** 一起列出来.
    -   \\-d : 仅列出目录本身，而不是列出目录内的文件数据.
    -   \\-l: **长数据串**列出，包含文件的**属性和权限**等等数据. 也可以直接用**ll**来代**ls -l**
-   **mkdir**:
    
    -   \\-p:直接将所需要的目录（包含上一级目录）递归创建起来 mkdir test1/test2/test3
    -   \\-m:获取配置文件的权限，不在意默认权限（umask），可以直接创建
-   **rm**:
    
    -   \\-f:强制删除，不会出现警告信息
        
    -   \\-r:递归删除，非常危险的选项!!!
        
    -   _:目录下所有文件_
        
    -   _/_ :根目录下所有的文件 切忌使用 rm -rf \\*/
        
-   **mv**:
    
    -   \\-f:强制移动或者覆盖`,"以上就是相关的**文件属性**以及常用的的**文件指令**."]}],takeaways:[]},{id:"wp-6",tags:["Linux"],categoryId:"linux",title:"Shell语法",date:"2024-04-10",cover:"🐧",excerpt:"一、shell的概论 1.1 概念 shell是用C语言编写的程序，是用户通过命令行和操作系统沟通的语言，shell既是一种命令语言，也是一种程序设计语言.简述来说，shell脚本可以直接在命令行执行，即shell在终端的命令行中逐行执行....",sections:[{heading:"1.1 概念",paragraphs:["shell是用C语言编写的程序，是用户通过命令行和操作系统沟通的语言，shell既是一种命令语言，也是一种程序设计语言.简述来说，shell脚本可以直接在命令行执行，即shell在终端的命令行中逐行执行.shell脚本也可以将一套的逻辑放到文件中，直接执行该文件，方便复用."]},{heading:"1.2 类型",paragraphs:["在Linux中常见的shell脚本有很多种，常见的有","-   Bourme Shell(`user/bin/sh`或者`/bin/sh`)\n-   Bourme Again Shell(`/bin/bash`)\n-   C Shell(`/bin/bash/csh`)\n-   K Shell(`/bin/bash/ksh`)\n-   ...","`shell`编程只要有写代码的文本编辑器和一个能解释执行的脚本解释器就可以了，`shell`脚本在`Linux`可以直接执行，在windows终端中需要`git`去`Git Bash Here`才能执行.[Windows CMD常用命令大全（值得收藏）](https://zhuanlan.zhihu.com/p/468515490) `Linux`系统一般默认使用`bash`，所以以下的都是`bash`中的语法. `shell`文件开头的开头都要加上`!# /bin/bash`，表明`bash`为脚本的解释器（即编译器）"]},{heading:"1.3 脚本示例",paragraphs:["新建一个test.sh文件，内容如下",'```bash\n#! /bin/bash\necho "Hello world!"\n```']},{heading:"1.4 运行方式",paragraphs:["作为可执行文件",`\`\`\`bash
acs@1463acb54038:~$ ls
homework
acs@1463acb54038:~$ vim test.sh
acs@1463acb54038:~$ ls
homework  test.sh
acs@1463acb54038:~$ chmod +x test.sh
acs@1463acb54038:~$ ls
homework  test.sh
acs@1463acb54038:~$ bash test.sh
Hello World!
\`\`\``]},{heading:"2.1 Shell变量的种类",paragraphs:["运行shell脚本时，会同时存在三种变量:",`-   局部变量：局部变量在脚本或命令中定义，仅在当前的shell实例中有效，其他shell启动的程序不能访问局部变量
-   环境变量：所有的程序，包括shell启动的程序，都能访问环境变量，有些程序需要环境变量来保证其正常的运行.
-   shell变量：shell变量是由shell程序设置的特殊变量，shell变量有一部分是环境变量，有一部分是局部变量.
-   将局部变量变为环境变量：
    
    \`\`\`bash
    acs@1463acb54038:~$ name=lwy
    acs@1463acb54038:~$ export name
    acs@1463acb54038:~$ declare -x name
    acs@1463acb54038:~$ bash
    acs@1463acb54038:~$ echo \${name}
    lwy
    \`\`\``]},{heading:"2.2 变量的使用",paragraphs:[`\`\`\`bash
# 变量的定义
name='lwy' # 单引号定义字符串
name="lwy" # 双引号定义字符串
name=lwy # 不加引号也表示字符串
# 使用变量 在定义过之前加上$,最好是加上{}，用来识别变量的边界
echo \${name} # 输出lwy
echo $name # 输出lwy
echo \${name}hhh # 输出lwyhhh
# 只读变量和删除变量
readonly boy=lwy # 定义只读变量
boy=zyc # 会报错，只读变量不能修改
unset name # 删除name变量
echo name # 会输出为空
\`\`\``]},{heading:"2.3 字符串",paragraphs:[`\`\`\`bash
# 字符串有三种方式 单引号 双引号 不加引号
name='lwy'
name="lwy"
name=lwy
# 字符串拼接
echo "hello, "\${name}"!"
echo 'hello,'\${name}'!'
echo 'hello,\${name}!'
# 分别输出 hello,lwy/hello,lwy/hello,\${name}!
# 获取字符串长度 #获取长度
str="qwer"
echo \${#str}
# 提取子字符串
echo \${str:0:2}
# 输出qw
\`\`\``]},{heading:"3.1 文件参数变量",paragraphs:["当我们在执行Shell脚本时，向脚本传递参数，脚本内获得参数的格式为:$n,n表示第n个参数，$0表示执行的文件名（含文件路径）",'```bash\n#! /bin/bash\n# 该文件的文件名为test.sh\nstr="传递参数"\necho "这个文件名为"${0}\necho "who\'s boy?"${1}\necho "who\'s girl?"${2}\n```',"可以将该脚本设置执行权限，并执行脚本",`\`\`\`bash
chmod +x test.sh
./test lwy zyc
:<<abc
这是文件的注释，输出的结果如下
这个文件名为./test.sh
who's boy?l wy
who's girl?zyc
abc
\`\`\``]},{heading:"3.2 其他参数相关变量",paragraphs:['| 参数 | 说明 |\n| --- | --- |\n| $# | 获取参数的个数 |\n| $@ | 输出" ${1}, ${2}, ${3} "的值(数组) |\n| $\\* | 输出" ${1}, ${2}, ${3} "的值(字符串) |\n| $? | 上一条命令的退出状态，即exitcode,0表示正常退出，其他表示错误 |\n| $(command) | 返回`common`这条命令的stdout（可嵌套） |\n| \\\\`command\\` | 返回这个`command`这条命令的stdout(可嵌套) |\n| $$ | 当前脚本的进程id |']},{heading:"4.1 定义和读取数组",paragraphs:["Shell数组中可以放多个不同类型的值，Bash Shell只支持一维数组，初始化时不需要定义大小，数组元素下标 由0开始，Shell数组由括号来表示，元素由==空格==分隔开，语法格式如下 array\\_name=(value1 value2 value3 ... valuen)",`\`\`\`bash
ararry = (a 123 "lwy" 'c')
#可以用下标来定义数组
array[0]=a
array[1]=123
\`\`\``]},{heading:"可以直接下标读取",paragraphs:["```bash\necho ${array[0]} # 输出a\necho ${array[1]} # 输出123\n```"]},{heading:"4.2 关联数组",paragraphs:["Bash支持关联数组，可以使用任意的字符串、或整数作为下标来访问数组元素 关联数组使用`declare`命令来声明",'```bash\ndeclare -A arrayname\ndeclare -A site = (["name"]="lwy" ["age"]=18 ["sex"]=man)\necho ${site["name"]}\n```',"使用@和\\*可以数组的所有元素",'```bash\necho "数组的元素为"${site[@]}\necho "数组的元素为"${site[*]}\n# 数组前加！表示获取数组所有的键值\necho "数组的元素为"${!site[*]}\n# 获取数组的长度\necho "数组的长度为"${#site[*]}\necho "数组的长度为"${#site[@]}\n```',"Bash支持关联数组（_也就是哈希表_），可以使用任意的字符串、或者整数作为下标来访问数组元素 关联数组的命令用`declare`命令来声明 declare -A arrayname",'```bash\ndeclare -A student\nstudent["boy"]=lwy\nstudent["girl"]=zyc\nstudent["one"]=hhhh\necho ${!student[*]}\necho ${student[*]}\n```']},{heading:"五、expr命令",paragraphs:["`expr` 用于求表达式的值，格式为 `expr 表达式`","表达式说明：","-   用空格隔开每一项\n-   用反斜杠转义`\\`\n-   对**包含空格和其他特殊字符的字符串**要用引用括起来\n-   expr 会在`stdout`输出结果.如果为逻辑关系表达式，则结果为真时，`stdout`输出1，否则输出`0`\n-   expr也会有`exit code：`，如果为逻辑关系表达式，则结果为真时，`exit code`为0，否则为1"]},{heading:"5.1 基本的运算符",paragraphs:["假设变量a为10，变量b为20","-   运算符号:`+ - * / % ()`","| 运算符 | 说明 | 举例 |\n| --- | --- | --- |\n| + | 加法 | \\\\`expr $a + $b\\`结果为30 |\n| \\- | 减法 | \\\\`expr $b - $a\\`结果为10 |\n| \\* | 乘法 | \\\\`expr $a \\ * $b\\`结果为200 |\n| / | 除法 | \\\\`expr $b / $a\\`结果为2 |\n| % | 取余 | \\\\`expr $b % $a\\`结果为0 |\n| () | 改变优先级 | \\\\`expr \\ ($b + $a\\ ) \\ * a \\`结果为300 |"]},{heading:"5.2 逻辑关系表达式",paragraphs:["-   逻辑符号: `| & < <= = == ! >= >`\n-   假设变量a为10，变量b为20","| 运算符 | 说明 | 举例 |\n| --- | --- | --- |\n| | | 或 | \\\\`expr $a \\ \\| $b\\`结果为10 |\n| & | 与 | \\\\`expr $b \\ & $a\\`结果为20 |\n| \\> | 大于 | \\\\`expr $a \\ $b\\`结果为0 |\n| \\== | 等于 | \\\\`expr $b \\ = \\ = $a\\`结果为0 |\n| ! | 非 | \\\\`expr !a\\`结果为0 |"]},{heading:"六、read命令",paragraphs:["read命令用于从标准输入中读取单行数据。当读到文件结束符时，exit code为1，否则为0。 参数说明：",`-   \\-p ：后面可以接提示信息
-   \\-t：后面可以跟秒数，定义输入字符等待时间`,`\`\`\`bash
read name
lwy
echo \${name} # 输出为lwy
read -p "what's your name?" -t 10 name
lwy
what's your name? lwy
echo \${name}
lwy
\`\`\``]},{heading:"7.1显示普通字符",paragraphs:['```bash\necho string\n#例子\necho "It is a test" # 字符串\necho It is a test # 可以省略""\necho "\\"It is a test\\"" # 转义字符  输出“It is a test”\n```']},{heading:"7.2显示开启转义",paragraphs:[`\`\`\`bash
echo -e "Hello\\n"
echo "lwy"
:<<abc
输出
hello`,`lwy
abc
echo -e "hello \\c"
echo lwy
#输出 hello lwy
\`\`\``]},{heading:"7.3 显示结果定向至文件",paragraphs:['```bash\necho "Hello World"  out.txt # 将内容以覆盖的方式out.txt中\ncat out.txt # 显示 Hello World\n```']},{heading:"7.4显示命令执行的结果",paragraphs:["```bash\necho `date`\n# 输出的结果为：Thu Jun 8 22:33:17 CST 2023\n```"]},{heading:"八、printf命令",paragraphs:["`printf`命令用于**格式化输出**，类似于C/C++中的printf函数. 默认不会再字符串的末尾添加换行符",'```bash\necho "Hello, lwy"\n# 输出 Hello lwy\nprintf "Hello, lwy\\n"\n# 与上面的运行结果一致\n```',"**命令格式**： printf format-string \\[ \\]",`-   format-string :为格式控制字符串
-   arguments: 参数列表`,`\`\`\`bash
#! /bin/bash
printf "%s %s %s\\n" lwy love zyc
printf "%10d\\n" 1234
printf "%10.2f\\n" 123.245616
printf "who're you? %s\\n" lwy
\`\`\``]},{heading:"九、Test命令与判断符号[]",paragraphs:["test 与 expr 的不同 ：","-   test表示的是`exitcode`值，`exitcode`为0是表示真，1则表示假\n-   expr表示的是`stdout`值，`stdout`为1表示真，0表示假\n-   test和expr作用：test更多用来检测，expr更多的是求表达值"]},{heading:"9.1 逻辑运算符 &amp;&amp; 和 ||",paragraphs:["-   && 表示**与**，||表示**或**\n-   `expr1 && expr2`:当`expr1`为假时，直接忽略`expr2`\n-   `expr1 || expr2`:当`expr1`为真时，直接忽略`expr2`"]},{heading:"9.2 test命令",paragraphs:["可以在命令行中输入`help test`，可以查看`test`命令的用法 `test`命令用于**判断文件类型**，以及对变量做比较"]},{heading:"9.3.1 整数比较",paragraphs:["**命令格式**:","```bash\ntest &a -gt $b # a是否大于b\n```","例如：",'```bash\ntest 1 -lt 2\necho $?\ntest 1 -lt 2 && echo "true" || echo "false"\n# exitcode的值为0，所以输出为0\n# 1 < 2 输出为true\n```',`| 命令 | 表示意义 |
| --- | --- |
| \\-eq | 等于 |
| \\-ne | 不等于 |
| \\-gt | 大于 |
| \\-ge | 大于等于 |
| \\-le | 小于等于 |
| \\-lt | 小于 |`]},{heading:"9.3.2 字符串比较",paragraphs:["**命令格式**：","```bash\ntest -z string\n```",`| 命令 | 表示意义 |
| --- | --- |
| test -z string | 判断string是否为空，如果为空，则返回0 |
| test -n string | 判断string是否为非空，如果为非空，则返回0 |
| test string1 == string2 | 判断两个字符串是否相等 |
| test string != string2 | 判断两个字符串是否不相等 |
| test string \\\\< string2 | 字符串也可以做比较 |`]},{heading:"9.4.1 文件类型的判断",paragraphs:["**命令格式**:","```bash\ntest -e filename # 判断文件是否存在\n```",`| 命令 | 表示意义 |
| --- | --- |
| \\-e | 判断文件是否存在 |
| \\-f | 判断是否为文件 |
| \\-d | 判断是否为文件夹 |`]},{heading:"9.4.2 文件权限的判断",paragraphs:["**命令格式**：","```bash\ntest -x filename # 判断文件是否可执行\n```",`| 命令 | 表示意义 |
| --- | --- |
| \\-x | 判断文件是否为可执行文件 |
| \\-r | 判断文件是否为可读文件 |
| \\-w | 判断文件是否为可写文件 |
| \\-s | 判断文件是否为空文件 |`]},{heading:"9.4.3 多重条件的判断",paragraphs:["**命令格式**:",'```bash\ntest -r filename -a -x filename #判断是否同时成立\ntest -r filename -a -x filename && echo "true" || echo "false"\n```',`| 命令 | 表示意义 |
| --- | --- |
| \\-a | 判断两个条件是否同时成立 |
| \\-o | 两条件是否至少一个成立 |
| ! | 取反 test ! -x file 当文件不可执行是返回0(也就是true) |`]},{heading:"十、判断语句",paragraphs:["判断语句为if..then 或 case ..esac类似于`C/C++`的if-else和switch **condition：**表示的是`exitcode`的值"]},{heading:"10.1 if ..then",paragraphs:[`-   单层if **命令格式：**
    
    \`\`\`bash
    if condition
    then
    语句1
    语句2
    fi
    \`\`\`
    
-   单层if-else **命令格式：**
    
    \`\`\`bash
    if condition then
    语句1
    语句2
    esle
    语句3
    语句4
    fi
    \`\`\`
    
-   多层if-elif-elif-else **命令格式：**
    
    \`\`\`bash
    if condition then
    语句1
    语句2
    elif condition then
    语句3
    语句4
    esle
    语句5
    语句6
    fi
    \`\`\``]},{heading:"10.2 case ..esac",paragraphs:["**命令格式：**",`\`\`\`bash
# 类似于C/C++的default
case $变量名称 in
值1)
    语句1
    语句2
    ;;
 值2)
    语句3
    语句4
    ;;
*)
    语句5
    语句6
    ;;
esac
\`\`\``,"**示例：** a = 4",`\`\`\`bash
case $a in
1)
    echo "\${a}" 等于1
    ;;
2)
    echo "\${a}" 等于2
    ;;
3)
    echo "\${a}" 等于3
    ;;
*)
    echo 其他
    ;;
esac
# 输出其他
\`\`\``]},{heading:"十一、循环语句",paragraphs:["循环语句包括",`-   for ..in .. do .. done
-   for .. in $(seq 1 10) do .. done \`{1 .. 10}\` 或者 \`{a .. z}\`
-   for ((...;...;...)) do .. done
-   while ..do .. done 循环
-   until.. do ..done 循环
-   break命令
-   continue命令`]},{heading:"11.1  for循环",paragraphs:["-   for ..in .. do .. done **示例** :",`\`\`\`bash
# 输出a abc 123
for i in a abc 123
do
    echo $i
done
# 输出当前文件夹的文件名
for i in \`ls\`
do
    echo $i
done
\`\`\``,"-   for .. in $(seq 1 10) do .. done **示例** :",`\`\`\`bash
for i in $(seq 1 10)
do
    printf "%d " $i
done
输出 1 2 3 4 5 6 7 8 9 10
# {1..10}不能有空格
# 输出1 2 3 4 5 6 7 8 9 10
for i in {1..10}
do
    echo $i
done
\`\`\``,"-   for((..;..;..)) do .. done # 类似于C/C++中的for循环, 不需要在意**空格** **示例** :","```bash\n# 输出的结果是 0 1 2 3 4 5 6 7 8 9\nfor ((i = 0; i < 10; i ++))\ndo\n    echo $i\ndone\n```"]},{heading:"11.2 while和until",paragraphs:["while与until的作用是一样的，但是**判断条件**不同，while是判断为真则运行语句，until是判断为假则运行语句. **命令格式：**：",`\`\`\`bash
# while的格式
while condition
do
    语句1
    语句2
done
until的格式
until condition
do
    语句1
    语句2
done
\`\`\``,"**示例**:",`\`\`\`bash
while [ $i -ne 0].
do
    echo $i
    let "i -= 1"
    echo $i
    ((i --))
done
\`\`\``]},{heading:"11.3 continue和break",paragraphs:["countinue和break两个语句与`C/C++`基本上类似，不过要注意的点就是break不能跳出case语句. **示例**:：",`\`\`\`bash
# continue：
# 输出1 3 5 7 9
for ((i = 0; i < 10; i ++))
do
    if [ \`expr $i % 2\` -eq 0 ]
    then
        continue
     else
         echo $i
         fi
done`,`# break：
# 输出0 1 2 3 4 5
for i in {1..10}
do
    case $i in
        5)
            break;
            ;;
        *)
            echo $i
            ;;
    esac
done
\`\`\``]},{heading:"11.4 死循环处理的方式",paragraphs:["`ctrl + c`即可 或者可以直接关闭进程","-   使用`top`命令查看进程的PID\n-   使用`kill -9 PID`即关闭此进程"]},{heading:"十二、函数",paragraphs:["shell中的函数类似于`C/C++`中的函数，但`return`的返回值与C/C++不同，返回的是`exit code`，取值为0 - 255，0表示正常结束 如果想获取函数的输出结果，可以通过echo输出到stdout中，然后通过`$(function_name)`来获取stdout的结果. 函数的`return`值可以通过`$?`来获取.","**函数的命令格式**:","```bash\n[function] function_name() { # 前缀的function可以省略，参数可以直接与 $1 $2去获取\n    语句1\n    语句2\n    ...\n}\n```","**示例:**",`\`\`\`bash
# 输出 res = 0 std = lwy is a boy
func(){
    local name="lwy" # 局部变量
    echo $name is a $1
    return 0 #可以不写，默认返回值为0
}
res=$?
stdout=$(func boy)
echo "res = $res"
echo "stdout = $stdout"
\`\`\``,"用函数实现斐波拉契数列 f(n) = f(n - 1) + f(n - 2)",`\`\`\`bash
# 实现斐波拉契数列 f(n) = f(n - 1) + f(n - 2)
#! /bin/bash
func(){
    if [ $1 -eq 1 ]-
    then
        echo 0
        return 0
    fi  
    if [ $1 -eq 2 ]-
    then
        echo 1
        return 0
     fi
     a=$(func $(expr $1 - 1))
     b=$(func $(expr $1 - 2))
     echo $(expr $a + $b) }`,"echo $(func 10)\n```"]},{heading:"十二、exit命令",paragraphs:["`exit`命令是用来退出当前**shell进程的**，并返回一个退出状态，使用**$?**可以接受这个退出状态. `exit`和`return`的区别：exit和return都返回的是`exitcode`值，但exit是退出的是整个shell进程，而return只是退出整个函数. **示例:**",`\`\`\`bash
# 不会输出 没有杀死整个进程.
while read name
do
    echo $name
    if [ $name == "lwy"]
    then
        echo "exit"
        exit 2
    fi
done
echo "没有杀死整个进程"
\`\`\``]},{heading:"十三、文件重定向",paragraphs:["每个进程默认打开三个文件描述符","-   `stdin`：标准输入，从命令行读取数据，文件描述符为0\n-   `stdout`：标准输出，从命令行输出数据，文件描述符为1\n-   `stderr`：标准错误输出，向命令行输出数据，文件描述符为2","* * *","**命令表**：","| 命令 | 说明 |\n| --- | --- |\n| command file | 将`stdout`以覆盖的方式重定向到`file`中 |\n| command < file | 将`stdin`以覆盖的方式重定向到`file`中 |\n| command > file | 将`stdout`以追加的方式重定向到`file`中 |\n| command n file | 以文件描述符n并追加的方式重定向到`file`中 |\n| command n> file | 以文件描述符n并覆盖的方式重定向到`file`中 |","**输入输出重定向**:",'```bash\necho "lwy hhh zyc"  output.txt\nread str < output.txt\n# 输出lwy hhh zyc\necho $str\n```',"同时重定向stdin和stdout",`\`\`\`bash
#! /bin/bash
read a
read b
echo $(expr \${a} + \${b})
3
4
# 创建test.sh脚本
# 再创建input.txt
./test.sh < input.txt  output.txt
# 查看内容为7
cat output.txt
\`\`\``]},{heading:"十四、引入外部脚本",paragraphs:["类似于`C/C++`的include操作，bash可以引用其他脚本的代码 **命令格式**","```bash\n# .和 filename之间有一个空格\n. filename\n# 或者\nsource filename\n```","**示例：** 创建脚本 `test1.sh`","```bash\n#! /bin/bash\nboy=lwy\ngirl=zyc\n```","然后创建脚本`test2.sh`",'```bash\n#! /bin/bash\n# 输出 lwy is a boy zyc is a girl\necho "${lwy} is a boy"\necho "${zyc} is a girl"\n```']},{heading:"总结",paragraphs:["以上就是shell所有的基本内容，其中还有许多没有涉及，如let的使用 top type等一些命令，大家去网上搜一搜就行啦，以上的内容大部分是根据www.acwing.com的yxc老师来写的，所以大家如果能看到最后的话也可以去多多关注yxc老师."]}],takeaways:[]},{id:"wp-7",tags:["Linux"],categoryId:"linux",title:"SSH",date:"2024-04-11",cover:"🐧",excerpt:"一、ssh的简述 安全外壳协议(Secure Shell，简称SSH)是一种在不安全网络上用于安全远程登录和其他安全网络服务的协议. SSH是建立在应用层基础上的安全协议，SSH是较可靠，专业为远程登录会话和其他网络服务提供安全性的协议.利...",sections:[{heading:"一、ssh的简述",paragraphs:["安全外壳协议(Secure Shell，简称SSH)是一种在**不安全网络**上用于安全远程登录和其他安全网络服务的协议. SSH是建立在**应用层**基础上的安全协议，SSH是较可靠，专业为**远程登录**会话和其他**网络服务**提供安全性的协议.利用SSH协议可以有效防止远程管理过程中的信息泄露问题."]},{heading:"2.1 基本",paragraphs:["ssh远程登录服务器的指令为","```bash\nssh user@hostname\n```","`user`:用户名 `hostname`:IP地址或域名 ssh第一次登录时会提示：`Are you sure you want to continue connecting (yes/no/[fingerprint])?` 输入`yes`，回车后就该服务器的信息会记录本地termina中的`~/.ssh/know_hosts`文件中 输入密码后就能进入服务器了. ssh的默认登录端口号为22，想登录某特定窗口：","```bash\nssh user@hostname -p 22\n```"]},{heading:"2.2 使用别名登录服务器",paragraphs:[`1.  在本地创建~/.ssh/config文件
    
2.  然后在文件中输入
    
    \`\`\`bash
    Host mysever # 别名
    HostName IP地址或域名
    User 用户名
    \`\`\`
    
3.  再用ssh登录就可以直接
    
    \`\`\`bash
    ssh mysever # mysever自定义的别名
    \`\`\``]},{heading:"2.3 密钥登录",paragraphs:["1.  在本地创建密钥：`ssh-keygen` 一直回车，执行结束后，本地~/.ssh/目录下会多两个文件\n    \n    -   id\\_rsa：私钥 # **不能透露**\n    -   id\\_rsa.pub : 公钥\n2.  将**公钥**的内容拷贝下来，复制到服务器中的`~/.ssh/authorized_keys`中（一般需要自己创建）\n    \n3.  或者将第二步换成命令，**一键添加**服务器公钥 `ssh-copy-id mysever #服务别名`"]},{heading:"2.4 本地执行服务器命令",paragraphs:["当服务器过多的时候，可以在本地执行服务器命令，不需要进入服务运行后在退出 **命令格式**：","```bash\nssh user@hostname command\n```","示例","```bash\nssh mysever ls -a # 输出当前服务的文件名称\nssh mysever 'for((i = 0; i < 10; i ++)) do echo $i; done ' # 输出 0 1 2 3 4 5 6 7 8 9 \n```"]},{heading:"3.1 文件传输",paragraphs:["ssh利用scp指令实现了本地和服务器之间的文件传输. **命令格式**：","```bash\nscp source destionation # 将本地的文件source数据传入到destionation服务器下\n```","**示例**","```bash\n# 注意： mysever: 后面需要加**:**, 将本地的.vimrc和.tmux.config传输到mysever服务器上\nscp ~/.vimrc ~/.tmux.config mysever: \n```"]},{heading:"3.2 文件夹传输",paragraphs:["**命令格式**：","```bash\nscp -r sourcemysever:destionation # 将本地source数据传入到服务器中destionation 都是绝对路径\nscp -r mysever:source destionation  : # 注意： source后面有一个点.表示根目录 将服务器的source数据传入到本地中\n```","```bash\nscp -r ~tmp mysever:/home/acs_9367/ # 将tmp文件传输到服务器/home/acs_9367文件夹下\nscp -r mysever:/home/acs_9367/temp . # 将服务器的temp文件传输到本地根目录下.\n```"]},{heading:"四、总结",paragraphs:["这一部分让我们了解怎么用终端去连接一个服务器，并且相互进行传输，当你需要不止一台服务器，服务器的管理和文件传输就会变得越来越重要."]}],takeaways:[]},{id:"wp-8",tags:["Linux"],categoryId:"linux",title:"tmux和vim",date:"2024-04-11",cover:"🐧",excerpt:"前言 由于看的教程为ACWing的Linux基础课，所以用的命令为yxc老师自定义的命令，主要为改动 ctrl + b 改成了 ctrl + a，以及一些常用的指令.如果要更改tmux的快捷键，可以修改Tmux的配置文件 ~/.tmux.c...",sections:[{heading:"前言",paragraphs:["由于看的教程为ACWing的Linux基础课，所以用的命令为yxc老师自定义的命令，主要为改动 ctrl + b 改成了 ctrl + a，以及一些常用的指令.如果要更改tmux的快捷键，可以修改Tmux的配置文件 ~/.tmux.conf."]},{heading:"1.1 概念",paragraphs:["tmux是一个**终端复用器(terminal multiplexer)**，指终端登录远程主机并运行后，在其中可以开启**多个控制台**的**终端复用软件** ."]},{heading:"1.2 tmux的主要作用",paragraphs:[`1.  分屏（将屏幕分为多个）
2.  允许断开Terminal终端连接后，可以继续运行进程.`]},{heading:"2.1 tmux的单元模块",paragraphs:["tmux可以在**终端端口**同时运行多个**会话**，可以在会话中划分窗口和面板，实现**多任务的管理和切换** .这些会话(session)、窗口(window)、面板(panel)可以理解为tmux的单元.",`| 名称 | 作用 |
| --- | --- |
| tmux | 输入tmux指令时就开启了一个服务器 |
| session | 会话，一个服务器可以包含多个对话，也相当于开启一个进程 |
| window | 窗口，一个会话有多个窗口 |
| panel | 面板，一个窗口有多个面板 |
| shell | shell对话框，一个面板对应一个shell对话框 |`,"**表格对应的相关的图片如下**","![](@img/m9tfi3hd)"]},{heading:"2.2 tmux相关的指令",paragraphs:[`-   tmux ：新建一个session对应一个进程,也随之创建一个window,创建一个panel.
-   tmux ls：列出所有的终端列表
-   tmux a：打开刚挂起的session会话进程
-   ctrl a：组合键.`,`| 组合键 | 作用 |
| --- | --- |
| d | 将当前的session挂起 |
| % | 将当前panel左右分为两个panel |
| " | 将当前panel上下分为两个panel |
| s | 列出所有的会话，即列出所有的session |
| w | 列出所有的窗口，即列出所有的window |
| c | 创建一个新窗口 |
| z | 将当前窗口全屏 |
| 方向键 | 切换到其他的窗口 |`,"-   ctrl d：关闭当前panel，如果当前window的所有panel都关闭，则window也随之关闭，如果当前的session的所有window都关闭，则session也随之关闭."]},{heading:"3.1 vim的概念",paragraphs:["Linux的vim是由**vi**发展出来的一个强大的**文本编译器**，它有多种**模式**，可以进行高效的文本操作和编程. 使用方式：vim filename,如果已有的该文件，则直接打开，否则就直接创建并打开该文件."]},{heading:"3.2 vim的三种模式",paragraphs:["基本上vi/vim共分为三种模式，分别是**命令模式(Command mode)**,**输入模式（也称编辑模式Insert mode）**和**底线命令模式（又称末行模式Last in mode）**,三种模式的切换如下图所示：","> ![输入图片说明](@img/p7ikvd40)"]},{heading:"3.2.1 命令模式",paragraphs:["刚启动vi/vim，便进入了进入了**命令模式**，此模式下点击键盘会被识别为**命令**，而非输入的字符. 以下就是命令模式下常用的几个命令：",`| 命令 | 作用 |
| --- | --- |
| i | 切换到输入模式，能够对文本进行编辑 |
| gg | 移动到文件头 |
| G(shift + g) 或 Home | 移动到文件尾 |
| ^(shift + 6) 或 End | 移动到行首 |
| $(shift + 4) | 移动到行尾 |
| <center n space(空格) | n表示数字，移动到当前行的第几个数字 |
| v | 选中文本 |
| d | 删除选中文本 |
| dd | 删除当前行 |
| y | 复制选中文本 |
| yy | 复制当前行 |
| p | 将复制的数据在光标的下一行/下一个进行粘贴 |
| u | 撤销上一命令 |
| 大于号 | 将选择的文本整体向右缩进一次 |
| 小于号 < | 将选择的文本整体向左缩进一次 |
| gg=G | 将全文代码格式化 |`]},{heading:"3.2.2 底线命令模式",paragraphs:['在命令模式下按下 `: / ?`三个字母中的任意一个，就会进入底线命令模式（在界面的最下方），底线命令模式可以输入单个或多个字符.在底线命令模式中，基本的命令有如下几个常用命令（省略了":"）',`| 命令 | 作用 |
| --- | --- |
| :q | 退出vim模式 |
| :w | 保存文件 |
| :wq | 保存文件并退出 |
| :q! | 不保存强制退出 |
| :wq! | 保存后强制退出 |
| :set paste! | 设置为粘贴模式，取消代码自动缩进 |
| :set nopaste | 取消粘贴模式，开启代码自动缩进 |
| :set no | 显示行号 |
| :set nonu | 隐藏行号 |
| :set noh | 关闭查找关键词高亮 |
| :n | 移动到第n行 |
| :n1,n2s/word1/word2/g | 将n1行到n2行的word1换成word2 |
| :n1,$s/word1/word2/g | 将全文的所有word1换成word2 |
| :n1,$s/word1/word2/gc | 将全文的所有word1换成word2,替换之前需要用户确认 |
| /word | 当前光标下寻找第一个为word的单词 |
| ?word | 当前光标上寻找第一个为word的单词 |`]},{heading:"3.2.3 输入模式",paragraphs:["在命令模式下按下`i, o, a`等字符就进入了输入模式，当进入输入模式时，左下角会有**Insert**字样，表示已经进入了**输入模式**了. 在输入模式中按下**ESC**按键，就会退出输入模式，返回到一般命令模式."]},{heading:"四、总结",paragraphs:["这些tmux指令就像我们打游戏放技能一样，不必要记住，熟能生巧，如果忘记了就在看一遍游戏手册(指令)就行了"]}],takeaways:[]},{id:"wp-9",tags:["Linux"],categoryId:"linux",title:"Git",date:"2024-04-11",cover:"🐧",excerpt:"前言 当进入到公司进行多人合作开发项目的时候，版本控制工具是必不可少的. 版本控制是一种记录一个或若干文件内容变化，是对软件开发过程中各种程序代码、配置文件及说明文档等文件变更的管理，是软件配置管理的核心思想之一. 版本控制工具目前主要的就...",sections:[{heading:"前言",paragraphs:["当进入到公司进行多人合作开发项目的时候，版本控制工具是必不可少的. 版本控制是一种记录一个或若干文件内容变化，是对软件开发过程中各种程序代码、配置文件及说明文档等文件变更的管理，是软件配置管理的核心思想之一. 版本控制工具目前主要的就是两个**Svn**和**Git** .两者类似但不完全相同，本篇文章主要讲的是Git."]},{heading:"一、Git 的概念",paragraphs:["**Git:** 一个开源的分布式版本控制系统，可以有效、高速地处理有小到非常大地项目版本管理.",`-   **工作区**：仓库的目录，工作区是独立于各个分支的.
    
-   **暂存区**：数据暂时存放的区域，类似于工作区写入版本库前的缓存区，暂存区也是独立于各个分支的.
    
-   **版本库**：存放所有提交到本地仓库的代码版本
    
-   **版本结构**： 树结构，树中的每个节点代表一个代码版本. **如下图所示**:
    
    ![](@img/h98hjo42)`]},{heading:"2.1 全局命令",paragraphs:["1.  `git config --global user.name xxx` :设置全局用户名，信息记录在~/.gitconfig中\n2.  `git config --global user.email xxx@xxx.com`:设置全局邮箱地址，信息记录在~/.gitconfig中\n3.  以上两个在终端只需要设置一次，要修改也可以`vim ~/.gitconfig`进行修改. ![输入图片说明](@img/nd5x1hfd)\n4.  `git init`:将当前目录配置为git 仓库，创建.git文件，并将信息记录在.git文件夹中.\n5.  **.git文件夹的信息** COMMIT\\_EDITMSG FETCH\\_HEAD HEAD ORIG\\_HEAD config description hooks/ index info/ logs/ objects/ refs/ ![输入图片说明](@img/cxinrm89)"]},{heading:"2.2 常用命令",paragraphs:[`| 命令 | 描述 |
| --- | --- |
| git add xxx | 将文件xxx加入到暂存区 |
| git reset xxx | 将文件从暂存区返回工作区 |
| git restore xxx / git checkout xxx | 将工作区的修改全部撤销 |
| git commit -m "备注信息" | 将暂存区的内容提交到**当前分支** |
| git log | 查看当前分支所有的版本 |
| git reflog | 查看HEAD指针的移动历史 |
| git remote add origin 远程仓库地址 | 连接到远程仓库 |
| git remote -v | 查看当前的远程仓库信息 |
| git push | 将当前分支推送到远程仓库 |
| git pull/git fetch | 将远程仓库拉取到本地仓库 |
| git status | 当前仓库的状态 |`]},{heading:"2.3 查看命令",paragraphs:[`| 命令 | 描述 |
| --- | --- |
| git log | 查看当前分支的所有版本 |
| git reflog | 查看\`HEAD\`指针的移动历史 |
| git diff xx | 查看xx文件相对于暂存区修改了哪些内容 |
| git status | 查看当前仓库的状态 |
| git branch | 查看仓库的分支信息 |
| git remote -v | 查看当前的远程连接信息 |`]},{heading:"2.4 撤销命令",paragraphs:[`| 命令 | 描述 |
| --- | --- |
| git reset xxx | 将xxx文件从暂存区返回到工作区 |
| git checkout xxx / git restore xxx | 将xxx文件的修改撤销(xxx文件在工作区) |
| git reset --hard HEAD^ | 将代码库回滚到上一版本 |
| git reset --hard 版本号 | 回滚到某一特定的版本 |`]},{heading:"2.5 远程仓库",paragraphs:[`| 命令 | 描述 |
| --- | --- |
| git remote add origin 远程仓库地址 | 将本地仓库连接到远程仓库 |
| git remote -v | 查看远程分支的信息 |
| git remote remove origin | 取消连接远程仓库 |
| git push | 将当前分支推送到远程仓库 |
| git push --set-upstream origin master | 将本地的主分支推送到远程仓库的主分支上 |
| git clone ssh/url | 将远程仓库拉取到当前目录 |
| git pull/git fetch | 将远程仓库于本地仓库的当前仓库合并 |
| git push -d origin branch\\_name | 删除远程仓库的分支 |`]},{heading:"2.6 分支命令",paragraphs:[`| 命令 | 描述 |
| --- | --- |
| git branch | 查看分支信息 |
| git branch branch\\_name | 创建新分支 |
| git checkout branch\\_name | 切换branch\\_name分支 |
| git merge branch\\_name | 将分支branch\\_name合并到当前分支 |
| git branch -d branch\\_name | 删除本地分支 |
| git push -d origin branch\\_name | 删除远程仓库的分支 |
| git checkout -t origin/branch\\_name | 将远程仓库的分支拉取到本地 |`]},{heading:"3.1 Git是分布式的，SVN是集中式的",paragraphs:["Git是分布式的，所有Git支持离线工作，可以在本地进行很多操作，SVN是集中式的，必须要联网才能进行正常工作.![输入图片说明](@img/bzfsktc4)"]},{heading:"3.2 Git复杂概念多，SVN简单易上手",paragraphs:["Git的命令很多，例如add commit status fetch push等命令"]},{heading:"3.3 Git分支廉价，SVN分支昂贵",paragraphs:["-   分支：使用意味着你可以从开发主线上分离开来，然后在不影响主线的同时继续工作。 Git有本地分支，SVN无本地分支.当你在公司正在写一个任务A时，突然临时接到另一个任务B需要紧急处理，但任务A还没完成，这个时候任务A和任务B要处理同一个代码时，但任务A已经写一部分了，如果用SVN的话只能将这块代码撤销到初始版本才能进行任务B的操作，但用Git的分支就可以直接先从Matser主分支重新创建一个分支去完后任务B，任务B完成后再来完成任务A."]},{heading:"4.总结",paragraphs:["目前SVN还是很多公司用的，SVN简单易懂，在面对中小项目的时候加上其图形界面，SVN还是挺受欢迎的（目前我呆的公司用的就是SVN），但Git确实根据分支这一步还是比SVN稍占优势.Git和SVN都有各自好处，所有两者都是比较好的版本控制工具."]}],takeaways:[]},{id:"wp-10",tags:["Unity"],categoryId:"unity",title:"Unity中的C#底层原理",date:"2024-04-18",cover:"🎮",excerpt:"一、Unity如何运行C# 1.1 Mono和IL2CPP 了解Mono和IL2CPP之前我们先了解一下.NET FrameWork和IL（CIL）,.NET FrameWork是Windows的托管环境，可为其运行的应用提供各种服务，主要...",sections:[{heading:"1.1 Mono和IL2CPP",paragraphs:["了解Mono和IL2CPP之前我们先了解一下.NET FrameWork和IL（CIL）,`.NET FrameWork`是Windows的托管环境，可为其运行的应用提供各种服务，主要包括两个组件:`公共语言运行时（CLR）`,它是处理运行应用的执行引擎;`NET FrameWork类库`：它提供开发人员可从其自己的应用中调试的已测试、可重用代码库.","-   **Mono**:基于Unity的一个开源、跨平台的`.NET`框架实现,`C#`脚本先被`Mono`的C#的编辑器转换为中间语言`IL`（公共中间语言`CIL`），然后在Mono虚拟机上运行，这种方式支持跨平台运行，但是需要在目标平台上安装或移植Mono虚拟机\n    \n-   **IL2CPP**:`IL`代码被转换为`C++`源代码，然后编译成目标平台的本地代码，这种方式能够提高了运行效率，并且可以在不支持`JIT`的编译器的平台上运行，如`IOS`和某些游戏主机平台.\n    \n-   **Mono运行流程图：**\n    \n    ![Mono运行流程图](@img/lylijxq1)\n    \n-   **IL2CPP流程图**:\n    \n    ![](@img/1nnykexj)"]},{heading:"1.2 编译模式",paragraphs:[`-   Just-in-time(JIT):即时编译模式，Unity在程序运行时将CIL语言通过Mono虚拟机转译成机器码，然后执行（Mono执行方式）.
-   Ahead-of-time(AOT):提前编译模式，Unity在程序打包时将IL转换为C++源代码，在编译成目标机器的本地代码并存储在文件中,但程序运行中仍有部分的CIL需要JIT编译.
-   Full-ahead-of-time(Full-AOT):完全静态编译，程序运行前将所有的源码编译成目标平台的机器码(IL2CPP的执行方式).`]},{heading:"1.3 为何引进IL2CPP",paragraphs:["​ 早期，C#是微软的，只能在Windows平台上运行，为解决跨平台的问题，引入了Mono,利用Mono的虚拟机运行在各个平台上，而IL2CPP是因为Mono的平台移植有限，运行效率过低等缺陷，从而加入了IL2CPP的机制.",`-   **可移植性强**:Mono在各平台完成移植的工作量大，每新增一个平台就要把虚拟机移植一遍.ios平台不支持Mono虚拟机的运行，而IL2CPP可以通过c++直接在对应平台上运行.
-   **运行效率高**：由于IL2CPP直接打包为C++代码，可以直接由各平台的C++编辑器转化为机器码，省去了在运行时解释执行的步骤，所以运行效率相比Mono提升了40%左右.`]},{heading:"2.1 托管代码和非托管代码",paragraphs:[`-   托管代码：托管代码是在运行时环境中执行的代码，虚拟机的JIT编译执行的IL代码，其中对象无须手动释放，而是由GC管理(C#、VB.NET、F#).
-   非托管代码：C/C++或C#中以**不安全类型**写的代码.虚拟机无法跟踪到这类代码的对象，其直接操作**系统资源和内存**，需要程序员**手动管理内存分配和释放**.`,"我们一般使用托管代码来编写游戏逻辑，而非托管代码通常用于更底层的架构、第三方库或操作系统接口."]},{heading:"2.2 GC垃圾回收",paragraphs:['GC的全称是"Garbage Collection",也就是垃圾回收，他是一种自动管理**堆内存**的机制，用于管理对象的分配和释放.只对托管代码进行管理.',"Unity基于Mono和IL2CPP的GC机制都是**标记/清除(Mark-Sweep)**算法，这个算法遍历内存中的所有对象，找出所有对象的引用关系，把这些正在使用的**引用对象**标记出来，然后**清除**没有标记的对象.但是这个算法会存在**内存碎片化**的问题.","-   **IL2CPP**:C#本身就有GC，但是`C++`没有，所以在需要IL2CPP的runtime库实现这个GC算法."]}],takeaways:[]},{id:"wp-11",tags:[],categoryId:"insight",title:"心得",date:"2024-05-12",cover:"💭",excerpt:"2024-5-12 心情: 有点忐忑，不安 今天是周天，五一调休的一个周末，只休息一天，女朋友回学校了，一个人在上海，今天一天无聊的很，现在21:00准备开始一篇博客。现在在看一个电视叫&quot;我的阿勒泰&quot;.我女朋友推荐的.刚...",sections:[{heading:"2024-5-12",paragraphs:["心情: 有点忐忑，不安",'今天是周天，五一调休的一个周末，只休息一天，女朋友回学校了，一个人在上海，今天一天无聊的很，现在21:00准备开始一篇博客。现在在看一个电视叫"我的阿勒泰".我女朋友推荐的.刚刚看到一句台词关于写作的:**不知道写作的话，可以先去生活，去受伤！**.']}],takeaways:[]},{id:"wp-12",tags:["行为型设计模式"],categoryId:"pattern",title:"命令模式",date:"2024-05-13",cover:"🏗️",excerpt:"一、概述 最近接触公司一个模块，是公司的首战模块.它其中用的就是命令模式，通过读表创建一个命令队列，然后依次执行.之前没有了解过，一直不知道这个模块是什么内容，最近灵光一现，才发现原来是命令模式.所以写篇博客记录一下. 命令模式是一种常用的...",sections:[{heading:"一、概述",paragraphs:["最近接触公司一个模块，是公司的首战模块.它其中用的就是命令模式，通过读表创建一个命令队列，然后依次执行.之前没有了解过，一直不知道这个模块是什么内容，最近灵光一现，才发现原来是命令模式.所以写篇博客记录一下.","命令模式是一种常用的行为型设计模式，它将请求发送者与请求接收者解耦.请求发送者通过命令对象来间接引用接收者.使用系统具有更好灵活性，再可以不修改现有系统源代码的情况下让相同的发送者对应不同的接收者.",'命令模式的定义比较复杂，有很多术语.如"用不同的请求对客户进行参数化"，"对请求排队""对请求进行排队等".',"命令模式在我看来最主要的地方就是**执行**，命令者(领导)向接受命令者(员工)发送命令，然后接受命令者执行命令，但大部分命令模式都会和队列结合在一起.命令者发送命令，然后接受命令者依次执行命令."]},{heading:"2.1 结构",paragraphs:["命令模式的结构核心在于引用了抽象命令类和具体命令类，发送者只要指定一个命令对象，再通过命令对象来调用请求接受者的处理方法.其结构如图所示","![](@img/elifxzab)","命令模式一般包括4个角色",`-   **Command(抽象命令模式):**抽象命令类一般是一个抽象类或接口类，在其中声明了用于执行请求的**execute**等方法，通过**execute**方法可以调用请求接受者的相关操作.
-   **ConcreteComman(具体命令类):**具体命令类是抽象类命令类的子类，实现了抽象命令类的具体声明方法.具体命令类在实现**execute**方法时调用接受者对象的相关操作.
-   **Invoker(调用者):**调用者即请求发送者，他通过命令对象来**执行**请求.
-   **Receiver(接收者):**接受者执行与请求相关的操作，具体实现对请求的业务处理.`]},{heading:"2.2 命令队列",paragraphs:["在实际应用中，命令模式总是以命令队列出现，一般与工厂模式结合使用，调用者从工厂模式中获取相应的命令，然后以队列的形式依次发送命令.命令队列就像**批处理**一样，对一组命令对象进行批处理."]},{heading:"2.3.1 抽象命令类实现",paragraphs:[`\`\`\`csharp
namespace CommandMode
{
    public abstract class CommandBase
    {
        private string[] _parameters;
        private Action _completeCallBack;
        private int _taskId = 0;
        private CommandStatus _status;
        public CommandBase(string[] parameters, Action completeCallBack, int taskId)
        {
            _parameters = parameters;
            _completeCallBack = completeCallBack;
            _taskId = taskId;
            _status = CommandStatus.Idle;
            OnInit();
        }
        //获得参数
        public string GetParameter(int index)
        {
            if (index < 0 || _parameters.Length <= index) return "";
            return _parameters[index];
        }`,`public string[] GetParameters()
        {
            return _parameters;
        }`,`//指令是否可执行
        public bool IsExecutable()
        {
            return true;
        }
        // 获得指令当前状态
        public CommandStatus GetCommandState()
        {
            return _status;
        }
        // 准备
        public void Prepare()
        {
            if (!ChangeStatusChangeAvailable(CommandStatus.Preparing)) return;
            _status = CommandStatus.Preparing;
            OnPrepare();
            StartExecute();
        }
        //开始执行
        private void StartExecute() 
        {
            if (IsExecutable()) return;
            Execute();
        }
        //执行
        public void Execute()
        {
            if (!ChangeStatusChangeAvailable(CommandStatus.Executing)) return;
            _status = CommandStatus.Executing;
            OnExecute();
        }
        //取消
        public void Cancle()
        {
            if (!ChangeStatusChangeAvailable(CommandStatus.Canle)) return;
            _status = CommandStatus.Canle;
            OnCancel();
        }
        //完成
        public void Complete()
        {
            if (!ChangeStatusChangeAvailable(CommandStatus.Compelete)) return;
            _status = CommandStatus.Compelete;
            _completeCallBack?.Invoke();
            OnComplete();
        }
        //错误
        public void Error()
        {
            if (!ChangeStatusChangeAvailable(CommandStatus.Error)) return;
            _status = CommandStatus.Error;
            OnError();
        }
        //销毁
        public void Dispose()
        {
            if (!ChangeStatusChangeAvailable(CommandStatus.Disposed)) return;
            _status = CommandStatus.Disposed;
            OnDispose();
            _parameters = null;
            _completeCallBack = null;
        }
        public bool IsExecuting()
        {
            return _status == CommandStatus.Executing;
        }`,`public bool ChangeStatusChangeAvailable(CommandStatus status)
        {
            if (_status == CommandStatus.Disposed) return false;
            return _status != status;
        }`,`public abstract void OnInit();
        public abstract void OnPrepare();
        public abstract void OnExecute();
        public abstract void OnCancel();
        public abstract void OnComplete();
        public abstract void OnError();
        public abstract void OnDispose();
    }`,`public enum CommandStatus
    {
        Error       = 0, //出错
        Idle        = 1, //闲置
        Preparing   = 2, //准备执行
        Executing   = 3, //执行中
        Canle       = 4, //取消
        Compelete   = 5, //完成
        Disposed    = 6, //已销毁
    }
}
\`\`\``]},{heading:"2.3.2 具体命令类实现",paragraphs:[`\`\`\`csharp
namespace CommandMode
{
    public class ConcreteCommand : CommandBase
    {
        private int _param = 0;
        public override void OnInit()
        {
            _param = GetIntParameter(1);
        }`,`public override void OnPrepare()
        {
        }`,`public override void OnExecute()
        {`,"}",`public override void OnCancel()
        {`,"}",`public override void OnComplete()
        {`,"}",`public override void OnDispose()
        {`,"}",`public override void OnError()
        {`,`}
    }
}`,`namespace CommandMode
{
    internal class DefaultCommand : CommandBase
    {
        public override void OnComplete()
        {
            base.OnComplete();
        }
    }
}
\`\`\``]},{heading:"2.3.3 命令工厂类实现",paragraphs:[`\`\`\`csharp
namespace CommandMode
{
    public static class CommandFactory
    {
        public static CommandBase CreateCommandExecutor(CommandExecuteName executeName, Action completeCallback, int taskId, string[] stringParams = null, int[] intParams = null)
        {
            CommandBase command = null;
            switch (executeName)
            {
                case CommandExecuteName.ConcreteCommand:
                    command = new ConcreteCommand();
                    break;
                default:
                    command = new DefaultCommand();
                    break;
            }
            command.Init(completeCallback, taskId, stringParams, intParams);
            return command;
        }
    }`,`public enum CommandExecuteName
    {
        ConcreteCommand = 0,
    }
}
\`\`\``]},{heading:"2.3.4 命令队列类实现",paragraphs:["```csharp\nusing System.Threading.Tasks;",`namespace CommandMode
{
    internal class CommandSequence
    {
        private bool _isComplete = false;
        private Action _completeCallBack;
        private List<CommandBase> _commandList;`,`public CommandSequence(CommonConfig commonConfig,  Action completeCallBack) 
        {
            _completeCallBack = completeCallBack;
            _commandList = new List<CommandBase>();
            CreateCommandList(commonConfig);
        }`,`public void CreateCommandList(CommonConfig commonConfig)
        {
            if(commonConfig == null || commonConfig.CommonDatas == null || commonConfig.CommonDatas.Length == 0)
            {
                OnComplete();
                return;
            }
            foreach(var commandData in commonConfig.CommonDatas)
            {
                CommandExecuteName executeName = (CommandExecuteName)commandData.CommandName;
                var taskId = commandData.TaskId;
                var intParams = commandData.IntPramas;
                var stringParams = commandData.StringPramas;
                var command = CommandFactory.CreateCommandExecutor(executeName, OnCurCommandComplete, taskId, stringParams, intParams);
                _commandList.Add(command);
            }
        }
        public bool IsComplete() 
        {
            return _isComplete;
        }
        public bool IsExecuted()
        {
            bool res = false;
            foreach (var command in _commandList)
            {
                var status = command.GetCommandState();
                if (status != CommandStatus.Idle && status != CommandStatus.Preparing) 
                {
                    res = true;
                    break;
                }
            }
            return res; 
        }`,`public void Execute()
        {
            if (_commandList == null || _commandList.Count == 0)
            {
                OnComplete();
                return;
            }
            bool isComplete = true;
            foreach (var command in _commandList)
            {
                var state = command.GetCommandState();
                if (state == CommandStatus.Idle)
                {
                    command.Prepare();
                    isComplete = false;
                    break;
                }
                else if (state == CommandStatus.Compelete)
                {`,`}
                else
                {
                    isComplete = false;
                    break;
                }
            }
            if (isComplete) { OnComplete(); }
        }
        //当前指令执行完毕
        private void OnCurCommandComplete()
        {
            Execute();
        }`,`private void OnComplete()
        {
            _isComplete = true;
            _completeCallBack?.Invoke();
        }
        public void Dispose()
        {
            foreach (var command in _commandList)
            {
                command.Dispose();
            }
            _commandList?.Clear();
            _commandList = null;
        }
    }
    public class CommonConfig
    {
        public CommonData[] CommonDatas;
    }
    public class CommonData
    {
        public int TaskId;
        public int CommandName;
        public int[] IntPramas;
        public string[] StringPramas;
    }
}
\`\`\``]},{heading:"3.1 优点",paragraphs:[`-   **降低系统耦合度:**由于请求者和接受者之间不存在直接引用，因此请求者与接受者两者之间实现完全解耦，使两者之间具有良好的独立性
-   **热插拔:**可以比较容易的实现一个命令队列,新的命令也很容易加入到系统中，新增的命令也不会影响到其他类，满足开闭原则`]},{heading:"3.2 缺点",paragraphs:["使用命令模式可能会导致系统有**过多**的具体命令类，针对每一个请求接收器的调用操作都需要设计一个具体命令类，导致代码中存在很多命令类."]},{heading:"3.3 使用环境",paragraphs:["系统需要在不同的时间指定请求、将请求排队和执行请求，可以很方便地去使用命令模式."]}],takeaways:[]},{id:"wp-13",tags:[],categoryId:"unity",title:"Unity基于Gradle的Android打包",date:"2024-05-14",cover:"🎮",excerpt:"Unity打包apk一般有两种方式，一种是直接在Unity导出apk,还有一种是先导出gradle工程，再通过外部工具对gradle工程进行构建（如Android Studio). 一、什么是Gradle Gradle是一个项目自动化构建的...",sections:[{heading:"Unity基于Gradle的Android打包",paragraphs:["Unity打包apk一般有两种方式，一种是直接在Unity导出`apk`,还有一种是先导出`gradle`工程，再通过外部工具对`gradle`工程进行构建（如Android Studio)."]},{heading:"一、什么是Gradle",paragraphs:["Gradle是一个项目`自动化构建`的开源工具,基于JVM，它使用一种基于Groovy的特定领域语言(DSL)来声明项目设置.DSL语法和Java相接近."]},{heading:"二、Unity导出Gradle工程",paragraphs:[`-   使用UnityHub安装依赖项: 下载"Android Build Support",并且勾选AndroidSDK和NDK工具，以及OpenJDK.
    
    Unity将AndroidSDK&NDK和OpenJDK分别安装在/\\[EditorVersion\\]/Editor/Data/PlaybackEngines/AndroidPlayer/SDK\`\` \`NDK\` \`\`OpenJDK中
    
    ![image-20240513230502949](@img/jbq3xv0r)
    
-   每个Unity版本支持的每个依赖项的版本信息都是不同的，每个Unity都需要特定版本的Android NDK和Android JDK,但Android SDK没有确切的版本要求
    
    ![image-20240513230912531](@img/7if01pja)
    
    ![image-20240513231015844](@img/5fz1zbpe)
    
    ![image-20240513231027127](@img/bx260wgn)
    
-   适用于Android的外部工具: External Tools:
    
    ![image-20240513231349815](@img/8me6knc7)
    
-   打包时勾选\`Export Project\`点击Export后就会得到Gradle文件夹.`]},{heading:"三、Unity的Grade的层次结构",paragraphs:["![image-20240513232419374](@img/esbhwnad)"]},{heading:"3.1 Launcher",paragraphs:["![image-20240513232734066](@img/6yy6wehy)","启动器部分，其中包含应用程序的名称及其图标.默认是可启动Unity的简单Android应用程序.","-   src：启动器模块的代码和资源\n-   build.gradle:\n    -   描述如何构建启动器模块，并包含要在构建中包含的依赖项列表\n    -   依赖于`unityLibrary`模块，当构建启动器模块时，unityLibrary必须包含在最终结果中\n    -   对呀自定义Gradle的`Custom Launcher Gradle Template`文件"]},{heading:"3.2 UnityLibrary",paragraphs:["![image-20240513234140800](@img/tz9ybi95)","Unity模块，包含Unity运行时和播放器数据，可以集成到其他任何Gradle项目中.",`-   libs:
    
    -   用于存放unityLibrary模块的Android Archive(.arr)和java Archive(.jar)插件
    -   导出的Unity项目，包含了unity-classes.jar文件(Unity引擎使用的java代码)
-   src:包含unityLibrary模块的源代码和资源.Unity将源代码和资源放在次目录中（AndroidManifest.xml和java代码等）.
    
-   build.gradle:
    
    -   描述了如何构建unityLibrary模块，并包含了构建中要包含的依赖项列表
    -   unityLibrary模块依赖于Unity项目中的所有插件
    -   对呀自定义Gradle的\`Custom Main Gradle Template\`文件`]},{heading:"3.3 build.gradle",paragraphs:[`-   整体项目的构建逻辑，负责引入所需的全部子项目Gradle并触发每个构建命令
-   文件位于项目的根目录下，用于定义适用于项目中的所有模块的依赖项.
-   会影响所有模块的配置.
-   可包含用于清理build目录的代码
-   用于指定\`Android Gradle Plugin\`版本
-   对呀自定义Gradle的 \`Custom Base Gradle Template\`文件`]},{heading:"3.4 gradle.properties",paragraphs:[`-   配置了Gradle和JVM的属性
-   配置守护进程并管理构建过程中启动JVM的方式
-   Unity默认添加了数据流文件资源目录中的资源类型**unityStreamingAssets=.unity3d**，告诉Gradle不应该压缩它们。多个文件用","进行分割。
-   对呀自定义Gradle的\`Custom Gradle Properties Template\`文件`]},{heading:"3.5 local.properties",paragraphs:["-   用于配置本地环境属性，如Android SDK或者Android NDK"]},{heading:"3.6 setting.gradle",paragraphs:[`-   用于多项目构建或者具有子项目的项目的定义文件
-   Unity中通常包含launcher和unityLibrary
-   如果使用Play Asset Delivery，由于所有的资源包都是单独的模块，所以将会列出每个资源模块.`]},{heading:"4.1 自定义Gradle模板变量",paragraphs:[`| 变量 | 描述 |
| --- | --- |
| dependencies | 项目依赖项（即，项目使用的库）的列表。 |
| compileSdkVersion | 构建针对的 API 版本（例如 25） |
| buildToolsVersion | 使用的 SDK 构建工具（例如 25.0.1） |
| minSdkVersion | 最小兼容的Android平台版本 |
| targetSdkVersion | 目标 API 版本（例如，25） |
| versionCode | 版本码，递增的整数 |
| versionName | 版本名 |
| consumerProguardFiles | Proguard的配置文件 |
| applicationId | Android 应用程序 ID（例如，com.mycompany.myapp） |`]},{heading:"4.2 Custom Main Gradle Template",paragraphs:['此文件包含有关如何将Unity的 Android 应用程序构建为库的配置信息,对应Gradle结构的"unityLibrary/build.gradle"文件.',`\`\`\`java
//表述这个工程的工程类型，一般包含3种：
//App类型工程：apply plugin: 'com.android.application'
//库类型工程:apply plugin: 'com.android.library'
//Test工程类型:apply plugin: 'com.android.test'
apply plugin: 'com.android.library'`,`//指构建工程所依赖的所有依赖项
dependencies {
    //一般来说有3种依赖类型
    //对于本地模块的依赖:implementation project(':mylibrary') [mylibrary此名称必须与在您的 settings.gradle 文件中使用 include: 定义的库名称相符）]
    //本地文件依赖项:implementation fileTree(dir: 'libs', include: ['*.jar'])[对项目的libs目录中 JAR 文件的依赖关系,Gradle会读取build.gradle文件的相对路径]
    //也可以按如下方式指定各个文件：implementation files('libs/foo.jar', 'libs/bar.jar')
    //远程文件依赖项:implementation 'com.example.android:app-magic:12.3'[实际是implementation group: 'com.example.android', name: 'app-magic', version: '12.3'的简写]
    implementation fileTree(dir: 'libs', include: ['*.jar'])
}
//针对Android选项的配置块
android {
    //编译依赖的SDK版本
    compileSdkVersion 29
    //构建工具版本
    buildToolsVersion '30.0.2'`,`//编译选项
    compileOptions {
        //这里配置的是Java 语言的的源码版本
        sourceCompatibility JavaVersion.VERSION_1_8
        //这里配置的是Java生成的字节码版本
        targetCompatibility JavaVersion.VERSION_1_8
    }
    //默认的配置
    defaultConfig {
        //最小兼容的Android平台版本，如果低于此版本将会阻止用户安装。
        minSdkVersion 19
        //指定我们基于哪个版本开发。
        targetSdkVersion 29`,`ndk {
            //ABI 是 Application Binary Interface 的缩写。帮助适配不同的CPU架构。
            //把除了v7a以外的兼容包都过滤掉
            abiFilters 'armeabi-v7a'
        }
        //版本码，是一个递增的整数
        versionCode 1
        //版本名
        versionName '1.0.2'
        //Proguard的配置文件，这里面有两个文件一个是unity自身的配置还有一个是我们自己配置的Proguard配置文件
        consumerProguardFiles 'proguard-unity.txt', 'proguard-user.txt'
    }
    //Lint选项配置
    lintOptions {
        //当发生错误不终止构建
        //更多lint配置：https://developer.android.google.cn/reference/tools/gradle-api/4.1/com/android/build/api/dsl/LintOptions?hl=cn
        abortOnError false
    }
    //aapt全称为Android Asset Packaging Tool，为Android资源打包工具。
    //https://developer.android.google.cn/reference/tools/gradle-api/4.1/com/android/build/api/dsl/AaptOptions?hl=en
    aaptOptions {
        //这里表示这些文件类型不会被压缩存储在APK中。
        //unityStreamingAssets.tokenize 这里获取的是gradle.properties文件中unityStreamingAssets的配置。
        noCompress = ['.ress', '.resource', '.obb'] + unityStreamingAssets.tokenize(', ')
        //需要忽略的资源类型
        ignoreAssetsPattern = "!.svn:!.git:!.ds_store:!*.scc:.*:!CVS:!thumbs.db:!picasa.ini:!*~"
    }
    //Packaging选项
    //https://developer.android.google.cn/reference/tools/gradle-api/7.4/com/android/build/api/dsl/PackagingOptions?hl=en
    packagingOptions {
        //设置armeabi-v7a相关文件不会被剥离优化压缩
        doNotStrip '*/armeabi-v7a/*.so'
    }
}
\`\`\``]},{heading:"4.3 Custom Launcher Gradle Template",paragraphs:['此文件包含有关如何构建 Android 应用主模块的配置，对应Gradle结构的"unityLibrary/launcher.gradle"文件。',"```java\n//此模块为App应用\napply plugin: 'com.android.application'",`dependencies {
    //依赖于unityLibrary本地模块
    implementation project(':unityLibrary')
}`,`android {
    compileSdkVersion 29
    buildToolsVersion '30.0.2'`,`compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }`,`defaultConfig {
        minSdkVersion 19
        targetSdkVersion 29
        //设置applicationId，appi要与包名一致，这里Unity会帮我们通过playersetting设置
        applicationId 'com.DefaultCompany.com.unity.template.mobile2D'
        ndk {
            abiFilters 'armeabi-v7a'
        }
        versionCode 1
        versionName '1.0.2'
    }`,`aaptOptions {
        noCompress = ['.ress', '.resource', '.obb'] + unityStreamingAssets.tokenize(', ')
        ignoreAssetsPattern = "!.svn:!.git:!.ds_store:!*.scc:.*:!CVS:!thumbs.db:!picasa.ini:!*~"
    }`,`lintOptions {
        abortOnError false
    }
    //这里用于配置我们不同的构建类型
    buildTypes {
        debug {
            //是否启用混淆,启用之后增加反编译成本
            minifyEnabled false
            //设置混淆文件规则
            //getDefaultProguardFile('proguard-android.txt')从Android SDK tools/proguard/文件夹获取默认的 ProGuard规则文件，为我们提供的默认混淆规则文件。
            //proguardFiles getDefaultProguardFile('proguard-android.txt'),'proguard-rules.pro' 可以设置自定义混淆规则文件。
            //proguard-rules.pro用于添加自定义位于模块根目录。
            proguardFiles getDefaultProguardFile('proguard-android.txt')
            //签名配置
            signingConfig signingConfigs.debug
            //是否激活NDK调试
            jniDebuggable true
        }
        release {
            minifyEnabled false
            proguardFiles getDefaultProguardFile('proguard-android.txt')
            signingConfig signingConfigs.debug
        }
    }`,`packagingOptions {
        doNotStrip '*/armeabi-v7a/*.so'
    }
    //改进的应用程序打包方式，能大幅度减少应用体积。
    //默认情况下，构建器会自动根据CPU架构对屏幕分辨率、语言等维度将app 分拆，如果希望自由控制分拆维度，可以在此控制。
    //android 5.0以下不支持bundle
    bundle {
        //对语言进行拆分
        language {
            enableSplit = false
        }
        //对屏幕密度进行拆分
        density {
            enableSplit = false
        }
        //对不同CPU架构进行拆分
        abi {
            enableSplit = true
        }
    }
}
\`\`\``]},{heading:"4.4 Custom Base Gradle Template",paragraphs:[`\`\`\`java
//在这里指定所有模块的依赖项和远程仓
//当只有单个模块需要的依赖项应该放在对应的模块级的build.gradle文件中。
allprojects {
    //gradle脚本执行所需的依赖项和远程仓
    buildscript {
        //使用JCenter和Google作为远程仓,本质就是个Maven仓库
        repositories {
            google()
            jcenter()
        }
        //配置依赖关系
        dependencies {
            classpath 'com.android.tools.build:gradle:3.6.0'            
        }
    }
    //当前项目所需的依赖项和远程仓
    //使用JCenter和Google作为远程仓
    repositories {
        google()
        jcenter()
        //设置源类型目录位置
        //这里设置我们的unityLibrary模块的libs文件夹
        flatDir {
            dirs "\${project(':unityLibrary').projectDir}/libs"
        }
    }
}
//定义了一个任务，用于删除项目中build文件夹下的内容
task clean(type: Delete) {
    delete rootProject.buildDir
}
\`\`\``]},{heading:"4.5 Custom Gradle Properties Template",paragraphs:['此文件包含 Gradle 构建环境的配置设置,对应Gradle结构的"gradle.properties"文件。',`\`\`\`java
//分配给守护进程，JVM内存的大小，分配较高的值对提高构建性能特别有用。
org.gradle.jvmargs=-Xmx4096M
//多个构建任务进行并行执行
org.gradle.parallel=true
//Android Gradle插件3.4.0或更高版本时可用，R8和Proguard 相比，R8 可以更快地缩减代码，同时改善输出大小。
android.enableR8=false
//不对.unity3d在构建应用时进行压缩
unityStreamingAssets=.unity3d
\`\`\``]},{heading:"五、 Gradle构建APK",paragraphs:["利用python脚本在Gradle工程中构建apk","-   构建apk脚本:",'```python\nimport os\n# gradle路径 user\\.gradle\\wrapper\\dists\\gradle版本号\nGradle =r"C:\\Users\\lwy\\.gradle\\wrapper\\dists\\gradle-6.1.1-bin\\4i3ntwqiazourd86epxcz427c\\gradle-6.1.1\\bin"',`def StartBuild(gradlePath):
    os.chdir(gradlePath)
    # jdk路径
    os.putenv("JAVA_HOME", r"C:\\Users\\lwy\\.jdks\\corretto-1.8.0_412")
    # android sdk路径
    os.putenv("ANDROID_HOME", r"D:\\Android\\SDK")
    # gradle路径
    os.putenv("GRADLE_BIN", r"C:\\Users\\lwy\\.gradle\\wrapper\\dists\\gradle-6.1.1-bin\\4i3ntwqiazourd86epxcz427c\\gradle-6.1.1\\bin")`,`os.system('{}\\gradle clean'.format(Gradle))
    os.system('{}\\gradle init'.format(Gradle))
    os.system('{}\\gradle wrapper'.format(Gradle))`,"os.system('gradlew assembleDebug')",`if __name__ == '__main__':
    # 游戏工程路径
    gradlePath = r"D:\\Test\\Fina"
    StartBuild(gradlePath)
    os.system("pause")
\`\`\``,"-   内网制作android gradle plugin库",`1.  复制android gradle plugin本地仓库(需在外网下载)C:\\\\Users\\\\lwy.gradle\\\\caches\\\\modules-2\\\\files-2.1
    
2.  利用（ProcessAndroidDependenceFile.py）脚本将文件夹变为可识别仓库
    
3.  修改build.gradle的maven 路径(整个文件)
    
    **ProcessAndroidDependenceFile.py**：
    
    \`\`\`python
     import os
     import shutil
     import sys
     # 本地缓存路径
     srcFolderPath = "C:\\Users\\lwy\\.gradle\\caches\\modules-2\\files-2.1"
     # 目标路径
     dstFolderPath = "D:/Android/repository"
    
     class DataInfo:
         def __init__(self, destPath, srcPath):
             self.DestPath = destPath
             self.SrcPath = srcPath
    
     def Start():
         print("ProcessStart=>" + srcFolderPath)
         FilesList = []
    
         for root, dirs, files in os.walk(srcFolderPath):
             for f in files:
                 # print("FileName : " + os.path.join(root, f))
                 srcPath = os.path.join(root, f)
                 lastIndex = root.rfind('\\\\')
                 curPath = root[0:lastIndex]
                 filesIndex = curPath.find('files-2.1')
                 filesLen = len('files-2.1')
                 totalLen = filesIndex + filesLen + 1
                 str_1 = curPath[0:totalLen]
                 str_1 = str_1.replace("Test", "Temp")
    
                 remainStr = curPath[totalLen:]
                 firstIndex = remainStr.find('\\\\')
                 str_3 = remainStr[firstIndex + 1:]
                 firstStr = remainStr[0:firstIndex]
                 str_2 = firstStr.replace('.', '\\\\')
                 destPath = str_1 + str_2 + "\\\\" + str_3
                 destPath = destPath.replace("\\\\", '/')
    
                 destPath = destPath.replace(srcFolderPath, dstFolderPath)
                 dataInfo = DataInfo(destPath, srcPath)
                 FilesList.append(dataInfo)
    
         for item in FilesList:
             if not os.path.exists(item.DestPath):
                 os.makedirs(item.DestPath)
             try:
                 shutil.copy(item.SrcPath, item.DestPath)
             except IOError as e:
                 print("Unable to copy file. %s" % e)
             except:
                 print("Unexpected error:", sys.exc_info())
    
         print("ProcessFinished...")
    
     if __name__ == '__main__':
         Start()
    \`\`\`
    
    **build.gradle**：
    
    \`\`\`java
     // GENERATED BY UNITY. REMOVE THIS COMMENT TO PREVENT OVERWRITING WHEN EXPORTING AGAIN
    
     allprojects {
         buildscript {
             repositories {
                 //google()
                 //jcenter()
                maven {
                     // 本地路径
                    url 'D:/Android/repository'
                    metadataSources{
                        mavenPom()
                    }
                }
             }
    
             dependencies {
                 classpath 'com.android.tools.build:gradle:4.0.1'
    
             }
         }
    
         repositories {
             google()
             jcenter()
            maven {
                url 'D:/Android/repository'
                metadataSources{
                    mavenPom()
                }
            }
             flatDir {
                 dirs "\${project(':unityLibrary').projectDir}/libs"
             }
         }
     }
    
     task clean(type: Delete) {
         delete rootProject.buildDir
     }
    \`\`\``]}],takeaways:[]},{id:"wp-14",tags:["设计模式"],categoryId:"pattern",title:"设计模式",date:"2024-05-27",cover:"🏗️",excerpt:"一、设计模式概念 1.1 设计模式是什么 设计模式是软件设计中常见问题的典型解决方案，他们就像能根据需求进行调整的预制蓝图，可用于解决代码中反复出现的设计问题.设计模式就是问题反复出现，然后通过设计来解决问题，然后记录下来解决方式，进行总结...",sections:[{heading:"1.1 设计模式是什么",paragraphs:["设计模式是软件设计中常见问题的典型解决方案，他们就像能根据需求进行调整的预制**蓝图**，可用于解决代码中反复出现的设计问题.设计模式就是问题反复出现，然后通过设计来解决问题，然后记录下来解决方式，进行总结就成为了设计模式.","**设计模式:在某个场景下，针对某类问题的某种通用的解决方案.**",`-   **场景**:项目所在的环境
    
-   **问题：**约束**条件**，项目目标等
    
-   **解决方案：**通用、可复用的设计，解决约束达到的目标`]},{heading:"1.2 设计模式的作用",paragraphs:["使用设计模式是为了可重用代码、让代码更容易被他人理解、保证代码可靠性。",`-   **可重用性:**使功能相同的代码，不需要多次编写
-   **可读性:**编程规范性，在项目开发中，便于其他程序员的阅读和理解
-   **可扩展性:**当需要添加新的功能时，对原来的功能没有影响
-   **高内聚低耦合：**一个模块内各个元素彼此结合的紧密程度高（高内聚），不同的模块之间独立存在(低耦合)`]},{heading:"2.1 根据目的分类",paragraphs:["设计模式根据目的分类（模式用来做什么的）一共分为三大类,分别是创建型模式、结构型模式、行为型模式.",`-   **创建型模式：**针对对象实例化的模式，用于解耦对象的实例化过程
-   **结构型模式：**将对象和类组装成较大的结构，并同时保持结构的灵活性和高效性
-   **行为型模式：**对象之间如何高效沟通和职责划分.`,"![image-20240519225959883](@img/o2cxfz9b)"]},{heading:"2.2 根据范围分类",paragraphs:["设计模式根据范围分类（模式主要用于处理类之间的关系还是处理对象之间的关系）可分为两大类，分别是**类模式**和**对象模式**",`-   **类模式:**处理类和子类之间的关系，这些关系通过继承建立，在编译时就被确定下来
-   **对象模式：**处理对象之间的关系，这些关系在随时改变，更具有动态性`,"![image-20240519234932970](@img/v4ivfgv3)"]},{heading:"3.1 创建者模式",paragraphs:[`-   **单例模式:**某个**静态类**只有一个实例，且提供一个全局的访问点.
-   **工厂模式：**提供一个创建对象的方法，让其子类决定需要实例化哪个工厂类.
-   **抽象工厂：**提供一个创建一系列相关或相互依赖对象的接口，而无需指定他们具体的类.
-   **建造者模式：**将一个**复杂对象**的构建与它的**表示**分离，使同样的构建过程可以创建不同的表示.
-   **原型模式：**通过原型实例指定创建对象的类型，通过**复制**这个原型来创建新的对象.`]},{heading:"3.2 结构型模式",paragraphs:[`-   **适配器模式:**将一个类的接口转换为客户希望的另一个接口，让那些接口不兼容的类可以一起工作.
-   **桥接模式:**将抽象部分与它实现的部分解耦，使两者都可以独立的变化
-   **组合模式：**组合多个对象形成**树状结构**以表示具有**部分-整体**关系的层次结构.
-   **装饰模式：**动态地给对象增加一些额外的职责（**拓展功能**）
-   **外观模式：**为子系统中的一组接口提供了一个统一的入口.
-   **享元模式：**通过共享技术有效地支持大量的**细粒度对象**的复用.
-   **代理模式：**给对象提供一个代理或占位符，并由代理对象来控制对原对象的访问`]},{heading:"3.3 行为者模式",paragraphs:[`-   **责任链模式：**一个请求需要在多个对象之间传递，每个对象都可能**处理**该请求或者将其传递给下一个对象。
-   **命令模式：**将请求封装成一个所有信息独立的对象，可以根据不同的请求对方法进行参数化、延迟请求执行或将其放入队列中。
-   **解释器模式：**给定一个语言，定义它的**文法**的一种表示，并定义一个解释器，这个解释器用来解释语言中的句子。
-   **迭代器模式：**提供一个方法顺序访问聚合对象的各个元素，而又不用暴露该对象的内部表示。
-   **中介者模式：**定义一个中间对象来封装一系列对象之间的交互，中间者可以使个对象之间不需要显式地相互应用，从而使其耦合松散，可以独立地改变它们之间地交互。
-   **备忘录模式：**在不破坏封装地前提下捕获一个对象的内部状态，并在对象之外保存该状态，可以在以后恢复对象之前的状态。
-   **观察者模式：**定义了对象之间的一个一对多的依赖关系，当一个被依赖的对象状态发生改变时，依赖的对象状态也会随之改变。
-   **状态模式：**让一个对象的内部状态发生变化时改变其行为，使其看上去改变了自身所属的类一样。
-   **策略模式：**定义一系列算法，将每个算法给封装起来，并让它们能够相互替换，**算法的变化**不会影响到使用算法的客户。
-   **模板模式：**定义一个操作中方法框架，允许子类在不修改结构的情况下重新方法的特定步骤。
-   **访问者模式：**表示一个作用于某对象结构的各个元素的操作。`]},{heading:"四、 设计模式的六大原则",paragraphs:["![image-20240527220545310](@img/4v4t9igm)"]},{heading:"4.1 单一职责原则",paragraphs:["**定义:**一个对象应该只包含单一职责，并且该职责被完整地封装在一个类中。","**优点:**",`-   可以降低类的复杂度，一个类只负责一项职责。
    
-   提高类的可读性，提高系统的可维护性。
    
-   变更引起的风险降低，高类聚，低耦合。`]},{heading:"4.2 开放封闭原则",paragraphs:["**定义:**一个软件实体(类、模块、函数)应该对外扩展，对修改关闭。","**关键点:用抽象构建框架，用实现扩展细节**","其实，剩下的那5项原则，恰恰是告诉我们用抽象构建框架，用实现扩展细节的注意事项而已：",`1.  **单一职责原则告诉我们实现类要职责单一；**
2.  **里氏替换原则告诉我们不要破坏继承体系；**
3.  **依赖倒置原则告诉我们要面向接口编程；**
4.  **接口隔离原则告诉我们在设计接口的时候要精简单一；**
5.  **迪米特法则告诉我们要降低耦合。**
6.  **开闭原则是总纲，他告诉我们要对扩展开放，对修改关闭。**`]},{heading:"4.3 里氏替换原则",paragraphs:["**定义:**所有引用基类的地方必须能够透明地使用其子类地对象","**关键点:**",`-   子类可以实现父类的抽象方法，但不能覆盖父类的非抽象方法。
-   子类可以增加自己特有的方法。
-   父类设计为抽象类或者接口，让子类继承父类或实现父类接口`]},{heading:"4.4 依赖倒置原则",paragraphs:["**定义:**高层模块不应该依赖低层模块，它们都应该依赖抽象。**抽象不应该依赖细节，细节应该依赖于抽象**，","**关键点:针对接口编程，不要针对实现编程。**","**优点:**",`-   降低类之间的耦合性。
-   提高系统的稳定性，降低修改程序造成的风险。`]},{heading:"4.5 接口隔离原则",paragraphs:["**定义:**客户端不应该依赖它不需要的接口。","**关键点:**",`-   接口尽量小，但是要有限度，如果过小会导致系统接口泛滥，不利于维护
-   为依赖接口的类定制服务，只暴露给调用的类它需要的方法，它不需要的方法则隐藏起来。`]},{heading:"4.6 迪米特原则(最少知道原则)",paragraphs:["**定义：**一个对象应该对其他对象保持最少的了解。即一个类对自己依赖的类知道的越少越好（只与直接的朋友通信） 每个对象都会与其他对象有耦合关系，只要两个对象之间有耦合关系，我们就说这两个对象之间是朋友关系。","耦合的方式很多，如依赖、关联、组合、聚合等。其中，我们称出现**成员变量**、**方法参数**、**方法返回值**中的类为直接的朋友，而出现在**局部变量**中的类则不是直接的朋友。也就是说，陌生的类最好不要作为局部变量的形式出现在类的内部。"]}],takeaways:[]},{id:"wp-15",tags:["Unity"],categoryId:"unity",title:"Unity的List底层源码剖析",date:"2024-05-29",cover:"🎮",excerpt:"我们在Unity经常会使用List类型，但是却没有好好了解过List类型，它其实是使用了一个连续的内存块来存储元素，它的结构有点类似链表，但又与链表有着许多不同的地方.让我们来了解一下List的底层实现. C#的List源码: C#源码 一...",sections:[{heading:"Unity的List底层源码剖析",paragraphs:["我们在Unity经常会使用`List`类型，但是却没有好好了解过`List`类型，它其实是使用了一个连续的内存块来存储元素，它的结构有点类似链表，但又与链表有着许多不同的地方.让我们来了解一下`List`的底层实现.","C#的List源码: [C#源码](https://referencesource.microsoft.com/#mscorlib/system/collections/generic/list.cs)"]},{heading:"一、构造函数",paragraphs:["`List`是C#中一个常见的可伸缩的数组组件，通常用来代替数组，其底层的数据结构就是基于数组（非链表）.由于它是可伸缩的，所有我们在编写程序的时候不需要手动的去分配数组的大小，甚至将它当作一个链表去使用.","当我们创建一个List实例时，如果没有指定容量和集合的话，那么初始容量为0，`List`内部的数组大小为0","```csharp\npublic class List<T> : IList<T>, System.Collections.IList, IReadOnlyList<T>\n{\n    private const int _defaultCapacity = 4;",`private T[] _items; // 主要数组
    private int _size; // 数组大小(非容量)
    private int _version; // List的版本（List内部维持）`,"static readonly T[] _emptyArray = new T[0]; // 默认空数组",`// 构造函数: 默认为空数组，容量为0
    public List()
    {
        _items = _emptyArray;
    }`,`// 构造函数：声明初始容量
    public List(int capacity)
    {
        if (capacity < 0) ThrowHelper.ThrowArgumentOutOfRangeException(ExceptionArgument.capacity, ExceptionResource.ArgumentOutOfRange_NeedNonNegNum);
        Contract.EndContractBlock();`,`if (capacity == 0)
            _items = _emptyArray;
        else
            _items = new T[capacity];
    }`,`// 构造函数：声明集合的内容，列表的大小和容量都等于给定的集合 
    public List(IEnumerable<T> collection)
    {
        if (collection == null)
            ThrowHelper.ThrowArgumentNullException(ExceptionArgument.collection);
        Contract.EndContractBlock();`,`ICollection<T> c = collection as ICollection<T>;
        if (c != null)
        {
            int count = c.Count;
            if (count == 0)
            {
                _items = _emptyArray;
            }
            else
            {
                _items = new T[count];
                c.CopyTo(_items, 0);
                _size = count;
            }
        }
        else
        {
            _size = 0;
            _items = _emptyArray;
            using (IEnumerator<T> en = collection.GetEnumerator())
            {
                while (en.MoveNext())
                {
                    Add(en.Current);
                }
            }
        }
    }
}
\`\`\``]},{heading:"二、List的Capacity",paragraphs:["Capacity即list的容量，当List的容量不足时，就会整个数组的容量都动态地扩容一倍。",`\`\`\`csharp
    public int Capacity
    {
        get => this._items.Length;
        set
        {
            if (value < this._size)
                ThrowHelper.ThrowArgumentOutOfRangeException(ExceptionArgument.value, ExceptionResource.ArgumentOutOfRange_SmallCapacity);
            if (value == this._items.Length)
                return;
            if (value > 0)
            {
                T[] destinationArray = new T[value];
                if (this._size > 0)
                    // 将原数组的数据拷贝到新数组中
                    Array.Copy((Array)this._items, (Array)destinationArray, this._size);
                this._items = destinationArray;
            }
            else
                this._items = List<T>._emptyArray;
        }
    }
\`\`\``]},{heading:"三、Add接口剖析",paragraphs:["`List`每次添加一个元素时,都会判断数组的容量够不够，如果不够将调用`Grow`函数来增加容量.","其中`Grow` 函数有这么一行代码","`int num = this._items.Length = 0 ? _defaultCapacity : 2 * this._items.Length;`","**每次容量不够时，整个数组的容量都会扩增一倍**, \\_defaultCapacity表示容量的默认值为4，因此扩充的路线为4, 8, 16, 32, 64, 128, 256, 512 ...以此类推。","**注意:** List频繁的使用Add时，数组会不断被扩容，如果使用不当，会浪费大量内存空间，也会造成GC的不小负担。",`\`\`\`csharp
    public void Add(T item)
    {
        ++this._version;
        T[] items = this._items;
        int size = this._size;
        if ((uint)size < (uint)items.Length)
        {
            this._size = size + 1;
            items[size] = item;
        }
        else
            this.AddWithResize(item);
    }`,`private void AddWithResize(T item)
    {
        int size = this._size;
        this.Grow(size + 1);
        this._size = size + 1;
        this._items[size] = item;
    }`,`internal void Grow(int capacity)
    {
        int num = this._items.Length == 0 ? _defaultCapacity : 2 * this._items.Length;
        if ((uint)num > 2147483591U)
            num = 2147483591;
        if (num < capacity)
            num = capacity;
        this.Capacity = num;
    }
\`\`\``]},{heading:"四、Remove接口剖析",paragraphs:["Remove()函数中包括`IndexOf()`和`RemoveAt()`函数, 其中使用`IndexOf()`是利用`Array.IndexOf`接口来查找元素的索引位置，使用`RemoveAt`是利用`ArrayCopy`接口将指定位置的后面元素进行覆盖，从而来删除指定位置的元素。",`\`\`\`csharp
    public bool Remove(T item)
    {
        int index = this.IndexOf(item);
        if (index < 0)
            return false;
        this.RemoveAt(index);
        return true;
    }`,`public int IndexOf(T item)
    {
        return Array.IndexOf<T>(this._items, item, 0, this._size);
    }`,`public void RemoveAt(int index)
    {
        if ((uint)index > (uint) this._size)
            ThrowHelper.ThrowArgumentOutOfRange_IndexMustBeLessException();
        --this._size;
        if (index < this._size)
            Array.Copy((Array)this._items, index + 1, (Array)this._items, index, this._size - index);
        if (RuntimeHelpers.IsReferenceOrContainsReferences<T>())
            this._items[this._size] = default (T);
        ++this._version;
    }
\`\`\``]},{heading:"五、Insert接口剖析",paragraphs:["与Add接口一样，先检查数组容量是否足够，不足则扩容两倍。`Insert()`插入元素时，采用的与Remove类似，是复制数组的形式，将数组里指定元素后面的所有元素向后移动一个位置。",`\`\`\`csharp
    public void Insert(int index, T item)
    {
        if ((uint)index > (uint) this._size)
            ThrowHelper.ThrowArgumentOutOfRangeException(ExceptionArgument.index, ExceptionResource.ArgumentOutOfRange_ListInsert);
        if (this._size == this._items.Length)
            this.Grow(this._size + 1);
        if (index < this._size)
            Array.Copy((Array)this._items, index, (Array)this._items, index + 1, this._size - index);
        this._items[index] = item;
        ++this._size;
        ++this._version;
    }
\`\`\``]},{heading:"6.1 []接口",paragraphs:["\\[\\]接口是直接使用数组的索引方式获取元素。",`\`\`\`csharp
    public T this[int index]
    {
        get
        {
            if ((uint) index> (uint) _size)
                ThrowHelper.ThrowArgumentOutOfRange_IndexMustBeLessException();
            return _items[index];
        }
        set
        {
            if ((uint) index > (uint) _size)
                ThrowHelper.ThrowArgumentOutOfRange_IndexMustBeLessException();
            _items[index] = value;
            _version++;
        }
    }
\`\`\``]},{heading:"6.2 Clear接口",paragraphs:["采用了`Array.Clear()`清除对象引用的标记，便于垃圾回收。",`\`\`\`csharp
    public void Clear()
    {
        ++this._version;
        if (RuntimeHelpers.IsReferenceOrContainsReferences<T>())
        {
            int size = this._size;
            this._size = 0;
            if (size < 0)
                return;
            Array.Clear(this._items, 0, _size);
        }
        else
            this._size = 0;
    }
\`\`\``]},{heading:"6.3 Contains接口",paragraphs:["直接使用`Array.IndexOf`查找元素是否存在。","```csharp\n    public bool Contains(T item) => this._size != 0 && this.IndexOf(item) > 0;\n```"]},{heading:"6.4 ToArray接口",paragraphs:["`ToArray`接口是重新创建了一个大小一直的数组，然后将原有数组上的内容复制到新数组中，在将新数组返回。","**注意**:如果使用过多，就会造成大量内存的分配，会使内存上留上很多无用的垃圾。",`\`\`\`csharp
    public T[] ToArray()
    {
        if (this._size == 0)
            return List<T>._emptyArray;
        T[] destinationArray = new T[this._size];
        Array.Copy((Array) this._items, (Array)destinationArray, this._size);
        return destinationArray;
    }
\`\`\``]},{heading:"6.5 Find接口",paragraphs:["查找接口，线性查找，对每个元素进行比较，时间复制度为O(n)",`\`\`\`csharp
    public T? Find(Predicate<T> match)
    {
        if (match == null)
            ThrowHelper.ThrowArgumentNullException(ExceptionArgument.match);
        for (int index = 0; index < this._size; index++)
        {
            if (match(this._items[index]))
                return this._items[index];
        }`,"return default(T);\n    }\n```"]},{heading:"6.6 Enumerator接口",paragraphs:["Enumerator接口是枚举迭代部分细节的接口，**注意：每次获得迭代器时，Enumerator都会被创建出来，如果大量使用迭代器，则会产生大量的垃圾**,所有我们在开发时尽量不要使用foreach。","```csharp\npublic List<T>.Enumerator GetEnumerator() => new Enumerator(this);",`public struct  Enumerator : IEnumerator<T>, IDisposable, IEnumerator
    {
        private readonly List<T> _list;
        private int _index;
        private readonly int _version;
        private T _current;`,`internal Enumerator(List<T> list)
        {
            this._list = list;
            this._index = 0;
            this._version = list._version;
            this._current = default(T);
        }`,`public void Dispose()
        {`,"}",`public bool MoveNext()
        {
            List<T> list = this._list;
            // _version判断是否对list有修改
            if (this._version != list._version || (uint)this._index >= (uint)list._size)
            {
                return this.MoveNextRare();
            }`,`this._current = list._items[this._index];
            this._index++;
            return true;
        }`,`private bool MoveNextRare()
        {
            // _version版本不一致，则抛出异常
            if (this._version != this._list._version)
                ThrowHelper.ThrowInvalidOperationException_InvalidOperation_EnumFailedVersion();
            this._index = this._list._size + 1;
            this._current = default(T);
            return false;
        }`,"public T Current => this._current;",`object? IEnumerator.Cureent
        {
            get
            {
                if (this._index == 0 || this._index == this._list._size + 1)
                    ThrowHelper.ThrowInvalidOperationException_InvalidOperation_EnumOpCantHappen();
                return (object)this.Current;
            }
        }`,`void IEnumerator.Reset()
        {
            if (this._version != this._list._version)
                ThrowHelper.ThrowInvalidOperationException_InvalidOperation_EnumFailedVersion();
            this._index = 0;
            this._current = default(T);
        }
    }`,`// foreach 实现原理
    var _enumerator = list.GetEnumerator();
    while (_enumerator.MoveNext())
    {`,"}\n```"]},{heading:"6.7 Sort接口",paragraphs:["Sort接口是排序接口，它使用了Array.Sort接口进行排序。",`\`\`\`csharp
    public void Sort(int index, int count, IComparable<T> comparer)
    {
        if (index < 0)
            ThrowHelper.ThrowIndexArgumentOutOfRange_NeedNonNegNumException();
        if (count < 0)
            ThrowHelper.ThrowArgumentOutOfRangeException(ExceptionArgument.count, ExceptionResource.ArgumentOutOfRange_NeedNonNegNum);
        if (this._size - index < count)
            ThrowHelper.ThrowArgumentException(ExceptionResource.Argument_InvalidOffLen);
        if (count > 1)
            Array.Sort<T>(this._items, index, count, comparer);
        ++this._version;
    }
\`\`\``]},{heading:"七、总结",paragraphs:["部分源码看出来，List的**效率并不高，只是通用性强**，List的内存分配方式也极为不合理，当List里的元素不断增加时，会多次重新分配数组，导致原有的数组被抛弃，最后GC被调用时就会造成回收的压力。如果我们在使用List列表时提前声明列表大小时，增加元素时就不会重新生成数组了。","**List并不是高效的组件，只是通用性比较强，真实情况下，它比数组的效率还要差，它只是一个兼容性比较强的组件，好用但是效率并不高。**"]}],takeaways:[]},{id:"wp-16",tags:["基础算法","排序算法","算法"],categoryId:"algorithm",title:"常用的排序算法",date:"2024-05-31",cover:"📐",excerpt:"一、快速排序 快速排序是一种最坏情况为O(n^2)的算法，虽然这个情况比较差，但是它平均性能比较好，其排序期望运行时间为O(nlogn),另外由于快速排序不消耗额外的内存空间，因此在很多地方都用快速排序，如数组的排序等。快速排序可以说是最常...",sections:[{heading:"一、快速排序",paragraphs:["快速排序是一种最坏情况为O**(n^2)**的算法，虽然这个情况比较差，但是它平均性能比较好，其排序期望运行时间为**O(nlogn)**,另外由于快速排序**不消耗额外的内存空间**，因此在很多地方都用快速排序，如数组的排序等。快速排序可以说是最常见、最好用的排序算法。","**排序算法步骤:**",`1.  从序列中选择一个元素作为基准元素。
2.  每次排序，都把所有比基准小的元素移动到基准元素的左边，把比基准元素大的移动到右边。
3.  在以基准为中心轴，分开来的两个（一大一小）区块依次进行递归、筛选后，在对两个区域进行前两个步骤的处理。`,"**注意:**排序算法最差的情况是，每次都选到最小或者最大的数字，每次筛选都要充分地移动，最后使时间复杂度达到**O(n^2)。**所以要进行优化，可以采用**三数取中**进行优化，每次去最中间的数，因为进行过一次排序后，中间数至少是第二小或者第二大的数，那么取出来的中轴数就会比较靠近中位数。",`\`\`\`csharp
        public void QuickSort(int[] arr, int l, int r)
        {
            if (l > r) return;
            int i = l - 1, j = r + 1, x = arr[(l + r) >> 1];
            while (i > j)
            {
                do i++; while (arr[i] < x);
                do j--; while (arr[j] > x);
                if(i < j)
                {
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }`,"QuickSort(arr, l, j);\n            QuickSort(arr, j + 1, r);\n        }\n```"]},{heading:"二、归并排序",paragraphs:["归并排序的时间复杂度为**O(nlogn)**的算法，而且它不像快速排序一样，归并排序是各种情况下都是不变的O(nlogn)，但是由于归并排序需要额外开辟数组来完成，因此归并排序有较大的空间消耗。","**排序算法步骤:**",`1.  将数组不断地进行二分，直到数组划分为n个(数组个数)由单元素构成地子数组，整个划分过程中所有子数组构成满二叉树地逻辑结构。
2.  数组划分完后，将两两分组地数组进行逐层进行归并操作，最终完成排序操作。`,"归并排序其实就是基于分治思想和归并排序而设计出来的高效排序算法，其主要思想就是先将数组划分，然后将**两个有序的子序列合并成一个有序序列的算法**。",`\`\`\`csharp
        public void MergeSort(int[] arr, int l, int r)
        {
            if(l > r) return;
            int mid = (l + r) >> 1;
            MergeSort(arr, l, mid);
            MergeSort(arr, mid + 1, r);`,`int i = l, j = mid + 1, k = 0;
            while(i <= mid && j <= r)
            {
                if (arr[i] < arr[j]) temp[k++] = arr[i];
                else temp[k++] = arr[j];
            }
            while(i <= mid) temp[k++] = arr[i];
            while(j <= r) temp[k++] = arr[j];
            for (i = l, j = 0; i <= r ; i++, j ++)
            {
                arr[i] = temp[j];
            }
        }
\`\`\``]}],takeaways:[]},{id:"wp-17",tags:["创建型设计模式","设计模式"],categoryId:"pattern",title:"三种工厂模式",date:"2024-06-03",cover:"🏗️",excerpt:"一、简单工厂模式 1.1 概述 简单工厂模式并不属于GoF的23种经典模式的一种，但通常将它作为学习其他工厂模式的基础，而且在实际中，它也是运用最广泛的一种设计模式。其主要实现步骤是将需要创建的各种不同对象的代码封装到不同的具体产品类中，这...",sections:[{heading:"1.1 概述",paragraphs:["简单工厂模式并**不属于GoF**的23种经典模式的一种，但通常将它作为学习其他工厂模式的基础，而且在实际中，它也是运用最广泛的一种设计模式。其主要实现步骤是将需要创建的各种不同对象的代码封装到不同的**具体产品类**中，这些**具体产品类**的公共属性与方法提取放在一个抽象产品中，**具体产品类继承抽象产品类**，然后再在工厂类中提供一个创建产品的工厂方法，该方法根据所传不同的参数来创建不同的具体产品。","**定义：**定义一个工厂类，它可以根据参数的不同返回创建不同类的实例，被创建的实例通常都具有共同的父类。","由于简单工厂模式中用于创建实例的方法通常是静态方法，所以简单工厂模式又称为静态工厂方法模式，它是一种**类创建型模式**。"]},{heading:"1.2 模式结构",paragraphs:[`1.  **Factory（工厂角色）：**工厂角色即工厂类，负责实现创建所有具体产品实例的内部逻辑，会提供一个静态的工厂方法**factoryMethod**，返回类型则是**抽象产品类型Product类**。
2.  **Product（抽象产品角色）：**所有具体工厂类的父类，封装了各种产品对象的共有方法。
3.  **ConcreteProduct(具体产品角色)：**它是简单工厂模式的创建目标，所有被创建的对象都充当这个角色的某个具体类的实例。`,"![image-20240601000037917](@img/epeoyw2g)"]},{heading:"1.3 具体实现",paragraphs:["例如公司需要开发一套图表库，其中包括了不同外观的图表，例如柱状图(HistogramChart)、饼状图（PieChart）、折线图（LineChart）等。","-   **Chart(Product)：**抽象图表接口，充当抽象产品类。","```csharp\n    public interface Chart\n    {\n        public void display();\n    }\n```","-   HistogramChart、PieChart、LineChart(ConcreteProduct): 具体产品类",`\`\`\`csharp
//HistogramChart:柱状图类(具体产品类)  
    public class HistogramChart : Chart
    {
        public HistogramChart()
        {
            Console.WriteLine("创建柱状图!");
        }`,`public void display()
        {
            Console.WriteLine("显示柱状图!");
        }
    }
// PieChart：饼状图类（具体产品类）
    public class PieChart : Chart
    {
        public PieChart()
        {
            Console.WriteLine("创建饼状图！");
        }
        public void display()
        {
            Console.WriteLine("显示饼状图!");
        }
    }
//LineChart:折线图类(具体产品类)
    public class LineChart : Chart
    {
        public LineChart()
        {
            Console.WriteLine("创建折线图！");
        }
        public void display()
        {
            Console.WriteLine("显示饼状图!");
        }
    }
\`\`\``,"-   **ChartFactory（Factory）:**图标工厂类(工厂类)",`\`\`\`csharp
    public class ChartFactory
    {
        public static Chart GetChart(string type) 
        {
            Chart chart = null;
            if (type.Equals("HistogramChart"))
            {
                chart = new HistogramChart();
            }
            else if (type.Equals("Pie"))
            {
                chart = new PieChart();
            }
            else if (type.Equals("Line"))
            {
                chart = new LineChart();
            }
            return chart;
        }
    }
\`\`\``,"-   Client测试类:",`\`\`\`csharp
        static void Main(string[] args)
        {
            // 通过静态工厂方法创建产品
            Chart chart = ChartFactory.GetChart("HistogramChart");
            chart?.display();
            // 输出创建柱状图！ 显示柱状图
        }
\`\`\``]},{heading:"1.4 优缺点",paragraphs:[`-   **优点:**
    1.  实现了对象创建和使用的分离，通过使用工厂类,外界可以从直接创建具体产品对象的尴尬局面摆脱出来,仅仅需要负责“消费”对象就可以了。
    2.  提高了系统的灵活性，可以通过配置文件，在不修改任何客户端代码情况下更换和增加新的具体产品类。
-   **缺点:**
    1.  由于工厂类集中了所有产品的创建逻辑，职责过重。
    2.  系统扩展困难，一旦添加新产品就不得不修改工厂逻辑，当产品过多时，会造成工厂逻辑复杂，不利用维护。`]},{heading:"1.5 使用场景",paragraphs:[`1.  当工厂类负责创建的对象比较少时，由于创建的对象较少，不会造成工厂方法中的业务逻辑太过复杂。
2.  客户只知道传入工厂类的参数，对于如何创建对象（逻辑）不关心。`]},{heading:"2.1 概述",paragraphs:["工厂方法模式是简单工厂的延伸，它弥补了简单工厂模点，更好的符合了开闭原则的要求，在增加新的具体产品对象中不需要对已有系统进行任何修改。工厂方法模式引入了**抽象工厂类和具体工厂类**，具体工厂类继承于抽象工厂，具体工厂类用于生产具体产品类的实例，可以使**不修改具体工厂类**的情况下引进心新的产品类。","**定义:抽象工厂**定义一个创建对象的接口，但是让**(具体工厂)**子类决定哪一个**(产品)**类实例化。","工厂方法模式又简称为工厂模式，工厂方法模式是一种**类创建型模式**。"]},{heading:"2.2 模式结构",paragraphs:[`1.  **Factory(抽象工厂):**声明一个工厂方法(FactoryMethod),用于返回一个产品。
2.  **ConcreteFactory(具体工厂)：**它是抽象工厂的子类，实现了抽象工厂中声明的工厂方法，并由Client调用，返回一个具体产品类的实例。
3.  **Product（抽象产品）:**定义产品的接口，也就是具体产品类的公共父类
4.  **ConcreteProduct(具体产品):**实现了抽象产品的接口，具体产品由具体工厂类创建，具体产品和具体工厂之间一一对应。`,"![image-20240603003223354](@img/9pxzxobx)"]},{heading:"2.3 具体实现",paragraphs:["例如公司需要运行日志记录器(Logger)可以通过多种途径保存系统的运行日志，例如通过文件记录或者数据库记录，用户可以通过修改配置文件灵活地更换日志记录方式。",`-   **LoggerFactory**：日志记录器工厂接口**（抽象工厂）**
    
    \`\`\`csharp
    // 日志记录器工厂接口: 抽象工厂
    public interface LoggerFactory
    {
      public Logger CreateLogger();
    }
    \`\`\`
    
-   **DataBaseLoggerFactory、FileLoggerFactory：** 数据库/文件日志记录器工厂类**(具体工厂类)**
    
    \`\`\`csharp
    // 数据库日志记录器工厂类: 具体工厂类
    public class DataBaseLoggerFactory : LoggerFactory
    {
      public Logger CreateLogger()
      {
          Logger logger = new DataBaseLogger();
          return logger;
      }
    }
    // 文件日志记录器工厂类: 具体工厂类
    public class FileLoggerFactory : LoggerFactory
    {
      public Logger CreateLogger()
      {
          Logger logger = new FileLogger();
          return logger;
      }
    }
    \`\`\`
    
-   **Logger：**日志记录接口**(抽象产品)**
    
    \`\`\`csharp
    // 日志记录接口(抽象产品)
    public interface Logger
    {
        public void WriteLog();
    }
    \`\`\`
    
-   **DataBaseLogger、FileLogger**:数据库/文件记录器(具体产品)
    
    \`\`\`csharp
      // 数据库记录器(具体产品)
      public class DataBaseLogger : Logger
      {
          public void WriteLog()
          {
              Console.WriteLine("数据库日志记录。");
          }
      }
      // 文件记录器(具体产品)
      public class FileLogger : Logger
      {
          public void WriteLog()
          {
              Console.WriteLine("文件日志记录。");
          }
      }
    \`\`\`
    
-   Client测试类:
    
    \`\`\`csharp
          public static void Main(string[] args)
          {
              // 创建数据库工厂实例
              LoggerFactory loggerFactory = new DataBaseLoggerFactory();
              // 通过工厂创建具体的产品
              Logger logger = loggerFactory.CreateLogger();
              // 具体日志产品打印
              logger.WriteLog();
          }
    \`\`\`
    
-   **注意:**由于具体工厂类和具体产品类之间的关系为一一对应，有时候为了简化客户端使用，可以对客户端隐藏工厂方法
    
    \`\`\`csharp
      public abstract class LoggerFactory
      {
          public void WriteLogger()
          {
              Logger logger = this.CreateLogger();
              logger.WriteLog();
          }
    
          public abstract Logger CreateLogger();
      }
    \`\`\``]},{heading:"2.4 优缺点",paragraphs:[`-   **优点:**
    
    1.  **符合开闭原则:**当在系统中增加新的产品时无须修改抽象工厂和抽象产品提供的接口，只需要添加一个具体工厂和具体产品类即可，
    2.  **多态性设计：**工厂方法模式可以利用多态性设计，让工厂能够自主确定创建何种对象，且创建该对象的细节完全封装在具体工厂内部。
-   **缺点:**
    
    1.  **系统过于复杂:**当需要添加新的产品时，需要添加新的具体产品类和具体工厂类，类的个数成对增加,增加了系统的复杂性
    2.  **过于抽象性:**在客户端中均使用了抽象层进行定义，增加了系统的抽象性和理解难度。`]},{heading:"2.5 使用场景",paragraphs:["客户端不需要知道所需要的对象的类(具体产品类的类名)，可通过配置文件去创建。"]},{heading:"3.1 概述",paragraphs:["在工厂方法模式中每一个具体工厂只需要生产一种具体产品，但在抽象工厂模式中一个具体工厂可以生产**一组相关的具体产品**，这一组具体产品成为**产品族**，**产品族**的每一个产品都分属于某一个产品**继承等级结构**。","**定义:**提供一个创建一系列相关或者相互依赖对象的接口，而无须指定它们的具体的类。","抽象工厂又称为工厂(Kit)模式，是一种对象创建型模式。"]},{heading:"3.2 模式结构",paragraphs:["在抽象工厂模式中，每一个具体工厂都提供了多个工厂方法用于生产多种不同类型的产品，这些产品构成一个**产品族**。",`1.  **AbstractFactory(抽象工厂):**声明了一组用于**创建一族产品**的方法，每个方法对应一种产品。
2.  **ConcreteFactory(具体工厂)**:实现抽象工厂中声明的创建产品的方法，生成一组具体产品。
3.  **AbstractProduct(抽象产品):**它为每种产品声明接口，在抽象产品中声明了产品所具有的业务方法。
4.  **ConcreteProduct(具体产品):**定义了具体工厂生产的具体产品对象，实现了抽象产品接口中声明的业务方法。`,"![image-20240603223540388](@img/qyguvicw)"]},{heading:"3.3 具体实现",paragraphs:["例如公司需要开发一套界面皮肤库，不同的皮肤将提供视觉效果不同的按钮、文本框、组合框等界面元素。例如春天(Spring)提供一套绿色的皮肤，夏天则提供一套浅蓝色的皮肤。示意图如下:","![image-20240603224335867](@img/6bopkzql)",`-   **SkinFactory：**界面皮肤工厂接口(抽象工厂)
    
    \`\`\`csharp
      // 界面皮肤工厂接口(抽象工厂)
      public interface SkinFactory
      {
          public Button CreateButton();
          public TextFiled CreateTextFiled();
          public ComboBox CreateComboBox();
      }
    \`\`\`
    
-   **SpringSkinFactory、SummerSkinFactory:**春天/夏天皮肤工厂(具体工厂)
    
    \`\`\`csharp
    // 春天皮肤工厂(具体工厂)
    public class SpringSkinFactory : SkinFactory
    {
       public Button CreateButton()
       {
           return new SpringButton();
       }
    
       public ComboBox CreateComboBox()
       {
           return new SpringComboBox();
       }
    
       public TextFiled CreateTextFiled()
       {
           return new SpringTextFiled();
       }
    }
    // 夏天皮肤工厂(具体工厂)
    public class SummerSkinFactory : SkinFactory
    {
       public Button CreateButton()
       {
           return new SummerButton();
       }
    
       public ComboBox CreateComboBox()
       {
           return new SummerComboBox();
       }
    
       public TextFiled CreateTextFiled()
       {
           return new SummerTextFiled();
       }
    }
    \`\`\`
    
-   **Button、TextFiled、ComboBox**：按钮/文本框/边框组件(抽象产品)
    
    \`\`\`csharp
    public interface Button
    {
      public void Display();
    }
    
    public interface TextFiled
    {
      public void Display();
    }
    
    public interface ComboBox
    {
      public void Display();
    }
    \`\`\`
    
-   **SpringButton、SpringTextField、SpringComboBox、SummerButton、SummerTextField、SummerComboBox**:具体产品类
    
    \`\`\`csharp
    public class SpringButton : Button
    {
      public void Display()
      {
          Console.WriteLine("显示浅绿色按钮");
      }
    }
    
    public class SpringTextFiled : TextFiled
    {
      public void Display()
      {
          Console.WriteLine("显示浅绿色文本框");
      }
    }
    
    public class SpringComboBox : ComboBox
    {
      public void Display()
      {
          Console.WriteLine("显示浅绿色边框组合框");
      }
    }
    
    public class SummerButton : Button
    {
      public void Display()
      {
          Console.WriteLine("显示浅蓝色按钮");
      }
    }
    
    public class SummerTextFiled : TextFiled
    {
      public void Display()
      {
          Console.WriteLine("显示浅蓝色文本框");
      }
    }
    
    public class SummerComboBox : ComboBox
    {
      public void Display()
      {
          Console.WriteLine("显示浅蓝色边框组合框");
      }
    }
    \`\`\`
    
-   **Client测试类:**
    
    \`\`\`csharp
      public class Client
      {
          public static void Main(string[] args)
          {
              SkinFactory skinFactory = new SpringSkinFactory();
              Button button = skinFactory.CreateButton();
              TextFiled textFiled = skinFactory.CreateTextFiled();
              ComboBox comboBox = skinFactory.CreateComboBox();
              button.Display();
              textFiled.Display();
              comboBox.Display();
          }
      }
    \`\`\``]},{heading:"3.4 优缺点",paragraphs:[`-   **优点:**
    1.  符合开闭原则，增加新的产品族时，无须修改系统已有系统
    2.  方便切换系统的产品族行为
-   **缺点:**新增新的产品等级需要对原有的系统进行修改，所有的产品族都要进行修改。`]},{heading:"3.5 使用环境",paragraphs:[`1.  用户无须关系对象的创建过程，将对象的创建和使用进行解耦。
2.  当系统有多个产品族，且每次只使用其中某一个产品族。
3.  产品等级结构稳定，当设计完成后不需要再向系统添加新的产品等级结构或者删除已有的产品等级结构。`]},{heading:"四、总结",paragraphs:["在游戏开发中，目前我遇到的大部分都是简单工厂模式，直接去工厂中获得产品。简单工厂模式(添加一个抽象工厂)-> 工厂方法模式（将工厂与产品一一对应扩展到产品族）-> 抽象工厂模式。简单工厂违反了开闭原则，工厂方法虽然符合开闭原则，但是每次添加产品都需要成对添加，会导致系统过于复杂，抽象工厂解决了工厂方法的系统过于复杂，但是当产品等级需要修改时，它又违反了开闭原则，当产品等级修改时，所有的具体产品也都需要随着修改，每次修改就会对系统进行一次大修改，所以每一种工厂模式都有弊端，也有好处，要结合实际去运用它。"]}],takeaways:[]},{id:"wp-18",tags:["创建型设计模式","设计模式"],categoryId:"pattern",title:"单例模式",date:"2024-06-05",cover:"🏗️",excerpt:"一、概述 单例模式是结构最简单的设计模式，其核心结构中只包含一个被称为单例类的特殊类。单例模式是一种创建型设计模式，它保证一个类只有一个实例，并且提供一个全局访问点。单例模式用来解决频繁创建与销毁实例对象问题，当我们控制实例创建个数或复用实...",sections:[{heading:"一、概述",paragraphs:["单例模式是结构最简单的设计模式，其核心结构中只包含一个被称为单例类的特殊类。单例模式是一种创建型设计模式，**它保证一个类只有一个实例，并且提供一个全局访问点。**单例模式用来解决**频繁创建与销毁实例对象**问题，当我们控制实例**创建个数或复用实例**，就可以使用单例模式，这样有助于节省系统资源。","**定义:**确保一个类只有一个实例，并且提供一个全局访问点来访问这个唯一实例。"]},{heading:"二、结构",paragraphs:["单例模式有三个要点:",`-   某个类只能有一个实例
-   必须自行创建这个实例
-   必须自行向整个系统提供这个实例`,"**Singleton单例**:在内部实现只生成一个实例，同时它提供一个全局访问点；为了防止外界对其实例化，将其构造函数设计为私有；内部定义一个**Singleton类型**的静态对象，作为外部共享的唯一实例。","![image-20240605221527913](@img/n2yphjc6)"]},{heading:"三、实现",paragraphs:["-   普通模式的单例模式",`\`\`\`csharp
public class Singleton
{
    private static readonly object _lock = new object();
    public static Singleton instance;
    public static Singleton Instance 
    {  
        get 
        { 
            lock(_lock)
            {
                if (instance == null)
                {
                    instance = new Singleton();
                }
            }`,`return instance;
        } 
    }
}
public class Client
{
    public static void Main(string[] args)
    {
        Singleton s1 = Singleton.Instance;
        Singleton s2 = Singleton.Instance;
        if (s1 == s2) Console.WriteLine("Singleton works, both variables contain the same instance.");
        else Console.WriteLine("Singleton failed, variables contain different instances.");
    }
    // 输出结果为: Singleton works, both variables contain the same instance.
}
\`\`\``,"-   Unity基于MonoBehavior的单例模式",`\`\`\`csharp
  public class SingletonMono : MonoBehaviour
  {
      private static SingletonMono instance;
      public static SingletonMono Instance
      {
          get
          {
              return instance;
          }
      }
      protected virtual void Awake()
      {`,`if (instance != null)
          {
              instance = this;
              DontDestroyOnLoad(gameObject);
          }
      }
  }
\`\`\``]},{heading:"四、优缺点",paragraphs:[`-   **优点:**
    1.  **方便好用**，单例类提供了对唯一实例的受控访问。
    2.  节约系统资源，由于系统只存在一个对象，所以当一些需要频繁创建和销毁的对象，可以存放与单例类中。
-   **缺点:**
    1.  违反了单一职责，单例模式的职责过重，导致过度依赖单例类。
    2.  拓展困难，由于单例模式中没有抽象层，因此单例类的扩展有很大的困难。`]},{heading:"五、适用场景",paragraphs:[`1.  系统只需要一个实例，且该实例需要长期使用时，可以使用单例模式，可以避免重复创建单例。
2.  客户调用类的单个实例只允许使用一个公共访问点，除了该公共访问点，不能通过其他途径访问该实例。`,"​ 了解过很多讨论和博客，大家对单例模式都是保持一个双刃剑的态度，很多人觉得单例模式职责过于重，会有很高的耦合性，我目前认为单例模式利大于弊。单例模式确实不能泛用，但是对于游戏开发来说，一些比较重要的模块比如AudioManager、SceneManager等都可以采用单例模式实现，因为这些都是在游戏中需要全局调用的。"]}],takeaways:[]},{id:"wp-19",tags:["创建型设计模式","设计模式"],categoryId:"pattern",title:"建造者模式",date:"2024-06-16",cover:"🏗️",excerpt:"一、概念 建造者模式是一种创建型设计模式，它将客户端与包含多个部件的复杂对象的创建过程分离，客户端无须知道复杂对象的内部组成部分和装配方式，只需知道建造者的类型即可。建造者模式关注如何一步一步地创建一个复杂的对象，不同的具体建造者者定义了不...",sections:[{heading:"一、概念",paragraphs:["建造者模式是一种创建型设计模式，它将客户端与包含多个部件的复杂对象的创建过程分离，客户端无须知道复杂对象的**内部组成部分**和**装配方式**，只需知道建造者的类型即可。建造者模式关注如何一步一步地创建一个复杂的对象，不同的具体建造者者定义了不同的建造过程，而且具体的建造者相互独立。","**定义:又称生成器**将一个复杂的对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表现。"]},{heading:"二、模式结构",paragraphs:["**产品(Product)：**表示正在构建的**复杂对象**，它通常由多个部分组成。具体建造者创建该产品的**内部表示**并定义它的**装配过程**。","**抽象建造者(Abstract Builder):**定义了构建产品的抽象接口，包括构建各个部分的方法以及装配过程方法。","**具体建造者(Concrete Builder):**实现了抽象建造者接口，实现了各个部件的**具体构造**和**装配方法**，定义并明确所创建的复杂对象。","**指导者(Director):**负责使用具体建造者来构建产品，它负责安排负责对象的构建次序。","![image-20240616170754882](@img/fay34270)"]},{heading:"三、具体实现",paragraphs:["使用建造者模式来实现游戏角色的创建，对游戏角色进行设计，其基本结构如下图所示。","![image-20240616171001577](@img/k41v81ir)"]},{heading:"3.1 角色类(产品类)",paragraphs:[`\`\`\`csharp
public class Actor
{
    private string type;            // 角色类型
    private string sex;             // 性别
    private string face;            // 脸型
    private string costume;         // 服装
    private string hairStyle;       // 发型`,`public void SetType(string type)
    {
        this.type = type;
    }`,`public void SetSex(string sex)
    {
        this.sex = sex;
    }`,`public void SetFace(string face)
    {
        this.face = face;
    }`,`public void SetCostume(string costume)
    {
        this.costume = costume;
    }`,`public void SetHairStyle(string hairStyle)
    {
        this.hairStyle = hairStyle;
    }`,`public string getType() { return type; }
    public string getSex() {  return sex; }
    public string getFace() { return face; } 
    public string getCostume() {  return costume; }
    public string getHairStyle() {  return hairStyle; }`,"}\n```"]},{heading:"3.2 角色建造者(抽象建造者)",paragraphs:["```csharp\npublic abstract class ActorBuilder\n{\n    protected Actor actor = new Actor();",`public abstract void BuildType();
    public abstract void BuildSex();
    public abstract void BuildFace();
    public abstract void BuildCostume();
    public abstract void BuildHairStyle();`,`public Actor CreateActor()
    {
        return actor;
    }`,"}\n```"]},{heading:"3.3 角色具体建造类(具体建造者)",paragraphs:[`\`\`\`csharp
public class HeroBuilder : ActorBuilder
{
    public override void BuildCostume()
    {
        actor.SetCostume("盔甲");
    }`,`public override void BuildFace()
    {
        actor.SetFace("飘逸");
    }`,`public override void BuildHairStyle()
    {
        actor.SetHairStyle("飘逸");
    }`,`public override void BuildSex()
    {
        actor.SetSex("男");
    }`,`public override void BuildType()
    {
        actor.SetType("英雄");
    }
}`,`public class AngleBuilder : ActorBuilder
{
    public override void BuildCostume()
    {
        actor.SetCostume("白裙");
    }`,`public override void BuildFace()
    {
        actor.SetFace("漂亮");
    }`,`public override void BuildHairStyle()
    {
        actor.SetHairStyle("披肩长发");
    }`,`public override void BuildSex()
    {
        actor.SetSex("女");
    }`,`public override void BuildType()
    {
        actor.SetType("天使");
    }
}`,`public class DevilBuilder : ActorBuilder
{
    public override void BuildCostume()
    {
        actor.SetCostume("黑衣");
    }`,`public override void BuildFace()
    {
        actor.SetFace("丑陋");
    }`,`public override void BuildHairStyle()
    {
        actor.SetHairStyle("光头");
    }`,`public override void BuildSex()
    {
        actor.SetSex("妖");
    }`,`public override void BuildType()
    {
        actor.SetType("恶魔");
    }
}
\`\`\``]},{heading:"3.4 角色控制器(指挥者)",paragraphs:[`\`\`\`csharp
    public class ActorController
    {
        public Actor construct(ActorBuilder actorBuilder)
        {
            Actor actor;
            actorBuilder.BuildType();
            actorBuilder.BuildSex();
            actorBuilder.BuildFace();
            actorBuilder.BuildCostume();
            actorBuilder.BuildHairStyle();
            actor = actorBuilder.CreateActor();
            return actor;
        }
    }
\`\`\``]},{heading:"3.5 客户测试类",paragraphs:[`\`\`\`csharp
public class Client
{
    static void Main(string[] args)
    {
        ActorBuilder builder = new DevilBuilder();
        ActorController actorController = new ActorController();
        Actor actor = actorController.construct(builder);
        Console.WriteLine(actor.GetType() + "的外观: ");
        Console.WriteLine("性别: " + actor.getSex());
        Console.WriteLine("面容: " + actor.getFace());
        Console.WriteLine("服装: " + actor.getCostume());
        Console.WriteLine("发型: " + actor.getHairStyle());`,"}\n}\n```"]},{heading:"四、优缺点",paragraphs:[`-   **优点:**
    1.  分离构建过程和表示，使构建过程更加灵活，可以创建不同的表示。
    2.  可以更好地控制构建过程，隐藏具体地构建细节。
    3.  每个具体构建者都相对独立，可以在不同地构建过程中重复使用相同地建造者。
-   **缺点:**
    1.  如果产品地内部复杂，可能会导致需要定义很多具体构造者来实现这种变化，会导致系统变得很庞大。
    2.  当产品属性比较少，建造者模式可能会导致代码冗余。`]},{heading:"五、 使用环境",paragraphs:[`-   **结构复杂**：当对象具有非常复杂的内部结构，包含许多属性时，建造者模式适用。
-   **分离创建和使用**：如果想将复杂对象的创建和使用分离，建造者模式是一个不错的选择。
-   **多步骤构建**：当创建对象需要多个步骤时，建造者模式非常适合。`]}],takeaways:[]},{id:"wp-20",tags:["Unity"],categoryId:"unity",title:"Dictionary底层源码剖析",date:"2024-06-17",cover:"🎮",excerpt:"Dictionary字典型数据结构是以关键字Key值和Value值进行一一映射，Key的类型并没有做任何限制，可以是整数，也可以是字符串，甚至是实例对象。Dictionary的实验原理，有两个关键算法，Hash算法和解决Hash冲突的拉链法...",sections:[{heading:"Dictionary底层源码剖析",paragraphs:["Dictionary字典型数据结构是以关键字**Key值**和**Value值**进行一一映射，Key的类型并没有做任何限制，可以是整数，也可以是字符串，甚至是实例对象。Dictionary的实验原理，有两个关键算法，**Hash算法**和**解决Hash冲突的拉链法**，key值和value值的映射关系就是通过Hash函数来建立的。","[Dictionary源码](https://referencesource.microsoft.com/#mscorlib/system/collections/generic/dictionary.cs)"]},{heading:"1.1 Hash函数",paragraphs:["Dictionary会针对每个Key值加入容器的元素都进行一次Hash(哈希)运算操作，从而找到自己存放的位置。Hash函数可以有很多种算法，最简单的可以认为是**取余操作**。","对于实例对象和字符串来说，它们没有直接的数字作为hash标准，因此它们需要通过**内存地址**计算一个**Hash值**，计算这个内存对象的函数就叫**HashCode**，它是基于内存地址来计算得到的结果，我们也可以通过重载HashCode()来设计我们自定义的Hash值计算方法。"]},{heading:"1.2 Hash冲突",paragraphs:["当不同的Key值进行Hash计算后，得到的结果可能是同一Hash地址。HashFunc(key1) == HashFunc(key2),这种现象被成为Hash冲突。在处理Hash冲突的方法中，有开放寻址法、拉链法、再Hash法等，而Dictionary使用的是拉链法(又称链地址法)。","**拉链法的原理**: 将所有具有**相同哈希值**的元素链接在一起，形成一个链表。当发生冲突时，新的元素会被添加到**链表的末尾**，链表的每一个元素都包含一个指向实际数据的指针和一个指向下一个元素的指针。","![image-20240616222832877](@img/6zny13hm)"]},{heading:"2.1 变量定义",paragraphs:["-   **Dictionary：**底层的数据结构为哈希表，而哈希表的数组结构为数组。","```csharp\npublic class Dictionary<TKey, TValue> : IDictionary<TKey, TValue>, IDictionary, IReadOnlyDictionary<TKey, TValue>,\n    ISerializable, IDeserializationCallback\n{",`private struct Entry
    {
        public uint hashCode;   // 哈希值
        public int next;        // 下一个元素的下标索引
        public TKey key;        // 存放元素的键
        public TValue value;    // 存放元素的值
    }`,`private int[] buckets;      // 桶，存放的数值为entries数组元素的下标索引
    private Entry[] entries;    // 桶对应的链表
    private int count;          // 元素个数
    private int version;        // 版本号,防止迭代的时候集合被修改
    private int freeList;       // 桶对应数组中被删除Entry的下标索引(单链表)
    private int freeCount;      // 记录被删除的Entry的数量
    private IEqualityComparer<TKey> comparer;   // 比较器
    private KeyCollection keys;                 // 存放key的集合
    private ValueCollection values;             // 存放value的集合
    private Object _syncRoot;                   
}
\`\`\``]},{heading:"2.2 Add接口",paragraphs:[`\`\`\`csharp
public void Add(TKey key, TValue value)
{
    Insert(key, value, true);
}`,`private void Initialize(int capacity)
{
    int size = HashHelpers.GetPrime(capacity);              // size大小
    buckets = new int[size];                                // 创建桶数组
    for (int i = 0; i<buckets.Length; i++) buckets[i] = -1;  // buckets默认全为-1
    entries = new Entry[size];                              // 创建Entry实体数组
    freeList = -1;                                          // freeList默认为-1
}`,`private void Insert(TKey key, TValue value, bool add)
{
    if( key == null) 
    {
        ThrowHelper.ThrowArgumentNullException(ExceptionArgument.key);
    }`,`if (buckets == null) Initialize(0); // 对数据结构进行构造
    // 对Key进行哈希操作
    int hashCode = comparer.GetHashCode(key) & 0x7FFFFFFF;  
    int targetBucket = hashCode % buckets.Length;`,`// 通过地址找到桶对应的链表,
    for (int i = buckets[targetBucket]; i>= 0; i = entries[i].next) 
    {
        // 如果存在则修改
        if (entries[i].hashCode == hashCode && comparer.Equals(entries[i].key, key)) 
        {
            // 添加相同的键值对，会抛出异常
            if (add) 
            {
                ThrowHelper.ThrowArgumentException(ExceptionResource.Argument_AddingDuplicate);
            }
            entries[i].value = value;
            version++;
            return;
        }
    }
    // 桶的index
    int index;
    // 如果被删除剩余数量足够
    if (freeCount > 0) 
    {
        index = freeList;
        // freeList等于删除单链表
        freeList = entries[index].next;
        freeCount--;
    }
    else 
    {
        // 被删除数量不足够，判断数组数量是否已满
        if (count == entries.Length)
        {
            // 扩容
            Resize();
            // 重新判断哈希值
            targetBucket = hashCode % buckets.Length;
        }
        // index等于count值
        index = count;
        count++;
    }
    // 进行赋值操作
    entries[index].hashCode = hashCode;
    entries[index].next = buckets[targetBucket];
    entries[index].key = key;
    entries[index].value = value;
    buckets[targetBucket] = index;
    version++;
}
\`\`\``,"Add接口其实就是Insert的代理, `Insert(key, value, true)`","在加入数据前，首先需要对数据结构进行构造，其代码如下:","```csharp\n if (buckets == null) Initialize(0); // 对数据结构进行构造",`private void Initialize(int capacity)
{
    int size = HashHelpers.GetPrime(capacity);              // size大小
    buckets = new int[size];                                // 创建桶数组
    for (int i = 0; i<buckets.Length; i++) buckets[i] = -1;  // buckets默认全为-1
    entries = new Entry[size];                              // 创建Entry实体数组
    freeList = -1;                                          // freeList默认为-1
}`,`public class HashHelpers
{
    public static readonly int[] primes = {
        3, 7, 11, 17, 23, 29, 37, 47, 59, 71, 89, 107, 131, 163, 197, 239, 
        293, 353, 431, 521, 631, 761, 919,
        1103, 1327, 1597, 1931, 2333, 2801, 3371, 4049, 4861, 5839, 7013, 
        8419, 10103, 12143, 14591,
        17519, 21023, 25229, 30293, 36353, 43627, 52361, 62851, 75431, 90523, 
        108631, 130363, 156437,
        187751, 225307, 270371, 324449, 389357, 467237, 560689, 672827, 
        807403, 968897, 1162687, 1395263,
        1674319, 2009191, 2411033, 2893249, 3471899, 4166287, 4999559, 5999471, 
        7199369};`,`public static int GetPrime(int min)
    {
        if (min<0)
            throw new ArgumentException(
                Environment.GetResourceString("Arg_HTCapacityOverflow"));
        Contract.EndContractBlock();
        // 找到大于需要数量的最小质数
        for (int i = 0; i<primes.Length; i++)
        {
            int prime = primes[i];
            if (prime>= min) return prime;
        }`,`// 如果在我们的预定义表之外，则做硬计算
        for (int i = (min | 1); i<Int32.MaxValue;i+=2)
        {
            if (IsPrime(i) && ((i - 1) % Hashtable.HashPrime != 0))
                return i;
        }
        return min;
    }`,`// 返回要增长到的Hash表的大小
    public static int ExpandPrime(int oldSize)
    {
        int newSize = 2 * oldSize;`,`// 在遇到容量溢出之前，允许Hash表增长到最大可能的大小（约2G个元素）
        // 请注意，即使（item.Length）由于（uint）强制转换而溢出，此检查仍然有效
        if ((uint)newSize>MaxPrimeArrayLength && MaxPrimeArrayLength>oldSize)
        {
            Contract.Assert( MaxPrimeArrayLength == GetPrime(MaxPrimeArrayLength),
                "Invalid MaxPrimeArrayLength");
            return MaxPrimeArrayLength;
        }`,"return GetPrime(newSize);\n    }\n```","初始化数组大小时,会通过HashHelper类的GetPrime()函数，返回一个需要的size最小质数值。","**GetPrime()**:表示当需要的数量小于primes某个单元格的数字时返回该数字, 即大于需要数量的primes数组中的最小质数。","**ExpandPrimes():**数组扩容, 当前容量的2倍的primes最小质数值。即3->7->17->37(大于34的最小质数)->89(大于74的最小质数)->...","初始化数组后，会对关键字Key做Hash操作，从而获得地址索引","```csharp\n    // 对Key进行哈希操作\n    int hashCode = comparer.GetHashCode(key) & 0x7FFFFFFF;  \n    int targetBucket = hashCode % buckets.Length;\n```","当调用函数获得hash值后，还对hash地址进行取余操作，以确保索引地址落在Dictionary数组长度范围内，而不会溢出。","接着在对指定数组进行单元格内的链表执行遍历操作，如果找到相同的键值对则抛出异常，然后在进行赋值操作，赋值操作会先判断之前是否有释放的entry，如果有的话对之前的entry进行赋值，如果没有则判断当前容量是否足够，如果不够则进行扩容操作。扩容操作代码如下:",`\`\`\`csharp
        private void Resize() 
        {
            // 新size为ExpandPrime(count)
            Resize(HashHelpers.ExpandPrime(count), false);
        }`,`private void Resize(int newSize, bool forceNewHashCodes) 
        {
            Contract.Assert(newSize >= entries.Length);
            int[] newBuckets = new int[newSize];    // 重建桶
            for (int i = 0; i < newBuckets.Length; i++) newBuckets[i] = -1; // 初始化桶`,`Entry[] newEntries = new Entry[newSize]; 
            Array.Copy(entries, 0, newEntries, 0, count); // 将之前的元素拷贝到新数组中
            if(forceNewHashCodes) // 是否强制重算HashCode值
            {
                for (int i = 0; i < count; i++) 
                {
                    if(newEntries[i].hashCode != -1) 
                    {
                        newEntries[i].hashCode = (comparer.GetHashCode(newEntries[i].key) & 0x7FFFFFFF);
                    }
                }
            }
            // 重置桶
            for (int i = 0; i < count; i++) 
            {
                if (newEntries[i].hashCode >= 0) 
                {
                    int bucket = newEntries[i].hashCode % newSize;
                    newEntries[i].next = newBuckets[bucket];
                    newBuckets[bucket] = i;
                }
            }
            buckets = newBuckets;
            entries = newEntries;
        }
\`\`\``]},{heading:"2.3 Remove接口",paragraphs:[`\`\`\`csharp
public bool Remove(TKey key)
{
    if(key == null) 
    {
        ThrowHelper.ThrowArgumentNullException(ExceptionArgument.key);
    }`,`if (buckets != null) 
    {
        int hashCode = comparer.GetHashCode(key) & 0x7FFFFFFF;
        int bucket = hashCode % buckets.Length;
        int last = -1;
        for (int i = buckets[bucket]; i>= 0; last = i, i = entries[i].next) {
            if (entries[i].hashCode == hashCode && comparer.Equals(entries[i].key, key))
            {
                if (last<0) 
                {
                    buckets[bucket] = entries[i].next;
                }
                else 
                {
                    // 如果删除的元素在链表中间,上一个元素和下一个元素相连，防止单链表中断
                    entries[last].next = entries[i].next;
                }
                entries[i].hashCode = -1;
                entries[i].next = freeList; // 删除的链表下标
                // 赋默认值
                entries[i].key = default(TKey);
                entries[i].value = default(TValue);
                freeList = i;
                freeCount++;
                version++;
                return true;
            }
        }
    }
    return false;
}
\`\`\``,"Remove接口相对于Add接口简单一点，先使用Hash函数获得Hash值，再执行余操作，确定索引值落在数组范围内，从Hash索引地址开始查找链表中的值，查找冲突链表中元素的Key值是否与需要移除的Key值相同，相同则进行删除操作。"]},{heading:"2.4 ContainKey、TryGetValue接口",paragraphs:[`\`\`\`csharp
public bool ContainsKey(TKey key)
{
    return FindEntry(key)>= 0;
}`,`public bool TryGetValue(TKey key, out TValue value)
{
    int i = FindEntry(key);
    if (i>= 0) {
        value = entries[i].value;
        return true;
    }
    value = default(TValue);
    return false;
}`,`private int FindEntry(TKey key)
{
    if( key == null) {
        ThrowHelper.ThrowArgumentNullException(ExceptionArgument.key);
    }`,`if (buckets != null) {
        int hashCode = comparer.GetHashCode(key) & 0x7FFFFFFF;
        for (int i = buckets[hashCode % buckets.Length]; i>= 0; i = entries[i].next) {
            if (entries[i].hashCode == hashCode && comparer.Equals(entries[i].key,key)) return i;
        }
    }
    return -1;
}
\`\`\``,"两者主要都是使用FindEntry()函数，使用Key值得到的Hash值地址开始查找，查看所有冲突链表中是否有与Key值相同的值，若找到，即刻返回该索引地址。"]},{heading:"三、总结",paragraphs:["从源码剖析来看，Hash冲突的拉链法贯穿了整个底层数据结构。因此Hash函数是关键，Hash函数的好坏直接决定了效率的高低。Hash函数源码就不在这解释了，因为我看不懂😂，","了解了Dictionary的内部构造和运作机制，可以知道它是有数组构成，并由Hash函数完成地址构建，并由拉链法解析哈希冲突。","从效率上看，同List一样，最好在实例化对象，即新建时，确定大致数量，这样会使得内存分配次数减少，另外，使用数值方式作为键值比使用类实例的方式更高效，因为类对象实例的Hash值通常都由内存地址再计算得到。从内存操作上看，其大小以3→7→17→37→…的速度（每次增加2倍多）增长，删除时，并不缩减内存。","Dictionary也是线性不安全的，因此在多线程访问的时候，需要自行加lock处理。"]}],takeaways:[]},{id:"wp-21",tags:["创建型设计模式","设计模式"],categoryId:"pattern",title:"原型模式",date:"2024-06-19",cover:"🏗️",excerpt:"一、概述 原型模式是一种特殊的创建型模式(对象创建型模式)，它通过复制一个已有对象来获取更多相同或者相似的对象。原型模式可以提高相同类型对象的创建效率，简化创建过程。其中原型模式又分为浅拷贝和深拷贝。浅拷贝是指复制引用但不复制引用的对象，而...",sections:[{heading:"一、概述",paragraphs:["原型模式是一种特殊的创建型模式(**对象创建型模式**)，它通过复制一个已有对象来获取更多相同或者相似的对象。原型模式可以提高相同类型对象的创建效率，简化创建过程。其中原型模式又分为**浅拷贝和深拷贝**。浅拷贝是指复制引用但不复制引用的对象，而深拷贝复制的引用和引用对象。","**定义:**使用原型实例指定待创建对象的类型，并且通过复制这个原型来创建新的对象。"]},{heading:"二、模式结构",paragraphs:[`-   **Prototype(抽象原型类):**它声明了克隆方法的接口，是所有具体原型类的公共父类，它可以是抽象类也可以是接口，甚至还可以是具体实现类。
    
-   **ConcretePrototype(具体原型类):**它实现抽象原型类中声明的克隆方法，在克隆方法中返回自己的一个克隆对象。
    
-   **Client类:**让一个原型对象克隆自身从而创建一个新的对象。
    
    ![image-20240617231811026](@img/pwahk86m)`]},{heading:"三、具体实现",paragraphs:["以简历为例，复制多份简历，使用原型模式来实现，由于C#中提供了ICloneable接口(抽象原型类)，所有具体原型类实现IClonable接口。"]},{heading:"3.1 浅拷贝",paragraphs:["**浅拷贝:**被复制对象的所有变量都含有与原来的对象相同的值，而所有的对其他对象的引用都仍然指向原来的对象, 某个对象修改，所有的对象都会随之一起修改。","-   Resume(具体原型类)：简历类",`\`\`\`csharp
public class WorkExperience
{
    private string _workDate;
    public string WorkDate { 
        get 
        { 
            return _workDate; 
        }
        set
        {
            _workDate = value;
        }
    }
    private string _company;
    public string Company
    {
        get
        {
            return _company;
        }
        set
        {
            _company = value;
        }
    }
}`,`public class Resume : ICloneable
{
    private string _name;
    private string _sex;
    private string _age;
    private WorkExperience workExperience;`,`public Resume(string name)
    {
        _name = name;
        workExperience = new WorkExperience();
    }`,`// 设置个人信息
    public void SetPersonalInfo(string sex, string age)
    {
        _sex = sex;
        _age = age;
    }
    // 设置工作经历
    public void SetWorkExperience(string workData, string company)
    {
        workExperience.WorkDate = workData;
        workExperience.Company = company;
    }
    // 显示
    public void Display()
    {
        Console.WriteLine("{0} {1} {2}", _name, _sex, _age);
        Console.WriteLine("工作经历: {0} {1}", workExperience.WorkDate, workExperience.Company);
    }`,`public object Clone()
    {
        return (Object)MemberwiseClone();
    }
}
\`\`\``,`-   Client类
    
    \`\`\`csharp
    Resume resume = new Resume("lwy");
    resume.SetPersonalInfo("男", "23");
    resume.SetWorkExperience("2023-2024", "xx公司");
    
    Resume resume1 = (Resume)resume.Clone();
    resume1.SetWorkExperience("2022-2023", "yy企业");
    
    Resume resume2 = (Resume)resume.Clone();
    resume2.SetPersonalInfo("男", "24");
    
    resume.Display();
    resume1.Display();
    resume2.Display();
    
    /*
    lwy 男 23
    工作经历: 2022-2023 yy企业
    lwy 男 23
    工作经历: 2022-2023 yy企业
    lwy 男 24
    工作经历: 2022-2023 yy企业
    */
    \`\`\``,"string虽然是一种引用类型，但它属于拥有值类型特点的特殊应用类型, MemberwiseClone()**方法是这样，如果字段是值类型的，则对该字段执行逐位复制，如果字段是引用类型，则复制引用但不复制引用的对象；因此，原始对象及其复本引用同一对象**。"]},{heading:"3.2 深拷贝",paragraphs:["**深拷贝:**深复制把引用对象的变量指向复制过的新对象，而不是原有的被引用的对象,每个对象都独立存在。","-   Resume(具体原型类)：简历类",`\`\`\`csharp
public class WorkExperience : ICloneable
{
    private string _workDate;
    public string WorkDate { 
        get 
        { 
            return _workDate; 
        }
        set
        {
            _workDate = value;
        }
    }
    private string _company;
    public string Company
    {
        get
        {
            return _company;
        }
        set
        {
            _company = value;
        }
    }`,`public object Clone()
    {
        return (Object) this.MemberwiseClone();
    }
}`,`public class Resume : ICloneable
{
    private string _name;
    private string _sex;
    private string _age;
    private WorkExperience workExperience;`,`public Resume(string name)
    {
        _name = name;
        workExperience = new WorkExperience();
    }`,`// 设置个人信息
    public void SetPersonalInfo(string sex, string age)
    {
        _sex = sex;
        _age = age;
    }
    // 设置工作经历
    public void SetWorkExperience(string workData, string company)
    {
        workExperience.WorkDate = workData;
        workExperience.Company = company;
    }
    // 显示
    public void Display()
    {
        Console.WriteLine("{0} {1} {2}", _name, _sex, _age);
        Console.WriteLine("工作经历: {0} {1}", workExperience.WorkDate, workExperience.Company);
    }`,`public Object Clone()
    {
        Resume obj = new Resume(_name);
        obj.workExperience = (WorkExperience)workExperience.Clone();
        obj._sex = _sex;
        obj._age = _age;
        return obj;
    }
}
\`\`\``,`-   Client类
    
    \`\`\`csharp
    Resume resume = new Resume("lwy");
    resume.SetPersonalInfo("男", "23");
    resume.SetWorkExperience("2023-2024", "xx公司");
    
    Resume resume1 = (Resume)resume.Clone();
    resume1.SetWorkExperience("2022-2023", "yy企业");
    
    Resume resume2 = (Resume)resume.Clone();
    resume2.SetPersonalInfo("男", "24");
    
    resume.Display();
    resume1.Display();
    resume2.Display();
    
    /*
    lwy 男 23
    工作经历: 2023-2024 xx公司
    lwy 男 23
    工作经历: 2022-2023 yy企业
    lwy 男 24
    工作经历: 2023-2024 xx公司
    */
    \`\`\``]},{heading:"四、优缺点",paragraphs:[`-   **优点:**
    1.  **性能高:**使用原型模式复用现有对象，比**使用构造函数重新创建对象性能更高**(直接在内存中拷贝，构造函数是不会执行的)，适用于**类实例对象**开销较大的情况。
    2.  **流程简单:**原型模式可以简化创建过程，直接修改现有对象实例的值，达到复用的目的。
-   **缺点:**
    1.  **实现复杂:**需要覆盖clone方法，且需注意深拷贝和浅拷贝的风险，实现深拷贝需要将每一层的对象的类都支持深拷贝。
    2.  **不符合开闭原则**:因为每一个类配备一个克隆的方法，且该克隆方法位于类内部，当对已有的类进行修改时需要修改源代码。`]},{heading:"五、适用环境",paragraphs:[`1.  当需要在运行是动态地创建新对象，且不必知道它们确切类型时，可以采用原型模式。
2.  当类初始化时消耗过多资源，或者构造函数复杂，或者需要避免创建新对象时所需的构造函数调用开销，都可以考虑使用原型模式。`]}],takeaways:[]},{id:"wp-22",tags:["Unity"],categoryId:"unity",title:"浮点数的精度问题",date:"2024-06-23",cover:"🎮",excerpt:"每个人在写关于浮点数判断大小的时候都会看到a - b &lt; 1e8来确定a和b的数值是否相等，为什么不能适用a == b来直接判断呢？ 这个就涉及到了浮点数的精度问题。 下面一段代码 #include&lt;iostream&gt; u...",sections:[{heading:"浮点数的精度问题",paragraphs:["每个人在写关于浮点数判断大小的时候都会看到`a - b < 1e8`来确定a和b的数值是否相等，为什么不能适用`a == b`来直接判断呢？ 这个就涉及到了浮点数的精度问题。","下面一段代码",`\`\`\`c
#include<iostream>
using namespace std;
int main(){
    float a = 0.1;
    float sum = 0;
    for (int i = 0; i < 3; i ++){
        sum = a + sum;
    }
    printf ("%0.8f", sum);
    return 0;
}`,"// 输出的值为0.30000001\n```","最后输出的值为`0.30000001`,因为在浮点型的数据做运算的时候，得到的数据都不会精确。"]},{heading:"一、浮点数的二进制存储方法",paragraphs:["[IEEE二进制浮点数算术标准](https://zh.wikipedia.org/wiki/IEEE_754#32%E4%BD%8D%E5%96%AE%E7%B2%BE%E5%BA%A6)中，单精度float类型使用**32比特存储(32位占4字节)**，其中1位为表符号，8位表示指数，23位表示尾数；双精度double类型使用**64比特存储(64位占8字节)**，1位符号位，11位指数位，52位尾数位。",'计算机只能识别0和1，所以在浮点数中，不管是整数还是小数，在计算机中都以二进制方式来存储在内存中，其中整数部分采用**"除以2取余法"**从十进制数转换成二进制，而小数部分则使用**"乘2取整法"**得到二进制数。以120.5为例，120.5(10)中整数表示`1111000`,而小数表示`1`,即1.1110001×2^6。',"![image-20240622212513410](@img/uftrv5py)","浮点数的存储一共分为三个部分:",`1.  **符号位(sign):**0表示正数，1表示负数。
2.  **指数位(exponent):**存储科学计数法的指数部分。
3.  **尾数部分(fraction):**表示科学技术法的尾数部分。`,"![image-20240622213015545](@img/zb72v5r1)","任何一个浮点数可以这样表示","​ `F = （-1 ^ s) × (1.M) × (2 ^ e)`","符号位即为`s`,尾数部位即为`M`,指数部位为`e`。","由此可以得出，结论二进制小数的科学计数法表示上看，可以知道float的精度为 1 / (2 ^ 23)，double的精度为1 / (2 ^ 52) 。"]},{heading:"二、精度丢失",paragraphs:["浮点数9.625可以用2进制表示为1.1110001×2^6，0.625可以精确的表示成`101`,那如果以198903.19为例，0.19则表示`0011000010100011...`,它转换为二进制是无穷尽的。而198903二进制为`110000100011110111`，那么表示二进制则为`(-1^0)×1.100 001 000 111 101 110 011 000 010 100 011×(2^17)`。在计算中存储时就会**溢出，从而丢失精度**。","在实际开发中我们遇到常见的精度问题:","-   **数值比较不相等:**\n    \n    比如在Unity的Update函数中，如果我们需要设计一个在0.23秒执行某个逻辑，然后在0.43秒在做另外一个逻辑时，如果我们使用`==`那么就会遇到在0.23秒或者0.43秒并不会执行逻辑。我们只能用`>`或者`<`来解决该问题的出现。或者使用abs(X - 0.23) < 0.000001来判断`x == 0.23`。\n    \n-   **不同设备的计算结果不同：**\n    \n    不同平台上的浮点数计算也有误差，由于设备上CPU存储器和操作系统架构不同，因此会导致相同的公式在不同的设备上计算出的结果有所差异。"]},{heading:"三、精度丢失的解决办法",paragraphs:[`-   **使用int或long来代替浮点数(策划数值表体现):**浮点数和整数的计算方式是一样的，小数点部分会造成精度问题，不如通过将浮点数乘10的次幂来得到整数，在用整数进行运算，根据需要的精度用整数表示，如保留3位精度就乘以10000。
-   **用定点数保持一致性：**定点数是把整数部分和小数部分拆分开来，都以整数的形式表示，这样计算和表示都是用整数的方式，就不会产生误差，C#有一种decimal的128位的数据类型，用于表示高精度的实数，其内部就是定点数的实现方式(注意:decimal不能与float随意互换)，也可以自己实现一个定点数逻辑。
-   **用字符串代替浮点数:**在学校写算法题时基本上都会遇到过字符串来解决上百位的数字的高精度运算，字符串形式存储数字，这样的计算方式不用担心越界问题，但是CPU和内存的消耗比较大，只能做少量高精度的计算。`]}],takeaways:[]},{id:"wp-23",tags:["结构型设计模式","设计模式"],categoryId:"pattern",title:"适配器和桥接模式",date:"2024-06-28",cover:"🏗️",excerpt:"一、适配器模式 1.1 概述 适配器模式充当两个不兼容接口之间的桥梁，属于结构型模式，它通过中间件（适配器）将一个类的接口转换为客户期望的另一个接口。如生活中的充电器，生活用电的电压是220V但是手机的工作电压没那么高，于是就有了充电器(变...",sections:[{heading:"1.1 概述",paragraphs:["适配器模式充当**两个不兼容接口之间的桥梁**，属于结构型模式，它通过中间件（适配器）将一个类的接口转换为客户期望的另一个接口。如生活中的充电器，生活用电的电压是`220V`但是手机的工作电压没那么高，于是就有了`充电器(变压器)`让手机能在`220V`电压下充电，在这电源充电器就充当了一个**适配器**的角色。","**定义：**将一个类的接口转换为客户希望的另一个接口，适配器让那些**接口不兼容**的类可以一起工作。","适配器模式其中包括了类适配器和对象适配器。在对象适配器模式中，适配器与适配者之间是**关联关系**；在类适配器模式中，适配器和适配者之间是**继承（或实现）关系**。"]},{heading:"1.2 模式结构",paragraphs:["适配器模式包括对象适配器和类适配器，其中包括3个角色:","1.  **Target(目标抽象类)：**目标抽象**定义客户所需接口**，可以是一个抽象类或者接口，也可以是一个具体类。\n2.  **Adapter(适配器类)：**它可以调用另一个接口，作为一个**转换器**，对Adaptee（适配者类）和Target（目标抽象类）进行适配。适配者是适配模式的核心，**在类适配器中，它通过实现`Target接口`并继承`Adaptee类`来使二者产生联系,在对象适配器中，它通过继承`Target接口`并关联一个`Adaptee对象`使二者产生联系。**\n3.  **Adaptee(适配者类)：**即被适配的角色，定义了一个**存在的接口，这个接口需要适配**，适配者类一般是一个具体类。包含了客户希望使用的业务方法，在某些情况下甚至没有适配者类的源代码。","**类适配器模式结构图:**","![image-20240623222808013](@img/cdnr4oi1)","**对象适配器模式结构图:**","![image-20240623222842575](@img/mobd17az)"]},{heading:"1.3 实现与应用实例",paragraphs:["**类适配器模式:**",`\`\`\`csharp
    public class Adapter : Adaptee, Target
    {
        public void request()
        {
            this.specificRequest();
        }
    }
\`\`\``,"**对象适配器模式:**","```csharp\n    public class Adapter : Target\n    {\n        private Adaptee adaptee;",`public Adapter()
        {
            adaptee = new Adaptee();
        }`,`public void request()
        {
            adaptee.specificRequest();
        }
    }
\`\`\``,"以国家之前的电压为例，中国电网的电压是以`220V`输出的，而美国电网的电压是以`110V`输出的，现在要将美国电压转接（适配）到中国使用。、",`-   **类适配器：**
    
    \`\`\`csharp
    // 客户期望的接口: 220V电压输出
    public interface Target
    {
      public int chargeBy220V();
    }
    // 现有接口:只能通过110V电压充电
    public interface Adaptee
    {
      public int chargeBy110V();
    }
    // 现有接口的具体实现类，美国供电器:通过110V电压供电
    public class AmericanCharger : Adaptee
    {
      public int chargeBy110V()
      {
          Console.WriteLine("美国供电器，正在以110V电压为您充电");
          return 110;
      }
    }
    // 类适配器，通过继承现有接口来完成对现有接口的扩展
    public class Adpater : AmericanCharger ,Target
    {
      public int chargeBy220V()
      {
          int americanCharger = chargeBy110V();
          int charger = americanCharger + 110;
          Console.WriteLine("再加110V，达到220V");
          return charger;
      }
    }
    
    public class Client
    {
      public void main(string[] args)
      {
          Adpater adapter = new Adpater();
          adapter.chargeBy220V();
      }
    
      /*
       * 美国供电器，正在以110V电压为您充电
       * 再加110V，达到220V
       */
    }
    \`\`\`
    
-   **对象适配器模式：**
    
    \`\`\`csharp
    namespace Test.dApadters
    {
      public interface ATarget
      {
          public int chargeBy220V();
      }
      public interface BTarget
      {
          public int chargeBy110V();
      }
    
      public class AmericanCharger : BTarget
      {
          public int chargeBy110V()
          {
              Console.WriteLine("美国充电器, 正在通过110V电压为您充电");
              return 110;
          }
      }
    
      public class ChinaCharger : ATarget
      {
          public int chargeBy220V()
          {
              Console.WriteLine("中国充电器, 正在通过220V电压为您充电");
              return 220;
          }
      }
      public class Adpater : ATarget, BTarget
      {
          private ATarget aTarget;
          private BTarget bTarget;
    
          public Adpater(ATarget charger)
          {
              this.aTarget = charger;
          }
    
          public Adpater(BTarget charger)
          {
              this.bTarget = charger;
          }
    
          public int chargeBy110V()
          {
              int charge = aTarget.chargeBy220V();
              charge -= 110;
            Console.WriteLine("将220V降到110V输出");
              return charge;
          }
    
          public int chargeBy220V()
          {
              int charge = bTarget.chargeBy110V();
              charge += 110;
            Console.WriteLine("将110V升到220V输出");
              return charge;
          }
      }
    
      public class Client
      {
          public void main(String[] args)
          {
              // 110V 转 220V
              BTarget americanCharger = new AmericanCharger();
              Adpater adpater = new Adpater(americanCharger);
              adpater.chargeBy220V();
    
              // 220V 转 110V
              ATarget chinaCharge = new ChinaCharger();
              adpater = new Adpater(chinaCharge);
              adpater.chargeBy110V();
              /*
              *美国充电器, 正在通过110V电压为您充电
              *将110V升到220V输出
              *中国充电器, 正在通过220V电压为您充电
              *将220V降到110V输出
              */
    
          }
      }
    }
    \`\`\``,"上述代码用的是双适配器模式，即可以在美国用220V进行充电，也可以在中国用110V进行充电。"]},{heading:"1.4 优缺点",paragraphs:[`-   **优点：**
    1.  **将目标类和适配者进行解耦:**通过引入一个适配器类来重用现有的适配者类，无须修改原有逻辑。
    2.  **复用性：**它是原本接口不兼容而不能使用的类变的可复用。
    3.  **灵活性和扩展性：**只要客户端代码通过客户端接口与适配器进行交互，你就能在不修改现有客户端代码的情况下在程序中添加新类型的适配器。
-   **缺点：**
    1.  **系统可能变的混乱：**过多地使用适配器会让系统变得零乱，不容易整体把握。
    2.  **增加系统复杂性：**引入适配器模式会增加系统的抽象性，理解和维护相对困难。`]},{heading:"1.5 适用场景",paragraphs:[`1.  **对现有接口进行适配：**当一个类需要适用一个已有的接口，但是接口的方法不符合需求时，可以适用适配器模式将该接口适配到需要的形式。
2.  **兼容多个版本或不同类库：**如果需要在不同版本或不同类库之间进行交互，适配器模式提供了一个中间层，将不同的接口进行适配。
3.  **封装第三方组件：**当需要使用一个第三方组件并希望与该组件解耦时，适配器模式可以第三方组件进行封装，使代码更灵活。`]},{heading:"2.1 概述",paragraphs:["桥接模式是一种一种很实用的结构性设计模式，如果系统中的某个类存在**两个独立变化的维度**，通过桥接模式可以将这**两个维度分离开来**，使两者可以独立扩展。桥接模式用**抽象关联来取代传统的多层继承，将类之间的静态继承关系转换为动态的对象组合关系**，使系统更加灵活，并易于扩展。","**定义：**将抽象部分与实现部分解耦，使得两者都能够独立变化。","桥接模式最重要的是**理解维度**，比如蜡笔和毛笔两者都能用作于画画的工作，假如需要大、中、小三种型号的画笔，其中又需要12种颜色的画笔，如果用蜡笔的话则需要36支颜色的蜡笔，而使用毛笔则只需要3支不同型号的毛笔加上12种颜色的调色板，而且如果需要加一种颜色或者加一种型号则需要添加12支蜡笔，而毛笔只需要添加**一种型号或者一种颜色**即可。毛笔属于将型号和颜色划分为了两个维度，而蜡笔只有一个维度，桥接模式就是**将抽象部分和实现部分划为了两个维度**。"]},{heading:"2.2 模式结构",paragraphs:["桥接模式一共有4个角色:",`1.  **Abstraction(抽象类)：**它是用于定义抽象类的接口，**通常是抽象类而不是接口**，其中定义了一个**Implementor(实现接口)**类型的对象并可以维护该对象，他与Implementor之间具有**关联关系**，它既可以包含抽象业务方法，也可以包含具体业务方法。
2.  **Refine Abstraction(扩充抽象类):**它扩充由**Abstraction**定义的接口，通常情况下它不再是抽象类而是**具体类**，实现了在Abstraction中声明的抽象业务方法，在Refine Abstraction中可以调用Implementor中定义的业务方法。
3.  **Implementor(实现类接口):**它定义实现类的接口，这个接口不一定要与Abstraction的接口完全一致，一般而言，Implementor接口**仅仅只提供基本操作**，而Abstraction定义的接口可能会做更多复杂的操作，Implementor接口**对这些基本操作进行了声明，而具体实现交给其子类**，通过关联关系，在Abstraction中不仅拥有自己的方法，而且还可以调用到Implementor中定义的方法，使用**关联关系来替代继承关系**。
4.  **Concrete Implementor(具体实现类)**：实现了Implementor接口，在不同的Concrete Implementor中提供基本操作的不同实现。`,"![image-20240627231148675](@img/aap06xai)"]},{heading:"2.3 实现与应用实际",paragraphs:["设计一个系统，要求该系统能够显示BMP、JPG、GIF、PNG等多种格式的文件，并且能够在Windows、Linux、UNIX等多个操作系统上运行，系统需要将各种格式的文件解析成像素矩阵，然后将像素矩阵显示再屏幕上，在不同的操作系统中可以调用不同的绘制函数来绘制像素矩阵。"]},{heading:"2.3.1 Abstarction抽象类",paragraphs:[`\`\`\`csharp
public abstract class Image
{
    protected ImageImp imp;
    public void SetImageImp(ImageImp imp)
    {
        this.imp = imp;
    }`,"public abstract void parseFile(string filename);\n}\n```"]},{heading:"2.3.2 Refine Abstraction扩充抽象类",paragraphs:[`\`\`\`csharp
public class JPGImage : Image
{
    public override void parseFile(string filename)
    {
        // 模拟解析一个JPG文件并获得一个像素矩阵对象m
        Matrix matrix = new Matrix();
        imp.DoPaint(matrix);
        Console.WriteLine(filename + ", 格式为JPG");
    }
}`,`public class PNGImage : Image
{
    public override void parseFile(string filename)
    {
        // 模拟解析一个PNG文件并获得一个像素矩阵对象m
        Matrix matrix = new Matrix();
        imp.DoPaint(matrix);
        Console.WriteLine(filename + ", 格式为PNG");
    }
}`,`public class GIFImage : Image
{
    public override void parseFile(string filename)
    {
        // 模拟解析一个GIF文件并获得一个像素矩阵对象m
        Matrix matrix = new Matrix();
        imp.DoPaint(matrix);
        Console.WriteLine(filename + ", 格式为GIF");
    }
}
\`\`\``]},{heading:"2.3.3 Implementor实现接口",paragraphs:["```csharp\n    // 像素矩阵类，辅助类\n    public class Matrix\n    {","}",`public interface ImageImp
    {
        public void DoPaint(Matrix matrix); // 显示像素矩阵
    }
\`\`\``]},{heading:"2.3.4 Concrete Implementor",paragraphs:[`\`\`\`csharp
public class WindowsImp : ImageImp
{
    public void DoPaint(Matrix matrix)
    {
        // 调用Windows系统的绘制函数绘制像素矩阵
        Console.WriteLine("在Windows操作系统中显示图像");
    }
}`,`public class LinuxImp : ImageImp
{
    public void DoPaint(Matrix matrix)
    {
        // 调用Linux系统的绘制函数绘制像素矩阵
        Console.WriteLine("在Linux操作系统中显示图像");
    }
}`,`public class UnixImp : ImageImp
{
    public void DoPaint(Matrix matrix)
    {
        // 调用Unix系统的绘制函数绘制像素矩阵
        Console.WriteLine("在Unix操作系统中显示图像");
    }
}`,`public abstract class Image
{
    protected ImageImp imp;
    public void SetImageImp(ImageImp imp)
    {
        this.imp = imp;
    }`,"public abstract void parseFile(string filename);\n}\n```"]},{heading:"2.4 优缺点",paragraphs:[`-   **优点：**
    1.  **分离抽象与实现：**将抽象部分与具体实现部分分离，使它们可以独立变化，允许我们在不影响彼此的情况下对它进行扩展
    2.  **提高扩展性:**通过桥接模式，我们可以在两个变化维度中的任意一个进行扩展，而无须修改原有系统。
-   **缺点:**
    1.  **增加系统的复杂性：**桥接模式会增加系统的理解和设计难度，由于聚合关联关系简历抽象层，需要对抽象层进行设计和编程。
    2.  **理解难度增加：**正确识别系统中的两个独立维度需要一定经验。`]},{heading:"2.5 适用场景",paragraphs:[`1.  **存在独立变化维度：**一个类存在两个独立变化维度，且这两个维度都需要扩展。
2.  **抽象实现灵活：**当抽象部分和具体实现部分之间有更多的灵活性，可适用桥接模式，可以避免两个层次之前使用**静态的继承关系**，而是通过组合建立关联关系。`]}],takeaways:[]},{id:"wp-24",tags:["结构型设计模式","设计模式"],categoryId:"pattern",title:"组合模式",date:"2024-06-30",cover:"🏗️",excerpt:"一、概念 在面向编程中，有一条非常经典的设计原则，那就是:组合优于继承，多用组合少用继承，继承是面向对象的四大特征之一,表示is-a的类关系，继承特性解决了代码复用的问题，但是当继承的深度过度，代码变得更复杂，变得更难以维护。而组成则表示h...",sections:[{heading:"一、概念",paragraphs:["在面向编程中，有一条非常经典的设计原则，那就是:**组合优于继承，多用组合少用继承**，继承是面向对象的四大特征之一,**表示`is-a`的类关系**，继承特性解决了代码复用的问题，但是当继承的深度过度，代码变得更复杂，变得更难以维护。而组成则**表示`has-a`的关系**，是把另外一个对象当作当前这个对象的一部分，是组成我的一部分，能够很好的实现代码的复用。","组合模式是一种**结构性设计模式**，它允许你将对象组合成树形结构，以表示**部分-整体**的层次结构，这种模式对单个对象(即**叶子节点**)和组合对象(即**容器节点**)的使用具有一致性。","**定义:**组合模式组合多个对象形成树形结构以表示具有**部分-整体**关系的层次结构，组合模式让客户端可以统一对待单个对象和组合对象。"]},{heading:"2.1 结构",paragraphs:[`1.  **Component(抽象组件)**：定义了组合中所有对象必须实现的通用接口，可以是抽象类或者接口，它声明了用于访问和管理子组件的方法。包括添加、删除、获取子组件等。
    
2.  **Leaf(叶子构件):**它在组合结构中表示叶子节点对象，**叶子节点没有子节点**，它实现了组件接口的方法，但不包含子节点。
    
3.  **Composite(复合构件)：**表示了组合中的复合对象，复合节点可以包含子节点，也可以是叶子节点，也可以是其他复合节点，它实现了组合接口的方法，包括管理子节点的方法。
    
    ![image-20240630220426002](@img/q5aekmgh)`]},{heading:"2.2 透明组合模式与安全组合模式",paragraphs:["组合模式根据抽象构件类的定义形式又可以分为透明组合模式和安全组合模式。"]},{heading:"2.2.1 透明组合模式",paragraphs:["在抽象构件`Component`中声明了所有用于管理成员对象的方法，包括add()、remove()、以及getChild等方法，叶子节点和复合节点所有的方法都是一致的。","![image-20240630222236068](@img/otkmesqj)","透明组合模式缺点就是不够安全，叶子对象和容器对象在本质上是有区别的，叶子对象没有子节点，所有不会包含add、remove、getChild等方法，透明组合模式在编译阶段不会报错，但是在运行阶段调用则会抛出异常。"]},{heading:"2.2.2 安全组合模式",paragraphs:["在安全组合模式中，抽象构件`Component`中没有声明任何用于管理成员对象的方法，而是在`Composite`中声明并实现这些方法，这种方法是安全的。缺点就是不够透明，客户端不能完全针对抽象编程，必须区别对待叶子构件和容器构件。","![image-20240630223218202](@img/oo66e8h3)"]},{heading:"三、应用实例",paragraphs:["以电脑的文件系统为例，利用组合模式来设计文件系统。",`-   **Component:**抽象组件
    
    \`\`\`csharp
    public abstract class Component
    {
    
      protected string _name;
      public string Name => _name;
    
      public string Path { get; set; }
      public bool IsDirectory { get; set; }
      public bool IsFile { get; set; }
    
      public Component? parent;
    
      public virtual void Remove(Component component) { }
      public abstract void Display();
      public abstract void Delete();
    }
    \`\`\`
    
-   **Folder:**复合构件
    
    \`\`\`csharp
    public class Folder : Component
    {
      public Folder() 
      {
          _name = "新建文件夹";
          IsDirectory = true;
          IsFile = false;
      }
    
      public Folder(string name) 
      {
          _name = name;
          IsDirectory = true;
          IsFile = false;
      }
    
      public List children = new List();
    
      public void Add(Component component) 
      {
          component.Path = $"{Path}/{component.Name}";
          component.parent = this;
          children.Add(component);
      }
    
      public override void Display()
      {
          Console.WriteLine($"Name: {_name} Path: {Path}");
          foreach (Component component in children)
          {
              component.Display();
          }
      }
    
      public override void Delete()
      {
          children?.Clear();
          children = null;
      }
    
      public override void Remove(Component component)
      {
          children.Remove(component);
          component = null;
      }
    }
    \`\`\`
    
-   **File:**叶子构件
    
    \`\`\`csharp
    public class File : Component
    {
      public File(string name)
      {
          _name = name;
          IsDirectory = false;
          IsFile = true;
      }
    
      public override void Delete()
      {
          if (parent != null) parent.Remove(this);
      }
    
      public override void Display()
      {
          Console.WriteLine($"Name: {Name} Path: {Path}");
      }
    }
    \`\`\`
    
-   **Client:**客户端类
    
    \`\`\`csharp
    Folder root = new Folder("root");
    
    Folder Photo = new Folder("Photo");
    root.Add(Photo);
    
    Main.File boyPng = new Main.File("boy.png");
    Main.File grilPng = new Main.File("gril.png");
    Folder JPG = new Folder("JPG");
    Main.File boyJPG = new Main.File("boy.jpg");
    Photo.Add(boyPng);
    Photo.Add(grilPng);
    Photo.Add(JPG);
    JPG.Add(boyJPG);
    
    Folder softWare = new("softWare");
    root.Add(softWare);
    Main.File qq = new Main.File("qq.exe");
    Main.File wx = new Main.File("wx.exe");
    softWare.Add(qq);
    softWare.Add(wx);
    
    root.Display();
    
    /*
    Name: root Path:
    Name: Photo Path: /Photo
    Name: boy.png Path: /Photo/boy.png
    Name: gril.png Path: /Photo/gril.png
    Name: JPG Path: /Photo/JPG
    Name: boy.jpg Path: /Photo/JPG/boy.jpg
    Name: softWare Path: /softWare
    Name: qq.exe Path: /softWare/qq.exe
    Name: wx.exe Path: /softWare/wx.exe
    */
    \`\`\``]},{heading:"四、优缺点",paragraphs:[`-   **优点：**
    1.  **定义层次:**清楚地定义了复杂对象的分层次结构，表示对象的全部或者部分层次。
    2.  **忽略层次：**让客户端忽略层次之间的差异，方便对整个层次结构进行控制。
    3.  **符合开闭原则：**可以轻松增加新的组件类型，而且不需要修改现有代码。
-   **缺点：**
    1.  **限制类型复杂:**在限制类型是，使用组合模式可能会变得复杂，比如有时候希望目录中只包含文本文件，但组合模式不能依赖类型系统施加约束，只能在运行时对类型进行检查。
    2.  **使设计更加抽象：**组合模式引入了更多抽象概念，使设计变得更加抽象。`]},{heading:"五、使用场景",paragraphs:[`1.  **处理树形结构:**组合模式非常适合处理具有层次结构的对象，例如游戏中的红点模式，界面管理都可以使用组合模式。
2.  **忽略差异:**可以忽略组合对象和单个对象之间的差异，用一致的方式处理单个对象和组合对象。`]}],takeaways:[]},{id:"wp-25",tags:["结构型设计模式","设计模式"],categoryId:"pattern",title:"装饰模式与外观模式",date:"2024-07-02",cover:"🏗️",excerpt:"一、装饰模式 1.1 概念 装饰模式是一种用于替代继承的技术，它通过无须定义子类的方式来给对象动态的增加职责，使用对象之间的关联关系取代类之间的继承关系。装饰模式降低了系统的耦合度，可以动态增加或删除对象的职责。 定义：动态地给一个对象增加...",sections:[{heading:"1.1 概念",paragraphs:["装饰模式是一种用于**替代继承**的技术，它通过无须定义子类的方式来给对象动态的增加职责，使用对象之间的**关联关系**取代类之间的继承关系。装饰模式降低了系统的耦合度，可以动态增加或删除对象的职责。","**定义：**动态地给一个对象增加一些额外的职责，就扩展功能而言，装饰模式提供了一种比使用子类更加灵活的替代方案。"]},{heading:"1.2 模式结构",paragraphs:[`1.  **Component(抽象组件)：**具体组件和抽象装饰类的共同父类，声明了在具体构件中实现的业务方法，**定义了可以动态增加任务对象的接口**。
    
2.  **ConcreteComponent(具体组件)：**抽象组件的子类，用于定义**具体组件对象**，实现了抽象组件中声明的方法，装饰类可以给他增加额外的职责。
    
3.  **Decorator(抽象装饰类)：**也是抽象组件的子类，**用于给具体组件增加职责**，但是具体职责在其子类中实现。它维护一个只想抽象组件对象的引用，通过该引用可以调用装饰之前组件对象的方法，并通过其子类扩展该方法，达到装饰的目的。
    
4.  **ConcreteDecorator(具体装饰类)：**它是抽象装饰类的子类，**负责向组件添加新的职责**。每个具体装饰类都定义了一些新的行为，可以调用在抽象装饰类中定义的方法，并可以增加新的方法用于扩充对象的行为。
    
    ![image-20240701225111942](@img/8abfvznn)`,`-   **核心代码:**
    
    \`\`\`csharp
    public abstract class Component
    {
      public abstract void operation();
    }
    
    public class ConcreteComponent : Component
    {
      public override void operation()
      {
          // 基本功能实现
          Console.WriteLine("基本功能实现");
      }
    }
    
    public class Decorator : Component
    {
      private Component component;
    
      public Decorator(Component component)
      {
          this.component = component;
      }
    
      public override void operation()
      {
          component.operation();
      }
    }
    
    public class ConcreteDecorator : Decorator
    {
      public ConcreteDecorator(Component component) : base(component)
      {
      }
      public override void operation()
      {
          base.operation();
          addBehavior();
      }
    
      public void addBehavior()
      {
          Console.WriteLine("进行扩展");
      }
    }
    public class Client
    {
      public void Main()
      {
          Component simple = new ConcreteComponent();
          ConcreteDecorator decorator = new ConcreteDecorator(simple);
          decorator.operation();
      }
    
      /*
       * 基本功能实现
       * 进行扩展
       */
    }
    \`\`\``]},{heading:"1.3 应用实例",paragraphs:["为了让系统具有更好的灵活性和可扩展性，克服继承复用所带来的问题，公司使用装饰模式来重构图形界面构件库的设计。",`-   **Component类：**抽象组件
    
    \`\`\`csharp
      public abstract class Component
      {
          public abstract void display();
      }
    \`\`\`
    
-   **ConcreteComponent类：**具体实现组件
    
    \`\`\`csharp
    public class Window : Component
    {
      public override void display()
      {
          Console.WriteLine("显示窗体");
      }
    }
    
    public class TextBox : Component
    {
    
      public override void display()
      {
          Console.WriteLine("显示文本框");
      }
    }
    
    public class ListBox : Component
    {
      public override void display()
      {
          Console.WriteLine("显示列表框");
      }
    }
    \`\`\`
    
-   **ComponentDecorator类:**抽象装饰类
    
    \`\`\`csharp
    public class ComponentDecorator : Component
    {
      private Component component;
      public ComponentDecorator(Component component)
      {
          this.component = component;
      }
    
      public override void display()
      {
          component.display();
      }
    }
    \`\`\`
    
-   **ConcreteDecorator类:**具体装饰类
    
    \`\`\`csharp
    public class ScrollBarDecorator : ComponentDecorator
    {
      public ScrollBarDecorator(Component component) : base(component)
      {
      }
    
      public override void display()
      {
          AddScrollBar();
          base.display();
      }
    
      public void AddScrollBar()
      {
          Console.WriteLine("为组件增加滚动条");
      }
    }
    
    public class BlackBorderDecorator : ComponentDecorator
    {
      public BlackBorderDecorator(Component component) : base(component)
      {
      }
      public override void display()
      {
          AddBlackBorder();
          base.display();
      }
    
      public void AddBlackBorder()
      {
          Console.WriteLine("为组件增加黑色边框");
      }
    }
    \`\`\`
    
-   **Client类:**
    
    \`\`\`csharp
    Component window = new Window();
    Component blackWindow = new BlackBorderDecorator(window);
    blackWindow.display();
    Component blackScrollWindow = new ScrollBarDecorator(blackWindow);
    blackScrollWindow.display();
    /*
    * 为组件增加黑色边框
    * 显示窗体
    * 为组件增加滚动条
    * 为组件增加黑色边框
    * 显示窗体
    */
    \`\`\``]},{heading:"1.4 优缺点",paragraphs:[`-   **优点：**
    1.  **灵活性和扩展性:**装饰模式可以在运行时动态地添加或者移除对象的职责，而**无须修改原始类**，使系统更加灵活且易于扩展。
    2.  **避免类爆炸:**适用继承来添加新功能会导致类的数量迅速增加，形成类爆炸，装饰模式通过组合而不是继承，会避免类爆炸。
    3.  **单一职责和开闭原则**：符合单一职责和开闭原则
-   **缺点:**
    1.  **复杂性:**引入很多小的装饰类，可能会增加代码复杂性。
    2.  **运行时开销：**每次装饰都需要创建一个新的装饰对象。`]},{heading:"1.5 适用场景",paragraphs:[`1.  **功能扩展:**当需要在不修改现有的对象，动态地添加功能时，可以适用装饰模式，利用组合的方式去增加功能。
2.  **避免类爆炸：** 当需要为多个独立的对象添加相同或类似的功能时，装饰模式可以避免创建大量的子类来实现不同组合的功能。它允许你按需组合功能，而不是静态地继承。`]},{heading:"2.1 概念",paragraphs:["外观模式(又称门面模式)是一种使用频率很高的设计模式，它通过引入一个**外观角色来简化客户端与子系统之间的交互。**为复杂的子系统调用提供了一个统一的入口，使子系统与客户端的耦合度降低。**外观类将客户类与子系统的内部复杂性分隔开来**，客户类只需要跟外观角色打交道，不需要与子系统内部的很多对象打交道。","**定义：**外观模式是一种为多个复杂的子系统提供一致的接口，而使这些子系统更容易被访问的模式，该模式对外有一个统一接口，外观角色不用关心内部子系统的具体细节。"]},{heading:"2.2 模式结构",paragraphs:[`-   **Facade(外观角色)：**它是客户端和子系统的中介，封装了子系统的复杂性，并提供了一个接口给客户端使用。
    
-   **SubSystem(子系统角色)：**实现了子系统的功能，由多个模块组成，可以是一个类或者多个类。外观角色也是子系统角色的客户端类。
    
    ![image-20240702223933612](@img/jiow62gk)`]},{heading:"2.3 应用实例",paragraphs:["设计一个DVD播放器系统，它由多个子系统组成，如音频、视频、界面等",`-   **SubSystem**：子系统
    
    \`\`\`csharp
    public class Audio
    {
      public void On() { Console.WriteLine("Audio On"); }
      public void Off() { Console.WriteLine("Audio Off"); }
    }
    
    public class Video
    {
      public void On() { Console.WriteLine("Video On"); }
      public void Off() { Console.WriteLine("Viedo Off"); }
    }
    
    public class UIPanel
    {
      public void On() { Console.WriteLine("UIPanel On"); }
      public void Off() { Console.WriteLine("UIPanel Off"); }
    }
    \`\`\`
    
-   **Facade**：外观角色
    
    \`\`\`csharp
    public class MediaPlayerFacade
    {
      private Audio _audio;
      private Video _video;
      private UIPanel _panel;
    
      public MediaPlayerFacade() 
      {
          _audio = new Audio();
          _video = new Video();
          _panel = new UIPanel();
      }
    
      public void Play()
      {
          _audio.On();
          _video.On();
          _panel.On();
      }
    
      public void Stop()
      {
          _audio.Off();
          _video.Off();
          _panel.Off();
      }
    }
    \`\`\`
    
-   **Client类**:
    
    \`\`\`csharp
    public class Client
    {
      public void Main(string[] args)
      {
          MediaPlayerFacade mediaPlayerFacade = new MediaPlayerFacade();
          mediaPlayerFacade.Play();
    
          mediaPlayerFacade.Stop();
    
          /*
           * Audio On
           * Video On
           * UIPanel On
           * Audio Off
           * Viedo Off
           * UIPanel Off
           */
      }
    }
    \`\`\``]},{heading:"2.4 优缺点",paragraphs:[`-   **优点:**
    1.  **符合迪米特法则:**外观模式使用户不需要了解子系统内部情况，只与外观模式交互，降低了应用层与子系统之间的耦合度。
    2.  **简化调用、层次控制：**简化了复杂系统的调用过程，只需要与外观类交互即可,将客户端与子系统分层。
-   **缺点:**
    1.  **不符合开闭原则:**当需要增加新的子系统或移除现有系统时，可能需要修改外观类或者客户端代码，不够灵活。
    2.  **可能导致系统过于复杂：**过度使用外观模式可能增加系统中类的数量。`]},{heading:"2.5 适用场景",paragraphs:[`1.  **对外提供简化接口:**当需要向外部提供一个简化接口并隐藏内部复杂性时，如SDK、API、库等可以使用外观模式。
2.  **层次结构系统:**在层次结构复杂的系统中，可以使用外观模式对客户端和子系统进行解耦分层。`]}],takeaways:[]},{id:"wp-26",tags:["结构型设计模式","设计模式"],categoryId:"pattern",title:"享元模式",date:"2024-07-06",cover:"🏗️",excerpt:"一、概念 当系统存在大量相同或者相似的对象时，可以使用享元模式。享元模式通过共享技术实现相同或者相似的细粒度对象的复用，从而节约了内存空间，提高了系统性能。在享元模式中提供了一个享元池用于存储已经创建好的享元对象，并通过享元工厂类将享元对象...",sections:[{heading:"一、概念",paragraphs:["当系统存在大量相同或者相似的对象时，可以使用享元模式。享元模式**通过共享技术实现相同或者相似的细粒度对象的复用**，从而节约了内存空间，提高了系统性能。在享元模式中提供了一个**享元池**用于存储已经创建好的享元对象，并通过**享元工厂类**将**享元对象**提供给客户端使用。","**定义:**运用共享技术有效地支持大量细粒度对象的复用。","享元模式与对象池模式的区别:对象池的概念是为了避免频繁地进行对象创建和释放导致内存碎片，可以预**先申请一片连续地区域空间**，每次创建对象时，从对象池取出空闲对象来使用，使用完成后再放回对象池以供后续使用。","对象池复用为**重复使用**，主要目的是**节省时间与性能消耗**。而享元模式的复用可以理解为**共享使用**，整个声明周期都是被所有使用者共享的，主要目的是**节省空间**。"]},{heading:"二、模式结构",paragraphs:["享元模式(又称轻量级模式)通常结合工厂模式一起使用，要求能够被共享的对象必须是**细粒度对象**，是一种对象结构型模式。",`-   **Flyweight(抽象享元类):**抽象享元类通常是一个接口或者是抽象类，其声明了具体享元类公共的方法，这些方法向外界提供享元对象的**内部数据(内部状态)**，同时也通过这些方法来设置**外部数据(外部状态)**。
    
-   **ConcreteFlyweight(具体享元类):**具体享元类实现了抽象享元类，其实例被称为享元对象，为内部状态提供存储空间。
    
-   **UnsharedConcreteFlyweight（非共享具体享元类）：**继承于抽象享元类，但是不能被共享。
    
-   **FlyweightFactory(享元工厂类):**用于创建并管理享元类对象，将各种类型的具体享元类对象存储在享元池中。
    
    ![image-20240706222025606](@img/no5x92vl)
    
-   **单纯共享模式:**在单元共享模式中所有的具体享元类都是可以共享的，不存在非共享具体享元类。
    
    ![image-20240706223613510](@img/i2ohfzrx)
    
-   **复合享元模式:**将一些单纯享元对象使用组合模式还可以形成复合享元对象，复合享元模式虽然本身不可共享，但是可以将多个内部状态不同的享元对象设置成相同的外部状态。
    
    ![image-20240706224459989](@img/agvu6gva)`]},{heading:"三、具体实现",paragraphs:["设计一款围棋游戏，棋盘中存在需要除坐标不同，其他都相同的黑子、白子，如果将所有的棋子都作为一个独立对象存储在内存中，将导致所需内存空间较大，这个时候也使用享元模式来解决该问题。","-   **Coordinates:**坐标类，用来表示享元模式的外部状态",`\`\`\`csharp
public class Coordinates
{
    private int x;
    private int y;`,`public Coordinates(int x, int y)
    {
        this.x = x;
        this.y = y;
    }`,`public int getX()
    {
        return x;
    }
    public int getY()
    {
        return y;
    }
    public void setPos(int x, int y)
    {
        this.x = x;
        this.y = y;
    }
}
\`\`\``,"-   **IgoChessman(抽象享元类):**抽象棋子类","```csharp\npublic abstract class IgoChessman\n{\n    public abstract string GetColor();",`public void Display(Coordinates coordinates)
    {
        Console.WriteLine($"棋子颜色: {GetColor()}, 棋子位置: {coordinates.getX()}, {coordinates.getY()}");
    }
}
\`\`\``,"-   **BlackIgoChessman、WhiteIgoCheesman(具体享元类)：**黑白棋子类",`\`\`\`csharp
public class BlackIgoChessman : IgoChessman
{
    public override string GetColor()
    {
        return "Black";
    }
}`,`public class WhiteIgoCheesman : IgoChessman
{
    public override string GetColor()
    {
        return "White";
    }
}
\`\`\``,"-   **IgoChessmanFactory(享元工厂类):**创造黑白棋子",`\`\`\`csharp
public class IgoChessmanFactory
{
    private static IgoChessmanFactory _instance;
    private Dictionary<string, IgoChessman> _igoChessDictionary = new Dictionary<string, IgoChessman>();`,`public static IgoChessmanFactory GetInstance()
    {
        if (_instance == null) _instance = new IgoChessmanFactory();
        return _instance;
    }
    public IgoChessman GetIgoChessman(string name)
    {
        if (!_igoChessDictionary.TryGetValue(name, out IgoChessman chessman))
        {
            if (name == "Black") chessman = new BlackIgoChessman();
            else if (name == "White") chessman = new WhiteIgoCheesman();
            _igoChessDictionary.Add(name, chessman);
        }
        return chessman;
    }
}
\`\`\``,"-   **Client:**客户端","```csharp\nIgoChessman black1, black2, black3, white1, white2;\nIgoChessmanFactory igoChessmanFactory = IgoChessmanFactory.GetInstance();\nCoordinates coordinates = new Coordinates(0, 0);",`black1 = igoChessmanFactory.GetIgoChessman("Black");
black2 = igoChessmanFactory.GetIgoChessman("Black");
black3 = igoChessmanFactory.GetIgoChessman("Black");
if (black1 == black2 && black2 == black3) Console.WriteLine("Same Black Chess");
white1 = igoChessmanFactory.GetIgoChessman("White");
white2 = igoChessmanFactory.GetIgoChessman("White");
if (white1 == white2) Console.WriteLine("Same White Chess");
black1.Display(coordinates);
coordinates.setPos(1, 0);
black2.Display(coordinates);
coordinates.setPos(1, 1);
black3.Display(coordinates);
coordinates.setPos(1, 2);
white1.Display(coordinates);
coordinates.setPos(1, 3);
white2.Display(coordinates);
\`\`\``]},{heading:"四、优缺点",paragraphs:[`-   **优点：**
    1.  **降低内存消耗：**通过共享内部状态，相同对象只需要保存一份，从而减少了系统对象的数量，降低内存占用。
    2.  **提高性能：**由于对象数量减少，性能也会相应提升。
-   **缺点：**
    1.  **增加程序复杂性：**为了使对象可以共享，需要将不能共享的状态外部化，使逻辑变得复杂。
    2.  **运行时间变长：**读取享元模式的外部状态可能会增加运行时间。`]},{heading:"五、适用场景",paragraphs:[`1.  当系统有大量相同或者相似的对象，造成内存浪费时，可以使用享元模式。
2.  对象的大部分状态都可以外部化，可以将这些外部状态传入对象。`]}],takeaways:[]},{id:"wp-27",tags:["结构型设计模式","设计模式"],categoryId:"pattern",title:"代理模式",date:"2024-07-08",cover:"🏗️",excerpt:"一、概念 当无法直接访问某个对象或者访问某个对象存在困难时可以通过一个代理对象来间接访问，为了保证客户端使用的透明性，所访问的真实对象与代理对象要实现相同的接口。代理模式根据其目的不同，划分为保护代理、虚拟代理、缓存代理等。 代理模式引入一...",sections:[{heading:"一、概念",paragraphs:["当无法直接访问某个对象或者访问某个对象存在困难时可以通过一个代理对象来间接访问，为了保证客户端使用的透明性，所访问的真实对象与代理对象要实现相同的接口。代理模式根据其目的不同，划分为**保护代理、虚拟代理、缓存代理等**。","代理模式引入一个代理对象，在客户对象和目标对象中之间起到一个中介的作用，去掉了客户不能看到的内容和服务或者添加客户需要的额外的新服务。","**定义：**给某一个对象提供一个代理或占位符，并由代理对象来控制原对象的访问。"]},{heading:"二、模式结构",paragraphs:[`-   **Subject(抽象主题类):**声明了真实主题和代理主题的共同接口，使所有使用真实主题的都可以使用代理主题。
    
-   **Real Subject(真实主题)：**实现了抽象主题中的具体业务，是代理对象所代表的真实对象，实现了真实的业务操作。
    
-   **Proxy(代理主题)：**提供了与真实主题相同的接口，其中内部含有对真实主题类的引用，它可以访问、控制或者扩展真实主题。
    
    ![image-20240707223052226](@img/hqh0exkd)`,`\`\`\`csharp
public abstract class Subject
{
    public abstract void request();
}`,`public class RealSubject: Subject
{
    public override void request()
    {
        // 业务方法的具体实现
    }
}`,`public class Proxy : Subject
{
    private RealSubject _realSubject = new RealSubject();
    public void preRequest()
    {`,`}
    public override void request()
    {
        preRequest();
        _realSubject.request();
        postRequest();
    }`,`public void postRequest()
    {`,"}\n}\n```"]},{heading:"三、代理模式分类",paragraphs:["代理模式根据其目的和实现方式不同可分为多种种类。",`1.  **远程代理：**为一个位于不同地址空间的对象提供一个本地的代理对象，这个不同的地址空间可以在同一个主机中，也可以在另一台主机中（如网络通信）。
2.  **虚拟代理：**对于一些占用系统资源较多或者加载时间较长的对象，可以给这些对象提供一个虚拟代理，在真实对象创建成功之前虚拟代理扮演真实对象的替身，当真实对象创建之后虚拟对象再将用户的请求转发给真实对象(如网站加载资源，或者图片等)。
3.  **保护代理：**控制对一个对象的访问，并可以给不同用户不同的访问权限。
4.  **缓存代理：**为了某个目标操作的结果提供一个临时的存储空间，以便更多个客户端可以共享这些结果。
5.  **智能引用代理:**当一个对象被引用时提供一些额外的操作，如将对象被调用的次数记录下路。`]},{heading:"四、具体实现",paragraphs:["某软件公司需实现一个收费商务信息查询系统，用户在查询之前需要通过身份验证，只有合法的用户才能进行查询业务，并在进行商务查询时记录查询日志，以便根据查询次数进行查询收费。使用代理模式来实现身份认真和日志记录等功能，而查询功能由真实对象来实现。","**AccessValidator、Logger：**业务类","```csharp\npublic class AccessValidator\n{\n    private Dictionary<int, string> _users;",`public bool Validate(int uid, string password)
    {
        if (_users == null) _users = new Dictionary<int, string>();
        if (_users.ContainsKey(uid) && _users[uid] == password)
        {
            Console.WriteLine("验证成功");
            return true;
        }
        else
        {
            Console.WriteLine("登录失败");
            return false;
        }
    }
}`,`public class Logger
{
    private Dictionary<int, int> _userSearch;
    public void Log(int uid)
    {
        if (_userSearch == null) _userSearch = new Dictionary<int, int>();
        if (_userSearch.TryGetValue(uid, out int count))
        {
            _userSearch[uid] = count + 1;
            Console.WriteLine("更新数据库, 用户查询次数 + 1");
        }
        else
        {
            _userSearch.Add(uid, 1);
        }
    }
}`,`public struct UserInfo
{
    public int uid;
    public string name;
}
\`\`\``,"**Search(抽象主题类):**查询接口","```csharp\npublic interface Searcher\n{\n    public abstract UserInfo DoSearch(int uid, string password);\n}\n```","**RealSearch(真实主题类):**真实查询类","```csharp\n public class RealSearcher : Searcher\n {\n     private Dictionary<int, UserInfo> _userInfo;",`public UserInfo DoSearch(int uid, string password)
     {
         UserInfo info = new UserInfo();
         if (_userInfo == null) _userInfo = new Dictionary<int, UserInfo>();
         if (_userInfo.TryGetValue(uid, out var UserInfo))
         {
             info = UserInfo;
         }
         return info;
     }
 }
\`\`\``,"**Proxy(代理类):**代理查询类",`\`\`\`csharp
  public class Proxy : Searcher
  {
      private RealSearcher _realSearcher = new RealSearcher();
      private Logger _logger;
      private AccessValidator _accessValidator;
      public UserInfo DoSearch(int uid, string password)
      {
          UserInfo userInfo = new UserInfo();
          if (Vaildate(uid, password))
          {   
              userInfo = _realSearcher.DoSearch(uid, password);
              Log(uid);
          }
          return userInfo;
      }`,`public bool Vaildate(int uid, string password)
      {
          if (_accessValidator == null) _accessValidator = new AccessValidator();
          return _accessValidator.Validate(uid, password);
      }`,`public void Log(int  uid)
      {
          if (_logger == null) _logger = new Logger();
          _logger.Log(uid);
      }
  }
\`\`\``]},{heading:"五、优缺点",paragraphs:[`-   **优点:**
    1.  **分离目标对象:**代理模式将代理对象与真实对象分离，降低了系统的耦合度，使系统更具有扩展性。
    2.  **保护目标对象：**客户端只与代理类交互，不直接接触目标对象，从而保护了目标对象的业务逻辑。
    3.  **增加目标对象:**代理类可以在目标对象的基础上添加新的功能。
-   **缺点：**
    1.  **类的个数增加：**引入代理模式会增加系统的类数量，增加类的复杂性。
    2.  **性能降低：**在客户端和目标对象之间添加一个代理对象，可能导致请求处理速度变慢。`]},{heading:"六、适用场景",paragraphs:[`1.  **保护目标对象：** 代理模式用于限制客户端直接访问目标对象的细节。类似于租客通过中介找房东租房子，客户端只与代理类交互，不清楚目标对象的具体细节。
2.  **增强目标对象：** 代理类可以在目标对象的基础上添加新的功能。例如，代理模式可以用于在访问对象前后添加额外的逻辑。
3.  **远程代理：** 在网络编程中，可以使用代理服务器来缓存请求和响应，从而提高网络访问速度。
4.  **虚拟代理：** 虚拟代理用于延迟加载资源，例如大型图像或视频文件，只有在需要时才真正加载资源。
5.  **智能引用：** 智能引用代理用于管理资源和内存，例如引用计数、垃圾回收等。`]}],takeaways:[]},{id:"wp-28",tags:["行为型设计模式","设计模式"],categoryId:"pattern",title:"职责链模式",date:"2024-07-09",cover:"🏗️",excerpt:"一、概念 在系统中如果存在多个对象可以处理同一请求，则可以通过职责链模式将这些处理请求的对象连成一条链，让请求沿着该链进行传递。如果链上的对象可以处理该请求则进行处理，否则将请求转发给下家进行处理。 定义:避免将一个请求的发送者与接收者耦合...",sections:[{heading:"一、概念",paragraphs:["在系统中如果存在多个对象可以处理同一请求，则可以通过职责链模式将这些处理请求的对象连成一条链，让请求沿着该链进行传递。如果链上的对象可以处理该请求则进行处理，否则将请求转发给下家进行处理。","**定义:**避免将一个请求的发送者与接收者耦合在一起。让多个对象都有机会处理请求。将接收请求的对象连接成一条链，并沿着这条链传递请求，直到有一个对象能够处理它为止。"]},{heading:"二、模式结构",paragraphs:[`-   **Handler(抽象处理者):**它定义一个处理请求的接口，包含了抽象处理方法和后继连接。
    
-   **Concrete Handler(具体处理者):**实现抽象处理者的处理方法，判断能否处理本次请求，如果可以处理请求则处理，否则将该请求转给它的后继者。
    
-   **Client(客户端角色):**创建处理链，并向链头的具体处理者对象提交请求。
    
    ![image-20240708232919630](@img/3gh1zcm3)`]},{heading:"三、具体实现",paragraphs:["设计一个系统关于采购审批子系统，根据采购金额的不同由不同层次的主管人员进行审批，其中主任可以审批5万元以下，副董事长可以审批5-10万，董事长可以审批10-50万，超过50万需要董事会开会决定。","-   **PurchaseRequest(请求类):**采购单类",`\`\`\`csharp
public class PurchaseRequest
{
    private double _amount;
    private int _number;
    private string _purpose;`,`public PurchaseRequest(double amount, int number, string purpose)
    {
        _amount = amount;
        _number = number;
        _purpose = purpose;
    }
    public void SetPurchase(double amount, int number)
    {
        _amount = amount;
        _number = number;
    }`,`public double GetTotalPrice()
    {
        return _number * _amount;
    }
    public string GetPurchase()
    {
        return _purpose;
    }
}
\`\`\``,"-   **Approver(抽象处理类):**审批者类",`\`\`\`csharp
public abstract class Approver
{
    protected Approver successor;   //后继对象
    protected string name;          //审批者姓名`,`public Approver(string name)
    {
        this.name = name;
    }`,`public void SetSuccessor(Approver successor)
    {
        this.successor = successor;
    }`,"public abstract void ProcessRquest(PurchaseRequest purchase);\n}\n```","-   **Concrete Approver(具体处理类):**具体审批类",`\`\`\`csharp
public class Director : Approver
{
    public Director(string name) : base(name)
    {
        this.name = name;
    }`,`public override void ProcessRquest(PurchaseRequest purchase)
    {
        if (purchase.GetTotalPrice() < 50000)
        {
            Console.WriteLine($"主任:{name} 审批采购单: {purchase.GetPurchase()} 金额:{purchase.GetTotalPrice()}");
        }
        else
        {
            this.successor.ProcessRquest(purchase);
        }
    }
}`,`public class VicePresident : Approver
{
    public VicePresident(string name) : base(name)
    {
        this.name = name;
    }`,`public override void ProcessRquest(PurchaseRequest purchase)
    {
        if (purchase.GetTotalPrice() < 100000)
        {
            Console.WriteLine($"副董事长:{name} 审批采购单: {purchase.GetPurchase()} 金额:{purchase.GetTotalPrice()}");
        }
        else
        {
            this.successor.ProcessRquest(purchase);
        }
    }
}`,`public class President : Approver
{
    public President(string name) : base(name)
    {
        this.name = name;
    }`,`public override void ProcessRquest(PurchaseRequest purchase)
    {
        if (purchase.GetTotalPrice() < 500000)
        {
            Console.WriteLine($"董事长:{name} 审批采购单: {purchase.GetPurchase()} 金额:{purchase.GetTotalPrice()}");
        }
        else
        {
            this.successor.ProcessRquest(purchase);
        }
    }
}`,`public class Congress : Approver
{
    public Congress(string name) : base(name)
    {
        this.name = name;
    }`,`public override void ProcessRquest(PurchaseRequest purchase)
    {
        Console.WriteLine($"召开董事会 审批采购单: {purchase.GetPurchase()} 金额:{purchase.GetTotalPrice()}");
    }
}
\`\`\``,"-   **Client:**客户端类",`\`\`\`csharp
public class Client
{
    public void Main(string[] args)
    {
        Approver liming, jianguo, lihua, meet;
        liming = new Director("李明");
        jianguo = new VicePresident("建国");
        lihua = new President("李华");
        meet = new Congress("董事会");`,`liming.SetSuccessor(jianguo);
        jianguo.SetSuccessor(lihua);
        lihua.SetSuccessor(meet);`,`PurchaseRequest purchase = new PurchaseRequest(45000, 1, "办公桌");
        liming.ProcessRquest(purchase);`,`PurchaseRequest purchase1 = new PurchaseRequest(60000, 1, "电梯");
        liming.ProcessRquest(purchase1);`,`PurchaseRequest purchase2 = new PurchaseRequest(150000, 1, "空调");
        liming.ProcessRquest(purchase2);`,`PurchaseRequest purchase3 = new PurchaseRequest(510000, 1, "办公室");
        liming.ProcessRquest(purchase3);`,`/*
         * 主任:李明 审批采购单: 办公桌 金额:45000
         * 副董事长:建国 审批采购单: 电梯 金额:60000
         * 董事长:李华 审批采购单: 空调 金额:150000
         * 召开董事会 审批采购单: 办公室 金额:510000
         */
    }
}
\`\`\``]},{heading:"四、优缺点",paragraphs:[`-   **优点：**
    1.  **降低耦合度：**请求发送者不需要知道具体的处理者是谁，也不需要关心请求是如何被处理的，降低了发送者和处理者之间的耦合度。
    2.  **可扩展性：**可以动态地添加或者修改处理链，增加新的处理者或者调整处理顺序，而无需要修改已有代码。
-   **缺点：**
    1.  **请求可能未被处理:**如果责任链中没有正确配置明确的接收者或者最后一个接受者没有处理请求，则请求会被漏掉，一直没法处理。
    2.  **性能影响:**如果处理链过长，则系统性能会受到一定影响。`]},{heading:"五、适用环境",paragraphs:[`1.  有多个对象可以处理同一请求，具体哪个对象处理该请求待运行时在确定。
2.  动态指定一组对象处理请求，动态创建职责链来处理请求,还可以改变链中处理者之间的次序。`]}],takeaways:[]},{id:"wp-29",tags:["行为型设计模式","设计模式"],categoryId:"pattern",title:"观察者模式",date:"2024-07-10",cover:"🏗️",excerpt:"一、概念 观察者模式是使用频率较高的设计模式之一，它用于建立一种对象与对象之间的依赖关系，当一个对象发生改变时将自动通知其他对象,其他对象将做出相应的反应。在观察者模式中发生改变的对象称为观察目标，而被通知的对象成为观察者，一个观察者目标可...",sections:[{heading:"一、概念",paragraphs:["观察者模式是使用频率较高的设计模式之一，它用于建立一种对象与对象之间的依赖关系，当一个对象发生改变时将自动通知其他对象,其他对象将做出相应的反应。在观察者模式中发生改变的对象称为观察目标，而被通知的对象成为观察者，一个观察者目标可以对应多个观察者。","**定义：**定义对象之间的一种一对多的依赖关系，使得每当一个对象状态发生改变时其相关依赖对象皆得到通知并自动更新。"]},{heading:"二、模式结构",paragraphs:[`-   **Subject(目标)：**被观察的对象，在目标定义一个观察者集合，一个观察目标可以接受任意数量的观察者来观察，它提供一系列方法来增加和删除观察者对象，同时它定义了通知方法notify()。
    
-   **Concrete Subject(具体目标)：**是目标的具体实现类，它维护着观察者列表，并在状态发生改变时通知观察者。
    
-   **Observer(观察者):**是接受目标通知的对象，定义了一个更新方法，当收到目标通知时，调用更新方法进行更新操作。
    
-   **Concrete Observer(具体观察者)：**观察者的具体实现类，实现了更新方法，定义了在收到通知时需要执行的具体通知。
    
    ![image-20240709231123008](@img/73rb45cl)`]},{heading:"三、模式实现",paragraphs:[`\`\`\`csharp
// 目标类
public abstract class Subject
{
    protected List<Observer> observers = new List<Observer>();`,`public void AddObserver(Observer observer)
    {
        observers.Add(observer);
    }`,`public void RemoveObserver(Observer observer)
    {
        observers.Remove(observer);
    }`,`public abstract void Notify();
}
// 具体目标类
public class ConcreteSubject : Subject
{
    public override void Notify()
    {
        foreach (var obs in observers)
        {
            obs.Update();
        }
    }
}
// 观察者类
public abstract class Observer
{
    public abstract void Update();
}
// 具体观察者类
public class ConcreteObserver : Observer
{
    public override void Update()
    {
        // 具体响应代码
    }
}
\`\`\``]},{heading:"四、优缺点",paragraphs:[`-   **优点：**
    1.  **降低耦合度:**将表示层与数据逻辑层分离,定义了稳定的消息更新传递机制，并抽象了更新接口，使得可以有各种各样的表示层充当具体观察角色。
    2.  **广播通信:**观察目标会将所有已注册的观察者对象发送通知，简化了一对多系统设计的难度。
    3.  **符合开闭原则：**增加新的具体观察者无须修改原有系统代码，在具体观察者与观察者目标不存在联系关系。
-   **缺点:**
    1.  **性能消耗：**如果一个观察目标有很多直接或者间接观察者时，所有的观察者都会通知到，而且如果观察目标状态不断发生改变，会一直通知调用，会很消耗性能。
    2.  **死循环：**如果观察者与观察目标之间存在循环依赖，可能会导致系统崩溃。`]},{heading:"五、适用场景",paragraphs:[`1.  **事件系统/通知系统：**当一个对象的状态发生变化时，需要通知其他对象。
2.  **发布-订阅：**观察者模式是发布-订阅模型的一种实现方式。发布者（被观察者）发布消息，订阅者（观察者）接收并处理消息。`]}],takeaways:[]},{id:"wp-30",tags:["Unity"],categoryId:"unity",title:"事件系统",date:"2024-07-22",cover:"🎮",excerpt:"一、 委托与事件 1.1 委托 delegate是一个关键字，用来声明委托类型，Delegate是一个类，是委托类型的基类，但只有系统和编辑器可以显示地从Delegate类或者MulticastDelegate类派生，通常我们使用deleg...",sections:[{heading:"1.1 委托",paragraphs:["**delegate**是一个**关键字**，用来声明委托类型，**Delegate**是一个类，是**委托类型的基类**，但只有**系统和编辑器**可以显示地从**Delegate类**或者**MulticastDelegate类**派生，通常我们使用delegate关键字来定义委托类型。","委托是一种**引用类型(类似于函数指针)**，允许我们封装方法的引用，通过使用委托，我们可以将方法作为参数传递给其他方法，或者将方法类型组合在一起，从而实现更加灵活地编程。"]},{heading:"1.2 事件",paragraphs:["事件是一种特殊的委托实例化，用于外部接口，事件基于委托而并非委托，可以看成**委托的代理**，外部类只能通过`+=`和`-=`来注册和注销事件，而不能主动触发事件。"]},{heading:"1.3 委托与事件的区别",paragraphs:[`1.  事件是对委托的包装，保护了委托字段，对外不开放，只提供添加和移除事件的方法。
2.  事件的触发是在对象的内部。
3.  事件是一种更安全、更易用的方式来处理回调。`]},{heading:"二、事件系统",paragraphs:["-   **EventManager**: 事件管理系统类, 包括了注册、注销、广播事件， 其中能够监听5个以内的事件","```csharp\nusing LFrameWork;\nusing System;\nusing System.Collections.Generic;",`namespace Client.Event
{
    public class EventManager
    {
        private Dictionary<EventType, Delegate> _eventTable;
        protected override void OnInit()
        {
            _eventTable = new Dictionary<EventType, Delegate>();
        }`,`private void OnListenerAdding(EventType eventType, Delegate action)
        {
            if (!_eventTable.ContainsKey(eventType)) 
            {
                _eventTable.Add(eventType, null);
            }
            Delegate @delegate = _eventTable[eventType];
            if (@delegate != null && @delegate.GetType() != action.GetType())
            {
                GameLogger.LogError($"事件添加的类型不同, {eventType} DelagateType{@delegate.GetType()} actionType {action.GetType()}");
            }
        }`,`public void RegisterEvent(EventType eventType, CallBack action) 
        {
            OnListenerAdding(eventType, action);
            if (_eventTable.TryGetValue(eventType, out var @delegate))
            {
                _eventTable[eventType] = (CallBack)@delegate + action;
            }
        }`,`public void RegisterEvent<T>(EventType eventType, CallBack<T> action)
        {
            OnListenerAdding(eventType, action);
            if (_eventTable.TryGetValue(eventType, out var @delegate))
            {
                _eventTable[eventType] = (CallBack<T>)@delegate + action;
            }
        }`,`public void RegisterEvent<T, X>(EventType eventType, CallBack<T, X> action)
        {
            OnListenerAdding(eventType, action);
            if (_eventTable.TryGetValue(eventType, out var @delegate))
            {
                _eventTable[eventType] = (CallBack<T, X>)@delegate + action;
            }
        }`,`public void RegisterEvent<T, X, Y>(EventType eventType, CallBack<T, X, Y> action)
        {
            OnListenerAdding(eventType, action);
            if (_eventTable.TryGetValue(eventType, out var @delegate))
            {
                _eventTable[eventType] = (CallBack<T, X, Y>)@delegate + action;
            }
        }`,`public void RegisterEvent<T, X, Y, Z>(EventType eventType, CallBack<T, X, Y, Z> action)
        {
            OnListenerAdding(eventType, action);
            if (_eventTable.TryGetValue(eventType, out var @delegate))
            {
                _eventTable[eventType] = (CallBack<T, X, Y, Z>)@delegate + action;
            }
        }`,`public void RegisterEvent<T, X, Y, Z,W>(EventType eventType, CallBack<T, X, Y, Z,W> action)
        {
            OnListenerAdding(eventType, action);
            if (_eventTable.TryGetValue(eventType, out var @delegate))
            {
                _eventTable[eventType] = (CallBack<T, X, Y, Z, W>)@delegate + action;
            }
        }`,`private void OnListenerRemoving(EventType eventType, Delegate callBack)
        {
            if (_eventTable.ContainsKey(eventType))
            {
                Delegate @delegate = _eventTable[eventType];
                if (@delegate == null)
                {
                    GameLogger.LogError($"移除监听错误: 事件{eventType}没有对应的委托");
                }
                else if (@delegate.GetType() != callBack.GetType())
                {
                    GameLogger.LogError($"移除监听错误: 尝试为事件{eventType}移除不同类型的委托，当前委托类型为{@delegate.GetType()}，要移除的类型为{callBack.GetType()}");
                }
                else
                {
                    GameLogger.LogError($"移除监听错误: 没有事件码 {eventType}");
                }
            }
        }`,`private void OnListenerRemoved(EventType eventType)
        {
            if (_eventTable[eventType] == null) _eventTable.Remove(eventType);
        }`,`public void UnRegisterEvent(EventType eventType, CallBack callBack) 
        {
            OnListenerRemoving(eventType, callBack);
            _eventTable[eventType] = (CallBack)_eventTable[eventType] - callBack;
            OnListenerRemoved(eventType);
        }`,`public void UnRegisterEvent<T>(EventType eventType, CallBack<T> callBack)
        {
            OnListenerRemoving(eventType, callBack);
            _eventTable[eventType] = (CallBack<T>)_eventTable[eventType] - callBack;
            OnListenerRemoved(eventType);
        }`,`public void UnRegisterEvent<T, X>(EventType eventType, CallBack<T, X> callBack)
        {
            OnListenerRemoving(eventType, callBack);
            _eventTable[eventType] = (CallBack<T, X>)_eventTable[eventType] - callBack;
            OnListenerRemoved(eventType);
        }`,`public void UnRegisterEvent<T, X, Y>(EventType eventType, CallBack<T, X, Y> callBack)
        {
            OnListenerRemoving(eventType, callBack);
            _eventTable[eventType] = (CallBack<T, X, Y>)_eventTable[eventType] - callBack;
            OnListenerRemoved(eventType);
        }`,`public void UnRegisterEvent<T, X, Y, Z>(EventType eventType, CallBack<T, X, Y, Z> callBack)
        {
            OnListenerRemoving(eventType, callBack);
            _eventTable[eventType] = (CallBack<T, X, Y, Z>)_eventTable[eventType] - callBack;
            OnListenerRemoved(eventType);
        }`,`public void UnRegisterEvent<T, X, Y, Z, W>(EventType eventType, CallBack<T, X, Y, Z, W> callBack)
        {
            OnListenerRemoving(eventType, callBack);
            _eventTable[eventType] = (CallBack<T, X, Y, Z, W>)_eventTable[eventType] - callBack;
            OnListenerRemoved(eventType);
        }`,`public void BroadCast(EventType eventType)
        {
            try
            {
                if (_eventTable.TryGetValue(eventType, out var @delegate))
                {
                    CallBack callBack = @delegate as CallBack;
                    callBack?.Invoke();
                }
            }
            catch
            {
                GameLogger.LogError($"BroadCast EventType {eventType} error");
            }`,`}
        public void BroadCast<T>(EventType eventType, T arg)
        {
            try
            {
                if (_eventTable.TryGetValue(eventType, out var @delegate))
                {
                    CallBack<T> callBack = @delegate as CallBack<T>;
                    callBack?.Invoke(arg);
                }
            }
            catch
            {
                GameLogger.LogError($"BroadCast EventType {eventType} error");
            }
        }`,`public void BroadCast<T, X>(EventType eventType, T arg1, X arg2)
        {
            try
            {
                if (_eventTable.TryGetValue(eventType, out var @delegate))
                {
                    CallBack<T, X> callBack = @delegate as CallBack<T, X>;
                    callBack?.Invoke(arg1, arg2);
                }
            }
            catch
            {
                GameLogger.LogError($"BroadCast EventType {eventType} error");
            }
        }`,`public void BroadCast<T, X, Y>(EventType eventType, T arg1, X arg2, Y arg3)
        {
            try
            {
                if (_eventTable.TryGetValue(eventType, out var @delegate))
                {
                    CallBack<T, X, Y> callBack = @delegate as CallBack<T, X, Y>;
                    callBack?.Invoke(arg1, arg2, arg3);
                }
            }
            catch
            {
                GameLogger.LogError($"BroadCast EventType {eventType} error");
            }
        }`,`public void BroadCast<T, X, Y, Z>(EventType eventType, T arg1, X arg2, Y arg3, Z arg4)
        {
            try
            {
                if (_eventTable.TryGetValue(eventType, out var @delegate))
                {
                    CallBack<T, X, Y, Z> callBack = @delegate as CallBack<T, X, Y, Z>;
                    callBack?.Invoke(arg1, arg2, arg3, arg4);
                }
            }
            catch
            {
                GameLogger.LogError($"BroadCast EventType {eventType} error");
            }
        }`,`public void BroadCast<T, X, Y, Z, W>(EventType eventType, T arg1, X arg2, Y arg3, Z arg4, W arg5)
        {
            try
            {
                if (_eventTable.TryGetValue(eventType, out var @delegate))
                {
                    CallBack<T, X, Y, Z, W> callBack = @delegate as CallBack<T, X, Y, Z, W>;
                    callBack?.Invoke(arg1, arg2, arg3, arg4, arg5);
                }
            }
            catch
            {
                GameLogger.LogError($"BroadCast EventType {eventType} error");
            }
        }`,`protected override void OnRelease()
        {
            _eventTable.Clear();
        }
    }
}
\`\`\``,`-   **EventType**: 事件系统类型(枚举值)
    
    \`\`\`csharp
    namespace Client.Event
    {
      public enum EventType
      {
          Main,
      }
    }
    \`\`\`
    
-   **CallBack**: 事件委托类型
    
    \`\`\`csharp
    namespace Client.Event
    {
      public delegate void CallBack();
      public delegate void CallBack(T arg);
      public delegate void CallBack(T arg1, X arg2);
      public delegate void CallBack(T arg1, X arg2, Y arg3);
      public delegate void CallBack(T arg1, X arg2, Y arg3, Z arg4);
      public delegate void CallBack(T arg1, X arg2, Y arg3, Z arg4, W arg5);
    
    }
    \`\`\``]}],takeaways:[]},{id:"wp-31",tags:["行为型设计模式","设计模式"],categoryId:"pattern",title:"状态者模式",date:"2024-07-22",cover:"🏗️",excerpt:"一、概念 状态模式是一种较为复杂的行为型设计模式，它用于解决系统中复杂对象的状态转换以及不同状态下行为的封装问题。当系统的某个对象存在多个状态时，这些状态可以互相转换，而且对象在不同的状态下行为也不相同。 很多时候状态切换表示会用if-el...",sections:[{heading:"一、概念",paragraphs:["状态模式是一种较为复杂的行为型设计模式，它用于解决系统中复杂对象的**状态转换**以及**不同状态下行为的封装问题**。当系统的某个对象存在多个状态时，这些状态可以互相转换，而且对象在不同的状态下行为也不相同。","很多时候状态切换表示会用`if-else` 或者`switch` 来表示状态，这会导致代码的可维护性和灵活度下降，当出现新的状态时，需要修改客户端代码，不符合**开闭原则**。状态模式将对象的状态分离，封装到专门的状态类中，使对象可以灵活变化。","**定义:**允许一个对象在**其内部状态改变时改变其行为**。"]},{heading:"二、模式结构",paragraphs:[`-   **Context（环境类）:**又称上下文类，它是拥有多种状态的对象，维护一个抽象\`State\`的实例，该实例用来定义当前状态。
    
-   **State(抽象状态类):**它用户定义一个接口以封装与环境类的一个特定状态相关的行为，在抽象状态中声明了各种不同状态对应的方法。
    
-   **ConcreteState（具体状态类）:**它是抽象状态类的子类，每一个子类实现一个与环境类状态相关的行为。
    
    ![image-20240722141655701](@img/0uahijj5)`]},{heading:"三、具体实现",paragraphs:["-   **Fsm类**:环境类",`\`\`\`csharp
 public abstract class FsmBase
 {
     public string Name { get; protected set; }
     public string FullName { get; protected set; }
     public int FsmStateCount { get; protected set; }
     // 是否在运行
     public bool IsRunning { get; protected set; }
     //是否被销毁
     public bool IsDestory { get; protected set; }`,"public FsmState CurrentState { get; protected set; }",`public object Owner;
     public abstract void Start<TState>();`,"public abstract bool HasState<TState>();","public abstract FsmState GetState<TState>();","public abstract FsmState[] GetAllStates();",`public abstract void ChangeState<TState>();
     public abstract void OnUpdate(float elapseSeconds, float realElapseSeconds);
     public abstract void OnRelease();
 }`,`public class Fsm : FsmBase
{
    private readonly Dictionary<Type, FsmState> _states;
    public Fsm() 
    {
        CurrentState = null;
        IsRunning = true;
        IsDestory = false;
        _states = new Dictionary<Type, FsmState>();
    }`,`public static Fsm Create<T>(string name, T owner, FsmState[] states)
    {
        if (owner == null)
        {
            GameLogger.LogError("Fsm owner is invaild");
            return null;
        }
        if (states == null || states.Length == 0)
        {
            GameLogger.LogError("Fsm states is invaild");
            return null;
        }
        // TODO:对象池获得Fsm状态机
        Fsm fsm = new Fsm();
        fsm.Name = name;
        fsm.Owner = owner;
        fsm.IsDestory = false;
        fsm.IsRunning = true;`,`foreach (var state in states)
        {
            if (state == null)
            {
                GameLogger.LogError("Fsm states is invaild");
                return null;
            }
            Type stateType = state.GetType();
            if (fsm._states.ContainsKey(stateType))
            {
                GameLogger.LogError($"Fsm {typeof(T)} state {stateType.FullName} is already exist.");
            }
            state.fsm = fsm;
            fsm._states.Add(stateType, state);
            state.OnInit();
        }
        return fsm;
    }`,`public override void ChangeState<TState>()
    {
        if (CurrentState == null)
        {
            GameLogger.LogError("Current state is invaild");
            return;
        }`,`FsmState state = GetState<TState>();
        if (state == null)
        {
            GameLogger.LogError($"Fsm {Name} can't change state to {typeof(TState).FullName}");
            return;
        }
        CurrentState.OnExit(false);
        CurrentState = state;
        CurrentState.OnEnter();
    }`,`public override FsmState[] GetAllStates()
    {
        int index = 0;
        FsmState[] results = new FsmState[_states.Count];
        foreach (var state in _states)
        {
            results[index ++] = state.Value;
        }
        return results;
    }`,`public override FsmState GetState<TState>()
    {
        FsmState state = null;
        if (_states.TryGetValue(typeof(TState), out state))
        {
            return state;
        }
        return null;
    }`,`public override bool HasState<TState>()
    {
        return _states.ContainsKey(typeof(TState));
    }`,`public override void Start<TState>()
    {
        if (IsRunning)
        {
            GameLogger.LogError("Fsm is Running, can't start again");
            return;
        }
        FsmState state = GetState<TState>();
        if (state == null)
        {
            GameLogger.LogError($"Fsm {Name} can't not start state {typeof(TState).FullName} which is not exist");
            return;
        }`,`CurrentState = state;
        CurrentState.OnEnter();
    }`,`public override void OnUpdate(float elapseSeconds, float realElapseSeconds)
    {
        if (CurrentState == null) return;`,`CurrentState.OnUpdate(elapseSeconds, realElapseSeconds);
    }`,`public override void OnRelease()
    {
        if (CurrentState != null)
        {
            CurrentState.OnExit(true);
        }`,`foreach (var state in _states)
        {
            state.Value.OnDestory();
        }`,`Name = null;
        _states.Clear();
        CurrentState = null;
        IsDestory = true;
        IsRunning = false;
    }
}
\`\`\``,"-   **FsmState类**:抽象状态类",`\`\`\`csharp
public abstract class FsmState
{
    public FsmBase fsm;
    public FsmState()
    {
        fsm = null;
    }`,`protected internal virtual void OnInit(){ }
    protected internal virtual void OnEnter() { }
    protected internal virtual void OnUpdate(float elapseSeconds, float realElapseSeconds) { }
    protected internal virtual void OnExit(bool isShutDown) { }
    protected internal virtual void OnDestory() { }`,`protected void ChangeState<TState>()
    {
        try
        {
            if (fsm == null)
            {
                GameLogger.LogError("FSM is Invaild");
            }
            fsm.ChangeState<TState>();
        }
        catch
        {
            GameLogger.LogError($"Fsm ChangeState error");
        }`,"}\n}\n```"]},{heading:"四、优缺点",paragraphs:[`-   **优点:**
    1.  **结构清晰**:状态模式将状态相关的代码组织在一起，符合单一原则。
    2.  **分离状态转换逻辑:**状态转换的逻辑被封装在状态类中，与上下文对象分离，易于扩展和转换逻辑。
    3.  **提高可拓展性和可维护性:**对象的状态和行为被分离，使系统更易于扩展和维护。
-   **缺点:**
    1.  **类的个数增加**:如果状态过多会导致类的个数增加，从而增加系统复杂度。
    2.  **开闭原则:**在判断状态转换时，每一次增加一个状态就要修改状态转换的代码。`]},{heading:"五、适用环境",paragraphs:[`1.  对象的行为依赖于它的状态，状态的改变将导致行为的改变。
2.  存在多个状态且可以互相转换。`]}],takeaways:[]},{id:"wp-32",tags:["Tools"],categoryId:"tools",title:"JDK安装",date:"2024-07-23",cover:"🔧",excerpt:"一、进入官网下载对应的安装文件 JDK官方链接 根据系统选择相应的exe文件进行安装，点击安装包，进行jdk傻瓜式流程安装。 二、配置JDK环境变量 安装完毕后，配置一下JDK的环境变量，打开系统环境变量。 配置JAVA_HOME:变量名:...",sections:[{heading:"一、进入官网下载对应的安装文件",paragraphs:["[JDK官方链接](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)","根据系统选择相应的`exe`文件进行安装，点击安装包，进行`jdk`傻瓜式流程安装。","![image-20240723154943483](@img/caqjmxbn)"]},{heading:"二、配置JDK环境变量",paragraphs:["安装完毕后，配置一下JDK的环境变量，打开系统环境变量。","-   **配置JAVA\\_HOME:**变量名:JAVA\\_HOME 变量值: C:\\\\Program Files\\\\Java\\\\jdk-17 (安装路径)","![image-20240723155130087](@img/t9tvpr34)","-   **配置Path:**点击Path环境变量，新增变量值：%JAVA\\_HOME%\\\\bin;%JAVA\\_HOME%\\\\jre\\\\bin","![image-20240723155153860](@img/fdqadwix)","-   **配置CLASSPATH:**变量名: CLASSPATH 变量值: .;%JAVA\\_HOME%\\\\lib;%JAVA\\_HOME%\\\\lib\\\\tools.jar (前面有**.;**)","![image-20240723155141922](@img/fln3xlmk)"]},{heading:"三、验证环境变量",paragraphs:["按键盘的 `window + R`，输入`cmd`，进入命令行输入`java -version`回车，若显示下图则表示配置成功.","![image-20240723160234761](@img/4pd3la9r)","**如果以上配置都对，但是一直没有验证成功，可以重启电脑后再测试。**"]}],takeaways:[]},{id:"wp-33",tags:["算法"],categoryId:"algorithm",title:"高精度运算（加减乘除）",date:"2024-08-23",cover:"📐",excerpt:"一、高精度是什么？ 高精度算法：是处理大数字的数学计算方法。在一般的科学计算中，会经常算到小数点后几百位或者更多，当然也可能是几千亿几百亿的大数字。一般这类数字我们统称为高精度数，高精度算法是用计算机对于超大数据的一种模拟加，减，乘，除，乘...",sections:[{heading:"一、高精度是什么？",paragraphs:["**高精度算法**：是处理大数字的数学计算方法。在一般的科学计算中，会经常算到小数点后几百位或者更多，当然也可能是几千亿几百亿的大数字。一般这类数字我们统称为高精度数，高精度算法是用计算机对于超大数据的一种模拟加，减，乘，除，乘方，阶乘，开方等运算。对于非常庞大的数字无法在计算机中正常存储，于是，将这个数字拆开，拆成一位一位的，或者是四位四位的存储到一个数组中， 用一个数组去表示一个数字，这样这个数字就被称为是高精度数。高精度算法就是能处理高精度数各种运算的算法。"]},{heading:"二、高精度乘法",paragraphs:[`\`\`\`cpp
#include<iostream>
#include<algorithm>
#include<vector> 
using namespace std;
vector<int> add(vector<int>A, vector<int>B){
    //A:765, B:321 
    vector<int>C;
    int t = 0; //中间运算的数 
    //从7 + 3到 2 + 6 最后是 5 + 1 
    for(int i = 0; i < A.size() || i < B.size(); i ++){
        if(i < A.size()) t += A[i];
        if(i < B.size()) t += B[i];
        C.push_back(t % 10);//7 + 3 = 10 % 10 = 0; 
        t = t / 10; 
    }
    //t不是为1就是为0 
    if(t) C.push_back(t);
    return C;
}
int main(){
    //数字比较大必须用字符串输入
    string a, b;
    cin >> a >> b;
    vector<int>A,B;
    //如果a为567 A就是765, b为123, B为321 
    for(int i = a.size() - 1; i >= 0; i --) A.push_back(a[i] - '0');
    for(int i = b.size() - 1; i >= 0; i --) B.push_back(b[i] - '0');
    vector<int>C;
    C = add(A, B);
    for(int i = C.size() - 1; i >= 0; i --) cout << C[i] ; 
    return 0;
}
\`\`\``]},{heading:"三、高精度减法",paragraphs:[`\`\`\`cpp
#include<iostream>
#include<algorithm>
#include<vector>
using namespace std;`,`bool cmp(vector<int>A, vector<int>B){
    if(A.size() != B.size()) return A.size() > B.size();
    for(int i = A.size() - 1; i >= 0; i --){
        if(A[i] != B[i]) return A[i] > B[i];
    }
    return true;
}`,`vector<int>sub(vector<int>A, vector<int>B){
    vector<int>C;
    int t = 0;
    for(int i = 0; i < A.size(); i ++){
        t = A[i] - t;
        if(i < B.size()) t -= B[i];
        C.push_back((t + 10) % 10);
        if(t < 0) t = 1;
        else t = 0;
    }
    while(C.size() > 1 && C.back() == 0) C.pop_back();
    return C;
}`,`int main(){
    string a, b;
    cin >> a >> b;
    vector<int>A,B;
    for(int i = a.size() - 1; i >= 0; i --) A.push_back(a[i] - '0');
    for(int i = b.size() - 1; i >= 0; i --) B.push_back(b[i] - '0');
    vector<int>C;
    if(cmp(A, B)){
        C = sub(A, B);
        for(int i = C.size() - 1; i >= 0; i --) cout << C[i];
    }
    else{
        C = sub(B, A);
        cout << "-";
        for(int i = C.size() - 1; i >= 0; i --) cout << C[i];
    }
    return 0;
} 
\`\`\``]},{heading:"四、高精度乘法",paragraphs:["```cpp\n#include<iostream>\n#include<vector>\nusing namespace std;",`vector<int>mul(vector<int>A, int b){
    vector<int>C;
    int t = 0;
    for(int i = 0; i < A.size() || t; i ++){
        if(i < A.size()) t += A[i] * b;
        C.push_back(t % 10);
        t /= 10; 
    }
    while(C.size() > 1 && C.back() == 0) C.pop_back();
    return C;
}`,`int main(){
    string a;
    int b;
    cin >> a >> b;
    vector<int>A;
    //789 -> 987
    for(int i = a.size() - 1; i >= 0; i --) A.push_back(a[i] - '0');
    vector<int>C;
    C = mul(A, b);
    for(int i = C.size() - 1; i >= 0; i --) cout << C[i] ;
    return 0;
}
\`\`\``]},{heading:"五、高精度除法",paragraphs:[`\`\`\`cpp
#include<iostream>
#include<vector>
#include<algorithm>
using namespace std;`,`vector<int> div(vector<int>A, int b, int &r){
    vector<int>C;
    r = 0;
    for(int i = A.size() - 1; i >= 0; i --){
        r = r * 10 + A[i];
        C.push_back(r / b);
        r = r % b;
    }
    reverse(C.begin(), C.end());
    while(C.size() > 1 && C.back() == 0) C.pop_back();
    return C;
}`,`int main(){
    string a;
    int b, r;
    cin >> a >> b;
    vector<int>A;
    for(int i = a.size() - 1; i >= 0; i --) A.push_back(a[i] - '0');
    vector<int>C;
    C = div(A, b, r);
    for(int i = C.size() - 1; i >= 0; i --) cout << C[i];
    cout << endl << r << endl; 
    return 0;
}
\`\`\``]}],takeaways:[]},{id:"wp-34",tags:["基础算法","算法"],categoryId:"algorithm",title:"哈希表与哈希冲突（Hash表 散列表）",date:"2024-08-23",cover:"📐",excerpt:"一、哈希表是什么？ 哈希表（Hash table 又叫散列表）是能够通过给定的关键字的值直接访问到具体对应的值的一个数据结构。通常，我们把这个关键字称为Key值，对应的值称为Value值。关键值和Value值是一种一一对应的关系（也就是映射...",sections:[{heading:"一、哈希表是什么？",paragraphs:["**哈希表（Hash table 又叫散列表）**是能够通过给定的关键字的值直接访问到具体对应的值的一个数据结构。通常，我们把这个关键字称为**Key值**，对应的值称为**Value值**。关键值和Value值是一种**一一对应**的关系（也就是映射关系），这个映射表，也叫做哈希函数，存放记录的数组就是哈希表。**哈希表也类似于离散化。**","**哈希表的作用：**哈希表的作用就是能够通过**Key值**快速获取**Key对应的Value值，**它查询的时间复杂度几乎是O（1）的。"]},{heading:"二、哈希冲突",paragraphs:["我们要先了解一下：映射值和Key值","**注意：**",`1.  **映射值**：哈希函数下计算出来的值， **Key值：Value一一对应的位置值**
2.  当在**理想状况**下（没有哈希冲突时，不存在这样的情况），哈希函数计算出来的**映射值 == key值**
3.  在处理哈希冲突时，哈希函数计算出来的是映射值，key值是存放Value值的位置`,"**哈希冲突：**当两个不同的数**（Value值）**经过哈希函数运算得到同一个结果**映射值**时，就说明发生了哈希冲突。可以用一个例子来说：查询手机通讯录，你可以把通讯录的首字母查找**（A~Z）**比作**映射值**， 名字比作**Value值**，假如你的通讯录有张三和张伟，那他们的**映射值**值都是**Z**，那么当你用**Z（映射值）**查找时，**Value**值却有两个，**key值也有两个（Zhangsan和Zhangwei）**。这就是哈希冲突","图解：![img](@img/97yxglxh)"]},{heading:"三、如何避免哈希冲突",paragraphs:["我在写这篇文章的时候，我一开始写的是如何避免哈希冲突**（× 错误的）**。**注意：**哈希冲突是**无法避免**的，我们只能减少冲突，所以处理冲突是哈希表不可缺少的一部分。","**处理冲突**有很多方法，例如开放寻址法、再散列法、拉链法、建立公共溢出区等。在这我就主要讲一下**开放寻址法**和**拉链法。**"]},{heading:"3.1.开放寻址法及代码",paragraphs:["**开放寻址法**：哈希表是通过数组存储的，所以当我们用开放寻址法的时候就要创建一个**足够大的数组（一般开数值数量的2~3倍）（开放），**然后通过**哈希函数计算得到映射值**，找到能存放**Value的位置（key值）**。可以分为2个步骤：插入和查找。","**插入：**通过find函数来寻找一个地址**（寻址）**放置数值，若不为空，则查找下一个位置，直到找到个空位置或者这个数已经存在了。","**查找**：**如果数组存在这个数值，就返回该值的地址，否则，返回**NULL\\*\\*;",`\`\`\`cpp
int find(int x){    //返回位置值
    int k = (x % N + N) % N; ////哈希函数计算映射值
    //如果该位置的值不为空表示有其他的值已经将该位置占领了
    //如果该位置等于x值，说明x已经存在了，不需要在占位置了，直接返回存在的位置
    while(h[k] != null && h[k] != x) { 
        k ++;            //k ++表示一直向后查找
        if(k == N) k = 0; //如果查找到数组的尾部了，就从头部开始找。
    }
    return k;//现在k表示Key值。
}
\`\`\``,"**完整代码**：",`\`\`\`cpp
///开放寻址法
#include<iostream>
#include<cstring>
using namespace std;
const int N = 2e5 + 3, null = 0x3f3f3f3f;
int n, h[N];
int find(int x){
    int t = (x % N + N) % N;
    while(h[t] != null && h[t] != x) {
        t ++;
        if(t == N) t = 0;
    }
    return t;
}`,`int main(){
    cin >> n;
    memset(h, 0x3f3f3f3f, sizeof h);
    while(n --){
        char op;
        int x;
        cin >> op >> x;
        if(op == 'I') h[find(x)] = x; //插入操作
        else {
            if(h[find(x)] == null) puts("No");//查找操作
            else puts("Yes");
        }
    }
    return 0;
}
\`\`\``]},{heading:"3.2.拉链法及代码",paragraphs:["**拉链法：**这种方法的关键是把**哈希函数运算的映射值都**放到数组中，然后以**映射值作头结点创建链表**。利用**链表**来存储**Value值，找到key值对应的位置（下面有图解）。分两个步骤：插入和查询**","**插入：**利用**单链表**的形式插入以**映射值**为头结点的链表。","**查找：也是单链表的查找方式**","**图解：**","![img](@img/fw818yk9)","**插入代码：**",`\`\`\`cpp
void insert (int x){
    int k = (x % N + N) % N;//哈希函数计算映射值
    e[idx] = x;
    ne[idx] = h[k];
    h[k] = idx  ++;
}
\`\`\``,"**查找代码：**",`\`\`\`cpp
bool find (int x ){
    int k=(x % N + N) % N;//哈希函数计算映射值
    for(int i=h[k];i!=-1;i= ne[i]) 
    if(e[i]==x ) return true;//找到返回True
    return  false;
}
\`\`\``,"**完整代码：**",`\`\`\`cpp
#include<iostream>
#include<cstring>
using namespace std; 
const int N = 100003;
int h[N],e[N],ne[N],idx;`,`//头插法 
void insert (int x){
    int k=(x % N + N) % N;
    e[idx] = x;
    ne[idx] = h[k];
    h[k] = idx  ++;
}`,`bool find (int x ){
    int k=(x % N + N) % N;
    for(int i=h[k];i!=-1;i= ne[i]) 
    if(e[i]==x ) return true;
    return  false;
}`,`int main(){
    int n;
    cin>>n;
    memset(h,-1,sizeof h);//头结点赋值
    while(n--){
        string op;
        int x;
        cin>>op>>x;
        if( op== "I") insert(x);//插入
        else {
            if(find(x)) puts("Yes");//查找
            else puts("No"); 
        }
    }
    return 0;
}
\`\`\``]}],takeaways:[]},{id:"wp-35",tags:["基础算法","算法"],categoryId:"algorithm",title:"堆（手写堆包含STL）",date:"2024-08-23",cover:"📐",excerpt:"一、堆的定义： 堆是什么，堆就像是一个金字塔，最顶端的是最值（最大值和最小值），堆其实就是一个二叉树，将最值元素放到根节点。子节点要么都小于父节点，要么都大于父节点。但是写手堆的话，我们用的是数组来存储，所以堆通常也被看做一颗树的数组对象。...",sections:[{heading:"一、堆的定义：",paragraphs:["堆是什么，堆就像是一个金字塔，最顶端的是最值（最大值和最小值），堆其实就是一个二叉树，将最值元素放到根节点。子节点要么都小于父节点，要么都大于父节点。但是写手堆的话，我们用的是数组来存储，所以堆通常也被看做一颗树的数组对象。"]},{heading:"2.1 堆的分类：",paragraphs:["大根堆和小根堆，根节点最大的堆叫大根堆，根节点最小的堆叫小根堆。"]},{heading:"2.2 STL的定义：",paragraphs:["首先要调用堆的头文件: #include","priority\\_queueheap;//默认的是大根堆","priority\\_queue<int, vector, greater\\>heap；小根堆","堆的函数：",`-   size();//堆的大小
    
-   empty();//堆是否为空
    
-   push();//插入一个元素
    
-   top();//返回栈顶元素
    
-   pop();//删除一个元素`]},{heading:"3.3 堆的性质：",paragraphs:[`-   堆是一颗完全二叉树，只不过用数组实现。
-   堆中的数据不是完全有序的，它只是每个子节点的值大于或小于父节点的值`]},{heading:"3.1 手写堆的思想：",paragraphs:["我们用数组的思想来存储堆，总共分为三个函数模块，五个操作模块。**（模拟小根堆）**",`-   函数模块：
    
    1.  h\\_swap()；//交换节点的位置和值
        
    2.  up()；//将节点值与父节点比较往上移
        
    3.  down；//将节点值与子节点比较往下移
        
-   操作模块：size:堆的大小，k:堆的第k个值（后面两个操作STL是不能实现的）
    
    1.  插入一个数值:heap\\[size ++\\] = x; up(size);
    2.  删除最小值：heap\\[1\\] = heap\\[size\\]; size --;down(1);
    3.  求集合中的最小值：heap\\[1\\];
    4.  删除任意第k个值: heap\\[k\\] = heap\\[size\\]; size --; down(k); up(k);
    5.  修改任意第k个值：heap\\[k\\] = x;down(k);up(k);`]},{heading:"3.2 函数模块代码：",paragraphs:["**h\\_swap():交换节点（有点难懂）**","```cpp\nvoid h_swap(int a, int b){\n    swap(ph[hp[a]],ph[hp[b]]);\n    swap(hp[a], hp[b]);\n    swap(h[a], h[b]);\n} \n```","**理解 + 图解：这里是一种映射关系，p表示外部指针，h表示堆的位置（也可以理解为内部指针）**",`1.  ph\\[ \\]：表示外部指针指向内部指针
2.  hp\\[ \\]：表示内部指针指向外部指针
3.  h\\[ \\]：表示存放的数值`,"![img](@img/u51wfkxd)","**up();//节点上移操作：**",`\`\`\`cpp
void up(int u){
    if(u / 2 && h[u / 2] > h[u]){//如果小于根节点，就与根节点置换
        swap(u, u / 2);
        up(u / 2);
    }
}
\`\`\``,"![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)","**down();//节点下移操作：**",`\`\`\`cpp
void down(int u){
    int t = u;
    if(u * 2 <= size && h[u * 2] < h[t]) t = u * 2;//比较左子树
    if(u * 2 + 1 <= size && h[u * 2 + 1] < h[t]) t = u * 2 + 1;//比较右子树
    if(u != t){//若左子树或者右子树小于根节点就置换
        h_swap(u, t);
        down(t);//不断执行down()
    }
}
\`\`\``]},{heading:"3.3 操作模块：",paragraphs:[`-   插入一个值：直接在数组尾部插入并up(szie)（队尾位置）
-   求集合中最小值：直接返回头部值
-   删除最小值：
    1.  这里要涉及一个知识点：为什么要在将头部值和尾部值交换
    2.  如果我们直接删除头部位置，那么所有的位置都会受到影响，所有置换一下，再删除尾部值，就其他位置就不会收到影响
    3.  最后我们再up(1), down(1);将头部值放到合适位置
-   删除第k个元素：与删除最小值是一样的，需要置换尾部位置和第k个值的位置
-   修改第k个元素：直接将heap\\[k\\] = x，再将x值放到合适位置`]},{heading:"四、完整代码 + 注释",paragraphs:[`\`\`\`cpp
#include<iostream>
using namespace std;
const int N = 1e5 + 10;
int hp[N], ph[N], h[N], cnt, m;    //m表示ph的映射值，cnt表示大小size
int n;
void h_swap(int a, int b){
    swap(ph[hp[a]], ph[hp[b]]);
    swap(hp[a], hp[b]);
    swap(h[a], h[b]);
}`,`void down(int u){
    int t = u;
    if(u * 2 <= cnt && h[u * 2] < h[t]) t = u * 2;
    if(u * 2 + 1<= cnt && h[u * 2 + 1]< h[t]) t = u * 2 + 1;
    if(u != t){
        h_swap(u, t);
        down(t);
    }
}
void up(int u){
    if(u / 2 && h[u / 2] > h[u]){
        h_swap(u / 2, u);
        up(u / 2);
    }
}`,`int main()
{
    cin >> n;
    while(n --){
        string op;
        int k, x;
        cin >> op;
        //插入操作
        if(op == "I"){
            cin >> x;
            cnt ++ ;
            m ++ ;
            ph[m] = cnt, hp[cnt] = m;
            h[cnt] = x;
            up(cnt);
        }
        //返回最小值
        else if(op == "PM") cout << h[1] << endl;
        //删除头部元素
        else if(op == "DM") {
            h_swap(1, cnt);
            cnt --;
            down(1);
        }
        //删除第K个节点
        else if(op == "D"){
            cin >> k;
            k = ph[k];
            h_swap(cnt, k);
            cnt --;
            up(k);
            down(k);
        }
        //修改第k个数
        else {
            cin >> k >> x;
            k = ph[k];
            h[k] = x;
            up(k);
            down(k);
        }
    }
    return 0;
}
\`\`\``]}],takeaways:[]},{id:"wp-36",tags:["基础算法","算法"],categoryId:"algorithm",title:"Trie树(字典树)",date:"2024-08-23",cover:"📐",excerpt:"一、Trie树是什么？ Trie树又称字典树或前缀树，是一种能够快速查找一组字符串含有一个字符串的类似哈希表的树结构，是以空间换时间，利用字符串的前缀来降低查询时间。 与二叉树不同，Trie树有26子节点对应26个字母，根节点不包含字符串，...",sections:[{heading:"一、Trie树是什么？",paragraphs:["Trie树又称字典树或前缀树，是一种能够快速查找一组字符串含有一个字符串的类似哈希表的树结构，是以空间换时间，利用字符串的前缀来降低查询时间。","与二叉树不同，Trie树有26子节点对应26个字母，根节点不包含字符串，从根节点到某个节点，经过的字符连起来的字符串就是对应的字符串。当储存结束一个字符串后，尾节点会用cnt\\[ \\]数组来说明该字符串的次数。"]},{heading:"2.1 字符串插入trie树",paragraphs:["开始先定义 ： `int son[N][26], cnt[N], idx`;","`son[N][26]`:储存子节点的位置，分支最多26条","`cnt[N]`：存储以节点结尾的字符串个数","`idx`：表示当前要插入的节点（新建节点）","**代码如下（示例）：**",`\`\`\`cpp
void insert(string str){
    int p = 0;//类似指针指向当前节点
    for(int i = 0; i < str.size(); i ++){
        int u = str[i] - 'a';        //当前节点是什么字符
        if(!son[p][u]) son[p][u] = ++ idx;//如果节点不存在就新建节点
        p = son[p][u];        //p 指向新建的节点
    }
    cnt[p] ++;//尾节点的字符数量加1
}
\`\`\``,"**图解**：","![img](@img/grhbeh38)"]},{heading:"2.2 查找字符串",paragraphs:["**代码如下（示例）：**",`\`\`\`c
int query(char *str)
{
    int p = 0;
    for(int i = 0; str[i]; i++)
    {
        int u = str[i] - 'a';
        if(!son[p][u]) return 0;  //该节点不存在，即该字符串不存在
        p = son[p][u]; 
    }
    return cnt[p];  //返回字符串出现的次数
}
\`\`\``]},{heading:"2.3 完整代码",paragraphs:[`\`\`\`cpp
#include<iostream>
using namespace std;
const int N = 1e5 + 10;
int son[N][26], cnt[N], idx, n;
void insert(string str){
    int p = 0;
    for(int i = 0; i < str.size(); i ++){
        int u = str[i] - 'a';
        if(!son[p][u]) son[p][u] = ++ idx;
        p = son[p][u];
    }
    cnt[p] ++;
}
int query(string str){
    int p = 0;
    for(int i = 0; i < str.size(); i ++){
        int u = str[i] - 'a';
        if(!son[p][u]) return 0;
        p = son[p][u];
    }
    return cnt[p];
}
int main()
{
    ios::sync_with_stdio(false);
    cin.tie(0);
    cin >> n;
    while(n --){
        string op, str;
        cin >> op >> str;
        if(op == "I") insert(str);
        else cout << query(str) << endl;
    }
    return 0;
}
\`\`\``]}],takeaways:[]},{id:"wp-37",tags:["基础算法","算法"],categoryId:"algorithm",title:"KMP算法",date:"2024-08-24",cover:"📐",excerpt:"一、KMP是什么 KMP（Knuth-Morris-Pratt）算法是一种高效的字符串匹配算法，用于在文本中查找模式。它的核心思想是利用已经匹配的信息来避免重复匹配，从而提高效率。 二、暴力字符串匹配 暴时间复杂度O（n * m） //大概...",sections:[{heading:"一、KMP是什么",paragraphs:["KMP（Knuth-Morris-Pratt）算法是一种高效的字符串匹配算法，用于在文本中查找模式。它的核心思想是利用已经匹配的信息来避免重复匹配，从而提高效率。"]},{heading:"二、暴力字符串匹配",paragraphs:["-   暴时间复杂度O（n \\* m）",`\`\`\`cpp
//大概是这样的，可能有差别，但是模板基本上是这样
for (int i = 0; i < m;)
{
    int j = 0;
    while (i < m && j < n && s[i++] == p[j++]);
    if (j == n)
    {
        cout << i - j << " ";
    }
    i = j + 1;
}
\`\`\``]},{heading:"三、 KMP匹配",paragraphs:["时间复杂度O(n)"]},{heading:"3.1 算法理解",paragraphs:["先理解一下专有名词",`-   P为模板串，比较短的字符串。
    
-   S为模式串，比较长的字符串。
    
-   非平凡前缀：除了最后一个字符外，一个字符串的全部头部组合。
    
-   非平凡后缀：除了第一个字符外，一个字符串的全部尾部组合。
    
-   部分匹配值：前缀和后缀最长共有的元素的长度， 用next\\[\\]数组存储。`]},{heading:"3.2 KMP的中心思想",paragraphs:[`1.  求next\\[\\]数组
2.  匹配字符串`,"求next\\[\\]数组：自己和自己匹配字符串而来的,前缀和后缀最长共有的元素的长度,next\\[\\]储存的是最长能匹配**前缀子串结尾字符**的下标。","若字符串p为`ababac`",`| 数组 | 模式前缀 | 模式后缀 | 能匹配字符串 |
| --- | --- | --- | --- |
| a | NULL | NULL | NULL |
| ab | a | b | NULL |
| aba | **a**,ab | ba,**a** | a |
| abab | a,**ab**,aba | bab,**ab**,b | ab |
| ababa | a,ab, **aba**,abab | baba,**aba**,ba,a | aba |
| ababac | a,ab, aba,abab,ababa | babac,abac,bac,ac,c | NULL |`,"**next\\[\\]数组为：**",`| p | a | b | a | b | a | c |
| --- | --- | --- | --- | --- | --- | --- |
| 下标 | 1 | 2 | 3 | 4 | 5 | 6 |
| next\\[\\] | 0 | 0 | 1 | 2 | 3 | 0 |`,"**2：匹配字符串**","![img](@img/rktt3a2p)","完整代码：",`\`\`\`cpp
#include <iostream>
using namespace std;
const int N = 1e5 + 10, M = 1e6 + 10;
int n, m;
int ne[N];`,`void HandleNextArr(char str[]){
    // 下标从2开始,自身匹配，第一个数据不用计算
    for(int i = 2, j = 0; i <= n; i ++) { //求next数组
        while (j && str[i] != str[j + 1]) j = ne[j];
        if (str[i] == str[j + 1]) j ++;
        ne[i] = j;
    }
}`,`void MatchStr(char p[], char s[]){
    HandleNextArr(p);
    for (int i = 1, j = 0; i <= m; i ++) {
        while(j && s[i] != p[j + 1]) j = ne[j];
        if (s[i] == p[j + 1]) j ++;
        if (j == n) {
            cout << i - n << " ";
            j = ne[j]; 
        }
    }
}`,`int main() {
    char p[N], s[M];
    cin >> n >> p + 1 >> m >> s + 1;
    MatchStr(p, s);
    return 0;
}
\`\`\``]}],takeaways:[]},{id:"wp-38",tags:["基础算法","算法"],categoryId:"algorithm",title:"DFS(深度优先算法)",date:"2024-08-26",cover:"📐",excerpt:"一、DFS是什么？ DFS（深度优先搜索算法）：一种用于遍历或者树或者图的算法，是一种递归程序，不断递归达到无法在到达的点，简单点来说：一条路一直走，走到没有路后就原路返回，重新选择另一条 dfs(step + 1)。 DFS = 暴搜 +...",sections:[{heading:"一、DFS是什么？",paragraphs:["**DFS（深度优先搜索算法）：**一种用于遍历或者树或者图的算法，是一种递归程序，不断递归达到无法在到达的点，简单点来说：一条路一直走，走到没有路后就原路返回，重新选择另一条 dfs(step + 1)。","**DFS = 暴搜 + 回溯算法 + 剪枝（大多数是这样）。DFS需要回溯算法，其他算法也需要回溯算法，两种是一种调用关系。**","**暴搜**：一条路走到黑（直接递归走到底）","**回溯：DFS** 开启另一条路则需要回溯，如果暴搜那条路找不到答案就要回溯走另外一条道路。","**剪枝**：如果明确接下来的搜索找不到答案或者不是最优解，就不再进行搜索并对路径进行回溯，从而达到减少问题搜索规模的目的。","**图解：（箭头的遍历方式）1 -> 2 -> 4 -> 8 -> 4 -> 2 -> 5 -> 9 - > 5 -> 2 -> 1 -> 3 -> 6 -> 10**","**\\-> 6 -> 3 -> 7。**","![img](@img/uyh0qrax)"]},{heading:"二、DFS的使用步骤",paragraphs:[`\`\`\`cpp
void dfs(int step){ //step搜索的路径步骤
    判断边界问题{
        进行操作（如搜索完，并找到答案）
    }
    尝试每一种可以走的路径{
        check() return ;//剪枝
        标记该状态已经走到
        继续下一步搜索 DFS(step + 1)
        回溯（回到最开始的状态）
    }
}
\`\`\``]},{heading:"三、N皇后问题",paragraphs:["**n皇后问题**：","![img](@img/haaspl26)","**解决代码：**",`\`\`\`cpp
#include <iostream>
using namespace std;
const int N = 10;
bool col[N], row[N], dg[N], udg[N];
char g[N][N];
int n;`,`void dfs(int x, int y, int s){
    if (y == n){
        x ++;
        y = 0;
        if (x == n) {
            if (s == n){
                for (int i = 0; i < n; i ++) puts(g[i]);
            }
            return ;
        }
    }
    dfs(x, y + 1, s);`,`if (!col[x] && !row[y] && !dg[x + y] && !udg[x - y + n]){
        col[x] = row[y] = dg[x + y] = udg[x - y + n] = true;
        g[x][y] = 'Q';
        dfs(x, y + 1, s + 1);
        g[x][y] = '.';
        col[x] = row[y] = dg[x + y] = udg[x - y + n] = false;
    }
}`,`int main(){
    cin >> n;
    for (int i = 0; i < n; i ++){
        for(int j = 0; j < n; j ++){
            g[i][j] = '.';
        }
    }
    dfs(0, 0, 0);
    return 0;
}
\`\`\``]}],takeaways:[]},{id:"wp-39",tags:["基础算法","算法"],categoryId:"algorithm",title:"BFS(广度优先算法)",date:"2024-08-26",cover:"📐",excerpt:"一、BFS是什么 先用百度百科的来讲： BFS（又称广度优先搜索）是最简便的图的搜索算法之一，这一算法也是很多重要的图的算法的原型。Dijkstra单源最短路径算法和Prim最小生成树算法都采用了和广度优先搜索类似的思想。属于一种盲目搜寻法...",sections:[{heading:"一、BFS是什么",paragraphs:["先用百度百科的来讲： **BFS（又称广度优先搜索）**是最简便的图的搜索算法之一，这一算法也是很多重要的图的算法的原型。**Dijkstra单源最短路径算法**和**Prim最小生成树算法**都采用了和**广度优先搜索**类似的思想。属于一种**盲目搜寻法**，目的是**系统地展开并检查图中的所有节点，以找寻结果。**换句话说，它并不考虑结果的可能位置，彻底地搜索整张图，直到找到结果为止。","简单来说，**BFS是一种图搜索的算法**，目的是**用于搜索检查每一个可以达到的点,**直到找到结果为止。他和**DFS**的区别：**DFS**是一条路走到黑，如果没用路就返回，而**BFS**是从上往下层次依序遍历，我们一般用**队列**来实现**BFS**的遍历。","**图解：（箭头的遍历方式）1 -> 2 -> 3 -> 4 -> 5 - > 6 -> 7 - > 8 - > 9 -> 10;**","![img](@img/l8tpelnr)"]},{heading:"二、BFS的使用步骤",paragraphs:["**可以分为四个步骤：初始化**（初始化队列和所求的值） **\\-> 判空取队头（**判断是否为空并取出队头） **\\-> 拓展**（利用队头去扩展） **\\-> 判断入队**（如果符合，将该点入队）。","```cpp\nvoid bfs(){\n    queue<int>q;\n    q.push(初始位置);",`//初始化
    while(q.size()){
        int t = q.front();
        q.pop();//取出队头的点，用该点向周围扩散。
        if(check(j)){       //如果该点可行就将它加入队列中
            q.psuh(j);      
            //实施相应的操作 
        }
    } 
} 
\`\`\``]},{heading:"三、迷宫问题",paragraphs:["**迷宫问题：**","![](@img/bu1dap0z)","**完整代码:**",`\`\`\`cpp
#include <iostream>
#include <cstring>
#include <queue>
using namespace std;
const int N = 110;
typedef pair<int, int> PII;
int n, m;
int g[N][N], d[N][N];
int dx[4] = {0, -1, 0, 1}, dy[4] = {1, 0, -1, 0};`,`void bfs(){
    // 初始化
    queue<PII> q;
    q.push({0, 0});
    memset(d, -1, sizeof(d));
    d[0][0] = 0;`,`// 拓展
    while(q.size()){
        auto t = q.front();
        q.pop();
        int x = t.first, y = t.second;
        for (int i = 0; i < 4; i ++){
            int a = x + dx[i], b = y + dy[i];
            if (a >= 0 && a < n && b >= 0 && b < m && g[a][b] == 0 && d[a][b] == -1){
                d[a][b] = d[x][y] + 1;
                // 入队
                q.push({a, b});
            }
        }
    }
    cout << d[n - 1][m - 1] << endl;
}`,`int main(){
    cin >> n >> m;
    for (int i = 0; i < n; i ++){
        for (int j = 0; j < m; j ++){
            cin >> g[i][j];
        }
    }
    bfs();
    return 0;
}
\`\`\``]}],takeaways:[]},{id:"wp-40",tags:["基础算法","算法"],categoryId:"algorithm",title:"邻接表和邻接矩阵、树的遍历",date:"2024-08-26",cover:"📐",excerpt:"一、邻接表与邻接矩阵 1.1 稠密图与稀疏图 图的储存方式分两种：邻接表和邻接矩阵。 了解邻接矩阵和邻接表之前我们要先学会稠密图、稀疏图。 百度百科来说：稠密图、稀疏图。 稀疏图：有很少条边或弧（边的条数|E|远小于|V|²）的图称为稀疏图...",sections:[{heading:"1.1 稠密图与稀疏图",paragraphs:["图的储存方式分两种：**邻接表**和**邻接矩阵**。 了解**邻接矩阵**和**邻接表**之前我们要先学会**稠密图、稀疏图**。","百度百科来说：**稠密图、稀疏图。**","**稀疏图：**有很少条边或弧**（边的条数|E|远小于|V|²**）的图称为**稀疏图（sparse graph）。**","**稠密图：**有很多条边或弧 **(边的条数|E|接近|V|²)** 的图称为**稠密图（dense graph**）。","简单来说：我们假设某个图的**点的个数 为 N,** **边的个数为 M**， 当 **M << N ^ 2** (平方)（当边数远小于点的平方）时称为 **稀疏图**，当 **M ≈ N ^ 2** （当边数约等于点的平方）时称为 **稠密图，** 如果图为**稀疏图**的时候，我们一般用**邻接表**储存，**稠密图**的时候，一般用**邻接矩阵**存储。"]},{heading:"2.邻接矩阵的存储方式",paragraphs:["**邻接矩阵：**邻接矩阵的储存方式是用一个二维数组`g[a][b]`(a -> b的权值)**来表示图的边的信息**，a, b都是点， `g[a][b]` 表示a到b的距离。","**图解：（图片来源于百度百科）**","![img](@img/zukfwopx)","**代码：**",`\`\`\`cpp
//运用在最短路或者最小生成树中邻接矩阵的代码方式
while(m --){ //m条边 
    int a, b, w;
    cin >> a >> b >> w;
    g[a][b] = min(g[a][b], w); //取最小的边
}
\`\`\``]},{heading:"1.3 邻接表的存储方式",paragraphs:["**邻接表：邻接表**的储存方式是用**单链表**来存储，在单链表中，**头结点**存储的是a, **链表**存储的可能是b, c , d。例如**：a -> b -> c -> d**表示**a能到b、a能到c、a能到d**。","**链表结构**有**ne\\[ \\]数组：**next指针，**e\\[ \\]:** a能到的点， **w\\[ \\]：** a到b的距离。","**图解：（图片来源于百度百科）**","![img](@img/shqg7y8f)","**代码：**",`\`\`\`cpp
//idx 表示当前节点 
void add(int a, int b, int c){
    e[idx] = b; 
    w[idx] = c;
    ne[idx] = h[a];
    h[a] = idx ++;
}`,`while(m --){ //m表示边数 
    int a, b, c;
    cin >> a >> b >> c;
    add(a, b, c);
} 
\`\`\``]},{heading:"2.1 DFS",paragraphs:["**代码：**",`\`\`\`cpp
void dfs(int u){
    st[u] = true;//已经遍历到了
    for(int i = h[u]; i != -1; i = ne[i]){ //遍历链表
        int j = e[i];
        if(!st[j]){
            dfs(j); //递归
            //进行相应的操作
        }
    }
}
\`\`\``,"![点击并拖拽以移动](data:image/gif;base64,R0lGODlhAQABAPABAP///wAAACH5BAEKAAAALAAAAAABAAEAAAICRAEAOw==)"]},{heading:"2.2 BFS",paragraphs:["**代码：**",`\`\`\`cpp
int bfs(){
    queue<int>q;
    q.push(1);
    while(q.size()){
        int t = q.front();
        q.pop();
        for(int i = h[t]; i != -1; i = ne[i]){ //遍历链表
            int j = e[i];
            q.push(j); //入队
        }
    }
}
\`\`\``]}],takeaways:[]},{id:"wp-41",tags:["图论","基础算法","算法"],categoryId:"algorithm",title:"图论-五种最短路算法",date:"2024-08-26",cover:"📐",excerpt:"一、最短路是什么？ 最短路径： 从某个点A（位置）到另一个点B(位置)的最短距离，实现方法：点A途中可以经过很多个点C，然后通过不断更新点A到途中点 C 的最短距离，最后实现最短距离到达 点B。 A -&gt; C1 -&gt; C2 -&...",sections:[{heading:"一、最短路是什么？",paragraphs:["**最短路径**： 从某个**点A**（位置）到另一个**点B**(位置)的最短距离，实现方法：**点A**途中可以经过很多个**点C**，然后通过不断更新**点A**到途中**点 C** 的最短距离，最后实现**最短距离**到达 **点B。**","**A -> C1 -> C2 -> C3 -> B**","**最短路径的分类：**","**单源最短路：图中的一个点到其余各点的最短路径**","**多源最短路：图中每两个点的最短路径**","**框架图解：（如果看不清的话，放大浏览器再观看）**","![img](@img/fg1lger4)","**图中稠密图用邻接矩阵，稀疏图用邻接表**"]},{heading:"二、朴素Dijkstra算法",paragraphs:["**Dijkstra算法（迪杰斯拉算法）**：该算法的特点是从起始点开始，采用贪心算法的策略，采用加点的的方式，每次遍历到起始点距离最近且从未被访问过的顶点的邻接节点t，将该点t加入集合S中，直到扩展到终点位置。","**时间复杂度：O（n ^ 2）**","**思想（操作）：**",`-   将图上的点分为两个集合：分别是S集合和N集合
    
    1.  S：表示访问过的点（用st数组存储）
        
    2.  N：表示未访问过的点
        
-   将**N集合中的点**按**到S集合**距离最短依次加入到**S集合**中
    
-   用刚到**S集合**中的**点t**去更新**集合N**到**起始点**的距离**（这一步也就是松弛操作）**`,"**图解：**","![img](@img/ht1ytg5a)","**步骤： dist\\[ \\]：每个点到起始点的距离 st\\[ \\]：是否加入到了s集合中**",`1.  初始化距离：把每个点都初始化为**0x3f3f3f3f**（无穷大）
    
2.  进行n层循环：遍历dist数组，找到一个**不在S集合**中并**距离S**集合最短的**点t**，每一层循环都将**找到的点t**将它放入**S集合中（st\\[t\\] = true）**
    
3.  用找到的**点t**去更新**N集合**到**起始点**的距离（松弛操作）`,"**代码 + 注释：**",`\`\`\`cpp
const int N = 1e5 + 10;//多少个点
int dist[N];    //每个点到起始点的距离
bool st[N];    //S集合
void dijkstra(){
    memset(dist, 0x3f3f3f3f, sizeof dist);//初始化距离
    dist[1] = 0;
    for(int i = 1; i <= n; i ++){    //进行n次循环
        int t = -1;                  //设找到的点初始化为1
        for(int j = 1; j <= n; j ++){
            if(!st[j] && (t == -1 || dist[j] < dist[t])) 
                //如果该点j没在S集合中并且没更新或者有距离S集合更小的点
                t = j; //找到该点
        } 
        st[t] = true;加入集合S中
        //松弛操作，用该点更新到s的距离
        for(int j = 1; j <= n; j ++){
            dist[j] = min(dist[j], dist[t] + g[t][j]);
        }
    }
    if(dist[n] == 0x3f3f3f3f) puts("impossible");//如果为无穷大说明到不了n点
    else printf("%d", dist[n]);`,"} \n```"]},{heading:"三、堆优化版Dijkstra算法",paragraphs:["**堆优化版Dijkstra算法**：**堆优化版Dijkstra算法**是对**朴素Dijkstra算法**遍历所有点比较找出距离最近的点这一步骤，使用**小根堆（优先队列）**对这段代码进行优化：",`\`\`\`cpp
for(int i = 1; i <= n; i ++){    //进行n次循环
        int t = -1;                  //设找到的点初始化为1
        for(int j = 1; j <= n; j ++){
            if(!st[j] && (t == -1 || dist[j] < dist[t])) 
                //如果该点j没在S集合中并且没更新或者有距离S集合更小的点
                t = j; //找到该点
        } 
\`\`\``,"**时间复杂度：O（m \\* logn）**","**思想：** **typedef pair<int, int>PII;**","**用小根堆priority\\_queue<PII, vector, greater\\>heap;存储距离和点，堆自动排序，可以排序取距离S集合小的点，然后每次取不在集合S中距离最段的点，再进行松弛操作，最后将松弛操作的点插入小根堆中**","**步骤：**",`1.  初始化距离：把每个点都**初始化**为0x3f3f3f3f（无穷大），并将**1号点**放在堆中
2.  取出堆顶的点，用该**点t**进行**拓展**，采用**邻接表**的数据结构，遍历该**点t**能到的所有节点
3.  进行松弛操作，然后把**松弛的点**和**距离**加入堆中。`,"**代码 + 注释：**",`\`\`\`cpp
typedef pair<int, int>PII; //pair<int, int>用来存两个值
const int N = 1e5 + 10;
int dist[N];
bool st[N];`,`int dijkstra(){
    memeset(dist, 0x3f3f3f3f, sizeof dist);//初始化距离
    dist[1] = 0;
    priority_queue<PII, vector<PII>, greater<int>>heap;//定义小根堆
    heap.push({0, 1}); //一定要距离在第一位，因为小根堆是根据第一个数据来排序`,`while(heap.size()){
        PII t = heap.top();        //取堆顶距离最小的元素
        heap.pop();
        int distance = t.first, ver = t.second;//取出距离和点
        if(st[ver]) continue;//如果该点以及加入了集合S中，就continue
        st[ver] = true;      //否则加入该点`,`for(int i = h[ver]; i != -1; i = ne[i]){    //遍历该点能到的点的位置
            int j = e[i];
            if(dist[j] > distance + w[i]){    //进行松弛操作
                dist[j] = distance + w[i];    
                heap.push({dist[j], j});        //入堆
            }
        }
    }
    if(dist[n] == 0x3f3f3f3f) return -1;
    else return dist[n];
}
\`\`\``]},{heading:"四、Bellman_Ford算法",paragraphs:["**Bellman\\_Ford算法(贝尔曼-福特算法)：**该算法比**Dijkstra算法**更具有普遍性，**Dijkstra算法**采用的是**贪心思想**，而**Bellman\\_Ford**采用的是**动态规划**，因为它对边没有要求，可以处理负权边与负权回路，也可以求边数限制的最短路，缺点是它的**时间复杂度比较高，**不能判断**负环**","**时间复杂度：O（n \\* m）**","**思想：**用**结构体**来存储图**，**对所有的**边（重点）**进行**n - 1轮松弛操作**，就是第一轮对所有边进行松弛，得到的是源点最多经过一条边到达其他顶点的最短距离，第二轮对所有的边进行松弛，得到的是最多经过两条边到其他顶点的最短距离，以此类推，最后达到**n\\*\\***点\\*\\*","**图解：**","![img](@img/bin8ju7t)","**步骤：**",`1.  循环n - 1次，每次循环更新每条边的最短距离
2.  备份一份上次迭代dist距离的数据，防止串联
3.  用以后的dist\\[j\\]进行拓展，松弛操作`,"**代码 + 注释：**","```cpp\nconst int N = 1e5 + 10;\nint dist[N];//距离\nint back[N];//备份的数据",`struct Edge{
    int a, b, w;
}edge[N];`,`int bellman_ford(){
    memset(dist, 0x3f3f3f3f, sizeof dist); //初始化距离
    dist[0] = 1;
    for(int  = 0; i <= k; i ++){        //可以求只经过k条边（限制边数）
        memcpy(back, dist, sizeof dist);    //备份防止串联
        for(int j = 1; j <= n; j ++){        //遍历每个点
            int a = edge[i].a, b = edge[i].b, w = edge[i].w;    //取值
            dist[b] = min(dist[b], back[a] + w);    //松弛操作
        }
    }
    if(dist[n] > 0x3f3f3f3f / 2) return -1;    //因为存在负权边，所以0x3f3f3f3f要除2
    return dist[n];
} 
\`\`\``]},{heading:"五、spfa算法",paragraphs:["**SPFA算法（全称Shortest Path Faster Algorithm）：是Bellman\\_frod的队优化形式，通常用来求含负权边的的单源最短路问题，以及判断负权环，如果存在负权环就不能用SPFA算法计算最短路**","**SPFA算法与Bellman\\_frod的区别**：**SPFA**是**Bellman\\_ford**的**队优化版**，但B**ellman\\_Ford**可以用来**求负环**的最短路，是因为其**循环次数**是有限制的，因此不会发生死循环，而**SPFA算法**不可以求带有负环的最短路，由于用了**队列**存储，只要发生了更新就会不断的入队，因此有了**负权回路**就不能用SPFA否则会死循环，但是**SPFA**可以利用这点来**判断图中是否存在负环**，如果某个点（非终点）的**经过边数**达到了n就说明**存在负环**。","**时间复杂度：由于SPFA是Bellman\\_ford优化而来，所以SPFA的最坏的情况是O(n \\* m)，一般情况下是O（n）**","**对Bellman\\_ford的代码优化：**","```cpp\nfor(int j = 1; j <= n; j ++){        //遍历每个点\n    int a = edge[i].a, b = edge[i].b, w = edge[i].w;    //取值\n    dist[b] = min(dist[b], back[a] + w);    //松弛操作\n}\n```","**思路：**采用的是类似**BFS无权环**的思路，设立一个**队列**来保存待优化的结点，优化时每次取**队头结点t**，然后遍历**队头能经过的边到达的点v**，**t点**对所能**经过的边的点v**进行**松弛操作**，如果能进行**松弛操作**，并且**v点不在当前队列中**，就将v点**入队**，这样不断进行松弛操作，直到**队列为空**为止","步骤：",`1.  初始化dist\\[ \\]数组，建立一个队列，将起始点入队
2.  取出队头进行扩展，并进行松弛操作`,"**代码 + 注释：**",`\`\`\`cpp
const int N = 1e5 + 10;        //多少个点
int e[N], ne[N], w[N], idx, h[N];
void add(int a, int b, int c){    //邻接表的存储方式
    e[idx] = b;
    w[idx] = c;
    ne[idx] = h[a];
    h[a] = idx ++;
}`,`int spfa(){
    memset(dist, 0x3f3f3f3f, sizeof dist);    //初始化距离
    dist[0] = 1;
    queue<int> q;        //定义队列
    q.push(1);
    st[1] = true;`,`while(q.size()){
        int t = q.front();        //取出队头
        q.pop();
        st[t] = false;`,`for(int i = h[t]; i != -1; i = ne[i]){    //遍历t能到的点
            int j = e[i];
            if(dist[j] > dist[t] + w[i]){        //松弛操作
                dist[j] = dist[t] + w[i];
                if(!st[j]){
                    q.push(j);
                    st[j] = true;
                }
            }
        }
    }
    return dist[n];
}
\`\`\``,"**SPFA算法判读负环的代码 + 注释：**",`\`\`\`cpp
const int N = 1e5 + 10;
int dist[N];
int cnt[N];记录当前点t到源点最短路的边数，
bool spfa(){
    // 这里不需要初始化dist数组为 正无穷/初始化的原因是， 如果存在负环， 那么dist不管初始化为多少， 都会被更新
    queue<int>q;`,`//不仅仅是第一个点了， 因为第一个点可能到不了有负环的点， 因此把所有点都加入队列
    for(int i = 1;i <= n; i ++){
        q.push(i);
        st[i] = true;
    }`,`while(q.size()){
        int t = q.front();
        q.pop();
        st[t] = false;
        for(int i = h[t]; i != -1; i = ne[i]){
            int j = e[i];
            if(dist[j] > dist[t] + w[i]){
                dist[j] = dist[t] + w[i];
                cnt[j] = cnt[t] + 1;//如果能进行松弛操作就在当前点的cnt+ 1
                if(cnt[j] >= n){
                    return true;
                }
                if(!st[j]){
                    q.push(j);
                    st[j] = true;
                }
            }
        }
    }
    return false;
}
\`\`\``]},{heading:"六、Floyd算法",paragraphs:["**Floyd算法（弗洛伊德算法又称插点法）：采用动态规划的思想，来解决给多源最短路的问题，可以求图中的任意一点x到任意一点y的距离**","**时间复杂度：O(n ^ 3)** **三重循环**","**算法思路：**从图的**带权邻接矩阵**开始，进行n次**迭代更新**，每次更新**每两个点**之间的最短距离，状态方程：**f\\[i\\]\\[j\\] = min(f\\[i\\]\\[j\\], f\\[i\\]\\[k\\] + f\\[k\\]\\[j\\]);**","**步骤：**",`1.  **初始化**：从任意一条**单边路径**开始。所有**两点之间**的距离是边的权，如果两点之间没有边相连，则权为**无穷大**。
2.  对于每一对**顶点** i 和 j, 看看是否存在一个**顶点 k** 使得从 i 到 k 再到 j 比已知的路径更短。如果是更新它。`,"**代码 + 注释：**",`\`\`\`cpp
void Folyd(){
    for (int i = 1; i <= n; i ++ ){    //初始化
       for(int j = 1; j <= n; j ++){
            if(i == j) d[i][j] = 0;
            else d[i][j] = INF;
        }
    }
    //动态规划
    for(int k = 1; k <= n; k ++)
        for (int i = 1; i <= n; i ++ )
            for (int j = 1; j <= n; j ++ )
                d[i][j] = min(d[i][j], d[i][k] + d[k][j]);
}
\`\`\``]}],takeaways:[]},{id:"wp-42",tags:["基础算法","算法"],categoryId:"algorithm",title:"最小生成树 (Prim算法和Kruskal算法)",date:"2024-08-26",cover:"📐",excerpt:"一、最小生成树什么？ 1.1 定义 最小生成树： 一个有n个结点的连通图的生成树是原图的最小连通图，且包含原图的所有n个结点，并且保持图的连通的最少的边。 最小生成树可以用：Prim算法和kruskal算法求出 1.2 应用 铺设电缆： 以...",sections:[{heading:"1.1 定义",paragraphs:["**最小生成树：** 一个有n个结点的**连通图**的生成树是原图的最小连通图，且包含原图的所有n个结点，并且保持图的连通的最少的边。","最小生成树可以用：**Prim算法**和**kruskal算法**求出"]},{heading:"1.2 应用",paragraphs:[`1.  **铺设电缆：** 以尽可能低的总价去铺设城市之间的电缆（假设每两个城市可以连通）
    
2.  **旅行家：** 某人自驾游想花费最短的路程去旅行到自己所想去的城市（城市有n个 **n > 2**）
    
3.  **连接道路：** 与铺设电缆类似，以最小连通去连接每一个城市`]},{heading:"1.3 性质",paragraphs:["假设设G=(V，E）是一个连通网络，U是顶点集V的一个**非空真子集**。若(u，v）是G中一条“一个端点在U中（例如：u∈U），另一个端点不在U中的边（例如：v∈V-U），且（u，v）具有**最小权值**，则一定存在G的一棵**最小生成树**包括此边（u，v） **转载：** [百度百科](https://baike.baidu.com/item/%E6%9C%80%E5%B0%8F%E7%94%9F%E6%88%90%E6%A0%91/5223845#reference-%5B1%5D-288214-wrap)"]},{heading:"二、Prim算法",paragraphs:[`**思想：** 采用了**贪心**的思想，与[dijkstra算法](https://blog.csdn.net/qq_46056407/article/details/123788270?spm=1001.2014.3001.5501)有高度的相似性，对于包含 N 个顶点的连通网，每次从连通网中找出一个离**集合S**权值最小的点，通过不断加点到集合S中并加上其**权值**，然后更新点到集合S的距离来构建最小生成树， **别名又称加点法**  
**时间复杂度：** O（n ^ 2）  
**图解：dist\\[N\\]: 表示点到集合S的最短距离， st\\[N\\]:表示集合S（与Dijkstra类似）**`,`-   将图上的点分为两个集合：分别是**S集合**和**N集合**
-   S集合表示访问过的点（用st数组存储）
-   N：表示未访问过的点`,"![Prim图解](@img/encvb4qx)","**步骤：**","-   **与dijkstra算法不同的是dijkstra算法是更新集合N的点到起始点的距离，而prim算法是更新集合N的点到集合S的距离**",`1.  **初始化距离：** 把每个点到集合S的距离都初始化为正无穷（0x3f3f3f3f）
    
2.  **加点：** 进行n次循环，每循环一次就将**集合N中**离集合S最近的**点t**加入到集合S中 **(st\\[t\\] = true)**
    
3.  **松弛操作：** 用找到的点t去更新集合N到集合S的距离
    
    **代码 + 注释：**`,`\`\`\`cpp
const int N = 1e5 + 10;
int dist[N]; //点到集合S的距离 
int g[N][N]; //邻接矩阵 
bool st[N]; //是否加入到集合S中 
int prim(){
    memset(dist,0x3f3f3f3f ,sizeof dist);
    int res = 0;
    for(int i = 0; i < n; i ++){ //进行n次循环，每次循环加一个点 
        int t = -1;
        for(int j = 1; j <= n; j ++){
            if(!st[j] && (t == -1 || dist[t] > dist[j])) t = j;  //找点 
        }
        if(i && dist[t] == 0x3f3f3f3f) return 0x3f3f3f3f;//如果找到的点距离为无穷大，说明没有最小生成树 
        if(i) res += dist[t];   //加上权值 
        st[t] = true;           //加点 
        for(int j = 1; j <= n; j ++){        //松弛操作 
            dist[j] = min(dist[j], g[t][j]);
        }
    }
    return res;
}
\`\`\``]},{heading:"三、kruskal算法",paragraphs:["**思想：kruskal算法(克鲁斯卡尔算法）** 与**Prim算法**一样也是基于**贪心**思想而来的。但与Prim算法加点不同的是kruskal算法是通过**加边**来实现最小生成树的，对每条边的权值进行**排序**，然后根据权值由小变大依次来判断边的两个顶点是否属于同一个连通块，并用[并查集](https://baike.baidu.com/item/%E5%B9%B6%E6%9F%A5%E9%9B%86)的方法把边加入到同一个连通块中 **时间复杂度：**O（mlog2m） **m表示边的数量 ==注意：结构体存储==** 步骤：\\*\\*",`1.  **排序：** 对所有的边进行由小到大**排序**，然后依次进行**遍历**
2.  **合并加边：** 判断该边的两个顶点是否为**同一个连通块**，若是则**合并**两个顶点，并加入**权值**`,"**代码 + 注释：**","```cpp\nconst int N = 2e5 + 10, INF = 0x3f3f3f3f;//N表示多少个点\nint n, m;\nint bin[N]; //祖宗结点",`struct Edge{        //结构体存储
    int a, b, w;    //表示a -> b 的权值为w
    bool operator < (const Edge &W) const{
        w < W.w;
    }
}edges[N];`,`int find(int x){
    if(bin[x] != x) bin[x] = find(bin[x]);
    return bin[x];
}`,`int kruskal(){
    sort(edges, edges + m); //排序
    for(int i = 1; i <= n; i ++) bin[i] = i;
    int res = 0, cnt = 0;`,`for(int i = 0; i < n; i ++){
        int a = edges[i].a, b = edges[i].b, w = edges[i].w;
        a = find(a), b = find(b);
        if(a != b){ //合并
            bin[a] = b;
            cnt ++; //有多少条边
            res += w; //加权值
        }
    }
    if(cnt < n -1) return INF;//如果边小于n - 1说明有点没有连接 
    else return res;
}
\`\`\``]}],takeaways:[]},{id:"wp-43",tags:["Unity"],categoryId:"unity",title:"UGUI基础",date:"2024-08-28",cover:"🎮",excerpt:"一、UGUI概述 UGUI(Unity GUI)是Unity引擎中的用户界面系统，用于创建游戏和应用程序中的用户界面，它基于画布(Canvas)系统，通过组件和GameObject来排列、定位和样式化UI元素。 Unity社区的UGUI学习...",sections:[{heading:"一、UGUI概述",paragraphs:["UGUI(Unity GUI)是Unity引擎中的用户界面系统，用于创建游戏和应用程序中的用户界面，它基于**画布(Canvas)系统**，通过组件和GameObject来排列、定位和样式化UI元素。","Unity社区的UGUI学习链接：[https://developer.unity.cn/projects/637c68a3edbc2a001ba22eee](https://developer.unity.cn/projects/637c68a3edbc2a001ba22eee)","UGUI的主要特点包括：",`-   **基于组件:**使用各种UI组件（如按钮、文本、图像等）来构建界面。
-   **事件系统:**处理用户输入事件，如点击、拖动等。
-   **布局系统：**支持自动布局和自适应布局，如水平布局、垂直布局和网格布局。
-   **渲染优化：**通过批量渲染和减少重绘次数来提高性能。`]},{heading:"2.1.1 网格构建",paragraphs:[`-   UGUI系统是基于**3D网格**来构建UI的，当Unity创建一个UI元素时，UGUI会首先为这个该元素构建方形网格。
    
-   每个UI元素都可以看作是一个**3D模型**，其网格上绑定了材质球，材质球存放了要显示的**图片或纹理**。`]},{heading:"2.1.2 材质和网格合并",paragraphs:[`-   为了优化渲染性能，UGUI会将具有相同图片和着色器的材质球合并成一个，并**将分散的网格合并成几个大型网格**进行渲染。
-   合并规则通常是在**同一个Canvas中，相同层级、具有相同材质球参数的元素**会被合并，相同层级是指UI布局中覆盖的层级。`]},{heading:"2.2.1 Canvas组件",paragraphs:[`-   **功能：**容纳所有UI元素的区域，是一直带有画布组件的游戏对象。
-   **渲染模式：**
    -   **Screen Space-Overlay:** 将UI元素放置于场景之上渲染的屏幕上，常用在纯UI系统的区域内，其中组件中的**Sort Order参数值越大，越靠前渲染**。
    -   **Screen Space-Camera:**UI元素由此摄像机渲染，摄像机设置会影响UI的外观。是实际项目中制作UI系统最常见的模式，不过UGUI系统底层针对排序有一些规定，如**对元素的Z轴不为0的元素，会单独提取出来渲染，不参与合并。**
    -   **World Space:**用于UI物体放在3D世界中，如游戏中的3D界面、物体标记、和交互面板等。`]},{heading:"2.2.2 Canvas Scaler组件",paragraphs:[`-   **功能：**用于在不同分辨率下保持UI控件大小的自适应。
    
-   **适配模式（UI Scale Mode）：**
    
    -   **Constant Pixel Size：**无论屏幕大小如何，UI始终保持相同像素大小。
    -   **Scale With Screen Size：**根据屏幕尺寸进行缩放，随之屏幕尺寸放大缩小。
    -   **Constant Physical Size：**无论屏幕大小和分辨率如何，UI元素始终保持物理大小。
    
    在实际手游项目中，设备的屏幕分辨率变化比较大，通常以Scale With Screen Size来自动适配比例。`,"![20240827174656](@img/f516jyfh)",`-   **Scale With Screen Size常用属性**
    -   **Reference Resolution:**设置参考分辨率，用于计算缩放比例。
    -   **Screen Match Mode:**设置屏幕匹配模式，有Match Width Or Height(宽度或高度的匹配比例)，Expand(扩展)、Shrink(裁剪)
    -   **Match:**是否以宽度、高度或者两者的平均值作为参考。
    -   Reference Pixels Per Unit: Sprirt的每个像素将覆盖UI的一个单位。`]},{heading:"2.2.3 Graphic Raycaster组件",paragraphs:["-   **功能：**用于检测UI输入事件的射线发射器，主要负责通过射线检测玩家和UI元素的交互。"]},{heading:"2.2.4 EventTrigger组件",paragraphs:["-   **功能：**点击相应作用，配合前面的Graphic Raycaster进行响应。"]},{heading:"2.2.5 Image和RawImage的区别",paragraphs:[`-   **支持纹理类型：**RawImage支持任何类型的Texture，Image主要支持Sprite类型的Texture。RawImage一般展示单张图片，不能采用图集获取小块图片，而Image则使用图集的性能会更高一点。
-   **功能负责性：**RawImage功能相对单一，一般只用来显示动态图像、视频帧、相机渲染等，Image功能丰富，提供了多种Image Type(如Simple、Sliced、Tiled、Filled)，可以实现图片的填充、拉伸、动画多种。`]},{heading:"2.2.6 Mask组件",paragraphs:[`-   **工作原理：**
    1.  **基于模板测试**：Mask利用GPU的**模板缓冲区域**，它会将自身所在的GameObject的Image组件的轮廓写入模板缓冲区（重新一个材质球）。
    2.  **子对象继承模板设置：**所有的子UI元素在渲染时，会检查模板缓冲区域，如果子物体在模板值检测的区域才会被绘制，区域外的则被丢弃。
    3.  **依赖Imag组件：**Mask组件必须和Image组件绑定在同一个GameObject上才能工作，Image的alpha值决定了遮罩的形状。(alpha > 0才能有遮罩效果)
-   **属性：**
    -   **Show Mask Graphic:** 是否显示Mask组件所在的GameObject上的Image图像上。
-   **优点：** 支持任意形状的图片来作为遮罩
-   **缺点：**
    -   **性能开销大：**每个使用Mask的Canvas都会导致一次Canvas的重新构建，并且会**增加额外的绘制调用**。如果场景有大量动态变化便会对性能产生明显的影响。`]},{heading:"2.2.7 RectMask2D组件",paragraphs:["RectMask2D是专门为**矩形遮罩优化**而生的组件。",`-   **工作原理：**
    1.  **基于剪裁矩形：**不使用模板测试，而是直接使用自身的矩阵变换区域。
    2.  **不依赖Image组件：**RectMask2D不需要Image组件，其遮罩区域完全由GameObject的RectTransform来决定。
-   **优点**
    1.  **性能极高：**由于使用的是硬件裁剪，它的性能开销远低于Mask，它**不会导致Canvas的重新构建**。
    2.  **支持任意层级子物体：**只要子物体是遮罩矩阵区域的任意后代（ugui是按层级依次渲染的），都会被正确遮罩。
-   **缺点：** 只能支持矩阵遮罩。`]},{heading:"2.2.8 ScollView组件",paragraphs:["-   **概念：**一个复合组件，其核心功能是在一个固定的可视区域内，浏览一个更大的内容区域，当内容超过视口大小时，它会自动提供滚动条，需要用户来拖动显示。\n    \n    1.  **ScrollView(GameObject)：** 根节点，包含主要组件。\n    2.  **Viewport(GameObject)：**定义可视区域的遮罩。\n    3.  **Content(GameObject)：**存放需要滚动内容的容器。\n-   **Scroll Rect (滚动矩形)：**Scroll View 的大脑\\*\\*，控制着所有的滚动逻辑\n    \n    -   **主要属性：**\n        1.  **Content (内容)**：**拖拽引用**。这里必须引用到下面的 `Content`子对象。它告诉 `ScrollRect`哪个部分是需要滚动的。\n        2.  **Viewport (视口)**：**拖拽引用**。这里必须引用到下面的 `Viewport`子对象。它定义了内容的可视区域。如果留空，默认使用自身的 `RectTransform`作为视口。\n        3.  **Horizontal / Vertical (水平/垂直滚动)**：复选框，决定允许朝哪个方向滚动。\n        4.  **Movement Type (移动类型)**：滚动到边界时的行为。\n            -   `Unrestricted`：无限制，内容可以被完全拖出视口。\n            -   `Elastic`：**弹性（最常用）**。当滚动到边界时，会有一种弹回的效果。\n            -   `Clamped`：硬限制，滚动到边界时立即停止，无弹性效果。\n        5.  **Inertia (惯性)**：是否开启惯性效果。开启后，用户快速拖动后松开，内容会继续滚动一段距离并减速停止。\n        6.  **Scroll Sensitivity (滚动灵敏度)**：鼠标滚轮或触控板滚动的灵敏度。\n-   **Canvas Renderer：**所有 UI 元素都必须有的渲染器。\n    \n-   **Viewport (视口)：**这个 GameObject 的核心作用是**遮罩**。\n    \n-   **Content (内容)：**放置所有可滚动内容的地方，比如一列按钮、一堆图片、文本等。\n    \n    1.  **Content Size Fitter (可选但重要)：**可以**根据子物体的布局自动调整 `Content`矩形的大小**。**例如**：在一个垂直滚动的列表中，可以将 `Content`的 `Vertical Fit`设置为 `Preferred Size`。这样 `Content`的高度就会自动变为所有子物体加上间距后的总高度，从而确保滚动范围是正确的。\n    2.  **布局组件 (Layout Group)**通常你会为 `Content`添加一个 **Vertical Layout Group**或 **Horizontal Layout Group**或 **Grid Layout Group**。这些组件会自动排列其子物体，与 `Content Size Fitter`配合使用。"]}],takeaways:[]},{id:"wp-44",tags:["Unity"],categoryId:"unity",title:"UI 优化",date:"2024-08-28",cover:"🎮",excerpt:"官方解释 Statistics 窗口官方解释 UI合批规则:https://blog.csdn.net/sinat_25415095/article/details/112388638 Unity四种合批技术详解：https://blog....",sections:[{heading:"官方解释",paragraphs:["[Statistics 窗口官方解释](https://docs.unity3d.com/cn/2020.1/Manual/RenderingStatistics.html)","UI合批规则:[https://blog.csdn.net/sinat\\_25415095/article/details/112388638](https://blog.csdn.net/sinat_25415095/article/details/112388638)","Unity四种合批技术详解：[https://blog.csdn.net/ww1351646544/article/details/139678759](https://blog.csdn.net/ww1351646544/article/details/139678759)"]},{heading:"一、UI组成",paragraphs:["-   **UI组成：**UGUI中的每个组件都是由**3D网格，材质球，贴图组成**（可以将其看成扁的3D物体），每创建一个组件，就会**构建一个网格**（从Canvas的CanvasRender组成），然后**将材质球与这个网格绑定**，所有操作都在Canvas中完成，如果需要在Canvas创建n个组件，那么我们就要准备n个材质球，准备n张图片，调用n个drawCall，显然不现实，所有我们需要进行合批的操作。"]},{heading:"2.1 定义",paragraphs:["合批也叫**Batch**，Unity为了减少渲染调用次数，提高性能，会将相同渲染特性的UI元素合并成一个大网格进行渲染（DrawCall）。而将UI元素的网格合并就叫UI合批。"]},{heading:"2.2 合批规则",paragraphs:["UI合批的基本规则是两个控件使用的材质球(Shader)和贴图要完全相同，UGUI中Canvas是可以嵌套子Canvas，但是合批是以**Canvas(不包含子Canvas)**为单位的(子Canavs则会是另一个批次)。","**合批步骤：**",`1.  **找Canvas集合**：将所有Canvas找出来，然后剔除不必渲染的Canvas(**透明度为0，长宽为0，在RectMask2D下且在RectMask2D的区域外**)
2.  **计算UI深度值Depth:**
    1.  从Hierarchy中从上往下的顺序依次遍历Canvas下所有UI元素。
    2.  如果当前UI不渲染，Depth = -1
    3.  如果当前UI要渲染，但当前UI下没有其他UI元素与其相交，则Depth = 0
    4.  如果当前UI要渲染，当前UI下由其他UI元素（LowerUI）与其相交，如果当前UI和LowerUI可以合批（材质和贴图完全相同），则当前UI.Depth = LowerUI.Depth, 如果不能合批的话，当前UI.Depth = LowerUI.Depth + 1;
    5.  如果当前UI要渲染，下面有n个元素与其相交，按步骤算出n个Depth,然后取n个Depth最大值，即当前UI.Depth = max (Depth1, Depth2, Depth3)`,"**UI下面：**只Hierechy窗口UI下的元素， **相交**：两个UI元素的网格有相交（非Rect有相交）",`3.  各个UI的Depth计算完毕后，依次按照Depth、material ID、texture ID、RendererOrder（即UI层级队列顺序，即Hierarchy面板上的顺序）排序（条件的优先级依次递减，且均为从小到大排序）。然后剔除Depth = -1的UI元素，得到Batch前的UI 元素队列，这个队列被称之为**VisiableList**。
4.  判断**VisableList**中相邻的元素是否能够合批（相同材质和贴图，不需要考虑Depth是否相同），然后一个批次一个批次的合并网格，提交给GPU进行渲染。`]},{heading:"2.3 UI重构",paragraphs:["合批是将同一个Canvas下多个UI的网格合并在一起，如果其中任何一个元素的材质，网格顶点，位置（Transform）甚至颜色或者在该Canvas下动态创建或删除UI元素都会导致该Canvas重新计算合批（仅一个Canvas，子Canvas或者父Canvas不会重新计算），重新生成网格，这个重新计算生成网格的过程被称为UI重构(Rebuild)。","**具体触发重构可以参考UGUI源码**。"]},{heading:"三、优化方案",paragraphs:["UI优化是提升游戏或者应用性能的重要方案，UGUI的优化集中在减少DrawCall、优化内存使用、提升渲染效率等，常用的UGUI方案有UI动静分离、拆分UI、预加载UI、图集拼接优化、网格重构优化等。",`-   **UI动静分离：**又称为动静合批，“动”指的是元素移动、放大、缩小的UI重构概率比较高的UI元素，而“静”表示界面上不会移动、旋转、缩放等UI重构基本上没有的UI元素，通过设置静态Canvas和动态Canvas，可以大幅度减少Draw Call的数量。
-   **拆分UI**：当界面元素过多时，在实例化和初始化时，消耗的CPU会比较大，所有可以将界面需要二次显示的内容进行拆分，使打开界面的时候可以加快。
-   **预加载UI:**UI实例化到场景的过程：网格合并，组件初始化，渲染初始化，图片加载，界面逻辑调用等，需要消耗大量CPU，可以通过预加载将资源加载到内存、UI实例化和UI初始化的CPU消耗放到**Loading等待时间线上**，如登录过程，场景切换的时间等都可以提前加载资源。
-   **打包图集：**又称纹理图集打包或精灵图集打包，是一种将多个小纹理合并成一个大纹理的优化技术，UI元素用同一个纹理就可以减少批次的调用次数。
-   **Scroll View优化:**Scroll组件需要频繁移动，导致每帧都要重构，如果界面上有大量元素，则非常消耗性能，所有可以通过循环利用优化，只实例化需要显示的实例数量，数据达到共享，达到减少CPU浪费。
-   **对象池技术：**在频繁创建和销毁UI对象使，使用对象池来重复利用已创建的UI对象，减少内存分配和垃圾回收开销`]}],takeaways:[]},{id:"wp-45",tags:["基础算法","算法"],categoryId:"algorithm",title:"欧拉函数求质数",date:"2024-09-03",cover:"📐",excerpt:"欧拉函数求质数 #include&lt;iostream&gt; using namespace std; typedef long long ll; const int N = 1e6 + 10; int euler[N], primes...",sections:[{heading:"欧拉函数求质数",paragraphs:["```cpp\n#include<iostream>",`using namespace std;
typedef long long ll;
const int N = 1e6 + 10;
int euler[N], primes[N], cnt;
bool st[N];
void get_eulers(int n){
    euler[1] = 1;
    for(int i = 2; i <= n; i ++){
        if(!st[i]){
            primes[cnt ++] = i;
            euler[i] = i - 1;
        }
        for(int j = 0; primes[j] <= n / i; j ++){
            int t = primes[j] * i;
            st[t] = true;
            if(i % primes[j] == 0){
                euler[t] = primes[j] * euler[i];
                break;
            }
            euler[t] = (primes[j] - 1) * euler[i];
        }
    }
} 
int main(){
    int n;
    cin >> n;
    get_eulers(n);
    ll res = 0;
    for(int i = 1; i <= n; i ++) res += euler[i];
    cout << res << endl;
    return 0;
}
\`\`\``]}],takeaways:[]},{id:"wp-46",tags:["算法"],categoryId:"algorithm",title:"二叉搜索树 (Binary Search Tree)",date:"2025-10-29",cover:"📐",excerpt:"一、什么是二叉搜索树？ 二叉搜索树，也称为二叉排序树或二叉查找树，是一种特殊的二叉树。它或者是一棵空树，或者是具有下列性质的二叉树： 左子树上所有节点的值均小于它的根节点的值。 右子树上所有节点的值均大于它的根节点的值。 左、右子树也分别为...",sections:[{heading:"一、什么是二叉搜索树？",paragraphs:["**二叉搜索树**，也称为二叉排序树或二叉查找树，是一种特殊的二叉树。它或者是一棵空树，或者是具有下列性质的二叉树：",`1.  **左子树**上所有节点的值均**小于**它的根节点的值。
2.  **右子树**上所有节点的值均**大于**它的根节点的值。
3.  **左、右子树也分别为二叉搜索树**。`,"这个定义是递归的，它确保了整个树具有一个关键的属性：**中序遍历二叉搜索树，可以得到一个升序排列的有序序列**。"]},{heading:"二、 核心性质与优点",paragraphs:['-   **有序性**：结构本身隐含了数据的顺序，使得查找、插入、删除等操作可以基于比较快速定位。\n-   **高效性**：对于一棵左右子树相对"平衡"的二叉搜索树，搜索、插入、删除等操作的时间复杂度平均为 **O(log n)**，其中 `n`是树中节点的数量。这是因为每次操作都能排除大约一半的搜索空间。\n-   **动态性**：它支持高效地动态插入和删除节点，而无需像静态数组那样需要移动大量元素']},{heading:"3.1  树节点定义(c++为例)",paragraphs:[`\`\`\`cpp
struct TreeNode {
    int value;
    TreeNode* left;
    TreeNode* right;`,"TreeNode(int x) : value(x), left(nullptr), right(nullptr) {}\n};\n```"]},{heading:"3.2 插入",paragraphs:["**目标：**将一个新值插入树中，并保持二叉搜索树的性质。","**步骤：**",`1.  树为空，则创建一个新节点作为根节点。
2.  如果新值**小于**当前节点的值，递归地插入到**左子树**。
3.  如果新值**大于**当前节点的值，递归地插入到**右子树**。
4.  **关键**：如果新值等于当前节点的值，根据具体实现决定（通常不允许重复值，或可以插入到左/右子树）。这里我们假设不允许重复，则不插入或进行其他处理（或用计数来计算）。`,"**代码：**",`\`\`\`cpp
// 插入
TreeNode* InsertBSTNode(TreeNode* root, int value){
    if (root == nullptr)
        return new TreeNode(value);`,`if (root -> value < value)
        root -> right = InsertBSTNode(root -> right, value);
    else
        root -> left = InsertBSTNode(root -> left, value);`,"return root;\n}\n```"]},{heading:"3.3 查找",paragraphs:["**目标：**在树中查找一个数是否存在","**步骤：**",`1.  从根节点开始比较，如果根节点不存在或根节点的值等于目标值则返回
2.  如果目标值大于根节点的值，则递归地向右节点查找
3.  如果目标值小于根节点的值，则递归的向左节点查找`,"**代码：**","```cpp\nTreeNode* SearchBSTNode(TreeNode* root, int value){\n    if (root == nullptr || root -> value == value)\n        return root;","if (value > root -> value) return SearchBSTNode(root -> right, value);\n    else return SearchBSTNode(root -> left, value);\n}\n```"]},{heading:"3.4 删除",paragraphs:["**目标：**在树中查找一个数，并将其删除","**步骤：**",`1.  找到要删除的节点，并删除
    
2.  情况一：该节点为叶节点，直接删除该节点即可
    
3.  情况二：该节点有只有一个子节点，则将其对应的子节点代替即可
    
4.  情况三：该节点有两个子节点（最复杂情况）
    
    -   找到对应的该节点中序遍历最小（大）的值
    -   让最小（大）值替换该值
    -   然后递归删除那个最值节点
    
    **代码：**
    
    \`\`\`cpp
    // 查找最小值
    TreeNode* FindMinNode(TreeNode root){
       while (root -> left != nullptr){
           root = root -> left; 
       }
       return root;
    }
    
    // 删除节点
    TreeNode* DeleteBSTNode(TreeNode* root, int value) {
       if (root == nullptr) return root;
       if (value < root -> value) root -> left = DeleteBSTNode(root -> left, value);
       else if (value > root -> value) root -> right = DeleteBSTNode(root -> right, value);
       else {
           if (root -> left == nullptr) {
               TreeNode* temp = root -> left;
               root -> value = temp -> value;
               delete temp;
               return root;
           }
           else if (root -> right == nullptr) {
               TreeNode* temp = root -> right;
               root -> value = temp -> value;
               delete temp;
               return root;
           }
    
           TreeNode* minNode = FindMinNode(root);
           root -> value = minNode -> value;
           root -> right = DeleteBSTNode(root -> right, mindNode -> value);
       }
       return root;
    }
    \`\`\``]},{heading:"3.5 示例代码",paragraphs:[`\`\`\`cpp
#include <iostream>
#include <vector>
#include <queue>
#include <stack>
using namespace std;`,`struct TreeNode {
    int value;
    TreeNode* left;
    TreeNode* right;`,`TreeNode(int x) : value(x), left(nullptr), right(nullptr) {}
};`,"class BST{",`private:
    TreeNode* root;`,`// 插入
    TreeNode* InsertBSTNode(TreeNode* root, int value){
        if (root == nullptr)
            return new TreeNode(value);`,`if (root -> value < value)
            root -> right = InsertBSTNode(root -> right, value);
        else
            root -> left = InsertBSTNode(root -> left, value);`,`return root;
    }`,`// 查找 
    TreeNode* SearchBSTNode(TreeNode* root, int target){
        if (root == nullptr || root -> value == target)
            return root;`,`if (root -> value < target) SearchBSTNode(root -> right, target);
        else SearchBSTNode(root -> left, target); 
        // return root;
    }`,`// 删除 
    TreeNode* DeleteBSTNode(TreeNode* root, int key){
        if (root == nullptr)
            return nullptr;`,`if (key < root -> value)
            root -> left = DeleteBSTNode(root -> left, key);
        else if (key > root -> value)
            root -> right = DeleteBSTNode(root -> right, key);
        else{
            // 如果左子树为空, 替换右边节点 
            if (root -> left == nullptr){
                TreeNode* temp = root -> right;
                delete root;
                return temp;
            }
            // 如果右子树为空，直接替换左边节点 
            else if (root -> right == nullptr){
                TreeNode* temp = root -> left;
                delete root;
                return temp;
            }`,`// 找到最小的节点 
            TreeNode* minNode = FindMinBSTNode(root -> right);
            // 替换 
            root -> value = minNode -> value;
            // 删除之前最小的节点 
            root -> right = DeleteBSTNode(root -> right, minNode -> value);
        }
        return root;
    }`,`// 查找最小数值 
    TreeNode* FindMinBSTNode(TreeNode* root){
        while (root -> left != nullptr){
            root = root -> left;
        }
        return root;
    }`,`// 中序遍历 
    void InorderRecursive(TreeNode* root, vector<int> &res) {
        if (root == nullptr) return;`,`InorderRecursive(root -> left, res);
        res.push_back(root -> value);
        InorderRecursive(root -> right, res);
    }`,`// 清空树
    void clear() {
        clearRecursive(root);
        root = nullptr;
    }`,`void clearRecursive(TreeNode* node) {
        if (node == nullptr) return;
        clearRecursive(node -> left);
        clearRecursive(node -> right);
        delete node;
    }`,`public:
    // 构造函数 
    BST(): root(nullptr) {}`,`~BST(){
        clear(); 
    }`,`// 插入操作 
    void Insert(int value){
        root = InsertBSTNode(root, value);
    }`,`// 查询操作 
    bool Search(int value){
        return SearchBSTNode(root, value) != nullptr;
    }`,`// 移除操作 
    void Remove(int value){
        DeleteBSTNode(root, value);
    }`,`// 中序遍历（升序）
    vector<int> Inorder() {
        vector<int> result;
        InorderRecursive(root, result);
        return result;
    }
}; 
int main() {
    BST bst;`,'cout << "=== 二叉搜索树测试 ===" << endl;',`// 插入测试
    vector<int> values = {50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45};`,`for (int val : values) {
        cout << "插入数值: ";
        cout << val << " ";
        bst.Insert(val);`,`// 遍历测试
        cout << "中序遍历 (升序): ";
        vector<int> inorder = bst.Inorder();
            for (int val : inorder) {
                cout << val << " ";
        } 
        cout << endl;
    }`,`// 查找测试 
    vector<int> findValues = {80, 66, 20, 30};
    for (int val : findValues){
        cout << "搜索数值: ";
        cout << val << " ";`,`bool isFind = bst.Search(val);
        cout << (isFind ? "查找到" : "未找到") << endl;
    }`,`// 删除测试 
    vector<int> removeValues = {40, 60, 80, 66, 35, 45};`,`for (int val : removeValues) {
        cout << "删除数值: ";
        cout << val << " ";
        bst.Remove(val);`,`// 遍历测试
        cout << "中序遍历 (升序): ";
        vector<int> inorder = bst.Inorder();
            for (int val : inorder) {
                cout << val << " ";
        } 
        cout << endl;
    }
    return 0;
}
\`\`\``]},{heading:"四、 二叉搜索树的缺陷：不平衡问题",paragraphs:["二叉搜索树的性能严重依赖于树的**高度**。如果树是平衡的（例如 `` `AVL` `` 树、红黑树），高度约为 log₂n，操作效率很高。","但是，如果按照特定顺序插入节点（例如依次插入 1, 2, 3, 4, 5），树会退化成一条**链表**，高度变为 `n`。此时，所有操作的时间复杂度都退化为 **O(n)**，效率极低。","**解决方案**：使用**自平衡二叉搜索树**，如`` `AVL` `` 树、红黑树等。它们在插入和删除时会通过旋转等操作自动调整树的结构，保持树的平衡。"]},{heading:"五、 总结",paragraphs:[`| 特性/操作 | 描述 | 平均/最好时间复杂度 | 最坏时间复杂度（退化成链表） |
| --- | --- | --- | --- |
| **查找** | 根据值的大小在左/右子树中搜索 | O(log n) | O(n) |
| **插入** | 在适当位置创建新叶子节点 | O(log n) | O(n) |
| **删除** | 分三种情况处理 | O(log n) | O(n) |
| **中序遍历** | 按升序输出所有节点 | O(n) | O(n) |
| **空间复杂度** |  | O(n) | O(n) |`,"二叉搜索树是理解更高级树结构（如 `` `AVL` `` 树、红黑树、B 树）的基础。"]}],takeaways:[]},{id:"wp-47",tags:["算法"],categoryId:"algorithm",title:"平衡二叉树",date:"2025-10-30",cover:"📐",excerpt:"一、 什么是平衡二叉树？ 1.1 基本概念 平衡二叉树是一种特殊的二叉搜索树，它通过特定的平衡机制确保树的高度始终保持在对数级别。（解决了二叉搜索树的极端情况） 1.2 平衡条件 对于树中的任意节点，其左子树和右子树的高度差绝对值不超过1：...",sections:[{heading:"1.1 基本概念",paragraphs:["**平衡二叉树**是一种特殊的二叉搜索树，它通过特定的平衡机制确保树的高度始终保持在对数级别。（解决了二叉搜索树的极端情况）"]},{heading:"1.2 平衡条件",paragraphs:["对于树中的任意节点，其**左子树和右子树的高度差绝对值不超过1**：","```\n平衡因子 = 左子树高度 - 右子树高度 （注： 左 - 右）\n平衡条件：|平衡因子| ≤ 1\n```"]},{heading:"2.1 二叉搜索树的退化问题",paragraphs:["**有序插入导致链表化**：","```\n插入序列：1, 2, 3, 4, 5",`普通BST：
    1
      \\
        2
          \\
            3
              \\
                4
                  \\
                    5
高度：5，退化成链表！
\`\`\``,"**平衡`BST`**：",`\`\`\`
    2
   / \\
  1   4
     / \\
    3   5
高度：3，保持平衡！
\`\`\``]},{heading:"3.1 树结构",paragraphs:[`\`\`\`cpp
struct AVLNode {
    int value,
    int height,
    AVLNode* left, right;
    AVLNode(int x) value(x), height(1), left(nullptr), right(nullptr) {}
}
\`\`\``]},{heading:"3.2 AVL的基本方法",paragraphs:["```cpp\nint getHeight(AVLNode* root) {\n    return root ? root -> height : 0;\n}",`void updateHeight(AVLNode* root) {
    if (root)
        root -> height = 1 + max(getHeight(root -> left), getHeight(root -> right));
}`,"int getBalanceFactor(AVLNode* root) {\n    return root ? getHeight(root -> left) - getHeight(root -> right) : 0;\n}\n```"]},{heading:"3.3.1 LL型（右旋）",paragraphs:["```\n      A (平衡因子=2)                                  B\n     /                      右旋操作                 / \\\n   B (平衡因子=1)       ================>           C   A\n  /   \\                                           /\nC     D                                          D\n```","**代码实现：**",`\`\`\`cpp
// 判断条件: 当前节点的平衡因子大于1, 并且当前节点的左子树的平衡因子大于等于0 
// getBalanceFactor(A) > 1 && getBalanceFactor(B) >= 0
AVLNode* rightRotate(AVLNode* A){
    AVLNode* B = A -> left;
    AVLNode* D = B -> right;`,`B -> right = A;
    A -> right = D;`,`updateHeight(A);
    updateHeight(B);`,"return B;\n}\n```"]},{heading:"3.3.2 RR型（左旋）",paragraphs:["```\nA (平衡因子=-2                                         B\n  \\                         左旋操作                  / \\\n   B (平衡因子=0)       ================>            A   C\n /   \\                                                   \\\nD     C                                                   D\n```","**代码实现：**",`\`\`\`cpp
// 判断条件： 当前节点的平衡因子小于1，且当前节点的左子树的平衡因子小于等于0
// getBalanceFactor(A) < 1， getBalanceFactor(B) <= 0
AVLNode* leftRotate(AVLNode* A) {
    AVLNode* B = A -> right;
    AVLNode* D = B -> left;`,`B -> left = A;
    A -> right = D;`,`updateHeight(A);
    updateHeight(B);
    return B;
}
\`\`\``]},{heading:"3.3.3 LR型 (先左旋再右旋)",paragraphs:["```\n     A (平衡因子=2)                         A                                  C\n   /                      左旋             /                右旋              / \\\n  B (平衡因子=-1)       ========>         C               ========>          B   A\n    \\                                   /\n     C                                 B\n```","**代码示例：**",`\`\`\`cpp
// 判断条件：当前节点的平衡因子大于1，且当前节点的左子树平衡因子小于0
// getBalanceFactor(A) > 1 &&  getBalanceFactor(A -> left) <0
AVLNode* leftRightRotate(AVLNode* A){
    A -> left = leftRotate(A -> left);
    return rightRotate(A);
}
\`\`\``]},{heading:"3.3.4 RL型（先右旋再左旋）",paragraphs:["```\n     A (平衡因子=-2)                                  A                                     C\n        \\                         右旋                 \\                   左旋            /  \\\n          B (平衡因子=1)        ========>               C               ========>         A    B\n        /                                                \\\n     C                                                    B\n```",`\`\`\`cpp
// 判断条件：当前节点的平衡因子小于-1，且右子树平衡因子大于0
// getBalaceFactor(A) < -1 &&  getBalanceFactor(A -> right) > 0;
AVLNode* rightLeftRotate(AVLNode* A) {
    A -> right = rightRotate(A -> right);
    return leftRotate(A);
}
\`\`\``]},{heading:"3.4.1 查找操作",paragraphs:["查找操作和二叉搜索树是一样的方式","```cpp\nAVLNode* findAVLNode(AVLNode* root, int value) {\n    if (root == nullptr || root -> value == value)\n        return root;",`if (value > root -> value)
        retturn findAVLNode(root -> right, value);
    else (value < root -> value)
        return findAVLNode(root -> left, value);
}
\`\`\``]},{heading:"3.4.2 平衡操作",paragraphs:["**步骤：**",`1.  更新当前节点的高度
2.  根据类型去平衡二叉树`,"**代码：**","```cpp\nAVLNode* balanceAVLNode(AVLNode* root) {\n    updateHeight(root);","int balanceFactor = getBalanceFactor(root);",`if (balanceFatcor > 1 && getBalanceFactor(root -> left) >= 0) 
        rightRotate(root);
    else if (balanceFactor > 1 && getBalanceFactor(root -> left) < 0)
        leftRightRotate(root);
    else if (balanceFactor < 1 && getBalanceFactor(root -> right) <= 0)
        leftRotate(root);
    else if (balanceFactor < 1 && getBalanceFactor(root -> right) > 0)
        rightLeftRotate(root);`,"return root;\n}\n```"]},{heading:"3.4.3 插入操作",paragraphs:["**代码：**","```cpp\nAVLNode* insertAVLNode(AVLNode* root, int value) {\n    if (root == nullptr) \n        return new AVLNode(value);",`if (value > root -> value) root -> right = insertAVLNode(root -> right, value);
    else if (value < root -> value) root -> left = insertAVLNode(root -> left, value);
    else return root;`,"// 平衡操作\n    return balanceAVLNode(root);\n}\n```"]},{heading:"3.4.4 删除操作",paragraphs:["**代码：**",`\`\`\`cpp
AVLNode* findMinNode(AVLNode* root) {
    if (root && root -> left != nullptr){
        root = root -> left;
    }
    return root;
}`,`AVLNode* deleteAVLNode(AVLNode* root, int value) {
    if (root == nullptr)
        return root;`,`if (value > root -> value) root -> right = deleteAVLNode(root -> right, value);
    else if (value < root -> value) root -> left = deleteAVLNode(root -> left, value);
    else {
        if (root -> left == nullptr) {
            AVLNode* temp = root -> right;
            *root = *temp;
            delete temp
        }
        else if (root -> right = nullptr){
            AVLNode* temp = root -> left;
            *root = *temp;
            delete temp;
        }
        else {
             AVLNode* minNode = findAVLNode(root -> right);
            root -> value = minNode -> value;
            return deleteAVL(root -> right, minNode -> value);
        }
    }
    if (root == nullptr) return root;`,"return updateBalanceNode(root);\n}\n```"]},{heading:"四、示例代码",paragraphs:["```cpp\n#include <iostream>\n#include <vector>\nusing namespace std;",`struct AVLNode{
    int height; // 平衡因子 
    int value;
    AVLNode* left;
    AVLNode* right;`,`AVLNode(int x) : value(x), height(1), left(nullptr), right(nullptr) {}
};`,"class AVLTree{",`private:
    AVLNode* root;`,`// 获得节点高度 
    int getHeight(AVLNode* node) {
        return node ? node -> height : 0;
    }`,`// 更新节点高度
    void updateHeight(AVLNode* node) {
        if (node)
            node -> height = 1 + max (getHeight(node -> left), getHeight(node -> right));
    }`,`// 获得平衡因子 
    int getBalanceFactor(AVLNode* node){
        return node ? (getHeight(node -> left) - getHeight(node -> right)) : 0;
    }`,`// LL右旋 
    AVLNode* rightRotate(AVLNode* A){
        AVLNode* B = A -> left;
        AVLNode* D = B -> right;`,`// 执行旋转
        B -> right = A;
        A -> left = D;`,`// 更新高度 
        updateHeight(A);
        updateHeight(B);`,`// 返回根节点 
        return B;
    }`,`// RR左旋  
    AVLNode* leftRotate(AVLNode* A){
        AVLNode* B = A -> right;
        AVLNode* D = B -> left;`,`B -> left = A;
        A -> right = D;
        updateHeight(A);
        updateHeight(B);`,`return B; 
    }`,`// LR 先左旋再右旋 
    AVLNode* leftRightRotate(AVLNode* A){
        A -> left = leftRotate(A -> left);
        return rightRotate(A); 
    }`,`// RL 先右旋在左旋 
    AVLNode* rightLeftRotate(AVLNode* A){
        A -> right = rightRotate(A -> right);
        return leftRotate(A); 
    }`,`// 插入操作 
    AVLNode* insertAVLNode(AVLNode* root, int value){
        if (root == nullptr)
            return new AVLNode(value);`,`if (value > root -> value) root -> right = insertAVLNode(root -> right, value);
        else if (value < root -> value) root -> left = insertAVLNode(root -> left, value);
        else{
            return root;
        }`,`return balanceAVLNode(root);
    }`,`// 删除(插入)平衡操作
    AVLNode* balanceAVLNode(AVLNode* root){
        // 更新高度 
        updateHeight(root);
        // 获得平衡因子 
        int balance = getBalanceFactor(root);`,`// 平衡调整
        if (balance > 1 && getBalanceFactor(root -> left) >= 0){
            return rightRotate(root);
        }`,`if (balance > 1 && getBalanceFactor(root -> left) < 0){
            return leftRightRotate(root);
        }`,`if (balance < -1 && getBalanceFactor(root -> right) <= 0){
            return leftRotate(root);
        }`,`if (balance < -1 && getBalanceFactor(root -> right) > 0){
            return rightLeftRotate(root);
        }
        // 不需要调整
        return root;
    }`,`AVLNode* findMinNode(AVLNode* root){
        while (root && root -> left != nullptr)
            root = root -> left;`,`return root;
    }`,`// 删除操作 
    AVLNode* deleteAVLNode(AVLNode* root, int value){
        if (root == nullptr)
            return nullptr;`,`if (value < root -> value) root -> left = deleteAVLNode(root -> left, value);
        else if (value > root -> value) root -> right = deleteAVLNode(root -> right, value);
        else{
            if (root -> left == nullptr){
                AVLNode* temp = root -> right;
                delete root;
                root = temp;
            }
            else if (root -> right == nullptr){
                AVLNode* temp = root -> left;
                delete root;
                root = temp;
            }
            else{
                AVLNode* temp = findMinNode(root -> right);
                root -> value = temp -> value;
                root -> right = deleteAVLNode(root -> right, temp -> value);
            }
        }`,"if (root == nullptr) return nullptr;",`return balanceAVLNode(root);
    }`,`AVLNode* findAVLNode(AVLNode* root, int value){
        if (root == nullptr || root -> value == value)
            return root;`,`if (value > root -> value) return findAVLNode(root -> right, value);
        else return findAVLNode(root -> left, value);
    }`,`// 中序遍历 
    void inorderRecursive(AVLNode* root, vector<int> &res) {
        if (root == nullptr) return;`,`inorderRecursive(root -> left, res);
        res.push_back(root -> value);
        inorderRecursive(root -> right, res);
    }`,`public:
    AVLTree() : root(nullptr) {}`,`void insert(int value){
        root = insertAVLNode(root, value); 
    }`,`void remove(int value){
        root = deleteAVLNode(root, value);
    }`,`bool find(int value){
        return findAVLNode(root, value) != nullptr;
    }`,`// 中序遍历（升序）
    vector<int> inorder() {
        vector<int> result;
        inorderRecursive(root, result);
        return result;
    }`,`int getHeight(int value){
        AVLNode* temp = findAVLNode(root, value);
        return temp != nullptr ? getHeight(temp) : 0;
    }`,`int getBalanceFatcor(int value){
        AVLNode* temp = findAVLNode(root, value);
        return temp != nullptr ? getBalanceFactor(temp) : 0;
    }
};`,`int main() {
    AVLTree tree;`,'cout << "=== 平衡二叉树测试 ===" << endl;',`// 插入测试
    vector<int> values = {50, 30, 70, 20, 40};`,`for (int val: values) {
        cout << "插入数值: ";
        cout << val << " ";
        tree.insert(val);`,`vector<int> in = tree.inorder();
        for (int val1 : in) {
            cout << val1 << ": Height: " << tree.getHeight(val1) << " BalanceFactor " << tree.getBalanceFatcor(val1) << " ";
        }
        cout << endl; 
    }`,`// 插入测试
    values = {30, 70, 40};`,`for (int val: values) {
        cout << "删除数值: ";
        cout << val << " ";
        tree.remove(val);`,`vector<int> in = tree.inorder();
        for (int val1 : in) {
            cout << val1 << ": Height: " << tree.getHeight(val1) << " BalanceFactor " << tree.getBalanceFatcor(val1) << " ";
        }
        cout << endl; 
    } 
    return 0;
}
\`\`\``]},{heading:"五、总结",paragraphs:["**时间复杂度：**",`| 操作 | 时间复杂度 | 说明 |
| --- | --- | --- |
| **查找** | O(log n) | 树高度为 O(log n) |
| **插入** | O(log n) | 查找 + 最多两次旋转 |
| **删除** | O(log n) | 查找 + 最多两次旋转 |
| **旋转** | O(1) | 只涉及常数次指针操作 |
| **空间** | O(n) | 存储n个节点 |`,`1.  **数据库系统**：索引结构保证查询效率
2.  **文件系统**：目录树管理
3.  **编译器**：符号表管理
4.  **实时系统**：保证最坏情况性能
5.  **游戏开发**：场景管理、碰撞检测`,"通过旋转操作，平衡二叉树能够在插入和删除时自动调整结构，确保树的高度始终保持在 O(log n) 级别，从而保证所有操作的高效性。"]}],takeaways:[]},{id:"wp-48",tags:["Unity"],categoryId:"unity",title:"UGUI的输入与事件模块",date:"2025-11-12",cover:"🎮",excerpt:"前言 UGUI把输入事件分为四个模块。分别是 事件数据模块 输入事件捕获模块 射线碰撞检测模块 事件逻辑处理以及回调模块 一、事件数据模块 事件数据模块主要是获得数据，提供数据服务。主要存储了事件发生的位置、事件对应的物体、事件的位移大小。...",sections:[{heading:"前言",paragraphs:["UGUI把输入事件分为四个模块。分别是",`1.  **事件数据模块**
2.  **输入事件捕获模块**
3.  **射线碰撞检测模块**
4.  **事件逻辑处理以及回调模块**`,"![](@img/a0dxub41)"]},{heading:"一、事件数据模块",paragraphs:["事件数据模块主要是**获得数据，提供数据服务**。主要存储了事件发生的位置、事件对应的物体、事件的位移大小。触发事件的输入类型。以及事件的设备信息等。","主要为三个类：`BaseEventData`、`PointerEventData`、`AxisEventData`,分别为事件数据基类，点位事件数据类、滚轮事件数据基类。其中`PointerEventData`和`AxisEventData`都继承于`BaseEventData`。"]},{heading:"1.1 BaseEventData类",paragraphs:["事件数据的基类，有`EventSystem`（事件系统）、`currentInputModule`（当前输入模块）、`selectedObject`（当前选择物体）、`used`(该事件是否被使用)",`\`\`\`csharp
namespace UnityEngine.EventSystems
{
    public abstract class AbstractEventData
    {
        protected bool m_Used; // 是否被使用`,`public virtual void Reset()
        {
            m_Used = false;
        }`,`public virtual void Use()
        {
            m_Used = true;
        }`,`public virtual bool used
        {
            get { return m_Used; }
        }
    }`,`public class BaseEventData : AbstractEventData
    {
        private readonly EventSystem m_EventSystem; // 事件系统
        public BaseEventData(EventSystem eventSystem)
        {
            m_EventSystem = eventSystem;
        }`,`public BaseInputModule currentInputModule // 当前输入模块
        {
            get { return m_EventSystem.currentInputModule; }
        }`,`public GameObject selectedObject // 当前选择物体
        {
            get { return m_EventSystem.currentSelectedGameObject; }
            set { m_EventSystem.SetSelectedGameObject(value, this); }
        }
    }
}
\`\`\``]},{heading:"1.2 AxisEventData类",paragraphs:["其主要存储滚轮的**移动方向**和**移动距离**。",`\`\`\`csharp
namespace UnityEngine.EventSystems
{
    public class AxisEventData : BaseEventData
    {
        public Vector2 moveVector { get; set; } // 移动距离`,"public MoveDirection moveDir { get; set; } // 移动方向",`public AxisEventData(EventSystem eventSystem) : base(eventSystem)
        {
            moveVector = Vector2.zero;
            moveDir = MoveDirection.None;
        }
    }
}
\`\`\``]},{heading:"1.3 PointerEventData类",paragraphs:["```csharp\nusing System;\nusing System.Text;\nusing System.Collections.Generic;",`namespace UnityEngine.EventSystems
{
    /// <summary>
    /// 每次点击事件都会创建一个此类实例
    /// </summary>
    public class PointerEventData : BaseEventData
    {
        // 输入按钮
        public enum InputButton
        {
            Left = 0,
            Right = 1,
            Middle = 2
        }`,`/// <summary>
        /// 按键按下的状态
        /// </summary>
        public enum FramePressState
        {
            // 此帧按下了按键。
            Pressed,
            // 此帧释放了按键。
            Released,
            // 此帧按下并释放了按键。
            PressedAndReleased,
            // 与上一帧相同。
            NotChanged
        }`,`public GameObject pointerEnter { get; set; }
        private GameObject m_PointerPress;
        // 最后一个按下事件的原始 GameObject。这意味着即使它本身不能接收按下事件，它也是“被按下”的 GameObject。
        public GameObject lastPress { get; private set; }`,`//  发生按下事件的对象，即使它不能处理该按下事件。
        public GameObject rawPointerPress { get; set; }
        public GameObject pointerDrag { get; set; }
        public GameObject pointerClick { get; set; }`,`// 与当前事件关联的射线检测结果。
        public RaycastResult pointerCurrentRaycast { get; set; }
        // 与指针按下事件关联的射线检测结果。
        public RaycastResult pointerPressRaycast { get; set; }`,"public List<GameObject> hovered = new List<GameObject>();",`// 当前帧是否可以进行点击。
        public bool eligibleForClick { get; set; }`,`// 此指针事件来源的显示器索引。
        public int displayIndex { get; set; }`,`// 指针的 ID（触摸 ID）。
        public int pointerId { get; set; }`,`// 当前指针位置。
        public Vector2 position { get; set; }`,`// 自上次更新以来的指针移动量。
        public Vector2 delta { get; set; }`,`// 按下时的位置。
        public Vector2 pressPosition { get; set; }`,`/// <summary>
        /// World-space position where a ray cast into the screen hits something
        /// </summary>`,`[Obsolete("Use either pointerCurrentRaycast.worldPosition or pointerPressRaycast.worldPosition")]
        public Vector3 worldPosition { get; set; }`,`/// <summary>
        /// World-space normal where a ray cast into the screen hits something
        /// </summary>
        [Obsolete("Use either pointerCurrentRaycast.worldNormal or pointerPressRaycast.worldNormal")]
        public Vector3 worldNormal { get; set; }`,`// 上次发送点击事件的时间。用于处理双击。
        public float clickTime { get; set; }`,`// 连续点击的次数。
        public int clickCount { get; set; }`,`// /// 自上次更新以来的滚动量。
        public Vector2 scrollDelta { get; set; }`,"public bool useDragThreshold { get; set; }",`// 当前是否正在进行拖拽操作。
        public bool dragging { get; set; }`,`// 此事件的 EventSystems.PointerEventData.InputButton。
        public InputButton button { get; set; }`,`// 当前触摸施加的压力大小。
        public float pressure { get; set; }
        // 应用于触控笔上附加压力敏感控件的压力。
        public float tangentialPressure { get; set; }`,`// 触控笔相对于表面的角度（以弧度表示）。
        public float altitudeAngle { get; set; }`,`// 值为 0 表示触控笔与表面平行。值为 pi/2 表示它与表面垂直。
        public float azimuthAngle { get; set; }`,`// 触控笔相对于 x 轴的角度（以弧度表示）。
        public float twist { get; set; }`,`// 指定触控笔相对于 X 和 Y 轴的角度（以弧度表示）
        public Vector2 tilt { get; set; }`,`// 指定触控笔的状态。例如，触控笔是否与屏幕或数位板接触，触控笔是否倒置，以及是否有按键被按下。
        public PenStatus penStatus { get; set; }`,`// 触摸半径的估计值。
        public Vector2 radius { get; set; }`,`// 触摸半径的精确度。
        public Vector2 radiusVariance { get; set; }`,`// 在指针退出的情况下，指定指针是完全退出了区域还是刚刚进入了子对象。
        public bool fullyExited { get; set; }`,`// 在指针进入的情况下，指定指针是进入了一个新区域还是在离开子对象后刚刚重新进入了父对象。
        public bool reentered { get; set; }`,`public PointerEventData(EventSystem eventSystem) : base(eventSystem)
        {
            eligibleForClick = false;`,`displayIndex = 0;
            pointerId = -1;
            position = Vector2.zero; // Current position of the mouse or touch event
            delta = Vector2.zero; // Delta since last update
            pressPosition = Vector2.zero; // Delta since the event started being tracked
            clickTime = 0.0f; // The last time a click event was sent out (used for double-clicks)
            clickCount = 0; // Number of clicks in a row. 2 for a double-click for example.`,`scrollDelta = Vector2.zero;
            useDragThreshold = true;
            dragging = false;
            button = InputButton.Left;`,`pressure = 0f;
            tangentialPressure = 0f;
            altitudeAngle = 0f;
            azimuthAngle = 0f;
            twist = 0f;
            tilt = new Vector2(0f, 0f);
            penStatus = PenStatus.None;
            radius = Vector2.zero;
            radiusVariance = Vector2.zero;
        }`,`// 指针是否正在移动。
        public bool IsPointerMoving()
        {
            return delta.sqrMagnitude > 0.0f;
        }`,`// 输入设备是否正在滚动。
        public bool IsScrolling()
        {
            return scrollDelta.sqrMagnitude > 0.0f;
        }`,`// 与最后一次 OnPointerEnter 事件关联的摄像机。
        public Camera enterEventCamera
        {
            get { return pointerCurrentRaycast.module == null ? null : pointerCurrentRaycast.module.eventCamera; }
        }`,`// 与最后一次 OnPointerPress 事件关联的摄像机。
        public Camera pressEventCamera
        {
            get { return pointerPressRaycast.module == null ? null : pointerPressRaycast.module.eventCamera; }
        }`,`// 接收到 OnPointerDown 事件的 GameObject。
        public GameObject pointerPress
        {
            get { return m_PointerPress; }
            set
            {
                if (m_PointerPress == value)
                    return;`,`lastPress = m_PointerPress;
                m_PointerPress = value;
            }
        }`,`public override string ToString()
        {
            var sb = new StringBuilder();
            sb.AppendLine("<b>Position</b>: " + position);
            sb.AppendLine("<b>delta</b>: " + delta);
            sb.AppendLine("<b>eligibleForClick</b>: " + eligibleForClick);
            sb.AppendLine("<b>pointerEnter</b>: " + pointerEnter);
            sb.AppendLine("<b>pointerPress</b>: " + pointerPress);
            sb.AppendLine("<b>lastPointerPress</b>: " + lastPress);
            sb.AppendLine("<b>pointerDrag</b>: " + pointerDrag);
            sb.AppendLine("<b>Use Drag Threshold</b>: " + useDragThreshold);
            sb.AppendLine("<b>Current Raycast:</b>");
            sb.AppendLine(pointerCurrentRaycast.ToString());
            sb.AppendLine("<b>Press Raycast:</b>");
            sb.AppendLine(pointerPressRaycast.ToString());
            sb.AppendLine("<b>Display Index:</b>");
            sb.AppendLine(displayIndex.ToString());
            sb.AppendLine("<b>pressure</b>: " + pressure);
            sb.AppendLine("<b>tangentialPressure</b>: " + tangentialPressure);
            sb.AppendLine("<b>altitudeAngle</b>: " + altitudeAngle);
            sb.AppendLine("<b>azimuthAngle</b>: " + azimuthAngle);
            sb.AppendLine("<b>twist</b>: " + twist);
            sb.AppendLine("<b>tilt</b>: " + tilt);
            sb.AppendLine("<b>penStatus</b>: " + penStatus);
            sb.AppendLine("<b>radius</b>: " + radius);
            sb.AppendLine("<b>radiusVariance</b>: " + radiusVariance);
            return sb.ToString();
        }
    }
}
\`\`\``]},{heading:"二、输入事件捕获模块",paragraphs:["输入事件捕获模块主要由四个类组成，`BaseInputModule(抽象基类)`、`PointerInputMoudle`、`StandaloneInputModule`、`TouchInputModule`","1.  `PointerInputModule`继承了`BaseInputModule`,拓展了关于**点位**的输入逻辑，也增加了输入的类型和状态\n2.  `StandaloneInputModule`继承了`PointerInputModule`,并向标准键盘、鼠标方向拓展。\n3.  `TouchInputModule`向触控板输入方向拓展。"]},{heading:"2.1 ProcessMouseEvent函数",paragraphs:["`StandaloneInputModule`的主函数`ProcessMouseEvent（主要由PointerInputModule和StandaloneInputModule）`:从鼠标键盘输入事件上扩展了输入的逻辑，处理了鼠标的按下，移动，滚轮，拖拽的操作事件。其中`ProcessMousePress`、`ProcessMove`、`ProcessDrag`。从`EventSystem`中调用的",`\`\`\`csharp
        protected void ProcessMouseEvent(int id)
        {
            // mouseState: 鼠标状态
            MouseState mouseData = GetMousePointerEventData(id);
            //  MouseButtonEventData：鼠标按钮状态（包括PointerEventData）
            MouseButtonEventData leftButtonData = mouseData.GetButtonState(PointerEventData.InputButton.Left).eventData;
       // 左键点击的物体设置为当前聚焦物体
            m_CurrentFocusedGameObject = leftButtonData.buttonData.pointerCurrentRaycast.gameObject;`,`// 处理鼠标左键按下，移动，拖拽事件
            ProcessMousePress(leftButtonData);
            ProcessMove(leftButtonData.buttonData);
            ProcessDrag(leftButtonData.buttonData);`,`// 处理鼠标右键和中间按下，拖拽事件
            ProcessMousePress(mouseData.GetButtonState(PointerEventData.InputButton.Right).eventData);
            ProcessDrag(mouseData.GetButtonState(PointerEventData.InputButton.Right).eventData.buttonData);
            ProcessMousePress(mouseData.GetButtonState(PointerEventData.InputButton.Middle).eventData);
            ProcessDrag(mouseData.GetButtonState(PointerEventData.InputButton.Middle).eventData.buttonData);`,`// 左键滚动
            if (!Mathf.Approximately(leftButtonData.buttonData.scrollDelta.sqrMagnitude, 0.0f))
            {
                var scrollHandler = ExecuteEvents.GetEventHandler<IScrollHandler>(leftButtonData.buttonData.pointerCurrentRaycast.gameObject);
                ExecuteEvents.ExecuteHierarchy(scrollHandler, leftButtonData.buttonData, ExecuteEvents.scrollHandler);
            }
        }
\`\`\``,"`ProcessMousePress`:处理鼠标按下事件的代码，同时也处理鼠标抬起的操作，以及处理了拖拽抬起与结束的事件。在调用处理相关句柄的前后，事件数据都会被保存在 `pointerEvent` 中，然后被传递给业务层中设置的输入事件句柄。",`\`\`\`csharp
    protected void ProcessMousePress(MouseButtonEventData data)
        {
            var pointerEvent = data.buttonData;
            var currentOverGo = pointerEvent.pointerCurrentRaycast.gameObject;`,`// 如果当前按下是当前帧时
            if (data.PressedThisFrame())
            {
                pointerEvent.eligibleForClick = true;
                pointerEvent.delta = Vector2.zero;
                pointerEvent.dragging = false;
                pointerEvent.useDragThreshold = true;
                pointerEvent.pressPosition = pointerEvent.position;
                pointerEvent.pointerPressRaycast = pointerEvent.pointerCurrentRaycast;`,"DeselectIfSelectionChanged(currentOverGo, pointerEvent);",`var resetDiffTime = Time.unscaledTime - pointerEvent.clickTime;
                if (resetDiffTime >= doubleClickTime)
                {
                    pointerEvent.clickCount = 0;
                }`,`// 搜索将接收按压的控件
        //如果找不到按压处理程序，则将按压处理程序设置为会接收点击的控件。
                var newPressed = ExecuteEvents.ExecuteHierarchy(currentOverGo, pointerEvent, ExecuteEvents.pointerDownHandler);
                // 判断当前gameobject是否有IPointerClickHandler接口
                var newClick = ExecuteEvents.GetEventHandler<IPointerClickHandler>(currentOverGo);`,`if (newPressed == null)
                    newPressed = newClick;`,"float time = Time.unscaledTime;",`// 计算连击次数 
                if (newPressed == pointerEvent.lastPress)
                {
                    var diffTime = time - pointerEvent.clickTime;
                    if (diffTime < doubleClickTime) // doubleClickTime: 0.3f
                        ++pointerEvent.clickCount;
                    else
                        pointerEvent.clickCount = 1;`,`pointerEvent.clickTime = time;
                }
                else
                {
                    pointerEvent.clickCount = 1;
                }
        // pointerEvent赋值
                pointerEvent.pointerPress = newPressed;
                pointerEvent.rawPointerPress = currentOverGo;
                pointerEvent.pointerClick = newClick;`,"pointerEvent.clickTime = time;",`// 获取IDragHandler接口
                pointerEvent.pointerDrag = ExecuteEvents.GetEventHandler<IDragHandler>(currentOverGo);`,`// 执行拖拽启动事件
                if (pointerEvent.pointerDrag != null)
                    ExecuteEvents.Execute(pointerEvent.pointerDrag, pointerEvent, ExecuteEvents.initializePotentialDrag);`,`m_InputPointerEvent = pointerEvent;
            }`,`// 抬起鼠标通知
            if (data.ReleasedThisFrame())
            {
                ReleaseMouse(pointerEvent, currentOverGo);
            }
        }
\`\`\``,"`ProcessDrag`（PointerInputModule）拖拽句柄处理函数，拖拽开始事件处理，判断结束拖拽事件，以及拖拽句柄调用。",`\`\`\`csharp
 protected virtual void ProcessDrag(PointerEventData pointerEvent)
        {
            if (!pointerEvent.IsPointerMoving() ||
                Cursor.lockState == CursorLockMode.Locked ||
                pointerEvent.pointerDrag == null)
                return;`,`// 开始拖拽句柄
            if (!pointerEvent.dragging
                && ShouldStartDrag(pointerEvent.pressPosition, pointerEvent.position, eventSystem.pixelDragThreshold, pointerEvent.useDragThreshold))
            {
                ExecuteEvents.Execute(pointerEvent.pointerDrag, pointerEvent, ExecuteEvents.beginDragHandler);
                pointerEvent.dragging = true;
            }`,`// 拖拽通知
            if (pointerEvent.dragging)
            {
                // 如果按下的物体和拖拽的物体不是同一个则视为抬起拖拽，并清除前面按下时的标记
                if (pointerEvent.pointerPress != pointerEvent.pointerDrag)
                {
                    ExecuteEvents.Execute(pointerEvent.pointerPress, pointerEvent, ExecuteEvents.pointerUpHandler);`,`pointerEvent.eligibleForClick = false;
                    pointerEvent.pointerPress = null;
                    pointerEvent.rawPointerPress = null;
                }`,`// 执行拖拽中句柄
                ExecuteEvents.Execute(pointerEvent.pointerDrag, pointerEvent, ExecuteEvents.dragHandler);
            }
        }
\`\`\``,"`ProcessMove` 则相对简单点，每帧都会直接调用处理句柄(`IPointerMoveHandler`)。","```csharp\nprotected virtual void ProcessMove(PointerEventData pointerEvent)\n{\n    var targetGO = pointerEvent.pointerCurrentRaycast.gameObject;\n    HandlePointerExitAndEnter(pointerEvent, targetGO);\n}\n```"]},{heading:"2.2 ProcessTouchEvents函数",paragraphs:["`TouchInputModule`触屏模块的主要函数`ProcessTouchEvents`",`\`\`\`csharp
    // 处理所有触屏事件
    private bool ProcessTouchEvents()
        {
            for (int i = 0; i < input.touchCount; ++i)
            {
                Touch touch = input.GetTouch(i);`,`if (touch.type == TouchType.Indirect)
                    continue;`,`bool released;
                bool pressed;
                var pointer = GetTouchPointerEventData(touch, out pressed, out released);`,"ProcessTouchPress(pointer, pressed, released);",`if (!released)
                {
                    ProcessMove(pointer);
                    ProcessDrag(pointer);
                }
                else
                    RemovePointerData(pointer);
            }
            return input.touchCount > 0;
        }
\`\`\``]},{heading:"2.3 ExecuteEvents类",paragraphs:["`ExecuteEvents`类主要是用来获得对应的句柄，然后执行对应的接口。主要依靠 `ExecuteEvents.ExecuteHierarchy，ExecuteEvents.Execute`,其会获得该物体所有父物体(包括自己),然后依次获得对应`IHandler`,执行句柄。",`\`\`\`csharp
        public static GameObject ExecuteHierarchy<T>(GameObject root, BaseEventData eventData, EventFunction<T> callbackFunction) where T : IEventSystemHandler
        {
            // 获得父物体（包括自己）
            GetEventChain(root, s_InternalTransformList);`,`var internalTransformListCount = s_InternalTransformList.Count;
            for (var i = 0; i < internalTransformListCount; i++)
            {
                var transform = s_InternalTransformList[i];
                if (Execute(transform.gameObject, eventData, callbackFunction))
                    return transform.gameObject;
            }
            return null;
        }`,`public static bool Execute<T>(GameObject target, BaseEventData eventData, EventFunction<T> functor) where T : IEventSystemHandler
        {
            var internalHandlers = ListPool<IEventSystemHandler>.Get();
            GetEventList<T>(target, internalHandlers);`,`var internalHandlersCount = internalHandlers.Count;
            for (var i = 0; i < internalHandlersCount; i++)
            {
                T arg;
                try
                {
                    arg = (T)internalHandlers[i];
                }
                catch (Exception e)
                {
                    var temp = internalHandlers[i];
                    Debug.LogException(new Exception(string.Format("Type {0} expected {1} received.", typeof(T).Name, temp.GetType().Name), e));
                    continue;
                }`,`try
                {
                    functor(arg, eventData);
                }
                catch (Exception e)
                {
                    Debug.LogException(e);
                }
            }`,`var handlerCount = internalHandlers.Count;
            ListPool<IEventSystemHandler>.Release(internalHandlers);
            return handlerCount > 0;
        }
\`\`\``]},{heading:"三、射线碰撞检测模块",paragraphs:["射线碰撞检测模块主要工作是从摄像机的屏幕位置上，做射线碰撞检测并获取碰撞结果，把结果返回给事件逻辑处理类，由事件处理模块处理事件。","射线碰撞检测模块主要为3个类，分别作用于`2D`射线碰撞检测，`3D`射线碰撞检测，`GraphicRaycaster`图形射线碰撞检测。","`2D`和`3D`射线碰撞检测主要为`Physics2DRaycaster`和`PhysicsRaycaster`,用射线的形式进行碰撞检测，区别在`2D`碰撞结果里预留了`2D`的层级次序以便在后面的碰撞结果排序时，以这个层级次序为依据做排序，而`3D`的碰撞检测结果则是以距离大小为依据排序的。","`GraphicRaycaster`是 为UGUI元素点位检测的类，放在**Core渲染模块中**，主要针对`ScreenSpaceOverlay`模式下输入点位（位置进行判断）做碰撞检测，不依赖于射线碰撞。而是遍历所有可点击的UGUI元素来检测比较。","`GraphicRaycaster`对每个可以点击的元素(`raycasterTarget`是否为true, 并且depth不为-1，为可点击元素)进行计算，判断点位是否落在该元素上，再通过depth变量排序，判断最先落在那个元素上。",`\`\`\`csharp
public override void Raycast(PointerEventData eventData, List<RaycastResult> resultAppendList)
        {
            if (canvas == null)
                return;`,`// 获得canvas下注册过raycaster事件的Graphic
            var canvasGraphics = GraphicRegistry.GetRaycastableGraphicsForCanvas(canvas);
            if (canvasGraphics == null || canvasGraphics.Count == 0)
                return;`,`int displayIndex;
            var currentEventCamera = eventCamera;`,`if (canvas.renderMode == RenderMode.ScreenSpaceOverlay || currentEventCamera == null)
                displayIndex = canvas.targetDisplay;
            else
                displayIndex = currentEventCamera.targetDisplay;`,`// 进行多平台检测
            Vector3 eventPosition = MultipleDisplayUtilities.RelativeMouseAtScaled(eventData.position);
            if (eventPosition == Vector3.zero)
            {
                eventPosition = eventData.position;
#if UNITY_EDITOR
                eventPosition.z = Display.activeEditorGameViewTarget;
#endif
#if ENABLE_INPUT_SYSTEM && PACKAGE_INPUTSYSTEM
                eventPosition.z = eventData.displayIndex;
#endif
                if ((int) eventPosition.z != displayIndex)
                    return;`,`// Convert to view space
            Vector2 pos;
            if (currentEventCamera == null)
            {`,`float w = Screen.width;
                float h = Screen.height;
                if (displayIndex > 0 && displayIndex < Display.displays.Length)
                {
                    w = Display.displays[displayIndex].systemWidth;
                    h = Display.displays[displayIndex].systemHeight;
                }
                pos = new Vector2(eventPosition.x / w, eventPosition.y / h);
            }
            else
                pos = currentEventCamera.ScreenToViewportPoint(eventPosition);`,`// If it's outside the camera's viewport, do nothing
            if (pos.x < 0f || pos.x > 1f || pos.y < 0f || pos.y > 1f)
                return;`,"float hitDistance = float.MaxValue;","Ray ray = new Ray();",`if (currentEventCamera != null)
                ray = currentEventCamera.ScreenPointToRay(eventPosition);`,`if (canvas.renderMode != RenderMode.ScreenSpaceOverlay && blockingObjects != BlockingObjects.None)
            {
                float distanceToClipPlane = 100.0f;`,`if (currentEventCamera != null)
                {
                    float projectionDirection = ray.direction.z;
                    distanceToClipPlane = Mathf.Approximately(0.0f, projectionDirection)
                        ? Mathf.Infinity
                        : Mathf.Abs((currentEventCamera.farClipPlane - currentEventCamera.nearClipPlane) / projectionDirection);
                }
#if PACKAGE_PHYSICS
                if (blockingObjects == BlockingObjects.ThreeD || blockingObjects == BlockingObjects.All)
                {
                    if (ReflectionMethodsCache.Singleton.raycast3D != null)
                    {
                        var hits = ReflectionMethodsCache.Singleton.raycast3DAll(ray, distanceToClipPlane, (int)m_BlockingMask);
                        if (hits.Length > 0)
                            hitDistance = hits[0].distance;
                    }
                }
#endif
#if PACKAGE_PHYSICS2D
                if (blockingObjects == BlockingObjects.TwoD || blockingObjects == BlockingObjects.All)
                {
                    if (ReflectionMethodsCache.Singleton.raycast2D != null)
                    {
                        var hits = ReflectionMethodsCache.Singleton.getRayIntersectionAll(ray, distanceToClipPlane, (int)m_BlockingMask);
                        if (hits.Length > 0)
                            hitDistance = hits[0].distance;
                    }
                }
#endif
            }`,"m_RaycastResults.Clear();","Raycast(canvas, currentEventCamera, eventPosition, canvasGraphics, m_RaycastResults);",`int totalCount = m_RaycastResults.Count;
            for (var index = 0; index < totalCount; index++)
            {
                var go = m_RaycastResults[index].gameObject;
                bool appendGraphic = true;`,`if (ignoreReversedGraphics)
                {
                    if (currentEventCamera == null)
                    {
                        var dir = go.transform.rotation * Vector3.forward;
                        appendGraphic = Vector3.Dot(Vector3.forward, dir) > 0;
                    }
                    else
                    {
                        var cameraForward = currentEventCamera.transform.rotation * Vector3.forward * currentEventCamera.nearClipPlane;
                        appendGraphic = Vector3.Dot(go.transform.position - currentEventCamera.transform.position - cameraForward, go.transform.forward) >= 0;
                    }
                }`,`if (appendGraphic)
                {
                    float distance = 0;
                    Transform trans = go.transform;
                    Vector3 transForward = trans.forward;`,`if (currentEventCamera == null || canvas.renderMode == RenderMode.ScreenSpaceOverlay)
                        distance = 0;
                    else
                    {
                        // http://geomalgorithms.com/a06-_intersect-2.html
                        distance = (Vector3.Dot(transForward, trans.position - ray.origin) / Vector3.Dot(transForward, ray.direction));`,`// Check to see if the go is behind the camera.
                        if (distance < 0)
                            continue;
                    }`,`if (distance >= hitDistance)
                        continue;`,`var castResult = new RaycastResult
                    {
                        gameObject = go,
                        module = this,
                        distance = distance,
                        screenPosition = eventPosition,
                        displayIndex = displayIndex,
                        index = resultAppendList.Count,
                        depth = m_RaycastResults[index].depth,
                        sortingLayer = canvas.sortingLayerID,
                        sortingOrder = canvas.sortingOrder,
                        worldPosition = ray.origin + ray.direction * distance,
                        worldNormal = -transForward
                    };
                    resultAppendList.Add(castResult);
                }
            }
        }
\`\`\``]},{heading:"四、事件逻辑处理模块",paragraphs:["事件逻辑处理模块主要在**EventSystem**类中，其余的类都是对他起辅助作用。","`EventInterfaces`，`EventTrigger`，`EventTriggerType` 定义了事件回调函数，`ExecuteEvents` 编写了所有执行事件的回调接口。","**EventSystem** 主逻辑里基本上都在处理由射线碰撞检测后引起的各类事件。判断事件是否成立，成立则发起事件回调，不成立则继续轮询检查，等待事件的发生。","**EventSystem** 是事件处理模块中唯一继承 `MonoBehavior` 并且有在 Update 帧循环中做轮询的。也就是说，所有`UI`事件的发生都是通过 **EventSystem** 轮询监测到的并且实施的。EventSystem 通过调用输入事件检测模块，检测碰撞模块，来形成自己主逻辑部分。因此可以说 **EventSystem** 是主逻辑类，是整个事件模块的入口。"]}],takeaways:[]},{id:"wp-49",tags:["Unity"],categoryId:"unity",title:"UGUI核心源码剖析",date:"2025-11-12",cover:"🎮",excerpt:"前言 Core模块主要为Culling（裁剪）、Layout（布局）、MaterialModifiers（材质球修改器）、SpecializedCollection（收集），Utility(实用工具)、vc（顶点修改器）。 一、Cullin...",sections:[{heading:"前言",paragraphs:["![](@img/ymwb72nb)","`Core`模块主要为Culling（裁剪）、Layout（布局）、MaterialModifiers（材质球修改器）、SpecializedCollection（收集），Utility(实用工具)、vc（顶点修改器）。"]},{heading:"一、Culling裁剪模块",paragraphs:["![](@img/1j84gz1b)","**Culling**是对模型裁剪的工具类，大都用到Mask遮罩上，只要Mask才有裁剪的需求。Cliping类FindCullAndClipWorldRect就是将很多 RectMask2D 重叠部分，计算出它们的重叠部分的区域。",`\`\`\`csharp
        public static Rect FindCullAndClipWorldRect(List<RectMask2D> rectMaskParents, out bool validRect)
        {
            if (rectMaskParents.Count == 0)
            {
                validRect = false;
                return new Rect();
            }`,`Rect current = rectMaskParents[0].canvasRect;
            Vector4 offset = rectMaskParents[0].padding;
            float xMin = current.xMin + offset.x;
            float xMax = current.xMax - offset.z;
            float yMin = current.yMin + offset.y;
            float yMax = current.yMax - offset.w;`,`var rectMaskParentsCount = rectMaskParents.Count;
            for (var i = 1; i < rectMaskParentsCount; ++i)
            {
                current = rectMaskParents[i].canvasRect;
                offset = rectMaskParents[i].padding;
                if (xMin < current.xMin + offset.x)
                    xMin = current.xMin + offset.x;
                if (yMin < current.yMin + offset.y)
                    yMin = current.yMin + offset.y;
                if (xMax > current.xMax - offset.z)
                    xMax = current.xMax - offset.z;
                if (yMax > current.yMax - offset.w)
                    yMax = current.yMax - offset.w;
            }`,"validRect = xMax > xMin && yMax > yMin;\n            return validRect ? new Rect(xMin, yMin, xMax - xMin, yMax - yMin) : new Rect();\n        }\n```"]},{heading:"二、Layout布局模块",paragraphs:["![](@img/4num4how)","Layout主要功能是布局方面的，包括横向布局，纵向布局，方格布局等。","除了布局内容之外，其余还有3个文件，`CanvasScaler`，`AspectRatioFitter`，`ContentSizeFitter`是调整自适应功能。","`ContentSizeFitter`处理的是内容自适应，AspectRatioFitter是朝向自适应，其中包括以长度为基准，以宽度为基准，以父节点为基准，以外层父节点为基准的四种自适应方式。","CanvasScaler操作的是Canvas整个画布针对不同的屏幕进行自适应调整。一共有三种ScreenMathMode模式，不同模式对应屏幕不同的适应算法。包括`优先匹配长或宽`，`最小化固定拉伸`，`最大化固定拉伸`",`\`\`\`csharp
        // 处理不同的ScaleMode
        protected virtual void Handle()
        {
            if (m_Canvas == null || !m_Canvas.isRootCanvas)
                return;`,`if (m_Canvas.renderMode == RenderMode.WorldSpace)
            {
                HandleWorldCanvas();
                return;
            }`,`switch (m_UiScaleMode)
            {
                case ScaleMode.ConstantPixelSize: HandleConstantPixelSize(); break;
                case ScaleMode.ScaleWithScreenSize: HandleScaleWithScreenSize(); break;
                case ScaleMode.ConstantPhysicalSize: HandleConstantPhysicalSize(); break;
            }
        }`,`// 处理缩放根据ScreenSize
        protected virtual void HandleScaleWithScreenSize()
        {
            Vector2 screenSize = m_Canvas.renderingDisplaySize;`,`// Multiple display support only when not the main display. For display 0 the reported
            // resolution is always the desktops resolution since its part of the display API,
            // so we use the standard none multiple display method. (case 741751)
            int displayIndex = m_Canvas.targetDisplay;
            if (displayIndex > 0 && displayIndex < Display.displays.Length)
            {
                Display disp = Display.displays[displayIndex];
                screenSize = new Vector2(disp.renderingWidth, disp.renderingHeight);
            }`,`float scaleFactor = 0;
            switch (m_ScreenMatchMode)
            {
                case ScreenMatchMode.MatchWidthOrHeight:
                {
                    // We take the log of the relative width and height before taking the average.
                    // Then we transform it back in the original space.
                    // the reason to transform in and out of logarithmic space is to have better behavior.
                    // If one axis has twice resolution and the other has half, it should even out if widthOrHeight value is at 0.5.
                    // In normal space the average would be (0.5 + 2) / 2 = 1.25
                    // In logarithmic space the average is (-1 + 1) / 2 = 0
                    float logWidth = Mathf.Log(screenSize.x / m_ReferenceResolution.x, kLogBase);
                    float logHeight = Mathf.Log(screenSize.y / m_ReferenceResolution.y, kLogBase);
                    float logWeightedAverage = Mathf.Lerp(logWidth, logHeight, m_MatchWidthOrHeight);
                    scaleFactor = Mathf.Pow(kLogBase, logWeightedAverage);
                    break;
                }
                case ScreenMatchMode.Expand:
                {
                    scaleFactor = Mathf.Min(screenSize.x / m_ReferenceResolution.x, screenSize.y / m_ReferenceResolution.y);
                    break;
                }
                case ScreenMatchMode.Shrink:
                {
                    scaleFactor = Mathf.Max(screenSize.x / m_ReferenceResolution.x, screenSize.y / m_ReferenceResolution.y);
                    break;
                }
            }`,"SetScaleFactor(scaleFactor);\n            SetReferencePixelsPerUnit(m_ReferencePixelsPerUnit);\n        }\n```"]},{heading:"三、VertexModifiers顶点修改器类",paragraphs:["![](@img/amvabqf9)","`VertexModifiers`主要用于修改图形网格，尤其是在UI元素网格生成完毕后进行二次修改。","其中BaseMeshEffect是抽象基类， 提供所有在修改UI元素网格时所需要的变量和接口。","`IMeshModifier`是关键接口，**渲染核心类Graphic**中会获取所有拥有这个接口的组件，然后依次遍历并调用**ModifyMesh**接口来触发改变图像网格的效果。","Outline(包边框)，Shadow(阴影)，PositionAsUV1(位置UV) 都继承了 BaseMeshEffect 基类，并实现了关键接口 ModifyMesh。其中 Outline 继承自 Shadow。","**核心代码：**在原有的Mesh顶点基础上，加入新的顶点，这些新的顶点复制了原来的顶点数据，修改颜色并向外扩充，使得原图形外渲染出外描边或者阴影","```csharp\n        protected void ApplyShadowZeroAlloc(List<UIVertex> verts, Color32 color, int start, int end, float x, float y)\n        {\n            UIVertex vt;",`var neededCapacity = verts.Count + end - start;
            if (verts.Capacity < neededCapacity)
                verts.Capacity = neededCapacity;`,`for (int i = start; i < end; ++i)
            {
                vt = verts[i];
                verts.Add(vt);`,`Vector3 v = vt.position;
                v.x += x;
                v.y += y;
                vt.position = v;
                var newColor = color;
                if (m_UseGraphicAlpha)
                    newColor.a = (byte)((newColor.a * verts[i].color.a) / 255);
                vt.color = newColor;
                verts[i] = vt;
            }
        }
\`\`\``]},{heading:"四、工具类",paragraphs:["![](@img/dmb43tqw)","`MaterialModifiers`(材质球修改器), `SpecializedCollections`（特殊收集器）, `Utility`（使用工具）是其他模块所依赖的工具。","`IMaterialModifier` 是一个接口类，为`Mask` 遮罩修改材质球所准备的，但所用方法都需要各自实现","`IndexedSet` 是一个容器，在很多核心代码上都有使用，它加速了移除元素的速度，以及加速了元素包含判断。","`ListPool`是`List`容器对象池，`ObjectPool`是普通对象池，很多代码上都用到了它们，对象池让内存利用率更高。","`VertexHelper` 特别重要，它是用来存储生成 `Mesh` 网格需要的所有数据，由于在`Mesh`生成的过程中顶点的生成频率非常高，因此 `VertexHelper` 存储了 `Mesh` 的所有相关数据的同时，用上面提到的`ListPool`和`ObjectPool`做为对象池来生成和销毁，使得数据高效得被重复利用，不过它并不负责计算和生成 Mesh，计算和生成由各自图形组件来完成，它只为它们提供计算后的数据存储服务。"]},{heading:"五、核心渲染类",paragraphs:["我们常用的`Image、RawImage、Mask、RectMask2D、Text、InputField`中，Image，RawImage，Text都是继承了MaskableGraphic，而`MaskableGraphic`又继承自`Graphic`类。除了这几个类外， CanvasUpdateRegistry是存储和管理所有课绘制元素大的管理类。其中**Graphic类**非常重要，是基础类也存在核心算法。"]},{heading:"5.1 Graphic.SetAllDirty()",paragraphs:[`-   **SetLayoutDirty：** 设置布局脏数据
-   **SetMaterialDirty：** 设置材质球脏数据
-   **SetVerticesDirty：**设置顶点脏数据
-   **SetRaycastDirty：**设置射线脏数据`,"`SetLayoutDirty`、`SetMaterialDirty`、`SetVerticesDirty`都调用了**CanvasUpdateRegistry.RegisterCanvasElementForGraphicRebuild**，它被调用时可以认为是通知它去重新重构Mesh，但它并没有立即重新构建，而是将需要重构的元件数据加入到**IndexedSet**容器中，等待下次重构。",`\`\`\`csharp
        public virtual void SetAllDirty()
        {
            if (m_SkipLayoutUpdate)
            {
                m_SkipLayoutUpdate = false;
            }
            else
            {
                SetLayoutDirty();
            }`,`if (m_SkipMaterialUpdate)
            {
                m_SkipMaterialUpdate = false;
            }
            else
            {
                SetMaterialDirty();
            }`,`SetVerticesDirty();
            SetRaycastDirty();
        }`,`// 设置布局脏数据
        public virtual void SetLayoutDirty()
        {
            if (!IsActive())
                return;`,"LayoutRebuilder.MarkLayoutForRebuild(rectTransform);",`if (m_OnDirtyLayoutCallback != null)
                m_OnDirtyLayoutCallback();
        }`,`// 设置材质球脏数据
        public virtual void SetMaterialDirty()
        {
            if (!IsActive())
                return;`,`m_MaterialDirty = true;
            CanvasUpdateRegistry.RegisterCanvasElementForGraphicRebuild(this);`,`if (m_OnDirtyMaterialCallback != null)
                m_OnDirtyMaterialCallback();
        }`,`// 设置顶点脏数据 
    public virtual void SetVerticesDirty()
        {
            if (!IsActive())
                return;`,`m_VertsDirty = true;
            CanvasUpdateRegistry.RegisterCanvasElementForGraphicRebuild(this);`,`if (m_OnDirtyVertsCallback != null)
                m_OnDirtyVertsCallback();
        }`,`// 设置raycast响应事件脏数据
        public void SetRaycastDirty()
        {
            if (m_RaycastTargetCache != m_RaycastTarget)
            {
                if (m_RaycastTarget && isActiveAndEnabled)
                    GraphicRegistry.RegisterRaycastGraphicForCanvas(canvas, this);`,`else if (!m_RaycastTarget)
                    GraphicRegistry.UnregisterRaycastGraphicForCanvas(canvas, this);
            }
            m_RaycastTargetCache = m_RaycastTarget;
        }
\`\`\``]},{heading:"5.2 CanvasUpdateRegistry() 重构Mesh",paragraphs:["**CanvasUpdateRegistry：**负责重构Mesh网格。","```csharp\n        // IndexedSet:重构数据\n    private readonly IndexedSet<ICanvasElement> m_GraphicRebuildQueue = new IndexedSet<ICanvasElement>();",`public static void RegisterCanvasElementForGraphicRebuild(ICanvasElement element)
        {
            instance.InternalRegisterCanvasElementForGraphicRebuild(element);
        }`,`public static bool TryRegisterCanvasElementForGraphicRebuild(ICanvasElement element)
        {
            return instance.InternalRegisterCanvasElementForGraphicRebuild(element);
        }`,`private bool InternalRegisterCanvasElementForGraphicRebuild(ICanvasElement element)
        {
            if (m_PerformingGraphicUpdate)
            {
                Debug.LogError(string.Format("Trying to add {0} for graphic rebuild while we are already inside a graphic rebuild loop. This is not supported.", element));
                return false;
            }`,"return m_GraphicRebuildQueue.AddUnique(element);\n        }\n```"]},{heading:"5.3 Graphic.PerformUpdate()",paragraphs:["重构调用中的逻辑，先将需要重新布局的元素取出来一个个调用Rebuild函数，在对布局的元素进行裁剪，裁剪后对布局中每个需要重构的元素取出来调用Rebuild函数进行重构。",`\`\`\`csharp
        private static readonly Comparison<ICanvasElement> s_SortLayoutFunction = SortLayoutList;
        private void PerformUpdate()
        {
            UISystemProfilerApi.BeginSample(UISystemProfilerApi.SampleType.Layout);
            CleanInvalidItems();`,"m_PerformingLayoutUpdate = true;",`m_LayoutRebuildQueue.Sort(s_SortLayoutFunction);
       // 布局重构
            for (int i = 0; i <= (int)CanvasUpdate.PostLayout; i++)
            {
                UnityEngine.Profiling.Profiler.BeginSample(m_CanvasUpdateProfilerStrings[i]);`,`for (int j = 0; j < m_LayoutRebuildQueue.Count; j++)
                {
                    var rebuild = m_LayoutRebuildQueue[j];
                    try
                    {
                        if (ObjectValidForUpdate(rebuild))
                            rebuild.Rebuild((CanvasUpdate)i);
                    }
                    catch (Exception e)
                    {
                        Debug.LogException(e, rebuild.transform);
                    }
                }
                UnityEngine.Profiling.Profiler.EndSample();
            }`,`for (int i = 0; i < m_LayoutRebuildQueue.Count; ++i)
                m_LayoutRebuildQueue[i].LayoutComplete();`,`m_LayoutRebuildQueue.Clear();
            m_PerformingLayoutUpdate = false;
            UISystemProfilerApi.EndSample(UISystemProfilerApi.SampleType.Layout);
            UISystemProfilerApi.BeginSample(UISystemProfilerApi.SampleType.Render);
        // 裁剪
            // now layout is complete do culling...
            UnityEngine.Profiling.Profiler.BeginSample(m_CullingUpdateProfilerString);
            ClipperRegistry.instance.Cull();
            UnityEngine.Profiling.Profiler.EndSample();`,`// 元素重构
            m_PerformingGraphicUpdate = true;
            for (var i = (int)CanvasUpdate.PreRender; i < (int)CanvasUpdate.MaxUpdateValue; i++)
            {
                UnityEngine.Profiling.Profiler.BeginSample(m_CanvasUpdateProfilerStrings[i]);
                for (var k = 0; k < m_GraphicRebuildQueue.Count; k++)
                {
                    try
                    {
                        var element = m_GraphicRebuildQueue[k];
                        if (ObjectValidForUpdate(element))
                            element.Rebuild((CanvasUpdate)i);
                    }
                    catch (Exception e)
                    {
                        Debug.LogException(e, m_GraphicRebuildQueue[k].transform);
                    }
                }
                UnityEngine.Profiling.Profiler.EndSample();
            }`,`for (int i = 0; i < m_GraphicRebuildQueue.Count; ++i)
                m_GraphicRebuildQueue[i].GraphicUpdateComplete();`,`m_GraphicRebuildQueue.Clear();
            m_PerformingGraphicUpdate = false;
            UISystemProfilerApi.EndSample(UISystemProfilerApi.SampleType.Render);
        }
\`\`\``]},{heading:"5.4 Graphic.DoMeshGeneration()",paragraphs:["`DoMeshGeneration`是元素重构`Rebuild`会调用到的，先调用`OnPopulateMesh(pɒpjuleɪt发音：pɒpjuleɪt)`创建自己的Mesh网格，然后调用所有需要修改 Mesh 的修改者(IMeshModifier)也就是网格后处理组件(描边等效果组件)进行修改，最后放入 `CanvasRenderer`。","其中 `CanvasRenderer` 是每个绘制元素都必须有的组件，它是画布与渲染的连接组件，通过 `CanvasRenderer` 我们才能把网格绘制到 Canvas 画布上去。","Imge，RawImag，Text都override重写`OnpopulateMesh`函数。","```csharp\nprotected override void OnPopulateMesh(VertexHelper toFill)",`private void DoMeshGeneration()
{
    if (rectTransform != null && rectTransform.rect.width >= 0 && rectTransform.rect.height >= 0)
        OnPopulateMesh(s_VertexHelper);
    else
        s_VertexHelper.Clear(); // clear the vertex helper so invalid graphics dont draw.`,`var components = ListPool<Component>.Get();
    GetComponents(typeof(IMeshModifier), components);`,`for (var i = 0; i < components.Count; i++)
        ((IMeshModifier)components[i]).ModifyMesh(s_VertexHelper);`,"ListPool<Component>.Release(components);","s_VertexHelper.FillMesh(workerMesh);\n    canvasRenderer.SetMesh(workerMesh);\n}\n```"]},{heading:"6.1 Mask",paragraphs:["Mask 组件调用了模板材质球构建了一个自己的材质球，使用了实时渲染中的模板方法来裁切不需要显示的部分，在 Mask 组件后面的物体都会进行裁切。Mask 是在 GPU 中做的裁切，使用的方法是着色器中的模板方法。","```csharp\nvar maskMaterial = StencilMaterial.Add(baseMaterial, 1, StencilOp.Replace, CompareFunction.Always, m_ShowMaskGraphic ? ColorWriteMask.All : 0);\nStencilMaterial.Remove(m_MaskMaterial);\nm_MaskMaterial = maskMaterial;",`var unmaskMaterial = StencilMaterial.Add(baseMaterial, 1, StencilOp.Zero, CompareFunction.Always, 0);
StencilMaterial.Remove(m_UnmaskMaterial);
m_UnmaskMaterial = unmaskMaterial;
graphic.canvasRenderer.popMaterialCount = 1;
graphic.canvasRenderer.SetPopMaterial(m_UnmaskMaterial, 0);`,"return m_MaskMaterial;\n```"]},{heading:"6.2 RectMask2D",paragraphs:["RectMask2D 会先计算并设置裁切的范围，再对所有子节点调用裁切操作。",`\`\`\`csharp
public virtual void PerformClipping()
{
    if (m_ShouldRecalculateClipRects)
    {
        // 获取了所有有关联的 RectMask2D 遮罩
        MaskUtilities.GetRectMasksForClip(this, m_Clippers);
        m_ShouldRecalculateClipRects = false;
    }`,`bool validRect = true;
    // 获取了所有有关联的 RectMask2D 遮罩范围
    Rect clipRect = Clipping.FindCullAndClipWorldRect(m_Clippers, out validRect);
    if (clipRect != m_LastClipRectCanvasSpace)
    {
        // 计算了不需要裁切的部分，其他部分都进行裁切
        for (int i = 0; i < m_ClipTargets.Count; ++i)
            m_ClipTargets[i].SetClipRect(clipRect, validRect);`,`m_LastClipRectCanvasSpace = clipRect;
        m_LastClipRectValid = validRect;
    }`,`for (int i = 0; i < m_ClipTargets.Count; ++i)
        m_ClipTargets[i].Cull(m_LastClipRectCanvasSpace, m_LastClipRectValid);
}`,`// 裁切源码
public virtual void SetClipRect(Rect clipRect, bool validRect)
{
    if (validRect)
        canvasRenderer.EnableRectClipping(clipRect);
    else
        canvasRenderer.DisableRectClipping();
}
\`\`\``]}],takeaways:[]},{id:"wp-50",tags:["Linux"],categoryId:"linux",title:"Docker教程",date:"2025-11-13",cover:"🐧",excerpt:"一、安装Docker 先登录到新服务器, 在创建服务器用户，并赋予权限 # ssh连接 xxx.xxx.xxx.xxx替换成新服务器的公网IP ssh root@xxx.xxx.xxx.xxx # 创建用户 adduser username...",sections:[{heading:"一、安装Docker",paragraphs:[`1.  先登录到新服务器, 在创建服务器用户，并赋予权限
    
    \`\`\`shell
    # ssh连接 xxx.xxx.xxx.xxx替换成新服务器的公网IP
    ssh root@xxx.xxx.xxx.xxx
    # 创建用户
    adduser username
    usermod -aG sudo username
    \`\`\`
    
2.  安装tmux和docker，再根据[docker安装教程](https://docs.docker.com/engine/install/ubuntu/)进行安装
    
    \`\`\`shell
    sudo apt-get update
    sudo apt-get install tmux
    \`\`\``]},{heading:"二、Docker常用指令",paragraphs:["将当前用户添加到docker用户组 为了避免每次使用docker命令都需要加上sudo权限，可以将当前用户加入安装中自动创建的docker用户组(可以[参考官方文档](https://docs.docker.com/engine/install/linux-postinstall/))：","```shell\nsudo usermod -aG docker $USER\n```","执行完此操作后，需要退出服务器，再重新登录回来，才可以省去sudo权限。"]},{heading:"2.1 镜像（images）",paragraphs:["1.  `docker pull ubuntu:20.04`：拉取一个镜像\n2.  `docker images`：列出本地所有镜像\n3.  `docker image rm ubuntu:20.04` 或 `docker rmi ubuntu:20.04`：删除镜像ubuntu:20.04\n4.  `docker [container] commit CONTAINER IMAGE_NAME:TAG`：创建某个container的镜像\n5.  `docker save -o ubuntu_20_04.tar ubuntu:20.04`：将镜像ubuntu:20.04导出到本地文件ubuntu\\_20\\_04.tar中\n6.  `docker load -i ubuntu_20_04.tar`：将镜像ubuntu:20.04从本地文件ubuntu\\_20\\_04.tar中加载出来"]},{heading:"2.2 容器(container)",paragraphs:["1.  `docker [container] create -it ubuntu:20.04`：利用镜像ubuntu:20.04创建一个容器。\n    \n2.  `docker ps -a`：查看本地的所有容器\n    \n3.  `docker [container] start CONTAINER`：启动容器\n    \n4.  `docker [container] stop CONTAINER`：停止容器\n    \n5.  `docker [container] restart CONTAINER`：重启容器\n    \n6.  `docker [contaienr] run -itd ubuntu:20.04`：创建并启动一个容器\n    \n7.  `docker [container] attach CONTAINER`：进入容器\n    \n    -   先按Ctrl-p，再按Ctrl-q可以挂起容器\n8.  `docker [container] exec CONTAINER COMMAND`：在容器中执行命令\n    \n9.  `docker [container] rm CONTAINER`：删除容器\n    \n10.  `docker container prune`：删除所有已停止的容器\n     \n11.  `docker export -o xxx.tar CONTAINER`：将容器CONTAINER导出到本地文件xxx.tar中\n     \n12.  `docker import xxx.tar image_name:tag`：将本地文件xxx.tar导入成镜像，并将镜像命名为image\\_name:tag\n     \n13.  `docker export/import`与`docker save/load`的区别：\n     \n     -   `export/import`会丢弃历史记录和元数据信息，仅保存容器当时的快照状态\n         \n     -   `save/load`会保存完整记录，体积更大\n         \n14.  `docker top CONTAINER`：查看某个容器内的所有进程\n     \n15.  `docker stats`：查看所有容器的统计信息，包括CPU、内存、存储、网络等信息\n     \n16.  `docker cp xxx CONTAINER:xxx` 或 `docker cp CONTAINER:xxx xxx`：在本地和容器间复制文件\n     \n17.  `docker rename CONTAINER1 CONTAINER2`：重命名容器\n     \n18.  `docker update CONTAINER --memory 500MB`：修改容器限制"]}],takeaways:[]},{id:"wp-51",tags:[],categoryId:"tools",title:"Jenkins自动化流程",date:"2025-11-26",cover:"🔧",excerpt:"前言 在公司开发游戏项目时，有配合测试工程师来部署Jenkins打包Unity的Android项目。了解到了Jenkins自动打包的流程，所以写篇博客来记录一下。 一、Jenkins是什么 Jenkins是一个开源软件项目，是基于Java开...",sections:[{heading:"前言",paragraphs:["在公司开发游戏项目时，有配合测试工程师来部署Jenkins打包Unity的Android项目。了解到了Jenkins自动打包的流程，所以写篇博客来记录一下。"]},{heading:"一、Jenkins是什么",paragraphs:["`Jenkins`是一个开源软件项目，是基于`Java`开发的一个持续集成工具**（CI）**，具有友好的操作界面，主要用于持续、自动的构建/测试软件项目、监控外部任务的运行。通常与版本管理工具（SCM）、构建工具结合适用。"]},{heading:"二、Jenkins的下载与安装",paragraphs:[`-   **java环境安装:**
    
    由于Jenkins是根据\`java\`开发的，所有运行jenkins需要java环境(JDK)，安装JDK可看另一个博客:[JDK安装](https://www.lwyzyc.com/?p=380)
    
-   **Jenkin下载安装:**
    
    进入[Jenkins官网](https://www.jenkins.io/)，点击Download后选择对应的平台和版本进行下载。
    
    ![image-20240723161457784](@img/a02elrjr)
    
    然后再双击jenkins安装包文件，执行安装。
    
    1.  设置安装路径，选择电脑比较大的内存盘:
    
    ![image-20240723162417484](@img/jisi0xex)
    
    2.  选择\`Run service as LocalSystem\`使用本地系统账号
    
    ![image-20240723162359656](@img/eimj2jfy)
    
    3.  选择未被占用的端口
    
    ![image-20240723162214021](@img/zs8oo9ot)
    
    4.  一直点击下一步，直到安装完成。
    5.  在浏览器中访问http://localhost:8080(端口号),则会打开如下界面则表示**jenkins安装完成。**
    
    ![image-20240723162503608](@img/kppg88mp)
    
-   **Jenkins命令行指令:**
    
    1.  **net stop jenkins：**关闭jenkins进程
    2.  **net start jenkins：**开启jenkins进程
    3.  **jenkins start**：开启jenkins进行(必须进入jenkins的安装路径)
    4.  **jenkins restart**：重启jenkins进行(必须进入jenkins的安装路径)`]},{heading:"三、Jenkinsfile语法",paragraphs:["编写`Pipeline Script`:",`\`\`\`java
pipeline {
    agent any
    parameters {
        // 字符串参数
        string(name: 'WorkPath', defaultValue: 'dev', description: '工作路径') 
        // 下拉选择参数
        choice(name: 'Channel', choices: ['huawei', 'xiaomi', 'vivo'], description: '渠道包')
        // 布尔参数
        booleanParam(name: 'AB', defaultValue: false, description: '是否打包AB')
        // 文本参数（多行文本）
        text(name: 'CUSTOM_CONFIG', defaultValue: '', description: '自定义配置')
    }
    stages {
        stage('Build AB') {
            steps {
                script {
                    if (params.AB) {
                        echo "开始打ab包"
                    }
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    // 通过 params.参数名 访问参数
                    echo "WorkPath：\${params.WorkPath}"
                    echo "渠道包：\${params.Channel}"
                }
            }
        }
    }
}
\`\`\``,`-   **pipeline：**表示一个流水线步骤
    
-   **agent：**指定了整个流水线或特定的部分, 将会在Jenkins环境中执行的位置，这取决于 \`agent\` 区域的位置。该部分必须在 \`pipeline\` 块的顶层被定义。
    
    1.  **agent any**：在任何可用的代理上执行流水线或阶段。
        
    2.  **agent none**: 当在 \`pipeline\` 块的顶部没有全局代理， 该参数将会被分配到整个流水线的运行中并且每个 \`stage\` 部分都需要包含他自己的 \`agent\` 部分。
        
    3.  **agent label**:在提供了标签的 Jenkins 环境中可用的代理上执行流水线或阶段
        
-   **stages：**包含一系列一个或多个 stage 指令, \`stages\` 部分是流水线描述的大部分"work" 的位置。 建议 \`stages\` 至少包含一个 [stage](https://www.jenkins.io/zh/doc/book/pipeline/syntax/#stage) 指令用于连续交付过程的每个离散部分,比如构建, 测试, 和部署。
    
-   **steps:**\`steps\` 部分在给定的 \`stage\` 指令中执行的定义了一系列的一个或多个steps。
    
-   **post:**流水线阶段完成状态后进行。
    
    1.  **always**：无论流水线或阶段的完成状态如何。
        
    2.  **changed**:只有当前流水线或阶段的完成状态与它之前的运行不同时执行。
        
    3.  **failure：**只有当前流水线或阶段的完成状态为失败时执行。
        
    4.  **success：**只有当前流水线或阶段的完成状态为成功时执行。
        
    5.  **aborted：**只有当前流水线或阶段的完成状态为打断时执行。
        
-   **parameters**:供了一个用户在触发流水线时应该提供的参数列表。这些用户指定参数的值可通过 \`params\` 对象提供给流水线步骤。
    
    1.  string类型:字符串类型的参数, 例如: \`parameters { string(name: 'DEPLOY_ENV', defaultValue: 'staging', description: '') }\`
    2.  booleanParam类型:布尔参数, 例如: \`parameters { booleanParam(name: 'DEBUG_BUILD', defaultValue: true, description: '') }\`
    3.  choice类型:选项参数,例如:parameters { choice(name: 'DEBUG\\_BUILD',choice:\\['ios','android','windows'\\], description: '') }
-   **options:**
    
    1.  **buildDiscarder:**为最近的流水线运行的特定数量保存组件和控制台输出
    2.  **disableConcurrentBuilds:**不允许同时执行流水线,例如: \`options { disableConcurrentBuilds() }\`
    3.  **timeout**:设置流水线运行的超时时间, 在此之后，Jenkins将中止流水线。例如: \`options { timeout(time: 1, unit: 'HOURS') }\`
-   **environment**:制定一个 键-值对序列，该序列将被定义为所有步骤的环境变量。`]}],takeaways:[]},{id:"wp-52",tags:["Unity"],categoryId:"unity",title:"Unity 协程底层原理详解",date:"2025-12-16",cover:"🎮",excerpt:"1. 协程的本质 Unity 协程并非真正的线程，而是基于迭代器的异步编程模式，运行在主线程上。 1.1 核心机制 // 协程方法的实际编译结果 IEnumerator MyCoroutine() { yield return new Wa...",sections:[{heading:"1. 协程的本质",paragraphs:["Unity 协程并非真正的线程，而是**基于迭代器的异步编程模式**，运行在主线程上。"]},{heading:"1.1 核心机制",paragraphs:[`\`\`\`csharp
// 协程方法的实际编译结果
IEnumerator MyCoroutine()
{
    yield return new WaitForSeconds(1);
    // 实际被编译器转换为状态机代码
}
\`\`\``]},{heading:"2.1 协程调度器",paragraphs:["Unity 通过 `UnityEngine.SetupCoroutine`类管理协程生命周期：",`\`\`\`csharp
// 简化的调度流程
class MonoBehaviour
{
    private List<IEnumerator> coroutines = new List<IEnumerator>();`,`void Update()
    {
        // 每帧遍历执行所有协程
        for (int i = 0; i < coroutines.Count; i++)
        {
            var coroutine = coroutines[i];
            if (!MoveNext(coroutine))
            {
                coroutines.RemoveAt(i--);
            }
        }
    }
}
\`\`\``]},{heading:"2.2 状态机转换",paragraphs:["编译器将协程转换为状态机：",`\`\`\`csharp
// 原始协程
IEnumerator MyCoroutine()
{
    Debug.Log("Start");
    yield return null;
    Debug.Log("Next frame");
    yield return new WaitForSeconds(1);
    Debug.Log("After 1 second");
}`,`// 编译器生成的近似代码
class <MyCoroutine>d__0 : IEnumerator
{
    private int <>1__state;
    private object <>2__current;`,`bool MoveNext()
    {
        switch (<>1__state)
        {
            case 0:
                Debug.Log("Start");
                <>2__current = null;
                <>1__state = 1;
                return true;
            case 1:
                Debug.Log("Next frame");
                <>2__current = new WaitForSeconds(1);
                <>1__state = 2;
                return true;
            case 2:
                Debug.Log("After 1 second");
                return false;
        }
        return false;
    }
}
\`\`\``]},{heading:"3.1 常用 Yield 对象",paragraphs:["| Yield 类型 | 底层处理 | 恢复条件 |\n| --- | --- | --- |\n| `null` | 下一帧继续 | 下一帧 Update 后 |\n| `WaitForSeconds` | 记录时间戳 | 指定时间后 |\n| `WaitForEndOfFrame` | 加入渲染队列 | 当前帧渲染完成后 |\n| `WaitForFixedUpdate` | 加入物理队列 | FixedUpdate 后 |\n| `WWW`/ `AsyncOperation` | 检查 isDone | 异步操作完成 |\n| `CustomYieldInstruction` | 实现 `keepWaiting` | `keepWaiting` 为 false |"]},{heading:"3.2 自定义 Yield 指令",paragraphs:[`\`\`\`csharp
class WaitForCustom : CustomYieldInstruction
{
    private float waitTime;
    private float startTime;`,`public WaitForCustom(float seconds)
    {
        waitTime = seconds;
        startTime = Time.time;
    }`,`public override bool keepWaiting
    {
        get { return Time.time - startTime < waitTime; }
    }
}
\`\`\``]},{heading:"4.1 启动和停止",paragraphs:["```csharp\n// StartCoroutine 返回 Coroutine 对象（实质是 IEnumerator 的包装）\nCoroutine coroutine = StartCoroutine(MyCoroutine());",`// StopCoroutine 的几种方式
StopCoroutine(coroutine);      // 通过 Coroutine 对象
StopCoroutine("MyCoroutine");  // 通过方法名
StopAllCoroutines();          // 停止所有协程
\`\`\``]},{heading:"4.2 协程执行栈",paragraphs:[`\`\`\`csharp
// Unity 内部管理结构
class CoroutineManager
{
    // 全局协程列表
    static List<Coroutine> globalCoroutines = new List<Coroutine>();`,`// 每个 MonoBehaviour 的协程列表
    Dictionary<MonoBehaviour, List<Coroutine>> behaviourCoroutines;`,"// 延迟执行的协程队列\n    List<DelayedCoroutine> delayedCoroutines = new List<DelayedCoroutine>();\n}\n```"]},{heading:"5.1 协程开销",paragraphs:["-   **内存分配**：每次 `yield return`都会创建新对象\n-   **GC 压力**：Yield 指令对象是短期对象，产生 GC\n-   **调度开销**：每帧遍历检查所有活动协程"]},{heading:"5.2 优化建议",paragraphs:[`\`\`\`csharp
// 不好的做法：每帧创建新对象
IEnumerator BadCoroutine()
{
    while (true)
    {
        yield return null;  // 每帧产生 GC
    }
}`,`// 优化：重用对象
private WaitForSeconds waitOneSecond = new WaitForSeconds(1f);`,`IEnumerator GoodCoroutine()
{
    while (true)
    {
        yield return waitOneSecond;  // 重用对象
    }
}
\`\`\``]},{heading:"6. 与 async/await 的比较",paragraphs:[`| 特性 | Unity 协程 | C# async/await |
| --- | --- | --- |
| 线程 | 主线程 | 可配置线程池 |
| 异常处理 | 会中断协程 | 可通过 try-catch 捕获 |
| 返回值 | 无直接返回值 | 有返回值 |
| 取消机制 | 有限的取消支持 | 完善的 CancellationToken |
| 兼容性 | 需 \`MonoBehaviour\` | 纯 C# 功能 |`]},{heading:"7.1 协程不执行的可能情况",paragraphs:["1.  **`GameObject` 未激活**\n2.  **`MonoBehaviour` 被禁用**\n3.  **在错误的时机调用**\n4.  **被 `StopCoroutine` 停止**"]},{heading:"7.2 协程调试技巧",paragraphs:[`\`\`\`csharp
// 添加调试信息
IEnumerator DebuggableCoroutine()
{
    Debug.Log($"Coroutine started: {Time.frameCount}");`,"yield return null;",`Debug.Log($"Coroutine continued: {Time.frameCount}");
}`,'// 使用 Coroutine 名称\nStartCoroutine("MyCoroutine");\nStopCoroutine("MyCoroutine");  // 可以通过名称停止\n```']},{heading:"8. 底层源码分析要点",paragraphs:["Unity 协程核心逻辑位于：","-   `UnityEngine.cs`\\- `MonoBehaviour`的协程方法\n-   `SetupCoroutine`\\- 协程调度和 Yield 指令处理\n-   `PlayerLoop`系统 - 协程在游戏循环中的集成"]},{heading:"总结",paragraphs:["Unity 协程是基于 C# 迭代器实现的**主线程异步调度系统**，其核心是：","1.  **状态机转换**：编译器将协程转为状态机\n2.  **帧驱动执行**：在游戏循环的特定阶段执行\n3.  **Yield 指令系统**：通过检查对象的 `keepWaiting`或 `MoveNext`控制流程\n4.  **单线程安全**：所有操作在主线程，无并发问题","理解协程底层有助于：",`-   避免性能问题
-   正确管理协程生命周期
-   编写更高效的异步代码
-   调试协程相关问题`]}],takeaways:[]},{id:"wp-53",tags:["Unity"],categoryId:"unity",title:"Unity物体渲染",date:"2025-12-17",cover:"🎮",excerpt:"1. 导入与资源处理 文件检测：Unity监控项目文件夹（Assets），当检测到新文件（如.fbx、.obj、.png、.jpg等）时，会触发导入流程。 资源转换：根据文件类型，Unity的导入器（Importers）会进行相应处理： 3...",sections:[{heading:"1. 导入与资源处理",paragraphs:[`-   **文件检测**：Unity监控项目文件夹（Assets），当检测到新文件（如.fbx、.obj、.png、.jpg等）时，会触发导入流程。
    
-   **资源转换**：根据文件类型，Unity的导入器（Importers）会进行相应处理：
    
    -   **3D模型**：FBX/OBJ等文件被解析为网格（Mesh）、材质（Material）、动画（Animation）等子资源。
        
    -   **纹理**：图片被转换为Unity内部格式（如DXT压缩），生成纹理资源。
        
    -   **其他**：音频、视频等也会被相应处理。
        
-   **生成元数据**：为每个资源创建\`.meta\`文件，存储导入设置（如缩放、法线计算、压缩格式等）。`,"* * *"]},{heading:"2. 场景实例化",paragraphs:["当你从**Project窗口**拖入**Scene视图**或**Hierarchy窗口**时：","-   **实例化GameObject**：Unity根据资源创建对应的GameObject：\n    -   3D模型 → 包含`MeshFilter`（持有Mesh）和`MeshRenderer`（持有材质/着色器）。\n    -   2D精灵 → 包含`SpriteRenderer`。\n-   **组件与默认设置**：自动添加必要的组件（如Collider，如果模型包含碰撞体数据），并根据导入设置调整位置、比例。","* * *"]},{heading:"3. 渲染流程（简化版）",paragraphs:["实例化后的物体进入Unity的渲染管线，具体取决于项目使用的渲染管线（Built-in RP、URP或HDRP）。以通用流程为例："]},{heading:"A. 准备阶段",paragraphs:["-   **材质与着色器**：\n    -   如果模型自带材质，Unity会使用它；否则生成默认材质（Standard Shader等）。\n    -   着色器（Shader）定义物体的表面属性（颜色、光滑度、法线等）和光照计算方式。\n-   **渲染器组件**：`MeshRenderer`或`SpriteRenderer`负责将物体的几何数据提交给渲染管线。"]},{heading:"B. 剔除（Culling）",paragraphs:[`-   **视锥体剔除**：Unity摄像机每帧计算视锥体，剔除视野外的物体。
-   **遮挡剔除**（如果启用）：进一步剔除被其他物体完全遮挡的物体。`]},{heading:"C. 渲染循环",paragraphs:["Unity每帧执行以下关键步骤（以Built-in RP为例）：",`1.  **几何阶段**：
    -   物体网格数据（顶点、UV、法线）经变换（Model→World→View空间）后，传递给GPU。
    -   如果使用动态批处理或GPU Instancing，Unity会合并相同材质的物体以减少Draw Call。
2.  **光照与阴影**：
    -   根据场景光源（方向光、点光源等）计算光照：
        -   前向渲染（Forward Rendering）：为每个物体计算一个主光和多个逐像素光。
        -   延迟渲染（Deferred Rendering）：先将几何信息写入G-Buffer，再计算光照。
    -   阴影渲染：如果有光源投射阴影，Unity会从光源视角渲染深度图，用于后续阴影计算。
3.  **像素处理**：
    -   着色器对每个像素计算颜色，结合纹理采样、光照、阴影等。
    -   透明物体通常会在不透明物体之后渲染，并启用Alpha混合。
4.  **后期处理**：
    -   可选的屏幕效果（如Bloom、色调调整）应用于最终图像。
5.  **输出到屏幕**：渲染结果输出到摄像机目标（通常是屏幕或渲染纹理）。`,"* * *"]},{heading:"4. 优化相关",paragraphs:[`-   **批处理**：拖入的物体如果材质相同，可能被静态/动态批处理合并。
-   **LOD Group**：如果模型包含多级细节，Unity会根据距离自动切换不同精度的网格。
-   **光照贴图**：如果物体标记为Static，其光照信息可烘焙到光照贴图中，提升运行时性能。`,"* * *"]},{heading:"5. 注意事项",paragraphs:[`-   **性能影响**：复杂模型（高多边形、多材质）会增加Draw Call，需通过优化减少负担。
-   **渲染管线差异**：URP/HDRP的渲染流程更模块化，但核心逻辑（剔除→几何处理→光照→输出）类似。
-   **自定义着色器**：如果使用自定义Shader，需确保其与当前渲染管线兼容。`,"* * *"]},{heading:"总结",paragraphs:["拖入物体时，Unity完成了**资源处理→实例化→纳入渲染管线**的完整流程。渲染过程则是每帧按**剔除、几何处理、光照计算、像素着色、后期处理**的顺序执行，最终将物体视觉化。理解这一流程有助于优化美术资源和渲染性能。"]}],takeaways:[]}],ph="lwyblog-posts";function gl(){const l={posts:[],deletedStaticIds:[]};try{const u=localStorage.getItem(ph);if(!u)return l;const d=JSON.parse(u);return!Array.isArray(d.posts)||!Array.isArray(d.deletedStaticIds)?l:d}catch{return l}}function Ko(l){try{localStorage.setItem(ph,JSON.stringify(l))}catch{console.warn("localStorage quota exceeded, changes won't persist")}}function Yv(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6)}function Xv(){const[l,u]=_.useState(0),d=_.useMemo(()=>{const g=gl(),v=[...g.posts],m=new Set(g.posts.map(h=>h.id));for(const h of jp)g.deletedStaticIds.includes(h.id)||m.has(h.id)||v.push(h);return v.sort((h,w)=>w.date.localeCompare(h.date)),v},[l]),o=_.useCallback(g=>{const v=gl(),m={...g,id:Yv()};v.posts.unshift(m),Ko(v),u(h=>h+1)},[]),p=_.useCallback(g=>{const v=gl(),m=v.posts.findIndex(h=>h.id===g.id);m>=0?v.posts[m]=g:v.posts.unshift(g),Ko(v),u(h=>h+1)},[]),f=_.useCallback(g=>{const v=gl();v.posts=v.posts.filter(h=>h.id!==g),jp.some(h=>h.id===g)&&!v.deletedStaticIds.includes(g)&&v.deletedStaticIds.push(g),Ko(v),u(h=>h+1)},[]);return{posts:d,addPost:o,updatePost:p,deletePost:f}}const Qv="LWY's Island",Zv="🦊",Kv="你好，我是 LWY",Jv=`一名热爱前端开发的程序员。喜欢探索新技术，用代码创造有趣的东西。
工作之余喜欢读书、喝咖啡，偶尔钓鱼。`,Wv=["React / TS","Node.js","Vue.js","Python","读书","咖啡"],$v="🌿",e2="欢迎来到我的小岛！",t2="在这里记录技术学习与生活点滴 🌿",n2="🌿 欢迎来到无人岛",a2="欢迎来到我的小岛！",i2=`这里记录着我的技术探索和日常思考。
随意逛逛，希望能有所收获～`,r2="📬 订阅更新",l2="不想错过新文章？留下邮箱吧",s2="订阅成功！有新文章时会通知你。",o2="仅新文章",u2="周刊",c2=[{question:"这个博客是用什么搭建的？",answer:"使用 React 19 + TypeScript + Vite 构建，UI 组件库是 animal-island-ui，设计风格灵感来自动物森友会。"},{question:"博客多久更新一次？",answer:"我会在有新想法或学到新东西时更新博客，大概每月 1-2 篇文章。质量比频率更重要。"},{question:"可以转载文章吗？",answer:"欢迎转载，但请注明出处并附上原文链接。如果有任何疑问，可以通过邮件联系我。"},{question:"为什么叫「无人岛」？",answer:"这个博客就像一座小岛，记录着我的思考和成长。希望来访的你能在这里找到一些有用的东西。"}],d2="",f2="",p2="",h2="sea",g2="",m2={blogTitle:Qv,avatarEmoji:Zv,authorName:Kv,authorBio:Jv,skillTags:Wv,logoEmoji:$v,heroTypewriter:e2,heroSubtitle:t2,welcomeModalTitle:n2,welcomeModalBodyTitle:a2,welcomeModalDescription:i2,subscribeTitle:r2,subscribeDescription:l2,subscribeSuccessMessage:s2,subscribeSwitchOffLabel:o2,subscribeSwitchOnLabel:u2,faqItems:c2,seoTitle:d2,seoDescription:f2,seoKeywords:p2,footerType:h2,footerCopyright:g2},Jo=m2,hh="lwyblog-site";function au(){try{const l=localStorage.getItem(hh);if(!l)return{...Jo};const u=JSON.parse(l);return{...Jo,...u}}catch{return{...Jo}}}function O2(l){localStorage.setItem(hh,JSON.stringify(l))}const Gp=[{label:"首页",path:"/"},{label:"分类",path:"/categories"},{label:"标签",path:"/tags"},{label:"归档",path:"/archive"}];function y2({dark:l,onThemeChange:u}){const d=eh(),o=Ht(),{posts:p}=Xv(),[f,g]=_.useState(!1),[v,m]=_.useState(""),[h,w]=_.useState(!1);_.useEffect(()=>{f&&setTimeout(()=>{const O=document.querySelector(".animal-modal input");O==null||O.focus()},100)},[f]);const[S,k]=_.useState(()=>{try{const O=localStorage.getItem("lwyblog-search-history");return O?JSON.parse(O):[]}catch{return[]}}),H=_.useMemo(()=>{const O=v.trim().toLowerCase();return O?p.filter(j=>!!(j.title.toLowerCase().includes(O)||j.tags.some(F=>F.toLowerCase().includes(O))||j.excerpt.toLowerCase().includes(O)||j.sections.some(F=>!!(F.heading.toLowerCase().includes(O)||F.paragraphs.some(Z=>Z.toLowerCase().includes(O)))))):[]},[p,v]);function q(O,j){if(!j.trim())return[{text:O,highlight:!1,key:0}];const F=j.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");return O.split(new RegExp(`(${F})`,"gi")).map((ie,J)=>ie.toLowerCase()===j.toLowerCase()?{text:ie,highlight:!0,key:J}:{text:ie,highlight:!1,key:J})}function P(O,j){const F=j.toLowerCase();if(O.excerpt.toLowerCase().includes(F))return O.excerpt;for(const Z of O.sections){if(Z.heading.toLowerCase().includes(F))return Z.heading;for(const ie of Z.paragraphs)if(ie.toLowerCase().includes(F)){const J=ie.toLowerCase().indexOf(F),we=Math.max(0,J-20),je=Math.min(ie.length,J+j.length+30);return(we>0?"...":"")+ie.slice(we,je)+(je<ie.length?"...":"")}}return null}const G=O=>{const j=v.trim();if(j){const F=[j,...S.filter(Z=>Z!==j)].slice(0,5);k(F),localStorage.setItem("lwyblog-search-history",JSON.stringify(F))}g(!1),m(""),d(`/posts/${O}`)},L=O=>O==="/"?o.pathname==="/":o.pathname.startsWith(O);return D.jsxs(D.Fragment,{children:[D.jsxs("header",{style:{position:"sticky",top:12,zIndex:50,display:"flex",justifyContent:"space-between",alignItems:"center",height:64,padding:"0 20px",marginBottom:24,maxWidth:960,width:"100%",margin:"0 auto 24px",background:l?"linear-gradient(135deg, #3a3125 0%, #2b2418 100%)":"linear-gradient(135deg, #fffdf5 0%, #fff8e3 100%)",border:l?"2px solid #4a3f2f":"2px solid #e8dfc5",borderRadius:20,boxShadow:l?"0 6px 20px -10px rgba(0, 0, 0, 0.4)":"0 6px 20px -10px rgba(180, 140, 60, 0.25)",color:l?"#f3e9d2":"#3b2f22"},children:[D.jsx("span",{style:{fontSize:20,fontWeight:800,cursor:"pointer"},onClick:()=>d("/"),children:au().blogTitle}),D.jsxs("div",{className:"header-nav-desktop",style:{display:"flex",gap:2,alignItems:"center"},children:[Gp.map(O=>L(O.path)?D.jsx(jn,{type:"primary",onClick:()=>{var j;O.path==="/"&&o.pathname==="/"?(j=document.getElementById("posts"))==null||j.scrollIntoView({behavior:"smooth"}):d(O.path)},children:O.label},O.path):D.jsx(jn,{type:"text",onClick:()=>d(O.path),children:O.label},O.path)),D.jsx(jn,{type:"text",onClick:()=>g(!0),children:"搜索"}),D.jsx(eu,{checked:l,onChange:u,checkedChildren:"🌙",unCheckedChildren:"☀️"})]}),D.jsx("button",{className:"header-mobile-btn",onClick:()=>w(!h),style:{display:"none",border:"none",background:"none",fontSize:22,cursor:"pointer",padding:4,color:l?"#f3e9d2":"#3b2f22",fontFamily:"inherit"},children:h?"✕":"☰"})]}),h&&D.jsx("div",{className:"header-mobile-menu",onClick:()=>w(!1),style:{position:"fixed",inset:0,zIndex:99,background:"rgba(0,0,0,0.3)"},children:D.jsxs("div",{onClick:O=>O.stopPropagation(),style:{position:"fixed",top:12,left:12,right:12,zIndex:100,padding:"20px 16px",borderRadius:20,background:l?"linear-gradient(135deg, #3a3125 0%, #2b2418 100%)":"linear-gradient(135deg, #fffdf5 0%, #fff8e3 100%)",border:l?"2px solid #4a3f2f":"2px solid #e8dfc5",boxShadow:l?"0 6px 20px -10px rgba(0, 0, 0, 0.4)":"0 6px 20px -10px rgba(180, 140, 60, 0.25)",display:"flex",flexDirection:"column",gap:4},children:[Gp.map(O=>D.jsx(jn,{type:L(O.path)?"primary":"text",onClick:()=>{w(!1),d(O.path)},children:O.label},O.path)),D.jsx(jn,{type:"text",onClick:()=>{w(!1),g(!0)},children:"搜索"}),D.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"8px 0"},children:D.jsx(eu,{checked:l,onChange:u,checkedChildren:"🌙",unCheckedChildren:"☀️"})})]})}),D.jsx(ch,{open:f,onClose:()=>{g(!1),m("")},title:"搜索文章",footer:null,children:D.jsxs("div",{style:{padding:"12px 0"},children:[D.jsx(oh,{value:v,onChange:O=>m(O.target.value),placeholder:"搜索标题、标签或正文内容...",onKeyDown:O=>{O.key==="Enter"&&H.length>0&&G(H[0].id)}}),D.jsxs("div",{style:{marginTop:16,maxHeight:360,overflowY:"auto"},children:[!v.trim()&&S.length>0&&D.jsxs("div",{style:{marginBottom:12},children:[D.jsx("div",{style:{fontSize:12,opacity:.5,marginBottom:8},children:"最近搜索"}),D.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:S.map(O=>D.jsx("span",{onClick:()=>m(O),style:{fontSize:13,padding:"4px 12px",borderRadius:14,cursor:"pointer",background:l?"rgba(200,160,80,0.15)":"rgba(180,140,60,0.1)"},children:O},O))})]}),v.trim()&&H.length===0&&D.jsx("p",{style:{color:"#999",textAlign:"center",padding:24},children:"没有找到相关文章"}),v.trim()&&H.length>0&&D.jsxs("div",{style:{fontSize:12,opacity:.5,marginBottom:8},children:["找到 ",H.length," 篇文章"]}),H.map(O=>{const j=P(O,v);return D.jsxs("div",{onClick:()=>G(O.id),style:{padding:"12px 16px",borderRadius:12,cursor:"pointer",marginBottom:8,background:l?"linear-gradient(135deg, rgba(58,49,37,0.3), rgba(43,36,24,0.3))":"linear-gradient(135deg, rgba(255,253,245,0.5), rgba(255,248,227,0.5))",border:l?"1px solid rgba(200,160,80,0.08)":"1px solid rgba(180,140,60,0.08)",transition:"all 0.15s"},onMouseEnter:F=>{F.currentTarget.style.background=l?"linear-gradient(135deg, rgba(58,49,37,0.6), rgba(43,36,24,0.6))":"linear-gradient(135deg, rgba(255,253,245,0.85), rgba(255,248,227,0.85))",F.currentTarget.style.borderColor=l?"rgba(200,160,80,0.2)":"rgba(180,140,60,0.2)"},onMouseLeave:F=>{F.currentTarget.style.background=l?"linear-gradient(135deg, rgba(58,49,37,0.3), rgba(43,36,24,0.3))":"linear-gradient(135deg, rgba(255,253,245,0.5), rgba(255,248,227,0.5))",F.currentTarget.style.borderColor=l?"rgba(200,160,80,0.08)":"rgba(180,140,60,0.08)"},children:[D.jsx("div",{style:{fontWeight:700,fontSize:15,marginBottom:4},children:q(O.title,v).map(F=>D.jsx("span",{style:F.highlight?{background:l?"rgba(255,200,60,0.35)":"rgba(255,200,60,0.4)",borderRadius:2,padding:"0 1px"}:void 0,children:F.text},F.key))}),j&&D.jsx("div",{style:{fontSize:13,opacity:.6,marginBottom:4,lineHeight:1.5},children:j}),D.jsxs("div",{style:{display:"flex",gap:4,flexWrap:"wrap"},children:[O.tags.map(F=>D.jsxs("span",{style:{fontSize:12,padding:"1px 8px",borderRadius:8,background:l?"rgba(200,160,80,0.15)":"rgba(180,140,60,0.12)"},children:["#",F]},F)),D.jsx("span",{style:{fontSize:12,color:"#999",marginLeft:8},children:O.date})]})]},O.id)})]})]})})]})}const gh="lwyblog-social";function v2(l){const u=l.toLowerCase().trim();return u==="email"||u==="邮箱"||u==="mail"}function b2(l,u){function d(p){return un.createElement("svg",{width:18,height:18,viewBox:"0 0 24 24",fill:u},un.createElement("path",{d:p}))}switch(l.toLowerCase().trim()){case"github":return d("M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12");case"email":case"邮箱":case"mail":return un.createElement("svg",{width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:u,strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"},un.createElement("rect",{x:2.5,y:4.5,width:19,height:15,rx:2}),un.createElement("path",{d:"m2.5 5 8.5 7.5a2 2 0 0 0 2.5 0L22 5"}));case"weibo":case"微博":return d("M20.194 14.197c0 3.364-3.562 6.09-7.944 6.09-4.393 0-7.955-2.726-7.955-6.09 0-3.354 3.562-6.09 7.955-6.09 4.382 0 7.944 2.736 7.944 6.09zm-7.92 3.94c-2.485 0-4.503-1.689-4.503-3.77 0-2.082 2.018-3.771 4.503-3.771 2.485 0 4.503 1.689 4.503 3.77 0 2.082-2.018 3.771-4.503 3.771zm-7.1-3.83c-.47 2.035.34 4.014 1.853 5.132.249.184.066.54-.255.475-2.008-.407-3.85-2.01-4.36-4.21-.526-2.266.872-4.63 3.146-5.245 2.274-.615 4.388.509 4.794 2.58.065.33-.313.508-.529.233-1.153-1.472-3.23-1.955-4.65-1.055v.09zm7.096 2.08c-.39-.101-.698.35-.424.57.93.751 2.645.742 3.498-.042.248-.228.788-.13.609.236-.574 1.17-2.228 1.492-3.683-.764zm2.201-3.117c-.145.24-.457.362-.701.266-.24-.098-.322-.375-.188-.604.133-.225.436-.354.678-.26.245.095.326.372.21.598z");case"bilibili":case"b站":return d("M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z");default:return null}}function x2(){try{const l=localStorage.getItem(gh);return l?JSON.parse(l):{github:"",email:"",weibo:"",bilibili:""}}catch{return{github:"",email:"",weibo:"",bilibili:""}}}function k2(l){localStorage.setItem(gh,JSON.stringify(l))}const C2=[{key:"github",label:"GitHub"},{key:"email",label:"邮箱"},{key:"weibo",label:"微博"},{key:"bilibili",label:"Bilibili"}],S2=_.lazy(()=>Ya(()=>import("./Home-BipfU2E8.js"),__vite__mapDeps([0,1,2]))),_2=_.lazy(()=>Ya(()=>import("./Post-BRLdKOS-.js"),__vite__mapDeps([3,1,4,5]))),T2=_.lazy(()=>Ya(()=>import("./Admin-CI4s0S4X.js"),__vite__mapDeps([6,1,4,7]))),w2=_.lazy(()=>Ya(()=>import("./Categories-DhzzbLym.js"),__vite__mapDeps([8,1,9]))),A2=_.lazy(()=>Ya(()=>import("./Tags-fmml8c5y.js"),__vite__mapDeps([10,11]))),E2=_.lazy(()=>Ya(()=>import("./Archive-CfCiFRNl.js"),__vite__mapDeps([12,13])));function D2(){const[l,u]=_.useState(()=>localStorage.getItem("lwyblog-dark")==="1"),[d,o]=_.useState(!1);_.useEffect(()=>{document.documentElement.classList.toggle("dark",l),localStorage.setItem("lwyblog-dark",l?"1":"0")},[l]),_.useEffect(()=>{const m=au(),w=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${m.logoEmoji||"🌿"}</text></svg>`,S=`data:image/svg+xml,${encodeURIComponent(w)}`;let k=document.querySelector("link[rel='icon']");k||(k=document.createElement("link"),k.rel="icon",k.type="image/svg+xml",document.head.appendChild(k)),k.href=S,document.title=m.seoTitle||m.blogTitle||"LWY's Island";const H=(q,P)=>{let G=document.querySelector(`meta[name="${q}"]`);G||(G=document.createElement("meta"),G.name=q,document.head.appendChild(G)),G.content=P};m.seoDescription&&H("description",m.seoDescription),m.seoKeywords&&H("keywords",m.seoKeywords)},[]);const p=x2(),f=C2.filter(m=>p[m.key]).map(m=>({key:m.key,label:m.label,url:p[m.key]})),g=au(),v=m=>{o(!0),setTimeout(()=>{u(m),setTimeout(()=>o(!1),400)},80)};return D.jsxs(pu,{children:[D.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[D.jsxs(v1,{children:[D.jsx(y2,{dark:l,onThemeChange:v}),D.jsx("div",{style:{flex:1},children:D.jsx(_.Suspense,{fallback:D.jsx("div",{style:{display:"flex",justifyContent:"center",padding:80},children:D.jsx("div",{style:{width:28,height:28,border:"3px solid rgba(180,140,60,0.12)",borderTopColor:"#19c8b9",borderRadius:"50%",animation:"spin 0.6s linear infinite"}})}),children:D.jsxs(Q0,{children:[D.jsx(ra,{path:"/",element:D.jsx(S2,{})}),D.jsx(ra,{path:"/categories",element:D.jsx(w2,{})}),D.jsx(ra,{path:"/tags",element:D.jsx(A2,{})}),D.jsx(ra,{path:"/archive",element:D.jsx(E2,{})}),D.jsx(ra,{path:"/posts/:id",element:D.jsx(_2,{})}),D.jsx(ra,{path:"/admin",element:D.jsx(T2,{})})]})})}),D.jsxs("div",{style:{textAlign:"center",padding:"24px 0 12px"},children:[f.length>0&&D.jsx("div",{style:{marginBottom:12,display:"flex",justifyContent:"center",gap:16,flexWrap:"wrap"},children:f.map(m=>{const h=v2(m.label),w=h?`mailto:${m.url}`:m.url;return D.jsx("a",{href:w,target:h?void 0:"_blank",rel:h?void 0:"noopener noreferrer",title:m.label,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:36,height:36,borderRadius:"50%",background:l?"rgba(255,255,255,0.06)":"rgba(180,140,60,0.08)",textDecoration:"none",transition:"all 0.2s",fontSize:18},onMouseEnter:S=>{const k=S.currentTarget;k.style.background=l?"rgba(255,255,255,0.12)":"rgba(180,140,60,0.18)",k.style.transform="translateY(-2px)"},onMouseLeave:S=>{const k=S.currentTarget;k.style.background=l?"rgba(255,255,255,0.06)":"rgba(180,140,60,0.08)",k.style.transform="translateY(0)"},children:b2(m.label,l?"#c0b090":"#6b5030")},m.key)})}),D.jsx("a",{href:"#/admin",style:{display:"inline-block",fontSize:13,fontWeight:600,padding:"6px 18px",borderRadius:16,color:l?"#8b7355":"#b8a080",textDecoration:"none",opacity:.6,transition:"opacity 0.15s"},onMouseEnter:m=>{m.currentTarget.style.opacity="1"},onMouseLeave:m=>{m.currentTarget.style.opacity="0.6"},children:"管理后台"})]})]}),D.jsxs("div",{className:"app-footer",children:[g.footerCopyright&&D.jsx("div",{style:{textAlign:"center",padding:"0 0 8px",fontSize:13,opacity:.5,color:l?"#c0b090":"#6b5030"},children:g.footerCopyright}),D.jsx(dh,{type:g.footerType})]})]}),d&&D.jsx("div",{style:{position:"fixed",inset:0,zIndex:99999,background:l?"#2a241a":"#fffdf5",display:"flex",alignItems:"center",justifyContent:"center"},children:D.jsx(fh,{})})]})}Qm.createRoot(document.getElementById("root")).render(D.jsx(_.StrictMode,{children:D.jsx(D2,{})}));export{M2 as D,eu as G,Fv as J,ev as N,jn as Y,xv as Z,Ya as _,L2 as a,oh as b,ch as c,ky as d,Gm as e,au as f,Yv as g,x2 as h,O2 as i,D as j,Fy as k,gl as l,k2 as m,R2 as n,Xv as o,_ as r,Ko as s,uh as t,eh as u,lv as w};
