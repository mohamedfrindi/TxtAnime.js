import { TxtAnime } from '../../dist/TxtAnime.esm';

// site index.scss
import './index.scss'
import './responsive.scss'
// hljs code disign
import './hljs.scss'

hljs.initHighlightingOnLoad();

// site ------------------------
class MySite {
    constructor () {
        this.run()
    }

    run () {
        this.addEffect()
        this.menuBar()
    }

    addEffect () {

        // vars
        let d_1 = document.querySelector('.d-1 .demo-view h2');
        let d_2 = document.querySelector('.d-2 .demo-view h2');
        let d_3 = document.querySelector('.d-3 .demo-view h2');
        let d_4 = document.querySelector('.d-4 .demo-view .d-4-bg');
        let d_5 = document.querySelector('.d-5 .demo-view .d-5-bg');
        let d_6 = document.querySelector('.d-6 .demo-view h2');
        let d_7 = document.querySelector('.d-7 .demo-view h3');
        let d_8 = document.querySelector('.d-8 .demo-view span.d-8-type');
        let d_9 = document.querySelector('.d-9 .demo-view span.d-9-type');

        // functions
        new TxtAnime(d_1, {
            effect: "txt-an-1",
        });
        new TxtAnime(d_2, {
            effect: "txt-an-2",
        });
        new TxtAnime(d_3, {
            effect: "txt-an-3",
        });
        new TxtAnime(d_4, {
            effect : 'txt-an-4',
            text : ['Go' , 'To' , 'Site'],
        })
        new TxtAnime(d_5, {
            effect: "txt-an-5",
            text: ["Go", "To", "Site"],
        });
        new TxtAnime(d_6 , {
            effect : 'txt-an-6',
            overlayBackground : '#FFC716',
        })
        new TxtAnime(d_7, {
            effect : 'txt-an-7',
            text : ['Try' , 'Free' , 'Typed'],
        })
        new TxtAnime(d_8, {
            effect: "txt-an-8",
            text: ["Designer", "Developer"],
            delay: 0.5,
        });
        new TxtAnime(d_9, {
            effect: "txt-an-9",
            text: ["Designer", "Developer"],
        });

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