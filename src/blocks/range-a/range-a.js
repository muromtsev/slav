import Line from '../line/line';

class Range_A {
    constructor(element) {
        this.container = element;
        this.line = new Line(document.querySelector('.js-line-box'));
        this.lineElem = this.line.getDomElement();
        this.findDomElement();
        this.handlerInput();
        this.init();

    }
    init() {
        this.headText.innerHTML = this.inp.value;
        this.line.setValueElement({ value: this.inp.value, size: '%'});
    }
    findDomElement() {
        this.inp        = this.container.querySelector('.js-range-a__input');
        this.text       = this.container.querySelector('.js-range-a__text');
        this.headText   = this.container.querySelector('.range-a__head__text');
    }

    writeValue() {
        this.arshin = 71.12; //??????????
        this.result = (this.arshin * (+this.inp.value)).toFixed(2);
        this.text.innerHTML = `${this.result} см`;
        this.headText.innerHTML = this.inp.value;
        this.lineElem.style.width = this.inp.value + '%';
        this.line.setValueElement({value: this.inp.value, size: '%'});
    }
    handlerInput() {
        this.inp.addEventListener('input', this.writeValue.bind(this));
    }


}


let ranges = document.querySelectorAll('.js-range-a');

ranges.forEach(item => new Range_A(item))





export default Range_A