import './../index';
// site index.scss
import './index.scss'
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
    }

    addEffect () {
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
        let d_11 = document.querySelector('.d-11 .demo-view .tx');

        let txt = new TxtAnime();

        txt.animate(d_1 , {
            effect : 'tx-an-1',
            loop : true,
            delay : 0.07
        })

        txt.animate(d_2, {
            effect : 'tx-an-2',
            loop : true,
            loopTime : 2300,
            delay : 0.07
        })

        txt.animate(d_3, {
            effect : 'tx-an-3',
            loop : true,
            loopTime : 5000,
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
            loopTime : 1700,
        })

        txt.animate(d_6, {
            effect : 'tx-an-6',
            loop : true,
            loopTime : 4000,
            delay : 0.1,
            overflow : false
        })

        txt.animate(d_7, {
            effect : 'tx-an-7',
            loop : true,
            loopTime : 2100
        })

        txt.animate(d_8, {
            effect : 'tx-an-8',
            loop : true,
            loopTime : 2300
        })

        txt.animate(d_9, {
            effect : 'tx-an-9',
            loop : true,
            loopTime : 2000,
        })

        txt.animate(d_10, {
            effect : 'tx-an-10',
            loop : true,
            loopTime : 1700,
            duration: 2, 
            delay: 0,
        })

        txt.scale(d_11, {
            text : ['Go' , 'To' , 'Site'],
            effect : 'scale-1',
        })
    }
}

new MySite()