function TxtAnime () {
    // regex
    const re = /(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0]|\ud83c[\udffb-\udfff])?)*|\S/g

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
                el.innerHTML = el.textContent.replace(re, `<span>$&</span>`);
    
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
                el.style.display = 'flex';
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
            overlayColor : '#03a9f4',
            textColor : '#161414',
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
        let textColor = this.options.textColor;
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
                    elSpn.style.color = textColor
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

    this.typed = function (element , options) {
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
            effect : 'typed-1',
            text : ['Typed for TxtAnime' , 'Try free' , 'JavaScript Plugin'],
            typedSpeed : 0.05,
            timeOut : 1,
            loopTime : 3,
            typedStart : 0
        };

        // options
        this.options = Object.assign(this.default , options);

        // functions
        let elmnt = this.el;
        let effect = this.options.effect;
        let text = this.options.text;
        let typedSpeed = this.options.typedSpeed
        let timeOut = this.options.timeOut
        let loopTime = this.options.loopTime
        let typedStart = this.options.typedStart

        // functions
        function typedStartFunc () {

            // add efect for spn 
            elmnt.forEach((el) => {

                if (effect == 'typed-1' || effect == 'typed-2') {
                    typedFuncOne()
                }

                if (effect == 'typed-3') {
                    typedFuncTwo()
                }

                // typed func one and two
                function typedFuncOne() {

                    // add to span for el 
                    el.innerHTML = ''
                    let spn = document.createElement('span');
                    spn.classList.add(effect)
                    el.appendChild(spn)

                    // index start
                    let index_start = 0;

                    // creat func
                    function startEffect(start) {

                        // creat main span 
                        let getSpan = el.querySelector('span')
                        getSpan.textContent = text[start]

                        // convert text content to array the spans
                        getSpan.innerHTML = getSpan.textContent.replace(re, `<span>$&</span>`);

                        let getAllSpans = Array.from(getSpan.querySelectorAll('span'))


                        function spanHide() {

                            getAllSpans.forEach((spn) => {
                                spn.style.display = 'none'
                            })

                        }
                        spanHide()

                        function spanShow (spnStart) {
                            getAllSpans[spnStart].style.display = 'inline-block'
                        }
                        spanShow (0)

                        function spanHideOut() {
                            
                            let lastIndex = getAllSpans.length - 1

                            function hideOut() {

                                getAllSpans[lastIndex].style.display = 'none'

                                let intervalOut = setInterval(() => {

                                    lastIndex--

                                    if (lastIndex <= 0) {
                                        clearInterval(intervalOut)
                                        getSpan.innerHTML = ''
                                    }

                                    getAllSpans[lastIndex].style.display = 'none'

                                },typedSpeed * 1000)
                            }

                            setTimeout(() => {
                                hideOut()
                            },timeOut * 1000)
                        }

                        let indexStart = 0;
                        let interval = setInterval(() => {

                            indexStart++

                            if (indexStart > getAllSpans.length - 1) {
                                clearInterval(interval)
                                spanHideOut()
                            }else{
                                spanShow(indexStart)
                            }

                        },typedSpeed * 1000)

                    }

                    // startEffect(index_start)

                    let moveinterval = setInterval(() => {

                        index_start++;

                        if (index_start > text.length) {

                            index_start = 0

                        }else{

                        startEffect(index_start - 1)

                    }

                    },loopTime * 1000)

                }

                // typed func three
                function typedFuncTwo() {

                    // add to span for el 
                    el.innerHTML = ''

                    for (let i = 0 ; i < text.length ; i++) {

                        let spn = document.createElement('span');

                        spn.textContent = text[i]

                        el.appendChild(spn)

                    }

                    // creat func start effect
                    function startEffectTwo(start) {

                        // el style
                        el.style.overflow = 'hidden'

                        // select all children span the el
                        let spans = Array.from(el.querySelectorAll('span'))

                        // hide all spans
                        spans.forEach((spn) => {
                            spn.classList.add(`${effect}`)

                            spn.style.animationDuration = `${typedSpeed}s`
                        })
                        spans[start].classList.add('show')

                        setInterval(() => {

                            spans[start].classList.remove('show')

                            start++

                            if (start > text.length - 1) {
                                start = 0
                            }

                            spans[start].classList.add('show')

                        }, loopTime * 1000)
                    }

                    startEffectTwo(0)

                }

            })

        }

        setTimeout(() => {
            typedStartFunc()
        }, typedStart * 1000)
    }

}

export {TxtAnime}