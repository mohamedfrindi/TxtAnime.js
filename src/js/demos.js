// animations =================================================================
import { gsap, Expo } from "gsap";

// ============================================================================
export class Txt_an_1 {
    // constractor
    constructor(element, options) {
        // element
        this.el = element;

        // default options
        this.default = {
            effect: "txt-an-1",
            delayStart: 0,
            delay: 0.07,
            duration: 0.7,
            repeat: true,
            repeatDelay: 2,
            out: false, // false / true / number
        };

        // options
        this.options = Object.assign(this.default, options);

        // run init func
        this.init();
    }

    init() {
        let self = this;
        // ====================================================

        // selector
        if (typeof self.el === "string") {
            self.el = Array.from(document.querySelectorAll(self.el));
        } else if (typeof self.el === "object") {
            if (self.el instanceof NodeList) {
                self.el = Array.from(self.el);
            } else if (self.el instanceof Element) {
                self.el = [self.el];
            }
        }

        // add class for main el
        self.el.forEach((el) => {
            el.classList.add(self.options.effect);
        });

        // // functions
        self.start();
        // self.overflow();
    }

    splitText() {
        let self = this;
        let regExp =
            /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*|\S/g;

        // ===============================================================
        self.el.forEach((el) => {
            // replace text to spans
            el.innerHTML = el.textContent.replace(regExp, `<span>$&</span>`);
        });
    }

    start() {
        let self = this;
        // ======================================================

        setTimeout(() => {
            // run animationIn
            self.animationIn();

            // run animationOut
            if (self.options.out !== false) {
                if (self.options.out === true) {
                    setTimeout(() => {
                        self.animationOut();
                    }, 3 * 1000);
                } else {
                    setTimeout(() => {
                        self.animationOut();
                    }, self.options.out * 1000);
                }
            }
        }, self.options.delayStart * 1000);
    }

    animationIn() {
        let self = this;

        // ========================================================================
        self.splitText();

        // add effect
        let spans;
        self.el.forEach((el) => {
            spans = el.querySelectorAll("span");
        });

        gsap.to(spans, {
            y: 0,
            x: 0,
            rotate: 0,
            opacity: 1,

            stagger: self.options.delay,
            duration: self.options.duration,
            repeat: self.options.repeat === true ? -1 : false,
            repeatDelay: self.options.repeatDelay,
            // yoyo : true,
            ease: Expo.easeOut,
        });
    }

    animationOut() {
        let self = this;

        // ==============================================================
        // ............................
        // ............................
    }
}
// ========================================
export class Txt_an_2 extends Txt_an_1{

    // constractor
    constructor(element, options) {

        // clone from txt-an-1
        super(element, options);

        // change default options
        this.default = {
            ...this.default,
            effect: "txt-an-2",
            delay: 0.5,
        };

        // assign options
        this.options = Object.assign(this.default, options);
    }

    animationIn() {
        let self = this;

        // ========================================================================
        self.splitText();

        // add effect
        let spans;
        self.el.forEach((el) => {
            spans = el.querySelectorAll("span");
        });

        let tl = gsap.timeline({
            defaults: {
                duration: self.options.duration,
                ease: Expo.easeOut,
            },
        });

        tl.to(spans, {
            scale: 1,
            filter: "blur(0)",
            opacity: 1,
            stagger: self.options.delay,
            yoyo: true,
            repeat: self.options.repeat === true ? -1 : false,
            repeatDelay: self.options.repeatDelay,
        });
    }

}
// ========================================
export class Txt_an_3 extends Txt_an_1{
    // constractor
    constructor(element, options) {

        // clone from txt-an-1
        super(element, options);

        // change default options
        this.default = {
            ...this.default,
            effect: "txt-an-3",
            delay: 0.1,
            duration: 0.1,
        };

        // assign options
        this.options = Object.assign(this.default, options);

    }

