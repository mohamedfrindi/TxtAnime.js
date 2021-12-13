import './../index';
// site index.scss
import './index.scss'
import './responsive.scss'
// hljs code disign
import './hljs.scss'



hljs.initHighlightingOnLoad();

// site ------------------------
class MySite {
    constructor () {
        return this.run()
    }

    run () {
        this.addEffect()
        this.menuBar()
    }

    addEffect () {

        // txt.animate()
        let d_1 = document.querySelector('.d-1 .demo-view h2');
        let d_2 = document.querySelector('.d-2 .demo-view h2');
        let d_3 = document.querySelector('.d-3 .demo-view h2');
        let d_4 = document.querySelector('.d-4 .demo-view h2');
        let d_5 = document.querySelector('.d-5 .demo-view h2');
        let d_6 = document.querySelector('.d-6 .demo-view h2');
        let d_7 = document.querySelector('.d-7 .demo-view h2');
        let d_8 = document.querySelector('.d-8 .demo-view h2');
        let d_9 = document.querySelector('.d-9 .demo-view h2');
        let d_10 = document.querySelector('.d-10 .demo-view h2');

        // txt.scale()
        let d_11 = document.querySelector('.d-11 .demo-view .d-11-scale');
        let d_12 = document.querySelector('.d-12 .demo-view .d-12-scale');

        // txt.overlay()
        let d_13 = document.querySelector('.d-13 .demo-view h2');
        let d_14 = document.querySelector('.d-14 .demo-view h2');
        let d_15 = document.querySelector('.d-15 .demo-view h2');

        // txt.typed()
        let d_16 = document.querySelector('.d-16 .demo-view h3');
        let d_17 = document.querySelector('.d-17 .demo-view span.d-17-type');
        let d_18 = document.querySelector('.d-18 .demo-view span.d-18-type');


        let txt = new TxtAnime();

        // txt.animate
        txt.animate(d_1 , {
            effect : 'tx-an-1',
            loop : true,
            delay : 0.07
        })
        txt.animate(d_2, {
            effect : 'tx-an-2',
            loop : true,
            loopTime : 2.3,
            delay : 0.07
        })
        txt.animate(d_3, {
            effect : 'tx-an-3',
            loop : true,
            loopTime : 5,
            delay : 0.3,
            overflow : false
        })
        txt.animate(d_4, {
            effect : 'tx-an-4',
            loop : true,
        })
        txt.animate(d_5, {
            effect : 'tx-an-5',
            loop : true,
            loopTime : 1.7,
        })
        txt.animate(d_6, {
            effect : 'tx-an-6',
            loop : true,
            loopTime : 4,
            delay : 0.1,
            overflow : false
        })
        txt.animate(d_7, {
            effect : 'tx-an-7',
            loop : true,
            loopTime : 2.1
        })
        txt.animate(d_8, {
            effect : 'tx-an-8',
            loop : true,
            loopTime : 2.3
        })
        txt.animate(d_9, {
            effect : 'tx-an-9',
            loop : true,
            loopTime : 2,
        })
        txt.animate(d_10, {
            effect : 'tx-an-10',
            loop : true,
            loopTime : 1.7,
            duration : 2,
            delay: 0,
        })

        // txt.scale
        txt.scale(d_11, {
            text : ['Go' , 'To' , 'Site'],
            effect : 'scale-1',
        })
        txt.scale(d_12, {
            text : ['Go' , 'To' , 'Site'],
            effect : 'scale-2',
        })

        // txt.overlay
        txt.overlay(d_13, {
            effect : 'overlay-1',
            overlayColor : '#d9b1a8',
            textColor : '#5a5a5a'
        })
        txt.overlay(d_14, {
            effect : 'overlay-2',
            overlayColor : '#b8b5dd',
            textColor : '#5a5a5a'
        })
        txt.overlay(d_15 , {
            effect : 'overlay-3',
            overlayColor : '#FFC716',
            loop : true,
        })

        // txt.typed
        txt.typed(d_16, {
            effect : 'typed-1',
            text : ['Try' , 'Free' , 'Typed'],
            loopTime : 2
        })
        txt.typed(d_17, {
            effect : 'typed-2',
            text : ['web designer' , 'web developer'],
            loopTime : 2,
            typedSpeed : 0.01
        })
        txt.typed(d_18, {
            effect : 'typed-3',
            text : ['developer' , 'freelancer'],
            loopTime : 1.5,
            typedSpeed : .5,
        })

    }

    menuBar () {
        let btn_menu = document.querySelector('.btn-menu');
        let btn_menu_close = document.querySelector('.btn-menu-close');
        let nav_bar = document.querySelector('.nav-bar');

        btn_menu.addEventListener('click' , function () {
            nav_bar.classList.add('responseve')
            nav_bar.classList.remove('hide')
        })
        btn_menu_close.addEventListener('click' , function () {
            nav_bar.classList.add('hide')
        })
    }
}

new MySite()