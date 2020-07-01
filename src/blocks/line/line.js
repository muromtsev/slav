class Line {
    constructor(elem) {
        this.container = elem;
        this.findDomElement();

    }
    findDomElement() {
        this.line = this.container.querySelector('.js-line');
        this.text = this.container.querySelector('.js-line__text');
        // console.log(this.text);
    }
    getDomElement() {
        return this.line;
    }
    setValueElement({ value='', size='', }={}) {
        this.text.innerHTML = `${value} ${size}`; 
    }
}

export default Line