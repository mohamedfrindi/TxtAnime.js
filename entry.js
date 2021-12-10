(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TxtAnime = {}));
})(this, (function (exports) { 'use strict';

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css_248z = ":root {\n  --easeOutExpo: cubic-bezier(0.16, 1, 0.3, 1);\n  --easeOutQuad: cubic-bezier(0.5, 1, 0.89, 1);\n  --easeOutQuart: cubic-bezier(0.25, 1, 0.5, 1);\n  --easeOutBack: cubic-bezier(0.34, 1.56, 0.64, 1);\n  --easeOutCirc: cubic-bezier(0, 0.55, 0.45, 1);\n  --easeOutOne: cubic-bezier(0.075, 0.82, 0.165, 1);\n  --easeOutTwo: cubic-bezier(0.165, 0.84, 0.44, 1);\n  --easeOutThree: cubic-bezier(0.09, 0.78, 0, 1.28); }\n\n.tx-an-1 {\n  display: inline-block;\n  animation: tx-an-1 var(--easeOutOne) forwards;\n  opacity: 0; }\n\n@keyframes tx-an-1 {\n  0% {\n    opacity: 0;\n    transform: translateY(150px) translateX(150px) rotate(200deg); }\n  100% {\n    opacity: 1;\n    transform: translateY(0) translateX(0) rotateZ(0); } }\n\n.tx-an-2 {\n  display: inline-block;\n  animation: tx-an-2 var(--easeOutOne) forwards;\n  opacity: 0; }\n\n@keyframes tx-an-2 {\n  0% {\n    opacity: 0;\n    transform: translateY(-200px) translateX(150px) rotate(-280deg); }\n  100% {\n    opacity: 1;\n    transform: translateY(0) translateX(0) rotate(0); } }\n\n.tx-an-3 {\n  display: inline-block;\n  animation: tx-an-3 var(--easeOutOne) forwards;\n  opacity: 0; }\n\n@keyframes tx-an-3 {\n  0% {\n    opacity: 0;\n    transform: translateX(100px) scale(10);\n    filter: blur(5); }\n  100% {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n    filter: blur(0); } }\n\n.tx-an-4 {\n  display: inline-block;\n  animation: tx-an-4 var(--easeOutOne) forwards;\n  opacity: 0; }\n\n@keyframes tx-an-4 {\n  0% {\n    opacity: 0;\n    transform: translateX(100px); }\n  100% {\n    opacity: 1;\n    transform: translateX(0px); } }\n\n.tx-an-5 {\n  display: inline-block;\n  animation: tx-an-5 var(--easeOutOne) forwards;\n  opacity: 0; }\n\n@keyframes tx-an-5 {\n  0% {\n    opacity: 0;\n    transform: translateY(100px); }\n  100% {\n    opacity: 1;\n    transform: translateY(0px); } }\n\n.tx-an-6 {\n  display: inline-block;\n  animation: tx-an-6 var(--easeOutBack) forwards;\n  opacity: 0; }\n\n@keyframes tx-an-6 {\n  0% {\n    opacity: 0;\n    transform: scale(0); }\n  100% {\n    opacity: 1;\n    transform: scale(1); } }\n\n.tx-an-7 {\n  display: inline-block;\n  animation: tx-an-7 var(--easeOutCirc) forwards;\n  visibility: hidden; }\n\n@keyframes tx-an-7 {\n  0% {\n    visibility: hidden; }\n  100% {\n    visibility: visible; } }\n\n.tx-an-8 {\n  display: inline-block;\n  animation: tx-an-8 var(--easeOutQuart) forwards;\n  opacity: 0; }\n\n@keyframes tx-an-8 {\n  0% {\n    filter: blur(5px);\n    opacity: 0; }\n  100% {\n    filter: blur(0px);\n    opacity: 1; } }\n\n.tx-an-9 {\n  display: inline-block;\n  animation: tx-an-9 var(--easeOutQuart) forwards;\n  opacity: 0; }\n\n@keyframes tx-an-9 {\n  0% {\n    transform: scale(1.3);\n    opacity: 0; }\n  100% {\n    transform: scale(1);\n    opacity: 1; } }\n\n.tx-an-10 {\n  display: inline-block;\n  animation: tx-an-10 var(--easeOutCirc) both;\n  opacity: 0; }\n\n@keyframes tx-an-10 {\n  0% {\n    transform: translateY(70px);\n    opacity: 0; }\n  50% {\n    transform: translateY(0);\n    opacity: 1; }\n  100% {\n    transform: translateY(-70px);\n    opacity: 0; } }\n\n.scale-1 {\n  display: block;\n  animation: scale-1 var(--easeOutThree) forwards;\n  opacity: 0;\n  transform-origin: center; }\n\n@keyframes scale-1 {\n  0% {\n    transform: scale(0); }\n  50% {\n    filter: blur(0px);\n    opacity: 1;\n    transform: scale(1); }\n  100% {\n    filter: blur(5px);\n    opacity: 0;\n    transform: scale(2); } }\n\n.scale-2 {\n  display: block;\n  animation: scale-2 var(--easeOutThree) forwards;\n  opacity: 0;\n  transform-origin: center; }\n\n@keyframes scale-2 {\n  0% {\n    filter: blur(5px);\n    transform: scale(5); }\n  50% {\n    filter: blur(0px);\n    opacity: 1;\n    transform: scale(1.3); }\n  100% {\n    opacity: 0;\n    transform: scale(0); } }\n\n.parent-overlay-1 {\n  position: relative;\n  overflow: hidden;\n  padding: 0 10px;\n  border-radius: 3px; }\n  .parent-overlay-1 span {\n    display: block;\n    position: relative;\n    z-index: 2;\n    mix-blend-mode: hard-light;\n    animation: 1s spn-overlay-1 var(--easeOutOne) both;\n    opacity: 0; }\n\n@keyframes spn-overlay-1 {\n  0% {\n    opacity: 0;\n    transform: translateX(-100%); }\n  100% {\n    opacity: 1;\n    transform: translateX(0%); } }\n    .parent-overlay-1 span.out {\n      animation: 0.8s spn-overlay-out-1 var(--easeOutQuart) both; }\n\n@keyframes spn-overlay-out-1 {\n  0% {\n    opacity: 1;\n    transform: translateX(0%); }\n  100% {\n    opacity: 0;\n    transform: translateX(100%); } }\n  .parent-overlay-1 .overlay-1 {\n    position: absolute;\n    top: 0;\n    left: 100%;\n    width: 100%;\n    height: 100%;\n    z-index: 0;\n    animation: 1s overlay-1 var(--easeOutOne) forwards; }\n\n@keyframes overlay-1 {\n  100% {\n    left: -50%; } }\n    .parent-overlay-1 .overlay-1.out {\n      animation: 0.8s overlay-out-1 var(--easeOutQuart) forwards; }\n\n@keyframes overlay-out-1 {\n  0% {\n    opacity: 1;\n    left: -50%; }\n  100% {\n    opacity: 0;\n    left: -100%; } }\n\n.parent-overlay-2 {\n  position: relative;\n  overflow: hidden;\n  border-radius: 3px; }\n  .parent-overlay-2 span {\n    display: block;\n    position: relative;\n    z-index: 2;\n    mix-blend-mode: hard-light;\n    animation: 1s spn-overlay-2 var(--easeOutOne) both;\n    opacity: 0; }\n\n@keyframes spn-overlay-2 {\n  0% {\n    opacity: 0;\n    transform: translateY(-100%); }\n  100% {\n    opacity: 1;\n    transform: translateY(0%); } }\n    .parent-overlay-2 span.out {\n      animation: 0.8s spn-overlay-out-2 var(--easeOutQuart) both; }\n\n@keyframes spn-overlay-out-2 {\n  0% {\n    opacity: 1;\n    transform: translateY(0%); }\n  100% {\n    opacity: 0;\n    transform: translateY(100%); } }\n  .parent-overlay-2 .overlay-2 {\n    position: absolute;\n    top: 100%;\n    left: 0%;\n    width: 100%;\n    height: 100%;\n    z-index: 0;\n    animation: 1s overlay-2 var(--easeOutCirc) forwards; }\n\n@keyframes overlay-2 {\n  100% {\n    top: -100%; } }\n    .parent-overlay-2 .overlay-2.out {\n      animation: 0.8s overlay-out-2 var(--easeOutQuart) forwards; }\n\n@keyframes overlay-out-2 {\n  100% {\n    opacity: 0;\n    top: -100%; } }\n\n.parent-overlay-3 {\n  position: relative;\n  overflow: hidden;\n  padding: 0 10px; }\n  .parent-overlay-3 span {\n    display: block;\n    position: relative;\n    z-index: 1;\n    animation: 2s spn-overlay-3 var(--easeOutTwo) both;\n    animation-delay: .7s;\n    opacity: 0; }\n\n@keyframes spn-overlay-3 {\n  0% {\n    opacity: 0;\n    transform: translateX(50px); }\n  100% {\n    opacity: 1;\n    transform: translateX(0); } }\n    .parent-overlay-3 span.out {\n      animation: 1s spn-overlay-out-3 var(--easeOutOne) both;\n      animation-delay: .1s; }\n\n@keyframes spn-overlay-out-3 {\n  0% {\n    opacity: 1;\n    transform: translateX(0px); }\n  100% {\n    opacity: 0;\n    transform: translateX(100%); } }\n  .parent-overlay-3 .overlay-3 {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100%;\n    z-index: 2;\n    animation: 1.2s overlay-3 var(--easeOutCirc) forwards; }\n\n@keyframes overlay-3 {\n  0% {\n    left: 0;\n    width: 0%; }\n  50% {\n    width: 50%;\n    left: 50%; }\n  100% {\n    left: 100%;\n    width: 100%; } }\n    .parent-overlay-3 .overlay-3.out {\n      animation: 1.4s overlay-out-3 var(--easeOutQuart) forwards; }\n\n@keyframes overlay-out-3 {\n  0% {\n    left: 100%;\n    width: 100%; }\n  50% {\n    width: 50%;\n    left: 50%; }\n  100% {\n    left: 0%;\n    width: 0%; } }\n";
  styleInject(css_248z);

  function TxtAnime () {

      this.animate = function(element , options) {

          // selector
          if (typeof element === 'string') {
              this.el = Array.from(document.querySelectorAll(element));
          }else if (typeof element === 'object') {

              if (element instanceof NodeList) {
                  this.el = Array.from(element);
              }else if (element instanceof Element) {
                  this.el = [element];
              }

          }

          // default options
          this.default = {
              effect : 'tx-an-1',
              delayStart : 0, 
              delay: 0.05,
              duration: 0.7, 
              loop : true,
              loopTime : 2,
              overflow : true
          };

          // options
          this.options = Object.assign(this.default , options);

          // functions
          let elmnt = this.el;
          let effect = this.options.effect;
          let delayStart = this.options.delayStart;
          let delay = this.options.delay;
          let duration = this.options.duration;
          let loop = this.options.loop;
          let loopTime = this.options.loopTime;
          let overflow = this.options.overflow;

          txtAnimations();
          function txtAnimations() {

              // -----
              elmnt.forEach((el) => {

                  // replace text or span
                  el.innerHTML = el.textContent.replace(/\S/g , `<span>$&</span>`);
      
                  let spn = Array.from(el.querySelectorAll('span'));
      
                  setTimeout(() => {
                      startAnime();
                  }, delayStart * 1000);
      
                  // add efects
                  function startAnime() {
                      spn.forEach((tx , index) => {

                          if (overflow == true) {
                              tx.parentNode.style.overflow = 'hidden';
                          }

                          tx.parentNode.style.display = 'block';
                          tx.parentNode.style.opacity = '1';
      
                          tx.classList.add(effect);
                          tx.style.display = 'inline-flex';
      
                          tx.style.animationDelay = `${index * delay}s`;
                          tx.style.animationDuration = `${duration}s`;
                      });
                  }
              });
          }

          // loop and loope Time 
          if (loop == true) {
              setInterval(() => {
                  txtAnimations();
              },loopTime * 1000);
          }
      };

      this.scale = function(element , options) {
           // selector
          if (typeof element === 'string') {
              this.el = Array.from(document.querySelectorAll(element));
          }else if (typeof element === 'object') {

              if (element instanceof NodeList) {
                  this.el = Array.from(element);
              }else if (element instanceof Element) {
                  this.el = [element];
              }

          }

          // default options
          this.default = {
              effect : 'scale-1',
              delayStart : 0, 
              delay: 1.5,
              duration: 2, 
              loop : true,
              text : ['Go' , 'To' , 'Site'],
          };

          // options
          this.options = Object.assign(this.default , options);

          // functions
          let elmnt = this.el;
          let effect = this.options.effect;
          let delayStart = this.options.delayStart;
          let delay = this.options.delay;
          let duration = this.options.duration;
          let loop = this.options.loop;
          this.options.loopTime;
          this.options.overflow;
          let text = this.options.text;

          
          // func 
          function startScale() {

              // parent styles
              elmnt.forEach((el) => {
                  el.style.position = 'relative';
              });
              
              // creat spn on div
              for (let i = 0 ; i < text.length ; i++) {
                  let spn = document.createElement('span');
                  spn.innerHTML = text[i];

                  elmnt.forEach((el) => {
                      el.appendChild(spn);
                  });

                  spn.classList.remove(effect);
              }

              // main func
              elmnt.forEach((el) => {
                  let spnArr = Array.from(el.querySelectorAll('span'));

                  let start = 0;

                  spnArr.forEach((sp) => {
                      sp.style.display = 'none';

                      spnArr[start].style.display = 'block';
                      spnArr[start].classList.add(effect);

                      if (sp.classList.contains(effect)) {
                          sp.style.animationDuration = `${duration}s`;
                      }
                  });

                  let startInterval = setInterval(() => {

                      spnArr[start].classList.remove(effect);
                      spnArr[start].style.display = 'none';

                      start++;

                      if (start > text.length - 1) {
                          start = 0;
                          
                          if (loop !== true) {
                              el.innerHTML = '';
                              clearInterval(startInterval);
                          }
                      }

                      spnArr[start].classList.add(effect);
                      spnArr[start].style.display = 'block';

                      spnArr.forEach((spn) => {
                          if (spn.classList.contains(effect)) {
                              spn.style.animationDuration = `${duration}s`;
                          }
                      });

                  },delay * 1000);

              });
          }

          // delayStart
          setTimeout(() => {
              startScale();
          },delayStart * 1000);
      };

      this.overlay = function (element , options) {
          // selector
          if (typeof element === 'string') {
              this.el = Array.from(document.querySelectorAll(element));
          }else if (typeof element === 'object') {

              if (element instanceof NodeList) {
                  this.el = Array.from(element);
              }else if (element instanceof Element) {
                  this.el = [element];
              }

          }

          // default options
          this.default = {
              effect : 'overlay-1',
              overlayColor : 'black',
              loop : true,
              loopTime : 5,
              outTime : 3,
              delayStart : 0,
          };

          // options
          this.options = Object.assign(this.default , options);

          // functions
          let elmnt = this.el;
          let effect = this.options.effect;
          let overlayColor = this.options.overlayColor;
          let outTime = this.options.outTime;
          let loop = this.options.loop;
          let loopTime = this.options.loopTime;
          let delayStart = this.options.delayStart;


          // func
          function mainFunc() {
              elmnt.forEach((el) => {
                  el.classList.add(`parent-${effect}`);

                  // span func
                  spanFunc();
                  function spanFunc() {

                      // get el text content and append for span
                      let elContent = el.textContent;
                      el.textContent = '';
                      let elSpn = document.createElement('span');
                      elSpn.innerHTML = elContent;
                      el.appendChild(elSpn);

                      // outTime property
                      setTimeout(() => {
                          elSpn.classList.add("out");
                      },outTime * 1000);
                  }


                  // overlay function
                  overlayFunc();
                  function overlayFunc() {

                      // create overlay 
                      let Creatoverlay = document.createElement('div');
                      Creatoverlay.classList.add(effect);
                      Creatoverlay.style.background = overlayColor;

                      el.appendChild(Creatoverlay);

                      // outTime property
                      setTimeout(() => {
                          Creatoverlay.classList.add("out");
                      },outTime * 1000);
                  }
              });
          }

          
          // loop and loopTime property
          if (loop !== false) {
              setInterval(() => {
                  setTimeout(() => {
                      mainFunc();
                  },delayStart * 1000);
              },loopTime * 1000);
          }

          // delayStart 
          setTimeout(() => {
              mainFunc();
          },delayStart * 1000);
      };

  }

  if (typeof window !== 'undefined') {
      window.TxtAnime = TxtAnime;
  }

  exports.TxtAnime = TxtAnime;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