    animationIn() {
        let self = this;

        // ========================================================================
        self.splitText();

        // add effect
        let spans;
        self.el.forEach((el) => {
            spans = el.querySelectorAll("span");
        });

        let tl = gsap.timeline({
            defaults: {
                duration: self.options.duration,
            },
        });

        tl.to(spans, {
            filter: "blur(0)",
            opacity: 1,

            stagger: self.options.delay,
            repeat: self.options.repeat === true ? -1 : false,
            repeatDelay: self.options.repeatDelay,
        });
    }
}
// ========================================
export class Txt_an_4 extends Txt_an_1{
    // constractor
    constructor(element, options) {

        // clone from txt-an-1
        super(element, options);

        // change default options
        this.default = {
            ...this.default,
            effect: "txt-an-4",
            delay: 0,
            duration: 1,
            text: ["Go", "To", "Site"],
        };

        // assign options
        this.options = Object.assign(this.default, options);

    }

    animationIn() {
        let self = this;

        // ========================================================================
        // add text for el
        self.options.text.map((txt) => {
            // craete spans
            let spn = document.createElement("span");
            spn.innerHTML = txt;

            // add spans for el
            self.el.map((el) => {
                el.appendChild(spn);
            });
        });

        // add effect
        // self.el.forEach((el) => {
        //     // vars
        //     let spnArr = Array.from(el.querySelectorAll("span"));
        //     let start = -1;
        //     let isPoused = false;

        //     // animation
        //     const animate = () => {

        //         // active animation to spans
        //         let startInterval = setInterval(() => {

        //             // counter +=1
        //             start++;

        //             // reset counter
        //             if (start >= self.options.text.length) {
        //                 // reset counter
        //                 isPoused = true;
        //                 start = -1;

        //                 // repeat trun off
        //                 if (self.options.repeat === false) {
        //                     clearInterval(startInterval);
        //                     setTimeout(() => {
        //                         el.innerHTML = "";
        //                     } , self.options.delay * 1000)
        //                 }

        //                 // // repeatDelay
        //                 if (isPoused === true) {
        //                     clearInterval(startInterval);

        //                     setTimeout(() => {
        //                         isPoused = false;
        //                         animate();
        //                     }, self.options.repeatDelay * 1000);
        //                 }
        //             }

        //             // turn animation an gsap
        //             if (spnArr[start]) {
        //                 let tl = gsap.timeline({
        //                     defaults: {
        //                         duration: self.options.duration,
        //                         ease: Expo.easeOut,
        //                     },
        //                 });
        //                 tl.to(spnArr[start], {
        //                     scale: 1,
        //                     opacity: 1,
        //                     filter: "blur(0px)",
        //                 });
        //                 tl.to(spnArr[start], {
        //                     scale: 2,
        //                     opacity: 0,
        //                     filter: "blur(5px)",
        //                 });
        //                 tl.set(spnArr[start], {
        //                     opacity: 0,
        //                     scale: 0,
        //                 });
        //             }

        //         }, self.options.delay * 1000);
        //     };
        //     animate();
        // });

        self.el.forEach((el) => {
            let counter = 0;
            let isRepeat = true;

            // animate span
            const animateSpan = () => {
                // create spn
                el.innerHTML = "";
                self.options.text.map((txt) => {
                    let spn = document.createElement("span");
                    spn.innerHTML = txt;

                    el.appendChild(spn);
                });

                // all spans
                let spans = el.querySelectorAll("span");

                // gsap animation
                const gsapMainFunc = () => {
                    // is repeat false
                    if (isRepeat === false) {
                        return;
                    }

                    // is repeat true
                    let tl = gsap.timeline({
                        defaults: {
                            duration: self.options.duration,
                            ease: Expo.easeOut,
                        },
                    });
                    tl.to(spans[counter], {
                        scale: 1.3,
                        opacity: 1,
                        filter: "blur(0px)",
                    });
                    tl.to(spans[counter], {
                        scale: 1,
                        delay: -1,
                    });
                    tl.to(spans[counter], {
                        scale: 2,
                        opacity: 0,
                        filter: "blur(5px)",
                    });
                    tl.set(spans[counter], {
                        opacity: 0,
                        scale: 0,
                        delay: self.options.delay,
                    });

                    tl.eventCallback("onComplete", () => {
                        counter++;

                        if (counter > self.options.text.length - 1) {
                            counter = 0;

                            if (self.options.repeat === false) {
                                isRepeat = false;
                                el.innerHTML = "";
                            }

                            if (self.options.repeat === true) {
                                isRepeat = true;
                            }
                        }

                        gsapMainFunc();
                    });
                };

                gsapMainFunc();
            };

            animateSpan();
        });
    }

}
// ========================================
export class Txt_an_5 extends Txt_an_4{
    // constractor
    constructor(element, options) {

        // clone from txt-an-1
        super(element, options);

        // change default options
        this.default = {
            ...this.default,
            effect: "txt-an-5",
            delay: 0,
            duration: 1,
            text: ["Go", "To", "Site"],
        };

        // assign options
        this.options = Object.assign(this.default, options);

    }

