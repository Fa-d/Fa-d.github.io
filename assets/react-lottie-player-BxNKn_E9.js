import{l as de}from"./lottie-web-DcUv27x8.js";import{r as t,R as me}from"./react-BT0UaAji.js";import{e as ue}from"./fast-deep-equal-8H8SH489.js";import{c as fe}from"./rfdc-C3E4_Cus.js";function C(){return C=Object.assign?Object.assign.bind():function(u){for(var l=1;l<arguments.length;l++){var f=arguments[l];for(var s in f)Object.prototype.hasOwnProperty.call(f,s)&&(u[s]=f[s])}return u},C.apply(this,arguments)}function N(u,l){if(u==null)return{};var f={},s=Object.keys(u),n,r;for(r=0;r<s.length;r++)n=s[r],!(l.indexOf(n)>=0)&&(f[n]=u[n]);return f}var ve={},p=function(){},pe=function(l){var f=l.loadAnimation,s=t.memo(t.forwardRef(function(n,r){var I=n.play,m=I===void 0?null:I,q=n.speed,F=q===void 0?1:q,K=n.direction,d=K===void 0?1:K,W=n.segments,E=W===void 0?null:W,w=n.goTo,g=w===void 0?null:w,z=n.useSubframes,B=z===void 0?!0:z,G=n.renderer,H=G===void 0?"svg":G,J=n.loop,j=J===void 0?!0:J,Q=n.rendererSettings,S=Q===void 0?ve:Q,P=n.audioFactory,U=n.onLoad,L=U===void 0?p:U,V=n.onComplete,y=V===void 0?p:V,X=n.onLoopComplete,b=X===void 0?p:X,Y=n.onEnterFrame,_=Y===void 0?p:Y,Z=n.onSegmentStart,D=Z===void 0?p:Z,v=N(n,["play","speed","direction","segments","goTo","useSubframes","renderer","loop","rendererSettings","audioFactory","onLoad","onComplete","onLoopComplete","onEnterFrame","onSegmentStart"]),A=v,a,R;if("animationData"in v){var ee=v;a=ee.animationData,A=N(ee,["animationData"])}if("path"in v){var te=v;R=te.path,A=N(te,["path"])}var T=t.useRef(null),k=t.useRef(),e=t.useCallback(function(){if(k.current==null)throw new Error("Lottie ref is not set");return k.current},[]),ne=t.useState(!1),i=ne[0],re=ne[1],oe=t.useState(E),c=oe[0],se=oe[1];t.useEffect(function(){ue(c,E)||se(E)},[E,c]);var ie=t.useState(S),$=ie[0],ce=ie[1];t.useEffect(function(){ue($,S)||ce(S)},[S,$]),t.useEffect(function(){return function(){return e().removeEventListener("complete",y)}},[e,y]),t.useEffect(function(){return function(){return e().removeEventListener("loopComplete",b)}},[e,b]),t.useEffect(function(){return function(){return e().removeEventListener("enterFrame",_)}},[e,_]),t.useEffect(function(){return function(){return e().removeEventListener("segmentStart",D)}},[e,D]),t.useEffect(function(){return function(){return e().removeEventListener("DOMLoaded",L)}},[e,L]);var x=t.useCallback(function(o){k.current=o,typeof r=="function"?r(o):r!=null&&(r.current=o)},[r]);t.useEffect(function(){function o(){return a==null||typeof a!="object"?a:"default"in a&&typeof a.default=="object"?fe(a.default):fe(a)}if(T.current==null)throw new Error("animElementRef is not set");var O=f(C({animationData:o(),path:R,container:T.current,renderer:H,loop:!1,autoplay:!1,rendererSettings:$},P?{audioFactory:P}:{}));x(O);var h=function(){return re(!0)};return e().addEventListener("DOMLoaded",h),function(){e().removeEventListener("DOMLoaded",h),re(!1),e().destroy(),x(void 0)}},[j,H,$,a,R,P,x,e]),t.useEffect(function(){e().addEventListener("DOMLoaded",L)},[e,L]),t.useEffect(function(){e().addEventListener("complete",y)},[e,y]),t.useEffect(function(){e().addEventListener("loopComplete",b)},[e,b]),t.useEffect(function(){e().addEventListener("enterFrame",_)},[e,_]),t.useEffect(function(){e().addEventListener("segmentStart",D)},[e,D]),t.useEffect(function(){i&&(e().loop=j)},[i,j,e]);var M=t.useRef(!1);return t.useEffect(function(){if(!i)return;function o(le){e().goToAndPlay(le,!0),e().setDirection(d)}if(m===!0){var O=!0;if(c){if(e().playSegments(c,O),M.current=!0,d===-1){var h=typeof c[1]=="number"?c[1]:c[1][1];o(h)}}else if(M.current&&e().resetSegments(O),M.current=!1,d===-1){var ae=e().getDuration(!0);o(ae)}else e().play()}else m===!1&&e().pause()},[m,c,i,d,e]),t.useEffect(function(){i&&(Number.isNaN(F)||e().setSpeed(F))},[F,i,e]),t.useEffect(function(){i&&e().setDirection(d)},[d,e,i]),t.useEffect(function(){if(i&&g!=null){var o=!0;m?e().goToAndPlay(g,o):e().goToAndStop(g,o)}},[e,g,m,i]),t.useEffect(function(){e().setSubframe&&e().setSubframe(B)},[e,B]),me.createElement("div",C({},A,{ref:T}))}));return s},ye=pe(de);export{ye as L};