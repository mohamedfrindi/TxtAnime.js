!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("TxtAnime",[],e):"object"==typeof exports?exports.TxtAnime=e():t.TxtAnime=e()}(self,(function(){return(()=>{"use strict";var t={169:(t,e,a)=>{a.d(e,{Z:()=>s});var n=a(81),r=a.n(n),o=a(645),i=a.n(o)()(r());i.push([t.id,":root{--easeOutExpo: cubic-bezier(0.16, 1, 0.3, 1);--easeOutQuad: cubic-bezier(0.5, 1, 0.89, 1);--easeOutQuart: cubic-bezier(0.25, 1, 0.5, 1);--easeOutBack: cubic-bezier(0.34, 1.56, 0.64, 1);--easeOutCirc: cubic-bezier(0, 0.55, 0.45, 1);--easeOutOne: cubic-bezier(0.075, 0.82, 0.165, 1);--easeOutTwo: cubic-bezier(0.165, 0.84, 0.44, 1);--easeOutThree: cubic-bezier(0.09, 0.78, 0, 1.28)}.tx-an-1{display:inline-block;animation:tx-an-1 var(--easeOutOne) forwards;opacity:0}@keyframes tx-an-1{0%{opacity:0;transform:translateY(150px) translateX(150px) rotate(200deg)}100%{opacity:1;transform:translateY(0) translateX(0) rotateZ(0)}}.tx-an-2{display:inline-block;animation:tx-an-2 var(--easeOutOne) forwards;opacity:0}@keyframes tx-an-2{0%{opacity:0;transform:translateY(-200px) translateX(150px) rotate(-280deg)}100%{opacity:1;transform:translateY(0) translateX(0) rotate(0)}}.tx-an-3{display:inline-block;animation:tx-an-3 var(--easeOutOne) forwards;opacity:0}@keyframes tx-an-3{0%{opacity:0;transform:translateX(100px) scale(10);filter:blur(5)}100%{opacity:1;transform:translateX(0) scale(1);filter:blur(0)}}.tx-an-4{display:inline-block;animation:tx-an-4 var(--easeOutOne) forwards;opacity:0}@keyframes tx-an-4{0%{opacity:0;transform:translateX(100px)}100%{opacity:1;transform:translateX(0px)}}.tx-an-5{display:inline-block;animation:tx-an-5 var(--easeOutOne) forwards;opacity:0}@keyframes tx-an-5{0%{opacity:0;transform:translateY(100px)}100%{opacity:1;transform:translateY(0px)}}.tx-an-6{display:inline-block;animation:tx-an-6 var(--easeOutBack) forwards;opacity:0}@keyframes tx-an-6{0%{opacity:0;transform:scale(0)}100%{opacity:1;transform:scale(1)}}.tx-an-7{display:inline-block;animation:tx-an-7 var(--easeOutCirc) forwards;opacity:0}@keyframes tx-an-7{0%{opacity:0}100%{opacity:1}}.tx-an-8{display:inline-block;animation:tx-an-8 var(--easeOutQuart) forwards;opacity:0}@keyframes tx-an-8{0%{filter:blur(5px);opacity:0}100%{filter:blur(0px);opacity:1}}.tx-an-9{display:inline-block;animation:tx-an-9 var(--easeOutQuart) forwards;opacity:0}@keyframes tx-an-9{0%{transform:scale(1.3);opacity:0}100%{transform:scale(1);opacity:1}}.tx-an-10{display:inline-block;animation:tx-an-10 var(--easeOutCirc) forwards;opacity:0}@keyframes tx-an-10{0%{opacity:0;transform:translateY(100px)}50%{opacity:1;filter:blur(0px);transform:translateY(0px)}100%{opacity:0;filter:blur(1px);transform:translateY(-100px) scale(0.8)}}.scale-1{display:block;animation:scale-1 var(--easeOutThree) forwards;opacity:0;transform-origin:center}@keyframes scale-1{0%{transform:scale(0)}50%{filter:blur(0px);opacity:1;transform:scale(1)}100%{filter:blur(5px);opacity:0;transform:scale(2)}}\n",""]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var a="",n=void 0!==e[5];return e[4]&&(a+="@supports (".concat(e[4],") {")),e[2]&&(a+="@media ".concat(e[2]," {")),n&&(a+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),a+=t(e),n&&(a+="}"),e[2]&&(a+="}"),e[4]&&(a+="}"),a})).join("")},e.i=function(t,a,n,r,o){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<t.length;c++){var p=[].concat(t[c]);n&&i[p[0]]||(void 0!==o&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=o),a&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=a):p[2]=a),r&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=r):p[4]="".concat(r)),e.push(p))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function a(t){for(var a=-1,n=0;n<e.length;n++)if(e[n].identifier===t){a=n;break}return a}function n(t,n){for(var o={},i=[],s=0;s<t.length;s++){var l=t[s],c=n.base?l[0]+n.base:l[0],p=o[c]||0,f="".concat(c," ").concat(p);o[c]=p+1;var u=a(f),d={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(d);else{var y=r(d,n);n.byIndex=s,e.splice(s,0,{identifier:f,updater:y,references:1})}i.push(f)}return i}function r(t,e){var a=e.domAPI(e);return a.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;a.update(t=e)}else a.remove()}}t.exports=function(t,r){var o=n(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<o.length;i++){var s=a(o[i]);e[s].references--}for(var l=n(t,r),c=0;c<o.length;c++){var p=a(o[c]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}o=l}}},569:t=>{var e={};t.exports=function(t,a){var n=function(t){if(void 0===e[t]){var a=document.querySelector(t);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(t){a=null}e[t]=a}return e[t]}(t);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(a)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,a)=>{t.exports=function(t){var e=a.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(a){!function(t,e,a){var n="";a.supports&&(n+="@supports (".concat(a.supports,") {")),a.media&&(n+="@media ".concat(a.media," {"));var r=void 0!==a.layer;r&&(n+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),n+=a.css,r&&(n+="}"),a.media&&(n+="}"),a.supports&&(n+="}");var o=a.sourceMap;o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(n,t,e.options)}(e,t,a)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var o=e[n]={id:n,exports:{}};return t[n](o,o.exports,a),o.exports}a.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return a.d(e,{a:e}),e},a.d=(t,e)=>{for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e);var n,r,o,i,s,l,c,p,f,u,d,y,m,x,h={};return n=a(379),r=a.n(n),o=a(795),i=a.n(o),s=a(569),l=a.n(s),c=a(565),p=a.n(c),f=a(216),u=a.n(f),d=a(589),y=a.n(d),m=a(169),(x={}).styleTagTransform=y(),x.setAttributes=p(),x.insert=l().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=u(),r()(m.Z,x),m.Z&&m.Z.locals&&m.Z.locals,"undefined"!=typeof window&&(window.TxtAnime=function(){this.animate=function(t,e){"string"==typeof t?this.el=Array.from(document.querySelectorAll(t)):"object"==typeof t&&(t instanceof NodeList?this.el=Array.from(t):t instanceof Element&&(this.el=[t])),this.default={effect:"tx-an-1",delayStart:0,delay:.05,duration:.7,loop:!0,loopTime:2e3,overflow:!0},this.options=Object.assign(this.default,e);let a=this.el,n=this.options.effect,r=this.options.delayStart,o=this.options.delay,i=this.options.duration,s=this.options.loop,l=this.options.loopTime,c=this.options.overflow;function p(){a.forEach((t=>{t.innerHTML=t.textContent.replace(/\S/g,"<span>$&</span>");let e=Array.from(t.querySelectorAll("span"));setTimeout((()=>{e.forEach(((t,e)=>{1==c&&(t.parentNode.style.overflow="hidden"),t.parentNode.style.display="block",t.parentNode.style.opacity="1",t.classList.add(n),t.style.display="inline-flex",t.style.animationDelay=e*o+"s",t.style.animationDuration=`${i}s`}))}),1e3*r)}))}p(),1==s&&setInterval((()=>{p()}),l)},this.scale=function(t,e){"string"==typeof t?this.el=Array.from(document.querySelectorAll(t)):"object"==typeof t&&(t instanceof NodeList?this.el=Array.from(t):t instanceof Element&&(this.el=[t])),this.default={effect:"scale-1",delayStart:0,delay:1.5,duration:2,loop:!0,text:["Go","To","Site"]},this.options=Object.assign(this.default,e);let a=this.el,n=this.options.effect,r=this.options.delayStart,o=this.options.delay,i=this.options.duration,s=this.options.loop,l=(this.options.loopTime,this.options.overflow,this.options.text);setTimeout((()=>{!function(){a.forEach((t=>{t.style.position="relative"}));for(let t=0;t<l.length;t++){let e=document.createElement("span");e.innerHTML=l[t],a.forEach((t=>{t.appendChild(e)})),e.classList.remove(n)}a.forEach((t=>{let e=Array.from(t.querySelectorAll("span")),a=0;e.forEach((t=>{t.style.display="none",e[a].style.display="block",e[a].classList.add(n),t.classList.contains(n)&&(t.style.animationDuration=`${i}s`)}));let r=setInterval((()=>{e[a].classList.remove(n),e[a].style.display="none",a++,a>l.length-1&&(a=0,!0!==s&&(t.innerHTML="",clearInterval(r))),e[a].classList.add(n),e[a].style.display="block",e.forEach((t=>{t.classList.contains(n)&&(t.style.animationDuration=`${i}s`)}))}),1e3*o)}))}()}),1e3*r)}}),h.default})()}));