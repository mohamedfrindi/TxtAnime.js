(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
        (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TxtAnime = {}));
})(this, (function (exports) {
    'use strict';

    function styleInject(css, ref) {
        if (ref === void 0) ref = {};
        var insertAt = ref.insertAt;

        if (!css || typeof document === 'undefined') {
            return;
        }

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

    var css_248z = ":root {\n  --easeOutExpo: cubic-bezier(0.16, 1, 0.3, 1);\n  --easeOutQuad: cubic-bezier(0.5, 1, 0.89, 1);\n  --easeOutQuart: cubic-bezier(0.25, 1, 0.5, 1);\n  --easeOutBack: cubic-bezier(0.34, 1.56, 0.64, 1);\n  --easeOutCirc: cubic-bezier(0, 0.55, 0.45, 1);\n  --easeOutOne: cubic-bezier(0.075, 0.82, 0.165, 1);\n  --easeOutTwo: cubic-bezier(0.165, 0.84, 0.44, 1);\n  --easeOutThree: cubic-bezier(0.09, 0.78, 0, 1.28); }\n\n.tx-an-1 {\n  display: inline-block;\n  animation: tx-an-1 var(--easeOutOne) forwards;\n  opacity: 0; }\n\n@keyframes tx-an-1 {\n  0% {\n    opacity: 0;\n    transform: translateY(150px) translateX(150px) rotate(200deg); }\n  100% {\n    opacity: 1;\n    transform: translateY(0) translateX(0) rotateZ(0); } }\n\n.tx-an-2 {\n  display: inline-block;\n  animation: tx-an-2 var(--easeOutOne) forwards;\n  opacity: 0; }\n\n@keyframes tx-an-2 {\n  0% {\n    opacity: 0;\n    transform: translateY(-200px) translateX(150px) rotate(-280deg); }\n  100% {\n    opacity: 1;\n    transform: translateY(0) translateX(0) rotate(0); } }\n\n.tx-an-3 {\n  display: inline-block;\n  animation: tx-an-3 var(--easeOutOne) forwards;\n  opacity: 0; }\n\n@keyframes tx-an-3 {\n  0% {\n    opacity: 0;\n    transform: translateX(100px) scale(10);\n    filter: blur(5); }\n  100% {\n    opacity: 1;\n    transform: translateX(0) scale(1);\n    filter: blur(0); } }\n\n.tx-an-4 {\n  display: inline-block;\n  animation: tx-an-4 var(--easeOutOne) forwards;\n  opacity: 0; }\n\n@keyframes tx-an-4 {\n  0% {\n    opacity: 0;\n    transform: translateX(100px); }\n  100% {\n    opacity: 1;\n    transform: translateX(0px); } }\n\n.tx-an-5 {\n  display: inline-block;\n  animation: tx-an-5 var(--easeOutOne) forwards;\n  opacity: 0; }\n\n@keyframes tx-an-5 {\n  0% {\n    opacity: 0;\n    transform: translateY(100px); }\n  100% {\n    opacity: 1;\n    transform: translateY(0px); } }\n\n.tx-an-6 {\n  display: inline-block;\n  animation: tx-an-6 var(--easeOutBack) forwards;\n  opacity: 0; }\n\n@keyframes tx-an-6 {\n  0% {\n    opacity: 0;\n    transform: scale(0); }\n  100% {\n    opacity: 1;\n    transform: scale(1); } }\n\n.tx-an-7 {\n  display: inline-block;\n  animation: tx-an-7 var(--easeOutCirc) forwards;\n  opacity: 0; }\n\n@keyframes tx-an-7 {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.tx-an-8 {\n  display: inline-block;\n  animation: tx-an-8 var(--easeOutQuart) forwards;\n  opacity: 0; }\n\n@keyframes tx-an-8 {\n  0% {\n    filter: blur(5px);\n    opacity: 0; }\n  100% {\n    filter: blur(0px);\n    opacity: 1; } }\n\n.tx-an-9 {\n  display: inline-block;\n  animation: tx-an-9 var(--easeOutQuart) forwards;\n  opacity: 0; }\n\n@keyframes tx-an-9 {\n  0% {\n    transform: scale(1.3);\n    opacity: 0; }\n  100% {\n    transform: scale(1);\n    opacity: 1; } }\n\n.tx-an-10 {\n  display: inline-block;\n  animation: tx-an-10 var(--easeOutCirc) forwards;\n  opacity: 0; }\n\n@keyframes tx-an-10 {\n  0% {\n    opacity: 0;\n    transform: translateY(100px); }\n  50% {\n    opacity: 1;\n    filter: blur(0px);\n    transform: translateY(0px); }\n  100% {\n    opacity: 0;\n    filter: blur(1px);\n    transform: translateY(-100px) scale(0.8); } }\n\n.scale-1 {\n  display: block;\n  animation: scale-1 var(--easeOutThree) forwards;\n  opacity: 0;\n  transform-origin: center; }\n\n@keyframes scale-1 {\n  0% {\n    transform: scale(0); }\n  50% {\n    filter: blur(0px);\n    opacity: 1;\n    transform: scale(1); }\n  100% {\n    filter: blur(5px);\n    opacity: 0;\n    transform: scale(2); } }\n";
    styleInject(css_248z);

    function TxtAnime() {

        this.animate = function (element, options) {

            // selector
            if (typeof element === 'string') {
                this.el = Array.from(document.querySelectorAll(element));
            } else if (typeof element === 'object') {

                if (element instanceof NodeList) {
                    this.el = Array.from(element);
                } else if (element instanceof Element) {
                    this.el = [element];
                }

            }

            // default options
            this.default = {
                effect: 'tx-an-1',
                delayStart: 0,
                delay: 0.05,
                duration: 0.7,
                loop: true,
                loopTime: 2000,
                overflow: true
            };

            // options
            this.options = Object.assign(this.default, options);

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
                    el.innerHTML = el.textContent.replace(/\S/g, `<span>$&</span>`);

                    let spn = Array.from(el.querySelectorAll('span'));

                    setTimeout(() => {
                        startAnime();
                    }, delayStart * 1000);

                    // add efects
                    function startAnime() {
                        spn.forEach((tx, index) => {

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
                }, loopTime);
            }
        };

        this.scale = function (element, options) {
            // selector
            if (typeof element === 'string') {
                this.el = Array.from(document.querySelectorAll(element));
            } else if (typeof element === 'object') {

                if (element instanceof NodeList) {
                    this.el = Array.from(element);
                } else if (element instanceof Element) {
                    this.el = [element];
                }

            }

            // default options
            this.default = {
                effect: 'scale-1',
                delayStart: 0,
                delay: 1.5,
                duration: 2,
                loop: true,
                text: ['Go', 'To', 'Site'],
            };

            // options
            this.options = Object.assign(this.default, options);

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
                for (let i = 0; i < text.length; i++) {
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

                    }, delay * 1000);

                });
            }

            // delayStart
            setTimeout(() => {
                startScale();
            }, delayStart * 1000);
        };

    }

    if (typeof window !== 'undefined') {
        window.TxtAnime = TxtAnime;
    }

    exports.TxtAnime = TxtAnime;

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

}));