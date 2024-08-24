import * as components from './components/indexFather.js';

class BannerContainer extends HTMLElement {
    constructor(){
        super();
            this.attachShadow({mode: 'open'});
    }
    connectedCallback(){
        this.render();
    }
    render(){
        this.shadowRoot.innerHTML = `
        <banner-component></banner-component>
         `
    }
}
customElements.define('banner-container', BannerContainer);