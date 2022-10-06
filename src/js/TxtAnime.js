import {
    Txt_an_1, Txt_an_2, Txt_an_3, Txt_an_4, Txt_an_5, Txt_an_6, Txt_an_7, Txt_an_8, Txt_an_9
} from "./demos";

class TxtAnime {

    constructor(element , options) {

        this.element = element;
        this.options = options;

        this.run();
    }

    run () {
        let self = this;
        let effect = self.options.effect;
        // ===============================================================

        // txt-an-1
        if (effect === "txt-an-1") {
            new Txt_an_1(self.element, self.options);
        }

        // txt-an-2
        if (effect === "txt-an-2") {
            new Txt_an_2(self.element, self.options);
        }

        // txt-an-3
        if (effect === "txt-an-3") {
            new Txt_an_3(self.element, self.options);
        }

        // =================

        // txt-an-4
        if (effect === "txt-an-4") {
            new Txt_an_4(self.element, self.options);
        }

        // txt-an-5
        if (effect === "txt-an-5") {
            new Txt_an_5(self.element, self.options);
        }

        // ==================

        // txt-an-6
        if (effect === "txt-an-6") {
            new Txt_an_6(self.element, self.options);
        }

        // ===================

        // txt-an-7
        if (effect === "txt-an-7") {
            new Txt_an_7(self.element, self.options);
        }

        // txt-an-8
        if (effect === "txt-an-8") {
            new Txt_an_8(self.element, self.options);
        }

        // txt-an-9
        if (effect === "txt-an-9") {
            new Txt_an_9(self.element, self.options);
        }
    }
}

export {TxtAnime};