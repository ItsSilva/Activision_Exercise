import * as components from './components/indexFather.js';

class Container extends HTMLElement {
    constructor(){
        super();
            this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML = `
        <navbar-component></navbar-component>
         `
    }
}
customElements.define('app-container', Container);