    animationIn() {
        let self = this;

        // ========================================================================
        // add effect
        self.el.forEach((el) => {
            let counter = 0;
            let isRepeat = true;

            // animate span
            const animateSpan = () => {
                // create spn
                el.innerHTML = "";
                self.options.text.map((txt) => {
                    let spn = document.createElement("span");
                    spn.innerHTML = txt;

                    el.appendChild(spn);
                });

                // all spans
                let spans = el.querySelectorAll("span");

                // gsap animation
                const gsapMainFunc = () => {
                    // is repeat false
                    if (isRepeat === false) {
                        return;
                    }

                    // is repeat true
                    let tl = gsap.timeline({
                        defaults: {
                            duration: self.options.duration,
                            ease: Expo.easeOut,
                        },
                    });
                    tl.to(spans[counter], {
                        scale: 1,
                        opacity: 1,
                        filter: "blur(0px)",
                    });
                    tl.to(spans[counter], {
                        scale: 0,
                        opacity: 0,
                        filter: "blur(5px)",
                    });
                    tl.set(spans[counter], {
                        opacity: 0,
                        scale: 5,
                        delay: self.options.delay,
                    });

                    tl.eventCallback("onComplete", () => {
                        counter++;

                        if (counter > self.options.text.length - 1) {
                            counter = 0;

                            if (self.options.repeat === false) {
                                isRepeat = false;
                                el.innerHTML = "";
                            }

                            if (self.options.repeat === true) {
                                isRepeat = true;
                            }
                        }

                        gsapMainFunc();
                    });
                };

                gsapMainFunc();
            };

            animateSpan();
        });
    }
}
// ========================================
export class Txt_an_6 extends Txt_an_1 {
    // constractor
    constructor(element, options) {
        // clone from txt-an-1
        super(element, options);

        // change default options
        this.default = {
            ...this.default,
            effect: "txt-an-6",
            delay: 0.07,
            duration: 2,
            repeatDelay: 3,
            overlayBackground: "#03a9f4",
        };

        // assign options
        this.options = Object.assign(this.default, options);

        // repeat
        this.repeat();
    }

    animationIn() {
        let self = this;

        // ========================================================================
        // add text and overlay for el
        self.el.forEach((el) => {
            // craete span text
            let spn = document.createElement("span");
            spn.innerHTML = el.textContent;

            // craete div overlay
            let overlay = document.createElement("div");
            overlay.classList.add("sig-txt-overlay");

            // append spn and overlay for el
            el.innerHTML = "";
            el.appendChild(spn);
            el.appendChild(overlay);
        });

        // add effect
        let spans;
        let overlay;
        self.el.forEach(el => {
            spans = el.querySelectorAll("span");
            overlay = el.querySelectorAll(".sig-txt-overlay");
        })

        gsap.set(spans, {
            animationDelay: 1,
            animationDuration: 0.7,
        });

        gsap.set(overlay, {
            animationDelay: self.options.delay,
            animationDuration: self.options.duration,
            background: self.options.overlayBackground,
        });
    }

