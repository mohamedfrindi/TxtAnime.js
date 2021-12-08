// class animate text
function TxtAnime () {

    this.animate = function(element , options) {

        // selector
        if (typeof element === 'string') {
            this.el = Array.from(document.querySelectorAll(element))
        }else if (typeof element === 'object') {

            if (element instanceof NodeList) {
                this.el = Array.from(element)
            }else if (element instanceof Element) {
                this.el = [element]
            }

        }

        // default options
        this.default = {
            effect : 'tx-an-1',
            delayStart : 0, 
            delay: 0.05,
            duration: 0.7, 
            loop : true,
            loopTime : 2000,
            overflow : true
        }

        // options
        this.options = Object.assign(this.default , options)

        // functions
        let elmnt = this.el
        let effect = this.options.effect;
        let delayStart = this.options.delayStart;
        let delay = this.options.delay;
        let duration = this.options.duration;
        let loop = this.options.loop;
        let loopTime = this.options.loopTime;
        let overflow = this.options.overflow;

        txtAnimations()
        function txtAnimations() {

            // -----
            elmnt.forEach((el) => {

                // replace text or span
                el.innerHTML = el.textContent.replace(/\S/g , `<span>$&</span>`)
    
                let spn = Array.from(el.querySelectorAll('span'));
    
                setTimeout(() => {
                    startAnime()
                }, delayStart * 1000)
    
                // add efects
                function startAnime() {
                    spn.forEach((tx , index) => {

                        if (overflow == true) {
                            tx.parentNode.style.overflow = 'hidden';
                        }

                        tx.parentNode.style.display = 'block'
                        tx.parentNode.style.opacity = '1';
    
                        tx.classList.add(effect)
                        tx.style.display = 'inline-flex'
    
                        tx.style.animationDelay = `${index * delay}s`
                        tx.style.animationDuration = `${duration}s`
                    })
                }
            })
        }

        // loop and loope Time 
        if (loop == true) {
            setInterval(() => {
                txtAnimations()
            },loopTime)
        }
    }

    this.scale = function(element , options) {
         // selector
        if (typeof element === 'string') {
            this.el = Array.from(document.querySelectorAll(element))
        }else if (typeof element === 'object') {

            if (element instanceof NodeList) {
                this.el = Array.from(element)
            }else if (element instanceof Element) {
                this.el = [element]
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
        }

        // options
        this.options = Object.assign(this.default , options)

        // functions
        let elmnt = this.el
        let effect = this.options.effect;
        let delayStart = this.options.delayStart;
        let delay = this.options.delay;
        let duration = this.options.duration;
        let loop = this.options.loop;
        let loopTime = this.options.loopTime;
        let overflow = this.options.overflow;
        let text = this.options.text;

        
        // func 
        function startScale() {

            // parent styles
            elmnt.forEach((el) => {
                el.style.position = 'relative'
            })
            
            // creat spn on div
            for (let i = 0 ; i < text.length ; i++) {
                let spn = document.createElement('span');
                spn.innerHTML = text[i]

                elmnt.forEach((el) => {
                    el.appendChild(spn)
                })

                spn.classList.remove(effect)
            }

            // main func
            elmnt.forEach((el) => {
                let spnArr = Array.from(el.querySelectorAll('span'))

                let start = 0;

                spnArr.forEach((sp) => {
                    sp.style.display = 'none';

                    spnArr[start].style.display = 'block'
                    spnArr[start].classList.add(effect)

                    if (sp.classList.contains(effect)) {
                        sp.style.animationDuration = `${duration}s`
                    }
                })

                let startInterval = setInterval(() => {

                    spnArr[start].classList.remove(effect)
                    spnArr[start].style.display = 'none'

                    start++

                    if (start > text.length - 1) {
                        start = 0;
                        
                        if (loop !== true) {
                            el.innerHTML = ''
                            clearInterval(startInterval)
                        }
                    }

                    spnArr[start].classList.add(effect)
                    spnArr[start].style.display = 'block';

                    spnArr.forEach((spn) => {
                        if (spn.classList.contains(effect)) {
                            spn.style.animationDuration = `${duration}s`
                        }
                    })

                },delay * 1000)

            })
        }

        // delayStart
        setTimeout(() => {
            startScale()
        },delayStart * 1000)
    }

}

window.TxtAnime = TxtAnime

export {TxtAnime}