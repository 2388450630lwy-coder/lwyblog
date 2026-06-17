const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Home-BruTsie3.js","assets/Home-Cm17bWnL.css","assets/Post-0LZTgXGF.js","assets/images-VQNkxfyG.js","assets/Post-CofEtD5L.css","assets/Admin-CKDfwLq8.js","assets/Admin-CHQYy9NR.css","assets/Categories-C7sYaO3V.js","assets/Categories-CRpZ2PDv.css","assets/Tags-BGcM9OK_.js","assets/Tags-DkK2mklP.css","assets/Archive-2nfLtYqW.js","assets/Archive-BaZr6uMG.css"])))=>i.map(i=>d[i]);
(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const f of document.querySelectorAll('link[rel="modulepreload"]'))u(f);new MutationObserver(f=>{for(const p of f)if(p.type==="childList")for(const m of p.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&u(m)}).observe(document,{childList:!0,subtree:!0});function d(f){const p={};return f.integrity&&(p.integrity=f.integrity),f.referrerPolicy&&(p.referrerPolicy=f.referrerPolicy),f.crossOrigin==="use-credentials"?p.credentials="include":f.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function u(f){if(f.ep)return;f.ep=!0;const p=d(f);fetch(f.href,p)}})();function Hg(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Pu={exports:{}},Pi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf;function Vg(){if(yf)return Pi;yf=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.fragment");function d(u,f,p){var m=null;if(p!==void 0&&(m=""+p),f.key!==void 0&&(m=""+f.key),"key"in f){p={};for(var E in f)E!=="key"&&(p[E]=f[E])}else p=f;return f=p.ref,{$$typeof:r,type:u,key:m,ref:f!==void 0?f:null,props:p}}return Pi.Fragment=s,Pi.jsx=d,Pi.jsxs=d,Pi}var vf;function Ig(){return vf||(vf=1,Pu.exports=Vg()),Pu.exports}var L=Ig(),Fu={exports:{}},$={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf;function qg(){if(bf)return $;bf=1;var r=Symbol.for("react.transitional.element"),s=Symbol.for("react.portal"),d=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),p=Symbol.for("react.consumer"),m=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),O=Symbol.iterator;function H(b){return b===null||typeof b!="object"?null:(b=O&&b[O]||b["@@iterator"],typeof b=="function"?b:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},k=Object.assign,G={};function R(b,z,q){this.props=b,this.context=z,this.refs=G,this.updater=q||j}R.prototype.isReactComponent={},R.prototype.setState=function(b,z){if(typeof b!="object"&&typeof b!="function"&&b!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,b,z,"setState")},R.prototype.forceUpdate=function(b){this.updater.enqueueForceUpdate(this,b,"forceUpdate")};function I(){}I.prototype=R.prototype;function F(b,z,q){this.props=b,this.context=z,this.refs=G,this.updater=q||j}var ee=F.prototype=new I;ee.constructor=F,k(ee,R.prototype),ee.isPureReactComponent=!0;var Q=Array.isArray;function he(){}var W={H:null,A:null,T:null,S:null},Re=Object.prototype.hasOwnProperty;function Ye(b,z,q){var Y=q.ref;return{$$typeof:r,type:b,key:z,ref:Y!==void 0?Y:null,props:q}}function kn(b,z){return Ye(b.type,z,b.props)}function yn(b){return typeof b=="object"&&b!==null&&b.$$typeof===r}function Xe(b){var z={"=":"=0",":":"=2"};return"$"+b.replace(/[=:]/g,function(q){return z[q]})}var zn=/\/+/g;function vn(b,z){return typeof b=="object"&&b!==null&&b.key!=null?Xe(""+b.key):z.toString(36)}function Be(b){switch(b.status){case"fulfilled":return b.value;case"rejected":throw b.reason;default:switch(typeof b.status=="string"?b.then(he,he):(b.status="pending",b.then(function(z){b.status==="pending"&&(b.status="fulfilled",b.value=z)},function(z){b.status==="pending"&&(b.status="rejected",b.reason=z)})),b.status){case"fulfilled":return b.value;case"rejected":throw b.reason}}throw b}function N(b,z,q,Y,ne){var ie=typeof b;(ie==="undefined"||ie==="boolean")&&(b=null);var fe=!1;if(b===null)fe=!0;else switch(ie){case"bigint":case"string":case"number":fe=!0;break;case"object":switch(b.$$typeof){case r:case s:fe=!0;break;case x:return fe=b._init,N(fe(b._payload),z,q,Y,ne)}}if(fe)return ne=ne(b),fe=Y===""?"."+vn(b,0):Y,Q(ne)?(q="",fe!=null&&(q=fe.replace(zn,"$&/")+"/"),N(ne,z,q,"",function(Ja){return Ja})):ne!=null&&(yn(ne)&&(ne=kn(ne,q+(ne.key==null||b&&b.key===ne.key?"":(""+ne.key).replace(zn,"$&/")+"/")+fe)),z.push(ne)),1;fe=0;var Ze=Y===""?".":Y+":";if(Q(b))for(var Le=0;Le<b.length;Le++)Y=b[Le],ie=Ze+vn(Y,Le),fe+=N(Y,z,q,ie,ne);else if(Le=H(b),typeof Le=="function")for(b=Le.call(b),Le=0;!(Y=b.next()).done;)Y=Y.value,ie=Ze+vn(Y,Le++),fe+=N(Y,z,q,ie,ne);else if(ie==="object"){if(typeof b.then=="function")return N(Be(b),z,q,Y,ne);throw z=String(b),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(b).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return fe}function V(b,z,q){if(b==null)return b;var Y=[],ne=0;return N(b,Y,"","",function(ie){return z.call(q,ie,ne++)}),Y}function J(b){if(b._status===-1){var z=b._result;z=z(),z.then(function(q){(b._status===0||b._status===-1)&&(b._status=1,b._result=q)},function(q){(b._status===0||b._status===-1)&&(b._status=2,b._result=q)}),b._status===-1&&(b._status=0,b._result=z)}if(b._status===1)return b._result.default;throw b._result}var ye=typeof reportError=="function"?reportError:function(b){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof b=="object"&&b!==null&&typeof b.message=="string"?String(b.message):String(b),error:b});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",b);return}console.error(b)},Ce={map:V,forEach:function(b,z,q){V(b,function(){z.apply(this,arguments)},q)},count:function(b){var z=0;return V(b,function(){z++}),z},toArray:function(b){return V(b,function(z){return z})||[]},only:function(b){if(!yn(b))throw Error("React.Children.only expected to receive a single React element child.");return b}};return $.Activity=S,$.Children=Ce,$.Component=R,$.Fragment=d,$.Profiler=f,$.PureComponent=F,$.StrictMode=u,$.Suspense=y,$.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,$.__COMPILER_RUNTIME={__proto__:null,c:function(b){return W.H.useMemoCache(b)}},$.cache=function(b){return function(){return b.apply(null,arguments)}},$.cacheSignal=function(){return null},$.cloneElement=function(b,z,q){if(b==null)throw Error("The argument must be a React element, but you passed "+b+".");var Y=k({},b.props),ne=b.key;if(z!=null)for(ie in z.key!==void 0&&(ne=""+z.key),z)!Re.call(z,ie)||ie==="key"||ie==="__self"||ie==="__source"||ie==="ref"&&z.ref===void 0||(Y[ie]=z[ie]);var ie=arguments.length-2;if(ie===1)Y.children=q;else if(1<ie){for(var fe=Array(ie),Ze=0;Ze<ie;Ze++)fe[Ze]=arguments[Ze+2];Y.children=fe}return Ye(b.type,ne,Y)},$.createContext=function(b){return b={$$typeof:m,_currentValue:b,_currentValue2:b,_threadCount:0,Provider:null,Consumer:null},b.Provider=b,b.Consumer={$$typeof:p,_context:b},b},$.createElement=function(b,z,q){var Y,ne={},ie=null;if(z!=null)for(Y in z.key!==void 0&&(ie=""+z.key),z)Re.call(z,Y)&&Y!=="key"&&Y!=="__self"&&Y!=="__source"&&(ne[Y]=z[Y]);var fe=arguments.length-2;if(fe===1)ne.children=q;else if(1<fe){for(var Ze=Array(fe),Le=0;Le<fe;Le++)Ze[Le]=arguments[Le+2];ne.children=Ze}if(b&&b.defaultProps)for(Y in fe=b.defaultProps,fe)ne[Y]===void 0&&(ne[Y]=fe[Y]);return Ye(b,ie,ne)},$.createRef=function(){return{current:null}},$.forwardRef=function(b){return{$$typeof:E,render:b}},$.isValidElement=yn,$.lazy=function(b){return{$$typeof:x,_payload:{_status:-1,_result:b},_init:J}},$.memo=function(b,z){return{$$typeof:h,type:b,compare:z===void 0?null:z}},$.startTransition=function(b){var z=W.T,q={};W.T=q;try{var Y=b(),ne=W.S;ne!==null&&ne(q,Y),typeof Y=="object"&&Y!==null&&typeof Y.then=="function"&&Y.then(he,ye)}catch(ie){ye(ie)}finally{z!==null&&q.types!==null&&(z.types=q.types),W.T=z}},$.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},$.use=function(b){return W.H.use(b)},$.useActionState=function(b,z,q){return W.H.useActionState(b,z,q)},$.useCallback=function(b,z){return W.H.useCallback(b,z)},$.useContext=function(b){return W.H.useContext(b)},$.useDebugValue=function(){},$.useDeferredValue=function(b,z){return W.H.useDeferredValue(b,z)},$.useEffect=function(b,z){return W.H.useEffect(b,z)},$.useEffectEvent=function(b){return W.H.useEffectEvent(b)},$.useId=function(){return W.H.useId()},$.useImperativeHandle=function(b,z,q){return W.H.useImperativeHandle(b,z,q)},$.useInsertionEffect=function(b,z){return W.H.useInsertionEffect(b,z)},$.useLayoutEffect=function(b,z){return W.H.useLayoutEffect(b,z)},$.useMemo=function(b,z){return W.H.useMemo(b,z)},$.useOptimistic=function(b,z){return W.H.useOptimistic(b,z)},$.useReducer=function(b,z,q){return W.H.useReducer(b,z,q)},$.useRef=function(b){return W.H.useRef(b)},$.useState=function(b){return W.H.useState(b)},$.useSyncExternalStore=function(b,z,q){return W.H.useSyncExternalStore(b,z,q)},$.useTransition=function(){return W.H.useTransition()},$.version="19.2.6",$}var Sf;function ls(){return Sf||(Sf=1,Fu.exports=qg()),Fu.exports}var C=ls();const ct=Hg(C);var Yu={exports:{}},Fi={},Xu={exports:{}},Ku={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cf;function Pg(){return Cf||(Cf=1,(function(r){function s(N,V){var J=N.length;N.push(V);e:for(;0<J;){var ye=J-1>>>1,Ce=N[ye];if(0<f(Ce,V))N[ye]=V,N[J]=Ce,J=ye;else break e}}function d(N){return N.length===0?null:N[0]}function u(N){if(N.length===0)return null;var V=N[0],J=N.pop();if(J!==V){N[0]=J;e:for(var ye=0,Ce=N.length,b=Ce>>>1;ye<b;){var z=2*(ye+1)-1,q=N[z],Y=z+1,ne=N[Y];if(0>f(q,J))Y<Ce&&0>f(ne,q)?(N[ye]=ne,N[Y]=J,ye=Y):(N[ye]=q,N[z]=J,ye=z);else if(Y<Ce&&0>f(ne,J))N[ye]=ne,N[Y]=J,ye=Y;else break e}}return V}function f(N,V){var J=N.sortIndex-V.sortIndex;return J!==0?J:N.id-V.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var p=performance;r.unstable_now=function(){return p.now()}}else{var m=Date,E=m.now();r.unstable_now=function(){return m.now()-E}}var y=[],h=[],x=1,S=null,O=3,H=!1,j=!1,k=!1,G=!1,R=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,F=typeof setImmediate<"u"?setImmediate:null;function ee(N){for(var V=d(h);V!==null;){if(V.callback===null)u(h);else if(V.startTime<=N)u(h),V.sortIndex=V.expirationTime,s(y,V);else break;V=d(h)}}function Q(N){if(k=!1,ee(N),!j)if(d(y)!==null)j=!0,he||(he=!0,Xe());else{var V=d(h);V!==null&&Be(Q,V.startTime-N)}}var he=!1,W=-1,Re=5,Ye=-1;function kn(){return G?!0:!(r.unstable_now()-Ye<Re)}function yn(){if(G=!1,he){var N=r.unstable_now();Ye=N;var V=!0;try{e:{j=!1,k&&(k=!1,I(W),W=-1),H=!0;var J=O;try{n:{for(ee(N),S=d(y);S!==null&&!(S.expirationTime>N&&kn());){var ye=S.callback;if(typeof ye=="function"){S.callback=null,O=S.priorityLevel;var Ce=ye(S.expirationTime<=N);if(N=r.unstable_now(),typeof Ce=="function"){S.callback=Ce,ee(N),V=!0;break n}S===d(y)&&u(y),ee(N)}else u(y);S=d(y)}if(S!==null)V=!0;else{var b=d(h);b!==null&&Be(Q,b.startTime-N),V=!1}}break e}finally{S=null,O=J,H=!1}V=void 0}}finally{V?Xe():he=!1}}}var Xe;if(typeof F=="function")Xe=function(){F(yn)};else if(typeof MessageChannel<"u"){var zn=new MessageChannel,vn=zn.port2;zn.port1.onmessage=yn,Xe=function(){vn.postMessage(null)}}else Xe=function(){R(yn,0)};function Be(N,V){W=R(function(){N(r.unstable_now())},V)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(N){N.callback=null},r.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Re=0<N?Math.floor(1e3/N):5},r.unstable_getCurrentPriorityLevel=function(){return O},r.unstable_next=function(N){switch(O){case 1:case 2:case 3:var V=3;break;default:V=O}var J=O;O=V;try{return N()}finally{O=J}},r.unstable_requestPaint=function(){G=!0},r.unstable_runWithPriority=function(N,V){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var J=O;O=N;try{return V()}finally{O=J}},r.unstable_scheduleCallback=function(N,V,J){var ye=r.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?ye+J:ye):J=ye,N){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=J+Ce,N={id:x++,callback:V,priorityLevel:N,startTime:J,expirationTime:Ce,sortIndex:-1},J>ye?(N.sortIndex=J,s(h,N),d(y)===null&&N===d(h)&&(k?(I(W),W=-1):k=!0,Be(Q,J-ye))):(N.sortIndex=Ce,s(y,N),j||H||(j=!0,he||(he=!0,Xe()))),N},r.unstable_shouldYield=kn,r.unstable_wrapCallback=function(N){var V=O;return function(){var J=O;O=V;try{return N.apply(this,arguments)}finally{O=J}}}})(Ku)),Ku}var xf;function Fg(){return xf||(xf=1,Xu.exports=Pg()),Xu.exports}var Qu={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ef;function Yg(){if(Ef)return Ke;Ef=1;var r=ls();function s(y){var h="https://react.dev/errors/"+y;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)h+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+y+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(){}var u={d:{f:d,r:function(){throw Error(s(522))},D:d,C:d,L:d,m:d,X:d,S:d,M:d},p:0,findDOMNode:null},f=Symbol.for("react.portal");function p(y,h,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:f,key:S==null?null:""+S,children:y,containerInfo:h,implementation:x}}var m=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function E(y,h){if(y==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=u,Ke.createPortal=function(y,h){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(s(299));return p(y,h,null,x)},Ke.flushSync=function(y){var h=m.T,x=u.p;try{if(m.T=null,u.p=2,y)return y()}finally{m.T=h,u.p=x,u.d.f()}},Ke.preconnect=function(y,h){typeof y=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,u.d.C(y,h))},Ke.prefetchDNS=function(y){typeof y=="string"&&u.d.D(y)},Ke.preinit=function(y,h){if(typeof y=="string"&&h&&typeof h.as=="string"){var x=h.as,S=E(x,h.crossOrigin),O=typeof h.integrity=="string"?h.integrity:void 0,H=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;x==="style"?u.d.S(y,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:S,integrity:O,fetchPriority:H}):x==="script"&&u.d.X(y,{crossOrigin:S,integrity:O,fetchPriority:H,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},Ke.preinitModule=function(y,h){if(typeof y=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var x=E(h.as,h.crossOrigin);u.d.M(y,{crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&u.d.M(y)},Ke.preload=function(y,h){if(typeof y=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var x=h.as,S=E(x,h.crossOrigin);u.d.L(y,x,{crossOrigin:S,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},Ke.preloadModule=function(y,h){if(typeof y=="string")if(h){var x=E(h.as,h.crossOrigin);u.d.m(y,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:x,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else u.d.m(y)},Ke.requestFormReset=function(y){u.d.r(y)},Ke.unstable_batchedUpdates=function(y,h){return y(h)},Ke.useFormState=function(y,h,x){return m.H.useFormState(y,h,x)},Ke.useFormStatus=function(){return m.H.useHostTransitionStatus()},Ke.version="19.2.6",Ke}var Af;function Vf(){if(Af)return Qu.exports;Af=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),Qu.exports=Yg(),Qu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf;function Xg(){if(Tf)return Fi;Tf=1;var r=Fg(),s=ls(),d=Vf();function u(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var t=2;t<arguments.length;t++)n+="&args[]="+encodeURIComponent(arguments[t])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function f(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function p(e){var n=e,t=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(t=n.return),e=n.return;while(e)}return n.tag===3?t:null}function m(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function E(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(p(e)!==e)throw Error(u(188))}function h(e){var n=e.alternate;if(!n){if(n=p(e),n===null)throw Error(u(188));return n!==e?null:e}for(var t=e,a=n;;){var i=t.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){t=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===t)return y(i),e;if(l===a)return y(i),n;l=l.sibling}throw Error(u(188))}if(t.return!==a.return)t=i,a=l;else{for(var o=!1,c=i.child;c;){if(c===t){o=!0,t=i,a=l;break}if(c===a){o=!0,a=i,t=l;break}c=c.sibling}if(!o){for(c=l.child;c;){if(c===t){o=!0,t=l,a=i;break}if(c===a){o=!0,a=l,t=i;break}c=c.sibling}if(!o)throw Error(u(189))}}if(t.alternate!==a)throw Error(u(190))}if(t.tag!==3)throw Error(u(188));return t.stateNode.current===t?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var S=Object.assign,O=Symbol.for("react.element"),H=Symbol.for("react.transitional.element"),j=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),G=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),I=Symbol.for("react.consumer"),F=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Re=Symbol.for("react.lazy"),Ye=Symbol.for("react.activity"),kn=Symbol.for("react.memo_cache_sentinel"),yn=Symbol.iterator;function Xe(e){return e===null||typeof e!="object"?null:(e=yn&&e[yn]||e["@@iterator"],typeof e=="function"?e:null)}var zn=Symbol.for("react.client.reference");function vn(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===zn?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case k:return"Fragment";case R:return"Profiler";case G:return"StrictMode";case Q:return"Suspense";case he:return"SuspenseList";case Ye:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case j:return"Portal";case F:return e.displayName||"Context";case I:return(e._context.displayName||"Context")+".Consumer";case ee:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return n=e.displayName||null,n!==null?n:vn(e.type)||"Memo";case Re:n=e._payload,e=e._init;try{return vn(e(n))}catch{}}return null}var Be=Array.isArray,N=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=d.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J={pending:!1,data:null,method:null,action:null},ye=[],Ce=-1;function b(e){return{current:e}}function z(e){0>Ce||(e.current=ye[Ce],ye[Ce]=null,Ce--)}function q(e,n){Ce++,ye[Ce]=e.current,e.current=n}var Y=b(null),ne=b(null),ie=b(null),fe=b(null);function Ze(e,n){switch(q(ie,n),q(ne,e),q(Y,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Gp(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Gp(n),e=Hp(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}z(Y),q(Y,e)}function Le(){z(Y),z(ne),z(ie)}function Ja(e){e.memoizedState!==null&&q(fe,e);var n=Y.current,t=Hp(n,e.type);n!==t&&(q(ne,e),q(Y,t))}function Ji(e){ne.current===e&&(z(Y),z(ne)),fe.current===e&&(z(fe),Hi._currentValue=J)}var Tr,ms;function Vt(e){if(Tr===void 0)try{throw Error()}catch(t){var n=t.stack.trim().match(/\n( *(at )?)/);Tr=n&&n[1]||"",ms=-1<t.stack.indexOf(`
    at`)?" (<anonymous>)":-1<t.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Tr+e+ms}var _r=!1;function wr(e,n){if(!e||_r)return"";_r=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var U=function(){throw Error()};if(Object.defineProperty(U.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(U,[])}catch(D){var w=D}Reflect.construct(e,[],U)}else{try{U.call()}catch(D){w=D}e.call(U.prototype)}}else{try{throw Error()}catch(D){w=D}(U=e())&&typeof U.catch=="function"&&U.catch(function(){})}}catch(D){if(D&&w&&typeof D.stack=="string")return[D.stack,w.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=a.DetermineComponentFrameRoot(),o=l[0],c=l[1];if(o&&c){var g=o.split(`
`),_=c.split(`
`);for(i=a=0;a<g.length&&!g[a].includes("DetermineComponentFrameRoot");)a++;for(;i<_.length&&!_[i].includes("DetermineComponentFrameRoot");)i++;if(a===g.length||i===_.length)for(a=g.length-1,i=_.length-1;1<=a&&0<=i&&g[a]!==_[i];)i--;for(;1<=a&&0<=i;a--,i--)if(g[a]!==_[i]){if(a!==1||i!==1)do if(a--,i--,0>i||g[a]!==_[i]){var M=`
`+g[a].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=a&&0<=i);break}}}finally{_r=!1,Error.prepareStackTrace=t}return(t=e?e.displayName||e.name:"")?Vt(t):""}function yh(e,n){switch(e.tag){case 26:case 27:case 5:return Vt(e.type);case 16:return Vt("Lazy");case 13:return e.child!==n&&n!==null?Vt("Suspense Fallback"):Vt("Suspense");case 19:return Vt("SuspenseList");case 0:case 15:return wr(e.type,!1);case 11:return wr(e.type.render,!1);case 1:return wr(e.type,!0);case 31:return Vt("Activity");default:return""}}function gs(e){try{var n="",t=null;do n+=yh(e,t),t=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Dr=Object.prototype.hasOwnProperty,Rr=r.unstable_scheduleCallback,Lr=r.unstable_cancelCallback,vh=r.unstable_shouldYield,bh=r.unstable_requestPaint,rn=r.unstable_now,Sh=r.unstable_getCurrentPriorityLevel,ys=r.unstable_ImmediatePriority,vs=r.unstable_UserBlockingPriority,Wi=r.unstable_NormalPriority,Ch=r.unstable_LowPriority,bs=r.unstable_IdlePriority,xh=r.log,Eh=r.unstable_setDisableYieldValue,Wa=null,on=null;function pt(e){if(typeof xh=="function"&&Eh(e),on&&typeof on.setStrictMode=="function")try{on.setStrictMode(Wa,e)}catch{}}var un=Math.clz32?Math.clz32:_h,Ah=Math.log,Th=Math.LN2;function _h(e){return e>>>=0,e===0?32:31-(Ah(e)/Th|0)|0}var $i=256,el=262144,nl=4194304;function It(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function tl(e,n,t){var a=e.pendingLanes;if(a===0)return 0;var i=0,l=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var c=a&134217727;return c!==0?(a=c&~l,a!==0?i=It(a):(o&=c,o!==0?i=It(o):t||(t=c&~e,t!==0&&(i=It(t))))):(c=a&~l,c!==0?i=It(c):o!==0?i=It(o):t||(t=a&~e,t!==0&&(i=It(t)))),i===0?0:n!==0&&n!==i&&(n&l)===0&&(l=i&-i,t=n&-n,l>=t||l===32&&(t&4194048)!==0)?n:i}function $a(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function wh(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ss(){var e=nl;return nl<<=1,(nl&62914560)===0&&(nl=4194304),e}function Mr(e){for(var n=[],t=0;31>t;t++)n.push(e);return n}function ei(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Dh(e,n,t,a,i,l){var o=e.pendingLanes;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=t,e.entangledLanes&=t,e.errorRecoveryDisabledLanes&=t,e.shellSuspendCounter=0;var c=e.entanglements,g=e.expirationTimes,_=e.hiddenUpdates;for(t=o&~t;0<t;){var M=31-un(t),U=1<<M;c[M]=0,g[M]=-1;var w=_[M];if(w!==null)for(_[M]=null,M=0;M<w.length;M++){var D=w[M];D!==null&&(D.lane&=-536870913)}t&=~U}a!==0&&Cs(e,a,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(o&~n))}function Cs(e,n,t){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-un(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|t&261930}function xs(e,n){var t=e.entangledLanes|=n;for(e=e.entanglements;t;){var a=31-un(t),i=1<<a;i&n|e[a]&n&&(e[a]|=n),t&=~i}}function Es(e,n){var t=n&-n;return t=(t&42)!==0?1:Nr(t),(t&(e.suspendedLanes|n))!==0?0:t}function Nr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Br(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function As(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:cf(e.type))}function Ts(e,n){var t=V.p;try{return V.p=e,n()}finally{V.p=t}}var ft=Math.random().toString(36).slice(2),Ve="__reactFiber$"+ft,We="__reactProps$"+ft,ca="__reactContainer$"+ft,Or="__reactEvents$"+ft,Rh="__reactListeners$"+ft,Lh="__reactHandles$"+ft,_s="__reactResources$"+ft,ni="__reactMarker$"+ft;function Ur(e){delete e[Ve],delete e[We],delete e[Or],delete e[Rh],delete e[Lh]}function da(e){var n=e[Ve];if(n)return n;for(var t=e.parentNode;t;){if(n=t[ca]||t[Ve]){if(t=n.alternate,n.child!==null||t!==null&&t.child!==null)for(e=Xp(e);e!==null;){if(t=e[Ve])return t;e=Xp(e)}return n}e=t,t=e.parentNode}return null}function pa(e){if(e=e[Ve]||e[ca]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ti(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(u(33))}function fa(e){var n=e[_s];return n||(n=e[_s]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ge(e){e[ni]=!0}var ws=new Set,Ds={};function qt(e,n){ha(e,n),ha(e+"Capture",n)}function ha(e,n){for(Ds[e]=n,e=0;e<n.length;e++)ws.add(n[e])}var Mh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rs={},Ls={};function Nh(e){return Dr.call(Ls,e)?!0:Dr.call(Rs,e)?!1:Mh.test(e)?Ls[e]=!0:(Rs[e]=!0,!1)}function al(e,n,t){if(Nh(n))if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+t)}}function il(e,n,t){if(t===null)e.removeAttribute(n);else{switch(typeof t){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+t)}}function Pn(e,n,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttributeNS(n,t,""+a)}}function bn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ms(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Bh(e,n,t){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var i=a.get,l=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return i.call(this)},set:function(o){t=""+o,l.call(this,o)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return t},setValue:function(o){t=""+o},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function kr(e){if(!e._valueTracker){var n=Ms(e)?"checked":"value";e._valueTracker=Bh(e,n,""+e[n])}}function Ns(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var t=n.getValue(),a="";return e&&(a=Ms(e)?e.checked?"true":"false":e.value),e=a,e!==t?(n.setValue(e),!0):!1}function ll(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Oh=/[\n"\\]/g;function Sn(e){return e.replace(Oh,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zr(e,n,t,a,i,l,o,c){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),n!=null?o==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+bn(n)):e.value!==""+bn(n)&&(e.value=""+bn(n)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),n!=null?jr(e,o,bn(n)):t!=null?jr(e,o,bn(t)):a!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?e.name=""+bn(c):e.removeAttribute("name")}function Bs(e,n,t,a,i,l,o,c){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),n!=null||t!=null){if(!(l!=="submit"&&l!=="reset"||n!=null)){kr(e);return}t=t!=null?""+bn(t):"",n=n!=null?""+bn(n):t,c||n===e.value||(e.value=n),e.defaultValue=n}a=a??i,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=c?e.checked:!!a,e.defaultChecked=!!a,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),kr(e)}function jr(e,n,t){n==="number"&&ll(e.ownerDocument)===e||e.defaultValue===""+t||(e.defaultValue=""+t)}function ma(e,n,t,a){if(e=e.options,n){n={};for(var i=0;i<t.length;i++)n["$"+t[i]]=!0;for(t=0;t<e.length;t++)i=n.hasOwnProperty("$"+e[t].value),e[t].selected!==i&&(e[t].selected=i),i&&a&&(e[t].defaultSelected=!0)}else{for(t=""+bn(t),n=null,i=0;i<e.length;i++){if(e[i].value===t){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}n!==null||e[i].disabled||(n=e[i])}n!==null&&(n.selected=!0)}}function Os(e,n,t){if(n!=null&&(n=""+bn(n),n!==e.value&&(e.value=n),t==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=t!=null?""+bn(t):""}function Us(e,n,t,a){if(n==null){if(a!=null){if(t!=null)throw Error(u(92));if(Be(a)){if(1<a.length)throw Error(u(93));a=a[0]}t=a}t==null&&(t=""),n=t}t=bn(n),e.defaultValue=t,a=e.textContent,a===t&&a!==""&&a!==null&&(e.value=a),kr(e)}function ga(e,n){if(n){var t=e.firstChild;if(t&&t===e.lastChild&&t.nodeType===3){t.nodeValue=n;return}}e.textContent=n}var Uh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ks(e,n,t){var a=n.indexOf("--")===0;t==null||typeof t=="boolean"||t===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,t):typeof t!="number"||t===0||Uh.has(n)?n==="float"?e.cssFloat=t:e[n]=(""+t).trim():e[n]=t+"px"}function zs(e,n,t){if(n!=null&&typeof n!="object")throw Error(u(62));if(e=e.style,t!=null){for(var a in t)!t.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var i in n)a=n[i],n.hasOwnProperty(i)&&t[i]!==a&&ks(e,i,a)}else for(var l in n)n.hasOwnProperty(l)&&ks(e,l,n[l])}function Gr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rl(e){return zh.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Fn(){}var Hr=null;function Vr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ya=null,va=null;function js(e){var n=pa(e);if(n&&(e=n.stateNode)){var t=e[We]||null;e:switch(e=n.stateNode,n.type){case"input":if(zr(e,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name),n=t.name,t.type==="radio"&&n!=null){for(t=e;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll('input[name="'+Sn(""+n)+'"][type="radio"]'),n=0;n<t.length;n++){var a=t[n];if(a!==e&&a.form===e.form){var i=a[We]||null;if(!i)throw Error(u(90));zr(a,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(n=0;n<t.length;n++)a=t[n],a.form===e.form&&Ns(a)}break e;case"textarea":Os(e,t.value,t.defaultValue);break e;case"select":n=t.value,n!=null&&ma(e,!!t.multiple,n,!1)}}}var Ir=!1;function Gs(e,n,t){if(Ir)return e(n,t);Ir=!0;try{var a=e(n);return a}finally{if(Ir=!1,(ya!==null||va!==null)&&(Xl(),ya&&(n=ya,e=va,va=ya=null,js(n),e)))for(n=0;n<e.length;n++)js(e[n])}}function ai(e,n){var t=e.stateNode;if(t===null)return null;var a=t[We]||null;if(a===null)return null;t=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(t&&typeof t!="function")throw Error(u(231,n,typeof t));return t}var Yn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qr=!1;if(Yn)try{var ii={};Object.defineProperty(ii,"passive",{get:function(){qr=!0}}),window.addEventListener("test",ii,ii),window.removeEventListener("test",ii,ii)}catch{qr=!1}var ht=null,Pr=null,ol=null;function Hs(){if(ol)return ol;var e,n=Pr,t=n.length,a,i="value"in ht?ht.value:ht.textContent,l=i.length;for(e=0;e<t&&n[e]===i[e];e++);var o=t-e;for(a=1;a<=o&&n[t-a]===i[l-a];a++);return ol=i.slice(e,1<a?1-a:void 0)}function ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function sl(){return!0}function Vs(){return!1}function $e(e){function n(t,a,i,l,o){this._reactName=t,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var c in e)e.hasOwnProperty(c)&&(t=e[c],this[c]=t?t(l):l[c]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?sl:Vs,this.isPropagationStopped=Vs,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),n}var Pt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cl=$e(Pt),li=S({},Pt,{view:0,detail:0}),jh=$e(li),Fr,Yr,ri,dl=S({},li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ri&&(ri&&e.type==="mousemove"?(Fr=e.screenX-ri.screenX,Yr=e.screenY-ri.screenY):Yr=Fr=0,ri=e),Fr)},movementY:function(e){return"movementY"in e?e.movementY:Yr}}),Is=$e(dl),Gh=S({},dl,{dataTransfer:0}),Hh=$e(Gh),Vh=S({},li,{relatedTarget:0}),Xr=$e(Vh),Ih=S({},Pt,{animationName:0,elapsedTime:0,pseudoElement:0}),qh=$e(Ih),Ph=S({},Pt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Fh=$e(Ph),Yh=S({},Pt,{data:0}),qs=$e(Yh),Xh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Kh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zh(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Qh[e])?!!n[e]:!1}function Kr(){return Zh}var Jh=S({},li,{key:function(e){if(e.key){var n=Xh[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Kh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kr,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wh=$e(Jh),$h=S({},dl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ps=$e($h),em=S({},li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kr}),nm=$e(em),tm=S({},Pt,{propertyName:0,elapsedTime:0,pseudoElement:0}),am=$e(tm),im=S({},dl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),lm=$e(im),rm=S({},Pt,{newState:0,oldState:0}),om=$e(rm),um=[9,13,27,32],Qr=Yn&&"CompositionEvent"in window,oi=null;Yn&&"documentMode"in document&&(oi=document.documentMode);var sm=Yn&&"TextEvent"in window&&!oi,Fs=Yn&&(!Qr||oi&&8<oi&&11>=oi),Ys=" ",Xs=!1;function Ks(e,n){switch(e){case"keyup":return um.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Qs(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ba=!1;function cm(e,n){switch(e){case"compositionend":return Qs(n);case"keypress":return n.which!==32?null:(Xs=!0,Ys);case"textInput":return e=n.data,e===Ys&&Xs?null:e;default:return null}}function dm(e,n){if(ba)return e==="compositionend"||!Qr&&Ks(e,n)?(e=Hs(),ol=Pr=ht=null,ba=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Fs&&n.locale!=="ko"?null:n.data;default:return null}}var pm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zs(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!pm[e.type]:n==="textarea"}function Js(e,n,t,a){ya?va?va.push(a):va=[a]:ya=a,n=er(n,"onChange"),0<n.length&&(t=new cl("onChange","change",null,t,a),e.push({event:t,listeners:n}))}var ui=null,si=null;function fm(e){Bp(e,0)}function pl(e){var n=ti(e);if(Ns(n))return e}function Ws(e,n){if(e==="change")return n}var $s=!1;if(Yn){var Zr;if(Yn){var Jr="oninput"in document;if(!Jr){var ec=document.createElement("div");ec.setAttribute("oninput","return;"),Jr=typeof ec.oninput=="function"}Zr=Jr}else Zr=!1;$s=Zr&&(!document.documentMode||9<document.documentMode)}function nc(){ui&&(ui.detachEvent("onpropertychange",tc),si=ui=null)}function tc(e){if(e.propertyName==="value"&&pl(si)){var n=[];Js(n,si,e,Vr(e)),Gs(fm,n)}}function hm(e,n,t){e==="focusin"?(nc(),ui=n,si=t,ui.attachEvent("onpropertychange",tc)):e==="focusout"&&nc()}function mm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return pl(si)}function gm(e,n){if(e==="click")return pl(n)}function ym(e,n){if(e==="input"||e==="change")return pl(n)}function vm(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var sn=typeof Object.is=="function"?Object.is:vm;function ci(e,n){if(sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var t=Object.keys(e),a=Object.keys(n);if(t.length!==a.length)return!1;for(a=0;a<t.length;a++){var i=t[a];if(!Dr.call(n,i)||!sn(e[i],n[i]))return!1}return!0}function ac(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ic(e,n){var t=ac(e);e=0;for(var a;t;){if(t.nodeType===3){if(a=e+t.textContent.length,e<=n&&a>=n)return{node:t,offset:n-e};e=a}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=ac(t)}}function lc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?lc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function rc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ll(e.document);n instanceof e.HTMLIFrameElement;){try{var t=typeof n.contentWindow.location.href=="string"}catch{t=!1}if(t)e=n.contentWindow;else break;n=ll(e.document)}return n}function Wr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var bm=Yn&&"documentMode"in document&&11>=document.documentMode,Sa=null,$r=null,di=null,eo=!1;function oc(e,n,t){var a=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;eo||Sa==null||Sa!==ll(a)||(a=Sa,"selectionStart"in a&&Wr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),di&&ci(di,a)||(di=a,a=er($r,"onSelect"),0<a.length&&(n=new cl("onSelect","select",null,n,t),e.push({event:n,listeners:a}),n.target=Sa)))}function Ft(e,n){var t={};return t[e.toLowerCase()]=n.toLowerCase(),t["Webkit"+e]="webkit"+n,t["Moz"+e]="moz"+n,t}var Ca={animationend:Ft("Animation","AnimationEnd"),animationiteration:Ft("Animation","AnimationIteration"),animationstart:Ft("Animation","AnimationStart"),transitionrun:Ft("Transition","TransitionRun"),transitionstart:Ft("Transition","TransitionStart"),transitioncancel:Ft("Transition","TransitionCancel"),transitionend:Ft("Transition","TransitionEnd")},no={},uc={};Yn&&(uc=document.createElement("div").style,"AnimationEvent"in window||(delete Ca.animationend.animation,delete Ca.animationiteration.animation,delete Ca.animationstart.animation),"TransitionEvent"in window||delete Ca.transitionend.transition);function Yt(e){if(no[e])return no[e];if(!Ca[e])return e;var n=Ca[e],t;for(t in n)if(n.hasOwnProperty(t)&&t in uc)return no[e]=n[t];return e}var sc=Yt("animationend"),cc=Yt("animationiteration"),dc=Yt("animationstart"),Sm=Yt("transitionrun"),Cm=Yt("transitionstart"),xm=Yt("transitioncancel"),pc=Yt("transitionend"),fc=new Map,to="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");to.push("scrollEnd");function Mn(e,n){fc.set(e,n),qt(n,[e])}var fl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Cn=[],xa=0,ao=0;function hl(){for(var e=xa,n=ao=xa=0;n<e;){var t=Cn[n];Cn[n++]=null;var a=Cn[n];Cn[n++]=null;var i=Cn[n];Cn[n++]=null;var l=Cn[n];if(Cn[n++]=null,a!==null&&i!==null){var o=a.pending;o===null?i.next=i:(i.next=o.next,o.next=i),a.pending=i}l!==0&&hc(t,i,l)}}function ml(e,n,t,a){Cn[xa++]=e,Cn[xa++]=n,Cn[xa++]=t,Cn[xa++]=a,ao|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function io(e,n,t,a){return ml(e,n,t,a),gl(e)}function Xt(e,n){return ml(e,null,null,n),gl(e)}function hc(e,n,t){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t);for(var i=!1,l=e.return;l!==null;)l.childLanes|=t,a=l.alternate,a!==null&&(a.childLanes|=t),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&n!==null&&(i=31-un(t),e=l.hiddenUpdates,a=e[i],a===null?e[i]=[n]:a.push(n),n.lane=t|536870912),l):null}function gl(e){if(50<Bi)throw Bi=0,hu=null,Error(u(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ea={};function Em(e,n,t,a){this.tag=e,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function cn(e,n,t,a){return new Em(e,n,t,a)}function lo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xn(e,n){var t=e.alternate;return t===null?(t=cn(e.tag,n,e.key,e.mode),t.elementType=e.elementType,t.type=e.type,t.stateNode=e.stateNode,t.alternate=e,e.alternate=t):(t.pendingProps=n,t.type=e.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=e.flags&65011712,t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},t.sibling=e.sibling,t.index=e.index,t.ref=e.ref,t.refCleanup=e.refCleanup,t}function mc(e,n){e.flags&=65011714;var t=e.alternate;return t===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,e.type=t.type,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function yl(e,n,t,a,i,l){var o=0;if(a=e,typeof e=="function")lo(e)&&(o=1);else if(typeof e=="string")o=Dg(e,t,Y.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Ye:return e=cn(31,t,n,i),e.elementType=Ye,e.lanes=l,e;case k:return Kt(t.children,i,l,n);case G:o=8,i|=24;break;case R:return e=cn(12,t,n,i|2),e.elementType=R,e.lanes=l,e;case Q:return e=cn(13,t,n,i),e.elementType=Q,e.lanes=l,e;case he:return e=cn(19,t,n,i),e.elementType=he,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case F:o=10;break e;case I:o=9;break e;case ee:o=11;break e;case W:o=14;break e;case Re:o=16,a=null;break e}o=29,t=Error(u(130,e===null?"null":typeof e,"")),a=null}return n=cn(o,t,n,i),n.elementType=e,n.type=a,n.lanes=l,n}function Kt(e,n,t,a){return e=cn(7,e,a,n),e.lanes=t,e}function ro(e,n,t){return e=cn(6,e,null,n),e.lanes=t,e}function gc(e){var n=cn(18,null,null,0);return n.stateNode=e,n}function oo(e,n,t){return n=cn(4,e.children!==null?e.children:[],e.key,n),n.lanes=t,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var yc=new WeakMap;function xn(e,n){if(typeof e=="object"&&e!==null){var t=yc.get(e);return t!==void 0?t:(n={value:e,source:n,stack:gs(n)},yc.set(e,n),n)}return{value:e,source:n,stack:gs(n)}}var Aa=[],Ta=0,vl=null,pi=0,En=[],An=0,mt=null,jn=1,Gn="";function Kn(e,n){Aa[Ta++]=pi,Aa[Ta++]=vl,vl=e,pi=n}function vc(e,n,t){En[An++]=jn,En[An++]=Gn,En[An++]=mt,mt=e;var a=jn;e=Gn;var i=32-un(a)-1;a&=~(1<<i),t+=1;var l=32-un(n)+i;if(30<l){var o=i-i%5;l=(a&(1<<o)-1).toString(32),a>>=o,i-=o,jn=1<<32-un(n)+i|t<<i|a,Gn=l+e}else jn=1<<l|t<<i|a,Gn=e}function uo(e){e.return!==null&&(Kn(e,1),vc(e,1,0))}function so(e){for(;e===vl;)vl=Aa[--Ta],Aa[Ta]=null,pi=Aa[--Ta],Aa[Ta]=null;for(;e===mt;)mt=En[--An],En[An]=null,Gn=En[--An],En[An]=null,jn=En[--An],En[An]=null}function bc(e,n){En[An++]=jn,En[An++]=Gn,En[An++]=mt,jn=n.id,Gn=n.overflow,mt=e}var Ie=null,Ee=null,se=!1,gt=null,Tn=!1,co=Error(u(519));function yt(e){var n=Error(u(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fi(xn(n,e)),co}function Sc(e){var n=e.stateNode,t=e.type,a=e.memoizedProps;switch(n[Ve]=e,n[We]=a,t){case"dialog":re("cancel",n),re("close",n);break;case"iframe":case"object":case"embed":re("load",n);break;case"video":case"audio":for(t=0;t<Ui.length;t++)re(Ui[t],n);break;case"source":re("error",n);break;case"img":case"image":case"link":re("error",n),re("load",n);break;case"details":re("toggle",n);break;case"input":re("invalid",n),Bs(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":re("invalid",n);break;case"textarea":re("invalid",n),Us(n,a.value,a.defaultValue,a.children)}t=a.children,typeof t!="string"&&typeof t!="number"&&typeof t!="bigint"||n.textContent===""+t||a.suppressHydrationWarning===!0||zp(n.textContent,t)?(a.popover!=null&&(re("beforetoggle",n),re("toggle",n)),a.onScroll!=null&&re("scroll",n),a.onScrollEnd!=null&&re("scrollend",n),a.onClick!=null&&(n.onclick=Fn),n=!0):n=!1,n||yt(e,!0)}function Cc(e){for(Ie=e.return;Ie;)switch(Ie.tag){case 5:case 31:case 13:Tn=!1;return;case 27:case 3:Tn=!0;return;default:Ie=Ie.return}}function _a(e){if(e!==Ie)return!1;if(!se)return Cc(e),se=!0,!1;var n=e.tag,t;if((t=n!==3&&n!==27)&&((t=n===5)&&(t=e.type,t=!(t!=="form"&&t!=="button")||Ru(e.type,e.memoizedProps)),t=!t),t&&Ee&&yt(e),Cc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ee=Yp(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(317));Ee=Yp(e)}else n===27?(n=Ee,Mt(e.type)?(e=Ou,Ou=null,Ee=e):Ee=n):Ee=Ie?wn(e.stateNode.nextSibling):null;return!0}function Qt(){Ee=Ie=null,se=!1}function po(){var e=gt;return e!==null&&(an===null?an=e:an.push.apply(an,e),gt=null),e}function fi(e){gt===null?gt=[e]:gt.push(e)}var fo=b(null),Zt=null,Qn=null;function vt(e,n,t){q(fo,n._currentValue),n._currentValue=t}function Zn(e){e._currentValue=fo.current,z(fo)}function ho(e,n,t){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===t)break;e=e.return}}function mo(e,n,t,a){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var o=i.child;l=l.firstContext;e:for(;l!==null;){var c=l;l=i;for(var g=0;g<n.length;g++)if(c.context===n[g]){l.lanes|=t,c=l.alternate,c!==null&&(c.lanes|=t),ho(l.return,t,e),a||(o=null);break e}l=c.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(u(341));o.lanes|=t,l=o.alternate,l!==null&&(l.lanes|=t),ho(o,t,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function wa(e,n,t,a){e=null;for(var i=n,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(u(387));if(o=o.memoizedProps,o!==null){var c=i.type;sn(i.pendingProps.value,o.value)||(e!==null?e.push(c):e=[c])}}else if(i===fe.current){if(o=i.alternate,o===null)throw Error(u(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(Hi):e=[Hi])}i=i.return}e!==null&&mo(n,e,t,a),n.flags|=262144}function bl(e){for(e=e.firstContext;e!==null;){if(!sn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Jt(e){Zt=e,Qn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function qe(e){return xc(Zt,e)}function Sl(e,n){return Zt===null&&Jt(e),xc(e,n)}function xc(e,n){var t=n._currentValue;if(n={context:n,memoizedValue:t,next:null},Qn===null){if(e===null)throw Error(u(308));Qn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Qn=Qn.next=n;return t}var Am=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(t,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(t){return t()})}},Tm=r.unstable_scheduleCallback,_m=r.unstable_NormalPriority,Oe={$$typeof:F,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function go(){return{controller:new Am,data:new Map,refCount:0}}function hi(e){e.refCount--,e.refCount===0&&Tm(_m,function(){e.controller.abort()})}var mi=null,yo=0,Da=0,Ra=null;function wm(e,n){if(mi===null){var t=mi=[];yo=0,Da=Su(),Ra={status:"pending",value:void 0,then:function(a){t.push(a)}}}return yo++,n.then(Ec,Ec),n}function Ec(){if(--yo===0&&mi!==null){Ra!==null&&(Ra.status="fulfilled");var e=mi;mi=null,Da=0,Ra=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Dm(e,n){var t=[],a={status:"pending",value:null,reason:null,then:function(i){t.push(i)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var i=0;i<t.length;i++)(0,t[i])(n)},function(i){for(a.status="rejected",a.reason=i,i=0;i<t.length;i++)(0,t[i])(void 0)}),a}var Ac=N.S;N.S=function(e,n){op=rn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&wm(e,n),Ac!==null&&Ac(e,n)};var Wt=b(null);function vo(){var e=Wt.current;return e!==null?e:xe.pooledCache}function Cl(e,n){n===null?q(Wt,Wt.current):q(Wt,n.pool)}function Tc(){var e=vo();return e===null?null:{parent:Oe._currentValue,pool:e}}var La=Error(u(460)),bo=Error(u(474)),xl=Error(u(542)),El={then:function(){}};function _c(e){return e=e.status,e==="fulfilled"||e==="rejected"}function wc(e,n,t){switch(t=e[t],t===void 0?e.push(n):t!==n&&(n.then(Fn,Fn),n=t),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Rc(e),e;default:if(typeof n.status=="string")n.then(Fn,Fn);else{if(e=xe,e!==null&&100<e.shellSuspendCounter)throw Error(u(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var i=n;i.status="fulfilled",i.value=a}},function(a){if(n.status==="pending"){var i=n;i.status="rejected",i.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Rc(e),e}throw ea=n,La}}function $t(e){try{var n=e._init;return n(e._payload)}catch(t){throw t!==null&&typeof t=="object"&&typeof t.then=="function"?(ea=t,La):t}}var ea=null;function Dc(){if(ea===null)throw Error(u(459));var e=ea;return ea=null,e}function Rc(e){if(e===La||e===xl)throw Error(u(483))}var Ma=null,gi=0;function Al(e){var n=gi;return gi+=1,Ma===null&&(Ma=[]),wc(Ma,e,n)}function yi(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Tl(e,n){throw n.$$typeof===O?Error(u(525)):(e=Object.prototype.toString.call(n),Error(u(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Lc(e){function n(A,v){if(e){var T=A.deletions;T===null?(A.deletions=[v],A.flags|=16):T.push(v)}}function t(A,v){if(!e)return null;for(;v!==null;)n(A,v),v=v.sibling;return null}function a(A){for(var v=new Map;A!==null;)A.key!==null?v.set(A.key,A):v.set(A.index,A),A=A.sibling;return v}function i(A,v){return A=Xn(A,v),A.index=0,A.sibling=null,A}function l(A,v,T){return A.index=T,e?(T=A.alternate,T!==null?(T=T.index,T<v?(A.flags|=67108866,v):T):(A.flags|=67108866,v)):(A.flags|=1048576,v)}function o(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function c(A,v,T,B){return v===null||v.tag!==6?(v=ro(T,A.mode,B),v.return=A,v):(v=i(v,T),v.return=A,v)}function g(A,v,T,B){var K=T.type;return K===k?M(A,v,T.props.children,B,T.key):v!==null&&(v.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Re&&$t(K)===v.type)?(v=i(v,T.props),yi(v,T),v.return=A,v):(v=yl(T.type,T.key,T.props,null,A.mode,B),yi(v,T),v.return=A,v)}function _(A,v,T,B){return v===null||v.tag!==4||v.stateNode.containerInfo!==T.containerInfo||v.stateNode.implementation!==T.implementation?(v=oo(T,A.mode,B),v.return=A,v):(v=i(v,T.children||[]),v.return=A,v)}function M(A,v,T,B,K){return v===null||v.tag!==7?(v=Kt(T,A.mode,B,K),v.return=A,v):(v=i(v,T),v.return=A,v)}function U(A,v,T){if(typeof v=="string"&&v!==""||typeof v=="number"||typeof v=="bigint")return v=ro(""+v,A.mode,T),v.return=A,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case H:return T=yl(v.type,v.key,v.props,null,A.mode,T),yi(T,v),T.return=A,T;case j:return v=oo(v,A.mode,T),v.return=A,v;case Re:return v=$t(v),U(A,v,T)}if(Be(v)||Xe(v))return v=Kt(v,A.mode,T,null),v.return=A,v;if(typeof v.then=="function")return U(A,Al(v),T);if(v.$$typeof===F)return U(A,Sl(A,v),T);Tl(A,v)}return null}function w(A,v,T,B){var K=v!==null?v.key:null;if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return K!==null?null:c(A,v,""+T,B);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case H:return T.key===K?g(A,v,T,B):null;case j:return T.key===K?_(A,v,T,B):null;case Re:return T=$t(T),w(A,v,T,B)}if(Be(T)||Xe(T))return K!==null?null:M(A,v,T,B,null);if(typeof T.then=="function")return w(A,v,Al(T),B);if(T.$$typeof===F)return w(A,v,Sl(A,T),B);Tl(A,T)}return null}function D(A,v,T,B,K){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return A=A.get(T)||null,c(v,A,""+B,K);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case H:return A=A.get(B.key===null?T:B.key)||null,g(v,A,B,K);case j:return A=A.get(B.key===null?T:B.key)||null,_(v,A,B,K);case Re:return B=$t(B),D(A,v,T,B,K)}if(Be(B)||Xe(B))return A=A.get(T)||null,M(v,A,B,K,null);if(typeof B.then=="function")return D(A,v,T,Al(B),K);if(B.$$typeof===F)return D(A,v,T,Sl(v,B),K);Tl(v,B)}return null}function P(A,v,T,B){for(var K=null,ce=null,X=v,ae=v=0,ue=null;X!==null&&ae<T.length;ae++){X.index>ae?(ue=X,X=null):ue=X.sibling;var de=w(A,X,T[ae],B);if(de===null){X===null&&(X=ue);break}e&&X&&de.alternate===null&&n(A,X),v=l(de,v,ae),ce===null?K=de:ce.sibling=de,ce=de,X=ue}if(ae===T.length)return t(A,X),se&&Kn(A,ae),K;if(X===null){for(;ae<T.length;ae++)X=U(A,T[ae],B),X!==null&&(v=l(X,v,ae),ce===null?K=X:ce.sibling=X,ce=X);return se&&Kn(A,ae),K}for(X=a(X);ae<T.length;ae++)ue=D(X,A,ae,T[ae],B),ue!==null&&(e&&ue.alternate!==null&&X.delete(ue.key===null?ae:ue.key),v=l(ue,v,ae),ce===null?K=ue:ce.sibling=ue,ce=ue);return e&&X.forEach(function(kt){return n(A,kt)}),se&&Kn(A,ae),K}function Z(A,v,T,B){if(T==null)throw Error(u(151));for(var K=null,ce=null,X=v,ae=v=0,ue=null,de=T.next();X!==null&&!de.done;ae++,de=T.next()){X.index>ae?(ue=X,X=null):ue=X.sibling;var kt=w(A,X,de.value,B);if(kt===null){X===null&&(X=ue);break}e&&X&&kt.alternate===null&&n(A,X),v=l(kt,v,ae),ce===null?K=kt:ce.sibling=kt,ce=kt,X=ue}if(de.done)return t(A,X),se&&Kn(A,ae),K;if(X===null){for(;!de.done;ae++,de=T.next())de=U(A,de.value,B),de!==null&&(v=l(de,v,ae),ce===null?K=de:ce.sibling=de,ce=de);return se&&Kn(A,ae),K}for(X=a(X);!de.done;ae++,de=T.next())de=D(X,A,ae,de.value,B),de!==null&&(e&&de.alternate!==null&&X.delete(de.key===null?ae:de.key),v=l(de,v,ae),ce===null?K=de:ce.sibling=de,ce=de);return e&&X.forEach(function(Gg){return n(A,Gg)}),se&&Kn(A,ae),K}function Se(A,v,T,B){if(typeof T=="object"&&T!==null&&T.type===k&&T.key===null&&(T=T.props.children),typeof T=="object"&&T!==null){switch(T.$$typeof){case H:e:{for(var K=T.key;v!==null;){if(v.key===K){if(K=T.type,K===k){if(v.tag===7){t(A,v.sibling),B=i(v,T.props.children),B.return=A,A=B;break e}}else if(v.elementType===K||typeof K=="object"&&K!==null&&K.$$typeof===Re&&$t(K)===v.type){t(A,v.sibling),B=i(v,T.props),yi(B,T),B.return=A,A=B;break e}t(A,v);break}else n(A,v);v=v.sibling}T.type===k?(B=Kt(T.props.children,A.mode,B,T.key),B.return=A,A=B):(B=yl(T.type,T.key,T.props,null,A.mode,B),yi(B,T),B.return=A,A=B)}return o(A);case j:e:{for(K=T.key;v!==null;){if(v.key===K)if(v.tag===4&&v.stateNode.containerInfo===T.containerInfo&&v.stateNode.implementation===T.implementation){t(A,v.sibling),B=i(v,T.children||[]),B.return=A,A=B;break e}else{t(A,v);break}else n(A,v);v=v.sibling}B=oo(T,A.mode,B),B.return=A,A=B}return o(A);case Re:return T=$t(T),Se(A,v,T,B)}if(Be(T))return P(A,v,T,B);if(Xe(T)){if(K=Xe(T),typeof K!="function")throw Error(u(150));return T=K.call(T),Z(A,v,T,B)}if(typeof T.then=="function")return Se(A,v,Al(T),B);if(T.$$typeof===F)return Se(A,v,Sl(A,T),B);Tl(A,T)}return typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint"?(T=""+T,v!==null&&v.tag===6?(t(A,v.sibling),B=i(v,T),B.return=A,A=B):(t(A,v),B=ro(T,A.mode,B),B.return=A,A=B),o(A)):t(A,v)}return function(A,v,T,B){try{gi=0;var K=Se(A,v,T,B);return Ma=null,K}catch(X){if(X===La||X===xl)throw X;var ce=cn(29,X,null,A.mode);return ce.lanes=B,ce.return=A,ce}finally{}}}var na=Lc(!0),Mc=Lc(!1),bt=!1;function So(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Co(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function St(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ct(e,n,t){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(pe&2)!==0){var i=a.pending;return i===null?n.next=n:(n.next=i.next,i.next=n),a.pending=n,n=gl(e),hc(e,null,t),n}return ml(e,a,n,t),gl(e)}function vi(e,n,t){if(n=n.updateQueue,n!==null&&(n=n.shared,(t&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,xs(e,t)}}function xo(e,n){var t=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,t===a)){var i=null,l=null;if(t=t.firstBaseUpdate,t!==null){do{var o={lane:t.lane,tag:t.tag,payload:t.payload,callback:null,next:null};l===null?i=l=o:l=l.next=o,t=t.next}while(t!==null);l===null?i=l=n:l=l.next=n}else i=l=n;t={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,callbacks:a.callbacks},e.updateQueue=t;return}e=t.lastBaseUpdate,e===null?t.firstBaseUpdate=n:e.next=n,t.lastBaseUpdate=n}var Eo=!1;function bi(){if(Eo){var e=Ra;if(e!==null)throw e}}function Si(e,n,t,a){Eo=!1;var i=e.updateQueue;bt=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var g=c,_=g.next;g.next=null,o===null?l=_:o.next=_,o=g;var M=e.alternate;M!==null&&(M=M.updateQueue,c=M.lastBaseUpdate,c!==o&&(c===null?M.firstBaseUpdate=_:c.next=_,M.lastBaseUpdate=g))}if(l!==null){var U=i.baseState;o=0,M=_=g=null,c=l;do{var w=c.lane&-536870913,D=w!==c.lane;if(D?(oe&w)===w:(a&w)===w){w!==0&&w===Da&&(Eo=!0),M!==null&&(M=M.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});e:{var P=e,Z=c;w=n;var Se=t;switch(Z.tag){case 1:if(P=Z.payload,typeof P=="function"){U=P.call(Se,U,w);break e}U=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=Z.payload,w=typeof P=="function"?P.call(Se,U,w):P,w==null)break e;U=S({},U,w);break e;case 2:bt=!0}}w=c.callback,w!==null&&(e.flags|=64,D&&(e.flags|=8192),D=i.callbacks,D===null?i.callbacks=[w]:D.push(w))}else D={lane:w,tag:c.tag,payload:c.payload,callback:c.callback,next:null},M===null?(_=M=D,g=U):M=M.next=D,o|=w;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;D=c,c=D.next,D.next=null,i.lastBaseUpdate=D,i.shared.pending=null}}while(!0);M===null&&(g=U),i.baseState=g,i.firstBaseUpdate=_,i.lastBaseUpdate=M,l===null&&(i.shared.lanes=0),_t|=o,e.lanes=o,e.memoizedState=U}}function Nc(e,n){if(typeof e!="function")throw Error(u(191,e));e.call(n)}function Bc(e,n){var t=e.callbacks;if(t!==null)for(e.callbacks=null,e=0;e<t.length;e++)Nc(t[e],n)}var Na=b(null),_l=b(0);function Oc(e,n){e=lt,q(_l,e),q(Na,n),lt=e|n.baseLanes}function Ao(){q(_l,lt),q(Na,Na.current)}function To(){lt=_l.current,z(Na),z(_l)}var dn=b(null),_n=null;function xt(e){var n=e.alternate;q(Me,Me.current&1),q(dn,e),_n===null&&(n===null||Na.current!==null||n.memoizedState!==null)&&(_n=e)}function _o(e){q(Me,Me.current),q(dn,e),_n===null&&(_n=e)}function Uc(e){e.tag===22?(q(Me,Me.current),q(dn,e),_n===null&&(_n=e)):Et()}function Et(){q(Me,Me.current),q(dn,dn.current)}function pn(e){z(dn),_n===e&&(_n=null),z(Me)}var Me=b(0);function wl(e){for(var n=e;n!==null;){if(n.tag===13){var t=n.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||Nu(t)||Bu(t)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Jn=0,te=null,ve=null,Ue=null,Dl=!1,Ba=!1,ta=!1,Rl=0,Ci=0,Oa=null,Rm=0;function we(){throw Error(u(321))}function wo(e,n){if(n===null)return!1;for(var t=0;t<n.length&&t<e.length;t++)if(!sn(e[t],n[t]))return!1;return!0}function Do(e,n,t,a,i,l){return Jn=l,te=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,N.H=e===null||e.memoizedState===null?vd:qo,ta=!1,l=t(a,i),ta=!1,Ba&&(l=zc(n,t,a,i)),kc(e),l}function kc(e){N.H=Ai;var n=ve!==null&&ve.next!==null;if(Jn=0,Ue=ve=te=null,Dl=!1,Ci=0,Oa=null,n)throw Error(u(300));e===null||ke||(e=e.dependencies,e!==null&&bl(e)&&(ke=!0))}function zc(e,n,t,a){te=e;var i=0;do{if(Ba&&(Oa=null),Ci=0,Ba=!1,25<=i)throw Error(u(301));if(i+=1,Ue=ve=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}N.H=bd,l=n(t,a)}while(Ba);return l}function Lm(){var e=N.H,n=e.useState()[0];return n=typeof n.then=="function"?xi(n):n,e=e.useState()[0],(ve!==null?ve.memoizedState:null)!==e&&(te.flags|=1024),n}function Ro(){var e=Rl!==0;return Rl=0,e}function Lo(e,n,t){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~t}function Mo(e){if(Dl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Dl=!1}Jn=0,Ue=ve=te=null,Ba=!1,Ci=Rl=0,Oa=null}function Je(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?te.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Ne(){if(ve===null){var e=te.alternate;e=e!==null?e.memoizedState:null}else e=ve.next;var n=Ue===null?te.memoizedState:Ue.next;if(n!==null)Ue=n,ve=e;else{if(e===null)throw te.alternate===null?Error(u(467)):Error(u(310));ve=e,e={memoizedState:ve.memoizedState,baseState:ve.baseState,baseQueue:ve.baseQueue,queue:ve.queue,next:null},Ue===null?te.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Ll(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function xi(e){var n=Ci;return Ci+=1,Oa===null&&(Oa=[]),e=wc(Oa,e,n),n=te,(Ue===null?n.memoizedState:Ue.next)===null&&(n=n.alternate,N.H=n===null||n.memoizedState===null?vd:qo),e}function Ml(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return xi(e);if(e.$$typeof===F)return qe(e)}throw Error(u(438,String(e)))}function No(e){var n=null,t=te.updateQueue;if(t!==null&&(n=t.memoCache),n==null){var a=te.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(i){return i.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),t===null&&(t=Ll(),te.updateQueue=t),t.memoCache=n,t=n.data[n.index],t===void 0)for(t=n.data[n.index]=Array(e),a=0;a<e;a++)t[a]=kn;return n.index++,t}function Wn(e,n){return typeof n=="function"?n(e):n}function Nl(e){var n=Ne();return Bo(n,ve,e)}function Bo(e,n,t){var a=e.queue;if(a===null)throw Error(u(311));a.lastRenderedReducer=t;var i=e.baseQueue,l=a.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}n.baseQueue=i=l,a.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{n=i.next;var c=o=null,g=null,_=n,M=!1;do{var U=_.lane&-536870913;if(U!==_.lane?(oe&U)===U:(Jn&U)===U){var w=_.revertLane;if(w===0)g!==null&&(g=g.next={lane:0,revertLane:0,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null}),U===Da&&(M=!0);else if((Jn&w)===w){_=_.next,w===Da&&(M=!0);continue}else U={lane:0,revertLane:_.revertLane,gesture:null,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},g===null?(c=g=U,o=l):g=g.next=U,te.lanes|=w,_t|=w;U=_.action,ta&&t(l,U),l=_.hasEagerState?_.eagerState:t(l,U)}else w={lane:U,revertLane:_.revertLane,gesture:_.gesture,action:_.action,hasEagerState:_.hasEagerState,eagerState:_.eagerState,next:null},g===null?(c=g=w,o=l):g=g.next=w,te.lanes|=U,_t|=U;_=_.next}while(_!==null&&_!==n);if(g===null?o=l:g.next=c,!sn(l,e.memoizedState)&&(ke=!0,M&&(t=Ra,t!==null)))throw t;e.memoizedState=l,e.baseState=o,e.baseQueue=g,a.lastRenderedState=l}return i===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Oo(e){var n=Ne(),t=n.queue;if(t===null)throw Error(u(311));t.lastRenderedReducer=e;var a=t.dispatch,i=t.pending,l=n.memoizedState;if(i!==null){t.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);sn(l,n.memoizedState)||(ke=!0),n.memoizedState=l,n.baseQueue===null&&(n.baseState=l),t.lastRenderedState=l}return[l,a]}function jc(e,n,t){var a=te,i=Ne(),l=se;if(l){if(t===void 0)throw Error(u(407));t=t()}else t=n();var o=!sn((ve||i).memoizedState,t);if(o&&(i.memoizedState=t,ke=!0),i=i.queue,zo(Vc.bind(null,a,i,e),[e]),i.getSnapshot!==n||o||Ue!==null&&Ue.memoizedState.tag&1){if(a.flags|=2048,Ua(9,{destroy:void 0},Hc.bind(null,a,i,t,n),null),xe===null)throw Error(u(349));l||(Jn&127)!==0||Gc(a,n,t)}return t}function Gc(e,n,t){e.flags|=16384,e={getSnapshot:n,value:t},n=te.updateQueue,n===null?(n=Ll(),te.updateQueue=n,n.stores=[e]):(t=n.stores,t===null?n.stores=[e]:t.push(e))}function Hc(e,n,t,a){n.value=t,n.getSnapshot=a,Ic(n)&&qc(e)}function Vc(e,n,t){return t(function(){Ic(n)&&qc(e)})}function Ic(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!sn(e,t)}catch{return!0}}function qc(e){var n=Xt(e,2);n!==null&&ln(n,e,2)}function Uo(e){var n=Je();if(typeof e=="function"){var t=e;if(e=t(),ta){pt(!0);try{t()}finally{pt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:e},n}function Pc(e,n,t,a){return e.baseState=t,Bo(e,ve,typeof a=="function"?a:Wn)}function Mm(e,n,t,a,i){if(Ul(e))throw Error(u(485));if(e=n.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){l.listeners.push(o)}};N.T!==null?t(!0):l.isTransition=!1,a(l),t=n.pending,t===null?(l.next=n.pending=l,Fc(n,l)):(l.next=t.next,n.pending=t.next=l)}}function Fc(e,n){var t=n.action,a=n.payload,i=e.state;if(n.isTransition){var l=N.T,o={};N.T=o;try{var c=t(i,a),g=N.S;g!==null&&g(o,c),Yc(e,n,c)}catch(_){ko(e,n,_)}finally{l!==null&&o.types!==null&&(l.types=o.types),N.T=l}}else try{l=t(i,a),Yc(e,n,l)}catch(_){ko(e,n,_)}}function Yc(e,n,t){t!==null&&typeof t=="object"&&typeof t.then=="function"?t.then(function(a){Xc(e,n,a)},function(a){return ko(e,n,a)}):Xc(e,n,t)}function Xc(e,n,t){n.status="fulfilled",n.value=t,Kc(n),e.state=t,n=e.pending,n!==null&&(t=n.next,t===n?e.pending=null:(t=t.next,n.next=t,Fc(e,t)))}function ko(e,n,t){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=t,Kc(n),n=n.next;while(n!==a)}e.action=null}function Kc(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Qc(e,n){return n}function Zc(e,n){if(se){var t=xe.formState;if(t!==null){e:{var a=te;if(se){if(Ee){n:{for(var i=Ee,l=Tn;i.nodeType!==8;){if(!l){i=null;break n}if(i=wn(i.nextSibling),i===null){i=null;break n}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){Ee=wn(i.nextSibling),a=i.data==="F!";break e}}yt(a)}a=!1}a&&(n=t[0])}}return t=Je(),t.memoizedState=t.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qc,lastRenderedState:n},t.queue=a,t=md.bind(null,te,a),a.dispatch=t,a=Uo(!1),l=Io.bind(null,te,!1,a.queue),a=Je(),i={state:n,dispatch:null,action:e,pending:null},a.queue=i,t=Mm.bind(null,te,i,l,t),i.dispatch=t,a.memoizedState=e,[n,t,!1]}function Jc(e){var n=Ne();return Wc(n,ve,e)}function Wc(e,n,t){if(n=Bo(e,n,Qc)[0],e=Nl(Wn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=xi(n)}catch(o){throw o===La?xl:o}else a=n;n=Ne();var i=n.queue,l=i.dispatch;return t!==n.memoizedState&&(te.flags|=2048,Ua(9,{destroy:void 0},Nm.bind(null,i,t),null)),[a,l,e]}function Nm(e,n){e.action=n}function $c(e){var n=Ne(),t=ve;if(t!==null)return Wc(n,t,e);Ne(),n=n.memoizedState,t=Ne();var a=t.queue.dispatch;return t.memoizedState=e,[n,a,!1]}function Ua(e,n,t,a){return e={tag:e,create:t,deps:a,inst:n,next:null},n=te.updateQueue,n===null&&(n=Ll(),te.updateQueue=n),t=n.lastEffect,t===null?n.lastEffect=e.next=e:(a=t.next,t.next=e,e.next=a,n.lastEffect=e),e}function ed(){return Ne().memoizedState}function Bl(e,n,t,a){var i=Je();te.flags|=e,i.memoizedState=Ua(1|n,{destroy:void 0},t,a===void 0?null:a)}function Ol(e,n,t,a){var i=Ne();a=a===void 0?null:a;var l=i.memoizedState.inst;ve!==null&&a!==null&&wo(a,ve.memoizedState.deps)?i.memoizedState=Ua(n,l,t,a):(te.flags|=e,i.memoizedState=Ua(1|n,l,t,a))}function nd(e,n){Bl(8390656,8,e,n)}function zo(e,n){Ol(2048,8,e,n)}function Bm(e){te.flags|=4;var n=te.updateQueue;if(n===null)n=Ll(),te.updateQueue=n,n.events=[e];else{var t=n.events;t===null?n.events=[e]:t.push(e)}}function td(e){var n=Ne().memoizedState;return Bm({ref:n,nextImpl:e}),function(){if((pe&2)!==0)throw Error(u(440));return n.impl.apply(void 0,arguments)}}function ad(e,n){return Ol(4,2,e,n)}function id(e,n){return Ol(4,4,e,n)}function ld(e,n){if(typeof n=="function"){e=e();var t=n(e);return function(){typeof t=="function"?t():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function rd(e,n,t){t=t!=null?t.concat([e]):null,Ol(4,4,ld.bind(null,n,e),t)}function jo(){}function od(e,n){var t=Ne();n=n===void 0?null:n;var a=t.memoizedState;return n!==null&&wo(n,a[1])?a[0]:(t.memoizedState=[e,n],e)}function ud(e,n){var t=Ne();n=n===void 0?null:n;var a=t.memoizedState;if(n!==null&&wo(n,a[1]))return a[0];if(a=e(),ta){pt(!0);try{e()}finally{pt(!1)}}return t.memoizedState=[a,n],a}function Go(e,n,t){return t===void 0||(Jn&1073741824)!==0&&(oe&261930)===0?e.memoizedState=n:(e.memoizedState=t,e=sp(),te.lanes|=e,_t|=e,t)}function sd(e,n,t,a){return sn(t,n)?t:Na.current!==null?(e=Go(e,t,a),sn(e,n)||(ke=!0),e):(Jn&42)===0||(Jn&1073741824)!==0&&(oe&261930)===0?(ke=!0,e.memoizedState=t):(e=sp(),te.lanes|=e,_t|=e,n)}function cd(e,n,t,a,i){var l=V.p;V.p=l!==0&&8>l?l:8;var o=N.T,c={};N.T=c,Io(e,!1,n,t);try{var g=i(),_=N.S;if(_!==null&&_(c,g),g!==null&&typeof g=="object"&&typeof g.then=="function"){var M=Dm(g,a);Ei(e,n,M,mn(e))}else Ei(e,n,a,mn(e))}catch(U){Ei(e,n,{then:function(){},status:"rejected",reason:U},mn())}finally{V.p=l,o!==null&&c.types!==null&&(o.types=c.types),N.T=o}}function Om(){}function Ho(e,n,t,a){if(e.tag!==5)throw Error(u(476));var i=dd(e).queue;cd(e,i,n,J,t===null?Om:function(){return pd(e),t(a)})}function dd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:J,baseState:J,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:J},next:null};var t={};return n.next={memoizedState:t,baseState:t,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:t},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function pd(e){var n=dd(e);n.next===null&&(n=e.alternate.memoizedState),Ei(e,n.next.queue,{},mn())}function Vo(){return qe(Hi)}function fd(){return Ne().memoizedState}function hd(){return Ne().memoizedState}function Um(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var t=mn();e=St(t);var a=Ct(n,e,t);a!==null&&(ln(a,n,t),vi(a,n,t)),n={cache:go()},e.payload=n;return}n=n.return}}function km(e,n,t){var a=mn();t={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null},Ul(e)?gd(n,t):(t=io(e,n,t,a),t!==null&&(ln(t,e,a),yd(t,n,a)))}function md(e,n,t){var a=mn();Ei(e,n,t,a)}function Ei(e,n,t,a){var i={lane:a,revertLane:0,gesture:null,action:t,hasEagerState:!1,eagerState:null,next:null};if(Ul(e))gd(n,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=n.lastRenderedReducer,l!==null))try{var o=n.lastRenderedState,c=l(o,t);if(i.hasEagerState=!0,i.eagerState=c,sn(c,o))return ml(e,n,i,0),xe===null&&hl(),!1}catch{}finally{}if(t=io(e,n,i,a),t!==null)return ln(t,e,a),yd(t,n,a),!0}return!1}function Io(e,n,t,a){if(a={lane:2,revertLane:Su(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ul(e)){if(n)throw Error(u(479))}else n=io(e,t,a,2),n!==null&&ln(n,e,2)}function Ul(e){var n=e.alternate;return e===te||n!==null&&n===te}function gd(e,n){Ba=Dl=!0;var t=e.pending;t===null?n.next=n:(n.next=t.next,t.next=n),e.pending=n}function yd(e,n,t){if((t&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,t|=a,n.lanes=t,xs(e,t)}}var Ai={readContext:qe,use:Ml,useCallback:we,useContext:we,useEffect:we,useImperativeHandle:we,useLayoutEffect:we,useInsertionEffect:we,useMemo:we,useReducer:we,useRef:we,useState:we,useDebugValue:we,useDeferredValue:we,useTransition:we,useSyncExternalStore:we,useId:we,useHostTransitionStatus:we,useFormState:we,useActionState:we,useOptimistic:we,useMemoCache:we,useCacheRefresh:we};Ai.useEffectEvent=we;var vd={readContext:qe,use:Ml,useCallback:function(e,n){return Je().memoizedState=[e,n===void 0?null:n],e},useContext:qe,useEffect:nd,useImperativeHandle:function(e,n,t){t=t!=null?t.concat([e]):null,Bl(4194308,4,ld.bind(null,n,e),t)},useLayoutEffect:function(e,n){return Bl(4194308,4,e,n)},useInsertionEffect:function(e,n){Bl(4,2,e,n)},useMemo:function(e,n){var t=Je();n=n===void 0?null:n;var a=e();if(ta){pt(!0);try{e()}finally{pt(!1)}}return t.memoizedState=[a,n],a},useReducer:function(e,n,t){var a=Je();if(t!==void 0){var i=t(n);if(ta){pt(!0);try{t(n)}finally{pt(!1)}}}else i=n;return a.memoizedState=a.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},a.queue=e,e=e.dispatch=km.bind(null,te,e),[a.memoizedState,e]},useRef:function(e){var n=Je();return e={current:e},n.memoizedState=e},useState:function(e){e=Uo(e);var n=e.queue,t=md.bind(null,te,n);return n.dispatch=t,[e.memoizedState,t]},useDebugValue:jo,useDeferredValue:function(e,n){var t=Je();return Go(t,e,n)},useTransition:function(){var e=Uo(!1);return e=cd.bind(null,te,e.queue,!0,!1),Je().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,t){var a=te,i=Je();if(se){if(t===void 0)throw Error(u(407));t=t()}else{if(t=n(),xe===null)throw Error(u(349));(oe&127)!==0||Gc(a,n,t)}i.memoizedState=t;var l={value:t,getSnapshot:n};return i.queue=l,nd(Vc.bind(null,a,l,e),[e]),a.flags|=2048,Ua(9,{destroy:void 0},Hc.bind(null,a,l,t,n),null),t},useId:function(){var e=Je(),n=xe.identifierPrefix;if(se){var t=Gn,a=jn;t=(a&~(1<<32-un(a)-1)).toString(32)+t,n="_"+n+"R_"+t,t=Rl++,0<t&&(n+="H"+t.toString(32)),n+="_"}else t=Rm++,n="_"+n+"r_"+t.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Vo,useFormState:Zc,useActionState:Zc,useOptimistic:function(e){var n=Je();n.memoizedState=n.baseState=e;var t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=t,n=Io.bind(null,te,!0,t),t.dispatch=n,[e,n]},useMemoCache:No,useCacheRefresh:function(){return Je().memoizedState=Um.bind(null,te)},useEffectEvent:function(e){var n=Je(),t={impl:e};return n.memoizedState=t,function(){if((pe&2)!==0)throw Error(u(440));return t.impl.apply(void 0,arguments)}}},qo={readContext:qe,use:Ml,useCallback:od,useContext:qe,useEffect:zo,useImperativeHandle:rd,useInsertionEffect:ad,useLayoutEffect:id,useMemo:ud,useReducer:Nl,useRef:ed,useState:function(){return Nl(Wn)},useDebugValue:jo,useDeferredValue:function(e,n){var t=Ne();return sd(t,ve.memoizedState,e,n)},useTransition:function(){var e=Nl(Wn)[0],n=Ne().memoizedState;return[typeof e=="boolean"?e:xi(e),n]},useSyncExternalStore:jc,useId:fd,useHostTransitionStatus:Vo,useFormState:Jc,useActionState:Jc,useOptimistic:function(e,n){var t=Ne();return Pc(t,ve,e,n)},useMemoCache:No,useCacheRefresh:hd};qo.useEffectEvent=td;var bd={readContext:qe,use:Ml,useCallback:od,useContext:qe,useEffect:zo,useImperativeHandle:rd,useInsertionEffect:ad,useLayoutEffect:id,useMemo:ud,useReducer:Oo,useRef:ed,useState:function(){return Oo(Wn)},useDebugValue:jo,useDeferredValue:function(e,n){var t=Ne();return ve===null?Go(t,e,n):sd(t,ve.memoizedState,e,n)},useTransition:function(){var e=Oo(Wn)[0],n=Ne().memoizedState;return[typeof e=="boolean"?e:xi(e),n]},useSyncExternalStore:jc,useId:fd,useHostTransitionStatus:Vo,useFormState:$c,useActionState:$c,useOptimistic:function(e,n){var t=Ne();return ve!==null?Pc(t,ve,e,n):(t.baseState=e,[e,t.queue.dispatch])},useMemoCache:No,useCacheRefresh:hd};bd.useEffectEvent=td;function Po(e,n,t,a){n=e.memoizedState,t=t(a,n),t=t==null?n:S({},n,t),e.memoizedState=t,e.lanes===0&&(e.updateQueue.baseState=t)}var Fo={enqueueSetState:function(e,n,t){e=e._reactInternals;var a=mn(),i=St(a);i.payload=n,t!=null&&(i.callback=t),n=Ct(e,i,a),n!==null&&(ln(n,e,a),vi(n,e,a))},enqueueReplaceState:function(e,n,t){e=e._reactInternals;var a=mn(),i=St(a);i.tag=1,i.payload=n,t!=null&&(i.callback=t),n=Ct(e,i,a),n!==null&&(ln(n,e,a),vi(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var t=mn(),a=St(t);a.tag=2,n!=null&&(a.callback=n),n=Ct(e,a,t),n!==null&&(ln(n,e,t),vi(n,e,t))}};function Sd(e,n,t,a,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,o):n.prototype&&n.prototype.isPureReactComponent?!ci(t,a)||!ci(i,l):!0}function Cd(e,n,t,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(t,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(t,a),n.state!==e&&Fo.enqueueReplaceState(n,n.state,null)}function aa(e,n){var t=n;if("ref"in n){t={};for(var a in n)a!=="ref"&&(t[a]=n[a])}if(e=e.defaultProps){t===n&&(t=S({},t));for(var i in e)t[i]===void 0&&(t[i]=e[i])}return t}function xd(e){fl(e)}function Ed(e){console.error(e)}function Ad(e){fl(e)}function kl(e,n){try{var t=e.onUncaughtError;t(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function Td(e,n,t){try{var a=e.onCaughtError;a(t.value,{componentStack:t.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function Yo(e,n,t){return t=St(t),t.tag=3,t.payload={element:null},t.callback=function(){kl(e,n)},t}function _d(e){return e=St(e),e.tag=3,e}function wd(e,n,t,a){var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var l=a.value;e.payload=function(){return i(l)},e.callback=function(){Td(n,t,a)}}var o=t.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){Td(n,t,a),typeof i!="function"&&(wt===null?wt=new Set([this]):wt.add(this));var c=a.stack;this.componentDidCatch(a.value,{componentStack:c!==null?c:""})})}function zm(e,n,t,a,i){if(t.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=t.alternate,n!==null&&wa(n,t,i,!0),t=dn.current,t!==null){switch(t.tag){case 31:case 13:return _n===null?Kl():t.alternate===null&&De===0&&(De=3),t.flags&=-257,t.flags|=65536,t.lanes=i,a===El?t.flags|=16384:(n=t.updateQueue,n===null?t.updateQueue=new Set([a]):n.add(a),yu(e,a,i)),!1;case 22:return t.flags|=65536,a===El?t.flags|=16384:(n=t.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},t.updateQueue=n):(t=n.retryQueue,t===null?n.retryQueue=new Set([a]):t.add(a)),yu(e,a,i)),!1}throw Error(u(435,t.tag))}return yu(e,a,i),Kl(),!1}if(se)return n=dn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=i,a!==co&&(e=Error(u(422),{cause:a}),fi(xn(e,t)))):(a!==co&&(n=Error(u(423),{cause:a}),fi(xn(n,t))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,a=xn(a,t),i=Yo(e.stateNode,a,i),xo(e,i),De!==4&&(De=2)),!1;var l=Error(u(520),{cause:a});if(l=xn(l,t),Ni===null?Ni=[l]:Ni.push(l),De!==4&&(De=2),n===null)return!0;a=xn(a,t),t=n;do{switch(t.tag){case 3:return t.flags|=65536,e=i&-i,t.lanes|=e,e=Yo(t.stateNode,a,e),xo(t,e),!1;case 1:if(n=t.type,l=t.stateNode,(t.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(wt===null||!wt.has(l))))return t.flags|=65536,i&=-i,t.lanes|=i,i=_d(i),wd(i,e,t,a),xo(t,i),!1}t=t.return}while(t!==null);return!1}var Xo=Error(u(461)),ke=!1;function Pe(e,n,t,a){n.child=e===null?Mc(n,null,t,a):na(n,e.child,t,a)}function Dd(e,n,t,a,i){t=t.render;var l=n.ref;if("ref"in a){var o={};for(var c in a)c!=="ref"&&(o[c]=a[c])}else o=a;return Jt(n),a=Do(e,n,t,o,l,i),c=Ro(),e!==null&&!ke?(Lo(e,n,i),$n(e,n,i)):(se&&c&&uo(n),n.flags|=1,Pe(e,n,a,i),n.child)}function Rd(e,n,t,a,i){if(e===null){var l=t.type;return typeof l=="function"&&!lo(l)&&l.defaultProps===void 0&&t.compare===null?(n.tag=15,n.type=l,Ld(e,n,l,a,i)):(e=yl(t.type,null,a,n,n.mode,i),e.ref=n.ref,e.return=n,n.child=e)}if(l=e.child,!nu(e,i)){var o=l.memoizedProps;if(t=t.compare,t=t!==null?t:ci,t(o,a)&&e.ref===n.ref)return $n(e,n,i)}return n.flags|=1,e=Xn(l,a),e.ref=n.ref,e.return=n,n.child=e}function Ld(e,n,t,a,i){if(e!==null){var l=e.memoizedProps;if(ci(l,a)&&e.ref===n.ref)if(ke=!1,n.pendingProps=a=l,nu(e,i))(e.flags&131072)!==0&&(ke=!0);else return n.lanes=e.lanes,$n(e,n,i)}return Ko(e,n,t,a,i)}function Md(e,n,t,a){var i=a.children,l=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(l=l!==null?l.baseLanes|t:t,e!==null){for(a=n.child=e.child,i=0;a!==null;)i=i|a.lanes|a.childLanes,a=a.sibling;a=i&~l}else a=0,n.child=null;return Nd(e,n,l,t,a)}if((t&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Cl(n,l!==null?l.cachePool:null),l!==null?Oc(n,l):Ao(),Uc(n);else return a=n.lanes=536870912,Nd(e,n,l!==null?l.baseLanes|t:t,t,a)}else l!==null?(Cl(n,l.cachePool),Oc(n,l),Et(),n.memoizedState=null):(e!==null&&Cl(n,null),Ao(),Et());return Pe(e,n,i,t),n.child}function Ti(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Nd(e,n,t,a,i){var l=vo();return l=l===null?null:{parent:Oe._currentValue,pool:l},n.memoizedState={baseLanes:t,cachePool:l},e!==null&&Cl(n,null),Ao(),Uc(n),e!==null&&wa(e,n,a,!0),n.childLanes=i,null}function zl(e,n){return n=Gl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Bd(e,n,t){return na(n,e.child,null,t),e=zl(n,n.pendingProps),e.flags|=2,pn(n),n.memoizedState=null,e}function jm(e,n,t){var a=n.pendingProps,i=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(se){if(a.mode==="hidden")return e=zl(n,a),n.lanes=536870912,Ti(null,e);if(_o(n),(e=Ee)?(e=Fp(e,Tn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:mt!==null?{id:jn,overflow:Gn}:null,retryLane:536870912,hydrationErrors:null},t=gc(e),t.return=n,n.child=t,Ie=n,Ee=null)):e=null,e===null)throw yt(n);return n.lanes=536870912,null}return zl(n,a)}var l=e.memoizedState;if(l!==null){var o=l.dehydrated;if(_o(n),i)if(n.flags&256)n.flags&=-257,n=Bd(e,n,t);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(u(558));else if(ke||wa(e,n,t,!1),i=(t&e.childLanes)!==0,ke||i){if(a=xe,a!==null&&(o=Es(a,t),o!==0&&o!==l.retryLane))throw l.retryLane=o,Xt(e,o),ln(a,e,o),Xo;Kl(),n=Bd(e,n,t)}else e=l.treeContext,Ee=wn(o.nextSibling),Ie=n,se=!0,gt=null,Tn=!1,e!==null&&bc(n,e),n=zl(n,a),n.flags|=4096;return n}return e=Xn(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function jl(e,n){var t=n.ref;if(t===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof t!="function"&&typeof t!="object")throw Error(u(284));(e===null||e.ref!==t)&&(n.flags|=4194816)}}function Ko(e,n,t,a,i){return Jt(n),t=Do(e,n,t,a,void 0,i),a=Ro(),e!==null&&!ke?(Lo(e,n,i),$n(e,n,i)):(se&&a&&uo(n),n.flags|=1,Pe(e,n,t,i),n.child)}function Od(e,n,t,a,i,l){return Jt(n),n.updateQueue=null,t=zc(n,a,t,i),kc(e),a=Ro(),e!==null&&!ke?(Lo(e,n,l),$n(e,n,l)):(se&&a&&uo(n),n.flags|=1,Pe(e,n,t,l),n.child)}function Ud(e,n,t,a,i){if(Jt(n),n.stateNode===null){var l=Ea,o=t.contextType;typeof o=="object"&&o!==null&&(l=qe(o)),l=new t(a,l),n.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=Fo,n.stateNode=l,l._reactInternals=n,l=n.stateNode,l.props=a,l.state=n.memoizedState,l.refs={},So(n),o=t.contextType,l.context=typeof o=="object"&&o!==null?qe(o):Ea,l.state=n.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Po(n,t,o,a),l.state=n.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(o=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),o!==l.state&&Fo.enqueueReplaceState(l,l.state,null),Si(n,a,l,i),bi(),l.state=n.memoizedState),typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){l=n.stateNode;var c=n.memoizedProps,g=aa(t,c);l.props=g;var _=l.context,M=t.contextType;o=Ea,typeof M=="object"&&M!==null&&(o=qe(M));var U=t.getDerivedStateFromProps;M=typeof U=="function"||typeof l.getSnapshotBeforeUpdate=="function",c=n.pendingProps!==c,M||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(c||_!==o)&&Cd(n,l,a,o),bt=!1;var w=n.memoizedState;l.state=w,Si(n,a,l,i),bi(),_=n.memoizedState,c||w!==_||bt?(typeof U=="function"&&(Po(n,t,U,a),_=n.memoizedState),(g=bt||Sd(n,t,g,a,w,_,o))?(M||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(n.flags|=4194308)):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=_),l.props=a,l.state=_,l.context=o,a=g):(typeof l.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{l=n.stateNode,Co(e,n),o=n.memoizedProps,M=aa(t,o),l.props=M,U=n.pendingProps,w=l.context,_=t.contextType,g=Ea,typeof _=="object"&&_!==null&&(g=qe(_)),c=t.getDerivedStateFromProps,(_=typeof c=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==U||w!==g)&&Cd(n,l,a,g),bt=!1,w=n.memoizedState,l.state=w,Si(n,a,l,i),bi();var D=n.memoizedState;o!==U||w!==D||bt||e!==null&&e.dependencies!==null&&bl(e.dependencies)?(typeof c=="function"&&(Po(n,t,c,a),D=n.memoizedState),(M=bt||Sd(n,t,M,a,w,D,g)||e!==null&&e.dependencies!==null&&bl(e.dependencies))?(_||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(a,D,g),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(a,D,g)),typeof l.componentDidUpdate=="function"&&(n.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&w===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&w===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=D),l.props=a,l.state=D,l.context=g,a=M):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&w===e.memoizedState||(n.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&w===e.memoizedState||(n.flags|=1024),a=!1)}return l=a,jl(e,n),a=(n.flags&128)!==0,l||a?(l=n.stateNode,t=a&&typeof t.getDerivedStateFromError!="function"?null:l.render(),n.flags|=1,e!==null&&a?(n.child=na(n,e.child,null,i),n.child=na(n,null,t,i)):Pe(e,n,t,i),n.memoizedState=l.state,e=n.child):e=$n(e,n,i),e}function kd(e,n,t,a){return Qt(),n.flags|=256,Pe(e,n,t,a),n.child}var Qo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zo(e){return{baseLanes:e,cachePool:Tc()}}function Jo(e,n,t){return e=e!==null?e.childLanes&~t:0,n&&(e|=hn),e}function zd(e,n,t){var a=n.pendingProps,i=!1,l=(n.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(Me.current&2)!==0),o&&(i=!0,n.flags&=-129),o=(n.flags&32)!==0,n.flags&=-33,e===null){if(se){if(i?xt(n):Et(),(e=Ee)?(e=Fp(e,Tn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:mt!==null?{id:jn,overflow:Gn}:null,retryLane:536870912,hydrationErrors:null},t=gc(e),t.return=n,n.child=t,Ie=n,Ee=null)):e=null,e===null)throw yt(n);return Bu(e)?n.lanes=32:n.lanes=536870912,null}var c=a.children;return a=a.fallback,i?(Et(),i=n.mode,c=Gl({mode:"hidden",children:c},i),a=Kt(a,i,t,null),c.return=n,a.return=n,c.sibling=a,n.child=c,a=n.child,a.memoizedState=Zo(t),a.childLanes=Jo(e,o,t),n.memoizedState=Qo,Ti(null,a)):(xt(n),Wo(n,c))}var g=e.memoizedState;if(g!==null&&(c=g.dehydrated,c!==null)){if(l)n.flags&256?(xt(n),n.flags&=-257,n=$o(e,n,t)):n.memoizedState!==null?(Et(),n.child=e.child,n.flags|=128,n=null):(Et(),c=a.fallback,i=n.mode,a=Gl({mode:"visible",children:a.children},i),c=Kt(c,i,t,null),c.flags|=2,a.return=n,c.return=n,a.sibling=c,n.child=a,na(n,e.child,null,t),a=n.child,a.memoizedState=Zo(t),a.childLanes=Jo(e,o,t),n.memoizedState=Qo,n=Ti(null,a));else if(xt(n),Bu(c)){if(o=c.nextSibling&&c.nextSibling.dataset,o)var _=o.dgst;o=_,a=Error(u(419)),a.stack="",a.digest=o,fi({value:a,source:null,stack:null}),n=$o(e,n,t)}else if(ke||wa(e,n,t,!1),o=(t&e.childLanes)!==0,ke||o){if(o=xe,o!==null&&(a=Es(o,t),a!==0&&a!==g.retryLane))throw g.retryLane=a,Xt(e,a),ln(o,e,a),Xo;Nu(c)||Kl(),n=$o(e,n,t)}else Nu(c)?(n.flags|=192,n.child=e.child,n=null):(e=g.treeContext,Ee=wn(c.nextSibling),Ie=n,se=!0,gt=null,Tn=!1,e!==null&&bc(n,e),n=Wo(n,a.children),n.flags|=4096);return n}return i?(Et(),c=a.fallback,i=n.mode,g=e.child,_=g.sibling,a=Xn(g,{mode:"hidden",children:a.children}),a.subtreeFlags=g.subtreeFlags&65011712,_!==null?c=Xn(_,c):(c=Kt(c,i,t,null),c.flags|=2),c.return=n,a.return=n,a.sibling=c,n.child=a,Ti(null,a),a=n.child,c=e.child.memoizedState,c===null?c=Zo(t):(i=c.cachePool,i!==null?(g=Oe._currentValue,i=i.parent!==g?{parent:g,pool:g}:i):i=Tc(),c={baseLanes:c.baseLanes|t,cachePool:i}),a.memoizedState=c,a.childLanes=Jo(e,o,t),n.memoizedState=Qo,Ti(e.child,a)):(xt(n),t=e.child,e=t.sibling,t=Xn(t,{mode:"visible",children:a.children}),t.return=n,t.sibling=null,e!==null&&(o=n.deletions,o===null?(n.deletions=[e],n.flags|=16):o.push(e)),n.child=t,n.memoizedState=null,t)}function Wo(e,n){return n=Gl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Gl(e,n){return e=cn(22,e,null,n),e.lanes=0,e}function $o(e,n,t){return na(n,e.child,null,t),e=Wo(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function jd(e,n,t){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),ho(e.return,n,t)}function eu(e,n,t,a,i,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:t,tailMode:i,treeForkCount:l}:(o.isBackwards=n,o.rendering=null,o.renderingStartTime=0,o.last=a,o.tail=t,o.tailMode=i,o.treeForkCount=l)}function Gd(e,n,t){var a=n.pendingProps,i=a.revealOrder,l=a.tail;a=a.children;var o=Me.current,c=(o&2)!==0;if(c?(o=o&1|2,n.flags|=128):o&=1,q(Me,o),Pe(e,n,a,t),a=se?pi:0,!c&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jd(e,t,n);else if(e.tag===19)jd(e,t,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(t=n.child,i=null;t!==null;)e=t.alternate,e!==null&&wl(e)===null&&(i=t),t=t.sibling;t=i,t===null?(i=n.child,n.child=null):(i=t.sibling,t.sibling=null),eu(n,!1,i,t,l,a);break;case"backwards":case"unstable_legacy-backwards":for(t=null,i=n.child,n.child=null;i!==null;){if(e=i.alternate,e!==null&&wl(e)===null){n.child=i;break}e=i.sibling,i.sibling=t,t=i,i=e}eu(n,!0,t,null,l,a);break;case"together":eu(n,!1,null,null,void 0,a);break;default:n.memoizedState=null}return n.child}function $n(e,n,t){if(e!==null&&(n.dependencies=e.dependencies),_t|=n.lanes,(t&n.childLanes)===0)if(e!==null){if(wa(e,n,t,!1),(t&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(u(153));if(n.child!==null){for(e=n.child,t=Xn(e,e.pendingProps),n.child=t,t.return=n;e.sibling!==null;)e=e.sibling,t=t.sibling=Xn(e,e.pendingProps),t.return=n;t.sibling=null}return n.child}function nu(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&bl(e)))}function Gm(e,n,t){switch(n.tag){case 3:Ze(n,n.stateNode.containerInfo),vt(n,Oe,e.memoizedState.cache),Qt();break;case 27:case 5:Ja(n);break;case 4:Ze(n,n.stateNode.containerInfo);break;case 10:vt(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,_o(n),null;break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(xt(n),n.flags|=128,null):(t&n.child.childLanes)!==0?zd(e,n,t):(xt(n),e=$n(e,n,t),e!==null?e.sibling:null);xt(n);break;case 19:var i=(e.flags&128)!==0;if(a=(t&n.childLanes)!==0,a||(wa(e,n,t,!1),a=(t&n.childLanes)!==0),i){if(a)return Gd(e,n,t);n.flags|=128}if(i=n.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),q(Me,Me.current),a)break;return null;case 22:return n.lanes=0,Md(e,n,t,n.pendingProps);case 24:vt(n,Oe,e.memoizedState.cache)}return $n(e,n,t)}function Hd(e,n,t){if(e!==null)if(e.memoizedProps!==n.pendingProps)ke=!0;else{if(!nu(e,t)&&(n.flags&128)===0)return ke=!1,Gm(e,n,t);ke=(e.flags&131072)!==0}else ke=!1,se&&(n.flags&1048576)!==0&&vc(n,pi,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=$t(n.elementType),n.type=e,typeof e=="function")lo(e)?(a=aa(e,a),n.tag=1,n=Ud(null,n,e,a,t)):(n.tag=0,n=Ko(null,n,e,a,t));else{if(e!=null){var i=e.$$typeof;if(i===ee){n.tag=11,n=Dd(null,n,e,a,t);break e}else if(i===W){n.tag=14,n=Rd(null,n,e,a,t);break e}}throw n=vn(e)||e,Error(u(306,n,""))}}return n;case 0:return Ko(e,n,n.type,n.pendingProps,t);case 1:return a=n.type,i=aa(a,n.pendingProps),Ud(e,n,a,i,t);case 3:e:{if(Ze(n,n.stateNode.containerInfo),e===null)throw Error(u(387));a=n.pendingProps;var l=n.memoizedState;i=l.element,Co(e,n),Si(n,a,null,t);var o=n.memoizedState;if(a=o.cache,vt(n,Oe,a),a!==l.cache&&mo(n,[Oe],t,!0),bi(),a=o.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:o.cache},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){n=kd(e,n,a,t);break e}else if(a!==i){i=xn(Error(u(424)),n),fi(i),n=kd(e,n,a,t);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ee=wn(e.firstChild),Ie=n,se=!0,gt=null,Tn=!0,t=Mc(n,null,a,t),n.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling}else{if(Qt(),a===i){n=$n(e,n,t);break e}Pe(e,n,a,t)}n=n.child}return n;case 26:return jl(e,n),e===null?(t=Jp(n.type,null,n.pendingProps,null))?n.memoizedState=t:se||(t=n.type,e=n.pendingProps,a=nr(ie.current).createElement(t),a[Ve]=n,a[We]=e,Fe(a,t,e),Ge(a),n.stateNode=a):n.memoizedState=Jp(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ja(n),e===null&&se&&(a=n.stateNode=Kp(n.type,n.pendingProps,ie.current),Ie=n,Tn=!0,i=Ee,Mt(n.type)?(Ou=i,Ee=wn(a.firstChild)):Ee=i),Pe(e,n,n.pendingProps.children,t),jl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&se&&((i=a=Ee)&&(a=mg(a,n.type,n.pendingProps,Tn),a!==null?(n.stateNode=a,Ie=n,Ee=wn(a.firstChild),Tn=!1,i=!0):i=!1),i||yt(n)),Ja(n),i=n.type,l=n.pendingProps,o=e!==null?e.memoizedProps:null,a=l.children,Ru(i,l)?a=null:o!==null&&Ru(i,o)&&(n.flags|=32),n.memoizedState!==null&&(i=Do(e,n,Lm,null,null,t),Hi._currentValue=i),jl(e,n),Pe(e,n,a,t),n.child;case 6:return e===null&&se&&((e=t=Ee)&&(t=gg(t,n.pendingProps,Tn),t!==null?(n.stateNode=t,Ie=n,Ee=null,e=!0):e=!1),e||yt(n)),null;case 13:return zd(e,n,t);case 4:return Ze(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=na(n,null,a,t):Pe(e,n,a,t),n.child;case 11:return Dd(e,n,n.type,n.pendingProps,t);case 7:return Pe(e,n,n.pendingProps,t),n.child;case 8:return Pe(e,n,n.pendingProps.children,t),n.child;case 12:return Pe(e,n,n.pendingProps.children,t),n.child;case 10:return a=n.pendingProps,vt(n,n.type,a.value),Pe(e,n,a.children,t),n.child;case 9:return i=n.type._context,a=n.pendingProps.children,Jt(n),i=qe(i),a=a(i),n.flags|=1,Pe(e,n,a,t),n.child;case 14:return Rd(e,n,n.type,n.pendingProps,t);case 15:return Ld(e,n,n.type,n.pendingProps,t);case 19:return Gd(e,n,t);case 31:return jm(e,n,t);case 22:return Md(e,n,t,n.pendingProps);case 24:return Jt(n),a=qe(Oe),e===null?(i=vo(),i===null&&(i=xe,l=go(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=t),i=l),n.memoizedState={parent:a,cache:i},So(n),vt(n,Oe,i)):((e.lanes&t)!==0&&(Co(e,n),Si(n,null,null,t),bi()),i=e.memoizedState,l=n.memoizedState,i.parent!==a?(i={parent:a,cache:a},n.memoizedState=i,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=i),vt(n,Oe,a)):(a=l.cache,vt(n,Oe,a),a!==i.cache&&mo(n,[Oe],t,!0))),Pe(e,n,n.pendingProps.children,t),n.child;case 29:throw n.pendingProps}throw Error(u(156,n.tag))}function et(e){e.flags|=4}function tu(e,n,t,a,i){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(fp())e.flags|=8192;else throw ea=El,bo}else e.flags&=-16777217}function Vd(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!tf(n))if(fp())e.flags|=8192;else throw ea=El,bo}function Hl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ss():536870912,e.lanes|=n,Ga|=n)}function _i(e,n){if(!se)switch(e.tailMode){case"hidden":n=e.tail;for(var t=null;n!==null;)n.alternate!==null&&(t=n),n=n.sibling;t===null?e.tail=null:t.sibling=null;break;case"collapsed":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Ae(e){var n=e.alternate!==null&&e.alternate.child===e.child,t=0,a=0;if(n)for(var i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags&65011712,a|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)t|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=t,n}function Hm(e,n,t){var a=n.pendingProps;switch(so(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ae(n),null;case 1:return Ae(n),null;case 3:return t=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Zn(Oe),Le(),t.pendingContext&&(t.context=t.pendingContext,t.pendingContext=null),(e===null||e.child===null)&&(_a(n)?et(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,po())),Ae(n),null;case 26:var i=n.type,l=n.memoizedState;return e===null?(et(n),l!==null?(Ae(n),Vd(n,l)):(Ae(n),tu(n,i,null,a,t))):l?l!==e.memoizedState?(et(n),Ae(n),Vd(n,l)):(Ae(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&et(n),Ae(n),tu(n,i,e,a,t)),null;case 27:if(Ji(n),t=ie.current,i=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&et(n);else{if(!a){if(n.stateNode===null)throw Error(u(166));return Ae(n),null}e=Y.current,_a(n)?Sc(n):(e=Kp(i,a,t),n.stateNode=e,et(n))}return Ae(n),null;case 5:if(Ji(n),i=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&et(n);else{if(!a){if(n.stateNode===null)throw Error(u(166));return Ae(n),null}if(l=Y.current,_a(n))Sc(n);else{var o=nr(ie.current);switch(l){case 1:l=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=o.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof a.is=="string"?o.createElement("select",{is:a.is}):o.createElement("select"),a.multiple?l.multiple=!0:a.size&&(l.size=a.size);break;default:l=typeof a.is=="string"?o.createElement(i,{is:a.is}):o.createElement(i)}}l[Ve]=n,l[We]=a;e:for(o=n.child;o!==null;){if(o.tag===5||o.tag===6)l.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===n)break e;for(;o.sibling===null;){if(o.return===null||o.return===n)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}n.stateNode=l;e:switch(Fe(l,i,a),i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&et(n)}}return Ae(n),tu(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,t),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&et(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(u(166));if(e=ie.current,_a(n)){if(e=n.stateNode,t=n.memoizedProps,a=null,i=Ie,i!==null)switch(i.tag){case 27:case 5:a=i.memoizedProps}e[Ve]=n,e=!!(e.nodeValue===t||a!==null&&a.suppressHydrationWarning===!0||zp(e.nodeValue,t)),e||yt(n,!0)}else e=nr(e).createTextNode(a),e[Ve]=n,n.stateNode=e}return Ae(n),null;case 31:if(t=n.memoizedState,e===null||e.memoizedState!==null){if(a=_a(n),t!==null){if(e===null){if(!a)throw Error(u(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(u(557));e[Ve]=n}else Qt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ae(n),e=!1}else t=po(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=t),e=!0;if(!e)return n.flags&256?(pn(n),n):(pn(n),null);if((n.flags&128)!==0)throw Error(u(558))}return Ae(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=_a(n),a!==null&&a.dehydrated!==null){if(e===null){if(!i)throw Error(u(318));if(i=n.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(u(317));i[Ve]=n}else Qt(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ae(n),i=!1}else i=po(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return n.flags&256?(pn(n),n):(pn(n),null)}return pn(n),(n.flags&128)!==0?(n.lanes=t,n):(t=a!==null,e=e!==null&&e.memoizedState!==null,t&&(a=n.child,i=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(i=a.alternate.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==i&&(a.flags|=2048)),t!==e&&t&&(n.child.flags|=8192),Hl(n,n.updateQueue),Ae(n),null);case 4:return Le(),e===null&&Au(n.stateNode.containerInfo),Ae(n),null;case 10:return Zn(n.type),Ae(n),null;case 19:if(z(Me),a=n.memoizedState,a===null)return Ae(n),null;if(i=(n.flags&128)!==0,l=a.rendering,l===null)if(i)_i(a,!1);else{if(De!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(l=wl(e),l!==null){for(n.flags|=128,_i(a,!1),e=l.updateQueue,n.updateQueue=e,Hl(n,e),n.subtreeFlags=0,e=t,t=n.child;t!==null;)mc(t,e),t=t.sibling;return q(Me,Me.current&1|2),se&&Kn(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&rn()>Fl&&(n.flags|=128,i=!0,_i(a,!1),n.lanes=4194304)}else{if(!i)if(e=wl(l),e!==null){if(n.flags|=128,i=!0,e=e.updateQueue,n.updateQueue=e,Hl(n,e),_i(a,!0),a.tail===null&&a.tailMode==="hidden"&&!l.alternate&&!se)return Ae(n),null}else 2*rn()-a.renderingStartTime>Fl&&t!==536870912&&(n.flags|=128,i=!0,_i(a,!1),n.lanes=4194304);a.isBackwards?(l.sibling=n.child,n.child=l):(e=a.last,e!==null?e.sibling=l:n.child=l,a.last=l)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=rn(),e.sibling=null,t=Me.current,q(Me,i?t&1|2:t&1),se&&Kn(n,a.treeForkCount),e):(Ae(n),null);case 22:case 23:return pn(n),To(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(t&536870912)!==0&&(n.flags&128)===0&&(Ae(n),n.subtreeFlags&6&&(n.flags|=8192)):Ae(n),t=n.updateQueue,t!==null&&Hl(n,t.retryQueue),t=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==t&&(n.flags|=2048),e!==null&&z(Wt),null;case 24:return t=null,e!==null&&(t=e.memoizedState.cache),n.memoizedState.cache!==t&&(n.flags|=2048),Zn(Oe),Ae(n),null;case 25:return null;case 30:return null}throw Error(u(156,n.tag))}function Vm(e,n){switch(so(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Zn(Oe),Le(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ji(n),null;case 31:if(n.memoizedState!==null){if(pn(n),n.alternate===null)throw Error(u(340));Qt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(pn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(u(340));Qt()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return z(Me),null;case 4:return Le(),null;case 10:return Zn(n.type),null;case 22:case 23:return pn(n),To(),e!==null&&z(Wt),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Zn(Oe),null;case 25:return null;default:return null}}function Id(e,n){switch(so(n),n.tag){case 3:Zn(Oe),Le();break;case 26:case 27:case 5:Ji(n);break;case 4:Le();break;case 31:n.memoizedState!==null&&pn(n);break;case 13:pn(n);break;case 19:z(Me);break;case 10:Zn(n.type);break;case 22:case 23:pn(n),To(),e!==null&&z(Wt);break;case 24:Zn(Oe)}}function wi(e,n){try{var t=n.updateQueue,a=t!==null?t.lastEffect:null;if(a!==null){var i=a.next;t=i;do{if((t.tag&e)===e){a=void 0;var l=t.create,o=t.inst;a=l(),o.destroy=a}t=t.next}while(t!==i)}}catch(c){ge(n,n.return,c)}}function At(e,n,t){try{var a=n.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var l=i.next;a=l;do{if((a.tag&e)===e){var o=a.inst,c=o.destroy;if(c!==void 0){o.destroy=void 0,i=n;var g=t,_=c;try{_()}catch(M){ge(i,g,M)}}}a=a.next}while(a!==l)}}catch(M){ge(n,n.return,M)}}function qd(e){var n=e.updateQueue;if(n!==null){var t=e.stateNode;try{Bc(n,t)}catch(a){ge(e,e.return,a)}}}function Pd(e,n,t){t.props=aa(e.type,e.memoizedProps),t.state=e.memoizedState;try{t.componentWillUnmount()}catch(a){ge(e,n,a)}}function Di(e,n){try{var t=e.ref;if(t!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof t=="function"?e.refCleanup=t(a):t.current=a}}catch(i){ge(e,n,i)}}function Hn(e,n){var t=e.ref,a=e.refCleanup;if(t!==null)if(typeof a=="function")try{a()}catch(i){ge(e,n,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof t=="function")try{t(null)}catch(i){ge(e,n,i)}else t.current=null}function Fd(e){var n=e.type,t=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":t.autoFocus&&a.focus();break e;case"img":t.src?a.src=t.src:t.srcSet&&(a.srcset=t.srcSet)}}catch(i){ge(e,e.return,i)}}function au(e,n,t){try{var a=e.stateNode;sg(a,e.type,t,n),a[We]=n}catch(i){ge(e,e.return,i)}}function Yd(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Mt(e.type)||e.tag===4}function iu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Mt(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function lu(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t).insertBefore(e,n):(n=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.appendChild(e),t=t._reactRootContainer,t!=null||n.onclick!==null||(n.onclick=Fn));else if(a!==4&&(a===27&&Mt(e.type)&&(t=e.stateNode,n=null),e=e.child,e!==null))for(lu(e,n,t),e=e.sibling;e!==null;)lu(e,n,t),e=e.sibling}function Vl(e,n,t){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?t.insertBefore(e,n):t.appendChild(e);else if(a!==4&&(a===27&&Mt(e.type)&&(t=e.stateNode),e=e.child,e!==null))for(Vl(e,n,t),e=e.sibling;e!==null;)Vl(e,n,t),e=e.sibling}function Xd(e){var n=e.stateNode,t=e.memoizedProps;try{for(var a=e.type,i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Fe(n,a,t),n[Ve]=e,n[We]=t}catch(l){ge(e,e.return,l)}}var nt=!1,ze=!1,ru=!1,Kd=typeof WeakSet=="function"?WeakSet:Set,He=null;function Im(e,n){if(e=e.containerInfo,wu=ur,e=rc(e),Wr(e)){if("selectionStart"in e)var t={start:e.selectionStart,end:e.selectionEnd};else e:{t=(t=e.ownerDocument)&&t.defaultView||window;var a=t.getSelection&&t.getSelection();if(a&&a.rangeCount!==0){t=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{t.nodeType,l.nodeType}catch{t=null;break e}var o=0,c=-1,g=-1,_=0,M=0,U=e,w=null;n:for(;;){for(var D;U!==t||i!==0&&U.nodeType!==3||(c=o+i),U!==l||a!==0&&U.nodeType!==3||(g=o+a),U.nodeType===3&&(o+=U.nodeValue.length),(D=U.firstChild)!==null;)w=U,U=D;for(;;){if(U===e)break n;if(w===t&&++_===i&&(c=o),w===l&&++M===a&&(g=o),(D=U.nextSibling)!==null)break;U=w,w=U.parentNode}U=D}t=c===-1||g===-1?null:{start:c,end:g}}else t=null}t=t||{start:0,end:0}}else t=null;for(Du={focusedElem:e,selectionRange:t},ur=!1,He=n;He!==null;)if(n=He,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,He=e;else for(;He!==null;){switch(n=He,l=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(t=0;t<e.length;t++)i=e[t],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,t=n,i=l.memoizedProps,l=l.memoizedState,a=t.stateNode;try{var P=aa(t.type,i);e=a.getSnapshotBeforeUpdate(P,l),a.__reactInternalSnapshotBeforeUpdate=e}catch(Z){ge(t,t.return,Z)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,t=e.nodeType,t===9)Mu(e);else if(t===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Mu(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(u(163))}if(e=n.sibling,e!==null){e.return=n.return,He=e;break}He=n.return}}function Qd(e,n,t){var a=t.flags;switch(t.tag){case 0:case 11:case 15:at(e,t),a&4&&wi(5,t);break;case 1:if(at(e,t),a&4)if(e=t.stateNode,n===null)try{e.componentDidMount()}catch(o){ge(t,t.return,o)}else{var i=aa(t.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(i,n,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ge(t,t.return,o)}}a&64&&qd(t),a&512&&Di(t,t.return);break;case 3:if(at(e,t),a&64&&(e=t.updateQueue,e!==null)){if(n=null,t.child!==null)switch(t.child.tag){case 27:case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}try{Bc(e,n)}catch(o){ge(t,t.return,o)}}break;case 27:n===null&&a&4&&Xd(t);case 26:case 5:at(e,t),n===null&&a&4&&Fd(t),a&512&&Di(t,t.return);break;case 12:at(e,t);break;case 31:at(e,t),a&4&&Wd(e,t);break;case 13:at(e,t),a&4&&$d(e,t),a&64&&(e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(t=Jm.bind(null,t),yg(e,t))));break;case 22:if(a=t.memoizedState!==null||nt,!a){n=n!==null&&n.memoizedState!==null||ze,i=nt;var l=ze;nt=a,(ze=n)&&!l?it(e,t,(t.subtreeFlags&8772)!==0):at(e,t),nt=i,ze=l}break;case 30:break;default:at(e,t)}}function Zd(e){var n=e.alternate;n!==null&&(e.alternate=null,Zd(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ur(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Te=null,en=!1;function tt(e,n,t){for(t=t.child;t!==null;)Jd(e,n,t),t=t.sibling}function Jd(e,n,t){if(on&&typeof on.onCommitFiberUnmount=="function")try{on.onCommitFiberUnmount(Wa,t)}catch{}switch(t.tag){case 26:ze||Hn(t,n),tt(e,n,t),t.memoizedState?t.memoizedState.count--:t.stateNode&&(t=t.stateNode,t.parentNode.removeChild(t));break;case 27:ze||Hn(t,n);var a=Te,i=en;Mt(t.type)&&(Te=t.stateNode,en=!1),tt(e,n,t),zi(t.stateNode),Te=a,en=i;break;case 5:ze||Hn(t,n);case 6:if(a=Te,i=en,Te=null,tt(e,n,t),Te=a,en=i,Te!==null)if(en)try{(Te.nodeType===9?Te.body:Te.nodeName==="HTML"?Te.ownerDocument.body:Te).removeChild(t.stateNode)}catch(l){ge(t,n,l)}else try{Te.removeChild(t.stateNode)}catch(l){ge(t,n,l)}break;case 18:Te!==null&&(en?(e=Te,qp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,t.stateNode),Xa(e)):qp(Te,t.stateNode));break;case 4:a=Te,i=en,Te=t.stateNode.containerInfo,en=!0,tt(e,n,t),Te=a,en=i;break;case 0:case 11:case 14:case 15:At(2,t,n),ze||At(4,t,n),tt(e,n,t);break;case 1:ze||(Hn(t,n),a=t.stateNode,typeof a.componentWillUnmount=="function"&&Pd(t,n,a)),tt(e,n,t);break;case 21:tt(e,n,t);break;case 22:ze=(a=ze)||t.memoizedState!==null,tt(e,n,t),ze=a;break;default:tt(e,n,t)}}function Wd(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Xa(e)}catch(t){ge(n,n.return,t)}}}function $d(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Xa(e)}catch(t){ge(n,n.return,t)}}function qm(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Kd),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Kd),n;default:throw Error(u(435,e.tag))}}function Il(e,n){var t=qm(e);n.forEach(function(a){if(!t.has(a)){t.add(a);var i=Wm.bind(null,e,a);a.then(i,i)}})}function nn(e,n){var t=n.deletions;if(t!==null)for(var a=0;a<t.length;a++){var i=t[a],l=e,o=n,c=o;e:for(;c!==null;){switch(c.tag){case 27:if(Mt(c.type)){Te=c.stateNode,en=!1;break e}break;case 5:Te=c.stateNode,en=!1;break e;case 3:case 4:Te=c.stateNode.containerInfo,en=!0;break e}c=c.return}if(Te===null)throw Error(u(160));Jd(l,o,i),Te=null,en=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ep(n,e),n=n.sibling}var Nn=null;function ep(e,n){var t=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:nn(n,e),tn(e),a&4&&(At(3,e,e.return),wi(3,e),At(5,e,e.return));break;case 1:nn(n,e),tn(e),a&512&&(ze||t===null||Hn(t,t.return)),a&64&&nt&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(t=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=t===null?a:t.concat(a))));break;case 26:var i=Nn;if(nn(n,e),tn(e),a&512&&(ze||t===null||Hn(t,t.return)),a&4){var l=t!==null?t.memoizedState:null;if(a=e.memoizedState,t===null)if(a===null)if(e.stateNode===null){e:{a=e.type,t=e.memoizedProps,i=i.ownerDocument||i;n:switch(a){case"title":l=i.getElementsByTagName("title")[0],(!l||l[ni]||l[Ve]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(a),i.head.insertBefore(l,i.querySelector("head > title"))),Fe(l,a,t),l[Ve]=e,Ge(l),a=l;break e;case"link":var o=ef("link","href",i).get(a+(t.href||""));if(o){for(var c=0;c<o.length;c++)if(l=o[c],l.getAttribute("href")===(t.href==null||t.href===""?null:t.href)&&l.getAttribute("rel")===(t.rel==null?null:t.rel)&&l.getAttribute("title")===(t.title==null?null:t.title)&&l.getAttribute("crossorigin")===(t.crossOrigin==null?null:t.crossOrigin)){o.splice(c,1);break n}}l=i.createElement(a),Fe(l,a,t),i.head.appendChild(l);break;case"meta":if(o=ef("meta","content",i).get(a+(t.content||""))){for(c=0;c<o.length;c++)if(l=o[c],l.getAttribute("content")===(t.content==null?null:""+t.content)&&l.getAttribute("name")===(t.name==null?null:t.name)&&l.getAttribute("property")===(t.property==null?null:t.property)&&l.getAttribute("http-equiv")===(t.httpEquiv==null?null:t.httpEquiv)&&l.getAttribute("charset")===(t.charSet==null?null:t.charSet)){o.splice(c,1);break n}}l=i.createElement(a),Fe(l,a,t),i.head.appendChild(l);break;default:throw Error(u(468,a))}l[Ve]=e,Ge(l),a=l}e.stateNode=a}else nf(i,e.type,e.stateNode);else e.stateNode=$p(i,a,e.memoizedProps);else l!==a?(l===null?t.stateNode!==null&&(t=t.stateNode,t.parentNode.removeChild(t)):l.count--,a===null?nf(i,e.type,e.stateNode):$p(i,a,e.memoizedProps)):a===null&&e.stateNode!==null&&au(e,e.memoizedProps,t.memoizedProps)}break;case 27:nn(n,e),tn(e),a&512&&(ze||t===null||Hn(t,t.return)),t!==null&&a&4&&au(e,e.memoizedProps,t.memoizedProps);break;case 5:if(nn(n,e),tn(e),a&512&&(ze||t===null||Hn(t,t.return)),e.flags&32){i=e.stateNode;try{ga(i,"")}catch(P){ge(e,e.return,P)}}a&4&&e.stateNode!=null&&(i=e.memoizedProps,au(e,i,t!==null?t.memoizedProps:i)),a&1024&&(ru=!0);break;case 6:if(nn(n,e),tn(e),a&4){if(e.stateNode===null)throw Error(u(162));a=e.memoizedProps,t=e.stateNode;try{t.nodeValue=a}catch(P){ge(e,e.return,P)}}break;case 3:if(ir=null,i=Nn,Nn=tr(n.containerInfo),nn(n,e),Nn=i,tn(e),a&4&&t!==null&&t.memoizedState.isDehydrated)try{Xa(n.containerInfo)}catch(P){ge(e,e.return,P)}ru&&(ru=!1,np(e));break;case 4:a=Nn,Nn=tr(e.stateNode.containerInfo),nn(n,e),tn(e),Nn=a;break;case 12:nn(n,e),tn(e);break;case 31:nn(n,e),tn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Il(e,a)));break;case 13:nn(n,e),tn(e),e.child.flags&8192&&e.memoizedState!==null!=(t!==null&&t.memoizedState!==null)&&(Pl=rn()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Il(e,a)));break;case 22:i=e.memoizedState!==null;var g=t!==null&&t.memoizedState!==null,_=nt,M=ze;if(nt=_||i,ze=M||g,nn(n,e),ze=M,nt=_,tn(e),a&8192)e:for(n=e.stateNode,n._visibility=i?n._visibility&-2:n._visibility|1,i&&(t===null||g||nt||ze||ia(e)),t=null,n=e;;){if(n.tag===5||n.tag===26){if(t===null){g=t=n;try{if(l=g.stateNode,i)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{c=g.stateNode;var U=g.memoizedProps.style,w=U!=null&&U.hasOwnProperty("display")?U.display:null;c.style.display=w==null||typeof w=="boolean"?"":(""+w).trim()}}catch(P){ge(g,g.return,P)}}}else if(n.tag===6){if(t===null){g=n;try{g.stateNode.nodeValue=i?"":g.memoizedProps}catch(P){ge(g,g.return,P)}}}else if(n.tag===18){if(t===null){g=n;try{var D=g.stateNode;i?Pp(D,!0):Pp(g.stateNode,!1)}catch(P){ge(g,g.return,P)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;t===n&&(t=null),n=n.return}t===n&&(t=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(t=a.retryQueue,t!==null&&(a.retryQueue=null,Il(e,t))));break;case 19:nn(n,e),tn(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Il(e,a)));break;case 30:break;case 21:break;default:nn(n,e),tn(e)}}function tn(e){var n=e.flags;if(n&2){try{for(var t,a=e.return;a!==null;){if(Yd(a)){t=a;break}a=a.return}if(t==null)throw Error(u(160));switch(t.tag){case 27:var i=t.stateNode,l=iu(e);Vl(e,l,i);break;case 5:var o=t.stateNode;t.flags&32&&(ga(o,""),t.flags&=-33);var c=iu(e);Vl(e,c,o);break;case 3:case 4:var g=t.stateNode.containerInfo,_=iu(e);lu(e,_,g);break;default:throw Error(u(161))}}catch(M){ge(e,e.return,M)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function np(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;np(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function at(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Qd(e,n.alternate,n),n=n.sibling}function ia(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:At(4,n,n.return),ia(n);break;case 1:Hn(n,n.return);var t=n.stateNode;typeof t.componentWillUnmount=="function"&&Pd(n,n.return,t),ia(n);break;case 27:zi(n.stateNode);case 26:case 5:Hn(n,n.return),ia(n);break;case 22:n.memoizedState===null&&ia(n);break;case 30:ia(n);break;default:ia(n)}e=e.sibling}}function it(e,n,t){for(t=t&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,i=e,l=n,o=l.flags;switch(l.tag){case 0:case 11:case 15:it(i,l,t),wi(4,l);break;case 1:if(it(i,l,t),a=l,i=a.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(_){ge(a,a.return,_)}if(a=l,i=a.updateQueue,i!==null){var c=a.stateNode;try{var g=i.shared.hiddenCallbacks;if(g!==null)for(i.shared.hiddenCallbacks=null,i=0;i<g.length;i++)Nc(g[i],c)}catch(_){ge(a,a.return,_)}}t&&o&64&&qd(l),Di(l,l.return);break;case 27:Xd(l);case 26:case 5:it(i,l,t),t&&a===null&&o&4&&Fd(l),Di(l,l.return);break;case 12:it(i,l,t);break;case 31:it(i,l,t),t&&o&4&&Wd(i,l);break;case 13:it(i,l,t),t&&o&4&&$d(i,l);break;case 22:l.memoizedState===null&&it(i,l,t),Di(l,l.return);break;case 30:break;default:it(i,l,t)}n=n.sibling}}function ou(e,n){var t=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==t&&(e!=null&&e.refCount++,t!=null&&hi(t))}function uu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&hi(e))}function Bn(e,n,t,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)tp(e,n,t,a),n=n.sibling}function tp(e,n,t,a){var i=n.flags;switch(n.tag){case 0:case 11:case 15:Bn(e,n,t,a),i&2048&&wi(9,n);break;case 1:Bn(e,n,t,a);break;case 3:Bn(e,n,t,a),i&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&hi(e)));break;case 12:if(i&2048){Bn(e,n,t,a),e=n.stateNode;try{var l=n.memoizedProps,o=l.id,c=l.onPostCommit;typeof c=="function"&&c(o,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(g){ge(n,n.return,g)}}else Bn(e,n,t,a);break;case 31:Bn(e,n,t,a);break;case 13:Bn(e,n,t,a);break;case 23:break;case 22:l=n.stateNode,o=n.alternate,n.memoizedState!==null?l._visibility&2?Bn(e,n,t,a):Ri(e,n):l._visibility&2?Bn(e,n,t,a):(l._visibility|=2,ka(e,n,t,a,(n.subtreeFlags&10256)!==0||!1)),i&2048&&ou(o,n);break;case 24:Bn(e,n,t,a),i&2048&&uu(n.alternate,n);break;default:Bn(e,n,t,a)}}function ka(e,n,t,a,i){for(i=i&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var l=e,o=n,c=t,g=a,_=o.flags;switch(o.tag){case 0:case 11:case 15:ka(l,o,c,g,i),wi(8,o);break;case 23:break;case 22:var M=o.stateNode;o.memoizedState!==null?M._visibility&2?ka(l,o,c,g,i):Ri(l,o):(M._visibility|=2,ka(l,o,c,g,i)),i&&_&2048&&ou(o.alternate,o);break;case 24:ka(l,o,c,g,i),i&&_&2048&&uu(o.alternate,o);break;default:ka(l,o,c,g,i)}n=n.sibling}}function Ri(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var t=e,a=n,i=a.flags;switch(a.tag){case 22:Ri(t,a),i&2048&&ou(a.alternate,a);break;case 24:Ri(t,a),i&2048&&uu(a.alternate,a);break;default:Ri(t,a)}n=n.sibling}}var Li=8192;function za(e,n,t){if(e.subtreeFlags&Li)for(e=e.child;e!==null;)ap(e,n,t),e=e.sibling}function ap(e,n,t){switch(e.tag){case 26:za(e,n,t),e.flags&Li&&e.memoizedState!==null&&Rg(t,Nn,e.memoizedState,e.memoizedProps);break;case 5:za(e,n,t);break;case 3:case 4:var a=Nn;Nn=tr(e.stateNode.containerInfo),za(e,n,t),Nn=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Li,Li=16777216,za(e,n,t),Li=a):za(e,n,t));break;default:za(e,n,t)}}function ip(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Mi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];He=a,rp(a,e)}ip(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)lp(e),e=e.sibling}function lp(e){switch(e.tag){case 0:case 11:case 15:Mi(e),e.flags&2048&&At(9,e,e.return);break;case 3:Mi(e);break;case 12:Mi(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ql(e)):Mi(e);break;default:Mi(e)}}function ql(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var t=0;t<n.length;t++){var a=n[t];He=a,rp(a,e)}ip(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:At(8,n,n.return),ql(n);break;case 22:t=n.stateNode,t._visibility&2&&(t._visibility&=-3,ql(n));break;default:ql(n)}e=e.sibling}}function rp(e,n){for(;He!==null;){var t=He;switch(t.tag){case 0:case 11:case 15:At(8,t,n);break;case 23:case 22:if(t.memoizedState!==null&&t.memoizedState.cachePool!==null){var a=t.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:hi(t.memoizedState.cache)}if(a=t.child,a!==null)a.return=t,He=a;else e:for(t=e;He!==null;){a=He;var i=a.sibling,l=a.return;if(Zd(a),a===t){He=null;break e}if(i!==null){i.return=l,He=i;break e}He=l}}}var Pm={getCacheForType:function(e){var n=qe(Oe),t=n.data.get(e);return t===void 0&&(t=e(),n.data.set(e,t)),t},cacheSignal:function(){return qe(Oe).controller.signal}},Fm=typeof WeakMap=="function"?WeakMap:Map,pe=0,xe=null,le=null,oe=0,me=0,fn=null,Tt=!1,ja=!1,su=!1,lt=0,De=0,_t=0,la=0,cu=0,hn=0,Ga=0,Ni=null,an=null,du=!1,Pl=0,op=0,Fl=1/0,Yl=null,wt=null,je=0,Dt=null,Ha=null,rt=0,pu=0,fu=null,up=null,Bi=0,hu=null;function mn(){return(pe&2)!==0&&oe!==0?oe&-oe:N.T!==null?Su():As()}function sp(){if(hn===0)if((oe&536870912)===0||se){var e=el;el<<=1,(el&3932160)===0&&(el=262144),hn=e}else hn=536870912;return e=dn.current,e!==null&&(e.flags|=32),hn}function ln(e,n,t){(e===xe&&(me===2||me===9)||e.cancelPendingCommit!==null)&&(Va(e,0),Rt(e,oe,hn,!1)),ei(e,t),((pe&2)===0||e!==xe)&&(e===xe&&((pe&2)===0&&(la|=t),De===4&&Rt(e,oe,hn,!1)),Vn(e))}function cp(e,n,t){if((pe&6)!==0)throw Error(u(327));var a=!t&&(n&127)===0&&(n&e.expiredLanes)===0||$a(e,n),i=a?Km(e,n):gu(e,n,!0),l=a;do{if(i===0){ja&&!a&&Rt(e,n,0,!1);break}else{if(t=e.current.alternate,l&&!Ym(t)){i=gu(e,n,!1),l=!1;continue}if(i===2){if(l=n,e.errorRecoveryDisabledLanes&l)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){n=o;e:{var c=e;i=Ni;var g=c.current.memoizedState.isDehydrated;if(g&&(Va(c,o).flags|=256),o=gu(c,o,!1),o!==2){if(su&&!g){c.errorRecoveryDisabledLanes|=l,la|=l,i=4;break e}l=an,an=i,l!==null&&(an===null?an=l:an.push.apply(an,l))}i=o}if(l=!1,i!==2)continue}}if(i===1){Va(e,0),Rt(e,n,0,!0);break}e:{switch(a=e,l=i,l){case 0:case 1:throw Error(u(345));case 4:if((n&4194048)!==n)break;case 6:Rt(a,n,hn,!Tt);break e;case 2:an=null;break;case 3:case 5:break;default:throw Error(u(329))}if((n&62914560)===n&&(i=Pl+300-rn(),10<i)){if(Rt(a,n,hn,!Tt),tl(a,0,!0)!==0)break e;rt=n,a.timeoutHandle=Vp(dp.bind(null,a,t,an,Yl,du,n,hn,la,Ga,Tt,l,"Throttled",-0,0),i);break e}dp(a,t,an,Yl,du,n,hn,la,Ga,Tt,l,null,-0,0)}}break}while(!0);Vn(e)}function dp(e,n,t,a,i,l,o,c,g,_,M,U,w,D){if(e.timeoutHandle=-1,U=n.subtreeFlags,U&8192||(U&16785408)===16785408){U={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fn},ap(n,l,U);var P=(l&62914560)===l?Pl-rn():(l&4194048)===l?op-rn():0;if(P=Lg(U,P),P!==null){rt=l,e.cancelPendingCommit=P(bp.bind(null,e,n,l,t,a,i,o,c,g,M,U,null,w,D)),Rt(e,l,o,!_);return}}bp(e,n,l,t,a,i,o,c,g)}function Ym(e){for(var n=e;;){var t=n.tag;if((t===0||t===11||t===15)&&n.flags&16384&&(t=n.updateQueue,t!==null&&(t=t.stores,t!==null)))for(var a=0;a<t.length;a++){var i=t[a],l=i.getSnapshot;i=i.value;try{if(!sn(l(),i))return!1}catch{return!1}}if(t=n.child,n.subtreeFlags&16384&&t!==null)t.return=n,n=t;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Rt(e,n,t,a){n&=~cu,n&=~la,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var i=n;0<i;){var l=31-un(i),o=1<<l;a[l]=-1,i&=~o}t!==0&&Cs(e,t,n)}function Xl(){return(pe&6)===0?(Oi(0),!1):!0}function mu(){if(le!==null){if(me===0)var e=le.return;else e=le,Qn=Zt=null,Mo(e),Ma=null,gi=0,e=le;for(;e!==null;)Id(e.alternate,e),e=e.return;le=null}}function Va(e,n){var t=e.timeoutHandle;t!==-1&&(e.timeoutHandle=-1,pg(t)),t=e.cancelPendingCommit,t!==null&&(e.cancelPendingCommit=null,t()),rt=0,mu(),xe=e,le=t=Xn(e.current,null),oe=n,me=0,fn=null,Tt=!1,ja=$a(e,n),su=!1,Ga=hn=cu=la=_t=De=0,an=Ni=null,du=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var i=31-un(a),l=1<<i;n|=e[i],a&=~l}return lt=n,hl(),t}function pp(e,n){te=null,N.H=Ai,n===La||n===xl?(n=Dc(),me=3):n===bo?(n=Dc(),me=4):me=n===Xo?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,fn=n,le===null&&(De=1,kl(e,xn(n,e.current)))}function fp(){var e=dn.current;return e===null?!0:(oe&4194048)===oe?_n===null:(oe&62914560)===oe||(oe&536870912)!==0?e===_n:!1}function hp(){var e=N.H;return N.H=Ai,e===null?Ai:e}function mp(){var e=N.A;return N.A=Pm,e}function Kl(){De=4,Tt||(oe&4194048)!==oe&&dn.current!==null||(ja=!0),(_t&134217727)===0&&(la&134217727)===0||xe===null||Rt(xe,oe,hn,!1)}function gu(e,n,t){var a=pe;pe|=2;var i=hp(),l=mp();(xe!==e||oe!==n)&&(Yl=null,Va(e,n)),n=!1;var o=De;e:do try{if(me!==0&&le!==null){var c=le,g=fn;switch(me){case 8:mu(),o=6;break e;case 3:case 2:case 9:case 6:dn.current===null&&(n=!0);var _=me;if(me=0,fn=null,Ia(e,c,g,_),t&&ja){o=0;break e}break;default:_=me,me=0,fn=null,Ia(e,c,g,_)}}Xm(),o=De;break}catch(M){pp(e,M)}while(!0);return n&&e.shellSuspendCounter++,Qn=Zt=null,pe=a,N.H=i,N.A=l,le===null&&(xe=null,oe=0,hl()),o}function Xm(){for(;le!==null;)gp(le)}function Km(e,n){var t=pe;pe|=2;var a=hp(),i=mp();xe!==e||oe!==n?(Yl=null,Fl=rn()+500,Va(e,n)):ja=$a(e,n);e:do try{if(me!==0&&le!==null){n=le;var l=fn;n:switch(me){case 1:me=0,fn=null,Ia(e,n,l,1);break;case 2:case 9:if(_c(l)){me=0,fn=null,yp(n);break}n=function(){me!==2&&me!==9||xe!==e||(me=7),Vn(e)},l.then(n,n);break e;case 3:me=7;break e;case 4:me=5;break e;case 7:_c(l)?(me=0,fn=null,yp(n)):(me=0,fn=null,Ia(e,n,l,7));break;case 5:var o=null;switch(le.tag){case 26:o=le.memoizedState;case 5:case 27:var c=le;if(o?tf(o):c.stateNode.complete){me=0,fn=null;var g=c.sibling;if(g!==null)le=g;else{var _=c.return;_!==null?(le=_,Ql(_)):le=null}break n}}me=0,fn=null,Ia(e,n,l,5);break;case 6:me=0,fn=null,Ia(e,n,l,6);break;case 8:mu(),De=6;break e;default:throw Error(u(462))}}Qm();break}catch(M){pp(e,M)}while(!0);return Qn=Zt=null,N.H=a,N.A=i,pe=t,le!==null?0:(xe=null,oe=0,hl(),De)}function Qm(){for(;le!==null&&!vh();)gp(le)}function gp(e){var n=Hd(e.alternate,e,lt);e.memoizedProps=e.pendingProps,n===null?Ql(e):le=n}function yp(e){var n=e,t=n.alternate;switch(n.tag){case 15:case 0:n=Od(t,n,n.pendingProps,n.type,void 0,oe);break;case 11:n=Od(t,n,n.pendingProps,n.type.render,n.ref,oe);break;case 5:Mo(n);default:Id(t,n),n=le=mc(n,lt),n=Hd(t,n,lt)}e.memoizedProps=e.pendingProps,n===null?Ql(e):le=n}function Ia(e,n,t,a){Qn=Zt=null,Mo(n),Ma=null,gi=0;var i=n.return;try{if(zm(e,i,n,t,oe)){De=1,kl(e,xn(t,e.current)),le=null;return}}catch(l){if(i!==null)throw le=i,l;De=1,kl(e,xn(t,e.current)),le=null;return}n.flags&32768?(se||a===1?e=!0:ja||(oe&536870912)!==0?e=!1:(Tt=e=!0,(a===2||a===9||a===3||a===6)&&(a=dn.current,a!==null&&a.tag===13&&(a.flags|=16384))),vp(n,e)):Ql(n)}function Ql(e){var n=e;do{if((n.flags&32768)!==0){vp(n,Tt);return}e=n.return;var t=Hm(n.alternate,n,lt);if(t!==null){le=t;return}if(n=n.sibling,n!==null){le=n;return}le=n=e}while(n!==null);De===0&&(De=5)}function vp(e,n){do{var t=Vm(e.alternate,e);if(t!==null){t.flags&=32767,le=t;return}if(t=e.return,t!==null&&(t.flags|=32768,t.subtreeFlags=0,t.deletions=null),!n&&(e=e.sibling,e!==null)){le=e;return}le=e=t}while(e!==null);De=6,le=null}function bp(e,n,t,a,i,l,o,c,g){e.cancelPendingCommit=null;do Zl();while(je!==0);if((pe&6)!==0)throw Error(u(327));if(n!==null){if(n===e.current)throw Error(u(177));if(l=n.lanes|n.childLanes,l|=ao,Dh(e,t,l,o,c,g),e===xe&&(le=xe=null,oe=0),Ha=n,Dt=e,rt=t,pu=l,fu=i,up=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$m(Wi,function(){return Ap(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=N.T,N.T=null,i=V.p,V.p=2,o=pe,pe|=4;try{Im(e,n,t)}finally{pe=o,V.p=i,N.T=a}}je=1,Sp(),Cp(),xp()}}function Sp(){if(je===1){je=0;var e=Dt,n=Ha,t=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||t){t=N.T,N.T=null;var a=V.p;V.p=2;var i=pe;pe|=4;try{ep(n,e);var l=Du,o=rc(e.containerInfo),c=l.focusedElem,g=l.selectionRange;if(o!==c&&c&&c.ownerDocument&&lc(c.ownerDocument.documentElement,c)){if(g!==null&&Wr(c)){var _=g.start,M=g.end;if(M===void 0&&(M=_),"selectionStart"in c)c.selectionStart=_,c.selectionEnd=Math.min(M,c.value.length);else{var U=c.ownerDocument||document,w=U&&U.defaultView||window;if(w.getSelection){var D=w.getSelection(),P=c.textContent.length,Z=Math.min(g.start,P),Se=g.end===void 0?Z:Math.min(g.end,P);!D.extend&&Z>Se&&(o=Se,Se=Z,Z=o);var A=ic(c,Z),v=ic(c,Se);if(A&&v&&(D.rangeCount!==1||D.anchorNode!==A.node||D.anchorOffset!==A.offset||D.focusNode!==v.node||D.focusOffset!==v.offset)){var T=U.createRange();T.setStart(A.node,A.offset),D.removeAllRanges(),Z>Se?(D.addRange(T),D.extend(v.node,v.offset)):(T.setEnd(v.node,v.offset),D.addRange(T))}}}}for(U=[],D=c;D=D.parentNode;)D.nodeType===1&&U.push({element:D,left:D.scrollLeft,top:D.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<U.length;c++){var B=U[c];B.element.scrollLeft=B.left,B.element.scrollTop=B.top}}ur=!!wu,Du=wu=null}finally{pe=i,V.p=a,N.T=t}}e.current=n,je=2}}function Cp(){if(je===2){je=0;var e=Dt,n=Ha,t=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||t){t=N.T,N.T=null;var a=V.p;V.p=2;var i=pe;pe|=4;try{Qd(e,n.alternate,n)}finally{pe=i,V.p=a,N.T=t}}je=3}}function xp(){if(je===4||je===3){je=0,bh();var e=Dt,n=Ha,t=rt,a=up;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?je=5:(je=0,Ha=Dt=null,Ep(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(wt=null),Br(t),n=n.stateNode,on&&typeof on.onCommitFiberRoot=="function")try{on.onCommitFiberRoot(Wa,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=N.T,i=V.p,V.p=2,N.T=null;try{for(var l=e.onRecoverableError,o=0;o<a.length;o++){var c=a[o];l(c.value,{componentStack:c.stack})}}finally{N.T=n,V.p=i}}(rt&3)!==0&&Zl(),Vn(e),i=e.pendingLanes,(t&261930)!==0&&(i&42)!==0?e===hu?Bi++:(Bi=0,hu=e):Bi=0,Oi(0)}}function Ep(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,hi(n)))}function Zl(){return Sp(),Cp(),xp(),Ap()}function Ap(){if(je!==5)return!1;var e=Dt,n=pu;pu=0;var t=Br(rt),a=N.T,i=V.p;try{V.p=32>t?32:t,N.T=null,t=fu,fu=null;var l=Dt,o=rt;if(je=0,Ha=Dt=null,rt=0,(pe&6)!==0)throw Error(u(331));var c=pe;if(pe|=4,lp(l.current),tp(l,l.current,o,t),pe=c,Oi(0,!1),on&&typeof on.onPostCommitFiberRoot=="function")try{on.onPostCommitFiberRoot(Wa,l)}catch{}return!0}finally{V.p=i,N.T=a,Ep(e,n)}}function Tp(e,n,t){n=xn(t,n),n=Yo(e.stateNode,n,2),e=Ct(e,n,2),e!==null&&(ei(e,2),Vn(e))}function ge(e,n,t){if(e.tag===3)Tp(e,e,t);else for(;n!==null;){if(n.tag===3){Tp(n,e,t);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(wt===null||!wt.has(a))){e=xn(t,e),t=_d(2),a=Ct(n,t,2),a!==null&&(wd(t,a,n,e),ei(a,2),Vn(a));break}}n=n.return}}function yu(e,n,t){var a=e.pingCache;if(a===null){a=e.pingCache=new Fm;var i=new Set;a.set(n,i)}else i=a.get(n),i===void 0&&(i=new Set,a.set(n,i));i.has(t)||(su=!0,i.add(t),e=Zm.bind(null,e,n,t),n.then(e,e))}function Zm(e,n,t){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&t,e.warmLanes&=~t,xe===e&&(oe&t)===t&&(De===4||De===3&&(oe&62914560)===oe&&300>rn()-Pl?(pe&2)===0&&Va(e,0):cu|=t,Ga===oe&&(Ga=0)),Vn(e)}function _p(e,n){n===0&&(n=Ss()),e=Xt(e,n),e!==null&&(ei(e,n),Vn(e))}function Jm(e){var n=e.memoizedState,t=0;n!==null&&(t=n.retryLane),_p(e,t)}function Wm(e,n){var t=0;switch(e.tag){case 31:case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(t=i.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(u(314))}a!==null&&a.delete(n),_p(e,t)}function $m(e,n){return Rr(e,n)}var Jl=null,qa=null,vu=!1,Wl=!1,bu=!1,Lt=0;function Vn(e){e!==qa&&e.next===null&&(qa===null?Jl=qa=e:qa=qa.next=e),Wl=!0,vu||(vu=!0,ng())}function Oi(e,n){if(!bu&&Wl){bu=!0;do for(var t=!1,a=Jl;a!==null;){if(e!==0){var i=a.pendingLanes;if(i===0)var l=0;else{var o=a.suspendedLanes,c=a.pingedLanes;l=(1<<31-un(42|e)+1)-1,l&=i&~(o&~c),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(t=!0,Lp(a,l))}else l=oe,l=tl(a,a===xe?l:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(l&3)===0||$a(a,l)||(t=!0,Lp(a,l));a=a.next}while(t);bu=!1}}function eg(){wp()}function wp(){Wl=vu=!1;var e=0;Lt!==0&&dg()&&(e=Lt);for(var n=rn(),t=null,a=Jl;a!==null;){var i=a.next,l=Dp(a,n);l===0?(a.next=null,t===null?Jl=i:t.next=i,i===null&&(qa=t)):(t=a,(e!==0||(l&3)!==0)&&(Wl=!0)),a=i}je!==0&&je!==5||Oi(e),Lt!==0&&(Lt=0)}function Dp(e,n){for(var t=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var o=31-un(l),c=1<<o,g=i[o];g===-1?((c&t)===0||(c&a)!==0)&&(i[o]=wh(c,n)):g<=n&&(e.expiredLanes|=c),l&=~c}if(n=xe,t=oe,t=tl(e,e===n?t:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,t===0||e===n&&(me===2||me===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Lr(a),e.callbackNode=null,e.callbackPriority=0;if((t&3)===0||$a(e,t)){if(n=t&-t,n===e.callbackPriority)return n;switch(a!==null&&Lr(a),Br(t)){case 2:case 8:t=vs;break;case 32:t=Wi;break;case 268435456:t=bs;break;default:t=Wi}return a=Rp.bind(null,e),t=Rr(t,a),e.callbackPriority=n,e.callbackNode=t,n}return a!==null&&a!==null&&Lr(a),e.callbackPriority=2,e.callbackNode=null,2}function Rp(e,n){if(je!==0&&je!==5)return e.callbackNode=null,e.callbackPriority=0,null;var t=e.callbackNode;if(Zl()&&e.callbackNode!==t)return null;var a=oe;return a=tl(e,e===xe?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(cp(e,a,n),Dp(e,rn()),e.callbackNode!=null&&e.callbackNode===t?Rp.bind(null,e):null)}function Lp(e,n){if(Zl())return null;cp(e,n,!0)}function ng(){fg(function(){(pe&6)!==0?Rr(ys,eg):wp()})}function Su(){if(Lt===0){var e=Da;e===0&&(e=$i,$i<<=1,($i&261888)===0&&($i=256)),Lt=e}return Lt}function Mp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rl(""+e)}function Np(e,n){var t=n.ownerDocument.createElement("input");return t.name=n.name,t.value=n.value,e.id&&t.setAttribute("form",e.id),n.parentNode.insertBefore(t,n),e=new FormData(e),t.parentNode.removeChild(t),e}function tg(e,n,t,a,i){if(n==="submit"&&t&&t.stateNode===i){var l=Mp((i[We]||null).action),o=a.submitter;o&&(n=(n=o[We]||null)?Mp(n.formAction):o.getAttribute("formAction"),n!==null&&(l=n,o=null));var c=new cl("action","action",null,a,i);e.push({event:c,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(Lt!==0){var g=o?Np(i,o):new FormData(i);Ho(t,{pending:!0,data:g,method:i.method,action:l},null,g)}}else typeof l=="function"&&(c.preventDefault(),g=o?Np(i,o):new FormData(i),Ho(t,{pending:!0,data:g,method:i.method,action:l},l,g))},currentTarget:i}]})}}for(var Cu=0;Cu<to.length;Cu++){var xu=to[Cu],ag=xu.toLowerCase(),ig=xu[0].toUpperCase()+xu.slice(1);Mn(ag,"on"+ig)}Mn(sc,"onAnimationEnd"),Mn(cc,"onAnimationIteration"),Mn(dc,"onAnimationStart"),Mn("dblclick","onDoubleClick"),Mn("focusin","onFocus"),Mn("focusout","onBlur"),Mn(Sm,"onTransitionRun"),Mn(Cm,"onTransitionStart"),Mn(xm,"onTransitionCancel"),Mn(pc,"onTransitionEnd"),ha("onMouseEnter",["mouseout","mouseover"]),ha("onMouseLeave",["mouseout","mouseover"]),ha("onPointerEnter",["pointerout","pointerover"]),ha("onPointerLeave",["pointerout","pointerover"]),qt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),qt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),qt("onBeforeInput",["compositionend","keypress","textInput","paste"]),qt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),qt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),qt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),lg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ui));function Bp(e,n){n=(n&4)!==0;for(var t=0;t<e.length;t++){var a=e[t],i=a.event;a=a.listeners;e:{var l=void 0;if(n)for(var o=a.length-1;0<=o;o--){var c=a[o],g=c.instance,_=c.currentTarget;if(c=c.listener,g!==l&&i.isPropagationStopped())break e;l=c,i.currentTarget=_;try{l(i)}catch(M){fl(M)}i.currentTarget=null,l=g}else for(o=0;o<a.length;o++){if(c=a[o],g=c.instance,_=c.currentTarget,c=c.listener,g!==l&&i.isPropagationStopped())break e;l=c,i.currentTarget=_;try{l(i)}catch(M){fl(M)}i.currentTarget=null,l=g}}}}function re(e,n){var t=n[Or];t===void 0&&(t=n[Or]=new Set);var a=e+"__bubble";t.has(a)||(Op(n,e,2,!1),t.add(a))}function Eu(e,n,t){var a=0;n&&(a|=4),Op(t,e,a,n)}var $l="_reactListening"+Math.random().toString(36).slice(2);function Au(e){if(!e[$l]){e[$l]=!0,ws.forEach(function(t){t!=="selectionchange"&&(lg.has(t)||Eu(t,!1,e),Eu(t,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[$l]||(n[$l]=!0,Eu("selectionchange",!1,n))}}function Op(e,n,t,a){switch(cf(n)){case 2:var i=Bg;break;case 8:i=Og;break;default:i=Gu}t=i.bind(null,n,t,e),i=void 0,!qr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(n,t,{capture:!0,passive:i}):e.addEventListener(n,t,!0):i!==void 0?e.addEventListener(n,t,{passive:i}):e.addEventListener(n,t,!1)}function Tu(e,n,t,a,i){var l=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var c=a.stateNode.containerInfo;if(c===i)break;if(o===4)for(o=a.return;o!==null;){var g=o.tag;if((g===3||g===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;c!==null;){if(o=da(c),o===null)return;if(g=o.tag,g===5||g===6||g===26||g===27){a=l=o;continue e}c=c.parentNode}}a=a.return}Gs(function(){var _=l,M=Vr(t),U=[];e:{var w=fc.get(e);if(w!==void 0){var D=cl,P=e;switch(e){case"keypress":if(ul(t)===0)break e;case"keydown":case"keyup":D=Wh;break;case"focusin":P="focus",D=Xr;break;case"focusout":P="blur",D=Xr;break;case"beforeblur":case"afterblur":D=Xr;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":D=Is;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":D=Hh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":D=nm;break;case sc:case cc:case dc:D=qh;break;case pc:D=am;break;case"scroll":case"scrollend":D=jh;break;case"wheel":D=lm;break;case"copy":case"cut":case"paste":D=Fh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":D=Ps;break;case"toggle":case"beforetoggle":D=om}var Z=(n&4)!==0,Se=!Z&&(e==="scroll"||e==="scrollend"),A=Z?w!==null?w+"Capture":null:w;Z=[];for(var v=_,T;v!==null;){var B=v;if(T=B.stateNode,B=B.tag,B!==5&&B!==26&&B!==27||T===null||A===null||(B=ai(v,A),B!=null&&Z.push(ki(v,B,T))),Se)break;v=v.return}0<Z.length&&(w=new D(w,P,null,t,M),U.push({event:w,listeners:Z}))}}if((n&7)===0){e:{if(w=e==="mouseover"||e==="pointerover",D=e==="mouseout"||e==="pointerout",w&&t!==Hr&&(P=t.relatedTarget||t.fromElement)&&(da(P)||P[ca]))break e;if((D||w)&&(w=M.window===M?M:(w=M.ownerDocument)?w.defaultView||w.parentWindow:window,D?(P=t.relatedTarget||t.toElement,D=_,P=P?da(P):null,P!==null&&(Se=p(P),Z=P.tag,P!==Se||Z!==5&&Z!==27&&Z!==6)&&(P=null)):(D=null,P=_),D!==P)){if(Z=Is,B="onMouseLeave",A="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(Z=Ps,B="onPointerLeave",A="onPointerEnter",v="pointer"),Se=D==null?w:ti(D),T=P==null?w:ti(P),w=new Z(B,v+"leave",D,t,M),w.target=Se,w.relatedTarget=T,B=null,da(M)===_&&(Z=new Z(A,v+"enter",P,t,M),Z.target=T,Z.relatedTarget=Se,B=Z),Se=B,D&&P)n:{for(Z=rg,A=D,v=P,T=0,B=A;B;B=Z(B))T++;B=0;for(var K=v;K;K=Z(K))B++;for(;0<T-B;)A=Z(A),T--;for(;0<B-T;)v=Z(v),B--;for(;T--;){if(A===v||v!==null&&A===v.alternate){Z=A;break n}A=Z(A),v=Z(v)}Z=null}else Z=null;D!==null&&Up(U,w,D,Z,!1),P!==null&&Se!==null&&Up(U,Se,P,Z,!0)}}e:{if(w=_?ti(_):window,D=w.nodeName&&w.nodeName.toLowerCase(),D==="select"||D==="input"&&w.type==="file")var ce=Ws;else if(Zs(w))if($s)ce=ym;else{ce=mm;var X=hm}else D=w.nodeName,!D||D.toLowerCase()!=="input"||w.type!=="checkbox"&&w.type!=="radio"?_&&Gr(_.elementType)&&(ce=Ws):ce=gm;if(ce&&(ce=ce(e,_))){Js(U,ce,t,M);break e}X&&X(e,w,_),e==="focusout"&&_&&w.type==="number"&&_.memoizedProps.value!=null&&jr(w,"number",w.value)}switch(X=_?ti(_):window,e){case"focusin":(Zs(X)||X.contentEditable==="true")&&(Sa=X,$r=_,di=null);break;case"focusout":di=$r=Sa=null;break;case"mousedown":eo=!0;break;case"contextmenu":case"mouseup":case"dragend":eo=!1,oc(U,t,M);break;case"selectionchange":if(bm)break;case"keydown":case"keyup":oc(U,t,M)}var ae;if(Qr)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else ba?Ks(e,t)&&(ue="onCompositionEnd"):e==="keydown"&&t.keyCode===229&&(ue="onCompositionStart");ue&&(Fs&&t.locale!=="ko"&&(ba||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&ba&&(ae=Hs()):(ht=M,Pr="value"in ht?ht.value:ht.textContent,ba=!0)),X=er(_,ue),0<X.length&&(ue=new qs(ue,e,null,t,M),U.push({event:ue,listeners:X}),ae?ue.data=ae:(ae=Qs(t),ae!==null&&(ue.data=ae)))),(ae=sm?cm(e,t):dm(e,t))&&(ue=er(_,"onBeforeInput"),0<ue.length&&(X=new qs("onBeforeInput","beforeinput",null,t,M),U.push({event:X,listeners:ue}),X.data=ae)),tg(U,e,_,t,M)}Bp(U,n)})}function ki(e,n,t){return{instance:e,listener:n,currentTarget:t}}function er(e,n){for(var t=n+"Capture",a=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=ai(e,t),i!=null&&a.unshift(ki(e,i,l)),i=ai(e,n),i!=null&&a.push(ki(e,i,l))),e.tag===3)return a;e=e.return}return[]}function rg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Up(e,n,t,a,i){for(var l=n._reactName,o=[];t!==null&&t!==a;){var c=t,g=c.alternate,_=c.stateNode;if(c=c.tag,g!==null&&g===a)break;c!==5&&c!==26&&c!==27||_===null||(g=_,i?(_=ai(t,l),_!=null&&o.unshift(ki(t,_,g))):i||(_=ai(t,l),_!=null&&o.push(ki(t,_,g)))),t=t.return}o.length!==0&&e.push({event:n,listeners:o})}var og=/\r\n?/g,ug=/\u0000|\uFFFD/g;function kp(e){return(typeof e=="string"?e:""+e).replace(og,`
`).replace(ug,"")}function zp(e,n){return n=kp(n),kp(e)===n}function be(e,n,t,a,i,l){switch(t){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||ga(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&ga(e,""+a);break;case"className":il(e,"class",a);break;case"tabIndex":il(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":il(e,t,a);break;case"style":zs(e,a,l);break;case"data":if(n!=="object"){il(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||t!=="href")){e.removeAttribute(t);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=rl(""+a),e.setAttribute(t,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(t,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(t==="formAction"?(n!=="input"&&be(e,n,"name",i.name,i,null),be(e,n,"formEncType",i.formEncType,i,null),be(e,n,"formMethod",i.formMethod,i,null),be(e,n,"formTarget",i.formTarget,i,null)):(be(e,n,"encType",i.encType,i,null),be(e,n,"method",i.method,i,null),be(e,n,"target",i.target,i,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(t);break}a=rl(""+a),e.setAttribute(t,a);break;case"onClick":a!=null&&(e.onclick=Fn);break;case"onScroll":a!=null&&re("scroll",e);break;case"onScrollEnd":a!=null&&re("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}t=rl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",t);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""+a):e.removeAttribute(t);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,""):e.removeAttribute(t);break;case"capture":case"download":a===!0?e.setAttribute(t,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(t,a):e.removeAttribute(t);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(t,a):e.removeAttribute(t);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(t):e.setAttribute(t,a);break;case"popover":re("beforetoggle",e),re("toggle",e),al(e,"popover",a);break;case"xlinkActuate":Pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Pn(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Pn(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Pn(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Pn(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":al(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(t=kh.get(t)||t,al(e,t,a))}}function _u(e,n,t,a,i,l){switch(t){case"style":zs(e,a,l);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(u(61));if(t=a.__html,t!=null){if(i.children!=null)throw Error(u(60));e.innerHTML=t}}break;case"children":typeof a=="string"?ga(e,a):(typeof a=="number"||typeof a=="bigint")&&ga(e,""+a);break;case"onScroll":a!=null&&re("scroll",e);break;case"onScrollEnd":a!=null&&re("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Fn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ds.hasOwnProperty(t))e:{if(t[0]==="o"&&t[1]==="n"&&(i=t.endsWith("Capture"),n=t.slice(2,i?t.length-7:void 0),l=e[We]||null,l=l!=null?l[t]:null,typeof l=="function"&&e.removeEventListener(n,l,i),typeof a=="function")){typeof l!="function"&&l!==null&&(t in e?e[t]=null:e.hasAttribute(t)&&e.removeAttribute(t)),e.addEventListener(n,a,i);break e}t in e?e[t]=a:a===!0?e.setAttribute(t,""):al(e,t,a)}}}function Fe(e,n,t){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":re("error",e),re("load",e);var a=!1,i=!1,l;for(l in t)if(t.hasOwnProperty(l)){var o=t[l];if(o!=null)switch(l){case"src":a=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:be(e,n,l,o,t,null)}}i&&be(e,n,"srcSet",t.srcSet,t,null),a&&be(e,n,"src",t.src,t,null);return;case"input":re("invalid",e);var c=l=o=i=null,g=null,_=null;for(a in t)if(t.hasOwnProperty(a)){var M=t[a];if(M!=null)switch(a){case"name":i=M;break;case"type":o=M;break;case"checked":g=M;break;case"defaultChecked":_=M;break;case"value":l=M;break;case"defaultValue":c=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(u(137,n));break;default:be(e,n,a,M,t,null)}}Bs(e,l,c,g,_,o,i,!1);return;case"select":re("invalid",e),a=o=l=null;for(i in t)if(t.hasOwnProperty(i)&&(c=t[i],c!=null))switch(i){case"value":l=c;break;case"defaultValue":o=c;break;case"multiple":a=c;default:be(e,n,i,c,t,null)}n=l,t=o,e.multiple=!!a,n!=null?ma(e,!!a,n,!1):t!=null&&ma(e,!!a,t,!0);return;case"textarea":re("invalid",e),l=i=a=null;for(o in t)if(t.hasOwnProperty(o)&&(c=t[o],c!=null))switch(o){case"value":a=c;break;case"defaultValue":i=c;break;case"children":l=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(u(91));break;default:be(e,n,o,c,t,null)}Us(e,a,i,l);return;case"option":for(g in t)if(t.hasOwnProperty(g)&&(a=t[g],a!=null))switch(g){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:be(e,n,g,a,t,null)}return;case"dialog":re("beforetoggle",e),re("toggle",e),re("cancel",e),re("close",e);break;case"iframe":case"object":re("load",e);break;case"video":case"audio":for(a=0;a<Ui.length;a++)re(Ui[a],e);break;case"image":re("error",e),re("load",e);break;case"details":re("toggle",e);break;case"embed":case"source":case"link":re("error",e),re("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(_ in t)if(t.hasOwnProperty(_)&&(a=t[_],a!=null))switch(_){case"children":case"dangerouslySetInnerHTML":throw Error(u(137,n));default:be(e,n,_,a,t,null)}return;default:if(Gr(n)){for(M in t)t.hasOwnProperty(M)&&(a=t[M],a!==void 0&&_u(e,n,M,a,t,void 0));return}}for(c in t)t.hasOwnProperty(c)&&(a=t[c],a!=null&&be(e,n,c,a,t,null))}function sg(e,n,t,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,o=null,c=null,g=null,_=null,M=null;for(D in t){var U=t[D];if(t.hasOwnProperty(D)&&U!=null)switch(D){case"checked":break;case"value":break;case"defaultValue":g=U;default:a.hasOwnProperty(D)||be(e,n,D,null,a,U)}}for(var w in a){var D=a[w];if(U=t[w],a.hasOwnProperty(w)&&(D!=null||U!=null))switch(w){case"type":l=D;break;case"name":i=D;break;case"checked":_=D;break;case"defaultChecked":M=D;break;case"value":o=D;break;case"defaultValue":c=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(u(137,n));break;default:D!==U&&be(e,n,w,D,a,U)}}zr(e,o,c,g,_,M,l,i);return;case"select":D=o=c=w=null;for(l in t)if(g=t[l],t.hasOwnProperty(l)&&g!=null)switch(l){case"value":break;case"multiple":D=g;default:a.hasOwnProperty(l)||be(e,n,l,null,a,g)}for(i in a)if(l=a[i],g=t[i],a.hasOwnProperty(i)&&(l!=null||g!=null))switch(i){case"value":w=l;break;case"defaultValue":c=l;break;case"multiple":o=l;default:l!==g&&be(e,n,i,l,a,g)}n=c,t=o,a=D,w!=null?ma(e,!!t,w,!1):!!a!=!!t&&(n!=null?ma(e,!!t,n,!0):ma(e,!!t,t?[]:"",!1));return;case"textarea":D=w=null;for(c in t)if(i=t[c],t.hasOwnProperty(c)&&i!=null&&!a.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:be(e,n,c,null,a,i)}for(o in a)if(i=a[o],l=t[o],a.hasOwnProperty(o)&&(i!=null||l!=null))switch(o){case"value":w=i;break;case"defaultValue":D=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(u(91));break;default:i!==l&&be(e,n,o,i,a,l)}Os(e,w,D);return;case"option":for(var P in t)if(w=t[P],t.hasOwnProperty(P)&&w!=null&&!a.hasOwnProperty(P))switch(P){case"selected":e.selected=!1;break;default:be(e,n,P,null,a,w)}for(g in a)if(w=a[g],D=t[g],a.hasOwnProperty(g)&&w!==D&&(w!=null||D!=null))switch(g){case"selected":e.selected=w&&typeof w!="function"&&typeof w!="symbol";break;default:be(e,n,g,w,a,D)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Z in t)w=t[Z],t.hasOwnProperty(Z)&&w!=null&&!a.hasOwnProperty(Z)&&be(e,n,Z,null,a,w);for(_ in a)if(w=a[_],D=t[_],a.hasOwnProperty(_)&&w!==D&&(w!=null||D!=null))switch(_){case"children":case"dangerouslySetInnerHTML":if(w!=null)throw Error(u(137,n));break;default:be(e,n,_,w,a,D)}return;default:if(Gr(n)){for(var Se in t)w=t[Se],t.hasOwnProperty(Se)&&w!==void 0&&!a.hasOwnProperty(Se)&&_u(e,n,Se,void 0,a,w);for(M in a)w=a[M],D=t[M],!a.hasOwnProperty(M)||w===D||w===void 0&&D===void 0||_u(e,n,M,w,a,D);return}}for(var A in t)w=t[A],t.hasOwnProperty(A)&&w!=null&&!a.hasOwnProperty(A)&&be(e,n,A,null,a,w);for(U in a)w=a[U],D=t[U],!a.hasOwnProperty(U)||w===D||w==null&&D==null||be(e,n,U,w,a,D)}function jp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function cg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,t=performance.getEntriesByType("resource"),a=0;a<t.length;a++){var i=t[a],l=i.transferSize,o=i.initiatorType,c=i.duration;if(l&&c&&jp(o)){for(o=0,c=i.responseEnd,a+=1;a<t.length;a++){var g=t[a],_=g.startTime;if(_>c)break;var M=g.transferSize,U=g.initiatorType;M&&jp(U)&&(g=g.responseEnd,o+=M*(g<c?1:(c-_)/(g-_)))}if(--a,n+=8*(l+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wu=null,Du=null;function nr(e){return e.nodeType===9?e:e.ownerDocument}function Gp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Hp(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Ru(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lu=null;function dg(){var e=window.event;return e&&e.type==="popstate"?e===Lu?!1:(Lu=e,!0):(Lu=null,!1)}var Vp=typeof setTimeout=="function"?setTimeout:void 0,pg=typeof clearTimeout=="function"?clearTimeout:void 0,Ip=typeof Promise=="function"?Promise:void 0,fg=typeof queueMicrotask=="function"?queueMicrotask:typeof Ip<"u"?function(e){return Ip.resolve(null).then(e).catch(hg)}:Vp;function hg(e){setTimeout(function(){throw e})}function Mt(e){return e==="head"}function qp(e,n){var t=n,a=0;do{var i=t.nextSibling;if(e.removeChild(t),i&&i.nodeType===8)if(t=i.data,t==="/$"||t==="/&"){if(a===0){e.removeChild(i),Xa(n);return}a--}else if(t==="$"||t==="$?"||t==="$~"||t==="$!"||t==="&")a++;else if(t==="html")zi(e.ownerDocument.documentElement);else if(t==="head"){t=e.ownerDocument.head,zi(t);for(var l=t.firstChild;l;){var o=l.nextSibling,c=l.nodeName;l[ni]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&l.rel.toLowerCase()==="stylesheet"||t.removeChild(l),l=o}}else t==="body"&&zi(e.ownerDocument.body);t=i}while(t);Xa(n)}function Pp(e,n){var t=e;e=0;do{var a=t.nextSibling;if(t.nodeType===1?n?(t._stashedDisplay=t.style.display,t.style.display="none"):(t.style.display=t._stashedDisplay||"",t.getAttribute("style")===""&&t.removeAttribute("style")):t.nodeType===3&&(n?(t._stashedText=t.nodeValue,t.nodeValue=""):t.nodeValue=t._stashedText||""),a&&a.nodeType===8)if(t=a.data,t==="/$"){if(e===0)break;e--}else t!=="$"&&t!=="$?"&&t!=="$~"&&t!=="$!"||e++;t=a}while(t)}function Mu(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var t=n;switch(n=n.nextSibling,t.nodeName){case"HTML":case"HEAD":case"BODY":Mu(t),Ur(t);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(t.rel.toLowerCase()==="stylesheet")continue}e.removeChild(t)}}function mg(e,n,t,a){for(;e.nodeType===1;){var i=t;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ni])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=wn(e.nextSibling),e===null)break}return null}function gg(e,n,t){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=wn(e.nextSibling),e===null))return null;return e}function Fp(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=wn(e.nextSibling),e===null))return null;return e}function Nu(e){return e.data==="$?"||e.data==="$~"}function Bu(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function yg(e,n){var t=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||t.readyState!=="loading")n();else{var a=function(){n(),t.removeEventListener("DOMContentLoaded",a)};t.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function wn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Ou=null;function Yp(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="/$"||t==="/&"){if(n===0)return wn(e.nextSibling);n--}else t!=="$"&&t!=="$!"&&t!=="$?"&&t!=="$~"&&t!=="&"||n++}e=e.nextSibling}return null}function Xp(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var t=e.data;if(t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"){if(n===0)return e;n--}else t!=="/$"&&t!=="/&"||n++}e=e.previousSibling}return null}function Kp(e,n,t){switch(n=nr(t),e){case"html":if(e=n.documentElement,!e)throw Error(u(452));return e;case"head":if(e=n.head,!e)throw Error(u(453));return e;case"body":if(e=n.body,!e)throw Error(u(454));return e;default:throw Error(u(451))}}function zi(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ur(e)}var Dn=new Map,Qp=new Set;function tr(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ot=V.d;V.d={f:vg,r:bg,D:Sg,C:Cg,L:xg,m:Eg,X:Tg,S:Ag,M:_g};function vg(){var e=ot.f(),n=Xl();return e||n}function bg(e){var n=pa(e);n!==null&&n.tag===5&&n.type==="form"?pd(n):ot.r(e)}var Pa=typeof document>"u"?null:document;function Zp(e,n,t){var a=Pa;if(a&&typeof n=="string"&&n){var i=Sn(n);i='link[rel="'+e+'"][href="'+i+'"]',typeof t=="string"&&(i+='[crossorigin="'+t+'"]'),Qp.has(i)||(Qp.add(i),e={rel:e,crossOrigin:t,href:n},a.querySelector(i)===null&&(n=a.createElement("link"),Fe(n,"link",e),Ge(n),a.head.appendChild(n)))}}function Sg(e){ot.D(e),Zp("dns-prefetch",e,null)}function Cg(e,n){ot.C(e,n),Zp("preconnect",e,n)}function xg(e,n,t){ot.L(e,n,t);var a=Pa;if(a&&e&&n){var i='link[rel="preload"][as="'+Sn(n)+'"]';n==="image"&&t&&t.imageSrcSet?(i+='[imagesrcset="'+Sn(t.imageSrcSet)+'"]',typeof t.imageSizes=="string"&&(i+='[imagesizes="'+Sn(t.imageSizes)+'"]')):i+='[href="'+Sn(e)+'"]';var l=i;switch(n){case"style":l=Fa(e);break;case"script":l=Ya(e)}Dn.has(l)||(e=S({rel:"preload",href:n==="image"&&t&&t.imageSrcSet?void 0:e,as:n},t),Dn.set(l,e),a.querySelector(i)!==null||n==="style"&&a.querySelector(ji(l))||n==="script"&&a.querySelector(Gi(l))||(n=a.createElement("link"),Fe(n,"link",e),Ge(n),a.head.appendChild(n)))}}function Eg(e,n){ot.m(e,n);var t=Pa;if(t&&e){var a=n&&typeof n.as=="string"?n.as:"script",i='link[rel="modulepreload"][as="'+Sn(a)+'"][href="'+Sn(e)+'"]',l=i;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Ya(e)}if(!Dn.has(l)&&(e=S({rel:"modulepreload",href:e},n),Dn.set(l,e),t.querySelector(i)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(t.querySelector(Gi(l)))return}a=t.createElement("link"),Fe(a,"link",e),Ge(a),t.head.appendChild(a)}}}function Ag(e,n,t){ot.S(e,n,t);var a=Pa;if(a&&e){var i=fa(a).hoistableStyles,l=Fa(e);n=n||"default";var o=i.get(l);if(!o){var c={loading:0,preload:null};if(o=a.querySelector(ji(l)))c.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":n},t),(t=Dn.get(l))&&Uu(e,t);var g=o=a.createElement("link");Ge(g),Fe(g,"link",e),g._p=new Promise(function(_,M){g.onload=_,g.onerror=M}),g.addEventListener("load",function(){c.loading|=1}),g.addEventListener("error",function(){c.loading|=2}),c.loading|=4,ar(o,n,a)}o={type:"stylesheet",instance:o,count:1,state:c},i.set(l,o)}}}function Tg(e,n){ot.X(e,n);var t=Pa;if(t&&e){var a=fa(t).hoistableScripts,i=Ya(e),l=a.get(i);l||(l=t.querySelector(Gi(i)),l||(e=S({src:e,async:!0},n),(n=Dn.get(i))&&ku(e,n),l=t.createElement("script"),Ge(l),Fe(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function _g(e,n){ot.M(e,n);var t=Pa;if(t&&e){var a=fa(t).hoistableScripts,i=Ya(e),l=a.get(i);l||(l=t.querySelector(Gi(i)),l||(e=S({src:e,async:!0,type:"module"},n),(n=Dn.get(i))&&ku(e,n),l=t.createElement("script"),Ge(l),Fe(l,"link",e),t.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},a.set(i,l))}}function Jp(e,n,t,a){var i=(i=ie.current)?tr(i):null;if(!i)throw Error(u(446));switch(e){case"meta":case"title":return null;case"style":return typeof t.precedence=="string"&&typeof t.href=="string"?(n=Fa(t.href),t=fa(i).hoistableStyles,a=t.get(n),a||(a={type:"style",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(t.rel==="stylesheet"&&typeof t.href=="string"&&typeof t.precedence=="string"){e=Fa(t.href);var l=fa(i).hoistableStyles,o=l.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,o),(l=i.querySelector(ji(e)))&&!l._p&&(o.instance=l,o.state.loading=5),Dn.has(e)||(t={rel:"preload",as:"style",href:t.href,crossOrigin:t.crossOrigin,integrity:t.integrity,media:t.media,hrefLang:t.hrefLang,referrerPolicy:t.referrerPolicy},Dn.set(e,t),l||wg(i,e,t,o.state))),n&&a===null)throw Error(u(528,""));return o}if(n&&a!==null)throw Error(u(529,""));return null;case"script":return n=t.async,t=t.src,typeof t=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ya(t),t=fa(i).hoistableScripts,a=t.get(n),a||(a={type:"script",instance:null,count:0,state:null},t.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(u(444,e))}}function Fa(e){return'href="'+Sn(e)+'"'}function ji(e){return'link[rel="stylesheet"]['+e+"]"}function Wp(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function wg(e,n,t,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),Fe(n,"link",t),Ge(n),e.head.appendChild(n))}function Ya(e){return'[src="'+Sn(e)+'"]'}function Gi(e){return"script[async]"+e}function $p(e,n,t){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+Sn(t.href)+'"]');if(a)return n.instance=a,Ge(a),a;var i=S({},t,{"data-href":t.href,"data-precedence":t.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Ge(a),Fe(a,"style",i),ar(a,t.precedence,e),n.instance=a;case"stylesheet":i=Fa(t.href);var l=e.querySelector(ji(i));if(l)return n.state.loading|=4,n.instance=l,Ge(l),l;a=Wp(t),(i=Dn.get(i))&&Uu(a,i),l=(e.ownerDocument||e).createElement("link"),Ge(l);var o=l;return o._p=new Promise(function(c,g){o.onload=c,o.onerror=g}),Fe(l,"link",a),n.state.loading|=4,ar(l,t.precedence,e),n.instance=l;case"script":return l=Ya(t.src),(i=e.querySelector(Gi(l)))?(n.instance=i,Ge(i),i):(a=t,(i=Dn.get(l))&&(a=S({},t),ku(a,i)),e=e.ownerDocument||e,i=e.createElement("script"),Ge(i),Fe(i,"link",a),e.head.appendChild(i),n.instance=i);case"void":return null;default:throw Error(u(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,ar(a,t.precedence,e));return n.instance}function ar(e,n,t){for(var a=t.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=a.length?a[a.length-1]:null,l=i,o=0;o<a.length;o++){var c=a[o];if(c.dataset.precedence===n)l=c;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(n=t.nodeType===9?t.head:t,n.insertBefore(e,n.firstChild))}function Uu(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function ku(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ir=null;function ef(e,n,t){if(ir===null){var a=new Map,i=ir=new Map;i.set(t,a)}else i=ir,a=i.get(t),a||(a=new Map,i.set(t,a));if(a.has(e))return a;for(a.set(e,null),t=t.getElementsByTagName(e),i=0;i<t.length;i++){var l=t[i];if(!(l[ni]||l[Ve]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var o=l.getAttribute(n)||"";o=e+o;var c=a.get(o);c?c.push(l):a.set(o,[l])}}return a}function nf(e,n,t){e=e.ownerDocument||e,e.head.insertBefore(t,n==="title"?e.querySelector("head > title"):null)}function Dg(e,n,t){if(t===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function tf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Rg(e,n,t,a){if(t.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(t.state.loading&4)===0){if(t.instance===null){var i=Fa(a.href),l=n.querySelector(ji(i));if(l){n=l._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=lr.bind(e),n.then(e,e)),t.state.loading|=4,t.instance=l,Ge(l);return}l=n.ownerDocument||n,a=Wp(a),(i=Dn.get(i))&&Uu(a,i),l=l.createElement("link"),Ge(l);var o=l;o._p=new Promise(function(c,g){o.onload=c,o.onerror=g}),Fe(l,"link",a),t.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(t,n),(n=t.state.preload)&&(t.state.loading&3)===0&&(e.count++,t=lr.bind(e),n.addEventListener("load",t),n.addEventListener("error",t))}}var zu=0;function Lg(e,n){return e.stylesheets&&e.count===0&&or(e,e.stylesheets),0<e.count||0<e.imgCount?function(t){var a=setTimeout(function(){if(e.stylesheets&&or(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+n);0<e.imgBytes&&zu===0&&(zu=62500*cg());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&or(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>zu?50:800)+n);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(i)}}:null}function lr(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)or(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var rr=null;function or(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,rr=new Map,n.forEach(Mg,e),rr=null,lr.call(e))}function Mg(e,n){if(!(n.state.loading&4)){var t=rr.get(e);if(t)var a=t.get(null);else{t=new Map,rr.set(e,t);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var o=i[l];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(t.set(o.dataset.precedence,o),a=o)}a&&t.set(null,a)}i=n.instance,o=i.getAttribute("data-precedence"),l=t.get(o)||a,l===a&&t.set(null,i),t.set(o,i),this.count++,a=lr.bind(this),i.addEventListener("load",a),i.addEventListener("error",a),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),n.state.loading|=4}}var Hi={$$typeof:F,Provider:null,Consumer:null,_currentValue:J,_currentValue2:J,_threadCount:0};function Ng(e,n,t,a,i,l,o,c,g){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mr(0),this.hiddenUpdates=Mr(null),this.identifierPrefix=a,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=g,this.incompleteTransitions=new Map}function af(e,n,t,a,i,l,o,c,g,_,M,U){return e=new Ng(e,n,t,o,g,_,M,U,c),n=1,l===!0&&(n|=24),l=cn(3,null,null,n),e.current=l,l.stateNode=e,n=go(),n.refCount++,e.pooledCache=n,n.refCount++,l.memoizedState={element:a,isDehydrated:t,cache:n},So(l),e}function lf(e){return e?(e=Ea,e):Ea}function rf(e,n,t,a,i,l){i=lf(i),a.context===null?a.context=i:a.pendingContext=i,a=St(n),a.payload={element:t},l=l===void 0?null:l,l!==null&&(a.callback=l),t=Ct(e,a,n),t!==null&&(ln(t,e,n),vi(t,e,n))}function of(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var t=e.retryLane;e.retryLane=t!==0&&t<n?t:n}}function ju(e,n){of(e,n),(e=e.alternate)&&of(e,n)}function uf(e){if(e.tag===13||e.tag===31){var n=Xt(e,67108864);n!==null&&ln(n,e,67108864),ju(e,67108864)}}function sf(e){if(e.tag===13||e.tag===31){var n=mn();n=Nr(n);var t=Xt(e,n);t!==null&&ln(t,e,n),ju(e,n)}}var ur=!0;function Bg(e,n,t,a){var i=N.T;N.T=null;var l=V.p;try{V.p=2,Gu(e,n,t,a)}finally{V.p=l,N.T=i}}function Og(e,n,t,a){var i=N.T;N.T=null;var l=V.p;try{V.p=8,Gu(e,n,t,a)}finally{V.p=l,N.T=i}}function Gu(e,n,t,a){if(ur){var i=Hu(a);if(i===null)Tu(e,n,a,sr,t),df(e,a);else if(kg(i,e,n,t,a))a.stopPropagation();else if(df(e,a),n&4&&-1<Ug.indexOf(e)){for(;i!==null;){var l=pa(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var o=It(l.pendingLanes);if(o!==0){var c=l;for(c.pendingLanes|=2,c.entangledLanes|=2;o;){var g=1<<31-un(o);c.entanglements[1]|=g,o&=~g}Vn(l),(pe&6)===0&&(Fl=rn()+500,Oi(0))}}break;case 31:case 13:c=Xt(l,2),c!==null&&ln(c,l,2),Xl(),ju(l,2)}if(l=Hu(a),l===null&&Tu(e,n,a,sr,t),l===i)break;i=l}i!==null&&a.stopPropagation()}else Tu(e,n,a,null,t)}}function Hu(e){return e=Vr(e),Vu(e)}var sr=null;function Vu(e){if(sr=null,e=da(e),e!==null){var n=p(e);if(n===null)e=null;else{var t=n.tag;if(t===13){if(e=m(n),e!==null)return e;e=null}else if(t===31){if(e=E(n),e!==null)return e;e=null}else if(t===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return sr=e,null}function cf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Sh()){case ys:return 2;case vs:return 8;case Wi:case Ch:return 32;case bs:return 268435456;default:return 32}default:return 32}}var Iu=!1,Nt=null,Bt=null,Ot=null,Vi=new Map,Ii=new Map,Ut=[],Ug="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function df(e,n){switch(e){case"focusin":case"focusout":Nt=null;break;case"dragenter":case"dragleave":Bt=null;break;case"mouseover":case"mouseout":Ot=null;break;case"pointerover":case"pointerout":Vi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ii.delete(n.pointerId)}}function qi(e,n,t,a,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:n,domEventName:t,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},n!==null&&(n=pa(n),n!==null&&uf(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,i!==null&&n.indexOf(i)===-1&&n.push(i),e)}function kg(e,n,t,a,i){switch(n){case"focusin":return Nt=qi(Nt,e,n,t,a,i),!0;case"dragenter":return Bt=qi(Bt,e,n,t,a,i),!0;case"mouseover":return Ot=qi(Ot,e,n,t,a,i),!0;case"pointerover":var l=i.pointerId;return Vi.set(l,qi(Vi.get(l)||null,e,n,t,a,i)),!0;case"gotpointercapture":return l=i.pointerId,Ii.set(l,qi(Ii.get(l)||null,e,n,t,a,i)),!0}return!1}function pf(e){var n=da(e.target);if(n!==null){var t=p(n);if(t!==null){if(n=t.tag,n===13){if(n=m(t),n!==null){e.blockedOn=n,Ts(e.priority,function(){sf(t)});return}}else if(n===31){if(n=E(t),n!==null){e.blockedOn=n,Ts(e.priority,function(){sf(t)});return}}else if(n===3&&t.stateNode.current.memoizedState.isDehydrated){e.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cr(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var t=Hu(e.nativeEvent);if(t===null){t=e.nativeEvent;var a=new t.constructor(t.type,t);Hr=a,t.target.dispatchEvent(a),Hr=null}else return n=pa(t),n!==null&&uf(n),e.blockedOn=t,!1;n.shift()}return!0}function ff(e,n,t){cr(e)&&t.delete(n)}function zg(){Iu=!1,Nt!==null&&cr(Nt)&&(Nt=null),Bt!==null&&cr(Bt)&&(Bt=null),Ot!==null&&cr(Ot)&&(Ot=null),Vi.forEach(ff),Ii.forEach(ff)}function dr(e,n){e.blockedOn===n&&(e.blockedOn=null,Iu||(Iu=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,zg)))}var pr=null;function hf(e){pr!==e&&(pr=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){pr===e&&(pr=null);for(var n=0;n<e.length;n+=3){var t=e[n],a=e[n+1],i=e[n+2];if(typeof a!="function"){if(Vu(a||t)===null)continue;break}var l=pa(t);l!==null&&(e.splice(n,3),n-=3,Ho(l,{pending:!0,data:i,method:t.method,action:a},a,i))}}))}function Xa(e){function n(g){return dr(g,e)}Nt!==null&&dr(Nt,e),Bt!==null&&dr(Bt,e),Ot!==null&&dr(Ot,e),Vi.forEach(n),Ii.forEach(n);for(var t=0;t<Ut.length;t++){var a=Ut[t];a.blockedOn===e&&(a.blockedOn=null)}for(;0<Ut.length&&(t=Ut[0],t.blockedOn===null);)pf(t),t.blockedOn===null&&Ut.shift();if(t=(e.ownerDocument||e).$$reactFormReplay,t!=null)for(a=0;a<t.length;a+=3){var i=t[a],l=t[a+1],o=i[We]||null;if(typeof l=="function")o||hf(t);else if(o){var c=null;if(l&&l.hasAttribute("formAction")){if(i=l,o=l[We]||null)c=o.formAction;else if(Vu(i)!==null)continue}else c=o.action;typeof c=="function"?t[a+1]=c:(t.splice(a,3),a-=3),hf(t)}}}function mf(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function n(){i!==null&&(i(),i=null),a||setTimeout(t,20)}function t(){if(!a&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(t,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),i!==null&&(i(),i=null)}}}function qu(e){this._internalRoot=e}fr.prototype.render=qu.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(u(409));var t=n.current,a=mn();rf(t,a,e,n,null,null)},fr.prototype.unmount=qu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;rf(e.current,2,null,e,null,null),Xl(),n[ca]=null}};function fr(e){this._internalRoot=e}fr.prototype.unstable_scheduleHydration=function(e){if(e){var n=As();e={blockedOn:null,target:e,priority:n};for(var t=0;t<Ut.length&&n!==0&&n<Ut[t].priority;t++);Ut.splice(t,0,e),t===0&&pf(e)}};var gf=s.version;if(gf!=="19.2.6")throw Error(u(527,gf,"19.2.6"));V.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(u(188)):(e=Object.keys(e).join(","),Error(u(268,e)));return e=h(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var jg={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:N,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hr.isDisabled&&hr.supportsFiber)try{Wa=hr.inject(jg),on=hr}catch{}}return Fi.createRoot=function(e,n){if(!f(e))throw Error(u(299));var t=!1,a="",i=xd,l=Ed,o=Ad;return n!=null&&(n.unstable_strictMode===!0&&(t=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(i=n.onUncaughtError),n.onCaughtError!==void 0&&(l=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),n=af(e,1,!1,null,null,t,a,null,i,l,o,mf),e[ca]=n.current,Au(e),new qu(n)},Fi.hydrateRoot=function(e,n,t){if(!f(e))throw Error(u(299));var a=!1,i="",l=xd,o=Ed,c=Ad,g=null;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(o=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError),t.formState!==void 0&&(g=t.formState)),n=af(e,1,!0,n,t??null,a,i,g,l,o,c,mf),n.context=lf(null),t=n.current,a=mn(),a=Nr(a),i=St(a),i.callback=null,Ct(t,i,a),t=a,n.current.lanes=t,ei(n,t),Vn(n),e[ca]=n.current,Au(e),new fr(n)},Fi.version="19.2.6",Fi}var _f;function Kg(){if(_f)return Yu.exports;_f=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(s){console.error(s)}}return r(),Yu.exports=Xg(),Yu.exports}var Qg=Kg();const Zg="modulepreload",Jg=function(r){return"/"+r},wf={},Rn=function(s,d,u){let f=Promise.resolve();if(d&&d.length>0){let m=function(h){return Promise.all(h.map(x=>Promise.resolve(x).then(S=>({status:"fulfilled",value:S}),S=>({status:"rejected",reason:S}))))};document.getElementsByTagName("link");const E=document.querySelector("meta[property=csp-nonce]"),y=(E==null?void 0:E.nonce)||(E==null?void 0:E.getAttribute("nonce"));f=m(d.map(h=>{if(h=Jg(h),h in wf)return;wf[h]=!0;const x=h.endsWith(".css"),S=x?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${S}`))return;const O=document.createElement("link");if(O.rel=x?"stylesheet":Zg,x||(O.as="script"),O.crossOrigin="",O.href=h,y&&O.setAttribute("nonce",y),document.head.appendChild(O),x)return new Promise((H,j)=>{O.addEventListener("load",H),O.addEventListener("error",()=>j(new Error(`Unable to preload CSS for ${h}`)))})}))}function p(m){const E=new Event("vite:preloadError",{cancelable:!0});if(E.payload=m,window.dispatchEvent(E),!E.defaultPrevented)throw m}return f.then(m=>{for(const E of m||[])E.status==="rejected"&&p(E.reason);return s().catch(p)})};/**
 * react-router v7.15.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Df="popstate";function Rf(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function Wg(r={}){function s(f,p){let{pathname:m="/",search:E="",hash:y=""}=sa(f.location.hash.substring(1));return!m.startsWith("/")&&!m.startsWith(".")&&(m="/"+m),es("",{pathname:m,search:E,hash:y},p.state&&p.state.usr||null,p.state&&p.state.key||"default")}function d(f,p){let m=f.document.querySelector("base"),E="";if(m&&m.getAttribute("href")){let y=f.location.href,h=y.indexOf("#");E=h===-1?y:y.slice(0,h)}return E+"#"+(typeof p=="string"?p:Xi(p))}function u(f,p){Un(f.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(p)})`)}return ey(s,d,u,r)}function _e(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function Un(r,s){if(!r){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function $g(){return Math.random().toString(36).substring(2,10)}function Lf(r,s){return{usr:r.state,key:r.key,idx:s,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function es(r,s,d=null,u,f){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof s=="string"?sa(s):s,state:d,key:s&&s.key||u||$g(),mask:f}}function Xi({pathname:r="/",search:s="",hash:d=""}){return s&&s!=="?"&&(r+=s.charAt(0)==="?"?s:"?"+s),d&&d!=="#"&&(r+=d.charAt(0)==="#"?d:"#"+d),r}function sa(r){let s={};if(r){let d=r.indexOf("#");d>=0&&(s.hash=r.substring(d),r=r.substring(0,d));let u=r.indexOf("?");u>=0&&(s.search=r.substring(u),r=r.substring(0,u)),r&&(s.pathname=r)}return s}function ey(r,s,d,u={}){let{window:f=document.defaultView,v5Compat:p=!1}=u,m=f.history,E="POP",y=null,h=x();h==null&&(h=0,m.replaceState({...m.state,idx:h},""));function x(){return(m.state||{idx:null}).idx}function S(){E="POP";let G=x(),R=G==null?null:G-h;h=G,y&&y({action:E,location:k.location,delta:R})}function O(G,R){E="PUSH";let I=Rf(G)?G:es(k.location,G,R);d&&d(I,G),h=x()+1;let F=Lf(I,h),ee=k.createHref(I.mask||I);try{m.pushState(F,"",ee)}catch(Q){if(Q instanceof DOMException&&Q.name==="DataCloneError")throw Q;f.location.assign(ee)}p&&y&&y({action:E,location:k.location,delta:1})}function H(G,R){E="REPLACE";let I=Rf(G)?G:es(k.location,G,R);d&&d(I,G),h=x();let F=Lf(I,h),ee=k.createHref(I.mask||I);m.replaceState(F,"",ee),p&&y&&y({action:E,location:k.location,delta:0})}function j(G){return ny(G)}let k={get action(){return E},get location(){return r(f,m)},listen(G){if(y)throw new Error("A history only accepts one active listener");return f.addEventListener(Df,S),y=G,()=>{f.removeEventListener(Df,S),y=null}},createHref(G){return s(f,G)},createURL:j,encodeLocation(G){let R=j(G);return{pathname:R.pathname,search:R.search,hash:R.hash}},push:O,replace:H,go(G){return m.go(G)}};return k}function ny(r,s=!1){let d="http://localhost";typeof window<"u"&&(d=window.location.origin!=="null"?window.location.origin:window.location.href),_e(d,"No window.location.(origin|href) available to create URL");let u=typeof r=="string"?r:Xi(r);return u=u.replace(/ $/,"%20"),!s&&u.startsWith("//")&&(u=d+u),new URL(u,d)}function If(r,s,d="/"){return ty(r,s,d,!1)}function ty(r,s,d,u,f){let p=typeof s=="string"?sa(s):s,m=dt(p.pathname||"/",d);if(m==null)return null;let E=ay(r),y=null,h=my(m);for(let x=0;y==null&&x<E.length;++x)y=fy(E[x],h,u);return y}function ay(r){let s=qf(r);return iy(s),s}function qf(r,s=[],d=[],u="",f=!1){let p=(m,E,y=f,h)=>{let x={relativePath:h===void 0?m.path||"":h,caseSensitive:m.caseSensitive===!0,childrenIndex:E,route:m};if(x.relativePath.startsWith("/")){if(!x.relativePath.startsWith(u)&&y)return;_e(x.relativePath.startsWith(u),`Absolute route path "${x.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),x.relativePath=x.relativePath.slice(u.length)}let S=On([u,x.relativePath]),O=d.concat(x);m.children&&m.children.length>0&&(_e(m.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${S}".`),qf(m.children,s,O,S,y)),!(m.path==null&&!m.index)&&s.push({path:S,score:dy(S,m.index),routesMeta:O})};return r.forEach((m,E)=>{var y;if(m.path===""||!((y=m.path)!=null&&y.includes("?")))p(m,E);else for(let h of Pf(m.path))p(m,E,!0,h)}),s}function Pf(r){let s=r.split("/");if(s.length===0)return[];let[d,...u]=s,f=d.endsWith("?"),p=d.replace(/\?$/,"");if(u.length===0)return f?[p,""]:[p];let m=Pf(u.join("/")),E=[];return E.push(...m.map(y=>y===""?p:[p,y].join("/"))),f&&E.push(...m),E.map(y=>r.startsWith("/")&&y===""?"/":y)}function iy(r){r.sort((s,d)=>s.score!==d.score?d.score-s.score:py(s.routesMeta.map(u=>u.childrenIndex),d.routesMeta.map(u=>u.childrenIndex)))}var ly=/^:[\w-]+$/,ry=3,oy=2,uy=1,sy=10,cy=-2,Mf=r=>r==="*";function dy(r,s){let d=r.split("/"),u=d.length;return d.some(Mf)&&(u+=cy),s&&(u+=oy),d.filter(f=>!Mf(f)).reduce((f,p)=>f+(ly.test(p)?ry:p===""?uy:sy),u)}function py(r,s){return r.length===s.length&&r.slice(0,-1).every((u,f)=>u===s[f])?r[r.length-1]-s[s.length-1]:0}function fy(r,s,d=!1){let{routesMeta:u}=r,f={},p="/",m=[];for(let E=0;E<u.length;++E){let y=u[E],h=E===u.length-1,x=p==="/"?s:s.slice(p.length)||"/",S=Sr({path:y.relativePath,caseSensitive:y.caseSensitive,end:h},x),O=y.route;if(!S&&h&&d&&!u[u.length-1].route.index&&(S=Sr({path:y.relativePath,caseSensitive:y.caseSensitive,end:!1},x)),!S)return null;Object.assign(f,S.params),m.push({params:f,pathname:On([p,S.pathname]),pathnameBase:by(On([p,S.pathnameBase])),route:O}),S.pathnameBase!=="/"&&(p=On([p,S.pathnameBase]))}return m}function Sr(r,s){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[d,u]=hy(r.path,r.caseSensitive,r.end),f=s.match(d);if(!f)return null;let p=f[0],m=p.replace(/(.)\/+$/,"$1"),E=f.slice(1);return{params:u.reduce((h,{paramName:x,isOptional:S},O)=>{if(x==="*"){let j=E[O]||"";m=p.slice(0,p.length-j.length).replace(/(.)\/+$/,"$1")}const H=E[O];return S&&!H?h[x]=void 0:h[x]=(H||"").replace(/%2F/g,"/"),h},{}),pathname:p,pathnameBase:m,pattern:r}}function hy(r,s=!1,d=!0){Un(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let u=[],f="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,E,y,h,x)=>{if(u.push({paramName:E,isOptional:y!=null}),y){let S=x.charAt(h+m.length);return S&&S!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(u.push({paramName:"*"}),f+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):d?f+="\\/*$":r!==""&&r!=="/"&&(f+="(?:(?=\\/|$))"),[new RegExp(f,s?void 0:"i"),u]}function my(r){try{return r.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Un(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${s}).`),r}}function dt(r,s){if(s==="/")return r;if(!r.toLowerCase().startsWith(s.toLowerCase()))return null;let d=s.endsWith("/")?s.length-1:s.length,u=r.charAt(d);return u&&u!=="/"?null:r.slice(d)||"/"}var gy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function yy(r,s="/"){let{pathname:d,search:u="",hash:f=""}=typeof r=="string"?sa(r):r,p;return d?(d=Yf(d),d.startsWith("/")?p=Nf(d.substring(1),"/"):p=Nf(d,s)):p=s,{pathname:p,search:Sy(u),hash:Cy(f)}}function Nf(r,s){let d=Cr(s).split("/");return r.split("/").forEach(f=>{f===".."?d.length>1&&d.pop():f!=="."&&d.push(f)}),d.length>1?d.join("/"):"/"}function Zu(r,s,d,u){return`Cannot include a '${r}' character in a manually specified \`to.${s}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${d}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function vy(r){return r.filter((s,d)=>d===0||s.route.path&&s.route.path.length>0)}function Ff(r){let s=vy(r);return s.map((d,u)=>u===s.length-1?d.pathname:d.pathnameBase)}function rs(r,s,d,u=!1){let f;typeof r=="string"?f=sa(r):(f={...r},_e(!f.pathname||!f.pathname.includes("?"),Zu("?","pathname","search",f)),_e(!f.pathname||!f.pathname.includes("#"),Zu("#","pathname","hash",f)),_e(!f.search||!f.search.includes("#"),Zu("#","search","hash",f)));let p=r===""||f.pathname==="",m=p?"/":f.pathname,E;if(m==null)E=d;else{let S=s.length-1;if(!u&&m.startsWith("..")){let O=m.split("/");for(;O[0]==="..";)O.shift(),S-=1;f.pathname=O.join("/")}E=S>=0?s[S]:"/"}let y=yy(f,E),h=m&&m!=="/"&&m.endsWith("/"),x=(p||m===".")&&d.endsWith("/");return!y.pathname.endsWith("/")&&(h||x)&&(y.pathname+="/"),y}var Yf=r=>r.replace(/\/\/+/g,"/"),On=r=>Yf(r.join("/")),Cr=r=>r.replace(/\/+$/,""),by=r=>Cr(r).replace(/^\/*/,"/"),Sy=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Cy=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,xy=class{constructor(r,s,d,u=!1){this.status=r,this.statusText=s||"",this.internal=u,d instanceof Error?(this.data=d.toString(),this.error=d):this.data=d}};function Ey(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Ay(r){let s=r.map(d=>d.route.path).filter(Boolean);return On(s)||"/"}var Xf=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Kf(r,s){let d=r;if(typeof d!="string"||!gy.test(d))return{absoluteURL:void 0,isExternal:!1,to:d};let u=d,f=!1;if(Xf)try{let p=new URL(window.location.href),m=d.startsWith("//")?new URL(p.protocol+d):new URL(d),E=dt(m.pathname,s);m.origin===p.origin&&E!=null?d=E+m.search+m.hash:f=!0}catch{Un(!1,`<Link to="${d}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:f,to:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Qf=["POST","PUT","PATCH","DELETE"];new Set(Qf);var Ty=["GET",...Qf];new Set(Ty);var Za=C.createContext(null);Za.displayName="DataRouter";var Er=C.createContext(null);Er.displayName="DataRouterState";var Zf=C.createContext(!1);function _y(){return C.useContext(Zf)}var Jf=C.createContext({isTransitioning:!1});Jf.displayName="ViewTransition";var wy=C.createContext(new Map);wy.displayName="Fetchers";var Dy=C.createContext(null);Dy.displayName="Await";var Ln=C.createContext(null);Ln.displayName="Navigation";var Ki=C.createContext(null);Ki.displayName="Location";var In=C.createContext({outlet:null,matches:[],isDataRoute:!1});In.displayName="Route";var os=C.createContext(null);os.displayName="RouteError";var Wf="REACT_ROUTER_ERROR",Ry="REDIRECT",Ly="ROUTE_ERROR_RESPONSE";function My(r){if(r.startsWith(`${Wf}:${Ry}:{`))try{let s=JSON.parse(r.slice(28));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.location=="string"&&typeof s.reloadDocument=="boolean"&&typeof s.replace=="boolean")return s}catch{}}function Ny(r){if(r.startsWith(`${Wf}:${Ly}:{`))try{let s=JSON.parse(r.slice(40));if(typeof s=="object"&&s&&typeof s.status=="number"&&typeof s.statusText=="string")return new xy(s.status,s.statusText,s.data)}catch{}}function By(r,{relative:s}={}){_e(Qi(),"useHref() may be used only in the context of a <Router> component.");let{basename:d,navigator:u}=C.useContext(Ln),{hash:f,pathname:p,search:m}=Zi(r,{relative:s}),E=p;return d!=="/"&&(E=p==="/"?d:On([d,p])),u.createHref({pathname:E,search:m,hash:f})}function Qi(){return C.useContext(Ki)!=null}function qn(){return _e(Qi(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(Ki).location}var $f="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function eh(r){C.useContext(Ln).static||C.useLayoutEffect(r)}function nh(){let{isDataRoute:r}=C.useContext(In);return r?Yy():Oy()}function Oy(){_e(Qi(),"useNavigate() may be used only in the context of a <Router> component.");let r=C.useContext(Za),{basename:s,navigator:d}=C.useContext(Ln),{matches:u}=C.useContext(In),{pathname:f}=qn(),p=JSON.stringify(Ff(u)),m=C.useRef(!1);return eh(()=>{m.current=!0}),C.useCallback((y,h={})=>{if(Un(m.current,$f),!m.current)return;if(typeof y=="number"){d.go(y);return}let x=rs(y,JSON.parse(p),f,h.relative==="path");r==null&&s!=="/"&&(x.pathname=x.pathname==="/"?s:On([s,x.pathname])),(h.replace?d.replace:d.push)(x,h.state,h)},[s,d,p,f,r])}C.createContext(null);function M1(){let{matches:r}=C.useContext(In),s=r[r.length-1];return(s==null?void 0:s.params)??{}}function Zi(r,{relative:s}={}){let{matches:d}=C.useContext(In),{pathname:u}=qn(),f=JSON.stringify(Ff(d));return C.useMemo(()=>rs(r,JSON.parse(f),u,s==="path"),[r,f,u,s])}function Uy(r,s){return th(r,s)}function th(r,s,d){var G;_e(Qi(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:u}=C.useContext(Ln),{matches:f}=C.useContext(In),p=f[f.length-1],m=p?p.params:{},E=p?p.pathname:"/",y=p?p.pathnameBase:"/",h=p&&p.route;{let R=h&&h.path||"";ih(E,!h||R.endsWith("*")||R.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${E}" (under <Route path="${R}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${R}"> to <Route path="${R==="/"?"*":`${R}/*`}">.`)}let x=qn(),S;if(s){let R=typeof s=="string"?sa(s):s;_e(y==="/"||((G=R.pathname)==null?void 0:G.startsWith(y)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${R.pathname}" was given in the \`location\` prop.`),S=R}else S=x;let O=S.pathname||"/",H=O;if(y!=="/"){let R=y.replace(/^\//,"").split("/");H="/"+O.replace(/^\//,"").split("/").slice(R.length).join("/")}let j=d&&d.state.matches.length?d.state.matches.map(R=>Object.assign(R,{route:d.manifest[R.route.id]||R.route})):If(r,{pathname:H});Un(h||j!=null,`No routes matched location "${S.pathname}${S.search}${S.hash}" `),Un(j==null||j[j.length-1].route.element!==void 0||j[j.length-1].route.Component!==void 0||j[j.length-1].route.lazy!==void 0,`Matched leaf route at location "${S.pathname}${S.search}${S.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let k=Hy(j&&j.map(R=>Object.assign({},R,{params:Object.assign({},m,R.params),pathname:On([y,u.encodeLocation?u.encodeLocation(R.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?y:On([y,u.encodeLocation?u.encodeLocation(R.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:R.pathnameBase])})),f,d);return s&&k?C.createElement(Ki.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...S},navigationType:"POP"}},k):k}function ky(){let r=Fy(),s=Ey(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),d=r instanceof Error?r.stack:null,u="rgba(200,200,200, 0.5)",f={padding:"0.5rem",backgroundColor:u},p={padding:"2px 4px",backgroundColor:u},m=null;return console.error("Error handled by React Router default ErrorBoundary:",r),m=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:p},"ErrorBoundary")," or"," ",C.createElement("code",{style:p},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},s),d?C.createElement("pre",{style:f},d):null,m)}var zy=C.createElement(ky,null),ah=class extends C.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,s){return s.location!==r.location||s.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:s.error,location:s.location,revalidation:r.revalidation||s.revalidation}}componentDidCatch(r,s){this.props.onError?this.props.onError(r,s):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const d=Ny(r.digest);d&&(r=d)}let s=r!==void 0?C.createElement(In.Provider,{value:this.props.routeContext},C.createElement(os.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?C.createElement(jy,{error:r},s):s}};ah.contextType=Zf;var Ju=new WeakMap;function jy({children:r,error:s}){let{basename:d}=C.useContext(Ln);if(typeof s=="object"&&s&&"digest"in s&&typeof s.digest=="string"){let u=My(s.digest);if(u){let f=Ju.get(s);if(f)throw f;let p=Kf(u.location,d);if(Xf&&!Ju.get(s))if(p.isExternal||u.reloadDocument)window.location.href=p.absoluteURL||p.to;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(p.to,{replace:u.replace}));throw Ju.set(s,m),m}return C.createElement("meta",{httpEquiv:"refresh",content:`0;url=${p.absoluteURL||p.to}`})}}return r}function Gy({routeContext:r,match:s,children:d}){let u=C.useContext(Za);return u&&u.static&&u.staticContext&&(s.route.errorElement||s.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=s.route.id),C.createElement(In.Provider,{value:r},d)}function Hy(r,s=[],d){let u=d==null?void 0:d.state;if(r==null){if(!u)return null;if(u.errors)r=u.matches;else if(s.length===0&&!u.initialized&&u.matches.length>0)r=u.matches;else return null}let f=r,p=u==null?void 0:u.errors;if(p!=null){let x=f.findIndex(S=>S.route.id&&(p==null?void 0:p[S.route.id])!==void 0);_e(x>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(p).join(",")}`),f=f.slice(0,Math.min(f.length,x+1))}let m=!1,E=-1;if(d&&u){m=u.renderFallback;for(let x=0;x<f.length;x++){let S=f[x];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(E=x),S.route.id){let{loaderData:O,errors:H}=u,j=S.route.loader&&!O.hasOwnProperty(S.route.id)&&(!H||H[S.route.id]===void 0);if(S.route.lazy||j){d.isStatic&&(m=!0),E>=0?f=f.slice(0,E+1):f=[f[0]];break}}}}let y=d==null?void 0:d.onError,h=u&&y?(x,S)=>{var O,H;y(x,{location:u.location,params:((H=(O=u.matches)==null?void 0:O[0])==null?void 0:H.params)??{},pattern:Ay(u.matches),errorInfo:S})}:void 0;return f.reduceRight((x,S,O)=>{let H,j=!1,k=null,G=null;u&&(H=p&&S.route.id?p[S.route.id]:void 0,k=S.route.errorElement||zy,m&&(E<0&&O===0?(ih("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),j=!0,G=null):E===O&&(j=!0,G=S.route.hydrateFallbackElement||null)));let R=s.concat(f.slice(0,O+1)),I=()=>{let F;return H?F=k:j?F=G:S.route.Component?F=C.createElement(S.route.Component,null):S.route.element?F=S.route.element:F=x,C.createElement(Gy,{match:S,routeContext:{outlet:x,matches:R,isDataRoute:u!=null},children:F})};return u&&(S.route.ErrorBoundary||S.route.errorElement||O===0)?C.createElement(ah,{location:u.location,revalidation:u.revalidation,component:k,error:H,children:I(),routeContext:{outlet:null,matches:R,isDataRoute:!0},onError:h}):I()},null)}function us(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Vy(r){let s=C.useContext(Za);return _e(s,us(r)),s}function Iy(r){let s=C.useContext(Er);return _e(s,us(r)),s}function qy(r){let s=C.useContext(In);return _e(s,us(r)),s}function ss(r){let s=qy(r),d=s.matches[s.matches.length-1];return _e(d.route.id,`${r} can only be used on routes that contain a unique "id"`),d.route.id}function Py(){return ss("useRouteId")}function Fy(){var u;let r=C.useContext(os),s=Iy("useRouteError"),d=ss("useRouteError");return r!==void 0?r:(u=s.errors)==null?void 0:u[d]}function Yy(){let{router:r}=Vy("useNavigate"),s=ss("useNavigate"),d=C.useRef(!1);return eh(()=>{d.current=!0}),C.useCallback(async(f,p={})=>{Un(d.current,$f),d.current&&(typeof f=="number"?await r.navigate(f):await r.navigate(f,{fromRouteId:s,...p}))},[r,s])}var Bf={};function ih(r,s,d){!s&&!Bf[r]&&(Bf[r]=!0,Un(!1,d))}C.memo(Xy);function Xy({routes:r,manifest:s,future:d,state:u,isStatic:f,onError:p}){return th(r,void 0,{manifest:s,state:u,isStatic:f,onError:p})}function Gt(r){_e(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Ky({basename:r="/",children:s=null,location:d,navigationType:u="POP",navigator:f,static:p=!1,useTransitions:m}){_e(!Qi(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let E=r.replace(/^\/*/,"/"),y=C.useMemo(()=>({basename:E,navigator:f,static:p,useTransitions:m,future:{}}),[E,f,p,m]);typeof d=="string"&&(d=sa(d));let{pathname:h="/",search:x="",hash:S="",state:O=null,key:H="default",mask:j}=d,k=C.useMemo(()=>{let G=dt(h,E);return G==null?null:{location:{pathname:G,search:x,hash:S,state:O,key:H,mask:j},navigationType:u}},[E,h,x,S,O,H,u,j]);return Un(k!=null,`<Router basename="${E}"> is not able to match the URL "${h}${x}${S}" because it does not start with the basename, so the <Router> won't render anything.`),k==null?null:C.createElement(Ln.Provider,{value:y},C.createElement(Ki.Provider,{children:s,value:k}))}function Qy({children:r,location:s}){return Uy(ns(r),s)}function ns(r,s=[]){let d=[];return C.Children.forEach(r,(u,f)=>{if(!C.isValidElement(u))return;let p=[...s,f];if(u.type===C.Fragment){d.push.apply(d,ns(u.props.children,p));return}_e(u.type===Gt,`[${typeof u.type=="string"?u.type:u.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),_e(!u.props.index||!u.props.children,"An index route cannot have child routes.");let m={id:u.props.id||p.join("-"),caseSensitive:u.props.caseSensitive,element:u.props.element,Component:u.props.Component,index:u.props.index,path:u.props.path,middleware:u.props.middleware,loader:u.props.loader,action:u.props.action,hydrateFallbackElement:u.props.hydrateFallbackElement,HydrateFallback:u.props.HydrateFallback,errorElement:u.props.errorElement,ErrorBoundary:u.props.ErrorBoundary,hasErrorBoundary:u.props.hasErrorBoundary===!0||u.props.ErrorBoundary!=null||u.props.errorElement!=null,shouldRevalidate:u.props.shouldRevalidate,handle:u.props.handle,lazy:u.props.lazy};u.props.children&&(m.children=ns(u.props.children,p)),d.push(m)}),d}var vr="get",br="application/x-www-form-urlencoded";function Ar(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function Zy(r){return Ar(r)&&r.tagName.toLowerCase()==="button"}function Jy(r){return Ar(r)&&r.tagName.toLowerCase()==="form"}function Wy(r){return Ar(r)&&r.tagName.toLowerCase()==="input"}function $y(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function ev(r,s){return r.button===0&&(!s||s==="_self")&&!$y(r)}var mr=null;function nv(){if(mr===null)try{new FormData(document.createElement("form"),0),mr=!1}catch{mr=!0}return mr}var tv=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Wu(r){return r!=null&&!tv.has(r)?(Un(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${br}"`),null):r}function av(r,s){let d,u,f,p,m;if(Jy(r)){let E=r.getAttribute("action");u=E?dt(E,s):null,d=r.getAttribute("method")||vr,f=Wu(r.getAttribute("enctype"))||br,p=new FormData(r)}else if(Zy(r)||Wy(r)&&(r.type==="submit"||r.type==="image")){let E=r.form;if(E==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let y=r.getAttribute("formaction")||E.getAttribute("action");if(u=y?dt(y,s):null,d=r.getAttribute("formmethod")||E.getAttribute("method")||vr,f=Wu(r.getAttribute("formenctype"))||Wu(E.getAttribute("enctype"))||br,p=new FormData(E,r),!nv()){let{name:h,type:x,value:S}=r;if(x==="image"){let O=h?`${h}.`:"";p.append(`${O}x`,"0"),p.append(`${O}y`,"0")}else h&&p.append(h,S)}}else{if(Ar(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');d=vr,u=null,f=br,m=r}return p&&f==="text/plain"&&(m=p,p=void 0),{action:u,method:d.toLowerCase(),encType:f,formData:p,body:m}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function cs(r,s){if(r===!1||r===null||typeof r>"u")throw new Error(s)}function lh(r,s,d,u){let f=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return d?f.pathname.endsWith("/")?f.pathname=`${f.pathname}_.${u}`:f.pathname=`${f.pathname}.${u}`:f.pathname==="/"?f.pathname=`_root.${u}`:s&&dt(f.pathname,s)==="/"?f.pathname=`${Cr(s)}/_root.${u}`:f.pathname=`${Cr(f.pathname)}.${u}`,f}async function iv(r,s){if(r.id in s)return s[r.id];try{let d=await import(r.module);return s[r.id]=d,d}catch(d){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(d),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function lv(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function rv(r,s,d){let u=await Promise.all(r.map(async f=>{let p=s.routes[f.route.id];if(p){let m=await iv(p,d);return m.links?m.links():[]}return[]}));return cv(u.flat(1).filter(lv).filter(f=>f.rel==="stylesheet"||f.rel==="preload").map(f=>f.rel==="stylesheet"?{...f,rel:"prefetch",as:"style"}:{...f,rel:"prefetch"}))}function Of(r,s,d,u,f,p){let m=(y,h)=>d[h]?y.route.id!==d[h].route.id:!0,E=(y,h)=>{var x;return d[h].pathname!==y.pathname||((x=d[h].route.path)==null?void 0:x.endsWith("*"))&&d[h].params["*"]!==y.params["*"]};return p==="assets"?s.filter((y,h)=>m(y,h)||E(y,h)):p==="data"?s.filter((y,h)=>{var S;let x=u.routes[y.route.id];if(!x||!x.hasLoader)return!1;if(m(y,h)||E(y,h))return!0;if(y.route.shouldRevalidate){let O=y.route.shouldRevalidate({currentUrl:new URL(f.pathname+f.search+f.hash,window.origin),currentParams:((S=d[0])==null?void 0:S.params)||{},nextUrl:new URL(r,window.origin),nextParams:y.params,defaultShouldRevalidate:!0});if(typeof O=="boolean")return O}return!0}):[]}function ov(r,s,{includeHydrateFallback:d}={}){return uv(r.map(u=>{let f=s.routes[u.route.id];if(!f)return[];let p=[f.module];return f.clientActionModule&&(p=p.concat(f.clientActionModule)),f.clientLoaderModule&&(p=p.concat(f.clientLoaderModule)),d&&f.hydrateFallbackModule&&(p=p.concat(f.hydrateFallbackModule)),f.imports&&(p=p.concat(f.imports)),p}).flat(1))}function uv(r){return[...new Set(r)]}function sv(r){let s={},d=Object.keys(r).sort();for(let u of d)s[u]=r[u];return s}function cv(r,s){let d=new Set;return new Set(s),r.reduce((u,f)=>{let p=JSON.stringify(sv(f));return d.has(p)||(d.add(p),u.push({key:p,link:f})),u},[])}function ds(){let r=C.useContext(Za);return cs(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function dv(){let r=C.useContext(Er);return cs(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var ps=C.createContext(void 0);ps.displayName="FrameworkContext";function fs(){let r=C.useContext(ps);return cs(r,"You must render this element inside a <HydratedRouter> element"),r}function pv(r,s){let d=C.useContext(ps),[u,f]=C.useState(!1),[p,m]=C.useState(!1),{onFocus:E,onBlur:y,onMouseEnter:h,onMouseLeave:x,onTouchStart:S}=s,O=C.useRef(null);C.useEffect(()=>{if(r==="render"&&m(!0),r==="viewport"){let k=R=>{R.forEach(I=>{m(I.isIntersecting)})},G=new IntersectionObserver(k,{threshold:.5});return O.current&&G.observe(O.current),()=>{G.disconnect()}}},[r]),C.useEffect(()=>{if(u){let k=setTimeout(()=>{m(!0)},100);return()=>{clearTimeout(k)}}},[u]);let H=()=>{f(!0)},j=()=>{f(!1),m(!1)};return d?r!=="intent"?[p,O,{}]:[p,O,{onFocus:Yi(E,H),onBlur:Yi(y,j),onMouseEnter:Yi(h,H),onMouseLeave:Yi(x,j),onTouchStart:Yi(S,H)}]:[!1,O,{}]}function Yi(r,s){return d=>{r&&r(d),d.defaultPrevented||s(d)}}function fv({page:r,...s}){let d=_y(),{router:u}=ds(),f=C.useMemo(()=>If(u.routes,r,u.basename),[u.routes,r,u.basename]);return f?d?C.createElement(mv,{page:r,matches:f,...s}):C.createElement(gv,{page:r,matches:f,...s}):null}function hv(r){let{manifest:s,routeModules:d}=fs(),[u,f]=C.useState([]);return C.useEffect(()=>{let p=!1;return rv(r,s,d).then(m=>{p||f(m)}),()=>{p=!0}},[r,s,d]),u}function mv({page:r,matches:s,...d}){let u=qn(),{future:f}=fs(),{basename:p}=ds(),m=C.useMemo(()=>{if(r===u.pathname+u.search+u.hash)return[];let E=lh(r,p,f.unstable_trailingSlashAwareDataRequests,"rsc"),y=!1,h=[];for(let x of s)typeof x.route.shouldRevalidate=="function"?y=!0:h.push(x.route.id);return y&&h.length>0&&E.searchParams.set("_routes",h.join(",")),[E.pathname+E.search]},[p,f.unstable_trailingSlashAwareDataRequests,r,u,s]);return C.createElement(C.Fragment,null,m.map(E=>C.createElement("link",{key:E,rel:"prefetch",as:"fetch",href:E,...d})))}function gv({page:r,matches:s,...d}){let u=qn(),{future:f,manifest:p,routeModules:m}=fs(),{basename:E}=ds(),{loaderData:y,matches:h}=dv(),x=C.useMemo(()=>Of(r,s,h,p,u,"data"),[r,s,h,p,u]),S=C.useMemo(()=>Of(r,s,h,p,u,"assets"),[r,s,h,p,u]),O=C.useMemo(()=>{if(r===u.pathname+u.search+u.hash)return[];let k=new Set,G=!1;if(s.forEach(I=>{var ee;let F=p.routes[I.route.id];!F||!F.hasLoader||(!x.some(Q=>Q.route.id===I.route.id)&&I.route.id in y&&((ee=m[I.route.id])!=null&&ee.shouldRevalidate)||F.hasClientLoader?G=!0:k.add(I.route.id))}),k.size===0)return[];let R=lh(r,E,f.unstable_trailingSlashAwareDataRequests,"data");return G&&k.size>0&&R.searchParams.set("_routes",s.filter(I=>k.has(I.route.id)).map(I=>I.route.id).join(",")),[R.pathname+R.search]},[E,f.unstable_trailingSlashAwareDataRequests,y,u,p,x,s,r,m]),H=C.useMemo(()=>ov(S,p),[S,p]),j=hv(S);return C.createElement(C.Fragment,null,O.map(k=>C.createElement("link",{key:k,rel:"prefetch",as:"fetch",href:k,...d})),H.map(k=>C.createElement("link",{key:k,rel:"modulepreload",href:k,...d})),j.map(({key:k,link:G})=>C.createElement("link",{key:k,nonce:d.nonce,...G,crossOrigin:G.crossOrigin??d.crossOrigin})))}function yv(...r){return s=>{r.forEach(d=>{typeof d=="function"?d(s):d!=null&&(d.current=s)})}}var vv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{vv&&(window.__reactRouterVersion="7.15.1")}catch{}function bv({basename:r,children:s,useTransitions:d,window:u}){let f=C.useRef();f.current==null&&(f.current=Wg({window:u,v5Compat:!0}));let p=f.current,[m,E]=C.useState({action:p.action,location:p.location}),y=C.useCallback(h=>{d===!1?E(h):C.startTransition(()=>E(h))},[d]);return C.useLayoutEffect(()=>p.listen(y),[p,y]),C.createElement(Ky,{basename:r,children:s,location:m.location,navigationType:m.action,navigator:p,useTransitions:d})}var rh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oh=C.forwardRef(function({onClick:s,discover:d="render",prefetch:u="none",relative:f,reloadDocument:p,replace:m,mask:E,state:y,target:h,to:x,preventScrollReset:S,viewTransition:O,defaultShouldRevalidate:H,...j},k){let{basename:G,navigator:R,useTransitions:I}=C.useContext(Ln),F=typeof x=="string"&&rh.test(x),ee=Kf(x,G);x=ee.to;let Q=By(x,{relative:f}),he=qn(),W=null;if(E){let Be=rs(E,[],he.mask?he.mask.pathname:"/",!0);G!=="/"&&(Be.pathname=Be.pathname==="/"?G:On([G,Be.pathname])),W=R.createHref(Be)}let[Re,Ye,kn]=pv(u,j),yn=Ev(x,{replace:m,mask:E,state:y,target:h,preventScrollReset:S,relative:f,viewTransition:O,defaultShouldRevalidate:H,useTransitions:I});function Xe(Be){s&&s(Be),Be.defaultPrevented||yn(Be)}let zn=!(ee.isExternal||p),vn=C.createElement("a",{...j,...kn,href:(zn?W:void 0)||ee.absoluteURL||Q,onClick:zn?Xe:s,ref:yv(k,Ye),target:h,"data-discover":!F&&d==="render"?"true":void 0});return Re&&!F?C.createElement(C.Fragment,null,vn,C.createElement(fv,{page:Q})):vn});oh.displayName="Link";var Sv=C.forwardRef(function({"aria-current":s="page",caseSensitive:d=!1,className:u="",end:f=!1,style:p,to:m,viewTransition:E,children:y,...h},x){let S=Zi(m,{relative:h.relative}),O=qn(),H=C.useContext(Er),{navigator:j,basename:k}=C.useContext(Ln),G=H!=null&&Dv(S)&&E===!0,R=j.encodeLocation?j.encodeLocation(S).pathname:S.pathname,I=O.pathname,F=H&&H.navigation&&H.navigation.location?H.navigation.location.pathname:null;d||(I=I.toLowerCase(),F=F?F.toLowerCase():null,R=R.toLowerCase()),F&&k&&(F=dt(F,k)||F);const ee=R!=="/"&&R.endsWith("/")?R.length-1:R.length;let Q=I===R||!f&&I.startsWith(R)&&I.charAt(ee)==="/",he=F!=null&&(F===R||!f&&F.startsWith(R)&&F.charAt(R.length)==="/"),W={isActive:Q,isPending:he,isTransitioning:G},Re=Q?s:void 0,Ye;typeof u=="function"?Ye=u(W):Ye=[u,Q?"active":null,he?"pending":null,G?"transitioning":null].filter(Boolean).join(" ");let kn=typeof p=="function"?p(W):p;return C.createElement(oh,{...h,"aria-current":Re,className:Ye,ref:x,style:kn,to:m,viewTransition:E},typeof y=="function"?y(W):y)});Sv.displayName="NavLink";var Cv=C.forwardRef(({discover:r="render",fetcherKey:s,navigate:d,reloadDocument:u,replace:f,state:p,method:m=vr,action:E,onSubmit:y,relative:h,preventScrollReset:x,viewTransition:S,defaultShouldRevalidate:O,...H},j)=>{let{useTransitions:k}=C.useContext(Ln),G=_v(),R=wv(E,{relative:h}),I=m.toLowerCase()==="get"?"get":"post",F=typeof E=="string"&&rh.test(E),ee=Q=>{if(y&&y(Q),Q.defaultPrevented)return;Q.preventDefault();let he=Q.nativeEvent.submitter,W=(he==null?void 0:he.getAttribute("formmethod"))||m,Re=()=>G(he||Q.currentTarget,{fetcherKey:s,method:W,navigate:d,replace:f,state:p,relative:h,preventScrollReset:x,viewTransition:S,defaultShouldRevalidate:O});k&&d!==!1?C.startTransition(()=>Re()):Re()};return C.createElement("form",{ref:j,method:I,action:R,onSubmit:u?y:ee,...H,"data-discover":!F&&r==="render"?"true":void 0})});Cv.displayName="Form";function xv(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function uh(r){let s=C.useContext(Za);return _e(s,xv(r)),s}function Ev(r,{target:s,replace:d,mask:u,state:f,preventScrollReset:p,relative:m,viewTransition:E,defaultShouldRevalidate:y,useTransitions:h}={}){let x=nh(),S=qn(),O=Zi(r,{relative:m});return C.useCallback(H=>{if(ev(H,s)){H.preventDefault();let j=d!==void 0?d:Xi(S)===Xi(O),k=()=>x(r,{replace:j,mask:u,state:f,preventScrollReset:p,relative:m,viewTransition:E,defaultShouldRevalidate:y});h?C.startTransition(()=>k()):k()}},[S,x,O,d,u,f,s,r,p,m,E,y,h])}var Av=0,Tv=()=>`__${String(++Av)}__`;function _v(){let{router:r}=uh("useSubmit"),{basename:s}=C.useContext(Ln),d=Py(),u=r.fetch,f=r.navigate;return C.useCallback(async(p,m={})=>{let{action:E,method:y,encType:h,formData:x,body:S}=av(p,s);if(m.navigate===!1){let O=m.fetcherKey||Tv();await u(O,d,m.action||E,{defaultShouldRevalidate:m.defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:x,body:S,formMethod:m.method||y,formEncType:m.encType||h,flushSync:m.flushSync})}else await f(m.action||E,{defaultShouldRevalidate:m.defaultShouldRevalidate,preventScrollReset:m.preventScrollReset,formData:x,body:S,formMethod:m.method||y,formEncType:m.encType||h,replace:m.replace,state:m.state,fromRouteId:d,flushSync:m.flushSync,viewTransition:m.viewTransition})},[u,f,s,d])}function wv(r,{relative:s}={}){let{basename:d}=C.useContext(Ln),u=C.useContext(In);_e(u,"useFormAction must be used inside a RouteContext");let[f]=u.matches.slice(-1),p={...Zi(r||".",{relative:s})},m=qn();if(r==null){p.search=m.search;let E=new URLSearchParams(p.search),y=E.getAll("index");if(y.some(x=>x==="")){E.delete("index"),y.filter(S=>S).forEach(S=>E.append("index",S));let x=E.toString();p.search=x?`?${x}`:""}}return(!r||r===".")&&f.route.index&&(p.search=p.search?p.search.replace(/^\?/,"?index&"):"?index"),d!=="/"&&(p.pathname=p.pathname==="/"?d:On([d,p.pathname])),Xi(p)}function Dv(r,{relative:s}={}){let d=C.useContext(Jf);_e(d!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=uh("useViewTransitionState"),f=Zi(r,{relative:s});if(!d.isTransitioning)return!1;let p=dt(d.currentLocation.pathname,u)||d.currentLocation.pathname,m=dt(d.nextLocation.pathname,u)||d.nextLocation.pathname;return Sr(f.pathname,m)!=null||Sr(f.pathname,p)!=null}var Rv=Vf();const Lv="animal-btn-QoKe1",Mv="animal-btn-small-6Srsd",Nv="animal-btn-middle-zEXqv",Bv="animal-btn-large-k9IvA",Ov="animal-btn-default-L7yE6",Uv="animal-btn-primary-9tMG9",kv="animal-btn-dashed-wzZ-i",zv="animal-btn-text-Tope4",jv="animal-btn-link-pURnf",Gv="animal-btn-danger-zQ4kF",Hv="animal-btn-ghost-Ykty4",Vv="animal-btn-block-MC4pp",Iv="animal-btn-loading-PfXLM",qv="animal-animal-btn-loading-Rf1hg",Pv="animal-btn-icon-P5CS9",zt={btn:Lv,"btn-small":"animal-btn-small-6Srsd",btnSmall:Mv,"btn-middle":"animal-btn-middle-zEXqv",btnMiddle:Nv,"btn-large":"animal-btn-large-k9IvA",btnLarge:Bv,"btn-default":"animal-btn-default-L7yE6",btnDefault:Ov,"btn-primary":"animal-btn-primary-9tMG9",btnPrimary:Uv,"btn-dashed":"animal-btn-dashed-wzZ-i",btnDashed:kv,"btn-text":"animal-btn-text-Tope4",btnText:zv,"btn-link":"animal-btn-link-pURnf",btnLink:jv,"btn-danger":"animal-btn-danger-zQ4kF",btnDanger:Gv,"btn-ghost":"animal-btn-ghost-Ykty4",btnGhost:Hv,"btn-block":"animal-btn-block-MC4pp",btnBlock:Vv,"btn-loading":"animal-btn-loading-PfXLM",btnLoading:Iv,"animal-btn-loading":"animal-animal-btn-loading-Rf1hg",animalBtnLoading:qv,"btn-icon":"animal-btn-icon-P5CS9",btnIcon:Pv},Ht=({type:r="default",size:s="middle",danger:d=!1,ghost:u=!1,block:f=!1,loading:p=!1,disabled:m=!1,icon:E,htmlType:y="button",children:h,className:x,...S})=>{const O=[zt.btn,zt[`btn-${r}`],zt[`btn-${s}`],d&&zt["btn-danger"],u&&zt["btn-ghost"],f&&zt["btn-block"],p&&zt["btn-loading"],x].filter(Boolean).join(" ");return L.jsxs("button",{type:y,className:O,disabled:m,...S,children:[E&&!p&&L.jsx("span",{className:zt["btn-icon"],children:E}),h&&L.jsx("span",{children:h})]})};Ht.displayName="Button";const Fv="animal-wrapper-IRrhj",Yv="animal-wrapper-disabled-MWwHK",Xv="animal-input-12WUn",Kv="animal-wrapper-no-shadow-WP9Gk",Qv="animal-wrapper-small-mWvja",Zv="animal-wrapper-middle-zXqMR",Jv="animal-wrapper-large-RrYM4",Wv="animal-wrapper-error-W-VRo",$v="animal-wrapper-warning-miO7A",e0="animal-prefix-g8f1R",n0="animal-suffix-o7ywP",t0="animal-clear-HuR2N",ut={wrapper:Fv,"wrapper-disabled":"animal-wrapper-disabled-MWwHK",wrapperDisabled:Yv,input:Xv,"wrapper-no-shadow":"animal-wrapper-no-shadow-WP9Gk",wrapperNoShadow:Kv,"wrapper-small":"animal-wrapper-small-mWvja",wrapperSmall:Qv,"wrapper-middle":"animal-wrapper-middle-zXqMR",wrapperMiddle:Zv,"wrapper-large":"animal-wrapper-large-RrYM4",wrapperLarge:Jv,"wrapper-error":"animal-wrapper-error-W-VRo",wrapperError:Wv,"wrapper-warning":"animal-wrapper-warning-miO7A",wrapperWarning:$v,prefix:e0,suffix:n0,clear:t0},a0=({size:r="middle",prefix:s,suffix:d,allowClear:u=!1,status:f,shadow:p=!1,disabled:m=!1,className:E,value:y,defaultValue:h,onChange:x,onClear:S,...O})=>{const[H,j]=C.useState(h??""),k=y!==void 0,G=k?y:H,R=C.useCallback(ee=>{k||j(ee.target.value),x==null||x(ee)},[k,x]),I=C.useCallback(()=>{k||j(""),S==null||S();const ee=new Event("input",{bubbles:!0}),Q={value:""};x==null||x({target:Q,currentTarget:Q,nativeEvent:ee})},[k,x,S]),F=[ut.wrapper,ut[`wrapper-${r}`],f&&ut[`wrapper-${f}`],m&&ut["wrapper-disabled"],!p&&ut["wrapper-no-shadow"],E].filter(Boolean).join(" ");return L.jsxs("span",{className:F,children:[s&&L.jsx("span",{className:ut.prefix,children:s}),L.jsx("input",{className:ut.input,disabled:m,value:G,onChange:R,...O}),u&&G&&!m&&L.jsx("span",{className:ut.clear,onClick:I,role:"button",tabIndex:-1,children:"×"}),d&&L.jsx("span",{className:ut.suffix,children:d})]})};a0.displayName="Input";const i0="animal-switch-disabled-U5tjL",l0="animal-switch-checked-6HKL4",r0="animal-switch-small-jkWtD",o0="animal-handle-KgZ7M",u0="animal-inner-5x97M",s0="animal-switch-loading--3JYL",c0="animal-spinner-QK4sP",d0="animal-animal-spin-P6YYa",jt={switch:"animal-switch-NQPLj","switch-disabled":"animal-switch-disabled-U5tjL",switchDisabled:i0,"switch-checked":"animal-switch-checked-6HKL4",switchChecked:l0,"switch-small":"animal-switch-small-jkWtD",switchSmall:r0,handle:o0,inner:u0,"switch-loading":"animal-switch-loading--3JYL",switchLoading:s0,spinner:c0,"animal-spin":"animal-animal-spin-P6YYa",animalSpin:d0},ts=({checked:r,defaultChecked:s=!1,size:d="default",disabled:u=!1,loading:f=!1,checkedChildren:p,unCheckedChildren:m,onChange:E,className:y})=>{const[h,x]=C.useState(s),S=r!==void 0,O=S?r:h,H=C.useCallback(()=>{if(u||f)return;const k=!O;S||x(k),E==null||E(k)},[u,f,O,S,E]),j=[jt.switch,jt[`switch-${d}`],O&&jt["switch-checked"],u&&jt["switch-disabled"],f&&jt["switch-loading"],y].filter(Boolean).join(" ");return L.jsxs("button",{type:"button",role:"switch","aria-checked":O,className:j,onClick:H,disabled:u,children:[L.jsx("span",{className:jt.handle,children:f&&L.jsx("span",{className:jt.spinner})}),L.jsx("span",{className:jt.inner,children:O?p:m})]})};ts.displayName="Switch";const hs=({children:r,className:s,style:d,forceAll:u=!0})=>{const f=["animal-cursor",u?"animal-cursor--force":"animal-cursor--scoped",s].filter(Boolean).join(" ");return L.jsx("div",{className:f,style:d,children:r})};hs.displayName="Cursor";const as=r=>r==null||typeof r=="boolean"?0:typeof r=="string"||typeof r=="number"?String(r).length:Array.isArray(r)?r.reduce((s,d)=>s+as(d),0):ct.isValidElement(r)?as(r.props.children):0,is=(r,s,d="tw")=>{if(s.stopped||r==null||typeof r=="boolean")return null;if(typeof r=="string"||typeof r=="number"){const u=String(r);if(s.remaining>=u.length)return s.remaining-=u.length,u;const f=u.slice(0,s.remaining);return s.remaining=0,s.stopped=!0,f}if(Array.isArray(r))return r.map((u,f)=>L.jsx(ct.Fragment,{children:is(u,s,`${d}-${f}`)},`${d}-${f}`));if(ct.isValidElement(r)){const u=r.props,f=is(u.children,s,d);return ct.cloneElement(r,void 0,f)}return null},sh=({children:r,speed:s=90,trigger:d,autoPlay:u=!0,onDone:f})=>{const p=C.useMemo(()=>as(r),[r]),[m,E]=C.useState(u?0:p),y=C.useRef(null);return C.useEffect(()=>{if(y.current&&window.clearInterval(y.current),!u){E(p);return}if(E(0),p!==0)return y.current=window.setInterval(()=>{E(h=>h>=p?(y.current&&window.clearInterval(y.current),h):h+1)},s),()=>{y.current&&window.clearInterval(y.current)}},[p,s,d,u]),C.useEffect(()=>{p>0&&m>=p&&(f==null||f())},[m,p]),L.jsx(L.Fragment,{children:is(r,{remaining:m,stopped:!1})})};sh.displayName="Typewriter";const p0="animal-mask-hAWeP",f0="animal-modal-d0zyM",h0="animal-modalClipped-7IuAw",m0="animal-header-udOSi",g0="animal-title-s6pv3",y0="animal-body--aiyx",v0="animal-footer-9Ib-a",ra={mask:p0,modal:f0,modalClipped:h0,header:m0,title:g0,body:y0,footer:v0},b0=()=>L.jsx("svg",{style:{position:"absolute",width:0,height:0},"aria-hidden":!0,children:L.jsx("clipPath",{id:"animal-modal-clip",clipPathUnits:"objectBoundingBox",children:L.jsx("path",{d:"M0.501,0.005 L0.501,0.005 L0.523,0.005 L0.549,0.006 C0.704,0.01,0.796,0.017,0.825,0.027 L0.827,0.028 C0.872,0.045,0.939,0.044,0.978,0.17 C1,0.254,1,0.365,0.99,0.505 L0.988,0.513 C0.979,0.558,0.971,0.598,0.965,0.633 C0.956,0.689,0.979,0.77,0.964,0.865 C0.953,0.928,0.921,0.966,0.869,0.979 C0.821,0.986,0.773,0.992,0.726,0.995 L0.712,0.996 L0.694,0.997 C0.648,1,0.586,1,0.507,1 L0.501,1 L0.464,1 C0.385,1,0.325,0.998,0.283,0.995 C0.234,0.992,0.184,0.987,0.133,0.979 C0.081,0.966,0.05,0.928,0.039,0.865 C0.023,0.77,0.047,0.689,0.037,0.633 C0.031,0.595,0.023,0.552,0.013,0.505 C-0.006,0.365,-0.002,0.254,0.024,0.17 C0.064,0.045,0.13,0.045,0.174,0.028 L0.175,0.028 C0.204,0.017,0.303,0.009,0.474,0.005 L0.501,0.005"})})}),S0=({open:r,title:s,width:d=520,maskClosable:u=!0,footer:f,onClose:p,onOk:m,children:E,className:y,typeSpeed:h=80,typewriter:x=!0})=>{const[S,O]=C.useState(0);C.useEffect(()=>{r&&O(R=>R+1)},[r]),C.useEffect(()=>{if(!r)return;const R=I=>{I.key==="Escape"&&(p==null||p())};return document.addEventListener("keydown",R),()=>document.removeEventListener("keydown",R)},[r,p]),C.useEffect(()=>(r&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=""}),[r]);const H=C.useCallback(()=>{u&&(p==null||p())},[u,p]),j=C.useCallback(R=>{R.stopPropagation()},[]);if(!r)return null;const k=L.jsxs(L.Fragment,{children:[L.jsx(Ht,{type:"primary",onClick:p,children:"取消"}),L.jsx(Ht,{type:"primary",onClick:m,children:"确定"})]}),G=L.jsx(hs,{children:L.jsx("div",{className:ra.mask,onClick:H,children:L.jsxs("div",{className:[ra.modal,y].filter(Boolean).join(" "),style:{width:d},onClick:j,role:"dialog","aria-modal":"true",children:[L.jsx(b0,{}),L.jsxs("div",{className:ra.modalClipped,children:[s&&L.jsx("div",{className:ra.header,children:s&&L.jsx("div",{className:ra.title,children:s})}),L.jsx("div",{className:ra.body,children:x?L.jsx(sh,{speed:h,trigger:S,children:E}):E}),f!==null&&L.jsx("div",{className:ra.footer,children:f===void 0?k:f})]})]})})});return Rv.createPortal(G,document.body)};S0.displayName="Modal";const C0="animal-card-DJ515",x0="animal-card-title-PL-WB",E0="animal-card-dashed-fqnm1",A0="animal-card-app-pink-3Eo8d",T0="animal-card-purple-Gq7sR",_0="animal-card-app-blue-GHH1a",w0="animal-card-app-yellow-DWB-L",D0="animal-card-app-orange-V5yD7",R0="animal-card-app-teal-R5kFG",L0="animal-card-app-green-xlNUs",M0="animal-card-app-red-DzE0l",N0="animal-card-lime-green-KiJbe",B0="animal-card-yellow-green-4c-lF",O0="animal-card-brown-hLCrx",U0="animal-card-warm-peach-pink-RlSVo",gr={card:C0,"card-title":"animal-card-title-PL-WB",cardTitle:x0,"card-dashed":"animal-card-dashed-fqnm1",cardDashed:E0,"card-app-pink":"animal-card-app-pink-3Eo8d",cardAppPink:A0,"card-purple":"animal-card-purple-Gq7sR",cardPurple:T0,"card-app-blue":"animal-card-app-blue-GHH1a",cardAppBlue:_0,"card-app-yellow":"animal-card-app-yellow-DWB-L",cardAppYellow:w0,"card-app-orange":"animal-card-app-orange-V5yD7",cardAppOrange:D0,"card-app-teal":"animal-card-app-teal-R5kFG",cardAppTeal:R0,"card-app-green":"animal-card-app-green-xlNUs",cardAppGreen:L0,"card-app-red":"animal-card-app-red-DzE0l",cardAppRed:M0,"card-lime-green":"animal-card-lime-green-KiJbe",cardLimeGreen:N0,"card-yellow-green":"animal-card-yellow-green-4c-lF",cardYellowGreen:B0,"card-brown":"animal-card-brown-hLCrx",cardBrown:O0,"card-warm-peach-pink":"animal-card-warm-peach-pink-RlSVo",cardWarmPeachPink:U0},k0=({type:r="default",color:s="default",children:d,className:u,style:f,...p})=>{const m=[gr.card,r==="title"&&gr["card-title"],r==="dashed"&&gr["card-dashed"],s!=="default"&&gr[`card-${s}`],u].filter(Boolean).join(" ");return L.jsx("div",{className:m,style:f,...p,children:d})};k0.displayName="Card";const z0="animal-footer-5DMOR",j0="animal-tree-KZ8hX",Uf={footer:z0,tree:j0},ch=({type:r="tree",className:s,style:d})=>{const u=[Uf.footer,Uf[r],s].filter(Boolean).join(" ");return L.jsx("div",{className:u,style:d})};ch.displayName="Footer";const G0="animal-faqCard-5jlOE",H0="animal-disabled-9DAjm",V0="animal-questionHeader-iqP87",I0="animal-questionIcon-xRkdp",q0="animal-expanded-a8Eze",P0="animal-questionText-jVpUv",F0="animal-leafDecoration-RoK4H",Y0="animal-answerWrapper-tzFtx",X0="animal-answerContent-ppsk-",st={faqCard:G0,disabled:H0,questionHeader:V0,questionIcon:I0,expanded:q0,questionText:P0,leafDecoration:F0,answerWrapper:Y0,answerContent:X0},K0=({question:r,answer:s,defaultExpanded:d=!1,disabled:u=!1,className:f,style:p})=>{const[m,E]=C.useState(d),y=()=>{u||E(!m)},h=[st.faqCard,m&&st.expanded,u&&st.disabled,f].filter(Boolean).join(" ");return L.jsxs("div",{className:h,style:p,children:[L.jsxs("button",{className:st.questionHeader,onClick:y,disabled:u,"aria-expanded":m,children:[L.jsx("span",{className:st.questionIcon,children:m?"−":"+"}),L.jsx("span",{className:st.questionText,children:r}),L.jsx("span",{className:st.leafDecoration,children:L.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",children:L.jsx("path",{fill:"currentColor",d:"M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"})})})]}),L.jsx("div",{className:st.answerWrapper,children:L.jsx("div",{className:st.answerContent,children:s})})]})};K0.displayName="Collapse";const Q0="animal-acDatetime-hVKh7",Z0="animal-acDate-rhO3k",J0="animal-acWeekday-bxDHR",W0="animal-acMonthday-1jUmX",$0="animal-acTime-S-twb",eb="animal-acColon-g4vuJ",Ka={acDatetime:Q0,acDate:Z0,acWeekday:J0,acMonthday:W0,acTime:$0,acColon:eb},nb=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],tb=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],ab=({className:r})=>{const[s,d]=C.useState(new Date);return C.useEffect(()=>{const u=setInterval(()=>d(new Date),1e3);return()=>clearInterval(u)},[]),L.jsxs("div",{className:`${Ka.acDatetime} ${r||""}`,children:[L.jsxs("div",{className:Ka.acDate,children:[L.jsx("span",{className:Ka.acWeekday,children:nb[s.getDay()]}),L.jsxs("span",{className:Ka.acMonthday,children:[tb[s.getMonth()]," ",s.getDate()]})]}),L.jsxs("div",{className:Ka.acTime,children:[s.getHours().toString().padStart(2,"0"),L.jsx("span",{className:Ka.acColon,children:":"}),s.getMinutes().toString().padStart(2,"0")]})]})};ab.displayName="Time";const ib="animal-divider-ZBhpE",lb="animal-line-teal-Z80hb",rb="animal-line-white-VDY1E",ob="animal-line-yellow-ifvJz",ub="animal-wave-yellow-AO-io",kf={divider:ib,"line-teal":"animal-line-teal-Z80hb",lineTeal:lb,"line-white":"animal-line-white-VDY1E",lineWhite:rb,"line-yellow":"animal-line-yellow-ifvJz",lineYellow:ob,"wave-yellow":"animal-wave-yellow-AO-io",waveYellow:ub},sb=({type:r="line-brown",className:s,style:d})=>{const u=[kf.divider,kf[r],s].filter(Boolean).join(" ");return L.jsx("div",{className:u,style:d})};sb.displayName="Divider";const cb="animal-wrapper-pbOTq",db="animal-trigger-2-Ahh",pb="animal-open-867xo",fb="animal-value-623RB",hb="animal-placeholder-vpC8E",mb="animal-arrow-xNbxA",gb="animal-dropdown-0l6jF",yb="animal-option-GEkLI",vb="animal-active-jtSpt",bb="animal-hovered-N-cco",Sb="animal-pillBar-O9cTb",Cb="animal-optionDot-FQtyw",xb="animal-disabled-Oy12C",gn={wrapper:cb,trigger:db,open:pb,value:fb,placeholder:hb,arrow:mb,dropdown:gb,option:yb,active:vb,hovered:bb,pillBar:Sb,optionDot:Cb,disabled:xb},Eb=({options:r,value:s,onChange:d,placeholder:u="请选择",disabled:f=!1})=>{var G;const[p,m]=C.useState(!1),[E,y]=C.useState(null),[h,x]=C.useState({}),[S,O]=C.useState(!1),H=C.useRef(null),j=((G=r.find(R=>R.key===s))==null?void 0:G.label)||u;C.useEffect(()=>{const R=I=>{H.current&&!H.current.contains(I.target)&&(m(!1),O(!1))};return p&&document.addEventListener("mousedown",R),()=>document.removeEventListener("mousedown",R)},[p]),C.useEffect(()=>{if(p&&H.current){const R=H.current.getBoundingClientRect(),I=window.innerWidth,F=window.innerHeight,ee=r.length*44+24,Q={position:"absolute"};R.right+200>I?(Q.right="100%",Q.marginRight="6px",Q.left="auto"):(Q.left="100%",Q.marginLeft="6px",Q.right="auto");const he=F-R.bottom,W=R.top;he<ee&&W>he?(Q.top="auto",Q.bottom="100%",Q.marginBottom="6px",delete Q.transform):he<ee||R.top<ee?(Q.top="100%",Q.marginTop="6px",Q.bottom="auto",delete Q.transform):(Q.top="50%",Q.transform="translateY(-50%)",Q.bottom="auto"),x(Q),requestAnimationFrame(()=>{O(!0)})}else p||O(!1)},[p,r.length]);const k=R=>{d(R),m(!1),O(!1)};return L.jsxs("div",{ref:H,className:`${gn.wrapper} ${f?gn.disabled:""}`,children:[L.jsxs("div",{className:`${gn.trigger} ${p?gn.open:""}`,onClick:()=>!f&&m(!p),children:[L.jsx("span",{className:s?gn.value:gn.placeholder,children:j}),L.jsx("span",{className:gn.arrow,children:L.jsx("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",children:L.jsx("path",{d:"M3 4.5L6 7.5L9 4.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})})]}),p&&S&&L.jsx("div",{className:gn.dropdown,style:h,children:r.map(R=>L.jsxs("div",{className:`${gn.option} ${s===R.key?gn.active:""} ${E===R.key?gn.hovered:""}`,onClick:()=>k(R.key),onMouseEnter:()=>y(R.key),onMouseLeave:()=>y(null),children:[L.jsx("span",{className:gn.optionDot}),R.label,s===R.key&&L.jsx("div",{className:gn.pillBar})]},R.key))})]})};Eb.displayName="Select";var zf={exports:{}},jf;function Ab(){return jf||(jf=1,(function(r){(function(){var s={}.hasOwnProperty;function d(){for(var p="",m=0;m<arguments.length;m++){var E=arguments[m];E&&(p=f(p,u(E)))}return p}function u(p){if(typeof p=="string"||typeof p=="number")return p;if(typeof p!="object")return"";if(Array.isArray(p))return d.apply(null,p);if(p.toString!==Object.prototype.toString&&!p.toString.toString().includes("[native code]"))return p.toString();var m="";for(var E in p)s.call(p,E)&&p[E]&&(m=f(m,E));return m}function f(p,m){return m?p?p+" "+m:p+m:p}r.exports?(d.default=d,r.exports=d):window.classNames=d})()})(zf)),zf.exports}Ab();const Tb="animal-wrapper-LJBly",_b="animal-scrollable-5Wnhh",wb="animal-table-Os4fM",Db="animal-thead-2ge5M",Rb="animal-headerRow-sAsWX",Lb="animal-headerCell-LhL6h",Mb="animal-tbody-3RGsp",Nb="animal-row-iDOMw",Bb="animal-cell-4PAU2",Ob="animal-striped-8Ih-N",Ub="animal-emptyCell--stiv",kb="animal-emptyContent-JrC1j",zb="animal-emptyIcon-SNcRm",jb="animal-loading-mPt0l",Gb="animal-loadingOverlay-PMW6Z",Hb="animal-loadingSpinner-KZEsv",Qe={wrapper:Tb,scrollable:_b,table:wb,thead:Db,headerRow:Rb,headerCell:Lb,tbody:Mb,row:Nb,cell:Bb,striped:Ob,emptyCell:Ub,emptyContent:kb,emptyIcon:zb,loading:jb,loadingOverlay:Gb,loadingSpinner:Hb},Vb=({columns:r=[],dataSource:s=[],rowKey:d="key",striped:u=!0,showHeader:f=!0,rowClassName:p,onRow:m,loading:E=!1,emptyText:y="暂无数据",scroll:h,className:x,style:S})=>{const O=(R,I)=>typeof d=="function"?d(R):R[d]||String(I),H=(R,I)=>{const F=[Qe.row];return u&&I%2===1&&F.push(Qe.striped),p&&(typeof p=="function"?F.push(p(R,I)):F.push(p)),F.join(" ")},j=(R,I,F)=>{const ee=R.dataIndex?I[R.dataIndex]:void 0;return R.render?R.render(ee,I,F):ee},k=[Qe.table,E&&Qe.loading,x].filter(Boolean).join(" "),G=[Qe.wrapper,h&&Qe.scrollable].filter(Boolean).join(" ");return L.jsxs("div",{className:G,style:S,children:[L.jsxs("table",{className:k,children:[f&&L.jsx("thead",{className:Qe.thead,children:L.jsx("tr",{className:Qe.headerRow,children:r.map((R,I)=>L.jsx("th",{className:Qe.headerCell,style:{width:R.width,textAlign:R.align||"left",...R.style},children:R.title},I))})}),L.jsx("tbody",{className:Qe.tbody,children:s.length===0?L.jsx("tr",{children:L.jsx("td",{colSpan:r.length,className:Qe.emptyCell,children:L.jsxs("div",{className:Qe.emptyContent,children:[L.jsx("svg",{className:Qe.emptyIcon,viewBox:"0 0 24 24",width:"48",height:"48",children:L.jsx("path",{fill:"currentColor",d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z"})}),L.jsx("span",{children:y})]})})}):s.map((R,I)=>L.jsx("tr",{className:H(R,I),...m==null?void 0:m(R,I),children:r.map((F,ee)=>L.jsx("td",{className:Qe.cell,style:{textAlign:F.align||"left",...F.style},children:j(F,R,I)},ee))},O(R,I)))})]}),E&&L.jsx("div",{className:Qe.loadingOverlay,children:L.jsx("div",{className:Qe.loadingSpinner,children:L.jsx("svg",{viewBox:"0 0 50 50",width:"40",height:"40",children:L.jsx("circle",{cx:"25",cy:"25",r:"20",fill:"none",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeDasharray:"31.4 31.4"})})})})]})};Vb.displayName="Table";const Ib="lwy",qb="😄",Pb="你好，我是 lwy",Fb="一名热爱Unity前端开发的程序员。喜欢探索新技术，用代码创造有趣的东西。工作之余喜欢读书、喝咖啡，看电影。",Yb=["读书","游戏","电影"],Xb="🐈",Kb="欢迎来到我的博客！",Qb="在这里记录技术学习与生活点滴 ...",Zb="Nice to meet you!",Jb="欢迎来到我的博客",Wb=`这里记录着我的技术探索和日常思考。
随意逛逛，希望能有所收获～`,$b="📬 订阅更新",e1="不想错过新文章？留下邮箱吧",n1="订阅成功！有新文章时会通知你。",t1="仅新文章",a1="周刊",i1=[{question:"这个博客是用什么搭建的？",answer:"使用 React 19 + TypeScript + Vite 构建，UI 组件库是 animal-island-ui，设计风格灵感来自动物森友会。"},{question:"博客多久更新一次？",answer:"我会在有新想法或学到新东西时更新博客，大概每月 1-2 篇文章。质量比频率更重要。"},{question:"可以转载文章吗？",answer:"欢迎转载，但请注明出处并附上原文链接。如果有任何疑问，可以通过邮件联系我。"}],l1="lwy'blog",r1="",o1="博客，游戏，Unity",u1="tree",s1="blog by lwy",c1={github:"https://github.com/2388450630lwy-coder",email:"2388450630lwy@gmail.com",weibo:"",bilibili:"https://space.bilibili.com/454159498?spm_id_from=333.1007.0.0"},d1=[{id:"default",name:"默认分类"},{id:"linux",name:"Linux"},{id:"unity",name:"Unity"},{id:"algorithm",name:"算法"},{id:"pattern",name:"设计模式"},{id:"insight",name:"心得"},{id:"tools",name:"Tools"}],p1={blogTitle:Ib,avatarEmoji:qb,authorName:Pb,authorBio:Fb,skillTags:Yb,logoEmoji:Xb,heroTypewriter:Kb,heroSubtitle:Qb,welcomeModalTitle:Zb,welcomeModalBodyTitle:Jb,welcomeModalDescription:Wb,subscribeTitle:$b,subscribeDescription:e1,subscribeSuccessMessage:n1,subscribeSwitchOffLabel:t1,subscribeSwitchOnLabel:a1,faqItems:i1,seoTitle:l1,seoDescription:r1,seoKeywords:o1,footerType:u1,footerCopyright:s1,social:c1,categories:d1},$u=p1,dh="lwyblog-site";function xr(){try{const r=localStorage.getItem(dh);if(!r)return{...$u};const s=JSON.parse(r);return{...$u,...s}}catch{return{...$u}}}function N1(r){localStorage.setItem(dh,JSON.stringify(r))}const Gf=[{label:"首页",path:"/"},{label:"分类",path:"/categories"},{label:"标签",path:"/tags"},{label:"归档",path:"/archive"}];function f1({dark:r,onThemeChange:s,onNavPreload:d}){const u=nh(),f=qn(),[p,m]=C.useState(!1),E=y=>y==="/"?f.pathname==="/":f.pathname.startsWith(y);return L.jsxs(L.Fragment,{children:[L.jsxs("header",{style:{position:"sticky",top:12,zIndex:50,display:"flex",justifyContent:"space-between",alignItems:"center",height:64,padding:"0 20px",marginBottom:24,maxWidth:960,width:"100%",margin:"0 auto 24px",background:r?"linear-gradient(135deg, #2e2e36 0%, #25252e 100%)":"linear-gradient(135deg, #fafafb 0%, #f4f4f7 100%)",border:r?"2px solid #3e3e4a":"2px solid #d4d4dc",borderRadius:20,boxShadow:r?"0 6px 20px -10px rgba(0, 0, 0, 0.4)":"0 6px 20px -10px rgba(140, 140, 165, 0.25)",color:r?"#e4e4ea":"#2a2a35"},children:[L.jsx("span",{style:{fontSize:20,fontWeight:800,cursor:"pointer"},onClick:()=>u("/"),children:xr().blogTitle}),L.jsxs("div",{className:"header-nav-desktop",style:{display:"flex",gap:2,alignItems:"center"},children:[Gf.map(y=>E(y.path)?L.jsx(Ht,{type:"primary",onClick:()=>{var h;y.path==="/"&&f.pathname==="/"?(h=document.getElementById("posts"))==null||h.scrollIntoView({behavior:"smooth"}):u(y.path)},children:y.label},y.path):L.jsx(Ht,{type:"text",onClick:()=>u(y.path),onMouseEnter:()=>d==null?void 0:d(y.path),children:y.label},y.path)),L.jsx(Ht,{type:"text",onClick:()=>u("/search"),children:"搜索"}),L.jsx(ts,{checked:r,onChange:s,checkedChildren:"🌙",unCheckedChildren:"☀️"})]}),L.jsx("button",{className:"header-mobile-btn",onClick:()=>m(!p),style:{display:"none",border:"none",background:"none",fontSize:22,cursor:"pointer",padding:4,color:r?"#e4e4ea":"#2a2a35",fontFamily:"inherit"},children:p?"✕":"☰"})]}),p&&L.jsx("div",{className:"header-mobile-menu",onClick:()=>m(!1),style:{position:"fixed",inset:0,zIndex:99,background:"rgba(0,0,0,0.3)"},children:L.jsxs("div",{onClick:y=>y.stopPropagation(),style:{position:"fixed",top:12,left:12,right:12,zIndex:100,padding:"20px 16px",borderRadius:20,background:r?"linear-gradient(135deg, #2e2e36 0%, #25252e 100%)":"linear-gradient(135deg, #fafafb 0%, #f4f4f7 100%)",border:r?"2px solid #3e3e4a":"2px solid #d4d4dc",boxShadow:r?"0 6px 20px -10px rgba(0, 0, 0, 0.4)":"0 6px 20px -10px rgba(140, 140, 165, 0.25)",display:"flex",flexDirection:"column",gap:4},children:[Gf.map(y=>L.jsx(Ht,{type:E(y.path)?"primary":"text",onClick:()=>{m(!1),u(y.path)},children:y.label},y.path)),L.jsx(Ht,{type:"text",onClick:()=>{m(!1),u("/search")},children:"搜索"}),L.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",padding:"8px 0"},children:L.jsx(ts,{checked:r,onChange:s,checkedChildren:"🌙",unCheckedChildren:"☀️"})})]})})]})}const ph="default",h1="默认分类",fh=[{id:"wp-1",tags:["Linux"],categoryId:"linux",title:"WordPress博客搭建",date:"2024-04-08",cover:"🐧",excerpt:"一、前言 大多数人都用过一些社交平台的博客，比如童年的QQ空间，然后就是微博.作为一名程序员之前用过CSDN发表过几篇文章，但是懂得都懂，这些平台的博客都不能自己去独立设置，所有想自己搭建个人博客，网上有很多开源的博客系统，最终选择了wor...",sections:[{heading:"一、前言",paragraphs:["大多数人都用过一些社交平台的博客，比如童年的`QQ空间`，然后就是微博.作为一名程序员之前用过`CSDN`发表过几篇文章，但是懂得都懂，这些平台的博客都不能自己去独立设置，所有想自己搭建个人博客，网上有很多开源的博客系统，最终选择了[wordPess](https://cn.wordpress.org/)博客系统搭建."]},{heading:"二、准备工作",paragraphs:["搭建博客前期的准备的内容:","-   服务器: 网上的云服务器有许多，如阿里云、腾讯云、华为云等等，个人喜欢阿里云一点，所有就在阿里云买了一个`ecs`的服务器.具体的购买服务器等操作可以去网上搜索一下.\n-   域名和`ICP`备案: 域名现在都比较便宜，几块钱就能租个一年(记得解析域名).但是买完域名后一定要在`ICP`备案（这些都可以在阿里云进行）,如果没有备案的话，配置域名的网页是无法访问的.\n-   开放端口：访问网页是需要开放端口号，博客搭建需要开放80，443,81端口，具体的开放端口在这也不描述啦."]},{heading:"3.1 拉取镜像",paragraphs:["1.  下载docker:\n    \n    ```shell\n    curl -fsSL https://get.docker.com | bash -s docker \n    ```\n    \n2.  拉取wordpress， mysql, nginxManager镜像\n    \n    ```shell\n    docker pull wordpress\n    docker pull mysql:5.7\n    docker pull jc21/nginx-proxy-manager\n    ```"]},{heading:"3.2 正式部署",paragraphs:["1.  创建数据库：",`\`\`\`shell
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
-   **自定义着色器**：如果使用自定义Shader，需确保其与当前渲染管线兼容。`,"* * *"]},{heading:"总结",paragraphs:["拖入物体时，Unity完成了**资源处理→实例化→纳入渲染管线**的完整流程。渲染过程则是每帧按**剔除、几何处理、光照计算、像素着色、后期处理**的顺序执行，最终将物体视觉化。理解这一流程有助于优化美术资源和渲染性能。"]}],takeaways:[]}],hh="lwyblog-posts";function oa(){const r={posts:[],deletedStaticIds:[]};try{const s=localStorage.getItem(hh);if(!s)return r;const d=JSON.parse(s);return!Array.isArray(d.posts)||!Array.isArray(d.deletedStaticIds)?r:d}catch{return r}}function ua(r){try{localStorage.setItem(hh,JSON.stringify(r))}catch{console.warn("localStorage quota exceeded, changes won't persist")}}function Hf(){return Date.now().toString(36)+Math.random().toString(36).slice(2,6)}const m1=[],g1=[{id:ph,name:h1},{id:"linux",name:"Linux"},{id:"unity",name:"Unity"},{id:"algorithm",name:"算法"},{id:"pattern",name:"设计模式"},{id:"insight",name:"心得"},{id:"tools",name:"Tools"}];function yr(r){r.categories||(r.categories=[]);let s=!1;const d=xr(),u=[...g1,...d.categories||[]],f=new Set,p=[];for(const m of u)f.has(m.id)||(p.push(m),f.add(m.id));for(const m of p)r.categories.some(E=>E.id===m.id)||(r.categories.push(m),s=!0);return s&&ua(r),r.categories}function y1(r){const s=[...r.posts],d=new Set(r.posts.map(u=>u.id));for(const u of fh)r.deletedStaticIds.includes(u.id)||d.has(u.id)||s.push(u);for(const u of m1)r.deletedStaticIds.includes(u.id)||d.has(u.id)||s.push(u);return s.sort((u,f)=>f.date.localeCompare(u.date)),s}const mh=C.createContext(null);function v1({children:r}){const[s,d]=C.useState(0),u=C.useMemo(()=>oa(),[s]),f=C.useMemo(()=>y1(u),[u]),p=C.useMemo(()=>yr(u),[u]),m=C.useCallback(j=>{const k=oa();k.posts.unshift({...j,id:Hf()}),ua(k),d(G=>G+1)},[]),E=C.useCallback(j=>{const k=oa(),G=k.posts.findIndex(R=>R.id===j.id);G>=0?k.posts[G]=j:k.posts.unshift(j),ua(k),d(R=>R+1)},[]),y=C.useCallback(j=>{const k=oa();k.posts=k.posts.filter(R=>R.id!==j),fh.some(R=>R.id===j)&&!k.deletedStaticIds.includes(j)&&k.deletedStaticIds.push(j),ua(k),d(R=>R+1)},[]),h=C.useCallback(j=>{const k=oa();yr(k),k.categories.push({id:Hf(),name:j.trim()}),ua(k),d(G=>G+1)},[]),x=C.useCallback(j=>{const k=oa();yr(k);const G=k.categories.findIndex(R=>R.id===j.id);G>=0&&(k.categories[G]=j,ua(k),d(R=>R+1))},[]),S=C.useCallback(j=>{if(j===ph)return;const k=oa();yr(k),k.categories=k.categories.filter(G=>G.id!==j),ua(k),d(G=>G+1)},[]),O=C.useCallback(j=>{if(!j)return"未分类";const k=p.find(G=>G.id===j);return k?k.name:"未分类"},[p]),H=C.useMemo(()=>({posts:f,categories:p,addPost:m,updatePost:E,deletePost:y,addCategory:h,updateCategory:x,deleteCategory:S,getCategoryName:O}),[f,p,m,E,y,h,x,S,O]);return L.jsx(mh.Provider,{value:H,children:r})}function B1(){const r=C.useContext(mh);if(!r)throw new Error("useBlog() must be used within <BlogProvider>");return r}const gh="lwyblog-social";function b1(r){const s=r.toLowerCase().trim();return s==="email"||s==="邮箱"||s==="mail"}function S1(r,s){function d(f){return ct.createElement("svg",{width:18,height:18,viewBox:"0 0 24 24",fill:s},ct.createElement("path",{d:f}))}switch(r.toLowerCase().trim()){case"github":return d("M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12");case"email":case"邮箱":case"mail":return ct.createElement("svg",{width:18,height:18,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:1.8,strokeLinecap:"round",strokeLinejoin:"round"},ct.createElement("rect",{x:2.5,y:4.5,width:19,height:15,rx:2}),ct.createElement("path",{d:"m2.5 5 8.5 7.5a2 2 0 0 0 2.5 0L22 5"}));case"weibo":case"微博":return d("M20.194 14.197c0 3.364-3.562 6.09-7.944 6.09-4.393 0-7.955-2.726-7.955-6.09 0-3.354 3.562-6.09 7.955-6.09 4.382 0 7.944 2.736 7.944 6.09zm-7.92 3.94c-2.485 0-4.503-1.689-4.503-3.77 0-2.082 2.018-3.771 4.503-3.771 2.485 0 4.503 1.689 4.503 3.77 0 2.082-2.018 3.771-4.503 3.771zm-7.1-3.83c-.47 2.035.34 4.014 1.853 5.132.249.184.066.54-.255.475-2.008-.407-3.85-2.01-4.36-4.21-.526-2.266.872-4.63 3.146-5.245 2.274-.615 4.388.509 4.794 2.58.065.33-.313.508-.529.233-1.153-1.472-3.23-1.955-4.65-1.055v.09zm7.096 2.08c-.39-.101-.698.35-.424.57.93.751 2.645.742 3.498-.042.248-.228.788-.13.609.236-.574 1.17-2.228 1.492-3.683-.764zm2.201-3.117c-.145.24-.457.362-.701.266-.24-.098-.322-.375-.188-.604.133-.225.436-.354.678-.26.245.095.326.372.21.598z");case"bilibili":case"b站":return d("M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z");default:return null}}function C1(){try{const r=localStorage.getItem(gh);return r?JSON.parse(r):{github:"",email:"",weibo:"",bilibili:""}}catch{return{github:"",email:"",weibo:"",bilibili:""}}}function O1(r){localStorage.setItem(gh,JSON.stringify(r))}const x1=[{key:"github",label:"GitHub"},{key:"email",label:"邮箱"},{key:"weibo",label:"微博"},{key:"bilibili",label:"Bilibili"}],E1=C.lazy(()=>Rn(()=>import("./Home-BruTsie3.js"),__vite__mapDeps([0,1]))),A1=C.lazy(()=>Rn(()=>import("./Post-0LZTgXGF.js"),__vite__mapDeps([2,3,4]))),T1=C.lazy(()=>Rn(()=>import("./Admin-CKDfwLq8.js"),__vite__mapDeps([5,3,6]))),_1=C.lazy(()=>Rn(()=>import("./Categories-C7sYaO3V.js"),__vite__mapDeps([7,8]))),w1=C.lazy(()=>Rn(()=>import("./Tags-BGcM9OK_.js"),__vite__mapDeps([9,10]))),D1=C.lazy(()=>Rn(()=>import("./Archive-2nfLtYqW.js"),__vite__mapDeps([11,12]))),R1=C.lazy(()=>Rn(()=>import("./Search-GTyp-lLJ.js"),[])),Qa={"/categories":()=>{Rn(()=>import("./Categories-C7sYaO3V.js"),__vite__mapDeps([7,8]))},"/tags":()=>{Rn(()=>import("./Tags-BGcM9OK_.js"),__vite__mapDeps([9,10]))},"/archive":()=>{Rn(()=>import("./Archive-2nfLtYqW.js"),__vite__mapDeps([11,12]))},"/admin":()=>{Rn(()=>import("./Admin-CKDfwLq8.js"),__vite__mapDeps([5,3,6]))},"/search":()=>{Rn(()=>import("./Search-GTyp-lLJ.js"),[])}};function L1(){const[r,s]=C.useState(()=>localStorage.getItem("lwyblog-dark")==="1"),[d,u]=C.useState(!1);C.useEffect(()=>{document.documentElement.classList.toggle("dark",r),localStorage.setItem("lwyblog-dark",r?"1":"0")},[r]),C.useEffect(()=>{const x=xr(),O=`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>${x.logoEmoji||"🌿"}</text></svg>`,H=`data:image/svg+xml,${encodeURIComponent(O)}`;let j=document.querySelector("link[rel='icon']");j||(j=document.createElement("link"),j.rel="icon",j.type="image/svg+xml",document.head.appendChild(j)),j.href=H,document.title=x.seoTitle||x.blogTitle||"LWY's Island";const k=(G,R)=>{let I=document.querySelector(`meta[name="${G}"]`);I||(I=document.createElement("meta"),I.name=G,document.head.appendChild(I)),I.content=R};x.seoDescription&&k("description",x.seoDescription),x.seoKeywords&&k("keywords",x.seoKeywords)},[]);const f=C.useMemo(()=>xr(),[]),p=C.useMemo(()=>C1(),[]),m=C.useMemo(()=>{var x,S,O,H;return{github:p.github||((x=f.social)==null?void 0:x.github)||"",email:p.email||((S=f.social)==null?void 0:S.email)||"",weibo:p.weibo||((O=f.social)==null?void 0:O.weibo)||"",bilibili:p.bilibili||((H=f.social)==null?void 0:H.bilibili)||""}},[p,f]),E=C.useMemo(()=>x1.filter(x=>m[x.key]).map(x=>({key:x.key,label:x.label,url:m[x.key]})),[m]),y=C.useCallback(x=>{u(!0),setTimeout(()=>{s(x),setTimeout(()=>u(!1),400)},80)},[]),h=C.useCallback(x=>{var S;(S=Qa[x])==null||S.call(Qa)},[]);return L.jsxs(hs,{children:[L.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:"100vh"},children:[L.jsx(bv,{children:L.jsxs(v1,{children:[L.jsx(f1,{dark:r,onThemeChange:y,onNavPreload:h}),L.jsx("div",{style:{flex:1},children:L.jsx(C.Suspense,{fallback:L.jsx("div",{style:{display:"flex",justifyContent:"center",padding:80},children:L.jsx("div",{style:{width:28,height:28,border:"3px solid rgba(140,140,165,0.12)",borderTopColor:"#19c8b9",borderRadius:"50%",animation:"spin 0.6s linear infinite"}})}),children:L.jsxs(Qy,{children:[L.jsx(Gt,{path:"/",element:L.jsx(E1,{})}),L.jsx(Gt,{path:"/categories",element:L.jsx(_1,{})}),L.jsx(Gt,{path:"/tags",element:L.jsx(w1,{})}),L.jsx(Gt,{path:"/archive",element:L.jsx(D1,{})}),L.jsx(Gt,{path:"/posts/:id",element:L.jsx(A1,{})}),L.jsx(Gt,{path:"/admin",element:L.jsx(T1,{})}),L.jsx(Gt,{path:"/search",element:L.jsx(R1,{})})]})})}),L.jsxs("div",{style:{textAlign:"center",padding:"24px 0 12px"},children:[E.length>0&&L.jsx("div",{style:{marginBottom:12,display:"flex",justifyContent:"center",gap:16,flexWrap:"wrap"},children:E.map(x=>{const S=b1(x.label),O=S?`mailto:${x.url}`:x.url;return L.jsx("a",{href:O,target:S?void 0:"_blank",rel:S?void 0:"noopener noreferrer",title:x.label,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:36,height:36,borderRadius:"50%",background:r?"rgba(255,255,255,0.06)":"rgba(140,140,165,0.08)",textDecoration:"none",transition:"all 0.2s",fontSize:18},onMouseEnter:H=>{const j=H.currentTarget;j.style.background=r?"rgba(255,255,255,0.12)":"rgba(140,140,165,0.18)",j.style.transform="translateY(-2px)"},onMouseLeave:H=>{const j=H.currentTarget;j.style.background=r?"rgba(255,255,255,0.06)":"rgba(140,140,165,0.08)",j.style.transform="translateY(0)"},children:S1(x.label,r?"#c0b090":"#6b5030")},x.key)})}),L.jsx("a",{href:"#/admin",style:{display:"inline-block",fontSize:13,fontWeight:600,padding:"6px 18px",borderRadius:16,color:r?"#7a7a88":"#9494a0",textDecoration:"none",opacity:.6,transition:"opacity 0.15s"},onMouseEnter:x=>{var S;x.currentTarget.style.opacity="1",(S=Qa["/admin"])==null||S.call(Qa)},onMouseLeave:x=>{x.currentTarget.style.opacity="0.6"},children:"管理后台"})]})]})}),L.jsxs("div",{className:"app-footer",children:[f.footerCopyright&&L.jsx("div",{style:{textAlign:"center",padding:"0 0 8px",fontSize:13,opacity:.5,color:r?"#c0b090":"#6b5030"},children:f.footerCopyright}),L.jsx(ch,{type:f.footerType})]})]}),d&&L.jsx("div",{style:{position:"fixed",inset:0,zIndex:99999,background:r?"#1B1B1D":"#fffdf5",display:"flex",alignItems:"center",justifyContent:"center"},children:L.jsx("div",{style:{width:28,height:28,border:"3px solid rgba(140,140,165,0.12)",borderTopColor:"#19c8b9",borderRadius:"50%",animation:"spin 0.6s linear infinite"}})})]})}Qg.createRoot(document.getElementById("root")).render(L.jsx(C.StrictMode,{children:L.jsx(L1,{})}));export{ph as D,ts as G,Vb as J,ab as N,Ht as Y,Eb as Z,Rn as _,a0 as a,S0 as b,xr as c,k0 as d,C1 as e,O1 as f,Hg as g,nh as h,M1 as i,L as j,K0 as k,oa as l,fh as p,C as r,N1 as s,sh as t,B1 as u,sb as w};