    repeat() {
        let self = this;

        // ======================================================================
        if (self.options.repeat === true) {
            setInterval(() => {
                self.start();
            }, self.options.repeatDelay * 1000);
        }
    }
}
// ========================================
export class Txt_an_7 extends Txt_an_1{
    // constractor
    constructor(element, options) {

        // clone from txt-an-1
        super(element, options);

        // change default options
        this.default = {
            ...this.default,
            effect: "txt-an-7",
            delay: 0.05,
            duration: 0.07,
            text: ["Try", "Free", "Typed"],
        };

        // assign options
        this.options = Object.assign(this.default, options);

    }

    animationIn() {
        let self = this;
        // ========================================================================
        // add effect
        self.el.forEach((el) => {
            // index start
            let main_counter = -1;
            let spn_counter = -1;

            // add effect for text selected
            function startEffect() {
                // add to span for el
                el.innerHTML = "";
                let spn = document.createElement("span");
                el.appendChild(spn);

                // creat main span
                let getSpan = el.querySelector("span");
                if (getSpan)
                    getSpan.textContent = self.options.text[main_counter];

                // convert text content to array the spans
                self.splitText();

                // get all spans
                let getAllSpans = Array.from(el.querySelectorAll("span"));

                // span hide out
                function spanHideOut() {
                    let lastIndex = getAllSpans.length - 1;
                    setTimeout(() => {
                        if (getAllSpans[lastIndex])
                            getAllSpans[lastIndex].style.display = "none";

                        let intervalOut = setInterval(() => {
                            lastIndex--;

                            if (getAllSpans[lastIndex])
                                getAllSpans[lastIndex].style.display = "none";

                            if (lastIndex <= 0) {
                                clearInterval(intervalOut);
                                lastIndex = getAllSpans.length - 1;
                                el.innerHTML = "";

                                // =========================
                                // repeat option
                                const looping = () => {
                                    main_counter++;

                                    // reset main_counter
                                    if (
                                        main_counter >
                                        self.options.text.length - 1
                                    ) {
                                        main_counter = 0;

                                        if (self.options.repeat === false) {
                                            el.remove();
                                        }
                                    }

                                    // run startEffect
                                    setTimeout(() => {
                                        startEffect();
                                    }, self.options.delay * 1000);
                                };
                                looping();
                            }
                        }, self.options.duration * 1000);
                    }, 2 * 1000);
                }

                // span show in
                let interval = setInterval(() => {
                    // +1
                    spn_counter++;

                    // reset counter
                    if (spn_counter > getAllSpans.length - 1) {
                        clearInterval(interval);
                        spn_counter = -1;
                        spanHideOut();
                    }

                    // show spn active
                    if (getAllSpans[spn_counter])
                        getAllSpans[spn_counter].style.display = "inline-block";
                }, self.options.duration * 1000);
            }

            startEffect();
        });
    }
}
// ========================================
export class Txt_an_8 extends Txt_an_7{
    // constractor
    constructor(element, options) {

        // clone from txt-an-1
        super(element, options);

        // change default options
        this.default = {
            ...this.default,
            effect: "txt-an-8",
            delay: 0.05,
            duration: 0.02,
            text: ["Designer", "Developer"],
        };

        // assign options
        this.options = Object.assign(this.default, options);
    }

    animationIn() {
        let self = this;
        // ========================================================================
        // add effect
        self.el.forEach((el) => {
            // index start
            let main_counter = -1;
            let spn_counter = -1;

            // add effect for text selected
            function startEffect() {
                // add to span for el
                el.innerHTML = "";
                let spn = document.createElement("span");
                el.appendChild(spn);

                // creat main span
                let getSpan = el.querySelector("span");
                if (getSpan)
                    getSpan.textContent = self.options.text[main_counter];

                // convert text content to array the spans
                self.splitText();

                // get all spans
                let getAllSpans = Array.from(el.querySelectorAll("span"));

                // span hide out
                function spanHideOut() {
                    let lastIndex = getAllSpans.length - 1;
                    setTimeout(() => {
                        if (getAllSpans[lastIndex])
                            getAllSpans[lastIndex].style.display = "none";

                        let intervalOut = setInterval(() => {
                            lastIndex--;

                            if (getAllSpans[lastIndex])
                                getAllSpans[lastIndex].style.display = "none";

                            if (lastIndex <= 0) {
                                clearInterval(intervalOut);
                                lastIndex = getAllSpans.length - 1;
                                el.innerHTML = "";

                                // =========================
                                // repeat option
                                const looping = () => {
                                    main_counter++;

                                    // reset main_counter
                                    if (
                                        main_counter >
                                        self.options.text.length - 1
                                    ) {
                                        main_counter = 0;

                                        if (self.options.repeat === false) {
                                            el.remove();
                                        }
                                    }

                                    // run startEffect
                                    setTimeout(() => {
                                        startEffect();
                                    }, self.options.delay * 1000);
                                };
                                looping();
                            }
                        }, self.options.duration * 1000);
                    }, 2 * 1000);
                }

                // span show in
                let interval = setInterval(() => {
                    // +1
                    spn_counter++;

                    // reset counter
                    if (spn_counter > getAllSpans.length - 1) {
                        clearInterval(interval);
                        spn_counter = -1;
                        spanHideOut();
                    }

                    // show spn active
                    if (getAllSpans[spn_counter])
                        getAllSpans[spn_counter].style.display = "inline-block";
                }, self.options.duration * 1000);
            }

            startEffect();
        });
    }
}
// ========================================
export class Txt_an_9 extends Txt_an_7{
    // constractor
    constructor(element, options) {

        // clone from txt-an-1
        super(element, options);

        // change default options
        this.default = {
            ...this.default,
            effect: "txt-an-9",
            delay: 1,
            duration: 0.5,
            text: ["Designer", "Developer"],
        };

        // assign options
        this.options = Object.assign(this.default, options);

    }

    animationIn() {
        let self = this;

        // ========================================================================
        // add effect
        self.el.forEach((el) => {
            let counter = 0;
            let isRepeat = true;

            // animate span
            const animateSpan = () => {
                // create spn
                el.innerHTML = "";
                self.options.text.map((txt) => {
                    let spn = document.createElement("span");
                    spn.innerHTML = txt;

                    el.appendChild(spn);
                });

                // all spans
                let spans = el.querySelectorAll('span')

                // gsap animation
                const gsapMainFunc = () => {
                    // is repeat false
                    if (isRepeat === false) {
                        return;
                    }

                    // is repeat true
                    let tl = gsap.timeline({
                        defaults: {
                            duration: self.options.duration,
                            ease: Expo.easeOut,
                        },
                    });

                    tl.set(spans[counter], {
                        display: "inline-block",
                    });
                    tl.to(spans[counter], {
                        y: "0%",
                        opacity: 1,
                    });

                    tl.set(spans[counter], {
                        display: "none",
                        y: "100%",
                        opacity: 0,
                        delay: self.options.delay,
                    });

                    tl.eventCallback("onComplete", () => {
                        counter++;

                        if (counter > self.options.text.length - 1) {
                            counter = 0;

                            if (self.options.repeat === false) {
                                isRepeat = false;
                                el.innerHTML = self.options.text[0];
                            }

                            if (self.options.repeat === true) {
                                isRepeat = true;
                            }
                        }

                        gsapMainFunc();
                    });
                };

                gsapMainFunc();
            };

            animateSpan();
        });
    }
}
// ========================================